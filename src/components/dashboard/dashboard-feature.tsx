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
    "4m9tHjU7Cp3e2NWy3o9T79apo7AQ5kAosX8BtTsRqf2S6ykPXSawvPep9mccpRPFgjTdYPKsusPfsrfYdGWLXssa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NsKHA584vKJRxnaAJ7CfX5yDXNjvRppJ93ZnYrw6C5vg3mrB81xcfT5Y5RrsmZFYdf48WVGAobuhNaWtGkQp6Fv",
  "key1": "49qHNFvid6gv4hM1vUudt13HgRwftPic74bnW8VDniCxVRzkXPEUxydZuwLXVtN3PAhbBGoqH4dRF4LvsfNi89Yk",
  "key2": "42ozShxuP83toZqKu3wtu7VDwNaPeYW4F6ZGAa23CrJgsPcbiJWnRGidoBijv8KPkM9ZGFATR6Lcs35REttjcY7K",
  "key3": "pXEhEqNLuFtAgSta42tFkjjjbJzvkdEfhFSgMy6EirvqPbWgrnUmzRvb8J9PzwFubYQyCfNY7mK9YQNtg7ZiAci",
  "key4": "4HUKgdN6cDczQ17iZXij9Zp7wPCxSHA3mLHNKiH9ufGcynbrfG8deJPnQV1Z5Xzi3MxSwEbkmw5kpgmGTjWas3h",
  "key5": "brVFFKbKVMPwuicPqF1uj14tUpQgR3ds6WR4dcDuEJBU8voqRpFiY2uunttPM46rFWk1VyfhKWHtAGDqMugr4Sn",
  "key6": "MXrt72cpBQ41ZGJhJhgBgqb26wF8jSudY4ARXqj2e41SS96XZJRjHysTfaNs3ezekDZjV1V6WQakjAEjje5LfNy",
  "key7": "654218XBpeAJ5SEfhBZZW4MdL9xqmEH22fr1BCJuVW8o1ES3k7DG3mX1tXDbyNje5rfvNpVkFpSmm3PeTo417oSG",
  "key8": "2kMVDQPFjAuctczZiJxoQkzHMTELGuAq58oewNV3K3A6VCB6cLq4nAHmwQSMcE64HgLMszzfUmbp6LMUhHrP751C",
  "key9": "eESoqkmxbGxyTDJcmzktwraM2TjMrwDQxYbPjiooWgBgYxMi5qA7VHkyLfUZYGqJh7MPpPisYrZEaGVUhzHdY9R",
  "key10": "5EWneJQUGKK2FUSxZ8cxx5kNU6civT1tRNVzmJTktkVzKth5SrJvyVB9LhffjzHM5EAgtf38R24ZLZ4wasoWwJdK",
  "key11": "3iRkL4uyN4mSMAMsS7fQJxKS7Bub61fmpiS63MpjaBgcDoaDVL5qqVWpxzgGZPEdqeCquwXj4AWR6Q5k5pX6v7Mx",
  "key12": "5KWBmbtMM4yjRV7m9X6VmSAXABUzqk7uZkuCZ1UuucjfzJAWYHV1BNS2PPhcjk9SPg3NCnnowhT8VFNjNWbQz3jJ",
  "key13": "4CWFS1ye8BrdiztnoCF3qx7b4y9rf7qNzSsui6soZm1yf5ugGeQ19RtvkPaFxTUBUp4exNFtNK1YBuBmq21FYGgr",
  "key14": "35PS3P3RFFAchj4rsFJJst8SADU29w1sxnT6L8igJwQrfF5d8pMq58nmHAhhWaiXr6efECKmcXS4j33jqxncDG7C",
  "key15": "5jr2EeRc1CFnjQ9bhJSTWpNHb5K5QVH3uFyFByiLGQmAC5SDAMAaWkdVGTTsZxkJEo2sp2R6qeJBn4yCkK1UthjP",
  "key16": "mW979eNWBWkJEsTyshK8YEjZ4AxHRTVnA6xj3TGARDeBDHRrWHeZJc51jAFqNS6Re4HxbFu1SDZ8Y6FZ3sKEUsH",
  "key17": "5bjJ6K8MvYpDXxoA64L6utcw1MrdtEgpJDzrRshWpepGerh95XNy5KnuZkJfGgr74ChNtPxQB1bt95YeYqGwPmcw",
  "key18": "phfr8yQmZ6WgGHduUEhPyePK8aYDGPkuagC2RrTnq5duED47nGDpvfZ1V7TN6y81vrG5RWa9V2hM3ipsFDjf1tq",
  "key19": "3pTUn2tsDsrL2tdPFtm3fwXBAwjYwsVVB1f4pHAskcVE1Mw8fPfw6VKQDoPnRP1Woj6Aby3nUMFnjwDhLxdFWgDg",
  "key20": "2y1NZxGdVdEHYS9qWwyqGN42sgyKUirv1dFJXxg9Lo62UVJnE2Dcv2P9sbq8Ybsdr1cRMe7m4PT71uPaLcS1aM9R",
  "key21": "6s5ZVCzWjxosHTaU4Psao4hdz8qVGDj5QaEJzpAiKBuSQgixEPtt3qbqjuMmrCBN2Pw6Jd4V5qWkecKtELpJTb2",
  "key22": "2dX8QHHvgVhrscNVUagrUo7w4sdjsLmSHar22N7BD5VFGmr7grXAX7FnVCXtKr62mk8cVoAjrBxxpit43ZVhmVnT",
  "key23": "2NNA8nnbgjMzoSjcVkS7W6M1rFFsVK55ShSiKPCievPn1SKkWTVrLs1PEhGjaTTRZ4DaNH1tcjXD4wBfAtYQ4a5j",
  "key24": "tFsmyAwMGBK58wqLPUSuqtL2JNiuzaRJxmDYSeoc9cy4LyoTdU7Za2SN32L8xSV9LbkZipMbYhxKNeFKTriJm33",
  "key25": "2XF83Z2gRUHUsBjJhWmv9jHggbCRRwCjzgHnQS9n94JsRwm6uRLjAiPkc2AbczXUisNaFUdQxMPMdkK7bcVu6MvF"
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
