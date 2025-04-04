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
    "4juEgiyqcMB5ZfjUHfGFSvVvgQeZ5CS6LcGmXJ7L8GpKWZqH5V7kL7Cjv4zp4ytVhyYfiz1UHaKYmNbZv3SQTdP4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yb7QdwPhUoxx5SnkUaB8HkKCbRpF7FbrZEKysoDpq3wcLgr1smdctuMWsp6b436EGv4FbU28vtVVV6vdMmLGWCx",
  "key1": "3tQTcwyWWpkpJtZYuokYuDQrGGBbrABV6VAhnASnaqihtAWjzS3Q5qNKngdzXx7u2J5UouUS6X76FVEUwbgoo7vF",
  "key2": "4UsFm9xQrwUJY63rFjjgpE3dFUUfGWVJssGuzskcrkKD1m4kcvPmSTtZ2hxudnLpXP5VopgjVGkbk4sFwFH2nPrb",
  "key3": "4jHicJR1p5sEo7SZGotsp126DRQu8SjRH3EosQiS2NHpAAzbE4qvUyyxRoKeeBUqqkAXJqASmDpC3TZBj7Qfskm4",
  "key4": "2TJae7poAMvemF7uLTDNEH38uEoX6RLpuQHm4Z3eWVDis526yqopGsCKtwwY8iHw7qHzKLv7V9oG5Pfiib4f9CbV",
  "key5": "2hQbun1MfVNrvDZuMgSR8m7UJgsMUPBBeSeHuapU1ZY2rTaNTTkEhV1jgCL8kAWro5uRhiQW5BtAUqkSaUuJHbQu",
  "key6": "3fxE6RVeiBXuWnwKrPKMSXEXmaETRYJxXUtNcsF6fV3YEKVWLrzhVsF2JnTJAxgJAhtZAonjggC8azHfBNQKG3u",
  "key7": "624Y1fcr5Eq1qHtXncZbjy37wNbUAznVhZL2AnzJZ7k1tdxYq7KHn2tAdxEjWeFeeuVGuKNvSZRrNsR59HUtYQb9",
  "key8": "3ubT8TfAYE3Mjjwc6PqDG9yDUtDyyrPDeqTMbYNK37kzBHDdwCxkZDJmBcgriAU6FdbKNVUW4KJzav7etRv6cvZw",
  "key9": "56RQT7oErJfowS2ovHGkzmvH6riFMMRV34ghtENozogutY5esp9CtAQUc8ZZB2YLSpgPi8q3dMdAneAGbwNtuGHa",
  "key10": "2Zp6FojKA8RDCxHFb8ivDjEC9dVL3zZrgLahqcw2ABcbEEhyYvAL2rkb9yW6sUn596rZ7H6gSphyfbkYUQetp9Fn",
  "key11": "3Af4FCDsNPiEFKHmWpUaPxNSRhMGkpYPaQ4Cf6HwyBDDtY6JjvBiacsC8nwxUCa6FAENN3xBV4ToNA144a3jMgSB",
  "key12": "3PYifVttrKvnf8NYLkwAz8VXFkKkGpDd6g1VB7JovHXGGgFLAeLjD4EE6FM2HwkYJsptZYyvJYAGMEN8kzXMRW9R",
  "key13": "3CoACjVD5pRWmxFyWJFmYepXz3bdGtCQVHEkmeJHbhUGgPsxAhaEdCNZGZmpya3pUUK8Db6GMpvY2BqR5TDorpvd",
  "key14": "2vsS9PtJxZRd1hzeVoRSWyrc5DXymVfm7TTDWj8WmhBAfNRG9FmHKS9tQVyLQ4YTG9n4Agk2QVNHi8rxqd76wPd",
  "key15": "4GpMcYrMPxtpcVDSzJRR8gD42KpRAubHZgD3cs6uWXbHwr8DYECqVxPPgavXWp7TofWp4u5UUXooJZhVDgZ3L99j",
  "key16": "5VTyZfvLGbuuaugr2A5xKeJ2Uq3V7Vu4vVafKwMSteTMN6ewKH84wmZZyskwbauYdasxsGviQGRdiJKyZa5j3yYc",
  "key17": "sC7R2nYRFy2F3mcXR2CvNLX6HaPKTMcYnGyuHT6Zq7YC5593KVuvLerhm12vNaAKmSh2FPBdKND7yj8EvMAVCsi",
  "key18": "2jA17KBRvearnWDGpS5Hfh1PwFe5zenc6Lt7AZaGqTZYJcPMhqKGn71DCgWkroLZBLLWVHZ5MdJz141zu3mKdpZ7",
  "key19": "3aRuh7pbu4Ygt9JvYYWJJbKjSfxMtTs4WPKN92SHsZeuhUQMCqBMBfHQooeoMKmDAaMYpMsJgaArAS4vKLE6evsT",
  "key20": "57KL2eoDQpcMaZCHboaodjWNMyMmSvGWBtfxirjJSs5M65gumNZzccBaCfS3S66bDUkauYjySgHRfmbFHthjtD9t",
  "key21": "4Lio4qpfEhKqbFNa75ynWbLj9ExqLG7q8NHU21kZYkW9661f8ZB431pegfAnidHxLTnz2eVmYuLAkmW54hRt257f",
  "key22": "3jicdhhRPL7PXbiFUnYPXYUJFzSde3oA2H8ARX4METKDnLY4MUkfbyQiaTCa8LAUHFTX97q12XqTyFqwGoX6Krpp",
  "key23": "2X9v6Q25PfniqDZZCGQJModMdVuTAGhn4uFqZPsf8r9jrxbRTmcfw9wGQ3j51dVznXfE4SkUi2cwq45EY5qewUCe",
  "key24": "4wgDJy89UoRbFWXFV2x1TY5mtb9zknHcTN2EH72S7W8JwTLKG9f8ngDnFH1wUxRAJhbYBRnYEFG5U3a96vfJ7KGP",
  "key25": "2MjvNzwjYa2dLPKKNhVBAfF7A8xA6RraRXZ5ZMBeR6vRGz1UFUZrXSDYPugvVeFmGeFRZHtk9veKxC9vdjo4YuSR",
  "key26": "9oXiAW6GHLzska736NNxhhoG2Rj8fSXNRx1n9P1BjyeyqnpsnnVcjZwgxeihwSC8NgEJDuvMeALJrFngtYGogY2",
  "key27": "2AAR1R7QeXcbaN6V9JkPReynvt3bFo2Ayt1DhZDFm4Ywf8UFyvWzsgnUbtc3b9pCQQHty6gozxGG2bA17qXHHwBY",
  "key28": "5YimMJEtAyCK22DsDsrXVpVjDkux38x7AN3VCnTF8kuLcBTBmyyQCrTSjSmy7BhXRsgEFm1eXzCPNM9j6b6Qj5DU",
  "key29": "2T6gsMNPB3ntWoJe2tWV4Bz6gMr9pRFNk8fPUtQFMzKD1T55qeoUSLFB5RZxXc4Nw3d9pXy9Tj2Hdoeeo2dpqRj8",
  "key30": "5Trtkue66cTTFmQBEutUBXoe4HTUUrRqUwYxpJCbzucuZvsUok8yFrHTYW2LWjvkBP5MupNmp1HsNQu1DdJkzqYK",
  "key31": "4dSriR1dtymkSLo7cKg7g4Ku8bWZ5D8n2EJBhEspuWdVQ5k6w6ckqMB5EbT7sFkRAWeciECYiNDMtWU3YLc8eNNy",
  "key32": "5bwB88ndtrBaVwo7puhe2D8YXiGrsj4DVujidJ83GDkMfGZ67Apet9b4y9iXncXiEU9fxa7JNnZ1hczMJ1rhCiEp",
  "key33": "4DX3WH376eb7GwAFJbetfvm6LB1ccXhViMxrUiZT5q81MLSYHcSfmt568Mmq2qB71ToFVkDbXaGaZXNi6jcAmhud",
  "key34": "JwWZ4ohK1ppEan3fFJTCfLmZgvuy9N9a5mJQBAtW3DjkiVazGyx5AUWALBs1i5ksvmujwFqrFkpSwwL4vUjniED",
  "key35": "3gZRkT5pFK6PPMm7dMEMmyD5kzxBAsZ8xH5N1WSjsScBfA8R4Tru9ftooukcFJaPhoqbWiA21knvchbQTmuTUD5s",
  "key36": "ZwfFvJBF1PRuMeMADxpRHctuh3P8D9tBoKcUNdBSmPQSbjvst6vg77Modb1H8nHoUfwKNR667FwLDTL5BEzGrmM",
  "key37": "vusQcMecQXiwLXNuEkwqaF3SKUfoHPBQ1v2SNkePgcmihp5cdzy5vL9NxExnhQcCeypAz71Er4RT6visKaom3mW",
  "key38": "45VjkDn8CEccH5KzixtfXRg2czZ1vUz4DLe2pXhFfvFRwebtHmoAmJ1UAD7eyMmsbc7ARceN2p37x1gk1oCoZQZM",
  "key39": "3yxwdXoaGYmC7bEkZP4MtynisXHyigsVQn1iJJEVeo1JsYViVYbQpEK8bWNMy9WknEKxAZGK1MKWKyiFmke2sYFr",
  "key40": "3QM5KcAaQgVC9YvSGTSV6BWDGVpsYyoowVYGA2xjx5ZZNfViCnyVGLbwFz1KEUnxezWCXzcFn9JgBTkuMAHKVrpK",
  "key41": "5P4my5dWotUM5RfVETAjqDehixpA9nr8axrh9AP7n9sAFQsp88y2aGq66qSxSrnjE6vkX6EheZVcRgSdApudG8BR",
  "key42": "vqrAEEsKPsStAK1JxxYu36B8TShWaQhXKQPnLjoPZnExL5ar31FW6NfoQMtcoatuYJJ6LGrHwmuHGQ46P3uw3JL",
  "key43": "3b3pfsVsaSQPog8YwJS5K7dWSuPgH5ZibKcb3vfuxc2F5YrfgfD2EgjEHjqNuXeXLetD6WZWiZN43xYn4s6vY1mi",
  "key44": "4qXtzSUWscv4w3XvwNc1xdJxT5xry11iyx8RRpKKbK3bgaCUQfRGpqR2cLkQESWwF19P6JF8s2F2a6BHbqFmPpod",
  "key45": "5xhHdFz6YZkQR4sQUbaBeamVircDyHprW5zaukoHjQ26jpzjcZe6f3dDmUzJRzHswLAp8iAEfw4K6k4XrmCgaDQr"
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
