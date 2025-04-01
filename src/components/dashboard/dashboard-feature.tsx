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
    "2TzLcnXnguLgbvka7LP8wLHa8jtdpRhB584pA8Cocat1HaHkXcCuBDaAa1Trs6i38n5dR56xZLW4RzzH9tC81Cc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58LKfGHuDmr9ZyDWTFSeKmP6cexBdtuaKQA4QVRUNhkT67Nke9rup1FNMpJ9zVFGpGMejUVNWqhxwn3ozQtm3spv",
  "key1": "2JP6dvsM6d93qbtJPumKZS7r66yxaLdgp8yGBoK3dwpLEvXPEgw3bRsaDHvy3An1iekp8Dmzyjy4YAtUVUx7Ajk",
  "key2": "3sPfn5Zu2k4hcoaAS5CTh3e6sW6paezvpG7beVUBm31X3qoesgpgamiXegGq5VFEqMUPz8sDj6LSdpqFwiyjwtiZ",
  "key3": "2wE3BrPzkuyG9bfqpVuS79kHcp9f3dbBW2cr4xtpg5uMurF174cNBDfX2woGmUoJ6wNUuin4aRfk3Fi8GXy6Z5tv",
  "key4": "KwyAZPpRX4SsorKzZBBfqpnKXXbMHN8vGC4r5P85GC5XxUZvRxzdnvjc7cCy7MwvbT2dmncYtAuVNdcWqocPztt",
  "key5": "2PWNJf14kPp7nG9V4NCmggMqquWJozz41yEsELmjtAdxufo8nsCnGs5dtzkXCd7V6HjVd6K383a9MxXN9SLK23m1",
  "key6": "56gwuYkJDoYbjhNM7tqcwMG2D8cmpythgQxx59QZ2Qaxcfvqc4uT4V2XtKXu6odBfFN5aWRDykevtpdG5oGxBaM7",
  "key7": "4GVYmtpLUwqtY6Z1ZWDnLV7PEXKD7g2zhN4fPx3zXyPdMBWkrCJp1E9jJ49PxhywGbBTCAe9ash8ndDBNZBb2ma7",
  "key8": "3CsXDKndMafwvKBTjXJymXmeepxZJio5VH3KY47JGgrW5yeJsbh5942gmzEnMnRQsb8U2RG9K4LpTFx38qCgUfNf",
  "key9": "5VsQFQa5B3KteqFAtGHvStdMPWXoUk6w979TB9DtGT8AiXqohif4Gzob6pMErqjcSRrNxBxgtaDW5XSvsA5DQLGu",
  "key10": "4ygCLXx5X62wywcLzS9TqiWZvjevduJpT7zWroYKD8u5kNJprc36H9GVDBRjDsBBQsfB1C6crfvFLaGnmLVtB3bx",
  "key11": "4h4g7xp63WGDqomsSGcHpRH1poHFpzV7EYAntrLEci4J9mdY98UdZ2gNDLvXyr5jdkXFfejeCU4TEH8Zu94wCTS3",
  "key12": "3vp6jtCPDZTZFu6HAQ3pdfz1WSBriUTcumQxZFCuJwN7Amoobg1fn1bzbFMmmSMtwSLoBxe2ZewthUcCX26tZQVx",
  "key13": "53H7qfcgLQX2CoEgKb3x4ZKbcvpJwNQrrMFbhu9myqSyU3NGxQgJKBKbP7tF42ZpG37GGQVPcQ9Zi5FJYwSU81mH",
  "key14": "4QYDczV3BoXjFJrMhoMEv9jG6WZLKu3YeUrE1fmTEnCpcMATtWhcjJNGCoXEeid9KRnWSajSV3JqXUejS6ejucss",
  "key15": "2oMxSybBeqJEPUurKvG1RyQHog2tHtzrqdZUVMaBURhzHbTTTjXUzgUajuYpn7AEtwJVwEx19HMKR5ZZRZMCHtLm",
  "key16": "5ygzRFcmYR13GbAkXtbDYSv9fXUGBD3Ru7JRa95gvWnnp2K4ETaWJonascSJ8RZB8EVsufcsVheNxQeNA2cZcZ6M",
  "key17": "3uFd9EfNZbcCMzdqWf2Lywbyyat5VE9A2mUhq4PrhdoikThswqaDtaqY7Yg1U21Fee7B5kTcBAh3K7HiT5p4X2LD",
  "key18": "5mUiK4RfKq2hpsK47tZZ82qm8DCY3NFXoWTDgmh3ebSWuNeXTJdfR3BuUFegejFLFUpM9cqyoZx7KWYs3VGFzDyP",
  "key19": "4agjgVfERPbFJybjSA4hjcXvjWop5hGL6ftcQqwWuhAEb1xqjkj55qKVmHFqXyVqdnKns2Txu2Zsxq23JvMzzPAM",
  "key20": "499JsWc1LsNAoahHgFmeU5do4BHG5iQFPmfB5TjVcez7fg1KTUZejxHQjN5FZvLBbCTFaykXsWkFMUbE7D5kYaUe",
  "key21": "2eSx3EAMce2VPNP7W1erFCfe2Z8eFsSWjBzkrvKJsg1AVVnPJ14RaiekfH9Zexn8dUgcjiPZVGhQZYCSvPFq5VuY",
  "key22": "59EuA6BZ2pBroV3p2iyuAHqJBfr53y8XmF7VGrCLMeUFC9yMrdnzKFambHo7u5tUcA2yEXmGCA6GoCKbzuDZ3A2K",
  "key23": "2tGRi5HE9RPwZwTTU1X4mqS4uHjdWMZ2K5SuSV6Yvne6uWnaepHQJwHXYBjG14LdXGWG4oxgZd4b3E411WMXGJqa",
  "key24": "3KTKKzCXEoHS51R8m18x9vHoZ1dC4bZmqJBvhaMjPq9cUauKYqDMpqSKb8Wbyxqm3en5yrUrHnpLkPsBpMZfyXra",
  "key25": "Nv9oBCUVX2iF5kcrHCiY3xix16hZ4h6ULn8hpWeqMSz9s8vXdD8ShrJbkpYkyzmhB6eyQkhUZU5bdKfBqiDUob5",
  "key26": "djxiGqBL51bWPkjUQx8yBUb2DmiqUrNbKhYZbuMKWDdMS85sDq5ULEDFmDAKPqoGVhWAq1ocT3JNYbfA9Z3GQKd",
  "key27": "3G7guNjAbXygDGLdyUtEJERbDWAfGNBy2R8b2bNjK5yLVxV12jtQySasjLpMWganqNz16pb1GENkxKGUCnSoiK2o",
  "key28": "2dxKCdsJfsTrfVbMSXNuKqrgWXzVtTSz5FELBr6dbBmi6Qrkfr7gpedMyBaq6fdeKDUTj2mHJdnqWPVnvKLv8o8h",
  "key29": "5P5xdd2RwmSsJPEy7FZqJRxr61JtemAgD2j9YT9xjT9NJseAz86WufNQLsPiD7WgvGDjiXMw4hiJaok3qJ1Y7Fp4",
  "key30": "5L46iW8hcwAiDUb7T3vbuzzsyUHyHruutYHYJMdFvk67HxpUbgftT5cR1titWQXZfuVfD1dusEft51n1GAcBFP7G",
  "key31": "5WiTK77QT9XzccFT8B837qfC28FR62rRL6VL1TL4eAUYR7AU34BHKPQonj1mQPn6KshCrKa7qih8NMEyp5zFqHEe",
  "key32": "3v8adKQe1HMrqNESFhZBA7pXp4eTzGj6YUMALwuAjR7d1ULb2JSK6t89oEUP68yWZBT7ZiUfSp67WbndHfEvcTtd",
  "key33": "51aK2zYcG9itAsZiLU1QwLrUvtAkAYezeNSiSE6CmqGuqtryhMaugyWwqAbiAYkMKrihsdRypBCHWb1GCsWvimjH",
  "key34": "z6bXJqWW4EzGwtBPyFkdKR4QJkJ7MGnLj3R9aGsxi5nuX72bEdU4bCCSckitmZHcNiEsCT1GGp3KBUPq9BLsZPz",
  "key35": "65Smu9M1C8Tt8nHh1QtPFR9SF1LTxEoLYqgnkqnSzppDpWP7YXJRksnKCfUZPRPXvwYXt2yTvs1vqipARqhxCGTZ",
  "key36": "b3Y1Rs8bhZcpmJoaFkq2n2ZDrZ9iU4tCrcBYNHC4MXx6V5UxsroUrrnthctQzdJE1xFru9hBfiHuh2u8ngekERZ",
  "key37": "2f7niUASEBMvSZ9P5755wYzTZkoaGNR17RxPfFq28SYufJr8axkrcoVA9LZX1gn1SCTXaYk2R78xoHMJpDWXRGTk",
  "key38": "ktwCcaW53oeHbnToPZXNFfHXTdby4dAXVYVroAKcK8P9hm88SWvEi9QbZGqckMABZTbzooiSEYGtPuuaZruoxqj",
  "key39": "4BHSjJSQ5BC3H68guQubKGeYwtKZUfZfMH1PKKRPrdDyt656ZzzXYsZLA646XjmURrLTM6n8bpbKC1FGQJQzJHDk",
  "key40": "WiNqgZd74vMrr57LdyJbaRJ8vxfS2YSoE64s3j3eba6DHfrkHdJaPwwWYHqT1h1B5MbgjY3bTf8M2m3qPsNoxGy",
  "key41": "5RWirPxpdiu4GgKEK8wGKXJbpdkCphixTXz7PgEV5WjCDfJkvoR2MqcQZmoLH4guhn9W8id84o9p3Kuh5opeAbkT",
  "key42": "2yk6bWiyBptr77xmnuhytUSphJ9mWjfsiuQREy8TVcaC4tB2A4FGh8bqMwTm35ME4GFbxbD9mu85G9oqFVRUkzi",
  "key43": "4fGWE3vs6P3yedD5w45xAp1xqPNrdzqCGmUGoQecLiQcQ3JiyCqWjvzwpb1xp9YgbnEfPGFjXYKq25RsogSPnHfW",
  "key44": "2KY7JPZRUqUxMmyKwtDdbng58de5se9egYs8DndUweS4xnJ5apQ3XioqdpNvx3RqjkmGhWSbrnrStNXXWAM9HUr4",
  "key45": "5w2WG75cEheQhPx8zNBEqxGqsHoj9gr3JSoHioQGKwu4v3Jx6HikMkHVkCXkE5vWffQ1dptfc4jRjYWAzTCEJhhT",
  "key46": "5qnMyx5aPD9cNgxG3iW9HMPhBtMf3mKm22DJCR3H2jbrsQ4sqeCSYTe1VLiMoCvfmy8g8PsgKwGF46zJvGD4dL4E",
  "key47": "2ER23RT1Nd2KggigbqakBEF11jVKate156Bo9FrAPrJEzVAWwjQC9aKPo9mPnBAkiYJzjFPNMcQSGuBrDuhgEM9Q",
  "key48": "224PQsct3jAaNDC48DUJU74exYGArwrmzCPL7NYekrMkb4hNbwwgpyqqdxDThHPYA3KrhVJNpxDdsrtr2c4Ddhzt"
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
