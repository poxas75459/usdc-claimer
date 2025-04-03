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
    "5AETyb38HpEsy55T6oCUCHVumMg24FNAkrQTcjiiJ8mkjzPTSmgV1998FFE5MRqs1rHddtEpScNTveFBdwwUvZ2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SGUNUwekodbayG6N7Unj1emYpxSgaFDJZfYdvjMP1SUn7DCpLm1dFFfbdsQm3vUhKp4dCnvnGAmEPMzrdSAAJdr",
  "key1": "2gRq5Hy7cnVTDsPFKc4ygBcQULZg3nAhxVNeXHxbEULmtb4L2E3jEJWy2pxAt7RSAV4NYxSRx5QMyecC8GdpGq6b",
  "key2": "3Nm7KhTrmHTV4zy417pEzyghVCrXAqrmsiyQd1LwRG2bfVwWkQytWPyJLddcfidpbJHWTUAyxEf2NG9ygji6DsoL",
  "key3": "2BB9dpiPr1U3zF9smQKdpiVNYcHjKJykv3hTm2S2EGq6TDhDdm557eJtFKd3xBrv8haEKMKkubgcEiyn8XUD8XYy",
  "key4": "ZzE7boLYqJLyNDa299Fc74jrpi1wvag4q2pFvBLrqrVuV25FvjGuNVAn5yYp5B4VAEDnkiHyQSUjLZmddzZwPHN",
  "key5": "5Pgq7XyfJTuQC87xsn63in7rwqZw5bRxH7Rcmxzua3HSBVpPwcjC8nPM1VD1cTnwRJh6K4TJYDenzE4pFrSacZ1Z",
  "key6": "W67HYzDvJLzZiYTvdFUTVVPYcEC81sFkEd3CRySookF8HsuePWM7cp8W8b8mioYyyHtZsELt6tSMWSTzV96z5Fy",
  "key7": "4n4aqFEXmhimH4CBJku6e4APQWBfZQNZkqehodtixZv3MroJndisNjo7Uq33VXUcNv1ztXQn1WoRY4LgmrzGnjtd",
  "key8": "5PmY2CW4392iZbYDDrRQYRx4Y3miPSymdNEdMitPhDZLXmJGWUB7PXYzoVMxwE7yPSbN48onnxxaPfUpkMmqZVpB",
  "key9": "3dLHk3Lqpi1y91JcwLWikjxn7iWzaGsHQDDebxfwDDtx9XydWoHRmEU3fKrX9uvv1vfWEhg3w2Qp8cjEC9VtR9nX",
  "key10": "4YSsq6xvXDZjinSgMv5EpnnSzWLD12AhZixhNFMps7TtPi2FthgCQNqDzJ9BNBXbbu21aAaBmctad9hwtQgqTnSE",
  "key11": "2r8KUyAs2khFh9HgPaHQx2C7VV1XHrMaGugY8WhWfuTrwy92AXx3ruGFnMD8jXtzKXQqphD2cvJ6JTahJ7cjkLWr",
  "key12": "5eQxUbReb7vcDtD8U4BAosRnDgejGjSEgyHS9yFTtxebuqLjQZqUebsp7UvarTdXjC6QFeLpQd97QnHCiWQMosMw",
  "key13": "2fXsCJx7w7DzM1ymPAKERvKNk4jSh3TMzsH1BEdG7RL8ftUujcEPdnB48Q89ANLtPhJt7pznvuMrvbCHBjujf2qu",
  "key14": "25C67tZiic1xi7e6wW5WHEwLiek68T6i3W8HFBVczZfyKNY3zcJxX1pVdoHSKQBbof4hxGK85egKQvfzzdHSfPpJ",
  "key15": "3GrGZHJKP4oyUk8J1anGirxNwUYUoFhpvALW5xw1eRzXGsP4TLuqmSLbRzwtrFKjsJRJvtfQMtXiatciww8oxCNi",
  "key16": "2s41mZy65ZsggmZq3ZgfWaBT1nXpuAhJ2QdRmh8UAZ27e2c6xkTK57SCYDZbfzGz6WXEgdrPTXrhQyg6sjkqnitv",
  "key17": "2eGKcv67cDuS5DBhiLCJXSfCik6yUGMLz5emmWp9yGqAr691Kh36MV3J1DgQLEeK6cYHE2Fifp7aqbL7HnwDYb7X",
  "key18": "5UQnAtdscBBEeo9PtMCCJxQ1AS6U5FoQiUi862rDEZzfxXQ7fyLKYXjDu2kznegDVTjHc6QRyCSmdJVCuvtfx2Wa",
  "key19": "5iwkd1kKvEctEp1THW5TbWacaytN4vKqciJ6PZmQFLmtET3MhJqHG17WZrnQzVQHdP3B42Z6UCAJEFhybnoWP867",
  "key20": "5powssDhkaNuTTAo3rEnBZ1enHdGy29biRQ9A9dCBcruH7qAmEUoFBRi1HSJ8AZXeJZ3vmUduE3hfvQazFqwCGAb",
  "key21": "2LCZUZCCMCHzvRQKkYi1Na8kam9S6Bzq1P6M4QkXL5yTsKJ1Mb8aCWitJx5GsX4PCteP6sJDeLmYw3bQLY5FhLs9",
  "key22": "44yX1FgvKN2BgUiez3xLnaUr7QtRpk6mdt4tZAHmuoyYK4LJRKnvE8fbaWTuaZBsw5kKNXPJaEWE6gxVp1gkfoKg",
  "key23": "5Bf4BwKiUZQs9EUpaBa3jAFZH6PtZE6Qs7MeKk2fZzw5X9b16pTU3bA7axg39t31qUGTS5Y6xDQrHZugvj9XiByg",
  "key24": "5PvD48RCZ9aX7yR5FnJDjHigZ7zauuya3zmB5BWRf8PRq1nsijFzTw53rzE9CuwATnqhP927ZWDpDDxbJ4bdvf2P",
  "key25": "2yFU4ryNn6jRJygdmGgxG4miGnTBeugw8grP5rUUW9PAPtpZZbDAYJZxNC8o7t4vBrtun6kCu2qg5okHvoyYa5kj",
  "key26": "36JBuDpn1obQXB9p7xiH7pqnh8KdWGWU2DQTKsMc1i5mjKk4cVsRvLDsqnh4hp55bjYgY1JdiuaX4TJRP4KWxUBt",
  "key27": "4zt8XpGt6Y4PZwkyScQa8as14foxm6AWkCG8CybkG9fap4ehUkYWFwE2ZhRHgSi6KAZxdf64dkfx3eX9uodwQrXm",
  "key28": "3kr24VpYgMDt4VBgsoFsqWYfNTWMvamsBSJeshY1pNgAz4LmdFPqisegJqbMkoKJXzSeN5vQ46UaQpbbmiBJ3d4g",
  "key29": "3cJRJ6CkL68DvJSox3YrgJWwhe8z4KQR6f9FiixD1EDqKM9cyKwo1DB1LKz6ebc9SzGUXpf6W1oxmWdqrQyQ3oJZ",
  "key30": "4bkWrdFsg58f4S2tqk2fBU1uefgdzZgLDqepprDEAq8BngJ3VEqtNpCWoCxQd3HKWUYHwquQjDzX5sdUgHLqd7NH",
  "key31": "46ZNZLGBQpCXAwioKHSmnBaSnqzZUrnfsDu7PTR7ufKvKpLdS5fJme2irLHoat8rp6uLY9UX84wEqRj85JaKhupo",
  "key32": "2twWPM7PX9NT9ibkSMd4TcXQSqXwAwXcjmRqDEZr1aLnver84wrUXVHGGKy94u9nEcGEgSrnCdebzVTdJ7WvqrZt",
  "key33": "5GKAvyR8uWtrwnXqYKyPDF6S3pXK1SFNCtjaDpniUQKtuLz3JNTimcVX41uzKTnX9jYmeBipXfY4agEL1fhZHMcC"
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
