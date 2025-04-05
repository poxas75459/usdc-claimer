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
    "2uSTfKaumgPCzEEiBU8Qi1Cc63rznFcoujdWTn2xJDbkwVC8qCMUSxQB5JzxpZnJLFUynMppREyzeaihyTakdhD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cFV7ddkS8S2iLBgx27ZPUvC3QbNk6BjpmCz99nWib3e1osMYiN6cXipdfNZaWdmihetYvPkp5tozj1Ew1cDBPuU",
  "key1": "2EePwcDTbVU4K9eZizLf1yDCQnWVwSJhmctNKff9Hon4W3gQT9NDUJWUPjyvMN26r1xKa9DUCcgWWm5rkJxpL6q5",
  "key2": "4feaKFdbQB5FKURTGs79bdaNjq94B49v4dmpYWJpaCz5K3sxw9H7PysUdCtbSTqf9xBFJYJsNwpS7M6XTk7dQvtN",
  "key3": "B7MAvHxvQfideGJvkQn1GHe4AiivpG2nMDMfhFLcdQxfn7ta511fgKBScBKmn9aeAeeKPXEnSNeiZVZf66vUJhA",
  "key4": "TovLuEo9MrNDX5wifVKqhX25yERiXTTHrT7NeuJ3kBvPoj9YiXXcznLsjDqA9aGXU43hh8YcYGUGCDt7qQxUecq",
  "key5": "65qE4tRsgZqwQidXvchwWKdRRaEraTvqWgB7RaCDMHA9Jsghmav3WUGugu6HzaNjK4UJREybHtC8T11a4eiBJDXp",
  "key6": "CAjo9LALhfNDakjJS1D6VhZkc8cFWmZoRUHUc3UNUz4E82f8JMb7C7ACVw4S1Go94zr5g4LpShMdLmRJaXoG3nP",
  "key7": "2FKHbpnhQXHUqatcGKhJtDLbwZ5abbc7U3MRw4xxBRX22cWKh8bMfRZ99C4B7n5usNQiFHFcjtCbpFVZKTs1dKHX",
  "key8": "22FtbtCxBxRqDyjv82aKcbELR75qN8TegsuDohPGKEddqVaQCdqcbbHYRrYSc49YAdPKRbq4zRC4rn1KAm45vNb5",
  "key9": "TbmoszDdBx6vuuvvZm461BREbGQFag6pZGGcmxoiWYWqY5kN22RmA87SCKLdN4hS9YZsJ45BeQDEZNuKqT1EFva",
  "key10": "2onmr6jMKvpN6SgkYzRmmCsrAbciYGn8or51YWgTPdiU4RipfUBWz654kSEpnvG38b6Y1WbYWzqMh3zSRcRXiDza",
  "key11": "2VxPBG5Ka8CnCxwXoCgo3E3QAw4NmaA6MBStSMeDFLcXgPrdvCFQxYRK8tb8Xe5u6m9TcciXfSxQNDzVTgEbeVMh",
  "key12": "27hJSNJpoQCpGKuCn2BVHVT9hikJKCuMU8QGNnYgxXaz2z4kduQzGe1xJ2fWfaamdMkqTxkTaKFuL2Tzxcfsswgm",
  "key13": "2xMVhXKV4W3dY4MbJFVqtD1VQXL9cQYtJpekzMuEh7CzFr7ypjkqu12QSHqoKzVpAH8Ku6mN3HzDrcUQikmZWioP",
  "key14": "27FdFqQnNzxvWrFvLfQD36Qyc4ENEtgFFMQD7r4TaGXan9f1rh3nR2yQ9JwCtE83UVvKiUBi9yRiVU6wFT8dmYvs",
  "key15": "2g4RiQDcWc16siEnuZnwk49VGHG6Fh9cj3ztJyDEaug4JtS5vK9KqWKJSgrJqPzxZq5mHJjPzmSBz1mLj21FF1hM",
  "key16": "4QcrUXG5AQmxL775AfemXxP6tP5aviNGFQ4b4jHtQAxPEKusDHZj6w3TRzT4aY9VvUw8CiKj5YVJ6EB2xMNnCWFy",
  "key17": "WvoGiYJCcMKW5rYg4x5WTffARxWKXnc6mYqoYyuMEUZtoMXKdHcCbeBfEpe9nLDtxuB5qH6tjNye2fetsbF4uAv",
  "key18": "4VUQBbDL3qudfgmei1YewN1PRLZe3ue8E4F6qrC8MNjLDtrickTYQYSeAdE73xniVdbTjLub64dCMRDUVWN864LF",
  "key19": "2xp8vGBqkmbrqHxkFHgaT2yqJ5bHuAwj94uzFYbFp6oE7h4rhwgx2HtnXA9VZr8fpzxLCSijSLSZxAPchB1YMDi9",
  "key20": "3MQTj7EF3SLx3UgS86f2mDMgfsPATXcVuba5Jm7vevbejLh4Q7UuXHKoc2WhkDEzvcMLpM5B5dFT87njhMsQ5AcR",
  "key21": "4BvRkDRBMAR6bM5gwiAgf2GP7qiUdnBFaYe3qMKHVCXuV8ryUtDX9pmeqMguZAJVvmPEvBcL5XhNRnuEpozJPef5",
  "key22": "42CdG2w58vYiBChdwJ6rXxMcEaoywUGnDu6GA385FNxCxLr2vhrjjYatDNZnsjrv42xbj6RyebMcpVEv5igns62L",
  "key23": "3jUvU31iKVorJ7Arxay5Qgf8pgZRFLYzEDfWJnMWuMdLrJPFmu6q76UHnGfPphBrhtCpVijQ4xfeKrZsqP6QFeZ5",
  "key24": "4da2xdh21a1YwXs2z5brf6XW23CrNVXjmKNV9Tco5Gb95Gk6MmdXcmf8JATG2Sg8fPiKujB42QyRKjuRyjKSD5Pt",
  "key25": "3Czruki62QEYPh7sAXELBQBreAktN9mgaY27w26omjhovLSYKR8nCnYvaAvDdZbKund6BZHVbMiUs8z5RCoZcbjY",
  "key26": "cinFnf99WeCUDx87Cq1EPMbNzh9eSP5JtSZdUgevorn4FUfkPZuC1REttL1F5AKQVJdhiSi41s2AUSkJssggxUc"
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
