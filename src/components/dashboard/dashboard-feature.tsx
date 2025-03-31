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
    "3UHCdMhYpbvbLh3L6Wr52nNJATDnH8HEgB2enQGexfEpEpJepZToWoaXwtana3zbb61v123fREWD6tiYftMkVDpk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PjYHVu1eup4trK86ZFap9yfm9Z94aZ1HuTX2uTQx1Xj5tfJQ6PWC331QH9a9FyCaphJeWabc6VBf6eVghWkztaz",
  "key1": "2xpZXehdjaazRGnpYtpENnjvhJLSUshCcMZcaVDk6GWHjz9C8dtCkntaRWFD3gAJfAJZrxBVQ35vugr3hTW4zLMk",
  "key2": "4doRqwDd9p38bPWQ8LrTVvC75z92jHNhW1HaCSxqt5QvGN3NqyvTbmRYpap2215AJYLHmgbTJuc97cRiZ7y6QZjn",
  "key3": "67a7dwJKTeGHGyM7vsC15Jm6aFNDEriu32PRyiCJzt4mLmSBiGLdoV5oQwk6oVA2mLuAcgHMFuWAN2tgxRmJG8Ay",
  "key4": "G1aUQbe9ATZrqo5z2G2ukqNuGK5jP6ZvzgMKZdEaaAXjYpAhAB9NKnnF4owQBMWu3R67q3WmZqvFgeks7cz1o5C",
  "key5": "MBKBY1gpfZMGMKNJSRMn91uhKRpUMWGTbxL7MWMBR8N88gF2yFrEUXkpMEn6ogvcpQYmhY758gU8TvD45JiJCoc",
  "key6": "Kj62m7XzP52GgUmyNnRRWiYTiVV3Rkr8kgTsPpptuLTzkmEVX8u1PtbRro3xS9uw6LcQpEpyCKyLEW56tQfEM4G",
  "key7": "kGhkgoob5Wz5JvCz6LtuwSDyELcT2C6cGKesvY7KjXKqocJSwrt1fobts12EQxjAV9pNw9ArP7Tzc9mnBaDMSdq",
  "key8": "3omzwgNwjyw1TU2QTCTdjMTYavWDz4gojUK5btgfsjVa88Ngy2Zn3ujJCGr7yzLNSoi6c4QizNHQsHvHACfYeQuL",
  "key9": "hs4Zz1ih1GptZo5WbbQnFu2WUELCowxsyGByCA7X2V3LsLPpc7doSQkhve5EbwDctsrzKky6Uhdq8wqmFcPwVbp",
  "key10": "3gcxmqpRMXSgECWXSuv5uogzh4kurBTjbi1yxcghQENkNLGUezMM34zAhqvGj71gk4oqjwM55MUtDvNT56WLiphe",
  "key11": "45GWnVeGWPs6nVfrjzEk88EM9MQJnEJ5i1CK488EPCLd9rHJFyJgMrYkHmHt3U3TS8z2v3caxmrxWYTt1258v2ih",
  "key12": "89C4gAdd7NdC47vhPAhuL52AAJ5APBiNLpLK3Qt53svD4fxifSVLHAdyfAemtPdYssZodpVZaPXjT8X3TCPnZ17",
  "key13": "5xTkCtEbLsmBN2Ud4PUBaWFCJVwkWQxwQskBcDhWAahKwxuoTPT4jWoejNe6YL9efZn8trXE8QfxsyHu6jBQoT7A",
  "key14": "4GvqUzUBZtJbXDtsxKN4RKiBzn9B6jb8qk4ydwBzycCGfzvcSa8P1EmPymHfEx1wDWcsRoDVAnHUH72CCWWTc3D",
  "key15": "9t3DdQQLbLVdzgkBqja8nSoL9nYcwtte96c7BAfZRSseCPmJKL7dybo8KxNvDd5pG2fsGPE3dUUwmjvp9H3Dv4g",
  "key16": "5Euhod4mCPRwgqXwcBhFCvwf4Bm82n79Rro8H6DVz7Ru7FhAgVPqpgmq3bw1xxsyiycHeaDNnzZSAVVc3HYS5dhA",
  "key17": "xBwbty5R8prSnXGjNhKMUYPnffzPbUtuqdwPoMdqy1SNWpJWcMmjfxzx1U8n8AAuwkwecpnezdQ4gyAvVzAASQ5",
  "key18": "65o2rqZG3tR8uzQK4aHMmApBEdkLUCUbjwyvZwVj8VX2YV1mjxFVcLixJBaeTPkzy1q8V9QcR998qu1JrTXkgzdo",
  "key19": "5qhpZwK3ANF8PCdQjjr2wUpQw94SYKmcDRwRi9PJ7H7prDw9pU3RjSFhCVMjmwDEZayAqBJwHn5LRRE4t9kt5Fo7",
  "key20": "4NqVe6A2GjEdcmmJWEk7shg42eqUpC6yP8NRpfquftUrb5XwJsMo56YdyNgCQCbqSXsyGpgX9D8drcLuZ7PvFxTE",
  "key21": "3H6kfxaNiGC328njKheniV3rnzVSs1UxP6SFU39CNDTKn8ZWRx9uL8Y6qFeESiDw45vNNjMgf9LJXP7kqHJeNoik",
  "key22": "MZQVt5pR7Fx4125PQD7ydcCQmCM3cyCmsye9cTxBUowA9hzXwP67TAfNJEAagYEQS6Ve3ATt8mVsa6kBAvTMX1q",
  "key23": "cdXRfBLBjkKuZtZ3gXtLwCsrvPepFAMjg5MSM4vRAXkSffjnsRSJg1tqeC9FEYppg5536ZpHYYiF8P71bQueMRM",
  "key24": "37k3fDsenEXPYzTRJY12borTYcHGfHtrTCgGrAWfj6vxBMfEUPFjkiMQ9uoLvT9MAAkP1npbRVxyXy8HLzuCDvRe",
  "key25": "3s9UUn3NrFNWJUHppjFyzAwjF1N2BofDpBDCLoFEfs4rYFS4fQvTunyPNa9rPtrSEP1ADYpNfSYGr1rSSDZ4nLKA",
  "key26": "5FbCc1HSvYcZ7sTsAY9TyCGTPA987XXqSxuJg5r1sssqvfhDhzi4QpsJ21VXRdHQEkiN7JpEMDYGy8GSqM6JTUry",
  "key27": "5EKHgsv8MK8strkFHDTmcF4LEDVf3z7KSA4sCy6nEFC3ZMq8xBGt3Po13w64iy2MqGDmqcwbERHi8Ef61mLG9bMk"
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
