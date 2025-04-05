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
    "2KDqo4hosjT3jGPjHo2ThLPiAukxUUDDYzJo9kSS5BnRh7EGMtuquPj6MpGcfnVU8vbSnJQ2iZ21R6ST6Tah6ZFN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2orA43AYJpyVcD6DBxZ8oGgGC1B2NxVoZuDA1UpCyaB7uAbnSG2H7RuW2WSaoGvBqRhkJLGAyr5YUwkA22wqzHu4",
  "key1": "5xhvMSmbMpvf3vRsxQvHkdKock1Ay1gJd6HgkgK4szaE7MtZM3TuffZzedJyyt3BtSdxR8HMRETCX2ERuYdzoJf8",
  "key2": "4ZHruko7Rttj78qzPigpbbTYgbYSrCRU42Zf13FdaPDJJyjncp2sZKPLXrUFDHvmG7F2rSpLkXfjrb9tv37LcTwQ",
  "key3": "dkUWCTuteRZDQAtqUxGocKNqFex1tQFd2N94fPA7W5TrHyzv5zhSzj9oDNxwiCwm4cSSkMuXni3fjbpmNEmrojm",
  "key4": "53UhBeYtr7BHgweRj6vRtoPkggNHzgqd1UYxsftnW1wRYXFZBzManu7jsixiDemmcXkL3TaytGR3kfnhq8dw5VQR",
  "key5": "61hrQrUdrTReBLLArbay56Gd9M3Pwcjf7zajmj2fT31cJsMiEM6Lr4VfztVYRiFcSktXzNVhiDhn9HWS3qRZeqEV",
  "key6": "9nn4ovJPPBA8rbqdNn4VZZzXTChiYW1nATwgBJbEH5B76YxTcLDcVF35BXBFXJns1hdmeMqxX6gWQsBWgmyQTfv",
  "key7": "5MzqeJGhB8nSUr8eNgRhcW8qrK8g4wKUkVkjpDqeyL9zTfgf93DGeTMyjqAmsCpe3S3BL82pnYc9DYBhTdNHmSfB",
  "key8": "2cAB69pWYhwGSX4G65NGK1txUXs8F7AEDeBdbVE1qWomcg2oo4dRcEpZfsAu7d2ED6As5dMaPLL45C7tEYSu2Yeg",
  "key9": "4bTycBReChgQrJsHoVVEBQY9sgm57kBnmv4fGmYKZyN5Ry1uJ9KDiyVGbvHyNxowJtrhAoBr9aca3J8tX77quydG",
  "key10": "5JvP48S4aXApHnmBh4ukEYdCnWe6bmhKjvkuVeNiYMSAA4GWLL1ecpfF8a5fGdKRJ8q4N9m8WnqMrK3QEwpkEwNm",
  "key11": "NSyBF86VuQZYw7rQSGa42gnBoG1fGydvHae7Eg4NXTWTnjjbybF5mejrjJHKm7Sgi1kWLBTX2QDpQVe3DyjKH8f",
  "key12": "pe2yJhwjcLC5wpNsS3yrvRqTag9BtsMjDb4zhtRHrMx3NLxq1pRNpR4m5TdHJRjXcipsezBGUodBuVa4notwHrz",
  "key13": "KobHgMDnRzHjXd2w1juHkNt25raL9BXcn1rRcGReBUedZPuVmwYkfesRJKMgMVao17vWLWrpNxHh5LBYMZ5yn4z",
  "key14": "5JRcry9aw13ry4brtBpGdGh5p4mgfi6KqXLqCg2pyQEycNvBj4or3z66uutLpHFyThEXMaAnPgNMYJngMSuDFkfs",
  "key15": "5bkHE5QUkQ629tj43SMW86mjqSSgT2gznwqf927Zt6oLops5scrZchDDsZSAfA215887u3aGrWM4bifvH5ACG5z6",
  "key16": "61a37WTPVX5cwoXRHB4mNNAFbsP6WiNgabNUNgZ8YSF5KimxZ5eoKhuTqv4Lov5EMD29n1hXVyFLr9gzQ7pDzRXy",
  "key17": "i2K3LMTefGXaYHwjZ4dX8vSoFc4CJw3uSFRhBXDpRuZhv8PVdk1QG7wgxjVL2mqRskkuKbosEmNkCKamtLxkyav",
  "key18": "3uT4iH1Qk7KphKhyNNXP3XbJJY8edXfNnRMQN1wrHdfeixRaafRdjNRokex3CUVuLj5qS47sNGpKyfvtYsisJmWK",
  "key19": "3T3tnZb1vetvZECVefZrg6ZkePjdqoKo2SqQMuUxuSiUqWnZQQZrbj3PTKszJdXdCMKi1f2mX6CJHcY6ktmqWHbU",
  "key20": "4F7rnXLcaMpjjYcYSSqvnf6pD6DYFDQh4kYs1zaFS9GXGGW5RNyQwQwb7k2ywJmJMiE9pAQ8pUNGvE2j1r7iohou",
  "key21": "2fVstYHCwxyj7GSnEHLPYLpMdr7iu25K7eJXxkCVi1iTgkpbRt2zAtJXnfcaTPuqXx1RUWH5WQHd7SXBjQmd4uUx",
  "key22": "5wegYsBhzavhsy7uhyDTR6UpfqT8jwJwxxM8hkzouVBdsmuW3y3DoGY2sQqSQWBS92Cbv5hjRKq8j8EeCwZGeEFC",
  "key23": "5B77fATm6wPYxpcNKCjfHAzaaQttJhoSoSTTfLFzu528yJLyQjCW3FeRXMhozGkHqp1ZNanisJ6qpJGzQWNTCypi",
  "key24": "NCFs6SM99krLcLL8jE7wBhpHwPa6SgrJ2GzcWYLfB4kUjnc2VFUnQ1KthHrfqM7EbVuM22cuPVkzYJroGrXA9Sp",
  "key25": "2q53Np9MkLVksuGcHcigbDAoRm4PcEz6qjTBJE6LPCx3myeE66g2T8Gf3ZR1X2EyWEniLcoGfeMq5VMYv3w8kekM",
  "key26": "4ufZDcpE4jMLvTDfGG8PbBPCKVfSzgB2bC7BeqejvhSYozKEzcQJU24SnGR5X65vuSrE94eYnW6CZVPvSdebiqzy",
  "key27": "2Bab27vRAQjDWaRHFkkofDvBMkjtg5W33wTQhtjU3cYjAheSUekkzk28ogBi8wV8reUb94UuCcQFfhJcgEF2xQx9"
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
