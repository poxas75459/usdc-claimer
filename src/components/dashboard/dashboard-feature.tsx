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
    "4EjpUhMkZbez8gZPpgFEMqdaAHNtNoDxvsbWghUooXXv6NPDjt4gTdctm4ucxdbiGFg7fqe3Yaa1DyxQdAWKn4cn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PXgs5NejNfPSMzNEBmPWoK2cZ8WuNfBgfv971Qv88Tpkq2WGk5yHZhpmnvoTXxnJrZP63wXnRDiDA8QHtB6P2wX",
  "key1": "5LWfLHnNCwmCnkd4eKz2EWSDFgvTCr59uJEkBfTd72qJd6i5sQGMoGsDoEtxE6JYusec5xZtzf3Kj2841YQizh3g",
  "key2": "4BBGZNcWnYdT7wvAqcmZmprJykb9RvGCyqA6MMerNreGkPf9PSCMj9nf2RbfT7emNhRy1keFDiArmaMuf5ECtFZ2",
  "key3": "5ZitFRzUqSgWNMUQ9vh3HxSLS1dpohcehHhXXPu99Zv7TJdpEpPF4WeFtCo4Hpor7rThssyv98s77c3kSngh5Em",
  "key4": "77nJEHAprJEgiyz4udER8N6rMemTfqtoDZ3BqMgEbRJ6hATzs5k99XQg9AbBTik5zXJSWbSjixqCxCLBF4m1QMc",
  "key5": "5uqPaDCpEPtHXd43Lq1vqJgVaoM9Dn5cpaLrDXBVTXY2HbzxEAjfNAdfznSW1GRksGcEvTuKiye2vLAs6be1u8Hg",
  "key6": "5XRBnisycadFXRi9sTkdTzh91XtXHWWe7L1HpyZskCrPagGhyb3RMGgVCKBrtiVDxqwxDdSsdWPzNTUEXR6okfsC",
  "key7": "5DkXjrRtUdMYAFi5nXBsTNEaqzRpQPi5JmURky8tZ4STckw7g5TNwDwApb67Myy3byEX1x1U2HMiQtY3KNm8XsFC",
  "key8": "3ZsYN4iuhj93zqZxi6TV2bYEMm9WKiB55ipTpdjA37bnMJe3434kTbQRWZYSJnhe41hakcDqGFCjgbD87gLc61Fe",
  "key9": "VQUZiRhEVt2EunZCBhWHcXhuJuM8gmkkadg6JmeCM56iR1oqMVejhRLqvLDZETd4dQQuXvtxLUt2nfa83nuhr1F",
  "key10": "5FA2rrSBoYfVbyTxB2RhfMDywksHh2gc4R4foCqLY4vC4Bm1higisDtDCWV6yzub6DwrF3krT3Dsi1oMTbWi2WDo",
  "key11": "5EAi3jHSzmd7GBhkMqT18BdwhQDUg7uQrYrX7PJUPvobEqnD26xj2LuNjJWqBhGr4nQqGbx3gy5zXRnoEizsuAJh",
  "key12": "3wUpi6aVc1x4NNAXRvgbohf6mGBsG2EzLU1S25cupvqgy6ULdTaV35ArxzVtHovzqEwfJKBP5MSHZB2964Qq9uWd",
  "key13": "5PvcrqWNYhfDZ15T52QcjsRa7czfQX6QQCyjz8i4znxweW7HhipUUDcAY3Sz4W5xJ2S356z8doK7A7ParcHdQa4G",
  "key14": "4nMgKhmbbetHLHyYEw5mWHqu82aRSeUCG7uqpdgCUqZHAJqxxfa7yayNdXXKUHfBLaBk2EBHzHRRocbbCj1pjk49",
  "key15": "7mrn92UQzJXN6qqjZcZ6sudE9SYmUPc88Un7b7CdVYLKqeYArAVDwZ5Lf5pm72oVGh8cxgmSST5XmE9G4hQB3aB",
  "key16": "5RyffvvqUSqbsJjsPSLoKQaBNAjMXqdufxAt789bxk7fhEw2mLS7nvbsq5CnvXLwsfMm1CsyeQ7ifsJyDqG2cvS7",
  "key17": "65goqs1Z7pYEhRg36uXM8kKziXesk27FQT4ucLzoDkMP3CjWSgC1YDZSxotrDstc1AqwzUizRLDi6hdqaVx4dss1",
  "key18": "2NmMvQBKHCG2teTvJSBL6APjwui83fpPmGuN1E8ckY7ctPLXU4LMB9xDXHSAs5dK1zksPjxBMLx1e92btNQhyZnF",
  "key19": "RrdzwZ44GfiKP6JsAdisxBLbBzzV6nuTWpaNpYhpjFU8gwdScvqTyV124iepMfN9m6qxWwHb5nknT4PPyDvmgrf",
  "key20": "4LMQ9stXYFdbYN32k5P51BZnV4UaEDjZPQLaD1xUgwK9jc88HHJie2UG1ZYbYHK2txBko3sxfCVzbYfhxqYR5icN",
  "key21": "3EMay1WbVTamDK8TXTuMES5Ztbh2QrqWpq9EobAAeuv9ZQYjGYfyNtNkX84iGzZZp3Hw1UMHTdnnhq6Gha3LwrQT",
  "key22": "62vfXQGku8nop5UgfX5qJJHbz6FU4uWXcgsT1mLSVKr7cVsNdSrYX1C89qNhWKxanoJ16Mj7JGcxP5t8SYDgH5k1",
  "key23": "KsAnSUDn9MahhmNW7UxWaXnXJ7bWtLaX6KRVFNJ8yabyxLNcE3482dU5fcJhTKSXR1ttAEZYQ3XjR1Hte7ps2Lq",
  "key24": "42HYWt4HkBBVJL7uD9ah8EGGWh23dygyJBNtkT6rQugVsFty6akCFRaD9YD4NZXneBF4v7RBnhZRetrgXQaFC449",
  "key25": "yDbpdp5TLGt2JYJH2Hps129gmuNHEFn1p99EjppJaqTAEhK9L6P5gZYkyvmjht7sQJCS5cVr91hhtMcxj8YNLgn",
  "key26": "3NMcpYadoMyt3tPFBz8J6M78LxGKgVKDc5VbSNFWboA396z5DvwAzUeSnAwzyTZ2VtmbeSfs42wfV6wHh5zYRiXF",
  "key27": "4fyPopMF7oEB8JXgdEY5F7SzApUiNzK5qghVKCQzR3C33KPhdb4LvMEmWQpMVW5ehhXTmt1yLbWsSQFGFKWNu6n2",
  "key28": "58GFFe93hKBkK6peu9wDtrU6bVRsMbWsFGR7yFjyhLYeomgNxVSbRJq48VYEntdGttJWqCf8hh45RjB2p6zqr7ZQ",
  "key29": "4yE8cCVpjbwS6ngSGr7KyJwxiJHWfrV7BMxP2sXkXWWD2pcCLjq4mEqNhPXBW7nLSL22xg5mq5UPEt5j73LxTLQn",
  "key30": "2WKrqEh47ZZsRb74nbdBbmaDMCZnmtoeP26Ec6Gqh8BqPRvTxgiTMZZ5TZFh5AQQsXk4vE9uzGFsV5Ucpw1TcqpD",
  "key31": "4nPVVKt8UBo4MJ2Pc9ZMtTE5CpexYmWRiyjzDyTrkffT8AeEc4bPeXJQDDhh6RwAFe7s23iG9SoevdGDL7HWcJAL",
  "key32": "2eYfPuihYEEuBKtxVfQXtwTU91qnMWUwFF2TXBAaiXYe6YW19rU2bXztR74svgMxwXh6uKpnybB9qkUEGYxzVdJW",
  "key33": "21TDPPeFvgukWq91FpCm4sZQPKh1FjhXR5ZjH9f32D1WAGnR8HLDrCFP9eoGuAoseG1ntxGnVprDPWX6xUd9U4BM",
  "key34": "2qfiZP4ZHBEFq24bwno91tFgyPmaa3Q2DXPKr6yeKVsbymJ8teE4SfjJno3wChCtsvRBHcpNPuDVvjhvGDz46pjd",
  "key35": "3A2cZk2Ckij9EnbqTcwRzFETwXcj8DVh85C6L1fkL8hjtmeGAHYWc3XSG53nvENh17ucgfejTXpdwcSbwMkfDKPx",
  "key36": "ekJ5rJ99KjTqQwtQJutrgmQHfTXb2ksrLDR1e9UQZW9JetP2XCjkWuN4M9qSqwdNmsdgBLhfxGBcRdUMwgjiGAP",
  "key37": "CgEsh1j9LPisMGjywGBKBBJgbKEYTrwenfJM1xTUpocsHfMYtmUkzgHGnF6zAfmQdVYt2rKcreYuDgWWosw9mXo",
  "key38": "4Aw8fYBHX3pKQ5Gnn3D4PUxLBPgiYKyffR1Vp8tZf4ASSJTBgeM2jzzukk31dTz8YjAZfr62nv3Uw3ABBdeQ3KPW",
  "key39": "4fisMZVyDTasY6BLkKMPQDoposo7Ra4fL9uuEWwNxLEJqBKsXJfd1y87fH1WkYX2DKndTeL38VzJQwHWQisyGa4N",
  "key40": "XGScEGpEDqECUjZ9ZcdYVs1tnxArp5g1eub8o2vNtwHZEeHmsG5XqfLYjEEoMWvTmSaPQJdnYLvVrzfgYRyWaYT",
  "key41": "2HSHp8TgKWHcJv5fCMZjT7vaXzr1nYHyDNWSpjPS1j9a7C9XBzNC2RgnUs1jcJNB5ed2PXaGf4BHV2GsqnV3RseT",
  "key42": "41mXedXa2iafSdBhzkgrEoLCk5QDT8uhanaWdUNKA3egGUHvSchJLqniN1n8YgF3kEinAJQxuYst4J1XVPA8BtPr",
  "key43": "5SXm1Ddgbd6hy25gFk82zq14iRGwPHANuVDqWDDHZZiAkftk8YaWvw4EtTCTVwzD54sReChdaoo1GmLvXUeNVEeZ",
  "key44": "5WAqHP8TACpMqW2i5jCQq1wBd9rbQYJTFhqQVFbRRBmMKCBAnHCUcXgUSwK5JCHayYL439ZUheQWsjK6FHs7CNnC",
  "key45": "3gFy2D4AvqLWxtpH4Dys7eSpdkhQqqefAouyCx6L8Uxq6gk7RoVEuQP2qqFq6JYsrr3FSid6ZYpDmAUAHhtVfb39",
  "key46": "XhUUptmKXKQpLtEa8TtzMaxyM7vAuevts6vovmht7RfmdrL37Z8zzTgoefD4XzHe8HjHXC2DyWBweaCx5PJuZ33",
  "key47": "3h8LoFPSUBFj8D1SF9duCbCuetbTmqFzN9hkX5gKR1JoyJNaJms1uR9JRqvi8UPMzsnxDYu5u7dYtHzAJmgiken8"
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
