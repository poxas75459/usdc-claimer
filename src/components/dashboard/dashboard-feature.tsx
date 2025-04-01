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
    "DZN872p9xJMxEc6SVzKcVAouMJQHuQQkPgTDVRBLkGCLBeDmfbYmz3irPkPHHtkqZeULAqq2DmtvRSekWcoZvCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43TZgN5Fp9LezKojTZ7G8vMM4fUCeet9iYkRxqTMerJtt8ViguvhcWCoJXYJxv5bSJdxELv4RqegbgfsDnbbM69Y",
  "key1": "2QxfGi7vKDosbr94sXmkCfcPV8bBQcdcCayKAVxDk89WmhvtXVxaJGdWEAGof69NkFw62W7RUn9RUrxcgaUUdJcz",
  "key2": "5wHqcxBPTsYAZZwL47dPABHSeTGJpUXLNL8DuXLUzsTCZE6aZsvvHuCzKRoKQBVyjMTAnoRrJp9fJG9RFfXKsERw",
  "key3": "3BYf862PDv6Q81RsEDEXe3kiVnms4B1C7RR1kDDtEA281NRpQP2LeY2KQha36WdtFYM2bCGS2rFBT5rVJvTKiCAt",
  "key4": "4H7a3ArYXAj59YmE96uMv9jZQ96wEgzGp8aWrAZCost99pitVYj1emvcq5HESuuYMVNvq1ezRps19XLmyMXzahNo",
  "key5": "4633pg4MzFk1TN1JKuGeTZHx2jNGDvaoJMKLxYVYMhhcn153DA8JFAnXfrfQXu38yQaNY4dVrM7bM627F2Q8pNoY",
  "key6": "6izrkU2Si1Voio7nUbo9QVRUZnx7xwX5VejtUvFWLKMvkHRFU7UFdDKyF9X6o2iAw2R1djkCMMmmKCjMjPj4mMV",
  "key7": "4jDtJvaNV2U6rGC28aXwXzWHbYodbrmQaTPLhNSmwu2G4cUHqL9HZdB6Y3XwhkbBS941ND5agtYKAUMCc1aD4jJA",
  "key8": "2hEKLsZS1Vxt5Bbqh2B1duD2oXtbEowZeREvuJ6ax6tCzz3UaiXRtBMT6AGWpkeFTS7Pv1ottdkHfYgjUoqQjHdk",
  "key9": "2poooyVHsLRM7ewboZThwvbiXub6YZP6VjBGiUikWTccnrV7MRTk91zw5eN78NSC4cukuvES6x1TEvdRb7wEhGCP",
  "key10": "5oH4h4zgN6HWwt2yFhDHKbMd37pe5wiHbAc43sDpav6hNRjoZ7bijjtvHEUDAB9SqEpmxRcpMpRQHWCcnLkCCadj",
  "key11": "3uwY8M6HrgaLPNtUvcDMa5LuMLoLgzBJ2mbCtJ6XorCLZ9611cpU1CVZ8JubHQrZfegTzLcTsnaDVBjdnd6CyXwB",
  "key12": "5JcDpiwzZieDwnrRar8FbeEho7cQ8d3A9wCJ9BEXrHTa9Zx3XpXVQwz6EYJ636sMEdK35n8nKAUDPozW6QynLaZz",
  "key13": "3Ci9D2RDarDSgH3k99KDSNhqAFgkgTJfr4C51ntvkwaDZakz2YLBRaFFsfdNnZgz5zxQ1mnxwTNJAyqfCfAwDFuS",
  "key14": "mPMmV7XFenFQCAS1WGniYJU53CZ4yLkqyKQAESZZpUQuHCkuYzgutXfc7nKy5Gakgg7pMpKik2snzc7XRtNpL3x",
  "key15": "D32dSQLNuJeivxVMSured2rjBE3BnaM5YXsCo4NuZ185Ed12RW4MBnvMP2hwYAZ7aS7LGCDMHLgZNTptvHNQzWi",
  "key16": "4ggkzAVL867FbPXkFtkbkTh2VcYjKq8WrHToJkdAo4cN5j7UG4d65AcpgRR2NTkKgBv2ByxyBXKBxSzAG52JSDEx",
  "key17": "5oNjgzG9JVqD1n1gyjRvkRExdNNVMvjfpB9Pgb7ivdFutQxgu9wKDAfmbMTaGEELAYHkh3KGUTyvaEt4rdazLkXZ",
  "key18": "48R8NNFwJXsYxovd6CqveEVrZQ3iD38L47Tg6kjEjvhggAS6K3mjvVre3JMp1eekXLMakABsPegGZr4xZ6Tmo9Sk",
  "key19": "5yqLx4W3X1d1RipHyoBEk8BZaNdsHcYpiiijnePZycX73NrRqyhujbB1gKHH7Q7DW8tGcRrWmLWteqqHFcfcR6SM",
  "key20": "5CzRPg2AsZBK7zfhc61Vg3g9VBEtN8Z9Aan9Fqs4v47PTQftS1S9fNfyPJ5wP7e6LU2ycU5dhprbNKrWDdoKnT1G",
  "key21": "3swrvStvqpQG7gCXF1vwk67J6JGFDuaRUEhQtzX3txUF5zALC3nLKhWvLPULUwHwiy2DMb2z29AcoUw2rJJRWLhP",
  "key22": "3wPx9uedmHd9m1tRgS7CYhsR85rioaRD7rAs1hsbkzni5o3qNYJnv1XYWkPGukxbh9hzfVoemFd4ViXHyNYHuDLk",
  "key23": "2uXQwFpS5verKRmxvE3wiJ2AxhmdykNu1y6pmegNx8Y4jFxjkU34z6jwHguDBgn6KEL6dKdLRS2xJkkcuNLoQRjn",
  "key24": "PmB3i9xmKkStcrnHAuM7n2ujWnBZeesUridt5xt6FniVKUdTiMLKyT57ksfHYJcyTNiSZ9FnwacnQ3WH91WfEDs"
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
