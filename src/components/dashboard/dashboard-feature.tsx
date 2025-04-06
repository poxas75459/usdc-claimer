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
    "3TXx6DLPzGa1wojS7vSkAhmNYXUqFqEQwYxEfXDmh9kwKRJ5doYWN7heUb2HPZQCuEXrjWB4PgcMDWMQmvqb7W2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MFdEbWcBiryzf8h45okmyayhv7NYMXEYC4RtyiTnfFiR1Mf4pL4idJqi2zD4asJHwX1VRH6mbu4wEogv3e8YpkP",
  "key1": "2EvwCKHkvKFZHFR9TqVzNKYxGQbbV5B4vJirrDWEAbrJFxHNJtZD6zLeyMTfeMKKw4WHbS6PMr3XcHhP1DNgqiYz",
  "key2": "5xrQEPZ8md9uAV1VGChs3T6PyKXS2caj1DctEYqF68ZaYEkzXvwsGTpqXHiBFcydokBc1bpXgaowUwtaDTtP4aXt",
  "key3": "F7aJcHhHD963qRyegn5BVAN7UUoANMVD6XvqYjDpCVWStVBuCx648qoJrVCpFRHMWDQxKBXovMJNAymgCKSikqP",
  "key4": "2VtTx8Xo7k5zx3oNhb4XAgeQSwV1Q7Zc3UguqjLkxWjkzFnb6tL4Le64SmdQyfFoEYZhJ7CjWuMfK2TuLf627dsn",
  "key5": "5YcQ9yccDsSQKDJSfBXcoc94nFYaq6DuLwx7S5yNDQLsKzRv2qf9fiEhSi1zbi1xqH42XBXEWVWxyz35JXeoJwLu",
  "key6": "5AYHBnbStd7XkALWgjLHX6B7GgsEHpdGF3raX9y7qcc63MnXnLjbof4N8yWVrhacbU3iirRxGKYSegRyhCHxLGWp",
  "key7": "5A5fyjkrjHP7ZdMjMYKShiDFsyDA7W6WRjguY5e4Ld4E5yMm1aGZxZgCLLw9uoPcpC3D9b82bP15wYutvo3CWUKM",
  "key8": "4uMoHdHKthpfwKpMyjf2uG6wkqRxJBNgFzZn8T2WqkXhiFtSRccScs4dRsszCZvnQdeSz8Dz2nGGN94pbB3gaGXf",
  "key9": "5uq5fi5LqRbWv3TA18c1avJWbta5pcwuEw6ftJWPcVVv3oyc4qYdT4HjYbbg13jPbgGwGUyTrpDKPg2Cwu5RZY3w",
  "key10": "3sjdfUzxrHBvf88J265ixw22YUgGRyokjwuiQBJ7sj6mKPGt8yukBFnmzSKhQe51RbqrsBz7Yz91bm4kZyjDA3X7",
  "key11": "3erdjrwMtEBSAiYQ8GpAWbsahqkMwbrxpQLxk1NWmeVYqjyte2aCVZgZjGdJCkTYmc3k7gBdASQPD4uMENiQXUM4",
  "key12": "4jFkNfEpB3TUiXxNeRc9njjHzhFaD8vbuSm942w7Jiu1mR5zM8pq1jS5xL3QeSu9DPz4V49b1XwzSnpZdE6hLxGX",
  "key13": "5XcD5RDYv9Yh2yVADJSgm3bknf9AHhoK9T6LwxrVVC9svCwXNFfSo6h6ze9hnFJHVqrETW7YB8uQktB9ZNAFRyx",
  "key14": "5BWFJpjVtrhSAW2v5F7B4dzJnr3MkEtTeMyF8WcdmBKpLzbcUXNmmeqzdsf9FeBkRBgwSEMbFdyez9ZQdwg4Q1dp",
  "key15": "25xrWL4dB2hEhffBMoy2SZYqAmMNVNtwkxN6VuMeLTCd6quU3Krm53VcRzZbNPXaMEkVhr8sqVn8KfASKhJo96bF",
  "key16": "cjvHVVp88gUYqWH9FnXur9UJKALqWiyfMjmgvoXSfspXAoiWRPnKU5dcg3wvjeHEQdcTLobXzEm38RzbnWxJ68z",
  "key17": "3RwL2z4vwrxnJHeg91cbvyyJy7rXaV23aFT3CcL3VK8279BezA7snKaC3HPUWxdbP6qDgx62JGRrJvvXDvnfCrDv",
  "key18": "4J54zugVdKqk2N4koUcC889B7fv8ckmTKGjucbCy1d7cbq1CQtenGj9RePnpn9GzbFYHDbiVSzQvm2uLxikWAb5h",
  "key19": "2uSfb37EiJnriEDhH9haGbpCNBcFx669w68f9UkPgtk1ZYf2u6MqZNqoCVGTFM8EYAdcFbBU5MuM13WfrW3FpG9i",
  "key20": "4fZtFPPnqr6GG89W1esBWjj6Azd2zsE9rgfLZRgBSkhsEYuEaMHVuUPoB23QHHsppMetwGH56GLEKR6vnbwGN8s6",
  "key21": "3kv5SuTH11T7uHSHPmGhHcgvPEowDjB3478a5jQR6AAT2tpNwi3AD7oy1UTLGYyFRo29gaPnT2Swp3gxDeqZhGT",
  "key22": "q1W6rFMdeZvAR4KCJQjd9Uf559dRUyetsbz8M8ZQ92s4JdH2UaCKc2D49NY3JAQZyrmYCFQ42cfom6dnF2RhCkh",
  "key23": "22r3u5cx4rR6Xd9sgDVTShPmsmo2FwqXKubkaS5HWfVsxsPh6PFxfP7rwuYm35264569zrSytPWqaVNoP1yHzgoS",
  "key24": "5mEoVJRB3JPLXfGKdgGLrMUfqE211rXB9vwoGqXQnn4GracevRa2hqu1gaLKYWXY1rAczggmZ57YwYtb7UqgicN2",
  "key25": "hLFDh4s7PEyqtT5vJkfiYyavK2vNjLC84eyAGZMTKX4xkcm3ns5dgBLdiiEQ5QKB5pveKa9am7UaMcuz1iBHpKE",
  "key26": "3YMVMn3nPSAKxkEPbT2p8qN82EfLZqgh27t3xVZn7Dw5EUBmsFWxPmzkG3pAdDyAhJrccJYd1gwuWvbAGoxA5ZU9",
  "key27": "4Y8heS8QM5hR4v7VZrSiYjSZVY39XYzCWr3S9bQtU63URxf9Saz9w2ZmUccYmfd6FZnQB5aHQbNDF6mt1Net5KQs",
  "key28": "3jc5fE3FdUT2LPSxVG7NVPeGhUW9VsM8huYc6dgQmfahXqncivRrU9z74CZJGVXxzQQb631BUX4MqXAeCD7cgykH",
  "key29": "2wThn8tUXBRvrwZo2xtGhuWxUdSrk8deoTsMUSsDYBRshyR9sMMzyhXjWeLNMxJEHYiRBk5i7X5btL5iXFhxYQt6"
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
