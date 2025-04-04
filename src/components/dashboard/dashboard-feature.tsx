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
    "3G3qVTJkseoWePEXDUuic194BcbxDnxBQJs9Y8iNss85dtuLT3bqKQrX2V4TNapUKQyiakPX4pnw9NZfUYfMcE6A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Pzi7weqRKEv2C35tDmS998sPEHPjjAe9F4Nk4LguNN6ZJTJ5U8xo48bUM5F7nFpfJe8hvVgia4vmYREY9FCmAYP",
  "key1": "Ztef5KfDQgoR88XqxAMR65qjytMEzRgUMYQMNz4Je8NeCrT6YWo7Nx8Jf5KvG3Z9jBBgYRMy7VMBdsv363LgWLH",
  "key2": "5haMKhBocCLYpCSxPiApQp3G1NLG3fQfUyh24QPJCFHKcebrtC5pEm5UReWVLnFGZhrfdTeHsS4du88TAfwGf4Rk",
  "key3": "5fnUqVnKsfdc97abVaoQnSfRZevhzjS3CP8VUHmV1a2WqZ2ywxeGvGpKKfYRfyJtHyx1febP3cAaE2UoQ3pbdHiW",
  "key4": "4VD8xUTq2X6NbJiUtXYu76HYBDCPNRj1FhmN7Yabm3JGoxxcZJBKifxNjckQsYdHCytCXhTjTp95qiJ1TfFg5dwp",
  "key5": "3C1JUWfeLX6ovczCkH4k3pHEkVeX15pYGB4GDx4fPARpBKoLEwZxMUfxe8uNHSBd7YURkKBwpni24epT2qP9yfqQ",
  "key6": "5mTHyvY4TWTNpMF1gvHwqXv2h2qtWg8QStkASiGd5kSmhx83JfLgQEfVGt43RuEbd8v94ttqYafkUrqbmtaHz6W6",
  "key7": "2FUQdCpqQjAG6aTYAxXpeV5cr5DS6t64kBwRHHPG8kcqX3ALUmnpSJVMjYFJavDGRC3rajkNKwkspkr2JQJFXhYi",
  "key8": "3HYt19xWm1YfuQnFj8c7ZKZhzwh5Lhp59XNWqQ2FXemkKPWMj6XVqkZeYQnxgdsgT5fXAej5Kkc3UeAWDDde35ct",
  "key9": "4CtgpBxz1ZHEcuRNQpfzvqmbUqE82Vqk8zD5JmYLouK2TKdtdZ2qgHhYf6wjoRTxRd2UkNvep74wUhUi2rX3jjBU",
  "key10": "3Kojv2UxseeqLTHWzP2g5EGLmQKJBAYzmvSnXv83LzCk5Wpsk2DMKKFqtNkByBoNvyVe18QyyBSxu7p1C51CNBJo",
  "key11": "5JykPDMCoQhGx6jpVkt24WSfJDwpFDGxPkAmxJ9tRs1Fo4dYgkeg4EH6XbZZCw5LtavNPZpc4tk7p1p3sba2C7tB",
  "key12": "5zTxDkLSLvo9Rj7TNfcLt3RcLGE4rrTERcZfabviCkjubLR1J2QymQ3WCQo7rs12efbSHbABoLgNQSXbQxfsGuDS",
  "key13": "Hw3D1yRP9wzwgsucns1HQvYsUTceEK1aB8FTHUd1nNcmffBzpFjBpfwLVjbt7z9cB6fr5n1CDQ6TTteyPXyCrB2",
  "key14": "2FmskSLBs6z8S4gkWxAjHSRT4WndQGwE74KQ6FMEToLnUcwDR1o9g9RfbhbZcQrhU2BW6xQpdV8xm4KmqhfbuEJn",
  "key15": "58RU9rmaibAoSRkF21RCrbZhS2Uq35E6a5CCHqqgTaMD5A33NF8FPxaTJDKWxgmbgk6oxaRDwC4u99Ejq5bFmfdY",
  "key16": "42C4a62RcB8Aw4bCuoEhKkguPDgcacm9TKcqF1bjP1TYjTeX867xjaML7Mx6fLotA7ATCyUyFMQGKQo9iXf3euKU",
  "key17": "5QFAiZEPJAmtd2Uv84vK5boe1qCqPNDXthFkAKbMe5H94TrS7TTjhZ4DZxZhCQr5d5gfZoQZdqTMUGULknyf5rBS",
  "key18": "3sQEMmjpgsXeGkxoWVv2hZbtxK2sstDnttQYpreq9WhGXYhzkaf3SWQno54izMktpxw4JsPPrn4jHqC9WwVFUszF",
  "key19": "xa4AYwDdkrkGzTenYfoqufy7JA2hQTJyT8urfwD4K3qtDRR2c1o1wiZcmaRkak6pbyhDV9vABn47cUxZGJf5JYk",
  "key20": "5uude61dFpDrwE7ApNwh2Rnb1i2b5CDRpnbQisD5L4Wgaw8RTP9grgE7Enrfsn8jfv5Mv15Aj7L5k3Mywd3QxQnG",
  "key21": "4GdZNC8NVZjbhTdsWiaoJeUoJNpkyBcakDFhexEEC4jce4FKzQTRNwEgPhJsQA4XkD3Y2YnSJgXq1zfWBL1Rd2A2",
  "key22": "Ak4HpaooknX2dWBqYhj2xNY16dA4FwPew6X3gcFyyYK9GuFDJA9xF42rNBApYXiZwJXXQrXo8E1oiECu2h4Hgea",
  "key23": "4cjc9WZtbZUAttSDFkhXBDZf8quUKmzFsTfCfD4XaVijLjfFhUUJEiatZWaRASzBwaPgsCeyEMWizgBsqy5H5SZR",
  "key24": "4KarCrbyfCb5vcQkXUXX5meGmCmb7Dv55djvJ5SV4zbNEdfW2MuBvoasjc3vpmP9c5nE5vH9DrvAMpnDsFFR31dr",
  "key25": "4hMNJpBXS5T1vpJdnK6rRTAEsDEXhkvpreA9mxJekict148eBoJVtAhydTY448VZuW43BHkMrKG1CbZzRDmCtvvH",
  "key26": "N8yp2kk4WwqcKz3TbGpmWdwyXyVhSP1tivzuLZyKqgENGNu98N5gNLnRqzDNekBdhWtD6poaMSU8ibaMQN7zjf2",
  "key27": "3J7j96Qi3UHtssTmzSoeDN2BwTnSgrJdWHqs4tcd2nw9BLv9MPRq7zbMShNpsJtywDrTMdRpMSNkAvgs2FwiT6Dt",
  "key28": "2xLcXAyLTjbgurzmUSukSqqH9XNkehswLYEacHuNWwBtvZDfcYsHTodoBkQRg9bFNcjeMB7zzwGutaL6A34CWNoj",
  "key29": "2hY5ZSzPcGpedkLL5z8KJS4WaSWRtyqTgehaAGkpDHPC9UmydC2u4iW88DPLHtjtCtEKkk9DRW1iBcMfq8ABcFyX"
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
