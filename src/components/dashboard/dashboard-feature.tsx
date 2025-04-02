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
    "4UCntBrqbz8qKACEEXxwcuir1itK5SkKSvNjpv2ZYbnAnKrE7yCZAPpPXuYmFVzy3oqpZXq8Px137NYd1BvkUyAp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3thN7UWEupwhmkoU2W5HNDWsRhtTK4vmnyyeCCnDBSN2zKoR4NBZRcbgsVCDx6GYUmehzkkQoyjZA6nSZ4opFb28",
  "key1": "57W1Wmv2qvdgG4sEsQqHqcm3FhyjdSKQvA6zwKstU3NCyWdeHYEuiBApgPn9yWdGkqyypQfzUNBXsy876xbrT54a",
  "key2": "4LNNUqmnuRWstUi4bYPDEeKzvkvyGEXjWp65BdQF3RiQSya59z8aiSvkWggTsj7s8DhNBmh7YQyYqpaVGDSWqxfF",
  "key3": "5AAwxuKwAvuwoTYVQAwcDeTFxMDTpCpiJmATHgXaXBKYn9Lx8YTL35md355wt2LvTZ6p3YhXu5fCoyRgxaZbinmP",
  "key4": "2VL42mTywvPKZbsSdDE5RtJcNPwmCfEDQ9oyo1Vm9LuiZsE1JCkk3hV8XGvicuBmL1xCAQw8hCES2FvJ1ZZsidQi",
  "key5": "2xtACoXaHr9uwg62nEGFHdC1EzXztkEkhbkModUobwvWTxHV9XaAbZzFd4Xi7cdVgmrJJRyMoC2BV7gcTkwodRHk",
  "key6": "5yJ5viDnf9dC2gcSLg9KnA5Z3cck3zAbwwHnguTGt6TqdUTCk6FZjdPhHx6x9sHhVJpygAXhwPzvY66nYSyXxVYN",
  "key7": "4iLbmJhUJ3xS1AL2b3YKS9pKLh8gveCRyCrLA2o751aiEg8hb1AMHoTsoQB8myCeLanidCsXiyfiboXkEyWZRvXv",
  "key8": "4vx6raSxc7JXjato3HMHGhTY1bnjmy2h14SmU9TbuT7CBwafFUXG1tiwpe5kQp3FJpBchFqw55Dm6vLvLDtcZZMm",
  "key9": "4FUeevnKvQKMZH3SU6Phd3A9efu6oj7hZ4EyPd3fAPyGMU7Yy4wRF2T3CefMZHzvH66PyX3mDo3XzUzMH3YEXSnL",
  "key10": "3rbrSXPznNRCx17FNf96W4uyB7Knrt7J9GkucdFTjMQhY32UJBAxJQ7cgaqV1YTN12Gj3dHHbfdyfXyuGQJqWify",
  "key11": "5KkdFmZHDTe5454tnoSCz1JyeaYnMGtmPWRAbLFFfwaiXVYkbM9c2GnqmizVpoZquZ1ArTreGpM5rnwRJWwG5R7j",
  "key12": "3ghNsYoitnkXDA3SWvsbcEayTqoXGifXPZDZuPXnzcfCNy7UqcTsS3d7kTZn7zAiwveDKTmu3n8npYmc1SZ2Ka1M",
  "key13": "4r4SbKH2C9HrUKLQLqRJ3hG72WxhF4NJbSSitZGe71bRGv3Xy2MxEsAV6KVKSXzxVcQn6iixjC9GCaeM2fNXQqWZ",
  "key14": "4TfJyxmZHhgiShjxrvACMcPXHmrhU1kxmBCYDaSqDZx4EVYJDjUu7Hi7vFxgTgYfHSPA2ASzn94KQfzUSt9s5QwX",
  "key15": "4AZemSt8HipctEU6FyKrfdc4REkwvijTXUBYwAEpgMSubSBgCpJzZfifaK1UHZE35GfosDvupYDk9NH1CuU3wNMz",
  "key16": "2RCpQMwEL5bKk6tTb6nnakitYxz27HubMy21aEUBcLKp4vVQ3jJjsZGkCvHSsiMQGYrrz3p6AQkbHG2VtDjHPWfh",
  "key17": "62DjQzgWUpKp7ZNTCWYrBfFDPzvdSVDm51NxbDhQuMTApJMxtawrVioHBuXo15SZFLjVeyjy9APAHZ5NYsue16bp",
  "key18": "5Pvs37iMANyxVa39KP6sA9PWwS6zxsVDFd61Wu9ZtGw9siQrX3pRoo1fgGuFhu5pQEx4C1m6R1ZE8SYCiHuxx1HD",
  "key19": "5Dc241t7Q44sTXEnFg7gM1LT79hwWUmDQh8gLmL8BYZtZeSXus6UpYzjvFq7Twzi8Gx9dgJJunZ9DWhZdZDCVr2y",
  "key20": "LqDxnA4Nc5Giaf6E6x1eZnCH8iDWCcaxgrDeibd7z5MxEhAyVy1GVacV85Xr7DtQC2cRhMav1xwjL8dMbZo6Xap",
  "key21": "4F3XHasCYsTjcjS9PgXDcubTiJ6S3bbCHXDjsEATQJuzeQQ1DTbvwwR4erF6yXKTUBNvRjVYzGoovzGN2yaYhUnU",
  "key22": "hcT8PqHfaitxwwQHPJgBSgPrDt6KYRSDMdjkpKwTx6NV65Bb3Nz8FrPwQfbPS89hxKrJjieP7WXzBWrNRWU8KuP",
  "key23": "3BfSDUgEpw1pgz4c3xarS5mzfuPNEygvwnQYM8EjKw93QEp4AJCrWcJgkWRh3rvK87k2fgFZe7CvRZRHvkv1vVo5",
  "key24": "2UZndjQtSoz65WEZ3oSd4qk5VLL9GpFpAqxn8HQFe8UpRdzn46LUUUGuYmNWRZhQuvNHrFDNAJDanQUgpXZwVBoL",
  "key25": "5hx2nKRPHCwZYGm4vc7QeGLKxwSdCTmGyB5hVm5ecG5F2whkXxeiyZZnXoxo5ViiUm9sJxNuk3XpuUGE5X8ibyA1",
  "key26": "3LQziSkPBj8MJKRvGH92KD2hynS6pnD1747mq2Rw6XgAzBjRL2J73hegifPHN4bonafgpC2EvP59turjeeKg1hRQ",
  "key27": "3PZSaG3CSwVDCVPKY7pN3iMUPwDy1RfvqoEuWj6JA5e3cN2AFxAFowaLAx1wUdsFXRQa3BhVu2DMeKU4S7PTXwqb",
  "key28": "Ef2iVW2a8cPRSy5eVXDJ2agVWX1n6zt2YoPXivtccVsdKsr5iuaTLnvu5N9ZmriixwX51xbWbXvqkS8eAxNBtPg",
  "key29": "27qkGKyRXDDLuT31p5rBzNYruedR8Wx6cqza2VTtjtLHJmuwU3JDJiaPyhuhULCCXUPBNEmWeSR8w7GV18Fh9f1b",
  "key30": "tZ41WCHcybhJHsQjNWiLMc3KXFoRGwX3nH8z9SCF96Ux9Wi549aJybeqLuouL6XMvMqZgANWnwKWF15sagNnw3f",
  "key31": "5Ghp2iaQxFyu1x4cA2pqQGCf2KQFvqG8QVaCn7wHfvb1H8KYCdPQ79m1fxP6tTZEaKspP6xZXiwKaTPAsKhztvMN",
  "key32": "5H8QXQSmKoTaq9Fj4baNRixqWANtnfMVBahB4kDEKA6XJDj79M3fiuxPsWzQzjE91Ku4DzKr4JURGF38dqz2nuMs",
  "key33": "4CH3BmQWekSVRDC6qXLdzmAPonAJdCtjqgcxB75oQGRewTUfxyEGJgFS3VwN8WsJvoyvmQBmXZnPEFW6GPQrqKSz",
  "key34": "3ovwkqt7cSUtxxiqTwbX682ZHLjcWPTK6GxbeEZGCjGLquxmouwWR2zSZKRjBqoJveGKNBQVMTdA7mwJmXVvikXW",
  "key35": "5pAgQrjjg1eJx1MNJ1QW1MNvLjXH4gmubwE15uTU7ELPgHx3JLrdUy2d2n3xEk8cy9GWupDXetQL7A3r7Dv9v8Lp",
  "key36": "H8QetsohDv3uNabhKpjL1LaWXgrUvs8EHuXd2eogr7g5aacQobt1czz2EXgEdnKMSME1Hg5bT2pptKBjvVeSMEx",
  "key37": "23nWYTSBjat4MczvWZ3AvZkQ7FLitMbu7mpEuVHKTC2RPpD4uPauFgsssdNY728Gnw9R7i5tN6Zjksct7FNg1uuy",
  "key38": "4mykY9BsotLZTuKNwc4Hv3gmfjtkZCUVzF5gbQugo576nW2DGTFpwbs7mJPTFLAcayM5zFe27m2SC3AN4e45LBHC",
  "key39": "3Cir3wLgjF8nTPwJH35AzXRAvHJCexuBiLuVEJYUE9FDrWAkB7GKYTNNqkkWuCWuhkomabNh9K6FyrmWinsf3cDe",
  "key40": "23oo6yNowkVeyPH8DwkgWs1pAQAs2AiX8g9t19QYhFYe6gp74QhxwksQfJ1kgcJguvgwqEH5BAd7noPPSyqgaiG9",
  "key41": "5YpBJdkpVHiyt11a6GmF4UCXWmtME5tNihKTHvEoy4EZwAhpAEeM4AkwiVmCLJDG9z1aSNVjeNb1WXd6HTb4KVCn",
  "key42": "3D2dZSd5tq7iVbi88QZczgkw6xZtEHQomg3WhtN6zzYQ4FuFt1K49JEL6BggMo23zQK8cTkeE8E9zREkVjBLwjWo",
  "key43": "66F4RsvBhVC1c4hjNLgZqx69MKeDyMsSFLGnMRGSs9M9RcH1QKScG6GiibWEVkzYKNaM4TzP4UoLVemk5R9b23Jo",
  "key44": "4KvZ9jbs2sBfLTcHct2dwAPK41hkADexVPPFhrzzK1WRQWYppZKbLGaa6a7NxQGAykq7dmBTXdcZm5eKVVzM9YD4",
  "key45": "3RHBSAV98Qepynb7RAyazoh6A3Ua9HeLJZFNvnWBqo3H3oma4jo6Ee8AxPje7idJW46u8vT81T96zu5oQzZfp6L"
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
