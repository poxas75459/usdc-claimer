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
    "56HdMoPUZcUEhP9Jr4rdKpJkXzWPo4aw1gy2jBPgyeVW5SxaAf7wboq865EtGn4vRUS7s2nLYEx8vR5NxXAhDBkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NgpfHZuc99oWTVFPtwPxGUw5PyFMDiTKEmqQh7ambzr6VDbSaYQGEUoPm8omb1WcNAd6DfHv3WtgrhvFPXTeS7S",
  "key1": "5EkHuPAeo85EqCwFeUuFgfe2oJMjxVMfSMSp1CtaRMeKjvhqjLPWiyHhhvWT4bsFae1jwA5X3Ksc3oKsmXLQkHD7",
  "key2": "2ULe6PMKNrYbDV7WDAsrmRcHvbC7USHUYu7CfynWxe61uAXErMvU91B81rgDshfxXAnVb7CTpUHNVoPsqaCYZD6a",
  "key3": "2Ns8pjpaygNmxjXFPnvUUKLTcZhnNLeebsTrMew82r48JRxsVQTedt1PY2fJGmE3tJgT1KUE4SMZCRUXaoPwA3v3",
  "key4": "3TR9zec9WMtEaH9i9vviVTNuXiYUVtFriC7Z5aKm5ddmABrgkHtnoKj6GAjkxpRscN2kKTT2rxijxcubJMF4JbTx",
  "key5": "2eo9NbAhPhfV6zpCjh9zpQD21SE3rRf17fN9bnBxpU4FDjoVs8HeXaVMqc5CzsyRVCxf7cyvRCB5soXr1AfBgHj2",
  "key6": "56XjWrP94MX4hK3XRES1PeYeryHv1Td7FRih6j6ihPVBokH2qDJKCxwKzJaFZgnujnaZEmFbsxEVWZPuQpYAfrj9",
  "key7": "63RVCnFPg3FPJBVpDATZycGqvraMoCtU32s8yNtkGbDEE7iSFULVEJ2tVFdKrHN1Z1pA1sBvHARTD3tcWWok1ZUZ",
  "key8": "VZhLG5hqMgTJmurA7xDyjqqEieaaKjt8ZrzHdkjqaDWSwrMBS7wZFLdghcfbWomLqZBzhU7jZ9vFjZuk1DBeTJr",
  "key9": "4JUXw9wNiaKkzMjFo5kWejdTHwC47NY4vgjLzNK2umaqCUKn4kJt9tLptUKkiKrSDCD9HUtgyyMpVQAWm69YyeMz",
  "key10": "hyTuHRnJSVFbefBvaZZUgEtK5NuCEpsrXjmfeTfjJdfp4XPt9REYfiATvp94DqzfZ2AUmhxbeCG2tx16GudTA8j",
  "key11": "2axLFkm13GkghRKuWX4YHVLGSSxBMrmJ1GRLijYonDnimHxWZuV5KkqqKULiMzVvac5he48MVg3i4qevbWk2u79g",
  "key12": "3htqGwsJeDMzCGf9m1bZrr7jWqSHcxgf5eZDZ11ZqebDHLcYMveoeACcD9ZV35UL34vywfJpaqDDbybMv7t5RRJB",
  "key13": "3M6VPS3dkBp2CnEYYX4jwrjJo92B6iRKkE9jgL7nCbsgynzSkA4ZfS3kvpkG3mNTksWNafCDAcP2NMko4byGAY6m",
  "key14": "3oVPMH1GF9Q8NgmYTarWzu84W1bxxzq7Q54L47PRPVcAQRyZpxw41Cokx1RGnMC3gecMx6znMWzHBZpexgrYZCkx",
  "key15": "5GhQF6qnRSjqT8JLYxZehtzx1VTttq6qX6J4J4NZVDphLkis4rUk18bRV6qUaQxngoZKpYyhHr3k6BULAdLLnPQ1",
  "key16": "3PuC4kxq7Vs8v4mk77F4VuXxBRnWdAt29M4w1eVM4DSHzFEK1JM5BModSLRPCh8R6P5dpEWFf6f2pBxtCbRYm7YZ",
  "key17": "FmXR1iw1HAQhbupPqhc9V56MKGqhaVvXEa1yPiTAxE2AVHsoRSnPiPPky5sTUjTAMGzgxXMLUi45jaQ99YAd7R4",
  "key18": "ejoQFRGQGK1Yd5bzj2v42okNDhqudf6b9WS5iCzqbiWBP5qGYuBtN8m3eBcotbCVgNVzjbPmT1mY1iYdG7SV5DX",
  "key19": "31BBHmpc1vzmdTe6nupLGRu7aUFKhHLzBZzEgqAXTXxPpW26Xxcw269vx9EtPyCBg7worEKgfZ47iCu6heNGVYqk",
  "key20": "h4VnpcN9YXiaDPKhsqMcnSNeE799CyVzTxBftYnSbEdpSbDVYvZx2nfpJSf42mFdJmqx8LSGvsSjLMD7ZzAiizL",
  "key21": "Dbtj3AWqGLbxBMXC4WByo2RwqFvrY93sFtt8YFK9gpMobK7PgKAnfE9zAWBdUvhTE5vXuYGHhm5mjDSJy5xQkuT",
  "key22": "4f2gCYEiYxb1ANr29HcdRXiwGNKwZjAym3NksJGbeXBBJtPL89dpQsWoXLs9tPT1QribCpXcsW65tqGWXYvY4es4",
  "key23": "YytVJRBv91AjxFf422b6TMRDnNK1SShm8xfcSABmQSsU9MmPQqJV9PspN78UQxBmnCw9VsuHojrHVe7VMkQR4AF",
  "key24": "47RcYkNFLC9BiUJpN8K5hdzVLBj3XHkrGqxPz8KtFSTUaYMwEwbog79PFkKc1VZ9NKYffJGMfVWkVEbDezRmdLY7",
  "key25": "2hR2CL6mfqXdoPKXeTHAqCRNBrXQNLbsQqjuHGUy6QKeKMivSYKuo53kn7qxzL1MxZBD6aCdYCoYcQsfi2qgPj7B",
  "key26": "5fBey3RJvbU5TjkqxqH6y19kR4t1vdcN97eCwKVL9FsUXaQfS16rv7Bef8XAJShY7F6KXNEZkfsUerWUMBwHZmrC",
  "key27": "4oSimVC2HLoEzaXDGAw2ubZMRTVZLEkXPKHQcaec5dEdbFTqJLmhtRnj2qkBRn1x6LBabcSFb9isKARqNW17EtDp",
  "key28": "4dBJPckV1fwyeo6HhKADzz5hxf8sbuntEmL537vj15L6G73ZbXmNCJ5YvWZB6qfQsRWchUuYiyxCw8jgvTQSqLvZ",
  "key29": "3NQnj2MUpccMxky4FswchUUHn1ytFFJEitVP8BVvk7KAQibHa1iT1nm2PSzs3b7sceZnymFjaNTTpb7xpfpjAnmq",
  "key30": "5UwcfShtcM4Z329i8WL2LAhseyVz2vNTUQn9b6k8rhx1yKGpHBoY255Etux3W4pKAMYuGxQJzzVzGV7NnK6o4k67",
  "key31": "5bLBjgbrJg8DE8DrTigLdrY1wFafiCpBXCF1wi7iUiLxKFHSuiVWeLuTpw9iTWtsENjeSQhn1rntqSwiHAgHJqhp",
  "key32": "72bkqLBoowKEeP2ykpFWeJdQpXQQnqt4eXwATmizVHjvmExMo1MCNnpf38HgAb7UNbrAemCwGPzEw24vWLAesbo",
  "key33": "5FJcaAEU8yYvMtoBwU66LG973545sTvCh4HjPAL54vudBQ78b6JpQdVMFCxh28YqSZZKduQprTTmpZEAHL6PhPU1",
  "key34": "62mwVT7vxuzUYToHKZz5eBEkwp41LTp8815AE18XwcX8UH9mkZzYxUzJV7mu9LEcV7UmcSRgv8qjTSBnC3kxmv7N",
  "key35": "4sR399UzPNGr4CpFhyBMBZQkqArvfmEV4PKH4KPnPbPKnaiCsjCeuzFLxwXKe3P6rWo41EQBuBacGFbFHWKBWo1K",
  "key36": "2mBCKBe8vkb3aP2RMWULVe2PKzWKFP2Ls53qTXcV7vuvxP67CBPMRC44mFNcHyUXmowX8heHvMUfhM4pXcFLc25c",
  "key37": "b4X1R2QCQyd1SovSMjvSQvw67Cwddqxpn1nF3WyZsJvrcz7AN541f5WinWYphRxuKDNRV1WVSAPeQbSeXN39jiy",
  "key38": "5Ri7rBPU9CuFfqihteWqza25f1RyutqnAi6LLRK78zhiCsPP9NPtkBY7yw3mcgYLaViwrvZYosJWHAPm2n2LCTNa",
  "key39": "5GpZ8L3qYwqGCHzhVVsrkJwgqK9ExwrzVEmwKrKr6BZhPfFwkbkmy1EjaZPf58cJkmhvcbH4QpRAgxpCHK7C8JUQ",
  "key40": "2QefQk4WfH8j1fmP2YeauPAnZyYEmyMNawM8N9Tz6nuMDzSPcRcr5ctv4Yy1KD1P5GRJ3umEBabMSkwysJSqtnE2",
  "key41": "2PmeKz4aKsP9RHyV7Sqs6iz8N4nnGhSkD6xuKSDwLBkrsqDa6chHXAoAQY6KKSe6HfCLqu3c4cbpiWe9G1n8TKf4",
  "key42": "3d4fjWFyrcBAduV2F2JgzJFb4HKrFWHYEEQBSuVXPEoF1jecm2eVsZeqEjzfX3YVCRWUSuMPNbfgAEqPYgTBiLMc",
  "key43": "45nyBL23MCgJEMAV65WmescJ6ReL2nx9cHStnVdm6CopVsQ6TKqyxgEfueV1KAQtEBSzGP9AjLVNn9vkm1vz6vUb",
  "key44": "4o5VW5ePerB6HaotJJA2r3uQmGy4krU3jZCix7YAnGsstwJggbmaGkY48YrSJvWaQHeHH9KLF7cA4o44e8TakSD6"
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
