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
    "n49PK9d2pEACkeETpUQWt1QVRfwqEHYopoWbZFx5h81kwLoCPxHBMwU3AEs1V2ghE9KwqBFtAwoVPbbqJCSU1xu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2k2q6yX7yTVLTeRU5ovFrHnA6kGhTDbBwTz4aAab9Jqt5qLtw6JqiZ9RV2a4X4G1E9ENo1exK7o2HzABxy5X52Eb",
  "key1": "4a2rxpdKKrqkasbi4HhBmUeygSBahG1NmorNM9qSbXmhkLq3yqWzEjohH9pajtZXWnm6D94h4cjDFPYJujoq7UXW",
  "key2": "397w5rRxtRrcTWkVwAVZQ27WDLkYSarzFyG2Fd7YNHn9PgJX8C4ZMLuwHoTVzToDKMzzumRXfaFFvbiw7bRBwLRW",
  "key3": "2U7fotB9AoHpfPXxp8VN3gMLh3PxrqBvD6aBFArZMSpNd2gVj54fAdHCNhnLEzdd14yDEGtomJ7zpUULwr9zoh1k",
  "key4": "D9xMy2iMMijAo6eih94c9E1nTLUFMLsrwEq63wdsboAKLefkYJHxhsTP4BRxQHRQF85kDbyKEboeSLAM4KmDK7z",
  "key5": "3iM4S8grnimUwvRRfgce7GypUiEdVu65UMpeNiFeCTyVnuyGxLTtgCfawQnW5rW3Nr9de1rbfRSMzHxj3QMx5ypr",
  "key6": "nXJUBLNVgpWR315sxhV5h5VvD382rQSsiaQkTDqLa9K2q8hhK4nJwsZif96HfkeP3BLzDRb9fbDdFj5Rz6rk9Lx",
  "key7": "4rLtdJRXJuU4r4QftMANNLNVs8aXUawLV6qfDJiN5ZWRD7L4hA9nhiczcwBb2MST6xHucejL7aQPJ78gwemeH1Nx",
  "key8": "5c1XJtbSs4nJdn2i6CBYdPRbugQM5Mw3MRAAQwcqen5KP2XETFoQexQun25H5sMVvXrcnoidAagZ8UnVYZsLgi4P",
  "key9": "367CBNfkJWgkKAkYWVmhUm4eZmFGRgUL5BFzjDiycCYsqVbMXJ1A6VcitdJHiaX25tKKz7472Jpdoub9ywhym9BH",
  "key10": "VTfP1t5EhGbWUmLFbAnztHwq91cnBBR2TreEkQKU3bt5rA1KQJuu3Rv2UrBC7VQcJdWnv3sGFAB3oHx31RVNh8r",
  "key11": "3BWxEJ19NAJ67EZvJ6SPY8q5dn36KcQ2pFrce56Q4hyEjyM9FMTEonLJNDqKVnzZ9y37s31NBD5FoJvkU3XwdoZw",
  "key12": "2Bj7ndkjgETe1inDFNrBYGvqgrf7zqYvsSoePRxTypDy6eGGFYvxP2G1hkVNDDBvsEGDrk1svA7F1XTEeT7ZsGz5",
  "key13": "51PYPRfJEyorJ6PdeQpoNdCYqwmFrgQBRrhLL7qXHCRR7cXjdUTd4byBQFBvHc8b8Fx46wWZFdcybMXUcNwn5zAa",
  "key14": "5q6cDdfKQrqdxWgvmBfNVbCQ9Bd8tsA1cTzkqGUisf3xLYjNnxGAF9BA2KARdza95XGBUz3Xc3cdqcwo2v5ELkw6",
  "key15": "3uD4oGJU746GynBPbVFty54nsrtvzKj21dUNu5zT2m2mzeJQgKJXWhByww9qTRUH12AT5kE5FjPxCfPZxnHYrP6N",
  "key16": "579ZTXwMcno6TuaXGjwRLkDiJ9WLKwgAi4CpeMjD4zWnzn4AdRKxyCaJf8sSnY8yZsYY18w48nY5P2X7FxH6p1K3",
  "key17": "4NsGy7GYtT5tqeMP1d7M4tKLQeUmS3apVYBK2N4dgCvfauzAry2eeQMKRC7NzZ5ySDf58fMVPcG5JzAroZBqWSPR",
  "key18": "4WbnPgzywJsQcZXcodaKAs3ukah6cuQ695i3b7Jh38u4NQ8s1WCME1sUEBxvpcuLDVJbN5JjTC33weWZnChFDKb9",
  "key19": "T9chKyTspcJ5J4APcVkX55PzbnvjPLJrzd9WfwmS4qy7TdQHYJpxwK39c3fygAfiFJpx2T4ZUdYB6htycGP1CM4",
  "key20": "4MonNk4e2P8XUizPqv16wkndA5QThhKiZQfErdtsmsGJwMrthXhVLhrGkq5PnP5XRdLszUsy1yUDZEHhp2YT3JSi",
  "key21": "2Qu9hj7jbCKi1PK6TGCyhzASRXxtucztd5UcM6veRu6bNVciitsAtFhzFKwRJ2xee4HN5G7BeefoH6cuw873PjRm",
  "key22": "5VWUFPsqFQ8kbRJ6Sm5LiCd9Zif9vGuSqSyBiWW5Fkcseme4gMEtT1tmtd3yowUXXVxpvt2HJe8HY1T6Z469kssv",
  "key23": "4Kh2eSnsyV2fUVA3nJnvwSV53XfK4Whp6PMQAPNvAHv6PTjQcnTUvbC1WWLgSNvrZ1WWBuUHtEqij6UY9qQYupyb",
  "key24": "4fnFqWg5PSHho3ekP2jML7jgC2S2V1vC8ZAA2qPrPS3FaL9PrgYmwEHxoziMaPSQ9iJYrduDwFqYML1QQx4zdCC2",
  "key25": "2DyrMzSGsHGQizFygthkRTgLVVMQPpACX4seRF1LCsZkzVqgxYCXtqbbDsJrBLbxZ5F2W8rpUXdsyQjTzph7BrWv",
  "key26": "N578XNnAAiebqWiJkydKfbeCCDZyDEgcUpqKm384Sg3j41jpkhVmjSJbAxynvuD4GdRH9zeFqP92S6trGZSFQzg",
  "key27": "2LRjHGsWPf2kfzaNJxZ1BJDhhGB5Y6YM7VBE2c4JzVXxaKS5DCHJ7stzPDAewDAr26u7oCxeKDixsi2egiC8JgtW",
  "key28": "3MWTgKuHbzoHE4UaaMVL9f67oqyAmS7MihAq1bP3o1KxTyN1jrikCoos58ZUBSXsA1yQhBo732Tm2RApdkUjFAJg",
  "key29": "2sg1pjxZZpuqSMDqzffs4y6VTemp3UjqarjtqQx3B4eaxbWN7g3W1JXgFe5ZqhRQD6wTNux8MkZdcPoXnKFZ5tVM",
  "key30": "5pTaCZje4USLwSiyRAFmX1h8qETQaf9F9sBN9ACKhKpFeHz5N7vcsEXgvfyQgCkXU35crefjVQWNh2wF633z4NQT",
  "key31": "3QJQpmT4E5Jy548LNcNHxmfh4AaxXZF5hnS6DorEeA86RVy9oVo85pz5Ne7Yi7p4cAWNPrGyucEgUmwDo1wD8cMB",
  "key32": "YH8RYF3eGUJFtYe1mmziFcjtnUUDecZtCTmgo3cMb1vSnGEPFKtM7E4Hn4D1zhXMkRXJwGNjnpzknaTQCAMUoRA",
  "key33": "4GVLRtXwCKXP1jYJkpqRHML8raSanYYPBrx9XbcrUKyEVwxoLwu6c3pTj7s9X2uP2gSBkH8j7V4CSCjWMF7DyAKQ",
  "key34": "3pKrkKGixRCiLPq53a9Dm6ouH2akzGphb92sztjHVavu9Db5B8JWezCoJJRUzxrXsREdgzEuYns6EJxfnur5GaUd",
  "key35": "3c5V6iYdzq8pkJw9g8idq8Vd1iBQ1t2JAyh6JQcibcHTq4rWin8aobRZFX287KKgKtdGC3V1BPpBoBW4CH6z6fks",
  "key36": "5EqpYgMht5C1uqqvLd2AHFppmNULxvKt4rANSbfNPSiGQmLydBdQVEhrVmeTPSZGSovT7oveBBNb3PyAwjwpJgCS",
  "key37": "Q1wjaw9HkyYgx4KtJyHht8DNk1YpKJ36Wsj28EKifXV52aJKpLLogmRg29W1PZUaxypmEwmKk2wJtADBK5naEzc",
  "key38": "4jRA6sj37VNX7QDbspD2nLHTRah1oZC3FSkhsBU1wbZK2j5uE7wEFmARKHSA3Nmeb37trDEwZe4WeQDB4AhFbSfV",
  "key39": "tyyeAcuRNKc1Wz1cHgjJmHjfJPqCggG33WDDG3b2dkgU49XrEC4zJJF58thJuMRqfstEnbaCtKfhSzSHmxrz4ec"
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
