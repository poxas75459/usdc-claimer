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
    "3Radbx2YBdtjji9Xhy2LKmgvcmZvpbKLJwC4zEEhBckEqsUFWK1qHVWCnaJcPWM3bVP4wJ7daFRkbaf1rYPWQYX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62f3C5HZbjEMWQGqvmVUcwDs5VX6QzZ4EdAF9AZbDWyFbm1M2CVF43jw9WiMcRtKUpbGZqeYb6cEovdQUdh11jwm",
  "key1": "39xxAkMWxKjMu5waUdrU7G8FweJfuqzJZMhEkWMeP7EHwJDkezdMwAgYD9sWYdKs9zeaLFW7b3e2d1Qgp5zfHbHs",
  "key2": "3P5G3C9TbPiJjDPW7Rxd21ixL9ins4NfsrbMGiwRcESP5sYrcYt8Wu4p1Ytnt47od7o3iTGdP4avQxcyHsH16FTF",
  "key3": "39U3p818qUb149BN7qhwz7bf9y6VgpfPYpsdAAjgVGwiBZf7ayevV5dj4dbtVfdKkT6K8k1phYEkxns4SktMLxEc",
  "key4": "2MtHEEfhsXqWfkJr64i7mg1zmt8kC9bc5HXXAhy9X7KJ8vSKTiAaFitbMLzi7cr7ySCyqo9giGiKXcsc5PYatTjd",
  "key5": "4Er7JpZZJ8hHhKxmyegNjwxEKBZGtq5V52ntAFAEeCtoEZFGqZXCoP7X5FWChuGQqmid5VrD91gHaxyHyoSYPF52",
  "key6": "DCEdZf4gkwffD7m17iqoqWrTTgx8zYqirgoo9BHcDMCcAvqwCwiGxzK9PwWtJaSbh3xBV8ZUTPE3jSNZFBHPri7",
  "key7": "3RXwBCBMKDyAbwsQAJeMwehZ82X9sTkW7WMJJYGaSkggAT88GRiDyavmBzY66tpbqKF4BiFdp8YQjy7bnHgfaYXi",
  "key8": "2xoc3z3aEDrR6jPz7J33Qu2PAps6s9Yi4tnVwsYnnhv39jeTwtVkUZBjunme8icPpLk2EudFF8HcqfVERgx7rDtZ",
  "key9": "3o9zSgH28C6wsjVJ39VA4LXUTHZYHya4W5AsbmSuSccykV7Ue6GBqap6UDFSRC53VTrqjaM8MHcDhfoHh8WKstTT",
  "key10": "57fgHQgi2gDztKcT8cDTYGjtnWw7UmYUMeosripsMbahUNpMw76bGPNgBXd4SijdEshp8gRTEgME1rcnCQrQk1CG",
  "key11": "5bHNAaLrSpoo1ri3r7Sn9SFp3FqFvAAQgLsSUSz4rvymZx4B4ccU9qJBBUa7K6niwssuE5Z9aTjkmVW39eCn4U9n",
  "key12": "3Jsb4LqxdqTYXUoNk3HbnK8vrx9preQP6zP1oaZp4nCnEKx1efVeNaukSo3SiXqF8kzzFJMJZeP4ngmoXN2ZzR4F",
  "key13": "5pfSraWhdSSKEUhX6DHQSUoJLeL4NSxspbGFRoR9gwWesTLnkEtCtAz5uAxzsyQNjL5XHAcRNvaxhRza4Wb3iYDz",
  "key14": "Prp292WDnf2x632BtkQHKHL1pCvZ5djokoseiLurwueJrauCo4ExupCaNDR6bySKbDUrhEG7NPE1dbWVfeP65UG",
  "key15": "3a5JCTNKVUH6pGGWv8954xHsPcD2PZh2oXJkboMqRsY9aPQuCFcMZUHEGSYiCKSkXbLGU6cTgsWvNaUFVTuTdFjp",
  "key16": "KhdsEdhRRmkjzm6DQ1WsEPgXTnSQ9xaWNMr7UghmjHn8e5hxhhRoW9ePyWadCQkmrBDJ2dL2wCDhZRrvC4NA6mp",
  "key17": "5EFXLrW3hmb7EUaVAERLNfVFwpYdF3UCR4fFudopT2t6aoZEi7c7cxFKaQbectyWypBK3aoQB2yCxSizVocAuUwR",
  "key18": "589aoHEomgpj17bDMd1dD9QPEc3oECzt571QpnNwZzoKRUCXR5DgcwT7FScY3xXaV4AXLfcco9hLDjKpdJqCUHbD",
  "key19": "CHcNK1HkrjdAyfRSyvSofZs1Bhd4u6URr6B6PzHYK95cVLY1enRyJLrS4L3B9WvmkutdVR71YTdkg7LwqgjtzuH",
  "key20": "3SZdDhha9v6LkufFobssuK78Vz1HMdsXqBTB1FCynagtkiBymdVY4uHz9gFs7yPLQkdiWwu4jJmyBFmxwRSb6eg3",
  "key21": "5xM4ZnWG4nPoNcWmkY1kahYYMwVdE7MUrH8a6QpfTmE7R6tXwFVWgq3BgB2NaZg3Xg7EZSrkcUKouc9uomcsjK1R",
  "key22": "4TzRpoNkzzExHGX6TaAdWyTkXhYLRjHPE5NujQSXBN8cthjuuXFU5XcS3QxtoNSGFNZF9yL2JPqS6vVqYFWBeRVz",
  "key23": "jLAhFiMGf8tm9zpQaHt33Z3tDoND3biCmQz1EbbF6Y2SXPv2ojK7UJsynJk3SZzGJCgg9KLCNEgFZypG7FbENx7",
  "key24": "35jvPuCwEDQGQ7prYF2moB99ApxjmsGr2nAVo6hoZPbLpSLe75rGrUqPDdbctoMHti5JrGNg9KL3Ki2ay9P4d8j4",
  "key25": "3nDBHvcvXU6BJ4tLovvFUgMcMFkL77nFpZd3ZSmRGC6wCAB4E6xFAhJ7UYhEbyCgonbEGCh3gGZNsbK1aaPYJ9oT",
  "key26": "4UL5VqzuFdLYr1A7Mhy2ni4yZSzY7cKLA8CuR1j1FCvEE3Tg62RGXXRM9AXRT7SKqMLiuxwCETm4CnMXk3RDBuf3",
  "key27": "RcJy7Lcgy9o6y51eub9vHDJw4SctJyzoKiZNTKHbCq7ihi7LsfvmgEw6Z588Jrkb3Z42mRbLnbYEgegZwsys7a3",
  "key28": "32ycXTLN7J5cx6vQGL8CvsL8SyWmqqikEYuEwTahDGsKBcxeDxZvyiTToGnovg2ZxaYN2kULFJ3njygfgK9Qw3Z4",
  "key29": "2Da2zLDP7VMkmaHncPMFHf2y5Yx94ZTaQf3YHnfpJ4iguq84mG2zFYPRsHtd2nRJ52gJfAYBw7b8Wooy16vYiANS",
  "key30": "4YGY19quusG6BT3g6dRkm6Aag4rcSjTPuWAesqz8RNnpp8Gfjjijh5dGDJkdp6jR8j1DNgHUFxyu9s2e6EAhZSpX",
  "key31": "2LrBGiMWuBmQ9RF1SuRKtoL1WamgThFzSQBdGPdavrE2ht92TKSQqGtbkrZefVKwRiZomPhEcmakaLTuf3NnjTnr",
  "key32": "UbNCjiQmS5VdzXM1w1AVrJrF8eCZo2L1uA5xvbkJZyWqWNdeWrtGGEbCqgF4qa1dvGpHJKAAKoqgLApMGno7STa",
  "key33": "5ikLSEPay7yYpC7YHu8Pjrd2tpyT25LJF9i25aceb8JVTzPNXxgvUR9wjMZ7PJCXMztSHwRgBA22SZjkSbiPMEyS",
  "key34": "5UhAE6KTiKjbxvLa3xRE5A3HTCdUPWDVYijQDQA68XyeueJVmBbuDsnEZv4QQ7uKzaKdyiBjmxPKyz5M1aQVBWtr",
  "key35": "58M68A53CLU13mdTyZniuv2yU1k1HjKwnyMnnfKuWUzBtWBaPLaxJK2KMc4tomuDo9dUjqFDA38sf1LLuYGMpfLZ",
  "key36": "4PykXcRVmiz7ngbgFFhx3rMg5HW75gEC9Lzen6z2y3Ki1j4owrsb6HdXwgXr5CiUqWVbr487rBkEP88SvGtCYa4b",
  "key37": "2cDCawGA8a4btGwvVTmYPDrSx7eLvHv2mdiJ1b4hzLtamidRJAXRgVfUMbzp2ddtD6yBQZqtfjYgonWCCmPRWein",
  "key38": "SJMs4CWmQJC9e81gEHexPPaPp274a8kdostD2ERngXbWezmP5sxkKZz4TeejBAj8CtXecKE1GJb39ndBtCj2Mxm",
  "key39": "4DvPeNQYe1gps89iF4ehdNt2CLto2r913FNXy4aU77rfakhQLzUTVRWJniEWNuktBg5x6EdhodF8MzqdUH4kcyns",
  "key40": "4ffzojbKMDRc1omYYGBGBy4KxsvQWw7FizvANo7iPVWDT1C6EATC1mvSAFfWQENLjUCSU17gM82f7pYybgosZadA"
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
