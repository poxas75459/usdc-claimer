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
    "55R3Qm8j1bJZsauzcDvWNAufagYV2T5UihMUDStskx6rV2z8DRhUyB56dEPy5GYzKVEZ5MyV5iAxU8XpLprUZF2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TVkCUE9WzaPt9HKTembK48RUx44Tw9xGH1UZQ89BmKW6u8SAXiA2DUNsaEjUJXkkBaWd1is3cwxnxhZeHiJJrx7",
  "key1": "53PodTUcdZnHTGY1sa8V9aKnLMMznrhrFbqexJrLZFhMg5LJKZjqt79M72n67RL1XdzXwg5hEE5QaVcLPNoXY6f6",
  "key2": "54mVe5VyR1t7mpm2s2wJEkP7JjHY2CP3vVd87KZVwMMfeqs28UTdFmPYG1S9SLqG5XsBat9kBETTv3dwTbU2zBAg",
  "key3": "2Yphv4Bmdr1PsbvzMFKxAYYzo2PdibYZmd3FnmT6fFVVEUwCpk6iwp7T4GmoJ3XnUMQrCeWGmSYY4khXM3hJbBm1",
  "key4": "31FNp8Set7oMMbzWY7hmyhvcfSMUXwMak2ecfoQFHo3RmgWMbPpXsfABKyC1yAegmHcnMvnTQpQp9Qi8nxLiyVNX",
  "key5": "ziaPGjJ98EbNSjq7v8qa8buQDHhJ5mFnBnMAfK4yxgAaBBnDhqtwAbdpN6mV6V4r7T2ikbVhXXJU3emznvbjXbD",
  "key6": "4qBishXZXfcuLLP7NHpCgNqFqWMCQbUWZCjGYqjLnQ3e46bFTv3g9CLXcBoujZGZfrybs5sdGYVLpvP9LRYjxVc7",
  "key7": "2QhZxdKPeqZSstb1i64N6oBKRhpyZQCgawABomm6d7dteaAR3pnNznyiyqWJb3TF5ELAh3obFDerrdNgKUT8fZVT",
  "key8": "NbuLMjxfawi8ziwiiJ4y7kkBm5pueg95mD2M1oDWsW8WqwwtjAzpz2Quz7HDbs37BAaHFDhuuRtAA42RAGzM7tR",
  "key9": "3fzw6949Zyr9DX5zbm4kpNHCfwJdPxgxyCmzcFXs2wWCrdh4Hqh1XgDhQexSZyHoaKZAPShfmTEAZMZozLRN9yJF",
  "key10": "51yKde4pcTjVU42agyCV4f3J6ggEEVoaCpuimnokwKpWKhrNPMPngeJya8d9QoR7a5KmTTKSgWtnJ1ayjbGSYvde",
  "key11": "33819hrVViTjtbpnedBQy3hQsH7m9PSeDS7itSBsrmt3YYSezLmt2VLsHa4k1f73mHF3yrdFbM2FseS49ah1Vgd3",
  "key12": "3oUi984KhRbpzHdofC7oMLggQSWCy5dhQrR3h8CASjoK6NRohxDvsbRgShFUjjyNzCsGc3b3vMSiu3fjJshTBkXe",
  "key13": "2MXYbpJC29M3JhquHYj51BW9MGFDPZEyugexFCd1Yu9Q7ErxzYGVCajQb3XTdASXHXQs9c3m89bFGcSDghiy9UDg",
  "key14": "5L48GktPzbZaQ2BTdGGpJ4QbSk2Mrj29kdgw42WB8DsW8yUEVB3CovN8MryqiW5upusHVVxhz8aAK9LyoVU2SsKg",
  "key15": "4dKVi1D2bQZrJeAiaQWdGVxdf4rUigbpKp1u3Lq3GAiAqq54C3XaYHrMnXpY4giD4fwpG1YjV1VzVFfJ2ZFANyow",
  "key16": "3f88xEEK2ivfv63uX9XPpwzucGp4UmbxVvBdUZdB72GwYTyyFc6ahxcQFonnzcUWXVDE4h1fwWpx5Ubs8BN86egJ",
  "key17": "4nuU67EYD5ANXqDoiG52w8np9hVWmp8MDMGJZL5Uahs6NfwNAw7pCZ3Ren9ZnuMe6Eb77myGAmezpVqN9U75Js1M",
  "key18": "2vDU8e7hhmiYKCgFvgWDHRFkcWHyRxFvkxRDoCKEV7Q8AQm9GLgjQFQ1FF1d2BG36Mg2GNbedyHgixuk2QgrSs6s",
  "key19": "2HZj5J9CvPfNLtEMriSUH8YnHkJqfAKLKR5htVpAebe72eeJ7HmBh3kA9juQw5QzPiHkV59TbZ6ujVH5BkucEPFq",
  "key20": "5H3uJC8ZhUBswr2eRYLTs8HkeJph7hoXiWugL4LSg4XKKhX3xB18u2qxJHosue459KGvU2wb7Z87qTZjuA7hd75o",
  "key21": "2E8HwS1kGHV6K59dUooBKsFVuGvwqXVp35Tz1sc8Yp8dkNbPGvjD15Dywm8Hdy383ezuYgzneRzQ1z3HD6iiGcWL",
  "key22": "4EVmZWxCHqXj2n7YyKrzjrB5hnCzaCEd6ro1wWdxUDoi13DJtA4XRrkGDo8qTAbNt4VPZKPFthhL5o2kcy29mXR8",
  "key23": "dhng2jVxvKS1wRneZ1dW4ncwybkxb1EkEkevhQhYyssvqD6yQgjUJ17hk4He8VqLhYQ8R1qyyAZkUhkRmYpDuVV",
  "key24": "2JZwdmNmW32HZ4WP2HtcZ8tzPhPbgFZqEsGGisWWzb9wfbhVZxYQ1UdU5rCycZhUbDhmue81amLH2dAPPu5X8CeW",
  "key25": "2AwAFwgwx6ov6oBC1ZBnmjGJ9msmCueHty7L4i8EJimKfeh7RkSQkmAisRLVWVyi6BGkwxQQh9WTFVo84eJjm3F9",
  "key26": "3ZXd9EDhBdkKM6c5oBv27M7JnQX8YzgscXQhPAWWvTSpJJSPjAxe1Vi6aKUbmkrLRiHDZGF2k4nGSvgvvC2XdmFm",
  "key27": "4apTotn5PpTyCV7ofqyCB4siABZxCfoPRV2AUxDQaMVUobK51VETJ45Enus5QGnEpLSMnfq8osAAL3k2EgiRCRR",
  "key28": "5E7B5FTjNmV6ANvRcyjxAJS7GBTNZumPmhWjygDdYxKN3RVqigBeo2RVrGJhQxPt2W8WWtnSgPbLHMdLUipNJ5a3",
  "key29": "2rUQDVPWD4iDDNVWkgiSmfMwSMEsbgZyYsXZc38WHyPSgGPLDWtVqbzFKwT9dRYoEE2sPeRcs7eAXEFurmHGGK5Q",
  "key30": "49bAMgXHp4btTKdWPQHgztG1EuwpNGsodz2pe5WdpBJA2PRV64CY6gmoT6nxPf9Dpzam5Jd3xCgzAitTstmnbtS3",
  "key31": "3AA2WapFGrFfADY4dA7iogwcGzfyyjfY79AJjBckF4VQVCetF19EJbzrv5XNDJuu4hfhto9aYY4hsPgJecpPebhQ",
  "key32": "2od5FvzXwCLcnr9Zb6imfuKsEPyhJiHheoZ4hUoJ5DHoT6nCqrn6JoAtUfjy9yWnj3sJWuwQWAwcx9PQ58yQUQ9x",
  "key33": "2fE9tCunVvwwEdQvMeCd9vmsK7KsgvDBTZAK1TArS9DCDJPu5g2afFxNBV6S5vvhcj3GRz2UJhpcSrFh4oQNtEpa",
  "key34": "58mwbFycuEFWz1wQ8nTzjifYigiQGYMxXhA89i7p8A3tKDRaUoxTJmP8Xr4xPXugsLPxG9XT65L2pJ4rchpUYN74",
  "key35": "4LUbtWABXBMvQdquJCYyJz6LeFiffhoAnTQTn3fLHoKhrbQRosCuxaELfzJ5J7rBhFFD4GDJeyFAJNFgaLqfD3F9",
  "key36": "kvnZWGD9yEs1QHCACCSQSQVDixBqdKYxuyZxUHHX2Z3iRQQrPvEaDxeueRPEGfTTZN3jVqyd7pPZmbeQbmjbXpt",
  "key37": "2raphK9xB2imgxUVWT7rZnr1WRxxK4yFbnpTuYfoqcq8T9tGqbEqUVk75FbnGiL1GNJrtqfTSTr8doWNoKZf799m",
  "key38": "4CQonJrsTPh7ByRLAs8DZDky47tspEMj1eyYSb83hF2Kx4zENzBVJZdpz6WmVD1V4Gaz8BJvdbuw6Wf1XWTDnwEX",
  "key39": "MEmtbj6zAGTeDvSEq4TuhHCocVAPxZZZB9uV5KqQHiHJGfeQexSVnKAzjnNQViCEGMeXphPA5LgGVrbYhV1Xex8",
  "key40": "263Yzq8t2pMUpaTooKNEr6Le2bRKy5UUKHqGx97Wy9CPzALLm71g1XPgVZgTQHnB9Ed3HxhrDpDLmwyTnRr6hJ6v",
  "key41": "2b56tpDyujmpivQbG2rzVRy7ft1XzaWhApb9iVAxE5ipTae3me6oLvC5UCPTAGYxXzJUmWbPSgryHabyvpghcPxk",
  "key42": "39KAE4T2FWh1tZzWLxArdxSvdDp1fGqjNfsNzfH3bmfvV1Mgee3LdNFmuxERkqLcd1egG96rQBMcYADydDJdeAbZ",
  "key43": "5Hv6Jef1W9mrjZ9WiwUJRFXuYJTReqxYj5nBcGLQQKC2c2FxHNEVcLgdXKa8oMKwAVAqhQ57oT7AjAs4AdoMfLco",
  "key44": "ojRsNYxd6kvRX7f6pWmo4C35FiRSQTC8TdbyxZhpZrdrybewyP5SaBSZ1pbagTZ4Yqy75JZMadbajLpXL62CnjQ"
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
