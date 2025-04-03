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
    "21VU1ziBsg3LYsqLv8gL5viWiqXuGAeooieNMoeDKUD1jgL9rjhccob4Cnwix4e6Sgf63k5t5qZVMHyWxTwunpAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iCnXDp4TbXWTTuVM83V8TrWUtUyW6Nc9PzGYMRN9hbuTaovhDQ5E6wtuLc5CKpiyCnntktqgjc3gzwawtqfKN8r",
  "key1": "2neTcdgnuw6nBt8nvpGT2YRDqPknb1Sa5hGjCREbd318UhD1jrbwt9sZ4aus3RCGkZPQ529NkPGa2RgTqDUXrag5",
  "key2": "3AvfNTgeAvkBrSzGvtvA7Ln8M9AyKmzdpkKTaWhvsYTjDV5yhmUhnDeUrSDJoYazyMGgRrdcbRQBoRgs4UJKU5z7",
  "key3": "2fXakbVcKN8fb62wPSvbBTx5BTLQkoABKG1yBF8ML3H2NHkBcTF6vN7i5TSr8tZSEKhun4tH5QdyLn2WGX4Kty21",
  "key4": "3EsUMWiX9bmw33ELWUgfJDAnHTjNSzeDxZe7jcySogHK3LkizcLegymB9XgRko6xQ5MCGUwXcGKT8f1m4JpD1LW1",
  "key5": "3D33rwQjRWLGDoc7B8V2FDruBPhCXAgFnGusKiB7b7DT33d6EngPf9qvqk7mRvv1HU1GZ2Es2rP5c4g2aGC1YgTS",
  "key6": "4QnHrXyGvAGSkAiSDQjMXveF8LehyKvAxK39dKa589kW9qj7itAxcH4p8FeQwxUVcpMgiYbNC5Tf1H3jVTUsezW2",
  "key7": "3uNUWG5S2bfWQFwKPXwjKmrcTHBwGysXQ5W2RSc7wUUDtM1eojeZA6McS6LGs453e1VH6r6u5DbUMDW7yCiDrM65",
  "key8": "644DB9eh15pYni5LU7SWiE923TogLpnToqnVM36uByG5m72buJPKxsCvwT2AZQtdBqba9dHkFjxcC7Dz6raWWAZX",
  "key9": "4GXaME2Nd6Wtj81XhgJ4jPue6tq2RkQLJ7jwzZmedu1Ue5awotiQAiCvoMomrE8jnRwQWcjSxu6gRnCF7tbsCTY1",
  "key10": "31TrKiHrWihjGd49EajzsgGRefk8GRfXwDVZNPxJfDsBcHMSZvxAmGvieVRpaocwHoqqJZ8xr4nFsUb6hB4eTCjk",
  "key11": "6319v8ZxNZ1QSVc7wPPXEKZg2wXRxs2KzSagAP2d85wUycWQUVEjgdYzXrEyc49WT4LUJGt4ine4s7eLui2Wuy4w",
  "key12": "5rHYvrUk2AZmqedmZHCpYXTAFeCtLNKv179mnoXtwQFAs7psY2b3mMi8GCz92oQvLdjxKo3z5yTziMrBPsKd67jG",
  "key13": "qcMdtossMKbUk5cP5tKYng7W5KcVcWy69LLvrFneExHHXgLbiN1hWQeKfVoZvbGqEq8Eg2uRRMuePsGHvsJCf9C",
  "key14": "zwd5gE7Pdpeb1GSjHWxPhD4cj8yNp7W9LR8HeMymBNxkz8ciZmGtEDbKhvtK26DMbqgZz2bcZk4vkZPEq7AJ88T",
  "key15": "rVr8XsPxWqA8dMM2LzcR4pybHb9e68uuUCqjfGEm3Wi8hdAdhxK1sfR1Y3iK6dhP9prALD9cUasLxZDyFULKbQB",
  "key16": "2jg3T55p9jyy9XURUeZ8u4NrakaSyWaUjtFd7GTz6ydDHRwspu9cpqKeF6kkhp3XtE6eD8ppmfVdA5J3eLK8Dd8G",
  "key17": "4iPaJzMtHyTvJuh6wbQ2suqiMxn6adEcXUkohatYE8fSGAcuLjaB2asBwyVpvGm7HWenXQorhy366oMHmSQsd9EU",
  "key18": "3YrLMJTMRrrSGRd8DyUu4g86tDL8CA6hRXWXoYhemkEkUwvkoL3sb6feiD8ScVaXumY2YomNcDfnMzgUSsSaqwkj",
  "key19": "233gi2asMMijNPQxy7iL44xPokzd3VMtkhq4xBVfEYMsgM5brgTesiFWb1XsR4qwqpu6qDQVVfko7s3grCpENEVV",
  "key20": "4s7j9uJnfFDqdvxbWN3HNk8h5LZmPsCQZXAYc4yfRZy243im9zzvyazAbg4vcz9pVSFyRfXSYA1VoB1DpjwE9Knj",
  "key21": "4cZpgJX793isWKoSffi3yyLUrXq9CUCfZ9tYPXoypPD1Nynv6jv4dpJRPoGYVx4L4wwQhXVBRTTMu49tqnxSZYsr",
  "key22": "B3jR86BxG6QQP8w84T5nUymrLwxPkPwS9vJfhDSNQCA5rApgSur3veFsE7t5z2h1QBTgjMhVBJkeBB6n1Dv9dsG",
  "key23": "2BnZvMG22PHAk7HcF1BKjjVwQXMcvgo6FB58yXg8hyngsRGhkJvpdHLWJFnvhudsVrG7V9gK3v4hxkkymzyA9yE2",
  "key24": "kzjEGFfLdP4Z5bcVcecLXfsjqSB6KWehmgK1X1ne7MEUtJyEYvqTxtnjK35xNeLmd2zn2ahSE2ACnqGda634JzD",
  "key25": "4D5YwPEJjzGWUxETfsTge8EhsWrmtWfKaZ8Xsx5XWY7cMTAF1yY42RZWcdiaxMWBGSC7mTMzw3TdB8YWo3sSuruX",
  "key26": "231fCigLEgzWmuqsZ45jn4wdYoeEW6xTJyTQ72vk6FNeUMbPS2UwXP1ujxzXASaFk6rvXcPiEZBNca3MYZCyoR5E",
  "key27": "4TWboNsg5CB1rpAkgBEeEwuLMCgk3fgE57xn2F4D7HcSt8EWFiDjeKJ4se9VFzEUY8UfjGqkMUE8otRnuhbrn1az",
  "key28": "2W1tgS1SXik7XYBMrHXYkiTFF238keAo2BLKR4HFyEeaRrRiYB9XM3jvEgz7F8AyJxNYwnYGJFSZ8788j4pAuQ3z",
  "key29": "5imcZujzEG4pZxZANqwaBrxZbyYYkDt8eFijSD8GnnttP9VffHHD6e1v7bXCzmog93TTHTs7a1sa3NGceaJnaVcR",
  "key30": "4obRCMKJFsuJdbGKuH73Tn4SsMr7vSQkUAMojB5mSUVirh776YRxw3sGvsBpp1wFbV2ha2e9wnMQ2skGjDD4u8uu",
  "key31": "57NfC96xo8hLUjSwJMMfsGPmrmM2CEcrvARoYhGqwrY2GtN4RD5HZnJqPA73QXcQqwAgSQ6VPfeuXgN7iwkHPq99",
  "key32": "2FCf5nT2oaMh7oHxMepZTtv58JSUaPzj9HYP2rbUhRbBn8kbcdcyvbkwmDvQvg9TXT4GeZgCgVbLCRtnbkpLVvow",
  "key33": "4Nf28RN5qyU7kxbDuMVqVGBsUGzNZSQdL9aVYa2rRMz4vYSG21gJYDq8nfVe4GH44JcSvxosuZK6zE4sJHKpZNoV",
  "key34": "5X6pTLb8J9PLBVd2mBQCo41Ecg1k3ypZyZhu1dqLcM1qvRytv2Ytxj5SY8LaFLFGECNe5EQD5PHLU2LYfLozwvqw",
  "key35": "scNAey3EFWE4LhSzoThmkzwaXMJtH1tLSZnjET392X8KZgZLiCnzXAiUoTfMA9edcpf1GXyUiLBzgYqYxTJEtDR",
  "key36": "2rskddwBGkGwtKi4XgrJ6HNB5mBB49MnA48oWiCU43xuT2S2ZuzgnweXQdNEYExprFWy11uC2CabHYnVpLfYnEJ9",
  "key37": "586xEqpxvneVoCeFRvPyoAUpnGPczEX2Hy42D4NidfRb5A15jG1aKcFtu6h2UyC7ruP5kwTwjmdpM1yprCKwsezW",
  "key38": "4L7BxNFkrjVLfJgXZgMXP3WWdmm1utS487QYDZAw8iuXbH4bgayFZXmDeHDorj2a7nn8aBEomybqZuJJfXhqELcs",
  "key39": "52bFsQAe5jzAcFEJY5dCY234HmhVurAfZcpwMxXnDCqcSJpPjyjKUHx9XjdozimzggxT1XmuxKyGQHa187i9AKxj",
  "key40": "2PyEh6VNUJk8YJXUjuG6D8wifapzrDtUrSCfY6yz2PL385X2Vx38X72K3AnMPzYK9Rou49eUm78Qpg2PHFPdUkuC",
  "key41": "3o6mURvE6ukjQGHx1MBgNMzj3mp4SdjJ4WweENEZ595Xr277xwHAPJgqLaNtHCCjfnTXeF5BDsJbuBec22RoyjZ5",
  "key42": "5q9aej4jftp2TV8yBvgRPebikDMe7gnhUY4HfSafzassgQQC1iNZTtS9wvYRQ5yNNEg2AoC1d6aVdj6W6xwmMyVX",
  "key43": "28NEoe8ByMv2pQs2DTW5KZ7aquoERw3Sx1DU2EWatrPZfodUX4jorhWJS6LXjmyE9LhGisTz6QR7jAoXqZEU7nhP",
  "key44": "2s8okFf8FZ53hMnubCUf8eaVd83ENnmAeHMQZg2rZ5LcrCENbkNfAbVh4ALkQgXuRjguW6Sks9HLrYZvz8LJHYcB",
  "key45": "GegaPbeuuZS7dKQwXnvTSRWpehRgkL3CZTBSmLxknuxsCkJpweCcZRmmEYmq9Y2qxVme3BmwDVz36sXf15C7Sqa"
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
