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
    "2vKD2m4utZfk5d2KHpDSMr9oHMKL1gerXshozSuzRW1RMEXmBMf9mZrqg1LoeKqtLdA2PFmYKV5PRaMDQhuEedvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v5zPW6wgJavcMtdNJsqRgoCw9TAJB3wqpQdphKa494TXq8bbBzaoiSL6PPRnUT2a5dhaW1Q2H9kiWTJswjqJCGw",
  "key1": "3souMRaCM9638juaiWeS5PgGbWY3JRPMAuSuMiAj8vBEAVxzjuaoyeLx1ERGBjANK7ASnuNMTH1z5VZSF9o2EKhU",
  "key2": "5GooF7CuxUWcstFgGjwWyKgZJJUwd1VaRwyH7K5bXAuEZGd6EZAmxUXw52HoaHURusDB1As1SFbZANXvZSjQYheK",
  "key3": "4ViR3w7axGuqqFW7HpmpnWVPvfz7U6qbbsiKGdgonfhLv1cknTiHiUVCvwxaTVzNesXwfiDxrpKdVtMD1iCWmPKC",
  "key4": "5njbVYuEcWc7LvmmZNjiAmqvSevbhJLBsJTcdpoP11RPVn3eYVPGk5YmYC1e2oYLYNdUCSD4DA2uVvAi48Lfe4L5",
  "key5": "5SThhM5jMezjmRgtTyzKjytDUoVbE2M1PqaB1ZMqLJWvwgMLfjfnWRiH7e5tTTzRUCuY2DJ1dhx83HgSJBj2GeaU",
  "key6": "5pNXEy2pYmoNyVuGMSP7ggwSpyXCaYYQSbWtN9ZwfrWxkyzEgxvPTFWoPDXqBY96CJJQzimdUqhWjEwZ8CqpYUD1",
  "key7": "4K4FmdcqU7VE9QP29hxkHNof2W9RyEVNLMhzGmujMaE88EVAmCT41D8aeh5VvSLLQZF3XypZN9THuEoYFmuP5TZE",
  "key8": "BTAdwCbGu392ude4iCpCp2aZRDertsz377QkeLPBBb9fNEAJyEkV9CXqNHNmxV35fZv5QgL1yuqVW9dyksMKjUC",
  "key9": "32c2RN6YBL7wfS8vXRtLpg4GLVPYV51S7qaLjo2YwEXq2reaRy3g8RPrUGd3GR8iK6erMEbUzQGHE3umsh6RdFh5",
  "key10": "4Lk6JkGpMu4vVRFwzXs1yWaYcjtp2Ji4WG4gVvJoyiDPCQcpQgrckq372ij5zK8Aah2KAnuDBvH9dJdFxXofG6dZ",
  "key11": "5jRtaVFy1phPEr7ysCaqqKBZ6gd2qhRXEhmHsQA1wGNLHEn7jc6nP5jNLcTq2uu6kuSKXPhkZ6yDdA9bosXUQ5DH",
  "key12": "5tMEqYTCReNd6RuLMnUXBPaM9WEbAFAZexym52bEJf3vKJ5PSjFXfduvMKTDosx5fU3qCJ6R98ar11PX1HVnaoGn",
  "key13": "2m3FsoAzHx5zED8RjYaVC6MGjrDHuRw43zEG7J2ASBYq7moufHGscrZdqYFMsC8s3s9MTF5qwrR8KNZC6VT5BhQ1",
  "key14": "4auDM6gH5a1QfBPtoENbALGxGNUMvnCuTj84gnVZJX4GFhmr4w86GmSCicZSMdz3Dx4VihB7FKYE37yb5qi8hwVY",
  "key15": "3zVcGPV9wRGjgwNF9bCT9DDoAFGijzM2nbRcUNzG1YGdDsmfvxo8uY6QKoGHM3qppPtogspbTVPv5vkeiqSymMkf",
  "key16": "3aqd35xvqfd8LGGf6m2VZirVkD3CBdLeyLFjXfcs9SdPVN8iBewGWHb9CVqTnYUH49nCDmF6xifYV2uZu8RFdAU9",
  "key17": "QZh73ab5LLBiJCvCAaUdA8m29AwH2rt9XuzNAcJjDFRf279TM2scFLyvLVcQDkLvH5u6ifUzThyhwGcjonbC5mG",
  "key18": "2DJ5LRhJ64Lg6f7D29qniRQ47Yrubij4xVrgfwDJ4R3E12VHtZ7Bx5abF6PRWBGfRtB4B7nqy5CPS7DbDCfkH5Fr",
  "key19": "5T89C5mjRt8JdE9fxU7CehUytZoJ1nv1ooSqFohXtzXDPrUtDbfAXCpB5EsaUfvWsULyKZuvB3p25AMNfc12wU3L",
  "key20": "4afHNxYyD38uSNskQVEXddaNtruRfFvPSKNcT1cU6eHHNqrgDQhKuiCG7ucTozj3jcV6F4FN4CeieaXSEpraFLfG",
  "key21": "5E7oNcPoqm5xxBTQ3JZ2uXRjjVKLbRhxLVfPSYF8yzB2EB6X4BovDiJ1hihnAEsA1pxqsJoEdCUYx2m6AVXLizXa",
  "key22": "3ZgKsdHwgdg7q943eoQjybDiQUk8671uoJpEuG5MgoPvhAMf9fj5J3RRN5nuuANmg8sgWmTtaanNLoVDDk8Zyenn",
  "key23": "2kkKAr4hKDMCsDXsHJbwChyop4dCCGB8AR4hfRxdcM1pvwfZjLwGbtNNe3Sv41dEBY9XPWGxfqiFQ4EJbJt4TJNG",
  "key24": "3GQ34gpz8TLfo3ga1ZzFu7ZtGaLPqbAmUsZpDNHJEbYiiBP9vZQu6eSpPQ7vpA5J3Pp4y8NMgdZdbyu7YtPWGou1"
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
