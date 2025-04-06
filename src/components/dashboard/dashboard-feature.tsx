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
    "37iLkeiyoUuuHAw8Qm4gCFuzPd2nqHdJgFkuQYsRX3qcmj3zvJHQkhCB46Z11ADW3tBZKaRZA3nrdR7nawFCxWRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JFWon39NR4YdQviRYgYoedEXwRjyUDoYM2eX94jS2SjuutfVzAKNDMNLyWFFnQBN9GTxEV4vB4on63EcUGDn1Q7",
  "key1": "4PqaXBwmGwnxSNrGjQqCiBvvGNqpin34c7dyFCYBsgGE34FxhocXCZBQZcz3TkKTMbPaHqCkjUbCwnTpQCaNwL7u",
  "key2": "42trbN1bJYNETcfA2XMpCkYae7eMnN2Hc4VRDXr97p6GGG6gR95n4EzhKUQaxPWQSZb8HTAhcST2uirxCC5DgMym",
  "key3": "XjkoUjpKwyymR7vE6FdGZ1KrzkASnk9reDK1dEkYiEH7zjjouj2C3N8XDiSwwsX9wdA9fQYLQhsUuVqxd3PexT2",
  "key4": "3RByCpesKBeiFtohiWACZyetsDXAq1aTZnpQn3HWzFSHVn8xgAmEfQ4kCEPAUAQ5dzNpVvjKcwRf2piXnSxYEiCm",
  "key5": "3CEMHEHZEFSXrb5Kut7vzVu3iogvieE7rMADnWPXyP7UVeQnYZBJw4t6UvChiAcMFN4qBBHBXEqeW7kv8qBziYxL",
  "key6": "qEabNXHzyiSBecAQRo1SPTUyw4vvTGPz5kMv2MH4v2888jRtHtVBHFuaGpXP2wueSUkGVFfuA5b6HZh6SNWPaDp",
  "key7": "3ojsf1XRSoxfn7hbVG4LqL7Wvageg7AVpgnBgRhwQsL2KQej5AwZBFRoGBP4vCg4ubz4exkt3iYA8njkfA1kpRuC",
  "key8": "c9zvng2AMW6rb8XMJL3Hn4fxSxpbbVRq2pV8jLdVqzKxe4aijeR3F9LmCDwD3mKvc7KXfpEa7Qpi31DPZUz6At9",
  "key9": "55BNTZ6AeyaRjSHWrfXufVJjZ36KqVHwzGjg7dS6SdAS7uQHHug29h8tihZkG6NstLEwPN96Wp3iHof3riJVZDnk",
  "key10": "51knLWHMZKxV15htqjEKjXigF2Lgsy7RAPCK1APg89RR6tr6cdbhEcgAm6tgkYqUwXEWosb8DRjVeUfDHky6FzWt",
  "key11": "5GWkKngQXgtVpahtbjgBZ8k6zPpTN1X7UskgAYMmp5D9qVb1Ue6LRLJXiMiF2w8iC2HtMaoHY3mSHqSVWXULRKYB",
  "key12": "5NgdG15xDNjYDSdxSFFVewJVFmHXjjVZG6QDVxpU96aogSiDEyEt2QE2WP121xNPYi33BzJQ3Gbv6EjEpJh1Q883",
  "key13": "2vwr6f1JxZbxGKeeqN3pzE9RSaoLN5CqyS2RUSVv48FLFDxbUU6X7USh9KMNmtGepg8YcHrb6YG9Lxkzbgsj79C8",
  "key14": "e3yjgcwvLy9v8aevwfCSGULwUvwmh67kNcq5FpmZQHM9rgGre4gQJs7RwtMz3FnveKcj8s8uQJHMFzcS6LxoYNR",
  "key15": "fjJNmxLRxDUz5RxthC3ZCJnqWAH9J9DMvjcYewZr3EkaNmcZscpA3bBpeGKF9PLzos8oyKjM8QG6gg4y71DZLwj",
  "key16": "2FaVVUsaDePkhDKTeMB7w3szPSLuMVkG7HZqmvfGtZSSqYnCgNemnKX44BWjx8DkLL5JrxGa1XcDGQWiQp7cjGEC",
  "key17": "5dEnMQB13R8eRtUyh77J6u4CTVHHFRvyXEugSzn3S3RvRHCHXiPb1gXSm66nCt4oLRFsG57kucUj8NAvZvbYtgTX",
  "key18": "4JBqGAZiSvgjnBoFbgKYXPC6yAbFh6tfF2sPe362GGDVkubXF7Z5SpFGonToMVVHhK3aGxdDY6URUFYubndzeJh6",
  "key19": "4rDKFPMsM6tH8TF4xSrxLXQ8fTU51Z1QGLiwkxBW4CphEhocio9b2XwUJQJGRkNgij5vqL6XQwbQQuCrsbqcci3Q",
  "key20": "4ZYaVxoSAjTMi44U9KDWTLhCD455TXSYDRpw47KngtpzZTrWu1mDyLNrNEzWFat8mPSsf8M3dLyjuKchrBLsYbh4",
  "key21": "3JxH8mtvy2BuhEPD2ryE1HDvkCzrMkJ2Njq89k2N1dH23pf4NNBCHLQTLCsyArtQnhU2gDM1ChvcEmhV3rvgQgKT",
  "key22": "4cPhBcGPDbxzDWvpkM9rboFnJVytngYMqNxYVXcpeepMgP9CyGM6koGsz7TeFyAF6jrRxU6sf34x2wsyLTRwCZni",
  "key23": "3WDYop6Vg6sYCsTGLedFUETYboSpV9DcGEpoX5FvJHoAjEoYr7Gb2siobzpbk2vT3D78AzpCNJCgABzjnRc5hKFp",
  "key24": "4qGEJoH4kF94JJxE5bQg58Uw5stAn9ATb3hCv2vywah5aPU8xbvTmAJ8VHCGhY3RsJiDXFcTMxedvzfwEqZMVrHR",
  "key25": "4zYD5Po3v7GdSTr44yEmdVh7KJoq5DzusjBvm1JhAQwXU4FBodXbdKRYNho1tADFfyJbyAXZdDsWgXejqwwnf6sD"
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
