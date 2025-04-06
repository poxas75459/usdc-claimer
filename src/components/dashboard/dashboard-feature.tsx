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
    "2SQo9mWhGxX9MiAZvZtZadDaENuQTHV2UxmQSJ7ZPAf5Q3LnfGVwc1VvP1SQRFUSzDdZntyXbVtTZ3cmEuZNjrvV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nfgGx3VrEhgAAcr87CUeTtr2cmvCCZ3HYNGRR8qBuz7NpietACiThDWj4fTWq4hkw2XBr3UzTnMi1P9cM3sD2cn",
  "key1": "4ft3K563QfsHqsTHh19pskSrLDS8C8YdDG2AKQQJ8sHpBLmEZGJaazpyZLVPtBBvWM6FyfzvDCcwXxEu1a8xaoUK",
  "key2": "3LqTAVT4NH7ugQnVz26HMLdNB8DPvWCGtPyyp6TtpTAy4yK8xdzyXZ7XDvjr8JVoBQiGxaRJe6i6jWUQdeP9kxYo",
  "key3": "2iH6TTwG55JC4hFYw7kALty7RYHrDvCazAoX62cLAVDTPkZ1Sd374118FAVkoeEq6LBPKvGnBozWVPsYkG6TEJmY",
  "key4": "4U2XRNEtjLDfdhGoqhzZL5cYdqthfrhJnynRCyQQGm3pcWbYk9f7RzUbaH6JFdCFxdB2UPfcu4rCW2YtiLonCPrB",
  "key5": "47fqs7SXadAj9t1bhhnHjEGLVpzkUYBgE1rH26aH8orE3zr7tFDJinSmTEbpSW6Ey9a6aaW289Pn9MYZUtoV113f",
  "key6": "5MKkH7diELnq3RZPNBqgmcCbRELgGWGR2ivQadJLnipk6uT97jzR7wcwuYDgrd5qih42Yp6uksvtaq4Ja39JAZ4G",
  "key7": "4DEzCXUeRkQKFzfDJgK9vG4cmSrZVA7PfeUmyegGQaXtH9fRJgLXqQJ6N2U7o9TWF4dcvzQm5U44EgEYVfjqC6jU",
  "key8": "2bmkFYoNHLUfQNqojNtzaz8yHSrAotC7HqjdAqR67pUKAtcEZaakQ9JbwrNJ4gF1jHHpn2CeJ6qLfaxgT3iboaNM",
  "key9": "ep4t8DzFvpwDoQMrK3BPc6xLQ9xsaXsZpuxLnba7UMCn9odBLzaa6QwudZ1VysfDbxmrxJ1jaVoUrDkwGcjCT9S",
  "key10": "3FPq1dm4SKqHsc5YBVyWAUNh4RYfK6Ew7KcCxnfnJKew4EVP9cGug1Z37vZDF7UU4uRcLeUvam8z97mAJTX9PWqN",
  "key11": "4TgNacyxRPnR4L1dGxvEs6i2KQ3xRbtF1QhFRbBm5kVJPHbBGPitEZLwV6f6SANuwXfrLhF2YNZ4cumiSGrhMdyD",
  "key12": "7xzvVX6nDA6Yn6UK7fpfd1y5vWrCmF3oydUXSPJb8wEq6quuyrnzaK5CBu8kkRBZMcQifLNb7RQP9mjumNx72uV",
  "key13": "5AZaEKsg4tf2cV7RQn7rXMtZ8fUysezgPCnMbraWESfY7j68fqbrYjV3GUzoPmX8FcQvBxzYSXdJjTRQLJ3z2HVs",
  "key14": "21yXsg3yWMFvWhFpz8aF9aGgBGyXDnm6cLAFxTvytP93qFGac25hwXqJS4iaiUUey4ZuFBj5GV1dTK7ZUwwAFoRM",
  "key15": "35ajwVc3fXWxuiPGoroM3GgzfyABXVYPATdJnqqXADBGpBZxXu9eRcMpzvYtJwK6KRPP1Djykcq8Cm7TVfXUsd1F",
  "key16": "3TgV16rKCtExR4fLE8JbHdAbG4xMRCVWU6tzmP17YLyj57d74cdkiW3h47PxYVrANd4MRCZCTEd4ZeFxkV3uinGv",
  "key17": "3F27JAwHFX15mX53N7Jm2VL4s4kVHmqxe43xbFxXfPvufR1PWskZjZN8LweiNquHxnkji392LXJN7Me6Nu4UzADm",
  "key18": "XYbvDuU2zU4agysBSWyhj9CSCChncQMFZCBbjiYqoZdWTchoCp9n33ss4Bz9Q3Y7Mvk8NkHKHBThPd3WkkDhE6h",
  "key19": "5wtssSpZkBBkkKbnhdEMw4LUFjNMDf9ZUiB69wcG2L3QAxLNc3RDGJ2fhoRS5mxT4vBznMAApkwjoxxNNhaHdYSZ",
  "key20": "61HoXucVEkrXUJfgWpBLpAotGFrFK8Fi4SXKcUtCshMfQ2BDTHSbtnXMhbMDo6W73bSKFV6DaULJ1CKiZVW9YmNr",
  "key21": "3z8cqdB7NxBRafEHx6RgEHMgpy3WBkmMX8HgqTBnTCwRK9CjA7yo1BZe5gRU2a3hrxL1Tz5hu2djUj6DEZLvPztN",
  "key22": "47yifQqwKH9NZ67azy5WEi4MN6cDa5fqX8BEFhYbTWcuSvYUKyvsWbJoaYLX1pmd95qQiPgMezBnmhDdQuTNjYse",
  "key23": "3146LSLWiFH626q5taj48zTNHPwXiY7ZBbMCZbK1898vgHrpKVqEqRCtXESEamrgT4icGAjY5DWqnjogyMtVAgz2",
  "key24": "3hHwFLhMMNH1gsZZ8XWqEMgVTzdVonqJ7XZSCANBJHcLGdTK2SdhCmLH6hueRHDmc1XpVknkyYDxZ4GuNqygozyd",
  "key25": "4ZmvdqM86hVo5bJ4g9fHc1M6dKjiyHgP6k945vwkJaRFQJCJkSii5cn4ke4vAVQhKV8sRhJDQAsshBeWnGyYczZq",
  "key26": "4cZCS3B6homeAtF8LzFuEEhmzSEy15NvbwzBtz4VGyagUDN3aWiKyFQ9bcxJkjHvmmLh1VuQiCxR5bVNYn9pdmir",
  "key27": "5x8jwj5MvRXbQWbmSmzS67XgqMRpFSVKYPToTuQvkFeiqzy8PLqyLyhXVBDJWk5pzN2ecrNgR8jQhQdheDtah8hG",
  "key28": "v8C3U8t8P5xsC29bCKJ98korngzKAQoX8FrP9WQjjjH1So1xq1RJ92WrPJE3xCMMGYceeFCwVmmbjoriJQ9CFUM",
  "key29": "29vqA6zpQ5KKnQVdTKh4wjM5kLkkzSHUF3U1qsbFQL5MZVAtBEuxPM1Jg3UwQTYM6WYqEUwqf7J4am1qHj8Tfcy1",
  "key30": "5dbxmeyduiPBWVBvPbEb6YHp7ga96hVbNVo5th8hTUpY9JccgZnZjtgji6LRNT82d4Apii9KMQVAiY1wdJfbmvDP",
  "key31": "2iK52kmbghLuWGxcYvvoCmjhc6DWEDpoCVRzoE9LSCBpjKw5vj757A2t9jXtE5VKYA6na5fpkMgyhkcC7K1phdc2",
  "key32": "2E1qFgj67gvarDmvH5Pz2RK5frMJXTNrQT9fZipzLE8MJC3hmcyzrZZfGbAVLwen1otq1jNPk82JhHoqw1QChkMc",
  "key33": "4dgXMqttPAzByKauEf9LqxeJyRqd31G15UkUuxB8oCJatrRhCenL6HwhvyNJQBhK3K9kQ87bcfJfwG9rG93T93bf",
  "key34": "5k4bXovz4vEvWUPNJitMz8uQzbjhoYGYGynDRksm81n63uDfFSN4tAZvobN3nUiR7cd9Q2tWpWLiM9g88n2ki7yS",
  "key35": "4MMsJKqmuxCUqcm4Y58kJfhnqhQphKS6WHwZiZdr5ihb9YpvH6JLbKEPiKiqK9U7f843uTdceCEMxvkj8GuTqJ4r",
  "key36": "53N8JTB2AsCDtJxf6xETEd6EHRDdw62ipiHH2zdpDGkmAeAU1P2sxbH3kkdRPmD9KjWKu5udt5pi57AAP1WFzyJd",
  "key37": "45MHqaJjcRReFgc23SQPjKQCYhVHF9gE73UuAce9JH5PUcvf7zFRh4do8iuQ3vJVhi2nG2gt5YEF3JvCJKER9bT2",
  "key38": "yKcYkX3ujaV1n8bxgdcsHZxUVvNn5edp1Uv1P2uo3s6e8W6pXSfZdxQekhhYLxEfvAPyq9LfDPdQQQuzqPtPBZx",
  "key39": "UayKnGN2Dvow43ALqpQyvEod84Q6HA1QfJZkkBgcs2TxCPfMvfHAP34wWiopHXTdNnnLyU5HdXsamrBus1qZoFo",
  "key40": "3raLJT3g4dcphWv1FrZfx8oci7oeeVMT2AoBGwGCRVvQTgBYyDTUXqavNNjQCTxShctjFUFAZjHLTfEabEd2L6Ux",
  "key41": "5tqw6P6JrYpLvLLxZALKWNAicBE4odyDHbbXHc6DCBBvYhUYf45bAjVszDViSBZk5rr15xjDSCnYALBexPyLdk2n",
  "key42": "3xyApRqNtXEexQBxt4TeCrr5HwcEK9w6BxuQR8eRpAgKPqtqsaSE3uokBuUKfQUf9e3gLci3XEuxU2iXSZCjgQxh",
  "key43": "2ehTBVYpsSX2VjBWEBeUP2pmw7Vd2J5JgshEU1MQN8dbskfBtFaJycUXUzksPc84sUGuTF6aZGpmm9SK99BuAknY",
  "key44": "6bXut4wcMX7BFV8fZxunquGimVxWQpfVpi3fPVTgkRyb97jCKgu39btJB4vYZtqot3S6cKYSMNSnjCMEWQxJQLf",
  "key45": "5ZMewpoBodusZKSXXSGHxALzkFR2kXXtquL2XiRSQi7ENWZ9WNDybFLamEhnfGCnaiazKig8BKdFZfHdzytkvLjM",
  "key46": "4fZ9keJHrSREgMCrHAXDt2G9J2vW1h5NV6yGkfeLbaLYMKQzyw7kCD2NUJ8c23tYdi5nC57nMjFtm8VtkCHVQwKH",
  "key47": "4b1zqkzUE6dTnzgArmZsBPVYuabJ7XVbGf1WGQ4HBB9g5m7hNiKoBpxy3EbjmWfLeizvTZFK7sLq4t34G5JmzUuE",
  "key48": "tR3eus13pwh3pib5qwinmRVYnCZgRFYYbBWEHYsBqEf5QqDzZGjnpzNejsnZdC95m7RfP11kgLFrWWHs9wNC33a"
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
