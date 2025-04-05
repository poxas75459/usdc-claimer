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
    "DikSo91jvrkemRt4Y8az2kAnMJA1s88ureHXjzwkZ36Bpv6V8RSYvCLp2ArvcVM4DFEtJHKHQhCr7mPVE7KPjd1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zrePaSEBUwQjSX9YU5BG9eBgrddHgwZTo5Pot1DeUMbjvYMyV8FH5mTerXxWjjARsbqxG3pqGTBKvDj4oji5DN6",
  "key1": "3rtQsrFEbSCL2xZbqhWqp6pb1HSuHHF3j6TrcvWyLxT1os75X3jpNvdivqGCVR9BnNVot91HwcsdEGAYaJ2iuhge",
  "key2": "3DnU4CJbKv6mA8G95PEGBD4SgjtLXbtwojCecxnnRmKqopDgXepkg6XtHiofW5A3spsT5E9382rPz7ivBDatKUhn",
  "key3": "2MwLbikXQEi5USpgnq9QMNMnLTSJbZyN8SCFZEMPYfBXfwSZEBwQVprs5Sh3SRQ7NipURZCMJNbnQd4TXYBkUV3X",
  "key4": "4TmBoGFZ87uRDcpebFWSfwHaKQSbLgF841U5VRwMrpLsFkzX2RSR7iBeuJykuK9VgpbXMR1jreKxYnJzaV5oPnnM",
  "key5": "25SLNzHzmhsrToe44pbHX6AWb4UdYeNrxfhpeDtcXeWGfqKiQVEBsPsmKL6m7935XiEMTeF1aQ6Re47SUkFJUxsd",
  "key6": "3Z5MkCJQgfHL5AMLfuv1dWhUhJyDUAdwzEUVPJhE4iJmBkBmrfjecvfLuzhMute6FPhBCLmPf7BqzACJHqmx3Ewt",
  "key7": "3g822gtVizYY68V1ZnwyhZs2SeBCXMVFcP1rGm4HeFnW2nT5oYSf1J3LJvY4oTG9Yo8qacWKHnVEu7rGvWPM2fDS",
  "key8": "5TSu7P7YsegfsbkLC8fnf4wQVUyEsgf5ZYa6cUztrBpZQCyHb6sMACZi27eU12s15B8a64AeVfzE4oFSxrmWZAzS",
  "key9": "2zY6yDPQWeK7wGzhn6DVxS9rfGat8bYj2MrZeNDar6B2iV3jnhWWfs5xaBXKM5KKJ2RxRccCymCXqqZRAxE4NaSa",
  "key10": "5Z6rvgW1cDjH6bqw858r7tKGnFdz2DKJnmFippDB5bqXMif831WunDRCtJ49ivQ2gr3swbJmTNEDxrYazyxukjaN",
  "key11": "2rhXcWgQkv2b1uME7qsUax3e7XS18fuKXET3rPEyA6xoh2nNPWfxaPwb3TbqkjsrZL78z6ijBhtdDWG24kZCJCdi",
  "key12": "2JpFqnsugUfz5AkCMeGSdcmRhzsJw1Y67SVkWokahy21Fak3KUzd759ZTPXC6rgZCKfWpvPSAGqAKYHVQ6GTqAE3",
  "key13": "CVvNfJu4h7dHPsS3CegVgoJ7ENf1FKh1DTJrJWJVzpX4qAoLy2Brmnv9rU8kEgbK61JrdwX842UCxkKcE2qbZ1A",
  "key14": "hV8WV3kFnmkkQ8uQHPVPWHxHafJ8kTBk9MdboJxaPS6dYrym8Pv713XZRvtWYiNVNNuydzJLnmqTv6PzVftMm4N",
  "key15": "LQtB8pS2fnvYjtfXcTYAmq5RLbZPDD4R7XFE1P7RjAzeCMq8xRYiwZmPka4AuidpmPWrMLJc3D3RaC6roD1HvLh",
  "key16": "2AzLk8Kuf4FnDDyfz5CPZxGMCV3pKvUr55n2iE8SYK3XDSaSorKucGGgNheLhb73JbuytDRTSZWa2PtY7Sw5JtUB",
  "key17": "347BJAxJNVThyHpakVEAj3BQmRsqjQA5cWSREEduJBsQpz4pmSMSV8RvACAngPUzktHAdfsdZBMTMCY5nnpDZLud",
  "key18": "3mZ5VpyRXLN3AziY31H2GzrCkc8DkXhVLz5qhpn1tu7uEaLEb2bmEbs3HpvD9FNg3ArwPWye7pbku9FxjfxbWzCD",
  "key19": "4PqE7r5PokPQNdQhR1iHjSx5MoEyHA7Lkif8WdUUisjhaMYWbEKB8gH845dBBwnr4YVZU14uKHez1Y6M13JQjztL",
  "key20": "3VneAtKNRzMQ4xGfcTgH8VNP7YvLMnX2Cx3GJNYYyFPzXebJmmZSco39Qsx2w96458L6a5dy8kep9dU93anGeANf",
  "key21": "48ZMRjZdUMNq7RdtSQdzaDErxQhf14Lh8PE8bHSbNd2g9eHaL8Ywa85CrdqWvM1xAiCmDKeBkENo9HNKYD6c7ZEQ",
  "key22": "5GXuCfxJCL2FAi7763ZfnXk9Ga8CXoZB5sb54JB1nb3rVvsf1Dd79qGygjAwYyisv39SdkYNVr7H42p2ySxQPuVH",
  "key23": "3Varv85H6FAGs1hr9mLyKewhPKnrsDooTK38K1sGXJie9hfykSUhdrCUD9nB7F6MQHucFSbPpni35NKg7tBx9XbE",
  "key24": "39Yb8m65r56gvekiCNz6HM5f7o5pgvGRmAdKAs2iKJkxvST63XLt2o9cySrdgNyCk12n1S6wJDkAx9YhTZRPSb7C",
  "key25": "5gbBTPaAsrJY1Tr4kAXHu76UCSzjnNhAeRWqsAzmBUCtSyfudNr84ncWtfB3WUmLUFiS8WszS5AGZERYvaiwF7oa",
  "key26": "5p9xdzN1q2vWV47QdrhKJpqgjLFswTfzRvQUpdMd8ryWx4JFwkRFg1NERbddkPxDwr2FRq45PTTV6XERTPuQcm73"
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
