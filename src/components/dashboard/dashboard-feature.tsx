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
    "4LUT5HUk82F3G8AN9ESqq4PHSVY2LX3zheVat3TP7c3zr9pvjFXuqryHN76XfakXQHdtkHjgaBF39aFFxYcJ8XFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yNfYFBAugZcYqkoA5w4FjjgDxYfmXuPaWvydFbSJpB9dMk12gjgBEnHQnDxrso3ymGfVkNstSPBzy9fgsjQ8aqr",
  "key1": "2tn2cFq4ASyjyK7XWuArxdwwxWNW5rsGYPAz4T5FcbQZKuLKVDzomnqFbiksz462reDSw7YZ7xRpTBbiV1Sim99j",
  "key2": "33BVZAGYvgrtzGrWxVKHU3aFn3Co3Vua2pB8GPssnyaRg4rTezrQEDkcMdxS8qBWp9NFhkCCj2B8mvh5tbiNydWa",
  "key3": "26FrHThdZ5ZXFUiVPQRvBuQjbziA2xztgB9Hos6cPm4LSBY7V1LnUD5gFy5i8pLo2CSeYSwxoBanVgRvwCuC5x1p",
  "key4": "4t2xt3geCPVfZ2hjBPv38TGesQsX7gKzoQYcoCJMmbVs6hLmjp1QpADqWk6fVmqmMRD7HHSAYr7HHQoAWJqfJbcX",
  "key5": "3WLQwtoiAUxP1scMzrLELR8Wbp7gw1Q8jUYwcidYVT4jhVKfTdAM1LPSciQuDXqCPfhL8r9WNoh2SU2LhTQ36xHv",
  "key6": "371sN7VNJGi69k75FqUn91mufxEtY3iwo1FmatpR4RwR3ctWpBufDoL4r8mHDVtuCrQuvue7EehLSoG7iihAm6ey",
  "key7": "PWPqNebf8Be6DqyRuQUbaPr7XJEdpk5WzsYwFbr4STUnmhkXH3tqSHKaVyMqT9FYHAib4jgMG7XcGSyFYy4n67u",
  "key8": "474iRDmrGpEC1FpVwemt5ABzNJs8khkGngg62NxmMGtrGfnRkBLPnNof6VxA5kQqTbU2XDMYrzHiUNdy9CAv8edw",
  "key9": "54KxshgBwiu9TiYYbqczD7YdTEmFSyFFPjdHiXtYu6HxrvxAGmNL5z3H7xdhqK9n1ZfU4VFrPXiycmKknEDr3AX",
  "key10": "4RtLTMW6LBS51nxugJgD3dVQdTF1bLWA6Pha74F9MpbMTLRsuwa3q2RWc4iVBLmBSfgUJzfdsFQVxYDcK3D4cXqe",
  "key11": "2rEYq41Tp1QxCXy9gwmYpf25RY746g897i2ULEXSiqoTJqA5Fr9wMobhuSwvQ6PAU3c3f4WwQAH3NBMeSRtrXaUg",
  "key12": "3G5i1HZzi6gBMqqNRKFT8stJPKgSexDXHaSmPwjZwK4kVopANeswLAvofV5v7UcTU4eikFsVp2gpJcmcyNWGXJKJ",
  "key13": "TvNJMZp7Jy8tXuC79WDyRq8FutgxVJ7Afov5DgEkgXyD3Vcs3SCDreSaYkhGiMDbLEBh9WGbNuxx27f4o4Txkaq",
  "key14": "59TKYGbvhowyrh215mL5AoBLMYMip765osD6krWi5543mN3EPCrpXvvbmi71k78agmdVABtJkovTDp1b8RYEUoe4",
  "key15": "4WXisJocFEMsjsNtbXTxQuCsvzLvpZDDV8KGBedVWvuxFM5MJag9AGD8qYAZyfBbei9yGWFaFdVNdVA75qdCVF5L",
  "key16": "5F9wQZT12WYCSk26CZmsGVNnEp7i6dTQArA5Z71xbNqDphGqszFvLwD8xorUWhEsQ6r148S7QQyQ5vGkyi2Xf7vo",
  "key17": "5X9otuJRZfRQgXoFiMGng38jLUzn91jW65zMn1Xt3gnoY2CAKudHk6Kg8ChHHqS2p4BByNcCChmVRDw4Dc7a3D2e",
  "key18": "qJq9qiE3GnsYSGz9kRmxRgNHi8mAgbMyo9dGHvhsdS6MpVtXDruk9iT3s6u1L2AaXaneU66xDiZXxq4q4GxCgK3",
  "key19": "2866XwyCjjA7tUwDRScym4e184n56KWQYP31ma294Mg13Wg5oEVBYRW9Hnac3mJuCJ5LKsy4td9Wgi5L9JA5DG8P",
  "key20": "51Sp5cTP32gcFs32JddDMtTyEytg1xRewGQpW2zPbbwPmAKu5oVD2UCxwbu8BqMi964MUFd9bzFVVoX2RJ6htxYh",
  "key21": "448DFtJw4vnee571f8TzSWGBQvJxN8dEzDQ5nNBWkGC5LBrbv38HzX7g1C6dZej2hrKJWoWjFzgq1jStz2S8PjD7",
  "key22": "4HPcnwk3M6QQ2NcmSF8FgrZfstiZMdtcrpyjFhnuMWx1NuWbxSTLG6bmRGEYWvXg4VGNBkAbUbmQUQCBaGMGaLmd",
  "key23": "FYWzM6Y8FRDEKgBM1mtmiZgAWurwRXhkhVp9ED841B6nHkrMeizh5faVTr4orcnJSzNkuY8L864qzYYazb4ZP7d",
  "key24": "2QVgtSrhwn95tWTNNuiKWSnn9P3WwbttbbU75E7GGbWMnENKhR9phzkL2Jz4iaU4UCeNao2RC4yGrC9DvNcddyDY",
  "key25": "2ePV85H3zeDKea1rRM8B6RYQgvHxgZYTZaYndZZjAz8kboCBZfc9qjyuedtAgxCzdgPTcynR7mb9Ayp8QRwo3xUv",
  "key26": "2MpNEVXKxA1nnwaecrZ276gaAJkgL6F9X1v9KZWkm3fw3jwpnfqfUP5jUaMhiQCM5BomNbQrduCFvzFNdDbwJ1qy",
  "key27": "37jANCRrNhpxVbw9S5KYLeGXRPsoQUVt92FponmfSwRuCFfUaUZLvdBxTyZQRipDjVX7ZmLK4sFmCWWgJ5K8G7A2",
  "key28": "4PaAcYLT3Gpd3iNdJBua9JpMN8uzUzqGq5sGiLhgX17TF3n9bJExzPRYmX8rmJidCb72tJ8rU3KmDtavnCVmH5wC",
  "key29": "C84d79uUXrUoQM6A7QGvVsRV5Z57EeN2YkHpDWJsM6qezYoaP8vFJpgFU6fKyKCyrkdiqND9vj8w16rAA4WKUUq",
  "key30": "63Vj6nNY71eYju12vikvvi56BsX4VufXVepRkLLtCGTvkSi6qfWntz6g2rxhbgvCfWrg2QJ2yfhi32Ar4uMzkUsF",
  "key31": "aRtSuQSVbQmHzwVsRZnAgp3yAMDscUbbKARAobL4pMbGbbkjf5uv7WYwQr5NJR9okM8vRFcoiW9BMtfX7WD7t2Q"
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
