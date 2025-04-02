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
    "yzM5RRKgetGBp5yev2fzSkKpGN2xgUr19pzx9Ayewtzcko6F26zLbTndjBNbWmMzg61rUhdKQabGhZrqmBuokxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m4NjmQQ7f3hu6ZWy9W54PSfFTcibPyZdyWY2jCMkXJzdDZRfkMPoqFo35WhUq9wXTNYCF6bSSU525Xa5GG8Ts1z",
  "key1": "3HJdbGvU9GxveC6dmizRrbxPZFN56N1RV8TqJz3CVoQqHdNfVbyGrigSw8qiZ11w9Pr3jbbc6Nt5SBPEeqC4JWmq",
  "key2": "5wN2SYcXA2W7qMkug3jEPUK2GwfjHJm4rGaBg8kRsrV5JHmtEJDvAkQS2A7rqpTu36V9fC1118x1uE4uqaExz1r6",
  "key3": "27Db9RqpY3yjFCuxWi9HnG6v2xMkEwFrkQiaSWsaAMBcScr1JsezHd7kFkPfFvcc5NqaYnpCvJrY7ZcJwcJSJpAS",
  "key4": "5hwtBjUaDS6xcFE7DCPS7ehtcWQWa7fU1n7ogzN1Y4Cm6QrQ7Lk4Q5T4ztWAACsWSxztYup2wZviZ1CbT1z4EuFY",
  "key5": "qwVMQrLR1Bc2Sdv2Zbfinr4NWsgLnFjXocxHFFwyRNm2Yf6nZfqNrRPjEAXXFNUaWryJPpYWvTWfA7xrAAdNUp6",
  "key6": "5vRGxmiFXzmbArS62kiTHWE85WRDMhWMLy1Hnoa2KVLZbKB5jTvy1jzy5sfpXjPJRe6CHH2bpWCDR25jSRg5MEHc",
  "key7": "3kKTdmQsoijH4RuDFkxNBmMFARY6SZNGgGcFRGUn6fHYpzvNUCmtXcYVZzDXV9Ka7qVRmvwZEKLXt5XkB8y94nB9",
  "key8": "5GvZAKaTVDsvyhtTr4p32gkRzYHqsPMeWy8fnr5gquk43guiLS9BEDREodFJpYFNGmpeGwHNkWoWbz3VBGphbLas",
  "key9": "mTvG3g9Lr6v8P1o6rVgTENnkM11b1jLW1CU9m9eg1cB9rmEd2xPj9uqNLaLPunidcBkwrQAQDoW6UUbTWfFAHKi",
  "key10": "3uQL2nJN6P5n1L1ZBS5cGVypHmhcmkW31FVAhaMcZ8fDcLqfRtX789JV1scjvnhGb77SttDoowMpvaQ6sv1pZHfM",
  "key11": "3ChydL55y3sLWzLpuZ8Kp87618SNmvGDpQv7ExTBJuTJWh9DaXdyVbZJGkNy3rAcCD4cJXx1vZUwbwQ3c4W8nfQn",
  "key12": "2JtcYyZRpocBuSkMNJkdqLzVdyRDPwQ7RbpbwSXcu6YShnmKFVrCc7yPeaL4tY7b7vAP39afzUs8H61RWSHFqsrp",
  "key13": "2FZWZmM8pyduxSLKygwV3S1pPJfv47wYm3m9MJCYe1FzE81WKqNg7smmJdeywqsRFcktazcjgNS1bmLfRsh9pswC",
  "key14": "4BzbSoHtofg28zUoVd5AXzhxvhDz388RNGLHpgZCdhMp7YX3RhMv5v1qUBgCMsfWZmBRryE9w2wcsyTsJfQymXo4",
  "key15": "2hc8H5pSTisApTRLoE9t5ArvfFvJAu7sW3eYmTiPzK3MBM3ZsHbv26Fdjg9GWAUviJ9feAayJq3SHnPi8wHxexee",
  "key16": "4LudgmGj4wQBwiVUShoyHkon722BG5MeGVdYEeUnaNN5GQpbD3wVsHU7wZ9NHYCwK3Pbhg3TG1EZ9gh3RLp5cUM6",
  "key17": "5aKBdNsWkxxifoeavyW5ccd2SwuSEMy31YxpvQGBkmywmCWjnDVyoFLbX8wPxV4aEnqo728EDH6GZ7VGj17WymUL",
  "key18": "5PWXBh7vKjiXFomsCM96mNhCvp5ujRmLenXAkNFe7LRDYSXngF6RCciQp6LQvSJCkBEA5DrXPr6Xycd8Q7DsncL1",
  "key19": "4Q4jjFR3CWywKFZcmrTJJCKPtdJFbxgPLwMxYE2pVJUuD98rXpRFQNR5vsmw6tAZuTakzrMzyZ7muwh3DeUMwkzr",
  "key20": "2BzfPqrWkPnaKA85513iULYbzGigtPvsu5MSwqtwyd4TXzbzo2JGonqZfz4f66nkNVcak6RmUJVopQbgD5xsrtUV",
  "key21": "5a9TYFAuNrcgJrhXtcFVp7R98nDwkyMSQ8zY5naHX5Py5mBJnQEGDShAhXSTUpugk2YHjwoEChsnFA1eZYopG1T6",
  "key22": "3cEzEBBNve98tBMQyRVCXF2KuoRqK4kZtBDwtjdcQxnDDUZprzAYZYrxWSVbwHGpMELKwiahjCDsGZ59R3CSRJva",
  "key23": "3LUVGA4GtqNcCBPg187FHHJTaE8YJKQNmTmErbm4ECRDhqLx6Z3ACA3UJr7ihA9iiZXacy9R2u1zRPeD7TahZrYU",
  "key24": "3pNBkB5TEghYv6EHEU2ycM7GddPg9ripZXyZwNNCJM1ZYzC9wdM2U2gzrgy3t8Qz9JCsxLvbNpEVWH3GudFfHLfJ",
  "key25": "2CGwT4H1GUJ6MBQDDNyDQuTTY1oUk9h57S98QtoxhDo8MadRrWVDzi6SE7oZiiyoeq2ftVpemVd4mXE1Cp4m68QQ",
  "key26": "hP4Uutx5Vpo6XXGgiUy3s3kPcYpb3AkU19b2PtxKihY48g3DqmpqfTKShP2apTeCGJ6UQHQU5nSDeuVHecJ5K29",
  "key27": "rra1idDNAsDcrmQpMqtyeKZPFqFXUDwRWES7Xnyiz6wd1txULRP76Tino6Ew1De5epwcHUDQtf685pYrKk9B8YZ",
  "key28": "2PmZutNcCReKzJpAsLcJtCueyukdjbdjsNFifMbgyrG1xjooLsqboWMSYDb3AKNc9pLK7H96URe9tGv28pHw2gSz",
  "key29": "35oYFxKYKBW9k5w1PgdXMPNbYz35s3HVqVYgcQk2P1SPG7kEvoW4DgFe98uVypJy1rknwsbnWMas4PwjnneMe9zv"
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
