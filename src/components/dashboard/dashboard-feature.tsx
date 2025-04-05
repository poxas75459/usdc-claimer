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
    "29wEFMg4TY77wc924k7P1EbQse3ibEWhLtQQ5MfiCGu9t4w4Un5Wcugt68DBmXZEeHdc4eiApccPArvCBKPjPxYd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66dYgoN8zPXZHNs9AwBF6yyrCAiBfPGjcMNG9gXmqrD2G5vZkDLQzbgydHECUCmyatNw3kY2VxSiMWzm49ZKwHZ4",
  "key1": "2Prmw1YwcevAhwGnJ5PP3Q3unNLLA9kwHT8WwtGLFiWF4xZeJmXKhSv1jJE2n77rp1h5PA9i8avpBMSQALSJkmW9",
  "key2": "5EoX4e9MQ4F6FvPbXg8QmCycfAVufvhrtNNaW8JkfMUCPRgFkj2GdnhsCBaTrnk3NuqrCjHqXY5ZR3XUQa68naRN",
  "key3": "3fc7WZTtaH2CXkuFqdW6TDi4G1tDEzzBBEgNJqkzb9hfHPdEqPfCJEg7iwnPBcmZM7eei6XZ4cptjb9Mf1cVgnX5",
  "key4": "5tsoGvQhShacGy1JM6C3Dio4inevNErBgzHUM1JHuesK3cQzLU9nawCVwqt1X1CZBtYtqbXXyA4kykgEWc7BgzXB",
  "key5": "65V3tf2x8u7eD45rAu5W7w6pecSCo9LSoutmfWafn6yBTFZe4rFEs1e2fxhfQumvwa3c92ek4rfjxbHwk8qNqRtD",
  "key6": "4TTBqMpC4S2H1MUKPDZyqjpmCy2XZH5Ycd9fcwyQw645tNRfvFTNocNmYuRvJZ4jaNcf2mZy7UwVv772bq485euy",
  "key7": "66FvbsRFXYKWsNZMnVvN9bqNrUiTPmyr3kkvZrFi6tRcPSfES4TKPKzQSezsLazpvPtscLBBkvkPiWyMuWAzyLU6",
  "key8": "4oRbJVWWqu8tdxm3DGZarPUwmYVq7hBio9rGfSJvg4Nxjczd7krDG1bXgCf3V3ErJzttj5zscqAeTjNARE4F1hVR",
  "key9": "323XsbYZXdRRC7iUeuy1VooYc5i2KHHQDgwTwVshWbm7hykV4c49LXSJpuMPZUtDwGNNtPDLQrpX3LoVGctrsnN7",
  "key10": "2NqK26msHY2KxbRezKw4guaHaUX2bidJCwj7PX1MZJ2WSDDTM3TTtsUPt7MfbzESPKpWpqdwhxadFWiRPLgmSeT8",
  "key11": "E5Vp8DAjZNEFcMWf3iBBcF3MqFn3dbu3Np6iJYscxRytk4EhD5i6dawE6ELKzV1gpsK535tZv1hmt9KrNGeq1Cj",
  "key12": "k5ZqUMcKEurcXDV4Nv4BCeS4B58BZoRppapstdGdJmEduA9qS8PzWes32DC36bqYkK1CUaJeKViZkTUj2NfrRoq",
  "key13": "5XZARpxtcfa5Yai9Bwzsnegux65Y3HFMb75dHmd1c67umw6XcwXdY9jcWXZR9ftgvJ445vhzRQ217hyrafnz2GEA",
  "key14": "5ea16Jd56sae8rLtXYixJewQB9ZviwWnzjbHZuxGFFfhgG82u7hVSHr45iTbiYP2MmzeGeU8BiHV95A36BR1ZXwz",
  "key15": "5NGPRComy9sg6jcmZK47hgNMRwYd1LZpYWnXWoJRoLVdNx1yk9JHLvry4LjaPLZKZG1jdt2EVCho8MBWZdpyyKyL",
  "key16": "2m9ioEzDL85LchRM4gXuPfbeJnxSQSJjhfQGSWpqmY6RSv8tgAPUcwrwdv3CvJzp7fAETUwk8zUksu7sX4FqtjZH",
  "key17": "3BSsBxfz1tDWB51cPTurhcR1B9GqBSYS1wUd6EKQqKCyNw7YgejBXpie5Ezc1Aawvw1f2ZsdK5LDkMBKQ6NKiBXD",
  "key18": "33SruTrhgdziZ1E3o72c1EPFopznjSGSKQYZXQ9DVQYHxf4eoVDc4HHZ3MuqbA23qWUtqmUbRyPnpciTr6dDsftb",
  "key19": "2ggzRzGRLuo3hohEJ9PL5f3XBeD45ot9haaxszoaVPZhPsFweTWyp3ztb3Q6TSqC8M1tLowtkgzUgJujEnZC4mbX",
  "key20": "2GzDebbQiY9LffEFFXzbmuBUz39LUnpXg6DWF8dsYGcNv7JCXGpmNw9BbnxhxGWhMsttpLLEt6QKLsgi8vGrnAxr",
  "key21": "2xuLd9igMQmUSvkf5aT9knmYpRriHwjpsVM2dPPvVqpWKBuAxnLVVzas2qzCiYuh2qU3311NZ8oGHv9sMFe8n72T",
  "key22": "1UeWgAGgXDb5UCHEiqeKZQsLvDFrUdTuh9KLN1X573g5obMu9EF6HxmRV6X7dVxjd6gqoR8cWuoXpHhcCTbA2sz",
  "key23": "2PbLhtjWYd7mD1AHbnkmZdumSt5cYEnu2qz5s8hjBc7YTkzwaCdPujKmr1VMbqUrCSNj7yRLmkioJXq5KjyNftja",
  "key24": "21TNoWYGFdpasJMAjLsSCnG31qUVBWTZLZ3vWhkg6MpfstyzmrWqGt2ioTZUBJzVc9o6WmXsQWHSWJ5zaVC9wbfm",
  "key25": "5kKChZK6uT94d4bHjNUrnsRFWbjcAFFx6mSy4YS2twkixkCB5dmtZFx2YGQjnCiLrFYud7gBwSwxxLhfUaLKuHu5",
  "key26": "5PUZFg7P3DMf2hiZwcF7N9JoSVdVxPHhxDiw6WjQGLh1cr5ns3oByHjhugMoSqM79JcxEZ3VezMrt6WSdynqYC6Y",
  "key27": "5xgsn8PwsUH639wkZLoJ7rFwCYS8fSjEpXaVZr2oK3Sgp6BMRQeAudF3TuZcj22NCrqAQYZQvyj6LEn5XWwsEhRZ",
  "key28": "4tT7TnzWjVzF7sV7qmUQkWrSP4zU2uFLRH2GkXxN1Radi1cKrfrpdfBteVGothggqeZdR9LuTGGniTPugW3qvAGj",
  "key29": "35ZzENchG1rGbDeNhBYqkbZcN9u3bv2zsoA48oDXoXc2g8Hgd9Sa2i455nYXYnqpUn24D5p87KbmU78bQYca4nUJ",
  "key30": "3QrnFpLU4ufsxvwbpU66Wz5cJMDkS4sJxdxCwjbdz1szXz1CwvmhRgrid9bTNKjzm74XSFHLeqJB3hzni6x7TT5Q",
  "key31": "4Y1T4FKfMkKY4Qz463LZ6yaLBBuv19JdQ1PzTKdAtxR6KEPqndERBGDQsZYLZSdfnbi65ZUJGpuFnL4QXX5zw8FN",
  "key32": "66QbrLHfoG732GqZ2YXvfGwxSyJLKv8doYnoqGYj4RKiRorVndNpw3gRdD1bQXbADgNLFSzZU7eAQ19zACMSmmrN",
  "key33": "4WC2xSmGXKGWpt2zvU8VzoqShCJ9s3z9FKmDxMvyW2RaStJ9AfnwUxev32YWE5t2rqDXA5W6Ngaa2vFXDR4RMDpu",
  "key34": "tAbuZpcpoGUPmXTkjySHHYgHekfyuupX1gGiKUr5CuhAQYopdQjQJKNxzeJMR6xMbotiM4Dy9yGYF5NfpjW3ASC",
  "key35": "5Nw3vEbSD9hv32377MDWJ1CLbTYY6m6EBNWcm3HAuoz6Cvm4Z4D1HFB379Tg9RdFKM5Zp2x2vMYUJVVaZ7LvRoAM",
  "key36": "3eiZhcsSqMi9JzDpmqq7ZA4ST3udXWEccfUMwbqdFP61MevAxo6Qw6FhaomtfdCZxwPj414mdp5QsEkRiYffqTgC",
  "key37": "9QetiHePaJYKkvF6K7kdxVJNctM1PNWyD3zYVHuRyJcsuhtdLsBDXStbqnricbfBXogDrjwE1HLHgaaSipSjXCH",
  "key38": "2KUFXVRY7QTZ2QNHzvH2S2drwpK4TDPLsQvv7GcpqdAZq5Wzb5tSY9vyfMw5XXpNrM1CKcLZqnACrH8W3nm5tenp",
  "key39": "3QqLtD3g4aCjaXJEqqxArNAnpF1pgKFEVKQ9yqw5o1oLm49PhRna9JbLCZCdeCB9par5BmsvJSyoC9BPfyUfgAjv",
  "key40": "3TeaykwXxA3pSqEgPn3tW92sreNW9dWHDv8YSAs8VyovbbrsKqi9S2yfCDUrUQMTeE4zf6VuThGG9qGuP1WTpstW",
  "key41": "3qDHQNbJieNG23uieFkiV5eXjX5KkmzaxsGyCJHELFJHfUAhSQLuiXmt7HvvQcaqiRarKXub1X6HzcPGPqFwedrP",
  "key42": "2uCM1N3WXquu8Td6zTKQAPJeaNQjgYU47ySEhBM6SsVrWNkkVeFQGWTREy2JftAC5xKErdYSXxwoPdMfAy8veA3h",
  "key43": "5bPUvKEBa3g7H6BZJoPkYQFHMVSQ7hYGY4rwcH2GSSn7JVog4BjoJ43KSSgx8UQpEexpx6UzMwq5zD2fDkbJs5mb",
  "key44": "59g9VdvrkMVrN83TCNHxMhUF2UijiZBZ66xo38ANjwtAnfaPMuMVsm8y6gHobe27n6aP8U8kZyuLa47Kuo5nNcqx"
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
