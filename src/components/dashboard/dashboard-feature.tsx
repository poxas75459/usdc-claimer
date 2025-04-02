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
    "2JGG4WULRKS63f3WUvx1W3pZKkZjN1x6WM7deqr2GzD2J4xT5CZnir3kH2cagiSc9bvi7kqMEmwgydkswEnQDY9j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EqLQ9jWnd9z2VbQcnt3ej1yLDmvEeUnRbneoWgLNWSdwZZZyv9JpW21QGCFqZdJc7gcu6MYgmVWm4smNqa3fosr",
  "key1": "D7YJsXwSjCFSZ3HzMSV9hG79mx16ycVqAzJQ1bfisgsr7bYMcHjdSwBDEJ6pDusut3BTLJWKHtZpVEZHhzNRNKg",
  "key2": "DztdkJFnjZbW8ysYLaNURipmAdS8B1BPWQbtnUxLsAjjPHKk7a75QTasmVo88ASn6LHFDaUrenhR9tnSitMeAy5",
  "key3": "5YHVnRvYcUDfaTtPMHQm5RPo7Qo8YMM642imNNFq7giVzXq7mghBFZjuLzBR8WZVQMuZ2eqffaCNRLWR1rcA6hJi",
  "key4": "4RWac9ggTTYme6m5kMnFRn4BrLY9gHJnNfi1uxpMTMErsiLYid3qe4h41XEBWuHLXKzDfj5uf5HTViAaTLMypohe",
  "key5": "52aXKFDr4EX8EZa8fC2WSxp2Re6i52BdTynXQpdrz8dNmaqENLw7nVzxRXY5okTRz6NTqbRUZCvCrJgQ1rJnDMcu",
  "key6": "4acCPXx8UL1UMJenMhUmpfe6L771c8cELUPbKX8Wy68g18MQ2czbw8gsK73BWZvf1mySkPXFAnFtE4HZa4jaNDUx",
  "key7": "4EVYyr8mwMmytRCvgLFbQPtRfTFcwjbyxuJZV8ZecXuEKDhGY3xZL6NNptMYLrb96N7rJp9LDcKVhXFeZYefs8ef",
  "key8": "5j3sdeFvyHWN8ZxJx7H9Ceq8eLYrsaNboNYMKJMYnF4pY784Gpypa13w8Q69DLFW5fbKShB7ApWfqHzZNaVxH1wL",
  "key9": "3Nj81sSHw6zLssAtKcS1m7DuPUjpXQPZGxZq6ibm59m9QWpWosrVZw8wgZQ7wBNSDss21BbYa9ue4DCN17nbET9T",
  "key10": "3aF11DoYzC4BQyQLh7s4ofMrUjaq74ru7JT1QkNxpCKGfMDxdCa5SKEFw8xM7xKJxrjinfukHmMKTZ8Kavrw6qWL",
  "key11": "2PWAqRBYj2C5cKeixi4KE6zBWuZvVmHuw7heCLE44Fn366Li7v2SGJjrjUgw4zSBbt5QpZ5tTeCotokrjbbhtHsD",
  "key12": "5Phw6K2WEFD2Wjx2fq9dFQiyfaMuqsi496tuwAVWBzNm2HHecT13FxRxpRNpHwdgoSkgDiEtQ5t9NBenbc75L4uf",
  "key13": "3agWb61octaDTSFpdgEQe84d5nwRdEpJbFfAbHScfo37CmKJgc8f7fggqTAtYak1GBTWgxf9zDjScWZZUB1MoWbF",
  "key14": "4FFdC8sjCuCausRHueptQbmAyBhTeCkRK9qSxB7LwBy2dhS77e99AbLDAYFqUe6tspqiTWJVUQK4zQfhTxia5tXC",
  "key15": "4UhvQxEpZLoaXx8CJn3f4G5sc6aBVoV9u8mCXxbVUWjUH9j7tfFYWu3FNRjiMduMUQEDsR66DNCfm89SdY2xHXzw",
  "key16": "e4rb3HV4Py9EFfLW7jwKuoJ4sNfv7zZxTtxsSfseE3DWiVkdCvaKXNVygKVfgig8aYN2VjjCjWS3TSYKx4du92S",
  "key17": "5kfvRoHqMnAQLTUgxXPWPyWijcCyx9HNwq5CiH8m6b9a1YQsVRiK1i8WCqXZDX85g3m95GfzpBRt4C5TMCw5WU2o",
  "key18": "W8DmazeUuMM7TZvGLe6BgdtwqtgpzzPkK4zFaiTdjFpPwRyVq2MM1b2GwQLk3rJwnad4GBkQZv5o7pNvFAx3fqW",
  "key19": "Xmy6fuSh1VpN763gXFPsSrV6frLAgdUPMSx7gFeeMb85fb9iWdhPXK9vcQzDcoqqVf1nGDwn9WYbYJSZM1854BN",
  "key20": "64YtJZHHmipj5JBA4qwEczo8GrkYbuqESnf2ec8MUffNUeaX2BS57KNfUJQUEP94Zdy3oGXZRMtUapbjwRnUGvd2",
  "key21": "5kgHuYLahRun61fyV9bNeBwc3s8douCmSVyySNqrhr8W3LTLF1CZVUJX65zoc5KQaqthFadCxoBDBsiFh6SC9g1H",
  "key22": "3YNRtNNtUfHFeTjUjp3H9jNEwyS3ass6rV6ooBnRQAHiuE6sGgVrirTfZnAyFTdKLcDhhtnac1eXdsHdcUkoTCK2",
  "key23": "5mLMEo5MHaX19QoTCNWQgkUjsDxeUM1QPkFVkWNw65uB6zhnwXwe8ZfgTmv5YBxsP9uXHCKanVQM5Jp4GoBHTwhm",
  "key24": "5G5GhM3kodNYskLLGicBbXMRJjsjyjGx6sZZeBEQQ8SKmJuuVWyHUkxfbFGuZytoVpmzKwrhrhkMWGd36E1yby2F",
  "key25": "5RLRKMq3TVAheEsDQigd2VBsNMDjQAaX3YGhjwa6JfRZpRBmiX1p7XEBXn6DVruVT5YqpB7r7adsa246Qq5EEuYb",
  "key26": "4bpduVJFAKDzZeWqcpghtMQ645tt3YLunPqXWHgQhqCZtVQDQpPafQJesoT7QgDkbTec7ojGu2DUfWcGJpq3fE2H",
  "key27": "4MFRNfLXtGsz34DeSDmfQRLRXwf1F9y2KUSymnu2z5rNCDzZZP125N3vtjZxVJ8xSfFqHnooVGvAs8tPArycin7P",
  "key28": "4Gjr8cJhki6jiN3ksLw1yxgEsLaDuP8c1LwzH7ai8vEDarNazDLU5XDEMY1ZcMTS4FqmaShEH5k6i1dw4C1PcYRR",
  "key29": "4gASCt3LWZstT45C816aez5KugVsVW1Eo2MxDx8fbjtnCTjCrh6qKPwPRQMz7YXnAuPCJ3bYoL5QzrZB1Hz16iKd",
  "key30": "2T3Vp9YJ5kNmcJG6hrBHgqoBLvPgTmvThqnqmCcfgYv3xgW4H29qpCXd1RSJUdwV5iRVk1tfiKNQJ6ye6ZPhuhG1",
  "key31": "2tN3jM8jnCPEqBPT65kivTS9QpAND4WCkoT3Jyowrm6LCEF4DjzQzHjRqmznihD26nKJMUoUXk9XGfAH9ETuDLCq",
  "key32": "4xXBWuhEp5QW7dMzKZDWGjzjTnXHY3L6BMV8m2KUreJvCmu9JPD5U7gdE3ApYmPtAfokBQK3jvHfSA58oKwZJDnK"
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
