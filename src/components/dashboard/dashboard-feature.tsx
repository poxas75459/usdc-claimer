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
    "cFgGvd1LWUs71EwqXJGBcFBj9Ec3FUYxPS1EXbVG21ejoxKTHeo8i16q7D9ei5ozzJWUcb9z4euCjoqsR37a2tQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vkAyfL2ygfJZBHP9LnxMHMXNak5q6sNQB3mmq8kBsCxXD3eR48UGq5YTXUjkgFPEjA8bwnokrKEAdChApZBzxZT",
  "key1": "24kD6v6BSDthnetSnEUt1KBhn9VpZnjesnVSbSTGs7AdBPqsaJ54GiTXzJKDKFMVpq9JzpphnnA3pfdoTbyxrFdD",
  "key2": "5fWZgStBSrKM4PPveqjyvoRQVqjaPSTZrSXQ2znuHu9eKC8EAcDcVtBMQ4VCsX1hk9Qwjp939CVXcQRoJ8NZ2FdQ",
  "key3": "3dV3eLNEr1Xcedkyi31xpZTmrMEwsK23jqUeRrjbo8gCtRgb1xHDi1bo2PFAP7ZR4QnVRuUCLr8VShwcbeE3QLd",
  "key4": "4sKMrqRzCdqtzEt8qWHisEhbzZ4ijLrR9D4wY9wzggiYLNdPzcXoBVkt9uTxR51MrT5vBf1CQVGuxNvoWaYweRFX",
  "key5": "4ZtsjBChDr9AaMHq22oULkDJqg6hiL95pHkgYM7PZt4SEQKWmJiyowzRgK454p4jVMqeSLSJs31nv4fo2oASokcw",
  "key6": "2eP8dsxgGPu59kbATmhyhn8VN3UMs8wMPwRh6EXCn3V57UYDtSDAgChaPHVoDujB4bXyW815gCScjm85A26CwsBJ",
  "key7": "2JUJUch3fZCpTW78JNbV4HQnMCXJ43BHHpNqMBWEKUw4Nfd9ViZg5TZHWHhJnQ5bYahuUpCGyN1Gvix3vMAneuzP",
  "key8": "575w7uhQio9cUPpPSQKxGdhvbwzT9td48ezYpRySWqMZ6iyTKaMdbbrV53TPCnxvBEw2YA82xQ48PEsEMeXhvNBC",
  "key9": "5vV7QQo3XdMzYGDh7inLjLKt7RgySTKhSLSjhwHRD2iJ34NhketAhGov9ijDAY4kjdrGcmvbnJFA4RkFDdQ3Pqyz",
  "key10": "aLtRJKyMgQ2HiuEN48pJLhYi4NN71cS5hTyTiYZetJ44jLKBKCLmitNcSqi29wztacxa8vZPf7VFa3i5BpYcVZm",
  "key11": "LwZGJZsGhxn4GAUnKSm6pqY3qQec1pVNMUZvJcmLZEmSAa61UMYf3ZTs3XTtHWcFbUrfXJtuqJ8Zd1qVBNwBNFV",
  "key12": "4wgkAJNJiXk521mv2wA4JXViRJr8x1dJcSUkdQ7hidS1qy4o5ndP4JxQ9nqyGf65a8LwB12Df9ockUVBbfuxdgT8",
  "key13": "5rz17PzwvNNNzFgSv1GxGeY5dMxDCbRZLPB1V1efjeLz1jWMMim8o5JdYKhrn87GahGmx8X61BoZbBSoS5JMTeYd",
  "key14": "X9H9yeqQtCEDM9bxyfTBzLxLvdR73BjdTCxrVcfroPtv426Znfyj2fY3qpELjxcfjTuaTnFMQ1mYyrDyf42pTmq",
  "key15": "2eKauvzrd3eoAcYuasdYrJe71ajgsekZFSvGEn9yfPDkn89MCkFDj52u24gS3rYh5a6pikCkkEX32pm4dvC7SKRg",
  "key16": "3sX38SNQrirPCS1dVLvLQSuoR3VCKy5jLzMP1E6UUvrTiUpza4czAJiYTpM1Te82edXV4J5biMzYpiKT8RzfHxvD",
  "key17": "2GC7kJL1BBfiQdr1pDqbK4DbeVta2AhvFP9oU6yJu99KALcGAYNdbWDETai26kbsLgeMoU8Suz3CrpJxfuLDg3Wi",
  "key18": "JaoXAbeCrd8n4muR8dmyq4mpSu8xMdMrr4b2VSYdVRuJXNyPJ2dqJ92yQm6mbXNfLgn3B8CjrLQob96Hm4hMgP5",
  "key19": "3qbGuEfu3uatHpd1Uv9N7n25qPqy6d2tcoKaN9db3CY18rQCgBntgGgnjfBYXuPDcAFeD4d7zy3G9H9gN94Sn9T5",
  "key20": "42sy2rETMcGf16X6bPtnEY7gEfNHgxkBWoyEsKpvs27Efs4inBAsDPRaFzRmPq7RgoWWP22JASpdrw1mZrr7tjCG",
  "key21": "2wPmcxrVykrefpya5ri4JQL4mEC5Wyy2h5d2CByhCmC69fBWqQEcD6VEeYzTh7TfWEdfceS8ArpR1pCSLiwM5Cf6",
  "key22": "2uZVqZJpWwy7fvsWUHypPb629AZYbinViv5yTFpYfKS3YqgbzH4hNRhxpRY2mFup3JPEz8TxjdyCt3UunMQeKQiA",
  "key23": "4CNETKJNyo6UfYaexoqEfYK7Z1dLdhn3Cxy8bPePqnygXumHHVWCG4V7BZrie6nyTi7U71hURGybRegqVzrk8XYs",
  "key24": "5jBdJTobUo33ti7tzoDokd6hbooysTADuCoGo45hx4aeCGuqXdiA2c2VaeS8zwvC5MvqU2qXVBmeNUQXj35ftuAB",
  "key25": "GyveSN9y9xt3w6xEFUh1LRodtnbR1TPCDL4SnXPEasi32i9XqnAma89m8Cxzgfd1twj9m85B61tsLLZqBvjatKJ",
  "key26": "4YsTRyVY29sYvcRJv3erRdyxn22G3BQJEdCT2n7V8UjH7GqHAuCgpmkqJSTyirKHvcpJ16jqWCqBnAayn5Zk13pr",
  "key27": "9UoVahyV4Pzh1ZTc22aT3AR1nB5qPhMuioyiR7cErYH8WiQce7FNUuUW5DWra7xKeK1N8bkDsFKANQ1kp3n8w3T",
  "key28": "T4T5ZnfCybdXxs8JGd32T3G7Kz8rNbAHjt615hB9W74dLvQcj49Xz3oko26eTHTgmSjKFJuURs1Rsak3xC4FVW7",
  "key29": "4P8E3JEBvV3gCJDqWLrXgStpLqCnxZFoz9XQCfRFZnHWogr3b7K4f35TnvmnJp7HievcUZFwV4Bx8Fys8gWqjKH9",
  "key30": "4XY4Xt8w4ujuxbaNQR9qbHQvTA56ko7Aq3gDPJTbTk9d5h7eKbZTTAnkp66227JY9gPPx6aBCHUWUrnzoufExKnK",
  "key31": "3jhn5WPd8hMdFLyyhbECsV3K3zWp7EViUuHrrANm76eXYyeETgDnBPpFENhq1WrZ35t7zHaP84SjwDJhSBJCBp4A",
  "key32": "48MjAG4fDW4LHnnXqhYAq9Bz4N6zKHSCGr74HRhm2iZeU5aYFELJW3datUgGQepGsgCvbADmt7QmndYYqdLvk8DU",
  "key33": "43eWJM1Pxa8PtPPWg4TG1MVJ8TJkSw3j1s5pJBftTFmSoG9pYkGbbYZU9zcrg2j1ePhGvFYEZ1bimizHfRXAMvDU",
  "key34": "5YhKp5XaBwxLyivQ2Q9ENVtrLDTBeWjTLbnZH9yydia7ooNqVpXpuSLFHBJooi2dywbSPndK8EDN9NsVcXcDpjx4",
  "key35": "U3PmNMT8d6C1NKhGV3Ny4bjntsJFXmPEQJVbJoPdrniFEifYDKB9XAh6mamC4YPuZbG1oLYvZBABeBWH3XEgUSd",
  "key36": "2aV1c6z4GkePMECBrTh5Bvny5zMPmTXAFUJfwd9APPas8mjroeDMWUq3q87Uisp5n8FUn6GyKw3BNDVMG427mz3P",
  "key37": "5FYZBib4w2GLqQJxYADYbyd5Dnx3bDUUGPJDyyGTpKASGeyNkXbXdso4XPQ3nqTd7Xojr8HHamciggS1ZbwD1Aet"
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
