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
    "3tEu7MekwyqxEqm1wfi4KL3cSXrHEgc7XhURUcvU7UpMeQmDvkHEAKE4nw8fWuyDg3hGBb38zgPt1C7Pfmx21s2g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "92ku5FCZEmUvPbDDLejgyemmSmkHzVteJ54ktPLdfzCd3wo8JWa5aFzCZQjWrdbArv5RWqvgdQBcpmU4fhcbZtd",
  "key1": "3m5GTwJorBea2kgmuzLQk4JvyHKAuXN8nCFP2SCVV6c2QL3VGhhbYi8Gka3pUxPRkz278LTGXHYCtPyyA3TUsfhV",
  "key2": "3wBB6bdf92zeCEZTnxnP9hGbmDk91fSMUPnRj8Bzidn16aQThPLixTxTNuJPkrjdwZUYL9AKVoSCwmp9kjuZMuZF",
  "key3": "34ZerUeCApJTLfHsTnA1pDyXtgGUnk4L28FadzNYwxKZYo4t2tjdX1FbYQK5w7yB5z39UP23HpAMXevUh8iFCAjV",
  "key4": "pjrRYr4LBmaKfYN5zGkameYCzm3szopDowwQLtro2STBYXoGzyoY3yiT7KgAvF4do99trzG3pKp8tGFqKGAjeTX",
  "key5": "5j5GB6GmYPyymmfAEbB1tpu4N4H4fh8zTvTk3rJaeG2Ejoz3PYBLtb6VLQ5kH4vGf7MBtYq5emmPu8hQ4Ga4RkEB",
  "key6": "82USAfW9i5zXnNb9Pmukr38SYknPgzssMbCBtEsCta5LdWFmBERfiKPXdogqeUGz6QZYFmcCxb1adHf1AHjAfBd",
  "key7": "3TFqtadjSVVZkDFZBBTTfGWwZUDEkdCoZGZxvsakj16Y9wgAL5dVq7bMgjPoKeVBdz6Dj34j1R5dxFv1zHKUC97h",
  "key8": "kiZR4cac68LadnEpF5D7DSWtRxAs9mxenvP3iiJGwTbMZBtzdhgLdAxHT6ecwcJW6mABL9GL6WjAQF71D2Lxsa9",
  "key9": "2FWLWFwZwqnjALM9jvuHyVW4jNxrboUekHUkn8eHKJGwFBxP3q89GCaUVqe8pkbcc3v1TVMA5Y7mSe7ozfAVkPRJ",
  "key10": "2YsyYiyEYhiNAQbfrUF2pkCQkMqqoYEbgDQkFM8iMBCS2gKDNh64vmWHEJzcSxBYUD9YHiXQrTGbrwL2HMp1LPJK",
  "key11": "55di8WNKdEs7wtVJZLDZgzq5zLi1tHEhUPHQFvPqCsfTCVBPKsPKcRmwDHnbbuQk2eVsvMuHUy19AQs3nzG7MWKa",
  "key12": "28o9rPjfb9CHRZP2dfCFyzByq5SabDxQ3YjmtWhhtB6DFWXPS5CJdGY9X8CzmQxxMMSz6PFfTKkh4X9dzmvvKnCp",
  "key13": "KRVqR9F8iWHzUm5wavyEjLkVF4bAgJSWS8j1LifimwuGys968WwH5WzbFrAgxmsmQ3pjjMtUrrtK7dkPTXRzVvG",
  "key14": "R7xix2ZWsV59wGTBTCJPYpZyMsK4TuFY4A9KmjJhNLDMMLh6A41digjGVbgEwcuQfTtHFdyq5FHH467wXQdm48G",
  "key15": "2b1idvvZjBPAEtshAi6cBnKjNKzg6fDWRnk5g6FaLtiQGwdEwx2guTgfjSg8uoFQB9XJFnP4nRdZna3gRXUmZKWX",
  "key16": "5vLcbGeE9dyQU5xuYiuEycpvAUPRrAmRpoygimUEgsPthehhN9GwX2jJj5qN7GanCubUBBFTrwb7rk5P7KCqzPQY",
  "key17": "3rKviKhWoas6SA9kvHsz3aDV6MYXBtPUfngtBYB7ruEPUMb5TWy19zWW8Fqu54qG4wzBj2vVir7hasrqzsv1GM78",
  "key18": "527YaNgoEV19MQfGzhy3sY7bjvQrU7auFEEDGFKve9KYAjBSDizDMkEFpuNYGzzYbf8cAK79ZVdjDPRhtCEzDg1F",
  "key19": "4a4NjfkbqZ5RmPptYC5NXwJWUc2LzKps8Y3Kjm9rGayZ9be8NMGYnwbqzLcgkG8FntZKxKdV1J8MmHmcfebhzi3N",
  "key20": "2SmDuvq9PhS5h5XPNzimb3kNRcq8E2cT2ri4PSj4j3Ua7NTBJCQFARtzrd54GyMtgnM8ADGzFeZB1o93A6S4xrPv",
  "key21": "z32YXngZBq6PcJZ8x2Z8ibrZ61VFSepBWbovPthaFXsTFRaENvMX45EkFEtd23DuZwFJ9BpbC249AP9sSSXgVuD",
  "key22": "4NZp5pM63vxMtuNwrx7P9nzwS3McePQVsGcfAoYBwtgomcQuKZer5yMaxDr64ZTVk2ZZtjG6XGN8LQgsWNtEKpFC",
  "key23": "QPbTSXAbWW6i48pz9Y82DTBtcmrgXeiYjdm2oTssQjhdmuGEekiX29WLqrPKPZopYsmy9iTexvevCE3cX6Lwtzv",
  "key24": "4bafAvooxTTAZJCG15ypTJG6EFd4n731wiJ8mZhTqeHmSjipJKUQZtHSpvdKoZW6hmR83EXa3QgJ7VFdQfXcLFVp",
  "key25": "576TabarcGhFWUKgT79mxXAUJiQx1BDXAR58xq2mRYNPbY8UQT8ULjCCEUSYCfzJU5cf3fHhMCYfQoUaE6QpnNM7",
  "key26": "4m6swQrZNGCfZsa5MPQ6a8qzcN77PwWqdPXpuqxNf8TT6CpejHYqinXqdHse4t2sVCMHVcguWmBubHz1udoPxJJ7",
  "key27": "2nskHqKmcZoLZFhmEVYyDkmU6wv31prkXpikb7dBx4HcsRWXii9uymmW2fbSMZ4GDEns5in48ZGUDaf8e8JVVPgw",
  "key28": "2N8xkBy2Po8fup9ExMDwXiUSMQyisd1owAsYyM5cPdQawhMB4TLUcoii9uxogSZqXzHRCvyaWmVL6659nBChPx98",
  "key29": "2beC9mmvf3HRMY8yvafokB9B3uU7djC7xDDoh4vWxXrJaArsw8uEARuXeRNPYcLrXmkFXzmP6RiAimayocsJjSiM",
  "key30": "dkycgJUVJkXJv7GgDDJkdjRpAiqNKbScAcJ7hzQWVddTfY1La3gEw6doV6ffSspy15SRN1nsbmoRqyPn1bp79hK",
  "key31": "4B4jAfGBEN3bVh1MhBZXGNrRaazLYkf3BmC1U3a3RGCbRn1TGMyugQmRtVgeZz2G1hL5uduX9XqvrMd8iPGKtp9h",
  "key32": "5ruCq8dmAYv6hEH6vu5fJCGj6Q2q4oEQojLagmBCVGGHHods7nTivek6A7a9a5AJ7XRKD9bA25Yer28j3jupRRtV",
  "key33": "5pf8Z8DoQ1AUmNNNbprZYdUnUVzFQveKUTAfMAp1mJyVnPqaYiX2VQggUHNygCKqjCEsZJMZ1RKNmoZNApvGmkcQ",
  "key34": "53E5CxL18mgR2fBeXfbDWApQmx13rxsz768GkLjW7QTMcXBvN31DhJjuGku98s8YKC6Wbd9ve6Z2tEjc2ApsCYQ8",
  "key35": "3yGsTR54B8xqjaVdPwUGoPHm1Ub1fQNNBpTQJ5D3WeYeew1ZW3Pwe2T1FsvNV5J9E6gFphSbT8H3vK2m1VVvngJV",
  "key36": "2Va5yhRTKQeXQewUecP1DoZBSX34VX8C8qjKyU6pshgVj5QUZEbcH1cnACUxkGMR4p7W1riu4FHyVGwJknPxz31G",
  "key37": "3RJnPTLb1kerAn9QdmRYyvkkcg565AmGhwgxW6dRhvWjN8ehbegDg7eyt1wBKYNkdJcKwicbypXGYdAitU52z3BG",
  "key38": "5VSNhu5PPWHKb8D81bKxEuTiSCLYH4WPKeuseA9iUnHkJrQy4GhEoR4u89uCHxybZrsebPh2ZBc5Cgi65TX6CVTv",
  "key39": "5o4vnb7QCVg8zDf5egZwLBpDmEG4JA8QtHyv24Av4hPmRAQfV2Cb6gwpyLjwzmR3nAKLY3G7cEmPUteLs3iDm2xg",
  "key40": "3nMwALAR3kT5t6fuad5z5y1bUsDNv3KS5cojAGpaQZKvV3Ag8uaD1WZxu9TSzFeSywetVESWJEMxLTaS5upK9iLd",
  "key41": "4PwDLx9LDTT1WNUEru8ZBfHB9iDjhdyqgmps4bgEeXpXJohnYsLg8pB3eW3urmCbPZsXPwTYiCw9L25U5L9cM17Y"
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
