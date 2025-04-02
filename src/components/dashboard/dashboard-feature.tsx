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
    "eJFL8AuGbJ7RdoBk7aytUsuQCmknuBdD5x62rpUu1u4TKUMzhTwf4chP4kYJHbef8WRrTvH3G6MNQ3SkjQuyeWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2thsXXsnwRuXDvzmMBewL3DEmLgvDWEw7hFBA9joGeiyvM8FGtqR7ZqjNAEmm11yLHq64D5jc3tr6p1ZB7TX3qM3",
  "key1": "GUEtBRQ12oxFmxmjok2owj7k3voFUai6TXSSdfSZuaUDy33bHiRcghjaaBdDbt1bSMAcVDJVV7GG55Puvsp8RuQ",
  "key2": "bR16oaDCv9jY5s4rRLR3vQdzQUMDPF7w4kQTPxBps1sNH51Cnz6tAXcjkTwYLGkbw89ea5rg4kEpmZ7hitgsnas",
  "key3": "6udFKTc67FqwxN1ZXtRfYG7EZEKxZuASJJ5xwwXctuTj15Qri28uwRVWULty1kntWLz8YfPcbfBjC4Y7YgeqU6m",
  "key4": "5w18Tn3PPzM8AmRA8cdMTZ9WEcL9x3CebREP7eHg3VLphL2keYVGADJjyoYSqxZrkyfhbwqD8wELdXTtZqcoWh2n",
  "key5": "5PAQZTVPMUfN5HysjH9u2HF8BQ9n5k8qnYXrLAm2qb2Ud6gSizouaejKCFa92Mf7pSaYbjVqws3HsiSZVszG4hZf",
  "key6": "3UjXTjUs9Zm9kipyMiN8JtXJYdxVi3PuZkQfekCzmDQjmNSRiULUzmHUs7wtGbvrnyuvg1AEKPcqWWMHrNUDH5u",
  "key7": "3Kf9QVFXcSNfQVouGD838w2oZu1V6se3TEu8duu7xQDxEy2uWW8oH7tLeHhszsBgjQFyRGA87WX8RXbUFg8u4n6w",
  "key8": "5uFLiSkT2P1K54ehS4rm2BZpAAF3YP8TZq9ByNTwHtr8h4r6FHEM8U4BDU1exdSVMsjPSVQGRRKPWSwjmBB4ESp",
  "key9": "54BKockRoFwNi6UzRNHF2AtC2swdDcwLn3nY5QBfk8vVKfiE2keH3nvzdHZXQveFyUc2ZmWRHZReZfETm7H7RBjB",
  "key10": "3FyDUHNB7LsjdPVvLmy6zRhw5FXMMFDLtsV94GfJ9ARjvjJuUf7FBwAcGemQgcgaJs4mbmeyKvCxRUdezkb3YJyW",
  "key11": "4BXFM4Gnj2uL89jWVSyppk2dLDtvc1W5SEVH5xKw4jwR6LsdjEfNVg49ay3g4c5mKe9Va3n1uaKdpR9UZoFALn8G",
  "key12": "gru7LyFyxD4vKeBfm76JBitDq8LMNkRuWyczHNHVwrSwTBefQj3TGZta7PEvNaVdLMvdd1Ak41rFXu5qw6Yb4R6",
  "key13": "5mdeT7WQTMhTf4aaLpYs5oHxEhwvbt8G3rqaqzkDtqS5zF33c9Tx3AqMaM9gSMgedp2gHGe2dW3YXf5dNSvzqSPP",
  "key14": "5SoMjYgWMnLSGyu37AemiRqLLGoxTpqtzMbhZEwPEZGGJFc7V3aH5yHY34Nvc6dUfwnGRzAoAbhw6NCU1doY3fsq",
  "key15": "y3d7iHwcGsqJDg2XbGe5V6B1pd2CxDt3XKVY7MrVz6BmU1pg3JQsQFTNrGA7pJWCt4fN9rEP5jDNz3RNXquiaz5",
  "key16": "2Reiiehj8Y3x7yKWSZHftwHdj97hmQxYRn7Bice3Av3nnoaaF97geTmJwLdy8e6JUy7onqhmvp6CP1yj9ShjYqMV",
  "key17": "WYqycYv5MhQyjk5GFdBgFT4YxRrriTZnRUg3UtWUdNoV1LYj6SeajBh5TPLGuE5tdKWAGLp43iZVwAe7tPDvRny",
  "key18": "4jPCA7SurPacuRR2bkZDwnvk4Z6SY4SXpFUGRGht6MuknFfeZZuN2hvYyQ2FxYwYCNcirc4phQnazPwttaebJVdj",
  "key19": "3Ago823g3jQBDUfXN4QqxMzTjtpBfGH93GNAQdY6a79YuWqC5gVA1Zi9tjBL5bLtNMMzsN5AziRzNBgrf8dxXgzc",
  "key20": "5f6QpF7vGuHqvqWdgxVbFFK1fiQ1q2RnQ2XSjRSC9bRh1eyyJvhWhG7ZtS8TjtuD6Grdve3u3Tttn9xiu4ZHDCp",
  "key21": "4ctYqadwcm88ryREvKwwyuDTEhxP9kkXjR78QgYiofV2gdivnUjmPchf33q2WXNpcKDbQaVgTXt97V1XMi13sBNR",
  "key22": "48SSruQzpZ1ZsetumtK4dfCU7erYurihtNtupKriLCVqK62MDxNKS8VPsFPjdVCx8yFzLikCdzybjSJiR8gaN52j",
  "key23": "3ozpiuLFbXx3TQQLAxjyxZVTQcZJoVBBCWvxCKAGDyDhfSuQ3HFVb2ctjkdw4GJVzxmPHFa6vKYiwhTsMhee3BEM",
  "key24": "4j58dDwTzxAgABPSs1mhn9vKccdzyaArk5trGUZuqfDGbhPyWoJsgy55D1t8J4UfPUncAW6uJ2gnEC1Et2eBHXwK",
  "key25": "3fEXGM8gityKcBWNsHzLqPShPuqBoZQdtXLvW23WPrGpfPtPRhQnLKnQwpy6KSM53qbus74iRv5BZ9cnGzyNmsqe",
  "key26": "5c9NALZVUPCmqV7jhCVfn42nU1vW6Fpayz4S368FqewTevd6eX7oRULaT7gNFMxGbdM7435D43vUBC3xp51g54Lj",
  "key27": "2pvn3fabFZfbrTA3W78yvZkWCAeonTzEae5EfYcgm66TizTWPeqKruRXnWZJ7Vautnb1DU5aZtkopd5GRTQfP8hA",
  "key28": "3kthdhucneSVyk4ND8wq4JsS5Zx8MJp2XjEgtmE548DKgY1VUJQMvCtvT414GWJAwRmiB3X3oPw7fF72YRXqxaGr",
  "key29": "4beE6RKqnrRqtwKLqP8TXTUyn7KYvZkbkhH8wGGjPW1CXK1sACEMKU31VE7RMvY3oUCphagwy4UFcRpRqK5aGtem",
  "key30": "2iqKNZ2oyoSPbhRW1ShizbrLFquJFiAE34sw8EMG2iLnJViAM35CbmbeiYRNXQaGJKnqWKE2p3F88vXSezGqHxdz",
  "key31": "5mXLx7vqSfFNFFVB2y5XTNEddyXLMUdJFqegoTjtG8isaZFMT5uXaqNUj1SoiRo4VfDHWhD4mbLDT2VYL53wdsXo",
  "key32": "4LGCKWGVWw4E5CeD4Dwv1YVWdLpUMfwHKFEvxzenyGKxZLZjw7FDH3p5KeHCLTSSTpuq3xfrK8n239xwGEP2sA7P",
  "key33": "r9D3DeghBX1iRDjTyTbnW8s6gPKDjhtw73WLk9wSAf4gqGZ3ud6UH8KQxCNiqHnsxzNeKDNynuL44PQDzqw2XX4",
  "key34": "39tTPeJStWEBocVRhQp2YRdEBQHfjWD34uSEafREybmTdPbhGZpneGVcTqiGAAc7LSxr6p8mpmXzjDAnGRN3DQvy",
  "key35": "XateKpTPdvueeY7gnz78wAxpxzxagNwXjGBeymisQHi1bZwTZBWEEb6NJbSssLscQgYZt7cEVA21WzZV7F2yhLu",
  "key36": "5WaSjsV2Ybc8BaA6EQGNRAD4YaQg5TfbbVyepFwTp6KM5aZZLXkeSnWXEAb4SaCmL3jqyDzoLzJstqE5KAMxYRxJ",
  "key37": "2y8ZtqVj1RAKF5MhCPtu6fxV1n2E3kpo5upYvRQMzgi1uhqw32gz58tD5Y6CLk8SvFus6pkJ7dg9AVM56YX6Dddm",
  "key38": "6gd8a1UBbn1y253FwgX28sfobN3yLmhbjXYBxATPNuQ9n8xEEcLzjeMK2uWce47URDCe1tjjFxBsUjDeWrK98tU",
  "key39": "3D1pTnuDamvUPXGeGR2DHsxoDrmKUMq2fhnmMEjtS4yrvcSbTA7kd7qVa1kcVrnJ4E3nMnZLkNitUDLU3hShDg4H",
  "key40": "2yG1fuwpAgWFMSyzbwCuAapGXoxfreLqqgQu7bYhPRwwcYwPKosJdHmAZ2ERydj8FrLikHJHjxetjeLxTMCT1EHF",
  "key41": "5s2a3q5BtwGxxTmcvWeLPiuFQYvEqaRuQHBi3jAfhFpvKyNN7jrT5qXoW6DFaVFrGBUjpCYBg4sk3CwnWiCfAniw"
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
