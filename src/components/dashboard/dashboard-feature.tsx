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
    "4qjnkjUUnsYh3tLCwN8RFkqYyNDywJyxasBQogc6uMyZi3DNZBAeCbruMNMCLUnSuxFGnkP45kgrnEtxsVLyST48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CphQuRAE2kFZ8mmGPiPt8C7aaA13utYqzMugUt23vzEQueTRzmGWDtaDwk2LooZqJ3AYSMdwpccsx8VKm48ZKXs",
  "key1": "65pNCUY36NA6zyg2d3gPH5LNho4HzZPhhTgNUEnUeY1N4mf6TNh6qQfZBhoS5Rd4UCeGCsaFDTcs48bnwHybGEMK",
  "key2": "2sRvPFRY2WeyxnBuzfVS8oGV7GV7SvoKqmk4rQM8gH8rh1jgBdJNiTvEZWrAXcmpLqRSgSr4U1cNMQxqpF6PGpMK",
  "key3": "BLjNFfvQHdRHqRFjghSrNqgEVPuK7rPaE62F5Bgmr8t3yNjGR2ozEwp5jBLaU8ZZBASNktG6R6wvgcQNQUJFy1J",
  "key4": "4NCo4CeEYawwHSCnNYorE3Yv72gVDCpfZpbTJiw2a3WYjyByn56o24qKsTB4BmRe24FC3Tqm1hEtAQ1uAxc78xDk",
  "key5": "46fjXJPFwWXXV3XfadUiec1sodA7Lbjom4t826xrWdSBMnxXdGcvc71EvDJN6eAsYNFGyi7pH7dmSe482X2QXiC",
  "key6": "4seuE1WzwNAVEVQt3Z7hTGCkMFfFMvvw36X5QFbN82UchjNgBNDMFK715cpWigQneg69rPD2GRtg4vhcJE4xzdC1",
  "key7": "2x5jPK2kB3nkHaB8AGkuWMU9Kn5oHK86ZitduEf86GbQMMcRTVSZoEBW2eh1UgBoVagTYUuKbNCurEXrM47k99CK",
  "key8": "4DtyBxmkJWG2oZdQFPYSjWRH6xuY9GwmU879v8WjUgxan3QcF4umtpk9h1p3AGBjN4w2RVQR7mScyxN6MvbhZemx",
  "key9": "VKXRosDJf4NeYNntBbUvR3AwfcyH5QPZPfbMkrPsX5kamwmpzi1vgwaWtvfJfE6nYNhBrbCAiZyAnGjYRpPapLg",
  "key10": "2Dg3XkdTmkkAiNxDunV9LRmrAWntGdZb2HZ1XC9atFMHPFvVSkEzwF5C56X9wXdpmHZajxnyNkcRQYMZKwJGU7oZ",
  "key11": "NeGxoNXHs9P9GX3bRUrx5vHyPzwNBjwAABbFERPYzcaWMh7MkYvyG7f5n9mutG6kTvornFp3P4wPite2JSF7dVT",
  "key12": "2WgQewR4kLuJsoQpGXMshMysaC7Rz2JT9w7phLB84qKZ4V7yQp7P3y3KQPE1BFTynGMk5iras8ssgZtvc4JVBVRX",
  "key13": "2mVguY11oHrzNveXk9s7L563dEWSztvwjAixyJZb2z2RGwyMFXapmk4FMgErLFRuYpd4XWMn6WLHHn5uNdVvKLMr",
  "key14": "3QLHSqyNXmxVHmGWegtzajC2Fc6QMxabdM6Y4M8b25ZXkKhYxaHab6xVsmmHZKvjoXva2EhZfdth1cJwTbL6R8T3",
  "key15": "Wn32FU2uPVDJifBVkUsAUBhopVSesdbKoooA38HvHjfaNwEk3kjH3Zu4rBUZ32txpH4ebMJRs54p4MDfyRqspJ1",
  "key16": "tLsQ4kuWxGP1w4fnti47NCoKPd6EtkWPoR8edn4M4azHie8Mk1uLtDoSc5CEzNGYiUDjL1gPJ9hEuiNwYfPFLm5",
  "key17": "4sZxqEoo2k9z473M8hzxkpuVoGUQG9xX1VdKCdsoEkcBfXqkVpXjAK4NJxJzDG5qBy2UpLR5NWsd1wBioLrzPnFu",
  "key18": "FWAcb3Ep9X6pGAe9txpmHNdGEXnCZu4mDDwMSPjRQbmzMvdy6UKyLtj4vMLHgLYpT7LsN2zYHmDXcMumYAjfZf6",
  "key19": "56tXRvAzGWu3Zm3CJiF48XsCW6gbBfYxProGsjGpR2zBhLdhboNkE1Gvgy7jYqX4guuMLb7Wk5hwCJsNXYv9YEfo",
  "key20": "m9r4KBGthcKJd2ZP5rqZ6upjXqknhecyZbUG8dJBsKrvMq2taw6dP7xZV1Dtc2Sc5rArZp1uT4Pkxz3PifuqCvM",
  "key21": "33bCBDcPZgbsY9iqR4S6j9g5uVxAHvJ2QsY5idubJpifZA9e5Xx9Bn5x7WCZ8kJyLNLRKYVXYzyNV3eEC27Vzyym",
  "key22": "zQB5riT11kJNSSS8uY5iW1QUgtm4TEA8pMYfdv8M5aWe2vRqXFgTMZe5SAmcaTu77QHKV3nvKqqzXVSnUa8Anf5",
  "key23": "3kVbeaDsxv4ErDf9ByxZRTJsb5pii7RKgd4NTTqbrH2inpRDdqS6E6t4YBokX5XxDs9iPgsSDyz16YhRBUx9HPzy",
  "key24": "415D4ePJfk8fWt3oMqQDTK8k7Tvk9rD3HmLJevbDMjsdhvr3xFhJVRLTHwhScjAudhpBjyFc7TY5pU29nmLGLBT8",
  "key25": "5BeudSThyLHHD68xHaoA13XgrcyuddNL1SXcYVa8zDaNL64udoYncNTMvfS5MSJ9bEe143HuD6Qcjt5P7V6vp1Ho",
  "key26": "4Vj3BxPc1sHPWnGsVTfyp6eyMTsZXsnD2T8s81sBJiwopYbs3B93L2Uk6fEyHXFnQ3RaFDvP1sVNdemj6NHujFy4",
  "key27": "5vChNRTkYTPwfvoeZEm1wmPiuHC2iJn37Xd1ip85FsnXGy8ihs2kwVq9fok2zUC6hTaXDZrNAZqQuerp9hajQdyR",
  "key28": "218e3Fy5gPembVtv7YENEZo1y6Zb1wko3PVnZYLhWrGrCZfuHXSy4ttSWGwjaemo5mse7RySFn1JA1JiDjeQToNk",
  "key29": "z8H42p3CyYy19qJwSxuaiU8CCPP9BxVtVmZ5z3ZXJicGGNnnaiWC5qQMdaaCQMu1znUg2sEL9Cn9VYsiATywC9J",
  "key30": "4YfeHLUcj7yfbS5GPGMvZSJbH3LVubMsEmNrjfTxnbzQzEXk6ibxsmfh39ncFRxYvLf4A7s69JFkJEGwTiDCLZjm",
  "key31": "2ruSfZijX1cLZ7PztbySmfwgYxaYjkkSqKvs2shQqUtJ4kkYRShHKqoEiw7S4uTtBw5PnFEwYQP5zVWckXU4hSp6",
  "key32": "hWwQLw6yWudwhwkBf4L7UgRBJLhb72yHqF6XHj9iTrNUvfyzgXYv5xdZ2EcDm13hKjvLfhXHLwF1cE8A1VZWmGP",
  "key33": "3ik1bN43XPVimGtcemUUJa3sDBZMHZhvWTPRxnjT5QjfJwjKKQdZ6fA71t2GHhos6xoSKqjzsLe88CR81GcXDrRb",
  "key34": "M1cmrSsZcH89y1XfwAB8hXKfBjgwVe1sFFuZJSVuWxape2ZtJXqX7oM5vpykVEWZMB6HpAVhHE4mVXG6tmD2dT3",
  "key35": "2i6ipQUNky5eCG8x1Q6Cj5J4Gn9rmGhVTru4PYdP6v5WRfvj8NFhV8tZTsTLnZBRcNRb8yPSj1ZghQ2D3WQD7DQH",
  "key36": "nNJ3S2S15g26koqinTJsNXR64paanhzDAEYyBaxhD3Cwv2s9RV2h6knp6bQ3DurnmGKYBoMdCTjRSv7Mb5FAB6b",
  "key37": "5bJiZv5yXE3RLuMxnuA5K9Gceh9vS8PqBYj7LKecAmh49KodzKXR6f1Br1EhUqdmYsCyw8BrSZkHmU1STYVLFATZ",
  "key38": "2epb1inx3nkEB4NJLo2FrBWxwR5T1Nw5rjdN2oWyxHp2fA1tzyPPTFwpXWDcynHCqEy7JUL3TUCWAQ29s5fZwRHZ",
  "key39": "2sbBUVmVspbeEVtjc2tS7qnnvLdTmqd2gFypcCirqD5MzSQF4FnHCwkUdc2Q4aMcLH8zHPnzP5zqdozRsFivTcmE",
  "key40": "46GJa5bZSFWZZ7ot2yWEsZNRt4s8UKt8HDn2ufzqocHE1uYyYxqKZdBETuLEVgM84XAA4AHRiHj4aAK3Hf3wj2Wz",
  "key41": "2i5vTrBbk5F8CazXHEoKwVzP33rk9yS12cLpBzJZ5H5r7KTUkkSuGLZzmdTF6fWXJdXZ76vi5kfrDTC8ZX167a42",
  "key42": "5GqapbmNM7WvEDKyfM1cDMisbbHpVVXgre3zpVH8P6XVwHMzUTxmC9687rnEqjYkd2Qk7ihgG4vJA5NFMp7bEmmK",
  "key43": "4cE5EvSjeovCrcncpqe4TNEpRZ777xQFmBXo2QNK9ApbQn4tUyr1TPbfSza4XreCo8N7Scu2SFLBDF73Vx5DpXtC",
  "key44": "4fw7xr7JJseGgcmQgjVdMKYMEZWehpRx223SVujqNLx54Gbp3uRGSvPHj2SLowzzToqRGTY95zAAkqRAkjo2HRu3"
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
