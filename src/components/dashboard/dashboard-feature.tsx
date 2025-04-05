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
    "3d2zPvVRBJmeowhLqiBrngWPhcjnguoX4DtLuazdwFYqjavuoSgYfpeFumGuMqcH8aHhZ7ru78tGqc5tZwsWaGtS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xgw3NcWPQrFvMngjHiV3bpgJdc1mwGp3cS3iPXQLofzDh6oawn9WCyMuFTtd5M3QRK638kq9trNHvuwFwztq6v6",
  "key1": "5Cep4burptLEWcaZxLkjmtiuQJ4VDrwm43Up4SYs6g536otyXrBf6jo71NxQJfourWjytBaWA9KWnVrHmZWi6pxL",
  "key2": "66RYUVw9az8qc8KnjSKs7TjMi9hWHHouLMCZPZ2dVKy2HgK4wjhTWW49Edfc4KPvJ8EHPyXdDZv2xubtGqdMYECT",
  "key3": "4MWb5YATLXBYWPHsQxdTRkEKKZGCCYekA6xCc9qrDRGXuktD4Qb6sw7zSY2q2jGBYoeSnVCXC8b21HsdJU2yon6G",
  "key4": "LiUMsCjCTCjpS12VTvkckqAUmhSqUzD2LwiZ2q1kT8TCXRcsFH3TQf6nAjGQ3XTyK4Tm7AYKhcDexKAy67qo8HA",
  "key5": "2oKtjRx3TdDFygwBGsRM2ToTXZX6m6wvdGSMaVe7HRapvqZjpAmHbSEeWf9rnBWApdTioPaga4rfGaHfRTNgkXm4",
  "key6": "nwFeH7sZGLtv3cS5uJSuUuMyL3wFdtfTgKFVut1hHjPGhYADnkjvhwZAE9SwxqEoCRMxfRFfxo5PLsMidfum1Tw",
  "key7": "5BrzeZQmCz4Gx6ScoFS81ebwGdQWAatiFNDJUibyVKcisQvcGgaxcCr811BexQQA8FTP9fegcDjwyvGHaGxmG45a",
  "key8": "V1xYnU9heLd7MpkMtdYUsR4CLYhBy84MEukJvxNpmb4356CS1eKdcuvdQ1V5Qb5qSDxoqbX6qz4Sxgfx1RpRY4S",
  "key9": "4FXFh9bRbuGQXdP9aWH2oByPMv5V2Vnuveimd2rpt3NsokodUGuMmzjoqZM88tpJSX1DsMUgtaEhwnz9eagsoCNG",
  "key10": "vpKi9JhEHeWndH9ULp31VECucZVo3SG5RDx8TBprP8yecqfcGpdSRisukYLLZCgit3Hy8VtFFeMLqY32FYhWsXw",
  "key11": "3qodyH82kYhaYg1ivxFWGQ9psLPCHpSexTm4WH39mgUk7wDoVyXo8PKbHTKMzWoFC79WF6J6VnDnUhzpM4MchYrk",
  "key12": "28VVZSQxm6ibpzRU7e6mQRoCu4yo8zRqbu3NypjEuJSMcLJSHiBtYVEFcX248MdgfaCb2mMN5bEevEMeHBnGZcWh",
  "key13": "5qVjsQBJkY6vBFxmzQEKNd9dmQmq7QAcHWj7YDg2rcrC4mmPGCTWRaXnKoFBdXKGuCRAyekd2T6kdCEZxKwQHoLp",
  "key14": "KHe3fJVA9A8hGF3BPqozp7TV8MT7vQRU52J3JV7DRKjGPTPHs9kiahhNizUabJciufvCt6NyCh4xXUtBZgGmN52",
  "key15": "oN5HhPQP6AE3bvgf6UZYuS3p8oXdkyt81J6mrjP8Vhj5pRychvWsbzRKrgqrfx7KeozKDrJDdbqZSHkLDV7f6Da",
  "key16": "3DQVXVtvuqvxv2tCimx8jDAGXdYmUQRNFzdhzfbxJpbh6mE3gTzv7GZdiS8di9pVBtGDE1Uq88QiopVEV6S2SDi8",
  "key17": "5KFM1D4gB8Evyq6msaob9DBXEGyueKjZP5DEUweuTxT5dxfPdPp9T3u2rDrfmQcPBCi5Dt472uFWo5uF7rdooNaD",
  "key18": "2g1FN2bFpB3KEM2yJJ9pK3H4Wktni1yTnE5cTtqPT5aM5yHyank1SDm5CAeb9AiTFtvRThrcijMh5p4i7wDa9AVN",
  "key19": "2oC4vmH9uzs1Qo4KyaSPsoijFexsGL8cSxUazBBqm1kAbDLdPvwjB47UJ1L4FFGXYcthCTRWyWLHpQX5oCb6WTwU",
  "key20": "5ja6Nq1oFz1A9Rw78ZYJrjqnV7iC5cTnq44nKBaGqUrUPgNnwiaVSoaYHgSiPXyxqpCT1Z8Yaci1LNYtVBHMRGsZ",
  "key21": "3VtpfaBQN27AXgjKoaSRyD2Mt9YGfJcSMfsshnFECYnSYLXjNVYj3RXN165KRjBhtoB4SJo5Ea98YNHWyC5eLKS6",
  "key22": "4KvNogd9WeykPUckGxybSMi8w7wE6VwGLQdFJTxFEnDUaotyZU4nXMDbWi8w529ieY6k3KwdvjjLnZNFTpR7d6E9",
  "key23": "2bi5hs4DodxTWgYMSdft31vEgarbRGrAGvvsMHXBqF1RzN1WqcDGTd1JVZBrBuzmrAbk4svHT62jv8jFRUZ7WQ61",
  "key24": "5LmrV65bxg3EwpRoJJ9FJy92P6WNSnHbBMsAjAhqXWFiR7J4NUEE9okPPkacUpT3hy24ENQzjW4zjM8CeE29LzFR",
  "key25": "5ysqLgcLvE5Kb1FkPiagst6hYh4TGT61sn5CHo2gpkTfs8kLsQNmXQ6J8dh1v2mpTL9i8VEAhFozHpdgjmvdXWX6",
  "key26": "3K69AqvLapDAUNGWzmprPUorUFdsWSqqQVs3uqEJ2bFjmFUc2nK3mmtGnpkcd4NcSbLQoC5pM7LxBeZBknkv4NE5",
  "key27": "2nNZAZmpnUJLCiERkptePxwWYcp8HxnMXw1ik1QZeiiguzaSf8aKvfKZwTosu4vFe1Xx7zMTKkvnSpzwKSmhnvES",
  "key28": "AWwYLyNny59fC78qWeAumRg73RpLXyB64Bww5hdxzW5tVuGGk9S2dXqYkHk84hoeVZu4kbjen6YmGzPFX8nFSyb",
  "key29": "CnSoPXHCuCUjw3pTCFeXdhwgvwBF8D8LMyXoGQqRPNnzw94K1t4bA42BUHTrzHmKLgSVcUZ6BexDtPV8m1owc46",
  "key30": "YReBwX1Vj6f9kAawxEP83eH3H9JGLu6NKCy7GyoPBbLcBSX43tYEPQuGs1mw2EdrcYHfgHbDJosGmpF6jV5Qhbp",
  "key31": "5ejr3a4gsmWPPwZ78DpcRsRqt2FMBravxFYiRFz5PbPg5GAtb6fKURY1iAsX6x6X7JQtqRud8QcAy7G7myB5EkCC"
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
