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
    "KEVkMTUZZxHrNuveWhDU4EhFFi9su9bbRs7tmXFkZe1XD7eErwQJiMqot6avvLtVw7gQpq3cUfP9umim5hBoDdZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ryCGRQvgWXVoKKg8m5zFAByt14XXS1GQYX2eJsXNXy96nmNHoXzUU2ijwxAKWesr6YTC71kuXxL6keYeFamqpBD",
  "key1": "3JFgThVD8eZ6hZfMutH2j8STjTGNiZyzHrLHVEevSR3iEYHVi7BJ3kcRL7SzVZRpYWXB6FZb47wtHZ7VEmC8jnJw",
  "key2": "2NEKBsecj2ntbChscTPoC8Nk2pS1VCUjkQptEizBGYGeoXyFa3M2qS1TCBpSQanU3MQCAoquubvqEX5jx2FmCnBs",
  "key3": "2gJj3Z9ZHV6FQLzhLaPWnze1mb6r1aXk66UMosRbehusRWu2x1d57n5LB5qb8BrBhL38wxpgYPD7r9TnEnbJ7rYg",
  "key4": "5uj5Mw6jk4fm9UQSniL1Y5nyfaKSVHAwshjcj7D9ekcbjTGbzkJ7F6q8sbHx2wBJicuCqX7mwtykaifi4kCKVX7C",
  "key5": "Zd7RX9mbaKSfMJ8w1f8Z3eeEAXZffg1j963eFfznUms2zX1en7myE4DmQCo4Syd4twp787xvt41q9wxk5FtcQ7t",
  "key6": "2bX69yxjQ1C77DUmXq15YV1zrW8wfjgHAFr88HsZAxhkAECsqFmw7G4goTVzEtAj6648mTaAPoojE3oY51nC9yYy",
  "key7": "LWeFqeDb8YWGx2FQZFERmmLydXk7Wp8wMALQrFHioSY3e8fXrQuY9hiCYUHTLQoMMUwuYecXjqEFLvpEXNjRD3Z",
  "key8": "63XKZA4pw385Vz7RaS7ZnGpCFG2cUWJJMFqkWxZvWK3qDM3eDomwSaPTej4XvtGwzobcAruHLim5Lep63Whr3sGe",
  "key9": "64Aemh7sgf1vuPGVDYFC34gRKpdYpvTzfR5HhMtf71L653CrC77Wrz7JdHKeSwCWD64ga8cc4mtzjVHhuFwp8UpS",
  "key10": "535JVvNC2PRWRX8wvLr23XSZLkvutZnvbARQWYn89b4KnXpmrDfDtKYpLNr5DqcXit7WZ9Ax5z7Tn9PEqc7dGLbQ",
  "key11": "5CJUy7Hj8FitKcMd7HjNEQSyYGn6RJoKQYWqCL6mjCkC86P8LHd128TswaAFdFwEZBEktsrQQy5DYqqpUKuf1LzF",
  "key12": "5LSq6yWnDNJpPEXFsuXcfkDGYDThp38snnErk9un3cHoZx57AC4J9XJwmH9GJkvnPh6DxYpacqXTuuHyeHEHGLG1",
  "key13": "4joiv6AaJDuMVhMhdnaTkHfzRGbvC47FtvqPVqJFm4efKNk18AYbng4mr2dHpvHZQwn7ffgoZpLvRHSBinQZo3MH",
  "key14": "38rNf1qHseC3zKAoQJTxXrgsE86dFeBnxjkmfkZEAQD1G9GaSGetCWJn8cxG8iyvJP3XGGtgqrZmnwdk6QeemhYF",
  "key15": "XSC2GL2e1RoP47PvwCCFejc9Dhp2xB6SnME54LtnDeHo7s1VU8UfqtpzPByqWoDz4yETVtkhgStbLnC3J2eHovT",
  "key16": "4JWPd1CjS7riS1gfvmDRunqYF7yUJTrxbHmP4CyyTRB8yu7uphiBRCatDHhk2jYJAnu2vmHoG2dCYhwhcNT4LcEM",
  "key17": "yPKqogjiMYG5gVy9zyQNzxEMCwypeLVNX1NfPWVsLXXzAYNJ7seZjGXyNMYB892Yygq5gbKHavQvoexVbQpLKEe",
  "key18": "32r3NKswgPfGkW5un9GcCnMLkS6CMtMiAEGQWD48hB9HhjnHUpcjBfDqceWZbXNbnQ7xRq4kekmP5qv6iu4r3MHM",
  "key19": "2nhfp16GwrmSPSpu55Tkf39kJrswqTxtH4SdSgaZQYZnPGGMymCPB9rgfupax3sHQXp5qHEYZH9cMxR7uPws9n2o",
  "key20": "4yB3FkePTpPrCLApDtYjptfFtJMiDewoP2jkdMAzfHJ9HRav3bYbF3B1siu9zZoTxsHACbk98hBdDuHCDcieJbnJ",
  "key21": "56T5A5788BZAVtNa9CXuLnNf4p7PkVbnNUrdbjqC8GWnNWB1S6e55mQjoeJ45znZagAVNoV6YSj1AYqZ5hR4JLor",
  "key22": "531k3rkd3kmgurCDF7tsziSRfkVye6kxZGvfukVcakdMrmvB7NbTsmAtVpPnzpqkeU8QwjkVoHEBTqwR3Pz3gEL3",
  "key23": "2nLhBCBxvdjmxSydfokFyy4jvYcSPcQTg3bBk7L8anmFefXHLg9yMugUstQAWnVEK57DGUGLiQNXnrM9MskVhM2u",
  "key24": "5doypnqmgFDFj5BM45PRWZGJSss4qHJ4WTgBQHDdXnSAMKsC31uJ4eRQ9TwLKZGCPz1oLvhyMhJhYkVxfsnLDGLf",
  "key25": "5zjJXTwzxA4FGKnLPgAdFmbm7nWjgzSvjpMGiheTxn2m9SG4rSmr84HzsVAPzoqe77zzB5NUGTeh9xoWhPV2rkhY",
  "key26": "2Pug2nX31w6SETcybjsYWUkk14MnZq4HHy8uWw4npqfcHNmtLBY2jPCKeQ3anRWvsHMdnj5yxGQ8P2tYjpBCKSML",
  "key27": "5nGDv6Q8LLy1rd46gSSPqFZuGCWNvVDTBAC4QLBq9tpVYTTr435bw3X44nPRzLM9KsVFRcNTz5CTf9g59FQX9iP7",
  "key28": "2aLfd7Xn38Fs2B5pRtaZV4RCKHu8ep1e83Ra5k6tXqgc3mvLQxfSuiKF6DdVSznpbCm5TNsqEekAAXQjG55PJQHi",
  "key29": "5nzQbzZKK89pzNv24BGNMiNNXze56SBP9Z1j6wXqhpD4eg9MscMf68S5hP1Fh6Z36jBpYFsA1c69jneD2ZdSSUY8",
  "key30": "26fdfnXDSrgsw9kgZeon764QqBA7qiSaW4eh54WA9N2Pdsm2RhAp47c3NvHCXnw5HYVAZytcmdVS5iNDeo2AEWLB",
  "key31": "43e8WB4i3W9916WKpALdgqJ9fsza3x6oPiEcJzhFw7Qi281JPs2AAT7Lq8ZMe3zWgWTqoXSaC2WLT3P3kqA9YbZL",
  "key32": "dpMxAVHYnS7HRBhj7aEctrWf1dTBt4JTwBh5PKtFz7Kr97yDtKjvH3ctnfALdrrLip1HSSkrzcJffUqtGSXM4By",
  "key33": "5VhugC4eBKtLwgps2YChj3R7Ah9fzoSJ5h35GazhyRBBeFh3QgroSU6ydEt3Ns4Gi8Kf8HAznJtLj2Fmym26453v",
  "key34": "2ofi7FAmCVfeG3ccqadGA4ntYjtm9f5HNVJ16HuxH9N11RHqpxb6gCSAA8Kd8LxsumpdhexHcj37Qt8qTW3rYfmo",
  "key35": "3GjepMiQjg1gHK2iXVF1udegjjEgbqNvie3rE3y3wSFRrKEDqhkdvCuaVFtk4RVCtM3NLXYQShtfJHXZbxSUSeye",
  "key36": "4LmcAppbRZqy3NoDthJSiNynix5qJQh2AFjmbExxq4yzd3SQq8dpMXLah4u85tkcf62JL5fBNDqZpduQJnit6Hks",
  "key37": "Fiycpf2ez499DiodXgBMUhCD6TtKjz5ug3qztLnmFxbufG9FdgxpaYVjPqRwPHcH7zkdTtRNm1smNty4JDcou1C"
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
