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
    "2WCDJbbS4YDf2Ys6Ti1b8vm71qkixr4j5gob6YSVdK9oxKEJjkWCdDA7yDsTN8UfPmSerDJ74q6mnbcjesYqYpSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BdWdWJZcoQDPxtUXbbpny2KLsQNsRTtmz4rooU6F3uAhXTo8BGqUHGkFwDyUjvcaoL4fxfta89QUUEsfZZ67bbb",
  "key1": "5kB85Wf7dt7Z6ZUwxZdfnZLWmttgEagsCEz4majVggP8FuCyLvpbiUnLK9tVQTiqNisp2V3GH5V21Gw9cx8eh3nP",
  "key2": "34Cucx4iLYZyLZ2HUFyhS8mdRqM3NdA2JAbPAGPG1TFaUfs5mJ6dM3efrXJzCGNEmvWpEyuo4qRQFqRmFSKkeJsH",
  "key3": "KS5VunvkCWFdgGXWeSwM6gHmqkT7tXkF1v4RSevMRwPqBxmcxW3YfsCbw5dw7CkTUf8yd9GuQGU6zyAjTQi5pZZ",
  "key4": "3K8SfEeH56CDyAmftCCBV8iLFNWrZ6hL5WkraPoP225736su1HfgV53r3rASvwLSPwPKXiJrqWvWYQxpy9Vgfrob",
  "key5": "3D8NGK43e3MzHVVuGzYadk6ZK28yAp8PA4m6mQUickSRuovQ46ocdGdgE2MAwVF7JPg3Lr8PdabimXCnNXvQLZ9p",
  "key6": "2We8oD4nBxVzQpDWQUzTA7Sa6uhtZrJsd7oJsZqFBVVsmAzyiRAwVKhJ3pNCmwwwi9Tya7j6Un9dA7ivpFNr67UB",
  "key7": "2eUHDxZWrn9CJXHDLDUqYgoJS8UvJpLN28vsUn1Fri7GjbemUnBrop9G6bodEjsSxgDwMr3Nbos4oJ62YhriJ1Yp",
  "key8": "66RUTdepHWgJAAAKxkwdkAh9HJEHqkun5WkbHWfkHvN6Kg477R7f3Xs18i7ZSknsLzgkV513GuiNnrRmdynntzm6",
  "key9": "2m85xrA2x2xbupBSoPKNoD4wSf1nofZ7bNQ9Ghv8tVLGE9ZumR7HQD78nakqKXRWWsUiG9hzwT574t9nCaeMsg6r",
  "key10": "2nCRWmJ4QYPzZgYNXnAvsecBZwZsF4TwZ2Ffov3fgZQM2ijqZjWyYt9Le3EwThtmJ8fD7DxcadJKY26FeZw3m5SZ",
  "key11": "2sg1p1SDSphTxCv1e6fKyPNCyrAvH6GMy549Xm5BLi9mTQoHBSMWwCtdYPBvKRM3orUvoVGNHFo2AcixFrUgv4nA",
  "key12": "4VyM6kw1iv1Gt8MuJByUGRpCCQ52kKkzAnC3CNN8rCSYb5ArQVjr9vniWvPtTZWRgwUNUhFozk7Xxes9jHnF873D",
  "key13": "5KpahoA1EcnyxPzaGNSfyyjcSaHMAjwCMNo4HzaEtn22eFnyFuACtJhrYLDsJYa9JVDhZhXnwQU1WrJ1EBfxPKPM",
  "key14": "2EgyfmfWs4k8VZxpEKYmM7JS6Lzd1y9mgWTShPzXJmwbFypsvkBb346nAmp7ZgjbBkvLUwVctKnTg5RJuFPySybV",
  "key15": "67YvmoKahG6szfehVzpNb6xrkdEecqAufvJux8tZ4t4eCDyLcgaKz8VT5sNdnFL5qHPeyj4e3KnRMHrdRYjZsCf4",
  "key16": "3A2eG9PejVzN4S6WS5JiBLFZLfEks9rNMaL34JkMUwszDMrp5LhjiyVt41wQY1M2SNs5b5LXfjNqdoNuxcbtmfLb",
  "key17": "45DEd8V9sderMzVhmr5J7kBvZeyZoKvQBUTbM2UqKwTbuaXoifXsPrnXVDywgNrRdTmtNbnpfobENtJCefUxfiZ2",
  "key18": "59g8mz2vxJ6Fh96TYPNABPWdhkh5njxv15mGzsLREXzkC9hjwy4gbXo6fPstuwHTTqL7bts17te3GTtjHkt5iGVD",
  "key19": "23qJcrapfFaoVGG2HTSJbyQAwsKuK5Yyp94bEndqCbZCvevVcrkCdDux9WewgcahRUAUbT7D2aSWBTqi7sH9g4WH",
  "key20": "3EDoSUgFyNF8y8ipxudeTpXtyhLJkb4UQpejybPAG2UQJMsXT7QHXhjv4EeQxMQBvhUfet1Kt6HSBGnivymT4ywQ",
  "key21": "2sSRJzWsDAFu89RHXsi3upjPcAPL4w3DWJnP7uX9pChzeNDoyqqcgi47VAzrsRR53Xydksq4Pwn3bDk56YUHw1Sj",
  "key22": "4Dtqn5Erc5MMNCRX6ri9WMNWzz5uUpv6YLKXGi5rheMzuLonJQQhRDnE4KMgYtjDuVDpssVCdkxCth3Do2jTV93T",
  "key23": "4uD97EJhaZSovgkWB2CvrSef39wSsonqbr54vUARjQpANKFR6XLMEWsGcH7vm2fwptZ5gD81DttRq1dRJVbk57T5",
  "key24": "5qiJYrYnkG4KHbXZYG4Kgvk1JDqY3FxkeWAFU6r3BtV7urfTa85VRtq7xjwVdkpVhXejLzyr4xzftiwJhbWa2kfM",
  "key25": "5MNLLQWoAsqs86iRbWKr1jLoSksuGzrcvRxm27JaQkXySeuSe5mNG8qbYuaqFPYQCmceTvmhnF2vgrUnwR3hYSp8",
  "key26": "65di6Zp1tD9SdGi7Jg3nahneT2KwDeWDjUaud5qKMrQyP2brkTCouvvWk3TNeRbLuxWo6NHT9WUwxLRDvN3dcaUZ",
  "key27": "PAxZgoG3rHwgALz92tYuhwm75bXtqxuYR8DxEmUDhiANeS41XwwAtjpoLJ14m4XSPYPq6hZ4qKTbDKWbXCeCDcQ",
  "key28": "3ymJSnE1zBy5r6SuZhN7reG98v5B9yvCfV86ejbCZ8EyotRGQd6YFm6MS6NcCR8YyrRfbs1PWDPsDAh9EnMeQ9JL"
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
