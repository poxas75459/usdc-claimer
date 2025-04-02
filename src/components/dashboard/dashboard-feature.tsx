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
    "4WHdCF9KfKVnM3jb1UsG4dhSWVND5u4WUmcYoZ7dvneqewcVGBoZpr5euDf2rogFjLL8U96tpdnCGo7tFbbo5RBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PnkqGqmx8ZEhv5tk57fb5wwY6EqN2LCMrhh2Ti5TpHkKFJMaHnzmSaxdB6qsVaa3WkUAdHQ1F9SNtocoS9NkEj1",
  "key1": "WPpiubEFdmtjKMK5SaSHMx5HFUucLiYs7JHGJjpyGvYX6mnk3eqDWKQi8Px2BjRgE5SNjG6oC6LDnCr2yMr1YQF",
  "key2": "MUoNH9tc9n3ZQTZF9aQxU8wT77SSUYxp19xZJZaiVeuvJz2j1cgzY6NbN5J27AcWxpew6GX2NzZpAVFrRToPuat",
  "key3": "3QpJqJ9LMVLuNPpPywV6c8twUCW4o6Qp69eL3ANwcXvjU8NMNmXT575vz3r1qVkYwv9tvBHMhoJEkdnyUtzxToq",
  "key4": "546JtWzvA2FBaYq1PJq21ZWpRiXSscV6XqZ7saKvPmATZs1xSbmchktvqAZqd1uRvcgcTapcaCzfceUiuR9GGJ7p",
  "key5": "2Ce8SBv2CNru8QbEtvBJm2ayJtsyztjzJrVFqy4zeVDRoZxaz8uyXekwVv9iyAiytZx9Ffok4LAd8xHd94fqAv4G",
  "key6": "4kvmMje1rfe2sHsknry52LMdxTkLgQapQKVWHw8PkC2aFXHC7DbqroVBsYWcTgkwb3X4aVGDrdRD1uxJUYMQd8Lh",
  "key7": "2Y2kZBmxxrSSkKirXrEtx79twJWig5UuvP3mwndgCFeqZV4hcxD83UCk7J9NkFx5GavQrzGE7Jk545WWRM7z24rX",
  "key8": "2KWTUuR9ePmTe6fhwfR1rYwBBRh5Bzq36E4wZ4oe8RTCaf4dLzJnmLXm2dhxFMn4GGqVHKHfTxVTwNrH3Q9vKG2B",
  "key9": "5r8y1uWhzPc1uh19imfTFJWxa6wbxsBLGEVvUBVzGjDCresnuTyviZ9LDmUhXT9nJhXLBeHuHKDpeE35aXDBKT2H",
  "key10": "3UoNZGaNRY9gQ6Vz9KxDEWoDSXRui2C4AG7BJcYWPS6EJjNoLahjr1aQjsdhGRjeF3kJbS6mrdEmQz3nLKxK78DQ",
  "key11": "4qZtRNwGW42JfMS93RW3wpFon7aA9Aeki8HreHkVEZ4w8FFzrrH1BUwrzaBoAN2YhfL66HrU1GLxk4aqbvyRUoPL",
  "key12": "25LaTWiSHoqzrgFQPYEi1SHg8vCWQBWe63qsvMtNmFqYRYi363jdNGPaiZmBCpxStq5MMPw4K1nh1yVNJifppR3m",
  "key13": "BjAWjk5fccV5GKAyPPQNXd9xohZL3vu7HwLe3PrPXWhvkA4LgAHV88q64wphR2pQHjfzYpAAcD2sGYgkmSmHaR5",
  "key14": "3zi3WAFAWRRtTf9QqrbGKsYskZg2a4sTa7YSsww4uAdMeTC1t1FA6yrW8Rm2gbGApJHLt92jrHZgWjixXF6K9NZG",
  "key15": "27YW5rjq7hjCo93gGKnBtT6BG4BBf2yUzdu9K87k1mc3VekuzuR9p4Ka3gnTUarkE6LZDtHaHurzu6vtkWH8vybV",
  "key16": "iqdcJGoEURG4fvwJtzDJkQkuyDhYddoTcrUqy2hCkgVXUDAJAWXDoySsfqLp1pWSJUtwyTurFPZ6QTDL6uqGYVa",
  "key17": "3Vb9Q7Abq772cGNX6ADef3fRMZPAFgEbJBs32SVLop1iBy6RxzMTrmoaszYvnMNzMUc8eNgdc3n8T3EWhBa94DJu",
  "key18": "AE9q8hLkDvKZsv7vA3ExdykXBywWrHdKbzg6B2Dcmd7jUoKevm7xaVgsDBnh1QeE7EYohX6zgxUuSRoiQ1A1JeN",
  "key19": "LELwB8ztM675RAEpAR2ku4WLcPd3NNgdmidx4ms8uahNYs1Y1K36UQzTL66qz58WebCM1nSywzWMe8qGVbsojJo",
  "key20": "4VrEhcYtesu1HDhpghUeb2Zv3P3iXghVp65wFeubPMVyiThXr69gm1U7BgtsrvshfVoh4N71EcxEYJMXvrQ4sWMb",
  "key21": "2iFZwuBaPYVoJnSVCBszoMb2FbwZ5sFKut2a3NbmANuCZfUKd2ewymgCiasgg8jRiCvopSA14LYkYcfbD3Ji6yYp",
  "key22": "5VKnckEkcVP1MJjuMJxktJSpvS4Mv6jyLXHg1mPfbD2XsJ6uqXpqrKjz1xhaWu7FJeoTQPnMZtmTQDEVb21zU66T",
  "key23": "2N6paFxerexn9EEBqtoxQXmqnmBb12zfon22svuhB95cmS3MhLKaRwNscxYkcH7bUok5DB8WXL1av15rJKtcFtYa",
  "key24": "XmZv3gLqbWA5WgDfyFvKKKTu1Y2o4kqM8iS9fpHpRq6KMQKdeiJVb8d5wXS9HHZmuqRoS62QfRdx2bjYP98V999",
  "key25": "22rrbWJKq24gdvVYRqdvngfFAkKNKgucnA4ZsZ4t6mrJq4SLmwKP2p4LAdSMz5YZLai1mUU9BQdpgc9hRgqUM99z",
  "key26": "4JK789JVBw81LLqmtr97buVzNRzaSuE4BbiDkjt8BUQewckr3i9FK5uXHtmwo4b6R4Y2QemiuhqqPWB28XPwJmCZ",
  "key27": "5qW7v9vE6fuzhE5a5qf6EZyKxJoP5nnXYic7BWNKKxeiTteAdFgcgv5bcSWYQw4LoWQztM7e9aXK71erMdDbC7e7",
  "key28": "2fcCvLGWY2crUQA9LNFdp83Q6mRSJwGrLs7KMzKaaJjNCjvjv1pDAD8Lrv5dL8VEPvmSfbWFiAgMgBEA3JA3Dxpa",
  "key29": "3zcHDt4P15iANHX2DWEq8REi6xSkyHhjXbXmrEA2c79zKuFWR2gan3LgjMuy2arXediXUfJe7HoEJLSf4grznNRg",
  "key30": "5r73y4dvG6tcHMgSXVL8UUHBx8PvpNpgXmnizVignhNS3xKvzoVKKThszuRjiH63MZLRnnFxQV322J2crYCLtnEv",
  "key31": "4LSLqBE7KiXX7gdjXhWWZjpnkPybMBCGBsvKZooVJP3vinnQtnEb8VUxyNxLVUHsDePBLJXnYrcVemDNEDssDYcp",
  "key32": "CTUMkH3sKgYctxomdyj9uMvkLZaYo2PYLiyEuSdFBEyY6r5CrwpgztDpoWAM6LwypjVMWYCH48Zt3D6LLqQagy6",
  "key33": "3gRUiQGKNCTuDyNheDPVJaNgbDnQpBacPjiKiWZar8wCLGvav3JCHGN4YMiRAVfnkGw8J6eFVMZmRaMDWWYawVUw",
  "key34": "mzC4WWjvBbbcxbN61R5PBWtoiVrfrBF94YfbR25PnCoZGXVGah7QzTLQJNfjv2LqcGHfmZHmjg1246vdpWJbd56",
  "key35": "5uXhX2BF3zkQX6V6WQZCX4cRhfB9jg8Au2wTSxgrxbc6rwpPk2oMLYFngCGe5BFPax6cg9FnFKF5JpVeEW8XQrrW"
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
