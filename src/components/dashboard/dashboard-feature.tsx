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
    "VzvWtQnpY57X78DccFQFDLromEGYMAL1MCucfqfSEFXGfob9TfvoEELV7W97rHcmNA4KFDS6HWRTgbM9mCztmtE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67fdNAKeWaNbr4RG7AsaBGbicKwZZSWUWKciBmeucNEEFK5HL8LfXQjAxdGHWoDPoAU9JAKWh3JpzzamoCGWGaKj",
  "key1": "4ZuKstGTvTUK5acxn38Fm2UQNd6UkRn3Gs5jzPPJg3cP2sToMRbRmaLnPhtUzyWuC5eo9Pyq5Z9vorEfTBnXe43Y",
  "key2": "5qwHB1vxwaywfmcbi52EZNabHaFg7y4nMowS6D9mdH37uePGrfoEHQrPPMvv2vTS5FDQ3u25ACAUaeqUTdkFDzhV",
  "key3": "9SvufCqLGUrZnkvJyPRmnW5rVqbf1wHc2XrEhJP5AQMck7EmmwtDegfxZM4jmB5WiMQ5zr8Z2vt3QXYKcqS1g3a",
  "key4": "5uKY4tjHcA45r7TpjRcgvc1SwxAQRUaDVLkwyj2sSZhxPcJ1qF4Ast2RXcFce3bhxhXq454DNYjABExv1kXrT9SA",
  "key5": "3UkxjaAv5TesvTZezB5S2g8fUPsYSgZM7JLoSAQSb4adHTiBDPRaYfuv9i1LvyfbUf7pfuAZHbdy5xDMzCwqzZ44",
  "key6": "5RezGke5yU1XxokQ2ZcBZqTH6yWpgDDwb3J6QqMRqzUygm88hTJa6PjGdhQV8t86wVt3XXMtEdRkV3zZKYiL8zr3",
  "key7": "5GPojtSHE7hQXQYsKo4g1voZFZBFboSnB25ZBzLeaPt4ZhLyjsVfB7Hs4sXAudMcVc5iRVBFxdtXqbYoVSS1rPsH",
  "key8": "pFNGUErYEMDYnv1MiMeQvs84y2NEo4D6Ab1a4ic7bdJMrS19BNakNid4t1hr7safNp7PXiNDCMWKrFTYqxEgvUd",
  "key9": "gwBVjN6p8s9SrXwVVexcgUcoqsHLsMoPjkaUg23t1LmrXJh3bkyzj6R19KsPjSMvfByq5cQkAQUUBGtGvEsp6sW",
  "key10": "2KSKTGpc5w3LFGuM7thMLsmsbF7FX6jcDHVGmcu9264yB4zfbEadZ7g2NWsFYYLtUP436eJWiWFGKmd5JzLnRRa8",
  "key11": "4LXfMFPLJrEDp4Ni9aQivkFPkPQKcmGnqWpmsJBjsHtdFKNFk5TdvvXCjxyssffrtkcMUya8Q9DgCbGXNnyDvgVS",
  "key12": "4ySyn3CBQDkygVmstF9V1rbdvbTWZL3NaygjwNtLaDiyAH3qtYazQEDzN6bbsmEB7BCKcP9cNPrNnMFrijBxyHco",
  "key13": "5H92tDCYnyMuXFt3refYvdv82VABeg7m9u3FcjJZBiok6KBGP9XtK82WMW8QGaTZy16msAqN3YWDiZSbYSHhR4TR",
  "key14": "349sKffKpe3xE1GL7BGSa9MrHE4cgu19ksibKjUzsTsh7ddr3WscNHoSmZjKTWdnKGHwHYcrF9zEyEQzak5PRgVZ",
  "key15": "4cLDpFk9zbMRMRNakUdjiE6qhTYS3r93ew3wqDafx3R8YNytpJB7Vj3si8jxqjbHDowbGfH4wBufzJ5Bongt44V3",
  "key16": "4XbLtjFSeGG8cEVK24fSVPxi8Ws78sr1i5tACyneT2YAR7MNzVTAi538TgGatHcBMMSjkTR2nQXudJonsBh73CTJ",
  "key17": "43wcCQZMuELjVKRS1BzrrJXkjQRpy1pKWoB3uhLtp8NEPRit2F3xu2xcfWWQd5AMnrfuRFPenVJVN9ME7HW9b98G",
  "key18": "fTs7e4SRt1gB3ipCFbUnsHPro35WaYEBpwhph5FKBSGTd89QfSyiRY8LdLXmiouc3NoutEkLUmgcQkDpNvodjH5",
  "key19": "5gBysXtMsYsyNFdZ2vD92ZN6TT3tZLcPJzsjV7Qi8SPmbkCxWQWJGY92ZomYDQnriNwuMseoEVy5eSnBkhfbGgHR",
  "key20": "36W9BLCzTS8sUzpXMiUFAuJNT8cYm8exUEwjfNGRf9euLJv1szz4Pvniz3RvqCWr2D8STrPmyynAwuqbJzUYHQc9",
  "key21": "3NsiDrZqH8V3tWr3Rgwgx1n8tpa6ptuqbnGQTQ4avY9p4dmvuM7jjXz14Sfx6Db8EbcNofhdsNaEeunQm1o4xz4S",
  "key22": "5a5iTK4Ansu3BC2nL2ceJkpisY5EyNx5nknG6CrwoyNhWrc4wZDRA2GQKwaEkr7DaqkvMj9LG1vSmwzQ7bGa2b1T",
  "key23": "3J6Qu97HBEzXKUQpckiH7Tt26WSvbhHJ9pjHUCk9s8rhWjZSgPFSL5jbvYAUf5Bf7GVWbXQmzBBZxHHyi5mf7XCH",
  "key24": "JY2D52Z5itAdHbfeyb8RiRZ5XEAGq88bhGDW4iPXE49fJ6hifg4L6Qt6ttQF8TcBL7XkqiVmxYda5fbSP1GR62i",
  "key25": "23X1xXL7Mf341EEgBCtJ9rHVQQaU1xtWzQGmmgHS7FpvqABW19qk9JwxL3NPkMQpRBDNFpF9x3JJzFSGuYcR7GVo",
  "key26": "5TEucUHUA7Ycu3iByTE8JRSUP2iRvWrgqb3Vmpsykw91wXySK17s4QjinqaGJDJmCjS4TuXrY9NXoS31uUoWoDwz",
  "key27": "3gPWU7RWMZW7RUMn6mEKXeXUTuMKTFKkxD4et7tQSDVYuWx6bD3DzzV9CzswPssjf6KneMuzQJaqrjjBV6ET4dNG",
  "key28": "44M5TkJ4Brduwkw1mSYDyXNtr98w66DRNfvSxRWAAzuvThtbRV54MxDuikgMGdFSuiWYajXQYmUN7wkB1wRLURqe",
  "key29": "2Puha6a2XpKqBfrEFDtCBAi33eXfes5Ed7MtsMyLX3BEgDywJGMzkRyVZRatJES7sX5hVHGS8ki97X2G5xL3a5yj",
  "key30": "2XKNZ1Gd6fqNUr93qRng9guFanM4r9Hz56XrDaiHKRyL2DRSjBRqx8FcnJzLRMnqw7ZbueUYwcHGRsZvd75JA1vU",
  "key31": "4YzhQ318uBbjVdeF1JMYhkEk19ppswRnD1weUTSQjJM8x9TuY5spfoeEihYwPEu9GSQCtCHxV8HAr6b6XuhCzES4",
  "key32": "3Xf37iTBQXZHnMxfKGZQ2MFAxxqXpQjmDRVgavCZX8k4Cvd4mav5k7D8uchswsgb4BtnVD19JJVk8EaEmReevnN",
  "key33": "2HssGvDjQWhmuTwaAj1UzNvajgdwxuJz9i4koq6dHUUL4tCjE3vwxPJPwKHCZVbpGbde1UsK5GAByu4dgBXYP8F5"
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
