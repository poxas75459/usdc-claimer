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
    "5s7oYuFs69DMQSiuJJ3STddM2qGwcYdQGLEEmVsyWc5dwxMhbDtqc5jZi4YshGEgrmgyFVVcifgooFPBBMuyCvGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SYNW78kvhdrNsgEUWr3asn3jCE3ZE2XrfK68WoX5VGeytXCTq6EgDvsMvN9s82PqAGgHcZQY5rD8NmFRonc1vL4",
  "key1": "BVSmwvePgV9snenq6jL21iN6XxLtGLRbgjpAxbMZU1DaTcorSAWnEoswkwDgcAmpJV8oLYSq7dWNRV3EF8cYo3D",
  "key2": "5YLpPkdHKaKjwVWDFRVBaBeXnkPJT95Zjy7hLx5jGsonjQC2hguUBFZcRaWh1gFugLZJkgGPrSWVZxVYoenv21BX",
  "key3": "4aLd4bTgdjsHkvBtUxjxDVXV32KJpYazqhFqLGEeR6BjShREEM6WXPGYsDwAo27RkVKPjjMJAEPcFr9dpdnPqtvt",
  "key4": "2z9Y14s3zsQZ17D2KFLa3gcFgsiKgwvinSo8P1MHCMJh3T1ps5MuQQgF5cfmU3vAWgs8UspdwaYQYgqvMnfqGkGf",
  "key5": "AaZ97tdVgW2Sgms7GRUTsjcVTQpUNSZDuqhzMUseimeeg46f35Y2yKVURqzny3qX7PXuA1gQKzZVSSA1QmoWd4W",
  "key6": "5DL6swYaTeKgfdnNhqHtbo1zMKaP288C6BFHHc6Go3jMGDoUVt6YTZMGGkbHEEnMEHh3NFNwpd32pQGxJjFrdtov",
  "key7": "43Avhe91ACGEKzatXBxpLCnKm9wLp7yhfYzXPZ2G4Zb92zysMfSQPeNuLfiMppzNk8uNKUftueKyS6RFY1yjNnqd",
  "key8": "4aupngvS954oTCGCpAYRDZZPvk3SerQWiHrojALURCw51Kj9nQQeAbu7yPFPtrQYcouQdLV1B3HwAiRFubs6MroM",
  "key9": "2Pd3NbjhduE2Ad5ecGkxpFV7wqSdDwiLz9jgPj1dKKwKQJRVoBKFBQf2Wo4YDCV9cDXr6Fapw8NtH4q1yKfKv6qo",
  "key10": "21b3nxFns9DKyxwzH6xmwjZ1DbW6Qb3RQmgPgB3M9SEBGojs1Vjd29unqGrBbfT3REAncPNmNfftj2RikwkMh2cu",
  "key11": "3DCSFXL58dCGt2tZxozV5vuYPUW66KettaS4SAHevRGVp9Uvsr7QAyecpQcxhBnewC5hFsBV9HTQcc53JSFKrGw1",
  "key12": "rL4dLaKYH3YidapYrFmux49aZiMUDreK88FHaZ9KBbYJa8yoGCtfYb7EcM1v1jXyYFvUkSqC3taVgobhKsYUxqE",
  "key13": "4DoxVV824wzFGwUygYsxhTzbWnnZfdePRuaTWqSKAhrB6VT1jp6MYLRiyyi59tvmBRhG4yek4ZTsBM8Z9yGeA7Gb",
  "key14": "4DovUaHhiNvFD2xxVqondKF58RqoHSYKE1QLRDPQYPovTZKeSDF8ANejFVHdYrRLMxviTMts4Q2mTD3fCqDxkzzR",
  "key15": "3FjUevqwzbxZgxMoiTeTGgqumoDyxwS1ZKtfH8kuwcqQTKaak9Ze732hzzf6AjgjfKFKnRpEqxQTY3mZVuCJ63E2",
  "key16": "3oPVCujKozPxSEk2fJS1iGhn4g9xHWdB3nbAWZA7NMkWkCRF3xpT9QimkGwXreF4Pi5cxYfBGmhPDNyPjA1HFFPS",
  "key17": "23DRx4PpoPXYf6sDamSA9ffNKRTZbJ3FRUpFDqkVEwQsRi8pXKKRcMN2xKQ5cieuXLbE2DMYe3TGH2sF6rWvNgAw",
  "key18": "5ZpySsRhJkYoQuZr83tE1V6DmazcdpBPqoh8csntRhWEbUwf25cYrKXboqjH3vC5oNXzQbEzMt7HiqhkBZMesDqG",
  "key19": "5SwqippzvhhgChEYRNzhAcVvjh3wiUoqkuGbMk6DiZnmW7LBv1QsXyMuUrWYyn2UeVieuVqr1MkgK586Xnqorvxn",
  "key20": "2ozFnCu4FhDXPzVzFQkCCt6a24hrPog9YSGKXkdDbTuQ1LcAE4GpCRXtfp9jgAW8woVeRekThadS7MaCTxTc4tB4",
  "key21": "2bysGGWmFdL2STFYowAeXvEnbms2emZ6fpF716nRCPJcmn5pXDCpBvfSPzCYG5Dw3EbQKRo5w7zpQinRJ7Dma8ZG",
  "key22": "5NufheSgCYzeQ9QCYzmsubTFr9GGzW8j85gBqCMnMoQ2YX8D2xwVM5MQf9qFJ3Sb8juqgpvDHmjdQpvNeCfk8Akd",
  "key23": "4qeiLnmwoSLUvmUDGFoWPaDf8HfpRcWfdMjibyaf3KskpjhXzNhNhKXJpKenmEhkiLhm9hVgaNS7upgaQUKFbESy",
  "key24": "5mwxp6AVRF6z7mHNPFMC6oNytr3sH59rdETw5C4UM69UEuppQbNojci76DvVQQ46XQ8inmAMqQ61PFKyxEmhiaEH",
  "key25": "KuEyYFFyJ11PZUovQMTYdWhPrjAmkzVYF9PPjn3Zo5EKioAtXsLnS6eCVHGgQ7a5k65VgzmjgVfBneFQjtsznJX",
  "key26": "3hW9ZMtzzy1EnMpr6vVki12QMme7n5qDcqnvmATLYcYPt21rtbRdMXKjn7aWRi296nG2Lbhf4TFFxgjwht5m6cV1",
  "key27": "5SjggGJZEnVhTGvynJotbWa6EdnxcVfAH45YFJ6d5rvkLuUjM61nfJrTmuhb8XTdFc3ZRUkhV1f27nSgowi5fhpY",
  "key28": "4PEeKBbfZTjR8FQTShEpWo1rXCW5yMB734raUdAUkZeUL8YfiEBnHHLzYHafHHxTs2bmBdX7TFacUgp2mfvme5xY",
  "key29": "2hYo2NanRbCdCH3dM5k9LZwLiwUfbWRCDhbXHWbNLq8uNx98GFvBaCvJ1upy9T3T7vmPqK7BLP1BfMYnPpsoAoKF",
  "key30": "BrMUqPiApfKRJhkhJbEEKP6jaK8NiAn7bD93VrNshF56adnCYWFH4EQEK9MbBa323yZAbwuPmxDkiD4DmrLNfgv",
  "key31": "4QprVMjMjyPiXZEVXHDwPXgMX7YD8HSwN3EtNLdj2AF2McaSAwGxThT8fLv5y45YFPyfUfhAt4GRhvp3nKAf5QwN"
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
