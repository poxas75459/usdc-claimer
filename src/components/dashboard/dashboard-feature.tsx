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
    "4561JYtonJLtmZMFggQUS94iYfKG9FveXLPPKCYXprSwK9DUvsu9waugjFvoJLTyu5tTkHEApzyuCgQa7TRjwH8t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kv9AqyWyoP72KJnx3792KZ25Rhu7aYhoxjMzwcJrrAK7kbzpUkMf6zdQtcPTiPLKFt7cwpikmUKscnT2ENkXS35",
  "key1": "SLasbPLojcAGkwxhb1Fohm19Zehts714jJjjg2BC3YV4EtkhkXbnJ2tousbs6FfTq8acHaKxvas129s9PBrTr4P",
  "key2": "5L9PtgSrkrAn1TLFHeD37rLWubFyzUFsX8FxT29nbgsgJG3vzFZ3pE5DujayhczgauMZuqYnrkiJE4dbo4wBk2ES",
  "key3": "4en1p4HFrLUgMkfcSWUU6KCNu3rKPqVq5wNqmMFJrdWtgpNzWWZFSRf3NHcvf1DiUw73aSssvPaPGrz4XtqQr9JA",
  "key4": "3gCiLVyyHTRURumoi2dTn9sLGFJTdobXMdNrWP9UESKtWaN8ffAaoS7SvrR7mrxoiDkwi9XbgDuZDEM7CvWkHoTJ",
  "key5": "3oJts4kVQx5X9FgWN7wdjLtmBjgAbWmSpphSPh8SsXpa51Jt2woSQLYuBKN6TmxKT1KD2Ljh9oygJw39NVVdpXkA",
  "key6": "5er6HdqGvSV4sPTxiuugbSXe71zUYGa3sc4bKryM4TVcUbhAs48Wiq4rKG6CRt3o4JSce9Z8JZmAi6vxWmoHQYNR",
  "key7": "28d5ZtDFW6XAqBgBZNX4YgBCxM6MvAfn698K7uGrasqxMX1PGkcPL6tNhHmEBeTDafhqx2Tii2jHhDgB9DgwimU5",
  "key8": "pkmqn4UmGWy5hLN8bg9ifueCmX9Zt8sz5MmuRG6xpSknPJsp5wYfkM3tJKFdLm2ZgWZA1j3Hd9HFxu8JmqwdJj2",
  "key9": "3znQmTWS1eqjxxjPSa6wfWoX3uAgaAgXTs2G2zKwXUVAuGkHrwU3ypiUdu4s8s8r91Ez7vrq4SSRWZMyZ6w2RHxv",
  "key10": "5yHDNs4RqZf5r8v8heRLq6AdJqMpHGFoGPpUskvRLyTTTBuL9wGjjXTTX5nfxB4Wdunm8o6bTm1ZkbCqmBQyUKTD",
  "key11": "3WiVur9ZcZsaCue8XJTMHPYNawzrpNdywBgMYbQ1GnjKzD33LtDMoLXkvYX8AhAwoG1XT1AGJDsQBUAVgjZKnSFR",
  "key12": "3fgAnKddsu9L3eREVgTnhZt2uDo8Rxa8yMpKQ9A73HgK2t7x9KWz32eCogKstGomt9M8CYRBJscVgi2mkDe8VvcK",
  "key13": "5WPMM4ceaaNHkgSqKUNy1BMmRhzRLpPB4y6Lf2Yud5TdD57Sp18ZjRXEaMG2ZUgUpiTpsXuzDF8tejBVBwc5K5hW",
  "key14": "4Z44FWxhvCwYwXhuUzgbYvY1kBxNYhCms2m6cmAqTq6G1J7vdmzkYGfJCRyMAf1AnqYEuakzkaMLd1fgZ8pvNteB",
  "key15": "5KT4tZaorHeQ4mbbF6QaigpwPugH5TB5TYRn4LBsKTHCJ2HfEEmECaHBwTZhPYTXrpF2scpf863dNhSSBfZdgdv7",
  "key16": "624D1vV9RF7QyGZjtQGNQh8krD2YW3kV2P7pcmiWFdcv6EF6ayUzoExWhe67uwamFdiBueATKeLoKUcJSV4UYfdZ",
  "key17": "3NFjEuCRriNammpgZC5M2RQmpvWEfHGTSUatXFE2ijG4wiKnFqAW19WL6YLdZ8RtvhYVjh59JEjMbwpz47E9Day9",
  "key18": "39Au34fhBWZBYtAhR5Y4AoMuDQ5LGMnfc4cGMG9Netr5tyL3FxcLrkzc461rzmexyG7x1AASntM2hc3vY6aoG3hf",
  "key19": "31Xu3LmxRiNPwrPqdwAk5QoAyhFa9jncndmuMNDxRNfZRgCkUXT5sFtoGGGqa2RcZVUGkxdQ1mpc4CgozLL9rFMa",
  "key20": "4LNCHJAZWtKXwtQwNrfHBsQFVBx1oWCoSBg5SqbKkv6Aw589UFc9dcFFV6nk425rS263SDP4AjeFcaYoFWGzKquz",
  "key21": "3XGtJHnbsCP1qF3fH4VbFvCQsbYQmxTBaUKLrWMpVwiDQx2D4rEfxotxZGEND3VrpmE6maGpfM19WNcikk1CArao",
  "key22": "36GrbB19edCHJoK3FYJzcdshyT7JggQux9JsCeFnnsKMrNWD8wKWycyppKDGBvRvrssmtZ8f253CxKKe2Dxp2tYt",
  "key23": "3GWZbdMWhBuVQw4aEY2RTujDoMhFuxLgx64D5PVZhRoQzLFADCtq9sPW4SLpWHyzTdk3DiwA5PmbUCtWdh1p1VQi",
  "key24": "4WRcX6eohCfwXw2HRCbBdXXVwzKuicX9tB1Xg5mgPxDPYJ4zfoTYWZRuyDJFkYWP3dak2QaPCBxUUmMp2vm7rpF3",
  "key25": "5JVUoscRKW5c6ZRBd86ffwy9GSkVK3gTM5jLS8CKFEDN2JeZnzKLPwYFQQX2HsR6dK5SFBqebQsNa5Cxeq8JB4RA",
  "key26": "2GMZmvBZAvvZwjnQk14EBdbqy53QuV4ZtM8NRdXEfcAP4S7UFwtKjhmHbPdEpDxLvsbqVTLvL7bbdxN6t7FWBr7C",
  "key27": "vVoikK7MV6DYoVpCTERHvKBjshazaBiuB5ADuSZ6jhLnNRuGFj89xmzS8XRVXWQzkUUixKA9GYtjkBjSuVD7tZj",
  "key28": "2AwmrV49RKiRLczr69d2Uikra2tvXYnAUZK8QqLx2aUnEganKKyD2Z1LcS2YxcMP4wtpB85NbQHhKTBaKGMqGzpH",
  "key29": "5DogA8bMkoHtncJYbvhmxkQasqWUzYx1t2Yr7nsSCaognJbznKe2Q1QhNDybS9sXVDc1gJn4T8Q5rHZWZcMcfr3o",
  "key30": "3maJHKGG6r1917U1cmKyPw2Wc8z7nfcYSeu8kMHMa6uNMQiNcZZKhQgrprF5jgb2Prrg1NkzhrTKF7FoUWL19pHD",
  "key31": "4R6FNLTEU5ejRt8EhiK8HnxsAhWfM5Wt8PvySKTgmz4xvBUderwTG2uWFZxHnrmkHp1d9B31XxsNpQRcs7fVXLaV",
  "key32": "3f6LkQtoWiHSSSAMbmuLAufRxF2FRufBb3z9X899GzDZoKKkibjzYRe85CsJvvVpFodUSRc312DqBKB9Ffoamsn6",
  "key33": "4uXxFxWa8op8WjeoB6K1NpPvM3FTsAhA1YSWBNUWWkysc6xDvov1GV6WiT697wkXAB3WGDWtZGsw7JRULyqhEbfm"
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
