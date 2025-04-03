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
    "uT4LZiL8dLpPxbLTrAuD7DbirYhy5h1DXXKowxMFYf3RHGsPxDxPbaJZm4kpjn6P2ME8urewd1pR7iPMHyks6sx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fQD8HUL4Wk6aMJ62M14K95frvDHBAM2yAQ3kfcdfkrL3t1UzsftAeF4kEig9D5GtATutMuxm3Hj77NZtwcoKRh9",
  "key1": "4Wr5yzK1cVbe54DVrmCU4Zu9tD5VrBkg2TpmJrJM9X8HD8xuGkEGbknigr6MqNcpuiEVJw6KGQcKqVwQ71tt42Sg",
  "key2": "JCEQ2qoU15JySKpPAjbqwh2qmE6S6nJoM3VTRKM9UEFcQBNbjVybStmPkF1hvenx99e9N5WYUbJosapfkYAwgNq",
  "key3": "5422pYEQWYtmApYUxkFbqStHYXehvzJ61ovzbQ34CLRHqVYwZjfHwecc1vQHVdkuuGaSUMLHcFs6DL7nbG5ug39w",
  "key4": "2WsxJkHM74TWgStjagBhKf2aRVMUkZ7kYNBD7Zfp9RXtPRXonndsZBFYUjhg5okJNofe4Z2JupK3TZxBMeGJnWrU",
  "key5": "2P4ETLSVRu8mNMe8JfZMJSHQULQ4s9TUQCyHijEfyiJo3tR5zwywKZp3VAvVQSbkStuFw5FPsp7b9YRgbAnVEngR",
  "key6": "4Y8sgXKXgihTbKA2VpxF2Qysjwv92SvjhtDe5v97VAYFj6F1fwnEvGZgcykGK9kz2XpvWRPJtnybRd72ZwAePtHL",
  "key7": "39NqndmdVvGtTps3TqooGcbn9dMaYrQK9oBDVWWi8ybrqGCvKBKn9bVr8tvX3rmoL1GVTseXS4bA7UYfufyWyweV",
  "key8": "5j4VrhtAY6vmC4Zo8mgaabYspf3ckWzJL7fKbnsTd55GvDtfB8SQXWt4KFnHgUmiAqRbxWfS5ZYobXRuWkCKtcVS",
  "key9": "2TJC9N1LW6ULZdFvZPjMqtg7x1BtLUmmram5cJ5c6iwuCpS3Nf1w74KWMYN2HQW6vAJ2S73KdTtzV2irNCHpVjH8",
  "key10": "3tCxyUGamcAsnoB1PZSRYgQzZhPT7kT52UAVPyp81KuTxo1ptYq9CuiCzmw2gjXh81hUfSpxewM9vgLHRgAHmuzY",
  "key11": "2uqXHMeb1T6shaucHcvcWJNELsYcQo7D8zHqzd3FTdmDaZmksn9GjUxGSxEv9Y2BDwXp2uG6QG9w5Ji12aTJ8CRQ",
  "key12": "N4FUDJ3yuo8JXqmSczsyCfp2avFZEKccKM5kdnyqGGk8X1tiXaj9Zd5SSRp9VZ5wWxpEokjGkqP6gciVrJ81XPv",
  "key13": "eKdihNWRw4Vo1ukwY67ZrV1GSyW9SDtyWBGUQCzJpFoXcqqRBJHwxykNYuGrdp2Pi9AChZeedmtUYYb9ca5UN9f",
  "key14": "5jPF9MjKgL6REQ8AbPfH5gZrbctJZ7EGniBgrQ16Xh6PKbTAtD1vzFMeQjEpVArGzTVVq2KgVhLWibW12k1rHw8Y",
  "key15": "5oSkf5DHm9mCaaC1SirWWg3nro4GBaFXRhbYHBuGhjMpKLzCehSHoZZ1CBt2EHp4LqSnhhHWq9vBBdWU3ymgroop",
  "key16": "EyPzEsy4pRSn2SPYsi1xw4Z252wGF4NTwBEQrmifm8vC9fu4y8aqRAVafVtn6jCPgBnA86TShqSvGLgPp54zi9y",
  "key17": "4KFHKKiD1MycxKkCfL8G9H7QLZuiU6NpFJmRpp3Z57diNKj4LRJe6885DLGDLfJ7xyS6zGhonqtJSGjQLRCpcDij",
  "key18": "35uMWa1HDwRa4cuxFN7Y2eCZ2gyCD9X3PmqqqN3KKPGuUJf2z3QEyPAp6UepNBgjJ4y5ELnuM44qoLPJBVxFNjq4",
  "key19": "3dPEX6rN4DHsDJFumG5CB9rwVExhqgooGDguA1dDR4Y3tn1XWfvE5iRXUdVcSZNqN2KmmbR193ZkJbgphQRW9kFe",
  "key20": "FBjjaoghryyu699bJ6aNa2GH8PXmXAiMGPE7CUAGgiUdXP3Kz1vuhrAoJvcurKkUPfFEJCUae8RCaYkTuRzeNAt",
  "key21": "3rzFXUKc3wAis2K56tNE2yDtGxxK8PhFL7nkAHwCujchBt9ba42NKZXBCfNZDLTvpACCdv4So7prU56x8rPUyVb5",
  "key22": "3MsqMffKs6DqDvwVaWCi32xTgkz5V4F6KXFoYYTcWgx9VX5uVFoW7hu5q75o6v1kd23NWDt2CjKxuMZY1NFfCYox",
  "key23": "rsobPCzjsfeTXknvbXXLY9ipkLWwdebJVowfsrBKz6DbqnyNRXvG9C3t9iAchAfgWg5qGLgimZWZ78JjtF4gR9W",
  "key24": "5SbU94tgQodJZ62y3fxwwZ4hdEtkEcRwqUor5awGc4bZyLodt2YyEPvAq2beKYvFFRyXdVcqKRhWkby8S4d5Ac7B"
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
