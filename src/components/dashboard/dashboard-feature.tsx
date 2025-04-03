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
    "2RVBhqgzGtHf3q9cTfqVsVTVpdeMGWn6bwXaTvZ8y9zF3ej8Mk7KAsMXYzLnn1qmFBLyAKT5zhnMKmUmeahwJirA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48eD8twRryZGNTi4tUvLpj49QDSWKumfe9JmCGb13ZRX1LtUzPuDkNTrFr3SvJTrjEDJyQqddUC5WVjGWzHeh3uU",
  "key1": "4sLPqS1FExTW9dsG8QH6DqxRDa6tewDV4Y8sUbJC6dotUrMGYzHmsi6UcAe4CzBxLynALGxN5NuQxUywVKZeaswh",
  "key2": "3nX9vrW4vpxkWuie1sDSgNxqpjCJSuJUPNNbVCx5eynRYqH6YqX4yh2kxvDqp1VyDBq4s84E8B6uabro6rMtSask",
  "key3": "3V3GQddyeMcD9jFNwK61yv8nZBdLBcM3QPCTYfNDG7wViwjyPd2GHfi5hWJcsb7XzknPinSo9vdq9uX97LS6LVuv",
  "key4": "2vacAy9NwB5HE8Wzmz6VReMjiyxk3ChbEbXw7wRt77wZR3jD6dFF8rwWPpFB24NCn7mygZdYBWt6KfAU4mCRs9ms",
  "key5": "5VFodWGNVEA2P9Rf2Z4WH2XfaNrzS9qUNfs2PeYXnwX2kwKnVWiBTCCV96F3cb7jfMeYtop1Un2Q3HeZK42yvJTk",
  "key6": "36y134A9LagE1N6V47CfXfj778amUKLfeKBftorqSEhzZ4c3ZmiX55CipPoqjY1iTNduotTkvU92PhtKdQWtoMjh",
  "key7": "5qLgfsp5eazq7ZB69PGBQFabfeGxz8LSg58PXYydgXwTk8ZL97NnzCbeGaztuERsQsMAdKGGUSgV8cMqRYgedo8z",
  "key8": "4tAP8Tk9Km2TirPGKuXo5WaprBvMzPr2v6xX4got1k6aLgHming976TEvnnmbNKY8iZtsbLzriDoYviozdXaxQwy",
  "key9": "42R2ynEZwAhujT2QT6SWjFkwcs4xZBjp7yNPfQYANNDpd57ARGQoqps1oKEF916vF8ZhD5drfujaAixzGTJS7Swo",
  "key10": "47SGjru6ji2MZATQZTqE3JA9DbyukDpe1mEYYku2VUUJeey4Zcj4mDfKxNBBFTTrNo1LS11o85NtaBypLVGxwN4S",
  "key11": "3atP7NNaTsFgQx1PSZz1FJkDWQd1orqdjdgi3k6ciwqxA2kKjfUhTxwTp7FhNeRGWuoUmxkt9vyXcmHXm8BqAddi",
  "key12": "4ahxBwtEQBG296dCktfYYENc5JFBpJpE53twLicHZpC7DZuP9X5thKkkVg3yZDXT8GpqHRqgmFUQgFJg3jPU6r8Z",
  "key13": "3DuLQ78YgXawAYgtt8RKTKgKiDPNUDWdxnw2EV9Y7Ypdp1VeQZMAPuvnsVoyQb4QcAZXSScgdbWJE2puv8SqreQe",
  "key14": "4TceJ9hUaojPGmwiR9a7CiKdxYfJhs8xb93rSiHP4dW2uhFWZmeC1NNh46tYpUxN3vNx2Gv1tZa65bzjVgJ5ymNJ",
  "key15": "4vV9GpsmLV84LdPPuNdKTWwvPTKwfsyrmXThk4TmWDzTwAjVjpM6H3H5Z5m46KQ9tPqvXgcTJEcSVGw7gHoq4qQN",
  "key16": "5p4LGb6KhRP6UpX8HoAPSx7Xzn5kVQbjWT2CxBLunrscE1rEkdaQjLT5SrKPkgrFe5W6okPtPEJZmkPe9natcN12",
  "key17": "5BMcCBr9ps4RNR3wiQrM18oYKnRKPWqER82kvBqBVMrfw15Dkaz4sM9v32r2UexXjHFYceeXeQyZPhK36RUyBtZv",
  "key18": "3NYNBkCWaoGqmtMfFEcJca8U7Bd28v8iNs1cgNfVcGp9SviLMk5yFwRvcEePzTQNz5zF1YkDKJsAdmJQxqpaCDcQ",
  "key19": "5J7W6Qtb4v9Y8sLNuZ1tQt7B8eVEvqjKDNE64n53ULsCsQa1XuH5iiHn9dDZR8KzEdedJ1TDRSRy7aEn13Bqm4pg",
  "key20": "5AnSNKQNVeUbHJik2rCxFKbrkCjKkYsANfCyaRCDm2Bph5uYz3LE1NS9pNqxmws73x6mKoLJaH59vcSnqY7kNDG1",
  "key21": "2MSFqfE9AZpQeaeDTe97crckjVkd2LgJcoYzKBNaNrMR5dbVq3bNpxZEjBhy8Pnfk6VrCXNVttUUnXUU4fq5Rr6H",
  "key22": "3rCxpFcBfJTX6PtDXqZzfbBbvPru8WaH2vsA1LVqmmTDPxpR1Wqw7C2pdjsHa46hrW6Z2sF7ijBG97inWg9uCvQh",
  "key23": "5K7VCVBopeFzaAvBHP5o73HR3KtL6w6Z8Kb4nGwCEu9anfQCFfMyr4mauBJhkVFkpkywXbqvGhTrUY2UaXXBr5Ld",
  "key24": "4535izYuJ79gCMK4h78QYLoiqKC1TiPNBmX749NVQcBfK8vw5hwk4thLkYXrdaACEmTXxthYKTbhsvaK2hQZyWAc",
  "key25": "3dyRmvfE4WFtz5yu7cqaJdWJP2gvp9KMmzJZ6NjU4HvAU3WhxtunTKt6oPc8zAEa3aMDhVetYXZcp9BTuZsQ5eFK",
  "key26": "3sT5rEqW9eYbXW2u1VDwmEJ2e7nwfvJmKQtrL2Yxsr88AyooAsNs3FZ9NJw85MNk2rbg8iqs3ePNRnTSnqCCATFE",
  "key27": "6Ky7z44XXTg8gZGabUq7REtQUndk1QaXh8weRavCw38E8Dm7ynxvzhVgPLs7551Mkx71Mnehh5JGQjNcm3YqX4s",
  "key28": "2kEEuYLTfUBaGraTyvSXaVFjbWyxbfgDJH98ytfjyuF2gx9s2iN3wD8rBXUmBtqKqndiri9hJNukFsAkrsEXDcgR",
  "key29": "48oQjFQLWg4f1kC1WwoQtLqvgp2nNHL2g2WocFHwJ5nCX7L2ueVjv2fiPe78C8suT3xk27jzaNeUfb1GvZu4VdKq",
  "key30": "3CePVhdjQ143Ji2NcVJ1tWsFAM43Y9tG4kncSkv5MriTFNg14HGehmfaWkYtnJJcimATc79MTvKDcAkBCoD26amr",
  "key31": "7mHEV8Raix3dEq9pssYXvEbd5uJj3reM85RniCujUeJ7qmJVNVJqjTnaYxeDBri2YA8d5KnU7g4UL4HpzcwWTFk",
  "key32": "ki1z1nUmhZmFjuuMKsqCWmvkp5bJR8Cz3Rv5xAFyRoEoJTX4JWj2yoiYQjMDrpKsgU5bfXKWZjwniESEGZbEPQd",
  "key33": "5T92n95wNSdxJsEViKvD4UPk3UfjS9wyMDQvPLCiFiGQCzwq6i6L6oM1ULq2XNzAJdGhdBznxqdRrZP52tLThwG4",
  "key34": "2DPC29ZWiiiMM1ebitQ6q8ke3rpA6Rhav6GohB9kxGpnVo62WkmizuvN68pM1QM6cbDrBwiWMSoYk6GUssyPFGCe",
  "key35": "2AjcamFJ49XtwYi1zxpPKGHAryBqgr49AF5sfBLd61BZFLARPnUsgH8zfAhAbu81FCZ19KARETn7b7tt1YKYZNRt",
  "key36": "3iZ67eSGqfktEeYA8oHZGp4HAbQkxwvtmR8znBYNwYDJMiESFhkdsm28KqzqoDRa9zzzrWg8bkGbRtQyFYWnJrmu",
  "key37": "hh2XN5hL4kmsULegfZx9ZskmDCQQyaDPhngZ346xTyRDbWUWtCGpsHETeE41fGFsQXerwopryWS6rMVSJmE5JXP",
  "key38": "4suaWH9NwZi2ke1kMErWjF65V2vuSrNKK9WwB1ZWVqxdPgPufTCpKNCmpvAdm4vN6qEwNxQr5hCE5GZQsPHpqLst",
  "key39": "2zY8BLF27tXU7YGrwpj5vMb9BvMptuxhroxeTQgFTXHz9ZBT5omk7dBXYXkcN5d5MRLqQy4A9UzQCZKS1sszC2KP",
  "key40": "5tTq74beggu4f6yRQUv1RJYDdtj9eUP86MPi4vGFvy9hMLAjcnpqzdPFmaKckxVAdWRNjKVjiQuNTLHow3h5LkBq",
  "key41": "31nyyLCwuJx6U5Nibv6oa64EtsJUUjpC3z7ftoSdk8VsiBZ7npjM5a8UyYqqujhw8WByvq8xpF52MzArdDPb8Rpc",
  "key42": "BvngFXyWmPspZVtdfu1CcsT2jjibZC6DN2tZ96g8bz6HghpK3i21q2gqqwb2gZq965Go3KDk4fPmcNaUqLbaA2H",
  "key43": "49EgLfqFbJ5cX8WMUdFQDMM4zJmS4DP8PoBmdJyjmkYhRZxVqtS53yRQFY68Dp84ToniNq9QQQ3vnjmwVxTWyefY"
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
