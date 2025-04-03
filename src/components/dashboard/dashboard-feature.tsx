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
    "3dUyeQHKDbRoxCfmPhTdejZf7StDZKvAsaSzprFc9kyPqxWCUDVJGqg5GVSX7RVcugFpbuqHTux4xtwPRqvi1con"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KDyNTJnGEydVW17S9EdygwxzvPgCVWciwYkFromrUpEffLYE4p8hkfARgsjB3xUCERjeF3LQw1nJEvZDUZ22d9j",
  "key1": "2kt7TLXjXpEGVgkFFzB9GJZhq7nd9L1CrsTrsJDjMHCKHCEXUpNjWnh7doNNXJCh8Mo6D7j4k3tQZod7y7o4LzJm",
  "key2": "4H4uMoimG4d5kWupwDwgqeCk9qfBaE2BnyG94oGNCq5ao8BsdrfU7zCZnd3GL7iXzqRExKcHCwMN7mycGKfjGmji",
  "key3": "hjfqMWu5bWAWr7qi94bqGtRvULJkdpWyfCP48BsxU5dVRTkTVroe6f2BT5JXU9hSvtQzvP7cMUyQH5AUaKDhRzV",
  "key4": "27ev8zjDf2xsYfgac1dFd8n6a3nG95DU64HubFoEZZG6tqUeYARjnuAtayYL5khX2n54d7WdiTmntZB3buvP1cRs",
  "key5": "5JVvxrXYjJRYuuyTVDFmDS7NF8tsGkj1KUQJXnqc9wA6DWW4RkCyEnQHmZv2rvCGB6pJsWmsxzpawxTQDjsfsic3",
  "key6": "4skcAHNw7h8Xgr24BEcfQtZot8vkTEpyWTXqq6gKT3NZE96JsqJaDuWaHvV2YfjsRMoe1D6Y2jmbxWdp6o4BxRBA",
  "key7": "4USkFAomh6tZorggwLBGpyrV8PAedBQzUWQ3aDtoaqVotme3Hmv5QoxYCNinmSy9vo12jMjWa36Btq42bAHdPvan",
  "key8": "28mdYwWTLtf43y7ewr4Ev75QsxDgtC3oBoYWDiYLxkHY1fyaLJqH4gHEcwJeBsDomUw5EpS96LDqMxf8bR7D2Wfu",
  "key9": "2guyRW75AicSmF1percXFaqHDnzC4fXouPgnStx27uYtkHcwg7PFT7J5JH9SH6DWTjMf2yjWveDMer47BEDSbAQK",
  "key10": "4rcBVyc2oz4EPAD9REUC8EBuhYCm5zkdGFGmc5WKTq6eZ7Q3gZryxXKMdvP1EbDyTCWL5H1WZfhKpyW6Bzv5zXQ1",
  "key11": "48owFDr4Ln7oUAfdBuawbRmQRtEwDsELKcnRppoHDm3YSQSvhkeCy2iiYLukvXi2TTdAcazK54A83zDjPrrvzJSe",
  "key12": "393AyzD2hq2LQCLoyA2ur3sHoq2uGc5AG7QTt2B1hunpPxbQ3iJVHWQCNs6eVd2Xnq9UfVdJSprYS2jtoFre2EfJ",
  "key13": "5xA4PQ9pin3bP6BzcF3sNzMy6mQp9CxzKYeqajSeaW4uCHufrMPX1QZxKp9BRCQuKRioibEaK2ZGyZ9kpE4bCqLH",
  "key14": "4AGXLZFAoRYy4QkML22N5ZaXdoyhfiJK1Q7xnD6kECz66j7PEkwpR3LQQfMYyLnJvxwpE3qu3h3q83gPEP7m6qNE",
  "key15": "3hqVL4vVj8NBp3fdCHSrbx269YgD48ky4App1Hk8JBcCVqiRr5fDsE4e7Ws3uM8HfxCJXHBdV245FFeGpKh943VJ",
  "key16": "WsHUopJXgDjMARQw1iy3sWPAsa5fkSrz1wAzeWeWuScdJSoFstNS1RgY5ZTcHTWvCakLpzMRxTzskTw7pZNXFjp",
  "key17": "2sAeowNj8BKcGYNNPUei23TMc8fgtdMVrhQjHqRKBAMKTiGXbsoztxmMHhedqPCtjMKTpjnm3vGy439NLsJyRygB",
  "key18": "27yX1ypSCpa2YinuC9YKqd8BEwKNvRWVkRSfed3WAPcg1R831JxZcfUPWru41ynZvR2uQVL7S1xLk3Nwp4AMfoP5",
  "key19": "3UBtKYJwFocDDDdXrSgLyw9GivR5C5tkpnpFK8mxzyCz2mFFnWaV4DSRPDT4bWbCxRzuZzxGwDCQ3QEU4bSZqhyp",
  "key20": "2Fkw5ygcnb77eVLN8verphWAQ25rApXS7jAuhZbBbpzDaHRQLSS1PiVW97uDJ2Vadv1eMxsZKMGsmXCCT469BW69",
  "key21": "CeY5TddGg5Zs7fv26NFKf28gMy7bKqJH9mdvxVYBpZ118V2ML8wtJWXwg83nh1QhGdyznWNFea5aLqznS1QAEuZ",
  "key22": "3r6EQ7hJLmrPHwqNoKJLFnUkU9MQFedJm7aGDHn6k97nA4YtDcDa6yv53k6fKTYp62Zs2cF3QNt8orLKjyn6g7hr",
  "key23": "2r87srBsz62V1QvnSbEXyBWxe7iJ9UCKU41HFMsrXDxpwimvhnN43RDMMWYc2TfsCMToKyriDcd4sBzPZMBjPdbs",
  "key24": "63UhSX3RgY3GXHECX9uT2Biyxa6gpnLeJckQGXitCNTeEZthK4g4FzavwYVMNxpWNQwuSEvB7UyPLBC2ZXsfikE2",
  "key25": "iemkmndaUquQZjNHHkSSyxSecDC6eHpm4KjhnPxq53GZW8uTN9q7u6Lz3DHa67YfW6ANRkLCtme5icR6FefAeNm",
  "key26": "2F6roJGmHwGHaWHx4FhE9ZNghiLNNtGr6mzqQsXHw4E2GogEMtYiYjEoYRknUvhGYWRpU7NrA2WwLhAvzDYGtmf5",
  "key27": "5gw7Hf7nbNhN1732FqRkfFcLr6ipWVRjkWdS1VF4aVHT9DPBJTXFpttwgzcdE6PVztcmFv19ExUTjVu6Bgkp2Ha6",
  "key28": "UetogrTL1MNW3eDZvFcEr7K2rNU5pgeuR9A6eF3gHDGqG4i48m4nDRACPhLwczGXTKnw9cjwGkvZvgTRJLX6Z3k",
  "key29": "45XnJfnDhy2UywGS15VJL1rT5izHtM3Lp1g92MRu7us9WA8UQMNTyR1RsxpvweUGTs392xFNJjdyVWZtvPippuF8",
  "key30": "54RTeGs56LSxTnGSYFsKnDpkaNn5kRDJG3qcrfPuj6ryPZtvXwKats9pYUdGdVYCJLMykdYk4u9H85QmKUtPvZD2",
  "key31": "agA2P6WrY9wi44NufvUxEnXrh1RGWEWyfQh3YT51nYkkHmRFAcJ5xdf9zapG6trunVZussWS3vpAGJ4oo8yqjbj",
  "key32": "3qvA4JRVf4iosrSwowzKcTKZ9hiSEkpu2gb8PTzh1i8CrjL81x8ug3JkXcSyxhox1Cufod92PWmJzWPs7PPnJ6i",
  "key33": "AXDpcfvFyKQL217P2A5hszE2CNoVq1SMU1qWDoGcWs9EwW621ePn4t5RAAxbo2cnwtFePrT7N3bau8hsVjWM6F3",
  "key34": "23GGP9wakWfdLA29iZbm3XrYG2QqGvMTszETfdAoDWQkdKurUzycRJEuxsBpXgPbo1Hm3suNpeXyEnLuxTpX6W2N",
  "key35": "3Q9gt771VRcF25HDFiGfFVzHMuuiZfj51EVVwfEjP47HG4WQ1JVq9RZqq34npzYjvpdiCZqdiwWhqB2dXSXRDrpW",
  "key36": "2rADuxMN51unHuxGE67AgLREyfG7AR4KNmrzeRY6a3hqKW1GxUuKLyc6CapST1ziVgqnz89U5xe6FasMtHvzRmdP",
  "key37": "R8TTM2CwcJaaLn5a3JKaGKppi2qafU9kMmGAndTXYnK52R1CxkmJBxBtV4nNwz3zCA4CdbpxxWHe8Qiq359J1Rv",
  "key38": "5CjLpYz2jm1XNsBZb86XFJpLgYynu7qEMtxDQxBenaj27nUwRckpFyuMWiFwgfUvaqJeTGpFrtQQJsK1YWpBvRex",
  "key39": "5AiafAiTGpxiR2EVtenr15vZYGmBWeWoxuMYP1saaVNXFUMzUUhxWWWQShGwPukEiGQZ5q8koSfJ5rYoV1xzSVRS",
  "key40": "4Mm5iTYMhYZCMjkHnKZmdyeKbDDbqdyijwmYUh6TR9gE9x1Qr2ANv66wfsoZYpaaMp62FStbAquaDGcTAPj3SZ3J",
  "key41": "4vDwiB3ystdZiMb6xUTu69PzrynAEDbVeB5U9TiZqzrN1TqNJ7DoK9EG6bN4pYNv2wTy6NkxNMasK4vsTdgZDjfm",
  "key42": "3Wmj7Atm6NvHVubnsnLeZ8WKm4x47bhmkNY5K6vu8viVmLPWNTZhwx54RZPjvaiHtp2z1UjS7KeeDgaLxAAPGjRn",
  "key43": "3LwfaDusC9KwjWew46BaZ7LzkwS8zpBp5jMmGqP2BM9qqZq5pt5gdKhZ375cq1V3tqhD3g8UoTCaMDJzZHhnpoA6",
  "key44": "5v6xoNdL8T2YLdg8CXUHnXauyYeeDCmgH3HJHAqtndRcwbvrDzHZkbnTJ2TijPY7yK197efJfvoMMyzYgCi4ZVWT",
  "key45": "5AedEYY3atdwj4i2B4fqrgWeKWriURRVdvYAkWEwdtDXbesFHLmw1j5CNU47ogiPdntfiPDFxBkZRfeygq5S8Gcq",
  "key46": "3fVf7ZAnYxhNHvTqG5TJguuRZCQ7antZR3K9b65xG5YSxWKPCHA4oLP6r17xRaTZ18XSqjxhkv4NKDDRw22V9XND",
  "key47": "4UwHUp9hpBXT7cT2S4RbKtuM1yn1B9BCmFvTAnFdMwvJtiNtZgCCcqQbuA9MV1ZgNLBc7T5ggzBpjWDBL2i1etkj",
  "key48": "62t2K8mWnoTsTXd149QSCyfUUkJajT1yKCWXXr1L33HLtmPR5xVk2aAiaXfWmL4tr9ctxz4Wq8LLGP3gzSdbzQ2t"
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
