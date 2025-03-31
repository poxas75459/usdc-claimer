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
    "3ubMnwKK3LuMhKSshk3GCbs6es16SnNNBD4HerBLKZB6fsQhzezrwRDBb632zwrHrNqKtaTNbv7LkL5PAGsnnEoQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zNbAdR2BBUUK3G43MtdbMr7PSD97ahVa3waJWSMHfrpse4FjDfB6ByzdottCEyZeQ5BvN5eKfcg29Lz64LzLLNW",
  "key1": "3wLtUT24WPgoTgqGapTFus4NZmyerSPGmVTvxNTEoE67Y7yNkLhK3F2233w7s7FwtxKDVV1maqwh9K1yjNaAcuNa",
  "key2": "aTHKqxnMkYRnaBvJZZurPx8HJik14Vg1jgxaYBXZXTnN7dQwt4HKL9Kh6MGJ1pVkdDMAfF4GptGa7P7pEdgKtQx",
  "key3": "3LemN1w45o5jPisbEoUkwU7AsMcL9r67iP3NxYkuakKLQw14oehGeisNS31q3MLeArcb8KYNnqovqM79gFiG6JrQ",
  "key4": "2rTkccSRpLV3UAuejaVNhyFsS9Tu1U2Yopmz8mnqvWv5DGXyBdUw6Wc6WRuLZXUWffyhSwjQUfpPi7T3Ph1uGJbX",
  "key5": "3LeoJTyYJS6VJEXDV21pGJcCERweNa8ZbJFhXa3MET7FiE1NVRbpxZ2pvrJXYm6ku7meNb4eeQEFQpEP67TThAf4",
  "key6": "YBLZW23SKw1WHAaiy4JwzD6LQe1o7djRYp4t1eAgGzNdeyofd7PrQwQA16TZ7bzViS8h2YRQoG7DxszosZmpVCQ",
  "key7": "bSxnZFUGfUYmD4uF3ecjGcqSk1aBCy6KtLUJ6w2do4dhYCE5ZY9FaPgKcWkk6VpBXHytNg8ey6fFonbjTQYYqjm",
  "key8": "4QUDvz5GxQpU9xLc5zq8bWfRRSXGEvqAHaKKiT2pv2Tcwn1mR3B5U8tsKjkJExVB679FDRzHH9admfr4Frqa1krA",
  "key9": "5cPfmw4uwTcuD1FBYBRPTttZsKVdzX8itYdGy5BT9GxeQx9fieRTAidNQ52in17szLEamJrpdTM5eULZzvbxsKo6",
  "key10": "2L5noAwaNuaAFDmSYE7Tvp1XEqxrtkBhayzMwEzVUfyVqvzetZJ4iyq7ztxD16XzjQrtUx5PrBYeeazEHemNiSL9",
  "key11": "4s1Q1HSTWdap2fTDPyfubt7XERSHFK2JFUndXkUtXkz49ur16UUE8s3kaxGZrMohMnq4iycTT6M4L8PGjviK7b2z",
  "key12": "2RXDCMhDmakyvcD638wPmKunsciqZE79F1ELVLPJaxGW3hYh33owKRGqiCwQQVrgSXWy7FYTPc6EDNMgy4Ap7xxB",
  "key13": "3RmNvd1SAgJNq3qTbgUWo5SB8xJaHKCbiQTFjsT9VPhddEXz6CmZhQbJ5XTL16eciXsCEypRpFQKALiZNUKdkTTY",
  "key14": "GWwR765P47xW3x5gV43WAPLPbhawniXaodki9NjuLP2ppJKX6mTxNCXvN2LxvFgAmt1ysWCaBAW3evwcKmqn4cH",
  "key15": "63cFgavaWry1WiGDx8CDmXg33iuTbMu3heeSSHnJtGQV8TVSJKUYhSBaswMWSu874uzhuwbrp6zkGwuJ6iVDVSfM",
  "key16": "4txXhJuzB5dPkiSpLzap6SZF42SDK5tUMgU9cJqxMtLRx4Q2mcfuW578rz1Y5zsQ9LLc567cGVhXLMX4CkdpvN3v",
  "key17": "2Nnn24sjFj6dzixdS89DZe3bYaFzx8TUnUHAUZtEUHmptDdonEpJpoEUNVYUPXdA8czRhcFXSTYq6q4gAMCBbPdc",
  "key18": "4G9UpbGvpEWUfBg2EqzqzzCo3wcXb5sVh3wAYHLN6eo6HrQT1w6RsTSNZAsTFiPZCf6HKqKT9SDwDEjxe4xxC7ka",
  "key19": "5yDGMKHgpor3J66MJNoXayYzV2DpAfcP6XeJHmeLsksau1ehdQpMtPMCDoWS1svQvmqWSnh3WpGkXvjXhjEyrwT7",
  "key20": "5it3oosy1RWPc6xDFZXymi1A6hr8c8YLbcT2XekcWp1joJX4bFU9uTPqVogD4RUQoJWqYuSMyUCh2jdknTxRCkch",
  "key21": "4c182deoEphtGPhPtLNAyHh4DXNtVofU9VB74DYP75r9ZhKtFeHJ8ePYtmztQXPeHPD4b3N5aPTXyBVrnJZ64176",
  "key22": "3mrbFpBPKKNfkb8d2rNPNLT7UWiZiGDty27hDNHq9CEZMFku9ninrRLEpsG7vTMkDhNS8FDuExSK1vZ4mmD65s1y",
  "key23": "mhVkXd4zh2otGJUiMk84CHjbL3UmHpttZiScrQY7SEPp6uKB3oMcJ5Y817tyDia9bSdgfGc8EPRVEKyyS5QvRAi",
  "key24": "3vHBGxqv5p8V4DpPCqHEg2J359eS9gSun1B7wW7uGZ1dK6J6dHcW57CmswLJEnBNjU6XjZaqduAPo1pFqriayUpj",
  "key25": "3D7X1xYamEeLWEGEDDoxegcrD15kzwmqqnKbKwEWrJML2vgQM5c46oXZv9BudXNn1n6GyQq5qUp1yE39y4VHeMwf",
  "key26": "E8z3bBedevabRTqhWwdbP3gD2murndGfB3EikVBpnBetoqwzfBtQMMY3LqHPz9bYgjXaN6GMM775pA6RoHR9xHe",
  "key27": "3yVq1LSUWStEyXPjHxe16GTG8wNXVHiMVahRxyG7t8U2bqLXEEKrXAFqrzfzJoEdxtW7SKZJERwSZK2c35uL6uwq",
  "key28": "DvRTVMnT72G7S9acrY7m1NELU6rVDf3d3xWXbszWpFFwfin6zACqy5Mb2HiQuwRJGu6Yb5smdNQznmDKC4yVnYs",
  "key29": "5KwSTg7yH3YZPuNjgXb5Lpify6Nn3nw2CCFfrYYYSwczqpNGmWzaiuPHc1faf7FpW6ZxdmQSTdvBk88iJsSVMuPJ"
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
