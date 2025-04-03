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
    "2YMU9AUyXu1RzrKh3uPz4jD5jfx2b68YcdQeQACJnH3kZkzzQ4tpfkxbq5eUnfVpnfjAhDbd7ENk7mthHTvtYtvV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HGtv4d3GB5xNJpqq7jRRyxSbFkoY6DyY5Rv8NDhj4DQQVcTeFtvsoP1F3Z7RwDrXhkvyyV31muKMAFfaEqkCt8A",
  "key1": "3SC77FYYJkxdLtD8w2ToQBBFXW58jqhqj1r8LP229aKU9SXB6xprSRBtXnJ2v8WNmmM4i3ssVGCtEdg1jqAB9ycF",
  "key2": "4es6bNWrYVf2RhsB3TYNzngRX1Cx8J6dpix7vDF2WdVadNaApo9WMt1NsZY9gVZZa2rPqyzHipL92AahcpymTDon",
  "key3": "3VJ8eRbwB7tZzBvUZ8sHPL13o24pPVem1VWsZhiuxxRTvg88BfBivDNqmEicAowDHKmRvVnZ9dGvmwY9QZB6qcQK",
  "key4": "3NN8mcUdXUFLkMqbKNoqzgF37j7oLTXTjTrABfvaY9CEVUFfYEekAQ5iXetZUBgCninuRrmMyEUoBYhgrKuBY4kK",
  "key5": "3kTV93AG9mp2wrs46fDeS4d4c68Kw7yKT43LS172MffZhHWEaNSF2qoqvWBgptH2vPkrKGgog6DqoTMajCfiZbnY",
  "key6": "4fpvnLj6NtqpU7yJLkbgrQdr9GGmCynSTjjankqj8cDPC2TRYTGPbuFhUvkoFj1VErKpqacPRtbMwsm6mXbfxiBU",
  "key7": "4xKXrtZgVHMDx8cwsw48hMgGRm7WP3ARKKrA6fiXMsGW37vYcZz9YX8Rz8VxTJ2hneJF9bQiS3xYL2zHBZxbDvFN",
  "key8": "3FVU3WdWxQHfZ1KbAyr3pYx3NqATDx6KzWagV26hmqhGGoBPURu55Nua5vhhoy823JX9XXzg2kTts2nBm6D9mJGi",
  "key9": "uTnBo7NeMXjHpBkqpqSgeybXjeXR96uxuLGLWuCyuQ1bhSTfUWWCtVBMHjkoWBmQQR8oHZy7dPmAC7xHgUFgvrm",
  "key10": "5SNjC11a8Mjo8BxU8Gq35Wiw4PbWvxEhVrpMDvvEA4e7SuSNkuAqJHp44UdVGTwQXqmr3HjuV2Q8LqBv8g8cnVU",
  "key11": "2dKGZMdsVJFiVUUY6UPqoGz7H6eMdeHM74LhbHwNGMyfgiDCcMpe7d3sr3Ppqosve6paC3kQcoB3GjR45vkus3f9",
  "key12": "XKq9ssJpthHH7BFKopcXwoZuhgUs1wYwmiRAjZWDCCrCX8M239NXzaYv6jo7xkW1yTnhUEFwuXXtievn9a5QtFH",
  "key13": "2iVfAjW1qYVKobqeUpK2LDcxKs7bYvHfdfHB3iUZ4aAXH5urWqDcBrKLdpNjsbgi2MDy8igWe3nDy6ZNYFjvdVku",
  "key14": "3jXrP5veG8M3pfxKdWfAMTaH6afT9ujUdLpBsPbpVTUrHP7v1jacW9wjoSmXokpRNskQTuUZkppqJN3As2RQ7TYQ",
  "key15": "5rEbjnpr5KzfTPf5ESYijRo2Duxtr2emPr5vSAXWj9dV7N8G7ocZArcYT5cMMp1vMnBNqKD4NLY12NPPmAzMFaiu",
  "key16": "2ErGm4N7t3LZgNWqje98jQpxp6igYdGDkEttrShGvAHG35QixRqDaQqbwRcg7nXhzyPGum6o3CmRSNM7ibRTZAxt",
  "key17": "5vBhWuqKAMyeVEK2JabjRXSycpqWorgJPY7EFkXnRBTUf1S1yHruiUh54taRMJzA7x2WbJhdzJBP5NVoeJVY88Ce",
  "key18": "3rQyUz9yKhzV2JCuHHcpKFPwhyH2P9A9ojbA3hZcrHYT3fhh4WbznCfmaDPxvwfSX9Xr7SCj1FjXkFGBRiFDfWh5",
  "key19": "5zdDx1sRTWBwvyR5NMMN7MetKrLd3tYeVNebFdY6itdnrDMLFipbYF9NBH9cxKLdU2PhUBQUyAa4UvZu64cMJtc3",
  "key20": "4d3goEVUSPc4VgT5LrgNryjx8rWfEkNsAArp8A92CRpN6ndWPaqTnNor8KeHh63SefUmwXccfq7HfqRvJbWwcW2e",
  "key21": "2ECF2Xk8EJi95QKsQW6FSzCcjgrythBUDQ1xSMy7mJbFKdpAFAT8gSvtzVqMjvDnu41D9w1pgfanVdr9q1mVeUuf",
  "key22": "5UK9LsJXk1q2UKumth3VYSg3GwxeL2sPqwUmYsTRgj43cCBbbjaXxbRcnmBSQEy48mdNyfgRBBapzzj5x6PoC43a",
  "key23": "2RjrrbnVJmv6mR7b5FCbTiUQbdQtvmhUeVnhmqdPyzfCkmj5ifAUj5mxtD17XtF1wJQZGKRmvus47KrPNxXnAPFd",
  "key24": "3A7dUuX4agHhCC8W8nJmuN2bjdKJnYowGGKHBLWkuAxWkhkx7j3BepDLDTJAjorMB1sHA5YYm7dvuKfJN5tWMqTM",
  "key25": "48xw8egYcxfEwswvFjEWCiQ5eMTJ6ep7MukgDKrESNoxkHL9p2otckcJaKMXUcE47CaeFoiWzEfrkiCZNTXckgcS",
  "key26": "4m5GdtZT4Hapk2397RPhwSpJNV26KH9hnXb8m6vi2ZisroPLL1P5YFvphdzFNhKyHX2HoP7wKwydpeRnYaYubLjp",
  "key27": "cRVC87Ev97kAabvLsJg8BjuCMUJGnvU7PXWKZ4aUsqVPYGZ2oJApj2thniyRvBwzM8UQb6dJXFPG7ifwEPSTFgY",
  "key28": "4UwMEAp95u2gdpWFgJdS6FEjzBz4tbq3po7gaMhJgsBMiwu6g1FokZWCNSaW8y3iVYDHa1zKi5hmp5a2FCpMNWmf",
  "key29": "4FXJgscwYdKVsBakeCbu1GtmbLTKV4ANdZYJiFPXw7zLbaVvVtTUywW77E5Skxfb7Uhjvsow6ySnf7nmwNrGxN8C",
  "key30": "3i5BWGWhwj7euQjJxVe2us78YXLtpMqLuETpz17Z51xRXokzneuYjnAzds6aPm22eCC9xm6XbN34iKwpJmPnzMaa",
  "key31": "4GMrWFfAucCBiyTQyqv5DrFqFAiTof3tKJWCFeFSLbTRBcbghemPX8gpQ66TdJ5SBKduxTpnK9wUTxnX2E911sap",
  "key32": "2mQo9y9SspwaqtT34vZW6dy8uDFg47chNJVLpm7XugYMG5gPShJ5azy86SC4kMDLTXQYZPL4Q6HZJB3KeEKi7QaJ"
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
