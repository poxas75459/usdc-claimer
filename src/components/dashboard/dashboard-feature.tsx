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
    "3d7pv631A6nS5ZYfqBsrJaS2ztRuri9xinBXfYpWWdTczFt5U4xiLNukygf5kiqLoBaZd3WGiYQLTxAs69tnsRpY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sXFs2FiDAvYkp8sA1co3S6TMAPKcFGQzJcmWrbsc4bT2CuWLiq3MkyGGTiaWycKtnZK7xdgh35vpmZKW9T2MB3L",
  "key1": "5GfNh71qit9mkuWX977rEBWYZ5chSs78u2nRz9Fnjv89KuBYMixvT9dYTyUcsDrfQvffnRaSEgHu1f5T6ZdPjbsU",
  "key2": "5DUBhHdTR3uUX56s2Dxs49MjSYYfzrqHCDm7q1hYeeaTsR7qf4m3oBgTptbn9rAmtXfpzus69ySSANfpwoTCRJ8Q",
  "key3": "324WppVSvDvNHove8YUJieYtD1C8qCXL7uxMUFtTupdbvTSq1Xc4tccGHUSSfQYmP4iff5bYYq7ZZzhJenB7K9LJ",
  "key4": "3QNLaj9fjwiA9QYakH4k53e69iViHHVvuA6CUhYHq6aNTkShCADcRvJfu96GyZ1tsRuK12ytRZjNq7h9ygq83idg",
  "key5": "34uF5BSgX5r9HC9REAZidtpTspdenFWEsMyWbiHNUHfKB1NgfjLqBtz42FPaZLTmAFXrnn2UvJFko5gLPaRzBZYu",
  "key6": "4mUNqTuTm288VhHrPzXqbGXg67Zv9EbREYB6QvKcRTnBBbUWKxgxjYqPWFhxhvXTHdRCJfnDWqLXk86J7vbAVF2w",
  "key7": "PfuteH27qfJPUkH6CYPd9ijLJfREKqBgMCUVNtq7c58GN934xUbsyp8hdsCR9A94bApfyaeuw4L6Wp8BuMmhTi5",
  "key8": "88Ap9bxSk6ytcfgE2CtQqmCp8qUgQ6Km5jRaAjYWD895MMBAwoevTZJyWWEhRvaR3qq4LKTPVBAth4qq1bBMUD6",
  "key9": "55WdgiZs9fzBB5EmVAPHmsU1znsCuJHnHwUTCwtXBZdjqP2zaC29BHS6DSfy7sGLTgaEywqnndxBdkdiDWRkDc7W",
  "key10": "3j2jSkgQ9aqigpDrfLU7BeYBDCBoF5MFwa13uCNJVh94gF7tHuJYSJuaJbrU8NmpS2NbTjFCuX1AtVnux5bPT2ZW",
  "key11": "2uLULLtNMALduMphb2M9Hi7U3pBrn8RJXqo8wJY3xL2E4zFsdi8ZfoHjzweMGiZPtd8Xq5iuqC82fkZG5iFxntEZ",
  "key12": "2f2rB6UaGXdcKrfGzhr7uYYQFamr81c5TzYRgjWyGd6htssgdmMr1NfgQjy1fmQogd86oC9p6c2zsaZzxyKcxzpb",
  "key13": "xFAJtaif7E8onp3bT6uFYKAQs3FK2dVo3RR7beUejyMh315qPRxqZmdUgUMwCQ1Uy9sKEgG7k2qS8U82wS85mhF",
  "key14": "5txuQxCCVeNGhMyaBXCYRs2yGPx4GdLd8LrrrDKr3NBuCkB4eDifRZstehyMR6T3neWDxkd7Dn8NMgAVB8PuaVso",
  "key15": "4wsMDKBpAYPuYNVYX4XLnLizaqtv4KgmvLyuvTqLV8PZcVH3UhhWuLQijUAMjqhCUsKvgr7KpbRa2mWShNrJ6b2G",
  "key16": "4vWM2tZJ5yH6hapJ8ZwNQH9NRZC8MeXdAm9i49oSuMJaamC2f6Rr8PZBg2XvkEd5MGPxfedJWTbr6YJ6R1nT8dmR",
  "key17": "AZXHwGnb5ML3Giy7rcrsbTN7Y1pDX88iyX6TXEGgxGFWCRryhxcrZybUm7AdeN6VySsdZBB7NUL9PP6xtXdoQbM",
  "key18": "5hHfUguy7FkJwCMcJefwmdV8zV6tVehVFyPXUYTZqDBHnzUwnBF51DRPGxXziBhr9aBnLZy6w29bhqggSgYtgHFw",
  "key19": "3ALZZWUxtvxmV8hNrXzqAMNsPYzwGu7sA6NXeeWqwqhVoq28HXvwK5SPnDsjMknxvKkzY1YLGCEHnexGm1Ab6pxF",
  "key20": "67L1GuWtH8fzBhU6wnQWBghSBsB1W7iDQrq1AgggbM5LfrfarrzCe177yDRDRu7MMEMVy2GTNRcrSK2fEHTpUJnD",
  "key21": "3purd4dLxG51KQgBvKoW7mQXi2o3i4UMcTVBhERAtjviRuM73JrCY94pz3w1GyKEkHVh5gQC4ia1TARaQFM29khb",
  "key22": "31c7vAdE3eFaHHwVa9ZG5aEaYP5kAp37jLMJbNjzDZUZYMjoSXihq7Hd24PUg4sNxgFyzFBvb979rmzUBgMM4wVs",
  "key23": "3Q7XpiKMFeC1iqw8Y9MUKDY1oD9Dbs94QZbr5TqRZzzYHDtFvqLVpfcV79LnEV17QvJyzJtjVtyb4csyDG9Mh6fU",
  "key24": "4jZ8SwBetwkaLrusWyXC9YCReRaqBhi7h1qQh57VZ21mZNRsUPoTPVNqkFyGfzZSGgFsRVxXxeWS7W6nfcvmJc1R",
  "key25": "5sbY1Ke29dcBh5UVXcCxZfBY65GMZcTiBMX82EB6Z9DJYCN91ZrakoCmoZTAR1XJAuraBwcvnhvnJ7bh9XgpS48x",
  "key26": "4VqyPZRut9PnG12XobaaSWBJW6LCt7oLSo3pudrYmkFNncShkEnMDzeneCdM8FZ5JyPb8shYVYPHXLjcNvYKhqtV",
  "key27": "3fJXYQ9TveDpkucWnMUgYCDQVmw7gpw7sZeLzmU87hvSConN57tMa43Uh95VPiTxwGqYcpybmx8vcBiLneesa6vw",
  "key28": "5752NQHFyvt7wSZhrdQZRH4P1rMtnkomZDusYNuP2HDPAzb4HTqYJhp4s29KivgTTRijnm2jMKSGCvv3NYb4PpW7",
  "key29": "5jnK92TJqyojqALRiYSmfTrWhj3sjxtPHKUEAUyFwdFicWQ4T4yhR5xRduCTWh8nVFqKcjafPk7Sw65hMXw8iT1e",
  "key30": "ugtHkUrX3VC6rd3A7w9nkyFwMePLprdytikFKPGKS1hHvFxiBgJSzZiPwDQvXBnuVAme2EEMT9YfMvzcjS8mjty",
  "key31": "2o3j6xc6Q4TQAZjsEjcBsRTUpjsKCdGNbiY8EzbLKJzTdvuaNFZXRNbiLs9u5r525viU72mKaRwgqdezZRmy7GmC",
  "key32": "3tfEPnkn5LiFJPN7AdEG1DVxuT3TMHeiq4ko2V4XT169hW6hVBXuR94bkiM62MkeM1oCurmxjAgudCHxyGUmL1Ri",
  "key33": "29JzCSZRLEG4SctipCxrVgmdJiwYqv3uJu4Fgr7b4bYKjiAHgJAbcBSUXs5arH1jsuYZjAT4rPmVvS6jqFtFdSTM",
  "key34": "5AfzAzqqa6ayR8Jmpk29mkFQXxDqXSQV79zc9ui9wKXiUEU9tsYj8y5WavjMuhtHJCWGht89uxFLNpjZGwcweMe7",
  "key35": "2PTAWKR2ShNgNz3b9KgULp1uEhUhRucFaApFrMXhDHJMwEkCqmp1s9PkKgS9cXd1zdFabQqUDDcNvjZdaossL4TX",
  "key36": "2TPEt6ptVrJf2rKQW277ZNniNLuSHANqtaSJgQiuEi3poMLLekf9QWz7UAtoYY7cDe2fHjLjTrJypcpKSfJdpSwG",
  "key37": "2gUYHbNCTiMDmLvuqeBsKuf1UZWrzEPXUnutYhLgVHHKnDFsBH9JvDebx96mKGs6eRLrcrBSq7CrvFWPawGkfQpi",
  "key38": "57ob8uP1ik5pmDxuqTFoKK11UK74AhxQ36XT4z4PpDUCCqKNEVoKNgUB7nmnBHLbfTN9yZFzVDgAFn7bnk4Z9tZm",
  "key39": "5vfCejsF2E3SfjRrMr5Ky5FGJWW9Hq3pycg3WPQoYjGPRnmqbwagL6zFs97y1LBzbjevUa3BG8xyCxeMRfJVcJyr"
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
