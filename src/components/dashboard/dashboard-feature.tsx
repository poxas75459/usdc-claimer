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
    "jQZHfLgnmqHDFcMrCEWbjCdvoWQCiUKNA9sGuo7Mdx7sinR51Nks2i9nefYz1LK3fbRxwiRxn2G4sASTkooAtgV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MbivpTkPqqC7aGk1pCjjF6SGCtzhZJaZgyEfmaKhJmGXUeCjEpjrGGM3qAvVs294btZU5gsk2wwwTtbL3JVDbFy",
  "key1": "46oxq4txtyo6iCGazDG1ngrPkeagQm8eaPGVE2TVHjx8r9FzQnCLmHvNRUqUa8m6TqHjh9QBcLDtN7GQt9TPxjXq",
  "key2": "2B6PNdDxnDRtJUeeeeFjz92SH2ioihsq5aAMXKebdKzJPMHq1LJx6F2b3xbvBAWKEtRuRTR9dyYCpJ5xdBXG15Dt",
  "key3": "5LxGMVCDMK4oYn2u9jS4SLvH72DRc7iiGYu19LWuMux5SXftF2Q125oqk1PSXEgBRitXU7YiKHSpDyHXGMqMeN3U",
  "key4": "3Y8bGphzUsHKHuEs1nTUerdZYKaMQywuWYs7udTaSa3Q9ZKkrfTNdmuEA7GDFJhouRHfkqCQ2nGaFq52cjcTAsvg",
  "key5": "RxTPbWruh5dGpnrNH3kH3D8qxZExCDYGcin9gEFS15JQeN77Nj3CsyGW6QCWQ38KFi31BuEpTgcuNkiec9Ciqgk",
  "key6": "2AiTbfbq6dakcsFGTjucjVHgKspzRLRmNgL4ybPYeXto2BHVWSQmiH4MThVWG3ocKuud4R57zRJg8Xcr2ue5y1te",
  "key7": "4oaJYB9h42RFRDQnrzjDxbo8rrVUNZBo7uQaitxqTP5fuQ9D1NMiYXCsYPB7NLSc76zJbAqLM8vvVFBB5GbaGktC",
  "key8": "5UeKSwyjsfs7eZ8C5hvxqkJ7eS6n5jLnd6sz1ifLnG7uJYtetbkf2n7TcicthaF5oL2cnKYhnczCVSNMi5gWKsP1",
  "key9": "5Tbn61bFNDKCTAhhA5aFrutamSBBKBhRwdVbmjCDCB5N8g29Uu4ZzE5t97mUYnshCri8aRkbr1ULb6QyY1SxnLMh",
  "key10": "3Jp5GnZjedd13qPUDmRpLHtiAZdi6HYpCEYYD4PWQBtCt9MEukZPj5qCRPhgyVFPLGKZtC25zPct5Uhke8xp9uCR",
  "key11": "ckK8gQmerq6BkUfzF8M4aZrm1FJet6RgTknEY2RM6moAsckmvTHYFr1Aeh7k5AgZ235bfm7pn64cSoNMbvToRba",
  "key12": "2b287DQ596FNpS4LZEuccmrNXMR5HBsF63sg6eLRcYZithHL6GHKodRxyuppr44BoNzzDRz1n9wc6mtgCgyy3W3B",
  "key13": "qx2c3WPsiivRoMN1RoWzHYP6MmTX38cPwbWezhKAcd9Zn43sfFoMYtEBnnsmcP9qUNM27QaYQjd5y27d16g74mF",
  "key14": "5Raf59co6WQv1HCgChgeQq856crX5Ji14sFD9WLEN3AnmwmiTyoowjENFoEAmJ1YDLoGDntzVAJkorpxQPb8uwUa",
  "key15": "j4L7SLT4GhvDnVeRVG1CCCvLR5kexxC5BuPnJaC5pmKToQ6gqRPw3jfyuUC2mk9MQE48TsMXBWUSjT8KRrYTzAw",
  "key16": "gDVxDYwnCjw4rNCfehjUUSbKCbNmaULW42u4gkU8QSDi36C8fYRH2U9mDvv4VPYvHQyJEaY5Yj6Dg9GQsGAVSve",
  "key17": "5wh7quqz15daJutRyfXtMJDYpiPJpwqKYrBrNBV1PX5xnvSq3grJi9gTEQBLYhxQBBkU4iP82ofsDeUVHgzzBWZu",
  "key18": "633J1k5wcPMKhWznhJKw3DzNvazfpQiG5u8SM8BB9DCg4Zy4UbNZSfZzWxTfXV6gHkUb7T5FGRjXK3KCEs92w69h",
  "key19": "5wywNNpTne5Uce65seKpeaT4U7u9qDfaDQwggG2Sf2mmCiGED8ztYh2sW1iWtjCErUa5XAPsULYwVPmJXwyCdN1s",
  "key20": "5ZyAD51UfjZxA8hBjRrG8tBaVBoS3jNdZScgG1fNHmuXoYGsEBp9CRYnUx91vRx6tksuMhc3mcSzSXRTnBTN61cB",
  "key21": "KFoGDu79pMZDvRvdVnYgq6JfGMpyNX3Zq6WojxVe3xqCMpG5BQBmtoAnLhqMw2sRGo5vZLYuByrVZ6f7n25119a",
  "key22": "3CGW3S4QEt5k96zTbWZ8mAddQyichqwN6YQdejPmzfGxvMktC26UxvQx7sd3vFzWsJ2yhXwdRCtEqeumKRx6Nd7P",
  "key23": "51nrbZz8tGvmnCsLhdTcQKz9c9eazDaVkwVSZsaiYKqLnYUSLj8EeyC2t1Rx4qWgkNyAXMWDudCefVWEcjzMUzTw",
  "key24": "29YwPDDbTjTvDVb3kAgtUrHWsm6atstEneVc8j3tbnKrx1jbxQtvxH2oWqNz2f7micTXK9SvZYpPugoNseJSQYef",
  "key25": "3v4xos1QEK9rXPhmVcxRtp5oGN27VbvF2xBETPuUMc6hqTBCc1c9yzypDopPwXHr98EqBKrwZJLNY12Y8rjTnagR",
  "key26": "2XXMVMH3P1D3feXHRuTKWWUACgpCmwr7uuiD84ZUzbYgUVNpncET3xu5UHYxfbdBxuhHHK5arckfEd3x1S7ty114",
  "key27": "2ttStzDAJciZxdREFiWw5g1JqNPnX8cpmhduvdrkZDYhmPT9EeS3kWCXSzdQkx1o1Vdo5opRD1YHTcFmFVSrGQtX",
  "key28": "5wS4RP9kLi6udBxWSfRizXydbr8EFLQeComRS99qNPbibLtadrtre4DEAnAzF13wPbRHU4zpDA5mqAWaMHJzZPRh",
  "key29": "35jyL3hMMdqgPhczSdnEe9PqWAZbmx6AF3sy7jxhHGuXdukQABwuKUQJWoFcEbyPU9G7877bYiEUx8KGVX2gm2Hs",
  "key30": "qi5xSEE8gyDicyf8RRooNNmGdhZnWGE64Kwbvc1YHVowLbEayzurERoTBCcxtdHGENjKsBJKamh4HoKhdYyEwiy",
  "key31": "3gWPadw1kSnzGZQFzW55JytWqVcDeFXKfQMRrDRwgvbjnCxJBXbuCMwpysgWo7wC2xBFHHGe7tKG2NCdx2mFoUU3",
  "key32": "2uU8U7bPtaNJ4JnJhm8d1DpfGZMVm1YNUJefJTN4mPbmikWVcyRPFxW5XiHGCDRLS9xQKbVP41CS61uckX53dbEs",
  "key33": "55m1DzRKSLydKtP7yoSSv9NNooHZi6AQp2cA5iwwPiWxNVzYkhU1CiZtSzW6mqeDnnKv4zs2F6dqq33BE9mz1cwX",
  "key34": "JV9auLDPWnVmBrp2iBqcoA8eaJSatUkPqFuPM545dscVkvrhGuA59TSWRkYCaQgB8Ey5X524GnkLucwkbFb6bDL",
  "key35": "3VrdwhPaoVnuQBgdoKMhBUV6Ey635u6vQJLaX3uB3rLkhS4YEuEY6PXfsGnZZYZufzQpTBUEyfchkCuQijwZSqHe",
  "key36": "2sHAgyrVkTnUhb9C77yXUdWhDyBoMfjQBoLnSNFU126eEMSkb3mPMTCeMcmdFkKhTQjhUAFSajymXSohzRosNsmX",
  "key37": "563Uqg5HPQutSAjPMSfnEyg6oaBApC3GVnaXcnu3M3et3pW9vj1t5KXEVYfJ6AkAfzGe6asREyxH1x8YZfQFeX6",
  "key38": "3YasgzNtAtUCWNEMMTMUaAykET4ACgSKYSoyWxeUrc4EnEq5N3vx8we7AEs2A3ZRQr5QZVz9hX5SjydAes1iA5bN",
  "key39": "3uog8pTRakVq33yBq3gs7eQGS5mSBw5TdWWgW8zwAfJVd9aVn2qLybQRsgyKC1jxEbrXtXiNtjKR4kxXDCgz7qZA",
  "key40": "5PqXMwqVR6CgG257KLfPFzngLmDtCVYWE9r3MF27AH2YexCPdAzAMLWw4NrhwGM4iWbee5EyXprDBc3RQueLGzSx",
  "key41": "J5EnXPga52kh7YJYKHVBeS3PAdBXwQj1sDWgLfCwjyqvXnipqRgSmApT3uAA5JJi1EsYxx5oFN98W1HG6dbtLtw",
  "key42": "nxQNGCHtQPvuUW9nqyU3AJDW1hyct3N9qCQmT67crKudTJUcwYvavfcG9VfJc73VW8aRV8X8fJ5aejUUBS322XE",
  "key43": "3BvwUgXi4BFUgsJa7pVryNnCZcmo1zFNyP4fkh3eYoqfH5GULuAUBTL4QpqNNBYnib3CNnteAnXoeZXdxqE2GQre",
  "key44": "36P43uTQuHo52X4bZtFS7SGoudtxr2trigTxQqHFz8aQydqTB1D9cn7D2KRKibauKM56ZqoQ42x7CdcCNUbhdT7p",
  "key45": "JCnvi1AMKf6QPtdz4P8CuyL5tTA7cPGktzeVVaRRBmWoFxpV1vQzQCz3kzFUMN3fTNLQSfWvSUddYsktZHhTK93",
  "key46": "dBKNVhSooN6MCa1x4qRyPkowkUnbw4tgMTAbNvEqMNrbyc33mRf5ygiKpbre39deBxeBLKQ2oJbrQ7qBESmgzFM",
  "key47": "qnKvD5caRmCqhuzd2nmYWt4rvhSofT3kUGTDwzaUMVVjMkx91pGMPFPvquM3sRNoCaAG7Qo3Kut4r92wWa68m9e",
  "key48": "2xBu9ZGVDMcssnWyszjLKrFgaRPJ95CtT2LfszBMhAhKAL6fATwHZfkXoVbC5sXKpdf3cSuyPNi8WeBDAypt5ME4"
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
