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
    "4SpsYpS7kUJADCmQaeK9doAWbsbDWXommqcnEaDcJgb9uqmHcHcBy55DMxUkYvFTavj3P5o12e8mymsRzzxAkvTZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FEWpLYXxtTq7unu5y4AasCSxJEequwmnxXtAYgWSQSLX4wmafXkrXfckhsQhdDboB2Phg9W54Z2PEAWWfqC1mDo",
  "key1": "V9SvF7fAdtSBqhXEH91GHMbJj3DZVun9S5otAS8exuL26Y15ePytG8wbfXyCAi6gQxXv1mYjxGnzDa4fqpDatTK",
  "key2": "3CTd2uc6x1meSxRWeAzM1CTJQtCB2DbZjxJr42v1r2osUfj3mMDpda4P6pViyxfXzeNtQS4wEDzHLCpVioFYc6xa",
  "key3": "5UuqoAgT15TBr3e6bVXBVV15GYH2P5guxYwQDjhMhBqs8s8BVpgdL67dmA8CpAszATUR8tPhtL5TdnhsYwb2sYv5",
  "key4": "41PSTh9RpZq4uEDXBVyk9VV81eAWduRBMxKgaRriUKW8VaRgkBocjPyKdDfLAUpaSrMs6z66ivZ74NaEru6VqtJ9",
  "key5": "59s1zGoBQNHFnFAupji1FvDRRRsbLsnJEzHeqzcJQJeX6ZMtnNbUrYSzAjhfrgBX8mi4o7zuFgAuvxzRyKfE3rgt",
  "key6": "4hB1Efqb4SPLCBS4dNCYRwy9tSwXh6EyaAj86ZAxGVhWXjox74YCvtvdXR1PaDUU4WK6EAZiLaSruesBwvGFwsK6",
  "key7": "3NJcvyfhqM7j7mYEf9hMFkLaRUYMFbaNHtA4NPeJEZ7KHiG1Ssq8jUXP8Emj3GtDjsXGJMu3an5iLFC758FHD3k7",
  "key8": "3F1CwsdKjr4FZsR6JeUcQFY7AGoix4hgqoMsDQP6SqinX752Whityk5xfnf9TYos1R2mCK5i7mPEnjfaFqfdTVsb",
  "key9": "3oryVzLsY1UKzGHqMUQiYhwNBHQZLuaKwrYJ4vDGb4ZvkZef1TJAspDM8LmjQxLH6Q1VKDVAg8gYP7qPEwS57Cmw",
  "key10": "4BhQpqA88FxiqFK23hJ4NiuEXUU6pWHovq7WGqCM4n68kxR955GNxUgs42yveEePSYWxAqJscNy5WxsPy5Xo5JMS",
  "key11": "3VfwQoeLMbKgnux6zkvM8BXJMvUXbqNQqL3h5hxmj3FmiwkoRf3Ef3BxxLHxGQceNTuTprWeubQ3kCZDDwfKotuU",
  "key12": "2khWoZK1KAuztQuQP2Cy68WZarb5Jg7YgdfgtHTh72puRpeysmZePickYipeXkLDdPuTMms68wyrQjc7qJXdy5bp",
  "key13": "46Z7iwnLXrLxEZxCBX84tmANvRRFrjp2VeKjVtL7BCbM6hbo9MwR2xiD7Kp3K4rdWZMXeqdk9qZMxixuppLkMfrz",
  "key14": "5oVegn8FSzRJcRAED7CuykJXU9CnDV4sPSRY2Fwaq8525aVtUpjgeyNKEW1AZT46XA1dghVBsEU6y1yvFRcWoFNf",
  "key15": "5WCWna2krFw61gB2CfYSjQA9Dv8j8EnuGJXLhRw5n6TCdJCLa47jEYnr6HUHMqwmMDjjfkiuoRqyH3tFPiZ2PWKx",
  "key16": "3nE6nTc2H68CSfsRhBy9aGww5q3Y1GtvewepXCtTokhGV6Z9eQ2TRzACYUkKtEHuwjYfGohDez9h5W8R9Z8ozH8",
  "key17": "2sZazSH8PH7rxLaegzm956DQEEQtQvTTt3dhGmzFdk8Me5TkmJoadx6y9T52QpDbKCpJBAUWYQKxV5hPeP9PBjAt",
  "key18": "MpboVWYHtbDNmrtrqcrA9W481ptcEFTu3aD9c3CUVvWg5v5Nsx43Daum1XC2LQGqg5aw8xX5MwvKJoSDNVKBFA9",
  "key19": "5ZqkRfoJrts9ixQ6LeeeJrBsvTSCJH2NzRfXDqwxUskgmAHnmGUHfwnZ4yWNVtPzWd2ME7h4GTYTUznot2niXW9J",
  "key20": "2RQWGVZz1ToitgSWDcaHrH5MARpaABmj7A69w2wxcoTVRUKY52y9LNxbWsEPrYDLjT79Q6inrpxTDcSGgmotwi42",
  "key21": "3yVghakKt7oJWDyBCHCL5AKJgNCCe6hVx1ZyYGNVffM6o3oka9RMgrQLoTphse5biqmsFm31MK5hkZyRTYdrb8Fq",
  "key22": "2CEm6yKfg84ycpCfNX8HxrX3paCCTjP7e8HfYwjxXV7qvvmLH3tdxEcPbPUBftTPhF8fue64CgeHSSc1nbTMktM4",
  "key23": "KJ2NLhTJyn3J2c64NyEyViFb8brUPJyowrDbCzroVrzTT8n7MHYcxHuMs9Y5iyt7iF32pjRM7XL4wqN7FP7aa49",
  "key24": "45ANZvNKKmqzM4D2PfUxr47RnZ7QxHtXTzWaUiZGJE8G7o564kh7efmEVjKCywmK778ZDv91GPjDFnYWMYm9xNXU",
  "key25": "2zNtoU3bY3BZe623kHomUmRWQ6TCcFdJuDJEgWU38dCdaekVfgBRwQ9dGmKoSokSVxfyuqWSYFT3X7MjohnJkzxf",
  "key26": "5Uh3h43tFop4aqQUK8PCB2SedNt8yjQj3xVg5EXyeGdY3yjuWyw6f641GGnMgoJwZXJNgAv4XjYSmyBFAFs4xGJT",
  "key27": "5rFVyAeMaPwTQWd6oeKnftZtUQQTT9XUtncp1eAijy92DWTwaQtBrJuewSjjHE1avpsY7MjwXSjBymzPx6tCyVjM",
  "key28": "34dNNtgpkKp2K8booVAH5YmyDsBPv3mZysUhL9s52HbH8BBMviFRve6ED2hAS6FtXCJFufStKkRg2jGrir8T3DbY",
  "key29": "3mKohehJTLNG9qK1uVZgmQLn1d5uC7uraQHrzstwF4B4uJrqWAn2ADqxjMnHy4MERrkcM5ks38aXGxwQcoqciwkJ",
  "key30": "2CBXbzxpQDp7bHSha9hP6P5WVxFBcDS9XRGYRk7JVs5LgFps7hbj1TZYavycej4pd2ntRKLQyDQp7n8322xyfMU",
  "key31": "3WDnGYvjAXreoTwXGPXujXTjdE8xzRyBQ97gJGhHdBCqn9Rait95yvYuksGvKFKd9aCJ6zULLfAgkgXB5v5Y82Pu",
  "key32": "3v46YozamPLDAL1Dv4s8NsQQS2mASVgSiKjXpj6c6vsJzk7AFhdnWZYVP1pbqPfACCdZXrsCNvssFEcuA6jn9dzh",
  "key33": "2Xe4HZHvimy6dfp77gQt7SEbBEbu2hKWht5jaVP2b29ansBUHDVqaFQnSaQpvgcicB4APu9LdZtBUYAdMhxNdjaj",
  "key34": "4Ab2So8vCewHAnbdpYi8sNwnMas8poimyjtx3NqyEYaK74419v1QHHqJeGVFh61TEpCt8SoyNLaHiV7WkkWyJPEF",
  "key35": "2o2VgbGLcEYv8jYg6FUVjSeprwjiru1HbGWPgeetk4Kdzr1tRsB8voifAXtepds95yHuiguskiXinXgXe4i5UK68",
  "key36": "4nx85U8dd4ukzTQM7e9YDJfvzr1Duh9P8rrYAFHTUu5bJfSzUux9MxjXiXC4A3E36sb8gVfNud76QVv75ufWUG8W"
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
