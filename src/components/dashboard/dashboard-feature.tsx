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
    "2P4vFAHp7Xj6RPtQxWGbKh43Re7Hwm7CGChaJW76UfT5n3C9VYADQKpWS84Bg7MzF4uoXYALKhsjQvtRZw5CXy4q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iPHDKyTxLJwsL4oYaPD7oxogaQ3ZVNe76NNudKH7m2skTJNdbZxwFfugKqBveGJntk1fCJoXKuwVwfWBL39YMxV",
  "key1": "YPnm5tbCpHTJ8MAMZNaTtwTLU1yYxqdbCtKzXrdUPs7untkWt4ThtpyWg9nkFkHNYwy7M3y69mYqbJ26vtqFVj3",
  "key2": "2D431zA8qutAhx4ZUaTB1XW4tno5xFLLHA3h8oZvqG34YT39eGMfGyKxwCsoGyR4VZrV7gCPQmQjjZ6mcX52KxCD",
  "key3": "2MLnQ5Ebt9pyRG9QfTMRQsUUdvUWkfrMfpRT3BVpT5Xf2q15bdNrHCntTK1ZA2C5dS7TzkgfLDD99r2aapQTpe8G",
  "key4": "5WUz1yvYDAwPCJGLHvPmpFanaTu2zsA5zzPPga8uzBW6rZKjm4YgXD1pAa7HHJczq4KEiCYQyxjP3HDyU6ZjzDdt",
  "key5": "4ZrB6h3utWGLNUQ1hF5aKkyqg1tVQrtW9zytqbzPWZb4zgxgHKsE4dHkewExqGVpujxqZbP5KEqQVa5vuo192Hgu",
  "key6": "3HipHsyZeeyFSuoC47VySkuGsfniqNdkmZ3mRNm1ZxpTLQy3Qsucq753Lx4AiyTsjdXUXZ8C56svD3YwSsXBiiuH",
  "key7": "2Vf8hz9K4jpeSLrZEYnXVYDfsGfABq7HKXXtndU73Q6K6wySZBS1VFYutMqXvmrQf3ZziHRJ9MC5qPD6qNakN23N",
  "key8": "3H2TuTPAwfH9gn6GdUM3Z4vbb5vDssknMaqodtd4ZDusCDg3u9oFCs2UrmboquN4DCayqV33FtW6tr9qVNuag2K6",
  "key9": "36hQS9ve7nPwVbWRMdCD9Tp3fCL1TGhMkrqqQQ5ER6Zs4fKPBRsftgdSXwSAGwhtBmwigP2d5ZJMYY34gK8fQvmt",
  "key10": "3M5vUVkkoWB2pESi3aY7JzvWzSb7sEk83N8qpq3Npgb99S4wQYHJjR7m82iyUqgFBAqcjXZe1jFoCgxohwVHU31d",
  "key11": "2etLoMgfmEm2jqHK1e8A5VCKRGWh52EZKsqzJV4pxxpShzaMeWHN5RWaqncEL5MLxbSsdEZW6CKDqnQzzccmZFYQ",
  "key12": "1x9tWfdHc2BjSwnqLJ2YzutyEEWjyfkjZhbBQiMKuBG3svnxqBGMpbSyz9LGgWZCCNzg2jKGXa3qamBS7dQGN2D",
  "key13": "2MGMMrwvVkCLkbqA2LWmQFnd8XnSG8Fbp6o83k9JEGvHY5sPjJ4xVAphu6bW4xp31tHDmboDCavwRgE3Nr3nsomZ",
  "key14": "3DaosZXKLD2v5mGfKFV6Gd8kkDAb9nWNXWuVgrSmgLaz4cmE3VJDHuR8YtgsRgoFDuTg9srXhTbbroNHW23M8n2c",
  "key15": "4QQjJrAM5sEtp1k6bYTxVuDrKhwkxNTg6itXscGfTrZ2a83r7bSq6DqanZLgzAUWZTXQCrSK5GC1pSvS9hZcxUiz",
  "key16": "5rqm6ofuxp9PAZAUqpVijm1X3t7b9Ep56duE1qKAM9e18T1W8aL8bkRg8FNnxZwRuzu196QTBY7pPq84Z9PiTtqh",
  "key17": "4A1JFerd8Ha1f4vZyV32nNc88LMgxSznMNHaQAm5r5aYdUp3CPjSpugGwHMva99sHH2PYXZoGXwEf7zvNwZPT615",
  "key18": "3J39R3hoRcKtDX84gXNJ7cX6XbToBFFukKdoizULHX3rhTn3gsAE1UNh7saoXGMk5njDuGeJhuKA1TqnTeBbNwwn",
  "key19": "4HWV3cWMxKcdrK6pDhVbD7TZoZZhu6nBV6993ytCbE1ximGAwJcf4UZMFWLRNS3gKWKgvKf1zPD5gPuX4k1qrnHx",
  "key20": "63oEEkCc2Wupr6bc6ZZzAUXmRNcbPtdBSXiTuE8nwcPUGRyPAtBfEkR8mAQh8123VrpU8sApKezgyN5CE14n8i9b",
  "key21": "3Le51GVESZMHjxdfeg5ZewKmkUJpDhka5YmSKp1GS1F3BfSqX9VPmiQQisXDFZaq1GyWvoLhHZumokFCm2ik1HWb",
  "key22": "5BLnrcJNftcBRYW9DHGuyDT4qRywjdQsn7wCAgkay8zYeVNDrmYeqhoc1aG1ZvUiXXhr6JTqXHZccxRjbRE1d4JC",
  "key23": "3yNZKuUa2Vgn9rSHppYLUR7vqCHaDCNLuQ3iswBduToPiBtFq4dQijwgqyZePZngWV7RY3ZfBFVQL5F4Ky4PiSSx",
  "key24": "3cK345R4MMKZq3yrCBJSMN2qBo3KauVGHqixj1fJN58zovTaqSQBiE8CwxfS1AfMc6wQbzbA37bpsfyAEoxj1uHB",
  "key25": "TiPcgxdVcC4xbndrtd746yLZ5RXx9TRX5YG2mmGLUgTYPux8xZ8wqSir4L9dbnHrTUdMoFJgXNJutLgGU3eprnQ",
  "key26": "2XoWJ7AedKNhyhNmfTnJaerR9sPhuSfzzUoeoa4enwXSpQ1fSXyckNYUwumxFqHG68eP9g2NBBcCHjy1fjXW1hEV",
  "key27": "nr7LnZKZV97FBQ3G3tZkabfKGSCtCAewMdA6jXGxkJem4hKke9VjFdtzQorWQVDN1iAdSYVCxjU2rStAnB9ZqFL",
  "key28": "3UbQD8FnAw2ckkxYF87C5isoQj8jYgQFFbJduQHqSECr86YmD4VZRnJpNYnrHfz3qBTzCgoQgw3bMjtbDfmvKGsH",
  "key29": "bHubcEuQksDY5ykq2qRHpULPseCUvhREcRSGXxi525UCLauUQXpXkNvbtPjoUu3tCoNagM5DKFTXvPmh4tSLTaz",
  "key30": "5Mnb2P8fbAKqz5PG1t8LoZS5LwZ9emx46QJ1twZYhUBSdM78FMbPfKPZQPiAzooo9CCkTg8C593aTvkrmuHQL6Qd",
  "key31": "3MfRyyeLWKsHV5KSEpJNK1tfPU4eGSWmwTBy74FCBQK1fMadQD9MPAMfSkK3Fg3Dez6ziMat847zZZr58Zga2McQ",
  "key32": "36nb5wj7xfLQmPVogFmMejj7L4pB7Qf4eiBJGvr5bDNiEK7ZWetVWP1k3w5wmg7EieRf2LJjSFBqv36GBmKBFnZJ",
  "key33": "3RUAvi59MMopQxViWYafykjZy4mVmstgxFM9zUD555CrCpyoSzaw3272DozSAxMomNkTx5BP67oN2st2nwJjMFky",
  "key34": "5wJimEoB3TM4u3hVdZFQJ8DEYK72Q813RtVkP18rPDuNqywygRq5aYnTUNT8aH1y5ejB9dm6tpnnPZVLxovLbMxg",
  "key35": "5rhgu3GdP8iXWaLbrsH2dL9U4QRHQb2MHvsQt4zk874PBCH1ULuHfUgynh3AKKZkNELbPAQqXbTGo4YpYREJuMDx",
  "key36": "2HhbZAs8rUE7pjm6evwtcRtCZR1CBad8ftFT8RPnzTnS4pG1oa1iWoa34JQd8a3xDeRoNu5iF8a43yFu1hyGmGia",
  "key37": "5w96ZQ53Mn9wndGHeBQCof3FgdRbQLqak2sjX6HiDF8AxMyFzm9jpZvzM1q67CQaUuhN3X1JWd6MjCPNgeoiwdnV"
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
