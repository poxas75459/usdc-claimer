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
    "67maiX2Re4VTGnH8oYDp5WpMJh9btHYTzhoZccqAix9RmRoYwD9r7VScce89T4VCCyukUt8HQZpKm4zoiqjfn1tQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "19ugvFqfLFtWL6U4x54EeAmU9dpeoUd61SyB7Zbj1wRDoGizYLo2j4kUG8t4PbHY8cAKjdcPkQwfWbqqW2B69z1",
  "key1": "W9Bver2vg2S3FyxnfqwUZt1GAHJotQh8n2uNgsg41PB7BFFpJ9wGEouaNW98VjgcJWuxdDVRaLXn6swixe3bBRW",
  "key2": "4FuoypBJqMVop81JX8WpVi5PzV4rH8CNxCiiPkkmuS7J6wjSWtTKkCgPoey84mQcLqGsc6qSxNauAxLYyFULYif2",
  "key3": "3JxXcwW7uMBmR9qAT9SEBmgzBgpgsPxfSsHwJBeTQuRs5fmEQsRAdkYz2kky4tR26HvjMeYJ4ePBXc5PCNqWnhyX",
  "key4": "3nsFq75KozgPmv5AMdsVwYn2C4Y2YTUpuHhoP8Fpryqo1pchuxBVNnUAQsza8N6FKihLUnpLQwet8PP8d2wFGmSf",
  "key5": "4t58BdDLUqE4itMJp7LsnffGHYpLMaT33EEJBuAi9JbWBVHdj7QymWQewVo5dGQLJkiZbQ2BkvMcL6WrjqnBS1ED",
  "key6": "3qugFyHByi21hrbBySAyzUs5vMu2CQGUzxaExbSDZjakDdzJbmuS1WUzjRF3qSKApCi5fDVbcnYRYkBES8oMFsmV",
  "key7": "2aNpWt8Hi1Dcz2xoZE1CU3MTS24MnJnpQmPcwvYp3Wafa9SA8tBcjmGpdGSMx2B5nCRLXvXBrqsymKaMheCjHruM",
  "key8": "3pRfsu9w2SQeSr3fytJv7ReCLfMeaFAbsBzLhsXeLQG9RWMjXu33p1ZdaNypiHymccM2XqktBkXVGAjNQ4J6EnMm",
  "key9": "4PCyYbKSQxtwYtFaSb73KwCirbYwxb8ukAy9VoFBYB4Sokjad9Dgnf7iUkFKwd3FmBThLo6c3K6zsexBHAfd3s9m",
  "key10": "34N9StACddFYbryPvwgws4PEtzV5bAqp3vrF3fb3SLMtJdDsQngmM5ZXACTx8x6pibSMVdy7G1YvcnXnQuMZHmKx",
  "key11": "2gzA9bwZHFjNLKV7z1vW5c4jeqwmyTdPpD7Gfpucg28ECudX165U4DcDsHHcr73pGUtBcEuGbDaasqQmVR54TLHD",
  "key12": "5R5bZRPMxE6MC5ucmAA264uWYiLdCkVYhU68ykcmxPihjXRtRvjf3rZP341kz2hUKnwQacoZxgVX377q1EkMx7u6",
  "key13": "2aH9NQDnJhyaAXupiQd5rcLgcmDRLVNQGLdXSHkpKBduDNcRpJiMirpvr3RoWLBv1nvZULYS7FKRyK2jMK4KwRDo",
  "key14": "3c89zx4xoFcs9TxKU91Ck98frtpa5r2a8csjK2xkQ3ebQufXJTBoxPSbgFuwbz5jNwcb5j5uB1QqQJAGR11xNhjR",
  "key15": "RW8AJ2DdqDdFEc2sVkMw7zreNjvbRoWxu9g9kjXN9mgfcvVVg7rvw3uWzmWs5213GNRy4Dh4J9dp69hjZQm36b3",
  "key16": "2Lyx6DYXXReoexXCnS6GWHhSjgGYAZoWwL34PkVEnNunxwZjuJE8nQSKbU9gw3hGSTVAmvWB9WYLH1QewoTQYQtP",
  "key17": "56GmAZuC4B86cagrBLswBM17uhm8A9KhDpkmVoZEsvhaTBkogGNW7b51guTh64DJgopfPUZ1ZkVgBWq2E6azpnmj",
  "key18": "3TNm7cEgptjVjQbtsP8vqVs2BFSVbrPFBph7CTtVSuiwSLEo2TJ82zskf9e5oS3PK48o5z27G67rrMf6BMNDBSee",
  "key19": "3zeJVRzaMaKhsrnCC9homVkjHoVTpMd6QJ39zxkBoL9iq44ttNfpv8H9uuzG31NywWdtdiWsCWDdmRG4tf6kr2JE",
  "key20": "54ive9h4g3KNx191s82mPebmFdxCu8BzAs6zxZsSqYZkD5kcjTWgq8WKJWyjvDB2btJg277ysSK9bFMcXSGPc8Bo",
  "key21": "2HwDzzhJUmiALSQEVYU3JYZQnHhW7J9DwPXrnbtu5BGE3QLRgzbebx78e2GnKtXtfFMNHkui5MYDkhEu4tUh7e2M",
  "key22": "59YymNiujXdS35PxXhPhxjmVGeBMRWoM3iS5C9ZzneyRXyqGoDN8j8Aggx6Jj1kNa4FgBbkEmASAK28HvPcF5cYd",
  "key23": "4Tv3PZuWHmQ3hSM6BNp44QpRQKXyNWDYoZ7meqUFJE7LG9AWwETJ7GGKXVxLrHkueMsWx47FjwYaDpGFVcGmfcmD",
  "key24": "SW4MxuJiKeEC9MufK9k2DCwV16LXGEY3d71YVoMaDhR9WT9yuCP9uPmFdyFWuB93QLyyoNyvA6Wfodp2AXtRkJ6",
  "key25": "4heC7n85RZA5LDWnwYaX1p6DdmQHArFtrjztbUThKcGpTPJ8CoToSYbV1Lioj1HiNbGCtBVFwL4tgvYWHCPH3RVZ",
  "key26": "55TGMzL3BiUdxmqhrRxdXcnq4Kdu35BB6bnnSEf4j6REGAFZmXwekaE1EbEPdQK1AwW3CypqCr1CFHXhJV9KRAi9"
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
