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
    "2gL1yvxNSuCcwMZaJ9btWPz1VBqvZ37gc5aRxNxNz7Hrh2SLPZJ1rfV5oUS5UQeDw7cizHKUdqwWoSu7yVUw7iSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NWPraeAgiRW4atuvCcc1XanQHBnE4vGDrDm8mbf9kk6wRUVEZXYwzJiKoHTd7S3TATCdddhsrCZBeR47bvYXTWQ",
  "key1": "4saxPwz2qWFpzBtyNUR6p2uY3G6z4BPBRwQpzPRQERgeNiiRHFBgfgPGAY8tzDsJw7CGudKoiTgs8U2aUynsRqp2",
  "key2": "5m5mtYHupoVSfDLHQqvkZiVnTsa9LauUsDf8nUG8TrFS2AzCpQNPp2ZG25P2jQTf6E5m6ADyWEtGthay2cKfkQk2",
  "key3": "5A9ZCG4js1giAY8ffQkkogDfd2ivb8ZH8EgMkLYQpWP9Ykkq8PijY2qgmNZZgP19wmTgPUFNCDprkXAo7jXubifc",
  "key4": "2phpYMesYmgkupTJ8HNXNLsmeMmjemFyM8peKyKDDGghSR4FwnxqTeptFBFoh6TozmPXBPRAiKgu1XGpsbvdzqg6",
  "key5": "34QzRgmagVhXQmvDyVMgMFw7n9W8JgHEZfkt32gZbjNmh1MmRM4xyGeA7s8Js4viL4yy7EUBSDcpA8pTuqqLx6PL",
  "key6": "4H765GDaJy4NeoFJrvJXTeBr6TwC9a1B235XZv7KNS1E8Dkc61Ht5Ps3NNrLrzFnKr62nW82xQPLW9KQq8pq66vz",
  "key7": "4Xqu7xUm3aXhvKepe6ScfFoF9fqxqUErTGr22qKGrL6E3tsbCGRVavZG4Bn9ESQB4ryR8KpjFvSfdSJPssJvHriu",
  "key8": "2HtEBetzqAx1beB4uVwsvktngfgZFd7P64yaV76PPdKCrgQxKzuxP196UZ8WVhUyzMHdwM6CNYhoGoqnc4yMmDfP",
  "key9": "ivNsysxKwC86TwdxoE6FBByGU9y2wpaxBeQnAnkMdThQLCzP3YX6sjRQMsKiNVWxiAWeVYA1NReLdgodWm5W8VR",
  "key10": "2MXnjAkEzgRSHAUbZiUnxEqiySJwKTBcJzaUffbGnM1jwnLJrit3gafVaytSdLGtpi1U6YFFGkUzGTfoBVpRG9MM",
  "key11": "2x9yTpHjGSk6W89AuGopCXH7fdXF9n51rkVay4AA7vBL8w9w5N5E1LtoDsQXpLwxz2tPmSLDoVuDLHUD1yTbRJmS",
  "key12": "5krJfdFYBjKQouXzpVQzBHUsTS1NyLc7mDBYkEy3VqsLFx2Ygutj4tmc6EBxhuvrwm1mLCDEmkWePJZaumsYCY5N",
  "key13": "PATjx8YJidMqrZ9EWoA7Kgg6oKtHYGkpyE5qA9dDfMBmqvgvAJrWAjEfGrDvUGa7PYbWbNJKiZ4Q8AkxYyT7dLr",
  "key14": "44HdCELWHYmziAzJboz6UE8LJ8ibuDFuRhXY7ewFJxsvF4STx7GGDX4BoACvtqb2kb2Lv7PDgVhcPjkFYk5HZ4FS",
  "key15": "2NHY9RdAw1AEGVm1Ef4SAEWzNYxNFsGSqTRonpYNBTJ5AqEKQXbUTi5apTs7pBETfMJR9zE5EPcW1HNS2uBYiyj5",
  "key16": "51mPtJQg7eTjL4SMnrjQ7ggDKbrtMJDDjLfyRFZTnHbLt4D2uCAGqjWBqokkWmXCWjq2HtANd67BFFz1Gv2Qqkh5",
  "key17": "2ne8Ax3sm4GdaGGswp9VDjWdusd9mFNpzSF1j2W2KH8tkZs6r8ioKawzfCCzSQULvdVdCCSFccPuWCpkBsDUcHw8",
  "key18": "5zNtKyoQLyZgEXGnt23Cokxc3yCVroQXexPE9Q5GKZjCtGrGUndr41bsvdSEGRQpz9PgRXkq4bHjmifEgbYLjJHx",
  "key19": "wTDtFVEi5ymLqPrq4ijJAhviYyqv8kQAhBSUMSJnmHtySsvbUKoFXeRkZAiWzVE9ykRtsBWF8GEtKZPtLdtocMR",
  "key20": "2Us9j7BbrHSB73diifsfvATX7nd1sSgn88gTvi28nhRtzfHxAgdUfMZARUpPxeYU5XZmEQmZ8oyys3BPCraWzj5K",
  "key21": "2WcsKwJ9xDm51oj1a7xJA7hqyiCutwC4EyYVcEFLzUEyVRHEXKraEp9AAh5a9vAvJfDyrJBEJymBpVgFygm99d2K",
  "key22": "2Lh6uwFEgxAwcXzwfpxMEBAxz2QHcire8Rk81PmSshComnY3dYJ5eHm7CJnTnHw2TyP6TE5SxaoT1WThnEBa7C6n",
  "key23": "2tBdJnzUnrbBLin9f6dadFDdCHi4QwYuwrioPihTHJFLnpVWus8YgwA9CQsA35Z3cWvYwcrAn2eemUx9RpFQMJZC",
  "key24": "42JbdauskxyaEQ1GuQTt1HmJAGwGd36MgFS4o7ZBMtpmXFd1MzomWzXNoUD7DxkZFbMM6LaJVEHDTmFke13a9ee8",
  "key25": "4FJeUVP99UpMYqetsXq8sFpvz39f3KLGZMRtTPmUE2Bs2eaBXiwoNyLNr2FL5nq4h4tri4HxhbUy8ZKnVhmLfYgb",
  "key26": "5E6Yaf5UpFQCj3kyW8RNYxe8sHeaHBNFgrNFRojHtQT98S1fHU49MAsGEJxazAeFhJuRdcv5mA6zSZQkwix8FJo4",
  "key27": "5ouFh2VmBV6BzrP2bzk5VY3mR2cS6SyLjLMfKgt1mJh1g6pYCgnS2h84KtdnKi99t5D7bBa34RzEhoMd1fjvnsDG",
  "key28": "fAbGK2QXQdHMNYtAWd5gTcCVCNn8GSZMt37FUpY6idjtvWQE4k6iND5gin5LgwcNaf2g9CY7c1gFjk8MfHiaiE8",
  "key29": "2UsV6HMLnUvFmMAZV3ir3Cq1wW6fyoVWCM9LttEWtjvFvSjoE1HxLjYBr3ZGWvLRn4Wyf32WzN314RfPB6WB9oiU",
  "key30": "5k6UBxnWtDdduYzqiYFMDCJV7jMU2CbneGohYt5XChXfvvidSw2rACz6Y6RN3L7Htb2tMjdspLnhcC1efxiHB5AK",
  "key31": "drutvfXCHbFBvstVssDjHX1GjNuAWkXWgKn3SamLpWZDNvmvLcJAypqtW1ZMqif8BE1PYM7CfxQsqGuHPANgRKo",
  "key32": "Pj8AN9fBM2q9XNibJxNtaEkjFJBfk3WuGdkJRJbRMELx8tBucuWagrrsircxok9Y4CpHcok16GbZ2v4H1tcHtax",
  "key33": "676gXHsZrPH7TpSrnEXen3nKXX6jqmKyXNyKBocVYqLpFKQL1RQ6sXxbasxRddemf3bsmyiW8aoSL8x8qqqdwcNv",
  "key34": "5NxAnXphAgEGkJ2rXQv7eLx9RixMVg2MzXGNbTGb96TKW2UjcHmNhkD13eCKtXMX5SSLWDJwS7HPp4F5szCaeMDa",
  "key35": "z2RuxJcvCdzrJvzJsheddvEyYrVMi8V5b58eov8R6nrhp9XTBjBcPppsYxSCuRaQVaWpoBw7JtuZhFq7y6VLoYa",
  "key36": "59mFN3MEADzLTUoNnhmsNCeiX9sEBP98o9NxtJya9yrmmWCSTDE4de2PDf4eoqnFpUe4yh8bkiJC7R95fPoPnneG",
  "key37": "3uD51Yj2VYEC6ymC675cHrCGjxqQGbsjB7jN61omNYPqhMK1gfBEce4SMwLFHc2hYahtRUcrifBvEoBhV5GZgwk5",
  "key38": "31z9CXaqDufYpgFCsmhpfHgqNnwPWMCW8ZHqcaVrDZQ3v39LiLZ8pwaHfagfu76tRER4C8HXn67DRNTkZyoBPYWC",
  "key39": "4bzBdivCyYh1rGCHVVukB2o7NMVHzRX24PJ8EoFm3RVZX7KsrrPVXdkZcY1R59pKYJNja27yr6o12cfFyhacWdiR",
  "key40": "4BXBLQwRkqRG7sLKEGQZfBeX6cuHMCfmadvq39XUsqYABaSU4ijZxwAquJe9RxFHZUjs5xXRZ7ufnbsDf3ZJL2Ao",
  "key41": "2yjNQKhHJxAhGc4UcuYuT7P9gQ4E8kkzQ9jbbCkzEJ1y1SpKDwuruuUJg1bN1kFyRhZ2digVEcFFXccYAfTMrUnM",
  "key42": "4KHDMmNnW7dpvp1hqyDDt9AGwXXiV9Y3GQvdVSBua78cjiqu9hkiwuNN2UfDeULwXzvZdqw7NJpsn1Dnv4gbC7Fx",
  "key43": "3xVaHrWDA2mr8LuMsXxjuFW9MeGSFUjEoLVcjGSesXzrBFbUAW3rGLuPhC6mjhRRH7zdwz8YTyj7ThKagUrhs1ga",
  "key44": "Ri4S6FWeih4xC7g4Gyu5iA3LNWBiPjp4UwJ1hH7W2VrtBZUxBYUCgGBv4RF4z71EeTtiYVYHJTBuk81WjXFKSkQ",
  "key45": "2sgronmwCBUtT7JzTz3YBEoFygGdchBmLpo5LLyrjPVdSPAs35Wvw2rxsJgyeWuJCKi42ydD4NRxNm5NopaqSS38"
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
