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
    "8FaqNFYwJDje5KtDvZtD6Ury6ApHgHuTbkPpuCBiDZELSHYYwXSrQWVVdYWSEiY1zC6gySey3ypJw1WCMWTM1ba"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gZFgcg1WHcdWbioJijZ755q613EQd2QtkNwFWuCweJSgLmWw6UiycCPB4nroge5mRAaSoDfgZF8b3x1V2fgBbFf",
  "key1": "3QiVMKoScejn4A5CBiQsd2tCMkHj7DJX3diWeoFeW5yeEr55Mg2QMgy4joJjyuaoBBbT7Z7hEKfkDJ3znJUYesvZ",
  "key2": "4Un3BQAXuQwtbzLoRyMRQmUWUVzk1eM7ZXmxSUUizHwkibhBCeyrM3jKqXgo9Em1rziQJToXhxRa2Be3n7LeYhfA",
  "key3": "5N8bqo7wENJkezrqNb3jq2Y9nvpPdrJQG6KiJFVj9TAmSUfZoCw6Sr4CPXVB3aumSGTciwcZKxUERjoBF18sPV4H",
  "key4": "cRR8iokBpt2i5hu47Bnsvp3fcDUU9XWJ1RZeAtoncDcVbbWyK9nrrXES3myxJ4ukEWRJFJ4bcrckmw4sCXXqd4y",
  "key5": "647AMGUxtdJ1Btu6TfmZNHAUHXXmDuNKVqPeGrbACi9NFXwqPSrphQCFyXam3E1kdVkS2u2Uvpsg8zFTMpvTn7ee",
  "key6": "cYb31VLiexvmwBiPGc9ivYpGk154Eq1i4mw4jF1vmT9dBAxQj8z65MrRrN6eSM3ZTzqUnMUHPM1SPdcFD2QvuYS",
  "key7": "5hKed79SsKQvjZ673dtSeNAFG9q7szzbsWU31mbbtYTAb2rhcBQtPXcMkVmH52sjCeJqm44XUdGb1Mmpz6h4jnqc",
  "key8": "AeuNpUbXhn2JB2sqZZAEaCzptCETtrYjJDXDVpNz12eKd99xrkRZBwvJAyNcsCvU4HVDWTzmrdsgUfFPzUei7ML",
  "key9": "fE6kMKfPg4zTz5uEBMiMg5Ptwh742EBabJLQ6Qm2Vy3pYLRMk9viztBnu8g6hpSJRCXQELxNyrkrqQn2pFy9RuX",
  "key10": "4TTh9PtiQxqwGMbUGtKTqcwiFaBXpbs45WMf6zJwVVXtPWr1tXCQQ9LVHXsqpXCdfvhAzcAMNvWfcs59wFgocCa9",
  "key11": "2GpVYDJ1sddw4gHWtnBuN4YgJFN9JBTXJSCfvfe1EvaiyJAaCWsEuj1Fsf1FFpX8KdQ52PLFqRpj6zDJf1jyFadg",
  "key12": "5BynvHG2qK2hUeDC2kSqJjPXL7jtBWqPP3GYYKwD4yNddyJ1hMpTCvFi2RGVqxWENM4gvuefsqq3ahg99Cxisa9F",
  "key13": "3ADjnDut1ySmhjEy2mKNoXnVachay5Sc6xJWhoHfKRZkic2e7ZDYNJXovYVyNucbJ3D6T8qdFgF9W8np339RzHe2",
  "key14": "36ovShC8Q679wpV4WwGJqpL7Xum9VaMLsRDhY1EcZTKND96DRAG8CxkKi3SgbvJh7HQMGCne129ZnWopmq2eNAUB",
  "key15": "5Dkxr9PXdL9K7aEQe7Xc8TYangDboRG4kuNxnj1ZTyCnECSBnmcQXnP7A3AMCA5Fc3hfBPASVLWh8ySEwo9RNw7",
  "key16": "2sanVboUcpxbJMXc1x4Xw1Py8vedApdkxeWvNPBvgeJ5xrGsRb2J54pg6qSF8m1evGrZZ758RihmurQFeHjLkNiN",
  "key17": "2ceKA6ModgrnDiL6YmHuRe5AAKvyk5MMEEVpVMqQGKHPWTSvTDgy8H7zxg9h5RVtkcKFTUBvaW9ywe4AcmpJD85v",
  "key18": "3D8Njybo5HDDCia2qZ3sveDkmjronKHDDc4HwDNMAM2R9YysYi7z2ogAEth8zYVj7TddysFPpBbrHWiYjfrpSyYA",
  "key19": "2DN7f6DYQzv7MnobGdyobC1K5xTZRpw7iNxvcGNZrQvgPxSQv9aYE3ywhSdv3P3cjbfHeGSbeBANsQ8QsJUBiVsb",
  "key20": "4DFYqpYEz6kbuZnBHib3xW8AwTctNuNdxcUumWTwtVxb3RK9xua2wEkmwUak4SP34G1UN5EKmSn7yxGFhM62HKcY",
  "key21": "d9M9N4UGknQZtBNN6rqzQsusMrj2UWusB6FYb6StYfNQCDR9i3LQABCWmsjbgKxeN9mMoMyJQAPqMYpGMGH7dBE",
  "key22": "3pKTqWCvqmKKGAizNRpsvjh2jCnm8vUvzG4HuwUgD96nfjfwkiV8TZDePQhDcfZ8wE2vqD6n7kJ3bhTw7FGXnNt9",
  "key23": "3PmjBgPxRTbvBjY7XjfyfWxy9zjYqCowJACzupPyQVbdSRAzpTdFnWL9mJTFTrXsWiweixXF6FPijn1r3qFeGBji",
  "key24": "2azBYBSf2eVNexC5zQLLgke8s6WsyDpg1QdBCVCax963NzkLpsMaYaT45AJ5wTCYKJYViVHm9r2BujMDJgLQLgyu",
  "key25": "4jsfjwHvFhCxsXost8nQRgd37SjmVo8ZdnxaXvFmCk5tvwZUTLP5rmQQtpgEYbvgsbon8hcHBAWTwyPL1gVDD77X",
  "key26": "61QaLSiCdH6w7MUAAcsdTEwQ1PefXtQKQTnd9Lwj4eJTXieFtNcuqA6pScqFo1Cu7qqxdKabSta9REEpzs12zEeN",
  "key27": "3N2fvtWLS1KY2wBybmPaFJ8iuM1cG6eDBEDxFaVCNjrPGxwtt8ZJ2MbH2GCjAFXCeLxoKPKf2pRgMbjwmPR6zv8i"
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
