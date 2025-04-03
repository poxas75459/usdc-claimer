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
    "5F9gXBDbmN1AYBTEguN83gpFwu96UNP3nRPj6hrYKmgHn4USN6TzvvB18KSsCBQcco5JHm88qE9e3PBSEGuXGdti"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Te5dDMwCGLdCeiW6QZUQNffBT3ajcHF3AA2FVxd7XxUakZLperaCo26nfb1FgReLQTakLutEgVgt6cZ5gNyC81G",
  "key1": "5p6Amt9gNKHe8WEfdsMvtGnXYuemSDfFqg5Fm5NHVGP7gZPdU19XNmqiLWzVPeHuLc3tHBtWnXRRed2mW1kkbka",
  "key2": "BQwzH5o5xpbqn7FVb8gpnDNFKBPFmqDv3MMbib5Uizwuz92QsTpRnnB13LXoJzoBg7JDCmh9372NhtrFX84pcti",
  "key3": "39wDXbH3bTKK23AqTA2sAUjwMsVcfmnchChTmzL2UbYhduvBmExHLMBRB2KFitfidkGNVJR3EWcnKaCqixmoPDBf",
  "key4": "66FMQ55LwYYooa7gTRvGHNZXUPwY9j39cPPXBJfZNvyZVvtmroUNbWmCiKWJqRwWWnVozLisdtsHG3DhoweefStj",
  "key5": "5h1CDL6GZLLLi2DUwscyBz11Aqp6P6rkrqCQmTPCBrUfMY9fMtqaoqG1q7a9kaFhHesKeMR88mdHwowom79uVX7k",
  "key6": "fDBk3SSFzYVa5DS7xHDFdo8pQyTSQv9Mp613kxG2629PzbDyzh8nusjYx3gX3FjhWTvGRWAy7i6V7vukXoPu5J7",
  "key7": "Rtqx2CgxHaDN61DwLtHUXLYwoLCgzXcrtumHEREjBdSK7AgurwPp4DCqjmGcTAHWrmrHJtwZfWvhbjA7rvBUDkJ",
  "key8": "4rnixn5cCzSX4zrxLWfi9ESrr5swM6FAEvH5aSCeZj3VwWwjb9dfDpD9fcXoQsxSwCXAVjVUhPv4NMSY4JbyTKF2",
  "key9": "4PsLs3ySBVDavfhbqfaCF8pmJyZdYncqvRKLSLgDzAFUcGPFvJk25pz8KCKVDYibkVNr3cQp6ypD5CgCER9uSYqF",
  "key10": "354V1PuY9uKJRxJkS7zh2duZQ8KkecJVUF2dRvwZAxn6JCKGq9czYzese9GDiF8UA8K6BwGrv5cemQFCw5eyTq5d",
  "key11": "4WS7xf45oUN55ZzyjwXstp7XbLuChkacKjedPB81YbHFP29RC955GEvryYKNDhzfKK6VUzGcZJu2QSCBH65cfCkm",
  "key12": "25sUdxfYADHggvJ8bVsKeVze8iy2Wb5kDkAEf28wQVo4ynTrG6s2irtjZS9R5nthQorZcTfDMLDNdXpEVaukQTuV",
  "key13": "wQ8fzaPt63kGXzk18S1ggz915kjKVg6QSCDVqDhAT4xgUWnLcPuyaz9vtGwvJeL1rPYRjD2NS7j47cu4g6sndCx",
  "key14": "5FafGsYbPSSimBsqaMupZYKXXg3PHqiBxAksVXPZv8HYVXJJtgiAWpksFiS56gg8iGWyo4bg5oLRH684ds53XYQ2",
  "key15": "3ig44eM1LSW1tfHEMg6PC95iVfiiTCriSh5zRJeDUBpjn9JkjP7nSNpjc7rNCRHTF6qjDC5eQu3bFm9z1MJWsNR7",
  "key16": "5zFsGkfPhRFG5eSmZNkVtwaZZmEzCh4PUyHFgQbjtyNHx5nk4dZN32n9denYo7PEYQ2pGpApEcphvW5VHU8gK1nZ",
  "key17": "5qoqr2go5nCP4DXztmYAPBNiZTpq34fEYXYn5sjuRMv4PPBoENXHaJgx8RK6BmKCuuL7RYr8ibrMSDgWd4RBwB9T",
  "key18": "2eM5auH94XBdeXoodfL2JpKAmKwnweocX6fzpQujXwDipUY8MXsAuirmw3nfMwxXWEt7HWQSLJzm6a2QneRYvnmC",
  "key19": "3UXZiN449YLDYKPs9GnY4HgtrPZLPcMErxoZLbvgChqMvx5kaK1sFSZgtjW9geKWASEXehAK2uNXbtPz9TZc97z2",
  "key20": "5U7xeD2vqwzeRoF94uBBZprYwbaiwcEUbAvXRj2Uq98P48y4NG92K3TXfeiYxrKP62vXD9SByR66eHfYDCkmjgmU",
  "key21": "46PXcfFWYuwRKdcGbA9JWAjkfq5nMuxy5mQKuwGTmEGFRyUuypn1dUhfFd9cqynjSsqUhEApsyw59KPpcJ55AXgd",
  "key22": "sYB31KaTVP2NVLHBaFXvQEGXBsUnGFAdpu69fiGFgKFBdiPCfwmHhRP3acVKzZwxPgFoWMyeAjkF3ud3WkS5BBS",
  "key23": "5jCBFfYGUHYnsNm54ckrppZxRAn3BJufh6cJdxDesAkGEjuVhb3KnFstqi9xxHnKzMjk31nhCLb66khhXRt2aJAv",
  "key24": "5mGADTKvso5Tqcv6xEBYoq4WsCPXkqYp8sLvzxbUbdziAQK17cP8UtmR9BQKRqozSAdkx3hpThYAYWoCysnrRCDd",
  "key25": "2ueX6hWt8HMa4VpZrn3uh4jQKvddYNBFsgpM4No6bERoUSPnVYC2T8yj6k3agXgmoFGf2zYUZhUc8DfqQvw1c5BS",
  "key26": "NVWUjUV48FcsyhsXoXSWfJwtXsixyhUCpkENy97P8Sds6LecEAAqhM3qzawzYmbpAMRBvCctkeD1ZTSonesCH9b",
  "key27": "2fFSBAbvHaf1JtBeEmCvFCA9cJKeGKdwKP2WHYvJRGFjD6PzwzLFqkb3Ju5dVJvmG6a7j6g1oDfcJSyAEEm8J9Qa",
  "key28": "2Bm2PbN4ZkgoNtnCmSmGQyXKihvNeUqxX7APhThdJsNXyyYRxdYWegwH9X1Yp1kdXVsjr7dtbZLBAcY7e6MWtXFx",
  "key29": "5hbijTUSA5A1gTiHJUmpnYmgEkZo1iUuH81StQ7vEDqv55RyTJh6Kqy4L4WrHE1prXQPecqHFxcX2FwqQzjtK1ax",
  "key30": "4VBbaUa3rwWthyLU48n18mPS8shALc4A27bMJQxXxjmJshgQW4YxjBoy6pt7L3vVcfGo7GU6qrC9cCNZFTBUzPTM",
  "key31": "35UrZFA7EsHgGuQamz2SDso9Tsi1PFaqm9dwqdUyZYM3tKNhw3wYhWWywmXGBv7XDHL2E4znMEyLbUEf8fXy9tbi",
  "key32": "58QBHK8NvrA5q1uozLfL6qWsrZAQVhMBdYgFdvKkVJaiw1XAesxBgpA9nS66jSmcvqFa49fLgCrYagwfPfYXKWVb",
  "key33": "Ny5kaZsiybwcgJWsGZQa9Cpt6Tv4qipajt3TT9aaTKL9AxCSCC6EF596XaA479J2iN9ohs19XqGc83VMFSj5J8x",
  "key34": "5zq8uZvDaosVKfiFn3oQ2JrVnyci3aaRtM56QtjwxZqKkJbvgYTGTuMy77k9RnqYeDG94NFSNqP81xFdaRy3nZET",
  "key35": "4f5LtrPM1VB5wm37Ae8QmgiS4GSMaSAQDd5qrCTYgbhCRSLQAuEKP2aY4ukeyxbquaH2M2RWbaEfaGY1Fzd53htS",
  "key36": "4j4S56kbr6bnRt8XLmNtyUhEpoT1P5TuqjW6ck6tZ9DnP8mnX9JS5vot7AbJfUmonsjUmnYhGd8gyoW7EArxdWrg",
  "key37": "4XsAxXMN3ENmBhNaYwyoZvn6qZWZuoPvtU2HsdAwTrwK6F7XQz7GrJdXfrzgiup46aiqujN2ig6kGHj6SPQAzPAC"
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
