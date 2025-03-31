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
    "5orhVHkwGX3xYgKoh5EJyD4eXJGV6mQQmtafuk3NnRUsBkQfTMNFCHEAFbfdUxvzfMEPv3acFNs3j3qfhqrNwrhh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LseeAWR29uvSoqJujTCS7ct9aTbSf4MNjeUGkPuJoeQkT4HbfjoMaY6NqfGSAQ3feBYHaxJvAj1GKXdpyp7oZFe",
  "key1": "dStmNbRtEEk98wX4dX4Ymd3KKefTtTYzZUyZ1pLevpMn84mwnNYrkMvvVXfrMsH6rvfZnu8BkpvM8z95ggzrqD1",
  "key2": "4CkGWqCAfP6w5wjJSPuomD1dKPcFz8ToJznFbLYQ8SPJkHWijyUrBtRa9HXZPyCPhf94gR7aWcLZk7uPPWHgNQRa",
  "key3": "2miBmDKVkEUUvTVy2n8x6uVkB4fhiKq32adsYFgVKmW4vsJUcBCD2zLs7W8xqHKPDFsov9SNv7hY8JQ2ooR5b2t4",
  "key4": "V8iah66g128wMPD3XVJnkAmbyjg6xWpbJcxHqRyihtAanmWzfkenFq8Pw6rFeTX4xcCmWH9FnVvKN2qt7NM3ThM",
  "key5": "51aDtbTY99dLfikcJw8ew9PUUDGRWvTEcH8eBmSAnzjpSYtmBZsakcgKcb23vqao4xyrv3jetRHWrL7xCHTEa57U",
  "key6": "5K8BQ4txDCWSbfvjvgxaJZ6Ft71nF2jBXnJVyoZCFX47kXpqiEvM5M28hLT2XzK8Le9BzbkvmnGb5v82Se2oYich",
  "key7": "BjXr3zCRKZjw5Un6iTHKb8w3WZQEmY3ud2eNGfxEb6u9fSJo2zaZ3FKzSci8XvrcNm7WnrfCWX9JxRhCcEzVhYY",
  "key8": "n57CTESwfcax5t56rTnjQ1DyTFyB1vRNBDmG2pebgAZJDmsjaDj5n7SrnLGBR41TUHdN1oYB3fLLLjJX6djktiN",
  "key9": "ydma3ogUdRcHmc6aBzZJtpFwzKDc8S5JJ56CfpFFcdRYkjz3Xd4YaSS6vfZG1VAohHwQJVWWizVFmCvtSEwskmV",
  "key10": "5BZub3aNsLzrzgeD1W4GjdGc8mNnRgUzAVmQDUjs7Ro1Bx1H1hdgxJi6eRNbK3xmamNnspXep3W6uPA7mcKtdxxN",
  "key11": "4eYkS3VT5a9ugxGaEt6cEGmPBqj9dXFGDAmqAUYy7meRMPDAqVw4qQNy5GhAu1hueBxmxhatQ8ZT9MMpbYU396Sv",
  "key12": "3eSoP4oVibvNucavwmPy8VFqmz9Lvqwm3MCtgG1LeohPUbwjq2g59YhhZyav5yhumx1cZPkgJJyfpvXea8YwTWEG",
  "key13": "4K4aoEKzAEYaTFnk2fLvWiwAmvPoe1bn2bYkUdVGHyiYGPydmtYdgJGbbpVcgb4FgfJfnjdgWLee49ksYosFokQk",
  "key14": "2HHV98hHVDGurdBPhthCHfGSVwzoR2a5MHiXZqd7U4WnyxboWLC6ER4nS8d9yFm8H1qStAVRSt1YRQfRQYpafxuc",
  "key15": "5Rhe5YE17ijuJ89gHLxk788ZZ3zsSErmLUNCZZ51QLe7gyqH2XzgBSiQY2cNiVWTtKjTJNKogu7ppSeaENhPSbTu",
  "key16": "2pbxR8yQDQvzL8TbPmoDVELaTJcL8JcNgVphG7JKRo81XSG9PefAEoyekFHry6X258Stsa6qstKMAFKdupJj1jXK",
  "key17": "59sdwTMw4ebVoanZnD2QdHmeFiK8oZoXYKYq4LaiNQfKJ9BdET8LL2zeGiS3MD6dGbLP28sh1KV8qYT4jMZvB7Z7",
  "key18": "4im98rL3bADQzLLPWqy97NjVTRwi6YoVBsu7pXR6hzA6GauE2WRvkS9NnkscH9sYfqpVe9uXXCx4KUVcU8yhnd4J",
  "key19": "5gwaWU68MEHVWE5v7iKyq75P7yW98KMtk6ni65pa3v8FKHZud2jSULrFCo9n8nzXDiuJDMorMHnci8pg79Wdpvpf",
  "key20": "4FxbUPcw4eA8sTx9eu1fFsFHk2f3Cs52HtGnADhALoh3AGiozB1pQedRYFibhxRAkiaRAPQNvc59psP8Lmi2kR9W",
  "key21": "MduR1bdVb8NZTCeskm66QCYjhjdfnvCtnzcttaSKGndHSnnUMmv32ZR8B2fqdyNbWB9FxVJSFyudvPd3fyyrHXn",
  "key22": "39pgg6nnLMKJTuq73cENoFrbyheUjv32Zss4K8bgWRt6MEmqGL86etRVSvgEbBQi3q9uKf6kmttXdC5Pb9Ai6M7r",
  "key23": "2BRo2zVDssdpgPQg3iTRJroE94k7av4iJAA75ohNmuVv1h6euqk34wpdVuRdhDC6ySdqT3E3NWiJ5FcCzSoctBsT",
  "key24": "3rycca8PJJEQS91ru7Vhq8orsYxzQuKSv8s48AZNKdMfwSiWZKdcyC6aHoL8tvQgZsi6SBNQt5aKkDLzptGUULFx",
  "key25": "53Rz5Bn7qtZWCtbWEuFmWy2iasdBkLHvdLPU7Tx1hGo56urNEUQ5n8fMnD7158pzZgt3n7ybULymPcdbGT7rsS6D",
  "key26": "oBtEhWJDDLBhYuRxHrMX3jMo2nSc7hB7xw2jXhbdMPtQyzHjMSV7wXoJ8RZkYNwkB7FJ2M1vSLC11YHPQBNAbdn",
  "key27": "27HJ6xCDv3Qo6wJhDwn8s9UbtHzbpcdeGzJuAVZs3mBbzbysEGALN7dseBiogE5ncGyMcqe3xZsuoErYi8Q8cE5R",
  "key28": "35aqU7UoKyBbyQf5Ha2r5bZ6m5DN6Jvvh5nwtW9PC2RFCxwVybcCy7S4jEJuTezExSknLCLyihpLWWch2zvFef4g",
  "key29": "3YScAd58USuPSDfqfUB5KFuJFxJZubyqsva2kp1YveJFSQYChJXGkR3WbC19VwbHdHFzdUNkccnLBLcZZ26oqCnM",
  "key30": "5sbmVSvgV9zwfL2mvMd3BsWc83kt7oZsPGRjqsGo8rD9nsZmT7nmThyQESXP35dQwtbSmegEscE5DBiLmVtHbv2",
  "key31": "3azmcq6gFGDvoW5W1vMoPapbJzf3ubybWy1H9rLXLzm3kmDm8jKjRuyPgiUHLxq6UDA9yG9RbjCDBLSsVQGmB9a9",
  "key32": "3266FtfmWgmzgCewB8bYeUuFTpG1Eu8euxbsoXNKbeyqD4Q6jEWWw5eY58w9mpxbYP395fzkwZGErmb91Jz6d9dk",
  "key33": "37kQMjXyLdLgaV7hhz3ABY4awstGUoA1yQ91ztPLQYYprfrAt3rDfnJfwAfsnL1p7BBzXwJABSjtSJwHSZp7Smsq",
  "key34": "2tU2mwN5o1ChktHnWZkofiK9c2FuZ7nmLXyTqa7MXWDinjQnQEddn7iFFkGYPTDUbCmQZnzDCr8upUXYPL2iHuFX",
  "key35": "66VJ2G6HVasZJanSMDnqCMmG58U4mAaVAqQtayr1fqsqqGA9tDmGDJCGhyZwtmDbowgCLu4gvEDFxZtLQYfn9nSa",
  "key36": "3taAWfAkCo7mpDLWTMSFTtfU4wqitardnZmFdcZ6FtuL3AahJGt7wkhEu7d9Mw2Lnj32mrgwtqsKeyqusa94bKcV",
  "key37": "24dgb9HUdza5jnyNTXZEyezJaoupf8WXrMDa473scdvEvBwMRBb3Na9rdo51TeqJKk61na46aj43EnuuC67rg6Gx",
  "key38": "4ja9MRGtEkhStyJjqHEwJhc7DAQSkUfqNYgH7yXe2wNQN5qheBXtmZzQd952EEz7qBk22gZF2U37xMvcjRBPymbz",
  "key39": "3Mzd7Wrr3VhF95jToCZeRwwywSqK8BBCXqnxvicky9S3eUy3WRjXmagDSync2B6w8yP8Q8MVMjLUB3psGi4v6xxs",
  "key40": "4o4pEf1Xp4wazA5x22ykjrUsgc7MUkNFbqA3BkAsaVHHHu1Devoj3SxbDXsTcv1C1ZsHbAg3wPhDRpGQESBvSPrj",
  "key41": "3JVunVU1vuqiUh9QXCmwRXBe6Gei7yesGkPvGvG1RfUQLnpyNapzPTwAdrQKWRqmwMzFiHKBVV3Q5vvGXyhrdxVZ"
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
