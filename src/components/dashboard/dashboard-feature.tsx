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
    "d2pjJudXV6CHmJmrooKFqV8Kj36zQ379A8uQixXq976CMYF5MfNGr6d47t6p5yAk8Xobd3DwUBZFWZc2fst3Nu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2To8dXCaNfpLSo5yCSgooGzGPCWizD1S8JpF2436kVojwbrZd6zGoutG9QVRfa2TgoZXG7jToVqvSddQY38aZesM",
  "key1": "3xVJaHUQTr38gjR4NHMZozBBNQe15tmJfGud7CMEwzjC5p4GwGwkwJux8tCH9e5YskcT1TQz6DNMtXR6Uj8MWD3P",
  "key2": "1WeFGHdqnZdpr6aAag2iqGu7qdLxaU5jtbh1aLje6ShyuyL4jSKcMLkLp5EBSBqTqRZXZzdyqYzyaHVsVeMhfKp",
  "key3": "3XsG7JpoNXTkmVTx983BJWs2acjN2Ruv9xEkcqDGwVEmwvHc9HVeKmpUXhux9hBChb1Yiso5X2vbKKNQggiP6bCR",
  "key4": "4XDR1wD73tyyp8BxdkFKWACAJf8WXNwGdjUXkhTunQxouqe9Vft96GJ9txf1f91yW9ZiszeGKc166umvzTUaKUnL",
  "key5": "37Cq9x3jspeVeg1QbS7SXi9DcQ1CBD5BZ1BkfCrvMegvLnaBHsFx4BbZrgW41efhV54caF5sk5qJ16PvzaDygqjo",
  "key6": "5y8PniBicX8sy32RkdEGpBh4xM2ANw4fbZxgRigb3YcEEUuKefytYetAHuyZYNJb4cSJtcwmMR1ohgZn8vMvbHU4",
  "key7": "4xVgZDwZa4v8F4WezFiwuhTcowztSZ8b31pi7d28L5AUpH7nj68gJWs2AfQy1widsgYkHjoLGnwgTebgWyqpjxNP",
  "key8": "2fsbsnRc8J9YJzkqyH55aE7HibDrPKHgxiT1pdz6zNMAEWgwZsr1mUwwCL7rjhqQyfEptnBBKhU31TqSe4V22rXc",
  "key9": "5Abf8xMtcrxWAPxoEqEZNeY63WBmYW24zUi1apkV6B91NfJ2JzLdKT9ya5DQpRo1YHH4QwQC4smNvkLqv2zBGdiS",
  "key10": "UsB96wn4fvC8D5NLCsp3YDKQUoJaTDCkEVaLd1VqXharvafHe1FZSocGiQyZjSBj255H8w6Y87hhAAXG673AJF9",
  "key11": "aUuQyqeypaMksTk8HBXdFF7VNxoumqbZd7THz69uRrqeeMPGKSofcFMrVcSja1LRm5K7gR1ZDCVZip8y8QGh3xV",
  "key12": "4D1zTrGbkTjpNyTijKCxV737LCGNRa9GnauhMRviNhvqpGhRxeWw9cBKu1i42ZpjBVYHPRA8qgMR2vP7bon8cGHa",
  "key13": "4H9z995nYsCTbh73eHdNPVTea7kRi3qQTwXw3BxX11tXp9xqrUMt3GgkQ3XdmQCBx3VQ6d9uevnp5bftShE6Tkp8",
  "key14": "2twK7uB2ZyMrfV1wGc8ngUfUkNaVeR48LDpDVaD3eSkRM51c5fDR2c1ieV4siCDxaLtDBr8tFBuKsBr2D5yPo5Wi",
  "key15": "3vxCcW8Z9zAvoYJH9mVUz1R86VpnBnbZ4n8kGE5pnWKe2M8vikWNsbVeSDdezK3RucvpTW7AmhQ3KCE9uW3yMcqV",
  "key16": "FC2hYHa11EM9AiZ7jPrqSEbAZWNL4cD2oZT74jgqFaPPEPPBqHubt9LVHrtbqz9oZHvFKucX9wYX79dYMAS6hVi",
  "key17": "58xYSfG5n718HNYsFFAxt95Rrt9VoXhwu2sMRXwXMhgdM9JkfuE8VCECSLfVTvNxma8J2xRq57vADvpTCDr5D917",
  "key18": "396uJsTtUsJEiVTn9QAcZ2NFckBz5yx1tzsa7tqQyEYJJJYKZ9MidZevdK5TYoZaXQ933AVVRtnemRdLsYAan5Et",
  "key19": "5WkQUAGJvaQCm5e1ZzQ4AWmSLxaS2tYfCVkbUogPXphkhJ1Vqpyh4omZoTjb9z6ec7MFkaPgCnBEj7jWpbWC9hQZ",
  "key20": "5DYwoQBAPUUrinhMJYwhq57jfKNZbzVVq3m8mD7LeRHbQzbBighbDXnLurPZvw4WQVfcUi11a6o8LtzZQAzXGr7H",
  "key21": "3TJjo1rMCz4K6peSEH99aUsdigKG9BnmRmcKrLKeuyjcH55B2NjEAviVQxYW2puSArEj6h4VNYM9ipEJLhZcEB5n",
  "key22": "3TkrW2GhSEJvqhkPXrdTp4e1zif69SwwLa9Sige5m8VUvMFrtjRUJVayzKwq7HVzenPpDPzuGw2ELRwQqJcqkjmi",
  "key23": "2B7akg3TcGkXJeXWCjUj13qyqeNbhWmAXknvU5HRXyS4NCUpE3MfQh1ePHtwSjrnRJieBNcj2TCwv8vZy4neURRH",
  "key24": "cSGEkEjpLnuGaejfAh4dEJUXgZxX297W3Dv55XWpogiW8kdsrCUpqRjXpZV1oJXxnGUdjTRySVkDLXBhFUvWLwx",
  "key25": "2RN4B2aHsNkxn4TUjqAQcEkGhzuFxJ4Cc3QbE51QzswhKnUpfkyMGemQjABTR2LNBU1AFybf9UQUwMT8wVHAKAgx",
  "key26": "2VQWS7JBujQ5TkdrX3cXnBRYGykWS3CcwuDBrzVahiQmYvEfnGt618wfrND7Tt6XT2KuuS6M43hPVgk6NDv7J7ZT",
  "key27": "31eSSyWScBmQNAPMaQdkJkpLiX4gMBeJGAUr4qVaf8wXhEjFFfD888jNhgnd5vxx3vUHbNFMVH3UqCWPcKYq7pJa"
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
