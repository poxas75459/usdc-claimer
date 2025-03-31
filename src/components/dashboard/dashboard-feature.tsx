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
    "5wR1biJbbuopbQHW1qhgaFmCbzMymBehVtjH1xx6s1iUYeKBrB3ziaWkFPAxpWgKgq6jAvygH7nmNTxHpN5cQGgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EGShaAH9AWSnX2zHcAV9XPeWZyErmCb18anyxSzXFUATTbhGWVm6bSiQhcy1g32Bf8cALEFxbwtjLbbDAbYuLQb",
  "key1": "2QCo1k9MkgZEKFFKTbqyvCoL2n541viqzBZtHGAWhsVFR5SDa3XzhEbsP7frjaeZQcoVFPSEiQmHPUHEwkkhDd3x",
  "key2": "3oe7hAqQViwma4bVVgffET6hBkUtG8Zwp7rtTrgMJRW2jbyn64o8heNDYDqMWuHwAFhGvCMzP7L3XRZPiWjT5QXM",
  "key3": "3CSLf2E45qdXYoYyZaYwv6LucjxD8K894GQesMeAdoWQPGSiLpPWP6o4PKDkwCc4K6epgeht3PXRBYdB5s1fuM5N",
  "key4": "2rCSevtCMfPrMkNwsKa8punMdnXgJ8mSzZGMiiiQ12sf33dsxjcf6MCepMBPD82kaQgTTMTnMDRxBqebCJ4YgzNp",
  "key5": "5X41cqxgYoHu3cAGY6ZaBZzPBKGLUaEDPPNax9brE32NxguZNvQm9gaMEpavxHL6grVYFbjvAUVEHqqiCw7gN35t",
  "key6": "4oCmBygyT74AkqWq3ofYnD37yeXNrPgRCip4QWQ9fKvcqteY2jwTGtEBX88VEMMH5HA6TqixPYhSDU1YvWxpBiRp",
  "key7": "HsN4VuPshVDcbhh9dohNLPE3VrftFG3rNUvoRhxjFfNGwdNUnuFPn89mWFGZTFpmm9wT2cfWCpFzMswbqqdNYGX",
  "key8": "4VFgiKoBxqe9LdzUGUMXy7W9agHrBTBvkwrFDcsVyhH5d4va7fu3XiwfP4bNVYGQ1Ak87aDTuqttCJyGLAadhYkC",
  "key9": "4bDDSd5yEdyxXZfH33Q8dCxbPjvqjRvSf97kAF5rWqNSL6Gg4zNmtQ2ZNF7MbeD45L9Ems8PpurPwjsz4jMzPUvr",
  "key10": "46BEj85nXzPktXExyEVbcFC35ALU6jzTd9CcgF5w8iQRVb5QVtBujJmPVztAWFz2Wn6S3N9x7Y2P3WMvE8brNb1",
  "key11": "4Z8v5oBS5Fu4ToSMrF5CU3MS4uEv6327dJ93zDkTEkRzE8aaB4xmBkWDf5QdjR8KK6AkY6dxd4jd1oCRcXCqfo3U",
  "key12": "gB1f9D2chVvgSXeDj42zinTsL82vnTvSx7G2xwSXvs1PM5eE3q4VZdFpH2AVUw3LLxFwWCWNPAq3bHMAAU1jrcT",
  "key13": "4W8ttiXCxpPmFRvmSBVw89LnrEoQs6XonhVyvoVgEm8TQCbQy1FeDgzjXemmX6P14w35r9Hr4tZHwMVtdeKQaUo9",
  "key14": "56KC42LMqdz3TEmmKEpc1SyyNNunjNMSvQqHg56CAUZnLca3eNSAqweF7aTsvLTvgZ3ttDpUaNETdHcoawYVQzXR",
  "key15": "2Zd14j9hBVABGZz5cG1sYCTJ4x4HMVrZ1NdDMtbMuhgXkkA4MQ4LLWw9ae2273qs7RwPR1C2LyHGcHSDcBSrB8EZ",
  "key16": "5FABWVMKPyud2u23Ya7Fs994NVj5BhmZSumwym4Au5ABdtdNUXEoqrdTMhkLSBwP3ACEaoYTNitLRnv8yQqPkF4a",
  "key17": "43vhsVUHXovdt9U7Gn4ZgDSbah8E1uSCi4jQa5zu13hRKRVuPoRPTmSKL3AEbSiuykYsbXpFYv8RcKFjzJeeWzMw",
  "key18": "3sJzRBfH5VWGSeCWWf7w94n9hhKigFRmQUKDh77QYPCMGAmUNVrBPu5kDC8EuLiZUrYZWNc4XqzomoFcFzzvshMW",
  "key19": "3CWe63pPgaaNETNn1m8wJQ29tPasaihV7h8g5JeR1LRZyKeiQ8SeFM2V6R1LGXVhJcerivpZp89JTVZbFp9VC1MT",
  "key20": "2SRFWFA8HRFkYfeubzmkcpFYiokds38smHuW9sMJPFrZSkFrmUKQvBHLDccJpigH1J6FVxJ4jmGDAeBEG1zZi696",
  "key21": "4dPJEkaBNZy66uVwigYy9V7QNAZZBARHbxTGYL1GZzVtLwDj9KYtAuD1D9FKjQekLX1AeSS3PANDgUbewis8KNnd",
  "key22": "3B8kQ8j4sMLxvcMG5rLhi4eNDUrYfLLhg9xXmFVCLNq3wX4yvC9rLAQZcQs88Kny5nFjnNsxvXJsSuYgp4GhobFv",
  "key23": "3jmhKSkSEPbeDUBD8YKZfxuvHDuw9gYjZwHMLyMPArU1kf9QFAZ1RWP8Yv7Xcg5vov6QxiCaKhdDRiUN7ZqwHtFi",
  "key24": "5P8PLajfFivrTvbnshZrTXpZsUPSfMk9TVfpxEKpLNPgopDBNuSyCg1rX8HY4C25o1v5cVseZhBA26iwLh4YD44A",
  "key25": "2b26CKyHrZtTQF4ymKbonhFY7u89rQYnugmkmLtsfZrVaskyNq5Z4pVk5v6KFQ8LytyY2KeKwLAWbGgixzPFsVVd",
  "key26": "3ftidZkKNN89ncP8xCG3nDr1Y2txjFPvwug3SfNg8haaLj2q6ccAZhEjBTk7hndsWr6PCTVPfkrzSgatYWmU561E",
  "key27": "3szQfVWLmWVWQDyGGePFHRbQookNERKDkSSuybHzRtz1rdzSv6De6NM73dU2nqTvba2CBcDxMeQmVLsTEfwhsLjd",
  "key28": "351p6HYYRVxwo62RaLMBLjcSzx7WUPpAdu9FAr2tGUXMSky19VMPNNe8LiFLdMHZeWEdRzhYrTcZx7cAUDaAVunD",
  "key29": "5kY9F296rG4BHbEPMv71EqxFJyNcpuJYMPCi2bSeDpWTMpftU17qWV4WRdPqU1Aiz7pQSyiBFv8kY5AKjU73jc45",
  "key30": "NAMN8KpRfY2msBnYC8LGDtJuYxpeNtqsjzFfcfEQkuHSEBDkQNYTjpaGXuAQHFgVPKXAi726f5GY4dBHDjghbxx",
  "key31": "2hrpmWVXiwVuJUjEAUYB8fe5cMzHfipDyZHTcDktCZeALspVhQYYmZCJjg9W68vXp8oHCbxvugB5PHVMHUsaGTW7",
  "key32": "FCW36hNpvH1AS1HPiQNbXrTatyaHHNBc19fhW3EPpz9WtfZLueeFb7DRAM6vNLPbVweJC63wmCVTk6KmKU8BwK5",
  "key33": "4Hs3K6FBrtf3hidjoVvWvho6j7AjdMF9hX5ucH3xyRzQc82eQ3vzhiQAdq5HaUV2ttRxnDmV73oCYssRfXpZTVB6",
  "key34": "g8GMa7z7NE3gbcBgbDgrmybd2gx7QaCrf8Gf1M63rjvShZsB8NsWSxz1ywU5cia4UytAtkQWG5HMyJoJdRurbNW",
  "key35": "3SQFdLhA6tvFNwS57d4CY8Z3c6rQc4F8pWeCpD8nKu6bvpbxJLEQoex4Ck4WPwXr17kiBa5ejbwnoG9ZEGDbXWsK",
  "key36": "Reuhfq91Feoktb43MaJ76fcnsLRBh8e46zYB4EJiXn177vRfRS2Pttfc3A72NMLr7SJeT8FiRLV8tZ6suZBk4xa",
  "key37": "3Fv9akdVfwqXD7Wu4kTco336LGfgUn5wBAhT1ZAKg2XvxhM56YkGYFchPRzkxCxAfVFfdxJdmg7Rf1opZ31LDqEf",
  "key38": "vUv8VHgwoJiu22L3a8ReoyvL932SbfBktmFZJA57HpoNyA2rCiUuuAi1baoWWc1wrBuBWBfij8MzUQNJpsowkeQ",
  "key39": "5ABWwMWnzamY9cg1h5WRZNMf2v2EgKmnMBvDFq39VA6cpgqWcuNPURy2NMpB9AUPDM49un94jKiMvJy5pH7Sd717",
  "key40": "2WwfJv9VenFWEYMtGuzx8yUhNGqsMaRKkYMbMZcCT6or58TZiM7KHhHHLJVoySkCykz97rfzwhiVgBgeJDTgsWHP"
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
