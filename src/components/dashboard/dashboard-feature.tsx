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
    "5MYihTjPFumfbPEtiZU2RujbCUeAu7T4KEoEX8GC8NefCM6jwUjDdsvRzrvCprLDEwKrpX5RrvyFYv9Y7eoHZM8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vMuThnSMoaTrm5FztSUwxuy1v5d4aKgcKDDTqgQ6EYZpZmynRcRwuRwXWT227rMWo4JHDVRXLnpikJLio3KHks5",
  "key1": "2oghoLkeKhQJuL2jTWxswXbiRD8oJy2ZtAxLZgnDFP71oJKqzM7rLdfnT1hMjJwKA2ciWGoJLwPGB7DwM7jB7Y8d",
  "key2": "2nwUtP4ZMpfVDJeiPPENNuet98ifgYRwFeefWMRrNR5EAeTMdmJpccbN9QGX7aZ3wMywfRSAMcBkz6ab84PywL29",
  "key3": "5mun3WnMC9qCv2A8MmCNDtkybbxViPPWJoqGMyiGdV2FUspwQ8xYTGVaMcZL22hw57U9EZdn4VtQ9WZkVLsgM4cc",
  "key4": "4jbr83nypWg6sEhAV981KouvW4pfA3cnaDjKBhayv3gXhs6KB2n6aSMpGvqZrUDjj4zMtzvyKjvayYwDVJkUzDqu",
  "key5": "5RCWBEaGRJ1wmQzHaQTXoxz8hxrbSEBFC8JH8PfNADRUnLCBf6NatRoFTfdBkBAsRByzMC59AUB4YumQdZqXCo5L",
  "key6": "3ekgcvWSWDYtmo26pn1fPLawyGHJcKVguPNUGx6JmBcRJhrqaz7FQ3Bv9FE6DPQER4UkjwABSu9rySn1qe5iNfid",
  "key7": "2R5Tt5uQCg7gjrEF9MP8ZvAnqLV1MgRDw3QL1WwUm9qDKiJ9S3oqbZyj5zTFj7d94Hsrky1Q5DxBXa2sHr1Jw9sq",
  "key8": "3h3mpwHrn78UTPnnedkXysGYUpFAcDvgrNPCNexaxk1EQnn7tR73qXLUznNphzRtkU1PtVKvHGBTs6EVziErfciu",
  "key9": "4zm6hy2JR473vTzWkrhVxEp5rYi8XBSJioFJxweLwk5bd62LCczk4QXi28pM1B5CRzgn1SXp2bLia9ZPV83ioXog",
  "key10": "3vFCpLxQXoDUezU7MTBZ4ZGYR2pAqCtG69PGAT6H9gbfgWDqkLsVtdHTPtu4YN7sQg5ue5erGUa19XTYmgdM3t4q",
  "key11": "3ao236ioHSkQeij5MKB4inWZ3ZCJrSQkcMeVeMDWf8MxMJdeVvy77zyMe9j1PnahoGXzmxH8rVovXtahpz4tWMny",
  "key12": "2MtJTANZcv2A15X5xzWdwub4YVvy5em6zFyUh5smDQBF1BTA7E3WfJuU7WPnyDVtCg3YbY2msgoDiDeEk2rVfnZG",
  "key13": "t6VJiRRLwFUvEopeAbsDRSyttuYngkTCUs4oqAew8oW4KeiTWZuZub8HchtrrqpkH6xWPQoBqyu6oJcYfaHzXty",
  "key14": "41sbFYkJAdEUuaEJB7PW6T1ZLdGGWZEBbqBJiywUzwd9MPHuwEhwShR2c9xMV5X8VUscU7hn5NC2dUWwnJPDtCbb",
  "key15": "4ujPmvmUY8gEbpUEe8oJfjfoToeX2QytAWWZwf9Y95od5r7rjPHx4wsGhb4pDbFGvYPWBdiRhhPosf8svngQZr3Y",
  "key16": "59DRbcHNPAED6yxtHwMtfqFsn8k8Y1WpH3JTR7rq5sUWbb39aUC8MjNP8pp56PA9qEogygC1fxSAgCNG1CYgmkie",
  "key17": "66WBh5Le4BAeyqJn9odwDjZNXiLjsBGy3ZU85bt5LGTrF5fsBvyNDSk6kKU8MVmb6mtndoSAaY6zqk3tM1Q5NS6q",
  "key18": "5bkwuWe3THpBGota6bf62KfHzrZ1mqmdS3n1J5TYzCUapSz1uFbRamvhV84dxmCS1y6tpjrZM2v3QPS6qZwEELrv",
  "key19": "42nFNu9rFWYr98ScWt9dReF9driA9MADyNQXbXebKxiyKy29png1M7D13gqQVh78KVufNwN1acXT93L2Rbi7qXBw",
  "key20": "2eo2tky972zdDqoU4SroCkaEnviATPqHwky7ZKnDSLvCn9eNmQxNXKve5A2w3frDiTSc3i4KKtfCWbtPh7fRysKq",
  "key21": "4AU7wx5ztgJART9xXgJorFP5aqBhkzvzGhkg64uk4Kcs2nWpTDJ3oMnrrbJCZxGVgwD8uriKFmgPyBF8NdTdvgaX",
  "key22": "K8VKDJFEELc8Njg3JPEX7d8QoL6FXYgSPbvPDmNuurJFAmspPgzFoxRBkExjExVvmBAsMJgpuzLmg6j1maMyjKK",
  "key23": "39b4by2AA5quHTAe9z2fwKnTSEaxhFRhQzHHW6ZiD1k5dFtsx9ud1xszNy4eQ9M9qrUtYKqMQokMYMRDnuST1fSK",
  "key24": "3ftqpf3RftcYToituBmB3tLZ21ZBHy7NVMhfqXWQy8kU4A293Q1s4NeTqDJJZx6G3d2YzMhaRNt58fkFAeyV8bYp",
  "key25": "593UEmSLLeuyiTCCq7eztVLB5GwmNed3JzRmqdc3ShZjemiC98qD6HQQ5Ly192rnJafwxqhqHrkxWAfsnHFBCsVz",
  "key26": "4UyB48KymFAbPnQ8ao8o1nwSqpb64buYZvzPpuFUfZAedz56zphBiecGWdfcDjvuTYoDg6chMDesoUywZ1DcfZ1L",
  "key27": "2hzihtoURejaWg169c1V4Usf6guZftKPVGxDwBgsEU6y4M26cMw8JTFuEuaoPmbNm9UCNDDwfY9rrxkeHsihPtod",
  "key28": "5zrNuK363pxiy5KsTwFTCHVGLbTFXDvDQ43QBj6f85iUKQXk3Y8jCht2N98No1wLoRhB2mf7BwCkuph7jjhg1aaP",
  "key29": "64QpkvWAzXkkyYsvLVC91dopQJ4Bw6rH21osevoVTg1ZAQ5HfKvjhrddvT1KTSb9AuiAJepHwTiSDSpkRhm9bLfi",
  "key30": "2MLiqD5yzRM45ADRoyfjb26RZ8DomoFKLnri2DjGxZjoEVMGBkUSziNBvwAqNjqBZU4CHHLFy1wdiJKSoRC22EaC",
  "key31": "2BCTVcD5B3q5emqe1yps8J7kbSNo4AtAPUoYiJsYbR12bi6z89wrvmR6L9SsqzABsVSPRDPiKUJ4SHicU6A2pRFM",
  "key32": "4ZqAAHLpDnGZiT4AXfb5audmENmQNuM7AyqwwQNB7WtoSqz8ZBpNQ9hNpjr3rJ1RRGQBdVQGHnEHuA66cGDx1Yjv",
  "key33": "3soKhhxWZYES2bAwNLZ81b9g4FuYGSuwnPQvvf3Pong19u2yS41yyKhJAkWex7uCT3JLhgC4xNA4wwGrvtNMceMT",
  "key34": "3K1KNdt9jfyzBpaiWfEtPPpayfQaX8txK8LFbwiq2t7ZpdGd3vP4nuVZZMJByRboe6iV3HofGfejCk2kaaUX6WKU",
  "key35": "8Jr7SVrwFNNsP8iztj1eYpXBaQ9oAmmJYf2Z5JThDQybotmAqm7CxpvhtRnZXUwjN1iwcNK4NiLVv2ffCRgaKeh",
  "key36": "4fRCN4v8fBwnvZWWEDG1tiRCckkAUza5XhrGoWGRczfBBnXgsATTt1mfhoghCHGV5W12rYZXmJt6eoGYFxrvAj9v",
  "key37": "3XzDzyJKCuCRUvqBJusgsfiMBhQdWVosWeijTCTyUWURN7tCCkbWS542Hz62nJipqxXWorohbiCAeGmQYtBYG82K",
  "key38": "2RCxUSB4xUScsnp8CZWw52FgXXA39A51xw9CuoNhe3GNjm6ccCE7AuQSo7R2JmckuNZiGcXC9oTkH6QW3zvyNXeZ",
  "key39": "pNTkSMeZXd2mxmz4xtvqHKkRRaB7TH9mvWwBhaijUyCUKLombsk4hsnn9bzgUeMC7qowkQNEbcuf8ham228LFek",
  "key40": "4mcXZXqEYTmF6jiQHbUQCs8TNzddruHhKzvVG6YWnf7jB2Z3CjaruGYwXmKF6qNv6i8gxZ2H9tEuV9Ke8bo76rQF",
  "key41": "Nb5r6F68gwPTh8pX2qGkPqFmfPVgpjKsZBV2gnHri2EmPn9nfwiq3rMiVQxD8JqEL3PmBfdZ81uWKWKhitnawzo",
  "key42": "2U7fE7a276TfbZmB7d4bt6C3teqLi8zM4RCUwsG7kmyixze94spcWBjUYYFmcr8CzwN3pPUudGx4ewt7FRvut49n",
  "key43": "461wiThospBqL7McNGtdhLXprqL954bvwRgGGtPWScR1zhsMFctCw2TvRqMZat2pSRL2DznfCkzNUnB5Ja6emjvc",
  "key44": "2SzwB7EfpdeCG2YkqjanHyVcfoiWd9VAR1PrTdNbKCt18LaSq3pKcbPSJb1vxxqxgBNJ6fcq2Sgvdg5SzvG2vmCQ",
  "key45": "4PExS36F7croQmoJ8pUosEnTHRKfowj7pdmtme91tnDRB9usTKSosUmB3HKNZyrkVnJ98g3hDjwsAwzZExns7Nce",
  "key46": "4kaiDaUG8kupC8NDJjmSuUuNvzGxrYmKHmyycqybWMeJbe2REe9F7HPwJ65j5N8yfwwodoRvWk1CWUZuFfmEx25h",
  "key47": "3waqDpuNaTWFKb4V11k1xnoxuFKp9PsDbeqFmaAoEi4VzsWPBsCyo2qFegZ4zQU3QH324tpiLuwyzY1mA28ffzdj"
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
