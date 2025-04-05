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
    "2xkd8RsW6CQDMTYtSrQem3wMDthcTzzt5J5YwBr6YfwkpDFpRUTUykdsWP6emsJccYsZUhPBVHNDkGfZZr5iLuXX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21ZU4P3Ahf7mnCtR5ZDiG46a9woeWLLAoYqXS1xnzkyWWc61brJ63Mgu15krWpkpSeJAK8XaLtkF9LeHx7932n6i",
  "key1": "5T1BH2wBBaAfzEeJeMf1BzLYqP5B1LLa3djcb5UdM3c2Re4AZ68qnC5XZFCiU6NnuQtTdCf3SAKFCsWmqqrkoAim",
  "key2": "53dvTpmPaZehtQKzapQQgkV9o92jC6wJAsnwkqZHfpgPPWsHncpS8tSwEks7dbWjPye4g7hnVbbWHu78GudPLj9i",
  "key3": "Kyu6uofJtoMzBHhuhy8q76p2NVBUw27sJCx7bUhMWSyVaAr2S8tvxAi6NUV6HjxV774cZYmD1ZnXVPQK6dPQ9Dv",
  "key4": "482kHahFbWrzXaHBZQa2CjHv2MoDgvgMdnp7Fc2y6JTjtdsynqsfzDn8HoFVd5zDzMTHESVuUDatFYT8MPsjwjJL",
  "key5": "3TrVtBDevXurewb8Svng46GHLdVBSABAQrWC5f9SbRd86L6ezjRQvyzNcNKbvAgSnMnh7GqLAR5VbGHduqVEQp2t",
  "key6": "3WFxoUkiXQrt8MRYiXzEAJ4ebpLCXLVjwuHNNBj9MwdZGKXQEnp2aEhysBWWiXDMbmCnz8ucAoio6AvCYx4ybvFF",
  "key7": "4b8a5HseXkxN8RK7fT61oyLV55gbL2zDjzgrAhajvoHBAP3EZQs1uQ1F2WZpb5DeNXnP6bu7zVz3v3h8FYfhcFNV",
  "key8": "4UMRiPF6e2RLasUfJuEs4FLEYyt7QwVJmKqJShBjcocDcfdeKmN8y1s9H4n5x378TnkFgFhxADa1xnjJSjeK72wp",
  "key9": "3NxqdcvjhfVyRVPVszyK2XEh79xMipN4N1gqKfa978p6NB3QwP82aTiGz4ypL2LbZmMfWpXiksL93wFkZTyLEDK4",
  "key10": "4DEiHM3xqWpoinBjKw7gyEC3KLLE7RHkCuC4YrGG9NrQ9nFXwAuceYUHs9csz6tgnbqdeuZg5M1gFLamdPgigUjC",
  "key11": "4AckP4QaM8LUgnCSsKFxLja9wyzLJG6sPMsVTz2FJo14wtKpMD69mMN1mFv1URMcpLzbMeuox9yoJfBV2bJd2wgG",
  "key12": "4dWK1nqnjpcCzpMnBbsAVhRrdaxQKG24MffnRXUUWw8PoPDszCVP7xno8HAEcbo2uZyhyA11k3JDiYy7DBZVnGKN",
  "key13": "4sprmbViLwy19XizgP3gENyWtnXeSh21svMXWbfczuqRW4nko5CXG5ztwUyHRJr5wUVffaeb3GPCK6Ckc79yRY5D",
  "key14": "3W4em1JdEZP6TijV8jY3jhrjLZ7yapNp3cSuXHiZ3MMsEDB3qqZQZAZYSwFrSpi7ANhaA8GSueG8cL5tjJLrN55A",
  "key15": "4KcaWdFEtFLd9tAisyYdL8Gxrp5wsnJfMSN8w5EH9yVJoamKDnuzUVuYpPwL8Mzn5z6jL6sYNsZqFi8xqhKyjdYt",
  "key16": "oBZhXsdQaCSH1aWznR3ntmNN36P7nynu5kwH7Ei4jhoSfU2U4y4uwcaUBjtLKDXUy6PL7L571iiqidfSWXzJ5Az",
  "key17": "5QvrYxiAjqk852SDGX1W9MFPCmYsyPzpUfbxVCvTNj5aSck9XyzBrfzAp71asLJ1XhdRaCxFjUViWzEBmwbkhs7i",
  "key18": "2GktdnstC9LJKVTvuPAsgEBqLVmw2cShXE9asQArhKNRfzRbD8ygjpCusV41itYJjtHGwAWoiz35hmusMyAtyfih",
  "key19": "3MmjtSxQ5KcMh7zWYsZ8znnUbLXDvUPooXeSAEN3AaNjZtNvD2iLYUS3VHxPBAPBxw3iXj9S2xs8uDzC1aXiGbvD",
  "key20": "3ANvV7ZRmK9vBxCVXWndkcunTcjFxGgR3NKQrL9Xn9LG47evhGCcZvoNM27dGciupULmfDNGyTPZa75jedn83HeY",
  "key21": "5kuFroWqJjqBpDRcYktkLp8gjaQFUciMDx12ikEB66UQcnEFiLFS31Vd77UFs9FoEieRtDvdVfdLqBy4Bk1119oq",
  "key22": "33uyLx2pgFEMqKGyBcUi3J4XwgSCCW1KpCFEwDeGYj12x4rRA8StyAxM4BLqStM77h2jSs4pPHkpZ8f4poRwMmQt",
  "key23": "4xhc6oVmFCQfCAaXKV51xENKZepqWAK6LQvNVzaorEW4qguZnzLjEPgtS4zhYUzzapQLn1TEGk6bbXaANek4umen",
  "key24": "3jsbTBFnTiRw2gULDBSuo8K5bYgLiZfBAwhYWxWjCRFqQRrJVwSp1LTsYnpEiTLaTyws4TFuwNLfc65Lfeu5MR47",
  "key25": "4YEWq3RCSfUx55gu414UC3daQSAmGANcecEG4huUMXQFp4qveh79hePQYecxVYMnnAFYgKoZ4F2ZMRifR8HRzt55",
  "key26": "3Bv7ByjAunt6Lty3J3jm2aTbLVSsL8aZngLrQvHqjhVDLk3eJYVU99VWgoRRfJEsEdhBWHqrFDWte3B6vj1ePFZK",
  "key27": "2Jutn8jnMxnzcHDReEFgWjeTrhWPfmcL4VGyb6YwpPTnzgP5AdA9GUtmsAcqrMctVUiKPsCRLxJb6oH4Hs8ALoh2",
  "key28": "67gWFLYEwoFBY724oqGFMuYA375oJoCeW9GDDxjdzS3tzvMrooARzznDbjertRfjDsWJawuaxs3fXydfZeRRVW1T",
  "key29": "yajSBZhLj5xfCUVF5yLjWsFKv2MV9XgdHX6h6naF91rg6hfUaenY3qr7DWdUphAmLhZ1TH6RQwCB7mYmrFsbPwV",
  "key30": "9NpQ24hJ2b4tV51F9mxpVi9fHH5uSuWrtpuMehhgUV3KAvVE9EPTAgb4eKHNPppHHAU7kqEQxtmXrWiqswqrB5F",
  "key31": "9QDpcYJDQfj318aKEKR574fTCytpFzBbBPj3D87fyRf6fnmwSwxATdKLCQEFyVkdogCRrnfZp8SGLmJDWB5BbhD",
  "key32": "3HkbLiWCQc9tch2hHZZzxZQyxoheMHt2Bxq9JaGhnqKQatZ1XFjDPCE2EFPUFbXm1hCiNuWkhjiFM282Agehi4fh",
  "key33": "2QmgXkQER2RUrFbnAWYCZ9HDgddMmySDuAWZ5ww6H4LzMYeTNEQZtkagWDoodHtvaoMm6S9tQRaMu5sirFizTkMq"
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
