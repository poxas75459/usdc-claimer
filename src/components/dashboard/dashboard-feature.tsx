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
    "8s988B8QT9vx38CiFL8e69oGRhU587za2sUMeNj8AegBDYQCdZU6KnPzd6wtaR6pMMCiZ39fdPaQBYRsNWZWW1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bKgMPsspp18h4Q9FaZF1RUfydymy8n6fDHzmQTePax5SYvymsZtJLEGQ8rJbZsE4STSF9dV3gQ2zLiBmGhX6pgL",
  "key1": "2NJgpdLcJaSPYzkVTU42Hghyo2gg5bL4sdCw6DLc6nTVFHyWxVqQbUkEYBMaAk4662gU7LRWvaA9Vup2hvy3nX4q",
  "key2": "3Ve6UAB7gDX89R5jpwCHSxRzqifm5wASLvwsURPBkyBn4F9iqBqZ1T8mrYfQjkSK9XRJfxd7zNN5ZHRB6DA18mcN",
  "key3": "5MWS3ivZaqqReKBL3N8PcUx3GE1qiYxMT3Uu3xYGmrWgkei3dMXF6aRj9jT5Nx1SPk6AzG9hw4wGJeHMxa8Qswpn",
  "key4": "2ZAgSTSw184jdieNwHzXJ2MuPHBJjhiK8MEKNsSkTjQXhS8kCKK8wsTe8DYFdCAZfwEuiocYmVsX64Yna3TXVsjG",
  "key5": "2wtB8AECmRhFjKLVXaPTUxX8SJsr6mQgbVRDVZzsatfDGXAQqexskE3VGKgVpwB47jgiJ2Fn1f2VtZY8ZjdmRRAP",
  "key6": "371XEw5mzkNn5vjsBcyxE4JyYrDo4WDv8nq8cTbhZAQ1qRgow33cgCF3YTkkxBRJcPo5sihCDmNiJzZQ1JUkb6nJ",
  "key7": "4U4v8tCTbjrSp463cCu1tV6VHuTfPQAtZQT3JGcZjCsHqccLniAhUsDec46cje1MjRjpWRpZEgjQyCGZjZiCeYhx",
  "key8": "2Mzr7yL1GUp3xxSNftnTtaaVf81L6qHEiW1qraexnHxEWptMxQxcYz3MQy6LmeorXRAhAvFqW1Njq7uhZojdhn4Z",
  "key9": "2ZXYEZ9QEQWMZzzSXYGzHcwSi4QsmnR4T2K5ompSX7Z8rWhTBAiDLzRAcdfWsAYZ81VtmgcHSNLduabfAkH6B6Z7",
  "key10": "2VTxRPQTNuzLaCj5iHv4AAtbBPyJWcVL6G2A6t9CYhNN2HVpLGHPwQe26StUeiad6ojNHtyyZuwWALjTWihe8S7W",
  "key11": "3CRNkErLLFt63jRbnyhYb5jpRUNj4YZPG2rjENUunXyUpbd1evF8YDFSuagRADHypjUJWwkdDcGHfJcEVdKivgyP",
  "key12": "Vs3xGvbM2WVE3zojsiFjePANuZB1peh62KXxrdnHmN5C4DRsSKrS7VZRLUXoZdYYwvpoz5jmm12kA447JcuMMeG",
  "key13": "4Z9qrTkCgkkiH2YcqFB5vqfdfVBFSa1V4dSJEdX5AL3KXwnVSC7fQDNk5KfLfRpZfAUGUY6wLqaYxKLtwHsD6oKh",
  "key14": "4DxRNeSJgCQ7LjEcQenm9ZbZ2TvHPmoThku3EwziRP4v933x5ZvrQCTK9rsxpqHBzkmdeYmPfHY2tA5PwxJygDHX",
  "key15": "5eRh2coKwiU1xRGES1ayzpmqcDcToHT9GYTyBBAEJ2uasU4zae3yygzayTXXXaakuQF7Hf41drNJJ7DP5y4mQH5p",
  "key16": "mBUfaFCGwe8hqx71bVeoraJQB3swGMwFyw6qyTsC9cnaih9nfF4q7moStHoRcPtCwcCFVqNpuwgeRrsucgGKKag",
  "key17": "yLt3zsXzm9aSXRVmfoNEoReTgEC99bbMCCzcdqmb1uJfqaQkscDF8CZeMbyA82SF9tjEoYMVVBf214AugZNM4F3",
  "key18": "3adtfcpZE7siJmXLjKAV5K4kgk85yv7wS6f3stqkQxRbMmxMm2s7EZcqQXuLPnU3Gd9kbGwAbJkrUgvydBF4jtyx",
  "key19": "4a8dw2tU9eFnXTTuKgxA47cEp6jtK6F82stLDrzf62DwbwAV9byrXrJectmKmqzUuqbQiM54ATTUiaPhizT2RoVk",
  "key20": "hDTSPquGr2m96v9qrgFzByCBqz9ypicpd4ikFwY4j7K4AK3nuunSN7XpGpaZyjm9wtdw2SwBpqM1dCmWcAcikRE",
  "key21": "wo34CadxdXw6ARq5EUT8JevnErMoKv2ENzP1Zj7oPHg8EegXXKTNs6M3bKhwfsxy3BcqRUPS8k1d6LNRR3tfiCB",
  "key22": "sg8ZiU8oXEKUB2e1pQZ3CCtbChx2ktsCp2NB3BXutf3PRRfTAcfkW7REmpDLr2BHB56LzRXxSCVjxXQTBxVwLtb",
  "key23": "5VBe3vbncgSwb69Da3xNuFMrx3aFtjfZcsfSMCSnAV9rBrV71aE2Jt5QXv1iuco5AE652wNnyFY5fiMXrAtvSXe7",
  "key24": "5uc73wkekG4FWSpYFNdftcsUVwMLPsQh3d8HMHEEmHSye2gMwmcaxQB2p9NYf56do5a6LpKzdsSZyL67Y4eWLycx",
  "key25": "3vCQsCcWwMcfNxtvYFZioVucYSpdXtB6348TLam1gJmQGqCc4JJqwWZ5cJxvq5denhZwKiU3RaRebJc25JGz2fT5",
  "key26": "3rZ8fFfh9bk1TUNt5pZddURBfbdTxs7H8bErhEB16fPJ1dfwunTAXxigPrNJqhyjGiq271rNS7vNHNYoByCcvoHv",
  "key27": "3NKnpHesNimPBWNNwaLgjDSZ6JJBHvf3bETAWMv9GWkShWAj9BmP3WVWcgzJhFTfQVSC7e3XXAtezTjA5XTAexKd",
  "key28": "41MaSNhj4qYV7AUU6ibWBmn2f3SL9yNELT1H2pdgDe32Dr9PNVF9zUbgH75a3wkLuYUFN93ZwiDrZBXxM4TYsxJp",
  "key29": "2rkcpw86xvQjPLtTKWWUAC26fTXxFxvaXmUFgMYfMRtYcB2pwNotVsoGyLBeH8BpVZUE4mLj7hLu7EsVu8ZbCCAz",
  "key30": "2EuFE3esyCSKSdBqFxnSC3Fza62JEhVh6hcjpLgEP3VR415g9khrmxSzBztt9vDebAqzXcg2wFJKUpah1RjfXEm6",
  "key31": "4UbEUs4Wp8xSwasSVTTZqsZ5pQb2aPnxwCjLtURXUWJiU62JzmgpgtFwGu812vigHVdiXP1QbtBT8KYmCda6TEo9",
  "key32": "5GmhjKpnEZkduRvLZ2qhfxQKJ9kQfuzChSGPNj9V39qtTgiNnGrkCCZyGThegDt68LnxkqocA3eUpxtVcqGnZRan",
  "key33": "4GKAHrQ9sYJfzsFKnGMY8GKsRwhcX4WDzZyFfCPbkTkpRh2GVyPrxpEmkYkn4JDuWGeq5X83Zo9gcQbpNYPpWiBG"
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
