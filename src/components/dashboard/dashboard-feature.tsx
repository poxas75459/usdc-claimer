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
    "2h5ioEsc4BiPUKYjDEq9paBrozgbjtrVpxDjRioCxypiRQAwTKzK5Vbt6eUEfTWM3SxrGsQqKYj5YukEV2EMpjue"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62kqfx9o3be3rpFc9M9bBxHoxNWBw3x4zQ4HvgKmkvJ3RqLPHPkUnfMB3RUuKtAUePTVsJrSgcFtZbF8uV3wn9Ft",
  "key1": "3ievR2nA2cAfRenSHz566sRz2Gh7sE134Cnf3X7zN79F2jnfVz6Dg9trvE9WgHEyxSx46hKFs4ue1LCJzAsg2JDt",
  "key2": "2BpMy5Mh5V8Hxd59znc2jGnZXdRMZG2D86Boiw8ycTPMMWcKyZVGM3u3D6iqip3oTWYNihHND69VyQuXz8jYSgPy",
  "key3": "393ykQnijZtnzRVeHmdrs42w9RfGg2ygexjWqjkKBrTw1Vw74G3HRXWx6deeHMcRsGDCjd7GXFQ1as2vhynhybJw",
  "key4": "4uamLwWGzn9SPgWVApYRQen7rn8icXRX58sLTr7hWNBidHo8CFZoDwFMNrdg9Yeayr9p314464uAw7gX6wPBkb2R",
  "key5": "22Vh4MzAzD8uPNBJEyyXnUfKr4ygEX4uez3v9TqWZztHRT3Km12zuiGbrpPu3NkwXxyhAznXNqtBoPQ7z3ZYvLhP",
  "key6": "2C97UoAoZvwxL8qTEKPWGBUsrbrm3KrAK5rohAkKTTMwzqLMteuDtVtgpAQ5Ay5KzSHeMkmGD5SqVqMfpMMsCZ34",
  "key7": "roMjZTk655s3CDNup5w2rnFLpBemTwxeykzwqCdR1jdX2TVxUTFioK8Jy2GW2sTCr9eFh7ZBeqCh9KB72dSHvXo",
  "key8": "5TxPdxwxM71QzMxDbP4mtYyjRdDeQwvpFoRzQxVz43XTQDwLBG4iVd3ncCFgHDm1LqZqDDL6tt8zR3easQfqagAk",
  "key9": "4nPM6MSeTw5Rax5QKsMssmUMzQuSPgw3iNk5QZmrjGCJqaixjqqic825Hxe8n2NbrrTje1wkNoNV3Zct58esmm73",
  "key10": "4L81DLuQ8eiNVn3GQ6n97aPQhssfcav4DKFrNC9xuPuRYviZ1jCQp4jXKuRrzP3njnW62814ZgCnqzsVMXqQKT4",
  "key11": "4ZGr74vfdwpqtFQL7QjvGED1c3ZiFaNcDih1JtGisZA8NZqeC7RsSzYqnrMEhfR3PM4RWg2p8gAFhq7LNyiC38hd",
  "key12": "4KF2TC8w9h5uW1TfpJvRox4FhR2SobadAbBjRvvNaxPriz8YKCQaCky7FT3hdiS8v2KjFxwdC4iAkm7Woac3x8CY",
  "key13": "3Dyp7cwoHD7uMHSJPHshvY4XM6YM5h3iiJodtJT2vaPfHZGU3yQHjeMwXc837GsxBpPG8f7ik7HMPHWW4N17kmAe",
  "key14": "5QFroTwf1ZWaHUxZKBXAP7wCc6EErKXwEYbftJJMUkzyPVhCAyjqkzPfA6zuKb7GFWKaXiwkiUReu1NjYJwsLwz",
  "key15": "4TqFNfNwv5f582qmLMh8qG5xioZnEcoZDyPwN4mahrPApJisDBrsfv135ifA84NGfB78XhgQ5vEyc6rgc2ViLGU7",
  "key16": "3jpPP3CNTpsKGoyV1qEWPiR3HZDVYcWTjs3zv63dZ25w9g1yaHGMMjga8YiXYpDq4KaCBK4zW6ci4s15L7YjnMU5",
  "key17": "3KiKjuY4D4N3ivWUWx7kGJPsb8ShDX4YyKn1wQaQS97kLGwiZj7eaf3WJ3MEJxvJUENaMSrBbXBryCf38QK5Pdpg",
  "key18": "4ihLAzr3aBo3oJuwNew9gdEneGFUbP1Vd8hqr9vZJa6F8EV7QVQoqTRvFKda5vS6LpDnMXq3ARLZ4Du9xSyC8EdL",
  "key19": "3w2VhUahXDNHyGTQzDwbDv3eFZabT3qp39MNkq4wZTdCLLde5APo1PzkKWKKUViaQdVk3oeAaHAAVMRt3Po1dQm1",
  "key20": "5PjcRsBHZp2rp1P8g2aE6zhq3GGcVgko65QbHrktbdn4C1GwHBgLhMzL7s4a4NezPwLgKL4Wmhs5N91ALnbBW4L",
  "key21": "3qTbcPQgHMdnbsvP4SGpC92QVuoefm1NkuQEr3rY5SrBnuDRmbaLMDJrETJXb6z3tZjATEePtstkyzzvfsYnep2W",
  "key22": "3gMv6DWEpgyjhfZaqwHCsKkQMukDJ5WbqQeV9LHc6f9oZwUdgz1pTTXhFBBpLDudG4EusSLY93q9WMcesc8qQJnR",
  "key23": "Urz2kKQHLiDFKqWRVB7CMARNn3dsTgcvgz3qanCAzNcQHaW6aMGRSUGR2iA8NaMLfEEHRnMtFeUKacHjHpxzy9V",
  "key24": "RUxepY3WLRxdHP7XWrT1GDeakCeJunG8AZoxniq8icXehMsAm8ciyM8RMzVgoyngnfKXjD6TT2FEhTFqipQN1qz",
  "key25": "4XGUxhev2ukh8oT9a7GehgxWYqMKVQ225z9wuVsxLrnckJ3MQg8K6BmJY8zrYzzMU1vfMp6sNFrSSGDXfa8Y4ev2",
  "key26": "nrm3Mr1KP1u1BK39Mv131VhTuuJPivGBdfmRuACQNfpjSrmf9G4p9RZ7LHsvd71WPTRmJdHbEVrtpipXLFR7yZs",
  "key27": "2dCduBftsdYLUUoPVtEQ84VADsGN6BASNTE8AX5LQdR4QHuRGt7DCUXEo7jReQWYganT4TRsCaHjVan6AZ5asnms",
  "key28": "5RiAh8JgYhV3RuvTtdKxKZnS8VzfZWi4rMGUmwzLSxD653wj6VLsp4YUqG9GddS8Xs5g5o2t2Wq6iNQoXbAZ6kDq",
  "key29": "uJNEwTb85deYreRER5SJDtJBNX9TPFvY1qmzjME1JQVFAWywbCkrb4ugBJkjDccAhbbyrW6RtJ5rWdoK8JheT3o",
  "key30": "5y22rFp9qSaDTFmhrwvRBzDfbAaY6VxZAAV2GQniCe5m2YJpQwUSdeiiQnR8Z6h3ATXnfDhwTkjacURiBm7NHxbr",
  "key31": "5rEBSq4dWYTxkMHwm2X2GtSHzteEfDsqD4UDqbjPTjMkg1iRqDyFYsWbMS7J8J93dszapT5swrGHN45ci8opw7m8",
  "key32": "2ygfkzF1Q2oAimLZ8EYNRk4pPh5Leoj6e65PdVVSWLARufDjpVQgMRQ2NYHRhVWNf2EBbX78Pefm6Pv61G5jM3px",
  "key33": "fEtqF8cBhRortKsMe8S4y86oxHF44fCCNFh7v4wwgJfG1Ey6eomcH76eGrXmJ6pQJTu4i2nGNM98S3fdcWJGSDE",
  "key34": "5qR6VVEsYsMu1gyjHriaTttv9ePrgrHPAKPT1gcBQ3roT3rfVwWP4PGUnL3A9NLJ8YVvYGWEvJt9PF5Qe5Jd8Dte",
  "key35": "2WxPURAfhCEQuc3oqPGN5erZAnRnw6aW665VLp7CAeAo6Q2HxCzKxUTb7cfSNFZhQs9BGeqn4tJYAZe8d2h8Xzur",
  "key36": "33qKFKDp2cN87cGCF2buY56yQZGisR9T4tnfNCyu1trmrmgmqEzeFGZXwZ42T2rJzaxWEaEZvBT35rJ4FmmdNnpG",
  "key37": "4M5rx2r4HiZJvzUBp2bQEkegPrdsxQcw1amC47TtfdukgjxRAnCvrKTK9QvHyEoVieq2WbQwQiLxCvhjfLMou9CT",
  "key38": "3ExEudoQHGkacfofdULwmFwDaNAQgLYyVurZX9537eDb6x2CSmGVTrRtkjdystBqhH7ZKQroP4URj2zDc8pxqWc9",
  "key39": "2DK2urSnfEEuUgjfJdw2pyZcqCDb6ZEbQ5cB2W6adKdgorDH8MokSipGGfj92x12HrvmvytaLVh7UkUp9oEq57mg",
  "key40": "cEiqyhx7rCh6Bu2yiJZwcTDrfmNJLtaigakifduRr1UBxyZiinfWKmn5xJAWjC1caZas9uC33xocPF32JmNvtcT",
  "key41": "5J1vY3QMJ3UNucR4nZetqsciSnKfg9Tf7UT5xK4YJwdN2xiyPoPre4javdiXztRbNkrZKt78sDfPne78PuCsLmfA",
  "key42": "iEbZWvvSQ8eBLYqwmCZ98n9X3twZqq1q7YRat3bwYnGfw8JcK3As2qP5FHpQDeeJvKKvG6nokWzfCr7kYiSXLuv",
  "key43": "eB9PsSpKvvn6Twgsr63vfVUpXRjys77EkoMzwCV4tch8ks2HxDUG2QN8F7S2mDnWAxBjXEjPSgXnBNgHdgiyX3n",
  "key44": "2oftSpQxAW4r1Pi9NHkEFFZhMNGUbsSEHLTSnLhp6xAcJBJccnX4CEqrvZZJ6QorzxjKbdFEXWrQzrKXiyMnm2zv",
  "key45": "2v4FxeHZvjKX9qtdCcqCzdZ61WodQggjfcXiodxFkNkG8rrep6e3eUNYSyzoWCYyQ864bNkgfV6hM5Jhmwh2dyyg"
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
