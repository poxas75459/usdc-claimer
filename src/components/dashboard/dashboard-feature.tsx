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
    "3ggpPPAiDz8vgsKnvqrMZWosJyJxRQ92ucw596DSXPdtTKS2aZbiDYw27iqWRc9tntBCLzQd3WJ3z2d8RWKASter"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Qo1NuWQLRHnrzhYziAPbeytFx91YyzEmChf8bNiqKm4T8sjpW9ey77yrcfgV51xqrzfAqm1RzKqPyq5TVfD6zZw",
  "key1": "3omJdbzbCnH1WmFaVrUUs9jopq5NpRyqwgmvPo4TNzJAT4S5ZW17ZoC8G6B95LjbXr7msmegFT6m1QjVk4hRPf2g",
  "key2": "5AjL36RhE5QnnQCumVoMUDfszm91XY9KxjkqqZkWmBWdsS9B72HVUSYBFfZxJN3B6minW8mmW6Drzm3VuCcFSACs",
  "key3": "4uTNYVdEP6uRBomx6JxXGyUEXW85ioa43Ldz1K3Qe14r6JCGch2evksGhq3cFczZCwHbN7yiP6GUu3Y5EtMyVVTY",
  "key4": "m32vQnp5GkDZxzDdiE37iCr9zeJ4JfGukvyxcuUgjwrpxfvz9nqbeFzStCs9usxiPhzT9bM64xPiHQZ7otDHyZv",
  "key5": "51628VUrx2kcuwq2XBRhWerPRLn7B2vr5kWZ3PqceJLig355ASBqwp5BpTL4B2HXXAWiRV1vj4iVBoQN1Mf8kL7G",
  "key6": "34wnDtFpgUyVEPbSqjLU9QzFvWw1128VB7THoS53Q9P3fA3HsfDjJk9J6Sp1tXjpSgZYzKAtSwwPUGbj6BSjiTjn",
  "key7": "4okbVXTfejaSwEMpSEpHjcE274aypNUwJsNTeEgGXTpvcgH9hkdsPHP4LagpdsS9M2NiyYC1vKZan8p9AznSYUyF",
  "key8": "BsuHCVyYghWcZuPmfG9JxzxHYv9aCuNFuqR9x4SeK6Pw4JaW1LwZ2dAqS8Nu55ExaP64R21fkW87YBBae19C8PY",
  "key9": "45fTp7DHDPfXvikQgXAgcLyL122safqe1kcC734c3DQ6NAc5YxzpnVyYp3nqUM4Pt8XFpz3e1LrotfbEvheJNifQ",
  "key10": "uCYChXiY2A2EhQUUMkHYZpackeTvD9FnaUQshaAnGEX8ZAiCsiDohRV1FdadQav5kVZNmuoq9teitkinXEA3qFN",
  "key11": "5ofM6cm2X3b99qtiVf72Eb1AwjiZGQdizpARt85ccyUq8v9WQpkSLzUX1ufHZioWhtLVzy7dALqcWhciVaNP3XJg",
  "key12": "4rbZphuGq19Nt19yxdH93vufPkWZBESLZRRbNsai1xqdMC9DaUzHYEcXpg4UdPgYtyeQm9cgELCh7bmCPGtcD29x",
  "key13": "5uQbMf2VRUw4gQdDdzqxg8znBZsxhCzCpw6Jc5xSf6yqWy7QrCvqa6MEe4t38mtXXnwNaGB624nC6ZiGVrHeGZiy",
  "key14": "4vMoumoyNn7Tu714voZ6dNTwTJ3yW4GEeun8MH6D5dLpuCyXi724gC7V7385JgN3ZajCq6Hi83c9nqNpUKN3QTig",
  "key15": "4Tz38esnm82GL4K7X7pxUZ6YKQsumfrhgcx4BbtJwLaDUygQ6c8jzarf6BgmTeTLVx6xC5SHF7aXDzKyGKymayWS",
  "key16": "2L3J9Fm4HC4HiYcJXANebEizXmSdS4U4dBnN3Po97NMG1zBU7V75deTvpCa6zuEhJ2KrqkLSqt1Pw6wKwFhLYpXw",
  "key17": "21Y2kWmUginU9UCr9oLWMUoehcWwcjKN992vF1Ufifm6kLkpvEhu4BF5Ns5hHnDnNeN1pFVmAajZtiMhd5BMfiDf",
  "key18": "3WG93mWuvDHYFTQ8SnYCGFibWcqE14ANtSAZfbv8ieWe6LxNHctH9vtz457CFkhdXtDNGRx1gWQ8tm5eaLEXBwvu",
  "key19": "2e1ZU6HyQqqQKz6aqRczAQxPymjbSeC2tDYttD9UPqycEa2YLYvLKWzcoVoL7Y6yL7iNLmo3HZ95GJiTB1Doccbp",
  "key20": "5BQe66u5Z68G7mo9kk5pe1ecH6JArPZM8Z35kJ6A6E8Cqbz9vEvBEaQGctYhFCmvr6VtDpWxVt8qX8vKLkQnji6X",
  "key21": "47zyJ5Tt6GX2JX4qMzzWvuYzURDSpjgR7jkoQZ22Cvjn4FFFewyKS2eFgkWZckMLjXmPJQ4wqUou86gU8DPrxkm2",
  "key22": "4VoBYZ8f7Vpd4YgxvWyb4d8pwHoyMBvLgNYx4s8auHaLKMmuhWaNvKcAUbeH8b58ke5ihK4Djd43VDwjFLUyrNEB",
  "key23": "2W9KPAUNkoJpkoJFTjQbCxZD2ybxC8rUMXMxepthMEmpYeBkcg5yX9Zyzaq6GVYs9bA6ZCXN34p1QXXWHZipb7yS",
  "key24": "3aifm3hmF6ZDGh7CGbVxPN2VNt6ttKt8LKHxgxkmKbwaJPXnbeGxtia8vy5kwngnKCgWsKpw4y1TCwLGQ8g2N5W6",
  "key25": "64XTCLALyy7qt2qFGiKZgMv8GSKRi2DVSZcurZ7J7kr7GmVjiczfkz1nVk68uK85TehoH7YaPkiAz6Eg5sxvxKmk",
  "key26": "51RMT9HSKVrRaqHGy3e2RWybQacX1AEjtQ9wZqBVTrkrWBvY31aRy3XYZ98SYUsqDc1ac29D2aUjphC83CanYX3i",
  "key27": "2WdXDkyoGb5QvjGHLsCkSQqrxygEtZhE3zodh5SoB2AfFvCDB9qPmiVFUxwp7eMWGBXczKnakbWLyiFHhTKHcWi8",
  "key28": "3aJRdmFY6drUutJNtyJiZUofHZHj2yiaSEjDgp57eRvZBT3GUdRqEbWgFrMGAkNThdrDwL1vWit7PsvKRzqWqiVH",
  "key29": "2cr4cK6VZYSGX1KpZEp8bwjV5aPJvnUy2EUsdKTzmtGLgGF8twqjGwzTnnrMmvw6VyWvy3jR6bRNztNhABWYQviw",
  "key30": "3qBoDXab457FJGPYRn1Pf7Njo89sfyDH2fV8UzbxuvBnjtEvs6DTsWh8oxUHf9QCRwa9m2JL1Wrz674hWxW6xRWB",
  "key31": "5TvA9hefEcwGr6cAY9qfNG1ha2q1NriS3NqEx8v8bVctGeaSzTNUgeDj9BjthvZJbKatbjzQTBbsrRvAfiCabCka",
  "key32": "4f8wn3W99zk9k9p5yB1WDsnbRduvMtuGvq1CiSYhmJZNn3uJ9cUXKt6EWd5wj7Dekd9NbQC5GXznuXfDaipJthKo",
  "key33": "2bYUZsbyFysZfC4fGLJusyVsa8dR9S6JTNdHuF14EutLGF1a3p81bUFWEZgkpuXpGu7x85djhVSktKnDCS9zay7w",
  "key34": "WGwfSvEA8GKghseL4Y54ae2fD4BcXxeNQ87jB8V6SLzcLCi7FxBnYPzxjTSnboRaq7trMeHH6RRnidiexyvTXQf",
  "key35": "2ftiBieVstUSeJCqT48i5q4YKQmVySkV8DLr4nMqWFnFoswfXyQw7y3rbCdTsi5zbbZdkLWwg26yNbcvRoEvj7C7",
  "key36": "2VFX4Gp859MCd26AjUTjBRvve3NWSKG1iJ9uD5ie7M7UuSV7MtZfa2zLtGhfZ5xArxXhgCUxyPMC7S6NsaxC9pqD",
  "key37": "5pB6NnKRjxhAErkE7fzucN2aeAx24hz1yAgcYkhWDen9FKCiDp21omKLpfXsvrKPPE6LwVD5MgHv1vbNcsX1dE4e",
  "key38": "5EtKUWigvq8xEJepzSeiYRE2h5xH5HjyViy7SEbUpT5AdkPHWfr5KukHGfQYuqfkmKW2AD6W119nKdoxzSEPEf3P",
  "key39": "3HBadCfi6WthVDd3eoBNHv3xkZgTgnL4xcrvLvj9SCe7Xznpa28v2h1ibGUR4vxeY88cFEWpx56ibtmuecjueFHH",
  "key40": "9QS8DDoS73XxH9pSFf6Sr4852KxmbCi94p2BFvD2PPHGvePWYvpFQcLT4v3QhzUnM7htQ17U4h1ZxBKY23CK7x8",
  "key41": "59dp8iCAjYNBCFmJ7KspNmokVYKgPghTHWsdeTVzUha43TEzzxyweS2oSH5MCQkGTpEPU8xNz1m4Ho3hHPnWT5ro",
  "key42": "38bLftx3uHtx7y9jG4xGq5Ju7e3cvrA8f1U2e9F13YM3B2Ur4PAz2ffax4hiE2BctazL1DUEQDYzirAuSkL14oVh",
  "key43": "4tnXiZLN12BRY18jEVgwTJRBrk7K1EZNm23eXrHgboBczp2Xg6idiEvuDfT1hQVekxcg1Fw1AetPAWHqLpi8QkbK",
  "key44": "2XzaMpHhL3XiunoJeMypMvkAQJ1J51B4SjRty6JQoNx2HLcpqtmDCGVipkjgN4iDH1uF8rtZpnjM2ytJPW9nLKjz",
  "key45": "37USUPfrW6ZpKsde7Ltdj7SbGpCDyWucAUKJPH833AT75NnkTLvGFaPpwk4eknxAwb18JLXtPTn69xnMmdPZhQHN",
  "key46": "Zi8VyKewdGuXFmeyKXdCrxLebM646DEXmdzL7dznMNyeWy7YFVSTREQ79ytzCrtEdNiKvamuC2hsgPUY2jpjif5",
  "key47": "3uK4fpA2LiNN7VvfAoqFocp5uAQMFCAnB2LE3AAcqGYceg7zPBbvbU6h2LAzMjvY6aNqeCTxfKPgtYe2wfUhUikc",
  "key48": "4f7XRiwAwfV1UyGquJH4u3E68v6epmJApvsjNvudPSpZXWmM4xySGjs6xtujrQCoHanaQst4qEuxRvcNSYcX3oxs",
  "key49": "44c5CU32g3rB3iAWUvLuvjMKpsMuer3nBVXJ6tEYSGxudjNnfZtLWKoDg1iJpt3yNWfCudBnwJ6Dp3X9uG6NFcbe"
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
