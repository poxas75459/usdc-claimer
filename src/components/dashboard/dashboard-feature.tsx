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
    "2xsyjB46YetGYoh1331QyXuAW4ynjbDdnP5nUJF3AkWg6tSpM3rqZV8n9gpw8xvsJcBhb4zjVTevLEhDWmhq4hjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64JhzNfuDYqd6pyVoZBJGvJWKZRJij7WfLJo9D9HNNEU9cow3Xq2jzihDmhYWjHdNeZ5fUwXK4xLqQx5mr6LomQd",
  "key1": "3BsdD4o5HUJ3DN9w471zcijzCw2USPXXRjPxZBxgrmKw3AXPjTSPd7gusLaB6KNsP7U7q29xTGxhweHCGCzJREP6",
  "key2": "4JBoSgYDq65sJdfVkRygtXbyUo4D95YcE9SrvsPjqxRwZsZUg2VUjFkzi8MGk6aitg3J4PzUG39dikkptNzWN8MN",
  "key3": "5urHkhNvrxU78RGvYZJtXyeS9K1wwRmGDkoiumyiqfvwyX8NrUtqqofcKQDc3G3zNpfcdsq29PW463mE8VAJTk8x",
  "key4": "4nNQpNQ4BNCXDBATQvJ6dNPZRvCQRbFXXoesueCSTE1SimncxF3iwpZ8a6noCBDQmAF3rhSpWnHwxUHYhQwqHAez",
  "key5": "4LR1YfgZdcEmZXohL7CbwsfqUyXDf55C8dgA2LXp3SNCKg4NfbPwc9dmDQfKmmDyX9L4bGxf3xPh2uJXefnB3ro5",
  "key6": "5sUcYeycTv5FMqvFCdTYhae7zSFx5AZNFK5FSfGcdsBJnHd9ionQbL1Y1ge3HkEHioU1QgeQnG1StXZh7M6WPmWz",
  "key7": "4jkeMnMFZQFr8La7DLoWRHTHAwewiTbteCFVt6PeBn1EASG61HcDrhK4yJsrF9rJz58MpzJpruBycYLJFr8NM8HR",
  "key8": "EHUKGsAXwTUVLoNcVsnEFGAjeiFVNrqMbzLcSeSQJv638RPxQ2jettzZadTHxESnbmphCNguGkByrm5VsAmAytN",
  "key9": "3gTPnXGP6GHyNMsKYMtkuVz78EfWbzKWc3EKkCqGw7pes8EVopBUDPNTeHu6Qw338QCpMHdrNnGkkoWDL1q4K9aw",
  "key10": "Q8F46E8JLZBkFraQMWJsyjPGppXSwPQuzwEYmv9sB7KHN1ZEkkKZbiQEuRCmFFVFnU9KuiMNf7YK1dcUbduMYPc",
  "key11": "QnmuAKGFK7cLDCHV47JcWiDgztm3u7ngofv3sDRaM1HAvzTvAf7cRq3VUT2zLzfjUnvn7JZntPPZ5MAxhqCVRVq",
  "key12": "2MDsGydx9AL4dWg6tv6duAMTJnKMJtQq51BjXfZHDJ6w4drygwBo4MR4R6THgddutTSuvjcbr28KSq8YfKfAYA3Z",
  "key13": "55GtKyvfFN1FncJoM7jjMjq9M1RtqExiLQ4BDS8HXPJrJPHEvovsRq9zrkSvKuFUL6LNRKgDwbXQmfiBCRhSXDNY",
  "key14": "2MMQ6QAr12dwWkABahZCSqbEKX5uRMf6r2HvqMQwo7QREuxd8yUrSQRPtciuRMumRMY3sXPsw25ZfJKckRTdLZCk",
  "key15": "Wj3U4oU6jZNbWy5u1HjwDbB7FJdCuoqhNjSLCbBtLeqQH8W5MXQ28jxXvM7kXKepFy82zoZVdm8qdZbLUqfaDEa",
  "key16": "4emJDzjiHPtjtCGBp9tmGcRxec148faKaNGjyBzXmfA1fCRMJFut4Cnvn9tjrhmfU1yG5r4Fd9E3TYd5EM1BGmVn",
  "key17": "3xisv5NM5S7Sa8KN2n3pg86jGYeca9ggnRxBJNRSRMpCz9dJcxeN6r9nmcDJXGLyN4NmoCvmxkZiGWBCWinBXi2w",
  "key18": "2nR3mK29Zi52gCtBUCjfv7CAoVvvbivTSa9UcwukG6E5f6P1VyRNqVy9e8sJPHcLmGtcb5naoneUhfjT4JsE1quL",
  "key19": "3WjMfU8kHTYX4ody4WocvE6Y68LRmn4krSeG2u7Tfhf5Q9K9iSVxU9pWMt4i1sHzcdrTr7AcxNxfDYJseV8d1z61",
  "key20": "43GdcqAskSTswryPa6r3xSWY23Ew4B1z1KXUSkjexb8tUdxx5wpYkN4C13dgQiE1dXifndWLjU267vN3aMsPzJ2s",
  "key21": "2JtCdK8rYb1j7nuGygDgEShUVStjtY1Bf76WHdnEGmw9k2YRxWfL42Hinb2SNUCZ2rmCMaujpf3FbsMwwrPMQerB",
  "key22": "2LUJ8VvFF283Rh9wzjKzzzL6uqtXVK1piuz9UpEwhvZvGSCYT8uEx2rnnp9TfoT88Jv85xPiKowJNFvA5LZH2VHK",
  "key23": "2Hjpa38fx4M6ngiVJbYUX6SUL7BmQqgfZ4aR7CCoG886fwEu45qek1nTn32BEfaC6g84RiprQnYywgbCx2Mf5pea",
  "key24": "A1t5D3fEo9r32F25yAFhG424tk4Z36BGtJzzm5SHND9MWo9c4qRbgqZFDohVQfb9RvamhwnjtXjaMEevAKu9AiT",
  "key25": "2pyQAsYwMzwhP1LWyffjtYYpd3wVxPbCb4qcJWM4dqt3cpCK7zadGtwynU1vwGXaSRDAJuAcxfwYTiVVoBK9xcfp",
  "key26": "3voaMnruHW8SETkfhhjhDFQHRs1nWoj9C6h1tMHshbnmmwVd9uoz5aKpHuhC7nLg6WS6636fzMUNi3dkYMxvpwHu",
  "key27": "Uub8UQNdaucDHQyZDWHoumqcZHUGgTSbMbckBG1LJhE3D9Etuuno5srvHAtJyus9SBRGANmqRu9L9DYu8abwEAu",
  "key28": "5ySftZUPnucbw6x7GLH2NSQgBnBhvWsj5j86MvL2bove6nQv6H2bBQKbUK9JmftysmasefHP9acwysM8zJhjwtdd",
  "key29": "1jDK1hHNNiWq9KvYMCnwuyp9d3DgktPpBnS4t5AhDDp1esQU3Eojfwj93GVbQ8zE8DQTMwWd42BLkLbvH8YVVrQ",
  "key30": "23bgVtyXftPDSWpBLen1jhMnrPKBwyqTo6VBnjY8hZcd7gNnGfSJ8AWiEbo2chshph8N2ytn3DzPRPA67kBHzAtY",
  "key31": "cYZitbXDvuo6Bip7MgKZMRotP8ceYcJY4dumsWSgguW2BKjSWba2tEFo5f5xGFBm1vdvYour4LYTMCvsXNKT669",
  "key32": "3TTQdodgDn1RVZzNvTx8RpWiH1vjCcfLbfssndc5xEC422bMLksDVAq9g1dyegRwwN8eufFcLwSiWn9WkZVmDc6d"
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
