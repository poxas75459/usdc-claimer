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
    "e6vpT5L9GCEk4osmxe4pfhNK5pfLhgUc14DReqFqav1ZGMKNQRBpBRJY9L3nSdPC6YUtvprwHzittHg8L462WY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C1fttw7SrxHKdDpaNHPDsYEn4rGt54iPm58bRUEu7BC5Swuz4k4aq5RqQxXkMcXKLi45egjQMfAf7KmmdKu8Hqt",
  "key1": "3g4JCmppuf52AiQJL7kZ7S9zHMHv85B2wW7FzC4AoGvRcZyYVBHoLYoUR7iEqoLKEpEn5XZ3hTKnD7wtEbZB4ph6",
  "key2": "3ZtAEJmr8bLkcxJs6z63hsy8PF735Hp7qWnCHfcJnpfP2xApTb3J76VhDtYzRpXbyymu9dRicy9hwVm78CJUDYnC",
  "key3": "4bNiQjXMJDLrayzJcuTBxN4GdXotfJUGgZWkN882toFBDCVReVvZo3QVBqMMap9Ch2uLhqC4y9Q53K4NNDni7nZ",
  "key4": "3cx6UQiwMb2VHrTW1gNzYC3KEGo5kTcQqv8c2Qsdjo3jxuMioG2YtgzCY2eUS9Lp7CbDwYEvFqXWKp9g61NA7azv",
  "key5": "5E21xmDd87MKKWLfGfdpv4Y1RGmXyFdtMu27y9PK29G9dt5ow5ZEuuw1fKxm9MEx1ysSbUSrzMVaTckBqkU28auB",
  "key6": "2eEY4YJZmxbxNiJsdUQ1Wf3J9Kf3xn21uTNhLB3h7cdVLfgVNedqTZbt66FoSFYv5ZYcs7SZqL18LVgJh9Jxk9ER",
  "key7": "3tgr8ZKbBcpRRxA35XDqA7S2xLz15fFEkiVjSFzRXXDLG3n9xUzbGM8u4B6WEBt55tZL49Xdu1UcNMgJ7xFpXda6",
  "key8": "4VTQdRML4PUWfw1PBeAyvXtfSeQoHDzwHxu233yo1V5Zyq6fntCGsy5dYTZgVZ4CwAkErLE3qS91933sougc7KLE",
  "key9": "Zgx4xDt1x4re84ajjV2SWRZ9gDhhFhKfcMoHV7w1MEjFvHg4Ydu74GeQ6zdASxjTfxzdRNL7WxKJxx7eGm8P8qY",
  "key10": "3TEwHMAKdRJGxuviM7Et6rUgvGYJcAjGJKcvvsgLqzUb3DmPyL5drqgnhHZaUfmN9yQS2JNeDLReQkTL77FMdqn5",
  "key11": "64HZgRYPTEAa93remvo1VVpqNvoR56HdG6VzSvyxQvmgq18Lo4EcK2z17TDVzt2KS8jThx1nHnyKVKZDiMy1wA9M",
  "key12": "3eLAgi8Ax9NmxMXM3rsdSHwseopWrojaW5bAUGczww5fdwpjeav33JQfZ4X9zLnAyoq6qqitCF1Rqj4jgPkwDy8a",
  "key13": "9She6WagrrgTw4bHvjsKKdiU6ZqdkTnoDtk9EtTEpvdLzgfiZhoaqQ5ZkvkwGNc8ajVD6EzCXeh3ze4QYMYTFJh",
  "key14": "4hisfuBAGMCkVmWFAPieTpUd6LT6kbaCkkMQjqgAnFRHsoZCjTW84F4Nu3J9pasc7odkWPWzUeaf4Y4Yxnk6zHsF",
  "key15": "639kStXnF479NanN59ZsBdtW4NppqWPCtqHUFjppMq1QbsdFq6AGotKvCxm2XDTodQkTZXfwzWpiFiofzNtLEoM",
  "key16": "4b8ntyJgv1vbmyyob7QBEkMUejaSuXP3oLCm487qLxA8k9U4DaVhtebdVDn62gX9WuGjKVLSQpMoW3kfe5PdifdD",
  "key17": "27jYV1ptuFXVBT4k3petWJx9RSBbFKJKJjzqusWKxnQSzRnwKLrUvKAezKiQkxddGiHpiko8pssDnyxk6UTfUqa3",
  "key18": "5xUAuypqLSJHkTRiMkxGLJb3eW6se9YkDnTAHNGgq3o79v1CdTme1oH8atyV4nLpMVqYneQxWVKGksK6XRByvqcF",
  "key19": "5srYhaL7fJgpc6TVc2V9tkGLm4X6FeY965R54vUkaHfHtABYvQnPpvEYLgr9XmthosKjrQqpnxDMe1uz4RfAZSRa",
  "key20": "4Ru5jn4gJVFKZrPKcNM1GSrUdJUYij7iQ3GJFEJzCcQKoFzisQLyd4iCZHESX7vNXiCVV2jKNp4Ycpm5UerVeGc2",
  "key21": "2qJz4BtgPYzYivZtLqN5XADTBA9YDMY1NyVMKCkWBCXNxUopgZssS2ZjuKX8HNXwPhEM47TEQKWR6quixfRLFaaf",
  "key22": "HGUuip48bwB5FxQLYQrGkTaPZvmi3ifdKq64cWwD3ixuAWwkWqDZeYsQw4am5DHXT3UGiN6oHiHzhCCgV5ixwhy",
  "key23": "uwztVyj5xQt7m9qgCGYD44B8x4FtraDCfjDyqqbf9fLboDAkUShqvirnSouLrbPDu79AUvaVRcHG3N4V33Ftmyv",
  "key24": "3YmN9uHSERmyfarsaiwajKc8fHAPQAksKGndLhWPZU4iuHmTnHm13pgAzuB4pSZagyNtzCVcW5dL1iVkvin11WHD",
  "key25": "44vyPbm6RJgtutZxMutv3dRLdb7EWZc3YCBJLDzLPpws6rE4SiZAmBu2kL8FXmjrdpuT1iUnZrDzZqL6MbDaHekC",
  "key26": "4GoChpFgbtGJ912bDddNwPQxLBx9tWXPPLRVY5Wh18t4u9m5tZnFSjS7kDkfKidm7HTs4B7hY8FY8PEHJAooF4J3",
  "key27": "2BnBaqAVM9kBaXJS5JULHmF3mbiYEMj12KMScRC9ordPKfoaxsDERoMfa7ieAaUGvFFpuveQjC4kRZhBkweCsyj7",
  "key28": "WMg1nYt1SsS1cpkT8cBkZoe8ZMyMnzkmCvdXhCga9PJHVJxh3BZSqdx73y2afc5BT1mTtfDvuSFcC4L5nwpijt6",
  "key29": "dibMHypcKxiVLuCcZZmfyuiAer9eJmYCm2ncCRqhKGBb2YqKTtHGVne6EPVovnJGvomuGhv5szUZ29Vpr5veH3J",
  "key30": "5acg1kysBzULsEFfkAAUfp38pk77g3mGRsEpn5QWPMsRzAGR8LtgEeiNFrmjLicXz9hjWnLQmA5n5pfwQtcfdXns",
  "key31": "5kDfxVgivq8F5MuVsRZ9VQoYnQvctiGeYJRbazGGx3apcdeKswkaju929CxLamJPNKmQGFZ72Fnc7zxtgtfk6aS5",
  "key32": "4TvDYivwFcT3cUXdeqdojB73NtUkpKQjQrF6Q7XrZJb9uV7RvD5345Dd5BcEsHDetCKCHUPLMmmP8Jqwn4RcHMa3",
  "key33": "48PP9KNijvU67RaoJWbstF9uLD2UMR1WFL9G7P1R6hEnTcvVaMPnyT96brXEJr13nm5YazuKVVST5wFFD5nez8KC",
  "key34": "3ZNf2thedYZeHut6Uhar4VT9fbeHiDsphJjWhd2QWYAt7vJ93fGQDsETsD8fuMCWFc18KreU67Z1US16ddhaXRyg",
  "key35": "4ucrkrsttLQgyHRWmWn6PWMFvzBa4aKFf5bwxsjyDiKNf3bqtVA4cHzu6NS5jgrV9ZQaw7bfQhWnkd4KThLouiFb",
  "key36": "2B7sbaNDdGeeGtXNpVLgctPLDQ1ceXHtCXk9bTstQRTiepqqi6uTFoAVqboHbZRCxXC9wqNihZ1rHMqzh7fGdDpf",
  "key37": "28nftYZgqkK4CAuN5wMAJwXvpxY3NoVefLAkBQUoSGeKfNq2fDcmCgPqefEkPsLgik8Z7wn43PLj78xuvEuTVWfY",
  "key38": "5KarhEW8bssEEsVcSeoL93oF7BHh6GexAqHY5BdiamZ5hAspAasq9wZsBBcDduw6Cbe9ERFcetLLUKLNnN49DN8n",
  "key39": "2qNDfHMFqqBe6ja6pNVVUyqeo6HmQYHPfsrQYHW5vHJNzvCEoVU6xDNW8RqMiecUQQT911zJvegRaLo7FvG9YiYD",
  "key40": "4wi2p4H3wmT2zPJyYnDwx4u73npPoC5LWKLRA3Qs4UK79TyYy9pDeanj7HztKbyyVbGUYyiE2PJPvzjoQdY5qb4H"
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
