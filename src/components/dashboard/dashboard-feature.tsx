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
    "4RhcwTjXwwpgi6YGAcUZBSnvywnXuidsAK4kiA7w4csRJEqBxKxEXKdDjfMJsxK2T2a7JNLremAnCjVavgAFZGvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yYj8Tpc8wAqMsg8q4oQbfDywmi2jHQKhi6ZpjVDMuCghc6CojHUxQ23hduX5gsb4MZzYrNTN24CJ8uzoMoPynP3",
  "key1": "2h91CBXSqhMQGiGMjawcAWWo9sqymgf5VXxrghfWunrFY8JCD2RM498NKV4Y6XvxKZ6y5maouJo1uiAGEhghmWDG",
  "key2": "u2Pa5tzkW35YjBBiTFumDZYPjXWfH66arWVJhw2XVJfZWTHw71jBpYsj8qdhTB4X544KK5SWAyNV5qV7YidsU7i",
  "key3": "UJz4xjMcjDZF3jVeqjjQy8h7KqEwdGq3CDeoHk89uVXpp4AnLQPCuYJL9PTJznbA4gujYAbdLJiBS3Qbsw9SoPG",
  "key4": "3WsLzHh2jJnNuvBNPWC4Z1bvwFZ55GsSzfBtg5NDdmcodPMRXrDKcLJLfnvMZ3por8TKTxnSCC6zR2DiJ27GoNM1",
  "key5": "4o297hPwR2KaYB8MzLNZ35wT5GJFeMWprwunUZqmGT1UM29G178ajAhxwosY9CnPLS1j46qVscufB5nqbBfxK3vC",
  "key6": "4z8ThPg9LDwpWmUQK7tujKwmXGx8L27AqoxTBETUDvUqK7FpXLPZL1RMea5JMiJVPy5qeYdSTQ5kocKQoM6CmCa2",
  "key7": "496GLeHdiKrUedExCCBXnrx6BvVYRiJLhDq4DkD1jgC9gAUPeypwBBXM7YEXFoDHK4n1m6ADxDFv7so8arBTh7MJ",
  "key8": "ZprBxeRAWReP64g6pXU6oLgrQkMdkzfk6VenWMNYD1zrrvtwufcQvaqKocTerKJTRQihuLwEvrQKQt1UMRZFFGp",
  "key9": "4enhMjhk4ty7rBCY512j9a8AqVtNwYd472Dbcgbjohce8vQoeg9PbsMkpgkz1EPnMCEeMHdaep37TgYEPVnxZvdS",
  "key10": "3cWewNn2A2UPH2ZiQ2zEQiaX6kevjBnT29f7QoDdt8xkNH2C9JU9zaiLtrzJyPr4mNuS4vpXC33V5V9KJDxJDhEK",
  "key11": "XBwB852qTFo6hp4XPmMVxb7gD4reNYqs16882w2uCKdTTP7mi6TVostKBfzyuk8rkotoTxvuTMVfvWuL1Bo48Nd",
  "key12": "2VwmjN6MiZCiqGJRLqmpns8NaqG1du32YCxPuCQo251rjjKwcBNRzguswQ8dNuXRtpcGgfyH3H7AMNFqVF8xgxdP",
  "key13": "383yjuzF1EpZeSjJBqwyqC3GW8chzi2FiiMWcv2eg5MGudvYhAhVjZCmYJpW9g6V3QmBd7BPM3As6tMXSSZfKZG1",
  "key14": "qS9jhZM5fGrrVT44hiMunjRMZR3jidnNwuAxroshDScvZUG7M79AHs2bDQ1LNQr1AwGtonHpL4Nf2qNC6U7Va29",
  "key15": "3h2HjbbM4qQaS8L1omGyGmTBsbmuZYRuwyaarohrnE1t5sS91NAVtP9FZZbQxhw6jPTXscQkHoCc2x7tCtLcbQoy",
  "key16": "4xELz2AK1Phd8FEV99TKpLvys1v9DyfDDFJVQcMUeArpDsoFZkKRFsfcqq1VGHvRPZN3rxpPYrSToyVqrKVJBcbB",
  "key17": "5W169vtLJaVMKDh7N75DQaZFqVrtA2zXkyvPQGkpuV9e5KJHdMCwfTsYG8nCbt9Yt61hJZRaSeqGoTWx8ZnaBaiD",
  "key18": "5wtswfDDH9uBa8x4RHxMkTyK9dB96uJdZbkS9h6pdw2uR84Rh3eVWwsEtCu2FcR6Xq3VwiaJn3UT3QHXEErxdNQQ",
  "key19": "3ZYRG2xNekDkDB2M574YpCD9uyBBH7hGLC72p4HaSW1Cch3qToKVfzf3yLmfDRSuU7dqdErs3RBZfSyZY5Xvab6S",
  "key20": "5hc4zMJKTWUkRDvMEvYkHZEw6DFejHixSyn4LnYe9ebmUGYp9HVBt2QuctBh2QMqfXbCs4ne4Pne4m6e56n76gfx",
  "key21": "2MMZCzNWa9656UMDbfE9iiBmTWzZg7Zs6acF6mdgctNmGPRDhQqosYKKW3Vy5zSPajm51NDho8kX6xWdRpw6Ui7X",
  "key22": "58zuBKiKokpsyjsrbPtS8nZMTKj1dxrGrFMDFYtnFE17DZVYa4sRtWyPZ6prPRPDixoVqoQZKtefVab7ofNUR2Wq",
  "key23": "3gwKkSmKnc6GdjvEDT9e5xmCiKQauw3LZbZPdPY2mJDonVEYwRp3sTGyGvSFfQVLeJJeb2p285z5bWrTgriHHaa",
  "key24": "URFSRsyYJ6VRHkwy8qxZNXhKbTe47xaGDY8Q34x8ucSwptmxKH8VLEdGWW6M3Q1jVWCf4XqfmJCXP6BV83Q9sau",
  "key25": "5dRtZa8RdWe1iKh1w2r1Zy1XM6MP3Yyc7wSyLnCVtSVrUy1ahj8s43T1GJbxXcnrJohc1GvekNusPTkiWZX8ai2Y",
  "key26": "qPprFJTDdEJy8bZb5cTUcDLstGGNGqeyv2My12KnTmqCCNqH8W14x8ncDgZku2mSFNP8UhrXq6ftNNmQhGy4pgJ",
  "key27": "3Jaw2qdXzmtTpnCVqg9HsGMawwWeWAiim6X4qyYQ7mhb5nhkZcdtgnvSYKLNGFoXWsh7djeBUg3F5ZbAXx7Z6Tit",
  "key28": "3waA73UUveUZmyd1pSwH4QmX5f7QNNwZCdVjZpAdxQXEchaFQRp5cuwqQg5xmjQihhPQWN3VB63u8qgrrgFR5Pt9",
  "key29": "54E5L2EjGFk26vLKmnKDGt95JVCd5dqarNB5mRWGLkg9m6UtS46yhYGufYsmKFiCQTir9aWNnqUyB9bZxkWb1cEk",
  "key30": "3PnbUWhk8TiWajdFeMmfvyRhCdiaWn2YSbS8uAN7biQF9vyWYr5EH1k6BCHMKuPxi1pPofF3wV5ejcwYvrZ1NDdy",
  "key31": "4Si7U6eBTwQ1wZYHtxRBfzkVTbGkv6mUDbDDRmpV9X2bX9NK98zU9coX1fwTYEz3vAMgG2BE4vtBUrvuXUDAFRgq",
  "key32": "4zGE8FANNCbnea25GgWDeBSzVy5E2h2a9ALMxYLqVrXzf82eT2QYjSupJd6u3iLNxsywJJxZQK7vsDC64dvg4yNx"
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
