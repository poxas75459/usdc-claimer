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
    "6787ahafPHWHeKF7uGXQEFkYBSpEM397c9bE2LPwHuWeFiWDaCJKGXSqijBURJE2aT3TTr3bFAM69kjg6AJEiQFe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wgXRmNMX4JhQmgw5nE5dbMvSktFYvRtucHPm1ti64wuh3s5rV5mDkynwgSDdm2ZM29iMY5R1WAADyECQMJSpajp",
  "key1": "3pDTJugqJmxXEeddCt7vo5Kto75zL9jHgYrUrFqrPdv8XduNirHdHdvnbukHTu5DM6qLMk17qLWTZTWYtNVjoY5f",
  "key2": "ZrfAHSCMiqmKoRHFyZ29X5nCkYYdjQHbiJxrS4qevousYaMXCAC4FxL1U1Zy4eXp9b2eZJTWei8RFAReAnQpSSq",
  "key3": "S5k74yreRYQFKKPg1E85rhGBpU8RboxLWFJfXQbUhkymkynSUBXyD35iFkT6GByL9stHiVcBh14ofJa1z6gi2s9",
  "key4": "7TuBnXNkPxhGxTiSR6QGLvQ8nvRivfmXHG7SQ4tSZAwUhkEjqGTUcaUGUsoLoChFEzLqCMRZrorrQpyanYjBN1V",
  "key5": "2vzUSGQvJaYevCZxahLj7jrJ9fmMPzQ9cMK8bv4ZTstLsQckVmM8YRboPyuSvsUS8DvHiHrD33aD5kNnChi1jGH4",
  "key6": "cQrt14c3rJJ6yosSAps7nRdR3oDCvcEtwfyhgLzFQXkK2pTy8meZUAQDEc2TDT7JxpCuZbpLhM81HCqVs2oJooe",
  "key7": "3rc5XyozyKqZgpMakEMm9HZtNsezJ3gB56MERcB3YQS7hPMjwFTFrJJdhwuS95jBYAJ6cfAvrHRXjikrSZjwDDLv",
  "key8": "4WyLXGbhYB4mnmvzNHQ8kUzZb258bX9Mo2CiseDQtQmQ9xtGkt2V7TPzPXPufasY32zqVRQFJTMFn1eMCktCU4V6",
  "key9": "XBu6cswFruDt5Pfr1T4YuRJZWSd1QFJiQ5XWPWSMfPQ5WMfbB9ui1xfB4cUFjFEaWT3FNWNTm7pTkFLw4vrjvVc",
  "key10": "5DgGDzMTKKB39gevFfAxo9D7jcVCdUmsBqsXP7dWGSakbZ7RPHcCYXgWMkNX3CEejsgfHVa3MxiwwGk15EMwkXcL",
  "key11": "64vHmBhhipvAj5PEE2Vc5exhfMTn2hGLGBcDgyYDuJWg7Pt7oLAc6XQQP1hNtjq4d4Bx2MBsG6kujG9dk2B7xiBi",
  "key12": "2w23so8DEvT2NxjaiompBrnYNTVqodMXy4WmnJLLALmfpGDcH3yHwX9RPaXvqBWrE49qMw5mQ1jDLCcfVR4RDopx",
  "key13": "3kUdYFtM158LbBUrULNfLEH3XfkVAeHhM7Pyvryn9UBPQLaZWco1FpRFpXyxmFHLuw3NX4NDxoF8oRmS28HY8vDr",
  "key14": "2dn8RqrXMC1Lxz5CsPXsbVeRAHwRLVUVxKvZvphZZ4rZECNoAGmjubYtcz1if11stKMXQTgBkezquk78NJ2ahrtg",
  "key15": "5ZvSrZkhGxvyvGgUtTRfHqLJxFCSnbr2uHt6EuULX3scCvWpCjFVP1JNmEaA4mGPfcaq55eMmjx5wmQZtwJNnLtx",
  "key16": "GWFJwRXPXcZ5DNf4YyEBvhArJcN8qBhnuAyfq9uUPkCKZAvKy9LWxwAuyuRarMQe9nzDh4BfSazyZejf4gL4YPq",
  "key17": "3r4QAvu9JEVGf2kbPcwnpr5CxpP5dYjgRgi58UP965rLRVkPR8coeQ3NbB9s4yMqRvRpPSwjy8Ns2JyLwF3caMzd",
  "key18": "5cwK59NZRLYNsT6zfKnN6hMtWBfC1TVL6SCjEzKnynh9hJwJVsBh6N7FSH7DxsQxFT5G8WMLYCggh15crFFMGQJq",
  "key19": "21ijZr4Qw3qN4hRD6QLYJgMCy15vcoYXeVMgxno79y2AvstqUTXkcZznb6r89TwCSDj36mbdG9nYjosjNsC8kuq6",
  "key20": "Z2qiw7GvQ7z2pNLjXXJAg6vTWjck1s6MMejtfscq9UvDQcB93Bvi7Si6eT9sC3eNJmGuLfY3DdqnSXwja9BSiQm",
  "key21": "3wKozyPgbYzQg7Qbgz31SpBgvH72BCd9UK6NeAfWGmBTa1wE5UnVfvaD5mtkAYB8k8steSsqxENhVJ7KcNadNHC7",
  "key22": "4hrfBnFHo7Bn7R1vxfbxm986uAn9UacezS24C6Y7cw7bUozFfYm3F37BYYmLyJndUqWmz4FkdMa4KKN6rF4vDqK3",
  "key23": "2LFd67JNpfbmzzGwBLsHzuoMHH6WUnWLvtxXiAwpw6RmXcW7Ud94A9LrXfh9riBiXbpxnkGPEXPXG14TCdnNCv9M",
  "key24": "2re4rPpQtvSFkJTox7cRta6sLNPYV8AjHWk3D6ujZFpj6SDRjnFXRXeH31PzoPAu6wcaEdhvYRZQQtSqsQf6be1h",
  "key25": "4ywEka2MpDQYWEeXJZnSPYh3QBxyVidCWWtGurfaFf8u5cVatTPta1gL6JxsRS4P7BB6TRAJe4EoTB3YuXLHSvL7",
  "key26": "61ex2hn7pSaLpw9XFpNQnYzD3bbRt8JCDeQtS1Jtg4BPS67p2uLxiF55RrvF4Qj6gmc6oC9QN13Jwf4oqq43eeT2",
  "key27": "F7iKeGBazL7C9CTAuPhwB3bbrJj7ZR8QWm1oy5Cy5BgMhdA4FZ45jvKjh3ErV5cBp9ChxF7ZSxotxLyB42f2qLy",
  "key28": "4SQiyo4cwoCQJMBqoRhJ6MWbrpytmuyuirTodNpXZfW14Lq7Bcbq8tYYbhAQv1sXKMYrcn6WNThKoiwVdMAAaQ12",
  "key29": "3qTcJpFki7ASxz8oJwoLUUfRDYMR1eeReAzUTKF19BLgwrehCEE1Jp2Assr86NRj9Kzi8WqkkZeCowKhrG5Qzybd",
  "key30": "44RgaEyXg3FDx6oer1mVR95vo4d42YQj3QVvPFv6o1E2JRBMoCbijf6Z5FBPX8UUYsAa74tCYdfXjvp3J13xwfaf",
  "key31": "4BNt1KsZA8WpFTBQumMdc4iMef1SrisFcx3ESGupEVWHqyv3wbwREUydsbMNoxLKSqi6HMGdA414KNnDdWGh5hJY",
  "key32": "54CS58eode4Yfc4hSwFqGSETgRmxc3SDyVuvuJMMMTUqVgi6fY3ZeZEujk85a59LcdGHR7RcB8pnjhSrDDQEK4C5",
  "key33": "5yR43YFfLUByo5MVQRADZyT34WAVf53dJ5XKG5CrqRMnpU4BpH4sdLuU497XdmeuHXanvqCK1pknc146ebbHnDkz",
  "key34": "trAxFfSUJeH9R519Fo7zVCgEXzpEnMG5UcktR1ZVBvVn1cTCQiB3jTx48e2yn8kTthnfyNvpUa9NbyfC9PbCLgo"
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
