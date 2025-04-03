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
    "4ywhQyWd4VZ484nQAnmqaaQqeGP6H4aWetBwy7QuadbuLjCv7HbwTenczUVCBqHXjBKg7RLuQuDh9Q3M4kUu5CF7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qb9qmhdpyfDfGoLWUxZ3ei7JjP1c7Dhjwqk6isWaYoUcBf74gfoH1nyps9siKKA33DfRVG6ngk31C3VQZMPEzwj",
  "key1": "3AqveES67h6mmHezWDZXBDMKqfPwUkjTgC7DTxWmBXvHVRDBxDZeaPy4JsnZDfn2Wp1gCNUw5fsrXRJeUc5tEDKY",
  "key2": "2iKRgsEFKqCEpsuW8oE4MqfX7NpUa62VqFhcpT3hbiMgepSEDzt2A3T3xxCj2oPhzPXxhNe3EC8jdXBtqvEpmnSe",
  "key3": "29cL3mA7dXBqJu1uLW5tyZcELhs2ckzYY6f3MFPSKMk8HJRK2DimnTuekqtD1rWDWdrWez1Hceg41ov7hzM3nZRm",
  "key4": "3uEG2Sn2QQLaBTQePjaPJNXYB1yW28ekTTNDAzviEsC5esrrfFX8M7CkZdPjhwFwUmNFbjqXLbChkPyRWQB9tQot",
  "key5": "3neHUYA4phYrfpYanXBi6aKqNsp61APVD4dWDCvFkCS959Ueh5Ebrfa8aS1vfAQPD1edUj97PZ5AYF9sp5JesRL3",
  "key6": "4djG68fvBa4SJdjFQonAUHfteyM8tEXagjLHSReqRf8gkY9X4H1QeWjs1WnuZGqEvxhdvqDnou7gUqnwi7Lys6Sc",
  "key7": "5xiYqVnPYvKCN7yWgCm9zA9DvH8Dyt9VFs64tFRLfHSgyv7Ayn6Ds4z4podiRBzeFdt5SbCMmm3aXwXpp2NGFr8H",
  "key8": "2yoZTmnVgGMrbBoBdLHW7myE2ZsRWxNTDafzJ4TGCoEqeoSjpKz8YLRcftY4yvaPtntBG9cgVK36LL7Ug8TeAM8S",
  "key9": "4Qw7dapRUgfzLZfyExMq7rrK1KFGFH5RcqAQngjS6UfG2yqXkomeRoKD2NCuxp9FkjZWRruXu29tB1TA1amPZeui",
  "key10": "sx7c2rmLfyKDTo2a1oBMDx9zWXjCyiseiuYgoTQ3NNp1FH3xBvGsUcxJVxwm6DUgGKYKwTTAty3BUjmjti37RBW",
  "key11": "vfPeGmKhgabnZXhMT1xHSQfyGJpFqf5sNx5y7BHGiWBy8oqgxg5SjafpU5bzju6qWv82ncqNrL9cevYer5Uhfmg",
  "key12": "56xHp22fYwHdRv9xZouh5BjmsrzTcWAdCUs5VW6FZkyZSi6eppQApuYusPYMTtsmy7oGvzYRVrQuky1ajX64jRDT",
  "key13": "5BeCbf6NbHdYdapTeZ3PH6UATzYCQru2WbGzjUGgugbfKQ2BR9x39W7nTZkTioGAFgYM1fHzPrnodezMrjSVDMRU",
  "key14": "57htipDJjyxP6pq2qESjumd9khxfgHsDNSiipV2KkFk3VgBGjkdK2UwBSQYAbcgHbyRQdTXYJZZhbQeuQzDoSfcj",
  "key15": "3wpWvDVUCjZ9JfUiDv7ZEy9R1Zqm9GbBX4Gyb82ZvYRtJMKnt7RKTYN9i1VvQuCZjCQZVZbZuuvb67L29eAxyFcp",
  "key16": "odWDr4BGn9VUHVU1VEzSKFf7zHKCgiWiBZFhSgEJrQFhSEJhQbphntV6cbbETMWptwEoPGkqE8SoTZaz4XAuCec",
  "key17": "4dzsFUg8UdEoKjQMNPyY54godXAxTFcMxUYRGvJ5w625DUfRD1ZMQsT9n1PsSzLteoiHrA9gnhxcT7Vt2LmR39vv",
  "key18": "4pmNxUKtLMpjrLG89uAEsTVjnUuN5ovseGyEZRaAu3PPVa3sRRQ1AiiymJ3v6bUuHqYQj99Z7FU6ynvt6mcH12gU",
  "key19": "5qtyGawCDvfTPhtqy3CrQhhWmMt6RjdyS7j2ZxNPPPYogH4krDMnTBvgiY5s1pJauM8bg6V56zmcPNF8X7ZTR5MP",
  "key20": "MubVsDWkQobCZaqQKUx3BDJzr6hSiXbGGnM7sR4v99VRfKmeVw6uSnAyCEUHa8GfFkvK2w9Fb9WnnSrQb9yEfDt",
  "key21": "2QicjAPcXyvm6Te17U669ek139yPx9o6sUvofn3bN6XmVfvT1QaEQnqnm8UHBXiZx1Z1K5yghPLHeAFpUeKwbUKP",
  "key22": "22vC161JPRGtXcXRncHJdgdwEuB4ALQr5iZ7PJGqJiFBTTEfbLmMACANKeZSbvPypSXNz3esxRyUaRwjyAzazuhp",
  "key23": "87nG1UxHHnCbF5q8yygGHx7Mv9oYFUTwYupwaX947juo2gHkvCdJicKPkfiUtLkHCAEZ3ViTsureqqjuH8NtR9c",
  "key24": "4Miot3uczmkkR31q5CGxjs8S4wyFXrecwkBynFMwqw7SEa3GfkZ2kPCkvL8Fq5hC3eQKGNWx8xy9CTf6Bp5WEpAy",
  "key25": "44mj5EGYi7QyfkGMHRy312dJXkcLurTZRKFPQTZhKiQX9oNEadY3MZFqfqs8erWsnxceaL4kLRKyWSGkobmPFy9R",
  "key26": "WzQSABLzL2bdqLUiga5DKqiMH2RhzB94YpiGmLf2VyUPsf6fjwQbChchGaZ2E6vXvM7VGrfdjfCN1bRhhVX6hmE",
  "key27": "2eVzDhQhpm8mJDxurMYYr6aut9DARMYCSac4udQKn13ZbW1zUsqkgm9v8yYQ5kdJtBCNGXF6DzZUVYVMLtSMz3pi",
  "key28": "2BTpMq6TeqpHVEs5mPL5YYXJBJhhGWqiw9wCDQsb1jpWaEwBgi8JwDtt7AkPYmiYhHqzdCGZeJzRBU6jbtTEHv4M",
  "key29": "62ZRoxETNqgcW2Hi5j7dfbD4y2neNB3F1fmokyBMXgWQH8MQkY96EtvoBMGabx5nBLs6oA1osSVct8Kixxrny9gh",
  "key30": "Eu1gb8GtgFeXpPDPzazbgdZ4VPaLK8EfFYtqJSiNVn58wJKvFiuEteHCFHWvWtCubvh6CJcyoL2wjAtYi61ticR",
  "key31": "56XQE51ag3wYVxqYkt1xDRgPcKBpdi4BQp163cv2qkE5nJB7yYZ1tsKCnzdri2reWnrgbNih89KE4s7mGKTSqvnJ",
  "key32": "4Q8Lrzg1Q3NEmViTuKYWkFyTWHoBhWVu6ifjEXfJZNpT7YCofukJxeHSpL4o4FqZvmYRT5F9JUEUkPqgLFF2X7LG",
  "key33": "TiDo2Fjacio54678dQCwbFhjQzvLNbeMHXpTorTy19spmqGPJVfn8aN3vwFs9XmECF3pMcQeksHnJ9nHkWosAV1",
  "key34": "2T9Cf6YRKjfA99eL6ZeD6z4SPrXgStn5JKHsLWGZjJUrf29tCubLyrg1Rvgk5YNK5jYXopYBAPw87u29pbsZrNwo",
  "key35": "JrX8uWekLxYtPiJUNqKuu7TTXr1jsktzKx7gWtzF8VHGk5QFyHcBeXZkp7mZa6hr1CEaHdMNRP4pcLGzB4Mau3Y",
  "key36": "4EebaY4oiHrALbcUGMNQC3HDhzKMM5nZb2kFMfSjgratgfyEjwBNLqiziaqEYypUBu3euL7QZrH77goxj6tfycdN",
  "key37": "2Ewg3QKmpv3JLYsW5efaEizeDDhP25g4mjVcbyDD91JQUCKTQEjdCgFF331wAyCHvStapuTSmodcEAznU2pJyNTB",
  "key38": "319HTLYK8D4niUQ6EhhT18Z1jd6YHmPM7y33adAhiLr46oAQ11HXTxDhcpqDymyLhZm3E6CgUr7rvo2qK4DHjduV",
  "key39": "2aHZ34EV1WZr9zDYk8Ph8BcPhDS9GZEZSejdZpcNcvFkL8reyQEVJ18U5df74BLJsdUakdaQiQFE4RUKdqqfVkqG",
  "key40": "3qJbtwEfVYjxXhUaq9opwgqMF8wgLjsqBGbpjRgPbyVdDND5jrNACrktwTsma6Roc7jzdeEPKqqnLneATJndVeFH",
  "key41": "3G7AWNXdk6pkvhvL6xak3iXwY5euZQNgWgspyXzN5YiiUseXZ1oieukumWCNnisEE1drxv1KphwJ2fiFvTERENgz",
  "key42": "5BBa1g9kH8LUsEqvDohqSt5cFouXiumxnZK4AfmVSzSdfgV54eqpfEaGUTQCo3cHB1btYcUywbSHiCFZ2f24kVna"
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
