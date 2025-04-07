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
    "57qAQyfwJrdmT4sM54Lgr5GKv41vXzoyYXWLHCSwZJ8T5SHmTt4XpbGzavbsiFiacwJzGv7ZQVnAXh6HHinSnejV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MNWKM8mmnpCGUXpWPTwuijuU6eESo4WbgcPXuJ8Ay7r2euGh7sQaiaUeRFEskhyQv9r6vSXqsBzgoMyLMBapPja",
  "key1": "4RLApEnUi6HrSaRbe1MEcq9yMXoYxovhs6UUU9UdAk4xdG1hhid35qpddeaSuhGzWaDLXdHKCrb2UhMA5zLAZK2Y",
  "key2": "4rudNddGG8ZAdCW12f6qrUrTGvx9E4GaZQv1wzsfmsGJn2usSntFgqcBFoDCYPnmjc19fHZrvBkCqYBMEf4uha4m",
  "key3": "5PNkcRVteQqdNF9nZMkoJx3JHjVVu1WA8kbpDq75ZEae3N5CS8cUevi66jsm5XExegZwZLEZ1LiPYKtVzkDvetGd",
  "key4": "pWYXoC14wFVqBnBpH5bV5UarG5Cox5cP5xNJDYffx1dCMnMbvNkSWqK6byCSzWKa47HBXafao8HtbWeuR3hZbSQ",
  "key5": "3Q8DaaJN7KFpWzLPNphJviUWkJxowJtsf5hPxTb57FcG9hmWSk94HzyAYZz5aDZANH69ksoC14TYcnXtywNQrwzR",
  "key6": "3feACg4jfiAK4PX8PYGFoRHHryQwUXVbubykaauX74d7AYehS41n1vSJit58LqJSf46QmKFKCkmAzD55dHTa8CYE",
  "key7": "M9CMbLKghjaLvXqGv8CcyzMeCNkPLf8SJiof2iv96knTyYKytbpB3fGmKMc8jprrw6HfUjhHxQSBYFTiQahHTsj",
  "key8": "GoVWowfTSaurHw2mfUywTZkjhUYMkYrpwoHvkRXi2BJzQvvAzCQyMRHYoxx4uUUMPAxqtUTHFS2rySiUV6AnMQi",
  "key9": "3qUTSyZ3YANU47fjUgfH75we3b6QKqYd2fMzy6Xahr9L5rbWgwJbyAaGExbDuJGFWnqSPS5G2ComHBW8uQ8HYMWM",
  "key10": "hcPjUpSzYgfStNhRtjaaXhvGKUUWd4LnAVuqKNRgBaE8dZRfFTghUB8YAv42SdpUSGYcubqhMJWgJJkVhLxxL13",
  "key11": "5SK99T6dC1BhyWmGsjK6GkYKRM9JHv3tgQ6NaTERdqn3PuwvWAYSVbQTt9yqFH6KfokYZD5cxkQvqGh1RNqsr7Gq",
  "key12": "2zoNiQh2PN9ebbttYozepzxak8NDK4dXHufvZvnAe8NrzdPvgfJMW6sVT2VJa4NTQqAJT2oBXrRY9DQVtRh4eTnm",
  "key13": "5KLAuahCQ8bYuXDu4EZn4ZopwuPhV9BM6rAJFYyfPSNiEk6HnVAUZEjPYJRbiuJrmNuc9MUM7fdSeH37PugaAbcY",
  "key14": "3f5kYTuBxvpsfRLYz7d9YFeaULkGZu6Xr85CgNRFEiHoP96JEGkLWRWvo2EsPKNgmKSRndU97HbjtLQe7xGVg1h1",
  "key15": "dF53AL59LQ7XkqHVV2Wf3ng3QcqkQuznrivmeQASENqd2Ju6i5CzvPQasCozD4oQPTTEnCS6KusoecCVR6umwXA",
  "key16": "ckvr1hjnqnkV9ffponX4LRYuEGr8AR2wutGVY8x4H2ZXCoQxAfkB4S3BCxFArTYLf2Eogk2pseVSzm6w3SCYAkf",
  "key17": "24qxWoLE3NE889KZqFXeSAFCNQ96osgoYRDv4DhpjtkcXoMfk9AkRLtrLgtwXBzFvfK2jZHcdpnzjhSPLL8WZ5in",
  "key18": "5MSLNr1nZs9XUYtoLG3yWJkss2t9UXu9UFCNmhbJVWuS7zjsN2zt6JvDF5Gw9bQnymtmMvN8sSQL15WarSoezTw3",
  "key19": "5P38xcVFf8qchCFWx3ZNn5iC7YWZ1DAKm6s6hXv1cj34oaBSX4Gvv9xADypLqYujwCqHZ9iAJGVPfrQbpcAfhSCU",
  "key20": "4kXrwWvu1KsiWxPTcVgL99Q4vZeB4jykoUAf7GE15dFHpjs6Te54VNjy81csba5cradoMDHh3nd5ir7kSe4ozk9w",
  "key21": "24nQEW1WryK3nzGCUmFDhmejPnuYnLmBYN2U6qz8XvyzkMtuT7dZ8L72LMW7rHfqypHYcjhtjkJj34WNzdTtJyDS",
  "key22": "5vspyB8Z4DGLbaQ3aa8zXYzuL5XnSDfhbSi4C7eUJYVPMsRBULEGCF2GRzVgwZfttDrKvHe4ys4NbcCUByAaF6oc",
  "key23": "3gfyPoUQcYH8HvaZGLhrCUnixjPsUKfWUtAyB39duemciVnhQ913ZCXsb1soFYwEeWGBmMp8JWEosTcphQVQweND",
  "key24": "48FSoJukTgDpNkK3if9DqaK2NwekJGsU7sbJNpCcHH2oYCGi6a6chas6FMomAFVEKRszuKNGMXM4T7gYJCUqFYLv",
  "key25": "4XDEngq6TBv95YKawg4cQLn8BhWYdMCjHzKYB9XeqzwYfdRYWoA1t8mo2u2NMjXMcA7PwXdLeXDv6PbpDNwwgWhr",
  "key26": "129Twe7rP1LtLY7C7JvPmCTU5ZACB8QkszvybZaCAJbAgmmwceXdHecxUFXY2WTLNU4Uu1H8ziwhQpQmk1TNWp81",
  "key27": "3PTerxz63LNYJqxoveKg5WNQTysbRcjawPWiDU5i3TdhjH9k7uYpy7poHsQ1RWuoaLgSAPZ7FRFi6wDj3rvinsNC",
  "key28": "3FXrN4ZvN6C79dgved3ovQ9E3NnHbL8StmUBDGGTBCEZfqe1Jj8Xe7Sqsthe1qYjh3EN4A54horQL8UCto7ED9So",
  "key29": "5mRtzMhSzz4frmqE7bLAfjycGWQNMYCstnc2u85utkDK2RYc6i1Dat1cVAtw7RDaBShEyBE84pF2GKJz5yia1oAB",
  "key30": "4teSfpGBAWYFSKW3tUg82xNRgLVZFNGFjQQcD9ri7ZDf38Y7oLGiuhjZNHyNqUyzH1e2XUMjBiC3ykKU6nxKZFsv",
  "key31": "3xj9WC8XBZmpdp1Q1wqhGAxPWvd94pAk9YLHdHG2gwDx6U1uCTRJcUDahjuJSGir1LSXpQHnMxmvV3PGrwgHL8wE",
  "key32": "4uQ2F631J9CzfVDvAbtSjN5V4uGLgmQaW1nRryC8Eivm3sW2Pa7dj2tg9bTox4BTFcTY1pTaJ5vBEowESJJPdjqR",
  "key33": "2jGqG8FWqf3ZBSJ3ro1B1ZuBjK9kdCyfRuvDC3RXCwtxZPVnNqZqxGqxgQKrGVMSMa95atWzZXfqjtk2mq9MFfLp",
  "key34": "2BBPmNgL7MbU2CcVgUcj8iVYS26YJ8YGx1XhqKCCmUJeT5ErHcsEEKHuPo813oFaPtUywhs81fJp9GRTH6i7sbGN",
  "key35": "2JDjFYtXGMNQED2fZhuQN5XsWFZ7qwFFD2pksgdukob61mxZp9JL31Ujkd2JCnDwb16Qb45xEaibFuo5Fp3isSCN",
  "key36": "4Xyt7pEriVA1aqKTLMaT67rzF3yCoxzDdsg3NNuLi9YrCZhx1b3GA2HZzAKD15BbtEt2RFtLsXd5aMMALiaBbBCE",
  "key37": "4RUxPSJYE2o8AoSYhU7XQRwnzwu4jUXrGA56oj575QkQbR17Xk1qc1ZDJQpvJPmnqVjr7X8qXN7YDZ3dphCz64yx",
  "key38": "kgwaa2mqKZeXTfRSRTwenn9LpXHKb9S3g3HKriH1HraYjLuyBgdbDLVkf9jzuMLbyyB9Kf79NzZDwJfa81hTWjW",
  "key39": "4isyuDyaBJ2tyMDco4bo6JjwX9PCk8T7vHHt9my7UpBAvva1cGDSiTz1wTQnCjUEMwPWgVHrtfuA6A8EeoJMZpH1",
  "key40": "5jojQf4BwAYqD32wBgt76H4krwsBemToZ8xNxhgWqYkjQaBPfjnxyV7CuLNT9jGCz1YXbS8uS1SteQeriaDBhrvo",
  "key41": "3AZcaqVdL8qUz9YbFkKAHpH4GwYtetP3FjY5TDDp4nwAUSc8QvEjz888XRmm1brdzMwARXNqJ7Z21FgqYQtfPCev",
  "key42": "61AG85P3haJzBnPek38tam8ZCqEjyn1mGvTDrPx827t8auQK5bFuqyUv9iemULFog2khsGZCJxdsbCc9egqSqT7E",
  "key43": "29yyJizicw3MTUiF5sfHmkmnTeBT3SYo6tw4Se9xVUHE6GYozTeRaC4rRgV4sn23znNw9TCYAnuLD57pEvxhCNEM",
  "key44": "5Sd9QTt5ycCaomKbe8vJPz1NzUAREcDvCmt2kkh1ZWhBSyhxVzJCauseAGqRoZfSLvaug4SPXSoiDBneEdZ3EK7F",
  "key45": "GwCXnHpwxBJ3JhNu53UUnkdKrSodctWnx1YxvGBSSGPpGavN3Lg3rPbUQjNqodx7rb9SFbmEikbnCVkARokQEYg",
  "key46": "5ZF4rbx5RHkA2K6ix9yUfdR8ksHjVwK8ZeJe3Hj1okwuv7Anr1oc6ZR8NPmWriBKvoJGbhTi1t8i2Pxm57ZxNUko",
  "key47": "2RJPkhDB5xxH1zUoSq3S3NFrLvpeRtvBo42G3GAmMVgFKJmCdY2HTZBBQziJbBXU876mCUU1DgRkNMq7mkjjqKpm"
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
