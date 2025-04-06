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
    "KpxM43Yq23ZU5ZySX37KLNrsV8x5VVu4TCLG1bUWZGTj4g2LurrnWfUVcL86W9pXDrTVNTgQt6eXKgphhPA2uWD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tmit3hDNXFe49UaMAaoyG3R1JrmpQmtYxnxgJzHTTrDfgzi3mZw4KNgVmfgY625eMfNf2rRoPWesnqM1PJXakbV",
  "key1": "C1v9AnrMGpc9D6K3iKDwnrRsKJBnkfp1uuJj2cqMVMWufW1JVi4RRn5zrbjbP4HEk2GL5BvhZePNwhVAUVnpnfw",
  "key2": "5MRMDDv5UiWpVSwkGsnvNEJA3JKFCh8oUuC9yYribBY59NitrmsPiayWFCJAtaUNkzWGDcRVUUggQ5Afmg7itemS",
  "key3": "4injjfr7ZZwDJVNeD28iYLEnHySKAvzH8FNoNqcaynqcHLP7JPQzKXWMYJxZyTLz31owkNrnCguUh4f8p8HSRVLW",
  "key4": "FgqVE52VnDW9Wu4CeSocRBzs2KDtV8NnaWmy22sd5HyJVc7Eb6NMpeEW5YzLvbhk4nn5Uw7CracMKHJTMhCLhGY",
  "key5": "QtsS1HsKcHh2mhRacyBcUTyZEkPV8hz43vX3xfuvDr6vgGA1GUTCokJ2Dkfpqe81ju4E5bzccXuubqtNNGkCFfY",
  "key6": "2Ug6pFDWkdk7tfLLJc412PcYg9uDYSqgdvhFcyLymfpYp8545TGMP59TtZeTzDp88gHhZVjk7dQaebSf4iqSoCG3",
  "key7": "5HgRK5mEG6YPkRRjntT5JPoxquUE3hW6xDFFwHP1NfTeBZfkssjDJx4BhTLJ15ZMNqFfjhSmPT8mASiNwE2k3zQe",
  "key8": "46LA5cJXiemGxq6hxQa3Yrd6WRuQzVN8srv2NASrfDGLxbKgKxJCVaUfHTxoC3Zi9VD5qkj389ogH5WNdyjGWNMu",
  "key9": "3Tg4uwNccTveBsw2LzgjTq3jXsdy8kKmsiKm4t9jtupptbvUpBnCpTQ6x3M4WMzYSRD437oCi4uJv551ewAYS6ca",
  "key10": "4rAYyWqFP49gWVVWS7FVqbbi92PR6UuCtFjdebS4Sm1kktYjESS17BFgT7XiFgyyPKGMrkPne1JJKcnJNBV8pK8Y",
  "key11": "5PYezTpe9wTCBEU6tCcEP83bT8eFgNcmv1RWSk6GeLAuNZtyW8n2bBLJgQcrrEp3NNf2NAv8sfH3KpGnVfiiFCf2",
  "key12": "3Dhg3LN4bGLhrjdZaxsPXxazYfjmb1RDehG2t6odwd6YL2tv3DWFwDZnqE1rG7PGDSVnXzHDAv81HpPtdbaqN14S",
  "key13": "28bnRfX2rQ6HdwgpmXtL4S54MDaigQ97Ao3uLxsmGPggkfCi5iHXysgC12u8tmpyHvp2X4uNr32mLqQ32rv5w9Vn",
  "key14": "52z1umLCg5ysdJWidt7dFftw8fYSTWv52hTwzZNkoKoVhdyujcgv1ww4Vg3TGkKf2bYTswNnjRgcNHaau3UZ7FB9",
  "key15": "4xoonqono35QgxYn5vwsppjoZSYFpotrA4571FMJvB8RXvtJgTfDHD6gc4o3yYvSboNuqdqCwEbdSk3zmvaSF4oU",
  "key16": "2xtSL14qVCf13G7foejASNjtiu7YX9kWE2TzXFeJfEwgxEN6mvKn1WqhsKCA8SMKXvC4HHjNyhYbEQHfybvoEDx1",
  "key17": "5Esv6b3gvCrtSiw5Az7159XsEv6oUg825gqemtt36448evanqjj99Wa9Wo3QL5JRptKAoFG8RWNrqBRxVpLvxRHa",
  "key18": "3DTXUSovf1t2sBJmMfF7rQEcpZa6zCrJKsiVwdxNKdQdcoQ2FTNdK14Qpv3pwPQSR3iUQvAzaACKUB1izZzf8dww",
  "key19": "2hu2RsdZJXAnrEjjqcuWuHRWvgDtYPECG14Dv5zHzsraKttfAbA5dpM1Km8t1LX53rXgnMnQiJa9mjMSW8dGnSz8",
  "key20": "2yi249CgWxswZy7KLfd8K8DqVkquBLRoaJXsj2kiB64nftom313JMGULteXARgDBLpSEtWwQm8VP86JAG5eyCgtG",
  "key21": "2PqmjMNNMGfqQQzdH3Dkru5s4ZFAHBgCDmUU9S4eWF4kEYcb3dqyzp1RZUGPMrHX4KzMLe1K5RKKozNVSYhrGwVa",
  "key22": "5LJyz3zkCDaF4qskaWUQC2RMMCkbHK4dDyj8Zhk1jwBYwsoXSjPtH65uw1hL1h5mbxq2Swd2AhkfS83GFxNZDM78",
  "key23": "5W1GyLac2QjE6GPenME4CmHNxnZ1sWnzQJzomxSveqdP3iQj145SGzmxXibhsxvUt6NJhPpykuEEHvNPC8j3e5Vv",
  "key24": "RoXJG2ie1SFY4zTFY6GKHi3eEZnAddoFqneDuUHWSPh8i8BvZWA8F911kFFwwesNt8CmBNeTMNqx4Riwxpw6sYc",
  "key25": "EdK6ZHvmpkJKmuvXCUbD7YPWn8Z2ykyJJ6QWtpbKpiZDanwJwEajzhYLrxGUFUCbmsz39TxJJ3D1qLcdA5YURGR",
  "key26": "5qYNrftYTwFhdv4KwCPTUwMXtLWVpa6SH1TE4Ep7oQChXeNxYzAXzVgrzqp8eq4N1rCpBTz4v3YQirT9G5V4AM3t",
  "key27": "K9HXyqpJhy7yBxondumprFGoQg9fNLcyo7ApaAQ7Sp2VSAKibCuhYexvLjoxm4QL42uizZUkLrqWcHmfrf3La9T",
  "key28": "x29s7JRVuCZxdHyJBsCWdjPCB9rDYWZidFZygy7Xn8bFaJK7cwzjWqLpWdQYsmkznNiRosHgbFiuCfm56hXZ4L1",
  "key29": "3mq4C1SQjQvaJ7wxSmYhmHgeZfNEKSBpyVMCsh447ZD6SYRe4BkEbE58RfSYDuUwTTo13176AKgee84wXRX1bwmQ",
  "key30": "9c449oJVXJNhLvaZgPubpvDVjicZvKNLFMH3sfBdhGouvE9dtAnabHdpxBq1WAkqaBoTfioEJE3i5VJMXdeScax",
  "key31": "3s6b2ZxqGddm5rCzjdRjSbntGUSBGnChGfXMXAgc7GmAP4TBFgrudwBAoiCVVDrmfabvNYyMuJUK3TmBG1gvH8U2",
  "key32": "2Xtaz1kW2hShFwQMuorEfGAeZw1CKnDWjczmRZD2fNrqrzt78LPwZrfduyfFXSGQbJpTbVZrmnujgBp9k11mfKp6",
  "key33": "9rmu4hm8eJF5XhM5d5CRVuxu4yfWtPc9Gv2rD5oZbFWe5RBYJ9QfEXn6p8e359Wxrw7fELPcfb5U8hUN4XkNBNu",
  "key34": "3PNHSA1E9c89XF1Mi7P9tfTDRKXgL1QiK1kzfddWGHguUMovbDfPzdi3HomYu69F4ccruivKBizdzaraV6zHrQkC",
  "key35": "2skHf3kR4aEaaTgZ4rfWjJY2pyieBUY5ihYMgq77f59U29Rvuxiw38xW5p6PHT9LYAQzxdiNFeQpgCJ7178MCj9Q",
  "key36": "2DHhUTRGdAVeep4GKb6Eg2f99u9qSVs7JuB5Mv3ReJ79AQvH9F54V7CM2BJ7KFqPJ4eHq22aGLes3abaF3UCxQGY",
  "key37": "495HMe4dgHPTk7B1umKxcFY7xPPqrVkHq5jmXwXrZyM6PWkjyoHxzrbwDz7XCEsWud6oocV7p6jTtA1WwSFnNWK",
  "key38": "ozEooD16U9QuVDpv9HBcpe3RrvRsynRde5VwXEFWLMWoBjKzri3L7v6gAvhRecP3wwrVBZKeF2uqxnPGHX2w31i",
  "key39": "dskW54raYynWGtDsMChMyYVyjdke1667YDkMkDtofEFc2aDbqNkeHpD3SryRFTQATQNJRC1qo33tfz61oF4QSBd",
  "key40": "5p2wr5Pd8T6ZaNXHDJPmbx8ZpuGJ5X9vqXZMw5FLTLa69nhTQGDqFSWtSTfFSfWsrmyBYwMVjis9kEpJ63mxhoet",
  "key41": "6iPCdf93DGENoDjdyQ4v9hSG6aPXLCL66EzPFynbBiubYCtPWABJseHgcSGQpui8zMU4utDp8oHg6CNWx7MGvR8",
  "key42": "gL8NwkDX2DQrtsJCxb4vREB4rWJfHZz33VHAumbyztXkBg4WeohWQenucA9dbnsYWNZBiRZv7GycKAVFH8e2hCT",
  "key43": "2t5McmKP631PpToy7UZoMiUUPHwxz1ctfpuvbj3qnuDkLZ8hw2PavepUhzB7vi4mXmtNGTADek8AHSRv3P7iSU1R",
  "key44": "4QKPUm48mqN144kRrudBhPShp8usQLPY9mCpw1NqVVD5tQzArez2jnv8PQsU1M3A6uHtn24KrJHcNnRxNsoN4G2c",
  "key45": "2mW1phxUzDA6UmSZmer4fojT7iarTYpta8QJ1ikJr1wHt9ADANVmJUS75J6jmGLodhVGq5T1g7aEeCFNMHF8VaJG"
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
