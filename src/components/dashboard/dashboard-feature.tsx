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
    "4FxzdcmRMRvTjM4EgqAPhhgpNBbESmcfywHUDGVhXohKY25wmddF66KvGYmwFRghaeb6dzRrQrK5u1qzA5dZPJf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UhnmS2qr6KvXpFtFCcLVcfvDzVmLgWS393zWviLZgEzDMrrPqSeoJsKeWznS1cKtjRvHYAuzvKoF7CGsMEj9qMh",
  "key1": "4DStCJjRXRHERqPGo9stkJXV92CFK64bhd9vShF59hy2J6HQMmKyQoaK7aynqNYdG43WtC1MwtpUmyYrhfcHeNk3",
  "key2": "4opFV2wzHrZ9GSpyfacpqYjoM7RhP9M7urezWSVMeXKbtcQ9XSij9Q1973TAWmRLE4ea56HDrNWUUZxaku8qRarf",
  "key3": "M1gG9x2bgrgBn9VEJ586ctXTHCTKSgCyevyrEXtzevq1Uk7DFcAuXTHEZhqj3njmYG4169aTgYAx3tXtbTyVG8C",
  "key4": "3gMLPoSYn3ddyGvpoRJuED6bJ63nK1NQPL18P5SnM9URL1xtTcUKNMbnWytagozTND1hEPvXaNonP2UYqM8zeCXU",
  "key5": "5XnGo2ggtBV3nuAsxBkE2ufm8zRxgW8mtPVJwAQ7T8Rf7MQvqGjXzEZkzmkKrtXGwQUV5HNouVCEnixq31RmP3Wf",
  "key6": "4cN66HCpbnhqaKtaLe9buv8igbfEnyFs5vduP2eU9zZSq87gxZygTUrNZE72cYLnN2joNX1PZExZxQ4GCM55F5es",
  "key7": "56MGEHNVc1pf2xNB4X3dPok1iRBZ3w18NTM7uuapL148nx6tkMSWhq5RjLPBTsodGC5fnkMY8eMRQsT6QvLNWUyQ",
  "key8": "66ETQgGDpRmKTgcSizx8BKVtVnrAxoWNpt3WMaPzpZKoayABGwBhv4He4RZjJgDeYcXdvhtCZbfwhV3kfrkiXtHA",
  "key9": "4yiSxuuJzSULCPALrzz1wYUEQP7inPsmF8FiRD8P5BLmfbLDk3dVX5cJwqzay26s6X7uNLK7eDuLifKNXzPAkxDv",
  "key10": "66mXhK8MSPWTU2Trux3j5cTHKknu4VGdm5YhCPY7JJVkvBEt3TvS1PviVVEuJJerefco2gspFKFHUsQXnkijNH3E",
  "key11": "45U89vhNNEkcarkyKfiH7DzLqHJYupp16KfmgxE5G7mNLFPyR6gxVMLuZqh2h7FZJsU7G6vuwF97HFaTdFahUzAR",
  "key12": "5NN54YdEwLLUq8PUnuDAQXejVNtJYmSjyfJ1cUUa6Z8ynX4oLPsLEGRcXSgvcSyUTVXFRnUZnFRYs4cAjqv3JAwE",
  "key13": "3RBVcR1MKgH9FEQbJN4i2C8ZMDK1wZLHzJCk8V2Y8NWPK4jDSaZTowMm3PJddXiKqiUYCBXebxe2q26B9SGAmBAG",
  "key14": "3T5UmqLZZ7bchYpKNyJZ7MVQbuUvPbWvGREY2amdCVgrqxysLpbJ465KkGGiQoNkf5DFgVf6K9UBQ1svgfGa4jtD",
  "key15": "667Cs5N4wasTR9sXZQ7xJmDmsaRmU38ZmgQwQgUxi7mfxGf1QsnyWoSXRqKGib1VikyjKbmnQypMW3axNFjZRgmG",
  "key16": "5iCG64SorFAsWiRwMPoeKQbgdGRoLC9CWFGDEZSJJSz2phhkR8P4heihnzJ9kH9ZZzc5TJcP5EDsj7RUSjDhGyn2",
  "key17": "3XTcRVVgfsw97Yzsix4bX8mnG1ZnjHmzRN7qiP2JtsMkbXkhthoGEjioUybLuk4wMYN96hgLKwTQqEQY8aSdnTm2",
  "key18": "3nZbriPNdZjBHHX35XdY8JCT74npo47DQs7JWt1XN6VHKpHvHRTr8R9t2doFDDb6uaKsiXQLGLujAh23KoAuv6re",
  "key19": "4CygL5yCuswXRQ6QJPPXPTapvt32XCF6vpqwppXWD9tPHMqPpkC5HcKmKBxisbgo6cpZU7vPyx1QTPbsNdnzsW5Q",
  "key20": "2v8wo2wzVBB4nF1B4w2KVRsZXSEk29Zi8pwN2s3AJkghsbh3i911C8FdCm3ubiiU2JxQWEvHuirLnq8JM3RL4rhU",
  "key21": "4Uut5EgRrSL9VHLNsCcgEBLGNbdNbyaArnWK1KiX33nAb4y6Dvc8j6XWcjXZdQGcogzSdk6ehmDDccVhPrT9Jmrt",
  "key22": "2fCimBhqFWQfsAyGRcgHPamidYSUrx7vavCFt9jXVpGcZiaSxm1PvDCQBuDAuTMjMdsr1cHzAFTBXYs31saGWZgA",
  "key23": "525Bz92uJAQ1QfL92wTXN5tmMpj874ZCWE6VwXsh8Ee7NtPieMr4u2GEYXD511abdZVdjCzAY7T1i74s1PEqNAER",
  "key24": "9cTTcz2p31wUJYYkqWqR1zZovL25j1xDM7jKxRNJLmEvXNA16GHtaLSEXhdBKz8XYpYSVBumg3GmVwE1pKpm3Jm",
  "key25": "dZ6PC2dpB1mZw46LADFshWw9EbAbo9MjYUJzPoXCwHCa33AgdMrbtvLLqNJHxgJSsrjRFFNoxAW3RNArNM5MKbU",
  "key26": "1w534WfPoyz3Jdc9QuRZnCHy9H7cYEEFcXs9rPUfLHJyQF1F3f6TURMPV5FKzC3nfhgRBtrWFtxZEzQkJBixGmP",
  "key27": "RNZpTgFTvzHZ5xydYUrrV5JQHTVyA8aZ9H1nrsRfZ16geQiUGhRfDZQ2UoYMiqgDDA3hqsWKpmEcmRotKYayQib",
  "key28": "2P7p939RXYN9EG48SEqFwfc4qUBABCRxVZb31FavhR2Z7zXVof5VYirqkUsdnLWNWJ1JSuFcP1K9LNFYbbFBihG1",
  "key29": "2F6qpwdawaVDEyqyNcBE1ML89oSphDttuzt7tnz8L4eNrUW2L9QF7GSdqm69F8a2tfxzSYHtZuoXJt1p2VAXC2aJ",
  "key30": "2emAjeve77U9Tqe9ACS2ech4XDrWi8QKvPMM9EYAMthtFudtwP5nzGgU4jUoJoqGD61anujYQbCz5RBSkeE27yTF",
  "key31": "5kS8L4ToxRA1dVGpcr81vmqBgqaVQUFbkPua7myqUo4KymornDLRDSVHLUWaJFSmjch8jw7JQP6o4BqCuV79hrfd",
  "key32": "5CjGgupZbSfxHADWbuyfzWXvHboqagW6QHFC7qjSEVtJPoDHYrBRGYtLbQB6Y5pDbxhKihy6PpzAEMkLrF4Xn6f7",
  "key33": "4NwiJET5z5tawrkGfjZLjoK96FG4bmzdsAQP7wQizzkRFmVqU6onyC7pvBrg62Wjxq8uRoiNxyeKs6rtDeeeupSL",
  "key34": "3nTzXwUiPzXUJAMUtASwQL6mtkMgspvXi7ALHib3kSyBQLJLSVgu1MjzC3v5EZn6nsqxjyVj8izumAipw9vHy2NX",
  "key35": "xynYyS4zbcKwqSRE66omXuZFeRBRmCnaBahUa3v7BbPinAi17APMjvK7mSwkWdzSgVfML2cRBx3NmxizPNGUePc",
  "key36": "4sbs4woLiuNa1h9CdW2px1oh6bkDog36iyXbdt5rqTSSvHFp6ReraRrJt1oe2Y1p1WqvowyP4oTxzgfopjYsgVmh",
  "key37": "C57oP28pKJnskWmPpeKZ67jFyznrMo7DVZ28eeu4Q6jfjCw6Z97xHShrCGLNcYT1pYMMsK6xJkLoB5uC7ZnnADv"
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
