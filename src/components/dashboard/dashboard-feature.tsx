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
    "3vUFUUfogzbaxYGejeZsu93HUrguKeUd7gEeU92v2xYRdiV4vHAn9tQ8pNawTkBGj3ygDcJu4gxg9Z5migBQVnKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kYaKZtqGyQs8g91m9vVd6omAgXCEBhbchn1HEBKGGR6RnG447CMfnZ6n3guns3wL5aB6qwBVPazUMZKeP8BsRuc",
  "key1": "4EPc9RFcCaQCz7mw1NqJAWz3W5X9Q3X2Wa43M1WBFjVaqgdNcqm5zsmMcjoqEg6N55u5Z5NHZt4p6GN7ztaXi7ck",
  "key2": "4gjv8ShuWcTmNYMsix1CSUXw93WTiwChhveUduxS5wEqicFX4JbTWFwwgop1r8feNQNKEJaBbnra9UCrDXtbcF7R",
  "key3": "2CDu4ZDevbUAv9KY5LiaLicMBkNyDsuMhSXpnq2AQZQuibeJhVMb7Nq7xuBU6wrPHzU2yExNbLL59J5EZDEaqPsb",
  "key4": "25HBSdtc8Uww31RYhc4mdsRLMw175FtCXPYdfPzHUUrmaU4ipUV54ZCpUiqatrBNpTq7vb4BvbYpZetePCERPLmT",
  "key5": "22871WKqSJEw1Lkz4zESczufPbqYbyGavP7CZgWFo2CZhMQvnMwZqq14PVnNQ2KbCXJVpsSSuAq1GMd9QvjsJtxZ",
  "key6": "1CrMc5WY1QWCVn3xbqFXyPKokGj6FHt2sxbrF3QUvDRSjLkVDJCT2F9WgpfgZ1k6M5PHXFsUXkniwC7y8pVUNWD",
  "key7": "5RWtzsDgnugfHsVNTtJWzE8yhVYzsvHc8NPFFb7YFzDFQDaFH1Q4nzHysPQWNVmju4DAe3bkANB2G9AxS7AdjBQj",
  "key8": "4DPpVAcurxLvg4t2ncBJirZfiQ1KatbSCpr9JFuwjRUEHV284NigHM6v92ZJ2NRFacRwqH8Wn72njqz952b6VvTM",
  "key9": "5NCTCTsxuz4ZDioajhjWJnvekuRcktva7kN9zay9NFftDig2kdTEuJceN3RYMd31z3gUUDxvNMaJ7dpF8AznQnPn",
  "key10": "3nDwh9DDZrfLnPM4sgDhsWapEWxJKKx2juUSAyp8sREbL38yvfebBiCXxe7aQg4izoK5TVb4tMZ6Lg8ujYymEQfG",
  "key11": "54mXV2m8Ma7RENRuiBs84BhHVXvogZp61GvCkcsyJhyfhjCWog3UwAuxzwgWurJGyTxU9RQSEXfuvQQSyvk4yaZJ",
  "key12": "5TEbdYeMYUaQRAgVT1HvzTN8JRjUsQ9drpszcDUdtN1QZJ1fXRfPQkgu5y9Le4pWi56pHCueSpUgZAE2j57KsRWK",
  "key13": "2JdCPTLR6AW1eKLNAKMu9h6nRosyGPrfZfXLGXw4dktkL6i3ytiaPtBDpTqT6SzEk99KxsX7AESJgLgp6epozY9t",
  "key14": "kH7LtNtfhbKEfFPSyho1fmSQtZRKczvhmovLaRs1LEhp9gWT3rSfNfhoBGQyXq2xFsjHJ7m3nR2fPGWed2Bs38E",
  "key15": "4G3XMgkcuJxgGTwZn7zefxrCaK4RwghY9P2YXjJFVNZMDRTaYXCzj7UWxJfFVDPJZUVx65o794dvmDqV6fXhQmHe",
  "key16": "4gy83zFRvbgidoNGa84esFYJuJmZgY4nW793i2njZr4JRxCAVjgiuUd2nqcuvs4UN2DRm2zvf2EwFT5tceTWjYjo",
  "key17": "4cdfXQP9goeYKvJxjdcFxbE4wBWTrDf7RgcMk5EHqBKJ3NEXsXTPDoWVpvVpU7aMYMtNRgonBuHnKSvYFUoN45RJ",
  "key18": "41xEU74ME5nGbCsTFt7DvzqLL3K5E9ZRdX3vRNT8DRPmrWBoa1KSP2QbF3ScbERYdbhUjxd5zjRqyuRkFWHgW9TU",
  "key19": "42k8A93ATAJwYGE9ZWqmF9h7hVtkP2eyuLhXWwGMhsY9VwwN7GBx43YMKuXFfzHPy8FncDNg4H2Rndq4R2w8ViDe",
  "key20": "5skWBVnXJTivHLsoibfqkU25exyiSttACG6po2xcPTXReUtF57vpGeqpZHrkzXRhZVt73Kn68SnSFJART5gmEyfR",
  "key21": "4ee4SWim7NDkAe1JeF89VLSPmD7ttmzQoesqrnNjfHi6FbNxvSQMKDEEYPnr4oD7yFJ4CwjxLfbZkkUnA3HFtJTT",
  "key22": "3curazFx7FfUD5WsZUofErVwZynFQeeAzHmUNZHdZeZTPerr6LYpywvssmQddMf4FtuiD1wtvrcDqw3U7VhfxqyD",
  "key23": "5Zmy162VUKgAUSdBnvatmjLyTqjTVBeYkHJbJLC654jcac9Z1E312XerbRGNDwBjsKRHvabEzvGC1rsEmVgGkYpo",
  "key24": "22SN5jkWD7V1uUAgYsfkLwYYj73VBQNuMVSf38GdfZJxM6NAxVNH7sdEJk1WFnddNwvVF2eGagakcumaVUYmcLh7",
  "key25": "3XdWsYyMkeyL9Rn3xWRinudxiPzKR3n8YpVrk5NDaQroF1SYVXtvapYx94jcF2YHJXm5FE2dQ6V9hefXiro4imcN",
  "key26": "z4rGaK4tgvVEJra4QET4Qyzbn85AK52DP4WH933umAfLVmcqdHT9Yd9DEiaf5KB6fHmdGTGqWvX6YuxasJp4Zrp",
  "key27": "DpzQ9Bk9fagKP12dQBLs8VLYieMyEe52Ypt7xgRMLKRRfCP8sDuuQ4gLj9q8MJYvgdbWp1bns2WGpE5V3cCobeE",
  "key28": "3ygCenaCeJzCMFTdUzyqX6aK54gfipVPLThduyi54qRCgjpXQ4Np9qQxJqtPmrHPzvrikCNNo957inEY8fxTRJ2W",
  "key29": "5EXmzQ3jXpaX75Nmtbh8ZoeHZc59nWv9N9XvEMoWPawhYzCiB3p2H5cgeWpkJNsJyst7jhqvp9tFLRfu4tydnUey",
  "key30": "57aKLUQeaHbuLhCRx86st9kjhCWuXYPJp8M3iS9QPfcD9dS12ZPF3Amw5s5QQfWmEGzXr69UH86iafZiQXJyh1g2",
  "key31": "5dHq3PzYGzSdgyeAZ7XawvDs8yZFarAyvL4DmHv75ZN6oHqk9xFLADLhWTaBrhZnofd25gboWsAXHrNNZPcLzdzM",
  "key32": "5rPQ9dM85MvAWqm7wQroNKobnykgh9QoY9AC1c3sctjEpdpWCCawHsNygG5H6uKGY46ztVTHYJPDRuvTq7LNUtw3",
  "key33": "3KuPBZa9RZWMLteS2NgfnJfiDvrzgH7AqsyxWg6aetf38aSwDXCBCUuSkBYGCXftYnDkuK3HuiNvy36ibSQ12X2o",
  "key34": "5sESnEAxTnd66mYWdMCCsFdoMPSE4cQBKNRgGEvTToimZQw6kkMU9xudrznUd5AMemgdSng2MjqBzmHZtAmrhgk4",
  "key35": "jyCqzUKN1R9henmzXr4vsTsAHFeENyFCKPgwrE3F2ZUoKb8nx3Tk8Xv33hvyQrJyfZCKGsNd2QEa2PggY8fk8AA",
  "key36": "23QigG5tsZjrqWwybhxbS1eYrNrVUSgmjHUN1PhpC8UX5sPkWYnFC2dXSztQR2aXcrJr2vk5fB953XF1tD7dvh7p",
  "key37": "2SXFfPz2JYc3qrV848w3Ui8CaWcSXD1tNZpFF8AB6vnfyV3KTjPErbTktcxBD1fYr9xFwMMc6aCqPonn1J5ygv2X",
  "key38": "3YZPHRtApEMaDehmfKGBQb976C6FXJuU42UGZAJzHpoJqGM2Digzqie1g8ScQ7Ewe7StzybNkAkUEH5gUiAXtZjX",
  "key39": "2dw15MQv4HwW8XSEdLnQrqAMgvAR35rdFRaC87imyBLoidHuR5gdWCYEkR1CBCUEKXnN22F4VNv7wRgCLd1gisjd",
  "key40": "cEFFjJCLSAqMuTept7D8f2XpBf6QFYMj44JD1SQixq6JW8gXKqXc77WNR1gtTY7dszb9cMwwciL1pCSdUjhynih",
  "key41": "3EYZ1EmZCBkusWq5HTuxFSkvh9ESGErXSafDzT9KCgoxRrboFtBD5nk8oB7tbUyJKC5GrFTnf2oCW2hT9AKv6S9G",
  "key42": "Tj8UtGYsZukhpnd4biJt63QQdjkda5vk4JbQ1Qxa6aymJfo1QRcYx5L3rH3HTqhu2F7w5P473F4CMqMHAhkTzai",
  "key43": "3WtfNVYdqyRMxanGc2NSsyYB3UqZeCAmQsNoMSKVxtsj43reuk7co43noqw4aUuExv6ZSbdUF3PFpnJa7BNYvpcS",
  "key44": "2AFDBto8n82ssHkCFD1UP6MSNaxNqr4nSYU3T7zo1nmtYxDLiMJR52MLUnyXfiPFmCnru8a22ToA3M7mSRzu7q6i",
  "key45": "4EVTZXDR9FZc83ZeALvKNryADprAmbgf6HXrRgfx8bMuGfaXUKabRUQRXGoCJUwrHHfpCQgMdzLN54YwZPsGcNHW",
  "key46": "35TxgvbMsY8uEnhPeTgUJ1kMZwYVgBY5vKcsT43EwVD3oUL5DKevvq6ykeujTZ3A4mcFNi4JAA3Sk82kphNuWwbE",
  "key47": "2yRUeLbGEgc1LWrBedjRfww8suyGMSwZd77RYXjv4SvXh38XouBSr12sfEFbYNmWVmNTcvBiHvmYavfZ4P4DfzU2",
  "key48": "3PKZoAcQRw9JC5ZpuQgvJYqweqSzbgMAZyvQQTZpEo2PFb4t2JzL2PQaiJM71ot6Zdmc14mmp7hUKgU2W1fqEMVg",
  "key49": "42z3DQjjyKzuVA68rUyPY6R9T5Xoe43FhSs9snsokwTTA2f6Lr8T5eW7c35QUGQAoPUHALsPy6bfkuDa98yWder9"
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
