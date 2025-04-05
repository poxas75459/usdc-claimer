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
    "4KWy3N26GxPtcHUGgAFgvDbmLbndrgU9ZYyRaNZuTuz31CpzLwZg2tPnpEPhmK2kTULYvenWT5xzHhzFHDQAdu8m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61YCWuNtMrMx6mRN71gxWYt4Jm7gq5uHoHVxcFzL8BRHYnSuEJzb7cZHEGBVLH169zxAMNVywaYmw2e2gXxFxm4e",
  "key1": "2kfr1beCaRGmEf5Mwf5cajkoCG85edLUd4nFmSXwuhrh3HJw99fZAn6awfP1ywVhejbVQPCTxxaLmdK33S5Biinb",
  "key2": "413o7AoNv4XSgcLeyYgjpb7PK1L8boPp1MepwoLLKPCitGTdQrJaW4zqPhiTN976i6JYTdogqdTsh7S2BrVSCfaS",
  "key3": "47ncX1Jqci9FW7recnuJ6X5gXRubtnwR4eYyCMxDRCdHofKF6nAZi2WoBMM9hVdCD9f5TrkEBYxk1gWHRrfKrbWg",
  "key4": "Ph9YmgcZTa7HzMcxGcqVUo1Sx71aaUTVE8dALdwpEZ54RDoYDu1L1LXdaT5inLA3HfStWbDJnY1mfAGhGJGCjyF",
  "key5": "phbPWzG45DsRHVX1Gnx7urJZSPpmgu5dHPkeLjy1He23B9KRBuXL542HZFDNWhso62xKSZoALazRq8LMLXBWWSQ",
  "key6": "U9fufdKiqKXZE5PZ9HeDUvJJuU8A65Defa12HFwqHvPYrypwjqXP9LwsiafQXgieySSRtY9VW6qbSnSAqMBpYCS",
  "key7": "4nFJGXhxDei2E1DHxbumqmA1WLPaqBbpnwBLPaqFPTk6Cu9TRSiLGRtaG9Jkk1oTPc7ekbofUGAWEd9js3NDpffU",
  "key8": "5uCZaF1RUhjb8E6mrKqwCXrw3GSoMJL2nX1mP1nuHungqDgusRrL8ptpHHetcFCH9RAnp7YFeU8HEMPP783Vfdhe",
  "key9": "7gi5ntinxkousS9xksTMhuZhSVLcEvZHDDjsLDEieMJUrePxHXdxeD6kE3nyHwZg5ogVJqC25Jjb1ws8py4CyA1",
  "key10": "VfNLMLoDqAmwpYAA5S6ZTLV745AHcP6RQjrKSaA3QAEadJMGBtXApgSq2Hr7E65m73sA9C7Fz8iQAX8zMX6fvq9",
  "key11": "5f7BmTDMQJQeyJ7uhMod9NM3yis3NifMDx5ePNMy7BYKZY2RAt2v7birDd66CZnJ9BNoS44ex4B2xN9Eik9p8ReF",
  "key12": "4NYxvQPCJDp434sJtJFQhHooWAtt5z16WSiGqtzzoBAW8VTWhYdTubJcmnkiDrqCGzhbkDKs8sP4WzXPHtHvMte5",
  "key13": "2G3ke6VrEfuXV1ZZZkT9gUyKRkgHSZaBCQBH6Mg1VkTZArwbpUmu8YkxRFB7XxaksmWtaABUMTxGo5LUeFSXgaWt",
  "key14": "4gKthkST8uw2SE7oW5ZpddEw98JAFMu9mBiu1rLDhz2RWEtUt5Q5nxCkiaQthJkXRCvYL5R4Ds6YTJbFJZTnEyrP",
  "key15": "adxJnLdropgwmCPJsr7czD9non6a8y84htg1wWZPoc4Qi3To6XPjiYJXu7HAuPbH5xQv4wcBwN3HZTYeSRLjPYu",
  "key16": "3BPSJoQGFqpqdCaAAAWmzeFL7k8dwSg8ocXkKu2Ki194P8gZLu937XFVrDohgFQRGdzsNGHPnmNkN55EQLTKQDcn",
  "key17": "4wozB38FH4fZfCSGv3DPN2PtjTu8Pi1L3EfLSGUtPqipvy1Q1dQvnwajsvkVw9C6LWoixZKHrNtY7nFVJQwz3BN4",
  "key18": "NZCk5Bo9dMFTDP1G7ZyHdF7UAfisPzKY5GW1ZmSmkpDyRbdBF7w8TkC9GUucjMzqypsxCrawgfkjyQhFRATXqdp",
  "key19": "4La77c9a4d5oQBz4TjKYgGN6qtHbdFsfuVHT4t7y3JLqRdUwUhCKGyNtURTz2YvnR7nkiyf5nNpsy3XKsPpDaTpa",
  "key20": "3AUe4dFMEs5w2UUZUBfodSnXXtMSTASU7o6X8DL6ZRr3H3TNMiAjgu4cd2BqJF7DaUhnMdRNWngYwaeeQ434Lqgc",
  "key21": "3bW1kFQ1pDDX2H8WstaGsZDuTDWdff7MKbYnRyVCFTfAChWqXqf5spT8411ZMLa3CteTrzzGcJJVkdwwnVjEixGz",
  "key22": "3bFuRsx1ymW8LP4oZa2T5gr98JAfCiZLcWvcmVBqnudTpohxrsMRHi45YaYTRgNhaRNwVAHj2PvyrfQTikT54AKS",
  "key23": "4ViE8aQYEKaZXkaEKYoyHJN15J4ps5cPRQkBQ8QYR1zcf1S3Y27f3eyyKXuoXVziys8TG2MuVgK8vMC8ib9pvWge",
  "key24": "3VBRmJ6S7hPZJwj6DTeNPDcVJE8yGNHn6avdndBa5udJfS9ZK6nYuRXp5TcnLt6CYmfoFVxUN4L51bdvs9o8aSwY"
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
