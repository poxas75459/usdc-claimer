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
    "5oVYEhreWGTvaZeNGFb7kAZ7RveUG4YiwU66qVbxSRyyAmmkyEg81tFh3E7FcBc6voyxNxBDKxkqrWRJtPbFmxFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XmTiSohhEDqZnY1wommL4NYkBWzg8kQfp9WHy198vfhn7K4s3HGgMZDi2vF45vL39b2RQVjW5fHddARthjh5Eh2",
  "key1": "3UN6XfP32MrPqYRoTiKUAskMyEYMBbsxz8cD2GkPPP2V4f4ZcrNf5n9CTMFExYV5GpNAuZ9rxFCAF1mpHKtzAyuj",
  "key2": "5p75Usof92gtj8WgmN7QdXPQa39E7Sz6ScnXbpkuHxeYKnmZ3Yunb7GjoYXbxKbBUMmKj67R5GT2u8hiv7RXCyzh",
  "key3": "5mRwtwwbmfsojUvcE8KmR3CM1LXarZ5wxCpxJUt1vwMx8g6sqmVw18PzhUNYYJ5tnFUesYNWS4ETD9hmK1PgER2n",
  "key4": "5vMeR5Hc8puY4ePUHtEHMH9EVHbstm3Pd3vUoBnxP3nixRvwCFu9FmHBJK59FfPX5hmGMfTcVUg2LMpDWvfqXRJh",
  "key5": "2PuoSbZn5spYipXVhgXgeTFaao2QwsNUfnjHG1iPLs4CPSFA2Jtfh3YU4MnabUxtpgDEqHY3JWAQnzbeRjyDegPM",
  "key6": "444rYbGKdZATKH3RN99gsAVapnMp34bnfBef3JAVRL4mHF7FGJkozLQ5cNeYmdrKHUWAiPien8nujRWKxQucEpv4",
  "key7": "3MXji12a5YSiNq6WKxUp8pSkd5SLmS7DrfrscAkQCHwoqHwsLCF3LPGxgMJsG2k1HHcnqf1o8ZdMvCih7pPdkD25",
  "key8": "5UMabxMn9kB8KgNJXbQy3DnTx5MeG3HU5FpFPm3JbN2UvaZhiQmhepSKWdras5Mfy3ouQJBK5Qo8PT2NrSk2qKcM",
  "key9": "2LoddBayGS63d7AcddHYR9hf1u3xE2vZHfEutn1saupfcCygaTFn9wqiR2wDEF7K1tqrwodAsxmob8Vs7Y9LRFw8",
  "key10": "5ZxGyLmyAh15PdbsyffX6iegaNLTZ9vMR2QU6yuC6EJKvqjwuu9rQujuUiW9tif7RJrsnY37c5sAf8MCv34sGaBV",
  "key11": "qz1Hx6qsarjqxqjyg8hyVChG36zxLpNc3BvtB9kmwGdS29RCac1Fb6eR26BkGjrgHS4nuafY4aYYMczxk9PUCwA",
  "key12": "NVj4CJSyo5phe7gakNZkM8zTFNG8ZawoMmKArSvB9vQ3Ph2XKVvh2P15Dso1nkYKvFR4kWcxrM92dekE9Z2b8N8",
  "key13": "5yr2UhVqBXWaMEo6WKNx6VTa9QhatX9EGSECfgFS4L4VNun84NhJWWiiDV5FyPHmS9YAkqe64FA2RUR3ZVymswMP",
  "key14": "1NihC7S2JSPZyMc4JGsbcq89KG2DZMjuCSPHWRyEdnLU8KnKEX8pifZRTVFto5o5r9ZzgHriDkwdq2wKRVBR99z",
  "key15": "5arWFh3yWSM76RrcrEEJvC7T3pM1EArqcEd9D474nHe19TDV1ZBxSw4E2xXu2jbFYMhM7XetA3ka2qG1AmnMLqCz",
  "key16": "3zePp7VWAZpuM28Ky6P3XWM18atmEshVL1oeZypPyEkMdYUKSHgAL392FrLuSz9zj2JMZDqqLyfX721ZmnPHAYxN",
  "key17": "24MQ4yzL9i4s9bWpK57GaZ2641W3cMQvenaEuwGZcKh1cpPHgaeQ56HJZomDAbXqHkVjiBzgsEmiiNfrSvwFiCsW",
  "key18": "u8bw44SDdwGKz9CZQ1e2TysuJNjfc978xsD2ajpBCZpFxpW8gNA8CQiuykQgu9PEEYwArzV2zLfPu6vr3uSSZCW",
  "key19": "2jYaKCuWdTMX86SCQLJW5tjhwGGY6vPEXsHQ88LZYMcT9WNPYbQc8JSw1yNppsg7ZNB8Ghm2G8ZBDjacKUZwBrUb",
  "key20": "5Lg3Pper93Wj11BoTLmiUEDRLQNYCMLWk7spnxVZMFivFEzgGtA29K9cprbjME8yyfBZho3fBAfpkNrcxGNwkayJ",
  "key21": "3Yf2fxDcpSeS1zXwH2wZ7bLJpGcPBpxzrG9e6J5p3X4fMKeZQVMaK6wun8ZpcgXFL9PhP7C7D3WgQ1QMnvgBqGNx",
  "key22": "etqFzFBkKu1CqGcuuqpWFvrWkGH6MZ8D2SQDjN6guCCR6jzGUNb6YBP9nFQH51kPQf81YsEo69RyLqgKPG6RZeY",
  "key23": "KDEXSaw1KEC9gCetLtJ5bZ41dqhJEJksYzd68u1ojME3NfniwjFnTU32cR3PopYrGkbweUX3vZZ4riXFh8ZyPxf",
  "key24": "2gWFv87ytH2kaTAsaeY5TcfS4kez6efUZ8qMHfLmffXRkMBBKttp7HiRwLD64nM5z9YA3PMtPDmBqiLYXEvMgkV5",
  "key25": "gHovGG29QPbik7qXAQB6nSW88z3TZrvAwQXzfUvq2Fot7obTzJJdGGBynBPfV7tpK5ehZVWpt4AP7YSDnxSqNaH",
  "key26": "mvA4Ttug1st547Bja6taNoSzJyi3HqMR4K2aMEZw1Xnj5K8jv8LZVxc9JvLibt8yxdyDmnyqqDG81yr8BS5pppg",
  "key27": "5CZMivszrra627Vxshe7wZwm9tLTZNtCGzko3fCvibnCVducGN7Mt5JohfkeT1LGHGYZ3nj8UxneQZcMJsxm5jcn",
  "key28": "66dyLoaLHLJtDDtBFFKAf1SPp6F1UGMRppA76z1dqLpy1VqmQy6vWxK57q1mV6vVE2wwCFKmYyHjCocSqBnhL7xe",
  "key29": "4PSwzy2t3LWNDBqJFkmxJTD9JxCkhv8JgaV71EPLvCwWNf5SmDRoyPBDWt3SRFHmKfq68EuUDLW2UqGJJuUUuDXJ",
  "key30": "5Ea19kgDWRMyHpWpwbhnjS8HC5KtN6GPXy8tjFbxTsw4Et9dbKYSSdaQZLHPjr6Bbk8tJjo6Ri4gmkWiDeDjh3S",
  "key31": "4a6gXTDR8fgaL6yKxSRAbAJkzBogdL31UkJQUSo5oFJ4NyGqEVA7RggLPCmZW1b8ib3tEzpt1vcPZsVtFEicLyEL",
  "key32": "RdXa3KP9b2LrVvQ7tgp6ent3J2a3QsHRYsrPki4yf2FA85fNAv1dPnkTY4L73NLT4BKZitgC7vzeFhA78jGPJnd",
  "key33": "2zVopwNyD9QH2B4a7WydZUQNDx76wFrMekDFFMoZumUkEqKJUxGdvKNo3z2HzfSssQSvqHtfnS9yGAfBbRytvFR7",
  "key34": "4mG5p2yhPpinzMLUQRd1fDBF3wRAUvpiuM4Zi5YQs5QgwSScyD2ZxNVasje4RcncJHaTjCxEP4t9cew26ddN4krK",
  "key35": "3pBfMnuToyfAkdYW4ibbMvVr4N6Pi3nyU2RfD17UVN7V3ZJm33gRRuWL5XcyS2an7soL23HhNgLFxg7AMLCaBkqq",
  "key36": "51FPCbQA41F67ERHMDtyr56fVADih8PMbgeEUyAAFi9eEGryC93TxzxcCHZ8fRLGW8kKzH8HD4CvMEk2zvQXtAMm",
  "key37": "4nxnHBuX9juEygp9SZ11f7hEYcUYPGtbV3syxARPKGfUY6MS4dM3sv2WTL2H2iuapNaNbGDvB7xSXzPxP7gTBLQ2",
  "key38": "3UrxhczA44ZQStBrV7h11Vh3Ly9EALkjHzEjiCzj9FMD6c67DSDtP8NhYGACGYuvQ7MUY8PGnvgqjnLnXwNbPC4A",
  "key39": "MuYWSrCvvARKmsUZXG2LYY7z2bqSGyyEpB8pbEEDYQGGyaMaJosVqjQAwwDP2oXJyc756jUibJejo8h7mRJ4nmY",
  "key40": "51gDHGRKENFsGLRWtrUFg6PX5potqALvrXMEto34XygazVuWRAFE5gpVh1WFW88UT4y219zTBjQKKbVbhDJQmtYe",
  "key41": "2mg4bS68e1jSsSWDgZkwyjhZQV9Zjj4HQrbCdT9JSXodBe8E313zCGJM5hXhyd6qK7WdJTPF6nWxoN7fzc8bf6qh"
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
