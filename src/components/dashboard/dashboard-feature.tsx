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
    "2dYFkaaEPoQq4nvjoBFsoPWA1XM6XkA5bY2XYof53ByGrHFogNvJNUMHZSCE66r7CGazNc9Ag92oZXTfKZFTDm1s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4m2venuKCjkHUDkL6CLwngWrcTuEt3msKtDVYFhqevG1tP7ZVZzWSHRnv9DELodVxwSXWfj1MeWKLXvJouae3wM8",
  "key1": "4Pp5GzrjL6ubJ4rPr83fwJmCwpv41e6rJTZuGqtk4EjYqj4HenaQe3dJZA7fFpaMyAthGCw7DXA7ULKKVTQTvDxS",
  "key2": "58zGXRnBR7GmFohrhcEmyUSZHbwrDxgcjXdFfYVFmyK1R42v1WWTL9deVwBKeG9Xm4NTv8pd9cu3X2DxME6JqVPM",
  "key3": "3kzNFNfuWiYCJSWjaLKoEkyTG76RqQmEwbB5DDt5THyxDLHmC1FLxMnxepc2Mt8PP1MfJtXsjRhdPfsu3htyLi4X",
  "key4": "4dJXvGMGA9rKUS2ugSvdHJd1qjuhiVQ5ZLFYoBE9Q71Fdp8YcEe4j2bEh8rDmZVP8k8JpwYMrJnhNhiwioMdnnrK",
  "key5": "hq2N88tvLEszi8m6T9Sk6NMp9t1AoAgMypGjFsmRLNuyH8CJGEXE12TbsTo67ReW77TtrRrnpGgHgXLYG8wVyfV",
  "key6": "2zrveUHYYzoCYwC1rnFUkD8cLfE1hQ4Qop7LnYMuAF9CB7514tvSKBYKWj49pgHmcW8BtaPKEd8TcgFvWPYdB6pS",
  "key7": "4csyTm1HqMXXj3CoHgidqjzJAHqM6fwbcs4jG96kpstHpaRZAm5sRwZfAcERsHcjMrcY36CGnCD9QYhJ8nv14roE",
  "key8": "5pGt8KiFyacVh7igmts5hqX6iofTbRwARyJMQbvhG7dKbQtSrwHc6yJD1znLNE8RSVa98p58AjkBzDkgruiAHsZZ",
  "key9": "21pJF7L76kCnNBoc5XCkbxaSDNURwLXJZ4TTLwjg91Nwsqc2UkcaaNfwz7PuTyyvcddMQ6JoHvgtdDiDJELs12wt",
  "key10": "61ZXBfPswrbpK3CAUV84F6URr7mSDbFKfNjfpVkadpgtwRirKzGKeMsg6duXPM42j8Ph62hA3xbqwzNBbEuwXBwW",
  "key11": "zWYR5fHMUmkTqNzSij4prG9NM2q2GJ4edPZ2nnSC2rBcbSqD4oXq4j9fycdJddtd1SqndUdk24CupeVJA6qxRGY",
  "key12": "3uRfeNjemeWFsTcApJQNcUBHre63kVjFBfMcwpCFrztke3bzDrEmeTsnx9NHu36Hcj3qt9mQkGaPhxkcdsSJvkok",
  "key13": "2o1sgJRZ33c1adkddvi9dWEDsX6ZcENrgo3wVyuGr2fcjgXBtxxGmuL5B369t1AfMRPDBW9ziCXHKaPALinGQEXc",
  "key14": "42SxZo6WQYn4Nay2eW1sc77nxQbh5mFbBTBdV2Qj36GHvy7TWxGsm5Hod8bmHCf2EYjHg2h96TpLzsWvdAMJVGqD",
  "key15": "ahJJkL5NmhQnApqRBQmZRLU8xsN7brbF9aprMxYUNtxoipjxApNS8Mbafeuyh8EVDGZhL3a6ETmYXfp5Vap6cSg",
  "key16": "3P7LsCArHx17X95CkV3Wa5B137XTppRpxsnDmt7YUmAYxNdBhEAngZAogJYJPheHBCMQ87dAQhkxzYdRYxHjDZmf",
  "key17": "s8AZtHGScTrjSwDcHJV97cJvHDG4eQZ3BxrwM38PNouTaKpkmKHKcMBVKEvwHWo5qqTjs65EZ9q9zWNDJXaHEoj",
  "key18": "4nYyCUgvvtLCvTn3os9wkj47HR372jE7sUZqWytxZnYVitmMLLPsfgzEBva1wCQt87rgC4QdXmrQr9DamifDLexd",
  "key19": "4nHCmLu6zSuoTMTntLHfgkULzBH463nYyqQAZzi83Sh7yLZkFZPNpuiGS2C8PigDSpbcHzLUgxDSj67ytVtRngWY",
  "key20": "5yzfXpa5JbzMqo2PH7CtewYPqcnw4cpww6Go9YoT3csdqeYvytSvELGQ3ZZnEMUXRBB5iRuSYzRvSoavXa8nbmoP",
  "key21": "oDXm5LCr9QdFpiDpFxvVB9hHLTU6m5zEiaDf4idTxZ73XdEMrQFyfeG3FEY7t1UFSemk7ccnY8V2x4e4FRaSi26",
  "key22": "4Qmnst7K9Qc6vUnVVJUb3pZ6kJhMeXLE4cCH9MMgdtAbDwG9EMbbhRCKtiKLnQWXfaNRS6fV1V19ESWciawBVPH",
  "key23": "6Du9S6pvqkvaSxhFNurVsoemieCoLPKU3cR7JbTSWs8H8r7qRqJGhqiHnscLs5iHU5q9toi3ptnuKMoVDTBTjAN",
  "key24": "VZ2VD9NFEQDFr13yNs97pZQpyoxHmmq4XrHzRPrxMWMwzNQuY72UQDFXegNttvmwje1jHYP94kbh5oD5QgPpg7b",
  "key25": "4E2vdoi1Ue2Q5zhCQH54UH9wPHmcAyCBcJfvdLhFp5EMfwmHFVSk6EA4kUDVBMKc9ATA1kAi8awfsCxQ4XLCgyTs",
  "key26": "3eCoejxH3PP6TQen421qLjC6ECHNictkNgydNiTTBU2M9KQEXc3HzGxcj1GczobkMZQtJSMDEcrjRXS3NMqxqACf",
  "key27": "3rZH2w8aPuYrjWHt75optvbjTxLT5sHuxFBs1hQc8XNNRDW3p9Qw5b4HfMhk6nSYPozVWJ6onjEkys7GccCrpZPW",
  "key28": "5hDhtNSesFxAUwMJX14ztsTU5kGNgseRRsFRmapSJpcyhtTwLET1QjE385ahg6J8SThz8SBuMf2bqMhFAjAfG7jv",
  "key29": "3wSCB25SpTrZcx8GRRNTcJFjk59ngq63fvVVqrwC7h8PfMJwf57CHfT4tgidtYcd9kQUZh94EQH3hDbDMD7NJZ28",
  "key30": "3422GzjsQE8atqMpvR9x3NWq9sqyrtCVKUytFbLEowNrPC1FK9CgJfhgh4ZnNvNCmTqsuxV9YkjvAqvhMB9yy29M",
  "key31": "5mNoLMpTCFWXoCGnPcgxk5PKpEm2vK8cy15aoJ1Mdem1kcFT7femcohtEhSrLW5EZhsRUC6fCJsRGPycGTFssRqg",
  "key32": "2HhqsY8qMW4c7DDX2WXPXRLt2xzJFMpj3Q1MWwSGqdm3JDr8tmUjNxvhKRYtHZmNYFjMzci1bQ3YqHmxAp4pMW1G",
  "key33": "22hP9QwPv84NMDi9qQ9UcStpe4YeywKbaNHmpKS4nrqrQxXWvd5nEymyPuF5rfZUPzaqAMMEkGxJhKATrpdSjfAr",
  "key34": "3nMXGd83R5cugibf6eAyJoX3w1ywdibXJdMwiNVW7NcizhUHe9kFQ7fsyScwW19uT4iNnWN3t9JnerdCMqCRZah9",
  "key35": "4wWFXRSdH8WZL7xZU9Qh1KRuQXrzHrMEcZ8yBJyXmiMrqNzZFu6jPouT4GvazM93wfJ7sZNBBL5RFzaqbi5JsoQL",
  "key36": "5pLxTXMgRnTuv2AHPP21hjqxN5BWUHepEvDKwgbNpSXTmYAzQ58tj3qGdJyoAAKKwE1tXGUXSs5XBVcsMCD8wz4r",
  "key37": "2w4DfMRJgyZjipA5RfGd9kyNMSxr1KmMffha7Fi5ktY99NbjFTEPUhNK78UXkKZKwCESy4pdKDpX7tH78tSD1SYw",
  "key38": "ByQHmoAV6msmiXTHqdcwksU3UbnekPeoeH923iQVJHyYgC156PCkx3MhRibc4fmZfmYBTHFuGMfvmUNqq2Mdxgy",
  "key39": "2XmppoPnzrJsbL8CBCutHXU86ESsRCFZeVWqvKzmCSEDURz3tSsYjJz4n4ZfpCNhgW9vefDkiWwkPQLoFTdybk9o",
  "key40": "Dtfi7EWJDKyvnHEnvcTVqZL8GVpQMF7PP6AWU2Bp5o2Ne8dZJ4Jc3DwHVefgSUQxaamTfc2NPWzebYe3365yTrX",
  "key41": "P9xzfBVoPPwEP41aisVwSihDSGPEk1T6sfTPJrb6LojPZ42n6iowqgQBwSH9PCsHGT68Z3uZx611NbQq6aF3TBx"
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
