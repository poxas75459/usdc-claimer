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
    "48UMxmaCchBP1szT3DLV5iTPHVVguWmmXh747A6GNzdFhjpUf1Vu7rkK5CE9jPrmwnKoE8cU7k7fBoaYCDgrgaMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36ib6HKcahFeVAS6taAUM34UhU2wJiFJ3v5U9FAof5qv2vNTEsvhfWFpwvQTSYPKZ27YM9W6FiciJ22nBmNk1uKY",
  "key1": "4Ju6wByAiEqLUkRnLGAPq9qfm8ffn6SsF8y9TfcVmQivaEL7PTHf21WRTNZMccXnuTv3APXX91Jn4ALUetF14rkE",
  "key2": "2SYKo6kzJZUNLSSGeKthABPmnES8JEyfksyhSDDHDyUUZ9BRv3f9t6NNwZybE5k86W1t7JRXwf3r6TpNSiHyt8zh",
  "key3": "5GLwPi9wmA2w4vNvitF6zBaY9s7G65NPW12hT5v5EKYobpoxdMjAfuch1sZ7DoYLsbYiubh3fLZ9FFjkvRwAL9RH",
  "key4": "3KhffxFNWHAko5KWG7EHzrBJTpQp5PPp1FeFRARLLnJexmZaWZ55yu1wt7ZTt7kWgDdCwXEbf7UPKGZ7Nnk44YAT",
  "key5": "2ePi7e65wYVQfM1MdHNiKahdte6QZKTmzzPDnzCKbRQ9fKyZBTSMDMqrzen4pVM9X59hueHLDpj8M8mZVmJoQmfW",
  "key6": "rv6Wz8iB1EmMPDKtC7yZxXpFBmjMAisKpEArb4sPknJHZyFJejH95uU8PTwYRfG5PkBxDkZ1ptCAUsay6KLQL1B",
  "key7": "2aayDDwzh8fevCy6Yw8g3VF2E62S5AEegG6ALZZ2NvSuBPtYssW9pHMn224Wnaep4Zj51gwMD6zP9NkD5QqHxEzQ",
  "key8": "5taJ9cJQeq4H5kNvnNwuxEJEKfqMH5wvg2geKR77NbY3thXW81TArkabBuhMBHoZxqdEnWVTk7N1XC53MqeKCP8A",
  "key9": "zzsFc8HUH7KAg74CjZJqBvU4FP5SBpCKvnK28QTWP5y2iXk8Yi5D2GYh5LrQgz38idrE2MWidm4xKcn1uQffFkC",
  "key10": "4LeytpMbhA8XD9o6maRtvXc5WD5rsXsqKCKkyy9dZuQvTXQuyfVLCn6xWRv2GmX1ifmYstwLccKUFn5M5tgCwkcd",
  "key11": "417297TYCJVxoPwTC9bKgUmetMdUEP11hMckTLBRTJGC6fXkfFsbmWVUnYf3aVNP1w7KbjGwNM1546mFPdGQN8Ah",
  "key12": "4fbAx8QD3L9VYp425gcgR7V9sRAyp5AuTCQvJhc2WfYttvHdRRKy9zvGZCXRvecSgWbCGEdLZRdafgZU7uk5CYZn",
  "key13": "5pDd3N4HWf7WUs7JVV9zGJfrmmniuVAF1dz2YwXGSq2qpnZfXNK1vad62rMJpdYe62AzsbYEbQppKq2Q2qcJ99W1",
  "key14": "4h4Q3gMJNkfp2QjSA5xre5Cf8Ska8HiyTVBvz21GPWtEBVWn1YmiPH1AJoT5W8nSg9ifZR98XM2p9p1TsHazto2C",
  "key15": "LVYsZLFovxbqjVhchxE3L3HPuNQhNShYcXsRPdd2oTCDTmtnWbhSBZ4iv6N3TD5RrjwjmEgLkh8iXhn2ZqqNcDr",
  "key16": "521E2BsUJATvZpoXisWgTsVq4KVcShuPREqiorgUVjAYme95iam634NseKBpqfpaATrGAYVqmwoMFJXVZCrDDQZa",
  "key17": "22udqbGENCg8JY9GA27TduNiadSkUyPapq8UVubcZg4rTaJAe5wUsNUWeq76wJbs6tFUZjnVAQ3mGaZ6VyaL9PSy",
  "key18": "nPTFi8R1Eg5Qi9UeNcb3E7Z1J2xmBj9K89mWV4ntATagZkDZmYUAnzQTcg1BfEwLw5HirpNJvbrUK1X1z8QraxQ",
  "key19": "5QYihRETDdCML3E4dhkyXQm7dvw9sXTjo1wb7qGNw52MzRVTHYp3GwHyNPCaRCBcSysS8umiWPuh1zc3voFpnbF6",
  "key20": "2T3375J3W58qFUafqQmzb6ugNNwte5ji4Ww2L2uNRgdUGcMSJYEzsTr7wYUdZ5DNxuFZdV8FSVNQo33Baw5TCzoV",
  "key21": "2engSizvnVv9aNgyKHfvLvVB8EUGTEVnBETZGqwbDtSNsmmxPPN4NjomjaxEU2RaarWaWbeNGqmdvBpVYtdyWj1E",
  "key22": "3BbtZyU7TmnjgBzY26pceJK4vaF6d5hYj8jWy8Bu2msVb11vvWbdNedgMznZtQGWM4NRZtVUU9U9bCbvZ3ooJ4tJ",
  "key23": "3q7bAV7RnPTaNkqk5ymaRhHnZEPdxYPvK2nv1K514dEcBt7KfV1PsDph8H6BXs9Bv2chvoQ9Kke3spUPahACg5WW",
  "key24": "sasERWBC8M9nMFZTgAa4BGYu93KYNqHfrpsEUqCXnp8Au74PzrMqB8f2kbHS8pibhxKpB22JLHFm5dwA1RRmjGQ",
  "key25": "jL2Eq6JN8Qe2YvS83oxLt3TGehn2XNEhQvBNW4kioEwbgPCisp65uaCzS4iBF1pxNPWype5ym6i5Z2gP9TfvRty",
  "key26": "31N21kg4viMsyRNeMZrrP3SvRFtv3UrXZS78uGw2wMTmUT14aHHieAW1zQEaSFr7m2SKKSTPdYJYUBxrfikyUJs3",
  "key27": "5bk9DtNqjeLbuvpYqnU1Ty9E9h7TBwqr7TnbGUfyVPX6RFXdEy9iwEihTMm4M81zHtNxB3zdqUVfE5JDyeghRTHa",
  "key28": "51Pbs1SoKsqGva3U7aNDtLf792EhpVAYrMZC1GmkZi14gVv2SdhiBCKb1oKhrsYtvUZyxm6Qw1qgaNT7dr8AqEy1",
  "key29": "2pQSQEBuZDSNBigyEma6AK9ifMScnPgSLHd6JGtZPXguKtG9F3yyzNbtDdNg7NR9zEdrwPWiFHu7mp8NtiHEk4KK",
  "key30": "5UKyNmhKN5YaekMrj3dvcbkuv5zBPTghzmhWEgEVHQX2VJjPwyUhdLVDXZor5Cb8D7unVeZMWugiN6qDMCyBdMdJ",
  "key31": "3LCSbPXgCuX8AvBQrpvkPCCtCiDsjk2Fju2PaWqM83ZXYhBFDoKXDYowwxtXsYS7FYun8QjojBjPpaYHXmPLT3qM",
  "key32": "2ecCYXu1gyGAqPk7mXDczQaPH3ZzmpzAuZJJ6tbaiqxT12A7KCzHxhDRCVJ2is5QVSkaVpBc27E8VtUETYk4fxKR",
  "key33": "2nAgvCU9ZpJX4UB7GKxt5GomWUrshrLKCe9EStDP89nLdyYV27LUWLnkS3iMPaNX9HqfkJDAfuWR33hYxEL6QfVC",
  "key34": "4paosD8qrC1GmhipUjFDLKCecACKCLNF342Gn8vjDTrc8waQqTFAJJCJHYMKri8TsDx973wy3foPhyqf9iGTjo4u",
  "key35": "2Z3UcLx5Z3GdEX6z8jgWjmoDPXuEM6TvBuTLH1ktfntezUNnU4TpzjYwz1uXEA1KvHdGrk4LjopD4tPoXtbXfrrm",
  "key36": "5rp3dtuEVTuUUupqgUNBoUi3GAJXG16tDxzvPDJ9QmGC5YmnMKMqAwWVv62GYiJCiexMeuY42DwfDuL7mPqcAUXs",
  "key37": "gx1ZJBn4zEw5WoCyEjvWkZLfPVGTFndRxtW6XTXyEyTe8Xdfjt52GKphgB8cmruEaHzzTRgyyoHuFfZBQfVGP72",
  "key38": "2XnVR49t73Kwa4CSZSJ5dzVQGkg17JAtyKMKmNme3cKripFMPEi1J8pQDSn4fjLpMQbQjWufkSdhctZaRdv35fxF",
  "key39": "3JqBenNWv4yxvZrmgyKpQPa343b6UtwEhfMGeef9Lr7XyJCUnWzJmqdKhXtpNxrzFMagaunvBW8G5tkW2DchKny4",
  "key40": "5gToefzymuQAMH51R2hfNuo8YrwUcnrGD2swGpM6NZ9WquhRnuNW5uM6isAoDybcAvR3m2QG6ZfBciFMFhENtCTg",
  "key41": "4h5n5BZCMit7vgVXhdFht8jkptZa4Z5w2qjozpX3MrM2TC7pH1x3aX73asmTUteG6VCfqGWgePSPK7vmn5p3jXZb",
  "key42": "2K7KUS9ex2WD1iradS4sHPknj5XNQh9MKWS4GFPm5rSU4DsNU7hW9RMCHS1MPNSrZGFACEp8NJRtjvFsrtPDCFEC",
  "key43": "2biouVWrpwLBuu7KfBhoPpZnmUFe4grHaYZx25c3tMYnc6ms6uDsi9KfRWUAGwc7U7LwFwPn6pFneDBmnjBACeNg",
  "key44": "3HTDS6FkpEQdn3TFrXd3aLrG5wiMTKFmAnWh8bnAPQDPpdbF5CYwLPusqMzBRn3dhLY7Vgoq4NksenzkR3zj2Y41",
  "key45": "2YtTA83SMkAp9LEM8RN7cyXUFsEDeZKC7Zw56QZauNpWCcpVbSGkpZL19oxShZu53ePh7PPQcAmkqmsLCSUQcsY1",
  "key46": "2ZZN1DU42MB45fmve3x86Q3MugBYQRaKyUx45dqMmjcscUtPdeFP2BNrgmCoF44XdzccgY5KFgZVTTw8cyuvPQNP",
  "key47": "2ZAz7vo4j9dtsS28TRW8UNDMHjyzGGXHG1JWk6AJnim5HB8gPCy8r479JLghUNDX76rmuu5kshxNJqn1pVQDCxiz",
  "key48": "5j2boMyDBceKp6mPKGuCeVFLJAo62Wu5ETrHXbecSaABn8DUWSzvJAfLU7R6tpDVYt6xKsFWnTwfGQjvMqb6kibL",
  "key49": "3AJ1ABiPiaLHYwMbVBdfHvV23QmjDiMzKg85n3u8rGKSaWxN9xNp6CQdeqEkeUnyfps6ptQRD2HYGutnci1KeZQg"
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
