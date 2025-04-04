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
    "JrR6FjrLH49ADEp6ArBVSTrpiJkeFZmbAA4DcRPVwYdZkkzvUcetVfotVF41CbJB8fd9muk6ewEaWd7vFTrhQq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gK3UwzsgP3gMKVQAPhH8QwoALuRPeRzzw9REHa31xFEmMdJ7QTaWKydy6dnNFLhnTozXzZauzUas1yuxRUgmCXX",
  "key1": "5rr3BoZgvwDcBevWpQJJ8uzNLATdyqvbxnTFQDCWrCyrTrFJ3XFL9hrrUV9YrvRf4YPCpFSstWwZPZiuwax1mJLR",
  "key2": "5FWnNV1qbrKKhWWCA6bBQwNpos5kKsY47nzqEsNqiNSmCPB1gPSwuXTdp6o6AcgdMdTJN9QXdDWq3qZ55NYw7zzq",
  "key3": "3Tf6QXeaWUYigruNBQs996kiDCJN6fwwpwDXXZUHQzNXnpw2CX3NVYZGwj7SXMyAEkmVtvPrphpWxwujx5J3Jnf5",
  "key4": "5J6PDXBNf3vvYrPPQ1rhFpoZB4xXGmY9bxghzbrWFsgh4tD5wMtUjXEwW5U5C3yiCSUH2gq179A7hXofB3DEX9m6",
  "key5": "2HF9dqPjVzjtP9n5irao5K157M71t9KgB4vBv3stEr2u1bxk51mNz68SV8GsrdiSuahy6nrLKufmCx5itEw6p9ES",
  "key6": "5Kbh9CAKYf6B742fKy35hwwnFk6pLiW6GaJAJK8nAK5jVPccwiQkA67wmbZZrzd73DAr1tVVeERhk76d5hSo9tVv",
  "key7": "fJHvidKYh55pyDiyFAxKL7H8LcpQQt3FqDMdB8BXG91CnfnMnbdqwJH8KhTUVZgFZReTxXNyekDpbY4sVFqHKad",
  "key8": "5VdJuDn4DmDRdy6mbRVHfh8bhkA4ftChCG2Tiy8eUrmdM5W9Ay8ePZgQg7xh4x2Hxjxc4WbtLQktyphoBp1CcaGn",
  "key9": "47nQdaP7vhexM2EEQknvKD59g9AWW1GzSwTuNJrihHizVhYMRo74jKMfD9iH9KyV3rNKhDyskZC9MjJkw36sAxAt",
  "key10": "58bW1hDFXCCMVvBFsnACKThGXEpcgRdQoW9pL3phd5PFtkgv4E6WhzkuBZEGnBMj2QZwGfBhqvfdxP68CcVjMLhA",
  "key11": "3M8USunDbR7LW9mHJU6ujqYMVkFSNikNs6qLg1rfQJUGVkoFPT3hciK6NjkPF5DKKQZUXYn3D5kW6hQaqWfnDA5z",
  "key12": "jFDhSjYLishfrbMFRwLJFsX1AtpwV5pzJSzw6woaJ8YxshCRU9DKRLmebFmcWYWinRUz13mWAkD5Jw6cF9jLGs5",
  "key13": "39A1FRBEfiQY2PE4pZ8BtfKZjwBSNqV3nuaVRZ4ejs1cGSRbVQfYN8zXdDZU4cuFZKQT9sb9zzfYoBUgRYSaRJ7c",
  "key14": "2hLaKiDvGnM8L1ufyzEP5HwvmXSyAphzZMmiKtjLEAT8zgneS4aEeKRjhgBvB5K6DBk53iFN5kp5VgwUqu4etfV8",
  "key15": "5gZFXmjWfTgpuKnXszNmaSwy1CkggEReLnW4SrKjjhzm8HrCkLyc7ecn2MQtAcM6VZTfQpsKa9jJtnt47imKT9bu",
  "key16": "44M7FytkMHV4zPjkL2tCVF2KNqQLmBLoon6AeWZYrw77GFkKTTPjLbDteaZRrtDzY7Ejr2NUNTUv3rqm3B2YDNPz",
  "key17": "2SRHmgasuD9SC7jUfvCR54HUqSHLZQwCk56JBWm1fjRvTwFT1y8NrmvFzymosjthHSDQWSacJp4k4QM4k4p8pi3m",
  "key18": "46Le5iR3Rp33GFguwFXZSfQhm8VY8X8Sn2Hq8vJ3fSS9tTCFpVwe1P5D7fwhwvj9Y3RHqwxgb5q44oR2q3QnpMWs",
  "key19": "5gbBHi21gBiHpXEgFXZSGbGiu8gyCcfmNQwqHeGEdWUtNky3mt8dughGbfURxGr5b75WtHx8FMe2oiALZMLApBAF",
  "key20": "4EFvH6581RUvHfQn6g6agsknRssT3ygCeKxey9WLTyhMzcactVBK5iZtTuLDPuZippP3tnh2NzcaGXBQoPVeEcn7",
  "key21": "iJxRknh3L6843BaTQzM8Scc7geLDV3hrd11PCDuG3XaR6tZW3okFjJmUPd2hwre5D1AhDPkZZ9bPhsRcyVhLyPn",
  "key22": "4s5UcEeCsbTmAcRjJHunhJ9PPPCaaceUMz6Aq7p59qKXyLTEk5FQ7wdq1x32fi4HmXwHTNW1nnpBx9qHUWmsTuhQ",
  "key23": "4b7vdeBE1cmgU4kW7u85FrBTVSv5V2CnYxMQsaAaHWWY7ThPRY1BuhabuC2sZpxacJWaWakzNBDJtAmhKz7CxBbd",
  "key24": "4vPhEhXvLomkH86e6kzVGzapXMm1q479D8z7vgKZaxPTapai5vMhiLSrRL45z72Y7j1N5Y12ffXQbhscQBgatXgd",
  "key25": "5bMstjzHRpdEToa9GazDMnJpiU4BgpWgHbMwYKDH3PxYoG3S8pY2AKpUieeyJYEKyXfvdE59sDJrocoQU5HW6pBU",
  "key26": "2BdnrchXPatcXPt6ULoKvTsTq3VhvvGR8KedPkX2vFPmGuHGBTRC1DS97kdohzpkCPyhLncNkrjm3tL6tfuRQErJ"
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
