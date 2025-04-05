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
    "5cZE6yZbARHuRKQzYrGLwK6PBjnsuLK1oM7rzzZLLsne1SoCEFwY9J873aQGAkuLhAcG4ZALBvqayU4tMaYmcEjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DS8ABud67trfNCk7qQhr7HN6pG7zUvEiMxrQhoPoA3YEcB96kTanGakhWu6GiFMREgWqFkHLjstewkGDDeDSMML",
  "key1": "4FKgpU5NWESE2kWjaGryTkidqG1qLpXntA4ViHCFSzDJrJjkBwrs7Xnyn7bbZzGRonzGcYCBcXe3gXJ4URcU7MbF",
  "key2": "4oUjbKpmo9H19tj86MkE1rbPrLwWu1Xw8KikAqoiPQFk8RrH6JReYEwJ9ZzsbPsD6GzFoDxnZZo8iphdPkfV3jAr",
  "key3": "3xNz4cfWaAcZgnDvmLzBnFopEQmtszxwCx4UHyNgZ4hU6G2Jg2QmfKwYbVEHn9UUWWtmQb1t13yCVvchgri3emY6",
  "key4": "4JsV9ja7WKVcraEbzVPutDAzobLLtJzqJrFv2dVSnVtyZVAbexQMrVkkbf6AErKixDBgtbhZrmr3SjQwr5jFFFq9",
  "key5": "5marbswkdEFhA4udwKX5bC1Ckmt5AFx2qsLrG58fuobWHur3eUmh6yKaMNNEwkFc6r2jHze3Uu2giVHGonDD9cR1",
  "key6": "5z1XzQCKANnUiN5rEhVnWXKTry7ebmbcRZPScGUjJCJV8TwCMEbnxvg6KGVDaWsmsFkH4Z2JMSpkuHkEYtWVTtjw",
  "key7": "5ktf18zfg5NVYLTWQe8Kw1dXKTGDjVthiNm6LH9iud7hisd5osuT8oJVeXQUndqUvojQpoTBP91oMzdi3Vem5n3P",
  "key8": "YyMgPXCCK4JenfE21fQdW2XB319usVMCAucG1Fy32XGoHN2LaAk6rhyh6Hz3ChpCVafk1UyYsQ4tR2PnCQbWL2B",
  "key9": "2Vq8aSUJrFfVLFhE16xNP3SVMKLaTaWhDX99Z21Fdbo5hRHpxvMLvAyUMotDH9yFrRSymRzMmEYbchbYWzwrkhaV",
  "key10": "45He1CWfz8bRTgDQuTypaXbFXKVso5Jppc4WBtKHdKAf64xzkqLejAAEG6v2DrsncUR5FgsdSANpB9EuLzFAVBGx",
  "key11": "41XtvZSac9kJW2ueZPHND2k9JnuShmQgLAdLCiHewnBtUVLU27DNvvhJBbtzq1gVvJBHkW9vUEDnEgHf33xSodju",
  "key12": "3h8wgT3X2cnfEEGdQcm3cpsmk3o1sFDePhom6quUNqw3WSzKk62Sy9ipMnBj639s4sACfx7mBhXHmrJzSNjd7jRW",
  "key13": "ckxbPTGkQB1gNnRiAGiuCGqGeFE4Ynns7vgB7YhTQkBxarisSKsmcqTMcSYaSi9A6Ko5tdFAsp4ayn425EAWbVU",
  "key14": "2f8dpVeitcryoF2btYhCvjZ9bu2q14VEtxWxfjda1ARXeo2MXT7cfxQ415FmKyfNXjSTz3XkqpgUbS2brwhEpQLx",
  "key15": "58KdMWhFVtrHSL9YHeyd5f999VwfuAEZAi137RFyLYDkgp6obF53boZLYpvpZjsUVsx8LvTi8uHkuC2Z3J1ePLpe",
  "key16": "47qHqim4wd9rWa5SppWpw6uddZpiWNyrpzivkUazfUDZgDu3wq4pnqyKVuGCapYnTHFhMhGxbbKsqqUXh5A5Rkiy",
  "key17": "3kyPPqHLKsJkGZGShVfp7rFsv3kKMwgPomBFSrua5ukSxPb85kEUjrudFf1jSUb8xhmZd2QvdpGmjqejQ1a4wYcV",
  "key18": "4XCq49iyqJZ96PHKApZLy76KNkqDgKZkXWqkRCSouP9iPwYvff13tgwkArQML5DQR7Gc2PqfJZYW5YErNuZGXDNf",
  "key19": "5otaJhZRGWikaz85QNkPHSXsjqJbjhGqRyBiAgqCErGBi4YnJ3vamiNAYFRA71DjN3hArt3uGvjQyPU6dvMvK9Mt",
  "key20": "e5kwRZyTtKZ4JEUfNeXuVJCkuq7kKxaGzPT6qwa1qESUBP7D213ZQgE2YQfjs9zp226JECXBzMU6k7eXFS2xpDJ",
  "key21": "289yHuu1niNm5AKijndwmZ7xboM4vLKKHbUzgucCyGHRG9HgXDgPm5Ue7f6NPLzgCQ1DtgZUjSa7zg3esFMh2reY",
  "key22": "3Ha1nzsXdMfCzSMan5xqmZSVjqw1HAjQWiBTfttwekj1vvNtpdY5M12rvvRzwEtaZrth9UcHS8rqd9mCRdRqL2Q4",
  "key23": "3mdKmuSDpyD3zXDf8YoNyVQFrYAyEHLZNiGg1GGjYVEceo35eoGXbigPw2H6eyqy8Q4XMPJGsQbU9GFdZCijkoL8",
  "key24": "39U3XcTGnbVzabDt6jTW67y5H3k3H35j2jnXVJAmS9EMCCBmFkcrAwvUvggq7pJXUZ7dBwuq2pAcpaJQRS4VkDLv",
  "key25": "2WwEqMpXzgKgc6ypDq9igpdQwccT59jJ4MECbWZ37FsxbRDVaiUB7BDZhQEC86zCJ6iNEZzmb9Q4yVbwdVv8Hb43",
  "key26": "5f1e2Tt6mqpbjQiuP7CN6MbA8s6g5LVvZHMh7XNNowJmAwFpQRqDoF34DzPXEzTEAAaFGu6ogfREzvseUm5AnbdA",
  "key27": "5NH8zXG9Kza32ahkWAgs42yxGsco884NxnYVVeAT7DzBJFEbC3U3GRbNC8XTYpnza5xhQboqJru6vU1hUPunEfZa",
  "key28": "3hKcGDnx8zKZaZxdw8XfMwmX4oDApUeDGM1u4oGRTJ8ACa8pps7WQeNw7MeWHWz7UqZKASd1WkwKbDunpXPRxQuP",
  "key29": "23qx8XXd3iEsdnAT1hJoa2gE75hHPEcoVKgHrFxDsfUVDtjWQZhkRYTwRbozBYtEKd9CEnY6EuVLKUYq3qieJSLg",
  "key30": "3vhm57qf7TNU3DR3H7FiB8BGVnLYXjNDmAuXB3UkN8zMizXMYk8Q7s4aXYKtKGUQxifbq2NQEi2RdeL59zCb6kip",
  "key31": "4FizNeqRF8k3fh8JdiWLd1ESJksUE26PBTEZ1u6w4cjXgkvcUQ2PreMb8PGDr1emUyprUUmoEQiGbEwvQBcHN2fv",
  "key32": "5LcouNrP1NDZbCVTRreMY2xab6uc1dyjWmsRf1oCGy7gJnkmvP1hs5hr8K7bRCjFXZJpYZb3GT1mxmasw3GZWTdb",
  "key33": "4hPQGT7Y3Re5Wpj5kcr5FEpLMtHCd3f7AvikfzNcfJntCEpn6S8fspTDJdhF2nChM6Nuya5jkbrhCTFU9zceN11m",
  "key34": "4DUG1NZ8ojgJpQY4fdaH2X4ERwtBoaULxyynfgwBqgbMccah3UR6CFvRyRSw2JSdobQj5pdq3n8yf2RFuCKG1DBh",
  "key35": "zVHTnZm28bHNFswHGRJL6hF3UVZTT2D8iCeqrs8beEzamWssaN3q1sUgHr65DDFd999vrF9Zwm5KQp5f497ZuRa",
  "key36": "3QCwqbUcjGPUFszxyQwP5Pk7KmSJo4dDbtDyj3PsTchSwFADaa3BroyWKFwxPHNLZXUQEtT5rrduH7SAS8FipfUr",
  "key37": "4jBG5FX4yehE9CRmWbib1ijXr1yQ2CSiwZ6WGYMKqFBYTTxi6miYvEMnKXCNZkBW7UiX8EZqv5EHLReVrrkPGwYp",
  "key38": "2M1QDkHFScb2P9mqc1prjbs3Fc5KcY3o2eK1uSKBfYziFvJ3U8ppHHnNnPebMXEQWc6udwtVunbBjhy7dWfm3C42",
  "key39": "5KUo36vSYCsSAEaTPhB4YfLZ9xa1uEruLRVbAY7AJHNQJ98h2LnSP42sepVntR5mmVB7Bbkgm9fwcJeo2eSo9HYz",
  "key40": "3YCvMsKBQ4P6Bk253nVYdcm21QcjddSPapVEaX4ADx75pUAC9HPrmV6G7gUyVMQWeXRtctXJPNhqtEcRbUp8FWRQ",
  "key41": "5QNg4D7T7Z5777aQNvCvgY4QEcmche7cbbddkBVUTsws7vFT6Jazsjrc24PW324J3KgWK8ZkD6dmEyqYsXZyJC1t",
  "key42": "2p8E2LDGFbQf7wNNqGLf6HuKynGzFE3XdkbL7xeQDV5gWrGVL8NgDtiMpNm4ZA7HPhiXYQ3YmazuRpZi9xz6frLv",
  "key43": "2ACcxccdk7EMCvPinkyhan4FR6s1bRPHj8EAkFf9T2JpcbURT5mP5BQiopey9aQ7DkNQLMg3uVNs4ASqzPGe5SBv",
  "key44": "2UZUXUTn3yyFbwdTnNzd9rJXnoNx6dgP9Srnbr8osCdG7gJJJtiW1QojKbFYEfi7DoXsJDYdoY9hr87Lfyk9zXnu",
  "key45": "3D2RYTKtNkA52SCN4iG8Kc1enXrwb1pc9vFWYsT4VPB5s9gLcyLa6VHk5HbGFZbaRH1CLxbRzVvuEbaPMh1C9ws4",
  "key46": "2V1ZSGDBtbqjnPBneBomdTdUikKwQTYWZQyu1bQvRTGcf1M3LMQneaCWvdW1RKyZXdkxgnMQ4FvxnYMvEbucPzgZ",
  "key47": "3YnRxzYzsiagazQKhDsG2TAaKoNtUo29Zx1NHo7Hv7Hfh4qQBF1EcRcJt2wGY9SAiXVZAVmjbnsAUocurqh2HVnF",
  "key48": "5zY1vYGbF6v2kNxN3wfAheW3vKVVj1ZeqjET2gRMsFCK7sTfsc4Nwu6u5aJDcFdg7h7wCdu2g4Brj1wXJvoHumZQ",
  "key49": "2oJ5ezgkxt5JFouqn2K5HxrCRkUsDVHquapweJarGhUbo6z4CmEZPXqkopdmhd9dEvwXYKPznbrKGd4t6ExyZddT"
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
