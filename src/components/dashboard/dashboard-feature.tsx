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
    "FMFJZmF1w5QmzzE72tSjcEKxi5o8GmfuuagEg5p4UYrqWtVZ46TrcCWKonjRcm6HSJhRnvcGQnWvrA48sVgga6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xwzVF47yZ6MB83HPDtCXhbpbuMY4Zb8EcYzQED8qZqShALZXrP5zBUw1eZaT1yMwng1gtK5zcZwTdco5NMxCW4s",
  "key1": "2yHJvQvQVAQRr3DfLirj9Y52VWvFBHf9X6MQH3xscYF39SH36byC5k7PZJSKHiNjDXthUSN9QSNwAKumU1BFZwZ1",
  "key2": "4RPARCNgUAKYwrve4pisFp3RRiCoVzzuwTBbyS76e47zmkCT72eSJ7YB7mNGPanw3q3rT2D71c9oW9FdMmXDU3fd",
  "key3": "3vFUaLWJhvPzERLPoGGMkdGGpj9peLv377caNGStCrcuBrfze18UFUsDsMCLk3cj5oVQfFKKrZQfFqeUVTbBsWVY",
  "key4": "57gKAPbshZh1EQFhfDCVpuS1ioA8nsPepMiav5JUrwnYg3J2WuGqjmmNCydzubSm1CyG8KdqdF7DuKNApjBC2BjP",
  "key5": "8EmrApQuyMWKh6pagTVt2w6kRXREP9hfbpJqrgF9aChxYP753zLfvfAtdcCbL5drehwD3vmuQjFp5xYdTFzKig3",
  "key6": "4EheaNb9qsmBHfVfrhSkYqYWaHBPuFEMxRSvJhBerZhNG9DnErFUKkkRwqrWAZB359A15WjpshgMbssjTi5PKScJ",
  "key7": "4UDdQvFw6jRQNJ3xsWo8JmQbdHA7D6h7GspcLo4PAnqKBa6U6cAdLSQLW92qNh19Lk5NQfT8QCfut1gKXxtJ762i",
  "key8": "5qk6qdih8Hj1oxJo12ccwWkqT8B5aCA1V9EQjfgAgU3ryPmA9RYYe6wTLcSFZDGHfQ44cL5zxUkmfWY97rWfNjRv",
  "key9": "4KxJq7Nc6U2D4NAG6qKZQNnYufFgtkquB9SKRCazXr5onpPdozBaojrU8cZWrqAkBcV7s59hFZUKuMmSk2q9UaTP",
  "key10": "5UVj7nKsFZMMyEX65x5jmBESwFdHGDFoxt3wbius6s4gPpjFJxxEnZyNhgGCHvpvy6ap7kVTJC76sjERai3JvuXU",
  "key11": "5RHP95QN7xk5zWoucL1MG3P75nNVfgBdUPKshVE85aumhT3cZp4msPejF39rRBPtbgKSAatoMAB6CVAbk2aNLKBb",
  "key12": "3aXa68fQC9SXB4TEtMNzwrqfTM9Rbfw7TTpidXtJdFKfN88VX9EP6d9ppmCq4br9WCVSfRe2hrprb8i3wkr9hmXx",
  "key13": "S8F82L1eLYkyFgMhbDDuyGLHGCDxJFM8Cd1xXhiEHbX8rDBxZtnqeY5s12dtWSK3VjE5Jk5TmBrVpQYGvWTvekf",
  "key14": "2pkQxQ4d1dZDMF6fyucwZYKrRXpgEmBvccBaZwsXUVwMjZpJqCw4f4rXAWb9ZwFU2Ht23Ct7UpCS6AJ8sh4AnDk1",
  "key15": "3dDGFmUiuAbokmTz4Qa6SjeihuwH7YTx828Xb9TdKmgoh2iGCLxsozmt3p5cQCemuotjA83APkBjd71MQUr1adUk",
  "key16": "RaMGSVecx7bQ2zzT35ZpLNXPQNTf1fRx4sLZLfFxiqtYqcf3ZQmpfWJS5C4oXvimihhgbpFWR6VKe7qn34Mhw1b",
  "key17": "25UC6EPuYi7MvE9YzYTFYRo3RrMoJnJHKpxQVzbEecFvg6kj5sh6nAaATgno54mMBxqXZXAQJcDa6o5yFNTkZbEn",
  "key18": "4WYauVmdSx5Q5MnwVN1cpjU8LXEUXJ8nx9ksUF1FuWPYEtWtxi4nwose5eLjkCbecCiAwYUbayieFZFT9bCQ7Cgo",
  "key19": "2JrughbLLe6YTbvyTHpTrzsEsRWoBf1YpTwXwLMFoSDMXfHEKCYcKN91RbMmUfi6VAuNHuRodvLxaqGYzEFuihh9",
  "key20": "2m5eWERo9v25zp6QeunGkVuX8xXvUoQtp77bUHJpvuEBmzP3dB2WfMF8xyJkFCqPiFLp1m9vvaftFgs3FzQAKMBc",
  "key21": "4pjSUzvwhMdy5MdSwrYAMW7nUrCxGUDLQ8EQBpN2my3gBra4gNPCb7o89td31Zo1wPnDvmLKwEWrSHubXg5YFfvG",
  "key22": "m4SSdyGFqLmxgxRvNGgX2C7xEyJxLcg1dP8K9yQQ3pc6QLsQNWPF8be3s1co2gpZMrbkDvqKNYXKrWPk5K7wCZx",
  "key23": "3SH9xwJqFwaNpT7ewn3624u9MpD7NbLt1NRk1QcK8nfVPTaffAaVymrbEprm8gfxuZ3sSYao9Bq2vaDR1kHnMdxd",
  "key24": "36kiMuUbwNagM1zrTW9tAyFgP6JYMKCcBbjH1vG5dumRjaunQwGdgPz8toNJQq4GC4PCHPULtrim1ETDZU5Y1snK",
  "key25": "5szP4ELrrnExufRRy6YdsZ3q6kEDFmYeN5g4L675j81ftgSiqZ3wSvY2xYnoLzgtaFDK9MiVWXuoB6VEpNZXv8c3",
  "key26": "3QnD17L5ibMWUmLEcntd8rscxzGn4pHoNcDSb137goFGwckTZBuZjdYFBDMn7bKb5rpXFW1eeMf8p8ZBah8FGgt8",
  "key27": "3Xf4Q85h241NBeVjHvFxd5uZUhdSuufvMuQ3qYr3isss5Ztk2hVPrAePPsh2ujNDWanXnsnnC84tVQjUB5JNougY",
  "key28": "3gbgN4Hce5ET8ptKTYRp3KQ4Ldp1SxvFcG5cnKW5VYXYh7b1m4DniMneKKshzPq7YLiu5qsityZ7Z2JwbNpNnBL"
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
