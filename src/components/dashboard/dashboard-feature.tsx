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
    "3YgbXYoxNvQeZ9Hpp34Eo9UJAo8LqRHXdXNe2Jnmy6Hj4b1bq3BYknJJhGFwdp4eVW6pGtY9RwtzNApZVjEFu32Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PrvrGD5kBWBUa6bqBb1zvhDzmn87zWGQ3nqQjNwHGD96WeuBcFAqgW1smW3HrEdesntsHrToge9KSfzwUkGHAMV",
  "key1": "4cQ4iLbdZHThUieXkNP7n2sh4F2eRDERXEcqoYxCr6NyXVF1tHSitfb4rFpHX7KHVgyuEQWE2sr4YDQnJMPPffMa",
  "key2": "se56Pf1eNs7fYu6erEsjKcx42vWXHecbK616adYYoZ8fL6tTVihoMeNnnY6BYu2pqQbWu87GVJqPHxbNCiei7rE",
  "key3": "329GE5uSR16HKh1uSffzS8qVRnpR9qmB8HwGN3PXib8nYQiqrzkko6UFsVrEafRdHhsS81AADYi6Ex2p8Je1CtHq",
  "key4": "4ZiXar4xFwutCBZiynzv6U6TP7EXz2sP33sKeYy3U2knQhfz9f718sX1ay9brVzAH7RqTaNTpkDLDV2JxAYUnmQK",
  "key5": "4iPXMFnYdHJ6zKh5JsUKYnP4RvHkdpZWsAR19qAEy6egQWnv3AuC9y99JGn7tJ5uW6XX82XYa14Gp1D7QATMFhWk",
  "key6": "44nWc3AHHGSs9J3AmcZJvRTs6j2CqkAWzqtU5Qt7uJa5VY2FTfF9oyCgukjXBvdAWYA6CC5qwZF6UuZrQPPMSch",
  "key7": "G6yPXFuFYXBmpG3gvs683BkUgSHsF6CLJjkuWmMdCe6DP5JyECj4cms1iJCVoxF3qgRfvn6Rnu3opTfdErbE5La",
  "key8": "4zPQ2rKxeictYQE5eSSzXS39S3PVf8CqQQfxmibGiEGVSPsP8QVU2Qv9m1QGjbb2DRZdWnXfqQYWc3KRmHTD6Hem",
  "key9": "2S1kacwYPSYfUBqyNGPRPBXKW8XurCyz1hjxr5v8u3FHYfoPrFQ6W6YdrJKEa8qTRaTbCodu8pLXcLPtiByfUKwi",
  "key10": "342aRkU7WYgn9PLXjyyun6sC4vQG5zSSw6AkcwaCyKVDzgNWShNTeWqtMaQbp6FFfr8toZhXMHRnEjBC5KZBxHih",
  "key11": "2SMLdffhfFM7qgF5jLvitiVvfTxLVSvjxeXXbjxA8x777G8VENxurUj6Bryr5HhJqiuZ9pa9QzKEzaJPXJrFAbTL",
  "key12": "334FKTEsFYWJpYF48PKfLyUv4XU4Amzo2ZtXdko9TcqtVSoLsCqyLZt3u8g3AHfw5QRk5MQjmYk4kNNJdPybsqKq",
  "key13": "3bsFVSS6ptnnrLWXkPHhU1Zxah5tEY235MKiKrw47Q21jjdp3np89VC1skixNcUXnMvehbjczcxWv2GfZ5S6Ervf",
  "key14": "5vTUSTBtH2NfgqoZLFWcRvCueLWPhvRMVyQKDA3Ne661Phc6KN65jsS2xNHBJqXAUjsNdPLAJLzpfG1i6Y7Uzm1G",
  "key15": "5h3hh275ctyvj9ZDvJVRNjGjw4K8uqwemTG5Y9swHcMXeJWdbrs7A7wV9gobPHPVkJ8XTUwLyqnKsuHNSeh7zxQq",
  "key16": "3mRhNo7HnhhgDnygzX1M8Szv1HEWKnoMcHjGsvhErRbRKz7ySF51R39rfPoLa2tMzmR81SRvcbL9gRxhQXD3e2SH",
  "key17": "5upCQcv2uHCAmceEPNsyCbDiDCYReUG9eGnxeLR2x2rwzKUedAU7tSZSD1zBA5cz6ezJy4AJA5wB2MmHXxBsY6U9",
  "key18": "4C8ZiodGBTHLhUfkYbu42gMnpf5SRcdRnrCGDF1yTBG5REskXis6B7xwWVySAj3S9TanPaf1hscyfYeK3HvM6cBL",
  "key19": "5XWWj382oH9wiCWh8grSeYPVP8BcDGppLqxgLZWSGzfRxJXnq8vvpug6DKyVfPvD6k88ZiZNcXygFYcRmmaf4VJy",
  "key20": "2PgkxsmmVvzq3zj7Ccc8yb4KDnBnucgCYAPKaFq3sHDqtwzpfpPCqy1bvXadupRf9NStfCeW5tSP6mf7tRmEyXjQ",
  "key21": "3bhTevNM6TkdQw3MksevE3i7zTrX2u9viCFEfrScM4VTMdQbrnSjnk6NZvcpgb4dj3AhXieiugQXBXNRMKCF6dN3",
  "key22": "2qLAimwLHXY1GJzDFJdako3HXpMS3R5eENCfnsb4LC1eSYFzz65faWBSpUA1i4Zb7JCR55JntJMnJdmHzos3xVZx",
  "key23": "W8ezXmMJWu8e4Nh7XwVGww8iBFHuHZP3dqvhaDNGe4ChJK6feYAJR8BsSmkweEquCq91rUfJsbrkEkCEndbtHRW",
  "key24": "5BjbfH2Zs5EKD93RgAXvsyML3mZUNNQ4d85eYxLaQ4dtXFcbVNpR6xk2zCiNsjYAFXVmztkPvb2JD2sVkMSApgTm"
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
