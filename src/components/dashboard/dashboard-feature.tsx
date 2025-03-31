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
    "3BWvgezXRAwBWTb5tzs8pGdBmmnPYfsNVC8xnGqVX8KeqoeaQRvfcJcTtnvydghJZmsmF9iccY2G4rnyqwLrKo9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zXzyGtwcannwZ5G8HqAnzRyjcMWC4dqaH9bPYt4baRXM2ZqxzMzeiTjE1Wt3kvdKMhuVDEB9hUfSUUQKv35FstJ",
  "key1": "3wiU1iimsebA4UMQjNSkP4iUXWRiKzRNxu7nmWy1tvdt7M25JUYMFw9eQNxSn58LXtMvxvVFM9RuPqPPDibkfT69",
  "key2": "3iAVGvMMUvh4ybaHAP7jQG7eSwfXxh6PKMtEv8UxFfZwECjhHSR8fUfTxNQ3yntKrC6xzv7msEXEVkCXaqqhy6VD",
  "key3": "59ipTTNn6aBT5wdNSP78L7i2CAn3K1uxux4FR9tyWSrVdqYwpge8s7NqFM4qMj4o3ScvzHyiZgx9Mk1ksbFCbuCZ",
  "key4": "apbK5Xgf9uRUjKXR2f5BEzYLV8D6Z5J7Q2sDBnrKCZu1s554nEoicWLUW4h157EG9RvREYxRjMnsbkfE7QEMSGj",
  "key5": "33nRNYbFzeXBMuLGAtKCLjoZH9mEJ3h7fmgvKNTkJxNMUwbaPP7hxmh5qpYgh55x7FMj4u8yGvbPaw7QFkVzDr5b",
  "key6": "ugexrc5LAuT66QLfBFnLEx4NAbwWJrjPXg7NLJRunAxKrnNd741kFn8SfRcQ3q6ytJowuMuYyHELvwUEz88qCLv",
  "key7": "2K7JdxXf9NzfzptsACQD918VL5tE8UF4XkKiW6K5ZVSWUbqmtmCJL14ASUCHxTHM54rqMzL92XYGJBWJLAugv6oD",
  "key8": "2pCx5p7KiUUiLGbV8Lf2WGfaAXoAANXeN8iV8YbhLsZsY5gLZy4EEwEanKy996TC3sF1FiRvou8BdCfzd6SoNwHn",
  "key9": "63qH99cHsLy3agED1ZVEShfkHNh6sZAVamgprZdiExKdmhiUXy83XWiDsfJe8chFi9QmJsTt7XuvQ3TqQgNByfXj",
  "key10": "5rK55N3W2hGSnxb8NzgYos3s5oRqHcfiHhFfwzq9Ae2p7jUCnsN3cVtWuyubCBXNH97GkW4ECGqCkxis5qHSYtQA",
  "key11": "3DU3b1zoMcGXxpcGxbHh9atwbMiJ9ysPmSvRGWu42nHsq8jxNDyEWAkT93ShpdcNuZu9nW1ugg6mga1yC9facjjF",
  "key12": "5uhUgXZmBe41uRnQj2SCqiPRHPkwWJCvCwnZT1zftak4MTEXt9zLezNi71pQkZQ2un62Z2i5RkFU7BuKuXX5KRrD",
  "key13": "3GCoRKGcPkcVN3uv122hp8JGMdejnkuM7j2vPBdKQBRefHpopcRFDsS59MnDKyKL8pkxYRxELZiBfAXaoqsGoUXx",
  "key14": "5zyWL5N8aqNqZ5YASA3Aoj8btykjZG4PbDs1zazkb69S5CcCATQffKTd2kMjD1Yb6MqkgqthKM5nhyLpgSjTEVGu",
  "key15": "4prcdwYHRz8vzZuFSLpHkcAXcA3EHWk81d37iFcGSamkmBgPSkBu6cJPV2cemg4M74EGWB3UxK68E1R1KdFwAEco",
  "key16": "uvdw1EE4UMDdHXSbbzpnCjQ3Ef3UJVSheENc8zMYKvBYEZJxf7cfD52bU2AvtLqt8D497jELgXx7m9B6cPP5rPp",
  "key17": "28jTiEhiWAaWieHtRoaag2Y6axmdHWpsHFmmYnP3Xq3XQ3hRPxk6tMkzEZJdMSZr8em4sBZFdeavSDH4dKP3D5vw",
  "key18": "2W7kAzGhjEUretSp2gXjBLaoYA4MHgp6r7G6bqhQu69A3nJc5TM1Yo2n2Rjysi9DUbrcLQn4QiSZZV96FQUxFR6r",
  "key19": "62Jhk1egLMtg8SdV8nZAGTAzkoUqNVKwTwkGbwPSucWy5jdc4GA4jbqhMtGLVrQUwXcAZdNMBVaSjTsrmxeqkDCe",
  "key20": "2MnedEVgwM1RVsTmgToVWjGfKopvikSkDHKx48MXcpeWxA9ne27n6RY7su7cmQgGtFH4h1j4Kwc6viu3Q4mHFDzb",
  "key21": "5pzrZ9HeMc6jE39LpXmWxtd9hdmzwzG6pEmwhwGTSFafGfdCsh5cgkrEHWAPQJ9simBoXpZxLZ4bDEoK2RmpAhhj",
  "key22": "5ACCJvNpUYJNqoj8wdxXBV7XQpnMUmxjfwqA1Gb5VXZ3A9GFCrW5dokL7CuLFeaozSHJuh3YYg4HGE9Bq9QHsn39",
  "key23": "HbS7nf2XfttL8382Me79q9vWCQHvR6tjuQxfPoq5J1P9sV2GwbUksuBQLDJVnMGPGqYSAEy8rtBqYGFGyJSnsNH",
  "key24": "3Q7Qu4RXGRpXMGpAHCz9BYbtDbX5zcPkfZQH7MJiWm3jWd3ZwwiEQVrEVkqHuvGTd8nqxsTkoNQs7RErrYU9phrc",
  "key25": "3kE9aw5guVACMofKWhmnd7tWKZyXTYoz8LE32LrZWZQ4JKZyT2XhBkXCuuDLPFqxb8DWdquL3n4Gx2sfpk55724E",
  "key26": "EwLvCCTmp32G2TgULToTurVHVG2mDb5tgfyMKqSndh1KzC9pWANJJC2dhJaUAVqfah4Z9nwemzKChPgN2tCxCLp",
  "key27": "217pkqKENawFK6FczdNbocaTdaXYg4HQBBonqkUE8SnVex1HHp5ELVAkjedPt1sGfWjRBcxAYTziQ51gz7AnUM1u",
  "key28": "5xnCzQHAg3yqdZKxjyvsz1Gterm9xK5Qtm4xkSXzioRwHWRpSpgPNjbyeH6r97pxdch7uwwZK9MmN4NcZDbiGNNc",
  "key29": "2DDMXxQjkAK5zyiFcxzpJJ7mMiwcR88MxR8HwHJvTd3TwENLuXVwM9vYZPVFEGkYbSEbo4e8qbRQzbm8TYEySjyD",
  "key30": "ahxmsA6W4ydyUwES44ubWXN2TsA84vRWjEUU4zvxPyAHzHhctnc36jEHHmUX6Pm78uhsUGfW6L9jBELayKgLAvL",
  "key31": "4sg1FBkYE1ety4Nw6UuYk265dA16kZHKAhtDGEoXkJrvkUBbgFGBSBF9icq4YcTQiGeix8fVsEQ8F4gNwnBAsqFU",
  "key32": "3iuLmg54XMRp4HA6veGBHQoWHvxkMYGKx9pc4n9eXwtMo3qptsk1ugPnvKXLNwG88PfV7kZTpwK6fb72cBqPzzeV",
  "key33": "5WsaQ7t96GDj5aNk2uPeaT17swgXA2M1tC9V1mbPTVF9a6GAJTK7gC8Cj1bhQFsHhcfq1ibuA1yW1wvPHkWz6o5F",
  "key34": "5DEoDpNBSUnsWaWmX8Ss6tUthJwRHSrpR7yg7ZQYmEXAEUX5Th31YzRKEA5bDexVzmvmJfuGbavsnYnS6XmJCPom",
  "key35": "4JXoegJkWej489xx8zfafLg9VZGH8WvMnSeFV5hxB2VR58Gv8aSmE687uAHBiazvbsWdqzQebWhPKdBFcBWy4P6T",
  "key36": "3awM7ZVSda9JzNX6PjHo6ufpN4RHAg4EwWLJmWsVCSuKn232JQjLNy8vide4SmzLqmaPUrzLiJDkj4597PJXPip",
  "key37": "22EKiHJCoM9dthpvaTQrLBGMe5DD1UG1diWArvLjXP5dt69t5qWSMkeNFuovqLL46fvu3Sa6zJLrCcyobqYNtJRD",
  "key38": "4hCY1aU4UzwWomnbGWgxZ2M13AGxvcKjBpPsDh7nWKSMXF8UaCunKEefLW59ggeLv3F8qGeFPN7tQykcnq3hTuVD",
  "key39": "m213bgShWbwBuBt7su2AvbYHPm68gfzvka9gZeNpZzyAPnSra1eDzjtE7eAeMe7qoh4koywL8JvYRNQXETfvmmg",
  "key40": "428SkskKJN1pVTzANdtU21KCxeQoUd4rxrZ3Tqu6pG7amhhRNHF2bu6JSSNFWw2P5ZXzJBYK3TkQZNcQ2EgqiEee",
  "key41": "3DdU7mfKnVejHPvA4SLMta4YhHeQf2YLp8wAgCm9V5pL5nKwBTex4LBWGrAo8BUPy5i1fatNVjeNFYtTq6Rab27c",
  "key42": "5ub5BYCyWctgZH86GioZ4AjrPaUBwoZNcbEntePxhWNJjcWQDavGnERdQGnsSER18VznHGibjYNMkUv17aQSgeqj",
  "key43": "2rMQwwy6nxkkdf9xbZEfbuZt7pG1QjYo5XnE3XXEN1M1tw1iDJPK8GgSP3pnmtu6g1iQWzdurLSvhMFoQ1Rue4qr",
  "key44": "XraYpWr7Q6ZQeFnqsasoQbW2GvHNGYPjyCWg66aHeUJrLRyTSAWp8CyoUkxxc7z66ST2iWXDKqKKYKRgfGCjPdD",
  "key45": "5wFg8mtA2V5UXu73Wx4gDjsAfmMzGycSAXV4LBx9CqHNZVhrHhTQoBNeo4MnmrKLoM4nFehjbf3bACpdYzSFrmhN"
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
