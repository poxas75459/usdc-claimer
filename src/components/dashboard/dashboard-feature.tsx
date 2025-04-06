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
    "4z8DZxJiDE7yKjqvoFVZaCZrdAVabKfj3SjiomSxDCrPzoe3xXaPwCptzQV2rytd8FFnhVtUYCSBCN9Ya8EyWjxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hrjE8VgqG1FNhdgJmMfDaDbSF49MEgS1iWeNEiySdLkeUB28ZuJNxj4tete6GYapnX91WMk64TDJy3yAB3ZezQp",
  "key1": "2CkPU9pZMY9gJFKSGeSwW5D2P4rCku7wZFNarWkWW2yt6ax3yzXkadYR1sAt9XmXeNbKanbj4DQD9ViirYfQ5zWd",
  "key2": "2sCHq7Rf7q1pFxDn9NqZPV6pnHuTqweuxC6kqg4icmvXzDG6TJLkZWiSGdvP6jHeLSduAi8askQPeQkoh5bvyvs9",
  "key3": "4XouC7LiujYZAZyi2jWuS5VevGBWM4P8wCtFfUbxG1hmVz5VTDSF9ceVEPWZ2dBMgZnBudVCfDPPW6QZquJ61L1E",
  "key4": "2hmwzZnRuPu4YPLZqL2a7wJxzuKZMbBxtnttPbdZa5BsxDcYDwBtUtar7u2KgSP9f4RDjPESjSCRzBwBnfYyWjnu",
  "key5": "54EMMoKuVQPVVo4pN9PPSu34xQ4z6E8fiUU23ZEv6MPxtrLqThrbtgETN1cf1aH38ETKzN4vMMNPEFvFVSxkGZpS",
  "key6": "2gYvmdeCaCUNWHBsDnnumD9jHNh3bkiEgYPyMeiZM4c5XkmTFckAVkTUed9NBz4YLsiV4mhXA7W9jT7aZpwcHMex",
  "key7": "TxUGKVMcfGBji9qfwGWF4jxe2Vosu9FxjCYAKHxJSgRQf2gHUN5jpez3o6k6L6yoJXF5ox1G4rv4mNr4dFYC7j1",
  "key8": "47cbtb7WtsdbFsyHBgz9m3UuAYfq71dg8bw68qeLCHRUGqxEojX5Cj3N51FT3whfVTTmLPSQRANdcY9TK56qga6P",
  "key9": "3mMCvbBRhd3z7L3Lc9vfJuCiMiYydQqmBtZFc7XuBL4CHxrbziHVczMkJGorY36GGoHtSEWtREWMQNUoc37HxxPd",
  "key10": "RMPg9qjBkCnAqzEYJJ2Jvawm1UDB8chEYnxZa6o2wKjuS8jwLHHYb5cxwW3XqXi1QADT8d3CdhZD5LwuLaEJjS4",
  "key11": "4vRyrfcpapGPUHHDGN78DYnUp6TWthVCHpGfFMCuTuupPP6oF248gc7Rd2icC899a8ypKhAadqAkw8bKHy5J7B7d",
  "key12": "MFCaysUz8mnjVbGsgzBLHZkC5uBm2kkyYbKDV5zD6rA8MijUbisBKCvCk1PhmTKwC4QfZ4VhahiCjE8gye3fbir",
  "key13": "64jN8z5URmD192s4UJepcw1nZjsMoWmehLCqSt9V4cMvzaBYpysntKs65YeoXn9Pg5AJQZ7CaAE63gx3sstxLe8Z",
  "key14": "xkV992KZ1ENYCypJ4gQeLCMVCj6i22Yz5sFiJCBg3LRFchorcA8WkN6HUSJRmj6Fd1wDVtLNzcKV7DCV5pPjCVA",
  "key15": "4Rs3zxRVQ5EDjq89RC6FNdzb3aWxrfCo7TxaWVD4tVbyrKPSBx7KaxZTGU3H9tsFHGW9Gd88yDdPfA8jiQ598Zwi",
  "key16": "4SU34ouHjiSj7BaDPBWAGdWgdckfahekqRVDRVgCvssyDW696GzyGgTE2aShH4cMYDWVSm5zVLTjMbPhoDD2bhQ9",
  "key17": "3KyX4yDMmubaAVu29bHvSS9qBSyEnssH8njuUF7D54yD6KucA6jFe6R4CgaCCuZpMTLx9im5bDha8yN7NNFfPuLt",
  "key18": "2UnTf9MR2Ss5L3Lzz8TvSsWmigPo2zGyXXr8uSeg2caMi3h5cZiPn4cTi4zew1LVYjhwT4guMvSsis2j7AjpvqY3",
  "key19": "4LRtjd8mzCxXmF1YYLiGa3NfRyuQh6uA5a21fCFBT4ngsC4pRAuHbnT3zaKQqRwxqsa3SdKtDJwTx9cv2DCaGmju",
  "key20": "JMEr5MEEvJMGcPvDYPfoZUDyUFyRWhDpuaFjxckyaJ1um9WPEBNa64YSrWMqd6MamYmKhLnNrec3uaSmRUebtY2",
  "key21": "2ZNEm1mFy7Xru4Q5UiEa6Dg4TRxLgJwiAEoDwBD3HbvfnQcgEoibr2YKWCKt6iCrSGVrXQ7r13pjTUsyQEhvC8uu",
  "key22": "WxYebqJAPZn8TfPJVwUn1NFnvYXdX6SQt4WCN5BJHomqWXPkgUteR4bE9A58cRAkcCGzDVUZ31mpqUKDAjqHye4",
  "key23": "2y5KPWEA5Z42yEvP56e6ZHuLdsGD9UVXfhw89jKDCSgbqCVVHZaSMbe4vfrxZzDmSZkKW1qvfw1HS324dTTv9ZTc",
  "key24": "5nHozQEuJbw4dBvqiC6Nrb4rr2yspTQ4XmGQXRzB5iekBBtWUybXXzK2bZ8ikM5tp23aP6j1XVQqBPh2B6aLkE8z",
  "key25": "3NeQtz124VirvEsdqF8ExUK2WbCgH8dU6X9b8Rd2jtE6kKkzRb5taHVvEJfPdQka923jSZtLUfZUf4WuKMwjQu85",
  "key26": "5rmvZTLvq7N4z2M1BVCVNapm1U6VPuDtkm1namwuQN6mvtudDqeoHT27dyUqKtg6U9u3ode8Do9u897PY3GxBEb3",
  "key27": "3WnuK2DK1MoT5THtKkoYF4uvjJVZ7BdPesbausm7oBo7PvWEEWPwL9m56CqD4t7C7kspFArfsm8fNdHrtXwXiaRo",
  "key28": "31fBM4Ex3VUdYfvarCtJzinHotw5n55ptgJtnBoNqCc8UMGDWJmrXJ3Na67k3pZm7nngyAoNTm4veiBHuoyU7BiT"
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
