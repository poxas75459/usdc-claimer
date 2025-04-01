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
    "59TLGoYhLUH52DEyCdxpQPs94wHmZcNsU9Z26Bzx9VCwaxcjM1DP6AYQCMwbtBxSEGuZsZN4F4biavERejtYD8p7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U5tfJjgi2DUcdc89A6ssnzN1qLCdDPkLkpqDLYN83VdDduYMFhLckc5mcy2A3VTaebziwf9nSpCS5EikxsTyDG8",
  "key1": "5NDiKNrvxZKMxAYnyEk27u2P5iixJ1Mwxh7WhvRy1Cm6tdW6P3PVr6P9dZDzrRJGLESvJjNehKTAttM7heHA6Y7R",
  "key2": "2zvwprsDdHhGW1Z5D8VovAdXrVsRbd12RaYyjkKpkzoWBtmBe6Xpnis9j1gd3aTijFV3NYHGfqJ7JpkCAiGPB2hW",
  "key3": "2vATtC5TgcGVrRLWVNWygBznzVForWdw243pK5Rjr2J5DzaRL8yeAvBQcnAxofxqfPWAafPTwrAdo8bJK5o3P9H3",
  "key4": "3CeGE2rsJ8sASdBAAJqgaFUWmJ8Xf3TFsoJ189CCuR785syPzV8FRWkbC8bnWtP4ZBGSvE7xgCnZpSZYCdh3N8oC",
  "key5": "4VY9qeHTS3NQF1HJnE9m7eGkpYR1nWrjs64kecZZyf8WMdXLcuds3RHrzDwkpajAufCNGbaqiyRVoWUGr9sR7v3M",
  "key6": "54BAimW19MdswTBuKuUjeXYQhjnnnJRV3MD8GgJ47yY8gGpC9B44xinuGMHxL66QGTKk71Lq7uD55jwxydfNC7ZH",
  "key7": "tp2xuzPhL9fN4df9GXvLRM3bj794rjKEz4k62jhfC7T9zXXgjeo6QXeGNU2ZvL9JEZUofymdswwXoPPUCAJXq87",
  "key8": "2PtG4NZGXkiUYazWpxUPY68NPp7dEq6rJ5Yg62Ck79wFfE4AZoXPQBA9RMe8b5gmeqb85HjhzZyZuy5vDcRFheoE",
  "key9": "4xqeJQ9Ff1yMsn3zQXWh2mLrNbvSTwZexp8Y5nmiERRbJdb6HEKQ7YvUiBctCLJZFhekYKEacBVhkR4Sw5ZyAscG",
  "key10": "NrzF9AzH6Q49o3qhL2VdpKKqeRKNQH38Nr5v6PtcxaVD2y7uV1mJa2Lb8ykrpDcKTJLLFNVYe5ycygaXfLbipwq",
  "key11": "4UaJLrrr3jXm6tq4iXFP1gML72jAiiCKytiRz7qJ2cMJLST1D1aVjiKMpQeeXaGgXRKXWAPAEHbffXqt9kmGekTQ",
  "key12": "4iNA2fh1bLGLkx9Dwcen5hPm3fPhZqZEqm7N2e6yCpZJenkuwz2axWPiioaUJ7ia7tHyeFo98fxiCns81ib1YijN",
  "key13": "2j2Kt7zwRZLCMhGu224VQrctF7CgwJRN3A4r9FHRYt3xwi2M365JefrbAqcu7WquxMMmxPwy9rKvro9g6C9LSc3z",
  "key14": "5jReCjZUBkmBYpdpxtfKAhDYY9kHY4w5HrA3dPjUQaxdZqC7SSdkgniAGEVnpQ6SVY1N4d7T8t96ShkVK8TYbi1g",
  "key15": "2oaZtEnJSqpg46BrxTKhnzFW71Z6Bz4MoLcQQi2rduA199C5QHwWVgwaETEYzpkJoo7EkR9Tu3d7ajcmPsjTNZ1Q",
  "key16": "iGymNtFKCE1vz9U4o15fLwKfwEdzUX32nMhekwA96sPCpN4haaG1wKzEHq9oav2WHpD7K9WKsj3a6dPvnztLZCa",
  "key17": "3w5edEwJcs5BQM5Cd9YFG7JG79noQNrP1bk7yrp87Df59aJjsALKmeuD5wn95H8KHzkbwChzy1eLvp3DcFDKqsBR",
  "key18": "5bm1NjgJe1uRF5bPHFAhpbERjvaAENhpTrD3BfymqfdDHL4Fhe7ZinCGV11s6MuYiN9CFmHyWj1uhAaRBXQkeZph",
  "key19": "5JZAzbh1rVWzj5YTWFJQRp2ZQysc8PXa7fQ24oaXtNSdoQUuEjZXdZ75EbfSZ6PiTnvBQdopHiXM6aEBbr5mmS93",
  "key20": "48AnXRXcENeYfHAH3a6rqPZN5Ng2qZksodeZXv8UpeYbYAG9ovZb56abYiy7F84sePea6Nest1XbgPPquEaXMTuE",
  "key21": "rgChH5ANbXuq7pVEVJ5F1BAK2U6NCzQorhmtTGVvQGrpBk54WZdLpt55BXyuYEjCw5Vf9m3UTts9CJP7AvkH424",
  "key22": "2KPDe9wgHKXxTdkQCuHAnagHP5hMxyd1vkbx2yb4N17yVXYSbGrGy4UYWSwpiFDBpiJDYb2rqAdzsxQPesvkz4p8",
  "key23": "3rehenuKZqtUuoQJ7zqSo7VSsUXuJjjdsymuNHRxiS4goqHMuxJKnLD2cL9FvUjRjbg3y1fT1E69S8GaH7Pz4u9N",
  "key24": "5a3nPG351y3W7VRNxBBeaTdFkdkfM1WN7jswKPtPod8etwwiBPEzGHXZUui6fJjk8Hg5S9W4UCVDzCNESTuByPmb",
  "key25": "2vDfYwXHyZtakkzaVwtsg3J5VFXxdbrfCyKzX3Mn7XFyzzCYD3ytoDK88LHrWoho3YZvRahhQfo5DqBm5uuiTZDQ",
  "key26": "3WaRrfLFCvNEtLnYDwq2SuQ4MDgdA9pNxP88m6S4KpfhXdhmdCaD2gP3yoZWBrPiANV2Qnm3DQ7S3n3APJTtLFHL",
  "key27": "5wQuovFoypEDAQxYTPB8kcjHDyHGxHAowGgVnWx72hw4tVsg1hxSvg2Nu61guS3VZ9WEqHqASf3D81ptYv6Dof3v",
  "key28": "3JoZmrFgE4KRxMpM5sZKX1oXroNzcW8BLLuu9PUvE8kgvmo1mAcfyh9YLiWWnDmwZxmtFnggKLpcrVsWatkFuJhd",
  "key29": "597MWrye4UJGYGY6JRKiDDFPACsqJqzsCtizWJNhFQotK8rU4TzosUF13e93xhyLNHew3wzKRth5dA7G3Kb3Wcy4",
  "key30": "2niXJ6HSdSstD7nVHHgpNAeZJjHeT39JzK2AuzUcYjTVF8r2UzP4tMNt2uQyD9mpCGNs87HpfD9mWWV1hLyobPYv",
  "key31": "4ysaw9YBGyicW9gbt52bBwV3MfYBwin7RXDM6UgaUWsy2w5uk7o61sf9CSXNoYGwA1hiwBHr7bB5cyVsvA88iDTn",
  "key32": "46bVqa5WSydXkXnettwEYKFcykeDArFdwhBmZKcTBnttXDJTP9vK1m28pMnYjE92Nu11e3nL132Crc3huZ9xgsZ8",
  "key33": "5x9qArhwTNG1kxYM12oqEcTUzNQAin7VxZWiWBLa71vTcjGBHBjaFCRoNPSj68Sx6v9qXEKLzvQjZc94Y5PSGZMc",
  "key34": "5oYYwJeSq27Z8sF4XkZHsspRjmkc2S22iECuU3AAaLvhbWzjdvFkaPjXcbvRS7ptvaM3zPFS4JUwvNFFhimWpNn4",
  "key35": "42N72U6ebBTVz63YXk3nb83K5LcaEWKy1peeCdJAj9tKu437hHfr76x9CbhFuvHfxc7ray4fAvLftw3SpVZ7ZMuE",
  "key36": "3yU8gHMFBLuSw5rDV97eTw4B6SnXkfqb6RcrYAZ78SXgSZj8Cx1wYcLVcMRurKMdbCJi1xsyMUQ7waFpofn3PCm5",
  "key37": "2cZ7wVo4nmQcmiaaoj478otkGpxqmGkixZ6UuNmA6TKgr53YdpafDNYJxRDZFRnnpyiRugioiSNmTV7yiYmiRLhd",
  "key38": "51SXcqg2jrxYT3NP2nw9CjRJcqNheZD9AzKzCCXxmmWrRV4NdhsYQmysaxacTdDHbrCZ2iFDwoFNVMHrYsjtRfoN",
  "key39": "5dfe3vUSFQtc5Z8HTdAPCjC5V1SJ6Rppis5oZgquxR5Sj2dUrWXBvYXv6g2esagLYisMVXdnwU851iaTQYJD7s19",
  "key40": "2UuYscarAu27eokY6RTarMSQseP4rUJ6bjSpgoAxQiFwHY1VNjsnc9YAZoBrjQK8HWYvrAUDNBxJ7SbbkhH5MtKh",
  "key41": "2o3JjbyLiyGWTNiyjDtKPExMm3s152LLB1gk15SxVrZcv6vQmZUjWDvfSSjikkvsUtkXsekVN761MYphWwx9TDmo",
  "key42": "3WKoqxJZk7wrg7qDaT7Uvnv8cP3PNKuqR7ANHY9UfoNhJCTuUdwmkC12kQ4vu44jYz1qp8Gb7aYmXDuohJMW1ogs",
  "key43": "5NmMhgbf24WkpDCUHzp1PceDae5nYvMjVGukUqTD7nXu5zHvtD1iDaHjbEMW7wjz7J64xmv7V2SX5QUAthcLGKmy",
  "key44": "58rLqtWaj3MQQjyfgoSiPPKmSUwLGBVbg1aAMb64Xg884xcN1tC33svh1oLJiAWdHs93Z2fKkQKtsBhCMP6XDS68",
  "key45": "egMYV2MCsJLbwbArofBi8hdd4fXrnUqMevVDQdrEXqDYLCU4fSeMvPGBQvP1cDkyq11ycEKuKyTWomnuPXUS4wR"
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
