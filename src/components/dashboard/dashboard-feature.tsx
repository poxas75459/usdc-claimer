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
    "4XZuPACR8mXjceGtaJhMVuvnP1JgiPdkLTNteYPDL7Rdfq2BsrQPM3Vuc8Cy2uFL2r5ifReKKL5AZjoHpCUECkhc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tGtusnmKgtPQyJix1MB73xtcDJphAQFFfK4caf8nYSJaosDvLXHjhaq91D2oK7cw9qa4Q74yyRWwjmhCwvEvuEr",
  "key1": "opxTSrrA29dnK2Cew5RzHVdm6sUesPHMjbqp1MghaS2nHr7jRHgym84t61dmqXjv1hkDuFmbSDXdhDiKRCo6XGR",
  "key2": "36QU6qAdHcXNCiaiZdeyYj6dQaRwVicw4ByVXUJ2x7pcSByJj1mWZD9uR7kakkY4ysWmazmLutRAbbgMuNJbQ6gB",
  "key3": "4qWZmK93sxwU7ZxsXnhybrrGop8XBn42bWu9zpv15UZ4z3Ug3BrMWRivUStqn7UyZF1ci21ghTegDzyAw751mwhs",
  "key4": "4M6AgkZS52UvGqUCwKmEPexvvAq9iqbbcSCpWGTDM9zUGa8USkH44XrFuNab9B2zYnSXmDJ3zaM7zWfaDGd6wyc6",
  "key5": "3AWsbzPsMRFE32PcLrh7KV8XPsq9UeSHhdquFkPrD4FTccKrPbuXNNFxsTAczJJpffUmuVMDjg628UhxwJtCRXRr",
  "key6": "5hshKZKbUDvndfmhqsNg3mCzoktyBuGhTFpYmdUexap6Vvba64TfxwJYZLMG8m8SByMwtFHmdCV5rgenSaJ85ngm",
  "key7": "3fikwu5fxGP1zzK9fYyJikifwmL5X9nmWGCwAPXAZdG5s9WPkc58g8rpQs7Wr9dG5zkYwp4YkDhN8d2MAtUKN3kR",
  "key8": "2k9UbD13vuLuCEJdauEdtzszPpsKHcLFrrXJc2h4MpopDo23RE58ZqUmZFUnyVLeEzTa9KBufSq3jgNftT7JN1mr",
  "key9": "5sL7qqC7MfKnzGwDt2VTJmthgV3jZfpjG17DD5so7nzjmLzqDT3Biz66ktsBvo8QoTkwBXjocxj58NpeJ2Dk4bAa",
  "key10": "XciJq8rwCU5KeTyuZ41izcvC1QaH48ZTCwTbH3y79h2GowZZ5h72EUZVN7HNJyfjfP77opZ7ULCddR6GSyDsNxj",
  "key11": "2vvUW6arWbCqvnqABzLL9PHn8y97NgmyC5qkRw7zH1Wgiczug3hFMdEdHTqT8Ftv33VVmFRHDUC6fjJXdD9xwRZ9",
  "key12": "3c9tq6NzMsMm68eoQ5oXa7oioyA9XVL6wBiv7tcGfznJsRXn8AncdBqQp8Y23jpKuc3mbg8qdWSjiHP5Kqf3HsYu",
  "key13": "4uTdeQFeYTcTCxLz41ovSqidJVvmesZWoHXuzyFPvQg5sjabmPHjiiGbTPRSgZmtE6QcxoriMdUdXbZbkE71FBQw",
  "key14": "5UNxmyxoSC7mNmH45Q6XVqHQZq7YZfxPUzHsCrPpP78DE1P5yweVjV43U7T51hccvtXQU7DL9RYRcPLwaw3fnb7k",
  "key15": "58ZQZHfbHFJbEbHF35PwfNk9bk3wrEDeMpuVcy18KzfRHunC2VV1F3yQjXx3iXUJiaiqoeupnHVbe5eewWmXwqYe",
  "key16": "4PKbToVkATnJ2mwtBEmu52iVaqMeLH5UsrkcDHXevGfDx7fWeSxoZDyyiaWbYm8G9VzV4yF6jP2NfX7Eath9w4Sg",
  "key17": "56JSZs2Zb3PR64ytXjnBAsAA28mZZB25791Gh1kij4ve59jEbjdGHYQsAzpKzZ2wDv5rHyEj74gPyWUWw1zSYyTo",
  "key18": "5ryj6wTkvPZwS9aBsMnyH1iHQotPfSyR6VTBNjKSZ3pa58XzEvLLo5x5c3LxMyTKAgKwCQ1Q8cGqV42Uzb81WkMV",
  "key19": "5xEErBr3jgpnEcoX28CQra1JnWZxwNg5T4wYQ168qPo8RWCBzGFPFKJGbRXUxJfpXVqHzDUJtQHfEfLteLqXXX9u",
  "key20": "3Xpn8Rpm2dHMuxNKxjABAGLS3pCXB8Cm3CiLhbV5TAateRFqUqZsTq6L4PtRGNsCFmEdTr9ksd5kEcynL3FAqiFc",
  "key21": "2VJgEaJLZyr5squcCFUuadTwbsfCRq9HLpuK1jJfEyS2tnfiyGC46zjhb2rpYof92cNeHZYREt8CZAcQxF3uLF92",
  "key22": "5C6fSeeKNejsbW4mJBzJyUNbaX9bE8vXezyNmr5sTRYF54rtdek9kUGd9RnLTAvyxoyQ5D8DiDrEcAbroEN29i8C",
  "key23": "5s4mXtUR9Ya5Z5amR97BBpVSipG9EgKjFWW1r8fj7SXqd9i5DqRvPSzLuZgrnFMmhavZp6yMrxzypTJui7dEasL4",
  "key24": "3zbmSpN4x5TGF8spMi65kuEw6pYJmMb6NsmjGxeCJmdVGxa1DYJdby8ycDyLHmcDuYxEiUcRD3NbJ22GUN3oHtai",
  "key25": "3ucY9pZ3gaU3zSmpBGCKuJz9pktd9DebXdmyrHonS2jTKcxgpYSTw9v9FiXKZhezBMLsiLeqXt5JCEKoWaNjR4eS",
  "key26": "5WNdb1mFBPEdKRfwVJ2HFNuV834dyXk5q1ApjhuVU8RJT5zLrCqYyKBrX9WQeCyVtMr6GvhYG6BjcEJYMWFKbsTQ",
  "key27": "5pu1ieuXauw2sx1WDbYToTWcymcvn5Yvm6yCwEq1gcT3QxPRmgr83JmP7Eb9JeNVbPd7RBMdwmqHg9jLfCx8bZa4",
  "key28": "3uqybVjmrkDo6Y851ksVaK9iUywhJT5A67GRxuv8BNkLnR3Gef1CJ7vyid7kD4eEgMnrLQ6H7iwSiLDDffDk8Bui",
  "key29": "3FN84HkJ2cs7AXWcQ6veVrS7F4iP5eyhUzbVMg8c9NxcpeYY6AyrjF8QYwskpjZtDWYSX4qAHkyzJzHqgHKszcHu",
  "key30": "KtJM47Rg8FtzZcukosVLq7DE14Dh8X7U6FGM6sge5tEG5jsXhttLhp1ihyXnRywDTRbPhkRBKgYB5tb7npzZuXV",
  "key31": "3R3ZLAPZkbqp456jGnS8VfAk96QTAB6gB4YHHzP2B8yEvq4W7VRNXyTFgkMWYBqBsBQAa7t8osf3jbxjDYGQWWTs"
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
