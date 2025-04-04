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
    "3wLJMXWTJm6QDowvyHYQzDVjua5H9HcShZ3a1iyk5hpxb3WGCWRC74iz2TVAra8jpVkSR7YXgw3Fbr5hEZPHhcKZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wr18WyDTdtqABMiCb7Egyj6YcqAxJBMJ8c8Bp3AB4Ni9uCfxSAaEEhh4n8urpTnoRsn6g9U7zAn57BN4mphkmWh",
  "key1": "35Vkr9AzzPt5p6V4fJBvuEnp6wHPztDveSNStwnexGMiYyQ5r9hf4DMB7eAbZDtyyvazkoqAsrLN1yKd9vJjDoe1",
  "key2": "5FZSRypUGU2H11ZcNvU9TbMTsKj7ixVXGi9KCmUfKPcmp4CfXGL4ePe6ysuCUSwLniBmG9goZSKRdm4fZWJLBtFR",
  "key3": "2B8qagSSa4gs99SaAaN2Szxp8fBVWTYC7e24Bce5wYDTADG9TtJMn2t13r42nKXNeRaxCMbCUka5i24roSAbAn5Q",
  "key4": "56zUQC3LZ1oAuRdaFi5jsfzL6qH229VmFJ32nehRFpatpNFXmUo9b6r1wXtnzvzMRhoB4qpHobCsUfKyKw3dHnVz",
  "key5": "22pmLkzdqyLASYm1Vk6KFJBEXHQye8nsNmhf2P2aZ8xQDA7rpnuGfDMYkXaGgq2KrVdG8s1zW6GBzcrdZzy6EhUn",
  "key6": "41fh6eQM6sncKFrA4Yhvws9jbp5JrcQScoETRbHSReKYvAuhsrdtwFtJnD65aibh5zvamX4nBaCXLGYFReqGPF5d",
  "key7": "5cQLFLQKwjueoLnEUTKdgK7aYyt7Rg5vxoP35BS85BMm3zpRKVG3RpA5RVnHDsQ1N8dbExp2yZHAzwXz4Ej3sagF",
  "key8": "y5HRrqzKgZEU9Gm3eNLA23kMTfpx4ykbSvfvcUFPr8SWqrF91cWVvKeDx76PyEZpje1PxqPMKohZAPkUL9w2d88",
  "key9": "32TLGcqXbaTaAPBGqFCSBLyhzY91jR1NSsMcMPqVTUZdGP5iiwuPPa5XgQSg1HwCMJ9fGPwQpGcoFsxNoYawmdNL",
  "key10": "35fn1EQoMjW4FMFFZ7SVBXYtqvXgRJkRfs1SywjfHrexsry2cCgsRmgXDcX8tRi2pCc9KdnV3pHp1wxGdzPmUKk5",
  "key11": "2qCzZ8pjPsB9SSUfk9tFjevn95p99dMyuo7RwJvNc8r6inY7zEfDU26y92NwYRKbML17BkSbBFU4VHcLxBvqook7",
  "key12": "3asQ2uPZ6NvdxAEpgFMLRQddEV6G28tmn6k9LXSZztUYy1xJPSYtGWsDgiXjwZrRaz13g8NPSUDbXHXY1dUgrMpP",
  "key13": "2Re5sUAvsH5xKd4JTsN6Yf26Qh2wXC7vJzgngR7BdjcprmMkoPkmychTfRUgA3a3jdSK4CyvxgMAj3EdczcUnTbC",
  "key14": "3zx73GVj8M2AmZsPWoBmYKdJfXvbZzFuj3HmtpYuBj9FNFF7XVzHiefCJetFjJbwsyfrweMFvfUEorhDmBwzQK7U",
  "key15": "4XCaXXpPta4e4QT7AHypmwD9JW4u75hvyxf1Tq9NRYyVWC6uxQktDPbG6Awe2HnPNeRauo571yrz7juQBps5Ypfe",
  "key16": "5pQyF4g89oRsNxJa4jmMfYV7h6ahvAdMyJkkQYJuZHSqo7FnYiL6m8Jopo5UcUXyTBPci8qNev4yRy4zPuTjyZYs",
  "key17": "UxGjsAAC3RNeAuuyAxMXapL5T4RKAya4fpFWrG7QkZL8Kes8QgsuohcMbSRSDU8sZnrQUZ4GucH2syrm2CHTF7L",
  "key18": "4zYsAU2Zgi2MWRGyWkEVSkydMXxdPyBqVTXZnLpnJJqbiWEfayXbtw5co6nFn4vQKDeivpZe8L1FJSUp8Lq3iZzZ",
  "key19": "2NpPSh9i19Xa1pWwiNaDPKHnEWGcsTK3o4nLkB8DcgLLWTsgwiyPMm2KeHMLR7nT51tXspzmwoqBo5APWQ6UgtLk",
  "key20": "5d2yx7j1ygUj2dYbCfpTx2WFvkof4emPhjJM4zHVyjWG1c5ui7XF8BNrDUodCZuxtPivSxygJcaHa7tU8GivLtmD",
  "key21": "3R63RCgXqWkDhmbfYVYvYFjctEsqtSgwTGbEzuoJHRAymBRvrr7W1h1H7ov33BxZkFr5B14No6nRWFtEef22SCf7",
  "key22": "5iBGm3Ee8mXKcJrS264h5mj79k4Ky6gHrTx8qByJcoQ9JDbanvvX7keUDhTvKDgq5GhYFpYjm2swD91FAQSiF8bi",
  "key23": "4Ghb6sCzXF7Yhs5BZcctqk6f4kUxGAXT3JY5CtwMBVGVsaEAnvQqyqG6CxvkgJBxCjw3iMYfWnti3tNjECUWxJDb",
  "key24": "4Yrq43ju7cEpiKs6DMq2ydpZDYXMVT6m41aKBNJDukAfUDsHuhFsw2zxkAubq71wPkUKYMbMBBpZSsF6nF8wh9Un",
  "key25": "2qRiumEUHsxRrD4WniQkiksq6m2dUgCXnRqr5JQbozGzWMRKqSAvBny7vMrXFmmkWBQBqVpcNsctKzU6TtUx1Uvd",
  "key26": "4ZpWBgJmE76rmodSvoatH2ob6vAU2jCbLyLCtdBG8jwioq8a2q181h7uS8MV6sPra4GMN44iyEAbsTqdmNBHsqr7",
  "key27": "LvSh4DY2wddMe24hk74oHcYqcrqnBDwKLN2XwsZYGeDHaYaS58F1CRyX8U3xJViA8PaLe7i2rQV2pLtwMpde8LK",
  "key28": "4a7jajxQxrVDN8ZfbEcK9xNRNGfja7YWmyQKuTtM9FgSnUh1iojAs7DVHV1x8XQp6sRR3jyP9fLi5wStn2vWDU3p",
  "key29": "3AqRbM6eq8KMXzH2YeBL69tacsfrUgTwPMzzUKWRai9qPyW1twKuiGwLNRUoeTguhRExvW7K8cPippQveTrp48iB",
  "key30": "59HhVmn5msJA5LAtGiEKJC1vo3fyZzqPniHPP6yvJiRRcnEWUUA9QpVu1dByZNn57xhiUrGTUNSqemzZJHYBbW2i",
  "key31": "5kwpQFy1rTutXvW6CURRQpf6bkJrtZxXdmNwPeDQNWQn9d7mdFDg2FfWnZuoKv3nyV2ZeBT5QNLr99btXk2rAnZi",
  "key32": "2BTddC3epRCwadtbZc9nhk6Zv4CLfvwBb2iVnsA4WZDSe8Bfjn3MXiiNpGEuUdKvPUiypD9SHmDC8w4GgciSpuLZ",
  "key33": "4yzuUPg542K5KrKjugbExcPTkuwtK57QnoGByMuendKQegA9t2tv2bALnf5TG4RrUB8Jqjxirpv8N4mz7tvJkHHC",
  "key34": "258c5r9DByGpGTempnzeGgGwAbWC6sDyGXWxF76rEVSvg7sohKaxAJqZiNEqAkF6m4s8RNKZfQMLcsqs9jyT2q1C",
  "key35": "3qqEHo8TpnoRiQYzRViLMwyWJm2DcNDKWmsZKNJwguVsfFX9ba1PBPNNvdK57cJpYy57KuF5Nxwv3Q4d3jisfQ8V",
  "key36": "41FELYuo2MVF6bLGJvYFeY1YDSqerNv6jK9CEQ3TJQeMDYm4p7RSUWqF6Rka9EVqAR6UahZ438ykpgfdDZsZ5P4g",
  "key37": "25AbYLNwMyzk68P83KorV2Jvs7Wq6SoQcyxBdtHrLykoNrHxRLKrpJniyWSGFSkLx7rUNH1xNPHRaPT1wb1uisBj",
  "key38": "s1ML4JwRDX9kpwnd8uRqud21hPBQ2oxi2rX47m3uSisBuSbewTzaxLkc2r4JR5SJvTsSPkrAvca6sHRcbou37Nu",
  "key39": "3obgmb23aY6fQk1CNSnHZjb9pRF39HphFKZgffE8cDvAkzr3XjTD7EQYXF8ZnkCUG3tXCTsgVKbZT6AnkMS61BTL",
  "key40": "4dRpGbDUmZS1LLE416PUP8ri49dzoSatFAPLEQEfrLhcN1hrHZwzpZspfpuDxUDmHSpRxnWg2yEgYybojDwt6tf2",
  "key41": "x4ees3LGVcoEhVrgtxHa6Mp5dFZTLB4ScE7eNVhZebe6DC4dZuX3FLAPhfuzgXWVjsTLEXZaxHVCcUPKzppwL83",
  "key42": "4zn6rgwDd41rkepa37UbwVEmuKfo2XmcdRZwWzj3iY7vnepWB44hLYfacVo7iX1pqWHY6XfxKZRDouqcJBmd4hKi",
  "key43": "2gVmuM7eNtVsNKcA48X4eR2nWup9rvzfpQB4qqs6GiaBVYPgjda3dZmYkpbZ5T5Yt41HoEY9zSqLAZwARqS4RZQ9",
  "key44": "UaqXRsHgQ4TJ62Td6FK2Y3otjEWeLtdv9ZTpbeR8Hu3n3aJdjJqjcz32LcLigZpxNRkD6VX12hJn9i4bryA5okF",
  "key45": "2nggg2gngRtKEZczPQyJtWHXX5EYSdCcmN9KqAkZmaqgAkHDWCmg4ExrP5hgfcazk6csfbQ29GcNH1cXHbdUTr4p",
  "key46": "xx6715SmisSPVhcUf4YCbV2uLpHuFNWh8NuiYXyUToXUE8p2ZJ256oWpVBJupAw4xfNqZbJCcS85fEPVUKMZxMM",
  "key47": "24i6tGZrMeYiepcUkrsTTSQh8ufTDHBTqG4wE1C18Z89H2ubWUgAuDvUwwAjK6NvC9GFMTpGQvdvKVNfBShJtpSj",
  "key48": "2xT5N15S8fR6fEgwemDyoR82TAQZb1DijfjMDsHuynqprnA5rEF7hJhn8U33F6ucmPdV4CKmXEuofhHwvHNE8y48"
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
