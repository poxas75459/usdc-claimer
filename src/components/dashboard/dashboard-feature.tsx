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
    "3nYu11QU3ZTakuRiCi9zN63v7NZFiTUGTNHg2q2fC3X2N3r4TtRpSHwTfbzWCr1aK9ndAqm8ymNaDF8EofTtwn2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pquPuKC1u54H9WsPvZbNkaCXd9SWRr6BNMPE4J38FV7DBwGBdYcqrU9SKaKQqL42271QorSeCp9cNpbgjRbLuzc",
  "key1": "2X6QpecnjkGnaVm6DL96f8j1ayyQNartjAguwRoyifDbzGmuEiXip1FkkYr7bUVquuG2QeYgq47T95hNWvXYzvHY",
  "key2": "3PVrGdyKxZawgT1By9Qdk5T4gmwRpFxUGbSoJD8NBi93gatasbY3pTDs1mtCDbPTMx813U2C27yCtnPzQBuynJ5R",
  "key3": "2o6Rk2GssEyZ1oUURwPQa618tRmkswe1FEhah5oCu4yzkfXDMc2jRdgcdBnWbtyZR97cDRcV4fUTodXbqZBKCyCs",
  "key4": "4vsM2UpdkF14qesMxjAgwZqaAT9jddLe5gcNZxAG6GqWeHc45WcpQAYtviWVDJTYaAjJCE4NTEmXUokSognNfYew",
  "key5": "442kCTbMjW8t7Ts3nScDnPpm5RSo2eMmpgu6FaaautYNW9TatJZd13uYbBB1Za2iUopYnMgbfxQ2xotfVxNdXYoo",
  "key6": "2A8ZeY7MTqynDo13VXTuJGJqhVoUgyb8ggQrjVzhHUnTVQ3R5V5ENJw8gdtxFUoFy19jLYeAxHaYa9PmCPmsHv3b",
  "key7": "4JfspHRXpk45nYc1Dj6WjMzwpLxcSN1nJUkPY5GpEqH9yZfq57F3hoSEANSGXQnDqZKqA9LVMRwnmbH1WNSw61FF",
  "key8": "4dp5Tt3fPBoccN7qhpnXc3HbVw8GLzcYnw8zLHPEqXzWxDe8u3hNBzc7qykZ5NaaV7pnfnQoXabShm72BC2k5WG2",
  "key9": "2mhpMsJBkQoRzdd12Ta4AEiPe6SE8EPG6MvP6BqYxWMRfDFHmBVFxiGXeZFmDKnskkh1rTVYo3GL3BiR2RFobS4E",
  "key10": "3akdL5i2FkJKemvNt98uDiX7WDsRUT8NEw79PdPERX7v8q8yDYcc496DiDEwbSHNxvE11zexHBxvxqvzhuXsA9di",
  "key11": "5rgZZUtZ3MkDQLjLd7BZ4GVb9gaUKovQBxmxii85GUkM9taJ9waJnW2k7QKznvQyCADZWmcS3uMQf3AhhrrAJ9f8",
  "key12": "2SpZVqcyckkM9K4EacjhiU2GHoUriS96N3rrisiLeCNKRzspxtPeLcyGFAChDeaxWqSd6HsP7AdBLwpJpGyGLmmy",
  "key13": "4pF7wWEJobbQJRVcQqVJetxupjAsBqGCcH17xBUqh8N4t6pU8Z5LQt639fvroSw2N7idqvtVq5gNnHdbtrpopj2b",
  "key14": "4pqxBMaofQd1RrBiEBuHo6mV7HSKWwF8aYBKJHHZ71X3WqsPswDWmXbeQVkXC2eZJuTQzveZbP358HQi3A769gb9",
  "key15": "ygHUfVHXYSmMxuPSYdsfwDNRh4Kyp9WbhpupqHhiR9junazcZgBMBNdWcH24Pgvd9TCM1ZhC6rHg41KA33s1CT8",
  "key16": "4nrYNeUmEkgw48ZXDsfQGdT76aPv5T5a8BbCbjzRNhmTNw4J29CGfek8zc9miyN2rZBCXdxu4mPDeF4biopuaPoC",
  "key17": "2Sy9d1PXmjjJhdJegixv9tk1iGzgR8kfgoeihASLEkT7rNbxxLLhPP1weD6ZgKd6FmweQKBTm3197j5gGysmMXDZ",
  "key18": "65GXbvt15qWByNMvMb4PJVCeztCyqArjkG2cVmU65U1GgcY8UZb34Lb5bTSU1dn6LXWNHt8WZkkk595Nqrdg28e1",
  "key19": "65oXb7yyK8ms9DKFCLAQyDt8AF684vLJwkcEGpaE1ecN9KCFq8P9AZUPsGG7gWjnpDareGPt7hjF5E17ui144baP",
  "key20": "4aZpFkyvmMRCec7CR6jiBv2YCKEjdtgoheKNW1hKYygNZPzdcBnPRHde3TGQp1BQ4XCfWK4mCvkDFbbUj7Qm68Uq",
  "key21": "3AK2wNL96rv2euEaQexs8exfix9WtbQVqwiAwPvWA2zgubFrkLQoRMhKf2tkwvaCazKd6K3GmcAiyxmzun5PCsQ5",
  "key22": "QybqgkWZeSNYWnpjKF4JViAhT7Wjejn3EESY5dEPUbVyMQ2oiRwXSp9AUh6LhDpddeR4hfXnJGYqkttCQraSafA",
  "key23": "42cxLH8nejtVUMa9guV6p8qEiN6gRWrFgGas7ryN9gFyZdCYibEyRp6st5ChptaeM7GfeTnNq4pvXDunksTuFmsm",
  "key24": "cZbRCJcnMVyvHiwY7mq4YG2fQj91jnB2VVZoXhQ4T1799bnXE8YRaVAACHtfAn7mRmWy5WwEQ2ZuzW5KuyVsRVx",
  "key25": "63vpdFTcH8stfkGf52o84RxHCXUNAV8dmNvV6mYqYBqYs1PxxbviT7G2LjFCDx3QsYXNqSCvEieSbTRqWXMc6u7C",
  "key26": "2Jo4YSEPWgykPWTHszEJRANLF2BdLo3fVL4ds8w2bECyaBFXXNu62UsM2sG5y4rKwmWLgnnWTf6sYGyYnMUe71BP",
  "key27": "3kkDogEbrb7XZoq6wJBtJD8owXn13L26jdrzCUeg9qmRtGGM8oUs1GsJBF6e82ME3PMfQhbv5zft39yhFVwGBgH3",
  "key28": "48Q8u5HAEHoG5BMuTQ9Xpno9N5q9Kmw92QdNbRzq61fUXjiqoXS13tTDGgcgDYYt6GHfQqdB529ihjaMvixuorC3",
  "key29": "4A5L4XP7DW4fEELJ3QfLSD2CbDwFeCewbTmJJWBHWtdiYNZ7nSfgTxs6pahZ3imTNjxWU2HwoNCYQTE1W3F6DZRU",
  "key30": "38s18GtgkSkvhPuiEoQeb6bPcTYFxxbPF99X2yLGxafJiqtp35S5ZrP7NW6iUDjBXoyL1YPGjZHmgiGuVMHBNQGf",
  "key31": "2HuseH91a4XqDRGYwR8XNFAxXd9Mo6SFjqLJQWMcfBxCAgtpUziVBbLuEQMs6hbcAV4dxGyYTJczPXWyT7To52oK",
  "key32": "3QLJqXd31NDdvWD7nSNpDcKivi4cs9hxJwCBzRF9hx2P81YNjpWRG3yfQ8BiGoc3HcB22BNwHDun2BJBA8EhLa8X",
  "key33": "4MJidGM83yw461nQzy9w5u1k6zdge5m3vaHcTadZQzoYUwBmZ58iisSCzB2WiSmKoMk4TxtchnX9XEiXen17HF5Y",
  "key34": "2YmHmZtbzbbSnwneNpojreVNMBH8DjLVYRiDC6uEoQ8Gc9hok3jcLmZCEqE8JnTH2EZY13T3Eg8ExgYgwaCotwMb",
  "key35": "4JRcum7cRxyEZvgRDCX7TgsrF7xDn858aYnMgG5Dfmd86re8jAvpdrudhoquQqfNymaypabdRzzbwFqjoVoLANnU",
  "key36": "3CWiiegHQxFerwwhHrAc8Xh6kzGzrMRLUEZ11LRVeC41esDx9oVV1z4yo2hFjqHcRr3tAdAE8DYjEJEVcUcv4Nxz",
  "key37": "2Sy8b9SCDhJdSnTEEUNJqWwRBm94KfEdebxQa1Dhy2YLJ4sJzdWG1RH1BXGAitDfrpiQMABy2dpYdLPgg65zF1mK",
  "key38": "56JecPZ9qoQAajZvPXiWDRGoDVuYo89Xc6W7EDjA8ECuzfXuhX1Csv8Xf9AoTY8GcgYgdHPwETBWBMsrZyE1qfmG",
  "key39": "i4CkAyQ5jVoCVZFeBvgYCHDAZ4PXV7v25C2eSt8fUPCP8JnjDeNPXXJqsGq9gCQ2bZjJ6r3A59Kp56KbPGDAS1T",
  "key40": "56Y7TZb4ASgM3UG6Fh7C79C1M472hPE8QsAU8wdKVKWwn4otMFTiMwxzb7EiWaix8MbjitaD1qjrMfayCnQkfjy6",
  "key41": "3ne2pLq465chqxGCNkd3kbjHFh8WEDEL8r3BzjjhWrzW9EavGY6ZJNwiWwdDNEBuHjKwbVLLsa6GK8hUerfEfXF9",
  "key42": "5hHMQJyYG4TmVy4X8UwpUhuvrVz9wVJBsUFGYsLJFvWooubfoy3X5ShRw1FXZGU2zqokHbJrDcEyT5D55fyUSRxp",
  "key43": "4tQAVsKJrY6kerSojUT8awkWYsGuam7ti63Xy87jqKQMaQ48fPYH4qPd1Sg4nFRJBxyEGvexFhv5CxgDBvAd6nTE",
  "key44": "2XejWFAhGs6QXeUYCzUCCNvzemMLLJWaTNd7351Qqb3XHroaxFj1E1btBtpPDbharsnwcqqvuw6uPVXeuSqG3yQF",
  "key45": "3FTgeE3TbLAccp7dz7kkzt3QDPJeTsagVdVBwgZQLKu2PdyCYDau2u38ZThe7stAWUZeLmA4B2apihAydgU7NDsR",
  "key46": "3WrfZgk3qCLnpUzywiwPTBJqpmeTp8Lvsr9mT1yWLD6U13GrFV6tycjZkuqs1bNSuWcgXuSLVij64rZ5b4ea4tzw",
  "key47": "h93jboFyWqAUUxBtxg53hda8VGMS7eaJN2FAvquYfMze6Tot3LM1XcYwzo3rDgf1KMR96Qm5SvDrruNeSxVtxWs"
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
