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
    "5C8H7w2fFKc5qsPf24NLreaKMK6gxEUM4NXYZwrWFBUBNmH4iy4CPFwMUJZKifNNsnhXWkTk4iM1HmjRoykiLNyL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hPaTbdZn2wjsEhbC8q4zUSom87P7k478mDW8MXZyA11AaR8yLoHTQNagyHHXosV9KitMqU4exbGFeBNvKHVrgjv",
  "key1": "3d3r9YjP6VXPcEd7Jxnf61qpip2ia3p3AVj5vA76Hixs6Hv7MVN9hpreKJyKQrGPCr8LZDtmdUwPfNVFhp3pTxk",
  "key2": "5bjo8rYywLQhoXiNwBpQAZES7pFBBD2aey1gR17PaEsezm15o9y8uXoZx2RFgnXgYoh62Dfm5gGvR9hmwnPQQ4z9",
  "key3": "5ArpNeFRQiUSZ1VAceRU4iPfkVQtHaEAspXQibstFD61j2LbjnZ86hauiDgm7hM3yybNURsLWrBn9CoLgCHgaX2g",
  "key4": "2awx3ZLcNQ8fGthVY5um882k4b5fQYQdXhraLv9VA4M9as9vPrASoAgqwu8acfeeoZpk3b2EK3gVF6rLigPshRyb",
  "key5": "z5xbB3mf3KJiGam3P4ZQbNuyeGs4Ud9VBiDDUXDZAAkS43Ys1UsaTmuQqFPMuq8aepYLuRywrK9cmXcSYB8B29K",
  "key6": "p8kfcmPEdzZgL4TpKWUs9CqxPgB5WCdUfhxNC9gnMoYrRpmLyzdAfCdvomNB8ZJRHRT6jdmTHWXf5hbbsJB1kzQ",
  "key7": "5fiMKsyRFb8pCT5GtVCsJFP3FktrEDGf19eJS7wjNjmDJiHnumtoQ5bEW4QcEfnxSVU3ZUJswmE436CQdHByWmWa",
  "key8": "mkd669XdWX38SiWDjdsbRwuUgovPXZpeJtvA7Wi872SEUpzoFc6hCKFbXQrUjtZBXsDNf6MeMmFWVX6vVqfddvm",
  "key9": "E7UxaidQL2LS182n8p4SwuGSjbQtAfGwz2NAbTPHwDDfsYd3EdfLHPRcsRZaWzjLN5Zit4Uppj6foGp4XYbsPjG",
  "key10": "2hC3cPz15c7yUWZG6f8Ej4rebm7tFRo3453cJD975Mp2m7ie3Fe1bdm2edpMLew8ae6LUTSbirZ5FSB1DHxzaayV",
  "key11": "mehBboExcrR19WjC32SvK341prUQ1FK7HajpHEDEWo9jaUBTHwFtXEyPoX3DXkR1birMgvVxxjs1CvSuMQpc6ma",
  "key12": "5pVC9nhhbHeXhEuXgZx7hmSNLC5sV3FTTGeTv2WpVoyZVQtTkCmxP72czChCGyHCxDuDV2eqhFUrQVLCSmhWN2Sa",
  "key13": "5eAbL1UXtPHjobBxJT2CERinFF7eY5KSJRjHExG3bhicQKtLM2XjtNkVEQzDvABNM5zDNXwbqKCNyoyUSjSyDtSw",
  "key14": "4waRjo5Xt17FarE5kwaGitBTzL9pXLtaut8fBzDvNy8nkW4JFpACCjPiGrFmuY7vu8FJee8E5CeDCkoZ68Kh24vx",
  "key15": "5g7Cs5hCeG3MEAr4QFYXPkdPqyZNN8c8T94gdudypoBMdph22MpmkWBv1tHs9721fcoSiRoC1b7RrtFG26kMXjr6",
  "key16": "2Sx1CfQJmQtLYDDfpwukhaKLGsLkRE6esZgLCjPaUUL2ddCp7B5zsmWTpxkyoYN7bVLuU8SUZtsh9mpG54SXpLKV",
  "key17": "3mtHNyKAAvs1hxUFvNT6UuxWLBVTHnZKSJFtagVTLo6QJYeUke4eEn48ECn9wsfhfvWxBrGjWUdFMro4JWVg6g6P",
  "key18": "zcuA2kXadMfXU7v8JR95c8UEniXpHoHVjMgPSWpab1YB6Xkowy1wM7xZGrJREe77gEVvN7dW8H7P3AwQno9CpaA",
  "key19": "5PW3PCcs1gTVptThCvZBDbW91Snp62Q1v6NBVspCmNCior7txgQ3QXKG8eAK6LUMcjTm6v21u2MK7sbxPyUyfLeJ",
  "key20": "4Rd5Kr1XqdHdmJ4D81VDX6mMxMf28NW9dY5fgziDrHK6Hc9jhqWGEqKisrcNBXuCNMsQBwtPoXPLXPQvLztefj9J",
  "key21": "3EG8yJrfWsVX9kB67GC5B8amhmD4syUXPLVuXhpFAiV64qWZCDu2XDgGnWBb8sZ9wcmmMViTxhrxFGMLuV5pCWTK",
  "key22": "mCATG5vECGqbtcz58du7AcdLeQM88YyvLQ9pxJucZ1SMqBHePBnrxYN8QM6EgT8iPnzKksYJkeyXV8cQhDyw47G",
  "key23": "5siRFUcZ5xDTq6cef3tEyVNz1cPLhaX16P4Ywg6HBKWhdfTdanvvZ5w7sE3xyhL74SvndZsC4YfryCxndbV568KY",
  "key24": "igwJQzbRDjtkDYi4arzGmoRouFAfnxVCA8gdcpJsjmyz1pj82ScQxwxNCraMiUdnBeH4GA536BZB1ZgQTS76hom",
  "key25": "5wr6foFzxDBB4kPipKWoBsC5LR9bmbFbpU6ZBb7U9U6MQpCeCLMMfYP2qEVEWBFcdoFg3xbYVGuizA73S2DNQWMy",
  "key26": "4sQSmVppBqcvutACjyAAjHyBK1WPZbAVEhhtVBxbD34YYWxj9GfyPC35YWpsDVeWpDcUEaWyuaGe62B5CCPPu4jr",
  "key27": "ZR2tEGHHYWFbY9kcqY38g5qLyhbmVNrcE3dp7qJb19pUTPBRYaiSSEMo4XSpqwy2ZvNJUPmGiJuQoEEfjHaLBBp",
  "key28": "2e8xSma2y2VPV5sc5bvM6RG9g8E4ZFrLtYqWsjh5XLdvBdcrH9Qo9r5a4NTdCSQrWSL53RyUJ7tWy5EYskK3t5cZ",
  "key29": "4JnQXvC1Ey9c7pL3qM9VFG58Y8HPPXzFRyvq4sUTjpUGAXR2RebYUAuCiQuJsbcqNHnV8jd7HiqZ8a4dX4WF53DE",
  "key30": "24dCYAL5m8oQss1KDMiUfWKg37BhLUR2YxpHsR4pkgNavf573Q16pd9xmuij4Xr3uAartuPCfgWvnmaRnAcrNx6Z",
  "key31": "4PaGZSG8CztBxTVHzrD5FE1sQdzKdhY3VTiGtJZqeykcMWYg7d3KAPbQisCJvjTcddGY5MUo2vbyAgNTBb519Foz",
  "key32": "29Nx5fqYD9f42pZJtVrTZ6xwjyQAPaJGrrjEHHGG52EMyXCh9LN4GKpCbCvDL5Zg7taxkUL6Zr3TT9NnSSsRq1aT",
  "key33": "3jLjsKZnqcLZbdiuJBM8mznpoTKLQrTF3XhYgM1npfV6HqGS9M5hKRFeQJDsb8L1aKC3QwGAM7bUYLENpxt7hRFm",
  "key34": "WjRikgX7yYvseUS7XCqFxyptkXZTEndwQckWhKjCGc1mBvnAc8jpiy4jiDuC6QhtncDNY67pbeX6S1BtszbGGjM",
  "key35": "3gyyme7JLFBmq17z27TSsbDKU4Phcq2VcbV2X8BzkjZgppXS2YHp3FBY43Dsjdz8dnLtMVKMW8JKtL4q9JR738f2"
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
