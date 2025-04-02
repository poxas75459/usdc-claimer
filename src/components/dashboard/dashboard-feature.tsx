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
    "2mJqVjJ5Kw9Wc4waJdy7J7W9AeXvbeFr3UDaonDud4cTJ9ZEiKJt7cU4AUSn5m6PmP8tqb4edLc6BV54NbDRDJKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XBSbpe7FByCokgkJ6HGGkEu1xzYTQrtvCnEgP2x4Rfir6aAy1C5RirdFE31ig3pqzN5y5TYuUCZ1FrfXHcYG6Jm",
  "key1": "vwvtQWrUZi94VTbfxMY3L9xQ9HXEAtKTgXMjan1tnhgvc53rirFgsvtEEJTZpnJbkkx3VpMqLvQC7k1R523VqfY",
  "key2": "5o6neDjfjXVX7N7NdErLDPyE8WWnDH3mMbAeB1sZPqzG58LuPeZnhFpv9ZSBGtVAu4yTUidRabL6qZL2suXLA118",
  "key3": "4XvuZs6EWMPC2axQ1pp62oNtYC3iFD9yJouUZmD953ZQKAeFXrRfk471mQZ65TcANQToNKK27NmtrzRLpEABmRzg",
  "key4": "X4odEcJTPehTEESAjiJTaJNCdGFhHRJnBR83tTg7FCqbs7tU7KRU8fZHCFyRsMY62EXWiVLFCcdF1iXHQEA7sTa",
  "key5": "3WDp24yD74kdeah8gyQwekQCYagaC6PYq39ULUm16isTyYe4PbEj5CnpqBUfWtem5V9mDztU7WRmgVtULgr7y98j",
  "key6": "cJpkJEB1dkWT9Zn6EajsMgKLq6NCTCy3fv3hs5DVufcENo3ScZsSC9VPXCParuXHmQdnepwsQqdDuHmT1ioPcNe",
  "key7": "3Y33Bf5NHTxNKH42bRrJjJHjG4Ep4CPZ4bdTrwyHpX4dMfPnM1E82dZAErGf4Vr5uYgsVRHHDPo9qV2sSUkCJQae",
  "key8": "2o5ruPJNNpX3TF8yWcedLGQEd5kHz5AfxfG2428FzLyGPsnFPoaMLmrxUmGGd7RgTDGggy13L6A2tYy5dYDu1bPL",
  "key9": "B9CfEEz9hFWEzB14zQTkQD2SdB2wiroSjPuLvdDV5aJSGekCNezhXY15LmsLj4Nig1eagVZuWNqfC91zkeUYzvD",
  "key10": "Jaynib2Go8ETx2VCgLdStWTzA6ELD4ti4GUivMKLYpZZGbSZED5ygMnGakLJwgad7jV2mSwD7SGxPZs4MdrEGDa",
  "key11": "eemSN4SFeV6UyhmL5Luu71c6CVx8fQbP3wHYRwEJZYtAtnEavLxWgSP4kHp5amroS9hDT56pKLGqTi5yBd2eXvP",
  "key12": "3ef4vTzTjxnVFoMJX3orGRk542p2Ay3p8FUgrDwF1vsmabYq6Dtwm6X5HM6TTu4ugmgdL6ZbHFqebgqbfp8WsNNd",
  "key13": "63mRJy3TqWNkczKcZrvA9XcC4t9m3EBrU8XVtAxddy18Jnj84qBvGM4AchWPEd4XwD9DMWkLNTj7cQa5fwtWZEUm",
  "key14": "5WVJZxRFmQykSU6BteUGxMcoSp44xfE7CfAMkzJi2kyCxcQyTkFGYH3xJJMd69ibUwKvUYN2u7BxoN2dxCxbyQHr",
  "key15": "2C8JmdW5ureGvNuXBiHGF9YM6KeyRxe2B3FypKG14nWh6MHT8rahztyatp2bUSYBeaMKXg1tKEQ1jgicJ6d7NcV6",
  "key16": "qzb7t98Nff1ke8gbE674srueU6rtu83YLJHDww2kDYx4DiA6y6j48dLKewREFsmWK6YvM5G6fD5GKk2Sx7kBWqT",
  "key17": "4GEi8uHsuRXJycJFy2m8i5rujGiVn4dhvS25dSuyNgBR9fDLaZrqaJbtfxau1pe1q8TEycvejrkJsrqw8JgsHXov",
  "key18": "2cJEqfyPnoKRH7vMFePTbKbCGJb55g7LHy3mvgiSCZgUJzxCfeAJuygGPgpqmYF2iT5VHeb5nGfGq8GGJNGyCHyW",
  "key19": "25U4aLrd7DAbHDy8bvt6DQkHuTJoWDLwYQVZx4ip3pd2iyxwM5e59aVjX5xmkZRpEQN5knfetVKq2APiGcV2bi4U",
  "key20": "scdA9MsrCU5P5fKcPRqWddewW76Rnc6EsmLZPxj2ZkqgmFSKBZMLgroFVeaRdpDkFemS1wsWPHZ4qwYVQ1jdZYi",
  "key21": "3opoAMy1A26PW6SGycbgRBiGgAHoVdjcr2CaiYUkbpvQynRJZ27PVEiEsJjpZip3wfcJW4stxrr7M9xLZqRg6ehi",
  "key22": "f7LLbYQSrYZtr5bi4hqHa6ga6wj4nEkpeGezNLZQUn5buRotLHZbcNttY91zVqySXH4sWeTdj9aZpZNPnjDA5Aq",
  "key23": "2gJcDkLnCgiTgbAWJxjBPBd2wN715pVey9S9KqzLF3AdRuvgxQt8rGgRaLF2nXyHabYohqs1GfRHBBdkzNBHrcWi",
  "key24": "kLh1p8qM2hV6K5NY8QkEWW7EEZadJre2b7xbCb9BLUeyyJon2U8b93Avyz6q3RR39x9yQVrTazrN1qkrjHHioEX",
  "key25": "yh8bk9rYKJGnKdY4KxVq7zs5o7a2Ag4sgfUkqZdrkE46T8HwYZ8zsTiHgN2gPq61DuWtesHR6N4h3QaUA5Xjfy9",
  "key26": "4rkSAh9zeceXbUpHNHxquPPfbhXw8dFYNbWxjnF1yBfaBngEtjuN8PJXgRi8o1rv4aUQ9mdyS8n26bf7XzPMHCS5",
  "key27": "4dLVCAvSKKNRUYe545UzztyYx66hcHEQycYp7GAf8UEsVUFSjYvXoNvCzZQeLGj3jNuURFDhiH3yANt5tWfcbL3o",
  "key28": "2FvLBC1BqARsii9tyzu4D2r8iXt76noe1dNuKH7GWaQPi1tjbtzKa97umw5qbdGFDSLfdLDia793JYmTegXUgYiE",
  "key29": "4mh8fVrwk2CyACzqPRqodoRK6ZNDdA1hgDq5DMhmnZueVdeShubvFa1T8LtfvYtJT749Civn4WYq3FaKt38kiGNR",
  "key30": "2FH1MKg3yakQ3aeB3d4oxdrpoDyoYpd2XWVYjwUyGFzYAAkqNfy3xaA1QvcGtCwx2yncP3pehUBdJoJCyXemiGR3"
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
