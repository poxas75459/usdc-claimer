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
    "64GciN1hhAREoYHHP66bMJfpXkoyvsYni6mLK3dn5bDXGxHBHwBfLhCBgWsrSnx9dwFJhkPP2xscyNpVYvZVKohn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48MQJFNS7rKRcDq3Mt4LXS7WNc4xdXo5vRHTxUAPWd7buanve94fbJ8VPXSKDfKb4YaVCReRQKrzaAcmwDaVcgPH",
  "key1": "2bwgusFBnNyHr3TqzMzww7dzeSk749RVq9SqBiyX8yVkD39YgdLU2cvLkX1SnDr7tAPYBWDqo2xx7eRwnAT8kw6n",
  "key2": "4WpB2hhUp6XeyCX4SrQnWVZGMRwjCJNu4a99Cm9JWtCtJVwTEAKtsACk9PdzM3YCkrizhn4taqcx96MtD8bSPpfY",
  "key3": "36pWZkc8SLEVURGhBX5G1meGUhUmPdrkVgp4AMrLC157QcvHiyFtdn7Yw8Zt75jjxa58q5rCnmiS2ntfuRaZQ3vD",
  "key4": "gCTJbgSLVByUfZMMCVuc8ZAkbZf6o5UawetokkizeviiiV7AUgBfa73oCX9QZXJmYwmGRpRprCqfhJi2Tius9Eu",
  "key5": "5nsNWnJi65q1X15kdc7cQwGxWVQWHyMBxXMGihV2UvpefmgxbhFnCUJe9sECK8WsnQrL1orCraiziegRUnvTJt7B",
  "key6": "xTd5TfJMmcxHUmeMuQwDwHkhQmYUbnzFvDpHxqPsR9f8NkWcgT2tNNH3vwAnhFKRQ2WscpVvuLkS2utfbPWpGe8",
  "key7": "sxavUjioXpL8SMfwkefrhom39zNeftFsi18VhhdViZmaxrDf1a5Km6buhk3ANoV93FshgxfHWW8XiLZJsYuJJnM",
  "key8": "2Msg73ArucgB2XEKSzEj8kroL43e7opL7Jgs6MQbJ7CW5qZU5jwskJieuVaKCfWSGRJDKmcqEXn2jNw41at2xArE",
  "key9": "4GL8cTdveykv1fjSTzxs4RGvD3DyPirzmUVXw3Yq9StZX6uEf22Fz99hX85VsgLQEfBmbQ6Vo8NDJkzWvnqJt9Vp",
  "key10": "fBBVZnPiaEdpbuL18ae3znHoXT2dPTBny6kL4PsJn2XyJ2KX7i13XvWbNmvbLVyS2zxfJyFSKgRaoBHZYLesGDx",
  "key11": "3amzUWFW3RQG3USLTUiLTFhfbgcs66ae58gw6YYYtJKETnp3LSWXmw19Xtcbeo8qT8tVACJ7bLPefFc3Jns8U4X5",
  "key12": "59GcRK2H5zn2vQuyQWNzEXQaYJxssHcpyebvqUKPt54nXiouczSEXiLt3PweFN3idzC6KiK6cYvQggQjHgAYZja6",
  "key13": "2JgF35M2UNRgzoZUNkXT581uMPKw2nwNMBRZ1MX11Yf7YmUJv8qqxghGYEqDTF1fLNC1ZxUyterGYpSv86ax9gkV",
  "key14": "4KWpgkh7Ew58U7h785GjdCMVWj8K3hYNr5ySFMLDhxLppm7rKmAscPqpvXP7xBTEs6iXE6tDQYhmQUeYhaTPz4fX",
  "key15": "3P6LuxQDZMkxEwkRUJm14uMmFFdtdT9NEB2Y2xwivJx24toBGYtkxCCC7ymuAaxyKB2gHjWagJFM7v7Tf2ABsroV",
  "key16": "5WytCYRqQEmEMTRCBX1kSNv4WKkLwu1wDruWLU92zVUYqakb2LnjxE7S4yrtXNUdab8iHmdBDJZCKrg9x4dRx2GQ",
  "key17": "5n6B8T54SR97KZcgp157X1gYMxpLoHB8xJB7gpFFEioMD6ZwA3Yrc6zFXwWGdMbWwPQx1bgis9gBiuvayesSoVyV",
  "key18": "HHKxuYup5qh726rzyPbkHJqZ8ZSKKLLYmNyBHrvc4VJLrn2oSRvL7HWQdUjuuQrwujFwUQCy6uZaEmw61tS4LEk",
  "key19": "4juMmuLj7zVzLNPCtWwqGkbFskiJnh4gerD7DgKFP1RTRKeoKVcSXdjeoki2EDgCWrXVCo2vxdLc4jjMiZhNN9Te",
  "key20": "2fMBzpDbJ8TvSHQDLmnJzwJ7KFAWMR4kjcCEG4EG5w2c2TXESTmtc1gb7J3hTp83SMQeNTJwZarFBRrsteVh9jid",
  "key21": "64vnFWeNsmSxFziLdXR4VQWgASez4yr9TMjiTdqMMPP483seCpfTpPLqxYr3uFdPFjijdu9GUcS5Z4iVtGR4Qzu9",
  "key22": "561y8ssMVKBDMQ3G5xWvtUijuSiUFERG31Ez1wuewGR1Nf3Grc9moZ58QQy2F8hWbTcGz2jLMF5iJPmz6UsfA5wr",
  "key23": "51pZdqTXvGQoVkKhzV8fxe2cTM4KdigyCJ4xKUN86pPSPDnN7WUgMMdRDZU9ahA7xWZ7C9MLKNGgnhTe7oi8UTHF",
  "key24": "53eX5UgA3MB9ZuYUNfi9B6pQEvhBkT4D1bYtL1GoTdBbZn4MV8FURHDT598EYLJ2xR1rbYsxAX4H2xoa6gdxb4DF",
  "key25": "5gpgowfwhEjK9aCGfmPMCjV25VaR1VwmEW99bjDRaYLYHc1dwXn1tRG36yuaU1o4AdUH8PEqUgSaedtqaLsBiNpD",
  "key26": "46z2PnAvks51bR3tAPAgG3ANSUmraXyfWCZG1A68zveYa15jE22HX1Pr1MzgVtd1iw5mJk3hhbQU6uLn5zEFnwJE"
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
