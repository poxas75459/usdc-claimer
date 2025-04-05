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
    "29NZ3XBsceo1ddgSWtQNddV9vaz6aJ4zAbBw6GgQodcmU1Q4YUSjDppSrVJWi9HGGPjr2aLPhYRkFfV8mjLdQoJj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54F8z5KDWh9V5shKzUZ91ip4D1avtUWmSuNwPy7fdm8Bie6kdxMgzJhG2iRh7dLZqunLvf2SDffY8qvGndkgQ4LV",
  "key1": "R5Li5SCHi1sS98h7n6mXJ9vA9S42jVD5DErcPM4frq14vQyZrcBVuVNYKQVgnn1dEWTeq2fWxGWTDoZgsAohYRx",
  "key2": "63rEFW3dodm9ZgmYbwc6UywNwt1A8qMi8AABWrpGsxSrATD487ct5Xu9GhqkiMozi9AZkMHQ9VXt18ZNLyNmarPH",
  "key3": "2bRMWgGy3K9FogNZu76Sb3X7mC4xmdzGf7VqWjQGMyUBakE5SEKrWHYsxYM6AvGpynwrxomzHmWrWYVFEhsPQRf7",
  "key4": "4rtcj5v5tnroVdpMTc8MnmqRZZiWAkVvKECeuhUcAwiu5hBA6fpzP9c1MeZ6oYbACxuWHUgzLSzTvbpb37toChKv",
  "key5": "4qB6nwCDHzVFQiN9LrJ5VzPTkkJDWxRVmJu4aA3S6XHyehfqojVYieXsAfooSpQt3yJXRp3CJPVTiuEw2b4nApgZ",
  "key6": "65prrgD1aqYiJsu481Bd5HFwk7DDuVEgGK9VGypwatXrNFyfuxCa7bKc6aCEoyr9FHHUeLyV6dtKVRTZw35MCtFQ",
  "key7": "2zJZSN2qXo6ozPEMJWUYfpoENNscSrBufmEGHxty4HCny97yhK1ynpZVuav44Fxqnjdw8a14Y8NcUb9RiiRmXWkh",
  "key8": "44jXvGJ8yH1BiSvd6nK5weXwk9KDEgc9YPACdDVTrDUZGVU2ZB6o41TKca6tTopkekGHMqLL69SNo6xyEh9o2Agk",
  "key9": "3e1w5eEZJ2jU228P1bsJjcGyjReAQwW9FZHKGfZdJ27fRkzHuEAkiFFZHrUBqXyPxudxPhY4AQ55yMbmm24CEKCt",
  "key10": "Xz2fGARRdtpWUt8gk2dCCmeZKEi47iQrvWtqA7773z9m65oWGeHbQEK2HR9xLnhkUdcdFEJ2w9J2DNkmhhrrKKr",
  "key11": "2PRp57PHWFf7yBSNHAVFd6dhcuoqNxJDP4SgQ4W3qCL4sdA5GWs7mVkbP75SLHcSsRRexJRGRWfqqE9J5Mis9X8h",
  "key12": "KUcyvGaY1vhp78yw8EmLXYuEQWh4xe6uJeRUfxpKHyncTFV2VPbSePr3cHxNLNaKdq4r78DGFydJNp3Vgj9iPNA",
  "key13": "32cb34uoq2bSiZRhRkrpKziJmhHeTNvharAYEtP6SVkV37eiRdSo9RKqwdbn8yc4BtMVGysRxvkHkw6sNWEUh3YM",
  "key14": "5GBYpR5NCGAFyuQYeLraLuneGjHZXWStehe1VABMyNvQasUaKgVYeNk8fua4vxeHkx9Urr9ViGFY12PaUBQCpqqj",
  "key15": "5H4BXZbuT9WEnvJHu88LdUV8RM1utMr9CPuRdgYCx5zbsdGs2XSKY3apQCcxygRCqpMpkJRDMrDU4Gbkst8BEG8V",
  "key16": "2iLTvAriyHRkD87aYc8rvjeT47SjyjP25vLSp24JXvbAdsWbFeL5Em5QCymBLx8EDEhZUGfi34bmN5diykPRH91d",
  "key17": "2swG9vCfzWjvGcDhPwLuh17FQN5u5sLgPMBF8ji9UeZeiEkjRXAKz5LqQSyYr1xnTCzyyrpLHhKR4KQpRzmY8nWZ",
  "key18": "5uw2Pgr8o8QKXghVRjieqr2VJx8ha8j8cPiZwhChyaPyXEXxE5D7eLLzATuekgcSW4CgHAtb4VXfKLqbj2F8gtvN",
  "key19": "5f2D8hpgG1UmnttvXpdLbKqzoS9tzphmZKbFbLhawgWtEZDgUrA1n8TuUJ4ttxYxhrMDLeGYqSkLhvYUNktDnFq9",
  "key20": "4gFYTgJ6PsGrYNdxEmFiuitMXA39EusQjPLmfNZHuynT3wfLKRSwmuqXLMenzkkxkywj6pqhmr4N3vPaaifP2RKt",
  "key21": "5THXZigTNYQR7BFC8PmdfwqKDehebhinp7owCxi53LNnVctvz2TMBRWkCDbmyyVuTMJxpKXvqsnK4YTe8e37mABS",
  "key22": "3VuuBfdvE8EwMfSi6Zpm8LvX1sjKL3cL3RkFoCcEdnwmSnBLKjbt9jcycrghXjhxqGhJHsRWYLAFYS5wG3AaJsnN",
  "key23": "41LyLXFaSV8by4T96u3Bh1mgexVoW8EUNjXGyrYHZ49kWWRPN3wsLpACSpwZD4JyfKYBsTrWZAidhaMfwagZqVau",
  "key24": "5sqCVKDfRVmZmLMbfp2EVdCA3PW29CkKke6Y3QTf3Rcp65PSLmejEQVqkYfQ7aTVePQXfZQVCqw9WdGU7hpKaDEA",
  "key25": "3sBp4J1PeSaTzCYacMhSnhryx6niTja4x1HzJDW3NCYs51VFqdkkmAPf3d8YPNuRXkEJLujmcP7SsH6JS5vevUQ4",
  "key26": "3onvyuo2iGxxKf9vmyi6B4UynkGPZvG2F85cqUdPELM7PK9kzawihg7L9hF5Zmq4VfuQvnRA8qBg9LuUNkcbSrmi",
  "key27": "26QQ8A65enzWP3THRvxbmTivYdyygZVbKb4AiRaogi4zEtVNfCYLJyoqgFHRcYmSp7X2Rh9MS86puAiDxXLZTG9H",
  "key28": "5qGcuUbwYSDZe2FzJF7JDz5JYXcrNPAsV1jVEcSgC5W3CL1XXaGRvTtLwRnAvEFLs3sajLhSuTkGNe7291skCThT",
  "key29": "3jSfkMxACtyLvPGkRSXQD59CaoQUgxoKcPfECCK3i2Wi8rzon8LXTqmrTzKgdVyEwWqTK6uKgG81oXV6RcExAXEz",
  "key30": "271TBBaWTitsWWg9iYgPex4psnoTXGypVPkgRM93TpwWNhXTubBinFRnWaUJmNtDUBE7ZShjBuqrVdfkmWWDFsGM",
  "key31": "3xHKiQsTgdeD9fJBVkPYEdDFKTdgLPUB1JNxYJPhTtKhVEsDGvxdu1Hsqb4BhZfggmvXyF14RswwqX88Pkk2aFMy",
  "key32": "6MWcEP3cHqSosEP4MwgCVxjst9AFhuq6bBhZP9Ysm73Bmcv5USovUWAQwEg1qGQ7YgvsKSxkVUcDDg1zdAanzDG",
  "key33": "4KfMz9pD6ziUwA14q5QnW2HrMD2quuDdPNTv99rc3GoPQ7vrTnAURVoBE7Mbi7UdSZ4oMMzsvRqQij6TPwct2XiB",
  "key34": "3zyXx8CwYPb5ZHcDsagucR9G1qmzwFiDVR9n88XBwt9xFxbyCxdxS7FgnTLby1LprCNhHGZyf9ZGC1XvkjJfK49x",
  "key35": "2NKDSMGoGqeZ8DVVExB7uBzirSQSRotFoyoH67wWyjax7KGZ9cV7ViUNySCug7dYpFcaA9F9sTXcqN4bFUZFrdHx",
  "key36": "2UtzJ16yS9WUcswNv7Z3RADqrPQMPeyR46wrbbKeD6LoX6sjcC4AQqfrovdY4ygcjPcbBV7oEmaK9skA4Sq2Y4DH",
  "key37": "eVBNnZg4h3SXjjYt1KLSwZHVU1qPoUoRt6HSgKqKirFV4s1HiNkyXRpDjM1BRwGXqsgiFbrnR8uJs1SPCbJ3Ni3",
  "key38": "3GvdMPMEQV7BZRoY2TPf2cr4UEPzHxBNrWdkPo8t3wjV3PuovnXtpFzvMswcKfTYkoBLFDYND97CmVJkMKDUy6UW",
  "key39": "354ndM2k2vw6PqxYaDQaXTnPrzR5R92e1u2VwPpEM1xywkVr9GC69c4xbXHtr22fZJca1VmQqJhnAibMEAHtma5Q",
  "key40": "4vxYp2MbSKSREPdHrnDY6RX6o3K8QPkRKSRnntzASLQe7rsq36NugyzyhASpUpheBskvxjeC4TtFW6nVeDAfUsjj",
  "key41": "5GAd6bzhKyGdfvkosNXoVJ1efMZf4ZAS1H6S7YpcgAvebsxtJfYTfFtPvAVomMdJx5Ubc4a6VkvWQSGqBm3bSNC3"
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
