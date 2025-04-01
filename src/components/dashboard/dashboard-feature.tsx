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
    "sTotBpNVxz9YHJrCBVjfDF1w37KH1pQVs3XJK5PVResabv3u8xXcDc7jf2B4qRvWgGGKC9v2pBYS2pJR1BZaDwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DCfE98X8z6hwZf3VKScArjtxZUAqE9dZkY7c7m33kHksq7aQQvcPfab4ZECFsQ27LGAsFszj7R7CUgp664ExMCA",
  "key1": "QCc4LRi8CQpT6g3UfQKjP2c8TTNMQde7efszredindsekJktxFaLBC9HVkhtP4arJZskUPz42VC9gwatnXgJV4d",
  "key2": "22hEZr7eMwRh6uAbEdHKd5mmQqt7qQqVm5pg52ynmWCZ5tHg7P58yL7KAroA1dcd2We5fC8ZvBE1HLRJYZaoRV8i",
  "key3": "N9UAyr2gzC9EHwZcZcdFdCo3WU6ChqoaH3zSpW3JsETZAzVRfUN3afhFTSC9n7p47M451bc45jeH9SQ8WDtMQsf",
  "key4": "36fvp7z6Sb3RpSXjKq8eL9LSwPDB4Bf4bGzxTLs5A1E8DfN82dC8AunKqC3m2dndSYm9dPHQMdzS6jXZ1Q4p53yx",
  "key5": "5m9WJXTqUYnzCgudo75Tm5EPUfqYLsA1uvfStNvaaw1AjNPYA8BrdA4CayV5JJVF7avZcp68ks2P7G69CGyLbTt",
  "key6": "BZwWaSY1o4v6LTX7pYw2aUxcdyA2mh3yywLzDS5Ea4CmWGoLBpZbqB4FGEGPB1PjZvtAkEUxsPhAuUzsSrsUy2a",
  "key7": "3qEGsQVxZ1WfFGneufJ9AF4hpCFgnn9Wkzzv1sHxTKheDLeEJJiQUxGYtc5tpAuN8h8rY8vAmXmctgT1RqYJJP8h",
  "key8": "2UQ7aP9wDrFH7B48KruwXwMZMxkevFeLLspGQySPzYJLXnMVG5MmR6SSr9mJJHciS9xeqDTPFP88wbG2oUumjXK8",
  "key9": "kL42VjRTdzQtgNNKSFhpXbcvvK6vZf2Wsmbo8wLuHefuiJNmvwHtGDKTJwFQjkP7DZiR9nSCRiuc81pdrqNKx1j",
  "key10": "ahHLqGU8mc1CmFBQueT9DHi5Xoz8Uyv9fEhSUY4pffjPeAZsSfG9bRu7AK66H7Sy5DApL754cZCxxdPTu28HGdZ",
  "key11": "2sfRk4JTJkQi1ss1Qpfu1oLQ6aB1TFEuxePUv3khcGmgns1PPuKxYx55V4VVZhMfrC9ARiZJZhUV19pDT9MB5Kua",
  "key12": "4Ypy8TXjxwNb4zLWwBQ2aJ7TW8HDxyTyiBcLoALmfmUDwhg8SrdJg8YQ3UFqfg2VBz6Qb1SSdeMcycLDsqTQZcQH",
  "key13": "3yR8d5h8njJUK2dDrrfX9HquodsZ9ARaxUZzcBVBb6CZPUWFKxK71ajVMcH2FVV96QZUq5k9gupiAQZWAiD2AesL",
  "key14": "2CHUrnHMhMMEayDSRcwtgM9X84gy2wKY88dYa1zg1N4yDt6jP377fuSX6Hygjb8R3f8xautfYvSRPFCjoE6Jekm9",
  "key15": "424yx9Fyuw6Nb66hQwxma4kJFmZP77XHAUR1szBnhKGW5m9TBrtaozeGxpnJmyfMqjtXdCcVJqjTZrDByDU6VNjK",
  "key16": "2UjCziP9R58X2aV9St5ZmYUhgwMj9B9WqkHWiPZG4gNW47TdHpTFUWWxTLWM2TJ2ZKkHeCaU2A8RdUPXTgXc5GeT",
  "key17": "32YJ4P9LMRyu1iYF2zrk8qc6m2eKDpMWUkA5HmPKm4RC6ueRzaE8sh7AWKAMsaMjxsnmNreVn4a1nnt99yeMjN37",
  "key18": "2nBM3WpC2dNZ2X6jioddEKSD3wejpNeNCjuXH6cqEdxyZPjrYGoHREvXVtegHPshgfbdT4SZhCn12yh2s7rYRevg",
  "key19": "2jK8B6ajC5KzxZNUyWto7MEEn6m7v5jtARxSuWcQ5YArF7qJ7qNXqanQ6cgf35gd7GYftwWXU84omsW32gXENcov",
  "key20": "2vWpmoHnUiqHNXJzPMLNDPgZpxZa514T5W7abQTAPnFMmuJtoM1zWJorzgPMNieBgpXa9jV3yXj1qEfHBJtetW9",
  "key21": "xpZGJegprrH8huvdPwMV2fEha2J3mQAuCGA4dxymngLbx1KxqZyAgEbTwXwhautfM5WGykYk5rWehTLQDkvJHST",
  "key22": "2bAooVPaw3wB9H1NBwYmX8f9HBmuomjn8hfbVQSQAyAHGVwT4ussspxQFF8joVVQSvVDg8XGsjW8vGnZZ7v7sUV3",
  "key23": "BgK28B3ap7DJjQFbad8vjP4eHH8qiEjpAms72eAfREnJ9uMvbErB7zdUQXN9ZkwbGGi9e4jUCEbwwxnRR4jnd3h",
  "key24": "3yyQdMaaGhUA4XqD2zwh2JhqCwg99bpLVDSxTUFyCjGadf6UD5T2exMn7gE7Ls3ao1GuMyagZX9zxSntSFZxZsaC",
  "key25": "5k9NEYeZCTWzFJtZ8cLA8Nd93WXLdRVccCgP4WiFXdYRQp6p34g2Kc8k31axv6etEtFBWi3Jw2MrxdsoWFrxTr5B",
  "key26": "3dTSzNKohoViyZ8JCoGkxTCKixTFR4PYxrLmQ7ExixwBWLp8bvfNJ5y1nw7ekRNTzxNJjm4nAKzSsqd642FLctsG",
  "key27": "fTqpQnK9uiQTbDuw1VhdKr5NhkhDbEXE8XAe59EsvYv1rMeQYPdvGhYUN6m9vukxvsSxfuJ1UVrEsNrANeHmYEo",
  "key28": "3CnBt4CYg7NTZmVpfJUezUR8AUpsKkoXwepxpVhDsBV4CdbmghLZEQfAm3wTzCYXsV8HZ3DKdwhTeFDakugBysKd",
  "key29": "5RzftkVdJxyFC2FgQYoZ7j8MRSZrY8bSmWGvk7JP8hNNuAaLKq5w7D2yEzYMAChE9VwYJuVDcFP8KXr6eqk6rjfm",
  "key30": "4pDVd4MGZNJBEj5durp8YAHGrYkCTKpFQRuH1fS2EDMNyhYsohN5pusyzfWnUp6mxSUfw2kNRpwAxHmGH6cNSJZt",
  "key31": "2KL7LNWJB87bLdkzzPuv4Fd7tN5hiKxVyTqpJgDLreCV2Z5yiB2emA96iz474f3QB7URRVyi66ESPgVRm4cEBgrJ",
  "key32": "5eptVG6DEiDNYwjBGvqxJTLDLDBGN4FQUR2DCMn1S4SaZQCnNeWD1jDtkikonkDinbGuFiPBiKAfGscQtpwL2CEt",
  "key33": "5Vjqzd1MuModmgUK9ko667jof1tzm2goixsBwtbvnsDsXCep5ghc88rUUznHenAeRDKZdM1qPGgsSBTKJqi7HSmw",
  "key34": "55SQJDrmTvw1MdD9wwWKwKr8pQNu89heUaKKrfhC3z94bVwzW3gpBYYxoSoeK8xw7hbBPDQZAm9qsbf8vv7jHfJs",
  "key35": "62GLQdBM6DMSg7yTkty86P9mi6n87oVjE2QurY2SLQ3oqDRH97KjmYaYvgwoNYWp3YRVsvsidZoSs97k4Xqm71j9",
  "key36": "vAp7U1oq5n7Dxg9XKKkHdEUE1E1ZSK9RWeXPAgLaoo2eg89YsQjcTpfMEziAoKjdck8Aqq9sS85peqN9nXfDbBD",
  "key37": "5QUctof5KbxZeAwnjGJWwspYsnHhjsoyJATCDWFUyFsZ2ZZtCsg7KYn68oVRDkURTuT5JPuQN8SE2RXf4HFeKWVD",
  "key38": "2zyc1FfrMPyiVQa6Q9GPHEQgYSbkLRnfNzn1xcu4KzGAyU34FbePcRuEjaHLWtSazhNNNrX1PggY5HVPtwoWoUBy"
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
