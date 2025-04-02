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
    "4uxZiRG1fLZ5ks77SccV7zcyeTsCpes4tWjexWHjupz9bwqQdXo9a8vZCmf8ySdZqw2TcxoSjeB4XB1oioGfaTkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TJ2AvW4d5e2cJxn4veQjBge2CA4RZepKSCX5M1qL6459ihczh5LAHENEtDMCQNkB8e4b584zFSr6wTSbUCcPYRp",
  "key1": "ZVVyGykWasDs5Gosajsi2SwtEAYtLCshC49x9sPTzwCYCE8QRmHQMZDwEzFDFDGaJXvWLyCxZtUfNuoVJT3ygEC",
  "key2": "Qfd7SHgydxFjVDa1Eut8RtmVd2ecKMGeqh9RZsrFF7bjJgfyhEUxZm5QepUhKramF49z8LoFR9HhcW95XNQxuNF",
  "key3": "stWhrxk4SqjuCrgZ1wcGCCm6TtRfLC9qXR8DLUhak6GdU6oQLM4F4M8dqJ5wxdxbnKhL8kkHTNTnfNqgxmAwPfj",
  "key4": "TQ7kHiszLYpNHXnzMX7tFj5PgCPFBi8oGPHVsivyByVjwxHbt8RaRDW81SgHrp6BMgcN3kGgnZUbtAHb1eVJddk",
  "key5": "xJfZnrsw77dZgMnwgAM8JPmwdsu3Q8ATiMnfgWjQb6UvrxKr3gKnwhRFNnk7TNmBpc1TyyXMYazkHNMmGb1BfEz",
  "key6": "63PkX7d1emdMqiuPqpz2ha8LGTCp7oNYaQV3JJAELXbMmJ6dQPRX8PxCHDTQz7Vkr1zkFw5UyTXdJ1ds8aQeaDNa",
  "key7": "49uBxBHDyzgYyqz2PFpKtnP2gmVPk1bDqC7DSdjMAK3Msz6qXnDp7THNVnAZdf9ou4BtaDTVEXqZuWLg9S8Nktmo",
  "key8": "3D9FYXfSJW3jn9WVU8hvt4Zv26Pv7C3LeeJHRrKSRfq8Las3hJhepDJFG2pHayJLk1CwxNH8Zvr38rSBjT7BtiGz",
  "key9": "5kwVgwNGLP5wo54YXohB484HkAKVCNiM6BkrHtWYwQHXX5XJwq8JpjTLHd9viD7zGVEby18YZ2zPx3TDb7WgkCAZ",
  "key10": "5ZpiV6ubtb8Z3KJgUPyyq3q3UhtD5sfUqyGL132uHW6boPCxZB9DbbZ25QPcZicHge46rj9upMJ5ewG1TPFsDwwg",
  "key11": "SgoFWM3PN8vLYe6cg2uMcSsBKTisNRKJVzU1hWHY1b1XqEAMNj8tScVC9uqJciqFshLabiQTQxaNvmmgxE8Dbdv",
  "key12": "34wr4KZQzbmVvSmkQTcqZGeNNjomqcaPiibDdooVucAQu6L4UG6GuVCkao1ZBY4WHh2PcqZm6BWADE1yhqZo9YmV",
  "key13": "46S3QFpgvpxebBToD3mTbU8CjsY6X3gpQwBRyQtruZPmPGc6eY6p3oHvXL6SDgZpsAGBHAFMZ9CuiAacNCkeo4Lu",
  "key14": "i7SwQWakuRhg2C3wrHXqRZ8GWYY5tcKzFhKUi6PLM4RPbJ9qBtUuFhkhnD4FDK1uhZxaZb1ZFrr1spXqZKqYfsH",
  "key15": "2kvj2oYkPhWwfwkMPxT4FUpVv9DkkDVL5ao5UF4oQZVHNCrE25F61wqS8kzmw99aMPaBqvgiYRzEL7V4aZU6Mjsd",
  "key16": "5ACoiu3txNM1kXEW46FGJgLJoNu9N64e7YqAniYrdgUuBUyo3cgyt59UK9aDptuKa7h8jo7c3WYS4crgpu9JYhXA",
  "key17": "3f8ieDbY4RKtfK86Tbw48ASqqi9WBq3z7pRfq8MKfsiDSs4cHjQGWXPP6SPZqpLg5BnfwbA2MpciiwNmPu3agZcu",
  "key18": "27UrBL9sCKXBkLjBAqbCM1gYHM4YUjmens5biJJG7dBch2n4QV5b8jQpZk7VBGR6j71WY9dk8NnTGq82BAHcTzeN",
  "key19": "4wCiJWhqk1opEoUPSr66s2VAFLSoEk66iPR6iiJv2fqJNbGhPWhK7o2pzTB2YF3nrUMfQwpTzmCy2UTxy7qfZCUH",
  "key20": "4AbDLD1EWVP5hnBVQkatpbqEvFfMErX5DQeUyocBBd2TMJ3AmDoqBejyzn9VNc2An8TDsUGoM1gyavjh7Xg3C87y",
  "key21": "em8NqvMPyhMQJejiahzY3bidafos3R8RJYrQ47eSUsV4do5NfA3kXJ97wEHN7CxYjEGkcEmmJFDMNgcCWAGS7dL",
  "key22": "2wH7eMp7U2tHGeCm6c6HPWzNaEVSGvFX6BG7sFGHrbchb3UNNe87FhsEzmYis5HLUcjXAWx8VjetEP3SRTupUtws",
  "key23": "3hKVym8c8mRwTFHc6YNm67rqcpM1u3gAKra981ZV5X4bCWH8AKTXxgNyev6jo5D1ifMuSUUKsVqXxfcTgHCkQSKP",
  "key24": "3Cabd9cyyAzmznfdCTuaACJ34yy8wJZudUD5cWu8nYTZRBnd7Nt3JzisfmLCmdT9BwVDiUTAcUGqAtvbuCtu5kRk",
  "key25": "3y98L5JGtSvxSCSSw5N5X2sQFk5ZeT6yPE3gouU6dAfqz9JHZxBracGLcq6iLLGzvr764soSkyG1U4dB3dEt4F9V",
  "key26": "4McQYPK6TmxMoRnNo8DTui9N6SQXLUtfDXepkHXLLPHZS3vu6yW1CCM7Hfh8LZU4iZoeZ9dGaYYma47tnMVc9ULK",
  "key27": "3gmKpfWVGEa6EyxTEgKcHBrTeNmrArfqnVM9Gi7oyYs3qsqA8aVkC8eFVxWeC9nnZybtmLmE5dJMRkN5KdEY8JHk",
  "key28": "2aLLU3yVET6QujZVcWWZJckia3UusszzrJTR41z6cUrQ8XzzCQE1kjRehg6Nzs4wUTtRKd51pjB129tApu9WcxGE",
  "key29": "5Epcg1p3SHYYmox7JqrM7c1atR2PZmR8cQBpJFuPBxZtYuJVawUyRCTu21wQpEYEzYxQmGqJfsSGMYNskQMcXX18",
  "key30": "2eMzR4gcAX2apCngHqqVNqA9v7Qk3GLRx8SW3GfZww9M3iuiAv2d2giDLGJyjxbb4SKd6Y6AVW4ENA6ErLhzjjKp",
  "key31": "2ftxgFUEQMXPZEu6zWvJQ6XZTix5EPf4Bv6osjKjVHxaQkHnHAAJKvj1y8Jtu77gAVBGXvSNsPLkfPRYkyNgzHvK",
  "key32": "5RWaL6PKLGAWyD47zxKsuLgejrhDRqh3wfRPFUoL9KArmS3v4WorhEiDHRrejWaiugCUYWnsK7gmDdBVebajtRss",
  "key33": "624Sz8EMpyKCMdHvi84iiBj2NBcnzAqxWWiPnbLMomrXN3E7awFeJefQCusxsrYg9KxeRRBQsZ88dEYe4ejm1iYY",
  "key34": "2JQa9CfpH1unVQFjZxJgHWzQymcTTyJ6icWEdnB3vobtL2NM81YHZfSnt5GCzUtsJ95kYuEZjgQoFDmQQYN5fxXy",
  "key35": "2DK6A3Nwwchy1x9dqXH7vmrYNFyV2SJygJamG2twHPqGQ3cQHWG4cHRLK6HPM7eCnJ2xzZWHcVFxk4JU7zLjMviJ",
  "key36": "2KXAw2CMfYS4HMPkouHTb8kKNqRsdhyLCJFoU5qykqk5uP1dfjf1Rme7Hek5QXGmoPBsBksKaY8gzsrCYv3tdfXs",
  "key37": "GRfDzD3HKbWchgaysMDXkKzvXNnkfg7BXzhceXiyeqcdncRtbnSPPG1br8PS528CAXEHdEUEeK2C8iF7sqRyg3G",
  "key38": "5zzHWQugvEvbDHZAadmxFeTEAsa4JduRXLyh3bEhiiGzjnFHUYfaCL9WBVzXRFyhxCY6tokUwom8DxhQ2TZpdVBb",
  "key39": "3E2ZLc6KJTuZPBTJX3g6Hgw68bvK8kszcQLLCVA6NQeCG8snztH7MR2V9yNLufPxeaWV1qyT5obYCPaV9S9hvocQ",
  "key40": "2N6Wca1ZCk3M3ozU78935eSkkKPrDhs4HDs8EPB8YbpqeshaiHAahDNXhzDzSWGvsHuqbmL5YDamKdzf8MRewLm3",
  "key41": "3P8ZYf13NM32vWf16XGMwabPH9y7Ajo5TzroWzCjKnJ53Lz8YBTS3JFVUucMXhyNnuybwhcuMkTHgd1ZHXcMJAYL",
  "key42": "4YvX67CRRTNC4y9VhyT4ZCaUjvyWqcrNB6qqYH7g46QfF38svHEMFBNqkAQpwsjKgisoGWMX3jSUnKnLeKzrKcrH",
  "key43": "cW1vGeRgtC7VagUv5hw9b6CnXtTQ6nEr5stVJsVt5XbQiWmuCZxAU2Zv11hQS4GCLeU5qv59MdWFxqhco9xU4qY",
  "key44": "ZfgSwDrQd1CfPdAAZ8Uq83Mm92JpnXzRQzNkJeEzgCUS9VcuqfxmiwFNeUvKEiA96tobeDunYRhSTcJfDqpkNtd",
  "key45": "4H4qK7vZ8cfpFLFM38tajbnWJPhcjsfZ4LaGP4zaZGy1PvvR7vxjnaR2iNfxQDEsfdKF2w5sfSm5dHYvCZZLj9ah",
  "key46": "4hDCnZLgSPgwjjJPzUfwmd2KMDft228qmCkk6xf3rVXeq2zkwpscCpJwJiVA7879hKkP2SWqhsmKRDkYt65N8cxF",
  "key47": "3VvqH2DQCFrpR5GaVpH8D79TMSiUm3XfCNmsd1w3oNQXPUb6h2cXcgDoxPWcawDBKjdc3EGZRtyX5A5qXKXFVmzn",
  "key48": "f93LpGvJ6ptvUFxmNziSKQVYf6Jg7r6NXhqazQPpnS7EtvXDNFPW7ngu7GKBsNVak3beaUJwa4oRHtWmp9oYnNR",
  "key49": "n6oJaBPbwSrbQvKvoXFw6W22uSuazSvYavXSzBHRgAQQNxuGb9EMzVwHXKj1fNwBRmGpUiT7KbupvsS7Erz3gwR"
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
