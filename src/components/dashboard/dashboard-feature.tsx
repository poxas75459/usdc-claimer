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
    "5JGfi1SVevZq4FaMu3PgMH8XYr23vpaxHxNQ6ARLTvWg845DTUL19xzmiUonNKLobpPaTgGCEkPxqPsLqJt4B8Ug"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JSZQWGkCi63fCy6YJUzyQCB3CiYNzwBmfKHFoD36xSxER2LS5a1U2vjVoxVXNzNbG85ADUJt6tJBb1CsF18MtSP",
  "key1": "MknbvRrZcvssPHXfmQdvagMP2VamJC8QLmtxrARx41aZqS6jsHunUPSgCQUGPpqoZouuigJLZUdZS2vDjfQBJ81",
  "key2": "5fiAm7DRjr5DLtyutPYrTxdz2kjAPE6ik4twuMwhByJ1J2hk5QVuQQYqA4Q2tMVneB99Mjf16ouWG2esNXW49LeT",
  "key3": "3qkyq6piV8sjzvGJYp2beCNrHj8puNR69qQYgk4tAe8YNaMpdZBjG6PhwrxzQcACafqsvLddrVgEMyw6X9D52Xn5",
  "key4": "ARr6JSfZGHkvHHo5WaNRYEXtaEMErD1GSKcfQNcFUWQkrxeUXJFrUmhcimPdmwgSqt9j8TxB8U72CFaifJaKqfR",
  "key5": "pTdjvetbVeeEuAmCRruQjmLDvyJZoQELWeqf7sbUyoUMVD5EKN4oGa4CxuARGFy2JndfA3FTuabqov1HcSbpSDB",
  "key6": "3mJRWaTYgxAaHjkSYDrYPG8RR3S28prUSYLouXvRiXhd9WZzwBKdKGCBpmzJN6zCQjQuV9A6ARVdLDEFH6Gfhdnn",
  "key7": "iVnEtjoR18aTk4dZY1SGQfejYU9v6wWcrSvtuTcSCweuSp5dWPieokojmqbvvXHC3zME5Y6NQC2WWFmbcZsHNzD",
  "key8": "54exoNZRqLXbUL7dQxNQaukAnKkM5nFiqoKo6XAKnt4w4Lmz7uE1k3FWAKP978patvbz5hnYafSpahRqrEM2YvL5",
  "key9": "32F6zRF2kG7JoFoZZA8yhUvU4TR7x7QMbrQcCTEMYWvJVR7DHs2QfAwK1L9guFLc9jXszZDv6qVUKG45sWkW6JMr",
  "key10": "3CwujamAtpRSPuu6id9sSRbNGWHBRDTRAxzy3opAFWibvV6tKi9PMwfJu5UfztZ2K2htUh5q1zzqe67tMLErXHjs",
  "key11": "5bf5ZVq3uzZFoSEGadhEgBjPKqEKeC4v8FXKntmpexWqWfYkpuTaJknw3wv16qDUJtxZPe2g3w94C174P9j8KqFC",
  "key12": "3R49ZKMuBMCwyFQPTL5L5yH7FrS5LoyQsRZhMdV8fSVU4qDrRPB7qB3BGwZQHiMLjn65cZkwKM5x9JBdxe1EhC1L",
  "key13": "5xZWEh6xYwjMnVGdqet8QaDYqZdpCtosuLfVFfrKoUdnnvPgHjJSVRNDqbuyfGvHe14k6GBNmDvJkfzgSYeZjdPn",
  "key14": "41Eco65BduBFbacgSGa8cSCrh7smW79vZMGdLFEnuJALUGARzrf6KCNECpKjfvpr8HYkiiTnmHYbNMVQQw8vRqjt",
  "key15": "2a2FUaBUMQgqVkpNTXRvNJTq9GeYuV9zkHdQpmkm4d83pK4mtw2Loh1yv62k3Gt1pk4qfHusoBqNhZJWDU63u2s1",
  "key16": "456GVGn3EEfn5Bi9e5RBLEmyYmqZaMCRDYM4e6kcEkw9X2djizNVkrFdgW7d2mkksFsSec9t772YJZwpJNwdYnjb",
  "key17": "3nqQjhAMFC9d7iKvhyazbGjEpPkTvohEmfeSc7jEiucMhinbsiMLiPmszJRdfcDdQhBUhDsE1XpqxLZSCxrqVvSY",
  "key18": "213d2Dyq8JrveWjyTeWg9j82HdepRHsvCSXa71Xc1kuNYG8SH7mSgcnJvrTS7hs7ZAA6CKXXCEo9gTXWNsHfuMmP",
  "key19": "5QjzTBEbDMX5iWfrCdXZBQHcfTSs3GQj8fqDqcD5C5Lra2b8qYGaCZe2XT9G69UUkn6x28FHRQkgqUWYyT82Njrz",
  "key20": "3H5VuddyxmfSewAa3A6VKdB35kKfnjqK5aiwF4AYVuDQTRUiMWPQ3wwcbDBkbxgNMbjBQxGfZfvbcudipo9vHVXL",
  "key21": "2fpddDNYuthMzGJhrack2U1LaeqbVmp1B9qBT7x56EyoT8f3KTFkByynRVeASruG1hddT5EmQYeoPKrTeDF6jAN5",
  "key22": "3W9paZUmr5MboHzX8kTX9ca91K8QpBY8T4YYcMhL2iGAwCMPKpaZh7fFGyp6U7SmTwEJm8QS4ZSzeRXaEZT3teQj",
  "key23": "4yA8Q57Jpc97bWKrkyJP6sjQv9a3W31Y98GAn8oYyuZwjN82y7GP7Vjp4GNGi9b9RpKnDd4WnVZdkRVVLvKgxNwA",
  "key24": "3PG2ecV9AWGSE7HjMPFMsajL55uTFVUK76GUBLnx7B7Na2dWhzj2kExq4mMAXYTbRyYi2ocez9WZGqcNr5hR6FKX",
  "key25": "2Q9EW2pzab5aUcSnVHDdVM75PppkiDN5AroLVnF9iTCNHm684Nb2tSiHgHHGA1ZsCcP9R4B1y13sBgzFo1PDvGS4",
  "key26": "2aHf3vMpEv4iKoaoF8qYaLDWWhTuTYVzkut3Lk5MpGiNb7oUWuqnkhaX69JKsxNq6DC4gcyxJc4ytrpPVCsWNsFz",
  "key27": "72NogMsCgt7FZ8BD3TApgrfCd2VkyAFc928JuMR8PgkWpmTWpksP1LbLAvFaBeSJDdiif53eHD4iPrnq2uxtog3",
  "key28": "5M2bEoEfdM6pUmFcuMHNpUhAnPTMLcMxdfhpdbSvt2GVjSZidGjL7kmzVwDmUL7DkFpU5KppzXd4u4infEx3NYPy",
  "key29": "28MYedwaSx2394fHN1pbWa6n3BFvbaxvaeyLg66mdH9y5MdojzzQcYTnbyks3wNXT91fp1RsGzh3pqv3T9UrF9VX",
  "key30": "4rVEYopHm5bHmhPdPKDNxKeSkEu6TxDKVpnheCgpr7VYzjCnrrZpLDWAeYGPLbVZBqGnzaRWks8hfLFjC2Xy5NRy",
  "key31": "41xcNcjfxHByakCcYJhK8Vje27SDyo48FqGc653ejQfTuw1NhjfpGpxK6dirYaT3wWiLU6rMUsHCiuLvx8MVHuKN",
  "key32": "3tKcNCPAeojHaiDSG4fLP41XKSvdjPFF74HPaB1bPqv3YdRdY9hB1ymHRqF7FvnXQe4LDXMenu2qy3KKrQD4wUrQ",
  "key33": "2jMv9xWrp1SEFANGqNgLiYd4QL7DZjHQ14Uudk9UxmVYBZmy6FtwiWP8XCHcYKGxPq6qFLoF4vTEa9P1gFpHjrAD",
  "key34": "4NXzVC7E2LMM2zsDxkchD126LXZbidqWu4mCYnWnzzd9ttpe3PhdY6zoCbAN8bGYUETVtn1zWBq17fKUiUN31gxH",
  "key35": "3aUXXy6MtY8Tb8vhDX9Wo4ifXL1pQDuBkV1oyHRv1XordcoqTA4kScr3pRWrVLKv3wLz5iKzRWnBL6FDWqaPZHYp",
  "key36": "5AjTzeMWDsckkuBrwicpkHvY9WDkbJgXUfCai4Vchy8gAKnDZLGqomiijX1QwjTsjexkwC96ZgvQ2kUhyNeEEmPZ",
  "key37": "2VYeYBAKDMkrhhVb2aAMcikjKXg3ZYAvkau5i6ByHWuYenVQr1VnJRx9VyZ7gPCwmsd7Njs2NXi6EoUU3Bb9YXmw",
  "key38": "5JaSm4cGgPQj6RkSUZe2JFrY1HuMB5VSBqVFiPqe3NYdA336So3aAGSQ8QPTJdRfFBYgmrxbX7JLWudg32s57YP9",
  "key39": "AAWktdU1gXKx69N5xc3JvDmCvkpDV3qfXLYxf4c2YCoFnTakQ5ysJWLwWbH1TdV6G96dJdrptfVqxR9EFQw6WD8"
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
