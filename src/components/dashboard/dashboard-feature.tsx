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
    "65Uwqe4j4SYoiifGMHbYmBMGtWbcByUErY83aeKxrMyNNdipstBsUw2y7ED5noskZo2f389qHAgsUVx9wPb6bmoa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CbbLFeM4pinWahxYsgNXWsWCC78r1ZU5Db28LA9Db2ivJnp66bV8RZod4QPNporhcbUywTQRuV4SftN1aaAsFGF",
  "key1": "vbg84FJt7FUCdbrPtexWWkXhjVU7gPwjquY2RjAqCxXaVn27V9j6Y8UNEmgmNTVEja7XdNo1fftFfjcvRSnivuf",
  "key2": "4d24AmJLQ34cAMJ2PtJ1TYYAjP45MqYUhfBXbSnPPFoTDN3eWZe9h564HxKT1zbC1UMBWJnNXUyUJfcbQNZAr8hq",
  "key3": "4YS1hmJa7GBnZG3mRUr8pzt27Ajz1Z26HN1ksW73M7MzgB3UpsiRxCGvvDraaJhLVydyjfDCUWqB7fSYi7v5C2B",
  "key4": "59gx6A1WpaYqnZXXtdL51DtFZtodJBNZ4CzafzHoZSEzjXTqbsn1tiB9eLG2R6yiP2fUQn5R1AKQLCUD7iFrfSGX",
  "key5": "5BkJF69wPVySzsUqGZ3n7kDpnrpRFY4hndDFMMW22qXwfkbENiGSBZ2ZsPpLnUgdcKPGC5Mx16deYRTXCp7XNaPR",
  "key6": "4q18NHKkVzVg6HGeiUrVngoT2CThA4uFP56Z7YmmSZzNvWGBbjaRWhXJo1AUjDVYdUCUgwtj93yBoFwD6gdie4N",
  "key7": "fEwVr8HbwCwvYGdrpTGdagyDz1RvVsKVtMYwvkWYypLpFg8VyjsRWf65M78ro1RDtPvsuAfjjPgG3g8u1Uao729",
  "key8": "2MYUQLtxvRYmgtuLQYcFHwv1hm2sWScyougdG1sNL2Ru8krbwf751nK7kQL4ARLhFeGmC489Fyzgm3zjh5c6k7jj",
  "key9": "47R2M9ugRLJDBttkf8JvRzXN2Jh6tug46MjdqPpsxGBa1WD57uZcJhVnPTcfzDBxpSSHeXwUhcLeQuhZQ3eMeadT",
  "key10": "2ovjLhvuQvFD22jUuq8uex3BBNSwktWY4RgCba3Yv2TUVPwk2jG28nZXoiTihNfzVpkzdH729eniYvRM5HPxwQz3",
  "key11": "8nTy2ewTSMioiSmJfCvixMVxs5pWki8qonbBEYJ42aaANRxaLYzAQccfXXM3LgbVRnes5eLLsQ3QjWaYX26rQhz",
  "key12": "3vMKK77uREcxzrBe5RV3reFWc1Z3krsGSxLkZgeneVph9LvvHUfoB1uUQRoZ8CzH1vBGYp3SWoHV38GENN6kB5iR",
  "key13": "44QTsJdy7EaMQ4tUqRLCvxEoptKLUZK16wsH2vdX7ZPgarLBXMKCnAGLAoHMs1ZQY95rFRuRGcKqhgrNAnXZ9fk7",
  "key14": "yVrR2MLCkSayAQr6ao6dexzeLfyFPZDQxauCwQvwa6367ERPUcmtNhQYQHshgi9WkwDZiGo7Es2bdeA2CbEcdBg",
  "key15": "4PL3C1ChXutxGLyhujuWoQcpMEnBM5UYBFpoZ6fmgXfWzT5NtJk5jd32XZJPW1Y8ePsecF26zz2CPfypQqaBnLrs",
  "key16": "541b8yqyWuB7dzh1J81V5kKKF11P3jucaZPi85Zi7aaj9zW7cDR3nP7tygo27jsjpxVLT2ywsaKFqqhTJh16hVjE",
  "key17": "AHZb2tWztfALhkAfZ6oU61zd4e9o6n45Y4qUHGN2Rhgj5aWxqEyQi5rw34emTLMAetARHKU6djyTe5FiJU7jUv7",
  "key18": "42Jdc7C5JnwXiov84F7JfMUaxUDsapsPeyw9avVFiTf9BXBPp1c5V9Mg93xA3gcd5umNULtipUFU1SwwPHDk8wWC",
  "key19": "3v5xVyTnRJfLD4F1VMzFKXqMuRAHjouEwPePtxi8SstgsytD2Di5uMkrqLq6q5JAx43DzgK2dbXhXpf5bgmW8rBj",
  "key20": "uzoTWnT9zRu1t8YZfK9HEXHGTVCJZ3GASTKQDM5YGNHo7eFKaKvnBSjKXMfjxACtDC6AgoDSa9iVAgNEBEEqj7W",
  "key21": "2iA3iBGEfyFoA8Ub28vrHPjVdtfg2aQ8pwn54ZthgdcKgngRk7YtmHQSa83axr5yQeLLUmx6fAVsf5B1w1sLG8zL",
  "key22": "4iYNB5REoPt5eJgRj7kSGf8oPSukGV9dNq5hsNJJScP8sPVsCRBqRsAv8LhVfLNwVDCSPQPTButgh1t1n6mUSwxx",
  "key23": "2EEjuRjPVA9D9Q3zgoCebUTxBtPLEAeeZvHmy8xFN3qyDCzwVep3NAgGUqw9pMghkbZcWL9PUWDNyszAo43PZFxd",
  "key24": "3646x58GwAkefy9xkB2c2y1kui2vo9wYY7m1xqe8iY2eUZmjjyNjKJoGM5W33Qtu5ofXchtWn4R9bWT1PxCSYEtG",
  "key25": "3aJ8xgVspTLUoSM7BnVnePLVnAGwZXKJyKEPFqKGcWu9bay4DzinfxE7ETATrBU8Trv2Kp387baSNL9YeBoafpRW",
  "key26": "3yGGUowkwmQohQFt27iiiMZDWQNP8zcKEFJVyMpL9RBv91WZbhCnrGYLVbDYLFzKqwEwrS7nFcUugm4tJDEjYWds",
  "key27": "3uX71XfDzAbvub7VqQvG8xqj2Ud9Hx3D1WFK2sK44v5QSCETrmK6BD6uhA6Z3HdaxBTAD8tomxFN4kNKDiYNgNmM",
  "key28": "4QZmHGxe7xG4rqw6DBppEGdQKcLYe9HtHMBeoPknCD3KwurqU1eAiQmpvV9tfKVkqFvXmakA7F8ysqrTZS1TSDzK",
  "key29": "3Kt2R7qAupuMKAkyhaUvMK6pwLbJzf2vwxaJdkhsSeiGx2uDu5NrzzwgJjhpxvgdNFSFp136ZosApoZHkainYbjG",
  "key30": "4WQNYJSNDxg41GLisd85e4iz6tAwAGPdDQGvHTx9BcQfjNiTnAUwsn9nBbpXpKeBp1yeyGJ9n7rtZWH36UipRsDr",
  "key31": "2sjWU1Fp1HaheXYCmzudrdk4FCY8xUMBhn9W9BtWVsvpz5i9eGvL2KhRJDkd3xEFVNd9Hn2av343bz7E3KRgVkch",
  "key32": "5bvggQAAHEDdtTtBCZBAuusa2nVbbcHZSwCsWzrRyTDD2qJPQeN34oBqmnYeAMFcroccTMcNDA5k1ZX9niLXFAUQ",
  "key33": "5BdDfCbvXLHkc6qHBrFSKwtpApGvWgfoEmSySqEGCK2ntzwV9B4qNe9MwVBNtjV5WH4oSdTNivwyct3H42goUUPE",
  "key34": "2zjhYrk6eQGC9QHBfXJpg8cVcvuMwTh8tLS7TwBKnWi1i2SK9mXJv2G3wchSZskcPP4tcJFaQf3JC4RtxAZiZyxh",
  "key35": "2xm7VRjbQb9arMQqmYv1CH721b9pqZRpzadQQbmRBkj1rtMd9Mf9oLrStQTsxHDu4m8zky6bZS5PzfqJEKfFiBW4",
  "key36": "39VMtSSDXn46SfLpcoW8WWmNtRPi8cSNFbNP6gtAaoep5wAja8J2s9RTgq2AApa9dGZPEJgsWM46ozDNpnqakbh4",
  "key37": "3XhvGrZdq5NmnEWBygfShcpGpLcT3x68nUpP7fodSuQPwyn1o7zcwHY8ZURAbzqDRyxCavBgJG9UHJh6XShr9nis",
  "key38": "3o77Wkyd5B48ebyBmHu4bGzJVjChSUFBvC6qZd79fwZcFFmxU7JdWUFRAdMPu1qZxfHW4PAuDEWJr3aN2TCHAYq3",
  "key39": "557NS1d5WxgKM9XY3rfwvttL9aZ9qgSkA8PPbjswFHhrfZBio8fArEu2Xi4VFFoWkVfdgvsZTE73vCq3o1Kw7Gg4",
  "key40": "2JDyh2mHrLCSMy2gXusMczcnNZ6gu9tu9m689FUwSD79QX9jcBGXk9a75cwKjcAY5ZpewcE8PJEvgsFToUzmZd5C"
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
