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
    "5oQ93uBHEkBu9ThgbxHAfjAPvZCj7S5aupUFdRANd99gNfj3AX4Gm9frvUpLATnzFYm4TaVRA2Pn6wnEu2NBCE1E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RWMF6YgvRSQJgjXYNkKmjFzrfdgGsqT9Jp3UwKcZvMtvpXEYNUDBLamJzdGpvEv6mJSd3nFdvD1Pu18Kxp7nMjo",
  "key1": "5nLkYAaNxGFPC1sdBSPa1d5twycGJobge1o8GL288CnHDdqyPZVcq8uKFL6bjW16mXqgi4jJPkJtQBgRt3NRwuaL",
  "key2": "43bvsjpmBkLgGPxCWdttW17YovZGTUmwKoraSHbiUzzxfywBzkkjJGXkAR57U9kp8ReNsVTMR9czBHPB8cWw3CrA",
  "key3": "3jSsJ1mC4HK8zMDXrTFkpqo2THssjxqiyWpwAFDqCvWT1uZZRati8T8iE4GnCz2sPzEEZeaV6GwNJ51BtQoDjhRi",
  "key4": "cC3NdgggJuAdmsqYR2TB1UbwefNULwfGMr33HZAhNZPD1wWYR7RYPzua3dzJ4DZUA7uFSGqGCQUrTr9G1NFhHJ7",
  "key5": "3CXVy24oQkGNjjxz63imK9xcogEZV8ukDudf3xMKXvpFnNTVTmBizLftdDKisv52DcnMi9ev4cg4W4W8jjVHPK83",
  "key6": "3fwSVLp64VGSk9xEVR2o5zCTF5NpnzEZzyPyMMmM821Lix6RWeZMEw5pU4eGtBeS8A9QZoYFsEbyF2htTJhJmiYf",
  "key7": "4B4Je7GTMZ1uXK3yg2cXtFo4TBiaUgAjoeFeC2Wa7Tpdof5QE1W2RPrrnaQKxhz2Kj22gpyZju1F73EdLLe712QQ",
  "key8": "HnUCTRH9Ts9KYf8CvVhKSGc8NcBUxwWaJtstQuNXNbb7V3ajc8dXUi8owgeo98RKikEv1amCmtPbnCV8aqH9sKE",
  "key9": "5SuvTdE8CmvrYY8H5YyW297gVRXgfUeKyRNZqVrd32vNpDVWsXWHABF863rSmZbt29AcUkQcznEphvmBsfxS3jjH",
  "key10": "3nh84gx7QHCDTKDg2twcooA2xkZr4PbGm1kALRANx6Kq6nsnitaVkCkCDxGbWjYZ433pUdDQGgBTww7KzsaHxrfw",
  "key11": "23ZZamX27aH8nU5xpqcp8qERgx28gPqwfhko7eXwwLLWxwAMpBabVteAzQ3wWXDu1ejh6xuV4PGNTiK8E43WqzAf",
  "key12": "5exApKvZM4wf6oFLez8XxEc3bbVNTMhxDQ9E4jzVRGy16bBRP9ujpdUvrcZnuTEgHB4obwSpCX1N57vVpJgqZbTw",
  "key13": "5U4we1uYAgnXtQFMTWsbDE4UjV2jTHCXiyhRUyoyWVMtNDpVWovArx18jJjgcZc8m6fUbfkHhaK9MqTy4NCa6Vrj",
  "key14": "4URw6jbn9Em2c5rQELAiaKjFrQhGu83M8yzJGrXewBCDWkx39fAvr41Ys1v48RTui7pcijMoSSvziHfSeuV2oPLa",
  "key15": "3qM5fJ6eAbbAj7DabkKx5byqWW6sPeqntAtdv6E1P1ir9xaAMuv5CBTpHFVE16KQ7ie9DAbURpSKECuvKAuizCe9",
  "key16": "3mTc9Ctpat4fdST41Gydrvv2PTTJDCP4wsdAqaCsJ1nZZLw726Cxx8rd4TEeZFQGG1DqQ9NoTcwuZYyiEEm2Pm3g",
  "key17": "3C17oaQG4XR22Fv5GytxGy18HKJeLPFZHxmyaGCvnhu78yWewmAkH1LtC5pCdb9FeVUuowcyaZreZ7S5XaiStUwS",
  "key18": "57jBm2Av8BLxnaDwFyZ4BoNwyfeDSryZjeC5ur6n5D72ERmjpQwLGMzRHMnvEcZERuJUiTupWhsqborJUjPCKuoo",
  "key19": "Ub7tbCtqJhsgdytMMpc3zBxvH6EGFJZxpvWrNipzKrFUEaaqgAuCUva8WFUAYPMU9E4xRRaEzfYfSjgzGxJ2oGS",
  "key20": "2GThHqP2fByjUNPCVAGz4bgYSuZSbSioXrDt5M3EYjm81ZXNZoTqajXqe9qfgwoVyDBRBFkTxrrPDP5pgMho5YM4",
  "key21": "3Lpcoj9PU9pPwTgUGwSBamvHajJNpQo4UYBZF1TQmZG8K3nPmwvYYtZw1KVJcaAQAUf4xigLCoYfqrFcFUMXV6RD",
  "key22": "3TjqNheAihCKxDQ9s6C3R8NhZufWdvNVmbHQZGabsFrKjiabhX6MWJgrrSdxh5xwtQ6BYcfPiinoU32qv2nz8xbT",
  "key23": "5mrnv1MzwbWtjD4ScqUGz5jKB4izxPqmnJMkMEScuXgLqD9d4BPCisk1JB2eQVXqKx49crFcujkcuo7yrtF1P8be",
  "key24": "PZtn9dJwHzNFiiGycL3Df9bGjcNaHD1oNUNkuaLaAhxMrfKMZhR9WJywxHWsrq49cm9S97vHiEFXH3yTvsPxciP",
  "key25": "5GnShZQdtKxopPGmnRmaEWB51zH3nWFzrykC9FFathacynkkwtUbU5E1VQ1fBXX652PnAb2ok8MLimKXwv1PP5MW",
  "key26": "2hrRsDE9zb4xBStHmrpVDft2pLXPMwPCXLK9BS1CZXGcGiyyTjsM1ccvkHVVuqGhz2EaYdjLD5QNkpdB9YywtHfN",
  "key27": "63Fs1Y5z43iUXPA3rtvGPtfcXXTG821wtCc7ySVVibrx8mM431anWJJVF5QftvnWCePj1bPqgD8mzB4SyAQFuSnJ",
  "key28": "49f76UbBW63tSghcHcT4dKLhWCdxJQu9LyYhpVp5dHWZgyJUvKjSKTbq4iXVwaWaBcHHa9K6pMBM99xhynt4xUar",
  "key29": "3YURaYGUoGb6cSFoNc96Y3kUjLjcGbfbRWACAuAQBLZghgWc8LvaKDf6yR6j6qXeAuiy4623JjPJ8Qq37QPrtcHw",
  "key30": "5pyWUxXZ32jRE3rHKAPS12qnUL41sqLqrk26WyGZEHm94zqLB4b4PaWyh9UUPR4kRvrp4QqLhzMV2qWqiVTWD1Q4",
  "key31": "51or5AxiwPMkup1iFA2DpmioPnjYiiTp7ufeT7xj2WY7nhM5zGb1CTxJ5En3rXwfDfh4mutkEKwsSiSYgkiXFG3E",
  "key32": "5SHhhhzYo7Ypmkqdj6YFeewdQCyk1nxZspRChfoKmDR3zqsYApynCfZSPWJs2NAiPSTjRV9RP7UVsLRj2ytRXjyD",
  "key33": "2bLzqtUFed7AdwXLCYjKK8EZrJzCgVGHjpbCoTKYveSQbGZNhY7kdkFf7ekNhpuTMNxASXcuSFrAPvBnRzWeTbDA",
  "key34": "3UwR2Nziat641GT4oi5W9iBunRSDDiiUM819wPtowJBL7fpDn7TYfaTAxBW57tPnzjtqVwmTqNpdXN5kKiNP5wPP",
  "key35": "5zLEyy6r7mgyyjTChHMWuWdMyrWwduVzwSExos2FBevNDTNXdZsBW7q9us7eyuXPt1N2UhBimxwXrXgMa1hgihRk",
  "key36": "3NxBQuimkCgFaanmUPS6GexvEHnCN7YSBXwKq4qjbYf7joSi3vDUMrku6UdFHMsKoVWG4sMbVtbxke85ysGAvHtY",
  "key37": "34cR9xWojVQU2UbVydTAKSPGpE8MaHS4EBqtyZGUnuZ6CpsoyzwcWYfkEvqcMLxGbjiSSMJWUsy2deMfbEUh1Bnk",
  "key38": "5FnzpnUnwdA5jqFyvKRWRSh5LRmm5tbPuBi2w3az6PCeJEzwtMviqKbXyG8aZHbLRPLu9SxEnpUqMDMntkm4XFKU",
  "key39": "2po4wtRnrj7YY2WVJ6vPf1kFKywwGZ2ZtXP52465oyEFrBigkXBmHJHXtvkutcQRHQmm6VGzVHn46EpS68jyZd4a",
  "key40": "5LWr7FtvXA8ZkHXN3TMkZsrKDSeU6GazDnhV1t9dUkrzMwKJtcMQnacEMRvz13cRazDNUvDLGVM96r4oJZa7CAHg",
  "key41": "2n7qW1WPZDnPW6CrDpdeW7JVKsSTXwFyXyhue4cByXdaUMn4eTE6Gx97NQ1FEJYa5VFRYDX9HMepZ5nwTRtRJKZR",
  "key42": "5gQ36GWfs7uzj3jSBgbrnvfw7r4FxQhfkT6D7QoN8k2mD9NTLV3V4BBijXECTr7AeiMVVGa6ztK2vL8yug6Tjr46",
  "key43": "5EwDvT6S5rqTBBDWgd1QKB4euxasZ8j6sJ7DMwsU8M92j1ZWyp3XzaGB9gxSs8miwpxJgMmtNyebaGFJwpXDKCkR",
  "key44": "4woVE8SNpXCVMeVhrv5A3eEgLGHyrGX4ETqp3axjgA3N6qCzSDqqD9HbkdbmX4gekndgGL2XCDqjrETssiQeQ44t"
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
