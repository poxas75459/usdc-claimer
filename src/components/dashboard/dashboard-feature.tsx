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
    "5wDR1gQ7biyi4PYYzP3K1uyEnHf9uvEuxL49KCUfBwrpCZYaysMqW7tGrdugYtJLeyEmNHwBNW656SunVpijj8TN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GfVb3k5fL1cB4nyc9hGjQb5GjC1wpAEkbv6mQKWpkMfGhQgyW1o2ztXHkuck9NfUeWJ6ygXVqFAM42uNzdooD33",
  "key1": "jfjKCeV8hRMM74rAGRMnk2L916c1pVZG2dDTBKYP55VADLyv4PamnQiUN7mKpXRzeyZSC3QuGtTvdnriJjggjV9",
  "key2": "3ikgFohe1eeUTL9Afs8tWcDKBuV82pHSJMwJZ9EENF78US2k5GCGKbjLfyBAxhnwoHPe3B4zkmxiRWpytHMm4Bd7",
  "key3": "5yxEQveEU1LtFsc5oCE8EYZhVdvsyz7h8ZGFDzcn3WpErRiHBQNZC1uEvgvHA38BbA5QnaiTkFNjcRVbrHaAidHM",
  "key4": "3aSKhCBAqF2R6ejiZemQno9xw1J1dR26kfRjgnGvZq9s3ESiHca5RsGYZ81BRXifbqCaWUtiCjyiz6a9x9AXZRqM",
  "key5": "3ifiVJWKA14qZsNqe5sHaEafkuBQsWE5twZdvop2WAGkvt4UohaWZyCvQqBMCijoX7diAPxwcjmhQf58QD4aFPF3",
  "key6": "GZzK4VKYqoc1SBmZgNgnRnArdSURrnmXdkBreXuYMLe9hZuaMNzZ3tASYMuousLEsE6Ye63wJHwdpNZqxKmgkHv",
  "key7": "2MyaDHzX6c4EQxUbFipRYww8HAZYaoWA1zmQHttnwJszNa6P2aJsd6PZLnn9MuugFWPRxmgEbP4oHwQqVEpjMQ5j",
  "key8": "5n3FBrpLf8DEP3PQJqtvTVaZLD3YrH5ZZxrnPxTsyWYiFT9zrqK3Wj5yyhCz5KFBzUi3YqVtNce5PwGR37sT7Xuk",
  "key9": "25jNUJK2dk61Q1f4aVh9FHSuZiqfjQJgtpDSsMyUVFWFQL5TFEPusQiT7TZibGPvsPQZfETnnbZxFjYcKXYEacZu",
  "key10": "WxpFUabxHiRYPwfW99pxfnvQ4MaiHqYsec8Sgj6BfghaNFcYoJZiPvNpQ7qLtdkFNxNSQg7kVYj71bdjsvSypvC",
  "key11": "5gRSYnoHqBgZ8gf8jWbA3sPxb9HG2MPY1JFyojC8iQCAGYkuBuS3GTW52bKuUVSa1naHAmTuJBfAH65AqvNkeLAF",
  "key12": "5oDFHUDsWnpnFennKhGuwexcfpYL5ep2toCLnejHdkVPdDhAm8FWfNcLb8BgxDsZRE77mhWJ1VxDddedTRF3hRFG",
  "key13": "5DJ2bKsWTAwENmLCunYdyyvdzF8VDUzVb61zsfe5cYhcUzh3qoK1dRxBigST74xVy6yxC4err1gbzGY5742iTDur",
  "key14": "Em5eJXJsdiioyA66fdKPFZgR4JwRoxr9e2ZGiaAwhWtmyfcc5BxMtZ4J476qYD9nFZsvVH8qziMs6RjHwQPqqtL",
  "key15": "3UyEyLsgW8DZ7TtqvbvUNNQmVNWfHpk23c88qvXHEuZ648R6Zi41tjzmr54ZM9pwrHDBLwMphFLfYNVnM5ysbR72",
  "key16": "21rZxRnELMFwwALtEvC5wernvanDYZwoY5mQUUJsQEtsy4eokdeTgPczVkFMD76nXmu3pRioi5xmZnBWLzTf6DUa",
  "key17": "4ZkWc9487J67vgFUt2ggHPSVxcWBHiYS9SxL6L38Lsf5Edco19dw3mL4Lne3it49yeKS5X9GVaeVR5bU6HQYmpn6",
  "key18": "2oga39t2Axpby1veC1MUWnqkTvHqeYvXdqvW41e1aCeUK6yPuqkAm64RxLrGyokJeaRYbp4XNMP9vq72dXzo7CYL",
  "key19": "5P6XVqLTyeNrFwBvSydePNtXZGmD64mw39Fiv64K2rE1635aEP2uzYAxBLeqJ9zLVCjBy4sp3LXAWngmx7wTH8PN",
  "key20": "5AU31vnwTRYNDM8XyByADRXJ4YsCwwubYCq6w7QbXYcrGfE8usSx1cjG6MncocKbcjrZE9ieLjGQrBLuWLfrkH5r",
  "key21": "5sNXFWgsRJcs41fCPJifmsbhmSfDcGFyPuTH1xsdBWHgDcEbXvfL7EeHQC2c4NVsr4XW6qnUBgVq3CQjtrDeSy8L",
  "key22": "3vvzppwvzCwHv4TcoBvAWZrp9bJYwNRdWekahaNF6wBWpgZAoiC4Nd6vsD1RBeFmM1WBvwHnzo6WwZrf66SCo3By",
  "key23": "3yxfxaQdaj8MYUifUJDAYZJzX89hmvhvqoMTZuXHCG6XZrZfu6JhH8YkvcNPBpDyGqmGM2RS9HhorLTob88XKjBT",
  "key24": "2id3VXVB4kuZjubLrhX65KkNC3TTETe2BaRYiRUJ1hCpcnSw3vZs1iDnfPa9Kt9zeS3okzRzjs6kfsgcKAazf6f1",
  "key25": "2Uz7V6Ey4816pyzv4VdFuSpbRfGZWyVx9c9QxD6dXp7k47H6dZp3KR8sjpzNp4cfD4D1K1HEiRXPs6YkQXkdyVm7",
  "key26": "2jbzzJ41ApkfkHM8AmCYDkSL8ZsBmAkJVNXAzLyE8rznJtLju164Ghw37U68uekHPpuU1U3Q1FzdBsAkr4HJXrb2",
  "key27": "39TDqSvT6ob5Lm379PwqDrHkZqsg9kf7QkHHojv7BTreuKmqmSTCsNkwUQkm7AhmhU4DiiajUYvcb47JtQogjndU",
  "key28": "5Jedo8ZUheQPeBALRyBSDb76DeJFHNscyZKTXxo8H3HnrCLu26vu6hpc8DHKtxwQ8vmuH7fy2NmF18EJWgBrCcZL",
  "key29": "3p4eDWeR5aKNtygLJ5fLEoZTMJwakPf78Ug8szWRVkT2y3Q7icLNtM6rNifQF1b5JjvdaXhGMFjM9u67AVPJWdhJ",
  "key30": "5bHq8nrYKakFS7aPZreV88HHd9WB4x7db9farGTyKdw3wVX1PUpEPKoxnp7HkKHRpb9Y7T3U44uhErAGU5Y9eFVL",
  "key31": "3JcSPihsJYtzk1tD17JJ3WM5hs6UNTSuXeP4F2weFJdKVAtNCxKqWehcHZNtAibpXDSrqPngavYsRgyQxFEJBhdJ",
  "key32": "2vE5ftp5oA6pc74ocb3eQPnT1q1cShK24JVKVq29cXv4G3JTeS1Mty5b9Jpx2h5YiM6VFGXFjcNV18WPwUYdodjy",
  "key33": "2KQzkVzPHVzHNsfKLgnf7hHbKtCFn2nUg3PmCcZktrGGq4PLCeJZpPC2uutsieez7hfgrfZPZaGX3ASWfy1VwKzf",
  "key34": "639T6hb2M97h7tK8k3csH8YG5rfnG6sjfZxesr51D8wMkhGywvRFK8vjSgkJmb4Pi4Ag1q4pScRStDASoCDwuTpE",
  "key35": "4jxzZqi235LYDxBp38g96EaswAZLopgLf2oC6FMhgC7F8pdcYvHaSWGv6UEvHwmjMKxWRSxsV4UGvBrbdz7Acrd3",
  "key36": "5LECauFXuqyB6QA6xV3PNPAezGHUiaohsF14tvf4YPUrJ7a5sG2Uxbr8ThQHLeiZR9wrLu8uFU9cCFgkiahUafkF",
  "key37": "3KdBsWjqcKJ2XUZeV9uuP1Hq51xVykUzT2Ww8wENuJeN6re3WXnwj6GGfPAPC2X5CGLmfwoaYv51Vw2q4cRjdTD",
  "key38": "3RJm66uymnaidM11LpiNhgcMWWKG3RewVsH37HnjbpMaR3G4SS228JrtY8fmQr29JBZPwPniXnJJLobnyovipc39",
  "key39": "4tdXRQMSNmgA9TVLvs76aqsU3dkQhiG8KFVqD2uUHAY7XxyB29ufEQUbgNfb45dMVgJibWCM5zVa8ztSPBBoVUPD",
  "key40": "4yiPSCLKCLdEvsees2nhGBQgryPBM2Njtu9FxErb4s59WQsDGH73oBm1syDv5WLZY6TZpKr8ixSxFZzxvFuwWH1F",
  "key41": "3mNi8c5hU541eRzMjA83263n9rhFMT5GqqHVchtrz1ZcY4qp9oA5Lme1SDX2YYseNacaQCjo4R8M28cLkbNkGXh8",
  "key42": "5GhtLdKUyMytv5qJ2jT4RfTBWdFDURNP8DWarqCGQuooQnrgRcYWdLFJ3Mni7fpo7Nii9PBoZdQzYLufXHivLbPt",
  "key43": "j6WXCqBz5j2Ga8Jo3sGKMMSrL76BJY9Jb3HvuUrzvGaKZu7bZRfoDkKeZMm7BYepxkJq92gxnbF8h2LkNgqSVyw",
  "key44": "2wHX6Rx8xdrT1ksxc4uVAZ9TWp3X4ZBDm3SpHh8BTVxbLskwuGziVkx5N8eePcxKfka3rLn5TE1KoYWfCHznRDK2",
  "key45": "5rbrGTZ6VeZgHtaJLGKgfTEnz5kZi891GrBqGTwPfdPBDjsMPHp179rzJxYqeaxG49whK6NKQmeCcGJoC8XqAW8h",
  "key46": "3Kz6JpR4w8mKsbwVNmWJokX8K9MUKvcrRtUT1wwJ9eYGAR9t9eLEgzCQPuoBxq7sqGqwiQ11baorgJakjhgaunUT"
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
