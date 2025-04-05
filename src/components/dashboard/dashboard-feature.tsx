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
    "63w81fK7eZ2iJzdki8ATESATtkTMGp6oeQ6iSaiGxNDDsJB99F7MZgy9tZ7o42ezh7xXqzxdFbrDuXJNcuQZyhgw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TgmiKHW25yjUtsKpQE3Uc46zfPbTfkcFp9YNhrQy5F5bgMfwoTStQqCpFvAxThQ5YSo1CAwcFAuYJ5mpf7Vz9mX",
  "key1": "2ZJMEsmizWAqPp2BZyAegA9qBEwA4Cz5XTyoq9gvTYcjBZTCyXPC8YjPhzbfGubzEuf3CcUH57JJf166sTjYgzVu",
  "key2": "5ZngzeCStY8Kztcd7G1kWPPFf6qTa9c33v3uJbSKxL1UXvtdu9fLYw9gQawoJttso1rhmyzXpWMH1mL3qGgXqoWq",
  "key3": "23jc4dQHuGdc7fehjUb7ww4Y8Vkv4q5K6PXkqgeFLMVYz58fcHyoX5sWdbteVk8KdJgt6WHZSVCieGWWzoWa4aYf",
  "key4": "32Ve2xTjiemvwNSujRKPKKgVczD4T4rfcKa6DdfBV1inb9aznhKAkptk9twBYF1aKdn8jGfK7UgXevh3XtE5rKFn",
  "key5": "NGpqtEDSdoMCXc5qrfKhGB5r7WDxL9htZrwqjAsEdrcFmzJHuY9V3Hv3nAJut2y5spq8xMsS5gLCR8bWoQCV24B",
  "key6": "3kt7PU8nQBvktQywUeeQGVE9vcm5LSbcpdez2g4Qu5ciYxHkttHwrNPzReVquwkzkEbMH9poR23r1ypTFvndsEgM",
  "key7": "m5W9wLZvj85ZF2HEnRWE992hRhkDEbdSPWo5efMjv4pWbjxxi8DHwpSwJGVUgQCgZeyptXD98xSWuTkUXdjwKCP",
  "key8": "5jmMTDAuXGhHB9Tvcp8sqphV2yKmchtFyvAagyzrahccjunsqLj9uHjJxp3VFAVkgVVDMxNaS97BVMESt1vdKhqA",
  "key9": "3eXHDRYE1VwAEZL1JHQpW62QPbw4rQkMXCWyp3d88wFyPV5uznqi6Zsna1gTayyZ4Un5W7LQ2nyF99gANH65Sc1s",
  "key10": "29SYgf6MKuMHoSYipgSUkMaY8zrjxh1FAzyfEAy6StyNMzs7nzrRnPsnXy6K7aVbNLorT6chnHXaZQiUPfLYUR9h",
  "key11": "2tGscF5arwg2cJnsRf7TPL1nyxGZ22zTMoBvvM14MQnGccVTmp43MmvhFWMkZVEyoQ9p8isxXsMQrCE9N9N9TELD",
  "key12": "4byvGLjRFLVXEw23Y9Qn1t9V1SGewwSmETFQdgUkRavQFq29MRpta3rBRSXmFWKCNyZV4NgXhTsKMW1J5mkPJcy7",
  "key13": "3CPfa8kmqTSLTHBxYmGTk1sQ1fe42ZiBFasp3TTojqxbn6iX8qSmCVtAXMc8qouF7zPmXDooEVG3zRbHXtib9gKf",
  "key14": "4zeJ65ndLMTC893xB8K11a1jxJfTZSW3m1TVH3FGTE5MwMB6JtfCAhhVLrxB8R7wBQDYXBqN5wGp3VvuhR1rv3AH",
  "key15": "4YHR8jk7VvZQweP1g6xJrwpqo2LzESsXUW8j6kJZMGvPeEhN8JzKiPkmXJwpHaAsGCsPZbQMXWP8Uzjoc7LAdpdM",
  "key16": "27utxjjNP4zr5ZMx9N6DgTNA3XxUiSXfdKzctAdMBxYwqp275XDeTSLfNGrWQamqFa8wtSwkdvTRm7jQQoxf3jvV",
  "key17": "ZvUCCNMbtS2LNRjUk2THwRdbZ5BJ9YWvtBRBkLGCqgHGzg5NsHEQFfTXvNPhUqgUuanR1RZPJvdbkQYPYarUeUR",
  "key18": "3Rpcc57TytZugqBPEC7fk13zMD3tkvjCvdWVWc9Zx6w9JmfV26etpoamXkg2KwboPuUW3Fjqs9GvYPpWa7oYbmLA",
  "key19": "5bhCAbjrhxDYcg5nUKCkfHES3C1QMM8Ji4RJX3zEyr1cG2eKMBNpx9mzxcgTyWKVCsdoQtCUCCCgk3AZ1YooxmSS",
  "key20": "2TvtKEiq8WckdgNkAqG7S3ZLLzQR9RpFqnGN8U84FWmK1jWZDpSVWJKtz4uhZrAiYhhEQkGEQNVew5doxyS95Zn7",
  "key21": "2zYzTcaY5m4KRgohy4eu8rxP7KUJMaRNFRf2suiSRqn5rG7aCJQZdTTtT1oP7WXris3EFfbBFa7JLHc5tgpCXDez",
  "key22": "67nkYiytBekZiatnYh8tqm9f6pq6BnDi4ffPnwY2Lafb1UtpkNCKdpM8gMhzAfPVWGVcofQmS7A6zeYNyYUs3UGZ",
  "key23": "1ooWeXfY1Y749YenvS4Dp9agwxYKSDcgTxLCR47nB7NqVFwcoYV4wi1shuso9Ld1JrLANCC5ppYkwGcmTaMwcwN",
  "key24": "3pkTV1xtCkLNDoytQCmXdforqVsyZcK8RkMLtJveMPXXXVMPnvcyJmH3YwQkWVf89TvvrksPmZ35wAq4ZAJppeF5",
  "key25": "54cpDiHMoGYrUwMKp6sxM933TY2XbJeWgDYyA2exjtUTGBmxtzqfbDs9bUy81aj4muHYvburVewZftZ6LRi5ae9F",
  "key26": "3DqBGZa251gGJhrguHGphC1HWiimW43EqBNGtnW3hFUfUBDDqSwidB92YZYkpp88ddfWS45CjN8AZcKSxqu5pon2"
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
