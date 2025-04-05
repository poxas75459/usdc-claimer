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
    "AK8AJurDcsPufknoNJniAJEruHDH93ozWsahoHwpYF5ESYCMBJUwrm1NuTyKYARTjhAxmt79LUPeKz6FqHYYmer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29FcCYDVWTummXvJGM3LFzCkbM1NKKWp2QefytkACeceEMeGsXwkycnwG1tny7xXaVWFfNPREpfurS9s8TvmuztQ",
  "key1": "4BXixX6gLX6kVqxwKAG7thar5RZ4ZWcvsic9nYD9GHz3pmpTo4ym9kt1rrmPeBiugEr6MHpgRVRXaWhn4rM84tgu",
  "key2": "44ys9SHCiX8XPYCxgaPvT2teJHBS1FJbcKWpovw5PsNowm5YdMnnBTx2H82bute8YQwxW2wGQ6KivTivi6Mtzexk",
  "key3": "AxrKWg62BNTMjzScVpGiQwngJv7k63fxNPvBbesnyw7PbUG7LbybzScBHzL6C4BQK3icfJPDdYR1jT9ZA3HX7Vn",
  "key4": "dxPerqsCyVxk1Kb71HxBN9rv9poFXQoNCvR9eMcAwBDKvn9BbeMXMpNMMfcDvDChJsYcTv8yqhHRWDz8fAyDNNr",
  "key5": "4RLYCEdtLbS4GN7u5BYxjbhG1uevxVL7owvbRTp5RK3a8CzZ4MWYKQL2xFPWnrH2RgmsvDaujpbzjaBfrCdVHWic",
  "key6": "5sQBjBKerLv3HAvdUQ1s3C4VwaG7nEcKvQygGozkhsPXBqk9D4rR9ReW19X7SmsAonvgW27nbrWnSY31wTGs4GLm",
  "key7": "4ca1rX38wdNawAerpuffVNhu6jmAypkfFCZ3QYNaqnQcGTDpnupBrDZHgDEwwJyFSitoFbUXfpmPJP1DfrU2yQZk",
  "key8": "UbmbB6862Q9snM88obiuD9NGAa9jJhr1st3ywUoesKY6J8aXfWRo3YxnfXiWSg5N1CikBuoQzrvqonwJU2Brhr2",
  "key9": "3KCpQh3bVVuPbMqFKdHEPhZ932Wb2ZzdgiFSnuC5DnDu9ZHQH4RqF1oVMTApHm1KcJMNbqerKFQeUri3zMFzZbeR",
  "key10": "4xxCAbz1GQshFmRLPFa6bRYGpqCqAeTYnPbiCeesuK9P7W9nMUZ6kM4NwzpT7u9UmaueWyagyFm1mJrjbjj3nn2S",
  "key11": "4REL39PpdwQQ5mTrtH3aLjuYUSbp9gKHLfZiN6CtfznMegKZYZmqnN7HtBnwu5Twt4J25GLYmVCkauYkFamXDigk",
  "key12": "GACtQV4otLQNaFhC8bzNCb9CRtkwmRU3ap63b3zq7PYtWJKjkDUNpAqqStzwmiYMxkX83awpGafchFET4CodPo2",
  "key13": "25vZNAdjtdgA2ppNZitgxfGZRHZ38X9LdGbYnMitv4J2HZHy2zaZSnbwnmHRsE5hi5R61dwXHRHHWTBhgMghWTyk",
  "key14": "4DxjUf5B2ZH5LaNkj6XgRGyhyQCrRj55JoaLKqTEK4Zy7PWZjXUhvAvDLsmSRxgQkVkbDiDigsKFZeBET2WpQAVe",
  "key15": "4XwXPfDUmEX4MovCMG4rhCNHkEaB9H4JioEDanNANeRKEoyJkKZ1rEUWTyztRZQNvoS6cJPR5RrLZ77wpmQBxHdr",
  "key16": "56z6dAqEhNM6LfvRiN1FbjQcqFrkr6tXA8THDTrt9smKshbpk6VLfxjNDVVGquerNgtdo1ZtznvrUQRV5kSPhJao",
  "key17": "h3ap2yjDTcZUBmDajFKykJbd7PXGpPQa62EnKX39bkuunCUq9XD5ikRFYhF3AGaXsSCBo5P6zJpU6uVSDiUpm6n",
  "key18": "4yNe3gFiJA7NRkzWjKqphFou2h3871LrSCgybLMmsauX9EiXR7F8SvoPRFbgbVo2eww7bS9GbDuTsMSx1BGNkYfj",
  "key19": "2rNX9UU1dj6ErFyL53QwhVhw6LYCYcBpKrj8TzVfuxFSK84iG68siiWnd8TsLr42qN9GF3qk3932aumDgLs5rJBL",
  "key20": "35D4vMNVSSVwKT71JreRtyq7uN1WGfsztaBjGDq9EH6M7zaVryQyw81z8xBuTCWGZ9AhjMMvxxNUvuqW81kGnTLj",
  "key21": "2m3XUPrLKiZA53m7SqN38BJbWsZeV7bjsqVGc31ZK9ZviLuJswEX53792YqcttpfgY1aWizqzdKfHgaRa7aR23KX",
  "key22": "2c2MR7GxjJ27QZPPQPfBaXi6Pep7NSXmv7TJgcPyHhLYiuiqwZ3DedjUqNwBoEcdsN7EzibppBqV3wwLz8eakWLT",
  "key23": "3pzCN17epEhNZhJitiMpdz3wKAg5KSGZtwijR6jgotYDU2ncUHBVMkpNzLjnC2gA1vTB6jj2PurCrUY9xShydNy4",
  "key24": "n6eLHskcggioE8685DFw9L66yPGUU91AbSjPccbKo5yNiHkYuCUiwpTSFsWgcmTziuKeHgsbAScg94uQTWyfGKr",
  "key25": "3pPCWU9z5fyhZnjVmhYSxMQFmEDvekkgNSCUAyV4LejQYV9RiRYa3Yf8YgmuhBjV1vTBoY7YiZKzrLdWKtTdocrN",
  "key26": "67JSaQmqgHjdpMaSaPDSfehumn9QMtkqsFykhf79HZtc425SZrWotE5r1FC55QCGc7xkF5xf66f1cC8mYEWPzCd4",
  "key27": "41ZPEqMWThvxmsnZo5fzJxf4kTscAwAcv7e1EbMKNYCsWmGLAQ62RjSmiykaH3UWjt7FPshxqURUzYitbWnRLYj2",
  "key28": "3dB4uauZhmohYNRa526m1rQm2v2dnyG8ET22aay8FAME6iD1sghSgAL9FY5Y4eC3byvh7x6vRppubiZniepPxxgQ",
  "key29": "pemf251hPjsntopYtNTwioqdsLjBemZQskgspkK6s8p64u7DX6gvEVFPTWRM29Y8Fd6CCvevmJP1pLu7ForA4fW",
  "key30": "56CtynRaEjQkKgZ8SJRKEhrZdj28dbgSpgwWtkomirrF6jwbYZDEGzuHbn1ERLyhz2uCAcgsTikw8Xx4v8DhMEVG",
  "key31": "2h4np3JCRJhXk7FP9q72MjF6thzsi9ZLcJNbwAayiePh5qBkwz3y8zEupvTuktsaxijMmMbNJemC6ZA7FJwTdoN2",
  "key32": "63PQg8fcnKTdvfT4GQAPHbHmYgWkdAWyjsqAi6e8BNZxadPEdLQnrtksXtwPCbBQVzuGJ94TJDkcAHVZid2oHFtA",
  "key33": "3mu2eVP4iTj6mwZHx3nj9jcRzwAUKfdJvJkevQZ11ka2msxJXBSN5JSoTuVLUEks6u11iTxJS5Gj2WxaaztV34wM",
  "key34": "5YGR3J3AEQPiKsw1owEG2eoUaRD6WUXnxvGeQRTbEQVke2a6di6mFVT4VnJKbM8unLcH5nADJWezc4eK5FHvz1iM"
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
