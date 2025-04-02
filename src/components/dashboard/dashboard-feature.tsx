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
    "4G44Ua6W23q4tY38vDAYUPjtvjzTjheNNCD2fEbJNpGfPC6dXM489B5R5EjnG6zGDHz48ViS4BdFTPnrnM97iDJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Grme3heuQyhsgEY8dNUa7PX7ghUCGK4V74dZKURpmt4eEi9DxYdBsWCeyAXm8QPG8CE5GqfW1CapFZrBiCc1RPT",
  "key1": "2cGJBqe5yobknaNaqnwke1WMwkCPiDq2bCzsm5uAvUXJEVci8MswWr613FHR2A8wFEGLCeka3nDCxH581ct7cgX8",
  "key2": "4bWtZD2t8RrhmR1XwhwNTU8iX55BiXUAuZFLvNwfB8F79xD2xm6eX49KFHWdC2ZJTCeWvTXQ2DLThnHfjS497Tzp",
  "key3": "3Hb9k6Rj4qCRszzUMGrNxgToTb6g1bYzYKoiTzKGomFH5PewrdrGAQV7ns6zaZXXRsCDs2zZ1EBU4hJM58BNqfZN",
  "key4": "2geJP3rwfUjhbQnjE5v7EjLtYWPkKHJSHMi6M6bvrGcgccEcXioea13mWgiMjovJXZUnNtDvyqS8vBtZ8guCtTEZ",
  "key5": "5iebSV52pBW5jhwy5pAAyE19E83yndQQAVSRt73coH6zt23b79upeg72Bxga2GYxvDKS1pqQM9GZjQQCtUGg7L96",
  "key6": "S9X7wRohCyoovgTvc51qjGgtMT8NHBgDw7ny95P6NqspNczVqz9MpkyW62HKGfgZEqzVqKxtLKWNE12zPLe1kGA",
  "key7": "24KBAeYhd5HnRfGCn8x5XamTmrFPjX1g66WvV7zHQdCPGc2y5owQ2hJYhTJ1eKUsjevcGLkdg4B9vs165V8mhf1q",
  "key8": "3mJFzSzsxEUwVv7ZrpVSwcuWLjcMNbi2sCaSTT1uzfk6yX96vV1JyyeS2TxHHxe9Y4xRpGJcCzoLQyZuCjo6AmUU",
  "key9": "287ZYjB8fhwYpCni729xydCa9FgLXtVkEqrLm2qJk8iCh1zw2NyYMuzfA4SXchW9ohur99w5Xo79yoRDi1rU2QTz",
  "key10": "4kSwQSsXiMoqo5nMdwURmsSVqswGhV3vjgkcn34DttAr7Sc7gcX86gneK1yopCr6RYf3fbbUZcXX9NeJ98PxfmY6",
  "key11": "DvLVJ4hWTXWa6ZJDVFx73B6eSE7sNKWARrxh5NHhKAmRo8cK8Pe3vG3prihznbk1EKyBUoGb8fQgXgvjFNZCzcd",
  "key12": "qoGdjJin9zhGuAh9m9CzHowfgpE5kdvwBJ5sBshtRCDvSU7Z58dxQftz72jdkSrYKmhBfqLbFPmWs5s7E8dSAfh",
  "key13": "3S3ncDRmxJNRd7L8NJGqzrAc5i486jWmebmSZo3jEHH6ZArg3x3iwsQ5VpBoDfJG4zMbQGESmHxAvcWaP6Sg1J55",
  "key14": "4N6iPNwv1yjRzZmkP8mJW7kMn468yqtpKRb9szwD4nKLboxieQhetXoBuau3dNYTotmAQ7sHz1cKtfW7NMM4HHDY",
  "key15": "koLv2nzFNjhJJF5kyN6dLXq7NARJ2XTprBEwz4kUS9YS4qkj6rUCcRjojUWJG9wRZPnU9ovVAg7hkHizMkR2jnn",
  "key16": "eR7fVvw5qxfrnZZ8KGcZeDhbdraVZL327bKNuSgvoskRHr6U1YxEvSn1iXSWQQ1JNpNi3XNZ5Z4r185XdMBgyCW",
  "key17": "3hAWTud1faKZjFpHbAFMKnjzhbWp8pnTBkZe2J8ZjMK342tkX3xRU757Hyp5R1gbSWUWbz5SEjeBDMKcUxtoFUmJ",
  "key18": "61yx3mamRcECdymEmuJ9CAm1WjVLhiofhbTg95b2TDWBn2sEDBfafmmwqKqKMa2kBspqUDXZ5nCm59vGcLYsnezH",
  "key19": "ibPbe398XjfP9L1Vdt2Qh5AwbQrsVuCyRMpNG8wGHY9ZAAcyBqcpvLZCX7LciRsMVxsKQSmrLhpJDiWe9MNVQVg",
  "key20": "2Qw8dMCk2PL8ZDoAahaLu5SGaeek7AwqiAP1B1vofNag9x24tmg1ZgZHHsaT5msFGDUSX7Yigi4yfWw6wm7nuYRC",
  "key21": "4AjA49yPjCeTxdsD7itK8QxFx8EbN2xDTfUkhUauFnAEiZQv2KXbaceTV7L2LGgGrXTetv9NbiNAPPrBJaEMP6cL",
  "key22": "4gty9tFCJLunfUWKYzn6brsR4jVS5fmYCKRQHD6P91wZJpZ3bAN17BYgpSkD1EnqspPNyXpagmAkPkP5nMvTRyjk",
  "key23": "3nStHk7QfezvjavytzkPD17Ey6Tyn9q3ZjTcE3UR2TpE9ypGYXLaNom3oJqPJFKJF7UWfMG234AUBfd6J6QrSn9p",
  "key24": "5f2TZFppasHgradSrKThBakz3f9n9N2UP4V3EtqAQzW9LrjUBhhruzzZWHxyFE84rfXCJ57XskfTr8hbayziL2v9",
  "key25": "SXFUSmMLFdpaoZtjDx15Pef8xwxBeVvvYc3tXof7ChVRBv7FrmuNfqgwVf6dhK8vBEFyh4UgWPj7W82nWaszebY",
  "key26": "4dC39c23og3BUPiphDdziyNzeNaaYqDYk5HhpcxsA9oVk536jteZM2QXnkRy9U9wLf82nmjji1xrgsyp5CvuG56d",
  "key27": "4knRZWjTV7RQr6ZT9MbF5VWrFxaEaZTgcvG5ptuwS3Vu7w81Xz6yqqDPPQUzoFpcoxovDukQeE593N6JH1JFyhSY",
  "key28": "4WxNMjVVJWWkWuxcm2D5aa4da4VxgvLMCcbmbdt2EKFt9g8BprDQAm7oLFLegd2UBreDdPfUMYRqRzpT9wToyW6",
  "key29": "bgpNDusfxJ4hr93Kh1hETS2t4hGudivpyWdydhLpsJsV2XVuzsxPi3jTsk3xFcCaXoHQ33x4RSFs9pZdf1MGXuK",
  "key30": "3iL2y7LT2u4Ry3ZScLHtpESMWLFsteBWDnW6kZ8nhZUUSUgehUeWsk6y87RrmvB6AHxV2NUUDoSxDwcpE8qSSKRQ",
  "key31": "4CFnWzzrhCRRS2QP3FZ4G5UZNoZghbSQZsvopaVemR6g2QSLwg1euypZyjUDqwLuRUnnJwq12PPuZg9R7ZENVy8J",
  "key32": "47BzGtJN4gX4mp6fdYDVcWzUoE5XsdL7xqvjd5e5SMpyrqub1XjmmuUmsmDTLXGpwKoUeQwZAxvGwdFKyJzCkC61",
  "key33": "2XKMScNHCr9sg1xgrkiqKbYpVsoU6Rx9j4DeC2yHMKrsPeqEBoSimz3mRwT9LJwEYu1aKNFr5gPvtNaAC5mykyRk",
  "key34": "3Hn7hcPa6oSSUmJwbUbzvL1mjMsUht3uRWLtDJo1t4CMFh2uFueuhssFQgkv9NbHD5UnzY38RHtdpEdKTnFMKRVC",
  "key35": "4xXAfsr4jtA4pjvdj52c2ySeJu1XsHySs7e12iJz4RvFRRcBkCYYDNYk2YLnnay4cvWKTR1VU5ZgnHvzMjujWGZ2",
  "key36": "5AE9nFL7N4D5FyxoezzryLexzNqbZo5uVY2vXmTcNLrzm8T2CCuawyptq1c4GDsrfdSxKzSmFzpPW3D1QMqdhNis"
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
