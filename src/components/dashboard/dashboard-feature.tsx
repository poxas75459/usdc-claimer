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
    "2qfdpaowx2xzoWLVqsNGL6b3tzm7EdssMaB97ubrd6GK9y3ygjAaZFTP1K5SzWbVmAJBSrQVXhYX539Hr1qRxYG5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eajA6ozm6EY96x8S7R2HvHcHqAZbpqRKM42mafCu5LLbGduthZC8o12JtzvGpsgkZQjHLaYhcaeVSHj3E64UWkT",
  "key1": "2LumiAz75TL79hQeVCczXEr4ACqbCnZvjFMzEPUvW2tQkgsJPAUVY2X7guZypfDUisM6kbexPeX5PCefgPcKj3pk",
  "key2": "5a82Z1Sc4cNCVSYu9URd8qTSfpyxT2NAJ2fF1oKG7erA8nor3jwNf33HwQSFF3ayxVKNPMCcTnvbuVW4Gs4zUBYw",
  "key3": "TFFXJJDDEPGLkSVC4NN3ZkT2vbqWWGVABixhapuwhu7odJKNntc1zwkVTMvcAdp16APKcmfBaiY4yn9WPTKDVFR",
  "key4": "9DTkaegcuPgXwrgHEcvUGjDQLXN6V4smWNFsj6WeGiArQTsNwu9JExp5v5n2T3phovHYh35RStXmLrLJf8zwfUw",
  "key5": "5CzzwEfMGvt3aXS3uPGi9HtZ3ZYGSEGFRnCPJZ5uj2FY7hZjgaya5XvoojPBzmBqxi4jnoFh1fSfTbxNzcQ3vY5a",
  "key6": "5GaVMnagsdyGwM6eWXAgA6hmSFtySACQ1iw3wAfgi3nKaehjUvS4Cah8VSWAGQ6brzs17PskEBHBNfX3NSxZvtvk",
  "key7": "5a3U29oRjPsj1H76hm2Uiz1igitVTKj1yRQbtKs1udbo2PevruR28ooah4xWVBJUNrzZ9cu3oo2wuuvD4m7WkwyD",
  "key8": "4PuyGFwCDadXf1V5zYQMaqCAp9ceyUHpDo9ocMp3id5b7SNhEC5Tk4QKgrp7Z3AaJLYqaYzpbAgvFGTWtDSXhKV",
  "key9": "5NLZYkeHwgcSvb7dgoxVNvHe6BpbW2XYKwM1eQmJCJNcTCjcfHkVD5YMg9AGXHzF5LdffWvJmxkweXvRPLrTqjZK",
  "key10": "43tCKUevGY8292a4ESh1WR1eytMapWQaX9qBhJP2UegKd4HKNLajQyKPXHaEVgedwTDt1J3uBkdxXcSEutJdz1Ei",
  "key11": "4xWpEkhk7ZmyD2xDV6UYpHnHYWyY97PLTYxmuKShqhNY4xYW2K3FSKyrVBGr1JqWV7BUX8KoXSyvntoqEcs6Cdgp",
  "key12": "3iTJix3g8wHATtdrVX77WV8s6PUW8dTBt31V93umogk9ep2Ud6T8zyJ6q6Vj647CFJ96eshNcPJC5VxmM7vBCrbW",
  "key13": "42nndMzC1a2NkLyVEcMtQWoZEd7Pa4WGWMwvs9v7mrrV8CJky525275TKHrLoTm4xeuPzgR3XsMuGhwfE3fMZ13U",
  "key14": "C6GCRQkv8AUi2c1ys9GqGP6Quc5WiMfqbAo72V2xd9wTFyS7YSKBFr4aLETNVmRBDGFcqG7hzuHKMkTzxLxhDBx",
  "key15": "2gsBYu51xDd8ksQETGHC3GmAAohgY5WHW59nE1cesULc6sPQWcGFKjzPr3qVkxh6hkbyDkQPZtXteou9GagV7fvg",
  "key16": "Np1mzaZ6T4K6b5EZd8V3m8cxaYXRiPQn8xMPA3jWRRrWdXpqZSay4pzjWa4MQmP1R6RS6kWiokkvk2erF22ADte",
  "key17": "pCkBJz9mCLjzH7aRuEaSrgUxkei8ASe4MAVKaQBbFGhs1sJuSGin4JWe2yR23c7WMK1XVqadqsT9FJdsSpsLHWE",
  "key18": "aZofHSTbcEJk7sgXmnhXLDYkSSVwBQ8Hn3167Gp9PeCYuBpbUpkJvquUskBdGVZuTXJf2gWgQ9s8y2CaSmxspog",
  "key19": "LwFjZpVhBih5VvJ6t3wTqJ53B82UaHgK48GjwwuwJNY2TirWHcAyUEkCHwDfdxUkc6ZigvdbzW2NTCML182QS9V",
  "key20": "3WzUqe1RSXg77SdneNgBRZRytAwxHnbtmrLgWcy6nhZ2g5Ppkdrp3QwfsEBg9s3WsNTyiGvnb3YNe7DE5q1U32zH",
  "key21": "3iZUqGAc5nvGfaKsv7fEpthdUar87PMhRdT5xLfoq2L9Q9NsoNWt2aTJkkJgtsMVaTDMokp1gyRwjzmTosdGycHJ",
  "key22": "3kZ8syKWBEH4mVtkPyChHWNsQmjzz9tXiuf89BdEihQrmHrbWrxKatnAjFbGp63p9yS9VsWNUCZYEvPQTQXDCUfB",
  "key23": "XiJhJm8Q3erUxYAqGaMQ7whrjbCFR5gVhGejpd4gGZWWfh6fpdigjtTjdtSH4NoC63mrnzzyPiCBzBXuPMJXR8y",
  "key24": "5VS8Zby84s77feVYd7jBHDTML4T9PJ3FLUs1DDkaNrVZwBBVB2Dej9B3U3k2PUfb9joMYmrph2PpWb98dGuTK435",
  "key25": "4Vuuz3GL4WgeGSeEstmNP3trvbP5Mht1azhiwpSwLLyZKUiVkaVdjMmnPH3eAEgbAFSwoYszzYKFp3s17c9ZRZpU",
  "key26": "4kvvq9avx6nhWdKJCTQHYTQoXp36K79eSC2vMTFonPxUUbToo4KiFGkSehDGU9PHzbGhnVdvUEAENUCdhkpH56pc",
  "key27": "3kJYbKb6W6bRcrzdDFigGMPFTM9vFPkW6ErcstvzB4oe9U3PaxQLrf3VVUkWawKs52dVucXR9S1x7jemGUHVPACX",
  "key28": "3MT7fbYUigrWNwBzUwzhEdLWGXNqhi12ntSvGC8g85bsiPPdxxufzc8HNTgDktRx3rv5SoterD81yrazVPJaeK3E",
  "key29": "4EKxARKrKSmwxguwJiaz4C2z7U41CgnVPsacbNSFj3wdWAL2mqk9LiHf1KVC1pfPie1NnQZUucuNMQtVtmKu9NLn",
  "key30": "56iRaQh2oEGcMc2c4gPB1hPHvBnxpt1WsCH1sHHtvT8mGDYTHqc47Rpj36CGYPZbuwGcSePx92L93LDyudjxeyLx",
  "key31": "o4fckRxo3sNz4aEun91mVjKAcDDTLh4EU1FCrySu1tnLrm6dQM7CALu8KZ6NyFW4gnZ9k248dLBeGpdHnDqnBED",
  "key32": "8xvG1FwwwzB8BJvdtjxhpv4B4DRpUdTyy5V3BbqtBnEhKhUi95zhbuMkmy9J9KZU3JgpGhYVKRk5dCqA3h2xQH3",
  "key33": "5SQGztELmjY5BU8hY4dr4ENPXqRZzjnvzCn4QeGuoNEycK9aF9YLLbgTWUJ3WdBQMUczu3hTfoGUQJubwsLPM4vy",
  "key34": "ffeWrNqEzj73AD3KZzrbcvkmw3629vQ3kszfsBKCKKzqzC3L5ikRSL6qCLP5q2scqzdutDvMAn3mhVDA9paVp5f",
  "key35": "XkJ15JhEfhNPFek5WTkdA4biJm38swMdDrAECsMz1mnP8prkMZ7AWyFxKpYXiFBfkzbsp2XSPhSWbvvxpgt5MGs",
  "key36": "3N9EwNPhAVUosSEBxVqUe4kxA1wF68HpDbJjZ5zKPg3a3Ex7HobWgRapFs6YA5jcyCaTwt3qUewrR21UXocULciV",
  "key37": "5Cj3kkY28dLeYMQgZk5u12S1x37ruxYGx88tDtsQTBpsbhx54jv39GhPvHjSKz3sSEvitvK36Pbnce2b1G22uKuh",
  "key38": "EP5RJ2LMscxdAgtfLNH6PDgA72Kqh4g6QEX2vtVRtakccfvEDu2RoqF6Mjk8PY32fYczn1dpppyteiJENUWusGW",
  "key39": "3aYXqEF1yaxYzaTqFxwaM4dYwPwt4dhSdRGwAySwWt845WdJHBDTH7LxE7DK1Ddb76ioKbivm6QAALK2xH6Q1yD3",
  "key40": "3nFxc9U9nRPpBpNYLzGqM7gT4aabp6LDPA6j1f2hzcyNpnqG57YSwbP3FAdBkLdTguEPdk8EMqvhpL2VWCvG527s",
  "key41": "5v2wFNsd6rvmVafJxceRNrhCWb1MgLvSGpVNaB1kPwFFrm3Dzc8RMKyLaJ5T3g7NYScWw6ohfDrrn3JtWs7DKZdw",
  "key42": "2yiWNLLx7rDD3RbGTjeRe4JS2yR77Mn2KTc9PdvCmvd3yno9moHpWbm5WfquJDYjm24ZzYxPueLnuZAbL2s8RDYJ",
  "key43": "4JpquPKrE5H9Uamd2iptNDiqWrgio2sAzq8VNq7nEBFBFzjdDAfUXbDsyMB1MEQ5qPfp5dZLmeqBNzF8uCu7QgBr",
  "key44": "2LJfb8f3DHhcADnLNK2ippwdmnVMFTCB8mjnjCXLppoHduNaBN2rKaq5RjAJKxhJrnt3KvaxxrfdQpqDkpqPfFpT"
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
