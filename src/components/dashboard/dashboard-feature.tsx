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
    "4PCAN8F9xortJo8T3byjv3f2qhgtd9SmB1dYYi4Y1ME26ZTR1KJTdRAVutZTYQ5gL6mhP3E9uJ1j8eDqTPKXENHE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tNForj3Jv1XzmFVxdhAdX5aLAVmoC55CybzrXcfXppZfPQqXY5vzjpTXkP2FqBezFw3MAws6ThmhbWx68Niiasf",
  "key1": "2Sujnmy7PYK85W8My7SjHfmUe8SZDZ416YFB2kh5yUNRD6jfiFtdSwameaZZ5r4NZ3bktN7onmCSqCQMmqDnJPyL",
  "key2": "EHfzi6dxxEAqkseKc3Lqfr8MQuDjFS7ZYD2NferFrK5jLnkxCfoaAvCkEekfQpNsmkfymzSTJLvxWTDP5uKf8AK",
  "key3": "LK1rJnjXbDr9s7MJ694mxv7Q8gpTL6MSc4zajwnxJyGo1Mb4wszXVh9oQNFm4czjEh1FWgLRkEoR6koTU5hKZyk",
  "key4": "4MgXf1bNMe9kTSucsxxEk1gqEZkaqKHb2bEtS8BZSYkGv5Gs83SBNxLeej6GtxTBGs3HWoMvTFMoqjoMgJddbPra",
  "key5": "5eZTstw8rBrMUmwzhK1EHT4DsmRNDwKgmtoZSPiCmtXj2vt8otoxTmy6ndcS8CCsUy3BnL2pUPEXV3RFMtWW27bC",
  "key6": "2GNWVbsrxj31VcKBUqncWYwU78Repvcynkc7jqSGF3W5SNQxgQf1fgLukXGKmVVVDNdMNjzpUA8hTc6EZNkFsdkK",
  "key7": "3yn25xpohFXXn1Anzjs3ZpfJzHa4SdGVtuX8r2tCh6ZFwq8Mqd6YHVmDaXuNXKuMmNyjEo1S6FxT3K1M5R89NF79",
  "key8": "2MGf5tLPiS8dMG3RubMhwn4eK8j8FgHVzEyv93KNS1s1gcBqQeXp35xHKfXBLM5mFzg1A5MdLozmo8jzNDjjKXEk",
  "key9": "5aPSCS1txFAy26fKodJ19D89897dLRtcTM26uM1d2KJVXkGUwMs9NbnMpSknVvUt6Gn8TS63EizajQY24xXztMRy",
  "key10": "4vBWrYT1SnwfWXYU2wMQwHBQyF8v3bgkKKg5tV4kvA7xDQ1fkmkCpysbqxvM8b5MdxyyXtst2Arkfya9y2vmgEiq",
  "key11": "2HQjK1eNUzjN7ARybL53GXMMHPpBusmp1c9z4JfMifMVWE8SG96xizFEHmBDZWPF2KvVuxYNjiZRpvAy4K2s8nsA",
  "key12": "52dRYBs8Zkav7z4xmMGJwKxhYHVRXqSgVfd6kKsdz5uCzUq278Jaaw25SWr7vuEva9pBCoyNKJhvXkw2V5mgkhEP",
  "key13": "4GJrddVHPVbNgJ9AfCwRd3s85sMmLkV8xcQM4rURzAXS5AYYKu2hkM3WZQd1eMiFXtuXKhuryHYCquMCV5Fm2WJf",
  "key14": "D8WGEfBMgvRyz2G3Si6NPvKdmoUMETs3KaQQuvvZiWxEGaFwCLR39zg8s3uJN8ZVRFsRuzo3xrnpyBhcETxFQvB",
  "key15": "2ySXB5gvgeckJz8DP6NnN4F9dBUBNiWKfnoCs1RbjAigbxhWLE2mpnhuUerWJJKq3VGQjdFtmPNbnoE7YqGsNxqJ",
  "key16": "5dLA1Mb9GAehfJQLdCrAz9LHHpgK4A6UgGcTB8BGV3QpdQ6Jgio54dYd2PzWu8cCaLZFa6QknY2befTXj2toBhxF",
  "key17": "U1SpxeVnjw74ASHjrofjf5Kw4FGTthfKCUtVxTCVcDVEm4bjN1TwuUreAawiAAhmfo1M5owubjw5T56rSVgnDw5",
  "key18": "49R9fS3j2JuVtXdMRdiQ5a7zt5yAvvR9zf6beiDWTWhPhoFCUdqmz8DoHPGbAXLEirq1y2QJtUip1YFE7kZEG9Sw",
  "key19": "5rNQc7b5Quj6wX7wXeA5adFdU8xdxKPpgteMb7tHArd8WQx9voieYNKHw6JaLufZzaJaaWVcizVzvqKzxts27GrB",
  "key20": "2AbmzdTaTy7WQr9nGCXpLghVQqD8Gq8n8a4kLmYX4kBKtVtzZL3snbZpV9uTqGxeRC83mRNbn5eeE2DQMkEXJyfZ",
  "key21": "2vvGCF7nCGDPhTpDYvfjdjZ8BJBZZXHv8qYUNuGjFAEZCiqRbKCfcYVdNeWvDpcfpwbXRxE2DVH44jYxsYoWczbk",
  "key22": "4XVNNcbSg6Y1xCfuJmC5PLiBUAyenpx1Y8vJn6ZhvjAW59uXryc9oyMYJdAy5V7zzugpw47NgqPpPPqNhmBhYA9K",
  "key23": "4cM8U4Z6FXzW4cJiwuzh752sdhCe5Ya8riuGjGg2AUwB8rcVEYAAbp7ihhSUJodeFoRuXjqkhTbRbd3r6VvYM7FH",
  "key24": "5SkSvPago7G1uSFaJqqQe9y1dAfQgxmXG4NncQqXg1FcRQxqUdPMgGzuoC4JeXzXu4Mr9yv3hm7rpi1yHNLwkU6R",
  "key25": "2JcbHS4wY7nDpXydDwaLSSEvSvsziAUz1qCnnLv9A8TPRtUsnrJYLaJuLmB3hGZpXYiTHJF9qMCAUwadrQxxaoXF",
  "key26": "4Np7UGBtqBD8KkKjM6za3GhwToKVqh11hJQegz8Y59t7Fo45dbHAFYZikURj8vR7LGpu5jpAxnEx3MELUyknSfrs",
  "key27": "4ndDZmLjNwJ87HVAhqdRN45uPgvFCTUPfaxdFS7jmquRuWJrcT9NoRv28gXcQYXiZaqAEvPdSM1jAkAXuXp48BzC",
  "key28": "4bmEg7ABzQ38PyzBUEZMnH7rcJKK8aAhqcNTwvojUEUb9XwnUadzTuxu6zS767UpKnFotqAb7wXUHVRh1Yg26eLo",
  "key29": "5TBTi4dwfMyJz83CnQMybtxsLUKBxPbZsVA3GLs6HFRoymgqmFrjrWNVdpm1emR1XYqLcXWGdQK1t9YAhT3H8yYM",
  "key30": "4s24L1QrBYCiaf6FpnRe3bvQKHc9dsMTnE2n9Daa6wemWnEMRS61ZisbYmTAaZN9tck93zxxZfnLsreGU4vg7EEe",
  "key31": "5wa1Mji7Fxta9aH7Nmf517a8jsoEXS9rhWq4ZrjaUwfn4X4wVrGBLwRCgU2wMZUNTcTma5W8bVgtHDdqh5oVETfG",
  "key32": "5vBLzjWYngPb74eFMLDnqXa6dFJCcKL2hN6acicX45ynBGyUjRxVs7bvvKxYG6CUBvS98Na7LkAhDRH3rmAyfVtW",
  "key33": "2rpZ1Zp4nhgJKC4ujFUfEgFFq5tULRpHtH2CywdUgDMEvYbA62Y2a7UuwZyh2EN7rX98oAugxsSupnLH5SEWccJD",
  "key34": "5mbvGChNSLzLzjcpGDMh9QGtaTHXrWgS9HgfUoYdqZ3Zz7aQMpLhfK6HuC5GtyBqda63mtcrkBrTt3UuV6Fo735N",
  "key35": "4EZE9WtBKekoJtcsBYbWT9d3MHPdKeZjNjwHnYLMWScZfCjgddNpmUL92YbpCyHyJiKRGpEEWBvW1kDz4GfgkAMK"
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
