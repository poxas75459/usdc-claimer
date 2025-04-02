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
    "4XSvifZGEJosfvGZygqx68WAUNvo4xkUfywfj4fFuFjdiNBXr4qNH8icw3xKytdG8DYMBQBJ7K6SJTYeDwTFNpcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BnZyWN71FKJpMnddJpEkdEG8XeQ7oSPd41wCTe2mrp5JvfqxXy8gGFqNxjSnm2bdYvBc8PrR7E3Ehoq16zgLHJU",
  "key1": "4DyN5NSYa1Ug3gUHSeutQYx6H4DuZGnmmYGrjWPgsWzEuJ22oEz3stqPEYBTHVNWBrTcsSwYmw5FKo2uG16FUpfK",
  "key2": "3qPoRJHzdPzh4UWTZaqkrDJVV552DYzPTrzWSWsbvjF3BJBUdyaWsENDEe1ZVrCQQZxwgjyXYFmuS7GHaGNGgZJw",
  "key3": "ZH3auXEpDAP4egqA3anHWSxX71fBEucSFUM5Aw3tCLqQVjsuYTxPYvmUU1eeSgwknEJzAbtwTDNeaZiJU7zsqEp",
  "key4": "2hrSKiAdo1itDNfuxL6Xr5aPDeSdK1pCrE8UqNyJdP33eBQeqLXXxbBMHx9R37yUJ33yzpWBeiYGfPbPr5skREqN",
  "key5": "4QqPSCbG8XNDstDLUmQzjuYBs4FUP1nX4fv8uaMAtpghgTPdUGtuJUrnMDLAq7XrfDAGzTQ9SWduYn45iD7wFpZT",
  "key6": "3UbBcW78ydbpfdrGZM7WPj8zG16vSc4yAtYhY429D2Jvg9xRMknhBJw9EK2raPonrYqbqAoD5LA7hMsEy8WiVBkY",
  "key7": "5YAqRDpXLq4vZBpnjZoMCDDNU7euyTjabBVLcryhyZKp35Zf9iMu4ixYwUPJQFd6kf85ewTDEGCGNn3xXis4h9rc",
  "key8": "2oc6fyr63sMCRmaH2HV7XrTUe2VbfJGy67Ntv5gJbkq4B9gLVdzJ8feG99Qod5VDiEBsZ6RMrPNcmrYTzvxjNVhm",
  "key9": "5zHARss9Tr72P9Y2E6gomwuazJ7NNdhqaA419DftWYKcpbZ5aYvvXnHXsLeTcKfswdEVjRdx5p8bYhU3EfP9w15q",
  "key10": "5VUhvYDS5EdM8mEVjjTHXChuUv2k2NnTXKtGiUYd3inZd7AoeE5eCNEM7BLwKCUfYngzjM5ogem1Xos6dbhqjpk3",
  "key11": "YbXJqMZCqi5tH2kdW18SFFqwMaH54r3yhS73RzACBBAvEa6t1Ed5cngZ2WF8dY5rJUMeMNzwnnHCjyJCHtQMMyx",
  "key12": "65pfiKyDWJwHAhPKW3QpzLHvXavYsEua2CnLcmdPHsB7PUQ1GTF6DSZjn9aR4tTLsmcyPtCEGQ8K6X7G3scNYwsP",
  "key13": "27W9xTuiqBDpkA7mWHAMrNU25fyZAH1rKzUqmaeRWbZ6Tkx1D97qTSAi5Fx4wR2WShCFn9Gcyv5jw6MCEEDmECQy",
  "key14": "3z3jFH6hdGsGCFhEGGJtS351CSCnvqFb1RGkQY4RyvBYCPwcxUFWEqdKcNdCA4tUzko5eNLupedHQqPyuCqrvJjw",
  "key15": "5AYmuG2FAt3h8ng9k4aVyr5RUo1pcvLqMS2VDsz1vAFUMU9LEPJApoPx9KddWxeyh1Nakd12yuApRokU5Hi3Wdfi",
  "key16": "2YQnpG44HyTivQHd6LyvNeLaLDLdt5yJYbFsFM2jj6RQeDZYhPodCuNd5jV14sPp3W2woMWrJoXi6WGfR9AMKc7X",
  "key17": "3vVj4DYSCHWFmh2X6uaLChys7NCQUmETqt24yq1ytYTxYA3xRSTd6pEz1KMLQ4uX7gL2WsnpAqPBY1kg6vHLNbiW",
  "key18": "3jYFeJ98TaY3k4hge4jzQ1nssLuPiS7pVtwCmaLt7fNyv6SFSETACiGbTPe9KCH4rs7WBsSAWSixzkYrdDfVbkm7",
  "key19": "4kc8JR8ew6t4voEsMVtuqVnjf57ssstnkyUqPMCeNyr1gW2P2Dfy7LQdjaLe2hCv3tJ9rimJeeNwNeKieV87dihE",
  "key20": "48SRQ3Kgiydkc8pFUV9JHvhvJDFEi5xjSLPx4udj74tRgf8LLqP4BnAdagyU1vg4JdekxRAWs1ypvsPhMeHsTcC9",
  "key21": "3WMX53kGGYd6nSqRzNWvTG8sRoYrKmL8eaTvUtTXPFxU51KatFN988S82mZzwX4nSn3vt5UbdUU4hLBAJMjPkDsR",
  "key22": "4Hk6tqrbx7rrfUAMMbpeNh87esEa8ucyehcUsuf1ioTZjNWSinhxSCHLgiKeEzYBN9eCdfFwitrPdQSfKxrag6c4",
  "key23": "3WcRa8W28LCc9aYhRDDmCeX3TvzWYssb5YhxCG5zQoGrBWVNTS2tL1jWpJnbZ48NGXu7DmjpDjfuk53HdYFDUxt3",
  "key24": "5Pe9jtzGaKxS8WdP3ZJ19vz9nJpptZPP7LwF1F6C3vKh8rvkwPzcFWHybBRzFXbNqBLYq7egGPwGJnbxV1SAQTa9"
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
