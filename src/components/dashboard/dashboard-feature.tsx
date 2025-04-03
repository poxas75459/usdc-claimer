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
    "FGAfnM4fgiRjr3waP4JVFrDuGxqD2k32AJ1CLAQRxDDgekP6GmiPQ6fvHACmUQagoDuyhWRjpaCZCr2TTeeGHHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GCxc25akVuPxeH2U3D5htY1SrBFmZViVcKjNAzc6ZBRQBSdGe3n4w6BZwLYvnTSJfrZkAZmX5eyLRbRRHGGPSnG",
  "key1": "58hMvukpBtxv7UtgWEjXwRZCP5TkeYSuLx4Ba4td7P5E5eUpJZoXW79X3vyLpH3U4T1UMvgpCCLYMXZhVpm2h3gd",
  "key2": "2rCtMtH41vHbcWw1MJWvfrFEkR3bCnq68p5dT2uSbWaqN8DsFfBNPbpzu4xTbtfHg5bN3RM56kPunt5SnGo3ipTo",
  "key3": "5TmANENqZeoYpd95DjNSink1jkF6QQAPjxcANdiZjV9xLTMu7jxgDMEfXRmc3o5mhTVCSjcP7Kx2M247nShmRzYq",
  "key4": "PRDRutntVRFCWU9VuRnh1hWtwbNwTTwEqR8t22BhTam7mwZWGd4GWwwNz9HEHA3ju3hDh1uwSeRQfcfu1UKvab2",
  "key5": "j9A3m6HXRm5kaPD3D7iGYBwByWUtjtewzoyZ5gkGbG57sdM3gHCCYUUDEy7k2QT3yRkpbuyitbWPcwwadxpCUS4",
  "key6": "4T5KCCfXMPj8C9Yz6FH3ZencG2Hosi4q1z2HuqpKNxMFFJefpySpcJ6JXYwZ7Db9Z3VkqFSgZ7BfDAxRQ6ejaLsP",
  "key7": "U71jy8Yf438dq6h6hViugzCZMt2nuDgEjohQCb4o2tRNAMrsuAmPdqfUUD5f9J5QRG3ViBRd2d2Qj53AnvRCPDF",
  "key8": "48pjDZiaWMYUavTsciwDi4o2XDa4Vt8YHfgd8nN9PSFduNRd5zoEG5Rd7F2qZPFeF3sj7PLoNHgtouvb3zWZHLo",
  "key9": "65jeX6aNhpTBphhssZLTZ47RdUcByU2fQU7Jb3cTds5Epe8irnmmw2aRnKcs9iguQ1virTbrCGqk3uX2VVLCzAf8",
  "key10": "46seyGkuKdsjGsvKCqEQ4YWe7W6gytnJ5LNedeVumyysqoWLPW3wz4HQCDMLoA6crkoCcQgbzBcUCA2tz49FiJX3",
  "key11": "wdLpJFdpzHubdDnWVa8bitwNdxeYdRWkFeD3MBhq6uixeLjBaQoDRqyfxUJV1WG96MrdQXi954DBkjdKj2MBg6v",
  "key12": "kPbtFmTRSwVsy4vDkaEHrDcbPF1riX6kj1jsPYpLpeWLdi6HurcSmGZTRBUrVfo98k75EKYZsKCphe5p5H5kEFG",
  "key13": "3BorU9yqCSBx8eGUKt2KmqiKzyEFEeh5MabpEZfZyqJ7x6TgR97JHNXKpfdnVJ4Yf7AYH19TUiForaZxQ6vuB2NE",
  "key14": "4rxaGS2uwKRrCtzkAYW5FvvNoGP1Afv1TN61ufNUd1BH3tPvoo8PHinABGs8A6oxgLgLJuibJBDLPtNLCNTCtijM",
  "key15": "2ZHwTQCSf355hDXMiHVmDUutsoDcNqJBUdXVjqEEsR1aCqRRRy98mtRfBB65na7YSUa1WqE6qW3daCkfJA1tKkCo",
  "key16": "zPwbMxwnnGGkPWdhFQYZUzxDRw78BsbP6rCdPU26A5UMqmEm3jNEr632PUfuVFbJeffgCfEKfKuSRRCB9unML6o",
  "key17": "3DUZL7ejG8Z3Jfav7hNqPqgzzhq9AW3P5Aqkvw32krkzuDxZ94pJnN13iLQPTxM4TgBQVWrqZUxiyiu6D26uEzka",
  "key18": "28wuVRRVDf4QoMS4mFyjSjuvUH13oeqSo9ShA7CedPhWy4XKrXYkBQ48NBqkYJdCTV6rdWfnfxv88RcPAi6tx2DP",
  "key19": "5cBcVJ8eRmS9iKXSdo2d8gNjrTK45wke7QgGXstCmXDJeLkN9C1U9J55KDjuPnqrczoq17h4XHBmKxVqAsqrX2du",
  "key20": "rL7hDkjMJRXjLhSzwxZzQeFHKdeTSDVSZb3hTEApX6h4eiWsi4cqtWCsXKsnZuL736W9Q4zcaxRrJL3UAYvvqKt",
  "key21": "4jRmmm5Nnvn6jZHQv6V81VnkSu9jyinftY4jYiWLg8bSs8mCKUYK35cCDNtig7siSEKUUtMmaiTdzjVYdioAipEw",
  "key22": "V7wcguh6dTaU4M6t2h2XY4V2GvwzmerQ6XdE7sUJLVTvrCzXFzMmCwq3eDHzAGFPaQZrgfuoSEY6Z51PsFuipCQ",
  "key23": "5qPLaK7HPxXnLDepTqG83GoDPb3k9FrDrFfRP5kx5Y4ge5YRPhwySkXgaYDB7kDDAX2Q13YNjZcJcVJv3noXuGoX",
  "key24": "3dQdenFw4ZesNWHFTTxUCorueP26kXmQ94y79Cp7ihYcqz9jYFniq1oEg5oeBvAc4StmMVJ34AGYVvRpRUs8WutQ",
  "key25": "SQCNpfM2F9hcifacx58uE795osbSpaiiZ9qyRd1ae6asmQykAffoduNjitHyDfCSy598GQM4uS42CeCCSkHZnMZ",
  "key26": "2ePg4XJMgbiwy6Gi6mAHDK3hYsP4nkANgoPZjvpgYFjuVHnNnb9Tpdz4eB1RjcfXVCaCtkLjRYnCC2gha6FTnLk5",
  "key27": "5aAAEfd2nGz6QWsD8PxEgJGbu3xHWnUQVo2vUmTPgewgMCVWwD1NrpQmq1hcaVGVB4i91pMmX8qWySSwuNWj8q8p",
  "key28": "3FjcndkDHYCwxQGnfgK97b6ZTDZnsvj31miZc1Hen1rgCb1CCFbEW6YC1vswBLyyv8KepzeJyw1esP3wabQvUEBL",
  "key29": "3fKNWcVCD6FVqipv1h5DZtCwCHvq7izqJwNvsXcP9QfXVrqkeZxAcp6ugDkrkF9te6ExXPaofLCEHZTaKoZ3ZbwW",
  "key30": "669Ehdgs7SYTEvmceVLfURZLJ5dKT6Yc9Pp769NkoMnJ4AU7WDS142Dy4UwK2iX48LHZUGxcm9reNH8BF5uYBevn",
  "key31": "2QeUhPrEFAHTZxTE3GWF7NvxKwzJRJGHzfvG9WoYX188AiXdSa3jBAHduhWWfQFfyE3oLWqMVsTtg3SBbyZCJxxh",
  "key32": "YXV5KUGFe7g8zU1aAovjuyYWn3EqR4X1GGDWNDFpnfFCiSZQ9LBWe77MPK5GnH5RoqTjv1ZXGMFbpK2GzAhtSS7",
  "key33": "5Df7bnM471ZVRZCB6eFo5CASGosUZxS7Ebvw3syhE87vvehQCMbFrgmqmcJYL1AJUwgxKHSSQbvrFUqGEom9dcr",
  "key34": "2m5NEzjrchQqYeYU1JQqN6GxEYKEhW8xebGpbYyPuXUdFAR9AsTMTFspoXELriMUbt83LqYwEPgBLCtrKk8rb7y6"
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
