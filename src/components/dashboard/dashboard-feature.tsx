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
    "ucA29ZRqpd5HFhABBbHkAR9eKFM54VTb9ZmNfRZxXj1j19DQW7LKkej6VQZgjd8x4hBLW75suok5JghBJGDcAWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KNP8qTgaLap1fAuvzNxBJjD4McPybHGqLJawVfVZjgoHDk95ab5Por4m36qHvipnc4pPphDAd4ierXAkntC1AJv",
  "key1": "65RCW1wgpcUg9CoFYksdURa6pYfMWiU195gtfoQWB4rShsKZuyTuqXSobk3h7RRGPYvWkq7axeX1dBZ6M6VzdFrJ",
  "key2": "2qHrjFBwkG8HYS6j97vnVsHAHJHXsXuJDM8oSTJqWT4gVJPRVsaM8hgoPh5i2d2EHq9V8tCPgDcvtuVbeZF186EY",
  "key3": "5CaHWcMwWYXmMfutpxrXqz3g6tyRo35jnrHoK61RisPQQ2NvdPujR3NyQTFSpW2cXxMZ5C4YnEmdRw2ZWPUDm3KW",
  "key4": "2BN4Vw2t29RccsMnrPKmN9szfWrfnVCQ4VRUnzYv4i6G6PhDSJsknpf7ZnCdrnhzRt6TwZo9LeBiExAPXf1vq1YX",
  "key5": "D7BKZL7GTUPjkGxs5UkLPg5sF24w9N7kR4f8FXAUXsJJtPMqEmFNR3XVBHfsYmi6AY18MAtMAL1nv9XNLZEfEap",
  "key6": "3y8zDPhURPx5EobizD7qwDom6DSKzceYAH8sGZGKvqHHYQyUVQHiXYbHBNaHA22SgT87nrPg8THFZda2RkKC9t1",
  "key7": "5xRkKfzfrAnrjodAnH6yvXSUMqUXVLVpvKX1oPJgQhCRgTpuuoXMMA7dhRZjqn4HSQCpgR3fMEkHgJTygaNYXreD",
  "key8": "2K8zq7oNvhB9nengpH22UP4rc3UcpiqyVCKu1f3hcK5zrZQvVARbwLe9QUWDNeLBNuTkSip9pZL2dbx8Bt6fkjKx",
  "key9": "3PTUyQ5z945wzxUzAfFNjhZLgser9nx2kE2GgCsSsfGCPoK4peA6JLi8LKF86uZuefP1qVdcRiSjskUUkqw2h4gm",
  "key10": "5JTHoFtejuv87dhthTrQYn319KoiK85BqJshdwWDTP7XziqwVicbtMaWGtZ5D5BcnrbWvTgE7sS7RTXBD2NiwH2J",
  "key11": "m31gdZ1cPL1YKGVRBKhFbW7K6n2qBVnJ4yLFGiHm84PvbQahBqExbCiM8V9S4ZgkoENdQrTdoMAUXSHKNM1JL9r",
  "key12": "SBQ5RYp7jFrzuHTadTEHdQVP1eJA7DjH2UWUHra1QXy38qrfpRjwyod7ZZ7mLAxtCmxopR4FijfKeif5JmJ53Fd",
  "key13": "4acJmUqt16F54dtYPw7M3beRikZQ6MrwJ9LkboC7FchnffcECsAmrgbN3weQW778VChmdbEKpF7jr1fo4PWa4qYG",
  "key14": "crFxC3NZygNM7atWNKtu6nXHjv5ro72sPra7zJJz9kBpPao54UEraaKtvsrhiraTyAdVeo2wN71qN1AF9K2MdnC",
  "key15": "3uu2aH9LFhXxbh9dESGRSwfYSwUx6qHuiXT54rHVffsK2J6EwPoZaTc3hwBnRYuERZzjcPMTHZfJLa8c8qcVj8jz",
  "key16": "irfjnys8RxKK6wPyru2Wgcxc7yFLrC1umY9Kr7irEzB7Ayv15jUum6E9aZ47wYV3UH2gj8DztM715daZDTRfuGa",
  "key17": "2QGy58YsJH31ykQPiKguH4Fbga6au7SqL9aCDt2YGfQQW7tc12N5rwz57EmW5FMZY7X4jcyX9Wdm1gBwu3D64c7x",
  "key18": "4HDtrxBfdsJNgTfA2qvd3jZFkaBiBgerkZ24deZkzReUomEY65STNwcLuHpsB2j6HnzbqUwUrNP8gn9hatuVMzak",
  "key19": "39w8AbNxz2o8NLG72HwQBx9wEbvPb24CRXZDdHvFoUeGAFJcrFi3BExfFHDRErS74sG3KFnFSzKVCECRzKWGtL8a",
  "key20": "4f3UxSst4Ax48r8Nn9qGAWxxFonDoHJFweeugwRiLS6DomLnnoKtUM3SqrienEuKcmmSNqswjumipZqqiTjER1zb",
  "key21": "2cveMqsso8nzjjhnyYpQXDLvsDRxQw6CXdMccUkwbZrvMvK4Dq8413MN3fpUx3QGKqnGNj7KBZERyq4ca2zbtjHz",
  "key22": "j7r1aGrTLkDwLZDNJWqBWfTANKWUhst1XBoAon8XF6k5MK1PacY6h6GcnnoqbaD1BZ8zh3jgzJHgHmQ71WrECcY",
  "key23": "Yvy17d4hkTjxvp1aAVTADbwgBPHwkxsYRvKSjHMySJxZumJChs6mchv87455zUfs8TWaQyhbonezUSDhmueR72g",
  "key24": "3xcBmhuXbf62f7Pt8qPdGuWNe8LzRqt8TVp2Hk5rNA3piGLRbDLBWH6e5PFVMkBVsnBpvPQqEmirf6zmwbRGTsPP",
  "key25": "2S5nnttGNjyPahUKdCP32z63hAjjNv7KeLgRHR3wNchvTMwfGEmCz4xYK2ZFcDrUNnKgmvda6ySBj6RGQLNQD1FH",
  "key26": "61NcUCFVHRJ962KA4BsRudciAqjH4KxZVGtRmig2SPSucpifq7XyCuuyrgHaWuoeTrJXeKcW4zM3QJ3ZboZqgNaN",
  "key27": "2eUxV173JJq3HSNyMankhAJ7a9xhdmRr1hkWtfPk1qc4ofeVHMQvqQV7M4tv78rJThdzvYzXTtjmcJroJN43Nh5z",
  "key28": "4J5nD2PVJu4mHqznEduMirmP4mbcqBvBYboVZBsQuDaRbFrDr4fPwXXZRNyN7r9V5voYv2EiAUqFVXVxjywkWBhn",
  "key29": "5JNJ6MtdqPGLc7b8Wz26zMhDyPWsRydWFZpur9JgtQH8Ly9ibZNuynH8x6R74Ma4AZntsk9bBx14oCy6gvzmhr2o",
  "key30": "2BdwB7xCds9fHiRcymRhMhMKkTwLVSpuyVY8vqNk4AvJ1kXZTpmtQs9sQuTkUFreC86T1opcDPoZB8zq8WFKDJP2",
  "key31": "22Qbi4gsnToKqD8cHkBUPHaFg2sbFPRhtUgLrXoJoEcwvH21X98KzXiQf8kx5Nem6PZCxJ9pvgxk2D59tat6UnAh",
  "key32": "RXRSBMir3rGjPoiyWec2vRzHUXVpD2utNbzHvPjKiiybHyxsXhPu5RFjxyiZWUTEfM56jaZjbGmPShYbX2xVtZt",
  "key33": "2MALKy3VjKEqdyAB8rviYvbkZLQGWy2tjyrscc3EhMke6ePThHZD1gnPvaArHGJyyYYSm9ypuh5qKvSGBkcsdEX8",
  "key34": "2thW5upZGGBgKPip5DQZ2JTJ5yULrqHm3QPjNa4uuySoE6totirhLRiub7g96KMc2iK1fnzWB6fS2fgWJxxgzSyp",
  "key35": "3EfLYc5amk9REinqT6CEWMxvU8f1hPb26YMfL4yJTPZjhxa2xaHB2LDb3QE1DYfzfZ6uUgwjz3w987AqcAXyo9Nm",
  "key36": "m851Yy5QRkdPzVF6j3rpqD5XQksvspzhgNuNbtz35qZU3P5sBrgMFqYdLfAY3dGqYXPU8TapPt7hXzLKYTUd47A",
  "key37": "4dXR55FozEFdqG9Dd9MZP4g42zcY6nmMJmsJJK1WWD6vDYcr5z6X2dmJ5Bi93TDc6RVhdSrccHhBL7mcQiY6uvdq",
  "key38": "65iWA5Ky6MmV1f5k5GxNFncyY1dwb4xsvUBvqAgQG6ZWsF88N73bECzb5UfpENwuVYhMqfLnqnYThWPnCbCKX9my",
  "key39": "4XpYgmuZDUZgoc7RfnoADrASMtegwximVvSxUoBjn8cpZtawne78uFgaoiBUGxsKSEK4xSZRFX62FybYon6sSddW",
  "key40": "4c5GciyDYBApbMd3AMG9277fWVZ7aLLAn8GMJreXWyVo8ruJhzswyPwbuH8qnncusiqZcAJuYwW9srfUPWKTtPs7",
  "key41": "HMzDp43DehnjCmcwQbqJiojacEurs3iRavdh9nTX9wEUcntWQQtyomNfaLPp4TUQjqTzdeRoai15xwbvdmYo9LL"
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
