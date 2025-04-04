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
    "24MmTiWesSXNXurN9xmAbsWefetoAyaUJ4iZEVhcc9PVgSpaL3qnoj9aTXmXy1H6cKqUcAnue8MMQfAA26y3dX6n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BeVwVaMB92vV4qDMyb36KhEDmZVHe6nrBbGVcFbhw7ToxvrFKrJnLNY7ciyETRYs6GCNJrp27BAg5YmasALrP9W",
  "key1": "4NaAmpNNWCeubn3JErp2YbQ4UbV2jC9195D9segg1mnFs1rpg6D2teFsZ5y57ac2TAquM955cWGDjRq97YiXoq5U",
  "key2": "262gynHW3fbSLJRGXpQVkdyspXc2TLqUHuf5A73QGy1FUsNeuDXBnt8fPovA4XTCEBYGRMPcWyThkjAXbJgYGQwA",
  "key3": "4cJinKSiajufTsKBe6HGCW97F6p19hFPeXPU9TAwnHgcqT5DGJ1qpxvzRRPg3zznNpxpkT4rEfBsD1tJu9VrEoR1",
  "key4": "k3YNEVdCSavCpwGioUfXqcBE2FrG7m8SnMRccBSpRjqReerpkHU8iZg6xxw9rjspqgUBi74CotoTVuXeUdQaYip",
  "key5": "3T1XcmkENNKVSAAcn7WMViaV5aSCUyVB395oGrPNh99BMdANWS1f6owFdpRabuQVb1gosP2HJ8CFPHUhcskbWF6x",
  "key6": "25NuvGb8ppD4URFNyM8nxBVzkNHRAky2qGp7BScgc5TjT6EKKULGtC5m7de2YZgAaA5oJUuJCnGWVGtHKYHWZT5v",
  "key7": "Hp7AGDgq1Sy7zTfPRVv88Rw5JBxQNrfUo4yH2VzFi5Ck8y5a8fa8AQHwAvvAcQhcdHJsijpW7Y5jLLRp91ic5oj",
  "key8": "2um1kbPFet5PrAVjZbH5DzHaSRQ8ynuiKwkpK6LQBwgWcBkvmDhcmpYuyCh92kvoqHcMtona3jvVUeksnYeBLZCe",
  "key9": "5kLbUAuPupRvmqqsGBGnaibqnnZBqDuzXf4onK8pNemQd5sT81NRz7pFcENCCadBVMcNZjPZLqqfP57QxT6RXDxX",
  "key10": "4jHQPtcEfTfeawhzL6MfGeyLQb2xH4Lk5K1KjDaM41Prg3hCPVTKmRh6A2pTTfT7pfXodb9kXvuvRs9NwiEey2qu",
  "key11": "2BxFMxsisNYUuu5vSMkx7Qy4aZhcJvuvoFTparhWst3LeYGybea2DupUYBA1g6DP1NTzdJBLXHs5FmrwwHzHGx5M",
  "key12": "2jjKrNqaa4mfNbQzUtLEDgehfY8hYCV6PhPiTU5uXJGJ9yoieAmEXArV6cYfrxEdyAKQFuBAfxo6zerPd133eFu",
  "key13": "257yhKtLVrFui2TSM3rTPiR96HXDk7TPstpsWy78rW6isFAhNDSpYoksvRbGwyVPgoxQLHcTsWhCuAJKvt3kub4F",
  "key14": "2R7S6stpiNfGBYBRJ8ZX7GvBTKqPu4ir6SvxhB6MfnftP2Ti6Xncur4z3XpNi8rSAYCXDuvZapyXMWhnVJNjscgv",
  "key15": "2Ygu6iXVyyCGoYemWDkyohompRrs9CBL4GBjo1BWuRsx4ZFyauwtBxpPiCVCbmcEvS84agfakEZvWdTTAnCGt1Uj",
  "key16": "2ChunXkYdZLdgJAu5dyonMz8BaYsUPH9KHwVNuL18XqeEM9Kq65TnJSz5xnC1QEWWvriM364QFxcrwbucU88ewN3",
  "key17": "4YmLxJ4CQYTQDQq9N48QyDtnRCf6Lwaiib9yZDwvTWQtuHeZqi6Re8zUDuztdpJ78ToY7Y7XLsvGQHV1YBuiW9E9",
  "key18": "nFRw8yGWXNqqWa6CaGg7UXeXXLfThji7Fw7KgZ2QmS1Cgw7EGnVq3gF9k1QTDg8iu7My3kaJwJSoEDcCZ92WLd6",
  "key19": "bHScMkvMjULT8wQTBeYeMFsphYSExShZJDnSR7EQDoh4SRQMD4JoCqxGCYjTd44mtLpcxkvT2oAFNmYpdYD1KhP",
  "key20": "4HoytuquLwCXxCSgB8pYBN4rkn9mgt4siz3sj6DZKF6YKkn12a3aFkyMZMs5rWTSVvHQ4yqfuVLaHL1zb2bgSnWz",
  "key21": "3KZzBpGz2yW6BaX5eSRutdVaYkRrKpinFykLCELdCZhwUnwEoepuWX8jfppWoUuGJLeGeaYuzSQXHYyaDjx5MJjP",
  "key22": "4dVco7xywFDAK3Ypm6Wfqhh1TGfqVpy1XHmq9fXe84ZX3asWDdwgPnpkuGY9ULwFEU2Vj7nJ8r1wmy7DB75rNtLZ",
  "key23": "eoAKjdKRxiWuq9tHhSJv1ogJQ3Ub57jj1ePbDEo9bYFfeAzpL8rPvMLr5BsySNU53fbGDfo5JByYYjmdCRQFCRL",
  "key24": "54b1997ZMiUyu1Y1j4cDQxhkLHGnkvfLxeKG7PNV5S4zHroMmPmAUqJMyFYwbFPGc2nGNXTZDu489qGguVSS1579",
  "key25": "5tmG8UYTvEJ2hoULic1h5ZAX9uTriqxnqHjhWimd2Hf3svVbb5r3PdkAPjQyYVjB3m6DPGP2kboc4QSr8tD1gJk8",
  "key26": "35MB1WgPjaXS72ZPUxZJ5xcTS9jLjQooUdCFYCiXqP88QzrKXJZD71oRcSWnCsebvBo3KKA46gAPv5FRBk5HkuJe",
  "key27": "32yusJs9TuXdCsePu9XWrX3q9BA8D6yefvp8J2W18WSpFJ3zQ56sY8ac6njUUUZbgcuV747vmvXuPFt4cRHxSERh",
  "key28": "3ykcLgwFU8NAPuC3AWNnuGj86JhFDHh8HerAivduGZUdea99jSy9wzHZNoHQtYvMPpffAWLFYTbsm9amfQfZbWxb",
  "key29": "4XjXVjoPE3omkpj68d9b1N4Jf94xW5qhMJAL2soHEiPA41CongKbwjYwJyZkTJCUcvwSGyYESNFJh8PyGrfN1oBw"
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
