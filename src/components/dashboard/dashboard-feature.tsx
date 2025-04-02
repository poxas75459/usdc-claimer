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
    "566k4Gxminhfhji16JWfu2xzs1N3bBMDTiAsrXBAZZkTCZkFWDazkSfe9mFvMM6SCJ3kSgyZBcvrCyQPhovZZXLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xxNig2TraPeRzAFmkHWqadZ6CnXTK7PbrtjZGgm9WUjV1GXA7oCp4HomnPt5vjJzvY9qT9E74Te5Qk7HJMU5Z42",
  "key1": "3x2KJ3zy3ZfFYUvTnvosLdLSrDDxWPTE23TXyieFTTiG4KMY1XEkt35JNsDGAy2EitUzTgneUjmPiNJ4Pb5EcEU1",
  "key2": "2WCvmYnuk7LXsYafYi2m9pq9zKRQB8EKtahBTG9WvdNZEe8As73N84Ew7NZu7Rc7kCRrwoSkZHNK6J9CKvgxFCtm",
  "key3": "5MiiDmtctGDbveLdvMZSYHZeHfFKfC8CeTkZCX8HJukrJ4qnBUjq3SKKudaY6K4paFsUtBLzmKsRLvmAbTtAx8TD",
  "key4": "2G672RJahMfxYecvk9733jiSxJi5niRoztx9JdeF2JZH9isV55tP2at9WRTYGwHj7CWE9GASTKiV781p7fzXeuxK",
  "key5": "2GZa7neWcCmxDSGbkPMbgaLW6SHH9qM3a5cwVxKXCZduRJN9zYb8tqGEXvh9G7SMDkuBuNLH4PCA3LN99XkQ5qSX",
  "key6": "5PYD65JswhjvqPwUbdhEb5dyi66HyEVmRAGVRajNVRbXQBufBayB6xX7Qwyqs6iBaJ1qyUc8C6kM1YUs8fdiYrg6",
  "key7": "634XSBugmaaxYnravKHShzcrbWyUKjz5PfTFZtgrTBLVserGHpkGoXQDNCppfEaLqdkHBiAES4WZLBLxsmCf51v8",
  "key8": "juVHMBDnSQJKzbipTZC45p255FakagetZf8oqZiF65KBhtivB59k6VezDA58xVt2zYrGnLcfr9jmzSbK1qjxQVA",
  "key9": "5zfDae6ESuY7NPKuUDAecS7votd3pr3PYpKc1J9wBCCJeLpQVoYrRozam9PUsmWTJReAVmTs1sxzCt5ufRQZgBAF",
  "key10": "3cwhLpVzi6KLf88a6FYBQvTkExPMVLDfot8soD45e4FrjTUb5NHLbyMxCTR2tQVQjA2WzwBgNTxhpDqZVt3xKKjo",
  "key11": "5K6keHTKQ4RyKf24akktfHM4Lmgyr613YNs5cD3oon5cvyyfuzqqi6rV2jiakvcrNC5SmateZbBqUz8EHsUFXMWM",
  "key12": "56jWaQGFkGRGSXgA6PAr9jL6kvsfD5195EUNVwgtsAew8HBE9hf9Bweu6vy3KZ1mr4fMugWZhHtjCFGmCcKgxukL",
  "key13": "4kTNrSVAJ9U9icuXCzyjTPFHEeskfoXxoRGaGtnKYKtDDfWzZWbiTeJvRnDAracjdNHfq2uhEUpMUrZBVBn8g9hC",
  "key14": "3PPhupZMzo5Ztba1ndydVRVkYRKs1QCekxo4hGhYsHYrWLH4z6aDJU2gtaJbJpLtw7spHXrqCfpbc1AXbK9RPkMd",
  "key15": "2pivmJVARVH5T9bJmWRjGneu4NKbQQPhA6HQdURR1Q37FcNcoLnrJ7aJgev3XeRpRsuSoRq9cNeHwhtPbjBMmSQo",
  "key16": "3PC3udzeo9CHB1MYAXQx7L4iZZBM6aYG2jmMyB2tKQ4zvho2wZ7YU5pdgSKSG4y31NWPshDEYh9epvQwtjxXRi2i",
  "key17": "5X9JpPHo5UJZL2R2mzYdKeDCUMonMH6cEcTn5n8Hx1v8CMhVseP5aue5FgsVSZXB1ZVTd8GSpe4TNjHhunSyK9DZ",
  "key18": "4kFsqsFCAkAAwgM78zsz9GmvVRqW1WxcoMEksY9Utbyx9mabKLGp5BQe7RtrFTeUi5m5VyXudpSn1c41Gk4Eocxz",
  "key19": "5fkVL5WLkJYXQ2U16fMQ33qn2RaY7nhmjZfzkNVu4j8nvTyET1gVXBTXEcdkEpSy5h3cQYHhXBSBgg1b1RUTv1Vo",
  "key20": "4p7DJMhBwkpajg3XPbqV82Seo6sxyT7xj2341zQpoPGRYckZsy2NsKTs36Wo7JDo7MkWDRV4Y8QSxMPsbdAqujeF",
  "key21": "2AmmzUnMVfs2qxR2ScEJqeF7Jy2B6CyRtWwfZG4BFirVYj3ujKGjvWGsa3gfCa5C8ad3t2TEzo1yk8GGX1Q7YdiU",
  "key22": "61ZSFLMLboU7xGGDvhgLjvgupBKGgZEZBff5DNnLiRnpyu8QbW7bu3TEpvMfkTpu4bRTcZsgGzH2P9v6WXszQB5g",
  "key23": "3etcEViagwUUXiJygw9NCRk9bT8o8STpwCsS1gnYt5cjk527jDyPk3vJoJgSk9hpkoExHcjG37LtcZGrzP29hDi7",
  "key24": "3xiTb6VysueDy2nMFHYJYgGseiS7uJa7QR9JfaDxwSbC2Ew6qY8d7gnC1SsfQ7k9pbEpgVPqzg7PQvi1AuJBbVTF",
  "key25": "5NywPPU6wHVF2H7AHdtgvXZGNbX2VF7a1oucPsV8gxtrTHq2FMnni1PJWC8RP3GusCuLd9paW18cdGJQ9F4MXXLy",
  "key26": "SjdXKociA45xbSnU62Lg4cZshqYK6ML2o83H9VEPGvAncwWfqvQUCew5aAUWaxnhjGD397KyoyFWAbJ1PT8cCou",
  "key27": "4aRN5mL9H9921DFZdMtpaTkjooZkJVQt1DNBJ8ghPuHiweQrJj8zPQpib4o65gvmgVnX8TwsTiDZSTTJfVwgcD6C",
  "key28": "RDkSNFQHBCHdXjc43PNJngwE2TJCo2b87PnaHiE81vc299nAKjk7tHvnj1xK68as3K74NuSss5bJ6HJBE8eEheN",
  "key29": "6wGjgwPhLEhQnUfeC38uUxwKaEWHrYK9uaGytjmiSGEqYGwjiWR8qf76gsknnAD1529MniUKuZTmpeQD8XQLN7o",
  "key30": "3pox2dqPXoDNHp17DHK7SU2ibGyzi7mYJtv7xSYYjLMxjyo9woovPye1uphZZ1ykd1KJ9k57ZCTHGicD9GHs7h5R",
  "key31": "XWpNjTQLnCG5aVjWeia4Dv3PoeWAmzZ7oSqv8NtviyyDBUrs1sARV1AW4tNegmm7LZr3UzEBbifEtY2Vv8PRRJu",
  "key32": "25o3Jw5PG9zabHttLdtQeEpEtrJSrP9LiCKDk6pzoXuqjQ5ZCgxwwSXj5LhdTZhY432nx5RZByGL8BVvdUinTVzC",
  "key33": "37tFdgbgqB5MW2scBwwEb3hTry5yTYYVRc6xkmTSmtv4VtYrWX6fXFErQRFh1Q5hEeVLGzEk1cWZJF2RRcMjdDYJ",
  "key34": "5FbZ69ns7vMqr58y7tuMZaeo33bZJS3GZApSeGtce3Fd74aVSbVP9vZP454NooyRmopofnsbQdQCLc7eJpyqb1Y",
  "key35": "tA4uCdQrAru1uPwFWTFm4ocHQMuxzt8ZhVyjYN9rkdezQU7Nr3qxNvf2phhxFu36j1mvgb4pDHmsgy7t1Rmi8w1",
  "key36": "RL2eHxgJ4wKbpL6aU5VSV85Fn7cFYUM6DmGWWcrK8FqeAzBirXVZVvfY91QJ66vb7mSiu6sXxiP9ayHpv3DheZD",
  "key37": "2VdcLCHWS7yNzRXE7QYDukEEJ6ebPKq3Q5yMfbAsy3X4rNtpwQfqJWiXwHDanvNDzMZoPhoqaZ6dcV2JZx7fbAnx",
  "key38": "3VMyhX6XV7ALbdmw9zQxf8jrzrjDn2RxLokbHqCWwFtVzNoLaBjDg4cGC9xt2YVaZKWGRUKwB1ueu1Dg4XuyoF4T",
  "key39": "4wJCLLnTEo2eQAhbsxtuNdWCwna5rgJWSS2sBmoNq9VfdgxTx835TxUJykZDwEmemGFd7aQu4bJfnbFUh6jQDFFy"
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
