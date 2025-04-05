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
    "jzrC4oAHqc8WGFcJSrQeyjCK2gaEgNZcgst3h4Yej3b7NgL4d1qRzTUqsCSJahc9vrTYSppL3BE3gPCKYCVrvbc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wWwrm7KzoXq7fNhjKBuYRtLRj61qoLiNHKu3PZqoG8gdyfC5HYjmPCCkkLUaTeuYcbfyb4wji1Ax2F5S32hEryo",
  "key1": "2k7Xbgh3Ph38DhE2M5WsgYHP78nNhKZb2Yyixn5bR3zjw74upy45mvDznmUAxbgv7vimG3nqYwZHzRQ8G3F8PKkp",
  "key2": "QwTbdtd8dA9Po2XEG58qpv9goiHoHKhP8ZXBnxqJQPHnee6zw5kq5EaJGEjFKsYrEDrM3ZcX23csk8eMGw2xp4g",
  "key3": "5BApLh1auytnvSsoB4bbYTYAXXaqpLgyP2kqprvNk5ruarrMB2xqUAuYUbLagFVyYnFf9i6wrsEJnAFaU7s9CHgT",
  "key4": "J97fCaaUj71xk2sXZKd55aKDjpGc4k2Hp9WRVVqwDQ4svyKceyBrVCavakWtT5nuHZ1hUTn63j5WqaeUoLPL5rD",
  "key5": "5vmGTZ73t5tdbRueuzoRnmeAKzo7hcJCFbbiug2wM5nKRS41MWSWwsCY9g5QMC8qNZggJ5syFog87ugsYENbBTuz",
  "key6": "zHG4MV3dsGUwCgdopQGbtUFLC99LQeENjcTcu7PE24GpacaoSCWQi8wpZaBshbEEaNBsszUuF3f6RKmrEHbStdP",
  "key7": "5Cf5xTeRUsoFdM4EbZiAvETxuEr54NGLnwqZRX8uE7WQZJAfB9duvx1mQYZPx2rV6FfV4oty75zPh99ArzgxNYKL",
  "key8": "5bN3mCfUxDaSb8vmcEuxqBzQnGsLmsC17NTHJAD5xyA9ggmGPk9fDQxpDT7u4ebeJTqc2TFL7TwNEjjfGgVAEJ9t",
  "key9": "2mhQAFUVZLVBWwmNb9FkWyMHfAEaw1xc1K3CDNvNHvDu4R2eYDcKPwoPZ6dtXrshhJsbLCbB8VGLcCMzisTH5vWe",
  "key10": "snfwFYSYRFLnHd2vr9r3esTzbqn8yti5iXq5ywfTpB8FTfXupefopu2hayxvepd8sxpQCS887BuZwWLbydFgdiM",
  "key11": "4PTq558p6vZ9BmkJmtKkF5yGpap53XqbNZ2mEnVs28jiCjY55xw7uGsKS7Y2PQL4SKq9pdZaevzNQFcctxHgGuHC",
  "key12": "4iALjKP4XBkvTN9R9GSyng51EBmizuTHxkLr5q6Vw684DZZFaMqy5KWqWwieWHoJMwcFwiwLL2cGUdwzkT2fJJan",
  "key13": "4UNP2iWk5XAfAmNVAGQ2ecG1jRsnCV68NTprD9gsUGQEqmcjzkcCJqa7xxDUJcZNesgNALbb6bfgaLXEQGf9wWwS",
  "key14": "zAfuka1HQiq7ssNjpccDGHa6XUEywHyu7WbH4Z9sTy2rGxm1VtNgDfUpXfkTYzpYJ2c4Ycf3rvywpmo7UNMiUkY",
  "key15": "EXJx21ffhhLHfP5xCsGFKN66uBHVdFuj7CMsYVEWExA9moaRrwiderXPXkHazMbyEzjGmHVPd8bgjXL9Ywu29vU",
  "key16": "516e3kZ5CZjRkp8hzENVN1hbRqNxf7DnGcTbb2gmN1TDPUZTVUH6HFDZaPg3hGErK4sY3qSs5uRnqENCEkUxVTVo",
  "key17": "3fzFzSL8XuEDvZVaTnj5Uy65wEogSTgEbnqvYGpkRZgzjrtQaJkdMovcfgrpoJQEkym2abb1QvuJyd7MKiGs6LaZ",
  "key18": "5mLjYtxd4KhSonwoQzjeEBMKaa98ZgZg4u2kW8Y7HMP8QYhX6SAJ4apMyuzfaXZjsZ9HN1iSL5mjcNfpg8w5AArs",
  "key19": "59Fr2rRGZESpu113nCPVQWahYLxK3ucptBeXVKcyfAF4AnrEwbokcbaaD7JsTeQParGqFpcD4JKKF4Tq61YYCFkj",
  "key20": "AHg1HeH49QgfpKB61WPbhL1WzSa94BB4WU2yG6kP3QXBcJb1vJH3yoHWsyNsQ4nkgCU1RQU3eq2fdwCadYBg4kZ",
  "key21": "3hvLi3BDNXu3Pj5CgNCWEpi9XvcZ7DxMTdTsySthbfUo5TgwYwhF3PkaaYWdC41qApqGstMSfeJHAB7dmiLXZUSB",
  "key22": "4RsY9DAYosVSJuuQAHWxTs4QjWRga8kAym3koy5S7ttECvHhm8Kice2hFx83WoXxDJtckrkkbvqVd9vwK2KLiUoY",
  "key23": "2B14htygYvYM6osspy6Gimq9J7yCdreK4temirrvRX9jPSkEeCz8mSZyKVH6tLVFWjhZc1pZMNb3Do3cLPTRTkAR",
  "key24": "2pmUfZpPoBJVkoPZQYfZzsfxRponuRAupZFrg4wBjYHgHmX4EdHvN2Ah3y6bGF51d6Lr5N5GicijivQHxuB87Pbc",
  "key25": "2gbh2jjM3tJMf99ur8LhNdJKNujZJLtSR1E6DeyT6KAPTmqPdU6on6o6FSGUPNuqP4TuYvmVnypnf3rfcjjE2dsT",
  "key26": "2X2PigmpDq8Rqs865s65YHXCT9SfDdu3sjfkjWt4g3W4x4FcqKi9suYHMUettcTrhrdqCsXmuJFtU29KiWrpANRU",
  "key27": "4Jd6uzAP9Qeg72QxZFNAksfDbL9PfPTLUgjuwxqmoRwHCADFvaeyZF9VbbmS5Reu1nexxWwMPUpqzirSTURMM84p",
  "key28": "2CNNAnDgXUHwoMAsvKPW8Dx3ecw3JU39wNL2jbVFJcAFjKQBqGXFxbnEPqdGxFmntNHpZ26VjHSk6K5T9sLEdBWK",
  "key29": "634bPwNCPbsbKvvtfi7RWieLaoAnWymE5JZ6882bApcYijeRNHkrr1rZSyHtuDPxx6wLyDptS9meZEfrqmUZwNHn"
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
