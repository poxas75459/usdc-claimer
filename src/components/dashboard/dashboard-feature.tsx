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
    "5oWiw4xtZUbpt7miXCkou8uFR9yS2kELTUtdSGXqAPnEkZiB7AB4S45uVpq9S1FgFosb7spJCkgseHiTj7KA1zBn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5syiVMaHbDm5b3hnELjTpvpxjUYL1Uvs5azvzwveV8MsdStGfxk6VNzGPkT1TpVNTdHT2Xmqpgx4pvXS6LmBKbcQ",
  "key1": "YLCbiRTSCAKKkgmffhVnz4wYvwZx2iNwDw4RJtUHtPBGWPPkC8HDLFnLXmta3EBkFMxYr5WWQRjwmFBRZkAnx61",
  "key2": "z3C746hETvgBdvaawkLm41rujeqjcHuAnVHJKJAtddJfWJu48x6H3byfJxq9nSYqGBzP4jG5mE4f6rhs8zFJ4Z8",
  "key3": "WJa4DSaebdFj36zo5oFKYJ97SaBhdoFvw9eDvukGhWoBcJv3pkL7n4siZRbh2RoFAcDsVJ4kQ2i3mV5wvSM1aMx",
  "key4": "4cv5m9hG6Sowy4tTK6vynFhv8a8WgtkM3oq7keck6YkTqQ8pzvinx6vroJBXniGrUDUAsTYsp4RWhM4xQsFX4iSz",
  "key5": "FeRnY25TSqx29SCtSf6fBENoTFLh95nVhb91Zj2bpPk8LUW85uGL3WGjwX9sbjQSfx9WPZQkcV9Q9j3MwXyrQiT",
  "key6": "3ZarYhxGbqS17jvfumcLscJxAGNB5Sg9cAo19JkdqfvUcnUmbbyM6fHTpY5ie7mcSNA4zLAtH35msuNWCvbQargE",
  "key7": "BX7oHmhxYHcXvzNd6TTVAhaHyxeZkiomzqdwjSVdSLCXdjW25g1H4EZUxsQ9t7R1HJVusTm1TvKivuDwiwFFKeo",
  "key8": "5833tRnEsRjEPrDZeRsckYogYxcQ1qMnouNVSXU9jsj9weE5Px5bFpbi2U3BAXMPdcUWD3BUSkhnzg9ZGLrGsyfk",
  "key9": "ZfRWUjL3BYNNKixFqJSMg8vFGgE7o5aW6KtJ16SRdAxt5hK44cFwvBXBaLpwTkqtATD8UDQfPYoAgHKDV5NYh46",
  "key10": "2cLZ2wxEY4FR1ofw1eV4uxgPkLvntgh4TCmbA5uvy9ma3bsjxL9VBrmR3AvqDx8jPLWxTT263dypzeJQg8EaEcLh",
  "key11": "mCPZXfQPMCq5a2LQyqpYPdz9zB1b64jxLQVMUudPk3DruKJnKMukUUFxKieaVjf1RfkAxm2XBn3p6JikKWh7GpD",
  "key12": "LparRnk9SRQRVmShbCfLjtsT3F5vLX6m4BTN1SN39EZY6jQPBbcZhgtSRxqc2RmrPhRQXYByGTEVXdW95TMbKb2",
  "key13": "4h81burdNqw8jEX9uradHTz1YdSPmkXwwkk9FCF5HuYXhYMXgSpiTUrxARrtP2T8Muhb43XVToUzKkCgjGdFMkwo",
  "key14": "37CKWD5SiL5g9cmP22NQuns1fn5Y1XusSfbHU8TYoPQLvJxFGRD1V25yANjanduJ77DLT1fmVvfT28oM4kfY2zdM",
  "key15": "48f1Fn6dcFPuMgT2FNLrX9zmVzacw9oqvvd3HwyQnqDnnaetZwtvcnb19GmP7gRkSLVFYWDkDNvyKbEfjETCqW4X",
  "key16": "5A6cNkpRqFJ9dkLJLQcH7i4r9XV7uzgKik5WcK4vA7weQ4tEGSKKiCjqsYhPm9xAGFe1PZrv8bnzwoNogzhXjCGW",
  "key17": "4CNxtuVPbHVqM99TUcqBc17JtWYVDxtSTZ93GAJb1QnGYQZ7wUrA8yKtSvdHiXfNW5mksBq2RzZF3bS2x2xPUedc",
  "key18": "3rjMz81fhVYysPUfMgUpiGXvJGw3gL8F3WqCu6X5NSnUeNMvvkWiEedcoGChepxgSM5XcK97cm7vbX5TQGpiGPEd",
  "key19": "4giLtioDQ71BD3F8iYeG2iGrtUU5evNWTDu2GSsYwn9JRmhvfa98sNEANo6HyCrPhLqB6h5Buh4XFWz6FP6GJpDo",
  "key20": "3W2cdNNvQ5jVez5rYAJeNNyNqCMBZ3zapiG82Jmjd7PuiVFwdb1kzbksjgKAKs5aTSyeQYv8q7F4BQG5bMwXP5f3",
  "key21": "4Q4ikKZBw8qp8dtUPdkp5z9z74FzoxxFU1cegWrUvu6YxbKtnxrfJRoWaR2uBvTkRndFf4NDcsGwPUho56EA927T",
  "key22": "3tAu228metS78aGqeZofePXmHs7UbWHx46iCZJFbQuvaZ8DkbXtB6T322qtGRCLvajwNfFKyABLt8Akq9cYybg3P",
  "key23": "2yv25zwkhfmcrDRqM3GzZDcNCcSZAYiBVaPjVvnNX2oGkXpA9tUjQx3x2BPMSD31CE4kK96kQHqG1ooDVN9YUBaK",
  "key24": "334yPzipnSyyqf8GUnzvoQReMbbEHKwAi3vHo6SKjg1k8uJUNpAZ2PhYPKfeVzqHk3zq1KUPiGNWmzj8HZg8yWUz",
  "key25": "4q6Xa59ve5vMEmXjw51ZS2UgjhZv8B587jCUdGpS14xvJatciT2cDpbAVBhS6CeZjyEUAb58vjFoJ6Dgzao2mg6X"
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
