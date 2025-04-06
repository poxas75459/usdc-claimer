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
    "k8DeR3XB7KfLVJTqwEdkAeyBokYqRyyoWw8QptypPpU4MY1R7dKZfTP7uEdpBsqfrFaAxS5z3tzFmQf2XrR6kGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2etHHPBkccWGmexQn7pJdzoMWe3BeYEXerD4Cr6qSUkXB4epbuq83MK5D62sHsciurvSpsvPm7LPrHBPf2PK7mjY",
  "key1": "2nNbKQ1VzvVkJGrocbTFNixvKKkqfVW13rNJnu4sa8geudafvCtwxjsRFAbkQuQjFwTTuZegLwsBQCfGCX7ogPNx",
  "key2": "5Dh2asbw6KapbD1wfM5GuPprdKy8xkc53ng9NWvnWfh18eJkdwzRHPj6kuJCeSnGmbpGciE4qUQhP6LCyYDDGiqk",
  "key3": "F8tFGLQLNSdMdXTggdd2rANhVEbeSMQqs3SHWjvhecHmWZKVwhCrYcQe1ZGUA9Vc6kFEkdVKdX2hLuRqgrGegPr",
  "key4": "569Lhu83AJ3WvYgtSACK7mQ9hyAd3j1KEkUn2H88TYDUP1brBHD5H9tcgWquM1wC5bbz4eNmAJqw4XcmD6vVZbYj",
  "key5": "qtAKqN5wJEnUoidRrL1t3ukx8XETeyMK6DzinS18xiHgQ6x3KA7rmUjQK5Jz2JqxPMP5x7hWi4Up9kffbzWAQZu",
  "key6": "3D7e1nu68AYmmQq4wdwWD2RTuNkst3CL19JLyWfK36VNJcnUjviDni6WJXfTQmKJk2dYuaGQsMrgj2KM6jQ1B6E3",
  "key7": "3uEqcYL2YkhYsf6tNCrxnzoCgdsen64xt7SDuGdmsvK19H7L161aoQbLj9yjRhtiDv8iMtUdowwDhuTkiz57vQhp",
  "key8": "pqdSnSGMGkQxSFRHzxkb7KTHuzUwTwQQmc8p8LsfTNWVTTKUuR7ZdTTDMLosR5iaWRr43gknyHx8FsoVwR3KPRH",
  "key9": "HZLXtoz5FuHAnRTZg5f9ZhzUqiQjcvWsRipvFftjXdUDJajiE7kfUoJqgySem489QpwodQmLVW2a8yVEDHeTpjw",
  "key10": "2RPmmpHJkyXQJgNjqGdCFpFJVfnrH7Afd9JcmiJ5fEtUnj9eADnnwGbr6MDWL99ujHEGLqboZn26kHyf6b6qj8qk",
  "key11": "dJQ1dwgyS87h9sL9rGcAzUcC4VgPAAq2ePrh3XK7TLbvHgpP8D6GowLHkD7tPp6EtdajPqkPwjeR2iKmR5HWhe1",
  "key12": "2W9LxHcYgY9roL5u75Jwm8XZLejxqDcd9EM8F2ZPQus9fLyU5VEsroAaZYFga3GpoCQrYKUGjQ4MnroWnct4keN1",
  "key13": "3UpseDeYkHeFGP78bmekAgPZ75tTMYiePQsu1CYvUm3aTXXtHoWoALe1W5ZiCvgzz1J3sfJXz7SeEG2pYg4kTtT1",
  "key14": "AHL5A9maSA3ziT6QeAvqC7bb6QNhFC7iodQtWotFuEgHq6n7UNUGpvSYhrABgNJDdkhHxgzfovsJcK1Z1GDp4TH",
  "key15": "9yAumn8q4cUsC2dd7HB2DbxcZkiTmLyJs6XskRxdA8s65nnAJu74uoTkqF3BMHurZCCaqbyn1S53pAMmFc8EBgr",
  "key16": "TEUDEA5QKqfS5z427gYUaZHNxMVndX2hDMBhLXcFkBbtCvwKLuzW6bENp9MUrFbjaS8WwquqfUdwP4RiidnNHPq",
  "key17": "5tnQAc8Ltx31JGMPYXmoR8bciQXHxhdE3T52SQKCGeh1qAXuFpUfbYThLFhqV8PpJno3eS8wHugQsyHVL4YUJnva",
  "key18": "2HLzF5hpMdT6ima91RsAW89qnbViLbzURcCcbrYtZyeYToXvByL1GUF3ncbgyK9eVe5BXSkqr7uUE1XCbxFjz2hm",
  "key19": "3wVKv8semHaYGZRJqd4LWMYxWQrvb7eMAaDTUZJryeippeXjF1ZNcSxgW8GJnSw5RuFMs3jmesGGKviPpEt1QQ8j",
  "key20": "5VSeXxFUg4r9hB3YN4nnT47Y676kFWRCHbTExguMsg8aJ2erSX2Btoj3dnS8iWYJsxhRqX44fAYUwJPxc5csGbBh",
  "key21": "3F2855YvakXAF5NYE9DHZvQ7N6LFNzYxonijxbwGYXWzVcUa7hMscRbGF4jg4grBgSwmibYWwZEKPoBxDuYbjjE6",
  "key22": "4uPovwq5ZmMzV5f9QSrkWPQt7CSK8utzHywPFW8tEjPxpjruvoJQ17t5s1EgyKYpLAJ3MzJiBdif5iGR2zkVLFnQ",
  "key23": "45XVnqAknfTQe7oGd9skoGcg4vYvSKgRcQjDUpWzmCbmcvgVazBqfPAWWgriQiTkNAMHMZqGKCPivmDy7bbf1ibU",
  "key24": "A46oSx2wmVjJJ6sPHa87uerhbmxJdbhjk4XwH9pSGp7nkb3Ba42YJfX1aofVGk7SytpZyBr8UqqQNEwHPqfJaCs",
  "key25": "5857eeAL3sqCTDrWxnjPZneWPMjp871aFcQ66cKcEtHj7KTE1qwGHP5jGw4649WdC6MUzf6U1aYXaHHczbEGzbZ2",
  "key26": "NqMfHFe7Uu6uTodhnTEPAqMoH4gJfB56jrmbTtCoB3xygFK2hrHQnAcTbvj258WHN41AiqxuDT72tZqGU8LRGg7",
  "key27": "5dMe3HYXYi9wDZ12BViUaihSEQa4iVdiaWGM7JX4C7N6i2UfZmcHUD5U9U2VboVsuQcCFWFH5gDwub8sM8hgff2m",
  "key28": "4kwfCyQtwTsLvz5QqUnr9amhXNkToPcktrEmvx8CMc79wPXpDPAuu6Sz4nW35uayafwhX7zrYcU7cGPZYuSuiHZT",
  "key29": "4DEUTn2MAHTDBAoaRWrt2MzdZJy59Wc9dm5N2kf1gpZJUogGCXbR4NaMnu1wzxTSg3SMmX42RPPE11YYtJ7Hhy9C",
  "key30": "DgkvykGNwE2rPRZUtqeu9rKemyuCSmFqmbdVjpfMe5p6ZXH6Yhahi8hgfRNpJkXym3wCTq5BWA2PxjLEXQq4ne1",
  "key31": "c2ojRGTSnQmnT1dX8UnSwUjwCJJ3xFivYfriE7V56f2R9yBcPJTZh3yxvxkPhPfKEQZRvmKmkpkpHoJ6BiwQUeK"
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
