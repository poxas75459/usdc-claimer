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
    "Z7FyVX79EYtqSCa3MQXv1Mc3GQFgttcYRMDGvxMyz5f4fQq37LEwKRTYV6YNDSPeFt48HyUtJdVsCm7GHfP9SB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47RmbTcmj28HVuRhnmP5WERvt9xZB2VhnpC5yfkJiXDgjL4TmtMtFmBwXRCnfnWkhUQJfjBX5RHTqr7izbBy25w6",
  "key1": "341HeiKHrqHViMb19HHyoqnFcCvyPQH4dkEQuq6FhsAJKyY4MGmYAaQ3DLkBmXBgzdWrVhwMYGpPYQ5JyehXwi5F",
  "key2": "5u28HvnaEY61WVchw21sBfSQgsovjBuxXPmxeQHDqpXThMXuheMjWBNpjn3akEb14gRk6ed5me1qY9zqAWtQVT2X",
  "key3": "29bhkhXqwvZUcxqCtnKZ7YRiXU5DpaDaHH7V5i9KcTum3ekjU42LLZ16g22RmqRBM64nRnf2fhYPajYe4grtCPDq",
  "key4": "5FXWjL78N7jSPsw9NhtqkmwJCARRrQpADprvHWMQ3miq2vAqZPEhJXtEZyESXTLFDHPiW4sN5NXVYWtxnxPeNDo9",
  "key5": "5znpkdHZG6ezVM7SGf1NKmLT4ZngPhhZyCqub93DUfNhvzfErZNMziyVHBRdzpu6VDZpJ1RfSBz41gvf5xbuqY3q",
  "key6": "5yKh5dFv4Mm2g2P7c1rQ1dhzwTbi5xqAKPtYz9nKAdJWPhM3Uw5HT18ZCYxzgwWaBCnE1gLnF9xccKBirHhPdbrj",
  "key7": "5dU7pnesvvpLCsZPxt2MTL4t3f51NkjPdCP1tSaNaNnfePYnbWP2tpgqxRnUkRv1zPU13i5dVSarg35h3iKu6zMK",
  "key8": "5o1Yz8N6UV9AGFk6QqhLSJaJKjAzsRpUnuT2gNykzrNg95GwPTs1TDrWMVFw9dAo5PTX6rL4Mu8idhkQYg5fsZkD",
  "key9": "4R1ntdGi6fz2femQPwNBo691SLpHB67uvmWwELH2ftMJZWFaTNiM5qMeN5jTZsqm8wPBgfKVKWM6VKHMwTEdJdbZ",
  "key10": "2QPpHBm2xmh1LoTevTpdp76i2fcAMY95ZdGmVpX6KfwCnWnHZTgJoXXy2Le35ZEd9GemXTbJjQB5cNnvNSq3Tdfh",
  "key11": "dDeWcZcUqUk8NdUjNYvFepfeBGt1QpAkcikFcorALuinsM9xZosvUBBSidyECJgaNtSpsB1dzLUXBe6mSXZ8hx1",
  "key12": "2U8raWc4yGetWEU6FGCdCbTJPHNnmcY45eDTJGCsertauWWYEixRLbqhXodmuh4ybF9ZBwimPVPV5pE7Earda2fP",
  "key13": "4VNZV9wPkft1eUZjXa6hDSnwdLy76RKVF2ydmA2QBvs9cgTG7xiYfvwoU4uCEiRmndJ6zLEzD2mwkXHFxtfKE4QS",
  "key14": "wtSZJAH8VBW7SwETsaY1mLtDJkJ1YhTB9caxGgEFU1HeQTVak1Z6S6JsoFb9qzXpiZoDuLqhABzc6VwAXW44Vt2",
  "key15": "Xr78nkHKUzcFyi6AFzi5mgzynE75bU2KiXBYM1qb2eg3kjDij2NnjwVZqEqiywqHEk8psuehRCEvH6mNXuozi5j",
  "key16": "qowkUjkBARt39tGhyVpEVQHCdHY4fRmjGvZbpS4bPW5AHV9xQFxsLhppXk8H6Vzy7KMEXosPnEinNcssigR6Typ",
  "key17": "3qAo4AYoP7Be9Lv2R1uaTWgbCZ3Cm5azQrq4ydcAddw49UQUciB6m7m27ta2CpNbV59b7S4BUcp7U2AfEHKDQ9Dh",
  "key18": "5dapfmQ6juLoTyixVbNhxyYUqZqhmc6K3CY9khP9iCSqVaMSqmBYBEoT77eh69cLt9Dr22d1k1o47Zye7cZt2g4K",
  "key19": "3N4GuH6cmZFpbFNWu7Rw5NBp83JmGmW63DYNypuuL7tpk4fJGNaYQYZAic4f1oiD2bzRyvM5ZU6dEyWVLUkTBTQF",
  "key20": "3f7aTmy1vu7B6CaeSQE7pRmzdQLBme7s7PcivPSpxRnQaK1n8jt6UakmNDUrQgnjGoKuCv9nLosHJJ3CS2yHVKbC",
  "key21": "2S9qVje8E8e5AkgpLtEG7k6m6qtP4axnBpFV1G9gorMB2G4g77jgroCbhbyfMFudWg3VSXLe7tRDcR17p6urRggf",
  "key22": "2WDKrPLuiw3PvCYgLypRro5zZykG8sfKCjbKxsTVQ1x5N8VXALmUX4yCPAyhWdeGn41PoqhVQwQLNuhQpVBRNc2",
  "key23": "643Qh8Up8gyHNsUP4LTjWTEis354M9JUrwY8TncxY3ij2D4NbYUzj1PYTVUFqQZuQwaLuj42f3h8YnY4u4222RXB",
  "key24": "4nNUB8E6jk9A5fduzSQx5N1pVEkD3oKVhWt7p6TnpRzYhXK4dWbHbxRYJ7LrkacG2SjeZ1a4Zq8etEzwQG7pdEyS",
  "key25": "5V2Hnq8D8Ek7azeYSEbHCrRp2Rx87SNQdF3UNDCRKLsCdofVfSuJMTRwZ18wderPdp8YF6B6PZXJP97Na6pRrVXF",
  "key26": "izCG6cJi8kvHZFD16N3c1ebW8cNRXbHmUMBi5YKfUKtwFaTFMyGBpwipNKjV9bXhwUjcpo7JPtPiWkJzCjrSCVk",
  "key27": "3rbLEq5DveCHNZQFSuHHxiDqwGu4jCTaaXzi7QnXMToB2VhvhCdjE9a83j62AcNk9jcasJ54iqvGbuRDAFRskoWL",
  "key28": "3CGf7hrXc6uRcqWhEEUY2p46tf5XfzgiW1dBVAaE5xnPjP2rTmasKzCi5oUs5zANYjBpkawxKD4JU5f1sy51pqPm",
  "key29": "3K3quxUjeWLaFWYzzGTrzovsQ4q6yaQvnSJn3GwqoJqUKkm7DE6ZmsNETABvXfzR5PNsRH5P88n4VNdaTUMmt8oK",
  "key30": "5fAyfNeGWWRAQHakq96cJoGV7eAxVfqQStmmxmtLS8GXPfcwTQVgnA78MbgUEkVAeumCPtLSQE7ciCm8meFHg6Rn",
  "key31": "4X74eA7XJqxWutHtsky7mGAefyefU4vYRUGRtpA7kaYVJNQ4YRr5nTgGwucyDE5A4nFWRq8aJJ2QEgGJ5QcAe4fe"
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
