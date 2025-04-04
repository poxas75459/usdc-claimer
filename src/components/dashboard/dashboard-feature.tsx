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
    "5ZgehtBxFmcrELDaWytsrvz1Uk5K7yhB7aotzfvFmZ559KdgQBjoDDgnh4CcaLmAkwwoDJQB3EWEaS8Mx1k1uHda"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZBwsbPdG9rGDR9c9PyHG6CCPrGXBDhn4c4o532XFFqNdbVyKV77ZjQjXT3UZKwVqrmvYrRHP19Kc4SxwFAmSK3j",
  "key1": "4oP9jwmvkxkTBP4dgBk2LnvyGijgkUqTfuYtQVCRcwHGBM1zoBqJMf5WZhzJtsJ8dK3kfXp3JDTznYrw7SeBCGvT",
  "key2": "3ZrA4q7bzisUaRarXuc3eRRVqhK19iPk3nhQ7wDJ9P3LvMdSXvSqQWzJAdf25TYaGwzWvtrwAqtt2rAEDLECVKPm",
  "key3": "5APM4t5ZJmxa7qHUb8d4EMctxeoqEJ4q6Qy2dzPAdkrHcnvJyuSrLz6pQBAG8Hdt19qTVvw4wjoYjAA9HncksB9Y",
  "key4": "3jp4p4QKNasJUye7aJiP2pbzMu2wjyS44FFVroxoubAQvHNRWPcbZqWEDtMFB5RG1GoVaCStSE9qNCzcbgTDfRmn",
  "key5": "3QPV38mzXfnAy4hTWvrgDN6mLeM5akWsJM7QKxotYi2ZBFZBR2toYJT9m1mZmu9gBKWJD7dgY1MLeNN1scU2EY1S",
  "key6": "3W5aQMvVJexeBev8cRUV4hoi43Pj7kGPKXVdRrAXo3vYa1bqCH79widDpCpHM6MDYSWK6MwGYBu47VxbCXarikwd",
  "key7": "2S2dGgjUZYu4YyhJNPcVcvCyibFA1PrPiPWaZFHjFnasiU1t5oy5UsbcChcGAkDUMgHcRBBv7kzgfzx9jEpU2xg4",
  "key8": "5SYFVk99RH1KgaY4UjLmihWnHivKE3Z1txFPJvVeDSbpFJGsyd9yuCLNceVbpaCxBhbdrkStGQKp3Ynx1SjDfVn8",
  "key9": "LMJDyrmH8zu4eW2vuwjUsEarQ7m31pj1N6Wj2Yu2pSZCBqm7NJhLHyiUWyFpmkNdHx2hmRMgzEG5N3zDf5yGrJH",
  "key10": "2jWAwQTe7HKHvpViaDbwzaNEsEMu2KJXEXjFHTSKHiGuyVgLr4LxxD1vRz7ZRuczMoMnQvdPSJQY4Cc4prCLdQ8W",
  "key11": "3jtW6jRMyBTanTX5U8PPGwVvyXMhr3QYLcpkBRqpmDfJwKQvs1cNPyXYSgNnJxT4krxRC4nHPYHznaTqGfEPgGwc",
  "key12": "4jrCbiX8YMx89jfv3o7QehtQWThFAn59vqLX9b8MP8M9aFiZbDf5YzCBaHuxutXVgUbXbmck3CPYifq5nJXiuJ17",
  "key13": "4WFtT4g5nZ3MuSak6MogSgr5TmbnoDBjz7rY3r6GGNM86JRhieqqnL5eKAExqzwYpWRe9qRqj1kj3rSmzJqtundw",
  "key14": "4vfEAgwiJkJe8tk6qkZqjtT7vaQW8YQDukMWtfF1p34y6fketRCZULZoXGAgGTsGM2ZYkuC2K2iePi3EtVQmNS3q",
  "key15": "2395sv6nqpTfeCMSZPy5h5hfoCRqMiwyNxjfmgQEevECcCrPDufw5jMLgXBdyhfqv8HTN9UtNc47RcBqiFtMQLRU",
  "key16": "27QN2ZEvwD7tdWzHddUvyQBYDLxsTx2Chzwu527K1GrFikfLbAbXcCFgvgepMYFY8QKt97YiWamyo2bFLVK5J7eg",
  "key17": "4uQ7NuyZ2auAGFzJNpz3q79sLguNJUwsWdgGGgGNv4F4hgzmJCSt3rdNAAM2a8DcLzziQ1AXQeqvundyxoPSmADy",
  "key18": "46HdMwG7XJdnQm99kN95b7iTECnJeZ9Sd8kwbqu1Jvtu8KMPYMnw9DDY3RVCB5xRTDnU9BwBkRSqqffCdyvkzfYU",
  "key19": "vryzEst5YadXx2EFJ73r74JHFYmZNShT7C6an2U2y7ViRUzo55Mj2Fd5C9ZN8Z8KDsVnRAmkMm97oSkKt7ZPA6r",
  "key20": "4PVraGjUNb4LJNYnh4o7tC6or4rKUpc2FHc8gU52HWMX6crUGX88fVdP1UTkRrRebdnLQ5irSMaF4vCEWNG837wN",
  "key21": "5mGi5cM62ZZnpH5iwy5ezHZEDtPgs5DzszbmsE7DVRdmS2SdjryanwEnCg5wrJhfor42Qv7CdD1Mi2jVejQpvRha",
  "key22": "5zDzwswH8bTCidCk9XgccNRQVcaLN7DqL1N7zq9eX1TNVC1zvJhtCCsFoijfUxyFD46sYb15AP3hfSGHBDHNBNnA",
  "key23": "2iij2PokQgztoZMJXzUZF3chUsua9HtEZbcwe8R7be1khXPcqvpafvAbEGRhXE2JGJur682kXoF6oS7v7ruAaahe",
  "key24": "4RaMMhtm3ZwDRRLadfLyXngi53m26C96PtDGtq2BcvyqJk5ApURA5jW6EGEZJcbZyRKG278ZN3ddXxofMy4vrHrm",
  "key25": "KUD7pxWfx7rnCQ8kTgUVy82wdhSeV2Pm2dH3o83hy6KRs2VM7Jnigfgyejg2qfLa4TAE6N73ev1moHe9JkcUdVA",
  "key26": "4saU32rsoHsyHqQh7QbsJ9E6x3Y7XU1Tn3p5SE4e2R5GjiJ1kgqouq6hbndWoofxG8mS7GVZxPB6u3wnGsypw46M"
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
