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
    "4W2PKCKRGTvLbbUnSgZSGoHoJcyd5Wcn6SSSoq4JPWjSdkopcYSuh2aXwzpZ4jSsr9JJinBf94q4c6GcST1MYn3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ha4U2yKkryaAggxNQxcTZpcAQNbjyvSGcTh5DZoBS1GH5PxTLEiCJw3Uxnd1WKNxcq7u4vVdsCTyjoXYLbFbpmS",
  "key1": "222Vy3xE3xcjwgpEmMgnjqEmPFAKBNkGZLJQoJrtRVBkF2iFT3fAE96PjwcvqQKHEGHjABroaxET4SGLEDke4LW5",
  "key2": "2PtWihjxuUCUCukMVBh4QPSNagvmhq1EWmFjGMvSNTtniFbC2sdLu5oQCuevtS5nyguvyect7zBGheWYUCUZ7Fsr",
  "key3": "5BxUgvJzwuNfWMUFABVHGDZCW1Y8o378JyLvPjmHa21zGSNhP52ZmBMdkzfAt2gjWH1x9aiXSBeftF4TLSErsfk8",
  "key4": "64DyKdQTMXDx8svo46d4M1h4nzrk7LHmGLzde3f5yrmc44Db5dfHWPmhH4HXgYsXeKhNoaZecQoxUSkCqFJ4NUrC",
  "key5": "B68rfAuqpgahmso13Q27wkeezXBSWQxWh1QpbvGHHMMrJDeKTh8eDyqh3tYY7jGXNjc1Ys6adxsC8vNDmxLcALZ",
  "key6": "5nZg3nfirqvB3KcTzo2ev1JuxsprzhXTQgdNJEB8Ti9mQbEsZzJfBe7YXoXfa6N4AcHva5wrT6AGNPjQLcPHW2Ta",
  "key7": "NQ9aY9EASNf7a89EnGfkoz9sE6G3TYZp96fWhTDB1p3fjBxmvowy5S9P4e2P2d1W4yTQFqHN16Dc1ryoPRGs8ws",
  "key8": "AjWM2YogwGZHQfk1QSbyfBqjr27Z6kqYKJaKcqpXcTj2Cy17JsewCSVD4Aq4EsJGhvJ3CNeqURE6A3J1CAWZ7Fy",
  "key9": "2VDL6pkbz6WHEpLhnFXB4o3AsJGQELQfueSPMYB8wnY4eUqs1kyYTJZQRwNvdi8mE24VSxR2yHNiY7kkeYc9Yfft",
  "key10": "4dbUSYhWTHUgXSv7ahVTehpqZuQGGHRTiowPXcVxTDVvVMKDWZgXF5wAYKjeu7EPpTecmDV9AX3bUkerbnaTCiKZ",
  "key11": "yBKCModTVmKF4hcjNQXhHN3juhkknre9QorDHsfisWATWjtHV8yLW3RunFVCB1DQTksCcpcrFkYoeFH4xE8YQ8Q",
  "key12": "2Y2KpvJaMVYtB2gswDhUQVcBHwBBTY9T4Tsz1DfoEMACupbTLZwbCPoRt3TdXYMNod3aEgwtZWhcgQ5hc4mGqJWp",
  "key13": "47J9L6iksXwukmZbrkf969E8tVCUecdscbwiBqfVchaJ1xFFLTh4dZkv5oqBrWpqJRwLRe2WQ8eCQg31x2DcutCJ",
  "key14": "sXBtjntJ63vBFKah28crwSEg4eBZkDXnJ9GQ1KnYSgHTf344om8zFcTXkKt5YoiPBp8UseZhcj1UPe93RAtm4RQ",
  "key15": "2zNgfwCfMBHAS1A9sLrqnrWVW1tfsDbtb5gF85ZR6YNzomSiKpXyYme1AJNAyGWVwvcQJNivsPH1PP4DvUtAtNc8",
  "key16": "41EM2SxseV1qrTpRk1629LrUJWBu49VQUCSmRn8TnGrunWxBGiUhye1qZDPo8DHWoH23JRNU3LB42XbzND9r6UyS",
  "key17": "37XbaDEpnqCvTxcuhmBiDmz5wPXb8qiL37iaZfufYLS9UJrNW4U3AL193M5zoBg5HuqsRhZptRccLrvpce87tyrC",
  "key18": "5BJEkcsdW4jtiAqszvc2gMZFtw2uC941iTwZekxi851X453yPc2nbcLgcg22UMd7scaepwtpyjU5Y7aNZ5BRs7em",
  "key19": "4B9orWd8cjnXVRzgu67TfrRZ8nTTnXJWVXr9Af7a44rGpQJ1Lu6mpcfAondKxsuCcq633MnSDgiNVyKwX6oY78QC",
  "key20": "4cyrvADF62jikitpXpFcTMprMLeyQjt9Rv8epccq5aVU9b4gFAmrPEJinyokSb3rhqiSyiZy7yups5xgRvHHDBrL",
  "key21": "5KVrpi9aaBan7evBEj1X29Nh9mxYyzxj1pzPT69kpkynmfcQeoSN6NirpqYASSLxDmq54sCFVKgnLsLARr7d3YaY",
  "key22": "2vpQDoZyzeAFQv9txpKzg6r6AfLvHvEZ8DWG5rzdUCa8yHVfd4AVHNiq8brBYFVRRPKgxZZFavDr7DMwxwsyKS7z",
  "key23": "5mNBsLEVqVe8XA2fckJBp9NvYFgmnZkKMU3QJ37wbgVMi6a6rTyM2f7ZevABCphXGXWpKZxxFY5cLWGQ9njfaocD",
  "key24": "3b6XFmJkjiNK2EfyFr88wA15Bvp4ffT2rDTGg44zn9hRYbwjxof1KtR6sN6jzpYYG4qTWUYpC7oBBGC3S96eom9Z",
  "key25": "2eiY5eRKQ9nvhxaoWDnV4nkdZhnaQrQMTdu5M87rVMJCK7cjK3vsjXLNWjMyLqkGVJB4aYVRR9RLFJC82HJXqkeJ",
  "key26": "5adB9dR535MsTBAMeBbEkAcvuC1t483nVZg8Nuo54qevpSfWPyfgLgzUP3qrdejW8a7zhWJwT4ShoopvNRManAQv",
  "key27": "EDLR6kTm94J8SqZFffVAc5LMzHLCaFabuYwWcyexMZ8b8X5syXXXXD7hy3ArZQQKxi2rrS4CXTikmxjZbSLig8s",
  "key28": "UrUFUf2R87ztZNihGe7NqAXB59Y1AKiEtCb8LE6Lcy36C6bCxf1FvswKXitDoCAbHuXVA19EfeXvygZQhp7yC5R",
  "key29": "26QPbTQySzYarkmuCchDBqNnCZJW4RE3Cg5LfKWaK9SyFbvh9PZZSGmsYHbs85W4VFej7iYkSeTEbj3PqJc7MECJ",
  "key30": "46iULmNg5CcyFjjQbftnW3U75UZ354sdgRKpqnpAXEq5NCX76WUY2zRuQYCeqsJ7jx9Y31UbGDuWEYJdNmAY6SDp",
  "key31": "3fBfodENHaAuwyCxGAtfW9xvR41S3yFBMeFXUgGJJiUcKuxqYYbPQuYTMrvCjyCiE9622bjxMSLnxwzk9PLNYZmC",
  "key32": "4AbQ7AmFc986v4bbeBYj7rkKEibRDbfTQpwSNSULBkdmkFSFMiMj2rH4HHWXyr4ZHgbRd35mKmWbtSfz9HSbSWzW",
  "key33": "yUMd2N2hWjif6LpCa5Pn9AecN9PtX3dTvLwSjCxTS8AyfVRVn1cLDtyRfayn1Q4zYcbKjquC43HQGsQiCt9Byo3",
  "key34": "3aLKzVnwDb48deWUHbJrjmv9JThLEETAfbS1JoZVsbN3kE9qmjbHcaGYSUJR1K8JiUHrKJ2NMmkwa5mpJ1EBssqk",
  "key35": "3AWEVGzxxpQYv5K54W5P6TxkLKc9w5R7YbEP451D4MifkmUDrctAtU95yovjLDKcN4Pifm1Ni6jBqGt48scEvLZZ",
  "key36": "5uZAzKNkSiwfbWmfwzjremhGQmikX8q64hqdsfpHnTQpFiDZCbzDPaYhsBWd2gNW8ravwfUBAjtw43tRdApazb8s",
  "key37": "4d6NbnApSSdZCYKrEXZVPp7ALkBejrpAzi9bmU8tuM2Y7FDwwBZpuisDAwjSv6YhAHRg6YWawrqw2Axmbfq1pz12",
  "key38": "3Q7UMDcqhE6umfQSg7hNyjWxQgwjMjabnvpcVrLMFt5LdmZnrpmsTo3WidJnpCnAHgD4jMbmKRzL8XyZtRCQvsFb",
  "key39": "KjZjGXQA75wEhL23idoEhGUyM5hAKkmB61dzo11XBM8MhtgsKuJ4hLcYmrdr1L99N7CY4sQybYVbtLH4AKpvSLZ",
  "key40": "66VMWEjgYWPEmVEBDdbJZozaAps9QR9zj3mCFVGnVfnE43xEXPovCdc1jw7egWu9jJRthancVGMScQYoLs6xpm5H",
  "key41": "4L77hRw8hSgCCx7fNYCH74DS8WndB2kteqS8PuJV5DZwWDY294Jvv4oGBCLswxnmxL1LEcizDrxDo6JQTGzhLPwm",
  "key42": "54gBStxE9oRL46prfPaNeEcUQiqjirt3E9CDLrEscTGNs3u4vBV2RnbGmTNzEkENzhECQ64pQvnqpjXPFKGVBXZM",
  "key43": "UxThvWsbpmoc3jrTqkJCZLaZxnVsE4FdJG2iZ9YD4ZBHLBC5LmmT1jfjVHKbJZFpg29ouMyMySugPHMiJ86H8r9",
  "key44": "27ksmCe52EnzKVcLaQbgrFXnEfr1xGErM6wWwK7QeeArvBa5MDCNFrJdsczBnQzcVE4cCtvqsyRD9jaCpvr4rG7c",
  "key45": "44Nyb2qRitpVjTcGY6Qe8kZj97gHErb6sqrfvjrHvc8mQ9huTon1pXTE9Y3UZbvG3nG9wggmMLPVJikU5mGkPoMk",
  "key46": "65YPchfwsdFknCskHa4Cnu2SPgKLAp1jEqXJFD9KxorWJNdymrYr6R1eZhJ2KbvLRcbanRa2q6nRtqiXnNE39HbA",
  "key47": "3MdyvyYYmUWdBNQAqH41ZTk9Av2qkqCVcxPF5oowaEo59m9afMGfqaZuM79cAJTRZ9zXY85S6ruDERWSNRgGUc9w"
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
