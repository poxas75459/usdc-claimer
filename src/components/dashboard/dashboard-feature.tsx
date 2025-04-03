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
    "562pbWXVDXod2e8kJcpkzJnEmefhnsKbN6YBXeMy179MBpLgXjMuLjA3BHhGoqbw8t4KwqAjXnuVF3ySJyYNxc3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GBnckByFocwJbwBczHvTTWJAgvticX4P2tMoysmzYLDeFPXjHnGuBNLxqzQSHHn2eMw2xmQXfQzxJmoXkabqV4d",
  "key1": "4Qs797huZjUzEgycanXkxFZef3eSehiBg1FYSrWVMUHM6gbz2FzeMJFr5CuMoXps4mA9F5ezwE5fwA5QeeGzHxKT",
  "key2": "3ppWRRw4GX6vdSQpZ4ys2Z77FPCrbSoq94anKaSxkd9CZpEce4KZhVLgs5iKSu71ACmePVecG1NLrxyaUxRqEa7b",
  "key3": "4obNrx89BEhae9F8WLE6pyNv9mAnQhj4vjssa3WWup6MzJhZy33FiQsh2S1ZyY94xrR84HMzcYDpQcvpLEEKD9U4",
  "key4": "3UDSXjDQX3trPsocugDXvFEMd6DbzcH7EZoQMvJfsXnM8EbBZVCySbzgtKc5ZQbEhphzLJe3xWeAN7Lj5RdXerE8",
  "key5": "2EzqMbeYE2CHGwhZyQT733t5T873DJNwo4vLgZVbyyDQQf3Bx2h225zqppSK644BFXvcnwxza3FLLnZdrMFJtPwp",
  "key6": "29E1MRkbdMuzUJ2uvoUokb2b9jcjeJNUvUjcQGEnMWRVXEJ4dreiwK1dGnH8eUXMNAsta7kYRVf7sKPKpnu42ujQ",
  "key7": "3knBzhFsTYGioH4mcLXx4SauRer8mkanqckX6PkbKRSPhYp5qEs9sjyPzK9ZkfZE7qHuy6d94hxJdoTyb7x4JwFW",
  "key8": "29FWKhA656BxSe3zjCfp582mGXAtnjZdQbrZvyYjnFdMPnjyu8MWv6ZjcEWtVDAqPMWhGi3vdB3mRNqEPx5eVp1E",
  "key9": "66v6zw1sAcqfwKDLbknmxLgFaK4CuL11hCkdCC5jU6fUaqgYgo5GzJ9HaoBw5Wr6LbWsK63b4D8jRwU7A35xCvtn",
  "key10": "5YGCNjspdE2ZcaVu7116njofVyLA1RdAAtC8xwHHvkdjkufZQG6iieRMAeNf9vceS5mBmeSfSrAEnumzEQruHjYL",
  "key11": "4PWZHayW7fdgKnGS8T9sXWDyhr4F5uoVmzDATWzqdvhk1g2mF3hRghfHXRVpDKRHonpxBqpS98q9DTa4S7Wb1WJm",
  "key12": "vuSR733pECMVaX2iUirqYpDvvRUiSdhir4u1FynmVKQpqiVaaqetYwRoTJox8E4iiC8Bdz8VqnNsU3ohBH88nfJ",
  "key13": "3Y8fXJT4hvkhHujQFZbqNX3T2mcjGPYmFcvzvzpRUk1cUJVdqHsxM8kQ7DkJuwru75kajoXsiAwivFRoXBotLGqw",
  "key14": "hrGr4XEPxxzC6wx7dFhNjXZE6dsD1fs6NntUpWsBzc8hGmd5FDP3rLYk8PNZefFm3SNMWVYX6BnP4VrCLxaVJAF",
  "key15": "4Td8uzBU7MqbxseR1rJLxvQ5P854yrPjn7sTrvbdonQPZvif6h5TUDMLKZF4vKRq8dmkNfyPEhK5PQp6J5mAZhaM",
  "key16": "4wEn7VaDTFUjN7NBzJ4VYgGbunqakJv5mCRKAextNJgFgaetVo9RESzaeTH8pxwhYVxzso1BhgEu7AUR5x5k9MLY",
  "key17": "3zuLnZcy1XdQ9xbdQjhiw8QYnJgg628FeZxrjHCPVG9xgSKTQ6FAjfRCXspPf1LCqYC1oHMivF5LgykvAd47Tctj",
  "key18": "4g8eERA4k32TfZrB788UxTPvF1jG18STzymuWvVrSbn6DWT3hm2RVh44CVbe2cVY9WVRvruay9m7LDUK5tVvWjVi",
  "key19": "5VHtmg2t8tXsZFZx1AiSpWtySTpZgqK2tkv5juSvKPcwVKgyhfNzhDSjSPKPTWMFAXDkGnPtyYZTcEgHb9Hpk2MH",
  "key20": "4gMtKXgCB4MY8KwusQZuNhV4dVBU4dwPn1dBjUw54UPboYpaTRGRHvwLKLx7iffL76g8rVwG527w2nswGVQyLiGR",
  "key21": "4RF4BxQMF7nGnRQL4wJGced1zp1N2QDWpHBqMpQmt3F1VP4eeXPvM3qVHHXzGs2YfVpfgvKREx7ZdrWAUdRqRm3e",
  "key22": "uuNKjyiwBYE7qwCLgUzXsP3USL7fixaRUqG4qQG9Xpp6XNjUxLenbd79M3H6QAoiQ5UpycwsQvsoeCJ39NbczKW",
  "key23": "MofLAJcAQEUnR6ZRRTBrGDvtYLzV59KyztmW4BbVxeHNTvNQfnNpHMu8WKsKxtrcT9Ym9bWUSsooj7KeKdkDc5e",
  "key24": "3y21ZSpTgnPoRkrxmvc2DpZEKPbYYBVibusFEDoGHGmqb1eURZoJjzN1FaF9Hv2TxyzthTYsPULAw2gS1mkhsH3N",
  "key25": "3FeYTiGfAS5BWvrgzYXzftsVbuDQcfGEtAMZ3Y1gKmj51vYCauZx3rxqvCJVUv9zwKM7se5MyBBxMQwdtMMcFMTF",
  "key26": "513fwHC9pHbk9BMyw6xacRCNmMu2EfrXqCxQm8eMcyRGNruQwro1cSM73ECyBRRboNjWePsLWPCZGtDkVh276qsU",
  "key27": "59s6hRzb6qVNeo3QhCM4wELRrqbpn1xJ8CZxCHv8zWG3RMxoXRcv7mqychuxrKSemK6yzvGeKsjmBqTPSdfFJz6S",
  "key28": "5vPtt7gwENX5LLDjSAtHrWHmz7Zbfm1PsVBocLA3j1ffE8UBVR92E3Y7udfGvUsziRtTBv5DCT1cPSffEpp4iKMs",
  "key29": "t3EQHkaZoyJL1HZMzUQB6P4SkSfQDUbMWgTDBopWvFYzLM4EpaKjBwrc1Vff34rmGQgHGynWf6P7nn4sTfxk5VA",
  "key30": "fSiJkdzYPR9sMLu7NQQZS3r27HJ44UCAtc3UkznWMoXPGX3jcKjGvhw86TxBk7LTgUrpLWxs5sjMoj6HyEBvv2Q",
  "key31": "4oR181feP8RoJM94Mdb5d5QXAef6LmaoMsXdwSk7jzXg7eqLRYMws5Kft9UkNksQUPyCBX3mMRVhKe9dGdDyudr6",
  "key32": "5SEf17Q4XL5gC1rpuvCqtNgc3biaEbhV3CSMz28YU3qtgQqCHTZ7ZaGCUq1znuLPAY8TLEWMxqmPhUyEvVf4G9KZ",
  "key33": "3cwaCZV3naoyYw6ZBXko97c7CmgzNh4By7bsfnpkM2KWRp3rngZxFQhZvW8Tst9LZy4x6auJzaBmW38nEz7Jnngy",
  "key34": "RyqDezF1ndWvj25XvX8zBFkLUwakQzSMWdYZHwg7PsNxJoYJShw6FYBYTKvQfSyf53subxDgufw8iK2SwP8Mrv5"
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
