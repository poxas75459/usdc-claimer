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
    "5YXseLbCmskot5b59CGJSRiRjrVHvk7SZDtc3qr9vappusnrv1zkuo28mPnDCUMzhUWsmLGCNiEbTkffr7WL7BgJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SMgqoD9KG18psbmY6rXoXfgQzCNe6qP85jicQ4V2oufa68jGjbVNHtvdN7JJqM3BtFPTHTNBrh8H6uD5P9mv7k8",
  "key1": "2waRs7kpDHCZaxD2CeatZZF6GgxWruiBJiUm3vysHZYKXpWMpHKYrZJmrtkeJpSYyXFvwVuGc17Mf6V7x9ipNy1t",
  "key2": "mtHFPM6tWNwtZUuaHht845N4AAu22oM5AJqE6ob4YUJqZHCGctviAHJcrXsJY5EfXzJMPNrLSekZtebHx9jhWGQ",
  "key3": "H3UNU4123gkpQFUo3fuxuR8i4HrCYMhMiRiGZNLzJz5QAAfqwsegLSbTyreMzmfBakGVcsQ454KbuSThng7j9Tf",
  "key4": "w3owU3UoHV5r5ZkpzvG5fXaDMKbDfBsJQRjNgo2jfFT9aVH3QBb6oF3Jjh6BuYP7o21wG8pKrXoHvaF6qg526oZ",
  "key5": "2sLKJ7oodDVnEpqcJqeJJ7bAV41ZuTV1VeSrurapsTnVhCEUCsbByuqo3wJN8jUWbHDLgwKiRmS5rZg2abPQrt1h",
  "key6": "4mx24oMQd2QKYfcfip3pxR9sXvKoTnm7D9RcLajnjPaWQmho79gBRSyCYqcyGtDfaxkj5CadYVSj1Ejjj5VwNeSg",
  "key7": "4yp5tHNiHrNxyUyGBnCg97UftQmjPSuMWLZ41Nca2FKrJtAufATJd7UJxNuKgq7UrtdY1HH8MATbLw7FdQ9iCApA",
  "key8": "dzMdJMR6Gi7mhKRqLJiK8diRbYyaFHTgmhsrdSKZqpd95c4p1TR9WcBKjmqkxYLVSWSZmwsdw2tg72gC3Vn2Bt4",
  "key9": "2vB7VyL7Wh6Mzrfz9wdL2xtn6Joq27aKmDYjPHfBdWJmCNj3627RZCaLQaPyLSAxhbsYufYASg9vrZeCV9CNGFDc",
  "key10": "5aeJmhsrKtER4qtkqZwwtcFAScguo7ribP5NuZEiUid7UhJzXvWuKojkhMSQqVg86dJSn9KJJGAXRZUToACfvhtk",
  "key11": "4NtpS5hAfVWssaAkBA5zhy7JyGJ1QnXFuoUXmSrDCDCKkAdYyaDWmhAwR9M4bBkviGLaU3pevFMAsfUfQn7Ngw16",
  "key12": "4aeQyxDKfMLSnXvD2eoXvzBUC78e1q7gtYAe7SRF49WgbadSD1x5tbrPzg7FAyFYmngpr2DteX4xizeUKhdkyzba",
  "key13": "5J3rvDaW1J4dBd1JyonyRt2YsU3Sz9hRLo3ZqZWmpFH1ksfpBs6vGMjnwv4wHMCX5kpjpQB3ZkJA61YniGnivqJm",
  "key14": "3VqvwnFJqeQxBZLgN46WUe4AbsWcFA27gZaXSMonZp2C9oHn1gVHGsF79TKZz2dmRrt1fYGmkfJEgdCkvwUEnzaM",
  "key15": "tWYXgJsjnbvxBPsLvXjBtg6ZpdABpSChKSQP4AjpnUiACRZKMvetJsC21augddJncbk49utSLXfEXVvWFppcMjm",
  "key16": "3gkgwsgJyeNQq2birZVhFEVBDDBRgij2J5iLpN5qJZgGZJrimaUdjoTZUbLxpdvDhVFALTBwZsBB8LAeVjRwmaGF",
  "key17": "47Qa4ideHy5pPhEM1916wpoVJCfZGrZ2r9sAcavRwQdJq9qb9fSgrRpJp7t35FCmRzDjpLjLNmRBsUqQgniV8Z46",
  "key18": "2gebPxaoCcBMtJK7TAXv2W54uCK6xggUQYFUw4134P98hQYnzmDYxQKgbaNBvSb949rRtxxr8xq2rjvoZLzfenVz",
  "key19": "5LJaT1o6VBxtvDg7SMiDotDbWFkGZ9hLy5uig64zV7KASmB9tu713fnLcwdoPQf43jz4JQHZJyae3FPacsutseV5",
  "key20": "2HA38VRGHvjCH7meL5EP7dXpHVyTEMgp67EAFxeXaKdoAjCAFuMszY9Po5ZBRPtXr3zV36nnssuyoubQFuWePKoS",
  "key21": "63pYDejZuxrvbowfdgZDPuFtckogrz7tXvnYo5oF9A6TKHbKCyEsCYtFdTj37uDfkHXy3VwSAv7o8voqmNA6JdLp",
  "key22": "5RafTSL4eBfJAMsuBrBMRABAiXPr6vXYR1mawVW8kCPaTA3Bycr2cDK2qptaQ1dStKwpEGpchxRiTMR4ggZJxk6Y",
  "key23": "ni7he4sSoaQFgukSEMNk7dAkeJzdxJHxn6Gys41VBp93LDzRcdaoSg7o41Ao2ctMjsw9ZVBuay8gozfY4LUfM48",
  "key24": "3X45fVWzMUuCGdthTC4C3Qukupex3V7sBqBpM49jhSGunc7ic3NE7SSwDbEwozWGNhBdyDqJsXy9yoLTuv4S7PEh",
  "key25": "5torFpZDJdpd3dK2bWiTTH84efeRP1qzbU3nconW7C8U7UC11zYNAjphjEMAyCmdgrAP8T7KZkgnjqLk64Bp2UH2",
  "key26": "511QtzDuo495oNURKqMEmeDQnxX3HxyabQrrBQ4tVgtT5eBcdAXQ4cLU8YRArnsEJXCDakUD35jYnUYyegNoLK5S",
  "key27": "47fceQyMJ3frk1J27UMB2h4W5p513TGwS86446qW1Qiz7L41qxVhDW3fFycdKyKVLArYdxBBQGw9F4Uzwsaii7GE",
  "key28": "3S2a6wPy6mKJFmPywEzNH53zrrf5wuSebbUM78KCpp3N6D8aFYhWZKAtk7DEE5knL5KVMyUNhn4DJ3rKrzPbmxC1",
  "key29": "4KtgqAMksJv1gzRv3koA9wj7TNtvD5CdbkQmGR7TU5S8ZdLFmnvamoEA1KWsm1kboBD781XjtzueqWH2m3CzrinB",
  "key30": "5aEWyDFixxSob4iVjcTApQEunVWQzZZkiBWBdL5vjFpuSmqmwVGoAZf1HWZbiu56tdrchc674YWwiSX8hY1HPGJg",
  "key31": "3KKiq7C5LU4FrPP4r5iqd6WbEht2wQffVx9pKgKMMbny6u94Yyw5Xuhig68vvLFf4oWgn7ii6usRRM26bPY9Gkhd",
  "key32": "QAKx4bjYn8evVJ7rzH6yftrZPN5fDPxbcnYgQJRzBKfnaXBDfmS3CwCrz1MW37VSFjzeEdJDDW5Sxtf6V9xQiKH",
  "key33": "xGRiKKSjyp7HdibHwLhm8Cvi5s5ndxEPU1kqriw2cAz8e9CpuP1qijCp2BUrEwTQ7MPNVzrwHD1K7SxxDv3rCRH",
  "key34": "2wUJQ4vqijhJtoTijS9pL8SQ58bdYfFYsnLgMRiX1Y5o91eh1dgUtXAkktYZWw3Xomk474DgWA6oR3du3Jivx6PV",
  "key35": "3H23gkgpzGLc4afUGiLTnPPcKSYXmr528UVruc7zbXrTouZHiUdX8tE5GwvLAT7n1Ezit2xqcodybfVKXGwsL8v6",
  "key36": "4Jga3ePqDJMYiSZK1aYKsnQgbKTYRW2ZZwxT5nkRNbkppGpKXA8pczBgrrFZ32S6kyKL33N5Gaajr6ytSuaFLkJ9",
  "key37": "5DqVUtpiLU1FfezkCqF6iohwybd4XsTM9qpMzUv4ujzTJsGTbAC1Mbjdmtq9jkiJ3qFYZYcdk3yo7Uoo5qEAZpGY",
  "key38": "3abhXtZ4BQYmmPcg2N5tNFQ9xQBn76jdkv2ZSzkXg3hjRk6zdLuEUAyBNdYfNjExfnSMCU11BKcWsiiTLD2kY7d8",
  "key39": "2zF4ZFC6nxMF49Yoxpb3Admx1Nd3sSme5uivKBUw6auFwVMi4EQDtAK1CtXr1G6dikKtp8N9D6JxCAxB6cDtajvc",
  "key40": "3fi7RmTJhKZpTDYsrHDnsBc86X5LcDsJZZJ8XXd6fxZj6yxBJuxVjCCjmzgmd5MBJopEvpKG3i1TGzga77GekDn2",
  "key41": "4FMNnXgskov5t4qqJLuPapgVaqDTUqSLtXyrXJmzTRHFv3RuWxqS19gvnG9z58xHYDJCqcXrPVDDWQvvXzuQW2bn"
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
