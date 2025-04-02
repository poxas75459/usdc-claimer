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
    "2MBPGKR3NTP7UKh8pisUyZdbXGmnqEEbocCpaaoBw5GhJ1vm2ifKjyaRj98z9Yf1P2n7g58yu8nW1PJLeRmLK19g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nsMTTHVBPuL8A7Qu1Uq9aQ7zyVAu44bZmMeXczRL9D8rcKWxhwBtessrF4W1r9U9jwz4RoSUc8MbdWpjUU8moMK",
  "key1": "2zHMPtmVBT4QG8eTbcYKFKY1fh7ybLe1z2VfGddFTQYHfbsn1aMihb8ZDqbVUe67ATptvsEkWpnqrMJF5Q37TUGw",
  "key2": "4BN2QbigeKxkbRc6cghgbURQNnCgMfUZiXKSzGDqGzw5p7PE87RNip6LS983uby7JNYEoynRH4Jc2fcMRJTzVzBu",
  "key3": "33ZdqYFvWQAj73v3hEk49M4qkksmi8gE5FEjwqrc64RjvKrXPCdtQsRs6CAMBCFwdGuXBtN1zbfCfEeFvzMnT9u3",
  "key4": "5Vb3e3vnfGSen6FNeeQfxJVTZukt3Mqmd13KhoyvEzuDLKEJ4A2KzYNRNCy5kiZRuaNPho9DSWRvuzLjU4YPRKZZ",
  "key5": "5TYf9w9685SCJT5GhKb9aUK2KCmcAPsYShCraoLCWxEqWr4fzTfHGBJFoyUWn8zAksQF2hhzq6To2FFd5x3QtLQ5",
  "key6": "52wGA2Rk4xKa4YbCHHrCt5oZiZfVCA5xw1kbcC2rdiv6JJ9Crug6zSjH3tU7MbFeWtZKMaHqa9SqLGCY1Wrow2oa",
  "key7": "5ygft8dimR3a4To8YR7qBT3nL3dZJwYx9Ji4gJsrroSCp2kJZqwjEmm4MSuGfiJcxbo6cRJKrpVKTWyrFfZQjV7K",
  "key8": "5qTkanvDzus9UBkCZCg7pHNXtUjLzfQyREKH6uMDNrrNWhHpJds5kZsK2dWx4kg2Xt8suSRak2in5p9rn4K5FgE3",
  "key9": "4SKYhtMekpVzVZTx9wrQJcZ4petCX2mdnf2BCy5dkuGwHnPfD4kUo9Esda1PuepNL3BDnVY567gFrzLuJafpd6De",
  "key10": "4pRxgp6poN8CheoNaa873E8WndztqByRiDBBX3W8NijYQHHm8du5TW68itk7jSqnXMVSGpBmetR3hgFHvFXa7zsY",
  "key11": "5LQ7WDs3QZqAo22pGYY9yamjVsT81LqKi6ANjcUndhjk85xueGB9GiGn1m47M7YsEFZu5XyQKtQ2bXHoN9GTXJ6g",
  "key12": "4sRb6i93pHYCU597jMgVVWexxujRjCn3ZUQEz2xk4hZ5X6xrPVG5nJBqHPyaZpnmt6qAByLqJXro4G6AetkxpPhn",
  "key13": "4W5QTYkYQQp3aPceXpzHfjyyfvUQStags4rYRd25HTJNiKtyeQ3JVMj7m5co3Fcr6ctJZRYDRELvRugudRa8AL6G",
  "key14": "28jTEYGkyWaWSgsPks3XdakRuoAZVqPpjwgNKEcuAzGMYsDnoHp14d5LTzMntLvuKRHtuchCUFV7zVKxZk8WpMc4",
  "key15": "5Dg9QSLaLRegJTrn5TuxXgLXCNwLiwnv56dUnm1AS1ymoQU4rK1SNUtWc6GDS9nVdiLp37CPeoF9c1p6s1HFfSDq",
  "key16": "rRnjR2WRwqXacJoWi2ezic1ZEURasnsJqRqubiGwNHvr3Pj52Egj78gbHBZKUuNGHPYhLGo2ruNogcgBQGj4212",
  "key17": "2dLwf6T5koJJ9dQ131BuCTjo12WDYT4LWuPj3UfeUaRiShBZDrxaRA1cVV9cQb4syesHPv8uGCU7kJ9rrcBUQViV",
  "key18": "2jGtgZX3tx4i78aGHFg32nqZv1hwNB1HWu1VxcDsCRTivkZEE6PpjjuSdWzoJtUKEvqrSSKB4HAWAmYMZD7PvjH9",
  "key19": "3CBufPbzLoQynw3F3rUkDxXqUu5nFtVvCaa8peNuHatDTHFncm3cwJPBfSRJacScjBEobnVaNuhSqKX4x6SEiWFb",
  "key20": "5MdzwCp6eSxs3FoJRBQBc9G5UFSyaJM9BghifXV8uTWCXPJZ5rbUNbSJ3zZtLQDTZLdk4XCJt2QS6NeWpzmYzR7A",
  "key21": "4WwbHBPfs5yEsH7o7yvSi7A7BJqwHTMuTnLCh6QxmEJxeodbW1vhYujcBmfFWsYhLjToMTxUoh9bY9R5QB75cWiY",
  "key22": "5gdfiYALKFguwh4792umDp2YhzEfLnfQXc1QVFncwXkmpBbhAvb7PeZX8ddropHppTx5sKYreH9t5DfyG2vDuX9i",
  "key23": "3WWJi5HZNszAWCtwkyxEPvG1QW4tRXSQZMnHoWX1VAavDQ3Wb4tquezJupxAMbQgnncdUUhpo2TTegmYjnab2WQ1",
  "key24": "517C8jsPq1DCAfGiEYqU15yH9ZYg8eKYNrTfzANCmwwka1qN25aznS3WFTF1x4B9zs1W3gE84CW75A54pdrZdpBN",
  "key25": "DshFMCx4GUVQXn6WCz4dGzjpcdsgVswyXjhvSASyTztk9H2nbFXAjuQF6AaFWGW4AKLpnuu5CTZLuWQHqJ6HpCr",
  "key26": "2JQaDdLiNMSTY335n29GLHPduCZn9BC16TcjLZhTKeceTqGDNWzrYwcuFy4PAhwwPAoB3WZwgjmr6MkYbUMb2q8o",
  "key27": "4RiEVmSHcxfaQPva8xMMQLW91LXM4ysJEow1Ucrksj4RaVn1TSNU5GGFrivCUPrcVWJX5vcVn31LaMt2C8n1PTvL",
  "key28": "2X6rj8PGhrkN9j4AFct49NkeuQiFr9FtEkRqQvfZEeHnHroRUtRevnduxRSDwgKgmZbJ44piFVXTrPHDifisZhrk",
  "key29": "5wThUrRpT9Wv31MCKSGiHWkLYHadrGNWzc1dkwY1WLkgRVm7qTM3CxKarwpTM17WXN8gocq8U7qXsQPNpqoga9P8",
  "key30": "fVFpo6g4MMADkA4EwFWRgY4w5iFNnFHeykJ57VQb7UWYxcUgsVmhCjekfFLgoGpCRo9XTarKLkAC9kTZPFT3ZDC",
  "key31": "2wjquoui9H9s8E2jXJdoenfC5gkF8nmyVZSUoHK8D1DWhKtuia77NcMS79Tu9ccwzmsdfD7zJYKNcT2VXZzSAu92",
  "key32": "XonEMzE1u1HAgFoz8wUqYNHZcR4oMFkP3QRuUWkJxPJiaqQWp2YQTLg5DXXtQiX4dHXivJVdZuzKp9Tm6teEicy",
  "key33": "5TYPWBhkzMBT5KdnAwzcMzzJJzuV7VPFr92F9R9srWFQonkNGmoGDdm5gSpbdRY5aVeojhcpJn21o24kMUp2nwEV",
  "key34": "GHVrRv9A7Ed9yuc7Sjy4i89vurNQZ2HxFZxWW9KHf8e4b7qxggQgj3o8SewdB8zg7QTawxVvEyJM7xXPArGabow",
  "key35": "YTyLguySNTavzepeYZ3uD1gxuTidvCLvEa8ycfryGnx7ZGJVACSTmMfEJ8b912txXf4vjGGSmqCqEnD4Wt58UhP"
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
