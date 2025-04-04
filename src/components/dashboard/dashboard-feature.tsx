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
    "3T6uar6N4ym3Yb7GsxFoiXcBUf7xVmdqtvnitsWuHcn9qkggqsbwLRHpPowSgSGBxHa8qU8SELqp13i7nnG56oLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ggjc9eFVEGVeJzh1B9K7naV4iAr19ErCLravjBhVAhsZqyTa8grfY2G2qnR1RjDovbWHoiypmRawr5yEUdqcrLn",
  "key1": "3uVcJJCAeYRNvAgriuyGPDcTidKigeCEdnKrU9ETBsHFSCk6pMnzahBaEvcDJLy1XRSqxVkVcPBHHNJTtLGZGcg4",
  "key2": "3vmr4MMc5nDpLZ1g4oXze75cWENbu5VBrPW8VuxmdgZeSdJFTGBdYpbwxniPbb9xE24SVoYdvJ8qFkoH9Po4xE3W",
  "key3": "nJMMA6jvCYGPPDa4jPQxrSdUmPt5WtwVQsneyrdFjZVWirWGxKFtZnoFNPMrRYdjRvkLDarqc7Las4GdKMb5Q9o",
  "key4": "5f1uLdvqa5ZPuq9EvRa1oTAcBHf9iFgJtkqbKkrN3kgg56B228QdQDNqooNQftygtFd3GV4QJLe6ao6vcDqefXVq",
  "key5": "31cLmifESGRruwzcAKhLh8uRW4777kmh96sdq2Y21mCQCsL5BdKvxe7JHzaBmYYBJpJVapzNWHVHmTnnz6F2nXwu",
  "key6": "3Akc9tjKPvYfTe5xdSPbND4mCm2yJdyn5jr9TbXNJmMRu3Ag9vLU8Z8nAps1rBBLhHvuLrNPnLF5B2enas4rDxn",
  "key7": "5hp7qoCMtoUpiF63gDc3F8HS7SLrRAajzL9EAYm1bycjKywavH25snWZH9dJxiVkq2iJzhsznbyqS1ybR2S9G4NZ",
  "key8": "326zwvGve1fDASEoD6vPcVqSMwm2PJvw1pC6UR3fvTu6p1or6ZJvFJ25gkPeZhV6k6TpHSgCgzA699gTvc75h8d1",
  "key9": "4LuJxLVWzPThp47v5UNs2YTeqBtuUzccJPYfLqFLS1vyYDY3ci97UczPNqBwa9MsR8TziD5JXcbbGaSxckSf1R5",
  "key10": "5WWZsuPTNfSbU5BmeAm5nb8mF2D3X9Lmv6fXUCmWaZ6yV7dKYtmYEJYSMC39vZNvPpao81krkJEsft5L15ipnWTk",
  "key11": "3ttzC9XGNpdLLTUAuqe4FdCpJedY3wCPYx1ZUtzdLX4Ucp8WoQAGdiwvS2RLmdaZN7JER1w1wvWB4xB6tzAfCM4K",
  "key12": "4wZw49zdwaHLbgWjC19yXxfzkGEaQpuWN7Mon8XseWwiraDTCjAr36RX9AKW2HrpJoyRReY9UrUyF3PSxJSurXa2",
  "key13": "5mY7ZDRibEedmzPzcUHBQDp9yh9RgRquQxbX14UghkGse3bvGYQ7b1Qz9LKKwH5x8GUQZJwAtrtWjCokrtnKfP8Q",
  "key14": "33anmwdewigJmkRLzAGFQkbeCbvmP8t27Wtw4qrguqaDCjYn9Jc2TtcAf3eweDGMzdCpoBLLgqfmSoEz3JgCAoyj",
  "key15": "4FYkDYjaT2zFC5Qk2hBNkF2oFwZJZYsuRxJoRNvHGJjfb1fLhoobLCwvyd1SzBD775kTGwqxjYQcd7c65N9v95Nw",
  "key16": "58fQSwydi6D3DzxEZs4LeJgXmSJNiZMAKuj7oW49v6ao493cbiXetxPfXqcsHshEb5sCabD89TBtRCHSqp2Wim3r",
  "key17": "2VF9DpJU6cSTQNxFHuCY6aotJuYNVisjJbESutcUCMGwxUGuHUNp8fCzujPD9KurSa3qyRKP9CxLd2X2U5VwCSJ2",
  "key18": "3CUWU5iSpoMqJmLrMSUeasERhXmdPSFhFTaWM9oYbTovWCLadi6e1xqxC6FQtPXxCdXu9unx2Ez2z73roT6ASBMf",
  "key19": "21wFGb71JNy6gfGypFgAvfdVBqn65SwTFV48u8br9DBcDCSQAbx5aYGjoYfmQMJmyz4V5KRHcoiQw9tVPRDPgUho",
  "key20": "3tKhX2tUypJDAJevvDzRG5pocKnzaBS5hN4WoV1rNm8qWFLiCo1sh7u69oTKz3HnBdQodxSKREPURVQC4Gxo9tuM",
  "key21": "4FKLUGazGTMBCBgFzsxMrdtUQGyQP6Us4buy6dd8QUZo4jfsPuHXqzyumBqgqTHT7eMUAPh3DPqqbymTBpGJ9KZD",
  "key22": "38s76Vw7H1Nd7UkGYb7uAbc49jAie7BK5g5jtUaeJaYEZ2fAR3rLZEgcvY5qT9FrC223pr69PyjjLYkaUjKWMbLc",
  "key23": "3Lz9ktAkbbWctSfSoHygcX2ubj3htYxdpqND56CSrFBbbgP2DU9Ftyvrkniebxci6VRpmB92NiMG76DCBsfBgkuT",
  "key24": "3yE3rFqqsaxCxgMoqwbFb278DcjnVjLAsXABQLosLWhDpT1UDMgrz5bckgTcJFA5cztSrSFveokB5HzXZS8fviQn",
  "key25": "2frZxkyDWCxzS1MebU4LKipngyMhqNq7DGHkk5tmZuXcNw2BxD1y5CY8JrBCpmJ3sTe2FtQqwHYM5V9ynnATT52R",
  "key26": "3AwWS6xjRjSZQ5z97Ym1XnyqSmqUGmJQTXmmvrJH548ummLDVgX4uhdM4PGRARnQwFFeu5M9sHPyHdQVptgEj9Ki",
  "key27": "3FskXEs7saHH5VHUA5DK2662c4fkxJr3q1RvCmVVWqR8U6KuXdRetWKNEkCbpFEmzZB687dQoextCDahoEZjLdoS",
  "key28": "3JEHpRUGBCyxcRpMyNnK2JMno7YfBWJZghQ22YYueZ5o1ZUAY86fWyp6kTFS2a1ZfjMyA9SxEGqD7whaGWRk2yEr",
  "key29": "43AMJdKSN1AJKgB9FHbaZWDDProsLD2EQ3JtbrPpELxmQSDNRvfPV6kzV2QhTbqqVxs7mMGFSe842QAef5vEqGsG",
  "key30": "4M6t62cxBrjQEF1PEp12osdYuzNUzdXjjMHfkm41QEwfo7K9bzGnpinRp4GP5shknpYmnVWrPiJTce8ZJuQmA3fD",
  "key31": "3YsNBD29Hd8FarAzCaGJTZdmsMRRheUj1YoQK9KXKcYqBqsfC4zsXCNUXfcqjStgXbGSg3NdCZ8GU86ie9PbAiYk",
  "key32": "3RDJunfHbXXUXXH1eJ8DccX4JRfc8R8mKY3DYDQYXqV5wj53AbZeMwCDPXkHTQGRhi9KsrZ2MBPpTM5XDJd8J7eZ",
  "key33": "4gswRHqSGYeJiY9o9Bgn2PLZK8Ywi5vVav1RsEms1J3ug2eW6oRn6zXjxcgTBfMiqSYD4bxrPAZK8i8rHPgfER1r",
  "key34": "4bWrQPPFTwBwqTBnL4H92ccyUqqibhqyvj98EfynQoaNTd7vRrkBUA7q7tmwwXMvYp4Lj5Q8PuPwwjSMBwn4mzsY",
  "key35": "67ZXQ6wYzg3yneY9QmiJcHB36bFaNySiHC2ciL6AhhD6z38ykLD3T4RPYTvV5R5YbFFccFyd3PnihHnJsCjab3ZK",
  "key36": "3j1cMY9gBkbnUitBpQPMTTEuNnNurd7GV2BNdJSh6bTvvzCm19koeSozmKFB3HGHbDhhE1g2RQmhs2NCxKv9DMc8",
  "key37": "24m1kYJd4m8qnVekREPwbZPUP7y48VtfdiaezXrW1pnKkQMC5RzDJFgvWo2Wb2a6yW5tncV6WNxw7F2X8RZFB4v9"
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
