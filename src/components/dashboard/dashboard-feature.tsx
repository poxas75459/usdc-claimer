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
    "66vbqr8EPa48u4kyCBbdfaTZtvNCVzsyhJkoqmEc1QfcD8zR41bV6sMuuZF8ZU3yXsFBmrYPAzj8cUfbv75hK3gF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UGPsFARSu9v7wTKqggUQCNpHiSGsuGjofDbgqsxioXjZ8GH4jFGSXPDjM8xVzsaWmMcDajCANQXoK73KLg54UC9",
  "key1": "4JKxCsKtXSNYfKZiw3GbHdZjUeV2myVfFxdpW3uwmihPkT1VS66wRns3JcyUJV6YZga3GbMsPP386tYxGboCDJWC",
  "key2": "4mX6ZUwDmnETwqzut9T2nrPAdLmPYpvDVDDMbp8PPU7eFNiM9uuQdnMHxXxZzNfnH5BoqxK2aPGFGTv7h2YgEuVs",
  "key3": "5LdjMqmuPvDAxnJxDCSixRnLkmpnU8c7BV4URPkf4xTMqodzxqmoSJRmA8QsmmuJDMTPZmFsL9fRDEhjywJqWgUE",
  "key4": "4wrCrrkGFfH3k93ckv2xKVaRraFc4VYXvJmoGPEuqug3N3foqUdSGnZkBAESPcPw8ktkQRQ7VjZDZY7Hdibe5PCn",
  "key5": "4XQBe7dsZpi8xutQMk3Q58fJpAX9vgsFtpg2waaj5VcTyzGs62qLQvvicb5fpgjSUvBXP71TDsoBGztcMEqrajK6",
  "key6": "4ufaE8wZVLyrwbZgUVegTZk1mjpZRN5XbK6MjncBbLz9PZtqrAkFK8dvzpc1MNsLkGAEE4zCjtdumD8cphUnBPTE",
  "key7": "3AHXEufLaCtcRPYnkhv4GhTibcu3ianEsHgM2dkjuPR1nXEK36JTADXfr2F4ZYniBwPqPnZUcug59CsDMb9yXTnd",
  "key8": "2Wj57jAjttDwEad67t3RyBa9nQPL25SmfNvFnQpNo2RhKdtnPWYkxfsVBL2iJfRypJhDThqxWSzTmjAvRpU1uMDD",
  "key9": "GJcw8NEP5ur6YoV3yifhpWm48i2rRGXywgfekqbNftmYwS1PEyuhGyVfQnHgAWtRcbbUtXS6XJpwajQTijQcscb",
  "key10": "2BG2pGwuJS84aMiKgkhB89zZbU693smqZqkKYrWaR4ydQpk9VtK1kvbjinZ4hR1KX8HPhyAzoz2bft7R2ACCLcMK",
  "key11": "5ZnCiKBEWEMTAzi29Uyn5h5YNLgWPfkWvKbD5ZG5oVyxrq5ZVp1RpEbB9Yr4ynL93X4XYgUyCQ8e9JZ4q7sbQZfM",
  "key12": "4vLbjvmN3WHgttjMnrCWcgoc9vT9ZC4VVnxSUZjVjBngQF6VQHnwyjBQMRoL4FYwyAfbyzdZkQPZ9rKUkVsRMu6q",
  "key13": "4aeiSKaPwQTtgXbsVi6eb9P1yFCZuotjhfKPRenMYraYyADrgQBkCMKxUHNAHdTrHQn5mVyCVbcG3DCZcabM7MYu",
  "key14": "3UWmc7qvtzjuVhTBS6R5hJrmUcaERV6ZStgkWiZmsYc2i1viTmuYNzwx23W6MfUdBHZmYJ2CTH2NwFqZFy1FAVoz",
  "key15": "vixpgy46dg6Xu7j1PHSq653KnXgGuJGNqi8kFy3rrdkQdkk98xbcsrFjfVEnwHG6DsezD5tjGfNajDzJ2cCJzsj",
  "key16": "58jG89ntzLRmsWhNkURNvT7HE14RVC4hSezdagF6kHAGC4TEUmn6vdvrzknP5FZTYABFJSspTTV4nrLab6ckmrGo",
  "key17": "4VBJd4VypQhtbfpXg8C1aFDMfY6SME6EDqCym4H8xgoQzEytxxSdvEw2gBKNmBfLodpNxxnBCsYt4EcjhexEPwvf",
  "key18": "16EYBub5ZvC6wsCbDfr1okn7H3dsLX4RgyH3WpxWZpmhhidkHQhkKFd6arNYjxyrD64MQsKDng5vdiFuXZq1u6q",
  "key19": "2LvtYjQDN6Zkgn9d4rKHZwsB6nScQSaQcLe3cmeaSb4ZPo2njbLLgTx5yehbc3tqeQLtjUCXp4AspixfX8ohDdbq",
  "key20": "23G6rwi5ww5rTJyqQGs66vffZ9JH5Ez6zdG6rrBQCqKtjfkeRsDNch1F9Thk636QssT5pkJHzyN2qsqX99d4aG4a",
  "key21": "2CDhAn3h1V3JBuJxNPHdtGu6pb9jnXjZBXQuvyS9hENhZoVYij7cY9gi8RvCw3brXziCESBNXc6WnfJXyMqqDvxb",
  "key22": "MvCutf6U1ijT45EZG3seoRkZxVtx75mtgvtTAxxHuwbKU2t9aiSwYsrmJJktqMYBwBsVUEjWbZHWDR8YVjVW24s",
  "key23": "3ZNPepUmu7qQ1Qv7QaCPDJzQK3KbCkbtLf2H52quRL4ztrBuRSkVUKrM5oYe2CzrJSk8rN8ntUfGjZXTZHoHdf5y",
  "key24": "srL1U9WpeZqMmFd2vrMGLcwEBbWdLTD7yp6asMLhoJFYzBegGdavJZVi7EaA63xXP5fM9v4nsjtM6jVJQsisnfw",
  "key25": "3HoGk68J9dtB95C7YWinRfaM483DrEerKFGarN1KKiNaFZzLqMPLxSoEnKpRdzrS9vnK47PTxv66pC3diZQrC9Kd",
  "key26": "3wrzXn7tV5sTGqCFfsE4FUwfB5ReBBQAmp5nLF1pXasGqa2wcESM1tQ4nGvDxjvsrjPgRcR1FTo6heaGJLAKVKfq",
  "key27": "66wRY3yYVhYQ9meSy36wVgXiYLvAKoyCjsdFTMrb85k2r4V8LMwn68Brtc8U82NBwX8aFqpctjnhghBE4dz2q9Ty",
  "key28": "5Akas4sXAWPQZebHYkBpAK5Vq8jJdXpcAKvt3zackuHBnmJvcY7oBbWL4xMcA76fsJDQ8LTAtyLnytWUoNBDNdLt",
  "key29": "3sTbES56jrQXx9g81iKqfiWwu7bpGAC7XH4vYqHmCr5sbi1akRnHHFq5J442fPhCHzKru59QMVz2fwyk5Y9QGB1p",
  "key30": "5akiSJxHU4Z7WLMbAhddr2FovXntRV1niddtR9DC79shYjr78trQH8TiMjtEe3UBHqrcdywxHiHJTY54GN7J85DN",
  "key31": "5EchjqkH2N3bsuSZDDyPoN8tHkPUbMhxGtGer2oEK3nFWiMk9LsqS9j2ezaAr2naYmvvAR4o76ZJWA3bWGSgzZTc",
  "key32": "4Ys7XZJiWKLpmZEs9nJmEik6g269uZcVMiemBo7VA2Zz3brm92cVrkeVbavmU5ZnAwKJvSsQQnxeVzrBrvxFCzkv",
  "key33": "46gz6B9KNHw84dbnoNFxoBj79Vv87fH5Zi7xKBfN5QrkmFcZ8g6oPSE5TMLrVGS4BoendXTmS6UbQhCmHeyMFjfT",
  "key34": "2UTbgDgitSeAB3y2sDAEPZgXKJTJCJz2bwmVS2LosrXu488uxEcqPxBrnuVeB1Q8fijqa4EnosKzqQGzEFXF566u",
  "key35": "2NKjmMdHU1dCMnSQBuQNZTfBUeDsewMCn1Xy4pRvhM9GV8xrhwG6LjsvKXL14SPnkWzb4tBKDSMB85YvkVyYAzBL",
  "key36": "559ek5VocZjwQtbcB2D6jT64TTEp6GGjV4GVmeHZenpeW4AetNH3Nayw2nBfjb78g6o9BuQoy9SLkqUcEppVJCsD",
  "key37": "3DAatA6jqyoCo8F9chz2MXWCUAKJzUe4RWK29QFzLP2rg77GGVnKVP8FHL1X69sT8nAmJ1Ka1JUH7tYCtKpHv4i7",
  "key38": "31qgnuN6Q6C4tAu6BepViMRydphNkEwSfKyZmRaqgUALqRW9H5NrGthDwDERUa1wh84GTP7mgVL6gmB1tBrKGEWp",
  "key39": "2biDBiHbnunZsGpQv5Nz7hBP3rLtAYBXZwxKB6RYvLV3hSahvb31HP6xEdbQh5YdxVfLUTa2ps6WZMEs3LPyFL8g",
  "key40": "4h9E5T7LjVs5M1dWd5YaMNnshNDMpUNa5CyW5XxrN4C57JPvtw6pLCpw8hyh935YnXx7MA8FDvir6jCJVYyNz1za",
  "key41": "5ES53r79itfQLzKWZhtsDwfZbA4T6GBJYWkWF1ewX6DfJe2asvvZrdELmN82FaCKswyksiyafbv47FewiC6w2jd5",
  "key42": "3UtcbtRYCPMdMfV1CSumMTJZjogaBHQFizDmFiy9KdwzitHD3BYUVBRvLL65QSHTTSgpVPTQYLLP7azs6WLmNQ4k",
  "key43": "2629uoYWu4Z7aUJ58RzvfDxV1AcE4iXj3BW1pkAjueKFG23C5yPRxR5WB3jj72rvBwaDwcy4f3tFkTtFkDhSnXL8",
  "key44": "5AHPXA2tqEAQKyuGF31n7c5QfcobCbUBNTJgxFRr8qpMBp5Q6G7fJZAhcutfPRrHRyb5H6jHMjTpseTdiAiFBm9b",
  "key45": "4hofG5cieLBpyabVZaG2tAp3FuKgnsMP2qUbnSS4Wnkis4W6PSPaY9q116psSo31RBjFnkAcXJB3tPv6gSN4hd7k",
  "key46": "56ezHZrEVgCZyWGyfmk7fgtGgm1yRFUHwnTPWYaduE8pytPGi7Xt9LhKoGkCNSGiCJZgZSKpxeArGMMKohqxRqNt",
  "key47": "4pKLWGPxYZzsniWgt1f1LrmQSpexSnJHFrJ1LFxNmV5Yb7ax142FA4LDbnM5NE5KHuCA4kBTPgMcJcZTsMKryuSZ",
  "key48": "2gHWig3DjkasHY1iR5t2mnTjYi9ntHfNmj3EMwmtE7jRbQJTiKq5syozkwrWGQcspu4tP897rTsZW3UchujF7zXh"
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
