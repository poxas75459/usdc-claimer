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
    "SnJEaSk7DGxC6UTMPGzVzYr6qSQU834wiybPsGVEeLvQUhnn62CeBcMR2ixuqUcM5k62pQAm2pVCKhoaegErmD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55s1SXTtVnHSmp51o2S1CRstrS7GYATZnASU63spJT8jfmrkyS9F3rbuZAn5WWKX15fB9hpgCbhVrtfSx9HVkCvy",
  "key1": "26qkXHSfRtjWLfVp7dZYWeomChkJuq2euRzkKDfpUw5yJc66a1CxJZChMBZTL1gzxFAsoBDZxZ9qrtT5koKyTjHf",
  "key2": "5xZRPisPbH1LHYSsSPMYGr37pyD1NujSBUvAuSX25x2RSLvBhxK9UpYL74A1fTHdNgNnMGZBepDuasp1xphD7zaK",
  "key3": "2Mxk7sKbZziQWdHWnWtig75auVQHETU4v2iqCXRBqss8KAqv17UtNYzQzKAFFCwsijPtKEhv98MpXSAQjwgzt5Sv",
  "key4": "3NhM4s927AXEqourU7tYN6rmK3R33WukZuZAGvrgq84W7QsYg4bu3UbK8VQNMYpatnEEQ7HaUfrVBEA29ssUpdxF",
  "key5": "vJqgMYcVohcywAqevb4axY47Zu8Xz4GP1ZSJ5itizrrKgXmd2CLkpZ7AArFn4nBrYxbBqQ4qbDFwexJ2GJ9A8wt",
  "key6": "55k7jZ7xZSJ1vKHhu7SnQhAyiUw9mb7qJX5T9NHXha9vf3o3ayn88VraPTz3i9dHUT6hoPt5qAHGkymsDzDEZmr1",
  "key7": "59D6htzDFAFBjUek2YfXoD9BpkHYutweX5n1rTAwCh74usr6BCcUbzC69ogXMkMQfv6ErRx2GGtqt9MifDGxP42a",
  "key8": "2GyxNPiXm2BGMaXjACbRrttGtRyiXxx3BCsVowNZumqsCmpzx8kRPkkiFVJFrj3wZUqGkRopmyL9Vh1XkhohxLmc",
  "key9": "2b1Wa9n58U6u3h7oMvnQWKXqyq5KTFMVaMxgRt4KA1kTPC7fMDXWuivexWbUGa95BYwajEAGcbHEHCYksbUCSgGF",
  "key10": "FxqaT3xEHesEk3LT4z4N4nxZJ95CaQcSP71KkLDKpgSWgegpR2uwWM6B3apQvvAPLBzxhKN4yhcEyHC6AdwC9Sd",
  "key11": "4aW12djvwGesTxbN8nxZeFZxBXbudSyD1tdf1So2AnMQWEyVQX8pSPoQdmhZehpmukWL8SaCpWaXPCwBJqZx4pNb",
  "key12": "4J7ofPAmKvrCFC5cRdvsCv6K2UiqiQMoJLEE5HPCTtC3Ye3aeKVKeEFcFKw22gbeZsCi7pTsnVEYgCMmaaayLb25",
  "key13": "rxs7ipWpXcqt2A1AvtQCsMYmQF2WR5MKXPn5ugHiiVmQxVoNFQ7YcPvwmaHgkMFWKonGeXuDqkyEhx7btjSSFCj",
  "key14": "3fr1wGF1hPzw667r7nSRQiHHCAio44oGpLCiz4fBWxwkvkd4Jeh5iZ1WnMMj5eswweTx7ZoPu5ZB5r1KocyzguDF",
  "key15": "5i8RNdZQqnZD1sviXEGEen5RqUCxahW7aGabUFy8v4TtaL3Cg7j2dQBrqjpzb3TXXfSfpJ1oAAhNvpotYZuwEtd1",
  "key16": "3MG2gEqVkhUtrJAfnpFM3fp73XwCaMLoeXVgCiX5iwCCbg9rdD4rWPFwmRebFnMJKK6VFXeY5pf8wsbDbeqj1Peq",
  "key17": "564ytVggu7eKD98wtkngcEp8s32LkzVQRhJzgmpqtjKrEDkS4GXMKhmiyozdTeUZ3KXuCWc1FtDYcR8kiAj2zoF1",
  "key18": "5xukS38mqS98frHk9ZBEEMPiKGsFHTL2jTkiUPs3GpQSK7NihY8NKJ1bTWs91zTEPEP2ZTEZR8G2KpPf5GgFZKyC",
  "key19": "3SsWKB3YGYNKG6ptcPJkafGSkpuVTxhoQESnS2KMPmYEqMqLSMScqt8gtMyrRD9tr78VZW9DHAaJSyiw4gxPunr8",
  "key20": "5GRMFGQJxyd9w7H8u5B22EL9nNnA6NL98XtKgqKn8BHCnMEDoBMqxVU3Kejmoa1NRr8LC6QiM4aditoT4q6Pkg7n",
  "key21": "3MmzfVtqVFA4HUpz5WZMnq753FJSoz3RHFnZ1PZepaydErbJqSiwnLwj4xP7aBSrXnAKxd3XS3rr9eQZVGbLGrhp",
  "key22": "48SoboWyH9s9yHXstsFxM6ZhWfA4MkToB1kK3GJcK2bLzH9buBBnMNk4Y2qfmt1ELQL61dcvzhPKsFHNZNyNPEDg",
  "key23": "3CWJEm1hFSKkawKqcMqFY5F9SXD4KvR6MbnFgxony8umjj8MNPEFUjgmG6k8Fo7pu6MWZQrv6ycUHLYkMNuK5tZB",
  "key24": "4ufme9WXFphNV4c4fFM9fnmKAaFyBa2rmyazk4PfTWbumSyAUJC8d2Hz5R4jAK6HBB7DZ1vG4nKJoWAp8zxUYxSm",
  "key25": "aTYUQEXksJ2Y2Ed62SvXMFofnpVQ4ynrAMSF5tbVBFDNzdxACrgddD6hPmcbBHcPsKK5DbfRe17aTZKEEoeKpft",
  "key26": "AfrXQ61bLZA9WTNvxzd7wPpxHHbhzyEWmT6sKzGZPT29Xy9AVpEZKMDZab4EZLVhweoErnzqm74nSULHDSGxZPD",
  "key27": "5NLZ8kZfgJWYtqD4VQDhku64fcYBqHNx81YFDb6b6nS8FYr6pZj9W3XpzaeH1hEyUQXrPNF45Ms2VHzXfH75DBhV",
  "key28": "2eiEBWu92UACxVbapqhPxh8GyX34QGyzUXE1kEH8sjrPnujbQJqskQmYDtsJykedKMB4kVTLDuZitohbimX2Lppt",
  "key29": "Zoy4ETjHBFnKFFrBsxszN9TLYzRfx2Jacveoj9EqTvdyU5FoWyBYGk6tt4ogFTuS2NQJTyA6E13B6wesiMSN6UL",
  "key30": "5EmU5aHU5LcKzJKgAEZFiZNijPeHRtfHWzCR1MkizsZNPTWTb3Ugo7v8UGtnbMsrQ2YjztEieDvJYrmsXUorxkpL",
  "key31": "yTRApwprtqK47W2KEPbojeSSF2LPCUjP7haUtDwwQSE9HZriLT8bdDiKFVkm3jyPH1EyjnFcz8yEqM6DYozJyPt",
  "key32": "S5ZLfh4UcGBcjReULM47ryXz5dUCT9fH256qYdh7AjFwtkcLKs29sMgfbUBbUcpHjWRs6eW3NTgQMp3aZdt2zss",
  "key33": "3PMhGyDZ8xHmw4oGEUGMaNK2sw4sPpef55dtAyK6T3V2ut3rhyWp1RP4rm8tMoobGjV2UXkbdt48vpttHSKjQYt2"
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
