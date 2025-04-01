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
    "3Kfr8mqKaQzXYMWDaYAhdc1uy6SVwcQQaaGi29w4dBoRogshND9ZJQUSQjsa4xhQtarm98XAFXHdFzJPRCtVNb3E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33Rift9aRZrjpsdJZ8nA3jPH7ZQ8XrEnd7i9LYwoAciajTaRaxQTfxXsJPhmfxQ6CEy1eBvcJnuzkxYRGpyVd4yt",
  "key1": "56yzQY2Ss9wqv27bz9RDvKiKVWiTF6uVSxBMXcT6M8JPSfjbjDBXWuzTU6NcHiC5qBFKhvkFhEpVhe2w8desBj6b",
  "key2": "3s9Y2P5YXZZL577m6njjmubGZBLQpe9iAqgNQ9dJAv9gMwNwuXfttNQYcLi6MXNtxP5DCJLqqvMg3AomXxQicCxU",
  "key3": "4NokorfP2aYMtbvzETK7KFd7ucHGfwsoBiGkPQYtRXQ4X1zWLVsUA29s86u8LffN83ZGSV6feSFbEQ4czU6xb8V9",
  "key4": "LWHmLg63uKxJrRWJCDR8dpYSDQCTaaLX9YPXM9eNnXJM8Q6A21cVKWLi9fj4eDfwptd6Y6Tz6A5BLyLBJ2KHjQG",
  "key5": "4GTNUMxqKz5ttMeyNDd2bLgwv2gudKGu2ZG8m5WQXuDyFB5DvhUktK37NgDsRbp739o3w1ZpvYrXRwCRCG9NerZr",
  "key6": "2swMaFuNgxRspBMmWWeHo9gYNgdzV1urqNA47iCFash3MNqa2PjSpgBZs94ph1zE3TXEgGEmNs9W39aZcfJGBcMh",
  "key7": "RjpgRi6Q2gUhPnqDqz8YZXYN4PMoHVRKhh2x9R5QSQN7BTxjTbJyvmBw8ggwD3mm8sccLmEGzfWK71iSVFSUmhU",
  "key8": "4onAaYQBtazx26TWfiMyLopqxoYvoEK2JYKLAb7Bum9wKKmdmH87qYg46tRNNbYTsSPKi4RBTjeceVVmEd8b9J4L",
  "key9": "5eTnw8CN7ZeviTJLKfoe4EvndNEhynYBK1Uo6aF7XNduGFwcaPt16YAisb3SQdSMGCqSafQVYhHzTN1xASbxuMiq",
  "key10": "4xjf25XQCQm2TAMEbpAbBquH9csqKeDSsRe522wcDXFDcqqDJQqkkZ5JAyeR9NQXR5cYxfDDG7DV67ELH25qKs2o",
  "key11": "4K1PR46oy7c8H1wVor2pjvugX4MvaZr162iXDRqUSdq3yYpFQsxrjv7AGWvbAZPEyTKpUZsrccxwFXD2SUMHFW2W",
  "key12": "5PU3HasMtPFpqdZmCCGyxGENwLybCWf2dZhVnfaUU18RUnRpr1XU58TkEbAdxcXo1qMn64Xo7d9DDKuT9P8bQPVt",
  "key13": "5TwEgoBSeKxeKZz8qsstUnm3tSsjZRYgzeqnhz3zURieHMyGz6PssbdLW4wvqjTzxpLpHSQ1KdJfPCwKBCYACwCL",
  "key14": "59oSXNB6wKpvV5xAQRSauvbRoEyYVG4qWxTkd5CXjqhkj1XSPDsmd1VGMaoVARoJGwwYHdUprhYZvseUpTvjQKYA",
  "key15": "55nzKhNQQsUpiN3WQxsKmNTuKdcwjqgGfrpbXz4KqcuvLsDnu3KXNSCHxRbFaBbqQ8TUN9FC4chyeCxD7p6qH1cV",
  "key16": "4UgHAC5NLTEyHNPTEiiE5nbFUY7KWDB2MZm4q1uRsGk7Q9MMY4WWz4qGcQDqfaM4x2EU3koswcCv7K1GJhfyJ8E8",
  "key17": "5kYZ1Spftwn4CMoMoEhB9RBktbcKfoedSYYQYZRP3xWiKje5QxXyNtHQW2CENn46HWJQ4aQozFqwW1uDsUAtZozp",
  "key18": "3TkJuMmxajsqnn7DPiBoPxGezPzGRNKrj4mUozqCPNhBDtUXhd2GKFSoc5NJ5es8RxdwQ5UNWu3oFBfGRfzVV2HF",
  "key19": "3DdQbf1g1xkHEYNgpPL5wMaabwJrcy68bCAXHR4WKJDvvvXsTBQRd2hjTvWHFkaQBNU4qrhUzfzzTSmhsqCVaq3A",
  "key20": "2ScdDfKURMs7LrC4uNADAkPEgEJvgoWNtHaXHiQva1s2eKeL8HHwc67bPVff7TaPzaS3QG41SUJP3mrbMe4EEanc",
  "key21": "5dDJuM2BkCpuR58opDSJdQFbD6h3tk5EgsNLPKCq7ofDX7foEEJmYNwQtj2SiMR2ZW8KzgHRoAHJYuNkEexy1vW2",
  "key22": "Rtmtd8DeXHhs5F7L19gyqRnSkaagsst5tgjRzQmXgrtvVEGDXu9HCQT1LMDqt51gpFFKGFGTwTQCFBQRu1S32ZE",
  "key23": "3RWEmkni77Ztx7WmgcXUz4HGhwHD7UovzVcbzK8aPAaVit1psCvQEaCEUEvEKjZ9hqndwRg7Wv3SiF6ei1wXgusA",
  "key24": "2jbsJRwUTGerkBmELKS9na1bzuo2e4MxkbnoWdvcufxcE3amugMx7Mc8JxccBT85GfKKpf4B3ZF1cJDt1JDh7PYt",
  "key25": "58frpC5wpm5UcD7ufp7tXeByHFBRSbCZahj9K3sBhXxw1m1peyaJc7Q283XFyWVCggECkb1gQfDsUEzuzxmWYS85",
  "key26": "axW28kV6o1z3EABYeYZxz65ReZHb58N8bAmQpw4YtQkLpSU6H51UAdECpV415tJerLeSnFrN9DgsoCGr5ccH5qV",
  "key27": "2Y1degiMQBDcHWykgtzHQx25APjAHrjN62dN1q5aU8VpfxiZctd16oaDpSU8AbipfYTcKEJirnwtAnR1wX2T6XV8",
  "key28": "349jsTh8f5Vn16F5Kj5qUcbNVqH8Aq6ugEV9QjN7sdwid5sLetryEJwWrpYKeRAffwQnubBvzQpGrUwhrwGmCC4S",
  "key29": "2uV1CUrtEAKf9t2LuT5qvgAXpZGiJuw2HWnLfB5Ufy2AyomufuGTsRGNWmGCzw9u8VZcTjUneFDhymsTACputgkM",
  "key30": "54tREeXarXP2SG68uf6Km7X8V1e7gvKVQPGWycitz6nu8yTSHQ6fb7R7cMycG7zVe2UzXVTSAJTgbwoAq4jHVfu4",
  "key31": "4zV15uwZARTYi6cVCcxen8mwKQW1fGkss9nWh8i9XXojs3Y4S5GVYfUmBMNLHPf45o36bf3eoidBo79ThFghUjNa",
  "key32": "2WJ5sRPBnHR1PoFobA2aEHEYVV5WasrWeWALZqyNHEgoE3bajgQ3wG4qKyvch3Jj1gHABSFhPDT7CSSKMpaSsMNk",
  "key33": "PmzqcTMDR2rwS6FiTeR8agX4pLySVRRnWoFxdhztJhMKTFnSDHFAFaHnZwbFzQnLKVMGZUcWPTpeUCtP2Sm9vCL",
  "key34": "5PbZTyk15AedRGsGkWYmy8qeCH8bYRJ2QgU2Tq77RHa42MpiciX3FgP5rTTbyPFB9zZhbAktCzN1zf9DC6UPdEMB",
  "key35": "uWfKZZ8CoFTT3QHjvJ1carhDA65WCAjdsB3VdwtzjjahKx5Di2ub53iJbK3S9sHErCxiWFxoa3YCf68AwfjVp8D",
  "key36": "447wYZXQ2GftUcTop9JLuwG7u7W76zbXXDN5sFqMvqPUogoQwJ53VevxpFuBtj9iemwCBc6hgRYnr1rWpfMquaLz",
  "key37": "2qHqX1hFZuuLjH6LH9HxKQJBagk1MJiwQwThHxkirizjmWEh9PuvDa7b4gj29NL1fFgbvdeKGGTFfNH2rKDizqCW",
  "key38": "2Sri7QKeQ3w7Vpz7vCj5S5pUWfa1Xg6NZnYRAHuB6J345uLPPgKUvmcPdCoTaJYrzHeWbJKtj9Gg4SfroU226Ytr",
  "key39": "3nUhcY9D8yMSRQaU4e2mTiB5ZXjg8dMJ8r6mHzStaApnJT5Rxt5ZCX6y4WmzJhNtitFzqo9FUAaQCmvyuNUhcyC5",
  "key40": "5EBmS88NfnjVMynZMxX6r5XgTe7WA9Vs9gCRpfsTiARerCa4ae2B4s8ZgnoN3HD7S9H3Mo82BjMWuAENei1FBNKw",
  "key41": "km9MFpYy3VhBBhUeFgGexNXL6B8mcHMSCX9N93zNecGb1purNSoqjtbBpoqUxt6HjnFezjjwcfucafvaoF8e8kb",
  "key42": "5TQbwmjYFF7RHvu4pksuztMa7GysBHsPCb1C7LprbxW2vibJiPrCjyT4ev7N6SZc737iGmhTkQazESBdb2EpvY7W",
  "key43": "5njRokdFr6sW5dbJHWWhVwBQksDHbJTcHowVhfomdeYfKFApz3GvNuszwmgfto2SqvWzDcMnPGrrDYB4Nj4uNaZd"
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
