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
    "4BF6XpCmppLt2TnGQbLxSL7hbMJHS12HWBVGsY1LLVLk3L3wxZGCSRGScUg7AyPmoTckdzaSFJ9JMTQCvtJfrRgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JtUG7ztTGETxNcbNVqTxRdLQpDUacDwnP5NwPXn5ZfRrAA2FNCYgWiLKJ1My2vGaNEk3XhPgVpaPx7mnnyH78cM",
  "key1": "fXb8BDZxCnfWyqrTY2Atitw5z9DdKDRgobjxZLKiVNdhnddu5uoS7NosUQ6v1EuhtLfvzBKv4GnxrTYJ9Ycm6os",
  "key2": "235PLo1cb84HRF4vSfL2h83zAQMa8UAbjX1siLLGWn3EeAiGQSVd75yyxMoSyvUuxNakFn3AYfTq3suqduTMhy4U",
  "key3": "5aFB1a4dwk2TtRgqhXjjpNqQFky1AVYxVHwpmZNTrEP4W5Ffu2FjKLwt8htGpnPde6JN8qaeUeiMtQhMWD718jq1",
  "key4": "FZUmtHwTy21CoiueR3KqPmuje1jWA2Tv5C3Wqw1gpc1kbdc4j6inL2U56EG4ycu5FSUqSNmrtHC8CMWwZmcXA9M",
  "key5": "63oFzYwYeJfe1cNnmewBxgKCCtUPa7QQvbaFWAQyrSEnAh1ntVp4YavVF1iKE51PHsCQwxbMffMvMZzjJdNjELcm",
  "key6": "4xyTdpmejDAn8uTgx2vPZmS66sgL6hyUUmXi5jGhzWry3ZmUiSQjZQ5XajYpH2WjUBC4gMqPepcarSn3yj4wieSB",
  "key7": "g38hG13w3BBGH1JxFaBYLpkcstJi8i39cUXDb86i5g7m1tC3n6zbd1uC42ysTRiQ7SG559Yj43uwU8dCKsy6NLb",
  "key8": "5RkSJa4V5shtQbw8CTzoJkavxjHYybUYtFSm4FhkQzQ4JrUac332QDZBx8zf8fYYesQqddqAsXgX3joHryYxEdNW",
  "key9": "3Cm73fdr99tM6aUPWQZdpbxdrEXBdggx1ato4PJKHzy83ZpCqTyHvc3mnu56gae8XnwpGMJB6wqkzo6EWmYy1Sej",
  "key10": "3sWzJyp9exMs1fhbrJtRq68gDbnQB9zdrHBpvdPNnJtu8mkMaygoNPCLFCjySqFxhyeS7bVBefeapLoqj6m99CfP",
  "key11": "5PE9GyrL5yLxrSZb4UrHZS51uYtXk65wTazFx24GHEQDfi5fBfvpLsFe7N5WnQHwRPH46LbA4y5m7xbiDHSYxuGP",
  "key12": "2dG4bJEZxP9YTDfCEyWQESneHfi8sT6Mq374A1jnmMHPNnh4wyXLqGzhuQogZw5e2Z3bJBETgajJS3Pm7QrmyNvm",
  "key13": "3bSf9DCPEQn7rXrJvzSumMJ18vquCk8PFYRR85zyCergdYYU9dac7tjtYfCb7TrmkxwiC9iUip1NrdbyVQtj5wya",
  "key14": "2uohXAUqvAq7i97U9nPMB2NFX3N9egSdLHmqkQ1nDZFkKBbLwH6kgLKMo68Z7fgejSyccBC5jEwdwNtAQSkqSEVA",
  "key15": "3g77HPr1jWyQa6wfAgFTFZYngLRktCS1b3mvYf8A9H97D3MQGfC3dgbAShi9TtEbPmTBrLLLdxEkH81JcU8rpGBD",
  "key16": "5uvMvYaiuGbUNHvusWLr2yBLJfhwycRW5TpasFRK8JtYgA2px2Frdf371Z6dgsieVwG9ZpZpR4koUWcneLQQhNvJ",
  "key17": "3VZcMecUt6VhVBKgUEYixvbZZ78ikoqxXMgxbb1tPCJ39CY52uo29uU6VKFCpLT4E7kztPbabuYxYGoHVBJ6ZgYM",
  "key18": "2npjg6eE3kBMTMqx6HFvXyssjtag33RgMpx85AJGtn5GrSHj1VN6SbU551zTbqRS32g4m9iBFKyWyRmjmtWWAd2i",
  "key19": "qUStCpL571LDZLXVYMk37Fug2JdpxkGGtQ3UFLxkuJ6S8xAR2JVRFEn3tRZzpgCKDuUrcd4QFNaQh3cTtfPgm4i",
  "key20": "2Nj3HUWkYV4kCiKcUxqPsk1QtzKTGkjTrHxUMmgWBcGdHdSAhYAGqSFxBBsvFUAbMwUr8q3Q5ZkRLDZEy82SjhAH",
  "key21": "3hy7UQ6bKQZP9uGjhnyXkRakT6yGm9TTTNSY5MayLx8pP4ZhXPY2vKtUeDC51js3jGLaUqcDCy1Ry77ixeQbTDub",
  "key22": "5eXBh35wYB71bfdePmeBCVB52xUYbG15SjQ5hojdPNvWPgMi8EU9f8n3PLeWGmsVmKX1Wg2fCUMhmBdDGA44zejp",
  "key23": "zKymDmifXnZWG2H7gtiLXnzjP8qP1dMZNvpLyC8Pzn1rgoGY3hwFvX7ZEW9J9cjwwbT6fjuv3uNf9KhhGVBq2B1",
  "key24": "2FaFh8eUeASyWQtRUrSwDZ5VoPV8AcHVkGsKDb5wfZkytKQeni5G9BiFZ1W76cRZBiPVpkuhAQfeBPmFwDdyDirv",
  "key25": "43qd6KuEFFHsP3XaT4QHwjv6errNao3tr2VKXxSZD3rHzwBvP3tCVB52XTZtNcESw2SAhYikRq1mYrjzCa6qfHuN",
  "key26": "64zbF5bj6U4VpdT79jtSYmnt8UBeR3PHcsXvuF42n1VP3mXDgNmxk3iDyCyqGACDeNEdPdC4bcT6ebYWSc8gW3b3",
  "key27": "4PntvccBoHJBfBVaiSnLh1zAHZAu7WCmUwbG57z2NmY3nrw7PHJbSeh5FdWHEVk8fPt1jdH3WtLjR5sYdYhmvSg8",
  "key28": "4Eyd1AeSsoAT5iFw1k2ikP1SvVLkW9BPL3yWduke7hTPBFU8rYSwP8Fr7nrmHri8PPMVa1vyoiJYttHXzZB1YqXT",
  "key29": "4ChTwUbWwxaULJbCwqyDyie9V1Vd2ET9j3RSPJ5MMWE6u7BJJaDJE9VioUCfXZU1V4frSPZjDND9ctFLH4ux1DKd",
  "key30": "4SW6imbP3Bk5KB9tfmCgpQE4MsMAUq9FtRr2bL6wuVGwdmjNdQdumn9uyrXu3QJR47smZwX858rVRicKpQqdUzDj",
  "key31": "4TqHLp9d6P1xtAZudAwCGFkXNqfiYc3WMsQtnjc7uGnu2VCUwmfbVEGgnZvp5Ff18oJsyG6cRrvZUuok3oJV86DK",
  "key32": "2aYPqkNnjfr9yDt8fYDRLNoj1qzKfpVVqzMHthMD7f3mR5PQzsnqdomC31rFgcHVL7VUPzYqTHEraFeQ4QWR1agY"
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
