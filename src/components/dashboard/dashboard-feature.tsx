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
    "2nGqxobeZUff5Ndvh5voAnSoK1dLWZu8jBzx3jL7GP2hkZGs5WhPH7jVngZVJ3RE9WnLNFr9nwK5HFSSCkkXsFtg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JKBmpLk9fqNTVdSSoMvaPihimpDbhZ9VWSrK1UGCtzU9tXtE5pRQPcdvUMXTQRkFA6fSHdiUdUzdNi5HZenA7kr",
  "key1": "QrXh5eaK6dmzd1CacwGKeYBYQGsBshTwNo3TDRbwQcoVZidXiYeHTSYkK3KCU5iGC75k9Z3E9BQzGfoYABsWQfj",
  "key2": "4XhLYrQDq8xcnRH3PX9vaJC42ZWRDnH6KSWVTinWekmCuLoAKa5Y7edX4WU9oGK25xeQzbFSt1LLV8JM62Gg6gyz",
  "key3": "RZnkXsRKfqAYdw8rPrRP8AR6tiYUt5uhwRJb9mDM29gUuHdS33Fk2egktpqAA4t3QRtCy7Dy3Lcs2GA3T5pxcee",
  "key4": "3Fo8hC3XvupPLyQQFzUY4jJn2axsVU18jcxHEnkY3iUS8bjqihsRwtuKGzLznPPMk3DQSh9niUCuU5QrqW7CBHyW",
  "key5": "4dgugZDrTYeBUixo1tbrFmo3Nwb85vgGzmDF5C5n6hWLFZyTgzUiGe4d2giuXBymWkWKQf83LbBCti1xJbD6HWBz",
  "key6": "4JCS5girHVeRXV1sqMLsUh6MJSMJqoiyb5RkY7eZVfV7rU8nU2LfKsiTefkVTvmBQGi4x4aozL9wDM47qCbMoQz8",
  "key7": "2HAMBQDaTvugAdNfF78Wp4z2d83bTYpCcxoerht7o7hB8CXHaDPUJNcUhLSV7aqTjFMW7copyNFXFhG1nic55s1m",
  "key8": "3odHWFUHDZ6GPFvVtn93myUPdEpRqAZ3FmTwv8FAUkMpRu32i5RqYFFt1H4z335EXRmym1osVrS5PPzvMTZu9gYW",
  "key9": "2MjMKEM5NMAFzbdCZZ7qmu8SZ5r4UWJmQWQJXpvdZ4WmUzwYrr6rjSCPY1kvLC8XJNLmZDKx3iBcsvgGTkH6Jvam",
  "key10": "3mmJKBYZ5P3LL45mduGdcvJnDtRPpJrg2xvjGHwqeUN216U1gY5jpMiYTzbM4YJ88vHWt3VgM49hLP73JjMoPfMn",
  "key11": "2zBp9Kh8WXLdBNc6t6YYbzTDKDDbdTn6r6h5AUXKTpMxrYgMBNVo2hgTUGvnphbgLN4mgyBvKkvPUSrJDRY5ZWUC",
  "key12": "52xwb7Kn872LzXxCb64Mggpqb3j6p11Jd9HEJRhRrEJbeqpKQ4rUJEGv3KHEDCczEoPXri6yD62bFejL6YDRwTz2",
  "key13": "3VHZPUnYjCajPvFzVEh4Qt1dd5Kkhk4esetiKYovMKWdyzy3modC2jrFZUP3g4zEv3uu43VhvFxdm7TSBaTd8j93",
  "key14": "5iAXyx5GysxTN1mwRHE8FwTHeCxVau6Wd9MZEiGWptnLbNRQJksik7QaiWnCAw7rmgv3pQtDGLDgf8fpw6sDRPuM",
  "key15": "56VD4dA9qn5vUHchCeTVGVHazGeMxVxNSCtadvwCgZyLmq9yeGAG215bPeh4qG34Xqedhv3Pb29n38vdtkwk63kP",
  "key16": "45Ts2P2TAWHUF1mb3GJ5TKa6HXENHxGpdZaPUC3ujK3s9WsmBhw7kjGzMXvBkwC38RD2bThJUtbuA1W1fAbVBB8R",
  "key17": "2LNTujeDPP72RsPZsqYCjV6vvmimE8Y6Z1saCD7YurHp5ge7y3DpDYXPDapPajWv8uMm6nwbTDMGzp5nZzVEWJcJ",
  "key18": "63mbqsBgngNBphzDYSLQHpgMfQ3Qm8TS3QgDV8R6Qv34chU7Y2wpRy15uDtwtFuPvd81QU7jKhd4VFJbEvFc9X64",
  "key19": "5BEV9djDVHrzjQSfLinrQCMrVUxU5aPD6Ne6pn4gQRpBHeg1whD8KDfAYJUMGnQeFzjuYsYudQCV5f6kLLzHWKuK",
  "key20": "2KiBri3HFpcG4VJ57sVFDrAS7RUMLZFXPUyLKkxyNpnFmEeTg5UW6FaBx9SuhwgLiiExhNLKx5Etc42hUGe1kADw",
  "key21": "4riYzRgmKGS6PZNkzXUdjbT1dzec2kBEHTcMqWWZ3yr9X4yvsFoPMSBtP5HNSEtxy2PY53s45CGXKJsGwLMBntd4",
  "key22": "4vQQLVhX6gnDxVHPeBXFw6Gn6q4iZBQUGCjJKLWqN3zpWEs8dekW6Who3HhmhUebonKj7CtbueVzumgmsJTfTmsR",
  "key23": "5bgRhGyaXdFvcbxWnkLts3unQMw7ivz6RGeWaRZdWw3XiCT14PkAio2B2jj7LBWyvzWDSY8ZdxZqtm6TBkfKyw2Q",
  "key24": "62eyWTJZrLtrAsYDHNgqG3ohs9jtCJCRSvNQkLXRyc5xm5PLfCkmY1BUGxckD86vzFRxYzKUoHqYrpDBTZk7DFAp",
  "key25": "23bEDWoAJG6GBGcN4HzfmXTP3BMewLZhEbsRpvvMxou55pqLm1VEBsXPcraWnNAfkXUnmDNo7cX3h8RxySXGNTM4",
  "key26": "D9TXEBuURD6hNfJxP52PbZmBAL4LSV5zk9uBxsxPztarbuRhKgW9d6yQCEngsDiLMxBQApd8MBL7BtnRNxUCkAW",
  "key27": "5DTJHWchvxLaGmw5864BM9sJJKxaRBtxFE5sjMv8Aa28rRQmEvXoHG8FPx2kYif2owsB5XVCbrYr55RFPPTfes4f",
  "key28": "44bXVdYhvmASjsvHTBnPYLXcRqT3vvZAiJKFhJy22Zqa6f3A5e61C8H2CA5T3R2cFextu2Y2zD1GWGJxPmfe2QLE",
  "key29": "2WjtgrxU9xH1AUCjh2LZ56vGLV4qWLboSbon5fJEYjDT1VJ3xo1pPqg47NgyUKRrFYV1mfsHVNURwd7RDwGunduH",
  "key30": "5W3LmD4pZ28b54vqM4jwzGEbeuyWag9xA5rt3eKukft41Y8ZBUzfMeoJSVV8iuKqv2DbWe6NUsd9GK7BatvPJxZi",
  "key31": "2cohRWvdvDtnhzFzsQoaC73MrNgtszXc1VQT7nPNELpxZXWGfDa622dxKAvqqChLEXLpr9bB2Yd7ZimgeyydsArh",
  "key32": "3KEg9PypRWZ2yQx6bpKBKzHqmpnG35bWEEydXBUmQXJ1Le8mHxRU3EntweN4a4KYiDw7cPWC9GLMgaZ7WVNS9Ruy",
  "key33": "5c5iZfR4ubJz75ciCUyoZmwupr1MLCHfwfoa2QmffErBH5ucw8ifQwWChkmxMJ1Vp7xh2fj5LLrwRqkKTqHaJyeR",
  "key34": "4Z2FpPugW2Mkjs5uVjyGQcBBFri12hHckNxKVHzYDGFG8wBGg8MXVZ72PkaEmEyybFZm5nQdSiGfRAV38cR4rH6U",
  "key35": "5Kmcq5HoCJUir7tZsfmGCfox92xsTwY3t2Dj1rVKTPCmR5PUCZCGDskeVM5PbF1AQWzxwqBGRwvDGcuXZqe64VKH",
  "key36": "57yqa5gTAWZ5QhFmLHDjGex3qxm8utjZz2mbyQGeHqMsiq3vEaD43sdSxdUSw91y2FUWqYGePGvg38JcaDCurCsC",
  "key37": "125zK9bbUP4KS14a2mJjEQwjy6Lhh14AHSGtDi1GS5RRFjFKFkG7ZuMXQL6j9xHQZKAYbQtRhtwWANmbAzPfktaF",
  "key38": "P2Viee6S1YkZ3nNtfLnDwtobqxQLyeqg2rLXTrSc5mMqbT3FrTMobZSMqTRT6H9tPR9UN2RRZyV5Wazo52TEQ3q",
  "key39": "4CKk9x3Mjyoph4iB4dLHUVfbkLd9Etnf5AfkBauZLV4d17ynVAJSnJcMLPgPYKgCn841VRih9BuXYM1YKuW611Pp",
  "key40": "2B9ntaEn6A5bgRuhxe8tqc3X9zdxYYxyHiZu9hzyjPmfhyDzQ77vQ9VsHoyeQ7zjU93hirPWRDYJsv71qb5bszZQ",
  "key41": "2BBLeNx9dUwV6fkiWRCwV3X188k2g96RyvdmZtgbpdgYxXrfUhBx7FdGShRnm2BJhVeonfYk7sSbcnkx5CMDw9dg"
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
