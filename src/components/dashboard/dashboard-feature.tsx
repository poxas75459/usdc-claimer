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
    "3rNnuVphm1x5eDn31HabvpdQViKSi4bR93U7AFdz4euue9aHTgx7FVj4uKrMtCSGb7Yvis7XVjFthx5hhRBFj8SM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b3JypNWzP56dUTYPacavSz8mmJDFKpEJuZ2hmT7AGgvvCPDPkR4Abmmy2mbZGRDVQh5UGJdp8tzWd2FCtFxVb3H",
  "key1": "jrqvarCMqMFGaWRF88fX9MAWtxazzMKURpFRVFAvVBXTnT8iVSedJ51wExSVKgAGwTz61A4Lf3pTTgFg3ayMmTu",
  "key2": "2YDtjjvrHPfnNAZFLGqdiqxHAka8yWtbutCQ2H5y8n8PFVvde1jEfGYCZMpbCYsWXqTx96W1X5HxusonoHRM8xfd",
  "key3": "4j9TpZFcXKwhSYzxengpy1EgDRavbNnF5zkRYsLM587XSjBPVT7TnvATAvsTzN7t8NkJyM7uXN65e9vZDjwxmRzp",
  "key4": "2y2hz93DnrSJsMsbRS3qo8kUVMdTHiSjxRUvzJAh85pXuibALtCwF4AEZjY4znCvj9od2zUXqkXEnkkjAMLZ61Gy",
  "key5": "3VKLZjNvscHf4XYjv9TXc4ypLE4CRUiCpV5pdmXoNvs3CuSGBA8GnJwao5iWYamUaqqHhpJ6R7svCDBvpinXcWTB",
  "key6": "5ZzjFaMJDxvqwq2MWJ5p5z3hPLfeeQ2DWDdp2xAnPRhxwGFvBjnkZK8JbfrZsbD6NYPttvwKGMQabkU8g71oxJPZ",
  "key7": "63cFWLULWcRECUFDj5jpe4nzVmpGqEsT4drDJhgFAnHaC6h52NXdwzxvqTEvxbngYhsaWDnph4FKfYrPdhjKUj7D",
  "key8": "3gbGtB3ZFYGxR9A58FTrif8zNs7EzknRWimRAWXB6bqu4AV4YyZ9QsnsM3G5g957c1Btrp3wAEtQAyZVeu6Zmkcy",
  "key9": "32TpJrGsyPU4qorYcFNfBq1r4ggpZFVZ7T5pqhXy7HwPFsRW6oD3pUqABWgL4SDAv2khL1TA61g54NMYTHiBf6Qh",
  "key10": "qiP8JxzxQogeTs6dG7UGPFPKMvyCNZv9PaAUrPNUyTZY7ABvsscVwGcECvjijtEiPPb63yGj9rd5Zu7T6dSBjKr",
  "key11": "5ND5Y3KEZFB8vzDpYTk81nwdNQpfoPDfKZaeEbjL8Q5q2kVKFNN8R7vmxoSb4QRYcRcwbJmMbm8AnjVtgyiwC3F1",
  "key12": "55Bs1VhpMwn6Y8MDgJCEmHxiggsbDh8ky81fEgJaVDLeab5PrNJ64uCSZD7qgV8t2MVvc19DKZwkJ1VJnh8n4PY5",
  "key13": "41f2f3Y83JidA38pE5ADwg1ytu45FraVYQsHNFXCGnS2Qj9cPzaprUEHWxfSrSmWh4FiSC1nX7czPKueLnpUr77J",
  "key14": "3ubB3CZ3tu38qj7jx5W4D4n6jDY2dnZcMPgKk7nJgYTBuVC5afhbxLCFjyJFMDrAH5Jri4S5SUW56h4c2Qbvsywd",
  "key15": "387xfUbWNCESockw7oXtmHc976LzwgBEzFRCoMmjg3tQe1dmKNEK6wNsBtktW81a4cdhhLnC93gRBe11Fp7TbXeH",
  "key16": "3xeBBqJREYxWMc62mL8pSa846kGqaK2SiQJ9ZBbfNSphiLcBBZe9ixahPxaQb4VkSd8PQqJy8nndQ95rvospzqYY",
  "key17": "5ztq6pdGNwqsak2LkkzcYbxsU31koL5H9hBEEJopiiB9xBCH49ctRi4JYA4JZ5r38xNCppmp6pfW3AW9vDF9h16c",
  "key18": "afWX1oUpjJc7cMH4p62M6wuqCHSkckb4PwbTVTvr4mqoonruoWLc8YMqLNcRoAsM3xkZq1vE1wvBpbNGU7NLUwt",
  "key19": "x6J5bxYcUn39d2DB8ogfUAdzBwA7sqpXszF4Bo6qnH2Z4KJ3fubectEScH5sSDc91Mp1QdLoz3vvkBvZvAXub1m",
  "key20": "2zmdP7YsW2MFnMfRw53wHCXUzRvssUFszML9GwijMRTmzSwCYYYccwmpWkhBBRpfhpQRUnfCA2rUiaLPkTcKyGX2",
  "key21": "3sHFzkVpMco34y3M9WB3LMjTxrJQ3ESHMSWDHT3JTGjQX8cWyjoueBTrWXNn2N848tAt9S4xABEJjhcfoBn961vP",
  "key22": "3phAXrM68bMwag2vVk4fGCUSRoS9fuCNJuZj8V4xrTncWmhMA1m6MkrkQVd7JwQAwMF65xnAqhgfdXSWFB8WXmUN",
  "key23": "r8y1NkeSArbkBRriVM4r21AnJhyYLGQmKWCE2R5W7QhcRoH1cXAtby3ZNXvgbQ1GzSaGZVMqUQpVuHGdj6upad2",
  "key24": "5hviLiyT2QUMhMLtHqgTN4WRmR6fp46dxrS65a7gykeMBPX8Mb1ZNSi6oQftX6tfZpiWm3GaisXY5zAwn7XomcMm",
  "key25": "SFv1iFSo7wwZLfC8BJBzDwGSV6zZbqy2abfPCkPgqx7i4oAsWUMnCtsa5Mys4BX6HdrgHN7rFkUVeBufahoGwkA",
  "key26": "2uz3RqUTbvKqu1Q7wKcwmbRGK5Dq1wSV7yyKZJ1MmLu8Pcz6V5Yy8GakJxAbAoneU4nh188qgUFU23nwgUEEF1pn",
  "key27": "5gMB889NexRyJgd5zqiH8FqjJvfHeMPrV2ZCLQuhkyWkvj9HKiCt797zcUohojWGtAa3V1nh2b2RcmMEtzyZFU9L",
  "key28": "66eb9WjT5KqCdf8swmWaVZBraZmKJSvGwqDeDy9oBBAP53xnzGrL6AqfyCsEmba3DB5txu1QhL3C2BSsrFdQDN3p",
  "key29": "omfpiVwXRnmhtZbroHTeCVFnZmoFNJiHnsBqfCEGQfQVKxoHpjSNtndYLJWaYzAUj2aCXiKqkt2j8Lcm9y6Aykx",
  "key30": "3gmQmEu91wMAunhr1WrZu4oUVb8KeS1fPVpEmeWubgkg1Q6cqYNHzaUjxZ8sysEMhQFH9nEyW6m1cjrnPVREGY8y",
  "key31": "4LwGYhgkcY6MPXGnVytijwBxtaZSVaa7sGYtEcLA2NYC6EiWmuHfvoF3ZDCABb8NHQiznuQsCDjSPbMr1ogHtkso",
  "key32": "4CrHS4ae4ami1LMTSvBazLgw7Joenbiuw1g2esoxs88tuo75uP8YpRrrfwmWDgejCUMnCLru77FDymYoeKwqviep",
  "key33": "hNYt1c1jBUi9bMvXMWN7CpsrBVcGayPdaBm6mRWZXHLAG2Zpao9d6C8P1zewsiWhX8E4bvLunxYLQE5fokWETnK",
  "key34": "3qcofG1Qm2VUgM2dniWpSQTQYA5EtKSS1wLdAgPobcEikYii3yuraC1qfUPay3hzCQRyyM3wcKaroT72dBfwsHik",
  "key35": "4rEZwCaXC4Ej3vP14GZKa69nd39fBguc6EKkzasCGDJ8xmir4eWGUt8aNh7oShmeSWckdFoLe9SiPyLuKGmbkXsx",
  "key36": "4g8CdarLdkqiXqJ8v2xnhJeTiczJP17JeEEMUXtv4KYkC9nYodC445bpaKkXszcYWqgrqjDUqPJgHaA12cvJikS9"
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
