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
    "3AP6NTfkv6nBXWczoU3pRxkdyFE9FQUkdQJWVhL7CBQEecPzzdKnG7HgCBuA3YDypzNnBGtEi57aae6a1Wx183XJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4195arxdc8V3ScvLi6N9pZro5q2GJC15CnnKLmPP3nBxzEbGfwADfkZgbUn7WZw3FW9VKqQVr4uUyrEXgKR77h4o",
  "key1": "FzZ6YCmeVr4mXdHqVZqkPZ4Az3d5igiNd53htBFjc2Fj9c3yBGKAT1iu8x86C9YmGEdWh55jgH1rTcfDiDbdy3G",
  "key2": "3FMPoYJj8YdvnphcyfJ2bfumitboXHiphPex1RpTZUp5mCoDEYPWJpnhAyaguToBYaHzHxS9z1rtMxhSU4ewgSjp",
  "key3": "2Te3KDLmqu7iPUALTVukXCFPY9y31UM1gEa4ayrbRnj9xzRWop1Gz1qUkktEZRraEDMxJdr1kDZRL5pt69qP3dGU",
  "key4": "WT3fspioR55gWDvNHqzk4g1xGBk2MtJin5MY2MCawFsPHuBRK52SPo9wEqxKLThqSenumUVmWtcxyAyckyqCURv",
  "key5": "2qLimTuCaBTULYeuxKBwgU2yNYoFz7HkX8Kz3ULbAM4bUFDLPRAGbYaRDD4FUqsktGsxpYgnPoHKDYe72fmBTUcK",
  "key6": "McjiQyBPVdT1jAtv5XghhP98DsNRL9PqjiPH9o18oPxqXixk9knq46hdGCzvahYqqe15cNM5WxG6YBfpRgjuRem",
  "key7": "5Fpoksh6ZaBhoGCtZiMdnHuAG1kB4hm4MQWEdcQS9hxoQgKB24A7exzaR9rnHL54qXxVzt6yCvh3thHU158YsQAK",
  "key8": "3YP4LAiKjxtAbPdzmvgqjYxBuPREgiDnfhd8SnsCC74Meuf8ghufBFTDAnw6j1CBzs9Btth5hUFEjDzwt5nsoDMs",
  "key9": "2XNVsxEoiNN5AyY3mhYoba77w1CGTMsDchaBdSeArFwGBRxzmm4nQk7PMh6dpxKHG2PSEg8ZousKRXmw9QWityiA",
  "key10": "2BkhAzEGvxD87q9Rn25qyNQoRtUNMSXLniBgrLfa5Fjj7FwxcBztbSqFkpQbA2xGErnXahXfGLBMxnrMt3qvtrTA",
  "key11": "4PqjfEcrKWB263hqmFSW9Lyk63QBoEbzFKPsHy697z2uB5M9r9LGKq8jkpYdqJWZG3jj2Y9y1ra4qLdN8NRCos12",
  "key12": "4B4xyYvP5Tu5qtgp85N4nA5GFEQSRBZjYYxqk8gmPNhUH1pbfrvXZgxeSq5Vk6Bk4CmyttGe1VWhsK8johWm136R",
  "key13": "2ZF3eTqZJxjYvGYv29xgTzJemi8wb4n3VMEbz5H4d2SBRFrXBAzrCL8Fgb4HjaLe3VhQoehtNgQCwVRpwsaWRdXi",
  "key14": "419xQFXfcXwC9Nyr1NdgQxmH8fQd3XRrZbTdmw5DDgrM1JbzDQFnykjMKh5FNiJYPbX4YckgvGZdXgwPyHwDwPB8",
  "key15": "4WoqqhNCvBiJzmb1YCKW4BDxbKJ8LKRRZHvZoFJuHY737zoBMUkf5tV4iuymZhhJjbLymXspaPfYZ9tPVVk4i7zJ",
  "key16": "2vo1YeDdEstjxP7QzjQiLseZBpzaUvx8CyQGHhsrNhPrzspR3mmYhoghv6VKUPsCoZN4UbZCezf6zecbwgy1BFR3",
  "key17": "4fsrSFjJcpsxcNZVC1KtihYbeHrNhqWJZ7a2GB4bDekUJ6Z2ksC8dqCUgfJWtGRWLw9L4qFrWyKS94ZTT2xoKsPi",
  "key18": "2q57mQ69WxjLHPS4vVipFjzue5fCNcqQgi9vjm5FGL1KMKgwUmgz9QEmBtZq7JnF6kPRHu4bypqPUkhVYCPqk5c8",
  "key19": "9hbjVyXtbGXZwvNwJTuqsjNqxYeqHzGLqXqwyxWVwCBpmdq5HDbKWrgVdGu5Ls6Y1wncoPd4BUEhcjb1WCgA9ZG",
  "key20": "51QntUbAARWLm1nD8zJZTJSyjCy9jUNFvsEhFfb1nJQqoQqxj6eRod19Cs12tVoF435iycXtaLYaogo8dFaBo7zb",
  "key21": "4Ln3S3yxh1QkUrXRCPiiEu1axs2XQXqwPZ32112YTPAPFeNxgXYv5V2TeXPD1nscdb9QkngeDFZXpJCYf4iswzWb",
  "key22": "27SVbZmWHd3HL1XH3QUocpedFx4NHJgQ7vAq6tcipDpVabj1J4i1vbAMAR13Mb22UoChMFJNWKs2EEbojKZdjmEx",
  "key23": "2o5qJWCtj1Zh6LMYudLkx9BFVz6txm1vLuq3GoenZARPckbs8mRoDncrZhGfmxPygzFNYrf2srtyMMz9RdV5oP9f",
  "key24": "5FoYDtFcZtynPEYEFxY9e74TYmfqpn2Dvjo79JxRt7u2dRVoQ278PfkDLKESEdM84ETreNzMS1DT8aj7UBRomPxS",
  "key25": "2ateRDyAKwbo54YcV2YRtGDMwMeFgWTnGEG9CtoQ3tmBidtqYFgobxLwsRUoivh5MxLjSqZfVEUoV7RTRM2JPupZ",
  "key26": "2gWCVLLyejEbCEiTaomc2nPHewiKRvhNHzE7y3HcJQGtmniPYzC1y1qAbRg7FfoMJSDEe7EGeJ5EgVCEnqc96dkm",
  "key27": "3gnNUZw43fbUuRNZRMSXEs5cYaNTUVbKjSqvD5ThPqyx8qGS8Wcekh9dwsLvnJ7W817V2xBCmKvJhypstLFVgnwm",
  "key28": "qE9ygT1KKMCcQ8MaSAg4qSU5ofU98A4zuAufqyKxcGmLmYQb8NGVYeXNAj9Vo52HAmUX8FpSZhqheLSgNA7oyRA",
  "key29": "4szSeUvucLuPHXXA72zTgTwMFCL1Ry2iEpjKHxrATN2eEMBU32ACeRx6fNYcx7ofHyHJZQwNVeBwZPgZrY5j5kBA",
  "key30": "4Wmrb8yupwJEhxWy9jBSBqUK1vivZjbS5pyj8etokh9oNx9wG4YGGz6Bjoaq8KaxFQi9qCNnkEHUByj58NPckZz9",
  "key31": "5KmVkeH27GhMQHq6QnC5oy6Fh9susYqGqRaSR3TRuYJxtvQ2VN4AULwMmywWJMGDsQD2Xtc4M2pdB91mkpyT3vDj",
  "key32": "54njFRPGvtJbRPyJSRzNHH4Q9HsFSgxbgEU55McaDyncMgXtEkBceHdz9Qkyd18pRo5Dfw2dW5xxsiGaKcKrPVai",
  "key33": "5YaAHWVviv18AKNy7WGAXb6wiQbCdo9hKNpEyMNhTNLKjR5EP3ir8GAEWR1JNDehogyknh8xMEZ2MGUZU9m9hZs8",
  "key34": "3xvjnsZ4BJuLKwwQywo88yer7eKJi2yDM4hhBBXMXPqhN3ccoi5Ao3n2XwacaepTgHb98aXHY2j9EtqijoqbuK7V",
  "key35": "5mxMz4fasD2eBc16EyNCijprZUwKdocZPtsYDxzoBEhdVcZyPB9UhJvAX53CHSqc7WQgWq9KLnJK9F3jpRYTMjkp"
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
