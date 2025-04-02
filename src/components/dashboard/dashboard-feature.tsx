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
    "LEGbjh5w7ZspcejCSWATgjP2fXdz3Nw8AR83ARnoeuH6TtkDXhzwe99QqpV9eYGDPT3He5nexjjGwSQTvQbLpFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ksur824VTKv6auqXJrFenbcv73S8iWCKqH9okCrTc357fRaTDuP7qtnS3dj7tzFoiSnyjYUnu7v1CfKcnNQhzZk",
  "key1": "4cFYrT2Bs7T56RkQf26Bgiu2Tck7awh8UKQRGjLp11QuUuQ9snxaFrep8tHQvMG4yqGx3vCEx6jX359wkf3hyaNx",
  "key2": "pm8bEtzzmr9VgzSFqAhBM1bWtfvdmYPkdYfuJ6ADMBEsWAiQakWByx4HQQAuybfpyJhaEPsgvkB5GSeCyVUEfNE",
  "key3": "4Pyc2P3KTgMg6jc9H4BuYNBe8MG3YNTX7576jMvnrkcsEtFn1JnYdgRSsLzKbnqgDSPgtsyJ3TVd8dJRF8mJYLAU",
  "key4": "2QxRytzryTuW3EeUm2PbESPhfdX3JpN4mxtz9iwcqLKsALZSvCui7VbNHAYSLxSvkhFNEdBWdC6FmNzhpSpcqoBY",
  "key5": "2bTRuYFCYxFCmdQafwVsRhSvvsbsthws94Mbem34RFN9FxnpKP3EUniKFhYsyBRmaA8pdYRb8ktKaSnU6hFgvVK3",
  "key6": "45MvLpAsCcC37uqyreUxUzJB6cLqTMENUuyJhG24PDRxQgcAvBrWyP2Zq433ZMvVPwy5fk8ENZDWXnAnF4U4RXPA",
  "key7": "38ussyoKdEzbFQH1YYBEkfavCzPrTuFjH4wZ5mErUBBsGE56siHjXRHz4bKye2LAJER2d1pD7zio1rWRBDBu8moX",
  "key8": "49BL9ADKyd6Zv3xpaEac9YjGosT5gabXV8ebKkBTpLcsdcBoGjufUD5S74DGkXzRw1FLw6fx288i8FNWJPU8QA7a",
  "key9": "QvoVzUWMKj3YfAmVb4vT8tpMM8H8HGXUYQX3h6sLu691GtqN1aZ6gHPeiThtqxG3uJUNVAYuxN6wvaCD5Jiihjc",
  "key10": "2xZpVic19fksG3M3p6s2dYiEAYmxfhycLvCVieiyU1Bv5Z4o7xnughUsbFrz5v7Yh3digZWRUQ1KnbFGyWaTW9ux",
  "key11": "3PFWFbuxmEe1Neq7x6nCX3qBre31W1SeTfFwDyCZQ3g4DSBYfD7RwineumwPRhjUA3wPNRHwjXdtrtm71qBCVzx9",
  "key12": "4H523wh3py236yejG5WMMChA2zqkaJgz55oFmSDNceJsqCNJs3ixN6kV6cHTXctBLfLGpBVFcdGXDAe9Y4fseUDp",
  "key13": "5kkPBJhaENnVQdZJxHLauXNTYxTQTzBxkAMKZ1zQZDUtkcmq583xgH43tTxGFWYeemM3LygsviDq3Wk8jPUjbWpV",
  "key14": "637jeM1GWEHmNwSTK1RF3HXNRjHUwiqdSho5F7fojbM6YkxcRXqKa4ZWw6wwCdkaVpz4z1qf4AHb4jJLUbZEgPMa",
  "key15": "5imogMpStFNmBbQaNMvrgyunoq97uKYkHKT4Kt1UaZXpTMfHgCrqSqiSni53s194wEw41fwPi2nQ5MYSqwXiquym",
  "key16": "4a1ajgqKpTLHrbfhbhtLTpBTp17pCeH8GKDBykPkjzCpKhk9LP7fUiLnHUZawGVwi2k5TVyF2ZKDmHRLCph81rXS",
  "key17": "zDfjqY95SgXbz2SUPqz4PMrcqRApsECpWCma4kj6CtEsRSU5MnsnYXUfgY7yYHJoCh54etinzS3r7ktx2dBiJEZ",
  "key18": "3FNZ3WCHXxxfhe79Jdxim6iiLw3gbrB8F9vPrh9erdPso2nhgmK79ExWHXTpnLETeuLNmGmqTNi1RjRCp5yVkDMQ",
  "key19": "2V6RQVAVXf4SB1Rck97zmKv5ya22YCKFbEPyy8UAYtqZQe6Jc8PDYSgNdGMHLWKjA2AEQF1gGKT5xQ9WZ1VcPsoQ",
  "key20": "3WijhV9fZrYLiqDwJotscD26MgRh3KrihpQjWR1QDsKXfn7CFrVbqFyXq2D4S14LJH1UR4zueSRiZQ7hS6UQUGnT",
  "key21": "67G4i5tFGNDuCWGtzoPJ9WJfNHsXaqLfmXZ2etDYTM54BM9gMjHW3363pCCV2zL89hXXFN6iJn7ZPBmtnC721J7S",
  "key22": "3ukKyn6LDk4D3LqoFjmksao26hk2Aha9E86FTmr5cvygCjAQGqQk2FiAXjX9QykNKb5NqhcDrCUGzTvjiqXu6FA7",
  "key23": "3SvdtxFbhnfcUYxz52zJL7vnLDWmY6yTQxocEHiB8hZsj1gKE1Lc8dbNiDtVjTZ998kSQa87imLRMH9hkt8uuEXz",
  "key24": "2Q1GRkhy2p1MM6XDHbi91SvF7MEkqyiQKMCHaHNAgU6mtrmi5JE1SyYzvBXNxzSNeg8dQX5dHk1H3rcE2cixMfq9",
  "key25": "37behjN4Qj6Nbt5mbrx5rZx5Ae71REAfxf1Uvnqx8HaVtiPf7ubr6r4vEc2yETt9ba7kVcjXAUfifauwmwdM19Eb",
  "key26": "4XndsdfRu9TbreTx1ukKdXaKaJ487XbTqS5qE35iRoGEYtzFakPWfJeyQZTMtbqVmHT9BB8YazApw8VK8cqsZVsW",
  "key27": "3SggdjzZa7tedJNFR7mKXburowT6CmV3hKveSSm6pX3U2EnzXvsdZg7uKoswo5iogSv7GMmqQJwo4qASaHVzx798",
  "key28": "4XXWijkNwD1v4HZ5s9c272iFeDy2hy1sbtt537aSEezJZvaND4pnKvshJP6eAkWrYqn1eAynkXAeZsLQ2Bx91rj3",
  "key29": "28T1GpfsjMAcoCWizmc2ioefcrjmQV1iMbi4ve2Z5xv3q7jeme6mLMrdF8BgwrgEEfkRvCNRUU4bcyBcY9J5ubNz",
  "key30": "iSftpcwZYeuazoh8QERDGbPeiRbLzb87vCzSveFDvzer12Dh49a4h7udqpeDx3zfD7d4BbSb8xeoBseSJLKxFLE",
  "key31": "4GS9F5jNQHvxinCsp979e5pHCsCwdGzM5cKxo6i9ag2AhjkPnaScD2EuB3VtytLU8S79WpzDGHg1aLNnFPtgbh6s",
  "key32": "4xhG1BawHSXZBGGeZF4pixgmUqaTmnL4ye689fvqCsMxJmXmN8oojpC7kuRQQ1vA2jFPwXQy9sT2y9mP9Bk9V1Zf",
  "key33": "4TmvovMgsWzvfwzDcoQjGH2CZPBCve2C5s4i261MoeajkUX2D9eTvmv9YK61BBw3EKRR8iBSsSSyzXWsR5CizCLH",
  "key34": "5dbhMwwHEC8VDAwoa3qdX2FnJPvCumKju8MeJnCCi5kueegNyVuEwdF9CmbxatTvCY9ebKocFTtohY2etPjuMYaE",
  "key35": "4jACoSxttN21wgBzs1NqUXqYY6HzEPH3GdsK2zMHEq4g65TpGYnz9kZnqQC1Vi3RXQfsEswvLX8ZCuEWDUrFwwE6",
  "key36": "4AkMVtCZUm7oECbCVMMuQg2EaDo6rVNvAGfhSXqsPJaoTrMgbsXL1fmRoEeF3dbgA5sMSFe4c8pRiiPZsfqd3ZPj",
  "key37": "C6DTpGC1yqLpujfPEtHddEr5vWHbDBaMjTVvEcnNT7Vyd87Qcetms18rrKu7ZwdJTohiJsYvi2XLyD6fkcQemXV",
  "key38": "55m2nFFAwW1HhqUpUwd2W9s8FekHFf6kckCJX2dG7TpkYskgiGDunGF9gfTMx7ssHNYs8Y3X1fwrmBK7pVqfotu5",
  "key39": "5tSFnYN7t8fCXmqrDF2vLJMqyArBetNA8s3ZqDkkWNvNkhms6HnPsHehqGaMDzmxTJUYuGHHpAKb5yaM2XKGVE9m",
  "key40": "5D61vM1pQJcVbMHKmRX5uoKWwxHaCU5Y4B7fG87veD9RRnLw9Tt7TizjX6gFDvgqEMMy2etpqo64GP12NXVfo89c",
  "key41": "4nQBFHN5GASAuHy3wkrt1PJWRUfPZqgfdYdtnDpCmq7SAoz5kPy1kPPf3m3zgtN3aF1xM3cdW5czt5Qw6B4bUT1f",
  "key42": "2ffy8mQun9tZ3ZBw9QYToT5nLUsRiAwCC96HAbGKfJDmqHFWAUBkTkH4NfYwCKBQ1mVayKm2VxGjmVvzfaCdhLZU",
  "key43": "33VrmLCg7BuY4JQA3FxFyHUYamKq2Cofx2Bk84J1eKhoVzi3ZTLxDFAdJCpQKfYuuFsXDRhsJaE712GcESDyPCWY",
  "key44": "3BG2h7Fd42m1Bk778R7EMveDpqrpepV42Sfyfg2W2z6ZqxSFZPvc3uMHFiVNcq2J3SPy4qYfa5vSh4yDouC3Wx2k"
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
