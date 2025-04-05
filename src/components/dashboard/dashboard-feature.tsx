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
    "4hfsy7dTjd7ppXVuuBitEJW2d4ajt3JmeCfS5zJLLkbr6c1Ekeivx2sLoqCFb9js3C1vU1xMfyfDrzzmZ1YwwD1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aXRcTHb1813kzApxwrKiaLFHAmSueXMEmJLSNU6oA97dxtJ3ZdenSbQPPvFkeCcDVGjP2maqpKsbEeGsHcSEgcL",
  "key1": "21jKWSYqYzDd45rnNykJ8Yvo8PaUysAPc2um4NxZ3unS2vxt2edcoLwcJKSTwwv5jhkzJW8MikWHqRbuh16eknC6",
  "key2": "4BumtXERJQpfBfkEsBw3uYB5Gie9uL8Ftp775TAKdwDCKjy3hxD1sQXEf21U6M6ie5Qh8hgMvqxm5MvM4m5rFS7C",
  "key3": "33X198sfrnaBZ2TqZdJRUNvB3MhwYcfuH3QQfJtvvXNupac29JDGRbc4XaHgZihB4CQUZrzv4TVKUFeuTPsNe14L",
  "key4": "5Y2Bgke978goiNz4KqUDbcAg8Z7zZ1rwtMGa4ko2rNMruJ7yjzwwc8g6DqJkSjEfMaqdhpwf47fzZjDGQeXUt8c4",
  "key5": "5JBN7PmztUBaefjxuLdk1yfJ3M4U9MuzZxrs3p78gVVWwUBHSuiWnFKGtJWFVdbUPbgDuxRRed2MLD2LwroPNe5Q",
  "key6": "5NRWjBXihWuUcGx17Yu4QhLiNGHm6VM8gvzjiKAtp5jLdqnnXavyU5UUdP9TmXPc2nKwh2F5vLdYhz5WgBDBAY5x",
  "key7": "2VfeGmvxKaStFJZtUE3riwRBkqJMjpu2mFomo9JxYgW7oq2sKeaCegdJQC9vFDx66brxvzeafoTVcqjV6YkqTn7K",
  "key8": "3MTMKD3GL7PAdM1LMZXgpwSKhifskEv5daLxEsimwHs3NgTm2buwjfXZbQ2ZymU7s2Lkv5fNnrohjvefLJ972AH",
  "key9": "2BkU92cPa9P5UQGeXwG58fiZhKL7ycC6bQGgositHAZeHEpqdVFBMHTM9XhJvcNnRCpXnEQKTcewabRnEfcxpwP4",
  "key10": "4XRwM6qUedYnAiRhXpwqAovHSZrq8e58sv6ebF3zburnXL4n2k91PwzfSnNMRGfgYqpnQcUWKWkRU1QNfqS6M4a1",
  "key11": "2qrkKtPUZcd2ewiWutz8T6uooj1zRyQqttHFXCVrtr4eMX1cvPQyTVX7MSoRfdJTUCYiPsNCDy9ugzZi9njkZdq3",
  "key12": "5PgFypvZDwhS7yhhkG1rZxT6v9Gs3gxzeuoKcVEXcv6mhkUaB6GwkWcZf76Kpg32fnNUFD1RKBeJ6fed7Uhtc4ms",
  "key13": "5GxCGUbdErFa5V4PjNAqPWThWhDnapo9jdax129pdKpqLyCrjwLypyj6c3rC2g7LUWL6FmBLCiBVdi8fufSv9CQp",
  "key14": "3z1Ro9xPPt965Y6oaReXU1gBRYgGY33VV6vc5Gp9CGGhBuMp1YuSmywQCBEaqEmieX9XfAH1fK7wYL3bDG3mGhgT",
  "key15": "4iSAExF6X6H8HdWoXUVkx25tx3P6zoDB9f1M2Xx2XgQvQZVwd92Qt7gekVp16Lu3sjCATHjsmexU5rrJ85v6qg7i",
  "key16": "5P6WwCNd9hC5skS4YpRtNfrfrjZnuuqqzJMdFr9FGtBqsFn7gT1vstmXzV2w2pgKH7UXDcPumYhezohhkdpui7eJ",
  "key17": "3k7vbLZjG9oWP5NjYCkfZbenxvFLbwRqMMMShVj78dn8Bi3tTZSopd84xk9RoAy2jAUY5c3443NgYPSMDF3qAsuv",
  "key18": "3yVkFCvKCPitCtVZNBBS3aq3MuiSPimx9UPNvpXpC6pc7CZ41U3piZutbsuBWQuXchxjwytshMmAmGmwBt6n2q29",
  "key19": "4yUtxCVmKJCpmmp1HJZ48umHFkTdTsWFyLrhP7jRocfskfCpABYxPYSuydxXJ6C2oPZjsZaBe3Sged8bTPZ9Qr3m",
  "key20": "oKTNktoeTfgFnqWfKN1NRec3AezJ3V1mvnxWc77caymRrKQ7TvEBh2ju26wa27wNSepiBYfB1sckVHrdQs6MTum",
  "key21": "4Z9c9wZnvxBBkRz49pxmiweTBefkUNrDq8DbFBvUSuGz5si45unMitGoPvxEf46mFpxzCib8BrAB3VzY3m3cupkg",
  "key22": "2K4w3YDFXdJr3X6dB43zNTTVXg9mNpZcA7AA9kRXr8aFSJy9BCS2tvJxX9MUvBSZLs9tnothbQBVT12kBK8P9e4i",
  "key23": "36SwEPNqSqEzWaZLb4k1ctLhKDAKpGvtzb9HQAMAEntvijgRhgaKKiTBtb3wMGVHq9w65dAkgzaZMvqh5hbqGiaQ",
  "key24": "yAS4RUX16iD3wx2bu99HmKDMwn4bagiFggsiM3FxWTNcf9dXFWSPgMfdAZ8XBYZRxbBADpNq382Mmx3saqv2PGT",
  "key25": "3JtpjUuXmqAy4GYJHi3jkkWnoer1NMRDNBQQL9kqb8mbBPNAqeqfsFSrzcVkEDGq3MMYbfxHfjxQFxwb4mcLnkEP",
  "key26": "2MZ738CpvNJaJ3bQKCaFfMBufZBieM1cwDikiKqmESvThhPFsDSfTS6bNCuUswyQsgQk465KuUuV6c8sG3T6Wwi9",
  "key27": "2uEjy7vh2H6a1ctQ1boEPo8FwYndDJuy7DLd4pLEbtwRmeE5qGEz98YBEh5ECU8qkN9Z6o7Rhb7AV5qNFfkimbov",
  "key28": "2xWB7Edfp7RK9nrfyrWG4FqGkqwvD7t8jdPjwRV4xUyhhAkTp96nhVdXPss5K3xHRW5eemCvpKCBQ9Pb2442VcgT",
  "key29": "4VCvNwbxSRCTeeiBoSrVgLkDc9tn1qjns99f1Gg2ugcQHz1QE1bwiwNSATu7zQGv6Jq2pAwPsCFwLqz9eK3HjA67",
  "key30": "36k9ifb61M42bSNNPjLxzrrwVLd1RJiG319aeW37nuL83nAWe2cUiGK443LFuCfwzeHB65Q2Ehc3C6NemwkPpaJh",
  "key31": "4Kfr8LxS5kSfF8w3mzKJFqzEdUu9aouFougAf2eMuq4uSbnzYJcVrLM9GKBTfW6Qq7qEcatmFinDCJpa2FyygJVC",
  "key32": "4LxRPgqhnKhjbQmxygi8Uiq2CpSf7GmexZv5TY66YinDme4zVZpXm7XNHekc3ZzZfvdfwmbc8jTrCetcD2cYZCmi",
  "key33": "4wC7zVw1qRiKCZzoWJ7KJNVKs3Ps9wjNdpKhTAQNAjRp8n27woYVrwRdWRdi8kenXXcSLWHtfwNqXAvhSeRtbfzw",
  "key34": "5tEEPUmZ2Anoo1bHWMR5TU9DNeZHP7CxvHEGWSCWitfh1Qrk2T1xFKZ85Bo5AnZXvc5Uo7mV9a6gZKv2d3NrvNV6",
  "key35": "3Mo7oTtP7xizM1ewgyQ1uRMsmYZdLP5wzRVt95ALCc6YpUnaxpkE7bcMG2puMyeDYjxXGHvTkNMaXvmwu8U9Aqxx",
  "key36": "mWoytcBCjusL6ursxRz34vqqUhgAdx4TRCHCSzUpkyo7ro3gBVzoq7Xj8iNgYr5F1NLye8hYVAENyyyC2zYbSMe",
  "key37": "3avbsaa8Gw6S1fVap3F6RdLeAdpMAbT47sbsP5Z1dNyWknhfPTm9JE2cLo7tAjfQwrqzYGrmynGqPwYi5Lk2coHR",
  "key38": "2pJQgesH3MVah5KYKCLo2zKdHDLBeyBwP9v6qFktGCa5kmzDN9FjhwuV3yRprogcNBUf6xVSPKnMjRphH1N2a8tQ",
  "key39": "J8f61kojq1h83sia3WEACxznh6Gxava2e3HQ8PFaoLPKVREYxvKf8iutEtyrqn7zrvBFxEFxAyY7RQVpTFnhNoh",
  "key40": "3dx9GSbovbEwfyEBNyBm4kMWcfGvEm2fsfKNKJKn3RftRksgQbJRjL1pqJ9XTUpv121ksBpasVPw3jf2sNHGERKt"
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
