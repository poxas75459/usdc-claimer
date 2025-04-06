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
    "3craVbufj8gvMEFT3pkt1dfr23e23KCzLWCv2hxB4jbKnPGyBKZntezQj2qEeKqSCXQSMsZ7tEevfEgPEYh4n5WN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Uej5hKy7SN7npyhrpjsyWDXfjUpi5wSCznmnC8osAKBk5dqWpinrKh3FsHDZ1b8U3Y6UWaRBL4dDnJ6NQcFmtFQ",
  "key1": "2R1a4HbP19WB4hoGNZa7bVMyejugYdp4HWJmToFQsa9cy59LsDDbm8q98oN7M2ibNQaB9FybvCi8r4GXCyqt7SsA",
  "key2": "4vSuLkrzREqQxE3XRLsQW83ajuUsY9kW5ELLosPLUARX1rxLRjnPt3UQaUqDrxYvwMiDrt7yGBvF1mnYnHvutgfE",
  "key3": "4BUGwASUBrTZsJBL11qP9DQPjc8QSKmsu6LoQU9eMeR9M7wJUzEifx1D1H2q2JjYcy57Ftg9x9X9rr99zai8hvk1",
  "key4": "4H1ktzPheje1xsit9HK5Gspmn8GDphuaSThi5mjcJFSXLJ7MmPvc2h3wu7oCQsDqZ1sdvjCR3JrwG3pZuUL6TUXg",
  "key5": "63whU1duwNN26uCvDAyB2kxXxFhpD5y5MfaaGeAyV91WrdhkEBVb2ijA5raG6kFePaKYuCo4GTfeoP3k98x28bkX",
  "key6": "5qcRs6WHn6bcsoQ7FK9xZgVAwRojHbCQh1TJxz85Nr5Gaay8jffTukdTQQf8xQjoC5BY5Trru3Fe4rpjyNscPeAv",
  "key7": "25ZZWJhyFZbmceXRN29bLa5s8xMYJ5Sw87qNQAMk3VL6bHJCCvJCYoj7misf2P8HaytwcEwbk9frEpkAcJBVWdxR",
  "key8": "2vYUFzEfmhSzJQNFNJfjz5QVsJRSF5v1M7Jx38V9UghiDbk5KqWgBBBVvTYPjQuPrENe8CPZ7Cut4AsD3Mq5cao4",
  "key9": "3eDUDpyg6GVp6FewBYWS9WrqQN2PHkyunyHJ1vvTLpL1zpELuXMEiQ7TTFmP2AMQAXkxn8L15keZCZTr2hDLGMBq",
  "key10": "4BGp3QDojeFiZbNwSzjKshrkVMcLaANNybw7xEa7ZWNNJVrDoE9c6kVdQVQT2mrCWzdw72BctuJXtL3ox7RQQHdG",
  "key11": "2BP7recwE5tDrgBrvmAP4RoidFfwovQgzYznu2eg2rExA1MFH7Pb7QdrFxvvcSiC2jnoRGYwTkhdHs5J8T8T4eu5",
  "key12": "5csVjGRVuf75CrRxQWqsDEYDLp4T6bjMt3nDQowajKWN8PUQ7V77771A59vWUjaC2VfVbdWVb7TaXrXXxHUx6Ghn",
  "key13": "64KJgSPMWBC6Gof5wecjsFY2bsBPrkYXPmFjR6aihSWj2KKNRgst7KPz7zEq6tAHjwvSetFRmA1khHKSAsskzhv3",
  "key14": "5J3FXxGgRwvWGjmjotSTEhvMrVrqn3gzDjfKwHSa8YYs5GEUaHcBLvh5sE8vBiE6tUpCyBCwiW9oxLmbvzB28BfC",
  "key15": "41Sv5dp4VCgMAd2CRh6QCAwPYjY46w1BTsHMu96bkoX4JVq8swtqnM4Vixfv5AZUnf1MKfpUG54ioQH3nYEVwUdm",
  "key16": "53b6tNvMM5J4P3pViZwjBBnPVphAguZRhFLtnhKWVxGKV2MW5wryhtMoHCADmxR3HYi59bpQgrJJNw1LyCXBhUaG",
  "key17": "2A2hsKav4RuWQjQtZEULiwLXJJjkGRCD8RUAB2X9fvDPBMBUycaiB9kJbjy2HUdQ1rh495GL8KndJ36BGuRF1eAk",
  "key18": "4YkmQPtTmRU7mM2yaCJDi3Kg37DDJmMGuRnvbFARF9TTnLDwPqNzh573FRpYNPM5Z8L8KbMfZxq7cTQo4TfLaest",
  "key19": "2sbHqe99nb64wXUfx6qQXextvFeozm71nDQPC5g6bCcqSchPJNoqkFnNCiHdwgvLstPwo7W22CNBiDCvQyXn84s2",
  "key20": "4tYZ36yN6FwxtiomeGZjwfmqyVYdX4PSpmQd52HRx511umQ1EgohBpqx4WKAkGbZAL4SdC9fUxPqECe382Vu1TCj",
  "key21": "5rWWjWQxN3ThGFZMm6yVjBq3hsKSyTDwEXppXPUHmhP9DVseJmg72p5niSLZUTcCsBQYXhk7aNTPYK3M7vdyPTTR",
  "key22": "zCCcKzVL5pTTNHmvrjnCXA7b1sPTvFGHr7UzEiDeFstoboQgYNukBpjkj1GBCNcJLwryxd7CzHTTegEgor8BFvD",
  "key23": "dq35VD6r1kpjwzsR3698nrq2xkwzKfvhm5zRwkqiyhFRWBZnjZFc3GZkmEMNs8JvrREiDNzAsDAAoDarzgL9yJE",
  "key24": "3kqzDTcYDQFD6TQuQgTNy2cYVTsuD7nfQEAfdUU37rTzbectf21dr9e6r7uhYspriKH4NRf6Jmmyj97WYk5xCVaF",
  "key25": "5MvB4ap7v6DtQ1Ehg9CEjA6YZwoVhFhwguht8HRZ3W77tbmuUKJDKWTTgFBYQyAEo18oriTYoAUuQ8MuUyf8pFDJ",
  "key26": "5PRUmioLzK7Ayb2qXkwyRzzX7GhJAbTuS8AUD3mDMaDLNnFM1LEq2zqZyzTtr98wR9MWuiFFJ4CVavQfEwwirG8F",
  "key27": "4ZwKTvZqBbPXzhZhrLQzKHaW1Fhq9kKbhAGHfsHgW9VAGpomSiL93UFfNhoiXURd9bk6KxQF3HH2S5cLYVrBXxy6"
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
