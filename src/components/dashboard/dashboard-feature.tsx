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
    "4jeBfR4ELJrkvQEUxdGY6fK3qEJZT6mza48SDwTMsFqhNTzQCEc7CeDFSd8hzsQxGhSUJF2yrjingnMzXrujN74S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mdAEZMwMDrQghZUbq95F8DTFM9EUdhtegH6uFQDBGGLfox6Zb5Q2zQ2DV3Bkq6KHLvziGNBRoxgpqQ6TboQGMzE",
  "key1": "3Z23NkCxHYSnte2SSyY6N5crRzwDbrLaQT9xWHC2ivJXswS6teaWx32br3iEwaxs1pz7GhDbc7jMZsVYVZsc9tW",
  "key2": "3ju6ZSXjXTJMx2HRMtKRR4t511rDbEC7CphEh5nJoZxEwqFZyafnaj1JPZCDaUZJbCeufWySqfAniZaMNiK6uc5v",
  "key3": "4s8x8QmbKBjq9gN4M4StvHEjsCBoeUe3b4JXNtcqwd2hT7fia5ssTxDiwPbzTqZANRQtrkzxeAruwUhdeq6ZWEQd",
  "key4": "2sqEwu3ETydJqzsq8HrEHT5M55rQKj2VFJYtFvsLGbDxA5a5U2txKHh4F84ccgv1N1KaQSa4iDfFKt8QA8uTXshX",
  "key5": "2SQtE2ovNLXVTHm7GZXCkMRqN5eLgzWgsneaH6SNmYiJ3WjvDk9W95y4ActwXm5uPPWydLS3ZXaacsnXsGEi88JJ",
  "key6": "4qk3HWcUKQaVdv25oKXBM6GeHzGid8j7roXnxwP7gpEM8iUkAEgTSSWoph1MaG4pEBstaTDfESELxEWTbKJj9gDY",
  "key7": "5XE1ePwphubZjyLQHpQUHjEnAJTnUA7i5wdNcijtYLuaNWFGiXikqY7RxpHbjv6YLVv9qDotfqyHMsRq2B71kAk1",
  "key8": "2f48DRNXGVfMu5j5GVKfFvwoQ8p7pdPAwJwjWfm4TpR7TaEng14Rk3SSvwfDciTJHkgZiKpqxZCuF35Yx8MLa2Wk",
  "key9": "2n5pXG69cbPwKwD5ee5xnTxtnjcmaD1Ym53KgDHNX2Un5kuzkjBoLmjohWi1zkbmhqHehoTJPhKHidiuqKwfVNpP",
  "key10": "4Qin1LTqHHw1Kci7Bbbn6Sg6tn7FiFyHhq3ZyetuwMibB6o1ui4n1ryZUN38sskGRSzSLZtq8t6XtkBBhUw6jGUp",
  "key11": "5QqGJuotrcmKDgnRqPdYM52mUdeCicqCR1CWtuLbLsuNJV3YjyUATitRPPuAAm9i85qyMf7jM7ptLmETf7ReGBuC",
  "key12": "8gwc5Mj1j84M9uubwUhWZPanGzGGYg3izARwm52KBHVYnn7cLaJwUb1Wg8Vk5wsbqQVkQhGV8NFfB3esiKV1u92",
  "key13": "3kJddqp8bm7RcyhJMe8g67VqwSntD9oBcqziNtaC19fvJX1y3pBjo5Qvj4WA3rFSKChs4rGSe3Ac8wZjQu2ng4gn",
  "key14": "4Q5733khFCtY47wSd6b85qGkYEbkhMcnSXPKePUez5APZF9sGoHb8mFxBVKK4v1ZWPhvnr8CYw4Mum99TK17kYZa",
  "key15": "3oc1Avi8bdjZSpggFWRKkzSZwWoBxdj3YHeGr82AtTWasLtCNq2m7ZdivmUhJs1c26SPpiJ4DKAsStq3C4bD4KYh",
  "key16": "3b3e7chH8cyzMLDdJMMVGSdhLn24ibz2KdJ7kVA1feRc4yeP5bRjsMR62AbTLZz57YGoPxebXoJXJhEcv8HkgE27",
  "key17": "2EME1tyHVhMDFPv6U4Q4mcDiyVJYY3PwZj1LFDhRejqskYL9QDGTLtYYif8orHNHs7EHqtjTtNzyAefGUHmj2b7C",
  "key18": "4eK74at4azCyAiRYfUAqWpBrQaYbQ391Y9BjpBp6B4knDME4eKLykeFq95hWEWXH96V7atXkA4g2uZDJr2mZT64Y",
  "key19": "2GVvUehX86SrG8td6deFQ8gGXbqEHw9M9yEarrSJKLPCHwBNEppvs5zpKm6X3qw93tkbiMRJFaNnJ9BZNQNES7Sv",
  "key20": "2AJtFFh52ghYyxBvaogNs9Q2SHMedUk7LN9o7AdALDLWdh3qNWiUjjSWtBbmSB2RihQ1Lp7LQimhstBiCQ8PW6mJ",
  "key21": "23kE1NTtM17air3VVeWQ9S4QN3PvGjw1pTQDf7py5VQSCXj2YGq9B9G71XdEcKadWMwe7qm9fSjQhdrDEi86G3oS",
  "key22": "59i4sskZVBKGTPVdrM4r334sGcgwgTpgeznCCLR5ac72tCeZ5DfoazMEboW9YKRYtaqJ3rgDDUZta8inJtKBwfxn",
  "key23": "35ANkcAFNzpogUZDC5kq13AhjLvmG7efMUL3BVBnstTmRZ7Q31S6fuBgx7juZNkRTMFCK9NuXiz6vQZp2fWc8i4R",
  "key24": "3pmsamwsdTnN1wk2UMYPV2Ea6TPpHRShT9YYyv9VhSysxyCT3ahwpQyAzJvsbehU8N6peTbYUTFiVUy9NbP8uV74",
  "key25": "kGwXxe7t79fsvduf8ASgym9mumXbcuZpSub97oZ8MB2vFacvA3yX7vsDNVHnU5WeMcDH41PteHHZzXD327TPr1a",
  "key26": "3DMCmKjeAMCVcum35XgCjTCtJkCtfw79grUwwAiPi4X9oox19sJpyiYinvmGg4is6qwdDFnPj6SVAagALekLpQM9",
  "key27": "4L1WhhNDGVimcm4HYaduYtkP7tReUTjYvC2zYnVmv2GNpMbczK8r6wTCbTS9gp7ysrTMcgZ8MiiQLdr7mtXuuLi4",
  "key28": "3FapmgmquLcaGdKpowGxUemrENKxF5oEekTBtYLicpVGRDTna2LgP4TX1QtR7F3nXodg19MGdYnVPEghHGDcgrC2",
  "key29": "42eJdih9D95cCd8JeLRiwcrcHV4S8J1NauRntksmpQ2R9GPeZ9Ux8WMDBtMHYnSdymMhHX4GLfjLPVCHqWvSRWJd",
  "key30": "2yWWfJZVL4sFL1sN2bWU8kDkpg8kcSSwBYMBkoznvRvWiPPPoiThRiKKm8QAYsEJKzfnErC3oqAPFSS7i5kmD4Bu",
  "key31": "5S8op7fiGUyRCqRjNyVp36kZX8PDgqqwV8swpJ4PEy2mT8chpypxyWfUSfEBu9kPohQ3vxa3uSUvaowp3Ge7ed3V",
  "key32": "htexL6r9mdmUjE2g3UVZdwnRKrQ5cyL57VkstX12FpWYvaNwy2m6jtfHi4dkFMdvrhYk4xuwvNh3wJVM5pgn8Fi",
  "key33": "2NKEcBj1LkEmt3RxkojJEbjDwsh8f2sEMJ4P2eGSgTXxXsmwbWBJ2HNx2ha16zuZmvgFEW8Xm8EksA2wQimqiPFY",
  "key34": "2SspreZahjtiiauDJU7fRUYBWLoceSZAURmPUJkyk1ER55QbSU3hEkFo9KDeeNfSkN47WWCuAJ1CgByT32jPCsZg",
  "key35": "3eaBgmhdFxwUbLfUng2Q3EKVmoB5EgFxFpSFe5EfVugYQnX4NcUZcwPHUc5t9JyiX73KFa6YEowBZ7Drm4LW2EiQ"
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
