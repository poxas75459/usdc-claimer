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
    "3iyG1P2JmkFd5KBMFZMaLP8exxE5Sr8Ka1y3eU9B5NDdkAFzhJYNwRWofyfBMaX22sT8aaBdTcSDV7GoN2eHgWqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "489nvPoGLxn4c7tWqYbeVdxmUT297Ez4WC2RHzSHySVEzty3oMjBdU1nq1dSSDD8TaWF8rjn3LdcTNmU5ouwTPrh",
  "key1": "4nqMjWAnAwtRSn2zXXMK8z5ytrFonj8kpsQM3TRorWHEvgj7goFpyitBi6hqUkhisC743Ba77rbrhUawtZWVLtu5",
  "key2": "5SE7zQ7SG8Bu6MBi964q4owFywBnQr2e5Ls8bUMxKfbxhcQG8Wz5Fsoj51zfSyEkLKiz14cETXjGa7XDe4x4DxV7",
  "key3": "62QCUxatuaa61z87FNDARKZuJDnqxFa3u7tRPTJKeY9ubhvBU3zJ2MAGXUdLfJ1SYTgR2x8Wnb9ZPY7YRBQb9DmX",
  "key4": "2awKzfw5dyWZBJp2S343tG2RYbWPnhzpVWi7Tu4f1ur6zfDeicote32q1GVtDotht2RHN6jPgDMsi7sAWcRYy9iP",
  "key5": "3PtKttw65sxzKJiXvCzRTU6oFBAfNfcqQjwAcdeuV4fPPEG9yWzuUByuWUKfMJ97DvdPHw8B5eTzEj9eYC7731Re",
  "key6": "btT15ZsuC2PB7k9jy4mKerr9LMeLaA19bUWrJb32Lec7ht6P5fuoBo9E5WybVzVMqkcp82bPswV45J2C7LubQYC",
  "key7": "5QniTg2EDaEwqofU3efxUndQEJ5ZaDm1kRFJgBVcuGFbHL3M6dHd8HGQTk8zTMjSZQ27Nv2gwErYdmjTSRnTAKnf",
  "key8": "2zhH8DDBzRkR7PToZPfsMWLkFRFBjpLGrw89Atn2zTm5L3E4vNvDC8ccXesVPjKAQcgCT65zb9ieohzJ8h9FkRn4",
  "key9": "46bVYgdrtrAVi6pFNrSKpB36W13FqCpL3q5PopZssRdwRNbwfJuRSD5BtpgJSTPkuJnrqyVyTXHAq7UEPMTcwopw",
  "key10": "37d2VLd2HAFH2fX38u8QxxYN32mBsNRcuJW4DPEBeuMfcPwkgYtUp2xVThQMy3LQa52291YLz4ze9DocBmYpr4AF",
  "key11": "2ZFe6N2kMtpKtAtszy6LXxF1cMhtryWH46M13kNU33bEYNRVwP1Rc1Gc6qzTaPpS7PT6Rix7yaDfqCNLumzUY6ih",
  "key12": "24roCZoUabgtiQ3TcdbejtNargSmZUvdR3vtvfkS4Te2qRBkmrtney8D6yFrLfcdTri5zrMVBFDypREL9H3WsYdD",
  "key13": "pfv93MvqPZasUGExoBsRKMQGB1NKT7NY1e2HoLETFoiGdj5ZmsqPCHAk5C2puXTCAqj5jVQuFfdL1Shsado1GaP",
  "key14": "4T2j8NoBZCEanYrMzCWwHswVCZrK7FPivTgTYg2fwJuih4JULCJ4aMnQ3jPYaM89gV2kEeo7CyAFowW44aC5C2y4",
  "key15": "5M3q8HSnxukA75gRJPWU5E3wWE9Lw3GwDhsTzMkRAFx2rw8JnasV1EzFoDsg81B9E9yPLMYCsRGpEjxjebriGWjt",
  "key16": "3Vkv1jcfGPY35ZgMgGxYpGLbTTdJzGLA9sUdMjhew9tU9njrfDuCrr5d6bvVcHsbNVueg65F5NPbUzc4w3oK48nX",
  "key17": "5JAcHaaZ68ZK5YeXL9C3LwQpJ1iTHJ1jznaC7YfdWX7NfybfNrwtQLvo6MjpTe4ZZqjcBWqQSn8Dnrh41q8ytTPJ",
  "key18": "3XjfRekjC6CghSA1gChmRkxcBjZvVdyN7xLpLNHapNd4JqoYfCscJx4pitfZbEUyGPXDGa21xPMGgZnMr1sxtW4R",
  "key19": "3wX5WSuTj9rLHByoaTtuKGinnsLb7Lwu25MoXhhpL79XUC71aZ9Z3hY8TSdgMBZaYyx94PcJxcxQ7wLENVrLqqi1",
  "key20": "3PYmgJ21ML3sn76FLnB3VU1QVB4vLTDswkddHbJ2RG46RqB2T9YfNz2EjKSiJJNCvfFRhga9TXwt2AAmUiDhDQZ6",
  "key21": "yVazSaXhZfSWKKekfQoAqZUMCT96A8XNMeE63rHhVMJezt47yvpEXmfyPtQZVLVa326UyGEueBXNFpY9EasLdde",
  "key22": "9Vfa8aQvYvwYKDW7QyZpJZtQpF7LCP684tLTFe2Mgn2aPZPgA6TEiq9fAUoYx1e7zUpEz3BPAFMu6z2L8jd35hk",
  "key23": "4RL1QgYev6Jrp1edgDBgYa6nJLTnKrFfFAH6HTcaTRAwwVJw9mZY92bFn1bvCqsYcHBKy39h54CrWHjxqBLHUYJ3",
  "key24": "55QhrJdWwSSo9C87ytW8SHfKBhdJPAXVJscMXVi8qhV9DtSss1FBQFABXcKszpnt2z2J9SrZMSDCn87YeJRYcW83"
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
