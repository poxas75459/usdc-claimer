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
    "2RHWbUAnpddS7RNppisZo2p68zuMZzxmtjTKRG3nYMs5eJYgysn7CXpKHygXR8Tatt392tAwzRtfJELPqSzjosAQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GjL59iEKyaEeYSAS2WXqxopNgjTsQ7k4rd6xUytBeBi24CamVfjd9xuNSo79ykHrZLivRnUYkcrf6BPdSt3jLQw",
  "key1": "487KWX9RtLoxi1GcpJA4F2NQFunqtVEa9dX9obPPv3Fq598scSvNp8TEVdCcWeQkAbtYXnea5yZyPa5vNmZsf8J1",
  "key2": "4pCUp3FQjohJgB27D2GXtQmMPxd5KZu3uQcW74zmtiGu8NAHzf1De9TuCs24sp9uMkE3qjN4VDdZfjivkTcTmfr4",
  "key3": "GShiD7hMvMMHDEBzpJsHjaecTL85eStc5jiUK538yUcMa8AkpN6i975AtJK5BwJebPcpNKvFUa3Pjvj1oacSm9X",
  "key4": "4PjRmqkbkang4tEfarzj1G6g5s6RvVehiwggiDv9RdXEMx5AX2odaJ1ePbAo9dhepz9coQoQYQnspLyiGJzC2AQR",
  "key5": "kiXyCkQpcbhVfSsxQThVUamGk8D6S5Fr77rzNoKftkrDwH4TKRoepiLeQdfvmxtoGsgy4WHfZHRdN7U8mCewhuy",
  "key6": "3nsR6aCYjnPNRyf4WK5LrfXZB5D3ZUAg4Ku1zMmFd8c1REf4a42huSChykzQ1gGT2eyniufeZNgpYuJ4mrTZVjDB",
  "key7": "2qViKfRmuEKgue7SjjTTWWnCpijLBX1rQiAhzJ7ANUZHWQzWXPB7vCud4boW6PygGxGjc2nDCKgUqZAyJSVCKgdn",
  "key8": "3Ehq7gkLuZxNfgA5bKKejW3BS8SNX9Vd3ZBp6UJYNyN5NC1E8Y4Rue6m3AfJodzrmLtPA3Q7ABWGzKxHKniEwALG",
  "key9": "4M6zSVbK4uueThBhBnMeMCieotskmwKFM7yjQWNeQAAnBYjCcNEXw5CQSGHQrP2yZpXNp1dhwQMtiQs2XSZ67Eg2",
  "key10": "Ri9GF1zstPbqS5nStv5iYaLy5PBAF1CxhC35Spd6LLFkjX7VRY1F7hmcQwBYD61ZDJFtntsSZ2zgpcHKXhfdfCC",
  "key11": "4AkWTKBm2QssYbFqKEgjUN6gpnqWZAi243QUnezcUFfks2PNGoTHk352dRY8EHXCbeBKncbZsVevCssEMXy7sp3C",
  "key12": "2rWimdAF8Ftd7jcm4ouxGFQYRGmaHKdGQPmTQyn7uwqhJgWGXZFUEsRoWaUVkhKST5CUtu9HrJaKhP6ziMJyqk33",
  "key13": "29p7wU5iKZ4sUgfUwYQi8Ed6ujkioZ4LtBpcdhvHyvXoBaoQkuEPMnKrhpeVUHLwFdNwptCVoTh1VwQZZ9gYb3fu",
  "key14": "2uBwbX9WXNG45inKATbgUWwbzPaaJBdeJhyADbBRtsqjtJjWJTFzwLf8cg6eWf8vNFkcnp36zhnPWRvxHqiVAvmb",
  "key15": "587wfZZJd9ycuCdJ3D97hxS2dZ9SJcwdgrQ73rGj9eKRBg2Ufb6BupDxwH7AearfaLZGnPuEdvyH9FiEq5W8NJyU",
  "key16": "2qqqopKuC4zW5mPVtsqzQqBXt2SQWyM6nWPiXpMeYGajAKSUzeT3w9CbntXu59SuApKCprYPp44Lh1PcQj4vSpZw",
  "key17": "31Z2Q7KyY4GFjxgPjr6r3A5qGu1RixKKpHYZsH32QmSqJybafSApzS9GaMaDDnosCcVMMiAp6okP7NfoLJzpErhj",
  "key18": "qgBPKAG1xzRdNn6qh4rtFbPWdc5M6BdoTMgMWGvJccQPNKAv88n2kiYmk1Eid5UbR29SkqN31B9X5vJbBu9aab8",
  "key19": "42Wn1HtftHDzKzNB9yGznbe9nGzawHp9sK1468VnZoewPQt6zU25DvWg6CS98NGB4kNGXA6g1XqASqEddWyhJv1L",
  "key20": "2bYHY5NtCcEadBEQqFCeE8psqtosXRHNTskf8kMGtE5KdRgCMNSSv4pGbiTM8uW9XbzkF5ZBea28wA92p6tBzusA",
  "key21": "4E2ycpZ7T8nNeRwhbtvJhtEthUQFMwC9TAhk5zvYLsnisDMT9Up5cY82dm26bNBQnrU9dSfeKvdT9zefdPkY5AQX",
  "key22": "SWCWZbeTt42bAn89AYHf5Kzbvf6HSc9fK8FtuZYWBbQSVX9AC991agMTnH3uMwdvvo7GXBMBHWHWEcc2fRXZ1TL",
  "key23": "5VVPwnvuUpRGVqbwdTJUBsTeduo7iQC3DTxhKEN6u1kRvbA3ZhuBoUAiictBk6rroy2pvs7uQKCTF2gQezaZ7d6q",
  "key24": "3VCTnUabfWgjjZzVacBHGCPqdEJcay5eDB2Zquwqq1SgynMrX598uHGQNwQf5WhkMsbBgSqMTrwHW83YXVHyN7wW",
  "key25": "4gLLA1iAr19XAcSqDFiYLEDnVjXutz9NAP3EiDnoB1L4dawfmbo1XEEbeKYUxnenP1qLxe63YLHRpt63dCHiUiZq",
  "key26": "3XVxUJGWGkMR2Yk6CJhqRUQNAv46GVqUb5QTZkWfRSYAp3qmumjq6a1aJCYZxWpMjoWWjvZsKrpCLeHSPE9CS5s7",
  "key27": "4bFpyX82QM34wzRbyUt3FADA5o4aJXx7EU95So5xzQdYW8CWMQwRKj8quQiEaHN1ZaqmnKQsujL85ALuNxL3TqU3",
  "key28": "2BTBSpJzg4k8rQcWRhruHyeRQyZnujPy75Ca1Fyknf4yjzqUsozAsT3UmT1B9AhE3TZJsqA9nAoouVRY9rHeKrQ6",
  "key29": "5S1SZVk3gGURfTe1NgED1wGXHCNhP5z7cEL7mcxRqq177U6KoAHo5ufTw9XyB9ee5db1X67obqEXLggZhCCXuev8"
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
