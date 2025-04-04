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
    "2KdsF1SqLK8SB8FNYLpnrFmfnz2Y1E8KVFD8eXfW1nNwUP2e2wiuucRk1u5LM5zeiKeoh5Fbq7XPyE7Cm2c6zWv4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bQjBnLSPiNmw6jDZsVb9TqvY1pTvgHMhe9ae4gEghbT3uoft3x7yks7TfqEiHzC5CovREy1qoy2TpfP8GgUuzu8",
  "key1": "2qBUBBzvgKC8RZEUGXVZ6DUP6ViiAPn5YKdJceNXxDCPTRMrR92uWHpNFRSzu9FxVUyJR9GDMQLLkDN85hkAiH2h",
  "key2": "2HGqrae2YLh3beJt35BRG12bTWYpJ3rdWgcnun9bC919ZdsrBQGx524iBUhVncsMMbH5ULmADtsQixwk9b8VFgGW",
  "key3": "LV2aDJLMvUtLuZNQNKxGHpoyaZG5WKbBVDjM7YczDedNnivCs9msqkSs7ArQmQhyiEJgfVuu8hJmV9LCReLYjb1",
  "key4": "4cHco77h7v6NtxY4K1UWtnxBF5KiuotsXgf3aN8jMK79T6xkuznFfQ7LbuRmu9xY6WwLE5FTxBU64a9YkkiN5Xig",
  "key5": "5AyNDh653uBM7B76qsAmQ7cwtT6LQ1pSmvRNM2Y7ttShANQaD7rHxjGD7QYe2QsLbfm1mcfDR2oGxJputVLCHbeh",
  "key6": "23uesZYMYbi3W5JwKc1WmwDBjPXGLDY9kVFqW6vF1w8tHbifMGcDkY5Ehw4828tvfMrjcq55tS5Yivzaebz4vta7",
  "key7": "4MKBzoXTdFnU7rvB8qXBsRHktXTnWXNqjAqghAbisyzTzQB3LAvnCuPjQK4Wyfm2xhPbRHHzZ6QnPP3iLpKVc6UL",
  "key8": "3w3kA6N7owLRG3cHbt1X9jtPLbkShtVopwkjmM8eYH7SkURdgbmu3G1XhCkC1yBqkREp1Uy97sD4HPFe264CeueB",
  "key9": "31yzJiPLZY76C1Gb339LwRSniTKFLywZmS2Q9qQgRgBYRg5kVNMB1WioqSKkXs6cWfWMeXMw5z26yV658JTE9raA",
  "key10": "HnnRUFo9nsKVmaLGrrFYrXDgU6UjFFGeFcdGE1LaBLoxesJQpD8GwGQ4HyHv3QLJc9qwmaa9KdrksujSfK4diF4",
  "key11": "nG9v9LTXRVjkorcih14TgtiAkeDgeqASixpJzP3XkdPyBm7qzcaEi29cduMPxfS122EbHXjBTojf5bKYBNDVPLC",
  "key12": "5r4Ns1swzc1XutYP8hC21apAzjyPQyBW4fTNoPzYdErQT1jG3cJTBNDVG3ZQQ3UjoyoAaC2a12ri5DF8219R6gLh",
  "key13": "JkPHYeA3J56XJfB2LqHoMkKF8mX6GHSnFoW9G98KC2UAjm17Skp3UpEUxGmRbhhueuZsMeq59ABrLux4rQBm5RN",
  "key14": "4eEc7S4Z1TV3qPvpGA4PCTK3pypt7CHKjmcTJYgDHkAUF9dcLh5ZSkWM3RydfGNnRop63LcUvM8zHxFmPizAPJ9C",
  "key15": "4fDd8toVSwYrPbhNifr635HU4E4YfstoAVhkDzHTwNkKPompaww9KSnz8g6PtVdJsrcvweQC1cLUcoz98qZCuTFF",
  "key16": "5atebatFtmRxweQSeyVAMT9k7hZXVqxqwPmqc4JJezs6wV541KUXXLttccZ57jQnP6hahdztDzMjjAPQk26vgbop",
  "key17": "vCct9E93rapLvuxrMc9eKR8n9iKJPTCkzZK8RJ34f1ZBqKBLNX2CcpFGjNWgERAfWzFvKC4koGqCxb8hZRKEXWg",
  "key18": "4mDHKkZpreUzktZ6j8TuxDduq35CBNiDCZkv4YfpTZaNSoRaA7ADM2GwBpgrTuw5zwcZJRBnooRqvtddcEEFRFkY",
  "key19": "2v5bvDg7C9c1JPyJPMdcxwrULicYYXPLdt62wZ3rrpdzUuqtvJM95TnxcTHBuypX6c8gpCC2x2cW4b9KMgapmXgU",
  "key20": "2KkReimxksfsWYNvtLWy63LfpCQs4TM2MkTgvJjGBamNUXnj4V5xBxzjyTTaJYeTSYeXrBrPsCPvFyWUeupWCAv6",
  "key21": "3Ztk7QkUUmThJdPfkeB3zCxKEKss3asdL2EzhHVSRkEJDvtBbd5izhyEKMZYBAWVBgqqdadpMNR224DywFMLFX2R",
  "key22": "41BnG21oEYafx8XBGDJjW7JX8d3kYGJrRSMzRvSmBvz7sT7FaTMiwB86jsWLvD26g7Pie8XTb87Sji6Af7xgMS9h",
  "key23": "2ssHua9LhPvrhfnPUtihX3fJkXfe42Rh87McZqs1yx4aG2XQKbHcW3fqDZceQu78LxW8jSZKP82qAeRfbQmWsRYs",
  "key24": "58u1H4Z6go3g5j7mfhs4rq4HYgSmwSgXreuDS23tZ6U3whN8L8kXqJK7JwXHoQm5yQL3GCuYpqmewbWa5akAedtA",
  "key25": "4CUGkvAGP68tBpeF7D9J28XvBDhjQ9VkTAvzgVVkzwSnMZAW9fQAVZdo1sWt8cjTncEd8ZPtxkUYhiy4b5HeXT6b",
  "key26": "4BG4THQtRfbAjvNJ9UGCtgnEwSVdMq687eoUGXuKFgTHxJa5S3iztdxyNrxuZ9vGUv29V3LSJKfiu9Q4v7ETEtc",
  "key27": "5PUBxTvF85TVKbN5ymu2CCocuYkV5zvSJXzxiwyTgkWbbARj3gHrKzA7g82LZmGnqwbVWZTqvVAtaUnP5cubRmXQ",
  "key28": "2Q8uX19ZMJ2u8PxqYMwLu1qMkqZXCre2Kqjmdg1E6dL5q73nGN5cDShB3ojqWpGJNtpNegtucpwTSDKzx7hGiwFj",
  "key29": "43QthXfTRvsA25P2bXD1dxCRKP6NjGV94NU52seLaFmq5pLb4GYq7dvqvpNFr6Xz9vjFnzcHJS3JEk9PnWWXYjyM",
  "key30": "5FDDjAQQGbcoNKW63CRjzxStvQxqubyeduQEqsAv5xic3T5NuWDJidHQBVoX2Piiu1eeGm39pjfmDhZayjCweNF",
  "key31": "2QcsVBM58yxCv1CCLRenGaB1494Tay6ubh17mo1hyjEsskFaiVcp89mHnLyjvJsHakHY3g1u89GLnp1pKqfVRf6Q",
  "key32": "3Ebsbn4nebLTzco3rhb2kf5Yt3zxG1J4PodDSZooiBDx74JF8wdC1tNQp9CigpsXoSPpjRd2CbPA73GS2jLkAkST",
  "key33": "32J9DcbFw5NpSw2qynNUtTcEvHc8GjfSJhNuHkFQeUhhgo8k8mUwaMorejVF19nYLd6XMVTCdC2dYXToeNMzGMXi",
  "key34": "4rjkmxskXULfXmLkA7YstdxrZqhWSeYEuK2PbkPfkYA9AqG43B9s2tHC2Cjt2EEEEmpS6fvzu9B8yDb1Bdv5vYtp",
  "key35": "4SeJ1aJgfjiDZ1umPtFX12FDq3VBdhDHoCYk8wVEjxw8rCrKB1mHYQvoUfmba3TyGvbd9jgcCDUQrbuNFVVpyJ1e",
  "key36": "3TydSM3qvs5jtkbqmRocpAfiC8znHhB8YXZiuehUSerEMUYcXi7QwrGXsf5Vta3UiqLLDr724yLYBRpWBpWZERiJ",
  "key37": "2xMwcKBbYwyTcRViQSFWAFWYieDLa5MvvtcAe8tqgbHhFQf8eMwx3sk9q8Xh3BrCvR4P5ZoSNd7LB6EPM1HskNcX"
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
