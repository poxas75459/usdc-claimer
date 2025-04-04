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
    "2uvoRoXUgsSjE78C728nakDriwDY7hrKHhaSRC7gzH7FZ1e949MDvRnxqTZZsVNeGercN7kduPZScnqFdgv2okDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XKecFGHNDAgPF94qmaxLAfXz54V6YpgNSMbpz1boPpmgtSLduzNHyaBSXRVjF46o9SwZAZ6JKqQdowhKors1Eh4",
  "key1": "5onzewVLYypSxjctLWyFP6KHgM53nPZCzaUNd625j5yc2gDeHF5qcC5TB2s5zdf1tRKJc9Rjk9cpaofcxH8TAheY",
  "key2": "V59JMJaYD1L5R31E8Zd7CcHVVNosfwdbWUC7PXskRYVsKtY3vXNJtb8pLARbJfYRMmAVEYLSYEWVbp94RKqMzGg",
  "key3": "ftqaskpjnRA32FZ5ou9FEzYeMNfXDUViY3CZy2NdYpK2pHR3hm5Ry5WweDLmrY81GH8nMjskhcqbtUN3aXrgSG5",
  "key4": "3mdUW4uCiqtSDe4SuKg8XykN5PmgXCUDYkAfQhjQR1ZaXv9Y1PJy4cy8VTBkW74At7VKFjRoQkNdjbAKMT8X1qrR",
  "key5": "2Fn8Rg2DrrxH2DYVZgjB9Bypcr3QN7og8GdkB6cRVZrpiheAjbPgvwhK3BCTDz4LUkVbc91DB5rNWjVavYdwEYx6",
  "key6": "4WquBTgqxXCHCGZgSmfKwfNUVDbCA2aScnmY8Gn6AXt1EbmVKMNXau7boN2aDMiXaqHTrU1CB4Pe9PEyD8A3Wo69",
  "key7": "3HN3ehHpFuuGW7DY8QgrTMHCysf2kwqdMTzA4gK2PMRuH9UNJFfWPYsxBpG7FqbZqPrkvYming2qVrZwz8eEbQoD",
  "key8": "63ymG1rjA7U922J6XFjmxG9ehJJiF6QKMZLDZpQxdxtzAG2a8yVLz4SoL6qMyZFu1oxNEoENPkeaZ11q13k7viaj",
  "key9": "3ZVoLkGV6NwdMw1BokTTuoVcNB5pUEJvkCnAHYmwUZ4LCkfLQZRUu3Sx4ehrCp9TE2She1PtiA1EhA1F5cHg7EV5",
  "key10": "2oq6pQ7xXzjbRFb1jqxXG8U8UNkN3Jnnq3M2jyYTvLaNKZoaPtJyQmAAdUjbZpsyf2SyWPTN9U6HADarvVzeozbe",
  "key11": "3uAeg5TXLJTLfztS2ZkeGRHvWsa6Xx5tRZXhRg1hRX9vFmNoZ2XpTqXoNPEHNU8gA1ryqx1EsRnhDBm4fDsofLnE",
  "key12": "3Z6Vh6FpxPxQeou9ENBMZSGr62rMVQF53uEN279f4eFZ4DndL1VAJkiYepZnnTfMYN35zEPL5qqT8mbEUDmdH71o",
  "key13": "GXtvJasADmHoxK4HYsBxwAVjAJZkbt2viQhLm48xT7sr2rS3yMCnkoHANoqfzpqxWWYvYDsUWAd7buoVj5VDu21",
  "key14": "4EqZrseyLvdy7SyEqybtX7JvzbKuHs7DP1mUyG23LUC24Nf5TyeyiLSgBsmr4CDJSeKkPdrUSq52kti3GFGVFN2y",
  "key15": "2KVHev57BCuxrzvJX4JzE9S2yu29h3ig68ddJPwfrJh9NxXHj8uzCPSSDWwssF4v5rz2Mh9CegLhHSLyg9wBEazT",
  "key16": "5rNBadUXv97sTze5UAB8yFZaZg1DBjrYReJTVfpWDivFx4FS7qxRKL2ynk29caej7qBm4BVYwCGFZiDtNEwLPmCc",
  "key17": "26Yrzpwm1Ks2T3vi83PWHoWpPhKzut2ad9mdT7zp8x8V8RpJLeA6cVjAjTjNtuhXjRgrRvUqwrGEtJ3x2G8DSVhy",
  "key18": "26AJY8yQhDJx5eJfQBFkWdMuAND48LoixqSHGWihEZxZ4dogVcUSFz85LBqBYEU5hztHqsyEYQwaWUkFDxMSuwJw",
  "key19": "3jUP4gwa8KexmGTe95abioKkntopV52sfvvAT78ajtr2bTpbf236FSGKuWmK8th7E7RAjFpCxnJM2Jt1m6Nn2hff",
  "key20": "47B6TKkQwnjptsNfLVuXyRxtXStLmPhAr2GF2CeLhhBqPXcMjBuS1J6m41AEPWVUKtF6eQhYH78iWrUP2jyGyFnv",
  "key21": "2f4evXVXRYCGm6fCWLt85HJGYhJbrVXx6x42zjWN1LZrfoJJyjmWa7dFLXWV5DAosEAL5K1Qxiz19cxcgGAJTL9W",
  "key22": "vUfFN9p2cGcK9tUsmcNiKB4QbtLctfXZcRoF8Xb5uQD8aL8vVuP6qKJXCa3DmvKqFQzy4H2oYKR9QXeKdViFEAN",
  "key23": "3VepWpGU7qSShXAyuwRqgigRgGsZGFdUQ6BhkcjmRtavNNKPJKy7WXQgutfF2TkfCGuDuwtNt4smPQaVSrmsPVNa",
  "key24": "54ki96gBNL1Mph1St8WUw5zzot8zcr3P8zq4EWqiYSU8cikRC8hWbSGq8A3L91mjmsfJeXFeMfSHAa7nqy9iYiD3",
  "key25": "2pHMgPqSaxykxB1j2Y1Q7Udr2H9aBLcNhLegkrJG7RThqJDPTwftTxUGFD7emcPVPgKdiZPK5Ur8yqQeYpPa672g",
  "key26": "3p5rRh9XzLuA1ztopNSnS3qCpnbb8MEqCbXH8qJZc2FZYs5MDq3eiuP36Mp8tEa1n4cj7apgB2LJwejAMu8VjMoy"
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
