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
    "2ys62fMLSuddqCVDPQuXcAbfSLScTuxJoJYaPq2EwhnMhP75qRarLM7B1mE2dzzg1MApYSRYCXLBLkST5TajYQ7m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sj6TBaDvBtbFNqArRSnhbhxHVZnXY6sdecjQhLbCqCwJcmHuaJNa2Dz8QHmsJCoMnsnHwR6U3nq169HLX9GAekJ",
  "key1": "2F2m2cs1iqkJfZa2fGDLtk3EA9Kce2PbBgjSFtpqSpXX3nzyoPb4sMeWZvPdwxPNdmuswxvcNui22sQteGKXQJLt",
  "key2": "4zZmFFjxF6aMk8Rmbz3TPF1RXUiUUa8TfMpt2HFBANjhtFSLUt2VwMGFZfGNzTnQZpUfDAN4VMrGgdwNC61ns4Fj",
  "key3": "2N25L1DMhAem86ErM4EB2rVLfpMhK1Cy5RJ9QAy2qHcwj4JNvmuzdvez7dqYGN7dkT5ttKPM2WPGNvLz9rVPWyce",
  "key4": "4KVKVVjcr8s663pXgG41eLzEXEzkGR8w6nXEumh6nuABJybEq3ec4WhqtfbpZsVGhe8wPorDtHktiWpJ7xVw97Go",
  "key5": "2aiGU7gkjgCPPX7ewpRHoEs5UqoXM8QndasL6TyUexGW2Rdaqoft5FPRefw8UNCW2AGHDNSzTZP1Dj4VVAnMqU2F",
  "key6": "4nJE47mWpHmhQJfk5wRc6fUHUz4eg1H8MGXzfxDuJvE3Yo5BbukfibWEmRqtUx3GB2z9WkLkD1wCcWEzNYgX8GtB",
  "key7": "2xEFhNgHC9AH6BDvy3EqoiTXXzc6BvZQsJXBXkG8MaksNSjFQ8uxrAjSZZpYJS6W2xampubfDewUpa9PohCBXAM8",
  "key8": "2bi5Zd3qENvENdcXKpME4kykD8eUx9GSpbuAqbx4Wzxd7AR7HypeYroJopxMwmopKGQ9L8zcBChB1mDQXZP1XzZN",
  "key9": "R43piHVcGeqQM84T7c3vjGe2GyWHNMAL81ETMYh8ZP1uw1JEAoJcwzZGHQALFxgrVWLHXNPAmYC37mKo5pMYG7B",
  "key10": "2YuRwGMrGgbXLyCLX2k9hFzpEbpkeq4BJ4jPj68pccbNzdCTruwrS8RLp69jb4NMPRUa4RThi42NgRPSqxY72keF",
  "key11": "ns7bNg6jF3t1Cq87Ruaw6fbBBTbVo2UHw3tEmFZUJBZwLPCnRcENKYGLuntYE32U2YEnKn7yTGuWJD2Ht46H2kB",
  "key12": "3GuL4DFPTfRp59RH9utpUAgcUY6zjYeJYVWUdcb9P6ygYi9hn5LHnSkM4JyZz7dPjVk48N8VUTieTwHiRrpwAhQf",
  "key13": "3njjVYQPRR8nR6q8HjZBBPQrAftouwduhXsEXSPjE34zeYdP2xPA5hQ3pUdjQuWcA5f4ot26mzq9ivSw4vxSix4z",
  "key14": "57913wQdi3rH5QJFPS76LXqovDwTd2xCdseNxViQGu1GFNTJQStJgQvtocVc8auh4g6hrburvHAkhAct655FhoeC",
  "key15": "4SpNr9qGVh1ygg5v7Liycu8oEXwcSRRowPBFWfNiFDURrVe4pngN9MR5iWt64CeL4cGjdEa5fuDTAH1z2PvkNuN2",
  "key16": "37aUtc73hy3WhKZdTJd6zkfW4vi7XKPgqyTrzneNDGjrGyvWKsGABrGJYQW8j66SyVFoopEi4agZ6xRsVfBcCFPc",
  "key17": "JhocKjBX7ZjDg3DteNPXRcr62Y3pV4d7JXVyff8pGENmNkSUfkKDcXNCXHXF7gcZqfSQtbtfe1Escx87Zb2KCk5",
  "key18": "4NwuvNgSYcAuB95h6JUs4ycEX1WBnJR4vcUGNqKXaNFNA9UtJDt9J5KDzBD657gkRz8nG1mbiPQjzZZuQVaJ7Gjy",
  "key19": "4B1aUxKaRpDNCREYHCKfTtdg9QLywv5gwcCn1BTzsQzAwht9DmRyFSTMuDnjHx82avbNgwyZiMUsAajAEjdwYruF",
  "key20": "2WLsZZFGJZUqdDZJjp1adVW2JFCWHHDsfpRqZspbeSXGRrvCxc8mz1xRPpYMsNhkeSThzr38vGWgBV88embXEdnS",
  "key21": "2REk7iwg1k6jhhZe3fKXoBPYowLwRBm81URLTXw5yggjQGYBRGwjt39N43pon841RJLV1n6Lj7z3sPDYsnH6PiZp",
  "key22": "4qhG9hr9mUzxEPymzfEYXYLrL6emqL2k6orX62BLa3yu5UV5p7T61F2gHD1scvydnZFJE71W392ta5Q4ohAcBF56",
  "key23": "454vzRixF9LzAXZq88u2pcH6n7xEe6TufZTfySEryo1bycBH32yfvZoyi5crXpaPNkXJbwMj7XTbj8cVbZAi7x2X",
  "key24": "2XXAaqoZzwVPDU3hgRtBALXSRPZD5ntUMP4cZdxqXJUgDkGn191ucWHx5xvEyApJfon3EEFDmRXqyyqBpTCCvqf3",
  "key25": "vdzeaeLz1UP4rJWHaGad55dQeTp31hHDqr6f5UQw8cgz1hYKRqLghXWygGnTK5D6wEWRpWrc13qypCF91Mo7z9c",
  "key26": "5W5nwhhvzxmDA6N4k2CFdtDtinff421MLqP6AYQn7NWxJbJq4NgBizVfDS4oVDQ4BJgTU5SdEuuFSF32TsazfJjW",
  "key27": "4ay8p1qCgPVjQ96161242aNukLqqRWcbmRQbhJyQUg3r5jqPa8KjSRQkK7HzZf8G22ScXw4J9SbH23Cw9WBMw2wh",
  "key28": "4KZh3KxS7Nep1HdU1TfaLWiQ3q8EdPtZAf5gx28W9VgAw1weQP2JWX4y9E7gScw8nZ5jaEpLqQQgUd3UzFJ6ExiE",
  "key29": "3vwA4J9exLAEnYxWkd3Ff5ZBNMWiLcV3u9yQtb5FuFMMjUpzMj4mQ1jaQENcSB6HBHEuqKM2saR6zKDMH3Pcu4Vg",
  "key30": "2vVcaKHWCdKTNpMQE22FHLNotsFF6bToXaUn9KNpKwq4qDkrsymg3AMgVemgAHQukwvF7sVPG6cHufFFFN1Md9cc",
  "key31": "5WEz51FKirvbg8NJ6HedbUPrKA1NWUBEPK7A3ekXRNcTkuD7393kiTTSGbaG7iY4m5BmQexdRhVdDVW7ZDaQsDK6",
  "key32": "5Xh2qZ2CxsPrZeRYwxoqKZSNdvQf4mLghkG3a6kTtdfuqJZDcgRkR4H49NkGhZk3UVv3putHZZT3aqA5LHTNU7gq",
  "key33": "4RkhAkUE6TKvhft1asjYVY49UiWrqA5fXTjuGoHuLYGyHfrFjYpb3pVUu7xi5xPztmNAeWoSZo5uJjhSpdDwpxTq",
  "key34": "4DBejTXJxYMmqju3wpg3VZGkbfGQt31XzzUECcV3LLuqA5KhPbY6arDkAYTgDraSpWmp4d9s9fdU5Tf1mdagCR28",
  "key35": "qVRpeWkQ6tquvEeLUmgBvE63G6W3ezr4zZHeGLTtc2k5eQ72mStJXL1UZXKBpEWCorx7kv7fEQ2ogBUYvXKPjmc",
  "key36": "49mByxxZJYDfFUh8ycCgkv7Db8Qi5yJv8EyXmJrx8Uvb77nXvqNzhHoaDLjh12QoXGvrewwQrycQsp51voNTGHn1",
  "key37": "b7Ej5f3SRLfs7XydbfYwUuKmz9j6sTbX3NcB38fdSgtPkpsNanM84LpNuWN31BqKqf4nqFVXxnombEWg1tLhNwG",
  "key38": "33Y5wZQ9SbNLEoC8EGuuF7MJz6t2StFPpqg7oViMSXmKs4biGs9VEg5PcdYMe7Eq5QMQtGDCr5aV4wf4722Nw4KF",
  "key39": "mTYw77rnVYo3x4YVK76dKZdnWw56WUzmCvEhvbnkzDXDoeVnEZVJsd5uVWjW1dTHa3ubaBMKL3uf6aEs1S8njHY",
  "key40": "2ejKdNc9w93diSHnoViwFbFM82bo2VY1EntYjCend6VVVgZwpxWzWbRJ3HospFvr5YrJiG2iZ2TM5Ga31JN8Hah4",
  "key41": "5ETuCmVhM53XxJkZEhtDeogKyXd4w99WrHf9HZCRHUadeNh5696AezBCpRhQCB5udDLtQAVio4FpwbXvfSntPvQ8",
  "key42": "5BNBbgubc1fF9FwBeaggMN4mwUbz5HnW3MoiSda5cEicJhvioXhzC7sYy1WqCiaXTnjsiZnWcJ2QAEAUzJYbbVT5",
  "key43": "5XgSf3FrbKKgREfJi2mQJLkpCWtFnDff8Dk2yCDQDHkqfAQkT7peojryQh56zgog9LKU7xbAeif9FS7qKDpHmo33",
  "key44": "3ghmPH3hPQFKeSSzB8KCNX3QzF3VG67dTBTNMrZnWMfsaRv14xv27wFzg5raQtMexKunqnxhckf57m1SCHNyExSs",
  "key45": "5rZxfNz8PYgnnAGDyxzkCVUXp4qyqqyW4gNSchgVV1MdTJhbrVQtPsyS6R9PiZv5ePRRjhoZJntCAUMGEHQN9Thj",
  "key46": "2HbmLRxzritrN46dg1moAAPW1cmVjo8jeD9Cj24K1USc6SS9DFPhi6MXiy7PqACkMfifTXY1pywJq7Z4spPi9Y8D",
  "key47": "3Jnj9rRbxwcPyNr35YevPzdHzKY6nPG9m4EnngjHQkeeYEsqnBzpe4x6KX23PAeAoFLcMnT4dtrFwAisgZjQSQ2a",
  "key48": "5uUFUkh6BeRKP58uV8VdquT6e6kfZ9uYjegGhHoXC448gJwaeUiRqjPiiK4scm3GC9sTBwcJAVAJnppozr6KzhRx"
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
