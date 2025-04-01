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
    "2JszrV7SF8JVRJapKzjZistUvT5XNbbLrCLJE2JxM6wDSXyHdRwLJcmL8wxWRL398NH5Jeahc4zFkJMwwRS2mSNf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bv2KYn6fNG2BYAv82gpYEzCJ5Zd6xaLdx9ivSWHSqUrtFwMfGJFrWN7z4rToeFhXzbXV6ijZtskJEiPtxCeyiBR",
  "key1": "3Zxknohz7u3bg1KsJyNDVpaWYHLPMfp3uSqX3ZdN7yLush47nvxu8fGierEuFFBmXALEG2FekG78o8gvBbg3Xo88",
  "key2": "5FqEXSgPLXezLGZpQuvwAvHJNExELkQnBc9T2bMA6CR2Z7EUf5Kr5aP4WTALGKnPapMJiCaAetW9FVX2NnXYHmEa",
  "key3": "fm8ELAjcVtGfoTfASw7YZ2kkeQFMx6mEp5zChZscUffPSvTumUpMzDZH8BhCzCBJCH32Rrkegj43rAV9jNZVGDc",
  "key4": "4atDyECB2JUqUknjj3QhxH76hfan89sHsTM7TiK59g5c7zcwnR8YAd7t5ic9VA62SZM3haNqwA4g9mEPuKBVrcgR",
  "key5": "2zLjWpKj7gokGb7z5NQQwX3AUUobJD7DFt51ged1Pnb7ySFG2SiXkKTzkZKH9XWk6wqBSrDJhZZ5r2fJbLvfaxJE",
  "key6": "5rpHimCKZrwgSyxLy8EmFjrqW9SDnubkDoa9jPqX21Z7Db3XRC7Lmjn3PTq5vmmG9yC5drpM9CZLCzWMKs6qdWmc",
  "key7": "ns6tXeoyqwscjKoLsSogQVBYEf4t64LweugDr5ZSrj6kfeuokNh71djq8kEvYzcdZ7PRznDVJczdVF8rKKAq451",
  "key8": "5Zfj7UHPSjZJo1MmcmyAyKAo3qYVnvS89Pv5rjnjNPC2vAmuDUMWs575qB9r1iQ5GJvNoZ5XbjMBC67LsTLgSvSn",
  "key9": "4D3imFczi1oUVTUa61eFUeocLnGd5koHsd7Jat944b5h6fSSLxz64bApAisuyTWNgdpkUoLLrdA1PQsJFTN3PoF",
  "key10": "3S4sKdMy3iakkuh9DhcPJiFpsjBhtaeMPLE2LFPEct2JwChD8ewL7Fx4my1ne5ZXMGJDrwDECNqUw9fdxh2MRSCw",
  "key11": "3qbX7pWokQd6yjWtvBuqQyphbeZu7Hk6UWdtcenkobg69YtTykgps5e3Cdf29HnYYAeYiTry57sWhxKUFw9nSKpU",
  "key12": "5PDS9nGxbabHZ5qFEWLZBdCiRVFGxfUBq3j2GiG9qJmKarv8am9FDy3qziFdTTmwaFc2oA7RsAd7zBx1PPdCtbbs",
  "key13": "zSf5Lfn85AVYSj862xNTkq24jfJaPi41LdtT6qybxmfJKWaQboSMyCYkvSW88NBQTX3DwYbJFH3tZfqcLhEJMig",
  "key14": "5nMZuVz1uFji7MBa8GaHDANgS4TjomPnLUBFP5wELp2bcMqucFUaoV15MswCXyVkw6B4D1RnjjwAypszm1TWxYXP",
  "key15": "4F16xGDynHUXePuko6q33dTBreNEjNm6huGuGE77dBXh15qwhBQwMFWPMFDDatV7hbEHkC5g1qTiK8mCFt9JdLTp",
  "key16": "Mab2WZ6JV72CuSaqSjgwys7B1RLGyeamZE3QN9NuyerhZgThJJwrLNWdusjsmDJaEEKyA4tRMrmYCYTtejXokj5",
  "key17": "gFyv3eidgdPCu8adzFuZNwCEdnMN5qmz4irZbj3GQJkZN8Y32imDMxeLNFHHhx8Ezkypmnmyc8ryeVc4LvXV1kD",
  "key18": "5BtvZLXXtATiWii6BaAE9SoDcJ9vrWSDt964BdrX1ZKLuMPxjvEFrrUZzo458mbhWNoMfqThAr7c21qWFmH6XCPx",
  "key19": "4t1nAB3gRGgkmSPzzvqNaqTohwx8oc9h4wGFzkR7M9t1EdvwjjfLe5FF5ub7AAthAFkCQ44BpufJE7EkxM6rqAvX",
  "key20": "28T5FCtkq2HSzRr8PWiMP4GP3zDh2WMSASpgacpa2AUkWB1MunvXzbbQcc1zy8ZowWEdYZ97gCscLQFXGbcSJXXh",
  "key21": "4iD86dLNtBp5pj63Cjmn8gfJfgXVk6Y5ZgBDYxJTz1mo7c95HkDBqhK6BHqZj5ZifsP9fSSRBywr44CpfRevdyQp",
  "key22": "jbXbWKhjQUUy2GdnoNZXMF5ofsfvR6QH5Ys5VLtuFZeW4N6evTEbVGLiCeiEwcPZu3pqhY8kFjpYzsUN7tYLMAF",
  "key23": "5BvKan29zraXvJ8euKsMimf8AasDgHRGH8cWUM1XokxFaBayTD7tBdNQ2PaQGUwmPiXht1VQWgz6xWn9bpaWY41C",
  "key24": "3G6pLpYySaCnZM8Zvtm6zm3QAEiwZxbbw6q4C8gcBGgW358YNb2A21e16cddnUYpL3pxz79Uhf9Hv2sGnscxuYoc",
  "key25": "3PfiNyja1gUnkwY6YaZFbETvucDVsrmgtfpKRq5WiJ531ui1HnosqvukD9rfmFheuyBv1tnwS6b6XitHreTHVquS"
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
