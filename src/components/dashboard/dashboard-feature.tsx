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
    "63xTGQa6zK6t6he6fER1yxjfuQuXUwakajuX7Yrt1mhodzFhsimK6yq7UJre6rGrR5aRCBc7MbxJEA4aRSy3kKdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ndxpmWHk8cBmGX2RNrXr4AxygahS3Zd7XWEddYyi1V6vR73SRmZDejekwB32bctCpMiYNEvtJyubJs9vrghfuyE",
  "key1": "3NEcZrgSQSh178EUqUoNyPbx1zbCqrsHuV2cjw1X2dkzkGUHmzvvWoUfNEpRFQczojW53g48ZmG8JY8o9WKu9h7h",
  "key2": "2oJLoRuozfJMtLHUKtCGinuuu9k33bbnAKnSAGHPAPizhQbC97f4qfhHEXT8YBm2Fi43kt9WnEKpwLVNTuUQUGwt",
  "key3": "TnMSDb3GkcZP2EhnbqLZ7MWYPWMtqZ62ci3Vnj8PMtVPVLtyLxrvZohbtTWj1duAy3cALnpZqjXJGEuLAQWP7C8",
  "key4": "SZWpGYbciGT5GZ3jjp2Rr64xrnMGcUSZ4VFMZNeMAPf37b7xQescyYah9ULmX1nNNCBwghkBVq4VVR8QGvmynfK",
  "key5": "4wcLvbgMCKqemLysDkRoREpXsMmQMhSyoMVM6ZFwQ5ettn1URrb8BV4qi1oHduzdMdkjRjxAXFuzjr93WdpqnAvK",
  "key6": "fYJxBZ8CeSUyeBSfqf56oVP1c3JDvZQnG9KUvdeZhktg1t5gKP5ogACpyi4TBY7oYkkog17pBtai1MzcFr6bB8x",
  "key7": "2dmNDSEpHnYUuNGyLDY9wQ8W733z1z1GQP8HtsuYjXywwNxzoabdWoHsgMcVhjdhSXRq4qhCv5TWLMtJtH1rrKvF",
  "key8": "3UqVEW2E4Nv6AvkAG3bimv6MmJiqjgg6vE47BgCo6uJ8vY5mt19wb38evJpQGHAUPWzChxRt2VLg36LfhvUAP1pm",
  "key9": "NCdhW2Br24wsduT9mRuMXzKQfn7qQSt2mckxzb2G8PqS6dUvCDjxmcs2VCWPUcuCQB2JfmeeyWMWdFHniKFfyKG",
  "key10": "UPQpNvBfGxgyAjp1DyfwTk2kZx2F7GkZvmm6tDhcTqnzREJHF7EQSM57R9XbXTwVQQ5kweFniPzBmE9LiTnsyz4",
  "key11": "3t8ng4pRoLtHR7YAXxk9PmhbHAiypft8YYiodpCsVds8YhxfvoWSMyv3ZkiE7LJmKfv1G4Uv7Ntnh54fWqrhHGKr",
  "key12": "hbvmGcmdLuRanWvms2qwr6y4cgai43gxeCX7nhab2zyw38fK33FAsv17Y7AfvDra8NpVv1frDfWvCwTudJ9Ybq1",
  "key13": "2oZCKynsM5neUAaGgUWuBvNEtb4Y1YeeNYwQuJEcA5br64MgGxpaVF4yHPcDNvpgMZCLJeGoKRUcKLAs39wqsPyg",
  "key14": "2Peuth8EfTmQTQy6XHT5fWUESEg3wBwgXiJysKM1BszqjmEUoDh1fprct6bnfTU5vZSjVkeN5Yhe6QNCNYNySG1A",
  "key15": "4CuL7fuwY39K4NWEVzCyjkaU5EeEAYmq7gVLWyvQvRTDa5JNuL7gzg9Yuod74kmv8ukBPEmLsf8Lm1kdWypK2kBs",
  "key16": "4S9PEdaPsuwimD21hJuVCQBTuBuhd4b2RNz2L17mQKPWunxaamnGsvZeYCbfqBZjB7PutrDdhvt1v5t1jaFNaTg1",
  "key17": "3wPXhe4mvyk7sibVEsLiuJGDddJBRDi8wGkUPExyS1LVVZV7xorkKb6QjzcE73rgVvvhbBSbTJT4WAGfrRpmNbn9",
  "key18": "3RMHifPU4oBVbeHMA1R18M1TxWHyBvMQ7ymMmaQ4gmm9GPiUSKsckUatdzM7pBMqejfRhhwUqUF7bpw4NQeMX7sP",
  "key19": "5eRSQDPM7fpdKcmKdufo2hiWbC7iW5FbVbButZm1srtbWw4YRu77EaJXTp8xD5xAwiuJQR3Eujki5q2xRzEmY4nx",
  "key20": "2fQFP4Y1gTJrhzEN95aDzwFLfZkozV5U2GW2naiEf6gpNiiNKxj9r5F5ZL4UooUHNvCsQRHfLiRdf5Ua5sJKnho2",
  "key21": "5erJwXsGHLsFstWt5EdHjqqF23gvLF9qRs43bDegQ7B2GPDeLQNHhpGgVvupYRDoD4AvxeXskRJKvHwftba8peAG",
  "key22": "5ziVyyYSPo7jRUHmZAGGdMNHTwc8TLTfa8Dvw2r138nLaJXRieVcrakdb8cqNGi6GiWfwtW6ektdj5jW3nmmyYR5",
  "key23": "3PGKsbagfmNFQkM6AH3TcomSsnQhk9KNFmK2H5RF2ZsDzjh3XUCif3zzwkDJMnkX5gBFib28hcZE9Xzmj8rCwEiq",
  "key24": "5CMyTrvAn3QMw9CdGnowCd9L4Q3UzcTb8gUgmPrN1BzgqLVj7crsH1VGu6cQ7UhfBnqUqwHMJzfaLMTDrNZxKpeC",
  "key25": "277QReAEvEv9SWASgVuffi4tcStKArfnEFNQ7QWsWXCbdMBu5iFbhSh4DyVHQCjNuQtiB9QCC7QXNiruwYRsFsHE",
  "key26": "4GvkfAd5NzoCbCcPB3zaCkuXPUoamfEKrdsZyvfFR3WiG4juhSGwybAaC7qezsREt4YWpmJCuxi6FCMABzC97aUp",
  "key27": "5SjNu6MYYjxghQ7oCXT6pTi7CmpcY4fz53EU8uEz2rEqeh66TMCdmkECSxef8eTw7hLMwjrJoAFC6iLBuxUfHriZ",
  "key28": "5V5j7Vi73wa8Qhc1axNrDHDtuZcv4zg8nQyjtput55tzVA7YXa4zxRCMVTTTYnr9wa55wDhrtGnxppoWHWk3pTTn",
  "key29": "39HsBNiKfKw8oGydQdtLkFUAKWDvD3Tbsc7odkKsKaJXkbR1oxLc14mAwKhkb1fBDPZBCPdrFaoyEE889dVMUT1H"
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
