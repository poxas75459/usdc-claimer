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
    "av1BRGbpsj2vPRtUpeg8adzrZCrjMY1XTGUmfEos3QQkRy5j9TysKppetWfBagkKfABhMmiBS2LrEViJ2nxFTXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wpbKyJXwpLBLg8DdrsihHpVv8fQ2uXn2rPrHBNkwGmKv8L4RofRqeDgdp1UBmaEhRSND4i5mYmdUXELeqcmbZrv",
  "key1": "4bEien9AeABvRFM9dcRh9ie4uK2iUEaWnsmjbowQt1sRgWLfhw6bzbBZ1y4gWBXvmcT8FjDJyFHNMpSMkWiC6ADH",
  "key2": "5RAoZwdgFDFhbRSaMVYtZEVzqKBXsaaYUPms7HFjpDbi7HbSuLHctmTxgodAb23BvLzpDYUfaNJHkRhWubyhfzzb",
  "key3": "4cvuMpEJ9Q48Eg6eNpVd11VGTB8AFNUsXLa1SGyvnxt7GhfMchdKb5AjGqBz7qjrP9JEyQKu7exqnkfZM56LHJ4D",
  "key4": "64ggidcRbgJd8KGamgzud7pVbk3uSRckTq85gFyprSbZkMWXizHtbxhuAqaLuzZMn5tKpK7pawjqjYncEF5DmADe",
  "key5": "2YGHfAwibEyhKbYtQnAPhmcWdKn46Q2WZ1vQnaKFihiofBuyo2h71TFf1ksJTTrz2EZW8MnJgvX4Fxtk8eAUZcGT",
  "key6": "2ucoCWz35ZZR9TWmBXpD3ci7a3PXm9f3HETbjS9pPEgpUdLYMpV5rrBA1BkayM6fEZMvM4JK8AiMZ72mPbWdaYe6",
  "key7": "4eEbgmyxGDTtairiTMPGbqviEUyJXLkAgdEwjVW1q83HhX7K56S1QnmQm2LY6Akp8vUcwY3EqNfPj7bdmVmnQY3c",
  "key8": "4RibtVDokyoygDeRMxYknhoi9E2wdK3xctTyAhPewa7NVegqZKPVTo2qxgUGzkM4u2EJ6dDsbLYZfRZfqjXWgAar",
  "key9": "JnxcNyjQNVecqiLV1iT33renTb1Dy2U246cbMePo9gKGJuUP3eUmZTARXHxbSByZL77DHBRhyWcVueqP5ux65qt",
  "key10": "5xuFCfvy5NfmLZ1S6tkqeghX5dnd1n31NZR6ernKjgCp8Au3BcmBSHcc44s1z7FDpuagunSPuoAy3tPCY8Xh1XW",
  "key11": "3SYmSe7ENtUeURoyQmsJF4ju3UjUkF27jk6q47ucG2SNCXnFpDjirBMcoV8RVAVVvUsvFEHT9pTMskfpJx8ZmtNp",
  "key12": "b9f8eAMr3UAHST5vbD78FmTv2DkjfUNVZZ1KaN4ecbmPNdbzq6U5A4zqZW3LYb2oyjMZPp3fS6XEwyGPvMmwmgY",
  "key13": "5jLdiCRnLRMQKbo3Xw8JbPn8GbBq2SfrsgC7oHPsjVftYsp82TTWq2z2AGYjE1PH4BudmTdS7jWDBjjaNXEoAmsn",
  "key14": "2XCVzTiS7MLko9MEunJNs28WyjvrqCdCFtkaNxyVuMijdCmkMqYhnHAE6mwyj6UR2GbJaJipQQDtZVVqYnp1eVkL",
  "key15": "4irV8uHuKAegtgogKjhCJFt3GRZ2vc5Do9g1JAkDrVsHmYp4cBy14UNeN287jFUB4VLsem86mYXXoGjdhLGN9T61",
  "key16": "5V46n15ni2WmA2wdQvFk6JAnRodowxMfvatBiqTYkStbviDLrgJbi5S9WwARNLEUzF39oiBNJcQ2D6f2cAygabAG",
  "key17": "2RtPUcqiLLBuMjWQRTScLRDQYa1fxdJ7akmWKBJ9Dm7LWVS6m9yJMqatbGK8cAy7agN8tnarR9hSAvVYvfEVyK18",
  "key18": "4i6HFLGnVCYt6nB9ona6jje9BxSbca5hGYxaPDnLDZ3dGK1n6AYq5T2LmbJgLu5UKCLmRq6vdVoviqgzKbsDUn6L",
  "key19": "2g7sr8db6saPc9o9QKmtSuRRpJ69Rkm8mdUtXYcy4qhy46TVqGPMqbvJ8aUX6MKZQKo9GYgzM4MPk8r5pjfmLE3J",
  "key20": "2fsosC5pwJpthK325hnZq8AFq9GArCg7yGd2FKHq8xGTWLnkmhjziAEv9nnSYXLRr5ynXHfuPoiurxED4KRAcrDn",
  "key21": "6DGgEbDaoX7kgFEeuSjg9EXPmwWpuLJwagfo5qDvB5vVmwKiqwi9t54y5RXEy5vb4Y8A9nJPD6kYctU5EmTg47R",
  "key22": "2EL3aJbHw9ejbEGP4KXNJj7Z3o1ZMzsF144DCXvUtuBZr3EvZBxWKvcbQgcZcNbEW7XyAsjgKmqVwzhHeQeJB4a2",
  "key23": "2x19tGkN4CUmXw36ZroZFGHHUhNomjQ33D9XMGemD9hvqgVqphz1F9h8RXpyjjDp6cPkbK3XNJ7h7ggKa4W423AN",
  "key24": "28FfmZfN6zbdcTLT1Cgj845JG1xCWFW1TV9kqkK4TgPy4SQ6nHPZbve8Gc7PcAnphPfiXyF4obbvGCsc9ue8G6bT",
  "key25": "2n9t9369Nc7rdwhEs3naAHJASs3RRPSGdfZSMsGBWE82kZJxvcDqjfoKsZjHXz2pWSHqKsvv3XPjeF9z6SxrwtSa",
  "key26": "2tz2HsQ8TwuQM3XNv8QZ1UR7Q9b5admUbaXKyDn1AYfRJKeZL7PW23enwiRdT64eoJh2jcxyJ9rThi9PBtvVSH6F"
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
