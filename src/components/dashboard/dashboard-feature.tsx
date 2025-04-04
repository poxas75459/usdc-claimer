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
    "WBQzxS3KWRBSWftzq4YBZkme7DmrXT8jXCnBqcRmFochTkszeeq5bTHMsn1VgVLkJhm2rTcHLpmVbkStGvMuCqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ttV3PRZHV5iRtSubaDe5QPh5bSRSZsyqy8reJTuBdRU8hBpo9TY65TfmwxqBESV74KdXNU4LMPuWbNYaEZrTAVF",
  "key1": "uHVG2P3dEk2xFf7Gf9mo9UDVerH4dA2Aj6apB748Pf2Ri8FamzAWYXaeH9xR54rGEnk3dskr4FAapbVVg2rvqyt",
  "key2": "4zgpjcXBeCWn4f34oiR397z9CEaBvWJJibLmJgkVdTpn6UqpNireKns7ucCC7oeLL3odrkCdCZrE9TwZc6Pckny1",
  "key3": "56KgNRkcQE2RPcFpbhYCt26drZCJWd8AShAKjWErabgtxLCbCmfVnvNKB4k2Krac64ENA7kfyMou7qN15Ye6dgMJ",
  "key4": "5f9r5zwxaCrgDG9MybaSNgx16mi2PWAv3it6LAcaGdMepqZZHpR1ptiPfbMGrydXGEY8hKpjCi6sW9ctCw1R1MEu",
  "key5": "655BnzmTRUd6W6adfL5EDF9sgNsgz87MrKb6D63qwBhsAiJA79iiXF38oYHUomdxAbZAZUi9qpwpamWKjiQDKGLa",
  "key6": "ETutcaXbUL3wgxGu6PcmFKXuZeQtR4NTYAYapByhsUHbAniJdYjbBCQmxCp48FDqjgLQNLHoVQ2JyPb7JivbEdp",
  "key7": "1n3frGXbHGxmBT9x54ZgCuSDktPGuBErqEgpQW1fobtDCNnnjLiipPULAuD6AKMxrRLgqP75WneA9hjNhyXtziS",
  "key8": "4ZQBfKPADmd79Fyd4WviXJKsrGRZVhWYoEjvzuZcGVcmBGEfyWUcsyEETN6TF9UkxQApLWS4LB45ppUmsfsXuuiA",
  "key9": "2qtjtfnZLVMdqxqPV1HKSenrure3ryWC9xRTRTJSs4PERzJcBrM2GhWfXfJd9smP8Zu4QCmQM7aXtxms2YeQqAee",
  "key10": "3da9rkBSLYm2kZmi4TpVo63UEXrxn14yXmVHkfJmepiq2p8TGoiDMQ5NvytUafx2SVb7WiopSBR3uCFWvmVb9H66",
  "key11": "co47vAQXwCLWa7qjqhPFV638Q329564u96xNWuL5znGcxkbVXtYWADTpCH45pVbz4UCtEnHhFxFSNjuZ7Jc78aM",
  "key12": "2TYErQ4ogHVi9caGxFkxiEjf4BDtmS5TpfLGgkYR2St7EbNc8T7gitzft9sLMxyFnNLE6LQEB6gFehoZ2WgnHj1v",
  "key13": "56cu8fsPd4AtVpdE2CWGYjEzEErefmYxCGNV64KrVHwr7dFTMBr6eB6EK8NfeuxjTjpM5NJBGjdWfNBFrKaECyt6",
  "key14": "e14b4H4J6guAFDWJEoFGTC8YXUZjFT9LMxAdJJb8nsJYoUoXde4oM9VHyyKJYeNZnqfqqdmwv2p9gDGXKJJmUJA",
  "key15": "6MxbuDvcj89EMM7K7txe5ExTf1TEizyzFL43CYrQhtmwyeycd6FrairAbgcrKKFinbeqasBwYz7DDTyoiirswWg",
  "key16": "3ib4wS7rxiSyGaMX3Mer81oeVdomys1Z6JREbWbrJPhfkmvPXb4Au72w69whtVL3sjvvaA4BaSnfk7yuBvGRDEaD",
  "key17": "5We35jDDzyLpMTbFNXvqk5crDALtcwRjUceSqP7aCmnbyNPQHeQTRt5Wvtac8B7J8uonB4nmKskwHRqBZ9Wbqhhb",
  "key18": "NsE5Q4XdBUkNs5VAV4JYGGVRkmL2fem6zfuZi9NryckeSTYyVG1qHvLq8ycW7Uvw6E7k5hLUyVwUkjM924pivwm",
  "key19": "adZnmEmhnjQKcpuwdJEJUbjDWtyU3ysiC8d5C1JDCufWaB6UGp2XkRQoxZA9h2qGbGtgASgDc7Mqnm9NEFLrkQp",
  "key20": "4QmTN5hovrUFw4yVT5qJj95qmY8CzEL56hmFqJpsZXuan2rZPTu5YoZ9WdGP8UNznENHPZzg8kVxYNczLvThkKWV",
  "key21": "5ccuBoMwisqqMVajcaT549zeHUyjKYYMHrtnAr69C177Ej2abmc8n7dYwETer3XkDhcd5gRNaZuN44Xa1r9jkNYT",
  "key22": "22U7TLCXqatNJiRAyzzcGgqB8CVuhTCMvCPdhC2F57mPn6tjrKkenQx8CnMLGQfnDSGgPti61EktwYWSmAtiHxXB",
  "key23": "5iVn8SjR1JrBQLGDCdHnW1Y3s43YMyYj4PdATcvidzSvYTBh8VkU1cxbuJrtQH3PvGGPyc4agUag1s78h567CMCC",
  "key24": "5GiRfcvBMgBvgAG2sRUajY9GDtyHrTauWAZ3K4jRdGsRveKvYcYVhCsa6D1Cf1FptVNpmTqNqJeB5KK28SVrePRk",
  "key25": "5dJX4aqjCoZqnL52yZP4jXPodPwi54FDwnGYnTnhEy8mXBRHkY9q17VA3LrTNAcemY1cgiMSdAeYGHG6mzkKiCoe",
  "key26": "5BPqvVhJ2JUGgkHbLKas52vvGHrMMiZC3Zdn6MvjtUU9dqSu2pLkZuts2VzYPN1ECbB75C2bwJPJDH2au5s2qo7H",
  "key27": "3E2RxPJ1dKM65mRP7T4DUM8fWdCXZhgo9uKxZ6ePZz6rZZt5v2e7bBDdhuRx6Tvn7hyJ46qMQi5Jk5nvidjPR3xS",
  "key28": "41KUwXkp9bSzdL5sugq3c6TS5dgR7YPGdsvJbrcXKtia3fZJ3Hha6ZGHsbYAJLyvNQUBKtDyP6Ln5dWWdrFDka4m",
  "key29": "3sBBQZ6abcWBz6SjDtt6G9d1HWA7MNug5UxxErm8XFUKj12PUD1yFgWmVUJJd74kbvU84GMBmUytrwvTMxQExHNk",
  "key30": "4HmcJzuKdBXLFPweqSPNDodbwMRu3Vx4KH95uddfVUwt4EeN4izf8UC6PuhsVxLLmQUajt7yXN1Fk9kymHgm3kLr",
  "key31": "v1g8HCEtiuWZAQDzvdkEPgJE28edNocG1Kkc6ySQ1EEniBiE3tEP4aoRR5Xz9yFCMwhFF5wgkBhy3ci4Prnn98z",
  "key32": "4RdDA8FRkwYhLhLnBwkFbnWhusoQguwmG3PdYVtBxpsFwgHwF5yTq6xmCZr4cU56MiMD9MJVkgT7Eq3DJKF4A7w5",
  "key33": "yvDx1WBjMgEMjRXXEnYoWnJkEzSx9E4n2nSJXddNUQmBeM5UJ9aCWJkerwUxdwqoATnvNvFEjBsT6q16haisGnD",
  "key34": "5MHW4yTiNEngyS42nF9RpLZ7VnRhW5cY7oQVfu6nEfoEA2w4RywGy9TUdke2qrK32U5d6miFotJY9ALEWWTdoaXP",
  "key35": "53PJJqtPCXTjPWc9ananHgMtrLPYEQeFBYgVGL3tpv7vNp6iWmGxmBpWkoHkGH8FJjhQC5dhXpa722Dd1X29RiE7",
  "key36": "bVCn5z9NFVRhSTTQqWr49Bn6fvpPkCPdqWP3dbUemcikMFvoZMVsfPHdPqrxQucBRq1xr2YmpjwqwTnmLxCfMFi",
  "key37": "4c3sgJt3oaXdbiUuo3HTphUhZedRWugC343zLZLJ1ckzRz2tuRNrSu3ToCDQSMdUJc4wPkWteapUtYY42Zc6LjUw",
  "key38": "bH8irCxoyZdiWfrSDr4DJuVmuQdP2Rdms8UUqroxS9tfFkQdCs2QyXnhBpTiu4ymi3zx7kUD9L8D4Kajb5PsTkR",
  "key39": "4SUhCLsT16CiNUbV88NaNy5mGQ4zc3TjGrbo1EaembH76kqzcn74AxtgHaybJXpAYTwyttq7sRHXEhT5FA62kRR8",
  "key40": "27w88AWwZMda3SxSA4JPgFuf5LGZGaFGZCTQ3zdWr3yLUNxZtqM5mCn6NnFAgc8PnJZhp6rD4gHk7F8BXpm8rjXf",
  "key41": "5vUX33ygr7MDMyoyWZvAFe52D24sZpvXVg7dPdxzaT2QxQshNLYRcUQa2smJrxS7w22w8PpMopZoXqpm6dxPiYe1",
  "key42": "cA6AWumRW7usX53NoWM9d71jS4e9YaFJsRjK3LWYyxLbjrF7yQYtNYATsMcwZEStTEobBMVN3uj5Lxf5qD7HMcp",
  "key43": "5RYRM2M7Zq5dQLrWeXfyPe5zd83tPZ7bB1ya1nfLZi1TQ4khjMphqm6tGts8KuvawDi5uFkiAaJsJiVHYtFkBFaZ",
  "key44": "5TvURD3yht8gNjR1Un7j9qrFk5SEAw7M57H4G7ymwZfR9mkSbaFhYDU6kfBboxvyUm4WCiKPwwkqQv4UXxAohDBi",
  "key45": "5FDvC323vTR7S9DfYDAt55BVyrjF9pxLMLiqS5KubcTvHoo6zrLWyy3Q8SXGBSJkyrCmXzXiUW49ZMmwGLPMKafu",
  "key46": "qmpRCmiiMeRNAV26hqgUar4bZx4YPjNbyW91ZHHDW1QZM9ztSrfhn1LwG3Ta6PsAZCfmKNUHKGnXH6VQBgyFjCe",
  "key47": "nsbF578orQx6cj4cLnruJmkAGXeWVd58eQkZCSDoPkNcojDjK27QXfLgkQcJMqqMWHnYNACRTtnW2zeksK92h86",
  "key48": "3YtcFLmA7GJDp8soDpgAZsWcy5nNMFxtpYBafbKa54L6dPCV1F8yRiFDGoSCHngGgBg4VT4L8uUfULPE12s6Xf7p",
  "key49": "5L7ra3vHJDcpEhrg2d6Xr1zQfRVGatAbYAVaRDCJpXE87UyzWp1ZB3J7AvTjyrECJ6wEpriVd1kcFQBU5vCX3Abo"
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
