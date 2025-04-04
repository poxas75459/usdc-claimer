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
    "2g5ZqP8i2UQ4ZyeBMXcUYPb3vcYQYFGaLLkpQKdWMCf4qCxneovr96tzbUHJCvHuDoGzDyQWjFB9eJACBWW6HaXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xXDSQs2uHcs7fG3UEsmnuQHsvV7JYcbe3djUbnahxE6QFi6b2qW542t1nV3Vyxc4ccBmuX8DvHkcDjzvSXBHkPC",
  "key1": "52X5Z2MxWpyTAP7ZTBeS1K1yYXLHpnw2nTkbUcQ41Gvr4KHHVVCuQWkF5YKEQRYdVGFdBPQVDKAA85h2CDSVs29o",
  "key2": "2V5GbUYMYHwfdipj3chCBwAmND9fbw3RMwwaqdBs4qx7MUPZKBwBGomxv3BBiqSnevbT69eFyhSL6987Zn2Pvic2",
  "key3": "xA645TA4sySPXTb7JUDMB1mUuC5HkryeEHKZ6TPafbzW3EMJxpzr8UV1CqzA2eBsv4vDCaYEFLiENXTY3nFtzaV",
  "key4": "5ipEzTtNubwW5UcmbUR78y13BB9JrCKLWq43XMQLkpizfWNoTY74qQUob78PFNSfMff1SfMDd6V8QEM4BjYSwA2t",
  "key5": "2VC1NUEr5PJ6eJinGAJAveLH3gPB4wM4VbGPbRXHZ7dxFJm9pxphDwaz6hz6Ta1prZKYv1FwZgLur2jAT9YHMCpb",
  "key6": "6mb5KY7wRKw7xPfxZd68voH9UjrhHJHLGHGU3Rn1WyZL28xAzwR95ZPLCg4c7DFrtZKCVz4mfXhkB2dpj8MWp6c",
  "key7": "4aYrq9ncsHByPFvoA6b8xrH5m5WuiNdfcCuJfzdqbjCrPVseNWnGXEzmJRjMsJDxoE4g2SvWzEZysEJvppQEE8N8",
  "key8": "8FMzkox5isfVFobRDyQDwgQo1w6vxDdDpx29ZAqzVLD9T3T3iruGGUh8s2LxcwDoT9m8wDVruVVMmSbW3J5ZWX4",
  "key9": "4wM6yy95mVj7Sub2gD9Fj9ziFhrStUDeXze42kzDX1s7mmXtMMWkVg9Wu9XAMjem9t87wRipzWrQcN5DdcMnzU12",
  "key10": "3KcgmRYBveBmAzYsmzdSGT3C4URU4gJbrfbs7e4pRBvCf2mLJej9WC8aHbREEmDF4fqH5AfDUN487DbGa4cBKP2w",
  "key11": "4Si4TMd1PNmbnYCep83nL1sxJrSvtenNhPLdKJKYLgtuanBV7GNevHcNQVdkWvKn9oWdJSniqk7WvDwS9W7PaYz1",
  "key12": "3Kqu95yVF3tHqXbq5kuqdSXdq6LGJKTquHdPYxq2kjKNy7f1pMujVueQR39RSwj12E6fmeYzrj3CK5GXycafyBEY",
  "key13": "4Q37g1qjT6YCMxriuwn2PrKNwfA6SQ1aZZ9g6AwUrTkNPsJwJLoEfs2hBapqeeYXgnCYjoB7h3x8KWPs1oBzra2L",
  "key14": "YnfvkYDvhsqU6nNxQay6jMsGsrUb6xHXesAbydohZkMSr5Knb1iMCQbwVcuggqeja83TTzjLeUsen8huiQjVL1Z",
  "key15": "3HyhMn5n4FtkYVJmnNMdCeW9P587kGa5QSrJ9k4wf4PfMLxKCb27dU5s9SP8nTGiZomE7zJMvtMDUjL3LeoWXQMg",
  "key16": "36eQJsJrfcAu17ecFdBpVYDdrwEZjko7YUXU3ciMWUgJSdzPLsebSE13uX7eRrapsiyfQVQ2UDL18yZ69C5j57Gy",
  "key17": "2qnNGEZFFUKVsV4UqbFVJGK24j8zwaN2RULWduReERKEztoGd8ygrV7qvHT4FxuGvxBGYVQGv2cMYYZhzLBG3iUV",
  "key18": "23xL5rLgwjMJ6qFAEK4BiBTCnbMLGak1U6HB7NnBGSBK9DgC4FpTMnkTain8RGUEjQWaxzXA6Ah9vrxVFtNLBVKC",
  "key19": "64QGqX2qvE7PEqADBzG41ZAqBTXFu1EJ7rGTvWtDakRFPfe8UR3owXV7ygMsNDgmnMEmWJ9HoKMAYTW13hy345FA",
  "key20": "2hm4XaHsFvf5wToPC2qwKogs1vLAynA5r1BV7zDUn8qghH2uzB5GeC9GectK4LEiLvFKstVsi7eWj1Ws1ciVRh8e",
  "key21": "5ZcHLdd8R2JepTyLKSvVDK6BVQA22JsscWFV8LaYZTJWk7sMq5aeJYWXCpNhkEbgqgzsgHHh6bT7giFKMJr4aHwX",
  "key22": "23Ky6Hspb16rL92JRfJ1RyuWWPujRTTZeKWQgRMaQJuv5P9KtbpKZATQYuGYH6rHGBcFUAKNHUH4C3sQA2mySEft",
  "key23": "5nHWR3k9UFbbgg9ev6a4UytpcECi2yuT5dtpwXC5BX41Lb3h9cBpEXEfixFN1zA7P4CpgfnYRCbFM5dKV3Srfkz5",
  "key24": "QP3yfYabMoVYd3AcQ7JjZ5aRc4FZBtNv5Kxv3chwfhtneHTXYACtQTVbzMJKfrHURMYK8nyEVTevbftTQBTZ25R",
  "key25": "4yAk2rebxgGhkUZyzxuquAhfsSQmf2qrX4VQnHQ52pS1uwsFwQ9hfqsB4gJZQ3jiVtmAn3UhubbLiUkVuXPRxPs4",
  "key26": "62jg7tQJbEVyZEE7bZvYEjHtZ5jBm1yaxi2yK2o2BAwEbumb8nphbPAHUvvLXChcshpCwwwUnua6wPwx3uZrYQzr",
  "key27": "29fn7179nmr3NdtPUjdSQJyZBgcm3wkCwfj1Q7wmWmrFWU1QkjHMzeshUNUd77qEhpU7gtpu5AQMuLMMh7hBpVJY",
  "key28": "3wMimHGeyAk9xDj4greqrgwkDVrYLPJ3vrpdNPcXe89GMKyXqHpEebj9HWNsDETYhrYxqks1ctdyEsPsMfZ2HugV",
  "key29": "5ogT3xEuH9GWxRSUBaJKdfQtL3JZiS3Qgn2DHX9WDSDSy6U2uV8e1nc18h96Zq79ttzvff16BmY8GQpjC4oe1o9A",
  "key30": "66AURfF1NLFrqYz9M2h4c3aDEQA2CkQR5yGe9E1qbbPbipXBiQ8TkCv2XMTEDsURqnFSAQ5dd6i7FoKphgVKojrf",
  "key31": "2U5Rw7L9H3N23WgprhMCD3LfUUqF3hNiBXjpNcfRaLFRPBbyeaP3fdNhkuiX4kmcNjATfp4UTHcSirjHGi3kPdH8",
  "key32": "43jEGCZNzcHY51wFMkLoBuuUQLax4eEKH7AEtKZZFcVsNykYzx9UkSoJgGDtsW99evd45ps71nZ9uDKEn3RuKE6p",
  "key33": "oxcsXcTHfpqjGPnTZtyWv3vUqKbxdGNjsV1oUoSf8Ui3t5DmHcEGS2c4ZdmrSmxpaZJ4DZX77eQe7zuPcfKVNXn",
  "key34": "4wLtbesY5zBijNoFrc8zHVatxkdoSfo3EcMrYEnkNoAMyQKjxHzuFb9262bdbSk6ZzanK5WwE7dWKTXEChzmrAzn",
  "key35": "DpE4aM3XL1kQMuiPExFjcnjVpWCqkhQvoybeYZ2s7Z9sQeGfh6K6PE5sDQgXc8BKg69pbW7WDr6pwGSoo8k3y31",
  "key36": "2Pnrn39Xki7AwYZkoRnSEeaopLvdYkBHESP7DsptApKekvVviv7bs8dACygCwvBddwS5YkpTtjt5hyZgcNdKgjaD",
  "key37": "4B3mdDKTT3tTSJzFjasB5sZpXPGtwJWJ9rgG7AB3uoppiDusJz8gBANVUBkjufgBb3YGhau6KhvatQayRhE2akgR",
  "key38": "67biaxqYVPEFh7npHuJVDKChxm5jjnCodjHwQ43oKnrUe2cvbgnVzNDQpeUf3hNSnFY3Jtru4zbpFnWoqbPjtpvE",
  "key39": "3pU3cHUEr5Arwafr6BGWDHsryuQjSfqVGyuxijRdpf6Lbf2UBiu1ZT1UBNbrXGuddgwHPfJMWXDWbriMUHVWxt57",
  "key40": "2Yi2MkSjHGgWALX2YwDvYojVvPpz1SpXxGZ6yWY4bKKP4JJ4KykRhTDZbcoQtvsLdEFi68hs5FXFqbNrtdYqyXSi",
  "key41": "69et2U4bVQQdvnCBZLEnMD4deV3yWKtZaZwZ2eBQuNKyigqgcSBGy1wtqiud1qMTkkbQ7wUXj2yCdhkezMHq34j"
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
