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
    "5apqtxkee6qQxjjhbJbPdXnWXpAj8pLz6LpZa5BBpgKwWJiWEHThdofRCsAC9JU1SXpYzvGYWPyDKvxMHcUfUZ8A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26U6exbPXhPaHaXqvYa1hayJxKS7EnMdpGwm6WtQtg2nRMkMdhhjpBkw3YchGRMSpGmXnY4vuZXorFpU1qupbLtt",
  "key1": "r9vadUhxdSyhfGamnn63PQ92o2Xbw35PVMfrGwVUsd6uk8sFwNDznVhDQXDTVStFFXA63tkuVdw5VKEgw4DFw9Z",
  "key2": "5ZJV5Y7HrYM37AMHpo2kf43vRrithA68gK9G1RgywbgQXEQkf2cMTxzPzsPwmHamrjYtNB48GGqoVM2wZRGckGEi",
  "key3": "3rhpart1wmEdewqqGj5KinFwnmg43whz7JLqGPHej8YTQUtRxfYWsCMKNiiD1egc9mFq3v67iETmkfGtJYbcSEvN",
  "key4": "3awWwykM9MwxS3oqQZR7ZMmmK1WN3kFiXc9h3rJnoCqxG8MHiYmv1nVpincC1Y1Y6raMopwPCKYrN3uQqagmki5A",
  "key5": "hhPjrCcYHRmWQBYnntYf1Kszbi8jGUwtLuzkn77vqSYpMa16m3qba5asotXvXyqYPLbSxKbFhRA2SFYUNkF7mCM",
  "key6": "2NufgMFCoZKQL8Kb41XQQkWYF8vryY2cKMzytK7sKLYbywSzE8G5nnN9jEXGs7VHojGDg1Cxz1BbuuuzfGrMjjt2",
  "key7": "3ASigTvBsM2qkLCAZN342qGUwAdRAd3fgJcqgCmJEYn9SXZrKkMt8tLDb3gHr1bA2kdf1fLcW9PDHizHgek1VQYL",
  "key8": "4NsEQTSdMRorGBqW2J2y5eAyr6ZPEvv7rsRX2knJgmsPGasy4gLSc8vocxA8GtLDuKBxup78paCxCuPp1fFFn3r7",
  "key9": "3cZCQJAYz5SKe2gCDCjo24dafG546SKm5GN2dk3MKPEYvgHxm2z4piGB8zwYHgKcseoLekxaEsLEhR1JCvPAjrmb",
  "key10": "SAWe1mATAniDrjRt8Qh4fcoQGyjSLxS9ERHqNQJ7YB5DukepY56F7tmvzxWKCgAzhqPiu5eqyFnx1RuBE8QnyLd",
  "key11": "3XABWWyygtkc4XQRAtUJp4NcjGNN41FysnPZw4HNUnZvEWGEgLpHMLHjTLEzPYKV6RDXTFxPTXb3jMt7bGVcPE1i",
  "key12": "5FA5ZzHEgF8SSGhyNXMEcKtbnBeSCA1BA1BP1R41s8GvSUu2Kj7WorNdKhGBUdGwUVW25wtSVaG9D26yXWUBpwEs",
  "key13": "4o2wX2U9ijE8XJbKGFmQCJwnrHH5jvKKjaeN8LkH5ppsz3RggnCnZwYrGGvAbCZhFLVexretHg4ZzhnQtyMEZFCR",
  "key14": "bTkWHVxhTYGUCyr3furspfCQbmkjgn38r8uu7EHvKFknx2shWKdiNMgNmv7N4QNLnsmdVD6p3iSBV1sghyFgM1r",
  "key15": "4tx3wRMKmnhku8NNRYRTjQS63XLuEF8tTFpjHcJXW6Pdn4aGQnitBjSF7bmCEAhWCp3Cau9Eob1Go3XnHLFuDSaK",
  "key16": "5hXEaz9W5HkXR8io5K6TuDrHXKfAU5fXVdcJrFQd86QnaEFzRr5YUaobAXNh9mhSZT5H7knbtnahHmtiSijFj3cs",
  "key17": "bDQzM19KuECYSArXGr6TLS82QHdcKKpY3qngorkZWXFgNierZy42QK8A3MGVWYWb7oLpaf7hAEndAfb1YVVnQjL",
  "key18": "J8Rv55QuMrSqcbEbamw8KoKcAGtHp64khQR4GkTX1CEbe5Jg6NjHNUJxKFJsGN2ZRvhvmd3zaiq8NsrFBBcaSTS",
  "key19": "3z8yQueUT89wzxLACdW7pmgps7eEuXwMzcxe78HsSTNnLcYAtYcvv87QH1JK7xYJeyPvqdgtng2XNJ4CWaZQoRU6",
  "key20": "65JzXzgTzjYWCWjrSD1eMopbHESa7gmL5tHJtKmoejCVsy1nRkPZKM9DR9ggHBfqvy1bSE4r8Sqzq5be315GYhb8",
  "key21": "39UTNPfcZUMjnyKrv9xDfwpMoq5bQiGiz9RTLdRiY6ffVhbBABpTLaJTLV1N1Ar15KXJjrWTVbZPTqAaze1ygizg",
  "key22": "2mX7iehMJN5GpdTjEqps3uZj2vq9zjE8eXA5U2CqFX4nSKmaFyKrrbPZe9N5Y1czPAgrsn8Leq9LjnrjRUUksKbC",
  "key23": "CsFCMVuHsxGHitDDHo4SURDtzJ7vDFb6q5XKjKF9eE7xNVA1LT8VetMsvnPikZCUUj9vWgTLvkNQCbwgGaVkmCX",
  "key24": "jxKwg36wAB5YSQRKbvS14jzLgmotgsfsFDh3FQqt5CvQMo9RqdhEy7fsM9Wgt1uxxb44NGZt2oDoLVNW7ZzN63Z",
  "key25": "b8AX4BFGtxhqRHswUroZPpNR2FQwi8eCrJoCaC2y2cbbUSdjPxztDvRpg3TGRcZo87jgorowwq86Kokgnqfv2gh",
  "key26": "3yUmn44bF5A9TKL6Bcy1fHA86AizS2A4dd8wYa3oiGTX7YsTh8ZBWNjZwa4ftsFg4ut3Tamb5XuQV34qbiSsaPpv",
  "key27": "3k3f9BfS6g7vJYBDzXTgTA7Q8Pnr1Y3aNYNC8teqCRu1XmZt9Nk3g6FbPrQqQesYU8a3Eej4nomXQcN9WEyUffAN",
  "key28": "123StqVPdgPeucJsZVHvQHkXBSJpxH6B61Qdbe549uNMs4nTqfV6SYv2S6xFAfo4uLELW8EYoH5hrrKxPuD1gVtb",
  "key29": "4ZsqSkkaoqUAedwxCKeAkEMdZrr7MMLqUfLhMLjyqTSnTz5GnwUcSoZPmQJ5ajebEF4adgnc61JcZBSczCHYodno",
  "key30": "ootKFFhz6SAQrA4fke79udv69f8Ur881guRjwHgZtPFiDSTR23sCiysZpAGxu2osf7PDkX8jkbjmqdBEXXaGxWK",
  "key31": "5J1iDGkK6Q8iRERoUutZUvyXE5uLsRKvxzfRayBgAqiQ61WVzPTQbeboWzcLzJ4GfGV32iN6R9vzD7z41ECHYhq8",
  "key32": "77BYzVvwy3dfx1qC35TvPayM8Zw5SQVRGzsJiNAyNGeVoH2jBiCvTxQ4b6t5WcNoQqmMVA3Mm9bxrESjwFh6E2X",
  "key33": "5eRGBiqrkgJ1oZ7YfK2P8fZQfNX187Ww9ZGpRiMj5L2bZcJa6rp5jKxWQbBVA9UHybRowUPnLfgcq5Kw9V3iv3gc",
  "key34": "r9C9WgPGd76WgXsfqEaDpWvi2sYwqGU8a29qKDbQkEvBgCCY5J52tGBCCz6qkCi8umVoY9vF8qNwCfkgD45mGdz",
  "key35": "3qDMhy33ravgVLE6trVSYEm8Bsu5UtRyYspTprRHeggmNxckos4FLeSPn6fBrVpRxQNLxZagKgbBuViLK6tud41y",
  "key36": "ZZxJp2QxGoYughjhYdih3kZVPLsUYZ2Jp7mW1gF9qETkyW8UJKev9EiKpKhEfATCWySTkvC8cqXpN6ua4hsKEob",
  "key37": "4JCF84RyBFkDJnrC8rxLqzVFbFiKUJEXGfcLnQxYNdr7obBPm6rCecvSWZ3oXQ3iKuhivDQNmQMsJHRTz3dpA2Tn",
  "key38": "j6aGnDZjPuXNqa3kJ8xJjzxpfkZdz3noioVxksnjaew6z82YH3KcJy4BucrEzFbfQL6T8vQJCGTXatKU37PJzuJ",
  "key39": "3tuTuZr4aNXA9Zhv1ZGqekqiXSkXdRRTyxRMLEU9f18A4dho74vyeS9VoxVQYKZCZvny8sMbD2RyE6L3Mra6gkWh",
  "key40": "5cDNLFrdnUBRZK3SXzh5deb5Y92fn41kBv46Lwfpsgq9ZyT66N7NbZK2FEiua7nkV2A6CUdpTAcHkguTPomEWj5P",
  "key41": "5PYdxHmSYPRWUFDn6KSjUNWLAdnzmrmuro8JdCT9bwkbace4obsRjdtrAthGERc6Q7GfJtP5hk9bPLakMsK74SeM",
  "key42": "4YqWwRCHZHmPS4YnvpEnWgcBXHwAYXtGbvFByga8ppbrDkeE8qCP8wJU5zKkUPRpaJsXcEaAgjGRV6M5yuYX7i54",
  "key43": "iaMrDAcvQr4MSAbPd1ok42KQ8yVpg5NPQH55DdCXqPLZ5WvxJ73m5QaSSqMnhPwMfyn9StBBtWqALAuUsLAGXt5",
  "key44": "28Z1E5t7QXobexcmq5MC8aJdMQpcjFrokyAYG2YXN7RjLJCjVp9Puq1LaohrfSoScvYwFR5Vpv4oEz6LjqgCavzN",
  "key45": "pThU6MgfTteNVgQMErcBHyz3H5hNrJ8yDMvTQy8TCxuc3PUP3cDpxf8yE5Ci2BwRLkLwXUYZDuKKvFgyr2oDZ66",
  "key46": "26Zr5ZjdwFmwVvE5V6nJi9uxomEVSbeMXnogsf32XjtcudVNN21AyvtssXd3vYqtxnsmT7yUmGrvKGURUn7CmLxw"
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
