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
    "3tG4dCuEY3EFGZSDSHLyicN3PCerEJK6ZhYSpzT7ep6jPfMxP3iT7RmuiAHQmT7pcoan6Bjucmmm7ceuv7CYovBY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NeNwDWEUid4uYCQGn8UDXr6BWpAa7fLYqPkR77gwxaTGrACtSFUXHpA7sbJ6kf1vpB7SDnjPoJUzUnybYdTzHE4",
  "key1": "2Zz6y5tYqdBCXpDwQZrxpEKhNGt7wsiPfvCkEGyTP7qKhY5DSCxu9A97nwPRG2fHr6aeGpxkKj4Z2dVCpeTst1Lq",
  "key2": "5zHNxMm4oW4igCchVhs6xEwsjkPWpoDfxS2mRrRNqNvrEd1bKCYAAGptoK5KpdR9CvvrfZLQFdA1BQQospe8YFLh",
  "key3": "5WEabdsYyNUq9bNLtWYZW5mNmkgi7GvgSwns7BnWqrvttPLCV9LXxWgxiEKg7CjzBknUPzV6jmPjJTngk2BoCHRu",
  "key4": "3G2X5JdcvtKTAACrZoCDGnUkdhTGHAf1bWv3SxjAXn3rGxBjh3HKfP7ejL3oEvR8Ld8nssUdoJ6vMgkbfj2VfoBV",
  "key5": "2erVdvSCvkUdomd278bh6vTRJkAhY4DudvYrVuhrBTcciUfHb6P1T8QkU8PQUnitizg6dVf1SSgiYG85zQLwWthU",
  "key6": "3oDdZayPGNFopENwUZMRoBKu4foYLkBRmqHKWc2KD7Bvt8oNNQyVSXoP4gFAVPoHiscsLpaPFLTHMZi84wRjbMem",
  "key7": "5b2ZkCsXnSo3WpYLzkfEvrhy3te5gK94hXujj3be5fC88R6pD9srwrL3GL3551PjH7xZ5A3T1t5xjPQEEWAH4qsQ",
  "key8": "2REMs16ussMC7hZkFPNBRXmPd9UHk84WanXp3RmQzkDfGHi6VeNtTatcvhkFsh1DDbdrTmjbSs1jRPAGDTKtFLim",
  "key9": "3ybDERCs8EmeGCCK7pNvkc4VK4ZWKkRidPrZncGCFhHLrKkRoCMLUJf5676EWChkGKFdNyoJj2UN38ykxeQRkVJE",
  "key10": "NPaBZued2SzeUYzsGerh5Nm7VttF8DqQcFphwHXKYuekjyFxp8mccwW2MDB1cJARPvMjh4n9DPehcR2zRUrnkHk",
  "key11": "5trhNjoWdWmEx1YAGDLefEspCXYTnaMHmkWzWt7GFoqrhnJcaBnJTAtLwTLyXnU6wzFGGrcVyyXQE3iQA4cqfo9L",
  "key12": "3u6cDEzPBgYxwrG8LJiwMXpU9DvTZ6Hph81xK6tBx8YfvokX3ayKRNZYBdYCwzyAnhTnhAeiVvmHPEQptadFp3Kc",
  "key13": "2CEdGV883PWMV4MBZfzjkKeMx2xbKEfoHmzmL1i3FZduY7KBnKo6a2pgFdxTG739rs5Zvdbj1sqDW1MdN7xEgXy7",
  "key14": "3kZJZ1q3rXT8LRJHuWMAcSrArv8aZxDxVb22896DG3hjYXLtLTY9xNUZtLJaFKh5wXFsatgs62Ab5sQupoRe3R6W",
  "key15": "2mN3Gx2vBsxRDWqH1zt3dTbz95gZfrei3d7c8jFcdRi638nLNC9xkUZCdGSbEpry72Ac2Tf2Gxrf9WeMRVnzfLUX",
  "key16": "3urPGh7RxnAuUgpHY1oGUqVB3xg8woXnXusNZx7v4ntkhX3KWfkWJxcwYNF8wu6eZA61t4B6crupZtFf8hizSPk",
  "key17": "hDvuWf2JvDQ7Y2DRbkKcMAMBBczx9PRo9xjoaeLbY9TGnm7XCvLGbb29opDwhffg9RGcMtCfWNubv5AwPGseBJd",
  "key18": "56yJYDb1N8CoYQ3tnXNyc9BKJvVs7abNxPNiDbDNvijcPeiHRPQdwXSpzWyhRZMM1aytzhxE5Fju7oERsabaBtAx",
  "key19": "4hHSma2k2yMSoSKe9DqMcUfsZ6GGPZWeNB283H7ithAHbEmQ3vUiiGGCd8qz67JXyNnqX7Xv4konb5td9S1AzYiF",
  "key20": "4AzYWuRHfafQEEhRH7ZzrdLzqwp6J8N9J7BgW3yJZs8fVztQjr5Ys2fmL3SqMzPSvMvmGF7JNJpVXWQpTBqMQduq",
  "key21": "66XMEnsXHVG4KnEkXb6eLigSoLkpHJCBcEgqsZmsAZDeAsjkmQW2Q8ydyLq9KakDzFniSzukqGN7pkVLU651Ehmg",
  "key22": "2dEcbdKDEckMtcCyoXy38LW91vpkDj7exL7KCdBqb3odPfBTYbGPLxwby9R3Jtz2iriFLFyF364gYWnHd1RP6WCQ",
  "key23": "5xF3UN7B8nnpuvSc5oXGHw4EtJHyUfC5aPKzzB3uKL19escH7mAb8oC1ZYnKwkpjmJu5GBWNHsPHBzhy5W4EyxHy",
  "key24": "4shu3CXGtxuEPLB61a393HRRPRFhdFrCLgx22zU3zTyGneENsa5jn7TLiM1wsS3g8ki9uY3WQX1QiU1Q8wn7bYQN",
  "key25": "2yR6GHzN1kQfWT6cLg9wahhBERZmwoGDnRf6CwggH126WzHv7iRN7RV2oUYv7qz7cvToNHNGa48VF6yXVfRh4JeX",
  "key26": "4n1eyFyvKKo4MuANDrfai2wPn6YNPvXYKj4x6YQtFpw4Xs7qT4x19XRd3sR918fea13zvP89ndwWPK7jPbe9mGeG",
  "key27": "3riHh4FcpYQoHsttgx8CDtQJTe4aJXBJJchQ3LEV5oxDWz6xrqTyc3S6EL16CfpqWXXaYqx37kcyTrPk27EW9WTC",
  "key28": "2VBxh48R5gB89LF2PEndquuspgx9f3nJKBbGEiaVsiDrE1sj5ZcnocCLT8r8EW63AsGBQLvgbbScVuKxuUqCBJKc",
  "key29": "4jyszvwH2fbZi5tpuR8U1i18TY9ge9bz1uLJorkofv7ENPt47XZNFDcJ5txf3o3LxADdT1oL1X2ZitY9nM4uRSri",
  "key30": "4zTgFpQLMWJUiZCNRAZvenof1vid1h3KGHU6FTfhLvGVSBw1uJRLZrVaC4PMd48MKyQHLT9RwAk7ZyurddbH2SiF",
  "key31": "XcqQkjDohq75zCKp5zPyLj8z3hVpfJ7jhVTrfiBibEZHRZhYT7Z5EwuqtDrwz4SfXKSQHMigsfq2axmGn7P6zLv",
  "key32": "3cubu86Zj5wyfYyGxZB2vusfqhFDa2qNauU8jP5ACmmmBcw3NA8p3QQrU6WJMme5SUjRBYtAYTk6gXFFnNUmryWf"
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
