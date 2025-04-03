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
    "5L2Cqn4AyKuBmxjYP7oDja3bCHafHUjR2iJFeSssQyoQ4YbvfoBamnRDs6c1DZ4YUJ8nE1y2uWqQCLmS8ysVeZgH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GdGFZCQCTJz2n4m5Bv1Enkd1fCNQK4J1N7DZCNUvMZZ9KS83zRskR1s2eFFhcxptDcpp2gkwoCS5oNUqyRVVd4S",
  "key1": "2PiqSWsSaEDViQUDvhe3U96nZeDJrN8ApXV18CpA1GJ4XS3Y5p5zEy191MrXTjinYB24jnN5gW4jNsA1iad69E2w",
  "key2": "5jxZPoVWnMXd3yDPiyucVmWsyJ4FhThEx6qYhsNv56XDsrWZajfYyPjm1nGgVbF1NP5WfNXVV6ZLQmJjQm14kibK",
  "key3": "2nSnmVatCEGFHa5sxvMUchjqcjiJrX5K9dHL7Vsfsp8bacTHfEUjo6iP8PYUQpuBqVyENQcvPuAvPci7aAgXzfY",
  "key4": "97KdJoSCLuHQe4XuHjk4uEzUw9J7S5pM8t12Yv6LwyppuD9tQvwwLTAS84F7EvZmGXA7EbkiDi4CcQ8CF2LPFei",
  "key5": "2kJ6SNCdCi4DM4HSAAwnfzmFBYSWwCxJwBiXXx7zffJ9sHaevtKppuG2t1eMHaeWoAPWSoFtdWuCVmaDv2UAvLaQ",
  "key6": "2dykTyhzuyXCGN8yPznzkb4UbuQ3c2M86T6N1b8L3fu5Nh7sR489Qbp79icxnYiJa1BBpKRxVb9VbdrQDUyP5oTd",
  "key7": "SWNoE9Ekx4yJUV2gnQXViGJ4z2nGjkt9ezaTt5yEb4J47cHhztF9JataBmLaqH5xoZgtGqV3z2B6vusoBRrjxmj",
  "key8": "65aWwu2nMdoeNbT5vco9TjxVbQstksKjRRWpW76Z43CYoGTihQDpbQEpk79HBQdGjp22xWSHRTawKh65W9ZWTwHL",
  "key9": "48bnkyUiHijbwrm6ZB7yXMLvmPsd6ijNk9iB7E13nmYhd4BuQy2mEL8jgdmNxR2J2SdLpSxQ3bmwnQCgMCUmcWDk",
  "key10": "5ULb4pMRsZx8HyG1wh6655beCX3iFtMq5Bt4DgtRjaL16CuzjhaSNnVNAGC9EcxpdAZ87FVYweNeyGfCz4goKHP2",
  "key11": "4pMZzN7CEK9QGevqkeLyLPhZvv5aQfgbRwYkZjgmcPyKUM4GYoSe67G5Rq8JFoRCfzkTsCGVhH29iC5e4warTQcy",
  "key12": "57zsDWbuugguGjzCswaqBfWA26L7FPdBmcUuTFu9DCEuEHTxw7kMY11hHRXXizXiMNCCsC2v4DZ8YPFg9cmsrUb5",
  "key13": "2XEKPdvM9s6eGLqGct5XVWr4o52HFJ6ikq2Lz4skiDFkJYMU2gLJNqD3Xe7K9K4grWLRD7wr88fQV2ofbdXLp6jf",
  "key14": "4vyBD5fpxcj5T8snWVNSm7psKvKuRtstJG5jRzZtaC3tJp9sKa3axWHaYs9VmYAY6hkPDnj2WviZBh6oDyVqAxQ6",
  "key15": "4fWMbJ95K8GCPEAYtxHq31TFhcr85WAWZymKB2r9SQLEw1n4SigmCdAL2TgjtT7oVsRtV4uEc6XrqbWHqdc6c7tu",
  "key16": "5DnauNa7S1W3YXVxRaxChFM6uAiud6kQh5Jf1vvWqYhLGCutbGiKc4N8iXU6Nw2rhX5btGxZeEJLpq1WTcdEKXqE",
  "key17": "2YdjfdwowxKPtRGPXjMjU9TxAD99ovotVyxqj1A7N5HmpCfiwooyQm94VbRzctz9xkoxYHJawQni4jogox7GtdoQ",
  "key18": "54Ln8jkpiCHdadCcQrPfMzia9EhWBceN9tDuouPdSN3SrQj3gYbvzq8YmPSF1Zq7BtsoaHGi9qbPHAZzfwYcdsSA",
  "key19": "GZaCVimkdwGrhqwY2cUDMroVYkcLXG6f8dsqTZzJGkKL38amziKFbqmYJeG6CyA1NnBMXUpB2auukW4LnX9a4mk",
  "key20": "RX2C36fepKgv1r5ox5vZTB6x3D1Kmv9qaqn6mwPmKGstnG3kbKWBRuaSHwcv31nALC1YJPoAeP8pepjnRWFk5Nu",
  "key21": "3SePD7A2pHDJ2ZwrihYGTq2oKLevqkA9Z6CMaRZd1WJeRKFT3G5sfkTokoFqVFzU3Tiuy5bRgDf62RuS366cot32",
  "key22": "4ekZH5EaF8LTwvGEigKdGqyYQkQSYAQ49qq5odRo6DmBGN71YZdsExeBh7isEGWgkYKiw281BRXpaShL2hUXrPJp",
  "key23": "4m68iFyDNAJ3HBjsTZtF5RnGfrQJk2MkGDpwZbNZptRRS2xLyfjvvCEk5urjwm9qbxEUbEjSP7n8RgJufo4dqbf4",
  "key24": "29y9gLHnrJpSnJzrtHUn9qKcNVnB3Q3pTT5W7wepQ7h58ByCBGgqQeBa9CPNkXmD1ouTyxP6YoG7g2RDnFGJpibq",
  "key25": "3u84oFoeWmzTuqGbNuQB6WQ5G7djGXDkGzAfrwJh6dvFM385V61ybgkQUqAqqbrgwM5kfoL63CDq1Lg1enm9adSH",
  "key26": "4tLDnBwQJMgTngtQFRn6YbHbbWTbXTvddAjvqtfFu3PvQZDiBVgFuF96pgawJc6Bt51CgarqdzuLVmkV7dUGnKkg",
  "key27": "3g49rRuookt5K2x5qdtpb4dzt2mJpMcsCeiT85QbhNnuKtTv9Vam2y4t94WrjpfcZvn4Kv5s67ju9rDTcF4f5EmL",
  "key28": "4Hiy1yUbao9QhrV9EiHMnPTuT5gMBpzHt9AUnPQtrEhh7HpHDttMRcQe8mvvX4NfdFcf1uEe6momPG9iaLyVt6d4",
  "key29": "3hfvjnh9Q9xnjPkyWV4g8DpKCQR9F5bM6F8q3CN8vEKgmuAGBeoZFrBNV2hWv3e8S3hR2yLF64x6LyiPku67ip6S",
  "key30": "LqvqiDBLq4Gja7zkiKvaPv5TxWuVKNB9txCJYy6BkVYv3XK5jZKwf4j9GfG1wv23pEFR1fnu9EQy7dY39KZpcYp",
  "key31": "42UZNjrUbQu9Vw3CsnZCvXLTQNCSr8PsPCVHU11syMV9LdFN6U9BiookSZ5YdJPiREJ6Kz1ZVTJiqwGLpQPhWxXk",
  "key32": "2TUYP9NfpTEvTTcTzrLJpp9HDXcfZVuKKNaja3ua9e1tk8DBAQDBb7nFTjK1r43cA9EUA4ELJPc5cbSaG9eSkrbe",
  "key33": "2YJmYVADkRLUvhf9RoE1RNABKhWsxADGNCU3xpH9tT6u27jx2Zn8LajPFXFqNVjMM8F9x9xvnBN7bbhiHJr8dhPs",
  "key34": "54s2wtnhDB1ch93eaw2H1RTTh1B9UQKWiPpLop5MjznzaWtuptJPs5PvjTh2h4Ckk1UqQnRyRb5emfN2iPyG4HjY",
  "key35": "42LMwY14bkaUhkM6JL8XnCuzHT6HPd2synoTuHkNQ7L1JWkQVrcdpQfbFf8oco21XU6YnfSsUNsJG9jVRh5zwYKX",
  "key36": "5kJvPeoiuGcPu9hHeZCwfsiGv3rjdGmeKbDCmrp4FAdt1E2fxWJKsyY3iwfS5GXinWXsRCDfMwLjS1cAGi8CbXD2",
  "key37": "5fQg4aJ7gFCzQZmUNnACE6Wzzm7MMV4P6vAbbikC3JxNLrsk7LZsk7tUTP9X5AbxqTd6XYoYAPAfaqNyJ338WgCC",
  "key38": "39Kqx4m4tKMr8p5kNW9HiWi9G8kKZKsBv4mXKowKY8PdLgv3zZcNHD7B2CJJMQWhNqPcRkod2T7C2ftQM5zc9Qi7",
  "key39": "4EPY1hsAxP79Eme2e7Vi3fx2n9ufXFhsqn3A3Y4p7rLYgrd5MV1X4oX6nKoazbLr61u9DGTm3XciMECd6v3NBJmF",
  "key40": "33nrRSqh671hq7qhKjk6KRyJT3J1RqM7tdDV8U8N22eV1ivR3ThibsZ4oDyjm45uVurxcsJPBa6XSr9iibqZUfEP",
  "key41": "5XWo4qXx5ZcTYtWEUXXCTDCc4ehXnwhBqnJKdP6eE2iE5ut1UqUmYzD9YzrKfjQgYgPrqMhfugjsQ2ovY98TDeuV",
  "key42": "52hsH3vF2QVvHSmEYWTywG5mD6BkzoEjn7i11KhaFGMFz9Jr7DwLn3XZoRHBonD6QxaREUQ6fJjfVYQFUTtSBPCz"
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
