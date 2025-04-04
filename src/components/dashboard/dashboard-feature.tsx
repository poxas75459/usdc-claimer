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
    "3Qmt97WsLseJH4a9HLHfjuRBhXAdLBSzXVBEC6A6bt7f2Cx8PUVHttXJhY6NGFbxs1R7uHmkBCQCn7LErZeXJCVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gdArcVgVZUUpnp2PojnufPxQFqeqWd9nMe4aqxxS1yGrcDZ9yzfZLHrGRLuu7Q14V7aEgkBHJtB5KyhPdjxgNxo",
  "key1": "3zp6kWLhc9tiNvjquCQuCd6XWGXAiCbUHjaMnj1XFRx9aaXvfxJUv4LzDQqh7CCJZeXSaaw1s2d1utpARNRCbNkj",
  "key2": "3JZFqjNWFRbfgXRn4FY15ExoxRbn1dp66cXP1h4h7cfRn7YyfKARjhddkoiQMyXyYnkT5Zmwv6uMTPqg4yj9eCU7",
  "key3": "5rYYMDo3J4LFdrYYzyJPMVbKK5EY78NokT9nCx2LTggvDVemjzkdE5WwMJKPAw7FgBvB4fckEUHyj1jXJ9xkvt9a",
  "key4": "5j1L5c4h61XDEu5tUTCXf4e74XYxhymfx9wwwnd8iFduSUNDGbY5Hw1F7WGutww6RtQCWKcu2VRQtG9TRyqdUCLS",
  "key5": "2K5PhahWQYLH5jyV8JvEgvEJBAAH7GJFskJHEFJPVq1coMeAT2bzkHpvF6SHp83LkMjfa1C9Vn4U3EZ4yT1brFNU",
  "key6": "4fMbtk9SK3NTnn1CUXxrEuGGmR3BMa8z2XPvCtrtoRNBMKxeJD4FeKj496abRsBujg3SBJ8VwjeEPAf5vU5UeZbm",
  "key7": "61ii74hUBjyySSRLS979yBR155nbfxuCxe6TuigwF4hzoRByS8Dxpouya6qxtPqxqEy6bUjMeaqHuwA6bKC79w59",
  "key8": "3cX53LNMdrdvBrk6PCzrGepcmRrntauDtAvYYaiCffTdDq1whDK1C5uFzYsHWBTJ6mzrZfTS6eNMYYTVJGaKu3Ey",
  "key9": "4P7LTT3Ux5wR9yp7KR8bLhPHAgU2gWNgQsubrw5tJ3krnqRwHcv7QpfKVws5D45sj47yG3yQ5nZsZVpemKQ9XJRd",
  "key10": "22HRhccx6dijCRbGwQMSFELtyNtJ96bjhtyf1L9u41wSYKD7YT29GcsXJgi6E4aM7Mjei1Jp4ngneyTpJB9uNY6o",
  "key11": "2Dk4FAiiE69kiUgr7cpoWRDQAgd427ntRJj8GivZ4u2t5775aG5QwevtoRYvvz3gKaAqj23w72CZ2ru2XUVS92ms",
  "key12": "3H6Nb3uJjthvcEiKbvLZWkPnYmYTpTFMxPBthnpy5s58t2Z8ecVPtxh1JzRgVobNCQaTXsHvGJW38jmc7BdHY5yp",
  "key13": "5zkGRZxvhmGo37qdQ2gX4BZMtrUqjjsJHyZ9z6RA9yyE4zccApUHcQS4CorFw8HKMNAEzt3heVyRX7gWMsoMbMMN",
  "key14": "4HJguitBw1x5cr6Pw7pighAAq5iLYPWfF4vouiMJUP2Pq9wVM99iS8sWcSBjhX4ZoG4TjS4yWymDcoA8yCymJJxb",
  "key15": "3CWyvyVTACano9VxHRxWzYpSAbHQTbCL4QNx1tpbvVJcMzMaQL4xXLbjcHnmVY4GzJMLnnYphf1WAKnaGE5fccB9",
  "key16": "5oyEhAH7FSTwW1BHs7iB9BmucQ2VFgmBe65RJY5xNeS7FXAaTmyhMWLcBxbzzG7XeT5McXh49U9aJYU3rGWab3Py",
  "key17": "4D9wVMRMXa1K7uVQCr4RDHcaD4Eq785XdsjrWKxbzVLZ4s31oKDXianVRrbunwaGBt1zjrYQjvFPuActDJDBRLaC",
  "key18": "2zk6NxGUHinkzsdy2v2ehuqBRkaPQ29UP4RCN85GbAZLRezewkppxnSHAbpTzJg9kVBvZEDXiBWzjDKZyLxwP1eg",
  "key19": "3pVc77bGmNrtFAFrj4SuKhu6Yvex7sZoMvEGqfRpVafvdhzUYNkEjpnTbyWph2BMc63i8wuSRFkA87idSTDg88w8",
  "key20": "5QQr4hQ2SjnVXMwdqG29HgE3nY46UtiDZShZ7MUEszPazasMc8SBQPotHbX1KcgCkVvFTSrAUke4R6gokQsiAH8W",
  "key21": "5Y8RUb2G9tYJRgpJiQ1pxr8jh4JAyhwqVLCNtepAYSKSkqQkmeAfcDfMvoNjEcZEmznr3PhFUuinKGmxHz8ic7Zd",
  "key22": "59YBEkgs1zFsWJHmH55B4mEfNxSLM1V2sGdnKwgisWu2wJGHUGv4z6hibdDwmVKUDF4UwribFWpPkS6HVAJJvf65",
  "key23": "3NvkwYPCqY2xM3pTqVrtmmwDNWHz4bYuz1G3eaJC3dPGYsUjZXjBo2xiFxtgEmUUwkkvvQFLEwaJVqTk9RvLRrHz",
  "key24": "3NnWwVJxtQCyq3DQMxiwFykB4iYkeYgHes5MvkwHD3cwjQ6F3FTMcutAPkAWVsdca2YbKQBah59MKCFWNce6BQ1Q",
  "key25": "2wmQ7ps7DxDkRKP1bqzBRwgghjLzYnBucqrVfAf1FUC43Pq8RKU3ErcUMqtiKeUs6YoiwR2bC11Uz9ZEAqLrCEb",
  "key26": "b698Xrjqxd4uhbKjx673qoKNTwkbcUvUjNMY6qHCRg6553Gp3AuCmEu7MNgbFjEJWoi7JNiuNHjB5sswHVsqu43",
  "key27": "41HpExmqPRj4S9oUs3uCwUEwhwv6yZNrUnv8SgDmzNr9mUPHzVcyr5sB964o1KS1UqmQZxpURSqJHihbKUwbyt7N",
  "key28": "EnopBVzRxVbJS5peYW2BnCGQi56TUJ1kWZvZEShrrxD1AoDMMHAZSiKqKAGeKYV76qvT4akKJfJgkn9erMYxZnz",
  "key29": "3oGP9qQpjdLePYQKyv2cfi2UXUu5JnzabnyX4G6sUbt4e5gHCgP9ZTDriPy6XsGCACYLdFtZFnAqT3C2qmzfPtA8",
  "key30": "67h26r5r7hCiGaUqnqwTcbQ9ZAar6C3ks88uycMCS3CuzxzEFxwUcw7mFQe9KHnNHPdnDCMxQQw9ejZ7hXorupas",
  "key31": "5cYLJ2MAwrXfZoUp1vZNKTfdB4gayhX6n5DumYVzKqYXYwVgb5tMx6gTRAx5FgwRswVZ9cCzaJ8AP1UedE7BCp6t",
  "key32": "5Bbue5AqjrgaAn9yEesiSEyD4SyuH9SetLC3T1X4dKaAEBnpDx1brZsbtkSyZTF8J83wrN8jSepKHi3ey5jbweTv",
  "key33": "8BF6ZuWPDFiF1cHkL4hPkj4zxzdfB5DCp9a9xdELryaJKQtH8oxWxERSUwV5cVXypG3ZQMCzUqsZq877BHg9FfZ",
  "key34": "3AiQZzewMLWbEF9CtqvS3NEG1zzKvRNHdJ2Rke7F98YeLLJpJTymDJEJjyWWnp3q1stCPLvPUDzdNcKf3dL46QYw",
  "key35": "3GyVfH2VXpdjA1BBUDMWmvzUrct3uoJHn28JCPXJNng355Uo8nufzgwcwNQFM8CwoJ1vn6C41FUvwU7VrW1BsWSW",
  "key36": "3J14BjjYVCTrPWSyHKK5X3z51AqJyEJpFwhRC34gb2LbAEipuj8XjZhrj3vnnEJqJrKqw6gY8oWJQBsAyzd4ctBC",
  "key37": "4G9VQEJVu9GoAzdwf5E1hsikMBzgKXTstpinJTrxGpXsjQQ1JyxvzASpxpyMtJFn4pf49TBYvsDqUc9X4jGcYfaH"
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
