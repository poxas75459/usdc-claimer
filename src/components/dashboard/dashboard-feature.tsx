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
    "5L2thMJXwmWr5K8oZXtpmdRJJ7M5pfpFBjosd4vrebmo47kthiBPpVe2gf57GyDDMMV6CpArpLStoaMKgwrJL8Ac"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mYejGQpUiF5PZQH8ZY3bwH7WmQ2yXdUL7KTB5gf5ba81dfVukmCMQzmbeYWUjZG5QyxFAC1ag2XZmxvfnXDFU16",
  "key1": "aV72qgF9Fvk2y5QaVq1BKxgA6Rj2yGsyDXPeqzVY5VnunKkT3qDPqfPjE21ui9yaigDLf64vfH4HGHeBaHC91th",
  "key2": "ZdS1wDreuCmBcLosvEdnStC4WKs5oMZn9dYwFAnnCjv8bUufbB6vAxt5zpu7G17nW2dHRqtnKpoWT4FzJbqKfNi",
  "key3": "3s7qaPrAzozqdQUyjt5iLtFDMizg2QXKEkmAj14ueXxuPqMwzBHPPK12LeVdJjaVFQLSZNyxyroJ4mDpecM125Jd",
  "key4": "546zq8T3xbvuYYiCSaiQ2QyynYD56fhnF3e8tKYvBcVagdd6Z5fp9asuSf4V6dtLxRw65u7LW7S5pbkN2F9etg2g",
  "key5": "a7EC2onNahNR9SerfQchwXyUw78B6fNoc7ts8dp2hqMBB3A6YChgT5HpiwCsNmQXBG52F6wKE52R3SuBhrfc9Wi",
  "key6": "5o6qfNb3VE1KGicMULqAjZZTpnpF8jLteeUDFMRJjHL35ccjZ1RSerPz5DgFV3iekWs3BSBcxPP7rNiqgjBydEvu",
  "key7": "3Agd1MgB8URahj8SuZwpRM7ykYqFuBeFmwBLd2eGzK5ddxTudcwsjniSn5ckE3qbBDCF2hxyQgS3nGb8GHtN6GPY",
  "key8": "4CzZRMrsJZctFEyA4G51KxSiJfqRtoDxwTYMtRAjHL355aQjr7UgjNjpTYefi7kQ8nnytLECiUJYRnymd83Au6RV",
  "key9": "5nevUCYwM4CgaM2mECuF2WzeJwKBUpe19872UAwzwVCgNDu9yfSNszfTp5N8wf3PunmjBAwo9XHsnGHfoaNZcjzh",
  "key10": "2BzW9SX96zSHkhiznpK5egpQ8h1LzJZBamuaEQ3WkR8vFdjWMFpFgxRUWxFEUejK934e9XUsdwcbwYTRmk6LfzEW",
  "key11": "2GmmtkoQbSLLXyGFiW7y4iL4UbEuQGoQbgPX2MDkSLULhLwEB8aReAqkRnqhiMtm4CvfuqjrbREGwYXwiTAmmNkr",
  "key12": "XFBmRcJfadTctn2DsnbQjxprZQU2rmfCJF5r9ZuQYsXW7P12gnB21bRM6Ue6TCBK7pRG9tDkZCzAVHYNxnqtzQK",
  "key13": "2AqWeyamHF3xGuF3ALrgTJMAQVibVDPoDVorov8M3J78cphhVmHAQqWFe3BAttb45NgQf62rBSWADQ4X6ZB2BXks",
  "key14": "3jE428VwMr55V4RLW3bBpzvsaCsXPToNdHLMGTeVgKj34tbQ6kdE9ZVXT3hByDQ2ETSzTb4nqdnu1QmJr9pxAfFg",
  "key15": "ejnuhWYVp2VB6mgxD8gXN6NJgVhAzbZ21Lp87jTqkdb5mZx7DDkqpNxvf5g5LnadxFUZfrR45UofvPwXN1D9jnE",
  "key16": "5EuECY2cWHMs7fuCdGvtP64Kn4MJerZ4f8mzxNgDqc63PftXui4RkiF9QQ46x8cahVnwvgYMRyZXegzzshWoHRrj",
  "key17": "3Vv56ZFRvBLSjT4BQx6NQATvcDr771yPaqcSNmaWMREm3EwbWoME2AkG4jpnNkfJFoKaJdWhRy1o3NHXvZsoRS1V",
  "key18": "56JYHoqj6V7zgewzuXi5ErSBtYLYeAJnXNLGbYFmNum29578t1mzHpRyYTrYbnhd2kJRekCPL16dJx3U6Vqx9gDc",
  "key19": "5YFAiPqjX8wL5GgExMhfAkUCxvVse2cJv2q4Pcoh6aGGGBSERS53TMjFbSRYs5jiev19i2WBuNPWc4TDNPC7Eb89",
  "key20": "UayMDsuthMn9GXNQvUan2qHKHTG9BHZ3q5E6oJ9mYfvTxGbMd3qe7ac8PtvTvWW9TuRuWegaFhqR1WbheUh4muD",
  "key21": "3VpbQn6fWom1wZqaf9E53G1SEMU8mCH55FSB7oZxN1uh3nUM6BrT3JZwPR7VMkPYr2EUAbxGEyyqf4q6SGwec7aW",
  "key22": "4ANm53iqcGxvKVfn77TRUe5mE6kdG5v5BEkG5eJsQGfD7FgMQMju2qqrKnpPk28kwfymYZPEwF8uKyeeKUyvTsAj",
  "key23": "JB7fbQsaXWQr9QMNQhK4UrPisbMNVq4zMPEQBnuGPKyv9Hw3Y4wdZSx1vxdDNAo8x6vkRmAkmJxPCvvw3fLrvxd",
  "key24": "2vq2jTM4spxkJGBDCDzPabciSknPKAtokoa77zrEaq3Kr6md5MCZXsrdeSyaU7VuGF5wPzWch3uXU5TyKg6mfC7q",
  "key25": "43hnREM5Fs7V283hjxvMddWshQV2X7ZMUoX7hCK6Gh7xdWFVFCwYRvDsDQkJYGYXP7jT7rxKKCrztXQ8c8jgfjwA",
  "key26": "4aVtm1gnzkdvDkCAFhTKrS4waEH5b7vJegQYQHWYesU3zHQ5KgY3mhZSBfSjz2NHUT7557MCFnEK9d8TE97XLnN7"
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
