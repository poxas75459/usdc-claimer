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
    "tyLocC9e3SsY9Ue7DtcVUESwGFVmNxbfXp7tmDqAdHJA3BP6FEmJvojXwe8CiQWh6EZS7FqwFfD9Md83mNETd1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FCVPwkD6h2StcwM2EzrGq9iZ6hZfhYewLRJjgAxtreEdrtXaKJrXiJujvvk9QpYBh4FiCZxCdV1fS9N8kNL5Amv",
  "key1": "4uCnw66QAkgbr9akE6boL61zsasuKHX8oaNJEVUgDyEqH3HMX4thN3ahYWBRCjnkxts6y4g1Eh583BnAFTz91gvu",
  "key2": "5pBHN8Fu8uWJMh1zo3KfWJ1zk1tzLX3wAH98yayCopKdpZV6j724Hd1itxpRzjaPWPke1jZy2TygvjBXX9kPzpX7",
  "key3": "5jQCDLF7iQbLvFPQ6PoPLMLfijg5aYi7mQYQdMCaAEwkK21kaqjdAdYmXJ2F7CJbnkonfsdCmfmMCPktnT4btozF",
  "key4": "5sFsJHnHta1vXKkaFmZxNvhKbo5PXst3ETT1BtHgnABXcgzmibWqnYhpttoDvWjn5ypFq5fyGBoBoEQ8HQH3AaoS",
  "key5": "3tTmTKTN2fC6ELKHQsujvDaae2Kn7Xywq1pRajwP64e2xwoKaa4FmgcLMMcBKSUA8TtFcQKbPu1wD4RmGDb6JMrz",
  "key6": "2RRS6JL3drEygs7zUJkvubVLNDEJzb4qC2As9CAkjHnKo7hcBHWqDNsjUh7Aheyz9F29YT3b5jJo1zfo8EfTvdwp",
  "key7": "2etHtDvURLGs6SXfzhkLSsboBAqsGMCA9KyYXeQ9LugtfK2pZrzVT2MQ9kWWBc1TeW8Ph3T7XtDJZnvSpyzDRN9g",
  "key8": "4qdfHe1skcPMXDRhsGuAv77rTgiuWQbqHE1hiMSAQ7aUdWHHmU55g4CQ6Bp86wCqerQB9g5wJfQGgvmTabpF5kQC",
  "key9": "2PDgttLNzfyY7EMKd4rxYtEZEHryrUb1WHaZ3LSzLFv4QqywPd4fVYkY7G1wPr26jwkRrsGy1J2K2PDkEgJxpBha",
  "key10": "3hvTqwf3LSsY1KVx53DYF2y2NSD8ogFsxtq8BXBbypAXdGDt8rY98ynNzE4zAiLAbB2xw95XyNpFuQ4Z9yiGXe6V",
  "key11": "5NmSWh51iphyWRVjrtP8UcH2HUr79rYY9u27DbzCETXZttWSGhqnk8PGjNr4jdbEYRAFGv94kDcjtPw6BVFYKPSk",
  "key12": "98H9tRnVxGrYNYhqKxQYTmjkozWCQJXLMQtXooh7NMip27ZLQH3hEGcLGQkMf1jYeWwoMrsjz9AchVx6HukS4TZ",
  "key13": "33My6fXJqTgJgFhKUj25npQpyHsLYJQLXEBSfuymFxG85ajDnpamh2HtHocte5Lbu2ToRBUpUB1yzUiZrNKbApf1",
  "key14": "4sqRZGQwh2KEuEue2FTPAN3RBs6LvBVSqC1zzXVdJqgDVLzWFE2VBvwBEXfNvzjSoSTLgUndoN4mZsoWmbAif5f4",
  "key15": "5bK98WmZV8A1vjRMYS3Tws9iyMXjY9zae7VTHjSQtWPvGeEYQtZrauVPS6SK1NKprjHNg2VeARZhHQroeE8T31bm",
  "key16": "5Qfe9HNaxHWwnVvPTHiBiJUkqpLKH62KcizoL5mj3d7FF3QbTfizKR5dXnfXE8xP4GspHDDF6tE16pHEqD95QaZg",
  "key17": "3TwrjpbkVaiY1LxfsaA2zHqYNuo4RoFw7vyszcFYWBZtua7pemtHsXj9oPi4sWLF4mzV6PQM9bimMLxvGSBmZG2G",
  "key18": "qsExjMAtYpRG9eT6EJaxPZt2wgNAvJv66PWtJ49ARiKS33Gzd6AmpGCW2hf36cZKqVWqZUu8twyQjwRKNLujjei",
  "key19": "qgLDFckDv2To3CZqSL9CHPbMiQN9tTzpY8QuRkUZr3TAVkjQhi1gPD9VJ43C7sgmCQmkvZT9s9kanBsyX7rb79o",
  "key20": "5r2un3JRurQo4AGZre2fDfF1HcWQrpo1xxEx73UMLRnwKwNcCpjrBfwmEG1ZjpEy3dFJ7g2V6DBu2QLNiiMvcqhN",
  "key21": "48PzJFQokm92cEgDnrVDYqKD5TjsQxUnkYLm6opf4w9tgeyx4B5Pw92JcFGHgYBoRh4F9JWDbFM8czv7tZUGK3QA",
  "key22": "4geYedBgwqiB5uurCWYkpMixxNxNP45SpA1PEMbJLYoNi2ZKFVnzyf2rs2n9Tcw9PXe4wFEN3Zy4B3s3mgvJoH44",
  "key23": "5fFZapw8ek26LDNhsgCydva82CQpZYBGDqGBZkUkZHzGqhRH8VfEoVnuon7F3UveVBHq9hkUwtREEised7fKfsqq",
  "key24": "5h3P1nrFfC6jq5WRaLobKGzGSwNays969KMAgmCvYWADQNReohd2nz3dwsSgzKHxBdE9YhRpz8RChTDgNtvxNZuf",
  "key25": "2HSGWFgL1MSL5KKtVSo6gkdgRhge1isqFbTuzdeXp1sC7wy5dKanbSNVFXK8qiWjbYfcuGmoBWwsU48pq7we8bZj",
  "key26": "3Fw1bq1DvRaWR3UvRU5BrK3HxB81VKBR5ryWcVEKqYd71YfTkTXxhoJmZCsHrxHA3Yxk5WSqzQVKY4CgQRCo6WTD",
  "key27": "4Mb57nA4RAFCpWda4YZ1RLi7RzLbpmsXJRb6HAExvRewDZwUh6EqzMbzu73mMJRSJpjayDB5vEbv93PVmpvFoCy6",
  "key28": "47JucxUJmMk2wdN6c4rJG287CX2DTEvrUSB5GjL1fPhqbu9W74Mrx15z9XWjcWrNPQSj9NnigP8vrWP2abq7Nody",
  "key29": "zjXDPVoSVdgSjuZB2pkXC3Mix3rbPtZYSrDRAQoKugh3bGEJc6gMBGMmNNYiKtpgSF7uRHfmBBQKv5Ds9SxDY8c",
  "key30": "5PYdvmk9Y4TmJcD8N2yPh7MKH7Zp8dZiLnRkqVZdfUkxVHgAFdFQj8dwjEAeBUa1QJvhPAaxApTu6BeE1ML6PFSi",
  "key31": "hhsVACWu67t4aAvor7PC5sTrZsX9KtsVfose8RHVuFfvcuYbyGem8TGMfFZqq1cmhVRvy9LKx9SfdoVB95BVgpN",
  "key32": "3d4Gs1CCCM93Vn2DmL21y7fjEid5X38fDC2CE6KGLF2m17T4LiahorRAb8hkUZR2AFSwTBQ6mGXfJfkmZmpDpxWm",
  "key33": "2x1dxd5NbvPdwLS51QGDjF6Xkr7FkyC9zwXv1tu5eCgFV5Q5NVkpNMTUuS1bNhxkFv6ESWqFC2UrHC6qf2WuCHAR",
  "key34": "2LEek1wTPZgpQ3nzWui5zTBCULHnXerLAGXDsC2KqSM7fLYmm92vV8wuoMMbndvm7qvpcmLDYEsbuu4UBGbZd9BD",
  "key35": "4YujLw5dh2udmq3GswgidHEqC7RHiSyoawNCCLEqjcEinJE2EpGRQsjaj4XynSKsgjxLgMYHYckRDCkuj6htWJ5w",
  "key36": "Mx3JVLK9LPuSS94akkU7jTmXGHYh8ouqT37KYn2GoKBhjo6tqsNFGJT5fg78QncAHq5vv453tZDGRXPy68K47eU",
  "key37": "3mQmbXS6Z6t82hBcWfT6Nb3oNqss51eerENf4bSTVXfb712Bnv7mHLwAN7S1MwVFQRfbf7KCoR4eofGbcKVg9Nq8",
  "key38": "5wwzdYh2BivLoqQHT1Wyn95vPdEucJJ8MPCVcFuRyj2f9cr5YTouDvrH9GCyFpUZ2mfmyn6ANERonwGjDLR9hoKS",
  "key39": "5X99RLcpCU6sb2Q7E3DBYHxUMUGPVRn7eotZo3XeVHgtFAHJYKvzept6HjPzfXFWMacfc1vwB3Uo2UpatvbKrmak",
  "key40": "LCdtgY4U5xvjzLfDKRcRdR4UaKCG1dEjAgbqwKgJKqpawDqS87hpJQLw6dBk2xU4CPdpT3LmveW7X8a3JZhsqRW"
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
