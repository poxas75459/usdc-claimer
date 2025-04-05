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
    "3vDyH64eoiLxZGu3mYXejkph1BCm8GmNKekLzerC58QbAioY52t5p4iUzhE7SAtmiDwVimrQ2AqjALS2EYPkN1UK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MUtR7D3Kx5mpBR558iUrbPdUwv9JXD86k14DkJcQiTjFfL82anyFYZgGyiy5VpMCeyf41DEHqWedYAaTf7QfrWh",
  "key1": "4i1YeC9o6R81CKBnN5BWmvZMS8APPbX977x9z7pjxUZVxFo95CcHWwapjn5wGfTpG3msv8LQeePzBVc3LHsqa9oM",
  "key2": "55CW2SnM55eR4Mb52CeJzkpMmyf7VWZnPRQgbJz7J1diRbZGf6xCPYzUNH3wVXivV6DGH8RdsoL2WVNRtju1HDdY",
  "key3": "4ZHv94i5cxAnhxFdBBdwY8nB5kzZjjXSGAuZgmQzHyzDFJaXA2VuPjthxDP6o8xJ7Sd5eLTJcDbf8QZ2UmT2bEe1",
  "key4": "5nVP748A3xqBD4jKHEb3E1dNo6zX694AGegJVMPP58oFAtmJmiAm8pYYUSG4u6jKm21AiEjzxpMCWm3NhYtxvvnJ",
  "key5": "38mQgs3Y5FQT1uV8GTGVnw2MJ6G8gi5uNKV3owvq4oCub4vuQth2cERRxmQYaGAEWGkGLiySK8snDcn5JY9B6guF",
  "key6": "5rYmDEebf1cUmXgcUiVZteMtVvELks18tL3PbxMMGLtS7cAcBZJS9tGA8vwpyH5gtVRn7SqDYodEC8eD7ctBy9NU",
  "key7": "BD6Ay3XHjcupeJSkcBnEzLiQBXf92354jamUwudZhLPSWqfKeyRenSoV9ZXVgbmNcaagXJFrHuoywsFJDwXHYit",
  "key8": "63qDMpCCUh2f1MwHSvbRc1bMRBzWfVaZx6tz8TAUVZ9nbiH6eHw3PV3XgjEaPHfiKyhGt3sASAC15nmXkH3tu7yT",
  "key9": "5PZ7wnt95z91cVpW8pdvo1mSBjpQmLMJALDZsji6oLShCMZTznWtpWcvrrLYrNcfBebNAYyzXfFj7Zj98XwfzPUM",
  "key10": "4Y24RksiJhxZCZQ2Qs2KZxVgEyjsYuw85m3874b7Vj1JLs8gY9DyF8ZxPLePNcWLURC7txZRRcQN6eNzY6XgjPBf",
  "key11": "Zm1wDC6ggH4GqaekxT7KR4KJo8Ru7KzUcq7iYKb3yFRjnFycvJEGjAVtvv723GhcFCkrzagM8oX8MdWJajvPQYw",
  "key12": "WpskRkrgEGyv3CGn8j145nQoXBd7NhbNkQtZpRFSDsb3y2UjsWrVmuquSeeqDQtRnWQVRCnMUL2hMZUTvUNbF6H",
  "key13": "2i3EG9b5xwoP2LfqsbQ7A1ptWrF4vdi4XN7myXuzjKjsdJsHdrGrCQsWkn1VDBREP8v79v2eFWMYYr3aXBBtsKwL",
  "key14": "4PgrgcxgMGZpksSfJAjAPphfBbsJjBZ4tEhN6oceQSBXhSt8KxrDBs1TzmCrpoZwrDKyciwHoM9hYjpmkkpX7kET",
  "key15": "3nkkHxzsH9EDMatTyZWrqMQeGjUVfYodFRP1Jqz1qdHTBmndtfzrxQeAme2uGReKaxFWUDP9CVZCbDApRM25KVHG",
  "key16": "4QcuePKha3oeM5sVwpDx6pGLhkyGjVHZqnYjeWpcMNasG1XT9eGazN4ty3eWjgTUS74F9k3QNjqoMxTLDQEYKHN3",
  "key17": "5amDVC2qwGnBtEM5o7su6mUsywuctpQ5smEx2KPkFe81ucaoLSw7YTRq2N34egVsqf9Dg1M4MSCy33E6jVWQ9wdN",
  "key18": "2h4FLgZrsFWBshnraRK5LgiP8my7cwKcDm1RbkjZsRLNUpmhyLyBqQVDSuzCW4DXZScDR9xC9jLb7n2nsSGNP2KF",
  "key19": "3h4CJpe1aBDFPRoBpUKYbcXiAmCABmRCi7iDwQPFeEf23nAnini7NJp6D7V3zcnxza5e81t7LsCXrV9gYcBexFRc",
  "key20": "3B1iJALskBx3uhSRn3S3TbLfuJAd8p7J9xqw3vMnnkSJ4aUJ5jkaGe4QEvVVeotaFdWoQ4gxMekjdoNBvtvEhauA",
  "key21": "422Uu2gMWe1f5Sso9RDBHEeULkoVmSxEpwXUMmFyA4e8xp5A5AXfthE7m8v6s6rX9GQUZ8v3tU5PYvvw71tTqRvo",
  "key22": "2VcJ9ci63pi4DWUdFxXVETTG1QuFo4T5kRX2DTvLsiLCBuDX1TWq1dUDuKwsX3HiMozKce3Whyo1EoTHKGeuA2oh",
  "key23": "qyXUFTFQf38LLQZi2ALCFvqxPdAYR9SpRe77FBxaDBdnzbsA7k8fuAVj1JGhAbWURzt67VDBdRd6cwGaLCm49Aw",
  "key24": "3P6iAPz2jeean4KkC5F8ZrKnMqz5nEKSrCCUJkoSFzfjdkRHUeGc4BhENQjepABUfabZVVp3QxcPBcvSAaYtPjnY",
  "key25": "2LPXy35UFDMS49qV69YnEJWsheDVPnY6SZFEBhgu2UmUmbQted3SeX793AfvUPArsZ98GcuvhMDMApqxQXdn1N3V",
  "key26": "4grocx87VEe8116a6aYGiWm4DY8pbpazcsdQ2iLAVYYR6PPCr6PnppNSo5wmqkVepy5ZzrRBG27TDfxFgTjAUbf2",
  "key27": "4N5UJHaqrfpF7rgWF1DN5ZRFdV8PH1zqaT2FtwcGuZfJS6jAqpsStGwq8HSwzRSXW9kunF7aXJUiProUuvPpSd7C",
  "key28": "5z7PJKovJHs279HXthDfMqC569gYb4mbzG5AKY22CKTjpZKKFxH94ZpDt4p3fsKNPywPnvvLwtgRbWeUS16bsazS",
  "key29": "5CU6haZ4gxqSsg6ENB8mcoTgKajUg2g7PzTbn8NPMybKta3rZvs7MKNUdA1TmcaBmstfSN9niFtXG6pRcPYwNPuA",
  "key30": "55Ty5bcXeDw91v3avnKMxNyv1qeaU46MgsaTstkQLiQAHwVs8WoNFUgpD279BKCYeJfbLRcf8WyWCEvYcSS93BcT",
  "key31": "52uk5exmk6xFHn6ZyDP2RmYVVDvHefNY75rQcadTwpsu19hPi43318fGNjK9zcQDq9eUozPf7vWsNgcc3HpLGrTG",
  "key32": "GfQhTpC8VL5upZffkZvMm9bvyjfEH8h3BKFR1jkysaJu9o5MZ2buBwGCWDLZF2DuwzhpGz32vfU3HrqwUq3RcXX",
  "key33": "2ukfXwsmvM8KC9FjQXEaqKaXtxQ7fgY1SRFkjUuUSZFKkJYcTcKwFByJtGxaeEeHQZnrJ5jjVETdrQdjPBP4TzY6",
  "key34": "28CWTCvUxBcsHFgn8YayMQ7FgXC7VL8QmVDsUSfgeWBnoiczoPuiPUvUY8sj2VTqQ4M6dwAU41aPnpsyj1HENWez",
  "key35": "5hAsE67kZXqtcJ4trAZdErCobj2CPw1hZXyaQF9qJfr3XnaiW8hD4e28S6jtMpcobDKgVjrf1s1p3L3WFHCqkDUx",
  "key36": "5kLrM8NQyWcsRdmZBpTfMs59ALnZQfkcyQWFFgvPntVLoaRNpZUj7UtGPYMgDmK7W3QjzeFi9vD5gyVaFpP8UC6F",
  "key37": "NbVhcT78B7kKCu1G5hhAx7deHjg7MStRCxM52wzExz9odpe5ZVLxTdEwPSBd39WjBG1Tx1toWTZoUDmoPJbhR2a"
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
