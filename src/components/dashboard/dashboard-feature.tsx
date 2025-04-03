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
    "38XzAgh7YdXi1paDWR93Hsfy1d8qNw2g55LF1ekzWWH5WM1bCvdkvX8YSMArZbd8UweCsJ7myJprVAbfTvqtHGMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nPNXM3dJecp8x7uTb7799ZUFPvsNhEoNEN6bVroS5bsmN9ycim3mbrwmYGp5wdnqRiAN1C3ax7LYYqN3aPWSDBu",
  "key1": "23cZoTMeUL3eVyYMbB1hUmdH3RK6pPre7JPfL7SiEkDbyWsotwUBS63gUhH9MjiCrecLxPRSeK9ebBR6sNWBNGPz",
  "key2": "3VijHTzaT5XvbUBsWRtLajNBvEad15RY5qGV4Qaxq5AMM5JT3zTrBBfYd3n9XyaghRmoaHUuVuXJg9PE5VA62e7n",
  "key3": "3sV4afA5o4gbvoj3yfuB7wwpjAxKNh47xW8F3bVkk52ta9EGFaYoFCd2HfdyjBU5stYJJWoaezqaZjQVd4Z7TfU5",
  "key4": "5KH9gaHtVNZBWjNVr65RLDio6kxU9b1NbgYGhmPMKwFUKA54EhpkzoB2dwULSd4KBGvCeoYEL4eQ1MRYXZaVRVmE",
  "key5": "Cs9HNUFsyNakDNpmojvRQbbufp4rDEYVmjLp7nVQE5FzhUXDbc9jPocFxutKuJVTTQKmByG28EASphnzRUny1cS",
  "key6": "5rGd2ziwgjgjTUZeg2cDzYsMAxwQxeC7vdw1PKGYRNURfQyXgZ9cXKwUbAUve9T6JM1WP8s1rk3iFd9htwuUqfAP",
  "key7": "mHkqq9vz5wv7wFcs1RcXj2DDWgwz37RmBBaf4NnMJ3g4eNMoKNhGA3cJLXyErUBwqA4hM6Cr773DMwaBFq55Kn1",
  "key8": "5nZYbHt4sytNESEXRSk4jokqi3SG136XDJQDxEtAZugp5VGAMVwT3JkY2vaTE5BkEraoVDywtugVqkrgF87sXvxA",
  "key9": "5XxKAB6AyZPksjdXBEjFXq83jSGXDaeHxEdh4i5Q4EYETbY879SY8ZevLehTxCDrkWkpM1MkdHgGq73dEJeMUkxd",
  "key10": "3eCQmvRkPw7hmJ4ztRFEBpG6YkvkfavBQz5PMXLM18CcP9KL73DdrZxTGmhqZkVPK1nV6N6BaNiAeKaavMX1vez2",
  "key11": "5jnVWWY5j1hnjbwVWSeKUVNadPh9CeATxSWJHdcTwV5Xa3WZjh8WGo46BB5hce7QXhXFxe3gMJDFgsVGXrJaPXQQ",
  "key12": "2xseF9uwhW9bNDxEHo18fnymSSGMPTLRTYYjTutFHJUsUokJsRXNXtU7KcZvTKVvpwkBVTGis6NZmoMqu6iZu7P4",
  "key13": "2qczByJhqg3v8DYQZMDKTtnr3bTr27mBQP2ypqhaGMTMgVWgsMKzK3fvzZCYhKDpuzi8sNmfUhvYvzXy8xkoRzeT",
  "key14": "rhXPW2TEgBQU3vqP7WQdeMcejsXzGdejL5D7iMXjMJwEjReSb2EZgLBcruLPzUYRFp3bssJw3SoJN8FzMEVcxig",
  "key15": "3UV5H2Ks6b5Z76irqqBNEPrygiP6kD6QJYA6h297MrtDCvDrTKrkc6gH1aAUGtNzQKrGvcNffqkhj4jdcyhBAMmj",
  "key16": "5PY4MteGrHR22iUiZ6GasB4q7YbmT8ksc6o32E6bABooKXQuEjAB5nQYLNjFfv4Vh7J2hU2ctD8E7NK7axbMnnET",
  "key17": "5sHXC35K2gJAEytHyKVj6N58izVnosRmEBuuDKRGyEQL6e4AsT73XyryKPuEAcZkFRKdVMULJPg2CA71nAC2k89i",
  "key18": "2hRsWJTqaWxcwEKyvwUUQQKZKXhLmMSVqHSp9rBHr6RrZ38SQidTaY6fXsXc7Pzh8A2eBH7SyMoJPFnn4iTd1Qsr",
  "key19": "34DjrgpAexiRRBZ688QhVEqfzohfGsxcCfQ8jy9hMA7itKqcepXybLuFBSPJdcP51hxY6wFbGCQ8FModp4G6tP8r",
  "key20": "3Daq8TziA93fhfRmEoNstBxCCKn5tb1EYtsZqVvYQciCKpc6ykmiP5PPeBXiUCTK1RgQZYQis3v8gpD8fjwZCeYe",
  "key21": "5C2aAUip12cWXuoKPyMLdZwjQUzynUzyoSU76g2dh8aFmCJmMt4iJcksXevLmX4ycv7JMFQPngiCj9nQjFsvygyX",
  "key22": "5StZzpn7JQBT17iKS8cAmoUSgKxFTYcwLoGFYT22iLU9WALcV5af4sWANVo7gBkGEjLFPDsmC2dMyPMj2GDyFjAL",
  "key23": "4iCNFRBkwQtdtwdTDMo75NVhRnTFhTYaD8Te44NNxPzchVqis27znxKNioCEz4k8CYdqT4rnzkVwhF4zTtpcdLTb",
  "key24": "3idKqJguefyN3Fyqwy7nv14cpohd3SgBKgjWDBZBpydNxkvC5pvPAmzYwNae7Qajz9SPiMxsDtm71aQthSMsobTK",
  "key25": "2GWie8L6TxWU5tGaMFNYGZrTJXtWe15AhgUvitxYsphRN2GvfdqSeo2TqJvb4uiRnDNguit4N8XPBEndMwruPJxn",
  "key26": "2fErZsPD8z5mVtYCwWLWmTAnQGHHx94g3pw3DZSa6eVmXzJtQjvdBDyQtf9esQdsEVrHtYU6c2w1tCoZB57FdBMR"
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
