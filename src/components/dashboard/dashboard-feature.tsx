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
    "4BMqyBu7HSsCeXtgRrQ56p4qreCXjmeBbnuQMHW9FjeCy7Stqqw2a8rquQzybgu6gm6g2hRcGmShgNor1NXiFJ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aAkWvahaaWq8AmvtZLHZ5oTk6ZitMPAKVpdL62phKRxBNpDt8oikB8v6CZFdFaWx4AVjZJXc4JhyCHmKQ4MTkhs",
  "key1": "uKUnWGASjts1zx31gXdDd3HM6wL6eHdUGtNqRpSfzj32ujThzk1bMEornFhch6jonnneF7u9LJjTMf2CyjbGosp",
  "key2": "5k4kmfdkg9hmWaBouk7tpjRW2zTx1Skc8k269Bi52jJoqJ9FxbMG314A1X77viJMQKFuQccoDHxX7aZ3dPzm1yvv",
  "key3": "T7ZFyz5tGBBdZaNNK6Wuty89vXh3JcRHUCftRx5Lc4avnB8C8cKUkHyq94xxdeSkkpwdsfy5j6eSzXE5uvcziop",
  "key4": "4sM1ZmFtteoy8cMsWZYM1LTV9CFG3nEWr3HhXPPLyng3sRss8TQQrfUwBiqzhJDRsxneDJVdxqghdJCU3Grx6ron",
  "key5": "45FqkEcr9pbtthvXfvnLB9Egc8Hm6hJW5g9Cv2BZkEhw5CYdrgvADqfjTM1h3eh8gApVqSbEawbkzRBLHvBrGwn1",
  "key6": "3gKexeTsp5ZfwmYbU2NJtXgoyZvJWPwMspBBrjNbPENwf4bQuciNPzh6EdroN24FR1v4Qrox6nXKxW6B54bGSr16",
  "key7": "4qV7dPjWcD8xA4SQqgTC95KPHCC72zt8CxYodVUYbURMLjJPBNJwsLAUfgC2Ezktp1XEudkQe1X2UVwBsrGmuqh8",
  "key8": "5yihLQzhMA9a5AP1skyitnPCnNjbBvP7T5gxHaEAD2B4KxFh9PjsKcUc8cqbRuYUWn2xkZ9giYQyGwmGNJNhXobj",
  "key9": "23sVMFprSM6CYJFD6bcrz1MrudjhQbaSQP7Lci7ajDAHjZkZs6TLMdyZUmVji1rponxkfhsp97K2B2sPa3AicC4s",
  "key10": "Tu35xEiQKHLRSy6u467jRRp9EdCJp8pDpgVKMvPee9WGq5Y9ScUkRFCEJjFDyuCNQKo4mQWGbXJrJ3wLxGjzj5c",
  "key11": "5iZdpLLtGfgRFzgrKNP47i1JGXEb75AS5xBqd2LWnQKSVKwDv12Bxjm23yn8qkEQxtZyYijsEDdMRA9W5dwT8CDM",
  "key12": "2FSrgeGcHaNAPUaQLuXMCEL4oxQyAimfkGBZNryR5s8phBwwxUAWJfUQKeVdVZFp5nRcQjQzQnicDmLYjZ3KWSB8",
  "key13": "tqLXSCysSbdKZt24jv1b6Wkmq1X3cs3atikDFADkDvjMDChPQPZ8rZ1Fr6eMmKzFC72LBK4EaKF8cESvjLp8QLZ",
  "key14": "zFt4Tn9Vow62dDbNNAUUrxwWnLb3LT1n61LjbzpSF4aBVoQujRiA9YdGguNhSE52AKbyh1HrYGNRa79PETTxjSL",
  "key15": "574bPonoyZEVZqGcsDmW4xpGG2zEHHzWYwJhuhivfmRVwEaxi59gvpSM26jjmTQtihaLwqUz2pgKfAYaufvJ6TzA",
  "key16": "DKXCMnPewXz7mxyA5b75omBfNU5KRy7G9qsDYbZyBDMvEff8d41aK5iw1B6xEBc1XhxoF88vXTyhjPB7oaUMLeh",
  "key17": "FSyBFQB7mpmnhfbs94ZCWLQiretuCMxkeNHJdjyk732BWQCEGkkYipuAjYcxNVDmFcmVvB6CZqWMmxjXdxfAPBp",
  "key18": "2TzDBQoLZ5SFPKtjWgBHZTg7nAbiNNVaXeTScna389aW4vei4Amnh91MmGDAavSdT2n5kp3hpt7RXzLGSqbysQ2j",
  "key19": "hsnu3EbQrZ684R6kp2iUWGQRfpEyw2nyzSQboZpPSAb5wNAutvRTvR3XdejsbXA2U4Ezz4aHtgLiGeqsK4U9mH5",
  "key20": "26FEWdUMW59BegA6YCCmPScZCRVni73evCTZqpV3qE7QaugVrJTMVZDT1nXiqkL88MjcxFUfqEdosG5kDHL7wT6n",
  "key21": "5DnpG8yffxgeHqcwGatDU7KZbDcQaShrimB7mWLUH3fycBY54B8iXrWsF2Lu1aksD2BDJZ6SXFpSazXkh7nVraFS",
  "key22": "5SchGvuTR1DtWqUhi4WdiDgV3Cfhq5V6JLUeJrZsYPkLP7xKqpbcVnxjKzY8waaiRiyvA5kA6p4JyWr6GBv9ADMh",
  "key23": "3HZCdUXVPy8mJwd658npzCMZFWj9fPX3pEpFERAFMBfmLPqQU61ngyzByPm7XSHZzkH9abdNKrZbKfc2QAZbrtUo",
  "key24": "2uoTtdhmTQgqn4CvtWNYJGDJgPKVB7KJX1pbnNHdNLSeafegJxBNTPJ62Yqgr6QYjMQkH2maCK64ypCvHTq4FsjV",
  "key25": "4nfT4iuipxAEbaUweDKNdfaAKYApov5vcy5wYFwq5UTrLziXX2MTJx3jZxDS26g9zjDdehnTMgiPYsuErQeNWPWj",
  "key26": "5T6wbqxc3mrY8Xj66FvKfq2zkfHqNxWoB2eobGTrvSH7Ndr4GQCTE7juYMQYVpweKfbqbdtGJuE3SwwLVxz6snsp",
  "key27": "3LgGhBKeHvwNfwcajyUdnsjTwrPV5NoYVQfuYKm7ZJECnbQCBFuXcELkhjYhBk2tVuvDGY2AymaPBtPhgfJv2e8t",
  "key28": "4V7KX6bJ71mP82b1xNRaEP2sYcw3AhRVeE4Ld79WnH3EZcBmSyN2a2Bc7Z2jXKaoSVeAS2MBFsHQGPFd32jct1kJ",
  "key29": "4fbuyCXf5NFjPh8Ki8GfdG3eN93yhJCxbEE4wY6gdwX9xQVXHQXxtYq1899fhA11sANNqCe67xcw5rq5igZ5hPYb",
  "key30": "2oeCn3mEa16tnRFiVqGvdB2UsxmHixpkhz7VM8W6FufTVVN3GitnxC3k6yx1eFaJvxqchL5JsxqXdrs1Kd3LsBHn",
  "key31": "VQWdshVbu365qj58DLc4gjDSVLZ1ArRr3dGjzAFe86AVf4JxUNgRUThB345YDwgpBnUVheNgzgf3oR6z7d6p5Si",
  "key32": "5cTj1kFFvPsqbZbQyqJMXKHaSnZq2npjJFGYn1Btpjb7SkrvdWNnWgPrffwv5Ggk8tMrhKjB9N9peodrkKtFeBGU",
  "key33": "5SZyS28YmR81Lr1Y48S5ry3AN1t8mGpyUoibAapYK1RXck7pcY6cEgZU1XACYoFX85jDoe16HDk7L8NS3xzrGLca"
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
