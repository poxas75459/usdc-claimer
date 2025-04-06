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
    "3tgiE4Wa4rH6ASBF1Qv96x78QpxipURMHo4ctJpeuSyiEfc8MJoJwCt5rBkdi5eqxvsVWLafTLErac34JSDXs79x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q1ZbTaZvBJ3tQwdXz9QWkvicLAjsyf2xx1RXRnA95tSSi7BHJ84nGZqSnt1jzrK5Yhmta4oUfYZLi2BPbVn6hbn",
  "key1": "48Nz58PLHnrbDqkv9CgvVZPAa2wxj5GWNRq8c24UwArYRmEiNC7iwhy4cfr7jxaUz1jH6qArdb8Rb9ybPaC5FTgS",
  "key2": "29g3iam3cByQ5J4ZZRH2oknKQN91DcSqB7K2ULUbURZpqh9gZw21B8UmVoJTg4KxUcAhsRRefhEdPXgfcrUXtKq1",
  "key3": "5wJNgxecv7LgjqfQsqVfC68ZrM2gtxo4MRkjLdXfY8yEG5drZ4DhS7RWUA8xdWMAtwkwJwcNWCBANqxkBkgmRKzd",
  "key4": "G9wGEwepzaqWwprXs2Fr1WTbUYHLyda26m7YcYQYB8oecFcDsNnRCQvhF878egdMCA9YrWerBDaxaZa6iQsnV7v",
  "key5": "2B8rfdtU7hv2HFtN5kQxK9k8XPM2rAoLc13UeFGx1phyCEutjwWJC1Fw4JJEBtQG94e1vm2D6keGRqk7Z5U6p9cL",
  "key6": "3LTxHVLgvTivUZSBfRNWBVKKmN1bBRVBvuqHFxqsQ1XefhxW2apaoYXtG7dZEQJPij38F4gWyZfMe1daR9Jei1bd",
  "key7": "2fXujL9AFz1f4hrn31kg91ZDM7K71uHqowk2XPfe1hf1ZWXMhNhUayMhnJ56tbhiEG5ydgCcq6ZvEHUYKD1Ex5Ev",
  "key8": "2zyCQ7Dmi2cFyuTqZvEWH6133EAPepfW5vZHaCJQDRFEsiYUNCnnueVpSwnmqw9sUaGa1B2J6vBZLtqdnpkTPM4A",
  "key9": "5rCFYata5SzbxRkc3G84hJdNHUinAM3FswAWvTpCUof6V4XVWLi8heHHvuibmqbCYmkiU31V6CDCaCXVtg2Cwjtt",
  "key10": "2xD9hJoZinmecTHEyhbKsxnLAJghauPTsi1cq95Kc5AgdCzsLshW8hZnprNiG78oVP7gKjd3EiX4RbzazJdKHbb4",
  "key11": "4H9qpsR88AQKxW27S9KM39ozEcvodW8pgQmWTEXGFx8MHS28LdXrpLgCpPjYBJnEdcdpoFwdg7CPf3iBLXXevdTE",
  "key12": "4fNhfsjV3WKwzsZaZTWTXtfLtPdYdhodF3tCvp63rkhgzX5YdCrp4cwSegiTGUEieWdPboRRrTfrHPM7s8zUyR3Q",
  "key13": "463oqGKpc2S9HsKK7UKX8pA8jY3NPxob6NKkfP9bdJwwVCxn6SU71yu8Byp9VGgj7MBnS7urxzuLPwjpqAzHHMb4",
  "key14": "2LFjtnMZyeMBfP6KQ4zdrxpAUpB7M8eTYb2WFQ8m4qxtU13B9pMpRorPK9uqeCFLw3syk1y8nx55H2PtvbPq4RmM",
  "key15": "3TJH5uTvkaWLVennK8oRoxHFjHdjZt38L95iLZaygS47RRAvH7fDXyiyVwvFHwRndnQK4nHKAP5tZFA8eHtcCuMb",
  "key16": "2gZ4NUrcGGdEpGCRBeYhfmPtZ3oYv8xPM5vnJc4wTTuCkA3JTCy91oKfAVdfKc3NkqeSot9e9BtuFPeRCDH48Fwp",
  "key17": "5wahyQgapGKbZ95xFHKAbjcoF2rmaKzSipk1nna7dBxD5NfNWS5tD6ywHfQfeDScXWKbdoqSym8fHoLxL5cPhYUK",
  "key18": "2mXLGuDBp6HvCKVzHbGWES1kjrEYvUKnHnsEgDLgZWESuREuxmyg1cDSz4gqyAd9SBiaiNR9YQoMV4i19uQYpJ6o",
  "key19": "3KwRcMc26EM8yRCDU3JvxtcS82ZQSEejBuus32oYVKYD5AzwUsQ3vpmXDWcAcQQQGL49srL5HFwdLeMP7daHMKyQ",
  "key20": "4FKvMxijfBSGRaDY1pfKALJ2GPsN4jEDsw8qoXKfHqWi6HXhPRMvmDoHzCxJTEHroj3BmYGd8MWbhkgwFm416jc1",
  "key21": "Nt3bwMBY4x5x6ZDd3Fnb4k13pTKcVCznv2jkShqxCsGTzyaL4kRKNZx1w2gf7vtJ47ybNYPye6hB3SE6tXkthgr",
  "key22": "5XwuadG4z38mpCg778wfUQugS8ESn8F4FWh696ZoB9XTh293i9EkVUEz4seNRgu3eiNmPxxENt5gCuvjeaZhsxqx",
  "key23": "4ifyK9199SupzKgfbNSbiqDHCuNd19KXi3fXnE1QLY4Ae4qseqwLyvK5FMFgwf3d2nisSoUSMHzdamihcr8qyCCX",
  "key24": "DXFHAu4eo5NRtg6veAb8Yn9C43FcBxf8yp4ZESHv99687KNVLP2b3owKmXcmHCwoFCfZG8vpSXovPuHA68argLe",
  "key25": "4nrGoLtFkChdaUjiRWCzCBN8i6Ad9kEQ1XJjvBUjWRRonWBJ1ZMe3aZDJ8jAxyV8v7CJ9EByoLfYMUeWjAgsbQML",
  "key26": "23GAeKAp9QUybLdtcUQe8ffVxN81Pt8hdM5uG5dGHHhZmuPaTvFPjgL1wZthoQKjrPLaUDcLsQ6cVjEdWroAKaXk",
  "key27": "2jKDWWh2VWZ9ryWm6BceHT7DfG1Cfu5g6bSyR9uAYCKK2pJ4SVzofAvG4wnwDhFnXDHYBYEuKmS8e7TihewgdqVf",
  "key28": "3ips3a3Y2x6MZS5BZxwjCsBTuicZ8M9gnD5uQMna1giMUJKpFXHh2zdFPDgzjGYoQUT3QxZbUFs7ZC1KB6LHxCHE",
  "key29": "2iWNtPmqZVzCFoHaTzLnyZNBmeKMepV3jbyivZvsD1MT9hMJaMmgtyo5t4vsHhg7qSjmSSthBvjB2EiSDW9dwtjB",
  "key30": "xtv5VL77xYkca9Vg1UYqTS7G3CMtqZP3BVN9Q5Euut9UnHuNcoWWo1iVZ3MvTCckpb5eBuKnkdhaqhNzpuW4sER",
  "key31": "39BWJgxnFJhyA81AejHfyeqHtun7iysnrWKSr7cu19XXjFBWYiwzzbR9KncJ6v5L1gwSV1gD6rffiYQshKSuE4v2",
  "key32": "3Wu273qVvQaJcJuU5VWEkyXSy5NWDEGNybsdYnjDKHdgHEsYLnxRfxD2tZUW4WYw518Tr7M1Cud8gsL2YtDgnrLY",
  "key33": "2RB6D2y4i8WMZ3ZNb6jKVo4cb4zea9yw1rPTjtQJGUUcPy3a9v9a2WZMMrJxK47EVAc5V2ajyDzSqm46LTMSXJhe",
  "key34": "8QtHePUsjEysh4azrfHieyzEk3Rwt6SV3Nhkzjqf2wnGRFTUwsvVWwZuWneTqegGFuNjheZTrZ4jRsRVxiNau4K",
  "key35": "5ZnmDp2D4EndcDgaT2DryXqcg2g7XnUzFoLSAQ7D4hjmvDUUbXrF8UFKuqmgbcVwyr3UFBaLVCBYcBmV9mCPmV7T",
  "key36": "BcQw2ifvCVBy6NFtKfNSK2mrSsShfUfA2srsgjpJpr7tcs1cp6Wjkj9sWDw4ykZTcQ6MiwmSPrZu3deZyoCbgJS",
  "key37": "PcpTYYn3ntUQa6tWSH1Bdx2Jx59Jzq2aiJBoNnmFzBudJZo2M7RVatntNdu7WhDa5mD1S9KTzEh3xXU68nb2QwL",
  "key38": "5nAspK61nvxsSTfgfHVXvZukPgwrX38Q2AVYQoNETitsBBjq4SGRP2a62kK3djW2RjmK7z1jsSHMnfvG2QnKo89Y",
  "key39": "3asnNdAiDPH1ZbHMis1LJxTUQTr7Jx4snXJhH8tC281W21SbKJLshZmQ9cp1vgoGYXMMCsGNvmHE8bLSYPdLmkqr",
  "key40": "5YVs53aCJMWSjcxNrM6iETyMzeF7XUpiCEKTJJayN1VFx6Z7FnHf2LJdN4ktvfKkbPrAHfcNTKYmVXdoJGhk8ddc",
  "key41": "3XDMYuCymvuGEjxn8HB1ScZiKn6jeaTzYg7NCDpNMKP3e1rBVV7JWF2QG8dPkNt4bU96BD3zGYSDbQo9cRuyjdpr"
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
