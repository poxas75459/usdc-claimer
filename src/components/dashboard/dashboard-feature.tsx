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
    "RgactHe61FfE79yN8qwraghj3YfeCzCGWi7yMsq2WLqE1n8NN4KyErCMpybBmivXpr3brb8ADgpr6ussts7CakM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tQVUaDFrCcM4UxSywnccq1a86c1cPtZ7skPLGabir4MG3zU9igJZ5kdsz8cu2aS5zzhwPcs39kWZe3apgQm5mM7",
  "key1": "35NoEc839K9E5Hisw7BxmKeGXVA4tevFds9Leuyms1W5JLgcefGdKLkbtxdkcJZgh681DesYhcWFdKiNp8Twn7EG",
  "key2": "KEuZ6BRE6oEumxPqLy4cLULiDexQBNqZsTG4VE7ceJZXBvBFcos97QN2qYbDNq7BtNDXPdTmRjmSec3CmZ8Qyzp",
  "key3": "2Ynp1og6hAdjwhCEfT9KmAP4wcNZJfEDdVjtBcmCaL15dMxRFQJkhWBAb1iAbrMXsBEFzDGvCst1BUYQhvYVt2Gj",
  "key4": "5kmzS2jxQc1TkUHgonhwQBkDaPrVBHTUxpokJ4CLwFynPLZ8BkfLrNgGpAvUyJT689EJRtMqStVGVoiernToGdMo",
  "key5": "gxXDpGNR1kyNgajXhqdcPtNaoD55ZsUk9sHQzxK99imntDXKHA3y1EUwrWvp6W9q11ZLZ822bwnZsKopK5xNuCa",
  "key6": "5sfJ1fbgZzrT49q6UvYrJ15WMJDWqs24i7ggvz51AmVgic5dxmuLigHkufqb6BvrbU5BPjXw8B13drfBEGbdD1oR",
  "key7": "BGg8pgVFmAZEBktuX4xTCNwre4g9EEuY7XBEXhPaNWfAfp2cAngXr5uSTpUXm2VvUusAUPCEdLjV5YQ6VVwqdsJ",
  "key8": "4XMBaPs6TWCBvqWEQWC73gZD1BwHvAH7KUioBH3985NDuaURaXk2yDeVMEPDvC3stMCrpEfRbUzMoi33YD4gSZFw",
  "key9": "4aHYpptHGGUHy4Ab2P8Gjwq3kBHA5K4sc8NeELeNDvbrn73rtMgt3jGA9WY8Kj1MVVhTz4K8w3oarRvtgyBYYHyJ",
  "key10": "4DR1JGf2qXH3JaZynN4JYjQrouZ8ewFovSJ3kTg9nsnvoZjZMpUd6w183b1mtuaGHe4hRU5ikWWVoxL6oVNfjbS",
  "key11": "XGb1peh2vvvG64MwHq8enJub9NkgCY9BvPZtbUKuXYWZUUNbGbgeWSRX2XqN5ThNbHgiz94Q6fyQYeLrmoEsf3H",
  "key12": "42GMMx5Z78wNuS6hukT14HzaJSC3fZVoCst85tH9T16zKUELxCHXdqBgatKNan33xC4ZDSV2Qp68Jce7KzdfCAFg",
  "key13": "3mRpNShMTAg8sGgJemvfRCbqqxvxYXSRaF8GCHcDw4ywgposzKGtsDRxWLGXmYFYTV5gDRNBT73xhAUiSMs5UxA6",
  "key14": "3bm2aKQdoqa2dxbY3debrMEq3RPcj4vGPR3Xo8RS1qBpsnfmC45fe1ZhB9svUzx1spCoRfEkZY3ceujoCdYFu8D",
  "key15": "61qUj2R6QQPVGhqF9PPs1kQo8unB7xYufQLHPv1iHdzPr4CNVC6wZCxvGYD6jv6QamV73bfoyqWuAdYQU3Ac1ki4",
  "key16": "2xAL86oge7hYhEBrswRwHxu49f9TpGwDzzStGw2QikaFtDaRB8qaWqNtqeDcSLJxqxcEG4Zrnk9NSgytXP6s3cjU",
  "key17": "49kZwDH42RqBYpiCvhGbUejwyUvQUf87jiynRSQAWhV32CuspeQbfWxwrQy3Wjk33a9yqa2eHP4zPaTGhBw7ojDm",
  "key18": "2ZPToFYtKfxpqnhRio52Rz4NTL4b5vaSuVdJkfEeU7BtD1BS4xXTCkNEpH1hd1Sg2e1mc9V3U2WBx7LomP2FNnQQ",
  "key19": "622RvKizg5xySR3Bvt3F47kyztVKH2dSCUZL3jTum1Gqd8k9eXxV2uPLYBDNQYEkVyimQPZ5Ap8pfchV1iyFKBrr",
  "key20": "affzPY9PdsVcABcQdDPk3oeWm52mAV3bDY3xuHVpW74zDq6mDwRagPrx6gALjw6orU6S4N4keu9KGawyept8eNB",
  "key21": "1PiK6aaK14TKP1rMRLbY2R2PAT3QLPCGW1zy4MLhuHDFyme525kDWCUP93yRJc6AmPNgYprk74k1DQjMmJ9NESF",
  "key22": "3cLLtHzEvJeQP8jAhSykX24yRbh8XCRZL43wGnuoYRtQkc8dBJqHYvpbPyt3XKaDhTMkuMHG54uHWpHv9cGfhaR4",
  "key23": "3wkmuA1aYaZuEckvaHb5MbvD7r8Va2BSaJw5tbXB9658BN2jUHXTPQe3x3i9Ew6uZruLJq58sQxdS1x7XhQysQCN",
  "key24": "3EA4y294apMimtMRSACDZcvwjkahMmKA8HK9A3Y4jccMAF7UiPPreSAJvwKStL4KXZRAXSiRfzgDb5tu9mojKDGH",
  "key25": "4EuuZPqfWdrsV5aadbudxKruT4wjswbK6jDb48D43hQfXjQHpi4F9fV6JpDfgzT5fQhy22p55RTywMAVtBs1w3kn",
  "key26": "pYaaigHcu6iQkUmTbHR6GCqmFXBmJcaMRsaYin3GXZTLQDncEHsKxMY72Sn3jQGgLaVVC77A8bMk58E1YpFHtfB",
  "key27": "391fuHQaoThcLZLeX2jTyAL3XA3UEn15XuCsfZC8pUpdiuQDeJRqCTWpCJw3aw2PxNjfvgC6AiUHg46kYnmQaARJ",
  "key28": "62BLQ1AGifX5NqD62dGzxK3pKcWhVHVEd1o8eTy2E9Yg1f3daSbAYDUyDPdYJw4W6XWuoJSCgyVek1UuLotFGRkV",
  "key29": "4g4jgswHGn3SV1sGbf1EKKaGk8DucreQM2QVLG852Rq64SjgrVyEqJHjfvPTyjhS6qx7yT5ne2z5DAR1QDt9EwYF",
  "key30": "3cYvojgsEXHdL66WRZrUXC2QKWci9UMfZf9zMBkVfuKZk6KeboLTe6D4B28PmGHvv12UqV9KFDxxZJaPKzprh7Uq",
  "key31": "5jrr2pFvG2Jwp1HFkW3q17GZxhpNQanZo9eBvWj4qmbhhCv2fFbM1X1Ax1VFh4E4acuXy7ctqqwFHFmoTHefff9z",
  "key32": "4J1eo8UE8URikVLg7FtDQQAZnLpGikRAuP6QTjnUCGBnjrhjeY2ZNHRvdoqusiWXc7L8FJZ2jPgWLSkJFG6Aitw2",
  "key33": "KU3AmkmrZR92s1exs4cg6kDQEXV7DLDe4fQ1RwiNh24Jw833WXxWXD431JQjE2CfC4MhBDWBAAkWvoZeHXSgVWb",
  "key34": "2dsxyySMJx1f5do7UjifPRXyhi43SERk4mFViUvdrQAg63neQxj7unpAEdqNodzAyW8CmZC84rDyEFbwoBRfLKdL",
  "key35": "2Ku53SbSMAvDnsAZwbZotGqhGukJkqYQUWCyub2S51cfTrB7T5yNXVaoGCCLfwEfZaKnPNxzrXhpxFiaJ2dGaK5W",
  "key36": "5DmgRfrauRkkj7pZj6NyqBMBFYhDEpbe4uJ1iLwxUnE8T7iohvZQ4GyQjNQxy6Sgq2Wg6Wd6N4hEHH8Y1cHhd3mQ",
  "key37": "29YcFibAyJ7tdX9vReoZh6tpetn5EoY4zUPDvaUmhQgCgiSvWiU1r5PjRmeaHddhDDqoLnx67D3dMLZpf2F5DQmj",
  "key38": "63KXeHbysqYTzQGGxNEBY6B8URj772PEqd97fcKrBuRtCYvAw3QDui851PxLzcUUcNoTDa6ZqbPzkfbdVGCrvgRz",
  "key39": "4UG8chb3jZXwK8p1NYs7XK2fNLkDku7T93BTLGDZSRDVjrTJ33pN5yy4G3kwzb2RkMjXSUXbQU5AdqpqfaBqchX4",
  "key40": "25qKWJfxYtwY5GLKTMfUMBy75v8Nr9mqZyomiQmwGscJVY6xUqWnLTYD7LwM1CJ1ovBFdf4G2E9LVTVyV7uRDq31",
  "key41": "NgmWN6pLqkHYtw3epPGY2x59sLTu7QUJAPe4Y976gJh66e5dRuvC7DayRWnSHtcB2Ps7cwsosvotUb6qohdhmSn",
  "key42": "4hqsEDggSRERoy9wm5NFtZ6e2re5bFXhpCJX5BjHSEp8wFk3Xcd8nDepDFYFrnDgMsXZRUGkPJj6wvoe257o3dz2",
  "key43": "5JZmc1WNuoX1czfqegPSKzQ4QYHEUtoN2V1tpTmktRndVowC2VU5u7omuXVT45mBAkq8eYn5FMf21PkTWnWRgdrc",
  "key44": "2D2FbrHmV9JZZpehe1Cemv1LxrG7vvHWfPq4PiPAFdTe4iaFnnsXvXrJdhLUKQa6jgXZxXmiZUH6PV7AxYMp2Mes",
  "key45": "5mtsZts7c3R6rLwWZjpndcQnRT9Rtr4Y8hVqnSLgLLHsRhaMwUE2c1WY5oAcTZosrtqbnkRoGN1YiecvukFNsZr9",
  "key46": "2HVn1iNo86oxtdFCeAQVeyxcoaaaREw9r6ZinoNyq8aTfaSCoxMFoBNqaV6Sh6TydYikUhrgJP8QacjaSE513Hwj",
  "key47": "4z4TiS3Uyqxcyesug9c4WijPrC1UxTVenRpcCQXJL9xXJgkf3cyWMv4cLVZQE64Dew3TNE2HtARbBb5tGTsJczF5"
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
