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
    "2fQVjTUAKTTPsjGvJv4SoSmEX48yVn8w7M8VJUaEjfhM9ddV8SptKuFZq862kvg2r1Fqbawr4VwrruT3AX68KKvV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JT3HEXrtQfEg7NQAjmeGrvtZJ4FQ4Lrqvd8GdadvwiirNiNRfhQeu4qpaj3tB3AawMk5K5gMLrnFJLpi79E9NNV",
  "key1": "ysNSzt9dqkeeaamVsyS37QfywpvCox7gypXupDpwLRoVH1zkEQEeBkYaEqissfeodF4pZoRgB86HjEXko7kXwfe",
  "key2": "51PhNtpmmsZmaoGfCFwo3W3K7DWA7WZdWBidH9tuSLuUtQomo6FSjYcXzs1Dm83Pp5Q8S8LGxxZdGaQ9Gi39fy3E",
  "key3": "3oTCSQqDrXFjoWA22iFNraWFK3SmDQbjDVsAz84ziimbRdLbaB8Zj2rnpxxQpBrCw9UvEymzno8pb3KTMaYXtqgc",
  "key4": "wE1Euyii37FTF7mz4UGTMpTmEimYs669SS4cfpNDjFMVf1LqgTkQLuBY1LHKFVc1MtVrr51bd9TYNBZdWwRkNHR",
  "key5": "gMHP6nvtUmoeeJELvyLEzP2sF9G1Jy675UpdEwBTaHvf6VJ7nwv9cBRvkMhnj8rmHoUqF7thZE7uD8R1RSmeMeR",
  "key6": "5Q4qyR9f8JZarNCNatfe2McmoVqS2JNfFa4qiSh1oK44nddMNwyyXNtykXEueZNGRm2b85AnZFnaPCiS6akoqh9o",
  "key7": "45xCpyoVMntmwQyjNMJeyrT5RUzVhfMSr46tYbFnb1iawq2mfsMjGpSTk1WdFSWox4M3pMGcrtKuCL9jTQda8CvL",
  "key8": "2XHju2U7mBbVGEGNNeF2DtfLdwBJRv7noGJkPkU4oEVx6MFdC7dTJMQados3UM7htTH1nRUMT8h6SDQS4sMQX2HL",
  "key9": "55W9kTzRSiy2FcjVtJ67z5pd8t3Gbrt1nGcExcpfmHKZCJB4jcvPV77DpR9zYkoJLjLmLgvN86m28tSJYCkiwH5G",
  "key10": "GiGYdE5V3nz3NtoNFMjq85Ftb6TSSLNbq3drVeJ2Ei9T92JoEEyF13iJEpARBz2CLYsuzXMzdfkot7HAZWn5dUX",
  "key11": "236eoksABnY6yrhsucz98RW8f6wpQPTVC2S51xrgXvpEXap383eR8Tuj1K5nCXXnS9ndzRwbctiZRP3Yi7Xnz4Js",
  "key12": "2u7y4q31wTmBrq4HpNxPgSjHUaCrSA8ftnMtnudvtsHkBFtvYuuiUK96P1SSnyqpqjzNCJXgs5EGdVjpcq6re5RK",
  "key13": "4NJjaGUR37HixtNajsuhfcDV6tk2ApPP2XtjoQU5SWqZtfXJD9U7wEgy1Tj6TVVgBqdyohofHkSv3SKMsuywbCba",
  "key14": "5s18CSvL9vHvqADzxtAAM5L7Ufshr9Z1iitenh5u54n4aL7uqgorMrcN3jRxVgQdTBu7DFAbo8s7ezaY5i2EYVyd",
  "key15": "4zT7FprwxgdVWdmqnmfEY8cLgLbdawKYazZJy7fg9BLrKotYABktAbchEZG6XQDnbhqduBp4aQh5k3xvbANJdzsE",
  "key16": "2MqqYF4sFd5MN1SHwe5k9grPQBGvoHmZrgwVciq5y1rZsN7CENp7H6747pybTW5PWzbeHjEwUDs5Nhub5pEPtjg4",
  "key17": "5W1w9nwF9HBjTGtc3vtRec3LeR5N5Qtfnc5hyH93hfQRdskFc1wvZNKjJBoMK5aRii6yeyWYWbg1mcMLZoH9RrR5",
  "key18": "2Akn5nsmKYJK8GtSyNymkY3VAtXuWVefHy98eeqV9NP5HQac1HqsqnmkbkUR1tgzndsHyFAdYw9ZxsqMPYeDHmTE",
  "key19": "kuJjPFxjYrZJfQyQ6rdNqd9556GuCM6D7yaMUriQKx3m2XZarTicH2h1vZCtacjE8CVPvm2BhocxoSeNCA8Goc8",
  "key20": "2RwLQDoeubW6XkvovfPtsmDCHPzBqp984HtRouJBaKY1xNeGwv2oc6Cz1fNUnwXiJS76Q5HonepHQY2L3PFtUJGs",
  "key21": "5jM27yy3xebJcb93EVJEPF6zsnMeSzj1cTXm4gVwW8rg8fGtUo5wmgT2p3P7HKCJ6fHkrR32Sv1tKU6xyJ2h1Ztt",
  "key22": "bCxe5nowXS4KDUvDagCDbAEmDuzYrbSrm6A1BCMquQqK99C3eifwrTXf8oDkpkGYLHuLaBQWkCCeYXiA6aTRhG3",
  "key23": "3mneFFKCjQvJF2Au4SiVurfWCu8SpsSBY4tp8BWv5qVQDCHGgNz41xw1eAfgYiRBgYLaisqrWu8ripEQS11Gq9zn",
  "key24": "4BgaB7kpWT5gqGCU8s3zEhY1noRigVXTYkeGdcTGwMH1tADH98oHXb1ZjoxMa8C2M8thbkVmM8HSgUqCWNv1sX17",
  "key25": "4LqyVfcbPq7iqpfR5UkQaiVb159k2EUvBRFR9v7LQ7sREoFKvHW5EuXbdftHXH3CcQHmy2ShTFVm3gtvsSCPaEuR",
  "key26": "5XZ3RRn9ksDi4EKqAMxNzmX19NejSbz2wcJQZnhDEYrNPuyTwWBnmSdyXeKFESG4KxUyASoswute9amx82u2bENF",
  "key27": "2BbGjxufHEb1Q3oeda1dCUY1hEjzHeyv5VJnzpw9dtnroNJFN4M3LntuuTEqcQ9AzCkk9pZcYJQjku1GMh6b2gpb",
  "key28": "iJyqN2yiEjqcnjA9XZstdqMsZ4M4tDjMDrWt3iWr84GNz1qDwA54QRHLhPamb6jqmZ6u56Y3shGFtWDFVMmSYKN",
  "key29": "4rXd1TXyj2Ea3eYdHCJA8gRdE1PzaPbdtDR8UMio8jk9bRpMAtcnmv9h4C9D3Td3WKjkZDRDH6hzBFnhFCBeViq5",
  "key30": "38KMh7dfntXdtU7UCwZTBxt7Tm46kap3bUFL2KmxeNqPzRBRWmpb6NqWav3U81oj4Lu1NPyc57ugZfYWBpNoE2pQ",
  "key31": "cp9Y4wNCzgJGag1SbB9HoiFFnLb7DyS4p4cFjwspwDWFWfU8bbwTCZbczTkFUTTGVJ9xBgUadQwMYCdoMJCdWNp"
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
