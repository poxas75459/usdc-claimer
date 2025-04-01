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
    "32Zn8TPZ516m8CkXcVsHyb9ruLTFH4r3qxBXEA7v3kmx2bjEvehvxuLhRpRAcRDKm8qz9m73nP2G6Wj9JAfa1xjf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W23KH2eTzi8c1WraKy7R42ijh78A6exGkZkpNowD4Y56RxXiZH4i4YGdNFu9DqH3rGgtv3jwY4gtwnRR4m4CutW",
  "key1": "2L6gX2eyMzBhuzucvnLFA6c3Ye4RSWiuPM5fgJcwD9yg3rQbgAGe36KztBqEHyaRNNqqXiNAeTjnLVVTFSHmZCsF",
  "key2": "2mo7XaannBddWiBtgpWiCW12pKKyi6j6F8xDfczmS2TBHCVF4zWZPSkWxDDXwZ1fDnnbvcJAXsdsYtpqR4HXe9Lk",
  "key3": "2Ghbd7gbCHmeG4bhGjYRQgTdJh58M6zGwdPu6oh89gSmHX4ToQ5rrR4ThY1J2a4sfyqqUHCbDSpiyxHu8SFVL8SP",
  "key4": "5ASnfCrcWPJC4nvkjL9QP26zuZiMdJ6PEUA9jqMhzjioyPs9SyYGZEjxMem9zqeBJw5ud4CWZYdTL6sb5vim3xn6",
  "key5": "3M54sqwirCz9VsD69hF5knogpbD18kDS7x4Ei53pL3548eAk4X4R4v9hirAXt4y8wQV1ztEC9Epy6qPWVR1oQnAG",
  "key6": "6KEthmoBTXwK4QDGdBH5eRVPS2PhfpeMUWFaeTmm47SpM3q6fi583hJXmieyGZ21RKE9SJMMsAuMa4T7xsRGabf",
  "key7": "5w45BgbNHNBBr2wkaD7K5uBX5k8sXFUM9bqx1ybVaUB1bcNZ3sDWpDDphFpmcMi77MC78q47WDvb5i7ZmTdksbkT",
  "key8": "3VogqH7WjY2U3Dd3Psv7qW1o1EgcXcsfknnvSTJe4Mo5UQiPQv7ozzdp1hq6aJZK4vBnxNkWTe6DZLrx6RsbQtnM",
  "key9": "4KKB7ZVhk3Qb8brMUBhoJr1tY7RZZCSi6TYV91Y5KNYcPUDzNE83ZidFT757v6mYGBcSRGpC4C6qKE7WdrPnMpVC",
  "key10": "5Uh7QNCSZsM29XgvVS9n17dHRQMqKG5VHFmrCxmEGDpqoR9ZiaU4gF8YT3Fn74AVDPxNPfLWAU4EZMAmthPpD4M6",
  "key11": "EACQDnwNCeTqZEsGgan6Vo1foSoNK7uMGQJv3DYznMTYoBXL3uGjsrGQ5NnnKeMxGsMVbLbFt2XPMP14D1at9TG",
  "key12": "4v1J2xYkK3dSJDYTQcvGDuVWGirz9LhGYEwhgwWcqNjMNR3B16t4KP41S1zoBb183KPnm4hmXk3V2eoyCfr3Diuv",
  "key13": "4CFN96s3BdBPjrrE9Ss2UfNxHYKVctR1uvmbmeWz5MqmWkA1grUUfLPESyywEWiGhbSojnQsWLN8vtca76bgBSn2",
  "key14": "4gfFhnTrDh2Qpw2F35zpcppJFN6GFacZkKEMxVAXiJWspXWVsTHsMjJkfsmPKgKQYmp7Pemw16uqTu8VruE9kfNT",
  "key15": "2adQWK21RXTNxCdwjYixrsWKs34C9reQLTfR8MHmXHFhNZxoiQdcZTUsKkUHWrwJ1hNqM4aXcYo4DqJWFZd79TBs",
  "key16": "622rJXRVModGR1T9uSZ8kkyt3yjbUdZcsqZ2ty6zou67B4terAWKfbJqkQEuSfjzpBS61NmuVqzQAKfoNSXW6aaJ",
  "key17": "5kXnjJMZHLC7mxDpS7kgXdY4trPaX1UNkjquaCBKgXyCefWLMDQPX36jwvN2QGDiRbXcS2RvzgdCzSH6zx5U4BJe",
  "key18": "2bCiZXtnVzvzAnP8xPWjnCqE2RjYNMfuWhwPwwqS7WYYBdvfsFxbnZjFLF8NkCraCjVr4z3zEMgcrVAFLDGs9rT9",
  "key19": "2z5tgadgytjGPwEMujiKnZBASfr1BEdKXFt5zq4GMKm5WYn15Xs5w13jENdDGtMc2NsJ8bjG6WpNRnAUpZed58eq",
  "key20": "5sJ5RnbU6DcxVjP3WvPn8iJe6LSTZgkDt4FYqq9e5SxruC5AQCYkZEQiqB11VAuhYiqL96NeKizYJyvKABw4NAKB",
  "key21": "2xP8DEY7VW8gVExPu3U2zyF3zDtXvp4ZheYgiHxy83tP5dPA38MKHKeqpSZXYSG1FMWvawMGiVMSGpnGGBp76wiq",
  "key22": "43HjGrmrtYzU3HhJdkTrm7241kkydt5hh4B8qBNDpmqrfVoHMwwxYZAgTjzXmCqyVr4JQsc4o9GdYz1eqo8TYRo",
  "key23": "3A7wE9YMCSByxyaZd5HnNpr2iRShE9PFYh7FMr3frLS6oakk7oeFUi2cW9Q2bRgaEk1Lv3uKFSqDMMfnQsdYT6Uw",
  "key24": "59mvTLvJj27ythjfjcNbxMX2THJYfxXK7b4dTh88RauCEAdosnzM2Q4trmvijmB4szsLSsdMpTPA6H2skFTBhEZL",
  "key25": "5bc27cnTozfshq7ZnnkPVviwbNUKdw399H7c6eGpkTdDB3WD4ZonPiXbQh2BwNo1PNZa1xvaRRXvw8DhoSrHR4z4"
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
