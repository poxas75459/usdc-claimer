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
    "2xcH9qmNfqqsin4PJcWnoxiGEqaiKAHph7UTq3BQQbjGhxxc4tJitW4462iHJvp6W2akecrnHjthZ2YFA1bfMc8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cgJKYdjbUah2c3nsp5dCoMqM8eUuAxh9iKudf4VRfukiLivpyvrzbHSr4LwoPwVJKtgLMfeK8a25G7GvTWMDYui",
  "key1": "42tAe4QQmvSSYLaCtjB6s3ax9ujuBdqFauCfTr9W1MQusb4uGipBxPezjRVM7xkzaGVdukpWT1WLH2sMEMerFXuG",
  "key2": "4UuVbrJdQBxxvKMaDTBsarjtNeYYACK4brKRjXfqsdDVo4dC1a7LiBohDz5yqGQfsCEEV7SxDQVqqcaQVK94YZw",
  "key3": "63gPLtZgBz3MsTkYw33WB9TUAN36dyY4woxh1eFgzGBrMgithwGfYHYaF4MJ249oNVQok5JG5pQEqi7LasnZgCDx",
  "key4": "3dyh8w6ckgycSkBzGFUFZ7aRvduCubz8Fsm4YFcXXygCL6UqJgQJCBY4QL1n67dwsobMQePCraAwt89tJPkL6KUV",
  "key5": "54USkuoRymbiJdwQFn3dJqSukhhqYDYiCGtkg4C6ysPi7FKv3ehHW9CDYnhzmmJsrrBNZsNQUYaLoVnSFSYaGmq7",
  "key6": "3vbWQk9Goxr5pjBcMee2yP5DXfC1LncAVtLB2sizKmauSyGvJyvyjnwf3NdT8gKzsVjP93TZP1y9P2cBUjMAAP5X",
  "key7": "sUHzYsgZU4vxhzG7bRSnyaP28rXCDzYu9NUT29J5XyzUjQ6a71Gpk4ogMZvbdkPAvX4XYmKyPLDgp3fD4smuCiZ",
  "key8": "u2wh2UDJmwso8HaGT63MeaSDjgVGQS3dHRonG6t7r6c69wsv9v7hvMSMgjtHnegYHoEh431m9Gjwm2JpSV5ziLt",
  "key9": "2ua32wwrpy1mfwftjbkrVvqw5jhKZy7kPRvY494dRK68aGcPfqVwHh4JG4gwUBUjA66oky4mCA8mYxty73y1gGX",
  "key10": "KE9bDBPwKSHz55F16uu27J9TBWX2cMQCtDGC9PsREHyhc4hDxSJvzwcdR2s17GiWXzzgnMWtee88jRx5Yunf7Yz",
  "key11": "vvQ5sF6jxHHLRGwfXGtiSQAx9dxSWKe5pnicvp7Sw7FDKwfd8hwvxhCFyUPESPJ5WPQSY71AA9ohkvMjFGwLkSK",
  "key12": "UTDAs1e6qgNVi3ModHHvkbV1pkj7CnXCvZiZfkvHHherrkLJvGuU5i4t5DZCaojgPtkq76nv1QkzE78rGhBKDzu",
  "key13": "3v1vLZMCbznBGfWGGuzCs4MayASHzPWxxVPB6bYFXESy3HWTjwPKd9KHTi1maQnUchh4ebSeFhn3LiADfPjwjxfN",
  "key14": "5EX6J7EqcmAyFyT4qkeJL9bdJA2s9MJvoJELTBRDRSEyA1Tt1DgmimBAps4qWUHteCsWMpFPwFCXR29qUUuCsjoc",
  "key15": "4KfspDQyEQ6HW9q9qaMgGTYGG1EXmq8fSkB8zqZhN2NbNq2jGSHPRKSvdpCGjBEWGdBGRu7jHqRmUVcvF8LjKagF",
  "key16": "4ijsiCoUKGsCiviLKmvXJBWakUyRv1m6yJis61o5HVMuhpDJ7wCkRkmpbRoQcXZGZLJChSSe25GxS9oJiub9rYA7",
  "key17": "4k6KU3TkAPWRAd55uu5fcADh4TC1tRHJdwG6JzVrdSViCNXb2F8p4BW4CjD4YzaKdCTsUxqpjVbanihiH5wcweYd",
  "key18": "4Av1NHBXWeu5QXMgRKJE23WUfH6eKzGRkPCzLVgPdsic9Y9c4e7qxakSmHHZ5fUBcrs7rmP6vqZGMXekFH3LTv9t",
  "key19": "MGoyyVsoWnQKAzGecJSj8DBNNBxTeDvZ3VLA3VpUSrEnwpuLJeircNJYhtuvT23EWw5cEgY18G5CFmzQbacT23t",
  "key20": "5Q8M4RASkJHY7B17tB81Mp3UsTtCNen3tvEL5pAorbL9tzhJzdbx5eH5DXGdYD3zrnRsCftjGgmXLpBb7fwgwwx1",
  "key21": "tjgv1sZxbMyjS8v5eukN4UwkptJYnoSy7HsGC1RHR4gXXPN25UWi2pskpbUGmeJZ89WLk8dsjv5wRmdpRRN3inZ",
  "key22": "3uHaGYBKPCFqkCmujjTNFqhyZWzm5qmnFkuityw8KXBh3RrAj9ydpoAkRqqeC7zK4zookAimTF61bqXM57kWo6e9",
  "key23": "4QCB3uZxnzuU2jrqPX5j7AsvwbJjfYiu4btxfJ4rsJdSnmcdNsDbzaBCcL5rTpfGztFNFToRYZbeWgqvLJ7YWNjT",
  "key24": "4FEeQag3DjPKweTzmZZ484jbpoA5NdAoCb3KoDFvCeWB8CwdSB6cfyMYfFKuUE1GsRCCtD29Sdj12Q2uM5JFLx4T",
  "key25": "5URXyXTQtAGCQG4ML6WamKpH5sYXQmnVfUGaQ6uffXwSGr2U23RNvSBbp1TXDwwvcX1sJUrDQdh8vsHCetgozgHj",
  "key26": "8V3WAvj3qtqSzGqb1qfPycEQebHN5JBgNvjuNpcXbzUGvh6aDzTAtPmFfZRL4DqjK75RTE7aGgLkvTWQp2CLh31",
  "key27": "3NqTuANvrtPs11pQVxqRwkrskzUbTBNNZgchxQczGrj452XDHPuQfxCoaWjXSDDC57JpXVQSBWC5SnuquxBvvqpn",
  "key28": "4cFdviFBxxzsrbMo6cBtqwic3x5eXbjxg3SfWR4GcVT3c9GrEQ3Y9jeRai6vDaxsEiNcL2AYxrRTEiZgB1Q85WkP",
  "key29": "4zt7876pSrMzLsktrD5bWL9Wj6K7aEHVohBWvBcJkfNYTkY5yhC6VpC9QZGhze9CnbrYCS2bsbonknuSACXLphYZ",
  "key30": "4pun9cXJ1uUbCXTb1XkZ3sQucZ8pJX5RfzAuodXcscnqiUF9UMWyqwM7GSsUovPePNi9baVoA2rEaQY1jMDA1mvY",
  "key31": "2WdAQkMJZgZsZZ3D8GCKjJ6y6St41xGjV2MwQ9wcT8SLFPY3tBHSjhmdyhARoPT5243pqkRk9q6Y4AjUCSSQfbbK"
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
