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
    "4TN51jaq3cNzYpt5AQ4AQhc4d6W9kiLJojpWP5MMiD7wydn8j2datFVt6F8NsAszZ5Pj4HETvuUNrmnxWvdqanD3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XM9SPBSgXLGr2nLyAEoHAP8DJ9HE4qfkpUA7o81jeiXVQeZ5abmCfzbWEc3zMDDvd541dcTr38YbaD6Psy3cpSQ",
  "key1": "2f3AdkbfaVKvPHXPTLToYKPjT2FR7crw79VqM2ahwofJSH27o2Lfp5pD38S63aP9L9HB8W5FMSMpaqbPHWgdC71S",
  "key2": "3Y1LVmf53Y3iroVCzJxhbeFjPVWpXvVdx6uoZARvb3okzdBHmWW4TPmpzyimB3GFu9ejcNGhxPY25K3Wf2ePCP4N",
  "key3": "4FnKcjMMR21KZGNM1Cimr54Q7y5HuuZdvviphZ4TVhG2qLnUDYFsJ8idX1siJgzTAYxpYezeXSjr6uYcKBNDPmRj",
  "key4": "4pUS3EDx4Y7HYNapQo677kRHw8NBrsu6gQwmwKnuXwnHFfUYec1bZtuqVE1ZCo2ookyga7YZvC6enVbmrKN28rqA",
  "key5": "4WyoyeJnQwjHysbZue3S6AAuERjJ4diME5xV4fGY73ouTyEBUiac53EvFTb8rxCztVMEtsbJJ5aHyUNbJ7bEh99Q",
  "key6": "2oSZFGDisYR9YXuc53YWDQoxk15iRD9seYz2omga8wZJNpiyifT3edTA8HVAhPVyy1pKpT1TH4wyBDCU821enGFH",
  "key7": "2zxEviDppmFuCZc4QyH5qkzoDjuT6RBtAocCX2BTBWZLCAwge9S1ANzTB9LZZWhm3FQ2f8RyjhV2Rx1NbWrLsHH",
  "key8": "2fkeNxjZ4HCmpUhQtwJhMS5rmQ2xUqqHWgvx1vfYbRJVLjn5GJizpfQ5Nz2XPUtGfDTtj8NftBJ3ESCnsaqi8D4R",
  "key9": "JS8RZ7SssBir7692rDYaYrWdT3zoQbwqW4k14SUkySUx5L9oWR8sFJYssfBNxSHJLet5mpwpUgDXPcrU6kuAiVg",
  "key10": "3hXH1PXzZiFGPaq7KRkbdiqXvQgJssuVY1gdFgvzU3kn5snGd9gQ9xhRnMn8wRAUDFHVQiPwboDY6ihecpT4xam5",
  "key11": "4WxyD2pE9LBDj9bfqyDNfdj2fWVzCjvothZ3jEVKQRX8ES3VN1m15P9CqAXwnMLqHCUKWHQ9aGDc4y93Kk4zgoVJ",
  "key12": "3WEvaxWo7Q66exCfGRtTo3NZ8nnM6PFkFDU9bXWohZ1QncF2fUG18rMJ12YBj7Djn2BxPEwBtXUB2cLVjvMbDZLw",
  "key13": "3WQN7cuEbw4rSdMqXa25XzH4zRabiMdhCCDvPGYRrv2gesaiEv6bqhkiNLd7KxQkVQF767yJpDtFLRJoRmbaEHzJ",
  "key14": "EXSi8eDP3NM6kRZAs6aRohAz5DiFVzrQoK1pkSRk8vvofC3r4rEXzYNm5ywh4SAgvq6Dx4DshnBkou2rS6JC5gH",
  "key15": "3LEFNkgg4y2skcQcxFXKYTyJgTUaGu8VejZJ16q7zCX47bqqixSwt7qKhJU7QqXbfWS6ZoAp9UNWEF3VVL8aFvVD",
  "key16": "4nNyckjy3A84Hb9hBxQg8hLtagTU7XVckweqsrJqZ1ar13cypDqmUUWx3gHbb2v2tc1gE4ECdM5jWV948LpSqBZ8",
  "key17": "4StNPXp6sohrsbbP5nKuFrTskpDdDiwr9ugAexoTciS5vPqqc4SWjHmWbeqqF1SCLxRz6popQqCGSYdx3KEMfEh7",
  "key18": "5Nb2meAes3t7XmksAfj9YsCVjA81mwLogZqrvH5KsqqFJ37UneVQe7s2T92D3tSspemDxga7HQHBqvTYHoiXCa7z",
  "key19": "3FkERokqjpo8uA7k7yh5HXbwPVd52wPsRQ64v3DspBQn3wS2WdqX6cxHi7d7UuX6LMF1fC5ychmbum9bYo4ZZAxp",
  "key20": "31v7uNtwbCMUzMcQ6y9L7z1ZkjHZkDrFAeYFsyJvfJRAbw79VGnJebRnuniMVez86nzp3fAWuAyUofeLbzQ7GdAo",
  "key21": "31LVnHKr3B7sLZTYtiugkq7xpByFjSmjr4iYrp7q8krqEbcxRtvKtJXFV7kD51B9kQhommETH4YzEYac3h9WFQi3",
  "key22": "4Nes632x1bBqwuQwoRNABHGXCfy2BDTkY2Kaiqr1PVHJmfAPTmwLRTphaxwEuLJ2rrWvdw6UL89q5wVhzjeiJsFm",
  "key23": "4DCUjVwzncwv73sXi83jdeY2aWn85pmZV9GSfwrhFd1xk9ErXovRFuGjEpcVhNkVK86wHarJpyqw9ZyqWmsTPVsr",
  "key24": "3PUPuvmB6QNtDFVaepsbzZs5N3MYYw6usq96yKVP5bR3V386csnhR1m1MP9ZmnMzcgBXe3sv6Hwm3PkYprs5YLfg",
  "key25": "2VMf7JrRMBF7PcktFfPLd94ETQBXyt7ob3wiXDtesrWKwi4yEmCxASdMeRPpUT4uxamPJ1EWHJehpY5Gu8mGkYo2",
  "key26": "CDwDnz44NwdysYevsyw9E6tpjaHZsTSqmEu8tTHCDxyUeRtWkdgbBihnmXqv72MoAS7YEEuBWQeVSdnNVWQt25p"
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
