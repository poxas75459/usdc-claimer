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
    "uCaPJGHi67FrnT1nAhvZcvqfjjeLMyQPxaw6LPJfXymbu31syCRzfAScALcgffBo7FCYQn2F2G8L7sfAKvvLLhD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EuVPHCykrRBqRL5qDCSEvNJoTxdJaKWSiq86r6YAnqeUUbhVe6yqTsztrjNcXKg5V7b2WxfBMTmksCagHaSDgq2",
  "key1": "AwkVjBaiMfxTdLj3Qfj488hqTkoog1UVnVBQTCAo9XH9BrxEmMdG5CuJehr36LA7wYRrheA9epsqsGFrfmXjY13",
  "key2": "MRPT6BpjyZeXWqVnMSToj16XSBiziGuZvBokwzFyD2gKRgquMCEQpgJ99V7H3BGNw5k5e7UajDP7JTzz4fg57wT",
  "key3": "3mhFfo9SdK87WE5GZJaS9kZuTwSo91HwkvW5FYbVwB4ZQ4m45niC2QVRoG5DQH6WKdJNEVkvX13MmnWx8NYJVkf1",
  "key4": "2RnmsckmGeG5BfBnuYd5kZqaFqd2FTBeVbTSb1bTyXjso2gpNxJmhXGFakrtA3wb2jFsKWycqAkZFBtbgZN4RWT3",
  "key5": "U5NfcZRcHodSWRe1BEwFXPjMAA69wcBoXHAxsc3Hu4H1fJPWiuxy2wYsbDg8saEqhzaEFnEUnvEvdx7eMWQVH1H",
  "key6": "yWe2Kc4VabemYa6AQUeeDYRb5regdcS2MV9Zy67Der9pVgfcTxpcHsu4UNnmpuAnxj9uPbQCq9mpYH2pAro6UXp",
  "key7": "3XJ3tf7dGTqVRBhT6WPF99hBFGZmYbWqtVCczsGw2y4dzQatbEHL6j397H5fmDtsqGe1EqDMi6o8rgJb92vZFfxF",
  "key8": "3iW8iEFF1umnYo1Y6T1QWJs3EV68sdhQiFXbxbo2QyaHazMANS6rzGg9r2HipWcSsCqpShreoBymYda6VgBeKdnc",
  "key9": "2cqtVmixngLNErVp12rFesW4F1pPvRvY17vG6WCvyTWFvcYae5X2aQ7wd1H3i5Rwe1in4rx6XqB3Bsi3pnEquiMg",
  "key10": "5RUdfTGFbW9XSgSbxFrFc7UXvxVM4YJB7F95TZSYoKjXzJEirhSCR1bQpd1KEH4QNj4u5UvJu8bNv2bVSsyuw1LU",
  "key11": "2YdeQLSRAAbc9M3ME2w8pp1Xs9oYUghMFCogHhBeLpom5w15UsTthhPTcbuVJN1UPKjjWfJRt6fnecEombEcbHEy",
  "key12": "CnonqyhHyLmv2GE7nfU2DBDy3okTNgtpdHaWXLVYADfMuPTRXzWdiKbFzYpRXVfE7paUgCyeRkcyUBtkW7LSpsi",
  "key13": "2avoB5UxVomnWEBZQK3v293BEAaYJFHG7fWvudMUzu1xhqZ2hqjrctu99qpWtz99Cnsw6UGLNXMwRNHxAa3dEvzi",
  "key14": "X1YXVp2eyoNEo7Crn4dQDzWxiyLYkP7G5uiAE5HWgpCHdvdzW2tVYM71GkSZw9EJgU3Tvi88pgb6uwkfPYg8E9S",
  "key15": "3jcaDZaiNaZNmysvBFuSsnsvaJMNm7bSUuSFdaTWL3rApbow7SJThyc7vzk4PMSLcY8Zyxfbw2Ho7HtYGJcxoqmf",
  "key16": "vX4FYYWS448PdgaC9j7qJYusWeWbq1LcUt2i3KUrcT2fjKiiK23hw2Ca9judUbg5m3ymXB4cNS81MSWDSE1pm54",
  "key17": "4QdbtN2GpHkMGtPyH35bWBtohZqQQqRFaVzrHnPw85Ktm5WrQxDkb3MHgPYiTDQMvTD9vcWiHYwinjmthci7Ar1X",
  "key18": "4NpH3JNZcA1gfQvrtfmCXrS3bDxjyRiajFz7Ba34XnYfUhME9ZnBPPmDjUj8X9JBWQ274eE272jTSqe1myGsSFjq",
  "key19": "YXoyssJ4RBxtGCS1kZxiaiikeGwrDWnJo6Vw51Tfaiteqr2pBXQUvAjxY9YcEqAza2P9cobuqyAoZRLbjmMNF5T",
  "key20": "5kHobShX5VAC25YmF1UrrT4iWWMb7h3fY9jS9CG45YvoYvFjUb4ycftxwyd9DVLAeUnoTuHDDji6UJ2mJnVxWTQp",
  "key21": "47K2HjU8fUaxCKWHdruuxKhSAvmA2kGHghzwgjwvYpVD6SU1nvjScetTsnvmpxK5vhjvVk2A3bSZNDKDQHx4bMuC",
  "key22": "4WZVQK8cEiZBVnLqXWhU4efDPnKo7sUFgxHZSqtVpnWWcaNDqdxc9mhEStYCpeH1qrpkrcdH5j2PEmeCpgEdE1BJ",
  "key23": "4VqarBgqHcs1AYUiKGooPmh84KxKhvCM7iwpYXCZs2WWfDL7UASHahYb2JCMYjm3a5Wn2ThYFcM3ApUerUAGhnLF",
  "key24": "4Uj23hzVCdJ86B6vMGUbp77yFh1o5fux9Ggp8TRsQd7PujxSPsxbEEw7HwJZSJxQoNHYd27hX2JD2zpGSuwcAvuM",
  "key25": "2uig9QPjLHPtV5SxNXoEmQ5g9J9icZmE7P159HDDFPAYHbP6WxpdFWBXXPgydrHTMgBJNoRvco7okPzHe53LNVX2"
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
