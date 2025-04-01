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
    "3iR8EhyWTnkHSLAHp2mvFRDnU4aqJcWXy7oDd8trmtpGQ7pr6ZHy8eZ7LFCkX1pcJtkh9Bkw2iojKLQ7J7yqWEnC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nXE95Lwe8jhzwEpq1FhWsjL1ZL6SS3JmJV8g5aMkSwogGNFrtX3QPnBjDgYSFyy1Mp8qBz1pYu3htSJUewTJ3nT",
  "key1": "2etFUS9MEHxrRbN1EM7N8dELJJ4MwCJo7uSyefuDKRm7YyKh8ASmCom3kcBCZMyELAHk2BKrUdfG9SV3JAZ7zmxu",
  "key2": "3wN2Wc4kMcgLSTB9K7YqTmTcsRrpW1uhH5XhoTnfLeH58qEt25FCzEQGuVC2BHrjRebz1X7wYXazos87cpxvuAn2",
  "key3": "2vThTeYuqy1YimHJTmZRgY5oKRTpk8AjhasHDAru9PUNW4j4kE1jFMJZ7qgcQiFTx7UdoEMut55ttZzLptm38uow",
  "key4": "3yhLhKXJfdfJJJJtaYDiAFjqPswYkLeYL4mHz9Mc7jeZ9zqUrk1hDT3WhC3z2gMnK2yUhh6hFWLb9xu64o8WrtiQ",
  "key5": "KBPQxTMbJw4HhKwoCtsG5Uhb4tJo1MuNr6DeHmgaBvzMwvb8XVJ4zmoDZ8B9CSnzK6Z7BAnP1QVHstW2D69MR9m",
  "key6": "4DCZgpNuvw9L596uGCs8pk5oGbpx1iF4cLqvRBziMZmcdPQ7eTSq17Am29q6MqWgUiiJJu92EmSDJwihX2xejbmE",
  "key7": "5s21JXT7fwCVyGjb3EtjwmAEX8zKEv7F4f75Y1cw48CFwD99QUDgythWvTXUyM7X9D51UyZUhYHzsp7s7uLuWnut",
  "key8": "2PhdDCybBahMQwvPiR12jp4opVFX8jVif3a72qKiu1suNRExtEYcMWxuVogvvkAj2STFdyLZnd2UrCdkFuZwFycf",
  "key9": "3UyiYbHnipiMFhKZwZt33x9bfByV3nCkAwutB9zKKzT7Ky3bv1p4nP2AXRq1DfLXKfPbzcYrroPGip47kqUaR83k",
  "key10": "3YtLfP7SmRrNSezAJbdEQJgHTsqCLrE28iJ7KenTnL2Bz5rhUjz93fSqofgihYoq48NgrMmv2bJUt6XmrJFcF3Qj",
  "key11": "3wHkKTddf9dqyvnDaN4aGcKWfryiitcW5WvnoNvDqd36Ae1zwLp23yGTSzhF8ruFqxo4MrTD4VCJZAXt7y8t3VNK",
  "key12": "3bY56er36n4H6YJ2xukgvZCE23jvAqfJNtfSvQQo9Zwxp4cfm1SnHYUoWwr3JbRPmrQmUCsuMyKvVfMadgEV7Rb7",
  "key13": "3awkz6SbWQ1HZxQmyCCE371W3VZG2hbS5oKxmsNCj6XgZmG2zs8eDEmRadV3u7Jc8rQefK4avstnoJ75RMTSH9t",
  "key14": "5kgZ5Z2ka5PgieAipQvSYhzWJ6jR6Zv9v5uiMXr4foRjQn4EpTAqhceUB9gYiMuoDHk7RZT94BEwiuGrXD6kPEY9",
  "key15": "4F3XyXvbL1zcA8h4LbDRtL5P4XVRhPgy4ET2sj1McscCKw4ut3t4kWYVRrCKwF38DLbxo7fYLhG4A89LgwGesGh6",
  "key16": "3yqMiFYFmsHnXjKLvPDN7TULiMKycvK1LQ1SyauZRxj1uZ5FXGdmHMfh6n1kpijBrkWnWtYkQkn1Bwriwjvcuh9n",
  "key17": "5faLXgWENUydweD9736SJTci3iumFkkEqs3vW5XqkZ358A5VHbBLvRRCpM1gvV3xfVAFtD8M2pw6KBypT97W6tvB",
  "key18": "3aQhpPF96yiq8CGCsiECydZv3HCx17sm6hUAThPTuPSqZwFCP1pSun4zryN146DpdKxteNxeJfADXzi98aSAPEUW",
  "key19": "42Ki2NPfT8sceMMcbZaAug78eexqq1ppXKzHkztFrhothJBNgRBpqUpwgWjRZRQ2AksNJyFihWcppg4XqtUiBZaB",
  "key20": "44A7twGqLSUFLJ1fPNPj5hhHiZvAhhCUmjy4nsmkd4suXuQ6TW4m129hzVLebKWMQc2nqBHQYnqHZ6T93f2PKp9F",
  "key21": "5j1g4DU5AWfwe9BA6XXuUbpny6W38TdVukuenzN7viRTbL1ZMVS1zZ9V1fawhHzLpdRMSCxvrJi98EbFwAbdQ6ek",
  "key22": "4kVLNwdSHPDfUUwdSPSKPigtPtvQpfKkfNk5mDJmG2LpSTahV1vRWp5udCRjPtHDvXdjSwqjrtkpVuRn689MJPKT",
  "key23": "23thqD945igaArxw4fHFkW5eCogZWmoBLfKvnHZUN3VAR3eTh6Eej9fV7NymbecySFZsZgQf1kMC9T9AT8jtoeCb",
  "key24": "4xmNB2XELRnGrMr8B2aZdWZ9qUwJEZ7ybjdcxM1dqqfLtMoHaJMfkRSF5UqdyDFCn2FeJ85qXzErvQfTfKhkJVGT",
  "key25": "5JCw7BfeBMySaN59F5dzwvZXfcEFBzt2YhXMGn6JxQwGG6hpuUH1ZiX4ciEs9QDcdTRuw3YPz5HfHpiAEkPzvz2a",
  "key26": "2NyhXpudUkXRJUBnCK4HH8E84pWBuJHNAbHdvR86zdWvsc65Q3qRmCt58J8LRrYHqq2WkpiFoggho8WY5UssPfT4",
  "key27": "5LcopbL1JjLAEbuHxuYRr6AkBTsThKwGnX8W4njL981KAkct4pgXuNYYf5GwGVUvquhyiHiZCwcRrofnLEsDHeuJ",
  "key28": "1iAoUnsCPecnybQDYdn4GFbzncdWbyhfQcVWJ4zc8Ne9uTKanbA6q37q9bS9Fuh7RRmMRXwc94vWZPva9TGb6KP",
  "key29": "3hZ4suon3nWfuGJqfeox2Q9RiVRphPZW49zJJEhUiuRQ6Ly6pKGb1SZHW2yTB8g5AJaAmec8Bne4xFwt3h3M771f",
  "key30": "42DcFKmQK5mifPViZ9XG7RY9TT6sNgKBrPUAwxhYpB3Da7m4SaNCzGnZzkjVZ62vKdAsmHDmtCXh5Ebqj69mZUau",
  "key31": "3x7eHNMmjtKTKtXhcFXu1jK3ttSQ3YgbCSp3XgeUZmBq7Cc7j88cV7KmtqVqZSyUyK9iBYn9chSTvSPssqbx8psM",
  "key32": "5gJvJUVSQHyGGbBq1HUjyV9S7YUid6Fm5i7vWMJLE2CBrcVxivG3gTYuDcAh2DKAZkW8yahGa5Av1SsS8RzeFzJA",
  "key33": "2qvfxkwEQbW2QyVUSgamWge4myqCay2Lv6M9EpNQc3eURLcNEsDSDvV7ikH186BTAxTs8hsCDoFzCKngZJXJZWps"
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
