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
    "QKfPk1NGP6wddEtj3bmEB98MHQTQodvegSovWL2QXTv2QKuoj2T2JNx7LJGZN15HTSshZXp44VBfV1zjfTKJ4TW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51J7AdnJBUGWWdYtmAG329YePeKk1c5iw5fQkySKjVi4fFFrjXRxJcff7RhFD1UQJXXq4ZvcEeJ8neSeTg4SVuG7",
  "key1": "2F2MFaCEKhFLAfEgC7VZESJHDHT31kcJxdJSZNBQhhKHaHENAxFhUxvXcSYZkrLYRcH7bqvtVZk8oAKHzZgihzTm",
  "key2": "3DdsD6FF64vofkv4Ly3US14VJvmrPBFjED47pm84idNHLocLpnuaKraMF8NE9XgoMqg6x1K7YUUjmhVYnNHfnC4Z",
  "key3": "2N2asV9ffNJM4VtixWDfSkuN4z1U1nerFaoR8XBdsfXGPvV14JFDeFytioc6UpJ8CGfAEs7xMV1fjxR77PASafX3",
  "key4": "5vjG93KXm7fbzkVyxYCbCCt7oFeg9qwhN5ZYeXjdjzyoox6jFNYZabPGmcXgJ1tGLPaaMRKdFUJr48bAAZkyUfo3",
  "key5": "3wYPDPGVwvpp2YBWDAVyptXktHH211XhiYfYuiGSeb1qwmqC1Me1cCAjEXbcx1HqmspgGTpc54FWxUcYuHnnEAEf",
  "key6": "MryhATawvW3B4uZYWmtrQUEQvTqt5eVvgU2pTkdP8YFV4MyM9d3cDTovw3LMfVdEv6xVZY8jekyLCNKKbWWB8oR",
  "key7": "45uA6eMLrAQjdqsp1hKpRXCDC4anZmzT58TNjMTcdYorGEcP9UmQTfNcDzfr9vXtbJKawLWDzfj5Lk3Liv6Xh895",
  "key8": "YZvVoTFfTweWiHy4xYKzY6qjnRj41nLFDEfEUZP9SL3GpGkoHhkedBN4fDT5f25KpBdpgwodtWsMzWzUCGsd6HA",
  "key9": "3mV8o4byKpS4DLcSCfiMZpw6sYcSyNdJPLCLPHvjcMWvHVkXWMr6DFNQqYhDTPwBxCo9DxdvucnkMQ1hieMZfytB",
  "key10": "MA8xSQG4K5Q9szF1GjbunRxhqLMfCGfT4u5UCtYSQcKTnKYwwa5P4BhEuT1MFG4TjjzcGG6SknR4hdYjHXZEQrZ",
  "key11": "5xaQ72vZRZj5vAKbKSLNQ6KkNmoceHCGYFMxSnu6j1MVPwCHGUdHoraFXYUUVkjXzEmVMWnoPkxBgoQZm7o72Mu8",
  "key12": "3nDjAuCvvJf2LmL6rgUpxGEKDhicBDSB9ZU9EMUgMjvjR1ABc9BegM18A474SyEMbCUDpR4akTcidLRh9CEgQYSd",
  "key13": "2YNuya1zWnM16mJQ3sWCdQVkPweF9ExZaWE6MRZ4iBCkQJuWGGSrEEZGFThvKuSePzjYcCBCSVTbpXFXaWoyrp7Y",
  "key14": "5P5xoPWfoZDa5H5Q7nbWYFD84SnfsLPhQEjzi7FEZMcWJyHbYdymQqni177a53GasCCk2AtWVkrSmiQegZ8LiR7z",
  "key15": "3gD6Viuu5cWJ9iQ6ygTF9cfritcF1Z4sQ2LVuSREKi2ds3H9t8wKqZptHRc98j6zAtX4sDUUA1Dwcc5AUYgYx1oC",
  "key16": "2F8ddLLVeRhPwjkj53zUpkSJ3m8uEVXxzq2p5Ji8BrvrvqUijYCwwz3Cen4uEEXbJSk4Bs1qyprnAotV5tS8C1wf",
  "key17": "52GTEozDXbUJKBuvtP7JHMY9zojxHhdKZNBRGypYKrzJYtrMRvUKg8y5h5pJY5FxiwAb6CLPg879Mx9aBcW13uCh",
  "key18": "WAHtUC2Eo1FGGP9ZPXWMoLc4msLTGLVjqhnRHkSAyMoXo9dxTA7B1B38iJqejRAtUVtUEa9NGXL46woBB1Q8kXb",
  "key19": "kZAW2tyLhn22uUf5KYy8XuwHVqKSk3Y9Ro7b1zjuxueY9DnjrvvqxH8z4JU8X2t4PRp1d2qFdxoMNfqqH9nvGhz",
  "key20": "2GwPU2HmaYfKAwrsVYmh6jST36tExbeZri74unWyATAgr6YA8ubSYAX2zubP32cMznS8uoz43RuqUHKSaaBWi9Gd",
  "key21": "539UW4BQbmetKhmYs3aRLCoKjxCs8bT74m1PRdMFKtK8jNFHWcCDSDe7CNWtAUQdUXiMoazpVGUyKEu8GQSF4SMQ",
  "key22": "4cAPAoyq9U5b6VPgBUedSLEC9WECm4Kyxak9KEdiL5hf52kfdyn6ioHhEkdwZDfXPHexSMSaNWVhyhQ7eG2Rcifa",
  "key23": "3Qug68k5EGmQTqBc5LRYCvBmGg4sdFsFUn1Hur4pNA83ak1AbYnnvmXL6P2UpkuhakpLuwRb7om88KHTgbPpYKzQ",
  "key24": "dnYey7WXYzKH5Tg5ETARJQVW91k9BXhfLVHAxxtNxdwLVPEFcBVMqqHTUguBS6zdR8UMQ7JJmtW5RncDTfL5ajT",
  "key25": "65LsiFTHVZgB721FiHfbZiU4dthExRPdGTrEtSKhSwTQxiMGHUywdGozWkoP5MgHmeQ4hLgLbMG37zZjKaNwVto6",
  "key26": "DQ8Nno4CU1eW8oQbzdg5taMktoDBqHKqbfCcqpCx4FtGYDfdaCvjsFG2c3jms7j6nQptZviqEcEwrPkGrRSVa4J"
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
