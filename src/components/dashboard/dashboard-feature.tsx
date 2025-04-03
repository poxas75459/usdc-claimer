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
    "2Wxx5zUEkutjBU8wG8nDP11QoYi2sxxDBEiQvrjzhUbk4GdRiNs9UPYCNRX8uF2QhXYpVG4P6ujtsyYXRAJ7ne55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qy4zzXkSmPky1KUH26Z4t3DUK6EDjJtLeeBux9KCY1MxpprYzqrB5Q58KGX1EKowCQ6wf5XWqMtNkD1Hn3bUv6N",
  "key1": "e7SaWMu3BTZihCHMuqHbMmePoRGy3dwzBKCmhzGxkiadVri95Qt985LLEydSP7S6Sqxs9fBgBjGKoXknFteZ8dh",
  "key2": "3EfJ3Y8vjWd8mptaPwBxdarmDDgBJixYxWA6d23bqZqjUPfcDd8Ph1eVQ3bTQ1QcoFRNKZGKdaJrVgt2MVk8pYG4",
  "key3": "5KEDuz9ht7ACCq26CbsQe423j87pyQPkzaQJ22uxPuUb1jydM2eFTN5nDearhsVpDDg51cyFqeZo4NhefY4sgwdF",
  "key4": "4r7pSQ3wACczD8275eVBAwCq6aGJpxy5YXqPjmdmXuAhsEByTVUBneS8mG12m3aToFDsrSJ3Npt1qUEQe4wM2aXJ",
  "key5": "2C9kcXCUqr3zpeQ6e9DgEfPGPUko7DTvM9vhUP3Q99zNPPc7cd8QuazNAZ1XAn1HtyeceVYUCwiigp3htqigJBpz",
  "key6": "5CCoHr3MCY9SJqz7XqMe5ELbv2XX8hKi7dwEp6dhuGK9tr1bV31bGbhJZv8AYYoDz8d5C1EhHx4rwyKxWR3s2uVc",
  "key7": "1LAkvt8XDQJcoiYFcQnUxtfGGE4DcDY8N9crNZxFV5opDsNhxzsgL5LzpscoH41kU9YrDKMUN3vSjN7kDxsBtHW",
  "key8": "NU8nLWZ74iraujadxnSdZkbSZ7fK1qZKXgSFCNLj2JhF8tizByVfkooThRV48GFyi2ph3Phdi1Wh4Zq79CmQce2",
  "key9": "3YZ3ssvyeyhEdDtzERsfj1MKWrsNhwyXojxScVDLpHu3uriQrSeoYeXK9Jqd1CLiiNHzWqEo8ZhqgYgdy87U1tKB",
  "key10": "5L8jYWTdR4T8KEoQCfD19mnN7zPuzamZxVc4evn6EqRpJLbVWbvg7eyGqUh7K6XFrJqYUemtYnG2CQLF3tKLsCBa",
  "key11": "51HaHepZGxs9Z8EbNEeXTQR2PFYG2uhEHcRakoxsi45di1Xxcx7UdoWAAfM1H8jemcwbKnCFC42LeZwxkL9oyUEU",
  "key12": "2zEgH7koPoWrcYUnw9XMJdu7G6yvF5R43i3YinhGxEDNQH4vhtBkCTyGk95kgKBwh9xkcZA382rp6wApyY8aV7LT",
  "key13": "2VCjJz8jdHpQJatv91s14Lna7TwoWyCB7ZCtXMWJUfSFQn3t7GsaTexL3ZsMyiG1TNMdGcsf4UvCWtuXUVWmzX5w",
  "key14": "Tde4VnxT28hFJdL6hLQLTWA1N95juH6vhyFwcfPHYB2eDCncz8djqyyJ84C2dXuy9cPriNz4wcnjs6dJ1f5ZpSU",
  "key15": "eeFyedcgFPwV5zSFh2uS6zZPAfSnZFmxnxTTcXhQJx2qmhYYBNik5qRgN4BMr7LpMehtfyD3ffnrZAhvML1VUn9",
  "key16": "41ZUoaiX7aE6XJp5KNc5opHGv5r4GZiR2tQpPm9abPWvSCk7dV6FBc36eVY4sWDMBpW3Tqe5JM2cnjBkgD76TQ14",
  "key17": "2rQRP9v5VCGVCk6ZqLW8SZuwhxHh21ZmETkmQegypEaXLXuhE8rBvULYxDry1UNXcV2cNDPHoufTEX7dsqGvTi8V",
  "key18": "3ry74Krt8g6FapGoLSYVHSZFSapTnUVr7i9Tf5zPcNmr3GNFAWK8C9WdUz3Yo2fozDVRdCqpPbsNDWe2ZiVBDFJu",
  "key19": "4FGhUWga8gcg83wrdWZLPnstnwaCg2wuevPDaWrwonx1irnEeyqeHjEw9GTrRET8LKac1tqTRxzPMHhNzDLyqkNy",
  "key20": "4VTvCvV4YKcL5za5Giw5MdYDgeRvTyzBQTTV1adQphArmAMgQWFtvkojosC8uhAKg8hqmGYViHyKha4UHyXUAHRA",
  "key21": "CSrY7UN5tfYoMc5CYK8c9x87Yfn4PcyzsaX6JJS6hJaezZfjEvyHZZFgeqf2Wvjcjw6m9GLzXkfsCX1kx3q1MQ5",
  "key22": "5Us3QEQiWwYdhJYCUG1imCNsDhvAg9tbLDtLaQZddrQ1rTwb4MkFWjXDofLZWBFojNUp9AfZpoCnaDUe7e43q9Y4",
  "key23": "6PnR4KmEKx5uaDo8856UnmXboEdta5Rdm5494qF495cR3rtXW8KthZ8r77mNEBZvzuw6JodfonoGbjRzyv3Xibt",
  "key24": "LQgDe6FPLPp8rjNfNRuVk8vKbz5x71JTqJXGtsveifyj6eMxGY78TAZnfgjqu2xAvxJaoetNKCYTYpRNwsXo63Y",
  "key25": "4yYR3CJgURvEHn4A5RtPvGxbBDo2FMShXD69XS6vnYj81WQhP1HaMJvAbCCW3bxSGnyxf2vHiTded4gAwbU7fN5c",
  "key26": "gX94RLjnvFyaSzMc815gHgYgmHVAwfpp4u65Nd6MeEw5K4znHKbU6CJRGhaKhWuZ8jbRW7EAujMtz1oyTVG1urC",
  "key27": "3aiWocF3Xr3QECkje5iK7TimPDg4FrRYCRriz5GzHhASp8dR6J7SJPAb5PJYvfi1HTfgHFU6wAY8UkQvrXS656fj",
  "key28": "4RdFzJTP1mCxC4DPR2ESE2tsgHoNtYv6o71E4nAmE3GCcXZ8ANjX5px98wHyGocBF2J8xGHMdoHPVXh4uJG46SWD",
  "key29": "4Q3KSKSXnh5FWuGfZxv1j8LvjDCnTgcFgGdEstFfdmpW3Kgrh1pFghPw8nDeaNQ4vCskbZZdDuiuFtp5HAKL3eUW"
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
