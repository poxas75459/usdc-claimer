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
    "5b8SbG1zRBnfMcBV5ZpDBAHFpsgpKF4gxPj8sQBabioHNbeQsaNpfr8xVTMRWTKSGf1P47Z2mjBkMckcfbsNT11R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M4FPtcSiFNjHxTWjCv2VYrrNyuxiMPHWwUeuWCnMf35GaowoG3cDZAQHMYrAVm41zt9gMGtt4xHSJyvNeSrLruF",
  "key1": "2uGHEc3WEHBfhVqaaN4eCE8CuwRXULW3YEYJhU7rvjiorKqbR4ZeHQiT3pWF9PnUKZQGka7R2HRmVTXssF7pTcEp",
  "key2": "3u91jBqHhJiGc4qCmFhneK7AWZBDxx9caa2VD5QrAB5JwV6x5V7pGqQHq4XaY5kS5zMqeKshpFfcQvZN7R5NBNmH",
  "key3": "4eZohbmJCL1qSZhXoGnTD9ccfvRWhSj713BGGVPU1zismsp659nfLRACDn9X4A7hSr72tkAQmMdHcGCi7pnybTGg",
  "key4": "65zRAPnNCE65mKAjpDjkkDrZSExmorEiUq18GyEP5FjzvpWwmfvwsPSt9tBeBv5ckETfsZb12BELTzt6ejLpdqMJ",
  "key5": "5NsVbDv38yddxPJzKG8W5NNbczXWBU1zDWaeRhbreakpzX3p39L2UPfe6zYUfJA8ass8AyYdjTYd7DCWKtDwgB5K",
  "key6": "2hwoGmGpJLJGFEUKnQrLpNErRsPm3SeMk1Ct6aipCUSWvsHPiFPGisykRmMJhSGfDXZ1stNUBFED6Hu4MBXmLdxd",
  "key7": "5Zqba4oHcoM9v45ES4AEkUaNPT5BkS1u1bsxUe3SqqoZmUos9roHkFppzuQYCYukuXFnhWJ3E9pMeGptXS8hb4Hd",
  "key8": "5m6rG3owZFSZA54kNe3bPGiHmb5QAvrFnGcLfFthtysCo2Bxun63nyAYmuedLNgFhjcQnZKkcqzBCgmvuk1fsmHv",
  "key9": "3jwEE9KecRysB1XTgwcfB83zrFbXfSbipBjerYhr58ERdEzmjkiNz3bMigmS3fXS7L2jLs1kankizMgwNfLcpLVQ",
  "key10": "2BFxHh3saeQSz3cVHq2VHeznWG2VGFrw8RLLKS8VZM2CeEHAxu89tNRNGUm1aKYozvNBAwp8zzBim2TseQTtEAys",
  "key11": "sMufVH2UCTHKUMSP8AYdBmNaTUB7sQMTeJWWS7a5oK1indgd1gh7p9uiHrR1EDGyNLsAvZENnzxGjoc4HfB1YbX",
  "key12": "2d8JfoLrU6rurUTkDse2VXK4zifWrdEJRQJpC61JL9BG2msA6jwmnVypSUGKaYazbzzkc9zmEG47RHkn7bkEQm4m",
  "key13": "phYis26ZPuWSoaUUAEhsLKaAB8vi8FJ5PpDu7Ff8uSF2sGgtgFuiPN6rcYC41WJdMYKYmRTyA1FzCpFNHfbRS8M",
  "key14": "41KiWMQN9eueWaFjkHMXsbEeRm8wRngppwjrCBkN9pzQQTNTaibGeesjhcy5kPhe2MsxoeSBEtVnE1BLUBQCcrx8",
  "key15": "3jNAg2e9BNVgo1w6sVhHKKLHZ76b5JZ14MF5ZjHZwbxLpnQsrUyccQwZU3azcTPGWzbUnedR6ZZWBvqhjNJZ9SSn",
  "key16": "3j73G8HJNEj9ZvizTHjh2HRAVJpLxBRkXvuj83MnHAnwR7Ntihc3onST6HBYnErEjaMDByvEm6KfTsQ2TQj6YMrJ",
  "key17": "4UbokzGUdFE4xEQrJkTvAjJyP5o9LbUk1MGGbEFgir5A6wxR7v2aprGGun6seJn1ACz49dvHUKzwt9NTxXhcyPCT",
  "key18": "4SuTzNey5E4c24ppxfbDKXRPLUtsReG4jDV2Bc4G7Ld276Pf8JxZzNDU6dc93ZhLWrT4Z1d7yVoMg2Teb2xoVomn",
  "key19": "NKKFMaGKcdyZRpYZPcuZmpmFkZKxVFTt129oZJMzMH5Yh9K6GXJJ4t5k2zmEY8Fi6NAJyYK493vqNrY1XJdafbf",
  "key20": "5DkceYPkN96ieqqBPgjaKb8SDH97u7TJVYVPNaUJosf8D5C4oHVh6vmq5Nzubq8EajcXaY7mArX2BKRcAxESTA1W",
  "key21": "46b8P8A53xJN1jBUeQTzuKeCADzgrngncLDFkwzQnX3GHCN4BkeN5gtRk1dZyaKyBjfqdC7j3TJDw3LFY8v1zSbf",
  "key22": "3DHZQ3DXFM2t1yWc4MQeVJ6EUA11wdN8TMccPhWXGaFPWBhcKVyKordpNLtzyxjh5NFuQgenZVGMD6WfdGKfLaAv",
  "key23": "5GppEUuFCiPEQkUYBV4Q5MSPQ6GezgnB5H2EHgrE4DDUZJEjGWcHxN3gaygvo5qUNYak7uKPPopLJxcovMHf3qNb",
  "key24": "4t3UFuQ32RkjHEqnGbTDbdCV2WWT39HB63XuPW7xs3Pk2ha7EwJh7WAUTrvSDaeoTuy62L39BjocDSE78G3He6Un",
  "key25": "5pyZ28yFBYjv57qXoW9PUxLajfDzsK954XN6v76a7MSi1Ye8ywWKbs8p8cBzuLaf24ZiqrXDLNwo3dz8cM6qmdCD",
  "key26": "65dZoabYtesJBo2RoDxQmnzHpoW6GM2JH5oCnm73JFAntm54sPQExhiHUY7nwsZGWqNZA2SSxDbdABeETTTtZDb7",
  "key27": "2B2zocjZ7oahALSieqCouUEGpnWzXrLj8BbTRhmyz5JFPAHEu6gSDcQjMZc8kKRZTf71ZSHTs14LoUJhACutogzU",
  "key28": "4zytwRTgLUY8PgT3neWaKqC2ZV8gQJimNzrV9165krKa64KG3MtaUkU4xjZLMzrYKLzV7b7S7AEtMibdABDCgTmf",
  "key29": "39nqqj26Wqhh1m97YEc8Yz4HduQLnXrF2yjeHJTVd2byshw2W9Nk97PZUiaDDqggjJDMFv12sfgrFYvaqokdJqT2",
  "key30": "56ZoEczabP1N288qSdyTuNkam6Z9nEtP8Hv2b199M39saYZZAQGtCecxAbvzkQf6ovZpwRrWjYK3RZQfs1wAfK8G",
  "key31": "3Jdr874KuA9xvmXWT9JyfFxgzoNR2nJVuFYTHHLkN3bsjMyE7avKnyrYwGuhvgW92JX3LwQRvamMNLbKjvdLGYyy",
  "key32": "idRqCUVdgZ8DKSAWB9gNbF8r8aqTtNYbH6v9aKkKz4cE1SEUnW6G19fKYEYXMdCUjmarL9iDSjKDpyyuu4ajDqY",
  "key33": "38gDdAUQYQkU2T8bVSV9ohoo3BNDxcf7VBBUsLnHHMXcWMnyd2tr9SaduuLBz2eYZJUCyh2KABFr8QwfoXx7no66",
  "key34": "59jTBF4j415dkcKCZgGsQN4EtEhhZ6vwRzj69aKuuT37wR6Zv9KpWBbZSQs992m5enUn5LfaZ3nkpd9rgBMiFACS",
  "key35": "56c8BPPvwBWvkdfc26UVZCTPTawTaLs418LE8y5Vxc6bGLWcd25YpZuwUkLpzhZforH5FLPGwBcMSyHsBAJXTUaG"
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
