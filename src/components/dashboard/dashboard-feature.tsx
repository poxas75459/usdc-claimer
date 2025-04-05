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
    "5Q4ErJnsBL4d32sxKQrS5dGyEXriyCD9L3T2jX8tmAtqqwLYjftKHijPsWK6ZFuZ713kaabSJNe43f7SoKyUAAfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JxfwUMPPo67JCL7mdCe3cYJfyjpqdeBYKzHn1wXAoUBWnRwPs5fsPf3HjcDXLmsuc2KpG6ucosCHYRvBhqaVEHP",
  "key1": "3UdxiEcZu2eWeEjeqq1SkUS6WVjJyD8DaTwea95PdySgtN2BJcn3ubrmK9AVkSvsphMNshjQ1HmaC3iW7jTpZn2L",
  "key2": "5Fm5NBQpksh7cRje6pg9CenCBopfYtCuCWPkt1wBhXAsfa7GqYy73umNZAoBS8GiRnezDee9WMmCtsDDxJUqzkVn",
  "key3": "3gCwxeXroeuEEhzfB9tWuP5WGkQcNg45HCsSS9cZZwTzCpw6L9dW6RKtKH9XdsV9jVmgfNH16EGHANJ8Qa57eo8y",
  "key4": "514LVDBm7Nb7GStdqJn5PEyTXzRp44ERy2tCaw2qrkMLKJ7nbtvswRRBqa6HgmSSGJGZCaafzrMcdzM5MaFK3mcC",
  "key5": "CUtsekAkaB3AkYuo7VVtr21v3EvkadyMFAqCEaEjgykpT3CUwjKzCnhxcSaDRyba3f1uWYTTCwcTAwZZLDHjAT4",
  "key6": "3koJYMJTUNaTsY4ZzfS17KtDxDuL7VBoNfAEbdi3MRVhvPv35owhZQaoktiBXDxjkaCfci9tveb2xMVANqFntCgk",
  "key7": "2S2AuQuwMSqEddcsvib7hnMEVx1WX8Trg91K5zMuZaGxudEQ232vExHkvr1aVGrzyejNQGP583mjXnmZ6B6P4rsU",
  "key8": "59iAiWdd4F9msaCjx2i4JUbeCxCNfvZupMi4sWgyFmjftvdVf7ZsWbhZiKoWqH7QoZciRyPgyp3PJzD2X7P5cccm",
  "key9": "5R9YPSf1XL18kREzXSDhsg57yiSYhW6s8tVH2EHahu6YDNejFWLYm1FEHUZWogexcPsKs2tUNYLeyPJmZ4pH4Rxe",
  "key10": "4C6Wrb412zfe5uSEcHPJCWyDv6uPa1xm89Gtf85D2MyFrGLRQjEfJYEwYUVRZ5hyG33ar32hgGsgvCJUXdEZng9u",
  "key11": "633tvgpvHgxCJEtU5Ftg3DaxGoPWMfczDnXUvw4p4vqUwjm7gFnrRx1gew6mKJpBPJ3PGvSeqZzw4MsbUfGrDGis",
  "key12": "2vZitqEJsvoJmr4JdWoXtFzfWMgp6iuGabH8EiDDFLH8XNtXiEmUsRtTp4XY7qwuvNTdf77bEkNQgHUVimRLREUN",
  "key13": "5syh5pr9k95JGDqYmtSEWvFVnLC8XJYaaeLHq4wJ2wbDRuJjGTnV2xVgNPRijgkfEunTeVuL9y1wXSkz1cWKoEPJ",
  "key14": "Ezd8DtYkoHVGyymJPXpDndHxQMftNhpATi4gkCAtHyKHzQoeDkUVFKBdr7kLSt8yQ6e3NbHWw2HGjHn2tVtA2v1",
  "key15": "61LQAKH2rDiGhfdywNtksKN4b3aWUY5eVnqbqZKPLnx6Lp433ENK4uYMt9UmpynRRvQfqjoPaWNAsdV3BcXdkFXc",
  "key16": "4Qe6J5GR4K5hHfhCERPBdoU5W1yg7CT1hDp8S3GxZnnEqaySSqznQuVMAkqYk8RAkQGSaP6XrwaiH1ycrrrFLYvS",
  "key17": "fuyTcUL6WQi7Ug4DGdJsYcSEcH4nG3L7rcmT1JbTppaYijs7zoKzFRM8Uyexh8H5Cfq1CcWDLG8NXNyawPf2Nbd",
  "key18": "4SFXaVGre8RuGiHuY5Zu38EZ5fxTAGsfw2nJPT8Au1CzHhoWoVnEtDPwctb2ZcHeR9tKM6xYGDDakxKj2R8wmB9M",
  "key19": "Ypi9RJyy1cjHuUc8CZvrWvJsGVQfmjgfmNoh2fhe8h8DSHkGu8ukAY3EgW9wdJbBXjPyuBFjvz8bfhaNQdRzwRN",
  "key20": "4Dok46UEe4ESgVYVpuLqXnHMU6fCR9fsYz5PM7v9KC6aq5wLUcv6dg4sTcCCyAuWzo24D7u3L4qEJg7qoviK6rfQ",
  "key21": "5ff9LrXdmzkKoHuNP9CNyYbqLao2K5DMg82nw9zLoUEiY1RYSCVAZ9d3inWN7RduzXbKJfpoHnttqzThuAE5PJ8g",
  "key22": "2janD91XgLw1k6dC7G5t5PfbeHzCxAWr9zbhXgLDqQkm94WKjbZZi1Tms5G9Qvc8izuC2AyGkPC6HuSS7o9Ku2UC",
  "key23": "4bWE8BwK2F4JPB2R9q1Vm2FmJ5ugp1To72HWrvKkd8c6dQiSWiSfrPY3W8Sg7z9Z5C3ri9pxgJ5Xzywuqjpnw9Bg",
  "key24": "3aYKoBwWVjLde33DWbmDwN8B2JrghFFsXh1g3JheyVHNwYop8hxX3E4o1xEGVAmjXE4s7e5y3kKZA6kXhFz1Ljdp",
  "key25": "4wgf4ex4nBP8df5fx8hRUt7n6sb3ZkKc4JuA88aHdZxzorHLvEQrRtEHAfCQ3Euq1i7rqMpYqPP8sGaBNnn2proS",
  "key26": "y7KDYFwhCdaYDyfQvnCRYMFuTQJJuGnVk4vMXWH1cXUsNjb8xNJPQgwHUy3pruC4FwEWrLFE6EzdNKgPQ3eJKnd",
  "key27": "2yvT2PqvU4cM1nVsuDDjQsreWwMk54aHNmt5uKUP8ESpazTPL8wwLieEJcjTvJNG2E27zLDrMJAdCJKDtoZVsBSB",
  "key28": "3Aanm7WPYu6QNkQAjLvUcJcWe1pnWwcQB9A8u9EpxyFu76stmEncgxWs3eJLQD8jVzQqSG1syyFFLZ7Gi25xohk1",
  "key29": "2iq9XYsxQxfV3tqCAkjY8HRECuYYkPU2C2PGZx7KDP1SLnWSoPYeUtkFFfWYaNcFhiaGv3MBCbj4h49AwLRQTU5L",
  "key30": "5YC7pvQjgtvc5oFHJuf6sFbVPFHohFXXmxGGup7Qu5w2tryDDKXQ2gxUsbCADNHkxZegVc2rExLVF1bCg8FLmJBc",
  "key31": "44Ahad86SN4VQfN7oFtW3PYkVhGNHL6Q7k1xbXdcjdjD1MAwN1QZF8CmU5ZELNTm4bjje3ppkmQvTKBxHjBBnNqM"
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
