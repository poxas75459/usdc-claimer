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
    "4k8yLkGfBPj7JzZ2CX8VQFhxqWy2UQnGe1iYvjt82m4dTYtfH8J9dzASmMjpk757Y3gcZU7zVsucoAMLa76gtSkz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PdWDsqco7SC52oSMbtzfGnfKLdYkyokRNDfzKjSDAaBC1U5ZruibySY496HD7YWbkQ7JBAAsvJgRu9NuZPmJdnw",
  "key1": "gGLiPXmeRsWap7Evubtvjn2QQWEQcT4P2rV1FPziuBRjW25QHnnYwdh2WNA4XRoQugrGXhXeRrpv8redYP24iDK",
  "key2": "28tE5PZs6pGN4cHMGHTXDvEPDXLeXh98Ed5XeFRBYo6J99KMbEmsrt6K6Gvh7EVx9hvEMXiyZe4fgTt6GZk7sFSR",
  "key3": "43PehZkA9Mj8z3QDVUCKKY6GwYPLSQHA1LjWEBcLtcCoSwQ32gQSf2LdQzHp8oo7SzYEF9U77ajTaSoqGUJBapbJ",
  "key4": "3FbBVeKu1KB8h6cZ1Rvw5aPWzpLhxcGj1x3LtBpVkC3jVhSgH54nYpPJcEFfncL2DNHJCm115BFWQBKiRiW1hKqL",
  "key5": "4cFKGBcK5jWT7oS2XvZgmaZoZSCfVBLeCawFJudRwWK73keywoxf7JhqCnAAo2xWSaZYiBfggmAFFFvtfNxMg1cZ",
  "key6": "5sVUKNpcXQHCfhCprU329NAewkCtG5ruGTcguhdxVxmjiUobMgGuehY6xD9xrYjApSbZpV439cBSHMhDYhNb8baN",
  "key7": "5Noze66Mz3unnMgEjszc5qmoJ2RhNN9zDtmjmxFwBRXBHA7Tyg7PxGZpJqeEBEx3Rz8iPWj4mJ28ZKCy2gnAS5Eq",
  "key8": "HGUCHR8VaAFRmQJFispU29SAv7JTZpBfgYAnv3gydBd6i3GX9CT8XdnN63PEH2c3DgJ6wdwWgib1exQZhdXVAVK",
  "key9": "4NZZ5yo4JM7VKmRfBRWbrQjA2pAP5szvV73J7Y7hnon9T68oJ59VDQn7nFu386xUr5s6MKnydgiWJHKzYP9oEfE2",
  "key10": "67TTx5ddmBssRa4EZaLkDCoeeSi5VWqfkzsc5FifeY6s84gSHdQ9MQxNZXLaJkKsxmbiP3n94wTtBF7FtgmEsEnY",
  "key11": "4eSH2McTZCHq6WkjBXEFCUrcDEx3nLaBUEnhztnMGywqyQMZ38KA3xaHpUWB5RwjGhgXUjvbwAHxizknQBeqVViB",
  "key12": "24h2VyrcmUUwJTwiUFpNTkyns3yVD6EpdYtH4sQR9oWbJGYEpXWWYC4ZWAYQrNqijPsHSouZ9GWjVEmmACTWSXZf",
  "key13": "MUxyEWmG3zH73h4fudneaddSqq3NgxCkozHEYtiFdg1GwGtjJ1ovyEsfX7rtHUGYo9aBpC1vR2TJJwNnWVRheme",
  "key14": "3u1sAbjFDYGziHejXGqs4JBcRHJ49n3ddsHYCUrNFazKaTweEvtpyvaaoFyJWzoBvHaFcUdMhnYtcBdfzZS1RkUv",
  "key15": "5PXg3NHDxJ5xJ7HmbZ7Qy3bW3qmDTGWNAtLCLHF4U6V9iv49yKMXgoEsi2eG6kGvGWw8qT2Zf2uiKHDPiqQazyw2",
  "key16": "2E1DKjBbqoEdKyGNTMQ87rRV7dvKhdpkZGFGF9rKv4NR1zLfPRxBgJMJyxjgLbzrsdEcok5ZiE14XgiBgQuSFsXe",
  "key17": "4zfTBwhPs7XLQw281iuor4UpSdPUpAzSVgKgeJwRGuQSg9iGCvyLcUbWSVPKUaduKUWyQYh2uNEnuRPEHFoCimAN",
  "key18": "65jAHnfQ31zQW68D2jD1ou53foKcRWAKjCwXAuGTyKDhvzfGhzTCje7bjD7p2iAKeE2aYTXKTa7GTJSujh1EWK7r",
  "key19": "3XPgPw9sQgZ16KwfNpH32EfCSdHb4Xbz3zgMGPGWBE55HiR6ABbSymrKHs9WiNwcrftux5XP8U8bmwLCqGecyyKD",
  "key20": "39vTsq6pGhhjFmXd2p6h4LL6Z3bdG24Eb2xVFX2k5izPpdze26qTBvY5BmqPJoZf6K6cavS3CYacEB8huLQda9jj",
  "key21": "T8piC7Ksa743ymDMDhdkzWyDUbQyFrspyQiLGYtUHKAP2K5g13RZEj51KFQS9bxPjdPqA8AKAQcfSsoXFnWJRKd",
  "key22": "2qVpFc4z7VKPzn2wVSMuWv3dK8bS6XkatKdq676uB94kQybwoAgGnNqv8EsGszidMgHTgVMM3ZF7hRbwBpx1YQMp",
  "key23": "PzVVZii2uGoRsFeR3d3SpJwxXBYHzqg1Q6TkzCa1Wj5Doj72JcTpjhXcUZAAenW9LcAKECJ7rtZhki8PvX1xVxt",
  "key24": "3ecNFEPU2fn2gUZwS9jjzLSnE7EsvFRYmocSBTSzwcYPvJA1B77WCDQ324be1FtyJTsxgxzSqXzaCUdZz8A1MDTG",
  "key25": "62ZJxLUnNEhpzQwgexUWGBFSEtTA9abYqpdSPeCi8C1dbYq2YvamyKwATbsMEk9V9Wdx7c3VaJCM3FzxsU6f9FkW",
  "key26": "3HhVkT4gdhpc4bLQDEYcJ89ZiEc5ikepdSDw5LiqwhV245YpJagEJtf45MsLjKZSd8NR3hYqBPqGBLXJznsk1CCY",
  "key27": "2t1H4vWq8RFGwpDtnsbRRjxULcKGHFFAYaNLeP3fXVeiiMXG7fyqoWN5xfV4VDUHK54cMfBn6LYdcAWwV3CovhWi",
  "key28": "3GfhRrxRrAqBSYGqrSNRDyrsjdfz7B7hek8PZG8E3PHtpvSDX3ivKaozKBd2Ytiem7gm4ScM2aPZ7RLLRAp2gLXp",
  "key29": "3nWUrzEFgV1RCx48iay7omog2Tw5avHzvUxW6hpwz3njHuj9ntgXumWqG4vfVEeJjZkFGwifLFFYbjQdsZnVtftF",
  "key30": "4HbT3bpWNCL1SFKYYhWyLH1GyjMfqvyQLbRupAFWEwx7cQCk8Ps33U58cwbWKeaASz9FmszsWR9UcFu4sKB5mUPZ",
  "key31": "5yvbzotxgZt48KtH8K69XUeKy4bUgLMTC1zuZ3RAUFg9vozpJc73XXBRNYoFp7tdfd7JU1H5ojPWZnZEDbveTE8k",
  "key32": "2jsXdeWckyXCuxPqNfVA86zJRyvf1rZ4aKVDZvaRAQui4iPmzFTMFLZdr1VsRTXHCaX6MEFUcVnt1bh5zmedzXrN",
  "key33": "3rkbfqJ6U3VKFXACLJkW6tTyopnzh8VMbQRYwMDE7Wawep6Nh72uKRx3iRsLFe97HzfpKLER6Xd9gmhjR3c2WSsW",
  "key34": "5y6hH51Jb86qcQwgFXQzNLxrarpgKxnCtvz56ZT9CoiUxTp6YiWYRJfEyvr85MWwNStGFdX2aGRDts2F4swTwbb7",
  "key35": "3A2FY5ySGeMhVM9HfxC9m62MhBYtZKAARf6P3hxysRb5KHLVR98CZ79cwRVUoCuAGcmX1FnRjxjJbyBJFrjiJxuC",
  "key36": "44z9wmjm3cbnX6mCKiz8m26YkX966iYFChYbt4fEGwQ1W2HrtKfvBgYj57sTmCvvNZ9qVVUMXsPe8hbvTTSpBtNW",
  "key37": "2nS9Dfs8Em5VFxymLtU93dUdRCYKi1uanVEmwwgeyb3W2n3GzuwA6KFcgkmju9HsMyFBUes5Fg2DPBoAWcyWrSBe",
  "key38": "5mqFzqn3FxWAw47qMBwR91aGdTMcw3Y6EjWs5UKYRqsSseVUtuAttfuVeR5PggKJSSEWc9QobDq1gG21PcPc9VQE",
  "key39": "5Gu1CbvjZJii73BhDtiSnNL9vb6tdikZZpyx4AG1kjxEEtQyxxKvXDb4u7UD99q5hmguddmutPTXAkUSjSYs55go",
  "key40": "q9x3Ja67LxB1ANKz3H8NDXBJN1wa1eCkFPCKhK2TKeE57oZnMQpuUEbRmAXMKziWhu72CzDaxo464inkXQmXiCY",
  "key41": "5GWbXnafLCfZaFrM57WsiLZui5J49jHa3wQutA3AVZDzJBGFWh1z23GvBesx2XCLW8khRASePEXoubZNTpLtLA59",
  "key42": "3ZyvAUwTXwUup9CA1yyKtUajcvCGkkMRzA2mrTFKRymNCVykd8SBK1ndiA5Rh68GiBvi9voduYAY2tdiSgqidLuV",
  "key43": "5E7mVbnFiPKkTYEkecm1KJqDd38Dx6BUkbkhbX8SmCNQr5rGMUuyz8NLNcfc76owxwYo1GSnsBFVr5C5x1ZwdcAv",
  "key44": "mjzTYcivnHtu3rkMJ7sdfXryQYbyHgpm55wTUXKTx2LwBcvXZ1vFMJwzupL2fq8JUSHr5V1tCwSshAxEzFEduFs",
  "key45": "3U8JbkBBqvQfzDLfN5y8q19NGPcr1BQbQdBmdJeTwWcsgtuvsLVoa4HKMeTNjbGYfHQ9yiA15q7hQrAxdXSfa7KL",
  "key46": "54xEuMFg5rkN7BQhTpzH5WzNjcwCwMfVYF8cqUek11n38Au4ougvz6xSvweFxxaR6AafsUcM7MtoT4BQbiiH6ZNS",
  "key47": "2ft9BWeGGN1ChhbZCJfq4PAKfW3MsUJ595d76pPBUritPEfg6EU6yTuV3umdE5o6J9Cai3KkRucMF1cpSVsj8pgf"
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
