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
    "38uuiMZjvZdFQpXRNq2Dyu2mhKUGrjJZp4R41XMjCcFyH8FqSCKf92mowUWWFpJWSrFY5FzAtYS86HbsDDTNrmW5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5asperWJu5ntgqY8YqWfccSbT4PaYa7jmNPWpdnBKXfuZp2UBCAaTnW9oTrZMeCcrzVSFbmMsCpJ9XmnCZ8KLpAs",
  "key1": "4eheRVtR4EVB5EkgE6T98CrXGfPwF386hsm8cPMMbPJ5jQBLH5HRQPnsyVDoNHfPe4Nkqdcg8MwrGk7FdXTkvtXe",
  "key2": "gMwYaQ4mxaoRwoYJC8FoXS4XzED48nhUUdhgAtCe51JFhGjMUftVVaGUWnYGnL5VxviqRBWkdSimjriwp4TtL6t",
  "key3": "2sRRPuyzKsxnUyRJCj7aQFkhp4uEd5zoqi1WEMnxk7aBjeMnFANA9xoeRZGa5CmGj9PtFGStW4C7Q5cLVguaReQn",
  "key4": "4u6jLjzpM6fNd17vib3gEGFTPXzpbTVKdLwjxtJEcqf6hSaff1MSBf88yqBHnfkjuNpuNfQrkcqJGL6Wujv44g1U",
  "key5": "65VdKkF5AfSne5ZPUqC8pR2kvRMX3ejNkG7y7w1M6177DLypyyX8n1SsRykoZj9gx5JRFy2A6VsYQS8EwVuV4XEg",
  "key6": "3uFZgJSgSonAFinaPKrQU9NiYD8VXBgvdoPNsHk58BX5GRxRpbJQGcFdapmrYVay8arWAy85d6xEKg3S9dPgbenf",
  "key7": "2zUMkzdfkqSRwZ18J17EYW6AKHLXFD5Hx4MXFjWDxUjLX5n9sanpRLBrBP6bCCJiJeVK52Skvb3qag8rpqfyjL9s",
  "key8": "45inF2e2qzhaDZCvHHvf7yWesd4EW2ppbCxRRdwJQjDcapFdHu3xofcTRZEZMUovvq9E9QR6HqEFijJ3nc7mkQDU",
  "key9": "yV1PKBoqhtnUdJp4pZ7o1w1zqQ7L1GvS77SmXAR9SRAfP3WU8xHqZofviN1eqrU95YeqYDKBYH3sfjP8pr2j184",
  "key10": "5CDmZsZW5bX5i6QEvBbw5EpfoEUZ1G1DUxEJJiFJKsgBnJgbBZ4tHxyjCetRuB1hMg22QiS38z2FpjZCdKFBj8Jg",
  "key11": "3iMFpNo2hF1gAf94uVY2Gqu542unMVdLUXbWqgMryEJiK19cSf4phpipB4t1BXDS21VyBwZz47PHakCpRW8ymXcY",
  "key12": "38sDaNQj4Qns92DT3CdTZUcJurHT88nqahPkqeLiXjTByVLxz4bsvxutiTJyNdpPK9HFhhwVSWY6TCx4hBjtsMnr",
  "key13": "367CvDHfjy52kwZajdPhbfRYQPmNveDvV7ppJVFMKMVW96i3hV9mQDAzSkHdDCnN2FU8e9wM8VfGQMpWFduPF5Hq",
  "key14": "4gAEYwpzQnrXux1LPRgdsGpcso2pNNiQfHHudA8hyrxgwN78o15mfrSKpEaap2pthDfSrto6HriyL3oftBBCJZE4",
  "key15": "a5Q8xCTjctQsJKkehgW7rEcFDADW33X7fMYdoePr7WCmDE4jhxDWscSwhmVbwrAiKhtQvU6US2kFEfqJgc5wuDE",
  "key16": "PC3f272Uw4exvwgBqdhiKJgZqyxPsNLUkuURPLtmf1vfpRuaufgijNLXTdm8SzenjkJbWzsuQmktwbv9K3ioD9R",
  "key17": "3Nj94aXXWxRJVG1LFVh3juwD14o9Bn11yLuqYgFsoFE8FqbnaWYKe2rKZr2UE3urAXp8DoxMhDYQ7BnFaDNYyytA",
  "key18": "3T7UurvezSxcEK7RTUaBemH3dGJpPDPXvLjs4oip1HKVWJXgWkn7dZCCMGWuT4wbwrFBy1Eb32qoFmRpNaL36g55",
  "key19": "4n365jum4Zk8CHMogm2CXmRW4b6ZFvyLtjZikQokGUVFZPGaq2FRHJeBSGKe995wAae85MVT6Tag5hchxRFS3M4w",
  "key20": "4Gdf5TnCjBzF6kTzGzbww1Epd4rjuyRcjdLtMmcr3P85ZG7YD2PJyN7ykGk9eumUkoB5bjrTgHEufG25Tc8A56Bu",
  "key21": "4pLoqijYpQi1atarZV883ryc7E78KDyveDa7WxuFWBKKzdqs1cYK6qPa7jKiLewju25yJrZos9ATJ81GdEWb6ad5",
  "key22": "dnetwNrc15WdPMQQgXtsKwQpbP9mPAEKFdoH5AofpMsUD58Y7KCkJ6UnuKwNoCEFPejfiBrQaAhcWi2eWPui7iT",
  "key23": "3hc62496yBup2M6ncrTAnn3fYMgsZUjar1SnxKdb3hL4es4xkFdyq5YZuWp6kk69z1tNag9T85d6XTSHpuAfpp3n",
  "key24": "5BJ5RfMWMzBfFMm47GZ3ksx8L4HDnFCFaz7z7cU6DH4TJvLiseZagMDowsiiBPELVmCAUM1qM6RXJWt46NoZPzMq",
  "key25": "5q46ABd5TPr8AAN3b4ECTH3Yfkt5qS8NmHjQdGUfgq4bsub3SNNHV7MzSsTAfx4h9YZ4wqLmPoyitAjXTwPrH3YX",
  "key26": "2942N4tfarzWtQwzKFC3ejhXdXYMoTLuWQ4ApyFXDnHh5gTn7hYwke9BX69NmLjBj2m57rGETGL6iEttACYFD8Li",
  "key27": "3V54fv8dPsjsh9VJterdqBxdqbku3z4YeMetLMDR4uxomgdyWcTUHDWtiesBnBTapAupZe8tbmFn7FmBMAWRjP7S",
  "key28": "5KH6q6VqFx1VMYuyM4fE7sqBYJKTfxyDerwPAVMmUtVxswPSh1tVeVC7uB1fWWFHMxHCw923CQS1hv8y2UdG7xqD",
  "key29": "5CWxg5ZK6A6QbVtm7Y7EZmd4Zb1V3wDKrcgon1R4Z7urt8gbSDZzumSjCmTEmEUMLTGxrR5yM8Xhw6msGJbRtZfb",
  "key30": "65fBNjtJyyXLx82D7zKs2uskvAFH9rFfk6C5VB7jMcqCWXjhaFcsrcBcefLVuPJpYG446v4gSyicLRnac66vzc8q",
  "key31": "5jS5zu5socQm91oRrotYB1txk41o7gdGwqbQuwTeMbW5gM1ffYHNLKKZhdRsU4HYeATtPWqUHE27542Cv8zhx41h",
  "key32": "34WbxuhCiieVvaY1G7m1n9QAX8xgZ3Vk1tGM8R4u5WjMDYdDuvKmz4KEuFdP3ig3YyQ81q6JV4qyZHthvoE2brWw",
  "key33": "2aKtshP6igMcn8Xru4AEDLzzm8JSax9PanNJfEZQ1XhTHJ9RUTSmBugqtquQ52XTCYnGECq5DfK1pBwu6yHc7fAq",
  "key34": "fefBohoAsLaZLWpVxkm2QmRfqVCR8mvMyQLE98MaxvSJiweoUvznBC773fwWCHaVb3o6e5Qt1FeyvGdeCiGoR6q",
  "key35": "3Z4TAsWSziNyFDvZQrJf7papp5pnQBH5E4Dg4e2FmGGZCtZJJuuz6kJ8HxtvGDCj9H46DAMNMz3GR6VTJop1U6qj",
  "key36": "rFaUxH6t2bbKiqmNdxDw6AjkvDX8rXpTPWTk91MEfShWwhLVqiuRZ9bkV3rGAAqVeN7jw48JicbFJ4fFnFLKYff",
  "key37": "66whQVm5PtSv2PQqRts69PTWPCTM1ctTHoNpwHeEBFHLp8kVppyjqN2KxjqRuotYSP3N7e2Fo3fcAErepW7vBiSb",
  "key38": "2dBgtrYdegmQ1TYvSJ8r8x2vuVDM1HA5GboG36ZbvcGUCHBJdA6BGy6Ws7tqst1GwwmL3p6TxEf4yB7wjyvjMJfF",
  "key39": "3et7wzVjmH6EEJfhUwnUSdU6c6LVoquF68BfVkc443RouaNHfQj96foMgjznvru55Sv8VketSwqc8F8siXEzUG1f",
  "key40": "2JEXCe7hKe369XsnLbdsped3JwgE3QQ8ff36C6bF6CNaSuqvvST5o6ShPepq4MZ4Ax47LYHri3skrFjTzB6FRXnF"
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
