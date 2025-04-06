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
    "5fJUMkRprFAS2TbpfCoSZHEYjyR4Yob2hpM5RHrscTmXjy7YG82Ja4APrsqpndh8ztt26qitoxTwc6WsxqYkpMmJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57yR47t54mmursmDC9JbKt5GVbDXu8TEgnMDcHVL2CUutfoU5V79hqiMQjnwH1dYrRE6joQye7DvNADvWEpvBF3d",
  "key1": "67DNuh18Dq5sEVJeUyWPVSKSEt7CNczEWutjv1689ehaMVo5H7YzQ82cS9bwhFCGk3suXRLdqbMJs7MwXZ1nwvcq",
  "key2": "49SKoHMXRUR4gCNSw8S1dU9qLnQ2yKaPyct4X1f2Qd2xSzwHVaUFJ4bswnefeC9rkLxui7HKfQpsBK7MpgNcrkPA",
  "key3": "5LnLPQhvefrp92DgaFQ5nu7PnUnufZrQ5Fmmw7h13tkGk9dnbYi8U4ZqQMp6sdKiq1Hy1VF99o6wDrWiQap5atrx",
  "key4": "45hVHLUUZi4ZEfJ5tf4VSsbahoxB2kpwTe7DMKhfgkucdKaZpzp2FC4uuzwhAKpKXAgdgqt1aXdq1x1Ya3it39xa",
  "key5": "4ketB4H2ajYuE4workZguNNpc2h27jVy9CGKkVCdNxw8K4w4Bm75szoQXvzXsAaaBwtSWbxyFTVbRmBSGMvAk8xZ",
  "key6": "44YcWahmLDE84tVsiojGeFzAZxJHydJ5yRHohe3AqpttXKmCwMeA82Lz6jWRtHqopEDrJP5DXAQzWHkY7XgeHToe",
  "key7": "2tRqSsjjPccKKj82aHSoLgwUZrdJ87RjmAgh8c1gqxTVgkWjQH9Ba4WYmn5ifmnUbi3DdvWnbJTT5hKPLFGVrFoL",
  "key8": "3CF2Gv6yo4L7HfQEkU1weFXDFWuLjTwcENDEbgYEzJoD7mAMnPTLFxk7LVSrtMB6Pg7gnDhhH5JvjtA34AQCf7BP",
  "key9": "2AZMDDzaBj5gQKt3W5Udvwf5qFWqrTxWso2hjb3QgpjX2qL2cJCAPUfnsiSrjnmE7MAut7F823S1oYPyXAKAp9m8",
  "key10": "2UYr9v48GfhQWhKRuvfB4kCFYFT3MsMrvvyyf5bSzvK2ksAuBp9BjtztqVMzBZT3T7KFsTXanSnKFSaSigsMdtAB",
  "key11": "2kFB6nAVMzgYUTyfLibh88PVNMuoYiitcQhHcbaJN1CznuTCzs6YzoidGjbSSSixaPAyyw3JsoiZFdAYPz1iy4Lc",
  "key12": "3SwgSQ8sT2ZJSPtusnHEg5q9Ae6YQh4HJ35acExApZV9CLDc9SYBMLbUvSuZTPD7qBC5mzWk3nYcAFxYQSw5rZA6",
  "key13": "5bxWfdwR6DfDGa2qoCJixyWbrKgWE5q3KAhSFrQk1HN4pNqHFJdtCUmWxmnXreFbywXWxEv34UuSpLGH19xhdGgd",
  "key14": "4vrZHsUe1Jyj9ZipaKGHcaEdSQojbAbuM124xQYur3dLGzTDcBXHZcQo8h2ru6WrPy1SBvmC1tG1E4e4YRYfbvTx",
  "key15": "4kbt4AdYRJ5gD6b3DiHsQSCvW4XuAW5RzK7367ymgWur3Z35VDJZJ2CigKZMRyR38z19gZgX8hfN9QXLmNZKgPiW",
  "key16": "43GamgUdVZGBRDq6EbyB4wF8ucqrccj4Hg13d4K3bvrA9jAJhKqj3qLPvX5yrxBEvKeGcVk2B1JLjVTfkh4AatAN",
  "key17": "333VTuSKFwp8yR9Xb85fyvMTD5v7EbZs15PvHQy4GznhW4KGAvc1Aw5gfXQ5dcrUGQiWRshe2uNGg7cy8xBRcdFV",
  "key18": "8yyAwdAoruvGHYJzQVd1zewAkkgeJh9XeusoidcT1gsLLN8n1BdpdAzdpP4jhzfsD1gt8zCW8iHr2zzdLeBkko6",
  "key19": "5FbVGJBejXNPWehX4B6mH8XkxBwFK53eMzTRYvxtfYiMSvswbh7pNq3XtXcmxgEiJsnqF2AMKYdrE1aypjCRSw15",
  "key20": "2nqK2iZct4L1fAJbv3YJeiFxHXQpUCm4BCVzKppZFi9sdb2ftD45bzWriYp6k8SEDyFbq2LzTgXcVHoPCZQ29xuK",
  "key21": "ACqye68E8vK8d4fLgAnkdQfeX5pCpoPiJrbZrd2mdcfRLtQ5kyG3AaBiUg3vu7ErUdfH9X6LXjnGZg2hiRyfLNP",
  "key22": "5LF4BH2gemAdrN2ehAfcmURF8J8iK27QYXq17ADjCJEwMWQUScudkJ9fmqdzp56oMuueXs9FR5kvPFysHaBMSYrN",
  "key23": "UoKV6TR9VagyBz1scJsBYvqQsXA75TgFAaBgy8oVNzDXLYw1g9cS3xA8JEGNNoSsV42dcCQ5UdwkdS4HP9dRtRS",
  "key24": "4Wd2mT9V8ddirnrQpvsymZ5Qv7gPqJoWWXA4ey9YSzMYDKqLgx12GN5GMra4FfScHazkAm8F9wLFE95sNUvs2FTu",
  "key25": "4kvWzTmuh3z5goVfvvovw1hgYsCG6XTG5rqXLSZMjBq2XTBAmt35xxwJQvaq9Ufj5ySPdThvgUinEkFKtEF6YjcU",
  "key26": "8uySF7rupF7DavWNHKxC6ji41wmpZYaQ9q5nqsToiEBG5Bx6r8wAwgcz5Jo1nWrgpPCzws5q5v7PpJ2gSCFtwTg",
  "key27": "2FWireVqPLWSSRtgYmgRKmdYyqq1Bmj5mkSPgJfko92yfSRq5fMP3jAohjK151HXpQN2NXbpUvMZZ9hqDroinVx1",
  "key28": "2X9KgbRbEksvKjNPRz5p3edLv5E31qn6jNhwkkto8XGf8DjY5E2xTW1kJP7YXbRhgz2YKvBQukAZxK2V5bqmKv8q",
  "key29": "2Er4kvHUQvTeWiwyY4YkkzckzqTAfPycnCiUZu74tvo9qCX8TNECB54aLuvN2pGmg5MCECRERe7Und1RYecyVbHz",
  "key30": "5L5jDmRoUjXfUJKLYLqix8Y5zTiUwS8aJMGz1bPbaNCDriNaJEHUcABMxp7U8vRq6fGRb99CzZX4svi6HvqtkE8E",
  "key31": "2QWF9ndCHAY1vYFKjKf6MprJvkA6MwH1HDVXyU9Hbe2oFEqgw4ouEb5atz994Aafndf2T3VtiNnaQ61NRR2Lo3Vp",
  "key32": "3ueBhpARUx46eUZ3D4KypAoH6HYe2wpyA1TF6hK81gFcqK9DfjFj1sKCW9Pu8rbpghoL55bGskn4rR3DsiBMK2V1",
  "key33": "5nPiW6BMimhtXsm6kqmTLsVZWdmjwW25Xq9HhxUAbc9b7o2Tc7h3aYeoFBtXq7SAdB3esMRVezRdL5B5gvvzUoC3",
  "key34": "2NtUa8HwdagH5DM5GbcnngXYz5ZtL2BBXkNxYuCpvgGGPSGEngS3RDgAxDXYgkMtihCT8uHtEZHMV8koWEzXHAK3",
  "key35": "JQsANEwFJHHGPaNE4DH3QAGBys2D8dV8ybL9MWtqP7edPGBwEvpYSmKK7a2eKPDdD44NhQ8DLSDuM6L2TAurYeb",
  "key36": "39cFLVo4V8GM3kPqh34oxSHzB9Hf6B6RGuQszUG3RpSUKSjPVsGsHZCtmNKRftqsgGN7U2anVoDqpf54QzKYwYz8",
  "key37": "81qsvpfxyy25bYcTSipFbJ4iLQdCVmTuLQBcDUjTfBtaR8XXuDVWJgUVsUopizF8mY4jiAycitfWB5oQJ1aE6Yx",
  "key38": "5cio71rzED9hPXRMhctihEMq6RkNWTQUf6YQLqKT7Lx5ouyuyRDeXomf81PtbPdR78dutTpZtDpGTWD2zNu7wxn5",
  "key39": "QdpjpvSxwj4Fpo3nTdkiJqnidrs77aUuLE3ytfU5sq47qYUf5aTqhsJgMVBzAdsvgd87pzSKTr2BNJncKyjnh9o",
  "key40": "4EQQTDKifzLwK5cvtgo9vXka7ovFjZpCAT9XebnkswWQUh8tDnpaAHnQxKtKcg8ZCMb3yb3Xtgka9Tcdfma8qoAD",
  "key41": "2bAJidGM1RCY2ZVU61wKPmWWgqMr8J7TLcpqeMJMb77ZRCnfyPuEoEkYw9cC7RaSPUSe5fMmVjguDrJpvA3oNPia",
  "key42": "5zRQoJUcpwN5peWb1Nj1Lb1eF1Mmxi8ixVjopWJ6dN59tEb4TqLy8YR9rsVfsFtVSEbtz5tk342Qc7sw4Svk2Hos",
  "key43": "Ft1pqbPyze6DDqa3hnVirFguSEdeVDxbgxeDcWDqsiHr3TrD2XXvAGELaMGdYrpws1TB2ZvAb6dBcZ2e4me8y3r",
  "key44": "44ZH3QnHTmCBEzqvvhU8o5A9SQJc486wXKqHpnRipW8J1BPKV5hcknjRTJSXGfWFo1a5edaf56PRqRiMxE98KaE5",
  "key45": "2yHQtLCKu3FM6CPaYNaNFjxLd3uPvyna6mbweDwRQUjXQeddQYZzpQDgrvEHuSfAvDwM3JrSDFnCH3CKYfSvHWdp"
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
