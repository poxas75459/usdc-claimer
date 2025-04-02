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
    "4uPQ2DZYVj9AdRAoPsZAoo7zDxR4BXbKWNakTYSJ8w8NbTU6FNFSj1H45NWoS9Ef8aG7hUrJZPvpfuRJmM11Mw5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38M7Rjex2WiqmubXwjwgcZpXotpBjjeWUfc9kX8w1Sno5P9JjZbT137CenBndFnDKQ94RaF2LMPpaoog3dWVdZ9o",
  "key1": "4Rkt1k4WVSMnodgNcU1DC7gSX8c7j3fCkJp1d11DJrjGuEUnreBrzmCKXxXCeUW3h4shRsNrh1FejnNVwSZ7q73e",
  "key2": "44pGMogFJsnptV17BFYzgRwwHZkAZhKTPSqdKNHP71uNmgTiFygFHoN2csUwhKehSgcxFyJdMwrcRC83171VqiMz",
  "key3": "4WpssSSxGaQyvSnHbn2zyhGxDXjBbun1jPnx9CbYANKv7Twi5gbSZksaQxtZze8BuvP9mSvzd1uscFWuT5QNuX65",
  "key4": "dDAYkZqaXK2Zq72jvBr8rMuBpYobDQjHwYNuMoiG2qyehnxoSPrTpy8ezpUQhsDC2mHjrdJqQqQBNnVf8eGsVta",
  "key5": "3S5k5FQRJZKrS5BfHsaFdHiwzoJzpxFXLu7g1K4jgaD15S4YjHiEvJZmhsuitwaGgywbWZiTwCvaytCax2GkDRe1",
  "key6": "4nPzQFkiBaSQ19ncL6XnsHxfADY82T3yjekT8iHGnKNSnTxr9ALTgDVEhyCi3cT6BVfqQr2eoQYvG783Qqxtm2t2",
  "key7": "5cTt98YKBKXkZNeJdmCL8wjmDkBMfvRpp5H3FY7XfZdRHCCvYSh1832xZ5VwYF89anR9MEjzbcuWBCRWJfcCNN2q",
  "key8": "3E2xtmSfQV4CksJeW1DKVCvVGxMCxKGtDSxdfiWs9Gd3NuVMnZQYXKAYTcefvojKJunscMzaVxS7EsNpAoyBoxki",
  "key9": "3NfrgWBRzEuhNuisrWFWQ72wue5eo24i1Yr8xjN6JxasAomctvTxcWJgFRauf6RP3HaZvnqhnhfePZz8UaWLhx7W",
  "key10": "4LW6fh6DmStiJjNjzABpyUSZW4MVAJ6betejQPX5NWD9tQdzThP2ismCmP8pyjd179b8xqx4ZRjvvnrSQDdeaehg",
  "key11": "v2R5c1jZAhVJ4cHvsPSLZhZY6DdiUaPywzfRiMa2f8EaUAEE2du72k6CaXdHauDGJzEh5vCbDpT9CXzH4yzwAp1",
  "key12": "HgqL2GPM2wkUnnB1QarukSHweeFtmcDkPTwbhc4i7ZkVTFnE9RKcEkEAZRMiwwxudK2F7h9N1SBhiWkGdBzH6t6",
  "key13": "2qtc7LszUePBVL28afnLJSmzvS6SHnr9WF4YheY48mERsFKyYDLDGbRBUezq5mnWKTWShLiNpGcVM5gqYqZpPqdc",
  "key14": "3hKZRz9jPXi4cyCwfrKu9LvJu8NWB2NATwTzwre1oTtLJzAa7ngunvqbhoKkmse7VY993rJ6F6HLNZRNNNMjJKJZ",
  "key15": "VN6Hs86EpLiQaSMjeMfpc1RNyko6VFxHypiQaNiKb9f9vgBd8pYLEypuvfVEREGPHyFL5hMFgqhXRzETTeVMun5",
  "key16": "2KVPBZ71RHnmemjmRvj3WyvkPcWuWDkXyYv3F9fdGSqFiAARYSHGe4m3ZRc2NHhbGLt8ynB2JRoHPZnExTXk48K",
  "key17": "3m8fpNzCjpNsMojUTL4qShGkovgeV9rXHcjznLaCADSvRaoVhVGqzNWnEbHfsfP4ULWZVr9c92xWbhEvbVdVPWGB",
  "key18": "2jfgWw6Uve9hGy79mnsW5XcMnvg6ffvhMKHv3KmQ1hj3DDmEsRXkrwvGj62f32TPjaNWoFAPxJxiRoBsd78dAhLk",
  "key19": "39aKABxru92k1tKhBacyfdh495xyEUD524k5JKWRemw7F1tRK1EdsTigDsTDmn36XvWBvap4tmGFspaXfgE4zDN6",
  "key20": "2p8N8FwbpL666b5u4iT6Zz1D7qmycHfhwzprqSPFgFiNuL922fbQr6p7mJ3QfQYaovCQcUxhkukwxpHxpF4Ksjpx",
  "key21": "5pohpAt8uy62gVkQ3NSm7dA6VZcsn7YZ33VWmBrrSLQKzPAy27Xnrf7SiPFSWDCruNonNWkSjCFdFSBNLHmycehr",
  "key22": "53CzrTrrJbsdS424xyKerMFTUaw15oMKcdL1DmGxK4FMeaHvJAVgsV5dWPUtAwZWwAV1yY6sT6Y6zXe2RgzcYsrN",
  "key23": "upwrfxWK4jpA8MtBzNgDCRnSg77oEinJ47qbe9v8RxMKbRf2VeFmnjs5sSPraT84vfEhZzNWEpXrP1SskDAnPfx",
  "key24": "4azzvk4ZPjaHHLNQucZ7d1Dptscau1ETu5kQxV9at9cfPQqMGecEyYwo4nrLPmKNKmaCvtXsrTn2EL4udLSMudyz",
  "key25": "2gDXKccJXSFuefXZ2gCCnBsqud5BhaZNA3an6PqbB7WsBSmvRWNdW6GNyCXJEwKLRKm5hvqjtBHKpTxSxZBjyPgS",
  "key26": "48LzA9Lk9R8crXiM7uQgqzFyPVDeQVVg9t7pAaQaiaYdJyhhjqRyPUT9MihPCJqw1Fo2tAGREnzH9N7DJETs2FN7"
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
