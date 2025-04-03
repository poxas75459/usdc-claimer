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
    "2tb8H1YxBmrjrx5AayMHhJzyQ2msmfjWWqwLndxxYBUDkffDugxCy6F9jnDsBQkrpkUHcfcahSsBEzuRnKC6fGHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36aTPargpksppgX9jzmaMKvtjUKeu1C3BUeB9mCjRVYPUAtnJUCbcrYJd8kM8rMvgvMyiJo8kQDqkq2umkgepYg",
  "key1": "1EBS3uF35Gom2XQQfKoz17gaMnigLqzWMccKhMitWuwn4xCxrZ5zzSjGjQjkunB3soWdcEWwbpfqJJnvrAkXTs1",
  "key2": "65TEU3onU8GbrxatEVEEYz6rDR1CWg9mipvywVDvcTUc5w4abCb5Ra5Q6pD2n3VEK5u3NFKDkkBwQqPwfCmwgeF6",
  "key3": "3CveCzSnRb941ypGYHhBEeC41KNJWLXwvk4LZR3fAWKK5T8Y2NyRCA3JcinLkfFShwfHfZQUaaSGAxQcdwK2Vmxk",
  "key4": "4yBdQuHpNa1b2uep83LGhYwMaMa6WZX4PKim3mLn8c2CnLeRoasUcT58HKoAeJKzn45MLv65Ad1PK3wH93BoYfwC",
  "key5": "3727gds7uQuz1iR79WXYh5bKikEX7AFWwVwmorPNh1De6GmjxrDp2bifFZmBB29RiJvG52iET1D4hKWYYztC18nN",
  "key6": "5yrEQQ49YBywKVSnAnBRFmg6kzrEokrs2AQLhqxjwqtiJ7G5QuFp1MaTj5QuTa9RERRngxbcT3cr3UDcDAKYAiNc",
  "key7": "2tLSw1RxCBtyrEk2322FaYjLh7kSDT4C79CuUAzGx5Ep474V7LHQf9L2UHYUKzCmNoW92qwmqWPC9WVefkK1z43n",
  "key8": "2ohy7wL6txyKP51cM3s8NVa4kngzJCq1xHbBZrxqSRCzmoX8DAXrT4YHe2Nb6yN5VNN1GqSeaDPubrebjjrqyjoE",
  "key9": "2Uxnk8gjo4R5mUbVFAspWrNzbohpD31ms574Mx4ogrfV5b5ZLEAG9U8tv4ePsTmYFHkDcGeJM6ainHz6TPsKvdoU",
  "key10": "DMRgHW9yAUVb2NZQt4QtARJX7tNi4RAhfGLbXe6LMywSGvu6ZVHkBwAXte2YtJycbYjZFNTMEeEopXzAfYZJpZT",
  "key11": "52VJhQM6cif4qRHfSMwjbyw1eu2stZpWuUN4yCsyKYo9pFHHzyTFZuSui8mZboumEHimZue9wWkQozozVh1dxJ7f",
  "key12": "4GWudAnRfS8iTWrHrcCsVKcEqLR3XcRyQ8fWHYPTrVX93og8gkaBkLzqiDLwAjx5YY4Za1AKcfBxnNcfrxW4Ks4L",
  "key13": "52sZR2o6h8cRhjubSVGtYXAs3wPdutVNfGFfRJnrbxNmzRLDZkWEqXDQb7sRtRDuveoEYGe3AymaqDRwKpEQnAge",
  "key14": "64Ho6wss1XJnfDMaDuhoJiw2o7exbqAqexwZUPCxb8CAwfUvFGTqNkerGtEPw2rHuVX3goBjf4EWjzN41RtWykLb",
  "key15": "56etBxvsqkHDYb6YTQS9MfmiN47TfiCtk4PQTnbUH8C5CCjH3s7zukQCARAajdHnJGRJQWUhvueT4vaL3BsASUDK",
  "key16": "3f9PS4xVgeLrk5LYe6CXhiCukE86JBWM2qYE28UKMGSTobPTGi34h8t7xqs4QhMFMfpQQQQraYFMNmxZyKQEGhDe",
  "key17": "2xoBEj2TyAeprXMpjH62Z354K2Jwy9Bb1Hu5qn3wFvMaoaKEGWQDN9JQqWA8p3UYGUJnfeBJApdcsD815gQQaV62",
  "key18": "5DjV4chaxKTQ6t4KAk94HpVkSM4G6LpkHBYgEhxbzDAVjd2Ag2rjWmg57Y1jBEt9EUThxDiKFvDPmhQZkafvHAnh",
  "key19": "PW6wLvjDpDNnAecbXh7rZUR6w5oK5mQ9cKz6Up3PCPdtZahWPfMtvrSpfzoeYmwc7DAYBmFqcruJoH8DeasPCL7",
  "key20": "3uXXpuvaXZnq3VRRX5D4xjMJ1eX12BNihwdfmFEej4PRoLGbDgdRiCioAy5SCjCzM4fFmABddujTTBPwiZ2JzEzm",
  "key21": "2ypckqMJejZAzZdtQqYpBGLaZWgZr62j5UWCEnrWVEYEjzgXEkoUBv3g8D92qdPNFizQg8G3fmBeehXLGi65mhW2",
  "key22": "2Ehn5bn6v16jTuzD9xxtLLcnrveNwLXyr76tB96iLjRrQ3JasS7PECpZfUNT3jZWQskcj3MjRGRvqkHEjucL8wb4",
  "key23": "8BHgXVJcP3TNptmkAcCbvyMY47A8ssf8vQqTwrT7gR6RLVDPDNq4xi8MKMc5tHWLWW9a3dVRqEzBgqeePT9XoQR",
  "key24": "5P7ExycVUzxc3DheUs4hvBPJtiqWu98wpnEWoSNVJmuM1rPg1AQ7tkC29AYZj1cnaNsPoFYiWDxUHMezncmwBky6",
  "key25": "4n2YkA5JQTgq54RmFebLGiRPzM88qkUEfWmih6pUPpxAF5nu8ekp8oJpCywrigVGoRENkoU2NtacT6aSZPthNSZG",
  "key26": "3g72ohsnFSHhpeYrwDwMndFwiBwvpWhGeC8FiHjZtj21cdNaLr8818WfXg4GesdUVXQqgtmSy9SJdzNk9Y5xBHQQ",
  "key27": "578Vzfb7Z3Hu2jRirwfvNJyFGVbsYoqrLj5ggDLXVPbMD3xmVvz4sySt2zAh76WhqRapcj1PB5vp4wFKi7mycNWs",
  "key28": "4hw4MyuycMQgm1WNvSHhZrWpU7a1AsGhDmCVWsnD9LQ6xu6znYoRBoMZSjqZXGtHuAXCKRXe1qvabsaxoJ5KYAhG",
  "key29": "5rYw3rj6LgTizjaiKNnBJhrejnbM3CES1krmMqChmMBomqBwkQ9iFZDcpu6jm6YiMisesNFYHDuwLn98ENRuPsuk",
  "key30": "3gouAUrx4q3AekHmXXs5kDUKLXP9pUQRU5qWM1KmffPLzpLkkNHLmsCgr14XLMfCgzJocvuyvxSpiy1EjPaoYp9w",
  "key31": "85WjyL2oYzgXRFu1NvkqXJUQr7vrdV2E7P1h3Qxq6rf3cPh28SyibTLoxskDwbgMxPbhZ6R1mstqV7q6fb65biB",
  "key32": "3RHCbadDTydWucjM3ujmS5RB8ZQc2gf4cBsvxTqVxooWJNvKRZ7Ak8mFmF4qhgMm5aXbQJykHbqrwJ4ZcmTc7rZU",
  "key33": "66g1xQwvQ8PpP14S3FFw3SdhNvb7xoX4nKjHCmF42iGB2C4v1Fqh3jqFnfimzganLjHWgjUbgD3G1ykAoqzVykj",
  "key34": "5QbJy39RaKxGSspztGN1bC9ZDaCMq5ULULabVT15HNVv44YB48NynArtL2ViZW2sQ3hnZanZ4o33mpQv9UhyNTh4"
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
