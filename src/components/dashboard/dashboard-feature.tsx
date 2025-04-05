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
    "93JtRRPDeJcBRWYBt9LL9TMzkE9Uu5UW3sdxng9aYNZFSeMBHUJo7FNCpWmBVa4WiNz1wt5hiNe7M2DhouKqjdd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t72ht3zvgfn8x1EnaYPtQ7CNU8MrKxRKoeLaMCpZEJahHpi3VcAe2HAqRchoT6SRKgnKwd2LtHTGenC962jVGLb",
  "key1": "5Tzozr8SDyoFvxoGMeUgQ3qBadVQjihtEQcTUAMQ7pP1KAqhmkqkaFfnUfEQiy7L6tGEwS6iKMBe366VPBU83hEj",
  "key2": "7z5AQWzoDqCPbRcZtYN7Je1UP9imBz447jm5jSjBen5W65FgnThiFZ9F1eUfrasNvXqFdpQP9YeoAPooPPzwkJn",
  "key3": "xWzc6YEbbwnRfVShmiinSKmPtF4ZwAFjiv2HyPCNfbDQ83oGaqd1FUG158e8C1YHVtZpDccZAMFMMn3SuaZ4nrZ",
  "key4": "HLjUpBEypb4vf2EESPDtYg1KVSKGvzXdKdbxSTeoP7wTrkWK6NYcskKSsBDbD1bFv7wFuavsYVLC2fqsfwTgud1",
  "key5": "AKaxd1BTBRDpJxWjVT3MeRcxsy22zx7EaqBRz1Lf5DCMKxUktd288TrTeR4rJpR7c6Xw82qcUEd1wHspuV6vJ8m",
  "key6": "2mTBDUBkUT24RsZrdh86yC6ZMy1noWnbgdfDtPjGv45nkMUevvqGjKywgET9qgR2bMetYKzXNh2otmeLneHpZKHr",
  "key7": "4Y3VYygrZHVsPLFPpB4DqxYbCsC2hzvxMEGmhniVYbRDEMzTMWa6dFS3fTh8geuwF3vZmbMeVBJQ2fHptUvyVExN",
  "key8": "2LGPF8eswREHDsMNjyX55iBSuTM73NAt5bGsTeSVMo5LZzBkeAsf2gAsinLaJJPMpLtTGSNHcNcvbKBJyWJXSQEP",
  "key9": "gUxgEskPyu75KrzWdKGqUznZC2H2XdQuXu9JdEZD9Ha2gnZV5fUNaT5hQYRS8em3P4ejHtpx3SahybmyrLKUEay",
  "key10": "3RmkES7RKhSBWsu5Y9n31rzKHrrrMiNjEbzAcuvGvyUnegjokcQk7BuxkrQfJ6ZM6QFgqDQLnqQUiktxCrXUoXKr",
  "key11": "35Sv5NNjUNs4hiLH6aTUeY6QQTXRKAjrMfuKvWghbfV8P4b9K5e4LyPc58eg8zmVBr5wy37AswrrCUCady3UqkRe",
  "key12": "24gQHrMrY7MnutZtFuF9ixJ2EbTPNF7eMSCAgFqvx9Hd6GzUb8Aq5AwLSzp5P6wdK8CXGFsyuaiJ3Px5zN6M9DBb",
  "key13": "2vQxYnxxJ9wtBV7mUqqXGjJxQA7g9EyvUodwXka9Vt3YDLBj5KnDb3zQdU2dTZhNiCxi7nanCFBFxvaPXzQgTF1z",
  "key14": "oMCSpCdBL9Kpt1pDigbgjzbpk7W9eQ6apv2n13TbGssbKu5RRsX4wheoPHmPrMzXEQTrDUpE17DwGjFLeuVK2WA",
  "key15": "JDrCC73wio6Wnhtw2i8exHey1SA6fPbPXqb52hF9ZAxkXdRMvGf9EXsPtQo2rpsq28aEKkMLKy8RFb8chv2J2wj",
  "key16": "3w3bHDn6ZxGGYkcG1nXQM95rFRvbjW9VDwkKYZCy6JsU8xd5Eck8NrWqG76wT2SSjszJwza1DA4mMj3S4H2NgXC2",
  "key17": "2WGQNBqC58xrUk8zrXgXKdYfXnNHfh5A2wVfZaQJC77RgKk2m8qbEhuqFeZ3u5ovRHHKYbqTYx2gxotZm1bc4BoF",
  "key18": "2U48sV1dXS6dpJwi4LnHkFmnGfhycMSS3QynzsZhXw46iPGpLAuPkco5467sC4An1RudbPqqs5JQTAKCbNacsLx9",
  "key19": "2vLwYfBHvGYbBFYzMffczZoka6k8XvEqgEUtFFT89NqF58jQkfdJxx5DxCbiSebRXq3XePS9W3HXP7iaGaYnYpCU",
  "key20": "27791g2Xemes9aeoAcqWkMEE7oZntTmcHMhBAATcFv4VgAUeUqmUx2V2Quf4ZRcahFeF5Zi3RmBkjheEdtDtKL2y",
  "key21": "4oQSBwDZmQ3kye2seJNCdUFMe6GZ1vvo76Cvdim3wvNxTqwLEUFmbhKpcRJ4Z1gpcvPheqfmoDVEDHQAu2XnABkr",
  "key22": "5qiUZ5ATAJY7C9cmspwqSXCi6YcAqPvUhJph1fu1d4r93YHmTRdBudAtYQfAQ7c8HXj6WtANDZQh4HKXPqkTcan9",
  "key23": "5HHEzBLTvtxdQs8oVi1KH1rbaiapiqEEbt3Qm9qGt2w2krkfvMmq3s49U4W6N3kw4wNQror76oasQHQDKsVNRsfq",
  "key24": "5nScbbFRiJMggm47tcQKvs3vu61wrGRmvm8CaiYfhJbkHfCupK2Tv33ouGU1xgCzyxSuEBM4x8wPUhAQ4tt8pPg4",
  "key25": "4TtaPr9ZrREc9WGaXfdHmTzaDhjZADiyMohdfXj1YuJyZkrtPTC3gRat98woQwnYhU2H4XsD2BiVT4ZfCBmhvghE",
  "key26": "5S5jhc83qW5oWgMUvsh4JMCUeS1Qdfb7QRehRFvyzb6ADoQYwsmhQ2FFEGg8uuBwYnBNx1rHrkHkF8wKAmim69EZ",
  "key27": "4Kbgmey4pSydrAr3nKp6HyMCsmkz43m8X5jaXen7M3fLyoyRVf3YnkWMSX7m3teAToW6ynXZJbwvu4HyLkfQz4BZ",
  "key28": "2dF44XRV9RPgU37sLaQznKbzmgCG2RjdxDSugWH6H9W5SxpNHz6fBhaqcUKZPEQ1hZ41x45Cfq3PYcbnf1p3xhzH",
  "key29": "j6tvBfPFoNqC7AgY34sidyasQXvhtxbCKX9mAUQZ6Kgj95NyDnnbZBJ6ePNTcMkxdsZNjtFynXXx1r87TRbZRuS"
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
