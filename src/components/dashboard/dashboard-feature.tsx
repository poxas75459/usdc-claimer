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
    "36EYcd5W1Fg5LENKWv5V1QmUjsNjaerqBqPKu42RCQM4YLZ9FbKk9UrqmS2NV4VDVGi1hQhoBH5Y5P2M8pQeb9gh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9M1D2RrRB5gnSvGWk6W3ygU8ekP4wF9imBTxdTPZX16h6ChmtgKZgFFgwg1bUojgS8PYmdygWQBj5cEPkP8TfCS",
  "key1": "3Nts8GWCFnocasUC27e7oKBqKojSxScwGHnqbUYGmkss52AZ5ZaXg62n5Y8P7iSjDcoUAU3gZcd1bwKPSeoPJyRb",
  "key2": "2obzqJK8UyMphRtnTe59ya9sFgF3taZQ3xx7581Mjfxd8XQFaPu6mM4S4eeG4eoAFbrMbmADLbuP8hXW6AtFJ5SR",
  "key3": "5wWFBfuapUEnCAmEoZmBYczZqDKRYengP3AuVFxCXFvuPpzeAwAYKuKZ36Qb5GtzjSb7p1ekKw1HquXWuYZDU5gK",
  "key4": "5N5ibXrJim4LWDMRR6feM2tFdgk4dT2vUxgJz6PaAhAQ3DT9QwyP8Sd7hBCWGvM3eyzdVw5bKaNGUCiuoXmZtDMm",
  "key5": "AryRKcaTHr95P5eKuhGwTnEWaKqWMcr7fSmUiALqCSXMbEqvMtgkXacJSdu9LtDaF8ezBZLhAiBmJ2d1iWaZCoV",
  "key6": "Q24XtMNtFTEAc4xZaD4bF4EPNCGAhf4PPcx5QvfWhvLUd5uPBDZ4MHn2hCq1CMZbijzrsWZXtDYacYZJdGJqT4y",
  "key7": "4kgZ1tkPnxbhiB5VA6RnsLgkpHRU1wpKCqXP5Jxacg6CQYQwb4duw6crNjHdoLmk9Grn7mN4CZZsWSvfprnLy3hT",
  "key8": "5Qe6WQKduUoAn6EBqHdsAHkDaAQsrmp7TM8wTzBX9estXXpdnfP4RoBCFWiUyCWnQpnYAxekqhMLwGdiistxz7Tw",
  "key9": "3mBsmfTv1qGCCDwwuuksHN5HxzmJj57T5njU8eMXhBUxWyirLfD9dxeq2Qc2uHTbmUemyaBJLmj53Hhk73pPjzA8",
  "key10": "3g8ZkckqJr4ruMhPaNYSxEzm8RQ6w2xuo7JmAfgNMmdArGXpkbrcc8yEvRTqmU6SGqCduqRZrECxh3fHghJVx3Kf",
  "key11": "2cAZCAuGoRi5Ki8MZo6XpyGVfPkhyHDSHp2AuTzo1n4Mh4qwf18nsmt9kaxVtH3rqqyD8FiZkpeJhG2idSMu55d9",
  "key12": "4zj6N394goAn3Kc1AQ8pdrBKKby3g4aEYVLtxLbynZmJJj9jKmvkPpsqmuzg6cbFA5AfFtToHBAfcPe8DM3LGeCw",
  "key13": "eXrcdk249WUMwZ4pPBxDbSAFpByqMcSS4E9b5p67M4KoY9bDnimXsJWsb2rQvJfWQw65yFsEa8QKfsUDSBEanBH",
  "key14": "3cVLc6C5XRbQumN7wneAmqrXRbwJF8UxBpDXXFeEWwifFphKoa5NNgbxjnL1VtzaAZrLqpcTEF6N2Ffd44LGxoRS",
  "key15": "27L6VD9wjPnfL7XdXjnX677FbmTdxErwgjEvc7S8KNvr3e8K31yWtckRgWZWbZsKFF3BFpsoWyD56tTBUxxkvpdo",
  "key16": "5MX5Ds4HB9Bhru579m5Q5rQNTzYqoJsq2hFT6E2ji3no2xo9txgrPH8FggiznULsc2QE6ApougdUMRbc4FVwRzcy",
  "key17": "37S6jfHggDe2G56Bck7guccdcCUbxnnM4wfTeWPfpVXjAW73nWfbrP7PZM4xNM4BWpiuNQHzbCwtyxqJx8dYd7Cj",
  "key18": "5B858yKY2kvDqeDX1BEbt6qtHdDrRzCK2DnUJXtvKwZECzxStk1V5qX7VTUbLmEtgUkeadPScbcXENh2Ek6gwddP",
  "key19": "4JuBoFSCXxD3HruMittDbxx1vJPXhihy4WBnmSiGDLG42e74JinCb1RTtXYPaRX1q95vk3T4sywPustettjcdzY9",
  "key20": "26u7FaLG9n3ukQ9Gxu1BR12pDGNHFugQTPtEAr6cZPXi7AZ89h2A5hhCaKXwbwvLtYFNevVq7GjXEN63YskgA48E",
  "key21": "5Vo73MAoTzpqtuSekeHwZLSLUsTBMTyjvpymruJbQoM3nrzBpS4V1Y5zxeoowrya1FWu3zkmdvqXFRQ1dEnaAZnu",
  "key22": "3ZVGuysn5XVUw5W1sgDPcigoxLRDUhPUD6RXC4K7WkYcHeyNFhM1ZUiAkcXKurijVzACGbWhL75mgTPGtFG3Vvbf",
  "key23": "24A2KEP6VpwTtibfmPZP3wcNbEe1cR456Qv8pgHhrS5HRvxUwoEEbyRZR2qXoayABZCoQBa36W8bAQ8GyjdEZ6hC",
  "key24": "3zyJPLQp965BAV6j6nmmmQVnJ94iYJdJFMD9Wzv3Laetm4MNAN6RjWS1d5JgqetRrBaxAJK3Kwkq1tvdhSDfG9oH",
  "key25": "4h2wFxny1kR1HAgqca57N6aW5tWH3T9umnXmihSAM1FHqqrg12pddQqXmqf2BrxbFwh9qqamCnhgLAJ6kB6v3otC",
  "key26": "4s3EDDvEWrGVyk2JpJbn2QqCnYEXbEcECeYibYgfnEqGKAJtZD9bXq3p9GbZwd9NubZRXmy8XMzw8PGVXKoHqa7a",
  "key27": "3PD5FkexprQy6dGDPtQyZK7Z6YtWSXuJt9WNbhZ7gwgMGRzK9EQxfExYb2Ef1Zdv5KmSpJQnvnxM6VGmR49aDCFd",
  "key28": "659ANZJ1nDUrRjpmNdqgLHd5NaM7gJSPYP69Atg56NrzUGK4ruBYbZHrvbKvXPbo6KW53nLqtECYByrbi4Z4pWEu"
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
