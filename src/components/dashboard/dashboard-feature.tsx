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
    "3taSUYkYEe5HxDp5GZ4AAThmdYmXkVaynBUHVw4wiN1KW3FuehsRC2MyiYkNUpVqCuEexs2TaTne11hwZUAVKHgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59fME6bfivFCcsQTu5HLhM4SwRtm9KAux8X7SAiwtyifmWRoDnNR3aUvnLQgZ87jZ8bqQMg5CyzYmabwAVotwJkd",
  "key1": "3JLM54UzacBaTzCFTf9nyov9QLbcYPDbghxMntURxswEftgokPxiFi8ZJVsKupHLBD2fbbdQfEcvjjbHhAb5Gywk",
  "key2": "668p8SwoZuDX8BvNrQrgaaoemD6GGiEKs1t7DQ8G3iNq4gqDmzbpdWgv4TWEjnxu93VVMUe5FKvStc6AETQQAyMM",
  "key3": "5PbS5JL5GCXypnfpGzueXrQQjmMkSbtK3JQDLgKt8CnHkBiQLby2hLBgxhMJRWuek7biPyiMc9hPT6rmBNNfigVx",
  "key4": "47ZEy4QFjK8jLLtra2vJaUG9t9ZSL36kNxKFMkjkFABAZqw65f6pKbCtnQcHPKxEC6iXrV48i8htaaXWGRMYxfDH",
  "key5": "2wbF55f7V9mHvvvdicZGHY6HW9oX9fKVkop6KwUU9rtmUn54QbZea69fk6b6QZwzKCAsn25zDvW3mxRAyockbZXy",
  "key6": "2RQ7TNadFU2tij9CeZTZvYkWGYvT7w84PcY6mgFp5wUe8BLSEJS8QGR3xycymsCADDgRZEELWr5Wy1BUMZ57op1n",
  "key7": "4D7F75ba5CygQJk14xPuuwxkesoX2rLbe2KtsHQQ6FqYkiqSMyi82F3KGfNahaBL4miM98wLEVzS2HfMWUhF5TAG",
  "key8": "4zUZGhRQkKwGmrYAdbf13S7xS2RkQk5FAc98GsLXpvd6gKKGQARXHbEceQAHik5XrffPh5TDiF4XrtzeUVUJFvpH",
  "key9": "4vFEuSMZjpicmed9LWxhz3GYkxJJ8E3k3bgof8CRbJDaWevJu1u4PfjwycqaiuzZZMXASjiBFUooAfhyHyNwHQ7T",
  "key10": "3mTdS2Kcfvjihxp6gxMZhiNVfhh7WmxBbJTrrRXFJW4no7xBXBwRXuCU15wkbHPRxFPHNy9QXCSp7FwtoSTnHcrN",
  "key11": "aPjbn671318YMTyRPPv72CTeBE1dDBJysmGXZMPegqgVq9w7ddrzN2UewniVaiDDosN5ge3TGoL7KJWEcaEFEWw",
  "key12": "iKNH1GiKsQNF7kYcTx3iGLJAtAAfHWiWzUaHrc8XsLMDc41jnRNDVrkFmhpKqXhPHpGa9S2NABSWptEsRKJJPKG",
  "key13": "3FAhgUftTQu4gG7YvNn7rTqPqY2XWcdg4fHAgj3TPh7roYeCRNJ6D2yV6EYoFFQHDVZVYN7shYcFUFF7g9NvQVS2",
  "key14": "5T63FXa8LXpLpQuYB5brrsZzZSTCiLfaRmNPxfXLT2PumnDqGMW2jvadLeYQXzcvZT9Kd15TUmuq4Mg6C2PjNXx9",
  "key15": "3qGv421GQF9Msb2fpAcAufaKEdUHAk9WS568G1UX66UtUKYgmWpHm9p7ZM3AeA1dWRPyJcDjWm6pEJ3wUASBvMrP",
  "key16": "4hz6VFHA2h5tZsVfMGnQ4HhqrJnzjZb2wrMFmshv8E8dQnAVRjchUxtrekDCe76rAmk8DzmXrTqQKpvLUCQKRMN7",
  "key17": "5ijx9HZmQmBAEYp9p9NfB8aAeHjQnfRv2FQMtMhNNhDBGgGpJnszM4QdjLzwKEFN1AshqYUmi8AJUtR7w1oevbi6",
  "key18": "5VX5fcqCHUudYCJun3DbMpuiA3mP2mBCyQ477EyQC9ZYuK8AsegLgB28tzynj5QT8qhGL7FbjEaDjHdBTrNXZNux",
  "key19": "4guw1HhEHuqL7txujNasxQJuyyfwfPE8P6FAWZTn91w2MBpoEsX8NAsqa3kC66HSYCD3QTyyZu8Y4iqzsSprEqpG",
  "key20": "5NA31jqekbf87TKPCnDx9dHKD17kQtEJA6b6McAiVxCcfnyezxFSUnL6rLB6wZPepsph32i645fen6TdQeTAUnY6",
  "key21": "5V9EFPzDSTMYBYYhCzBEbfTWJaz3HNKHj8P4KCPfiNzn2B8jFBo4RapnjyMNd7WsjETGmfQrEPNyvBV5UbTjypKr",
  "key22": "25h6WsvcteuWADBbEd9JHKMsBHRAG9ckhp2GdB67ua22niB5Bxf9oevQmnKN2ePBvaWU3aD1qDFDeafeXjvA91xt",
  "key23": "3z7E7UUoTwMT8gR4zGaqeJxo9o4dnHboXx3TAneikjrr445zLbqoYamsLW5HBBkz3Vgu7vTH1uuJV2iEKFJeELgK",
  "key24": "5LWZZXngtx31nRdzHdx7mwTyfpbQexH4CwoS9J7668qnYvEzeKfdA9XDNtS2wcRqKxLFdmeBKDRUwq3ccaLU3w9k",
  "key25": "XANo8vPXri6EhvT2QktmQFuVjKJVsas9nvdqCVfhYUoSd5wLntsyv6VjFNeT9gxawR28nhtF1kCKwGJARehp3ou",
  "key26": "3dU2ydfx5YiifwZcJpQyJ4zYuMQmH5mnPeHakdctWueSExb1Ukx1EsRcwQMnYRH5fGH4JmKSvV3tCbGto4Jea2nJ",
  "key27": "3q99QnMaghf7KnSGsyu7vXxDyBWV6RMgZQtVgKLfWaVSBPmHkhcSGX2CZhTwYcvBqTSYqM7Yt9dNi8ycd7btyuYf",
  "key28": "2cvs4WZxL36qhZRVTf9cKTqz7J3Jkkfxfsp8oCSPS2e9whyuP5Zjc3nhkd94i8bJxCKhV4SkGc54yozeKYfjgLik",
  "key29": "4R4WWe6h5VsvdjBaAnjy9Dye45NRMwgBJ6XC3PAZLG2EWoWuDEnBHRMpQZk9yDjzRoD5NzAFPmimJJFnpfsVfDVM",
  "key30": "RZe9wrfieh1jErq9FKgM8dERziuTEtVBHLVxVXBhYhFoPKNccUQBrCQKVrCcrEaodeiKC12C9YnX2MvnqtPXVpv",
  "key31": "sHg5bXYENfs1kXH3yHiJ9BvFYKfwXN6hwphpbzfYsKQuNaSAcLnMpbnAHpKWwUJTnCyZnx2bCwtWERrVvhEktb8",
  "key32": "5BccFxMxXqTUKdKwQxxLrbDkbimyHxBxo5yhLDY5Y8NkPVTxVNJfdG5r8v3nvEyjZRo2bxFHrVkseCbsbSfkHZAR",
  "key33": "4EUYScDMCKdkz4WYkyHptfCPVo2NFzs8UNauB2nhHuxqv4bPrv6xv4okx9ubknTjkw3voK63nuToVtP22pinyMhE",
  "key34": "54LpuXDHHDE54iDV57hQyPBrtXWdvbQGwpuUXyBKHqdTD2LuzWn3AdLYLTnv2DYy74S84qY9JKmERNxrpYGWpaPg"
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
