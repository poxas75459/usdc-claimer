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
    "28mu4XtMhMnNWqCkXk8J5oT7AbLr4rfzA6PDdVmUyWd6hDkoZLJ9yMQ9J4FfNUzMq7oyJbsHfPjCZCjmJztjCRWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3shf5fZqi89Libz5UFMxdqT2tg1rL7a96zWuMtKECWniWFYEKPmQ92pZrySa7KfW2FaoKUxwikKA5PWo4Kz6sp4Z",
  "key1": "26JhMDAmLrW6qmWs5o2RcCbUshy3GkJH3fctAdQKKx5KHZSCwbwmjEimY5FYf8jD14jHkpSjXiig4g8DDRKeifVw",
  "key2": "467t11Be8xrj5WvbXeW1GJHf4f1HagCdhZXhCL1qinZjwKn4RDAAN3QoKbScbFdpisbZN6GTngakzov8nBGw7J2U",
  "key3": "4BHKts7phxAvM6RtwScDdmNkS8ELf6er1mfykbCFoRm78LLJufJtDt1dEaetw7YcoKEmgGPiDd7e3ALN9kLDwfrM",
  "key4": "4sa4nZJSq8c2tMUptLmcfyhwhd67vgAXNdeDDvC7bB4c2wmVodhdnta8E9ivpNthTBEBZdS3zBMWP3g76yDN912P",
  "key5": "3F8ywdTvMECcn8wtRPtWTEeCcn4hifMW68jRLSHVvKhY5w11q26nSGNxB8vY8tS869UDze7k82shrg41GCR27f9D",
  "key6": "5Ci8iZtiJyL53Gu5bzMEAvW9m3tgdPMtQ7apYR5SVmq6rM63fzdUwZ3BNJvfFSYyun4Mcm2vBLBWez4KCKzx8RAX",
  "key7": "2Rew3xRtJcxxTRenUB1syziBCYaptj7fyev7JySVHqWu8QpC5nEhzKtGiYaNxwLviEJc9xFXutjPXM4ZmE5W7EcJ",
  "key8": "5GyEPEuWCxMs4Ww8tWhxVhaXy3Vq3gk4ZCNFtdGWBwqBy7CSaib9T6PSdzoZx1iygXUNpjcqxb9BpEv7vh6HiP2z",
  "key9": "3WfF3GWRRTVStSFz3oHSdLREJSdk8KGUAiHvMHv5JgPAjzHeZQoVAnDtoj2HKZQesrks8KXvygsh8jvafUayC5nf",
  "key10": "3NtMR7k4GcMo7yYd1E37SWahDgcybJ7zkaXXT7XyRjUtn3V4ZmCQ5bSey4tX3ZBNWeqCx8eJ6f4fZCKFbG5QA4x6",
  "key11": "4Rr16xZoSPFAHQ1u5d6cL58EgiS38et3JyFr1F6F4hxRXzvPtmCkwcCCJxgENfq3UpYtuM1U5uKaTPA18bXFkhPB",
  "key12": "2FM1NdzqTEUJWvYURa1dPdGhfvaDKSaa2Rs5oUjrY1QPaqe3eF3WoDaFREA5dnr43Jneh7V4HuzW3y4acfH8Er5Q",
  "key13": "5zYzssYmFzzym4j6cDbkdJTxnLLVS6x2Gq1KZfqVXm4gSGjaWyKpkhJ4DPtTxU1c6ibwmwvGSKkuSDUQCj7cXdf",
  "key14": "3PdMGB1RYSSALraBxRAAHsZJkFQ92zPumBGf51QbcNY2Ddaut5t97Q3zHKUF9F7yCVY4eEq2Xo7tt3A9uXAP8MwQ",
  "key15": "5Ky6Eucm3BynkfKEBUS8dVsvDH5g9t3pTLrNkuKsBo4UUuy8Mq7EKGPBgti8nbkw8QHE2rwUrGH4mc1FVmrkYxtf",
  "key16": "4NoY32J63Z6g6EYZLMHmSFfdZWTnBsdea7DB2udjUVPcvuHmhQvvSyDUzic3Zeua5ivqrGZVRihPpiSf9k8eVJRs",
  "key17": "1AB2H9pbxcznWfnQXtppW6HymzxKhRjxMKjKPjT4CgmPJymJC2yTUiDzeGxT5tyzgEh8QeRZ36uvKVRwrNJtK3L",
  "key18": "5MUDcrKVzfC9PkjghTC8u8LA5Asq7mv74g2ADuaU3Ba2qnJMDkS57bDwJdNJDHGr5sKp8qMnhGhRcAP4Weu7bYmT",
  "key19": "3xbPBDSkc5ngGsMFTZKDVBHd4tc9Bx3fQqLu2A9sFdDTL4UVCsKqrVsCPcu3uvs9Nb9DkTcrtxczJsGtx16uSZxx",
  "key20": "4QLF2y3qBoYsmF2xiQAf3PctYeKe8DCQUtdxRhCSjrSF28EYBKi7x1mAdF4EeCXFUexd2fF4Mm7y1Etauy2dkSpg",
  "key21": "5yA3mkUx5QKSTwz7N4c1iqeC6tefFhWevD3yDGATnC2oXC1VG7tDNCqKSLBYkocQwJtertAygKsrpBFRWUbNJPpg",
  "key22": "2GXwMnMeyNvZ3KSfpsLtDFDG8uUvkv4xsfaTxJFYiCPz9VsPQdoNAUyx4zDtEzjnZJUN6v4YChuUhTZeCweqV519",
  "key23": "4Q3BDN9VakLRTsXh7mS6TV7afkLzWT34d2catwXCDMp8U1snmZUTFQxn5F5sMkSuqK17vXPYUrQiShnvEwYJuhcS",
  "key24": "5g3irc4yLhYtzb8uKmxvaBviVqqAdSQnQ5FEFzfwyvdrqf8zEfY7Zyj6o9xcW4Sh6KHwyH1Gnepga3Tgw1rRQVew",
  "key25": "3QMcAn7piALC2hJYX3P6RCLPoiWx7PMDkcyn8FYGq6Mq72B4j5XnL6vHqBsiUXFJ8GWqncs2Va1ziPx9wqCSW2qw",
  "key26": "v482uAWfGrVEP3snF8sP7aJfLb3jTpUczwzHvqghcugvFyyHAcScH7VFRog38Nk11fJ9DDs23co98kzb5z7BnQ2",
  "key27": "3ymtNZCWAKY7ZvujuYaT3CfMHXd33ZoFwpA8niB18kZZ39ezST3UFn14B3Xp7enF196xHMYM1PGfftumHEF8XVzK",
  "key28": "37DDbgmu4KbKQCZ6m1RTjUV6kUeKfEwTd8WgKkU3JBuoitEFLWHAiNnmdzhY8i4MBCo2fASJZS9zKD7LM4S7XbgV",
  "key29": "62haWgjYs9qN7TPLe4go4MGQDtiQVJyxBSvnfrwjtfC6RjCc7V1GwhxQuxhVDJ4VYEBHwGRdmUkzrfguyyj99vjv",
  "key30": "5vVz6fpSu1Ua2sUPTEsXt8sp7WH9ZfJfwY9Z3rqALBpbN3TiyJ9hNJ8twPKSymAc3qWH19e9wh3vRvLYVkQBjnMd"
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
