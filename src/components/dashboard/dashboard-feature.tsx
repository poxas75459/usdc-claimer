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
    "4Km5PgDD14Wq2uoMH7knsyjm1wKkqtAN1xqbCgQwM2uegrd27r3A9vEEBnwimjCgmb1rjZAC1WSARnCtF8GAuF6e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GiCQZ8FA8SWG25UDpFaEskivQRBg2ARMxRDC23owh8Q3f74z777HjDJH5iyvvmqy6kor4vg71sgNmK8vT7bhhgQ",
  "key1": "BcNPsrNsQ45n8DrSLfWCc5V9FpNNRhGuYRUFxiZmJgGRQBYhRGG2bewtcS2q2WhgEUz7yV9y1UWDHv8R6Z2u2BN",
  "key2": "3Ae7py5C78QqjnXQtZYjwHvorsQLSRwKvfw9VyN3BzMcwJCvbuTmKdBiKFbV7xpCE413d9SJaWux2mKuCPUKRaea",
  "key3": "Tf1TXyJmiCvbqx3Hh1JZ8c9SQT1TLfaxMH9pMS1x8JGwexk1rJ9YyC49HvTP7rTBaHa3csbtznoo6pqWJp13RcV",
  "key4": "26ErYXScXfvubrW8WsTm4QRfUa8Md84YpJHD22QEcEqdk88jCtuCtEZLPpj9BqRm3tc8FUCJd6VvimfgPzDULrrL",
  "key5": "3dWLcEu1WBv7AFS5xnCZgyySMk23pcMefRLKbMDujFK26cdDcpKKvKjQNojkPnsd2i4149dUo1pMC854uYMc2QAg",
  "key6": "2s3msjyESoas1cMMBbE58wuZ4qzWmt92xEds7wZuheLV58MWimz33b7GrXRBMKCMvHgX4RwXoHG1AGWRRG5dE5yX",
  "key7": "5HDgTUBe4L8PDWJQTyBGGCnRUYmav6p9RYDkKTxSyzTf9cufJ5xgBK58j4e3PjDas52yvhE2HMt1YGHzC2nHw8N9",
  "key8": "67C7JfcBcMP4eAV36ejDrAJyFEHL9SV5DxMLCNCuWt6N5RLvng54kXgFsDwebj9exApLtMqPEQGb1umS1PYLmxh8",
  "key9": "5B8A8TA97gPDXxyMJwsu3uJyWXcBfPP2RbwbGUwjfrcrrF67b6qpN2byDnJgAxGXfChFiKY5pZxLnHHJqssGEqXs",
  "key10": "4SEVUPXB9c67h7oP3tVNiRmQDRYkeSfSLkB49BsqVnUv4xxc6DUfP7wMEVWqYD5e2N31Sca8vkkXcFUcYqNxCq9z",
  "key11": "5e66T3EXjM3CnKfXTiytS2E3SFAtaMHN7A2pQ5BY3btuC9AS3qQm9TzR69L1SScjbpZGfahvELQNP2YqnghsA6y2",
  "key12": "WZ6Me6Z8HKTjBGWYwtsSi2RxRTH7zASFywv1B16zrQNb4Gfwc6QFkCmR3aZQfdpgot9KXoe8ci1QQ9az3K5DM2j",
  "key13": "2JXKjaJQ45tqdWKLW41mcK9gQfj9AfXH57x8spr5KjEfT3PPFWBPC2p9zdC1GBZoZLA9ZDd519kfaVcuMNizXmr9",
  "key14": "5RSzPSKnsbKjjaakgpXC12pRrUGSxXa6UzmkVnqCwZo8hkybW2PYXrqVDXgGZdURAaW8EZDCeU6acA7UdTRmYQFS",
  "key15": "2x4N8vi66GBAQy9df8rqvugNEPGHC138bqtdk9YFLvJFPzJ4T521xh9cZpT7QqYPwifXgd7QZckHfSzmqDFgpxyz",
  "key16": "3kfgqGVVdNS4NWSaLtXBy3w9MZhK4stdDc7wfBNhh9oVwgr7ziPbSUYDK4BZGcXnRSnn9vHeeT9DcQ8LmBnAP8Gz",
  "key17": "4ScuH9byBKo7wdYe6EMFgi3Z7BkuvvFnTx27n6qjF2oGupM9T51wwNfvpPG1KSk81XzQciYnxsW2kNwNHumYgvT6",
  "key18": "3aPkHedozitf41aPAYQioaumgaQs8My8cGBmNP3b2frBWXkyyat3T9twr6soFJ1GTCjWK65NoUNquNv5n88Z21vN",
  "key19": "2duk5wL6T9dXrJvkNxFGEiajKH1YSc1udAMQSH9pRdWEiUvrEX41pMnpvqYQJ5Hy7HRkB3YrkZvF7xVvW1vTWjum",
  "key20": "3wBuUpeLr2rRCwGvhHqguL21oLANJscyVQRdesm2gV8euEzdpa1T3jppjsE7NFTjYXevbVdmjswE6XPF4ybrtQpq",
  "key21": "3ZkiMVeLtjMiTaabgK8Ep2ozW4k3Q3dK3M3LH9rKPkuFDJdD7jKGGqVxeRwR4bn9XpzwF4jk2rBm9tc6xxAJonMb",
  "key22": "nRWobmLxEWTVt4YEnKAvR9hwjidDwqJ4yj7ixZSA7kr14LQe8oZLYadavzn3GfqAhBKSeu7SpjXaSHnntGe6vb6",
  "key23": "4suKZCn5iVGAPM71Vv6uP23yJy7RoVmsZA3bHigqbDPRm5uNbWVjF5VmgRjed9aBLg9s4mmuFLQXz3JSFJptWzfy",
  "key24": "6B1MdjWJ41sBJHyrPC9R1uEyau9qk6YTAGrcd8oPSv2SrfYtwAeqT5PU77uvxopfEvM9zKgGnXvpq9HPjwSZbcQ",
  "key25": "5AvuXWoV2rKQEfiiE54UpsYLLvJrQR4u2fb9nEjhVWD3b56EyhQngCZgcwnmkrSdnaYvV4Ws6PYbB53yxp63T8D6",
  "key26": "2rN8GB2sqp4nXiuRsnCtD58groHo9ysxhuPrXxRSPpJPz56TtY8vyPpqQabv7amWaLf4CWWeGUnuSjiTBvsoN2M",
  "key27": "3aumm5Xukaq1FfhMF4mxvTnmdXGtL42VemofKp8HP71dfHNZ45hovHCT9ywgaa2CAdLwPuUxawE12J9TJV22yXTo",
  "key28": "4gtQNeSifpwWAA2amk1e9v5Q9udaDEqpwEkNXkQEPG3PeQD5mS7DBRnitQhmkbJkRxa56NpWeNiRZaidEoh3rcZk",
  "key29": "2MNGM4npgaerZjhHkEw5e8UupMNDVJAiYrkSyZAq3zTRsJEKd44piHWSH3EgWi4XaB3wUDsRoY8cXJv8GMEni1ns"
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
