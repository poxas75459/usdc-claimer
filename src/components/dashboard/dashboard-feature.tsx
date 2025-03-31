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
    "fP1A1uH5iftLq1czUx4bR3FmBYLhWfSPbzY3KEhjJ6UNGrhMYigYAHmx5xAjuJxQ3gpxqpxCfutDgY33DmaLdXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gG2mv4MP8KTDyS5kqR3mPfbXn5nTQgeGLFPN7qvyBZwi4XDGCdisex5umGjvmyM3nFngQNEmKUCUqsfmouS2m6W",
  "key1": "da1ryvgUsxUnFvyMmWumsRcbrozaU94neZYP7NmQKWnzwEbGLnjiCNQjBKPzWDNVTPCoFq4V4g59jg63zQYAVbZ",
  "key2": "5GePz1p19h7f8WgqTN4xGCKj2JjenjZUT6brSqXcFtmJfMUfwsD4cj7cLmmjsCAyziLj9UvDCFnrDeyfLBhc31Na",
  "key3": "2XJjCZBBRBFhM3VUFGihX9zQ7kaCsySxu5cfp14cZ6qsRmtVmU3YjbStC9K6sznBaoobVt5ARDjDrfFbi1jA9z26",
  "key4": "4WLuZGbqQ3yaHip4FFVgrFjDLiYwMWM1J6Wfrb8AEEDA7qH9oTiVy5gpxuFb93xoHSFcpcz8g874PGyyjEMkLoxa",
  "key5": "cCLo42ZQXoYtQgZvKFcpEsT2SvHgja2rDycbQ5ARYQe7BZ4vhv2w4ThUor8MeW88qMo4bX7WM6yNYdyaHYXWhua",
  "key6": "1jgjDR1LQZJtf6jopX7duCJDWZHARFwEDYpNZQhF6AW6nuqJD4ZWsQS8a7S4NeqFaM8RwU7XdVDdWACzcogURDi",
  "key7": "5Mijzegs8mSXs2YPLHXjTePcZGPVynPhpoCVnw7aZKVBEny7yS8jNZsiAg89CTNtr3HdhyFKa3qh8KH53UUz53XY",
  "key8": "2mUev5P7SCwEhv9GtYjuREdkrkGWCH4tnJVGKvCMiqvXiFpmnN3WibHSPLRLCL4qLkPudWmZQyQ4c69VRRs2f2iM",
  "key9": "4hZNG5qzXNFTZnABozghVSu98NsaWPk5cmrjGMJCNM5H7Da1abdrP6dxBpDxPP6d3Cw1sFWCUHNacb4PCrRYLekS",
  "key10": "3JQufpGYXyhS8JSDE1mNKunFhnLf1SSJMxcLi17coCSvDCbH6uySH9vNDXmMQjJDhEu1D19sJ8dZ8hGCi8ybt7RN",
  "key11": "4RoEQ7fCsKbs6kZbkmAToPN4u54h6RaTiXMaTuspLjdypZA4SCD1fM8YF8ieRDz8rVRGMDnMPJu28WrMPEqFMhnq",
  "key12": "3PALJJphsRaN657PkFCh82vrfjnJ3ZnqSdiXP75PeT9dNmTzugFXoxJjsVUw6RjntDxfpyqdg4WHzZ8qT8NGzAiJ",
  "key13": "4QhgR77aZMHJSER55pAKCJxSohizcWVKGsJz7fcWC7CPjPYAgMoiTTuh6uuUwhbCiH4HjJxPGYTckkUMdbXNjAWo",
  "key14": "2ypL4yBP2AYE6avzqQ849yVeFPWUMhgTvzXz1Y1tSjAA7bn18db1oHiWKbj56ydSNVdhMnPr12mNmNry1NtVmkae",
  "key15": "3KHDMiukFgsNEF2afZxMztE5nCSQKo5dtioEczWAEVwqb5FobWP25n8C3cUNtpVSLv8iMRDaSCAaQMVMEozCV7nv",
  "key16": "5NvVyvB5ETaLgFzd8DKfKUSqWcoqiv5EpZSypgRKSsLaCRsKAx5fErcZWTXQKPthithjgpLwp911RZp8rsPhd8Zo",
  "key17": "2MQNVz13FqowyfpVLBTV5TQqt2vGqy7cQUTMrSFAtrx6LXZetqWUyY6Bm4mwg1QjBnKheaFAPFyktxFs5z9wizC5",
  "key18": "4ABKV1UJ8LXDUta2L6Pkd2PP2usfPzqw9dQyeRiSzx3r6hz22RXREui7UsY55EpPWvYdnzMXyW9oEfNyvNshVZDT",
  "key19": "3CuXUEtF3YXKZMoSVjatmMGoz7TbJTQRupgRGVJkbteyHHyMsBgfVbEedWSEzPYWmFFbRB9sbA6W9XmQ1TrKPrnh",
  "key20": "HzshC5qkTkoUVQc4gWuwYn7sHi4NefJgsKNQGNHzfFmoMLCQwyExbEtY6RBWDAFSkZMFTGijF382d8FpsJnr8UT",
  "key21": "3bfNBNM5wsokFavxyhh4YUY4y6Rr1PyMk18WMwgRFb4amhq3rqdHfDZDNhu5PDexJEfRjjcUvCEadrCSQTYdiwsy",
  "key22": "5irGPNcapCnQRhfGEdMQ1Yz1fWH2sKVXsP1rdDsLi3jy1okmHh5BTBQwnsggN5w8XRHa5W7PtffkoHgpfKiBp1dG",
  "key23": "52qwAqQnsMNERQgS3eBfqpsTb7ojh9GRArrv1niYsPZmvwQ869uw6qMYoHjFuP9cqbF9qt6x4V4MUe814XsVi2N3",
  "key24": "d82L2Fcp5GxQZvoLycmFDFWCu6v3epTVr9bUdTLTEktKrRvZq7ep7eG4TG7gqHMprNgRjcrvqyQK5dAYq4dV8nw",
  "key25": "3NLBgexLHKySqd6rDGB8QvSxTsvMns99RaRcnZXC64TouYsffXa2poJnvJyjKpZDEJAUqq4MJ5efUo68JePC7RiH",
  "key26": "5j1yADzcgyttVYQU7XpP5faQM9aApfvsLw2MHv2wqqzpmdwGrDFx2SDrNM2cvGZumtg8NBsfRDn9tv9wrB79y7Jj",
  "key27": "3Uom11TmNuyTFPQ65MKuwFWcCa2rFx3iVP2wMyoBN697NS5fwDnodbn4vfZYUpcxLS7FfVafLLd6nB46g7U1Svmn",
  "key28": "39aK8vmDJASxuS8ofP2wj5mv3AQCgUGmRGoaatjvQDmHQjDprnqDwsSNarST2m47F2xL2E8z8uqwPcKRHysCBNU",
  "key29": "4yuCveknUNKy7U6sgY6W34oW7WkvjFmZe4ECHGXnqEh5b3xVDUcckhmXF4ywNafujiPYMioD7GzkZm3wWg15fRQK",
  "key30": "27ovveiGSLReCjP6JtAgAfw5kYyz1K1DF6H8UrbD5xdCHTcGQedZF7Fs92ruw3aujUhRG38gWqpim7nmaYAT1EQ1",
  "key31": "Ts9chBXQe196NeZbry4EHnqfEZt3JXdz3PPKJBJdN29786J65jGhSgT2WmTe8GuMp7kcBeLdoCnY4XUN2J1m7iz",
  "key32": "Dt8a46sKtrp7eK2ufo8ZcHXgq36mynT1tMTN2Unh6U5e236Aip4uKeYPbzoDtxQcrtbp37Po17BWBBSjAbEYSTQ",
  "key33": "37ApKt2cMZf5bGQ8XiTzwQS6ABX6XHmAx1NDtMDBcUHwHcqohAG4r7E8NaJUnw5orypq5vvmJ2k6DgJawEsT2Pi",
  "key34": "3G3D74e6QDK89z49NUcbyk5vXYwBJsKxkBt3uVxgCnCJWKEhyBYQfm9UbbRwT1LeNWRgYgAS75HtycHyTtJN1cQm",
  "key35": "34eJAt3VXsbUrRrQNhwBfvgSq8V2XTANoWjgjd2jLby434hq3ANpmcuV8exV3RH5mDorVGoSN46oyKdUpx2mBz1G",
  "key36": "8r9UqAWagpTfK39GYy5azzQE2MMCrC14eqejNJbTPpsYSVTgDRspPgTDJhrH6ibTTLLkpW8pisT7GDhuuQUj5A3",
  "key37": "3j1fzE6wtXQqtkCoQL1ZxiG8twTjQiVf2HknzG6h7Psu3casCS7mwbNefYRNT6aQkdLN6ezwxZp2szcowXnefipJ",
  "key38": "51FQRune89PDLApyfEWRPPzp5Xm9RPRxNLUXKAZmRrRdkoa7VvS5NiLenscENq49EAh2H2RbreYAXQkVwcdaboCr",
  "key39": "3fjnBNJzUP3asLoKVFozf8undmpp1hdRsEwz2ctv5o1GUTuPP3gJhHhBWDAf8n2e36XMJbQ4Zbsippx5yW6X7ijS",
  "key40": "5krz9vvTF73NHBUhLiQ12JaPPToQ1VPyS3SrFNWJDWtGppfvkbKxU8MwZPK7czVYELQ7P5owaJEmPRzJyL5XBzMh",
  "key41": "nfKzhvVYhZfgAc6SS1VVKdvm5YRZUGZEctRCrknRes9sZj94KfAw1ENs9tHR4qvJEn6iJuihgusMQKjQwTEAwaM",
  "key42": "27rPwoQi29xM16nUDpkwZScnfck59LKY1NnNvRnZ9gvcqeyUeZMWLUSBcY4GmBzWPNUNQJkbp7A6Vqy33dhbx6y5",
  "key43": "4Y8N8bZFRrc4p6fnEALpwUrs1JshC1DiiPqiVyVhr1ZXB3Gq9Xfyri5PMNZF1WSf16V4dQrTxVWisQ8a2s4ny41F",
  "key44": "2Q3GQV98bTHZ4jxYPHskfXUi2sPYpwCfSTXrdxMsHst58hxP33MrPUQopihnSo7bWhVAeheJF2T7NsqgHxTRpDDh",
  "key45": "3SXthKHUxP8Krj2tY1Q8J5JEYAkBAFdNfDWiGBfrJUjPVxzaQAUnWKPHfpHDhJUKgPqyAiDtFufkCt35AVtRstZt",
  "key46": "3wCGAWSnLLpTPvLjxgaYw1NH4gQKTWWN3H6YJDYMptPnFZbBQG1xj25KgscNmwrnZfuB9tbGs7E5bzFhZxUPooKo"
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
