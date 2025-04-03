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
    "d7jaXYdbzjdDcWpp1WyftKYCUk5ziyCbpPCCXfSbrYHrDBvnnyLfbym2dEznaM4pi5bvYU974FRXtjHXvCHThpS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wVW71nTXfPsSCBqA2ziUVxWpVxqR6tdesbdLLr8KK5LWe1Y3L9TxiZ6Ai2EkakwrgDAqDaAhXmrg5bvKdxoP7J1",
  "key1": "PST6LnPnH9gEbYmnKwnPqcU5EjJa2ygYon44kVeYEpPwuVXrUQLQM5kkDvG68eHyYdSVvcmyyRHxbPB2BuuDPax",
  "key2": "4MZDLMxgL3EWdmCz5RGG2dxm4cSox5UKGx5WxoL7JdCyiwtHPe3mtdRnFmr7Gz5AQB4w7UP57gULR4yFoc89UtsX",
  "key3": "QB6YANkaRNUYhZeuLoeo38L2fnXZe7roNgxEMgm2uej6t6kEufE9GkuBPEudiy2zYWpyeXm5vd2zhveBRiCYpFZ",
  "key4": "2EAqYH542fW4ttWvJm57193KqcZPPH7i3JwgU45CrWynqmxUnhAvKPHC4drhNCqnGfwCv7HhiHUfQCmmNCwPth6M",
  "key5": "36h21sxqu6Zv48vqvnSyT8pxtKAVwFrrdH8YGZ33N264gPS7gijrbnyxSxUEzFuSqPheVvRzebpqXG9LPny5wUsq",
  "key6": "4t2ARN2X6ZRFNA4QKjENrWxwf5kP7cQ6h7SyXdSJ2GX69xvb83M1Xh6BSwqGEcui6FDhv9tWy9W9Y7LazBy6eByf",
  "key7": "5KeibzbDiYGGXqmmjc7MbDbK9LyA7qNBo3v9kDiP4MjuW7VdFSc7dnmrXrq2ygnSHwBTWTq5gmFQz4j5Q58SC8qH",
  "key8": "HRzekyn8wmnKcDPrhW8AKsv4m36nVo7gidEAWryJeKE226YzY83nxgaYfuGhW4suVotMMqBsca1Jvw2rdgoFb91",
  "key9": "4fyTu1hS1i2EvTdZkdRwaN1c5MAHpXy1DKsbGDoXFjqFQxdwDK5pHKX7cTxNSXPTaRsjxGaS5Krd9GEGyxBtZkV6",
  "key10": "561TiN8izzp2MCvp3rSoVt3bTfkMheoWShK83MAk1L6cCsSvArBYexXJMbx1niDyKxisa3XrQKHwmBLVMXfxxFq2",
  "key11": "5jqL9b4BQW2aNEBftuAHSs4tmrv23CHp1BYwxYLyMc15E4LtCHwxAuPYYJ6QBVcWU65yHde7DgrvdfdkcHBqMZPb",
  "key12": "2dUCrzegakThYBhJYF86cXd7wmRjnizwdz9sLxcAY9WKmjgeLHWBNyWhNbHTgukhhLjnUZ3NZRoDvS2p6H9Jg3Ha",
  "key13": "2xZg89cpmHC2Je46iJ67Kq7YtLjZ3X1E3WwiBZmPMqQxK6anUeCa9QpJRNBcpEEJkhFsCEvbesxBWMhUKWKcGQ2v",
  "key14": "iijGPSJW6P8QVsYPvvEURYnWSfLfiRGDWUKFXn66VtPo4sGhT7hDcz7Aagm5LUUnrqs7mUF38CGY5R1dot4qcov",
  "key15": "2iCkwdGMVhLtq832wKrnea7dwYTh2R6iKRsYBBGdRMsp9thqivrk8txG1WwLAMDtNkGSzMFPn9Uzna2UrkEYTZvB",
  "key16": "23qury61ospDCEjiosHWuAjmjU7Ke4eQB9oAPrTCLW62yjNtJPSWj7Awa3VDshu63VR2r8awqBdGdZbZHgDzzSTk",
  "key17": "3RcrYY39y69wHgKGNhg634AodgzWVu8URMuE4QVLfd7LgDqBeZqpC2y7g2oyNJUexWWkbW79f49vSS8riWSYihix",
  "key18": "2hVFNoP683g7PLgdxB1jyAbUmphHADZWGiNf8XYccNPi7tDeXiQiyjhU8ibDLDYRGQExp8j7Sf4QaiRPXrHR5wmU",
  "key19": "4AxMEvKsjrYfJVAzbuDv1CauuXFtPUrEgHYp6zotb6pR1F82hd4tFewcVAFtj5dJJqVu8KqV5ge6boaThEJxVgf7",
  "key20": "uYfxLtBhA5NTaSC1921RS3JVvVpji8bcurmVookpaG9qN2RTtJUvhtfemDUb1qkL6CS2k5DHtbxJJtHnEGZugLK",
  "key21": "41y5tMKLuVzskA1e9FSUn2sErFZa4KPSLhZb6KZzSSCRh7U1LX3pTXgcgScEsDmPdZnjG7ZtqipvF4U1J6x4z9Eh",
  "key22": "3XUameonKzKxdSru3kqxsUqWGnQeJsBfr1taxYuLrBXehoYPWCXTRAJFsfpASTmo6VhcJ9h3Yuwo61fsHJp888Ba",
  "key23": "5LDMdZKEe8D46Rq3oRxE1aQxcNod8EVBmN4YBme4vXbDbf41bWm5DynczWwfiKSZdwWpjZ6cJfpmSbktSWsCCoMc",
  "key24": "2th161JwjfKUjgzp2omXZZXn62rd2gWgasB8TBzzAut7atauKqPJ2bhdCZB7SR5KCyySeYSNFP4EAzgfkKQuPg2U",
  "key25": "nB2nTdkgiEYMRzpKXSUJwoCh4DoN2pKKhwzZ7huqUHmcDqtKKVeawUCZHnQZb8ZhuzWpkDLcc99TCRv5frPiLBx",
  "key26": "cMm4gibNLbnD9dxWW9AxomV4QG2qAhX1qnXvsmVy4G7L4xihWsEi28i3X8em8QBrgAKvKcNVV4uaRi2bSqquNh9",
  "key27": "5KYiC9A9vvpZHLfiEYUVY3at5LJ9vL7ehUXJoUCL5xe2YYXmDRmPbty8zNygJBZr3hzkPbB3wzKzCencddGckfJE",
  "key28": "5Jau4bYTP6YWtN16SgdxyhGpn5QnTRN1rnuc8ZKHvHJwJz6YpzmECfciUr5bZDE4ACpzGThVHJ165nwypzxnTFoF",
  "key29": "2x65CjNxzgNBMrzhbaVcg3u6K9BGnembvh4jULXwQXGLdHLNPjFyWPxvDb9CMujkdeShzdgdrAUMZgf8XVkZxTDo"
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
