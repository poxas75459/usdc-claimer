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
    "4uqyxFNYmZ4Jse1xaYQK9qWGcwyqd8siE4sXgz6z9nJptgy2oKB3VAVr8PqFfJP6QHQanwvoJHLRhHNqexycHvuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KJUgbwsXb9PzaEjgbLaimkNUZDXoDjsRSunqcpEsmyqc8w9jFJyfjbp17ECsbqLU86aETKfm4wCLZYhkSgKQ4WH",
  "key1": "5szRUNFTQWjrbBLhxGMUrDuVdsG1mwoYpH56ChwJ4jQazQQ9Vm6s7yXKT6UyUhpNHmk86GvN8jdVckLBuaLzMWvw",
  "key2": "3ZAJhdVZmJrSXkA3XU2cpduDiswQgkovPgc5pxZRsdhZqMiuePvZHGJFr7FSeLgm9ni7cG5vS6ePhVj2RnWmxxBv",
  "key3": "32fbMSFgxRaLbPiDk41ssw3c5489aWFT72qsiovXDuGgrdPrVm8ev4iW9koryWdDa9UyzPegnPDpD8LnddxZE9Mn",
  "key4": "4XrN3rqBPU6UJigX81sr5ADnFUkFxW8mbnTHYSBJz1ZezD1xUp6DqYxFY9HxHaEs4K6GEhZhJqYxFChuydLppYGP",
  "key5": "4okTcH4FrWKs3h6xGBgpGiE2mzP7xmGZuBCF4u3igSLEnCQ64LZHzgmmruEqraH8Sq5oKye1N9MNybzmsfMrh3v4",
  "key6": "3np7jGwvMLJYxmSMnoGpc9GWW6cBBBEZkJcXjgXyDBoZst5GwLJnaaWr9dy9ptYjUwLvQZh39moXqErxqiWVmKoX",
  "key7": "dikibFUXimsZVwBpSSd6XYc3zLg9PBvAcajf66qFc5anEDa6jBn5eSDrhjqu19Jzt2NV1yTLeAwBagCEvX5VBfc",
  "key8": "ZoWLZ9PgnkGHjZ2ieT62aBepCr91ErWgQXhiiTBVK8u6uWgp1Ve4SBfxPsyDgyh2kZZLJTsyVgYRfzJfLuUyy5a",
  "key9": "47iYmFnYzskHaKEiohtfgBaxRJfT8ZZoHn4oxgkQMxe9daJGNYscSC5M9s3q3hA6vH4M9Gy8G5SCzffdWGBrzaKX",
  "key10": "2mXXTDU4yEJC7YBYv8b58WXKBeNEnm9upsbKVjNLN7dGLBF9tXbRtyu5L9jzLC78iTWPq3TqAwmvC7ux2SSw7haw",
  "key11": "5h7kVUGUhtgxrvGdCJLYsjWuV9FMsQPNkRJzjoKRhSfmQMcXHjDAzeFGy5FrG7fPEhcTFR5FqzwCuzPa7VV1qv2o",
  "key12": "5x8BVRTtqCvM7WkG9Z3V2bJdZY6Lo6JAktzDTAXTCsuF4ZRNEbMwcMAFmhdg3YFgc6hpMtrZZdgXXHRmodaoVBGS",
  "key13": "61wxatW5F87WU2V1PuD1z3KpxnyCe2fyf9nZzYLq8fhQ6pd9vgjpuxVbMfweLeYTtDFiDQz2nnVLHvA8Pm1HX435",
  "key14": "3piDaNk2AQSKcdbcQe3NXRszpJsx3pEheHRXLTcmKPQTz64bQ8RGeFVC66pFMYTVFwVQhP18sRucYJBMaqD3gJdW",
  "key15": "2Yqw9ZGb7L3cUgnBzaRrmDcMbZVLdNa3MryDVAFz9G1Vxz3ZTYLS6yYjydduRbzdeLc4FQ99eBxoDnECbi6uVKM1",
  "key16": "5tibvL5qxxWrDLYoqPuKiAiZLJoajP9yk3KJkdMFDz4uK5hWfBQMYQq4FgCsrBFvXa5yZa33W9cUtkRsnSxf4CAg",
  "key17": "5pT5QVUfoEGuzns8FPzv5EiH7dSUCk5Pk62MewJwfvGQCyPSXUn4DYMd4HEF28XXpfJiNHDvKYn7VbarB2ybg465",
  "key18": "tRYhqx3PywpBuy5mpsagi9vxjgkEYzLYJFrPhoUkM6biWYGsNXWn3H3xdu6BhyDuD39DBrJUVzjqmPA7aDW3imL",
  "key19": "5NiYCWyzZ4SH6fPwiScMzkHdAJLTWcxCZwJ447EmmJKMVEHYZbBQwnnGKsQtTn5fCLhhE1Q14r7wM5xYBuCUuN4z",
  "key20": "3FwHoVx5tcrFJRfAfpvGNQhFFvmuz8jcyZMJxvoiqmEvDmBRBR1EJMWJJrgJPjH6MFgyMycg45g9DrKeUFFmoMw8",
  "key21": "bWUpuoHFBDrJopcHvMdtUZwQURpPNL5dLyWtHHaP1Wbya6gjY4mq4p8sjrUxojVsjnEk4qxwB5VSePiq8vitrP8",
  "key22": "SRXGd8UYQV4UQEZXHNtDnQAm6EGKrjmS5RMyPKyM2pTbBb8Afjdqdbq7w4ci3MMu7aWjUEvz4eekGpdmS2P2Yik",
  "key23": "5nNfBUFFafDNXYnbzUdeViemr4i1D4q5SHSNsYo37ugo69T47yQsAttoJQfY27HE9E444qZvM1wR95G1xA41kifj",
  "key24": "37mUu1UZP5PJGuFTDsavnboeE8JzZKPH8Wk71nntUqpPbgJ97yA8YNRFxH3URCMY7Phd2GuggAQ4nYeyHPHAuLj2",
  "key25": "5VJBPmAasuYCpPcwuKXzCxHuYtzJvqXTW3HGhENNP8z1g6rXpXKfmTgEopbtU3b8NauktqtNcTF1foFwXinXviLs",
  "key26": "Movtu56M28zMtmQjLjpM9MPXdyYtGMZBFzE8mbGcQaUXiCmXwHX5vFv5y4hSCMXybCooxSd7jMzuNLGtTLmkaXg",
  "key27": "64FbkDcGAsuFLksyegZzv81G5oXRfq5dXFUuQshdgPmgFrdmiQ9HvqP2RiMLFh89Rgmb6MbPsaLA75sumnUKm8Ct",
  "key28": "1tfKjoGu4Mcz64uHViG9LT7hU1gxJ9EEtaPRHdihejE5qKTK7pmbP3srGd5KU6XK6YnHJRucfNEf31QdJmJiTB4",
  "key29": "4siRgLjW5mUHFNrtsUmssRZ1iaRvKaHnu5bn4D8yZAVdSThujbQuhiRX3KnRYRdQAoBEBvzWVuuntDGcJYZZCNZs",
  "key30": "5v5C1HQPWm6Y4KHA48tVNAbJ8Cj8sj4hTJanP7yXYEP1X3HEoParDrgcTodyhdyxunGMosNXGC1bVkVBTft41ANG",
  "key31": "5pwRLxgFWf5sMKK3F7ugDHtsJk4X9YfAxUt7A39rNjRcNahSKmXVYSCzJ6AuGBadKHiWcp5RDjV4Xu7xQ44xmKQP",
  "key32": "4XhQjTNEvJetp747zczLTZopDRkAjE74Dp4rqwec9ePJaTLxr9f61Jdwve4eC9xvamawZKmZGpmJVxtkxfQDE7mN",
  "key33": "5izBuB1mx5JrCFtgkHnCdQLiMsDsbKrgmgA8xpmHqdh27X5WDSQPYDYM55wBaVWcE4hUU3iJDQxqRHLfsciFkyLF",
  "key34": "3SM5EuNAueX2pAFUHsMxyHWVMrFwqAZv1saChoLaEqu9m3nbTZrS98ZmEWmE9R4rjQfHSup4TWSJuhpzpoAtzjTr",
  "key35": "2sRw9YLX8tZqNsSDkXXW1XPV2cwKCHbJ11BchF6EKwe5bA5hY7Ge2jDSWDEwh8qRn6L3JZBHv3Fu6PqdzN52KZrf",
  "key36": "3xt9uxfTRT4RvdwTn3W4MrE3UiCoewVRmgbNSfma1yFQh1SRqW3wAbQ1b4La5fch6x2zU5GSHzgfrzFEAPdPZpqq",
  "key37": "ai1w4z1MSHUtwjthdznfFrKVqrpm98dRkqdsAsVUe8i2AaGiba6F83AkwosBSPbzbok6JXmH7he9zF6AGez7QxV",
  "key38": "3U18sGdbTuRSaH2Vevj1mP7tLYHhbEhknnbNyBowpWD8UQSe8d7HJKbnmDfwr2QMQJLjPJUH56ad56KmppFFVjXD",
  "key39": "4W3Y4gDGu9Tk1uVQPfvRh1rpjjvAqLTyM3FEfAg1EccAXn1GCRBVEo9VyrpbEXzfTzHZeXAGLXwP1389izEurXQs",
  "key40": "3zezDBCpggVAqJBufqZ3AcvgkFT3udtvtcEZ5nVfpM6tZ1ABjBjP6eQCWUT7u2RY1ZrPnwnu6uvaNEbTpZDyu26h",
  "key41": "GVaWShKSxbNUcE3AbFhR1rZw1gPa56PUNRSd6Q9YufGza78UjE4MFEVnnA35QqL48KcUFAeXdbJexvQcTHHfMTQ",
  "key42": "5s1XTRZvJz12zPevTDJiD4sKSCjemDYpe4uaXrUP8jXo2KAgK4Dta3bSrhQewrDe4VnAJkwvL3L8dXuyioWHV93t",
  "key43": "3C9ipTGHJCALGRtVDB9pWTr11gbxJG9AVEHwN7vknrsfhJ2b3RWw83cbvDYifNTgi3PdnbVSJoyEQ1cmsdyWRfp4",
  "key44": "2fQPdS29avpAgYVoKhGG5wHfLe877GLN4Qnnw8Ybjm9W1ucY7AcgPCoTsiAaf9aj6EBcAPZfRF3FJoxykUa7PXNV",
  "key45": "48sYxVCXfiW2rn56cc6fzcd6UNKKK8tXzHNPWKodhnDiztvCzX8Uf2YuaVriDX9r6atjkWCZTJHNgx7uiJv9oRFZ",
  "key46": "3Bth75bvfsgU1GHzSdycJJ7MJf2Vp2ZyJaLZsX8qVFwGUubbAf6EfsUjQC4KWuRZsTmYwJEki7P8PMZCNj3FTB15",
  "key47": "3FmDbJN8fgv2ehyBafuDNzXn95PZJHwEUEsf6R5B19qnxauPhmMCMYMETPfACvLinf6yx7QmLTdSiyzB1JUf5HjH",
  "key48": "5Z4zL5rUiL4mqkeuH8hW7ccHQrty7P56KQwuZBmtx7Ggqy1zWZ7h4J4qWzrfyKc2qnbeVVEGq8HbbCDD6nhWczBk",
  "key49": "54WCHCotSyrozSnJFGo6wLhtBgB7XSGnLh3cUMGEEisLv7sYvJDfZ4aF4CiGhLmqa6L9p2bvWzy3sbwq8NV7t17F"
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
