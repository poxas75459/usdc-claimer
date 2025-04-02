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
    "5JVApZhffEYECXf4LkQzB2kFWv6Hmm6X1gmFDfieQg1uyER7WM69L2nQkqiv5m9jnwiR5BKuo9N1dYB8pVXWnEE8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SxLiKaJTaDkUewc7PGbGks9QLbATdVgEhQGUYMfrepvoBQVvx4MaUzJcuARSuM3hvr7k18Vgyg7BygJP3iz2J2q",
  "key1": "4KCPkSi9d9st343TQNkeUy8PkrFS544o3Wmvdn4gs5HG2n7qi5GFRU3CXeStJEbSdVWjCURYqcknXxpZmUESFgND",
  "key2": "42NQfCWAASXnxAZtnt64qArYPaiy2zTVa7P4oXp4N1cBGf45MnNXn9UtWo7CTe1jiiKvU7njQ7tH7H6LpeZYwCkq",
  "key3": "2YUknENKSrXz4ZkHYnE4hLUVVgUPcGakzt43BvWNJ9VCY2Gf1w9jNbpvrcGekJLSTixFaLgWnZ4X3wpyU2UEweuq",
  "key4": "qcyYwTAA2gKWoimc641BbJ47UPfHZGoLMyyNtUGwsCcY8R8jH1iffxW5q56rUq1p5hmBzWWaLzUch2x2wqoB811",
  "key5": "3h52emqnomVnodbYobQmHcJW2SvsHMKy22RnwoAzaVbqvycSeMh1dazNLhhHX5fxU1g4j3WF5AHee6dA2rhqtnqZ",
  "key6": "ie3imjfBL6FiQcrhBDShk7f8CQx823skp26gFUE7agf3xvhG6LGtK92HvW3HZ7CDmpBi45speg7RZAtuwE92Krg",
  "key7": "gnbJC2wCuU28NPU9wuCoiDoCYR4ZiHN4Y1YC74JZnumBW4ikkJaXzvJCXrmsJmTWRx7nfpqDF3bxsMJzwfJSaPz",
  "key8": "5jRSN2ThjZcW6R7QTyhUGitZV9aXruykoXonmu8Tyj3NLbKoHKau4DEMwWchaiAou4GKnW1EsZFx6Vif8bshm33",
  "key9": "3iou66CdmfyyqgrtryqvieseWt3jJVp7ZgpoSzvyETcvkr7hG9CDwtghe3qvhetxto8Jt7A4Hv69CcfjQTnGPZMD",
  "key10": "4pHYJNdv3aqGF1NKsiC6K9FiwAb9FjXFUhygpzT8jnN4anWUdqb8LjSCzT16bCHXcb2AJGb1hS99m7mgcxvtvFye",
  "key11": "3zVXPGQsypYuPnSnUXk6K99wK1ixXyDUbarqhsmE279jJQTKvqV8zD2BsQsPKiUgA2sFL5aghVc1VCQwyTQJCycp",
  "key12": "4V6G1KA7gFKY1rdi8XeKkipRFnPW718iLD1cFQ4HmtaMsXL1oYPFV9rxtengrK2s1DnxWUTDFy69RZPFk1WtLnms",
  "key13": "57Ur8LVPLZW4APLCY9Knx1utGAH8Avkyrpygq64n7E2LgC2tSMVn5okrzkfmi3WvQxT8WQ16nNZ8xzQkrRSRTxh",
  "key14": "2Fyp7cVUh8Xy4Lj3z2RYkrLrjQBaoVBEkBARSHmbUgS8KP2pAvX4C5YJgyEAwRstKxNex49SrJTuSo53FwgDSUQN",
  "key15": "3CZf1an2dBmafcsrTtKuiZ8HD3M91ZBLafTAUdM1QRJ61HNB1fLZodhPVDmXxbfVBrzabVM74fNKHd4JruFT5pWq",
  "key16": "dui4oWvV9ELTVpr6ZqSu5j5hus3WDoioL9psdnxSsepTnt7WNw5K5Sxs7bVi3DCo5kUDDYjy95LmNVToG6BHCMi",
  "key17": "5yzmTWG17v16NrjzeUSPvYRkaei4syaoua1q2V93ebDfKuyHkEH1A82NUWqoxgefRL3kXsuokEJFNSqZgo9jxQdi",
  "key18": "2u9wPo1jSM22Lb1T8eTriyDjHDJVubpDeyntuNPw6VCiq6E1h5tjBj7fgCvbchuKwSA54e9agwrmSfAbsGaC4nU8",
  "key19": "5jEyD8eChksSGNmZ2h5DQhXrKEprBVEZHndDyhdLNkE4Wc2626XmLDZK5vUVZk2V58LdbBVSzkFyqMPBkDV1qU5C",
  "key20": "4ipcB7P5REEbrxYGfGq24XcXqYdQCSSke97GpMTYLES5YJVuXrKDrUvUgXx3wyrQH9vpgknJrspa21HMuNj18nyC",
  "key21": "5gw6jAzYq9iocwC2vcQDmnzeaJvz8vAwCNfjbuNQjGXxS8rRWFVN1xcSsULCLm9gmZVCUAbW3wFTXPcBtyGnjG1g",
  "key22": "638Sz7qt59Ybfb7eyEg7435ce4cHUN13WH71U4XN3NxJzNXzgYRKLnbjA9ozY5kQ9z1SLMuzMQUNgzdyCFVZvZi4",
  "key23": "4NjkUacuwzFqUf9CLF6tt19rrJgsAoB24vxCfPHcVubWrk4J8WJfpNEt8J4atEHUzcRk3RCnDNm8gKj7Ymwc7X4c",
  "key24": "2sBmYqDUNti2vM4Q6knqZasRQhbFGq2P9AJZSMMfFwSPmr8HHqJgUBBTi3CwrJDZPyFwHae2g5C4cdvPNHEQGD3r",
  "key25": "53HJuDgB9xRmRzme36TeZKznKXbp1TQ3gJuvAjQ2aH1zz9WtAxQpEDxj5fAgGWYMCrFReADLodn4LGUirTs54Niy",
  "key26": "5jJz2b4HPBJFmH2ZEAnEgyWLHMrtcLVv2NfwMhHc3YippCoht4BnygMHG8KsGChJ48SbUqW8phwztoeBb7WmQrgo",
  "key27": "nbXvXmbqHfxb25Qyd6FKUSajeb8V68yoVg6j2Fpq8wodGRwJ25JCsC9TtLK3MvFzid8coUHzfmor1AWfRzz7bid",
  "key28": "4oYt1L7TDmF7V75xs9NmqJTtbgVkhZuaN4oUu82zg7jvp91PeTC4u7xwk43kBgPRcb5VGxjfE8Py24RkBhNcMevP",
  "key29": "3WRyZ5UGDBmUKjuWsRwgXUrnSAdErH9NiYTPAyusPduFMSzY5GJxo2XFYjHaaM4wfuQPLKm4XyZgCca7NjHbrR5c",
  "key30": "2KgUDc9gE1JWqJ5TSMagfAiE15osGgNMYTWXtkGoMjq8XMZ2E6nnHneP8NiUf5ucFwHowQ8Ddxn5G76VFsz99h2H",
  "key31": "3CKiAjZAfR56XjNJm4oebesAXZCVcBbBPeQRGrRuiR2czZvZnMSu2ZAzyYEgAmdW1XKaZp9Q5ijVBBHDddMARqrq",
  "key32": "4h1sQTu9p1hUgJrXpnCHLYBKGcWDiZedZuqHnuLQV5SRi1Jqm8Ni143PtJVz5zfM7agFLNyMe4av7RsWNwFLgc81",
  "key33": "4mWqtStfvygLPmX8NyjcRgN1fzjho8yLSvwqo9tpbpinKSQjaVx9HURRSmnq9gFj9zTgRiKxU3b79eM6HGLsiBjn",
  "key34": "4Uns3Lt5Znjj1eS5z3DgG6y8fNjbtfLjrvWraUPkCnjtC8j8TaXa1ZeZwTwQv5fPTgqk2Esdx3e887NL4XLpE5vM",
  "key35": "4NNHCdMSY6QbdXyFFAUn1RWcFYuTGuNW4ZqWhJnQCyagTRNbSpwFXdT26d1hfrckFfBHrKNmeuoz4WDwckexHRgJ",
  "key36": "125w5fXxpVPLHg5CsiTkPdgzPs64JooFURXSSmbAvRwU2Losm7DJg9wAgdVnAuzJExNRscPuDiWXeXjeKCzp5tAH",
  "key37": "4VRt9ZNfirqeRsz9gTW7CHpg8ijjiXYWHPv5iM9uv3nju7csJmfWpNBfnB4VircKm3NeRfpJWi7skg1qUqtMU1wD",
  "key38": "2rci9hSHadmESjsNUxPcQY18WH73LuFu7vfyMwmkUHn8wo7wadmCj5dY9j2YnGjoxA6ZheVE8gyyjqji1RpSDvtN",
  "key39": "54DGtc215MCnCXmbjJpnvNEzWXCYxY5xriToLjvtVADsobyBmK1DZB6bCfS1rMQpkTS7nrRaxfK7x6EEicCCyS2T",
  "key40": "4DFJamJyPkH93G8oLQkrfmsiRERmtfEp95fPfCLvyGqf45rVZrgsK8CEMRSSYrbuVYndgcrFfTuivpfwGvnRHBo5",
  "key41": "6nGAWJG4qcmKPRVytUaBanji6Fikmexc1LYpYCrMisRv6hExb7qHyzNT8pqmaTx82C2wSGfihBbNuVQSZxPY96i",
  "key42": "umLRx79zzm2TPNko1fJJQqCGNmB7R4vFConTymKmzfKLg6SzVS2EcYtqEPkkwkq5htp46bbB9bFECCRArkSqdcA",
  "key43": "4FumPDG5WAchJVi8S6oRVrCgkdPQqLB7s5LMWQrvoyn4wjpE6rEdppDcNibfWdCAYN2hTgMktA7wMrb5yKXPfgwu",
  "key44": "3kUqt2e4sZqfab4V3JoAGzu67sy2Z8ssocQvmCgh8v7RmwkKHQeiaUcXB3qMMix8a53My9N4cH94nTKkXnUHvFg7",
  "key45": "3Lpx5b61cRuzNMYiksx1de3e7TDFRH2AXuaq2Uji9swhZmBtnJAmkHmmKzcaCeZCQJpYDdooXmucHnFfXqta8w3Z",
  "key46": "n2P2p867x6Fp64V3Hpzncjsa7nNwLipkqBcSi7zdkGhehuoKBfQwXJdG4PjaBtf9qNNPog1pbTnPKW1YQBtgfB9",
  "key47": "2MeKTw91FHCDp8mi6jTZgAbi5p4VM6XvUE7ZpxVawYfn5GanWrkUsuGUhQcTcUyugznzSNkKHPnzVMjywSKAvY7x"
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
