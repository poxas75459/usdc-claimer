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
    "2NrnVJyY7E78rtyRie3EfWrU1W8cTtHEh2piHgWZHqwK8jRercxm1Ls5o1S27An3qxnesaLzrtqkPWp9ys6cj6CV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xFvdxscUMyVoQozbDrTywxNNbX8g2QPCo8WBsPXfCJTy9XnhZdDnUawJb6F8AnATRzusu6CyodtvB8BKTaAg68g",
  "key1": "2dsG7NY5NMyC9HDUK58uFNNvrtbkTYBvpPqwZXqAkGvFAkCG9pyBPmnba5ZuKjHn3nLPnk83K8bXGfJNUiGD3Tpp",
  "key2": "22s6NXYN8za8YyPLpmqw7p6Csz1rYXbtQQtUt4pfWaaAnbt7Lev6vWNkhg5Y6QTQd3FAXBmBX593pWCUZrbKLiJj",
  "key3": "3kxa7JQpHwJGZ8hWi9xBYnbxEgGrv5xabLpXUNgQYTfcxv46jNmHkCBV2KgjspRceTVMG6AbrQQeW2JRuJanyj8T",
  "key4": "rdkUhJfqYJziLYzJN8GRYjDmSVUAKWDTgeYdcmjkZcTMLkTw2MLseGmSPQnZmTZusFGxyxdcuJCL521ewEP9aXj",
  "key5": "ktgM9eyCny89ApF3hpjGv2MycEQwvpF2dHio47mG86ZNBKqz9CoMfzpT5hv3ayvyqoNifAHuYimxUV6E8p4JXaL",
  "key6": "4xc5NrNCjSSGsGeykhvkAouL2CftqyacwftyMAnSd9uoEB1w7kk8Tufii2PxdcNPTdSpwiteYZo4PDYJqjAYBbuX",
  "key7": "oX2BdEXPempUtcZtToSkgSGmhnyLyaudWYuiAeaK7kxSVnj6sZtoVsHmKXcv5cDPWpVB3UV81yxy9gqhTazGYhu",
  "key8": "3p6MoZiXihYEMLjEzuuesnrFkCJs3an1wjwpA2JkGt8bFxX932BgSVdnemY4qchzno5WXfXY6VriyjTgzFHDgZsf",
  "key9": "g9G5wbnttRnWBmdBKunyVEUkPS9NaNGd4zjV5z4kKZ6SR29uyqJ8TYmJDy81YWiKuBg7BHZ2bfmbhokxJvbkLLw",
  "key10": "4bcEmVvuBa21T83ob7EpPuQw7RDRAfRh2ZvHVWMfZdSPavqncr4WN5cNRnJkeY8VAyFK9QrzYG89hCzDudmvtRPr",
  "key11": "49R3zd4S6MqXKTY9BVY7QGoJHRUYqFNMhcCXfT7CJb59dRpjg2ZqMKCDumBSNaz6KATYJXSiMSMkVjMKxoEbxRA7",
  "key12": "67Xiia58kTbX1yEgDEb3aYk5PEm18zDQxAhdNjTGvcNcbJheVUrcaaEN9RRmZCpZxKTvFj8LSfeod7ZM9mbwepud",
  "key13": "T1HQKvX7cBrJi3hzjd4FPUu5qD218BwF9Y12u2YPSy9MUwbHGSLHF7TitxA1qWFGB2uDYEbTJiKzhapjyKXxde2",
  "key14": "3CRBQUQjSXFo2R9QzG3FokV1vgAuWieyJZMi4geckgv2mBq9i2vW5jcCgPfPJYxEmRfhBQotK2fDSM1HhZRzhkjE",
  "key15": "5dAdEGKQb5FTDBMeiB1f5TYRrTGUaBRzPABaGX6uBTfaUs4sUQvCrQrMJFuXTBjDooSGBEymsf2uSfTJY9Madjha",
  "key16": "3Qg3EmD2hqowxsBLzS8iatDkEPTTEfTuuR15qpZKAeLhtNqUDfWuKy5DrbSkD93DTHpBQmdCvWPVhTgCKJ5G5b4b",
  "key17": "4264hqpcbgcLKsS4CD47KRUohtDwyia3ECkkGhdcHPr9RovP2kb1SYaqseiv9Guyn2egdhC7irGR3qq1iGjaspmq",
  "key18": "3LXCczctjhzpGs5VnKqEq3DHQ15RRGwcUJBQBonJgGi48jaFPREQLQTTzDY9XY1DQJNyy19RwE4hZP9558X6XZDf",
  "key19": "qxTRUQL5oySp3wKfF6UmWrnszAj7wp79GZFRLm7a6Mnr56g7b5KdxugLNPcej6xL5eqz5ydA22CefosdehgUv4p",
  "key20": "2YrcfSee6gy9vCQm3gPb5mmtuaNMAKu9Bm7KiJLYC7CiVFVPbrtoXhTsUdSFJ3JZAo9ws6fHAZpDuF337DgLjcen",
  "key21": "rYVzYzKTauAC1Kk72AaDDtEYwoAnq1jtGiX1w6MHQ353qxZpojy3vjUbvqit9ZU9zZRrNmNorjeigcoYvfYx2eJ",
  "key22": "1k63vTso8iPKQRLY2wWuadNFLNcfwcR1VuG38dcD1jURkM1a4CNxoh3BTB2jFC8XPPrXtfp5gxh7WrWKc1vGo8R",
  "key23": "5s6qs8Sno1d3vQC5Ntjwhv4p9Y2p8VbSvv8h5dkZ4zoTSFSi6ts7VxpgbAvxSgUrezmAu31K2HdBiGnUCu9nHfyx",
  "key24": "29irTw1PF6S1mtVRmG6nZLpPgUrPghHFtbxGcLPcc35Uh5u6Lc9PDkaCYpR2x6T8JEhwXGW7jJpA6Jq1KNh8MUYG",
  "key25": "iUqUFoNirgYMgEReYXtqFCvtrwCgxdZEf4NHimJEgRM4fQcdEQiCwXHKeDucQbFjXVuA5C1TsHSNBsfc91NHQK4",
  "key26": "2ocAMXoJQEr1USAvBGcWNdddpXSFBLdMbUM8P749EeKSQtEqvEcZuMg7f9vjGrMXFgCrUgwEMUBp48AeQhjAwrqk",
  "key27": "kB6KABBDDYEy5vf5yYizQEgvjLVDMb7Aba6c7LPY7Z8ZztmkxwzkGmhr1ttsju1unwGycW4oSW62J3M8RjqkguN",
  "key28": "3vHeSb9rKwDquTKvF6Puv6TQuZcaNijtMvbDBnw12L7qufTFfb9eUddBDzLa5iRfBVdQUg6KDXMpZBayZQickBjK",
  "key29": "2sv4FZrwu7XxbXFMQN198RCJrNf7kT56KHU1QMStWJihmM37fALYV1RV5GnaDoqruTKSfCSXR3yfJHbh7ZdR8ScA",
  "key30": "5mFJuRqBBYf3eRrDoK2eyPq9T5h77v9dB6qKUj9QVh5TSm5qngJC8idj2kTBaimNkWT3cz5H4FvYjcpT6Y4r5vVf",
  "key31": "yaD1oZEJuRkU3DwmHNikF2aS7Qezjh9SneXph3LQP6qd1aoKvnndnfNhiE4TL8bTwawudpcuQdMyLj8wo7mkEEu",
  "key32": "5hD9Hf3EDfCfezrp2rxpoGCv34najHZHynig6afaTKJnLFPj87Y7TJHQBTkmSUuue14wV5Z6zCqKA5UqqvWAkD1Q",
  "key33": "3X9XBocjFyG11h5Qd1x2voSnfkiZvdcq9Y2HrUDNPSVWyTQcVTYjAWUqwx4yYbNdVp5eQXmmFQv5bwJWK6zJeL9N",
  "key34": "qp4RfimtxCQhTKtNPEhkGWGKAW3dKqBpmJbWsVYDnjikQgV9v6L9gfLDgt2KjaF91VLHxAMrAcymsaLy5QctkpG",
  "key35": "4kyw5RDwS5KALDf2yic1i643vXiTxCQs2imS9fJiktbxPey6LAWSuCofja5MeZDkvbMHRB1AtygJZNbDRZvovB1J",
  "key36": "3dAMaKNqDJunGdtjUEJfaGm7sNNSxcpbVMtbtFavMZEodbAZT79x6K5m2XvKpC6oaPf7vvqFhk64YfpFbV4KTbQs"
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
