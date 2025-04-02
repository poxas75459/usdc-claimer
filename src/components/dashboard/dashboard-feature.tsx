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
    "EkU8H3FKB6vF2pRwGi8fLswQJ4J2vs9toQbVs9jGBfJezc4xoTBquckQruooukUbNPyNkNrYnjJ9S6bHJsGD1US"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pYYsroUjYBD8mPNWbWANHhnVp3bq8zAGvZx5fjHLPygmwX4gGbRvRkByugwzbMLfj2CdHuFUgxEZ5MeDXKSHbei",
  "key1": "37r5m32gL1RhmA5uf4JAEVbYs4hdMnrmYriNVCA8WpYojRRrmCeq9s1kvNUTPCX498qG5d5CyCAWWTFgQ4ZV2isp",
  "key2": "5AbjzeRYxaD1mevTtiLVKqVr3UeGrBuT6AiidL398oymH1QX7MryxcYCtAJSSE5UHB6dKxuWQG6v1XEc6WZxLF5k",
  "key3": "2Zyi9UypBkkAKMPDMFtHvMyhgytPhbtmE2oUCqqSrT22Xv99HcThRQyxv1ZQm4cZfL6JZHkrEcHKuW2fMRn1NC6G",
  "key4": "3YSsZ3VKRRuvJGuQfFUbU2zvUAZBQ7n6ZQBZxf3wSxLd8jN39Hznxpm6gVaHeZREqfVi4kmzSNTcJJeP5nEJ7gzp",
  "key5": "5SJhVcz9cNphyJZKa17ECcRjF9busYLjX5rSk5QbhE3vZRGUqekQXs36MoCNzh7epq9mzD6LGBMLgQXWuw7StAkh",
  "key6": "4dRk96UPVikv3VzTXW5HV3rJWSYPHySzdxRFUQ5Z4S2LG1qGxRauoi3t7aMRyJnPqjzFMhoxT5mjtrbzUsWGTtWV",
  "key7": "PqyAoF4uPmXQtaSGni65Mk1ta6tutDArvQPsJRE48pq4cDpNMZKSzEQvTkdWVrr89yPLs41utLRYwENVnghdRTn",
  "key8": "4pL3mpCamNy2minntKCrzqpESynaLCyxjFLUZYTrc2gofVHHZue3BW5ij5SiDSactagHD1GcuRHTD5R3WLeXD6B8",
  "key9": "2ooGxAGQE2ZjYZTN5NnYDttceUvctjRxGXueyyRVwUFrVFfpnhJ9WqSkDsYvVcxJ17WMs21hqawuncUADve848gX",
  "key10": "48HyGLde4EqXmZh72DwG7uDG5wMEKvCjbyb6Um6CA95moGc3nra975sE3Au43q5mZTFM29vPSfznEjEVU3jd6KuH",
  "key11": "22fZiAxgEUtTYVAP6hLAj9DSka74TT97CyL5bQbSiD99pYP5eVmYVWXPaX86RD9gc9F2iXx5Jif7LJMXeNN7kMak",
  "key12": "3Cdkitsy1Tx3r8NeayuL2JsU3Ui4HznhLM6sWubP2VpPbzLdGJDVp756ZqKzgwB2jf13gMrAKYhAFBAyMTNutyKQ",
  "key13": "2hDJZemSwVq3zvryDtCZTYmSUY9wNQ36dboacuWBfj9b8nZ8fa69vhTGDZkpFcZJAUXVZ8EaoaThbLDA5YMGcopC",
  "key14": "2vJvaNbJyErdeSMn4kPUqjNAbDHwLGF1Z9HMvfBr8PmJvDVuC35fjU1M3fBnYHcb7kqfAgwZe76W2ekXFRZoeGUP",
  "key15": "28zcLPNEgcbyUzp7yA7TLQhFRCKMFGzu7zJeuVFTWHrmGXWbKjs1uHrXsifu9wW9CD96xra6kM4KAmYMXybHgzWd",
  "key16": "4KwGvpTwzGChbsxfeLhxEAEGv6tHbVmP5ANh6rVPi9VC7QC1jh7M6Kuibz818UCAuCumfnzbp9BNdhcLB8PPmv1c",
  "key17": "5pkxbfuipg1pSwbeGMqfSjnC6CHabipwxD4NGg2vx95xK7R8gZmZCtBSRvfotFBMazGRD5atd4AhN2Qtepsbzh65",
  "key18": "2KkbCmeVF84yUBUCBb46TEZYFnoAmurEALA5tMAs1vRwAEk8WMwzeS1YrnQ6L6aMX1bc9RnqS6sNJABNPLNr6UUH",
  "key19": "fCKfrhMsrVppARczrtgvXt82Pw6w2wZHchp3ATVsktrphiRKHyMmowiaxArsR6tsQV3SWBKEo7SNah4BZ1LR7tV",
  "key20": "78LTEKxTs61LmrSYNWcFUd4VUrsoSjxtnkp2K29d9vcvQk7Aa5Rsp5awUFJJsErm6qqiitmYZZ8C1GxrUVTLrYr",
  "key21": "xnfmiZW94xab4CDdCf3brxQpdEUAc7UXbdzbeeSPLvmJXuJ8AmPxeQgGdg41CnPHwaiUHzRd5G5iqHbNxSLbeBx",
  "key22": "1fvWhfJbctXXWdELihqwTNeb4NUiMWTJZA42pyj52dyS4cusAzY1PGTWh7knbqoEUrfggPLpL8UcAzr54rT3JsK",
  "key23": "RKDxkS8N2xSJvrgFzM5gjJW1ZMjF2XquDk6deVwnTiaLQjTA2G7jADdfAx8TDfNUZ1diNZPLRxKT3XqVvzpK1Lg",
  "key24": "2jxqyjEJf4rpYStB7xyjpTXRe2bRtcFSmHM1MtAMvwNw3ghZWD74CbTGdBKBWnFoGimJDN5WGCDEBXTFsqzCxXxp",
  "key25": "5mg9WZSQ6d1jDsTDCMhqCNiPG2Prdw1vy7WP8bQMCbqD6xEHADzDZgoiR4qsHGCv11h8WN4RSyLHpAnn5PiiWTpz",
  "key26": "4fWbe4iPvfVkYfVCnakz3uMruc2zinUxQihvhySwK7fZ7baL7vSf9rfceJjeSVGbjVThvAXdR9wJmhAakrqvzco5",
  "key27": "4tC2H9wwYKK2RBHePvSw9Vm5TkwH7GMEHXXmvBmzdfK3g7upEh5KSjoHbEqXZtEC4kwU8sVkvgfsC3evb4uS82Zn",
  "key28": "2rNX1pUbVHtF83Lf1DozYZfuoyBncGzEogBL8u4fLopq6QDJRmsNLXqnb3ZV9RggeP5A8z8hZbrEbz3MB9qcoDjd",
  "key29": "AMWyeWjFV8QnptJzzVvGfKwjyvNvGtGdoRPtvpdAVn9fBnKJSYtUyPzBV1bYQDAdrrzEYuD8dMayfRcLvsjjjAE",
  "key30": "4Fd9QN9ntnYCHE4MdTG4GxvpCdNHB74YFUJwXU9fQhQR9A5fRXj6TXZePkmcH9uqvpkihPBLiyXF56enXMtZxNQX",
  "key31": "2HaBsXbsyfRkKvgsXA2Q1Z5aMe95T8gB849VdKbrScXPaT5Nw6ixTe5j5fSyxUkHEAoKMxb4eJr5zTxKz6iBhBLm",
  "key32": "2bTY8U9FKL7YxLYSUcCToJ2NjN3SKPuP6gSTjHsiN2BMeAVxQgzeP1yLdCrdj3ofHEzmpVfsz2w9DNX1tXPBQFGm",
  "key33": "RESMfwxGzvo4b6cXj3kWGVRdN5t5kAU9Y47juhcx6wNmHe5MqwiihyA6GDHrptydHrCifViUpHJoenmvhrefbmu",
  "key34": "97Mrqj6BzY8FhaiqTHSMXKRbP5MVJy3LxcHxEX4BrcjF1bMGdRhXFBjBwqG3yWGc7bkQThmQwogFjkJdD6afJBd",
  "key35": "4ERqy1XLa7oUugNSkdPpNfpsfi7Zfjf79Rfk6WP2kjoSVAaL4eoFEKLGawHQNaqqCr9ky1UwsEitv411XGThG5ji",
  "key36": "3aHPjjoKsVaBs5N8cXJcduC7KcdNfhcN7hBwfa9pUxq524Dv452rHucjSskNHwsTMpSaVBBoHjveA8uhxLNWHHdN",
  "key37": "5cKnB45eRJpbHfVAVDpHy9tKiAc6FGnx6KtcB9vi8n9yv5B61bGKWJ2c8TRzsn7s2Uo53GoXAgoRVYwgGrHbERzy",
  "key38": "3ded6pPtArgk8ZN7XGVeXta2V3Msp4kxFKniLjzRNvp7CzPLqckztfi7UXYuDkasCRs2Evq3aQdCkWKiKY3w6CPR",
  "key39": "4YrPmRKLUZGnudezfJDhXd8YNo28NsuqErBDyxdtoB1r4AJh7T6qXq4oEW15WQyrG5W42qJwJu4gXnYfKkETBTZu",
  "key40": "5Sw7WtuhG7XPNZj3czbTUW7yNRHEkh2LSfqV6oPJcTnjubrxEVRmWM3PnmUVEbJXPZNC513455f9h3yDT9XJK2zb",
  "key41": "DTDAZKgQZHLx6zEeX6mjJJYMdjpEHatcjYnqNjxUnRWkAPyB8he5jdvtHtKoP6XWwCvzQ5Qeikbsu7fSwva5omw"
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
