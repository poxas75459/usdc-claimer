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
    "4btnyJkKEEcwrf99jNZKBzCSoEZDTJGVvghc7yU7iufiG7jhmcrE18jLxKt6pb2haUbR3dinjh2TxppMjvNVv5kp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43dHHzXpEdahxU5eVsMdAYM6zADZZGjJpaSjEmSqA1HmABmucSdHJmce1hW7gFQbnGQV1ABr3Nk6rhkpMhuQzgpL",
  "key1": "3XzhyQ54K6ZcEufxQWAeMdt19c9FnECNshdZk4cU2rfUhbv4FUBFDLUm8zU4zziWsSmkwdy36JgomRS4HQ2vGsSQ",
  "key2": "25Myryg1EeMfAXiphV3Z3Q4QEPipQS7b26xma7EbhRqnVrt5aiod7xgYDzzGsV4UAtrT4G2n1vgHxQPUxUXjJM7P",
  "key3": "3hHdNYh4UYugwbU76L4uZEgw7qY1WuvwTL9K2P34oFVca7pKQUZs2tY9S5XgE5tEKFzCDwqMBm3sbxa6E4cy4xbg",
  "key4": "drGgN3UNe2wiNReuo7PUXXEKWuBFfAxUhLUWzLDzmCxYyMifDbZ9s7CZ9MsBi1EYJ8UKPBr7ung4dCvPg2aKJf9",
  "key5": "2x98ZiqRBW3x5inACeRyQTAXQojyHPkyGwFjoEBZ4qRjCBYyLTz7joNWxhah5ELDJnNiTDuEK1cDUybtUW5UL1th",
  "key6": "5hyBowfwBGFAqtAX4SpZ9n9CdB5fEPiFuFncAcrkAjQzyYr1Lcad45uXsLY7KhdwcAsosRT2xiC2ByXN1P6igQGE",
  "key7": "5ejttNW8und2vB2d7EYjvir7wCmExomxsWqPNRzAFTcSxT46V658wqBZhckHmiSAM76o5azL3FuofPoX2YduZY4Z",
  "key8": "f3zUTWGCiJyPneSGoS2qi6UVGAVsLKqMYngd16wWYFUqoCr2ZbhF1saWQCrYvbsaA2oM8544Rd3X8rLTg3DwLxd",
  "key9": "5uzvE5Q4BFxf1VXaYudyzb77afiHKszNgYu5Gvkk86y8gqKVA842sNP17z8g3bEWtUrTipeRBcBwFefU1aUDse5F",
  "key10": "SRLNnqX6Vsep31QRkAr8vcDNUehL4NA4qKotGCsYJfJbk125jsWGvo1S8MwDWjqKGGhL19CabFDRFnhFpX76gFN",
  "key11": "5rbw6tvdLpwMCK96Jrs9Su2TNrLVZab1k2Rj83vduP3i1xG2BQrxUQ6cGiWRT8zaxSYLC1tn4m2zcE8qk4UqfpLJ",
  "key12": "X1vpTRta6SoNSmjogPCpBVDKoBEjzcJVCGfdtkQdUShz4U9TYbiufm5QZMozi8rfcUWvEbzdLu2qkH8Ua4xbZWC",
  "key13": "53K1uhvm7cDNzvuZBap61u76Rvp8spV31gKCAT5QXsw3YFCXAoXngKLub8pucQrPVQpLB1mNksjMPqBtgvsN5Mbj",
  "key14": "3fXmfgsymsNPHNc9jU6xkZhekT797sB4oAGgLPnKD5PJbXZDoD3LRrbhhsuPKHtYBbjPSHnHcLWDDRZv1QoZdhRz",
  "key15": "3C8h8j9q4MzB7rrPJASxbA9Gs1DKhXB7dxWH9GTW7tvzo7bgPJMAqpbRbLBZeSMWk78u2R56VCCggSQ4d7FChuyW",
  "key16": "3yG2Ddbnvfn1u6yEWLu3x3inU8deBE5QGFH6utkRYqt2AKgjonxJewfGiX9nusarYgBH3RnGVFuMgk6kgpLfpywb",
  "key17": "2UC8cWfcgU1LrBkbLWR7ZdTtUuBx1W9ZXtVGQU2wUJjvo5FuLiuYyyaV8dV4LpJoKjipNPmrT2LiZPVNWR8vuBsK",
  "key18": "9PvJBbZ7eoMeSrU7LhcDu32SJHEGsmwttP11VmciYTdTEHti4dQQV5XvJjtqiWiEQf34khKHu95zkscBBd3QJeW",
  "key19": "5PQBc6NLzqXgbp3Ya1hfqqGGtLJxxKkS9LbBrfYFMJn9eLoPaM8pJy8uWWJfGoyzpA2F666tpnHiAzpsqsr7dVHy",
  "key20": "4SgXBGahA95ZgHxQucXkNFWbyViaiXD5bkeGaruzjXAZDXxJ5Tg3UkQT8ZRC4Rq5vGGBQpTpEUiSrX53ZzAYJnxG",
  "key21": "Lf3A9JwmhDER2jbp182bK4wbVWnpmK5aJ36XpxLa5dCLdseW83MmUN9jSUo6oEQfsmvF1bvJ5GPLwgfcsS6Mc6Q",
  "key22": "4ZYjy9DxY4hN9AoAoSWngsazksh2sg2kweSWE4Br15YRFuANMiVay7icHS4EKypiz6rujn9ncE5PwAruaddhT5sw",
  "key23": "z5WKQScuMQMApHNfNHgfQDok18JN4PMtbnwe6o9xxG15p9VmPni62a9xhy6ugFQg9QLCp2N1PTQbKTQK6rMsDFh",
  "key24": "2UacwVmcdjN2CAvWryBH6SwqzrSGmH7KKFbwqGeuAAENQr6Ewym58NmDybzTysKWv8Hk76wK2REorkguRbCo61xk",
  "key25": "2cbrZSQituPikKnFrHRUQo3ew8ujkA2dsjTvADvgTJ33w9LkEc55dziUQgcrZaU4rC5eAg3i9uN93HBQwtjJgXZa",
  "key26": "61UqhNueeMvPrV5fJ4VR6yDydr3px9zij67naPj9RPU5DzUnaFeYmhSxPZxFmJ6zuRzEtz1miT9gqBPsFtcJKJek",
  "key27": "dXp1gG3gsLqYNyvwurPAwXzT81vz5xnjoMxkG6WBXGTY96m5CCJbdN1TWqbTDN3aCGUFwZDEM1sNLY2THRCphGX",
  "key28": "2Wp5X26ZtKYuZTRWZAccH5vY3XrMuE1UxzivxLNjL7pZUsvwcQsuYJq9o1oXWrKuyHVe3M85FhhAEUbgFupQvRqo",
  "key29": "5UdmDxxaW1LAbd1tyCMgGifRi77bX5pco8bJkF7yDDAd2yFB8PCeKvC6sUpheybzuBrhfeEWncUgFwECUvcG1RjC",
  "key30": "2fCM7Crbv1ATy6S5aqinBRer6VDBsDqGkGLWh47r69zATCGTgH8BLXiDV2RuyUJsQvvDyGGiBN2Q9LMcZCcYW92A",
  "key31": "4M7j9WsmtptKUoick13fJqRSoL6J2hF7Mwa5qTWkytEXV98VJYs2jrkPxmzsSv2EMiLUqvPF8zt75swGQcrxi7on",
  "key32": "2KSNjizZML3XdNNAu5aLCcQXxXgHBRQ6uL2Wc43zn6cedsHfrRcg7Msb2SyaB7KUpVFkjcDRghCdq58iPKV9Xg5K",
  "key33": "ne6tkmJd4qjNC6G437JqxgJdeBkdawDjPQjMLPvgiavwMPYMQUdChCek4vqwq3BwUewoRuR1WK1KcGVqxWbx7Mh",
  "key34": "29uMfyrv4RccrysXfsNakvLykLbwSAhxHMEKQ72B5QoFvGT63W7hSarQXXoFKc8Gvmtpw78emZ3Rk5mcCKnWhFFE",
  "key35": "65gZ3SfWob6aEqrXyNiUuov5XipUXkiKJzzKsqWsoBK1fqHq5GiNE33bN6CDMEL1b1i11XCo5zmRUpiMvgwg6yBs",
  "key36": "2kpf1uwqkzAYTbWgi4ZQxjvZH9e235xQpxu2KrkgjXwXiVpzQCoZTZDnNzTzKWoVJ3k8BbE978brxb87rx6EWRdq",
  "key37": "2sYf98fJK2baMfPrJWdPwf8qF34fEGgJTNcRjW4XH9vMRXD97PyfKsu59EvXrKC4rwfzAToKPUuNrfDuQPA5sArx"
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
