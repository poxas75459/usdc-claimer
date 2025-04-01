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
    "2ZV4vZRywmoD4wr5qjM3AhWegXgQ5Q3DTY1Nda2pobPyLZgZMRu38vqgNmxuMpTgY2XZoSvTS5yzHtBT4TnaKEwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hYs9tph2vewfJVqD1SaK48TnKzwFZMU7caL5x4CB7UQsBqyTEicrH1HiE6XWsG6tDXpbjshiZeu7p2z4hEVxGN9",
  "key1": "3sHtjTtyXRzU88aYvXE6JQed3vPTY58u6LLq11VAZ8UKjpg2xLBinC5y2tYCji8AwPv9ppajCE6kxJ5bk5Vn2LjP",
  "key2": "3wJkjxn9YiGZYJ6SAMtq3GVqvTKV4amQhmQYUthbqmnDi3KrdKtGxfKvULuTZsD7R7UUzxnvPtggMwGUvj358JLH",
  "key3": "2FCB2S1tzY7xHuM1ofrY8v9jqVuMr1emULWiCuMXcEL2QtLWbdZCMPoSifa2eFR8LaX4aRGPfrsJ6gBDXetDxrvb",
  "key4": "5cxhCH2xbvARFW1btDXJv6CdAviN2mTVt1VXJoByRAV1rYHbAy16gffHmGQpK3hiBJNJPWRwJ6EJdZaq85mMUD7P",
  "key5": "NXc4EZqneesLNmvNda7T97e26CxSfGxty7YWfs2n45F9Z5hSsnYGdRsk1CbVGnqGy1Rs3zJmH9XoTs4dQmV2GNQ",
  "key6": "3U4XyBfeo6asWq2zht2P18VihMTpz8M6RtjvasZdJtdcNu9Jnr5cpdzwqs7S7UofAxM6KydEnmFnqnVkC9p9Z33o",
  "key7": "5eWFCs554PK7rB8A6hYqgwbuMZsNoAunG96ViPAiSPjV4ipDnBkzUHQs6cobLy2x8iUq5i8pPvfVZr7zbXRKPVYq",
  "key8": "i9fsgSJZRsXNF4rr4stgyQqDoj8W3hxmuUjc394Rz4dBp3DYmKuWBTxyTUtdn2CedqCrPeyLKBU8bjtdbcRxAYu",
  "key9": "3vJ7XXdMymsBmuhnxH12su5etGy55xuaj3EbW6TBAiLr4CaJZV64qUZYH9tnHjFLw661pqccTXMrYhrQKmzddYqV",
  "key10": "5Bk1oFBhx3zsS8TtMAnUJ9fJpyDXMRqfYKtzCBcRtchL5KWdwapdM9YFhi5VQWxmc8zmpyvg9REo2udvUQRH7Hs7",
  "key11": "2uZsUXd6PeTPHeS4MdPQseqEnAs3UZm5sm9ARoEPzH1tQaexSr3r9CKXDbrdEy1d4QEYrC63QCsaTvyWc4qfqdKN",
  "key12": "5QMvrajtR6MqsesRmn5vhMWazurvHPbv7QY3sK9igskfJdbnvjCmaRdhnT1EK35DuXDQkVnfjbLfHtvkRchSppEZ",
  "key13": "4ZgkemuMRchrFAGw7pvzRJ4BrvdewDQwGPSHw4wMmqm9KHankSytqkwwG2ZnvtRLnekL5rfKAw2CDPLzLHaAq3YX",
  "key14": "5rt9QKFysLiJwwEfbSp2xckBF5LKHVpa4AoLEqNjtVQCzK4yJ9kUcaNwhpLKDkR4yJ4NtYeX2gRLhQbkEgwUp4Tf",
  "key15": "2NsTjXgwT7fcqa4XSLhqu4Kuin5ZE1xMxT3UxEaEGbVXDM9CR6gAxg2HtGvvBe2xPnXnw8HySETgG7qmmP198hP7",
  "key16": "5xjTid5oM7TzMPzN6TfFYxGExnDozs8vP327M6wEnhaxfVm1uiaKJwS5rojrmtH57nQTS4WQnTXsLBAgfGH7bQDE",
  "key17": "56kyr7a81b5HQENGfCV4Jo4gmYL8sE8Am9g8XW5i9iBsUQL7dswEZ4cgZ1Pv4ZKzcLBaTND3UrJssJfbhVrBzN6T",
  "key18": "4opKb1ZGUsdYNrfNuCkZskMjY43V1o8vp4Sch8QAeNvCdd86L3Wg6fhdaDmR4a7DR5uVHWXbocWk9jrQf6eMajuB",
  "key19": "2NJLLNm4KceyF2Sxi9u71Yh36issc64LDG6BuRZnYXy4YhRePZBq2XVWfuRFqDnckcoxAGroEj9Nr9JKDZQTQFkD",
  "key20": "4t7mWD1GXLXxwi822nhVj4rEkArNwmDwE6Wvq6skXH7KqCQEdDnjtg9aSStGBZHLuxuTcNgQj68pYS7421hFycXc",
  "key21": "3ufD7ZGRWYK8Jnsc2xMVVGf2SbyRV5mgQSMRwhdFoCrJNbSyWjWMNCs71ufLGohhyxgMPYnHWqHWiDRoxXhdKMX7",
  "key22": "4UMmKZuFjpoA1peGsQgoiSQ4eHYYk5BtDZeMgsoBnWJo9fgHRYna9j1bCyBMr1epey8PP1UVXaYuFQCA5oz8rPEy",
  "key23": "3RCXt5MtrDYiu1Gf3Z4Z1UqVBdH8CtLWyT5LnCMc6ENDuEarVhrGvuK2hVhy7Aw4ypJTfKNxtLDwT9PevLJVdPPk",
  "key24": "3AgcMxDYYc53yRDAVAsZFzbspWhnbNDwvjSdqa2pqfoGi8AH9uJSVsdHFoTnYHq9uVb98i9BEywg4GRX1vMFrrmk",
  "key25": "2FHBSjC6gSsCghgyQMqL1fXUueJznvocffM7yFhu5hL7hSLVoE6PB4HQ8DXPDG8FGqe2CyZxmLuKKEY3Tnt2DB14",
  "key26": "57hdb9jqVb6zmpVrvwVmatTTx6n1gKvQrFTfem76fST8sBGG9vccsK2WzeDnNb6ywiygsbwbtjbbVcQKU941tR8o",
  "key27": "5822oyhRpeqgeMeuxrJiRe8Uj6bU8dU3ZBh9RK2BZcwBCQTF44bLTHXujYEvFkZBxwRgXr7UoSdJGCxRUqM5aEY",
  "key28": "61ujE2ExZ8w64i6jAV7CcFXHhqGpnJphe1L6kuEoZQfCMViGxHpe1PP97Q48yHoSEeTKAuDNobDgAwJgjRC96G6n",
  "key29": "32cgxTe2f7G51Hxa3wzpdda3mbmqAZ3zsFd3Q4ujdmew74xgLuKydPn5tdJQr8Jy9UEMa6kboJYDKFqqC9P36i2e",
  "key30": "2qKuseJk1RxDXW3c2zdBNUkkMwpxhzrWvP4Ehw3edgXnNToFnpe7sgs83Aa3kNeLF5adCArt1XFEQSumcU3Bc5bx",
  "key31": "3QjAuLTaT5A2KqhC6o4pCwRdotfeff7PpppmXAzzG6zBnSy4FX5C2iKN9pUPKNP7dWTTfo7Htihxb4isrxSvKmeF",
  "key32": "34fVqVw72Kay1U97U5dcqm2o5SD3S3hK3Wqbmto4ajDFLWwGdCYZZJbfSHboiEzhdSGQcj66KJZSsG8ozJTZzSwN",
  "key33": "6Kxhjp1ekj294a9hqa5VfK3MLiEvEnFNbqR7bSrWEDtNZeZNQshWBtCdmGChWtqsTv9y6LvaUsPUgeHfgSRZRyF",
  "key34": "4MoYbVMhJDqx7b7ZoQTV1D5qUSSNLyBx6Zs6oiSY6RMByTFpqDfXKoyZ4ui2EacjoeUmZDs1h1UmgGixpdT73ZqJ",
  "key35": "3eg27Y3P8rjd4Xcs2L6khmLPWTMetRekRhyeBpQJ6fEt8QQZZcDKYdhr8ZS5z7adiKAZiCgHjjiDhPUiHHLRN76p",
  "key36": "5p4yW5AmwAs33Eee3ftaAeCFjHm2fdXEyas73Vi5JNePKTVWp8MyiZGWStXMBP2Ur65Hh56wTZ1rp5NaoZ7y6F5Z",
  "key37": "52bmxbZwyDTdS6xGF1Q3MXvpvXnWT2PJdx4kh1Apy3NyJuYQYgmijscTRoEYTPsaqunn4ddgMt3zKxdsA6HZAYZ",
  "key38": "3nDUXB6xLuykeL6YFrYyyo4BzWkJSfdH6m4g4Qy29NQkBJECafx3bXBjfTk1RhcDrMCz1ARreKMHMmNPxJSK6GTJ",
  "key39": "2PcVb5A3hT3uyaYhh9dAvvuHk7GJ47yUkfmWPUkWcCVzqyPd5HVwNm6jjZeigLmchhgbR3vrPHS2HyNKBzm4CqyC",
  "key40": "2Tt7n966ZDAat9mb2KPTbzu5mhn5Z16HZ3TRXXAXUPjnsbkBx4qVvsaofF9oVHWT2fQpZUWy3Txbh6iH16T9C2rD",
  "key41": "49ghVnn8TH5K4wgSvVSKZUr96wi7UhPGc5f76igXXgrBKcppVpkfFJ8ADEQefjoir9YqM3t2dUQzvEpYaz3Qq6Eq",
  "key42": "hLG2w3SHdpJt2t4BgFf5frZYVQWFt4uXGpcHoN69u3wTrSdtuq1Xfds96b1uxEtoJZLwfGa1kpYqWRqwLf96txq",
  "key43": "54jnochmPghUjkbNcdTYAK4U8pXT79Cowedmrst6Ubo7CVGJPJwkXGxLKuo9mCvhNUGhFQw72iZD7zpENrqfesc8",
  "key44": "2f8XNrpMJQ57kuTcdYQnfiMpFtC1xJP9hVoszHFRuEnzWDAGEvo48YH6E22NwsasnbnkR65xAGhTjwbbRirP68gf",
  "key45": "3gNfimNEPcaRpk8L2PNSU98RUHRMbfxEJMfWGmr9qfCstdNANfjMBRcLCEYY8T5tTewipwHY2rYtmpNXs42EUoQh",
  "key46": "4drbtR2wWhJWMF6HPm8kzj5A82q9HBapF7FAMmHtArHajR8x3F3jxZVRiAMBEk3QYC9DVdLdahVeqDmqdWbVxJCb",
  "key47": "2SrxAHQu8g2ZaSQ1oUKtpJPDyanVogzKhLnvydvsNGcz9wGDE8sM6EpjmA7KNkdqzhfPk8bqUoxJRPrHbBZxbEpu",
  "key48": "UUopkhoqr8XeqysUXt7MVUigEs5SLazAWi43PjY9HduiFyuxrrHAuPsskyy7QzQLMuSxWbM5ABEBUzD9TN6vUbE"
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
