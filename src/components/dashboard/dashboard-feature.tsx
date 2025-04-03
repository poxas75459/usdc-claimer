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
    "5qTnLH1ENrTyaWTEib5ioZtf5n5MRuDJF1V12vbYpMgnKKZAeGCoYm9jwBVRyfWtaUnGxz7LE7L7vdtYkVGCnJBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X3bkSf6E9yQZemKTCkpcp6mYpMU41eu2GAmVDug31JvL86e3vjGUkZ68rTAk1aQrG8T5xAPsozMHVZAgejBCUkb",
  "key1": "5rQvLvgwyEBuz4GSWXVeXkysCK2er4EtpuuaYHHurc7spLHa7AajQjDF39LaFACUUA3Hm9BZfVrWbWFpjf9a1Z9n",
  "key2": "3Z1d7UPijRdw3abmGj44MFNp6QRiFtNG3bcS4NCRF7ynZnZFtHAT46Sd4WqC9vsUcymuUdasdJrkSEga5D2Ygui3",
  "key3": "2xW3DwDkXiLNTtkk6aiiJZ9ops4wtHqbWohkTKmVyc8ERoofjdtYmkTiLoyBnYjXFegVezsFQraGeExiisT6N9Dp",
  "key4": "3exLDkp7qsJgrjCXCFppBbjzhfxhjuJt3J4k7wWffiBMFk7gUymkLHzA9rdjV3Z15M2sXuiDajawziRStT275uWJ",
  "key5": "4Afvf8oVtzjeAg8tBauDRRgT51mn4Sz9ho7DexwtBdqqsmWRiM2fLkkCHxHEk8RAscT6fci74i98H1bKC3x8rcyF",
  "key6": "31BUPj8zTDmrBmp3rJyMWd6DDmbr8GYXWsWoNm9mGNehxfjoZcLmeHJLgLix8BR94iL1Vn8XaaKfrxkR3jwSoGzM",
  "key7": "57pMCXGRD53iQdeT92whg8H24Hs8bqePiNd8anXYix7oTjqX2DppaUgegCLEveBvGi4RvbRa2DGxrVUca4hqaf35",
  "key8": "6752vdaT8xP25t8xDY5Afva1Sb3yjN7HitF7zXn5QEqBQsDvcS3RCQb7Kv9uZ4ccPzG7B3p2WkTZJsNnGsxneR4B",
  "key9": "5nRpEySREjLnwyLmyzY2HsUi9Za2z7jQYY7Pg3sjnYjfTVHUQfPhgpF5EUAjsLeJRikLXxtdikBtBU6TbnbpL2kX",
  "key10": "2XUmLTg4Kp89HWfUGdDCEot89uQhTdpeb4XZRq7CBcJ6vpoT7GBukDc3cbp1QmAr9p1Ks7wDeq64WsiU2VeJvkcg",
  "key11": "5Ldgr3ScZreTjsWzxq7zAtybmGwh1RgXYmjGXkhMBN25KNXDCFAs7KRd9WpWYMgPj3hdjYnobXNGvVBd9cksM4ZK",
  "key12": "2T7ioyNAV8rWM9Dt8ZnzoxgcXgovyBwxz53SgY3tx4v5HXwJ3vJ9BtxKBWoo6CLbCWTgwCd2jGpoKzaQ48F1r8ub",
  "key13": "3YukpBsyHzJJFvSxxWggrEqfQfnmBCuLh4x5aFiqctQsy3sAE87rGbG675NVkXrhDbB1a6VswxzsSjJvnV7W9HW1",
  "key14": "5jCVrWyG3F4YRBfXgugTf6vtrMfubxX1FnLHQuAgQHpM7hLkkUk7nyLWkK8414TgxiU3XCbZNNrLEiGfSEWARFmZ",
  "key15": "4BzBat5vB1LiifaeUcYpx7eg1VR4m946FWzSWZfDd1qmW8cJJYE9W6QQ8Vtb7JXkk9LvWoR7xoG7zUHm3kco2owJ",
  "key16": "3Ajh7NwDkXfACTJJ7rxdeU6kKuWEgQg3ppBPHoA5qrNasUtthvHjfX3iMXvDrSDcEwhDLvz9bK2avdjoRzAemb3o",
  "key17": "4rcC9MPhL6eWNLtPunxT7Cpuvbu6y7ma5H2KcKVrQgTQCVti2cUnwKjMGHaYm3YtFwSpHnAcqRoDJZSgHWwmXtfn",
  "key18": "5swoEQet99PJ1f6SQEPsGfCFQ13DZhHH8NTqTj5V6vVmFQDvTiRHqCRcoCJraNEmgw48xWLB5a939FvKjGMHVhhV",
  "key19": "4n3PcvgZYeekdThz2tM4rwyKLwWaKtSxQxeVC7kwMPJt5o2J21YSjPJqz8KsPzJYvXWgswQPf5cQDDgVbiCzerS9",
  "key20": "2PW72wBb4XXig212d5YbywJAiApDRwoQ4fvFhw3TaQrfdNZmyKBYcHsoDq624ZeuJ9ZWc5uFFfjk8LZbohf4BKZv",
  "key21": "4nSYnFCDtX3fCaFpuVuLjfBcpufXZm98vDVGQYRyTNUvFrbvb5S2bFqPVsPJZCP7TnQpwvMePFi24H84jtgLhnBD",
  "key22": "4iCWyJWS9WmVtRs7Hi33RMWq6qXpQHnRkTqKz1VZUbtMFMjRg3RKs6fPwZ1JQuC2SVtAUCmC6NPZG9AT6n5TEDRp",
  "key23": "5m7aEoHJub1kKP4foufXzeFrtF9869LxMudGQJUGYd79Rk4wQrhodk2VnFsWNpiXbNBXD8d1X5jNRecAE2KfFjui",
  "key24": "3PkU1acMNDcnfFXBwLCyAEd1azR8xT3uCGXL8g9BVByN9uwgduHVgjjm2AqUVCdcTxmNqtFEamvHfLH9zTQYfYc2",
  "key25": "5BmgdVVPLW6MoCtKgAbTPiAT1urhPiZL4b541TzTnVqts4GfmQKpchv3cqRepWGrJ4W4pKWS4fYCEqUgabroRAcY",
  "key26": "62qvfkCDfQRxWA4wrd39V27kMememKWnTLwE98m1Mr5fTXcwHEDtYKSW1qu9QEtBmNJVGwd9UfvaXTynDCYswyKz",
  "key27": "3JfgF2ThdjPD1VgrfZw3VkT2KX8Wt9KVmKRVAEb9jQSusoxPrfFHRv2Tp83B4zTDgtcyUvk6z5bvrdnR3mbn5Lmj",
  "key28": "3Yaq3zkvTvbvgg4bafuTBFukGLyi7ZATjiRoKXczpjXnH7cDQ715C43LQPh3biLRsxXrv76KX9ZVeDVCD2Eii2JK",
  "key29": "4HiwYoBx4uT1wxyAU17yJGYfa8TzeDN5xHE8b9GXYkVNJQWsgnrhoXyK2cuy2q2Qj2GjifavGvdowm1VSS8TrnvA",
  "key30": "3Y4vN4WPSjof1aoUjgbmW8JZJ7fafHuSZ2fBFgpvdw5bvLZwJyYL6Do1vxv9KoqFCjWp6bBnPa3UWtyiYoeBwi1m",
  "key31": "3RLCYfwCbJPBwNa3vsBAgFHZkSrX6wCH8D8irabXGACLeSGBvWfjFePFGqun3SjLLWNpmTJNQB9v8zhwsVphZYJt",
  "key32": "62rCrMUxtYut22JYxEFFWMPpdJ8VUVEE5BbSLyP8pnyfGfuerHiU9Tt9ur4ZekiT1AAbhmU1k9s6Y6XCMiT6vrXA",
  "key33": "3PhHEE7a3ZP898iHKQ2QwWkHnS8Ho1zspDTnjnXgy4RA2prkqkErzVGzKXDvKHomUg1SP3i15iFFBXatoHtC9XyT",
  "key34": "2RGox67K9V2AQdcfEVE3SFE3VoqtJPRXjyaoNRdwYhgNyNNE7dHgEdpfgVZ9QSSW3Ry8UmYER4HcusidMsBV1ozd",
  "key35": "5hBTqcfNgRuWoxB3gbA4RxXkHLp1iWcCnUqXvsf4ZrWFFN8jZiauwgisVGmFNgHY72iMarpZicJpkJoemzjxxRCR",
  "key36": "3uhDTEBNWDMVJunafqP5gqqzMCU6p2CZjoQ9tNE6MQnPtb6CJpSgE1oJP1EQ61fT6qGwk9xnpUduvx7Ue9cFamR7",
  "key37": "36niV156v2vAmFNsHEPSdLymDNkRYhMgngbRfAwZxodbJtxE1KTyvTdeitYbwRuwqNwKKw584eZ3SQLmFcxVe91u",
  "key38": "2NSnv8Rc4NvonJza2biy1A5WHUMkRJqp8ziQ9J8AXWukJZRkVN95eTQ1gcW1SnyYhpDJjuAukQQQjhQN4KAkVTWK",
  "key39": "2dggWCocFZPhcU2jAtQYH5af3cVusmfpEkAhp5n1QJK8BTHBc7RDjAta6xEZR45Vb2KZwC5E4vK1DotyAKaqtS4J",
  "key40": "1NFB218TebB97PHCciaVXrGbs9Pgyxm6d7AMxVWRCTPBeGuQMx2VTAzcDzj1BH4iW4z74xy7YRaK9r5V6ZCmVXM",
  "key41": "SLeYxrxq6syXkG9WWvoDPbpAi3EgJV4AUTysybBtTYHeEmtX9bF8vvb2EZQ5WaLA3ecZpGqpNKfexnmTz8LC8dm",
  "key42": "vG9g2ou1raW4bJvz6Qs7xBoJRn8yWpHfj4dK1t9KSAHkBy3BJScaGitE6waBM8GNUgjgeB7ncT2KgyP3u9zLMBA",
  "key43": "5BrRAu4FTXM65AbLKUh2qUzTv3JAmndre9qMt2k518EowmBLZu9PJhNr5ppJZww5bByN5AYn4e8YcPYNjbiicV8M",
  "key44": "2Y2G1esp1FfymsSzhctP6Akzu9xg1MzBffPsvDeAxK2txbdvnWSVHTtBAhCvfjiwYx2vPUFa6WvuacLatffbpe8B",
  "key45": "4hrUzD2dZTyfktvZ6ZhwjXnTZE9FZsjFtLie2S6o3JUdAdHMaJV8bxGX6ACY5Gx66hsWvGNxKZAD9V9i2drP2XDx"
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
