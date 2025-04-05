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
    "4sqVp2cc2cE2WdTefeewuCLB2HzjR8E9soHRVvQpN19YNhzthFWth9sx4GbnZaBg5mLyx6bCDPibJFMu2yek6uxq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Js4oQ4Td6jQSURkKBZFk7Afn9o8Wbobht5LrU9VSbT86XkqB4q1LRzR7NFLuonRLpgoPr25Nqbyq3AxiDNXgvCS",
  "key1": "66EKq7kqgDhETVVoiodJmxJXzYQdaWHibmMyRD5N6RH61ZvhWoMw4MtStKP51qMySMCsu77hqjSqFCzNdCTsBFFX",
  "key2": "3Cjbf57ZgeLZmH38zZzGMH5WF8VFHkpV7GViDyGp3UF1Nec27HnNrk4RdqKuBJYmu6tYNYK5R4hUu8meUWgBHWws",
  "key3": "5nxviWaPsnVVvgagerDdFT8q5j55o4ZemD5dbKUaZRzHFj1JeGN5JnQcVMQdHET7pCn3uk14tXCZN8mcxmGrHH2W",
  "key4": "47HCBiw2UmFckbiu283TquCyXspwz3kvxEssi8sbUs9sE7dxbqzVTpbBA9mk9J789wkTwpL8TVuhynVfXBWhfuUf",
  "key5": "22veuL7UxVvcxVPbiZ2qv3sPv9X5ZoA7F9Jy1w7JkxwH9duWPZgrUx7GncD6mMwYCEWsD5HcREQTTJ1XZXTusNsK",
  "key6": "5RNYxf6aw3h5hJ6Y2fSHomnzHxnm5k2kPT4Cjw5jHJaDfdF38zsjL7wwZBvYz8CVwcJnEF8nSkTMtW5q5Db6r8EG",
  "key7": "zoiDvt9txhf5Kq5iFx2hugkMeoUfu15eYduFvUyR7tBBAe2QcZY1AogX7BPL1Jw2nuc6S8m4bYN5x7z77BgubxB",
  "key8": "53s9E1nJswaWT7qi3SsBecEiQJEqkKWYq1mrafzYG3FC6sZGJpd6Nz8ag7kcig7YfrrG5zjfnEnH5jn7UNSmhpob",
  "key9": "4XYwdjKfkTqhPiC7nKANSi4euqUMhrgcEVRxEyiqUMcMkGS5Kc97qSXSKiSy3UH9WxTBB46N6RhnHR4EbxnqrY9T",
  "key10": "22gzHn6cS8knPftxUDhmHoDNsXXUHrqN116jhXJmyyuXyHryUCPyPL4Y7hZrGJtXVcNZXCbyg7kPoRemsDTdPBpJ",
  "key11": "3mcKg6zVuAREFmnyqp7cZ9McP4MjuL6uJiy1B3AzupUqGV6rShZoPtWAP8Azd4R1oVonTQkP6JKD9S1Bw4UCSxTC",
  "key12": "52KdhaJF1LupxPvxk7XLxNBEMMXHHqZ1HmU9ZLuAEFpfSouX43qxB1KoqqyUM9NhTX9nVLVKDQZz7jKKsnVXPzjZ",
  "key13": "2rqejpSXom8HpE7o6cHrJwf1aasyY4GS3sayHeBnkaYEquxPSZNtVpbYEy4jikXs9Buzjp2bzMgTXntMHXwy9tXY",
  "key14": "53zpPaw4Ubh7PibDuP169eyBD9wyyqFzFqxUkbtjf3o7hQ8drj7faBXfbmHwwYv68LWeVjL4irFm9tMKS3CUtDd9",
  "key15": "iyStwzimLcVNje87chz61f2pPcG6PHAFxyYtVUWcworqgem6BkguN8nkLcT7ESFJC7TGNXY5r7r5rJ9SYL6AJSC",
  "key16": "58XshomGKt2JwxaeHJiW77qKebjJpQDVLR7AmwmupzsDTv11fXthxLtbAxCvRe866yda1u9FyBWnPzevSBWcNJDM",
  "key17": "43yc7wfy6dx1SrnTbn8ouCTU9AaUFdqP8gzRTq299PoSenDupxW9uQLbn7CaCsQdZ8Hz8dAcHQAC9fFjwDjWgYey",
  "key18": "5fvJcfsNsfrKQs9dDdf3VP7jvAyhjCTos6aLTCwy73hjBK16FuR8Mr6nwNEqGtyAYQ1KkdboL6bkC15Lpf2T79mB",
  "key19": "4BVa5pAaQx6vnf5Ke65t8PddpjcrK9Pt2ecQLPqXVTj74URipQCLMD97aQGdo5vZkv2w5Ng8HNKeP39RLrwwLKvA",
  "key20": "5YM5TUQiQVtzKAZgX4p7UzLeRB3JQ6NuowuNnLpjLkZaE9W5WrPxnuituhprT3QghCHsGkLoWZUMSCw72sqDXfpo",
  "key21": "2oL7R7MVCXhhdFPsS7CUnMRZxv5Fzz9ihPV4q9d2HrSGQD4EXsWVh9PQPe5tbF17PSmaa6CiamXWdxydhZfE9Bnm",
  "key22": "5AEmBfhJMJV6xskGqpTXKpMY9ErL397dxHcbEDJzBb1QLndjvaznvNzEUxbmYhnCSXd8QgE3QyepbGjTjxs3UVxk",
  "key23": "32uMH7pKrLTvEqZuURBbpKLXLdY2Lwb1iUdt3KSoJX7Kn5H3D3uPPUTSuPxePjgvcqTHy8uFus32YLQhLMe9AKU9",
  "key24": "e45PzCkm3WinNxe5EU4Ex4SEuAmaMLfti7EEvAYAiZ5m9UNKuUZ56RVasM2XtAQxzQhb5NuesZnewh4Vs8r969K",
  "key25": "64p5Sazyzuswze1vxWQm2TvRTEyxujBbSGgBiLDYMNHe8S1ESLpAZ1PCTbnf3wk9PF5k39xCEXWrfs2wv5iJZr6x",
  "key26": "YkPpAzFYA8m3yUFqfFwh9irGqHrECZQq3ussesGMjuteSkDXGuhdfJyzG2oFheaye8PBLCBqZ4SgkbEczYiVa7h",
  "key27": "9Umj24ppYSsgbLgcAiNCqJnHDkRKHgp8yTStyAZmveoZTKFqqXkVX3RVBNiB8ETQjdM2orjTXBkzmgTfZGiaoPW",
  "key28": "j54n2NWyf1yJ6w7teWErCju95VNFbdfKwLwyWcm6xN5Pmxqp7g8F39VjkkSDK1f6FBZSs7UhVi146rd5nzDBhh1",
  "key29": "38CBXM4Yf7TK1yRpz9DDPBj79P6Q71xkvCBUEt5YdcaQLtuxXqJwmGUC6FcaAWaowPu5sFY1Crau1odsurXqY7MB",
  "key30": "3LVXjaRECyyTSAoM54xmg2sNQFwhsmQg3UwV5rR8cguPPqvFfeAu3hXB54vc4fqzCyHSCQtjxRZ9i9GGWjkuEiKa",
  "key31": "4UNFKcUAZBuVVHt7hQs6i4x2zDmNdBBr6rnTqu5nKCH7fBgRpJcCYxPZCvMxR9zjZcdS2L7ZhCd1coWiDzC21p4M"
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
