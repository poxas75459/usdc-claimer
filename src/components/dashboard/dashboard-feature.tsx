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
    "5wK5uWbYz6pLBSCCCb96bvPKzKxF1BC8p9qdJUQ6Kzjage9zxYqC7jSmAGJHD9XsqHCW4rL2AiyxHGwrxJQJ3kJF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AqPAQ6Kdt2oL3uZP8UayueiNCQxkx2wybRhBwkZtAEibbDPJdLKpND16qDztD9RT3iUjf4steFYLKr3jB8zZZX7",
  "key1": "1pgwhcaomRVcymecHemcQEPNxpJEnrRt5jpKYE7x6Jb8WiQTcnBA8BsrSpkGPBfYdQZN9XXRgWvJqJZfvcJozXD",
  "key2": "3eAge2J5WRzQFr9r51GmGfF86F3MVfevTY4FGQsc24kusHzshS95nii4J9QoF4MwFPJWCTj3jQYHweWimzNrpRVo",
  "key3": "qTLxtn1s1ASFzUsXLaGxZ76avuPhjn67sKnrp1gur9gSnPrL6VqHFRcAwphewhHLpMw1nxVyzvty7Aqxe7T5D1m",
  "key4": "527sTLkzvERkL2FNknYddxrEgsnYgdraWMYz3C6RimU2pNe7piiLuD1pttaEu1b1mau557bAwA1pN22WpJimq2uP",
  "key5": "2Ch1wLT7owGy1TTX6vYQyLBJzqKCkrSRtifxgj1GLykPSfpafBUpT3zKKd18yTcuSNTY1Rmsg3Mcof23LM9DQhKU",
  "key6": "4kWgudKmEwMksZtgkZHzscPG4yETkgkJD2BjsYFPW9S6QqDAKwvAcLKL6Yux7QwR6SCBJDejB4eM1Eg4fjCAxqGc",
  "key7": "4x7dYWf3C4FjCAxw1D6XWhemKufiFGZwJ4G7umJPrHrqJMC5oBaT1rMJvhpPgBkYgWx3Cgh86tbYUxNt2dVqRdug",
  "key8": "3uaLKwtckKKHihhYv35ZUtbBBQyWSqPQwhz4AitLdhycVwrnyE8Q5SJKiVTE56UN4HXnxY9v7H41U4kHt8w1Xiuy",
  "key9": "4DazrQGxktfAwCpeoLgynz9qN7VyJ5tTkFRHE36wryGUuM3T3xPakfN1t1pNZjj3z4dTWytBZ9g4Mtui9jq4vojC",
  "key10": "2MWQFwE28chn38H7B6QPLxYfy2XHuJ5dw8NESuV5h7z1o5SNc9UNhfY78kjvJZDHwtUPZ9UammV9fiPREWQ7ckwe",
  "key11": "4qxUFmhbqWufok3AU6vjjjsn3yr7vFXoV8ev7x7irL5KjuTuazNoW7WwXJ28n8xmiXFuL3WayEXCymvwHrTjHXC1",
  "key12": "Kx6odBBSwC4NpkeJsFKQArgGVChLmgHtcxcJpmoznaVpqtQ2TxMMbWLZzMMaJ2vp6xXN2uiZ6wWA69eSN9hvfQb",
  "key13": "2fbDCEjFw3JiQU6qcyoq3Ap8vkStbN5cuPiAYH5ni4vQR72fC4VTJ1b9112MhG9ZFicHJyn9mHr6P6w1d2r7EEb",
  "key14": "4Xwbdm72RToPgcXcH5jUQr8RZUe9rJRdajJ6aHKRUDnvuogbPiiAzF4eHwsper91Xxwk7cNM59sKWwFrV5goETLR",
  "key15": "4k8Kwxn6huEB6irMwBUWH9dWqToWPPV1gw6rPt9sKGYS7PXLMAWYPTRApqB8QKPidKUxvsjP9r92GYEyRyQ4cWLf",
  "key16": "5Uy2nUgUfsv2rjhjHPsjictraLjmjkzFUzPWfrLNHM87WRjHCV5cXeJJrqLC5u2m3vd6N4qN6zddw83zcggj663X",
  "key17": "44Q4ZUPfozRb43Fy2tFGfaip38dU147RqkfahaB9PXqSvrUGZojBJvoHqPrbMKGHadewFMqftQWtB9fPA6fhkcT6",
  "key18": "j8MpUT1y11knr2DJh5a196XtW1TETXxYNMD5q8rL7awMk1HdrBLxNusxYECJiLS4sjGdkQBEeXqyiwB6TRZj4d4",
  "key19": "4cRtJT1wB6jjViZ5MWnmtZwNfFfuQu74o4doKo8cLZExDgGaYvvGdkeZyGGHEumximhx7qpP11S9p6o3ceFKD5rJ",
  "key20": "37cho6VfVJ2v64FUdWwmQU4LyGvM6CXaKsGvF1xLre9UJgajynJNB9nK9fuCvUZjEW6bfs5LfsqRyvq9vMieTZwf",
  "key21": "2Xn4TsFYGtyTp9rjMtVBws5t77htb66hG1Mzb1DH8iLeSc7YtjL5bNCsBrUTTWs4ZA8n2WNhAXAbufV4jQeSUfNU",
  "key22": "ionyZz7L9u8wRkrTZHR3VenWHFLhyrh5CxeANojzXgYMThh3cmhu94qkji3L5nF6MoVtQazUozGnPKkxrvQxu3P",
  "key23": "4sw9G5FNfmXdyMVLCQMXRu97dSR2e3PQMrUXoquj4XGqw9ML36XWiud1NZtj3mDSMJvUHG3rQchYEoMAW6WwvLbc",
  "key24": "x35fxEcydHXzbLJq7BJtc6EU3Stew6JUiq6AnX8Y9ZbPb8H2144mfmhZPUg7RL9H6x5jinvB2ugst6X3GfW44L5",
  "key25": "4aYVzr37boxQfxaXavW3w8sTwPZ6sSTiZZFRogpVmz3LWjoPeqhemzDkgKzSXhGZYzAeXX8vFYc7NC2Bouj4ueKk",
  "key26": "4rsBBrnLvcNNtkPH3XFz5u1Cb4EZ5c7XJifjFYnbuvc6ocnp9gtMqQpwYKhEGfpuEjQJauH9ZqWAGDA16Tm5m7N8",
  "key27": "2uBnGM67AYc2mSSR4vsPCpzMEczEMwRfihoV4Z11DXbfX9gLdDTczYYhD5iA6qZX449etxr8MEstGu2foxGhcb5s",
  "key28": "b9mYZhpz83bv8qT8piwdXbu5uYgzVKprnBryc3m6ugiJ939KAeNND9aPWNuxCt2WhV19WFyNv1uiXoEAoTTNzAm",
  "key29": "3QrA1c6wVMkTw7P3CjTG2Ei9GrzSff9j9DZMwcswjjHUeuh7mxWgBbHgQBvHLkB3ZQJPabFvihRxuxgwQHohAvKt",
  "key30": "5GY44j5ZyGJoghHrWgh1hfdo49en7TcGFWt7Ff4ZJVqHZVwTwKkHoZiPfgsMf8wYnis7Y1ek6eagDu7Zg7Lwy6CE",
  "key31": "f6v2EbmDFPYYNpDa8uXVjYFrPz1wrmXxf8hxeKYxAAPe763e1u9V4ikoLfGD4MWwCyfQFYajb12Uc36QDKkzXp1",
  "key32": "5QUk2FVBxhMXTvn7baXTK6eLMQvGQU1vdscZxD8mGtsog4J7CjMyuiMHy4gMYrZdf2MrUipyCcGqwiVyrSvXxMyQ",
  "key33": "Pj7gBZz2URp3SWuHvLBVmqHv3DWsYy5UFfvWMXxmCnWCpypRj9xBfFxdCKJDsPN4eGM4XVUkeKEtCPEq21KtdhJ",
  "key34": "3y1XXB45YAWLw9CeduVHcrjfo7c1SD1iXoRKtdYiT7Uege7hcK7BG7TURzAqM6bjQskJVZpR8KS28KUgJCoKxxjc",
  "key35": "62TUyitd6LmNALG9Hzi9kCPg8kfuF85mA9hnp7ngsx1Z759hA8JuCs1NguY6TfvF97hHqtGr4PTvYqY6whwzyyoK",
  "key36": "45ynCYH7j2gb3yvCGfmdJkJCPn5KG1L72tPbx8YkdRWCNuacge2XAntWFne5HBFVTsY7zpJps67FDXkesnNnSPCC",
  "key37": "2XNk8jy8Fhke6TCcsSJXKg1v8T9xQCt1vyYxBF7phyf3KFNnk77tfGzhx9aQYhPAqmggrPn83sVW1Yckt4UtYBem",
  "key38": "2UcTo9NvzC2QKMuFoaC8N4GsXtvP6YxxSRc2eHvocCJg7WRQvt7RnQY57nt47JUCLw3PEqwH1ydTKceG9aGX4UJh",
  "key39": "2EcxphZp3KKGwD6HcNvXbD2bizQN2SeSw2X2kkm9tFnk6U861iXJeXNVH4cNeKdcd1md2j8kLfLuZPNVwxcmNWZL",
  "key40": "34PrwUbjJpwRVDX4pMYqBLrRXGAdR83H11hJzmUYzpy1FXEhjjzJCF7u921BTRNzyNEAaBtp3jVT5ba5FWkbh5th",
  "key41": "2HYdqjX9HDAVy2o8stHmrF3SbC6tLNifWFrmzpogU2TgbVd1om12YJZS4bLWY33hxBT6HLdjTaKMXJM8QMWc2V8v"
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
