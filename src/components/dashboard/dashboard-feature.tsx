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
    "2aKrdpb3V8SYaMhcGQKfGmiPzFedN7CdGuzfJdLUpGNFggRBwngPTDuw6dfwDdpfE6p433Fk4yay9sV2CN6xBpcA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66dvjQBsrGraJswDs9HnM719SYeC9W1XnGXtcinH3svjEiFhHaFRJ9qqvJY7ymgm1ZxT94d7pmokj3jUVMabq3nH",
  "key1": "3iskXiyUsWxYeqBcuJxgjn9jT4cK7U9zhddiV6ADudpCcn8m5nzLaWaKRzkRWTbKKDAarwCBLrWsH7ApLnfxR7rC",
  "key2": "v7fobWskopmoeBHChieETiAvW7rUNFZJq2C8wUzyPs1GHiaAPdVYf1XSXiwBujCaYJCsZynkhfKeCkER7h4htrx",
  "key3": "2vfD8S1fFqpqdKPD7FA5rKfWmCfUcBc2N9TJyKnEdmgFmshbEap8wfKuBXWjQbzvW3sdDA8QUcZFFn9ZEvMLWcqM",
  "key4": "22WQztpUPqBTsjmero6ioRxznNNK9N2BCV6DBwK4Si6oYuXx1aa2vhLgVHRB5x15fywuDDjUf3CmrKcXT2LEoq7z",
  "key5": "2EJGSv6tUTCuUbR7Ed1N77PXZ12hYK1sJfVGw9k2UT7aJMMpBAWXEPVPQrBR3MeQx7LJgLbkQGZoZh35DrtAYvk6",
  "key6": "3TPAggu2uDNDECa8TBCrc34UH6p4SFoC5NdYYfPpyWxbK1kDWozG2B6ihuPqJK9GJ4Vo8p7GFZ7R5NQGyDzHuDfm",
  "key7": "3L7oAdRv3xwxrGRUkeajD42uDnSfkzy6Rc9uPhnH8ieuuYXQixXjLcMHCLgz74qwcbCtG6fYL9AwSWA4CVBmUFSf",
  "key8": "3ANf8kyfhqCor1CL1RZmeJn7frb3aLA5U58B9HAFfBzjVopXpr7HoQLLMfhtu2RL4vXdWworPgJ1g9o5nrBNc2pW",
  "key9": "3zeiAx3xnw77XyRAR33g6PFynsJKQVyHpQCdEgvwTjfPcSyhZPwjnMCZ93HTFGPWhkgvV8uC6KnEdtWVn9Qa2nwN",
  "key10": "4j1icNoMKrkb5hwP44YU3i1rhpAM9rkzbzw1NXaVYuZKvuymcYQTG2cah8oMFo46XkwatkPfgsu9Mysra9Nt1dMv",
  "key11": "58P49yZSZuri3a7fAQTPrB5onM7ecqkK4txVYUXXtxj9XQNN1LbkijgcTXcQnNjT43uFi9vA2NsmTrpngzyFGV1C",
  "key12": "KBYsPwcYtCkGfBtfAFgwiaqRxJwisKZXtmgHUFFqMYhja7Njmp3gFv3jMxAfDatC9ELAz3zqwNFeiPvgEjNPuMw",
  "key13": "3LF4UunwjWqtHMtUBb9B5dBzNZDbjgZpnykaDUtzm9BTWDKQj6FxhjKHP476Uz3Lszvwu6G9yUxchA3HDHptSpiG",
  "key14": "2kdSEttQgfDdFXEBucsJKhpSJQhrqqMkvYF8KNpb18zwZqNheqsUjFNPXevDtE1mP57nomMCMJm6U78BY7wu2r7r",
  "key15": "53f7sSA8JyKDDPYdzukZjXas69wFS93XZPiEDvZdHfEofFFXuCRRrKdrKweYQZ9CVqsr6wLsQU6s8dRE4yoJvrk9",
  "key16": "2BtEoPQpLZCqTnnKbPmBiZhVxcWBRQXTLEpS4FPvfBqRMovNyiCpHykxBEsXYqx3uFSViCUgmf4XvHQg9NchMGaE",
  "key17": "4NN1rcP1i1ajCP7xhZAqJxu9ob7LUBinVYpW4AfKEBeee8RV9HGeshyTLKi7uiyUF79VTBRiy9b86iXAN3oSG1rq",
  "key18": "5jq53MPCPwCJKQiXvVncMwJmevojNud9bCJazvjq6M2WaDkAQka6WZXCii2e6Lorr7Y5GXvUL49mCZssXscgZYDo",
  "key19": "2NNbhGV7tWy7oqeSjZfXhCqg5jkiVJQa2fgaz5WbAC42jWfLmv5xhVDtUAow7oruxxu8WbnRmezKmMSYrSFcZyCp",
  "key20": "2aCeUp98HVJbBDu2zki8chpD7S982VaYzKqj5QHe22VPj6hrdvfmDQafCBBEJ1bpgHnnoBwM4WtEg81sMC7Le3aW",
  "key21": "cmPXzX61kHUX2c3r8dnZVcJK5mavGr1zxgs12dMrR1Zfc2PXGobqJGRP4s3Fy9hGwB2hrhTwi2XoS9zUQ78Msvm",
  "key22": "2yMqVwHTQnziR9hWLNYpMQ3svsSHsPboregCJ9tZJ4nJ9d66YFeZYfjDcEcKoAnMFjZFScUyTXgPfp16d6cJrvSU",
  "key23": "PQmCSJrozL18764koETLJjFbRu7rptgfqmSHTYzYmLvUVFn4aHRrisXJZdttJmvtMaridujMgLttEc8Hi9sAoce",
  "key24": "2e9FGeUPZmJ4VNeAZRZeSAT49eYjrdKD39q5mDZHQBMzabPqnNr7Prie1vuS9NjMfNPNdcnJqGx216cFDHTsd8fZ",
  "key25": "2nBmQ8bPvENJ87ywLRRZM3NeGE5ezpj4XFQyVc2FrUSRQJD2o7eVPFzpzfJiwouCeu5o2zs5VyWzEZqiZJ455mKV",
  "key26": "F3oDuCGMCv6G4kecHUFUakFkJvjR1gcS5fXq3k39eUmDAdusnxhw1WfaaBbAaZ1pUd56P3XvKQ5etbtWhTQRu8V"
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
