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
    "4Bj8RJ91jZCiyCMExt64RBS4syMMigsb6JR98vLoMnae5MMTXNCixgqHQeabeP5g3kVcYk6rQ7c5Q2vpWV9MZoKm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48men3eDWNKt8h9v3LDs3EfJko3D7wTsMSsGmZKmPRrimWEQnKUjGuLMH5CSsnfzfPRQ77hwQD7tmYeadM2D9929",
  "key1": "Y4gYPzvw6HZJg2jd4HPQ3rHBTp71WwgokbBKxWKrw3bdjRs3zEHHeuXPQnJRc7mxqXAzc2L5RdnRftQvK87TK7H",
  "key2": "3Jiohcf1z3he773FPfq5BqsPkCzVEMF5LJvs1RFooBUSSRQGN1Wi4pSEVVHNjhbVGxauwLdTthx4AMXTgRuiwb8H",
  "key3": "3G2tfTyzSikmoz6BfL8tk7q6ur6Ebc8owwM2GTZrLuSswS1FLvVcYvbbTEiiSNFLcEqAbrDuj6oPaUd6jXWFv7Fg",
  "key4": "2tF2jYQtsPaCiGMF8KrxJXYCWm1WTeerLfh2YYYCbJtZS4nzyJdarPZcyt7G6h25AabUxdbWx18LJGeMUPUsUarF",
  "key5": "4PTpM5uZg3sHJthZuqBTS2jEecjc5E9JNycGiNm2BuaBNAx3xTshuMFPvpYYS6dYSuzRXAEYcdLL3buwgcmQ7jNf",
  "key6": "25ZzaZpM7m2THAydAUei9dFU2xMvWFSdFoh5gw36ezAfQHEaqUH9c4jHabe79VRt7cvneyAzXTbJ1bo4N6JpshyH",
  "key7": "2GvM6JC1PNiKFjTMJTxRgh6Xzgg9HZpabNTpXyuaYJK4CeutJ36QszLnrF2EB8rHDuxvfKXmSHbGR7ySdQrmYDTV",
  "key8": "26Cuhcmabtjqu5hLncas3R5QojdWHtfEekHTBCU5PPn9VG8FXogZ5ZBEhFm4Pg7dTwZ6RJgPDq5QX3UwW9jxsqQh",
  "key9": "MjHtCQH2gcWdM1edMvnmVqzLEgU3HWJb9HAt4q9X42rmjYJ2RTCNuugBPWaKpvKj6S9WwdAv9G7B7rBkZMjFufR",
  "key10": "67E8rLtnK4J2NrvrvFTLp7yWGwPkBsa7jyyrEu9t9PqNEV5VFoe8wVWXV3FpzTE6Xum4PsnXbgvXMrnkPDMhTb5f",
  "key11": "3qzPsBY1jG8ivzHWCvnf5jWSvQqyEGe5H6DwTwtN3wH1j9EdcHiYMNyVNVbu7ZKZHaVMCsGyh8736jFpddeH9oxy",
  "key12": "5kHWLRhourAeBkWY64Y4d6v9ERKkCYuvpesNGKjdA6J6jwBRAxRG23ggjeRqUBRAu7gXhthWEtC5UYszogQijos",
  "key13": "5tsYcE5SKtdUFLDeyonm7rfiH3NbKd4Q7emkVv7xhZLVe37GGaWVfSmB92jZ8wfz4ap1FiPt7ZMuHnxr57mWF67p",
  "key14": "4DL7iQtRwZHcixmM6DQBFj2imgZVuPg124Rnb9cKm7xLZCmWrUPogAhEpPUWXsKX96DsixbzeCG7wMgT4w26z6vM",
  "key15": "JrFsUoFMuys5aUAzeMQBYSJQ9LH8Yyy1yMAeNQYAzuc9XTxs6ThYE3kGhn5iDjJiT8V8B9UTn4p6gSuzRY2bQUD",
  "key16": "3oTW5vVfYuCAwy3hNFfaqJhjEhe2JSggwuzzUQtdpdVWKWQmCD9toHNTprZAXLsC11G17G6ATvPWMmKiLi8TZeeM",
  "key17": "56tiZYU32SdtLzzU2WTRNmyUE2i7AZeKb1BJZMEZcv3xD4toKk2mM9HPmNEEAui2cgdf7iZ9ijNoqZtCNG3QhPM1",
  "key18": "5GXfxHUbPN6cVCrkcirZKct8sdRUqZNaHQCrEodiKNKYUyiXTbXsPXBtbtSLsM7VMtKKCDMJMNiY9GCtQ95n3VGe",
  "key19": "eFpQbZoPhnvgScFQTW4w46k9cqM4aYKXNLWu22uT91bznTbRcoAMAbEEcE3hxwvQvgQ4G5qRJtR3GJW41WhhU7F",
  "key20": "3yyatkYY2KsgdeFFyBCsj5L3Qip8yeXAHEyVBN6sVTGpppa61DjCd7DbmrAVoXUCqZ6gpTcddUPJrf6XJntKLaHL",
  "key21": "7o8pPF9CZ6H9jyxeP8xhbBsPYgBMoTDmXmt3SwjyzwXPMnhEgo8xBbAoQqvRHAjNheNJ4SnUNhB6VMVR6WFcnW3",
  "key22": "3L7tewd5n52J4DiWfKbAbcLrheVcqVnugRXF77amA1UMbWTUsNCKFpz39qD4GuPbiNwwsrkQuvRXsERMvjFn84JY",
  "key23": "5a9WS9osyfLpRd3znymDMvVf24xtUakVM1gVNxZBkDkD7axuRJL3JVT8ZtAVcrrQTWDv6p2b48aLobX7o8QBUHwh",
  "key24": "5UTNF5qjBvrUu662fbynaqonLUmiE6bQnksHsmyXzdyWbj3oaacgN3UscURuBx9mvfF2EbhyFqLELPQ2bXbFbU1a",
  "key25": "2cokqsTSqV44752tnWLCxUrVUPFSn3jm2xHtqnVpCqiVBrzpZJsGxYcymVbgJsmoPRwqh2gA4XoJhS4gpK4osvCq",
  "key26": "4BfBgRKHFTGCo75X1wK9VMKzWU4mPqFs279KobXdDVtDdQUjZh4cEfhbms2UfRZZn2TR384uPSKECkRrJr5MoVd7",
  "key27": "2zyb3pJFF5mRsqVrdvAjd36uHAjAqmvzpvPANwz1HenmQNdNeYcQKmhQZp29LXVgwYHHbjsbTaurHot7PmHT9ton",
  "key28": "2pmseuRN87ZbYqR1ZwiD711qhPFGy1FMm2nBTvZJaB4gfW481kE8paWsZWk4n3E7UjjFG2ozkGfNtTSwuR6SUg7f",
  "key29": "5PQWY4JprRajayU91bur3kcMiSmJVySP17kGcnKBFjiYXSNTK5Fput9fPU2xmkU4s8qgiWcxGFnAWm1YXxx7WXjE",
  "key30": "2VhSR1UGNG7uxkJfWg4X3JUuaanCVDzrmDsHYaCjZs5VWJjxVceHKq5sUghNAa7RWxsi1LwrDWgZEJeEG4Ma5wKV",
  "key31": "5oe9W9LfcQGbUZgspJK55yp7KNhwnncqkGj9fPEVWnDmG2ELYPrW3uC47PucDwHo7cseiVjv6mwxMLQKkbKDgE6r",
  "key32": "QpztmoiXhsXa7ts8MtwFpiSLc4K3xot6rxF5JYUn5Aqz8CFTBCF5snCQZCdsDj6u23JMcWpgeAuacUXShqimv2x",
  "key33": "2w8sTUpWosRDiuVoRNgkoeB6shSUEtSpyowYoX5Thk6xET6Do7pYegJNxyg1tZc1M6tGDqN9xLk62ZnamuGttWFs",
  "key34": "4mcw4YYtsUAKjbWbxMaSSo4a3hJGgHKnt8dFT3Ykg68aAkwyufRMYYVzRRAGR3mnc5kkvLLUSR23gVVcmpCqmu3L",
  "key35": "65bY9gzf8eiTsx8yQXPaUrLNnZXi3YnrdJYDBm8V9mobMg8PoDqHWqrkvPuTfMDrYu9dhW2JqFxRxDgBGF63gLGC",
  "key36": "25v5KDictsszyUv6UrwpJumGFfoYaEviGcSdCqsTcC24EVPWzqTydfdp9UgtDker912EFMHNYsXgHRkNUg9pnDv7",
  "key37": "5rjv4dAvVZoJmiKW1FKDtfP9rCbxpRHdfSAq9oDp8i1nK8QDihx7758ZHtq4N7FAQC4ZoXcU2n1Ukpe9pGCXCjqW",
  "key38": "4KLKsoNhSfXswrwnCpGBmUCCogktFY58HZSSG22dX7PwrGju4anw8u1ABH6pHwDia9tRKXKK7b8siJefKSFGzAdv",
  "key39": "HtEYkdw8MGwCv22spvE4xqXXM9Xw2VhRnyqoSZWxYRaexaoDQYX6FpPVcBRtxwR3T15wTb8WaAWEtHzVbbaoLbw",
  "key40": "5PfErFGWPfwCMpx7S4p2VebK4YBw8rkW7W7Gv18Jxq6hjvLpMKEtQ1dwWVyKPmSvQ2J8A2yVJ391cYKHowZEyBbm",
  "key41": "4AjbbMBbXKLmcqMm1o2K4rp8vAF5AP8Rdax9Q1dS6qxragi6KrzYHtaRK4bCTbGvCm7EESQocuaSU9Hmr7Xz3k2W"
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
