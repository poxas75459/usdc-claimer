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
    "8C4X5xwAdQGFhnb7xRvpvew694aFvRaWpzSD8zwjibLFiT7CfKGvLH1yaH953yQdt4kSjZJqUqprTeZwnAfj5V4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49kyJSg2ZLonHaLk4rhVcADcGBGnJXKocNmXxu61cziwpB9cQoqL8TPpDfdXMzC8NsRLcRR4XnYshtfhu1zLZk6P",
  "key1": "5UizaXfDCkHxDbYAWhvGXa1QxXidjaBmPdBSk6agbF4gAj8YyhMZ3Tn12MfQciLpknPyBc4iamxrJyzwB8KzSBU6",
  "key2": "4KyAeTZE5SjtbkFeB9pEUw3MPDbYr499e5i3dBmGecFz8bbZVgLAci3HHhNEVXuF8zMZSFQJ2cQzNBGAa2L95Uhh",
  "key3": "66two2cMq52JBsHxWj3eUpX8rjZ9WpjReGkYANKcbWoeS9rxPUT2PiWrACwvAzgBpsADnac9sV2MdtUwRABite7v",
  "key4": "4suitteCbfzn1HjwcLGwtKQ3hTKz6r7RykXzuArV1sp3EJchM2LURkAxEgYhnwiUNPXi3JBnzYN8CQrCM3ecXVk6",
  "key5": "4LbvuWC1MQfWNy5uf5S3NnWNUHn3ezURVkSxsHvgQz2SPVLeV8Efzr6wipvEhUeGmTkdMCo8fEtzcqgz2FoUoaxb",
  "key6": "VF2Q8tpLxEqTtopYuhKahuHdScZh2vGmxXzcMFCEMePKWWiuMaT3qi6j7hkrmvYRwZaeiGrkdnBzPBUmpknhYpc",
  "key7": "3ZWZomZnJFQkUfs7e3zYF4iESjxSTv8mWSVPcTnys5FLidFXUQLMjt1RwRHkEFnvStYwq4PcE2H4WuWUETDWD4M4",
  "key8": "2QLAbMAFxJikuk5m4swvBaZXjAa9vWCtzuf1pidS7eHRTKmA9pMX9hfW3CnHjb2mZAxADqkHrZSBbxWRpkf6c1jG",
  "key9": "465Eq9ByvXFMUZEa9bUm4aW8CaDsngn7r65AoVUYTXKLmPwu41SURttMtVGH9ycAx11xruxnjrQared7TN73CriR",
  "key10": "2BJiApWW6n7rvfxuKC1XQJw89mRmr3EN7fTvGdF62RE2UTxqpvzMJgXqNAM1h3j9am4A2zp2ziTxgRud7bDXHUNp",
  "key11": "5PQt1uuhrGBtpec1w28FNymyqhB81xfLPF8MqH8BRFvAcQraKfHbwQTPVdzq9YCSSiTfhTmv4Hb2SXqtpHsEJUhQ",
  "key12": "cqdkP7BHBGjtvAWYDh8iD8MqX6aHx1JAxZXdoKjantYqZaFNPFtoGcNumXCbxjBp5tT3zjtS9vrnWFq46wwkbot",
  "key13": "3TXXLgcZTNJicjKdUGZxjGqwwwbmw3Yyb4j5BMFN6ULZWERsLirGas6VQMSSN5epbqeAmNQD4BKBrr54uFcm49iN",
  "key14": "5quEC9f5duP8jpemFZLYJT3gVzS4sGs8VE37hjjkq3MXKugfNR6KmMKW4CdN1usagexC6RTe3YnDmMhJ8CtQHrie",
  "key15": "5kf79NLP6zWse2MUfvd5GNzWYV3dLieX12QaLJ2uprD568ECVdfVJQqGRUcaanFx4xbbS3kGjZTRhjewLtShdyFh",
  "key16": "uVJdFWMhegAbQmB2upyg6urAKeGhcSBvDyCrZB4pCyw9t8p2yTfKBVcuyX5sDu71dqgTgYSNFemJ7sH7Ue5XcYs",
  "key17": "5s621bxMDFDXQHj8JGXAQj9KB2tekY4uaqMyqrAnBAVdGXH7HxHZ44hQVuupJDT5MAkzp4MJgy5EooX3v7LXnB4a",
  "key18": "bkcBeM2bPtXUAuv83v63HdMXEMbm54yB7Lug6fZKgoGszaAT6dSZiHjZyRc2LiwnYg6NxgGmejxt8vTwiuzuNWu",
  "key19": "3r5QMMDZ9fGJaGc3sS6UrNcgRBhg6BmdYrSwQHguavyR62HTYTHG73dGyrB5NMRyTBSGjTZqdEXrm1sq7qW4sJpo",
  "key20": "4y4pGwUCnr77SkXY2Cjmtsyirq8Hjsc73gxp1dWEtHgbpSeExV5ZgW7nQzggrpSKZfU3sXA1AguRX7xGbYedZZqf",
  "key21": "42gmNFokPFZM8EamqgMPLw1Aaz5SsnhHT4DukXJP6CPDJSXQ1XPR3ptL1wJPsggmmfLu8RHLrdw3mctWTnMEmbQq",
  "key22": "31Y1JNwkQ97Gohj1XXy6KuZPWR3XyVfJe169eMBBwAdp1fE2ALpJmjuJfTqBfGFPQH3LZih3bovDFXxz25nhc2mD",
  "key23": "3TRLZsavckU3XGFySUXd3fJjDKQqjbfKYsY5Wc89tZsZmgaDdAHAXB14nLTSq7gJ3qwopP6bcC8ndAgEZavoWzN6",
  "key24": "2oJzN9bZyT78sczKpYQE8ztUqDPrp6S2Dfv3pKxQTGzZ4WH6jSBxpHeKz9fLKn2Vzmd3xo1W4WfYYKcay5hk3Ckp",
  "key25": "23W1aUWBffkcarNkxmJt8gpY1pUg9SeuyTcGc2BSehWdJg6gY7SeR2SmQtDmK5CEnUYSSjnjqB2hDt1xuY6kiFur",
  "key26": "2M19qj2UJDHiRMUMEb1dVmv7T9AEWuyHvLJMgrYKLw1HAtTqT8QrAAW6qinPtoBpw8NCYpAp1fwwF9Q4WxFdwerY",
  "key27": "2kfriMYuWguQsfHJG4SbzcSxJXFrXSAaksVLoy19NBrnWp9Nxyz8zU98yFr57wiBSYbwc9Lh5i1FVmidbYi2Yqj",
  "key28": "2RGCmsK6zezQTY84U5oi44yAnNHfdo57kpyRnRoQNmkNyv9TxYsuEVcPC95QdbaP5EkssbKqjN8jCNGD4EY2ExQo",
  "key29": "4dpKDAYi6nNwqmrdQYYSK3Ms88isE9egLKcaqc49z5Ros32vfKE6ysqkXAScBNCM4nConVm9LSHiCJUsgatttHsV",
  "key30": "FtEYtw9FufXdzQDYvJYtKeGbL9Mqd5rK1JmNcT78rHrGspuVX2pE96Q7avNLmG8mXofYNEmJsBt4L5JMJmawXBV"
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
