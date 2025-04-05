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
    "5A6JxL5GSzS9Fj6b5V25d8UfKXo7U1hDMdmVmRLFfeehEPwkoeoX8MX8rmEBQC2gtHBeJGaoSRbj9gD6MVUCpHDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eqP53UYCZ54enN3FPbNhNkkkvRdGLtSFy1dg5NLUwWPu31f5Fw4v2XJdy93gc6jcgKnWqf8u5U1yMdBRUpLG7Af",
  "key1": "26D1qvKFd7rCqyf2RmxsbiVqZ1xQg6yUN3qhYFFC7zkqiksaGYtVrkBoYds9pSnAxrGEBXDVm82ZQxxk2mLSsaS6",
  "key2": "3fANCuJWxwCeVnJ2jET6AiWxtFKXsTfHrXkpQw5ULTvLgYMui4QBxAJYQfe7R59W8u5o4UxqPmAu515QRAgKCsYR",
  "key3": "5imExMiQ1hHANbA7piEhyGJN37XXMfXXQGLcZw3rgns7F4EgjJ5wh56Rymex1AyK8MP6R9xZiAJwRwywA4e9VPX8",
  "key4": "4rtaCFFJg9uZ5DZterHh4EJnmQevWp7pVx1pDDPekoYM4NsBWSjE9pnJTUqpTABXW8AESHkzFmDXqodcimeTPKpU",
  "key5": "5Zfna6N2qT5PbifpAmRHi1eutjL8MNY8cJetst9ib7Ux2hVYgv1ysRxcs2u3btmC4VTiWAt5bnZpAHokVE8V46mU",
  "key6": "5MX14pmy4U3HDYtZGfZ3Mct2DcXm5stq38vP6eWD298ST7E8dYFKxvpiUTZHyjhCLyiVsRbhk7sQBgKnLSDpy4z3",
  "key7": "4RHyrzi3Q58RfL41xyvrgMZ8FeqDTU9ptHCBE6nhY5jFoZ4yxtwbTzxGVQLGBapPV9omzv82uFDKA4nHfvVNQW3B",
  "key8": "TEaSykjF2LT5ScWrbJEq57QgwWqV3kAT8zniHusnE92pXQan6q3ZTv2G5aWTNhAtfMKXVvkaTk4Bv7V39ygNs95",
  "key9": "51TxCGaHHbj6dDqmzqGkBnDiSj6LdoQ6YoRkNmRy7NDb2UBX6RcJMdNMbtN5BNSVXvR1cHLhecF5ySq7MghKVgs4",
  "key10": "2qJmU6t6XhsYfbSCPsRffjZrNtBc6XV56Jy7fn9dVne54aL4Z7tjw4BXsSsqPJnhSWuUDv9EMLb3MPAUfs61d8Z7",
  "key11": "2TvNbufaYDEUFiYWQHMZbkUWyUWPAnRdTgcqoNj7BhvS93xbivFvxM7QKT3pyMAcceT2tijKkS2xCPXEdr4s5GLG",
  "key12": "338vnXojJeENR3Rq26NRo7EQWf3sHuRV2XBTz9ZtrsiX9fWHqvupBJnP4rBvYSJD9gxpcbjSqDfUa68CorkiAYx9",
  "key13": "qrS2QyqYk3gke4UuDxAUhoQ6QZkn79SXKm7ttS3SYPAnbosLWk9SzUf8nW32xDDZeWRkQVHyjAyWoqey1Csncjd",
  "key14": "5J8ghXpzJrBdc4f5tNn58noiZhWM6dRwzaajbTvWXKf8L3GubYJ5dx3NCrLN18XYcvSF3ksSXvY4Z6MLcL5u3TVX",
  "key15": "4Hr8Vqx95xVpgRE5gK1dAjSMVX4sVvoX7QBtgoM7F89TMuK5D6hLGMgM6oixy8zxGan1ZpEcTYpxaLULrt2S9Q1C",
  "key16": "23D6ZJ7SbTNQuqd7fvG6ptos9mwc3fzhrJDE4mZHXJkKvS5PtpaDW3933W7r8H3Hs1Fhdrw7i1A2Jd9KLvvt9fXb",
  "key17": "5zQMf5bU6D2KgbmwhSYxqtjE3x8hGVkzNzmjaTpJEtTx6gxYcWF27PmKpB1aUdQefSm7phmF2osWejCbvxqCqtve",
  "key18": "5gjYjmS72hqyXpHEwUenQNQgh2XJD2DbVHSQy2ffbjradgGCCJgAi6mzxTreAF9ykLzZCw242dLRTaZpbWFVqkTp",
  "key19": "5HqDKauDxh6VukhLzPdMzWv4seX1VRQkGnFSqexRtmcVAPuC6cTtxo5YCnJJsx9GdT9K37bGs3BiSP7c6csdzKsB",
  "key20": "QYfYQ37MKKGf7tCLokCzJPV511u1abdkj5dpr1Kk44GLMGTxvmPUpMTGUZEr6kj7DZ9yyyhxHHWc2rfV8euY6ss",
  "key21": "5En53Rv8SoeyUDKABL9mMjATjDqjFzpA5Co3EujDyd6e28N1erBTrb4EWpfci7SgSYemZNFT6twFSMTXNqDfAASE",
  "key22": "4rAUJkfGFgqQS7HgQ61Wovr6AdKHsw9b4ru9QcnUUNCwVEsr9mnTWobt3v37LHAsTfZdyynEv3ZC4zZ3dQ6U2TnX",
  "key23": "4vHdqy4Vd6XxqXXfKm3639yPYFE32dddRPuv1vn2TytWohxPifSZbtMdcRwDoiRMR8wdaasn7K1bYEcEniGBhep6",
  "key24": "5QRxTj9SxC37d638nk33QS5cs5aMsUDxWma9QbDZuGdkZ5cJ3CLCCwWKugjHcAd9GWomZayJhFJEEufcxqTKqpni",
  "key25": "5xfuz5iGHgcSsYRsUByE5Yu63JotDxqfAFRhs7q2k22j2sYjtaQitLB4RWnZdvzrA3aDFs7grzjQELEyHqWy3XXS",
  "key26": "3d1aYE9cW5wx3aXVhZoazFsyAXtKSznonxLbyYypXp56nEaFEHphBXieGvvMNMima9hRGExST5xmjhvyhJ6kjxjc",
  "key27": "4ERVT4VxntKPmcMXs7nTpPLtyW1dt7Xf6Nu5kj9XWDoGeUz4XrJ27Qo1CkHyj5wZi1t5fWpzFAAcUggyJCQAowX1",
  "key28": "25zkB144pxkamGnGMFRM8fkERD2m5xWUctTFeMoYhLy7gWbvpv84VQ7g3xZTezsvyif42NbnR3xF7MGaCUogT6Vj",
  "key29": "4kKEWC7k36cPSQZp3dXfvpnqCgN3yybH6UYMuKTv4uRbCWTuXu9ZV2QdukV2hwXkj2XyANeX43MSpNTwcdiFHo5",
  "key30": "AWTks9PauRSAxcedJ8xyaW2EQg7htxrJUMEAtnGozo9S51ACaeGfdtBKgwTegUdGcZiWF6xaRY8S99i6SfAU9kv",
  "key31": "Cek4cChkDT2X6EK6RFYkdKEsnxtWYQA2QqrALvJT49qVGZ5HqiG5qwVCapjGTGVfau5RXKEFNtgEtVSrZjiHDTD",
  "key32": "3eMzyYCNhoHKsjxAtGmXHfFzwNJwCYdDLgDEFRuZYxdZTdJP2DJ9PXC9tsR6A1kpGyUH51mLQJYYym2NnQQpCPAq",
  "key33": "21uKmSQMciSCSM2hkQorfcoMd7UJFYPGXKjgHqufQhxsTFNrybTWsAR6muMYzJ9tzHGjTWroda8YsbqnPensb4gJ",
  "key34": "2b5Qvastrvcgbu9AG8mfNWDxshVB1Z4eMvuxiUg2kczEAve74T83MzmGY5V4gjvRTtocWhN7WiyRB6dHZPga1cMB"
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
