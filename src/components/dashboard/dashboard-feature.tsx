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
    "4sv43NBDpVpCfsuffX9CH4Z1tw7NAf4jZzgtRMK14Vudxqw39guXmRWMVRC3CyTzthhrLM2kCzJmDxmVWFp1o1XJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EVUgcjgVoBPg4SAzt7aYs37LRKpV8L5jZUjjgbFwZ1qKj147ZBJJ7gzcdXca7zrCN7vbgkuR3mNbTbrwq2cjhWc",
  "key1": "WpVFaigocoqkGpRTUMw8Ydm8J1j8TYD3HYrRSMRbhiAxewhrrKS9dwjUcRZv9wUmnArMBXBbZS3K8hWdZD6DJ4A",
  "key2": "24m3ZZzxfKhRXKayqxSXBrER6A5dixgVsxs25wSHnJsPpSUknRcqLfK8WpAh2AQaG9wh4WayGE96CGZ9kjc4Roc9",
  "key3": "3sqpKd7NmQM8q5PbqHShoveX9v4HHpU4gvNG23LnndnZssku1ZLQmXniUzkUzVCKv7J8N7WSCgcPmig5hrr8TZxX",
  "key4": "4jHVhkfLyoD5mCkgh4HiU2feUyNFZ1qKomPVcKVy1uh8XBD8RV3mkA6QFMS7qb9v5hssXWzKiyT2MPo5Mz8DnMLn",
  "key5": "Vyrq8Xo7L1KLmWWDjKKBDC4Y6HE85Awi5jZHkbjvah2FM7ickTVNJ8btUoDZ8ajT6ibK5XiraRcPyzo4f4Y5m4x",
  "key6": "448ku3snEaHgbKiWFA6Lr1PmAdMBhrrmUy6wgMuwki2cjG6L9CfafVXMW2jzwSDHtkTwJTUDhZs4KLkenpAvyyRi",
  "key7": "34s6eyQZdWvGmXxQP3VtKsjkgtn8Tp4bQhmoT7vaqCzqvHiVVdjzyZhcUCiHbKN5vokJ4yJvxnP5YqiYEmTvj9MQ",
  "key8": "na8f4CPFFF4MLSWGD1fK4PLXUJXCsCkrztycivRZawvxPAR12hcchkCPfsgNNgFcc2gFVBk98kDDw8Uos5Pwh8Z",
  "key9": "2g8dRrJg8xnJVJTGH7rHAfD4bfmRS5MiLTV9GccTP1HsxqLahPMU2UpUVm27Thdk22UUAj66xUuYm5sMrsCRqreE",
  "key10": "UECtWXddA9FB73xRBQzB7z7bKH7UySXJvyKAxKca4Qu7wznRjM5jaNs62L66N2nqMJKkQyz47rii7tHBd3Liz1s",
  "key11": "4KdZPyDiCDnAKMgf22WNDRZKsdnXyV2oYupwCfMmeVsFADdVZV4DM6MAnCsSZVtAePGas7eRRxGcmhF1iYdZaHQ5",
  "key12": "5oGCyzfphNuwZ3U1uSnq71TpumFdygYMenGfqczWxo2v8EY7iXqq4FV2F6JwDkafutXwLegYQ8WWCXSPahCdETy7",
  "key13": "oScw81YTbsvDAwf47v8LuRvcQzJi5kjaDmfcRUGFsG6TtTqYes2jGiwiQpHixiRgHFh8RVUxaZacbjXwjSRFVoG",
  "key14": "2yrNjFEjTofECY5Kmfo1Fsj1ZhwdYCBwQWmP3jWZz5LmFRtqBkUZEKghKzqqhwfyUqQkx4DxS5AVjiG3wM6KmMPN",
  "key15": "oCyodf7w75wjKoJZMiEfoBtwzy46HMiyNdXJqEdZqr5mVSrX5Y7w1yr3KLAPJzLm7rUnPmJfzWRW2GjpHXfu3Hc",
  "key16": "3nsUpEDQCsBxdnqJvwDeZ5y6b5pVgvD69wdva84aKEaUwxy5RJtSnkYhVAme5b8YTPeqemjpGAfVtWUBzH6Yy4Jt",
  "key17": "3qti15fkWkW4mSV9m3LXu51KZHY4eDEeT9xYXNsNvedUHufDnqpDJ5k9sKFFaCK1RqrshBiJ24ssFSR6Jxv1EQYk",
  "key18": "2ZMWu2c2s7rgH8WKzMb11AvNHUUpfEdKE2XjHNJy1FU41yqVV7WQUPU1JrbW6K5noH6zNehywR9o8a6BgHHmzehm",
  "key19": "4zCD9M8sKTtVvFoVCrwW5ybn53mgfbVUsPR8r1chkuEdU35fhVgv8RRnoCnyuw8HpywAWZMVhVihjP5wfN6GjYvB",
  "key20": "3Yck3WvVDdydw5Nw413YfMssTcTiYeFabfktqXmQgnZMHzYDXfVjuTWpbPj8mFpEhEZYrnxJnBUkf3U4Kgh2nYbq",
  "key21": "24waVRsotWPV74RV8v5v27tdMf7W4tNYfcX5bmksjvaWmNr1kh6EPaGaJB8FRGqoKXJLurjwAWNPifUvNJzfQead",
  "key22": "4LKB9k7FG2aN6kUcES3uQEGkPTSpoKgwp8W5YrppUsAY21mY9nKf4es5syUhDciEx3pd8VVxPcqCWuPko9RwPeVj",
  "key23": "5h6QsQxWXjau2nAe1jM2SfFGLPmF7Sfd9g96wisUrkB3v838Xp49g3tCDP6FK1iy1ZMGvxFRfp1b26hxEK7he9E9",
  "key24": "4zfSRta7zpKx3Gu8wenNwjKzUB2VfUZJZPP1WHa9iR73hr2WUvPSrjJvddyzdRcyDcVLkTNXAg1BW4C6fP45hqqQ",
  "key25": "2WQAssRWjLbMBrA5jEnaYwGEBv16m1HbYuBJQLB352NKCv48YWiU5MdTJxZNNHQZsK1RN6LkQ5ogW7TNxLAAsD6r",
  "key26": "382c2t5pJAveuzLG1zyh578VeBbhmgWXXLVs4GznRxVrJ48SzHCGGF6tNDxUhszrhnvMcFq4fNXDtS5LpbeNkQQe",
  "key27": "4ytSa3vLu5S3pvoE9CGj4oEcneARRaXRKBY9YQXXwK4LkxckD48MqGVq2AZGaVXEkP55WWVmjbjgo69Q5g2xAJ5M",
  "key28": "5HS3M5AU4CTuYoXTJkiRLg8YnEjUHXDai3ww48iFZmxBonuMFEZTUEeez2ZCPRS8xLs6CodNmUMrmouyGX8e4V9s"
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
