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
    "2hqfmq2Ky48TLNArbam4KG3gD9BUx3bKrxKPMNcf7tzfPAgi5eFFrD9iYrRokkaySe8g42RBuis8abRz6z8it8f4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66smSSkMQw1Hxb1Ba3D8tgeGGpXvWSTu5MFLHQy8aHapdW6PwrqSE3EFZ8qNBieuSU38e5DoGBr3eNs1jeRDK3JH",
  "key1": "4AwGuTAoavaMVbBrNydS82jFUfHzA7A3iQtnSnrTb9Lf3o5Wogpc6E6TdZdEE74wki9Haedx8Pk6NhjsxiyeznWb",
  "key2": "5oBbMeq52rrNsKXmVgGHBVKfcV4eQZaby849bVzB8jpXz9wj8TGjr41UFAWPenSn5znRHDwRZ8Fw4Mh7bbvB2erM",
  "key3": "Xuuj9ZAjQEMWAR3QBqy1NtTxMZRUjsfS2f1A8CNXC1q3CGgLhGTE8LYu1DhEgRfUBmydSB16rrZpN7U3ANxKrMV",
  "key4": "3hsABk6XM9N4Nn2CHLA162cppXnu8NQbHmmYJRH7TtoexPY3ZgRrJLWBMkiwcK7TMqW6sFoecAJKMh7RLnRWfcXn",
  "key5": "5uwFiqdV59iH1nLFFhNB2hoFVqPSMV64v9JE2aFUXEbWYgSCJfqpr62BRxjkiXpfcy1SJ42MEXKXgyFuHL4su9iD",
  "key6": "4Y1BmS3LanUTwcM12kE5x7NXNxzqwvKaZqaYwm2HyzwLGrxn6hvkHLz6dTXtqnAQdjMwJMd4AayeWN3MXEDHRsP3",
  "key7": "iVFFyibFXUhTgRFTK8JLUD7AtNrDxV7uo2JLaxaZ1n86uS31YhVdyCm5j2hEPYea9adbcckfXtonpF6nXUENvKF",
  "key8": "2AAzkzm329vhG7vzZqs4ZRpUoG1fUAEdk9zjb5k3BhPxGTom2nSfUSySXQTjvamm6HVh1xzHiZM7nLN5J4XSeeJL",
  "key9": "ZRghUxDzfttCRhqGuEsXm3DL1PCSKBRTsBcaUh3ZRdBsxWfjp7LuVuQ74qpFiraCoxtFiYnADMhKwbxyhrHBDg4",
  "key10": "4xNsSw8bzSu7rL6TxLxQkQAaeM7562wihxEaFv2xjHPFtiaMf7d1v4JJspxEbBCTjh4bCeGLpdE2XDUKHNE2Xfu9",
  "key11": "66YfcUn8zmdaA5UrLnBvqZW3uAja8SjwLxBYcnio6CEC3LdeYHCTV6wGqA9uNrAXvPFsr3wSEVZA4NZrHMFpWsJ3",
  "key12": "2p8Uz7hkttqnoHBVJGZ2B8PM1HULEz78zvK5JUwwXDy5ckjA17tsmiGWuMJkEwZbmZkavPE7HgiwYBdfbeDFEGni",
  "key13": "2biFE1mm7CiyddkiiihNt2mxc4L8QQRJdEFi9BWsYUSrSzahS8qSwuXPaHwWm2DWEzz6eDTeA6SxALtDfTVLuNDj",
  "key14": "1i6n9BJxyCYytkeFHhSpspFE786p7cexouS5LJL4AjhbjyVEviL7J3bQiwSeUddAccEc1C7Ym2zqfSMtHaAG99r",
  "key15": "4ezQDpBDGHod1BUjLnmSM1iufeSjT7QYdWeKZSNiCvcaw1mC5FzcB3GDaroB75wGL6eBXNrRAsVi4eGmvmrEUk8A",
  "key16": "62GgHGWFQDopmRiRWLNpbSUz7Qe4ymATKaaRgjYe4m6ftyNytmWRpVHQx8bYDLgo8etxhNj38VymBtPwfGjZCX2e",
  "key17": "x18gQM3RW4VmPMp4rVeLsPBUgU4ywSKyfWbgGPaZZr7aSHrVLxD1BUoTNnWvJ82SiRHeLsbc3KLGJWRVQiwFSL3",
  "key18": "x777bYRSgb95uemoouTb86U9yhEr5fdm6K3bfVKGVhKQW9vQCr1p3v8gvkxKYXF2C44brnzdYDUnAYivBPSFJ9N",
  "key19": "2VybFpTiVE1PVz1L85oTXaSTEgCGzhcSxA29EoUJuoQJb4hpbYMKEbnG5VFfcRPqvBmeGyjeATLpffbZipiC1AsT",
  "key20": "322NBjwrGBGjHum3oXSpF8RtLzCmmwKqvj5LG8KUSrHeLnj4nPURJvFPr2z2j7dCErcyYRnDTmihJYjLTsZHVj4e",
  "key21": "5ZYM5CGqHuvqwVCEx9aJTKEq2GQ7jA1aEhNMfkyRsPUpknPadYoW2a8WTyQe8zHCqSvZVcVyK8e1tmLv8UVojFBh",
  "key22": "2L21kZT4rpEPhF41J6BgK2bLsrcm5dU9X5Wvmgme3kYT5nWEShFqTfZtQkeJX6r8q5tFSLTkMpLSDJjpoBZyddTf",
  "key23": "3gYD1A5ipoZMKE96fT78GaFDzoErXpjXfgyTeMR8q6uJ64ACBJxcbegDdqnXJrzBG7s3unspuJPbVVxbUYw4ECmX",
  "key24": "k2WXDroV1GPc94PzS2kQ3RPsz9mmmT4enF22KUbTUnLrYMRo5QK68jv3KK3Ti3JaPsm7oZGKfrfNNNN1Up135gt",
  "key25": "5sHNZEPuadRvnXo6gWXGtA9NMAVyfvqdT5Xy5gXPuaXUP5RSSVHrFmmCuLEDe1n1AoJuT2g8FXkzPPWdmu5z5UXY",
  "key26": "4wttAq6kxNRPURuixbDopmDm8b1f1rNtoTwdPKssjz9z9PuecBB5YH2fjPQLy8PLtxhXjnAgeP3guFEyYrMvQ7ub",
  "key27": "3kVUuJdPo6dFc1CsYyCkGkNd8WUj5xPGjZngY8M2LjGRwmN5PRKYBxfGZiQ3SFu1RkPyT9awjvDLggivHwJPaLy9",
  "key28": "85jqXDQmD7X5QGCpx7S3ypdcC6sDqPGTXH72XaLr4oEpACWeKas198s9E8kMm1qFggiXh8C4hWF8pYDcAvVoDaB",
  "key29": "5SeC7V9VkwBhwMbobcUYNUxUWi1wa1pxqY8j1D4P5339Z5AoQvXHSxpJ9yhPLAwdXCip6c3enWocUvuCnF3qd2QE",
  "key30": "5NcbtsEJsTEgBJ8zKfyx2M8nFVkZKedbJLt17dKoJoZJhSWBLre1No365pG5HuCgNn9WYUMMVvUFdfWeXUM1BTMJ",
  "key31": "RAQ1fBDF7cSCtBdwMWKne1cq317v5guMhyVdxuwTDockyrNrKPJqiAsXzbhDZftbcaVWtfW2E52PdoaEQjzhTAB"
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
