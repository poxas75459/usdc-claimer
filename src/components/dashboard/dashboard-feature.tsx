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
    "5UfRUdp4PjfGSF7VcFujYR4iCsgvpc5iW5JeVq65GC6wqiSs8XchZoQe9PTtjviQ3DgT1E2yYRXzmdWXNXsYPw7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22gpEr9sGXXUN8xxcLBvcjhG3ccgbfedr9WP3YMryCFhXwA9unmNdHaR7iodb5esWRotFtjLxTEePYAdv1ynfKX6",
  "key1": "63BwE2qd9aALABcMTTQuGkckJHAs256CTC45CZY8sG6qZFy5MTnoZj5ANHevZmNip595NxnzY4DnirLBnihEEfYU",
  "key2": "5bFmd7ZX17Nn8WgaZYKVqHWHk3th48F5nPbkNGAwCuwcQieKkojWKRPKhvmtUuZhZfAx3SsmxMYWtAUUycLgFrwh",
  "key3": "3C8wUexaRpkhxi3s23NPcD4nAP2SFQWYA5rCdXpz66R43QvTxb5BJ9hNKkxFNfLiZTYzmDY3UsKj28SKFDzUE4Cs",
  "key4": "5u1Mmu53tvdGjQwzakNAtEbSV76uyyJNPEf8auyqZSEmuZTziGx5t91HzeyoF1S9uKhUma8iXFhfQR7wFqnZGZHx",
  "key5": "64C1pjEdNw7aedsZxNTFPbc4qpdBGsfqTvxxbN3Qu3vNUbAyFbbroQFp4Geoc6PMNXnRjdh1Zefx56gFzsVAsH6c",
  "key6": "5sno2mbowdJ9zd2AhZDYRsVwaFoMePZv7zYudMZudb8E98BBz2LKwTJgta9ENJfpCm8D9Xv6mj4whBFLZkJLFx95",
  "key7": "2G5y9QtdaGsrdgo6oCHCyXJLNtSCcna2RzgqQq8uGnsi8T71pvitv6bbbS4nmMVRZsZNsZSdGe61y1rdAJj3mfng",
  "key8": "4oSWTCUD2fJJVmjQ4WFM8ZMpEnGkbWkzuFo9YUhCCM2Y5cShe6qozPRn9n47rFDjErGQ8AdKs7xRGFFfRE9j7x3s",
  "key9": "45KPdhRe9ujpr6pppKEd1Rk8DeZX9Nf7pKyv1Ne37ikeg5w2n4vZG7vcgvYRZiZvUdBHau79WeQxFG9aHWDBuTVo",
  "key10": "3RzZQ7jveHZY7D8Wey7gUB2Ljk8YGKrxpdyQveuxQMfBHKHwYdPs9LjbwiRAx7onYab2dabRSrrz7Hc5mhMxrcje",
  "key11": "35w4F9cvcau9iPcPkQYnynSod22KS9tU6LmhRwSwknSF172ppaiowF7fL44bUirk9TEHsymTa5uepoPadLYXYRxp",
  "key12": "5fR7kPfwxwPQ3e5J1GDL9wevWRyMdozUwwRnMpyw2yFDKpyGsLChbvRQE6KLvRXYAH58qFvpmUzFihgfuqJfX2c8",
  "key13": "7rn7Wy92tjmhvGV47k8m4m2W1WvXbpbKE5LjRXbHQSP7Gn7qe2irrVArdXC7dwModuA62T33KGE1TWvYeqpz4vh",
  "key14": "jXLcoMuX4X4WfTHrg6UxDtxVAGHiuXbFxhAqWpruo5NUPq4kWPAYBr72VEfN4MMb7qM6MGRgJcYqYg53d7dDSkT",
  "key15": "oZVAv4HVuEM7X64fpP5Q7mpn8ExC3HUC9XgLs4467vSiCAGywgw7YobMLmB235rMrEpGJpENEvpTA9mSjJxCD5r",
  "key16": "4jwoALBvCpAYQAMphtLQ38wEn4MTG6wZ9gt6SCiJNz7MnRbCbFQWpMxhaZiBouQj9SPuNcPxHmBiN2gCpiSCghib",
  "key17": "4bHqJ9Wt2gETj1fQX5V7Czpe4nQFuX58q6pSsPjcpL8T9jcfJHmNPwpD32n6M2NHa4tqCoMNSgPdYE7Y8u7CgrvY",
  "key18": "A9tawvLEUjpZxuKAwnMqPf78cmg4MuVt9J2G6MzrVnGZqDduUZkhshC9U51MxFKuJS5Nwjpprxj5ojvuhC8bL55",
  "key19": "25cLJm9kzm7fPXJE3pUMijfqsr3LCKPC1ZnpyuEmeQEa281PGxcDt9Tz9J6QWUcJKkFRMs42DxCpWWck7tYqGfQs",
  "key20": "EhDzMnR71h4VAwZqM3Z197QtsrcRQEh6nH2L7gnoivgZH5ofksCg8nM7Sr6wgN7fN4gbCshrMFs8Tt3gAZVRQ5p",
  "key21": "2KAXfVNeuvwqQJ2K3vnt7Jp7BoQLyetW4G64PueS7F3Mnd5VAbr2Vq5rPxixVXw4aGY2hCUL6Tw61ew4L7fRZvzn",
  "key22": "AFi6nLiAvwjpf5pyjJSnHFGHBZ5Nw7ZJ5C19h62xwAg82FZYBAsQ11LraETg4BdaGP34Tz6my239wya36N5ncXF",
  "key23": "4mkm4x7c1G1HMduP43vJfgfGQpCHTLhMBp7Rkno1EgRBitwZ3H968ELnAsKemFXYRYq2vWxxqBcJuXYH7HZ31znd",
  "key24": "bT4appn7bf5F1RmUQvLRDiwh2r4ebybkS8oKwpocDbNp2FJtCuL9uyw7CqmtTszNMGvLt6eyvJ9vmUgGJdAHFgr",
  "key25": "4XGpTksdFm5ULTjhCZwSRaNfLCprA6jHfkGHP1M11fSwdgLumdRFARHpw3zmHifzrmFUXKiP5PhZxhujkmy7YsuX",
  "key26": "3FJsF6kywdAFesYtzQ3jAGBs2qu1bqKhoCkLAWvRfi4woiexCmuiV16X1L9zAeFgN33L6YGmMHSbGq8wqpzL8W8H",
  "key27": "2FbeeErZnzSqFdmg7koGSSpnt3Af4Amc7wgBH36MS8dpZovBJSyEkoeX5CznNyX5bWWQggbd5qMviFnva3khicKH",
  "key28": "31mynuz6tLvhoBhibLgFBwo4bvwJWFjtMK2k7jbgNs5bEXiPu1eRtvc8gXKiAXfDKDZDs25obbqAmDLwYaX6v7gY",
  "key29": "BFaTxzNA7f4rPYyZaZ6YcRou1Y6AfnU2wRRYWGQA5KBu5LrpAemLKnkV9JDM6w4qcVyKhWU9RnTMPcRcv8MW4bX",
  "key30": "4mTma8kdWHjuueKuwpPzdxzkbqtkHfmbZrfYS29pMc17PMcjBRnHPoo8PEyQcgTEaVhNiVwaVg3W32Jxpz8WSpfX",
  "key31": "5Lv1cWmucUkAUR1Q9uRvgK9maeFBy5A9gUJVBCNiREkBmDMTXCVhQTqWF1k3c6tGGDFuFxQ8uL1RkAzhdZT16pym",
  "key32": "2QoM1n1PxEpkyzXRKev2VNWJReBSQNkMTMd2JmHnWEyLAgynLVkhHSspw61D6PDJGFK97znne8zV132EX9gBReXq",
  "key33": "4je9dWv334fTZKr8xXkn384AVcKfBNbmYDxjpzHQQYW4HJZbDTpQQo5kckhdpmZd95qbwKiSm6Gh6NrmdsFA9X92",
  "key34": "4BpY73WUWd2ntY6C3uEVcN9u8LVoh3DVq4RgKcRQusZPUCRQd7pXG4yTaV17AgomgEEkJxotvVTL22ru6DDJVgeS"
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
