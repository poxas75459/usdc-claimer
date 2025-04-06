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
    "5MEDGNZpL6AYas9sy455SL8cFubQGYBy29UuCmkyNv4ZxrrF4Y42F6jTpqGLxNMEiKPKPCNsATxganFjduMqz9N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53bMfrXPHUrvgo3sVLxPHpXeUGUoZoBuzKP4thhcgDsve2KjLWdguwwmcGogqFQooub9P9XivE1DWpU6FsaGQrM",
  "key1": "295BzUugmRwjhUEi94SwFDdUsh67SeJZzxUzuta1Du2c3fYi5XYtEwzRMv9nUEzVqxF8pc6EBSK4Au1zaF7b9VZf",
  "key2": "5TeSkFzDi4KR6osxwrGWDo7VRvAvqj2kc61jCTi6CnWgneNnYA7PaGqAPhnKKUA5jv4KQjFXEGdTZfFXE97uUVD5",
  "key3": "5dgWxz6L7YwyCZFjEca7Lh7aWCLzG17iVBmzD5Qf94sE9z9n6ut77wyAeQx241ayiRKTkjLX8r3L3Wd4kQyxJbg7",
  "key4": "5WqekMjJVF3JL1bkhzi3GpkaNafib99chFT5KQ936P6WAE1QGaV7DrbSNZGPC4hMP6qvZWsiqE1Skek4gM1TD9yX",
  "key5": "3ddediSGLGf2Jig1orbEiWuNSzyFuLYoKiG6D6c9oo34e6tQDEVg73h823V8aaYzXjq7gWrChVrgRkooYAgvC1rc",
  "key6": "4t1cEhH5mwGBJNzNiFjfmtFe8pWjrgPs6GfebvLCioSDntAd7WxXfGCDtYMQsY18BHdcaVE7NxPZiEnkT3gTGpQd",
  "key7": "2QHAEu9gJwQ2WpKmyzHsFCzx4EAzuQd8c25Ndtic9Hx86C5EECb1cb8PvpS6j9Abojj4s1ncCLW7rjgVyUDVSxsj",
  "key8": "2ZeNZW4pVPG7jXPtTdcwzSuA9XYdDhQtDrpQG5BRgMsb7YvXrCAaJYK6vfbQ2ED6A4H4mfMeENqyj1qiwpnR9qiU",
  "key9": "2g8RGcTQUwDBh8XsFpuYi2HzEmZNYvz2LkDb2CG29TU2WXnzbrkTKaq1bVbGdaP43rRwvt53m7XsST81HbB9i5pz",
  "key10": "4bcZqh13qYmMDx36Y7ttyj7dGsTvnNeemGfUWuzHUJjRUbcsBPR6i7jsEjGJnyYyHpQyhQgDkmyfmCVcqvwp9S2x",
  "key11": "3rTByQvAzvGQDVZEDd3rhLGqdeQLwHdMLsqyb28uMsq1yk3HvVtidGYMJhPeQVo5BXdofCzSMhrdPoRL5k7oHbNw",
  "key12": "2JNHB6kNBfd8n4xBhtXQQXXUcVgPVTdftvid12bMbii4CK8165yhCotYXQY68xfBcADtFqPgqNLN5N8ihgiBjP1C",
  "key13": "3Fc9cVKxW8MpBXSMT6ja951tn684FxriXnTxawGczJKoacfjivnEKk4ygAvZoxFzPhroLuYo4pKuEk4SLbszVj8U",
  "key14": "4CFiPyRxQ2jeEoQwPsWL8XsWPqQ5zfWAjqvF9hBRN29FCkg62iLVoR4NXziXNoQzwKbcu33quiwK83DHeMGnnHMS",
  "key15": "5R47WJvxbDC3tZz13SuLpUGFYLiTMvzX8Xy2bLsKietXm5y2BT2GFYaSDvCvbZr7HtDKB234KYA7uPmqwoMdeSnJ",
  "key16": "464FN9cEte81fbhCmYAUbPDMmFUs1zmzDRwqQJMqEpkENb9PKAtyKwswfLzKDZdn7yftvwP3r9zpBsBeHvaxC299",
  "key17": "5zbmKJoHAQni29sGCvaEk6eyMTt1piYvKKtzMZ8udfrKwWRc9vNwKK6viCFMkWUP4yg2DQEzkcp824PaphAt5Ewq",
  "key18": "5Raw8nLynj6HJVff7AHZrynadeZwThrawG4WbxXJ4njDxET16wrUhETGtXxEyKF5VVxZ1UhYoeGM2w2FAj41GDM8",
  "key19": "3e3f1ShUgK2de2JZbLziMoYMzP2cgYqQ2AtPvZQxRths3xLZRfnfVhjCDDqkGeCKCmtZMbBDrh3JnhpZNDdvmfnp",
  "key20": "nHXUuYsJzS1mHVMJsKy9gHRA9p9xxhavbCBDGtk3J7EBLS19Hdoz6Urm1WXn7o7wMPaNSXAmrXofy8mMP7QCgky",
  "key21": "3uii2rQJfioX1QHH8H6rqR2oY7uz31KtNSd2PyGDkh862quFN1M4ireT5TVmgJD2qX4cng3fzD6UqnH56m1LigVf",
  "key22": "3wxw8Nd96GUF92k6eVjmLuyTTJrmEbobJrErmjcr9pGcYBdbApYG23Z4qeg7DHATnWQQiTVC8PZ8bkKFr3rTRSa7",
  "key23": "371q4hZJX5CrfsDiJ3tD1hvEJ6QMMVJSbRrqzeNK23vyvJ4gsVbAhrD2q9L3Sc27w8qNuPRKxtDsU4tfdsuQUvRy",
  "key24": "rH3rWZfCNh8zXXz7vxWEDixieXamvZBnBNtAh7vYJcJ2yju7E21y2kjCedp1UW7XxBjMD5p5myCc3t1J62nL3Zx",
  "key25": "5B7RAGFp736ayroGYh9VKtczx5a1p4tY9BgjABZ9eAdf48FFqnM9wVzB169BUXTMUYuYJkVkXAWDEpsNdfzMWJqg",
  "key26": "5TjJQNZvpyzgDaukrjc3LcAYbhsu31g5UPncfkttt9eKKkQwVcpkHBi2xkZ88eXWQ2zaxrYwP1FcDbH43GbZqiEK",
  "key27": "2i4qWSm3cqQTbTbEAtLwnpsa11VBWfeMhue7WCgKoMXSM7aGbbbuXHJVEM85y7pzFoKK7PcXrQVizpXc8PjXCeZy",
  "key28": "sPc8zx6ub1YPrth2BUhaDpGogM7aZDe19UnjqzzsLjDHSTFgQ9NQ566FVpkzaMCfnqFMM3m4iAaC36EZKWqxAdt",
  "key29": "NWdWRqZJUQNdeanyepoWCx8aJS2JPf7ncqyCZBa25hFkWmPjacfKphVVTv5tkSxWUwRuYmJjwYfqRyoi5uNA4Kc",
  "key30": "5Hn7KetsgQWaVfkdQEsvPN8U25Hx68hYyEKL1Sv3T5gpvFfoUfWx9Wf52zsM6H8yfjbSwPvBdrpcwM6tgt3zE1Ym",
  "key31": "44mmH9gVW96qPCQeByBWC8u3M8vjJ9HmeQ12JYnRnMyZ8zXMm78iZJrxoCibD2qTtLSwJQzoAxwPDTqSojc1TGTv"
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
