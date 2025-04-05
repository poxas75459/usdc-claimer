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
    "5mY9fuxNGJtdqTx1mXhLsWsQ622ZwBWdVZ2DTNT8xpjLi88g3uxsvHhdtzMNN55Rcgnek9aPZkSusLcSFDx5JRLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3teeuAu2jSBgzaeyLFXbzaq2eSqkpBvcQgYgkJ73VUfTFPYYoxByoDXq61Cv6fQzMECmaFKpShEKqqV3EdDdTJgk",
  "key1": "2JyQ9azLboP3DrLNYCq3rTt9P22tA4gEBtDEk9PbXohV2o9a7Zuwg5XVmWBQnKsLDwd2npuKar6KJGRFDZqhz9e3",
  "key2": "3BwezL3d3Jn9AYpX6vcMnRHvaaBy3wg6NnxXyLruYSiYRegijYDeNW95gHSRjqwmfQoSE5vge64s18y7NWhcb5Jn",
  "key3": "63BJf3ptVhDj5gL3n1uFTKWX9dQfxYaE7VbJH59HPiVKYwixXdaSR9hPrF8kHb8Jfjda1YY4EafyeLoMJS7FBF6u",
  "key4": "4BLSBtQcHWwyRw5tpoMs7oidmKxWRHSzyEZgBEK1K3LoKPovD1vpysJWrKEiug1qRpisk4GFbHgLZV3iXTZdRNM4",
  "key5": "3uap2WdhkReo3yHMLCGQcBSNjkYq2VUsrbAFKoSu2vYJVRUEE3L99yhhiRC9gRUHn5MeXzbabJsV3HYvhxVDDWwJ",
  "key6": "5vWYtnC7xeU54jCtiyEKFzs1gTmGCXJkpTVPVW7pdx6Q15ts4gJFw1K1qdb27sRCZvV1wXeQhncCjcyE5FanUEJz",
  "key7": "5TECfgEGkwTUd9oVifDsoB8k5uSEi9kW6wwUTqQ6xHjV6D9XcMELWqwVh3cCC4KQ4D6UedfDvUCPBk4HpXjFVRHL",
  "key8": "2fMnMkGguQVub1zZrrFMWKj4v6EQZLE7zVLuZxbpUKdeSYHTjtRNqtE1hXyfCYzUdFc4UURFXio7maMvrdxberPc",
  "key9": "wqNzphKsoRi9URsypLoFtonomb3LFEdCeHzFVWBsJq8ogAffaXz7k3BTwMBejov33bu72XMf1PwhbgF82b2rGrA",
  "key10": "32WcdhmiEptv3gKMe7PKL6q82jANpmVDRQ6gKBTwbh7e3SZtG5gFrm7FW2sCBjdS8ehfUJ7hGtnKkDgkXHS3HaH",
  "key11": "3rftxdo2LR7v5FTBL3PDzwit9bEomuseFZfHLumRsTpY6NasV4QAb6tD7T3qvVkxUk3VJy8DkBiSEQRvvAZ7S3ZF",
  "key12": "23eH9Cm274JpXNdwBzkHSCuonwoGgwoaaV35RL746gBtwLZuKXvXNxexAW4hBJ4PpA8UUEBFYYyuGsZdNswKFmip",
  "key13": "3NGfkhjLcDkW2BbMjaZcvemN5s3urNVfZEpixvvBkkjunujQu9miDVQ4TpvS4taZeJdWimEUZbYWVNHREscMbv38",
  "key14": "nHxppAH3qnpax1SrVcZvu83HQJtJJA2CGtGLgGTnfYR5pAiD45iuqBTWwwqnaGtuyRJEDrQ4udWTaNZ3Ti2SaeL",
  "key15": "wpHyZZtB5i9z7Xjj5gaycJHVgoHkmRoMzCFAN5abnHseJsp4rhAjckqtmFsdW2gZrriB2k5BMbFM8rzqesZm1QZ",
  "key16": "2h3Fa9pKtEXtW1jB1GmxTTPT9KUjaRmHTa6gjfTAY7o3oaEFAEF5wzdVNrUJLNdQFcGNvtkHbBAxqahSTmTLinSU",
  "key17": "3AEHWaLmbmgVFwDRXutXMYGe4R67zsMhVbVWNNd6PRVUibLQxNMzEM8RQhs6MQvSDQfVv6TshBGdhoGPeYzavjgB",
  "key18": "2Ei92Pu8e6reBN7k4Y8ED8FqaUnudaSQ8ccTC6huxJMV1TWWzGS9VPpH4TJzr1XPyQ2mtqApr7KTKewe3dfsK9Wx",
  "key19": "5AWjhDyBRuFyvo2CE5R7wrMcGboWFSXbZszJetQ6n3187C7NzJJw536pRdLXnCTVLChyhByqWNpZodPN3aeeykS6",
  "key20": "3f61vCnNeaDUTgwVNyF4QKmKevJvE8GiQHhGm8dwNKFWKSsoDX3Dd1eMC3GE8Mnt1n4RN6PjSwjyo33hiAwkCcd2",
  "key21": "2rp7y6msPNruzRXDAMBtr4LtsjtDWqpDJobhnj223mNYUJkytd463CpECoU3jstZ5LkBizFGaToaNJ1yCN9GyNua",
  "key22": "31URke8zzw658J7XiQ7CdtAVtw1zir9GN1bz8qmzt3gwZUrvfCuJSPMsn3TYM9V2VAkiES9sycKPapJr6ZCXh2zo",
  "key23": "2LPxhqbpFhSo7ujtYibaYx5s7hHTFaQ2tT6NdyHSBvVkyYytHGTpxqRugxvJtgYxEbSLxEK9i5gt4zLbnBFYdqVe",
  "key24": "4ANL28U4GAV7wqb3gP9dciinV68tseFXz3eNmLU5enwmafHfRVdVsUReD9YBq5fvUZhUStcuSY1TYVbLEYVCWQP6",
  "key25": "61XnENGNSj1vQifuhvr9bnJwx6dW8cNzzb2sMkv33MDnahntnDHrqUoAbELanHyiKMJb97eg1KchQpU2ow8neneZ",
  "key26": "4C2JFL9Tm6LkLPK27f4s9gMm9cyg73TiWiQE3W2Vjc5nNG7ELe9FVMg3Tzs9M2mzMpHc3T4HMtSrkJmAFxs4HKv2",
  "key27": "5MNtLF9XdQHCjwBXdZYzNH1VsoWfTwRLncuPnngZUp8jvY8K6bKzWd7b7od4MFVKV9SnqesG1vfGqhtmsua8F7U3",
  "key28": "5nqumRHW1ssJou3XMhG4XrtLAesu7HhFyG8Vh4xeGZaV6Qr1pN2FsSonNFbc2aXUStEoQcs1Ec7FBxifytGUJmWw",
  "key29": "5FBAajmjvY7HLJ8A3HxDsBoyCpTEraZnerbah7kaHQQeGPjW4PaZ8GaUQuYyZ2wrzeRS5CSirvPRzspEBX8VC4Ba",
  "key30": "42dCkExBrsj68UuF1rdRkGefoywegacqRAB7oU5BRWVBtFukMijni42WQHwUHHFJJnjgttfJAp8BciFAt5ZJVtND",
  "key31": "gxErbwDduiXmY5JQ237LyGq19UtjSD2G7RZFUm1Qqw3tMbXeg8BMktvz89iJwmFVQiLpC4gusR8X7EdVFaqVp12",
  "key32": "2mz19FM1CxyHYgzvVaVj31qAjpFNeqrxwK4rWqa14pLcx3f2qY1JjTBbrHouNy8j9EUx29hogmeoBrQbFww96TT2",
  "key33": "4k1raAg2fBzwH2rTDB8CRRJM4PveC2nFaT4j4opHK535KqswWFrCgJEkrLgchxzgjNarAFPB64csZm5gxa5fMqWr",
  "key34": "pmtNfnAQjyny9cj9iWkdyFfFDp2847Yn1oh4hfnWQsvbHTfb7ejiWT5zWXR9madJ3Z8DzcB5WsSAsXf2VC74jGC",
  "key35": "i18ZMP5AhmTPNrdjc8xRK3YswpRKEwcXecY9jhBomZBv6DA87xzZ3RqMtdQgJkpwwi7uZMNiACCcFAZtFDSh7E9",
  "key36": "iK4PAXmBLTufDd3FVAnihqXFhBQbMR9p5PougKWYLAXPzNYvP4MZBVRens2K4bsEwEj6zAcMd65nCTY2QicKCec",
  "key37": "3bVA7955Xvw2vbduNUWRHAhNZii5jkw3aWsnQv4FLRPizNtGvYkcSEZrwVCMHjCDHzRhzDweWjT12u3RZTb8Esw6",
  "key38": "51PtCB2GukZ1Ak2CDsNg8pvGADfAMKim7oa39Uwij5tR6DwydC46HoZEKSdy1Em3WpT7HNRqd21HHXSsnbDs4XY3",
  "key39": "2AeFDdqFSuZ8Z35psc3ZpqtzsdvBJbR6gPKYv9rGrk5tJWpHwWaYYzeYRJYnwYfjiScZduQEpEWcbVejUnsSFkD4",
  "key40": "21jd4cCH9LJAwaym2dRwKhhM3U4SrPsxDzUQf6DKyWABGoyyGAk3qKz5BSChZVHnePb8R1KaFFd7KQMX3gfESxP8",
  "key41": "5gewDWzjxouft3cqgRLzEWPDnmZxwhaWpQ2MZiqn9i9AhDtEYSq7ZA5C6cMgoubJ1XGXrC17pHF2f2Hz4d89kmvP",
  "key42": "5DNAcG9Vsm22dvknuNw4DsbzRdbtbwA8dopDrECEvSuU9eWVDbewHLkhuYRrMMQCUb9w3NQYxEeNhHMzVMKfD86A",
  "key43": "2y7keRBwCQSt9PiFhashcZgFKPMUhRjjsttnyTiGgfmM3imd8M5koV3hbe6t6itM946Uhpoowo1F9hSP3iURbZgN",
  "key44": "RqQe6y3AFvMMZP9fk4P2a8uzRwbPjZazUvk2NKptv2EtZjmK6ktrqZvNracarsiEbkdCxptM9RivZ3d1w1kky2x",
  "key45": "5s1riX99t6pwEqQLPCCHQtvRYSetYMd3GVG5cFbyDcqKvaPkhA9j5Xf7YP7N8gyRMLGr3PyoGNoGbgUG6krzzCWz",
  "key46": "2gKS3PQqVvj2y2CCKsbjXuuzRrAtyTpyHmcvZCTRgoE8ruB1zKkf1czydGpLzZVQgVX5qjMDhTn36Ws5UJaXoWUC"
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
