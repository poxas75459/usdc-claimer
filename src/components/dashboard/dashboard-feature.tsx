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
    "gJV4hwWnuKFjCFN5fvQLKsZ86JfFzcPzgToQD5F2TtnhNUrMRqoys44VREcxkPaBurXYy6ReoEDbUhKy3JVvjLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZHHSHdLVTvNu8vZD6k2bLiyredM6EaiwQGGGcFH3cMJpbeCucEe9k2LUonRCteXK6TB4mhSz2HZ4x6xdsYYsDCH",
  "key1": "3qev58oeSvYpimTVvExfj3T36pCssdy3L9Taq8KK7cX1JhR4GNzMs8VZELjCKXs6WoNWr8fQo1sx4PUr9f9JSH4N",
  "key2": "3BzTR9eDJquCDNKaZn7dC683mwZDCM7wHNRUdRDaFjC8FWTAGnXNu83rGrAGHi8uYw22vauDP5GiSCZRXFekVKnh",
  "key3": "5zNv2DbmRkgqg9yCiZtpM7UwghM36tpBWb1VDFXK3yPdj6pZkPW5dE5sC88nJx2LpgP2pwtgpEHn8ZcZ2QxxVgN5",
  "key4": "3c4J3miN6gQwduKQ4Ay3fnvfXswM1SRrHbv9JZprkwYHHFq2aDvRd9zdP9VkYZKwuQPvMSZc6aCAnzd5GbQtHSu1",
  "key5": "5gcDeUtfVuX1Exw2tQMzzh3CEbNSk5nBtgFWxdm8YQDsW235D8kWCYXhZ3DVQceu8ztzC1UK6ZHC6zoyuH1LZSW1",
  "key6": "4AT4uUSaeTCchCGxi8uDvUQaTowfASJcS48v1fGZ97enHRcnCbpFPed5MggGVfUvLWM1MTSAPaKJGjgFzBMLmfVn",
  "key7": "qMk8pDeE6PPmWwt5YMrEjjbyT4ke8qhwR2mwJXbywETzF7drRusumg5vLxbJ5ur4tBMcPhBNz68GfuMMWXmD7Ae",
  "key8": "JsP6HKZirsktPny3595EPXbTHf4mtKy4DNV8qkkQ8BnxUKDKgV3h2zjnxHiSzGHEUBtpfx2gSWLw8upKkEfdnq7",
  "key9": "482NYuciT88B93BxvJ5xHhPBQbYpNqJcXvuENTT45q9vG7hvDphFhVATxZEf31a79E7DSDv3zV8o5CMyjdRf4dq7",
  "key10": "5W7iCV811LuDukrppHJokyDThz6rPaAhoBVjMupd7iy5MafjmbZ6MNwdEwFvsW3rE52FtvLVV8z9phm8YJPWXUtg",
  "key11": "2WHbcSv6UFnQsqdJ7yuytprpyidosZZRQscCTrdFwoPGPUygv1d3GZc82XSSBTPYqcheQdjAD5kLaZHfmea6Y8nk",
  "key12": "2aYrRrSoJXnfU39pEvxYX811oh9oos7aCDkXr7Ut6xxLAFKR8zqcbLBTjN4JUmQpJ5aJGNMttPphvZb8pE9Q3Wis",
  "key13": "2xS6QUTS9rKTyLqar2aYCJZhdZfGdgjpnE4picex5MgiYLENWBqtwdLoPR9idqeXewdujbwfbfm2eqDbX67WiUUC",
  "key14": "4ez4L353jEVFpbhgTB1tBUwiE7rdF2krCNf1nkwwuAZCw8e7ckqMeoVwqJHUZ8Js47WF864cNehvb1TsFe5oCt6",
  "key15": "3o6nkP2DVWE86jmEptt8oktwFwUFioQ6mAAMCm3ZXk2MevdRbvnBgJUuwXwUpzAhjx3uKTLa1TV9YQtJiYCbgVNv",
  "key16": "4jd4MRu551qAJwQjNaoHvFvXCa3Z4gzik6jenSNx8MaQCmiQU6Amv7NkvrPd8wqkmHNDo2wGJCxyGdkKxFZV8uc9",
  "key17": "3mCc8tSRbzyoLvMeRMgcWMA2XsBwm5jLNTQrTrm8ARfgWyh2WPiG4xUNYRC72USWh84V9vJDonBTRog1CoNd3szP",
  "key18": "3yHxkNxR94zFkGd9dom9Syv1snRBg67Ej9xxFs4LFUgMEvyAoFdAjdS3ktxrHAjNV2jg8wd2vibJqRwtpvhTR3zi",
  "key19": "5jSTkZdh4ZR9tw4QH6uzLb5fEXn62pgeBBriVSXL4VsAQjX6WiX6BsNLx7YjyaFE6RYmdSvAUAH8LLTMwZiXDan3",
  "key20": "5sw2uJ82XLpTY8dNvka9Nw7TnZgFGQd8qmjHJQxt1oKtMyjdiMYnAywaReUioyoKBuBEuuWdqj8ReEzuGViEYYsF",
  "key21": "5J5iZvC7N1xAm5VenU22omPduXnfQ3JsPpgjrs7D1TWTUH1vdKu497JSVvW7r2pPTbJSpioZjA3NwWEuDps6nSdn",
  "key22": "BGZoq2st9Bf4BaiYuB1dCYTdP77duHZwPzm4Kdc42CHn7znVqCfmHdgi2E86yroEoZdiiDJTwkY4oWJvhWeksXf",
  "key23": "4PK1tgNoERXf4mqo1VZEXmcMUCga1EDiAJFhJ23gVNS6rVbetVt1R5XZBbRnDdKF7sfTgMxxnP7vD2BLteBLSSFm",
  "key24": "xrzkb9kuTL3khZpJgfAU5JM592QtmjtQ3mgER7bnuWY3qZAfJEhExKLMmzMtXUbEfAR2cTsHZmPyEi57Ki1hSMG",
  "key25": "4cV5YBg6y5SjaukNwTEaXeyZWyvjU2Gp5nUpwVo3GydhShPrWFgrpbEM91Nc3z2tqhNGbrEYahPqBYhVNZJGezLf",
  "key26": "3DfuDWwS3nrwbnGBsvBTFK84fPDQkQ8MQyoSTpRq3QWi4UVmxgPdHhQwh9tv3a9UY4EFTs8fVjZV3fBYdNBLUstx",
  "key27": "3DDTAYfekF49SYRayq27DVZSvyQpHB8147Z6tY4mS2ngdtupFwEaECSSHUhiEBBBCt4LGmL7L2dxTCGUnkMsE6Kz",
  "key28": "5zvUKBjTfPRVd1EscSsNzc8mX6GvF7VSLKkbUUA4qEsM56na993QU5YYzGNXPbTcKdLq1r3SHhi83a8ukXPi7LAZ",
  "key29": "n9cqofrPM2FadY4jdxuHM1EaqvqBpBzdK94U6fo3nEehqGD3RitXmAzyXgssFB1CBSa31vXT8Dc4Qnt4hpP9y78",
  "key30": "3oRaf1ifUrttnekgPzAr85nZXrY5P45XgAGMFvrKzcTgnFsARYut1bYwqCVLwbJK9NeF9CdDN3LfrHm2YCfq6fbb",
  "key31": "Y3VtrzRcF4DcsumeuWknKnimz7j8LY95aG4nwFZQZw7cd9YmogckkdtZEmZECc4zgqMFzRVVpM9nK945N7CQfBg",
  "key32": "53i4ixMus91N9dr6gAojnrhR5Q2GZENQgGgCkmWXWfCytYtjHS1G3ki33eGX1Xn6uFGoKgaU8GtBtnxyYyLdYyVZ"
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
