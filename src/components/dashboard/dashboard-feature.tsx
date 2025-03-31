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
    "3YobrZYdVZddeugRXtGGzizKVjDjw9N4wrpHexRLuuNCVsxiS8Gw4Wu27NBDCYS4ZdSAgtxWcSSncT5TqzETdQLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C8X2cLkL2xZMpyYJspFngv26CFYm3Pkxj4fy5rKKNnPH12GHRbXkLmZQWpr63kQj2jg5Azi4qf1PtqJTGhRPSwZ",
  "key1": "46pEGvnnQ8odhxoc1F8cAG5qCpHj8CPg21kcngFwbqwr69ZxdPQeRaimezGhMwtDf39x1jD4s4jnTQVciAott2pE",
  "key2": "2nbf2CUNUUMWk3JA4sBLTyeQDA6w1ijqngET7CNXcnTu8L9MP1nhwBei9L1accvi8McP75hizAktBkyVzn87JEYu",
  "key3": "4pd7HDhmh1uEJVsqhkBR6C6hhprpGTZUpSgTBtwvdCKAkusDuo16EkT3iF9FnMgWjzNQrmJHaQNorH8gbdmF81zP",
  "key4": "45VNqpvoukThCQcKj4ScfofuUY6PMdRjWJGRuZ8triQzkGPn4nMcqcrT2yJEKprLjbzFborHeGKKXKmhmmN9QU8b",
  "key5": "24WufZtRhHtvqzEz4UsdVu3fYXUqKbXNzCXDEE3khH1fJCUs8UbMaN4WLQH5tFrefnbWGgdLAHK6tm5UCn2kkwZa",
  "key6": "4xuyC5VARZcCtMFdkJGC63ZUhd5yUKpnU9BqbRQNnzBJn9zqq8SWtjXeueP7M55coeepETk57Hs2jugVfPwef9Dz",
  "key7": "5gWQYUhcjTQJg1Msy3rgskbL9SEqbyyk24GRBaXGSwCh5oqYBtNAMVKxHGNXU4Q1rKsYxiPhpzuZSpZatbKdPL85",
  "key8": "3fBdpJ915whhEPvGjuM8HgQiuo7gdCRbddYhYFQAF8WuswSNjX9QotTh1WD5AmtEpS33tGsEmSBTFBdzDq5vHiKC",
  "key9": "5HEw6d8CwfJ2kT81Nx9cfANBKdKmtBCxaxQPrPCjGjEUFkwZMmDLaB1sRoMHnrcDbXT4CJeczJEqv9gZGcR3ueLa",
  "key10": "4LtHyEVVStubPJKdhoBu25WXjkhTL6TRNbn2gr86DiHRAnAKevSt8kjGjF5Ei9pWsC5PjwCETdjv6KjJd4WwTySS",
  "key11": "2enw3ARMwbFGsYdcYAL7m8oA3PmEmAX8zMHUVesgQM7V8ayRo6KpKLU4ZYdQosbWHwQWtHFpqSpRUHrgcepbbxX9",
  "key12": "6kT2xc5PYid8ncmEGfe6f5U7xxnVjfSse3WYtKCEMpWwtLJegz3WVaVaxphB2DyiPDta2PQdpMUoboMem7gD2hP",
  "key13": "643hEQUVGogRHiQv8W38kMpPZCDUTrxfeNDGwzGhctgFHTPAfH7DiUxcCTV8ZAH1R6jZoMh6o3zVgfNz5MhYyNAt",
  "key14": "2rMj2zUNWpSbU6zumX3cBAUrsBVNprWr4xs1L6V57xXjw5GxxHasxrV2axRJVVG5dRht7uV5ksDEpGzwrEvLaXP6",
  "key15": "44URYxHByCLva6PpbZSZHYBVAAXfVeKWkyjDxDMNhpWRXwcz1Z8zzgE1h2rFytKXxM4wQiYV42GnJW98yvHdooqz",
  "key16": "5SvVgLNzBfRg3h7jv8oN4F3mUDcnD8XCGgZRyxj4K6pG26vFvNW2njXs5H5EXvZMjzWr1pHQCqsNFdkAYHi3s837",
  "key17": "5tqFEQGouoWHH8GivSv8TMxuUaZ5q6QE7Bk4m6T4tTtqTJoq5iBz1uKfpLGr4cPif47WWZ1sCF3E7249XXrRaaCQ",
  "key18": "3dfCRB8auyXvbLnCymmZ9WEvHzmFbEgkxPincvt9N8jduTFNY9VSi9xrdoGvQXxz1cRJ7BLsr2H7LEJ3bW8Yu1Zx",
  "key19": "2Qi7mwPoNZG96Bjmvi6N58qpM7dUroCAjXbJ6Z9vu8KBuNy6GFJMJf1yDiJKMauztRLcofyRh3Ru3GZDBa3ibgd7",
  "key20": "5gs4zJ65sRwVqqk2nD9rMBvydax6F7qWQFsdMQBCZTpuhJ5k3BQQBzLkpkNu7ikm7hemy9Pu2iVSPBSRL1yywRT5",
  "key21": "njmypw3ZRwuMQ9Sn7UuJfKGbv7bk71g8Maj3ZPpzV89V5eQxVPS5tPNE6XbKrVtVJJWByKHDSC1o1cUSeDm2b7U",
  "key22": "oCkZZ4WM32TtS5hbDiKa3ArE5PvsaqJLbLsTqA97YGhRRvbVE8C9FvoMD72kWctpweKLyVTxG68LKqVjbu7Wji4",
  "key23": "ipfqg1Mj3uHm96teUtCwh8hk5emxHFb8spuYPoKvCifcDo6P2RTKKw24bL1i6PxaYE3MBA7GzgQgQcwMafSekVg",
  "key24": "PGho11htd3y3y4ACkiQGdjpD2vJGXvj63ESDJuJFJvkbqWFos5A8zeAnRijDKDuHSP19E91B3fiz4rXxFuD5xHw",
  "key25": "668TR1N1Q6qrgjCbAgkSkjN4CFQxBYP7PKz5b6FHqsUe397fvViVYADfMP5cabsK2bgvHeiNucR7V8RC589ED8Gh"
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
