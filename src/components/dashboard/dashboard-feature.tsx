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
    "41umNFqBk7NC4Ucu1CVaDSEL5GF6WzpS63UszK7EXyucMDYp7X54wjTnafCr5cR95kJBS7nnh8nNLVFapP75WWWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YJXLATyV5mb4uCCF1ohB5j8UWEu2VwDegpuwsc4kJ1Wb79PPtTb3PCq6KxgRdF4MGjvvgYyva68EdaFtNGUC9iZ",
  "key1": "4TsjCHpb8miKA2V68rsotVz4MEMbCAAHCFKLgvnH8iRmQqJJWNV6ez9HRMbzaMpDCedkVn2v2qMonJXi3td87mPv",
  "key2": "Fa7vEVm7GwLQpbZ1Mda7bvYP7cnFfbmU2FXTomita5t6JbQu4gisaeKFC4DZCGABdSAZLmvgkba2zVdbTLNzjM7",
  "key3": "2gH9ozYsXe9MTS3sVc3YC6BEsyL8AbZr4dmZHvVbKnRdW9MXiim8BcDc5eKTCAVuMiAG6ui2SijfUUfAbdGwqEzg",
  "key4": "5etmHBC9nQxQJcizgfNuwo38XchhhS32k3X14cvdSXZwKbtZ8sU9zFoTFFGpAFRzDnDHd17Qpipn4hDhDy2EfaUw",
  "key5": "2hvin9Z8vJPiqirKh37uhfGAgCKCcnE4ojPu7qFBy3JZ9HKqbrkd8hdop6z2vpXzAGJDs8nFoYRBBtyHt6opDSVW",
  "key6": "3uue2QaLiUKEvbboMQW9Q3Y5P7rDqXyj7qHpUQ6erqjR8Zq8tZiGUMnn1ZiZQbYgRdixD8PksbkmFeK8Mr4JRFk4",
  "key7": "4zELkjx2Ft8Ydf1YMUXtsbcMYmBEdfooTTETMESB392Dx4H5aJkpxWs83hNcShZxMz7ZYuoF7fbrXd92KdUsncU3",
  "key8": "5oiaoRFaesg1Wvfa4FCiYYXwXCA7ygpSf9eGTqokAzJqjdj1GgKuTHKVi3W6zqce8FzBiJ8HoKdB9WdnBQ4EbcHL",
  "key9": "46gQfSWeL6Qjv9HaFKDVZJqHf3eAYHSrk75PkY5jhRRu24yh4DVasJHUyN217cv5oZrtcZQyAdT8wUKmNXLbDiqh",
  "key10": "5VGbuRDAEqz8QD89Uui4uaZLyCK2PfAQo5sYE6xr7LR4qZxRqAJhrBpyK4pMezHFEpTyTpBw4DoRF49wMjfyGx7r",
  "key11": "3rJMu4CAYGmegtmMkaWQdzhNYutAPCCS8Pucu7RHkQaWVqaA3Q5JKWCp21p1UNMZXGjkrhT6qBYVinXqTWngey8j",
  "key12": "5kgcd2WTcAhHz2bYWenMB55MWUcJv4y8GoefyYAFz6b7rEjpYreVtY6QuSh2j522qRzXukuVCTNYbaDgQ8MeKD7k",
  "key13": "qGYggqZpmbaFYcDJBDPuLBGGknFC82YqF1VPdBmMv5KEe1nZo1h2a3wJLK8fjUcCNVB3w4CfYCrJGYdMp86QjTX",
  "key14": "3iS6ZUS2stgGv5JsEBYHGnFFo82J8JeL2dR4FLAJDEVw7k1UT84MFmKYeUWQNfw4qaUbJfULSwQb4JLCWtiq5nvg",
  "key15": "46SkAAHDcyBP5EQ3ywBFRCGHcfBXQv6xgYDpP74r7ZgJQazEA9J5EWVQqWqDad7jtC2Zmn1MFUAbdVp1vDtyUaSb",
  "key16": "4BaVFEmQYXs18Kj7Edbqdx1WcKDeHAZqji4eHJZ2YHQr2YFVTupASg1cVzSpZYasRpaZheix9mRKxBRC2DYJ434t",
  "key17": "36qegukuc8bbHEJfE6YYKujJH5MhYRgu77aT659xoPMLKJhyaHwJQ8fXTy7B91NZRtHE3fwKvDTVKb2NSGCAFJTy",
  "key18": "2HiWgBXBy2oBskPo6UkgtKsmya7dkd2wa67WjzhMzjDLgMeofjo4XDGBAJsxCZQ7wUM7DsLEnSrMG9fLdK7wXi6X",
  "key19": "28Wy6whdE74nVfASaXifEiXrPrMwDcsGeLr1xoCBDeoSYH69i4D7ayfTi1PjdNwQQnXGFD11KcWJfXWxg38BXMSB",
  "key20": "4SoC8cLs4zuArCdD4QK4KP3zLm57Yj9wQkwiPZT21CsrmdpQCkU2p7mpgZ9PWLKjQWzCH4c6XVDKD4q2mhT14Lds",
  "key21": "21Ps86qQCkyzpjW1NHgSEG3jkgWaUiUYVz1RpgAP8JAz5bt5VT4VgdnaobmhMaZHpTqhBBgcsAAnC2MomMMXo93U",
  "key22": "7izfUZ6h3GY7pyZHk1qSBMSpk6CbqgF6J2rurpA5JziNLPpkNMVad3wy31KZpxLqbSJ9fdjvdkPMyjFBTMuGPic",
  "key23": "3X6T94qRUi7MgH3keqHG2Cx473sCWGgWDKJVDTnQryT5C7KyTSUvY51rsSDocciSN23igYzQ4bv6E5GGn5aKYJxg",
  "key24": "5PBm2kw2mS341DH6WPYK844thKieUNJ4J52bPPSov2AzGaReUyYKLzBPmYBTEJMrVak7Rmb7KDyVjBEJGcW6kJEt",
  "key25": "4VE8t1N4mEAooEwP8zjhNhL1htzvRn2ruDPvdKT1CYLF13pbmENnkTDvoiDcuTxANdcGgAZZNEtTiMo6vAc374pd",
  "key26": "cCAopjFPjMLcxyoweLT6nY8Uy5a8bPezh79wLXMozrQtMsNwp4oQ3FTEfDqvXQ6RDVEePwiGrHzJmuhVHwS9pqF",
  "key27": "3qu5P5PoypCwp1F1bPycWaY1XUHF7X8uzvT6ELEaADaD9Ws32UGb5Gf5ic3vemjEEswhh6ALGQAE4ecL5wTrP4uR",
  "key28": "4YUoEt9KwcUE9mzxgmjqbRXjt4g6hLXrdTfnLhoC5xGeDayvZkNGLWSpTUc7gidyLFrshuGwryRu7mtx474eH6XS",
  "key29": "5nuAeYUNjtJrWsbEBdG1ttEAxHVXPEozJNAwsH3MjMpVR1qhHjTxbBG5Qk4svekUnREDu5B5toUh1DdtrjDMx39B",
  "key30": "4rUu71ndxYe7SzTvskFphwFQAJ3GRVjD3Pzp7FQucgMM5HsAspKvuRiJXDZMf72rKSzJFH9wiWh8hrJNtpEjS1oT"
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
