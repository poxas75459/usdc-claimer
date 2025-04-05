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
    "5SxyDWZMvnAs5Tv9t125vWm9aDigprHjfuZB369zTLjMcKAquRfMdEZsxkabmPy9yLxUJovbnjcPVLEwGd99d9y4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B13WHyxNxaGBRibf8pnFDWZRgtsGCz7LfZNpqas36tQJZtvjPgcfRgWPd78GRkBWqpWJcLCACyn5NWUyFAutjNR",
  "key1": "wWCpXycGwz1AG4aTHshf83N6zMNxRgyAW9CL1gbBocwMT4pcDKhUuZNYSiKaVjDx7p3n7b6y5oihARbyevdm87T",
  "key2": "2b4po66YWFwjKCPM5V8GredM1MCJk5uu5THUEW5TwfevCSnu2JE6gXs3gXJ9aLsMyqfsRtbtSJ8B7rMqjAEdWDfs",
  "key3": "2FUG6PCUxgTYRKEypcro3RRmx4Jsd6bgTFKEBtd4E7V26VvKkDhFJ1cJKrP44F8GcZp3MmTCREScMrAC2bAxEjW3",
  "key4": "YRMW97wcSyVEib78VsjajnapVGrAi9A5kfvbao4hWDtQRETerfo3RD3ADKVwy7JufbToxMWMC7TeXUmzNKfVMXN",
  "key5": "2FddnRQtfEZ2GD3NTK1jc4cvsJs9fnVfXGKL2x8maAnK8XbHv78Y35LtwUNyjJRd9Nmwdcq12XTeEJ5PHQi5Ze9c",
  "key6": "31jwuV3uomzz8hecqqjjyQxrdP2VUpBJZzng2NqvcfVBGngcipN1SPqUw1P6ChHGAhed7YftWP3XhmshqqHxoHSJ",
  "key7": "2TowPnd2xtEd6GkeRV83SxnHC8t7A2jMSaVDTAQSPNBN4A2fUoa9qL4uPeX31HfkqAbVPNKE1SxV7HziyGGj67dL",
  "key8": "5qcwJ5dchrLQXXjo6wv6kmZvzvy1arLgYDuo1bsCRzHnyjkxZwcFUsgRyKXKNWm5SWeyCLZdDZ41RHiBGK5FckGw",
  "key9": "254jxBMwb9etotzfFPMVsjiwiSobw6Dcpn1WA94JHV92W62xKKycYEvXa6D9cj3wF5TUEjuz9sPQEk958Q42rseL",
  "key10": "4WivcijFcoRBL8sYJ12GyT7PpvcrVPUrfQwqr3inukimfF4sstLZw2TmSbGo7xk1aWpYR87bP59ij16aA7Swyk4B",
  "key11": "2zfGUqJMpFJ3K1pJcaVXcDPpxkUV2uffH7gUwmkg2L6FowzUwMyyK5TzAU8PZ5FxW4TRfkuMowYuXHBXk5JYec5s",
  "key12": "2DahMyyyFCZLyutBRcFEqy64DqDrkjZb5BujDPYyPGQJGwJfd5zmTupEJnJiDd55Xm9efD27kdkeXsD7FFd4tWY",
  "key13": "4GK5cmVLAzGhEtAKY2TDFM9au4rXb8rgk4csiTVSB42ppXjBz1u3VZZq5snfq9Zrcf5gFj7DBjbSwv9b5m99CP3B",
  "key14": "3qnTp4XBiNjYjHrAAuXKZmRNSGpM47MLhMEBfP5B49j89R2cExhnnuH67FsjyJRvVq6i4ZYy65wNkbFY6YhZAPvg",
  "key15": "4sW1doqUSSoc4URE9m3SYaDwU6hXP2VyZD3fzWHhjxKDkEf7i5Z1qQ7hjc22cv9B2TiiaHwrVuE4D2uw3gfg9jHw",
  "key16": "afkaq7NbKgeXKCBYjG68yK2fESDDW3XurVLj6xCT47FVYm6tovQrtAEftnDsGpMwffYmH2qfQUKAmF33GRiUGgU",
  "key17": "2AmgeGWZqy7zdZht2ZvKxBonBYb4XYEbyYybWKphUmLQNhFjZYiN5186CwHHj69UHTZc9wcv975A7X2dhfHiNPym",
  "key18": "2obYsLKg2ntWeESsDwEfBdjtofZ5Qwsj38MJxJpjVWh3QEyRAWks2bVFqiVe3ufzbvDrkNhq7GjG5J9p9xkmdfou",
  "key19": "5yRdcvaVs4t6DE9nKTRjN4Y1gzc4bbU8ufBggNHQHVAoT2K9uhWcpfFN4YAf3aYMUTHGb3uGfAMV99BeGWeBMgPL",
  "key20": "4X7NtBmmLSno1ymwbTdcDthAsv4timeeqgCgxnMsz3wepcLd5YBRjALp9N1S6zKyQe7Mh3zuE5v3oNSiwgtU5iYV",
  "key21": "2jdBJiu7US3frjeVCYKaRuYvCqJxotBt4opyTF5wcz3uwhMBpyFH1CjQRV5FRMQu6y5yAnjhYQ2hc5oK87goPNvf",
  "key22": "64CxJCm1DeZa5fKMtf5V9sJzehfQfwV1dYrDS8ecAqapf1FsDv515X95ZHUronr5cZSThRjSqTDDz4sxsiCqJy2H",
  "key23": "3p31qv9UXqK1mbzg5tJXTprYFHFhDQFbEm4hjga15YK1NNgzq73X8czpJVdjLkkVcKXxug6wBJnUsDjhTZMELcCi",
  "key24": "2wXXZSc4cUENGgcr1qLkTqVJAX2LMFUsYtJScuexJFx9ymUP8baTPZ4Nj7wD89PpAiWiCigTSUoTHeuRhRnSNy5G",
  "key25": "4zsY7mx9qmbGkkFqSYat5v81fASccaud8ZMd6zrkjUQpkaHML7xbgRvhhiiooVezhHh6J7H36Jt19mXBUXhGKzfn",
  "key26": "MKQwZNDuLrwVUS1BiadNZREXXCywC8xW7GRmw2A8AWqfdM62yj8cG2jBWm9TpZsA8SgkB3Ge6u7HsEBmPvB8hQS",
  "key27": "4ZXtH68RG2Vx4FRdpfXGeweRVzwKwVxj2MkeS1RZvTGBv39tz2kGeF66o7EUpgMdYV8Lz7MceCWwpqWyoeahttnw",
  "key28": "Hd85NUTwejegqgqfqptDEtbYsXE5bPtD1Fe2MCr69R25JQz987EdbtDfeBbecJL3h7fGYjRTfwk3sC9Us9oYabs",
  "key29": "HH4YabnDSAdGLDtRGejKRmQZyFa2XqxtXQCvSM7d4CUsRv1guYQbJXqbY9gUXGGPbEA3smJbC5pptESc9UzVrBj",
  "key30": "63yVQLWiNkrsAoXncbErkynh4XBHwA13kB6yiHXvPRZcL4hefyY1ysTXk54dPCvjR5KVzhVahuKkZbVaWpMWqNAZ"
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
