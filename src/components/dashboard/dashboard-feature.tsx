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
    "pxuGjEtBDCqq4FHHyeUcUXPGrAYBPpsS5oXVCmt7ngozaT7oAtCaT6dd3zAhncMGA19zRCpkXCXzvh3JzAWkBPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ur5RX6sWcMF1cs6ENa2ULHsmGi99KaDiQgDA3iFnuR81tQJTw9am4nABnSCP7xquTk6LPT3GMyELhD5ucCRG88a",
  "key1": "3VMiFbUTP3uqCAZdrHpFCqGmSn9P2xFSh5UTEkXG8QpfazmvDwAjwv3DdvTnBBsGe1hBrcJtWv9ahxfZdL94nug1",
  "key2": "41Y4w9WWuME1hseQd4ZrjoQk6fj2o5ZgXfZq7QBH93RhuDR19jYWVk8KB47eFXJEX4PCPyzabqubuJWNyETZhz27",
  "key3": "5eXfXecBEoYLskEjTQerBE7V4UcVQqYfeCfc5rtevzSttDfwLd6KQksecvaEuepz5kY2WBujBaoAm6i23ESpWTbY",
  "key4": "5GtDLHpFfY9op5BUTLK9JeSchMTKN1U3amgyobHDoNWy2RoSPCFMy4MLgCSSUsfDPAzgkk3nVE3wsqnwWFfE8ihS",
  "key5": "uwEUNPei1AwDxinbevCkDeGUKydLoQddKgzyqUF6xt2rViBU7GCcNQac8m6mA8fdPdriwSHY19zRbKWDoqdChB5",
  "key6": "2YcYmZjtF4Qcerd7R76uBzhunpQXnsw7QW2t4KPyfcDt7NkTQJGQDd4aMk572eTnviosUwqwHdzKux8aj98wXFiC",
  "key7": "4CAD4NFHtCLaLHWZTvJ7HDQjM1eN4GLmq7inf1rFKp1MHF3s6hdFWEndcW264yyMB8wDsiauqroxusdrUj6Hv5MW",
  "key8": "BgFbwNrz5jm2ok4Cf9M2265uiBVkfvsUjtenWfZYWcoLVRbjLC5hdY35X5PyLKV3MuVvu4xGqcy9uJ8uNLWbkhy",
  "key9": "3N5EEBA2ERM3Br2ZzHyVQG4jibAEsCGK73EzMayQPiQBXLft1NJ9zoG3NKC7RRu6BwD7SnWNKn5MPAvMBRUSEoU1",
  "key10": "RzDCRWbAT7wp3FL1ZbVkAxBUrT7FWab7PBQKgds8r62k39WiuKfwYtSHiaq9CvBK4eEG3LFKek8H3hojX5vFcJP",
  "key11": "2cRKqfaFgKC3WShcN5TfsCjZsvN8CDbcCisw7Je5Xo27DD8wnP6TkeqdwPox9LFeBcBfBXvcs93ALAKfyXq9pyDu",
  "key12": "2cnTA8A7BUU16WT2nYVtURJq8QbmVHtqq2TnL1SRDz3ucXNdc3Rms1JBGrwJsMmcfZrxbjGWynZCHFkZseLJMYaZ",
  "key13": "5D4szxLLyWftH9XjiDGUrdo5jxLJ4vyCHWCNxZzBP5HcViTZdQimazVr267tqVJsVhac9kCvZREr3PxuNmtqcJvJ",
  "key14": "4N2VqyEfuE5of9PZWRab2bVLwNVMPRcB4paDYd3gwmAz21BcuQUz8zkCQkvdSGBYmxH924tXhGLVy8yDceB6mbda",
  "key15": "3hAozgVi3C2TWHF2A2euC5W2JsdFUyDXcFDvrA9iMW7vGLsSVcDcSbiszqopjdPoE5wTn43pgHGfaQPQxykWNJnd",
  "key16": "648YBKZyiBjHf5QQjHff7dHUj4uKrZCjHvT4pFAnW6W2Yh9x1wbH5w25uPp15X8ZK8RHs4KAnE47a4S6BCeceJc9",
  "key17": "538EX8dGHVRGJEfeHLpvQBEAuVPit6PQqXVxXGLaDxhCk4tH1CGZMGfqSANcKaDq6h4AV6vFLvN6BrGMqUcDJHZg",
  "key18": "RA4Jx21e1yVjU6AyHApUvVP97TzD7u9KxMwhkUSTAoZ6psd27cnEheZkUWieRWoq6oNkKz8aRobeyYNT9NjWnNE",
  "key19": "3XxpHyfX1n5HUhYeyvvtWKZrg2LmNAuAkeSeBqmQyDgisG6bZsTVsLMWqWgEGeX6LCJPrcpUWaKo8rjw6g6GZoPB",
  "key20": "M2eBxes8qNHzU1CkUW7WZt4QVLqyvPELcLU4PDM2PrPKV73vd3yWnK9ogJPtV8DcCr5royESunqtxxm3fDgePk3",
  "key21": "2MRzdtxcv9unnxNEhBUS8Do2KyyKHvmGX34irwtkrNmyJbdsF83m4cUvuBwNLyUhpWy2qAEuEnfpGYSHEX699oR2",
  "key22": "XVELg3quT6qmDsMjd9cDRRTLNfWEjqN2in8Fm1zV5pUnpJpfGrHKSTbpKfsvw2UAWNggWvQEqv4vy38EH9Spyd8",
  "key23": "3rBdxupFQtPb1Rc2CgcV63foZhr88Le9i9x4doZs4GeWTDeqv75MVnuJMzoD5QUFF82oRRfNKZSvjMTPMDXbYdLJ",
  "key24": "4j757nRkjzjA88uFncjv4vWdVGFxsYDuEXqTX8Ykx4sQAwupqsT8F8ASRLp1ZcWCr6mA1H3GD67E8nJcvVBsmB6i",
  "key25": "wfT7z6A3ShfHxdcrGJHYeMaJkGoYcjM5fzSnHpTWpY3c6yhe3s1wQHgaGA5vLRcbL9ipeSdPSCyfQQoPseVJgQ3"
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
