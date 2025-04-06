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
    "3c3SF19TbiLCDadN2kBi6ar7jzGK3H1e121XuYBmTKhjW5pgqADxMUunf6cbCfpmzJWAkbQ6wnz3Gh8iRsTUSpZ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GPiDiYA66WQmuDLZu3Qi232mtoWGya8x5hD7EpkDLyWmFgtWhMcdsTHE3U5KsDNQLAHrvnQQDC5ufv7sdqZFk8u",
  "key1": "2XSEGyZGL2UGLbM3CVyfzFdY3b1ZuBC8p3nSfuT5DHpdsxfpRkFfFntfHzWy3RMq4eiGi48EgRrJibjioxqRz7P5",
  "key2": "4eL2zVLkupmbcroGsjMBWLW4hWhJwv4CB7ZRtEYUAUfFStT2CvAmEXKWrZH8DYuAw2SuzmXcWLgwtfaGdiDEQnM6",
  "key3": "55KmaV9gKMivsszGJdkt9tw1suScVEpJVLKPJ73q5hqsrog8WVV47KhRfQi9MPYKkQ2ZcKswVgJGFtei59jAjWfE",
  "key4": "3ouMVsmNUWBxxfcpRaRYxrUS7Pjm4q4vHVcP73ZAKSXF6wqzBpmG7en19uYkvjmr7zxegCDosHueJ2KLyWomNfjU",
  "key5": "2iJ2GLasbggjSCxCJPkuN5ntQ1QLirRQUhvycr8bnsQr8H8VcKupPN4RvRzFCwZevBfgmuHbpFYt2c2FCRmrSfXo",
  "key6": "5YvM73dUtw8xaX9sJVZKTNSBfRhg32ETHzsVoKPLYchTShh9EBNSVgmHuaYSNVeyXpfZjahvQqTYzc51VwMkPJDT",
  "key7": "5ErJjJBDHyaw4Xa16b41zTa4e7bZhunw1tuh1dWZBdrEzgrojYQbYHPmRfk1xeDeQViAgbvMcyhmZdVerEBKvCVX",
  "key8": "66xBn39h36KCwpEn9aAJ4aMKNtxTNizoumfYXuFuXqGY8oBPtXVGTBBqtrLmEGwvxxF2t1jegJrKqFzrQTKnAxmc",
  "key9": "5Aezc7vEuCYWbpuEmqgSFSNUmEtfJ5zSur8CEQhUKbjJZzGMqQqrwLvQrNjCcEhHBcKMf8nVACowgw6dBUg2HLnj",
  "key10": "2mRCv26y2y5MTR6BJ16EAGUCuk4tgG5R8TLrAUCpi42dU9SNtiixV2W3FJimL6HBLQLzFZc1U35VNVLNunDuENmd",
  "key11": "5TdrK8AN4N8uVfZeVYxSWqAwQNZ7cEVraGxDhymwMKsG9fZ3ZsT8eVozPiLvL5YpsZJpR7s8UEk4wbAFwSvzN7W4",
  "key12": "4Yx6FHzaaibPYHkZNC68iYdyqhPbr3BQXgRmQ5xK5xvnTt38ov6yix3JZAr9YizrYxSfGPxirxnafzJ5ZyHyiHJb",
  "key13": "2LvAFRWDajYezcyzQ9FXtmBvzcwgJXmKhQFpZQCV4WUM73JUvEgULvtcy8kSZHsdJ5cZwudD9ozCnUrDH6TGYEvb",
  "key14": "4CmjQRUxPY1wZXLTRLCT3gcWBd6kcP58ZqeRKPG1Da8yPDiM7ooEVDYuCshDjiqDThM2MXQCMhBXxdE8uAowEsP9",
  "key15": "5zitjExKuTXx8Rqtowj5j5jYm1H7YTcoevmmiTay4BYTmqZsDGxSkGWq9xBZV53MViqGYV6e3xDKGcuXWq23t7so",
  "key16": "2Z7a6gFKkf5iqiQXsQsJW1ad1LGrzn6qpSxhLNUboo2zCjWw7RQ5UPnTHRyBJk3f3GeRfPjwAa3iR11wFkMXyrJ",
  "key17": "3ujdwgUKe56dC2esbtgNKnHFdN9Xv75RTcSPqskGKzLy3UrAhCgLAL4wTMuyFuAJRKDwirL9J5C2UvvJPDCErDcU",
  "key18": "4NicEze5YxiFM7GpSFTiTNyMLCUqxVNMkhj536DWroP189M5CF8y3Pt9NZRy8ybm8zFRFrZXtXnMZv4ZGtZTXgG1",
  "key19": "56gNbPYnrihUawwuWfXwYd8XiRjgtYBPXHeXfWannAuBE7LLxRRJ6f7N9euWy4z34zkqP8wL3kHpmGTcJAyenTdb",
  "key20": "4bwq8shrosVYrNayVS669Sk4iLQKUegTvL88cM586tgAnvvJyWN3aYLVxcXiY332vdrCvf9i6T66ZnT7xzUZjXzF",
  "key21": "55sNjxA8uDPpfA5WBLoJLeh3nyqeJsgSPzSoJ1Dcw5jG3wbq9LGrJtcF4FNcwnBMsuQJgnwBYGwEJz71Kmnn346G",
  "key22": "4Tk9Q1N1HeFVDp4dKnqbUfmbAaFVxFPUozZdLHnwJrM4ne26xcnVa7ziwnZYqoZq1PBCKG6ysBbvrdyaXGyxqSFQ",
  "key23": "32Qz6Cak5gNk9DF5opWVjT9EwGQPCEWCsgf5861uYsF7pUQpxaL57cBTYsPenTL2GXY1xLMiGfz8rKGukT3eUE9G",
  "key24": "5HupuaATNxoGGxjEsw7JqiUcw5MkN79K5HjLYRG8739efZwJ1oBJogtxz4kA7gzxCqw7KT9wECumZTftRFtNxLpy",
  "key25": "2JwCeLh4NTohoD8fe157dnnd9LMt1GXCr4cGEzbGtmZgj7YBR67CRJLbqD6JDx1F6xQ7FRctjfzeMmYvSvjkQumH",
  "key26": "cj4Cp5TwwyZ8XUrFiiZv8W19upJzCcth1sLvSsDh6AcBgW4Jdbb6c3tv63DZ4tnofxA4oW4D3gjyCwKEcEgiZ1R",
  "key27": "2RgFtoouWse2x3K3YgV2zkieHh1DEkzQ9rQrX9vPiXerCteynsWQb2BrHo9cdKuQJK2wU3zXHq39hyEcqeQYenAV",
  "key28": "5djhAAUivZrySgj62PpqLbsPqueY64Ve1pGAQfs5PpqsTpZFvAEmrmVUeHyeiQUVJjojGLiLod2jrQsFMLhCNe4R",
  "key29": "3896V7UjnXpQMkS1qLsnj1it3bQCicZg2UKrzp9ivQM2GDV9moqXohYJ2gyR1dKKo4Kh8wN7vVXf8BM6rb2G6p5m",
  "key30": "3DZaDTrW4SVFzPfDbGrJC5Pj5KLQyuE7smb3sb1P2d1jNykXinpAWRY181fPFPYhGzPMUGdo4b4X6pfZwb5R3Yox",
  "key31": "5u8HqAaqowpnnNgBsj46ENTovF8TbYuaaUH1ahYhzQabQCiF9ZDBJPgiqSrgVp8hFhucDiJ2ndTRHSnZri7811Qm",
  "key32": "2bcLMWYEXPEwjbzZu2Uh4nvLVXfWzNwhCdZ6aDczz6j9jgr4QyGWdxEnY11R3WDWr6GwekBV3z9hZ2RnqK8FREnn",
  "key33": "YSszGBzgkT5GfYgYB8Hka1AJTxBVuiBY3jT3sq9tjwij5XCv87J35GzoDQ3WfvH22xzTRqLYtq9fHT5KuW6FKCT",
  "key34": "4RtxPSrjNv3j8UuaQmC3eTujieNKu7KjHF4WR5P38gK7zoXf5Q5bKC14EVmrdGCShjUeS9aM64fZEm1QJv34dxs2",
  "key35": "3x8SVUvyziTgdg6dH5ntzHY6nwuWtzwmrLujFFxsFp8dgugBr1yCkVxLCwqxyuTtyGn9VSecv5JUohEVpnBgxas9",
  "key36": "5HrFMLx52DmEikxHTw9mStzPnHEYStZH8x3S4MBknMpmVBck4oeQCUirhUgWkM5tg6zGVAxZsLAEdxe75WerRKgF",
  "key37": "CkuyTiDqgEecz6g6DC52jjkNGTmBFx13KRca57DtPFZXhTPvvRGULS1wMxJhx9ur85wudECucapJYEh7ZMfQNwF",
  "key38": "2YHjA3xhptQmtgjPSu3CEB3See7eaD2YcxAoQ4kSF44LDBQmpq3Mtu6qWwtZATMUNdyVBGYt8Cn2N25eVsncg7Bj",
  "key39": "4SVYERagoEDiD527LXm4ff3YXSX9JN1XdWJd6nkWP3VZcAie6TEWpeej3VNiMcm5JQVrTq98BZXBHQDqctccfVHn",
  "key40": "2hStMZ8qSLsydiuGosFLZby86QNgjfSmvVyivzEYLsW98PZB56iUrec2hg1WrqfqYrRWCbrVuWzsnYaEpryrU5sk",
  "key41": "2C5ikTDCwwFQ9FivupcHvBLuL4xz8MS3adWpjrL8eNF5CDPDaYh3G3D5RhHyRPAky9HkpiZih16QQGn8fBUSMsPS",
  "key42": "33PQmCX7ystkUEQyJeFg2Z878NG7ooTsZCabKEETwPDdpsvezWMSv6xcZPJsuKS8r6tdUPxJ3f8jNpVpadf3b5iP"
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
