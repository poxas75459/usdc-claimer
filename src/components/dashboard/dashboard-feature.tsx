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
    "oqe5C5pkJY2Ng2tCAydCVeS9nwHM4vvWeifQij7QrZXZuanzWftipQPMRcK3Wvw3NTWW2MLkGE7W2wKh1FQi6KQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8R5Gv1fvJszdG4o4PwyTmq1nkciG3531Ugs9fvcyEQfZ67VLF6WQHXScn6wWfjcvN9NtCdj46tjkcgK9eyNbbni",
  "key1": "55A9bwJTizqYNRj33udFtkkMQTvEHMUQqpCiQQxAG7KhNdficfSbeq7j323vRV5Aw4Bf3bqJuV7JiQJiHVm2bTY6",
  "key2": "4yoU22QCD3mJHU6s3PsjehuttASZYP9eLDvush1zaBCa5Y9c1rCNkmZah98T49JAWtGFqUpNjzEFZrdLfQhrYA6N",
  "key3": "4Am5ZrDSRjtiwobNa35p6PUc7v23ZhQQ3SHbS9zf7yWXqc7uKfmRkUpamBEQusud8jtCJv8hHn2yWoprXAAqzcrr",
  "key4": "39yKHGgSuxbTZQAsYefddovKV1fNn2ASP58x6C21mFNqu8yb9aSSPgj7eFCbm5fJRmtC5SazAoYWELDsCAaQXnuK",
  "key5": "Zfe7wWSSZUeMSApcNbDwsi343WxoH5BxfvrHBPDf4nttk5DmsR9fVK26x7BxCHy4mJGCh8qWrcZWVPqMmAUwezw",
  "key6": "5e8b8B2znyJCogQ3RjVPfzYurB4Po8syJ5cS2XYVCXXqqQQjw3E8MSaCjMrsNR7fv5vpWNnWidJi54xqyrRBBTWJ",
  "key7": "wdmwvLvKuQBr7ZmVCDH6eaba7wBwE2zyHqDwotxQQU4ot6btTQpYu1vyidMAVsSzLTyZ1TDYBHjZVZktX8Lgg4K",
  "key8": "2yTTdx6c2dQMZXiXGMupiaVYSYK3zegZTSewtBNf3WBWGsniyv2fwUUF3RzCu1u9YS63JCfCJuvfBiREMVzb6o67",
  "key9": "5uSpuwkQbp8KB3PsAjoXTefdLbLZujGxF8oKjnBUNvp8GiNep2sGbbmX2qp2YEbSyHjB5uJf9AdkEZXBGRp6b5vt",
  "key10": "ED8WQTu8uYu379LagKXrvrimEz27Nf7pwpQHUuNPQS32J6dqomG4fUyDk4SqcSf9QYT4Eo98seBKzHRozbtAEWS",
  "key11": "oRMXsunoGpdbU3sTwgQjyCWGWRu1C8d5vCcbXPt8YBfxSdntmZdC5kCz5QnUebpYQgd49q8wzdoXRhX6xpqSeMs",
  "key12": "mMYSStEHwNQE6ZkuncyLQnysfZsuEG4pkmBeoxAmsQrCbh4znJS4rmoaxTm5UbWLRDEM9KEE84n7FsbfHaTfpm2",
  "key13": "NPza9LtzNfk4LC644F8DtVhCMzV5jno2BGij9gGh7QLzei468YGj1EPhfdWg8sktrreXFVnzC9PxaT9nNrGvzRU",
  "key14": "3CBCL756VFm9T2Tz31YsxC6aFUZicpp74fHPS2aN6SWMeB1k3FySdapTYYZ618w3RDUHZAp8XpunBJXWUZUxsPxg",
  "key15": "5TcWtQYVof3t17pD7XNPvDhUSvPWg43xQyHdMtqvYfMBvz3ZfPCtsPywSmVADuJBWptbD4cjeWFpGKjpZw5QaGBg",
  "key16": "WSJPEFmotHA688MCj1geLaEibiAWZkuekDnpSZT3QcgNHZHD34nzas1dnYGKBumAW8sRUSnhfQ7zg5P4Z1qoGrz",
  "key17": "2VxESmWvUNwD4W3T8doa1ScSXUGWHqYetr4YY9UenCvzPujHGzee34fcP7R95he1d8jzsp2ri1zow2PeRApEMgjG",
  "key18": "5WhcwPQ9qPUoV7wrFWrc93zAws3GN6xbBzS6m3BYATWnAowNMB5qwUAZP21WDgAm5UYUx6Mj1nabwtMWp3NmrnEw",
  "key19": "5yj492TbU3xJsDRMBmmXunaENgkvcCi7XZkMc2e66wuPwhWyvcBa6xiC93QzhJrg6vRcc95KEyrNVGG7QF163YWV",
  "key20": "3hqzM2iJjR6oNHuCXvXrfkBAkKPhxV64tddF9k7FRGbpPBdDDEDb7qcdSfN1MvySvDKwJfKgkc7ptLNWaK2j9CmQ",
  "key21": "1kRVp4i72Px535HmrC7hxFgAhqFbyZgqUiuvsDydZWVc7HFpoUBwgdBzzreNjaMqJrgLa9s26gu4e51HKxCMJu5",
  "key22": "TpBHSu4ZPuaYoGXsXiaTpQL23Li7hf3EYT9KjzPAYCHwb64xiJV1gQyd7PGDwF84aDeNmn1wVypuWvWWuFRurb1",
  "key23": "4UWUmRh6Yid7j1wY6SsVdarAQt6KvSWtUms3XMFUMtJ2u2L38g94gcKGqjGFAEQbWumhgwAN8QLYKSkFngzQBoZs",
  "key24": "2aX6SqnC18WkgvmJGWYmbZCPEqwkPsBAbqPdbNQXV29jobGXcTJfHchjUcTpj1DCEiMm61B2uhn92CFuDp8dad4J",
  "key25": "2kgrgpmJardTfBefTJygZeZM87ga1FpCkZGfj6ztgB3RaYRbv9HqG5hnfQVFwdEnBeLDYAhnwZkoeqF1H6A1o8Dh",
  "key26": "33KMpfGxD7ZhT6F6fZVvbnrdAQvethjmNJupQmLebd68PevXJ26u4NoKU8zSc5ZJ82djAL9hwXY2qTJBzYAgVF1u",
  "key27": "3HCjKxLmgMZ6wuUrx6kUULxuKLNH5Sdtr9PsSRgMDrEsKxnbRbCYxM3hAAiYgTTU947ZWwP3awisX7wZeat7r4rt",
  "key28": "5Xz7F3tuc1B6iGB3KQ1mjFK495dnSwpYqktwVU2xUvSCsgTUAKhwtqvspK116wC7yuDEbhAcvZNsVxu26gfKCM8B",
  "key29": "4PNBmYGWqawyGnRNaoDEgWEDD4nKqziUy4V8GyKVhappoAS3tQDt9ysNcnN5ZoD4xrEjRH5mYSYDsNvxrYwYqZiY",
  "key30": "4HAmBYVngXogYq2TEANBKLnd5ugX2tRT87Gwshg7gxqW8dRiYKbFSnP1RUvzZcnEFoXco5GTaTkPzjssSgXhr6cX",
  "key31": "3NJdusFDx31LYWF3VPosshF3A4H2M9pCe1i1Ax5Z1gcRyy5Ta5ru1FicT4mmt9rthk19vfbaaioiZybi5kNJt9qh",
  "key32": "3YE11rcP28YyoJac2u5BWLYCM3uZjbK8cz2yhBdfN6CNgW4ts3QWAHFKDJkhUpjVC4YdWwd5gu53MukG4A2N1uy",
  "key33": "3CYUMDzAstBybEsiFac1AypdichNKBVUvUAEM9Cq9Rmsp1tG5KasUfLEJ7hSEs5dkxAw5P7phWaHZfdtxt7sRK1T",
  "key34": "45MLgJxgKHs1n4npZJZ7CgjtwUcmuXEQVkrARb4j8u7ysYDESsNRfrQ1ry2FQiRLY6aKoZhGxVLprAkSA49AKuRG",
  "key35": "5d1sZdYHTTcavZnnedUZhHHXeLZH9GBTEkhWf72aqqmbkNDtd8T2YECD7NPMJD2H5oH8oWXCeGfeHyfAPMREDvSg",
  "key36": "4TDmx4zk4Cbn1xCNwC7pMasNayhuwZwdvopV8Pjmkzjujg5Qxt5YCocdGJUcWws4y6D8qPnH28Gy7vZWEd2UhYoa",
  "key37": "4mxNnPSVT772rRTd97eGmYPBso1YCagu3iVxJSR8nkVxrNqZDMZHjjikRUfFft6RhtyAt9TjWjqEccg2ajaeLTXR"
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
