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
    "5aUERmsvKVEiDmgTVwtDKDZyMLnC2cGnhL7KBj2KNfEKfV4nUoG1DWTu9XBkNJobea1PW3z5hWRSRWcEHFLRKScn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HpNxTcnpDLgX3NDjE2NRsYnepWJArTeLD7ptiAnWVV9JSh5xc7GCWDh1ktzdsnoUaAT7feEGZyjnJhs1ywwLBCU",
  "key1": "3MDA7UtGkZaJPV2qUJCASb8iLKJFV1Yh1YYBzTmPtUoHcXJecKC5f9yL2NHxKYbG4w9YaZRVm75EjWmeYLzAHdkp",
  "key2": "5xE9L59rQgPPXsL9wKD32SANM987814WFjPjGrPJJRYnW1omwPGLzt6axarMLxo5sRkHpRcmYiB6PD9sHcg8HFge",
  "key3": "4KVSTddDxQpxkQ35jRwLhzGJEf7sePewcAv3rK2PLhft8GfVf1gDoSqFeNQwbeRRHFcN1k8XspWvaWBKcUnd7WJd",
  "key4": "smdNEwh4U8E2c3ynEgbHJWJMS4XuWZyP5yWiC6gVqCNdbDsGjTeSP5bMV4LRUQJULR5DGwJDV7YkrVEDjJAZfuF",
  "key5": "xzYxnMXESJZ2VSevNmcDR8kqCNhBhAdxhNqz2U4Z2tHMcBqhHQmMktELDYjz1tu4wxoMWuhpYnnimCJfBftQhyR",
  "key6": "2EqkVKjz5LNXn6mXQqWMq9Wdmmdx8jVqGfuuDgZvJhPvUKN9wc4QHEzDwpvGgAR7zGfzBXM4ugaPPuatqxncypKK",
  "key7": "4upPs35PQy7YBPN92dAghmQxEMHC8NMC4t8VGfBmQeSFFsPucYqQG6AdzyzwDYSWPWB6vQhJzWYpBJqsciqNu73n",
  "key8": "5WuXQNyggpESEs6E5oexe1F1ZfwdUhJRyzT5NUenQhuxWKf4hLYi5ckqTKj7VQNUTbgk13S5kYapzbwu29oy7T9e",
  "key9": "aqgod7rpHaPsWtJdWFowbkxZtJAThWb1hysYBWmeRvkgJn4SVaG1TfsEGN5gzbSMAxsqtCeJ4V81zWCugmxT8mz",
  "key10": "5PhEAguLCXX4WFb5py9jNy4UAprnuD29GbwqnPDzR8PFvtCNBPLUQuP2Xr44Vp57fzKz6xtwdkt7xVyuRkKHLyzD",
  "key11": "3NoPNC9PQHHQbYB1pMjGQTdh7vDQg4ow4dWqmuzhaEM1AzLDmbsyRjGkLjGECUn3sxV3j9HZjWNea771x93EF9Co",
  "key12": "4hjrKzjfg8FEjQgPNFMMpmUt6aQ5TGHeJdanbxf6sZHGXcjYiQxmW5yVmnBLr1pC4bdetyMVHV5A9M22MMFweShp",
  "key13": "2buUmB7L9bfTA2BUvTgMxdG6Uq3bpyCdq4kjHfXjPUSdaWXLMaUdwF2UV9LgYmFC6EjbCBnDFv7kRxoVQsS4F8YG",
  "key14": "2wGjvzAA31RG2LU9mEqfsqLDdPdtmAuZbft49GkNbB2ebsa4vbPbgEXMyWwk2gbCk1JpwhgzY9QL8cEr5FbjdDTG",
  "key15": "4sNyAfA2Ysw49EXHT5x3kGw2kmnDjKhXuXfcQAxLQRQkWd5i1rYfofFWzYDRfwAk4weaNCJCNVqHXo3ctTgKURb9",
  "key16": "5vT1VHAYU8KCkuGER2uPZLpovWBMPguVCdbHS6inxru5i5SFySABPP1PazCopHwqnidVZYLVRoMdqdjXxQcQjBK6",
  "key17": "pv4L85Sa7EtFDpb1fgCzTwKidTf8LrLdF9FAJEMsGvMVPVuC8K4e6jetxnAmtQ9tUkqwfG433LqZ7zdfQr3Qpmn",
  "key18": "ixukjxwgzVEvXceGiRVmRFHh64eKd5RbFtBqBxuN2CBmAkuAoPp9BYsBbjeERWhuPiaebhZwGXxsVb9iVDfy9SH",
  "key19": "4rt9dboxNkisbngYcE7tDRbwn28pUGpotv5CUdB6fWYWd7bSkzH3XVToYU1bd3WX2wvHBFSR227PY6DfzXcnKjUR",
  "key20": "4NFquYDVyBdUyv3QEFnBeWUpHqHZX7K1cQbXoFabDTwK6UrSE8ZjhyeFmmwDhF95qxBTRLpzqc5Pu5giWDouzaq8",
  "key21": "3TLVHgGPRmp7JaACsdNvnhGtJ9t4g4wc7YMwZqZL2QF9ztidhuqgpegAnBmrdKiRWyAxJXRHGNBxCeonC5bRkbRq",
  "key22": "3d4dJDNxuBbqNDQqMyC8dqfbnKykqWjwaiKHWU35YmfU4oFWbFLqH5R7K3F3ndLwMa6VHgmMz5LKWPNLGhze7jD2",
  "key23": "5qZsBWPtuw5bXpayZqoXxVH5aNVr42Q19cmbQkevBDzfnrTVShXpRLABvpipneQ3uRxkqvgNx2U7VnarQbZCFYeN",
  "key24": "3ZX1HJ9YiEyd6pZBHCUp13rvNT6JJejyLg6t7zHM3qQfkqGuSsK2m5pMYsFKjEYyEhQKVVBRAWtjWqutY65gVb5C",
  "key25": "4WWNxAR3KGLrVHeZqCqNeKeekZpKJP7se6e2DLz446yoaF3GWY1GnHTQcpimtgF9yAHxgwLKJenQcUvbdDvoDbKa",
  "key26": "3UNnhq5HhbZaChhQyoks7miVASf8MrMdXcQUe8ivdbayR5Rk1FMQxxAn75KXgrDp7qch2498G2yTj9VqVbhKHRwH",
  "key27": "5dm38ZDrEEgCnQkfB1N95TGS5rqVqdUbzDAU8wzzUrDhp19YMSW1bkkcTPd4QgTe8xbk9HvXFXj1sTPDPJQNbpk",
  "key28": "3HrxtQLjfL5aeTgpzS1F7RmqEjrCYaRQ85DtSnrbcVr4tLrYsRYXzRP8b7UwVrBbm1jqJoWq56HiCZs8WyzYrQWt",
  "key29": "iSnxrHgwEtmJfuaUgRY3MFm9mJu8WCz38q4maeAN7vmQrGqXuRyRmt9nKhLQkjcF5V11ut1ZLxFp6uv5HYZqgng",
  "key30": "3Yr9ivGamhZG52FvXyup2DFanMjf1pJCCiRSnN7zDnMYQ17q3JZnD9W7fQfQ2Nw8H5MsMyVSur2LeFpvdF2bAZEM",
  "key31": "44GDu66PQ5gLqNtWY5qHjXcpoKkqCd25TEDKomMzR5SY8jSFmDfzGBiK5ZX3mRcdH5QxYTUk5MgehFKBWMiKR8E8",
  "key32": "2HvJS6dKjBgP9MsvwfAemPnRuxPgFkqZsf7oYYtgBdc2uxpxBCo6DNHq7bbCd3VrMSo9ciwApr5kMZmjisDmeEey",
  "key33": "8HRKSmwbh72hc1cdFFbymuTCVzhP3rX6VPpwxDexy2ej5z4k2sGUdhdFpQzSvqmowBeReJzwwmBMM1a1wj1KxjG",
  "key34": "2t42rrYsuJ3UkyhANoYFyRmpsRP16yAvzYqJinWDpm1B1VBQcjkfPGVZCc2T9yfBPepCP9qvDnrzjFnsLn3vTJuC"
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
