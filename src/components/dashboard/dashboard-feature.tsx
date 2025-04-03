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
    "2kZZAy7vVGtKBCeSVZvxDABNb9sLioLedyAZJ93vLCYqjhq6jtMWeo1nNuqtVMXffRb4MhxBwqn6N7fvLLbo5bD4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4686wEqNRQyV5xY9fjw6sbW524gfv8jrnHqVsSeiWvuiturrXxxEwQzU5tp9rJn57wCkEhjooSQJ4BLhmJWrutHs",
  "key1": "4kKtKXHagtTm1Tbhz4fa1cfNtQnsHmgtEsmqyyH8xyeomHQzfLpwobfSEE9XRPppDbjbezdiPAAzX1v3yivFuc3C",
  "key2": "5ZXCQwHX9rqb9riDG7hTdNXjDZq7QUKpfBwkgGvC7ray6wgvVPe1GNuM1PVdZstARJQc2diDWDdHPicVfvKZWx5K",
  "key3": "26Rzqju7G6EJjNpMPthAJ9hhgHqvxWbCFkJtWbBDFZgq8jZ5C4d8ZdPCpxH7nWX3CWSkM1FgXLWc7e1yL2T7ZYoa",
  "key4": "3XiEZNdAJDM8LgKydS81NBeX8fL1EukhjPr9Bi3m2AD4wNAFGDba8nLTxcWdWT2tH1mVgLguJMUbchia5kVLyYyg",
  "key5": "G35rqqA8iXNNEN5WVa9daW1ZGqHEyMcou3YUHUgxrTSbkWATWhhykAuWjMnEiCyXYw7b6FQA7E21EMwZiizfLCY",
  "key6": "XdzqgUNQNo4Xksma4RF5BVLahKbiBfhnueFzbaTqH3BzQzVSexZdTUH4cmF7zB1YB3ogSjDzZ9e6oodW8omQBgk",
  "key7": "24KTki2MEdVx7EULPL4n6iQgExv9qcFmXhnRcSkMJsWb3ikFSbjJtx9yRxZ5JE7SXUZmwsiRFyZMKuQReUZeQGiP",
  "key8": "2PFHgq8aZ3A2Yrrjs9WJjNQMBFxvvYi46UvBf8xWoJnRMbDNii54GNVmxAubAsdQJwWpHEHatKj5fW7aggjdJN7v",
  "key9": "48s5gucYBSxwwFDVwRUPTDd6CHdTS4JPyyRwMbG9sY8Jh23Cq5iDFnjnPpSAd5SVfV3qWQAWWL8RXpfFXtJdDQd9",
  "key10": "4YszmEtYr8XjJZaNi2QXHoymgNi8KLePTazK3QK88z6ftzix6UCvkdboZCMGk1va4M7v229hSrHHU2SsaDy9gkFj",
  "key11": "32aa4VKzFZaywiob36zujCCBxRk4SkoXfmuG8h5CpnknJXPpbMVutoeTS9b1dnwY1zRfonJXg13nrds7eH8uyNEJ",
  "key12": "3TXzEQ6X7ZMvQerD26QEpPiJ9zNADCPydELynhzVT26fMnabG1imMobKp1va1r3uuyAWmJek985udtkEUvkcKDps",
  "key13": "z8YCbRxWLs8h8T1DbCiLyufoxTXniVD767RfFAW6R9jT9Az26TDmNM7A3ySmfFtcccmmrWxXqcab27meK786q6F",
  "key14": "2tswLPHzooGJJvTA47TShCb4QnwgKBqAiTvSGN4LJ5mFVpVRRSrXePVmtjnX5Ac9JwkLqferya3XQBvSctbaEYcU",
  "key15": "2ZPCYcvv755bDNwN3mCVZ1gyKrXmCgLHH9ERfYzzdA3HWUvehB5fJ2kUYgPPPeH5KNV98jmbRmbZwZmQm5yJC3ZE",
  "key16": "62k9Vs7c5QZTjuuygdGqSMuPCiLqj4reEi2L2HjheiXDQYJuAkepTYgtFeXeeCDWgZtCvEDeV4y5FTePkKgRgK5W",
  "key17": "5AMMbd7s7mgniC49CKLohPLBtELgmXGjDQQQniu33qbXXBEGejwASu5wNg3m9wsSp4Df5AMj2shxn34KumYtPVn7",
  "key18": "2AsnMkpcKZ1oYLUaPFG6BtSB9QMX7QseNgwNuRoAYBfsZWYo6uuRFZEfrnvtM7r52uFEK4U8H9c6p1u5ASwqoLPu",
  "key19": "4hUNpEbegvFsasysr2snNGJhAx13vGPhsCeGuDAndTvCu8dms9SEaT8zvdjKtsbNUXvFD2YchrMyg4v2Y7hwLe1s",
  "key20": "2SEyo87Mu7vbDrf1F4ZfSs8eu1bRVAbBz2KhkcjhRpGjc7EHKH9LamAUw92UuieGowD6tHWuYtYkce1dJALxAivL",
  "key21": "2btoH2wDKiTe3KprhGTMW9GRxJ6YKvTSbCMjVeKpYXjoXiDFYtvf7f5LNjqPZ7VvbUSXzbasTkF5bxByheNL7AC",
  "key22": "54Q23DDYCH19fsEXkcouhvEmmx7UvM1Uzj71GguWYUmaUBn7o8YCnsqritq8y3vbNixEUSrF7RJyyCFWoWX5hDqC",
  "key23": "2CXE8MZHrfiVNAha18xZayNTw6yGBNLvGkfeYZ3fkz2aCJLw9B9ahKTZg75o3dqKGVx6mqM8n9KMd7C24Q9h4JaA",
  "key24": "3uUqRpvsNZ21sKiDHLAzUY2i6ksPGY33JskM4RzY6WykjGZhg4P8dqznvnQf5UFYJdNNcYoZaQGmb5KMUbYHn7xk",
  "key25": "SzrvAK73eXYfdxQA9ZFe8PdZ4AxyiqStfCNNpqrVsj9Uex1mCVNEGuxbfWqPiGPbBceJjHforMzmXwaDH3SVDaX",
  "key26": "3Aj92LUHk3TiYgS9QuRWDTs5R8Hdn7Pt1JYR4TMR1L8471qEYJFDaX3cprBUL4nRVT6NN7GSHsnmf26EPPART4nd",
  "key27": "2k5ee8YE7N5HbD3BkpcmK6VsBkBXc58Bngceg1cvU54nvztbEijHWqkdzAbdGt6EddiRM3n4QxU1V3SoSRmQx7Q7",
  "key28": "4ZoZHzGyNGAn68SovP12m4nuYe4gpe519jTSzhFK5StDyCor97F4UUC1Kvfnc1ohtkAgMArCy5k9dDHdVbxs4xRz",
  "key29": "4ALhpVdKBPoTbmgPvcWFUj39U86UQdvgmpXSxJanCZyiVLmhiQT6rjDaBRkoXTmfLHvxgfe7bT8UyGryXkLx9Jxz",
  "key30": "5XuDKmgJY4a3A1iUTsDsyhwyzfGk4kbBaRQW2tNsuLnUaeEhq3FGju9CWk6UJ7KTj5FSBKjBY1PwQ6aqnaBeS2Yk",
  "key31": "uK7X4FiJqiBpnRTJExLyVJqguhfez3aXLVDBtNoQZ85LygEQx71ZviNj4qCVAoki9vBAGFLjLhUacEMFxwfwkBa",
  "key32": "4VNqELrCjFVFjt9jcWzRG9UKCkYgm1K6TvK9FwS2MtLSXZeWUpWGYgWVFUzS354kNYJ3tJLCp33dP8GrqtUGDs8Z"
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
