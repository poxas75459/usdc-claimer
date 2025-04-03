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
    "2mmXr5tyfQXP4H3tVmPkV6i53CNfjCRYPs5e4fapi53JKdNrF4KNzmw7Bi9EG97eVLLCLw9iDPUWyuSaSvxYM2m5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iJos8zPDTEMAVrZpL2hxRujroGEzLjUgZEqHKPSo5THUQDTMxaCAjxKFhftMDwKX5TyuBjTXdceEMTXW8DRAxhz",
  "key1": "5TuURhb2ysSZbZPSkzdXU3jiQfm7D12cHZtw2n5Bau2dMshagxgUCxsFcR1kA9tMqP8ZKt2Vbg8Jtf6Zt197J5Xv",
  "key2": "3NP7xf3eDtXauC7greTxahRX2zC1mbAJyhndMENWZoMKD2SUCJQNtqMvPwQdPsDR3hWsRUx7mdM4D9UvcXnDqF7M",
  "key3": "5m7HjCDHzR2ESUi7FMxik68R16PJ6hDAgB3n3HzL4LtzihVQDc24YHatmTT9uF35ErrMkoCWwi6jBgS9vGmcvmDA",
  "key4": "3UXq3hnaj3ZCfqw9ZtiG8ytCZ5EcejocFN1rC9ARnSiEMvBKkxn92qUdA9iLn2KaXcyBa1QduFBcdu4siicysiCA",
  "key5": "zVQiQac6nhrF9reUBA1ANwSpreobW5S7k4S2MzMv9wqV1DHv9VXsNH3rZTLVkb8wW59E3xoF7ZmrQ8Lb8XY3UAz",
  "key6": "3xwkWmtZWrhr6m8SU4uqmqXkQ2MynKWkAiZGXRya5hYugzMrn1i8VAGoMtEL7t9dbDswWN66ebwZR3WKuqF38nKd",
  "key7": "5svWZUdobiRtEN6jNvmgDtfNNnju3He2Phv6HG9wbaLVKGw9ZRcm9aLDVX9VUkX4NGi2GFTRQ8nvH1z9EfcQXZqr",
  "key8": "52UF6a6cDDC8kss9LSwM2srM2eabaimJVqfGj63xNLwfuT1tMssNAkrpiVF2jJXUotvdML89BMvcLwMqxsjJ6EsH",
  "key9": "2DEkAb5CuSPmypTSgMshSbF1y3BTL6cydjKRbZfdRbvHECT2TioY7bCSnqtS52yLwyWaqvFwDA3scUa8D8EFA52r",
  "key10": "3psDVAwo8FtcWN4bT2LUzjxMZeusLDrScUbGBQbyPjgSyphDpMSDm2W3X7SDBQ9cBmpAPVLQPJ7ngCDuaGbdY8DV",
  "key11": "2XRSFgDqpyiC6iGTpUDdzgUFVS74q2xvFb9ruxxK4zfms8agqeqsK1Vs3P19EHocgED7SLwJ7uwiFiSgibRss12G",
  "key12": "4sLp4iC91hABfWka9ZgcD2xY8gqGghW2CDNFgBFnUqYmrm4RZgKLz1hWNyTEwgtEbD7orTy9VEzBrtodfGyQ7Vad",
  "key13": "4GBt72MavwsgFWanx5Q3FeK2nQa5iyyEcsceJd2Zq7bvTUQww9fjFJSbDPs8Mc2FqNxM5VXn2Qi3UCfMsHMrbzH8",
  "key14": "4raaU3ohJQaEmgH2ZKYK87nW2SWvnF6QsC4NZNNNF52Ewytk3R4oe5jHhKhzKAzRuTgijc4XDaVoaB1N8mZ6AYWV",
  "key15": "3wX7NWc6TQ7Gx6WVjiHTe9dLrPuYiTyeieYqRaB5RRNJ8GomHSRUwUNNvVr2gPe47wzEYkhuekVsuvnBFCVk3EaB",
  "key16": "2HoTy3wetXswKnifNjWt6k7TnjGuC4xdNJdkd9ons7dBswJCPKtV4MzPZnwpg3Dpn3612Qxea2MEF94L8BimBFUg",
  "key17": "4y23U9QZqWjVdTjnpoBVzRMBbx2zqrexNmj6H2M23zo1VAsz4WvU2kKHMQFNTMKeShtswR6RM58eSL3sUVtx5Ngh",
  "key18": "4YD5TFjyKPoznaEMWtLgEV6eCwPGPVCQzWkZTnEjtFEcGXt1afdpWP41NZ9KyuKG7tWW8uaq3t5dRMj2XuEHJZ7B",
  "key19": "3vZmCcfJC4PSeSi67dBgz2PNnCMexLJt2vFQcxdkzEEGYm89AWRsQwLNVS6JULe1Ft3v1wHjHCq12uU42gAFodfD",
  "key20": "61NYTGgXeD4M3YFW45nJ453WAcwXft6Q5gTutrh2s7VspNmSHRXBkCUEqDyJFVwdzEhxtz8LjeYcBGuo1PKDtw8U",
  "key21": "MuDxBQC9E611yPNNzE6MVgda88sQQAWC3pjPpVoJGMNKy7oAsdcwdXLcF5TyPFEXYx83Bd9SF5wF8f4fwdEHfaq",
  "key22": "4iXzsRLJptkiiPQFzG5ahD5Sm9of53xKhxvJUA8Zzd3b2oip7szejzU5ZeY1nrxDvYMwYARETTWZpKKciwP8W3KM",
  "key23": "21o4gF68kwbjV4npuxXiDfq1oCX2PaX5A7bVnBeGq2oGi1CBMSAcPTnPBdJW3U1zC1n6nU3MEfm6Y4JxyWy8TFe7",
  "key24": "3JUvZfnA5gnzyzHg2FfKnUbEJKFgJXEQv4rxjjnVHAuBu9XV5QXXCibPrq9xVed539zgEjoL4ni3pSnFMevR5jPU",
  "key25": "4nEVnHDeSKjeBfHSkLEUaoF5iJ3KhrPjz8UTTMBEQpo4SwcXpYQi5iwdfVuDjjBwpmRSv1uSvU5iwjnFHAkpAC18",
  "key26": "4edUW3EwWGMG6MwoijRkVnxShwLtqmPUisravZ9hiw2RLV7n2ap86Cn88uCg127jAvGbrhRroaQdfu4YGP5SDQuP",
  "key27": "2Jy7ckNh7AakcdBnWt13XijRvYHbPQZxtK1ijAeM9TzgZdmCJ1VF4AgR6KqjPtPriAYnp46VWmjPDuTX1ztuRDfU",
  "key28": "4eQdDzoRLGHJYgYrGmiMQSHMtH5vCChNV4mGhTwwAW6D7bY2Bib8DZ9SVEhRQNBe2e4BCQQjdNZpJHaaQ67ghFYJ",
  "key29": "CKrdypQkh23B3sxxBMVszDuhTAf9gYTJi8wQwbsQYddfYaUmBmThkbHTDo6r2oJAK4qHSgLPcNCN5jaWiN94wuf",
  "key30": "3aqRCu9q6svd4zgvkpfC4aeukfMVj1VCE9UrvxWS6wEDzkrT7ksx9fpai18cey9sc8D3BGwxs7yYpjVAUjsMx6Wb",
  "key31": "4qAVr6V6fk6TWQdjPqUMW7Ue9a4sytdPHAsXSzTUBNzwXBcjqdNhTgXJx1g7hAYzaYQRuRaK3UnmMpK9GcQ3nxrL",
  "key32": "DqyzfjKCFW8Bhy9DGtmi3etTimGebCuVaV14zLNsmmrBdQC5QqSRBrXF5DLDY9ZKALx3nH9CyWt7cvXT7aEQMqA",
  "key33": "3hViC38g9vQJs55Q1MWh8VnFECHakFB4cNsGyUdywWq6f8Co87SMGxs6aXvxsdaJhauxXc5XnqoNbxvNksB6yTX"
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
