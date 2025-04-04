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
    "4sw5p661jCd743VJwAnsfwnae9cT4W8fukgxZvTsWjwQpYsCLmQEtWzm8g8LCR5B5VDT3Ah8zTZ7F7g3MENm7e3V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fPuxj3BiYDg9oeRa3zjb6gQr5Csqk99N1qhNpKbQ2cXtMFRDxFo44xpDfjYzAcgiRXycPXsRvLME3frptR1ud7k",
  "key1": "2dChBm4KyhqFNZ7yRcYHEpgdMUBhzGRZGxhqhJKkZRSGuCDNyzi8aYuMugppwSmBjd4PW9wfw8gvg5iK9vGpHS1n",
  "key2": "5ifwxagwnEwx7NHrWYvaYB7rAxrS8rsN5YTGYYw2WGwS4mxCkcAdKBLgoZiDDd4AxMY1tnjGm7sWJQDhsTfUmBc6",
  "key3": "3kweBrfmnpqbqPfQmHpVjQvYxXJ3iUV8j6FiPf2NdMj2JapMu1RpjYTQga69u7XH9ndkV4KUqbYTwzJWs8hDYDv9",
  "key4": "Gy3cmKjHHQfm7N7GwrEWUc7mbbt89cKBUSDYMzPN3cZqrTjdFo2T4yNCQVTmygnQrmie4HYfmBrYbNxM5e6PV2M",
  "key5": "5cBP4nRqDHHo9qs3hpKPy4JfxUuPZxTWjnwFf38WCnWAtS7FXBu66tpnuo19ZFnqAJLRrMQtEdRMEotTdoppVbbK",
  "key6": "3bKFGCkAWLW5kyjFUwUuqbxVnUpiAWieywERX19B7dyJua5uSHkuA7MtiUKuTf5ig7WAjhkqygUXfo3YAHocETSJ",
  "key7": "3u3vnYVL96U3XMVWD6UbvaS2CKywP7kqfeGdHzDcgC7sArvN7WXEJJqToLNvgBXtvqf4XJJu7BPsr64czCXcKKeX",
  "key8": "65B1mZ6dogRg9fiQjwL8KkRGfota5C1ENQZnwS3acL63Cx5sF16y1AhTKZHAf2nhtMsgKquW2bsKK61WbLEChius",
  "key9": "4EJn9cAhYAq6A6bsEzPz6KAeEff4Qji4wP4usqFmg6pYeA6UQkKBsFUYtBy3eXbSykqGJQmPde49Papcsyuvowe9",
  "key10": "3j4LpnYPyjLvkRQnbJdER6mcnkkeAb7MeEzDC68HPCqf4h4qBRDbZQi5Pswm6j5Xu45pn1A8iobwmXswTPWidbdD",
  "key11": "4DVtnvLAND8rEhXWpJLPAGAPnpF3q1G8mCG98XMsHRgzTbUP7UJEeusfpgPRnb5Xy9UJA76GvVUqUyvaEXJZhm3M",
  "key12": "2tz5YSvAyMwA13j946EP6FGHkZTQvwxp5LVR9c83SCqDH4qe24F1K97JejFHQhjd2P3vfKzSTJB2e98WAWxsmtzk",
  "key13": "4cjCkcEoSQbFcguqQCGzRN1PBuBsKPPXJAQTddYh97ZcArRiVxSxmGG7N92fYp4znjE21vXHRaMn2dLraHCazT47",
  "key14": "3QhjADBZoje6oAdEfZXFgyyzatGnHXmg6iqvmsbiJCkuX4xWecm231N96D42vM4ZADmVU6Nf9y48QkY6e8is8mdu",
  "key15": "5VWVDJh8tXrkoyk6dApoKCXJaaCg7bJ5D9Sn6PTna45hHbh3bDpwbX95NQn3grGSpUPwEPPMfosUdUJ8pNsiYG71",
  "key16": "5jPnk5MwUpPJWq7whQ5gXXKAV7WyBrNPoPbogdQBKGdBpmDPmA9NNoGMBpGYc4t4p4MuTqmhXx5NoCR3Aa82koj9",
  "key17": "5Yrozi9X7Ngu1Ff3MhxTC4d2YVU9TwWqhrpSMXWrThT7dkFHkLtwvhyqXoUQF7JmyuTWzkeZq9N3Haq64qKK5MjU",
  "key18": "25wYN2vmcdTszLZwG9XDfYpjZQDWnYW6U5P7ycq74tKBfP7XrTSr7bC8uzneEyU68Q9LotKzaiJZYqwrawKqqiD4",
  "key19": "3Q1aH5WSxkVADBkrthMBESFU7UZQWgCUgVHEUu1K2WRnN57WpBDjiTkafPEhLR4L8Q7jFEDDkhnKgBraj9WQtKPC",
  "key20": "4BWJhVvPTXBfrbc3ps8QzRPiUo4V4rbD68BWsCg4SFRQVHuDKXR6bZxRN5hNCQ9qRYWTuj3HJfowaD88XJ2QT7m8",
  "key21": "2DJUAJy6fTBieMySrkg5q2htCTveFqhSqTewyaRVmiCVHkBZMqj2nb6MbvbcH6U8NtEoEguuyY5eFFZjWzFJqPbT",
  "key22": "4LugJ1QdUE5Gsg4981L1vfDp1gh3CEvmQSWqQyNUaPMPyVq8mTpJgFpVNvyFFeqqK9RArfytZeWYM1SFCWAkH6NR",
  "key23": "2dxtaLauA8V8YZnaVWdDtJo92Eb7ryXGEdpztSPHSc2uHPJmYnvuYMCumeNuM2PbKHGrsuL4VXepZ7Z6WueB95JU",
  "key24": "F2GruNN97nQhh65mm9sYPZptLjn5mgzJCzcKaoYPrqVeBXmVgLwBBgMV5TCzZcyv2NdzcD9BjoCpDJYHBmAqRRn",
  "key25": "653emeenWfBRgcWzAZ7TGSwGvG6rtYmygu5uuzx1Kx279zihVLdt8X3jctWD4KTyWBc2d7yEVMLiVBe1WrzQ7dqL",
  "key26": "TkpJAWK7p4n5QKMagzip7pqm7ZJQ6N1fD8AXsjX5u7MeELZmkzTPWUME1S2uZgqvLDuz8BdQ2GbyMDzhgRxeSqJ",
  "key27": "DzKm2TFPEndH61M6Facg79G5Aj8zHqkNoXMPAhE4F9gbXJigzKFVuYtiprAYho1pot7LWqHMCQ5kDTNnPw6zcmh",
  "key28": "4nHrUN7gJ5qoA3CR8gCABWcNaB8SntCy1axjKhb66xt7JtEQoNk1B8TFrQi2zun4p2D7Xadt8myUBVs34jsX3WAN",
  "key29": "21Jgj6Tqmd9wkMeZYZnszKkJbWaZKzkZZttjLtuMsDeDLDvBzbkQrL5yfJ4dp4HJZPF7jmEus69eMfpsiY9PQ2Ns",
  "key30": "EusKg1yRH1iLP82whfAYy8Qy6VYVbJxjZP3T6Fz83hbYx3qF8iSm8GRUmFe6zNnJUbLfRT9XJcXqhJ4wugr2K9i",
  "key31": "9Mm7A55rYfHjTBtaMiANZMs6p1hxZQzH18m9usGEiJ8ZNAxc66XDBwEFRgNDZQubGU9VDnLwaEwovrM6A3vy2Jk",
  "key32": "5RcFfqRFw1zNm22X5N2gAszrk4cikr7M8aG2nmFEHUX7jehSZHLvvDgtmU49MrgkMxYHBLWwtKpDjjz5y7Vm4j3t",
  "key33": "5RViDuP3PsPKbY3h2DuWy2KNLGuzjg43siLDk6zuGcwQF6PGJdUAq66PBDfiUuLNpZFqud1u4CAyCTZzGn2p4rSs",
  "key34": "2QcYv3zPRZ8WBZEaboc2Yk513DZbsSaehEuRpUkvGuzc4oqY2mWAZoMHvgatwnZigwENqK8fNJHhmhMzBag5Swce",
  "key35": "5hZRpSQqcrUScggrbCYmLmwnbSGr81Gwr9oxNwUugZPWMF8zojoJtT1xYc3CvFCaCzhKz92gvwQVz8J2UVP2rHMt"
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
