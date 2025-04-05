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
    "3h5sW3myYSAPhPVmNoSQ4eJCmrCrd3ogMYfRyLGiSWLHvdzxW8i7p1tU4NsT8oBoWexBkuApm14NNXHjpiAhoEDU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vDgHmeHKjguVZgLKFcUXuifvDAobUM6rNkqAkzg4iZHg2StPhBi9HYxd1AxdLpC1iTVA61J2KwBFoRcgQELJMib",
  "key1": "5UAKo48oTe4qor9ZP4pnSQLhUnmPHbUo8w14FU9S8LruCxirUMVjiy6pp9HxUoT1dNJrA9puq4VUscVaHNZ51Akd",
  "key2": "CkTjupsZGMFPPTWcLzXyzvZYsrCWEGBaS68yNLLnWMJpnzctUrQt4vTRSkmEbCa7rzDGbf33UvAVsJnEfgMUuB4",
  "key3": "3JrGuoA9vw4sR4GXGwVusW8hyDZDz8pDAQ178q9CVG4VKtzhopxvxiHWgEHuXRsMrVPXh7pJxKaAHg14RcsF3vzG",
  "key4": "3csuHKhbZZLZn3cXgeqiSneyKFWhSyBuRaXokCqfeBgNKXu7A94EZvsKknGTqSdfJALx6Q6CZrLvWJnGU8URqKab",
  "key5": "3JxkA1WhYKg5HJr529732Jhoih5i7ADDcRpinA3nQPsPTiJLjKSuhnJr9wUWbHQUFpG1fHwzgGFQhuqAQQ93JVNB",
  "key6": "3JNf2CVVPJ1aC8LXHZesaCgepsueucgvoQEe87F998hB7CjeUi8Pk2jVAL9j22wbZqpFcVmposuznxMojQTFMcva",
  "key7": "65nqc1QxX1N3euVzHhjVRXkfQRg9sivg613FfJqNY2KZznXm1ZyA6MqH4VS9GbGeL8GWzwoWbQPjZ8qqRQYU7nUF",
  "key8": "ft5xjkpaQBbir3jk8vsYmkxG9YyYTyuVkvouuc2vXqTSCRgQkDDGb2AUzyZ91JgMfQPVpqo1FgDeVN8KE6BTJjV",
  "key9": "5Z3nhvSJPYiEZtqRR7zcBSrcCyuW2U9sN4Nc8rNC4fYE8zd5yjLKbVNRvr347giwwsxNzuSaapGmNUQd7jRfVTs",
  "key10": "24rwpksJBP3AgnXVaJtuztCnrFrLNKb9FhqixBrpLHYxj1dQq7h71FPV1PknNr7MrQ6aNNZc1t4Vo3YJK5AcMh8z",
  "key11": "3SPZknWujUg7TgzPGzLauhLx7P5oeGfuqTAtr6gFAxnJwaimwvgRFZ5i2Qtmgedp626pbFCvyCetnz3fF9dFYHeY",
  "key12": "2VYTaMAvZH95BC2bWH4HyUfdX69SVU7djiaJLGd6TE5hfzZgGp9VKARud5xjCSZi9vqeuu4iPDBrPvMKfQbVCf8q",
  "key13": "4mgXfa8FWwCwiab1VCyVeEEPcHcnAPaV4w2UKhoe9LmGL4NkbdE2QoihTr6fmMp8stfxrRQxE4h4R8SPwTiCsBYL",
  "key14": "2444n58GXDxgKsipt7Ljjb4rJBNeLrszgRRNixpb6Seb8op3ViKnhvCuQA73eAh7ZpTRJwniuUAgdFN1CMVfndYy",
  "key15": "3oxG2unBiBUAp4qKVx6oi5RnRQ72V2U8ASZ71iedFAfm83eaf9sUDu2di1wb4KhmCCSnrxYKMfXuyDaghxd9s1Cj",
  "key16": "3tRK76mH9Zv5rybLCxkbkCZnp6miNs7D4wv8nztCZaGrEH2BW94M7ksrnRXfjXoKtkFm42hMRauYzpbY3G99uyeQ",
  "key17": "23PHpZ3Hmsvwm8UXxiBAiggzw1qFDKw2REqBWDEf6iFo8Kw1TckMqCGEDXgjVdAD7nrSrtQvoNBWnxC85bNm4vk6",
  "key18": "2CQBN6CPQ1uqbrcFSE439gmrBEs7Bnf4JERfv4bFByKpXDaU1ZPajcKxNc3nijt7GeV2be6W2AYrCKiP6VmExhin",
  "key19": "tUHqDpZfGRbbJrBZfqH9d2TjUGECwTFf6gEobEzfrpzyTeC2iTeVRKXcbJHCzASpW2Tbj9mkvJbpdDsUntQnkiJ",
  "key20": "4NErmFqkkjHQ9pm19J7mfwuv7juwfSBEtjW7FwvTBw4HRn4uehfoKNmUn4GPfAdxd4HnsmAHfXbx5L3GvJ5XxsuM",
  "key21": "4KykPXvhZMbKPkJihDFziXCA6LrTrrggXBkbzHzHpGP3SdbfVRaTAR9ufeT4rJSrsmiGkv7ZmNgGHR7XCfgyrapu",
  "key22": "4Tj6rMVLMTw6nPZrAZPrk8KSk4eURPbRwEuchbahkRvhtEr4dtwMuGdvhHVPYdkTt2vRy192hDuyuMLKq4uKBgYE",
  "key23": "5jVyERx66e6yVaTT3ux97mvqYUkkgN8MPNu4YMAxpZordZ4LTVidVDJQ9T11bj3RvXm8bibGmHJPVuTbwpY2y9tD",
  "key24": "2EwL3a5VpjrgKTGKRb9JNGUu2SoiDo5vcqQzcz1Jdm1YfWTpeYyzcAevfR845dA2yzCEMVgVmREiWPpQS2dXZyrm",
  "key25": "5rxzDxPFk9xrPQc8ib6nsbA6Bd5NuEiv94zERQPVucNLEvcHeEjhUm9f436eVty87zi7MuYeoj3MKD5sJEUqiGwN",
  "key26": "3HctKmmMqMepPLMLVvPE8WnK9RB7UZJzYXx1fkymNBHHBTfQKGxbLtRzn9UGHSqac9erMJSSwE4yPSxQmnecwh8k",
  "key27": "3yPVY1KA1bbuZgV2pRPhKPHyn1DNGG15RxanLs4rgLBSj93bZXzt1f5D2bdYr88LDJiFqkYmVt2E2echXSq1J3aq",
  "key28": "4MvL2jFYquPPKHa4oaZEybuUhn927KUj4iaXNie5mwGzbSoUJ9PFw317yuy6ZmiYGmdRio5JVWa1F8bxvXH8zRMY"
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
