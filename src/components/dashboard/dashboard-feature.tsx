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
    "5RiwLMjQ2LqoNCQKGtMBbNw8BAwo3czosYCiqiwQE6pZXVsXDm1iQ52Qcxo1ie6ngc5PgfB9FzPfx9XvvqZrWXcp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4esgJeQt6Qbse4iYgkL6bRydRXHbQB7db54DrEuf3pASs5N9TGuiSiDBSptHDhhTWF46Gx7nGMC4YwdSb2mLU5zv",
  "key1": "2f8FBJWscgM9QmpLTPy41Kw4bo8v1LjvK4EGpAGwHfAPTenX2nAXJqUijKMXeSRSLqzvBXSyYuCAmt7Jx6qvDBCS",
  "key2": "4BvvMJzh7jvVaSNo5E6Q8UoJGdieQs7RAnxeJksauUPQqvgo71Gguvg7de9D6CnG6qFkALTknobP25carKScqE9e",
  "key3": "4bnAxq9KFRuYEsGRT7t1137xChVBkKBrpVmWAobKG4d23VJSV6fYajecQaEx4iyTaNfZmowXTNNoVt2uXFSLXTCD",
  "key4": "3KX5XxvXq1zvGD3obaZYYvkvd9http5iviDat9pLVoo1Nfo8ihybJujpvFdoLLiGWqjdf4ZwPi3GA697VDZFxoBs",
  "key5": "156zjasVe2zBP3iNdvZ9UNQerMLZ31hL3kyVLMQpJGx9LqcQGpgpG9txEK2GSAh2ity18jeMX5DpXYCQAUEzynT",
  "key6": "34FfYACEjd2mD13FBQQwf6q7sVgVMJWqmg6b1YH8LWFczQ2jYqKJ23S1NSPtUngA1f4qF9hx37ED713X7udKTCYB",
  "key7": "61CQSbooxCSAYUUiBUb4Wgv1c85jcF5ZNbqCxWVtAJkQUfovRc6MynPgbVYFti8C9D3LboSyDq9o8bZ5yyiRwyCU",
  "key8": "kzE37hgirkLDRjAQpzPBukAXVUa8BPRK1hGzcjYagm6SmzG7fnT8XznhZDdvn953G7r8nVJxJnBEGSJMymnosc2",
  "key9": "4zKffdK2QuLeGYvRCXzhf42F8uDSbgzYzDMiJYeRxE7Ltemgwuc47r4Ef8yfXrQbMnao4d8GZWMcLzwAsyUPKrWU",
  "key10": "16phMCyGY1ptiVtCF1SFcoUaThftwT7UGdnj7Tk5ocB2q95q8YCe88bnn7DWxDjCJTYbV2fKBCPiCxr63PsndNc",
  "key11": "382gCE1aE52BaY2VRW85ewhR9M6GhAaF8S2QHfdZHvWConxpiBMXqhp89u11Did7udFZssr3mR2QUYZ75hTMRTnW",
  "key12": "5qUK8YTZLMnvitUx2g5pvX4QrBA3Jvy4R3G7CBbX6wGmkt6mYwwYwFsVKL8KXqcc7c5tusXjYF9jYctbwLRe4Qnc",
  "key13": "3dqGe4p1x1ShEizS46WY39p86PzvdjdHGkY9L5op5XDDRYyvWvcNuVTyPhDKXfXhDpjpw94yLh7vEmHzk6xEKDrm",
  "key14": "5EsYjrU3Vm6bYD74h7gqSPehjcBJ2PpTFsMrkiSctoNSgDDiL4qcP6tsCmpEkgtQY9fhYzbnsAJ6sfoNR7Pu9X3S",
  "key15": "r4WnyfxGZqgmXMe5343JPK26M7sqeSnFXihRe1SQM94rM6KusFQew4DasRXNo2UJF7Vd1medcXEibinVQzAhfaj",
  "key16": "2FC8BhZvPWrPxX2p4ECQgfxW6S8yAw2r6U2fw5iCD6goWUgcPhMMJ2ngAp73GVNksE5E5hG5wKY2Se3JKxk9pT4",
  "key17": "5fiZEEp57kz68Ed9NNoS61Wx18HkiviqTiq4NDMSqKzsXzT2jF71Ci6R5BVm7Q9AnjGw8W95PBsUCNuLXVkaLeaE",
  "key18": "2Ue9Cuw5a5foiK8ps7q1c3uGiP5ULMXwHZ4B3oZKCEHmPsoKqinXsvuhRkgK8HuJP4ofALD2nz1oJJ7mPHA97ezi",
  "key19": "5DfgHoGCmEJqByXmwow11hSeAmiTJsspTM8zNf4Q6B5KanWGAQh53V6rJs1rh4KrtTP1y7n6MZ4JzKeFegWtJfWy",
  "key20": "2CA26SMrjvDp3XkMeYAG3z3h4B5ZDvkSGPzGgCLN2yjAyd9XypmnjdTr3mXnEBPa5qYHzfMRVrj11CsiCDKQzwTb",
  "key21": "66WQUcDmX6N25XA9xTR1VG5UXayHyowcgEAyW4VMRrwXcDBeTLcwZx4W3XFTBqeA2CxaNxSVaeZZ9Ye7NXcvfo1g",
  "key22": "4HPNhoCfg9a3XPEUjYDof6XxrgQ5sVNUbmWyNEqWRbso21fayao9mKYAioBu8EXJufo1pjwGdL7QPMYfF4mjKWjo",
  "key23": "5ZzxQk59cdamCB4sZfkG9ki5hUvbLeSVfjd7gXsTz36RWhQVqttwZiynjy6Sxk5CJp4UBjEA2CZUiAY4jxo9PqZW",
  "key24": "4jsrAu4arnAGyY5aJVFJwrsHFBo1tTr6o7aZ1nMsMfd7YP3pyBTJE14vcNJuL334qdhrnNEZAZUtvrzj4Cc86E7F",
  "key25": "2DeMGsWoECs1i5G8PT1vpLsLTR1qwcmiZKT6AnKLtiNqRgZqeK9HCWmQtbftJFbTSVMpXXqr7qu4pDd292eKg3TP",
  "key26": "Pn4yxyHmkQFjHR9WSZAtgajxckMnk6Kx2cQuHdzcDHAQ9h8sRiS7jWaHxy2xPqaQWVgaAF4Lg4UEpnSozGVGA66",
  "key27": "3SRbmcZtggfHRY6iYhDZzSSzh3WMt1dZ4iujz7juKFroonmEzJzBMHbPXgSmKcAcAAJpgua7LK9xEHLUbNZAbzoR",
  "key28": "4ui6yLhq7WEXpvDJ3NqbtDV6M881DDYSoFEBzKSUpuiF4snzFGnBi6tU8Fs2rX9uPSvyyGY5LgehS1g1QtfyS3mp",
  "key29": "4YNMMtr3ELMQt1jjbc4qpDzkqmPbMHW5CwS6nF2TS66EXfCKkiWX2G9P8SQc5eb5JM6AUE58KP5sxD3z7Pfjh1V6",
  "key30": "2By6UjRgc389Z5HRH2JwrU5h8qxcGgEo6r6LEcBvWLa2oxMCrXuwLsbbPhvHfsxWXegDFVR3YWcKeBP84Wn12Pby",
  "key31": "23qthu6Y1QR6LscPzwVTLL4pocMQxydiG4HUQ1os6Nj9VhMMe54yxP2k9DFfM1Bar4CeHMJVhvrMPsgsuwoVNmmS",
  "key32": "4MHQo4cEJw23QaWa3MikMbbagPvjypvCDKmZCPHAeUhVtqSoAaqKdVExon5eBCzdQizchW7fGyqwwcCiNk3howDQ",
  "key33": "3FxJEJheYwCj1sxR1vNjTGmgo12beiFrYCTFKgZBqXuzaGMZWrQi5zKZuHejDhTpqeJWzb2nETt6oNVrQyPATfcc",
  "key34": "4NP7C6i7FWHsae4x49i6NxkP4UbdDFHuYt1euYF8hnNU8NuGvvyoBcBoQsTZF7VvpPcJSEeoH2MCdnaVzQf1iWW1",
  "key35": "ak4knH2Rk57DVsKzC2PFEY5VzzjUB8zFD95JKRKrPDcDfqn5AshNNygh2EefSmmWHytR2wvfpWbL4c8Q8zGoH4u",
  "key36": "2Hj9fv9hatgQQc3xVZ2aNXHYqqvtweRJVd9kZkeJ1wqiECch7aFwY6oU2Yti62Vvo3BQtaszqUy599QX3yoGTHAy",
  "key37": "5gTAt7stjQLErMoAsuYVMtsCuRNXaAsVKdM1xM5X3PfXHsRJvGLUVN4Uycph4YGrNJk32b4JY7QT6mixV3ct785k",
  "key38": "3KqgkpJrNNUXbZ8Z22fh41yBYJgeX3sbHiZTrDBrKZ8zq97TY2YmJUVoTMU6Hdj1Z9wyc639qzj1ZhSBDRypJBTp"
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
