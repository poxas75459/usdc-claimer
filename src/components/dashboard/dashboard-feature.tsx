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
    "2hb8D5NDMYPWBZjTzJZnLU3VuNcFJ7Tc7MsCqXJiQw3ZNu4W4XaxYtXuCHfwUy8GCGkXAeoAj1hczuv47U5SvrfM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4976vKbAwRfsw1YsjYvG9ar3CsH8KvkgsXBP9XdUbrYGKT8CMbLN2d7aqsGVCQXCExmfp6yY2UsjsS7RE62BVE8Q",
  "key1": "2WEpfoZ7FykDGxpau7xAYxGiEpVarYDjFwpyzbgQ1gMw65es7dhhncKvW5xH6PEhEnKxaZZWbuNGbW3k21GXjLHV",
  "key2": "4NNCcmfm6gCgSqfQxAcWSadVLL8NJ3woND7s6ZSZ8bGTKjayoSpWRbHBSg3PnDEmmwHdmQ1PYwe1qKf6k7tdL7cZ",
  "key3": "REioVSrtqckV1Dhw2dKkPLgDRPmTDRBbvykyV4SHxabsRUCrNQbrc7iJLfZyECcctqTp5jmmLJgGV6pdfECBJyA",
  "key4": "5mbmddSPHEPVfTj7UWRCCVbowHTJSy97PTbDFmjh6L9FNXxnL3Toxf73wCPCAzsZvXD1mWDz2M2NkMLYzreQyj7M",
  "key5": "3Ti4Xwswa8XvXhYGqaj2AQV5N6CRwmeTSKUtdTFegbfLZxnschcGxJCWAcApJxmmJgVQPB6CkpWyuT1eJckMpX8a",
  "key6": "5USi7dJ4A5WpPbtFaGy9NG3wFAKrC9d2ydwUaoymVecBhmsRAtFbjWaorUNdJtuVBWF5Sweq4kPhHpUrQ83dXEaW",
  "key7": "5LxKp3ctxaWVrYSqNm4DxaU9tem5cuuQ6Jj2b8ceazCgwoDP56Nma1tFd7F2dpVwzACdRZYH6Be3RvNLVd6WHAtT",
  "key8": "3AnsvJyBFes5rUxacUse9k1cYSuKQMYpFxgaRkreiZJcc9WD2FnDPF11PxNhLEw15G8p7pMRp91Au2URey1HW8yY",
  "key9": "44Qm6WhP9tiJPu32UJmfnPwji8W8i3f8tdZB8fypR4mVcBqYsiJFVkC82B23Zr3P6HmdDxGkEGFArvP4pt4hStw3",
  "key10": "3eXZTmc2WV6wMPYPUhH1Vu6jBuJJuZVSpR9BMKASoj8feVC66hvY3xxmQmMPbph3FjbG3QyLEKrejjCRzMUDHcGf",
  "key11": "3sU4AbCpTqbC7BT2QP4iq82yzdwSFcGQfLojTKkBMh9iTuExcrr3LWDzCCHyHzHgxFLHYU1Tn7SAhXZXDSgsaPVh",
  "key12": "3pHfRFAQxvivFTSrsj5yfZ57n4yDgVFUPmb7EyfSg4Q3KYribB2sjpsyzPC3MxNLqYZjHG5AS4b1FhbryGtm4XaM",
  "key13": "2quGY28c2Aph9wxuHCaVZR76uftBFzTzmveLuw45CqtY7qHnW3pgDtvGnooDvp3uaJ7kNH4TstAvc7mTvUpAZN88",
  "key14": "2cQ11DLg2uhRNhKSeYsQrnNxLaYX8d6TwMvMKfHSgk2NDhFNmHgmPxbVpMt9e2k1SWWDoCihistivWWVNejMFder",
  "key15": "5fVB34TmQHWcDouvzmxUDUdNruMpF7eeSUkiJcvvXDpRuHkCfP1mDZSvrfPCLoZEo7WABnwMaNbrMTQ1QC1iUAb2",
  "key16": "2VFkGBMorviJMvhFJnYwWSFoCXqdyF374YCWeTR1S2SCpcU3Wma5Lo4ckAyw7aiNLenkKLjmRFEimgxBvtoq9DJQ",
  "key17": "4cHzihx58EpsQY6FW4xaTgguFTW1vuE2aVxghvFzX5eVgPCLRyvjFCRvz8ih8duBMwRmv8VVJpqujw3jVqMcGyy6",
  "key18": "5bLRSx9opext4y723XhBTuuqik3z22zpD8a8dc6215RXjgHc4zxoUFbDmZDjNvTjABkCwp81yBjx2zS3XnUUFx9w",
  "key19": "4HGoWZKb6KyFQfGCANnQC4thEDNr7BMh8jAPmz45osDo2DYy1R55zmQEG1QYsqv3724hTWtiTbH9y5rGdAduHKkU",
  "key20": "5M2wbCVHQCN1nhtQN3VUrhWagyhcqxpSug5mhF4XSAvNn6hhVFA1LJB6aYxLKgNrauMorkZ7GWH4y1SXYEVRPPMN",
  "key21": "4wR9ryt4QnkBJtngQUaRUUySMZetHdygekw3zp1xr64N48q3c9EJokzS8mFrq7NjHW39MmXZqWTc9sRa2Rqdjp5h",
  "key22": "4jyPFDbt1uEdKRdnhyoKb6CkBxcomjaRT2m8icKoGZdqsMGmJxJ6t5hPG3e1DPcpCP5uqkHeC8vUtR7dmqSWKshw",
  "key23": "5Wv7bWpYai18VKJ47wL5nKr6Fq8QKSsjP8ZWnosnvhJj7SDqezhSyUeWfKFiDQfJig4FjFbkPc5xgUVQUjp3bACe",
  "key24": "35kgpcm9W2mjvgnGgf8zgWYWup1RPVQbZsUujBFP53KVTsVQSvxSV2wwmvobxJmtxwyMDN129KswkhpSNQSwMTE4",
  "key25": "dP8Xu3XpiBRKYE2AGrF1Np95iddswu4LcGFz3YrTVVPowoa7xH2QrFv4Du8C1AqGAu2kVXR8AP8StSrLRbU7s51",
  "key26": "58WBy4mXUr4EyhwBysXouYmomL1NrV9kEcVhZW6YwUrMiCNFd7kAntKXwJL8744RmaQ9zVZdxjGVnzb9W4CshFGq",
  "key27": "5zYRVRZUzrrBSEVw2Cv3MHZ4gtt4hpCJzJjh7G1DNux8phHaKYRNdRdKjDMuMMV911TBvLcYujdQ8vehpTVcp32r"
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
