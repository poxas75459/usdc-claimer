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
    "2BUHiVSxVkpcvVozYQbjn41PrEsVEfRb6RqSiKLiYepuVbUyyGfqxPGwb2mWDHHzcZWVxrEqrdppThStuP4cn4n2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yyEdsZzdJFNDyaeZAXWXxWk1Jh2k5PHfUrh8C3MeNmuYdXpRCaSAnmi4tUiRZXNqDB5z1CAW4dHmkopfR2SQQSo",
  "key1": "4mZDppuSXDozHbZBWvCCsQVGWDBrqgjgZV4AweztjqtBhLKaAeG7RX6oqQbSDztEnncU9rDpgndGtqJMvMbKduz8",
  "key2": "5eSG1RBhNp9AEooVmwUg3k5kBHw4oCGPDViBeA2DuGv2rLbEEJ61oqYGAMERcZpyukNHpFKZNAvtqS1Y8LjjeVaH",
  "key3": "4WbdqzwqAh5zsP3Y5WGccUrTQr9fvHZgEJUrkzn7tYhqsfUwyTmzkbKnKqNGuELc8m3NSfMRCUSWjeQ4kBjMTvvb",
  "key4": "4CVZsSZ75NeGJELjCJgmpx3Hz4fC2nN2g7Qjz6unaPfoF82mpUymqG1DoeCffsDzvbYz4fih6v9zgRHJMu5vzW4E",
  "key5": "3PSZV2HAKWqo1gsCcRyhU56tKBd2CDuQfWmMvkbHCEAWmnUBzkaepVZ4xREU7bMsP7bTH3AbnaZ7A4u3mG6Rrzfd",
  "key6": "5fUmCopqkUYMPr2oid5LZT2eapk8HKSonoXoy3mTZWrXLMPjMmS2q8MQhH5cysigx5o9tXgQEDjnRa7cyLWv6KU8",
  "key7": "2rH3LY4NbNe7gJMVmhk8CNBmjtMKPRHu9jDtcXmewgAf7wpz1BiZvvSocJJP1DjFzMJUBwWKJUPvTJPguiWFmPR7",
  "key8": "4JYEC8TznQUgxCGSGP2qSUhmvPEyDpXc8xrTHqtxWpr43A8AMPxRq5zkqtGqSsEZ9BtMup5CRjc7XUgW2T6zPJGd",
  "key9": "5aKp62E1hHWnxvdY9opbxVqkpq1th29DnJiAxXmSXCxhHFckcAA9VjBmk1mDy2uSq4jjQy219kcryiwmpqX2daZf",
  "key10": "3h9Lov25XQAT1drtSF5gbbWfQrSmrdt5bxEQwtjpurnTDNomSPFYwcr8pwQEhg1sWfTv2ZW42foJSbiSAbmaTy2E",
  "key11": "22jnuQt2EWxUi7cZqUeJX2aPnDsYhSGXnAA5T7X2tm7fJfYpBpCiPkeKtsMiHzfD5zmN1gN9xXjkYTMz2LkttU7Q",
  "key12": "66G2hoLGMZNNLgsiKPQPX3cUuTxKLtBhxxsHhhAGixE3E8GXgjGDWQL3KyUJtaiBhwz8C5sQ5aX6YxLjtjPtL6K7",
  "key13": "3ocKbGzUdNzwQeMkZcCdB3WwpE8mNAnKzyV7S2KRvH8bDkvwJtXabhMNtvw2P8Y85hTKp5SxctcTKBzfegPraGQk",
  "key14": "bCZ2ejWiNpywqMX5vfYmK8Q59Exm8D8rBsASZ2kSP9iohiWCoxnTWwDFL4DdigCZ3LarbWHt9RzU5qSET8JREBa",
  "key15": "NYGARfPw4pvx1xnu2Ucd7DtNBjTnKSrHoez6JRp8CQfdNogsv9g2ZmGbrxi3HJBZdVafKBzJ6E2Ue5ka2uKVEZm",
  "key16": "4sZMNdbJS3vMwdGYAwEQWXH6Yzxo3wMR9Vqq5zf8u32Eq3UfQLYZAHYsw6HF5cYw15YEJ8gNBZsrbgvmMjJHn1Km",
  "key17": "4hmbBxySCNzJRJqfpFmR8qjgLjNafJ8r4CnwYW7oPJZGyxT3PdumegDrJWeaEG5wDoSpqf3mwwVyKrS5UCSvRqSs",
  "key18": "63zdirK3X2WR3RhtkAVynue7KB9jvQAeTFdA3bv1r84VT1CBoTetjwq3fuXAvtjLv96zJkuyvaWihwd7MoJcFq42",
  "key19": "3qTJeBUagx9AYxTFcHeqdE8vML5JZGKHoMxVCxK4i9XzMyz16rXerNwYgdjfQWQfdWKadFmb2wiJ4jCp64BVDrjP",
  "key20": "4VJF27pJKdTxDPNmFzM5YZQBAYVVri4HfZbsLtGmg9veMuprURpExhoxv6R1FDk2gRtPs5LuRo7CU6xT3ChQxWxN",
  "key21": "248HTfXfUwxpJBV7V78TqKaXXSUpzq8ZHTX4RAZnjreixtcGBfCagafPzvsoomv1sRfrczD2izLqX9nWxdSLnMTo",
  "key22": "4mBHJw2rjdJau4zw5ASiLy6AKGiRYbraRcDmmJ2Hq82iBhL15vMvR2mDUkB2Jv7eTcVfLBS3Snmbg6BJiaZeB5vy",
  "key23": "3MWoZA28EoLcoCQMc88y4P4yGwTykMd9rrwf5pEe9xJHkCNfeSYrLPVSovsTuunpVsbW7YW47VpovmobrL8n1NGM",
  "key24": "3Hi78ZtoPypphVx9YULtPjPJHkqQKXjxHUGsqesyWZMjCyzEhvTc7MrRVcasnFmT14SLgzafiL7YHsFgbG4LTjLv",
  "key25": "3DAGo7pbSQqzrUiquH5LrUz7JkYguoFk55evM6wvsJmTXkof6PNNZEcVnQ68xVu4SMTT9wQgR9bXL4aTRTddyJoT",
  "key26": "pQYJoo6cVKrCMALAscu9SKBRCnju662UDiB5esbitJoZ96uvntiqkixjMFruV8yqKEj1f4ZDcHxiLvCp6wB7qY1",
  "key27": "18pd5aECE7sN6hJMZVBFWhVvN9jpfKv8KP32QGf2qD6SSuVcfCaE7HpotmVfufy5YRdieZfF7XAZyGfCknGromL",
  "key28": "4DnQyPb4VxXTDyEQAQicjFRBk6RVx9biKWcV7j6zYLyP75XmnC2GxigjUYheEE2tvRRG2MFKbQo6AE8x5Jkm4qUL",
  "key29": "2HnuCfQZ28hXAAEYNVoj6H46zG5wKnnToeyew3UrE2G92toKmRGtKvavZrpWCnstiMnucWH27k6wWny9nhjpZoQT",
  "key30": "32CSEtT1N2TfkERYrKJy9Fds2SPcvCLQTB4E1EMnPffwjdYYFdXzJ9qema8qC4KtxsJxBKUGZ1VVTiuhZUCvNz5",
  "key31": "5YTVMJP7CDFiUu9Qi3WXwk8eTywvYeeX64mu1Aaj2EL1xG96nsuqKnHc581WJRS6RzT1uHrpkQZy3Mza4WwKRyWZ",
  "key32": "2VyL4sLT2TxfAvZ2VCd2ZcZzyDHRNy6whYLzC3CLTFJaeZkYyTFDBBAsCEWVEFjpa5eCHqdhJ4dmb3wCfu6wi2Xn"
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
