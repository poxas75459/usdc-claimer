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
    "3ahkb3f4K2HPaWUkm4dKortve8BeZKQWd1LaYkAXDJ5BfomV256agxDdbrTRYA6Cn5SV7Z3ygr9Hhxt29mLXjiHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GLRyqMqUCdnCU6NyVPZXq6J35DdagwvrUYZnUGzBBUEjkXrKnwsFyyQ5DbTNdEHsWw4ijBwZsNRvh2x3XXPJ98C",
  "key1": "3FTd3BF2WwpTMTEZQV3gcBYtsLt8NtaHXA6ooh6pvkTCN3zgBBZwoXdmxJ1SbHa3AR2CypdrXxmfEYzrezPRoS5i",
  "key2": "2zmaHSwBxMBqFdQXCWKWrrWjJzePHmik8p2DWmF61EmJGGfYB5x899EoMyt7UConavGnJMt7xzBjJL8SPM1sujjM",
  "key3": "2sdy5CSiD9K7DynYbUVAgosXxUMbLevhsWyi6SfaubEevjyRQDkokFSmNaQYrh7Bh8eS64PKzXQkVxFvTfovedas",
  "key4": "511RWFA7FTRXhdmWgZMqbmkwa84BW8kXPFtRLiFLN3miGNgnPWPnWitdba5DtLNVJVYPqEHMnh5phmwSUVcW9Vg3",
  "key5": "5tUPaCBxVQatxjZCjM5GiRJSqAJFsDqxEX2WfuiaJBtzSso52V1fkUNAfFUPXP74xdkY9G2vHsDoquzLYcofg5b2",
  "key6": "3FWQ3t3DchAzbjucbg9MePfhfA8dR4vnjEiJCyVWMZ53xxp764qyRzYUZfMbe5wxKmyR9vCxfM2nNupH2T8AgT6p",
  "key7": "Fc6UfvEmjmjFpDLT4oBxYbMmYTqwVLsugoNHuuGPjiWq94B53k1F26HtqV2gixVvq9BXyve6nKxM4gCXPrduEaA",
  "key8": "2fBnYg5p8rvwNk6R82DVD8tjcYqrbZHCV7To69Ysgduo267TsGWapWQ1qgQ2bN2uz9sN6ddC6XysRk7ZykGQS2qe",
  "key9": "5QCQJfEEhWsrNEMzFYJ6S6QjT2aTSaM1AvgR2kVRa83T3BmboJs3EazCRiufVsggnv19yvtES4HdehjHnyVxvyhF",
  "key10": "5db944G8Rh6GoN5ncbFGReaUxek2yzVvKBBvJLfGWaSC69qRzkWhBsm2WA3Mw1G3Tid1jC1Q2gF3Q1cHV1jufxsr",
  "key11": "PAsQWLsfwtKUtRshLPBhLATqHs2wB3TiinQnsUCay4dvesWH1LCif4THdrrWHGdEdZNgD3ZvxztcFdGQZaKVJRb",
  "key12": "GweNM12czfNTRjeKa4tDpMah8iistJK3iajQHpJFd38Z8EL6FMj5HAaevxQ4H2YeUbp6WiMA7bjqRy3wuJRNGZe",
  "key13": "23HsCNobaT9vAkMSc21EAEoRYAAasFPnNyRniK7s1GsW773Wxh25dqAhDHcW8DJEA39159xX9ah2v42J2APEidiW",
  "key14": "3GCZDd1mNRwSL4Dnki2LVvcnxaBX7n56ifviqxYErH6CUgKoiQus6ohRRW1dQK9t3vh7Ns9RgWHFCQ9yLeAwuD1q",
  "key15": "ii4KF3ZE1vFHCmphhH6z7xDGRbRbu4M4r7nZByhyZo6qVqho1Epqr9Xe1aXTC2ZjN2qkoq3qhFa9D1fxGC1hCtc",
  "key16": "M74dWUrswLkVZq4LN9yLJL3VpQCUmpKxNBMbx7HEP9p28ZzYFEqYfFP19DrsLTHUvuv7azazCwn6JQ8ic4uHiEG",
  "key17": "2v7tcaEeuUAzD7Th9nfpiCP3hGpnmGmDqM7CrVrgtSxo5mBzRek8okPki7YYSecMvsjogRCrM6b4pdPZ6PhWCWeA",
  "key18": "5aKxyTmfRDwDYkQ5ieg6v6s2nTvHmhbvzS7zf9gDTwYB2icmffHKV77CLB1X9m9aPgdbSKFGZTGTCdhx3zazcnfG",
  "key19": "3PNWrGT88KuWb3wJ9g4DYrGyG1RjEAkn7CJVvuTiHwWLsMShU1ymg9fwEqfv2NwigS6Ypzg88C3hQLVPy9vQ3Rd1",
  "key20": "2CoKyzVnRVusDwBPxZtmLBRHWoBwB5rtxNiMT6gwcH3b43d3dL7unKFw9GEWZb1PufcsGbdox7tB9T5B86TLSc9Z",
  "key21": "5Es4kRTJknVZeL3EHtCmodgbNsc5bpnYFXawvBpB4VhS4P6hh5oN2DKyPoz7FvaX1BPTjC3zPXAWJepoZ4qhMdcj",
  "key22": "Hpen4CZSZ2HtBpo8oqZ7XGiHjbPcwFFnQGMYkKX9A8DsECbdhgZMKdWkphS45vSHeVLdPPmMqZqZWmCyCFco98r",
  "key23": "gWUg48QpRXuqchGSMTdGAi99R6hSuPfFL3diPvgTjYJZVsf7enohHSrp2xmbJC8U28omKXMT8nzRu626yRSKMTG",
  "key24": "oqaEHN5H1xjwjkJimKXwLB3h2TFVoGCSnpiSWXaZeHon1k2SfC2169WSjkgW8Lqo81cAG7cLXZ4nMNv6KcYt7pL",
  "key25": "5ZwR7K9CNSjSTUTLTzEwH99SEvmY2jnYtBjsZW4nZCw2viWUqABQxhZ2dr7iBugz1VZrL5YiwD19bHvh3hxL9GwU",
  "key26": "3aszqWGMKJTKeXguQMs84vCTi89W4gNcnr8kK1ottHwmDpxFHRoB5PGRboTDFXGnJZAua8debRmTE84zCBLK6XbZ",
  "key27": "4ztKn5JWVg9QJE9sFXkJhfBa7F3Px5bKi3nWZzECabm4TKdPqmotsRmSfTC1SYqQka3em86GNEYa75dP79vGbV46",
  "key28": "3RE4jioQBGMrF6nFDNTMhbgJN9j2WabfBZnHJXs1VLYipzhLJ9Wa6ypgjiZY5BEbuWD9BYe9KusY4ETjo7XMvGRT",
  "key29": "4GWLHupQ9MuPgChGnCBVAcKDjBrQ1A2E2ES6gLA8Na9eUPbNp66BiJRNtCf4bSyKfY8KCrdGdkgyvzqzQCi5RNRb",
  "key30": "4CqRU2u7VXiUh5WdUbj4z2ak81Z11zBFnjfUwwuB3xPMBgH9eMgQRbt8DdQ6ARGaA3eHTi98XkNN16jqKeEvnSLo",
  "key31": "5DVfCNrLm3umSEZidUnhxGCPPHfMbjj5fehihmHNpecZ6RhJuBxRdBHp9frnoE5Pt4Cd8EmK7X7sQeeqKEMumBFz",
  "key32": "2U48wKxUMqf8kyiDQ7CBiDsptnUDUUiAHXscTSSe4oJ7tknRSShDWtAJ2UFLSTAT1MWmQarz4mytdSmEdP39M7tM",
  "key33": "4WD8Bhgs2rYPKr5X9T4GbFxjyXg7SgRJnXgcJAq7hvg3Xud2LxgSFp9UnRdHxh1g9B95kbhCuHoxTXr7R7Wx7Hyo",
  "key34": "4No9vouT9c6eFspbjvomuh8C52j2VXhph4QWCDSjYZMLx3PajR46gTf6UFcJqBrX6gQVntag9GirK8bLbZMk4E3h",
  "key35": "4Lu4BHRXT2xs8bq2LkcAFCAdHCLEKGb79dtxmRXJJHjJkRw4CHxSoTefAk36dLi86QzLSrq5yJRB1tzWEQtTwvbE",
  "key36": "5jZvjcqMA8chqmb7iF81qMYCqZCmC21qfGNAA9qoqXkGJMUfExGB9Rv1A8cMaS731ZqYgmU99CZEoG7P3eNDcxL8",
  "key37": "3NsyCLLDaWjeEzoUkorWbNo5t4sX1kVsNcYcfsw4jMgjM17BHAJiGaRwvKf555Lp2sc1UiQDKGJ8MZhjvsUFEhFs"
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
