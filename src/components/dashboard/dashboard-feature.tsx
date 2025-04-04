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
    "23NnfTuq9MRLo8WY9qM4pce3EsnPTHQxwJFBGz8m94VgGX4HXePgDdFsRYGSAG5rLquhiJ5iVrCmDPHr58bNtqpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4udATthFueYRyGDM6dbpJ6ADDRy5YnxgSvhiQFiWv2onyHSYQW5b2DGVMECpCiuhsPcuu4ta8wSsYA34qPU4BCyR",
  "key1": "arK7xBcMftz26cg5LdtdnMHrZHXUxVAUNiSWpdBdjfGXr2iD2Yc3vEbVstJUbtbKM1r77sDQQ8Z1dV4G8SZ17ze",
  "key2": "5WGiAFEtyBbUWbJfmY9cYY7y5wbcwZscBVdT9G4GLFo2UYM7187iAQV6EGgavRAQFGa5J1kY5CARzfPY73SFsAqd",
  "key3": "vkS3NSf78iAyFq7KQvpo2mbD6t6EwUYJgsNuoX95GdSzdnKftMvdbCQL9EPggXGVyCkgygAPKzLNAFHVDCBo62R",
  "key4": "58aeE7iwWw1QMMYThmCiyg77wbXhJhRgr1iZUr4SYzcHMB17pEpSQr5GzWKjY4mVE52gKnMjV79HDL69ixpCufpP",
  "key5": "5jCWSz3e6KqG2PcHRC5gkeoz1NqVst2Kspf96AZiMUZB3cvsRP5zhhKakxSSK4howA8KogFaJYRojfphLApFS7Vn",
  "key6": "3KFsGPrfrm5wi9agCBjYsxRfJzHkgNc5NBMHyhcrx7dYkAzWCm75ZfnFBHxaJSqEZYrV6AqUaFBLxBQz4F73Ddkc",
  "key7": "2cVjpL9WDWcKPh943BECiJQcpsqypEEBkMR3Lcz1ipvDY4HR7T9kJjgqiPrnkwwh7kdNwoFhYEeJqFxofwiVyvqj",
  "key8": "3ED8nrLfjW6JiFtiaa4EoaZHKPkAgvBA8ACddyVu5vnfji6VaW8YD217bZ6QoaB2AseogRyjFvE2FJkM7Qk4MDru",
  "key9": "TZ6PhusezC1fGqgBHkBJJFCUBwybxjDxYDV8zX2TLrPjAiedFkCyS2BVjHj7CdAwetBt2zfScsKJxUGbgKErwhy",
  "key10": "55dKsKJ5mm2KMJBhvfruCwp7u5sa6yuvyyof6Q1tWWRgjYrRG7zEsjcUgNKm4cstKBqHHoHxEsJDKF6Vj9dyiJcx",
  "key11": "FeRPQn2fFjfKD3utJ67NPLSyXSiLA4JBU7jGvPcBCrsmCEKXiRvFPKcvrfCb8vckikzsXTyMib5sxH8J8ooJqnn",
  "key12": "Z2M31SzhfWaD66w88eZN5cTEpjKJnCgfYPXSL3mEo6VovvHNNb1S5m9h2b5cK163sd6MJFBRYN3BTxjCRVz1y73",
  "key13": "57Layiz1gtj2WKa9gZkeQwte3ci96rkYf6Z8VvNayfGd4gArUEPHyA3rVFTHPZ5KFzF7R1dXrUFXteTTSjL2ZVTx",
  "key14": "4ubEc6eCQN53119QUuPyzcM4HYhabeJbHuHZhEMgs6e7n9mr19bZUhQjJUUm4wyY6jqpCgfWWRyrYun18P87XEFq",
  "key15": "5gmPf3L7iKMXSq468RUAxb9Hew3iHi7MLBFmYKjhMWrxhxzEUaQP9pzvqDLvFHMC8KmXnpG6taXjbpEiaiPkstPa",
  "key16": "ZpzHbrWdJ3aQbvH9qY2HuZa9SB9TyXHo795yEebAah2ZNz1EpKziCzQFQuQ8yNcSSj36RAuftzQBUg8Lgjk7ftt",
  "key17": "2PJERfsLqYSEyVmVjiMVnYUDisuMudRDPjpd4q9Th5DJQQ69xF7vjBb3fEsRtWpQqhjDMjq2bxVuMWaFyid4q2Vy",
  "key18": "JNUiC2tYKBsRo1tdis6QvQ2oPbhazNGVPanfGKzojLx2Uf9XEZE59jUKd4FWSntrLMJ6BYZDRN1Nb2yffCHYnd3",
  "key19": "5T4ob4BC2yaxhVw2hL5bhUwMstVkZLdyU6BaBgGEVdC1wX7zCaLeUdzFpqw2waPgaoPpEtVZUzyZPdy2UNeE69uB",
  "key20": "2wLCRiPfzKPw7FfcMpErMunkHN2d2Fmpu93WEqWmeAoWU8AroVe8eswnEvMUPNoEvf6BTkc42Wc1FDJYD3wzCNWx",
  "key21": "2YxxhDeE9KyWnGnD4MeLpMJaw8bhNPNhuvXgN2JgLbtfFrqzLTHA7fPP6FS2cGiAQeQavfMm751WGfU7r1LpxXha",
  "key22": "5FYP1fMrJSDS1ne1NYshtX4y3Z7Mz5FJAFRBGFMPMH6862sdfuXoJ9PRb3wnA6hR9faqYRo7huPyQ4bweES3j1WU",
  "key23": "4wwQ6tZKkPydfbLukq78A56ivmboAGUHaVHEFcJJ2JKj7xHKaHSa8sac93BR8CDpqoFcN51pqZgRFC8MYtqpGE9K",
  "key24": "ugGxgAymvnrkBFWyqWyDVvG2tTvHgDYjXge3eChzyfBok5t8S6kaNs5ZSe8CMKnXQ1b2zHLsKVefqgszAcbhSYg",
  "key25": "5h2xrdX2ns1oEU5Hb1JhXwGwpPQ7E9HEUNsxEmYpyqyUmHmSzgdpvrWFX9gDY1ReUVccWruzmBtnEp3zqe7ktgXx",
  "key26": "31QCtqFK5nrMy7WKoUgnaqyBFXnbPPxNGZjoi58JH3Mr79CzXwq4JJsFJcrhBUU6pHN8dPF3wEKd2ieaEDj5519n",
  "key27": "5JJPy1QGGSBcxYBFXgVf5fDUTvbVEvxx1HMzteLxKadFoB9YN4miYpPx8efk2vr1j7nhKZ6UWE3AKiuJLtNeTrEW",
  "key28": "3r4SzPjJicq4nxrPaksNVGn8PQ2gWaVkXqJfbLc2SUKPwL66f3WtCPUCgAtX73qo3uh2Aun1HiGAGH4CMaVtMQoe",
  "key29": "5fn8diCJnqcHDBEbKAFKirjyyHQNQih9EbXFAFo7iZiwKCdr3CYXXkrEavWD9nFdfwPB73p4jRu9uNoeMLonL6YH",
  "key30": "3mTxCeiSZGUtdH8S8FmxqvoLT4XqefMNYn85hszxsbyA14RGttkkQKpWqeKR97efQPmwT6UXSRAt7FDZrAJVgpta",
  "key31": "55TMaEbzMybQQb3BmhjSA9Ebp8f5uR1euZyzw4odHR1oFY7EKnc2yZiTbfKFhpQTgYtbBxCFiszec3t9dwrZNBSx",
  "key32": "3d9c3uMBCtsT4S39Tu9k44jLiptBw8kYnkJWJzxTHdh3Tc9WbFAKTdptTW2EcJUv6MHW6t9Qz8KcAFjWLCypcpKh",
  "key33": "3VaB5TtEg26WLf5tY6hdv5oQb9q5kiqfWwH4WKHphYKvMjF5cDNFRxpfSsswo86JZKAapUqi6oKSj3bJZnqJg6jq",
  "key34": "3xskgsfCtMpm5FsejyZrTzswdVQrX9pAXE253tsievqzfzgZGzJGEasY7z3iVJwjNcShg9AvdZ8qCTeejJFg423M",
  "key35": "b9SFV6i3eYfrVMuK37Q6wWh1R2a7MsdST9MEpp8jCjon5tzEd8giLQTasQ5DqKideixmWx8w95CHdLbDnyKXyDn",
  "key36": "FYi7rL5f8V58TdaroiprAkmzeEw1ftFaCNiVsipCGBuiSJQbUzszLDkVMBNj9NUQQfoKF4EG1LFxbwqeYDEhoWZ",
  "key37": "5pDLEaEFDLQYveexXspvBFfUW6w3sAbnSHrodjENDvqfR65ixY4a3hAViZNPBNqGCsA2GVYkwqgKqHygotgJx1cE",
  "key38": "4G9QPXzzMrzSyp2kY5Q5nTrcKTjRCYiTuMf9qairziCmzS9p8q8XQSPQXsRQUic64LzCPCLCyLmafTzabt7T46We",
  "key39": "5bevxP6ftgQevwnQfeKw4337vocGK49aXbMLaEVEpZvsjqDFFQsrRq1P9zfXRKo2enexfahp4KtL3UyxgeVjtUmm",
  "key40": "3bGQXuptRdxdLQUPd8wMA4G2Lo22v1bXHtbw3VebNHGX5AqRLq3nMRi7ajyiqgbpcgt7dwUfehmTB8kW65NJe89s",
  "key41": "63evqvGARnTMZJRYsPtAyfDsjhTXU4NXF9wnfpXFvB7ptRkXvJbSXpZoofx4K94X1xnd6pXSstEWHSGbC8ubtiAe",
  "key42": "5cDe5FCtypQnX4FxaptmUQspd4Yr96eWnyUiwzDuhoF3zWzrLpKdoGzY5wHsKZkFKZQ2okMb8fsAU8WosiaXYn5H",
  "key43": "243SHVCrbT8rMgHFKqi8HpfQbAdzBh5AGAnWGUr2TwiLL47smjsokV96wonkqZTQ1zFJZ8DVmxwBEdLPAo7XMUw6"
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
