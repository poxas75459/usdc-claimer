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
    "56uKg9gr8bQDz3zwgs8HVSTLujaW1rY6vTPk2Dmd52HsGUthca57xHG66s7SJrerJTSgeVmFuzcoobSBprrwJrCn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "APdL7yk3d3yTx9nBnMekbxhGZfUYucrpxSvvJ6RXhbb2Zi7BEcR8ecBizyL3394dURRnMK4B9tKen2LCEbEeG6z",
  "key1": "2KAJVcK3w4om91vZrYK2sRyZRFJnHXMXimbCLTqE14ZhBuqv3cYugjkctGHsbCa9JKmez3jiD9Uf27ptbeDd9mCd",
  "key2": "4ZfqFQRX6mSHAdkozzL126KUJkCGmzkKNdtPRYqSP3gZroPB9U9124yo12pGotYp5psLi6NRbWnYrqiE4YHyN87L",
  "key3": "sgE8LTQScJfD2Xf2811uNQ3xdAjDEKUb2Z9Wu24HeEiWTzUq49UMLai6ndgw2wPDSqfneTnN7BsU8x6qEJhfToA",
  "key4": "5ca3pQY6MfqE7VH3vjDYXjApMa8DL3CFtFEcifAmVRt9TpYiC3oB24tQxLBkkoLYxv89PDDN7U74YZpHqxAeAaw2",
  "key5": "5z8nJcxzm2qDA6fcJpZtKzgCDM9yQJvMiZMRL6Lto4SZzc4eeM1gUYNnyrBssVhJ6ebdYZqHUxu5K1vAzp5FPWU",
  "key6": "5UE8MLsB4Q8iXnkpacg37HCtTj28Qw1Ayds4CenBc6poo2KGtgHXMYLGJBBms8X4EQ2ANwPJXenQx6y692WTX6bx",
  "key7": "2gHJ7d3x6tEGqm2dmFg89ajdhzALSPNnHbwpHTdppRwES8aAjqcFUodvfMxJpVyCcWjk7nL13RYM3WHF12QVZacQ",
  "key8": "24L4udop5CHgfYqYr5tWUkueQcB3zdzEwAoBCQMRqP8A4gM86GomA1kH8iSsp5RNKByA2qdgGSi3e2LaSyT2QHF2",
  "key9": "4rCqk15Lf1z5gZ3iEegYa7q1esSojmaR5zU8M1sC6bBK1uEppMUcPUSZnjMyPsh63JDGXX3v7JNsaJLV6PiWyKXb",
  "key10": "4kV61PtvC7ZSsi7i8YKzw4M7j3hbqYKAkYZMsrVZJqkrUogBmwea6F4HLKgH8FJdgAQ5W966zYqTdzVMizhe4Fu9",
  "key11": "2XyQM2k1hvcSLaXu9hPWSbi1b6Y59HdJPmuy9FrheucNeyrhXjr2oNYeyE5GP6KoVKJuqKhLrMRGxC17YbyVbyTM",
  "key12": "6YdvWogj9QAGw8oLN71wLQw6iqKYNWR3mZi97U2HFTwUrofDbXu773gca8ZWiHzsbBrUbfe5t5smq3krUW8P29K",
  "key13": "2QdmNEN2NgyuG62jFZ4pfpHhZs7jVKKWmYXyQxUq9QGq59WvJbf2p4CvGa61muN4g8tv4QYcPbosQHrZqnTDicNr",
  "key14": "2w3Qrvu2NRpeQXaDfPh2hnshWuREaJpHxGy1SdJLhizL7aJrHE2LLYUXXSSgQdc3i7AYUKCMXH1aM8D9NEBCj55G",
  "key15": "5Ls5kQDqzhUqzrWygWKSVRqJ1p1DuDuAcgQZBFcRHsjYPRXn3FpkmNb3nZcqPuzXbeC6Yyw3bwb2hXeh4zdiu37E",
  "key16": "3fc1kzRhXrN31vpXuUZBrDnDoQS3ojtrAv2Y5q5YM81prqwnSFo9tPUfnUvhA1Pv42Z2Sf7VijhYcqBryVowkttc",
  "key17": "5yGRErwkdqB24XoGVU3iivm5qa59BnyxxcpwTgfggJ9zgrZuC2oyRmQTEqqsq4aA4SvYJSyQmFca1X9t3votrdMK",
  "key18": "2aL8K7hP8ZuWiLEe3Baxy6WvtVKDfB3Ph1to93gFjp4tb6ozHsK3kgWoXq7fhU2GcqfPXR2YFuE3ds3BcvgLayrR",
  "key19": "2Ykq2kkt73JesWja2ym4ftqCQjk85eXp1zkfo4HnY765tAb5Ww262fkYUFNN5YtcadPydud1Z6PQahz7CriQkV9q",
  "key20": "216oqFacPQ3N6VA9jpYhi9bjZThRBsFm1ksZkVUE6k3SRFcLTmj24TVRJ8KhAkkpnxjSuDcRiNo2LSiSVmRpEXne",
  "key21": "bmg5V2nZABim55SphqaPnmAmG6cbTrtPGN4eK7Mcc18T4fkUSLgcNZcSz1yf38xoYifsJw56QRMFkdwEHa5uDWv",
  "key22": "67Tm88b577UPhFuMvnRwFwGE9ymt3jaeiuQud37hQT8R2cKGJjvuno4PimMgVti8agkbZXN1G6rKmPSmbKSubAnk",
  "key23": "3yvBZKqvnSeNzPFbEWqAK8kroyFERmAUVFjnLcsuFsegWkfnU4JU13L5Mt56rA4kA12cmkK67myNWs6SiZM1X2kQ",
  "key24": "5v8wvmBVszVSYQdTAsLao1wP58taUQsVgSEPUjf5WeGKW4cfEdSmBRfDYpVWuwNc2GGXh5Kdg6ygBP7mTA5C42B3",
  "key25": "5U1M1qnQhvfJtcrEuj1QtkGmeACGCs5UjwBxL3qZq35rXZMXdwtP8pukULJMUbNyJ3gUEYsPyTwo5WLUNwgaC9oh",
  "key26": "3EMcsGrydg3cAVFGPvDuf4ZPaLmAQLgADjyxR5yhxzF32HuDAS2HmbsMCA2m1qWEgPNKpMyMc8J4aXeecxdqs5QJ",
  "key27": "46Zs6mz7abF53gyptiZ2h7SscJy3KYg43ebrtDk2wnvVkPr3XWqzPV3wSQYxR9VJJjDhVTra1KLWRWMkSGLEEbjF",
  "key28": "2pfRQckpSpZqDJMukgLqUkj1C5mpWjFrYAsLpatM1xUudagHG2nMRt2shMGRhr3cxcCUTdXc2KbBRJekBy8TRSRQ",
  "key29": "MyG7APRs8ur6PBm7vMkECBsJB4PAUa8jbjp8CDvkdUTwufTs5aKfepBPpJfuvDaQEfK4xLFsuvgzkiaqPprd7Pg",
  "key30": "51571F8tc8TKCjyYbYNUxDdUgQKjFy7uCshUpSsrR2fmP9CMn7T3JBBmzhZjwpuhdYGZTtJ2FAFWo7gTv2fEHmvT",
  "key31": "5hPhtnT2iiBiJ2xDfNszf8LaPTqSoW5reTXzg38kwhUfXxAnJbWjg4SWVixKFCJ2BTQjjbJgcHXLCcomH3efqDjM",
  "key32": "4hCRq6NZKVrXySz9u4Q5LseRekCTc5XU1oaCe6mPfFcWEF9B93jwX2RC6bAxjN15tHjh6iES4yx66aX6WFz3jTuG",
  "key33": "2JQjCLmJXbe76fg8oPPq9gYimTHnd1kShsyfzGVtXr44BoacKSnGonkXwwiNxseriNGrfuT6qvWVyLJZSfj6x3Nb",
  "key34": "5gz8tEC3C9mNWLFsHmGW4bogHcFLtdnNsn6iRrS8jMRXefgRCc7HjHVQMi77kzB1MbLJx7SfzCVVpkBsag58VNGk",
  "key35": "fxZwzBZ8bxcECVRR9dtK2p36FZhdM2ASTVUjzgZBrpr16JkfV12kxbYx7sMQLqqC9sQ1t93NbWcd1zfPK2HnBBT",
  "key36": "62ZjTVn8cJ3L6HpZS2mxkbZwmoxPGfhN4YkGWnvx94fUM6ZAeGwG1AXrkDSQDC8etFw2frgASga7MXCedRi9EDVc",
  "key37": "dMUHrHAAfRYcxSWfdK8sRWz8jjj82WcnuraA5VdZSGymTB3Hq77s1hkKTLnv1gsaJsDMrP51PVsvF1ghXm9Lr31",
  "key38": "Kopfxj29C96EJ6JDAmkt63dD2yPzga9pqCdERDZvPNH5Cckd8rSrG6TvfkcysbwBa54AbVK3eWgzVpDqRFRedNP",
  "key39": "sq8p7dLp3awiobSftLeXn7LVZPoFijqwrdUvMC6NqDuxH1WjYYXg4uHHFEKfkKvgJyKbef6nYyc36DWPZUo6KUX",
  "key40": "5Fu5cc1MPQvfDQi9LVJtZoujKtKAtggX97jKj68fiqCEL85y8atBxoHiCFEmzS5bhPKMvUVdAqqnb85pwSfmQ6VJ",
  "key41": "2FGU1UYmJE8VtUGLyyrqxhro9VBRnAPt3gEtk92T2qzWPbWFMGgs71VrtDFjsHNnLjqGaK9m35RMxCSamapUZjGU",
  "key42": "26XBg9D6xpZ9PgmBWsHdEdg3EEmk4YuSXbayiXxXmbaCdTww1RngFywAZwfgLT4yoJaCv9ga2af597cvhazRpKPN",
  "key43": "2dKdP2M2VM1yNekc7D6hSztP8PzpajZWnxopPuJL56YGC7rUvzESynnxpxrC3NR879TeDPYW4bTEAQRsUHMdiKfY",
  "key44": "MpnWxeLq7i4DygF3xdENXG4evgufUVYsTgGDqKyPcSZy4ZCj6EGMRpxPC1YTBup4X56UKr1fZNcVZf8Ggpb8Tm4",
  "key45": "5Xp3Tt8Du8pBTg3MbH7MumHTZeu5czLnsor26BfgKT8XN78x2vrZDZGdTQ9R2yw9njn3MGMr1FwZXUEyQhoZfVsa",
  "key46": "GixEfS1xJUDJgVvoGUSLSPPCniWdgPrRqJo6bYCFrf93NCURzsPeXyMdCZnsfYWPFj9uqkcFkMLVkwmrmj3gjuz"
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
