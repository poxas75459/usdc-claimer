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
    "542EHrV8dEkp4As5DG6ayvqg1W1cisowFcSLxRLjzXAYpnnxK2Fd7CPAQ1RnnusciQWcrP4FUwYPtNdwfvQkogoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SYoNHDaAwQ3RnewyWfvsxz8Gwi1CuhACXAKQuz6PtEMtg8cZrwvJHh8sh7dV8aBTxnq6GGici7psmGybLJfkz65",
  "key1": "gzKg7YwYH29ij2rYLUFEtwQWFj8i6zqcU5j1L7AEbwdFXu9sC9Cyhe2GQeC9AU36jANW722wMotiiYwhzphisRZ",
  "key2": "53TKWb7XA7E6fKXhaRtPQyRrhv9ua9AzK3ff6JiKSuaaGRgaTPz3UtbcBosbvpv7Ckf9cQFfyAjEtPSQ96AuRGG2",
  "key3": "2CTiekgnutj2prJuzA8Nott1dU3UfpPtvLrq8t8B821zcHdwx3uFb5AnRybd5i128uVAAG3QUHp27m7bwwbkLeur",
  "key4": "2t6iFxexTv9ghaLFfkZHustMGJDeki2X5twUsS4n4v1dChDWGTvB4QrzwJfGUpA1pRLd1Z7mNQZARefrot1HwnZk",
  "key5": "3z2Y2CSPXdkiJviQjAfFYEKLTz8EU2mt6YwAiffy5TorsgVE9kQJBSxqonnYmdJvpfCBCg7r6crWxF9hDban6Nb2",
  "key6": "2Zh6f7V2QBijMwCHiTBjf8VyG4AhbGercuLcPf4BnACMmeaVtpxSkCkUw5iwvH6KzM4BpVcXq8yK5iTbtcf3Nn5P",
  "key7": "e2wEToeuT7xmeGw2u9g1eYYxPqTiSFeH8icBWwfyhHCzxJJt8G1biVQEmWU8Bx37PUg9VQj9ajkEb37bCL38tzA",
  "key8": "2R2vtGeb4396KginBE5mUUL69gaikYzu8ZjLv6cRkg6Fxy6rmcWspC1eKqQYSit95moAmVjRnYr21C2Yxy3CbThr",
  "key9": "5UNKXrx34JgYpabNx94CnUMnxy78YNSPt9e6t42wrXVYNzfZrUThch9fZCLnxDVzunW9bXJrkVrfQKzWfqKBqMFD",
  "key10": "33hp2xjpvh2PWdn4QKnwHteCxczGzLsE4XLwk39ihfnSQHAnHk9ER8r3FANsj7MqoR4xfCFZEHS5WtQeMqYCB34W",
  "key11": "2uxnDo6FfMnPk7ywKhcUDx3f9dHh9zAx6Yhhczo2RiFVP5drpFhtBdRYLvFBmvhADUMDruzQZvmai2EhMqvVA4zs",
  "key12": "67hENibQDhXGZW67o1PWcPTScv7f2UvhK2QADx5s1MKG9vPsNRdv2AawkeJcsWxfHDzvQArBCQp9vSrAAndu4HBF",
  "key13": "2LygWvUHVdK1TveV79x3wQ2Ek8MX5UK4VhHyoLyN5nDSaYNedtThbKLguGU2BuzG46PAwzwtEG6daHxDyFM12UQB",
  "key14": "2zj4vA7TxEkqAjrFXpGR8xmh5egF3MSfk1jPyZTZbcAB2jMtLNUsqyuyAA2jLs9tt7c6fAm3kXQdtHqJKETKt5QW",
  "key15": "5ngYUbUwNk6e6opj7zyMhAapW6m5u2eSw626WFy31nU3nHFwike24qRyiCyufJF37VnyLLw2RqczD8exnoefM8Mz",
  "key16": "3MAvgoconyakwLCcPL4DZjPsdu8XsHsErViE3WZrwyKukhw6jgiiZHDCYLCHM6XidP2fiuAYZK1QWaS5jvyd147t",
  "key17": "4tPkFm23a4gzhkVPNcgXyrhfoALutBmx5GpgXJgjwzHBVpGAAvHji5Mi29o7BtAYcxTH3eWazMND6gzhE5Gj4mg4",
  "key18": "5pSUyW3BNr4d1QhAghKaqz3uh4bo2Do67h7GY4EfFYxPuVDqUoTKuEFBHREAuWLqff5dmaZk4wbwuVf3mWnfSigk",
  "key19": "3d4YM2iDrjYfUB4preJQWRkvTn9YJmw2jsurXj894xJRCFU3NsgRVcTbFr1vpx16eMCEoymzLMUQ6C5X519UBnVN",
  "key20": "RA6qV87JbTvq9biE3XqKJwJrAxTKCsYQQRVymjzNJyEBJpze913xRTSiXuRKsDvv166SMKcMx4eMqAHNJPbqVFs",
  "key21": "3Y5dwVxufegtqRkm9smN8GtnehsZkrnYqom69yyquiUvmYBg3M2nQcseWhLUZTN2QvPs5Tsq3KR3UsnmuycXdYp5",
  "key22": "Cn7HiZm7eyJWUFgyhbE5gk5BjsV3yFLNVq6SRASPbdRNCZubSycmck21pi3xhL6vF8zsQ2dnBsbJvPdPwzwh2dz",
  "key23": "3XNe1NCNivWfxUFKPRmpaG93a4nrhrse5yHCUUuh2FLP8ApnMSoVZhzHNGzxqF4ykYxdQXyeNbecK1knfdoVvQ72",
  "key24": "46MThADiES9PVp4S6VY4UNsNH4p2tA2fbTYBiEpFVtu1r3pPFjabozaiKPh175RZNYHDviXH8humkhBiCsnFAo5g",
  "key25": "3epsdFF89rVZFGSVsKYu4eevuL8JAYRdvhXDbqG4kuGcLQyU5EMQd3dgPMhf2WhkL2UcECU9y1eQfTsMZa1iywh8",
  "key26": "3cfbK4RiHEa1Mxd2Dim5JJidvSrwyXFNDoMJ4QiwyfSN1BAHvb9jeaXUfNSn1fjtuD7QgYoJoN9hprScNcG3X96",
  "key27": "2n2SdxbA6wifu9u6Crx8jmWUUM4Hyx2pe5BGCBehN1ep7Te2Nys75N5o1BSBMwok6TipUHbYrQiAnBtLfQF44fQx",
  "key28": "5oMMc3W6arRumu9G83Y7yBStDtzyh2BEBWyWVi99gh5kixFieV77ZfV65Ak4wyA7HKgX1VEw6qNv2o6DqLz5b56x",
  "key29": "2Lq71wRbqo1eom6MVR9kbbk3hXiqA8nUDn5X2QJEKU4sEBQSNthtN3fAatRr9N5BDbN4Awib6NGFxHDxSN63dvTo",
  "key30": "2YxVLMyx9tjrsWqYxjKBJxRsbKFFrjEhazg4PQaArWhsX77buZ4ZypEiQtBHC6Ckh9EDS9cTVLFC6Xe82jg31GzJ",
  "key31": "5jaKkVm1PG4tVyqq33DLGZBZjVMnsesgj3CkZQ6aExcH3RC38RZwHYDMYhAAwdpq2VbXPysucMRWPLdwPsn1nhCg",
  "key32": "3F1PYbcLPafL6kW8ijgVcC2xCa6nNdgQN7pyS7jrNYaqvNiq1umChGg3z6aFjM674eN9cyHKQCK58Fpde6ym7Ukq",
  "key33": "3Wg8pucgAyXfqZnsSmKunXr1BCjqgXLHXWCNx7rxBHM2KLmTRhB4sjoyogyrHJw4xoZjgiKRzNPCTwYt3FX9tCTa",
  "key34": "2SJvCmzVJtr8d8rbHRBy1qj92ZE7bFtDa8fZVk6ZshmCWwdXWt8SY4ksdWeGjXexhhgK4QqJBpjQVokdHXhhoWQ6",
  "key35": "4ZtjaN2EXpCncQCVWjKywZ6qj62rjQRrBeGwdQGLqcJMJxRYM2rBRPrkCMERPDJKoxJ8gZUt3uk9HxU5KXoyWwti",
  "key36": "26YrqsfMZfdNLJPezUa2EYLrmHL32pmXzLp6mpNnts3tkX7mogs97P6kFbjRresksZbKDu3y37WUEq2braFXXMSD",
  "key37": "265Er6A2ZTqZNanfKqmgVq512iG1VpjCygH1ckcMM8DsRFqjVC6aGgLXY2KDsoeeZww4thxZbTzvy5hV3gxTnXzu",
  "key38": "kNB5C6f1YV5pT4VeNecNiDJhHBa5sdmk8j5VYihvVPsR5ggPNDTtmiVmuT35FRtMSGsj4kdngEag4u8xwwUNPGs"
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
