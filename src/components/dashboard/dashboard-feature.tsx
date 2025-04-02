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
    "foKwkhFSneWxBpuWQKMcjP4jmgpzV2FoND7tbj7TGUynEEohU1rsXxQvHQbE54TMeZdKzSjxnkGzfEHFDkacM7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GrqmetJUNCArxsSAkLDyNK1bhAjcKmy53hu5Hc1osdc7UNm934DXtjzisJrjrLhefUciK1e5oMaN7kmbc6n6VKd",
  "key1": "2NT76f2Aki8FwHaeo6gWvXacv9Astqw3j7jZtNBTN1GKy7wLPdjtufQpXWQwCFxwFwT3ruc2rP4WSgskDV7LTjx1",
  "key2": "4MchadDHAUBrUjoFS2QfRwqrKR4gWNAScLsVpqabQT4VUALPpLzDAMaaNGdt3aCtVUPo8UTyzLSKXyH8Eeb9Vjyj",
  "key3": "2mV5BWkkdGr21oh95h5JBnMAsAjoMk97pWEqWTAh1NoEXq9TGon47xVBx5b41AX416WYdseGQjf7SUxBEg332KwR",
  "key4": "2E8mY9gAeFwHsUXAA5BVSxh4yRn9W3UQFckMpfaz1erEZ1Af6MnkJfTwAeMk72UcEgwLN7SRKE3mMUT9tKQoAmdo",
  "key5": "4Sn1KuH5ZCbVQmsnuhiv4ktTXMUYSQF6wfS1itLoBTAgsPcHRfmg5aCJ5KL2FzZYTQErpWWjiaSrYHCjTu55aUd6",
  "key6": "629n7cpd5NBK3FrHfL7r1DzpeNYZUYp3iX9aqTCWaj7WwgqKtZcgQL9JRwyWzGujr118ypJjkxh2vCyTLzc21L9L",
  "key7": "3WmSxaq4uZ2SEFRjMmZ95tVopBwZ2iwLYRD81ygbKgNeicXuUNSuqjKAKMEeCd1A3RFkMdue5uJuA1JXpHcRmzUy",
  "key8": "4g99PqyMfGtyHkVBYVcZYhrxp4zdFxmBh6qSQ1BNPkyTPxdZjupz1b8P96GRvQJQs1XmwEbsya5QuU9X97L2bqVk",
  "key9": "61Dhba7jpX77N8Tub8cQHsQarGQA32qXhC2jayu8GFWhJhrQJAkwX5pgWMfJqeeSUpcNDXCRJpJUzPN9bkSLh9LJ",
  "key10": "5AW6N3jsG8UTWoqs5EKbkRyKLcgCudjP6cwppj9u37uYrnVYTfVLuV7RyHiy1jhycktSFUxFZYeWU4xpeFqkAeeP",
  "key11": "2qCbGR7qG55AwiDaHJwLx1mELYqZ2pFZGRbqNDTg1GSMwEr6Vncbz5W46vPeKuHM1nGPRab4zrMEE2ho4wi9THVZ",
  "key12": "3qoLD9dnTPRejhrQDzdFgRmHYT3FQu6A8S2CiicqwqpZYJTTVSHYkAv62cW773Y1LRWeuspqXTy4xEBHZC1G3guh",
  "key13": "4cU11iQKEXMbCXFF8v1XzR4QKrwqfdBmpZbiiJcPJBVpJ67MBCsWfKz8osALhXhFSwHGWB3sCuVTqy8UNxciQrGG",
  "key14": "GcZ2fwMoQceze8Pz7Xb6eeyByxAovwMYUmFgJR7rTDMiVNoNQGAuURi481jR5EMHwdKccWfNFsTqdDVUc24Denn",
  "key15": "2SErXdoUJ6NQTo3Dj8C7XBNggN4Vntg36dWH1wzXbJHaNZGUoVpJG6Sr7MWFBw26qmVxKdyG64Dv6KQHhspfS77k",
  "key16": "5zPD2jVhBLdywe85bL6AzDFYVYRs5hMrwD5thZToxeNUVb1ns9zFN5a6cWTXeQkCBfsQdQbjQQnUKPCtwwAgi9x1",
  "key17": "2myCgXaLpYs9eacN98H8YF4u81hbZK5fo9rYh6jZtaiY3riRjmSU49RY6YreTDgzSmCfZVYjfStzisj3ztLBiA9a",
  "key18": "46SZS6hprweiqyCbvYrqetRaebfA4TLS2CT13wGwF55hUSAXrtzTuAqtGkqTLrCm67XJGFsLoDvn1Ev1EAbodFfZ",
  "key19": "2NLuaTcAL17Jk5YLxYMqxv6xEKmABLghCn9qCE4cuygfFN4y7j2PXzqZeZNGKSEUfZEBKWk1WDnKnT3iQZPzWEeM",
  "key20": "4HKCvFNHyzVgnCE72dxPAxkFSysjzJETf8TG3VfYU6vnsEPv2pWuzzWmRtwkkYwGirvYa1JRRj9u4rCyBdMk2tAa",
  "key21": "5vtpyCqdHCDUnGJ5Ewmv3bsvWEvwkVka8aVMiSMNFz6JsbafMkgmY5CHRUeeDHNg3CLxRjZKbrT9CCJuJ99qxr7h",
  "key22": "2Lr6o41jKAx8PQJVJzZYS2rPbm9FHdaC9QaQYU7maG2wuUXPq7fHXg3mRy5NCdVtwzegP5DtzG1MTchyFTdtNMSy",
  "key23": "46xoD7BM2ND5JdDLWKMke8EDZ4bwmer62QkNeL2srbN54kyyR4QWbaBAKhJwLvJanSVbWNc7fEs6gtSsdbwUZuzp",
  "key24": "YRDT74Cm3ptFmjaMqKMr4xCDmmrgy7oyMUWMdftP15rjdUDdvdZfVd6Wn5xkq5aaBueVVBSyQTLdiZS4GzfMdpA"
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
