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
    "3MWqiZz5Pyw5Gs2Pg5QqBMNRK7qBBVQFxrShisiPBEUvsx7rkwC6HJrx6VpWWfFgpAbGsLeMy9BPEQYFMCUneVeq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pyumonYLzmB5LaGMgjexT6gJ1hodNqt5gCBFfkBm4ms3WhZRhLq6fFsmatfjj9ZC6QH6oedHVPCFWKpomQanPqi",
  "key1": "mYvjzLThVmasG8LB6oZSptBYZg9HtzMi8P1tM5mmQUBH5BxFhqUKzJhhNPbJzg1CgRboupYbfLa45AA2H63B2cm",
  "key2": "3UW9xZmPatb3wK9G75ByzmHKN1ntp1EGh2Ksa38EoBkHEHUZPhKNgtAaxLH3E9V3eEenpGCou6v8AoHeUbd7pHV1",
  "key3": "5XoDghCQwsLy75NxqsZELHM6T2jgKDrjE5NSbPgpJqmQGSzzZnErdn3VZRNs8GvHRCvPU72Pcji3rsBC5JAS1PL6",
  "key4": "2U8U4VZ36tUb76u4YKPZya2edv9pYXgG8HQwHZ8BXGWiLmdiPh4eYPFZmp1Fma6PzpMRkVBNTTnT7fPggLFPdw8M",
  "key5": "5npBt8PhkKishY22VCDFvrQXrLTXUG4AVWt1DvDgjxaeyBj36yrJ3zHQbHNiZsvVNMvvZDLCEV6y7D8V5ZtfimZ3",
  "key6": "hNdBkSjSqeRFDNsb46bgiMnGmeKk9K9p1mRiLvmE1obYKfpaYy7G4T31aSSXqEHbAwcYpEMmahDMZyokUybKp1A",
  "key7": "2ac3dAsnokZUXUFzLeAyPe5sc2jfuCwzpC2VFfefGYtUTHqKmjp21aVujyafUWMLQG6ARCCErEV11okdtxNzSZDT",
  "key8": "3x39rcac3jksMMdYkypmbZcX1ag6D5DB3wnVPzBGyYsfQRWvc3tHJCbRkpNutPSfGLAtAn269Nod9e8846ezhyj6",
  "key9": "5gt9wEPevwX8Nw1WWxZBitdGFcZaHuJmqQtX7wmiugPUJSr2EpsxgQP6MxcNWnJtbomxrMvTbHtkpavcaAnnASxY",
  "key10": "2JXYFVqoEZSiw9fsCgGHTcQgty4U9qAWnHPV3q86GFr99mN37hKch2igE2UE7FZVFLeZfJrxPWKos5pkxzg3RLTs",
  "key11": "29Y4MLxkVvDJLFdRUWV5NAJkULEbkM5aLHXrcefLVmoPJZEFWrYoqV7DeS2E48MvfadH4CPza1S2EE9cWBoicK2f",
  "key12": "3FKAuFZ6Kzbs5Gw19DSMK72W9mN3JRYDHpFzgtx1zbb7CvmiE7gg1h5egKqFSihM488u25WdtHJ7vtbprHR9Jdz4",
  "key13": "4r3hE2T9xp5HejTDYoGMNGJ9WbcKL89HErMZBzaTQdGrbV51uRVAGNnacTMQNSrqi2ofAwc8ztb8W6dPE6558tnj",
  "key14": "4NSV9gLEmE3szZALQTcMb6TjBLDPozz7Vvz4ASFPQhEAWMCb7UrpmwU8DAczBwAQApXwW9DMSxcCW8yHiJAVDN2S",
  "key15": "3fE2tB4fP2oGTwbDJvZaLutT6tEzxHbcYhddTpEu7Afjdy3hvJ2RUehRthos8oKKhvRQBqacyDLaSTo15ca8YU76",
  "key16": "32vhkVodHPgSSyAZFa2tPqxugZ1mWWcPm2Z8o5xzKUaJKHT3vCdQxCdNGE48R2gKmg3k1gefFVVMbVJ8PytFkfHU",
  "key17": "38QrQAwFpRLb7n56RDBr2pD9LAkaAmyAqUvP6uxDR3HdyYToKQ1up2dHeoBByzwEKhohLf94rG9pMXQdKVyD4uzx",
  "key18": "2YsX2VtkBmMEwrZMKN6vxbx4KZV8EBsiggUXsTJJcsCtmnwQD2wfvszPd8fRJTVjWBeqjvXvULoo4ZpaYn9pajBT",
  "key19": "4MTwY3NdNANjT2E6DtCU6fv4PFZFBtoo1RqeUv86J8wHsudFj9mMpRbCQnm4uAYSrtopfAVFDjXHqtgTkv7VhyMX",
  "key20": "5A6vkybmPjLLLrcNy2Fcsy4W5C4E35sFd2baAvu88JF1WaywXDYv3u2CNFZMb4YodGXEz4gQXTF5AGXJdFFv7V4F",
  "key21": "54YLc6FYC82999XASxGAEDY6n9wL6BZ8EvKx3nThtbTEinACYAx2ZrxCrbenrjpo5aX3BzEd75fMTHv1J8TU8TGm",
  "key22": "2t9Vr1UtCvUYuuLzKCeh9tEEfp8UEVrSnDZVbj9EKznQbSJUCNiCZJvHSkGhE1yZeb8EwwPuhSaa4eKTD7tWPGf3",
  "key23": "5DmainuzRa5uaNPBpd1o92RJGi3MosVPtfgUt5fSyAew7w7mg8H93t1auSGZY3EiZYgeEUR8DZsV8ngXZaWRh2U7",
  "key24": "566EzYAPcUcJo2rKPFhVVvg7cKSQ5LRMA1k21gVPbGHssEZGpgBeQAQK1LCWUhyxNVyUKj4SXwHc4ssVfuney2FJ",
  "key25": "2WP1vb5nnQoUm1DMxDvcKyiLT5kepd46PRar2BTwLPGubGgmKurM3BQdqq6n2K7kLncsCf5xw7h2Hwax6r1yPHQ2",
  "key26": "3JW4oeSH6PMHyfoeRanxrSfQDU5n8hANMZeM6SXJWNmv1CfBxnRSQdHVdUaLwPCs4L4d4q4bpz6ex2VrnePQZatT",
  "key27": "RAWjMob2gbBYevekkmxDAm5gxzzwwYk7HTtCruF9JNaVbWEcqLGEiB6Fvuvnb9bLKNW5TWF69DtTMxawnecyK9N",
  "key28": "4f7cHmJRtWtcxLUjH6HSp8vCt6pJSGJwMas3hi1MMpLTLr3Aok2JvVrYhusNX6wAP6UK1U25XH4MDP4KVsdHy3Mr",
  "key29": "3e7Znd36SXTR96aXz2RXg9ziUieUp87yPpowYDWkPu4beqe7S4kS7V1sZD1vf7hCgpJdDfzfx1QxynQRxU2u8WMV",
  "key30": "4N1Hqnq71E1JrpGNaxc6VwQUeEfjBNwt3EYS7M3S6cXnv1MAkaQsiqvEU6N8Sc7BX8vNtVZZSADkDZa3JaDg25JK",
  "key31": "3bjxG829qT2eQyTHqJFi7C8MkY528c4oK74V5JT8PbZp5CKmSYbJPV4a7qbKLz4iex7iR4Af9SUNA8UVUbhDAVHM",
  "key32": "2umU2cqwNsAbR5Sq6UyCtnRKji3KcQL8fVsQKFRRiBjeinYgFqpchLiCw6swiKgyNQzRFa1FfqHaCYk6uE4vPoYM",
  "key33": "3eMxscMNMYRmQi5cEfaz8WYQDCeY35L9UCSLAFCpjueFSzAqeTTpXCgJfMXqibue4LMgKySo3M8zydK9o7dE1GFf",
  "key34": "4EGux9dZwWnJh2hjYpytvLgqPrf5CVjvviCHs5cCXaouaSfA4fjLJFLVia4tZWk2RsLWVQ9uCza4sZAsjbir3iNZ",
  "key35": "36HC8T5ikVyzUSzf5VWZnaMzYtNbSX8pXc2rgP618KoPJ8nBV7P43rLwyce2RH2X8mZD8ZC1yNufLbkx2iEMG4s4",
  "key36": "52hE3goJz3BPJN3HMs75KoEHB6ML4C9sKgTqWstNeCf6A4SpkeYuMFNYRXKPKu52JYwHWcDwx1RAqB2vpij91v4f",
  "key37": "3QZggEBm66wMxtryK7MLs9hHZHTMaTpfkTcfjP1Xt5MNKCJiPYKnHnqvfKrD8HKEM7M4dZtNCXbanjrWZ7j7hS1u",
  "key38": "48d7qe9bQ5yuESvxBWS6zyozCLHhapm8CPkwA6koxCaXhviuMvaVFT9jxdfiKy2RfjxZqVanASRCRQtVF9Hpo4fW",
  "key39": "45uT7NW56TpkdgqLy2TAucp8LnrzTRgevahPcWe1zTcpgNBKTncbDBhHUfAM4z7o2ia3w1siKmQE7D5xTvaoapns",
  "key40": "4CnMEBuCbhTgcyvXpoyviEg1z4TMojcKcRnNcKJDVY54cm5V6sCQXphXaZdzRoPC9edECxy2cnAsNdhmX1JvGZk1",
  "key41": "2UieeekEqrU9JzUQmh7DNQHSLxwu4JsWvqnXr1xQQjrL1MMmc67GKES3tu4kpCevvzb6P6DbS9E52w6EqX5ehWPu",
  "key42": "2biNWdXQ8TY6NiA2W7bPyjfAprKNP2tFUJDMMtJSkYM8bSNUdKvvYZxdynXw7MRD7YTcSR9XrpAww9Nfn9GiueGR"
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
