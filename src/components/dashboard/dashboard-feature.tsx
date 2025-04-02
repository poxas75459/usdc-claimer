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
    "4dqPfhn1czGd5wZRP7xrXgmJKz2xGhhiNk6gG2mVin3sqXrmxbP4oH3GueZ5rHkbC3TGSsj1uj4ecsHwzM9jzgcn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54jsJeh2rsaFfnUL9YsSY1nL6J8hA4NgYG2ux7b78bT8Kg57mipNpqRUKxsFWnMCQReeVgSEvwNvBb6YSpU2mMfo",
  "key1": "GKXZAHYDRMHsvzCtWT8eQBG3erAZTuFuBJNt1G8tVHwtpcXaTgyRWNQtEqGXL8AYVgJrKyLJEVHX8JRfwTngiAq",
  "key2": "LZPMHP4VT344eJCxyGNUkLGYTufNj2io5CD6r1cQr9bFr2GsXtXyVUfbz5CSouudufcymzUCmkWtgG4Q67AYTRz",
  "key3": "2Fjt2YFBjrUWfXhgW92TvPB5yxP7XwEMytPV1sKe1eKSChqEwr1R7kMEgCNvvcF2aBuDfzr4aZ66TGbDX1HXWHiB",
  "key4": "DYZHggNhiye3sMsuNDWZFbqPoPETNt7f5KSDN34Qcg3eF3vaFeegR6WkgLMPfhJvxFYGoyrJhmHBgwxfVJviH6i",
  "key5": "U632Mv3rpzUMzccNUnUep3YrA4EVatcdSKtkzgynQiV3SeDKTsQLE14uiRH3DfVHXAXX13Re78MMcUBodpq4JZD",
  "key6": "8K5CFPdozDFHrfuRQScaZKGFqk8bQdZcVsZUg8LHtMcP96AAg7wrrAbyGdyKHSdVgskWc3QhJx516j4pXULrHU7",
  "key7": "3gVXA6wPYPZ17X2QfwTVYN2VvxUC5TcAw1GRxzjntiLrJzBnPwZ9RbFKGcoxDXbPeTPYQxVwrT55KKNQTa7F1hTG",
  "key8": "4CZmasZW3hUAN8fviS9SvxmD6JaDaqvEvhruD7in7gVkax8dc5nDLVysKBYRbzkZiJyfw3LoBqAp4UMHjKodVCcA",
  "key9": "2QHGc7vesQCiMrdtagKGtgZfXZ9MfJVrJ9FfvS5ghepabLnD4GjWhSUcjWQdwYJr8JBPgRKgfzHVGw87NZMLGLBh",
  "key10": "2v3x8rUXVzhjhuoxKMN1ncQxRrHiaBkZ1vq2hPANb1S9Y1uD8kzb2QzNuevmew6LA8vubYqCyxqw2ThCom4zWCjH",
  "key11": "QrEBnbqZ8HSPiqvthPRmsPYzutjgvv9W1CgkELYFs73tEemzpnm14i4wVwxNLQVTG6KDDh8sHVY5B2jRznmK4VC",
  "key12": "24GakiZxup3NtyKvUNvKa7kFLgvdbAsmUd4YmrM4EK9NHH9rw8th3QmLetVvm7wH3fK4b9J9zWfZj1RqkpKnPfKK",
  "key13": "ixxFrf8g6iWgr5JwonL811jJzkk4tQ2vWLLjza8MBgGLPk4pzuN9ZzjhkoeLVLm282TN8yc3u4x1xfAm12PPgg6",
  "key14": "fqjeCfZBQ82Q9hCFgACHSkiyyNMTMhBL5ehm6thAdEnRQA7toGR53WD86sRa4WujHBM5zCY3vtNdMQaaXAZjLAE",
  "key15": "4kfYbqDcE81AGCxfHWgsjAeKJP6BgoXEy2fpqnDiXM9yy6ZQj1HrSvLvDfrJg1pQ2ArePNgWDPFD3VbP4wiRKmRT",
  "key16": "9q5MHZSQdAcCj8PUrGcJ8ARbHBQfrDKoVrnQXpCjFzj21HqeFamYPR1y7fbDTJns5kWckduTrVfPPZVtdFg1bjA",
  "key17": "3uiEbyvCYXAwXwb5nFkLyy1UhmbnEFBaWF8kEgn2BLLS3Zz7oV8ob1djnD3QrKSNpRAV74v5DiRZ2CaGLsQ1XE8Y",
  "key18": "3Wka48DteUXHs7vbSRYuNN997FUsQSWPBqbhenwnCcJ7Q61GH5kKf1STLiaKzChzZ3DgedPZrT7vqMn1Yx5dvcuW",
  "key19": "67NF989g3uJtFhGy8hKv3Sj58csZjzLe8mxU6zQkL269ha3q89Q1ee65gwBzrCGahmmgzqaHSrjQETmJKUXNUtbN",
  "key20": "2Tou32o51Y3NWu5gmnUfngdmBgRE5uQ4jMSVKc3pBaYYUXPVfzjfZLZ9st3UsrawgwFqTUo6szGXhfB9ojKwyb4U",
  "key21": "3y9umpDE8CewJEFKTZeN642jXt4us67aEKrBLwNNpgVry4WpXfMZ5mqYcCd3YD9Mwa3ju7jL9Dw7MRcTKfrNuQrZ",
  "key22": "4vsAGEe8gvSRWVDKq2WkBUjy64pDa5FkyfLGZ9gaERmDHCLTXm1mMiYssZZEfWpEgKuirx2HW9Tno5v6gGShUf1f",
  "key23": "65AJj7nDMjx1CECw7fJvSHUmrscFgxL9Xty1o84fERLJ9pbXYLj2hXc5bjikGpQKCAWA16pg3airWDcL8cEehJg5",
  "key24": "UmPLQEqA4dSJqVuU9KPak4ZsvQb93gYY2vEf7cdZcyTC7Qs6JDYecVegVZph6jxgNUqr2Htpn8GNJWNADHpDkNn",
  "key25": "4qUSRJ1PA3MLcsWzuFKDG5RFWBj38VHjY2jZz5DFNNPfPJb1wgQjVogpoMeSgnkhSA8bi4EH6Rki72F3YkvexY14",
  "key26": "3ZVuWy4MreERMWfxoxQgkU6uZjDSZPQGid3qs8EYsa55DTbCvzLG7GM25omVvK3WH8ftsDanGQAedjqvgBsNMrLm",
  "key27": "2doQh4ZJvj6tqRyMGNnDLr8AwYSWowBLJjUEdTnS5QUoqPNWQdRa7JKuWE35iQTKwcRoPks5tpQi6mfuQeRpKsPh",
  "key28": "3sGcnw4hT6YaRMqFRwFd77CP4euPQVgYE2kZzJPgYTXZzddCAUF7yimjwp27bVwZpmoRDzfs9YKcJKXMjVTQg6EU",
  "key29": "3xUhJsMc1DbWW9C1rC6vxMBh2a2Ask4JW9sCgqPugTUYcBqYX8s5j6GW3kSuwBRB7m6YtSuVqy9MQTB4spevkvq4",
  "key30": "4BLniChK5TP8yEigYzQa6zDT4pXPoN6XsTkRmC24RnjsoBhuSPcftLLUevADFESErt6tHjfYS6vQUKnhg3xZWqsA",
  "key31": "u67axwwwcsUMo8ajpTTi5ViubKuMsj8u4eKpuBba4sCSVjCYfcvnHWempGjaK4efsysVaqTQo6pVR6kLPYR4vv1",
  "key32": "3S6a6hJjHwe1x1CMk85VvcCfGFbvQrkMFfdxx3w63LtjStYDU97C81aV9T2N8UvMEugjANMS2iUsimE41eQqYMff",
  "key33": "5sy8SQX5dwJuJ4WzQg5by92nuy4173cv5bAqfYUwAx4x5baqvcF2yyfXeiYduwLUo3jZWgxeNLEpAKdmXLXFQS7Z",
  "key34": "67c33HuhAu51cNpPi3xm2CLqPnG6X5Eov6rNrvd8APbkEVWjiRgAmPmN94QDZm3dLHVHpwSNXRr5RjKtAn4vwCcQ",
  "key35": "4LWCxEYqu8vHnDVWBwtv1X7YZjME7A2Ynt3nuLA4htB1g8B9BbL1uGDhGxvKpPPNja8cnQtVjo713VxZoTn6GuDB",
  "key36": "2cVWJYtpe25c6wcazGTcpgUXGoYayHbc3bAVtMA6c2sPx1tuAfY1fRMz8asT6TRnn4m6Z5YdnSundkrnGKNvCLXL",
  "key37": "3wFrnLVWuLiC1mkEJ4ycdYkrPgoBz3qUFjutjXS6SanfaUuXNSrPHdfCn3pFyFCs7woiGrUVrSA26Q8AXZqHrU9x",
  "key38": "49y3pheSecjMzcJQfYNFmRHwC82u7Sxbjp3TGoE4orW5xKrhbsaZP9Fz4HJ6WF5nW45QVhhny3uaVsnzktkLKYhN",
  "key39": "638Pjj1AzNYmTmzAd3yPSReV2qyYnk67AHpNwyTBSApyqvs8oYwMMBXKzSAKRgDuncHmAoZvkwWZohxiaQAD4rr1",
  "key40": "m1CJbGsbcQmEXdXut89FDSUe9JDEK3e5WfCbdcsB62F6j4amapFkiQ9TLDxpSDKUCPMUehjNhTP5w4ZgDJCqVNB",
  "key41": "5V51h91GyWahRXgt3ir9L9arVV5Shb22ZCieVk5xeshZXwDM4N7eYFH6AL6QGTU6oke8oPJ7dQCaMrwoG1NVnFPN",
  "key42": "3V53vgUCekmcD6oCspAWT4vjwXj5CtXep98mm3dGG6WWYw6i9s33t6bMkD4VosyeEGi3yKKmc1ocNWnErwsbyhTt",
  "key43": "3cVvico9PYPfxuQs4NBCfYUGoZVxYuiSZ7C8R4amRAMBzi7ShtKEvLaqovFbN6ojV4DnUJWiyQN3V87XZLdaZxD9",
  "key44": "XtTGF2PvapYdx7P8vAbUyrQ1u3A1iyKyo6NXeq8J9JEFVmBAphDFVMYHtuSrMFDvwqKMbVX5dcG46FuPVpo78z4",
  "key45": "3hJP9zJQDJ5c84N34QFURHk2g3hyeRy7BhdoXqEoDHmK6VfG8ve7JTqaek4kYPj2od31dGestPU3FJT8CSQEyg2n",
  "key46": "3hTiTk2uavjbjRzWVLSpYeaL4trLn3umRGN7cX4e7CJcpF89KTYWuuMsQdx1CJUBFbEXcFmqCy1xEBJyMPgALJq4"
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
