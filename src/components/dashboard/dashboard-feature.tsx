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
    "4GH2R3N5D7EzHAKkhhiPpKkNBs9Y7ZoGy2yir8qdnWYyyAiYXSMSxuwt6CtSBxMXydKVzZwmr7RTNAMVCsWLW82y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jfWqkrTSLPnUh94ifwdiuoAXSSe3R9SdZDW45Cjtdzfyji6qs7sREpmojC28d4R5tETRjHZTjSPxMXa75kxh5gW",
  "key1": "2ENsFyvULaXvT5Mhrp2KencJmvFWKwnYvTYHFk59jmsicQpRBsDXFgazTvbkFaimfCg72MxRj9G2n1d8d949XByr",
  "key2": "3vHG5idrD5b6awnTLAGMmJr7WjtqNrz6dbZRuQtXW1j1nkiKiZtUNuog7BVBrrByNfwgCSevrCpkBnMSbRCCZ82r",
  "key3": "48Smmezrf2aRdVKNosDknpY2ksaHSLjYPYsY1Teqxq1DhnZFzYzchPYFpNyGyVhvku7DeXadACTQWJunYxnVoTh3",
  "key4": "5LuXwai6EEhaLKjcYTYKT33mwtP6H6HEgry4aayATJAdWWc2X6E9WoXAYkMgVxfttMc3yUN7xMx9vHMfKL68yxnR",
  "key5": "3yuBTRxGQeZFKXBU1rR9tM689pWy5yL5rUH9DGsoDH7DGCfMWNsyxJ2KU73wkiLiZjEFC1RUVuiLBPjX6JoJTyUN",
  "key6": "2q4Z8xdVe8qBGmEzvXwVcBK74JfpLP9hwAcuAMrWTzcXtcaWgL76Y2PxFTsmh9jieYCGRn4gfJypcVPiD7BMVdXA",
  "key7": "5XWbmYxMUHcSBaYx367Uq6HBiLeXSKr5qVDW9UGrRYZhbn9dRHbb6H9EnWSRKRGAt9KKQ7bvomzkFPjvP9XRwc9z",
  "key8": "3GrJEA7K4LVwnsis4YFUs4Heq9A8zQhuxUin2dXWhWBLXuJd3cAdsetSD67EiF3sLUbnNgMRTm3bhXFuq2szAZNG",
  "key9": "3FySnqkYBPnVKUnnNQW25LykXhon61RCF7vJnR3ke1rGCqnmEnqmXroCTE9p3ULDN8Sg77HEJYarWqTpknrz6Rp1",
  "key10": "24GatYbdVpAMi35zLo4ZoPZqEjKjVfSByiidoUJSSEi6EH8YEjStSaYdhiu1SoZCPKFARhiptYsVDqcDgfEaAHG9",
  "key11": "3x2eUg3qxN7PXVYZoo6CWZNF1VVhy58pD3vHZSt5gukESVUvVpEHyGVT51w69oJcEBJQyMEFXvog6noLpY3JnrdL",
  "key12": "4xWNEXjtxX1hr7RhkZSGsP8hmR7agjpG6e9szwgFzzzZsVZfgVs8fXMu3SQdta2QLjefh6z28ecmdEg6m4sjTm6b",
  "key13": "2YhaFAeVRfMFFPoBWPTo1MhQqtoUKSkydTEV8wTT3qAF1EKsvvGFwsUuqMgeZKgnuGZyufKV2v1caNUMkkouuPob",
  "key14": "3dAEBCbh3zsShCiWnFaKi5x7HVhKDS9QLabZG4WP6gtSpwrFbPLpinx9jKGbNhxR8Fe6k39XN8swzQuyzrUDWAig",
  "key15": "2ZNgYjAh9WKmHidnjXxjASYGES1HaohfTQ6jb3q2yB9oaAKZ1kBAZ9eMxqohivS6Mzkzd4NMhpxtc1EHc412SvBM",
  "key16": "4SqdJMujEGXYeuzg69B5D2QUy2JctJ6u9kV7X5CjwMyrEiUUiotusLFiMiPc2P1CGkxg7nWfD71NBNQMNXfyJ4WU",
  "key17": "43z6DdS2KVTiiPxXWxSr2ByXKanZdzs11KZnDBTErZkPXUey3XArFKzZkCchDhxVhsR4nNv4X1YaUsiNkWvDESQk",
  "key18": "4eAQV4QDXs5ovfAh7ixYBK6BR9djkK4A9bVYNmWv37a5JpdSbhtFGVhfTe5N1FujRZK3Y18WMqi9VDFyFQZNaNvc",
  "key19": "vrsXsfnUaypbFZ5PcYxuTJRYtKqKwdsDF8R4WSa5xzY9sB1NqJENR8rqoAG87f7HRXTwpUT1AwCSr9PhSaDEQr4",
  "key20": "62gpgUNNsuAiRUkka2S498P3YnX7xTxAcLSWC6m2JkHcrZ1ZWMinhnFSNW25qpRxJaDAcnfCXvNCEnQbeCeV9Etc",
  "key21": "4DFWRRqMCk5Z7siuT6TN9eDL44juW56fgACpvk2Vj1TGSyXeVZhkTwka7rywgRhn1tk7dZMT12PcyfejgAnw9nCB",
  "key22": "TkmLzRSHSGER5wXM4rjxSFzSWFhnkArD8ihJFsj2tKWvq5eUdAUDY1kMLij4tBgDQ6aNZnC5HZ9hiuH36Jr7XhK",
  "key23": "3s9zCfXrGydSvca21cR1bizcoXYEP8S9nqPzxKEQoWWsUhd2inj5x6HeZtZU2pTzaXvtMbjzB9XURZXTpmxQA6mW",
  "key24": "5jnSy8GYvNgNHrXZYRa9Vb9PRuQG1MDbfK7ezt69eJ4Si4XQFYQn4s4kJSnSCTDZykUUw9yJTeBMBvupi1rMoWNi",
  "key25": "4cECnoXyTSu6VZvufh5QUi7iJ3CZB4SBo2K7mfoKCPtrZ9Y6Hww5VPZVMvTYeP4f5wPJJjujNqxEWwtp1vLNwUuj",
  "key26": "5u8kkzFTaDLD9t3pJosUJexQpTC4ggr2bUvwt6jgntmP6ijacSaUu8z2YHZMeYoRBxkyf4hkMYLKGji4CjqpYQxk",
  "key27": "2vga5A7h7UTaD5fLvUScwJ4o221RGkfnzNzEQTB1WE9hXagf125FmAPtLi8c9YKpejxGnR4zYoVK17kNXaK3HeHB",
  "key28": "21aeTekPLbSUooCV8b5wdKFAA9zEef5LNZuu8Bdf6eBcxbDVvZuJvfFxAZda8KQhrbMdASivCb7xi738Gqr6BTac",
  "key29": "2N7ud1KyyxwiUwcbxaQWvfFGQVSwb9BeWqyBog7HGmLYn2AzgmREeP8DHtZ253gEB1AHVyG9W8n2NCkv3by5cENG"
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
