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
    "2jqHhLCbfweJuKy8AcD79WgN5sb52Y6vrTDULy5PddZKJD24HcPhvX4Gr6Lqw1a1PmSokQAiTQ9eHZDYTjrWNqj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L64bFzzHzvW6CnW9d6Uh4kxgtX56MVHsEjw6ked3MBtVtzDpFrYuryaB2VB5Qkc8JaxkuH4SEqEtqjBntXvrtSR",
  "key1": "UKj5Ypf3BSi3XVMDPrUEVmMB4wLyBrXGLXcZjgjH1nxTKBnQexreL5ThXBE8Nm3HhU4zwmPruT4Thyp8yL2Yv36",
  "key2": "5Jn2NKaELHjUce5L9kmxubYmnzbHpyQzmWbocw6vHdd5zUHfJTKL7sZca2JCzWk1d4F3Y4KnMgQ6xYn7UaotbkUv",
  "key3": "5LzXA2dFeo9kqGxDkaQdGxvsLkUoYrz6x4ziJ6KQxQ1rGkveuSYXECMwX5BirRTKj3PbiRjE2zJSVojRLRLTtDYj",
  "key4": "2ubZzp9fPobvxqb28U6dC7axEM37aFandbzt1Q92Xz23Zu9kaNH8QMM8uiMJEhG2qnwi61XA8Y1E3jAjiBMsc3QT",
  "key5": "5d5DqX7GWZPR2ovqe4vspFryy3o8cZPee6SHJu1DyX2xHDcdd7kwE2EEdmN9v8Yczu7px5aZbMUDR4Kwdw8GLfFm",
  "key6": "2zvauJJNXPGGDovddrHj64RTtKYBTF91zYQwW5gi4AjMh96DUUB3yiXcsEXt9bCWNxHGnhra3pkv8RPDnEJscsNK",
  "key7": "5bsswDf3hH6f3RmufL7nABAdi313C44ewc6YwHR8sM93UjZtnXdNzLimvAbeVx7JE2HfPQsqj2jXuas81p5Mpioi",
  "key8": "8iRgTN4wGJ8Ahb4sTt6fsKEYYE7pyzvBCxtBpGhQc9rKWKw3kFhWG57ua2BGhX8FyvsxqEL4dGc4dJMSY2wKJoA",
  "key9": "4yDpUJ36vkrJX3bn5iXuW5nfF5FrNYbYTxCyvHpyFWJu3Rh3q8dQps9yCe1noDAyzrCYaEgVCxHfrv1LhWPDqqdE",
  "key10": "7oTEhm9zaHHUmoUSuUYqfYYR9KmRzBj5TSqqiLPLYLRjaZBB2bbGSszcAfMyK51dtZ6EpXQTCsZtAzJX8LgRBBk",
  "key11": "3bBaBAP8zMmjkGqoPgvMqXnK98iieQ4zq8B8Bvv1rT8qMPWUNaEksCnQr2L2BCmp1F24Fykdv1qpQLrgaLyNDzc5",
  "key12": "5RGFp5MY6XTqtxR5DTqJf7tjbgV7pLTCHnNBb14mRRorBqTZqD2S8Cciap6khscYdMhuzxcU291UsCZKYHC4ui3L",
  "key13": "31xyzbVtf42T9YFsxSZhLD8BVGCWZUepiySNhbvj17kT3wUkvEZ8JWyz3RQWaY16mx6uHaaQRfcQUisHfD7J4Zkj",
  "key14": "7rMtQTHLsK54sjUovpexrJPcPo1hJRMErF5irrXZ4ZxzALRKwZXeF3dpaZxE8SgbH5rHjMV1J71cMf7KJW2KsVb",
  "key15": "4mz8xzssV5cKKpEJM2JGBKzDZ55woz8E44WE3oJCsyCynXeKQufqXPvHaX5kcPrSR5TBqF29LFLtX7DBhCnNoakU",
  "key16": "QgnZ9owF4ofz6Wy2wTiVmdnjoVBzeot9qdRf5yvKQcY4wdSvyFTSw4CbwowvSKBPu7zJxD22wEvRmjvUtAkYRtD",
  "key17": "yGrLA1LrBwbHqZbknQVNg3HnvLFgw6TDGEKw2P9h1WbVEJgAMxAUhGL65Fm4CHb8L71qyX5WE8PDdKXEBFKuQa9",
  "key18": "624AiUcREWWtXSovP3GbJxAD6Q14tWsnQrX4UTu7qUJTHdH13ZPjEFAkpZb22R6Y5FxhuSaBTc4RCXXRt74VJbnm",
  "key19": "5vBy6h5GiWKc1Hm5wUGzfXXv6pBCpvrKuDDpPgRdyxseb8C32XKdqY8aVYBMXNwg7My6rPb8T46dE32UdJUwkuDn",
  "key20": "4ck7PmKP8Z4aSbszGC2WbGNFuCvpi49JvHVzsGqGqcohV1b3Bn5RrQCmK2Q63dqVSMGMQbjVnPZErW58PaoPrfv7",
  "key21": "2sZ1ehBQUpBgNPk9dYatDoqcLd8vSgW2qBPzJPiWNDqT3vqLsyVybyHxJ1pHLLav5E9gUqu3VHnGB7WjwhuqZAwb",
  "key22": "5BYxRn48Z8cAnVqeTU79bQorpr7iswQMGEXq67hRCtDJS47ZeRSfns5kh7yrUttucmFGfiePHd7VkbYkaRnYqoPC",
  "key23": "4cncn4oj8vz9DiNmn1R4R7WoA3QM4CUMxSBTmVNya7jQ2ufaKLKrxdM9sQCLtbxjn83W14kbkEFByKRdCfz7s1aV",
  "key24": "3tJLP2ZveruaYiAJmbKL8EL9WyaS3oX4UQmMkWqfnjSt7eacRh8estwUTk2AgQ6tDfzKSszx1TLryEDvKmXmEKa2",
  "key25": "5BRyQ4PZ4G7Rw36FJjRTEPGmEw3UfcZSQrSLLUEPifqoa3DZzLgDcaxv2Hy32JAcTrH4zKAwap1FSe6BCKvB9Wtk",
  "key26": "58Jhx65MW7Y5AGU7wLCiZrSjcTHZMMeGDjK5WAgPkUaTgZnVSmbqqpUVVnRhqBuhPmku5kRftLQcWHxMm81W2nQA",
  "key27": "4rrZYnWq6KAoRjL3MFux1WL2DaG3mCC9ZeYqAngyjH5cTnuqXi47aq3XkssTPT8bbUNvmc14AnyjsBsp2jx18is2",
  "key28": "5iUag6C3feZ8237wF4GAkYCgJRaJcRYasSj7SKuNsW4psaSr7oeXAh3PzQvKt2s1qS4uzLAb8qTEAQeN56AtC5Lf",
  "key29": "Q1vSKdHqg8cp6GoHnxoUmKt5xpGw3KQR1KCTATCJFVF3pjmFsSMnrBRrBGu76YyYema86QZLNAANpKybD7NXjiB",
  "key30": "3h6tJUZHM7Je5PHoUZUMzNK4W4isfHX6DHxPN4wB2B7uLLDSkAuQSLVFNVYEkGYpwaiJPGRMXwgW5rQhhckDZcoE",
  "key31": "4ApyFCCsaVVEeeZcifiLgs71wEk4GBTjpTWP3orfnTRXv98hQjmFpPAPNiHEvNaJ26wMdFG5VcE3VBrYGwMqTuXy",
  "key32": "2YquJFP8LuitBJb2SDt1EiS4dacpPadRuPMnWoHhehDX7pxGaodU4saJYrGRTCyfs1vgPbbrumWzHHmZsvpZrx5j",
  "key33": "3Se3SpoXNgyqbYphcEAurt7EcbnNJkvz5MYzW1CAxnDoRiRJS4erHDPTdBetxjQARqhSVGHZXyHLhvpUpVDM5Dae",
  "key34": "2NfxwKHbT3amC1QqWqdGJtoT3xsMiieff76t3vLe5hyr24EWfYYepkT4y1C71r8aGJhSEPp4yST1KWdoY5ufbLBV",
  "key35": "5kpdrDCHVgQpZsWV1cZHmhcRw6rBmD4gX5xb525YvUgwqGCE1gWscBJ7QoEyKizhfXnx2H2T7SSx8RXE3ipvoMxF",
  "key36": "xJgf2TmKjxqSYHkRkioHL5DjySJqLcMRfs7ZWx5uXJNJFsKoduMAAJ1Hq6vs94YnikLqcAwQtZfb6gW92TXD1LP",
  "key37": "35cnWRwbvGd8BQfN66wYJxDyPhvSQS3KvcDZBm5B55aNeuK7X69uPXPbKnDyudjbAC4UFh5VQ4NodkorgRMyz9ad",
  "key38": "3PnH6tnfRAqMQ17WomKcPrk3b49AV25NiyjWs7o57vQa1PArETKVNM6m7uKkqsSiTb64k77tQX6K5TV1nPq1d5cm",
  "key39": "Ho4Qie6TwDh3YyqKXzgxNcdvEqebkxUQkxzjqQfACitPeGQp7Y4cnnF9Q36p1PqdNn51ygjxSLmtqhjt7PWhM96",
  "key40": "2kxvpZh1UXLaiQiC1sWK4crfCBuvpnrh9h9Jgqo9CP4sqDZtAxsynYEp1cmqHRfg1kmsQcpi51CKmyQRzBr7LkYH",
  "key41": "46AL9ymx423xaQ9D65aCymxqQGwZJTd2kwjTodfksDubzciHrdgPjfSV8HMe25ubBX7qpUrycUd6k3BAYA2gp7nX",
  "key42": "M5w3GdaBXJ8fjszdpxuLS8YgfCbSpDFpJMmfFAyC5xLBnkLRvsEDnx1erZX4ycAtEQomm5aMpLsdEqaDo12uac2",
  "key43": "EwVu9XMkBC1A88XBBhzduGUYEfoGWNL5nKxnYmwZA9n1QHvtsU7HheGAfqamjWMuttk52XjmnZKAzUVne5kb4vd",
  "key44": "3aKnPgBY3bxDWLQPaoPe29hRKXQYDKkrnXZR4XHKSX6XRf5LkdBmcwhd2wif9YHCQ24fSPnWA1hb7MFs9S9Di767",
  "key45": "28irhw1Px7E8E4d8BxS2atQMm39uK3Z7vku7P1z4KuKXawHPv9QYjCgXkzDkxN8kEqaoyd8hhJM22WiGhDgftJcG",
  "key46": "Z3FzQ8ptgqgFHHpgwgMAxtDPmTmdd6H1Z4BLN4iPh5L1SSYQySi6psQmx9ER1KGyeZQwhSF3Jh55qL4SFL3wnaN"
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
