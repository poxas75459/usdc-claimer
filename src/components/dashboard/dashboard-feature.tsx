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
    "usiynhnMbV8VfRVgkpmef6jrEEtm6fBJZ52rxxTrAFpXHm77XbS7R6zJiaXF6vUSX1WmRKpfVUNd8FKDJNrsN5L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4asK7L9ZY44NMhKDA1pku5rGz9Bfkq5beqNrZbovtdgVSkLakcT6pwHMDQRexLNAUiZ4WzoAC8i95TheUvTAg4tv",
  "key1": "5D1o6rcsZU2yb5EoedQ79vsEemZZQgHU1eZiZ8zVCXztmN8meFAq3GDqHXmL3YpVBRMrnU7tzYskjfM9LQxhGw4N",
  "key2": "Q5DUQM9vMu2nXUEFtJGSmFj7iBBDe9CF1UZtWjk3JrM2Tom4iXBaLhyH9ay4wktcrruaNH45EVSBHw3yExTdZ8v",
  "key3": "5GeJHZfNZmSQy1CPe3DYqRULd6hwc4KMFAGwfwVyetpV6vNwzVM2Q1CPaUNdW1P1PtiPvfCAdsoiqfmS11s2irBv",
  "key4": "2EiqHYwbszV9fw1q2a3f86VpYjDEp7vWxNNowfC7vxz9HBieNYHi1f92JX3u4Gt7BG9F9sVKWCaz2yYrCuibg63j",
  "key5": "4YTXqNGgBQ1ehLQamD8Wgt5v96ugqH5qQ6ysitqnoREtSgdifA1kUgp66jrtz6vNEow9JGohvYiTB9WddcQC1z2k",
  "key6": "e9Q9eizS4fUJwDUG5ZbLUDEJ2xmogq1W2i2bJ9fjBwfYNvMLCqdnWUqVKqVQgNtyLzyYX2J8VPbw5gbPhrSvvW9",
  "key7": "2CnMqzTqK2hfRaaiuvccxWSni4Vr1Z29bKYRXFFePy2c1CwHMPe1tiUJYUiP9SPUouPHyyPWFx1EsK39PGK1e5eR",
  "key8": "348FfkQuCs4zopUKoR6LpAKzsMaqBetEJr3MVQKnXptFbeMm14bxHVNpEucsL5NeMT2qBK3cMxNNjSZJZBiwjWKT",
  "key9": "4unZAyX1VNvpMhMo2uDawu6MsbD9UmjJNEaYupBdJDdQWhZGkPx8ASmfacgVvLhLiEP2ek6iJ8cR5nYK4jJKufKC",
  "key10": "4vpE7dekqRqdk7tXpnFAsaia1Uz1gRcZs1VqHheJEXUBf9bhqDgp2Jy1RsCPSnbWkSGftpNWKBxoQVJkAZMkppVk",
  "key11": "gK2MWz6kWdbp64ePuEVXzb1CH6e3prBh3qhKoEuCteRurRyc7eK7hrrjdML8opPecoxFVfYHcbXPd4Fi5CXf934",
  "key12": "2vxFNS89RSMVPRzMEqUcvBreGWQz4b2TTDMGVTYyiBPDxeZMTSG5KomzQuQCKJTBWeqMcXpbNScGzUrBnn6sSrEw",
  "key13": "2KHXFJFooYF2rU2SNBbvqZDdToFfu7QNP363SjYdHS37VKAxer5cWBwpCr6ahCnGD2jkuK2V75gqUTvq3CVjnQ6b",
  "key14": "2g5B5NubdV4RWkPcSXArEFrQH9PzfR6UwHwQkLXbMJVrtdAZXdJNLCyGDWSwftVxGhHjdj5Dn9UHY6yom1217zXG",
  "key15": "3txymE9v3HQAPyEc1VyqNBBrkhEUjiHzK2zEKtBwsQyU2v6hKaWJDYapd3oyABn2tcKe4NwULL8jzmttwmsNVFMX",
  "key16": "2VGSsuVJnGySZ48pYQDu2cF67xFK2BRcT4oNKLCr1Z7kEEuEevALmw248n7rjLepxYvyN2tEqqGRj8AhoMsUe8AH",
  "key17": "RxNCriRAziNkeg96eN4vFHBmvYyUFP1QPnXr9gETjzQz2rpjqQkFahZAh6txYzDBz6BSc4nvEG3AZQkDJV3N22R",
  "key18": "2VHCseWn6L6UqG4VAJThH5LgyoZD7Fw8pgje1xvGYkJxqcYamrTL3NhrrCW2TcehbqCg7EccX7ApbcP7eowfdYc9",
  "key19": "pDEZMD7o7MX3CNNmJpfcp67TeXKNnREh9TqbZzZPe4LxzaEzUXo9c1xLG5VsW76DibaedFvzvVPJby8eJ2jQMjn",
  "key20": "4G1TFXDSCtzQUDRBMzk5m87saSGXGxJRr5cncSAtoDoNkcxaieoEqNb8QExuh5HspuPXbyqpS7VgKqsUnBWiaRpJ",
  "key21": "2vJQNKgSEtE8U8gxj3UN68WxsPFYjAnjhegQf4Sf1ACQpPsjYj6j6rWGUUwFz2fGZLeQNPLLV1QT1nUj5TfLLZ5i",
  "key22": "6tN9Sit4vcNSyBrPdusocTVnL2Q5fLNovxVs5cVk22eHSyuLGbuYFn5Y3PyAVAJkjzzxGu8xUQgJ4Rp36QrAt6A",
  "key23": "hdUT4RSeTRPUiaCeytmH6rA3wiZk8KA5Q39NSZf5kvC5AVLH2YkhGkLGxQc8ffeo1Bg2mQBpBuAAcc6K7XMBoT9",
  "key24": "5DPKxkXQV2U5FuN5wuMWfNv8VEXLJK81NePaRssgsH12ri2o8hkzsVpCkwPQZpptJ3HJH3HWU1X5Zefke4pWapjg",
  "key25": "2gNvmqNrqY3hgeSdZohi6xxmWKn8R9hP98uNaZCrfhbyQ2h2LX4ryGHe3484vDJ7QwHRD2cnJfrcBBNF8GZDxuXf",
  "key26": "61FAidui3DQDsFHyXekLTzWAKduuaDtxy53wdrQ2DdDRs7KFboCnVVCGRBhjA7Hza56z6bNU1xH11axa3mdogZPb",
  "key27": "3H7NggN5ZVA4ZDc9yAyw62gtotch7tYkXe4BbreiTat21nPbytgFRjxbj5vZLA2vrdhXSaYHRMUHMEuLdmy65rT4",
  "key28": "2BEm86BsjfCwy4v1aFXtbbcUddnrJ4zte3qkS9ZRYPqUn2FhGB2KBHesmP6RtqqL9BWQQTyWnNMBPkqw8GWQ71m3",
  "key29": "3p4i1iCnuNFPgF52cgK9FDUtm8CuXdNZo3rWwbiukgQSiqgPrGeWQLjYjhLXFPEXma6wbhm3dkYzsW19zBQS39Fa",
  "key30": "5HQuoNCPEheHaJbXtNCpZEGYyetWEa7873DZWvnygDqchABeWZi5oYmaZibrTazBTUTnSW848b8Tnyddg1u67Qn8",
  "key31": "3cgKoAS41aKkZB7vzNLJamKfcNDspj4UrCjAeNPWEjf4K4rS8XYeZVM6eLugmrkNKaMySQozDyYp3jJDtHV8xVX2",
  "key32": "2vDu2t2yjwXFUM2Aa7BeKpA7Z5VJNDo79499p2buff6AEE4PRDzrrL8AuyHjaw86pM6aJKqJJpC487NPGaQk3C48",
  "key33": "2wDrk6cAwQZNcQTWjbzNHZqxS7DX95x8b8u8mj4suN71CUJmo7fGpXiAmK6YsdN2s1s51ZmNEiJaHA2ZXvACD8NE",
  "key34": "5SnW6LYmRAKVmscMY72EdU1eW5jS3cpZZ7PsDMnZZU5V5mKYVVEagbhSWwEw7R8A9FeX8TCJSWmt1zQwq7gwSL65"
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
