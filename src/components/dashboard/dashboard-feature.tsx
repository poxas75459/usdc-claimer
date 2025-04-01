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
    "4GXe4swoVRjNjDDoiScbC2WYPxm6PhkYDzeTC2BrbYASH6QnCPqAzLdAXWPQfutZn9ktnQjZZkQSvrCngVaXtvj9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g9jRvEfLxN6BWi29dkraHSZnNHbmY2dP9oZ4fiMQUvvq126Wy1pohP6oLRc1AjbniwUQ1Y3E6JuszWuDqtVhtoJ",
  "key1": "4SvahLXrMJZRM2q2zNjNoByauji29f9ZNU8S7WaRNKN8h7Ajq98aPDwvimaLZYP7sGjraR7s34Js78jtVPUXHMP3",
  "key2": "3FnWPWPcavSHs5Ti9a6BDzuxq3WQmY1pbeSkx9VbGfSYDQvQvRsvfDviSRRERDeCzZyYPdd9iXp6FUvznDEGP4V8",
  "key3": "2twiSNUg4CTZwtQDNfUSDP4nMhcbtkvVZvztDip8s2QvE7R48BHdh27LkepWCe8ZUA9UaVYeMzh137BS6p8L3kEg",
  "key4": "Hwbms3dEoCxVb5RYBc7EofN894abVX1FfwarJnccNqW4gLp5d42t6sdHQydMP7BikDoJKGFTdMayEP77M99qGro",
  "key5": "4wmSu1ZyjHYdXGffjWmyZzEHBecbYtwUdoAyq7Ha1iQmxZNhiMnPyhXzqFVENLMqxYBiZgeYnLHPw6uE2S5wB7gk",
  "key6": "4P6G5PYdPXgMuw2QhRQW8xytbf6NhYc8apHfiBxEjh4CK4dFKQJguwhj3t6scy9vrn7SK5Nnx4L9hX5nDWthYuYU",
  "key7": "4pFUViESfcPnbprRBg6qL26Z98ALNSwaP8pCZCotNfh6NvV5hMXxXX6fA6A1rDVRTKTKoR1Vv9W3MPGyCz1YQNFg",
  "key8": "4QCThQenyGWero3nPfnfP6Db8yseRA2AzmAjJDtNNZStD3tyVhL5XtSZ7qQzDKkc2u9XzXfM7PdYviDQVVTDfREo",
  "key9": "3Pt19zXQXNrDc8ho2fsRqRFAfwEo3SmyEjzc3rqCZt6DoiQKkxyuGZYr1UhmvrJqDGn3N5GDXTiuLArYPuR1cSeY",
  "key10": "5WP9W7rHkcWWxZgk8xozoYx2RvKQVptDhBqJ45ddKKx2KWQ3JLTdrGF4xqD7hnk19xoUMm2JQBdiA8hxET3bbBQ8",
  "key11": "42sFkRKzG6QWFtFoZ8gNFub5zS3svPLVPWQUXiHQ1VcxE7YJN6KE7aYp4cQ4kf45hUstsZfdGiz9XJxfFFzfZZPb",
  "key12": "2ydmfdtsD4pgKmAVCSNufGrnziMt6foarvCesoEKwpY1P6RuniAr1B51Xw9WMsJ38esPh7vgmQ7vEmnTMpscftVv",
  "key13": "nAXCeVTCVXhJkScrsjNSD2hMHbifTANTdyMjJWL22FNxqnctRuGLQeLGwKPdiSRqCkbzvrSQEec2T4EvedC9PTp",
  "key14": "2R6NtpgrbwmRZPi8xL6hbBwZRSh3Fww9Kg4RE7Xe9jwWZqJrtvu7kuzUa4jm1jGMv31H9vJL7TcPtqAezYoaw4fa",
  "key15": "4npUBHSZAFzj7EqUPCG6vnVVzDZNGk4h1k7qKsp8dTgsF9M5a52UWWB6SMaXDi7EmbHyHNxSwphZdHnSctPAs7MX",
  "key16": "5jLmWXvpHMFKQqvSdB3JA2nexDsYrq5Z5fovhjoKwDV9oKySYrGy1KECaZPSfugpmYQSffD3jxc5ijcbFj4oLvge",
  "key17": "2NoJRFGpBnZKZckX3d4upgUquiFtXrAWduWUHdbSMSSYSjTfjtPJrPoHVaSRkzBboGHPnqXioabj9e9r7e1xTwLf",
  "key18": "3TThtV6EEE3K2pkk5j3Mnq4vMnjcEUdhTuUUcTuPpPdEPuNpapZ4LjNpBp7NZ1RfNovWfhPEwiEchyB9ALn8BTmF",
  "key19": "26xgRfrmxR5GwLEeagJEif86GZEd4BhLAnqQiUz3rJgKc77xeBEpLRUeRDmokmDaoetzntqyX9uaj6YTnoFT2RFu",
  "key20": "5Fx2CigHqcBKczptnJiVJghLD1meajbbMj7Ltr6hchjn6pSQCCqd7W1EQcGufQXzBks4NQSug1ZohXGD9JKq8hsa",
  "key21": "4ez28yq4yTiLvsWQuEQqom2UBbhfnvuXVXzxQsQe2C2Q1gcZ1ogiYiKQfTTB7iHgXKqCsXpExjNhanDsJTZdU7oa",
  "key22": "2uDLm3jApApLCpFuxzNbxTpHZf3j9PuEVzcqx5cFwZrRmSVjnJKr3AvzL4F7hYko4f7acX88Zrkd63UCqMsFJzsp",
  "key23": "4HDSqFHMkrNGyxMh1ir2dE9uoHdkuZgdxFcqhXS52KXCQ4r23wYoAKWv6jtZ7NQjq7zsryBfm2wAj4VBvKxn1ZtB",
  "key24": "459yx6iqkqoPQz9Q4Pvh8T2CF26LCcADdD9uPz5Sehvtmvdgj2Sz6QiVWvhSBeeW8nC8cheo5VkQViwvPzEgUEV",
  "key25": "439qmxKrj1HR3u8ZeJ8FeJUngfv74MMda7xLzSjYUgGftFdDokDWzsoJiAA6EHmkZs7myUsNgJwd848HfTyqohn6",
  "key26": "5cGqr2SfGcR5Tb6cEnWegjLFRGd1NzNmuGGoK16arQW37bLaFxtn8uKAcCZFMMeNvUV78TYZbrfG7hRh9dxjFYjk",
  "key27": "5xYHbGSerG9W69yzwPr8eZ15mr83fRBP5oobTnQBJNWMy4TsJkLMX74birbUk4NBu7eP1w6cBqiRs7uZBs1RhuGa",
  "key28": "2MHaLs2kVit4xNypBCYJqJemoYeqP39yCQxGuH2wbtH5xmc29TzrEAj5ECh3D722mzHFRpir6zeSsQv4afxAY53t",
  "key29": "5RXi4GHR71UW3nwewUFtja8mBuCSmujjopMunZs3nBAXhKtEV7ZpULzGovpivuS1GTEdjNkuSLACXnt3JPcoPmcn",
  "key30": "dX6JQXNCat5P3Zdjs2QHQooJEvpt9GBMRUaJ3T3JE4jq6MSXodPAEGrY9Wg13pnu25KEkCwMbdYvi4mS1i4RpES"
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
