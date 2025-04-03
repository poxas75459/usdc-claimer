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
    "4wGRV3z3pQZp2TjZhmZnPDqp368HHMTBUTmb6jFu8TRp9nmfh9w3UwS9G2jsZzxJasqqsbtVEcoLk415K8oa78Lh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oxCpJzHw9qKpcjLW6WHR3xzNaokKKYsRbAsfB4fsb1uPk1TEyp9co9sg7g9kUV3zVR1zJPms1MV2dLcLPnyaW6",
  "key1": "25MQKY2hPPh2HMjG1StHrvfsLSpGz8uCVrxZvvyWhRfdLEqPeY1gVfAudJVJz78xs8EXHuhkNt1mbKj2JqTsLTJ9",
  "key2": "3AdMHAZzTpnS61jhLR9oUwXQg3nhNTAMhcu84PzEhzQKds6bXt3VwpR8BMrDsKnxMeTUeDDEdRGGvmNXLtQMpT6h",
  "key3": "53APPdkqvuFVbnr598u1mFqUEVga2iCSnzPQg4MpEbMAF3d7dzoDbNL6f5EQU6P9UvjbmtQiESXtFaLewhASC2Uu",
  "key4": "8xjTJXUG6CbqKBv85NnGcG8P2uHyoy99Ss8zoiDpTVeARY6Qx5sWb4upG7Kek4ipmQaeqf7tnHTDKeAAr7EVMPP",
  "key5": "4m1GhsTZB31QFBbCwfHc8VRT7wJxUuJNLqSE8sQeDtyofTm4w63CwyPZqh1zvq2nvEuCdGYkejtt4NkyZAxL88k4",
  "key6": "4A73rvVCC8YdjQG8EW2kgq8MPBQW86rNzraHS6rQQGX2jeTCkzMnr2RYctuSgzZKqpTtRZYEwZbaroNX6B6aNNAq",
  "key7": "2ZWFdzKiCzjdXN5GAXmbHVqFjQTuJY9cobgZ5jTD2w8ydpBTyMV5ETbUcych2uNAE6MSMjCX26TJ1jjv9sbsHc9W",
  "key8": "ARovZJqZECDVrV91HvU81s1HrxV517zrgmEFwD5cbsUWoPLtmWgaqXyW1PP2HLRXxnGYosxSMSJbJZZzY83k8st",
  "key9": "33DMDtZdmUhkXLmjsvS29z8wW8cDewNz4rXo2Sy8WTCQY3FbGvfenF7subZ8eKx4WCDV8oq8hMXdpZFsTpTcKP7H",
  "key10": "4RXQjKxGd4UZENPzdJwyVwfV8TSoJENqAB8ECtV1mSBGBSnsDznyeP1xz9pEbPPjLCGis1rWPECx1JveMnWsAugU",
  "key11": "3MX7SeGy6kwPfgxfyis33nJCQsARXzAciPe5Vf7X5gxCvnhCNv6toXAxvNFo4Ttz9pTeSGCeWtFm6frCAy2rCuYG",
  "key12": "4x23cTMcuzZfezorgqurywdYc2GggvBy46Y4k6bWC8wxUYEpzAYSErDBbY3FD83wEz8ruxb6ihJSYMzsRaQ3TJAA",
  "key13": "2pgudiktfB8yK189HLhrGrMfRH2HbmLaSqc7KPvwdQ2oDVvWJPUggpAdN9F5VUWTX7xhEaZMLTQ3JExQQcwWPRzk",
  "key14": "5LxNMkN1GrTBcDpSyJtgNdB4k4rWs8XmAjaCtFHjN4HSEBqj59z99JGuUgiSS3hupDNYNYQwZbHBJasL4pn8gkSZ",
  "key15": "62QTJSnVTTJwFzHbMV9Q7cfVo1rTQsm8hasN3Pszqdsb9rxQVHxyockcSfiQvNdRn2BXWtoumeB6FF5MFjzA1EWn",
  "key16": "36iZPb55HRUmg3crE1vkw2mp6wfvqak2jqEWAFMegHY12nCkaVn6oDN1thAVZ4YT99YBLGcRZQFUbvN4JQdXGBr4",
  "key17": "zmW22jhggcusYSUGbBz578khUhQwkydu6a8gviGS4u3db6JM2xNq7bndGKipFc8vN2mcr8JSpj37UVZ4ReuhAuQ",
  "key18": "5fkJEoDvZMBnCmvKmr68apQD8jdQjFWN5JL75K1oN7EEY8rxxttGGmDJHdxBkGhH1JfDJJdDUbidzUgiLDYMHZtv",
  "key19": "2ArsJm6Lm9XkUNaaYXwCWNZFc1VZCHnrQKpGzSvwW5oiKuUQXVszoiuBHasRh5VtxiXGN2sgDMmL3atAwGqaexvs",
  "key20": "65S5DXkVodNJZbirnDvY1rixrc8xUgFVXo5drw1RJhXEngGZyvekA757LMqCSupidKxgZsBEvKhwf6UDEufABi7U",
  "key21": "4arF5r858Uagg5gDC4QZKCm1yVdudiBCwyUJRwWoafdg8Ff3pd53m5X1KPQe7zJyVLuPo8qvfZSMBETWVe7woVRm",
  "key22": "14iaQ5PyNHTj6z5bLJXavaQUrcuEVM8KuxfBuYuGSrnQPYyiMa18ZJNMLnYe4Lv294tcgndN1thQ7psHNPorgSi",
  "key23": "3TXZCUFtsjdrKYF4Jr71y9dgzKSyMEb6x2Sg9FyHzEHq7e1QH7RNnV4an6eFWWBF9EtXGADbAkwVLDJrPRXzsure",
  "key24": "62J2nGvPgUd3KNVSf5x1pNABHJCtqUhqqECtoW2BBeD3hqs5xyMX1byUwgrN8eXvFLrWM3EHSf37Q9NNdm6kQp5z",
  "key25": "4d9iPb7wcmBs41Nijgxo8XTqkPdmgb2S4DetC4Cpns3ovPEA3rQXs9xMoe2f46zGyZUHzrn3vFB7gfKoKsajf13o",
  "key26": "ozKjiU4seg5pPvi7Mj7zYCPTJ2WJZJUPC2hCjZq5xjMwmXtJcHMmPJvGxBAKTL31jr3tbFpPHrnVW6xYtcnnPqr",
  "key27": "2NshDCJSNjx6hr7CqEp8DCC4n62yLFDoTta1cJSHXg4qjbrACnURrYPrgZD7n6PGvkshuhMLnLqrqjeUHsSFXeMT",
  "key28": "5AgaJQ7Mgh2w5QFEN9GttStYejszUAWr51RWXTKMsC2682jVLe7CWoimqtakxBcHLjdEfptTba1JNPwEpDPqBsXX",
  "key29": "5BiY9hmmvXYhUqKKLWhBGKuBSFKgvJGtgS4ibnG6LVjG6Q1nxMftWFd7LmSKqMtoTcPwLAomWRDbt7qWRrsmckzu",
  "key30": "52LPoJVdZCDkGhKwYnF5aqSD2F6YBfjHXw3wWCstPv8AJ8j4WVufWhGD1sgfcRnQN2CZmYTNbFqS2cnLMpvBQFQK",
  "key31": "128Yt5RniobSMhfuViFAnh4J61NsrDqtmbCzeV7PtMnxA7nWXeDvtu4cZLiqeXANXzXtfQwdcmnYkB46LaVfCofE",
  "key32": "NGVkwe3rnihBPzJ4KRr8dahJKczB7WhbyVcgu48i9YM4WQM9rZjxYNV7vfhY1XqGrwhkpBobAtaA63AAg8dTw4F",
  "key33": "VpNnbSidRo3Tgc58pLUunYxv739mMrdhTa5F6kHPwkaS6vfQxbtYjS9FF52tsvNFZRDQaJksJDWcSQt6i8DC2kw",
  "key34": "2ovW6NtonSe4yCnpWgNWQFNT8kQB9nYybn3uUYxmkXfwnbXVh87ND87ba18ze9VUPk4ZqEAhq7cnup1PTeNtYgd3",
  "key35": "Axp4GyTdZEhyY5iBFb5PTVhNF4sH8bYZtoVdzmXosRtv5Pq1Y853PWHpaLontQMpFmvMxBdsBEGnnudWXSrBY13",
  "key36": "2gHY6jSRwx9bmyFoeavyb6uiUgfRv2ACSX9fD9WmNVw9PXoyppp8tkKKKFgg2V8WkVNPB9z8wSbe9Bx6gZwjnGqh",
  "key37": "5S3vjydqkhLP8izMoX9Vpm5zpNzjB5NjqMu3Y9TEGfRRMDxahjjygAREn1Eo9PXawpCH1HTXp1urPV3f9VKUSYp1",
  "key38": "3958MCtRpXzLpPi8KSU1HZPufne7gycptkg3bd85cEMrpBravaggRHA1jSD5kkPs3KiTDifQeXckAxTkWoAXsh7z",
  "key39": "Kwkq9BymNM75f4X2yvCofKpyN3A6fR8Edi1HUsJjadhGWK7z9n7pU6A8G52CxeRtCX51oXGWN457p1XYYaQEfib",
  "key40": "3GZeEXL3BqN74TKPMHCTKDrY7a9dNuzLbfX4iWifFUsCXA4JnC8Q2NZR3ji6YWAW1cY9vaWPKhWuYcuxSEfWxEwU",
  "key41": "3mkeTfLALdyYhhYNYWkPdi5yyBgoKTyfy1eq5Lh173TcUcg2UUTLYfvdBPq6eJ5VABsR9j8ryfeTuipEhknrBgRn",
  "key42": "5yWWSxg3SZz9eX9SrT1FsMgBqVSeQLzYMXw9AXD2tQKkLTJ9PaifbLDA6EuhX31FyEBLQiDvg5Zv4UF8j3AGnKw5",
  "key43": "4ELfkpHyW4G9Ls6s1bBvMe1PFdd3Y4PoCyF29v6rTzMgwjqrxmyce3gceEMnzPjyfh5LP2KDccaPAwnUm6ZLuiqB",
  "key44": "4J2TwSDqeUC4ZytYtZSu6ygBLhDzXWexHwywr5jeuNRNsCwneRmt1DBgcHekRcsqH8G8CeMYbgCNE66SUHzH5zyn",
  "key45": "2jRj2pgznUijuJwEmH6ZuCfNUTxdQFtwDvaA7jV4i5XNXpsei5iydTMz4SD1wqDEBeNJxMMk7FswQ2hU82UKCJYb",
  "key46": "FC2cfz73z5Lykko2eCu89CFUzBV94WB17pnNHhZ28CnSiRATTnNn11ZJfMr6M9NTPFfUS8RnUfiRvzn7TAZtfNb",
  "key47": "4k645a7bei1RLC6kFVsWAVx6eaSVLixN3bzfwtNLa3EsY5uhFV9CNyEx2J3SNifKors2usnJrhJdCorExRAN4oV2"
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
