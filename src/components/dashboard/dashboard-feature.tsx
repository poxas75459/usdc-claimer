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
    "2RTSQnA9i1pUTH2GNoVedFfrb7NkfRkgZjRHK9SDpJAt92JMAVPkbxwq3j8bZChTmEkyG6faiNyrMKeCqCRGUu3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nASXE49GBjZboX9Gg4V1B3TS3jDvvZxJSzu4bT98rLyzAAzrg7839av5cmX3shfthkFRUqae5eXZduW7UhkQoh7",
  "key1": "3ZamD7NEzQwRExBu8UvxmmSWojm9z5FXH36zxAtoKgXiqEZB3wEzEWuqca13YW2G213QroVxtTQS3h6n3YiB84VT",
  "key2": "2b818cfAWEm3UybaLypRSLachSDPFXicjc3c9ni8MSqK8FSJZHdBvJGxehzAF7hQBjxHXWtxDoZ3tBr5SknNgvNf",
  "key3": "2tdAnJ18KGHNYz9broZD1RPdb8dRjBECwgz2kCJApshvaqRGPaz3H7B8KLe92rVTAu4Prj9Gir9R9hxaH17RkJk9",
  "key4": "goijxp1AviAw1ucbeM9ucwnb1VcT4CU25dKmCh2CtfeQNdAiMaD9LLJ5GdPEPPEKLrBcbX7655sTcpxbf9BZxWJ",
  "key5": "4GuKnYZ18ndAfthEmvdasosSinhPcVDxhUkif9WLd5tfBABe8VNeS2EmSunqfhcgcBRJxBctpxa9cGMJ5hgUAtD9",
  "key6": "2Kj8kVqtxsPQMC2ns8EfnsFcQk1xRYGJoxj6zMzpG9VzZWLpREdmxkUhXWDcpRpnqnKwvCYm6eYw997kFrYydPVa",
  "key7": "4ekxJU5znWFMFkYUPr6YUWVofAihqffvvkiERxeP7E8NdSR4cUB1CA91wEKPCyfgXK5aksX75mMTzkmDBYu9KSLm",
  "key8": "5c1NyC8D335AZhNYEe6KXtaKtay3kaSnbofZHcV8YXjEWMf9zL59Mus1sMoiTucRy1eb87v2H1Ab1HvvSAaEDSp3",
  "key9": "4cGFtBFLRsYBrdiQGxMhf56J3mZfyuZXFbGwLNVXKKgb89m4VweRJ2RaA5opJX6f79X4NXe2uX5Tpv9xHYsFRzgA",
  "key10": "sxuAP4t2cfsMYwPNgKrDGJeSeP1tf8y4gz8wDVZfwTCt2rMgUvRtkNctNMDVSf69E6YdZ19aPwBuuxDvLZ5Zn4x",
  "key11": "47LQC7yaf2iytp21D8FknD5a584XGZwyZf5e5vxnq93ecEvU5TsAqfdh4cdaiJv1DKyK6vx1TjB5u4Lf1rthLby4",
  "key12": "3WtrykHHLQdT5L8vxpqVhqU2bQ2cnQi2ieQfWJJSsG9Fer8kvmWGx9496jg7sncGWjjic2LwnFtsGgDVbxiQx6w9",
  "key13": "4Zm4GScAFVtGs7V28ikK74h7aJU3cvrv4vTkXhLjoQcPb9BRGMUp3sGHrTtDr2W8rzioNtwMJP6ecBoRZtTPYMbb",
  "key14": "2wyu3XC53mDuZNKzw9uGhqZYFJqorAysLHQ4jLzp1amc1ykZsApk1vCXauM27CN54zhdM53fjKVo5JgFgDejDNCU",
  "key15": "4tGQckqvbfpgwkbNYPnMorEmEZcXZcG1NrQLVRBb6c5K8vctC5XkDr4mHoR32maCAX3fHALqiSjiDQiMuwwVvD2r",
  "key16": "3w4V1nRNfVBpe9rEZdsrthYiJjvLwoYPE85G8D1PBNbkPnMua35NquJm5GapuJRPhiycPmJHHFfAZnttsV9hscrn",
  "key17": "22i9BBqfpAc4jQqBLFQ87DWYEWLAbsJLxeyNM7Yb2xKh7sVwxVaP5VUhvKRhqqbVbnDcG8DFBhA2fQus5xv7VLZE",
  "key18": "prKs7ThNwUA1wSfMNHoAcYVHHPLTd2h65oXH56UniZwifdKnvJPZZUaNmcyEgHSbLbaUAfaKT3itVgGCx2fzdg9",
  "key19": "2Eh2XUxjT3oQTit9pG3HAbAbzN2NDu6E2Cc5jHt9XC67kRDikJBS7cqeuVKTm8NpwDCJz2J2J2trFjC8kVm6ymia",
  "key20": "3nwyfZRDmdZYA5AzxjiKW4Uj9mHgkakCNiPRzSUbBpYBJiEUuQ9CfyPWazavMKm42yobJ9c66scneMdduNEXe77i",
  "key21": "3dqcrgRU4RmpPh3ATYzCzesmkN2iURU8rqy2W7MgDy2HoUqw5JtPNFCDp6GYHj2TJSnLt6N5eBatjEzH7AAVKy2a",
  "key22": "4wor8av2porHRhDZQFA8j1P5F3rAN5Ur2EqdjoHaG9Ss8aZw1HKvz3f2qmumivyYs83USPKUkh8L18JT9RcpUJJs",
  "key23": "436fKjyf4cLySsLS5M1gURCmvebzTLM9mcMXNYzGPhMzYamQYbvuaQdpWEWzFQeWuJ7phUhCELJobfHwUJmvgHv9",
  "key24": "35fgN36EruboBMQSzRMXGxaESuUjv42XC2hqFKLDspjCHZj6SbzHAJZ6WRcjKPM16dshm9ZimtnLhGimBcbTQMrP",
  "key25": "4hF1oif6d3BnLGV9YFPXNFtrEKMyLcsMKDXvffo3YcvXcmEAJ7kBn9Eh6aUhhzDjzcWp1hAwJFY2nmDpwzcTpSUT",
  "key26": "5eyLCV6gkr54hxDND5jE4rrccJy1mNJgbQzDtsm7zcGWKahkjnFjLN3tMx3AtuirT33cT7TDxuGCDTavXDH6ue4S"
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
