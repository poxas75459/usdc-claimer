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
    "5AZQB1j1zJ3zJCCjsR9PLCjvG8cRYWHmnXDkRZ5N97yKNVfff8gFrbbBVyp6JwHpeewaqbutZhZnwZyd3weZPiuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kFccAF19mW9znZcH5mXAvS1Wqi4YZ7KhoSDDm4frbGiNqPLKtgDNHXZTnJa1cgqPBReVRGzWdRgahBkHjDLWNFY",
  "key1": "41iFwchnxrvWskiiuhyps3jTP5GXAUN1KTVGKC77vUkc11fYuHwhy2UcXv41Hfbyb7XzCNgL1EZyzF3UJ39twzg1",
  "key2": "k1ThGnABWyH2goshzxk1iiZ74yX7BGNkurLWvSJe9vNpmJqL23VeQQa49G1KNqz1WLWCVZp3PNn78vvpuD8R283",
  "key3": "4J8uocZGpax5CagEANUggwcL1JB1UFfMxaEa3Fz4BuC9s9virjNxUQLTuaW6jnTN5k33URTbDwnrFzmPTDoiiZLr",
  "key4": "ZPpFKHWJwpUQ4KJbUUzaMasPuQpKVcGkeR2tvp6waiPVZcsNJg7z1EaSLmedB9ZruSCYvv4zB5JbSB1UmNxfhQt",
  "key5": "PHkxT2hnArUfvZ7Rjsmg4z2gur3vzhpWkJiyzKYoXpqdTPrnHA1XbyjvcuMuTggMXA5UkGSHK51VCaRGWw93hHY",
  "key6": "3uVnEdrwd9peE9x4SuEH51ASSvQ1cTWe6YUTvWzU5zrjYq2wmKNHZNgWoaVvM2briXNKxfBiGTinmJWbwCNtHqVa",
  "key7": "5rWVtREMvELAKmeqvsNgPwtHMr2SjMxZmxo9YzmXtUKvmjQbpasggQ6CRLcdwh5cjcDWvnjFJmyQxjgzH1o6iGCL",
  "key8": "3uQRhk5qLZZudUoR6YGiScVyzZUY9Rv6GrqwcAMdhJddPLCBmhKoNNt1YTfuvgk6SNansWFpTGKada6rR6mrTPsL",
  "key9": "5Y1wjHDaiLQDuyspcdtVNWeAor4EG7eKSpJFeraUfwMo7waL2RjSq3oLAVcUmv3BK4XrBLhKSP56oiiyNxe6fK3B",
  "key10": "3qZtqU9y7oDysEQaVViUX5CSebpb7yzWCg4Ng7Sse3DuQ3FoyGpVG977ddTvDEYn2RquoJyQqX7sFMdjXJ81ErC6",
  "key11": "424PV4SsiMxbQbwwHaWSC1QHSMR9iFiaAa3PdYXU9G4NnSZugvVhiigZc98R4ywCDLTPRPoGygKBm4TPjvihYuWQ",
  "key12": "2LSnGbS7U4iyRWPWHzi26gZvSuoue3xZFVByiBm1uZov7o4ChsMffBxADrBALqXtANF2YALrxUAVbUo2YdCSTfZw",
  "key13": "3QBxV3moCDvekbvPn7KQukdX5FTJgfH9kfhr3jN34aU9dAbWgKLqMDVm3a2mF4mkKvYHP8mgPRwvAtD14GMuQQfU",
  "key14": "4KaPkCfDWVPvbMw81pvF941yfitkpzDCnKBpnPjLHqVp1STShPce6fzE1Uqh3zNqac55mc4Nh5tvAmFGZJjhAPNh",
  "key15": "2tNVGUtoTbjvLm6utm5JSRaxDJA8KHeVgTiJ1MzgJcHzALtgiweS33cnvARYfev8Dvfvp55JoPPCSP79Hb11et74",
  "key16": "3HyQ15AGYou9MGQSXGDtdRDJJNivNz4TFt3TerWPKnVYAyHku1htEvrZVDwuT3Hvsgny2ozaj1hzAkzbugrbMZRq",
  "key17": "5aURtwEpurY8feP2Tb7FZefJk1or1gS6d4U49rZdHiN8aCRFqzCgr1gmYHZzJowQGZbQbn9h3dUFEqg9Rn7m9wE3",
  "key18": "5pa1PZPg2oGnKL3P9ZhnTRQn5bDNPvXp73vTMbCM8e6usUGPj9hWcqbPwaKWoAMza1KrKiqLXWvCrMMj23S3zUKg",
  "key19": "pTvvrsGZza35f8fsvs1D589Pov5HnQBhYBoNJX8Vdo7WGuvP5tAJyrNEP8dQ8mGnstmJem6V8VCRbk8zfRxFNa6",
  "key20": "47zmDjmPTjzDk9yMXRSbmbFWTt1ZtRmMmrkzj1Mr4ahaCEhKawTZ6TR9NYptY4acM1uUNqN5QFQS5ZkLR9FgJPTn",
  "key21": "4Qrz17RRWaDAEB4j6L6X3J9KVtZBLGdpCn32ZQsADY8KwtXigJ6gV639JKCed2pyJtnDJhnBEtbr9FDrYKbqwVtb",
  "key22": "53jjrkEqpDU2bs5ooeFfVqrg3Fq73rGqqUGvWsJKKN4ugqS8fPM6J3SJCaVLYn4pCez8y8JYx5U6pN3LZrA1KALz",
  "key23": "4VcuxVZVRyev23jMYV9yf9wxWG7rZtx7QkDsmc3GayrbXVRQsS7u6Ym5VPs1XM91rF6zQh9KHdwQEgsyvykZ7son",
  "key24": "3FZQ7SCzEdQ1wcMEHmqkHdxAsqm93BoVPaREZc6nu7HjwnRyPRHsGNiWA45YBqu3u6WQsqxccuWMuyAtyWhDmKqu",
  "key25": "3wtFPrg1WkdudXFmSh4DmZ2d3HAtE7CwAFJQkn5btxAtAJ4Hwfda6V2w3DGdQGmZ5aNzR2M5tNkg96TTT8cZdfTh",
  "key26": "4HpT8eSxy7Rjx5V5i8U8EN7X5bT6waCJDqgaoXccVLvBJHtqPMJ7YqhYu3B4L6myRf3zu5tb2oUtPpFn8pUAixdE",
  "key27": "66iDft4twcrMSXnRSxej2GUoyeVme79TrWmFofzeDws96SVfQF8enX17jszkSm6CrVgHxhPMf7VpE8M1EWwGQepR",
  "key28": "4yTGjzsZvVUDeC6g8EVz8exdo4Ykm8HG2iDTLDVNF2mJKmUuLVQ4EhNVWCcgWgWgGm63nKz6RTZfPnKr5kqjEXs6",
  "key29": "5xuyvqAYZzCWMPnbrdkoCqj6jn51ZuwDuPy43wVhgrgL5wLRm4bN43jRtEKz5kv6te7rHf6Kr7kFgJzCLSrpuyhG",
  "key30": "38mgmML4hhoiSG8xqThRezYJdNadJMvLwx1CjB23dWhqaNw7MBWYjHBE41rG9A1nAWXVmZLynVyqxcKUVJrVR4s7",
  "key31": "2Z3n1zeSbgMN1BA16sefXm6Dnx7YYvzrdSLenggrvv4FDHQvEmERLT3Udze8mdPA823PPuAFLFkkEy642n7mFar6",
  "key32": "481pJMKbK63fGN3D9BA3ExG1VTpCGfM3LcnWiZEEUdw29HLmCgskeyio3fT7kxxPxdQodzg5CAnheagNogSrngPa",
  "key33": "4hmWvetFrD8zs2A6CrW4WbFAggvP4Khe9QJFzX77Pgjmhywr9e7KXe2FNdqGNPFMZj7X3jnfYtrvzfxvEGyY11d5",
  "key34": "5KzH5rxNdGw9Q5xyvPxeuj3RNuax1z3wwZttnPGwSguFBtRMJVC9TQwKYCZWV6ovchMR7wMCMSNNtNhAXToYVzpq",
  "key35": "33RPcFVQwEnuMHXgrctvyj6UGhqhQYyFZvhMvGZe8pJowB611WRawhHgA5LF4EuvMx1qZ4n4N9Vge9i4xWx4eNYd",
  "key36": "62GxhqJKKrUr4wXWeehWBxrxM5RffnV9zzwp2Hoaem2idr1P5qWSTo8Dx3btVur3edSFLighFzMUTJinm584gK4L",
  "key37": "3chFfksQ5ztk623DdXGPyjuiCVNYCXon7SF8BHBYAzdVRYxns5pz2AoR3kR2MprM33zZLCEJsAx9GYk37Xo1mrYc",
  "key38": "F2D9mZmuUC1pxayECFss5tzaC3quHNhmiYu3PAFBipMBY8fzivbbaEMDQ7BGPkr4bBmCKJzc8G1GDLH9t2LbMCn",
  "key39": "55iwtdB4nKTvGeBSWdnnb7ujkWq27y5sovWYshkSc8GCdBsR7ZQHt4LTzqD9YDPHsc7hLvzqW69hJC18QowTHkdu"
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
