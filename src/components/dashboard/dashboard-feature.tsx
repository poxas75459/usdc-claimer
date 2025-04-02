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
    "4v3kKf2RGZxpY2vnjoM1rrPJTHUmkcMwkZLNnHutyVr9MJDgQHYhopbmDSBRXdx2nJUM7eUb3AccYDvfjCbL5kVG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KJjPg1RXJ2ijUamPtms3RdsdZPxV9vVTEzRyYwCFh1nAVKytuCwHP1GnwM4EiK38pTyDoa43gCkMfr4dF2t9KCQ",
  "key1": "REcuiKXnCjLbbQHh6BP7BgL7e1Zw6BE4SRBgdvDMBh24LoWWhx21n2XaXnNvtPkjUcuA1JrnGNwnbcT4QJd5Lht",
  "key2": "36LxH787khc3k9scBQRogoVgQoi8bAfgRBV2dsV1jfdVC8XRUXJFQaAoeCE9UZPNZbmqa8yUotqTmj61frqEk94s",
  "key3": "3cBM7U3XiWf68wM85q61u5H2XccC7vzabbSjtxzWqCAT14gRiURFMqTXhHLEfyVM9HhoPEVFLziAnPV4gwpCKq9z",
  "key4": "5BYd65jkg6Hj6HDMEqhGTd4fozYRgoKdzBEijGoeHrq3VweWHc4zZTCQALUnK6ss714kunkhvYeoz55nY8CeZ1qS",
  "key5": "3vdZAWPc4jxwneThwsAJCsmFsLRXkYYKKrqwASCeJ6kKuxkuzsYNgCr8kYwTs8QnCKTc9UeqeEaFqKHWTDz2nZqX",
  "key6": "54cY9H5s29h1EjSkSPghSXUVmEU91UvxE5xX63owDTnmd95zzyTRC9LeQ3iGjjF4qEdSYmPqg9M8Yq7S5iajh7AN",
  "key7": "54dnvnQtSdGtMtU5gyT6WL3jyxaKN5hTEMSTn3pH3WpCgcHxYL2bN4HVUWWqPdA17kTFzi8AV1SWbgHYqMKUse4s",
  "key8": "5LJtyjGtnzzbEeHQrK9n9Kqwr5ixWih6wEJ5Ts5LE18MQP1SxbMSA61G6rpomHu5zawzkkCmTF754MLCfVLC1Jo9",
  "key9": "4xsUy2XB6kTemiX5uk2dy6JxDLkbnewcj58YB7M1jnYonqo5J6Rw7fZ8mLGBBSNpyonkgXEV1KdnqLDpxBbAZpE9",
  "key10": "5oqTefkScggWF9S1CRyuiJJcHPjC3Wkqse1phzx2LHdAiSL6hkVZfEkbyP9LLpxho1qW1aoA7nAk9sNY6GZhxtmW",
  "key11": "2BnkZS3SLJ6BAzXckgG9kHSKBUNbENnd4wd5BVFXMnvQBjnXJVad73LzU5hMJb8aNqRnXKiqpmgZLrtXUDTpYdKG",
  "key12": "5mNQVWEXupQWCGPfygouPz825Xjgf8kDahzJ9XnQWjy2QVxv5AdnDxTyGRXnsf2Ekj8hvWx2HZMgrYypSLz1dNar",
  "key13": "2xE2euyfKrrAHQ8twvs9Nk6SpzX6Fo13DQwe4xdnLiDDT5E3AJergUUb58y3ATrUeRMGp2dK5RLmTcjX6bwTXTHc",
  "key14": "Y8PMsbd2Muokgr4p4LWg9vSJLSnQoSJWUEuCJ5DTWYELUcuGakXb2WW8zWJ1QaHjQwT3Vy7tUg3jBaa6mDmGZFL",
  "key15": "3RgyFTjkPPQrZHDB9teC3fwLMqmgGeYC2NSYH8tMbD4xxruLVvz9N337Bd4K4BAcr9RRKLWVbLawEG6WMWMkbn1m",
  "key16": "BUNpvKjciuJ1NBTzhVSdpE31ZshHGs2gypDPXHzvVsH4S3t1pNV9NNGhGVwRJ2j6bmYJ6CjiBq5fgqAkij9xuet",
  "key17": "4Qi8vz6VDogwB5YBUcqPWouas6gkapruPmbTYDwSGMPGkMCt9fngwzAzgzrbQyTnszUYWPBS8Vz4TAhxGcR9Xhys",
  "key18": "5rLw8P4wsjYk3M5nzhnJYhuCU9ZmynqXpzSP4pTRgLUyjB6ZrVwUEED9cf1opuK43nGhs56JtBuxwTuSsLo8SwiX",
  "key19": "3Z8gibE3MA9kzfzKFZ4VP4HRFaDR7NgNwNjGj2xYg1bikK7XyJSk1dkxBZ5N7iJvkNPWJnTzJk4DRrvrn1TSYdci",
  "key20": "5QhNwVWMs1j43YFAkSH9KDPiSFqf7i4c2P1gEWk1MCbNFyZP9myM6uEGs4twJh5mgDZtWSEG6oZrE3zy9xtVzP3Z",
  "key21": "4b6zC6d7R8vAq79SsEKUpcmTQEJwAvfUZXzYs2yGHok7X1fubUfJ94qbLMwbtMtjHzbCRdMHExghTPxPcFs7rvZB",
  "key22": "4qu3k7tuHfRuXahR8XtBNjezFrgHLG2G1YSQbGUABe4HSVzZFoQuB2iy2gBDMjuuFRdVrf8hPVjeMgdDj3v9LwrX",
  "key23": "41pqT2M8bDnznytVeGtTjueFRSbrK5CMefyF7thPfNUqUQbwYKQJtH15gZvd2XHaAP9dptq7Up1p4KrLJDhyu4Qv",
  "key24": "KFfeYXvKxT2xMp8moj3hkJDByi9SjCSQ4Tx38sGwaDw2D153Q5mw7hB6iqgYS4afJ9rxfyuSiqLFd9pohqsx64R",
  "key25": "rCjqiCSoWYhwciGktMLsnR1QqpTxV79iUFb9ZhumSPiqZN7qksihB5wyxhsQbwbq15i8ubd87mJ4FvymdhDRhFA",
  "key26": "9jWYfZsGh3As2XHdTav58hG1MWTWoj4invKuvEQ4HddgyNFMH75hFhijS9DbVyxGeeQjGZxW9d2n7k9JDpBuCK6",
  "key27": "5BmuTamBmsnXYRNsPrKhLTjz3Brt2RQiALQWcUtezr4Xr9GudAxGHsWHbxW4v2e8ZoHQwANLomZtrinbpXHFrNHG"
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
