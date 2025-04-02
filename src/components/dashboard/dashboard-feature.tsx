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
    "2s71PogXXSuTSTQLXN9bj3FjcBunCtidBtVFwnAvtceYQ86VGRbbV16z1oCMxMiNr65SxsQSo8E39H9qG857ARFB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nJCv5eA4UAxeYGNmgHSD9shpxWhMKw1yuv62rUjVTk7imwXu79adJZEgnmcjhZVCx4YFniuiJnvdGkcQ8Rs9E2a",
  "key1": "5Pi1Sfgb2crRdEV25G3EftA5MJFurZ1U2KsvpEJhmHWcwPq1L6A92nJxFndfrDXtENnVDYdUPMvpZ3XKn6g8Ss9J",
  "key2": "3VZpWBQyuw8gTGpnQEs51YwUnoCZztHNa3C1bgzzoeXVwjhnrFBfwGco9WRNjmJvvoBFfqz2RGt7EdT41GFcc4Ky",
  "key3": "5w6P4KeDJiUtb9fZSnwrS3q3LMJiCKx2imXR3rEoMGr1hb1zu5UZQuFVULdGiEMWgqNGXXuCRDRNgdafqk2zXdiA",
  "key4": "5mcXASQ5Ewjr9StV4tQrd2f3u8famimmr61FcQoKqJYbrGgM3nMYxYye1RUbaVUrQ1S2WiWDX8n5MyzYqPZupui6",
  "key5": "2BxHsvDK8e495ZVr2f6wJqjbPuiHw7Azn3bi8BPYUBBxL1TcQFYDjnaeawVVL8VDzq2sgbZZL1E1VSDXxjt7J5V8",
  "key6": "2n4Wc2SXAYwJ3emgXn1uTiV929yjTgCiHzegNc17fB468HxkNTUpMft8XZ6d5wgja6FKxADHGyfxEPdBrivoDVrR",
  "key7": "4BMr5PsTXe5TPQQBGNgHZri3qtiTJob8bm1dV5X9SxYfZZ458AuHqSzkwNwnoUhNSpGZcSJdPFM3bZPijFBbk4uz",
  "key8": "4paK9ubwYWaGdEfY7Nx6PE1eS3sLyYzWvL4cTW56ofi66LtF43WjsoYJzXpX2MkiLMnDPaVWDCzCcPP6fepDqeV6",
  "key9": "2cwLCH91Ts8qnoG3PApH49SUZBmHLiTwmQTSNkhQU1Jcpv5GAy6jk5BGC1D5rqnsDoPczLdVoSq4Lp2ERfSDHoxT",
  "key10": "3s2PYzxibH5P1ZC19ggyYpPF3Qkt7YKqppNTSN9SUiVQR8ANSwCZxmT5FNUAZexbfRF9pTay1SLLWexTWnmdFciS",
  "key11": "CrNWxwdFxNw6hf32qihCGH4sVFhksLSfKDtsyXhn6JSoSMvzVyTpzwE9NT3z6PUBDgePRYfYmSbNnvGS7ZvBiNV",
  "key12": "5qZ1nVVXLnmu4DNnauku1FiD72PCDZR3f8UJ1R6J5KWeXowz9XxuAvLuG19Z7dwLrLorW756UjNLq59zr8A6Wpwh",
  "key13": "2Nx5KDejeFf2K8UMoALi6uqeBsuQ4MxN1fmBeEq7aNGREig76T6zJwbfxMXcGC55Tou4XYGwvJ7cvvjJzL3tjhto",
  "key14": "62QwUUE2NTH6w7fFwZ8mZuAM8qRm7gsGRXBYngRDZAXuWMYoHiur9eL1UtSgpEQaLkGvR3uXSHxWL9z4AHG7Jry5",
  "key15": "YAaywXfEnhgx65vALJ1BsUXPSHZsHvMRgEkvRNLkcKUiMoMuD8yDBa2hE3KXjRqNkVVTmu31dU43j9stdRTYtRF",
  "key16": "2S41npJDHbaP8FsPSPzZQpiNiK1srfRU8Ft46WuURUjtTsf4TKXgAwHe7J6vY5ZbBLGTsP94qahn4pRVxQYzCNsy",
  "key17": "2T6ssDmaN1xjgBX5egubD325Zt79uHJvFL2GeoYKFyXUnMeyakeHp5CJpNQWWWHWMynLpQqKvQmXZ7dD7ayjNR7a",
  "key18": "5tQrxjyAT2vZtZs13pPnudRdxQkicheHFGWyN7uKbMDQKDt8tvDAD8WmnmiAEo9Dy9AdyCxriCUDGPmPZDCBygNu",
  "key19": "3hi7rWn5Nkqjpgy8TLgXY6kac1YN6LXhGtQwCzVDR36aucER4nFexyGwfu8VB2Kfik2GRwfGKzRKidh22R7Uuad2",
  "key20": "4vV7Z1tYSLHWiwLYm11ZjuSrxT3fByYMcG8A4BoFPPwY3nkB4E9Erygo3j356A1RGV8htA9ryiaML4Wbeseoeea8",
  "key21": "CKLATfbA9ExXnHFeWM9KP1Ur4JdqQWNFj2yo4L4AQ5tEKJnbRx7guzpSUmMSiQfRbNqUZSmQJTidBigvaNGsKt6",
  "key22": "nRqdjpCKWXosZxF4BVNgPSqS48wSRwqWecJZTmpH9DLBR2UBQ2vhUFADbo8xScohya8qBfbubWZ3xa7oiRUscAs",
  "key23": "5Mrra1J7W8UA6gNCZLeAETM2hFL64eP8HPDSwSAVbuNw2go9SMiNEU9jHVtcy1GJgJ6sB7mqmsGaxEV8PUwmX1Lv",
  "key24": "4t6zTPu1BwRaigXYZs4NNcxWgCEYuig65BgwQFeERyd9QDyfPGh3x13cphwZSWBRCftNhBZoW6NdCP9s2eE2EVPJ",
  "key25": "5TKwi5ebkvKrSDGiUogwUtG5xkFJs1GVjY7AoenJwYm9UwgSXDbhCLSBukAcAC7Qs3mgRiLiGMUNmZ5GHu9Kbxo7",
  "key26": "26nuii7s9EPWAoUiBnjFExDzQ2Q1Fw2GumgZz51fJ8Sv5gaQcTbWYQBfV8bcX8ezSESe5a5ypNqcrFZvWV6ZNuBL",
  "key27": "2UCSE8Q4G9E1vqkxz7FBqGo7b8ao59czmoDSNszxfppRJuqQnkx2Dos8mrPJf8qGjJSRhrQpQQv22pZYeoxJWTWA",
  "key28": "22YCo2MmHjVq2Grx5Rp6ppXZxYymZ8dUt5F2csetgHNDm5WPwaNjGHqP13vYFQtikAHhSHjvbEeNQByTbE6cWgfF",
  "key29": "2RCq9R9EFvDtKx6FdhfFTWSPiufJjJEQMHu8LBVBp9pjTAXZ4WTFFrE2mTt9iXhpNxpDaCLJnrYD9Bqeugts21GW",
  "key30": "wmVBSMZdm6LvL3VmJvDwzReWqnrsoMCQCvNxVx8aEbhoExQZhGER5QhV19Uj29cRVTf8Zzqr6Zv9No3NMCAi36v",
  "key31": "5pxYTNKAdZfFNBqeDn8knv3tYNTBBWvv31hY6sy9hd8HUDBjNrTqtgQm4mGYkiQqF3aWf3oygt6QHZAd6jb7Hxew",
  "key32": "3YCPPhYN7mc68Hhx7xQ89H3osLeyuwGko5fxA479NZm4RVxrKFnxCcJwKQ62sF2FsGNgZrsEs4sxnD5ujVphGeX3",
  "key33": "xL2SDn7rxCUpoM7RRr4p34rqTCrcbekk1B8vGe26EmLGoqdYUhAye6RyT6xuJbWzy1mkW2wW4GXLWvsWFYkHpDj",
  "key34": "3SrXrfatCoGkZSziw3tepNg38bf8RNS4F8bERooQL389HMEw8jo9fDAKjTZnwhh5AxQ294MhPL5EDqDrLRjhUP1C",
  "key35": "21R4X1X3K3G1CdP1F8M3q14Hw8FqYM58egd3Bq39kU7HZb5CqXtTebwp9vMWvHa1YRXtcd3JfrXUxJrFjHPDXaLJ",
  "key36": "4pAD8EFBezVYNDapL2EKgTWoeFAXgSMtLnEZqZS4hCT64iBkRHDPoZD6A1mdd4wvdQfirBMExm5f15wGzXvofW8u",
  "key37": "3asxSzZ2v3mYkTBiPyykSXSMgijJXzDf36mPNmRro4G787XczCJKeRzcW4FrFYLiXJCAf4vbFViRa4VNL8kbgN1F",
  "key38": "5S4zPQTnSP2u6sFFMrBeAgBrmuTvsJSwdX3odfvLipQYrSysE6tQrJPXHSmQpvg5T7ytqJbA6eaD9ch9KiSMuStU",
  "key39": "3oC8XunsFxCSieMVwMfhmudW91BeQvN4fwaCvafBWja3NtjEZbQVENCbsqFPES7Hj5B47THnkf2LCHEdxzek1pHf",
  "key40": "4givdDjeAhVPaUshC7bXhFU7dH45VZoAtUF4CemdPDmYLWMZrWXwMPU9C6SfPYB1d6C5SWZRBDM3oGoquAkKQ2gM",
  "key41": "UmrwzSrbodAGJCLWLXeFWS1QvxjhGjr9WcGgNwcZGt7EAnLWp9Bjka24FaDzkwaokDowQ5Lx61L4xYuK4g2czPZ",
  "key42": "4NiTZ4gRBb4SD8pew3aSc75qx3NhanFQHGdKeVKY6gvmDuo3myeB9rLDv9RJKN6BVpQJC4D6NoXeQqYpRNKxeFF7",
  "key43": "4yzRCD2D7SeWbHcmLWd6vCVnGFYZdFMq5ZnT21ZbkqeBQ46g8msizoLCaX1q99RXn7oT5gzxDVSnBdqDwdVrQu44",
  "key44": "3SQXeCEG35AJiToQVeTJMtFB6ERKEQLZVqiWKdLT3pWG93fAh6nDwqhdSPtJ9MPVp4N6sfBc5wVDnH35PtpKXRPr",
  "key45": "9d9ShWehfqKaeo1VbydZL7nmNAxSQBSYDngMY29pMDrF7pw5B8gXuqAUYdxWhmB1icgLdvHUt3sbQRnupH9fuUE",
  "key46": "4E77NXmUyJghBGLJV8A1L1kY1yWRLzRcoVSxHB4i2U9iEfcSfpCJr416tQTeoV9qRL9DuQdKkfBm5TcACNiMgBYD",
  "key47": "2N24DsQsJYbUaRbf7mqDLRzBYgwfHQsq86gftxi1nytKfnn7BAPjRc1joXXL34UGcyzQCKx9WvUi6LvZmq1cnNo7"
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
