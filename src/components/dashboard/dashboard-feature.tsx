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
    "3pPXoEa7EQRn77Ptcjge3hqY1bb4L9cA7GdSxv2URnDgCoDqb3Vicdze87BPFyj22ayAhGyJCrtsXce1z2Un6K32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Az3XdSec9rFvZARKGypN5UQ9J2sH8TJJv7Pe4ZoTn1wB5q1LTLBuq3mTBN3Hdf86AESiU6jYa4penG1Km1eGhv",
  "key1": "5yz24xum2iRbPK43ybgD1bLH9iYqTe2bjwAycUFG1zXWFYsX99VwpM9xLf5WX72PGmbsscWgkUT28vSWnGPit8h",
  "key2": "2HKQ2frjNQwCJLR29SnngSptxfHSftY8ddc45odt5UiHZtM5NeMJ3ydiNBo6nGEta2nPTQByTxrVqKbyhHqhGvX1",
  "key3": "vk1FwuXLdm2asrf915ZbaU5PzwiEqE9FqGEwnSncfQnEGtdDzkis71rwgR7gMnYViZHyVc5oH8xRMv3EDzkfikF",
  "key4": "4mxkxNHfsd3bybcfrizX4dW9mSnpDwQ1r3VsVHBqwcFzZgzfq8f1W9Fi3khVPwjFBdb1a9oXAW1KBu6DvLRSKFJf",
  "key5": "3fY8MQ5UvSxMmzRXf1WjqN1wX6f1VDJPe4Marr8AVwRSxfb6AYTTY547uGAhQxaehWGSxgZCDVqJWFmjeP8azKZb",
  "key6": "5Rj8CkKLp2M7F3ZTTff2bytFYiW6uAEHpCZ27bmJ5akXzNUE8bhc2KnjDg5pA1yXfdhXZUFzhQdAxWF2Y6PXSG1c",
  "key7": "o32HSV91fpVcS1E8fLKD5nNxga6WvnFZWPHkCvtGk64oL9UhCwpNj8zA8VRRqPddqTuXp5WCbMFeRfdHE6kqqmT",
  "key8": "4vPvT3G2bcmQguufGEfqhqUi4kxQo2i9Mqyjsc5WT7jrzupi4WAGRARyM5ueGYd1g3ogwe7FZBEfj9PsnehGkuYd",
  "key9": "3zaWqCnvnD8Uhtk7i248e9H8p14kejw1tYVMrNDCgh4wWfVuJCvT35Tohy8ZvgrRi5AK35TpSXicHGnZ2o46Ffu1",
  "key10": "5s2ymoJBqdx1FgV33B4xPT8fTwJx1ysBsustwwA5xitaCyUYiraWncGdW41ddsWD7WzNtcq6YFVPvma1akoVi8in",
  "key11": "5pLzhaNxX8UWjtxQfumnyvZmcXEZ6YPmySYX6AahaxT5pQwW7SpqbSBKje5qmbRdwPggcUhqRsJH2VaHeYfuHgMQ",
  "key12": "2WbxQa9zq72f5FfszJoJncB9yiD7uDZmMvFd9sR6e9xK4fNngwG6XxP5N5YRrCGmdM1T53sbwk3pcQ46G1Ti53rs",
  "key13": "2hc81aEjWxaZ6RSEz7AiT2TEXXrQKjMSKr4mdcQMKrDaJAsUohiC7r8kHgbZqY5t8WVJfSqCgEUiMZT7fViULVZ2",
  "key14": "5Rk4CK6139cDpiXax1YTpESEcyTdDaHoiT1ydE6N6Avj2iSuz6x7hx1ECvHDvxp3GmabAU1EovwUpfEUUKCtFGfG",
  "key15": "4Qi9tKr2wtYjbxkAhyRWpeHeam8RCJMWZB3fqs111UNJGCSJos3cXyM6JTzxCMWSS4G5NpBzykSurzWdySF2ozB2",
  "key16": "7XL8YEv7GkX2uXk9pq9TLYgUnfCWEt8GzH8t3vMEWakyBhbLkboviSgbezLE9QsuLGSeyMBphN1p2Yh5ZPxuuCh",
  "key17": "33jJpqniKzXozZDsW3xoLE2qm21fKrwtCxzL1N8fJQjMSUDAeJjG6ZNzAxV5Bxwn76YW6i9EbLRNdZqt6dkq1wg4",
  "key18": "3GioSXJWMnF55AcEWZ59DMU7oNfaFrGx2MzadgBeRjzwEEBDUAjBxRKMfBXniamaGuBK21pWg2jaHzRW3Ed4rR3u",
  "key19": "3d5LTNQRMFQQrMYvMnuqHb1CKQVMV9KaFHfw7SFVhVpDPH7kXXbdJ2yWYKYZLtBdR8QXBJgZYeALe5oGLQLKGYpd",
  "key20": "2ccZxtsnDbCT5Hxvdu9JfetWRkdME9KHx9bpMavZm5WMQYjMjhRxghzjFGRmgKty3pyCcSQ6Ebcd6pfCMLDXYjnR",
  "key21": "WtsawJ5PpMGGPL9qgoH2bbVqrU29hTrZSkKeJrrfrVc2o6LsKSa9Pz6zFypMt7Q2aMBQvFY6omJqA8QC5YV4wb5",
  "key22": "6DZJuoooec2yRnkpoyjEjn3F2Examb7UF2gzx6VB9GQLdf1Qy8FAyGYfLSTBDbsKgvYMgDtNKfsSYdyBEVcURgk",
  "key23": "4are6LizsB3QuAKfWpskdMbzXXizkmGZYC8V2Xi6pmms5ptUXza5jaeL28DLb2dWVuBTKwSQ7UiCdLMcE6vPx1t6",
  "key24": "4AMdMw5XwnvoTWMyxt3JV69rDRcHxnAyNQuQbVEGFFamVDbW6LnM9vuhaF8tEkEqXjLZYWvhFMeQY7dgzwvxFUNU",
  "key25": "4mjED3dm2mp2F7TEsKn1nwR2CGWvbYjSdkdaRudgFBJ4cxFXyi4aJgHqapokcQHmC5nRdxpXPGx1UW4jJkNM39fM",
  "key26": "WLGmL6giKPg9rpDQbve3wBDeweXyKBLLJqh2grrQwwdNLwPQHicnRQBfpTKaDSmmMGS8LC8f1svfvzp5r4uiGyN",
  "key27": "65czgT18nCtVous4F2cYzvUPXrKinCDR2CAroKhJM2PJqfEBCTZbAnTFsHN1mj2hz7cz93YFKZSL42VSUpqD6rXy",
  "key28": "XqmAuiZuttRTxXUQpv8jRGLUtf9LuE2K9mGazfw5tVaw4YjPsc2FZ48M4rzgRnUeaPWUEFc8NeYdP4kDVk4r2b1",
  "key29": "3JUh8BSCUYJ52H11gQzxaWvQfqw6iVxfoJxnP9i32AXuU2KEHMUiEv8siFxYh7D4SRwKfwczPCNs7r9vrCoBqowD",
  "key30": "3JZ778bbk8b829PedvvtkKYGNzrzbCd2GvceLzv176ZQABZS8JWpnePhLvwRPsd7G5WXTAUeBdQJQcpTj9yRsAUb",
  "key31": "3SS2ET7x9K8yBwfrbcZbMHsndo1gTAQsJHhaFKDWPHpEZGRdgqbfrM6nCeKLKN8o8Bxo31EVXsFGVCga2hZ7v9he",
  "key32": "6XhBG2KX1fyLGx2vy3hnPRvFVbJu28yHXyeSaof9tEoAt7sNYPqkoBnBRy8dZJ5Ddcs5qP45ZjMjaLD96QzhJmq",
  "key33": "21sduxCwG1mirD3CEN1HZTZdx9c3MEv7B7hYhGkit3N416ut2K9fyykmsBGX6AiXGNBUP64jWDqNgWSE7Tj1QmEV",
  "key34": "4M43FCiqs8o6PvufFGHDe5zUnMcNnWTG4SSWYnLK73gQYv4faDCA8v9wtRoxEdQQ2y8cC9UjgRCBRYSxZdRdjxS4",
  "key35": "64UKpuuJM8jg5CP62qcPGFUg9NJd8iWMj3be5na4qCqqFBmvPrj6ykrU1XX1fdFAXSZ8KsrEK2rndE8giLjDo6fn",
  "key36": "y6GYtaha3j5mWreAb4pzxNHsaPALtJHbqtTCtXgdLr5cSyfXVw1MxNyoQwXijuLMAxyUBgYM7qePJdDwjbYBSDg",
  "key37": "5NjQ9be5nGCTaeApDWk3CbnSj7XgnCzunNjx5MdqTBDMDDxrWLJ5c3W3YDXeYEr1JzEe8aMpzo2FXGg744aCsBtM",
  "key38": "3LEWW3NXuc62kLdJ8hMhi21XDWxuj53R47KY8ZBwPAV6ZbxSQxfiT3ufuppsSscmYJJG9k5FJWY9jKvd7CYJx2St",
  "key39": "5BmRc3o1zD61KVETW2EXaLnSqxDZP4vi3MsZMrgPbPKj4Q6pxcMZKcoSJji7KvH8i1jbyZqsuDzpCMwo86L3GvW",
  "key40": "Ys2ZmgCFdSaWHNMkiWY9w9PEcXC3sA5swpFsxvM4EE5XgAaFXUVLNmKCEiLhvPwbBTS67UPpECEXZB4bbrSTTfv",
  "key41": "2BxFh6VWd4yoqogHgXQFikBwuoKyTtT2yfAr8fLYrgU9XcopYUcY4zSHYmStGeux3VisemNWgYAhjkiyxUYq2oGS",
  "key42": "3dkbM1sRfwGj443c6AKXQn5BLZBQUW9722f4jLpLyEhrDv1rzC36uEGAPuRKqJ7odmitR6S3mAEvVh9im6n63QkB",
  "key43": "vMYwChRsxngaJBzZmqnLfkqYjmxqxtZGPMaQwF9iAyKhw6nJcpwqkVD9u483k5hB8VpyvuA9LGVbmdEKyXHGm4Y",
  "key44": "E1xcUBj8LWPbMh1dXzah3Kt2WbQvuKowyJaxkDw4EpdjF2YcWB6Lx18Abxu93TPgv5AJhy8BHZfb6J1s1gKx1KJ",
  "key45": "5UmaMaGsfqmN6Qx7yd7MnJDjn5uBxG6Lj5AsDV8wpdWH4eg8ZujBHjHqncg1HZW7kEfbRB9V2dEj7p1T9SQ8rJvQ",
  "key46": "41tvyKVoprAyLH395ZwCnU3LfqbydXn9KZnNnGELhEX7aEhvUcZ7Prx6BMsH2exAghxgHeyddSS9VihLmwUvTLTS",
  "key47": "64b9MuSq5NSYiMMQHrjw8f2qGzoZGsiW1SKK2GuVrB3Tw8c3pVoJrn7yW6ofHbAeJBdTieR7rGmmmTZnfPbHHvnP"
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
