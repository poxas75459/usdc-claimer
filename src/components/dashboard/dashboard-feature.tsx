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
    "3nkpwpXRcT84hM2MG9c4iMHMdq9c3bLKPDb8cRRct7UrA9NgPxSeiPmGNH6qWpMnfrYKCCNgdLtN5pYQqSeA4xh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ra6UG2e8aG9ymfzcxYCVptvGAmm6gxxrBrPbmuMur2TFjHcGWBWnfCk3kLmZedKhN8Nq6tBU2HbcQfTGVDX7hVq",
  "key1": "MpEPCbApVRJBKzdfDPmpXV92Fig2fguT2BwJhjnf6uyZSTEURrNfaLay9fp89BR6rm4sxPEDJUswYgmkBbcrc46",
  "key2": "5DTUyE85MjNj9jLBywd5JVRQZhndPpWAw2Bf43arMwXBuFnXDCdwVivGK9mu1Sv5b8PLALbMG9rbtgh1sRJhEPLY",
  "key3": "4jjkyVAq666w1RB8rwtSBguu2s9FkmvbQFnMn6HusacfidH6KRFJJBdAu4sd4MnNGi3hrEsMjP1eBTpmjKDzpHVT",
  "key4": "62tk16EKpBDNLAxwS5vtPya2RSbxaZ9xfxfN9Z8LLv1eg5qxNAbwB43Txvdd1bkuuVoDex5ioEfS9cZ385s1ojVP",
  "key5": "5h5apf48p6fJ1AjofY6RSBjqpLDQ1Wr7Y9GZ7q5pDH7yYp4apXaZnaK5BGHCLo7ABqjRGy38phERLvku76fqpXgr",
  "key6": "48kpscCyJiibQbX16NQaP29fUKV5QUPdQLogbzjRN8ctK46YmihtGbc14Jz7qmY28tKXJc3rzvR7pz6ch8ps9tWL",
  "key7": "2dGb2Du51ZfKB7B5CXs5AqKsxy98kg54dQAoWSE7zB3X91BJMGXbAJ5J91DUBxvQtvm18n6bpTPvntag39oAy6SN",
  "key8": "2ney8cdaZS5ZEHzZfmBFL5Ef5fKUEnPJSuSxrtHtrvyrB6K1FD4tSRtVvTCDucRM5hGCpbU7xNu4BrXrdYTmn9o1",
  "key9": "2p8Ztxt8FVK1zte73CYMdhZJFvMBf6RzF4854Qa1fbfrXSNCjF21vUsimcbE5BWTGzf7QY7mm6MEpzUcdqyZBEWH",
  "key10": "35wfBSov25LzA5YTEynWExaqBtqAWxnVb2P9qUHf3hqy8GsrJSUM9trqQ3FqR8tUAUN4YaxpQyWvtyvsdugiABpY",
  "key11": "reJw93nNVL452WBfiosY86Dc8gqt1neNZEgHQa2H9FYhKSepjR2yaKGyRrmdhujMUxHmNxF1nybVGsLyCpFevPz",
  "key12": "4e89xTpagK4cH65gREhaje1urfSCEci3krxsBDz7gjnhL74z7oLwirwQnvfNVu4SStJhZKXTPQEJqvejcGnxtGaF",
  "key13": "X3io3H2XjRQVYw74jGAzKadmq9gwF3nMUcgVUWhDQ6MTkUYwZ9M8ojPHkUqVBYDzv1mtPSa6mXbotxdHn5F95hv",
  "key14": "3H7xZoGGvM3F1p2tyCXf6UdaB7LcesznypKmU4TtfFd2vVst1NcqKMWyPTLgTE7YNxxiVa86P76mGgS3Zd4hpq8F",
  "key15": "YU8FuHCD84HfdRGs7MLbV7MnknsHX1ginsHLcukPdqMWU1nwe292WH9ZaDfKpymDVBfYvrKVHoidBYfAfGsuzND",
  "key16": "4XhXWAFQke7jJ8wArU1PqgARshbskvKMiHEFMYgNwDLncfDaK6qRzYAYGpp8uerqb6qB7iu3fRrtMxxhyF1UaMCH",
  "key17": "2rCjxQs25wFxTBXQaqG5kRtrSkajLQxQxpXNCfeN8bR7H5VarkVKfuBAt7SjurXouaB4WxqEFrhwbYvWNjWD5oUG",
  "key18": "3RurjwFwMxLzqWw5HyAXS1zMy1DZJrudkySHA1nRCDMLeY2DHfxuAKfTGGsRcR1Eb7veF2H9SQg2VTCd1RFYAJGj",
  "key19": "3WjR5oc67mjW2NoiGCac9nESeBAm43gM8WqqjrjUbbBFQBrXCvsGVZJKFJ3zpAFmjVmau1aY1NjbfNByN5d7fSWD",
  "key20": "rRaqqKuzuEqJELQrj5bYYWr5oJMYf2ZPJTjKb5mBn7QYDVkyBKAQuoJ3pFmdfVEDZLNxPcYZUEuSNnYaPoLfqDp",
  "key21": "29ycFooSMd2baaBnk494Zu6qh6ErCbkzkwTekwtAWfqovpocAyZ5w2vnp1EKKuwKnYFfanj5ZugCYzUBxPK26HGV",
  "key22": "5vBcTGRbpg2TJtgi1yFbRRxNF9jkTVBALE2WC2VTTUx7TNz77iGTpVm3gjLDsS8BGo8ku8gdLAkM9tgiuE4tSNHc",
  "key23": "zSr17MzK28Mhk3gqRVh6YGQVTQUcoVHKn7moRCQ575aPdX1hEASbbNGoSoRjYAEf3ZKfXs7DgU5g7wnBZbKEJ3b",
  "key24": "53caLzaZe18kQJGmX7q55TvQ3D45oG65A4TQttJ9hZc9MPUCtF8pmJ5EiqcZZGEBGdZfeiHHoqdN16wN1H1oay8s",
  "key25": "532phoEFGXZHHvS8YovPzftryNjkbwFqc2ZVK9pJKKQtjnwTPtwtR6mhAtWfAAgefZRnqnD8KcK1KUQBS8KnYy49",
  "key26": "5b2FGQyFp7QU2248GFfseWy34uhDm1bQM7SfjKh9QgBjmHb1joabGHnD5ZPV8wcbUWN6sVURRgJiGG9kfTK6NjKH",
  "key27": "1xAJSmt92bSXnymLB68SBAhTQ5bddm7wV97e2xG4Vuoq65RHWCj8RRLPS1LH7MZvv8waQFSKzo7AGsUDzQuZB8a",
  "key28": "4tdjK6fX95p8CAbd9nZV7fJ5MgjSzhb1aJLNuCCWTihB9qMZjRjHZsSQKRMSAZyBUeca9KQvE6zHpBjpo1E8Es7o",
  "key29": "2oY3mEXyJ4hrpNXPMH4jQkc5T9fWqQLEZqte1Vs8NvcZGfXR8j5F73saV2CBEawpm7oy2Upc4GvAhFutxKi3TDuk",
  "key30": "5x1C3gPopB4HF4HhcbKXERgo8wzUubJDT9gP7vqiMAiumCEDUfkvThWKqggZL2kdJFQyi9rjp8mPjv9rsiKjgcLU",
  "key31": "HA4xKfMZw2jMN7z88KpQRjkKNHhRRXKR82c6V6TA3EN1vkhvSZGeHtDs6rpdmHb3oyjeGEUvzpf7DLaFygCz9JR",
  "key32": "41dsWATa41T3kWPNpGLypB55Ab6uM38fS28PuBbg9rkXyNmAh3jyok5aJwSDDQpu2g5Gi77ovwNQbqfiPAm2zMgE"
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
