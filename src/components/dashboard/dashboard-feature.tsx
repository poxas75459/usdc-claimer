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
    "51L2bL66wPw6gPnMGje12mQCWqBi3dbnGmBy9EUsn77gPNfMZYQP26GGswyWHZYwPoJbAELQeJw8RWBd8b2LnEbe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3adbQFf8ZUpv9y8xZ5E3eayxUhi4aMD6fGtgSQywafEhqTjMTwqKHoYqMpKuvgiMGicwo2kRNq1f5AVKgawv6FMd",
  "key1": "3H6Lq3zHK3jFPZUBQzusMpunmsKjLYSQJwUNwF95hvywZvzi9vXrpkWwwnMpD2FDdA1HeiewRvGfanUqAu1xd2Dd",
  "key2": "95bU1k8WPrXZ7Z5gcY2u7pZiqmQjEZorZcpqYDMimCBPctXQMaGtaYeLJv8WWafbET9bYcsixsZ41hr53a23XjU",
  "key3": "5S1TKZNKmsW1VVnKXCSzts9gPwcStyPBr2QCY7ugm9gwMphKY6jRr9xPb49KUK4fSDE58qBnUNbpTKgzSVEcBhiW",
  "key4": "59ae3s2DqJPdHApaW2reCg7qyYcCdJXMVvWtQ1gFhaS3j8hpFLouxnpgfKxCceLuBK2gX9sqN2bxEtCMi26k9A8B",
  "key5": "4zqK7FDTiKmJWkMMo5irTjPSxKfL4KW1ew1HYBmpTAqY3AG8JhP6tN41tt1eLJg5n9d79i7FVRzz3yV3UD4hsAdG",
  "key6": "3TzAsYdaXUJpSs41w27fUetVKzTHHUFspcBAdGd39KMFZPDgeYzsMmLMPVAauuwJ2J68Kagktrpr2R4iHEgzBwUa",
  "key7": "2UrwRx7bcgNFeFqY9WVZv9B3CNJCm19n3ahC61JUam2tYrjiG8dxKJVEEnBw9ve28WP43683mQ14Dz2hh2vFDbKh",
  "key8": "2UWvSfZfU3jwURJiJdUCG6Bx83skibXvfjyCwQEJNLoFpee76yPqnKNbHqzJTMQ2Hfy3Yyz2ZbgVWiMCDiswDCij",
  "key9": "REMW3Cqkhm5b524AC1PBeCgFrt7BjMM5qDN5NszmjebRDkRzS24Y6Ydr1n7AGRFLhaS2byCUWkN39LmDBPy36Xw",
  "key10": "4AXDLknZTv6goWP6be7grgvCypeoY5VSwY6chZpU4XfxXqRq95uMsvhC6haCoQLE4CgFxVMFjESQntdneMhTY4ZT",
  "key11": "5moTVbPvsUqhy9WeNH3KBGr6dn2dCTWG44JtoMoYgd7gusLPcSoQHRr2P7GHdboEt8tSnsLRStEbh4Hatit6dwAo",
  "key12": "6osEBkQScSiRjwRu2q7SYXn5iYbsEkRb37WF1U1a95tLNXBu2BkYSJHik1qs6oizadgQbu55aMr4ffEzyReq5ee",
  "key13": "4nsJcFgW6msLL45TCfnF3fcoNqeXwsY1FukJmsYrPEreXuVEBAMie57qgXxoR7QktoR7Dcz2UFoN5kF6iWxf6QHe",
  "key14": "21Y2J2VJMtvyQ7Hh8fA6gx9KviSXTwJY72KEU6r4LCwci4Ryo66Hexekb5BK4Nb62wXYGFdCrNSaJaxVTkYB4iFn",
  "key15": "2gjm5Bu2hwhh9ijB7uFFbDHrk1BvTjQHBExd31U1cYrD7nFGwFjgB8a9RwJx8DgydkoutiL7G3BxrYnEXqe6mnmo",
  "key16": "5zABYEMg7v5a2kdsUE8qBSTGMW49QuuLqgW3YKWAUmyGzrmjroWtXi2FRT1Jx2zHoS6kVtWiVxHRiw7j38pUAL2K",
  "key17": "28cmJFfTBp8XG1VgstZ4uNHxunr6hELmBfwsSdXCGhEGJPyX7vCLrzi1rfcrVKNDoDBwNr3vJMck19yeDKiXyD7Z",
  "key18": "5t2N465WqQ5b8hERHcjzQrPbzCk4i9jS38mLQqLh4DEpocwRfMKtYgqQqTFpbqWjyeYKtoz7NvLxVEUXuLmPcoWP",
  "key19": "3unzYV2boVKfbghsw7SFeyfvZ7HS1EP4QRKj8np6kvd5BgmyJWLs6LZYMeb1WfSCo1nk2J72PDMarDTTSuHWzYLt",
  "key20": "2r23GEypuYFjyNPUbw5FdaKZQNpeTCVYuSvLjY8D9ZZ6s6XSoPYWkaW216v2WcSDCWtrLckkLzGaLKsLBQ9NUGqK",
  "key21": "21epffr8pEt3u19up3qrjHsJRrj7NVSmzHe5UxqGQ6BxEX5bVCEF8fiH2vGou89Gx136FUpvbkDi8RVJQ65cirX7",
  "key22": "26xDmhjh3RmLcxpBvAp5ebk9i2yRMxnbkoHGgzVb7Xm1ZNtZCn3b2W4fgnE1koRk3NUGhcBr1QQM6knCvK8zxJUR",
  "key23": "V4SjMunC4Q9KxUmow3CN3LenYecADJZZUKg3BVAmHnSfGxxAuguFAH8UQirwdnD7H2CQNqANeAq8ueyKMiTFggS",
  "key24": "5ktBYqrAJ7QQNnc5Km6U49HAqfPDzY6DXskXwNHcpzM6KhRbAbA3CgPkGzrQNM3p5duTRtvGJzSfQrNJx1qnuBcM",
  "key25": "2Ya7JmRBYg1AUiUmt9BDERqNsCwCuBZiL9CEfbzzRC7je8jDmbf857wjSTz8RRxb3Pek7EfQQyCwhH61EQV7k837",
  "key26": "2XgzGW7WrqWhaTgEqbjN5HU6tkBXacoV3dDEFsrs83rUPu32SSyvYVbFgUGGK3Mo9sKqsPdLfSeqkRGADwgAoidD",
  "key27": "4RGZcoHyPZ48MtTMrVgvr3F74CxyzKWdjpYyVWVJTZXkkKpJms2viyjod5rAooXpknGibRYFt3SN3ufB35eK8y6Y",
  "key28": "2Nr9RupVEqf2kkiUc7DXm1iGfshxk59iRc1AVLf3vX8PWJEoapqNFvaTuWKyYH4psfvEitZAcPEHc2nxUuC4DRiB",
  "key29": "5rXf99NT7q6aLjcHtj69iHLBnqnLvJaAMgEfH87qz4SaeECXuevcgGYjXuVmbhCrVGGMLpbnmYR8zYtMoZbk2LKh",
  "key30": "jXaJKrfFa7UV9aBXLVHjEzUyVjSJJTkMmiCcVGhpTx8N5vtNrpvhR4cAZGRBDxPsEyANeycGxT5UX9WBV8j4VAQ",
  "key31": "4xju1Pmjp51smbbxeivKn6nianpyrg9EWKXD66FPUf3VaxPoYSNp2TrhcmHDygg8B5eb4S9618TSRcnTPbJ9jcTC",
  "key32": "5fsi7v2QH8Q81uFZ5YwXk3h3aYcy7Qjx67bwkFCPmJMuQMUDWRZoi2WzEsYfWqFtuYacxtkQPorRkgoSHtHQf1cP",
  "key33": "2aDmQPT9ymVr4HtpLgXBYHGxNfX4K7REG2QDZWSTtJVJM63BirGhtvzPYNw6PtXW55e4EJW81t2J5CYKWuyQHVm5",
  "key34": "2cvFCnvBS63aHnqsF82Dai9fj5t51HGUmqLRZDVmPDr1UD4Q8XKxx4VrSN4KseXDT4oHw9BBpJbF1Jk3RtajCiQ6",
  "key35": "2125hwSGgocpyRmCoQutaZ9BgxPWUduEJ4Xy4vKh38Pj6hqCiVJXSAucP9AFTDnjv4A8YrFnF4Uee8ZSQXjkEojo",
  "key36": "4bBpPtMr4DgnJp4Uy2Q3jWLb9GqfU6izz3iuzWfQ8aQZNbvBDhZkzXrfuYE17uvWUYvjfzQty6u7qnx9vinrpVp6",
  "key37": "2TD2wv25fjVURwNfweoLqWoY6goRbmS5vUEEnmVxiNu3iUCvCnDKiSXcwkeFy9zY3hVpAhTCHah2XmACBTx4EYW5",
  "key38": "5Gjv3hEZsV3fQUkbxTMyA2yYqndLhvQ1QuqWNhP3jPJ2tMPpnnyGQbo55M1DKAnvawoRtDbK5GUwKmYtjVFfwqo4",
  "key39": "TwV9aDkEVeMheQEZAb42aTjAvKysCmKDBPqFzfK1RHPMx4GAngVKLQ4LCvCDeTmpTjUsZe5My1YJU2ZJEkqmjSy",
  "key40": "5hM6eJB7N7PSECuGDbVvardpkaezQWVAjKBzh1cMzrbwD4vALDty5jhs64jGqizvPMeWwrF9C48s18ZzrssrLq4r",
  "key41": "4s9aG8DTVW3qywSHRZf6Dxf4vmtta3qwxisrGUzdykkF6LqeMSRj3iAkuvPeHtbWpDbSY75WTGgVPE6VnbF8zUyt",
  "key42": "5bnskpgoknPxPkmZrPSgoeRqcXGWghhzQZhNwR7de96VCtMkjx8bYkdgPJzyUkoxpu6xyuM1HtZS4s5xcJRKAx9G"
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
