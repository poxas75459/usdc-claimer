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
    "4Tbm1wNY9JyJ25sBMbNW379ZCPjTwWaXrwa8JHnCwnAEeFAZN7tr7pEkuTau2TBMSh9rTR4jLGQ5uDNs1tU2iwog"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54mfmSW6bmXDDk8aJ6fccpAJk8GGKWYiLyVZsFiiZpeiFZ8WTAL76ojgCv8UmEwcbUtdzi7YNuJZ9nC5ki9st3Co",
  "key1": "tiDPbjGjK6R3d5Hbss7DU5WQ8XQd8x71aaC9wKGd6aMhvC8nq6BcMn1T5qUC9Y84UaPR2HPwKhiFvwffeUuCFRm",
  "key2": "3ixr1Q2SPrmyH7r6dhE1VAUjYv5AyNTs99Jm6tGgypuX57yaWifZsJmWitxZswQmrhq96kCN1ADCQyt7Gf1DMtoP",
  "key3": "4cUF2u4wdzyoLmusNfHPV93gDaphc2Nwn8YJWGpEHx36X78CWSGfouF2YjD5p3DHSUf8jJsAPBhuGVLKaGFCrU2r",
  "key4": "2YcUEdK43t43hKkKGeA4Sm8WaPnqk5iHdpc5y3nL48MFdQHCvB7D1mfxTNycqLp63xY8k7W86t2equofq8AGEpVV",
  "key5": "4pffc4GWM5uw1G2AMbKb6b5eSJkcE6R4ctj5V6wLLvnozp22c687uwB4CevX6qZc6e4H8mLQh15tQHzAg5vZYKgt",
  "key6": "Jz5TD8Veb9T8FanViongePv1G6uwHU8vPxFHHJQLNBUN9qza45grkwwm1ZW6hrneivcpxW7uR963mA9HYgy1FUS",
  "key7": "EWWe3RpDnmsR6n4VutXPdXuYN7JmmBR86WpSBXjq8jjNtcGKFAXnG6nKkAgdS6AUYATU92F9zk9JNcrHtzYXwCw",
  "key8": "39UmAKc2FfUPmVng6XqowJuqN4ZwKBeT5nsTGXYCPEAEm1SG28x63ejd1mzKRvZiEus1hHs3Fg9kQKPpZdxms9yL",
  "key9": "2f4M5FGgjvPrbKyHxLeL77DVPsLGeBkrb8oGCPQwquJZv4gwvqwLivPsgd7AGYtvTJGXW5zz3DDhKp7xJXK8Y8i9",
  "key10": "3c5sD2xice8mh9zJzyUi588tEDg2FGWDxqSGqwNw6nybAH42ywzZd8exzPwXbfefMxEWm5v1AoEJtvCDRXfnrM9k",
  "key11": "3HiKvB2F7sBFxUKnxfdu3eGnMbsYCyKoKNrU3GaeunSLhpUASexaZYJGFynebDbZ6Qef1RereCdRBVZoAuEgWtY5",
  "key12": "5b8eEHRLbnPBT8U8o1nF6jJvYtT2fS3sN6ysCdBQAUpCGNZAh6ZhoELL9nKMRXbqBtf9QtpjRMDLxFoefsjGGN6m",
  "key13": "QfGgEspLLBghHd6fmhf6mUEJkXvadm6iZmuBmUykNWJggAk9dmPfbScUvBr7431q7ZiXsHEYxtdAbVuk7kCZaD2",
  "key14": "2ntPgDRmRhRb9T4jFrNZ9VUUxL8zkrXg5GEhVRBRraEWjz3RsJsTJGr5hYFx4ZZWAXznsxKs6eP5TPx9H5bBrCW9",
  "key15": "5k3gPoPhVoKU7gepJi6jESQ5HdZ5MP9qhotoio27DBEpnw4iUysg8jdkCiNZwHrWAqBUxPaKK7jNsRFSQL3E4jDt",
  "key16": "2MShGtq6B3reFQEDUPKzq9jW7UrpZpptBWcX79HCQunXaLvFpG1FZigwbafcwf157vMMaNMkCix61G819wY9Nfwv",
  "key17": "4vDbtj7TFvjLa48UUQGdvLaW3z1MeWietmhUFWU9QEGeUUXWb3L67Khisc6k1abhuUPGT8fcnUXggf7iYBPuft2e",
  "key18": "3B1pSQdKXjr6nL9Stx4WuKHtyDfQs3q6V4kXn7hr1M3sXn1hwyQFaYYV6DuwyetaYdSGSuoApTRKefK9kevMHhpt",
  "key19": "3rpSWDSB8pFx5yu987ubbkuhgGb6qcHSiFAjmuWGetXwJYWrUZBm7ySRjumYrAS5TjWVjyysfLp1WMSnaRQkg2Zt",
  "key20": "2kc2eviYG4yVkCecgn6QkHTpc3d3sPDnYPczAxAeTt8wbHiqRqjTunw6H97hdcjbQT3DKnTbUTdx3ZFk5npAnE1i",
  "key21": "zh9jR34AxeZuHxb2KQqSJmenPSN2VxpzpLzVXULyD7vuyvX8xdV2dxxTLxh143teFqinPngrXz4r2NZihYcG1Zu",
  "key22": "5ZwLy1MhhPSDpjmf9PPzYPttqkEsPtBXyUQgLXpR5ZavFsM1XqMszzxpNv3yiNo8P9eehEv5jd9dbsDYsTvG7vA4",
  "key23": "2JPVceGxMyBH2jCZKAXswypHnzRrGGSQKqhfkUQehd5LJmW5TNM9YaoJgRdgUa6wng9MUbRfkCU9By862kNrSWY6",
  "key24": "41aRzu5xXvS38BMeDKygMsnT4MciPV7c1XeZMQzUVfTkojm7KvpR3kdZppsv9SegPrcrh5QYJVRg5b259PdSzgzX",
  "key25": "UPVnrbqU6bfhASkhFLt8ude3zqkgvPBCv7TJbUYPxXnnYxDcDeqaMJUpcWdnY3r4EpUto9tPkg8VYrTzsBYZ8T2",
  "key26": "3pm1ARF5f8TExV6BxMY75XSvRwE8y3x7ze5t1PYey3sDYex5NdZ6R2hRT6VVfnC6MkdhYYw5a3FjJ13kzbZWCsXR",
  "key27": "3CfC7MLAwcuZoVw6hrXSGm97yq8gdGqKHtWqtL9SsNhMVaFTBKLXwMtDmycZS8z7QPDABQfmj1MRH4Uz4eqcVFgC",
  "key28": "2GdemasnmK21eB86eVq7GoMz3sKMJqJFKVyzSH41Mhu4xGLVLVuh8HRGH4oeU5ZjeA7exyJzooa49YPLrpMTszmN",
  "key29": "4uswLaTbLGQ4AzFAsoqKzn9rTqQ9ZFjr82yLu2pjfcozzoueCVNPZT7bEmc38Ayworn72tFKKuL7FQdhpGV4hkKz",
  "key30": "4PQsuym3j6i5v6PnfribGarzYmj3QBCKjYmKgf4hgBhcWZRSykboMYTKajWDYwcqpQwuao3WfwXpCZZx8sPWiYDG",
  "key31": "2CQfQw4Mcm6fBXZzyCYo8coBoxkmWX41bkS8uaPU6gSR6eQ1K2qm6FKL1hhg1hTtkSx1tkwk3bM3DJBfn6c2hzgD",
  "key32": "38D9qmZmKKdtBp8iLmMZZyrqVRHC1Egu7AaiVqDHV4PopPgt8QkKw7rzMkiSg1PquxqsVX1zPrYH6EQdGeV1xXrF",
  "key33": "4jxqAwG1U13zU9azsiq218JUHUad2aLYdGEkMK7qB5AWnfrW4izMq1ZLZNRttvQdamTY1yQ2BAN96aSxy6atdEuW",
  "key34": "3bJd4oGCXSdy3pH7i2xSeKYq5qxJspYh3EAuRzuPH1Q5Pmw6LA8h2Lug4TbVFKmDfCr7d1XiHMAvTLr1QgMSsgjq",
  "key35": "2UkhWtdRhdZUYqZm2igw1RPR6KokGkgoPmVgzuDuPDD9tcb3JThcd5d63tExxLaeoLc32TXt1UiNhCdab6AUPh1R",
  "key36": "2PiLoPa4C1yTJM7ZfyZCTCk1aSjjSf4MHx4cY9XdeysRkLwRCuybegmX17Np6dQF41cEptyCot3L8EByBc891WTc",
  "key37": "3FUU3TruExVqgGtVzqPW8iVS7g27hp4685Gr78u2aZKPYrXhRKRNMfR4v1TvW1dmmPuVceBQMdUx89AQ5zZknzXR",
  "key38": "5RZxPmJugBRMVkFRmJaeDoBGk1rzg5TDorLFQqrsHxmeU4mYucxcjQfeLz4qC9BjfQy7Jqir6RfZ6eWSfREao5ck",
  "key39": "4GDCjn6o31xAvHr9ECDUffX7Lu8KtN1p7FkTrq4q8NErfbLPvKu5WSnSAHjHeGTX3RHgf5gbgoktB92S5pu9jr7o"
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
