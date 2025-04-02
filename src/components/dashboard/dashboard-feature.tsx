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
    "5CtP8c1FCoGHivcDisZT8ut36QUmapdbLUU59BRcNit1yJjrqfmazgrojqxznTqVD5dD3nN2rccRyDGe5AS1YC8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iiDvyUD9RzrEbw6wBvesCnHHvYtvHX3D22amV59Wa4m1qB1ZCpRdTgehmpyCgB6UzehmQpF1sM5Ee3AqcSaVr1q",
  "key1": "2cAzRcvx1yuDp3eStxcavQrLSu6AQiesR4XvyfnWKvUSJFr6SQdjaqRmk6Yq27Ju7agfx1fRe43SCAqQebP41gj1",
  "key2": "2BCgtFH6ibSmswg48xMYxXheZfzaBBw4wNQTjYpS7qCwgwBMKvSNcmErYatWNhqPUHFDdwQfMytzK1c2vH8uQkFj",
  "key3": "5zz4TDc2nT4VC2z9Uscehz7Es1n4F6qCwfAD9AsPUJKFXnxVHbVStJxtkYp6QSE6z54GQmBLE5GYoZiUfsEVsg14",
  "key4": "5hC9VqMx93Msc4o93Dm5j942TMUT5u8d5hyxAFtXW9EjZxyKug1CSg6zBYSCJPDVtbcLopaW91cwyuFWvYnGrKwe",
  "key5": "4xrbdtnXpSwmwmHtHxd32NpAW8SxPVWSfWW9pzBaWnAhTBTuFJB88NB7Y1rxRTV2aThmG9jfDernAjWBnJKXWpEM",
  "key6": "3rkptb2YY5rRCd6mE6h3YfZvp38TYT7MpUYMzb14H7oVhkjTVEmz25cEKRiFwuCcupuZLQC4VDPGnVazVfZVQQAc",
  "key7": "5Lk1maVFBsxgJrrJzkcfpFvRk4c9nKHtBDbtdFwB7bHuWGThj8gS9VW6mEY5eogG5Ath9MM4f5nY7vBszsrv8SiZ",
  "key8": "2mHcDvBP1A5PemNjahPgzTKFQ3PMQAKQkA2QVzzfL6Zd3AKNd9yw9eqNecrgzRhr5ua1LkrSJ79w9gYGBzhPo3WP",
  "key9": "5tcpAYCWxn9xU4Xu1CPCDj31bLKB5ktKfSe2F8NeDJtE3wSfF23o2JziM3Yo4GPRa8PsqTSy7mGpTC97hfFprmnz",
  "key10": "avCF3dJwePVj6kCEcvH98EnUwDkWkwVLMre7ZFgLL4MisgkWB7Vs1WN2B94No2u4v2wGDwtwgcJaveELziMYADE",
  "key11": "5gk9mtQ9WnQgXavHUzeBdTHs5kcPs1uuJLPNdVAJspRNimYHidt3rbotdmRnBF7Ghy8xu11C7X3pzmn5ApdvWhnD",
  "key12": "3WtpDHwCgUbyDuJoX5bN1KmvjY2z1hr2XY8xuFaHvGhMPvVLMkADVmhQ3xfxtccSGDX5rASi5rFDVzDHQxYY5afq",
  "key13": "3FWvLGD8h36skijsSJMRoj9aUQ2avvVfqJWx6vanp82mwmD77iaFyypSdF9MuopPp3KXbELeJRga2PsBiCLzFPU4",
  "key14": "Wih2sbs6CCvAeeYQCZcAPXn399ixZWuv3tSJ9aVovMt8nmyUxoS9ZdCxDAm1WPZEmGhcVUdmcjLrFQ91gUu2Unp",
  "key15": "4N8CkiCbKiVCuMeNtTMygsRbHnpjUcJtULF1t4jiZ5mqNbc7akrJ385NgwZ1mnmsrqBtwHY4X36r6feT5kar4W92",
  "key16": "3pZ2rioabU8YUZRY8m6N1w8Fh44ie76vXWTBkpJ7j1d8YYsZKUUHg21qNME3HsAdwfhY6cJfPzLFZgLkr1Q2dPNH",
  "key17": "3WWNfUvF9WaTm95A941RdFXfujFGhed5iuiRuMGQLNBy1Z9eiV9UA42Z57gooL7E17dmk7dZGq68u86h9vB38hyr",
  "key18": "E1RuWiTk5QdsFsofLx5YpMfPnrAova6mb9FCxAjNwazDY5TrAqTjFmn6vkvruyNQxeYLk12H4biB5w5WXe5QME5",
  "key19": "GvCLxZZ4JaSocAiLJ6fJxEiH5N2sAgALsdehRNDcnn243rW8rJdVrWTUcNbkizi8RwpEDL2gwBjqBHcR2GHTDcM",
  "key20": "54XA4gxxj3ABE7Eei2pL1YEtsUG233EaF8ZHJ24AbmPLWAhgWxgk4gFZ9ZgSymfbWpfHKbfFPxXw11XVvqbRpErY",
  "key21": "38p9H5c5nnmkVr4TD3UNhjc4r4VfTZLtiPW8gYnMhCAtkP5MA5wtAmDubMvrAQDffcMcJ4FxLNkXMvEsrbBXwxom",
  "key22": "65g4LRw9trtWboPQWAD7P55R3t6mPtg4wF2j8bfdfJswXdK5RfKLkkdHBY1TctraDzRwn9a7ExCQRBDfUeyq3LuY",
  "key23": "4SYBzGvA2xLDQAB1TCvk8Kt2mBUoFXiC1u4b4g9arGVwEiwnXVnUjctnJvE35eu6U3TXCZdzXfmey5UVzEzcZpgv",
  "key24": "3VUacZjT2B8ekda6hFxUqEynsrmqBdv5EULwB4z1FzXYpn5gjoSceTACmEZGg79u9H7yYcitGQXq5kCuepbUzQRj",
  "key25": "245Mr26hUUfVFmiQW6heBBBBRYiYHNs1YzNSGB2WvvbLGjY4K2WrD5A6JD4Ae8SF7wGv6EYLmPXK4NCsMga4C1tW",
  "key26": "4SkzoX8gCoGLpcbDggPj3kWFXMB7FLSnHXvrzwjDUvL3zXvgqohCJnkMz4Bgb5gAaoas5nY7hUwrTAM4UoFfMqqJ",
  "key27": "55FDD2kRao62wKHd5xyAJLyLqTMxnCCfsuwJYhXzu9ireBtVXFcuZc5RqkLLBzCTCUBtjPckMH9jciGUceBVnZ8n",
  "key28": "2Qnx6TUmJCaTasYmpxhXGAkuqTFxtuzH5Qdcpq7juyn44LCBaVmDPJ6wK889D2mpST7m5Q9XFnvxyszGYSZKB9bM",
  "key29": "44h1MMmP9AoCGjLw47Lh9HxFdSXGYLVrb6NaZw1gK2tUYAGiWRP5HTpWaXbZ5j1Tnyas3xsXseZEyDZucGH1a9jN",
  "key30": "4yaJwXfV68PrnvQiedWyAa6svDtrgfSfbm8uVbTLYRz6J3eKR4s5FkSN2dbZTruRLKE1RS61K7KUSzNmM1yYBaR6",
  "key31": "32Gbf252hkU13iJvf5cg2jcyon3UGUPGHH2hRPWJdG6D3C2okrmSPGK2p1xSHusrdr3S34HSjd9VuwueAySdnMV1",
  "key32": "3ovenwAeU4XyHgJpEGSFrCwmwGKafGr5wTgmCAVTNmPiC2xcTqDc4oHa1CT1Rkpjj5m5ri55Q99VnGTs7L7gYEds",
  "key33": "JMP33dmaXyrTP8TucXGaXNudYjjN1bMC1PHhpzZHJvQeZ4qkPWugxddkfvdD7aUdndYPPppXzuz2mAQMJn8EXWF",
  "key34": "4W5XJgjNXWn3mnSnKbqLNXdAjqkVr1qHo1wv6ewxiMfQVVGprxd46gL2PjQv86zsrMcn9vBCauGgNNRSHGPP5VgF",
  "key35": "DTRBb7hj2sP2TfWMPRmPAciXBmUjaDebpRrEeoyKWmAoYNwNyLt6hRod7gXoNV7prvkVYgja4Pyjt6P2w5vfgdY",
  "key36": "2txvCPWLJQ6EW7JAhk1nNTmLx9wX8CXNFsWJexkZH1B9haE5KvkpMcfQkweqDSziJ1Ai5pF3cutByKExuUWH1STs"
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
