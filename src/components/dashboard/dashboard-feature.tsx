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
    "3d8v1BYk7cxJpDhgfueayvCNvMngGkaSBg76pbzDJZV72eiRcFHMYKYqCDsxfbL1iBHmryQ2fXFhK7eN2dco38fv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hdR2UgumKfgUQ8GydN5T1HZgNQmK1EEGy9UTZqQvzhC8Me8P6C49vdked44qcCuvcZzFMpz5vcxt8jXh6pFGzJf",
  "key1": "2cmeNUCAgWbpn8ttYkbj5ydF6MXSY3MyDtJ3431kiQuNm3v6F2C66rnWbwNdF9h9J5e65T62hqwhQnFxgXwtgE5q",
  "key2": "UVgkngNQF4mtoMSmn3Ziqwd1kzxJoZJg9JsDCU4YirvNvuotiH3LjS57i3V6sSrkHcVFeY5ZLN1RWCiAwqim9wM",
  "key3": "58VX86F7EMrgY1UwjkwtQ6qndoNRJxQP8z353YhjUiMHgt8uHQHcPdW5Qg5oG4Dn78tEFpByPXseEB5vCv7KbcCH",
  "key4": "42q8demGBqNT7XX252VA5KZDWTMv7no6UCviPcxpY1EtGCE1Syxehe3MqrC2evSJ556MPr6okh6ZKqArYRwRpmZj",
  "key5": "2mn9mBQTd2V6yAfRo9UWWiuqUUSXueynxjtNVBWEu31NC9G6GVuvNQ1LQDXwhsiCiBTsQzxD9vVy8BSWsmFKTGfL",
  "key6": "EKEymHhAPFUVBtD6zTvRMTwvPFT9Nb8WLgDCXyYFb4egFeYWehjP3kU8eu4qpgUBgGNxYN2PN526UM9iTvhhXsR",
  "key7": "4gbCoVW5vumuMvBcY8Vr6GsePH2bHabUcwAyA67nFFcyZ58RpyXLwkNZTG18VcDx2AaxeH8Q5JjPydwQquQcZS42",
  "key8": "2QbGRLs7w1KU78iyzyVXpHKcgeRdgs6w9CbtexUPNXWS9153GYtKxS55NjnHfKoCjNFh4Ttef7J439dFPMP6X4NM",
  "key9": "3GY9Cp4QGCpSDAiPyBKQvC6NfAJyzLunyQuvbXndrtseg7CwmebjFEhvZXYghyN9z6qivSwJoaSXs6B6noyZUDsz",
  "key10": "33PRLfeVDxmdHAoEW7MqwRk2184kjXDPAVdEzQ2m6GnUtN6sm8q3JofkBSKVPpuejPKYtKAK1H1ebezeFgHppXbJ",
  "key11": "2WbSgSs1XCtazhEYRGXS5xXJEcqSSX65mh6DHb2Q2tq3Am4YStJL7dzwWPiU8gAymiiShmsUUA4qGMZZdSVuafLH",
  "key12": "2RLxv3HjuWthRr9gPFzubHgtQw7zan3Mt2zvLe8j6592rHarEyDB7GFPc8EWWyAsqXKy2CRYt9kEURDZQ6HkRero",
  "key13": "KjTRqYCYBKuAz7FuJV8DXpwWkxQvhw7AQRexpTp9HvpRQoHkkmZ6EK7vwvqhK9Zsb7PyED2KF9BSioLBpGMJHrC",
  "key14": "4AEypaCawqznXsmCJo94Dtt7suHD81kMAfmRwFFNKkURNduSzuQLyRXBhQvWaEA1gZPcFCnD4ZbLysgv4sbQrSGh",
  "key15": "3dE9HLR9fGih75JjCSgGPqsxvQyjYf4aHXMDkoACfQnS5Q5kDKAD7kn3nzjP2exE3j76QUgU3asGCD3hqGVPEgbT",
  "key16": "5SxEJRnf6yYsT8ChLrcXhQHVT4uhSV1e7JJvpQUzNwmQjhATAGjXrn9e6VxPsPor9Xrn76su2xrFTRLyANyeeUJc",
  "key17": "5Xtoromr847EZQjkzefqZf8GaYvG2Nxrt6Dk85W2PTSKdVcKFBUF5Go2rRYScEWj8d13xWzaedYpbqLC9fnMuzqH",
  "key18": "4to5cVdcece2dhbXZAmBVgQDgrbCQU5c64VyNNRJba9Dst5Hnu4QCw4vwcsfTA9SG7Net37bs1coQzBfYj7vzQ8s",
  "key19": "3bScovZPQqX2UAvQK4UuBMsAp3ioiyft4ophScnXLDHHtp5gizX23wmzcthYFL9gwReYRkNgG1nWgMaTV4RU7GmZ",
  "key20": "5WrpMmdqaWKWmoc2Vv2ZzBR2spb5mMvzUCR9bVJgcjeL4qQfod3NnBTEFDCsL9Dtz7W1hqnP8BpDerejwu6KHqS5",
  "key21": "5sfktP96fWVaaa448eW1djygrRqrvjGiAj1ei9Utp9JwMLb9MiwzSuNCPnwAY5NV16noksQPMqFqPJ26LU2JHQW4",
  "key22": "3TXAqgAvszk9idEH1tWPhZPdaByLRdxsn7QG4W738ZLwVwf37Li68iX4EHjoj7WyXxz1LLYSYQWH35fzqzFHn769",
  "key23": "4E6NGnZrhyLBcAXkBeTjSqrSo7v9vYmNdUdha54fsNgz3u3eZtMwYwa2SwonD5g1kPhvMoo2Y8ZZu1QuBx6ewjmC",
  "key24": "5PVR7kHUTJ4Hqu1gEkM2zb8ju7zG9anQH2hgYwijV2qBwMCWRCwdbPJHgrVD6TirtdMypYeaz6TC2vJyRBYaJVbz",
  "key25": "2xKx4T8fihzQjBnTHqV1YR23b3evFJ8zmfMKh86TCJ4yoSuyRcDfJQWpozHwBYPzR16U7jXbpL8gRtWtNzyNMZcW",
  "key26": "4JtzRY8dj5biV1xi92kB62eQVwcv9kndSienGie6T9qv6nUW569arDdTmKmD42kfLXufHL43VggYmnYq9EzC4zue",
  "key27": "5vkwMkdeYu4mcV4WYjquxTjeZ1WGQGuM2TeRvccK8GpLr9vyGj4VHiLwaLVvHxm8mSeV7WkQNwTA2DD64NrbP9oK",
  "key28": "3WWP4HH9MDsLo8oBUJV1fwBt16iNB5DqoiwJDrqEA2HRkakJfESrubzKap4QzUp9p19xyMjJi3Vfwxpf8xFG4swc",
  "key29": "5fAhx1KFYraB5sthJWrVLAdF6jNYF1W24tLs6QwaMpSw95Hx2mdzqACZexgMpfSCUBCr3TSEtCPk7njLmbpCwThc",
  "key30": "5AJa7Tchi53afMxjuuJg9KvbQDK1PLUhsVWJZQKoTh95qXppCSWunsF21fzn9LE9GBeZ5o6zb2aJsLC6VcLWWHoA",
  "key31": "4DAFmq2DBx8vNZRGEUYdTkFTjzCiYdC8ccezTMx7nf36cBhFjDhkuhZJ1N6m7CqrmdMLrPyHPEt9Mdj4dxKNxopY",
  "key32": "24S39QsnBkzYTz3eph6kpWFpWXraKytkxTp3GhrrQZByZMR2SfRzo9kkE6xfDJTZk4UaLv9XTe8V4EiiEZpvAN6Q",
  "key33": "38qfkWvzetELmW2BoWNw1XQ3AgszyimyLbVZgr8zaMCvKjSzBqRQk7NuXokJF7G4AeNYMEP6C15XMEtYY9Zdya9U",
  "key34": "2tAebU8Hg17DALv8pzFFcaaPNUdd1s9QavQGPDcTHTyKbCb55BR98Fysxu9UZGo86EKcVr1msnQo6S8yiDQyaQU4",
  "key35": "2sd2j7Ju9sbUHuhBRs6VU9GWENQtaSQ1k1YrS6Eyvy9gCZ8D1V9ngdyvVDBevHor7VanWy6PUoEtTGAXSesARjrg",
  "key36": "2nsUjcoDQeHJEBiy14ENvR1Drpzwq6mZcccoF4qwiokLxbQJh9KN9rRakVeNyctxvx33yJBjug58bGqBm1NTLYRL"
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
