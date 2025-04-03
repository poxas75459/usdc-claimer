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
    "58JEYeXKSDXf6J4hiM2aEZ7qxLJdmxHj5ZVa9ZkT6pPLYEonXmoSqnpDdeqsp8btATCHc7tjSa2LHdokfkHCAask"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "284jdoYoJHVxe3UCTyS7Wfi1gA9cZwxagFfMdS8tmwcjrmWGJvVmGnzE5W4Eid6Z3NKKNrDDMzUFy4YYuA27T1dw",
  "key1": "5ipmaeBnTtB5juvFwzR9A4ZFPxh6ZgJBs5yKXV8ELHKqYo1oKjT1JYoGF2XRsz7iE9egMYCxKR1g7ifkkYadDboE",
  "key2": "28furf7DqcpSQ12bpxXrd1Gk4AUE5ozuhHYauXBjY8Qe4en3fZSpvaxKMGbGuvGtRiQNuLWg8UaRhWbE84ns2U94",
  "key3": "27U1rbGYFs3pLU6ZcBcp81K2Ydp2cjp9F8ozvR34iFYhPNwAZRFsFGLxNiGymkubTEtKG4tPchpNyRysBL1KXHKd",
  "key4": "5eSnSq27kkvn4bYetYXbd9kfCUSFn4d14DigFPWesRkYjUVFkaPAzh6X6aJFFWT6FfHn1g6J86Svie2KbVakRbzS",
  "key5": "5WRCQckjwKATXNqLF49P9h444kNrbCMbLgB3YHsSa21gEd1FoWrW8cgeR3AMGARZDQShLLPkQ1GiJYVCrF5ddFgj",
  "key6": "zC2hy7xLj6ZM5JdfmWLgY7t21CjhZnLeuwyk1aKJyJq8QJ9YsRXasnSqNc8imipSn9qvp6gZLD99dLbLzoyKkfw",
  "key7": "5ANFHYz1unEhFgbVTE3WouY7UUFPZ23Gj538FNka2iirgfTnyVkBcKgP2kvatEX8WvekLbvUNvridDETRFQASyiP",
  "key8": "5ibt7VXeJn1FvCN6yNQSHc7eiwYi7UJF4oqM9VubjXxeKJrpittuuDPg36smhexkdyKt877NHg2THcnwuw1AWna4",
  "key9": "3WxNKCRYsr6xquPMRKq7oCBCxMrahii35EpDG8h5kiYk5Kgtqp3Qzqh1Crxd6Q135bqLQVLCZ2SpfHqNPGLYCeWu",
  "key10": "4bqsQ2VR795CLJLJdEnQSwqDJe7Uj8FwSE9NJYbeRME8pRRLCcYhJ4gSarB1mHB2gd4z9XYVNRPXKeGq2s7rd5Vh",
  "key11": "4SSZC3yyAVezS5xwNHSFfkk286ht8f6XqDtj9LcMZeZx9AtCKjUeSFEfTvq4EARnmwDXaZTQa5fSwt1UCxPRUvdz",
  "key12": "vLf7hSzzWGk19FAyjies9QuCHU8ofTKJVn9DoQxy5gbQMEy2YpCxFiuEGB3WqmJBNBBLUcoZtMAQ2qMJQj2m16E",
  "key13": "3tPqubBwVgmn3LFL9nXDWy96DpdoRZr9s7iKtadhnbURiHQE5PQ36v3QPxcdr4SaUjmUoepUTTEeNYeJ5AyLVZha",
  "key14": "287Ydm36NUS2ct9vVh3E3WQcHpHUsJgYv9W7dHsJyyQrJaszQ5hEpe3voRpXzYZdRcLjXMbbyk3RBW8QRodCiitJ",
  "key15": "3KwvFyojFvr1AVxXejXvXTj9NLtgtrJAyvh6vUzTsejLhknty21FGQJGN6XWC8zJxZEdbRLPJAzdiiTDZRXsMk9D",
  "key16": "2hfJRjkRiAiMZxzKYx5jAxfXMMEbmfQNKAogXz6U62zBxem2wBBcU2RUACYLDDXaAtVqvA8po5S1CpYoghPLBzzQ",
  "key17": "5u12SPWswHPdCqQQQeLveJ2oddggn8K8MHdNbVhT8C5eaBiA44CKEEZjH1YyfL6Rkcf5t3nrDaHnPCrv9mij5LQE",
  "key18": "fEuuL1ek1pXSJHHMNR1V2RDyeUdX2p2ntm7ftrEU6zXAR1MTkAYUNEgrGg4tJUmK5dLNsrQwtNwdAEGjyjX2p5d",
  "key19": "ZvFXYn1NYBsBaffitFpwNmcKSgyS1XNx7S41JxntGFYazjgoMrUvcmMJuoYxHUMWMh2LRD1co9Skkt98n445xmZ",
  "key20": "AGeth1ABpYavGyZCKzn6a4ZRppT2FUqThi1NApuE8V1MT42V3FDykwgcYcS3Xkgp3e7HTGnGpfKkX58qYtADASu",
  "key21": "9Lo7mtVzapc6mUvikwy54LhvkB1z2FfGpxR874MYPoQLzmKEHvp5VodtRzo1wdrhFtu8oehR3zEKtzUjssBcDNV",
  "key22": "5bNbEgqQYkYpuJevyTSsMhXaSoUvje8KQ3HtPUQapChUERLzi8FUQYGpB5AVPc2QbsAsSkQCkpGtVnniQe9rWVcm",
  "key23": "jPdVckx2y5o4VyZ4uirQi4Qzj16rPww5P1sghTPRkBj7BGMMv2nmkL9HpH6JyJzo2mkcKnwXRYmEnWy5KBzBBQS",
  "key24": "4qDbVxRKo84eSa8exJJJSfHDHy1pf59gV94jRpEe6Rw1qwcaCDMMWFZqtNV7QBvcsh3TvoqJPza3xLmkzBfotk8b",
  "key25": "5PfbEZ5qYVwZWvwk96rm4bAiyw41yyRndXDPAirNv77BBsc93qjsFJQWLRoW8seMTXrveNCiozikhGPV1aunhxZB",
  "key26": "2hgQt53UMWD44USRVHdHUSXDmskWgyi61X3UkxfAYk1yanFFnBeVotxndG7jJRGZu791LswB39Mdf8bZd2fT5vNX",
  "key27": "3bu1ukmfSRRbhKNPUqqL42qDbknmSC6Wh18oQCb1SXm62ZpU39YjvymsP4RJXN3c5PsSd9xcPH5PifSWQSfCoyzv",
  "key28": "4iiNik5Afaer6ZHNkBnpuhQBNgRAqvGAyTcBqvtvaqYEPqPcpdKKXwEWBURD2CRv2s4NS57TyC1bBshVLy9d2CkK",
  "key29": "pTn3RDtdtVe7wy8zhsSTjJ2fdrX4Ny3F7Fv1Y3ReqYUw9CRCvXAhc3hSBbMicjouCSr94N74WRj62wiKn9PvDnq",
  "key30": "4NNWt1iyRSnuSf7NsNZquhb1JDTmA9w4isFGikAQn9kqwwZQsTWzjMBLQ4do6ca1jSaDiWjM4krYL6SFMR62yKZ3",
  "key31": "3dqhy3rB5vs6ksA1b2UvQBAhKxuu1t7jsguYi9pKBytVfCMKreeYoR1BJ9GcURFu89PKyBKfRHjNkQTEvxoK9Y3J",
  "key32": "3k9VDCS4ZqQYVM5wtRxhbQt71tkTc3vo3oCn4j37pD5CthriccgKupyNoMAEf9hz1KW82f6SFVQ8MHaHjVJ8qGaj",
  "key33": "3HZ7LQt1fE914YZYhYGVnXhELXhM321nxtMv23uSvoMSEqhYZdx8hPbAyjwu1EEDuCuiWLzQskWou1HRuC2Sy8a8",
  "key34": "4NjNh47SCrk7Z41GMgfZpAkDB2saafatWbdTU4mvWNT81PEDhjc7H6CPKHpvJdxhxvuYXgECgR3S8WEXmQstSmNa",
  "key35": "5QcQxDaxqo5dxJGp7pqRNn9mwjzhnvWnPFP4aaLoTzdivemGVucDyXUEUyhe4Ggfh5ghG1XRayG4v3HkpF6haZ3T",
  "key36": "2ZgcAT44MmL4F5B37D8rhhuLYYpz2tkwsxyUGHrqkcAav231fgLc4P9XNFdUqCdacqwecjBgzvwHVtDGwkVLReKo",
  "key37": "2Fd2tESU9QYJ4AFBCpfnW8etPaujdEvv9yqYZU75rPAwGWRAKYrNPL28bBK2WzVXEHww1TP7JQ6jK83WWF1uF4G8",
  "key38": "52vpmrq8HPiQhFjfybPNzy3ALLJZvw4Vq1gmXyEGkrmREfZHY3a3auWD4QEcAbVLZeXtYzvCWSo9iaH9osZzHQn2",
  "key39": "5yiJfsed56meVwrnkafHEzc1V16hJFwAkC2At7RhoDM77Dzkkp9zQNt42JYMAK6jae8shJEeDzHeB1yxybicQj4M",
  "key40": "67ihSuDPwZopieRmtWbYtxHztXZpV51nEFsBD7jE1CrNiuysEHgh5QofGGxx4V2iUUecY7SJDY16bPJvzYiry348",
  "key41": "2fVE8ekpUSPCYscbn9ZS6sHBdk7F5v1sE8U1xXuNaTmi2Y99P6KsDfbyKzPSWRU6QRNb8tXB5eYyPNfKaLdx2q6j",
  "key42": "54LWL1zNRwim7cL3fhpYntcQwSaCnKN5Y9bnZmCVf6mRtQKdiJZ2AQfHmjXGvXfnYXL75zafuNuahpyPKyYN8CS3",
  "key43": "3pX9d64j24s4zShqguFbVKqZpzSfcVwTqAFaKrDMs86nqnSHAVYoCPmP7f3zdTP4QSmSkm9Vcawv5z6wmS3nwzYW",
  "key44": "4PF7VzBVgbAdbtxry3mE9mjMP4gEeZeoi6EeKVRb1adfRb5wDjTAK3rxN9NEHdbpBWfAcvhNuTxWdjymotLvGH9s",
  "key45": "4WdsATMYK4tKdGeCzH3HnkjXc8tmCgvtJsb24W1gwMYLMx5Ey4MkgDeZmC3mKva3rgGz79684sS7FZJ7bZNrdYyE"
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
