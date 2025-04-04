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
    "4GfPVPGUvjJ4X8QpUDSW6csRSMG1x7ZPdC7DFSKji5j1FRv1r6k1rDtdzmCHFSerHZ6iaHLjbz9gFkf76xX7eSs2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vjNBkJmiUJxRt1pPW6i3WLYgdb7iiMkXWMwXyNzwnLrrAeKqaHJsiHkQ6Nj3ESsRDE46xi2oarCLHQgAF41AYS4",
  "key1": "3eJuUia5dXaHtvz8vp7mVPzy8mjbWampFYLXaw3MVzu2PwpybhxHiBBMSYDgBs5BBnafin1tTSn4yqgWCuRU8XHW",
  "key2": "3WB7Hh3dkvfGNR8cegmZSTBssHeX5e7gr5AmtCS5EzWWkG1ELjxuRmghGuGtXTLXWJFzS6Qi8VXUctkWpE545f5P",
  "key3": "48tNoWnPjA1PQ38MzWPAtBgQuCvmqBswb3pKUx7iKhoKvkaBKE6AGRsvdFm8R8k6Ypo6Vf54TUKKhWCrNcR4uLsJ",
  "key4": "5iPpsnEUFizGCDtZAcPecmquPbynoGzHv52fDGfxQJ3jQapd6WPVYhxjRQDmRATRMP2Q3i9jXH4uLwdi1GorEYLk",
  "key5": "61hE9JYeaekTVgX1nU8wbPdTwrRFyhDF5K3pxKbGSMhht23ABCjMwCJXxASdDGq7htsYYKgbePfvoAjn4VNPW1MN",
  "key6": "RZ1XoFbeAYgcLa6oNhxoL1jXAPy31AE2Ko5LKkFM25wMQT4o1k3JJ6rfhNCLMega8FG7nAuUT11K2LGVy2E3zC4",
  "key7": "EJFoW3Y2ejEib99wuaGLAR9J9PikH3KDrJqT3zWiyw47FbJoJkNYV9G4cbGQQJkPGSx2VXxgMBYj8fjwAFZLL6U",
  "key8": "5igrvE4eUvMk9UuRz8FFhcVic7eLAQrrtj9LEhJf8qJhvm4Y7ytvkpCR2N4s73wdJruvqUKDAk46cpHzy1nxdYg1",
  "key9": "5o5AXLvnvZyHoxbi2ZcubzYwyAbshxmy6TvpJnWEQLKGD46CBsoR44pyZvLqem9fU9e5DBoFqL8aEPWSxbTS4Jiz",
  "key10": "5bpWBnwz3MyM1EyCxE97xD1uHKiqvfGLNSDkgs4ysJXomvbfmzL6YYKBb1gTadqcvrAHwwA1iVrGAi5V3sibgMuq",
  "key11": "5bASeh2LCHquGo13uJNUQjv8L1SteoA7KgQd1qsKuZqxGmN6557q8KpmwqY6Lf4YnNm2oYaPhiy1kkHS45uBEnUQ",
  "key12": "4xTHqkcAf4da6Gyuh18W9YfMrkcgJuMNx92UBrqUKoqY7bDHZyY4UzFLPMwuE51KYQHnRVfYRKbY1TeidUHdSHAX",
  "key13": "4tSwroYyFz8HR7TNNMrLFhYtWpJmPdrD49Yc6nGhxKQZZ13n1LdaedCpt4wry1JrEW2xDwXpVkgmVSpiyrShmYJZ",
  "key14": "2maVKNjTidDf2PEBqox1idZgsr4emiRzEcWAWg2XerMBZcJXeiBASFx1cn2S2WKr91nuU4W4d7S99sLQmmjp9FwR",
  "key15": "5BCo81BhGXuTg44mGGLzZmrKprtZxLJxfUCsM11C8JPX7PwsSbh4Bk1hvrFDJ5W2yyLPh9DnS9tcQp28YFTztb9B",
  "key16": "3ytyRSTAyeaGFDyHqZRaJMmiqM4HCEbRdmFm8gYE5YnMpmHCNfvr47LzKNbLhHddGgnCCPWVTKpLAoRds6gm1vhT",
  "key17": "GdYUHEWSGLCeZ4UChEKVKLaNd8vAvfzz8bGP8Hezroj56YAdwt8xUobA7WTtG8QcyfYDXJCyF9nZnxDW8FGriK6",
  "key18": "2quYLWsyp9s3KoERZfMf2xS3Cjww2AGz6hmXJ9zMtw7r9EFwVpqNWAmLnWQffGyokzAX2AZPf4xUpGTgJEuVTh8F",
  "key19": "2fvrDtqwjLYh3qVaoC4knndLBiJ7Y8DLsihJbHC4MH8We737TD55Q8XACHFtWXNYofHuPw2EbSkJvbZ8CPBUvBLX",
  "key20": "3mYxokPZbEe4AvzAuDwPaGszc5UDABw2uPwaSnecky2BkhAjpRoXvkGso7ajfqssmJTY8B5zZtC6TgaMnec7QR5A",
  "key21": "Dg2AzzxFtX8UjjDFLguTtRNA8EZoC5DVbEWCytZLkZSL8x7rvCqESzYS3CUwbQoCU28DmJCuSn7yUu611Gpt9LV",
  "key22": "d9S4i9YGYLqKZgqfQKGcLQ6jjNfQnuaebvwerVhq3GpY5GEof5a6Y5TTExrusXGseWFZgANQMNnozKmS1BurBxD",
  "key23": "2qo95P5HYjMv8gEaKYRSpx7kDvsdQ72QFBn51HkP5QfzmfzizYxmk3dcu5kqQ2VZtD1EJhrmxrTW6CMwiyfmroDS",
  "key24": "4yeGoJ1u2i8DkKPksEgvfQtSBeXFWjF6A8pfydYMxgShge4K4PPgswrNeadbJ5Foa1vMtQxt18GFRzJekurwT5zp",
  "key25": "2HYQCbFHf4ahyMRVB4b1JqRd9e572bhWbjTdmACUt1Tbn3wjCmdTUVctifzfo3Vezr1GoqrnWEvvzZWgDZNEhp3J",
  "key26": "5EBPRiLe1hxf1UZiSLEsnJBNgs8nDfhZmGYwUD6rY3qPC54cf529UYkffJAMe4d1u1HLjdkBWTHqxdtM2SVRrM9C",
  "key27": "5ziQ3eX3FagXWW5BRtUh8tMnghJeRjQiMvJ2rNhYnYM59BUzNXZVXNawSiBm1pPmxavNDBo6DCqpFmHkT9G4CUw2"
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
