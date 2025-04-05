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
    "4HgGdz15sNrxAgS7oBgoih8iTUvM8uFq6fBzFSEpa9vu3mcQEsEXrdfxawn8sNbVrhNAyjsbEqfCXjNRGt2TGpg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ayPBSxP1JLMb1gYacXpLEGQZEV4YupcpBAmNanfiq3RAH3RRYkmex6YokCRNKsxpF2ajvfovpLd4w8FtjLA1KsG",
  "key1": "5TsKDqUKh1hD8q5ErPdCFH1Da6YyvJZpLz8md1Ep6wZKyJEQCKS1mnLiTvAVzwT48orJJjkRuEjKdd9WkPnirRW",
  "key2": "8ExikMARtJrEPMZrTCS3MK5V2ZuPHdWEzgDaZHFcjCeaCysrbnz1tCzRJ44ck7c8Dx5s8qnrhebRKWTPiXTS7Sa",
  "key3": "28R1HP6EpgLzV4E28arnAonSGDw1kj4EYWN6hD9x46pDjPiEuMo2doBCDcKm44p9s1EYYZhPmKHvLHkV6TwD5Pjk",
  "key4": "59f4AfmQUqZJemrqTRBZ7RjnJZeM3MusMwbvMYFWTzQkSu3fFjuFKX6wGWjR6T2RMiK1MFFFnKSkW2F2pBxg9ybw",
  "key5": "2aBJRatY8xmg34SgrqvXnsDogdkK3Ep8SVyeQDbNU4dBCEn17xdM9vyVcb5saocMoRwpgnW1pyk6K3X4fQeomJs9",
  "key6": "5xqgAyX18eicQAqc4kM5bmsDQ3jqj3VTeEtoh4edUH8jfkrfstQXcR5ptQqo5V9wTivk7qNyr6X7TNTuAqWvfbLf",
  "key7": "3Q3YCztHqj8mX8zasZQeg1YpFDLeZrLHL5RWFPKusnTVKv9a5rdaRxQFu2B52zinL2EdvKrMNRmTV8YzajsrDEqd",
  "key8": "3vCMzpWxUu5e7uPsinG7Ub1NnCgKsTKg4h8zaE592Ze8FBV8Z1rBu4mRAANAjVCDkB17Y7feD9FwgMnrfczYjPFa",
  "key9": "3DvNrepKgUs8XyEjbLa2UxdcFUZkE17dssAZEtZ3j2QBw36cKR8GogN2qs8Ers23bXz1qMWuVZh8kFdvBheAzNwX",
  "key10": "52UFau6a2QdSXasGkUoVMS1HMcu4LJwRr5MaiGhnrTDhLdXuHJkYw9MLt1jahDdbXRnDr17RNYx2uRfapA7t2RNw",
  "key11": "3Ytjycx2bJStU4bF3CKdQaXT9cNcN6G3K9nUAavgqw5AuQUG5KRp7wmguDiwusp3RYX9JkQuuXjgwe1aGPqBDusK",
  "key12": "2xczYKuq6cmA2UyzxL5asPR8Mh5asAX79WvUx7G1Hq7LcRFgzAWSRmKexrqx43edL3JLsvSxVwMqNoGEC9dpAFaw",
  "key13": "44c7k8yV6pBpPdV8j92C61Hj2vhTSRwcAFCiAzoUeajVrf7qZMevyc9LeUbsunqKpeFD65PnSCNasHH9dgqitZ89",
  "key14": "3VtCyZYZR93DW5T3owSJbLTBa66T1pHGC67bVpbVVcStDbVerZ88TfPahZdG1Dd2FqWV79H9szHik7b7RXBprSmp",
  "key15": "5kVoUgEPf3BsAjU6RttpFX4RkstqWq6P1VFFd7WsHq89t6tgvDQgGfeUqRaG4uhoKYG7zR4H1ejTVwsphTtZvRAz",
  "key16": "2aLf5adfjHYALrwrDGVb7zV8AuSt7RBWZZR5jhDPcNQJAQSb7n14HEdVZnKkZ7zQ4Qp9m56YH3ABND8rCMKhsGYZ",
  "key17": "5p1hwqMVWKvNFWuGcHj3opQY7qFjUFpipfhWBaHWsZ3T16dX1GAUEhtd87GSrGr4zW7TTATDbqTTdjdd7FK4oG5F",
  "key18": "62nUG6p2HvWzsPgLZY3rBs6NTYNVnZzaW1GDv379e9kfT2fDan1jqMHjh7MAFokg9GES87Gd5QY4fKDu1i4DoDWo",
  "key19": "tu1TrLVcYDqCNhhrYspow8nAgaNAiWCviSC6PGgCndyzrTPYedx9BHxc8V2vMrsynRp2ZMHUt2gytgt2oUCtr2j",
  "key20": "4J8xT3JPSQdm6jvkL5yyWHXd5ebYGAUjwNDupe9MTg6TC27ggzyePUu8L5j6VGTqT4bDV5tfzxWPVbEnRuthJzkM",
  "key21": "4cEdzQbRXjeDXNWS4rEwUWMSBcS9hCRyPW3SGw688KPAHiQzzDtLxP9p1v8p18N9rXJ4LjhSiyjirKkHfgtRcQis",
  "key22": "3nGDVKuhACuLRXhBEopFqJBypZ5wbazremkTwk1L4RjX69T6Asi5daSbqij6iYpcLRaykw9fcdEC8T3UnMU7B2z7",
  "key23": "2PRn8rHQ2fZWM32yF5Rscoy9A4bdDZ4pwrwARVNPzGTpbTk9ey7trQYqgi4NiGEztZRak4BpRt9NiPzpQcDHsish",
  "key24": "56cbniNaupwKf1wfR55a2nhXXndH3uUfWRunZKgqD6qnyx3HeGwZAzMeiGhCZ7hGCRjpELhKMQszV9nnPoXsoYrt",
  "key25": "bBz95mXhUVSjprG3YPWxsAVDxVCJbrZSHeqn6w1YCgtLK6T59uZV7oRT5jckPViS1tzai7z5iMkLADeNhvNpUS6",
  "key26": "5266Y5AyhuNQDzzE8uVcWsVoriBqpGABtfUndBwFsLnw1MBNmwgcdGBHNpkWdBAt6DR3bTnfofoBSK89H83MMUjt",
  "key27": "4uJU8FCXvCFhRSsaaH2d4ivbhFQLiSQxMahrjUEDC8rd5pkbGpq37oLbXoSGCajjDoqawjcH6zXpNr4XqajtxT5f",
  "key28": "5C3L7pViL4v7hC7TTanP3MpushoL5KCs9KePKYEWCJtkXHhfqRAVk27PqYTf2JAoDhaBmxpweprhhsQaHbEnhAGg",
  "key29": "2zCsTYZ61zUFaGDyKzeBHvscUG6SADxYHneVjRot6j3bkV6iQyZPx5jMkC6FmNhykicsta3dHXt5yBuPHAxqTmpu",
  "key30": "5iDr9NgdWZKrrk9np22NLPaGg5n2PTf17prA8HphTSUPhWx8GtTS6agmz3s8bq3b6QzxMsKQ72pTCnVmYguwJ7Dg",
  "key31": "3VjR14VFSHVuVNCTEVVnthTL8aYjoijGdee6cGAtbUZZeb3YN1Gv2HtNjL1JhQa2JWi2iiFmGeiziaZUW5evgRDF",
  "key32": "4i4MgjQSMok2SGC3T4ZrvWynRMgkYG3LCSVKdhz79UpDeEj8NvkSTHvzeJCmur8UMkUybssdrVfkvFnKcaxNdjgo",
  "key33": "63MM3FHbwJazcvZgMF4p27S27W1uZzuB94yj7iyLCgtFDSRYwGUKMPR4Zbs84sjzjWmJEgUcYUd3PwWRxphFoShq",
  "key34": "3MevzJxs4zB9BBintrX2JpMpsGjWLoVfRusd14ky32u4qXpEHfXZUYsA2JwprkitYZJoQJCNrJmmiNFfurX4H9QS",
  "key35": "3jEqUcEmMy8TuydKxLhyqFapaUN2Uo8NijtcU89sdjFALAW3S72Rb45fa2t4RQwEE23vw7t5npfqRFAevsC9E6pz",
  "key36": "2topQpxc1aipRprJp1MFCp8AJRZ5Q5dVUREuvKGAvTpcCAomA8fzA8dJiGeSH7L6vJLwcdw7bGMeCHwRWsHbr5G2",
  "key37": "2tBEoauaVwokhbN6MSLFZCCRbbwK6bUbEY9zBKqw1Ba38f47Jd4GiLQM6VCtQYdxT7GxZok82tb4LDpZYBb6uKXN",
  "key38": "3d8kZt4g1DGP86F63YNZUESYgSYSP5eK3qfghkWnQ5iKYvApyNGwDV9hkhD5LxqZgLzT1SjDtMX9NnVyjt9GsB4S",
  "key39": "mkMFppEpaGL5orGPjfpLAVJiKM3wCRR9et8G72JM4qd7FNqbYZ5o4M6aRpjoWJSn7sS16fQw3Xo1gQpFGY8xDCW",
  "key40": "21TguWKz9pHGy9F92F1thr53ASP5DxYEsMZ2ycEHY93NK2w4WjbeBJWMSW9m2hvninQYt6QdavFGJh19ZUeKw3Lq",
  "key41": "58TbbqmtMPoxspLKQSs762KjqwJfWPB6VEJpCPM563fAugkXrxhWkDXimvV3GuEe3V6SU5MopHUFAA4F4nuEY2Du",
  "key42": "5fWs4hN4tPFTh8tnucR2K9sSntK1i7sw576LfcxJz6hCwLBYhgBJ146WkCVXucJ9a6TjA9mj9f3WZbBA6Va6MATc",
  "key43": "29jm3M3Dm71SBeUEzsT1RGjNHRbRuky32Y9LMNuH31J7BAUB6YBugpK4M7dtke3Mh8eVVJjcYU3aRZGAMFwj8Ftz",
  "key44": "3ki6GBMkkMmQA2nsak5V9RjPLvytqu2QR1tdRbVVTrsJD9MbvLKbcdLaUYaY5Enr3oEbk8b2dg77NxXQRMiUykpm",
  "key45": "4AA8pRTd6AEkm4BBrvxBLtrnGjzdjnwBqtEFTbibiRMYgALcqgTvzM9aFEjpn9j3KTxGcVs9WwnQfZwXvqSw5ZpQ",
  "key46": "3q6NF4w4Y6FMkyCd99h2JqnYkUuATuyvGhp31fqLaJtWBqfe7eR22ev51iPsqYW3khaqJUBenPpVTpRWizy3CKvE",
  "key47": "2fxcgahawCRhiE3KmjtsnAHRXf6K26nxFxbPTvhFRaYpsmUr73ZJmVc1VHRhrejHdzgxGuq1tBzAxCQERNLTZ1Rh"
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
