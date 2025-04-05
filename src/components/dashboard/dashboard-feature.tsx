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
    "2CsUE9hjQ8ydnzNKAWHQ1A74qtDf7gcF6uF4YwuTHPf233RvmhtGRb2K2oWRabraiLKzaokJJBgmM9gKoe6QTBxZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wpxVNh5sUUEGfbrfabWqnTBUSKHjWEafW6Wj28nWUTumT79hzXZgvE33Cj3DVyeVWEgAEUxYaEy9pRhB419tuYd",
  "key1": "NNeMfAM8aZRqAhitVHgmp4suRLBQR6kHJxqi4B3DmHitYyYSTgqPMR3ubpoC19sNxZrDP2xJmfS7K9LZYNF2EFy",
  "key2": "2KTH23557DEy2Gq8h7Nh9iPm4YqgtYwZSqDNUyJUo4sCTenVHbBTmtj21gkc1UdoaqPXHMrKCTrQQ6ezKeaYE9Lw",
  "key3": "2a4VAhFjexvHFA8MLqTTizu9DiobV22eqGsDkJ2rDaWyg9KSMxZTS8sByjofYMbDV498iXZnAh9aEgisVZYJpgZW",
  "key4": "3SPt56anMxLM75r6jkr8zxmonn4FAZK8H4XXoiEpGYkxFnJmeTToL26G9ebHH3hLK7E9y9ERYjjkLNqrcJCiDmgH",
  "key5": "5U7JSJjCriPSW92gs3DRps6U1FTD8x3gGBZ5rH8YS5niEmYLX81VVjiS6ZG6MJCAmpypJM3mEeMBnTLKVYsC1jJa",
  "key6": "33TmnFhhTijaVZGtdWQpExwr2JD47916mS4G8abq4CpcAz1ZNUzEVrV1Rb4NjGn32HzF61x67e57MtM3p9aDZWMw",
  "key7": "4BazTDwjx4xg1SaYUiQzXQ8nXELVYbrnCN7Ge4uv8rNYqewpwVYKHg3wvNMJwedRwxjiykFctjhqsqAno8AVU58g",
  "key8": "4t76sVJFncqMTzR32VnwVq4Nzm9NtKnr94g2PoSR9jJMuVCawiu65F42tcYsrSKvSxTdjRa5j81pR8k7mAssVjiQ",
  "key9": "4Cpwj6BkJZpzZz5kLNRraRaSu3zPNEsHuCn6LmL4xwRzvTySLJtc6narn95ycW8HSZDZu18jY4kf4BFdj8HgTGCL",
  "key10": "3Npi3Ha2713QyqLax8aov7EBbD6Sy3EEmxnUAN4MtY2hBBEa423WSYjckezmXEPJjaNqVmEcVkaWb5GEhCruPYjN",
  "key11": "4pk3bd7iSk6WjSLaAMXZozsetMsFrGKCSeyynt8HNcc893Q5XoVn59iUh6eEGkMXU8Rac4JFbBCubMA3kL2VHi1Q",
  "key12": "62pq8M6geAC1UTtunXHz1ts9w1uxnx5vaxGjrnmrMfpGe1FVSfxRTspDyH7a5tGMFhdvNm6BAX7BHdi5kx359aFT",
  "key13": "4vVAL2rceZx8ZgqjEFhmPeEy29fnv4uoW8Sg2vj4KvsMQPrHZyXeXKojY5Urgtu8igz6CVqiGgJRVcw7BaDneAEL",
  "key14": "EM2ZZDTjHFdyyAe9eGzFvNg1C4DLRJQ8noJMMiCg2LdEVPqBEQrNMX9ob3ZmNuJS4vZaoakeDb95N8zbtHaJFce",
  "key15": "2oMywHhsoyxnaKuj2MgZvanXVkfLnTjx2g5B2yQxLvQ23kKv8eNipeUjMSRKjDUzzrBPH1SnKZ3VinYshjianR9D",
  "key16": "qy2Gr9AxYVypnpT6it5DuLkhveTzhtiB8WRdMUfnpYhGfSj9urBgDHCYgfcThYP2fUyaMjL8APsM7g4L1bhfV8o",
  "key17": "3doRb5XRLzZb8szfTLPG66W6NjyPXcGGMUC8RKQGSJoM4we7d4ohGTLLixMV3cA3xmJyehegpH788UkE5aXWm9RE",
  "key18": "tv8b96P3oKw5MLVNZ2ARLHqZzz4wFP1DW7eVXGEvhTv5MoCKdVsv9VtxSQbotobYDH8XiaVSvLfHYYgUZKAY2Zx",
  "key19": "5fXpYEp7wh29R3tDApXe5g8QXgrc9dmPAdfNxGQ8S1iFmV4V6JF5bihTShAJc82fDQYvks7u52V4TQu5VdXGVrRi",
  "key20": "55rw7JgNDWwaswVjAQm6Kqd73B5CwyeX2UvSxnEZ2TPBbxMsUbQgV3TZjFFHVEfdiJNed2dXXCHFP1GocfkYRtrX",
  "key21": "4zjt3AQN42G9cQFDTMvxvABAxJPEsbeuRd1vx5B3AqgZdMYx45Wgk1dLcuFY4YHWaQZdgHHEfynhr9VzH366CtjH",
  "key22": "5zDTTyiY9WsCksJogw8fsmiigU1nf7U6uzGfczCGhaXx9MKhA7cw4jMa2NVz6nzhTHPuwjeuLndthLhLDgAD6FYL",
  "key23": "3Jdk5bvxDJRVdVWLqx22emH55Tfu7zLLrcDVa73FkbnWkDQH7wFSrGbd5pHfP5E8Ye1xQHSxE6Vczi6ScYarTPNE",
  "key24": "5SXZgGig46MJroPXVpUHxk862KEdGnFVMT9zkiYzNNjpbKfQm4djRNV6g1EqYGziszxN6CH185qMf6K41whC3M6i",
  "key25": "4aApRC15c6c1cDdhm7TTiNnW8XDbwku9DJKXL28TqwDq9zEbNxBfhRvY34zc6WwmsmVnBFHtdxk8QgaKmHL3XaYo",
  "key26": "5FcX4QM3biZ8Y8YCQzX5kxm4fjkQfchKKtx15D6QA3TZcSLX7SX9Zj7qDHnzkks8xpnSiLi24jXAR1LpRNhCuU7D",
  "key27": "wCBzuomj2QF2kH1ToXmLBqF9xpSou9GrCK6LhPsk79MfuTvGHED3mmWYo8R2375fEnc44t3RVSiHSVa8DjGLYic",
  "key28": "5DowuQbrUCNGxtHMZZb9z84d1jsyFRDduBhFjxP5yUL8bxs8SLHnSdjQiLfUKMpaxFsFRfRnh39befGEe5UCCefY",
  "key29": "2fT6BMcH1J4GV6EkiZkBKF1CJVFPJpcoLLwqCTziAu1SzK1nrAvZ5fc31sm4ByjBnnBimpHUAgktKG4CVvxTr3Z1",
  "key30": "5BZs21PjbY3eUdcgU83cNUzs1aXo3wPDby1Z7c1qL2QeuCUd7hBv6BLgV7mQMz7gcdMNbk4Y2bbpmD1ugJbSv7LH",
  "key31": "5PyrDmQcu1m3PwwoaSYdQqjdPESqKobq1PfwkMbKKzHnoyZPNVjEEsMNFaD6RdFmohTk5s292TPdgZKaoJMKirZd"
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
