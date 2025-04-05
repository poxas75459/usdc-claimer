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
    "4ZSkx3zA4qaDrwyP2JTwLXnVrqmjvZ9m2arajTj1pnM7MhkGYx6eb7Pj2LTAXHk47nByXdys7ssctTsb268YFDv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xYc2pGwsCRUJf87p356fk9BmufxMnzQpji2o7om3xMeG9cyfZofPppXDmYaDupdCgHTgR1tsdb3zQBe6ogSL93a",
  "key1": "62FbxTtEky42WKWUKtYMWgmJGXLBpSNYAT3NFHZ7DF8TN6wgKo6AgB3DguULkewfZByhgKQPijEMiKNX5Ht2PCUv",
  "key2": "4vjBFDBAzB1PtwecZcNXfrWgntFTuB6nVJxLpV93d1osZADgJYVhXxYrMktHjyXwkTZ2BW6VCiCBP5jUAbTDTcGy",
  "key3": "3j5eFbFWsmayYiwjeGWdbwG1K9ybEbQmpp2QzX17NtKa5DtWjfp4PbUX9wzgUHngt6pUidwxLRfVW15E22EAdD49",
  "key4": "32v1CQRhMMA8Jr4BAfcTuD2A8c3n1ztNdUZWWH9A2SNn7JkHeeaEdy1DLzWibJ5a4UYLSxoK4LSsmYoyhWqiTQot",
  "key5": "3Qe6Y8XBLHRkGdqCbS5cDcWdMHj4ps4gAfoVB4FoGzjhFeTq4Nso266NRBMmRaEKymRJ5Bxev8ssEWx4Z3wHa3T4",
  "key6": "v7sSTpzTiCKJzEfUgmHcUEhJap7SNXrNt8RS52KvRoSPXm23tuHyPuBv5mJneutEGYinKg86Y8txsUXEYhiDTLq",
  "key7": "4puSoQLobnAr173XbVrM1kZvd6bwrmmsvNJG9FpCzJR7WLpLUGb8o2djRbHKfPBYdSUE7JFTkVPL6fzpzntfinCw",
  "key8": "4UYjAhNwqNbGrmaQ8FVf5z4djx3mzNdgDYqKS69FfY4UFD6MSmxpEocbC4NzDHZhpun8NZQV9B5A5wwkTTD5WCdN",
  "key9": "RjcuyxhYqgkTTWdExJeZkD7L5NuBSND6hxhb3y7d3R2qkKx2CUXwgseLmrux2rAtdp7ZxZw5t9bkB1VXY5HEf4W",
  "key10": "4K3zon4GL8pTg52A5BwhDTDkpmZkJVzFinsgY5u3oraxiSE7aRzuy1xQxpMYkk4FD79zaZYxg1zBMRF4k3Hd2ciK",
  "key11": "55nYrH9jpgwEuPutxagWcrioeGc1JxPf6m34hzcordzPfMxkFk4M5UoF527MSoijwKndwwxYoUNoHVrH1k3YxCGU",
  "key12": "4R29xYvjPiK1CwuWwrbRxShfmZpXPM4QdH3sotGPpNuiMDWfZBtAjfd2VBt2FCN4ExyK5wRJLDBYWmDEZ8K1Civu",
  "key13": "3mg7C8SWfJktegVkjRu8E6yiofkPgxGeER9mf59gdBQRjVBbgKmckwBBS9BiWGh2W3C5CnGtxxUCufyYhGcn8xDW",
  "key14": "4JhH7GHjyZFFfZk61BpB46MXGM5oZUB61jD37gwns4enHLRjwJxMspoSwQR9eUMnh3fycT4XmLwosyvftiVmDJX",
  "key15": "4MooYVuK8qiK32S6fjMto6PB2sxQonvuwJw91kKc2kzvhmanbBC2dRrSR3K7VvRYtS9WZGdf77dnqb6HCFcM3G7q",
  "key16": "39jGXXmG49uLg4VzLNmaboT8Rojk7pidWATBHceYAEqZWRz3VbfW55yyuv1GGL7zszkAx9Gv8Dp9UckJikQqqQco",
  "key17": "57ArdEtzFBEmv413E8G7Sg8JJ5yHBG3AN2hzCLKjfpgVisnix4bRvq543BPRXRnm6L17rgQLz11ALFQ9NBj3ftcH",
  "key18": "G4aZqXCAYW8r2EBTw9ZQvvmP9V8rCqVTFTMcBoSXVFmJQNb4Lm3LXodi1b9HyFgK4jPkYjxFUDKVbbM1zCD94JS",
  "key19": "wa4bKi8df8Rpw6r5vuczSe3af28jd54BKWW9k9r6TQGAPxAkoLL1C6hVcGeAY8iF1Ww6xRuamba96JzaP3MPLUH",
  "key20": "4y12WnYAoX81vmTq37GxXGsJKB4Z8W9YSWysTFYUNTNyB98Sta79MM7hGCrmVoGi6ziw7SuTZiAEnFtqHWKgwj8U",
  "key21": "2YxaQ6tJjytFFa2Eur4ngG8YfNw14fyhzf4yNA4Sxb3fJxh7AXYrFW5CfpAxrnq59hHY6ZmnTS2kv4QcPfSGonGt",
  "key22": "2d6Zu7aP8B94P31RKjghaKycMYXzBn5KGwMxfYmxCVABtt95LrnxBFZ23HwywPFTHBbJQ1svHtvTwSwyjVTDKTzW",
  "key23": "UiNTW5nEtPWPwSmfck6RBaEZBTdpTL8zUUToyo2fQ9YJp6rcW6T36nYhk45wP4pxFwaQs86jnW4QhuA6MQwPzYo",
  "key24": "csv5ny7n5rnGKKUUufVF4Q5geCx9scWojSmaHHPHYrh1bPR8NpGV5Nmj7NK64u1g3LywVXTKn6sREpvPqPrEi7v",
  "key25": "4tMSdfrrs5uEwq1Fa2HVsACeoRB4nKG116eNmYixAgaNUT9tSPcoJG3auJXtNfDd7zgs5edkGCx4LNVhmMMRVh8w",
  "key26": "31e2ygV3uwH3R6E7BgkWDzhYMqKYfXiQLRJLD3cEKrkEn2uLLJVhaa94yj5Phji3avXUNjYgQZU5SDByj3eS9nR3",
  "key27": "WrbvvQ2uH4pFipkQWxEUe13fmU3iRD4ihKFouKgzfmRi2Nw29VYWBAK2fv3Wk4AEkFL19wP6f5QhDssGE2wDEzv",
  "key28": "47hDgW2s5S6wC5BSxnxCiinJMzJD82mqgmB6v1ruVuq1hjnCnVaTsGqKhKSuqdkxN13GCoBtaAxk6YVLg2fbUse3",
  "key29": "3gADAXoHwDpXQDHifomzztrPHU5t3zQqbYYwxFCbjUMbHBeeZ3ZUBYjoQZ5X24bjDqCv7X7CWPjQJSgSyp1TBtty",
  "key30": "5xfdHPSfp6bTwXXS9629jiPnrGwyFMJTFRbAxZjuZmFqBkDZEWSo7qQLwx9JfHW2P37MoRWEz5JqcJrJLQ6rZfEo",
  "key31": "3hbHMuQoeF2qUD6SjmueVpNoUQaXkS7n2ESe6DyPopxfzj29mQNKbhLWtbuFzviTsG21C4jJAuYkX9jcPqarzUym",
  "key32": "4fmFCPphhRnZQj5WExUz1Bz2fA5DDb7sQEvfSSsFBywdBiPdT7KCGenHuCSN3TE9iZxuksNVBEpwZ3tAundrCMFS",
  "key33": "2U6UQqqXURZebtSuX3NdCTxfBQX1b4EfJ7mbwo9iYWdELvdQdX7B6C9bP954ffQoNn2XnJ4P3vQkYEQkHvEn2T1Y",
  "key34": "3d3HtAiZaQaqJsg12FbJRfBwn9HavdvSCxMvWK1nHQGsdUbXFXPJsQvsyNSjLmKxqZ8z5LzXbgtVHZBNCVyzVYZx"
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
