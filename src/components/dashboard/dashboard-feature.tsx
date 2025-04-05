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
    "4XZNvXuNyWy1NZaaKyVPNB3HTjLBfpmXwvGkWjjNyttk6LHcSoMLzTaHhxuw3hPa6MQ81AGyCDH8HYBaFyot4rCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xLy3n1h8BohFBXrE698cb17wUazFUgYDN4rAbHGGFqUaxaYtXjvrhzJcVjaV1AyhwNK4njiss4x5j8LHdtm7JwD",
  "key1": "2S9V7c71bwKYEWoUQ8o1WKhvAYGChvnib18FM1xPad1susz6zvDXjTRrLNhbdEM22ErVoV1yyEpXubKoZTUH5215",
  "key2": "3KgqaLutFxYzuWjQmTBkMzov6H4dMo1WjzQJhMCPseMMFDcYZhQpwoRZwpipKz2xYMm1fgCNYroce73T4iD6BeKu",
  "key3": "4E3K6RtUB6kREec25y7ccdirrgBqWTNpf9jWPBjL7pBQEGaK73xa993Jg7Mu6jMgdWoZrHUuzhRe8CRhmxz9NfHE",
  "key4": "5VGsnc3Q4zMNs1eR8sHRhYxrqm6u6TanRAtkVJ4eouSEfRd1hR5HnhpY5hq55q6F5HTD8K7XcDh3nhwoNiyG8bur",
  "key5": "5RjhJeoeVtWo6C7Px47owur6jzcW7JVcyKKz7LKTBWgWgHQ5Fa5y5wyy2vryJncCZnW5bFH7EwBttPRFEdPYVzpU",
  "key6": "9ytydsfMukKocFvVHBC76aBuREYWLRy1Sc322HmRZSmwoPH2Aw1wY76ojiENxkeBHGMvRiEX94wpG53NcdqQNrT",
  "key7": "4Y95RJtEHqzY7AeAZ7Fbp9HzRjM52QXZnicXWbNfjezrxvtNLJofRtb7GNDHHEAWvrzUTWzYMParhrXQ2ScUQU1c",
  "key8": "j4BcKyTXd1jhJAEhwGhkzM1VJiUEYJCVafK7wvPboGLyXAsB71t8hVhFhdNXLbVxpdFkdFVsokSMtkSpAMshE7m",
  "key9": "4EnYqe62vWaZEpB6q9i7TjGuKdRvovH2yHRm22jdrf2WRgYzJkbUN2Rs4VUZv7F72DWPZWG9UMSnbAmqbaN6cb8k",
  "key10": "5Gvthxd7ifUNuryvcqHfCjponSchkKhnnbTCWbETsC6xqqefsn99QHaKiLq2buq3caUi8k5xRgJehnTd1ViHaQak",
  "key11": "2GtHHJUAGo5h339ELyKh6EaLSqEXXWG7gBZgccSF5HG68uLHxroay566LWByeZbShtHuJ8KpDXS2h98wzZWnP3Cv",
  "key12": "B9of9mYeByGmLGpfsh1tJn9MQP7KtAh7oAsEHbQEUorteCWWsRbPLL1L8gfFPpNtMJ81F97bPWcnzUyRt9Unhbp",
  "key13": "5VhpaU9fGbx4fAy8vYyajTjL4CRupEzUCLjpCicWcDeuMcjkih2Uy8bDLpfrtinrgYRxKGfwfE7kcwwscbibMwmf",
  "key14": "571zmVDNQzrfmXSQJXJokvQeyshQf5pp5B2z22XUWusHi65H3j2dCQWHMosnEtAB85mHZCVhaZ7jdCk946MtsGGx",
  "key15": "3Nkb1cThDQUJZTXG2kjTcHGssVcf5sSgV1HjbTcDZLnWj2J83UCMJVpbvC4ioPdoqMmQbJAU1NoYHSAyDRNnntx5",
  "key16": "3PTWEtWi3FePVHt1hrMUteyUiVCpkhDkjDcuZipZLRkKAhcVWVoVqaDb45pXfZVgHPUAYJyVyR5BvJjjR1jNPWVw",
  "key17": "4TxD5N8BKN4RxY5Ns8JrrnP2JuGK1ZsUyRrb2rNrsBQnWeuaPX2mWtLWwnHJrsR9SVp6najNAvLUC2K3Ue1Jz4SC",
  "key18": "3BTiiRpQLrKJyLhEFdL4JcgNSFnynffYv1ozTTFEv6EmNSejqUGzosUPr16FxqwJeoQS6Db7XjqPrQtXX918wm5L",
  "key19": "64g1paYEpsvgBPYCpwxzBFmaU9hAgFt7LFDx2yDsLrkuossJf1vXSK1Rbkdvzo5QqsMb71ToEtDjUmy6biqJTcD8",
  "key20": "5wcGcw8evkN43E8TnMaVzG2eMuhAZb8EPfs7rxhCd1MXyVWN86UZtkVWMWqkQfMTqhBpvs6ngWBrHCZcZfBxQZgK",
  "key21": "55TPusxfwMgvpz4e5t7jYW88Y2aKBSwYcwLUFqz9VSibhvXbA2nFeByahb4xQpvYbFWvzKDEysjHzbvY1SqXVbRy",
  "key22": "27fbXmHgKCVXu9SYtarvd3xoaRAXyKgdFYyaLuQMRJH7xgTcEXNJ3EmhjfVd5bopv2PDm1isuPfDfiZfwCTJjRRx",
  "key23": "3LyYFrwEhzrx26C5w5qF8VnZChaGjoiz1ibnVEW8HqELVYR8rLZpgDHw5YoHscoJCs2ndxRWXv2ZmaiTve5a5Gsj",
  "key24": "5XkVshQbrpyD5P8HaDjMVF3cgEh9gmXn5785h6e7YT88NFYwFVonaggpyjpySua63Gw1VN5gnFrJ2t3bWvnPM8Dk",
  "key25": "2i8XZoHDKw8hsU5rsKwZctAkjLo1pa3jmWkST2rHfY59E2r4gUVS5ztU4N1ANeAQPKXLzrqZsorawnrdNi4CWemP",
  "key26": "5UGVo74yKBHowhFZfYCSfWxKwQrjc9HjkfqtjPe7peNcmpn1Aav7WBA31mocDMLYsjHohqmX8nGcsQ8QQxqoZAna",
  "key27": "u3SXzDZ3QQoMwbZfjw9chDdqQkDpzBWAmEeKypiZ7n7ub2xaPrdftDfUXNcndXdzzH3RrB2B4QFuaqLbtQjHAxd",
  "key28": "5qmMq2vjeKDQaBw2oSk3j6QN64Fawt9sEGb9yhEoHmVZkpXgsytWveFSnnbLCjXvz6CojkWtCMWhtr2EmGRb6NQT",
  "key29": "45DQSqKrpKTV9aKEPmWguELcDut4ssDLBSNLkXLxRCgqLq2YjdhpgqxPNmyf9pxeLU64WygLaWYU887SqCY19uXF",
  "key30": "4FyqjdvYgRVrhwVXJKPGv3S1DmpKTJk8b3gh7auqamhXJF9tjM97YxWssEJZB2SCVwnLdFADXZeofjARjfKUhecw",
  "key31": "4Hw9cQ9SgiM8cW3XZhRj5Nfgz1DGCXAtaZ6rikU1rAuC7iSSumhuuT52uf4fgyG5rRmwBNzzs8tT5NVwd7TAwZG2",
  "key32": "dqF82wXSRd1ZDPXNuGDaZrteo8T54E9wLfryxCS3wxkAuGcQ6LUAnMCbfAANv68j7a88PP1sYShiqwmtvkYxeo5",
  "key33": "3tsWrbzDizocWesCbc79jiHZTRPME44EDBQ7QNuoA8FLEN4mSrK9bfWWF3oXhyFiEXAVriMgqG6t8QK37xNMscWJ",
  "key34": "4qJTxQivbE8aNPtfETXxFXz87FrK66q2DQha9LPvkcWANKkqCsH5xSmiJaXeDrMnoGVonZnX8J1ucDgu2ikQwsf2",
  "key35": "67x4vPkAwGAmQFJQS7rxBfRmpeS8jwfSkps9DZCoBKsooEC3PctAJN2HiNXL9rD225EoCvzuxJ5NbqjinJ1cHme",
  "key36": "4ToFAn8dqicY6gZLk2DVSxChugbG4Py5tfNNU24rN7zs1KsFTeFZHEThc5CRtoUP7C2YSFUTmqekerU9i4HAeAYX",
  "key37": "5L5vHmGvw6c7hLpWa4mf4rj8VmwkZVyEtmR8snZ3nmiy5sG3BHabfGa247SaPTsSuNQ47YA84Qgw4rd8i5unM8jL",
  "key38": "3Meos6V5gDpd7Thf251hCT5aQi4YwYvsd7SHkAw4PsLdrM5GbAENxm3uugpgyHzvKnDDQoBYtdm54KHE6kBP9CYW",
  "key39": "4fx1FVHk3Z1Dg7rRvWAoSj88Bnusc7TbQPLyocDTdNfJmz9bSutEHmfYu8nuVQiqCCqNhH2AAktyucKbiRVrzdFo",
  "key40": "QhhF4uu94YEjJRWAX2ABVJM7U83o7qMdQEtgmxemcUkXtkL8HWndqWKsBYUYysLvPE9h2N1Ud5uB3G8JZMgk7JQ",
  "key41": "3ScbrBsnfxHBXvdcvrfmh5W1a3hKoiHTQnKcMp9gnFHgxwR5HY5XDQojSNWW5Qd27RXgwBnmuvnsM71keXiMfxCV"
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
