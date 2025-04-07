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
    "4suyzpGSNMyQtjJQxA8vpKKAQnfiDu5yX7GMbVzYTm38uPSXRAEm5AK3h1UKwo7dyozYiyN27VDrGM48JS8YVuQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58JVdtAa8XkaukKVzdQaeBDCCDxRwB5rV9G4XdC3B8GX2g8Ysedj5VdrZzFuPMrbv3JLa8nn2YP8ohTLqBTQ2j5S",
  "key1": "4GivSpmo1zEtqM4S9hRoRrRKLSkNN35SjEYFovLVLKpZWh1BwcHLX8zXMiDQQAN3dsUVHyBfiapas8hc1V9Snx9k",
  "key2": "4WBMjDoA9bHzVDpd5hFquGLCf3AxdUnsGesE8hitwmmGvRk7GiTMSzqXG2micDTeeYcqQNWeWQ3RtRokJa2wjvTA",
  "key3": "2KHAGWXsFr33SLZpooLwkoBzJ1X5NtnBy6tBJqpJLp1odwcjH9WSZKzCUKdTeNmvD2HHaqGHA3r5DbgBibpwf5SN",
  "key4": "9TwE9h9Ziy4PsPV9cFAW9USLit23UQfn81Rt4o5sZ86j4aUw5BDmqbuzHJto6EhMWFJK8ruUfxmEJwHKEqaZszJ",
  "key5": "wVqFjnz3o73xP95FFyYhhzhMvbpxGPidaQBY7wbfTPn5i4AEhaxBFK4kYnwgJdHFZ5cRWJybZmEfaooFPFhvdKx",
  "key6": "5fmiFAzyHBZTacJ61xo9BqooPPBku8wd3ePZK6YqVPmiiEsMTN2B8mrLS5BxK9fs4BgMkTrNpuqXBDMzCDPGXSRo",
  "key7": "23PAcY8xxuSBvnD73jkW8JymTnLW6FiE8iyUHN2msJvPTE8NjhMfo8NcSdqbp3PDYhsWU5zLGojj3Bp3T9vuingk",
  "key8": "5LSz81qSnh7135znMY3y1Yvi4BqHY9JhscvxKnzqx5EbDFhj496mKkbm5gu8RzBBuRQRdYD3acEYAxbMRgTunA97",
  "key9": "4cREw1dRbJ8XcVPDkVNpz5nj97EaKPim5XZEGddbWM87tAmHZR93aaDqPWzmx1Up4yvQwAZq34oD4FaW1stejPyZ",
  "key10": "mhMmXcwMeWqYv77t9EhvbsbLZbiUxUcTvxMD9SZVTL4C8LzFQRK8zGeZH48WcP6hUmVbXWLMqbPHz5YqgnuTKG8",
  "key11": "36SCwMdNq1YNmfHjfaM6pRtmAFFNJ9zDMgnqGk662wyjo7p5GDoFDdneT6JmYiPcXRDFt9uwRN57qyBRWg9bbPvM",
  "key12": "2AXQpZHeTv7EqZuqNGQzUjL16N9SMLcMGPrNx9LTa3CZLZwyvYjaRBooGcwFLLmkqt7G6FssRA2LBsL7Cz5cRrVS",
  "key13": "5VFP3oVFbM7dkNHuZ2pLwUc8VHZQiR18xFGc7DMQbY3bPBiksoXbn4e1FDPCtNYKPbMvpBriRRd6y1qUBukYWYyJ",
  "key14": "3MWCPBEBNWRDJxKp4xmdKb9anhgv3YEHLvy23nm3bgNyaZan2uTyhJtePn1tZjGs9MqCNHtKChZAMi3a9D7tyUqp",
  "key15": "fALRXqBAULJV3wkLAGhGwiEmoVXngeGtAaFXnGmNdAEJPGFquRomh8Q2rkQtZzJ87X3M3uAoTuwHhGZMG3asA2v",
  "key16": "5fyPp5iXmSSbisF44o2BCNujQe2B8ijD4pM8rkMxdMpgT6RE2hqd1T2458XwkN17iBEdKfuHVZmyc5gwgjSnN72i",
  "key17": "2CF4FhioKwm6YfzanrNwAd1zFbzAZYEq9BqZ9MHAvp3KdJzxw6Hi1B7bWsGF1KwpeUihKEkLWZtpadrEBXu9SuWJ",
  "key18": "4Qi8QFbeGPL9xuWVfSBQeXtX1bho9Ark8DUJMcwYnNzvwjNmcQdXqrjTU8RJpCVv1BY4k5py94D7JPyWLS18VQ16",
  "key19": "5iAzqEWNgw1NNfmDpJkgHntaSSBXRS4DWp4xuM9bJhAKGRwJNH1qCHjiwZnKqiKi2eYFk6Z9UshroRfg6EsL9aqi",
  "key20": "5FTszUy9FsXGFc7av9i6JnG8xY7nVhaNSeKJ4fEcyDzsZPbh4wswsKKTt3gEDGZcjT9wiUppUScXxJ5A79K6MoqG",
  "key21": "324NWQ885gbSKAJKJCJHwAkL4GfYmvF1bGZdW5QRDfa1M226uw6WyYNNjHbfeCR2AqSig4E5Pk7QQxS9EoURvQHt",
  "key22": "3idVr2SENUtS4EDZ7CBPnps6ukQCmfGyh9X3fSsPcBi5d3Ran6dK4AqXTr6wNXQmrMNs2C8Jus3n4W5Hoz9S8r4k",
  "key23": "Pzb7u7TRCWasg5oXq3WrquYLcaQ7ArKpEGsNrN3FTM67mGFwoP6giMxVb3341CfMbT5htqf42vpHU74hnRyZHm4",
  "key24": "35Aq6afWSreBUsfZD4WXUVmuHAKV1EdacByqFd6dNHxu125hTUjyZ5cTMqezNCZ9UdQb2KWSo4zTcefSRpeX8KiH",
  "key25": "5WtmjzKKg7S8fgSLdxChEQyizRKR9gugpUCRrtw4nbiSsrbN9cMC3UDCJ9yFbHKWY3SwPFbEG6sC19Y5asmJ3e6E",
  "key26": "4pQ2JwX6DL6pPJPSjqEWL7VG5qP7G3BMZqaixF7pkwZSKujUnstaokAqwfJFrbRgHa7kZoXTbnNLEGRQ27EB2TAf",
  "key27": "cWT1qTpDvKSakE9MJ7Kujjt2TCC6EHgeF5mhzT529BRKBtKw4jSkRGbiBZqPVMcqr4XXQM12cV1DbLThiazgyeC",
  "key28": "3rRz7HQ36R3kMg77zJg7qiajKEfHXzfYhsozYEaDByzPtx3DjmBRgTfaxpB881CRnx3Wk2ejvpEVsfCj6cugKhPn",
  "key29": "2CFw8fNu7MQdXEaYqg72GGGdLKALXtEsxcVGvYgokgSapTbXLGAFnKmqW6fCteWVV7zB3XSMF9x2rAPShqPBFcsn",
  "key30": "5SictsCQx5P4HhnzuknjenWhMb4kZeMq6MAKNKKZ1Vh7FCE3h2B4GkiWdz56a9MRtDbtqjxSYsy6AGtekUr7uPxf",
  "key31": "2mddgQQN2DzRxwPKXpqspGu8xYXYmhBV1Yrx4Q9E9zAFMNUjo3xzHHqzrY8oVPniWNjmzULGkzM3eAWpPLhmTraE",
  "key32": "3weLSCbejUa7V3JthQGNCeNdc9pfVAnBuvcsSALDKijPvNiCuEJzZ3ruhmzyoCDKD1QRNyLQStopKNkaB1MoEXV3",
  "key33": "4cDLpQjowEiJHZ7K9dNdCyyeBovPzZsumTDD5R1s92A3cbE16QVCy5xnLQhNu3DurR7hh8qxELLy9X6cRPGgNzE1",
  "key34": "3nXq3gK43VN3n5LvwYaZQyjEPMJX3yNpWjMgy2LYiKtHWfmcuE9ZtPWdSBkiSYuoLDx5VC85Lbq9qZDireGV5wdD",
  "key35": "ebRs8zWdctAU9MQudmwQk1oRpWnNFVoh179VS84f2cxekGApGiG8UKDNa7Nd7XDSK6ChWLDLK8wxXKCyNahkepp",
  "key36": "4JRHBZjWt8bCbDh6s47R3w91SnyrGMYSb3kYEZ92GcsBxtdk44n7KrhkXSVfDhM2xhtgHmikqbqgFig1Jf9xw5CL",
  "key37": "4CTt67zapKQ1QRqnYvEgCPpHmPdv73Vruzeiq99Sms1pCEwHkrzm1EaG6zLSVSmEextPReWL3pFz1TtBCpT2jkRY"
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
