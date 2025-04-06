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
    "37416qjfUaP8ScZyWqh8eC2C7dFZP8EKg7c8VNMotCWW135Z1AbesZoRqxuZvgzoQ3RnrJ96TzJ5iMUmjeHX3LUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48Jh583YkAb9XqYZa2d4sigVMW3EYeq1Z3GxRfF9e6mQxJshgzDP32yJVP51R1YX7JY4eXjwHBuJ2TgV7bSbXhvS",
  "key1": "4jGv5xMseUN45KcHozEAT1EPZkVEWSJSNcoJf3YJYhyRs7QPEzAZrVG4MdiSsmEXSySPRc6hisBs7ZD6m9a3c65W",
  "key2": "Vodde2dD2EW4AVviwVUeMouHfovkJt8nnJRvkTLQnuzYti61Fv6ouffkrXd4scyLeCAftxqCsJ4rfuY7CTNdgkQ",
  "key3": "4GLL7t1S6jZnCmYZvmCSsL2HcBuQQ5XLr7zxXNGiHUD3TL4ZCgUaomgHVKgfqjwJRFrRECxNQWvJq53FmESLsvHa",
  "key4": "5MR8HKSrfykLaqmGG4pAJRzZtvvS8eYUHYYZz1Mzu4mXJJiuhGTi8MdNLGeZ6Qsvycxp4dP2QWcZeQk4meHf6fmi",
  "key5": "51MtoHjRF5H1bCzZmQ3GtA8owAcp5iGpaZsmW1gM8jej2eRLADRsHRL59UKytSF5cm2BAKgkE9LC1LTB6ehc4rkK",
  "key6": "3YWRut3oSU4Wk2yoaQDMTD3KffbsioNXtoqkdG4syKzuqo6sSyyciDR3iPw7qpUfGdF3kfXfa7LE9st58M6Un7nz",
  "key7": "o4ynYb6DafyXuWVsgYNL4Zumt3QGp8Ss9Mv39tfesuimApQ6cfz2pgaHjQWuy6sHhcG8dK2xXwboEBuC78YoFXM",
  "key8": "5TbskAjEL8xUo5PcZwfBjNJ8qADdAfXzgH8oGEdG41kmxLH3TzHAPhrHW2x4j6DsYX9XqDazJtCJZWgfrMHXnrCk",
  "key9": "641fuH6o9QBukS5CpgBHb3mY8JgGT5Mrz8rWTbS1GhiNgknjzP39UwSg1VXf7BwLWYULJqofP2sudHdjffpuEGNW",
  "key10": "Eqwu7xu5r1ycvRZn7yqhkJNTx91Vk3g1v2uwYdn1HaxX7b3W6X3i5TtvFcyKVUbYptcPwq42owzBrEzzU17oNr3",
  "key11": "445NFZz42u54bFHpo1H5r8B3pmALzWGyiEv6AcugTEmLUs27n5LUYZk9fEL6UJh3vDpMhVvFv5LAUiu9bzGPD6jv",
  "key12": "4i22yKQg7yZdAhbJbHZ9h8rbkE9mYZEDaXyQDCgJ6adjUKdankRcm9hU8Tm3Rpu2W5LhLnuqvfWUwHwfhrrC1Yvu",
  "key13": "3eZTDbP1TYeGTPrMp3Eq1ypM3xuUmv9zsBSp5UC3pJvLbXmjue5zAPQ9svW1j4ZReStCF6KT6kKokm2bnDWxCnWQ",
  "key14": "4t7JwCmXLADTtAAkLiWnwRmJBVnV6CqNLqp7trzEDhSNQUYYsujWUXUihwNv3EjwBgfXgR2MSmZezWyXzTcrtu9e",
  "key15": "4PL925Gj36mSS8d3JanELqF8bM8MjidqoGD6JXvcyeqTFwwwxLuYUsh9bkPmcNZMTwrFLAhALESEszk5nFeq2hXS",
  "key16": "2ysPy7GRhrdNRXXX8KPkHxrr5UqdSgZoyUKgEhwT1XenXukpnnco9uSjxAPvqw2nQRemNm7e6PCpCdfXWL47gkzu",
  "key17": "MR8VSyUXE6iECLopDF2nm9Tcz2P4PPgn3rwFAgnGKZNff5ncFcUhbfbGx2ZLQYdi3w5cZJ8raHZyncYoj7ncncd",
  "key18": "3MWHpTNWmkmR3r8rzvYt1c1UVsK3ubrFLUB9AesxXUJqTBr1dbCQ6qfMsJuTiZB3R7x1jMRVBftkfvg8bRnDeTgK",
  "key19": "2TNYU6xf5r78vpWAndfkFp4J3WxQKwQD2JNp7yDPqvxXEJ8EH1sLC2miWib8LaGz3SPF4EnaxnT7sc9vRct7Ho9k",
  "key20": "4cSFf5B5cSGWbAPfeeRxEXHky45bT6QRYtVunDMfJNDPkstgXN694jQs3xdTZw7wvF4N9osc7fqcogGNpdaAusis",
  "key21": "2qgivx8nqhEbhhXg5SMVpiPNnHp74QugKR1JrmDHfrDF1SLySxJptD41Jrj7Gxdt4feUdcWXZBLSnFB5PvDRBbVo",
  "key22": "4ozXciVMe4xKSR7DVybpHCRnuwbBo79cd21jd3qw9MxEdTAUvL27JgeB3ve38YYF5QWvoigd98KiUz4g4gQHh1zG",
  "key23": "2PMASBURibZQ2UGXfbKnUA9GdByyZda3xF8ZTVRq3X7QWcDZbLoUcgU4gvDsvPv8Yz5sfbJkoNUms24skJPrutrF",
  "key24": "Mqsqi5Aa4LeN8HTSotaVEFedL9V2fWdkXnADF6JZX6LiVykhMdsxYvadTNR1Sg3mz6nbwtFTfyDE2Hvv38Xywrn",
  "key25": "2qyHG5RRHGCNNwwJbvN2FqseVta7ZMpQLMPiDcijExfA7JJsTdPRYT7KyyaYp2st6dmusA7RdYwn8EwnFGZy7T3p",
  "key26": "4ZRfsryb1zCD1r6fo4TTKFQ2Qp1NbcJrdK49fcjxgTKX5q4wtwQAvfs7voDyepiqkBmunZ3pfyHnW5eWEjXmn5SV",
  "key27": "24xaB3xkL8oe8DFCxcW9QL9hqt6UAYPaQqdEZtksLeGWYsisPokTsEgVEJLwfjfScFXCKn7LBpbsQ83EqsTCM3Ae",
  "key28": "3hQYiegXPYbMoBjCdEghiaNRvjRbZJPpjJrWD9S6TpQQ1thGinZcXvkxdn5m9ib9zF6EaAcVpZfx8nRDxQvWUSKK"
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
