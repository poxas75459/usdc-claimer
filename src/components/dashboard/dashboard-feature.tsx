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
    "5Zo6ynY3EKz4sjxqGNe4sHrtJwTpnqr6VgWXWMi9xrroctMu2asuk6xm4XNiBaamZeT7w2fbByDF7F5U6xMsv5wP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hdWcpNG1kJHrSdnLkPfFu8tSNcwfZ698eaMAF5phgXJvYH5Vg8t13a1P6dgiCuNXCutNvhRU5i9rbcWtZiM1wcA",
  "key1": "35RmBCw47sZmcthCvHzo9T5quP3j23Gy9Bv92uQmD5sQfytX9zD7b4m36DsNaFpiQRJS9Fqwdua2jRPwPWtraohS",
  "key2": "4MUwPRZX3PGQV1PcMSaQcXRhrhWo9jdfDmUnDrQSaBLwXPygeZ9PtwkJcWG9bmeXvKLmaEC8FEMrWkXEro9WXJvY",
  "key3": "stjyLBnP53ER9aZSrvjn3K1U1cFSws5awNVA7ceaPCugaQHKtj5z9b3SjP4n4vCSnki8MZT9xvpHUBXzL9pdjFj",
  "key4": "pEYE1voURFLm7MWuANBqiqdBSBSaEgcskHZtyNVoyE5VeyTut9rUCbeYabUZHCV6Tc79c4SgCCbjuZus4pw1SUh",
  "key5": "4qeYxCHqZXTKC6NS1nUuaW6vmjw4eyAbPVVnUoULtngrutmTonw6bB2PZL533ByQXdQzwDn9eP5DudYT8YRassr3",
  "key6": "4Pdowo4k8GTAQP88qHkXatSqz2LiiD5LiAcTAQMePiLJvgWLzfvv4Ky5gTV1ryMaQ8Aogbp3RDH5e5g5vHAe9t7k",
  "key7": "2eUFmVK8VH8BKfDAdZg78jURPJvgCZZA2PUo2btcDqKyh1ycDfHGFH5QaoKwfij6dDyPw1ckjugsG4yiMnS5HFTp",
  "key8": "2cE7rJmroFdt7m1u2rZ5zUXFbeuDzryfFt54QAkUxkf1kBRAy477yLvjYAyciceKbVQ7n8J5uTWyV2qgtXvFmKhF",
  "key9": "2qWaZCpeZA9123sbAt6yqEfKiFbra5YDeNxq2asnp4Gak8PqCstbvNJQRyqotwLdUZqKXHA6iDxo1aqpCdnzqoqY",
  "key10": "238ooo9EjxmLJ5KQ4TCeoweSpCfJJyXteG7hjjXyrFUUtZJb88fRA5B3mRasdTSGYuNRANrYNBu78dKzR4E5gm2N",
  "key11": "41nAThURuFkdDFgigm6YCXwUs4Ja6XgGkZHRcmVsz2xtgtsD4dMYPkmWeSDzbrU5gjL4m6gDAwaQUyYB3WzVGMrU",
  "key12": "5UyNGvzLdanKg4bq2jQe2acr9MnJPYfz3S1arCf5LdcD8LuNqYWKThBEnn8QT9KwV5UVpmX1sMUmFHy4BbX7MCqP",
  "key13": "42jAgtP45K1JjCALmzwJyPbvvgQnANKaiTvpXAGg5SwREhGAXwg61GPjsU7chfbVgwQtqW4jWTkz1RE9coDDX6Rf",
  "key14": "44auLzjQbBG7TD7MoUxBpMpHFekh5c4xo9qYzbuKh7JFoyMDvHzVcbvJNMBt1HgBxMuYBMRG3D4niXmsWi756mko",
  "key15": "4CQkqH2Yym8JtuHaFHdwtY1cSXstqWD3rgMyySoLbePY4MNWeGiZHauzkmxiREnjZb9LxSSgZg8VB4rwnaC3eGxU",
  "key16": "5TwxEiZVX6cLmHd9HHXfPUdXuaBpm1J2QWEQu1NFb1328JCkjqZB5fVPHPKFiEFmqonoUsH8zrAVABo7pGycbEEu",
  "key17": "GcP7X9UxGt3aWTVyksSXPigckvJxNEJohpeS7EXyLUCV2WTd7TiqitigahpMcKuVkEjhFPXs7fpySs9PpYhUiNt",
  "key18": "XLXnGdgHcjVrgBYNmxHEk8bsT2TC1DEnRn69xoP7rKyJEVvZRY6LNnQ71XTbXbjUQCSxqSZEo1G9ySpCCVucUHH",
  "key19": "5Gmg8UCm8Rfgfme4Qbz42UB1gVspPtXV4tU5eUXcace6GbRWWr6xeyftEzPfKdr4xiPbnDdNZWDHqw6qajj5WGYU",
  "key20": "3gVWuo1qDHysf9vD5ZmaZNN7QfJbRo4FSFcESK5p6DsHw6N8xHgvzHchDafTi8dBc9bxAK8eVX3PK454x89kdwXd",
  "key21": "3eatWUjS9HL2xXbZjKK4mZx6poPnqobEH1PjV4DE5EfubBkVLsmW3tLHMnGhEX6XRCqrwWmWC7JxSZEsEFNevhEY",
  "key22": "47MpXgxxBV7rG1ff6Ajb94UMaVdhiK6FSdEvby15ka1DUermSHMTLBd2y79Gr1vNbho25A6UAbVm4U4mMWiYF8hN",
  "key23": "2vW2vPLzfruGHxnAwFWynnBy5wWFV5AxM4aGzJfFy9zTk94z2mmSsDCGcmCWZju9tDApMx9ni6PV7BLECwwBUGNf",
  "key24": "4c6mVg2PwAxNA4REHZdAofVwFELdccuNzTimQ8WHA9yYLA9GRsRS6xP9ixQ5VK3jYUMfTTSogR2CXXZZV5rJovEK",
  "key25": "4u8TusmyA5v2HX5sWVCeU2rj2ct6yhi3vmDUTDrVmhZYCLVMZesMZ4GrWXKq6CN1fzCE2c2XKEmk9qJibzsEGTDu",
  "key26": "3vo2PKCk2t1zVi6PYkZSF8LGkoCSC4EvjPLbXcfnutMF9fru4adUHQmxthQTaM9ijAMneboRaJxthrpggDgtgLRb",
  "key27": "3VTEzjoqMSYE8jLCtDPQVzP5ho4Kejv3JMrTUtjBhkKDLKZfYVjyHDnKhiKpsJQWgRyAjn4X3Z2XGxn6YAtBtUgS",
  "key28": "5eKyFJDYLbojAm9qAMMcpk2p6mnQRt2QD454m5LVDoy6C4N1DmK8VJ934DFRT49JFwLgKTVYrjbkZGBNMy18yxYR",
  "key29": "4qu3n6eyB5CZcJkQZQdUq8J5b5VkaWDG9nSnWWzB66iKe84DYxUxN1HNtoEFWByEU6HDZooWCiRhH81RyoCnmBa6"
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
