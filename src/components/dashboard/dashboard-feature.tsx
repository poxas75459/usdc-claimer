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
    "38QXV5rxDeGm4quM4QiVBSeiZG4KYcekAKupayzAH8SPYXQUkucK2eS67aqSqfrpWVf5bG5B5LMEsUF9JMM29oRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QJeQxNgBQMyaBEPB5ADcjuJetCW4RsfTMSVs9ZBQwzrECkhVuku57iBSLPJqnxQ63SskX5npE5PNQKrHK872q9J",
  "key1": "2X7XEcjnkKNmLBeMH5wtLuuVg4HEPbr3fj3ssqnaGpxvwfb7Qfg2ixajQpbPTssVZD3hpLmR9g1wahwhDk2FzaES",
  "key2": "2EaKKdfdAwwfaZhbZbC7gZQyUZR7d5Ut7BrFBpMpMkpFVkEmNPwXjxVPv6i3S7JEdBDgnyeg5to5MthoZD7CLTCA",
  "key3": "26xiEPmy7Wcr68hqZhyieLihfk1VG2YnBaJQbdwqb5qdF9EvrFQhV7c4zPyL1nM1NaeMB17gsbXcXoEA2jv1Fpr3",
  "key4": "TgGnjo6DGmCuPzsmrejjqiL4zJnDNbognM2TEfYmU4v1cB2trEP2EqDaf4qMjfHGUqZ4KaV8txCeAzTKnY95qp8",
  "key5": "5vnG6CzZVpMW8HmXnLg9k78Hj8dPxTBer8m8SHwxx7MoYBKA7dCb34xrCVo7VVspsEYac4AtSj6sLMTTNLEwD9Gh",
  "key6": "39ipcK7Sot3naerbziM7TkifRRLtAwCg5fgUCNq53UAFCzGjW4Qza9APH8ss2Y6Gb21924SCLKHDUmbtgDqpi7nY",
  "key7": "3Bs3W2Euspcz5T6dTvXq3YtFynLuCkjYqrYqFuS1g45ztQRuw7BNRiCduUNQLTtXy2RkSkooXVn8aAyvdRF8WCRZ",
  "key8": "5UYzZd1QjoNxNxD2kQSRdUE46tVwTp5VhDYEpcRRNZRP9tMb3nQsouVW1fAMqF674ymcHXdLoCkMHukzoZpgFH56",
  "key9": "4nZaybjQvfF1KUAMfgzApN9bkN3cUJmdcAjQyeZe53ftf95jM17gNx669Sze8NXG7wMbEZabAxh7UWLik3PCPY1W",
  "key10": "5WgaaYLyJEmZHqD1JEXqngwQHiLpXCY49oZJbyHnLBYrnE5EUoPMCcFVMWaBSXCGBw9rdJfh7PMJHJFsha1cCxFY",
  "key11": "x5p9AJcZqzBwSUn9ds3YbERjL1paDVGz98MMUgKR7zaMvgFSTdTTkRLDExFTySs6hGRUPnXtvHfKcQ2b1SCfwoo",
  "key12": "W4FJC624zygR6s2DT13gArCVSHvzTXXcHPGTyKSefuDWo6LQiaRHrZN3kTFkeiqeV7aKMn7A2DpreEuwuuQVvkt",
  "key13": "58sp6pmh9e93hJdRnbMudcCquNp7kAhDommoRKCPE9vT1gekBtmJ2WeWLAiZasFVBM8E42hCLo6MiCtiABXGtGwN",
  "key14": "48oTapsYLjSd2R5CvNzL9JyLioUj1rExZymkaEYpsdfHgvJgCjVjKW13Ab7rtbWoJcGyFSSGtGYC6DLcrHPDG1Px",
  "key15": "4NKrymL7xBHvuPuxR76exAzhUYcpmKrfGv53wNZCjomq5HESs1wwKS9BCV8ebWV1vXveuLW9FErbF8DB7VWZwZFL",
  "key16": "s9KVEUNtYkXRDt7btiif9WhncPeJ2yUWaVUyegpMoZiB4HgLT3LTVjocKrFFktz7KZ1d3xDdsKFWZpGx2vJqhGx",
  "key17": "4bnGKa5LBURWzwjvTKFTFQzMt3zwLDcZHiqT16taMW35YpUPKD5VJhRwrK79n4vACqQ1CrAN9ioDrHymGtDVz6cj",
  "key18": "47LGmUJQ5rbie9oCJ5ZDk9mTDkDrhDcUR8ELKXHjgtccaVc6V6UySR3Bp4GzUrTBWZuHYZCgZqZAAQbvWG1qQELo",
  "key19": "3Z5b6LQ3sSFPBEUGvq6RVQ9JGPvd8r7QJrrYcwzqFbaddiCW6JVb3DgSTtHtMMbf9aqXg9Z1prtrq1P36JRSKYjd",
  "key20": "otoGF7Q81PxvbUdJtZyyi7kT3Fuj8tZgkcYjuxtFPMna7dyCxFszKMJ2jghAAbJA3UKeKKgeS4NTJ1yoY4Dud2L",
  "key21": "3QubDdAYDGw9PH3T411zGKjA639RpsLVrPkJg1sbGthbUg1PTW6Roj1BU82474QtnQkMKEz7cQNuVSsUXhRKAiES",
  "key22": "4kxmQze6roKrxaDrqYZDNn42KgAYkKpxMJLJfEcx8vBHfdYTxvZgVmfm2JSPmjXgHaAQ4rKfK21w8mAHs7LgEfS6",
  "key23": "XmZtY2CKGrUuGuQGN4QMn7q6Hwkoz8qdY8oCXEK7NNGp6rWtQosTFwY87q1APpkRpGBWE4DoyxrHCFJGcsxi3KU",
  "key24": "4ueoaMAZEDafHnA66a4dzYZdbzgRyQC55cmZSk2axbXt31AT1ckaCeSZas6GhjdwdW5GrpGPiDmYDhQusbUECjdK",
  "key25": "4zJqeK9Cj3WkuFYTBH64fTB7t8ZpcUXves1bhKFFpCgWVC23rxWtnfYSphqMGGrQ5JszG1rhv5veb2jFbbhBu8MC",
  "key26": "2JPkciaywtVZRJFRdXeR6eih9HMuPwb8HrkCbSkSUYGWen7UeciRdWKUATi7zbmfJWZ2T5TJV2GTi44kXQfvBaxE",
  "key27": "4HxiXQz6KHnE8G978fvvntWP39K8qRJyoQ4GX99Wqf6m7zzJhoLdCghhhbLgduoFDPQwpBKcoMHiHkmScFURDoxR",
  "key28": "5ZhXj6odTpbemsYwNThTdk3LG5ewF6ArR2AfvAPBhpWkTq1TrmawdAteB396Gi3NUj8vLSJyMCmwYP4kT6wcjkCJ",
  "key29": "QsCNfLq8UsxPFaUEn3VyFiYH2Kp3WtfjqjrfHSA9DxRx7u7e1nBaXFC3kzn84axzE3ThPb2j1n9rq9PfTZLmRvp",
  "key30": "264EA4mvaXSJ3bFtn4XLrQXjt2fDtU3rN4dzub3si1wXXbNVPJBftT4ufwDhXfrdEJWxRCyeM4wHNYYD8Zoky3Sc",
  "key31": "53CUk4bnrGLZrc8LZAiGvvRyjHFmaYKj2ofNiERoic6ZuULgD7rEbH9A6iWVoRPGS5wcLZ97e82aJtXNvu4KoEgZ",
  "key32": "wiY3Y3ji15Y6hNA4RDrTzrs9trnEAQrjYC3H8KNnatGuHQhHCFA6zDLgVfTnHHT7iRMXMcTZv55qKuYbR62DH22",
  "key33": "5WGt5wzv875f9R9jL6ExtFgBWekC6JbhSEzXPWdMz6KhxnGS8huyhpJAxwoKPeAPThZiuqmHXSng7n8e45uKErYA",
  "key34": "5rauV1P2f4qZCt46A92fwQGZymsGFVVNm3mZGNsEZxfLTvQFkj3jcoyQyBSxTrjYeYxNfCgFfXantEBVVG35YuFi"
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
