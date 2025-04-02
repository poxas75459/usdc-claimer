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
    "yGcbV14Z83AfjhczutsBtAWprCqXFQ3Emcs3smiLRtCEJZV6gQ6wwnSKuAhRanA6yyVPF1BZNvEWSZXbkXGCgoA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ptfeTCmJDnhax23RyHzHoDbtBdxmhnEXayguc1U9PdzsSMcZAkEaA6AvEfqSx17xK9c1PWpmEFy2jHAH8jEFPa7",
  "key1": "64JzN9JTCHE31c8kM4cQCy2dZrtCbnk6xmszF4jPyTH5683VmARjHc91i3hd4Hdc5SEwPJikATfzm7KWtweMauXS",
  "key2": "4p59xhqmm6asP6TRd1DFfR14NRBQ5kqGz7v6jLsxvCEbp52KNP6C5W5nV85s3Ud2RLekGzNQoSxwPEAMLmQhjUZq",
  "key3": "3uYt9DH8YHeXH7PW44D9PewnQxkSydaMmVEJBJLWHbRdWD1akUu7jmiGy8ZWEu1oeRV6aJoAYbAHbbwzDwuN87xn",
  "key4": "49DYMjyBRhK2Z5PumQAZhrSL6U7h9rXLcBfeb79Zxmc2v5cE4J74unaRhBrnTJy4QJbJSZtoBMtrU4wWLY6MKgJE",
  "key5": "3EMxpK662ZCcTQ4EyCR2TCapExGoxNhiJa3BBWbpDV6j3NCuhECMPdARR2PaWX116dEHz6cXkqtfujSbZ9oAMNxd",
  "key6": "2dtpT41Ycj8WzGmFzbwQDesjdDM9bJG7m44MkX6cME9tET8P1i3ghi46ZGVH4TPBTETxkELF6dWroSfzJcEF8HdZ",
  "key7": "3hAnBFw3qpxbM5kAUgDqaBbwXqfx3W1RLbWyWtLGXr4FTmj9bNrsFvtPQATSGeh7VHa2bdMqraTQv98XrKAh64jX",
  "key8": "4vXCQGpFkprug76jD4y4i4npeqJtrUoEBg5HMiXiWvD9w6WUgt7mZ8CG2XbdNRNgRjmqjVJ3baPqUnmfAGwVZmLz",
  "key9": "2RaEq7vnK7rFzQLmzJwfTHxwf4Uc7Kk89aogYQeBzFoCNDqvS7trmhjazHDdQthCLe9R1MuNNDL6MLPpmyUq6TqK",
  "key10": "36eCgXA4ZJYV3Nsz31WLYgafNYJyx69CtHDw5s5LQ7tLnD7ah3PGHESU8Lx6oj9SAto6VdGXSyVD5WEZi7TKwpm8",
  "key11": "589NfPtP8xkGYvjm1pverXLSXs3h6QhYKgQyegD6mbxjJuWYqkTr8eN5GW5Z6UyxXDkieS9LRt7DwM8gxqpyLwgF",
  "key12": "5jAYvUwPhiQg8kzjZDAfGrgfhdPXZnfATjP5eU8NtdRLtKSRxLX3LAhRopBa542sLfdVoATnBBfxqRS53o9gfsfR",
  "key13": "2XNnSxtLHzY2FJnUrqY58UcSTTbYmvyeP1vvi1X3d2v4PM9Hxw52TGjix6JByqNQp1YNZhN2icMTkeU1otJfUwdg",
  "key14": "3exMHEks24t8NevafxAJfkiE89X9Hk5bW2Y21HhwNZ5inNrrkE8UQYEQQyCwDFvTZwFWDDpzToDZy4P3QfJbC6PN",
  "key15": "2adCp4EarC5fm4ayNorgMsVErVRAo37WahZt8erEp4uw8mX7dgp98ZQTpsTkK6bdjYuZwKTsq6RiSvejHw9uf2b8",
  "key16": "2brgNdef6YToXQMPjWj6uSxprCDLQT2hd7sdJ8GQxZzRiMf5svb8kjafLD3BcV46ecy3mbqyicUntdPTti1bhVBe",
  "key17": "2bynYNkRJ5NYqcfnGrqgjv9BA2ZtaFf6cT6DGGBcC39a6Sr3Eqnj3yAgXbDiV4zrrAswir6rN87vJbHrTqDRD16Q",
  "key18": "4hWwsG5ZTk1fCNgU95apcLH8FhRzAM7R1D4XvepjMcRtj9PUP3m88FJGL6CXCGwSL5SntuCHxHscu9KEB5SVyUdX",
  "key19": "4UD8tUdxAtGRUrC4eha743vJSqtpRQdmrtJbhE87XE3v1BjP7ZStvZk6Yjwg6q2gpDxmCSqG6XcqasUSDhcBcqLA",
  "key20": "2U16RbyJnzzboNwD66rSs965ShYWU9QAhZ6cdaYg9T5NiLBXYA6UyPfX2zSxoQYBhk9HMtTx1H3upTkbpsxMEGuX",
  "key21": "WyBxytrsoFWWZ9pWfWwaexLhzfbugmBA5VfxQebmUYAsH8xMNbcNkohQHrwgBYkaAD71BJ8QXrVcroKiQ1K3xDw",
  "key22": "2zbDTkfD4YFEyjSriBi6uot5woABynn4SFWCpS3s7syWoV5wYuu5A2jGj7Jm6zbnU3Un52X6fwedvUHc3HHhSeoD",
  "key23": "5tknr282ZDrspSRb3UCitnq3Kf1aFEisznQ8YTY7Si2uMEDVime7MJehbSLoKkvAqJuayN2659QVuxQpkDXp1Fh8",
  "key24": "5hzva8nqX5QvLt3ZnSUtiUudhgzYgyfh54c6zE1xEFsjA2FJgofnmTtUNojLmsge7cJcXaCAbU7SjuNQngYpHqG",
  "key25": "5ag38hYKpjZSuNyAqvgQa5zAtyVrmYQfsy5XZLaFwRW9jTwhS9GYCPtwZp4VKJcSheMFnQeLVZHvqxMePeyi9ZDF",
  "key26": "5qZFjJddexWejMqdXkw2arUJ9rG7S4hFHggNME3hK9bg1VmZWddUwVcQT41i4PLgZYUVrNqym5QJDE8c3MFgkT9m",
  "key27": "3ZvVbP9DvQaiLqzscU4KPAbg17ZpirQBb8V99KqSHFn23vUPHVQnMTeCm5uTbJozR7obsvJMQph4oTUMbMYL2JdN",
  "key28": "67h5RvqWiWfQmNRbXLxBuDEyYndGLkGotgBjXDCDvNWcbHzp5s5FJVAkeRutXyvvdCbNjCcePJjzSg2GPVaJH6N6",
  "key29": "55Bn7EE1TaDjEQedck7MWC6Kxe87sUxpzeLj8pyMFNeiWcBFF5hFCf4RbjNf76BeRXqJwc3F7aQxNaR71SuwyMfa",
  "key30": "4RswZa97PQ6cPwzLPH1ekKSDAC1AD9inaWMs1q9EutgPV35HLfL93hxStHDDM2F6XZP9XuWj8WNoKv8JNmGDG5yV",
  "key31": "3gxviRdjbFDTa1KkZQ791eYPxbcRKfvkCeHXYGdPaRby4SvzCycN19cSZDzndGR1s897yN9mGr8WVBCX9qeQJdoi",
  "key32": "3pPgtvi5pL21PkVJ5GA4A4cwjncDb2YmLgt1H43ZgcPvpf93SwXMX6G5o3Nw3UaHBjoCXnxFMKFRTY4VohXsZBMQ",
  "key33": "4gJrKh4p42JVGxfVkxZiLSh84upvUbc2CmdghemfVEZNaH7gyGY3a9UKBFavRknGmwo2Ln17jhRxdGNKFBWqtL1q"
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
