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
    "5D4MNnqDUDLj5fTJ5ei9Fty5gTkd2BtTeqGNpxaCuG7vZKjk7ykeGcWJdmGrXBGwqPBFNAVcEbhCwoPAMrETYgWn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KyjGbLgbPRXhAXj6jMeEFAioD3kd7UgsmMJVTL6Lzf2gKrvUvZizyjNe1QWHyYagw19TsKXn9qeXUp6aFbsq26D",
  "key1": "6ZYbXVPNMk84Topt252tdeU5cy7NHensAMRsN94RfAX7YZiPDpHmqiG1SaB5v81JCHFYSGVa5EN5oMwz4TqdD9S",
  "key2": "33281BhVDuDWsMog1PrpTXSPGvGxr6f64Rvt7SZ2zHJnNrzPKutsT6S3VdUVe1nzhgs7hVdqSGoQbfpTp7bunMK2",
  "key3": "areDDCVUZVRHw6ptdP8W1j1NAurkNXA97WfFWi2MCAp3vTXUUgyDN79XJYezYfsYZX5QxRbVrmRmSNSDopWDXqi",
  "key4": "5wKqiCEKM9ccbxKSJ6AXxDyvBynpv599h5MckEfm1UXjxvyXZCDZrD9vrVBik7JUAVMAq5KHX3n7ESfUTS5Y9z1v",
  "key5": "2ZjZnv5egNiTq4asZ8HkBnbDDuku2KtQ2JWPukDpxMKBKhcY8oBcj4WX2WCEHZRe1uZzFXsvHoFzrY6PNxsgMYvA",
  "key6": "2j7ydhBA8AaGk8h3Xmarcd3dYiRoRbbMGfW42pfBfMupfyTVkB9D3EifixdBeQxHmBQXYxS2yfwxEaLpi4GWRz7a",
  "key7": "5H1L67Q1BuPNqth3wtWG75c696JJLbiWB31frzCz4S497kMLuBztd84icVM5NY5K6RDS1tiKdcYHQBhjtR7UnV6m",
  "key8": "eMR9ybTWp1rz9mUcXQMzt78tdzpZbE7GA1o2Qs3gWTz9Kf5nypfMzbWrp1Sgz729cdQCGxMA3bBFfJcj4Q3LQHw",
  "key9": "3ZbohMCvyBMMQvJUEHseNUQfYs4stb3owMzPRMrRforjB36oKSTQpXWhBacwG9f2yLcP3b5zYdMkugT6ema5n3vY",
  "key10": "52xceW9fjALuuoCZQGTJ7zTSFzxiRDRB7kHSFucAiAqquQcvAKiwhBNTJqpy7y1sTWysu1ZueHUd16nbYUenyobg",
  "key11": "3GKX4MBvnjGgZB7MZHRt13byGLFE7br3uoEhnQoDCpQvAMHVqLGsFB1akbCibtZCQNUmfFGaA6Bwtmbt57kx6aXU",
  "key12": "3yb4CxVv5UK36XjY2UGSuJ3pqv2KXZjtFMDiCPYFAyJKNBnFioP5sM7M9BaqeGkKptxn9JZhRTgAP8h96Hd9RR1Q",
  "key13": "2paCs1HxVwjviswaHm785hDPdYcchCA1p7FQPavyFne8NG9UfLDAu6iUwhsFDzkAxZyTNuX6Fvg42NUGsf1CAVcE",
  "key14": "41t2ejN62SfKtQf3KbRKnBcWuS5ECC5c3QUr7dYKrsmVXDxkn4Y5BoN7Zu9RDbrdsTTyfB8LYJHwbjU1QXi296ed",
  "key15": "5Rp9dLcGHqE8dMLa2Hh7JYNNS5tepxxE5SCGHP3yT1dswGCbTCPbDWKFSAPXVEDfzd9mcn2MMZxuATsDQHXNvvvA",
  "key16": "dnwSo3o2Be2AFGzw3wrmG7KQw8CUG9JappVaTM8GHBLUndzhuCoZ1xUUnyDk3xfTEE8HtsK6DsiBuWzu2z8Hr6R",
  "key17": "3S8wtws29GfVZ9U9fqBK2GnCN1bMztjvQ2eYZVwM2CbFnjUNn3jofajdKJnxfo7qrsoyRmd8j9HoQzcLMrrXPg8E",
  "key18": "kFjvN9RntuxX3sAd1vpsBd2qCGtKN6CDj6JSAruz8tLB9whZF8ERrEBi5NRnwBbGkLBJKpJEeawigwtBWJJJXGZ",
  "key19": "QRnWwJyd2fRcZeUgSeLy5g1bRjKqvmaSgbWxFi7Z99Mm1dHUboQyMdafRY1cRyPo1AHXJxCjVqT4bKEzQm9ZUJh",
  "key20": "4cWhtUKfVPrLTvUgqwVbaprX2rVCv7SyqSparHuCo1XgAtXf9cDGuLmWhxXuNkKT5iWpjyyj2zrFHDd7kARbpayn",
  "key21": "3bPXL6MgeU8qbVRaa7ZRoUSN7vH4vJwxy5ruwVVv1X5m9mRzosmyvj5yfV1x8TA6B5asGmRZ4MBv4jcHK98cn8jg",
  "key22": "4uTfK887Lu6vCPKd46dGDxhHfbunJcxgTnpuQYRZp2JoKxVWtco5jzrmSFnFKPgFSw5XP297fWLmzUFpQuao8ZT4",
  "key23": "53bMTHpX3nywFm4ZHUMpxcYsm1XGgxEUT632QuxA8z8GiNt7Stsf89iLNyMhgqcURnYmv4RJHgJXzVEdXTe2QL4F",
  "key24": "m2DYCc5poVtnb2TLcEKXNpPJrSHHugPoaAi4KwQkMNtTAqrDVFXwR9M1R95RRFynw5MMrQwDY6p5i5o6z7yVZsz",
  "key25": "4uvqnWerxWDXLCJnGzuTLxiwimuW49GmwPTeRoP2Nm8JaB5o3UQ4bnyPS1ZaqYsEmQpQYFu8xN6b4RL7hEWnfoU5",
  "key26": "5EHZEyfcYQhMnEfdiHAAWiMa1oruwAuDZYeUkAvEuJ5NpLdMVVRWFSM3r9zhyUE6PoAqxyJRSUuJ8pu3TSc4fzF1",
  "key27": "eu3DmLzKq2Fch18C9QZjyDrDgSPiBm3o9Mo25evwTdWcF7Rdf8f5D4SgumTCo9ZNv6RJQv8eN682V42iWv4iUco"
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
