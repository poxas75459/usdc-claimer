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
    "xzZLXZG1YRbJhwbeWWHcDHN3w6hXBQNWYkRx8X7aAfaWCxqFrESXgWr3yBmLwggUTz1kVEJ5Yo39MYhHXbbPDM4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ppxo1saCHoK6g4xhfgHGCPaKBUJSEwsiAstUZSTNxqT7ZRqZSnJXc8k742mbs8pZ7fGZy734CJBXqRzJFRkmBMD",
  "key1": "2u7fxkBiJTcsxmPVCbbwP8UF38KAcyW5jvteTGgiTsfurcfvZw7ayekoWvZvFoqXC5qidcg54prQraeAzhdYNz56",
  "key2": "3jGW13Bo39bf2r3aDjBxKfaaHXEjH45ciuSzRarQSEy36Zrz3riaSNkmWZxVN3nDFQsuAyKFMXBfLdLJRFzKDmCG",
  "key3": "4NEo6QjTBQubvTtAMzidkE4tgy5MqfWDQs1L63SXTu3CQPtXgACmGpDrRpd25RSer2AvYspyiHSmMJEcJoQVeUSe",
  "key4": "4pGWLCzCPbbJ89V8tJkApDCTH95gBEa7HR6px6qQp2iQkgdGNLnfVmYKaE3wDTscqgyQcYtFXXSbBdiGXoY3NEEB",
  "key5": "3TXfhSsX1LUtHqDFfYVSa7SCLtozi1jVZFvCKVYFMGn3eGDwyq1KxK9PcSmuedsybzKnPX4Xn1znGheiDiK7VRnG",
  "key6": "3UoBoxsvyofsn7zWH1rQm6nMbPsh1VugDFXGuZMNd7gQbJqtgpgEdSaKk4oCLQyczf5XV1zTZGnvtNxCN9wKVN8q",
  "key7": "Q8gBFzvgSKunUQCzwrmBQAdtkF5fpHkbkeTLMZDXswA5KmZsWuE1oD1BAUUJDuQFCHxziVN9z4oTPAMGSQJ9DMR",
  "key8": "4XPQTwsnNDts5hqnMQA2HG3KyMKuSpH8cdnfB5x3yrEz8JujojpNLb7iPks1RGNyWXSFcceDb2yXVPFYE6uSSBvv",
  "key9": "3VYZut3kzMHfHdoeuh2XDivVfRTJScncXFNjUddARxHaPXX6G3k7R7kw8pVpw7owwo2jtCHCE5PxfEH9rFFHX1ab",
  "key10": "5d5ur5bLNssNezLhEkjGhW5iJqcnvbRyXUXHcJEBiRvunFfkwU5KDtLXfVvBR5GNP7szLy6tqaYwvwB9cQeA6zTB",
  "key11": "2Vj9Qj3627YmHfmSLCXjnssGiPCkX1WUHeV9EhYRBR3CZabZ2ycvy41wfxstttLL6xbZ2sxzmw1CMKd3Ha4Uw4u2",
  "key12": "3ijrobCzNYGJTePvG7s48ytuVNBnnVtwfyC6fGJ7a2HQ39YcV95Ug4kchgbL38uqAFz4uPCHmCDMKvVRj7UewrJK",
  "key13": "3gaFK3j3Ekp6uZMxqmRE1QEPsxMu7R1z67JVnjN3cAYpr4fAWc1JVyPSKKiqavh33wnuKR6YVVtNgGD2BdCQq4nB",
  "key14": "4LcRo6rmsy6ycci9BrTdDtDWgYAftDqSMswbYp7dqRyZcCYHeQiD898FWCpJSJkYqDwTRDep64v8i8DnC1TTnDJN",
  "key15": "4aQP3qRd2VuQ2Rhr8ow16fkyFf6HyVWbe9DNW4RFphRLNLjs4oeXTjoB8szStcPQkDaDjRqxqAKLnQA54VuBgbBL",
  "key16": "26qVpLcEARJ5ubUjfbRJZcJ1Gz1ep3WoLoYijDYUzNEYWGJ7M5J4SHBouwkFNrvM53bdj3F4RG89KTDKWK3kQzzS",
  "key17": "oi4zkc6pp7nGS6kpeuorSZ6wMtwCFhexRU3L2ZEHpHHkwcdGCJacgDdTkNEySvWE68u6ZHbFg6Z5a6i7a3QtDeT",
  "key18": "3MBYbSvRsBtq1saAMUKfkr54mP6eL5ZuHquPZMnbsTjNwbZ5RyrbDSbwe1gpvjk8TD1dWiVbN5Qw9YZTM6hPZ4EN",
  "key19": "5aFzCwi41LdRARVB8i4SvKXq7kKbAAxoA4PbSvffzuuMxGL89k9hhy5Yw6eYBL2kXXmP7udLzHzhUC2KRj211jXT",
  "key20": "5Yv5LgkvG9cPwgGHPTnuWo2gG7tTNjfncpbjRq8bhUwxehZxJo2v13pNYduB12CVTQpBThkqTb4C4BfhPzwDBfEH",
  "key21": "25By9fbJMTBUvrvMj2ea2HdjcB2VPJ4i54Ro2aHdEKaq4C9VLkZw1xz4JXbWdomUwrqPXJnL5P5oBULpE1MP7cdZ",
  "key22": "ZrW8CBePFmBDazei2vybGsM7jLPvN4DHKyft4vSr4P45rny2W4rNLoAotMAEWu6srN8YHnKSDyEzb3DMyFVExs4",
  "key23": "3TRmiZSpdesfaLd1jV1a2YsqnH2tJqa86VWQnp3ebPmtxpQorZhfHaBJhh4EdibY2JvkVSJwXfjZLAgg7N9CuPDe",
  "key24": "5T5HQQ6nuz2ZJC8iYpUS4yNpR43o8PFs9VVCEAEbQcbvMR6DJKNkiXcocbsUnwBGNe9ENKLtKyBuYasV4RBJ1MPA",
  "key25": "3tQxHhwVshjVvwtTzuRscR28jBSAxWpk1nvLpxVXyxGWJzFFwPTf6fTzFmJcCqaDgQdkj7KQ7W8ozu4sh1nMyacZ",
  "key26": "27HoyKTCiCmEKmyekaVUegxvqsfLHf22wYSxgC383ny3E6Xv9t9zEiWfVnrdsZnLVvKH7XJN1kLYbZucHy9DfjJe",
  "key27": "4vMZgSxUXfy9yZ5NMF21MC68MkZ4ZtU2umtkA1qWyRFwh9rTeTmPWgDxVukZmMCH56rVLjTCnohuPo2kaQ8kUAqL",
  "key28": "5vkQ812qQPHkpquF3nDEc2pzYRpMHzvKbhP4aHBPFB59sMnk6ZCoxdrTfTiraC97GFM2rQDG8LBaCgknHRB3cvR6",
  "key29": "3HRTzLrDnKP4G9zU9jDkhGaxtdgHBeqZ4Hm2PGBCvrGJSU55tuTn79BubxxhxRYeLX2NUfRBF6Ynfg1z1tibf9EQ",
  "key30": "24MyfkFBFP7C8ribjZz2u5ZUUrLYnUysH6nxRLDcBJr9DD52fsumMAXeyw3RoX2geTWZAF3dWBabqptAmpdUHUwL",
  "key31": "5sK4wn5GbjT7jciUu7Km2eKHZAdL8PYTFHgsFFUHksGvFLGdhNCNsERVhsL2EKg3NaMeXitiLsty5nRtpaxMxfDY",
  "key32": "2cb18ud2ZAaMBPFW3hgfDm3AQUzEMyx7QJz4nJZwedPDvaMDcUVZiMPBqcMzfNLBXfmsCuAqiyuCNoknRitUXVij",
  "key33": "4ke6qEyQkwbfJNAanpnkaaoKEVvcpL94hQ1bppvBdew5swDAoV453KoHb8e2E151eH9qL5XAzhTxmJJkftLHEARz",
  "key34": "2YTcvGFPz2mj8GHuQKPuw9i2976YHD423N6a2ZvwG7jvScCJAMJQxv5jdBLYxnU3UVcR6EVJNJ9matMo2E9EsnjE",
  "key35": "63gbQeW7DTFhnSftsfpyVb7uTb5SzahZaMcuFSNRzQpfWvLYc5TpV1D8ZaG3f6VUfioetxh2XaVaT9xGCGTgH1Yx",
  "key36": "5tPPJSDPfTuJYgKP4M7MEa4azJWvK3r6x6ysjf9Bi74RdLniLXrZCw4Lg9U1mdnNTiXMtNRW13LhSzKNRR9kFSR9",
  "key37": "go2f2arxYtNbR56oFv5hGL1S4JqLHLhfRCDDyVrhFLGrwfUKsxnSdsFxm1BJ8hX7Bv7EvsyWhoPTiwmuPj9W1yC",
  "key38": "28R6LJjZo45SmLhqqY9rrykUxy592SMnxJNextZttKXz6SW6y2JkxUiRfyLLCfJEfRThk9ByNyHvFXEBC3wFYXfq",
  "key39": "3kcXfkA6Vh7rA8dmVK6EMgtjRGznTHLRrBSH8CC19Dig2XHALvhmkpqKzcBU6kbhPKjseGB64Wm5jJcRtFqhRZVX",
  "key40": "f42J3fUJzyL4d3wTge6gMq5K3Vxz9ocudNoTPxSwZ65xPNJMeW9AKPqz6dW1rAVJNz5Ved64XK4oehNQTP73NgC",
  "key41": "5XRsA4XzaYDTZE1UtWz6cX3QmrfL5eTh9ptgNBAY9BNU5RVTp548G7NMJUaGS8LqrK7HJpTnFyHSbcQ8oTWxUh4v",
  "key42": "2eXcRbiWpPcjhhNDaiRTT226HsmYxUyX8qsXTNSon8kLZVa25zqeWrSo39tWdF3pU5cEg3uJS3UZPJkQmFtrS3on",
  "key43": "SmSfVifdzHxccUAvXxpZEyAaKaTVQ5KnnfHRQSa8uT4AM6u4UrV9wVCMqr6sPRTUqyz2h7R9c7pfzur9fgoXszP"
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
