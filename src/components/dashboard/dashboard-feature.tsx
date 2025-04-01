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
    "2Wpe3wRbEW6Jy11C6bkEukQztCCNDrzxmLCT82ecC5xwNtW1f7r9M1Ti8QoyKT8QycuSvWAzLAGvQsNMtTzBnGD8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n9poeDeFR5vnSTT3nL4GiYtAXfE9wFms9vFVfLgYbhXq4FpGNXQPiSifWhhE9rd6dGRWf2gw8ZAdeGYAYKXQZej",
  "key1": "2ux2ZJYjzFi19U11hQCEbrsTHWTkChXGHPKmGyghH57xU7pfaczaGarCv8U3RfC3SFnEogL1rKRcL2vpjZzStDrt",
  "key2": "3ZYwE8U4UwoYunbT4iijneYHfQDysJJzEq8md28mzQofssZiZz6EQ9mvLRcqmHH5F6KsfREVymRGvD1aX92NS3Lq",
  "key3": "JtRNpZ3KCoEErQkHMiHvSUxffYMhTwnp6NRi5nGk433u2ESfQTGdZjBnfEtub4HGWraD4qCsVWjTMBzgi5LcPz9",
  "key4": "4QsAWQvgxJHBr2SWEgM5bFiVrNwfw6T3k1qFLqD61tgpTyFsJ5xWKqDTzgGnVXXTyeAUsTo7Y63RFLD2KYjn76sX",
  "key5": "aCcTwrAHvvF3xcWyDncAEGBQhTMG4ZW1jNvfj7Qx5n7qXPxXQkJuKq1dkiL9EALRD8dAuErstrq7phNysZZdVM9",
  "key6": "4RKHDc3gY9uA7RrgFgzF8En4csmgWVR1YebPuPG7gX1ZppvFXH8rR1WyS72ULoBjruvbXvN2bAJqrZ1jwK5c3sPw",
  "key7": "2NUCqj7UK1EGZFToQuMmnbUd66sVFtn3h1iWaAah4gAdEY9Y6BwVsyCGbuXn7WkpfpFoxkPHpHjviMPoiU8obfsB",
  "key8": "5feYVe98w3qbdj22owpUcdjSh3mGaVKNFzRyoUG7AS2W6MoTLzbUiU5wDLzFX8ECuzF9k4seNC2U2WANVTvDfepD",
  "key9": "K6yXZUNu1YedGNX5BwCRX4qQ9teNsKyDvJa2GkrbVyLvyfd1PDF8JDhAtP7TpPCSE5Jnf1LxracNWRgrjSHCSXj",
  "key10": "Laht6VBaLWowpFiojACorBCqYgP7J3EGakrfJVRzfzxNP8j7Wvt6owSkzkzKnCybtEYeDSLg68TByJ89QuQU15x",
  "key11": "5KbzXaqe7mELH3XMs1hZ2C2wvAsFY2m3Qdyoqn7ETb6gc9TqeT54m81dRayNMXBzf2D3YzuPJKYeqxAGrqzuqmGm",
  "key12": "2GJmqR2E6exfqLRMSiypZA361HM85vSTpRgVNeJ2v5wsitGaqTir3KK44iy9BP4sdtmMDePRWNdk2aWo4GfbqKEj",
  "key13": "3gqRx6EfbnkshCTbC2YhyLyb6AehpvTA1y2ZeUHrm9qgfdG3ZjRGtS3hutELdTahWQDKwy1AABuMPEUWa83VAk8f",
  "key14": "3cWWJ6qKj2cvwARAq8ds3pCxnjnRfc7m4f7c9WbkDa6Ut3QZqEVzMdYH2dyvzfiPqV13h1mwVtt5GxsucfUh1eNV",
  "key15": "2MjHcwhU1NM9FXFyM9q6bA1F9rNAZ3KxcE7QsWM1pKDiUWRaKvgkdA41hVszuYzNZ53UQuUk8NRJzKZmCU3jREUz",
  "key16": "5zXyL45K1GAqWWPgfsqVtY3gzcAcrAtwoFeu4UcrHNGtP96JkCHCn3wvN8ixnM1KgycofCVWAtAGvyaR9TfFFUhX",
  "key17": "3ct6s7p9QL6cPvz7c42hmcUkSjWKxKYGp5w8kzQ9MgC8VmVgvzX11JxrY8mJAmQcNgcjP61mjV2vsbQxJTWgEXV4",
  "key18": "4DedXtG6XYMxEAFScArNfB1oemLyhqQyTiWjGP9KgxAqQLm7EQ7VgqrUht3SuWvk9xkLcY8FhDJuwaE3hAjE4MFy",
  "key19": "4esmf7qHCywc9gwgPM3GiMcHtcW6qCUcHTjvrJTadvjazNVZh8L5KzR4rkhmwdZpcbi5ZCurDRZmpY91ccMnKwJw",
  "key20": "4akbSLBWkYV1oW637E8w3ZD6L27VRH2JAaYse4HUKmHWe7haKyuevurrSHRwJL83R7HRKjsQFdgG9Pgt8iZChDU5",
  "key21": "2NcyR9VUrKk5edFG9SFMKZLeWuCJDkqFoFmDjWo3tyBHR43FpsWnHKUqWbjXoWkeQV3UaTSeBQJRtxDg9ffPViMj",
  "key22": "2T6VeWtUUyDGBKDxazswutiofuyUjJmX7Q4ZvsJgfSgi77NzVMrfXkLFDA7dsi5wPrHc6MivsF4qyi3KGprNRBN5",
  "key23": "3TtW97xG2tkSUh9FqHHcK19MmPb4zUdK57pYbm2jgTdSEJURmMwohLh5cYadsLQ8xL72rVDXTSEwfKnYjwffqXPE",
  "key24": "5nFZHt5WU7mQSLePYTatkYFkDfkz6py4czCdCL3uba6egy2X8dyv1rtMCQbak6CbGi1MGi2bc8PDhkjBSd6uyY8S",
  "key25": "25iVUCFSnFvtZAf4SHHVXmTVaZdgxtKsQHZZw5nPLqyEUbve6osiqdWjXx9cv1AYMEn6jpZe53acNbV22xngQUxc",
  "key26": "5eP4M4Ssp5GjKwfu7npHriGvpQDwxpyEJ9H2668WN3PtqHT2Pi7tWsC7BLrMSyKXMWPkadHvoSywaWEkNCsRMosA",
  "key27": "2ZNapwkjG8qvectyB6jpUFrpk5VfCM3YaAZAwn2TZiJy1115f6q1pCFQQfnbVUaccMD4QwkCsxWmPA9KmsEtuRht",
  "key28": "zGJgSqTCnXC9BKweaoNdfLfR43iAja1LirxVnCJQKFWsnwSkZwEuNeRdBx31BA3DZuwjzVaJjWrL8nXBneWNqpJ",
  "key29": "31xYxc5C5Prd2AyE64odVfpPs3Fsjr6iqPPZ1YB6XoPxfLzYXYxaKqyeaoGwvkYrhSxW7fvquq39tLNfUGMaQKBe",
  "key30": "CGE7ZAUowMw39f9sB5eLjwmJa5o42r2DQk7MjdHS5GQ9dXEWs6pApMkzGyHtEhFuehH8z1eGuvhpSHzgBnT8aMz",
  "key31": "5z86C5Kx5wts7mX1sgh61BrMbUNwkQhDNrVGCy4Ya52fQu3HUYhEPePchTJpZYB9pNFkJb4ThVBMDvh6iiQmpoky",
  "key32": "5d4mEUxdecuzdu4jawt5ZqRAzPB1cHoXBUDnDmHA9XtuvEVZyLXznM27vfYd7BvGVPWjU8XF5SpWEsq4H8R1ZhyH",
  "key33": "4ccrxriVRHCtufUa4owRmxwNTvTZJxF8ZUApiZZVU4XTEsKfHTccxLWPYy4SVuUH6p8995tPu913xGXpsYJkNi1Z",
  "key34": "yzQXNnx7mDaMQp8MQAhiYpuyujKtZbiNzRjr6iZPeK8U7QVwu4PejcwpKVzgo6SXrTNpJAfm9xxUdBH5mc3VrCh",
  "key35": "ZVDuXPv4cPWUEGMH6zfy4Hc3Dzj3ajU9xG4HbS5oSGY3vREp1RXH2cXXykGaoeDGaFDR4aEhcZ5LRRHtHUncRTH"
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
