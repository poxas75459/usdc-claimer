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
    "9jN5tKFrdVbk51YiZmeS8EkXNcrBZDKA1QbSoPnmGnMqKodeSEb61jDea5xhxHDdZxpWL13RDSKnDDTNx3YyevB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y8V4QidKtKVGiFXzp6wuh25bX8U6Nr8kEBUhi3xHFMD8ni9t8vdDnipNCWQVtZtebyikhvLffGSeVFaPMvXxVek",
  "key1": "3KoQrZKzwKi7BczHyMAFKcfojMJyTbRbr8ETPhaRu7ePPQqotv9LiJFeSMw9kqtsTyPomExL6kWCzgzizdwRQ67h",
  "key2": "2spKdBBXDon96e7iktdZJuh1Fp6UpxzLxWysLLBR1jJYqxH3G4LA2zxeMSkbrpsq93xet4rCiTxBSDhyx77cT7im",
  "key3": "2qFLvFHbQNXZU7EHYjm8xLys9TcutV1yn22q94sNYJVnNnKkVfvX18brDgoDQq8K5jgBvjQpbxnAHpzsigJFosgZ",
  "key4": "b6MrtD1sZZ5rGSZRRstiYkh7WFVTxTJFzstPJixTkpc1wDXx1iYaUZh61dYM2c8zf4xwAtrezXLy1kUjg7UF4d3",
  "key5": "5PgYe9m88fKb6iHpBEJjJhALyPd6uXKJmRbEnUWWNZs3US7LsS5UDAHHPeAEvB7jU6z1MYkj1dJqBD7WxeLdWgkr",
  "key6": "63eM7jG6WhTrRAShX6Tn7zxuDRwCPrMbhzGpmSStgpgzqPs15BWoirmYH2iQUxKzZeJtCufUdDy4yxqFBKT7FrZW",
  "key7": "57LYzJGNKVAwgZcGRdoAHUMoBbm47VrjfFJNLrsHQoDDHce6DNWK3i9c4Hj6DBEiKcF2njBcfDuBGDRKX2LK4xpA",
  "key8": "4MS6xacpoi15RbzfLMg9WE27YYBJUWhQZgCkjsXBKngLkWJp5KEQhzeGpjS81GHY1f7xvfXXfu5urRkdtaSqG61R",
  "key9": "629Nooe8ZCgrQaBC1XpsQZftLM78merkjCRnDS1EJ2KQgpVuL61CCpjrQSHwd7W2ACiZ2QQtKGW9CECmr8qY2Xk8",
  "key10": "2bh5TC7jcibbhZHM6mM2wQAX9d4rHJ5J9BF7c81BknKQxqXD6CJmfg1LSDcJuUsq75F7YhjZrsfcJGZnuu4zjXzX",
  "key11": "4TySMjUPAr1jpkAmoLs951rZoP1hiVnLmcPAwsoWmSTPG9n5hPoK1gmbsPRdMTLUdCWkwGP8ifWiwe7gC9XsaU5j",
  "key12": "84wTyEogYd68wgkimY5au21sQPZzS1NKiebhxoeaF9XpqohN1rfpaQfSgz2GYxqzgWz3R4eoLh4y469yaDJR9HR",
  "key13": "55YK7zAffTLDLq2xtmasQBUJ53DX7Xd3jTHf778tqmMBZygYgCarQNVWpWTqeYRLZntn7vvKVsDJZruZTNE69C1c",
  "key14": "2G7RtoBjkDpocj4YjdjuvtjmAdBw6kC9SqmEVxDrCkVKpYBr4bFb8K4abqBoQQQwiKb9VYVysx7GamZozJ6Gkyf3",
  "key15": "2mP3wLuaS7MU3DzRABptRyhjYP51mQjTZE2omgAaCBD3fA9Z7Jh7M1o9hvZo7Aa8HoqkZNwTfTFHku3PLQxMMdJc",
  "key16": "5NFKGBHjkuavN8h2iiTMB1TKf6pjJNHn8WET49Wn17mQkpkvXWd6zHqnpUr1zvrYmWsTtS1WQMBQeS3YaGVw6iiR",
  "key17": "5aEWeu9RTfNHC5mnYZou3wYqLbHKywKMKyuWXC5XK2FnhbunravttrCM9tTDcecyd12NHe4Uhhqs5TWtN1pTkF3G",
  "key18": "5RMPjEHt5tGDSwQxRoeib6fCQNhMfLxQYyy9RYweADrDWVfYjNWoeLf6DTN4tZzW7iBfnQxeG6ZbnT4imp1SuAq5",
  "key19": "5EqwEN9s7mZeGegJcr2hwkLyKYdF7hjaUN4bXrbR6vXU9jSXFLkrV1jcX2PT6zpy8YQkJWfP9mPBmxZqccVFtFVd",
  "key20": "QgmHB1bFka3km5jWH6Eeuv32HEPQxpFBbwy5XFF8tTEHWYUHT5aajVUWCG6neERG2jmJoZojEXiduZhmXH5Wfhc",
  "key21": "2GNT9kRDTk495mqQy1JjHo3jZU7rPKgiDLT2Titz6fRPoZE47kbhEZeZxSjFnZ31HFECk7UgP7j8aR7QPDrHXLoQ",
  "key22": "5CSzRcwrVYzyp9ACKvPjVTuPRYRPcaiiK4q5fAvSsnKSnufcF13AQqGi5Xn22GRkfU6is4NADvuhDo1ddjAXsQnu",
  "key23": "2TcNSPVz9WFFSEsyvDJa68a9MdJHP1wuDa2hMB2TCWbkR3NEQnZNXKtJbsLCzHEgP5nvv2kej9pD1336karBA2zR",
  "key24": "4DwyjEaevcPKagjGLvyXpdicPArUxe2P7NjX29WwBLGWiDdtdKtB6ujmG1nZmRDUk37AMZSaqQNpG4p6RV8ZWR7m",
  "key25": "W2QtVTAVBxk9wam9wAn8AgGatbLVp1gW7ZcHcAhdoHdP8zEsmWiS6bqbenJiokA9yxbtdHM9vh3o1uLaJBKACat",
  "key26": "2ojbx8NVZ1MxVWxNJFjwHwrakJqZPpQhfEqPjPgppweiWDjmc1pqq4hJc7osHopLCw2YJwUeQuqSLTZZSXsqnfLP",
  "key27": "4nME1Ty7z8JynhegwVkBVCk58w9WG5utrvyCUcPc2v11wLwMbocFKXNC2fGktKj6QTn4gRDmZQpyZtV3fTTLhNda"
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
