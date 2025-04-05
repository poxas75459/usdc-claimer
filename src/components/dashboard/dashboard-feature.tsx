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
    "4erpF367CiA5aNLy7PFZg6QC9xsW4WpeSfDDoRLkMvtrhfJCwRyPQARozEQvLRuAQj3iQkfHFPsY34KgSvoPaKy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zSFuatdtPq3DuAHHEAvLXDLMkP8EaA2R2xK4dqaXS6DeHc5qHzMnsXWiAZeFpx8qeN4Xpx9Tu8nurYzizJsZAYQ",
  "key1": "Ysd3jZmRF7J7ykG9ir6NNAA2gvFj778Zj9v2G9gmLNyiuFyhZmdCfCrvZqGy1FHEgscUTR7G74xgthkSojHTFgk",
  "key2": "5oK1fnttUBgupuU1sy7W52ruWfDfYHPn391TonPYCjmdTxeSbCgPa2VGAD28QPxkHG6wJoqQddUNaF6AiV41ABT8",
  "key3": "3YvzoQ2DUprA3KqsUqE8FAJkYHWEJfX7sGeAbKjUKAeb63WkbPkH45rrXFbHMyTrb8fKdcXpbnqneuNcZ57tnnxM",
  "key4": "3yg7zJ28GzTjJS8tCB32VwPUqxVXUjaEQwVc64XtAF25zRnnQJA2w8qTRg6QNCPJMzmAbwFxDTsp7ChHXckTDKug",
  "key5": "3HU19YAHNjA3QgX4jcPZ3rD3krAjSvKBMuUQL3RiLRKnMjEKije2xEHofBxVMQ2AVy7aMsVjy29mA6LcMBnKGbtL",
  "key6": "5KzNzHMaJFmDNP3kpLmYAVXaqK5vqG3fKu4PdEkavA1aCTpQDKt6t7U6yACbKnfyAC2o8H4h5Ym8i3LyQFVxbjuL",
  "key7": "2LpQj9nHV3swMpTuW7jM1NdC7m217C9ctVkMLaHwaEbn533tzEV4P9sFgVx3c2EkE84vLTyGBYG6kJfqs7UnzNCG",
  "key8": "4mArLTekaWenArFzdpNBmzwoGV8p3qpnokejxsxwXwAhS9ojyBDoSN5jLTTfudPmkCoSBpAEkGvBuX2q49pzirRr",
  "key9": "2A4TKSdUrMmutxuGYb4qamnzCCqgDfQdm8xNmh7RKHjZegxj6DcEYPmLvH1rpdE3aitTR7cnRAas19tBWHGJqXTa",
  "key10": "4ginBNirLEUou7X5pqoSYN6Hp8EmyrYiqjCgDG5nFmCmUmwsqqN22ADExWwfyuucLHUok47N7jVXEf3H5x1HoDsM",
  "key11": "dxXrmbrUSX8QhsvspXvD2LcWreJujZoMK6GgTym8DNhiEBv7CTAcF9bLrr23QDih36bTFBMhLfskNiJJG15NFyh",
  "key12": "Eot219yihsf1UXVi2eRKANYFAn2XcziGzVU2VXkjYmw5ZdS8y2Mt8hfx3NqdRunZLHXEfmoihzrAhi8EXSNAG81",
  "key13": "5ZyMucnPJSbvygwJt76d7bg8dZtwMbe33YqziYB7cGPjs3bD6Ce9mewMaWcnDSXXaBf5RrSPBoKvyEsE35P6aNLW",
  "key14": "3RocfSNjDrnQGC534Q11KxrL2N1onf3wfJM6Yhd4R2N7s9VLbFFaeTMhqc92bPZiKvAY23W57bf9W1XY2LfwHtYN",
  "key15": "5sn3RkkVMgMeDG5xha4Lokhi2cKL6dPrsC3xq16GnGKcYEWX6Cp25pJVVFJDvB5saf8o2cwGbpc6Uh6vjURuaUYw",
  "key16": "3JSJtX6ZyaJF3k2bi9CTLa8x7tpUw2UY7DFQsh6nhZUfazkhZa3sFyNoniMMFuyT9cBkG1RG3hMF3thtjUmYFsmv",
  "key17": "4jUoXMXGM4tdPSVTpcrvcz6M2WCgPAe6aXJQPktvA6FK2RtSKGBetamwpZx7uMB2NrJaMGtQGzhFZ8oPgAMjAauU",
  "key18": "5JiyfDtHhGZtp539r41ApfRG6ZEXHugYEQA1wiMV6Rfxr7grDmG8iSwrv6TWy5Jk9Wj9E8mjtpS8aVZNCXnS5nh4",
  "key19": "5ohEMWmzJmQUPicePRzcZfzFGDbJxmGWSkKLoX3czsSFUXr5U6eYqM3MMc9KtXPvFxukM1GJ4Q6H3oY3YJD2s54i",
  "key20": "f2FX3uwyPrGDwNKQEbL2bzG26iizGR4G9cYiDhEBmhKUFkChyriGdFtH4kjPZWBGjQiaoMwPLk9VM6Efvx9i4sK",
  "key21": "xCNVysgvYhAJsb85PnxWgA6HAsdp1Hx3PppKrLudBtY5f2ZfEvuRTDCM1bN3VEvxTWyqi5u3PMp2EyCseMErGa6",
  "key22": "3NvxJ9gZBadLoDzVW23CnVaL4NdUTZF8FZ78w7qyWNRnZWUJ7Dcjo22oxT7PtcGvJnNu3odpiAbxTLP5d7ghzuBP",
  "key23": "3jqoZMNaEkqMwohCxpFG6QKRXk2oAni6Uxab6kJgw5JMoCQRVYAwkXtxJbE8kszZPyE1fsToZcG9w8sLwC1zFSaM",
  "key24": "4mmAom5u6qPT6mtueay2Ajo3aJvnqtdGnyZrzNU62iDsvs4ux5xcTzEMwPK7diyANCm5tyXHaqo2PsVzxexSFyVu",
  "key25": "3wzHBF14dgikXJkByvijszZzswXCYG1jKazoMu827qhXnHAboV6PV8rv8Dw42fiADPVSECrpoqv5hvHZq8BjfSwC",
  "key26": "5vvPhfbZ8YSzS7NoycNsWGxfHQbBg7AmJWhVmoLcPLHLSViggVQgxXPgpJgyfg48kXzdXLA15XmGmT4n677Fwn8u",
  "key27": "zo2r2aNgkxmS7DwWUqxkBUh8MUietToHjASJ7ZMoCEPCuWpKLgh3ug55fkwfDNfLbai4cw4fqEqz7afxKZDtYdU",
  "key28": "37PWqmHbQ5cK7MTSx8smEihx7srENnRn1dZFHU7shaaxzqe2EzGuvHttCtw8VBKoHFQSW8rqDaz37ETsrMsLGJ1L"
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
