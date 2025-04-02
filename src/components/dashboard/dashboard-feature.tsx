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
    "62rdmnB98jVcswbpFLn2cfxdsgM132rZVbGxCciksrqFU6ddEEeyb5muTkF2wZ9y5JE7Y4cmtiKN3ZeKVDy4okE3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FwbjGL8L4WEnnmU2TM3weYs3AqG4qZhdPAJ8Nz8h59BiDwhtZAPPetnyWCjfDJ7KZf1umdwmgE1E9UorfZdJVJ3",
  "key1": "4Z6GfPLeWjSHXYEUcJ2topnypnhrvZiz7RBnEj6Zgx2cfG5o1tBHgrPow2Y7jRdpdAPQxnE1aLoGpT5A7fpbA8hq",
  "key2": "5xGDQsvo23599bVtsEzoaLSWij7XdfxKN1p6iQsURQdYBtsfTeRf6SqEz9iz3Mv3j1StG31GzN2PFKTAWRLnuYLM",
  "key3": "3HSLqKMdG2Ezw66ngkYKzChajU9cE2Vyjmkxr4jtLYZd3RJXoAc4vW2XYbBMAZE48oSffPHfz6gR7gT1Ds2N6DAS",
  "key4": "2YoVCPJu9HkvszDbFuQmfX9QfE4yG5N8n3uBSSLAHZgSfw4Xe1ZsjqjMR7NMjWC4tNvn9YEuv6zeAmmNyDyDBKBB",
  "key5": "56EJ4EEBi6cHSS4Z25YdSHxAGg7j5sf2U8AX2jgEKewqubKZryTeoTnymdb79JBPLaUDdQWK9re4As3EW2eiBoMC",
  "key6": "5Zt5RJNpUiAsFrGHjuEZXNjQRFrBm1Kok3MxhiLhDyHxoptHKyrD8tWKrpJfBuSjTUn3US7BEDkmgxcSpNWyCu5s",
  "key7": "5ZpZQKPxA92F13HfuNM3p8QWBP2thPiPjjiHbjmp75uK2j4wQH3i8VGaor7oDZuP9MhFDJQRACNAV6PjQRPJ1hUh",
  "key8": "4zy8TxMQEVWpmQ6iQT4EXBkzNZn8nijeoGEjpNEdJKRtytmrkF8dCr71w5LLgti3CVzRAdh71mPjwzvmZTu7UwUk",
  "key9": "kjdytvEvhEH3vxBLcZVEDetFytx2sBLEbfERaCDAybsYN2PVmYbWhA2j7Tvf2iLP3UJzyRSCQwow2LN3hABvt2D",
  "key10": "bjrSVJTM89ZRmUnXf1TX8GCMD6S3VcFKjKswDLtwY52e2C5m2jP9N7RJWUNxLF56DmK3aSqGUNdUTCojjPcrPXu",
  "key11": "2tu8f1Qxwi5FWmZp2VkbHtPZG1oEygBt1d96C4xn1UYtC7Zxfbc4Y1cMgfUB3DWKQNkfXJ19z3i7GX8pWmPc2K5Q",
  "key12": "3SCxT5ZQ2Tpqf5eX58zApJayRmtztfwffnya3ApLrUfktPYXAzay2t4ymAL7N9wYaXUdLX2pqn8mrjPV5BipMWpy",
  "key13": "5D2nCREMD2Uuj4VvzTob7zH3Y9cSH6zJxQZcfRsXKPvR8zSoFR1i2tEvGrzFDQ18c2ixy7kqgynyzTg8zzM8vmH2",
  "key14": "4joG5dTr811VQKHw5yBUh1BeWjtR1KsH9yA1dXr3ryyf2Eb8xNRtxFgwgjZMoV4bX5nzBd2tDCeunBp21R9BYhqV",
  "key15": "4vJPjSAEkfzZQpBNJyhz5DNttjx7kd2j8xDa4X9WYfEiN8T9funaH1t6umrjTsC1YQa5M3AYCSmxEVEi4T6cvKRb",
  "key16": "2uXGLYnBJPbqrrkVJTDnonLBep48nXJGSMg4LL354XPdodXV1mZtkK6kS1JJywCViUipDpSY7yjGm4BFDk9Bw6mL",
  "key17": "5N92rJ6PQ2XThwJoTaw6nvZwaDR66HztCognsyVn33SiNNfvmvgmuemh7Z6QVe15mZ69hwsSPcP8HT4xRXEtPEJ7",
  "key18": "3EDAPzE7GTa9VftcqhKRLY2v9SsW1XVcEW8P42ESxsGRXPYbNFtHWzGHCstcpnUqFUJ1YPkxBKoE6aUJEhYSUoNU",
  "key19": "3ghyTD7FmgCpnBM4ZSvBJkkUVGDWE8v7FBPsim67VMfVrqv4gXmNxKSaDd6XuWBwsAR172idqdoHvQWuNH5ChMXp",
  "key20": "3kdKqpEVFxfrPcAuqtCQQBoZ3imMv7E3jYAvyvMFZdhW3fviwR1UBnuKFag2HJywq8RDbbkSperEsrQ3wmspBwtH",
  "key21": "4vDbiwEjSztXNJLoE7xH9u7ghf1tLMeGZ8CEzauv8f9P17ww5ptC41ywvfDeyFzzXsNsCtBzaAFEdvx5shXuLfi2",
  "key22": "4fhAvrLezPQVSE1KmcznkYFS2CUwaG8mGGzKXoErQyARTPGJNSSByUw4LVSRDe93EkM6eFSMrqw42DmzUi26Hwhb",
  "key23": "4qFxudqg1YPAipjw81sbdpoSoCPnp7SzAohRoH9pRZf13DrmK2cKPf9Mxq2nz3kirzGQWKbKtuyDL3ugsNoJ88iN",
  "key24": "2uoUVd8nu6Q6SS5AG8HqGrJKso1n5p5GXhZH4UN1SoqVUikoXFrWwHDq9bHyqzWXwRBp3HVjAs2LPxrF9LEf45Zz",
  "key25": "2jWjPbpH1By7KEABdApQXMtwDB61fncaMbMqmmAXVoMAwRHfptwZEoUq7W8qHYefKqEDh6FnPbgZW9nU2zz7Mc7W",
  "key26": "4KgEKAutJ5nMHwauTzdqhvV4xuwv3Rp24zFz5XQXsM1mQMhPtijDU1Zv6nivaoizXG44hsQhy5onJCoQhjDU5zrv",
  "key27": "281rhfhaaTA5Q5GDeckuX59u52zcvpeqjPoa5ZqvPs39YNoquqJjUQj7i1w4CC8pp4KhbqiKM6To2MCrtKAE7WNk",
  "key28": "4JSXc2o9puwwaQbHEGMJKwxmGoEsH3HAAY7qzuKQc6oQJDTkcEyhkbHv7BmGN3cDe4QLz3MmNuzkqwiauqLXp1Gn",
  "key29": "Db5KwpKUCzsUNfUNpRdbdbKjbAX8yHG1ZC8EEDAEpJzU217eRNDat8AByRmTdWMLa2AwtnsXqrgHg5GVz7pgjM6",
  "key30": "2RUqHD3YVHDMANqrhQiPBbyu3U6m4kmtAmmXY67XAng2PMcrjg3edFVY2iqtduxEJuw9W4mhBg49RZxWVNZmmKtW",
  "key31": "4U74Zav6phCvPLHi3thEsCHWsVURo7QozUGPkP48xNjeNBXw7Nv5UnsySrNayowdJ1oZQPrt49sEvovmuYSURhLW",
  "key32": "2P97CoG2nYBxF7iD6z6Lp2vuLkrjyxvMKhsnZAFRHhfQzjYZvHCyziT24wiAtNSQtjiBBi23ohzCLWrWzAF1fxvK",
  "key33": "5KTP4ZVrMFbTJrrFtStBa6UnTKSomddm7P1QkioTDSbKwrP3ivbyQgGwgbW97heNX7ahw5oKptGqm5wbQVkT2chR",
  "key34": "qxKRiCTUHm2kEmMSA5x6uMumLJcTZtZkJMQYtFJyJgbm6yPsxKXuYkRrahvHxAmvh3tixZnyxzuKtn8MsMCcRRe",
  "key35": "61hS7qL2AwHAmn4QGXjnzk8JpYTee4XJqq4FfQV8JCnZruRA4LZb79j64kTiQuvXH2JqG85T5VienqA7QUnG2etH"
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
