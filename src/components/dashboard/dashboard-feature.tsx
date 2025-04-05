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
    "4nKxcC4VhVsJY44ir7n2jpX62ADV2egrezYWuYxg458xGutJDWZh22aUm95EGNK9ukVN4bZwaqQXKGjDjDhKta9a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Mbghjnuai5wvgmWysc91CBQb5CadBSiYCHEFnn7qQ4xcJqT8oJddiBsSwNg33yLn6bqvJqhSjJo5YovFZEdFAEx",
  "key1": "5L8aNfR8kobfaySkwBBfviTJtKPe6hqT12GxHhxiucJ38hxT6hJmuRgqScQgx1WmJEU3XsPQ5cFcEJqtnbfLtveL",
  "key2": "3UEqAagLATHMSuBUAL7fqvDCsLYDSf2tj7krNMiszpmUgXCyrNbdohBBokfSkU4MQbMxFNmb7gsftSAtFirPmfoU",
  "key3": "JV6gLZeKtYy66obXF3Lb1VadGfkooNGGuA2dtwE6HaED6jZvt6wW8QyVXsQLhVEDeBrH9Do6RMQ7CzUw8PFmEF7",
  "key4": "3fyNyBLEyid97qk9uKxkN8pyG8vPsycK1LeaiTD7dSwZHheogRixYRfiti96tjhHAFqRuKxsxYmAvAiZTpPv6TS4",
  "key5": "5RWjtxhfpMtnCZjri9dSmmS386cBovfUk6zvS3oHrfUPuZ9D1GJUyP4XcvLNQuLPMRaY4D5tyjBQvYafePuUeQrD",
  "key6": "5GXwuVJJz51qzqfK6dDBpAE3ed4NjoPcGhXeSfdhSs2jvgukD414XzLjk5TkpXa2fjd8bHjn5aXYf6A9yWLrsBYR",
  "key7": "5YzAHWyiLxgnkw3dPmQExkz7VcS2NKb19qnojwXiaZwn9Hhku1iYpwZJfAYoDXZa8b13Z6kGcNo5FVQhnsBo7NPT",
  "key8": "UqQug8uUvSujrs7rJ5SoC2PtrEU7JRrmdAndXeJf5StsRRrvNmjLC9jkCEfojdhwq7ZCtVoivifoo16DQk4yy4P",
  "key9": "3tZiQyTe7BS1cA1jg1t3VnGtUKHRN25TpvXp8vMv4C66V6SB2JbjsEAgGpnf5mZ3ZRiMC5jWc5zgcyWZMTJpfmTi",
  "key10": "3qMQkWNiRbnQkMJ3fiwmZ7AEoGQNkri372RZzKa5MUXqdEte3J6Set7nzR5x3W9UpYRFk1sgZqbAucHCSuyQ8zoB",
  "key11": "4fsovFsprKdLpg3RCEjciGUDwhY69adcvzV5f7iT5sfRmczueQ1Z7LAPVro6p9Emgut6SD2UupvazATUuU5Hwane",
  "key12": "59YSWpcCZfme6p7hCfPSsuHzMiheoLVpAr1w4mvxrV47HLWP2jA5R5aJo9bMSRVEHVvTobCbWtuaTCdqyfmk3sWq",
  "key13": "Hiyg6Qo7uvg9SqfYTANDhCG5J4uNqzA2KD3EiYVVR6KrmDxrAJDZDj7jE1dyyNXoBEkDcQcjJBKNYrUJZKuh5uN",
  "key14": "fQ8qzNGqkUZSRFzqe8uX5LmAu8cd72cyipnbW86Pdfnmze7C3BBLn46xHWh79M9HQUQt9AEgcGHH24DL5t7snov",
  "key15": "Kb2YFo6Xh8X4U5yYRjgbm5T5HohvDfGdwF4EJLaMc2uUnFre1hfsVVBBujAU9sLenwtp1S6eaZM1SiXUAniUQ6K",
  "key16": "Xx6SeshoB6wwmvLSqBWWQ9WPcsijMsZWzTWRgbZ8oHvoNsMeB8Cmneb8T3VMiiUzrn6dXW1eiCYSBqdYwK2dj8g",
  "key17": "663GMEUstUGaZDoAyTvsd3CkMePPdVrBRjf1YeY1CxVQWJRh7eZhYF7gi5SCPi94PsDheuE2hA9WEvyiqsDGVMy2",
  "key18": "4yQEVw1S7ZbYo564a2jHPrq1WosBAexJNehFNnQ31QfZ1Q3txxvRBXoofUaBndPwm39LGfDDJ8N6ZfcUfnvnDyyE",
  "key19": "5Hwz28MDqL5c18deGiQf57ckh92v7HwBhUfbXdd39eJDQUfNGwEDwZQuLQPMfLD4YkABfkKQLuX686JvS56Lxnu9",
  "key20": "4uM1v3r9DpMfY47S4Nb6jukRAotqCTkX789v4ZGFXUFNHAokNqi4MtnBT74TMHBuyx6cz1rhg66RHqADb8ASonam",
  "key21": "2p7HbwbLYHNkUEribcuDgQxz5EGny1ECPH4acRXhQs3oB1vZca3ZN1xVB61i5Fpv17VLLajvciUzVDC48PBhWoW2",
  "key22": "FoXYgMB8muj7q5UF7swVNTFMzWnrJQegQBfMsNj1f2rBHoadnDoiRBMQav7Mg57KRmhPTHQoFkrbZzrrHCqS7Gx",
  "key23": "vaWtT1oEff1wdgqeqypNqq8nUxRkiaM9gYAcnYirK7n5vn3Mb48XcSzAb5q1huVMvQML7Np1Y5qtE1ydtBin1mp",
  "key24": "5gpaxVfYHM2GwD2qak1QZddNv3RYJ7oWoie7pdMdaiQBeCA5SUf1Vwmgad7aPgewY6oQGFCTaEdFbaBkHxoMHo1i",
  "key25": "uqvnVmZZeAZVNyk36DXNfN4JHAqxQj8PmKhXz99FGqVhuBPYYDM9xxerhWrFhFrgLFazeVseQPc9v5PE7rqB9XH",
  "key26": "64nQiJN45hNykZUN83QzzGkYPLBZEFaxzE4hrWpAvyfggL89QcBVwMTPB4ruK1rs7XbjeHRFTPdbzH5Qcg7U8kwG",
  "key27": "58FgokP5FDrSSToa2DPz9xgkPq64tYgzd4zb8doqRGcfobHVWwNvufpKdaV7XMsTbTA81yzqC9tqNF6K3SdQRTrG"
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
