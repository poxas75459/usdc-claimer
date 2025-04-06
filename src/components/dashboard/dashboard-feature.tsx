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
    "5CUgnmxjVMZVE5em86f2yTiY5BdCULF7jHBWTU76Q8ZomuKP5AMpXu7PEBVjnW7ZAA88U5QPQ7DaStL5RiwXs2n9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bSoSLeHwPXbgnnmBmaFV4yC6nj9t9yQPLrPqc4K6Lc7WjZRujuuADFRmLtKf3LxBNkQ7ja2ZtLU2qiaYs9q9KX2",
  "key1": "3LETGQTymQx1EgtegqtgRzB7BZKxzXy1q8ujSEEkJYjVxbNuG5D86tThL3pKX78uZnp1rrbZ6L9Tu3e3ahnDrzGm",
  "key2": "4EbJ3PF5wtGek76Ypgj9VbdBdE89JRJ1vPQdypGPCw6FPjhijeCKfS7tFBEn8fGctnyuPDrHP83nNxCruD4MUzKv",
  "key3": "5mY9HBfT7zY4GaZutH4EmuTTF9HnQKNCmep8PYCKvRzGX5fiKCSj9uPGDrVyCRMTYBfkfcjB63rxPLciexTBxtxV",
  "key4": "3ecVxXvzGRuc8zFb3Drng17nSn4ha5GAYR8DhtFFaZ5FzPVVaDEU9rX2mECNW7c6QfgPdxtdfheGLsbb2zZxoeNv",
  "key5": "7sWkqvv6HqPAQmQWzcsig1rqj7tRRbUq1tPxLz2NuKJbpDrsEGQCPehHhhgQksa1N8JMubJ1ZCkwfnA1dehkvBw",
  "key6": "3TaWMzu31AnjfjUhiW33XHJKraN357SnRZw7s6AoXKx98T91cBDJ5JmzzDWxiH56MHXAs8X1wrXhxHKq7NfxamFs",
  "key7": "2pz1KazaUg4BnAy7EAqZ4KUhxCo74GSLiDV2LTSZvd7AqGrqchjzQdPrR3nbU4jfWYoQcN7NFgXrKpPK2FpdrGDR",
  "key8": "vYEBEzAwhswLb38uxXAhoJR47gvzVHz7WBPTXX1RNFBKn31HFN6b2bhNi8krTXSpUKdW5XNPnuPbvCgsgpHC7Tp",
  "key9": "41TDjsXzK442LfAzURX4NcJ2dAcqa4xPGbWE8JNGkLi3cyJCGMin5mBmcYEEkZHA658pLMDaXHihUUctYSBX72C5",
  "key10": "3K1Y4VzUGd84iRkp7irv3gMHPebEMim2NCzGszCVANjWMPWEnJeHtMw3nvwQTGjfcWAKgoQaBnmi2HgyJeCWmfS",
  "key11": "2UW28A7VQG6UzFystL228r65yXuJhQdgGsnPxnAKyWNeGjY7vk3yqeoroaLSXy5xW8ok21H78EgEdJasbT5m2Bir",
  "key12": "69hpQrwr1y7wdCkCGu2weTpAf6PvZ32ok8u65fL5cpCZPtoUwY613A7Doa5d2FrKD76Qzp84oLoEhF3QLWF9vrZ",
  "key13": "gpxYtQgLCiXsuCiMnm6nBwNVW1fjY42JNqEWk4wSqf7hw4hSCHzWurzhLyixLnpKpLwtYq96gHfRiXY5yJFBe6u",
  "key14": "4TQ4AiZDjiB4Eb8zprY8sbPHjZCnbbN3xMRcyko8gPt2ro5oeWf6h41sQGKDz2i48G2ghj5eeBYawPzUbvEwwR6p",
  "key15": "4M1E5FeKCZ7LsnK9aqevFfhP8akeJEmEVK9wP3FqoXGyWCMms6w7WeNucXkBGrtFJFX7UcPEqpyVqYkKuaBTACDj",
  "key16": "4SH28r2DASso7gp91sTaHH6pmrDiRsSS3WhFvKeB9ts5mq8mUrtgzBKQGF5D35ZF95qWPxSgbH9GUvaWTzt6RuRb",
  "key17": "4RhC9HYYAQtiE9Q6ewiNnPAFtxonujKKrN6cjy5B86z5B46obju8VWUNLkWXGzstXBryjJC2x3BSFisy9PUUZu6j",
  "key18": "3QQNwscMa9cRsJpQpByndmReCr3vK5w6rLoNenu57fNUrUYS7ExwgPwj5UqhQQhHCq6Yv7FdP2hL7omzKb88YiG2",
  "key19": "4H3AT4fSgz7JqHSutbbJzB4hcFqTK7MajsVv5UR5wXwgBTpXfKATfuqt5NRrRKVw4d8gxudwWoiJpBm2VH2zWDnw",
  "key20": "2UpgHsqREvdx3tdizCn285wZEeYFSqvv1UUfeYq4SHe5i4Z7z6jrwav48Qs6sxF7tUoZd7E9xPrMJca2mTRqr5N7",
  "key21": "gbZCuScLB7bT7QK4UDsFW129kZC8FhyitYmvJ4bLfmv8Q2RQDvamMwtx2WVVc1QLJaFzfZH2pLUzjcryaPb26tc",
  "key22": "2ySp3EhgAeiAX2ubirkahaHnD5VMxBoxgtJqdFBYSbRPgU7t7T4RaTbrVzifrYhpMEtT4yvdLF1DFxKCpfMDZRdV",
  "key23": "2d84PRp8xCAFWT53SW6yHFQVUCZwvf6tMj9F7S8mXHecRkd8Kv7wgC5dYQgZiEQ8oA2yaGTafqXD5cwLaPqWnbky",
  "key24": "v6atV9ehXtz8gpHouYnDmgsdDrQPkJW1ccv6wuZ7hkpidGEu9KH6GdoCBdtnbpycgAjcrXF9kEVy2NZ8jBUDkt6",
  "key25": "5QbENyeqRWUAciwc1yocExFJoL5ptEEXLCd6WsBPV4ukY5ZX5o13rHNwTuAi1kt465yDgdjeGVqLi5X2vSGjYgUk",
  "key26": "3MT8t3jDH69f9Z3PbqRmzA6Mvn5XzW7XbZWssRmYUbctrVqGZp1ERWxZzhbrFJ7KEnbT8Ai41S1dT79eTcAgJ3An",
  "key27": "2Zh6mUu36MXhfVfNRa5nkTtkNLCoFLs7GuLHzjWPA3r4Uvy8GRBdTe1o6iotYjm4y5Yd9ugTU6hoV4a39szcHjyr",
  "key28": "3v6Ha1bB62i8GZvr2xUq7jqKRxSaeznbC3hgBLkj9XN1RBXDn5wffFrkaoJTXfzeydSCvasUxoBjdNwGCULsToNi",
  "key29": "2mo72V3USvfPDYhRqj9RC8vkqqQ5Coi3Uh7MFvhxpQ81SXWAgdBt8acGbsFWuBBwRBZoZfKNwr2nK4v3QxJTej5C",
  "key30": "4tZadCRAaQrHVFYC95kGqNAzaPeAMGhUDj3mC5Ax13kQ25f1jKyg1Gj6avZv4sd9kcEbFy5wd9a7xsPsZmvwzG6y",
  "key31": "23aUi9o7TTsgD8znEFWSEob5JDgbAjnziypiZL2WNbGNCHT95pqmHLh45PJ7dHcuiyC7EARJFFtU19mojNGy4bz8",
  "key32": "5H7v8fCjushWxoBVRWQ4sw6LQt6graRThNRjnnYyoEbbx4L8BpwHSbhin2jtKnGHrRjbEs3ruJPRhKDSp9C92kj",
  "key33": "7B8G28G2HuV1crHFj1dkws65KoMjBRaYp8KGCHvu9swbZsvJfs5KY7HxVyk2Ay6yYCGSSH4ceZ5fo94KtH49h7A",
  "key34": "jA2A4QigqvDMxLrsbpkE9WmZ3tC3yQVRMUAdLhBGyYaizrpZcCYzYHxLXSAWGASNEYd2kdN4EvjcBLfAEyHwFLU",
  "key35": "2ZShHgwKPBfspnRsJMVgaPZX7qhtxhtip6AVSHdxnBsUYiXGgQ8d7uyRhHxsCKpkhgbXegyGKHzpBefiReKrNS6h",
  "key36": "2wiNoT9tBAR7SxtqqmNVNuQTLjxQ9pvw7Kb9AnCLbr2Th2JKirivx6gBq3F44nTq8N9cBoCiPvz2ZD1US8VE8Zbo",
  "key37": "3Psk9kWA75wUcXLug89G9jquUdQUwrLXiGnpDXM6M9hANVQgE98pcXVvRcmf1vNayhgQjHiMH4PurDBug3FZ96UW"
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
