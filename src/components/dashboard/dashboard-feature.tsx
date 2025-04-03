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
    "3MqaQd5FNgsGa7NE2Rt4z3apPwhi6XvQoSe9ZRMQCrWxbU5QEgUgAJFqaytQiN5QmHgHiVQkfFv677TP6M65aHNG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VdsJtZQZH6ri7jpPRMtNLNwCB3GGQpdVk5m3Sps9UCoAAMwEXuFnNpJiWVtid28tGW3Y4wjjh7CZQVSCNLGqnuw",
  "key1": "655oz6oNLHYZxZrXKJX3gxFMTR5M86BPWBjZqzedypjSLWTuFFn4S9rc4aXBMqbLwDrQPZFFDXbcZPdZHnptqBcx",
  "key2": "3ZVSaF21KnLiE5JB5sr6bChyBfW8xcYHi73Xq5YzjB2rZ6uorCYKRbTJXWhzZE56fNPNVDLbjJBmbEhHSnVriGtw",
  "key3": "2EKahBnS35o3qQ4srMnMjLRH1bFsuESaeUTKGxCJi1De9kSdVNYDzxDVa2dQS1WgPUXKaFcmGtZKnZ2qwfR7LJcW",
  "key4": "5grvLUvGKReytwJfJs44R43uUwb6hW5m83EWxXJZ3srnrU5BSx6r8mMhtLb9AtkafTYGgk24ao89JTfTLM4vys97",
  "key5": "3PdjhjcqNkVq4GRrLJcrYByryLL1MBUUDTgT5u7VhNrvTdZrowaqhxjrRvuqVkaQhd7R2Y6uvEVaVwQG5GbBTCCh",
  "key6": "m3ecrQqSWDE7GswQJwmq8h3RMA2og6pRZo6zhvJ8gWJCfTBQKapHNyqse2dbSPYa1aZBRKbFuYU6NBFNdW5EkR5",
  "key7": "KGRnZ4wnFwPJuQVXA9foxQjGNL2X6Ks35EekhdE7AfQ36MNYEvLTxzhRzoLPQzEKthdTiBsr4z2CR5X5FGytcd8",
  "key8": "2hgqhZSRcsp7zrzQEshQLsVc9Uf2wJRpb1P1Q26FeP3W3ZLU6P2fyiwGp74t1DmdBPbaccaKNoNU6ukYYoZo12VY",
  "key9": "2MWw4w2zyU6cyLLUpgDC8DF48z2K8tNmtbwz5XvTxNd7n3TfrN9pBNRg3b9U7r77m5ow38QVurPYpyZBnuw5Tadu",
  "key10": "Qbd6CRJo6Q49auMtVkD3s2RtYEcaniGWSigNHm8tiEEDGdhHNMgV3wkUzSW55PQAVJV3KoNF4L5W543XbZwMTAo",
  "key11": "2fSU6hcWof5b1CJjET8RWnpTjE4PS67nW9reeYUcQ7eYfe8qeX5JJCbzTZguLtFA431B1X1RWwWPwt9X88AExoqL",
  "key12": "2y2uwsbZ99rNj8wZJxBXBYAEDifDSooWxboNLwc3TVT9w9dZo2XnRo2PFr6DcBvNULLb9gJYWez2y8rUX2c7zcby",
  "key13": "4zkPcRZN48LNuw7SQpCRFy4kMrDi5hLywgVwza5DAGKLQESwSAB8b7KTeE6Kp2jWEGZCtEQayuW54XxavzrdJFZF",
  "key14": "3EYWtomS7J9voJaqv256UDxKMKEraX7ET27VVaQ1FWGP7AaSwQuaoehXYWVYvYDHqLBCzK9KCDR8TVdxFPmLrkTc",
  "key15": "4qBGYdiXVzqcJtLxsM3ZmVpeMPukyQYCKjsmT4T2C2q6fQZQGP55qxtvCRzoMrqAeACYT3KZgvLUaBtuyJPifruT",
  "key16": "sHVrPo9PBKaevtJthRgS7vPEb9PpyYMTaoAcKPn13Vtxz4Axqk47G3upJw2czdtPKpD44WqKDBUjMCGYw2kM7L8",
  "key17": "4G8P3jGQvKCaZVGX8YmsGeoojPQm7iuKVrM5SvfHGYZTmW3P2uJ6KtFDHdYZVzb7FtkQ7NmgTR8uRNuuksCSKcjr",
  "key18": "HPz7GjUKtSH54coKN6JBBooJ3mvgArEuK1EYyGKQ9ecVadrDMkjysA6qv6J1dERp2uzuT72vCnMqtMDYhQFsqPb",
  "key19": "4aW3uxompkzmhUvZDkKJZJ6FbvwHtrqFqUzbyCEg6T3r1FjLC2CbjG65cZ1rCL7fKfU3gNYpMuKzzuR32xkodEpY",
  "key20": "a3i7pAsLSW5puGZzEpV35FAKN5PoPGK64h5rESroGKCztqktmkag81jBC3eELTHJkuqjJCpaJCqAoHux5gZtJf6",
  "key21": "3yURBiEBGPEoy8AuHqHQdyEocsQzobrPaKJPY2GJv127ifCpLSbNNFFXB3rUh7bzUVNT6roQ8nk5bCn1MxqKfqjU",
  "key22": "5PAAjR7qSNteBD2sqMvJg91fJvz4TqJfJHoGHXNrNmUWMWgmTsq5icxr2ZisV2P2FKxHjTZ6a5sTJ75TYauU2273",
  "key23": "58JUXQGo4FzaWD8oFmjC5Fey9h9BRL5roNxcoqkvdX89QyHhnt7quf4PhNaDbzff6umjA9v8Y7PTgbLawwajezrQ",
  "key24": "2fUjqTvEmwntns5PYtV5vNUAmcTJLRM1RxtPEsPdn1p3zsKQZW46zv1TSHCNaY7oTMf2ohWzVKBavBinJcjM8G9x",
  "key25": "2V46gVERUY3kU42wE19VyqUEeCQHyEytwGU3qTMu5hMLY5wBYYGGTvTfrUSXRkybYSdc1wLnmRFoDL8r5ZFtTjUP",
  "key26": "2pvG1r84ybrDUn42PufFaPmNQvZ5sMxuJHCAzWNZLD6zNA2B7PTw6wLyD3NNp4jQ2CUQRZncQ9sAwP72YRt6EzFP",
  "key27": "39zUNG2C7pKhPZBp4FmQLFyS7sHfdhn1VEXHuTpuDbVw6KaxrVznqxFgfN1XqQhoaaE6cfpZUJkDgyt699srrBzs",
  "key28": "4EFoZzeXq7HmJg6LaixYCp4K1NWgVBZ491qmzizbRGSfR6cMU1WbUskQjoMpx9jk45RscWtnEsfE17AWdS42Rzbe",
  "key29": "317zfmBrVLhXpbmFkQgncFgn18CeeJE61HnHnrByLnj8kuWLX1spSzRHMvEySDHCgtugP78Es2FL4J89j6WrdaYm",
  "key30": "2HibwttZEW6snwvj4AV35Dck85XbGbYyC3JXEj6vT8EiN29X6yG9avAbK9YBVRTebZgTbZ6UfAJTVunvNvxaurHs",
  "key31": "4o5cyjxAjJhWAvjpaXFfeTj1KzJRWmMw7EAMTdyTKFakdTw1n67ZRDjPZxn8d7UhhHjtBHRzbDoVnZDz7kY9bCRP",
  "key32": "3CsLzAte7hZBTQCbipD19sExyKMzqMvDTiPemNad5wgMwxYodr9QJopMkgJgmbyb85VtSF1zCAPDLca4Sqcp7ij5",
  "key33": "4XrfyvSXaT1KH9B4sva8vTDnDbkKjMGQELG5aiocrhwFrDErz7DfLXmwsCDLLTqmwRwABrEm8V97g1Mb6KuuaTdR",
  "key34": "458YCdhfgiDaSaivvPKsRKVPH5mHg2RLfScb3aiWiPzjaugNVcqLgENwCdQJxmmADgGXw2cEkRkKbgstseAJSUPS",
  "key35": "5r2ux98KynoQ7oQwZNJfhesmJd2fz9FvpWTe93Z7aaZbgZAZbZKmtsVyDXpB8r9YAwfEygvNBPbNNRbdLcJougXP",
  "key36": "2Y9CkRAGg9m7ZShuzDoeXPQ8PDf8nXx79er73WD58QJ4R2Qr8ko5oM53ULLSQ51Yp7sLgJAHRbv96Y7szJPV6St",
  "key37": "25BtL2Ku8hdisw3mRTXdHwM1pyx3ufnRXMPgTxJ3Bi2ycbNhZeEXvaqbHqKSq7pFYsfuDPYhV9R94qsGJ11X74kK",
  "key38": "5FyLYeabVcqncYaDCL8c6kZ9R5Wf5manZRFdauvqexhFXkgh2LA8BeSdpLVE7CxzuAU5CCNhUcvYVk47RcZRQoTB",
  "key39": "3MkcuN4gUJ9a1pHzPRASo1obafR49qdXG516CLDPNEhPAianRmxu3dZqffizJPRP14PG8VH3HHhoWxj942hK836",
  "key40": "3RFXxDk7uJEBCN5cXcNo4HmQzuda5pLc45ddrLwgcDT5iQ7fSYnnCFw6oJet6eaNMx9gYFHw2Q8LRngW8eFxYJLe",
  "key41": "49kPjwpb5ddj798JEzE7qgBg8uTamH8MKg8TB557J6yYxw5F22S3oKw2NsTHGL6KfvJZ3jCCp2pGnXmwTeurhTrs",
  "key42": "5NWFp4hyuwDXxSRE2SQ5jheagoqqKZCwUbKHg7nqZN63Q7gHKfcGfGxBxmEdx3xKMp8uxjXmK3NRVHQay9Xr5hLf",
  "key43": "52tdY9L9NT8sueRicGufcyqErtuQa44XvRjFMAQ85QAJNNvxFtsRTsuQkDN677TXKKfExCJme7kbVXox9mcqBpfK",
  "key44": "44fyg5W8ssF3wXbfydNfh5XwQxTsFig3PtqKmAcnMfMJrYZRrmMyfwU3t4jiTJnvQ73v1jYKegzZ7j3CCcDUHRHe"
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
