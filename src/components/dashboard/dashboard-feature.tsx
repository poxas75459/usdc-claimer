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
    "3vVALuHoVvESbiBvy2mVZ49suVeGGHWABUTcC3AeRbKnFUdpqCBUKhYfxn9nEoXhhPRB8U75yS88uuhUTFo1cgBb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gEzD6tKjivUtSFMA2t2xqZMw4u67GwpA5Ssk5pgPYJdbe3ZA8n2WVUUEXbQQbX7Q4S5aXEE11geQg5oS3qUJYsL",
  "key1": "4DJgwumELfYJP6d2qin14Zu825MWNsMzhcooPFL8Wr8PjHLfEMHSxQezpAedRmPQMcQ75LBW8x1h5psysfVxdUer",
  "key2": "4BpQSPpwpQ5NAwXtaSaX2CD6nQxMFAqYfeHmu9VaQCASkuLjtGWj8bMm9mdkFxS4GogCVVFNKjsbXJuezXmDiBWJ",
  "key3": "2dvbMLyocUnyKgYScm71PhDUaCCD6Hy1HMmQvriohFKpQcSs6xTsQPFb5ndHScKw2yxLfa9r11eGisC6Dr6R16pv",
  "key4": "g7zk1VnJUp2FAGq6HUtYK8D8KnRv2Cx5LPxPmu5Ggo6j4RVLUd3soNNjduKHbHz541cJrdqXz5yTwkcd63AxK2m",
  "key5": "3YxnFEQ9kBBLBTH8chy9t8dkBLx3QPe1n5r2n939RqkaRFq8XJB4spTecvdYWp1UMgGt9tUBj7guHbXfXnFU43Ww",
  "key6": "5tQ7xp66BMBZys91131u5i9i9wRyVpDcRdTM5Lkt4X9sBu6pTMhTYBL6o1yEiHAUp57SyL9cLUJ9vCA7qVKXgdVi",
  "key7": "657M8FxzW2DzzUZKVPoX55xsGvxj5qkUJGF8yvd48ybnTxhNicoQsFoWCfHXpcDioqe5dwzYmUf5aXKj5qQLajhj",
  "key8": "4p3cQA1c6vTgmb6JA42kdEP7wGpgmwRwzSB5WdXuQNvaNGhUauCrPE3zPYZuC5u4hdQqihLjnmzX5AHovZM16P5S",
  "key9": "5gjQAdqHEYA1KRCZExAbjK8EEBZ1mD1K6v71K7411YudbRxYvu7DtNWEM1qTNkBaWK7nMDHSAYxQLcbzRBQgmtTy",
  "key10": "46nEUH83XoLs7UZemaApA34ZGL6kqgp1oeo9uumbQ7y2Eki6ftHNNPv6ZVtHeeqUmyNBXmjFHepM88zkDbURwdB4",
  "key11": "2GCbfWLrQqotbFWdHfZdDuKXs3NUqnAUMgS34WpjJY2BsSdzJVaPv8fhhhbYKCYXps1kuWsGaEDtGFuaK8LanGsT",
  "key12": "nUTRGftWJGMioATcNM6DUAbeJfgwDUr8ZXt4PMa3526DZfVaEZ3iw6dpvSkfaGe3znfwjwsj85gPYKsXZB5Vei5",
  "key13": "29GoQw9ZAZg5ZFiPa2TTwfp5AEgzN3XCiauXxshLw7oQywACTuGnEkGMXLLatYvGXqfsWF31D4g5KYA8Y8NNgVsF",
  "key14": "nBpmF6zSgm8Y1vZj6i1qdfXSYoezb3hhjzjxLsJFWb4YMgtP7m4jErvJVfTspjnLJcMFEn81FCH2vT3Aj9tMN9o",
  "key15": "4izmbwvFzMd4kaa5vBYZdhwRZMuHS8R2tGvEKkSdFYDb7aa1V46C9PfYmbATRz7jGAxGm1hB1H7eVYMiniYvUTXK",
  "key16": "2CRmewY7kjBuXE2p1tfuZGszXtKp8SYgZdm9Uyck8VcnZcnKvjZNwP8QPZYWp4adSn5RV66LKZGdNtsiHMTjttDP",
  "key17": "4s92MLvnwJk4gPDm7RCnnzYwU2LquQa2Acrhdcb3JifVddFMmsphBKEYG5tgNFVq2pUEsUoGsDPttiRsHkazvhwC",
  "key18": "KgCPwzJLc13eZxsoED2gyKUGtKex4mfQCgoRLbDjuWZfvPbjKuFjN6QBQxML7ajXaJhK55dniybcseUEMA37uPR",
  "key19": "4pmHcQTcgVezzREzCDoBA77t5oXFVefPsoR2bCfvLbxLUmEWMa8jcq7ewKXQdmVVJzrx3qxEfDEdmsGf2hvgTqrz",
  "key20": "4T6t6sRHM5nt463oYuTBTFPTf6qyBNGCJGsN8cVAKD69Lbu7nBAvkmc5zqYBWMSSSwgpa97RVHeNCHudkkNcsfNB",
  "key21": "5Vi2EvNnwS4RPHrJ7MWxsRtMP4FTvhYLBwYaoXpfXahpFfTCSSNZknAK5zyrKDnds6ydBs4DUwr6drCfHGwDeaSf",
  "key22": "mrndo3eoMjMJEKEoJQyc3Q3ev1YUFrfdx9qMurNkHd2BGWkU2LbGyAMdZS7LD2WJjwxZ8UK9zPi1ZPGLa1PYpjP",
  "key23": "5tYagLziE4bAQrzXoBQbLVcsEeJnVkXupg2ce4kbRP1FWYZYuFtsHc1cSKva9LBcvXUaUeu7w4comUfFxFLo54Xg",
  "key24": "5aFm1QAXw7H7dr4kLnCQCu5M2uVK9VFrUJjoVjWbQ7EmhdbNTJ7q4TRWdvFHW25kmq4Xf5NjZpvWCkHUhtbZc6ro",
  "key25": "3bJphj6pCCvXf544MriRUoefn6bRZxGdmpAGDvoYjHcKDmvg6UYzhdtA8nbZZASTZccAVUnZZrTdWoXsJY4cX9r",
  "key26": "2RunD1J76pX1ZXPNrSKwYHpXrVEUsEJgUXbCoqMVvNwBMRnvXybYFwGN9odsRpNooddJGRc9h4cCmmHWPL61cVHn",
  "key27": "4jPZHbe5tKZ839ybBFiEpmdgMwuS3zV53RnH4AfhwAMZw5oamV9uXSnmdG6HovQrGmtycNqdL3aofy7WKDdwJMQ",
  "key28": "Aa8MGd9m61ufaAKsaERrV5hGiqjYjgQ8WBpn5svGvwecg9pi1PajzjX6Nd5GLHX1FJf1gejYgJWBRnoKizq8tFm",
  "key29": "2gNDasGoYUsFHP7pdwXqXmv4VcyoYm9kLCca4i9RrBZXmNTB9pP8c2Dy8d81GzcYfmDAWyT3rCL8pA18Bemhkr9G",
  "key30": "2WQ3VB4ZrDhNaXJB6DPRNuAhp9ZCEpgnYhvdnZpkU95Pqc7XV7bCNKxPbiBbtu4Jw31eWN2hyR6LQFTVEMJfF59q",
  "key31": "2v6TZtg3yweqa5gMfRT17jhKmq1sGhp9WaKWz9QgjtpjzAiz2bJHEk91jsSAYG9gbHvmNUmpAZNkXYwEGQFcMFjP",
  "key32": "2gXnhtFFrWSte3J5RVfvabiyunTanqGZk5BUZWNsdBHkmUXw3fecy1RtUGJoHgZbtV7CPV5Goz6UoV3m17Pp1eSH",
  "key33": "2KC7skCTnJUNf6eDeFECpRaHtoMgYTPzcW9i4TFDSMa9q7Tv5kjVHH29at5eioc3XVC2A7xbLedFupTdsLH7BcZ4",
  "key34": "48PoSaWfBvoLAbg1pafKaEH5wpNFBhQAUNJeUHo8Rs9yPmjzKYcF484HSRT3xbcu3HKUsx8KtD59k2MSnV4nhdWN",
  "key35": "63FbCMojSeVngBGtfK5gY3VAZg5u3iFA2PvqmisMEmuy26yK9W2u4z3kCeFTVDtVGAKidtNYJ5jNGJsbHuF32B7f",
  "key36": "4m1VXT2Eoev4dB4TimerPUcbFFhHWvSWPTNvoYhtaz6pZS2j7R3zPV4Pz3jPyosJ1UqV1WU9omutfzWpFdY4zqzP",
  "key37": "kFnmYPubyX8p8fTTHjuV5XFGDvt7X88sTBGAZgPH8EdRf9Qt5Aixw77w1ET4NDFjd4eqXWG17A6KKUGHs67ZyPV",
  "key38": "5AqgQPjYnbr1EqX9W7kR1GfG8di1KHJEcywmD6yBxvtkrNp3XDzev46Zjc5yLr8kcTpVAoXrGdp68HqBiM53Fo8Y",
  "key39": "fe72nfysc3N9P8UDLq4FxHymknaBLLJXSom3H261KbdCVDxvWGXwsf2LvF3LXn3ShkSQY6aqQ2GSnjnE5dRBKPm",
  "key40": "3MEZewHGtQTPe57jdMe1xuGcHCqX1iobbvixTdTYgCTeqnwLiruw1fMZMp735fViy2orUy9x6RcgEDnpEewfzpV6",
  "key41": "LbZqAChXka1EKnZmKDTf6JJicBL2xPjqLqzbPviRP9bb87S9YkKNz8GJTEXAf79dr5ofsKiQ146qAKiqf3PE2XL",
  "key42": "38uFgaoiHTuo2ycEgGBCr9xFQTbkCYcPExrXCHxxQhsudy7UuVYfqhrzMHzn6RTX4ptkuNPEnqCWgUNhdEoGwnL7",
  "key43": "4SETVZbrgamnXWeiFtdVViXW81BfVcQyAtcJqXst21jmAKTb6YVtv2ZMNKg9gAF1vD7siaTGreMp9xaY8GD2ZScL",
  "key44": "Z5jyC83LoV3wqJoRokgsVKiC9Gggaij7AgvYcDG4qVwCNd6dbfKSoJZSBSX3gc4SZkxTN9Hhw8faCkg9MRL35ZE"
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
