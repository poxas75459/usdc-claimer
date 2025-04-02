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
    "5CW7iLGjJ4rCVTQpFjPhdqCLBRienbvJ1uZJUDHC9RbB2LTtFCzsWcc1VcYNMedcGeEB2kiC5Ks8ux3NaXkcznvq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mTqkBExqAGbaJENHUgqgoSze1St7UZJUbkpQxXDogq5NnTRz72wFi6JkXQkSzcnM8rHsMUqhbonSenMJ84aZiPS",
  "key1": "5E1GkiJP3VST8wttwZUDCKkNDFLbFjybieysXJsc3KNAa72iwHwmatzVP4uJryRXrd4ygM37g9B3d6aCKWZF44pm",
  "key2": "55tmUiNu9Dae7cBSHXAGva6pnjDkoEr4SQ3eLxxQpy9N6VNQM4shGcwrFASj86uvnehM5axH8P53QWjxx6YoFRmA",
  "key3": "4GLhR3nfy7RsoARSvaEcjEXcz1FEEcVipn166yb8sCowufKK7RWnU8f7vfLo1HTgdjcb9Nom4S4LywCTibVNRRb3",
  "key4": "5CdbMBnH5GRMwF5Mm4RxnipMJwpTJDimYN6x8CxQuqnonCV7qcMqQhUbrbu4YBuGtxmmfsspZ12naYX8awxWk8nZ",
  "key5": "kAYR2tks2W1q3EKRm8bUX9btWNR4adNgSo9fRREVJCmNekddWXyUwBEq56V5VhT6RNscaRiNYoMLUM8Qg6JnXWK",
  "key6": "39yXaJtdgFLrxYnT9VyDYamP6ktUSGcddWGgcaGZoiRzWooVaPthLkKZKuX1rWGc3nA9xAAf6HPY32YuULMYYfVq",
  "key7": "4uUbEVK7WsNMtZSUPNaX1KMRucFbw3XzqbhwNobATgR6SVNYRbqw8ZzZnKQqRf4S5vEKnk3vTPqyzYbSXLjkZoPH",
  "key8": "3hv4GUc4oVWiDroJ5Z24eHTdVnDoU7JYRPjHUct9ZHcEV3NypnuX26kQ17t2STW31secC9rnKjUFA23kj1gUXhMg",
  "key9": "2FYBW6Bm61Gzr5VCdQx7bkPSC3HTzruNUFYGKNpiFMnVgNYuJhizmb4bpzAZL3ra2mqBnXoHWptNnXKXVZJmM7Bt",
  "key10": "2n9ZzFvhxYtzR7oa3kpGhCDYEeMzUeV5QvdKGbkC4Luh9pNC3FoiDnGAiUzof7D1ThPrUqBdzYJnFU5o4JiTDemv",
  "key11": "4ise73XkmhswFeNEn7Wjv1ShRZVgd6dyUsmxobPytcH4xaDCqJKh8h1QiqCfYhh7QJobU4JQRfrVUyH9edcPL21f",
  "key12": "1kWKnfEnUFbEGzpKdfSBnboZqJGB4aF2CBJ2SXbd4ynTGieTHxT3NJsEfkpJ8SBKvEMB43qX5LPiBFvEfU2tiny",
  "key13": "5fNK2orjve1uqqGQMYf1a6po1hSzdD7qytpKgbJ9tqZWmuwLXCeiBp1k2m2nRD55hzR3NhLbsCQmTVQcNe4ZuwhA",
  "key14": "3cb6GqaBw7ZthhvWuEmyVmXecSKCu3iHEkQ1MkoqXJHYjSSXsG4N2nzEvsnL4Q2SAuJFnPG6prWswcsQna6mP7Ws",
  "key15": "58uh7NkCPQhyiVvmUHwUiqYUUc89YVnzuSrJ9sJgRFrdURba74Ci16XFNdiD9MKmiQmEc2kSMEyq5xjES2UcorDg",
  "key16": "48HjS2r5rt2ceyQZbMAoPLiLK8mvLfHET9emxRxfcqQKArqifasHyxmYirrzVzEMT6xj7bvBNe3LU9xXGtJ8fG11",
  "key17": "4RhgZnef9ZSwqDRw4SqLbV1GsVd1BJ7FQGtNqiVXgHGZ6Tkf8Fh6pVd8dZUmvwir7DE4iTVQgkgjUUTtYxQQysT2",
  "key18": "3KE7Xx69UMxxcd7DgRejHUSNEL8P4kJQAprU4pLBWau2rYTWwJxzhKmqMnFbFSLMKMnDC24cWSPJjQf1AvFuFQ8m",
  "key19": "43bz3ny64Ap18mxYoTN7AhKf9XfAcmVV2RHekA9UgNmeGtQepR2HskRzhe4GyxGtHRTaRw8C7vLfkqxNbnDcHkWN",
  "key20": "4TitfUunKvDTDrs2cqA8C16jUtBC1NRr6REYMAAVvGKJ8EshjYd6AHTXEPGsuu87PMCCSyB22Pv3hPAmsD4tnq1A",
  "key21": "2yTZj8sDcUXhmRrmVvVxPAfHR6g8kwG2QZKqUKNbrwXWs6cPXvURaN5mTtUrJoRDgDe4gZKvbfD7G5ZLUGvb9var",
  "key22": "5USbkTBZL3CBJgmgZYNewKxe587TF69ta6JFYXXkvGS77d6RkAg52Zbae2y4JV3iLgK5JurNtVjqZ3DetK3TWWhm",
  "key23": "cn7uvXjeXcRqiJT3KW4Aoqcxsn2V9KJF5dHbbpjcq7wvTFHCbhtKcLk37622PRHpdAUSauzmsDvMDFioD2s1j72",
  "key24": "4Hdivv4siRP6h4L3iQFdRGNH4xffjVkpeLvP72U6sJEd2GjHnk4FtRnkKETvg8WpkwB18beQpFzBUur5yLDELMeh"
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
