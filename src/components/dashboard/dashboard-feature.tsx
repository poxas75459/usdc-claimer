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
    "46a78J5z7CbyKGSURv3QKsydNEQE18qXk5wMdNsrGiNB7EiXySWiAxPyir9Lqds1s9VkUdi9c5aYSF8DmxSqbr5H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yKdhWhoT7p3SWVghxZ5S8q8ke5mKnKfeV8ZkfBcCADTCDzbFrYFN2QiekfvhMUgcVCFbwcwCRxRNhDbLqKKLAjv",
  "key1": "gYqn7fqa5o8hbo6Q5JnkRvtLhVSC1EcHqfwMctcKfANGwZSio4E3EAr3CAbF3TMddHnAnVALgw42ugQRzV8hpgb",
  "key2": "2RHjAvKbJGWfrc7Jbb1x4MNWekMhvB1eq5ybci8WkGPLPptkkmTvo6jGs5iK9VjcTKbMUbXq483sujV3jMvz3Nmm",
  "key3": "5rBWnBtGoxU9RYbiba1NTS9oibKbBc6soGVaWScQfnoWGmVbJFf6SGiYseieUx51jEtUGvgztjx4KnnnTh71zp8v",
  "key4": "GQXLiv3qQZoQFGd3AFQUwXVr1pSnhowHYkWfcaHrEDGMVXVdnyAKqDGjwP1Lp53ZKKH7DZ6knDNACGeMTwxYX27",
  "key5": "nUYTkEDVwcUr7ycego2mBMTrPDj9SkbKoQuoei3icHUi25DZp6e9NGGzwD9wKMEz18cApSKwQTwCPeRPou4emd9",
  "key6": "5Z62eYpyg7diMP9KGKnGNWDNt6QXJxUCcJMhqVBvE4kfVzqKcN9mHJQ14ThHuvEct1DEU77rkF5NmiWqq9Wxfpk7",
  "key7": "nRdUsMEFt17We7kwUbyYHwJq4oY292ohLmDTNtZDRkWB3LDFRMEEPc22ri3vZRjhngKUuCGQVppFycocHzFtLp4",
  "key8": "5sTEeTHnCtHmooodTzfvmbWEeLXbyTxbw321dxNWFuHbxy5pgSoaB2k5FhHj3ZJ8NJsrHcdzB9jAQUoUy79NF1SD",
  "key9": "2upE647XHjPyh1dWsAowfAfKLrEqxSxnFVUBQ6y2CjhSfU8gPTDJYLyLHNwtUrNaQYWnnx9rf6qtM29925YnMwJ2",
  "key10": "54p5qy7nu5bz2LD7Gv4rptc9dWeYwmzbhUYSudoDN9Vp3oTDGnMnuS1waqitSBvv9QMEns4om2RGYqKHs3r7STpN",
  "key11": "LZd1oqn46tttuKk11j2RELKaNn5H7R9eDFPwxgHiqHJw91cSPUvadbL4mdReHX2H3xCcLKosmAXKmQwai1fsYLD",
  "key12": "5px6vhvoLzAYiJXiJJMhyKJwkmwZr8Tnqxph8pyS96GTrPEEvuggm9qi5c1M5J2sQd4q8j6ocRpwJBjHL3qfDMoW",
  "key13": "4Zi7KEZ27JMobRvzXzCDQFKCUBDsmr4sWNnXkf3P22Famog5G5UyzgCeHLEYcYfJbsfhJfMtrtNeNqJPDZ3zrnUJ",
  "key14": "4Wf2q75nzAadREtGj9G5eFFE4p4Ryi4LLW8QJY4f82T1iEwn6w2s5inGCUL34jo5NcHxNbn9K2MZi5gfRM94mrpc",
  "key15": "2HtSv4sDTY3LykHmARMbC1fPCND1eT55uSLqdgMfZDEbMeLoCx7HouWPXSzaTm88xMvcd77xVs7Wi6wn8Aq9Cuio",
  "key16": "2EGrc2JcB68AzUaEjocVFrCukt5d9hBHqcDHr4shj1Mv66Yt6Rsyj2K1AhAFKxC7may4xYgGqfn8catWUJmRHoP9",
  "key17": "3GZKNHAzwDnpnQ8CUjnAVvhUrAGeiErz1YLHGgfk36g1HDjkqYQXh246KUEj1oyRyhp1VrWTVPgqgdDXRjNpazyF",
  "key18": "5iteKaRU43zHFbHR6SzvdENScjf7kYxSZVJwwg7Ff8n8awo5TjxsngTnobPjcoukVkteWxqEh71APL4ab2KKyZMN",
  "key19": "2Du6m8taBHpsXTWFauZDXvHhmPAkNLFnoyxQVLUS2VMHpN5uokx7d3SMGfTJGQUEYvJS1FBNWd32hBHbnN8tTBp9",
  "key20": "4QAagcAJ6qiJotUyDRcBVCTS7fbmefnVfkXjR7BVRBTgQiFt3858BC7cwKiLw3quNW9FJ8Baht5uqL8WjDnEf2G",
  "key21": "37vAvceuRdh14RgHS5L5eBL6UUhF18Mri7V1AhNGMfZWreEwRq79ekBiTJMzoizDJM9tj42ioNe8n32U5KQbrXhD",
  "key22": "2f5LKXf6H5cCrH1te57C8DnJ1Wyns2Z52DMrrqZSUDkN1thzng3LbjDyDUHWEpR1EUpi6yJNdVa3ibrBiH1vHhCT",
  "key23": "4zRrmnSR4PdZFgyqSConwozbS4aUXVZ78R6s99z7bLMtaEhtupba4AZEUxmsDwnScjeVU5XY2EYACdLc3QqHTtjh",
  "key24": "4C3QBaoFDMJAHDtEaNcAxDsbLnRdfbwuyu941nsiDVHrmQprY9sF2t2ALjhKvXYmR8G63eoTqC7DTYTD49T7Wbti",
  "key25": "5vdiY6M25DtFPVHB7c91mR5R3ozKysDsARe8Kb16uLW8dq4ypg77pd6fdA1iu7vm2QaN8J4CmCAmDGnfgL6xveLr",
  "key26": "4s8XN7NJBkjEp5whWHbQ718q5bXsxGx5JyKkMArvGmdHXLmkZ8sATtdSHcWeaDQCEEqzFsVkcpRCwAvdrJaACAVp",
  "key27": "2jre6rLPKApDgdBcYAgBEZogCmqNbmCL3mftn6cSuDsrzPtqS6QXaCzpe9g3P1jETcPiF6BeCgC9Y6RARdkJRZZS",
  "key28": "KRfk1ejUG1o7CxGDT493Q54RfLvPEFE96mATb6HAefeHjwvAF58RjMgtJdnyLxmoLbeBceD3ExL5HrgmqhXr2Yw",
  "key29": "51zzcVpforVGy9BjhofhQ8cEtKgA5NYviwxF9EFEVobSskZ6K5hTsMwMLADBq1tGdiNVyo5Y7ZWcZbmNa2E4NTzS",
  "key30": "6KBpBnZmakuLWefw1oP99F8d5CWv96qS9sR46T6DAs3xp1626SiL6USTPGgj3hJbN8TA6n3c6gW9pQhTVb8SAa5",
  "key31": "2F33eKWshu7F2piNF7k2XvAE5aUXrLkkCaxf3tZd4Kut5u7p77a3AgaVhJU56ZJZwSVRohCUjqpKQS8Kg9J77fiY",
  "key32": "4SAxPcW6kbz5bw3EgK6Ji9XZGWiVtwb69VCzfjmSHWdLt5C1583CUMazAs6945hRA8cUbosGiAr531zcB8KiJWvW",
  "key33": "2mpK5G6Gv3FPjhsqCBBJcGkqSMm6Vih4bx6JKCCiaugHo1gHsc6Xa6VvRu9FRy8tCU7dzB2RvLt81DgosRBQ75z9",
  "key34": "2e2go5NMuo8syzjoYDLDcffQs9kebwdCaJi3aZXpt5hosGZNPqQwRbg2iAPaTEXdoWswh2Cxuk63tJWeq6wkpVZ5",
  "key35": "2k9jtCNTV5FDiayUdn8gofNSXqufUb7pMCLee1gLD6BavGbEph3rrAWp2eMJ7N3ALT4ZGPoyZAxqYewC9pHK8wEi",
  "key36": "4AAxpZa4mT6fV9EUPaZHFAghERtHmwzWTfJh27kc6y4ffEFyjHVsMmm6cuKsSrPodqkMuUR3Sc8VEyEfseXf36Au",
  "key37": "5i3pE2bSU6i2eL74ach2iqLnMXpD1myHj154yBv8ysKdJkUWCebRj7TLfCZqebe3wup9Lq7VuU3WMFjTebRFFzfS"
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
