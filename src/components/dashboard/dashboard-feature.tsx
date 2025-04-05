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
    "26m8QuFKo33UCHgeJCGLdT3pREFThAsZBq23JCus4CuqfXimLGsy3ifzPgQhRiSv4XdPFLziy6tvab4kWS2hTi4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fWHf5oM8AP4w6CTcGzJu5qCcdzitThrYUMSXSdHKYuV3NR4w43RD4CCzYA3zQhc1x2TMSE63fwYB4EJCRWi3nPD",
  "key1": "3atwnrPkdMZRHefTyPapR5YZ4Z19sPsxPzv84AJdCDb4rt78GiBnxNevoR9TqW35muSBSEXwx9WQzB2XUHNTdY1f",
  "key2": "4AcaXxKJyUb7xHjpzuVQKDWvu1FThz7J8xhCfXM5C7HdytWNJ3qX2PRxE8rSruAKVfbWCUg673KKhgACdM4cuLts",
  "key3": "32qJxPPDMACWWLUUPoXhkRBac29MukaNQmp3mYe7uuN1jPNgR1xx7yLkMEdcSNd4Ts1auNL78ka5aBtgKYDZ3aS1",
  "key4": "462BZbFqKW7eTNCY1kod9NUQRTF8JkQaGwyQdXRif3kFAPzQY4aQfTawKTNn9toezwFr3PpLf3mipPAK7txqz6AS",
  "key5": "dT4eHmDNHRosm8ahUhxFnbPLxjXCUYiCchrZ73ATUWYmHGYMqQPyKkragvMcFgkrFZnQUZvEKpeQorxgHSZE7ZG",
  "key6": "4McBg44JUa6QxhgbxvLahBCmnR9rBFjvAHv4mPvs2sqyRJPZ5SFb9veH54x6Xx5uETrrZYFddRHVxGYJcpTMJu4Y",
  "key7": "5LKRiRwTPqMEcNL28FRCWGJuVYAjTq1wUsy4Kp2BbVZkh8Bpwi2HqMMSHnwVEjLCdFAXzmj9j1yW7hHzh2kJrqi2",
  "key8": "4bBsyy6LWjWXKr9pgDCaszkCL7nyq4PKfsLeT7ntFAdA1GCWoryDitCzF6hLWdsPKEbnpJB8xYnsPuXemouUe9k8",
  "key9": "ovNAQvhkpbjCTzzjw8NvgsiVxSCuCjqpeqg869Yrr8KxMSPR7zZWzwqP7VN4XLCkJhXPWiXjhkfYZbT76iNT1eh",
  "key10": "5jAXfoP8kRb1xBd4uJENPRjCmdwwVrwxLtiLKhhJDnUjvKUaTev68K6sMLpMZ91cfMRakB5Dgq9kqzpymsm5BkL6",
  "key11": "3xcLTyaRRw1YMZyeJZmHJHqR5gRgLTXgAWdMGZ2NkM1wfLYixBf5yZaXp11w9TLnCmLFJsjnZQHVWHC2svUUkZvG",
  "key12": "2uLAxoUMxB4vk3RUGcRy1MSuKTr99n7LBzCQG3eywhzrsS1hfbP5LL3xw7h1cRxiCm97gE7AqXgTBobBv7T8nETj",
  "key13": "44vLQSVms4177CX4pW4YWLCfwafKC7D7ehCffZaCocZGbtgsUExjzNSeLRyeRHckRitCMNWwrmC5V6mgGrsUa13j",
  "key14": "3DVNwumNUD5aUXvg7pUzpfbadbcd2w6o2GsMZkrFazHgXK2E7PcdEX79ANQBK2664MiHGmBvsU4SAguabwLJLW1k",
  "key15": "65XQk2P4iPfWfoUdfSiJYim14VEms6Y27rHtjgWYNxZFYJY86SeVUvgkQZrkfPf1u5znjhBZe7wVquCeo7pn1MPw",
  "key16": "FgvYo7PFGY5k93Gq8MxLr9r9NVaskK3QdRHwHUUUHqWmLkNg3yNbLoVpNkUHuUuNkF4WV51RYYXEHDLB4QQKocZ",
  "key17": "5n569rMBDzc9iTDqGVxbStfQU5yM9BFQ5hPzhWn3JKk5uaCM2H8MhhVsBRjNVs8WS9bAegbU9DeCHEBqpJnV1bes",
  "key18": "3JxH9632PNi8BFjgRXBBC5Zq3yKasBKNabw4E61L53eGPXGwqE4Leadf8Xsy4N8bzav3FoE3WgSCH4YZyujcWUG5",
  "key19": "4c6PQfYzeDLFisKPgtu2oZfomBYdrFTuAhoebXTqtJNKfaQJc8NrSV7qfdydkDXa7ALx8RjfExEzgnoXQwQ2KaKY",
  "key20": "RK3r1qvDgBmNof3mBTSNHQhmyL2RYdWpp34aMSzTcpxzu6ZtkhTqo2Pf7nQWW4j3HUuyhNUNZ6cukycP37gcSb7",
  "key21": "57yGx31q9B5ihAKpYuArxEwboYk5oQ1tn3n8Zpe5GZfaofhYw13LhtXR6VeE1RRD14bSQav5CSed1cUimWYyUj3R",
  "key22": "3R9Kk5pH8zfKdG1fzVpzr62JwGJhTVMg5b2oAFExdxJQpHThnzwdfwdkdw5YVnEMJ6WZwoRsmfvuMcVmMsnmLheA",
  "key23": "7juSTerfChh5hhDJVwD5TQG9gxHBckduh1NH2L6PZ8XaFx14KZRzEXjzwMq3hmmFzqrdb6i1xQ1b4Dp3e9ohuqP",
  "key24": "ZNBDGm1jVmWZTs1zNoxxc6qJ8zrpFqfup6Atfk363H79qkAwHsqgnwFvN2ZZWjJQw34fXm8sjtfbvHQsUnwNSPK",
  "key25": "4Tx5MAm3mPgXUWQaH33pXNy2mTZnGvW6h6ipLterZTmyUbpz9gCoA6buphKohwpXsJfmttkkq359s5kH83VFqXWi",
  "key26": "5dDyRuLrNCUMyp7QdLeicesRFM8bYowHgDtWXy6FVuphQetNufZoTmowgDKemAd66Cp8HkjLZCCznF21WNHMttbu",
  "key27": "4i16GYRkp88JKGpxK9YAi97vUU68qATHLa9ESBdDyoowapWg2UoGfWAVSyWRV9yRYxwqiCPDNAa3rQFGNMcAsgDe",
  "key28": "VzF4vdn6jLEJDEjTCBaAxwpSq1esvnUdzuirgm9SkWG71D7kUVci86WbS6dTMSpU4ZBUQBciMZMhgjyutoj99fa",
  "key29": "YaoVHf5hH6X7vFpRCoJdMXYfn3ZcKhBWRGe9tcpdZKRhk8ftMfxESWJd4HdGNce9DyqPuagncDxPn82S9H1smJ1",
  "key30": "5Wk1rD86AEuFg6C1cVG26dxYSnpxcUJZQwt8Ld8MxtBWs7oMuCoTTgGG6sHYcs6vPE7eM7VRCM93YNbKQ3MW1Wvy",
  "key31": "Xjtug2dkYNaJUSpJqhpsC4ArZq6cAtEoTBZ5tWYAzGkBbpLPenSs6UZRp3kUNjWAHBwqHaq327Vys7jkfDM3DJD",
  "key32": "5SXfsaRs5EyC5nPvtkUfcZ8cUK8DFhZG9TKYawtBsq25ui9sGSys3i1YZBcHd8ekyWCTyNvzVfLKgffJercF5Tsh",
  "key33": "39GXjKCpm1RUvNmdmpLNhAbc6dGeN5AvK5zDMKDcsei9nxavXoJfjW6BKd4eGiHxp6UCUMS4Bhoxodj6vyVpB4we",
  "key34": "RGNx4EpUstN1oGB15Vzvgimriy1AMkJ2n58jp2F2PozCFBnC55Bmrc6pPxfVzwEzGTz5rdij9BB4xwQm6v9f5k3",
  "key35": "TnR3bcQkutJ9NA1c1SBQcKCPiuoNJDTCB3cgPND3zFJqBjMakk26WBMxqN9gCKqJYZZp3yNiPbeuNc4xEjXJaaZ",
  "key36": "2vmLRhDMNakM9dfCN5UZ9cAakSvcfsSHHcpxcUTg8Dze26vfKfXTuwHAPscGFK3JXuhvVLScZEbnhjYfVnfvSmuY"
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
