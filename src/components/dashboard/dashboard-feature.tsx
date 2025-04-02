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
    "5W2r3KmDKWxy68hV82jcQaegEz87EYuPM8yi1Mn1NKViVoxCLMUtJuwY1gPHqZ4xwG2BBiyvrHCq3F9Vcxceazdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ipN2cUi9YD3qsuH5Sp29RULWP5JDezEPiCAkm2AMxB9kr4zuNT7h44acKx8yHbcikvd7Q6mUQsHWFeKTDYoo27p",
  "key1": "44GVybsc6UPGjWEADzSgKC62QuQjjJFXChi4XYPYA7nmJnr92BPc5FBjk5gLUtEG81ZY7KjTr52ZZ3NfxFaHTETa",
  "key2": "5Cpd99e23EKbpabgD43YhGjkEEQ9FH9m6V5cx6pKKgqR3RqBvR9eb1vmxkxvzT5KYsNnASTJ9cwsgQWqnbkQ1UzD",
  "key3": "4bBPB6XbDEfqWTQKxsbcp82TyQfrVyAG4URcTt5aAsrUYFftgzRFdEhyB3evXjygBziMQRWLisYbt5SUbvBkrVHi",
  "key4": "y1m3PobuHDhcVbNHQMwKZ63MhwafWNSMvTt8je38sTSsF9KAU4GRwAufHtKAXbQPdPZbgSXf5wD9LQRbis2haba",
  "key5": "5sMUVqQWAEHeMKrN9xj9GwXNv6Tf8wCAos1WrKCBJpaXvneK3ANBfWhJXdc4cTc7fitfJk5fCFgrPfw3ebFHyDr4",
  "key6": "4xg1DKQH9y2XqRgHcmSjZdK5j2HrWRVwUcCm9p4LBYEggUN7MReKVmYoYy6uAa4JveQiFxKicXy1pzWJqiDDE7dQ",
  "key7": "2c4LzchJ5QzqBtrXC2gskJooig8GRHoGZf78sxtBuToq6X3zwxyDQ5dFPYyfMrBc3m1bGeKst41Q3bhqV7DnC7rc",
  "key8": "cSH1uVt97nmuv3557Ssb8Y4cyc3737eBpAqq5GpsNF7cHrd7jQeZTMbQJG7wLcjRnCTGG6D2u9czHoiUV8Lepaj",
  "key9": "2KGkBcdcyHsqbtsNKUDi3b6t9LDXapTNkDiMf5T1UUXxGQmTdNiNX9gsjw6Lw9RZcWc5n9MnZfcdpTVM62is6gEi",
  "key10": "mZGvGfsQWspmQaKhjNZhtn6VBo8M7pyYPpSqLyHVdHyWmv6LwiM2L3SWNPZNHRpYkTvUssBwdAorom7egXSDeSN",
  "key11": "5hxGN4mtNcWVzKZNdHHmA1nk4mmg3kA22otBoxgzMKVRRcaRfXQGP3h6KL8gYWiHWjyrabHLKmYt6gnEU6A47F1H",
  "key12": "3Lw191UYh46tRvRX8iBCznPx4imrxoDi8rwWpoWBWHeLxV7vp7pAaQpHCz8o281jU1VZgZC63J6PPGRLAhUzRgg",
  "key13": "4Q9YKiMyV8gXJp1FzVxEuxcN6dGjRWeGfgurzazTkn33eYohc9LTkGUwYbNwvJ8qKmsk74UDorcnW4KEShfrzon4",
  "key14": "2KwLnp2FUZLScHNyYPvUkAHTNDHuTCbhppdi6Nm4J6qbrVJDd2M84R9xxPy7VeEZkLFj7n1uzZsYivWvRXvR76X4",
  "key15": "2v3K77iRC9J8d4cfMd5wLBqfaxmb4GToi3vvAW95NstBw9QiSn7E1Brg3sP1fEsFkgNC6kefYEQbbaMGCd3GWE1B",
  "key16": "3WrmH5ZLc8ExeAvef42ABkLaEGqKKBwuAyd7m9dVvobVsEzVaSsRB6fJmAN7irpaVd8VzCnL7GL5rW17xu2Z2W7n",
  "key17": "5k2LSAGkJmAaVx2FoxhxMvYZJ2Dywrh68Tf22o3dTd6qjhyLjiJh9ZK1aUty9sh1PrXiza1HA2GEu1NoBVBdyvWY",
  "key18": "37VBok1YVP5KwcAsDHTsVUEa3uSZDMHNF74hHrw7mS9bVUrmkNgAPdA9jK1jpkaqzDoY1n2e6VWxFpeJBkEqic1x",
  "key19": "gtVdNituTiZY62DZpcg5wzTGff2uoPYoazYNVYTzZ46qpd94AGfD5hHGtc4d4gRUs6z4Km4UirR9KeaHBDSxopt",
  "key20": "2gpGF54tuYSYAUes6cod7J5Hj9YadYVe7pMsrDi3vsAszcLLeV6oPNX2nY5Lcfz9wZBwp3tKgF2yUn7khexEjjet",
  "key21": "5FGSAYxDvVj2oVTXf9V4isSQzPyQuGdfRKrMLckUCSTFzPL2Bi3rE1GDN6WwcqxyBGtrVauh9W7gEge4DafGguNR",
  "key22": "5q4FmiF3vZKfbidLmtTjSmZhHGUBAavNfRoEmmVMm8iD6BX1CxtNV2XwKw2RZFNf66XJYyVvAMsv2i2HFRz1CZeq",
  "key23": "2XnZxmbfEquxUNoRSQ2HV2U7ufwvLKGHnXH41HPd9fwWGsSbv3a7jhxuxytswW12MyVpwwmEQLb4n5m7y3Xu4Ek1",
  "key24": "2JEiuP1QJjW9QS4UP6H1q1KpeTXmbxzAo93ebGGu6ZmLzVAZtniMSGJsbjrtw79otuHMhPW3zAYCKNguvF5AVZ6r",
  "key25": "3P8C6Pzu5zq9FmwWxd8S7uhUtLTjGkLrzhSpDS5GFzVHEaBsXJSeySdWBhHrS46Jyg7PybCFzTGNzYJggg9g3CrZ",
  "key26": "2G3spvZ8Gkk7iJEfHY71sfKdEvWB5DZ4jj9Mc5vaLMQJefp2ZDSyoNyAkpG5KTnxARDiEMX3oPi88shRy4u1UZry",
  "key27": "88tpCLSfsPwTdXJUvNgBMTRRmBRXW9gcx88qR9ViCsCJgcWXy8xqGMpaVtbs2ypgFzTeGXDXprmyWqDDRoD7Txd",
  "key28": "65J5QMxqchZufdqrJ4G2NScHeWNaJMRnkMZiaCZnnZQmSTRzpnbs7xaFi3NncGRoo4H9gH2WJZWBgC8BK5hDDjoc",
  "key29": "4RoVMWKB99WngHEiJ3W3BLVAT2tR27KA3ML2vFBirz8NuptgPEv9T8pNuYENb8eJ7BxAVzbTV5xUyFCYLZgJm3iN",
  "key30": "TMLEf3tvBQJXQZ6zsvzy72XCzs4dZgD3JPSgTGES5ZV6rBTTpGxGGBGaixH19mAwbVegt9ksvaumgrnP7uLpLFK",
  "key31": "4VrotMNUkqxfmDU4QEvB8Fh4BHoMxyjFT4z4fL3UaTyipyeb6a1ioPjLAagEVhZ2zW4ifPBFwuNoHm7RyPHZuQin",
  "key32": "ouWvAwbF1BnvHZhQWHcPR8YgbsPCcuUCMQNuP39Q2KnrAsNW9JQXuadYvJhJz8MtLnUk2hbPuFezUifcMQ1gFTH",
  "key33": "3GcP5bMZELo4sBjAqsgoUFUSthpLDVmcwx54xg7fNDdaNnYuBeRmtBoCrn99xUVCfCez5TrrmPdxrdrYDbhNuwDj",
  "key34": "53VB5j1xRRKBK2kKbguMQdBkumgJW5o2sf23e5tMrbZbcq7VjneAnZ66W7jHfVBNsZmNQV6hfdkGymcpwMLGwJ7R",
  "key35": "e74qW1uoS8Tt4gsdg8xVnYrDVJoQY4iJ2o1E6bA6cXwepfETnA8QojTyThvAkBsrMJAjnQxqiFSswnLwu73UK7n",
  "key36": "5BnyhfZFhS9Cbu7vunK3rfiowePJH8JFeLkkgzaykk4oD3gT1BNkvosnEshfNyWBkQRzExQ7gPWxir2BtHji8aJs",
  "key37": "RNknD1EQEPbLyovpUepKhB2cHMzd36k4mvbu3e8APqaBx8WQDF46Fxnu6PqxxECY5NQqJnne6wjL2fcCf1gLKwS",
  "key38": "664xg2Zzs2U4CnXsXq5UhQNUf1WhqBuu1YmfcEoCBqYpzT2riRWgKwTPrJngF7q7YaMwrwTDrXU3cPUgjyxM787d",
  "key39": "4wGpCvozuj4XGXA9qnKRevvkq2qQ6HgJy87iLjPuyXefbuyUAq9s6jj2mXmfCAHm27r9VZWzSjxu5m6fbTASvd6f",
  "key40": "2qTArc5w5Ca3W1UM2KQS6SUvmEkSmN5XLLojRa26wzu55UqbPwKu3CZNiWE2aLdUpCrNbtfK5fFYsRCTAT5Lb1Dx",
  "key41": "pCcPEN7JB9ZPAhEYomcERx5YRP1CJgGWn5dDpCtrtG8oDL7d8Eac2JhLrXzwM9Vfw3DexP9q2BaEmPjioaUNCjD",
  "key42": "5ZYn3q1jagfG4KstM1fntD5op1LPM5WuTiiFaYy8Qv1wyQWbrv6D7JfXjBfCFoBgZv7QPDY4dycB7Kv9rrnfpjup",
  "key43": "43WdsKCE9sDf7amo5Kgq3ePNQHZ5fbG5koEqB4qb4QKpxqyUWqTNWxhXYymkBwmKFvXfNtvSmZL1YycnpV89uq2G",
  "key44": "4g8V9wNfdnf4byyJGfc2UK6teVfdxFvrJYSiuS4FAVnMUKWiENnQtQs6rHj4DRb9r9e1mYre8g77SFLweJ6wBZDx",
  "key45": "B9pDyCP9DDoBT7AouV22eESDA8R5zjSWAoCsGotz4i2KcT8Yd36Acvg5NzEeLpHGF9F3VPjNkbNYUw2EKqBfjJP",
  "key46": "41TojVYZ73D1CE9HXTRcpDvtUkwv94xmGBSZA7TS1nRCn9C8vq33Ew5ehtp9dXChTRBfUizgXjxqk38NqpcMqMGQ"
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
