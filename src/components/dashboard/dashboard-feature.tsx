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
    "XfV3yQVwK13yEp8eooTR3AT5jxE9LiitmGNzfifPt1wHWDWZtXh2ZRAWMiMgaTo1EYpBk9vrBD7vSixawno9a2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AtZwFRNdgSGHT4GHCuza4fU5XsZiwDt3AFP37Hd7ikAhS5rH5GtBi7tSvAqfcwCuvkwS7biGb8V7ynzLMSY1f7M",
  "key1": "2RsVL8XyVihWgREBCSBexjrCJmHxnKFyWr2mRzu5WUC5haYigK6CkmwHVpVN1cvaRLahrW16uYndD4n6fVpmNdKc",
  "key2": "4AMuXxEcqvNRep8yz8EYC1y73sfk25nW4iARWTBmojCGpamnZZGXDiEmn4nqLyDjfzaYBVW4socAqTHhT2aDVAh2",
  "key3": "eVxBwnnrM1adU6tXPuapeU1Cb84jUpv9VCTXQphyEB75HWqS4MfkggHcascngFNcznKBt28VmHqzopx48h6vyyM",
  "key4": "81rcXvConZYDDX2xoZFVQqC7b61eEzHRFzKWi394Yh7NbbTpiKJz2jgaSekqXNXfx8TGgmxTGjjJbobVSbXBUwk",
  "key5": "2xviGrTP3rau18BWo6zECFA1Ls3DYJgr1Cf8f3EkPj7aFjCFv7xGfTmpPrVC7TtcMmjPQRt1s2QxdPF5Air1nXRr",
  "key6": "4DHWPkGxA6J7FxVhMyUqhzd4WAn1j4e1MewzX5Kdh7NqgHVgRBmtwepvy2Xk4gMqcotpWZUQSZJh1foWWaPmRCZA",
  "key7": "3HaSM5NZhctDLUF85uPJ3DyXyNfqFLHBRKzcGZLgYEGJZntmGxMV4T3Kqo4ybrqKam3qyB2ULaKSqNfRqLWRH1Ay",
  "key8": "5SkgzTaZWEXM93QstFh4Eb1CGVoo4piyBt4sPcsevRvsaXeFMD5XQhSbyUHD87neH4sBmBD7ZGENTDK1Zuwy8Pzo",
  "key9": "2UDiL34YgEk55WC5QG7seQMKFkbnYKyxbsoJ75yoNeGeeYhgvXS3sPZW1CGCiZEkAgio2RZj9TycjfmsmmfcQzqX",
  "key10": "279qQUP1T7Ryiv9PifQXFKHcLvKoeekkThtgoKaPzhy1MS4heZBp8XZ2tVdjygtB65pRia9DrvWtxvhpePjVeqZK",
  "key11": "PhFSzhYCBMi7rqPYVLbLWAdRgZnSGCertrTZtCx8wMs4NTr6nEhRr6a43XcMyXe5BFMBDLM8d6yjd2xsYvbG3jX",
  "key12": "4XcRCc7yiUX2AemZ8THaUympBuvYkPTLA5Xwi5aMsus6VwttNXeHySepNCJijutMcaknFSB6nMYwHDo8YYi4mGJe",
  "key13": "2cy4A1XB4ar7fJ4JmSPa5WeJdRQY1bStZGhksa6Qfyac1egMCKb4WGGQojZw5m4gfP8nJyaggrkiBpbNWzZmgRik",
  "key14": "2cpSPBQPawRD84TVNt9EZghYhLPaMX67HRWGw3qvEaDcdnTXF6Qc1V6gjxuZanLPUBZLJB3b2EVk7efBqh6E12v6",
  "key15": "3y4pyMK6vg81EtF8Y4F65p9uXeqXvBKSG2dPvFPRpTVtmzy5BiqhyPBiGt4thKsiFS9MfHn9YZGqJFkbpnEzRGtJ",
  "key16": "2fpMpXThZ258n4eneo3CXEcWK6y5twqY1M4P5QtiwoVMWPqEo9BCsPne8RGUjnRQ77TE6wfBWBS34aGUVC2fnEk5",
  "key17": "2n9rYZ2QBYLrM5MhFMsNnSvawkM78TM4yjii4CPCp3o55xf29eQfLLfpZAi2PZEat5Eev89ueCNbwHpJiPVSPcgj",
  "key18": "omj2Vg5wNP2UkdEbs4Uihkp9kxbyGL5ZY44FYF3VNJbbNRFLNdE7kAncMKBihRaa25wAqg33TJnNePwb3SYPKXe",
  "key19": "3CA4n5Fft1GXpRxFwikbroTzawFa86ThPtCiwYfmwqvVXmC5P6poAdu2nvgEYY5sAW3rLQ8TD8SW6eDoNKHW5gxf",
  "key20": "2HE6TnfpjyodBDRvXHYiuixtkRYhyHPb5yva2xcjsuryzykvHRq3kvNjrwH2p4KuzPPVTQALKPsLF8TYv92XMnzn",
  "key21": "2svJ9QYPnAMc9RTgiqZvb3rwZ9j9fCujbuW58AvF2Q7G8mpxgpvztDFchhbbxzWRY3b4CmRZ2cuiH14qMA28VWZ9",
  "key22": "3QBytjgXbyfLRKW8JKxHvQjSc9Xe4bAPZVq49oNbmSa9w3SzQvKotB14CQ3cLu6toGu3zX4TqZf85kFnvuq1W8qs",
  "key23": "2iP9Ca4BPrznJBzcpDHfCvKwiCieoTMoSFS9bwgLM49JbyVTNTsMUS3qC6DK97XkDEN34K5F7sPGm2HD6yUJ3oVw",
  "key24": "7aisJw1ju8pPyxymZxRz4M7uM7hZvguPkqeWSghd36kvLDzLFS558DjbWaEC9mifgFmPWww5kXpeq3DYDqG63tA",
  "key25": "2xhjwwXFjHWmR9udzYAsUyv2yEqXg2HH1Fums7AdcXy1DjYi6mT6zzjSfcdmTeGjRv4xwcMLpNK421gQJ5AprWnR",
  "key26": "2w1fwKzdR1Mi6H2ptR3xnEn3Z7BNQYbJecBkz5HGNEAnutP37jW7zyoML22qxoKV8EisE1BBkhQusvtywCo8fZU1",
  "key27": "EBfGF4qRLZjjCJXHrqGVh6M5PyAawod5zjSCDqCmx5xMUkuW66c4uR6S9L9s1xnQy8UDRjmRqV4wsW3nCcmQqGv",
  "key28": "46NUwxAWFmAxuzsvHovJkduD3QAKmYjSKkU194WT8HCfzPpcx64w233RLEcXTRTCZD142v5ZQDMG146E9oHj1TFo",
  "key29": "5rynVLGSSE2aw9Tc8gLPuWjagoEg25hiH5New9o6B62cTFVzVvH8efE316VwmRpxmgnaaWbWFtCLfWPGzxMvunSx",
  "key30": "7hXSjWBoP4MYtDtcGwmKxU3ZWP2PSEHMdRqhpdmzYdT7NRdqihVpgBW4WbNte67A7niQLKXUmGunBb6DissMeBN",
  "key31": "3iw8X51KijmuF5AUBXeqmMWMezeP4mLTcFUreWmbzZD2vBt9mhDGrJ6vSURup6LJngeDPKFBmVz1Enwur6nXBYbY",
  "key32": "5mq15iAxbTDNLzjA5ANwr3PgkvUkouA9B4mMMpHYBp6Jt4TH3cTyW5nnzW6DRfdAQFW3F5FjCyJz25RkWQDmm3La",
  "key33": "KWSK797Xw5kA9JVst94avUyTQrNBUTb6AFBVDpnYosSHLjuGMdQ5JSVWGnsfri4LKAgZrSF2YfpJxtUfxwjVa6Z",
  "key34": "34ikwYtftdEqom2gZgEt8VRyhaxaSeaw6a6sUxJXeHf7ngJKLh7pi7Hoh8MgqGSNn1FfKvkVPppoB9erZ297tXjM",
  "key35": "ksfuWDWffBtKLygnPWngipDMvRg8bSMLE3rcB4VwYBteGXZHPj5dtZUF82YPxjgLJMn3jPE11yh4CHZBzdS7kCF",
  "key36": "3WtPgt7svfV8nEwhZjwRG2TdFyqt6UzUQFhoipZxAoKkbzxC7s5tzKcqQ3wRSi1PX8nXG481wUzYsACKwveuKpqU",
  "key37": "3gVJ3ezTUosyhzK4HW5ycPukFk2gZnAez7gbQ8SazptmhdcFKDLB97bfCW4HrXGY29sSbfyGeqHPyFVbZrDDWZ1b",
  "key38": "2s1qrAgj4NwmW94TWCTW21cJXxywcYjK6e4iNqKNN62CsKAjzd8K2AhQ2UybcRmvQjKqRewGZTsiaFNXsYRgvs5K",
  "key39": "N4mg5VXKvm5DDEKVEAL3ZLDnEtEiCvdhdpkPtEQiMbbrBFtaiNGmAnZgN3ZV8RTDKM8WffETb9BuSCuALbTRBep",
  "key40": "WcpTdencd5f2DwYc1uP3F54Zyia7jX5mGsvyCec9T8z4RrX3qnETZhgJSFTatiBqSm6tLMoxMNyQus36BidJ43U",
  "key41": "5BQeZCXKqTzbzzrTaRr6AiLrqWyKk2TmB4sDFcEAZyk6ZHKJjZ9f5UiR3hAf9MnmfFmwnyP9aYC6erfm2MDRdpG2",
  "key42": "2iLQdLEsp4bkNsu9BuAQ1WzSuW1Mak11w9piG9XcgxzdbTjYaDnKFNAV61NFRiryi8eoiPxTgMEjH3xLjgDpJAtj",
  "key43": "5joTiZssDC2uExaX4oHUUxQPXifNrNNuJaKnP32bCBTYq2xWugY1hWSUExuoZfZF29UGhpuMzGEGRoPSga25hMHE",
  "key44": "5DyvcLPQnVZTXYWcStJ4ENqccZFtvvGWLCLCYQnvxQVvm3Gs4SEcgRDK8mHQcP3t3yBtdgZ7HQfTTdn2HQG1rCUZ",
  "key45": "2EY5toYtbvY3iNCtPhG5qMzbeb8QgXJdJUojvit6Qbj6JPLYPfadPhk2pJvFnvZe1Pp8noWjSSVjvKLbxsKcwSoL",
  "key46": "9LicswpWqX17kdmpJFQmCo3PBh1VWeiNLjjCgYWFppFNWTwbpWox8HkXYia1F6sFBWe2GfQEF6hbuVNnESd6sAZ"
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
