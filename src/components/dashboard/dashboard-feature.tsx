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
    "4mM6qzba9GpFsFpaEprCrgudwJ9XWVswvu5oZWarNGx2DerxmhmqQ5DuLia2hdaVd5KJNah8ZJgbmiA3Ay7wz4XN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kAXainSvvhReoDrHHcYi75HRuBYRGokUANSXU2XaZULDzQmDSQpXmfDuGrj1DLiyxrn6o3uLGM1Uuh6WkQuibqv",
  "key1": "2BDdqZrfh5fY3RQqPJkf4XHtKX9Qv7TxuWY35UkP1RBQ5ubkNEyiSLmLLCyJsUUyyM4GYTWjFskKZQjqmoc4WN8R",
  "key2": "4gaQadhN2YQJWMotQs1hjkyTJX2VVGEpYkUd3WXJEYGhPxtfPwkDJpgYd1iYpffZAv1ESDh6xGttdjdn7VTStqyH",
  "key3": "ZGuYZsKmmaLPFiWcFaKFtvXb22Pt2GhqYMVDV6ZPZTmrwkkbnGD9ayqwMiynp7xhG9dDbya7mWv8H9MLDZemEwg",
  "key4": "3afTQSZQtRyaqxezkLDyseB12bPBjtJ5XoqrgAhJSbkPhBkaWSuMiksnbKqUpgXu3mu7UoZtiGgHd9wQ6YJWPPgx",
  "key5": "2cDgtBvXSRQzRqthoKo9om25zRwZZcGk3L7phYUsPk7iCB13K6MHQq5vVZZCMaAUMrsqiUJN9B2wLvYd77SuWdBi",
  "key6": "5XnVhBMVqvzGAEJqZrQcPRchnR5S6NYArEZz1AR6W8iqa7heCfoyn5AiHLxDhgfazGLdgoA6a9UYjfPsvc1w7DUP",
  "key7": "4ZAXCPQ19tccejZF13xuy51B3uVc137ABYkgxrGf6qGByzVbFRhgxbzuF9nLSsgJnkzhwEmV2Qx3n6Hb62iu5F4F",
  "key8": "5k1GE8f4GdcUkkRFHzQkiKqnYJ7TGgYTK2Cpc32FTQ7Fnn6w36onA1pHNGgDcKYvak75VuCqphtBEZAfjJicrbuM",
  "key9": "4tWFvjcMsVdSHCM6MbmabG1mWUA9pEPGjtcCSduyn4dRb9zF5V1BY1bR2Ruk26U9ZhE78xhzK75sSVysK3KYrwvL",
  "key10": "4fwS9woUHB418M9vhSobRTvpphGRVgjxRQAQBpHwoCQUKo5dvPhT1w8YwuefUoJKg61ZgKeiQDRJuEh7mBtFHVJk",
  "key11": "4G4HEE1r1Uc37uQk8KxHinYYx2DEYGkseVX6trNetb1oi8jGv1JV1FDq5svVhumvLWncvNDHK23REMoyzWSeipwj",
  "key12": "913weTKnivYFyLPiPNMtjdHj4uHYomputLzkFurH2as4y6wkkdQog9pAfPaGHnCBLViVg2q4nNFk1NiVxJRfcv7",
  "key13": "2mPoBDqHuGLQA7QpQ9KbWNPiugz52SdHh7qqFNeSyuK9kFytVxbaK8Ysivx3YjNBVPkSMn9RByQMtMywofuCxeTz",
  "key14": "24reb3eF8yeFzA3gFrSseUSDEK87hgttnCdPgpgDde5UMniwP936yMuwnqU1JCfWJxwEabL7Kp2SNQG4tEBcGqBv",
  "key15": "5i6JipvRk2yH2QdiZCPtJGvypcE1eWRndNhaTxxwehMQ9ADKF1pgnw3XgMQpDJbXTq4PdL9ZqmrACJcjYKLEWagD",
  "key16": "2PphfHAGs3E8YRZkKwY8GfPyJHdMcqCne7GUiTTxPCFZAsVLkShiNs2fh3XPrizSXw24ux1vkRRKhMqpLzntNjGM",
  "key17": "2tfU46H18f12mxmoME1dfAos2v2ifurSqVMqfwzRPYWRWD3JYrzVcmrfWQeF4rKjUfbzRYFtebxtBKsqzW7M1zke",
  "key18": "38V5RKmpfsQhTJytbrsJS3x6SEnMASviA8NWfj1tJdbiwzrJ7ZUkJpn8JFrWxw9yYVL9L5re15CBNzptRF3zguhm",
  "key19": "3hhUwFRMNQbggxM6FJPAZzNgXbdN99gUfxbKpJsj32f7YXYXSu6r1ULPKUpF2V2a1bPkWLd5ESE9qLDCf7U59zRg",
  "key20": "34dda1Ukh6NHE3inbGQwVesWXUFPeu4FdMSKyw9jJrtPL7L4TE2nTwZRVFHHeMPBAZNPE4mN3q82GTwWUFSkLBYp",
  "key21": "3mpQuzhjRcV4ZYPmjYmrvAU1YMF36ip7winX11CCftgTyZksFy7xEaqPRgPfPBtwM8gZ33BtGfJm7YZkQJ94ofaT",
  "key22": "4sGAMfwyC87MN5jpBj4nG8cHZ8dvG26WnaewoTKymJcyfrz8oBqavfKcBgd8ZHSizoiNSeZpc4ouxG3hWMiPQGeX",
  "key23": "2w5C5EtvAfRgUkSgGQz9YsXhbmca3sZfSyShm2k9kJALDbwSYD9Fj6D4uWowgBWPFaZqYVw7baMtLQZ8nsArtKm8",
  "key24": "52GC2JTLS6oNEDJVhsaSfGe8EGr9vaaa3mHULzZ8M5svTmTA2Hqumts8ehUtJHFg2grwzVPUkreu4DHdh8k4wzGW",
  "key25": "2xMJg9NJG4ZNyrw1x8KUequ5hfwD4piS1xn2FvBXCjAaZTor6oX9vHvodUNXF8wMvvGHRVraUk8s9EZagvbh18QW",
  "key26": "5feH5ajBsySEKtPqwGjy63nvDNTYZmKZSnbMHDq1qPWSApKUfAByRSn34PXNRRji3tk3HzTYuZiMVwPtzM71Mhd1",
  "key27": "4Q43HK2hKKbQ4Z9aQynMRH51gz52pvenBiQiGggr815ku5Kvfqk2hfD6GMWit94bLqhkuiab12asExm14fLMbQfa"
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
