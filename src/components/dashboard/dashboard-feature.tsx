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
    "4t47UZhbLyh2ggpeno9tKRV97cQEC7MFr54dRZsmiGenRUoE6rWSZRqpcz3WBeQaEKE6qytuRvNtKgnzZ69ck3GK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s6WRwXi2i23QU6q756FsU4S9eJJauoNdZkPDgGMzfabDkPd3pPwaMSAVVmTkUDAxcB2EqEVdzPTGwqbSPzaFzdH",
  "key1": "qvoRH92MaAPobw7rjsHTXCxpjumytZKW9JvWgjCsy76oC2x8Wyq33CebdPdJNgNk7abV6Vn4gBv9XsZdbnPmZe1",
  "key2": "3QJzDJZ6mBpK4CJ5PUd6EjSqd13f9aabpTokSSodgwmofpjCb7KMPm5kHTqQt6skJAKPpg2wwTwTaXWjLbWC6Ugj",
  "key3": "5aDUWNG7viN9FmLSCERXKhGBp1r5iWr8YfGAULxMuGB9BJ2fpYgLWECufREExtAjsEnkt2GzfcQDLChkAmeYVUaB",
  "key4": "3inA5muuTdYsSkgiJ9VzLBq5VjQ5hvCK91guYdhBRWpVNx6UpGK6fcDmosFVPgtGee1RkuEt8ovVMk6dhAMwBfn6",
  "key5": "gbaYBMnVPm77CcWcPxuXfZd3L7gAM8uD7jEWoV8EHUGjix5YryUChbJWAc6EiztVKouyJ9f5oKK8KWJJzMfHuq7",
  "key6": "c4HfsPpBHjnTWL4Qg7bvymXoVm7Pvh9R2h9nUo4iUTWpMckkceNEzDmgbUgoyFbxncCRQBZf14Z9NWpQxsCToCh",
  "key7": "5HwcyCPaLt3qT1r6KPPGkCEtvMUW9QckRyh2Y96PnR61XXGeEEPtpiS8nuvekJTXxkDkZmeP4Dp99RgNSSAQD9iJ",
  "key8": "54Dy5xbUUwY39rPZKqPCgXnJWHqpzm8SHHi5a7n8ca4E5rRuXQndJdCHAWZJGci8vZ6Sqy4KK6WHMTgGabwoevHs",
  "key9": "585B2bAw2S4oykX2h2QDTUctjudnTZ7esBiYDGte5FaHqsZnPEGT2n4a4AtLKE4SPfL6oJMyecGWbQWwG9VTbBkQ",
  "key10": "2ofDf5MGj5XuRCAozji4mrV8wkH9nqfSd7ndVYH4L8JNATB8uV9vFjJAVU6BHmDQZDCfJGQnVvuKNkKfRQTkdaWo",
  "key11": "4Yi2QnFpUAPW1n4GTuGam2obPCFwWKqsGfETFofudMqPSLSwvivUz6TMZNvLmsCtSiUF2yxa3UXyLGDgcBPu8Vqb",
  "key12": "2BiwUfTcLFW7rdnRBLoper2i3eNcRUWuMsMAF1suNGh5AbgLS2UXzNtMY4Fs24vVKdcv2EXgv8hnFis6YJpjpo1f",
  "key13": "353DsVbvjDYwBP9hiW7N5bNmh7SWRsXBfzSmP7j7DkYQ4iyDWgfiu8EBgXTc8SmRrUSazNsQydiWs2iTHKW1ZMWR",
  "key14": "MNLBpw7taEv2joK6eaNNbHRfFG4iEk9EHE5V93XnwSZLybm9WURhL4yrszxVqP6EhsnYebqpwJUEnehXfkcqL9e",
  "key15": "3vTfoUp6csuW1BfXQwUskG57RCBtqghv7TDNP2AzpTnk1GurhMNKcfmmycdSdxnSTiC69AvTxtPN9zCVxuPaktix",
  "key16": "4J2e8UMaasvPR4i3KBAH74UiBnQFKcappPaQHyyFijvf9Cie9Aptg689XGaNKBEhPoujLpqPiyxgV2fBMknpqRSZ",
  "key17": "4jCiV53XnYVXCmpVDauBNECkV1U4aSkTaiEET5udJ32cLWYUdUgTs1iWm2oycCg7VrNAzmjGuzRDCFQA5dUpEG1G",
  "key18": "4g3RVMFZQX8PYNkx2XvaWwMxMDByUfHHbWoryFep76fJXQ2FDkbTS2kHCk37QjRFNg6umbWyZmYpFvxWDAGAugpt",
  "key19": "4P6g8CYB3Q2mPUYTjDYWRcoonJb7nAkrmo7mMAN1heXJSWTUgeiEAddhSMdwaeHAMvEmSgxbaU356j2rKRctoYTx",
  "key20": "4Y4BsksFexTS5epnNzqAaHt5MNTsGfG2uywW5tkMhEKP1PsRFBYvaHjtfjS9ndKtRZ6jq3D6vWYZknjoAJSXajLn",
  "key21": "5HpppQjkn5iyArtnstsCf1ACzU1MTCaEngkVekZaadbiifG6zQpNEpAFecwAqPYRVrEcgjsSREAe6tTymtuU1v6F",
  "key22": "4puDs13jUcAcTnCBqDrwof8kfJSV16fMcXC2jLNsQbNqfw4DBYQHrCLKy3nMnX7yoPye64einXrq7NC9aNyujjBp",
  "key23": "66JQw2zM2Y91G3gQCyUpzpPH4k8Ro2iMxkhGBufbaaHT91K8d4tGpV6QMZshZwDJKPXYVj39qGQjYwCHwEku6cuH",
  "key24": "4SUr4bH8Cr6Not1xoGN4sfNwiaYCs8genharYxtoyHsQiFXJn8k9kWdsDXf4w5QjRtzSQzydeYBsyqdagmRx3hh9",
  "key25": "23V9NZ8cRuJGHMqJsGvNQPymb5NeKUD8qUiuewm1Maf4FSjcTJHgpHAeTv7u9s2th6B24w2APahVrj7iyoseXeif",
  "key26": "9EYH3Guq9ZZHrudT7YrBmY9vcAz4XMgZYyi9WtNs3eSVcXYA4zujMCAQKZYazm1L9kvgTDRZLLomsLQqma5AEyj",
  "key27": "2BtHx8oqfkSyced8MMiYUx6DNrK6FEdovR79BWJvERqP1VCbzfuccTmtiBCJswyYyoMarRTbXzxfxnNEKjjBKHF"
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
