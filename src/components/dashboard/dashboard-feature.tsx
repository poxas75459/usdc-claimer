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
    "3ApRGtKeUwttWS5mcxFCfTYTy6g3g4YtpKptPJ1wL6BaoQv9NaeG4wfFMPsYgFs5viWPMk4xxUEz6LfYbCD8hxTy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YSHabzEPNcnKeaU8YGP76BJQMQrioxzy1NQRLVMxmpQpfuSxGPV5hMdEe92LEWGZghFNBz64PC3Rdb1YpSsfu8k",
  "key1": "5nRtQ5KCE1EgjzR8x5AUwC7iy4CPp1yCSQTftq27y7sm5W1ceyaGoP3Fzyqit3rvzTHhs797PiMR5NHBC3PyzSJM",
  "key2": "4cSGJjzX2EPFJcH48V2cxTHg5GWDWRSkNRqAYxMokUVVgEv2rX8Q1Wb4A7UYVexE3h7CbreHU5aPBcDvasvXuWza",
  "key3": "3ExMBELZeTTSPTAnX5Yf6U6SLMTBXcGeMfhhmXM8hEa8G8btRrM4sAfcU7DhEwUwo4jgHdNJ9fEgkM6nGMWyc5ww",
  "key4": "5y7JWvWgtzkwfttCagiMtAftkY4oPb8u6UCNBHx9JVQiuvFvQCJgAeUzy6UkwfXTuhP1Agg5xEnrYYDXid6uo5P3",
  "key5": "ubYf4DTC722uaSS52sYd87EKJ6rDzJzEgy58Fu8ufrZSE42doiJTM4RmG4jpt4f9SQ9hakDv59ejcQ6vTmNu1Yo",
  "key6": "R536F6mubQkBXiRgZ1U3naKJvMosfRDZYHdhnFrGvFoNTqaWnnm1aDjJdiJy6RAaLMzu8ZFtDmV7eBy6SpXhKXj",
  "key7": "5jE88KbrFxtFhm3c1Rn5UiidToarHnxWDFrjKtfiPKu35RUtTTkN4tQPdCCwfoXUGerBka5Rrybf1cobvM5e4jTB",
  "key8": "5seTzHh3JxByGux2WkGobLfLrJCYkdj3ubh9mXcZJmFrQn4LvpBZWDf5jNep5pimUd6V4Aj2fN283MVVmmj8U6L2",
  "key9": "2eBc5nA5ssu18eZ7EBe4ZsFtvfaBn6PdgtEFiGmrf5NZJA2WEetdLJXS6GRLbmCqS6bL4Qjm8rY788mR5WAV5U8y",
  "key10": "4uCS4PPFDWqXe9V1jaQ4FqYsvpoU6P7jvvKGbrUnyDQFack4w9XWAS8rpwJJowr27AM95zCgGA1XZcD2NPxKCdSK",
  "key11": "4GTbyLVKNucgoUQqVFgriFw85uHWLFaNTWMSyt5grXfMqLc3THJq29UVcBQgZYRPeAokZjCewfkzyP7YTeZnwneU",
  "key12": "3YaYuY71yZrWKebmGfSnHGpUJXteiMDffhtqWyf7xgk2ueGt7eQvP6jGvUJAB2RwQHphwq3KsE16KndQr7uLtmXq",
  "key13": "63zP4yVqizLiPfEZ8VryS3ynmHjFDUvWwfr854fsnnMSjJ1dzwAre47v6KuEqEwhMpQ3qTGyLmKqfawZk2MSJu6z",
  "key14": "5218c4xKJzAwL8bvzgiLvSxqAT5Y7crx5cCKeDKytV4SubSm8H5FRmLS1bUvDkkZ6MRHXzxrDZ8QEE8KWYEn6xe7",
  "key15": "4TksZzy239jy3mWDyJRTt9yLQCeiTLJZXHuVZ4GZ9xXbu76uT7Hb1UcanBTKxSHC5QRV3ZxRrboXf2tz13NpuX3D",
  "key16": "EoQkeqE9FMDwRdaD3afATkXRzhwjGqDdZwbf8xsdzuXTsk9JSof7gFMo31biVCDkzxfuexZYpT2ujw9H6J1pZrU",
  "key17": "3Wfb55vVNEzc7dVJL6iVDrUjZrZQiNZsdxM8H6rNQDeTp5RMYcJMXWyYWHs8FH5rNXZ3JgtY3mWmVskXG2gRidmN",
  "key18": "42Z4toUvYW1Np7HCWWog2yftpuuTR86gidP5s5pPzKPJVUVMuk7V4B6HD4hvabxats7R2FhqJu8xv4nprxQUouGz",
  "key19": "2HzyEAFdnvQsSsEQDqzdGcNBgxFpu7MyFpTxqpC1yH1bRVzkWKuJjYjecKySkz9bd1CR7BSrFeb8dWPZAdsE1tHq",
  "key20": "4dX56XziQZZFy3yBj6YMMa9s8UAhRRiNCvjHMVkWC42mrUBSxBTUcQLDE8mKkWhN3zRGE4eJAMBE7K68xMQySc3m",
  "key21": "3m6TrQKbEZryHjp3UiV53ZeE6NDYwzKNLXKJxpHygQRRaCTaspnCfiFT4A4u2jUJW9fs3gn7NH9Lvnzmm94jaNhw",
  "key22": "3f7jox3FvxkUFWNeyVHkyStiMMu2arSejYQeWVsYw4RPHVPRchMFBMKnrW4AwDPKXiENdAkE9do6uMFeNz9kbqye",
  "key23": "dVepzMfsRuwUCv4F3yCAK5rzHrVx678VMo52qjMLinD3rRuHEbdNZkxTec2aMJNL4xnPZXy6iDQNRxcvtY4QB46",
  "key24": "5qyydxWkQrn4kjhJuz1BxUdZphtWcVGMUpXHVMZv4KBNBGbinHhtboKrmqqFbY8f1qPvuNmxF11ZpfAc9pnksw5B",
  "key25": "3Tq6ZsQuZvMNcBvsPHtne96LXsBbtcRMjEuRFwC6CJ5AzfxQSHEfSUnbixYyeMgP3XB1akazGxghKmTP923rSaXJ",
  "key26": "31DHUVXSNdxQLMT2HCTUqS7ZL6eBrxBiU5XzXAYPpPuSbsWGCjLUYc6KFnC9dvjEt1bQXcH6pApnhbidVppg2ys2",
  "key27": "568DmAr7Nujpu1mRzmcrLsQPwqoucCaZnXeRQNovgC4tceVnhJ2i2f83NMiT2Ynkp2iJWYYDSiNkuKwbtynx838y",
  "key28": "57UDvXrbX7RykY7x6ih6ohNvEXNL8w4HCU3Pju1KXEVg5ywcGHbxyLBsYmcAKAGFEjAjxBcEq2cBLD4GiJKwSkEL",
  "key29": "2xq8iEniWEL2kJJgYsYdNQvfVnDFXDZ5ABCiJXzJsMog8vg7pnysTLka7d9dy2saKif7yo5oEEAGAiJADBQAzAaN",
  "key30": "EDVSXnjC6jjdLoi1yjHbbf1WWJivgMD7k5CEfpzrGYiwGSwQwAvPB6yNTcMg6rfYYHW4DybMXBkgQEoTKUcAiu6",
  "key31": "DxJwdod542M4WikBTkfG3sR27KD8harfhjxhp11bz5EMzCRaiovKSU5U8QBhEU4PvFA8qh7MW2iFUtpouCq3HEk",
  "key32": "5bpCyp2w2srzUR5EBKozMvb2ahFg2iBQVwrN5YrjTCvGqg9fbwLWarfCvudbSAUPdyTZjmYbuw7RsVxprmzZcQUm",
  "key33": "4cuaBVj8AbfNf35Q6WLmNM2HSkq2btbibK3mUMfrnGWSKbFvbm89Hh9LUz68fjycRC8riExXmCVG8LmQSY2uHXm",
  "key34": "595jmfMe3bmGSMip3jNCNoyCCDjUcfEXAuZAK4AZSFe1ZKbSHCDwXMX971ay5T7c7Kf53RwMJ5HLoyCQ2w2ZpUuX",
  "key35": "2V5S6SYPAYBDxZcVDgKmxfQtjcjhWZAiHC5tAwhtmQDCFZY3TpW7ZgEAk4z1nEXYeVnARzQbRPDzWP3N3Sq8Vvi",
  "key36": "4Gsu6SZPoiuJ1MEQ9Zf6T7vDFGcJFshWbjk2JXhaqbNZcDNcLCpdZg593KMWFYfs3ZqjfnNKGWbFwR9rM2oH5h4",
  "key37": "33Mej4SXLFMmmXYocRPiiKuJbrCE4mzjEUzdBZ8nj5ULj2xsuS2LT1ATHiaWp7cv3eR1vzwxiHLZchWFVypyzudh",
  "key38": "5ufBdVtzPsrNwPshDA6cW7pMMnkmJM6ArouZ3EuK9WwZNLHhuYgnVXYTLCFj1uWpQjaYiPiGkRHnmgDQTHPqPpbE",
  "key39": "23dyTfCnLQMfgf8gAidz5JHEJPR3AvxLA9erXSS1GqBT5mWof1n97XqcHCnw7DGex2qNYRKdQDU1ZvTdTsyBW6Wu",
  "key40": "3EZPNLQ5krPthWvvwqoeyk4qqaks9MjK7bh1Zkzha8ZKgbrYGfJyw6L8vo5PWw6EJncfaT5MGNTUoTtCsFmxjvDP",
  "key41": "5c9C18vF6dVhac9ZYo2vUkKNULCTD3gtAFkA2Ubcvbz9N7Ep1QYyod7LVBo6aCwmazKxZ2VGmUqdU2AieMEFoqmx",
  "key42": "659QqTB1EnMPD1eivWvkys7NxBf9wGtaXbU75ZDnNoxR4Cvx2LMuQKPz6UNMVxHxZx6wjB5N8Ug7znRemqHDFpHq",
  "key43": "3qeYQuGtB2hrLh9ChT48S7nGozAa1bedpvSRD7tmTNZh6rUsWvqs7MPmzhXmyffwcRH5CJKaEFPjzpNjzBxPedCR",
  "key44": "3i6WBgSbpkdnRvdMUmHn67FoNxrnNodK5jv4bddWWT3HUa2FXGeDepMbK7KYfNCF6bqAo2HA9jjxKVuE99qY5AhL",
  "key45": "4jeMYFgJ5X6XQsqdr3p766Gt4CdPDCNJA5xw3r2HjjBRHz6scY4e9nnxe7MPEZtYxcZ9vxshRgmeDVymTq3L8q4K"
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
