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
    "3fjFFJkYhCGwjsD7Z26GAUcMX1MgqEYaK8cDszqow5E13NzHFbF45fzLWAitexc2YCEzToCHY8MbKP9LtcAk82iz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GiJnresZ1cwKQ8KVXhAC8y7Nxd1bV8hxzwJKXmr8Nb2T8cTx5mAY6UCvWRUDwnDM2HozWw9Jy7xmzLuMHMnn6Jm",
  "key1": "556cvgaHMLXeG4xgj5EQhsJjSXA6UDvTUYRp4qJgVSEtKewREnvfv7hZKC6ekSbqeTZWLzAKsEMJiLrDgBdDK6c3",
  "key2": "4JnpGtZtuGFiAMKg5NaTJ7ZF566VVDzSkrup7ns3EH2J5NeZvvW3RohdhMYhkXazD4xiAKwJuoKwqRfoCpB8oGWb",
  "key3": "4GBu7NwWBr4rYMz5UtfJL7zBgL1zfSzfZLppvCVBCKiRvv5oRTtsDrNMf94asjmYiAExyhVnHWiNuZYoDw1FnhXq",
  "key4": "5QNqgSAXqjjSLncxUtUz3oCYPxXen6YfjPU9tMhxh7cfSt6k2a3bxmtrrEL9YxnN2kce2NboffPUtpH8TwmNcf2W",
  "key5": "7xsZbmxZrn9pzbQLfVaBorS8YCHLfnr143zLuujuQFjjzRRcUXho5TSS1mktd9mPNoMSsn4VEFS6uBo7tFwiAoD",
  "key6": "3GXt6Wqwxsaiqx5oumwwFrAtzAvLLQfZnN2Zcb1ntcqmUs4q5c9MEKwdycxPwsVP5vRb3Yy4VHhuzDaBgxiyq55v",
  "key7": "9dre2KjUkf3Ua6xPiVLnXrmLnpKwamrXdjNkzFwSRtBy4Uy9rycwD674SZmxPWmhS7eiXRTnirMN92m6fiusyNJ",
  "key8": "4dPCNdpQavwKcgbMa7uXivWPm74FwxNepAmouGrHWYHmqoejWYonEjk2kLyDuCg2tibVX4k9vR9GQ2a2njBWzAq2",
  "key9": "3M5LofnN7J15nA1jV4gBEnFXMPbvNCNi83fUhY9MMvQcg41mkYxrHigbGdTLKd4ZyrgPawkUDyCt7nXJZwUAAP1C",
  "key10": "qAtxCc5Ce5gBSQRE3g66oSeM6M9QKPGzhHidh9YGHtkgaY2e7p6cTZjyU85B1BhasSxNPBofkv3FiYqssbqnUHs",
  "key11": "5apDPCshGzaevKJbGvTWcmTiiKCwNhtHZMdeQ3gwguSGRAUNqWXesnwe7iHjU93Jsq5wcKR4g7jUeHhzAcM8nV3b",
  "key12": "agqKAKXmAneUiY519pkKdT2zz8e569BF4ae14pJd3pFMwPXgwGYGSdkG9eHEVqiyx8PxgNJpQGCm7oTD1Tk68Vr",
  "key13": "67mAJGKWMvJwnQZ2byie8MQdrQMTzaSzoqL7wXB6GjnpeBBPNGVauSJXvhYfM4DQxCCE5HuzXWqco4krFv9koKgf",
  "key14": "8W3ftqaqzRqsCJw7nx3FFhqXZitadQ3yGezaogC6yQe73BpsRxfaAiYD2E281j8AjshC8Y6VRF95erU1AqxJed6",
  "key15": "5StPmSHyYPw4cvJAwDaKszhUEJStt31xRXpL29DNfFNpeEUjZYF1NcVj1YxB2F9dcybGDpMxMGpSfyMXuxzZkhi7",
  "key16": "4hLAWYWrrk1wfhzYtNLCHvjDi2o7hZdShnqTNMMTCfej4WM619JAHVwd4fgZT2zjnDdRiQVWREmkoLBugyvWXdJ3",
  "key17": "2mR8cxN7Y4axKbG7MwpHF6PQwW7t7ytJ9dSCxMoqTZAx9Ehqpjua6tJVNCKqHhrqd262vLjjKyVjDuu8Ds2dNXw2",
  "key18": "2LGYeZFBzJT513Tm5AwizvoPnL4dcqpR4TbKYvGVuxirYgWM6k328kga9n4SovsTnjKfK5BY5gPJKApcFNPpdsna",
  "key19": "2iXpbAR5gSbBV9DWamot6Z5TkYsWDqm53ftk6xZWbSeewNS37pSPeMhfybn1eRWBAA71PkxSyLrfyKCWZ2rujFpG",
  "key20": "23RPCu6qtyc997JkP3WhLTvKnSXuezYSqzPVRXqQC7nUvigDBkEp3aGjF1FWcpHyH4Krh6vW5uNAVuAL54RvSN1D",
  "key21": "5JT61EuDSVDVZRsJUjC8kySfFg4Hv2kbKepVErtzQw1KB9MbK6U8NgwAvd1nbAMyigW67dhRda5fSFavQg85QLdD",
  "key22": "4AbDbugtxtpy4DSfZ3braVAG91myCTXYuZVJr4ZZAmxkcKfU1PQqo3NWb38wVrhVRuYm5zcP7KKcCk5WjJvjhMSp",
  "key23": "4eALiUFibD7UaCVwKVyw1SBaKfQ4Vw48Z9LdYfrjrdgdnuoookQbLMguDkLryoFaW6YDduYo7JQb2zPGf6uigchP",
  "key24": "3RBsbqbyJrrCa7hz4AqrezSHLthEqhQE2i4WqTU11dycp9KNDVcofY5UndDAv96TLBzYtG5GnXAKEy5brgasVN1N",
  "key25": "5xq23MAUHA2YLifffg3iBsKBHKvWNz92dLf4jkMN6wCDr8i6rznZEDoa44VAWxLyCu8pqaQhFubsDjmzRzyFCpxg",
  "key26": "4DD4spVYvfS8j3gVLuiVXEq1rgZVt62phHxawiPp6jnp3ReAuRRtYSVVPXyNRyHbUFUKeMe6asgadU2jsEQQHEg5",
  "key27": "63cgY4ZStN7dvoRMVjkvPBZxtiMc5d83aZqGD5HvHfj8TGQf7iSPt2t6eS2m5vYNJ9FkEBrUg7uG9n3dbuQMQ51C",
  "key28": "3YqGUo85uBZWGdtctkBdWbkkoGveCGXMJ7kVvRd431RmuDaXVL5RcvjyRVaNjVDbEZTxnDSrmzLmb9eSkNVDGSj1"
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
