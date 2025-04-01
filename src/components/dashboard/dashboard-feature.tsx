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
    "3BBT767E4JCuTWJdpEPCAtyEca1LyGtzSKyuBLuYrZGzQfwiXHYx16Ecn8SrdnQWDgKxpeZddnsy1PNiEvoJfZW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vPNW6GjqJ5YErHQF4gYKYiLyNVs79p5DVH38Gj75gzfWWs1eHx621bjUBZpiQywMzPtPBavnddaYVKUumsmVrTL",
  "key1": "3w19ZwGZoe9QX4gqWTg6Wym723ihqKpPE6qexjHMkSsPNXkM3kt1Mqkq73VBy7S724AZAHs73HzL6Y8Y3vXUTjK4",
  "key2": "5WWd2yrvs7rX7C72m9zYt2WhUeUBTSnGBPik67JKEFpvjdwdgbntXsaRZcLBGw4rp5z3M3HPsFMxKtA5Br7wbFQ2",
  "key3": "4Vx3QBna61URV8Pnk5n986dpBEDdA9Gi562MzTahsknwkr27PHNnLbHdjzarsaEid2Sbh1cDgXpJ6EVNUNPNxGWM",
  "key4": "3VbEWrUokkzDBxRXyg5adT97mDroFBtoSRoTXLSQauhNxcdqLimf7JwvjkKFA8V27rK6RpJKWWg7Adwv5pKVAUAC",
  "key5": "4v8JNLqV89eJ3cc8Fr5QiPtovwdsA49GAt8b2ddVHwj2QfWQiGJviZCFpXowPMRxWWx9TmdiyM1pCadbRvbFfu7r",
  "key6": "5GnjHcNsPXdnAB1qeN8QFGwZ5X5rCrZHJJNNLL5rGkD5gc9AwUPtpgmC4pqH1EoZNbAfoArcPksfGXwhXdfCRu9W",
  "key7": "5NTgB8h7AVZLfwnkMkrJRLVXXaRXunM7ovXFMJkXaqidqhQv6oU6ykq85HNbQqCDooe4WofyBn7dHWhzjyuASiir",
  "key8": "3Zm5DVZcmTrVd6awhnXGtQo1KthbY9RNtfM2ZEYWVPC4W4wNRzh385iR8BgnCZpnofBLVmjuRJ4PFehoBGSpEAQp",
  "key9": "45Po8zyzvvg17XjoiBdSv7cw8fQfMGHu8MFkce8gR7Krx8BpEZ7qqgDL3F8fqd61UXQtnEoPgUH2LBrJhjhzVQH1",
  "key10": "59iYtTA4zmSQLjBc5iBZeY8pkUgZEEhaDqr7CL9kKFv48Dbr5kmm5iRECcVcRryLxFeEGmWZP5U29yYqCB7HNGPm",
  "key11": "3Gh8A8CQSm4YxiBS4YR6NZ2HJrbxgEkTtxi6oHwYD7JCCLs288dVTjWXR7YfgxhTJoYQdabCebi39Vj6sdxQTvXy",
  "key12": "4y7tzgoLL2Ma1JWuNmZLkpCJ1i4ftX82ncXDL7wbsuGb1fmobu69rb7ZorC6dCJr3EMgYNvP1AL9fLKbieBeVyuo",
  "key13": "5ULKB73JUGxTYZ2Moxr9AbBMxBacXtjc89aQdjUqN2yv7y79XSKZJTGZAq5tD4CP5GNcjUX7fJ4eoxSRddQdJdRu",
  "key14": "4KLrjzxq6HyjYezMmYhXauj6SG3gXv4jTjr7U8YuCGRtD4nt4uFo7A7n6YqCYGAiGVKWPF6PpH9Qvf5nUVfZ8BkT",
  "key15": "w3YZVZZhuTAqdx2EydmdVjpvqRM6vm3E9motDLebooevcEWMeDykrL641gu5HgrmFLXT4QXZg2K9snpcTFhQRY6",
  "key16": "2apKvvpfqtk4itpUxM4ZcydzSUMDvuAqu6v3Ltc8Y62TkUD1sUsTMP8TgMKbrSeDqw9x9LivdDZ8CcrhJhC1TK4D",
  "key17": "66TV2c1XRgXgHnjfgxMZz9Do3ySToitBRPmSBARYM7werDbT8ck5YnhNQk1YkjdXzhyqeAC8VsHY8UoAFqFyNQbm",
  "key18": "3QAsecT2oM5TQdyZXGjZwCqpjgEzYpnULTk1RUokWribtFCmD5DWztt68aCuFidonJQe8W5LTLTFCMS7His6tMzk",
  "key19": "PhWZAycJheBBufh5eiPe6z1DvTw555XJQjb5Yh44VB4Nfe9gCG1rpaPqfm622qkn2mpBcc5Zc71YyzYRFRt7c7s",
  "key20": "3xwaEmMkUrgiBRcEo3Txzno3Crgn9rGmCYib9oi9BkiJBKecfFbpyYExqsq8PdEAxhXbkxJRtsCz1DGLQGSnddTx",
  "key21": "54opfwQFhJgg3ugHq3Cq1n43wV48D9eMJGM7RUrCp2athfeNp8DQv3ne6SXvBihdy5J4mpYV5hoVkLWzvwYoigVA",
  "key22": "2x2qg1faLn9TXwaDYrTtrXBFQxMR6vBUyUzedTBAfxmaGWgUXRtnsPy1uPQpvvAjjJBHdrLscwa373zZ6ro3CaRb",
  "key23": "2fyrmgsZATh9UDSie8g6wrgG1CkA5Wcz6a9KuRwzcfisuNhkxi3CPumTUp6pX3cp1QTLFkJj3khHHsTXk9DsDJgk",
  "key24": "3Uh7uNqMfzXoDjMdGT9oWXHELsBegQTEtVAVkNQKvvje7vEtLfCzQswdMpS94yqZEKLFCE8KCL4seiEhsJtBtXV",
  "key25": "xMe6kz5JsHrnRyETNGxWRDTB1EMRbM467UzzDVxuunRoXEqX1cddi44eLGnWSLdHcUEad5449hKywnRB6QEhS1D",
  "key26": "3Vgg78B9v9E8qw2QcK2odNXAcUSfWd2zqZG6rLziZDDrzrvy3Gyz3bGfQcNobLzc2EheZNA4hLDhCtFoyAMKwnmk",
  "key27": "4rHb8WZmLaZrotD5ZCMuJaPggpcyD4d5a1s5zkdXhzZFeVogRMxY5QbeUvuMYm8FtmgTzYwc9YQ4udqxVaPii8Ux",
  "key28": "4w6DUmn2cccUHDfQ7dHdTSHzPJWqJEAYNJzKLGbTm3A35U6f2csW6SiXJFAfuiYkz28Q5Br2krhdJqHjXFNsixTy"
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
