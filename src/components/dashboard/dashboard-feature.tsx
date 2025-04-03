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
    "52eP2t9Q1o6RS9VpRpEDguxQ6vx3J572fJDyggDQkZnTBxYfScGt9btXCHWeV8kNvN5mUjNcTXgXuFMMJYEAvnDV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iLp7tvZ11BJvXv7epsGwDW5N9Fvq3vBJg6SJxGV4cfk3wQzNnScLL763BJDznbsPD1xXSCXynSitqgeN9AirwVK",
  "key1": "2qvbW1q3jdmHa2aQr2FKneYpiVz335oZJcBd1vWayy1VueRiAtAXvB3XiDe21bJPLyLFBQF3P2Uo5EgPuhhzzhnV",
  "key2": "MUMWuPiRvyVyXsQuRK8bTjZFtBpnX8KGHcjLVSDQvMjDABAZ9GvsquqWzSqjQvPxrPCs5zDDFTNHsMAtBb7cqM1",
  "key3": "3S7iCuL1kAstocyipNk6Xtj5yKUx6tVCNTPdR5rYK7HDyjDgzhGARrfXrBQp4DBYbuLShmkPrs8NrZadVLRQtpJE",
  "key4": "5hWSdAs5T4jzQptUsY8wRdxitbJS7DuFT1RoeoXW7sdyuRp4PqyRMrN8bjBGQeFTNqSVu1PrnZ2LRDag7uozYGE4",
  "key5": "2figZSpK7tofQRhbzR7zwcX6CFwtrzb6qyRcM1yjEtKvvZ8nmgw5jZ7kHG8GFnnoNxeg7ZWgLFAxHMz35DQwnnmQ",
  "key6": "65iVttQGZS1WmFQbdCzjGbMxnriB4JPYLKh2aBfAmYmbxJNfkUC6CYLxVAmLNfgE8oXXZ3KyhvVvgecho8n4o8JC",
  "key7": "3xzjPBM1TNxiqgVAUvcfcgqehZRyzVzDFwjRJCZKZrHV1EFHVyAv5Rt6XfdkgdPx7qw7Nor6n5YmPyuaXwn8ch31",
  "key8": "3jFJie9S2aaGdh9wUoua9k7fAJeXpp5VHQAM9v6znfXw26YnuBtwJNyxV7BCCGsTFv9SfZWedm7ZY44qyk1WhCnJ",
  "key9": "4vN63udnL1wYLZKXcmiCJVVC4aMY1WVJMigNX5GW2LLkK7j43oWrshhaCgJ2nZkiVmAxmueHNAhkwCBZ5cryTUS4",
  "key10": "44VFFmVLxyXNESRX6acQWjXz6VHKksy3gUwnazEUboWnD1T9NzWg8z3UMFZS6jd47UN3LNaNABkdy8GroytY5AtF",
  "key11": "5KwJnoeAdxYmXf3YSLShsVW9xEwUyt7sTBKjjVVQ5sy5aqQfBwq7RpScJSn8xLn8eyBroKSyLYsadbiXfF6otkGA",
  "key12": "6tFFWuBcv3cQKbWWfAsDxuDRjagEeD57C3LiET1FJAgmzRckEFKv4mCDnEEy1Buo5wB6nqARjwGzE8qEFirBRfH",
  "key13": "tPBgUxoUMjDjsUTcKA74zreRkmUKi59fY9Avy6L2ic8xnNQra3y4Vsd2jnEW1h2jUZ5ReFEjFBTxeaxDDMtypYP",
  "key14": "5g1b4kVjUdRPsV1zwRYy1UmAEwcHo6PPzNTeZiGPVtU2fRuyM8jw1gy1wygxFZ7ZiCpB8pQr9zNUVB3TspwBtPnd",
  "key15": "37UHsJxnDsg2wB7fbL3HWfHZpfuZwwbmBbiXzxz52YUmYeydTuGsY9ohyJDTrWKYfNx47jSbz2x2PRtXdHyZVch1",
  "key16": "4jt5KBcwHTEBSoVtQfmnmEoLpC9EuVq6DoWp8tCMd1Ntu4UtKaU3rV8DSNnSDYRXbXk4Arxs8orAybpcrcwDVFJA",
  "key17": "59pu3RP9zbA1hpQ3eEaXqHEFCEAQ6wgTMJcckwn7Lq3Zj9QpmPVYtMKnTWyxtFNJXjt4ymtLPdHb8uRE4b1wnLbC",
  "key18": "5gmHQFEfW9RbBsuGRdB1oJLcCaACmKRzMffT8i4cMuSWZLXy33fRuTfDyeV2YwuHPry9GetbmbdV7GMuaV39GJj8",
  "key19": "NxAjFu8rrUURCuaY7TwsiBMbnCmWEPzPjzciydGH67GGmikzJAmc2wTBfS8CNayf1YMocaseuWUyGYJhWvWcoU2",
  "key20": "23tADgq6Tv6xAJctXfy5hxcxe5x2woL6m3Qhz9RjHfGbcwhsvFY7K2hn5S3DjaVgZc97UBfzq51PmLp642FjnEkr",
  "key21": "5hZeEvxUzzi1eYHz5hyMfHsqQQ7HybPgExSpW2mC6X46Y9j8sv6ACRiiKEgSh4NcuaD4U564g6UTJ84KHdWfF7oS",
  "key22": "5taHwYQsoytLj8rNfSMfmzX6iuxnchsD94Thq5vP9sHiyA7aTVsvjXU2WK7cPcH6vioASbFty43AYgb4SVbeEfcm",
  "key23": "53i3UMMgEWzyU618ictGHVJfDhmxhMbZJ9VqLMxX98J9Eb7ichmXBnuyFioxcG1FXnZd91GSBzBoRaV8Bb7LMJSX",
  "key24": "3pZQCXaztpzq6nhVcEKzzLsjGWBjW4rrhtaA9oWjEj7nKVUh4HX3DFtZiMKogfLo6JRNw9ZtbgXJBGfHBL62tVn4",
  "key25": "4QRf3Evt1CXgtKj5YwfE6UfjMA1q5Q4ammpGf5VcCdN2stpxc6jLsq76VEdJvXCdvKrm4Ns2XD1J15o8TUjJXSds",
  "key26": "2qJ6oPp4zdQhrHUPX9xs9feCtavDVfzZJeKEam7HrHDaN3w76HJN3zb7gWBc21YDBXFQ8WkJ3MN4FPht51xbUyhQ",
  "key27": "2xmk38eCNtd5CySz5fRj6k7a5AVqR8uTq9KJVW3xstkDUEemJkasBWDuSFV2Y4646tZR5dZCyvpPig8QPbssoCbX",
  "key28": "4B3bB6to7fG6yJnjpuyyEHfjEK8ztUhNXGM5MazapRTLEKB1bkDBxEyz93gqcYpD6okDFPpJcjxtYa98ov266isc",
  "key29": "58faNx3aKqcsC3uVj2YWn7c8FXCNcTbiU241CZNZhyW9VpNRL1qhc8ro2GiHqAVKRfXcerQhEkk6oTGKxYeHkcWh",
  "key30": "4MvsJWAg17Cdjpwzh5TBd7SmGFkyqzwt66Z8sqopaprYXR7cyB6EVRSVSoox5hc47LPFahjPMsg5yh9vohE1XorM",
  "key31": "45cLQTTYXvAfVQezhqpyV6fSxAhgaJpM1an46bvf5WbHyDwPR4L7Doo9wmWKt7jdpXPMscWSyva4tAz86dq4LqWS",
  "key32": "3h9PYcRVPyAQ2qd41cVJ5iCifbv9DatZaSCCCyPYugBsu5Tt81Rhu6jPo2Ab9F2E9XnKN4pMNZscXMfrq4FipfMn",
  "key33": "2s7CqGwZLYUp6xJzGC9fpFtafAJUJHmuK2ZoF5W6web2fSegnBc5rCQvz31JZrFm72BnPPYXZ1Xphp9Umx8sNuto",
  "key34": "4vRsFUZvJnENfGEnD9Z6ns3bdfBZgSWhnbDoxnk9wsfuteFXVNrNF1LrYfAEtKALCCKRcDyDjiQHzpz6a3maYzkG",
  "key35": "2PzTy5TePf8G3VNnEfTsT6xLSUrWXpuSJyhMcmWx7k3aJLHdLyHt6xj5tcG3WLQ3xT4tbyaV39ZrAzV65cFGARX8",
  "key36": "5zHVCEdnq8a1eVXS6QiKFreHpJcxTMdfr1z6W6snFfYux3arXy4QZWZc8vy8z2tvF6mha58FYW1iB3oJteX8FukN",
  "key37": "2gR2dVCXswC78SABogSWpLNKjLZRXTsSje9pioYpBs3UXZmVtEkvhBtsPdKFCjxNqoYiMbf3uGHeUZFWNeiyg7xN",
  "key38": "4PDWngHcqpWDqX8ZDL4jpHFSMm99K3iVDNMUdQyai86uTkUVHMaf3A7XgX8LbUwyjf1FUT4T15oxXKfUehGGHpsc",
  "key39": "2TJdqCXK77UhGBvQRzz8rcvrSnUT5tD5kXugpW2kebgbvGWumpp7XGnHN8jS9TXxkTCfbywyWQ2ycf9jgKRojidW"
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
