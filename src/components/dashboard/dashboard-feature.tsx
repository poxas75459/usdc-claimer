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
    "43dxLd7ARm5kejgs7hYQEQtw4DwBsmxqECpkm7NN3NfFrJMsgLcZRHU1APwy5QuK8izhQhFWSATPABBY76ky8kmq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SVQji9XZLuEqXd41ohijEcnv3bErLjawDwve6QSRt13XuiusidnN1oPoDGdsLykLHWKTB9X8VK238LY7RvXS86t",
  "key1": "63VMnc7iRtj8hBP6JrPrzH3UY1LHk31h7Yok3Mh2gxsvqxqRU89twaXk8rdp9miwKkWLKhxqvNgTZwdX8JALmdFh",
  "key2": "4wb48ZFZkKMHeiTVMygrVcn3c8WasFeBWojkJ26p1vXaHhVN4R3JdnYqTwG6gDK5PdqaiEJd8oDdhVbLjEVUq6cN",
  "key3": "2DqmLe2wRenUPxhLgj1ajfzRNbKksv1YQhbMxT24PQyWHxAAHxpqqZjB3NmXYqm4HM8rDj6LatUFGmnVB2U7KBJQ",
  "key4": "3RA4sLQJZnDUC2r9J2jh56qbGbGi5xicnc8ye35c1dXfpvpf21Gy4fq2eBNyH4X5BChXp2Pi2iB3tJMVpLx8RSdg",
  "key5": "4HXFrFKuMTCRw4wyEvZwZV35TjEPXSrCf82x2EGCuru8aCDyQDza63HjrBgQwSpiedZxsaBWS4xKzsvrZKz84zEh",
  "key6": "3qyLRWwgKh8wQf5SZbqXhLR2MVhcp1ccbPGpvjZLrsrQnrCpxuxmhT37mf7Mcv9YURTFkvQwQiD8AfJUtGFM1BJo",
  "key7": "3WM5uUUrNG3kua2D63nzqurRGKh5PutNqbjquiXXCfYTBcy3KamWpeWNaHdLzbMabqg43V7Vxyx4geBKnfz2zHK4",
  "key8": "62uzMmMpBbdm8pBW9hM2N6uqtU2TJ2nZ3S98g9mTLPgUyh53wf2RnDTCj2RJ3uhcRvPzEGjRaJZ7cpo859MekdNy",
  "key9": "2TDHQiBCQGYcec9VPspWzQVxqQgiAghTLTpsbYZApMPxM8gyS1T4ps5ka24Je2kN2rCz6UwhDfWfEoq65Yqfw5iW",
  "key10": "46Er5hhckgdSCcdWPvzbHCdCPQb9Hcxt1bALYDncjMvpQVND2zct4AmDEA4ZCGdVf86N9RXN6TojPBGjug6SKENF",
  "key11": "65ChqxU95vjhNP8ERwUn4M6saiLNUzcdswDMzi2eeq5ZuLVprEwHkkDsxjkb4487jm1VjoMECJcEZMmv24sjTrt8",
  "key12": "wV961RubPw9DRVUKWGviLCC9e2TQNms8v2Do6bTHHJkcjFiPFXmZncvEQr8KDK7qWTU9ms6AR17qSMuC77mXPn5",
  "key13": "4hEW39NsUYRgpAs17pA58N9xhmcedM7y2dnPUKjEf6r33wmjZWQTBWqBYM3V2RaSPgQbGHo7syAdLM33Hq7qUS5d",
  "key14": "AeXDCZ4hz7R2AGnottfw6ivdnpmMV6GiUUQM62UovznFyBpriACPYDJP8rd1PybphQbmAKLjhDyDwHNdKLwGyJn",
  "key15": "3ddwGeptzaE4c4L3fcwYQVGEvtPG8Nt7zbpYBkcwTDkUa3yHwUQdqkvfbjZt78t8UxdfApRyYby4Zzd3uT5csjm7",
  "key16": "2kRq5mvDswPg5dmjivDgWr5A7s3bYHm9Uvbyro8tY8spf9sBfYtcmQBVb4EC5qnetQ9r8w7RkWkxpUiWkE8qPBvn",
  "key17": "4AvbATFcb4wqWTAmA4yQ8dsETW8HyhypBP5ZNZQPRT5kTy52Q3qbZHVjw4fwHVxD9mAEA14fcC9uigYA6fXP4e8a",
  "key18": "Bg8yrzGxtowBwQ3zNony6pBF7sLNEF6jqvARiUJ6aUi2VLUxyc1MjhQcMe9EsaBPMFzRATjqz8kyrH84mCun6CS",
  "key19": "4CcjF5aUwdRLtUhpvkMG3BqHFwrKqyd4K52eeNyyxE2epx2Kkb8kGnkWjYM4Lr99anDF4Q13NJUv5kpRmqRDSN5Q",
  "key20": "YXZ1TT9ZddrNd16DKwexfPDmUHJx8gjwSdwhiwwRop5MhHvt7KGkyVmUopPDSH9PbJ5HCrB94ftwirAWo6336hP",
  "key21": "63BqGMXUM29ne4CveHHYHikW5oPczY8rf1k3P91dqBB5ZhNHALxuU7HUeAzjz5CyV13qscEMniC4KTLkZyUUko8k",
  "key22": "xQi99N9s4gb26BWNod7mdfDzy9EABUrxf3SU2h5WbwbvgZTQjgsNNKzLZZ1fhZy9WM2wjhi5V3zAJFjcYjsjJ2n",
  "key23": "5sWYqCT187HgmZn6bcrVMrd6cqNP5b4wTex7QPWZWaEAnooUuvqhYSNDf5qzjeuS1ozmsGZyKBpK2zoJMjkJRLG5",
  "key24": "3eAqso93UqwopnAUVdv2EoCuwsuV2xEme6svAH5mFGQsgdcz6gvzggrSaFo3vPwiGSNtNwU8nRvdhpjVZLmWBoWi",
  "key25": "2MTbceejYTd6paxd8kHXtLQhxpVP3NgL6WBK1bzgfW1Rpjk6she9RG9vY7gYD666vNmJUn8aQ9yMbMkVygZHTvPt",
  "key26": "2tuHDxVRTLw8H2TPsiePsoat3eCTxMCwtEtp3juiimyqbDX9bh1LDMzfZzPgnJkiaZePR2LSQGKorpGHuPYYFdnj",
  "key27": "33DsxJjJokTuYyvk7DaL85pLma6KacTvsroMCC1CxTLZLNH3fnESYWyztHt4eBGwRjeHh2Mx3RQ5rtX1y3t76RjB",
  "key28": "3naTbQqLX3yvqMcjbMVFb6Q1wAyVnDzJPCocGmwJ9kg9JqYJYVux2gR8pnhRCZCg3LojxeaWXThCaqThaKrcYCrr",
  "key29": "5MJGLxyTGsYViEAKqk65vbVKqxHjxTtMwUALgh8Y47bzbdT7ShhNRcqedJ41rAREhmGep8A8ZLHBWTmMm4tQe5Ag",
  "key30": "2YattUPhY9LncMK9S1RBTqPNybdEYMXBRoBPqSNfyuXArQTGS4gc1qedNjRdPfUSYjtAeyc5uHj297Qi1wr3u8Sb",
  "key31": "mFigKonoYzdTHbSn4gRsiwnLJ2sbj6iRdBg7NziE1PcYHvEkWSJ2Dgs1swr1adPFeZmexVDFewFw2vbcNUCoVgN",
  "key32": "qBCNrvMGX3CL5ziMPShzshaovpEc6aUiwd1RVCwz2YzdZtmUystcHySxFaEQurg3KrrvDAuefBH1YwqCy3QntdZ",
  "key33": "4oxFNZeMrZsviCwsfgzLEsbNpZiwazaGseFdn44L5NaG5s8LwxnMYN3dJHmjXga2xR93N8WdVDaqJ6xxsgnnuNtQ",
  "key34": "4uMLRHDy1ibBckN74A9F1T2g88ZbcLm3TyVWtvmm3riDm6jtz8yzcJbAFToESChf3XVWqDbrUqtHxt2vEMp2J6bD",
  "key35": "3P9S1RNHK7LMeihRKTkEZnSRepNLDX5YVXvr8XWzH236CL2XzaMfsCenTpzASjWNBQ2gNRw24eQomGCqVAibvDmP",
  "key36": "5svDDzDkwZvU8LqopQwKESiqriEf9KiFbL3ZGiM8FfUJaKnsxwGRQTcFJPgoUshsNo8HQ9PfHmkv7ZCw2W5abgwc",
  "key37": "zzfhAvDcuxpnQtresFrDwknGEAWrpnVcnr5awjvXZbhyF54dv1hQFBMEJgdHuaD4WdZ8t8foRJZ3mhzXkm1jjJM",
  "key38": "hrrxZzoNHNSB2VwgJ35UDHmnS42dX3zavKnJphSQDNMFt4R9mMCcZTcMDTRZ3aZuCqG2Mq4hA2PmkMPw1WMK1NA",
  "key39": "3s9UYdv1GiTxoFPUNSrKMzf7MRDNnYB9YRMA9jsr82QMSu2FsL8frxQoysHvAsxDbM79H18Rexr2yPBBZHtFTMDs"
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
