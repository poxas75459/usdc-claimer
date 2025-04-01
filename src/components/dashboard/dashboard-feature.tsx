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
    "MRBUq4Enw5ALdkqRzijjjKf3zyvKBbCKuZWyYE3iDJQorPPgsogwDwVHDk3iTg51RczSaqe6vrj2HAgHijx9Fp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YQN63FUHziRau3iR8FYKo6dq3eugC7f6x5i1aCjvSQ647oFperDX6g8Qa1TZXoXEsLau4HEimeb2GLktUQUtW48",
  "key1": "5GMpDgrnbSR4KjeRCPxU2RHVJgaWdZFJjnmiBBHxuQcsRgZrvkMGVs3eRiNAEwFa8pYAsNQ3EAMt5ryri8ic6c43",
  "key2": "3ehv3zWREW4mBJbdrHepbtVNZzQBfZvSY5SHDeH99dpdLg1bJD8Vuz5P4fHLM2Xk5ZV5YZrXpmSk1CvwYsrFAxNA",
  "key3": "3QVAt9qwSSyCQnQ1xZ5KpM3o33UCXvyDrsqBxWQTBtj1JJNN2GjQUyXUKPRV11JrwFD8EoxrXu4Wfre9YC65L9Ek",
  "key4": "63P7JVaj5JJTqQaGcUchvmB5FDkEgqSVjSFoxMUhJSWMcLfDrdCkkWdXEGnFDZ1Ds6fddfPR3gp24StxKxHsQUEL",
  "key5": "3RCkthaqtFSZcCQJPhWvLgjakQ8JkZnUX6G1jEGBJnDqHkesWTUFyoH5KEobwrpJSbiMXHuen5ocdPJv6M4bY2W2",
  "key6": "5M7t66m9vpMDF2YJ1KoqHzBhJuF1VUV8MoHVm7pF2bgDAcyijNKpoDe2S1pRAhrUXBBu6ytKV61QBeLWfqby5Q9L",
  "key7": "3JrfeLRtyjAwiDd1vjr4UpUP3fAd355EMscesBrtbpuh3YaNY9MC7emLuTnTswGRHFW8LVq8pXwhLFQXsiGTzLt9",
  "key8": "3Bq3U1fTnHozURox5jnV6m1DTBhGPMWEgH8uDbY3msTsyW4TVDA5LjmUdveYoVHwrdSQ2qBXSgntPAaQMTq5j96o",
  "key9": "5goX2qDNjJ3UyZAiM6mDouEmCvjjHderVrFnZMsxTcy6xpSj9x9eq6vntuciMeBW4ZrowiXTsr9Wzhmx3WMm6yuL",
  "key10": "x4zzc7yiExXnT476yu3xiGrKPLhNxsJoeRKfdms4U74giVZKVron5Rj6XMdiuXjm6RMQQHvupZ3yrcCoWywD8QX",
  "key11": "2di8aA8aXuGhPF4rceDfMZdDTd9YXzkt6o32v1iUQfDWQbjw4jRptJZDqjAXfrDt3RcgS8tikwtyiPtRciKg51MK",
  "key12": "3znMXZMycy3xh8Nzu8PVAojsgQ7v9Zw57qwg2F8JzposUhG4y6kYkTYfdbqrajD2YG9aVHFU6cwgPHUXYxxFDNFT",
  "key13": "64gV7UighSeDM8WHto8HTXvyRnSjHpCsg6cz7Ms3HjzWgr2Zm5BJLJmH6Nhvw1aMmnNhs66vakEWX7RQp42TtDD2",
  "key14": "445vtaN1dkwZWjHtnCd1KFEW95kfzpgdQF8qfpND5KWmtu6EdVsz6Ap1zWPLxwg1xhoeXZrcpALckNwDiDUojLLW",
  "key15": "4nsEfxPGT4BRABTnoyfifJD6hS7EA5D278GdnomhbrFx7c3A1TmVBdbfqccaW1ozkdB67BChVtgCarqj7ZGH8v1b",
  "key16": "dnoj5Di2KfC9WPBZ2hM7oeC95nX6JQC1W893Kp3nrmb5skRuUBwd8nPbaAR7c2CdFiDjP4tp9sp7riBv21KXAtt",
  "key17": "2yrra1T4TUEJHbEnkU27igv59rxHcJLdVbSbQcXVv35zFMHAbmucJtGFuqzVU7xP1CK3CLzTack8atasAg1Fg9nA",
  "key18": "2VZGtYzZiybaKBoGAnU2CbuKjq7i98UwyrWxN8SFnfLN4Kj7ssSwhjnXoV8JMhe4XMhYYiw1UTb1UJCTswySnMQy",
  "key19": "4wUuKaevxEWfAhsyAtaWrCLX2cL3Cfwsfg5K8oPXuitE1KmEMNxNeqbYc4KL3enw9ZwiqqJkbmxg7TWj4VTNmfr",
  "key20": "3Mcxz7W4HdXm6gqcvuEc2yddvXss3cDS8BqFci72JYRJZCrh37VSVgaKiuyFqCxqdRpnpkTeCPfLGsLqrEe75wyp",
  "key21": "PJqZuDn2hQpTkgAuEEJbSwVHFLZYSRtDDTNN2y9vCU5shNiR3z4qLy4kZFbej2tMac9LBtAMxRAZqfMn7gi2E3i",
  "key22": "5NnCmKt8cQQK8Nxp6JrhqergUoAeRN5qzxdnxXg3ZbtZT186SsPniQQz1LbFt6kRfgURrypnhhPLo1SfjvYW5kWr",
  "key23": "jK33njfERUe6hpuFVT7yER1mhjEx3ABUMN9m7f8Xw41CUv5raY5tv9J2Nvbv9V85PGFBYK8QTbMXcNsRQSd62Kp",
  "key24": "2kmsF4GmrDrp2s8XfUycq8PAJZ9Bnxm6ER2gdXxZkhonWTNBmATb1dsnY8xxq9QxK28SgW8S2VmAJoW2FaY8y96K",
  "key25": "5qk5UbKiWyWV7shgvLZZQ5roxkFLMeQYTSvfAjrLYNH8nMT68aoWnMbHsBtXK1U5qMk6Rpy2rayM699xzLo2VhK9",
  "key26": "4dPh4t5C9ycfCbPpM9U9AHfMdE9AL9NJcqHNNGXbKxEQmNLyjfm415tj9cpQ7sid624hgyx1KPquXNLMAenE12Eo",
  "key27": "5p2DX38chM59czKeJUD59Y3kXChkV2HrTJAJ9Hn9a7xJjfeVUtEuhcR9o8tKyiYHUve83SLyGS1f3a9jNmTsxjkr",
  "key28": "3wQ2TDs7Jz67iGiRrJGXiWAev8xFB61GK1ktoGvQ3KSpswFEo1UhTVLYnDcPG7xNjGSYxLeUjrLLcFcnmTC67syu",
  "key29": "YgBh5NT3ELXxuXQPZJ9Tfrhck4rXb34TcSgG3kNN685fvJvyyECv9TnskdYrGx4ZuGYS3AAkKgQicLvw4fRtUL5",
  "key30": "4e8zWnEbr9cwfGfUFqZiEPHh8tmkHn8YFLHwYNDBR8zpiRLKEg53xJc6ago2wV14nGHxsagwg4od5e9fsBuxAMNu",
  "key31": "3ibNnbmPdzv8jEXmCWwK8nGViKMPKTPdPosnXkSoipoY21dLJP4x1prSmxZvfbgjkRAnMF83kRaQixM2eio6377a",
  "key32": "3myZmLwYyNFozri3fAzDcUat1D3h3EFiczX1qApWfHE7cA5oK1bVvqmsW5yrCkdztST621Zw6T5W1PDRDSQpfAGy"
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
