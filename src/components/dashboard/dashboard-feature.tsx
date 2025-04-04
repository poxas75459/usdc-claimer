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
    "52vEPSivWWc6zY1BNfaizoRZwSRz3uQ5udi6yXutNKt5K4v5nNcFa94Q3cWj1xs65jaduvdJwKdaa5zLMw43EL57"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55ivqzRzFHrpu8KJ9WfajbTKA9vzcgFdHRgo5YE5ApkFktFU1oGDTfQHkXYXQPQtAGby7MPfeV9MgLNtQznVQDgN",
  "key1": "1meg8ivzpBAGPb8d5zTfGUPc5KPMbVpLhLYhjsXaruPhNoAdSXfUAiCQqQF3BmBV9Wkjja6FcR3qmrv1qLqJAwx",
  "key2": "2r38vAS1eikk5oWAa9H2bwFz8gTQrAZqdknBEnq8APomKKpTuD1et4DGa3BjZV5WfDoeasgGDTbbLJ17vrg3z1Pb",
  "key3": "dYbCA7PQRuKQRsu8YJ7yL1v2hG4hggXQvb21FTLZxhp3c1engMoCUn2sXb4xrPFfD8V38WKNjUQRGBGz9HtQEBz",
  "key4": "2sFwujyBJY9exUhSJPc6CFMHX2oYKsfERyrswSfU5Gm9P34aQZYy2cFwvr5u6LaHDFXqj3RfbS9gJgXwSzc1R542",
  "key5": "HMF4YaJYP2xhNWtMJyWvACYKaXVuuDWMMxVMY2fwb9Kfm23jEdbi2pL4fCWH8ak8SLVR59hr3MnaviNM8UKg74h",
  "key6": "2CbLfTnKBGAkoWgNz4u4BFF98zgX9j3ZuGPC5QCS3T4boSaiEdSNTLHVPyWA7aYGn8qJHzNwrdJZbfVHYFtzjXto",
  "key7": "4debLLG8hmVf3b2MtDLSnfv5NhvMiN5etgVaXFTcRDRy8rGqR5UbVDZbTAMKZtApbekMHGhhnUMhc1oDWJHXdDcW",
  "key8": "3AkvyWyyLuaWW3AQovsphDR7iXwm8xTLYz584jTNj9x6gUaGKWn1LpJmiMLn3wgH3wdSuCxg9dz9DXfnX5aj9csY",
  "key9": "3o9vGri9RJcp2aqSMntK5h7F7UdHvc3qepayDMauaLSAQ5XAgs9Y1oYBeYHy3rroZpMyTw17F3uXyhhb8jsRS3cs",
  "key10": "4An6k3py6dNvLM4gqHPS34ZgnJymNbXAXz8bqbjM9D5mXfAUNFngN4Zj5vDyZV19chAPm5LLWtcdp8vT8pUP7x3K",
  "key11": "2wFoDX5q6zhKjUxU8kjhXt5bCVpjL82T9hWhvrMNDahpt27WJKK3TugYNWWJ9q9avHdqBQr7hjQQ9c3xJzNToAcU",
  "key12": "Xi75j15K22zMEXwVvVxcHVZmrAUHcRaY7QXFeDFbXwJP3qfPMcPnY2crFBm3ruq3FbgvJCno6Pbi5grHL4eh3h2",
  "key13": "UNQLhSxwsSYrqFH1xhE3wJp3JLqJmhqhZbZ1qZdTnhxsDX8bW6NvpTFqHoyZpyQLFFjWsHtq7JbkxmbYMA6FnxX",
  "key14": "5faoDEVm4ddDt3cBpPUPkQmjf7Z59kgdpcxUyndomEp551YK9cdjyMjEydqgAz2syKXSwoB3rbd7fucrAoHewhhP",
  "key15": "4gmmgbVBSExmjwkfizPzVESsxqopMQJ8reD1ZziXbcRNoLFSzXYPcrNxdZfnfadFcNSrtCwYD5d6vNYAzE653cuo",
  "key16": "5XZJXYXTU9m9Pry2FsGtrpxr4buizFdfGzQpUpj58KVek4gHatrp57UXEjjYKdgzFjryxvRbNNFwRbPXAUtTYp8E",
  "key17": "49ePZJxmavqLHFRLqurPuxFn6aH6opHFGY6e4eB6YB3eax3VciJYDmsnP6i3gRQvMMu6y2KNDmPtW5TU8H8eWi3f",
  "key18": "61ntK7ZE7gnTSmYninDCjEwUtRkZP7bccB1ecbB1oeaDF59S8jkkFEYfzLQUQMYkzRB7U1gLJRmcDBZAJUEouMtP",
  "key19": "5SFwZQU5BykGx9FmKDHQiUJ8R7TpKBT31jCqTGSARKKGx3rPgDgZX4EZp8tNcf8bjp5FSUTTSN7XFKAqST6w1gPp",
  "key20": "3GiXHWqedsGLpuhJ62MJjFM8TS19ibTR1uvgTBHjGTUNxM5mwYxqim4PUA1TM3DMWQgaCL6c1m2idnTQrN8WRoVA",
  "key21": "3pFMajj7cKPTrSu4pDwF6mD8yZg1tXMhy3nUvnfKRe3YKVJgAc3rvDW8AJGjeRaunTHQ2jxnRSSMT5w9Mj2nSPEo",
  "key22": "33PamkUb5KRWXKAMVcES1J7rCUH7ZJGzd5vij5oRwYKwhwU5FpCJCoY6Anf2U6ZS6TLxVEQNXykgi19swDvshdDH",
  "key23": "25c9c96DosLDZaAZCSmZex3tKqtpbGgYSNd5vUdFYTvLswPjhT6RWK6pUsRBDA26EQWMYp1cwxgfdFgghAR2bmr6",
  "key24": "2AgBuk3An5vqB9v3C9cGm6RY5gi4J61YYoN7gHkGuMcmRqvjBfghub6ubqMNeV3HnbZ4UVESosTaPzJ5sVaVbU66",
  "key25": "3mWse7XguKP37z5wr7DACkFYPu3D1xkzefTdFaRWhmCmkoo1LmzbUoDk4zo6XeYLVvLVRRSdw8BG1KJjsWGDyUtv",
  "key26": "2NUeAQMMUDcwZo5njKTWKHT47uUkCgt9PTk2cR2RxqYe5yd919FfpwRsoApij4aDZtYt1J9V8GMihg1Ecx8AX2JL",
  "key27": "64MzLKvbtwPdT26Fz1tKAvNVD31fNNDCg1kiLagMRh7SMvCkgvunqvNXAtd9LgFmLRjjk4ar7sfq6D4UZTwNTYiw",
  "key28": "32HHxbsa5LPP3EEVSTcmppDjQoaqVvR5HLWJEpJ5ShESpix5Cn386f3nqdgj2n4fZ6waSmERBno3vYqjX1uyzjLx",
  "key29": "3SrGCCqJoH3mcYTvYjX8WDdLdx8ZFYLuZmSFKCKNrfAzumDNFnpSZadbRK6D24mV9g5DpiZGuz6rqmvt7JUiV6Ah",
  "key30": "3p97nQUct6G7DgmXdhmBBdSeyCJT8yHUk62Zd4mfqsggJihXMDwHd7za7qJzkTG8JhtPL76tLcAvrqR5sY4P66ox",
  "key31": "2bNLzzJF8GyMTN22x2o1kSmHMp491qecf8f3KFYdAiyCdv5YmJjabYLrTk1B3kKaVx4YWPKiUhb162kVTbwmMTtm",
  "key32": "2JdK2oVYvSTwk4JDoevbo5eYtfdJVsEezxg5wk1osjUfCs93GFBYeUus8dJ7wye65rkbdjicuBNxK536RJbybGPc",
  "key33": "2v352Kmm2T4eosCiTBqU3neR7CW2vB6EcMUKHp4UcfH4rXycbknaMFvZ6Xt4Gxp1SKzqotNGxK4nMSMsNyiv18Gg",
  "key34": "465XqtiPfXSMuoVtvXX6F5GwDhjT2Q4BLM2fq3G3PKdA8BnU2h65wiQ3MJCSCu7tMnwidgWDMKnnMtzqMYeufvpT",
  "key35": "3vh8kPtei77XdKst4EFMSjosq4nDuD97iBkMoXQhW2RSbTrPuMRVXaReZbAC6sYUzWbuqXuEkGCpPDuqWxkju2wT",
  "key36": "5Rqr93qMGL7RJEKvyCEEpHx5ikSQStgBSF3RVQp9z1asyn6NfwLEFJs65LvrTLVDaRroizLP9rsL9RdU2Hg5ZAjt",
  "key37": "3QGoU5bGRZFGWmbHqqNoVkjDWFbdyjbprLwNajKti54FJQB2H9ihVjbSv7LfJ4ENHThzHW9PQrnVB7ubL8FqUQe4",
  "key38": "4Nauw3B79ZbMsxoLAzxbV7iEVZgZhvExMyfdxtLnqya9ETCugd8c45VWLjsoK8itCJw9JtCHAeviUJRYEAFe2UV7",
  "key39": "51r2QF9RQtATEyNbXFdRdUuqtcC9Z3TmFgFYSo11evKvDAeC2MUaanQvh2FqrU6gMuMRMb4BXXi8febpUgwPKBb7",
  "key40": "XLha8iNpehL2o9M8fnLXidEPoeHTo9WxZhgbG3yhgF7Km3mJqAu5tyzMp69MHe1zwDLNgjrbX6vutCvmKi93t6A",
  "key41": "5ffT5HJoRDFhtzktyaK6FX9CsX9j7AJcNqWM33dDQG1FjKvndHDuZ8SFJwizEvRVHdBa36rZTY4QwEfruopVQ4Gy",
  "key42": "2WPo3WGuqNPrHTZMGmEgDSjNyUZD1jjMNMHkMPPBvhcHaojbfxhrRcYB9fYg4nCiUpA8e4TTZB8qh7H5gnLSComR",
  "key43": "2E21MsYMaLCNPiPfQTMBu5ae8JxE8pe22M6nq68CgqgERPUvps3GWsQEwHWmLvw2J9uA9qoJ9Fk1VTUUH1PPR2VS",
  "key44": "57LGt8q7hGvB42gqEBxiWL6EzZH3qVDB4WoyrbntNQLXnUAoWtu3JNMcoDjGwaEewHPSJxG4hdpZ73dqPVBK6et8",
  "key45": "2DNe9PFcnPa7m7A5bteGECH6zrPK8qLpiEfdWr6hJWQf4wAHHPNErrsQpm99rZYGRiQZpwSvvYVuQKei16xjHUBQ"
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
