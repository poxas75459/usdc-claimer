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
    "2fiKdsoczWoH6JSwxJj2HEPvK5iswiaqjRQ83T45AzJiu5CNNVAvgajydoURympCekP8yMDi23xf7EEhKBucvd51"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QnGXfydajdxoTWNj8fxzYSRYiiLE7WWfEzJxWjmzhbSUrCc7Qf3y9SWT8dhVpy6QX1jcxtXdtUUBrjmk6S8JWMW",
  "key1": "3YRz2Ec5HUTQcZ4AViYoAUkC1BPUkMbPuh7u9uaPgZJWrw7moapPs5QpWCXXXp4Evj4STGLxpwJo8hQsNgM71MeN",
  "key2": "4uLLyVKTjRhHEBgM7oyo83eH3fFSYhxTbjZxcYDioy3CJS4HsdwMGx3kE8BZSQfUmP2UDrhWQjbybAYJKD17arKr",
  "key3": "3wrTTvsQuXzyARHuZeW9QakX6F96t4YcxFPMZGMXEFSncZ2DM2dvMj8RLD2YkJFpY2RRY9ubDxJZa8XzogfsPdzc",
  "key4": "5eeK6ak7MV6YL3goGefu2CFi73Yieq66QpVsoMwgxX2JWCFam5ZgnJGYUmwDGEXa3aRKuwVjCxUyC3XxfXh28SsJ",
  "key5": "27MBe1J4S4nXuM88xJxAbxDm5hrxbeF4ZzpeFEXFZ9ujN4CKntnCiEFEmQjg3QeHA3u1Vtpkh45q3tNiHAQ5LjTV",
  "key6": "2mLxHVbC32e7TbVhoweK3KAoovCoCAhZAQAEaCqymsEP3Xx1iqFLFVpkzZ3Gb1coGcyFC2xJkZbqpk2BVKNwRYiW",
  "key7": "3J7RsQyRJHNeRTmQTUPc2bdr87FwEjsgfBiQunn38pAVh8k1sz9Ftvu5WLRyXfxNrk73h5ZQhfDsSmdxCLYAZ5xb",
  "key8": "HAgDRMvDGf3LZvATHbboFcwAD6AzBCHo3MS29aBK3rzGEBP2yj42GHgdQ4JDUt9LuFxwzYxGR4XTmy17QD43pdv",
  "key9": "25mRgZMMhah262DTNnENQdJZvfT29PyWBh6meko89EsA9cyUbA9oLLnBT669te1G39JBw6Et4MjCHwdDbxroLuQf",
  "key10": "3JJPzQZwCcMWbfM1QpsZT9sTuEnF8ecKFteiSq1z7w27EbxnurBGf6kas6qT5b2LcngUqAQVBX2gsow4f6CXvTKc",
  "key11": "5umALdzpmRaWj8bLxJGk9rWvqoH1WF9yPnAXbjuGGFSg3qt82zVPva4PTJtLNhr64hoPmZvn4EEV9x3nL3Tn369G",
  "key12": "3yDnznBrt7intUyWbQF28MAK69r9rSp7zEdTnzP84HKRiqLSYZJ3paNJBKLg5yH7BagSZhuB83qXP45uacWqqopZ",
  "key13": "pQwQYVG3qLENB2UxJAEBGnYYwZwBjqwDCKD6esjsKep9zob4TUqxtd5KVmrWjPH7tadhHkhsGzviK3A3zTUBcpn",
  "key14": "5XYTXB911fzbFUDJCJwrrqJGibbkVVQDKeK1Unc3ScTW6ZDBC6cQdFXzDpP9EqyswbW4hTcnfhC7YvHQt4xL7XZV",
  "key15": "QedwmQvjU7BQk1o9u72jPpwyvbtYCRByvKDndrdQxB5pfmSVxvSpAVXi7bU8dRCmK9RFmN5J69PquNkc98hQEvG",
  "key16": "21Kz93MbyDHc4S4sV1AupfvKRGcNzy8qMGMygYBaxdJmdN7sBbF8ouZ7jmginmqqrmsrj9YuCAWEASkprW51yUPE",
  "key17": "5UHEv6bRByW1YVuLuL8YTGYx2vJxjtcQZkjcHqCymjnNfh7uTHG8WC8chccYP9vfaUha5VFQfnDQpTCE76WKsxd3",
  "key18": "4xMiyDWg2oGc3LP2fTiP97eQrkd8XWqbrXt6sKcTGDBn9HEuPUWyhtRHD8KsrYzPm8Uke7e9jGbqNzzrqz8XUkfY",
  "key19": "5UQCrQyLmBfWgdqSEG5uF5R1kmpHonF58zrYB8i9XQ8oSNGgEtXLypekM6DhNKTYvjWrM8aB4tGvTB23Z17a5KBz",
  "key20": "2ZBvRYV4XVwvKYAAV5GMESZ3k9bwQNdMgJbQJgjoPN8DgxGefqAHD3bPopCvYfCGz7LKaQTA11dJnGQPkan1gs1i",
  "key21": "5BLSBDPwGBSViqyhZ7vu69GuPeLmHFf4drP2LuTk5JvEyURFr8x4uHiQjU621RC9MQ9bGS3jLPR2NvfQYZEH5E51",
  "key22": "3hiGvrX2HjPVMLTu9PMHagNGgDkQtXpVWt6xjF9Dn88VMjqMCKjAPtM7zqdLwUvibVS3iXjhQJPAhF6dFo56xSaU",
  "key23": "cbY1Rd88GX4EzX96m7rC5cXoHCDL5ryyE2cFD4jswuKfH5Rvgerp1YzuXY4wbbBNbSzFGEWVSczHA8VVheujNza",
  "key24": "4xRvZWMGvhqKoKzYUDuyReLCwD4qrEHYwobK5H4tTzY5crEWGMCBycQdp4ZPZ1uLiaXzBa59a7ZU5WxehNUKHp5x",
  "key25": "44K9TdvTARRfamz7uD4uMsb2U5HheowfW3Cf4v5R3h1uuJdmBjx6Xhr6arL5KnkVdU7bvdRatfiQdtFgUXsymfP8",
  "key26": "2LCPafXmLrnkwP8k8x8xmjbtnNoFXcAw9M8bEGSXRLc6K4KDznPdQkp4adzANQqvumSDVDaLdcTjotWpGNdnCMe",
  "key27": "2mUk1ydcj6PfwQ28s8BRFkCfCyja45obAjMDLrnKE6XwMGH7xDc11qRfFi78uAY8roqMzkSRULeh3gbhBJFcZvPy",
  "key28": "3ZumemjcDeBrPy92vB9t2rqg1B8gxKm7xTm3y92GTrofEXBX9C2QZugA6GmqD5X56LVGoRLjdHWFpvv4bw4KKtU",
  "key29": "43TCKP3nb1AeD7dYcFHK94idmUKHuRjvRdquSD2nCH5J6r6TrmEya5akz8ria43bDDFy21roxabqAsjbdYZyhzvn",
  "key30": "5VNZ1qvWSTNBFtYjzf4r5sraWhtsmnjctabvVDr5FqnF79MLAtgiyKsVac4KxVkKWi29z8Hd9zy8BVHGPKGH2YVQ",
  "key31": "3Wk3ruEiXoCKn245SpWfVqe1f8jXy7rLwPz179PoB1xkWj68wMwPzTpUdUzLysEvcQr4w1xBwFvYMUNEyLHrEC4g",
  "key32": "4YAxwDHK75nPShV7QtRrEy55hPDbbxakF3oHM4Xhi7i9Eh5ipnurq4f5rRmZEy4iCDAdFHxKPYK567RTRJC9bcBW",
  "key33": "ieePhJsfxhh9biKj8ttf8bZVfBYUYfqYYnj4MgBU69ssms9QtUc5qvNPviG9TiVhAwLJBD8KgzTw4GNfLLmyoqE",
  "key34": "2kqYZfZE7vKu3F595S4hi9PGPeWWcDCifdxpezoDhe7GdQwLxjoxQNuPJhKWYmLrTs8NeMYjpygBoFwePyr2Bng3",
  "key35": "zNbdhPX6RGfRzH2LMF2pGpPaKXPwY2tLfcB3oDTCC8SDWbv7ffg3oZWgxkSb6Q2NMBv9H4ctyLYQg2QQWgUiVmA",
  "key36": "3wu6ui5bWgDUNCNYS1b2MSyT9cqA9QY9SFN7xfxxrdui11u2hf3Jb474tqSiHkTz3xt9FT53Ra9QCKZgLhgwTvEy",
  "key37": "5eeTP2P9AS4LVtDQSz1bEUt43VUHvCGzqrDVpmXtbyYqWKCBb2vY4XiyKipZnWFvas1TyH2L6qU7v71oMd3syzty",
  "key38": "REdTmet1cEyVKMQ5PchyWnYV62yFg8q7FFpkrK4hdNuM7jT2RBM6zWRrmQwWer6bbxXsHygatvkQJSJGXc97pRz",
  "key39": "5zq5Vg2qyRWM5jzFknE5ZpDEpuszrtVap6bbcAiLhn5goXpwUBkoiTzoCaup3BLQwZG7eyEs4xapTzcxog5DyVF4",
  "key40": "3F6hk3Z4ZMV3Ai9BLB9K7YsgDmLGejXKb7rCaHsdBhJVeNixCPuroCdnscnubUVeuMKYGyABjgeTsKPfnfpuKz3c",
  "key41": "2XFVTjdHzM6e9sLJsoQeDfuTxJhhGCjurWK6DWijFkBajFpUEg33iZQUCfF5PMMYSac5ZEXfN19XwGxP9u2juHba",
  "key42": "5Q3gMvhPVqZVvRXy6aa4xcaqeKj3YrvWtJFChbAMbp1oJU9Yh4gu31CvrUc2iWTvgPm8took8NV7MD5TjuvTs6u3",
  "key43": "4m5RB7MWwjk1XUhvqYJEsrv5hopEZLhzm6VUCAbLxkoW4p14J7MAvTmUonAHmMxSReqfzm67PQaCk5mrqcBpfh5Y",
  "key44": "5xSAneZmQXCAatUSkQayfxXkZ2qfiYSAktbmVUMuN71g5TQ1hNjUpQqjYoq3FkFLBD84BCsDhWvQeWvw4uqqrhc4",
  "key45": "5kBNBjfEfn3P9YR5PuxfVqQS1k1261Jxba1ezwiYGXygBcNTJna9XFfEmKPd5M6p2VhwC58eJc7UmcviL89aTF5T",
  "key46": "kRaugvHuXV8UVmDHPbku5aG3gokLmyNnoTfsAiFSru8SgyBDdNRUen9v7EoqNQ5GYibwR44YbbJqnnKXER6z4aH",
  "key47": "3piA2jzjr8k5KtsN4kixnxquaATaDYQ15Roxy4gsmf7qwYSDMaqdusGS8vca9cWLAutzvgWPdqBU5SeUJF6Gi5Bq"
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
