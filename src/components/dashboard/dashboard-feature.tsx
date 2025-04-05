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
    "2DY37B6LutgmMTJsn7GAA2KgXeewgbCdwmGirbR4DCeDdFoHHUKBpJ9ZrLXPNiXa9eTQfXHjL9JitGiLARfG9rA8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56H6evaPLbpu3ZSTUM474fHYtXXwyoa6CYkkMsaMQi3wJNT6M4sWLJ7gWtxtMNWUefNXo9bZKX3czbcbAxeemG52",
  "key1": "2xeN8rWafJprNa44KrAVrfLGFKQRsvmSmY3UNwpXYGh6rX8nCvzxcUkFn3ehCqd15BdsRWigr645sVXJ9zNTnHjt",
  "key2": "222yDyJHENfqNPRLxWksbK2vYJ4nUTV6CYUttapTKUXzscQcvf936iffxE29o9SzfrLJcc7ZTSe51cjGnN1Rsekx",
  "key3": "3JQaRJwhnQcKf74G6ZCdfemUWVEVg92rQt5E6gACDAdQrEDZjU11Etgsm5WDF5BgBwZYGfr2E4uyjc9QDCQpC3kU",
  "key4": "2dkdHqzVMAyNgszHVMgbsX7vB1EzVwKWsjYhdhgReo5afEa25ywCB5WZRcSB7b6eJMANCs9q5sUCyMqJoTmijvyk",
  "key5": "25cr5UxH9LXFRzmVbsxuY18U9DZNtBSrfMK4XRMkGjwMTX3fEQ97NRdwRgJsKoWnaAr1rQb5vhJ1MeNFntXXuBFD",
  "key6": "4rY5SN7X2uv3eSM1bVQNgQpxa4mdaVF9Db5rUVuM5o2j8akbwpHQyRRxHLnm7rGYaAZu9xRCbAho1KXye5h5icbC",
  "key7": "4coXRXYw5iTnfAnigUAPFHFfdFj6WZ5kxWCsanXXVM5AB5XWEWpiVnNuhzjfAjNXMhBCfgwNKPYe6ECm5vtQkXXT",
  "key8": "wJ2QbhrshornEkqyazYSNccWjoBtURfuN11kRnR7pnDrZjK2BE8Fm2suq2UzRMXnn3rd2PqVTNwWRU2VFnFXNr9",
  "key9": "34vbPmF2UxRyfBZzkMTUSQ5ceSgwP2zcG3N6VMrvnJgmR4ASEGtbbH5AwNuXZ3BE1SPvFXPCntnyafz19BAjde9X",
  "key10": "4zVvWXvnumo6PWe8Fs6LpTvwWHJ7X4T6UCrSQiHtfz8mMfNPGnvfkmBfRF7tEsLBNNLwMkPR13dGrFbzav47uBtb",
  "key11": "4deSXvKcmgK4XDSqVDg8RDnVhYAWCfFg2gRgsUUtqQ5etCdbHFDA26uQfTk36Ac3wnjFx17QP46CYeqfdgqgiaLp",
  "key12": "Ti1eQhtVqEgACTwApWyVcRKorqt62Md6b2iAN4CWqLdSpHjr2R9pdUAymBrdbnzkEawWC6L2yG4bccC3bq2BGcc",
  "key13": "4SGMsCYd9HtB3mKwKALivh2GPnKiryox35WNFXeUJfNU7FjGrqJNnuqGiNJFFmKs315pLHWa1MAjgDdbp7MiAhzA",
  "key14": "3BCqm7pKXradU1fwVwBiJKmfYJcJLpYdCfbT1PUZEj1dSYegToA9HMnMsMJbT2oScy9CyLos4BfYzuNWJ6M6M7bj",
  "key15": "3JSZiTRscjpnvpoMZbQeXaYWsf1aeSYhJ1HWzwn17QJmECP5HP7PKs3752bhyFHe8yLWcLreXkRzj1der6aH1nCD",
  "key16": "2zH96bxo4W7kGgWcM2eiyzimmVM7oJSmkUyZKTGX2vvd3DK2PvGuF9gTULc9M3L2bUnkCCDQehymeDDbnV1K2MXq",
  "key17": "41YpL4ynWd1yLdmKGh2vBvA4RyUMZVmBtSCXhi4aHrmzMwerD3RTEm5cDQQZWf2CNfcxzpsNrTTtGvowMKrzWJRE",
  "key18": "4pLgNfuwk2JDQBg6EfHToS75SSqKX1jmwJUmTW6qS5KGZ5CznLZTdgsCRukvruLn264TkRTHPGFZ8vE78XzRuzy6",
  "key19": "CEPmcvQkYJu9VdfY9cDzwxYLvwbiQWcQN1At9yrQJsx9TxkumH2nA3g9e6TsRfcJRxnxrBjMmuH6zs7MZVd7rY4",
  "key20": "62ED8443dvexgRFdXN7Thb5f3yQBq1YSu5PKbDs9u2HyxQbZ4RABAHoa79g86GCsLdTbwmWhzfVx9dqmr9tGB8NU",
  "key21": "2BziUGwwgUbsFGHQ8hFJw2duWVujjCVqRxz96wQeGAKF6atCfUxYCnHi1giAVDbYFzpFcn7MMGUezf7XxKBDS8Xp",
  "key22": "3Tkozr4FcbHFDkTw7tXLFjNinGffVXFXSHYwinF53Y3VNd4pnkexHG9biCPC5AnjrJEYnWQrBTMSmPWrffbCxusT",
  "key23": "3uMKQy6893xEqEihy1paVF3wvtFGoC7JM6gcA1ko287tCGJDjF9adx5wokJi1v4k2gyDVk4fpfuvHyzEtKx6jGiw",
  "key24": "2hvMu4R4Er1De7bkJsU7P3nPER9h4x9YBJXFdTbuymETSYJ3XgGXKCGZRqgE3Qa4iq5i9yHnSQjNvrnhDYtg7e6t",
  "key25": "2Gy4oQXkP3qNiyZmTbkrVmL4dedc8K5UWvHdqCzGkpaio1tox1ygCZwpmGnCxPsi45Kv9Q4cdBfp5UyxWoTsamv4"
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
