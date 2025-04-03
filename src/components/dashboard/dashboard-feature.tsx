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
    "2EWyycfPhkRAnUUJwemMEYYPbk3fFmC9KBYSHNF5dJ7qi21BKu6crUwengViyC3qWSzvoTWVECccUwRva3qo61kD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wmh3f3DcyxmWDK5PYhw4MDha8vBzraicCUVPzEm23JiwdejQxTKwuaRBm55yRmwkWae6H1sA7mNAzfztsgheqrg",
  "key1": "wnGwG785pr4HZtBoj62YPYdwrsXdvfSBU4xft7yvixKg6iB6wrkzLSPoEHzHghXdQowDyF2RmyRHVFPAWzagzTP",
  "key2": "5zxiuLaH9GMmXQnjTc8gSn9522dWyAPKJzHRz3vb6EbmBUHVuS4LZYtVXA78zaMBJ359pYzCNP1Eswg3jMjoPB7T",
  "key3": "3n91zoLSXbmimskZTjHe1aHfZffbN8VF8wTB9KgbAK8v4wcMwcuutT8Rsp381za7d5pDCt6DDBkeRwKAEzNb66Hb",
  "key4": "4hZmwjeQQqFMm8CTCxVi9ioLwJjFYnMdWhRhmJYUCbnEhq5rqhdhuRV4qjzZt8xpsyGVkAqk2frBwiU1GT19ST6M",
  "key5": "3PWbwxsdy64ug2pEZMNRWEm6NEcP6AeoTydaCwUkQk3iqujTEKx44ePKA67jsvaTw72m3HSCBinPErGngzVSUZFn",
  "key6": "3qwrTs9ssTXCTDSujLH9EWixtFYDWMRbV5UN7t51BrxMTTwbPMCizp6QfyoKazeSXsaFSRSCpr8LMKxh8CjwZU4h",
  "key7": "3YfVaNxf6uXVUCnCbschwzqwVFo4BkYSEnEFGh1yRwXfhAPqE4fUX4Y8CVRKrpRhgHHhxgGKEBuKXLJHvDrXT4Hy",
  "key8": "48Q7oDnYVripP1SRd36sJ3CP7id16ZmWMvPJBZF9Gp1qvCkJAvvyRtTjHPtx581NUoPcNWv3byntYVGVAkyzz8Jp",
  "key9": "3puxc4UeMvgvNWztXxvhSMdLWLaXyqeh3EwvT7hU3tkXCm6wVtgDnwanmvbuUCAzyjiLSqiyh8B8D25VCwsuQebZ",
  "key10": "he4C5vEgoMMKmSnzuRtuKm577VSkgwu1GuzLaKkhNrtZyEY8HG8TtPWKg9Jr6tqUgcd6HyES43fQAZW3H7FF4dU",
  "key11": "Gh2we8cwk3gFnSpiFcsWnadxKthavvFQYfzsnu9eQcQwAcu9sHaSYcirDrFyBoQSKAi6275FeciEPL23zVfh9AE",
  "key12": "3iupUHSKBfNUqHfjdSg3vonuhxXfDQ2MjJUyVwNK6H4uSj5t5eUTe83c11Xd7v2rwhcCuAipiaqmScneYcAoVGv2",
  "key13": "5Dixx4ff3xMC7y46JJg1guZ9RMR5vqxxVfi3i8jsSPpTi9ZSm33zVvrzEmgP4xUuPztYTh6RbQn7JdEc7TY4cUuu",
  "key14": "o4q8fWhoyXyzDGLpsyRR4EtQhwTZjdJyrqj4U6YTYPwDNpj7FDy4a7q3bbfnuNduHGDpqTwc9PMMYz8PeJr6xSx",
  "key15": "5TptpL7XYudo45DX6EdxNP8zEbGrCLYUfSFeZgfLnS13pFEu633AncBaSBahWkdNEVQfx6ACiNwN3zjgcpXXgwKq",
  "key16": "48BfVjKptvQPCxmJbEsNTvPbChWByFGcbGy7EXpjgu1EJYBCNeq7wuAf6mXUSDnKzLxJYuHdtR89w5aEpQuH9jAB",
  "key17": "xht54GPqYgbZEVZc9T8qNcVaTdnXS8hVJb7QCWiMKg6FUfXXXsVGSLp7ihmp5Qpy7xE9gpvvM6yuMyWxwQ8EzRg",
  "key18": "3mvvgjw4uHfaK5qPC8Lt4E8s2j82kXXRQnEFUT4wRmoHHWw55EDAwx8vkkKTeWtmWJJ9GsZcvdJ8xwcSNNvm1zz5",
  "key19": "698NmBDXzXySKwybsoGzK9mXUYSknnaiMWNud5M5DF2AAXv9SvDEaZzd8T1krr1avE16joHSte6ydgFyambfweD",
  "key20": "4DYmnW5ErKevdbB1yhNENub7VqRVw7yLKnBTgfAejs5ws8ybyVFGgxUJhGd9intQgyYEzttGwgQ3NcBBXwbNy8rG",
  "key21": "5rUepMKdYxFTMqsz8ju89nz6qxYo9Fj5RFftedQwLHZqvoNEfKCbKH4EqNu1HVi7YquxyoxPer38HAUW8f6ErzQ8",
  "key22": "5FidMvphv1KEojGUmRFRraMfAGXTg34cc5f4PhsbGX5BqvDNrbWsArhs5KcuU3a6WgvQp3tvK9mdtoWRrd7YccD1",
  "key23": "4wfder6mqsTrTnApCKGTgMvLhwytHVKNSJdBYThwfk1hHsAkVDmFTpzJ4s9FHfbXCg9B8xLkjdQkNZXoWt7uEstL",
  "key24": "2fVDGJ6MbqZyLaMNDW7RbBuPVvE3qrfyM9p8KzowZQmsK8VrAbZ4qagPL3erh3wEJhTJNZVo2gviTnYghv61br6v",
  "key25": "3VteKUDPMq2aiuFobfbZZpxKEKBE7oUPAuP1XQJcwfNTzCKGkfQzMec9dT48ZX1XZ11bFLjWu16jvczySe6VzQxS",
  "key26": "36qACfmd4tCvhsQhRaR966wzSnT5tXJZgzcfPy8hsAa7R8UCdWgo9LnK3Fs3HAPv5djUdqgphxMdm8cBa8Wnf5vk",
  "key27": "67nMcf7triYGwZtjHiganLKX56gSmqE899je8GyXYhrSupESMp4T3oP28ZZt5Jivo9oCvCYvutsJjReug4NrxMy5",
  "key28": "3nHoufmDC3f6SrNpsuzWgoK2eMAXacV5XLcXEaEjSwARf74d4aXEkxkg1DXf3qrEpdwArc7KM85qrFtewCro7764",
  "key29": "GX8DDqGsJD4TqoPX82HiJskHkXTAmXKxqa9Zv3morxwR8CNwNzvoBjb2cr19LaZBdxHKiaHaQqUJphmM38vfAHt",
  "key30": "3GwoxnQFEdUgcqDRQthnB2sZFYUhpuZfqTvieZL297H8BtHfCd4oL69pfrBZrhbeAsf9QhRpxgW1eWZYnCkiQg7N"
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
