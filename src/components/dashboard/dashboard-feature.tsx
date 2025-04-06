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
    "3WihNoFzFmHNduQtG8g2gWcEknfSDQf5kHWhBdkBKF6CoQiPtUfazxhF1kpHx36FWo2wa7WaKHLvd8ccDFZ2oyvU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CeKftVLG4pMF9fz5CwumpdV4Yc7eJCADK28sDii3GgUpGww51tuEHrJxovJKWUyXLtEXkRCm4Zb1ECmjQMfeyrt",
  "key1": "4YhTHTuSDqXPptYyrsDhLPpYVWg8eAUMcmgRvXGzRDRS3ZtezSW2cx9VAT9v6ebuNowFAhqm4W4roKE6HZLmFJvs",
  "key2": "5MFrhTNSwx5hieMhkbDyc7rV6CFaMzZsSKMrRAScPvnXrRD3uxuM9p8rBVRgPpy3QwE1X7LCTHNMhfwEHrxaUGDH",
  "key3": "5hM5goVjkhZvC6d6BjkTitXyoMRQxofmM6BJCwwJ9diq5Q7nLGCBJ28f6kTKuuzWZXJmQBctBZS37Voj87n86Pqn",
  "key4": "36v6AturbEDKeiTXqtNzttvH6shffj31sdvHParFnm6DZrMACup5AASzEbuuUmzsCnp3pNqgY81naatzLfzkBurR",
  "key5": "2YM9eAKZp4R67KqgiDY1HGpfdq2Pw9Ghr7dsPAhAhYt28oZ7fpqJCYJAG11x8Gu4uLSeQL7AC3aTJmSX857sFbtm",
  "key6": "5SQNuS3o7J1roFVkiy9Zq4WaJTwiBe3ZWaTh9Mm4hs7HpnnCKJGsmYtXq3yp3bug9SuvMcVMGpL3D4ofWPSCzr48",
  "key7": "cusfPA2vr3cergpPr72zQ3J2r61jq4rVP3dBQzGt4uuuJewsH6ZudUbJVW7L5v829KMxgYuvietLpp1zgPUseSE",
  "key8": "67pQGTgVnBUCUTscAT2Q3994U6JG1fkdfUixBn65SxqYRjfNuFx3MWymscjvsEKiJcwBKLFkKaAbhGf6NnUQNekL",
  "key9": "3dLafW1q1rtGTXyfpDZyFKy3hSG5beMELKQH5QQkih6RRFKd8HFdPs1kVbEjyDNBf5DM6MewSnpkNdb1u1zAKtTw",
  "key10": "5Prh8bxSqiDeEmDGfww7zzAuZVvKgXTRtAE45ayXv81Bjo9GowvXiYqp8d9K3tEqEWKyBA3nBUtgpGvwsiVXvKdx",
  "key11": "5F6ft7a2te7igtE71vAaPEuoGdDJPkfF9E8iQ5zVgaXczdC6WMR6N8h7uSkC2obaUEPvFAbfvgZFMCH3rtH7HXMP",
  "key12": "3v1CfiqqNjjG7TL1LY3Wkkek2mbmRmLyBPkKVoSdFM3mSgKryq5NZWeiDLxgCzTo6xyV1fs9RksxPvdhfiCas3TY",
  "key13": "3J8J4ucrnVU317FB3kyf8ij61YmyvJUhUcQBntaN4Vu7Je6oPRtKsapw8ZETLTZE1tXRf7LvzivtTTQzQ1Bn1p6H",
  "key14": "5H5i6K54bARE8B7ufK8pGEcVC53nWAXfF2qp7CYxCMrcQcC4WxYbvYLJjHV6yLPTGz7z3E8PkQkrR4bQ9etekGpw",
  "key15": "3N7rUK6RJbSgNco1sZgXCmgDvtZHbEti6QTkauWk3a1djPmk2G426u5P8PbbTPDr8BLwaDeM1yRkLB1HkQMtxtU7",
  "key16": "3qCoujrLV1dk5jAVsZkTs9Cb7BybkpTRRndV6T8ByuZ6a5QzVqx65YNWw2yyF3pZc2Awfuu1E78FAbZiRXcafSiF",
  "key17": "5JHKeq536QA4x1EAThihUZ83GvbSEbPRPtpDUxFD6gGVsBzQVJp2MUjLrVbs9jbXnPTag9tJdUrUZQBpc3ncNcx1",
  "key18": "37A4K9Q6r5svfYbUs5puQPqz1BJ4Shb6jo5dGkrxMShG5yEZfxxzFVsv5Lsf9KZqwg6t1jjb4bCj7yGLbeh9yRW3",
  "key19": "44q2F5aHyKPSqU3QmHQCRCvTaZw9YtfvNvS7PtpkyWcDWcN747U4EV3Mhm4xRxwSiL1vigMjPgycBVFpQLGoXX32",
  "key20": "48EpYDFVnuu5is4jA2YpmG3J1N6dGg7oxkKh7teVoz233tRenCTSd86w8HhJhDG7f96QzonTZLvwmMWVAGMeJpn6",
  "key21": "2NZGEMDdZodsyteN2TtJg1zUqML2zk49xH1fYtoJpR2nZ5iukt6N8gXC1GPiei3UTAiwsjFba81rbLHhR3RYH5jH",
  "key22": "37ydTxYbd8rwCokUYqGAL29UqZoEdzwoBDg6E9WXhhJECR41u4kCf27V1881r62fU6TZr3YLT3YYhKdBtxPDf6KG",
  "key23": "5PLWM5izKvuHcTBTdcFmUXa4dQ7v8wr2hVff5rRzvEoAX9yzbSaVFGeihxMytKarWxjey3gR143jzNE4UqLRL7By",
  "key24": "48nrPFGk8YpwXjbd1v49toB9h3tECGQUYjbSztu6kgrJRzaLLjkRtas2mP5ynsGKgginoGWW8WhfdMAf7jgoERAQ",
  "key25": "5rWXjznJbn6aRxKqSdcHP59sGrfvvY9dRBTYZHHM7yQrSkGdz1AJVtxNA3aAEiQPqxkhmh75RHZ7nXLtzwvo9h61",
  "key26": "3t3zrE8jLmD7Sjdq8gExxdQLjAQy32xV5KYnQPoW4M3nVKTtTsRtiP2fEnrpt7gqqp56Xhy7FtVbYuHRKDYzfyky",
  "key27": "5BMgaHzNNkKptk96P79h43YnJSas1sx9Mnunfa5rwyiS2BiUonjgpBAZVnDMSrHnCEysDgaHGFVYBam4pKGSMxxP",
  "key28": "3yJ1VFTGKK3kMEH7fUqKW4gruZNtpqE7fK9Fn9ZvcQfBBmuaV4smpY27ACTMzaTHYj1wDg5eycRN6f8k92TZf5Cn",
  "key29": "3zeW5mz2spv8LfFdYBgk9Qd7hMS3UcS4vUgtWGzoJkp3LTdTDGWaa5N7MvHM7bKv5KWnq8e9za6ExmDNCujsee62",
  "key30": "KKKmEGJnh1223praBPget9qBZBABHrRouGQcU49GUwkwU6kka8p4wsVjcXrQgBF9GE5LveXUGhpR15kTtsBxSiB",
  "key31": "4NsPTRSkDuyCeKPQ2bXsdckdm4yCrpUH2ftEdMwu1GYynUV6tjBePn5vPWYkT7efUCMafhvvWxjYwg9hwDspkHB7",
  "key32": "3yzBtVNmQoEtXENRxzjy24YjtRZ7iZqubwWQpxTBxP893iWefDdSVZ6hBgNV42zudZjDCT7RNVXKkhimT6kukwnv",
  "key33": "4iMPVF8juwznm33FZmH7Gzz82tWE862tRmYy1x6D4EF7ynNXbx5RPXPbMHmuvJUoWvxm99RZgVxzuyQGfLHWHoXC",
  "key34": "3QGWBdQFjvzsGiH17iD1ENBpsDKtBBVCGi5WQP3ooA3FVFgFtMF3doZkcbb63GFtrGkhkzbFcf2b67PDVSS4vPTk",
  "key35": "3LtR24j7mS1NqjU3Rd6kcd9UCBFW9S5RMfnkDN5BYZjQReb3a5kRKgMtQKmGTbu4qY7ZLoJvq2jzyLUQjhYUrutF",
  "key36": "2BE6uW3qyBe6Kk7iu1TS1Nmkoiin98Qm683j9vtEvfyU9tG3ig41i1spdRypi4rCi3uwhMRka8EmfsJuw5Qbq8of",
  "key37": "2FE2EfBWEyDKr61HuiYip21sTCwdLDk1KRTAYWqYpCbVhjQXFfkZto1mjuYCvVB6VBHbzSHyM46WpiAwpmfLwWk4",
  "key38": "FxScg6uPKHcsaJR8fFDRhuLyNVyuY7cYon6ZSn6Vr53MqGfFZAuw87GbSCWFhFZmR2Ce2uiYs1wynYiRDak7yAJ"
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
