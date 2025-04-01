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
    "4RcvAPQMmJRALPn6mEHb7scPaR7QxzaFJwzPAGAxWASYhoy5hyycB49bLrYNrNoNBNKcuQ92fj7oEZqC7Kyve8ph"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oHzkpPGL68EhqeVQ6dxiCjijoRfSYCMVQWJGLie19BRn2LcQ3pZbvNakM44K6cFA1tBn62cnuuU42cQGLjqTXCc",
  "key1": "52Cz9S56xzX6Ew8vtZHFhVHrcrUL7bVb7R1ngvRJyPjqhW1PatGWCLt6b4f1JPHsmtwgCExZhZ8u9mpwHqSRxK47",
  "key2": "2NWWPbShmY2SNnW44HeMqr4zJPzAAZXZHZNhPyibMAcjUnjNrivKLwZAaj1VVBtwGA7JCyZDxMbjYiWLncBqnvNV",
  "key3": "a2tG8aAgssvFddi1nhZwb5pxPrDWePG7pbBdmmkzbAXSaWetsWBWEgLEpnuPt2jXZn5EdpmgHQwi5DDzSDYgDVE",
  "key4": "5F6PwnnB1VpUfy45Nz3Z6V5QkBB6hWNR89iEEgx4YidJe624fwCYKQxawF1RBqdPkeudEDizXiYQ77LPmQyh4Kdx",
  "key5": "3VAZ5NNyFaL4kkYhqfYSdqAxktr9LkP6vgQJXRqfqfWfKPtKnT16VagiS5BsK44dsnUCVabfRESMwF5bQYPjBNJx",
  "key6": "4odUePvM8Unuoa7WY3ydTRKT8VQshz6evC7v9BsUu7A7e8kQZ77iZHyf7GTnN6ZXYVYCJakshPAAwqoo8N9cKANp",
  "key7": "YzVW4k4zRgJHEE8KtxazNBJTdWC8uTLzdXGL3yjzJUPPcFMnkUuE4D1MsJ5Wae1Xd3DdKeowXrM3DZ8SrFAWAZn",
  "key8": "2XWdgxuBVbHP2vmnWx4EYjDUce7aJXKjcM9LmA5tDfKemFFWsoW5qmniAUrPjM6VKwvuMRuNRDBopXj5EsL5HtCs",
  "key9": "4SPpbLxrzApkAaiMd8AffnNmmttYanvYrUFWtbATHRmaWMuoaaKMskTW2gEgzyqiiPJfhKW2UqsPTqzGMQHA9UCB",
  "key10": "5N6aHjPwSwgVNp4nPWAmF8XKbYgganjd1pK2PZVuRZn8e6CGgFzskBYMWU1VKMqipPFQPzbsAaxeYNh6GHqxHiQX",
  "key11": "xC5sWAxYmrdYXTQHGR86NRcHde1qh3TUf5Gi5c8RXGRstQkxArHCvHJgUff5WeZgVaBUiJaCfT1zdSC3pjwyYK3",
  "key12": "2cJioQFEXAhsT5Rywg7b7NGC1ZF317uQS1pcZNY6c235PDJ5Z8rvu8PUYseCV2ovoN99GZV9RVga6SFFExQLRwAH",
  "key13": "5SAJNCth4ES2JjafcikFYXawN7eA6yTSmSvK5U2JTeeuGRgtKh8NmY5EpqZ2t7Qsgdf45XwkMGtgoE4fgG5y4qj1",
  "key14": "5qfp9YVqi2i1bmSSPbQt6teFD8bCScF9X4EdEmof4d28SEW4btcVF9caoZGTd1AAEo7S7nzMd68TpaGU2go6iJVv",
  "key15": "3VvAMXWRS83itFmGPfVXmXjchKMxTByTaQKanuc99qGqyT5GGVZ6JNGG3FghBD3NzHAgLvBRAzhPDNmNxVqPeMth",
  "key16": "5PMXjamBGyjBX7akMFETMhn35o8WtWYBrkGbJVMYLgWk5EM49ZvgA2zJVLv6RQE9aYdB4q3PzsbAtEcjF2g7bcgT",
  "key17": "4mW27wPUD3DHQxys1Cbj2emn5CoBtoNLzmE5q25A72zgXQQ6RgRtHDcHvKdW5iRqoYFUiAnnUGzgk7SPzi3mkU9s",
  "key18": "3NxeRRVkqsovqAHfkDbFsXdRPTJMB5zUnCj6i9r48ypEsD3x3PxjfCBQk75D7gbnJoR9BgR24zwHsn13ySCMuWL6",
  "key19": "5oK11KN9rxi4t2QbGZuLWhzFhhsPeZjbGJ8TgKopsgG53YXb8BiJDeMxE7xjXgAdGeS1qz8ackBPq8iENwGVBGW8",
  "key20": "5YKGkaG8hdKNmhu7dYH7t54ieB3nS6PB5vfnjYNKiAu3JKrWQtQGfb6QrzMTQKBqKTdEYEmyahei3LPrhDY6UAXV",
  "key21": "3mptpUqcaVMPSJHbfJyNoxhSAmSppFyYcvzFkzpibZnSdUkYEWcNJ1L79JKL7PX44Nm6PCba4D1tg5zHsKoD7mqQ",
  "key22": "2HerdREsZivQpShFyHRhEMfg2ixnYV4n6xpZhWeQh1vZGB6GnwSEEcMaKMSSyLnMXbaw2Enypx5W96s4sd91UB2z",
  "key23": "oxosvnsQvJckKAh6TQkc4AksuCovEKHVARzDo3CghQh6Liryp2UsqLE7mScuyDBRAfXLfG4uRDuZyL9hWG5HYcL",
  "key24": "2cCA39VGGH2ZM8T51d692x2tboAx8vYccYkVKRsAVhn9dqfPrLTxn5BKG8Pk1RbU981Rvr4zaAjeinr27TDsgrT8",
  "key25": "gGvzFmqJrFLBDEMvq1BFsSJ6hL46HZBbCUdfxWSjCPDYbeNYTcrbLeEuzv4DRYzbJCkJhqZiJGH7iEAAjM8o2Pr",
  "key26": "4FSm1CoEj2UAp3FsfMJRcwKee4VG1gfJcaNZdX6CPX1EhXd4JcMejqAPZW912xWvYXFYFxdqH5nn6sy3EZ9HjAs6",
  "key27": "9WjDy4z9eHrALV5JeBGp8uzaRs1VpSq2hv1CFsdETb3w826A5XmX8D6BZNpvtAD6tXXcywD1jJ5CUAZbo1L4aH2",
  "key28": "UFyvmc63KLYjNpKTiVLzz6qSjJ2iJdt8mogafug4nAdNA7gdv71Q2qTr1GWyBb74v2GAwZ4MnXUBY9W8DbCKFAA",
  "key29": "4Ljjnr1kk7uwwsbHKtuieQuu6EoFuL8TRGWaTYsdFoyyeV2VGRUtM2RPzYwSSMg12Y6ckaZXmdY6pZEYyYUw6ApC"
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
