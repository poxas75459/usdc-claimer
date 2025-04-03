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
    "4iz8Qgau2chgheR8t7LWr6SQZ2gw3Rb8zyEZEN3BZAAxCyEHnFCV4PdG9FB8P9sTJUsLn4zFHwK66JsSpXCBaAFo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cvVF4eAG1RXhXLDLjQbNkfhNKBHFVWQetgmCSBP2x4AirbjYWry5R75Y4qkrjnZRyo1biH1CP3GxCdAd5eGpSym",
  "key1": "Vh8BckVofMS3usR6ZeADy8NoFarWdYyV21pt9CE1g9bqif7cn91NVYRZa2Rw5xyiUbHEGJnMLRXLqiFhczH9f1f",
  "key2": "Le1WbrxcknX1vE2TnJU8LkJzWU769pX5nDZSUtsqNt8zrGXacNoK7PstAgmBmcyPETE2EbbmStw7yau9177CfPA",
  "key3": "4wj2VA9aCkD2zAsLko99AypEZjg7YRp79Dp5MFUGyiZcifJ1RK3GaPZgdoW3qbNPmhkkob3w9XgABEA2guaih3GP",
  "key4": "3Haf2vCAGQUXDTNrx6EPNHfYFvoQ6b3Si6t13VAUpCFVsSDTGaLVbpkY27BJeaVRq2ukf6pfDBk9fe8sBRNDZXyM",
  "key5": "3aBA1q7eva2ipJtqC7XgKh1tNcEzU2A6GAKYq5sxsiRKLZXiwMvoMat8ZmqXP54NzdxZjWnE7HDjUakmtaMsfde9",
  "key6": "ysyCvq5mJQhnEPMAHkmFB2v7eNAMY9ZaCyDggjZ7uYi8raW4kfjQDdNfBCrtyyQffdreMYEqtLWZ6SgrxipEtvA",
  "key7": "5FzGyzgLoTAr6DY5boYCpxG3cbavshjkikLZgU6PVBALAmKygw1jE32kHRVVJn3kdBmLvWRjFbmKL6bL5bev4PGL",
  "key8": "hUHAngm4e84nyuUu2XNwsTrTtnVQ5fP98UxYTGHG6jdJXGYkd8JaXxe3bTwAEEVzMocPUfnyodhkam54NW8C4aY",
  "key9": "5jbEXHwPcYsm7gJdhj18jywEqxbqd1iD1Xod6K5WWDcW7Brgzof8MHxgovVUXkaxmBvUCkgwt6nX344JPzS1cjmt",
  "key10": "2p51G1FpKUYmCsT6AXkEM8bgxJskGKLdcoNKKQNhuFbv6awTwnwcSWymBYzEb1AQZ56eKo1xmMpFx7v7C2XNPzw5",
  "key11": "2oZSU1JYKRXasTsu2KDfAzqfPn5GPBjzD2jdQUM4KGnzB31jqSWa9yUBSL7TLCqVkNLVUvVeWNgjTvsRcp4TQfru",
  "key12": "4szRQLLSGdGhaH1hVzHULN4p6BafzCtCp3NCGhSEvCTqE26yXX51HVJrRNnzx5XuEoQWcoNXNNiZZR8RW2NrHGok",
  "key13": "obQQmTtqniwFV3dx7TvM6bi8197MpFJzZaHTJMo98JGwVhBoYe2w75xj76TLJy82CuXvfPgbjneqsWoe4r6a3sJ",
  "key14": "641GnYZmQAEUHP1p1ajKsJhZ46byfLf8MFd21BTjf6EcVXhHgkPUavZFsETk77vTfu7Nj5EHhgxBpj4pKTkavY5z",
  "key15": "4ArHSqqVB8aRFgC82vGN2p5iEHTQP5bbYUCjhHFs7eKyf6PxuSN9NvtETfBpqZH6X7yjMD6b9iB4znyUzcto2Qus",
  "key16": "5XHWtvK3JZpnosGBNamx1hUpBFuirC9o19C7qeANDdrNxfLYhrVV2ziT6TG3AGy6AaN9SjvLCsMDQVUupHVyHoox",
  "key17": "2KAnYzMba2J4hszV783Z7qf2piA4JPUPDBAkjfG1Ku7xuszG9pe7N3j22KR1WNnVTQpgxnU1BUoCpRrigLedT7sY",
  "key18": "4UWYEHnDE3ukRu3UuJGDgMsqwhhyMyPqJtcGmLfcFGe1wKgRc1BmE6qCrYFE1XRSKhBurkPpCE5K1AbRnrfwhk3e",
  "key19": "5Rg1gPw8ch8HhE9wtCRGn5MoZymU8nzPBuFu35sFTKqzPDYY9QQ279dK1Rin68MRiMmJaVNNKZSEVaFGwXCtNDD4",
  "key20": "52vLDoPue7RKcSQEp3vRy9dtr7ytPDv8cfXYENUs8axTBgagvP2QycGASXumvZyjjQ3tAsEoQHAeGbWVxbXnUZqA",
  "key21": "4DoAUBGfajVKFQN6gCCDxnC5GcTvqzKVxUoF5crWMXWTt3Y9JqEYoAEw9Nqy5r16CXBQkKwM19hc9eAt9NJSrLbP",
  "key22": "1voRmtrjdgHNUuANKcDaCgKNaEcsKc4uouawKkxDLDWkuajcXAGx6NFY1BjYwMAYKrbR7u5CB8Nvw91sYYrd3oh",
  "key23": "4nkBF1WusMxLBNMjoDE67ys8vuX5cRdpYHELg6SWSycKMbM3GkqFuxX5ENBv23ZArTDSBX6k9Eoe7cbHgTsQgBnB",
  "key24": "56fdsu6UUH775tqbtRNNGuBdo5DCx8MyuuyqMd7JeNsqKm3CcRmSsjTDAhWJfoJpAVFAtDkrWbZsWnpwv5rShshs",
  "key25": "ibCzRdk3fabfLvAuB7eUaYSryW4Vne167iT59ciY9m7RsATnchiYurdKSGrDM6FbYzaxZkeJc8xMWkaCBdKmx5Z",
  "key26": "4igvBqju5yGSuJcXkjY311W3Eh9mEAPVkXPmU9prnfYhQpBLHKagrUa8wdpodijAbKv4vBN3T5WeaQVYRZEPMrur",
  "key27": "16efCeiDHVxWcgyM1pLfEHtTVbXmE8rzC7hrwYRrGFhuuFczUWWuXW6MPsr9AW8cycp8SPUhasQ722nZh8f59JZ",
  "key28": "2ZwKMhELRvFvw1RZRKAdKgFQFjMjuuoiuKqzX1eVpcdFVJnEWfrTyCydBaQkH4gSqCeizUH3HJJHqdV9RxBekzCp",
  "key29": "2VAjqG1s68jnfrkBX1u4vEe1bvTmDEN7TPoAMM1AvS4ADm9XeszpcQwvPTHbHMSZLhjHL9hCWoEiLosVqA1Re2yt",
  "key30": "2VkjkrAUTDebALFdBbrbNPgNiWa9eUMSHHXmLQnr1PTgqdUwPWf1TCni8a1njgxCnirGVUr7yN3uh1FUcKgUumsc",
  "key31": "4KPV3BbaGcbHQ9K9mUBphDbvnpThJ7rtquV2Fh5QjF6ZKgoLTw8SPL6kL4sYXw2kr4iSApKdfoEikpxBHH7obdtk",
  "key32": "4wkmSx8Nbhfm8QMZ2nmbLXUVZGfMAv13GWz19gjxE2Vo7Q2uGzsTXyzYS3u1ZfFLpTAqc6MzUfFCDWwQvBJaFfvz",
  "key33": "5fCxuHUDe8hrFojbaihgJYRVsdxVWavBuEE98d6nwJVnCmepYC6K7uDqQEFMk15hrkDLRzTJMiMsFEtpKVKUvsmD",
  "key34": "4dMRgUbhLYQ6svxmw7YictB6TG3fM8SThgLhoy4JYAJyte2fueU6mj2py5zjyP5WgpJtBH9ufcYW7r8eak25XB52",
  "key35": "38CYnQDA5fXxbiqdG2TvZrBUVFdawXM3aThWQqTwjBtkY4zDVQT12SqU1Tch6xJJ4nFJrRT19Rmgc3tsd71jsuy7",
  "key36": "3NkUMNxbP5LB6JrqdmepDzVURtoAEiUJ1p1Hnaz2tLPXMCsoAM68txPNnQjvAxmawgNpkMMBnFeBmJiYZXCHc1kX",
  "key37": "2mnZAjG1ttWS7Ak5pHysEHWDHdSqPxdMgrAacXnMVtZpkYR1AZ1pQ2696R4S965hQKUYkmwAFzeWPtn7txryzPzs",
  "key38": "VmLkRmVJq2ePYnu7oGxBsbT4PmX1LtMgrSUfC7BFX97k7jcS7j2Y4iMqYXtpLvDTkhPTJ93DSN74oEP79GcssVB",
  "key39": "kdXxNNudZ7xzQVyVqMgBLFEa2k5YiEQwwyvqVTcw2rCLLkbbQvvRyDfkgVvGWVTRGQMK5pd8MJvpCZTgpE7meqN",
  "key40": "3n4G2Cn3cpMVBL6kcr5cbdPqAHBHBZJqXBWprsr1UgeZxpqnoFR6HnbnLxMZJCCcdi7K3MsKX8VVK4cgBkc7A6NF",
  "key41": "4q2NaoEsxtKLA7YVtE8pAzEwxCrmg6ncPcDTVcFBozdZXPV8o3JBr1VHCnkdfspPQFn34YeakkbCUXCMFSgqqfxS",
  "key42": "2ZLZfMCmCW6waT9ZFfWSU1AxBAzWGBGveeUq8gkyAhCThEwBctGiA344UkMW6efvwAy48yYmcs2Bq2D5ikVFHSNt"
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
