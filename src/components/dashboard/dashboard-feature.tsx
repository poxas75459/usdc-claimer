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
    "2qM5RsQutVidocvDA3iHYsxe9ZbCiix8MLPUfFEdf2wgHoWoZWsJC8G4B2JSWAxSqgN4qdMfnSA2a8XMKBwm9FdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WMkHQAzBRfkATisRM1hUF98ystbhkMw63WQLbp7CYdE4drt2LMMRssE3bJMoBuW1JqotU7a4D6CjsKYKs5BeP8t",
  "key1": "5PW3nbh56NTJP7ycnBTDGEKax6sFz6ij3crkjgWrVEEAnEq3q33nyx1RaZruLkP4epd3qriAdVWdiaqbtBr68BVB",
  "key2": "4KEBQq3uLKqYqzXzYkHGG8PBMQ34wtioc28JqBERZpMtzs5NbtcM1rRUJ3bV83FPEJ44MSSUP4beunmAqTV4gVHE",
  "key3": "ke4ypZ9dcr5wq76b8j2GXFtysFPaLH8CTuPJrzcXv1kVxfDkWmHWp4TL81zWWcyaztLUMtyAtSYEKbc1XX8bhgu",
  "key4": "sFJLuWnFFS3RzNaZ77eun2vf11aGZLDu1UGwUMic2twqJpMqfTnHKHEbXD18uUzYXoGXYkuye7XPWf3ob3e4mmY",
  "key5": "2wGv1AzRTRsSMBajNwo7R84ofDiXXw9oyqUN6e9Q7Uvvf4oQNbxNPggXjqrTV91r2BGCMBzw3KvadqnCSc34tGwh",
  "key6": "2D8mks3suDxBXHXU5itGV3jKpg2Da1KHUbraLKrQbbqjrvwgBmwfsvuQMyJnWp3jR4xwQpN3tLzsDoBPvwCav53F",
  "key7": "3tpfMotwWag7UxG63SzMiRNMGwv9t5HrnomX2yuXsDpuEuJ3RTd784phd6s7KPnovfpeYavdo6PDyRrshxACJyGU",
  "key8": "3jCrAv1tQrBZ8rszX5D4qsQARJS5reb1RSjFvyNQb6rLRdKN8ECKYLbQvXhNr6D7tehPMdAvH5RXYq6J1a4dxjHs",
  "key9": "cg92QMaCB3P5HmFUVRiL7KGHKm8h3ufi3g9aXhrfmtvVDv4Uex4vvDpPZBrEcxstAtrwGk7eHa7dmLyNe3dTnJe",
  "key10": "57xagijBrTU1Fi73RZLa25Sf4SJKqCkXmqumNPayjkLmx29QGRptxXjj7WCpxFVjwhT8uVe77AWAAoR8MJdBXFdD",
  "key11": "4feCs33xdFPk1U4og6MaMTKrocgYV5hqGL844dnVt2Z6KQGtv2N8hcgCmUisHUuDLrJM2BvhdsgW31mfUiTVTy1u",
  "key12": "3HhtCQbh9UfhaYvVwguMTkppRNh5VRedMM9LXRNxKdwTDtdj2tP5ZW7jBUv3sydQPPxShjYXBBtM8rHFArV7NG1b",
  "key13": "2h41BE2ZxucwVUY6kjzcDRVBYFuKPJvgg6apfpjRZa5XsPicgZBwFc39Nizp22UkFyArPixmXcfkjoZNSDxwfwfe",
  "key14": "4iooMbvt9izMSNeW6935briBpL6wRTbvmXcMh2SCmYRY1nkeiNMcvUPjAt1mFbkrGNwPo1yLHNZhHTz4Gcg6ypmK",
  "key15": "57NYZJhBGwodnLjx9HWdgARJNF6kqEmMAPxEfW8nKQwdVsegAGpesAshfvfqDSeroBrDsH4A5tphFDmqWg1kkLFb",
  "key16": "48JJnKfWtaZF697E7iNBH1MWCfWWamtds9vTwnKyrm9XtZZRNF2SGXpm9NdsWqkiPBpVn8xVq1LRDRd7WQrsFGJr",
  "key17": "G7fvvXXvACCoEA991Zn4UYV4g9E64nSMH1jpMDxVmu79eLVGGWJCkpDTbKY3DPYk8tqd1XvPcbnVtULr8dPEsqW",
  "key18": "4dvv1MoqAN8ppVCZ6PKNimRb5Yjfj3dUTUYZULguAnoun1rutEnEfVCv5MwJfTsH19Nkn1QPDMrFkEwqv9qMUGMm",
  "key19": "5PAjnMPcRGz5Le2RHoGGRY9Nvsr2JYB3YAcxUfnTkz47eRG8me62aw6zQSorskJqajY2c9TeiJNxLe2xQGqEYqxp",
  "key20": "2k53Cai4vc7q2kh1ZhJucE3hdh3NMJYzkzrn98dmtB6uPHJQ83mgnvavRXDvxXKazoGqA3j67XihqhwGMbb8Y23k",
  "key21": "41GTu6xsPLEbJ2Gb35kdeY5iifz2W1LZZ4ycHxV8UmmF1EsTM1Rp4bFAn33j5fZDSqEGXj17GDvuaTFeiNk8c21D",
  "key22": "49oUUW6FoFk9hC4qU7wQnBg8MorpJERDeBippHDZNst5b2hQVbtXoVBfbFS6AQKHpjibk1Ki4x7jaTtxGpzSyuiU",
  "key23": "44JNqvkxiwHu16K2VenpNNgUtyqZjj6kkA5caGyj7VmfGarjRWVNBn3DdQLepsJT6TA93WssdbydbEZMS7fQsvis",
  "key24": "FM29NpEiwppiyvasz4aMhu4GWg1u3TXZGqJmFSCvqRfsUaDqEfCtz6HgkxdYwxcrQHH4MdEbT3qsFUqroVfzsZg",
  "key25": "2qrWNAgtocMFM2U4aoWCrCisBjFRUi56yF5XW4Kd86kgXZyGf76XgHR4r4ve4k3b6LgCFfLHLwQfJ78U9iykTzp6",
  "key26": "2XmU8ktLNQ3bce3gxHZ1hCEExJ4c3itdqrin1kyfDYjxKqdAdoj8eH4Qsb4884EXg3ZoYwS1CkSZAzqMtvt7zVaX",
  "key27": "5JFAo8HZctptSEcpgZT6TkehfztC575VvGkgsc6AUWnf4Srfcwnai4EBRHYj6SRuLchP6Nr3VaYrGaTSyHnWQWtj",
  "key28": "4hsL5ipct3baT1MHu1omAGd89bn9GErLn8jNCVkWZEydfWwxitaj1qJesFkrHjosh2vpodnyRydGw4QCMvY1onSH",
  "key29": "4ZWnhMM9sPruDAEsXjBgbgJ6sPK44tu6YJeWZsVBzTeWuFzqhnVg42QrEiqqMqJtVvRchBy2TJrHCihkTaV9G2fv",
  "key30": "3ZLsucvfTwC3KFPocSNAhnLYWXCuHodDLZr2kefMC5cZBL16kDZ9k1HhmyRa8prV1UPN6kGmuM3xTWscwnYkkAZH",
  "key31": "3zbgQzgot2DZsuzLYvPq8NSzxYAtXvA1FdbpwoPUPt6sXrbSC1o239kmcSpg9r76ERK49CLaRFz7nhJkqyKFuzAB",
  "key32": "4ybhkoMquFoRiAW9TH6VxopsaShb7aWCA8QkoEbXBRFMPL5eYcw8Yk73VYum5eHAQ9cE2tZhL8wq7WyAu538Kou5",
  "key33": "3DkKSB6ZjncfiZchUUGoYWYRZSXJPsvdC5CA7ckPWmJjWR2be39nVdtahk6uUWa8vV2P9WTi5Y17m5ZG2eXYL2sE",
  "key34": "4EZcf3JHzVr5JPvhnFYW5gG4KnJ29mcPGVwEDTweZv7Vm61hb1jm3WDkJ5x2j5i2JfBKSJw9B4Ruc9zjnhjp7qQ7",
  "key35": "4q4KNpND7eihGcFNs5pVNmEhtDPGJw2dwHLg1iokpqU5ywhzMXA2qzT6SKoeevvg6iLr1Beqgbeon3TL7CyzLnR3",
  "key36": "2sCRkHU3gujtBajc3Abfs9Jber4Up44fjqW7L2LLLVAx9e79GpjCpKxhWUrDQpDa52mtxRjPLkzhGdwhsLjPnt3d",
  "key37": "CiZKmwHixmbzrHZ1DJ4eWPhbmEvjhDWffC7ZrHvMCNJEHTRTTJUVknJGANTa8Ktsv9rrinNU9DbKejCkuRYcE6m",
  "key38": "3VTyeYWXoM8TiWDKkU9TEhFf8QAWrv5qERpXp1veRWX6Z2F4H7abHvPzNLEWNHGV1BZoPqW4CoqwubLJ8MMzJoy9",
  "key39": "4e21nBLnoK1NCjnNAndGNAZj3wxmjNqUTGMtZDdaF24Y8FfWpkohY4ooBqUiwhpe6nHuUWozE5stxp7McekNVUNm",
  "key40": "2wJMEapKejJgfpRWnWGhwRj1yoxyD2uct5pCSDaEY1opGBsbg7zr9VMa9zwkb3gNKzq9cMXgnWfa6W6c642PbWJj",
  "key41": "4ehTUokZjQ7Tvt5ftCeJzKaACpecj2Z1PzuTN2bz57HiCvcmbMgdsduNR8fnzUGRNTBzJwpCbLMjn596A1ZT1kHu",
  "key42": "49ZFHtCrRKrgfzsEe4MCTMdXyYYNjYgLrSHudn1u8dhSprcUynVLf3Aq1JfGKGxtwmVVksRhy9DBcrLBpoDotyLd",
  "key43": "3FtKcYvXJ55jsofEAQG6ZE8VrrYAuQ5iN3mP8UVLMwA2DbxtWi59Wh5tVUpdRqjmkigr8HQP7wfZ6VpjjW77Spt4",
  "key44": "4pnQErA4HUJek7RHqEE21xxJWqzsDzHu3zQ4xSrxBJAzxb5haoicx84CKEM6tspvHHBxWXeQNNZsMJnoJgCvBdE4",
  "key45": "5rVK91P3iLtwgaMmnbb1ye9LVPo7Q7gjATthGPtSSYzmZtykmwJyT7HgRjsaTDKNhDZnvtjctRGRUb9uRCvpHmzh"
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
