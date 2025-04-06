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
    "2syzP6xvmi2UtkEP4A9Dhrj3pW5P7Cqbq39uairkCgT1tv23vNrdWj6MousQpH8etcofgt15aeCSZ5Jc2sxrHFcr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sTuopU3Z6Nv8zWknNC7iiPBD3QJvGFJn86cMyXMAypzn8jsgyBYtDGA2iUYjfckoBXYBmLBqhwZwb8HHwja5CuW",
  "key1": "2gj25LhzpdwQ1S2JNnQr1sJEprW2FJEjd33h5V9RcjBF2grigy8zkHuzoS8K5g5r5vQ11zuFYX64wURHV7zvZZRb",
  "key2": "CoKppWBhjN9EPqX5dZFgZ5VwM2cnbPkVZCvo7JecCVDifWP53NjrE6bwF6EVR6XnybRkGJfRjf7TNoRDMYZCkV4",
  "key3": "hgt8RU5g1SK9KTbPiHUckWDKFNywdYatQ3E1XCxwBwmNRvTM9sEMmpVjP2eueG8jM6ng27mhQMTwamVQpDxxzbc",
  "key4": "4yyGH9Pvi2JeWQBRDmXfE7m4yaatjDgKpDety3Qa57XzgXtJvCME8Um8uoeCZW2R9i9CSqpmGXqMBLXGDb7HGg8t",
  "key5": "4bbKmtJSdWwJA2kah2UijqUtzGZvVz1bBm1WcgdHqvrQDtHuCAsn7ZxVnNjY6nVdRQyDKLa3Vu6wpv4Z1ucrDDwx",
  "key6": "beZBX2AwhXm6yWA8KPDeQjFRkUBaztRTJZkB7pa5bsbangMoXgCeFBGZyMaMoVtc7Eps3yUwc8McrHTrYafoBJR",
  "key7": "StykPYVCp4K9HH1EXxNyxstxWRPwM4GzRZGupDSoCiRqQBNXdqVqP9929W9RVGk2Mowa8SCjdL1wMRvxaEPw7Ch",
  "key8": "2KkZ8JXLPLUmY2k2JzsZLgPuohzwe6ACeVZ3zjtdSmJa9mt4UEKkvbqNhCg6xuwSFhp3rxrfwWiw74vag7f4JEew",
  "key9": "3tsCd9Z2EtMfwuyrptta4zDYZjjdx8sFcDUvtGdoeipidMFn6KStGN4jmcBAe6fnxwuhRX33YfmhaEYdyxfonXzt",
  "key10": "5jtMBQ918CixRUoY4GMWhpPdxNdN17y4t2TRMHuFsgcjzojgqmk4uFeQeAWAYAJXDFGPfXFB8sAw9Fip9m5etH3f",
  "key11": "3Xdoo9PcRiuGc5EsJ4Bwi8yLZZz6uM36W4nuDvEsHfwzCoEV9SetrTD7PrKLByxh7FoTEpKLffKNZZC3ShZmuwvM",
  "key12": "Rc6MniXVovZXQRS1GUxzUCCvEo9Lm15EDGCv1JQLmbwL5PBw8a47adBNynu15eznNtR6fsc3ZsZtimLxW2tancM",
  "key13": "2HhLR8gaPkJbr5FdPXztAhfR7y2LM1fC23evsvMFYT56LqK7BxnFBhCqdZcWKuaYpLLN7Tip7Dww35BcJtDhBBMF",
  "key14": "4auS91etieR3RPRBMTtCTqmfazaVt5RoszrJY37zgZ7AgEf79D28fHNk2AgibFtSw4igkcDsB9F8yxTSwYbSuAsf",
  "key15": "31VHSHPTM6RPD4UQu6r1TPUHW9mEUs58AiKMaHqJktq8EyJddavz37mQLdAEczijmWs2MMGrnLU6Pyn87GzmctHn",
  "key16": "5m9GN36FKqapaevuh2cMPaSkX7T2eBFiVwH9Z8gK2URdim7MCfV6m6Vu8QKQqYGH3u9xNDvNppYG6rVcR2Ha1PeT",
  "key17": "65Qo2MszEF2UfjsqQ4C1jqGKdRmS4vssF6E8dErVPjng5ASv2BexaRUba5p4FoGtMegtmJmY8UV2GoDbcPEyFx6S",
  "key18": "39ossbw7AHXq2F4fA6Gv3uE2tBuKV68qfyAFZsRA5E8rkbJQG3gmKNfKMXopDakWKhsFAgN6DnPRhV9kiMm7LtMB",
  "key19": "5Xk6ptF6Pq1GHgd5KwKcsYHEF6vL27PHudfYpCPqSL2pLe1o2dEg6T6x7Bd24trum82XsTxPNGEhQ6ZH7NMeLs7h",
  "key20": "4eddMu3VZWrMedqmTknWr38C586oTcTmekYdHoczT9V6YYnwpgwodMq5n6peiC4rTvyVRiXUwMo4f4Mu3iAPpMqG",
  "key21": "4SVbQi6xztE6vNbEGv7D4zm6X5PztpG1Dr74kpKUTpR5HHFcLiyZvMQETSpgkDeKzvhAtZSLhn6vYLubRzuDC8EK",
  "key22": "h7B58nmtdnyvPtFdET9VMcfCkcxDh1tj4sYCNWZYwhnufNLXTBprZ2wGu5ZEP9e8bn4EAzcePuGL5NXxQSTZWoR",
  "key23": "dJYC9KCXgk7qzGigf1y1Kg1HwK9UDeiiGtobQK3u7jsoopESvZKMqtDL1jZ2kjeiDhauGWvyaBqe5Q9kBqxBYrW",
  "key24": "3jGHGns7jLn8H7DFrPZcZBm2Gfkp9c2HW1Z8FxbKytPfmi68XM6DTStnv58R6n8tUxK28Hv2fp7jPD3Vt3FLj9qK"
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
