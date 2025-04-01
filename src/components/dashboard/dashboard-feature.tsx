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
    "4S8CU99j227wgbHmLNZdyNQDWbUb77uBrMiui5zzPgJHbitjfHVk17JyzVqUhEw31fJowUcPgh1JNVUh28WLyJuQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vA49K513oBESMaaR3hDKMNPR46UTEZgozZDFQoeH8BvXu83itmiv4FKST54h9UotmDuSF2pms1nVumhjJ1vSnM9",
  "key1": "3VL8QkQVpxfFjfdWPiX4227XEPs8vJdoBX7j14D1fpPXmBqnb8sV8UZVveyWAdBBqezg8oL9quJPcMyxuaArGYaw",
  "key2": "2mqSnbhBNTKNAPvooTt1ptHtdFqwvVJGuKNm62ixWpKbxijygocE7cmTT76V9na1hmWuuANc3fntXiyi48ASATHK",
  "key3": "481bXtrYXBhs7QP63bT3Z7RBPjJ2Yfpgv5TuLXDAwXeZNUfyqQcfeK8YzFAQWEkmu1VaN6vbptzXx2M6nojPb28u",
  "key4": "3XjvjUshVWHEV2Jn8v2nuSdrJW28573GoJTzavR8N41ZEhTmuGA8qdi3urWWUM2sdyd6e3sJZsBBZRnYDRuz76N3",
  "key5": "PGkwXnPZAvCZz16wkTkxYMQBVtnXJaHYDUUiiemBzTtQYsMwR2KjZr8veaAY1pavZiBeeKNYXdKzCpkvQxGxv5a",
  "key6": "3XT18dxx6fjAmyswqyTucnuJpnq95r8A1CF9C93hPb2Xiy6WsWixFX9zXDRLLveFugZQaQHrkXyMFvBEqNKLrP6a",
  "key7": "5JBGGviTu7qWmhdNevgvWWNiEPpLqFFzMWXbyVBYGrCk94XBw3t5q7zf7SN8y5i4b8LjqXLTNdvdMoE6gr9b2Thc",
  "key8": "M2NNey22z8WsCD1s6XLr1PrCRkveZEKW8no79yUnm9eMG5iVGmgTSPvE2bMwWvWMei5BLUt5Q1AXUfSRwfVJ9bX",
  "key9": "2H1hJEfauX6YjNedaYFaaMs17frMvAr49krUTcgTBLRbA7gmNnSWT4zQjscmwa8mfZ65v95x6MFWvq83oG71o4ez",
  "key10": "3mrnerwU23zpym4NJMtjDReePB5xCFjFBQ9yDejLXGv6tQmJKspFNitV1YWnbXKZKdFKbsMS8vnGY9Fw8zHydFRz",
  "key11": "2oRJptgkLNKsDKneBXseUycjV5Xz7y7dspUmJYhnPh8Yag31jyRy3ZvfBPSCFAyK4pBawmGjEhu7MyDMJkuYTz9Y",
  "key12": "5yKR9rfnS5ULdmejujUmWRJGmSzDzKtJCvQxLrAJFuTE8cnq1u6gCgZhpfpH88mAF4EY8Vrs4ieY9DMaA8e14yGH",
  "key13": "hTNqdsuQ4Jth731hhqHxYfQzzdT43aQ14HUW5ShYmMM2sxQZsAwyDHcibiqB1LyLpwZDrzji9u3YrRruPMnkxce",
  "key14": "27KgPvJAGJytjAGct9z4UZQ4jkb1fWjX5NVzR9cBWRp2GefeNr4hnbMmRDYkxLqCz2EUmT9MizWch6UrDkjkhVyZ",
  "key15": "4wEGotx4NAbYGP5gaZmLxLx5T3wscyLFYKoZHUoKsTvotoSR9wdVbxzLH2HappNMX11SohjpxD47XPmJt6nRDpmk",
  "key16": "4jVfvCdhtsQqLUtJY8jf4CrsRkpSFidLvUrxDW1kk47PM4FNwb2yhnT4Le9KE43sKbdSjWqD2Y3WRkKfBtF3kpGy",
  "key17": "3Z2RdiKmkrv1Cf7WRCt8Q99rgEepDyVPZod3XNEzWM4DupZYA681AthJvsBmMySFFi9ZEy6bzxsWNjcYyNUkTgLY",
  "key18": "SmuxS1CoPrfAwE1sK9THB9jCFG998z8NGYZHba1AXahsv2uti9avpwWtaQb3Dugvm1xMD4HzFDkWsSvfaThZffY",
  "key19": "4sTi8euJn63pchGXqEnRDP7u1ZE2VGt9CWiyfUtcW1L4Tch6JN9fFuvPLWhdXfguD8yjF3Fu6CSMi7WJUymYBNvc",
  "key20": "3rMQrkJn6orn7yB5RzV4nA7kwcM5wfVpqgyDgEafw2XeB7N72YV8owYr7SJfF42Q7ya3rv4JJqfojDpu2VUY5bxU",
  "key21": "D6HypnwFb2BqpKSUUZg5g9Tz6a73T6hspYYeTL23HkuNF3Erp2P2s9BamSsPhNf9AmDHh8JdjxSN8eFL3Dc9BSM",
  "key22": "nLvZUu9WazncWMK78TP4bxP9H44nSfvNH2uEY58frFZcz2t1r86MknTnzwqKBycZtbNcqhTcUmh79eNyGA6u3is",
  "key23": "3jeNr5GmCjPFqrfFFAMjZyUWhtisZyXUFiB7hTH8LbgSzNoStB6jqRfoxtW8GaMYJSYvTm478ftGnu3deuxqpFKJ",
  "key24": "4JBArE6ouQw41hB3gb952ZTQVV7sEhywYVpA7NcMpYGXFpESkGpJqhbth9Gz9wJnJBTch2Kk5AbnGe4kd81nrNsg",
  "key25": "5Aicuoekh6zde4uvxXwb6ov1HzYWcLJ79qYUBsF3BxnJmrGLYDdXez4tSt5UXfUg44YD7hTxCKnN52vcwXieTyHg",
  "key26": "4oJDeeR9p93nwaPUyAtHFQFzDsZbgRDoRqKXQwCPDFYyf4YvnmrEPr2gHprBMPV6oGSKHYxobR3q244Zd3QubxJh",
  "key27": "2UacV4wf7uXHQeUQNyvmL7yM8rr6r2toJzzCuyCjVkj8Uc51jnBiyvV3umrFzWpLfhSaSGk7kQ6Yxbj8JaYXarUy",
  "key28": "2FsfD6jna8y8KtrawWTBTXXhfaWqJFSJowRqx1jyUFu4hq2ZhABTcWPJ4aq6GH8F88mni6fvE71EqZ39kdarS1uD",
  "key29": "J2pPN4knCPek8HtsvF8GefCnxhPeNwr3b3Kv2tLsP5u1BA8EJhn3ATWhcLKFcU46p2QJ6jqJyiUKgcF7v2B6EyU",
  "key30": "JoDdbozRcuQNCT6XKqj5DbKrup76vmFykPEifbhZuFgH6LVyeb74kzbyvdmbjJSaBefZoUSSpHr3sZYujdAmhCo",
  "key31": "5pfx3PRvHuv457BPApJBUPJjZoLZkVojBZSUphvMiow2DcNCka7a3b9deqgdgU4fTiMZNN7YsH43vbuFMkDUyikn",
  "key32": "5RzoASiCG5uAVoWJfK6KDzLMh2rpkejNFfAdY6RzpK4brSN52L3pTgVPNNHurAjcPsPKwjo9YmKtXmycRb2L5iC8",
  "key33": "rMivu6yVUoVuqyJzBzSRfSShmgPPa4cbXa1doyQCKPt6A1APWVJAHga8taoo28X3KjwsEP8abCzuccdrTdWGtSo",
  "key34": "2YLBmSMhcsGvBUEpGw9xg9n4CYhunL4AYUynog65vtUv1x9YAvNZZMBBs9dKSxvzNpcc4sAL2Acc57S7yAu47EQb",
  "key35": "3usgFgmadYqaTpxmUN7hSyReSRNqNpHKVncs4Ut2pUuJK65yPXaC6WKXc9386kJ42c67q6Civ55LWqnDMyuyps1T",
  "key36": "3y7EA3idV45kWqHsUzmB3uv6p79yzW2zMriBAc6LKWXTZLSi9U4KZS5JWyjbJ9tSE7FoyogdxgWymuZ4PCy6sPeg",
  "key37": "3ZYv7JWwQQs7XSQjNcUN9yz4EWmneduriBVT1YeevpbFgGrPexQ9FPmxJND2BdNSokomiw9P56jZuBs4dHtF2hSu"
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
