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
    "47oC6cgKGQzdzx56gs3FJnHsSRL7AtYJ668AqCpKimWfUN98y3Wzq3kSCYiCen3VNbtArwhf7ua8MMUTX5C6LpuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xTzvPKiqQnY75DFHWYDjjo984AXpYPFk9xwwkqpw8YhbYUezwMBf9gTTRkJCSQwY8UMtE5iP7nMRxmG7yuTRQZ6",
  "key1": "4HQzAwxdUAgYmM8UM3kmmFMDBFs6BwjCF4HKnex3WTAC8yZL3KZdBhvipifgmFBFJVcmK5aMfzDAuaLGTDMEXvau",
  "key2": "33JyRPqiAx5SC1ZyTTSEuu7MvmYYLEPYLGV6nVXbMcPqhyh25p2VXL6JmNZS2AmKe9sEoj1te2vo2LxRM4iYgbH6",
  "key3": "4gWvi6SBVf8LbozxD4hKHYeteJQhgHWaqS9T3yyGjfmiuPeBBkakbSg5BATTWCdfkVH9N6wMPWw9neHoELZEs3YA",
  "key4": "5i6CY75g42J254CBQwRCH8Xij76myJBNPzYURRxdpQfdrKajJKqQtr2oUbYJVbk66f76gfW6StZuJsgZL3y41eYZ",
  "key5": "5SwmQAWjr1iARdRagb56XUZQT8i1WWYqRwZWoPAoguHEhYdf6K95zunahK274eLmP7ssFgQwx8mBaSRaVdeyQyfD",
  "key6": "5JjE1Szoq9hZMauw9894X6h4cQR41WjXrHt3R614pHDrp636h5Wf18GEECFAeL7VHJcueqjoucNARUtfnDj9Vsf4",
  "key7": "G9QU6i8hzDvgPbW8aZvfCBwVcXWkw8JkWKGPzmNTE4pTLkNiN7tTLoha4vkWDcmp9ib87A9frRVfLGdsnP6XZ4d",
  "key8": "EnUhdJeoMVA9C2LfzZF7pE6P5pjqDrVjsJdfZhHScY9n3eUixbZeSE2yHwzchApyyx79NG3cpfHEsjS1ofSamRi",
  "key9": "4ciXtBKXeJ3uEhR9ZMRaJKLqQvrdkskto5cBhTnBSrMKWzM4QLS1tsmHCp9Mpz7seQdrrLVvdcYM1VZySHx9NcUZ",
  "key10": "9o5ZUzXak72eeMgy5EB6b3npbjuw23DL94PNc5JsY6zcELH1kxrmqpEBXakTBHzwpPWhpNTaBH6HyTsxnEHskus",
  "key11": "3n6E3fPzWHkfpD7TPFYHv2ChUHVvnDk7MLZep7urmjry1dA8anjoswoQ9MwvdmaW5nsymgWaLqJKSgaPNCGgu3Pv",
  "key12": "3Fktov7WfWHHyPzeFdaNTj9AmzWyRXgW2C1cLqpi6a5G9DSBz3N1X8dEsAc3pwmKCffU53wgJDr5aHf3ENANaNQ6",
  "key13": "37Y7mhUPx72Po7P9uyRi5vQgCVLnNyWgxccmh3T662d2TzCfCUkappS1u8C5NwpAWok3BsuPC8Qi6bBNGtNUkx9X",
  "key14": "47eCCoL1ftm4bHuwWeQrKb7ZeVEhwmaLseRwDBSFsRgMcig4VVuzwG3bmVuj2wC2TCNH5ob5RMKDtwFcL2a5WER6",
  "key15": "42jGmHoeDywdoumcoorCZGuAZHatFURP9exvd1f2XcfsFSu61asHzD6Bpi8dcs98n49aTqLwW8aCWZEY3iUT5Ew6",
  "key16": "kAwzThuUj6s29Nx9VdLbx4c4diGcSL9ccDCwfJgQHSsBKntySX65L82i32vL8i5A9X4ZaTH37zoZjEtmzNyvQ2y",
  "key17": "gmDRcrt6W5r3syu3PcdQvFE63EqpCdEz7758b9jzAWcBW6Z59SaZvecdaASZQ458GvcynRUXLjkB2X1EgcSXecY",
  "key18": "48pdfxUKP7doQZcYPAQcMcEfWV4zRJT4w3SpXfazGu2bKQgS3jsnAbnPgYBXGXCpGS6GGj5Zxom941Powfvo9Lqu",
  "key19": "4PKp8NCWpjoZHzafNqeKGsj7TcEg5V9rWrfdfMncyqof2nhdxv4W7oge8my7RMQu5qtVPJyKkdZCJmKTq1TQpP4t",
  "key20": "5TGt6itEMZHVd3FnkooBXzKTfhSECwBmcwn8mGTzB2NeoDDxfKfQ8oNbqm5WdgmUc8wwCKKQ9AkMLdiVmBZcZosx",
  "key21": "5m9aZfQ2nGakGPaUvoCwRrbp7YSWusZ9UJFup3LNMLxvRhs5Qa4obuqb11QxhMzEUFNAMqMCAViu7qUp7UgkHuMa",
  "key22": "5D2FCQC9999y6ReefVXj1ykY17f45rVrUpHW2TBQ5aE3KjXko9PWhfQcrWTHXNu5guqtEabKo3sSjzMvhCU6tpFE",
  "key23": "eWPRHXe66unU1FBd1tC4JNdedqSJDgxBsng7Kvr36LwHPwGH4FdEutpT8nyXRzYjiPo1cb9rmbpbex8cCWNJBfD",
  "key24": "5dZYskR1QWe7jf85iDEHmjWtQz77WGUD2quWVnx9sLQZJbqPwYWNT3htgdvT8bonPpwnJf7Vd3zR8NNTmjFhsnue",
  "key25": "3NwkUjjWNfSCpXY7We4GqoAoCxAFE4cPRMkh5mcBTUv2XzDvzsvw6GMjzexnuWMGefNEoGcPnEMbm66499btPWce",
  "key26": "5FLVCywVRLrgkNdhwMDcCTws5WrKgpTVphqeqpxjbDY3y1BejGYqQGh3o5iSuXkrvqM18LPYPeM31EYphGurmjHi",
  "key27": "23WaCg43vaK9mYSJEAdRR67yUdGuwbQFTh4Du37rjD8gAfcbtbQ23uC6E2iEZea7dmFqbutKsjXgtF8HCrLY5VWE",
  "key28": "YHDBDMu7J9xoABsseBXdv2H42te4Rbbv6GgwVeZFq8zCTXdh6LyV7WZEGbTLAL1qwzDpoCETXCQvyTwtPgYtg9v",
  "key29": "5cb7w2QDgdegY8AvFxuJH8fXzzRk7TyamnV3Lj6mXfHd3fFfAGctC2pvoLzUYCnoUoyvxurPrvoZXLygRbw72GjH",
  "key30": "3b4qe49n4fPd6hTmaMQzLy9NDrw3ZqYpfbKgrjG5WwfSnBw58x2wjENbr7tVS5XZ4LcVz3DzZF5NyDxagRs8xjXs",
  "key31": "CKqHivpz58KMyX4rmpEmkKCQFRiBrtk63F94rLC928vfEvW4B4xS5qYk1A4GitjF7kAN6hMLUHiRJchikPqthPP",
  "key32": "9QouaA5uLF32MmyQgapG8JuwUGnPnmpYqwHez5HKL2GztSWcVT4q8GfmBtQtsHAQJi2u6htck3u2zSvirkSckuZ",
  "key33": "5NABfVgLaeYRWusy4Msmx16MHmWaavzRvb1dXJFg4u3xTpqwqQsUmWkrBLf7ZQgpcPmy1ZVey6iW4zfR2ZXofc2j",
  "key34": "4HjRaP9W4CpfcnP3unnGWkw8JNrcGdz9uFjTXLsP4XnDm2UguYYj3sxTvqtuf9GGmwWvTiNNz7mgk5ZdX9Np5GZi",
  "key35": "4uJXNbRKf1MD2Nnj4XCHFJkd7fsSbZi4qMwhAB3o4EusYhWBpe3iKkz9yf4MwuydrmAt7uFBFube1oxDrdRE5Sj1",
  "key36": "2QH5Bmpjrwuq8vVXLmoLGVQoXf2CqVwv61TM7nSN5aNgewyWBP8iyz4esTNkB3qT6U7D2bLbKXYzZtSchQ2DJDen",
  "key37": "AV55SR8ayPFVf3yPYkrpPNfeq9yNyNPSTKFVadc5tc13KYFR7fw5DrGQK2AkFagAEQSrpgNHF2JTJMkL2rJJtip",
  "key38": "3AvJbQY5y4xpCJrJovFPRPzJWMopEgmTsx6u2tuM3Vm8PQJ7G8hK6FrQAb1d61ELUr858R8GN68eFBKgT4bYf2Cc",
  "key39": "2RbHz8SMSikp6GCi8WZ5h3nxZChQFpGqyxCPQ2gzNWdt25QNZm1kCg5WgCMo6KysoCEfD2Yy7dWqxeovvqZHBRds",
  "key40": "4kM3hAUFrgqf57Yf55QaJXEe2k2xaAHSHUzapkRgrpX1j64G8VBnb2Uuvnsr3uit3FLNHsKw9UAmbYUmCen8LThV",
  "key41": "2pBkffPuUFn3wjkt4ogegd6xqi2Xk2iENVxCk2qoeMeiVDJjQmuhsjyjSXDaGpKSwzMERKiSZeoBdb6KQCR21eHz",
  "key42": "5dCMEwjVJ6H8HyFehicVKmqJN1mb2D2EBzTnvxWVqysrUoFieCjKkszm25PSyWe55UsVGoRd7t7jnCZctWiJG4Uo",
  "key43": "4hagBNdnj9QwC3yCtGmAdhRFmTEg5RufD6JVmeukg2HSWJnncWLUuTQwMzFap5bjwieUTPXHkPmKNjzVn3xY9bMp"
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
