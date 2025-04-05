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
    "2DUerdKyNyyMRysjkGhhYRm1NYHX65votxM8FjHpYhYwdKLLQgrYu44K2ZDQYktd6ULKuRLNoyyVVFWVppvygexg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TdX4PvpcQEQVtzwY8FJpb4C8dzH3N9hh3QBRmRdbg1EJsya5xL55y84JaHS8gMUNWuwN11SE7FqZYoFQEPrzUGY",
  "key1": "4n99CyYz6sE5xAKq42UHPgcHjCZ73gmRcgqdVU8bffM56HRb7MxC1jYjZye3jkKgjbi55kNt3gFf6omcofcm5BqT",
  "key2": "7ZVZUoVgNekMAHwhZ9SVsZY8uT6tB3nEBWzr9HfKnhBMy3vfpPdsWbBmNP7Wzmpo8aizArrganxmBCYXa5xio1S",
  "key3": "62WSzRYadyyscm1bZzYhBWtijyiz4k3BzoAKa3eZmbwWCbzY47W3cSVUCoMtAPvWx3ajZrE2Npr64Ks4pehDVmoA",
  "key4": "5YDBaeC9YtDTdbyxhka8Fmb6ittkzGBVWKnFSNH6RF3Cjs6S23KeBmf1shG1Xo2Dq2d1BhsAy3Ud1fxScBD4C6wU",
  "key5": "3hZbsAirb7hP19vbF1zMHBCQFSXySQpXaJbTYYiNZs29p3NH1c2dU1omBp7hGbS26ThgazsBBRnyeiYZ8wCnQmnw",
  "key6": "5dK5vxZhtYWNKafSg6iK1zLMvRvTVuSWYms5XAyqsuKRdmmV6ar5pUT48px7DLgBw5Zqoc1gMvfbXiSfmJwUETc9",
  "key7": "4NhEwCKEH1ma4cya8kqsrbA5VfDHr45gCaULygd2j7EPo2ZHvWo92F1kQ1CNK4BXqQCKcjKZuMqJuTf6TrdyzdAs",
  "key8": "41ehTemXx8pAH6yQ9QDtPg1bDPHudu9Hb18grC4Wt1f9kuYd2LGmBVzGzjXT921Qy9S2PMEvuSMw1wAqrtAeihgR",
  "key9": "3JzX7H9DXh6rE1EksHVPm8MpdLbWjYhBqdED3VRumE41HYhaHUfGNyibEjX7WMkQcfgz3HLPTyrGjyGhRVMNCXCk",
  "key10": "2SEMizmNeG3BSmgVMUFdtnsMAaYjV4qnxX1dJX6W76ghBTBgbecaUfGVzBYdissLDeyrkHTKPdNwNPgXFSFpqUvy",
  "key11": "8KP5nqzegigWEN3fvDvSetrUWuYBX1G5Ph7CTjFa256UBU97xWLpXYgZLJd8x2fB2YoZz5EEpqvbztTJM1Da2Dc",
  "key12": "6U8bHKyVpTFvLt4idwjPG2kFgTt9Cj2viagmgBwjy4DZf9pTcB8FF59ovYGhrTkgm3B2cnHrEDYxN6vKY5yhZcx",
  "key13": "4dTTFMGKuQA585XDLCb5TEAh82iMJzbr4wsEDZs85zDz3opnZGk4qvup6Lsw4ht3mF1HPCM78UMdd4B8DkMxXwMS",
  "key14": "tmFPJs9uanHLLdNprtTJMniV9rXmvUsMscYD7HVmon1CwfFpS4awM4J9mvETNLPjiEawoc9cM3Vy2Td8QTCRC7n",
  "key15": "5DKWfifiNK9bReUoR7chrJdH3bvtATHKMy6g1yjAdHZT7yowojcVY7vzkD2QwvbxbdGfuutZ8QJgHb4phHLcPWhr",
  "key16": "3BYQxdenE2YqS9dNyaaYotX5CLoycw8BvNfxLMzCi4jJPr8FdrP1uLWyXH5BcuJDrhwHFEX86sGjQbi5EJjFczen",
  "key17": "62wDYqPdGiFaD5uy48tZkkDpQbrzWpNZtxJNp7LADQCwvVtxYhdR4j44zJePWF6n1Qp1rjc46cgDQgni69SyNp5A",
  "key18": "4Cn2hNetTU3up3xteZj4ynUhyxkLMWnF4FmeMHwRFjtMmMoaWmUYkFMETr1vTCSmR6F8xuB1hoXsXP7vwPSctM1C",
  "key19": "2TwN3NGJNuSRCi2tB4KWaXMCQ2EkMN5iev12m5ekUdskVmJfxAGCV5UAsHV2dETP6FrtyN8fopwuuCFFN3qtpuGV",
  "key20": "5AhAZJmUgeYfUXh6Xg2cfKBuCY7o149hBAYYKy4hpeL2ZeGG54nW4M1yygQZQYTjzxfWv3tVeDsURfMCmvbaU6UY",
  "key21": "4mY3MeJ5abC1yx7gJSQstutnjY9ru4X2ycTxx2RuWR6QdumSUvF6CAkkXRRrjfAKSRuAmwBbiYjTxA6MgrrN9DD4",
  "key22": "5JwgKaJcisBM87hV7d9FUK16YUFs2p4DLYDMewJ2PxeafPQT7CDpANDzAyzGWhgnmeECkSrvCvhtaepJb8Zb1osa",
  "key23": "55y6UbbqfFdsovzM1Jcx1Btmv6MRByP6z4Th9YsN4SwQeKQHPGs95ddhZn6z1YBmMnnttrvHiQNHXr37KcVTSsnE",
  "key24": "62vsGvExbuys69mo7BMxu2kk2mUAgUzNJvqKGAnZ7arJz61YfcgeZZRxHA2EXW3gzAqqYgQCkX7yukqCYg6eFZB",
  "key25": "4MYLRyLtu83mSq8MECDEK58xw3wxo9QPt2o4s6SUxxZ3KcMNE4RcJfSZ7fD8kA6QfQAZYzXbA2hYg3GUsLu2ya1w",
  "key26": "2QPxM8HTg9c65vqiC6yXhwDDBEZgRCdTq6UyoQ6WEXCMXDK5mxAZHLohQiKFQT62qpQHj5wPfutbSGqcEQHGVpXR",
  "key27": "3SyEKtTH7U6R9fEYm3KQFLGmghLpEzeS4YzqKpLKfZUs1L7B1QP5LJWW9Leud3LUNnpAnaTr6v9ZvwYvdS7BYaJ8",
  "key28": "5VRWPwzNDBtYjM5JaChCfkrEPgAfF3UF8uaQN8SrNEKZS3WRH4mEj6W87oYALpAXdBUno6f52ddAczfxDNUiB7ty",
  "key29": "5mSzLpSpHaq7rb3oqQ3GT8gAU8SykAHh4rSfM6WWo9e9pLwTNAkhpAfHXPwf5vwLuQG3oEWyPSv4WGukzR16MLtx",
  "key30": "k54mao2Bwrp6LVg1omkgJjoZLT1dU7bAjj69t8DG6AxxUPco6Te1HBpes88w1eQVckgtHNf9QbDmoHNR3yFD26u",
  "key31": "25G2majKFCEeqRSDHapRJsdtGtk8AMtXm3zSaZuSekkZXJEdFuDHBPqQWEohfEURE89NQCcqd4mR7s8RkwEfSjjU",
  "key32": "65ReAwWMCvhquiF4Nb6e8Hda9WV9GmU1Dad9HkiBA9p6rtrKXqhY94aC6aA64mCaa72axZZNibhZ4zP791TJo8LP",
  "key33": "5UBpgr2qYz3vcuqebPkDk9fjeAr8yfem1YRF8hXZL1nYpu982mB8qncs168d39VymKH9WtQvdExzCaQqbc3dzNbC",
  "key34": "5fELfzy618EyU9UUKnGTho7su39N5HrbRjh5i7vcRo4fV1RWsVhzLyVRRhGRiBbRUf6HCAWuAjihbnr4v3ApsLXx",
  "key35": "3LeBBYg5Nb1hUzCi833xG8LXWmt1rmj2WCrMsCT7GFQRZJmbFiimjauioPT3QjHrwwTj3eGjaHHXYcTADpzjauSM"
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
