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
    "2tyETdUPH4m5ru71DjvEnKzYPYCjZUAoPHKxMeP6L2MCvAFfjHsUZhweGPU5FQaw9anwJ5oQXoJECLGdEpzewRg7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FEzt2AZDjsUDM5trmkEtSXD5aq8Gga8j2RNPZbXpuzRTs6kvxou3F8XUHn82LksGyPCcjAtYa1iPPPDrhafoTx1",
  "key1": "4ASwL4KA8hb3jLKBwwQQha5R3V33uZVrjpBipgvVGim6DD2MuKfN5S9oE5TiegnjsWtTjBhDSWW5KzsQWvFiphVN",
  "key2": "5dPjJGDzhNW2GeMcHwviUn4uXvLfXs8FVPeBcj1Hwgn953ZEFFJJsUQPuEkgddL9TaLhcDwCHsZMt2G5XPBdv5VM",
  "key3": "5aRZPef6CoiXNfjHu4ZZTimaj8NrdL47mjtVKsP9mrpT6PC5F7R1AyntaryxRExofT7Q5kzAPxLYLWMdKxiKFYHG",
  "key4": "4wgJ2hXoyyf8jxgMEgsGojwnfYArmKRBTfM1imKvCFnfagwNTKt61Akr2ycHy3oW6FEiwjTqBWaoXpaSxxQ6s8ZC",
  "key5": "3bbZ3FEDAooLy79tG1UCcvs1mje8JEgCjYVEyV6uiYz1LcrEqG9Xfr2Mjuf1eSSdkga6uU2uc4hnp6RgofkaHLqv",
  "key6": "3N4d86j8UAK1KV1eTobaqxxR392BhkK3RnB68TYaTxR5yCJfXajpKMKGvknRBtqzGtgSYbnxEpoFpN254uS6Mgqi",
  "key7": "5abRxFZSp69YiZPWEfyWtuMLwQmKWJTueXTE2pGShtQ38s6aB4U25zgBXcWRuNuHjTfAXrqF5Yj7h4fZZMWLkHtA",
  "key8": "3BuqNuPj291BkA5PitKhmLypRQGWokCCmah1nmoAYSDZoeCouHnp3KxuB8hJHKve1g7eGkoy7Ut9N1Kk5Vs8i4ZW",
  "key9": "5sHQDkuAysWBF4uuvVahtiYHji6L4qoor5X5dnw6KbeyUhSHw73xh4yQbHTcEJENRomsF4cPbeTVZysXPn3zSNbt",
  "key10": "5f6CXhhtnaSLYZdCY3iwBPCiDBR7RCf7HtL9aHQA3oqoPQtMPNNTztoRPtVNpuXT1YyyEnu8Mp2V1FsP3vyZnyZ4",
  "key11": "jhSeGP8sAtSk1y7F6dbJRKu2Rx7e4k9VoqUqKzmnMXMBJZU19AkQwkQBxiBJcoxjnGcLFC7iiF5Zh554kgPE3hk",
  "key12": "4hdaJ28K7Wcqq22eZeN3eMdoiXkuhR1ABoXYekGccWzsZSaAJ5ZkvqfCg4bbb88c84uAJCXMdhsBct2ALbWjPwfC",
  "key13": "AU3nxjeWBNtpz5LrYBe3fZf8iz3DB6UYF1rqVpPJ75tySz6fu1NoUD9rWT3skTyS3GpTBtDkHAtXD3un5TFzG31",
  "key14": "4FJHwNH4nFh4rHGVcKAsSBiEc14AkWsvt2Fso8KSJrMv1pUwVuHfHnkq3Fa8exfWjpTAWJip1TRoTnA8f7DBBz5n",
  "key15": "3xDmVp91kpBJQnhS2RYbn7F3tZHjfuqjh7J2hoPshUMc4tymbRTWaiAx4GiEbWSdfDfe8kASET7u2cFQeQo139Xu",
  "key16": "dEtsW6389vT25HkK4UBM2RnrMGEYAgwxe5SKmGhZN2SXm5z3Yi6UeNE1E7t6HSpq1g4sLXuazSaZMEvhd35U4rb",
  "key17": "mzmBN7Sc8nWbcAVTQTSVratxWDRdVd6xaR1oUNH5JyLuKt2G3EEpDAPTySoY1ZXmyVCVgu5oJH2UNgwThUrmypE",
  "key18": "2e2JXvJWH9eDcTCGzWHCfKyGpejxm5JFahEDvnmrdxwfZNpVPbXE8ZWigfKYVHjZ8iUhySv9pkfK7kb2sXWTjzqL",
  "key19": "2STAKfTSGyphJkYvtYwm9p9SUX24mSVyza7YYA1kFF9KaLgbAza3Dewc9cE3uCuyenYdp4iZEXoB4Wya5nVYbYY7",
  "key20": "5GKccqzmZNnJ8jQFRCvWtw3YznWdkgyMknJiGetFdH84r4CTgir8i7yJxRUWXj2zNpU9GgSq5MZH5V7JEv5srjUm",
  "key21": "4poMAeyWgLnZwzady7dTZXPLgYzfdN7VXgsJs5FM7sKNtsmZd2mzJsr54ovXiS69LVu6H1D9AqPmLFnpbgeaCDL7",
  "key22": "5a7tBy49DCsD12H9rwHCtccmcy1q2ymWATZergDxKn54mimuKTtkwq6qWyTU9GfMFLmpnra5wjp97i8qRrK7Zaa9",
  "key23": "3m4hvZzz2hV5QwDQkoDQtsG4zfx2fasQ8PYXQYeS2aRFRmcMX7L9w5SNt9pySYYt1YKB4zLuHpmbR8CULyMcYN6S",
  "key24": "23S6QoZD8dgxrRHjWQfb5SL1owEo1YVimKcGu3SVxgV3WjwvrAmu23WsFvXNuUkbyk8MV4A8s5Q1n735JFDocJjP",
  "key25": "5zTA2GYonYBLRB7KPLeJ9ybyQtPcwp3CTU6dYotNmoSX9G5j59nY4PMGz1xMEshEQd3uDFFVQD3qh6srzk43a2Ud",
  "key26": "5HBHD55y4oSWtwTMeJxjNDZiYW2NihukCoMTk2RSHAGsMMjnjhBrkFL4D7EBd9YowGcoaBQPiu8JdgooMVLjQqZ5",
  "key27": "3QBmyLam4ESUPpg3w9v6k1ELSH9rYGaLmdp32PzQpTHJAYm5Aj11vr88k8iLzj345mywcx3uGbAhEXMgGtGYjjBk",
  "key28": "5mevtpSpXVa58BLk7npLhtQ4jVNTchPiRnJZnRnDrTPmJfphqhVepsVcw81dhC9ZjbQbxPd4crFjQXGpWrGeKuUD",
  "key29": "53yF9qeBgBHxNcDEN89Tm1rzcjeBLvv1dNZiiB66bRhf4NvVX9aFWe8YEiykkZSL8uGhoSEFgwbaHkN5W7iJZkpk",
  "key30": "tA2uee3HfmeFmP7387LB3m1GqK7JFHnn12f5SFTT2nuLj4nmjDfu57JwLgjG8xk8parzY1kU2iwEPydezcFavtj",
  "key31": "5e4dzpmzJxLfbVp1rkFvVB6UXhbD3tRB8ehDpYcWKzaZN9fhabWkKjUURFJnVuChR8uNiAB4N9j3gAUwwiy7KANW",
  "key32": "5esoLyNuD3EitCWDx3KTi9Emt7yXYLoJyCgb4ToeGsP6ZmsMVizb8tU3e6eSKTdoRYo1CvNPBBAdxRQVAyy1nkCR",
  "key33": "4qtNHv3ow5NupzT4Bkra1s5Ws5qJ9UXsQcGsLh4y7NoRSUfMA2ZNnEzmoHXhHhn2fMKezpHnDysVdMkVxqFPzmay",
  "key34": "3NFVQLjzEqB2qEm8W3SZ1nfYgaVjcJE9CKTXxytHb2XsrnzGivKX4gxTn4EZV5FCNBHWjwkX1pCBx6yzFGzv4Ksa",
  "key35": "xtsFfj7EZgnvSfPXPUjiQPFNGftSs3jZUKPC82VLWPaGLDyioCXS5Q2aLYnDEtDxcJk1XnpQBbU6APAaHceGYBb",
  "key36": "2rE3x9UvCJYgAH7bEotgxMpaM5ZD5vhGrqds7hnsyQLebnfE68hZDkiDqMsKhUjZVsnYREh6esDBqsuPApiZrEx7",
  "key37": "56hs6JWLG5tnwfKa8znAktCnSyq5V9zb5s26tqfQmiHC9jYbZ3Ek6hywx53ARhJ2L3TduX1enxVPERCBGaf7hf5K",
  "key38": "2f2YWWHCru2zJCGkUXEZfBWYFu4mCqPXrDfCZJdvTid1TPKc1yEx3xFZxaT5YbEkKhnWP5DJXL9ioBNRBdnzud62",
  "key39": "3zusZs4K5v2GRAujxyMfXuVr5m6CBCnsLVnJrk5JXhfCE3BUay6LZiZhZLMdxgBtUyCgY4DEgiRHrkAGn91tuZ6q",
  "key40": "2h4hzk4sfyGxxALiGuPsKeeX62Vd4Kq8hj46LjP6wBiaiAb4AViUNaNpYRj23eVy9iKavYGp4dBdySc2nPqh176L",
  "key41": "5XgsisQKE6Q9x2snyBfgPn8763JCTpHCXepxjDjEcq9s7jKXNFMeCDg658WK7dJdvVToLrkoak36pkjJ398idmqw",
  "key42": "bR3gGw2EhjbcTjZFS53j7LiifucdYygtmxJaWLTaZh1NpFv8CwwQM5587xGXFxoCxK93CTkkMe88vSLv1WuexKH"
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
