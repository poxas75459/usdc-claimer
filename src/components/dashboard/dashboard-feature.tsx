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
    "65U3GjVdKyEcCaPEQg79e9JfyKoLA2Ah7KZHzVCCkjvEUdqbSdpXrggdziXELBVi2A9KYzroebXaGn76hsoX1Cak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41Q2RkeMKxqWJgejJMaRP8ikxSzbbpQUxadHE5LWFaKfB9DsqfoJ4GoyqjzbxFcpPaNDhYhjcESAWSArohsDT1Yu",
  "key1": "38MmFphVocXaPpcAJL4nBWvXTUadMBa7FmrucKWXyoXseBo3TmA3VRmeG7HpabLRBbq8MU9Vye6iNkVMSgUKX5Gq",
  "key2": "zQhoJiQJ743Ufhp6FT8n5CsvB5bfWjyE7ojZ5RjrKqBxpfuUm6bUCGEYcTVXowNAVBZnF1xqNpYKQFaK46LpwBh",
  "key3": "W4ujeeVmft8po1Lak4GTrudGJQNuhgfG7ZGujb6Ckqro5nBg8YJpqB9XMKCC214AHdWXrsi6P6GSeLk2P3aarHT",
  "key4": "43Vox71oG1yUUZePsjjF7EQPqMe9BgLy3esAxoBfE2igayCVMy211ojyVQQMKgepeB9kfyKhQ4RgJ95W2xe6x8Wf",
  "key5": "348GV3zD4cpE2niXTtHwrwmDobvzZaMdLePW3uVkN223tJBkZMCGF3RASbKHjVc2Mmw5kTufaCaq6x8vy4L3b82a",
  "key6": "3MsvsY64Q7a16wqicjsANuotRoG7mTXKYqAip2DDByhWxiJVVTNgJWVcGZh6EKijb37yQXroP6waMKaPBjU1RCLt",
  "key7": "5A8rYn1kWo6pZaBbdR6n6U3L7zSyipT3aSJbm5gZG8zK1UaBKAp4Ku42yyzakAKPnt5ub86qw3B9jmVCxfmMd9Lt",
  "key8": "5urVYVtkBA5y6jn37jaV75Y29uvwfemqvXYxYhbfcSYi1d4bYa3H95fjDYRvhovGwQPX8cn2RguPND7uAnFYBLik",
  "key9": "3gYEQv353TeAbrPJ1f717SykRwADXWPLpyqn3PDZziWqS1RERpCxJji9bFZae8KkX3B2wNkQNzdtpufoSuHVrN73",
  "key10": "2xfj3T5w5bcPPX145YXWn6LFKohkV36hVCzZrz4Ve7VJJ1wmz8eUtCrAYZNm1dCksByhvYQMHPdfKzdTFxL8vdRa",
  "key11": "4qDHnBvHpJHRzNuZH6b2gq33K6XCNr2XTkEFY1buqXHcQNkRPnoamcr1opCWTWkc6Lt39BASSXZ9qLUVXHDgfUqQ",
  "key12": "63ZFNv8R6o8Q2HSBa7eMY5dbou97L5yXj5LmH1ASmA8W3jckf6NAiB82Z7GNurVcVHGuGpuhxRJdXx8q98xTV66S",
  "key13": "5s3MDuRhhN8JcueELFHZ8XRqzsC85vzLUJhPk2QJLTuRpjvSK1u7StqmEzNi6Vkowdc865HmG8tsJ8J5phXGimgV",
  "key14": "4wkcAs9SV3tdg8pR7xZTcx7xmHLbmgZQRWnHAKPxQWHmdHjfQnKaVdhHArUSPixSAdHEC9wphQe96odXhMStXWMU",
  "key15": "8A7Kccr2uNB3zrQdwjoFK3QM2PdzNyPTk5SuUjbdq5DXseurZ9LxEaoRkQd6djt62BYHqTRrk2dJkB9xSS8PXXA",
  "key16": "21GGSpcnXzURUffXosoJshXS2oLUqzuLRBfwCii8ux249Z3XmnYBvZiAXnMoiavP5uTe6up4Ku91VGLMajYrc31w",
  "key17": "3fkCid1XU3eSk7JnamTQLUDD7CibagnAQSSzvu2MJYesK7Mv1TxHNvwcdV8FaYc5Zn95hsrHzmfpWthZCW97c2kS",
  "key18": "5eMUdJ75SDkZFSac6cnCQXDWr99cP2QcKc2g9KAMJcQX3qB8ny68dDGMgfZcrvwm9QbGYHYMK2NiCeN33kugZW4H",
  "key19": "5BdKa5RUpzsexrM6XnJYMHwkatoFFmMJMUMj1PnVa8BKHV1zS1vpZjtxmPQLaqjo9SwhsXWM3H5Wy3LfNaXqVjQK",
  "key20": "4mESvxqprEoCc49KHqGrbcaD3NYriNXuiTWWDXASVwLXNUx5Dyh1HGQvNtknaBB89Yr4W2ixG1eqxhE6geL2q2QW",
  "key21": "3vGBevrco31dQWKNr6Jyu5jsQ87NeFiQUyRpkVXeYvRGZeGByAw9cAZyXd5XYHdBNaaMWLhJFNinFh8K2aicGyb3",
  "key22": "4S9mJ1fHyFubwJS1aWowfrTpoSkU3f8AxEvSS22of38QcrHzgAd6UreTyhQDRJ5A4FYo27T49G8tqxLgH9VuWdy3",
  "key23": "5Pue4wzLP3vQq2obMa8q198M59RVUUxZysU4dB2j3NLFw2f6T8uX1t2vqfLosX2FY4MB8hmNMigWVWjLaAuxkhdQ",
  "key24": "f8BGGPjpZMixKuE1S9PTckGRq5TQUQkRj9Fe2ZnXeTyAmhaA5pRL4XpcEJxhwX3GhgZiLBYZuuxcKPbxPxBu1Jh",
  "key25": "5v4J4nfLxwjgJmqVbRYwsFL8uxAy7wz18b19kh4XBy8UsdQszxtyci2cTqHuMKTw7LJQ1teYkpfMW2gtA4RwUUE2",
  "key26": "4U3gUuimCRKt1eAPhHcJiP5Gw8HtQKYzNPXKhDwELWxBJZiYfhBDttgcBZURPBLrsH3wmZGrf2qyXo7n9BHoNAjD",
  "key27": "57XdE2odHkgadkE6HXMyB53EnfR5PTFJwJkedrw9mDGiVf9DuyDGU3GCZbEobfEZ8nGSPHXkgw2fvEzed5T8b7WF"
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
