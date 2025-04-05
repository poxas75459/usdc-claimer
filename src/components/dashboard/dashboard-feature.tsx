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
    "5ZrwFJThNnKuQv5SZ9w9TGaMoyQexR4miUiARRFhG4Fvxi54T7NukH3f5qN6rreuVpTUA7m9hSp6kp7qgUVNsyDd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LL4oQFn7P1zMbPtMaTeLmXRRuzeKHv6fTLUxwubhAsns3cp3veRzPfGuF8xrSVYhmfKwdY67VGZeSyHpoPCuusd",
  "key1": "rQx3Ca98s5VoAFu5L38AXVwhNAmWWNcUBrQFdRXoxqHVXFc9UwzuaaTHTm5GQjnBnruYudY6YTXhtMuf9dnMChm",
  "key2": "3CEqm11ba3tmX35wMnwMFs16ybv1VChA53UoUbiQgLzDzUF7Rqg3Danw1wC8UehM1hqTMnkq68gzXpGY7gasATdn",
  "key3": "5a5nFm3zizzuS7g4LExmmtx5zuWbMm9JiFv813Lvfhuk3rFtza5L9LRSm2CvsKJBdm5meDhM9fgnsWLAVAwtyQDp",
  "key4": "2yYHPk3xX2tXiYbMTGEhrhxv9NidgnvsvUDZ5QM5qq4cr4oasNqj4wV9h6qTDFprfN4qnDUNtGAZ3BD11dH7fL22",
  "key5": "3phxWSwv4VJeafSrQZ7DPjeQaPgokGQMN1jycSK1HVuoDG39BTDWUUw2HuFNsPGSCGTLbJ9EdzCvuT92auxN3zF7",
  "key6": "oQVHnnZhs5dye8uk5XS9avThRdDrBFYSffu2nx1P6E3PRvK7ei1mydt771AfbaTB9dRkUCrvfw1YHkuh2mPM3RC",
  "key7": "3wLmQgCWdF6MGaviiWDWJEqYJhLaZ5Kof72mEEjt4X8LiVj9pM3xUSKKRpuT27wk1x3AmELyFXu5t4JJCfFas9P7",
  "key8": "4VuhLWzhErztyaczqiKE1TUD55gVVh2Pk7k3xEmrFBtbZhR1z31WoXmBLTieeAoYysp5hdVwkMcvUL92C16zV6yF",
  "key9": "5Pr6B7BH6Wn7gKukYUh5L48TJYtSz3xRepPhpstwL1Kg3VfGdMm1nrCjkifjvSRMaeYL6bn2vRsoQRgNZ9PwR5k8",
  "key10": "5J7vviZ5RQjLxccXFyg7CuB4zsg2YMbWqmqZbbGgNHQZJGU3rMDTUSGFMgRJCT9Z7weGNy1kjQ5eLcEiGmN6nvnv",
  "key11": "5LjzBPSs5qLHzmWLzKKr2f4ZgNye6TBEnmZhLPbvg4d3P4ntH923wVeFSy9eZSGXLxHMzFRc1UDLtMTYuwgbZ5gn",
  "key12": "ugJD5YgVXr7gbMSfABssngD32UBdEgZjwNgwBbUVGAJ2LodyWDFddAaJnhdik2D55d4Fa9MFMftPEEDihb8CjGR",
  "key13": "qarYTCQLZotyJZtRyYUo7utMDMzPCkpDKb5Fxf9sr3Hnuo7Sw2gmvWps8mRcEyGBexCwa8Y8JDaS6SYGxPqKLfi",
  "key14": "4uJCrpnsJUqxyHgEBNZvKm3HrK8jwfrg5Gi42DD4bbL4LMhYDwCgB86a94LP7GUU38pCukPB5YgMHFcasavU5U8z",
  "key15": "HvRUnAYgqLVL5v36UWncSp2vYgwquGEFfi2DJgrwNgcB5B1Rg9iWp5EGerm7cmcjEeb1pTGSQEt2ux475GBTkaZ",
  "key16": "34cUDSFpgJBxX4BEXimi5LDN9qWDZWZq6DtmSSNJbspbeK7G6stC3zU6EAgeFuq1ikNhgv4i99aA3oRaJ2x67goc",
  "key17": "RF2kGqNGJiHS9UzNxd8FqJpb5k7ZbqJVYfVcWW8YBoy7N1gXUe9ezqeUmHG8VbDLmiAwwL7mKR4Chc34PS71fhJ",
  "key18": "2aBXVqjA273XJ95VuKVVnvtA76fHinPHqX6LKRJbNDAHY2s7DRcuVGL2wQLef83ZPkod7anc7pQzDirUw7KGuC5u",
  "key19": "386tW5mREjyswbmMhpvntyFunf3KFybKJmRpz9Tci3Yehsds3BTe9TbwYSE1E7YfhAy4kryZnHJT55xJCVpDN9Dy",
  "key20": "3RadeKgDZaxqcKKy2XuE9UAYGowLk9d8XNkS4fkSPzD8yso2VNNzE3YErvSVhqPL2cnxigohFpZnyGAfZ6Qgd6Gz",
  "key21": "5XuHmrrn2W7BJZzjeLUhRTxFzzaJeym7CfWDdQtHf4XfzvznLXpdRLCdNBhXcMzJq7AHkpu3Q889DDUGkRWpVyqV",
  "key22": "59dVc7c5kFHiJuq2L1GaYK9j4A8zuQm9r1ZRN3SXcPq49buDYBz4rEEGirnALsw17JDtz2uirM6PZvsobAE6DnUD",
  "key23": "Hdtt8RBpz1sN9gcZb8NFUA54EY4QVCmYLweAVuLrvHkVkccBBuCfZNJfhe3S6utzizQhhFk95rEco7HkGgjUeZQ",
  "key24": "4FskynmLPMpfaKso55WTyxxEF8Mr8oyFTE1h6VhnRLuepsm4RgpWZZ3F3Q9KbHP7xkC11wwtZStsinErB4duekgL",
  "key25": "587Xj3uwcj76Mw5JZyveADTMGHK1Sfw3jpqJjkoBjiAdVttUuppMNc35gBwjVZYy4KxzrUJX8tJViyjGinv4isbz",
  "key26": "4MmVkCP1SD4QMtSYwNteZ7geMSeDw2UhCqD8peEtX49xvbMTjsLpffMrZ1PB6jL1JVfwUyiAtym85KTqWGVyxiLs",
  "key27": "3YBmLz3ZbF1AHwUoErNpAFzu8ZY8M3ZyfTipa1cbS6qiNCfMKrn9iAQcMwVwyJU8DxWVGQ2KCDFtyBb43VQk1mBM",
  "key28": "3m7nd6PDxBbZSZcpFSnRLkiN9Tr84pEv1yJfT3f3dcSUtpysSyUynwvdDPpExdvkpjoG3r4BvNU9AX6Hfc1rcnP9",
  "key29": "2DfteG3etEzSgGwagHhyZ1s8o56QuwcUAvPJPhDVimhjx8vtzNJREdiejUhhPbbx3VM5taUC2sSqsNQ7mztrBqKF",
  "key30": "2dGZSFBbbSNp2AX93WcdnumCXLFBtJaqWKkiyqYetFPRPR3rsZYqT1uaUHDaJsuNPyGfKYtmuPgTBPd8mDaC192Q",
  "key31": "88djoUemQmY3uSM7wGj5Gqg5EDmi1XYDihMR7W9dSCGZNHHS6fD9Ert4jCMCsu2FHY4YZhjy8cHWtWdCf4cPA1e",
  "key32": "51gfn3hgV1DgV86VHG2Ly1krxiMVH5xCkCwYJQPphRcMcDDwKogx3XYxfBwFF9FLnsKPDqsGgz7JZKoHHvoECMYu",
  "key33": "43SpBDSiMmUkxXW4yCYvXM4QssUpyxfdEqSVHMEnQ5j45jqUqgpEw7btyRtKtJUzZVY1JbjmtSpGHRbqKyMeV6Q2",
  "key34": "3xXRKcTDdyac9YRFKbh1jGqGvLKRZhnCaUS6vNvr4DaqyLrT1FsHeMMJEkxsuXXxeR8rhvJ7g7g6kUccs549u4nL",
  "key35": "3sLktN2MN4F4H2Pmi3f3eH1MoFaaymv6pXFknqCNYLN79rb3g22DmQSYvyYoxS6aBzHLRt4fUfgLV8ptkC9ivEAu",
  "key36": "5KuBi4jaD4wWihrL8kRcSjoqDyQ267ktbwTCNA2j2BogDhLKRXG9TPY3Ko8EuXcbJ5x2KwjuQuoawaZatPxSByfa",
  "key37": "56w6xgr19BAJMcmzBr4Nv1izJzRBnandgS22qg6j2M41ZbtVKHin5Urn8UB3XqyZaAa1jSn3AYLe2fwxHzoxkNA1",
  "key38": "65HEfbjzKo9Pw57AtyhxMxE4uXpRENrVvgKwCKYPVmTFeTGjnsY2yz44qJDqtZt1yo8YxjaYEML6iVmTDALPerLy"
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
