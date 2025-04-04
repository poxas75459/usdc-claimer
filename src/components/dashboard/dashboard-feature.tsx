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
    "59RCJmRP4JH42XGsuCNK7SFid94BPMHqbBLX9Y3nYQypD6XZFxLFaDRjUy38g6CJvY5Ha1TfBLBL7iZeo3ivqZkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nCra9Pdq5c5BqcGVs9LsebfZ17izUcPpYkwzSmFquJwMXWDFn995hkiVjrGbAzt1V7iWEJzcHL2xQpZshaEQ5p3",
  "key1": "5jX2m1PcdkkdjgYhKCdeG5W6Bqv4ZxbcAkTFvyKYWGMtLRGFDjJozwgfBzLiXqZ9NqiE1LSQYn91fTsmyFEGdBfJ",
  "key2": "vKdTwpHDfhMmSiifmuosHEP2fDQGyVCxaa3YHrPEYzCw7BN7pTNe31VET7qDDwBdcy6Wzz2mz6E42vTs7GHbXW3",
  "key3": "5NfVXfMYJPvsT83RpvQxHYd5sJrKDx5iS5GX4mbm5EaWknLqgBgdZaqu4xCXzd9SdvttbweDAXayGV4t2Jge8NK4",
  "key4": "2Pgq8rA2x3pPFhMfbyKTu4PdZQ6BSFxLTwwjjkChE5gX3G8PMioU7RzgqcDnfWuuoHisr8PQEmMJ4fe5zxjxNyAV",
  "key5": "3bUBf1NiMjt17HxgDZJicEA43R4S1qyY9SPnodtzufzu931LdohHMb8x8U4KC1CyRbjaS9oMa64VzU6WWMmKoZbG",
  "key6": "3RVWf8hu3k5snKiazxmandV2LR3zADTveYUoLgyR58ka5apaUT7Hku1qjA3Hau9zfWBfQedFhVcJB9ALRc3JS8uw",
  "key7": "5P6k9ujSTajAbwGWcLz8SzTdAsz4Aa6kzydQff3DqwuMmpTvGypN5AaZ45G8YTueBUddwqqvaNgwPSVmJ25kWMYX",
  "key8": "P36Fx5t7Dv2CcuwL9rGTMqPdaMb8EYGiUqw8PESV1sHtjTgmwWMf2eJJLiaQitCyEBNVABLuX7FwabHcHCG3Tb4",
  "key9": "2wZduLPA4rN6GN4kJg3wzUWCnviv16fJ9TGy5wVsSQjPA7urbnCnZhAPsAiKjXuuyZ58VXxhQG7xJDrhekKzDJUz",
  "key10": "5SRWCCtK5SZw3hzGv2jiZrtWwV2zD96npS6e1wr7HT6JRTiSAkFosrbVVjSDQEbfYz5V8R2wLVqmbMyhtuiqBV2M",
  "key11": "36tesUec2ZL7837ugos7EC22RpPGwbHwM8wUxqjhowZmau6eSnt4BkndwveHjAZms2H968D8ekE68YSJ7REEqEgv",
  "key12": "9tPReCVcFKmZr42xWVbLTBi1BFCnMAEZ6KU1neJxhM2v5wb7BNnBbQr5yoxP5ZgsaVWaTu8DFcMhYdZ5DN5axri",
  "key13": "59u5Pf5fUSGo3Zjkc5xj6gFTSEpfpaUo1HZUvb8wBCZYPC4q8ecouB7XqexyzokQMsqyTStNWBqkUqrtxh8jX8zM",
  "key14": "65rUX4KNADDwcBmSAnJvjgmFuCyxErFGfjxjYw9uZXfqkocRfeapxRDNJZzWqNrcJV3b4ygdKri1EyTUfDyLE95t",
  "key15": "jBx25nUk1ZTSUfEVS1Cs698in97NFZuYz6XWGUdpfmhNbTrLCJUXKxyeroh2pq6hENpaGgZq5urFD8Sbcbj3rsG",
  "key16": "UZyeqiaFmHs1UvX4UNNDSm7na3qYmUt4GacVSFV6SWmRS541W11VtnqAKwnDbB8qmMNEkqKimponyzH7TW3Lcrk",
  "key17": "4RwLxmsYAifUBAbRXspLukWAKgUJXeYXAGYoHc8AgFoNE9wjen3b4nvJVqxSo1h9RoTp1WpQtMiRX7EHgXZjeBp9",
  "key18": "4te3RVqYKGmGMRXxTbuBbRgqE9zsAoixunMwuCWzWzqPwwWW1d9cKLcvJpSUfk9peqQURMpvpP3z9HE4WvJ5sw67",
  "key19": "52Svy64SYoNnkobFhsF6AMXrw2KJj1R6TCQ3edYsSUWqCdWJGfFHhFJFbKHBtp44TyNjZHnQWk6BBuHAtGgjUKNT",
  "key20": "2TWqKYqzVFvrMyaUw7CBJomsT8PfBy5mjALRvQksMXyMBCa3LH9Ffu2wVnYw1rnzwKocQ96kYQGUkG2rTgHgcgG5",
  "key21": "4bdywe7Qv4cG16Uo5VTwVtSibkoYSUZf24Wi6VcpGmLHUEhg1s5AgH5sdjhadKeJ7fQWoLyTZrsPuPFhdwUGcrhA",
  "key22": "26BH3c8ughhoW3RV6YHJNatJ3WtzeY3WnpTrfHYeXDLHqtwQbvtgzxtAdH5ETRmdAqSosxjJEF7hMRDc7jZcSRsk",
  "key23": "awCzxDwQfcw4sfMAjbpFnf9ia9HDJKCEZwCwDqFn5WV5KR2DQUiUnjsrnKH3yQpAEG4SKbmnzr6AXVibgRzp11D",
  "key24": "4FAXmQ4RdnRvR6XPtoL6tfzej3VSkbfxS1nqrPU3QceZWXNQZCpnqvo1yUvzQZAk1hrHF1LSZ69GxdE26QF9qyC8",
  "key25": "4cVFGMhVugw8kTvhjp4Q6YaCUhEXVQvokYhEQQWDsFT7Lcqz2msfvckALjSfnm9ZTnQwehrJpABupukw7FRRjzXk",
  "key26": "2mRzmCJvG9NL5aQi3aP4Yk9qZP2tMHmkRs9x6FJEkK5n5pzZV1HSVNWSmoFrMQvQGeVf4mrHrwG32PSYhYPQoTxG",
  "key27": "3bkPkS5A2YUJw6xoFiGum2TEN1CnzpW9BLyufyUMHFSwURvUVTUCFS2CBrmxHgZ9Tf2VHamtjhhvv7f2trsNvUTM",
  "key28": "5E1BEqMzDFx3v8mCcoQii9f1GxWVGbVGe4W5KbjfeQKqhRfs1jrCmDSDfAJAuf65HQ1uMTB86TquT91971Dtfz3x",
  "key29": "5ve7M3dDxnhwiH68KiSR5UCvg7ySjRvGhXNKP1i1RUDzEWxVcubhxUkfpG7HKUknVosyjCUeCxYpkkCXHNoFAzPS",
  "key30": "2FCjWsJHLZtAPT8rSZ6gxdbTeZ35Lizp3QSUvvZUjyaz3DN4JDS6C5E6wTMe3K7NnP9v8pMLLa112uFDo7jgjXXZ",
  "key31": "5UpW8BzgCK8qVDPdJsBEcUzNC6BZNv1FXY2gUmS67i3xfhH1hXWw8VHicyqEMBN8VjJriCbYs2wUpTGUrz76LJ5i",
  "key32": "5Hfc1r7woiF1pGaNiJiV21PJrFQR5ZXreicjwgy9G2SYBUo4zfegwtZwsHAaWLEHRAg7dEz36gdR1RPvxVNCy1t2",
  "key33": "3sKV3y2zRXKiJmTKDBUbFiaG4jzMyyKLmiJqf1QCjBq623dg6whiuGJyoHCi9aCGkobUpv8UPYBdBHCJGuRZKvQB",
  "key34": "2CDx6DZVLnmZob2HVc3Xfk3oauGvpZRaaqCoh6Md3nJWkxpWWbsyobsFBCu5BmNcJULd9kvfSkSzNFZVuajfhWxT",
  "key35": "3AQHesKeHshQ51K8sVqTYgoi2mPuVFJBwVyhdYbUMshm3MWUQVVHRwuy3jEZ6MdzYAufGWpxFM1998JACWtuKZNe",
  "key36": "3f57EWP49a3cdeFfQ62u6gbuYcmP1etSrnKuEB4vruWW8rf3XyautaSrtcAwVj6zBUmkAswqpx5aVnk5cmj7XAX5",
  "key37": "Z3TJMQwb4FakFsKXXQgDpQ18PTBnYxcTREdyfgJNVAVFPHtWA8KtwCh8ZyjREUjc6iSv72Tdd7ACFJniwQyYA42",
  "key38": "3pLaxFYya2DcCdMD7A71wvZcWjJ6DAE7PEu14wNKCi3BYXKZ2bwDS226YXQ9e3KY6DrgmCgtr2yTYkppMdsyfWU5",
  "key39": "42zczk4KuDsRowGptMKbyhheFxsSs7g8sYLZ5CCs5fK6frBYpxLtQ1kezJp4tyTJNenHTTM9XPyX7RiieP5XGQEv",
  "key40": "5qJf34rukXKbktRdCzyJLPFwF52JwdPXqkUryE9kAFvDW4evUzeoTxRzgTCagvsMS41KVYSBwrGCq4SWjgoLW9sx",
  "key41": "5K3iGNdhRTX5FUMu8rtAm4WbRqmN7zkYbNWyiWdTGZzocjYcHNTtDHFMQAmaCCiQp1v3sC3BUkNw2sad6xv1ahrK",
  "key42": "4HuVf1AY1wez7ydkDSREWdmNSxidDT7YFU6dAN6m5rZxnkZkdpo7P7MJSDABFZcsfa1S4afXhRYxwMoD91XWbTTJ",
  "key43": "24VUZ2zfvTG6f9vXvLvgpu56g7DmjmW9Fgf2N9B3xRTEMQHo3cGxD3R4x1TzJ8sLhnFPQq25v9wasEyybF8RGMic",
  "key44": "2qp7BZC7zmDHmEvToJydEm4yDKBDApMmnZuuad8ZVkY2BF218vzsRcgrzsFUAscoBy1tH7scz7fTTT7xzS1ZRW67"
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
