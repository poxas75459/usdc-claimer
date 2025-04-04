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
    "5Y6Fw9hxzzUAKMNe9sSS1Dvavqx4MzFBFEVTBS7RvKuoFvx4dYgsjZzXVJqU2ahtez4n3BszTgwPamE7XAaNTGFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ESd4denQWVXxD1ZgWwwqKKpcCFuBsADFSFruwJVx4SwfMpTaPYLy5cUytMwR5S8e1FHt9rQeyZVbjrBNE4AZVe5",
  "key1": "39krxhzAeEmwPpK2Px9szNowfWRUq64FsK3UhACs5sSQZpwKMXF8gzjcU3KpKHVBUpFyjJ5M2LtWmmDAuSRfvh7Y",
  "key2": "4u7Y78hGP1EyFC99ZLBzLHaYxwQs14shTwCe7qLKExB6MqUPuJK3dDYSA52Cx82gKbJVqTXt6dqSu7H7aw22RGSy",
  "key3": "64ZH3Xc6NjE73WwJE1eny9Js26VdoVafH2omAz168WSjZqgynxVCHcPX4ykCZJtDAyG9pHtDrqwX68wiJ2oHhjVV",
  "key4": "pCQZTA22fBskv12EfxkdsSpSUVeDu5Aa7cySeFBjHUpYxfqMfqVo3KbfYjZawAe3GFURyMHYGPcxe4miLsWxiqG",
  "key5": "4TK8dBTpeQpshtsUacoUEELg7Qca5F5AHHansiZAJ7UjYMzjVnX4Zk8UAvhmBCYrZqy8pKwp9zj7e8kbKfV1Gr6P",
  "key6": "37PdRM9YYMxzbC54nGs3zn4HCKdDFQAPgQ8YgLvismtBiBSAcdBKe96kjgSQNq23L2kdKtreHnvYZ1GybKbRoBDs",
  "key7": "5AmvXgsEhQGPnK2cGRT4jNC3UtYkX4AsiYkXDkwiKjLhuaG3HQwH8nYfiLT7AZWugNWr3f9f3N3HYikLgbU6e4gC",
  "key8": "2cWxwfoQWGfAZdM6GvUVXuaXK7RquuTLbUs1qS5Sy1FESRgTNmT9yWhRt49x8zyAT7cSdnBLRBbAQs9He8oBoYbg",
  "key9": "33oV28CsXwT8ZtNbpoQbumvoc8Mkjm3pMWj4Ue8unRZq3JE4AbohKsdtpfYD8h8KmNx7q6PDNWJKG4GZkkR7KAbZ",
  "key10": "3M83kPA2MLf9XsURh1Ht4pmMWFyQMoouFpjNXczm5VtJKvNPNZG2tAwT2EWnhXW5rc2rVa87mQPfg1BrceqdXXq5",
  "key11": "2SNi4pq6V8jrtHKUSBVFvNLuL9bnhjNDrHfrUdmK17CvK6DJ3RyZBVKuJRxDEaYzi6CbRqjBz8ZiX7ubmEWVQsyU",
  "key12": "deVEWsksudy53eZNHn1NEhkcrmx47QESnSTzJMry8s4DDaQJVer81QoEj2bukAVTVBygRiEGdHWvXE4jXqHvMc6",
  "key13": "3yTwtHMm9C9AG6YJ31Q9qJyQsuSQUowkcPxjwFHZ1TYoWo7Y9sAnevYUF5Tt1Nf5DBegheGVey9vKe27NS9bfv1d",
  "key14": "MoZyoNucTt2n7Bac4J8fos4Vj3W3ABJuJfx6HsRr8d7qkqgoToR74vvdzPTGpqj59Mp4XCHmXfxXUoA3BWiVx1j",
  "key15": "2B3ZuGSDoS4RLAsdz9ViW81XBx3ZvBW5yUxCSAAeiNTubkk7gm8TrPeLLwGaNZdyzrY3dTiBgwFAYLiAXraagZpp",
  "key16": "4PWuTmkaD1wjtMgF41MRU28FjXAYESudDzpjXj2Pype28MumwF1jPJ6g2KgpmiqG8uCr4pfCBGZb4aXyZk4PRZSF",
  "key17": "5sNCs2HZpi8NXpYj7p4EYpmMYWk5znn9193A982xsCpMCPzdt8xHmW9UjKaXJsZuJgUMWtQ1jrFJfL8Xn2wCaXWM",
  "key18": "4jz7xbe1CLgCq2zAh2MbMuvMUZYpB6Fgb4HiwqGgaLpXtzLrH9H6f2ULUJX2xmXAAkUd3oCYLSQi9CHWT6KVVzdS",
  "key19": "T6Yuqy4vatzho9xuinKHaXXNvCLGJcbs2LEGVd9uZoGr3MfytoXui9PrLeFn6TSh5yrg7ThPfF859vFwyFdXQ9Z",
  "key20": "3uXJRRy1w91ztNHdYe7kijE8wLEt4LTGBWbyizWXh3wpMfaWgYtBuhMSCJQMSDQ9kq9ABKCDwrDBoqaELEFN1tyd",
  "key21": "AuZ6cVQ9BBNKZW76jmztCpD9GdHu9PiiNqTamvMmB2jqRPtCzHV3kuhkByBzGwdpKTy7DTxpdYqSiGZdThSbkdr",
  "key22": "2EJ8ZkvZwprAigLGpxNCuVp2axGCNzFRN133xkLqKRTS7zd3jTeALDPXTAwDyMK2hdbzxE9jPX9evrj1kUEXCYtu",
  "key23": "3dX3zG3qH19FJ3iw3R2md3mrUNqCv84bHJw6nm81mWiUV8pW4PnXjBnYi3ekikiy1iNdAAyANRf9NEdwjgaQEkk9",
  "key24": "4n3k277EJ3Gud7iBCtiTfSkeSXDTYrdcGzL6fz52eGXqVghXiKYSVaNWmRY1JYwyf3wYN4FpeTngsXq2buQ5qHJr",
  "key25": "7CCQruYgECEf7Da6JdxQ5rfsDmS6g5Fhz7hBUQS5K566rkLLgiHnu9zd97iFwD45nR97gTUSxQp3nLTpbvhmoou",
  "key26": "F3RN1xLZ7K7QT4UmQh8eEkUTeHUTuXhBPTjkvSFf5UMAz5PovxV7pqBDz9z3T2JhyHU2tN6he5nz7nK38EmzhgT",
  "key27": "4fc3BCKsUBAGKxV7tsX74Tu1rtehyAicNN2tW4EbnJ2mgGHsthNXXwwFrCr9P8kv9R2ZirVSXmowkyFJo9W44g3f",
  "key28": "4962hDm7aQdbKoAL7fXDciuaZiDJPp77XkXSKwFZ7M1mKDGfsRvo1A8daz1xFjKtNk2nNUTvrS4UuJsBUFrL5Zpx",
  "key29": "3aiEtVAx4YV1qkcrUfr47ZcQxSA52PKWkq7KU9r5Z6sbbXvw2c3nBjgLvVq3DEjNp1RqXX8WnhA83m9smyDYgpN4",
  "key30": "4PXhfqFv5fgKQzLveF1scwyTUuAH554hwvXLpDemMaxJ8hh9FaiSNsazHQpfBux4fCeumRhPro2JP3tNRzBgwi38",
  "key31": "5gKgfzve7rZ4p2GHj8r7rNby9VYgr66ngphHEVuFv6oy9kv9tQziowBJo3Wzhvti3qSrhAzMDpyTQNKfhnX1hjsy",
  "key32": "4UQFSP4Sw5YYnXJCv1aPeBGvBy9uhyW3b7GiyBwcsChQfb37yAXoWsYSH9SjxriqcMWwmCpip8eFPwqLXWfs66G4",
  "key33": "2UFvbB77WaCQHHc8mnYc46uC5Lg6YgJcsTn8YAbh2s8RefYWQaWta3NiPsBSguP9WS2ErtBh66sHUgthkMFrY7rV",
  "key34": "4kibXxaKDpPv2tHXNBdUDHJBYaxup9ragvrC1UYEXPKrhFfMeYRrWg9q1MkU2KJBLpgKzUyfRjctzEaPvppYYVq4",
  "key35": "4n2aCogRw67sHBeSduuSiWmTiyR6N8uNdjMuSzBLKp34AVexmYu1GBuXJVCYp2SwESt1AGdMeTKD5t1ks5Rb5tz2",
  "key36": "3evMQjWwtCoASrUbCMMhDhWrFw4vzM9CukonEokH8jAnWjfZkj4RrEWPiuVXGvS8pxRoxof8EdZf1wHjsPygwhaa",
  "key37": "3j3Na1yYUPW8AfnjxvM8kMijiAAFEQ2HZbALtb3apdcCHVRtL4ZmvJDEz1CCU48MFV3EpiLSAydc8BKGj7D7Ykk8",
  "key38": "iR27jHbFWHFurJRXEKD6ZsEfxbqpqWL9q1bEvg9G8yYrT4zNsuuEg7mfixQuHWiq3LYDANFDN26GsAbz3bWRNkA",
  "key39": "3gjZAWa15ZkztZon1ngJE5SgjKwxVgxnwffak6bRLuEqPAEvpexTZEvYKwSV46FjaYXLuDjzrnRpjMEPDv1dGPVC",
  "key40": "5vHxwzkVya2gcPAYjLvbwUFheRTX74gn1CKRaaBnmkhhvgxafy1KrLPw4bXnvHJsi52ycC27d7UjnHzLBq47hzhb",
  "key41": "4Hfht8dY4g4mXh6h1vrT5tS6PomKjUx1s63hejnDZ8JsuRYW8zHvWU8RTepC3b4JezuAv1UaVJRfsfFcWmNnjBRR",
  "key42": "39LtDUeWVbho6KWsKc6v7vNGxLwWWnSKDEVphVLkXq1CtoQEwppKLGMVc2aAJtR958tARKroVLJYFG32mh54jHbB",
  "key43": "2wmSzQHBjok7MqN2ThDQ2Vcq3VReBqiWQSJE5aYEafP3xseVkQo5LhaPHt7hXg7Lk4gU1WTd6V9xa3zzmPtWkXgw",
  "key44": "3QDeSD7uiYzYR3kQDu79dre9RH8phcQJh41kQy8itUarz18J4EzTnsjstympnkF68R8YDKC4cWNyrKSoAT8a8RuX",
  "key45": "3CW5FkFj4bsiLNDNDn6jU7C4V4sPYa4CV8zKE3WLmr4cTjZEjWk6MsRrnkrhYvjegAuZrvTkqCcpFW1Em6jjbsJ4",
  "key46": "JCvaoEzB1GJTZz9QnCMJTxwdWDwohmAMav1P178MUUNCCfoZncpugvC4JXbJMWD9HXw6KvHAgXiucWaMt2rYcW9",
  "key47": "2Ua8nR2jC5mftJtP1xJnkgNJygd7H9N9TTYQJSL8LJRif39MRtRVYLBM9v8oCJrB17mKVAUC3f6f5uyL3RAT59z6",
  "key48": "3nCoGmdJGpE2d59zzQWcEbpQv2C1EHZCPTEJmXBNpGgGRN2uTt1g98TRSnumvVm6chQ2JsFGkbLZtb4U2nTPsqcP"
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
