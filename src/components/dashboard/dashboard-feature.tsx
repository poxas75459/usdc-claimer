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
    "4cRBAEZ9c8dZxaAbKDXXK7zD9onRJC8HTy4CZ1gtWCiVzhbTS9jCkY4TtoD6uw6kX8S9DUG4f8sc4WjkFhBRJEJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UvmeNq4Cws3efxprDQHQvxyKWTfNEo9yfJH21qh4jRhmUxsqxXNuZLeWdQkBZU6Xc3aPVKcgbptJNZX7SUwh1mf",
  "key1": "3bYgsM91VJLR7E6htEkm1Aojxpu3HyTWoUrUDvDNPBXq2Zz29C9DX5KoYjerXNfKSaz9fVi5A4Ff1aSGiA5yRe5y",
  "key2": "2rW25c77jPvBfM9BUfQD4AWX29h1FZvRbXdFeHBZTXjP6HWJgCWCkxrfDZuysd6fRAS4N6hm4DmJfGS9xSzg9jCA",
  "key3": "4b8kG5Z6C726D4mQvDJRVmy1b2b5Cwi3SPwfK1x1JxKdQF3mcwtffbQk2DHtNmJkmvVZLBGnpXdRoCS27ix4tZ6Q",
  "key4": "4XUHvhqD18sE94Xot8USdPkYyR6zFDHLm4ZGvLoJALfHkWuS73JGgLxFosvAxq95QaTYEAj6LBkuN9PL64nbH5Gn",
  "key5": "4CxiTtB1Q8tVks4vuYrPAGwn3sddkYsWzEmy6W3WzcZh2bJuHSMoj3z9zw494amusLtvRkQrndSJUkCraS4X5wir",
  "key6": "2HSN4woWA8YSA5L9hfKuZVK1z8eW9LUhocUu4eSRpEXGtepoxHsBpgcxVxBKJmQaDdL4JMi8ykdjui6J9JH4fcZ7",
  "key7": "2BUSDYNWmr2qvn8eAtbR9iDnhj2syHugsZT7UUSnxvX9GQgH3kViFkj3eKrTQM4v3JLvm7kdzhEB8stKCpNggV3K",
  "key8": "3KAr9w6EDDkdBkY3TNY6R8yP4xm7urXMmy31CYtLF82yCoLvSsnQRkk14w2RBqFAuf9UeChgn6FN4nBvA7bBBnGD",
  "key9": "3GyD4rDqNeBMYVH55Y2QW6Uz4BZRwfNX5fsuGCuVCTG7HwrHujTSkRJVnDL36RhY1BLDqtGhzqBtXQKvU5bhwdpq",
  "key10": "2RNY5UzPtfGyWyhqgqoFFrTDdAp5Xxv4SeMqbHPPS8GpXS8vd1vvvFaZPPNwkGfTzjJvQ7UFQQNdY7M9K53218Gp",
  "key11": "2jBHY9mtVFBh2wKVjb9WToMSMspoCdCFH5dHaVtQRYxmzxvVerwA2mwnyDxHLWC24U6GQmfQ9n3wtYX6VyXqy6H9",
  "key12": "2VRt3nDXSEduZzmFUjv6rxXfPfxebx11cLsZfuLwqBLnLixdQKwSQYFrFCCa2LPZGzfuzZfEhaxy4WLTVAABrtMD",
  "key13": "2nyQcScJTXqFXWL5228oUgcdfHFiXBDMSySebn1jkp1bSANoggzV1QBL7NigmyMBYfd9bzGuA6ZEj8hnsMDdqc56",
  "key14": "3i4jHQPRki6rv7dMfWm66MKXv9bHutZW6zajk9sM4Dq83UoPqA6amzheAoDvBehohCtGYq6KwhsMWf8eEVDrBBS1",
  "key15": "5Z1PZyxXdu4RyFv15UNuBijaisufBcP82H3taHCwENqyC2JBTXviZWxMGTu5bMvdWE8UbxLDv4YrVxjc98mYNNgP",
  "key16": "4Q55haM4K5yWpn8vD3D5hKZWyExof6EaZ1v1UvbaGPzxaLa52gfh4u2fFM8PeGon8C3ZP9v56vxQ4wyKAHKbgpmt",
  "key17": "3cNRr6hMcEJFLzafY3tBn7SBFvgTrtkgUyYgzQ6o7PVWvB8YR42cAFKExjHQxjFxJvRYQBChiPduWsyn2766BADg",
  "key18": "2y2CKgevHz1eWhASoU7DgRkw5deMpM4wvY2QX1N62xMmnD7RHyK4dMH9W1jXvMFPh9RQQURJDxkHYdN4vwvsjFid",
  "key19": "nr1DUn3tv6yiEqMi88LHziPTvrSy5R3EsgpztwqhM9SfN656yWRFhSfLP7k8VyoEmKAmRGSWTbK5DaANoib8oB1",
  "key20": "4ZYJhVBRg1ovEXkGv1d7eQd3ByodTkb8UAuCAwokiCEn8naGDQUvtoxPuKpFa1AB3uCZbwDjXVkQGqFBHAxadL8M",
  "key21": "2gGCHor6MPPZbbrva2mehAvTMN2i5wTF2s83uLHhH65WtA9tggwtpf7o2KFrXWBsvp7eVxpsyxXtEzaCwfWk65E6",
  "key22": "39tsbcsx7K83FxaWhsQRxY575B1P9ukxVtRZvKBoY75Wq7rce3wphcCLrMHRffHPnaCw3nF1VmQYPsoriyaQRXd3",
  "key23": "5FtEqcncfnyLHfVqyrJf7G33ZSXL3EZTC5kGbNUJzYpJWSuB3b4oNzyw1W2qGTqt5vP8AUxb6qmrySP3u8NJjExB",
  "key24": "5SBSLQChC7o4u65U7CkY37cbd1QGAX67Gz1VBqnvASMFHjgeDuzx2atRarr6dSsFouSQkx28cYEGVYpDYDAaNRTr",
  "key25": "5Bmd1YxrQ1SWPzZRiPkV5SPwVQouNsdkqLrhHawzX8qZZ5BRBESyZAn1CXtzxHdwSq5yZZZPcAaF7sPrMXGQCuXV",
  "key26": "3Yfjqca8SYuhZz5CaVyaK1iJgZGZd946bqmhAYpaZELAtW3oSx5RU9tFNgrbFtp3xyPwxbN2vV2SPEthJAYX5oE6",
  "key27": "57hQniDXfjFnd6DfQw4c1vFQYHoXX9n9aLxwifeAgnVQu68D2hAUCNV6zyCo8xsqDeqjqr9fAr1MnXBSP8fB99T6",
  "key28": "5925CFu2giJAWWLYKCnoBZwAdVfdoQzK3PbAP4c4kMM2qvBjiBVwwgvuyMd85yN8RMf51VJ79cZwL2b3yf7z1TV3",
  "key29": "596Vqt5GXkWKy9K9bZRUeazbi34dizARqBJm7VtA18KPprUEEnLLvBphsaapFarosRSURCWjhB73CcdydLN7ntLw",
  "key30": "2ktq1NYEt4xhEUyYNwCdg8Q6uFLH4NY8viFZJfF75Uvj7v876UyWLTUdidBajybL6KjGwvGzFqP3ULvPQwZNh5xp",
  "key31": "3puYYcNkUweG1AuWom3KUdDvo7FgJ1YUv7gQzd9pgu1U8zv5Rv1SD1vWkuW2mfaaRnVFNC48mQwirYnWEFeemtYb"
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
