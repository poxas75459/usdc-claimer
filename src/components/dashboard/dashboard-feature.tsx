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
    "2E9XxyQTm8jrubYXmEKxZE1zmWyDzdhFC9Dd8vVC8ZZEkMu76eKsBsJNRo18P9LeCSPTK3DZtcVGmumMz1dmG2dC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GhSQx2xxnZ4pSf6yWu32KgGYPxacR5HaaLeatNVCNd95tLbLrKXPatiYrnn64sJUAgdYG9JEjK5uqozNkhW4MfY",
  "key1": "4W4Gh6bkkrAsjC9i3xg8RWhdcatFTep47YbgUDfyKGCVQRFkhW2ojepUazeajq2wBVAkUnpNij77caxD1jSyausf",
  "key2": "2Jb8W72QbAWkBL5gZGoJPh6Dn58nsTn11MfWhrYWiEvgrkw1xkmAEaxzPQ3zi5kAeVTyDYEe2HoNcC6jgwVec8cd",
  "key3": "27Yh5fskkw95aG2TYYUFFs6SXb5Dmca1mkKPAPLrp7sJ8VCq9se9mWxLkPzcwU2T9u4aDjhGnp9V7nQhDiZfGbUL",
  "key4": "5KtXq46BuA2UT9MMkKtFQXKwee4JobNEV5bD4y2ttzwGHefWTjMAEfMi9BkY8szNK8ALm96Qd82uJKAqiK3jyDLy",
  "key5": "365SWyTwoyLHxNo2sADCSbMgGjc8e8GHHgNPisHECT6L5d74W2VL5B6d6RtSvdNRYLAGmzhPE89diBK2jLo7cZUD",
  "key6": "29dKMJdNS2Z65woY7pL4LaohkWxUR6iEEbWS798wyMjPe4nF3sZC7KgWKKdbM7bwBiFrpzNc8jiGfes7NqiNapq3",
  "key7": "3MGkZSWimxdwj1LMEDNfdz1wBmWipNJ916qFji6C8msY4Y61fbe79gLmyww2xF1E9A55KbooWgxcQYnx4vZh92jM",
  "key8": "4HWjesFVLjrMvixfGoRCRy28aX7a7rGUJb8TH3qm78Z4dHnSA8b1EToEVH3daQ2uDbYo41Xn4AK877mWW6R4Qnin",
  "key9": "3YtHfGBSBJ1UKTbBKuCHNNZoKVTFsLYcBQp7whBhbNLpxt1Tcv5ky8TTgH3m3YSKbTHb4PTpiNhLNy4ZoLhZE6NP",
  "key10": "JHxoA5r3Bw4dXqziyXeiMycomTBju3EexbDHzHbMAxkXiKqUpTiC5fcyJMUM3C2QNCTf6Gh6dQ5wQSxnKpgxgyD",
  "key11": "3wFxZMEi6Qfy4ifJKoy4iLPHohaGXygbEPAbPNdnbVZGxLFkzLi52tc1b239RSVzo86KyAYmDtJMZeME1tsh66ZA",
  "key12": "om3HJHHiKmQWr84v1mPmN2btpF28aybMpfg5isTF9eLGkiwniWpLi5oEWw7Pbn2xLT7jHndFSrPjUGxpLaFBdMv",
  "key13": "SrVchLrtkBnjYqj9cfUXPsYvfC1f4ZCpU4Zz3QkCXLbWP3ERnyJMfHE7s9bpc7qtMJ7Cav4GmDqNxkS7MNRCShD",
  "key14": "44eTzPixaBxTFAQjwCK9XMmho9iV2Xu2X7wc8AUi1wzbCGZ1D4d7BE4PtPdqumZvudx5oyzFX91vpyupykuwXufM",
  "key15": "5vysiQeAJRg1X4tNv2PUboxCQAPAtuB1qa6EoRKxiDTnzUtNF8mqe1M6bzXpRjPK1F86SLPbUHUriaNtPWiBpNCA",
  "key16": "4TQ5vvsyqawE7c9Dzap5WwJUYHNfyDyC2AFKSN4omn2UgRpPqBGK41L2vdmFUhPyfH3UtR6YZhbUbho7zTudTLYy",
  "key17": "26U9d7nLq1dPPtHfNqP5kTAJZCy8P865iZW3ig2rpbBWPb5iQe9wBRvWxWXNrHrsASVrCrJbGBiuKcoamGiLq9an",
  "key18": "4GSdkjhR2kveAQokqzugwRS7WXwfSyBDCb7JwknfKUYU5xCA8BaQXK8HGEX7zGi36rhAoqHMWZhx5qGFEKdruqoP",
  "key19": "5fiv9msRsWR1ht7Ni38R1mAtiPZxxkQ1W6kmY2KLgEEvoBNBD3EbqT7F8ttjewefMmGf6WWoLDMjTUL6zdjJjH7e",
  "key20": "TAuLsh6Q6A8fgAkQWsoWGgjrAo8b4TwuQtLGDdscyunBFHyVS7f48uvCPER7GQe7MzRTYcHDsoSasAj376778pQ",
  "key21": "33WFJUAZY6a4wWNopS9E6Prf6WV6765pf8514PEXpvwwT9BJ6WKmfrbXWSa1XyC6uAU1n7iZxmcwndwLYRLv5LKW",
  "key22": "3AsnxnqGpdJbsnVS1aYNXm7cYb5L9wppBzoD5eYGdZVeUiYGP32WuQrx52GxEivrSTHe5dhP4RrQrqDjvPKAZrPM",
  "key23": "htjDSyMYH8wt6LM98GeT8LVPXWyfRZiTFjEkBcVwpgkuxcV28TA5zgs2z7P9q6yVm3UE26zBhuoZa4yWudjiuCQ",
  "key24": "5kRfNRF4osweua7xanU2rhAAg2dXVGVe67EKfRcj5iJaMzuM4jJ5sCokcdxTDQP9jrE54GhSJW1ZU3iQWJS4SQqn",
  "key25": "2cUXhRi7rx3c8P3jTKoWsmt7DJLLtbtVML6RRh8dTqSZHfk3QYZw5HmzPZcC4Gk1vi4cECXRLHpeewuU7pTLcMp2",
  "key26": "XE9X4ibSHRFwQahwLx3N55ZHpejJxMAwa8z6zfAqQfE93LEctyaTPqCvSpRtSCj4zJVj6zhDMNRdbu3Z377PS7Y",
  "key27": "61YthEf8iJBBzNxAUXbz5RaeCrrtpNxXi3SXB2v7hto4aPTrsUe5vKHGKdAytLFZ9qHVsBfENjvvAAWr6LMojpyS",
  "key28": "3komqBrW6QZa5hkNjy4h5csDJnDzFx46XrmdU1h4kZ5YViPywSKLd5iymQe964PvWx2MtQYDyaooNiwJTLAAX9ce",
  "key29": "4EkxxRhoAq2wZyBEvRSqYMj5xheNdP3nNN8B3i43XSu6x3homJdPtLsoi2uab8XQgdFpmcGzzcZdUr3yLth76AhK",
  "key30": "umUXg1hk79JaPCiSP3gLSkKP4aFd9JQizUi2kCfduvad1u7e59dSCniHQfPzCCMHm8bWTQT3AS5yxxN2GojMqbY",
  "key31": "Vjo4Q9d7zSSW5GUtwYWnVsU8UtSsazFzm4JrTMUKwFTCPCivQWd6sPFG6MUEAGGwkmyKhHhFb29o7MWHF3JcyAp",
  "key32": "9cs6iqZEsXBEQjjUzv7cPAGj8G2j9viEKywM734HfSQtY2dhHPNch8wM1pEcd2u8W8CTAot4YMpfW6P7Lt8Uboj",
  "key33": "Ukjc8aiahAdR1XyVqxA74tLREWdQvfFZgFTqVruwjdxXnrxjAnYWEzkZNKuZc3L3izXwgESLsrMpZxAu1h75fBi",
  "key34": "4vajdmcKZcGEvbSt8bgfSjcWYwRsMNBwfLQJQE7niTfQf8ZBPJAanj2UUE8QJRckTouXRkamjzKvHfZ7JhaHzkUu",
  "key35": "4dBsQDJsSRrRwGD2Nec9ktE9UTM3TeSmTYjHq2CnwfiungdYuKPeQC8VcVfV8EzxZ4V4oKnJeX9pXaRY7qGBX9X6",
  "key36": "2BVbeV1PmTnvjCanHBesqFntnuT4XBTAQNg7tc1RzqSvX1vKjTSzZS4NE1WSbWknnGiwHiypqfA7uWdeyvsjrkSV",
  "key37": "3A23HKftVyzRHxcwcBK3Gqqr6ZFsVBKjsyTRcbf9g6WzH71Ty5GRieDnezTsCRHU5uuEFQZKBPWPXVcRShH9bYgw",
  "key38": "5oYgbH5cP42nxkJTBCuxCpSzvPuutn5BDjz77aGh1FL1ifDWDoQWn6kWDk4n7iWWDknWUpFA132wXSERJNF1s2u2"
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
