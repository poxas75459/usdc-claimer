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
    "59nCxxJx2g2dHNNSsgVHk8b41odS5iT2pKB3NY72qaTaFTFDQNDQD534YfMkyLUvf71TZToTpABYLMTyen2wrdSt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ha8JuxEWLGfUL7HYH7oE2DEiaq7ApXuzuzUZZHTr5GV3AG44q2cJMzahGvzNTcbah91SEbkAbR4tJtQyP2jRXCK",
  "key1": "3zRYrmoTaa71rmMqHDrJy3aGjKCvLKg3qgWj4MEoyN8NuBC7tfqbuVSYMJk1CZm3xBiL4VBUANUoth8Aef3gzsry",
  "key2": "WnNaiKHYGYjK3KUrDZs429HdNzAuyCeAuz5wxmjWy4V631RDazEBZHRbAYSnovWnity1oRwtrdF5qPBeVAQjjWA",
  "key3": "2Dnu8Lqxcc9CjX9XbepQ4Y73VKnq5XT98a46v2D534iPts1NMxF8q4R5pUYK4PTtYhsTZ7e96M9EL5Wq4zAgXxS",
  "key4": "5LzswN4DhEtsp2N1s8hE6oaYAnUY7gmL56Znh5ZMYpLNoLuDxxYaCzJ8HpNBQndFHF86vesP4WDyMcZMB6pqV7oY",
  "key5": "4NETJh5MpSXKhKqSHvwYUWxRLPEu2UbdyPM8dtmnWoSn1mi3PhNzPMKUWP3rmx6ZvnXfPReQQQLC9MKpA7LeGDhY",
  "key6": "4Um8eiFtzgqHTTcSNTKhskoyEf99DNJgdE1mSq4BGXuNPdSdtvVumpbff2QZC49AuxQFpJqGBRQkcYkYUYqCj7NK",
  "key7": "2ztrkwWJknawiZGMw2xdtvSzANwgBhCDABiyJiKD4rbDsSij7oudoJGndT8Tish83jLDA34wGzCcrypDkRpSMJih",
  "key8": "66dMRm4ioM5KN6H99qyoaFbvvmNcCsbJrjdU1rw3mdLhU5bK5VDEHgeQzZ5SwSbtBWiFkyPjiSQi17PpDReXnKse",
  "key9": "2JYtphGaEY2uh6y4ACuv3DikGggAxAeT7g27QGuQyzZ6btYAhdKkDaWA9o51ND1ivWP3ZCDuUdMAMyxmgT8u2zRQ",
  "key10": "2iayGNAqNnoJXxUZ15acdBr6wtjh46EwQVKzjg2rUHE8d2CTiGTCk3w31rAM2c4cGQ4TUAzYGrvDoq4wzVT4RneA",
  "key11": "3jprAEaDxYbT3CQqBr9wkwiBF23ZgzfVJWXgrmeHBcxvuxgQ7UFzrkStKnYscrvDCgDCpbjK3od4oKftqGBafk8D",
  "key12": "4PkQb3ZadSTL6c5okzAz4UrJHURkodUPXrDTfW3FaPcuZoac3jhfEmN8mVrzDr9kkaeghyaTpmKr3W3u6VdPJYPu",
  "key13": "2K4nQCiivKUPGJHUmAkeT7V5BsyZ2rYFJ7NCdCpyzpY2CWQoSQDmgKx9yv72iHV5MsgVboUYqZYtARwjjzrYdrBp",
  "key14": "iofCvusdKSoaBK19vx18sUrMfERHxacxtfgb3XeoxN86etjfWoUthFtQzwkmWicCmR3CncDixjp4S6nnyZX68sN",
  "key15": "4Fk9MhJuoMA2wn9e7egEfHu2tWZcfkqCSYVE1DSdZfT9SiyedYkQCfb4fCgdWLKKL8QtdNjhuibrmuPUFFbchk1",
  "key16": "bVcwcZNpuVLaKQ6vky653nHWzhH3Eqs4JmKRYWVECahKbesYhvYpUBq92Lk8L7QhPsqvstc81Av1PHM8osPQiPK",
  "key17": "4r7cTovMXjLZrcnezKzuA395FJKbjj3snA6wAvNHxc8ptbkmm7BmsFG96DPFFbKAvYFSyQMexaFVVQ1hTFPfqCGR",
  "key18": "3JUsuVvGahy6v9qsecD3KJV1p86sj7ginTseWGzEV3z86dQh3SepYfeqJHAjvwWTkvLcyZbNrFc3Cr9sA6yfaNjg",
  "key19": "4c5cyESrnyXECoxym65sYYoppCvoh75Cmv7JFVuGRmjCHA8fHoRLaxVEF7gG9y1EKii4H2outrkhPmVjVsutXDN8",
  "key20": "2RH1vZbE1rsU5kzBeV1ZcrXjeSiZq9ZPYbsrjiJ5mBv9GV685fsu1iyYGgGkeyuQL93xzaJnN3Pw8vFQB5NfKyoe",
  "key21": "2t7karjimYkww98ZHbBKosF4jmVcHgJUw4EKnZgokK2ahzbPKAQxD1JwX3BYL82aokfFEy7QWno9nis1qS5erJfx",
  "key22": "quUt6sX8wApB8hBMjuQ7PNMbAujm4tYAZ9qMupw2MS99SxptAwrRSKP5k1z1ftFzaEvtb3D7o5u9NTQbQktYoHu",
  "key23": "4m2V8AKsrHhYxgNbxCdEFSpPsFDmynx5tgLBWPvWbhVgiyDx78N1jz5cqfackJ8FmRKdNMETpn4fHXvHGtNJ9FZ7",
  "key24": "3e7qYNH5cnvLwJwQvMtM6RN8MgFr1TE9gkkZXfkoEk2KcT9jtCjTQvtgeQtYxqkAWvh5cAPA8R7dRBQQ32Ldn14x",
  "key25": "2DTd34qsUcTX6aNnebot3wNGySWb8GGEabZnKtZEemYaFYrXVMahQ8t514ogiKe3LW7M8HQngRQjMSNo14PNLGxr",
  "key26": "5a6D2ASfN552mUjfVXkwNbDD5cX6nST5gyx4z7axXnFn1XNkmrJKfwQed5mA1P3szxZXX36TwpHMW4cUtCTPzRU6",
  "key27": "2BeAPGPWEkSKuBhrHUsPRfAZYPL7KGkYrTKrm4WTtQUvUPym57roedQyCnNRienJxkXter7Xy1tD9BuqMgDbfdS",
  "key28": "5kG1ZLmpFJtUGSFN1FHTidBgt68F1ynPRi571WPtmKdygzo2Ep5FNBYigeFXrk9YPquXw3bpeXp1RypozxdRs4Lq",
  "key29": "4JrKTw6grDZDVWKnkFywYvivoBmaoafCKKnWgLKcuQMBNEStMH2Pt8wTkYYfE1GazvUtiVq1Dz8mM98ZQPWeZdTV",
  "key30": "5t13CZ8wDwieQkp4AJkrRtLe4FrEr78tuLznPJD2y6cDnbuy1PWegD96ZqMNGtNyYnRDPK4VVcpUNbDQyV32tC2v",
  "key31": "66YpJCBEs3wXhWfQ633JsJfBBrNeUyX3dBKezTqg2zxB4YZfmmsS7qW3p3AZu5YjtXdEh15mNGbEHswpQiHp3BE2",
  "key32": "81SmjuqRhZWdkMDNH2w6Vw4F9d8TTodQp4C5SWME6mDUxvfVVfdUaVaTZv41uTBuSMMoPo29dbj2MNxu3knjjSM",
  "key33": "34tjadEpJKuyf16xnakN7HQnBkiSqJ39uHC1Yy3y7sPrmNd3qgMEtdbbtVYJLcB93oR61FKBGcEDk1Xoddi8cdxt",
  "key34": "eMeA2KYFVKNEgUxhBD95V8EPanNpgetJaYNvc72EKPWy5MVqWXxcGyUfVYwEWi4YyJgqLDa8tFxZdtfugtepKnq",
  "key35": "2n8c628heJsuc9eXqaZnptXMaeBo9yuMrMvSABKaRuckBT1Zp7g53RnoatV6JQaDNxDbjKtZo1aw1Zv64HkFPeGj"
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
