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
    "5pZhSqEELdrpctoDS3sq6RX1a3j9s6WUQ3HoQNzZjemsSrMVZpjYeD8czdG2SZ36eHHAqgwpbk2BDfeL3z5tx79j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dWHCdxes1w82bxTEtMz8874LyvQYJFKQ8JRzhaoKifws8VfxYghC1JjCwvfdGzJRxfLgRwcirJJ8jSxbEefgzZH",
  "key1": "67iFAo5JuWKaDv6heNtVXEPTuL8fLGQpjJHzhSusM83grB665az9kLdzQg8SZ2kg4RwCz8bP3EMuAfp5Q8n1BhvD",
  "key2": "EQV8h7Sazjr9JQPEVxZYFVraM9sW3MxPWjgWSG9efRHJGWSV9yPyeYNh49pfPQAdbZoMuHurfxXiUKn6Js89R8R",
  "key3": "28ooKn1FjrjqC9Rn66bjwvGqQSfGfeFRMS6JnNvYwdc2BAuJTQLmedx11TZoPYHGuiir6iFjHJh2Vgh3vDYXgmCd",
  "key4": "2grPuieNu8dAGUomgAdfMfgN21hKeywxDduGVNr7hBG3JLTkfbB5Etmh56NNPZbtevjV8VP7JRE6HooMWtFvzfwn",
  "key5": "4Hm8Q1hNrN1h2NR2gQpCsEHCwJ9ibRMMr4augpHJt9ykm6EutzqeinJ2YXKEcesvMMPkoUgppudnEgxWHM3sPRDG",
  "key6": "5UXHZFZfph6bjqcudWtnC6NNSRWLSAFmT1ypyp3ARmY31i9qZEhjwJtLhnGgBJn8FVWPid3kvYAFZ1iQnTbdFz3w",
  "key7": "54BXbD1ryeZzchTdPBN1bCBtQzvv1Dx4sRqZbx2gwYsrwykus3hDA91PL9HgVcUTM5nXffvPGk5trLMWBdVSaP6Z",
  "key8": "29keYK6eM9vHXTdvXMfRGba6huGphtmTCGpMSoMGmv1WW73zRoEvTiCYLC4JPBMM2GCLV1ALcwXQEBd1jR5HVrHu",
  "key9": "EQS7Jxxzq7rtzYsi9eBZCintr3LUeKhWpDHJTJe9DeGmP6KDFxjdJVd2BXxLr7MfntggHnRFiKyF2o8uJMLHcWv",
  "key10": "62YbKXJFkQNdcpiy3hyKk1yNdpvEnLGN5ATNRq13WLBXcd9fkCGGDf7mBvpj34eq2KiQ4nSdj98RhiqLicrfNXoa",
  "key11": "3LD6WvAnidBhAJ8Sv4jshWARgVoiy5iHxyDGWfbjYc8qgh1QQCuDMLgzDXTjmt1H1e6Svimo6L5Hyjk8fh6Z5rFz",
  "key12": "4g3TJ8ZSRvqMw6ietTeCFYgVkrWv6JGPvwZ5dxdd68xvLNBu3Ku5PGaC5m7Su12ZxcpdkPZy9unUn4RqLgptgsfE",
  "key13": "HgGKY3QxggutKWQZzPdJurEjZTUNWFBBz949rTgtu4hp95bM2Jpd3aVDT9m7PJeWwiSHnrBybAaKNrzQwoP5djw",
  "key14": "2Zd5zLdhT3rpnhZ2ZCAwA5RS8sruawYZxsGzzii8aHV3YnBeKjV96A3ceUFxgDMUCrqKkA13a1uqhvM35FTCu6Fu",
  "key15": "ojhFBHL6dgk2AQhjojzM5xgYXgHirvQRSc6PQ95kbVMQQtWCViTY3M6JmgAt2X8qEV3qhRtNfFmNHVmv4YkKPgA",
  "key16": "5smHsB1BnnZNd6KSLAgUHhYFsC4VGAiU8LbGUPrhvCa6y4UaG9hRK4vSmmFuA7nKKqTgLngrnPNxxB1RZHUn55Vk",
  "key17": "4zBSoJn6oaGsemekeehi47gjUPZxXPMYgtoPkAkCEtRacZmjr5u4PjKUTNYS3d4D5YgsqRkbLebdZckza6xAxn3C",
  "key18": "4cAG3XrtK6eRQXxEm9VKeecZFPr9A6mtQLywJkRHXxYWjiyce9uUNiVQ3oyVjyR7eYS2QWqyjm1JLkwBFR29S2pz",
  "key19": "2wy5P34ZafUSpJWuB6kJhuXCHxCF9tevy6vKkKzMRxTF81Y4v4poXJgh9UjpMFjEhhXXv5P8L9fe6WK64gh5Mc8",
  "key20": "3QF1LVhhbj9KCQYPuwt2DunAhjnUbtoB2WgxwzzEK7EEgYpDz2eCoN3YFQts5dEmMArWrbj4j1qgEN8BhyPSRCcs",
  "key21": "2Lf1qVBUBWAk6rLjiW2roLeUedLjK92aYmjDqp2eLdX1w9ZN787zxMB7yEKh6TqErFsFd6L6JPHT6fo1Apr1SPrT",
  "key22": "2Wa5RhQGj7axTY8vCq5pAzyFRBLbjAfaZ2tSrVku33aTeCoidsG5HttXbT5vwxKtr2zGYycBfpwJmajev4UHWV8J",
  "key23": "2qj6yBsv8gwWNRoxRTA2Nsjhb5emcBQwfBptDiq1Tuk59962Qx14BUoqTQoUXRfjUrW6jEjyKk6TJeSeurFkCEiL",
  "key24": "5NAvFDSC6RitJeHNrDaLhQfGA1bTGMy5BDPvqofyry8EAudFtVH81JnLr1tmuFYhb71VB4K9mZeizxAaBZLM6Ncw",
  "key25": "2jn9E7iXcBj6x5P5PV91ALtGyHsFLnPsQdrA32rpcuW5bmDtrHsz2pp1oTeALXKG1BpWBvqTrcE9G73JiQmoxCc7",
  "key26": "4JoVnEYChgw5tcnxSGnJ3x6CabAsbyaDhxR6a9QN5Ur4VBMuKYrZXRCGkyJXe6KtqbLFaV41Ggtc8YFNsHr6V95M",
  "key27": "EQ3tz3sHQzXDELmrpLau5nndSUCuKsyfBVoM9yN1mGyAxXm9fXRKneoYUe7KR281VN23a6mceuNGMfGWvsf6JZ8",
  "key28": "5X2TAS3oCXArjArofi3HMAbSKy1c9qFsrAeKTyte4MXs7sVrHWuKBFysyEUyiJQZBA4p9VRvMDDrGaMrE72ea8Xk",
  "key29": "5EVDs8QM1e23vPUk6fmvuTvhwN2pq6mBDXTCg8dSPiyZThKJFVXBCYGvwseYuhr33EHLw5rbZd7sSTSFs6Znu65W"
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
