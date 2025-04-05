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
    "3HvN36NqbynJnPMTwMtkMQWHya3YbnZynUse5RAXTAdDkvZHDPR2da5qoSpeLZpoDYGGfe2kwrGgTYDhMR8G6NfY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LNwhk7dxineAC552xpMn9bRFGEXMTKzJRJt25YvshNqHkwhPQ2XsM1LMdVYGg1hDN7f5J2kjayT48oDPUpwJNW5",
  "key1": "5EFi2qqi4P5AqRBkSduLUCosphmoKNeyPFTRtQ3naJU52rdvQse78ipN2Bys5oFTGZngTZsjD4wSfBoFGwXK9d7",
  "key2": "5fXcTYu6HfCTWGTdvL2zqMfTLUSGqnQEVr1q2mhj9DxKKEUQgbYsUHCxE8zfdRpHhva5QiXtsBG9EGoikCRFwYUh",
  "key3": "38pjzy64YYBmkTHf7Hx3sMsp2dpDHAWVqvvWiwLAwERdNNuwusWYFGMx9RDarazQRjbaEza74p37HCsD4dKzCKz",
  "key4": "2Ddr5RtprfSZjQvbkQkcT9zpueufzcLT3uTyjWgavdGYDvJVk6iTtP8x8BSzbVvqYQ1xkGJ2FTp8EV3RVZ53KrTr",
  "key5": "ozMGyu4CKBMEzyCsn92T6hN6PDXHePzPRE7BCgBhpKaFdY3zkCVYcWbCJPU9UZx5VeyLZJwA2P1DpSS9E3wnYeo",
  "key6": "4M88z88THwAyT8LSTqz2aLopyKkgzjnaRQVGwTiK2G8xcpPWtpgTBfovsiQGSwAJFvpJyTQACq8AtpEnxdjgDMBT",
  "key7": "44bhS9H6Ciy85Vw8iVTmF1iK3XGWz2TRNDUQaK5jgTjVtRjktUQET6GSGmwms7YA4ru92UbXNiMB38kPvJeABzHF",
  "key8": "4vHu527g6aEM8Q3yE5389aqVtcGMcED9Ctq77zhXH9UTiWDTGcysjLoXa8RfJ8AsJAea1iie5bLqWsZEKqcVQGtV",
  "key9": "4Ki2pawCxicihrsWALsQbrtv1vfncY6AoxVqhqhbitaTs2K7orUqsUUcNStqDxgvi6sR96wcVBMRyafsXCsMWALM",
  "key10": "2nFY9dx8kXWsphSbVn8xVoPvEretkndcqYcqbDEPqL1gLfLyhdCvbXzwC1Vde5ErpwbtgCGSpqngMCXfYHWCasW7",
  "key11": "2WZj5JaRUeTEF2ks61An9o87TwLUrSqVk9tfQhBQXpE3htiLC8qkjHBQwMSybBqh7iRYWm4dFS6yD6ByVott4XUd",
  "key12": "2EnMaYNs56DXRB4t3U67SMBso8RepAf88r7mQTM13VL45d1BXL6yexQLsLtNFtdnu9kRgtsskfVvtGdTxPWDzk2c",
  "key13": "2aqZtjaTDRMkCmxxZ8omDLZbcpmpP9ojq3daAKQP3xr9kDBaAAthxReY2LBbJQvDjZ4HavRQnHhWKoSWnD2wabWU",
  "key14": "3TnCkfo7jepti9oJgwBoHkM9HUfsLhFmoaJE9owUjhjQxdHLPPEDnh4p4j8aqQBuRmzaQm5WjqSkspbsW2FYxS3A",
  "key15": "5kVzLzzYDfb2KSayze7khfMW1LCVbcn9a85pKCyLBZ8kpCCoN2qrVUKTcPPhSr55o99xQHszPU4D5GsTpffhXNRN",
  "key16": "3SQHViRNW3buiiZBGR1dbLeeKpG8uKqp8P8htDfauuVtNxYioxtBgSgmyRqAgP8phpUFumUEqc2vwwpCniUK46KU",
  "key17": "4vAs7DqVpxSSeF1S5Ki1jv2m7inmqu9bTk8HJZKKbo9S39p8LqVfo8GbgvGSPuTr3YPMwzSMmh9egK1DudRUWU57",
  "key18": "3VVYWVNFPfvMgynzKXuvyx226xQEHokFK918DWcBWHsjV2NUXU7iBeF7HQhDznAuXBegGNEjnk7WwCNEPtpyjSSf",
  "key19": "3VqEXbbcKfdLRF7n6GGPRLhG47FkSEBnhThueanqqrPADdupa4r7eQxeRQEa1PdZjfuv5RkgaFtSWqFM28LZ492V",
  "key20": "PxdW4ntcc1abs8NYCsfyexSP6wFzSUFDYed8aX5oG5NFtuC8ZGtGJ6qvmN7fWqkeYDJQMzycWYhRz97P95Gpet9",
  "key21": "34Bx5zM9N1Vjs8q9U73oNN89yAaUCtJQhZ657AfL7ohQcEbYKAv5MDuukoKzbfwVundesLUGY7Bii6BX4itehm5A",
  "key22": "5K9UqWDL1jrQgFKj3SzUgv2mJRqYH16218vDbdxjFKrCW1P9YYj43Agup4FwLeqtFXvaXYNQMRwBpnoKSFkh4YkF",
  "key23": "2wM5BurpH43ZtDP5JSkyiJEFMzo324KM8YJmvLAY7JAJXM7FMJymoyGACbRLqJ65Fv5KuvRTZ59Ds1QZZc5ePes3",
  "key24": "LHydh7v5nynXNrQAZ4hw2iU2ovoZsK9jcfcfCD8pn7pgASf2Yi8wHURJWJ9z16V8ZAwhRhKq48vzd6xUA4zRZgV",
  "key25": "5RcNaHAQTjER7HFBEXsJTfprBoNaPjdU1GQ92MtsHGAHnWbb51capVhBnecLx1UpwqCQiaWdoa5EQxeJAB6pcGan",
  "key26": "4MUuboewcbN2S85gAddZ3bb2vwU5UiYRMHTdG9JcKBUFVQALwKtLnSxYca2318jj85MjVqKLbe4z7UWr1Habqzk4",
  "key27": "2fsXFYEnLLA9Airm8En3kx5M948R9aXnioJGwaBFHdczPXpUKASqMV2KNf1huShXvkavgMAN6HasYuGBn83nxG99",
  "key28": "49LLGgucfQngrwg6qJz6BTEhrtqoitK1hhXm9TppCTCSmdKt1QY5qhYSJ8BWAeF7LJQpQTPsv9iadrP28yeNg4fG",
  "key29": "3RWqdeWzo6AKrBcMxZd2MLshvtyy9ZJzuuX1ksWqsihdcwehzHSfJFJNCwnofgsEYRfW8svLvQjf3Xwkbb8zmWFh",
  "key30": "LT3VnDFfrecg8NXinV9Hhj2DB3PCVRTHmGB5QVcfXgnwnTbqn3PqiqYcekMhf9Fk9iHXGMZTvHEcra2xXE8q9Dc",
  "key31": "2qXP5mUeByh1zU4DsUN2TFH6CtQmPdYRaatQW4p37PrkjmdFRZh24bfghtuTbGbyNbCyucxRySV2FZNV9g6Kv8PK",
  "key32": "3R9XkEye7ZU6dDMRXec1cBzSvHMBFBLfTPyw5wtP9YCCjRDjRzsmjiP8DurZMDmaeoLDXDmV58nndHnULRdzCCvU",
  "key33": "54eR6TceJnsLy7JHsf7xbR1mBZnMmAxm7hBDMDYt47jdkDappnrmDm2GT7ZwAr24JWZXHNaEj7V2dTqETrBnnPca",
  "key34": "2M83BDaDXihVMF8uZkndDPFTqULEdqYSwB2c34tMoM2sUXDzjKSrE11oSsjvCC24Mb5pNtLim2H1rWQhBd6jLB4X",
  "key35": "3veufyxRwzqyu5v5UbEB8r6dq6oMouTM3kRGQ2XHyM65RL5QFdmSvqg1hRf3ScAKVrefcbDnDe6VffPyR5PKUPFr",
  "key36": "2A2viQTYxW8chJFcg3kUnmSj7N4ybwXuPGma89q95V9qzC7GDiWSEVfJjin93Hjx15eqKYcBGyAzPuinX98rsUhv"
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
