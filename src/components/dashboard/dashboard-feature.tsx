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
    "3ZWDeEo2tkNumY1BURLELMY4rHsU8ronXwn6VsmzcECJpPw7LTXQypwSmnrJZLLDHSYMGne6dXHZC7JYvbXPiVYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mkMG4jyqt62YZocWimNhBWucfrbzDwzfwZbqSzoFnyk3HZ7D7zAaJVTb8QJioSsX8xAh5LQmEYJESdjeA6sgwrE",
  "key1": "4cA88NU8j7jjHZvENabqRFyB5qMWKXNdARt5L3NxdX7hpCUB4GEaRiLT4zihVFykf6uTXBrDafMp19PQhtdWDXjJ",
  "key2": "5WJACkBmeTbnBdm4BoEDU1wAst7gmwyAmLuSLLLguWRpYTgB5Sk7NQmfuf4NVBddPtG9xyUkuhzrmRfgSyUvY6hy",
  "key3": "61yEdKigpfzh8ZBXWgUBvdYY92yssyBSfHPfNeECMGv9jj1Rn11saKWUQhf6paa9qSTY35w7QDKQ7ePz2ZHPejMR",
  "key4": "3dDTyBTbpNSjzZ8WKLLRa3DWgNvYF3PrmQ9J9U1V1VoPqnXPQy8brQfEt3qx76gTTcxQ1xKS5uLaW9sUzfGWNojT",
  "key5": "TFwa4J9rFEsw4DSHtqC3P3v3EX5gMCmf2igWHT3yEqZG11a6emJqQnWRE9We2BD3eJiEGHX24k2zVVa5B7yCePb",
  "key6": "4Kymg2P8Ra4RSsiDfRnswCUNCipn76j1h46FxjXSkBRNJFKTk1XAazfJVxptZtAdexNvySyNzLcbnxaVtTV3rhGR",
  "key7": "41gQHRggt2LX7pGe7fB6P41zoECTvKTuch35rZ9wRukV6KjNkNpE9FDwqvYECw4VZgyppNMdqyTyU3uE41qqReSN",
  "key8": "4Myu4osfQb8TPvPPTKS72hXR2aPHfwFwazidd5o2sPmovjJT2JrpacwpLqyWLFboFNCDhTUuV24rP4qjTKcNNhXZ",
  "key9": "3iv8rAoNgrpN6XibytWCQRT74NAiX434maS3Htrzwpp73YchXmP5heQYtFDqJ4AUjYN8MsGdRYGCsGczc99Pm2vn",
  "key10": "4JiBz4FUSz8GVa6fAgjSRCM8uhd9imFSnJkMvNKPYU6gMCLN1ukTsNF1Et7Yh1QHFryZE5FtnL8FPtq6jve4QJfu",
  "key11": "58QXm7K48HHA59Yz1u9ptzvnwXqS8f7pDsfmhbeQG3ZVWFm3usidZpqgtCCAQiHW87KcY55q6zGtSb5Dy6RpUVXu",
  "key12": "3JDm6C6pLTAc2K2opwfKBP1ZenbJjL24JhU5Uf9mKorzHHim9RZz9cjt5M8qwVxabL3inYg4Wr7L6QUhSNoHti7G",
  "key13": "4EZ2DVXp2RbDCTXw2utitLg3UBVCe3JBF1n7hvjn45vXd6fB4tdwKQX5N3wXouLTfEC1Z2S6JGCn3CKd9niGbeaM",
  "key14": "7Wa9Z6EDwCQ5hUmUcxdvfscRpyKG2j2VTZyKNbAzJGDoxZTD1NtiDdUzDu5qLVKMcK7JgT7szEsbFTE82H3Wgnw",
  "key15": "2sChDSueanzyCc4KcbhfqDcb1NVBxWBZsPzDhzitQeUsxCizMcMggNdVsVsEcfjhduGDbUNpgbUbsPw7w2S8Nf57",
  "key16": "2Kbx7Q3ozicWUF38fLfGqneBnwvcgpv47tv6hC1actj3QVCQz858VzrjyfhzYikgHTLioHVkKEy3PitKjw36LpM3",
  "key17": "5HPeGNZ9cTHiWV9ufDnUAZiBcYsea5x1B9wDz9mNTRmBaaUfXUUcFeF6ntHoV3FVUTQ3Szz3CtgwrPaB9igZfZ6h",
  "key18": "2kMFMzsMkX1xAZ3LxTr9D7UsoQqFL44yop6NyiLpyhkjCx66M66yQbXwMQbs1AkGu9koDvMwVJdiGwHjDoFFxd4g",
  "key19": "3yhDsRwwaadi4C61MNbSZhaKekcsV1LJ25kdgrxEjiyLtT3eFSbsaEfRS4K64bC7fqYyyfhmRYUwf5MCepgP6CXS",
  "key20": "2xg139eiS1Qx66rUFmTPxRhJryLM7Uh2qc2kbB8sr44VBbH7o2jebeJ8CSXx8UdSEZFKV9b85KxLAyFTybDp2yA7",
  "key21": "4KDfk8mNxyfBW1HAhmc2LcWX35UAe5HvYtU9mLPDKXz7o6iqxKvMPz2enCbkrQ8cxVx36zP5Ps9fyNeRBwnUSW1o",
  "key22": "38TaXeMNcNsAhq8MLyvNxLmFXoB7iUzC9nMKhnCUNUhQryoqs66L5KveHywCy598kxLKMVYEw3MpTDDpPTw5JkVd",
  "key23": "zsZtrPfax93P6mSSyCAYmb5Pam4MgqKNKpBMgxWq3znLb8Q1ymHM8xUGAJNw6k5BXGhWhQiVWVcvHczPmYi6kmf",
  "key24": "FPL4Ah4PT7rYKUhfwrHx23o7s4wDJ9hz6EwrDyaaKhw8anzMce2qh2w2G5wahAU1jYgH9QQoWennEW3ZhnKr2wo",
  "key25": "3uZ39v2MXCHSEGcyXrxoe9PUvPNLQWCYkvy8KW69hvKwN57dBkesRp2QTpS9HkDzwV627AqHaWcZSVGHm9NbRvYk",
  "key26": "5EkVtb3vfgBDAsduVroK47sy2zAcszGGjHw2VFrvK81ScLv4RULPMcEnzRmZSCV9NLsukp9tBVxoo8UL43gwihsv",
  "key27": "5vTUeRhKfFb24s8Tfv9GemFY1n6fVhnMRxEg2YBaB5m8hBj7iJ6y1bL7NVowxhjTVFtiJ4CMQWPTdscm7K4ybsu7",
  "key28": "3YPGkHEezCMWGRDF5Xa4oXRhmqo29n1Kaj7UzDuwsq3Faud3PWGGPnfeFidufbHwX2BYVTELwze7tpAjaJV47ZYM",
  "key29": "4P7oE2poAsnm5oFzExKw5rDfqRgrrscyHgGt6cYedSoQXraa9d9s9sLrLXTwDGvk7o7NLCtZUL9m6i8xpoxhoWpj",
  "key30": "3oMaZKcqoiUya6DqASukJz5ET42xPiZ6rPevq6qv8bMgDY7AXXGeYsCD2S7ZmdJoCL1bwsxwuxZvMMnWRxa85Jrc",
  "key31": "59GhranRWAkYLjSd97QkQDeV6DapA3xfr8kJJgoNvNpqncdhGAFCwXmoQwp5Lyy7Jmzb7R4XJGJkD526n31NHig8",
  "key32": "2pCXBbByEnZHrFzhDh7XsJWMq5Z45Sy9jSHKYizwWQt27tyQriNfuRZWwVTdfd7ALB8XCJPkK1dD3rCvKybAxLDo",
  "key33": "32TQEaDa4akhiHLPs51cbZVJoU2mjJLfg5fErZRqGsZ6oTgMRL9HGCgyZaZ2eNtdhHNrogU7ytPyohBj8Vx8QUuS",
  "key34": "4bcGVab3xPzTxkTX2iJWziFeS1vsMTcGF6eJKsvbKtKTq4PQpYRMLUi3JBqRTco9tWP9Aajz19UgEqsQyNcfJrBg",
  "key35": "vaBm2k8sjVfAVkFcRod7NkGXeEnoyeF31DEy5z97eyBAGiXYhJjuGb5DQCw8SWKwQG5azxwQAFEN3DrfYPsQxYx",
  "key36": "3Z7B87nBUVedqb8y1cZtcMKPVMWnWVSUKX6YvSD6RU3acLE36z1bUU48enHNXFgTaZmdRvUKV7NkaXmFvT85TLdB",
  "key37": "21HCPvm88Gbs9TVWan1X4zHSL3JX6mSyzPBjTUuw1ygC4Q67KPwz9mAw1Y3XFiZJSqN2FzHSBpvnwmJL2oePqVqW",
  "key38": "f22yGWXDMF6DJsakhURKBFmvXQdcKtVwNM4Chz9VRuPQx1stYQkPcvg9vqYGetDTXKsAfgSXzrWn5jD9oNda87Y",
  "key39": "35nJx332UmpDujzTpWhwP25rALaM8CEtVkDXaMx5otEauqyYt984mkWqKishFPqWcyj264k9FzodC8hJ129fQRQ9"
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
