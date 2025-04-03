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
    "w7YrcugbYaTem5ZnRjY2BG5GRqUutp9sJWrajscy7iH1C6ebbjd6hjSiDsmBqnpmRdn1qG12Y39zXqUJs1n5ENg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N3EeE1peg8xRpg45rpz4jx5DHS2Rxu9VizUVLCBWbvwvU3JmTzho61nZDVMrSrFnBAZfB2ucmi3AQ74NattbfsP",
  "key1": "3t1gA2hGiGFkZPhksXU12WBhyzMJscNT1iWAnZWDbzsEzt185jY6CDCGpdtf9kLQzEe1jwTRK7uH9kvBPvrR9xqg",
  "key2": "kQMyNK6CMgH4SrzGsKfKeKEAiC6s6PXUYjDWK3K4E5RGfMUsRuurq1Q17jaAXSzca1wCESZQCQaBZRpu6thhn9t",
  "key3": "49Sad2Xr3RhaPaLMSLbhuzwkJEHpodGJMqRq1wvwhkBEwETbdbGRGNynEu9BguksCpD2ULUsF99xeGpBHBMYRqew",
  "key4": "24cxeGdEHBJ5kwbBZ3Q4aojDi7yk6HrMB4cX5s8ptht2dYnxeobXnfkuQ1z7gtnbeS3pDt8qELEqVNfK6mGTMJYA",
  "key5": "5UuWiXKcHPzySbjdc5pV863YYk7i3b9jHJ369VJ4aiGE56bGJfe1wtrN7ShzQ7CjBUDwC2KeoLAd7YreXapwanMe",
  "key6": "32DAGyEqNi8kYRn7os7uCxn3We6kBXc28NRUJH3FRzanqLxBxA1u9rVqMS4A4YagnDAH4c3jXhpuQvkLLLfQVKt6",
  "key7": "4kQjAN5gHoaDcnRpksWR83yP8R6tkh6vCYU9qbhXoDKcoEYGPhAt49onbUXiBPC8NgnzMq3YVM36W9bGeGXJDFYt",
  "key8": "3FSSupSKyJcRTvqCGPYz81sUgFgkR9JSYZsG9hCC5K6wu7Ya1eLHNykQ3WhHvbjz3P6TgBQdQLDnbBK4TDZPa4MW",
  "key9": "Ac59iPDCASzc8RMWcJPkv9G1qGR78akSLQGn2uFHwnJBm2ADSQXgivFFNrLyfXU1MUXCp9vZszUycwZQoyZ1hzC",
  "key10": "PqAtNHPX7JbDGdwf7hUdW7FWFBDcEiTT4fWt2yM4Yn3zsW5GBBeT5Mcf9TQTW52pDpUqbaJZA8aLmBcYrdGz3uf",
  "key11": "iJCD3jnEQ21yezqaDZJt13zH4rf693EPSktzzAZ31TKi2oKagxGakFtpA46TbgoiknUHhN1oN9pxMBqWfWfXYMF",
  "key12": "49pQmVDBDJ8LnEFha8jmJc5UaQcqAyQZJckrPzkJbnpD6vfsVR1h7KJ2fGWJ6eeEyBr5cJZEhDiNbdyWWz6Gf36o",
  "key13": "5jDjDL8zxXjEVwfBFz8EYPUUbjmDfWrBvEKH2xCkgnJrES3CakP4trbTfA7PtD8CcbtLGPRcxZXv5jtSKLsFHfjD",
  "key14": "5kCkScALBs61q1aCNazDvcw4f3i3BoM7wHniv8hfwiWrzaFPstsbYPbCvoaRKiyZiErzCxVDYKbQgXRJfYimiYSV",
  "key15": "3EPNo52wfZe2VPCqh1ABmtgS9CirMwgeQR7bj5hFXxW4vxu2DRDBnmA2UmJrjHa8q4PmT9mGVjZJNyR5qhBWYg1P",
  "key16": "3d7tSrcWKk2gExBQyd4Ja29ssy2jaNhZx8xT3Lv5NGu1tGfj4yKF1zKPGLhnRPS8enEvwBXAmanWiWAk3WkqgcuQ",
  "key17": "mWKQiiabyeuJcCbaFNvLD97QX6iE3N37SzfT6y9Ks4EizG2PjRdAtigT2Rq7Q4U1dYGCA43pMFcvKRKEVz8Pd4o",
  "key18": "5tH2rThwMCc8JbZWSd2tfDZrRogFniD93vnscc1ticQAnAwjNV3YHiXcS9Me1rE94TqA4tQichNX9kndJXv9VuKi",
  "key19": "2ZtaoX2Mf1err2hq34AqwenEAnCPaDm9A4LWdKQACEAntKCeP4iFKE7X7hpwFBurgkZ5dcRsufNpyDke82Y8xWmM",
  "key20": "3RaiCWY6NwKB2LGHiC1cZdWvkWqV5sm6dn96JVYSRA6chTYPn4YRUEFhw6XNN4UXAvkNxVatCUKZNWBDLiPbopaU",
  "key21": "8kVHBAR99vhoFnzReAbXJCfPCkpJP4WKvgvYMQCxiSPZ7zvD4pDoRq3DGuufKoKGVSg2QFxRHVhWwTmijJ5HK7y",
  "key22": "5sBne8cYzEQQTupRjTtuc2PtrSbXWtuy5ZznXZ5X7XhYF3LjQcAQpZdV1dCNP5HNmAZbuVxvdHUyQBNUbGR6s8gJ",
  "key23": "3b8WaWZVZB6gUSiaxeLaMd5wkLgCTq73PcfZm9GBnaKPhzdphct6HYzcdDw2yjUEjp7D91V14J2UFckdp4HvHq4a",
  "key24": "mPUWqQQSdxt2AbXRe3JmYqdPHeZLGBuyYrcoXBEHFuxQohnHVLSZsWGnHtyEsEdJd1SMXrUQKkB16gYp9nKhP19",
  "key25": "3Dox7MMWiZh7wTQsx8yXYcYD58PGs31iW1UpFJJM74SoxpFziE3ZyvjvYt7xCfFRXYSDbSTGRcZySQAuYajPL7gx",
  "key26": "5HFhaBBQoeARUhiiHLuqsF6d2QUzoemGpZTsomXrTrKKdKQHVoXen4vVu3Atfx3BcAeYWWQjcDQVjyGFuz86VFJo",
  "key27": "ty1EFVzb7AeNFkigX2wbnVDQySu7pzZPM2GZf2NQ1gzSZQbCnUE24QBT6bUXLbikYKvrqJqVpZ7D1iysVa8kFXy"
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
