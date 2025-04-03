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
    "2Wubwj7iat4f94yiYypskYLm1gBkvmGtzRsmACMCWG1btjwRS5VkX3QYQYqwRsEWjWnTDyHc7kxjKNynJhqikkkZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jh5fFNrtSi6Z6ZocF3AjJCCdmRR5Wt4CuJ6c69U7WjVWhKsf5uMdDorNb1ZD2gXLDYTizr3R5gyU3y8syRCL16s",
  "key1": "2mPbLxNBc8kcaSLRKJxS8dPpgtkDqVsUozmtu6MRwq1X1WUSHn5uj7J562NG2WiBmemQggex32FvDoCeHuXVdxiu",
  "key2": "3pVHwpwvfFR4X44agZCcex5y2RFeVUYMjoZM5neT3DymwrJ4Vdk5e5GTG9AqimKGBBwE51NhMQDTQBxGcbZPNjSG",
  "key3": "2BUHZTsNzioYpUE28vum68j9vnjcY9VVR3vfs3aD6F2bTQWufooLX2vPnEMjicAwoeECNjKp8s7W8HaLPD79bGsz",
  "key4": "4MmjsCetxUcjedHynjbLJHr45SHCWedMVoHnY4zt47DFjuUMB6m2Q9Mz22g6qSULAi6bKLcm9bPKZuRKHw29pxfK",
  "key5": "3REBYimyTA9juNyKfpaS94J6ETzzGABEmwHd1uicBqPKAzadKCMqsAT4eGRD3JpTA5v8pFdLK2rwEk1p3bUsuc6o",
  "key6": "LQZAVkTjmbyi61nAH61z2wUGdvB81Qk3PDtQprtyJpRFkjQjaZogWCWu4XH4Qx8wofZHqzsAeP7s6Sa7nRUVdJ2",
  "key7": "Qn5MPxFaDRJECeVhBuLZUSAdiKoexZ4CeScL7ZmPdcK6GdNKAW5o6fdFqzg8ZrLFwtRCchmxPNDyv3T1tc9MFLv",
  "key8": "RSVY3sdUMZP3z9BzumeL85mJtnAwuWerzy6oAErNcmyoYEHEVwZ4PyHpA4v4wxbZaBtMrw3335Z2Y3XwAxRFLP7",
  "key9": "3JCjEGLwU9TBh5SjWXuXHPeXFdt4Y1cNwaXFGz66oC6LS4WfYtM58g2fC9s31EPYqSZP1LdWybKnV6abELB7SJrX",
  "key10": "sqGap3LwQTfedJZdBnKxjPnZfdiR1LfJCD1GHP88wPMVyyZ1Abk1r9iN3VTXE4vMgYDcqk1B6xnML7J28WFEc85",
  "key11": "3Mbu3QejuevQMpXJehkb1uv819FA8rgArzKCzArBhBkzPiDu9AJFNChLH3FYDRSYrtkAaiHwTTNrnwMGVRwp27VL",
  "key12": "2deM6PVeAFChBTFaVhRaFN7zmde5nuXkzGVQqF6Q1KGnWeWAgrCHrbUX3HWGb5vFqwrRTwpu3uYD1PWCKh2UQ63E",
  "key13": "E8iGAUqvJFiJLt7DRzeCwL8VDXmLWpEsnKz6et68yQBJsFWYAVJHkaHddq5rbs4P1JSYJcDY6QuCagmrVfGArbd",
  "key14": "5eZVYKTSo3JNR149pcgC7T8xAx5MhDL5BzowiD6ZhjAuz8iQ1fXKCF6FnAx2Be22Wp3TNRnxCB8Vfjw8DcU9ZTdj",
  "key15": "1HtBVffkUTWrsWjQFYT9TFhdvTW4z7MB4iyoKDmjiiVt2McovD6CZmsuohDKMBn2sFaWFTA4qkgERvkWe8N7RL7",
  "key16": "2Hb7opuHk8TR34RKfY3Qs45earCJBVRkuHwUNCNpyWDqt2bYUD38QLk3Cghx36YaYyER2N3m1HzDbk4SAUeTAknr",
  "key17": "2cQJ2Z6CaJznvsBQ5pYp6n7NZBLwpm5B4NMtqQ7zdyMusxBVPkQUDm1Bavnx1XD2HtidAPV8sEi1fpVBhdmgeqts",
  "key18": "2NeKk8ZZhSkrSmRQfnAzpi2FhnAxYxufWwCT84FS6VnLZwKXj7uJhitzeU83JiCmMmKoNp9Jof8N6NG36GCt9RfR",
  "key19": "5Co1Smnzyzg2z7q9SXfvY7ykSsZp5E6W77rbGg4GPrhLmaw9sTD6gbA3UcfJNGGTaGjVdU5XXv3u5L5jJmYL5V2p",
  "key20": "2v9ybGB6DQdepGHbWb3HrLvV9YjG5MoKER5rRuap9xS27nTPqBtUmDBHnL5eoxWaQHE724yxwxymKk88V6cnBb7N",
  "key21": "CJ7fDue6hhxy4uWozBVFsFBZCHZpx4r6DEM5Lvwq5CDJP6uHSyENsEHfpYaUDVyjuTgvbrFwzMSLSN2R1THj99m",
  "key22": "GsJXNwJbq5N3Azu7CJciFSwzZxFgELJtcLYQARXeKUoR7f9SpdUBT5XvYCnfGZFC2cjJ1VtwEuXMhoezH5G11gG",
  "key23": "5s1SPGoNkfgArHbgqrSepZpnb5C2XRSErQ96A7FWZYMB2cTsSfaxyPpffKSkHwyW5FaAhM7XH1zqnhpKUYmK7nSy",
  "key24": "3WndAAYX5WCkq4VqdweSjXPk2v4p24UNFvsE9emVvXQf5rQT1h2viziK66bYGeWPNLbtQHw7ULo2x38Dr1dyufec",
  "key25": "5LdqRgJffywtUbdt71DgwHasYfihpJiBcRTVsnoEpHY9BEKn6Gp1Gc8MQjxFu8XeCFM33DCDKqh8jUJbpA8mTiRr",
  "key26": "LTY5oV1NSuYDKMBawGTXfF2qdEurdgqXaHmo8pCVZx583EThGe8nTyyGc2FiZr3fo2D2Ue3WSKAwyyvQcF3cBRA",
  "key27": "4iVeoN2euExJ8niV7teFkZ9Wt37EpvMhNYZiNRYjQEbzoWNz49CtW2ZSsr4p44Qeuu1iziL3DrTyHq64zZjqCZDi",
  "key28": "5Z9CTggqQBnBFqLStV7oEWcBNx4kXtsh4wgkc7AjX2GMxNZCjaJvRJeRa69wtGzxoRQjAz88HScChnSrkDj2Jaer",
  "key29": "4yUaewbVETrFVpoA1xLmE9zr8hF6Fz4ZbFBHE8gqJ62stVzFw1TuHQ8c36gezJyRqvotYc4j7p826yPWy77cLVmr",
  "key30": "3KY1Rt9M2KvPk9uGpnTrA4QAPLEjZHJ815iF1HT4PLGXoSK3jUHxQeRCCKGmkGxYDx4Z2ADrc22WSZTcXVEtNCM9",
  "key31": "2mLZf7fyt9ueN29epLTsdWBrD6s5JnQ5HCT8pyobKMA9HHvrnUFDMk8i3MiU3yM79omwvqPDSpm8Qd4pf9aHsVFY",
  "key32": "4BsSpSrEQkftrmKW4MVvK8QU8H6M2aGoHztwVzVy3EQPyRmCJBN5KSCMqKvfWZPbFhQn3Kdiu1WzHs9ua6GdL5u9",
  "key33": "4DvrYnSUJYTXzgRayefXfLCVizkqw1TgwCtU2UQVcUB6NerLWL3YniozLuJENv25QA9yWXmi97suj4bbhsk8Ei87",
  "key34": "2wbCHLghS9wTkZcDKsZUZme62sUrN5taByAmnuawGV5v7QhbFX9q9JZ57F5hfnUoo9kEV8GiJwFmWQecatgPhCT3"
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
