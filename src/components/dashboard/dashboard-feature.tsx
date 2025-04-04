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
    "2zPq4bd2dQykGPSiD9BX1Y3dznviT6VKnFTziddCBbkcn1tRVu96TaYZtwFjciSTBF89gj8XqbXowATDT8nyzLiw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41GNjqbu2QvUz7x8NcDbS6DzbGTfxiAkPg6gB9UK39rN8DHage99jMV5BsdJe9hW5hLuhRSuNBtBRsVxAT5K9RX3",
  "key1": "4JtuS2RaFN62kseaey2zWipTWRW2nXKyW1rAVAGvXC6MAVsdAHw8uw7vckEYF1DtP88BQ4k5BQP9aHBgNXMJw36V",
  "key2": "3o4kdBC7XhhoMpnSh3reDxVgK8Pivt3W8Y9hJqw5UMysuUkfm96VWU6LXbmNnU97no1TMr1PHdKmFjiFtNUuNNMv",
  "key3": "54TcjSJEaodFH68vn3JYCceia9UMZNmDWNJoxKcBy2hDWpDCrEBx5Z4DMeaSnCDK8vUzEwKRPofWT6NPGE6Sp4iV",
  "key4": "2gwsMtZ3wCcVqpViuG1yFAgpoAC5iahppnGKMj568nRDr5fX4jmaomESoUwem1HBX5s3zkPmhT8TpW79zk1KQaGD",
  "key5": "3V4R2qYceKHzoYZAyKGxTtCMxGkLS1DtxEzKTmnWpkTxAJUhJrB38NSaivsp6tZUXz1E6yqvV7v6ZvLWTXgDix7o",
  "key6": "5umujS4BHkgqhzUT2qVeuzXWtTECASsNRyyW5oguhyvT9LubXbBPATzKLbkpqZocevtMEiHucuH3kD9QRqECTyBx",
  "key7": "61Z7jTRoKewHzxnDs3ojcpagjafJdRs8RNF2CXw8iKJBoskKhU4YAYBZqcpowcdxgG2ibUL3NkupKJca7pTYZmUk",
  "key8": "yYN3Pi2DdP7gtq8qcrAgafDXNFhMe5GeeLjMrb5ySwNqprSbwyd1eHQBdGRqsBHQ9RMkAmyWTJmdt9oRhBRFHuT",
  "key9": "41Pt2z1ibDJhonFXHaWUxfBif1hRAeLg87BUGJYVZc4tKt6URrCzDe1mENYLusHk24PFJ7AxgCrJ3YaQoz3c8NNq",
  "key10": "45Zfs1pJRkzwgxcFwv7iAPoKHfnvYu8nbH5eVexrFGZhQXr5zsWyqfFgyLwBeceUtQ4VVWcwXSiYH3QfiSMueipR",
  "key11": "38u1a66tx4PyygsEZnCEVkvT31798zESiRNkgPJ57oovFBDDyVYu7PxoytVPsR6FK2X52ekH9VMumFXNKwsyRwC",
  "key12": "632LhzUSZ25yEUe9cgdsyJN3zQKZj1k1ZRo3JV26Rc5hDbfneaJDXK2wrvytbfhuvY4XDT1eXJPRN5nhtz4JJ6M",
  "key13": "sdwkP5SZCLnCVccayfsbPnsSo2MevFcAjHodG3p3q6pD8xBmfFjjLZkMk51rHaDRc7YSSdu7T8WrrBviMwcqEf6",
  "key14": "rhVWBvngsj7XbB2G4bNF6j4LJmNeQJZkxDhn88XwctJB66G9j1dbtK4nVatpifEL3zatf5gF2kwpvioApQrqcyX",
  "key15": "5n4ZxsXQwMk3i9SnPZ8z28xxLyRXpFuBRtcSSzzPNzX7MDdvhHh4w58rEE3o2SVD5yzvnR6Kav8jNKj2MTm5zdUP",
  "key16": "4qAx8SVk2XcegZXnfxeiguSdt5cz7hVSSTJv4yqWEfJvS3o3eU9yi1d5dPmQa9TZmhj9zKZRMN2wkNd44xtWh1YM",
  "key17": "3LVdn7jBo9bAWn8PDHEHMFCiMAbZLGPiGjZhcf9RcVYLyLwkoUKJUKRLe2CDvLR9EBuWo3d271j4imZXkY9UzpMj",
  "key18": "4aX4A3xm5BBjWcHvsBbaJ2EUA7E6mcgE62ra5QSmiy9u2iADLd43Gp8QfxgDpngTP361b5gAL625Y9JEE6ZCGC1i",
  "key19": "3M3A5hpgCGLKNcgYC6KrKfoMmcU3ptHYihw8vJMnr3iijuKqA8jBoKNy4YYLXQXV4x7TXXcYSNXhJzj8H1gfV86z",
  "key20": "5fRD3uEv65Sa6CuyVdrjdi9MpJ6uJaExixnEk6mRvDG1Jjer6RbBKi13HCy6oL1ypxTdnMFeKBy5W8eihtUzQ3gW",
  "key21": "4Kan2GXE66FBhrKdu4FsjVBPAQfRXLS1ezHyKtSR9wUkzgDv8foPsygjEcTLxEdsb7gUX8HrvnxjiCDZwToaqNQq",
  "key22": "ZJY42bT4zz3SSQqmfvb1CXpZPpiSFpiiZyrzMKrzxQyAjGh1KJf4E8vGa8eNPHKvoLoStkeeU6sruGs71EgZ7JX",
  "key23": "3uZeYJ2Zt4DGTDwQRSGNwEsViDTFKet7BkW4EkcaCZeoSVJD2kCRELmzodXrb9j8Vxj83yxj9viDYG6u6g7pQhqq",
  "key24": "3y98hpqFKXCcTGT9qajDsaNeZr5Z6MKCXcSrfHmRvX8WdnpanifiCKf2tgHJQJ9miEjy91oho7eoUWRx1x4CUgAb",
  "key25": "2D832iuxeD5jXL2Hy22xMJgviUBxpjHqdHrmecQCqaTDYxTbJ5mGzAfqxi4cQKpKpLL8AEGYUdNwb68Sxb72fvBr",
  "key26": "4EgJrjarKdrz9wURTSwQKqqmo8VF6HLgpheVLV4VcigpGNNwCDSoawNuPJC7dTpKjP7PQwR6vpAw7UnZkQPry8h9",
  "key27": "4hYU7gCq3o5HQka7hNZT2Gj9RZe9MeppQvpASU2EKLsBZUk4nCEeEuczgS2ra7xHkuy2kMKeKaqPTuTq3VXSJoUm",
  "key28": "2JB9kKaXXioZaAGwwvQ6DJe7ZhS6DWAssLppoAKjQQREZFPSKJUwZJYmFJ8oXq1MRiodbhqrH6AWYztkHe1wRjRq",
  "key29": "2BMcXe1FpgkrCDGE7SN6NME8Voo93LNLfVqpDMLSbTN5xrpFtRWvWfCgg7bQapJMM9XX2H7RQkdh5dFKM5CgdT1i",
  "key30": "2CjaVbHq7eA8u31hpYJg3Scc3BuDXi5Xo1xLZFvdtMsdPWo9kqmaoqyaBFV7UtAweM8NNYiMzAugbz1xB2UZ7KFC",
  "key31": "VsEkJkh58bxE48ekW5zeF6SZUZF822vbbph5EXsiCH55v7bs6P2m4dWi5K2QELrZnpSajYWTVdr4j5P5hGCFhiX",
  "key32": "3PfutKFuFPC6itB9NwKcXthzELd1xJAzba8nNhiro4qQUQp6pb6yv3TZJ2gBgQ3AK6mqMCgAnSLAmEQvHGuzzxst",
  "key33": "2Eo63w7tpzeQXXr19ssdMeNfoZTq8omzUP73EHwCdaPQeawAnTAgHkc4N87d1gFaCRu5xENxTnpbE5RbKrrwhcxp",
  "key34": "2kn2WzHv5rAuEYTa1WNg5XMKokh6dRHKEdFH6Z8pgmvJbQrnJdWsp2Kgtogy1C3Kg2zsimrCJtussWgjt5sdqFxu",
  "key35": "R7ijyiNumRaV3ddK1gfuxksN3yFvySdPePnkBd7FLHWyc1iPMBuJMQuiqrP7QXWGi56mAchEwTrAQEN8hayiUM1",
  "key36": "WT5HMBiyKhDpAWrNGy7ttZvtY9zsi3xoEZXusmZJQipxRRm9pXwDMuGixfHYGyaGej2FGe7nVNL8m3fekGHymiV"
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
