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
    "RzBqUC96NVQHhRj2yNX74xPchtz4k3Dto17j6ExfzxZuiYJyZvxHRdrjnWBAYnyovPXoMmPe1JUPiNib2w1BXmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tRP28Yw7m6DevZJ8vKPHuxtfQF2LkoqR7Xg4dhtCaqTs8iGkqd9Kbh2ZTCqqq6xXUJeLzcC1Vv8mZAdpg45MMUb",
  "key1": "3YGmPGU6MVxNoB2VHC8QVX8o5QwNCAmf7PukKwWRYXJDfgmNJnViJsp4ttiHmSDb5QFAUdtDs2EjyxTRnUMDTQKH",
  "key2": "3qd1kEXjpZpfEZWA6c8erab4e26NHtVmiRmSGyTb6ubpRHDALVhK9TViS6LXgYDz3UbVKN5GNFbmfFzg3Gcq9QHL",
  "key3": "5tS6MQmDQjjP9uj7TnP7NJyynvfaTHEGpH6HMAGGbTVJVPk7XrFND6dok4JqwJnSYmKVEkxZR2eB7DzNPAkwWf1F",
  "key4": "4JVpT815o7vnKXNou67SZfCVgQi42P21K4ENWJSC9DwpQJZ1WfdYiZ62faN3ffAzhbgagUBhCXZ1ciphfjwAyLDc",
  "key5": "2DS7QJQ3xr4jthdVVFss2a5C8VEMZmAHaFUxBbWJHhCRSyndJxksWa3uuicxGMVQaKtgH2X4qNoNvEm1HMqHEi61",
  "key6": "4QQZaBgeoEtQomWrALPVy6iDPXSGdThZMFZj8CrABnX1qCEfiJPicGsijpX5Jhg2WQS2Yyt8sT5vWc3Rf2ZzQz3B",
  "key7": "5eDAKBiQAWGCMLbsTmL6X2Yn3kXRQjfS3LJHeXQt2P31WMJbfSKubALVq7BPxo1xZyT4hDHCeiPB5XdEQ8Mavxeh",
  "key8": "5GtDKDfkNcYWYg1GWGDeSpCnCtkBcFD8LWGZgcYrKLBoy4A65d8GbJSAXL4Ha3vJrmJEsoNKwhYAtnFoEVb3WzmU",
  "key9": "5QL6GNkH71PDA4Xp7h9mZyxXSWuN72R7TLi5Uj5xcPLQQGaJFaFVi1jz5JxuF7PgskNjtRoTfeCt7NH9WfgMktzM",
  "key10": "2k6h8mtqZ6E1T1HmMiYmyo6KCTxA61uTzWJhqS44SsCnCdfDaKhouJt9kYAttCuHWXvnR193URwQavVgiK5uF1vF",
  "key11": "23MvG9w9He4k9iotEwvLtb6qQXgS2xPEQUj5Prh1R149jVAUc9QQLzDPTDKBrmcvVK2RrNtmSLNrKygiaDFzespG",
  "key12": "55wmVrUd3xJweeMvhiWhFgiBeJGmzjwpRgzk5u6rRGkLp1mwNvFYuX5ChK5cuudUDXG1P9xdPtScfhUh4UEsGmeK",
  "key13": "uoNJNUrTjdAxUPP44rqqSc52rSSLu795vf29tYmqANw7WyMuM7SZH5K9oNjoUcPzz94c9mcPY4NubSRZeTXPZy3",
  "key14": "2kSrAVCtqUPcrUCZxeZ9ombeK69EwJwEU7B17psfpoq19FwCu5qHiA2ePoiiHipzDsxTLX9DZCaLww2VpnPcQ8io",
  "key15": "3XdEWKYFMXYjyg1JkBFgqN2HfNNjpYn8J16LaQq9MksNpuQrZqvCGccE5eF6w2JztngqdmqkbyBrAMUtB8CbmQGx",
  "key16": "247RSZ4nDHenr3TUbHx9GYCKQ7enkX57W3qMbe2vwuSJDyhfyvUjwjZweLP3PTAPPkoCQg8saQsmVzkbYwBtS1hh",
  "key17": "2qxfyvA5KbWQpAJTCgZeHoARZGhYzHXrgoC9WqqbCtVbMUZ5rebJP8PNDhmnz1ihjyYtpGuTVcLqJjWp57y2WMUf",
  "key18": "5fJQBQwR1erRERD1jgqhHqa3kfrXGNKfUsGqzCjjyZt2hmyjJDJSfLyqhJcUR9ifdHn5rJpbohEyfJM2gKnzQjSP",
  "key19": "4SBrQQdNhccYwuJW91t7WmdEtAu7kNdBjJqMTKG1M7AxV9E92BJY9YSa7eFp8H7DfYQicVYUUZXjAzvcnxdBHgBt",
  "key20": "2iU1K9A68RCvnZAYN1b6zTEzuq8fpiq7ib4zim5UvUmHo6Cj7KJcYpzmf8fa6uBz2QfpoGG4wpgu9MMNkGB16gDF",
  "key21": "5W1fd6GEtXoJt9KYphnGpoU4o98Mq3GnsDvy44D2W7cWBCKaUGzTxvJ7BYKC1CH5nLEVYDfWU1dPguk4M43H1zVT",
  "key22": "4rpDQDfYknw27Vx5P1xpv6zS39TfTWMrJ92gRyX5PWTj8CwthYRdSyQWRSkSRTLvzBJEzBchhqLVdeYN7A4FKc3X",
  "key23": "43sM1MageAh42WbWhufzycWt2ZvMAwwsqskBhUQbFBXd9fxFMTYaz5gFqkjD6P7C9fjLR6KsXh5dZyCPLSToNok7",
  "key24": "3f6fAkf9UwwQ57WxyBXn91Jj7vasNoih5GXxgbTwWyHMb4weNzPmdwyUvZyNVqXMacnHoAFyjuq5ffP3qaY1ewDZ",
  "key25": "5SDWh55Jhcx8UvuDhJMPDz49UViwjrKidt6g3C2BNdob7Fez2ntges5RekbVcSSaoPKZMvKGUKPAae9gzhDNfgL4",
  "key26": "58oGpiPf8Yssf8tzwVsPtTQvedyra8EfxgbtEdyfVk61cDQqtW9SdMp48QALVLEBfNGvsn76bF7vH5e44KQ39X9X",
  "key27": "22KapKZqSpMRjBZXU5vCyacrevrzwythzNfKHCxMzcLybgcue3KMepbTP5XhkxXbxWzvm2zgAYYt2aajx9nMnYW1",
  "key28": "2vbPjyPN3LCGjLQFpSYF4gf69rsTHDJQsEtE3WmMWr9niYbmQewWXtDUjkRCLHFxCxH5ZKR6dGS21pDXFJy7PiGw",
  "key29": "3dALZ5dhQZE3sLynHaxhWE3VDS2WW9gQKrvb9Ztd9iv6QEQMgz7yo9aZSXk9YUuKKTdHdd67xkqcZ2uhidwEzqpx",
  "key30": "3RkJUFUGZgs1svNRivMxhgCDHxuBeY8vtRb6pxqG9BaCYZPcAeo7gu4c4ETuj2JBcQYbhmobPHvj6PudRNHWzofT",
  "key31": "4Xqdbr7vBfSPb2af4qyqgdfdijDncM2cAjUFonMzpVhRgeXcyWjw54ZRJVGfbdS97EykwsuoqQ5AQMDTXXdnFxcS",
  "key32": "3fDbUK5iP2rwLNLbvdnus5UwmCuTEQygqFWxGAhKqnhiB8DiJoTyEy9VvrU3HDc9AFZ1TYkqmWMKZ919L3TA5hbc",
  "key33": "3rMYndFhiZYVPyw3jsFQ4LDwvjnvR48ryf4dPbWcTDxbSwHHMtiC93gNjZU8o7prmEDE5cErdAoakR9GD76XEeTa"
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
