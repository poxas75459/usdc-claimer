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
    "5fS5gq4PrPZBMGDS5Qa6ZxsAcxZnm8R3cRcu3611NnW9fZjqkQzTieeVgERi3PW9jLWG7sdK1KZBNvMZsf8jmRvD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mx7G2mcZ83apugNxPRPga4WchvZNaN9bwS9ZkCtDWkny4iB6e2Eixm2eZkr4qMwnSHfphFLzjs7cmjEmuuUH4vS",
  "key1": "5vH1mLSLpDYSeZCoPzc3HRTssUfgx2n1G3N2eUgczzVPtcefFKzuKCjjVRr7aUTpccrtZgr4jCPjAjkK6hzqa53a",
  "key2": "4qMtCqqCBD5aiYF72pTJe5PUjv9ot3NpJhP8kJfBmcKASkRf5VjwYWWdnpVopdAfCT22HNDbWiJVbiwNDb6xCj5w",
  "key3": "597sjPnnERvUJHSUivCuYJs9Nw8qwRnbCpsxPackuWkDp5YHkA9mo6YtxbQvxifNiWSoLYyAQkYaQVfH8Vbce5id",
  "key4": "5Um8voZGM3GpcQUHHyMCgg5ccwoa6EJdZYHXtYXKdEWG21bYe2Aa63S5v8xQ5YMmDUhoPCrMD7wKpjCpcxrx4Zcx",
  "key5": "4xbDYj8c4EY8G1wunc9jULnCq2u3VKFkJvMFZi3qb1ePwMaHGqwxn1JpAykT9h1K4RTQzWHWSZvQKgs354eH2oSr",
  "key6": "3gs97w715QugMihHpYiRG5ZZCPyTV1aKm7GSCfth4v6gQ6JoYskBtgkdQJ7c8pK1WmRkZnBGjhPvbxz1atsQ2hWG",
  "key7": "5AEuqGcvyrniew8Ntzst5sbSfoJQZtqjjBvAx7x5RrG726tSuRGmvx8eUide4fVUA534iMbBUTWmccXYbv7k6L34",
  "key8": "31WC6w1P7rZuKwTQgVn1zum2ygUiYKkL3rfroNwdFV7hQM5nBpmMqcZU92JGhfXtAWGozdDiaT61UKRYVGuCTWLi",
  "key9": "46YMtdWXo57CxfSViCbtVHhE6qFQEVLtAXQhktqiVtLLFPwKqrVTJ6ARDQpTbbUqn64TyP3ns2N9y9BXdBUJYorB",
  "key10": "w1pLJhGhPThk7dobPDaVxnTWh5FUHgx5udyjvjQ6m9wehmZAWKJGiBdKmU6LSsZR9mTzA313xJKFx4vLiaiF5NL",
  "key11": "54npyk95PxUiPcfSka2uWCFgaHLn1iyx9TGyU92vq9BN3n8vgaREXnyNuSMVdDBRHRzLnqffTydH9H5ozyfoqzu",
  "key12": "49MkzDDjigGxX3V32z1rjt3HRrihP2eWMWibk6KCvWZs7bcHKqRK8xGgmBvpYazSBSph2X6ALaSftjig3CBe4pFX",
  "key13": "5v5X736q6rzwutgK1MW8HtwMMv64BaZzBqo2DmUxvEjxMnNA2VQbiG5DXJZDnQA4rG1Ya15UjyAd9CW9EV7XZEHd",
  "key14": "kh5wUQ4aoprHx7WYXeaaeRCoGfSDSJ96vaX4VU9Gv2YfG6jcVqT8B4kEr1n6ESmi8smFVSB1RjqqxCcWrJE2FgN",
  "key15": "4MoixPRSCEgkU4E24ZGsECJox6CiXg41hCvgNHgHrHn1YUjBz8hfTLdjQLuap9jSLLEDyww3FAuKLQX846Jpo3Qt",
  "key16": "3gsJtMM939wfQuyXR4cYKoA7evnCW7HHZ5ANHaPFxmrBRZDrhwcgEWHk94ZPqMp6FWEMCAgjWVrgjQK8mtUfwkg1",
  "key17": "5g6k5Uegn476MZr21nrJzgeQbccC1sonwXc8VVzbf4iRqdQUc6y3sgyrkpDBXVmpGWm9X3YWc9w3p7sKEzonzCsZ",
  "key18": "4Qe77PsYpcYa3Fv4JLGMGSAMMtnFdj9Mrx3crEDFK9NheAsEe5QiCzTsUHLwUfNdx1sURnbvnANFhZncJbTALm56",
  "key19": "2ErzdcP7qD7pKRdKjyPFB3fi63Fnjrqbk8N7ePZXj5X6uNwpPLnTTeVzWXFCvLWXmV3gGYCsyAQPWahrfRUL5Ltd",
  "key20": "4aTfeHZXNuPXQn2ZYuJHXmZWfZb7nTK1z2kndKL8Sw7f1JWD6aGMxv41QkBB43rXxYjmGwE66TMdr1vQGqmd81zy",
  "key21": "5XFLFRCpw3CQmd68zRWQsxroaWT1bwCoU54GgGXqZYDPE5Q6oJcqubqorUSJ5oxhtmZHaoFGxNmKfjk71GFz5WNT",
  "key22": "4StK5B4ga1kE2J9WWUrkUGva1ENrmWYY4fg5XyR78fLPvvw7NWZNwQz66STCzCD3JuWTceELwB7afpDgusFNNVQk",
  "key23": "37wpUdo98XUSDfrQHshMUVHwuoUy8hJe1z1UrUtUmg8f1dq9wd2UjP2eMRYM7zskk6DXAJB837dZVeNfktookWUA",
  "key24": "4aQudH6gSjDR5rXGCmtyqMwQtqzr6mGZisDFDtkc37paDkakp2AhkuBg1xiTJ9hBdeNVtQYSKKZynXVqj4Zj6WsR",
  "key25": "34V5ds8mTWsKcJnk11Mg1LgEfUw6m3gzDCeULD6gmqso7muqEiMXjFFADHLvkwCZNwj5r4fcbUNa8kZTT7KBeYnv",
  "key26": "3XyoWTZxr5ggXptFgoHLszXsZ5yunCaaG4CQBtJyWgHR8zHNCzFNUnr1Mt7xEdYNQ41P3EhMntUE72M6vZJRAonB",
  "key27": "4CrpJ5UwrRZ2GMoCBTvqAPL9eQ112DXE1NbKKNKXMPW11YmTZPpCficswRvjC2mPJS2Xk2djx8ZxzcvNhfmfcVvp",
  "key28": "5QY3pQ2SfKqik3vuDkC517ibdv3KxANkMLAJZchQMAqwfP8GveYxEKS8UMBWw7zKnhHGSBPmLuype14JqJiYLk5L",
  "key29": "47Pnxvjsx5ujbZY9P8gThnwLzT9igTjJcG32ef1rAx5SG74ed5ywVFaP8nr6w23DKTYKRanQojFAphXPj2KusbEt",
  "key30": "5s3dMmB8RxRhZnyXeQNUQEqxpqu4cqNGARYS5nJkgufHePhoCLFDYQVfoshctx9PAq9J3UABAfz1aLpV2Ld5g2Dg",
  "key31": "5EVbFqVTDwwJM3s9bfkzS3LkNdEaXi72Edc1JkgVevPaQCNFfZKiy6BT58aGvEeKy9oPTHb16fggrkhftV8wcbwX",
  "key32": "5QTiZosBBA3fhHowZ5hVZmKCFZxjnTs1g3HLSJ5C7dRaZxUUb2vhGhaQUHKs81NYiFKV6FgrjYJx2sfaNYxWQJnG",
  "key33": "3JyJUauXMikMbGo9ukC5chmjWfFpyuYWjDfFDezkUWmNM3DvudYDCCp9HCUuRLYkru5VyYDxYC7QoZ5ndmTFbTqe",
  "key34": "51CVBLGtYUeHCrAXmraMxF5RjwUsdJBCdycap3W4qvdfvvpAiNd1a5PCpqbsCLpPam26UDfsHLJiZd4rwjubenaY",
  "key35": "5H8WrdCaBFmBTHv69t7e6g1TNGepckog3mDpWGdU8Zv5n1ArFsqBAu9VVjbJgnYq7iWxEyHCVsc5Z11ZjTz84Xpt",
  "key36": "2rwW5dTSj8aq3nXLMbzF6PfSw5y8K6mUPqat5bE8mno7mtXR3aVAGhGDoMzZRyd8tFsAsdN7V2iN1CNgFqgLmcWc",
  "key37": "5Jap491Qdsxf4wfNuMReBjZxRRmhQfHETcPqXhoPhDgxZnk2fATkLkfJoYbm8gSAEEfWaWnr9V9HTs1vF7WHCqvH",
  "key38": "3xhEzBrEwMaFXLiaNoscGWPKNBewh3BEB1Ey5qjbvkr9pjg5ok4FqVCRyP1JuurAwXvqJ5aLYRRSrnz9ardGhcPG",
  "key39": "2TSDCAVUrBZNL92KBc8PYy2cPjmYcZRHENR2aM3Gv4pyfbCsSr87ifUwZT3pEvRhVie1LssRbJm84mUdVSKE84sj"
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
