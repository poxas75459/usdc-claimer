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
    "55fgtBjg6U9ihcX5oiWk48YucGnx2MNbJovNKpPDMFH4cvUPjgkSvzV3LAd6ZAv69gc95q1Q2wURNxp1AfGbwJcg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NPuKuStcTrcSWAMcDJuhpxaUCUegNFNXTPYJcZtkZ8trJJTn6tqL6wbhjtsSRXVMwa7uBnXbKynD2X8awUdoZb1",
  "key1": "3r4SremixbS91nHXpLL9n3Rst9vaqD454v7NBuys8vBAdeC8zduipBLKKM3u6rqvZFzvUQhMhDPHx9y6AVDJQ2nH",
  "key2": "TgciY6Ffov9bE9dkchTkNPHMWx3v63YfxZLN9vvz7UXAedb3Kn8tYmzWz7nCtU2WqcqnWNyBFRDwaQyLtyW761G",
  "key3": "2mDJYaEY19GXJ53X7YQJRsCiyLWigT4vVBS4y53m9kMyJZnDgR7WAhaUY65zC1MHo4f2PZaUCGkniVXiggaKF6Ex",
  "key4": "25iYGE3aEKZ2hKjLUjLbNANrs2T7hNzuAyWqos5EfoXWrFYTBaun7HGksCis2u2kHEgyQpvRs1u8sJqCktyYnxeQ",
  "key5": "3fKzWJB8mC7LCCJf42VNYwbQbSYQ8juVF18kh9Urdy3GSDigZozpxtvkLX326uGN8AmnwC5VeTt1Cz1gvN2PKBuR",
  "key6": "3DDnvE5DUgmTCCS72u4rcLMyqrdm3ZKQMNzD2sm6RdZQKDzbBbNyziLcz2ea1FTSBPbmoS9XPVkzJcajjHLX86LJ",
  "key7": "3khXvTvvCQ4GHQfKu3qbrD13Vwy5mvVukPcNXgFVNuTHNLbGjn56U7hfxKx4zLCCbnXnxgM6544TdR2eYLAnaZXA",
  "key8": "2BArSwV1TzsjfbLvkhB7em7jNHp5AX9nx7TS8FqH5fkwJF242MymHxqnXNc97D7q6WLeUagGpNUf1W8mV2BnTNpf",
  "key9": "5nRv9PqGwsJXzuscSrVBM5pegy128MwsmEFTnD3yNJdAPNp4HLMcZWnc4MyyaBAQEoVeZKLEqYccvwHjZkSoMtfC",
  "key10": "3PPXjLjqeRbvkC5vep2k9nQ1DEsx7sznqVTK18UgNCEAd5ray9FtiWpTjV8Gnw7WCnzqRDBrWg8R8UC151LGPceo",
  "key11": "382vm4frSZwNvLXX46BhiScWqFN8MRjMGT4xiz88DDczYQb2G92hsuW2pm2tC7qqufHhoSsMhzZN5CycMFTssTtA",
  "key12": "3X5woH3dM7g1a7Uqs1fp3CS28RMfdESujoQjmSnBdtEeCcFXxyvibPrAwYnA7jRcVwZti7Uc42qMFwAa1mFL8jo3",
  "key13": "3BYKWDfHxdpzjyjmZwr5hCFkmoJ4YwYH765CAAukBEvGgwz1iMzGj3KHVa8DTKfnMk3F9ro3UhivTx6Kk1tAX7vy",
  "key14": "5fkrh9YZwzrZrNM7BeLVKD6dYgT6QDbk8j7d5Fpmiaxsj5aDMbdBxjfubsP8JuYncSS3qfN5RqfXDxJbTytBYVaf",
  "key15": "3PbznaseiNeWJ1ujAZ6hphxeR8ExwFtAdCCx8wLJq3u9Qf2dp5AzSSo88dewPLvrRDhnFYLm4hWjq6nBcrtJQZNb",
  "key16": "2y4fADHmQ8UJ4DKMq75vEcTpQPDnJySotA9y7qTj94pc77UV2anwrFPCCoYPLaXtM6kGkSR6TgXR3R7yvJpUNQmp",
  "key17": "wiwTT3aMwbvXYeGcFHVpUHRnqk1fpxLPg8wyH9nE7dsRzAdfinPGdBJe6b2f16Da8ztNSLrj3xT23LkKbtcPBct",
  "key18": "2VeqL1gvyTde7fDChcsGS2mErie2A2dTT4XpKZBeh4Mgp7zcbL6PxrDZZ7asD6Ww6c66hApBzydvzc1zUhWZYC2g",
  "key19": "53YEcH3NKiFpEo5urGP6FveViKxeCRkXCzTnXLNrU1dV5oq6v8vaq5zk7N2fJx4otd83zndTji83Chr4A2uxWAPT",
  "key20": "55HVZWA6v3ty7CmKAWHsRGanZ7hAyNheZ3Ur1VjmbrKNLnHfW3n693DxNGDpNmC9otcqiFRxpMa16S7vkFu9Xarg",
  "key21": "4m45YYZ1z6sShjPwk6maDaHBdqDyjHkh5seYJFRfX8DqwF5QVSwhPBJwWj7YPoVvteQ6inGSsv9Jx7fptsVnk3MS",
  "key22": "24H3dkrRL4pQWY2bk8XAJvQzEARgMTFUe8hUb8HeEEyvxnWTb2aNEA5wyJx7HKS94tN2BgJb8boaxt9UCXn9yRME",
  "key23": "evfPttVubT1qsopyQAwwJYkoTATEDMqTmTfsfroCBayc3Cm6iyCEyaxPJULa5KEQgLz5tFTWhDq6GX5Y6HqN2Xi",
  "key24": "5VtSszTSxJd7zDN6eChxUNb7BJ2sFghcpx1WJ4w1peazSwgaNLLJ156qrYESW7p1cJdJck1TJpqJXW7mDwbXDvRB",
  "key25": "tvEnSR5AswdU2WB7GQJcTdXmiGogEe18ugxNRyP57qPasFBeRLc62YaQo7Ducd7NEGCcZn9DZE6ktudkDvv3YJw",
  "key26": "3amgse2ujzNk6G9fKcwhmi31HpRZDo36RNGhrv2wZ1MDW8nhrXCX6eVGMjfmUFM892sTYnFpcaDYisxZ67q3y7GU",
  "key27": "2ai93nxZfZJ7Rk8eEQNM167a5R1kxiSFhDwHNE3PWsAzmu3mTKLZtDF7PYPoMgJvKW93htqqJATi6UeRpz5WHM1g",
  "key28": "2gWiGZefrEeuN2ae1w6M7naFdxosBZSzLhmUjQPE3WtkWDeTf8yL57jDMaEvRr5QAusGN6JRamySXkXiBXPXboCA",
  "key29": "294q9gzBCZwyNG6LSPZ3czcL42ijwf5JETReqENUBmk29FMTWg4qzL4RYSeTTauN9s9VugdCuD4xA9RtRrjdaj5e",
  "key30": "2jQ59mYPKui3hUYBCwZnVFPd6SMV2yeprbTGxk8SAqGnscYzHR9Q2UjukQgjS7NHDP6ip3BKvfZr8EfNL3z2XPSa",
  "key31": "BbXhXoTwAVxP6sDWfaXtNEQpQZHD7Va5aCinGLdqHrudo5PihBTxadK8pfFs26BuGV2UoEcJtfJBwjSEYacj9Yk",
  "key32": "2RcDshb4vaXS81pXs675r9Wcsd4m58vHURtiG8ApCViZv1WWQvmdup29j373tGD8M27yougY2N2FpL2CJ41uHo55",
  "key33": "2b1G2GcZfqkjqudJKExBptJirsnbpPGyDfd8LY5NWS6Trh6WfEnkEoFrideFNj2nKFxvyZZ8KacFc6rMsbaHPoNY",
  "key34": "4kFbw2iCnDcxJRLmuqxoRNxkBH6xVsWTunNZXaecLnFVZJFgxfW7y8Z4v9PByitit6vMHdWRCwcpYgBpgRBBtv4b",
  "key35": "3YFkHjztbC43Avpcwzab8ntoyV44XVDZXm8TM8WUxDGtwRUh8rWcQx1g1c58oEjSiAeo4kVfoTqJZC53ANGHmHhu",
  "key36": "4xS5EFYhNCiGwoeWRqfBFr7DuiweqQVcnc5gjp6sFjcfVMvc472CM3xurDPrU52JPb9gYsTDvQWYHCFjv2RAngjt",
  "key37": "2njnTazZxpvqtVqnygk9ctLrYyQr5BAFMiayZoM3fxKmgxivfCDwYGQwJYyxvq9NoQWiXCZmWVUZugMPqHthJ1dt",
  "key38": "5eitaZfaD3hs6YxeZ5JmULgNnXKtrvquERNSm3SKSLwifh1DhjjQKeFTuVYtfJZR4AbQc3LoNGC5uBLi9bNfWRmx",
  "key39": "4wpKHEPWevUr4hQw6VLCSREfsWpSKMy1VQsAeWCna25rh85cR9fgcKDstaEXABB2mdqNZcysMDr6exN27YeHvjcx",
  "key40": "3eaoByym66gfS6qFzwYjk9TSzyhFyA8SHNsRMsLdpz2JNpyy8NSBnZwsEG3XW8ComV8trf4FwMcY7jxyDMWDpzVX",
  "key41": "2Q62YhmMqXKC2eEQvQheLR6YC31n3C334rfEW3S7nXcqCmVe3U9bnF9GTWAbH7kcTf8G1KZ2gw2duaJ7vJ3nAApi"
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
