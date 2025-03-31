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
    "4K8JaMREtZhjYPyR71rd9RSQ5tZ4DAZxcRUtVTSFjird715Y7SadWqYpsCdMiZr5UbcfyzEkM8p6TTNhyhMBLkmr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TU6EyKsLggJvoTqfHyDWyWAzqkNpbfRnxod4vSSjyazm83vH4YhiL3rZ4chQn1PbeRhnsBcxPFFRtLfm8LaCSx5",
  "key1": "3drbz6qjegDoxAvv26i2RpSopsP8yEm73BMg6WzsKQk8RS7pL4Cm1yjnbuniAebQvRCwYhQ5Ej6tXuoEbjG4uFHs",
  "key2": "62ojES2eAfe4Jikff2hkLM633wBac7YiENd7Af7iVLVDfGz6PywstpzrBtY9pAVt25H89kJMwrXfvBhLtx5VBKJY",
  "key3": "2yDooSQkETJHU2yHJCFzcVrjCH2PHGyrekEXTRsE7hY29nbj3pnxxRWsongmoyuYj4DZqxVKF49PViWik1iKctCG",
  "key4": "4ybSmXZbY6mPJHGWULc2N3EZRokZvLQ3uBUFVsuZLbi3xf97iFhai62uGDJ5B8FugUUJWgXVA34kbVzYRbWMa6kR",
  "key5": "3RqiJL7fQFRRr8AMHKEmKnY1DcHGZ69Mj3Lpt2ugc9qnyM2bf3eDzNg5oT7Ef7FqozoAzKH6Uim94V6gnGkNSRfN",
  "key6": "43tR4THKCMB4pLX9zyFVkBAg56vZ1TMmNfq3ms7MpPASxh5egp2rVjeQnop7Roikyov8osU2P6GrkhHWCjNXvEWX",
  "key7": "4KodcAmF9LCThMp9YWMNxJt6DZp6fawL1rFr3ZGinsrhfDFtMacwnZ27HVjAn8bRntfoeJfhgaLvgXWSLvMKgEWp",
  "key8": "2zmkTtacm4X7ao7kb8eqAcxNPqQXLMVuBasEsggrcUV9fQ4uwH16tMWWo7PmGnhKdN2R1FUBj3LjS2tHJu3M9vG5",
  "key9": "2ctQ6maprTfmRFzCLUyf1nYCLg35fZTZBCFmKF4naXR9FdS28j4jsRQUGoN26aDg9af9wVpw8bnDrQy8ArNoSvBK",
  "key10": "5QgYKLENcMSQqDwYAeV5xyo4uwFK3RKaYceKSaUXBFdzyqCgNC4zGUgGTDwnrMs3oWhM6c2LtRsiaBu79jz11XLd",
  "key11": "53V6aRJ3JV7nZhatQmkR2cL5ivNWYjAFASw4FVPc8D2Wr2RK4pw6MwYU6kNsQfhRxBFHietwRtL5fmFVyT2kzEDA",
  "key12": "66peYokV1cTkPRQgq53mYSWrG5a9Yid2BZ8JMtJe5X2cPFXpTg5vFmqrnXndeMw7ZZSknZBezmxH11ADxWikj6kT",
  "key13": "3pKsEh7LDS6UM8Y32DRqYcnLCF1S8LW2mYGwSBMnW5QsE8NjTNS47c5YKHXcngqkU4AhuEXMrorcFQoDPCo8WETg",
  "key14": "5q6wMU3gs6da81eiMJfJ2HJQY7DtGeb2zSUWF8t6CSiF7RMMUH3PQ1Y5PrUiSHBGN7rS3cjyQNrpMTkRqH9K5uqs",
  "key15": "2tpfLU3TViprbx1F8cVqp1Zrq6iK1afc6GexzvuD56eqepEBs97oaFh6vrXH1juDZ6oQAGsnxSGsZb65JE4Gp9XV",
  "key16": "2573o4mYDDjSmL4CTUc1oHQ8AurmppCpSVMit5GA82Bcckqzz6nm7BN6phzTReUtD6o7KLnhWqxTyYJJgaiQCWie",
  "key17": "5yCcQ9gEuwZ8fR4gkUAbFJ8XvLN6gQru1Ksr4UUvRpzDwvNXGK6MmNVp7W6pDHU6qYs11vwDwEVG2cnHizwkHR6a",
  "key18": "33s3zuUuYGzyR3nJ3UAWFjKH6Z5Vb8vc81Y1k1UgU9wqc9z75qrfSyi2SQpLXi2XaqPv5QETBFiznoQvCCThka81",
  "key19": "kENYp8qYNhooQSrJRmwA3aYEUjZc274CJJBBqgfEbtZHcUQZGYD9p9VaMw6Nqpy8rPZiMK8q7YT1jXnME5Q7L6E",
  "key20": "54oGkXVETmkg8TtsCdjrmERwvJnCvPHbnKConNsJ35gYzMbzzf7m3G9k2cyxqXeyTXJJn9efrCqrzQAsGj55NaD5",
  "key21": "2FkLpkrDzDAKWv4Fy4qLtwMP8r76z6X3fBfWN3DV4upTvZQPk6mWgFbsGqzvXzGJd9vA48BPJYqgjFFbqzoH89a2",
  "key22": "5aYXLjCcvtSrYfq9dzf1rzNLEKmvmk9VZHmTCVys4977pRA1HFJHj4uqGESwWLZjmRB1rLgruLjdy9Wusobmzsc2",
  "key23": "679MgHewRsA6n6R1BAaJij5XJPpxzs7fXuEHxy1k345bPRKuptk3L4zb6NTqMPaiSQc4CC5pnYbQCRbqhUWiH5AV",
  "key24": "45VUtMnsGaAxLpAQhrs4fMmqaQ1mr1s6nS7mLntRgt1xuTqgRdXrSAz4gYBFFVzvjxVaqWPRJfWAWVCUBroE3nWx",
  "key25": "4eNebGGXWR2yCRnuiBhPUb9Z4JoA4vSFMznMTRMaVLoPGrG8BCSBq8diAoUqntg3DvG3q4u8t3UZxmJrkx4zGhVx",
  "key26": "4sYGWz8yLiyo1hqsojG7rKz4F23tYpmcVH5FoQ7dUbj93YRNFC3cyKjRX9ZzRmMAdo6ELGJ71PHejuLKJHeAQr2e",
  "key27": "2ojNrrLnNgQToZye3JyzcTYMMoKKm797fwsLbaEBhafKHXYQqfqkbnqiCQs1iz7sWsJQmGTb4KzyUjCD8HC76xYk",
  "key28": "sPvn4sTYmamYPswhqQg9WuLdPqidbwxXVkcwEd5AcwEXMrPGX9FYPCeQyP5oC2KDYg8B9y4Jqthp2LQ8i4uajFU",
  "key29": "5gFQTtuMndHGL2pp1s5TucgeXhzhvcY4wojKKKQthCzMvx1d6XgZjcB5zpq5ZsiRp2J8EjyVdKkWyzy9NA5SNrtn",
  "key30": "ddo4BpBcAJRBn4MMHEN28NxFqhGtYvtPGhG32eYfFkikT7dvb53Zk8eBcUn1tUhESD5QypAfNkx5VGkbxnKv6dt",
  "key31": "519NiyXm7tM71DkN5Pneq88BGbfTEJHFJHnb6QGCcU9TAaxduED49dT3jsoMkp5XTJLcMM43AY4tWg9wFsDsmxrm",
  "key32": "49Lobj5kMJu1koEScLYNEXDu6JYPa3MhuBVCHA3cEhvkCmWgp6eHwbhGa9ZFm8zq81pyUCc9tUVsGaE8FKKtYcFg",
  "key33": "47Aq2EMq42rpV2Et3BW7qYoQqRYr6BMntosjkf52P5iVedn1TaBtjNzxaz6BmX3yLQRyuFzR5TewxY3wf8udKJAs",
  "key34": "2FMuKdcaRQdjFmJGDov36HqNfZNaZ5KBcPtqGBnRhRaeaUszgzXTWXQnuLTWNBdXzD3haek12SvrZqRaovHudMYc",
  "key35": "3sb968SV11quTSVNrVLBqvwimXpvx3mn2oQbVxViwKqYCuNYrKc7QUZ848s3JyRKFbKBYe98FcRgU33ghuxCrc75",
  "key36": "3Qh4iqC6CixPTEP2LAB93qeh8oYXHXGY9dVnAJ8CVQQojZ9YjjeNW9td6BQWLcjYMJcSJEhYoiHncWMEtJ2kSHTA",
  "key37": "5TNR9RxxkJ56g46EeHyGKuv9fqLvGBP7T4g3qUEAHNwhWYK2TkBhxgCamP42bVNo6YxysC36E7dN18XKXss5i6BR",
  "key38": "2cLJqGLwMjQCoYFBqkENJA7VigZxbUBZc2i5bgKYxjqS66ubF6BufvRiSccbbcNuGw6bd8F762fg1divV3uraR5x",
  "key39": "3fbfRnCGABGb7eQKtbDQkwVouU8GXkRMssCAH43WUakPNdHaSZnt298PBEKYC6gzfBeBzgY9UwTU6awkHp1BHwdC",
  "key40": "3FYStYeU3rFrjfhcroT3QsbNXT3mDwnxePt1hhQGNy8ppNeR7nsPBbsVfo7XSbp5PR2qd6vQa9Cu7vjiodeqKsUV",
  "key41": "C7tcUHXkUj8i8RPxT9RsNWY3VQwf7pknJ9bzchfQ6PgiCGbPEPPpeYo9mGAakX8yS2ujZ28Do6mYH4qcsr6m9e8",
  "key42": "4B3xsdj7HKQ1YNDVZfGnVkGw1EiHtz7xnBbpoPGTJ2WzFSm4tWti7FhMygYefnHi85mCJhfJpaZYqmo2aSg8pyzx",
  "key43": "Jdd5qPXLvwzG2vMSUAo24ooA2WgN5bBvFnX1jTkxbPT1igcntJCLdPMPe85RGSu4bFy9Si1wBVx94MtPF9CJZd5",
  "key44": "4BCY9s1tMUmgMcj1uBwFczDnox4BWDRggCfuVk9dHKjb7rTRtq1fJxaxvyhTbtXCsyL9ipQxWJKWj6BZFaqEjoA",
  "key45": "3e5amzjWFNraCsvYxd6C3UcYjgDfAKZfVv6JCiZxMsnvdt3wwWNsqf6jmbGP6Cp6TMVAtiz3aGfxPExbWidbjiRJ"
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
