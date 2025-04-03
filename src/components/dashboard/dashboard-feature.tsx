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
    "41qCkb15d4jMWNfSjdMbc2aD8w6FoAqosyJF3KsfDQTDPixgcM79YoM58174uUt81qHRDHb9vdjg9XMAph98gSnH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BtsomTtWAcH5UkG87bVE5TRceQFAQkMj2U91jjahjC79KG4iMaWAVf2vNSbdYnCgip3xDbYTBz8BCRe5ZWzvfHx",
  "key1": "31N3y5TynVACtgqwHQzNxjKqiLyokLSo5jrLQXjSaPL5B6npp24Vusg7hfd9qv62pdQ7vUgow7sv3kCMDvm9aYQk",
  "key2": "4jzm2TdNMdX9q6JZgRx9R2vpGp123gd4oD2VF5MU3XdtPaqh7QGggTtxxTzEJhKCCnBSqMbANoHXJoSW3KxtaFKP",
  "key3": "4uN9NHjFZqXkmbyX94468tCXPmDxCVwqrKzsRU4zvbJQcH4WRarQycSVcaJ6R9CcetGAFYGcWXgzcTbrbqEuQV91",
  "key4": "5u6WUL9YaHH8q5Qu9F8FR4JnEcuPXLZpdi9SzPMr7xCt4FAgL4ZxS5Tc3mQH97RtaZ5GtJQTTk7mykr99vuZgYyw",
  "key5": "2VxTJTYqKhmuLzsApTsAscoTmKMZt3vQkysvg3PFisdujfNnCmBCoiVfgrvW33ZBVTXcZCQ45FuCZNcFBgdQ1nmg",
  "key6": "34KVu7DUehHDAb3yp5hYRfd1X7reGjpmUiPdcXfxjXbpMoDzUHPpT2YDAk7x1DY652eHmectPitEytcBvyGfnM3W",
  "key7": "3NP65Y9WhnX8v1tUUJ3hGnPWxZCDE3sv37UaHiiu98tS8KM5T2M1GACDaDiUAR7FEpo4k58jiCq7ALWWkphmNVjV",
  "key8": "4XYgTdWNkKNusf9ievdacBJuwGucgsoe4uDxXTHpLUQ5eQeYZNDYqvkdvtYUSapBU6xnXPdj2nAtePxW7sLUsaTT",
  "key9": "RWrqmzYszB8WF2MBCrE1kUePKiB45HALVAh5BFF4fE7ZvguMYhBxRN1msxffcfvzCQkEXiLYfHFoEsofGLR9Bqz",
  "key10": "3ABieFTkRv9arUnxzvrAxAyPpwuQTFPaynD5vtKPcrH8yEkaJkd8AxUQaRJFab8dSqVUS6Xh975Zw7rthcCCT8j1",
  "key11": "2LsteekoQ8A2urXTywKNqYqzgH28gR6JYeWEFbSE8wX1mbzXkzf3ZvCMsMenSwvfqRqeQ6bHpCu4zEGBDFEYtxBq",
  "key12": "3Gqoa4wNrT5YrhwtE7dBqgjhZF7ve6SvuyR1usWZckKz3bN4CRQo7AvmyShjfRiNSzkeDHfLhJd6kSgBdSgtiuMG",
  "key13": "uy9URjFQjkZgtAcab6gdj5A3jRCPzS83CfCH8UyqphvvM6ynoPKMhJUthAHyx2yYAgfbbwyXwqe92Vnj7scsdQz",
  "key14": "5UXm7oT7kRUHSioyJ5tsagoWhqCDhsbbF6u3fg6EV8W6PHCJgjRFAGgogL2nraLcJ1KQRnr1DjGWCtPfgE7GVruA",
  "key15": "4vjAwvtxJTXp3mQqxp13XBydoxURXK5tjCYPJTdVZ1wLHqtRTwDefKsFViBbfpT7Xifm9gmi8hrSs5xcHyBKWSBC",
  "key16": "ut6gjAFcQHUASQP1Uzk7W7Vw9jsHAZkab1iqUy5buHmSiwZMqy4E3kMnjEvEsBTFxuCPcqUybJxRgGR3E8kbAZw",
  "key17": "4eHfeV1FYyaTJCgQDGYyTyVZQtBeSc4ho7JeqreL23etiW9XiTpdYTzr8zJJyCg5LCKJnkevgMcqE4g82o7XHTag",
  "key18": "StGUC6BrsSQzakVn7iP9rYH8ugwhdz2qnCoTxms5jj8mhRswV3BxNrk4sYm9FV3tkoqMCvmqipNHfHemmuxi1Tt",
  "key19": "Ai2o1BVKBvqUFAgEe6G3bhboWfbJNfxSNP17ADWBKqun7gEKZ5qw8HavbxXwvHdouvyxZpp1kuuyd1cRw5BzPMg",
  "key20": "22toJWJSYwFmosJ2sDS9CVHqYpjcJBzfkqrNjD2zaMXQeEXJHVz5kKP8tEWUYG7ku7JiSgXHGHEhAZbevhTKG4J3",
  "key21": "4DFTHqQFjMf9RypCU77bY7ozk1s7QXrojSo1bXtN3pLcE3WVvnXCJVN7vVG1UkZ82sqoSg6beDxxGgxBKd4txHWs",
  "key22": "V4Wiuuugca1FS61Rv8Cbhg3vkEq3HpJULCsSbkEch3udNHLnjvnWP5toTkV5wJuL3oYJpkwzcDgm2Fvr2zxNTTT",
  "key23": "3jQpiE1jxG1ynDEiDrM2fQUHx7tRBXFUHjgrxDiHfw1ixmWf6T9xpGgRnzPrtrk9S9BKyuV7gHoizjbciBMQtNfA",
  "key24": "2pWH33PD37QLCqdY6Zc9MWoCR2AKTwoMLo8xDCTPCEwt7Q65k9VwMXd2fa1u57hqzYvZckY5kAiNnnW8Z1498yzx",
  "key25": "3NF42bYWSCm5EDBx7SYHVhDmjjB4hkAdbunmuhyjZcDc34JgZgYnSSsQPeukdbPJwomwWRiiBPV5BoweLA2mGS7h",
  "key26": "36M3cpRnseXkNqnwFYwTc1ijL1113QTeg6WNUxLGTssoTQN5G3kz9rhQCaZg9r9PP4G9behE3pEs8KsoBXpyEi6L",
  "key27": "3oVbQHr5KSVWqRvGypdh93VKwwP5NYDUgR66YiGiHeyDbzU1VEvy9YnBaoh1BT9TA7rV3ZhfVmwZXEhHhPwcK4hb",
  "key28": "2pHeDerAwmcMDCVGLbANFPzrbhTaszNe2dLjMucCHPzHmLapjHeW884QnUmNF6KSiJes3j7k4nYzPUQFXpqjRfA",
  "key29": "2gNrWTHi4Yb9iZYpb2QBkRUg8L7Cs77aTv2hVX1Eq5PFs8kyrKBYtWeRDA7iq357VMzxCrd9PjXxHXkSKgrJvaFv"
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
