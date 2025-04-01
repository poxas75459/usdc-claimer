/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5WiCAmPgTEq8LPVZKbqrbAx6VT7jLJ7H1m65bw3JDiyABZkTmGXECmcC18sGQHE4Tf7Z9usc61UmB4ZahttM462q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WAfW4d8UojG2LxQmmpymSSVvDCU2P5czN7AgeuE6UYcegjBVrkBmuhtN8SsvbmQ4b4iwbiqeJY85Hcf74wbHufp",
  "key1": "5z8w8UoMg74B8hcD4kNgMjLQcmf6ihPQPinU2CnvvFpAvwe3HugdAJtijAxHvrW7BbekjpNx6PGKZ9wRCDT3TMVC",
  "key2": "5dY79uzvZzh2FdFLkWyqyCcT64kLqcgqFrS8Xrx1ESaTWriKubjrfSbczaT6GwBcDaf1JAf757VvwM65aKqSY1q4",
  "key3": "2SzQhzKJ1HMm1bB4kH7KdTkLkK7Mn9Tn3bbXpVgxowLD8rGrgkKcupcFprSFyfpijejmFJJ82Ap29U5RPYPn9tZS",
  "key4": "3ho3akZCe7GhUWMpCRUAYRbrny8zdn2qqs9ZhqVgApkkMZdPA5QnZN59k6Vv8gTB8RPPXfFW77fykZPWk5LycJdf",
  "key5": "Y6ozJSKWpknZRoXDF9dpMc8NxuxrJTyDSLch8PqVPVzZLAxVoKzE1FGL23ZQ5X95119L8VRvcCoUF9R2v4jVnDc",
  "key6": "3jqaVwHnWoaAMmtFAQdB2BdvotR5uoXC2fPRjjcgxj5kmgJCD3ivTmS8zb6qiTsD5MwCufsa4DAVFBwqFvpwDAqY",
  "key7": "5k94A7d6UaUUkVEHRyX4WKK63UxVqpXVF4hyBExRUa13g87BdknwhxCMDQBczv2QLryiYEh3epwA39zbXcJkRPdM",
  "key8": "4B8GAaLC9jGnB5tVY1mPmCoHsQXk6NztPC8EcYmj9AFuZjMK6DPUwmcjfFc51M21mUAmuxdbfy7pqT5i1hgLRTgf",
  "key9": "3vapfAxWFpguTUN5WgNeoya1BSsrzjhBYuFbEdmfRfaURWNyG5kcSWJkxYwPatHNgD97pAxaBGyWNmDdVp5P3WpD",
  "key10": "bV448FR216fJu9qBGhdKjLmbPnjTcvGkbM9iAokkawrgfJqVKipSMy7qF6usxjbdmEengyVUEHLd48AwAiWW6rD",
  "key11": "34qthb2Mr18QXoPCRELc6NsVdFBo8NCYCMvCRCzH7zUMB4cJpd56TKR1QQHrXST2ws9cMLj4t4W2iMAh68rccqx5",
  "key12": "Qsi8C4A4y42fpS2VX7BuYcYn1zb42YBS7BEjLffFgNhSYxvhTBUqtw987wNhUv62PYjfuw4rehesgJhcuvybPN2",
  "key13": "iohyQo8jfMtGszpTy3796zGTMVdJkJWGUrijAWBogrjBrZTk3NLpn8BSmxN7P5uvcrpzMo5Ciw3Ne7EfgKb6MCK",
  "key14": "3de4NDXZy6PkGP3s6YYpUtUPgwMrxapJmTiz9d9s4mUxFfvVfSqpoHzLfVhcbZ6JoXcPP75BncQX9xpADM33N8Md",
  "key15": "5VwBL2WQit5qgfS9Ka96xJ1ceREBWkZJEsB87pENt1ZFnYWJPPnWimj1GkJpXAo6XqDgwxynHokKtY28HWKPCcfG",
  "key16": "2td1YucqfvLqhQfuox22E6vqN1Thb2nzL9Hb3Y6gTsUNLY9ynvsjZNdBFun3MySp3GhX5C8q5keLjcBNRXMp5tk2",
  "key17": "3P37LvSUJKP3xKnLw4yVBwyTytUz5WCkRguRiSUDtSZD49u95UoZMs1yyXAg4THXqdgcPNd67Ny89Luo2K68DQ45",
  "key18": "4v49Kt9NYWGL463G1wHgsWNGds5hEVL3LArNLSpmeSjj4MMR6LZmkHZoPGNBZ72fjyXtKVuMc9gpXoppB8bizch3",
  "key19": "3mfSLT5UmAUPdbePkz1MkwmnUh4GyDa3M4gUUxb9KtraymTfKhouomdZScuqCNscSgjiUcMKucg8h112utTTFm6X",
  "key20": "2mwfHwXqi8eEEHcuztLSRsCiAFUAtFZsu1uKob2kyvq8FryzGfkPXxw2jHKkR84iH75qs6RpbHMWxHoVNV9e63or",
  "key21": "5TR5GZtaM82EMKfGmbUpcTiENEMRCK6XTBWsHVxtoh1czVrHbzerLGLh237M2aeCrc67mmH4sYnhB6MKGpYnGcqr",
  "key22": "i2qZAnkjuGhw2vQyPGrBRXDXym58x5QeXR3yhQmTGXfLHX1M2kkUdTZE77SSzinD2PhYpxokbjViyfgJ1LBD3qV",
  "key23": "5wTroHudfRhYbhgpwAUQGf2rfbcWSR1Vy7bTBZszSKGksHqsRzqoydEaZiNuvExVpLWcDLwxbJPJzT3MVkrqtg9n",
  "key24": "4WZjfyMDFPpkRtF8gQKTcfW2GvcFF3B8pb6EAExTLBPaf1gxCj96ZYHvDirWfFbcaeNiKm7i6UAagPgbhPVXSPLr",
  "key25": "55nGiDiPVq7pozk3d3uxFhVv7Cy2W3h44yoCbS9Gr1S6LrwpMaHNiBHPfn4dpPjrzjbXaWnVPRS6gxLYnb8C7kAh",
  "key26": "3GKw4GSBnMqcGioAdRs2Bi2bPzMDKo356w4gaE7dnU3oqnqGqAsadwDLW7k7Q4LDoihPBCiKFnPFHSXms5k9qP4c",
  "key27": "646HDdgpcVKcm5LGztjEHiaccepFEzmoD4fD81iJE5h6dR8r5icnMsBwFHHTJWTjifrZNigpFbKSEjzMGP1o2YA4",
  "key28": "Wqb3xFrHyfD3niV6j45UG27nXfFUoWDbm47g38yFFMwDpw5X95KDUpp3yuySKkoZhvnzTpQsLzZmw84NAzZHnaJ",
  "key29": "4pKVvRz3TDRB1Spg1atBXVUEAg8ph8LxmA4py9663XrLffXh7eyEqnQQkhVaB94zfKdhvrm4wfmpmH2GNMmwPpBv"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
