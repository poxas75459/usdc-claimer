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
    "W2LBF8EZPiRD4tPY1YxKdyQanhVBRAAMFRLeiTCBMxnicdK5EGLhuawJMJqNaZbX15KqSsibrCfvPa9UTkFpgbN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NCQJFLNMVfHsEF7uQu6xKkb3fxT1ByodRCajXGDTgirHnjqC5gRKBr7VUfnhEeydqPE6FtrPwMnhvupGurycW9U",
  "key1": "46fvWPieyJmt2xNMQFKUNxBKU6gSkX8k6B2iNSvzRSr2uGEZVHbgH22bWEBsCXPnDCvHbRupRfYA5UCcLXVFPqZC",
  "key2": "3xW35BPpgEa2a4PToF3zwcuYQSu7vUm6MWqQaUsWznioPVuhgbQGKxtFSBJyKzweZDN4yjTPuMUhpeP6STJeovAi",
  "key3": "4aph7bwLkUaXYNL2pftTYPaZkBqnKDJZZA2f7XBY11D1eyL44HEYkwx8RwLUq8m7eHhFHKQovJcZSEUTSACqQpjU",
  "key4": "T64nQk21V9JTzRspK64nLHx38LcvXwbWYNmMmE7gVRkPKVUTjqd8DJCz5a21LaZmidWgo115yhzT9EvoVMDKsB9",
  "key5": "5R35NDuFcgFG9GZfgTmJPGdseuaGv6beicEdhGBZhmxiro3Wa4Z73MSJD7hoVY1H6c6tQXaGTP2pn2teo9zbH3be",
  "key6": "5fUePxbhbS6fyTsdks8hBwzJdaEwy9LqumW3hzEcJPfSKXssFfJPn35tohMRD2EFvqDd4qVfpGehfEkdA37ts4dA",
  "key7": "3dyszrvZrFYxucdqMDqsracPsG2XA4wsxjXsqQHEX9muYu9bFWJD5HQs2jJdqV95eyDbTjRV3pto3A2F8921jJuB",
  "key8": "3icnxQ1geXVY9W9S8EcJeVoYsfDo3C1s2ZTTdyp4aJsuAgonRax1e5xSUXw2xsy2ZXQvuk51fLAs9FfCL5CJN5uR",
  "key9": "3RwD4yWezKUNaeUeZpN3aqyR99LRS8n3EPP3KxVmCoRCbsjeyXgs9EDp5Fev6ds5J22fYFhU39aLV1uqztpK4T3s",
  "key10": "2stm8gC8amGpK7UqBgXnTBDT5ypLZhYUhmatVKMg1r7SahMZTSvcNF4ArPKJHXB1iu2V41yQpTeb8yZ3V3XxMnTu",
  "key11": "4UGSme3TCKntpjRwJT2wQ7qEUXE8svgkzifJVtoNXnJxFw9DM5GG6ZXHfi5oaed1W8bH6XoJofxpb8SPL1HFxTex",
  "key12": "3GNjtfYif9BkbXFkYLhz9tcn5YdySsjTw1wSiLuYnDi3Y9rz3HcPpHefPftsYUrGfhWFwi4hH3uFeyNepxULpjq5",
  "key13": "5MhtnXbT6GsKWsCMWh11wic2Nqu316wcdCz7s5XDWbT3sr6TJMJY8w8QiCC1bNSEoTDemwm1PwkrkpdNSMC1cMG",
  "key14": "2hBVNtPiyx82R9nKkb5dMoxxgcFaikhX9jZSPfj4cizEysSSj5DV5okR1YqdDU9UiXuSKsGtd1BcjuKM7NiKPQUH",
  "key15": "29FGozSr1ougtwJKknHXpaZtu6EdPDHW3gYuFqS2aned74EPVw8qLQcRju5asDfcYo5pSb8gzzhtrHL46Ps1HxS3",
  "key16": "5Pnkuz3hZ1zYEy5AE6gb51EpXv6bjqNwXHgG6S3TGsyM3RTt3MsGg2L2P2wnmtUCHTArF5SxGjfkKVNpijcivjp3",
  "key17": "2Z54cSQQaACfRtD9vd2LVRBUBWn6x5F5iqnfwmneJzH7JdhDvam1AVx4s1UZPnyAuf1d3WUo5XpdfFH6er7x8D5X",
  "key18": "3dUq6BLEsrGkMbNspaP7wCK3LG345ofjoCPMxKJDz2U2153XANHvLTSi9YUwvDkY6Eoax1uVtnpThVwUcno5y3Zm",
  "key19": "5qhrPMsFR7XYJgsgBb2MxmsncKvnWRX7RmypmADUj3wVALspHBTKXRroPwXfCPPE21sdVXfacyShA7CpuiXSSpzo",
  "key20": "ZgCncg1eijhhyrfob5vdAz5fGTGAvUU3tdLVbp1JbuiS2F2N9QJv1CxMqFyGLPZ8VnzbEQoBuWJxhMYkMu8aREW",
  "key21": "23d5zFyn2zakSDpvfx5RrwcSfBHbyfs2DEr2vXeufVyBJSot1ufdRCm7F1S79sgoKc4ogfXS1R58s29MfsnW6bM1",
  "key22": "4qYy9iMGqzQxgj7rzrHt8kYtYzNvfhoMtqDtGrVnDHgaYvuKALukjdbVYMxqnMwj3JW8pxLMrwtrYuKgYPkdB2NV",
  "key23": "62izKong8v85cSav81Qf2K9hadgrdkE6JQ28KqX5x6PFSbwBDnq6KzACVjXSekrHibfk1TFXJNaNZrGKXk9weL8h",
  "key24": "2R3RYzMcuszFDM5CReESpGTN1MS5X1q8HPfTbjBojn2u2FUquPGKaHg6SGMgmdUMePB13hPCiZgUrgfnehj3ScBe",
  "key25": "26C4RjfAwy1BD2bttK2iPe2tZoJRqw4Ndtwnsh4H3ZhMPbjLHzoToStGCFj8tmYVhXynxsg9h3zuozMJfFwnhQzW",
  "key26": "hLdEa78ASGbWf7My2jKvi2wJQeMQ6JXzV3woXFWQr8rqsddqkwUh7rVvVPPEcxWpbAHjYHwK3pdrtXg8bJc88di",
  "key27": "4Cr1SbKAKbbC5cJbtXnV6PRAATUB9f1f3oxDq73DuuUqvuQCZdWLehesKMeSoTkqFQ8yVuK5bg64DegvWZfgfPUx",
  "key28": "2XcD7862qCq85szadXyi9yzsXDh1CbJ6zmPb4MJABTwi2kLi7FUkZX8CdUnA6FKQidvpqtBUfxVst6SiLoJXzZJy",
  "key29": "54JYhYQCmozapfmtadkQZFdzqDeGzw3NjPyRdX3NRLRbHSYh24nUGQq1nTj1C1dfDNcachQoRu1sWPRPB5HwGSmF",
  "key30": "4QegXvSodJY5B9nwkdqKYTQiLDQ6aGCzZ7suJ9mHsuseokP86emGBh7Q5F9jJrkwPh48oryHAVuc7yqex5yCun6o",
  "key31": "25XvD3PYHhBfQk6nBtP8qZex5R5uR3Q8SFYrnGmwdysuHFKHAUZcGFdx4Rk66XDjT5V2MqGGHwuYfDyWpeYHFZmk",
  "key32": "2Edp9f5GcqX3ApUfywHAdgqmvwborheMLcEuNTzrve5tVoSpT2wmYvuGaVkg3dq75BkyLY3Na5kAz7QU17ZhfoVa",
  "key33": "48GjGRn9ismgcdEJabdsGQS6dybTfMaLSfXffyG673JQUNVYR1e5svRDS3FcwNy7nBGqQ1nYaxyX1c8v6Kx6pdfK",
  "key34": "gJUBFugUQYGJ3xi3uHpGLuRSJaQHi1fNNE1LNRjTbmRCau8Um87cPmqaKF5J9gWEL5wPpyhDwE1hpRo3tq3VHVp",
  "key35": "vf47y1QYt1udLnmHcbp9jsU88SEnNVLkTL87pvZbi3xRa95gLSEvREDrWCxtj51vyzBZkTnbmQbzxK3HiNeZZpk",
  "key36": "4V6j3UDN39XJ5H2W3AGrfSDG6FgBeQ4ddXfatuoL52vHHoXYyE4YG7QK2r5anUMXH7GVK9fh51tzDXXyyFRBKx4F",
  "key37": "4GUhp8YBVomeL5aHcT5sbVCtFbFDz618MoaBZgYSE2TT8eXCrHKNp6d6hyhjvEP1BTnqMDMikexrBB7wERcKQR7t",
  "key38": "tJhEzAXAVwZxKFsAZevMDY5qMEib1z1SNexndt1e2aNiadu5r8iFvZjXRwLD7d1d8EFwApHxdFiV4XwVsHYtyoJ",
  "key39": "3WduTqAXUTP4u32YatGHbX5Q6Dd28wUabLYnkxX2Y9enQoeMZuD2JJVyQKPzx4HaUvWb1JpFKi5SSkeigrvBWXq3",
  "key40": "3C6ovFpT1mRdMs9Py5kA6JHw34VTMyfSgTmw9MM3dQUb1EdDJh9ozs1GAEtjopEBEPAApxNvEJZHGP1b3KVwocHS",
  "key41": "47NwES2Jj4HQmWBXbNCFK1TAMkuPLRxvzCssDAsRWeZMaQmVDvsFMBShALZdbbc8VRXJdxtzZMdEhyt1f5L2rSYb",
  "key42": "3erMU2mLyfpdauRJecirBTh4C4nzdB7aXDx3MHmrT5gaa5tan7HbBfPxdhcVdyPuxEgwb411AxkTt1nGgmJMDsiR",
  "key43": "4qZA8u9a7sAVAaF5hiLtuY9UfhTbxVRfq2Pb7RuqB9tAM2jWZuA32bhpLfjNdJwwUxthvMCmzYP8QL5D28khDVr7"
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
