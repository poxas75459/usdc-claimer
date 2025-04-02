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
    "3JeYKu8oUPWgJ2DEtYEPJqrryxVWydzsHavCgqmGHiuSqoqF9fmJFWC1fhs9tWiSEPDUmCwW5vTqtMMspNfpyyDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4odzpbhvfx1ZefuuwEbbpp7wi8Xur7k1qyPmPtwmz3CJScDEu8MGyoM8qU7Bc8uLyMV9UuDFSrt8r2cy47WoVksX",
  "key1": "2kv6pExchVTswPB7nRdZuQhbyow3jDS9EtXS8vVqhsXRGEof9v5iDGLmzswKSAVzVHaJ8VTay52HBAzVfSwNeKHs",
  "key2": "FXGReqqR69F7P7rRJ8mjDgb4PrFxAFeNn7f32NpnXrc4qPAkTgsp9tAzpYgH5RaPhQXmEGxqnBi2rKn9aQLW8wA",
  "key3": "41iEsWbrWQWrV2gCxVKmXrycxnjwB39XxfAV4Vnnkrj9Y7A4jrXjKgb1NVEn9S7DxXWU21g64FcpEMF2ofDtFqab",
  "key4": "mwiJFMozQVomRF2uCnqscyW5Mqy9S13xW6CW4LxHTCTCFWxonpCPsVETvV5D2HqU1ALZvkuLQpDwsRVWh4973rT",
  "key5": "4mQjYK3HbYYt6iQzdUSCGp8yhiJKgHGsiLcPExzDGbk4PWbxEzEss3tz3QhydYzyMaEgseXw31ohKGt5b2inmy7Z",
  "key6": "4dGQQZ33VbCzfJ2jVCZ1eJ92jrXqfvBpEn5JVxLRXEK57j5Z6GmEjbFXqwYVfs1WKpnBQkgsVZ1xUf4Gb7idg56Y",
  "key7": "5AvsDYoBDevzppYkXqajVfimJNbE348CHSVJhJRtp2Rybor8sT3btfVTdruDPx2gPr2tqLFMzEPgn7Vs68UkSLbA",
  "key8": "63qF6MnA9hoyXmDZ16iKE6EkigQrWfVZPeDxzbxK32aVsy9dyi92wNaxS6ZnCyyGvjJvqZGgc6HZc9FyNskPP4qf",
  "key9": "3Nbc54Nxue5wbKHf2cS5kKFQ67184k9ZjGVtTvSPjSj4aLXYXGj11V8SpkR2NWM13uQt7QEMZPYbo1xeuMBykqgE",
  "key10": "4ZNBv4ZsdF5YkNQoEoBs4TD2zmeViYnVFCugLNsaAFb1t5XcNJkCPcgHu42mStQbaLK24aogt8t4RuzmcoevWWR4",
  "key11": "AZkcZfLF9ReLGGczPaNHn93noeN7FG5reEhv1H2zkg3Yu6NU69m8ZnaSGDBRvJAKV67LVH5vGdBYmwoxna4gbKq",
  "key12": "xoT93BgAPinSyP7hJc9LK7ZHed2SZ8KG6VyPFypQizm9BywjyvnkDaZxtqeDoknQkmpD3zX2ryL2ZgXrVPytZSD",
  "key13": "2o5KF336TPdaC7cyaFNCZvCoqSkDTa8RLCjBsavjkaWMByp5ULQAAjpEWwg8GbKhFTiRBPb3cTtDuXnUegaT8Bmz",
  "key14": "4k4YWSWNYj1gykGZRnRf1M6VADRVaLb3at2mneraPy7D7VAJbZtWE5K2ASppSqmaW3Pjg6TW5RPx5DJ2MfW95msw",
  "key15": "5QMSJJHgK43pVSeT6d5nHj1KArBbpGn4J8HkQquY7EyKPkZU44emsJsZeBE3nK9rNomgKiv1WGdAUWoLxRA16Kxo",
  "key16": "67WLm9BineCeq8UKwqABqV84ioAorC7SwHwzF8UvRnrQWuuKegETwdJ5xMMYSGaKCmNMov3CSurnwVjuHj1yiHYW",
  "key17": "4KX2Pdtnky6aWJJyznaqACgUJNx8zV1Ke8SQDR3UvUQQ9jiP6iLjXgWizV41ACfrXCBE1R2d6jhbDQ9uUMfzMkto",
  "key18": "P3ZdSxeL51bUgDWYP7Cj6tsdVJbX4nZk1juwkgogWGg8GNxCDfDYEMQrPEvVdincvH7fiF16SHmDRFPX4wHiYiF",
  "key19": "2Ga3aKBKzGT47RzJ2RWHktQEjp316QXjyRLKkPMZPweinJcUmnBn15vCeCaq7cbAVU5fTV8JXCKjBBGUZWBy3juk",
  "key20": "4E5npTPpC9iaPYAkB5rMmLYYb3GraFyQ8i7DKeZCjKUM6t6iUycsKtUFaN9zRgHwLUroBdJRQpSe7Lthx2oSEPhr",
  "key21": "3SQZcQU2DRWuGmKX7fCjLHmPQFPcVk8JTKRwShte6iv1goC5kyC3XHLfgKA1YBzBfTGFQbYbM4bmk7XDxDkK4SKT",
  "key22": "44LdH8MYWBUwbRWj7WGSAseLdnVKg3fBR7J5JazpM9rzjSdEi1ojUAyH9ofUB1z1dWKfCSMHgJqreej3o5VqYd8z",
  "key23": "24Y2wSb7aFNeK5tytxVKRdB4UjVNT8pPrubsuQYoTaH41EoETdYW1TSMkRMLEu3NY4su9By6x4rMnZqvY2BStA1X",
  "key24": "i2yudPMX671o1fxXjk7JEty8UKpVx8GfS4AJcP4FZhUZ49JiUXCUJw9sm52wmci4phhLNrN29ednVXdRQL9UhC5",
  "key25": "39ztWypbdShXPFwpGzi4SJL3h2E1A8LzM9EdMzqmkHMymWf8tmcmoyqDZP6NarHFfJNKaj2AGH3Ui162zsifPwGh",
  "key26": "5odK6JepcjrNPev4n59NkanHyESgyU7rb5k88Crb3RTgRbDaqPNHtpm7MZ8M33NvMEHqD5uLHxZ6XWgGkNKmTZms",
  "key27": "5YFFH7dkptKm6Xk7YmPbooaCC9DGCno8h81Gckipee9PLV558WmobfovivackX1PpCxAKTYpsAKR5UsPDkWvtx3"
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
