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
    "f7vfQRNaEpCA77VdDs3241j3Nmyed3G2kbVjxodFQiQ9orq3dQFFnXtaSAsPBvw14FgVURiRXVjd28kg18kszy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XYB1EX4w9W1sTq67fDXaZQxAKLzkpXqmKpJozx3xvQJrcsDU1AejENMYBnEGSs1RWrJH9aJbmd9FbKi8a7LjaqV",
  "key1": "5JTdxrehMnzPcHCXwWxTJ84Jr13ZeSYVcNfYud2erVsDyHe3phJCSxXKazFw16oFq1Q3M7zhEtWHA9bQUuT8Xpn5",
  "key2": "3rENnYUAQij3wkwXCNYToGotY1a9Pa4hoRt9mBmbjvqG5TxeN3zucX8XagimoPK6Sn3tK9ZkvddR9MwAnPQXK5Gx",
  "key3": "3sC6juZaKN7jnaNsvLCBgMPFGHMspLGjd15kHPX3bnV1oCqTHrPLTWEDnRTptpoXJAxirro6Va3nNkqvFhBe2vvT",
  "key4": "3gdSiNz2FAfaygDmBWXfbWBv1GLHEsgzuAdMgRthbpBr62muLNaFeTBPdvz6EuKHYxKyeF31jEGxLFf2sDbcNLoG",
  "key5": "2PhRv6SeFywnsFN7Y8xCg2eU4hSQen6K4GQro164U19dK8CiY1Gu4PFY8rPv9aSKBWeAzNG5ojyZrkc4bACXpUaq",
  "key6": "bJr1rzT1h6AVkb2FhNShe6RfbmcGKdHbvfZQMp4KEmgFSmH5NZqiVqRvPF7sSDWcPhwkXyhdceiR4s4c195XSSw",
  "key7": "3JF9zWT3Ncm5dkuh6XBMSaf9H3Jv9x8DXzrXzDfQphBCod4AME3K4yBTmUFkqPWHcxBwbQSQfApe6qx77YZQoZ2F",
  "key8": "UXaVE8U78JhJyi4n4PKnRmmSEMbXUgm39hUd1ZGH1qnkpFUjNPjXt2v6VEDHFu4UrT5fZLSKXm2WKtyPbUvkTY6",
  "key9": "3hfemV17W3QawidNAeJFCCHYxZv56VDmaDu9oNYoNXiEhYatWBEoaHUCDqxncw72xSmHD6GWoDcg6kKwHZuHKdun",
  "key10": "5embTuLFPjmUcdpksdswmkFg5yBUR36NkRdTL5Yre2en2b1rq5c5r1XERsP8vuHqh57JGnrkG7YXxewXJDhCibjJ",
  "key11": "4sMkxHT1uTPCytwUAFoPgXNi4mAkvBKQiDcdXbNKFKLdDWcM79KbEBbAT4YkNa3d2oiduETXT76RSdxwjhWYo9tf",
  "key12": "4hTQSnCk1Q7zW6RMzybziTX4H3RiZJw9CBSbKLUnhhnVDDpnVuAb9L7EWGED6iip2uVbMgLmeLWVK6CtCkA8Qhmi",
  "key13": "3xB3JBSBPAXz5wXQB9HGdKpTCrtcUU3GDaVLEUdbEQRed6Ysbu52RMjppYSo8szPBZq2y7UJ7NoR5vJWAtYA1Bq1",
  "key14": "4HBHYqsEkhyobsLW6aoptyebtHuLvvWoRgZcqFhXLNQp8FdgvwX1GnvRMBbwCiELDfuuaxnXxkHYu3cbx23nWuYV",
  "key15": "2NNn66Z12ZG2MqtLP6mfyX8soz29sCjbXEcTK1ngdABJsd3Qy7Yi6QS2EhNgTm4K3BvsEzsa7FXhqW1azdJzDTV",
  "key16": "3e67fU7KY1PYo7RJYMGDyxgBk3eNpPFLm7rh9v8kfdBLeVkRKWdUqaE6sAS9w77TJUr3hFwqEuqvFhRCfzb2ZLXi",
  "key17": "5zqnjpDfTpiSdsWwBQJ725rdouefp8Ma3eKdRkckgrWdyDtufNqGAae2T3ZZDznZvXcKXMUVWB5SUrW9xmf15b7",
  "key18": "3HpRdj7RFAdWYAHdCxckotecXReBPgHodD12iusnrDLrimu7hKkyxHE9HiFZGmVcNauTNcbi9oPudH34ezdFjHLq",
  "key19": "2mwCXLDVcGQfxoTBE8AvTsEySiYBHxSygNGDJsQqjyExUxorLGp2PFxkUvmzzHm9BUKP5B9XxEBLgw546CV7Lo4h",
  "key20": "4jCZTxyFYzgdHGpehQ87W2S6yDi6C71wMoRz22FGv8E9hq4VpAWxJL6FxdiJhXvQk7WA3Fb2vWkxu8v4kE4nGCem",
  "key21": "2GNSKhHfrPshsK6yApoGbuEvxePqnBNLXNpdYUaQaWDnUKzzztYv1DCiVnhF1oktSwu3p1TE6J3RdfUjAWhjJjuu",
  "key22": "2EVMf32w4zeMQc8Xo7vGkTdLpTxwc2ZVbLLdeqm2LBBUQwqqqnRsHt9Cm1tDnxgSTAuC6uzXK3zz1EprjztdNFTV",
  "key23": "xqW3N3CgzRak3uYbuiAbQKweJAqkRb1K5Z4aQZyXbMJ1h3Q64u3znc3reJzjsvJVR9Qat6Cyh6GNMVRLA2W4f8e",
  "key24": "52PVJ5vbbeHYm3xoJQ657WQSRAFnc6WCv8XqaQeMSovxLFFq68eo7QYMCmWKf3FSuMy8kNnvU2s64yeprgSz2NRm",
  "key25": "5e4RwLHo99xvFWmU6abc1uYv9xNWcyiX2ub5Jr6N3pmSKdtyhyfDvAQL5PSgjm138gDLV3D45y9haBFqZzCT4mHC",
  "key26": "37r2MjBRZjBpgPjd3yGcQGnUeQhAvLHWe9UrzF2oNV5BE7a1wXJuBuzubnHdV5EhmAfwNN6a7fsnD6DpY9DJ76mj",
  "key27": "5LnxdqL34CGJhwup7fd7vCL36cu27zPgiEn5pyTu1n6w4jfEh9nMmrepboMa5jWZMfvQcdUVo9RaZT6MhNkwx5Vm",
  "key28": "5WTyymdnhmeXCch7GZF92QbRnPEAtG8yfZbeLchgzKoVGAVDkomUDh9g8cghrSNfvb3RnzsrLyobyLirKFbPY3Lc",
  "key29": "59EXz5zKni67tLqSELidLVQR4qNDPFyJKfbRA4n4kxxLBYZDcpLwpxd3JJxFqNREX9DMeZUjC9o3oNzvuWZSSDcv",
  "key30": "23vjMXRmGJRb817XYoE47gvPDE34gutour6DHGhWTf3TdTP2oWWcYgF5Bvt3RHbfJ6wT74P83BsoGKwALBE4FwSV",
  "key31": "3qUWMMq3ovQRnTYwpDaL1gUULL5JdBEHAqcieCiP1Zq1Nfkcv54KEU57E8K77v4Teji88CFhdvkSyWSAk1fBQZJM",
  "key32": "3wcv6CLnoh7qPQS84XjdBCd7rDC3UQLAkcYfvjeuxJdwCb5q2u42aDgzMuEYxPLTn5ZGL6LAmy5QrTRz5e5EGLbm",
  "key33": "5n5LAYFHoVgm3FvxantvA73HZyPzjRCeZq4X942xtLVwCmoyP4rmoNsM924SQxzxsXyJA29kdayRSDPi9HTnSkCq",
  "key34": "4WQcN5S4GC9ohNH4QTkdZpTCPK9YEa4QDdWhVw9vEUkGkmtE9JrBCcsgkNqUyUvWMWgDw7fyKAEpxPp6tz3tE1BZ",
  "key35": "63ZXSbwn28v7zHxEJZeYHKEYcfzHXGu4HMcPhZv6pByNaGSNTHpg2TiT1BWH5CVEUxRyWWbdYVg6DHgtACSz63L5",
  "key36": "gAr8ytLDqr19iRpQQNCUeCQEC1sRkyibU1XJZq4rCXEc8p2YyFpMkpDn6V3b7YWpmxJfW7UvKNWyqU3GnAcpZft",
  "key37": "5QJfg2TTh9BXb1xmjDoFZxkkcr5R4wzJ2Zr8tUmtMpmfC5QasReAcskqBirz5dAPxxy5aSamNJd2QUqBY3tbrccg",
  "key38": "cWL5oPsm7puE1ostYBwAmYfZW5w3H6kKFiDhKUwR7EKXjoTwZ5YKRHadH1TkWEMtQvjnpZM3P1ywbQhuxG6LUyW",
  "key39": "bTo2HhGdzbH7zu3FckFevTPnJjWkvd5u7LQz8AwAm4LBsiVDsHw1L3w4yqyagqnBe3jyQTeUjSLJLVmx2pzUqPv",
  "key40": "5V9k5FGqQrbTTWetJWYGB4aGEjcsNheuF5A1ZbgAU4SKcro95u9YXm8DbuAn6FvuXVCZFfFaooC4YvsmuLeQGtdj",
  "key41": "2jLuagWHtMNykWw7XYQdTy3iGLCxWoQphebNXRufuJX5mUK96zGY8s3cKDkZfu2fAKAMGLgh55egwaogTDyim5Yg",
  "key42": "2vHBrCPKt1SVpqJNTusjcq2S6wBa96sFvcRprNC1qSMXu2jB2Vnp5DnFwkC5f4S6he3DXv4qy274wZGskUNbi83B",
  "key43": "2V8PYnwryCmC1BRRUerm7xnWjS6XQ29jLVnoDcJ9SWFzicuaAJyh5WJqZLQyuXHHjL2mBNDSKVo27LLDoUJdx9cC",
  "key44": "2f5KKbkSSU33KnJw7Y7JVMY9FasbA8kfcBTGBLNxyHGgfASzaUu8YNoVPji2E8qZfMuYMSzAexZH5bpXNJC7kXb"
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
