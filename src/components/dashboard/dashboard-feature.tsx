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
    "2BjpjM9KjtA17LuMprGxY5ERbgCSKTs1zkcmQuvTdTJpgFyiBSWJQnpaeEc3Lcsixr1XzZnxYMYYEHNsW6V8rBCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7GU1yiqksWJVmhiN6SG9LP3ctijM95r9LNhDdByUz7mSDhEPcbMgZJtyyNj8ossvEu6snfyw8HnyaE4kPoWemLf",
  "key1": "2QGtsZggTJ6X1xUpWau4qdx5WhZ5Q1ZB4vj2PgLAzXuSLRTgep8o6uMcaaJa6SS579TtiMaWXFfsYyzFDyVC1tMe",
  "key2": "4fU5drEfDXPy7vDuSfGStnt6MJ5wPsxNi8K5z7VTgE5WvAQcPfPYvdj8J9zRnBPS5s1tTgBiSsrhgoM4VU6uGJ3j",
  "key3": "Ddsys9kVGwwsY5R9K5uAC9sH3vbx3jNwij44dEWYsapkH2AEzdBrRehaBpopnWxFBFanZrLMDorNTXYMUP99F9h",
  "key4": "xY24qqhFsEsGJ1Wt6VQvTBecenSREEetMmPs4GhB1NKZvesFpt9nvey5SnGqjNeEznXuTHFkUt2h9JaNDjbY1bw",
  "key5": "42s6RuzJPzaE8Sm4aURebpAYZEaZDqN1vwHgpScq5FTCS89paCHuTG6HraZeDsoZCNiZe2opyTKPx9r63mK8Fbfm",
  "key6": "4Dy2L3sHkDAHTidGVtBdFeoYSTJq1R3moLX8MNT8BcYmtww6VEffXtKkegbKP9cHKsd1hGryRAqEgTcEVBJm5gzN",
  "key7": "2UdBQDe77JLauyhYruaxZ6MA5bxKRa6mzbmVatX19Rk3fZK8tyb8YL7KBRrjsmHrESz3jh7cYRNV43AaZ3jmKUKK",
  "key8": "3poDgK5dqQf6DWTcC6ZFvcCf1xyymFAXbpfanrGgFrP5Hbzm7YAFKUAckhjzjRVc3sadeqendP4ZKEuMttuzZ5ao",
  "key9": "JxmiNxLfJHJiw8tDxYZAmT7FkTyKU3UnfbPan7f9hRfzU4W4fnQPcf1yT574gLYFYt639XogBqRpkE2cMADXTnS",
  "key10": "2XZ5K8SZSdjvsw7FqNPFro2LzaeC9Xaz3vUmTu8mfG8wzFys4NLNijkvoco99uXUnLjDg2zTdLKsr74SGgiK5JB9",
  "key11": "2ndS9P1x4pBCEFaYQjeqKxVCowdRhnfkKBbGMTmG1pNjJoptL5fTWiYxfc5vwnZL9HeSNSUW7s3mGqsqHjFxByHV",
  "key12": "egHvmLLRZQcLmAaDTRfwVZR8zASZ3hqNqwRGyaBR4QpqqYsafVMxSZtNq7g8ks3WB5FE6pTNaByBHS52Btx7rXq",
  "key13": "5ZFusBJ3CV3j2xeaoQaG6mtUT7TVuF8yuLW8HPAqYfMjPsp56fht4bGY2qW1BMQeqwaz1weHN5BUhUJCP7nhpr3F",
  "key14": "4rs4kGoCT9z5h4j5QnP3gebYxyoUT18eMx8jH4SUvYucy1m1BNRssU8XE8aYsRfForn4QCrWenYo14rGZt2fbYjJ",
  "key15": "4RR2Q5xmrc87BWaNhjrLuA37Rz7bxhajzE1aR5GshNCs3N465iYcMsvehpiB6Uy3FXLcSCQSFyePoTu51QUAAtGQ",
  "key16": "43pipSKPmpsE35MuqCnioE9rbF2LJikCM564fWb1RKJWHw3jUEYMiKd6VvsEJVrkJHBcN6PqpsisFXvuwU5n7ZED",
  "key17": "3h1pJ9qgCsh1q4uGhfaSZWagJhR8etzdSk2a7mEi8RqchoeU4E5UtcJwyMBtKHUv8dR91JaBQESdWDQM4rpmqLjJ",
  "key18": "JgaaCDLEYjLQTi55HoidRuMgL3HSZpGL39eDhvWZoN7QenzG476TJKzbBrVhwUBXkxTVQc9MCHeZNiieb16RL54",
  "key19": "T9EaxEdEkGAGwzbeSkP39Rf5afZsXRchxRzdFZRUuxHNRThHUy3w55AWZkHbtPTMygsgRhoBqvbt5pZvL22ycXo",
  "key20": "DzL3opx9GsDuvV7E41avSrAE3jzg883rqoGkHn7bWDDREyc8LWcAEFRW5oDq6Ex6CpoRvB5wr8cXFLBZmqsuaX9",
  "key21": "2sAGDDfbhUzWStH7SfYgAjYhRopppdkdEtbDKWpXsm3TBaweJiguLfWJCD37aiGFnF7HN6DLmmCUuXcwQ5b2uNjn",
  "key22": "2tzJwr4naZeGCXFBsZ8d9nhb9HenVq8NKmdGhRMnWgzLZTUiibh2MtzcbYUxxeiGqL5vxEYezTnCtjryaaf8JpYQ",
  "key23": "2D5XZHmgiA44QYtGyxYwNRwT9viojnCTUcVajmLYWLGHuThJecKPQdrpeA4LaG57woFS8aDfUPeM8ugzg2UzNSGr",
  "key24": "2Eh2dnbRBG7U84LeMPVY8PUYRkuCG3FbGvMQHhYZ2mLZviVvNf9Le5qZU8R2JUuXocsagY3napoLXU6TZFuP7b31",
  "key25": "2QDUBookEUkNRc9mZrbUaXHsMTSW4QgquZsP53SH7XaEtfcSa8qzwuYKDUt3eCamfgurnDbWvVjRoktDJaxNth3D",
  "key26": "2pNWs73ihkRZGJ3maFFho1GaVga7hbKEdzhyBaQsPqV476Ri6Fx1HZ8zxbZsZC4BZBb5xYr3TitBGP6H1tmKwPJA",
  "key27": "2neAFeeEsWwoqnKuLW5KoN5xs9LuEP29rTaqYGJNJiiKMWYbMidJtjRDMf2BHS5H8x4uEjq3ZhDtkwxg4QpEayUM",
  "key28": "G36c1rVUxt6XeiJ6iUz2qP1ra2TbfXb2hPHFq5qYEmn15e3EA7M7UfiqMQGG7BLV7y4E34v9Bq5VMYCm67nkRK4",
  "key29": "5ETDRLZX9A9DZGuSczExinpeYfNpcgrvW1NmquCXZSRc4qKaL9rWkmF8EBfnkVXxJsNqU6mo2TzQX4KWDDwLTJBs",
  "key30": "27jthT3i5TFLuKj7NXq2WnaK8XCiboxXGrxV46sYPxu1wdW1BV8MfJWitneFe4WQbscLapsW9BwTFbR3qY6scaG7",
  "key31": "4beMKaqn5aJjxezPBrhdbFQVYxFLJYCMxcvN2VcnhhDg5Mj9uWALz9agNMNu7MWakjk5qNHnM1VViELKjLXPG9Up",
  "key32": "62pE9SkKtWKGF2xFA3byh3CtDpBUTNCR8vNL7yQ1Zrz5rnnf5svSTLPC9Y15kS4VUwnPJz2rrgzRjr6esBEuQXAu",
  "key33": "9r3S6VkLBnKxno6ZqWy4LByiZthC2Hj9LnwCoiUnD2829AvJuxhJR6XhuixfarfWx1nt49cnTmuHysht7DMUSHV",
  "key34": "3R1SvhMMHB7CXsX1xYg6bTwBCs9zrYhGF8s9pe8znyrFgrNA2uCJKqBxDmwFVPDowP8YdLon6k6EQ1deCjqPN1qm",
  "key35": "5GY8KAGXTRH8TZCyPfGky9cL1r7GjYGkUMzukfy4y1SbbrRfTBSd6jrsjiwDg8HbsnrJJ7QFbBBjRrgh9kMEV8Gn",
  "key36": "4vQfFsV8DEfE7LP1MoQEQ8RtEa32ZSyXCprDqTGtd2i4pWv8uWVzkE6dNMZwtAmpW22wkCYnqVxkhzuxQk2HoWvB",
  "key37": "4ni62keFuRSCC8tVaDrXm6utDeKEzuQKLH6k1A2jyHm6Wh1a4iPRtcQ25tvUG8nszBAMMwsJ3qXnttbrzByefgzk",
  "key38": "4szL5Jdn4pWeVwvw7EV3Et6Yu7Jfj8ehcFx63yTedo4Sa2eN5gDKX3wkiv18mC4wRr5iQf4DVZa5TwD4pAtRAhuo",
  "key39": "4V1nLuGPR4AbVpZHK3szUEre3TKWVYHt5V6nmupeb12L72JeaxegVqRaqjBiEUYREzvFGc6FXXgsYbwUPNZF5aWv",
  "key40": "4yf1PE8YnuBg2qCrd2s5WFjN7h2tRimo7NTKJK5rXmReVzPzdQVUhX8BiTtRTkD5nmg2DkpQXH8cuDA2nyWSdggX",
  "key41": "aNkvGkPzxaX3aqcpkSCjskDjdnGzdFG2JB6FCLnCpHsHyoRm8ZJQi1nQAdsPwtCDgfRFp1u5go5Wzt7LcNcwi3z",
  "key42": "25EPfsrVk6dnXZH3jLfNTuBp1mTDwZKWGHvtGF4zUMt5rCwUQdqe413FE7Dz4AFtQPMA1K22u3KoyTD93daWi195",
  "key43": "26swgRTV22H45wED6ULiAwv6YV8vxNdtDjPrzK2KKBDZLpths8XDT13eEg3rDoa2MaqyhTBV5Mrphqdhg4xqim5C",
  "key44": "Dzttanvdrx9PudDxhrPLNP3UFqJheMiDogbZF612UphrDPy2L7ojxy1DmnpAdMsH15Qn5jSLQ9uqw7HBpbYhNZ4",
  "key45": "3qFjqBPWMjfXKd2fFubJiQHX8UwusXVFufyZY35mvVG7ddkB1JxiwmW8YoSj7JHvi1yqKMjzdEQ6meuZey4isAVp",
  "key46": "dC5M6icYqSSYu9GzdqzTi8ocSsADGAoJcE9BrG6zHdrutECNeCmeighwWvPhDdJqezkkfmkZVrQj5jE7mNudVBj"
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
