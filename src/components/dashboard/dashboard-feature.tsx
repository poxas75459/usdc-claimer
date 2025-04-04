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
    "5xaQJKKa6AXMB3th9duq53oJymbpYWQo3A4HgVpWuzN9HwSw3VyxyKvojoz2aNWLYgaBnmWZxtHfmtZB7Dcysbn9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EKN1gjwtuvPyUhvGStURh3jLRdtSb29dDac1pu7GWXcXNJpccPQFEDUMGbtnuitUuLtgqD4kF6m4gMN94HZvMzV",
  "key1": "4LB84hh8nbwRvnFQ9AkjELgjvA51uiBchapscG3qiTzLksD39cnjfc6AVw1J477CpbxMh54h5XnRoVJSXXXN4byx",
  "key2": "A1hfMAvTLcrhp9nDb6kLHRN9p4TR9y2LqE6Eh3byMphJWomXZw25q6S2JL6cHKQ8doaskzVYAVRgYEKgas43Kxs",
  "key3": "3MEAtUGKnkzircPpFc825UBLWqReC8XQBDS6AjtTPyL7spssqBysPHkZ4WnBd2sGpq541b4QMYc84ykqs2u21V2R",
  "key4": "4veGRFyaYM76XT8fXkqRbfRTfdViqR2MdEBQBrGxWoEVa6rCnqvWf8tuyu3LXMLQzzq19HMah26XoZSkD3svSC2M",
  "key5": "31F9HwDcgNFx7QHBVrg85wGiKbNMFwqgvZWcMwoNhCZLsiJ3Yr4nsTwwS5pD3pktWmjcaDSSNE5EWMDaUT7iwvQ2",
  "key6": "549ubG5zRUKLiFQdkkjuhJgy56XTSP7eU9LrL76PMbvohGSFnFP26DoJEb92P3kydH2uJLGaCKv63HFvtd1g7GRw",
  "key7": "64PxntDzT6GNUB2XHqqVnDTkVFK1C2HEnxDXVKGeCQ8ejgPHWyrfq9DYoVcMTgDuECVd8QqnDheumL1W1uLVYXcm",
  "key8": "8hhbj3EWpat3AHguGMputBbkcmnbvHZoyBRjJ49bAM2jzcEG2zE2psCU9PCoWLyFjdxUGToxUnBXMT9mtcWAXyx",
  "key9": "hH2REjCicuJuVqtxHiAp1TSr4BS4xYKeonzCoC6gg3RA8zFdaEJLoJALE2P7y1g8mcQCEZVrvQarN8EV9iq36hV",
  "key10": "32Rpi7VN1hZP5FWtsEN9t2re9rvNxnWJhKkBb2Eaw511cb1cnRA8yWHpSNXqhMzu2XhoDK3feh28xTXkb8WADPCv",
  "key11": "3WPC6mFHMTJ7hZ5toKjeuMqQUUrmEHTv8Pj7kKFJpT49FzUNPf8o8zuNnmU89tZjcmVPu4cGCHogaVCo7eVTsFCz",
  "key12": "2xvNEHvYYrMe9NSFM1NYS4surqWmZoDAG4TsQbKNmB6EGD9DbDTi7WaZ8iqshC7n5VuFPb9o4AEN2pHk8mHV9UkS",
  "key13": "4cUAxhE9qHpdKuUvwfRTtp2zHfXGZeFdSgZ1D4NLAYXGLpC7jKWs1PSk2PB3ewCFtqHmUvzd9yTuPNS42hxkvJ9J",
  "key14": "4V31hNNhR2yPeFZwP55ypNhtURBRGKtsKwtcohicsqvatqonsEibppLZc2dyTRLWSSQywy7Z3xe42tJ5ZF1YKkQA",
  "key15": "2TfmEUgQyu79FymxrbLgvGeYh3tFC3n8SaDJDftLcrd1wtjCjioySb3aJn18fUHAsYMmwUH2bUcV5FQd2fGnzojg",
  "key16": "3n5uYmB5za6pnp9GV7T7Yyd5p7bBzRQFsiWqfemE6yH4eKfPEQNrnzJUhJWoLeAyQG25cnL4gokWTn6xYV18i5SA",
  "key17": "358Dxv9Nw9GvdwHWBtcSw4YD9EoRjnWPDzR1SCmgyTqWRS7WquRd2RjGA9YKsJCrBTSfdvZTV9DAQY5nsaR9W12F",
  "key18": "4yj4af5ge1QBRwgJfq3HURNZY2BrbXDurRsQTd3gqBNgGbfp4M7SuBPvdJhEdZJW7vLJvErpHG6QU6LifFNQ1ZVM",
  "key19": "3pVFbtiW9gr5SzuNHLCj32hStVmT1pdwbnq3ySW2wLkvfKYktrdThQpBoh1C28A5yTCFMZqxgV1xPK5zP1CBiQ5r",
  "key20": "55DzCVriKHv81X25sdxYX7yrZhaKbPD2uGH54wFhsUqFhgNAqYw3rh6RWjHKxeUwpD43Lf632jNaoFrDmzeKhfF6",
  "key21": "3R9eESWjsrMWurnUrZkY99SVA6VVdS6vLMAQzDYdLrpeud3j2wmR9qwUd67LL6BRt21trcCjcwcETA1zTD6cuUZQ",
  "key22": "VVxP3tSBGJfa9f6LFCngxTRkaqY3GMrJLWvA2eNDt2MoAeE5uGFUz68v46qTAvxKTWph8NeGzoq6Y5efWtCZLvw",
  "key23": "5rkmDQ1ppdhzTm6bq7F8LCACBeSDJHM6VYRRaQRYo3sLBkbn9FGWo3MTYqygxV8jEve2tL4iZoQzun8WwmkJBkzN",
  "key24": "2LrnPRd4rSAd6m7ZQNbECU1y6TuWWj5DCssvz8a6Q6jovePNTZZmuF7ZopdfA5ELWNHSr3LxmN85yWjBnuhTdtvk",
  "key25": "8FZBB71UzoGnNDduduY9Gap6kUinR3k1Z8PHwGKHGxx1nJQ5W6NKPwTCMtnsSdN7f1d2zSFW7vgTEVLRpgVbZAU",
  "key26": "5uwxKcxaD5SZyWWWRtcxgSFxgn9b69HHS5pmZYz8WHqTJyokGH6ShVYvDWm1ueM8cgirjDSQWh4LMczE1d3Nhn3c",
  "key27": "3g7poTynqbo1ZvZVC9qQmVZYC4jki47HDjfHV4bA8gLeiP6EKk4MqRxhrHNWAaznnhR7oxcsw5AE4yvCELNDboT2",
  "key28": "5qmFs6wL9TxpKwX5TTzQffeTRZNZuQs67s6ybJ35hMdXvvmTCybrighzYJ2QAAtEXknRNLDkQhZd5hGxiWkC5iV3",
  "key29": "3ZguRLMT39Ha8KQ1DkqJ6CGPsK4ro9mUWRpGsywPhEtLbBArbqvxT6hAZRrVQ7Xafdt7zr8GCAJr7o3j6vdzPx3m",
  "key30": "3djPJXZDsSGxSPvBjrysfp4KTD4tahqY9XZqP1qkAx3GRN5psoos9LT6NdZMkNR64YkwzFDfp5HoFXF9Jctf1cFN",
  "key31": "5AkB61rXPuqjyvtwC9KNGTSWmyPKUB6M6VD9NJ7HzZshQf1aYLrZy211pZZ73LmPbUZnsCm3ELwmQhbrLSwXR8YR",
  "key32": "5YeSxJRVbSt2ZgMXgMPvd96S7LYSsLfPmtSQhLxU7gHrjZTZoa3WadJW7VJqVWXmz3i5bH7BVhXiFAgzk6s5tXHJ",
  "key33": "3buJ3vr3munsFhfRtFBTtZXbF8ZM42uu3CwbGTUvabLVXHegHhCwGTPtAsomB9PYg6ukq1C5exr31C1iNJB5tMzE",
  "key34": "33zCmcvg84GE34U1kBp1any6uqeZVA9EjFaCVLmMd2AE9MQYPVoC4gTUJdsKAG3JUcz75y2yyzVZCkQgFk6PU1Pq",
  "key35": "53sYy9ioxwqgYPP2rQsKfBHtr3d5dTwoKcsBohs11fj8aWuyKk1RWa4D3sXeQjBCFimycBRBKbRuDghjzr3DaH8T",
  "key36": "2vM5cv2ki41sre5xKKa8L51ohDcwudRWiA8WzhABaFpf7wF7bTQTYvLdN7jeEHGatesuAhFnFvXpAKhnMqtfGfVj",
  "key37": "53Rhve2bCiu6eELV5Z2zz2z6E56BoRnQ7zn2oLSS2Msd4LAES69EncyVqYxkPYZkNZ4oJKJxtds194ojp1XsxMf9",
  "key38": "3nZaRYDkjGErZwwy2bps46bZGX8NAeaHrZmNJaWV23yc8SvmVED7wYALbDgDe5RpBnkju1aaAsxtA7kgGmnbtkTT",
  "key39": "2B46iy53QaEzf4DBLNQ2c1vFEckDwX6wK1vgpEEgE1WTWQA2pCrTYZYk6A7TAsRcdgnSJ4Y8CLgDGACEntdNemUm",
  "key40": "3qGqA99Mpf4w5s586T6rMpAhtZerPb1dsP8w5faA3YZbVT68tMtBqvDCV4Y94UJpZnxX2evPVgUXWnahfEZCiaCU",
  "key41": "4hQeqVoMmCBEkbMpNrmYxfFrPTmQZLrPwk5mAsha1qSPhrCiLsxtGzPPtXGN9WBEDw1xQzhBcNeMotE8KAtg7FWb",
  "key42": "5tdetXbfmLFehQHHHsSNLc6uWhcNpu6twmL1gDj46RAViDArgKudo2PvDE8gDDfwUN4KboGSR92P2JkCCARRnMDj"
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
