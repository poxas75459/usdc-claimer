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
    "2Hh5nLAVgPN7UrtqD8uhYfn3sk2VYawkkBzJAud6Fe1LiHcGpAkMT7pATY4hUyzY94UfgJ6tdUG6i9fCpJAg9cLA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DNkTSFtvHcyHVNHu9YfoNq46X28ANwN8aSfev2ogTrGZdhNiTjb5AbCa9FiVFAm6bCzzxmDknCFNQZMRs7MYc4L",
  "key1": "4PZVK4z9KRWWrvhZUh8PUgCwvdVfKyd8RZpvuQs9gxHrL7xJVMGciZEGo6Ecx3z7dFsDB2abH3GFkZcwnvBqb1eA",
  "key2": "3NBBscwbQfQ9b97WJ9bD4Exftwzfujhz3JvCsw89daG1yRTRjKoFfFFZFahbkn3WNGNsSZ2qxZrUvCQcP9cYtStP",
  "key3": "559RETqU5Ys5FsaDS7kLAGJmUUUiF2NVAYoCAtfVxYQyRvL5r58v5YLBzaze4wDzy58TDvWM74ofLPWgrnpcdj8i",
  "key4": "2MwoGRb4WhMu1s4D3Hwy2YEw3VTbttAtimqffNDKd794s13TCRonQQ8QgJpTL52Ec2M5WCfDHE5694DYhFcvmv3U",
  "key5": "4zN1AcwErd8heGmynzHrueUGTNpHcwrMHX2vfwRP9kzg3tEeCgYYkWXBsLLHNCE3ojKqRDNZkdXdFHuTu29m6Abk",
  "key6": "3ucZ71uckM5vgf9MFFGEAqqtUSy4EsfRrbDWGqXzmABgPEFHUsHLkWv2D7o8h1GtVDN2NZktznW551SjRQuCr6WH",
  "key7": "2q4bfwuwc6vS5skbHw19x3oPU3AYNwjH5DL8bYuH3qkG4khKoQ43YT2pf8F1V8nHWds7Kmuziu5f4huRoz5GRt35",
  "key8": "5MyQFBmxn6tE99ra2oLJ328SbieWcYCpjMm65mggHFPVsRpeWHuWPKyqW5yicxeCGxDKuV4SZrXzVDtH6HjFxHWZ",
  "key9": "5DTff4Z96dW8B2WkrXtXfgxF7RpGznVFqHUdBSs78J3VuT2FwPPoQvpLwn6Dicy9u3FTSz1raJbxXq6Ri564U7cN",
  "key10": "51SruAGgJdG5U1wp1tFYh7gR5JFtJsZQST3DDGomWHGLZGjDpfYSUubfhqn8jnpnKwqhZbsGEUtUqJgW4t2fMkWA",
  "key11": "46BK4vuXMfHXbGGWY1wPpvH2qmJxoUpHsihH9vt6JY8YV7y3dBShcNEfNEVGwvvoPK2yZHGBSdk4wpEBLWjR2cUZ",
  "key12": "44rnPYXNbie35ksj2UFVpuYWKwgHz7oX4qvmJytJb2s9YHHpWeBMpJS9Kgp9tGRVogpNBW8zBRLL552TrpPtjpbA",
  "key13": "4Ty3gnKpuhsJqQz4S1QPT1Jy1maNQZnjPBY9Ec52yBPAMqXFn2Bt9VWCeYsxLWKoGa5fCoXM8dAGC4B4zChMNNUm",
  "key14": "4xo8MtAJuceTnK8wghtjpZ3UKyqkBui9hmA2RQwgFN1StoYfriWVfzYTZftrFHJC6XAstG8KH2DwKJzQG1HqYgxq",
  "key15": "2u66UJphhgxChm4pYQ1eA9eP47GKje3zqgfDM6c9t1PnTBrDLjytLbC3m8CcKBXf3jSvGJDrRz8KRXhWZKYz2JLS",
  "key16": "5sxEnuSei5QagHrjjShrft3anY4w3quyCE6T4SXzkyzRKcfZhhvHetd8WBTG7ZkSAym9ELpvNev1WUj4F7JoWwLr",
  "key17": "2nmdfa3c9W6QB1eoPTpFWf6sW5Q98vqb2WAxvniKJPVxkVncsZSqQ1ytRxUwveTvK6XNE3BmcFe4CLgiDnnEkKho",
  "key18": "5MaMpYiYKaoNLBWkRYkr6joAZA6gjQeVaj1hjzcndndhTHu1wqpnuueTmjcR27CLgf2En7xzDGgvwNz3tXzRu925",
  "key19": "3jsE5WgqsEnJFyJvrsKAqhACtYTvDWiqt7hg7hfB85Rukv7iW6poP5kHQvhWUZCTTr7RKxB4yojwpaatqwNriXBx",
  "key20": "4jbRFLwHPKCLkZGMFmPxQuuPotpUJkHw59YUfib3ftvfLVbD2F3FWvsfmdUQqL7oH7ThJkpY2ZqTsCWU24R82hUE",
  "key21": "3u2PZL32RC5LrM9ck3BKEfFtW1cLhnfeQ4CznWFt8Y73n9SGvf17ub4A5k96cniw38xCnSdPLZ38E3dHeaQMixsD",
  "key22": "exLosvRnmZvkx62jzDCJ8Fe1rnpf2Vf2F8PiiFiyV97iY9Si1Q6pdNKhKA8F8bmYFrcJ8eqQQPdyjE7dZrkQXZH",
  "key23": "3xX2jibvisngsyLo1MYTNRhCHdTaUZLXs1aMaCR6aFcMFrUBGABT8UtaQLAMShyfWvt6nJu8wh6nD8NBWuT8UuBE",
  "key24": "3ZkFdt9bBGTQo9u4dM8XBX2deRiFzKbaQRJ8d1d1hfkrcqV8qcA76qhTDBVWcto6uEzrixT1uKkGcd77kjWgum27",
  "key25": "4FpBa2CBQ8DUbGaZUufs8zaKwtYSmCNK2XgpEBCxCcKd5tpgXxnPvYkxuFJGdXhJYgJrtSYBybo6LY6HbDP5V6r8"
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
