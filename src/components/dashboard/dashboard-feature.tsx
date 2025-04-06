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
    "D9dQ31HHqE5sCmmMX5RMYXcfy8iRvTtk23nJJywZ6cYRV99dq67PBKXayVKhiuk4L4eMUdmcT3nUQgcZvhBgxy6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9epV3r8UzBG5v7meiAfYAM6AWtE51nBXGpQeCaYErwX8YBfLXNm7YUF9A45Ko77Qagv86Rqz6hBQSagJhLx5XwR",
  "key1": "4zwUXnNtBHtwUxJW1zX2xUE6n5dM8vxsWBzPeNjaM1V8YQ4x4vkRPomNUL7dKbteiS78fenQ2Hv6o8wJifiPDpwK",
  "key2": "fFdb1qBukokQ7MAHZ1y9sc6vAn81sNQxNPaZnmrzSzFU2Xjnjq4hJf48oEgVcM3E7HuRbgLV6VP1NpUpx4y1ku4",
  "key3": "2QzJfizQx9K4NNa2znSYyxXpKYjPNxLXmCXSyX8U3XfdBgYtfQ6eu1LKCGTt9BFiFr53oifknrxsd1d8NJ9BTdpw",
  "key4": "3GmEhHyyuLeGUrmUHBh9D2gfGmyht54W8jWepw8sL5tt6Mthv6r17aju8Uw1egrq7RYwwGvdYq8XKfrWRsFkWE7U",
  "key5": "3GSRWrDPJ2jYpMa2RKc6aNvYhz24HjEKdgnUUBMBavq1g6zF3NHXND485GLhWEgAVLngr6ygFxV3hyqqQxbGSLao",
  "key6": "BYeiMFuVmsTVDH9zq9Vy26hZ9w9N5Zxty6eQL43w1BMnBoBiEspQ4SfMvetAcmtcmzs9kuxztg5zXt9qyqq7VCB",
  "key7": "5EbWRPYj1QpXvSyMLP3dBLbNFfUDdE1k5rBooDHxaieNegNXqVNhus7EPSX81a7yHrngHnnvJCdijg13H9YrsANf",
  "key8": "3VAP9TQ15GjpK74U4vWFVSh4hzwapsQPiSWbpGwqXRvF776rCGDdGW4Gm8Haawm78FKNZEkhZqFGyEF65FssLoRm",
  "key9": "3NbeFNyVhArXZsKvSGjRJ3nS1DEM2CcVqDw5iKG1QSMiYJm69NACugd3kuah4rEzHG3fXw9vqMY5p6KWUMjPMReP",
  "key10": "594SrhLdSR36LbKkrCBBLbGDGwPtW3JYWHU7mpyvdKek6oPa9kTYdGPPfxKT8WvxDKDXafEF33oAR7tmutwM2ffJ",
  "key11": "EK7sFmq4eyjRt3YHsE7dj7QakZ6mMKoCpJ32sJHV4oqLfkbePHHTwUXKk4VjyVx9bZwtpwuavPrMXjZyu2LHCtM",
  "key12": "5AMrXavewTWPi3SqfBWyW4P95X9XUUeR6CaH5CRBHXnUZqk5GQcpoVSTR5KaLPbrZKpRPEyyauRcVzk2NSwiXE6k",
  "key13": "3Zezqg1qoxiLqZmSFFjdQUEHbKsjb7D9qWLQuR3X5eDRLKLoceaz2wD3HMFnyqrrsDkPVTLNnxrfscFxSBVz1GEo",
  "key14": "5rSejAUpTUvJsfgJGbPTcsKt5TQsgPyNmFkhfDifkQ12UhbCoaijyY1Y2HGb8NTmB31ob2t5W8dTi5teooySJQyK",
  "key15": "2fbhoSkyVBfQZ3QkH8rmxo3n8dmNibThnEY7Yu9omGq9n8FWTiRgVN9MgeZ1htC46MUy8bjSsApXoUq8GnXkQiPd",
  "key16": "61dEZ6Uqp5Q3FDohsNoG8czFPTwRBV43rrenpsLxUnpczbhrWb2GPw2L3tvaNYAZYJgkesfhnqN8ttU1baa5Q3Rf",
  "key17": "3Gi5xpiwy1AuJeK1txSQmiqo9QjZ1RxhS5PPPf5oTayNY6hte7W16rgkVcB2jYmXcLkgYNHz1AiVkQhk6AZtb419",
  "key18": "2UCcUs4FkBrLSasb9rf1MNAbKcBZvXzQJsXnXjkMmZWWiysUeBC5cDbuzq2yD4qGSv5wk1WirGhCLk2nePdUbDMg",
  "key19": "5Gpeo6V6oxvofwuF2YCRbmiGQXbWc68CS6UtNLuy9qBMp2cJM7Kx4rQe18tHR9U9JuB7ZNgPRT7gpw2HB13gYNQp",
  "key20": "3U1Jjf6p4oN134YN718VrM7ahBtXpe5f5CeLjNi7giwvfbqX6wsbC96fyyVxSg2LKyLF4Vfph4s477AqkkoC49oP",
  "key21": "CHkqJVaZ2itQrmxbN47RqshQQPVAVidkPTCRFBkX7NL5Rx7hRCQVN4BBL99oXMFuPJVSPF8yPUKJUQLtcvGKXXz",
  "key22": "5VHoz76TYFGrtbH6Nbf5cPv8g4EFyjgQ3PzbMemhcUiSWmiyXZ4LBKpmUxjaA9fww9pftc7VhhN6wi8Qd3CZhHtF",
  "key23": "2HsZ1ciy1Ms6dKeKk2nJ5wXQRoysLCvpZVPhzqWdD8b3eyFxtoA8N6AmfyVS5XdiYmz6zaDSKjZuYL8yQHftU9EX",
  "key24": "2VPa6gJ6UwjmQ4QBWVaMTb3mMqyR7ZeXSVuqsHYhP4JJ7R6SKuUYVFw9tVtPBMz3ibbdUeMwd6kpcdTBJgpXxKqZ",
  "key25": "nWLkGoXqwXkQQTMwxmJ5NS9QBraeivLkPZzKzpUk7sdoXoKzv5L7YDvBZ632PCjg4Pw2y4tmW6W3LjHnZVfYYYr",
  "key26": "3q725XiwvTBgn1RrmNLwnnry6rP9hj8ePbFnky45eSRpELSvfMtyZHCU4TYdi3MYRR8CBCogCHHX3a1NWzE1YehV",
  "key27": "KFCK24Rc9HC7oRu4JJ69T8RCL1sc4yyaeyD9hqnSu6upx1GiGcxF3UsXdKAnWzJaiXD1thFVpUVtV18sc97qaWz",
  "key28": "3dYfPeUofSQ9hfN4R58iG6afxwKBSXB6QbhBbe9PthcSbNj2moFojS3bcT6x32bbaUuhD2CuzbQttWMFhXnvqzjb",
  "key29": "2pZo5u5Fkzfffuwj7qBLfPVhpUP8mfYAai7SbhedFmj1fke7FK6ocMxi3aRJRL1n5naBU2fQTotMuUKMWP7ovWeb",
  "key30": "54fjXjiAGMrQYm1VhQPKwrr3oSWAg1Jt4hwbVHyHx9o3x5pLXaC3TYU9PaPdLYkKqdGm1R3svCyKGhHc3U8i3nbL",
  "key31": "65R9Nq7LTrNKpgKZUDHpiauwNURCeJp2CDZwP9mTZYY4xQ7KUfnHzPWuzgQopobm9g2e2D3BB8sK7zyMXn4CPKD3",
  "key32": "2UUn8JYvnYCAxe4aHDdZbiYW2mc58f5kk7oVe5wVV1CecVTBbdiywAKsyYQLYyvu4hPUPSL68AmaDQczabFzrtQP",
  "key33": "4ELuTbc72BojGAD9gEnzSXaZDT28voTDv1NKKtWaW7JXRRnMSNcvANKtS2RNHqhw4Czvgt5XPGRsWSExseGMLmJQ",
  "key34": "5EWgMa8sUFM5Rh2c33X8Vtbxr6a12SEKPJf2s7zEtko4GoUxijxngxkBXVDABCqUGV1bpbYYHZTntSZRjGpQWb59"
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
