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
    "WBeTpg9t99ri7Sm8tBNZwjM1dkV1WkrqaNqiNBiFXGBSCA3SDfh18wDQTSUriNDBvnmQnX1khxYcAukTzgoqRGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PdDTCTrwKJLDDKiVcYdZtUJiDNEBk2mUDQz92w8yg2JJwXsTDH8fx75WanYTUWViJAREJtMjhG1p4SGqgkvWGsY",
  "key1": "2TFhH6f2e8pfT82xhczmVUX2ezZfnbioKPFa32rtHNwaHKSLZmbesrhgEqLsPk9WPGHSH68GaGzJ63a7yiL9SzDg",
  "key2": "5vT3YEt9Q7JfgFrchy9JD3cXtV9sgRMxgogy9rC39WxiPrc6kb3Y8k27KsMofLZHvjHuGt3LUohZGv76VJh7S7Pa",
  "key3": "39HzYqtp3dpzDg1DRLL59P1kfpdJsHUEjpy2wCfkR9n7BXkPPEiKT7p1ESYe5QZ1PRFEv74RAcb3Nv66s821bao5",
  "key4": "4Mr4h9piikViuGTL8xD13XaemfcYzSfSuCpyqGQBru4jxw3dWxM3RsqC1jfPibzZyFeQJ4whZSd4D7KGpuGxvmAL",
  "key5": "3e81XPHforwsfRG6YRNhKTfW6Lt7MUsZFB9sngThE1KBxMxZ7xaucepAR6oQ8PQBQPB46PrCMh1LGCL1wqKdmEss",
  "key6": "GvPhxgvrdeqH3WoZoLNhtCqMJ2Ay4JZbT9LYXt3iNFxKveX7uCSvnSmUPVxLswgptGGkuP73WqnxC7i6U3ZQAK5",
  "key7": "4DPc4JxQSq3LWePtj5jhiPhSaNiNzDn8gFajwNzxvZqcCT6xonfcAkDpmCKbfP6X9RnKKmotKZDTMD2uk58166gd",
  "key8": "3kscMLapwBk8VX5RGTn5xddmrddnrj6HeogAJ7s2xtJwt3CQqdDMtjzcCxsa2kYjn6J2rsXRHA7qTPccyfRBXLsW",
  "key9": "gfZu8A4GzQkxfHfddLDDKcxGS8pqurJq1ESgWZk1YnG9SwLPvPR9CQ9aNYxNfie6PBTnjCgGTJCyffpfoxYPuwn",
  "key10": "rykA4RCY77KjPCh9AzQnEUjLd7Q2VgJMzSiCZK5MQwdo5hCC7bgnxiFGLgzdhaN2vwP8UYPtvKUSm6pe83Ty2TF",
  "key11": "42UUa5SFYciSm3WrsTZ7hzjtV9o8LU6pZSZnoF3H65QCJAoA8Di5qgcfvVMRoWGy23a6UyZRQRkak1VasCxy4jwF",
  "key12": "4vuqVENyoysDwzRyFX6aKhMngdtPYbjqYpzXhss3ZATM1hAzcdCnunm5mNmxRGCNVYW3JkM63XEfodVraRb98hze",
  "key13": "3fhaFpztVLrP6ooGf6ngLPbQRh5YFWvgw4yk7LeUYZuimpTEhsCWFUomcXEqx8PyTxs9iruUZ7iFygU3FWzBfBAT",
  "key14": "4do6HmhhvhNsKw9GRwEVkYQMZxc95SrcVnH6q5JGSUsgAjBFnNG1oGQ2nZi6DkXhZrWWyFdWDsmdBQ3B8SMBBNE7",
  "key15": "uQ5CiFooiqjnrZRr8U53rpNMX5dxQ5UpVzQx1ipLiMEpz4XmDN7GdD7mbMku9cMJ4z9kig2j8J3tYzq5kNf5PhT",
  "key16": "48Vtbtvy6YkjYqwVosXVEx4QVEJb3i8FpHcPZaZqf8BN1h6gc6dKa1FnRVqq37mp8Xfg2HtcKjtwMr2bgn565PCB",
  "key17": "4xiYvj2rfoGoobjfuWNnb2VnbpyJJMu8sTowBcmphWwn5jofMHN8o7A9Kit6J5Jg3JzuQAtAJucapPq9i7WMcyTm",
  "key18": "2pJaUuYNey3RNR7BnNG73opFBKeGfomEoQmjzoovvXFJZ77g4JsBhpXSQzxAxHRWeysVR2ypf3D1S9VmbQEcztx7",
  "key19": "2y1XpK4CkwyngD8n33v6FnyYCUp2cvRYUzxkGDKscHcsGutAN5UCv2Yjw2NyW3n5Cy7BLJfRJvWSu7ZvFtY9duBQ",
  "key20": "HehoSwpstDky9Wa8uQ4sVbsKsL3kVPEyc8Vzi28qxWWdWEjbUWYirg9WEBgornCWBXxdKyCAtMioviwpoCSSRNc",
  "key21": "mGK8TWExxsTe3MWXDdtvNBQF6rVKTUQPjNPyec4Khjq3Wbv9KDsX7XDMgw7XKRcGT2yLwxow42BAg3jjE7rDsUn",
  "key22": "2K4RBhtwvBGUH7G1retY8oekZ7Q2jqhJu7wVqskVVKXgY9iJ88Wb6dcj2nW4vghtRp8MemCDV2RQ1SYXEHaxMyB7",
  "key23": "QA8U5QXMXyiddyGpRvLTVty8CbydgooZV5bZZg78nxSYCCun1KvBRNNpacJgBpvQoTNDj19gyTqxrXErb5tWRax",
  "key24": "3Vm9ru9c5w8yC1D4Ud6zj8oZmN9qMQ353ZpQFB83q6LxpwaCWJ85Xv3JXSwBMstePSvkGsPnyUGmB9Vjq5qem5LL",
  "key25": "4ciDzXBv5bJb81Sq3CYejhGAQMJDeocYLpnqWQMaQohNbP8LAcKT4BzHRzE3UUb4vmNJyLcZQGvHaKtQuQb3a2VN",
  "key26": "5YYaVyr2iuRtnhcx9UaUeQzz8TKhuB5HLWxteBD4aGhD13XkqLo6UeRpTS5HqQpnqzScFAkkwpfBb2jTbwrwwNSY",
  "key27": "4bMTwZE22w8fvyNZxeoYfgxoyE33327c4TQALE3GutexPc4gWhvzXts3duc6r7NUHZEmPph4J2vM2CvNZN5AnLpd",
  "key28": "rzJtoBUJAFCr5soejAvUfaPcTqDsF9kPaJwdz9srLp9CvmrrVWTiarUMNAknav1ahLNV4MdEUb5aLgastxGDp6M",
  "key29": "3MpmCVMUZHK7DEeinn4S9ykCdJHhS8idG8pz17HZMmW8fXtn9fgn6y4JVqsaR6aSSLdRieh8Ca48Ex7Fu1od2hCS",
  "key30": "5JqCAGqcaKTk3xhtxefWuFM6cowCjbudscASqMj3SpbtpKjQWSHYTXdEwxqy22g91d6VormL5L7Stdx8zuDuchdn",
  "key31": "3SaLePg1ywE8RFULYgCJiYw21V1w7cKEJ7MsrYvZWmEKDRMxgBTF86tcDfzGMoBHARXvWvjWziufuJBNTtm82PjQ",
  "key32": "5mLP1YvV2fuaCuiVNXDifp86a3oiJpXF61sFQsEuvFEHGpegJGm4yPwEJpo5qGpmsMjhuLvo2fVCN7Um8jGQaJn4",
  "key33": "38K4H9Finp1mWL2vpN5waaAQA8fwSPcxVHQdtib8tbMcVwptdkXx1JsQT3KSWCsUf1qqmt2c92hjPuriHSj977q7",
  "key34": "3n5Heifro5qyoaF41aue7sHigNYP6APeT6PKM1dJHL9i8LdYd9kBJ2M1e1M1KyMEHg9BBTf58Q2LzPzgtCxpfUE9",
  "key35": "37VfMcEMp89B9Tk87ckbGeydBFocfXc1FrPyeCuUZRK2BDmaYuoXqX1x53HW9owiBBdBsHk5CjUMo7s6jvQZBRDz",
  "key36": "QtgduTY2Sajgfrwygf9RVRrhBZBchQV9Huupw891WSpY8pNBnR18i5w3LJT8K5GuTdmJNz8AoTixKRqdWc2hJLQ",
  "key37": "3Cqrt1aSe7pJDUzTJBVPZ7QtRQxgeFgMLTbX3DFvjm3mVLaepzLHNY6q614e33jVSrr79ELthyJM3rXtXXp5pLL1",
  "key38": "2Xvr9JcPCH3hbwEqVw14QV3HzP1Le89V5xbns6PFhKdbtiqtsyK3Sf5vjQVd7jgATwGQEEpgayMeKKYKy67RD3oj",
  "key39": "MSszbhz78iYeBLP8tdZ1RxuYYEteKw8VVzyFr2rFhz9ub2smhD4P8S1ZaxWWdApFz7mtsguFtN9Q96NCvNpQhif",
  "key40": "4733TaQRvBGcaAufEVvkL3ahtTXqFWSi4iTs6YcTW2bFG2MfM58mjzLf1Y12aUYrEjKX5wuXWFAL6bwShZaAkbu",
  "key41": "2YirGQz9CUnKkvLAqeVAwfrdsvN244BcALhFotYv2sSMcVXEBHG5rriFW2AcGnNZ6rFB3mcHhjuqjPyBcdyCrCJQ",
  "key42": "2wfNfJzwTGuwD6A7rCQK8roiwbaq7tpKDkgSeYfmQcXCa1B1rHDcq7TgV2gWtF61kdNhsgKUL8m33ta7QKc4R6jj",
  "key43": "3b7AwrUtEbPnsX6gKREEQv8U32ing7Sogte7gRG9LwP3dxsnwzV4GvFMdnmwvPbtm3ER1568c9vffiaKUKL5kPSx",
  "key44": "24ZrZZbP26dwS9DNUiE7ZenPx3ZWK8qCKGh82pMzq3uV7pPBQpw1tbo8hkc9xCjGq7i1KjBxeueVoj3zijP8LFfC",
  "key45": "m7PQmp8ynrSGr5swHaCu79VcETg672mQZRf68fKUmWCcnzkpu6DEggyUzepH6J5i6wnWNwKndjLqDqukscLm5T6",
  "key46": "2R7NWVMroZEScrbgGocqyxbdmTAXuQLB9CQLxEL5X5pvy2JNmt6axLUS1xm9PWt4b9AhML1zVCZWcHgkcB8gctR6",
  "key47": "2sobfQ8MfxSkA2vYrwqtB4xrYJjdpzvTVeG6o5EdcEFeQRXQYXqcjMxzPXhJczPen3SbUnhcxkGWDTDL9SoHjmQ4"
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
