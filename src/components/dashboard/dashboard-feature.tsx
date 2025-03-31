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
    "56XHugWMzs9VcjErE6h3dur9CgXBYusgRUb8wVYJqUg7Fu6rhSLEVkRJFgjYmcUGJrZK52X6Dnex7opUz6jPeHtm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44wA9jd1ixD3DMv3wgpNDrHqmKyu31yF4SFhHmDW1StpKn2g5LtymF8DwULk1je7YYt4cuYS7CEYRU8z2ih9yuPN",
  "key1": "5Dvt6DDmjokNAdB2sXbX5Wq1b3WmqF3ATtNk8ZUxC33Ss7oVnXmiWMntykkZ2UwMcxcZdLKyTziTFXdb7bWo1sHp",
  "key2": "Gdm1WHERhrKuhSXwUyTDdrrWeSXJfkHau323kXPnKaBHtkciFr4D8Dd2vW48MACeJo6F99AKkoEG737Y5CdQ9Vg",
  "key3": "4afDt7orbAce5vV7HhDpXPB4UE9HkDyyXvSrVdc6oPnXKYB9rs2NpnDjSFM4afRM9bccyUxuYYdfqh8SHjUjKK6T",
  "key4": "2M5zKTo7JNukH5b97NZ1g895ptsA3E1z3uhRbajbnqBZkcPcubRjvxUFzvfcgAe43w6xLABT2uXKeHnUQRwyF4wi",
  "key5": "4rBMMcKwoZGKmn3wiA7s1hLwja9yJLJrj3ZRFdbo7At8z5EDf5oZPQ64BTXzwb4nJT8CGXUjpjCod5YJvfSqtPWj",
  "key6": "5BwPoPF2W2ZvJLty4pE6X9A4jQHNKrDbVricvf8wyvSK6VagVP2BuvzRztMFuJhcDbxWZ7YNUEYA52Z4VhWKkFoN",
  "key7": "22uwVD8bHYgYqRkv8NJEePszxGSt9frwvbjAhCGHSKnPyQR3zfcKsx9ASsZN4jJ5tDECk9Zb6HGREHXoMDTQKF6s",
  "key8": "2CRUv6HwnisbAjL853Gcy3m17rmWHke5Ud4uy7t2QrAw1d7oh7K8725ww2h3DiK2w3Nf75shgWQBggcVB7ZCZZvb",
  "key9": "V2JcBfaHgDdBRGNcGUwHsSpypmgyjkxSxrRwAqU77BaPeP6RT9geTGgUa6wNHcpYv88t2auiefxcfAsVhf3nheD",
  "key10": "3y4S23pt5H9pbxCGvuXvy2AH1qZFc3D8qxKdz6YVS9kdgMXQDnc4Tkq7CLHfZNUtBf74f45s7cEUDpJU9ha6BQdL",
  "key11": "3rpa67XEZsCJ3EbZZdes36PqXAJaZXukS1DMvyEaL1WMBRsN7MNmkuf9vepsAnVg5MYJ3is9jPjEoBHNEPE5HZ7S",
  "key12": "5WTzfNvw4qCZJ5pG73wNvin2uHLZeCyTf9YePrBhkWWPrqBcv7bqiuN6581vsXqoFQhZ8KTurSACch5XFCkFK8oj",
  "key13": "4h3z7RucjgvymoxRLJikEKPp8tbUP3P8C9ZrEv3WhvTcw8QbdiGhbDJ77qzsEJa1MuKsNvEkvyNdacuxydi8W3S5",
  "key14": "2oEC4XLAq7hbjX4G17TQaEhfs9Mou3LSMwBuoRcgtPwxMLrBiuu7JkLp8cUQjGqJFfx878c1UU2UEWbZnxj1hUfw",
  "key15": "cdR1d3uET2AQExhrdDQjbhwWFkne37KWa4P7kjn32c1rn6UyP7XzdMTiwcAk7jjrXi3g6sqRbViQSj74jNzvCy2",
  "key16": "5BTcXU91s8MN2rXFcpoCrcHV7ncYDcBrvh9vNFCmiDJT3t45vzHyZVNc4qHCxWVZfRtuu1q5hrVnvXfbtjCKUc58",
  "key17": "2Ec4Q56FUpos3H1YoiUhyp4yoXqNruCr3X7ptCAXGHp12dXTNK172etBgC4P2WiKjzDV6cWHEZ4k6Ko9wat42p8j",
  "key18": "3Hd17pjkH53bfkJeyJ7aqwvamNXtrW8kzqUtW7p99EcTZqXWiS9JhZb7tRhE6FGYzNfqLRiZBtfkzYRCdffyecep",
  "key19": "3c6tJk5MQzCG6U7wtZwTrVgvatFET3WE4fheRKyJPUuNb8641CmH7exr3PvYqdqPxcqBCGDp9ozZZ3z9YpFMcAzR",
  "key20": "3DdsTDDwxrzkNNDEM8Gua4TBhBAL4MrcYtM2kcVq6YXE8suPQZ6FDvGmp6KSmGAAB6VASccdZpXdgtTtDFnJutTk",
  "key21": "oNGFoKP7zLAKisxuaNfvFPyH1BAQt2VpEpjeEmb8KnEzCQLCC9NzLwNs29HbTD9zkDyB2SF6R4CwWYis8fmLXU7",
  "key22": "5P9TNHwgoKT6kByc8ywwtMKSQHD69VJ1KkJLU4GiN95HAbU2SVcvpwpuKhVa6GaLGUbNbyvSAEsmReQwnQocRkx9",
  "key23": "2cEgs6c16ewZ9zc4G5wjEQic4VXQSRaaNSAJRtnmVpASJt8BY7sUaodo6Ps6svd4hQw2m93KDDgA9vNqXEi3ntJ",
  "key24": "KrCUGMkn1bY259b8D459iRomCq1xNUcWQEU6dXMfY3AVSc9zxdW7cRvKZupLXF2RL25WWiKkpdM31jPs9xxGXeb",
  "key25": "r4N241sb2DZixcEFVVzAv3mLNNzaQxhPf2oLUczcWwjJTtSvHRqK5gqnu5VQjsW4ikgvFfef6tmK26WzxyfgfTT",
  "key26": "5v3y5hn9jdg2pfBB2cPNCswxpeubnycSHQchfoMBQfniWFUceq8GjkBWuvseQVyupBiA9mjtg3k3E7KayAUkUhM5",
  "key27": "5A7xQwbU9GpsKP6teC9ozgDdDL47ZVqvaNf1zsECgU92nEqqdY4yHtr93UMSHP2NC1irLApHZ1KgBHrR6MMzGTSP",
  "key28": "MGkBwhNUgxnP6jPXhKMa8Td4nYRvDmwLiN8uZJiaCC5Yi2cNn34HxrpdebVEHZwsgrNwvjz7JQMRZMci3mEkFfP",
  "key29": "4AFRdbbax6gTs9FRsPFsCziYYBtmVEtu5jc7N9kB1svCDXc3Bh7yfAcgjz281qM31X6KikztqNj6KgrFMFQRftg4",
  "key30": "2W1vNyjdjPKX2uXgy5k8SqzoeMr5LZKMQWHh6svUXmPxZJtYiL1j9SEVAfFkdFjmDeCn4xabV4gifXLuuoB5ho89",
  "key31": "3WNkH3ax7QY64u7sLnXWsQVvzNbfv6JwmyBHUT6f2wVzdjSk7FSQZVPs5vQgV1jCKd6kLFcZ38CYxpymukcN3myh",
  "key32": "4uGyzoKuBhZ3EHFjTg3ewZE2edYSfGNUsCzVzV7g6x3cqc2SvNqAuB2MguMMkivCeA6MikHtfYFj9EJZDsrfQWSC",
  "key33": "4PWbMUenhQLRkAbuDS2phzHnSVBCBqqnsKQKZbwA1CwSoRgdqAQswwjVLfoZrbpxqcsBoT8AD8MsqkkXDMmuLpwX",
  "key34": "ck7DHXuHxneCojYkQacQs4meNsdr2f5vk744tBi5pDCt7QnZyH3ytx36vw19MDga6LbPr4ETg5Va2dT3ZXDpSSU",
  "key35": "3vMkZq4KRsbutber8DseGF89EoUD62T472sC2uZhckLErpzKQJbo7iKKM4VQJd8bU9k1cCqCTvh4LgQecjCXKmM9",
  "key36": "5Fi1CRHNwbe6FChyDKfRJMYhASP9dKx4wkneVWnxTtGYCwZQkcYdkdyudWQ9oLfTRNmyRG4soVncmth1YzNfJS14",
  "key37": "4Lpcsx1zBMbH4jdLnwSZi74FzmmUcQLDiFWhgRxxuKGMdwEwwrA3f3X94jrwC1a9CuVrXFemW15VCy8TRce1xoF6",
  "key38": "38wh6iovX6NWAHhv7G8PTRxHjTBPbXLd3HAheoitPr5unxdAHJY56Eoh3NveNLn91PNgEebcgXjnTPDjbGSPy63H",
  "key39": "3rFTTJMK7NYfch8aq6MCjTTee9ZLhagAf36ccBWNHAswUSipQMnQ7Wk7HEoBeYrdLiMyQMBVpu6PKKUzKmH6BYkY",
  "key40": "rQL478ccK7LxGgo8666EbNmWnYzNGPhDMnccun3F3osxfGJBXVxRxSaPR7tqs4467qVrhSoBquL6otvdUSGhJUZ",
  "key41": "4bcjbYwSKWyrz6FhCCTb1EKXy3ov9SxRyFN844hifGTmLCn3weRa72K6oNUaguhxkLFawmkTuF4Y85MR8wXb7kp6",
  "key42": "4FvUHQCLCy1JS2H76QuLXhbaW63cKi6Dt33Gc11w5AHKov5uUq3fuui1Ni8TGF3Nm4jRDdvA66iSMuH7aufqqpKi",
  "key43": "5RL7Mk5jHP1rbYkprf9guoFobssM8HEB7FFT6T81aNdvogSTp96hWqgbYDmZ68jiDC2pzpmo4s5LjLWfDkwKjFue",
  "key44": "9jLo9f8mzVemGeGzVQ7WyaUsFRQoqynNNh8VvWxJGt9mQ8W2XUXyQVw1hKxexftBCAJWgHJeEYuLMpKqW9ZTpzV",
  "key45": "3bszQmDNdq1YG6Q2L4shHMuG21spJGjq2hVTHYqhpqEYUaQ4E9bEJA4n3BiNC2JCsAdNHd8jragxfLbXBvSoyF78"
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
