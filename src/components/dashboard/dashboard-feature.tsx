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
    "43WrVpWvg3s9kpoTnugS8RtNGRU8PWaWCX7dV5ZVY6nRim3UM3gLj8GkZ98PiHHTyJ9zGRyXx83D4oxqsbghozzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jivfq4ukvkwsSwtm9VMop8sV7HrT2dBe5kAC7kvWNLTLozd24g3kpU5PSEFbspzXfMPJk1RjMnX8izWTwD5HsL2",
  "key1": "KfCAekwHgZ39wZrQHtFfMChyfgitELTTe8DwfgL2Wew3UbJfbN6GewCF3f7EW5K2GMTvmvQkn9MNbxXq5RGS3SF",
  "key2": "3tEvjUBkPERex4WooH9L47U6HZDuiNHaRbcdG7JztXuhBk4puynyEnVJqQWkqqD8fGzWZUNBjNMwq8VEP5W6QqnH",
  "key3": "3GZzEtBD9ySJkY7AiT9TEZVUP76QuRGqX92KaDHX2zCVV1c1gjuSU2VhH1PbBddPWr5L2wuvuDXDJPMUxwBKCpP6",
  "key4": "5CVGG1KotT7GHunsLTQkQBk7xjowfL6zYwEKCeTZg2fu1iKEKjt4wCCky4CuKfheR3fYM9TBcJ3CYsJuCu3uZPvc",
  "key5": "2dfEM3mUmBEdYcC3ptJhsPBmczDPzFZA9Q2bGn3zrkM1ekkP7yS48NgeyiRbRDxu6M628JNMaFTDz2WjHrcgnWcQ",
  "key6": "3myrKB8SQkziGb2BpCxu35mAYmK5S2B5V5iZjuoBFknAC8AeUz5fw6Eq3gUamuhyBJSaXMvUssazvpq6kxdSHKZJ",
  "key7": "3SW7D6rw9gVDmjZByzgJcqzZB7Y1QhkULEB49cUJmcRr8USH4Ru7CU4gPZp41j8Q4mjjgCEGEeMrr9PYNChjBMJ",
  "key8": "3FjEVdnimkCajcXvnSn6HMvdZjj5FkTmdFZeJ4G3wjCD7tB3FpddKNLv5SFYWkXwEAdPmkzbP2yGFS1VGN8nBKdk",
  "key9": "4tyWiCRDRbNkCsNCMpExy85Br3PR1hzjLoxj2gNhzwiATrByXBcWWMRMsK4ZcsJCb35pntYwsZZNhHzXbhmmvhAV",
  "key10": "4S5pA2VxS9uLQmoVArMo3qgfj7p4piFhK528RG7w1RuPE9nVuR9USA74Ab3UH2RcDr55hEyswCNdedftzcZdS3sq",
  "key11": "4TfYBiQMdJiS364FbSd5NJGrymm72VspFmpAyRKt8RJ9RnHi23DFs9cRUWEngk7f7iJSRefgip4AEAJQGpcTiE1E",
  "key12": "46VghCiQ6ApynbVeLn2RFeeNa7UQMDDCe7KW55Nd6EoW6azmUVq9ZVUTcSnTqScoWKQUjbCq5ke6dopyRtTu8vQu",
  "key13": "2hyjiLY2JYnQXfoMRoTn6cucK5jUWCnqTMezdzHeMtDJzUT4HHEKEvH7b2dUupXvkxzwV117sPREg43diNt659nm",
  "key14": "22HVvYxRcUhRpeiGTjo1Grwf35N4pFS8SS1htdvDBa8xMCKjAeC2C3CVvcJUNMXgVrgYXqjTnPGEB1HMH1gtCeas",
  "key15": "2cEt91iPtsoT65v2bTiTm8Leq4oZ2i5F4YWq6ivY3w5UkHvZ5SDB2K3NPm7fTUfuCdmJwzQUdTrhgA4jYbASTC6C",
  "key16": "2Q1LDBQkozegyN7rhMV1ymuVpd4VRDFH5XUSHk7SbmWPHJXSfyh8Z6HrfoUbt4eNVboH3ASHUyfi9WBZrUQZFcUC",
  "key17": "4hmJ1VXVHkXd4XCw87v4hSSsjfJqjwcCuFgsvs1W8jc6jQW5j8QisCPE1fSvFsPQiJESodsbhFS1mZVrq6vByDuY",
  "key18": "4GjzofrcWNwcMFWDBf33VhENxwTKntLB1jPE688WV9jjienwRtTKXkjd7n1QYPdfxfCzy2QNMFvjErN6MQwGDJKr",
  "key19": "5rb6VZivVXuezadQ76Fx9KUnpfiwnXTQrtfwR5hKRpjMb8VFFr62e2ZTDkrTy8GUXKNsHb5fSJfbsvBMJJFVYWza",
  "key20": "61qajcHtpiG9QVvZzzAnivQrYexcsSaxED5BW7UXnNJ6Lh5qkfG2E5gPRE5pisgnWZFK1w18xKWqhVVi92cUX9dQ",
  "key21": "4th5bL5n2DbtUrLxEDwtx6nK8nsCrQoiRoAgUPZJkXgqADNbRzxuUjFJ7AB1uSP54rhv3tQYo8YKhSHBFDHEiVtd",
  "key22": "2AEUHaSB7aBP5uqTTPtBtnGRKWkWFyRKZEF5o7QS2P3uEbg9nRnsiAfxVdrRLwiFsCPHkCVNFbmKcD1rQ5bE89Nc",
  "key23": "3VJV6rmwVRnYJmqAJTncfpWyMwVjyeBf63JEBvTjEt8wmN7USe8TDSNbsCLdd8t3B54p6tf4PSyek96gqg8nQgmE",
  "key24": "4GAGV4vJrTs3i1hqcgfaAPutocxp7t1HgBSBd4mA4GkCwBXCNQznqvM8mY3SEjctcfGEs3yzGQCFtrZmKxJw9oSh",
  "key25": "5gJraweBWpCbVCDeMVoxtQEjNGPcGeWeeP8kQTyfkKTaukagE4dZmJgeFTjLGBpJUazTjN2d3sNPh4Y1o73JnAvd",
  "key26": "w9xF9JpiYCNumk8LMrC6i3udeaY5Xor6kiThbwDVCMPFhqyotWQD2wvSrRkAEstVgZ9BZUQSKxYU2u3SFx9vddk",
  "key27": "4R83sRJx11xha6CKBT3GEBtGJNQfVNpcvcZwm5gHCCAkh1yfd7rnB5RyKP6FuqxRY7HHLYN4V1K2Nb2u6FVREx1w",
  "key28": "4aTudMTHgZbv2kwMMUgS8xbgEPqJxedQpDgM1iw4pecHXK9CXDYyWyVpzJnguYD6HXeHfJmfyoeW48gGn5L52e5n",
  "key29": "22ZiUsab7EjmgDpXVSbUNxhBfr816TjnUUAchLZ9Qv9un8XooawUrYcNPJFv4zXtV3GpBKJXMCFePxUJSa3DWumf",
  "key30": "2NbJSoMcZVzWcbF2dpiHxMy8Xcgq6KSUYFWFbcrtb68heCQvDQPd1BUS8CkRgfEe5eEgaZB23e56ZdNunCRkTSi1",
  "key31": "4xKwi5BMuibVY39LoAAVoQgiPSqPpNtXbCTXxEGLCzpDUmAYp5iwkhtea9cYqd5neFUB5yWiTj2JeWwLk8SNiU8n",
  "key32": "4BdsBUtTT3a9VePjkuFoTGBpa88vaUoB4Lhq4jJ61VNeBaPJHUgqzTnoNzp21UnN1nKfSaCs61pJSLq8HfuFWZpz",
  "key33": "2TQE9mqPAmMwCYHwBB3Yjcs5ZmWQZ5Jqd5fEMGjex4EWrJWJSt9mxTRwoFPsymBwkYKDBtMjsNGjtwykJeoPstjK",
  "key34": "2jGQahvvVERSACvAkaqKWLh149LyN54d6tSH9N2ycVH3ovS5AbXku4XE3jx2MND6VuKZmygZnKLZUX2wJ4eAd8ZV",
  "key35": "51CENkThCDZJT2yaGUweE5DcYPNHbnQZpybhy4JJ5VaLYw5qNjnR1moJAaE9dxiqirAVKvA2WmDJ2Be6g1NgJCeP",
  "key36": "5uW5PPC9pREC9nkKo8ZyFtivs7rU4f5boXdwWNZHD5T6oAjnNjT7dV6JA47eQgpW7NqcDps2AAggx57VHi8GUgdA",
  "key37": "hbRqPvkcwfrfN5PwRiqxersy7GCMGbnJbC7wJmN3KMsPxhHnMULV2JAJhWvawKzhaRUH1NpEpzeQfUm8chLffTt",
  "key38": "5oCcpyPYRSePG5sqBootkNHtncJJQC8jEvEHc6u9kFsbxPaiTQiRAvGpK21xtCfb3NFvAje9CTXazbW2fzrHWjj3",
  "key39": "5DNj6oTw1tTDeKyJ7GW74HeAG7xv8bpQyj4Hgm2JYbrS67U7FJEtaEcwcTWUkHo3UqrTBV9gqLGERm97KmyVDCbB",
  "key40": "4A17YJtL6v6vjNiit8zZ1qk3HTiUV6QuiPp3ttCLSkUaqvNsPwCeTH492H6Aq5h26efD2ZmdPPkAjPXraYrMh5ZB",
  "key41": "34reLeCbdhw36GbtDWhz5BUUX1S6dDVNjT2sr9Y3FbRd8iXKPauvS6FGGeBLUm1Hr5aXUtPtJtbeN7hUBpBoKcZH",
  "key42": "4ct16UH1qoG6SPhYUYmjkm1JXKeLBpWEPLPMgCd9deALQQmVHiPmC5Cg4oyfBThAPrF3FJ4e2UMd37Rhry2yFvqh",
  "key43": "2p2d8pKtK4dimq393ayQV8b1QWQ36SJDoYLetRi4BFVxzZE8txY7D4KRsms2wEE9CSZ6J1eE68fMt7Fq9MwLCUnW"
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
