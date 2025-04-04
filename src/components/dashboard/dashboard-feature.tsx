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
    "jWKJcLJKZ51r741gcohMDvNNxNXvMrvrRH4hJ1eNHLCwet4URuqJ7VZL4EdqAGvsCq6xbEp6hE6gJQt1WdWcrqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BxG5sviQd17AgZWLDSdWgZbAqArBr67SVpQRmrXaocLQUrZ1CApHtpZqa86jSEFsKbzy9moJTCPpbY3nBFLuME8",
  "key1": "2yq1AmKwRoQUfUaVSsE52qwHg5VXenXML6CmFANZtUzqhRyaj7xVtKuuf4559Gq12h561XkUb7Pu7niyYEuKEcF",
  "key2": "Vv8HZ9xKYor6ywNeGmGGAD4jA4FdjFKS5Xwy6bshrt2FVmpb7xfSygE1zcakXpf7kqURpCCBuC5VybmGaghiuTm",
  "key3": "55MrHGoSmYAqe2WRYYhT4qY7VqGew8fnGUDuttmdR4WEDf81TpJ4GmovY2ARgoYwgD2izhFW2KWbwoLpawxcN5S2",
  "key4": "2NZGs2vQUe1G6sF7dYzZf92RhWAQRZpAb7TteVhPTYV4hMZ24N5jdMBmQU1eGHjXFdGerLdCkM5CaGSU9aK54CJ3",
  "key5": "4EgwJrUtcXTxG8SdrhkQ7EKXwsR4dbWf65Ta9yo48DLKA9DG61vnP7tfjY5F2wGmH31xVtyayFiExgHaGchseuL2",
  "key6": "2Zb3Bj4ntDzjLgTzPRrRAsJbfiPqQi8q8WpTa9jrUuD3cye9TXutjX37cDe5mGknwzGN2sTovvjaKd8w1mksUtUi",
  "key7": "4Z7Ac236zfiay7peHsCUM77SDYXDKeaQ9mFfFMxmSYisLNNU6gcbc5Zrfxdk18KAhVkiYYU9UfeiTqn5FnnYXhtQ",
  "key8": "2QmHvSbjSf72ru9q9x6APoGQoH2Ed2pJnv3b5q4F9sgW3A52geM5PbgUAHoPKbbpKDJH5UrUT4bvtzdLAXrU9hjk",
  "key9": "2vo8L63LYZRBtk994NXMpcDpNw3j9oFNZrQzCYnhRjC3T4K8TYZctEnkg84aK7LMEQExvfFzDcBvYaQBqnLNLDr3",
  "key10": "2rQgMhTkSQYioQQCzCH1bKgddNNXwbYrx4pG5R35bfzmoeWB1WxXjcHPH9xWqxNgix2XUWHijhwcGBucrnoUkF3c",
  "key11": "5sgknxWRicGSaAFSc538M73NVxzHtgPzTzsSV2J1bteHsjaJQa6E2JHyhrNmwDprHWuEEVV3PruB78TGskoyFb2D",
  "key12": "wELRGQvQ1bxBVqRSBGbAv3hCtwxwVWNn9ycEdzZxGABjbkgJ8BoSN8iN2D5wR1px9PnmRWHrkWECAfVCe1NkCj6",
  "key13": "4L53nZrfDQXNjdFjNeWTQerVYAb4fa77Bmk3xAAnQZJbmiLjHGb9ZhGtw33VPCu9CVbrhEhR9eDgxayL7Eym71Wj",
  "key14": "422ay9EwqBPBZ2uchSvF2LxKLdorZjsVUbG2Wp7zVk7bSukog8WCTAnqjim963wEoVcvwTeJ1TSWM6gvBwPaMpcL",
  "key15": "2ymiCheVMGRpAscW5CkPgAxNZ7gLckDchdAmVkyEMzPpMfhUbkHCWdy1kXtETHJ8Rav2a3R5DuAYKy8apZDEokbb",
  "key16": "8oMkkWYwT6yPh5mDsY2ScxTembPn5MUhwhTcLdRpTQ5ozEipc4ax27xxT1ESAau6hqPzYbjnHMAoA8jb3u1bWtR",
  "key17": "2tYAbiFm6b7r5M62bQyFDxsnoznU5wHCm6uSeRpoaahX94nDjLhvQAp7NkVrWFPKo5zLSsAMkWD4uYPqKrzBaVnr",
  "key18": "mpfEahbYqMoUBxN1xDhGJDUqJ3nAmELj8n1U2n6u5YSLH7tV2XGbp2BhGAjvvVmfGmbJ14zbJx61TQNoHq1rzaZ",
  "key19": "2htys2qpcx6NtsguufEE8E3pLHJRPb6CbjpMKdD8xqcK2wPpwrurCyuM3ZuKFg8Dwv6G868BgkqHFgP9TvWtrgH6",
  "key20": "4db8EbVuSR7rv8WRZLTCzBdbE3cyGNoS7XxVRENc2GNZ9cjLWCnv19NQcKSGK1aqa4vrdi5SHy7L3yyaCF1PKXMw",
  "key21": "3sczXNraPPEbVm9GtkKhiE2hRvFYZW1zkJLLQEmPeJ7BJ16q8tjn36dmLSV4fqYhrFbqhuTUBh53fSYX5ggLTS7B",
  "key22": "2m2Bii31ms8U1LkqxkyfiDBDVg3bi5GexsDtrdeqcwGtDS22KsqKaCiN8T5viwJttpXMhMjMarQWDvskT6UGpRcN",
  "key23": "4WP6hFM36jRPvVnrHF3iKGeYMaVyYbTwSaoSiMifw59M3RWkakZRFN6GURKsGLECsjSPuK2Lx2AKKSLwKcXyAPyS",
  "key24": "t141HKmqah76eCc4rhZ4LEDoC7erTREUQoPTXNTVXrkHApJwuKru1A92i5jsk4TQAw56x6nDCtVCH6V4Gi23RVK",
  "key25": "3KQmGW5GaU2R2ghJsbJpd9qAhaR3UnahdGuD6xrVwHpKjp8VAkiRYcMjw66zsr6k4rBmANpNgtoDFuYFcAwUXCaz",
  "key26": "5SnSUeWxoiPbgRuPaSN2og72GCFZjQJkxJ6GxRyD6pxvq6EMgFdsYVoNgufe45MQXDgrY18ApwaeKzY8e63JfGWn",
  "key27": "5jrRz3M1ZUEToEWtXvf58zuuadGi385BD9UegJqQfG31gRVbmWgrFuNfP7JfAUQCMZenXykuzHYBcC72Zyf7TqCP",
  "key28": "jqdFJ5Yh2JetictCFm8c5rMBfQAwZzDfA5UDSTSWaqfqa6JbnQtm7iK9P4V8PCrM95cnMdvKHwJnCMNsLYdjJUy",
  "key29": "4giegkLtXYgj3XZcfyTW1dxiQWo9NCZXRFzg4hkNS6ZewTe7mKqz4GKiREozvNFw9Fukw8RjPbNKcNxnkFKHuuh8",
  "key30": "32KjiKACapYB5h9w5iokU619zxsShVz3nBX65bc8xxYLbuAQTozjUob4vkf8Yge7bbWooAHhnYkavtirTC7MfHaN",
  "key31": "3tMGzLarsugnLczVPdBbxK6RdLmU32V3xxmedszu67v99ShkVEmSQXbdwvWXVD3ERtQ7ZYTJL1cnuXh6sKXrMESv",
  "key32": "Tiv2tA92qr8tVc2mxCTUupJomrjMTjbPjMuWowsRqPY6WbeMvWWd4mo3aeQio7pf2NmT1FxepA6F8knfcaY1VQm",
  "key33": "5RJh18YKNZKQ9YMD8xQMS5Yy9B1oUrfwtXJinNWg4ajdtbqYu4LcwTZgqe3m8aZctYHgpm3CjYrgmt2FWy7CktoP",
  "key34": "5hwHX2HkCKmBD3bEPWYLz6m88KEsyRjoXiBuoFWh8hHDRkdwqxxTwYBqjteWKBNX7SZzWLzUccE66ZAo7AnJP3sv",
  "key35": "5aLwjgjyJBDnbZkTHTSHdqEyRyoo6ahgTH3m3p6k2gBNDcneJry1vxeu7Gxej5sKjJN3P2hU92Ue4nx8KNEy5HrP",
  "key36": "4VdrhyBEUZhCJVkx8KfqkTGydMEWP5eH1J1ojLFQq93u7Bpi2Pu1QE2VKeZmCWoCM4GJcjzvfXYjfpNpCRVb6c4",
  "key37": "2qqbTjgfFrZvTo4n18M8zS5NubwrkZKN1jVyweCVXMSSfP3RK4jAT71TVJ25mSc17SUEeyxPyGn8fm1U6t1gbv27",
  "key38": "65EK6ib9jkHXegs33eePgonEeqYV6DvKVua6xjurxCVFe1PJcUkuJ17f8vB4vLFFymfxAkCPkmeWKYWS8Q1e9gYV",
  "key39": "KLnxa4rUuQiwTsiKbSpaekoixuB24kH1u1ykcae9ZL6sMDLiwEkh9WCnesiyvAYC98V6RbCNpBT6wyum8RtRVAA",
  "key40": "3imvF1LjQSLTqrUrVHBLd31bD8CJ2GX8GHH1xGnFPwfzUNMqkRyWhTvoe4ZEGW5dRNvncdAsFLFvnJYmkcYgzVdB",
  "key41": "2rxZ9PfLNY3VY4mSeuJ18Fx299wUyBuiGCvGmHA1MVPh6vCiJtgNUx6F3KUsoR8DN2786GnXoue3WgAFVhKbFyad",
  "key42": "4DvCxowZAmqFRN3rqkQvynMVVHxtGSRA3c9ZvwcixHiK9YeC8g4dqmx8BXyYr7N47F3mNb4s2K2W9MALrq4SbXTT",
  "key43": "RWjNnGhy7ptLy81qDAQjS5iy6C7PfuRwrLAG6JR8ekfy5VoFEJrjv1ZviCWtGqUyrenMTDwcae4fu3uV6tV1MdP",
  "key44": "4LeqjarJGCfuHL2REnF6H6QbHdmAZsZaneo3qVXPrTBqzU9BL14YvJHSRvux8dCwttumhWT1wGw8Qn6n65xitX6c",
  "key45": "4X27VLrc8PgErQEBpYo4pkZtFffXCyFgurbjAJeiD8z6vAGzG5SBDxaN49s88hXRtkqe5x5T6sVDGZzpUMTUy3u5"
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
