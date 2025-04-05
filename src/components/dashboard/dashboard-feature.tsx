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
    "5FwsvDyFtVu6792XS6n4gYs8apv3oW6LotGCka6xx9yUMAT4nqNrUAoBEjVi8MuHvSW8ew5SqNMyX7FsxuYoFETL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VrWWQVg37BAso1mUqrh67Hat6aMELw896b9ezqssQU5c9bmUnLXMgGw1NwBo5AzwrYhnayVRfeTSREV293mBLK5",
  "key1": "5ZB71iBpmZMq6vE27FNpHkzSbX4rgTtFtabw6iBL6cVkV6pKMKNHwNxGrUSS4YPWjWnLkRUPzY9pGaH5iJywyzTr",
  "key2": "3r6vMoEqsgzyyXeer27iipAUQA8dpTpo1WbEMVunAaDRAY79XYXg76i75ZKgiHBTMPye9WcP34H1iioPi7ScqbDw",
  "key3": "hREVyuPxUWu5FuPKJrYCjC8ogAC67VVhW359Kg52qwwUQJCa9iv4erPxMBgqG4t8d4wUhsaKRmfMVKFcKezobhZ",
  "key4": "5hgrbAWhB6NsE3q48yeAtxEXQ4sNrR656Qp2tx6FFaSrMeEqRhNoCQ4DzkC1xJr661cgyy5HRs581TJBUnfNj1A2",
  "key5": "33GHZbKesQTsJLubvq18xHJFLA2u2R8PMn5RoDbrKuLRmGTrxwS8PTxBeVM4n8WUBhRrQ2rANhSvDU6UXdV7j4nt",
  "key6": "7TrxahdvUyhmSZBhXkCgmfhd8fPmZTtm137phizfzjBRXLYughgzhUJSvkJ8di5My1Y2Kd6D1b1L5MDj6zy5wHV",
  "key7": "4dVxEs5s71uc6B1c8kffEph1fHt32DsXGbwpYnGqMtu8brjTNXXj6GqKPfY99hKw3JAQSqGsNpcwWNhtdGrQ1V8T",
  "key8": "4DTTWCLYa7h5DqpT4c6Y7cKSnFhGLesTKE66cwa4hJoNRMn2A7gMLP81dihxfzuDFomU8D6iiipDwkwtn5XwBt8w",
  "key9": "dwfibcNvTK4LfGkZHhjbrQYU6zR7Jg78AxVvYdF3zS5iTmgTQedwNbV5qkz7dYTdZad2PeXt1ZSb2SnAi2GyMY5",
  "key10": "5g3cGwb9ibWM4fhehKdM2pEzin1N85T5NaqQj27oecPnuC33j9eo3yUmEBAmDcEWNu8KshVroM8s32rUPP64rWcG",
  "key11": "4S2nHCDvpEzgF4oRGEdLzJNazMALrjzNPxpyHxxeFJaVuAbTG9Nai8edLhdPDoxS4k9mCjGBHVpKWhnSrSWpPUxS",
  "key12": "5w5Q9jVp7hbF4qgVbAkwCZJsEDzZnDijKSfHzNwgPe7gosi5cfqDzHETzGeiY3uTbuMGdoviC8u7g8LzWi1S2qNP",
  "key13": "4nNe6q7x4nT7ZPGigzJgB6UZ8EKMtJzpq1UX8q8Lh5bcFyRgtMhpMXxmAWRhqkdWT3Yb3m51sEiy5NfUPWzzH9vf",
  "key14": "2LBNF2mkhfCfDCrNKACUdTFfPCMmwJ6Vs5maZQnJUwNHq9t849J8W8i1tCE6r1HZF8uagt33oAjtjqJ9cDvmCsu3",
  "key15": "3XC9X453w96xPd77Fcdt2UUdDWfJAwwjixJEdfG74AgSou631AHxhk2H8ZjeYH8LFNLPc6ei4sXeJgUNSxoU1afS",
  "key16": "5uAJyZ3xJYHhsHrviMQUpULGXmbdFpskanqcB9g3i2q972hjFnF43i9Tr8QPLcBk48K8XAmxgqUodCi4syMk57SG",
  "key17": "zYUhHHjaTzPrGmzxDzqaqNsLSyqqXxC9Liq51dxdrmU7amohbjLrTbQDSnX8LjAh1Ez4wEDZDR5JugTvbjNickM",
  "key18": "2MBxQJ1h5tHppk6oG2MPCXUnR1kdscwQQHpBnztVrRm1616UyfumdZFt66gVSKNghP5x4eKzKf4mTvvP27KXayLu",
  "key19": "XXGQmsgGNBhNfkR8wFueSDKW1r9bEJTitoZR5EZ7zrkcDJ3Ugv1RsFiqFE9VmGCArr7RUw19bx4wmYNUJcbAurh",
  "key20": "47rwkyrZ5WVRZbCayFUdcLHpEDVixNirh2QK8nG3ZD2pfQ88Ch3vm3qnYEu2voMcZEKgy39osmVusDP265eRhNnW",
  "key21": "5P9R5zjVWXLMdDX9f2ULU6NkzVVX7jsF2GvzW9NGLWE6fGth8FHScErUaZ4a61bjHbDYDsqDMQGtvKpSJ91dEDLr",
  "key22": "37ihPKdkKXQyzGkNda9H8fvNyRmygBoghW2EJ6KtmtXCdohih4euobtb7sD693hVK68NX9nWL7J2YC8v3ZELKDws",
  "key23": "5caB54YM3vZp5HwrFLj7vWfeJsg1tsMeCFu89KyKnSpYrRqA6m1y2K5wS83QWixoZhCdfcP5eidFKoqQkcAs8Eiz",
  "key24": "2nPBvpAWimyCqcVzVv1Ug2geCy8AASJcZ3kEpAiNjY7ke1nFDHeMDqNGyvodHDvsgQTsCf8srzdoHDUrGWNRJyiG",
  "key25": "2krNYAZdvrmXRJeARJ6ny5fxopPpKgbNu7D2eLeiJNKkW3m7zmC7NCaQH2W89a6HgB7jhUATvKcE9rjfCA99erXz",
  "key26": "24K7p7HqKUToWqf2XQPEzWJ2uYy94vcPWfz6i5ZpZoex3EHvBANwSnjUHdsoFwX8wABrZDkcp53aaeYWTZmf7nqt",
  "key27": "2YQdT561CLyhgT9AZMm3bG6EZuHLjHNbFjn7ernYvVx7gWZs6iuteV7EwrgHh1xbwm7Rqdju5tBVv3nBSfr7Evcc",
  "key28": "5bFty2RtiMJ9Rn9U4wQCCUioAvrhoDUKNMJ4rfyXz3DcfkTBpHpEzjd3XdN3RaCVwFDgtdd8EVQtUeadS31NRRjs",
  "key29": "4ndqxsBaL6dUzFvVCwXRgFzugn7ELR3B1wrWeAobkhcudF2HRdm97cmj2J6jvaoySJPZ4kHXnnQuaguQsz4ySeMy",
  "key30": "5BindnsJYbifnEAmam1ckcFnLTVsmn1bZdfuJ35r6XcWHhqkAEJ7mFq1fmHCJ8cZbRfFErVkFvN7XnxtHExm4wDn",
  "key31": "5pp7pRvsWeckniJMnrMDbBP25uBVzTuvZyQqqNRDEvGgtimVgPTVJh9FBqXDhjWh513mqFKuTF2A6peNWzpoxWb4",
  "key32": "5h8BG8qXPcwzQWEppXc5FgiRGT5hh7nHvR5AEgFXmEAiBRSaFXBJaxHZbeqEKGoGczz7aqscs8aWX7gjJMNcWKoD",
  "key33": "2WZ6LAsJL6YbaBaJwhiDuVWABFoHXSorR5iRejeoximxfnf7FryJS4sRdpyLYqETe4o3hYmLpCgaycPeX59vhHia",
  "key34": "5mWxmrqk46D2XCzYF1LCe4Kw9Ugr2pdPpBiEgKWxsFNd31mThcMDJDwpWobbZLbJoVJPqkVvmo25defquUAkTRgd",
  "key35": "3iDmSbfXwm178g7gfc9xtHdFEWhCbGe8tk83hGPXt5q4WbsJ9iXZKTDzs6orArSHm5ZedA7aTSx4CsFU6XnJQE3P",
  "key36": "4RE7SAGVzkijas773QK9t3uhpY9vq5HPhT7TKt1MMkYrQ1ZJ28ZKoHCp9dmpsYhsULWUf7vjUpPjFRenofrMtbaB",
  "key37": "3jjL8LKH9zubU5nuKHxKPdhRG9jgruHoxuzRraqL4xLsoNr45qANx77ipAdSHjFPAJFvbBaXR4G555NhM6JgrdSk",
  "key38": "2u4gQmx4smrSr4iY9jn14Cs7hqNp3EwDBf6tksnXHaogrksmGaubdrBmFZDPPkfPWEHwd39uNmKt316tLXAuG2Ki",
  "key39": "3B29hCKH2wNymCvPMkRHC5SAFP3mzCo1ZqY8jTZg9UvmYTePAFJiEzj3kWgV2Q3bSYGMydXZQQgcGmYMUPK63K9c",
  "key40": "5d3tjQ4G28PaJ5kmV56E8fr7G7gfwwHwKva3bHquiQqnMJbPx1NRfoz7dcQom1rJ7uNBaTCLGuqHPF9g3DbAurqM"
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
