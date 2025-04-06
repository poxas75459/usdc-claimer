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
    "3tnFriHUixePQHZhvwFUozzWrxVNFRRETp1mud1u5PfhxkabFMytwtmYguA3TL4Q5Es7QFwyWnxJ2q6oWknB3CE1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZVHgFcdEFPVEMoZevHKg1TQvd3xDDX6yZYfS34kG6uBHg18NbqSdHNV91ZZgZ4WKvxHccBjnYNXX6pekCrg8ZtT",
  "key1": "64jTKbToxnr12Wycwni8aMwYnpVPQ4huQfVSPoMc5tMD3WG15nfYczHCF2vcbKxmgmdyGYhk9mTezQagvPukzX5D",
  "key2": "5JHBobZTpfidkZ8hwd7HY7wyj3R9YZPgUBZ681XJYKiao7jjbCRfAQioC9rDYfXTD4jB561U4DZmWHLFsEDSNAGT",
  "key3": "5URWVMERYCjCayp2T3dbwrtiHBXp6HAW7xED9YZTb7eqFopnbHKZJxRU4hm7zo6p7LmPYaxouuxU9eNnZrRgh1Xc",
  "key4": "4CPaCk1oxjpzkGXGzkcN2KzSyQnhknhtjML99roPBGuHNeeHFSnUM5oQqMsXpjo3kzR448bLFDt1rcZcvfVYu3vf",
  "key5": "3x8dLKtphuFHQqHuc3S6L6cmBMnJ5Ct7SrsRuShxeCtZEFj5Rz1XipfrE2aWDUZux99CzQN5cne1QRqbwFLpnFcK",
  "key6": "46QFAdRpPBss6ogf2puXMKkZrK8MVqah2eUdBJKNCEwj4XHRFJmTEYrpaLhd7gCMDFmbJ44XhK9zDrUNkDivjm7V",
  "key7": "LfA1Nmbpuhvq24odMZcvgJiGsv6gi2F73CnLSn52QZkwZouhm7GNPTvpyPvVkcskZK7wnMLMGkjiG34UiEpHXiq",
  "key8": "625cSpfgFTwQ8vFVoAbbYBuPbAR9Dw9BNi6QdMU1fdEkNJKyeN6bCQMScRk5SpeXyjRUVsx9FcecfAwYWzyAKfzy",
  "key9": "3zi4ZdtPhozUZymmk34RKP31LUkZ7VihaWFDrwH9EnyTWq9cAi6KQ1N4UAXuX51W28wgCo4H3fX2NTwDrzxLzU2t",
  "key10": "4RxkF5x9y5kJ63WSDBpbnK6UQfUQQLKPEkWfYKX78VFCRbc9DV9Voc4dEkypVxEQc1DmSH5K3HpFyPVRqm5k7qUz",
  "key11": "3zSStSRsSMF65rqRuuGmtuif7DPnNVu5JCXjLBpLSHcLFGj75Lh6gcHqxZDaefYGLHZ1weG5yvJt2faCxnzud1A9",
  "key12": "3LxTxHGRZB5J3Rckc5Ji1kH57BjwVs8UMZb4FqGhfsSG9n6H3n6nhtYRVqC64XrL8EaUpNLGopXqQuupFjjeCxyh",
  "key13": "4E48QYgb7ptxLEVtT78ipFh5QwDygdQRxJHXvhoywgNRtb7VkWD1KBFkS3SFKZJXGGPhPUFaDTZrG9snaUupLptD",
  "key14": "6B5SL3EBVaX8RGaecC1P8B1WGFJsVmFLUQcK7pjD2jZ3Uv6WjR62h7NvaihDBf2RYvtgQp9jGRyWK6t85RNHAdQ",
  "key15": "37EUhspQdP4GnuDr4ygRmfvXZvYpkaZoNrDkkAtq1LvNdNvbyJSiohaD3qDhmnAj2qN1ohAMH7nT2wR89TK3iuVr",
  "key16": "K61h3JuKd2hF71WtNNLNnNfAH3yjJBQ6ofqnZvjjq95nenyXkHqumY1pmkjdXUqyYs5Ef4gHtjqVxbWawgkH8xn",
  "key17": "4G3dfDcsQso84HDyRKoLgvsfR8XfFdjMHHm7Dh2uxFdnAafYQoSxTUiZDw6W4QSqZPCPVnmSYYb5Em96p8buDguQ",
  "key18": "2RtMGNBnCVU6xx44ABWNGKxHxut12j7sFBKp815j35JuMuzGysZ4duPnMJzx2Fc7gksVvw2sEGvuZ8Fc3JUiWF1u",
  "key19": "5LariiyFxaynweWXuv4YqHC5ygvEAkMTLjKGYRgAgrC6DqDNugSizuMk5St3fQ1rPspHzgprPtoqWhNpoGgZNep5",
  "key20": "Vy4kYnMpiVdHXsZRwGeQNnMje82FbNRmAfCNaiB9rni2QrXG5BiwS8jBGfxCa8aeMo7TMqZLqnLt5jyi79dFNE5",
  "key21": "3vQaHURNBRY4m9MN6QxQLhMxBAte9nXqYoNpLVSXFjc5CqUTrruHB8Qn25RnyXuAV9VePp4CPWJijD4uZLGZw6dq",
  "key22": "3KAooK1T6MPCg34mdjZ28JwnMzSHQcacfrBh2KQV9hssJKDevUSpSgrqjAdy3guAcLzFyJk7QxUVeRQQwhSoKG8W",
  "key23": "523kESYjcxJ122DRRdNwAGuYNo849AzKhVC4BUG9vvRqgzvmbtgT186RFd6ughrB4z1UtiMNLwQq4X4iRqFcebp2",
  "key24": "DC5GMU17twPn7o4EpBgbrvWrXoQrScEy4R7YjNJqJA79JJBRsNznS8Efpw1ay6DwTNuFp86Wj3DEEDGV1abo1Qu",
  "key25": "33W94H2SJPR7FrGxLYtHFFbrEFUWaXsuQJ7Zyoz3gii6tDrEwbkX8LrfP2R4MYoFEjuPJvrBmVyL8twRqEg84Apk",
  "key26": "2BgTgq4Kpq3NFySEz34Ydz1s3A7z5sN45Xkz5r1V7xuSQrYU9c6KGwQHzJiCtXret4PN7zwvNHdfRaPMMhDiD6Mw",
  "key27": "27XHGf7NyMvkq1wuP7gsoXaAMVZVceL7zHckaoSjZcNvkWpMogmHhTvsFydh7QsQWCQxHojkCWehEt4BYanefZ1n",
  "key28": "SKVhkiou5zwweQzdx4CJuLQsAGwpfSwi1ViELreaNDA9VDB1bdm3HCAWWgY7XfhXRHvU5fvMr1Kh3qXUbfzCsjE",
  "key29": "2s1VXk68DNmum1xUAZZcsU7YUVqCGTWM79BVmBnkQaUGUVnYAfroSh7Nurqfp6dRpsMVYjVf8EzRZxXHSWpDJ1YM",
  "key30": "5gqpnAJCjTuyrFVSUsan1SH1DTL3KZmU1kJVLvhEk246SLuAgv4SVyVqhAfHjMJhu1h8EaGYvZ7AMjH2RPUFZNa6",
  "key31": "4v1gpfHsqKXJSEooTbsw1xf9inDsZk8p8WSoFLk5CVLo9Sm6Rxh4kFuQtzYqt4FTsVDwvoNUyDEqvzDgrPwYRZfc",
  "key32": "CWSud7dLaNsbddhij16qPKo8dgtn2Jw4tyrjEWEoyjfxGr9LXkccnhxHbiU9mHXm6Pt9TepdvrZNm2BaqNDBqsJ",
  "key33": "gbi1Ze1eYpBXBWwTYChFP3EU8yfowGuwwQmxaUMh6CEZHKb5HidigrrUqcgHBa5CravJny9S1cXuJpcZyVZ3J4W",
  "key34": "611NxnnZ5Tk6GT8Ba4Qq7fuGg9QXK58HqFHCz4xk7WbCELhLvv1iKChymUSgCaxpWgu75CvEuBrYQX2U9es6Sxvz",
  "key35": "3zFdoXqgRsBCauRWMB8G22DGtBeLV4ciyKArLp8pU4wQ6Wgbxwmqy87LK3TP79yZkPWgFaAjJ997qo3hvRNvmsek",
  "key36": "5DMTeYhnGu8Wvfqi1xvqKHT3zWXkaPNNNGH8tmzBB7kFtrfAZEuATpsQxZh9QExhpTtXi5v8o5tERdxMoMc9zEzL",
  "key37": "iU6YNytZwqfFxFceV4QgpjGLanPSfWpuT75thvMHYZhAQLA5mZnSxgw7eBRPegF93xKwyJnYFCtqUfiQBBR9ZGA",
  "key38": "4JCe8a16uwoFSADMvudEnvhYupNH3fCym6Wr1rY8pyaqq7c8Cp4RDKfHWLM6TKn65YjXQHMDfDyTZ4dsweHWnaWk",
  "key39": "439omXYvLzMCPb5yTrKZS2woqD5y6TfbqitMdacG2qhjFHp6sygo71gkqFbY95YaRM1PRzJCdpzKnmmUaaepb5eS",
  "key40": "4HmytCNWm8oUfMzAvkULfmVzBrpYaYjdzMTeH3gTSBt93GW8z4nvDkTxExghS6mckcH9QZuTSCebsGH7gNgEbaRk",
  "key41": "5P72PH57VVRvrAZoTkRe6utQbgecTLyYYo3qvvhmtks2nufzUXKWM1ADxnR2ZrKJo4BSyLB2H8XkdsRmT82m2eq5"
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
