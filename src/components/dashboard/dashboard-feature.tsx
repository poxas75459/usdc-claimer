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
    "4bZiFvozxqrCRiBiqquaksod2XyjBZXASWqRFDjPDJH1kCqtwSr8QozmgyTxG3NwtKHXXpRkXh2NWr5p9Mppj26P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZjhH65ycRxZgweX7ZZ1eSn5v3ZoyYiThWL8P7R2XrbrfgzX3P5xbXXSjosMCBzDdysZiKieHfyhx6HPPZDcYNiF",
  "key1": "2xJhzcUzi2LdVAPmbwop56WGhnDWcwZgSrsHrKA95TEPZZPK49iWCmC4NqwAv4WcT7aTuYf6izQyoNaSmyUMte1x",
  "key2": "5ysgbzwgLiMMyZLXZy3KivZsGkUoMZ2wCACLgN1R7sbPWncsicFseMDbFdrNfbX6B2HGhu8PkAuGEZWqxAUDDGK9",
  "key3": "25qXNFvvM8NJE48xfomBK5mbcWrNJbiet98zakjjG3cwxwHK2bUL1xAqgs75LPhxUQpRR5tWsq71DZwDmG8kQRCi",
  "key4": "ASpCR5gNg3FiyN7uYASNkG32PNTsUb6mAYEuLDPdReFLt1C5Qz9xnu8VwxVZ6QLaYJo76wb22Qk8xkbKnZFf3GR",
  "key5": "49MEPMouNURo34QdNjY9741dEL5AyHGpQHGeNgxhTQ6y5YweZFTWMLix9yVdT92n6v5UZrb6VegqEVxBsisAJ6rF",
  "key6": "4zb1yovuLVRVgbmJLDCYKUNZj5giWSAF1zZ6Wx9asXh4rwyyR8h4kdu1y8HvGwjfnECP69mkCmwpCneyjRX4pb2P",
  "key7": "AZVJxjQsDYWMMTaTFNr81WgAfeWPn5ZcaCXfRpDvLanTTJZEhv5tf2mJwvcEyZU4bcirZmgAxQBtJZHWSfE67Jz",
  "key8": "5e4zXiqKmjUiZpRfQEXTjPur2gkYw1hbX9igohn1TvJdBCWL1puKK7xk7nYFqJyQpy6FfK4TcfZRXe9Ge9cYHEZM",
  "key9": "3nZWcTuretJPYiK15zsR7QNd315vhqHqThDThwxR5YRrKcLB6yChcoD8ryECzxyoeYweK6L5WpkLpkLYpfX8Bav2",
  "key10": "49tK8xcWoZgUGxXWbnvg18BXvQy8VcSiV27kbgjQnCmZR7LCp1zuALdzGvZe42gD2KY3bfP9Mq6Z5Fiqy7ZD8j44",
  "key11": "2frSKWFCpdMo2fYkkMoLfQLErKaWNkLkKfT2woppWecP6JTJ1Uxx87o7B3igqQZiNAbGDW9Sj511hhtbmKXhSASP",
  "key12": "5DcHbCa8FP388CsUVWbNSdCvkccHwAfWjGDQuoUXiVyeadeSA4kRQiWZWKhx2FpZt5tB3xXrYcg45iFL3qUijiGg",
  "key13": "4kzxwwXEdS2P3mf38PXo9w6JvbNuGxsGD4Sc3LBoHjsBdYYKZ6zpb4VkNMfDQ7gVpRdUwLGMkYgPjb3XoGYmrgqz",
  "key14": "4cggwcZr2bKWPFGkzpxqGiyp9ZgZpHSSwEAchYhXtKpaSzixqgX67MShFnRcngip3vzdZGNrxW5ek6uhuMsuve1J",
  "key15": "3m5CcbJ8N14b6Y8GMCrFVjQKFxHaUeF8WFb6ngLwiMnJn3YDsHyzxtnHDuV4bFh9zrae8owNCCmShmZyecBfm3zG",
  "key16": "MDzbu5Jk7ZomhCEydkfXFvDUzHRhcTKREahY7KMWw4JHyP7adiJR9HQuBJ3oDeVhZyDF4SD4Kq3wmvj8KjfyD69",
  "key17": "2UvvV4AUUSyaouDNTtAFnTboaoHTSsu4tsAVEm27BqJZNRTKY4FxG6jU435RiJubvBEujtP3HBJPDST9kfbiNSoG",
  "key18": "5icTDZ98FTwG5DATiGLXviZyWU2dELzmLJC2PFEozDwB5GekcvmXBQJjEBDskFMJftE952pS5cjYJ5oF9dVohQrs",
  "key19": "xHkyz9cJLuxdgMRcmDoPmyDNxndY7sVy7NWKVpqDLRNCHtZfGCfmPVMiGZUFJMRAMWEKpWcTN2PYmmjU2BSxo44",
  "key20": "5UJcuzrg1L1dtHjDBLWJFa8GRJCV5nyc1jegqBN9chjw5YzefNFCXaH3FgYZqoVBxNHyRPPtew9FsL5RoCfu2kkY",
  "key21": "46SLwP8i8XAEGCzRfZxU8MfkbjPBECNbJSpMFC2tjYooWHXchyN6JqU3f3NgdSrY2WZLhF1TJuY8BcSVnVCuzWqW",
  "key22": "3yvELFpuxjPqSCWQA4ANCceMiMKk4y7UQv573uFKLYQXeS9mMjFsa2jUugmKwPM4AmN5qQr9cgzQDAKhmPYJT1xn",
  "key23": "5RYZEEqF9UBYNPAdAi2KLnAdqE5zS7KAaQg2Z6LugtVAq5g8VjefbtAdz1Tzzi4pAoq2t8pF3NEyfB6g2tmtgLt3",
  "key24": "PZzyG3h28afDCExkTqdaRF5GgCgcKXrFezFikJTznFdqgkH1qZcgqwQ5Y1VSWFM2BGMgmu7xhPNYAcPkratwHJd",
  "key25": "2GYHNt7WviMkyYXfDUJ3A84PpGysy2VUi4faYJ4PC1gwef3k1UL4QDzA4YyWz62cBErCgRacyb4SSLb92kXQtb3E",
  "key26": "4qvXHdEFwZwRnQufsN99gLNHaxELfYJQvSY77thkBSguC67FFXLPhMEDugZJbVi9W2tW8ZLXmFKn7HSoMxk1LE3e",
  "key27": "3wHXuyLax8PPEwQGBtdjWCwJFeEtRPaNhVydLEhMgGi1FM9FbDY5wkCpvvwYEsWE7U4317d7zbtZmiPzLuiJi3Vk",
  "key28": "2yeYghQkU1rtsiVbwHsAxHsn7d6UgjMZBzmUkVPoSCsSQjYe28keXtZAB4sbvRuEijTzcwaa1AKMQDHoztcjecgt",
  "key29": "5vsHgm8HZty6QCjVg9mkW6MxQ2JGWVtKoWFdS4q3LDXVtSmVVH8Z7EP3ct5VG6X3nAgvC5X4QbTeqHDQPSHBdh6Y",
  "key30": "5P3jnJa4nnhoYUgFaAonRURFgycNUoJejJW1DjC8eMvTGT55c3UXA8jsNLdvpyMiHf38nn214rGCGkahZPHb8wwP",
  "key31": "4udh2BPt1XTG7Y63V8LZnxPoRNdeUE6Y2EJeDZmU7vF7hJqL4e28E1GrRSwDfwPTww3hdxK1xqMd1xGBpAb1U7KP",
  "key32": "4L7SwoS9ZuFfuS6MRLsryj2WYgQ6f1ZVP1q82NW3JMTRiMiobbiE2EAPgiySWJUCPNyytRzJDWVLWj3cAVC68si9",
  "key33": "3jshK1hU6rjhRjbHtmf4vMKGiSKoB1mDH6UNRaGUG2sPoFVmnEJW9TEuR8oQ2M62bNvTLRsVY8tEzB2GWHdMtLbS",
  "key34": "4AG5od8UfcAvZjTXkqYVJJcrD5U4PRfFnViwdBf8qbVTuDCi3pB6YhDVMUNgKqikV6HdNgd6Uge8GAAJtccJX2NJ",
  "key35": "a1J73UnSoyVpe25h73FYVFRQCn98FBtqNVTS9fWrid948CRApZ2ZK5SiwGR1FHANupGgQf9NBRTDrvFtMDhPD7X",
  "key36": "5myYWYtao3sFuk9bGuUb8rx94Nd7pJKEHj73qNhgc1iKmL3c3pfZXAKGnryWoAyarpgdTeH355seVUUmWs7KE6kE",
  "key37": "5VhfaXnakhvtj2WM7JMfwARKADBCXLWsP7EUdaMsjFaByZ9CDtoCZXSy3GBA2hNWz7HdWQw8VyUu944ekUXT6Cr2",
  "key38": "3BmgARvTeBerYPBA7AXEcueXUVKDsm9DnPMh4oLU44DuuBBwbnnRcZe8JVvKVHhUbhbvNpWZinV27y8E1L6UXiyv",
  "key39": "5GKd2ySnjd2M67XUWABj9eHBm2LmHAEDQoUrpwcAipB5C5sKxdDfJ238v9Dqsms7bf7wL8ARU5AqMVQt57LHgxmE",
  "key40": "32hJrze6zZTZkfrd7HnykBSfpRQRzbZCW1JKyWToJ3Uk37AecyUaHcszRnFAQjMw8hJRhSokdxhzv23hzsVUVpmq",
  "key41": "5pq1AeuBXN9TNnhofhuwL7YvAwjzTbmnXv2YjGkfvXBzaegPkdJuuhJb8xwCmyNB4L78r3EKdnqNUywa4MTTZ1jG",
  "key42": "4MAnzs5BPy2X9Jg9SvGGVXeq6DqbNYMxWHfEc25UP5FC9Qi26zkWzipokq74BXEiSuZSggNzPaym9vQrDaUNGAZY",
  "key43": "32KDPPTQgV1XVyqq3qCQSEXZUkLFKxeuBafKTFrfm23mNoKdwzGq8mFHZ3VHQs5ViuY2prWBPjnRY8w5tgAojRGa",
  "key44": "2uWXoTrKjLU3PHsXqHN4aSNWSBFPQyPWeovn6o692nobFd8qXrkune2Y7Xft7CEjWMJ6ereQ65srsr8F1AYfDsr7",
  "key45": "4HG5P8Y5vgM27fSo6XW9uDHi5Cr2cTa3CMN7AnEVRL9aTCP5kuD5ourv6mfYmYgbv3WUZtgirtbAvb7sMBJpnuHm"
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
