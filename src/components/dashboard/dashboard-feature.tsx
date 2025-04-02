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
    "5Sv4VbpdmNzqD738z1hVhBJC67vQT3mRBriXHky3kHSqdBrC2Ce2jubqWvN2pdbaKVce6kvGM8Kxbs1ixQFTDXcq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VGeSsZ1BCjFaSdv9gtnYJ6WpQcknoNwDU8EMADAZW1q4kEF1tKtSL7LAFaEnry45NXCDBkSqoK6erhePH2VuueQ",
  "key1": "2Y3muq8CGyAStdjj9iixCh64Z5LkRgCY7yGbWhixaoA91bwD9fypARDfBZUVttoQwxUYnmnC3tbL86cuzbPtU3aC",
  "key2": "47mDwTGtzC8bXKw3UZLWtMaF56tFHT2PNgo8UoFwVqUPUxqFrKtFLi85FvWt4Txsk3gejZVdNY7rLRsBeQTDdp62",
  "key3": "eatNv1fggxbGaieYQXRMdUVQkwxAwMBBRwwnJ4YUrnUVv8YvYjpXNRq3nWV2xB3UMUc98SHDg55ZWkJLj7yNCYj",
  "key4": "5sds7W4yoCqBEh5CJNnakEAVWdBH825ASd2u47E5dyuMr5FiEvQn2VdC6uaZrPf1Ny7iHjXLtBqE5TUfMwhNsg8f",
  "key5": "2Yu9buuL7i1zGyTcYd1Fk2HsyR7zfBkRjr7JbhTj4f67NMG2AmDSbyE8b9Kri1sZ8hJi8VkqNBZGUrZHsGtbT9EW",
  "key6": "3eZD76Bky36oacgW3dL8YYnpNQSymcA4ae8h5rkg36CMqdYt19PUcnw1T6TXttG7xSNFMLc6ezPa5r6g6ohLegR2",
  "key7": "5bWkvNNhvwjSkjJ1i3KKCHHrwAm5ZcSiREFWEu6q4JhhwPef6TmSA6ZwAutZLWSwTLkEzctzZSfAMbEgXjYrz4vu",
  "key8": "5e9HmxTcnZyWCpqUz96oH8KNQ9DmwP6Wg3UV8haKdag28Kb7F16LBXcwj6TrB5AswEmZfrJ3bkmxbPtQ3DdVg9Ub",
  "key9": "bLmsoRHkvPowSvCtvG1bg4e6DVYRpXGeVuNay94MmByBb2Z8KzCvTqkgU7MsGwS7oSXY6FeqNghQiLw874KvbvP",
  "key10": "4e39wRsXdGQgJz5dSPvx3YiFmtuyjsbMR8tyafxJcVh5YFwxfxN5u8UvU9agsxqeBhRsHHjvVeNJCAqyCaggGsxh",
  "key11": "2B4jbePzR8kYhzDFgVZ72PUFTP5i32uCxyC12JZZuForWV7tUZk11ssbQhsRBZMaS1hN2vZBfrSkHJuyjSVjkKJP",
  "key12": "5sJESijfQ4rwTERtvBtcfSyDyxWiHmnNzWc9mxMhddkS4wgR1bzwHbrtpUJrxsjYrxTdiJkSxj7P1NULyYQEvTF7",
  "key13": "2THdjai2iU88A82cJg6YdwMN4dYA87GCw2d1ZPjRU3xVF8Ux6koSK9HQp5WpqEf48bUZyDFd1zsanNCcuBSynYiC",
  "key14": "iZ721QpVGmCp5K2h6zz4c3URZ2wui7U1XYNL17AquvZTNJWV3YBopd6u877ZuT7duRVExqDKEuGiuqhi9wHkNbG",
  "key15": "mKD7FYK36sHexgLPPedmsUSyTe9Mt2T8MgGdTXMy8MggjdLJzjFpBkjkf69jnytSdyGTR4Rk9btyy7rPW7Mtgt6",
  "key16": "5DT7S3fGJVAPKXNSNT3tJXZWxnixdzJqy1oCtiETmQ3T9PQDfx4vB8K8D3StWfft9KXyrPwjT6BNXcULPZFSGfNs",
  "key17": "425yrhBf92ZvffqcAxKqd6Qo8pmbd4dC1o8ppei7TdWAH1jVKa6zdRJikaTqndfxo2m1MFn6vdFT7dprjp5jqoZP",
  "key18": "4YPLC3P8v8tnGpNZ3QmWkg6b4aukr9zpeL5mLLVY5sUQWyuHRdtZvyKoNgTvP1sad6V5LoShjqVUbny7NZe5gQY1",
  "key19": "21yYEkS25R4joZEvbA9fX8HAmqn9SpvbxGyBWmkBDUq8EMWKE2RzUv5E8cVztcisPidXBYrRY6QXakXtpjza8JJB",
  "key20": "rKPnxQrJJCMmaXHPpQFxCXE9PHzQwFGLqns9nbohoRxqCnBUioMQYr85MJKmLTZo7gMv1w145CdADKremNbEGck",
  "key21": "3hJC6Ei1Z65txsPfoXd4hYmdUmcSd9ng1zjvcfckkneiLa9jZP8YjUJq9rqJZJP3YixyhSxz9FTM9tamm2HsN32v",
  "key22": "EemM1VZXWkymy32p9S5oQQwKW4Ke3KzSgtj4rzkE8ZrD9dm6Sb1BLoGJZsLnX4RRB7vr9fFJh8jQMSACoTbA3qb",
  "key23": "4w2jjenSpyN67QBWkHQUiGtXG37tuh591gcCkxi7soyaY4h7y7s5rU7VkaJ7JdTWQcKE7yYqrV57BqBgs9cAaYrQ",
  "key24": "1sNKtkv22geFH6euY2odGx3RPPsiZYKRMEKmggg7L34FtP8L5EnAJ5TAgUTgSZNwRK5R7ZCbSteWJWU73YX3C6y",
  "key25": "fWK3Lu58FziRM56vgM7qbw7uXXLjYQAWV18Gdu21tvqL1iBnsu3nB9gHjCex9d5iRQ1xqE7iyyb1NXwTYdVHFVN",
  "key26": "3fjCH3VEh5BcLH3RJx1mWoo2GR1eSNau1wsHMiKEUsissN1yz31nYrD7dzwCTxEhEzRmQrgvsHHDFSS1M7nPESwv",
  "key27": "4fMiEVxtDGvpb6mAopDDQ2XJeCmB8aoQr4qu8ubuEhjB7uxTAxE2wm2ZZPwVXGUDeyZwJLJD7s5GJyxCCVNpKqy5",
  "key28": "28AMYkR4ad9A1GiGEYoFKAkZ35iDtrdrggz1XeA8W51WBAstp6Hypr6s8Nts6zC39d6cvtd6LGhYoVyy4toTzKU4",
  "key29": "4iEfM4X3cooES92Kbm39b8uUacckhoRPnfwWCCJhyYXhwqHHYmc6CgFep19YLPDJPmChbzEVjkfnJ3mfXMaAM5FT"
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
