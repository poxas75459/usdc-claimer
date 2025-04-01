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
    "57JsYiraGusUWS2VVq1LzvkUzVh3w3RTt6peQ8q6B3ke4sb4zjzUCePYqgwkFwgDtG58nGKmAymG96LEcnVU2vHD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Nth8cM2JScFvmGB1np4bwCKy726ff1DGxVjZPqrHdZfUziiSr4dg7teSw8PUKxkSbeRyusXrhNwYZAbtvWTJntH",
  "key1": "3qCGcpRCp9Rhsw5AKNuCw4tiSgE2Q521BfoJm1Zi6HouDdbwBGxEHcgtmcg6PKVo8wpkcoHQJxxmSQwSa3Swz4tp",
  "key2": "3SRYw7f2rgq9NWwXRoi7Yz7YDbnfh3qLXxJWF8tFzZ2sHaJJUrHs9cJ2BiFFaFeBY1hQaeF1ssBAZmAQFjd1kjJo",
  "key3": "56WZPDvMVWh2zUBTPzGUPWQcFuJjwCVoVwReFyBsG2HBZgxyqqhB7p8NaovKQ1pJxrVffHVyMcn7hXByPCPybCcw",
  "key4": "4YkfvVphBMvFgTvHmdNmoixcz95mFb2t6FrqA4hVMbVzCTpF3mC4QiE6CfpfokaXXUwPYvw47ikid7syWBQNNJzr",
  "key5": "3S3TiX8BTWxGdfpGrTofR3Vt99cuEbdXmgP9FsD2Z7ShNtt4K5SoqAs1xNJdpCpoKVvUhxfJ3icJeYYZufRRKJGP",
  "key6": "44gFsSQyCEKuvp6k86GqLrB3aotkrqJ3kYBWw5DXz5ioLjfiKp24o2Pr9EicDywkUCmr97ErZBRFY6tk7hukgxwc",
  "key7": "4EVjPQonGVZzg3jxcAFF7VCigR3uFJ6UtN471pvfebn6goiWno58yjzR2m5C2e3ErdpHETUDuY5gsFETD3dxY2c8",
  "key8": "S9Dr5mLA8mP94K4QwTEenxyaAbAoJcfMvyAsssFvACzf9b3okSuu42ZpsLxythQ4HqgtWhYkji6k3kr7M9MvJ49",
  "key9": "2LfVfJFuGwvF99jawvE7QFS2B2S2LaQTnqpouUh45ZvE4WtN3UDoW9eZpYJBSt1mfbRKjxWHkYFMzDDvtXBKYrZX",
  "key10": "5qUdC3EwAGNZADRKM7y91kpkkjbVTGT9BtaG2ugMtce3DmcCzqYBordrERZdmrDPFHyNrNkuUCkdxng5u4q4chrs",
  "key11": "2YEK16Lj6cDTErcMytoX7GqHiqtXu8t4TkLETVtHAMa9Djd4gsFRHnoEnJCsQmE4H8jLFHdC2MGqLo7w3cA65hdJ",
  "key12": "67TkX96pEyD3D8L7qxBS6AAimvYjiss6H1Z5MQ2bvaD1t6Xm2BXKh86sVaxWs8LM65sBkXtk1GPjAGH9kZid2AB3",
  "key13": "2c14iNWrm4xuQ2LRRthMtSMTscwNp9yzqCG5PKy6PtkCvdoG7wHjS6besMFa7Xgycgb8UnkFP1ArudxvWNe8coS5",
  "key14": "5KB9gNey1XHUAR8Jd2WYHPkfbUHmwBJMhqvUDfoUCBXuh5ihUFbkNw9mG76F9vV7Ck28Jemabt5rVZe94RSPEb2W",
  "key15": "3eDGnGZpds6atZcD1aJA95fjX8oCEix8Sch3abSoGWJMz3CHczKYkwodP42VGNWUDAc57B6cB7BRHzxtVDVXgPuK",
  "key16": "3qgEmxXsFF9r6MgLboLkmVubVZQssr152Mtdw5t86HUosqsyWmBashrchpevCgEDeM3RHH2vWsoqwZajJwh57G3h",
  "key17": "3VUBKqcJzEysefh4vRDqHr6PtD2LADcYkKonxMY4QxdNBibQXZ2iMzcBNb2h7B1mL7bMwu6MVVdbm1qY1wKCKNCW",
  "key18": "2YWbTcWQUWt3Br4Fo2Tsod9TRHvPzhhUKaRz914nK6R4Xhg1RXBTkw385BrAPsHZf16tq2ijUQ9hZj7x3FzTPn5o",
  "key19": "3Q6nQyCbou76AY8E78CcTSZvsuFbS9XwWDCxnhVNnep1ZKrr52otHtXAURGv61eZnTVKM1PYBK1WzW8xV9q4dbrY",
  "key20": "3PyrsdMXY2QT6eh9wocPLckgLz9XctvFpjUGaJ4qUtXSDqkB6Nn8JrTMUgezZTL2WAKNx2hiYSTwPcizdjyqNQfR",
  "key21": "3u4Zbne1ECmSMhsTbDXkjUpnm5DRNF7MgC6GEw3eJaTv3By92zZoahhGEy7rHKh2nStoxZG93yn8b7VBxvj3qL3N",
  "key22": "3ARx95ogRV8uZTgmjK5bsY91Hn2Y7zcyrf56N7g1MXYWAGoopGwofVSgJ9PnRVnzNL3HTBzYn8NJTpGFECfyties",
  "key23": "3tkSyqMFFY1eEHpyAkm8wyU77ueCbFWrMUbWem7aMGKDCoX69fs329VhjzuukJ58HGdsip2XMkQh7BvxXaqNmxcA",
  "key24": "aa7THQ3k5fgW9dAKGuTtcN1VbFQLup4b8q77nRF1ggnrYkSA5rTfBMvxjK17jhcvHebPApaU7Xa6YLAA7vYbVg1",
  "key25": "4iTsQYNjWQ27MzXM76D2xsqe8YzPHA4DNAxnhuZzvRB48Nx3BUmAwKjHLh6LX9NKK8Hu9UHgDEnSy1kDMh2ag1et",
  "key26": "3av2ZB7vpQQERewbmRP2EneSyiFXb2CSNYu3NxajvT5X6fhVdAG8WNeVn2XSBsYWAihTmYC57iZmXZSvZtWFoCbC",
  "key27": "2d59pUaNyrkwDHDiimUcmTbKF3QuGeB8UDDYMngemqiQrPGyyUx7zeScYoJPVXgsgsRxeR2xY6oL4HaoADcvABKb",
  "key28": "5gzp6mdvVVncT99xmX1jJiTBj5u5XiNgtHtFxVxScfpgLEBdUH9z5TGky3nkQ7LcmXQZtyWK5CS8eUrEAqLcZGRi",
  "key29": "kcsC93aaEijVs471bJcRWBGieRfEU2QVgYs7YGBu454QtmMXWykwE7ZFed1FdwfwhBirGQg7tjRxqNdqd3J6vgm",
  "key30": "2zmKJU47RwHyPLYSTumdg7wMAHjDNqBVCq7ENCop4cQoNYu4LXSGgCS48oiZLj6C4RxKkpvLtBAU6EKA364zKcBn",
  "key31": "2CwARsXWB2yASv8zYSXvg2rNyLiUsr3srvkWdSJ5ojf7WJdUsY2wTvH17uA2Vm6McrTXQbf47sGcxNSEX1BwP5iu",
  "key32": "49ZRVLxkkbyMcgcMxJQkEe4bnH1EeVvH2AvuzfYN33dpmyMnq2ENxoFMkHkD9Z2spheU8vtR9BQoNaBkQXDJGEUa",
  "key33": "2E55wdrX8mxFRVdVsS1RSaQ83e4QAZG1cGMTmYzQpc1FcUrtb295rhY1bvfXBDdijQ1Y5nBR61YFNxjfwKRJcFGu",
  "key34": "3KGrA7YrvGDW6o33mKrRPC4mUUgumRHG3mTHDMWeJc4PVzkW6jFzMUZGSvMDJPVdMRFg9jRsnERhef5arCQ87onR",
  "key35": "4upQ25ERrKNvWm1NdUyVJzEDRT1abRNfXQdCK7TjzVnojQfNRAuNkz6nyPkSfsNjFcAZv3KsbMMUo94QqAWXEqDu",
  "key36": "3gB1yZ9dGSH3Neq6JcD2ycaDmmjHc14rY5wjBUTo1dD1TBXXDSLbrrrnQPbz4bS6s7US6WbyTgdAaaR5u4wb9eHU",
  "key37": "4WtsMEia81Am3VwR1YbDN1Cz4MnyDrDshYpGUwqLfkQdMp96ec79uoUiyYB7h5yTfXUCB5U2GThHsqxdSPDQmfqa",
  "key38": "355Db7QnndEceiFftPyW4X5G8UGX26SrYhoUH3ZBwGT8G7ftYBcBuztJhk2TQ8uFkZAPKxRM2GwnDQpSvjW6Jo4Y",
  "key39": "2GZYUrFEHMnyByvPD4z1sgAjPCWQTev4uJUaEoUsuNnVmhPr5eYY8oKX6DLih9GcVN6uWLACE4V4HiFfA67j4SH8"
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
