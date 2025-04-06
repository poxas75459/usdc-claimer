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
    "Mjwau2NMzTtMwmK6i4q5bfsWXN73tHYY8GW8uRjrSdcYvkJcHFb5HT5MmXjFLnZ9bHLhMTq44WeWuVmMy8vDv4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51m8xQcYTwMthXNuW34gJ4X2MiC9kfPB82nNq554613GvY7MHehsV144h7RRiwbRvjioi4Dt6aEveUKdcpSJPcZL",
  "key1": "5SJpupoardo4MppRARNSQX6TRKmFApa4GcLq5PoB7w2MC8sHWTAXDsY6hgQ8gPnUkqFcv16MAS3mtojLeBVjPRWF",
  "key2": "4G96se1oY3rL8uwTKUuCButEWmdnZKVeJbL6EKCVUj1pgQoxkQDvg7rawB9gjWYumjbLkpxTKVu957ikT4UcGxXd",
  "key3": "28JJBDTxrSFBYPeuwYmzSgWKnCnGs4WJNd65SVDojWhFH8LDjXVU7KEtGqBzjZLvAgryBm1T62rTgLjah9AEhsSy",
  "key4": "3XhNYGqQTbnhwD6KjxfKa6Ao8DX9o75ergVkb6Vx6y6rVnd5c1dQ2uUHBjKMKgbfoDwRfGScupsyRPmb8LGxAoAn",
  "key5": "YpeZCnsxoLSRVzZyzxeqHKBTLSR51T96wSbvuVL5eGMXthUtphX8AQS5kHmQrnUN3iGWskABxumAaifunhXbnme",
  "key6": "4EvSxaVNuu8ScV1iGaD88hQA5Ld85fhzrFTMgr8skAmBe59XMVNTuha8hvCSAzZUVzicZxTFa9aAPM2xXTbJ75nu",
  "key7": "5VTq3zqDhWSsLGLrdHceSs6chBUuabw92FBPbjoqkWVrApJ4a9R6s4bqdxDjroyEisg9Wh1fXBPH1dz2SzXv2rym",
  "key8": "agM9txwRAaqEh7ay4LjmdKj7MhtfmhrmT8zXV2hjdg9o1Q4eU3RXbyxPUnQTPA9aVP6wqvuH8KSFfEoGqLQH8e1",
  "key9": "59Zohdh9axXeUEWegXqQaL6VHJsabtZ8idEGmeuSgm1fiU1WymQr4Y2JpdCkxRLWV16d3S72NkktjSjF3jtPUyKh",
  "key10": "AVoaEsYAvb2tbqa7tBGzezUpBriiMGXUFwi7xRxDN5VGu89tnNx8xP17kvauvJrTCMBcYboPZ2CpXfK592VW4m1",
  "key11": "3sgtESZpZ5osi1KHQYxWmwNRtJjwZk8abwFeyNRuUJyqPWAcSy2mi5dChqMngSP6c8ZD1Tr2WqRRkR1r2m7mJaT3",
  "key12": "4hHhumc22uBEwByAmw9KnaxmNWFWAMw2cnDue5HzMWWdioa8LBV9tiT7JggQfRcHPuThoz1YP2BaGycLkwA1UjZ2",
  "key13": "4v4WbicCQHDWb8VCuQRJfTvgpEkFETjRky7255dzGAd11Ej29C9h72znHSEiqJepVES81cBVFquizd9kaD31DJZg",
  "key14": "2fjRGAheD2pMz6RHUobNnf7jiVdfBnRC2ybfPVkX5jzVYS7hmt5UNa3jfPBhy1LjC6XZJUj8F8JmJaAbNjFr5uJR",
  "key15": "65L1UZ84mxWCrernHyVEcuJ8zeXmkFkFDe1byurytW81Ab88jEtVQrp6o7cLdoFeqDztRpcd5CPudMpXm21iqbhN",
  "key16": "4NerRFYYHyK2iWs32Aedt5wDmU276fouWE14Xzi4hcNva7zqKzCvVbMWxzsQEXRxKJRDNY2LDkYLT8R95nqPyYnJ",
  "key17": "5ro11yYD9sPpYgFqSczuRtMHs2yc6AzRv6QaMe4gzUeuYjanBzbJggQmd2g3PDuNgWoKyPPgo6RPhyJwaFX4twwJ",
  "key18": "DBmyWq3ZLpLcoJkC7vMnxwJjKgeoTxbUV1fGh4y3Lc9Deg48t2TTV5ZLSQyyv1bQ2gCNmyPfEKE2F8w7gtmFcbL",
  "key19": "26hyHWyAtQ1UGSGcD6Zor3fTV9b2uZqezsTJL695pVsb9F9W292rdJoDCAEeLdkDvWJY2B4gf3ha1oQs7PyGFf6D",
  "key20": "5ofN2ncwniLUwy9guuuq95gt72RomVG9DG62wzbH4Bnug5ygxfAAH3hbyr2xBoZdQJPDFAGM2ALWXAGkD2VYHxaA",
  "key21": "C6E3CAeeNgvL8raDjnttjSUfW9Cyipr3VwbswKeUW3Y9KnRJmPaoHDRAZsjPJdFE837zHcueEETcLNhqYCxpC1P",
  "key22": "5hzk2D8VGi72YtZmBfxfomraiL531UcEbCrEiP7hb8g9sHqN5TVhqjfscURHb4ukEFmaowm1zwzsp1eTuZhugJra",
  "key23": "3ynUbuFDUEFEYN884BCggF5bkyrn6uux2ZzJYa631Au9YB19og1KVyf9oF2YcgQFByYZHMRgDCWfqCaxMCqHK8Vv",
  "key24": "4v7hrMSz6v9pYabdTvRHafh6TtikWA9xJnLkN9UVHFNW8prwjCH493xGxLzRNBSTDU9w3BntDaAmaiApUPL18PqZ",
  "key25": "61nijzZxhZteKaUmCMNYwJWKVapCtrybxGHHHHKXzetSEuLwwwAPZEjDd5qytNzFMbEA44hAo6cqWzd7wyyS688F",
  "key26": "2E4hLunGkbgtxX6zL88VoTQKRCprZvaoJEowNmN25Qi7Heov6RV4yAEhrsfySSCCT55riNHZ3xp4WN6nRtquEBqT",
  "key27": "29Hm4D72cvTCBSohgHTGzmWyYub6ANdDMBWuLPQDxVw1HZDy7QEBarZ9MHXmkKDB1r84gopbnPhGMDefoJPVSx94"
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
