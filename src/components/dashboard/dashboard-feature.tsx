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
    "2MGEsGEZthCcRMfLbfVgJLX4K43N4FHRJdSRQboXAEhoMpwYuar6PQE8MPWgHnmegtyTwVyMyY7ooG1p9Ph3XeLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y6EwSFQVNPBmKfEeL2cuN5erjM1BwqTnFFykoEjoDexsaqPY1pZoeAfV1P2H1o5JSjFxHJ6YUyuzEfnKxW1fwu",
  "key1": "gdTyF8wQRPB9VRmJUyHrzQrm3ZRr6kAGF5xtGGC2NHhh4WLhyB7n94CatYFj8zFYQjdVnRgaQAfc3nZhx9mCzsM",
  "key2": "5zS1HdEHWQbuecWak8MjXSLMDvj7JXCtgW1F7SP8RYaJiwkSYxaJ2VN23GxrVFTyWZETpKbKRmDG8KaWzKLfWwBa",
  "key3": "21rMCAvpbXFXuEMBsaSSZzo3KzMRuB9SYeEqGAr39vqZptvprHDUiazrpF3bksdmod4sAPkQ42X75UNrcRcNKY4s",
  "key4": "2CAeWHzYUjkionGMxCszj52f313z6seerdwwFAbPDxhf5p8FbmFyve8ZEUZv8o58MtirkqEur1MRLkcfnmpKWWXM",
  "key5": "5A8pysqLF6E7NLGHofi5ohHky21Fc1dwfL5xDa68FPizNE7LV1d5Kx9DQseLDYpBBG1fwHuifUqFHYRN7imdhMPs",
  "key6": "HP6ugT18auJtToMtogPnZrda2WPNCvdEXgyTeMrUnP3EwQWcQ61r5UD4t7HqUmS7nJ1H8pAtE32MRaXPn4GifBK",
  "key7": "4GvYR63x1xLcqMqy4AggBzYMTYwjZ844YVfLXvgKivh3xo85TvH8jj5cr2uKS9JFLP2LSX8pqXDsYfngJqHyKESd",
  "key8": "4E9mU1LRA2MhWkPGsuZLUH7q1LqxprhaXp9SLtWfr3yT96dJAVfS3ifK1S3XzDDvtkvjxNZGzgJv835w1QxumRC2",
  "key9": "2TucG5LKRVcrjGRyhjrDcT5Qnj6KbXBifxpgB5syEcWeCVqJ8BK5UeHVeAZFmqjXKBQjeodLd9GpCPpQFt2FGcpE",
  "key10": "4xrQAmeayqfueEuX3BFiBNPSHXPfaFVDNfgBoQ9v43R9QspXEsGT27oxUGsov2xmv6GM8NEhgg3FVb9DjRT295QC",
  "key11": "4WmeDEfV8H1kzXFuw79K8nUpkJUUr7t3ZyH3DbSbTqopDM4wJMynps6Bs62654eowshEmk8EDLfZiXqzTR8j32wK",
  "key12": "4LEzwHTBHKAGQ1WDuJTRgXf6YnBttaFvZKryQy7Naw6YNKChwYvgdE46oQebNgvoqGfoAcYvFQkrLPaYa1uLbmJS",
  "key13": "tfZkvaDHS8U1d9pzMG4hvZbFk7UCkeQzv6sv4z8g442z5dq8epy8orYUL7w7mAwDgxGGqBywMnqJwpC6C41MENZ",
  "key14": "MSThaxZs2k3vxR4hKjs1ZxkAxAuXXVEpLc1VyGDU1Miu8dWX8em7zECj92pvPsQc6KLmQWAWJwGuDrT1tStudG8",
  "key15": "2h9JG5CX6ZMx3YXsXxqH1v4LT1ts4iHLKypAhuhYJyYmhE4fbNF2m1fqJzHT7jmwgtztQMbv1ebSxGh9hnzZjXi9",
  "key16": "2vS6Jf8SnJFR96EaAEfekx9SWLYSLGBoVUUkMGzYyncpMgGmom3hm4y9YRNpbR6Lt28UrjiUqRwkhUGJ6fWVdDdn",
  "key17": "5jEBo9sq2S7Uq9XBLgMQjx7XE1jQZ7zGGKqgMPzh8iru7bHze1b9QdQNoKSHoPDbHrSNvsq1k13K7rBkRYvgR6Eu",
  "key18": "9SVSompbiBguvnyrSxbXS9LDN1gxJALPzNp41wJa4NFM9UTuCCCPbrxb3eY6Hpq6ZHY5uv9FysofyDZugZFqxTx",
  "key19": "2Ms8MJHgend92vNpi5J2jBAtqVmcPffLR9MJUh6vs5FPUeLCj7VHgg8C7aMkPvchzeqQrYj52aVJ7Mus7jB6t99c",
  "key20": "2QsSU9CVpUwkGrUbYkLciMNTs1SrnwoLmvtr7Vu9pKv3rtdYzayLf7B7NoQyNoRQn99zgAZrg7aiT5B1uaAAYyzR",
  "key21": "3MnJDiGMLwf9VrEDzmWVRfsYJL8CUPKxD3VfMQBvmQTAXf4dfDQoc8WyKRM6MC3R9B5VWSEnsuj2pmaXfA3MznQ5",
  "key22": "5Hj8E8VUh9LTPj8ho9daBa4XzDb2En3MnMYonzPCXtqpkcEN2vXPuDtsnBMYG8DdVT2DhocTsAp3myHcFdBxx7Jw",
  "key23": "5K6jC3Bs6jetcCbYqkzv8rspaSWGUNihGRVbDMYDMhGKrFSZhWN1iq45ua6zC5Mt1UYgWME2rTMvZwF1HctKTRo3",
  "key24": "2jiFyCKpt9JYeBwHT92ejmnZYrCiHCyzJobut25eqDE74iThVhE6iZpNTj2Q3DSr8WuRLSDPjSTo6WRuotEhFbTB",
  "key25": "5C8QDNEsSVnY3iEMjj1UBvsK9mFD1cDJUeMk4Zs8d7CScrDUL6W9XisYM73aJYMVWeYP7CR9YmAUYWHTmGf7TUoU",
  "key26": "2kKz1v4gZWGpYmcKzX71Xeb7AmK87pF1gmKu2rQ445fGouDzurkB6iVQ8ujkq3q2LkswmTh2WDwEby5svAWT9we1"
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
