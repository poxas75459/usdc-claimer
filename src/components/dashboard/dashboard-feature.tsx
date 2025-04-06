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
    "58FBNw8hn5TdRn59cZErA96BxAxASTiktmmkBKVPgPy91NTvNYFE2rzptMPgMn6LFhcLJyQUHnNMqScAuh5916Qw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xVzkDkHWFQezvxbbVm5jkV8NgEfwWot6h1pa9uKCajoXtKUv5aynceRVN8FTgp2a5AtxLHUJyYnBtBChC4xGaXB",
  "key1": "3KZYTRHmRLLJkZwyKznw3PrSDCGLn2NSzs8adz7x4iYzPVjbk7Hvr4zbwcP9VecPXbErux9JvExAcL8M3xr2Zyew",
  "key2": "fTL9nWvDPSBt1V1EQNm71xVRRy6WMjUPZE6pvkdromm64aQiEJSme6bmgrYXxhwm8X94Ksu6rsHZNP5SwL6kNYV",
  "key3": "2YME42QQHm4iSa7EV1bdnhUT6gnnTq9hivS4NZCbuny4atqTCg6oJmFdoJC8FqwRURGgSwMrrkmd1juZC3ZJynmr",
  "key4": "3cMFtLSRRyM8Hj62kyGXcLz5PuMeRbqiTTygCDctNvbE9yrMVcQ6guGxaUGA3nea2EuDqCSNgXmHxkbwdcEeA6Zy",
  "key5": "3eDPMRxkYwWSkP8NFSkcDakyZhsCWuBkpjBPsqG1gbpPNztKsrgSXn18XeMnEHp31edDS8kMEx11HgEr23Lpvfq3",
  "key6": "2Z1p1U1fU7UHpKbhAbZFHzvUg833yN4y1x8ZFM6NGAC5Nn5MA4NFZkd3DuNaXYEzUHif6PRyBMkao4C1QuNxk89r",
  "key7": "2geun538xhe5ppf8RfG5smPGCeZfZs9FZqQMeJmsYsWh3WtBKGUnmSxk6c6xq3AEUkQwfyThxQ3fLwPxm7t6GiSr",
  "key8": "aY3AuQ2axirePfyLEjzErintB6jfAScihvBF4UzNZYHapBL4RyG4UyDo1PDogz4fshnEJ6CHFRhZNPFBd5rXLMJ",
  "key9": "DDPaRgwuQhzTAZMNKYtpHYSFNwBifCfHQ1uGQQJkb75CzpapJjVTxDMAuJvCJKKo8tcdpH9kqFyUvSrqRPiTRv6",
  "key10": "2HNuGovmkra2GPVRCLEVac8izYVyy1neZSe7wpQFfUdnt54aLkCArsEvf2oKEaPdAhhg8KEtgk79DiTvHtF1KhgG",
  "key11": "5vYeQiLYrQMr8FhowW4JvwVN8bnJ3LMWbvfqmpZfKSSu3jzr5S4PBdXRzx9Xz1qnAVFs51kRKjkfGxKhSi76kAg4",
  "key12": "TCeJxHmCs6c6xiJXsiRXAnhq677xBxE3ftcWv8mdgTKqnNqDmKM9KzZWeuYGYAC7FF3G5ZtynpNVXBT9yEZVnFj",
  "key13": "39aLE5u878zjYc5x3AsGcpBPSD5ZpFEbNLDZmE5MF4NYHmr6PjcxHBoH7EoJYeDBha9wRBksPFXpaYVUvSDT5YM2",
  "key14": "3rf1QvTfXec5y79VJxPRPe6ps7d1SibAhwAXd9UocEV2oNFKjsUmKYtKEoGRG8pnrY2WrHzffSfKBHfasRsPaJin",
  "key15": "5sAppKRjboWKDQY2opDGxPVLunK2Ra3RLdgzZwp2VkbQRZthfSWiMdZ1knEwGNpKp2ezbGNoSSuNLPNBQRhbNMiV",
  "key16": "4hvPoz7tSPYkvgptdMk9pLBxVXHBTmPPy8e6Ytd1KKT7NHu2MnFZ1uofjWgjbFbSwLDyWVL19fdeJqASWaxGyzqD",
  "key17": "npKKFGUUKn9u8pmhEZ8HBphTeukT7gM1v9buSrDGXP8AAHxXK5SzNB3RXUqgRkwrsnMXn8CMhxAUJbfsHsZM1wf",
  "key18": "4Y17ee47aXskK2UyabQjFXQjXGmZ6DdtSMTqTazrznPbBMoa85XxKNeW1VEKcettEQ1oRWE2B8V9B5D6a4xYEhen",
  "key19": "2x2CsXYBJwP9pbeT2AdhoC5dpXKxfPWrBvM3C44rayVzV7SLfJqMcHyPZKHDULxVwDWCmwzWgHREHfsz9fC32g9o",
  "key20": "4QyCZY77K79eBmjooWPWNoSoSQM4RdNbHcMzGzgCefcVfp1GnQ9QJQxwybKStJ5hmSsvBRo11Q8kJicxMMbsKMjJ",
  "key21": "2TvTXxYJhFvdKQrjyT3sGoBZ6K92tDXZW24dPd9kvUDy3mMn4mHgS2P638cGp5gUiHjCHDhx433ACCy7V9DkZ6rz",
  "key22": "36AeSEGPMwaon9ffY3pov4Zjdc9qgFZSevNPbnFz3s3fcsc13f9TeTUyzRkstu67aavjoJvyNQVo3ahRoxziDuu6",
  "key23": "62jUhwrEHttw4RvEwPsCRgJp6afE5w342DpA5t1u5xVaimvxzQFr1vvC3p7R5pUnJ8rhGzRreLKipcQGrGX1npHQ",
  "key24": "vidbzDVncH74MUTRgXfJzYhXzvQRrhzJB6pNeLnvgptohRVJgwvTVBrYFpKFb3DWYuAqnZxeg7xavjbcCZaBe9y",
  "key25": "3hzd42ZT7fomVQTXb5AAb5TFfw5QXXkdh7m2g7NZgrLV3RbjxiquP3Hznh7Qz7EMqA16CHmCg1ZUndomHWLaRgZP",
  "key26": "3su7dPxAzwYJHf4zn9YGK1M6zNzBTENHGWaFspXERdPLA8PiwnnZ1qRV5zhFvX2TDoepHXSo3C8qXPFtX77vW4mj",
  "key27": "3L3zGHLMeUbqb8UPewC1SZVJjygVA1TJijxYoFt8ukv1Rwy3KxKrsFr1FsTHnojhMhpPxZ2tyR1fr2hGwkHeqxTZ",
  "key28": "2TxU3VdJ73VCUD1VR8n8jfCupu3wVS5f3SgMzZgjdeH1UHiEYAtWhbiNCPXoM2KzSt4xn22aocuBmLkBt9jaekgY",
  "key29": "PXGMXaF3Smw1H4gCxr9SqQaMvQFpXiVfxWpDAvn3euNdtLaG8Lhhs1kPRHc7TQrAwQVCKdPSD1NDqLcQiwtHUvG",
  "key30": "9gNGnFA6uKBaTkVPU6x9y3aLMWWENR24bh7rg1U2gxNXVB9fba7WNTVGQHnbEcA7d3uuh81rtNbA1X1AuHtURY1",
  "key31": "5NP8dZxCSfT5rt8cF8AMRU1kH9PYbnNxfdnanX7Y2LbbpaVmvsiUB2sPmKGoeZtSjURTqwtifYdCxYpHSjSwxjoY",
  "key32": "2kFCWPL7AqNLRFzL2XA3uisT3Gwa14TbRS934AqSSP5EEaFyTZBS83NYsdYySobdKwQZyr5V8FoR61S2xdUwY3TH",
  "key33": "4EQ9kHbsqLoG2fgizBNwFbkFejM2ru91dDbfKZy3NcjpZTqX6rEyyBQKFnLTs2jj7iWE7wceo994rpTnPrse1Bd6",
  "key34": "2JjdyofPwGQm1HX2TZgq8ePVYJmwJZhE5Rnt1MkCG7xCpGWvZtiQ3ZgFZ12NXZL9j5waj8sPjyqY8pV8Fdj46jL6",
  "key35": "49wcyhcqX9sVqFiZRPnb9w2LhipTzhhKRBNEe1U1Y4iUtB8UBcRS6uzJbr9aASKGUCGBQMgG6GTkBTC2nxNiS5ie",
  "key36": "3oaEjThmukoCqk7RwwpqTd7YM7KotZr2aYuncRRMMgQkgM5Av75JsCboAtv4hkXhyLCYcgFuHbPqNCzwFi2No7mf",
  "key37": "533mEso3Tm9C4P7Bip1R8WR8FwBp5UpxmmxPrdWRzyeH1vf5S5wvEJaQZpeUUdUJpvnuqRqRjVDqYMdoviL7N1bJ",
  "key38": "3nQmy6rQUGFCtvmQWopWP8Ko5UvnegT1B9Qetos33sx3G1ZRPRemd9MdPfDZjTHYwkC22SQ19skqC52b7eHKDjPt",
  "key39": "3fVZNJFvbmrZgYTkyzsYMdat8TQLwXjppSfcsHbW5DvCR1BaXM2UYPyuSn2fgpjkAT6nhb9chMHoS55LyKGYzXjJ",
  "key40": "zNMWMwzeJpW3wQHcsLQ6vk5XhgKk7vhEvqS2469R3cBjtTx7U4AYQhRBTLKcKWMUWHiACkSxBCYRSPd8G6bH8wH",
  "key41": "2ihcgkzKn97eiyiFipmsAgdA9GxV175FFuaNnj2dAqcQxXK2aDz5Fs3gp8FLCSBdHcsggW9ZP6DccjEHdaTa8WXH",
  "key42": "zSvF1baFVYRL941AwNmn1QrvQEyNai9JfWgrxs1W1h7CRYwE7c6C2eS7YimStFksmDcHWrTLJSSs8GgaXZ1WF9Q",
  "key43": "3mCqXJPbJQagEJqnEokfAhS1FffCc9YHv2RmzWqEg6Tz4T5Qnm7VikPYFdWPz3Sg6aD98wY75zvEKBULbPy4aMNV",
  "key44": "2RRFvzLkMust1Z24iYrbsxmcCFPBVziQ96MqoS2GAjtWoJ5Ec12q8WhjG9wX7qP8rE7Shu6ZqLbK5UEJyjH66egc",
  "key45": "3J4pEw3VgKFASVVjMFpzx5GTX9Q8JNZiLEtD7QDFnCVE1dBMrctZvHqpwua3jh5VmUtkAtGH19nc1jjQtWczggFb",
  "key46": "29qknnhnvexznWyKM8gvEa2WCeMGCbAyWorGFwji6L59kgT7QZ7mwxSJoa5Hk1hc562PQn48FPSa64mSbYMFn8tG",
  "key47": "4jFbEuV2PDP3H6zyN7amjtqKpk2LcWcXFPa8DDxjyVEF5kvmwjJTeb5QBPKGPFFS52gPLTYiAbneR7b5adLpZd9t"
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
