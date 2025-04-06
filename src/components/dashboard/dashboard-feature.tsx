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
    "E69wr23Vk5rNpLgvQwt4NLXWye3UoHkZxU1QrFvgWmRuj2wbK3Df266WtvqWFd9GXJpfrkVJjqnzQvWk6HiFC26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B1T4JhagGcgofqPN2USVZ1YEmvNarZHB7W8kkUvQvstuZsLdoLtwaCb2VNorxwDhRjxQYHEXb25UUaWo83Pb4F1",
  "key1": "2hQWXLMPuNmu2sJkgbrwJRdEA4eDv9Jcs16JeTTyH6c9fUmz645TJEjnXTAsBjLd1vpWKizR5g2XDxWme9wWa7R7",
  "key2": "66i6rVNisGEJfNP2F9quSZVTMTNLN5e2xjBgegGqCHXc2vCSNzXQ6DVJ1HKQbDHVEzMDhQ3QRozGAk3uaB3KYzN1",
  "key3": "3SLDn7Z3KXBhRZCYMacUryHfshezQb7f7NmbMZNHxXvNCzcrn54P6eTEWXmZRDoFznev5UGK5mmjmk1zUm1pn4tQ",
  "key4": "aUBzj86VxoYvnh7d1CZ6k7i3u9Z8rioY14jB8Bo3KnvEZHNgBc8K4syqPYHHTQFMcwc7MwoDErZYp5RArbGAvJq",
  "key5": "2BRjr7UokvnZPNxCEM5n2MZEWkqqDvXmRaidAfg85Vt5E7zKaruserNXAG5qDcMjEZ5zykoUe6x2eH3VvvgjYx8e",
  "key6": "3A1oTFeDgD4KnQpHbsgspqGWRSassGCkWjhVYVRUmJSMcVCBufaR3DUaBdNhgxuweZ9SwFFHQzY4WpYoz7ZTxmQX",
  "key7": "GkZLa3V2HzjcM9FQmWakDMfL7BoFFxuembXf6LiuqefXXR4G7NT5dKYzsoL6VswcFSJRinCvR8R6bnunRC4wG2P",
  "key8": "5gzETPpPGvtYiPcQ15SQ83eAhqq33WVQSf1og9kM9hFJui93qUirKs1GEUJznfwwenFaykPNhayxtyX7WZXdPfBE",
  "key9": "yy4C9V3ECtx6Gkm6doxFJxECoZkw3dXquUNR6Rpb1yvMepAXfqb4myfXzZgR1exL68KKNb46PrqKmH79ksHR7kh",
  "key10": "e7Et96SDvc2Dh9rJ9KENLHMoNw2APP2iy5ApHc8P723jJkpN4y7FWLUuJQaTj3DvnNbjofHRT1TBtoQVoujrKbf",
  "key11": "4LsY9PCCDE6TB882MmEJv6VwEgpA15t4xfutWXWmLwwNNMbncgbCB4J7teXidwh4sRmvAzLoN1Z1PzKLZuEmP9YG",
  "key12": "35AyKjdcxtTCoq6AZgyju7e1osR4aUSJMH3YD76JbC7pbGiHVNm64Ja3aSXKVym2mdFCfpBq8o3YXNwZ1QDitXRQ",
  "key13": "3anYBrwj4YyPzmAefiri3ZzkuXYzFMKFYBQhvqr6gffVqyWtqjdiQYu9c7eg4Wa7chAtf27AfWmz8bgVhrPgdFKA",
  "key14": "66UjXDDopnH6Pcsk1RmQ1Rdq6HXao5XsYM3FyRsbjhmaxhg85zRwAQzf7W1Kehp7zrKtapB4VX7kZNNABc6TqVia",
  "key15": "55aLeo4B6h9jthmAi7ghtPqTUwRpQbqiLZyVrpcnK5HiA8ZoMvSrNoPoGcduy9raaKZ152yMS1cQHxCFcb3oGtQm",
  "key16": "4iPYEhhAyjjbm43pbTRVL9YjuEerqzo8Edmmy44fvtTXT5zZ2698cJFQhK7zevrydvxGSUNbCKdUp6bsDjAd9dgo",
  "key17": "3C6MVN4Sz7dyg6NazTotM6ToreJu3hJuYJ1n2zYNyodTdKcGn7SH87EsuYeaa3jxqesAAMmVGNJUAp3RYMmhWKas",
  "key18": "3UretdxH8gJbPz8fnxAF8vu9cKaprkBJrcnrYNjfrZQB3XNUi2Qj9ZTZdeRYwAHn8BbmmwhPwSFWrTM9VW13BbVX",
  "key19": "5mJW25Cd51pRsy7rVavduZkSDM8rb18gB3Pm3neDpKREXHB3bXTVzzsd4Lw1waKKyzm5tHJgmdbQe5vKRzkpDyRH",
  "key20": "4zBPdrR1j6zGE6SSR8LCP7DLuQXYq6Uzh39sPjC8m1HVv7yevG5kr34xa7dU4cF2zTVEmJp4gBYTLQ2oRySHnMxe",
  "key21": "AH7rCSomq5ox5dkJMiHv7YAVfmjpMuumfSMoBCZbo8SCE4HHxswJwK5LGVpovpCH9enWFzowRbVRTcgY9mgwHqm",
  "key22": "3R5eZun7bD4no64jbvNgbJFXhTsmLt23UuxiN583FNwFMxDwjY5gjiKZ3LUWwKgF9au799xKdcEbJr2TcvUP2kLV",
  "key23": "4VyhJaAyM7PimRSMKvj1Q2aQLwFkycg3CkWdazASapVgZu4jbZQ8nae33p8W7JHTDRq3biwUnBQsxQEFcGse9hSE",
  "key24": "5HMJ2DzSSmUPSyH3exaHutRmhRADwLYp11P2YLYGuGLTywbAumPZiYHUbHNYHkiWQQywQWFMgLWhiKdPuuYv3bnC",
  "key25": "4DByp7cvTZyEtxeDnQL9RdfggftkgCqVzj4mXnwv3wGa9JrNTcibgd996WrDNEchJsLCiYwZ18oF16B9YCaDRaiK",
  "key26": "3emZDiss5PfgtQZv1nPmXT37tqS3kL1YaioHuPGCyJHUiaEjGWW4T3A682M2dPMBsEmL4btRa1SHZeHA4TGCbZqk",
  "key27": "31t8CxPwHJg1PrKjWqZByji1UY5cAGpucbZugFupcvetoF63rwwHGN1DUxG5Yw8yh13oUUdHdYnJq4BteVhhkKJd",
  "key28": "4YVU9Kc1oy82qWfPMhUKQ8AhEJL7dkbWkNuZKsXK2SXz7C8Ba9D5xq4XucGobECEGEj8ZUSppdQ8DxxozLLmUNtg",
  "key29": "4YWrT5zwqXRqnCae3c67i2LVg4xm2UVMRsaxmLzJGKmNXfZFVxT4iHdHDCw1pw2wwPxb3eMcHkUsn7BYuvtb4sUu",
  "key30": "2vkokGuU1ERi3XWiPYn8EqmW3rBhJKuqPgZwFuMVV1mLQjcBwysGLVZbWYxaTxy3EHuKJ1AkToGMkezpjnZPoJwt",
  "key31": "5TXD56khSXxLy69s7DD87Bbpc3LwRyagcHUmUZohRrWgXLQmGhNRbVJZMMLEttNsowDNAq9ELdXxS3xEfruSK35E"
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
