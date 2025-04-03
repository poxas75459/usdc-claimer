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
    "38pji6QgHYGLS2bjSxyHtJXAXf5QsC7WjuKsaSqNDQE2o8p1Hjr4AZgzxjmsu7WGUaWeUL63k8nPhcMPHo6N9TMf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y3tXezJiR9xbD75PEz47BK7JewjYs1vBW63f42yjGhyxRjPof3NdZ69SUVSk3SyzVoFrnrVRdH1d41ESwe37SJn",
  "key1": "33JuuG2oJwb29uWJyYhjSii9yEr5HtyLHBRyRA5KNq33wTykvUTPn7efZQDNN6H32Wj6givrcrLu7W88gnNdxVTn",
  "key2": "5C3D3dpFJE9qmWyLQjiWvJABvdRX9f5ij4zi1t5k3GAnuF3a4TqtQH9ieSVLS8TsGNurDCepDEdHyn3fQsb1aSiX",
  "key3": "34Z3nsHBmvJomhBbDwj7c6eMJ3saZXCFzxuc2seempTd46uUAga6aGoP7vc26RxaEKtdgn8N3ssegRtDvJnvyQj3",
  "key4": "4ceAt9UUncC7HbnnCzMbxrXn4A3WZ4ZBLDo9ezLYRENrVoPTqfAwZndiTcHo2xvntEmLv4D1UdzWbssDipH7UXqj",
  "key5": "3R6aoyFhCjhjBewAgfTvYGfG67cHXcMagX75YtrvmMdth4Ghdpu2AsNRhbxb11147CPK53D8b8A5bN92optM1r8h",
  "key6": "383nMWytAgKFj6651ihftXBpjikiui6y1TBqmJCtLXmGgWfez3NiemHm7rWkAsFFyz6zipHSdWM2YcGNvUXAhwi6",
  "key7": "43kccz2HvKHJxMD9AbLTgLXHiBgiRxaS7uxvTjNPAm42pNAu4kZe2bVnmw5LMdTK9TCos42KSGevU1L6te8UYQHg",
  "key8": "xtfbg8JWKU156KbmDascxwv6Z8kXVRsuT4k9BQWqK962wbUTYsWqqCjR4KV4FUZQkPPMaydCFLtJV4Earc49P3i",
  "key9": "4gbdGk73yeeKwBhYgc4zJJGhUkTL9bwZVaJDMsD9DAcMpbTccDK3mWskJM6i8UrNSFPxjnjU7MBeXVomShfLy8UY",
  "key10": "2ug3JEPBx67AhFPQqXseuNo8p5o3dGkP6tVenJxgvyhcDo3eiG41UXVBGSXf6f7EWkhbHxqXucpc5YJo6JsqsiSa",
  "key11": "5NVMPsHmt2ZvmtwGb9UcjWoWJ5oU1FKDpQE4JNVjW282vJPDpvbyUK3Npi1X9CT5AbdidHvgoTYUxdkAdGSzN8Q2",
  "key12": "5TjrAkJyFQTqgp6sTa5wn2uFy7iVWqXD5Te8yitbcdMSJeotvgydUVzdyMUvTxGqXspJ5WhvGWtH5iE8EjtkzR8j",
  "key13": "2r3CUgjTHrhtogjpjyQMtQz7LzBLck5zx4JwbDBNcFeoFxuqyhJzNxVQ243U9e314R1ZHrUvHetXJT6h3bwLDhoH",
  "key14": "5XtQ3iC4rNCPu1HZCoayuPyDMvMHFYJqra3NqqntxBpThtMRVjfocNWYqnbcHY8uL94ziL6DeVWKQtygfzimu4RG",
  "key15": "Y5kE5BWaEjQLZaGk1CL1qUVkMDFkPQdi725zsvby6nBkGfLucw295RCiGc5DqirqZjmwKuVSPQqt9tjA7mYAW2N",
  "key16": "2Wmv6Zy3ktsxExTPDMP9n3xUbmTVwa4QKUL6HU8pHwPxGLmwLiy3MLx3ho5hExKgT39i7U64yhjg75g4Scak572K",
  "key17": "51kwYjFAGC3u59DGw6TPLQCWkADsaNkPF77zvoxX5zmVQYDxDv5rdnyRGWY5GW2Z5iK3TPU3fhewWFAVW619QdCh",
  "key18": "458AuRtfRBF9ecRFbrmQvSzGcBfoLucEJjwQAMt1xd3gEZgf6Ec7mPLCLTtDhgAeg3LT1wNom4khu4U7nfy2ZHng",
  "key19": "4dfPA9fA5jSj28D32jfqpcCBHw47jvkdYbP9gzTJdrkhF19XMrrZVbGiQ9iSPaKHgqK6Ztxw5c3ozUCk1AoVLaRP",
  "key20": "2SJa9H71umRwCyYCSBdZ7mgcA6VLGPpJRM3VQJXXXkHgofjTg81VRX7efmHh4Tca3B8pySqaXcJjiBbDW8wjzMhp",
  "key21": "4iKcUj8fpPt9bR77Uj9kTXGFai4hjGtb2j9xjSwCGEkq4X2UDarocsJxsLWZHPLY9NW97FbTTEw1BHtSf6qUZqVi",
  "key22": "65fqv7MgGRGdKwzRaJNgo6SXppH1rvv6S7nf9GLjDbqfbWZs9ZL7kfJaWWFecMYHteDpXgjw5VyJYtTEUePAWARB",
  "key23": "UjqJs2kXGJZvNCwcEmT2VTYdnt7oEFc9MvAmdEeR8GGuhDd5j3NdNk7c4BLdSutP2jdUj3Qdnt1PbnumH7aCBV1",
  "key24": "L4rtq8F9zUjseC1HLmGzT4mAv7MAy1zpqkQGWZoGrdxtYKCeeLBFJcUbtJvfgXPN5CxgSLD9scPZY2ptnMr7pab",
  "key25": "259z6frd8tiiTj3cMZx2MsbxSHFWZ4ERobH2fjxTUsHJUghvua2yUt5HiZ4KyKP4u7xp3aJ2NNWRwjy5UBpYUfK9",
  "key26": "2cK4VgTeVSuk9RT9CkH3b8zsPuR7sbAjjRSjLJVrhhLy9yaxhYvjWmnmcqf4UukKns7gAbbgtFrGyWCjEYiz3DwA",
  "key27": "28UfNMhdtHFvkM42QmUMgixEcNZ846LaUJBYXvxN3YZJoygFjffCrikriXRthfCxnANxDSQyhh6WLh3QkyLStQEB",
  "key28": "y3FxUv53jPbQzL4ZGkBss16XzzTaSFmatDgSpPrMEExGMf4ucKsDDqHdXKRP4qipEkDzh8hKJiDSNt2dGmrKqSL",
  "key29": "4EBVvS6EEsKs2YaT8iar68F1g1B7HhVA8vFfYYSF5Ws4cSzRszt1b255v56CRJXiFCkfdKVPRqET7PfMnwCFXVrE",
  "key30": "5Zdgabjquevkg6AR9n3cTowqo3iPxvVDcwxdg5tztQjjxbCCm6Mckoc8gDyUHEZVoiw2Z8xTbrvRH4qRsW3Je4wQ",
  "key31": "478ArMhNpLZ2ucoSCUuruwzyrU9Q71A1zLt6DJfwxhCkEWLttgkgPsoQQbKSqYh1r8pRpEj5LGtNFpC7rJybinDS",
  "key32": "3AeL15BgGCU7ZN8ET7Mbqeo5jDVVR7BkPnY4jCfRd9dY25U2NGtpSVehrDZcpTEivDhanix9RrzxjsDgiNv6tniM",
  "key33": "5kTtRcmTwu1VLL4QCyoEki8ogMWLkMQCzC8UVTFuSnTjZQ6H7jCFSBnuwUaYE8SMTHCSCP389BrfNf3Aj19caepW",
  "key34": "322qMfdfbdZchSwy22vANGfSXMER8RUY8nYnzGkb9vFMRWxMGhxWeswac5bsdBtcA6pxvHm3N51datUhuVCWymEK",
  "key35": "3zh92ZLQSWJuUbhk8Ciyt1dFtJiXzeXMT8eQcdiW8faFyCKbK1xS4hk4w623Z4D4JANU46rfNjRfkqR9Jv3j8nnb",
  "key36": "3sNN6jd4bcXQZCyqqmzZmtb7fhtMExic3joVdP9giATrnuGwowFei1GwwBLgr854BBPvJqtrC829iGvPVWiZ2noz",
  "key37": "4WRG8T9k1E15JrWhpbEkMRKFv68vAvDqVZE21MMF4BiM68KCoaRbtCANj6hBZYNZAMsKksWX4jrUk58QAsbXVtsW",
  "key38": "5hrf7CgmdTbK6VAF6NsTHaBTVJZkPLaBpuZeEBWVyNE1Fo7SxbbtoXSmT6HF87YsQrcaxzNJoGKrbmSkoJBGDEkM",
  "key39": "25v2Nuf4AJTuyjNkejMabHK758G4xYnu26GQT5r8MJxHtUasE974Ae52YwD6oqG4mGGT6NYrYHWHGe6rFe6Vp8EX",
  "key40": "FFHCAKAKZsWw9xUmrG92V7DHH2G7wGj2Pf4iTMnHagDefYhmfvJgVfz7bQ3HxuC6Jp9XUKvaRgbKJxk476MeRfx"
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
