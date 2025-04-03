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
    "2AZo1BxVKPSHGaKSUiRKeGiGhRNEyb77URAiTftGMSmugsyEkudfks7Wazczu2sH84rby81f7neKsVJTDVpkE8C3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iG1xToBhJ5udsZfGJ63ngZtVqzNUaLfbEWuKq5CRc4CgpLDNy9MdW5gxHeNMKJ9iFRsKrwtpKdHJi3ABS74fkae",
  "key1": "2dLyoWgK1yUZeTDTZCPXyvnTk3JU2qh1txsMdo7v9Uan9sTRoj7e96JiHmQG1dXh9RUqdPqA9Cp7mRhRpAg7EyEH",
  "key2": "3xxyY762QHHV7xF1JLM3r4ZeRBrGWjRyhjcgT2Yu2NFN5oLuBvAMtDRt1NSWs3qvNx9DhHZwCkE8x3XuoYBq8JUf",
  "key3": "39Xfba3QFXw4AcdAWdm3wzZS4GiFX7TXVfxH91KqZ4Zm4Dt4aPcvrLV1ft7vJPaxfBYKx8Kd6MeTjB5bMZZJfm3h",
  "key4": "4BQusDxQ9ffiRgJR39qf1pR2SYf1gNrdyQRRnL1KnRo9sBKwgj5XABnTnYa4XCVCKXEwBK1cJ3SwU7rsVm8WUo5c",
  "key5": "4enB7DYjoD4DW1uiWctTVzyBatYT6dQeJRcjcTriAWPVW4xrM3jNC8iki6RfNMYZCY7WyZHCsnC58M8MxvK9ShGP",
  "key6": "zxH3fCc1iJFsEdZjnfQ5Lxx2G6NcZ32hapDY3RUkVu2Wjop8a4MZ52xHhZg6qJuftGNTFhxT8Ndt7hixTNoeNxu",
  "key7": "52uVsNrcXmGcsXBNDNakXnVkThXuBofqvm94wwNe4dJrmHDSUjHCHa9HEVBaNcK4JP8g7iPBT517HiMCQSaocXU6",
  "key8": "eHtvGUSNJaD3DhEBDqyW53jsUJXwTZw13AY8EM3hunLrhyTEu8Yzq9YSZGUDEg9Wma3MRtn5rVXSwF7tqtvtQ1q",
  "key9": "47bAmdWY8L1JpaKbqhWRuE1XQykcfikJiQGuEZzVAk4rcp6u4mi5Rn6edPuzdWYa4T8c5yyZJRjo9f4sTM2oYjZp",
  "key10": "23Zf4sY9QtUErZttc2kJtewaqKQWc5QjptMpeaT392A4wSWM6Ea3etVmoRWbUrn81cM1wEB3r76zeXjejQGVCjvJ",
  "key11": "4PQ67rnk6KCuTCaKEHfybQDhm3DzeQpMPXNU5wC8uzHsowKUxgnDsD6SsXFv4HB3fSNpsK4u3xVTANC1XCZQgN3a",
  "key12": "RHDNPTv6UshscJGMkPJmnBBpR4Rhg3A81xP5WDkwyQHwZFH4oSs2AQwpE3XfEJEMeT9P1VeEYKzVikNKAgKNpqU",
  "key13": "6jTaPhbCQStT1weMN9GENran7xDKURjmrL92Dr2yHJwamVzcGf3xUoYoP2ns9pc2pXpnZLqjkpjY6MqXgaAewKk",
  "key14": "2hVfAgKTXFK2RaYAno88bpgK2z8Nif2EBr61pvj4FCTUGLwQt8LL2zxUgLwpee2fHZEfXxUTZtnCNrFjf2JCo6dt",
  "key15": "2trviG2aWaiDfNWAVAFyGoWDgejD1fnxvoGv8Ww3iAJPhs9iW5qXKwvnGYWbTtzmRX75eqxcgDaLSUTgWpm1Hgps",
  "key16": "3kiKzDj3437JVobULvwpA3MrUn2qhjrAi8RBYCZVe4BNeo2DZ8ef3b9Wbo3tMnLQrKs6EvsRzMnVNnnnGeAJQBi",
  "key17": "4cGLx9xLGnozEoUHPj2kHdTv7jRUumfrCcHuAMZx3d9aosqEFNqSuCrF3jmcoY1PuhGJsWAsm3SHVLn6epPJqXKZ",
  "key18": "438GAgDNZQz8GFjKCtW2yrQY7GqrQqJ2x6aGvWEKLPFNrXpN6jMwVjMNWf8bqgdWvRkVtKmVurrYPW8boSuKND8J",
  "key19": "4SEGEyrxktdw5N95HHudwqBPWUod9yePDbZU4HmNcmTRYwHeGK2oPS17LsrhFQqt5qVvuA39eKB72fHS616Eirmu",
  "key20": "5YJa9wH1vYQp738saDG4hvsXorhVJGPfDCa6PJqA7ytN3MhUdPtTHCKvHbuZjAcTF3G8xtiqEyNFRnWvtVvFpKjh",
  "key21": "2udrvVBiCrvdzkBZ3NptWwTbH6TkkEoJRiGmZHoxZHWa856TVi3k54rBqqGtUSnRBuzoL69Frr44NoYw4LoE4R9D",
  "key22": "38tHkRRksh2Mf679ridqVwieFqK2WjpN5HYXEzyLXnbCjsr363BnCQVL6fSZy9S9BaWssvmHgJBSHfsXwfMDdh6b",
  "key23": "XDynVddBMV2mz3B7TAf3JdMQs8TEKo3ik4VJNfX4H7JajmABDhNwLCGpvFALGKVSnmVT9Xs6kfUFWDVzKw9i9dR",
  "key24": "3tq7xoB8DcBkVTQTnAkMC2vqNp3bM2KTGcGgFJs4DoJmSwSH8GSHBA5Y1JNifkiWEPcCxWn9kcE1d7SYAiEKwmrS",
  "key25": "55rGqT4SdU9HXNAe8RniMWGxvtxj8TmBUHqSMUCumvDvMdGD9d3Zs87CkBkdSFjWr6J6TDFiisPiHuD7Y4Kq8cRZ",
  "key26": "UVLdWUXtyp8XZ6mCteGvdZfhWEfvH143PLdB2LiQh2pENMzjwCYXvSrsgJrJfcXN4MBT7ntz6h6kvAgK5Xu1eAE",
  "key27": "y2y2HtCkMvE8syA2gBnWvBnJXSFngRGgQYVywVguJmryFzZYRXUYLFo8WdX7o8wckjPzhbQFQZ6CnQm8AQ6b5Y3",
  "key28": "54TdV1TgpBSEb7422N3ifdL9DgjAXAsexjfpZzgwC34dpxtrkUBeppkbgTKzGoHNWwBDzRDWaFGQvVbMJ7h4YYir",
  "key29": "dMh9D2CTKepzMrDNduXbfCCVTKbHqUPGcgXj3ouKyKfsHDeHJ5inW1WzT2ZExP39rBqUCYRNxMT1VQt4ckQSsSs",
  "key30": "2pB8CY7k3nVWumgRsFC4qnGcWg86yp7i8QdQuvdkjLtY94JnQhLhPjg6eBLueVoXw7iwWZytfNkXd8QVgXqZPJwW",
  "key31": "5Rrk8PjAC3LDMBEd6kxKaX8vZMxjwwi1F9dBqyiSTnMAQYni9P3FjjWYgf4cvmp6kUetLVXQWW8BLbTjEkMdS6GJ",
  "key32": "pzzPvM1aoFeixyiUnbcw1UTVUvWfY3KnhAyUAWouW7ZaAU2UZW8sCVPZUaHgcTuaCY4aTfTZNq5Xm1cSH7rhLRH"
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
