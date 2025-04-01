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
    "3EsGjq7GNiG97dZnS7zEPsNTTFV8W5RNBcwZgTK2Zs3nKvVXihGk3Em7YWUivmMsNtzUj2uiReZ9xxxtK9f1dmGc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W17qxjvQVoesanGwecNV4ceb7oKFL2poJRbMuz5wBKyGck9LAhVEfzAR6XVFSSgnvriSJqWHNUWxRWwmDXM67sw",
  "key1": "2E64m9gXGjYkc2tUyiKkMJUWFGkud19HgMXzhk9LbWF7xsc3jysgTphuududJscVGTPnNM8neygLHXujizSPHWbp",
  "key2": "3eM9zyohJrnBKmstgUQ81167n7UpgAyZucRRvyEkEuBKNz1prPLv5yQciiSkhtz8LzsRhutaBpwLbiUFCXHz5Ao3",
  "key3": "5q4ZgEAtXHq9QTrvCNvWqUwCJ4sswdxeWginsCLaeetRyzbstJAqzBACjbqTijkLCCiWPsAnSBvXX2MRwzoUcjUA",
  "key4": "5cpWSFkdPxZNd53RY5EDzZshZiAaPm1xRvkynzzDLpEKeK5ehwbTVK89q3HkNtxe78ypyDTVXa4PrFQaVEXD7R61",
  "key5": "3BvcaCdi7wzL4xGfWeFRdjTLj2UC1vxvhAyoRx236VPfLWLzo515j4SvzVth5Si6d3oaTWLP75ybibJ7nerZCuJx",
  "key6": "5kjexuFBi86XD7bMQsGeXdqUuFoY6FQ15xCiWhHrhfwrt2zgoX7sCLpJ3rnBjFJzSHGyVdERhrJLShNcomi5dxwC",
  "key7": "u3PQm5ZPosAYbDXsM6Unyo2mCuz9kAm1DKFDBQh3XRjgTwbx7N6xZabRpCaso78Um4K5WFR1Hkwrv8Rows5uAWA",
  "key8": "4wyX2R6GwWZaXkpAq5yXwVKKGgebfZdpAuKxfJdsjfQ6P2sUA6wxRXMCruPYNEMKnmD72NhUH2uu7FuRtQmjXx5Y",
  "key9": "2Vun7zFXsuo3xdDEURk9Y6MXmdSA7fnMAn4EG1j9xYFQ9Ye7rVi8WJhEu8MJW3PFm29vK5UZm8uzsMyEUSQUmYZy",
  "key10": "2bNzPyJCBHe9Kch2L1KTDpzNwxpSkDkoMce2De7HbpdDDaeP5W9p8ySVbgqZF8Rj4dnSp8s5ARqM4EfnodAfTFKz",
  "key11": "3hhPtFBwqXcTZyx9HaHhdLWJFWyWUEVZdDcWY99EGXXCU5rik2gPLQf7LUp7SXh65GpZjdk9WbNEXxoEfURGpMvG",
  "key12": "X3XWF9jD3dgEWh1ARHBXe1crqwE5W3P8dFkpSCzwnWj4EWwAhamBiEswCuEwdD7dqPE2sbfNAja5XCy9XBw7C9j",
  "key13": "4CDpV6FGXF3cfQk2ogQ8F68LBJfdNFxZd3YTVcWaiirSCEiDEJHe4YvQRg1CgkhwEN2U1Eozuf3k34BsmPixz1Zr",
  "key14": "33R6b7DgvEXAELJbxTpyCyhXytfcq4UxfSsdzHrZpimpCcRRGVqe5bZqoHWkfh1UZd9PuxgUyXLaMV2fqFDjJ9NP",
  "key15": "2jYZTtPaUdLCWex4959S1gJeyj2KJ1kbQ56dtWo7PRtfXZWaN8XKUBctrup9huYzRHAMydAK9mdifAi5fT92PATB",
  "key16": "ZwAgupXSs94agQ6HEK9B4GnRpcCibNEzNyZT6uyrhRER9cmiJ4tEzuzqNY6P4xUp4Krs4xgqcPaXXNFMno2meoq",
  "key17": "3dxGpUGUVPmyDZnbVbNq6S7UpdrMHGaimfYZYreVxyGYDUtyWFEPCR4wfQEGWKyZyxXvRHNtR4G62zS4kagQAkPd",
  "key18": "2oqnYKjentKtwukrNgbDKT9pvEcWSVWTEuqaPrDKPzS6VGKFMKwFt5FnxHvuQjtXK4dnDKePujSoTxBmH78SNEfZ",
  "key19": "3SwAxsProgsAhJSNYFS5hMhHxNtHwqovdtqvgBCH2guJC2pCmY1z4dzsbnv5yQBfTPdLdjzqjLcbZTiwE8Aq8kfX",
  "key20": "uisQVWAjvYwwXxwBupSYpMssnPqU8X4PsrUFBHXiFy2kZjP1ZEPNnB6bxQfetgFA3BjSNQcgDMoGxJKQA3KtJqG",
  "key21": "5x6nPadm7PpaTqCoTppSE7pYoEyRjkJ9hy8FHpKWiRmZ7x3pgMNatJgc6jGkrCMY9PbMqYSua8k3xsfKQ9NcfW6k",
  "key22": "3om34ELZFprv8m3GaZ4sFGNoJXoFUB5YYuASTrwf7wFnssDbxFWQxr2WJ5Cc9aNMRWMhCvY23VPQ3UEw5m9N93KK",
  "key23": "1crZi1j5gJByLoGTDx53cT69QW8zjP75Dw8iku7hWwwLfk7TuGztUEapfhnvpegcyjPD1MhZBgfatZpkHqZij16",
  "key24": "zXXSfNiVtsaxrnqEjyRSdtEPyMYhuS2uomrZ2PQ6QrNeXkn8VBERWp5Q9CyRqmcZfXe5P3xcJXtWitxbxatfSEU",
  "key25": "5aMsYyU1EYJ8yawpxAaeJAs1RKUUFXS2HXqe6A7GpXBg7zYg4y7jRGTZvwJ47RbgvwVmqeTb75oVzAgqLnXxmJgr",
  "key26": "3gXV3MLMtNoZcrvRxBiG7XecaaAkyQWrvzXssVG8VC6dH5N11kAF8cpbA6D5cqWtEoWzpHTk51SbypxNdDpEGDaC",
  "key27": "62izvj7UYjCree87opqBScFRgieoRmzz74JLr2oTRCkwLc3bRePuM5NLoEqrHTvbikM1NQer5RAh4eRkcPZ9q4TK"
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
