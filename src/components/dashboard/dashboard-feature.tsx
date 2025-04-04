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
    "S54Uhkisd4pNetkfMaXxXLANfShxrmLU9rEFf2e9oQxNB4iLVGCRKESGwS5sGGMdSAWsc896Kc3FTEZrh9nkxwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ys1NESptXtoDxPdtTqBex8giwnRLVGra1xAVTw2acC82QgEKFBgkK6AQ6Ka9eYp8pwehn43TxeY1yuwZDtkDMGJ",
  "key1": "2FGAajv1Rq1PJT6HEE1jtJhX8fhtybCor4oA4JhoCavaXBVs1uPTtdtN91JPn6HWWGR1rZ34hfDZtjMCnLnEhD52",
  "key2": "2Sn5XABxRjGZDWqJVLa7WuAqAFqcpxgaZzHe4p1BVN5hYVTK5dhgsZPgUW5YJa3HriWn72zT9LYyz6mBcHGU4QFZ",
  "key3": "iqAk1a2FkEe9fTUNKCKv3UuSKpjT2STegA6f8k5jUwKL1tMBe7o4fEMJU3ej6dTjqN8jmcg9hsBbtXfJQqJvpDF",
  "key4": "2fxrjLQ18y3SK8Z1hMCgHVSWw49oZaogzE4miW1Ry8pbKsamDF8whDdxnwExcNA1GkQyYdS9Z8zVX7C4Fq6HfR6q",
  "key5": "5QgzKmmeCV7yDHz9Xp1hZixWLyMBTeLG96rRLbicqairhAXp3eX2isVY2Xjz7Jp47rM8AaXGq1KfbE8YDtNR6T4d",
  "key6": "3bVYZ4TazuA8ZUt8HotDFuo8fhNXkUeKNoNBK2QM7MGuXgNaXzPVEiQSbDbCHebkSKo6GAaCyyh5HzPoo82rV4rZ",
  "key7": "3wtgsteKESJr5TPcNhFGaEv84CHyPBzSY7bQ35gjVDQ7ggyL9uaeiDiFPXv6sUFxGu9a53UBavMcG4cTMnWMZuzL",
  "key8": "3KWEvznxhn74s4sUpTrD1MPknEmjYGWWxA7ZTHgNfE2Pw9mWkoqhSeixx7MGLY11qykq1wqEK5UWadncwM6mNNBR",
  "key9": "5LuNzigr3qrUGPGz5qnHzoECLp79z8jxP67uFuMfWbXcFVGiRZrSuXw71YZrbZZG16ZU42g4otWMq7BFpQJuqpKb",
  "key10": "2cjRSd9HNATRBUu2bozG7KNaSb3cQBac5heHHmx4AybvjvrsdnfDq9ZduCqbPiBfWw8KzbujDuodNXxp7NsGXMyB",
  "key11": "hMxNHTd45NQXEyZEANeBni8AvhzUB4DjxxgF6DACMs9sbPHiYHNrZSh3pSKdhCGb4HazQt4pdjaPfgphqkdwCkP",
  "key12": "5W1X3dSE82RrHdAUxAy8qQZ2hhumrD5RjoqKjEgqW3KEyyMhR36VU6EFfWyJmNwQX9Hnwr8nYxKpNb2hduK6UaFS",
  "key13": "KDxVdT1igdA2KBeM9dsTfx4WAdkFT9PdP72ADnu3F8pYMjHwNYmvFoxFosQnPPB9dfduRm2tsC7TiXhTdgQ36cY",
  "key14": "CwhRHUcDyKKNCLjo9gRmDFA66RJEkYQ8RDtRy7PsYQUiZVwwLtuvX3ENkpuDyxUHmkuZJtqarCWhLF6tTisGo8r",
  "key15": "4Z1q3Nea2zm6btY7pdBMtRAZGPAjuNBdoxLC53JMVTaWuBWMEC5SuDCYWwhbTqpJfmTgJ2YNbnvGN7EWa8JHzHVw",
  "key16": "2EgqxVqEFXGihdqdqSjorZKYpZiwFxW5HzxJ4zBtdGTFnhFG1nwdd38u5ZWRDnvhTv1yGvyjnrbBT71rpFeX5wBY",
  "key17": "v17aM9pXFLubXSvC5qeBogMnDYcJ6g4XLv7SB283mfrnCDrPZ5wfaFG9zd2LgoeoZQ7WwrEyKjJKtyLXSvCbRD8",
  "key18": "3ryMrFYAh2KuHDWYNeS5KPjJJa9d4THggMBS9kcv3kf9nijhdJb1WSfVLTTq5SfegetugRDjmC7FsFmNMehmcUdq",
  "key19": "3qmRTg1L4nHYWZV8zSESF6tFcNv3C8ANZAYcSoLsatKuLzHdGJMuWVcUm8MNxE6JFKnvzFEPEfciHc9PgPaWdTPR",
  "key20": "2PEAbnjFYEH7gFX6Gxta8WWeypTvk2qLhXaHcdfP8GhWSgFcRDYvw3gxcCF78VENqeZ5jv7acqcemnKSu8HfriEL",
  "key21": "4ykkNt7JT5ay42NSG1u2Bgw2Fz4Ru5Q8RgGYVjkfShUWURXNLFpxFCKLf6dbHCUiFFzQ48yti8rYgy7mK8UqwPMi",
  "key22": "25kRPqjmU7DQV5dH8x4sQdELRHpxgqjRuanheBFqdFAfw5XxZNVpudoXvpkz29TDqf5DwuTFcQEJVJGUgFyTf48m",
  "key23": "3zycueNB4Bs5pHBB5WeKAMpm4t4wqcJe6ERFU8MmbSyoBUExGUDtLGjhMUpmSor2oyvmmW9PBULEQLbY2R88kbr9",
  "key24": "5dVd47fLzrc3KPc8R7QQ7DmZiR2VVYn5JaL5MBXYviK8HGQw3DtMGUYjqJxyfNdJXBURniUeS9BaGdCHT4pZb46f"
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
