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
    "28v13Bg1qUNQXFszn5eTQ1kASeruhcRtgUJFsnP3BHxJD855qCRW5acPGoogjrECpiL9YPNJKAV1vPaQp54erin1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rRhdjCXHiU4rPNPMbSpsP8TzeWiwa7cifYVgadcf8TGE1zFE98HMVko2QqeDAQdk83ZT12MzmU5Dz6dSdyQHeY5",
  "key1": "26CwX5EQUmbzJQeTyUGmo6Huu8BAXYSY72pKSjnWHrkWgamaCBwAkpS2xtxGebMsoaSMFoTLS5JZnDD7Kik5tMuj",
  "key2": "5PkwqvEKmWWYExDwP73YvS8ztXH9B2tkyMy87QKEZJvKh28UtYJ7rjcsE8osTqHUZNDtcEUTkqu8X7bRaqSnP6cf",
  "key3": "5fGTf2FsKTYqsfC2UPCwh3pNAs7pLai1JKu8xB8jwJT6xQMMZAuctDSc3jfs1KgrxejRaossssiPLw9vxQXLBqT3",
  "key4": "59v1J2Qi2rrfTY9RjmQB8d9gU5qwAor4bJwmQt3MyaBPB1mGPFcPGL2Pu4WdXoo9QMArZGmF7LiW1ZwvEe71GRe4",
  "key5": "q1R6iGwoEDJdkytu3tHSyFu82syU3fGEW9UCbT9stmUK5aSo269N796v1JpsnSyUWrKFqKfc89h2w5skdhAxGva",
  "key6": "4czzAp8VeyQKgJUMYbAtUaByBy2yVYifrup73hQ7FSu1ZDhBu2HCEN8SipoVak6JdxehFDi4CrHjWGnH7vwA4LnF",
  "key7": "3xhNnQS5wbz5ZYWQZB8ssNfBm5atthDtLBemZyd3xJf8ksKcWsWgBCck41GEDJTCKopr2XERoqDS3Q6afoysiTGG",
  "key8": "2d1PJbUmk7n9rpJ5BvysN6C2DGCF5EwBR8ZAAbUhywk4FrLBrhPyEeWRNGqxRdzW4ZqAoRKhUwHxKHcebZfMrG8t",
  "key9": "4WHLXx2qyxcPuBaM3cLikCHyzixikxEsFKoMEtt6LZQSwruYPrGRLjXfGJnJkUyUtRDrXtTxC45fnT726XZ56X7a",
  "key10": "4HQ2e5jEt678GuqNuCrcMuwLqo8BzkLMTh5yzj7KPgMyWHLJaNGWAp6HWBt4exAFb9c3tFZ641TUjPCHkmeV4H8H",
  "key11": "3iQxFcC39yiY9YPEimZ4tsL3eGXVymdbCdzk571CxhUkJfg2f33aRPwnp6c4tTiuADavcaGRLvS5FqqSng5ypj8J",
  "key12": "2KKG4CMDqPKD5MFomrWVzMYu39HzmGeeNAFwRRvERxVhKv9AFqcWvtAQmq1enibHUTJRQqesxUJKNUwSrPAi24vQ",
  "key13": "21cY9NpgnDUs3Z81dGA1BnWM7gePmpeQj6axvvTdLpYzA2hJcZBtcFN5NhHcfUYPpSth4FcXdh9gj9jGAdFrpQs8",
  "key14": "TL34i8k3ZsMHk8LPo1L5k27RX4MWej22972vKNB356i5F179PwSycgzbEJYw2RkmKetf7XiJqGETivB31EMTZEQ",
  "key15": "oKe7TSz9qgFueW7FLhbXqX3AoW4i22LPwS8wxp8xg8cFSZnhuZEXWrbpcMJawbK5bp9MaiNntgjvDok3FfNnDfu",
  "key16": "Bn643jNCJpdSLfQjniQBxvTtoE9tKJe9ruenFB8W9PVC79bA6J2MaPjCSV7aYC271oq7krBkpG9Ma5K49Cewcnk",
  "key17": "3RcmxQip7p9jMw9SF1tY1A1GYb3v79yEXCQUhMmHg3bNtmTPWcDY1s59EwmAWu7RQEyBF69bTzcNnhY2VTYX4kXv",
  "key18": "2syuo4J3Dz2AJP2WfJnSVtBGF5yox4JaufHci1z2Tafd7retaDC94rL9sEpACKnSUwSiMFDUtwby9kZfoEPS8xFy",
  "key19": "QpeLJVFyJYYL4GjEXZnMcW1XWXsJmnE4jgA7XjXHaLyaStqvCKAp9HEKDaM17JUvbp923VdrkFuRYV2qbDhhECo",
  "key20": "WfaC9ReLFFyDVMwWh3PP3gtZvjHkETFg1DWbnweASZjoEtKhZkCkH8F9rSfEVfMfpmxXsyP12918FmhZRJx7KVH",
  "key21": "3UeCVX4Uwy8kqiG37bL9awhriYPceuM1391Yd3cnFpN4H9TwAKRDPidxasHLF3joHv5x6Wac6nZ4YcgNN1FRHuYJ",
  "key22": "3NpzJipwHPMD6iWXTmWtgzzAETjqV3Y7ywQPEF51rt15gyu24UDUZrU1Lu5hYRxiNQKJbUB9j1YwtuALeebUvC7C",
  "key23": "2f9ViqiwGG4K2JjZpL1yQe6gg7c9WB38LC4Hs64t67j5jSPAbfV9TsDrzpW5358NEgo7ZuGXQkz8zq6ExRkzjTzB",
  "key24": "5UaYPJjaUxLDtisbf6kFUbo24xg6RHQPEoTip2Ud2RcQea9RC6mahiwKU1SV86ymraxCA2iw5S4Tn3x7tCntNNXH",
  "key25": "3JozgySNBcUWJqx4nTbZPWtCBvhAH2fWphuzSJPCkq5U7oPdDiF2orX2sxWyvDrcDYjMVoJT75LdbpFxQNd8Xhhu",
  "key26": "WrMHVfqBhL5GxYVh4HkjXXQi6J9p6ZJPXXSjBz83ckmwgZK18KZzbeRtd2jXJSryEqVZhKw1JXUDZj6oaw7xYCQ",
  "key27": "C6s4uPaEtA6iszjDYQcEgSnioKdehQWAbrqYYA8ptireL7MvS9hTCom1cMXTteMPuR83hhfQmzWiJzggnoeRX3H",
  "key28": "3Wk7SQ5Cz8m91rRBNVZgavtDG6pd3L4AtJYHZ47oBLpGYKcbnepdxwxt8cxshENcev2uKvv29YQu911s9YcxEaEj",
  "key29": "4rVcQ7GD1b5595Ez7Tv6EZBcTynU5Tjk2nt9uvUkKRPS6kHYoWS3HFG46DG3xmkr4v6edx4M1sVzFQ4ij9aPkzZr",
  "key30": "udUNrXw2jaP6QB17M7v3A2KnBaxpL6KRX26qX9nyX42eXiAfNAyif2L6HUtLqHwaDKDWcvUpBXvdTUrZPjucHbG",
  "key31": "4jBrU4v4FKEpKDE3UUQSGBdHiCqmq3QwyEK1ZrrMY8rzDs3gVBCRRn2BxMgHazzhPsZqTQzxkMUbJEBjBiKSz2o3",
  "key32": "2PWjFWkAJSXrcncHWcuoB5o2insZiAfVphcXDMrwvPEpLvWuRTAphDzTfHmmMBaSmrydJjSRzg5bGSaEkcKSHHcV",
  "key33": "3JXdLCSrLU4RqqhNDaXhoiFk89mjyYDCkppBVHs8xndAbBREc4y3A8cvJMCQ57533k5zVdCGFfrXxLgTauBNFkUS",
  "key34": "2sAXLXMsz7jyofiwCBp4QHeQTZ21bPztw6Vu4cgwagJfZ87VuPTjRbBngoM1DqJ3eKpBqyfEWJDAVCAbSuknoxi1",
  "key35": "LU51Q6oh6fFbstRFo5BNxf7N9vGj5S6RopN4MoD1mAqZjx9DRj1gXu8kuUyz9cKtasmiKykkT1prZvZDCcDiTwo",
  "key36": "4vFtf45xurdwh6eyKb2vUNkBBpyDeH24w6KhWkYPVcKCxZQ1s7KZ47GmpcEHt9fMUuNbYgmDQnXpDiNyKKqbg8gU",
  "key37": "27MvRjLpFxdA1M5run18PFSn7ay4oUW6Rse33eQFdw6A35vLvwcJtfY6QDqNLHCwUAaVDnXDLL6x4jqerK9ALqYh",
  "key38": "2BNPHHpfprG9rHw4CtArh19E2UQ1DM4u56JfdBvtCoJsFJUJuScsSXHq8W9b4NqgwRd3MRx3LCrtsjVj8eXK9XMa",
  "key39": "K4RW179BxmZqnGYu4V5C2e3iKPnYEUnaAZJTCmRtXTcMJpmAGUj9vPD1zEi3tKGmG5jYEAJzhXJpDMXxkfPbpu6",
  "key40": "2sEsuccDkizHuVozQTqKasUrJFxYoxFXb3g9TsCUeSo4G9B94x6uSmJYpwiVF727ASXa8VfRXKTbtoCV33jHiw66",
  "key41": "2Vz1jpF1Ff3ZbqBMZFSRXAbCykSDVtXyDteQyZCSeJePefW9UMPr3QS6ynkmd2dnmvvxgdVdaLm4TvKsJvZ5p3nM",
  "key42": "2rQsYhqqA6CHuZxpTj4SJjDSQDHBx3oPM7G3Yz3QnqyPDx8SiAKrUiEXsVzwdxk5oTyBqCngPt3Upf6RR23mu64L",
  "key43": "4PcH1r56XLhTdSst5MTbVvR9zFs5ZJoMUP1VeQf9qxFiUQ5C9HqUC6Sr5sSpcTqRSwcWC6hqCEoqpmnHjG2QWemD"
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
