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
    "2tMwgiA17rrhi5oeG9PBPzM4Xdo9vGRv6DR8brhbmpycmXZJeTqinZnTvUeJEsC7MRc2GzjfStDn9BuLYrjyYXsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sXsJnnEK4Aesrk5EEd9WevMc9tgHA9r7oLNfwmUTwL5bNcRn9seWF4XQ6jXk8Nvvto7xPbiH4gCdqL8mh6ijqaC",
  "key1": "4bvoGHPegyf41X6u7Srtigbtnd262DHJtoX2DX3UfJyCjrQndEULeJAMnqEKLnU8s6eEkwppaAd6A2kuxttby6Y1",
  "key2": "4Tc5tYqUeiMahbVRT1HfGyEs5Ma2wQbuoqLr6yUDWkvRqWAnLDwp4fQqwdNG7enhe3kpVtXGz6ChonkH8M1qHreo",
  "key3": "FAAJHKjuwZYJn9cXLgbx64tzXgA7TLfuG1b9KmmbeypXkqVHgjBqFG62xe1VNoSvv3gyLFJmBiUC8EHZ1XY2dCj",
  "key4": "4uzhRM8vHajtBKwkro8PVdfkgPkCmvTr6tyZj6GnXPPynVWdJqgsXH55wpg35XLpgkb2RXPJTqt4CBEQRNKt6CkB",
  "key5": "2w3rgknMF1cBY8N9tmDbgj4mu9jJYyC8RBucqJp1zyTAkUnSrgP167QbRK5fY5WTpNpqC5p5UJyew1V5c1x2MerU",
  "key6": "4TYTH5unoU4wBSKPtZ59gbaoj5HuNoiqhYC8tDkTJcVEgereNThUbzsHb51tQ8gYQs3YEGdj3MMMryDVgXSMT5Tq",
  "key7": "4aCam7Hy5kG1ijDmuMmWuf2snAjWuL29CvNvhLF9nieD88eF7r6wS9C2EVzWSTmRFmcN5pJ3duNRrfU8bGYFt6YM",
  "key8": "iJbQjvCVDoQTWDaANLcqZBEXWf78neALBJmtRvMQsTWv69WUtfBGDtaSpVxoSxCuXvVvgN9C75UBNyLDyNX2FMT",
  "key9": "5whPzc1ZC7hcnJtDS4pwYrADaUEbZduCMdDRZojoQ3JVm41kSmnrtinyTdK5XxbsJruQkeintfE6kS4h1Vu7crFE",
  "key10": "31JtG5AKwBJbAsD6c7csE3V9tJdoCgjEEi6pGuweksn7GHsVYxKgWVVkRsErQpZDiXHj5u4AsGwdsVpQ9BGsLxxh",
  "key11": "221YScXwaTSZEc5bo5Dejifiz1r8zD5vprvTXSkp6rJpy7mU2pGbB8ATGM2qoEmMK6pkgkz7BV8BLnrD9CEd6HNX",
  "key12": "4XSqteRCkYA6cfSAgksLRjxkYfSHAxC4id5MP6gX7AgEbv2XTtPhFAU6wDBGCZEa8gUiid4fXSmtKXxhQL351x3q",
  "key13": "4tnrhCWg91tbfm1rWUCyt9oWh251gszkhC2MMBprc5iHzk7kzy5mvQPYVrvCaJiJfJP7bLwUkshrc4Y5dxz6Vnbo",
  "key14": "5iV2c5oDKbhg7ByLnmNJMb1V4k165zb977nkzTEi3exkCcFUjdo7hW3MMb7QaWHvydMyU4q8qL5zd7K9NACv27tn",
  "key15": "2TTVkBgvWFqV5n37k5RRrB6J79FiwGjVA9wd3yzTR3QtYC7YUzAnc4ajdpRm8X8832khP1iYUd1Fz6PppgYLWijL",
  "key16": "4f6PBjcZfZv6NBRBWFzhv9p2Eu7svvowYTN4iCUWDq4ccDuLytAm72GB7xADJkuiZesTcYtDtmzTK39KPEPNv1Qd",
  "key17": "66ettNtxtpE6urYdh7M25ypqHHTFNjZnng5hgduLXgzDiQkVSpigR9gq9ByQfEevrCMrfJyf8FjrQWT6cZAXvRad",
  "key18": "3qr3KsTFDr7DVPTMMx1r734y5zmKpDDRL1Q9WTTH7zpfaTwmuMfPYWQAVJhBv9DgUzRdEF4mpEypMS1KFUQCxFVq",
  "key19": "kcoG4FGHWjuT8medbketmqK37oMhZtcKUVtey54EH3v5945vhRqNvde1NbmW2eKkCPMebwALkjMS6JANaSERXFF",
  "key20": "KLKai5pSwg84XHhFB2cnFEjwwJrRUUBGAc6tHNRT5DDujga4c2NuhdtXZkU4WZELLdWYDabeDRMDqrcgNCHDYTq",
  "key21": "3nnjfh1XBGntuRbgL4JhTgVqi43katsAeNSJs1ik8QYNLYMdHHfGGCz98SyXN6d8GCGVgtdGQcWg7phdY164bt5y",
  "key22": "SGRT799YaN6nEY9T5A1GBnkY92UuxFdpEApVT88VZL545g7cAkJkcy2wYjrfxvA5Wv1MuDtwbXYwoqno7YC9Q3e",
  "key23": "5DvgUBC9KcMcD3surUAMgNjcerwRpb6UNmbzprEojXRzLCuX7xaWv6iPfwkkjrvXB77xc6zN7NU2xqpwwkCQE7KF",
  "key24": "2tiJkxtYsukYdng5m88fc7YGaaRjYmnUm4MQ71gSbaKzUTH7N8c6pJRqtHvQVJh9tAzZ51c6jFxCZvcmiscXpAKu",
  "key25": "2h9kRzM3Yveh17F8N9fUSc6Vt1LTHRwqH5z8mzztgxsrY1nNaQPhxwDdjbiojD7mfnKFG2oKnUasQNtJ7fA7mHVX",
  "key26": "2bmFCHv3KC6gtKz3ZfVbyyEHSb84TZC2ckuoX2KKsSo4bFCKAw6FY2kzwKMgZdkEdjYm99WbWaCyoiAeRGb25KwQ",
  "key27": "2mZ43iJ9To43RHq7CuoRYHanTW7iVR2cM8DxE6ehwiteh34dNXES2HhTKhpiSmTd9PnQLJHbtbscAKE6rRhmxb2w",
  "key28": "2dAktFzmpvGVZ5FkpWGRdoYwKqDr1SAgb9eE2pizRDk1NVXpy84RKtFGM36UrHjhXYhiiZ5gdaw31fjjBxGy8VAh",
  "key29": "2cQ8u8iHsGYHb3EF8oLbfhqkYnC3FcqaLjkvkHzycv6yYBxKNDBSUTNp5ZJNGfZyLgtNXyDh5aTZn2TrAabKHAkk",
  "key30": "4XF9puR6uBYnKViJsTCJ7KtdXb9PrrEqfoGQeLTwqQT5XoC1ZJGVM1ALL7yToedH2gacemgjHGNrDAT5gbdEsyhz"
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
