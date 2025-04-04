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
    "2EQHQL4R37krWaZbjCamD3YivHeKXmbsJNbYNE4raMsGuJ9cLn5DAD2dspUWtWpLthTNt7Ha5RwnfJzANYrJzoeU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63o3KzmVpLHTDSCoy1ubHBkZgceKCzXuNNQMce2jwTKezFT4XJWFfwiyK7Xx7yv12iHS46WQRu827iQwG5ExBToX",
  "key1": "ibHS9YbAScccY9gWmoNa1BNG8D6AzpjKZfUUwPTKAchqhDM4ZH2dtsSRKzrsxnqezUg2YwmA5VbmSrVHmRCcEuD",
  "key2": "4a3YZDKZUB8L7u2QeKEawfThW1ATe3aKqSR8vvvwVyde3jhhY6nd9g5EBTszVrxMx1TEqrfmpMejYLLd1s5zXina",
  "key3": "jVcFBRYr3NTqwaV1ZyFsjAgDxreh5A27VUU4gV2BwkSSmwksiMASKuo314gFTcSsV1PnMKd1WAsoTgXim1aKoaD",
  "key4": "4HzWGE1ZdTJiFztE9a1Kzvzfw6SHeAKqpNoNhQjRbocGYyvFWcr188n7tndKZtAfDRRmrffkxZ5D1JcHpzQsUU4g",
  "key5": "5pULqwgGR8e6xdUXqLVtkBg4STjo7VzW5esoaXDEH5DN4BNWQ87gkmum19T6jEUMnW5EiGJ4JqMYziuo8ZLKnRKH",
  "key6": "5oNMUi8qpp4Rd6e9NNDZ3vaJ16hTSd7BN72B4VYu5sFrmKxsGX5abkwv4tS1EJBeyivbWhJx2KktXL6MYmujT6BJ",
  "key7": "65eFCyMBx5EuGQDUE3skNnCxNjM7JDtyPyPzpkoX9L5RWZqxZRCDrHPMPwJNR2kW5PqXxMVe4gv1spYMP4ZyTZeK",
  "key8": "448qQmTN8bPuSodHJoZfKRDWPLsjvzepgE47NrbrhirmxV6eTEY5ArURXhXArqpM7sdY4hxh4QfZRLXaE7qYJxHv",
  "key9": "4Ww4MPQvRTZZBaEbXPcmB4VQQ7sXi76amoZuCSrC2jDtREp5eYc7uvz1vqVvLJ61FQrQMsfa1CE24jwnAexDpJ3i",
  "key10": "2U3ef5DELtSVFtnQLC4QmBafrp48aZnnEJUv6NbGaMXTSauqMjm23AyNUXJMq8fJQd9gtWxdTpp8ddwcz3hJ5ovb",
  "key11": "24JHujL9nUvF6HT5HTRaDkQM73J7TpLkRfwZiZTsHLh6DQPEYrpv56xyBs8iANgTgSoQA9SmeaTvGhRA4VupybK6",
  "key12": "M1Nm3LBibjz4DvVbf5w8kymEaoEnUjvRSCgr3Am6wcYRUAVT1CZvfYjH4L9Gfsmm21HLncD6LK2QQdQtm5fPfZY",
  "key13": "3MPDWwLKXhrDhcpXArkgWgdmp1REx9FGCfei33zj2vXqSoL2Z16UobDM747SZspAvgcbvbReJXpwmZkrCeJcPRhk",
  "key14": "4FqMMEMyG9uWehBQc59A6zsGL69qybW9LiiUvmgvYtrPE3nwoEmWpy5DrDogmcbrbz5izXHqi6TznDxaQEfLBtV",
  "key15": "64wdUm5f6DMRtFNSg3qmv7LgkFn52rz6P8wJuiRKB7fWDSL7jgjWt5VkySnSmanVJjPgbCL1WPw3uDPSA5EkzaK5",
  "key16": "CdDLMeEhXAqHPv57h4nihJ7PL44hY9Xy2JaDQm8ADuh4VosV3omxNaSAigMhB1Ysn3UN4oCCJ9Ws8KD7JHct7vp",
  "key17": "5frYeopUe2BQgZtUDj5vR91rDDAS8uHuV2mJ9pxhpCrQxXmyUe7KHTxk7ryfZ7b3N96nd42ZFcsoVzeE1j4cPsPb",
  "key18": "3UFtKDTJe6vG5yjhXUt8GdYFzwy3WUuhyC8mjLJbnG7uWVDSHCpdPuwrif5yYKhGViUXrKcaEJ3sbXK2pA3r13JV",
  "key19": "ZVGXiH18nu6H32bmGhWqd2LgYt749A24XnhFGpQVZn8aHFutUmkNKNnBbt281M3wyyv8NctUvJzeesu5XmZY76a",
  "key20": "p7P5RMDcgmTvxnUePTBMLnV2MAYX5wu76NCAZTwfkpgUEVR1e4bSr2ZkpMyVz9dLMJtfdbE869h3vb8FiHekQuw",
  "key21": "qV1mUDSgNAC1tTJMHUHA5upv3GXCPMfu1L1PguDvALwbwZdHigznkip8go3azgmLfxXnJykHBMUjwry1WmBKs5o",
  "key22": "39MN5ZqKvsxYd5XRkA8ubAr2o8SRQsGJ4YgpDPtN4yTigo9NZowvhKmEcRoyqzSkDdpHsr76QQn3Tb9wqyHF6zMD",
  "key23": "5TdFNEoNkUvFKefckMn5qiBN78UxpK48c3ZqHVeLWjUesmDPQdv1KzrzxHCqoYvX9CNEBECxMW8ip2XzJaZh4Afh",
  "key24": "35fcd1RUWwkVbMUpK8aZjWUDF91hgbaHQbewdFESEJY7prTxJnv2rRUxfwHo7qwWbn2v977EFrW9rD4XYDJNEE3z",
  "key25": "4DFdroMf8pUX2xwQ6eQ6wt1Qxab56Pbzw1bkzL67WRF8xvkxwaaV5UDCpPnNRjUL8T1Li3mBbGGG3TRQyPEG55uT",
  "key26": "4wfhDYQkTJ7CfAaEWYG6k8ytKUgdeir69xfzf7DSmVc9iHmpeg633VxWAxdxDtGHjbrfecFV81RiQ7qnzwFFbkGd",
  "key27": "5MfJ65wSu3zi31xcA3gazJ5sV8bKtts56PHoH5Ke2sa1jnt8GM3shParufpZCbGF3w8JtrkodfnZNVchbZVWZumF",
  "key28": "59ijAjy3VSPpFwhM2wait2WQFH8SF5MWPTVALQrhfaQGTs4TkSVVFpZg7nPTYJM48UymkgqahBYgwV6shHRD45P4",
  "key29": "3LXv5jmYvGkLiy6dEWrLBMVQ6sWvQAnFtuEm5Tv7iBWYwzZNefKDsuZ2MdKkhLzrcoifa4wJV7FDrf4L9yXS3h5Z",
  "key30": "5yJ6CzmetFYRPR6LcvsNvciXt6s5mQAqPzPUbwTGTZcCgM65tYrArUMPMQEdHjpbYymndAVBwEjNzrAhqPV6aRBT",
  "key31": "2FenCnCLFMA41mhU2CopXUxxSM1wJyLbRkboHz88jE64yGheKbnrx6YLgnjYAvm8GLStibcDLeAn4cc9TuSfXxFm",
  "key32": "4CUCv9XA36WQHHBzkPVo9rC6QsgyTuRipo5xn36DH89uncQGFvXadTdqinRrSSv4ss7Q8XQk2VYMoCQdGYfP3WTd",
  "key33": "5CypaB6Z5qsbtVRQpFWp2epPBWFsCYQfB73SMC4VPSsvnzPXRtEDHXbdNvXShVctvP6DQn9Y8JXmVc2tKMaNffxn",
  "key34": "JewqNnt3o7qiqzkWtJpVudSvNzsJmWpFDPupEFDrk5YZr7PNHpumVRngTLhdrkp4s9HDkSmzGFZaE6g32b7qboX",
  "key35": "2aGprAbsrodgtVvVKudPATVYz96DTcnLEKho3JYbkDpxjF9PF7PjdrXZLyFXKrMEPmPF2qhR3sfxRCGKU5FsYbU4",
  "key36": "hjyZxND9oVuygcQ87y4CuDxuaWJ8SFt2EHiqTe5ucNYd5vzo6g76HXQWedgBL9VgY4XRicFUQeVDnDuRrHrKiXj",
  "key37": "4YhCg8fMPNBqasURjVsve1YeTPUDjTai8WRHVRczjs2qFFHYRwSHk2pnxuDKFw9EDfh7GYCC3CG3XfHRc61Sn1cf",
  "key38": "2URPkhCMSom8GMK7ztfx54cSeBR6b5Gn8xTUwuLgsNdSqNDyM4EQruSieL7Ve818sXQ3ZZepHVaWZJAkVQtvnAJW",
  "key39": "3Mv9MGgJHdqEYKgVyV8Wmbcb7hHgCmwq64XP2znPkRkGaUce9ELHM11efVMmw4SUgFmhg7GPSf7XLg3S9hwnrq2K",
  "key40": "4mYAaqZZks7uox1RRhtKkBtUKing38mfpjQg7FoBnfXfYujocUKbJaLw3BDuhoztW3abu7Uj2ZD4GBasWKYjpx9f",
  "key41": "4SwyU7vjENybdtar7UNzbXrR8sAKFWyk5tRsyhKRojc6cskckRp9XXayCfGZJs1n29NiXKEiz7LGDTuG4R5W9Bk4",
  "key42": "5cqNDjbi7kswg69ExLydAbo8kj5jvKmgp2iqMbdo7AMhpWLTNn9WDa5pKdLEzhzuoCLgi5zLHZeB3EyQWWPXrysE",
  "key43": "4KeRJDKPS3oKEeq4W12PgSweqknTBidCJbfRp6ihggkbqmC7rH1P8qw9GwC8am1UgYyeHdNn94ycASCwgqibryPH"
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
