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
    "2c1P8SCjjeMy6mxGiCjaN9mUTQCdgGoU1LbT5PG68tfiThoj9mHqbngqrEnqGCCKuU7ZZLExK2mPpk9nU4kyq8Rb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wtTXRoSUtPdKFbzFoWKc5uARzdEq99SvBRt3oWnX6tvyyUei7ijgLx8BTLZLZqUGcV37x4ab1dTmBhtHmHYeoE8",
  "key1": "3CpNieQP3L4uWM8jAoNNabsbtg6kDeLPLXXaWMFfPpCYZiFUfsvPLJfo4kQ5od3EDtbZiTT91DT6sMmmSdeJ7gSG",
  "key2": "3jkqxryvA8YV5g7xMmWvrfYhEXnKRx73PHXpsWoh7PchqbQ4qPtm1NeFRtEFQj41CDzyCanLcn7LvBphoUN99nmr",
  "key3": "u3GAFJzBXWKhVMTLSY7e228N3HXQB5jUjC6tgYy8seLZ1TdwriEEtB9mCLo5jseBt2tHas24LQAG6CQHYgEwWcD",
  "key4": "5oR7YNXh64Bnyan4xqn122Y9tmHSgCid6krQAuRprFUZmS5MYxvffgghYrPHmuZVzZZwQ82psr7ZU8mF1x6SZ3Ez",
  "key5": "5utFZ3GQZ2hAcnqsQncM6KDUuGG1L21w1J6PwCRWwyqX8Vi3kwKkF5Zvn5vKkwAr9L1rVB33he9UEcrKgPBLc3co",
  "key6": "5pLNA6EPQFKewBr1dvX731LNeynFeVaKsbiMvAsip9xH32pey4pyGt8YN4YXrw2dfNp4w6nxEe3UFTiCvZjrRfGt",
  "key7": "2aT2XBd7yECF5gr1dz7irdk3Vpj8w9EhVDHgDv4vMJJH3zsMdguukyck8vfykSqAuSTve6jazExJMd1ot3AdsBQr",
  "key8": "tZUwhEQL7XCS9vBuVWurBwQ2pqDWTovaNx6ZUKEtwT6eWimaQVzVZmz58hwcJiAecXt53WGdDWM7ZKfat1kKF6Q",
  "key9": "4jgTWsPbw349K6rDwBNnFRFcgq6S4aNLceLPu8sdTTT6vTgN4WK3B5ETpgub88Kq4g3gQg6igHXhrd9SdSeVV66Q",
  "key10": "2dGnhMLAVC9Z24LfQaEfVFYqM2LruxLFneHxrpFaPzE47MFmtX4isZvbRGkbonk8Rw6hSswzmgWz3rEY5HHZL2b7",
  "key11": "3XhDkJB5K2CLAa44rjUF7u6wbkTVeYB3LjQDau3cLUP4oenor6ypTPY5SMcwQyShZrCcZH6o3kKrXe8qpTdrYcHf",
  "key12": "2wVLmXwY573BJKtuVv7UMHBq9SAk4Y7C3DyAQqzV4HgeeqL5zts3F4Thq8RQbsbqyC94W77Q9J6UtJ76dsaWJSmH",
  "key13": "benbkuVPJB3UQp7XsDNBHaBiixasv2Xsqdyv78B2EnHKJgz65Ng4XNKQVhkUPdZzgwARAFbAGw9hBrSzdDKZtU3",
  "key14": "pzCo7KFoXxK3AqWFWnA5NLDfUqv71ggZUfudmkB5nnM3CEeu1uVHxHqMLFjKQoNhieVeovqGTpyhWFxrFyJNXqo",
  "key15": "67ihTQM4A9PsmHNbyqKQ8cupGuHkc36bfe2mxDXuopUiRYHJZfKwtQDXsxr6Mqanq1jN7Jy1iUKPStMXnQtGfsjJ",
  "key16": "56EMZarENWXhhoCfRpS8QbY28cLxSL8Wzs8URcJ2i6f9RVf3JZCC4np4hcpgTvhSotYH6bXMj2ub8vvmjeTdrZW4",
  "key17": "5kJpYGj33kR8dMmJmqsCKEGEnLBJSVsD8NUzdWbgndcK9ws1yMjbWRWkM1xSm1iHkwaJPYzvy5kdzfDycUHD2wTH",
  "key18": "5AC6oereqt5X237QLdT5V46UfevwhDt8ff4b3Y9CoEeCKFxzLvDzeBJM79Ldo2pmabvyWez8j9wxGzAKXJCncxKR",
  "key19": "61agpEGUz3XQ2wzeMVgG83bMNmJgCSefDCbwor6wXyWtBXYR7MuYp6jUkKBSXMxeLmpbQjU4REek42T37QW46wDv",
  "key20": "Tm6cmt9hY5esNSLqqNWur9tjium3WX67z669updyk6GigYvFqmkFhGwJXhPK8X5tEAd6vvn4Vq2p7norhPxfcCN",
  "key21": "ef2ZVSkrXxrqBTM4tekTFyo3HZgWf6mB2JVZGUSG4gfqhGYC9pSFN5vwTuLETEsGbEHtUTpTJfL64SvrJEzBdXb",
  "key22": "3fKBFQSeatWyU4MfmXRid5bhLb4Av3Z53mCt9ua9L6C1oaHMA7VanmLw7BiFZ1KQvibVReFTVhbyzWLXS5ocCmhu",
  "key23": "2oa8AwXE3hgBdj5zpQPtgjN9ZLJkinWu4qPPzr5azcaJobRc7wvY15U8vWSzeA8vWVhaFJCxSZ21EAZ9wmbHSEaV",
  "key24": "44GkDkPtgrP1YmYC8ieEofZ8VszfsKiww6LByXrjHDn1qEBcKmFSwAF22D53sjHL2uXzYLhg7wmAdGa4N961UmRc",
  "key25": "3KNv97iNsPBFPaQriNhJKD9EuAgbaPzqDe28xDtq4SbvWu91AaoSbicT6ubYz9SsjjfsELtj9MzWc624qmjQJY4s",
  "key26": "2g4L1bbPcfEhb6yU2vCuRpUTpDJ2TvsUtPa5mvYf2TBHG4xSSb9FkhdxEKPNu2i8YZypTbHjDkCtU3AfUCTBttNo",
  "key27": "5yZRSWfYy5ZAuNuk5U9VmcdZeuBNfyevTCdtfT9EuQFCuLiJafVnv14Jors2Ddi9Q1ZZM2SUMRhRoGq7XiSK1n7w",
  "key28": "64ec923qryYjkza1MShzavnVcGjY5NKv29ETzaQeV7JX81TFxPtjGZ6ymWysZXmoFarNxinp1xzjTdCMEjD9fnHR",
  "key29": "5ou3uArcYpV2ZApK9LpsmRTNHBYDyvkb83KnM49zrXjdGeJFKRMRieFwW2KW9UjuyDQp6fcTRoJhsTmMH8LiPr9Z",
  "key30": "3DvMx2ztfqCB45P96876DXGpWFW2ojgTu7uhB5xiQAAJ3rYiS7RQ4Se8gem2m77ijVFMtft2GMCuogyds7ZPYicU"
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
