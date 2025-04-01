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
    "4zKVq3ogXqRiRNcLhLxKez7goRN3NgCcKeeF7hcnbjPf6fc9AT2cXxfHMum3VaJgayUJVvGdnUKcRbM5qyQUkZpp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N2wrbA3KzVV8aF5wRaj4HGK6tqPhS7b6BmusqhaRbTJFVR1rufZK7PG9wjxkaEnrdG9naHFPLZ3JLAhcDC1DUgN",
  "key1": "5X7gyegdECricqtCkdoNSdDhVXFtBKv7uAMFAJw4BD6HGnLAFMKVztTbyGZ9tXGL5EjYG3MWnwREbuPj7RCydDLn",
  "key2": "2jEPRuHH7x2Rftpt6S8YuuSLsMV27zaJVxbWrmXxsAV6k7MmzDCkmkRSUTHqJUVS11JXPhfThc5gohyqvP3i2bmC",
  "key3": "2k9XRZUxi9LpVqkarAEDbqhEsWAGdaV7dx5vHuCh3RUNxrs2rTgR9312zcBLwpF7NpGcwgxaXkKNyxrdfrgRafQY",
  "key4": "4RQsCrvtfd7XvzS9VXmzffPhVhGu5ArsMXWJL1kyznijc9jcBPUL1DpHtAGecGq8egyjehMGuht6SNfn8gc2MqKY",
  "key5": "B11x9yRFSmn13G9EFjbZRGjJCnppKhgWsEeKybfEMhyu4DZJSX7d7xgakKrgGkVSzXcFP2rrxi6UHGUw3r6VsfM",
  "key6": "3wNfGc8ZRRh6RDzdyEXc3Ve3ptjif5EM6MujQMjJrcrSiK7vcxMH8x34qnTMtDy6xhd1XLfZmMBLPbwmxqWRC9cL",
  "key7": "2gvBwHXP9NPPv1dMSenatowm1pUFtvLSfUH7bgiStrBf8GTrsSeTM68wPyWUSagLJAVcc2wh1Fobvmib61W3hwFr",
  "key8": "3jjtgWMeoUuv8gVVgBj7NJiE2tBHaG1WHRNJpkxwVU6XXMwv3buy1MT3Xuze48gh9SKS7TQDq54TFc6HjZu6z8B2",
  "key9": "5zcYnXj4w8JXYXUAfgi8ejFpMmdaX2oKCvPcYzdoGjRDBBhF5EhThJwqiYTz6aZPUTh7XvXkV4PYr6ov1Bb7pWQm",
  "key10": "5ErnTvTWmc3SsaYE14h86UxmbrwFUjhbv6kS7nDkFWfKmXJ4Gjge3MgQknrhEhTrcprxYUkKVMQtXXvvLkXhfAff",
  "key11": "42f11aqdrVu4YnEAX5URpGqTWkJgc86pEW9g4vFZH6yR3CjvXUq1uqaDJUWyshfxvJiR93PfNHSN8DpD3W2yenH5",
  "key12": "2xjpHK8w7XYcXYCVTk4ZmzUeeeumTKKDAFBNGc6QBqWqBTqo6fmagYMnQXoU6CUPNyVjMnLYAhERVNZgqAwnXZ6v",
  "key13": "3TQRJD4yTgfDhkmheWdNSwTjQx45qBBJgwQnzezcpAcSP1zkJc9MtS6MGKtQzTbb9nSW3trEGz48o1Rk8SgbdfAe",
  "key14": "3aBu5uJDfGaTDHNrjbmtVBuayhiqRbDYQMiq1DWqPQf4fVbVjEhcKjSjg4HFowHJYfWjf9GahzNYi9GWtN655Xn",
  "key15": "2Y6RqF7HuSwPHNgHhxMAwTKwuARi4qKCB7u78FKX7M9CVF2XyduqD1bX3SioaAYzJgtZZFnuAy1hpCoSi2PYkRpi",
  "key16": "51v2Mdsx3gdYoAFx72oXS15kZpeVZGyJg4HJ5FXFdnQbebJniKc7257SRecQc3kbqPmnTdKeASVoKyagnBEpsThT",
  "key17": "5Yuc9gMQJGrF8emLSeMxk114HszyH37eiFX3gEkSpddyME4mYH8YE4r7xMhqyyH2n4AKmMuj2QGdnbQ6F1p7CM1L",
  "key18": "4ksXGea7m58Fqj3E4YJdhgze7Nun1idiLPSRrpzRudHoT8S5dC3LG1PvU4oAfCjkdcy2aTXQRi4xS8QJdwCvAfqL",
  "key19": "4qhL2fKGPpekLn3w9JpqYCetpf4ZrqFp9iLhWh3V7a8saY8NXmMtjkZ6VALsDArBqYevLcng9Ue4ExUDUSNeEtQL",
  "key20": "7yqjJbVmJH9nzhSjcfeXG4HAwNS9VzqiSaQ8WhbfJ5VGGJtHnEm7ewxrBhK94W38aiNG6p8Twgyxie5WJjtQeiJ",
  "key21": "iTW8xCYvfebQtjpdZ2nkSTYuQwKGVPLNFjNVzMMebLioo6t2GB9Vx4UBhFt9WFTryiKA6Jis4ngqz6YU6QXUbRV",
  "key22": "2ivgr69BeNkhnGGv2Kc3dtG5Z2kYQwzWdns86a88rVRw5PSdbs5uaKycZVxCCLgHf45gA57M1cooX98bcEzseUyf",
  "key23": "3ADSsvUz1J11Uh5KMEiJoM5xzG7cJ7LiM62zRz72o7yHnH8W3kA6Mq2y3NPjd4C9KZPCroERbhA8BcV1gdfJB1Ta",
  "key24": "4qSD9wGMLfzLimS4uvj9KhueEQY5yTF85ypPpXDnuhEBfHKqNrkbK9kV9Z7rVDTAnNWTvyU5PpAGFyZnmRsouusW",
  "key25": "zM7ibaPy3hkkTNy69T7aVoDCR7vnjYZUqXC3GQKGU3wkTZgx3RL3BpVJ3c427J3wBfTZQEejmYHtfXdQ47ExRtt",
  "key26": "4xSbavmdz47Szw2VD5Ak7fYEogegtjA6fMJgRW8b5T4eCJ4Ke2aQrzaedJmFNwtof9GvtDQwTwQZWpEXDwaa7Qbo",
  "key27": "4V1RfTvyT2wcYTvBeoNKcF3zT3FUL4zqMHEWriNPtTtnA5XngYM3p6kQ1CaCpC6qc3PHzEo9JPz2HVaJUGtrCkPf",
  "key28": "5RZn5Jd4YT5JmrDMGRNQhLQnCd7ErcSAACnoDKajCa2Tqet8VUuRnRrDAUtjedxvS2WZiTngZKqGnDYi8JFW2tzv",
  "key29": "3fBMzcEXiMAiMakwF7doaDnErSV7ED1u2LB28r7dnUJxWh2p2dfLsh2RZJekLDRntqbMaWBrrCk8pApX1rq7ZHCP",
  "key30": "5JgUfpsAgGV4xJiX4ee3XV2zxeSVTPSFviBWTDAG1AUDL4EuBb3pc1GzunSsparAvdNxzHzQ9isecw4RLpdeEfyq",
  "key31": "495MtArqEoGjaqrCTPZdC7cofp6SFjJh4F1cvpYhiTdWrbLrCYN3AyDAKNvi9rRFUHH5NrVKPJYwBMBz36UNP5f6",
  "key32": "3hE14Z1fyooWFabH5ZCH8VFiCa3Su9ST6mdbhXkxeK464XkHMTDWn1oaxLN4HPr4rEDrg7urgjy58LGwygZ75XX8",
  "key33": "3Qn8PqP9bZ1SUWsSwrTGYUF5VHY3ApynjcudQBLr6sCDZ7MkdrPh5RzN9btHJcwLatEwPwSBYiEhQX66CSVZ9USa",
  "key34": "qdGTRCoiBWKtjUjAGU14jVzVhxMTGFAAqR2awtxz3g7khZHdE7mCj7YoA7mLmvdXBV9yALCKGvoYvHyXFTAr2vH",
  "key35": "2sCHKmg1nkQjxo9CRtMDGFBLUf66NafVYqYnMnKNLYKf5zo2QHJgLwLgYkxWgnuamFtHYXLsfhKCrvs6bQqRZxXR",
  "key36": "5NpXqFLUCZxh4Sxx4vn4mwkNudNdT4VjzCfVZUsVzF3iwcMWSgt7Kr5848NCbhxgDKXCnQJhW6zaHk5spxf3RwGi",
  "key37": "3uywtBArkKx9rqnYftZXUutA4nUFKqkjNE4A3hsvjcXDzraWUCP1Yjpru7ttxmRKqgC6pc6oEK4HQBY1Sd9Qafj1"
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
