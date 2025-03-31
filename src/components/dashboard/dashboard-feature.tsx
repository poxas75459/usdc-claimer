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
    "5riKg3ayZ3w2Dcz3iugsTZPaDWoXCuFjHEY8bYp9bfsNs5YvNVwaiy2V7GPuz4p2NzeGDdnoYJPhWbrkgNptpTjN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57KiEMSRTnbfq8A82BFDeJShpHNQV97DwFZini726Yuc5G8AoLjConRz5nCS9FMiX7R9U6CXJSkdTm9wmmeqpPUp",
  "key1": "CVN5aSTqiXJctitcC4vVBBmLZmZGGHSHucbJKB8htuMaXhMLveLa4TEymJgJeoYHEJqtsfVKKVEJgfa4zptzspZ",
  "key2": "3VRsCpgYPWX9LoxejmmnN884yJDpbCkmq5jdzobhdHHqhsYuGb2nS27VMHSigY6cbeaqgWRgXy7WhSiviXHuf8Vy",
  "key3": "58GJ46YDUSue1pFNzUFiTiba2xZcmF4hcyKUZtjBGBw8ES4zWAN1VNDdeaFMoNGt8iF3AN3isgpKwijmxG35SsR4",
  "key4": "5g9frfApRKCL5MRN8s1pwsAVyFKCxGv45oYUAP8Jhp3jSv8tEyCxrmUE7PDjyJ3Y4eAfry9ped1N2dajviGQKKE1",
  "key5": "5o8hK4XQQ2pqBw2qZ8QXH1ePUPCqqtcLEutbzsrAwc3FE6XcjjXbRCavFXHz6xD5bG61JYu8eDB4G2GHpFoeZ5id",
  "key6": "5VoeEKJsVk1a1bmRQ7qUeFpHZb29SUsppKFCue2NNacdT2msvm7XrdGeERCeQRhvdxhE8xaEQGW4voFFjUfCEWhi",
  "key7": "4HfrCZqK69YqPPwxZRNFrw22doU2cG8cDQgBnyFuc5Gcrwh9FrxTofpPiqo6zbJgsXJXgSy7BqEcsNxZuhh4JqAc",
  "key8": "5FeQ6uhne9e3XK3JVuKBA6SUUxdZEA88isBfFRTeTnPd9ca3nSK3zURwEjwSEMdnWdLyFCHSqWDdTqLyfn7nhDfw",
  "key9": "oZwEKJVM97vwa3ozZhowdZSgMVk4RzBJY3eFC7gfGNbHMK7XJT6uzQtGrnvQvUqQR3x9knMaAvEWDHe8CNUorDY",
  "key10": "FezyDtjayQ2oueSXxH2xwHzWwcZaLErX23jSUSd2Ua2GphE2pHhrCtcNYg4ezLYoobvub3MPZe6wM2LJBhPysyg",
  "key11": "2MjaRKwjPaRnvNq4HptiDcBBvCCKtZiKYM8Bgi1DFetNm9bLx6g5PjnYofWvcfqZckXscJNaWseCKpiCj1Pd2Pjn",
  "key12": "r1oQ4j5oSveemMK3GWLQH7dstucLW6DAfT1cziZrsfQ5PLkxfVviVrTAqH9AinoqJL4Yn8og2fXEoAkCbiXZjAd",
  "key13": "MP56Bv4a5vRfrpjrET7aKedgPBuxgVrzwNyY3UzEw2sXnTLHXKguxzGLCyHmrv5mgsUviz8FNEHhnEC8MVX9SPA",
  "key14": "5EC25jjiVn3EANe3LvR8og6u72g7ndeo3bDYEjRih23S3wB5f3VKHg8fxb5egwYYKhbZLhfnUHWzJGRjBcKuvR1L",
  "key15": "46RWsGEW87Qk1d6Hr4a97JArbigQHr7MZGwxEKxQ5hqutKYGCN7WpAoMJ4rcDvAeakwhfn6yhNEJ1tgA9rzN7eLy",
  "key16": "3a2sLm2RJbVygbFPP15AqP7q7YgXugU7QpTzBt5i6eLLzg6UTreUJMjuTZNMv69cY4nkQjyCUZ9DiiueBayz15A",
  "key17": "29mJqxT6ZKnsvToaF4wyPhzB5LM8VywowoUMH3pwffew9J8E61TdX8qsRfhehmja1u6r4qhkzCq4kTzUfxfPAy94",
  "key18": "5x22dqAnDe5JTnwMmktRRcdnoWDvXmyj4iHoQ784bV5RfKE5CX6dMPTTs7XoC2puExU5snnDhQ3QCBCE8kYjinRe",
  "key19": "rUDktYEyZkUn76wStpihPLUuWQYwd2d9xsNK7pJE9VJgyEiiyJhZbhA1eLqA28L2Dot5dnQk2KQ1qvFP7GLwpxn",
  "key20": "3vHm9BbRaSH4CbVXge4XQR9xAS2rvHDrWq32eUhx6ms9SBD1F3d1i1y9yN3WdDEk9ZXM2MFrsuVFkXyGdTbPhsb2",
  "key21": "4WNfDt2HRDmZHZYBzyLs7PquMSzSe7jiJ15X5DVZFjYe6SyFooa149XtpPX4nMQnHBj7us5iJ8jX87WmP8hMDYux",
  "key22": "3nhhBburqxknph5BEM4NYujpo5LsFCXUxGrofXbJ9ia3VYXaKeFYyMcVrbjPdTe6ceBEfUSoykVXtc7LQ6uFarYY",
  "key23": "4HXapzKkzsuNJEAwTYfXZSN5ozVBPtdRwTUzLSKLG9gEqKFNuBH1S5wqFaHzcdfrub9jNbe6BmXG2JRf1kaERgZ5",
  "key24": "3Yy4tFwjXGY9VU3gQnXwAt3ZpYd4RMMtoB93JLT7YNTCHVFuMVZyG57p2u8AQiiX9dkDzoowCqd4XshnBoZ83ALh",
  "key25": "3sFHKkcmw9pL7h6i2wpS43Vc6C9XiNTYpS4r43BeoxDQ99hnLkB6UfsVcUrtbxGwb7SZuXD5KxSBFbM8c9vCPbw5",
  "key26": "3FtmvQVpoNMpjy8Pm6Z5n7CDgxJcjcJ6rcZSnkc1d8G5hT2jQCJvhHBcrzcq8CuVZJNUR8x43NskTEC6wUvq11fj",
  "key27": "3Z1VQ2LKV8zWP1DA9vSa15mydxAVN9EtapNe1d7uBvxPNhqod5QvvXQMv5Tpk4o9kbvrTa41o9uWVCJ4LgcZrSiX"
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
