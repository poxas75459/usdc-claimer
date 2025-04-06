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
    "3uH3FSPrwFR5TJWuySRqSPkgz6sqzM4NHogLe9M3NgatV1poHevG685pAigSmN6u14LordUGPi1eo3yvt8CkSvRJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ebyCLxXG3cZUYS1pCiNADcuKgGfVJhBZTV3V61ozFYKzmNigiUvLhokKBCD6vdpEJc9Rav7GvrsauFYBYwLsyzJ",
  "key1": "37h52uKUFcMJDycwskjM41s38DjAk6MpDL2CUUwgoqQKGxKfdT2sDnwKvBCotozYmK3rQCCeFrKGnHQjqt9PLWQn",
  "key2": "2iQ4ZdpALPKmQ5mEg6LoXoxnu1Z4gTCGtw4jkqrk2V8u7B9jV8oAgPtHvyTP7SBiUd6vHHBCskknivnKZ56KQLH7",
  "key3": "Z1nq2Amnui6kQfsQK7VVMjxD54BC6JNXYbhqUWzyLpCtHUT4PDqFqhF5vRghFG9NsTsfQK7pN5g8awVCrGBbmAW",
  "key4": "4ESVPwxyqJoCeBLyUc9HvRy2KXPYQ51oZvHqLFAWnmNvXoXwoGMb3mnKNQLdfSj2umhbDkUmQVttYwCdH915e2Ax",
  "key5": "3iCR7xc8PfMUmQcwbQ9vzoNg8wJNCkzxmzsBNDuYXMLNM9Cr7XhdHbGaB2sSftxaajNS3daGuLw841dZ6S9cVeTw",
  "key6": "5pLYYSsDkKoqCZynY26dFGHSDoCg4hsLPtLLxPWkQc1MHX3GCHQpKd3U1yFkAbCMPKznbaRnkRYHr88mjK4X7ofB",
  "key7": "4YbU7Jq2AokZytnZrWDwPNtmsKBErHvWDNhdRqjjMY3uMxspoyih6CqdCVYXzk6BF57cGBqL9FKhhDpWL7Dxot9V",
  "key8": "4NHtCgBq7yg3KTexZhMgEpFpgPc51ff8vWfS3aK1pHR62j2Xvtr1xyqMva4BJGPbnM9k84HdnJdp1tyzSJHuDXkH",
  "key9": "2p1BGPGmeaEu8FPExa6TFsCgg6vFcW9rGD2puQoFSGBZxG8egHNB7ZmLmofWHmTWNP9yrxUnF4V5vbHSKuWHVoFA",
  "key10": "66yq295h7nAm9Wk8H2Mc1cNqniefCztp1ivVFyBJcEK7M35QgR9CdA1eD1LnqTDKNf3yJAYfYMAexKtveoQjS7xt",
  "key11": "2jMHx5caVCw8o2jdh7iWiNfuHEvfJf2UKhFEhzCYiRJ5xac576sfa7w9a2DhrnFb3QUimjZjM7CoxMExyssppKPz",
  "key12": "417HPVEzMjNpp5oR5iuLDmvQyibXfcy6q6igsTX8xVu3zAciAek8pHJ4sMC8QTT7QYjbzwZquumTAhiAoqfPufUS",
  "key13": "5DwguGjVR6EbxUQ3TiY7B9PcJmkL1Ao9rHFxW1EQL2MqAGBkA94A2pkjf6LnhYeoBV7ADzV77C8PebjJy3shLGx5",
  "key14": "47j5nwmbbLzFwfhjbzNjUhEckqMnAGQneXMV3RefyxHuvg7NtapJMHtgLFx4VqbX1fL6dJRCz7oxKswZQuQx9HR6",
  "key15": "ndyzK5FjSjQnWkiSRBgzbAFgebqxobZX787h7bp9sdB7eDQt1LFMK7ALVXapdHcUWRnZkeLD73RbaF85Z4eWCdx",
  "key16": "676bJ3pc95b5goE61aJwwqbvJHrHdpTGjUtEPSfwT2Ebu8b9Shb3h9TJ7f6HoZBjAG1iftZzZztaKmo4HbR8vCdu",
  "key17": "3g7sy6VW1ME5hE4r6Ugwx7ZMG65RMtFdpE86AsS7ycvhk6L7od4NoFgdoWScS1Yb5jcsf7FW9FT8D4vqq5vUo8rG",
  "key18": "5QuhPkyMGUBHQN63HR67DmWidSpoCLsoe8wt3NghNUq1dxRvkPuAh1wu7bU2m39M7j5NrhaQGw953CuhcLo4gsf",
  "key19": "2V1DjQ2gwHWQNd2xKwVoY2dzC8QAQV5mPi8CXaQd1CjgjC34mw2N7WQgQf9VikTd7H6nHmsoWekbig3mDxkx45Cn",
  "key20": "2ETzcnGRnoZhZ3A1d9agpqn2XSKRqz4HNNUVbTVYYC7H5pobbgzySLWu5Z6qMPwSzgNPeZQiHC3oBKFXG3CXweW9",
  "key21": "3RpZ9Tkr8uj5Fa6LSwKkwcDTovu4nwnT1ATrz8h5dbC4XfW47ANK26sdMsyjgf13UzezBcjiDYZc7K4Xnyow3PQE",
  "key22": "5U2BmVfaL8acQpfVRhXcE7v3EPDuKr7aJqwssCnSL29stkszi2pLqkoigDo3fgYZuCaCKXqPLgRWFQXPU3sWkWqG",
  "key23": "5m1pL7RLDsHm4tGYEcktSt4oahYjZ9ybtQeeRTpNj1dVvsEkFxpZDoG19EPcuRQwhwAJYKQVupaj4aPoRyBGGkij",
  "key24": "2hS2nSuqpS1ewY7pn8Vt2sZbsw9EFsV7PqnMrZZxEfp5NWvsC2M3ciww2CBTXoQbq7VLwt741i7xHuEHUPR2s51r",
  "key25": "2vNK7rf4CVmCZQDUgEK2nZgJRhN45pvTMjEW5u5tHMQ3rCEDmwu7Eroige2JHsgKTjt6NLSegNiA7ieDCTxAX7K3",
  "key26": "tmGxFhMvM6XHpNvKhLfPtqvckJZyzgbPe3VfSNMwQY24Muf7cjfScfycXnaeRK4yAdbNZjuWqupVXnJ2SBG1aiM"
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
