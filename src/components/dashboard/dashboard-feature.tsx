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
    "2d98UHJyfX7KePBqL37uHSbQmR38CAjbi7ZP9Vavhtq1pyoUVtmrQZS7XzMemgyd2U1TJrYhkEdeUm9taA5AuPTj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EVqsWUmLBrwuMjb54DMS6dVRZZiPH3ZiXHVtuqumBJpbvUKoSXN8GUs6nqZvxoFW6fr8sUsQEYYbWhzDieaCk7h",
  "key1": "4ZZ6Ckx9onyNNirZ6KB3SRAjDHSE8EAEsTBZMSjJXS3krG7Tk7mSrbsa76SR8rkGXvw4DbDPAWfk3Y1Gk5CVkpQQ",
  "key2": "QKepLcdF6XBMzEkYRWRENkKVJn4tu7tM38Frb7Adp6o3ZViiH84cwUhzr7DEuGpR4Zd8gsLXpx1ZduU6k1M1iyE",
  "key3": "3yVEEbPzjrig5jeHGNA1vWDrEtUBSr9ZEv5mrHGDvNgbHHhnKMTQGBXX6GkJjE9CzyCGcd54geTUr2yXDY8zJrUw",
  "key4": "tppCRcBirofK4UDMG7tPDaShp4WCVUqXTkG2psNUtUaUe5emvR4RKBL5oxdckiW3ZNefgrFDc1VcvWtBwLDPXhG",
  "key5": "3jEg8tuSE1BZKkBDUt6jz4F9bVSzuuZNrvG4C55cBBJhxbWgAB1Y8oWTYW1PqUyjaveC85DH7giNPXtQQ3VLZkLp",
  "key6": "4dbfabc48AaLnoSHVFfCZpYhP6vaupGAdBCP1Qdu8Utq8Gs2B78fvdCzUeMYHgAPp48U545tmkEQ5AzwCZNgS66d",
  "key7": "KPaAgveA34ABdAanxQFcS4t7PTSsB7VyB1Q63Uwe2zoXWK3jjvvxdUJaXCBFwm5BCXEx9z9ctCQ9wRgKxvsLjNR",
  "key8": "2Mu8Q8bDvr4JV5YyXCG2t1y6WtUXCfKHJkf2rshwmJxAU3mVT1z1hLEzuXyuy5ofS9ahM3hstcrc4BHTHoJZ56xM",
  "key9": "24ZFAssdvcza5NN5qPSrNijvXAFzGjvsiPat7vQS7igbfPYcwuxDa51xVvkV2EAfPweQDZ31KvUy3yvjJvBhGb2X",
  "key10": "4H3aypAQVit3rYsnLfM1gtsHJ8YEZUFfdXED5aeD9eCkmpnfbnrP3XUdEjw9ZhKxcFjV47w8BVNYTY8rPT2KcxaN",
  "key11": "5S52KU7KgRpN8L794NenNZB1Msy88HUkTFwp9bwEiM8o8g29GmXJN7Nwi2n2aNGm85q5MBMfYjoRcZ1DmEY3LbQ5",
  "key12": "2AGemM76sTqGULdeJPYEJ22DohJgWJYZy7hdkQzDmWYifqbm1FiZWWCRSmJtDZrNFyt16wBsEmPBQcunXMgayLrb",
  "key13": "64RWATJX6Fo89HxvvzNwrg8FR1eL83Y8ded2jLmHEtw21WgUBiu5XgqmEk9zhc3R1f5rb3XYceGi86PAStMyBrou",
  "key14": "53vXvGr2vCTJT3WsTnV5gQUBtPtaBSJQt78WUNyHtZbFjAHG8DmJGPbxSPHJFwQRZaDxxxfpuzXgF2MfoGk25kdV",
  "key15": "2nddcGSe5Wy7EcBPFmUaiqeMAvnj1KiRuWVFJPuRjnSSV2kDWFRWyPa6xqcdu5rFSbRwxrcHdxLFGtJSCNqMJgtj",
  "key16": "jwD194Pqrr3GpDYHdB8BwpeuEpd4rpQHVVveSsdELU1BBh6e4ZJBC3X6jxoZCa1tsAHmVRLASMsL82vA2eX9uAn",
  "key17": "2tWn8jMtXMMK1L3ftApYS6h7Zj4nJbwbNPJY5tQhCFvJqz2dETAWaicSMtFcrTbo8uR62SnXiA5kw4MCWwJVrMYy",
  "key18": "25FyeEuCAqVHXRGYLWYdC3XeoiV9ANcTpg23phjWSxa9yT8uA6aEaH8PtRLd3MaPdBn6r2FNfA5fM5aqWmdv6hzt",
  "key19": "3WC1Cb7WynbtjpYiLGoP1zbLoJryoAPBXfkDiXu6aEgjRedukmb9GJCLM67voUDM5xeiuzyUubi49zid46ZVgWFF",
  "key20": "46wzNov5sDbNV6GbVLCSAKbassrfq38jCTxAYKsUDrUaHCUM8BkWqrcZPfLF6zxAXHCjFtm9qJoB716gLQ45Ah7G",
  "key21": "3qR3knnrQxJqDMaQ7MbvoGabBorMKAqsGCkyZJH5bRYJQWdemQS7MUf6NoNdEvf3Bc42cjUwVL6ysAbWVJLM23Ae",
  "key22": "51Lm8dAFe39d2zL224wKogGWGfDQ9Um8odRQTr39NPSGHDQao7yrtyDD9nZ6PS3eArTsTBtgzuX1edA4Do6syjJ9",
  "key23": "5RhjTgATN64SoNng8Q25NBCCGrqSRXSG2tTg3ATEYPhJ4gz8RZY7rFuEJqRYZxM6yjevVskrYGEareEBBgYVHijo",
  "key24": "5sCbAWJjvcvXuoZDjjh4bdgCUo6WBQXCBnZDnDdDbuvwiHyUGypi7qjtd56PWMJdfgGfFPBa148dz6i3cvGcqTsH"
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
