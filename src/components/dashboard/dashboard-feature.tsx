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
    "4LHm9Xvaq1B9RbT3wimNQdUZrQ2m8B9Wc9iRtTrZs2FcRS5jMNtYvZmKRxXvrA1fdob69uNucYyuKMBrWyPmirmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FuwAtAdAaTuq4AMw33p2i1hpNJFD3ao95hLJ5nfEPXRSk99hi1YATcUqKgTHnh6SNpuGNKzhzF6pafHVWCDSvEM",
  "key1": "55GWuLfmA6sPa7mxGn7QZYJLiL1Ah9rXCZejD58147uWnL9cUJX5k3vwib5zNW9NxDFsBykFbgfYbhFCe3BjjLGV",
  "key2": "3nJQhgLeUuuFmx18BZBGdZKno4Lb8xJYKJQ2XrfExq2Kc8L87cf8yv7JFvpdEgCeLao83ahVKQEPGUVbE33s7hbr",
  "key3": "4m3YXR79SskuSTQMMiKWxqTeqDEVk28NZinermCmVwqGCwrGCyHn8RWp5BYBLgjYKPvwXxGVe7rPxEqUwHfTHq5G",
  "key4": "5JoFgSjYDVupzgkmF6PkyLCvBn2Xg7tuhgJcyZi2wLoewbabZhSjjoYaz4K6VEcZSSvA4A39NNbd1Q1SALpCWYim",
  "key5": "5AcVjDZApe6cJcx4V1BYxfQxPiJb9rK422L4SqBg43LzYn6z4dEaPz21a3ZAyxhwoCyUSSKSonm85GmbCYQV3pQx",
  "key6": "4teWUFzBYtZ7g1ZcfeT1wjfhTAZs6gh7td79uzbJyC5JyWYTxk3aeUs7DQum8bDrwboEU1WXDZi9mAgeVsgirDK9",
  "key7": "hKLKFsXa1gu2dR4Dewf5Ti28Zuezjcq6gyFNQFcs8iRHcPE7tQkTjnR9vy3CtU9PJQnSvUEFpVnLBd5DZH3BKKX",
  "key8": "KnJ5ASLcPQpuFNkGY3xRoRzP9dPBjStiptHh3TGQzxw31oV8MPzYMig44sJWdM8pqP5kdPNcHKmKyNw72wEJVrT",
  "key9": "4E815LsXe4iFM67Hve9kMLtjC39AiUC4GUaUqayyLSYc1W7n1sJdVEhXAumFvV4UkVo9LnPUXMCdoSEGC5r58WBs",
  "key10": "22TEkKgBvT4odAwSCyoooZAo8rdRtRBgGotiwHNobWpsjui3uEN4mNUh7xC3YUdmnUVG2ZraZbzaC6SxmxQqn9QM",
  "key11": "3LkGAeDMHqQ8fhi4c1ipzPCZXK2XHFsBQmkCvpnjFARzEqA15uJ9Teg8JD22fJvrUrxv96SQ5o4ct44QSqow3K3a",
  "key12": "2wDwrVtQefg4dBv1mgUHKHQpRzVq23XAEfEpLCVRS2YFB8ttqAzTNG31Tu8hidLg7wbkZYis5fUJDJ12P8NeineN",
  "key13": "2e8fXukVNKRfHM9PRrhfRFWhDoiJM9eLGcFx72tuWyd4U51C87DGGBTiF3h7XFCKaf59ihna1SZ2jNBu8px9ozFm",
  "key14": "4XqjyxAqe7Qe31E4U7MEK3J5EFGGWhVVKCWP9bNRsv3AtT7HCxN712RGW2Q6TExmBWBNpGJmUNeeAea56zYjo5fd",
  "key15": "3hVe1zcB4eDBhqACf88m4zo1sj2mhiyQMwBvRwdEhAqGg25GAkUmvm4taZwqRwxvR5aMVMVHoxrQzrsJpVVS8wGp",
  "key16": "3JcbvbMtYLMGJV2BF3LQAYHeipqmthbpk4vuSh1tfF8A8tqGiq7n7Sthn8rsUgfekHrYnPoPNzXeJwihwJ5fQ6dS",
  "key17": "4kQAUoMEMWd5gEDmqk3jvMPK2mmYfM7shXyv1SdHWqMNQrEhFjtCofZN11qScR4NR8Db36aUBeiUFa18c6bzjjer",
  "key18": "46Kyo9JDpXtHHYeNVYDPetBErFV6v9UzKUvEzYYhd6fhZ8aUA2ayoNyXqjge514p9LBgD9oBXafrh2G8bGHT7dCB",
  "key19": "3YpLRziU6ZVinGf9XBnUa3maus8tzSWauvtMsWHFJHPLMDhaxBE3TG9g99w3EMCQLYkThQhXvEKXhkVJ7eRBHcUy",
  "key20": "3WTUPqPWZvPeFh2HtkzXx8mxHHYSSPhW5eJRvE8rKhrd9TPrLp2gGzSKyHmCBphcFL7gw6xCXfLkmBuXzjtErujE",
  "key21": "3smP9zgASr6yX8bpGxDHJgdfwymznqJVB2CP4W7vZrg7Pn7eodncXyfghydiYcqxWW3GQC4FBiboaCCRApMkjpps",
  "key22": "3iYu7UCdHafB9EzFCmenTc2wCcvjhFZwsHGzo9JNUPcWWBGEximFuw1DRMuZ2wgqakdz2qz5SSN5yQG7sYRHpEpK",
  "key23": "48tpHusZgjkJj4zsTuV1xEKpgKz4ePQcfyp3Ur2YEwmu6YXtFW5u5d9ZrzoNRhzMSP8jvAQF2TH3KuZndMyNMt2N",
  "key24": "5kWzdK32msyUQNUXm2EgXUiJLM3KjKr5UxfqriBPpua2soVd3FNVwsh5SdtAEzbYrBxTxBuumjk8wpYyGFs8huhd",
  "key25": "4hDGp3Zzs9JBWpq665speVrRSUnECgW75z27Lmaystq3KYi7nDwHZZYFb3fjRmUVdKA1RnR9e9EJG9ev6uKtEZT1",
  "key26": "mHfVG8XLc1bzVCVURKTBCfPbcjfmNgSrfUkDjyyWtvLgKcD5v6CUm4iL8kgLkeHBDeSZSNNrsjLC8fFfn8g1ZHX",
  "key27": "4LcAtxnFmEWCXhUMke5Au41z6tuGo6aHCBgXpUCwGXX9N2GNq2bwM7YA63rGkbtEs6je5h11kGgTzuzeD392bmxn"
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
