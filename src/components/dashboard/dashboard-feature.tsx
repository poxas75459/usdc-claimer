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
    "5mFp4J4X49vyhg6HDvyQhCna1JspoKAUbASBKR9w5UUiVRkyjtQCYLtnzpTY8s83n6VFkvTpJwK8Ytr7KtUTE2c6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Az4GZaG7g7SeDXsNfUH7SuTfVe11Q6fKdu5U6VXaEHccazguHix6BnG4XwRMZLe965aetNUtfRgf6XfAuu4Q3aA",
  "key1": "4ea2RLrhwXa2Ghzhn5thMpqMA2TVozZgMayh7bXmrpApkySvsxV17JyxEDXg4jPwHkVayFwjftUavu1LAuLoBcBy",
  "key2": "3GiZmsdPa759ZoM1gGGjRpGiFT5bhkYqDRhxvXdvLWtKCFeSHgk93dqBFdUmDiZVb3sy5XU4Z2GCE2CSK49KWaA3",
  "key3": "5kjFzXXNphizfsXqjSK41hFpGUHgNwvBchNzNGsForgKX2G1ScMnzp2XWdfThWLGH8AaDFsLBSTxYyR3Xcyv44Vb",
  "key4": "RkZqLZxfbgv9WcYfc6VRwz4z3iREbu3q8UE2Fs8yJZy6rc1Bevt31pP5h3duZwByyX238MHBKWodDyW23FqeuQb",
  "key5": "4AkUG9q1CNX9tN2fbmjPA6bLddYVDDpgpS9yXk9j15KtSipsLJYiepuU4ZBJ7qPnwBs8UcXMmHL7Uno289g49BbT",
  "key6": "zSERHr1mh92ADz6S9FBUvuHJFxK7JHG6hmV1SFYdmdaPeF1erqj6Kx8rzLLTvK9f6Z8eKTh8Ppt3Wv9PyvxG1XQ",
  "key7": "4sYpfzxe5tcV63Yee8PN4SvbjDY6hsLuqRCMn2h9XYZJ3bp6csRhqdQoGesNQjbWcVNKkJHRcZXFSZcL6svT5tNw",
  "key8": "3CtwYvd3L7sAuY1mWFxSnYTu6WwytdCUnk4QJgBjx9aeawX4CHdin6M49pN2kxUXhYyVk5Rj2y4tMXLSeTysaK7c",
  "key9": "4WfhJAXPFKghh2mByMncFgYHb689DZtBTWxUMSBpNcnfJ2gMGaV5A7nZobc5KnoR2np4PbR2Mtzn4x5xf3GzWaSk",
  "key10": "45v3CuKmx9wTkd4M7NamN6FYnenk4eHcjuWZTqMeoxjVVuaUnNWCTkY9ABKfaUiwNsU5LE3w8zquBk587Cbs23VW",
  "key11": "5up2yyHoZny1FAudTegkQLxKyVMWUwSstzd196YQWCiemPvrBGTGzTP2XV4Agn8Rk396TBeH2TDECgkUu3FLJ1xh",
  "key12": "4pGmQKsR6d8PcmTJdmDDnA4YgJPjWaYbwXbcP5j8wbyQBrtKJ5cVhzVyqPvaPCYbnYtWhqP7sZHMSqgcF1p9f1Vm",
  "key13": "5MMZEJzsuc5cetyGBVUxNgFVMaoNyhUHbfxLLFHRoHhKe4Q8WgjVASeQCghh672eCcviNmFqhDUE7V3JP8vajAEG",
  "key14": "Q4sbBivXVSeCMQV4QSJhpPmNY9v8VheDMct7uNvNarbic3KyoQ7uCCkh2arJBVPak8xGBqRgkYavns3xZVPqXPc",
  "key15": "44u9yXgs4SBzAuf4dKFHiXwWpX8yY21taCtTEabbzNHHw4vzSEoKkPY8VHGMDHqgmauLHGk6wVtpXJ8Dy5wLz1Pt",
  "key16": "3C19dG99xxHUfB3R4VvosaQmxw4EHwsWYmsEbaqM9DgK14Wga1J9TGxfbJcuqzV1cqXuZpZ7VH24eMXJdCwn7hSE",
  "key17": "3owzbn8TtDPzpF9dL8PZGj5ziGUDJ5242CU8phkQ6nMRrL5i4TD4UAVoCHBDYetQYwHJCXDJ4mEcjTXaLhxpq5Qw",
  "key18": "3Jc9oJrKKqUmDx3zQn6CwskasrmUxoaeqijqQJapUNN5kXUVUdnSHTZcf1JAWUZJi3rjRjYJjd39mnmzC1HtLfWe",
  "key19": "43utpRpWNq7FWcY1yAcSdchDywmiQXqiSFspVriN2CMPehqAPb9mWJTmb8URSbizybWns7QUWJYeXjW9Dg49ey2W",
  "key20": "2xyrYSKRnuNARMtccbvGrFheEAjti9fTkRXWEyMEEWxY7iksNSDDxAJiGdwa5j5S1auWaFdj1m9TVBD8yUKYnw15",
  "key21": "5nSjDekSm1Hd89kQPsVsQinZcDpT1HSDUPUHeurTZLK45ZKyetnesfzMCUMayU1uaTdZ8gWanUPrH23PrajEMD2g",
  "key22": "39isDA6kaG3Av4JtTXhANHFfyF7D9Zt4ajrVWKTDhKDoUz37LUUS7ZJ4288Lnn39XsztXd7fDqqSxgEW7vF3KcHg",
  "key23": "5TG7LHrE9tcomDgUfVMpk5VjZCsU5ojodvuX31fdGR3xKJUgXTjhN13cTLy8q47TmNV5W6rnXqZFdBZMgS9FYoM7",
  "key24": "6276WSYV13PEydEr7R18tgvyeCocj5gaRpZKpZKCpuEHRhYhZBrQonHHNnpTa3azfzArok7xVmZtNi3p6cnWNCx5",
  "key25": "5uqQikvTkf3tDjNb9YHbWTS7VgBxcXCFCXKZ46dcLQFC5V6M91ETJoTGXoAfEUUDsnuL55bXXBcZG4thjVYaJdH8",
  "key26": "34YzAfM6SqR26vBaeYLvwpTHVq2Q1Y7qqZUySJYbwDD9N2A5tB5J4qy3ddVEQDNyXE9vJWMYE2Jnt5ji62JZhmUY",
  "key27": "5TR5kEnu6sWuz7Eh4w6mdp6DsTRBS4ZpyS8MztHYppEFwCrAr2mv7tQbTuezRsoesMsj4Z4qgrtTrDUDVHuJ71Js",
  "key28": "4FQQjtjTkVMq9ToD4mJpnbttWU3CgzkA9VSoRb1scRHEbyUeqGEin1AVcGq1sFp1kh47mqHdFnJTYG3n2WxJPz9J",
  "key29": "2HkL15ZKpvxKoSxQ4y6QEGuQKSVa8eYecMhe1CfeiuD65ER2NuDpSaSF3SvpoqBuN3iLbkrc3qQFhvkRKZxDkhPJ",
  "key30": "5Cw1ZsK1ACi5mDd2xrDH2UFuQefu9nVdTZ6XfgmdCefZsSHvFTDmP3cJGQgaCYjSHRgKh6JqQC6Q3poPkksvELGa",
  "key31": "yneEss8QDAEnjY5EcLsy6HajGjgWnUo8kBNTKiPVSaFHNQxp7K9K81GKvdEgKDKZUM7e9UmgVcrHRwiAoP3ggdB",
  "key32": "5TbDmqNgFRPb6Uo8fCxcsb5p3ZF4bxqWd2Z3bbQLhfhHZfGWc71xYatryteX3KrFYtbo6a3MB44YF1ndPJ4gEcKN",
  "key33": "49ENZzhtamNjYvCrQXzMjS9B2nQcE3MDYhhavE4VrBCQezBCpAsrsJywpoWhJanSULewRZQBT4JBNBtgvHiMoY5b",
  "key34": "5jF87PvS4TLK2qwwNLw2hBdL4KVHsqbcn81i6FT4J6BpeiUQhEjkqngXzC2TXZmFBH9RDPaqiv7GhuiWviBaVAtP",
  "key35": "4X77FbCSKtovVAQHqeBKQh2HqxSqAKeXRmXpEW2BS67nHVxDPC3SLcDcYW8oZu8g7W7asTX9JKz8yvgFi8RFRhzo",
  "key36": "QA5e3trcpSRN5MBVGbG98XBhv9MFgJE6ktAiEGtorZPDnHT21n4YtEgCqJFoLh5ZkeAqsnBuDCiXTELaMuknner",
  "key37": "4fdxvNdqGdXRbe8mEb4en8UgqQXUQV42jbWamQcTfe3ieDVvArhTsy7sHXKmwyJvoiUPrNwzdxHMULjbyFR6M1GC",
  "key38": "56uUFwrZUJU5kiSAjyJLYU6TjJzXVKfR8fpYCaYpVMTouiKaaJqoV94zDZr2XyNViVvyqEszyu2K1QsoJQwmB6GB",
  "key39": "2hVxTH5aynvcUFQ88WdHPTGjuW52YoAFv29cXEcKwRsBWzr7mwJDacvn3fdnZEJqJKefP1nGTnFJoA8QMDVQpU8S"
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
