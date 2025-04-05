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
    "34DbUADfQxfiRHDzx5yT3gUMgaNuhboy9ifoccxZASF6RiMKJfuJDmxiutFnJoVAFHJuyDgHcyfR1J8ykVQB7VxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35VrX4oYNhR4zsvJzXgVFpZDZct1BemDdtRVtsHogEg8YbcSJ4poTXbY6vYpF5jxUWhgnk1uf4pj1aGPQpgtqKu6",
  "key1": "4BZA8F77WeFGRfoSnDGoPq7CXXfrTBVwJMHzXPLmp8ArGu2mJnod7q4XWt3piRYsiVoLSiMD8xcfpjCdQYahURSb",
  "key2": "5r65XsLTW4xbazniJDn9PgDBYDoSoHdPvfxykv2UjutHAXut5KXF79sCTMpDEfJu6Ufwj9mVT7C2ycnTMKsPnoYL",
  "key3": "5n3Mc12mqP9sDQrP4U9UdyULSep7kxJn7zPDWoyoXRq8BY5sb3XxC8QoaJrv7TYRyvhPi2HRgfPbJMviieDAzaPE",
  "key4": "41zE1CFBFJxPZrN8t68tkejQudvFQahqu8XEVg39MKdwNmMCRicUQ8gVfZGWEupKm5gVDLWFarjkhwywDVNC73gr",
  "key5": "2a9nZ1cj1nfzUpBUCMHCy8jyPQBjrZVAnSeACwkKqteuZczqgmxeMLBWx8reQubVKwdYf5ftkA7inCB9iMrkxUoX",
  "key6": "3yPSTxgrkw1cjLaSEt42kAEZ295RvpJsW3MmXG9H2hSbjoCBDsWhSeoPh6BvcjW717E8qPBXQJpvaVz8iNFCT3VV",
  "key7": "MjZaqr3eq48L3tL35wX3PUTQUVoJWXY4pjSSCdbNtVEL1Us5PHrteaA84v6aBajeaXzADHwQoTnsuYr6hDSuubk",
  "key8": "2ATDwJqCv7xsrMn3RaTxcAAP3QWReswVbBcLHTCy8YwQYkg98wtodgd3upHdLM43zUDg2e8JyAMQw5VVCMoU1hPM",
  "key9": "4mWcCK25dhu5QnbTvrHKULjrMfRJoMer3WQgm48sSsFXYUVBL5pVLYJHFVjasm5AsTpbLDrrJsN6vgPa9tt99hae",
  "key10": "3vdhWque28TvxJ7766U8egWA4VsfwiGoGab5yuUBKLTBcoBrLg1tEAbBBdm2vW2GBP3i8iau53CprtouTy4Xf9mE",
  "key11": "4EoGegekkrVHf3HYoq6Kf9vACDHXCdPzpt9QCNPCSE5BM3AtN1jvja4gpSTki5GqCVbDmsyuJWgieAXQKvUKBgn8",
  "key12": "39eYec4ivfMwCbCiqSw59vbiAKqWxjWWPMYSqz5t6yULfuQo6HT4xo9qZsVnFdguQi9S1W7ZUEEM4GzomMavWV7M",
  "key13": "7t8PCzxXLvGrt9Fszanrr9grrKuQ9yVt7tp51BtPANHfMEcrDgVMSMRpvEbJX9eStw8JXZdgYhoX2XXYGRwZe5d",
  "key14": "3XxhHf8Kjk6kkCR796nKTV9A1fBBFddjP3f9d5EhVPAjVS76T9Mf1vr7xoKVmAwNMVG3iUoCjB5kmbpd6zLnLG27",
  "key15": "4h8yEj7DmPFZmRPq8TNX6hpQjcVMqHqafGJy9mKgA78cVPT3GxrYqfpSwuuaXvWrU1uJsCJ9xztMJpmbXQzRZfzt",
  "key16": "4eMabGuX9phx1Y3QjMs2NKvDkEJmsxKNaDJwsPfrqhqyFnGHn53EVQvgQojkn6B7yZiShB52YbLMStkWwaxZZ645",
  "key17": "EVrRHSiJCY3QwdTwWE6YGE3pMAfa5TzavWB1Q8T5CqCkH97uxGkde6yXPbsRTrjd1wuTrpWcAdTqwBpsLzHKvhe",
  "key18": "4PKbUgJtBgmyxjDpFQdojXZoYpDJnC78oZ5tHyPJHfHSuH1AACLH6tbMQkBvzRdbPjNqoPEJdKisdzVchQk2MTMf",
  "key19": "4BgdsRjAUpXnZETmNcJqKAVXrGgnxhXFsgBusXzEnTwKbqXXAhNmC8UNPdUERRS9kYYK9xgVT6uTMkVTokdc1Q5u",
  "key20": "4c5YWC1Yf1iU13s5E4EcczsQR2x6v61fH4GRoEenPgAshyerXeEWoZ8hTGnJH3CDQREeUY3XESi2t6n4EpjEwqzZ",
  "key21": "5BQ4HrrB8jCzgDc7GbB3Gomj6KqGCM4kdokyZYWK1vCzSEmeRkshNDKuBFp2HdsxT2rYD9rv22jZuwMsH1iHmKs1",
  "key22": "kfpMvPJ3XtX6viLb54fa4Nqjw8V15BTWPxfQ1YkjXLcobfurqWr2ybjFGuE4rMBdgZ7gwLR9irqM6PmmUKVJ8r9",
  "key23": "k5o9wnYcU2BuAjeFCjuiRa3zUeCrNa9j8vqUz5UvzYysf7EGynaSrx4jvHS1B1V73nfE4Udj4Kxuka8ALwkQsWC",
  "key24": "3tSV1Edx1G7viQ9x6HDy2xDxDLofMZquCszk6P2hXAmzCXgNz3PT6wM3XTEW5agm1hFtKge8RGwfwyY1gBtezsMm",
  "key25": "4NwJmgWG8XHE9bvkjmvPq2f83xejSQDjShvyS5CuBD47Cx6t8vA8BuDC9XFFfu5Gdbbafwq14iSdkzfBRPLjBgr8",
  "key26": "2xpt8Fk2yVnL7iZk5vJtDvfb6rmdNi5Xn19fF6YM9uPbtCxXG7QGQXKFLeqJheTfadurn7aShH1PcqHezemuwViS",
  "key27": "cWr8ij41SGtR8CYGrMARUdDW7s9zfVXQoWU1eRDNfvdjAxBbHfy5s1yEpMB7AYGSiwYo2VzRLS6qMCBD4AsDTMd",
  "key28": "3p7BWVvZR1SFq3cntdBU2Fbw4tb3w9UopLcAt6fMdKsVNkpv2dx7TEXJasKQ9WfCL3eawWYrWhtvaJHzLQ1ae3Js",
  "key29": "3Un1APPFo8dnLPGJwMxgiKxF8VL6LywYfFJ6cbH7881KqCXtcE25sLEXFqhfBc1DUfyMQnMcieUKAoqjQEVVZ65V",
  "key30": "3qJLAfESCDdPHgrZTDRKFtcpjbjHQTPdWaNR12e18RJH3oh5Dgvsjcti4oy3feK1zaw2RJ9gBhLzamtVibkQNC8G",
  "key31": "3wiPUGobDHrWA4jj2pqiNa2XtqC9ufF4idfAQSSEYoCQFHXTj4CZQ6guKEQWuJvPiGhVgu2frcxaFoHBjCg6pzTz"
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
