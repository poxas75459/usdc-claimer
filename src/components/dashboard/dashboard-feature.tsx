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
    "5MgbDMmfG6P4QjR7XTn1iBhXD3gSoYKF323PN3DXF5cmtiaFasLGBKDeL2fZhr3wBNTCrgSfrbRoALvitLDGLrDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NWRkPw65aeF6ZXTrg2XqALhjZ4unHgvUn15TGSdcSU2HRLZATVwrkC74iwmsRXUhKMZB4uaptmxtRBJ3znN1a7s",
  "key1": "AVVjRqSA39zfwmN8MvquJ5iBBWmeE768J7RZXS4VTMuWGtVDZ8B1q9b9TzEbKvF5iqYZ9yUKiw8oZBcHjgMn6Qk",
  "key2": "3NYwrb1vtfefBMZKhzUMr2didzhF2ky7Y7VY3yVPGRDbNbA5fFMHTPUNeiJm9CdcdG5ixjUvUSaNUe2esvRQqad7",
  "key3": "384ijmviuphEzLD3WwSrm49Dm537Uk8CYxVLWb2rP6ChEViGvw7J7egwaLdoPRTU7LNkqdVM9Gy9ufoGy6JoUEXV",
  "key4": "3j6PH5ksqrGqamrtTovpsiF8So6YUaAKsVa1GVPt77Hc5yMgPU5cpkwS8NMhpsQxzsj3A8oHWVka3cY9FfQxzKd9",
  "key5": "4AJnAwgoRXPSQVbJBMXgqKRaua9MXZF8eK343L62VJG82Y9WSPM6njvnvnkJ9e5w3nzvQvKsde9dSLaSxTvMeD5m",
  "key6": "3fT9sNLHyrWLwQbgunKM7iMUChHrvsGZwwxmNSywocqtj8fNSnqzf3p5nn2AvuZLeKuWUrvCQQCvK7o7R2m7xSHd",
  "key7": "4YcCuJyJPjSpNPm18R2a2Ya3DEAAdhAxnHN4X2CCdHmbX9Y8UB38zedysjt2ZhsBoYJYhXjGrHtRoM2aC1TRVZgr",
  "key8": "2qWACiJUG4NFpyyR6iggMaTr1BtTdfwwTmBsUcj19c6416kfr9j8RNBo9XmgWFdtp8sK469W6LH82CeFoM3L4Ygx",
  "key9": "3LCgstFdpNHbbttomLFgib3fnoW4VEVrVsSTdZTyqywGHogXVWkxY4UQmSzAtzVxdLHgp4NeBRYR8WYh2E617EFm",
  "key10": "3WJ7kLefsfJpdfYkR2ujY2b9kjBezcqni9syvewuNHAEy8sgQSF2xVcyHfpRVtrnpCQPPA5dwEeD1sLVf7KycDZB",
  "key11": "4H9M3b5TXvnAug5jzpWV67dB1Nhcfwm555z2XKW94aA9KMxVAvxePNzzw87YY3hQVQfv9b7pepkzcQddantMY8yi",
  "key12": "5uK1QdpiTr2oq5pvaHMrhtYFF7MohTY2xhartpFx3LWvJ7ym6BhtdvSz3BwpJCnx7kgxMFBVZBegic9PQiz3RKA",
  "key13": "4wWrz7TayucY4h9bGrU4yqWYtV8TsMuUVBfFFzTUqqDgZG4423HwzeYjLhm8Hm7GgVNPE5US8dPS7hsgGckzGEg8",
  "key14": "4WWCMvvLiXzPBP4AtWtVz8mssBGSDpY4MpuKhr6qiL9WyVHpixcqk9DM16s4MSBtoTex2RaX8GFTMaVio8DJQ7ez",
  "key15": "zLZWQVHcjDEBWtchhVw8w4UukqbB4rVtZdr1VmhhRDUcmsMrQsyGroL5eTVCWC1GnPY7ECDv6ZUTAh31ubtFkJj",
  "key16": "2YG3Q6Ewop9YoNhaGqWRMDCfPffbHRPUM1Y878anWhAEGHgSXYmMjFW8TfYnfUauUX6J3A5er3dLFLZzmvaZPxTJ",
  "key17": "4MAJTfPZKy4FB7RqcdGaKFEkNkfQ2XTVd5A4PDRqEUVobFfFjfG2kD8GiYGgbAiZuRJspk8Vimn2xgxjjdV8rNwx",
  "key18": "2tQje3VW6BR2yboLyAAPviSEQTjQzPLT2tGUJ86YkjN4o9oNTvjV1D64FQzzbjPDUdyw5aZ9uvPnCgjvWJdTC9r1",
  "key19": "27KSq4hNP33cYosYspk4YiiZ5usGe1J1d5254tHDCm6bkGaeFXTD8aVTAUCyvb9RxCc3CS1REehUzqJuRUFhP5tw",
  "key20": "58YFK9Zh713wunrT8vxGVWS6wRZmLQ5Wf7qVPs36wUbXL3BLAp4MWqw1CzbPqZyVcNZqLpgsve6FnMpVzeRkcSFi",
  "key21": "2dry1cJq2x7gXTXhbzDz5EQ6urG48TEQbuXmKVmMaPPLqDcJkuZthSsXvxrkiAjCChKSkfRnCXkCEYFsRacwCjAV",
  "key22": "CRn5zvg8mg9Bypm3YszQHUFDGLg1BECSB6oKPNp9HBi3wMpCr86PY1WbqBFWDoKA7BuUiTDXpYwS6npyu9onX3r",
  "key23": "38VvQQBvJwnjy4p4jNLKjFuQeq9kqUgpf3j8NqB7JPMMpWkcBQQaMcVs61tVdq7yCTZmdTpbwaPtVMz1kcATNKNG",
  "key24": "4w6yHgRwSmXkReJh9zcVBjQrmrhYEjfJpCjEMM16NpWZroCkKSsPEqbvB6ErAfgxm5ZtgX9RQHYUURPrXu7J2oHA",
  "key25": "2he7RnGHWMwLHPHsXoPfmosqSu4pkdczXvVQpAnrQtPoXJjswNe4XmrwiLEAQLESLfWQqcfmTymEHgKMbusgA668",
  "key26": "yHqFyDxb1trGJtQ4xJpfXAuWXWKDutav3FHbCQs7eNH6shjiBzo8iTrLcGv3MN2XoKEhsujUcEKm4qczq6ci5h6",
  "key27": "5RHTDnDTtmiUSoEoxWPmPru1cNbn9SZyGULuLezncsUZpih5wRtwLJ5T6oFUpPKbo3rCVjJP2kLhYUwRh33XfHmG",
  "key28": "5VmWmEamJjuedLQYuyPaWG1mrs4rh3bkV443denbCEG1fxRHqXLpLQbGC82iN1DZLNtCxA7MVRnTD93ZCFsowQjQ",
  "key29": "3qhimbdPX9QJtr7gmqfAMMcioH1YmkoKcVPNTaJzmhgPs8JbFJAFDRfbaaCtQe8gSwSGu61A3VZqbVznDZu56dik",
  "key30": "5QxBHV4XenfgVbshfBnUikVR2ktSQBhUSgDJshCbjuYbQyDeFC64RhhKhCUiRukyb1VNMABtWVeLJcGzbcdBZfa6",
  "key31": "4mGXezd9WbgG8kBFtaja7DkRSbKjkXLE53qkNSG98354w4k3PuaNdwivjvVgbs4si7mZphCZBAUCv1yBxxaA4vNN",
  "key32": "5RP6TsBLWLChGrvoD49TQxRHaQs2qJ1iR8F3hvWppGw6xzGybpg1Ucj5CtxxQmUsmHH9bLWWKJa3nEQGfvWJNsGm",
  "key33": "4Z2D1wcw7qmcyJBwBbNrfUnpb2UeamJVzc9qeB9Qx2RtV2VTHRVgMDKr8jTAuYv5DDT6yFxRbC9HT1QwqSVVBijY",
  "key34": "5NHuKC6qRu1iz26t5Ww6gDRpt4xiPLFenmFRAQwepBynH1aWV4dNZcSbXX3Xj5AGQ8oPTASNTMPofXbGsFQG7vDN",
  "key35": "LaqgyGSss7SGS3y2be54TQFX1MH3cX8kyiZbqTbLfKySzEB4GKZCqJYechhM6Sv51998NrsTkZEnmTa6BBKE92y",
  "key36": "4Je77JwZzR1LWsTLddFjTPyGjX5KABEhApUfMPWGaMEocuxaBQ4adwqDhoR2a8ArBNtsNzm1rktoiV6PSTMBp9oK",
  "key37": "3dinoFLECk3GJCFkkjcVdG7rTcvJzNh37bgzqZPG5gTqrCe91Maqm4RwDmX6symvgG1VpY9mBLkh5XnTPUsAVQCY",
  "key38": "PWjV24WV5v2vxX6BJyTU5KfoKZGyfvEVB7yA9o6czc6sZmw8QVNYpVUsCuxAVhPtiHKR8fPAXRqHbrPvJw1wzNZ"
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
