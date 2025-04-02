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
    "2r9FTBNCGNafRuCxRJeCvL12WMGmyJNxSBxAaM4Y5eAzgEgKSpBKE4NxM8qTvTqEVcnR1BqnmbvetH7qpE5PgLn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TyRm31suDDLFwWtagC1PfZBmytJCjDeSK971eNijNXBqLWFXr3hRXdnKPQHwRjCber49nSGXTzVxagScQCmPxVs",
  "key1": "33Rx5azaZfoMotumbfiS8YPyfHEKhU1Q2JTQBFeUMqwYNWFpbrtAMp9fJzQ8gRdqTEpW7QiTn2hra5fdSKsjy7QW",
  "key2": "48nc3aoB22UMgGnQYNufGZcbQka7QdnY6TP2pGRj642etszWPRWcJTehWfqYMzL2tsELG7TAwso2crPCmTxW5gtk",
  "key3": "5RdAjwR2oYTPzEKCoTaSsK4GVyYzeqqbBLFFiLLT6mrX6972kmUPL7wGPBoH1XdxxydrdY3YTurqr1uNyrAuGECs",
  "key4": "59tvupWn4kSJXFbZvERC4NQjf8u6P4LqdPCzKpKXrdQXAs41yJQQJjfaZRvgLAQ2jpY58cFJ5w5A2XNS1G5Eq3Qy",
  "key5": "58QCZe5X9Laj7SH5vFjuSMn7kgHKvBvY2zvG4njGgZmmeEqs2DGb32C95okfP6ucU99aUsRZSJGkYfeSyS6CHNy9",
  "key6": "3UnqTkD23YXEJiMQpE2LCjKaQE4S4eAtVWsZjmwwiMjaP3vLPVMBSq2eebKqav4hPQXwxPZnoSPNJPhMzhDDRru9",
  "key7": "5np7uipYcC1aT9LMxN1t45VVu2EJejdrEesDg3vZJe3DoiRNbDNpPMyZNFK1mFj2BGhpy7KvfUQUKKEAHsq77yB9",
  "key8": "3fCyKTb7XeqwK7nFo3XuuVVA8EkMuq7CTm7w4T5gKVUZHM32QULBmNFgWGKM5Ct6msxGjVKey73FbFVAxUe2WDV1",
  "key9": "3uVcBYqJJLs2of96tkCGBeDdQq5GzF83DKt1B2VqvS7o7xvX8E5g9Vdaz2VA5r1gWNUtdcqN3qxb8a4v1X4K6hei",
  "key10": "Xg7UtRE8jDCXySX7EwSUvwndFbmW8YU9uhAAJNN4WBD8H2navXD2K4MtUExdgk7p87nhBP8py7EcEXU33qvuxvx",
  "key11": "3FY6zZFwjiGM25pAsEKzWdNcMV3P9vtg5vXFDqxMw3zY9QEhc3tHcAKYYSn3GyaiK7fzBL5W7p4BupVQhD9Vshzk",
  "key12": "5FoAquy6SjdzEkEbxpWk6CYo6ddyw31t9t8JsyLAA1Tyhyc4ABiCbXsBRFUmFtpG42PyeJGN9BZrCLBZ6Wo8ehMz",
  "key13": "4m1dnnHrFXJBK199hqmuYVtDxVM3HEpC3rDhP1JaLS9H1agDkcbeoSbDENC8kRxCqZa4eZUviGaC2VW5RGj6BtM3",
  "key14": "M5SX2YfnRyqUZRvTMJFDC2oxt5WFzLsmaJ18qoMjm5c87yAMvosjH7nFEftCN5FvmPx4iWMUaAFGmhtoivhmRkP",
  "key15": "67pveTLesJsU1C1kcq5AWsbVArr4oyCEPr9tLg6qWXjzPGMrUdJecVjfdbCMeAt3ztvLJMAaTtajMnVRY4pvkCHA",
  "key16": "2CdLebBpCcWf7CSUJ1ZdBUNdx7aGgweRftNvyuTnTMCVUai7phc75vZPgwntLn9PRitT93oDsUbbMiKUaQa4Armd",
  "key17": "2gNreC5LGZck89nrd1E9CqCiDrNoeUgpt7MVuZAjULdeMWmBudKi5YTXB5bSBnUqGNhsqLotUjhNK9d9cPf8LFQS",
  "key18": "2TU6NZ3UUmx2LBnQaCKPFdd1UGgjzyM18KfgQFgQ6zjj6YVnp2sCHxgo6TaLq27BgeZ1tjME2SG2j5vYQeNawWdJ",
  "key19": "44hZPp1BhVzXFokBykTfm1QZaFzdNfcsXbuk9KHKNKTV3JkUkeEu7F9Q5qYDymWg4bUXLB3QHk8qnEJK5gu5AWZw",
  "key20": "3JQBSxGsv4YpmuYjae6RuLpEAuKa4TFENVYrPNmk5XQMLYT7GrprjvifFpTZEb7nCNXfHpGErjnt4XxA9dCtmcvw",
  "key21": "2bvG6w2iGzPphjy4YYciRuRY4bTEBh62jM6y2tYiEwi1KyVQ6hYCzDLhJQRHhUzfhW4g8RyX9zGmtgUnGDe6FP6w",
  "key22": "38ZsPb61KgGerDsgGsvV6ScZYvyWZwNZzAL3UwBxUtRqDoYw2hJktPWGi8vHN7gQxexCt8KokEFgr2dGiRXwWdkA",
  "key23": "2gUJDipkpcaawQvVayej5Zsd8cSLjQjhc2SK6C1n9H7eNs25fntnn3CRy1L3Vh4HDmAQV9si26yiQnzZzKAueMcT",
  "key24": "2eDB4NnECdrZqBNv7HnZGvE3CgHfyXzmoXXJmBQA3voQDGDSvEp19P23wNRNFzfMvZUCwDMFZkrebgczbjVQeoF8",
  "key25": "2ruw6oqd3vt878CxpQRhbHWPJPLHmNbEWrnEPgLMCkA9q8Zm98rJsA6tMrhwVYExZXCDH7UWZa7PX2ZA29m8S3Mi",
  "key26": "4NdETJwWAuAXUUTGsyziHJBVpWWqKtRyVumTcAv1RGZZNiHnPXnF2qiNtW1cPbbRhpc7Vob9AQuF1SqiY4YMw7PN",
  "key27": "4Kv1MQazqCX6kX1Si7HM88kSr14rvf5befwN9o63mPPmuZNnxac4jeumvrT5LyuDjiuBb2taRnANv1rvdAr9XMJK",
  "key28": "5xvDd29MTarNFnwwqEoZkfg3JvUDkEFP384Sz8HrAKZ7G1DKU61hAHuNyBHhuh89aNhFGMy7yLqjiN4hNksnER1g",
  "key29": "2WDX8L5Wz4FQEyeQ4iuTPNSsHQ1XNc4LwwB7Xtpq8invQydavpoRsHUqxg3vpGGbwL6YLsHNVLQNnebFBcZJjrtt",
  "key30": "3wPkDmpgTe3bdZa4iwiPABDVYrEUmBJiqNeRFxRKopXs2FFXyLdt7R1fseHaXCyapW8EN4Sa6zUZP5NbVJomZJJf",
  "key31": "2TCn5EjmGE8Ld2CH5kDWy1EGrceEg1L6wrkHS1hwh5Br7tftNVue4Ty1WmmVFuGbMTu1FMnuVL2KTGFH7B66kguJ",
  "key32": "Hs9VZd8HoA7X8qje2VodGUU2jtbGK7PhkvjKP3WUNPpY2d88KrCYUp3jxu8zjmy9FupUjDvzYwEjV6TW4eHVMLG",
  "key33": "6oPKN9my6sfXw5RSZzjvTSwDLGq7bEkcaYHyHqA8J26iXvtLNBycBuB4Xf9oWAEd2uNcbzUxMYX3dyjQVPKet7h",
  "key34": "3cmBjRUf8eABHmECDTZu36vJfLgC4gZqCCfVSDADumryDB3ewDLNBbdFKgvujidZkyiqTVxPoiZsiKSopHLAhsCP",
  "key35": "4HyQwuyeKNBiMN6a7FtYUowdMfrCuKbGd9x2f1PtGgVFG8cbcCzq6mmVuLBRK4pS9v7DW9o8avfnARMzkKKHkJtb",
  "key36": "3dHv1GjckbD9bHsXwUuyzBccJ6rwF7Fe7sbyaMJSPkGsgwGPncpshXAvyjUE1x7b1LW13vV3kZ2uj3SsR7oqE2bd",
  "key37": "2JBesntJd59TgiupxUh5wu1TKLYKzuJRLbDtULKg5kVPJAvpHnwXCn59yL3cauc34daCu24caM26pCTPYVCBjWZN",
  "key38": "2hoHRRVwGrJta8eAk1vwHYM8NnCiSNJebNuUL2UDKPAuZTm7QWomaKi4mTzKbMpXaQaxG1JZHcc8hRi7CewbVeW9",
  "key39": "31WWuhwswxNzozNPHvRVBKXg1cesMDBcBRMaEXYyvaNre3haWqCZE2DJ3coLY4FegALq6WQQoh3GcSurWtkUv9ov",
  "key40": "2W6qGS4XRZjf7Q1RnpXmdV3pxSZKdHTEduvicCm9PjUXwjVMwPPeM9LjYLjuHyS3uRYZy8Kr4CnLrtFMyszSCDsd",
  "key41": "5zwAcmujx6P9HModQbKARGVhfw63nB8vePYMxinqViFscpwWYGw5jjRPERDPCiiu52J6PiH5qyAxXs1KK3zUmdi",
  "key42": "2HCwHcj8ecqxwh3niL8SaUpPVnCuzPTpUVHzdDhy5i3FqX8MMZKFstNajA4FZxhUbDdYMPeJUhapmj58dLaGo2ch",
  "key43": "67Pzbz9frb1VbuYKvMCwGCX9M8RifVL4PQfuLoATS1XazCfQzv2rPZin8391gzeHtMUDq8ffEbFgsLabjYwqQGNa",
  "key44": "fxdSw9wb9mQkhrznviwE7EjWmdGG98hGDkMaHagjTPTbrz29HNwgwAeGdL7JyJpifn8GiCtH9ShrVBkx3EQomrG",
  "key45": "3CqsUD6FcGsbiGn3zZZqo8RVuSwLm85oyKB2rdWCuGJdvoVPqcghFW3dfeB2no4w2mnh8ouJhguUg6o1TDKm1vaH"
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
