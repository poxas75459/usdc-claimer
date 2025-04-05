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
    "YM4gk5zPd9C3vkWVGTpVEooJbpu4r1MV157k6WZKBxuSjjdoB2h51nhZTfjteSsx2FzgT7YLAcR69MtbMU8rw4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GZFx1DdU3A6rzCqteT1d1fNhtH3SSeBhQ7veHzFFU1JtjHjj4inmsVLaoQY76afZBQjv1CVJdiuaeKHPTCHjFnf",
  "key1": "3pBRwgrd1KnjNF3i4sCXYbe6C143iHN9STWdxdKhRdHTyWzEogRVSmtQNnGnrxLRgWKjrs6UPZgkRyGj3hLnC7T",
  "key2": "5431ZqF2gitTQfycc6USUE4AAh9tZrsyDyRu1tp42cwEXbNGB2zrEqpKdz2HUr1KaQiumpDpUW5KiUnCbZ1dZDh1",
  "key3": "3qwiDdjgy6H5bWF9rfjWbJVNPdbLoMCqkunRLjJyiraxVF4bGeGq8RC4S87bppLb5kvF2yTVhDcvuqz7v2tQZu1e",
  "key4": "421PJwrJ7pL4yn4inws6uLZvLdtwd2WawQQBUzUam7FfH25e8iNVELBe7GT2NfpL7Po1XnXpjkQzWHBwrJMYtkz4",
  "key5": "4rKHUBLRCYoSPEsWKbcNcno2ZaQ9RoRE3HpBGq9yya8GqAV327s1AhFRjWP6XXTM2KfkEx8vfaHs51LfnSBPS5JV",
  "key6": "4GSvy7WaW597iL64SLHMRKRFMB3qu24rsYCC1mchgzYk8r6ogPC9m32a9iRqjouxfU2y27LxZM3XNe1aVMT8osnP",
  "key7": "mAmAtGhRt15VaEmHhrdX5brJueCn9evbVFSF49Pb9WNcVrM59HyY4A7bLZKMupz8tJw9CJtTsXB6HKdJq8vCn3U",
  "key8": "2WV6DpKTYdsTA3X9uqkfFgUrt1kZ45fqiCmaWMTypaVmGDJXsnx6famAUxkZJTHt87j5s5wbnNeYg3HSimPTR9Jn",
  "key9": "4t6GJynsN9Exbe5zEZ7gdTL8YW8D5sA2qp49bMEUc1nrYgRALbAtH621fyxThgt6UFL6wJvFAoHLjA2DJUAkdEUH",
  "key10": "5qyFJXRemnnAjJTt8afrNCdvKK2XgDs4kQbfsLmfKMJbzDnHgu4CTva35srkA1n4jJNqcWdUc3cMQrbyw2CgeJYe",
  "key11": "2v1nnkv2Scdjy4yLV2diQzNTWWSMjQ1tXSHDH23UwC9F4dF5qCCY5gX5A4ngsZfSWAf8AfFQuvymUyazNBDjgQ3M",
  "key12": "2PfGWqgDCsg37cUaAvxK1dtirQVep4Bqb7wXAGrVyqgKSQ5hTvBZ6jjB48eYhrjPPZD2qGzshVNJrWHDfpVBbGrR",
  "key13": "3r8wpTpchyvEv65KCsWoJbDVDMKrBYWdTWsXanNBwmKomLSALnWHdnRHP7HkLGvXbmWdbX4Qtx2tGnaEQTi9fEjJ",
  "key14": "4fxazwqpyg9k4pd7DvwyFWzyVPsYbwnXVqWkhigC5VrjrA1zWTGihwk6onvXnkeqCYdRWZiCBxsj3n6ixfn1YQpB",
  "key15": "3rdt94HWXGiRvAXBEHgt4DoQThZC5u7e1cfv73GDvF9yPXLebRWmJXfHi7oW6Ts7ULgMtHZy5zHVmar5DbqgHZRa",
  "key16": "38wpjiYiXE2w59Z8ZNMLmBbBLNgGJqzFQxkcy37N52RkcmeseU2GwGQktEuJbVRMtn9JZ9WubAR6VeT2U9rJm8bn",
  "key17": "2aDw9gfi4KsZs9KqDKanR7VKMATaStPqsoF7EGHUt6tewtX6TmsAHvRovQWWFBhTCei1QwoiW8eTCrV1qbb6fPSY",
  "key18": "29S8pkehAiXYUqYishgfs4DLuYcgSzbd9wuP7suHdz2353zHy1ahpRqgu1pNTL3jkn2rUnuhebEeF3yNh9D1LahV",
  "key19": "4uxxV8VwsnZ9ZQhUFBLKQxwHSBWXU92pGBpk5i8MNcaXrpcfngR3aPTW9vjpFj2e2BM8LpfJ5pjB6XhYCwP3y9pW",
  "key20": "rmTJgJXMApmyJ5v4wtZfP6zXc7tLYSxCzmUxS1fhBs8vFaHRdd42FE96cMVuyfRZJPZrtAK4RwKSW8MeDHCZn5X",
  "key21": "2MVDPEgurjGKtnmD63YeyQa98B5ZQ7jAuEYJom96yeuyrM3M4H9KU7GEpnXKkwN2qnYt3QabAoNDJT5ev7zytpJ",
  "key22": "35coCe5SRoEeVFFwP6Cdip64QLPPC6K5epwjx7Nee7orerAHzWQDnNBraYsVDAepBNpZBUWcJeweYTGdeq4LZSBp",
  "key23": "66SdNXNGkKAk1m8qVG9ruHX9QF7C7HpBjFhoV2fm5VJPBjBQ6s6zmzxU5GviSGoY1E55pxJqm589JVRHRxZiLweT",
  "key24": "4TFr2q5uoHDBJBcrQVL75buqAnLeuZLGCC48szJ4oZhE6pAR6ztZfj83sfNzfxUuoAiufC3p4Xr4fMQZo4WMd8nn",
  "key25": "4s3q4RKG2uyAVw79MjqYKdJr117t16GjJpvd1n7dXz5RYJR65x4RmpvWWkFiFgp6U6c8b7DpAPHx32hYjZFUv9q8",
  "key26": "VHNBrzpZx1cK2GGtpNGm2Any2zZWBiie9CRE7qBvz9HHF5a9cnMwUHTh6BZnfjsh3MhmPSYZXWUtZqRquypnwe4",
  "key27": "4WfvvSGi5WotRsogktakBTutFZTddBS4MYRCDgAnVaeH3BjbBk7uAX84TpywsNPRButu2sLXRPTzueGveWoomaWo",
  "key28": "3TqhpmAd59jz5jEkzeE3raSEqcZN2i1B6P4fEXpZoq7TnKodtD5zSMf4Zowmx7V9RYej5oBzWh9UPyXLaa78WqG9",
  "key29": "3Fmy9bKRZirEJA8uf8yN91Ejao7P7Cuywmu6PrJ2Bm34s2mPf5HXHDiJKrH5HoUN5pW8uLnXo2ngVYCxbnpLmU9L",
  "key30": "3q8V5Shfm6qM4nXvCCap9gCQYcAeXHMRVVHAQbTRgjaAdPEJi8TokvtdPu1GPvPmVfkNJ7dxF2s8ijZmmNJc5zKp",
  "key31": "2iF3BHaqU73Af5AmayJxBrt4dbFGQrNVugKwoE3kCZnVLxu6aQbBsDwEpAVACisvZtrKpxsLMov4EoBNHa4XmfDF",
  "key32": "3tRWbxhorjNbw1KAVj9TH6zeLdsGqbnhJKkKYzJmKywvL3tHRpbMbfBjiHm1mUvCnCtmYHRPNaVZYcXVikAVbUuz",
  "key33": "2uFz7y4H7PZMwJtJEmGCAHLRU7tgVoFCkDxhvGnEvqAmYTPhTecJgxSK47bwyy7WouBpMfyXfXmmHuPRugyVS3uD",
  "key34": "f6wVDznzHF7pGrc3CUZg6pJjM2gmoHtanzFqYHTKKxEtbUCMBm6tfZLjLaCinhXeJWE7rDFqdg2nEEpoGfmFd8C",
  "key35": "wSTce5jf7rUcZHs2RT3uycdrmV2Ca4Dua5oq2A56D8HEauy1ymW19RAfJAwjVF7muCPwbq8imXZvWQGW7u9fQKP",
  "key36": "5UxAsZweKRTMFMbseCkvZgnceE49M7mwF5aG23nZCSQ4WCCbndjLgYECyYFiCnMMDpFQNf8phzFjuNigzDZFpA4g",
  "key37": "4QoBp9Eex7mLSC5QVyz6MtBGqTgkfnLitoWpvb4mjuMjYm9v94EHJA7VFmUPWGK4ZnveRSHJywEEqSNpjok6xDmr",
  "key38": "pzmuYqnU2C7qWhHqr6kve8DiNY5943sRS7hzTJ1FSbeaYRV5cwmQssUzsAdodMfd7iXpQVeEWRwwTzmDYbdBNvC",
  "key39": "5bw2yNek2jAV9UByqVpbr5qeJjr5V8quebgrAuAi1AXjhhiGipSdMwiq8N69LnyyunT29PbvN98QW4gD5qUjhXbN",
  "key40": "2ANF333T43CZZqfCQqq1s3Sboj5W6P7rf9ZG3e2sm7ENCwFRR2RhgY4TQKF9ThgUkeUncmGb11BQ1ss4n6jS4kY3",
  "key41": "5PwpXJivLPdoDpGnUHvEbxJFv7wMhZPkrVDPVXCkisSNtpGNS3Q5zig138seY8w471z4JpxGqZLHSrtHZgXqBYRh",
  "key42": "5H7o5EfccF1Qb5Ah9UWuua1L9774ZY7rzmnK6YHdtNNnXztGptDTLhzgSwYCLJ11afDLe8ntPbYscJSedd4yq6SH",
  "key43": "4FFW7TtDKyUERC2BD7FpV59xunyKp8TwgutUzFaYWAndP21kxqSLj9LG1xF4cBW4caGZKWD3UbPHkhEMFbhXNxW",
  "key44": "3hAN3ZzddaX2YJGzpd3jA3evsyHVRXam6e33oPmvfne2Vtm6CCWoTSs616Uo5WQmHf989Sg3pm5gpvh2nd7X2PDA",
  "key45": "33MVyUfC1vU8FbYzNWDqrN84jQnxXzxxwCDioqRL7Nft6Nw5a413hb6TSAdoi6TeT8EBrjWozE1eYNFFcwwN87Rh"
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
