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
    "4Q9mv4opVaJWL5fvTzuVSyeQ44kYWNM69ee3cwmCswhaxfmEj4w5yBWk6s8WCstBsrqdbea6ZWPDXQi12jtayaMN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "d484ZDLDH9rqs9YXMDbgHQmDACEWHYaRJAkwuPPLKKe5GKKk7S5DUjtoumQcJ5n5eBoNkHVqehekiWqeRumyhEV",
  "key1": "5PcH9Gdq8qtitX3tfU42FeKbZgvzKokg53foejBetWywzkNV4XwiFRUSjqdCef7e9Ld35LcedtYzQSGnWPoPjAqH",
  "key2": "5sSqcXJsNuRNViexV1hEovK3Jvu3w6yrf1D5xX9n7TKtKXDkz4WunTJgrjsLiuwqiinQhEiRguiyvk12xyRqb98G",
  "key3": "UWFdE3EparN6P1HePHdWcCt7yCTmLw3heFgUCP4vxaK1mE8ReXSwAcRLADaPgGXapByDcMksuZkwF1ZcmqAKTvZ",
  "key4": "F6RSe4UaSNioZLYEiQvrKABcrFW8FkbvpK846NHVa6Q8znJ5prYmHKxMtvf4rENDAFQqNCL9neqhxvYd4wyrLU5",
  "key5": "1DqEyXpQyVwX7LQ8KV7J66Dhy5wyBjTZA6wdSJnxYpQXn1SegzQPEe59UrMzFV5sjj2X5GVshd7F1SnmZjxJsAS",
  "key6": "VaQYbFp3yWpE6s1w2e6GP3DHDhjfHogk5Qep4dhvYdv8NczMCbJU2rcCVg5NvQFq1dew333B6nRj8ZdHzs9MqHy",
  "key7": "3hArksmz9E33PD1dQgz28hGtAYLFw5Xh6ggX5kxVWxQVHWDfCPwWduhkDnVRKQVvVDRFowyMfXUFnynuEwXypEBh",
  "key8": "5TGVNk5t3eqUJJuU6ifsHnGZLAcd1ZGtRFPWhj4w8wKJvwumQtxxrZPKvoKRexpJLMnpo4H1UByJLQWCkDcSeS4t",
  "key9": "XkythXdC6w5f3zvUykd1XPzTy152cU4odzD31cQr9z9H83oCEM2Lh3upcmG1YV8jkVpfWHhUEGrniWASQhP9pkF",
  "key10": "4sekmbAvjS5kw7AdH1VQHLjE41kB5iqKzhpLqVzdW6EsVYiPNQajuTaCgY1ZAotitHRTHL92EMGVdrGqqvh39mGb",
  "key11": "4gT3XBUH5e9uvjaHYRFJztbkNE3Xnm8hQfNDKnmhVUsfFq61zuat89AXWoKHxd1YJNRoatKTxnr8JBXwdtXroWqd",
  "key12": "3QUVjSCz7tbCAPJXHgXyNSm2dGWCvcZXoB6peQNNXEqoFfD2YuYb53rPcRbKtvKHsppxyQp7smEumgTXk6bb4y6X",
  "key13": "637hRsH71LDZWzKSVTTdo6St3m9YEThUrkKWRJgbVWiuTjin1MjF7zGtVmBQcdSqiR8HTUVzXTsW5mgrpXNP1XuC",
  "key14": "BbXa15a1rMCzDdUhQyBzeTbtbo1Tx4J4mLAaUzeGUqbc7SZKRQ9e5npq11qGsDcLp6JMX4cc31LtrQstSDgU79X",
  "key15": "4VqRjNS7pCET7MY7peGXtq5T858yaPqqqs34wxgZ5gPeE2XovZ3pjWxwfTWi1m3JcPasg9Nnh5E4XxZWPHzKbja8",
  "key16": "cMiVmfVjdyUvZjzWqVM41EeU7JsV8nzXjevbun4qe9gmqmCZWqxUfJ9yuckWQEzPD9WiYfEDx5Z9eVniUmwTWGJ",
  "key17": "4WyxEXe5rJX4k8esNdV9uwVMHivcWNpPJntUxUR76QefB33dWLjoGr3zq3N1Qu5tedMUXo5U9YL2UxaCy5kFBtdE",
  "key18": "2w4WMkUt5Z9i7xYPcev9LwT5q6ogSStWYQBNDi4JEWnQUq76k1UwrkMetnX3h8c1nFVo1aih3ZjkD9FYUx6oTtVT",
  "key19": "2v49vRiUGMJq84o1GxQtThXUfFEftdQRJff9nHpDCyqerzEPxsVEDhvJ1a5nF3wnp7AvS1EvRGAsbAcu78hXiH9u",
  "key20": "4JRh5FVXVhG7hBozRbiNZ41kc4PcK6uHJNf86JUZy8wc5TVjXZ26x3jnfMH5UL9f6ecnnCxg5eA8kK1oiChar1fg",
  "key21": "23pZYrAU7f2dbRsFtqKFRqazxLrBj5rhbMWduJ4LN1RJqtcTT1FWAetSTWzeWxWJT1A1NTos6y82U3aPX6zQKURM",
  "key22": "2aYfrmPwLS12Lv6utqHimb8QD8ZVm2QrnF86TXJfcy2SGa453nEtFmSnBSRj1xfXDHkQDvFZ6gHiyeEVwN6BRybq",
  "key23": "4zxpXtm9wKeTtV77kKAd1uYs3Q3vpXpWeDt3nuz8AtRtivnaz7aXDiGjU1zJhSZwJ9sjCckLHUzaa2kwLRaBxJZq",
  "key24": "HZvDnfo1rMMTfyk3M7AB66jZtpxDmyHFAS8tEbZZfcNYULCDrsJCTmMZSv3NtBLqaVcAHa436omH6bC8HxEVDsQ",
  "key25": "2FHLreiSSKip5usrxcCNgFoJ5f1XHMeffQocEUoYuX5dWwHUTB3Wxg5Rke93wFUhCy9qyKUweuAhb1VKLP2ZFyTt",
  "key26": "gfFeTgrTsiFab2AmgUQ417uQw9yRsGs8vj3H8b358FeZ6GbNezHH6qQ7t8jUTvdLTB8UCjrNRt5zHUqj4cR2DGi",
  "key27": "5Yx2h1FyaABkuqYeF1sxtaDwJ8Y1h6S86ERKTfb6HDuUvtUNu6sFhTq1WwR8yZ9zWetyRXd2vK1H6xCkAtMYLdMo",
  "key28": "4ZwgjiNpBnZzFSmQYuL8Nfzq7pQvmPRqSLaFU5bZMLvwStinj6HFFZ6scJhJee1RsPSDCxCXiaBoQJwFFgnNtTUJ",
  "key29": "3TX3L1d7qUuaLrk91g5zrNsRTqogsKaDQMmKHVy6b73iQzb5C7BbkEjA2L71q2hnujniWaovEVDsZW5RSteTN14A",
  "key30": "2bWb1fozZTMmCyrvoEra9GXosnFWPrQNnsB29zNC3QxTpiimxFzhcXFESokko693EqLyudvkQSXKrx73WAsAmxi7",
  "key31": "5gxBHk8Fgh7erwp4fybGUFowViddBD8Y48g3Rb6LBb4fXoPAt2m3ydeT9CawhA5iE1CtesmXbccSK3jwXyx9FmX8",
  "key32": "4jKEGBpfo6eLdkcWW4wi7R53jx4zCmrT6QgmSib4278ZLQAoJfp4ztbKKzJrtMgoRVKMYAp8LzUx7SuEW4ECjPFd",
  "key33": "5m9cummWC9vwwdsNbM6148jc2QxgYeSktDT17nBZUZG8rfFPEeRsBY7J9JH4YonBTXDshbZTocD7jG1RhnYntg8u",
  "key34": "3fydHUgPptYSwJHxCJyacT3QmBnTc2XE9h5MvUHLaK4tT1MrXZLAeCqbW8i8TwjkStCUuzNFKZ3YLsgoDL3TNzA1",
  "key35": "5jNcwxSGtwGQBsuDZtWfNioYeWWnRfeX4cwd7kzsZqYXpvoz518k1bzkyiyRo1v7jzejQQs7KtagBRCHoMEpAWB9",
  "key36": "2sHYgLTbuU4YMGg64Jn5Z9PDARZw7wbXZtqzLBFnd96N6C6hQQ5N3mFChAu3aMNS6CFMA3Kibg2EmwiTQPFVdETM",
  "key37": "26q3VoDBFs7ygZtpn3xdXCrqJ6YhXb8MjqAyeL79yyA5CpwYFocc4eY8TeEDGs9xHaoxqg6bmKN59iNYpLiwG1CV",
  "key38": "KD7h2QExrtYpj9i3WrBihXqm43Ay5wXSEuwpfH5GL8YXYoq6JW56Uj2hgdKHctZL8CrNcViK2nUXF499YjfDWGe",
  "key39": "9P9b1evfVq9bnDyi7EvFfeteXBGP8EgcewUjQLFBPexEz3h8rg6LToSKi5s1ztAvX1BUG4Q7P3tLhH1gvoY6HZm"
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
