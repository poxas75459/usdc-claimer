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
    "3Hg8AYjupfuAYKSbEHtTQB51JcJVx49th4G8DGqGigYY92mn799SLiGXxG1WfSmmscBmYcJaPutxX1Wu7NSz74Tp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZM9yZs55SWCM2GHNqfGinhszo1uHzJ9A1pPNkn1NNCVnxVgUCGQxPHQm9rzSpvg8kps2CxXAALxzST3YNWSaTm2",
  "key1": "ampNccPHzWuZu71NsY6JYgiDNUknE2p5HQDCgZiEUFevsksgziJhPZnZWViaLnSU2zFVX3hrDznDKyKfrQmvUaf",
  "key2": "Ys3wg1MEHyMMiKxAupc2aMUqPMpEkwYzQzyYuZPxFKB37fw4JvBnJzLkA8XVjdt6zPh84TFEF6eUUTLt5zBdwne",
  "key3": "iU4fm5o6yvpr22eLDTQnVbV7kNFqp1HvcJbgy6HZfh71P1bca3GRjAhnA63PQWJSYaWBxowKafL66WibB7LTfo8",
  "key4": "3Vvgmu8tVWrMEfLBkb7cCRDjpFjZcM3uw7qFDUNrBugYFXdCEx19stKa5KyRqmUpsjsmVjo9xcxez91ZsxGitP59",
  "key5": "63LRGpNFnXWaBf7SJte8N1vxhiLtZuL5xAskSURXo4EGYxN1HgzhNUUsB1GW2KD11bVzJUd8LSqq2HnwbFEC2Hxr",
  "key6": "55t2W7rUr8WLb81amfD7A1Bh9bZQwnWNPVvL6NRJfiMFCvqYaTtuziPstuoTUQzx5cv9xcJbncDh8VQ3Ya8Cg47b",
  "key7": "2M82TD4B3UpEvo3V8eofW16dJo7RpwQF85su8PXVbm4rMvGuahcHYEj6vdgyobpTxDLfD9qCvTFA1fLHrenXzmz8",
  "key8": "2wX7U7b1U1LMK2GCdEYPVTLhYg9H93W5UkhZp126R4efStgZgPayVJLhPn2HVCejCbmxnAV5AgupHo3Eb5CZDSVF",
  "key9": "rx4GMpwCddyYEzuNmimMaFybwkVDkd6hKwsAkwyKfwuyX5hwMyYUe7fqe7nRz7rBeDD1FjgGTRE6MCkS81fhLgm",
  "key10": "59h1j8VFYcSZupsiDuk2UntoteSDEgxMpQFWRX8fcwN4swp8RLB9JGp2pSBzizfPqXEYdomXj5x1LuoAdWvyFHP1",
  "key11": "2Fsm9TjpT3wZfxY1Apbmnk2Kfqt3EmsizBKyVjR41KPWdKFy9e24hYbUNafo7P3quoVAo5cxdUpusuGr5c6CXFNt",
  "key12": "3wb9fq5zAdB5FYLPAZXsxsjvN8wfGbZQdSwe8CJAcJ6VxTGwyJwwiHmjhzXZsw4Dk8bYdws2xM6ibc1ie5JDBEb1",
  "key13": "4wbfnsV5c6Pv13ZvzyS5vEZi3sa739ExxdVoJbLZPZyjBC37hu8Sz3P3WhRGrqTnnNKWsqoodQnh6amX3wX5Ggj4",
  "key14": "3s2tt7xdhyFR6BRNHbVohyinvvFziaS4MCaPTSRWHwGs2DyNye2RPw1vh42SxoxyqMdSyky2eupMpU1iVz7Ue1aq",
  "key15": "Ao8sFzCrTYPjuTueM91WVf92646nq3F69ZeMHdYV7QRA9Ft53uQmEKWP7FM2Vc7eHSSQYzWKoraAQKayLMHagbv",
  "key16": "wLA9srgKxsBU1ewRcjKc7udFoTcT41vQha9wxuKqp3JmxJK8RXC4TjmuueSN1sHzoj1Gxnqsy6S7AtUXSRkGXxW",
  "key17": "5LZxpccaVmVN4YmoMnVCiUqF32TyUu838DBJqeNQ1RZ8W5yVQEv2ZiysdxFAvNKd6wGhSzRaaifK83x7pWcn1PvU",
  "key18": "4nJAXmJHHi3PymKrRwdZzrgWnYNRzNfJDEh9mnSGe69A19qBJadTK18oSypD85wCoRu1jzZcoW8u1UDgih7vZ9iU",
  "key19": "yoQHCaNUkqRdVaQBhD1u7nFd7G2WV57RxhJzpsubaSj4M1JGyn6yY5g2E3cfftmt4PG3xuRWHWniwQBWif4bnbw",
  "key20": "4g9GbmZ8dYoiUoEf8aAAeTJSotGgZ9tQ6kcaAPPqUgMxZpfdvDTLZCzVeXLa758hPZedioirfnjKtFHBtSYX4vuP",
  "key21": "2k2rZyNAYxjniXwKZTDQFbPKpM6pkiHmuzBUG3ZNt1Rp2pUCGJWfLdBjpvzBNC8CWv4MmV9HR6HSMtBzpAJvb5FZ",
  "key22": "5YihJoBnU2jW8J3Ra44P7T9eLJB2WizurGFa4sW8qbHY65fDktbxgunn8CR14bzrFJkTSadAmusSLv3M5gq981bF",
  "key23": "5KWzwDeo6FAzJt9aSS24zGB4zY9SjjAuJvzWRWLmxW2EuhofYEngDumAirHqf3EwTnQnBvPiyP8EhHFenSpNzznJ",
  "key24": "gJmnaVWRBSxJ1pziC5ZNaYe4w3HYM2BTqyJbvMrKAz1gtyBj8DiK4msSjdvAfVcoPmrR3fvSQ4iDEZA5bsoXi8v",
  "key25": "Xt7H3pbzre2zZi89iJqnAM7V6oBJbtewuJ7zdboTJYJeF8AgCoWtjZCVj3U7ufjrFDgt6hcPt6LF5jiCLutikTc",
  "key26": "4PJGqSdExBWNANyNi9Vi5pyqVxAJRJF98Pr5fPp37AAShRmxfA27iVzri7rN9SkmNRqPbmibsbaDNJqA9s6DsCoj"
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
