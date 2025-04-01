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
    "4VBY1HQa4MtETDr8EAKGarcEuoosvGWjT5uyeyuQefj6QHYL8DdssPhv3iK2TSie6rTC7yHYzi2n2fEpuW3Q1Uq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hz8cVc5kK6u5wjDbyFAvRHC5LyoHg4kHHD8fvtxXwHn5P88LkFFeRwPBXo7HxXAChDCxwDFXcnq3nYDtzAW21Ws",
  "key1": "JJdeEVirzVkD6oWpz2iCPHGopYcZKqNv3zxHLwJ5w3FwBC3cAy1T5pKMV8kkac8DztDzETZTW1vbcNKWzoMSxGa",
  "key2": "1QuBnWNT4sFoNTfdJSTy5U1ag6KWNzx2ySygZBMxebZLKfw93N21GceiJgEUg9C5cCbo1zjLFjDffBteJcckQra",
  "key3": "59y3kVsmjPbM4cXyueVwyDsZNTCC6Hysxg2xmkc9FwHwfVtanjdu1sDQdkH8meeG3UWrwY7KNTo3bRAv11gPHeKt",
  "key4": "4NPdxjSCco79fFBwPZohaGeaJ922mk2EYVR4Bse7JLXLh4gLgbAyKaLkJvpwUJNDuTPPuXJ2UP7Lb2Cn8AW61eFR",
  "key5": "5UV8Xsj8iMXEneJPsxrYDCuuBjPdBkimWpDjeydoED8usSkWAiZ6ByjZWZLbcH3P5Kpm4tjaocuuhQUf52gWRBqe",
  "key6": "5fNz7iFNiFN2572GLg52vY5cMQ8mCiqDmdMYnUjfQheDYSRwwzh1aCq5v7yu47e8hVYgscYiHxo7U8o7G5syVPUW",
  "key7": "4VVuRRrmhxcEiaeL17Z9QR7qsXwddLh3okuLjHpg72zkHz77rRDxQ37DhZLQqKiW9Ff28XPm3oZQMY4sFTE9rnZL",
  "key8": "2mKc4VMw5fuYjPU3ZJVjYYm1Jjy99htUnD4g2884C1UQHJbFb8iSoiPB3NyuPevcgZ2SFKsBKYEo3iCMXS82pJ8z",
  "key9": "4NAUmcDtKrC34YiJJxHKVFr6NuTsmAJrrgUSLN7XrAwJ5RKdRKPGJKJpSh4N8gaSboxLrJbj7kVge3GD4FFh7nCZ",
  "key10": "rHGC8Z13v8BaZ6iiCfCwRxzcLLZnmXkWiqwreDF3eeK3R6mKdXCvmSUyBDX2H67Fm9mUZY1RJWw1bFYh3H2Wtun",
  "key11": "3hyP2hsoKxT1sf6KVoiiDnvDdpBSyzxRgYrzGhe4eh71ngkLEtfgRDzqz1HCCH85ZsosieWFCQcNtSNx2EX9wAdz",
  "key12": "WZt2py5wN6ScDYfVKJVjnCrowgsUjRvFwxyRGE6dBFSzpgDhorv9Y8RHskvLwCremG42TjnqYhvtmpQifnRYFyM",
  "key13": "28fYFHTPq5haqNjv8Q3yCmV1HqpsToWWuhAgJyXhD4VrpKDppho8VN6MehSsxQvwrrhb6yut2vS3qBQupRAXCJR5",
  "key14": "4JW2Ci4ehQQ8RfwV7fdXM2Vj9giDc5Rozu5dANB25g1Lw1eJDVGnRgvEDr3QCEmR1H2pyf5sytAAm1RECcx5xSq1",
  "key15": "7LvPEA8dwdzky2TCKUak7sK1ugyeLszyUx9jRQjo23BKXhv1rhRfn1W6DsNCBHQBZWPtPNbsqh61uti5YgAVPQA",
  "key16": "4QgHD1KQ1EGLTPHJmQhGzGnsaWw7zp7ciN2V3RmnDdParArKLiP4FY56p8hCoq2zj3aghbL1CtWpmrFuFcYL1Fmk",
  "key17": "aGXMzTnmZhYQgPLBe8DZP2TSmwutsFFTWpY7efPzEU7nn4ZBcoRDpEU1kUFABD5ttpZTQcYZcuo7vYkaDFtt9zz",
  "key18": "62oqd95ebaP6DQJsv5teKHZwZQQjcR1vTVsAUntQwos41Zv8t7RR8UkeiVJ2qEM75TFp83LK4Fm3Qzjfd2pDJN2P",
  "key19": "4FgKtqHVvdfXCioGbJedufm3RMnJPp3EAHFCs9qpP3wuskUANorWGA6PKWaRMhYPPShhTjCaK95YdfjU9K82zde8",
  "key20": "4cjsgw88qthXsPZdC3EMMMhtziXAfPqNYJeXERoZNHgLgrJtMj4ZehguR8Y7ZGvwvntaRZoZaGaN33mVMp1Kv3vW",
  "key21": "3FRPakBtk6uHkMNSPFvoY248PR1SG7af24TdxutTw43o9w7Hdf2dHh62qAiynPzmg5Py2ftEbnHrEueJfnSroaVa",
  "key22": "4nSdeDAvDd68NDnWj6qeArGQJFTjJJoiEaWdb23TEXDR7JEQmah51aCjLGAeU1UMi6ZUTHYY4pxQXq118hPRSpBE",
  "key23": "3fVbpmHqC4Vj3TEpkATCFQs19bqcorf3fzNB4t2BMLXqEeWmDRyxiGFkfVzkahqn8ACmtGmejjbHnfc4NNFmw1XB",
  "key24": "3hJbfXgXjyQqHEmZxNLunk5nZxu8d3PFGVyyroXYvWpfUFBcTrFtR5na4YwCPAEqdr5FXURBG3Xxk462HCeHWDsV",
  "key25": "8SvgaozPojxPwaRXB4DBW4pdd4WJHdSUgm1vrruXBuKRtBXV636A8YfwsXFQdjqno5TEryv3maygjtT7RkQFHhS",
  "key26": "59tCaYTMEcBUPGvtCNZ6zxFG6CSwrMMb8JnwyexMgHDJkNWSgNMYa3MLEWQQrM7RbAG55xyMtAmFQ5Cc7qCct3LX",
  "key27": "SqUFh8bNnpg2srhvHmHLyUk5N4eRkXvLoXRKtSbYN5R2vmJsTxmUe7WSRzb88dE5Q7fSkGua2KD45iZZoxKDjEh",
  "key28": "kC1ippKHrpbvuz7kinRo7A3n4sCnpB9HyKweFbw8Keam2qnoakD8MbmXLGonfxrSG1jmQiiGdagSNxHE1mTbQ19",
  "key29": "5KGidL3pkkJFLYksuwCjvco5GNuSrL7GvSgWfbC4LjsPBqyxHSH6NjEXPoo8nrNTNBy9JDaXjm7TdJDPW4DiNoNZ",
  "key30": "2bBhQPNqe8jCm7Xc3aZnN24Y55ertxmHVCNUFzWQLWNYsZXDqeGofU8e3GqfVArRtj8np6p9e3hXGb3yV8JBff9w",
  "key31": "4D1XfmYjy8tBPJYq8HLZ12zGAHERaF9BDv2NaUHpR2Hfaxq5rtPwDuB9bd8fC7f4srMB5D2Pq7vnKAhM3cQMR3F5",
  "key32": "3hJa89B46PM6wumN7qfhHVYKqG7NcypS42FMfo1Gp6FKY8WDHnpPji7Pwzvb2j6RLLuLMFgertWLnDy4Nu18A1xT",
  "key33": "e9EPbqzZM1zmdYJi9EmxJeY5odxyPhRuHMZUbSHQWRDrBTksrXnPCbsCxS6YHucMEWc4PCPnnAjdrNj84gWSHhF",
  "key34": "36H7rT49A79AdEgjXP9G53g3wUtj82iZh52TqFjn7QuvuceQjwSVioWLBt3x2CCvJqUMjZ8MP5zJnkQ3Nd9DUhTZ",
  "key35": "3CMM6cgMeHFjBqtYGKQeb1SjR7NU4tNYWRutveWUkdRw1nUKW15G5n4ZVPN4LunP7mSPB6vmP2P9HEnqQQHcpwAh"
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
