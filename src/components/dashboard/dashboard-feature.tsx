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
    "5T9WaYiSDtYeZx2Avk3r8y2jDYVeGBjhRrGKYb6r33wBustWCoTfmdsWCbktf47a5QtbdVk8z8P3KZ5DnZeWo7Mb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RsKcmENokQzLGkkEbCYyrDFQn3xDFy8UkxkRwwKoRhJJtu2s1zSQunTMqnfFRwMAAChJ1D4S8tB3RPDka3yS2SP",
  "key1": "2wAaXCPBKAzsJi8JMcyv7VsnTF5rVJijY6iF2tTVHntsG4w5ryxHbubnTqgLkTB5gb1AiwDJQwGP4ynMTU74LMqk",
  "key2": "3ycZRQ9matp81us854Cqyx5d8koKG7M7CwRQSnzqffqqjr7FMHBYUDvUeHqyWTWTw3sCeRy3VBAbSaFvHhBmhNhG",
  "key3": "2fjjndrYTX6eDWhMQJqMVAfNrvrkRdQTLkwPeDCfou5Hgc7NHSrviqkP8zAaA3kkoGcMEstyRBPnYpNWsbMa8UqL",
  "key4": "47NHuTdL4yBtFCWHGjBsuAJH7iEhDAkX2eTWNKv2khjzLMcgZNGzHsytqHLaWDZ2yxMvibc2rnit4wqbpQqbwCDr",
  "key5": "3KAbMDvnAiJ627b8q53ARbtQ9tXgpsLf6UMbWZpjSCxJZTwwL2Jn1GtqQtRaNnkk8j4hQnL9hq6v3wyqgNC1GQ74",
  "key6": "36GWmjAW69yVHzPkXjB2NBt4HXChHBHRyy9rSZ8cib8SS2FX4v2wunVgyLseAXuQ5XZM3wFnTrgsr2XJttxae1SC",
  "key7": "EAGeYi3eZNs642HBqoDU6ueUP8J2n66sBiSNYCj1SaLSE19ZQtES8RRskxvNzYsaCSy21YNmyYYBQh3znp3dgvD",
  "key8": "3tzb6ft5TKLrF5CrgxSMxsnMfPoFRGzAqSa6DTc84YdvpM7WDWkHrp1KjaGXkVtVg2udcwtmwAY58F15SuM32qd8",
  "key9": "ZkEthacdp1LJP43eDdmC4MXkqY7kFE13zc2LGSv3xMFJXJv3wKMM5tq7gjpXhTeGNgDiRNyGtqvaGxHQ24p7Pr4",
  "key10": "2Qws89ZxMNu3dq2wnXcJUN3ara3tnwKznveHzC5x9LYovau6vNrNduWs4TueUqrXkx8bGs19YnXAS9kzAznwizdk",
  "key11": "3opdQfAzsrgKgq5SydXGY21DyUAsPrCGm9hu69mHp7Vd9473PDvxaJ6u77ee2XbEYTbvPeYfFAK9gcS9mBwk5q3V",
  "key12": "3GEiVBhSWyynKwPSiRhEDnqr45bkHJEqHrdQpKGPNM79xbR6pdhmBZRUKemg8jDrBCoYvoiSpjgakjFtnKnxoB5U",
  "key13": "3jqdLFUTqT6ttWBArV2c7bVxFEgxPF8kaFZcTe5qUr5k3Lj7sp8TQEhT8iUXdHjXY84wDAJqaNuwfxaUpKaFC2t5",
  "key14": "5KUafY7s2wjQGV27GGVy4GguYiRRLz1FmkrRGsEPfF7UXx9EoctivwCpTmRHuKKJU2YHpvnyXTdvFy2cgSUvZhmx",
  "key15": "3sxsUAhFhZTrGNCCEmdxUyrC19ibLsKmGG94oQC2wdiv8FkSBN4MaB8moK81bdJp73THJNXkdUWJ6cr94Hy3xgPv",
  "key16": "35TeJp2wMqCehkFfx8vSGVPQuLrN9JQGYKDQ7ZRG2fomLq8qT5LMgZKw5xNvMF5XW7g4gpBRAs2GeJLUMR7zQQVa",
  "key17": "46LFLckfiNYhiP3qxAn4mdRBFPWp6oKaB1Tba9L4ok4y8LNZE1mF3Y3PrLXqjNsedqWf4A4HSQsrzdcMzsDiN3MQ",
  "key18": "WQ9Zqj7uFfGMbFTKkgfxFC4RxpXhm7njnFUJdDNjrdWN7jDGSecMyKZRRg1Ub76HjKLYnQbenZSVQKR6zNaCo4L",
  "key19": "313LwvnrZmf32E9UzXxsURC5zrQcDbtTgLtApoaz8Khk24CWiuRtSp9yq1PLjxR9xF7ta17bSELHGxxHK9q3Bwjg",
  "key20": "e2vpWdZRWWcx2AChPtyn8RGKteLccSrLnNF8ssD411rLL4BisdNwMCGQNVoMnjeG66aCvkHhExvqq16bDX7kt4s",
  "key21": "3rjhHSNLAVR7BK9vkScXTf9HD7pBtoDZf2xquMQ82VHGhy7iZYU2HrT8aCBuZxqZp4JG3SYNJ4F9PfHC1aUZrAjF",
  "key22": "5n4vMvi2t6xST8WfaMYLp8TFdfwyMmoaUkMBe4bWKYBLtMLSq6w6wBG2894LoAeyrqAbxhpcEzhndZhmd3x8HnM4",
  "key23": "4kH5eRhciyJLB8G6jYGgmcUagCpwQfaACNM4YwdCmgf8N3FJehPQ4ceaWAUrodT7Av2WQzVBeJiBotYwXTAZXdK2",
  "key24": "3QWB5QXaKorPa3DGPamTaPxLhm58Bqvemxbx1yeiNaSEE9xGeshn4GkTo5PLzUvTLP4Xj3KKCCKRSDzRm22adZaB",
  "key25": "4ZV1fH1L7t4RW5HM4s8f658ogrh6YJuU2YVubJ4pj8hJmciBeA1yPDRRxmWX82vSgzz6o7a7sPgxEQUhhq5JvTr6",
  "key26": "3eXbhT2dQaB8CHYs94fgpAPrTvPnukebU2jb2uM7SA88Wj7NoL8t7yHkPQH9fAMBoHQ9iYxUBeCRQb9PFbxRThSA"
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
