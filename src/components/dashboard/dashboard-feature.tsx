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
    "3E82mjDst13ycECXRhPAyJhsTMwcS7RYPC8GkPck1nVBAYsxS5SQDYUKDt5HABEteWC5Dv3Ak4Yjf9AupdeSKYEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nazWjuAPP62rxnF94AxJjjiNYTdZusTK1UHgpQ6TUjMC2jBzABWokU4ACXiCGggH2fTDGvWUcpfFRMEDkSaHvno",
  "key1": "kQ38ZY5Btx6Wd2EfKtbdTvwmpM1xVhn9JYJUGMCD71N8x2UX8FA6RnEcQrbQBo91Vd49vdQj4z36SzmAszyJNT9",
  "key2": "38Sv67KR7fiC4d13qHgZ5cWEbZLYgjnmxsSfoAtGP52MoTTRpcxrBWJxo6D1KAg8eZPqqcVCRd9nirnUD7Y2Sgfp",
  "key3": "WFG4uAUKhbk61KcCvD7mN1CA6Uq7mbWMzVSCH3HQXzhp5x4bG9hgABgcwrpvB9ECmvAW6KTsZeHKnuVQ7WPKseR",
  "key4": "4cEkA9JYVy553hLiVauwpNqq3Q92zfnjMfoToupqV8kEwg9LB5wVEVuM1ovCyKe4JvuTF9bSY2HShGZY9ThBkvXg",
  "key5": "51EjTmkRZq2GfFUiK2xkcanhZeBq1rr3oX2AmpkSEHSM6ph9gY4xzEYTpDTpdPaBG64YNr4P9ymrZokcD5SMPxMN",
  "key6": "4L2jSgbiouTfmchWcoX5ph31L2tD7gwkcf5AUMWtsah6KDx22B1yGo9MaN2RwFX4qsJU3fJ69a4YxWS8srfE7hFk",
  "key7": "5De8cMY72N3nKRu8vakyV4WVLZMNWRfyFGpD8tsDyBJLNv8Xh88rjWLvkx51qWUZUh2c2AtFvTS5KM1iJWHmNaqo",
  "key8": "3T4wFndB935T7HAoewkqX7k1LiH1Duwpc7UnRg9W6rVdGgZPa2anwVo178vFpSqbQtdQXWmXUjL2q7TfdEXPQdUd",
  "key9": "36U3tVz8Qn2psTS4zbHhfXBS5osRXCCb3rYBjyx9BgpeT5p6V1b3jdc1R9k77DroqPwdEyr9F72GMR2SVUeYPv5y",
  "key10": "jCB6NNmN1xymTeqZaWMM4CTMpVjbSC13Z5VKZEC5qxKCRFVsdC3tW8ovcdYPWiGSUgUGuGufBzeRbtHNwtDWTGN",
  "key11": "1ovbUVUJbh3BN2YmFEYxNdJC6Qxac6M7XQe3Fu1t8nxKQUixtoV34BG5WQcsWeWZ3aGS37kVVrKkLzirNfDuwV1",
  "key12": "2DKuebweUYQtAeX6rg5qXhNLQS6S3HiZQt3wVVChrUfRcBpHPNnRUhgRnnrg1pY7JMPeSmr7XwwEzYGymdJB7jwD",
  "key13": "2686P7C3n2gLcDrYqEg3A4M5UbEetVspXiLK85c8RTkg4QKnm2wP4HJyLbzoGpxazQugqmjATxDg2qKyQR4Gi1s3",
  "key14": "H6J65anytou8REYiDVJFm19fjpStHe46Ve5GZDTC638zwb2w7ofsNGWazFUwj9Gv9Gi174TQP5qg7VEbzg96tU3",
  "key15": "5jpj5tB2iRku5rzT7N1foyoJuHHrTFt4oaCzyPw9bhNXDgNBBvPzBDS3Ec1t7Cg1hBvJastDoR5GDuRS4rKpxgog",
  "key16": "an3xeqtYaqyzUMPMJhbZttgVRp9vod4yrBvhwKFKty8teYdHcCe6zK5WNZj5cgtFbf6Fzzcf9mxCUobUKBD9NBy",
  "key17": "QmsfG2HcrYUtmJAzGjSMzCRMceQ6QGVu16fn5f5mv779oboVipR39M2YJzkk247JEG8D9bZfpPhNgpnqg9J7b63",
  "key18": "5f3Wh3kEfHVPmbbg6j3gGgaimPwmF8tvoEzkYfYY9eGgdZPudqLHjhYrjukJVm9QHB5bit7fRZqmRU5Y43QRyeXi",
  "key19": "3FjyNFyUsspUoGX8NAbtDmXxe7HdpgzwzZTEkvKxZFt7SAUm8oS2XtVNJ8vUL4g1QLVFNf6wEKKbL9e2AKx8WiP1",
  "key20": "vvHSBGuBuUrNNK7421pGC3MWeKgKpziVbpzFqNV6zxy2oRkS6AWR9vURCnywosJsWGHX25b2donmv3qmEKZMZte",
  "key21": "3PFmprtUNPRJWatfCbNrxq96HRnCFQcndt6e15S4xXmkBaRAAoNARHq5TQWKmtWeZ3AoDvGiY1S72Cj4hiRwQXGG",
  "key22": "27vPmqxcTacYfmQv4SnjgmQDKjfipwLVo9oHZFvotHwSnvJue4Dqsxgp7oQ12a2oD5Vmv1K6vRgZvX3QPj2WiUD1",
  "key23": "mtwgxPom7V72JMNcusGW18DkwJ7gUi6X6bKkHXP66ubpUuqnFv1mySW5idLvYxNocHqXYmyL3hwcdBSmcLnpdGR",
  "key24": "2tmMtM3ZtBQP8MVYSPj1iZSZ942baaZar4X3Nd9VESW6JuGKG1AKZbJMjKtuLFpsLiadD4a3ksF5ZmzJx5AZTzJ",
  "key25": "5amB2dHJ8b9wYaM1u6MqDCCWRpFRNZRaUJJZZ429f6nM8PzihBxabtbe1UgiLFWQUTB2afBmPs2bRUm6UzsCVdgj",
  "key26": "55CnGtv11B7LQvrmgihNKzP4DV3imXrAwCUZpXanh64fGABqiE81Xpw4nsipwTebUGuK2Uti2GuduViFyKPz5yzH",
  "key27": "2o94T2vs94h5PCsaAVPzdLGdFcgHEXzCcMmtqZFs6aXiNEbW5qLLvmSixok8SsFFPr3hcvqAEfAugC5bGaKG2dAR",
  "key28": "2aMbnXyXwqNqFvgUs7FempNb56eym9cyB5vjh7xyksuUpYzPA2pDKpZ4vLvADJFZMAQvqzN6G2YqgijyrZnKHMek",
  "key29": "2SCHfwKEZSoS5sPEdRZ8dkPNsT7ZLHa3xVwLuvJ6HXvQ2fPPjSAn7KntGfYEcLp4GfN5ZUEr39gQkeAqsRArTSKV",
  "key30": "5vkJf1JcG7HqWxeMMtvHY5hir4EC3aN9ikDMWH2KQRw1P5DUvQmmCKso37ddBbJW6ayRNAHLWDUC3eSuqEKXKD1q",
  "key31": "JGdxLtp7rvi9xtGkGYkZseW7wqbwavTMCjL69UYj5HtiAynbTbCcxFBd6sFvzYg8TYgM75JZKi8cjCDf65j4vdq",
  "key32": "5gXvQiYxBbbQ79CaQxNekSmFvnNYMJkTHZSY9aEQbzZ6X9bBGTHCw1Mh6UdqR84okQLV1HCtQmc7YARxt3TQfXhm",
  "key33": "4qyu1tx5BgZELwoyhKUoHnx6pcZsZj3BHC6fG61BJdcZmv5Rbj3Dmv341mm42BMRzZBwddjwUeanmXAAy7FEvyoZ",
  "key34": "3vv2VhDYFfU2vrdiUT2LTon9GSXLP9yuvuag4sWmffgd5ScX2zuMzUv5TqNw19wGMce1tYLKHYSTuciyZ5RmXByr",
  "key35": "3CACoK1BY3Qg87VQBoqdPvL6DKVsk2YtCXLPExFSnqeqMvXKKkF7gyf1sdBrdMSsQQVgQyMKqdcMQL521YwUUqHF",
  "key36": "X1zLR5LAezBDTd1nRDEx8aRhru7oN921K6m6M6tQN5ZKS3uyq9D4K6uQPQHsxUFKAupkahNGLQRadAvaaDL2Uwy",
  "key37": "263TVbTY5wSNEF888a5jKkE66KprpTwLbzJG5PnPWqRp6ciBQZHPzoGnTLZc6TidviBWvzLweUyemEJnyRqHQeMx",
  "key38": "5iHGXAJBVKFKqLWS2nQ1vzAv3ysdCuubVktS2akg2cYegrWCP3oK5cWSpeLZE3ZqrLAojztJW9boxuVRLSFpqbkM",
  "key39": "67JAXjpjcy3d5rn1fSuonJiNzRV55FsHrvwD8vnfJ243ThKEc5kEzKAQjKSh1VDMzBsqD7x3QcSTaByeSi916hXV",
  "key40": "ycnLzVHBEBm7EPvnZ3JChMugBY5iEkkkE4GK1Qvv8fpgPBz6DHu98Qmvd8KtCvT9bPhLMT4QQ6kF2WWzRMm1EcN",
  "key41": "3amrhD6Jt83VkigFAYvNh2hzNosdvT41xTkG4LBAXGejXfq4E1vGP8oCRhNLjtrKz77yBzmCpPgKizgLrWsrjpgk",
  "key42": "37Y5JHBwnPjiAa2LPZYhVnX5X7cBn6yQuNfP1aURz11D4nZgMr8aVvcu5vPRPyCH6xaSiox5Mh3XLar94zG6xiV8",
  "key43": "aW2wgYEZFe2R3h7ienFVnfR8YF3Saoxk3RLUuuZrb33tbbqs1gAwUxuZySjqLfbd7rkqyyyepkAYzjw2x5NKTaU",
  "key44": "2NHssQu2nCcNoQfvEpXKYwndLodaQcCMRdwT1kPsJLXTBs5NwM8C5kN77wjjdgABPVqk7wWcQVz14PGcE1hMsoK4",
  "key45": "58NhkczSrjUBf79w7LsWT4QKrfaavrEpb5w2JdQiHkgm1ZAFG67GyGrtu4VvuJhdx2mjXAPtYHNkLJWsy8J9Hpcv",
  "key46": "44kkNmXHFXot8ZhCUnXTmW1z2RftqchYYuqocV54HRLTJPHctjYsWf6KmsSkC7uUz24a9hFKzEAwKY5qfiwXzHrf",
  "key47": "2Fp6Tmv2N4VX9M2gky2MAgtBRwWuqjiq1qS1VVGe9DVCnd1i7AtR1NpaTCQjsMiV5bby9DaEdyiLRQhyWmf3oNXC",
  "key48": "4ebojdwysLT773kBGT1e8XAYwLCDKCNfmZMcGCiYdMrbkxoAkRggJR8omKFHSaT5AgnsuSfuZYJiwi4nWDZLdELz",
  "key49": "33F96vGzHan432pMLWmxLyRnnrZdMMhYDEB46nLwV2bGJka9GaAnMQpiHVTcc4Rwjv7LPWoZ3NLCyUp1dYBhL9ps"
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
