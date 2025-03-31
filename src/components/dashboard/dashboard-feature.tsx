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
    "4DBgNiztdkDDBVNkQtZEd3RpgZdfAVvxw91nvymBB2uhS9jW4yGUZtBcxDPfo5gfzAJQs9XqKj2rH3jyJyXsh78B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NujNenYvhcbRuVD7S9eQaCB8vTgnbDX4Gf6wFXJJSUH5AzJNhKKwipv87fL3QEuwLdVDZ1grvhYfkVdyNRnkLWu",
  "key1": "gj1g1dkWzy5Y6o4JhU1qp24UH4r1wYh18bto9Crcwd9Jn2Vik1W8ZX1unAz7bFkYXpovoWbZMct2NmWppFrRQgb",
  "key2": "zyzpBy1rrwbYGx8xu2iNLhruvWnLvxvDEuVRQq5Bt8h24soEjSJvSgeCJUvz1cGc8wkL2L4EPw6nbbPThZiHYNU",
  "key3": "aj1k6apgCLgkcHxnPCBLWb1hxm4L5qx4iaf69vVDWcUFak6N1BzENT3owboJhEwDkMv7NYUhqzKMVcZfAStUe3t",
  "key4": "J5dTtBrx5AZxYRyDdbnTaZbc5XkXDw1k9Frjr6ohsEnkzdnFQAvLNgLwSTjsy3TBoZxJRB2amR14FeprKEeFvse",
  "key5": "3Reqr2KfcpcutvMNwYccaH6uzFVrhZAcwbPdWtQXUdM7fWkji7Y9GRY19cYxFW9QcvpLyrEZTauHjZZngepMmcmS",
  "key6": "2chkMZrTPskhsxUsQvjEpcS2eMZNAFcBpnfm53FkXo2TdFT3Ls3F6DWkoNACW1FKDnN4ZwuTWzL3mqcwLFhsBZZk",
  "key7": "3UoyYn6tb9EiwxppjjCoMyS4DZe1ZNWEkAMeNrdkUnqFnpBA8Hjk15wRwQo6yXVQZtVGBxHNvBkimPCQkMpJToZ1",
  "key8": "4tZw3KEYvK58pGzLSJb4fdo98TqfjFjAPVw869rCPsFjrjUfeqxp2mp17QjBp6rpM16Hf9PjWCzjSdVqSNrzD3gC",
  "key9": "2wtNviyMhLLQqe4gHNzUWLq8Frz81trCcPgyTKD4RPiT2ZEmxdMecMu16XKXRxYcmygM71SzAubrtgUKyvH1Fdtw",
  "key10": "34d5TY1oCqtQBFuESa8QdhJKJXLYkHZKEzU6B2UFEMXv9ZtfLAf1z6ECSLU8iJ7GfV8pnkCZTpE8o5fCTaW5UT8x",
  "key11": "4tp11KTP4hcqsVEa4Eb7MyZiH3QsWuxBbswWGeHJPZY5AJiJPaSGcPTdyeGK6iNZrhWsSBx1DKnh434y8NbLwic4",
  "key12": "38DZKimpA7fi22rj72qbLaSwgfqTeeZJ8bK3tALhimfLDc4aJdjD7Z74Z8NVoWdtykcH7DKxPJaV5Kye7DrgabFq",
  "key13": "3H3Wv9MxiB1oMahz3xioZTbKQaYmXWy1a3Bc5YmoKiEVkHdsuffvC85xPrNzx4aMAM599pdiTDK69EMkYDuULDLD",
  "key14": "4xS4SURW65nb5SCBGaKc7T2FkvARPeVCKCtpSCkbGyzDR9N7bkhiRyEaocyLSG32GiPukrkrpPqsunsWx49AvuBR",
  "key15": "K5DkDi1KjqeYbkAgAAn5UqJ3pUvsTueNQMRm86AuTjKfyLocE8tmHVKi5BLnJHA7CEVoF1wnUDcDu8SHpqgXQ22",
  "key16": "2enxp37LiHQTW29SAJNSTvkHwjqcfbkXi6TEcYbycZmDpTCorpjhCoQC9AT7ePRjkSbdiC2PvJcaEW3YkGZnGRCe",
  "key17": "4qND3fHMKadmeJHyJ3Xyfu8Dq37mcWELx4zpWb6PeMG2TtWoyVPDAECvJ3AJLAyKhf9FmZ8Lo8w5ikzQzUqpWQUQ",
  "key18": "62NEu7qZuoGE4mmGu2t1RM9TrdphhYcwNvGkp95szC4Eqru7tKjdKQXsScijM3aZpQVKEpfnXE2Kdzhekjrkq7Zp",
  "key19": "35jEi4wFhKLotgGvPyhA6XiZVyoG471BcDHpckdbjEESbaihpcxtukWF4nabPCpgwkzgfyL72Eb8tEAKBQ33RPvE",
  "key20": "zXvNL8nqosFpkyNBHXCt4ngvint2o2Rb52ch6XtqztQstrgbE66tzMJ6vqm5yxYjdhL6VCMQj9pUAnY3kWJbvqh",
  "key21": "2kfg6zz8DqSe2DDHpup65mGaQYQ4q67AobjD4vZM3RsdAVP1usenLgjBcQcFfrZo7WRXUSfweA9ek4AYiuVDehjP",
  "key22": "65aDqsS1TVG8zgc9A55bTEfwqXkXtDEW6ju7EeBAhzKdq8UupWWiFxQQaTR3bSWHNCVZc8fjRemFJ7dHseETnTqo",
  "key23": "4badEvoPG1RaVivGa46UzqeJZvGPum47RpWLNAAvr6Lg57dPiZg9c662pWepuF7sH7YabFneX37eFEN257c31CQ7",
  "key24": "4oHM2iWbL71VJbNrqvmcSyCGWEH2QwcykB5X5f1X7onktoAooa3z4Q2PXx7tdDXjKzYKgnMhFL9B9FXzrD5VHwWc",
  "key25": "SFqY9925kvr6dgQjcSby2nMFUaecq3Z1pJm8dRXd29qc7VnessbdDQE44uRBF6qfEdHVkMQjdQqdRoWGYLEmnXv",
  "key26": "48PLiRmmpYvQt7mTJEi46iUdtCF8gqzkErGQELiZ5n99x3MkxX6mxfa9MXDKJPQyTYSUhSPwuGkaWcokjFvUYHsL",
  "key27": "5GmCkEdumTCbout2pFSw3j8p3hkN7C6Z8BsWfnMa5r4JRJEwEs6HmbDHBbJXwHPFYRNQHzTCWr8NGG4WJpzFRSbV",
  "key28": "2fqnEaAFMARa5SU5oyWmcWBmpHyJqREc58B9SfNeUYgULG8aSHjwvx7PxchG2bVUQKu7vHQZdLBQmvQ8mqDFmc8U",
  "key29": "ZnBQMtvpeH48DK2dawasctQRCX4BMC3R76d5J4gUpNzLwQCrcjTHwA9KN7rJ6z4TgNFoPbfcZFGyuoCzCMRCYy5",
  "key30": "4gLmFkCz4N4PHyb87nwptoY7HqZoh8fFDosQFVUcvWnmkKzj8CZoJkktL2Y36H6N1qGL1rc2qAZxxiM3CtGR1Qmp",
  "key31": "fVM3ahoHg6HLCRFuGKAvfJVQ51eAEtc2aAE8nuRBmGUVH11DexframTtCGFZjfFYABRc1WTrg1ACuyqYvPzHt3X",
  "key32": "jgeLKjTjd8hVhH3idxYKTZW4TTdSGspyfRUmETZ8vtWfM7uFwyq6M1fd2jZdksVZXut2CuGsDsEpZrYzCuDa3go",
  "key33": "41YUdApEveXmxVUneV8BJv9jpPAN11yRH6pDB6rRwVDzS7J8tmCMn4adHBqDJsZCJitRvA9Fs7nTRbeMgbB1nQuY",
  "key34": "2gEDWBZEAykMfB4repJE7m11jnwuq3v32SchDUnapgoWrcsUGpmFsKeDsEunRFDzTEqFLsgroJJ6QUHoYtWfuk9q",
  "key35": "3hJ2yGtLzLiEG7RVdbsGz1RSN72W4ZHENqKED84cBCRGhZwnSrZ4kTBEmQDa9jLkCFfr6mjbWXaSnjVbXzHXbjs2",
  "key36": "5akai1XhGineGoAcWhhGtXQxiu1w67idSQZUhP9Codk59VQ6QuDhGRHhK2kcUiKQoe1TmJFMo3qXxzwGKkb8zLSC"
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
