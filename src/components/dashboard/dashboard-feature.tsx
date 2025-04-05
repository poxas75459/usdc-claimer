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
    "58thAtznDRfnBd2cUZ5JSpSQN3BeAx6nWPNMahMBqgkYRUPTZ2XDQs8sjCtcKvTUN9xMjh8YRogmbsapoJk1RnFg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33opyN7c8Hq1h1hyv3YR1uNJGPfiov4gefS58EBJx2M58hPSDTETanA3s4J8oAWQmhdok2zEUeyc9DBHnfZqJU4h",
  "key1": "5L9omAbdmJMB1VfjgkB7WbE5WucHU1675rEwnGewRBKijUTsuTNigWpBoKURPXvCEqaBdGVn6tivhFwCZbTgAH3g",
  "key2": "5XYNCEEi3JK65U1KNgj6X4AstLQv4cWfshsu9B9vFCgpY1WNsMzDhzjp7ABKyx2YW7YH9rWsc6pW8h18s7hJQ3Rx",
  "key3": "2ngttiJtW6gwoBmZCAqNWqUr2e4RBm4Ua2r6w1GYSTnKrgfRsTwnFUzdaaqmKQqsKMVpMaXMkxekN1ZxREUokn5S",
  "key4": "4Fswr9tcBHBNBK3WDSeag1MshvSjRw4cD7n7rQgLbPeaKBm8Nu6Xzk5aiFvWAHDF6nFKBK4o4r5rhvUXdJTyyT9Q",
  "key5": "2XEby4ESCH8d53fvt6nnJ1yK8jBAwZ4owcyVg7RQb6egv8S9NmN67cxZJuhzwq2qeyc4Fn6YsVdPy8vLFRoDXy3R",
  "key6": "2isNgmjPChquo3Bf1VxgDzqzuLcDfUyo3srVw9betjSWPpcX3RvBrrhH2D6mjpfkmG63XYts3NsmetskpvddZw4p",
  "key7": "3AUCsHSDx2buJNcvHrbxvCtyBNAJAdaD8NfW8QzsTa4ax9SDahKEXFP3Kx1RJeJCiJo4NTLP4MKUzuP1edpj3HoF",
  "key8": "4GeDdzknHZTih2CQd1jwn6PdGskYAco8GWGY4d2ZhmDDysKxFfZe8n7vYCkXRkmaS1CXf5mNxegYE9Q3DHxFBcg9",
  "key9": "sNSbUZT4586pdzAfjEoDTPix3E1HpLvzKumKHG3TvNrH81FHH4dzLKdQSUBQ1LpK1yfVb1gAtJc5DfncEMVS9v6",
  "key10": "2NDZTmHDzHN61Qoc4HRH4QoiZpnWb4aiQqBA6YRQzW8mCidbkFSAv9CmyBMqo4EgeQwsLhSSUcrSyCHJ5GhAw23p",
  "key11": "4Gd194g3kjXN6WL6qksYEd994DaBemwQTUqqrVjchAdjjrgetjFZ3tKVvS25ozW4qaTjxo2fRrmRkYyiQQ1nV26P",
  "key12": "5ueBGnL9xctMhwbBSftWwtTru2i1vfthNvVckKFQLf7PUwQCpTmQSjw1omHxYGuqeu18aihyE8USuvmVPWFzPzaU",
  "key13": "341NY3hL2PSjLnpc31Jp6nRsYLiceekAwZJ41wCBxcGeyWfFVMAuq84aEXpMajk6FraDzsoqduUHLzW4h4LFmGeg",
  "key14": "31kj2CMCf15BjHCLvWgqwWNPrWkLzwbSff2h4uZjQhzUxGGXJK4H182WnGxXhte52BfHqKS4mPWRstETiQi3ZvfV",
  "key15": "2KohmFwpxJASVewbhqHf4g2GWUj4JML85K8tcvV5Qc5dCcuy3xdSpbwFqPcRXNkdxgZ57B1HcrV5LHwqBimuNmPC",
  "key16": "5gceJDJBWrtAtWkeYCiAJzfMLACU3wiBZGJjMBD1JSezHmy863hcb3uZhmZ2SSLZ5JKoyZexv8QgcyDqjhLD9zdW",
  "key17": "3G5NSXEM8FLrQQVCv2c2NLPSRAMpVVAu3RFtz14CpGVYquV5rw3xtAcATNfN6yngMRUGNsGduoSDq5P33qWEEDA6",
  "key18": "xFXUwyhKdwQZGyFyEU4CZKtFxn2Y8wWDF9Bz1vVugXp26hTK4r2URz3m6gMGZ8bvsyMnJKGM8z1UhpzeSzZCPr6",
  "key19": "3cSKPGBpx6YeBBjFcMDwrdMhavyePmjgMFzXQDP22KRbpxHcS6BV1XX3yEy4jk9apo4YuKdt3gew9sGFMTXZsjcT",
  "key20": "5JEP3a8pG3cRHhCCzDhLcQqAr9SLrpfvpsRDdA3g54DhHFZxSzWRw7J6Ro3hfcitLhDuskiSdFs6yj6B4zYz9AYf",
  "key21": "5LwanT68gnuHj5DMj3dyNt8HmF7HCF3pJRgFPbcmV738i3q95V98bjJRVkvHLKAkdhHkeFDZenKPyijys6Hd78t8",
  "key22": "5ypVCLgFypf5BwSh7AxLgt4fQ1HeUsvz1MWHiihHcmDpgwoqaiwtC24vTxuvs51KrKyqCqsoKPp1wwQ3cdGn62Jp",
  "key23": "3N8UbWjQeLPkNgc7WKLAt7rarxNnYg5sKcarfvEBH83NBxMThPC3koHGfJPMgN6xUDxj7wSmwintzTtxvbCxG4hd",
  "key24": "V5tn7j17B7HNSmQq1VmrMuyVAxcz2Q8ZFHM3u9jw3f1bEzBajS36sDb5iPNpqhgNMaVqYSb4C1ZuZQVdrL4HVvK",
  "key25": "2HDU9m6r8trUah1AjR885yeRo8bbsuHiGY2rtKnrX2N52GSRcLWXDQGG42w2ZDCezBXvJjGr7MWuqiUvv2wdgdGs",
  "key26": "2KTrL7a8umDD35LAbhaqJputfxVh99fFn33wLrG3AiVE1XZJHaCfmdEopfsQv63UX62dLbTXHL9qho66N6Whwue8"
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
