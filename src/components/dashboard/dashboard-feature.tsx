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
    "2RKqLKaX3Annzec4S5iJgfuR9XbhX1PfmYaoYGheS2qy1X8w72GRZZwf4M7sLLSSvXMFMqZniUvrdXYYKeYdS6VY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g9J1hMNkQBHBYwUghrcP4w2MG6DRwM8BGhkhitK8AkmEXTLZPjCjDHwJL2QcPhSpAQjZkN7ye5Q3kiqpUXJHFR4",
  "key1": "2f8rz6KtDqPKpmM2VBgC53gGtbwWjZYq8i6yeBXH13TZGZeMbhQHYVY1iTmRw7ncWznJS2J1UJYtFTd7aaYLWMEu",
  "key2": "5ddvSvwzZEVp1FdbBzckXQVMKX1HukEKhPj6X1ub6nmfihiHSp5VSzQH1K2iMJCBBKJDTA8DBnR4QwnZxXasRCgA",
  "key3": "evTiWiSHC753TkX2MRDpbXWnriit683QWR1cqN15sBvNVV9cQXqdM2w22xEYbf6Rp1j7cFZoCgLxAT1hGmjDiUF",
  "key4": "626vA7nF4tMsR8cySzxE9s8VBsX9dZLgJa43WtTdjYo53d7HiFjE94dtmfPMDZff8zggnSz2pec9xo8L2nKkgYzv",
  "key5": "61Aiahet5cpEWY2QmGyAW9CwrVMx8jaeZ3V4tz1jggHvCz1wBqQjwRa6e9nP6KLEpusWtzzJhTpyURqKNBaLgnF8",
  "key6": "4qA9Ny749psprb7pXpoj6dRViFFX9JetpwED9RfBptzkhCUH95qsBPYZVUsZtUhouNdbv6psEBFEwEcC2ZF25isa",
  "key7": "6J3sCXvPWYS26Bq8EAsswT5HepyRRU3XQtYJENQR6rj6KyQtVFYMNDt2CRVXPPWpWzyasNb6JXruvJyUQpBo7oW",
  "key8": "5iHVTw79Wct2Xts41c8AwBS4oVp6KwYzxUHvKU7L4WF6UxiaMZJxGMzYtAMs4BzE9jUJDSYqq3KTiT4uebXwZ1Sp",
  "key9": "JGV3Vnm2AoH7yrbbYHXuycSmhsNrph7QZSa8VbgPJrJjEr9Cs3D8FrP9nGvpcXFy19MCdoEuvdrfJ9Q5eA2Eoi2",
  "key10": "2MhKrWPvvovqdvpocmnDDXP71Jk2RAcmR1AmzQERchCEUhfWdHHizCn5gbQoJxSxKziu8PyqQNQAXkPz7MTPUnmp",
  "key11": "4G23YSntEMWeiYaBtbWr8piWFjn9PPiebR1JLyLVRy9LNRBbErNqmLH4wdLxuBFsFB6s5XxwLkzJepi6mhXBEbRa",
  "key12": "2GAv9JBsJu2iHEofgTpC3hT48aByLVMfGbGN3xTrvp5TkhYBVDD3LChXKEtHu4CgAZ4Ag1sgstZuk5A4mD8xgE31",
  "key13": "77rGftYAGW5v8kTTcS5F3HawGrPoYt9jPVMGXSKu4KLW6qUw99T5U8xgfT6GYWritvdwKzQi2Nge9djfKVgAKyj",
  "key14": "DobaBMFzfwUZHMsQrpxZJDfxRBvQjLYXNp8wjsJxoAHWyZfNTkhjWDLzdKrvBL4zEaAJTuNRqXqW27RmjPp4ynD",
  "key15": "3eW1U68GEVp53KPHLtaUTAoyELmjGzurLnyvC9UnyD2M7hhhQNinHUB6UtdQ2wDt1rnmowxFYZcYBHzwnHHhtv3E",
  "key16": "4zkoYQmNEPhzGKXhMWo1yRwCb28a2qQvRc4DW48uK5Q9KnJQ8LU9QgLiANFG1yVASjp6rJf9AVcuGNmfLbEBF8Qc",
  "key17": "2Vv6J5DotgzHsJsA9CZdZKTix28Vcw9Nni7viSQj6yBRiaoPgTuBeSHrm4ZapXvP1ADbZpP4X9i5kak8M3MWbHku",
  "key18": "5S16K2zD1NDC6bYXnHjdtTQtni5ZSb5UosjN56mUMkXTLj4Kb9nr5sSSCzrhx2kcASfuasf6i4qf3wyUA6BCawhn",
  "key19": "4i8KCA7aRfHvE9CPpN6ZBsxq29fUtYsfWtJUZniJ85Vh7Y39pVQAQ5TMeQXYqHg2LDBn2ypKoKSgMMG39rXMZjQB",
  "key20": "2VG2SQxVrCfbirufqzhvskctEjgHaBBSZuLLfi68cYnSSXW3vJmWS4Yb8AUFgpzUMcgw9cnbaaXUNW4XfvXRvN9p",
  "key21": "4S7XrbZ4PnkC3rdt4q2NPfSR9iCAA5WqiVgqv2yvHPntXpFXqysZHWneUYUqcaBEFBc8wjEHeA6q4kq4oniqvVF6",
  "key22": "d4aXZSS6XttzugbE5vHY5SQu9JDdEzwFk9brBK5eVab8ekG95uSAjCh3D6y8fmAFsCTfw9EHkf3NrbDhXQqCRuf",
  "key23": "5U1eMw5Fbd83j54JmtzYJhMiv8w8Zy5cS85kQwSCYnfBx47ywfs8Awb6XmajmfyTUSBwWFLYTFn2SDqKd7hYDCjX",
  "key24": "3TTo9MbjU5qyUmscyDy1arAUo8ov2ni2aJyWkSeL5oXh5jTeWLBKvHGWdAXx7FGmfX5PwaVciFiBF4RDU13qLb2s",
  "key25": "3Y5KMuMqSm2MS4WYpQuREJ1oD9ujJjLEjSh52ADMP9bAeQqajTVY16DPWsbUFTnskVdr7wEwZzHgWRZ1w3dC5ucJ",
  "key26": "2EgfgfpPnvEfK78y7dJXpinZHK3CT8uKjoY9FGdjQ71PAhUtf3xKwCBR25bC7pWKEMcYFWvWi5mPzobR7Yg3nvfc",
  "key27": "2TewyF8f5zh1K4WSaZ3G5W5a7AbuEmVEJdWGkiNswc5W1F458b2bJWcE9SkyZQtD4RbvcZFvDE8bwFQmjUJsPk6Q",
  "key28": "3QbbHoxnWbY2zGkjdyi3RJLjPi4rRcfVZNUtCA48vB26S3L45Jcmtpqhd3u8e3SKXKtLWnHZch32XAstC5JBa9YX",
  "key29": "pvSM48rgrhw2dCUJ2gQ6zf2WfgWHQT9BN1yhLs4NnRkbDauM2TVwCZPJVANwqX4bZTNCNwasRwv3cnzRzVuNJex",
  "key30": "54BQ6KUuCKGPwHkimQzDpj8ve9YfHLqWQEEAf2kkehZuGpiRJSy44VXxK3TFzDc4purxmxH7paypDpUWsCPNUqfR",
  "key31": "2nHqyhVW15SRB3GG4KHwGBRAJbb7mb1j8CQRM5T67HSYDQzZ2rj1ei5APL4t3yTHnMq4kmEUJZCFANV6MFrU38z6"
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
