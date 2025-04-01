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
    "2z1HWGDByT6zFDj4Gvv1DfS1RVU51YX3XjSnx5bstFLfnDUFBKHYrH46X6UzoHUJ1tGNKwirnPvfYiEjakSy5S2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34w1WCxKXdpF5pvE9jF3oQB93Z1ho1E19VxUx6UFNCPBRAMc2Fx92Dodys1AFqmRZYiUiCtskt1a5EGXv5NTB1f8",
  "key1": "4L4QHZ8G8grQaq895eKxP5e14Qj4YkJsd3AM6ZyqN5TxhY2bYcpai4eSTLwPZw7ouKF8HHCYv5xej1EWtP9PftTw",
  "key2": "3a3UdGRQswJYeY8A3KoKY3xJcZMbZ5SytTV8UvECcxZVgk9a3dyMLPzvvXtsXsR1arLDmfJBkKCuh4du52Dd69pb",
  "key3": "49ymTBM5dabt51HqrFPi3PrBmT9EWW9kyN2bMhTx23L929KrNGmdYWihxrsthYePNxPRsLnAWVKvJLVrTNrT1Trv",
  "key4": "5BaGJ3xasAf3jtDDmtfYnnC3Lj6TeMfnFv5ubHHBF8VPyrgCdM7mVyMsgWsCteapDaByx5zdWfzcikvP8zsDJReb",
  "key5": "g7nxJ1YbGxMCCQh5MjhFwfTU8VHbjuFyLbxH7DUDXZXiFWWsKsacMkotrpapFhPcCSSML13PbhacXGiUcS5FHeH",
  "key6": "4pKVCZ5LKEGRCc3qkqD5CzRYp6VU9Xs7XTZpt5MpbBQ6dxQfECQ7cKMZRuRbr4c2uWyL8nw1iEbwPHwQFuGvqawH",
  "key7": "3pkZ5AgWrsJN9qhb8faieCWHkS9sKzgwvArXKjrejUdAybK8xZihQaKyYU4PKXcaZMjsmqKRsSQ1arkhXwg7v6gs",
  "key8": "3CjdLvmdxMif3mvpHFsazJEEMh8MJdCh8kg4yiNimrgSeEE7ANr6a4xVfjxp6EMSpkWs1M5LWcef1psP5YU4DKBx",
  "key9": "34oiqZWYp4mjXyuR4RE7aSHwA9M8jnTcgyeR61x14Eds2fZauw3NixfwbWfthgVTzzBckPU1TbysY6a5xHuEuwGJ",
  "key10": "48kfZrwy6oj1mqqjT1NHyJAgrPAEYf42iyKhhpWr3V1aCRRLymCHXCV9kRa52CLgiq7oV4QHY8N3zpBDjt1F7oBS",
  "key11": "Vs3f12Fo6DJPPcj3hg9s6ETitPWusNULaQRUQrqt43efwRhukc8yq2ig9LXryqTtYHAHTqfoNtibi8GrchCekdf",
  "key12": "4Y1V9PQshQHgSDJecm9KvxWRjYmw6qiUzrYtyymd33CWfESdtbXJBKKiYXPcALBdcN5AQ2iKLjmcAv9JDmzcsaMR",
  "key13": "2EQhiP15cw3KzRTdAA6MX9fF9fYgJiGZfvSLjiJwZ12vWyZiVoPwFDzFcMtRkHPggXWgD1tpjrJPMA7NnRBwVse5",
  "key14": "5jX3F2dzmgvXA9dyvkiCkHU2R8Q6UpxJsbgVwJdxJ1Av7V8ekv7SfY4hiwxpGLFx6kE2w5cinXb1RZtdjTR6QCXx",
  "key15": "5Qe1gDoGdCVoKrDJVXJ66n2G6dBHg1CVJqptNyxf1KZCoAhd4mvNB4ojp1ZKxFtbU33KDGQSXZXZc8N8sXjXTirZ",
  "key16": "5BVnZjVtpwtpUpUh13zuR6ZctMsQqaP9sHV32NS26QWS3ECGE5323q1mJB1z9Wnr93mW6785cVjPEa9i5Q7Vfw7r",
  "key17": "35RiBxSGkMLz7AeC213Gbea6NRZFjU6LAgvX3bJYwnBpGph1aksnFMmVhEGjWygSn1PLWezka97cKEjRSocQnrMw",
  "key18": "2krFMykC5h2e978h3X6FDGe7XcSCPieJ6ueku7123LyZECfYNPH67GHkaRq3pv2K5RGaUhUAQcifjuLpV4uLUKoW",
  "key19": "2Lx32PMQfSxa5bBQndUiitBzjvpvBZTXH71omkdQaiBSfLVrZEiicLKbxgoZTNjM3RoTmULLQbThKGCKQNtbHmqv",
  "key20": "44Qcsa7gGxUxzmVUHQ6Lp4Fs7wuFFHWS5HvvQLXwC2KKNrDraQjxDaRAU5aiUC9tWvctNMUUycdN5MXq9RemUgCc",
  "key21": "RM8YYJGC6GTzd1cPrksMVezVWt1sMAo1uwUMfyLEgCBuPvcESvLjLXiEuDssBaVXSirLoKuRt7bGWPWGsZ4eCwV",
  "key22": "SHA4DHzdv8CemmToeazVMUchyeGVAFUrEamUhn7YBiPhvk5p3u9YBLDbimnY16WSBWNpPiHVcBjrEzbPNXdyCXy",
  "key23": "4CkdJaRNb3h59TcoKvjuu8mN1iYkeL95pLWbsMkG47P5tgJFNqnRMjYjCJCWctizDBZsKbhyaowcxfNfTzfNoRAu",
  "key24": "5QtYb6f86nfVuojQ4n6BsYwc2a3AvAgNSX3qJArpMMTcQFPBGcShcxujBfLxop6seXcgaeyhMCZBYXx3AVQDYoUr",
  "key25": "QA5eWnGwdnVZ9qy9HDr4U7ns6S45MsSqEdXp9Se1edvaPywUih8dRyMz6tb53R4vRCGuCsyt4BGCfskqsVBtmgP",
  "key26": "2fy4v1Rtshtpkn97nJvZeiZcEBXparET7Jzcmyb3LkztKNETJ5CUzQhP8JKKG6fD4m3GmPzQrQchJVWUeqScGygG",
  "key27": "3oTYLwKBDp2G65WTbCSQ1YDK3JUTSiem9VMy6zoDSVuytCSBXvwSKgRfm1NKj2PSfzSMyqHmeh7Qpabk6UmLEmkW",
  "key28": "DgMDH6GTBnNFjNVyhVUaWq7RMu7FZm8Cwwna5Af8eodLPxDqS8yUSGNnZ5xJxGLviqC5m1qsJdLQYiSzLjvDWbq",
  "key29": "4aDZktUTkU3tPmCd6gtjpnVgUZCg2LmsAEu9rANcogc8MBmHUHgMECXkbbqzK8bsGmGzUASa4mZ61B3GNxGfJKck"
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
