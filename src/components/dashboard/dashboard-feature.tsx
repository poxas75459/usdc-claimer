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
    "ECrQKqiSQsf28RV4XUC1aRjnxXH71jfFp8Ht6HxtkKx2NyNRV9t4YJLA1W3NUN8oECjsND8QBPpiBLiTT9ruGnn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hLyW42Hjpk7SP9ecxvgVmupS6MTDJkTWMg7QHzCndSErbsMueFMAQG835qNUVPXb9HH8TvA7vyoFba5X8ZpoMyw",
  "key1": "2pnQq4avrFBiXZZ6T4uqFB1PsfPNLcTqwwNxNUiQZGHhHM9Xe8AewMWntbXFKR2jqYsoHxRJSaKPKY5seHGzpJei",
  "key2": "3wmDiucZrfPMU3xbABNYjyq1UKiC56mU4BaA3mGSaPd5dEiU4cULAsR5WBJ2YHjUZq9zXGA1GLqVe8FumStd8XwP",
  "key3": "3wPdC7T3BzfHKJXT1gsn6nS23rJ6qFT9pKgQyk3Ean4whTz81Ms6rpT7NHkwUjk55inP2q6y9jdkGeNjmSHNhGM6",
  "key4": "4dyVGh2bDQPqMcsi9XMHCjfJNnsQfHWZCQZBB1X2kTqydJeNQziTAzLi3nKTBpHfMCcpiUHyajqmo92MepP44XAR",
  "key5": "4Be75CLPmfgtGmr1gCWTy4ji3Tve82EPtwcm9W4xaePSmB99j9HsyfguXBaBarjypCUYrN1YSoXoAPo2vWHm8qZL",
  "key6": "5CrmJsfc1VaEr6suV88sbZE65mMAq1EBtHoxjf5xUvfPNcqsXUF4nyBrFMC4JeXZ7MEhae4pYuBCvXwuuWXMbMfw",
  "key7": "23nYN6c74qSB3e51rpXFfUXbr6GTDmLT4wJTZ3r1y5y3M59RAVMkaSa1nc1rQ6naxzEZvdPCNy2H2grStxYKAPmV",
  "key8": "qjBWXm4Nb8tkxFAJF641nRTZvxNjk2KAvYWLykdhY55MJheixFfVKeZEeMVHMSt34yvU2sMuPDtYG1zSR9HtCbZ",
  "key9": "3XdCjhiRxNWPSGoUEP2S2RCffsbDePMFabdk1Pih26Ysej31iKcqMNn6crhe9ehyYo1yyZLokYhh23THxGYeFtd9",
  "key10": "4oQtkkHwhWuqhcomtoygPFxZ2SxMgDY4j7nMotjPsoDMTty5izG58UJY2ZFrYhCVV4x4ff8RFPXyNQamDGMxQgxr",
  "key11": "2GURP98zsUM4KtCvSLTdWwsxsNHTWnZw4zSVrD7LoAioptda4JiUPTWHNGwgTrPwHZA6crompnsnHqrqkP8HMuTL",
  "key12": "2kAueL9qhE7F1NpFAnSp7eV4dYtNKJ6JKodAsuXSEzY4tdGmjhRBGfsyHS5Z745C78nWyqaDtvzGaE3hG9sz8zrN",
  "key13": "3aLSZpoLig1j45JMVdkj8mSaMYVAxpfACcLqE8k91BT8qrDPS267YMadTizjvJ6dPCwupwVWdo3iD3dzmU6hDQYL",
  "key14": "5fjLr76oj68mJeqhS36vTVYcSzFTQwFCJnMSf8DZdM3PXqeDoG3F7v4EW5WZqazEyG71jddbbAQpYP1Tvoitr7XD",
  "key15": "55L261SoHcvdmxPBDnh2YftMjzJ2YccoHKU7vrVWiUZQnizC7chGqNjmxkSLH2ozcyaHTtrVhwoLGZBj5CRd2kyt",
  "key16": "3K79qk5gq7wAXY2T2jzMy3QcwYEXF2kvhm8qvXzyFrCEKhBBhKWZUaivtFtTi3oWtysvuRWEngprihksUUkhM8G2",
  "key17": "LBsAtvZLmYQB68uXa698Lpgci2AKGhnQbfdQiJLABiGDRc4yLHg6KP2vxSUt7gGQDejXbYmHhvBwggr1V2a5v3K",
  "key18": "PGmxZstK8aqB9WhLmFDUJuyJRr8ufHQi7aguxemUTyjfWoFXnhkaxikGiyYYabUxQM46raqtBjNZhtQjsrfecch",
  "key19": "2J2g2svsCJP6qYEB4m4UBghVstDhxKKmdJ7szBcEQndRuB1FA8L4BZeRCaxj8625JppKLfL5CXZUC7UexjeMrLBf",
  "key20": "5RaEPCqLBAi7Lo8iVHZE5szjXp41sgco5Vp1HfuR3h95w5v8antRsDvBJWD7PYDLKsvTRTrAjjwucye36k6Nz714",
  "key21": "56C3GGD3hPNoeECbaabwDpphgLrUbdGLP2b9AFFbZJ1G5kYpYCYaKg8SGtpE2M6C8eGJk724CsrKF5VgG7rDYVx6",
  "key22": "2rLv4bjcWccEDzDT4Q28HsXRBpFSjpVHS4ZBH829JfbGjBMg8RitsH8h6d6EMCoRz8DnJBdm7R5sPL5cbYP8VwQZ",
  "key23": "5ZbDHqMjHJRdmFGY7sKCm7S5KTix9V9ZywpQV8iYZUqGhXpcpxNCBs8a5CKoMj3xzoeZrNYuw4mofCz9KamM8yVa",
  "key24": "bnkJLjw9M4Rg3tKmxahcSmtQpEnwngFTdLaYSiFeu5maU9LEKgmZ8ELkpd376NtVmeDEpYYJxaM9aMHR6RYU5ng",
  "key25": "53z3L5pEaGYYuDHbqyxGwfP3uWfRJQBhwMy49nqjgkWPXFg7VNMwFQACvf9jfza76ZPXP8z9txW1cx1Uww4FH3R2",
  "key26": "fexmegwKYowrxcQCsUJopjrtTiwwbcVxHMSd8emaau4aBBzrp5eq7QJNrhP6587UoJoe5C85XDgLFZTxryJVocL",
  "key27": "uJmgs8tnz8t9nhKWjN8nrXzC1dhNst5GiNCTqEGDRy333knDUmrhQJ4zVF3w3fkK6oQUFRp38HcpkUv1CtGQdZv",
  "key28": "496MqqPfjk1pkThhF2zDep3xSWnydRh1hkoiPZNyYN4yHzgbcG3hrSHrh2ZWYVZJNjnPdHzfkk3pb9VLJawpt4BF",
  "key29": "2shX1ZmnMouAPB4uq1z8rNgzHvgcSMgsWuHZovU7UEBrZ1xdNSxtHbu7QkmizCxhhDLCg5FxRFVmqa7MT7kxmKFd",
  "key30": "34iZC8PA9WLm6cgZo8A4cVqCDP2w19u5mmeC7ERUVdJdJgxMGen9AdUP5CQKQPb2NnRVvKdubMjRw6tq49UrXAEQ",
  "key31": "4PGLykMqoMNpKPEngUfytE83PYzg85zvNjZVDzMHv4scRpkzHi95YUn3zVy3X2cUJFfh9m3bd3oDkxsczXXkQ6eo",
  "key32": "3VSTMXnoEPjzkf71M1q9RSJgXB51jbRRHG7MJVbo4D7ZfvBfwsUs1rCXhYHnzjMzkYoNsDmdCsgwDtfr2Vjrg8FF"
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
