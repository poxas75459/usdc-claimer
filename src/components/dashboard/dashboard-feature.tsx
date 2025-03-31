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
    "44Efpq4PijYsYwK9ajzHcWQ1yshniws8ERyAGu46QyEFMQFpFceGyAYAZEWAjm2hHdrQ21jDJ5ALbn6wLi6s14eS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uaYfZo6TS4bEd2RGe7jcLJsAdt7Y9qje86Fa2SPAm9pNdJes6cWukxw1tAep7YzB5EY4tVRtihA9ZPg7KSry4mr",
  "key1": "3gsb5WWPaQSxcAXpjpVtTyiijBg451WDt8rz7Coggw4uuT5yCW7qpDMDyY7GeXt97rmJguEyf1bjVfChA56czVM9",
  "key2": "3iq2uYwSYmvgGSKCRLEM5mLD3SC7gvgPc1sQcgh3XJpcArX7ccUHAzApDg8NYkbm7f8paNAmMaeqZhq7qrQ3sRb9",
  "key3": "4sLZyqY9Fad17una9mrob85RQN6iRBfwBvPTTjQe1naLHn1piasSyxtucLEVp1qjADtW1KFJbezMRes3BeuYqkfF",
  "key4": "4dYn4ajPuNBLqFDg2LZAj7NsMickjywyYrnrX4XvHwKMBhqxPe64fNA4LFyN5sSpGBhDF1ppZpNBi9aGcacGwFoE",
  "key5": "2DLtkETi9ohtsTesLtWqNu7XzXJcT113KgvwUgAjGgTQ91eKGVakac439BePm8tdtBn8aSR8Wx7ZxJfMSbxgDAr8",
  "key6": "2m3dRBkpznikv8y8V53E4bs4q2iLFZQ997HxM2ANMQwvK7vxwfB2W1G4HxUbwXvqhofpL7nFKXRgGzXqwZHxak8G",
  "key7": "5RnYCmZCrugvhS8hrZ8G2vjvFJpd7pdiKkADQ4GXBDkWjvV1iwZgQjtTCuu4uSqy5t6N6ahZ1cwqgkmy1dw32abn",
  "key8": "2yN6cE3J62FXpCm9BkkwVM3yoYifMAhZkhFYszdS89ke1G7dbto228FWGqGiWq6LUJFnpLPFiGfTtN9Z9kCSieyY",
  "key9": "ZHsrJCaCXuH2B8wDCvd3qb3VTjN5qdzK5mxi2KrK6rgvFw2RTTRuMX8RgjmxJJLNWiQ9ZuJKxmMh5HweWGmgQDq",
  "key10": "3LeWHaGGRrQSPqPh9Kva8wiv7KfHH9GLvtEZ8kSmLkBEMnMBDQuEhQRAKZYqsv1ZknTnNPKKyQWczLDagPdbkDR2",
  "key11": "2Snzx2iFiD5hcZnVWYjFUTKgn4BfG3q7V5Q8F5gL8iELzS7EoRvTTaGy2aqovdGqppXyZbykRNk3agnqU7oFwqi9",
  "key12": "4FpJTkcG7JXkzU8gC3Z9tYT9CDjX9LR1rENkiAhABaKsFXSFePodSNynEFpB14A9CfpJwB77pt7JibrkZNR7EPcd",
  "key13": "55HPj9VjqsBaobSKuGAi1iYFRjZqZFFSFhCHfHwutosK2KypQMZndaBNg1LyuWJ9nihkmf5H4USoNxvEm8Vg26K2",
  "key14": "63AXVaq8WQNFAFCts26YjrLu1WrcavpXNDJ1nWRvVkdZLEbLAiVMBjFnwcAprbe563jkGhyhNJ3ytcmZBmtrKFCU",
  "key15": "4XfwyBtqsF7RbbibuoTyftSMbf9xeyzJT818gFyU8nprZJXQSAeKiDaacBtczr3MB9KqF5uJNMUdDDHVEV6CHudu",
  "key16": "9xq56NYhr4XY1YXAmK4HZxkESY2AuwVfgKWpFRLxfumC81jt9m2jR6a6ifDav1djaTLqaD4ckJTs6jzWHtAR8gV",
  "key17": "5cXi5iFTjaYf6nGVUSyFjp38SBqBvPLP3BnyxtqShL7Q4yDMJHWWcu6rAd8XFVyLdCYzXXsKhDggZhSKFTMCrV35",
  "key18": "hdHwCvbvSBHvgkTTshsprXBPd5izj2UND5pLmpftR7XhzxQDJprTDF2X4tZYyESMsMZY71TD45qerQUpCwUP8fn",
  "key19": "3TwxZAPiqbsHUasf35pnhZ8ke6vDPW6AvsmE3ttGs9ZCEG4feyBvNatiwf7UNqdaLAGa2zYqmueDnL6MyQahx5Lp",
  "key20": "63VL8EFbyMuzeYEwP3sx7Rte2N1cUrBQQ1kPcx9fAtYnwzaJCgUYNPNokcH9bUWAx3cbHUgMnr4cuKmMn6HjjS7d",
  "key21": "42NqjHmHNV8QngzysXJwwDjQBRC3PmX2irbZx8x6tK9jkqQJ3kaDv3948qPUV9kZLXV5YmHmYbTsr9r6uXFZzHiX",
  "key22": "YSm4DqzE3i8vNhVmMa6Wdu4fa3RSEXrdPkvJBbZtFbxwshwqc2bsq2BCDXqidjjRc2FNrqj8byoKSPTBUKu63so",
  "key23": "4EehfE2PaZKRpFXVH9nT4auBRtNa1vmk2P7hj2Gh2fuKT7MHCSsfVRk34eeDxwsEnoBGAaHJybQTCvFh85rNvMc4",
  "key24": "2ZxmogRLsKTcs8bAXT4EBEaokwJoHj6nMTjSz6TATXGnGhRTfhUVWxdCursSB9FPfRRYVu8r7wMVRNc8bJZAv3vz",
  "key25": "t2N4jkoJCprDan6Gj3yA8VBLVtkUZCSeDFgWLePXaBZC3uRySa7eZFE3XkBPMPjpWJcAQXQnLwJh8dibMkQA6Zs",
  "key26": "qw6xnRschZz9bDV3Bw5Z5FPQBhTcifMBv9NK95zbYykYupteKD1T5Svhe7NybhnD2PA3QPz6NQapwMqvTynY6zK",
  "key27": "51W2kVGy65Bd5MKoEh94mnFzMJhrCSQihaA79F4WRtCqhnfGxzDYtwvwnRUy8T8m5amQCms3ypGuHC72FMFzL9B3",
  "key28": "5ng85Ksz3dHF5yhET3Y8RqJLYoMcewymxjwGxGxs9ma8AmDhyoV3oTfQGkCnwxq33J9cmSHSvbpRxc5HazjwihkJ",
  "key29": "63JCoRnxsdFAiM3p5yiDoDRNT7hAnvQA9sWDCSDLbPdnoDTzDRtxcfZ5hhgGKnrd3VhCz347fCqnwod1e6cNkv5r",
  "key30": "2aoF29DiBMtxA2As4FtrumToda4uj8w6nuXJnXLVbQaRpihGTnd8b7ARt9N3DSLXoS5HDk5RhpnUQPtvmq81AXhh",
  "key31": "sbMaoBsYwrmWDu6Uq3xjB1WPGjzC1Uhcvv6Z64tEHNyZQ5DSSRS4UsbJahNbC2WuBnBzA3ecJ2Qs1tiEBmZbvJe",
  "key32": "4j53iCYmX6pbxinXTzrKX834N5gXtjG1pjWGJQJTLxmxkVNCqTZVunPEx1ZhYXAkV5YoKptMZEc7AjH2TCJNz8Pe",
  "key33": "rGNmSzv5gWLXsJvZR1VKtyzy6w1XN8XD5Cz5Bgt5P7qMKGonQmohZxkS1m1JzG731jfzu5PgrbtZeudMP7TsjQL",
  "key34": "552NwdryYYkUZo4hyXgfjw5proN4MAEZfS9BqkgGu9dcsa8bybA97Ke6ShHAnhTdR8fJw1kiP2JJgVKe6MgF1ysm"
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
