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
    "3WvVkKkLSrpwSQCZpqpeM7yxXDcWtHJMaReKdawgzyNQLyn8i9dABL1FEuWTSaJpepAeEgZADCrJupQmjF9ZRG9k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qhE7bCivZEwsDQwVwGaX9vk5Whecme77NrkqBCutkKPztVvkYLrMCBzwtp4NMBthxmm1Ja3zBobvnqHUAj2MD6f",
  "key1": "29LQgmSzAdiWSz1F2WqSJ2KqgBYMobEm2CBx97q7uZpjwgtcYzULzUVXjbmQyTPv691TUfMY5arEcNR3t1YCThzP",
  "key2": "4j6z1UsCX9tnDGJ3zYr7rUvZUeZDudAVRTascCm8tRpDJWuR29YMt1WLcR7uTxZim9gWeT3uJGuV5L1LWnKNEHHb",
  "key3": "2jLbDg8ERntd3WqMm6cFi51BPMTtavTLZUhhQqURTTaEoQHgiC4aSux29P1Mf9wewZENQyrW7gEUNiWk8d8KG5j",
  "key4": "5ECdBcRCNqRoLdRHMi8jSEq5EPjesdPvgE59RTQ3RDqBXgnhpEF5piLretvH1UCkV3KFYBeQ66gqbVBVZZoC4UGm",
  "key5": "23oXLa4k3vsKbKzznNkUa8RKDjsgS7YLYCQVhUSCjAMJB8ykqevKi1b5czbgiqLHuscwg9cuRoo1h9BEdYoDFk9S",
  "key6": "42pu9WC4yakEW7JT2no5hmYDhY84DJB8wFhTfHyhnK7NuLbhkTCgefVhQLdYLaykCjTGkWGhafTDwEcwxKR44gMH",
  "key7": "38MYyqKcLCGnAHACEWJJxodZNfMmS6PyfwPArw4UhKgwZGWxxNUduz4dqHYBJwjukQU6WZC3WFmc9PGFcBd971SV",
  "key8": "4inXLXUSk5DjEYTUyEXxjUEnzSvbpDYBRGjZeDFm2fmg5GzjCmgxKB4n4JmQHqhu6Frv9nubEgjzC4kjRatnyyty",
  "key9": "2dLQWp1ZLF3min1fpNiYZ9rUBY7JDfvhec28YYFaR7ZNmuqYUQHAQQjK5osSHBTEYAHyirK1yMXLN8qbHb278QvE",
  "key10": "2jnSCxQb9hDVqmsmehPWT41SmqfkEHH5yBJh7hrmpdY9oHWe4Tkkb7EG5MrWfLVFU1T58knmZBam2wfDHWep71Nm",
  "key11": "3pKqPEjHBjfUn2Cu9NJ2Qafy6UVo3dndxcn4HF8ReYHjKhZghCN7nyUuCrkKdq4KmeA4hmZZVnzdrp1nYbYLMUvz",
  "key12": "5SbWyd6QH9ds6pH2RKrfdMF7kaEwnrn8S3qvdg1a4A8awBuKbo6S9uET4WEPKogM3ShGdVNjkSGoiTHa47Spu6aG",
  "key13": "3uvxsjA3xVGsmDZhaWCzvmdUXG9QHToYuZw46UiF3PfTNeRpscpAA4jGbp15y7e82AvknndLaHj66bvx9dtRtRJ",
  "key14": "5foFvZcYoVDfMC67grZxx7MggweMjxR26mV8Cb3n9JUgUi89ZzQBpnJNitCuvqQrjgJ36AfTJHqGn5Quz7RiMAdG",
  "key15": "4ckiiHcZMUPLTB6bz3NL1Yz68cYeoNzkgH8StESDaUWhLGySEhYgA6BwH35VAkjb3AwM4edxMMufBJsMiYcU7FQb",
  "key16": "2xFbbMrMTUiFe4D5Dbyw6Sj7W2RaZEt742RWvgkbJJPE3Yzh8Gy2STxYY1HeG5neUxk6nb7Pbws4NBhgTSZKj9Zp",
  "key17": "67NbUY1NgPk1Hr7wZUVP38WLyzsFMYSQ3MxaBtq8UZRoFdtxEZdPVDPLHAmiXyEcS8vd7VK1rwqjZuD9nUv98FDS",
  "key18": "5jU1HdTWLDyxk9CVJGqdCod7TLsiZeEWgLpRNFymYGrqDDa3VvgvQcVZtfKPwneU385FA56NGiTC7YCetCAVmd97",
  "key19": "4Dbe91umKwEguf6us5vRvLKZBCsJkYTZQXDsMtsXSy7Nu663vmsKUfLUBzcQD4kbkcRGbFLRxx5EWt6sgxs6XFGd",
  "key20": "56Gc9tbYgXnMzUiegriYw8mB7TNNkM32G2pc1ppZKMZLJ3o1gP63G7og3RpA4fGeqSmwZEdkNFaFqRRuwaYiQn7i",
  "key21": "AaoAcuPsjRz9TEwMEUMqzDa634iAHroXMpV8eascfyFjhF68Dbog5AYst7GBi32a4eBiKjJWvC6CvAHdeka3oqF",
  "key22": "4PNMCDxY7mhh2PuP5jtj8WxqJQi1yrgEdA62fJar7m16ALivHr6XZdxFeY1vmGK8dB1BWT6BGqnAe6GA6UPoPENP",
  "key23": "T7E6sQTGUsqea3q7zweFTFGFuFpb9WrmytrFgrgUMuXRRnjXJkfsyCtftxvdXiBtWSXyjaTdA9BUUhgssd4HKs6",
  "key24": "qABFmH5oES5eQ2aMtiXT3vsndUibZpUM5zxUGuFCofbNnDDFZkDcDei13UbL3ESuQeTnj4AKqHit3djvtPk3eXz",
  "key25": "gdF3dGKYas25ts6X9dpGdd8yHYA44hvMnDJLMFUso88ayZvMYK5wRj27U7J2fz9GKQ5kgiz2nszVPD9EVYhGNiG",
  "key26": "5K5aRWjiLSe639qyYCo5AXnnvapzZYW5f1ENcuehhQWi6drFMdYCEJ26zZa7YbWLdgsSiHc6MiwH6YwMccJHz9e3",
  "key27": "5D84Lb4e77d2aZkHtw6EGga3eBsqoW65WzdrqPAKmEAboKuqeRHGq4svZEnFmpUAREKusuQa1dvFDZQt2cVkhkZi",
  "key28": "2vkDQW1LcmZg6Xf7mPC3xxteqJPSugWznCzVWRttxHuZfp1CGqfhmVt6BtUuH1DriLmM7TzekMdJKwFGB2895TC2",
  "key29": "qsieF2UMoZA5pv3eA1qUZeoqsn3FCYSeG1FXrA7dAbhucx3miARC93F8jdVSNKQLjLK7RWxrXg9aWZs15cmPArm",
  "key30": "4npnybd3MjhThU1yEjpe19Cjg66XjeqED9qyNFAesvnrhVMjqPw98Cc55739X24qMTRoGN4KSAF1LUWftGcmd1aw",
  "key31": "WWdoGKYta96A2o2EbFZRVRhL541rtYw5bHnsd3sxVP9UBC4qyQPyotw8geoS1fujRNikV9Nr9Fs5uoz1dQ1ZPEu",
  "key32": "4qoaAjKpo5TpvtSP4hbLMHF5kbQoxN3Wjjsna4FfSreuPwVNDNpCRM9H2c8cDdcai16JrW86PPXjhQPXaNEeQeLE",
  "key33": "3KMt9Jv2MxaVM2SFD7rBiRmgwrWTP3ac3sWPcPYgdN5C9ZKftKzHpHsM7j3c8cteRAjsRxNWS4gJBbPEtcbinmcS",
  "key34": "WmjMpjkuUQ21MLF8t6jV5iZJ5kEWB4dp5nQEz9cpREr5hHKBky5H6TrcxC1P78aMa9F22iAKKntk9TthVCkjCYk",
  "key35": "31PT8pVZTYcngZ6bQo5zDcN2cMoB3jgdsNqQ9aKYoRN31GrTGXSGx8fR7JgV7SPhrJkMHDEHxoinxtj1Bp6z899U",
  "key36": "385ZZtw5HVAxqZkFfUsBC8gCe5LB7HkAFY1hYLysGap8Pm42i1Rtg1BHuQB5xBb7tVs4EKH3q3ERM2q9KXsQC4ak",
  "key37": "5tU538f6DiZKVppPNqeHMdpBapt2Q9F4gsp1rjhntaHq9f3jhCunYpbLYLXAg33Pv9bdUBDi794zjVwpZkDA2GTa",
  "key38": "2Y4dno8CHNd1VczEizHPTxbLkuBRuDT2R6kr8z3LYJnmXvp714KuTL44g6oHnLy8MmwVGfpB1Us1Wgnfwtv6Moqx"
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
