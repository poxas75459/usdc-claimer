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
    "4BEkKVXcZiQNDJ8iDYGEJZxvzJHBGZgjiYB6XifQpjxcLVnV6pomzNVuEMHjwvfFBBDM8W12nf2eEwK4PRnSqDGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MSXMK1PexTQxMV2qMbcrpA4GjDX8tmJyvzCbs4Yzks7MquJ1AXayaX2vWU1BveJ52tp5vM7bLHLrRAGGcttnaTS",
  "key1": "QtcbEZZJkJe4kzMpZhqy3bZAXfysnAmuy6gdAb3zmp2pYnwLouhd9NZAtMePJTZocXXeGYNWRL6EMRUPFwE8YcV",
  "key2": "3VgXhyU69x4W3R7C5wpUAbRzW6qytvMNKE1MSPuG9py76tpYDfJNc7XRgm9nywjnAApW9g9x9HZwynUDs8saZYiA",
  "key3": "RxfV69njmrJUuuwPSrTHrBZ3KZafBSWmXfxy9HyDMYKJZcW62ZZP8B7KBckrcorjvqVVugHtfmWPv7sm4GAxBFu",
  "key4": "2b7NK6MZ1PhaTyiFUGsTQtaNaExDSdKi9z2LKecPc283eCePwWifc6bERDfNSW7egfnD9wptzDRMm6dUnDZytpgm",
  "key5": "2BYpQANqNLfKvez2oTobNcbtfUKM6QpeaKn3EUWs1uUYctw2nNZsQu4sAMKRsVHEbL2mnk4wSK4AtejNFuxkR6DW",
  "key6": "3cy3VgUMbddoRkAdEAPMsrHCcKYGDLWK5t4W48PUucx7zJ6g8o2ruqKFro1NJU6SnjSzEeX6WZ2U7tMoJq4i4SM8",
  "key7": "3HHjSfcFKbwGSoGBH2HhWoucAFt5QrUQYcfobwXJp7XKwxahG2FXXHVEERJnrF8P2W5VFyP6TcdfYVBSFJftdUVF",
  "key8": "gDTnJMRBBr9zgD14A21fi6qmEnbGzbeCVwRNAsD12krbLx66HZcbT3AickqwgtLNCRxpb5GEcCW1ghPT2nETGyj",
  "key9": "2WSkRtgRpzLusfG6YCxK9ccdwHVoYiH2iBr9gn9D26s1tpgpvSPLNASdzPQXcwEgSEfB51iVc4sgq8sCASqBQhAn",
  "key10": "5YeiEgqJ15NpQNFnV1n41BHb3Gji6ttg3rkXtiYsC7MpCbn2KAnE7V7b2hAKhjWPqTsZq3CNwowPGpfVCwQMuTiv",
  "key11": "37biywDL5nHtSpRu6qWqC4tJQwcAx5PrNcJzfBnCHmvTpX2263JRK1aovTdMv5LUnex1VbTmaV31dEC5khzSvyxq",
  "key12": "4HyccVPH7avaw7i6qgvGLzoDabMdAYGKoMv5ScrQHkUpAnWcadubutZhpWgAE5SdE2xw5UZLps2P4U2rWh1rSwzf",
  "key13": "2BUS8CazXoZJPcu33VREeqJY23YvEaWbjoTCpETurU32EQFyNdFkdYS9xc9o5wAkFwjC5gFhmoyHBGjdQcsTDJZc",
  "key14": "4FninkYTzXQ7CB8oB3HcHrYtKCpJtDjLQ21ySBM6u4tpoW7bNsiPuiJjnEgnVXRd9k27eUFesjMBpxj6A1pooPwP",
  "key15": "2VVV9NYpPhMTBExtwyfupaRLpfQZjyRvztEufmWWhAhWfAAaEPXyh5F2eeV9KdFjdX8PNbsMoXRo1GhcF1VuQWdU",
  "key16": "4XFa8eUydhqUGCun8kuwhapY9XXrM7jW9iQLHv5dma88tVrm99apE7WkxCkWfT1VknWfVMJPYorZqYPv8Tt2QLFj",
  "key17": "3UxgQ8SnMtVZyVNgYLMiEG8fhcRCs3zz4eCmHE9CGZRUjGuwK1Lj14FLQLJcMkCMavJ2bVP9rVatut8W3aSA9iqG",
  "key18": "2hq6VR9axipVLKf5pNZFkP68en2wThuVkTLBwvzTSkSCyyhv2WDDifKRKpW5PNnXco6nbcD8TCgq4PBaUFnzqrhL",
  "key19": "5cY62R9b9TtU3MCxXFfbW9VexT3boXWgFzxyVfZFqavTRHm6yN3JcoM88HkSyqjSq12fxWjYJhWa2FrrgQY98LbU",
  "key20": "2L3DvhoEz6GjskGZ7mhsDYDB3obZfcWsTuHNDB2m6PxQCaajqbgY7JCsLEWRqeeVzvKiSXgPZwENmvYQAs85wYxu",
  "key21": "3BvQgjgFbR6C9dYviBVSqo9aHRuwkmt7LYyzfi6ZGATahRTFV6DpuAsVATAK82bsBs1fJDUdPSeGned8DEeiJMZt",
  "key22": "4eGbp6T1veHNqZZvsdDrCF7kidBjLS7FFv1jDUfhxFczHPBoL1q8yN2XmSRjXwFDGLUQTW6CHxqRwSmmQ9tNBo4u",
  "key23": "3JQBVuaiz1ExbF4JLDYneHXoYfmKjz9DTngJo91HKHCHkswDMvRkhAKdT5mCPKJNNUrn7nSx2FLY3ie9NyHdrBdy",
  "key24": "5WqHZGGNWqvtxNqghwTFCf5LHDeHamSPX7LTgc8mjjEmVyq9ssSJkdy9fJz17Sh9jf46q4hH6F3fwYRUeYjCrLMY",
  "key25": "3CcsL6CGVZqx4oT4r7gfZiMmwdY9RCNXrgtWhgnM2V4v3EiWHAgkDYL3M6fimEmvv1WJH7gusYipptJ14mjnS89Q",
  "key26": "2eJ5MyxvuYVVWyFhb8ub51pPidgTeDyy2wqJcNwzqR4R7WZMF6yXCUzcNFVLHxsBVbWrsHHiyqPPHXuqa4XHdUv3",
  "key27": "4LrCXqGabtgsfqqaXjDT9AYK7bP2VVekfSA7q6pYQmZg3x8FGMWBi4DHF3RNnSBjUhXQY1QH65kM4oQyVcpg9aGZ",
  "key28": "5hEg1nv9gSnNKRmwcwrevXp4FWMpuwkeWtNJcUk16xmm3qsKvhZ2axD4CU1ZpGWnUwdUKqG9q3gehEywq7tEuwMp",
  "key29": "odkEUsZZ1xfqRudD6YXeDFWURAM3FB8GEjBxg1165ESLHMnekLRBwAUuj8DnH8vixNeDKdBRDNHWk2dDsGQD7Ut",
  "key30": "4WzDWVMPfWp1uUb4RipYrayKyjF9CxvqzhuYgJk1tabfo5jPNaMmF5xqZJ72bRCabVyiWd9esj6DMbKH9MF3Zzun",
  "key31": "3j1WYuf7488PNx2RB1KerhkbjRL9Jd542vDm86F1uM112setLbVjjEqNawmQx7zc7BwZGJwBQ6ufE5St8AntnR8i",
  "key32": "5Xcz2SDXHcnfp8DEN7z9HfJLvtdg9FDguxLJMmuRT1S6BmdkhNYZjJwAMa63sykaRkSZyJM7mbSnY5rm4gUtDiaW",
  "key33": "iS2zXfx9v5HtAhFyrkKYuVG6pv3voaBophD99b2HNzysvtHeRsfPXs3wCBky5KTi3ZyKKmUYCv1CeHaVa9R64s7",
  "key34": "5Go162bFjpEkSviaHefWRrnsmaoU9GTuWTTEdcNZyvMRi4aC4g1y2VTqqYmyAwpYTUKD1GQqoGC2s2FvGVe4ttdF",
  "key35": "4mSvNSkv88WcvAmDyg5yRGBsjGsqJHE7QNQ5XXmV3BswMjopfHFe2AkPi5e27UGbH64NqfYgo9rcMHa4P5vnwUCS",
  "key36": "5yRfTuaXrPZmYdg53BPFnb5Zun1Vt8i4ee4fpu1jiukuryRm39EQynwk3bR5tfXJpB6Y4zKGAge51SkXn4xvWyY2",
  "key37": "5bejUNctcg3p1i2pMceWwqdCPygSGC5cA84TA6Ngua3Te4Tsn21s2DPdqKY7oNWa4WBNceCtasZFTNKPUJhm3T2Z",
  "key38": "466zHuySd3xDRGUFt2SKdbBfuw8fzoB3qgsFNbbH9AMyDnoWNdq9VPqVjk785JFHHg3ea7jPJwDA38439912RpKt"
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
