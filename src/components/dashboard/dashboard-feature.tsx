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
    "2tVhK1wtvs9hBXDzUHVMjM3PWAo1TT99rXfWgEeteafoonf4bVGrJuQjVHcxwhtne7QExWwbjijPFRPqHq8nUcbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L5AhL3fk7Jntz3TBmeg6HVawfMFGFJfZahbsjZSkNumr4SFBh4ujFa3m4bfQp8xecMk47UQHzRhxY7mRZ3QTsUw",
  "key1": "3pjufmEaFL1XBpe9LsKg7cLXxPXWYCDoFe81kxNZtRuXHTq2cYy2SQqTJpV9TXQ39Jj8Ra1HChHst2484KMahAZG",
  "key2": "3ebwDSiHQMjFSmSgTucC1zjQHkCAEF9tVL8PqV13vD6kZRLBJPesLGAzhT8fJWKf9nWaDLJJqtohAvzLiLvynp4C",
  "key3": "2NY3YkJuejLTzYsV8dnjPN6WAL9u8otowdmqDAemLMsfd21vwSZA6UHs55XKqrzhjUYdLaLByDbsLVughjmitztM",
  "key4": "2We7fmJPYcF5CB9qPMhDwf3JxZfsyx7gzeaVtWuNrDEcN4hbEVC5Za52WAkzDziRrJfTtqZnMKEEoZK8kgsYRzUa",
  "key5": "5f68a2ah6UeJmsg49S6NMMN2TPA7jdjEsX5gHtTkMBbL6xnjTuA4w7baC1b3VEtGazjrYpNjg6Nx1H8vZH5bTEqM",
  "key6": "2XbnQ4ma2MCGTkmJJMiEghKkLAFXWM3Zec13woRT7kmcExsf46KV9WbzqsUgbP8rzUmFfo5roT9sLPZM85JYew5X",
  "key7": "5xJnrZMDNe3FpqNm29MdM7Kx4vMGGv9jtHULX4kG4miXT2HHM5nZLVMiR8DwP22RzMqpfS4xzssBzkdpSvzChCbA",
  "key8": "2ScmZZtxzmx1s8tmxYXSwnGRi2NK2uoMUvWpk1VuSY7cHLzZDJgsFqgh2ZcNZrQEohMBovzN8zaJ5L7hTDhoCD8D",
  "key9": "5tx36ZJpSUbTUCbGZ9H8GdUpS6bNPoXD23QMhBUkeR5hvr5A11hsjYmhxVmXy62vnR1gcbLACdK15inUSnXEpczA",
  "key10": "3PhdgpLjEffQ8WfWCydnkDVuk3VkVqToQX77jsGQNDy8R2sygSTKXxGzyJ3pCiuZSMckt9smT6yXUt1Qr4PAaxoc",
  "key11": "LYFDft3rmX8pmdoyZpG9x1jbDDscCYwXoHhUG7fgr32cbkaCocDjstvRmr3BVbqfpS6EMkQ7oc75J46UGioXdgN",
  "key12": "vrgRKHtTzhwxUhbq5pvgYQg3HQUfNdpQM2Ls9E6sUF7S6xpWPXzQ2hkYNjgP8wdBmHNQSdbYxBhGKC6AM1b4GGb",
  "key13": "4ABecsEjUaZUyqWCcjpbLUJXgCnhRwJFxYyHXad725jywxo4f7nLEqN9SY2FaYq4CD7GbU2B8D5J3k8j1tPYLq49",
  "key14": "bK1J5Lu8AByz5UTMc4EH9jjKfBeTkrgbtsG5xKLpJjGxccVhVZj96c5fFd7ps95Pep5Q7YZoaEqv49Bs4Eq1qsn",
  "key15": "3RLzFSgmpmcspdJZ378Fr3rdExMnfarHWPLFhrcne6S8sju5Prx1Jeq8HR3FirACqT4z6TcD5ium4XEKmHEPJwoG",
  "key16": "5gsw6n1MstkcLK3vU9tp2KeTWxDUZTqnHiesuEa7qJNax8c9KHcgDshryxBPGqPQdPbgnhd96uQgPDTtJAE6TSGJ",
  "key17": "2n9WGURxKTQFT7e64qgRtE9ggjCFmVfZCHPAY5KLdoZ3kKnHhKX138fbWiEg3nXW2wUPdJ4hNbv38ZHk1bwjFJDH",
  "key18": "5avUXKCi9F7NJ7yd6LsJsoJameEbrAg9wb9fv1VveJeZh9iRuBkkHzWWyqqFfYCtFNVueWiLDwe8k4kRqTAerbJ9",
  "key19": "5M2XwZhW6KGhK9ghXf6oSNhWHRw98qoagtGu83yg4wzmoTWtxXt4VhAbsoedkYcM7LN7EW8KgKmrDTUsNZ6n8S1t",
  "key20": "3wMaYi3pbgdx5xjkuziTvXCdRbhSD3p9Ds14GnBhbNVwL4x2N63RLyuidfigMpu838oQMgqbNHHgGQ5zvs2kgXw5",
  "key21": "4hvF6wcbMvZeeRmjSrefiKMfm1KyFGdxaWNYVn62m3tifgTYHodAMYVnxYvF7uwKcGUcv1syYhvTzKvb9BrZsYuH",
  "key22": "3Lq2Pu2Y63ZiJcTD7P7tFMQEFRy5zWoD8cxXZzPop7sZFcV3s1sYfbqxBe6rp3otfQ49CH1dMygLofmxcMZKsRy",
  "key23": "38d2n2at8m17x75jGBjSGD9X31DBrhr2tb2TS6Zb4dXPPSnjH8Xtiz9SPWfeYGq2Fkhto4MKVybtru79Sg9U6aYZ",
  "key24": "5RKRrpCJDpt7vMaDK54V1Pf68fLwneYzLrmiE1u72QtPFjbZqmHBD3GdWCY8NCEJAPDtEGhzXAYNLE2Y8c4PyarN",
  "key25": "3aoX7snNmbQ1CcJjJ3hqZCAJU3NeGdieAb2jUpMCWHWiAQhgtzwESbfsafDWqQg9Apcvqcb69nzD6c5dFcLVdN2z",
  "key26": "wbpxdZMoTy5cfDTjWmCtRDXiLqwSHkhgmyNaubqpGpHiVivXW4WVrx4csiWqgaAiMvP8MKwhVdMY23VAEFDa9ZH",
  "key27": "3VYU46AuYZpb1YTZ5sKLq1rsQEe1H1KeRixzFFucREPgNk2V8x3HzsvNhQD8pqNpYpuazymXMhM7x3GirBcaVYhX",
  "key28": "5hqrx3yEgZKe7keybg5ApaKfTvKE1u55KixULPZF6F6yBAw5EiDKtYfNvEZryEnC65ZU5h4KYtxHWYUs2cb3qVft"
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
