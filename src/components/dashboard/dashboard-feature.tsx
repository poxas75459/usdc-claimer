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
    "2PPqoZvLtBEgoeNf4dAuHxkTa5cB8A3Tcu7Ct4nRkDfuuVH9gGBjHkiXsZ1gtvUpy3FddwbrMhwTeNfUToYzWH9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WW3uJuctGmFbar4XFgFAsEd6muhmaMREebrw5Qgk5x9tyaYbmuPSYLd7HvADNKx9ESfu8jb14tPkJxEMMjf5YTR",
  "key1": "4RA6y2De1kiHQoN9NPyA3D6hbm4JsNSw9QCJutm4FduQrX54RUEddmfZuJJTuusz63QbdG48D7nd4nvboFDaoqdV",
  "key2": "5n4jukKbh2uyGCo2g2wsa2e45P3vDpWo89scxiDsrS6YuTA9cM9cQoBrL99p3cpWC6njpnvRXqyBf5N2XyToUaY9",
  "key3": "58SwH2VVdXtzTj6Q2wEU2TpnDRNQbNHsxRH51LuaF4hoeSrQAnjJJwfsDJDtbk25HmWmGAgQwBGhWCEDidvAWmhQ",
  "key4": "3TuUEYJWNKp8tNEpf2UWGPDyu7Uq5tzsvnwMzbeVctfE9bzwiBo9b8ZUTapqaaD58piH7QeTjVdYiHrm2xRp2mT3",
  "key5": "3iYjHJ47XTEjxGhEc5pvj47knGnby6T5s17CFLuRfEiaBb5HcQQ9NAZn6mnJY5N5u915yAnquecVjqFA2KxA2iuT",
  "key6": "3tXhfdTwwDw3vbfbKdV38qmAAGn2xGpCTUGxj6Fo8bDMX3HRjqgwtUBbCMVqQEu4o1JMSczfET1ufxsZLpMG1dPQ",
  "key7": "3h2ZRLbw38F4wdzaEfvxQpoo6TmhkhC1qm43G3mGWccWfDrSjXkW32ixLj7r2eWLbjV2UzEGqH78ov9wvANuPFqd",
  "key8": "4QFARDFDAw2JrfarmMNfr56fXviLWGGcZ1KB8KBoTVshW8tNU8gGTDuDG61UD7PNE1dDp54gghkDmY1nmuSddGpZ",
  "key9": "28YkDtz6zsGJW4e33j8KqhymyCPc61y83xQcbh8kteeTe37qxjevxqwK4yeG1mid7zAaryQ8WYh6K62QqS8PASyW",
  "key10": "4dD67naJpnuAp2ym662YXEv8XHHDfvbcz63jxzNEWqi66EY43G6HxGdMiVhGRMdH1oA1VV74VsQWPNAaozwMrsCq",
  "key11": "4trmLf56S684XyW7yxktnPysN2mYWLJHBXT3f5N9y6WpMM3Vs4413ch96LpmBWyyrGgL7dEUkM79ZQnFSGS4jk83",
  "key12": "5HFKAPdoa6mTxmcDekVWruRRxDDpHzkZvwD29gzRe5SjUTz2dci3oPgKqV7UEosoaK4BwW8SKtgGRTZGesb9FfpV",
  "key13": "jg7k4o2cnsYaB9q6gJLXorJ8jRF5U1x6otnQrUk4Ved4RWCN3t9h9XEfTjTUAaUPKxDou6XTRfuA8Thg3jzjng1",
  "key14": "4vZJwTNXpVTefvH8UJix78zBrowXXmaTmQJB6SinjKoNrgpumJEUjyVCa5gLx5GR7tspxHWQ1BF1ZKTu7F7tFDR2",
  "key15": "2M74jbCwGv7GcQJzorLrfrde8RWyY1GJbappixppEhDurxQPy2txmktKtWnYLF6ZTeUtmGekT6EyiSCL4caqfAAB",
  "key16": "3SXcGfgap4eqM3paUzbfT9FD9s5xbh6ohf7t1JRyem1XAM1J3K1vzi8kDP8XpSxTKVJxWKyDiB7zmnLUgF41BU9U",
  "key17": "5hNMQ5zmHkhthm5Hz7qFuqjnkaPQTtbZ3ZQB5VXwjnv83jhHraeNnCAxRHhZcU8GcZiFHgoiGjnctqiJ2BWy3q1g",
  "key18": "45CE2cW8SHJYnY1AUnPF6psrxjmrPZYmyNbsJJnJXwyR25LoJVzRYGznpQztzDCyvBfT66MgTXaccccjx3Bb5fpA",
  "key19": "5G5P6cGgWyUoLxggUqqKWbEw6ZKQFJcm5rjgZK13AtxFdnR4SD1uadHeDeerDqtnB7mTvuCu7pbXrmHGMJcf3gs",
  "key20": "3D7MJ4Z1HkhmdAXnPQp3FEjT4DCGmzYmYHrXp1ThTufpASeQ6PxKWWz3bvtzg8zNdiJnXFoqHHbP4BbzgvvADmsh",
  "key21": "3UYnth2PY3dYJoCsZPLpEDvc5yNtAo37UX48gegKhtQMuA7MmEjXFGzkmz3kZwsAiLZmonFVTXZxYvwkiruJhjEK",
  "key22": "2W49cJwwihYDq74d9uvaK52S3QCUDvJpfySP6oNqAAVUojnEgt1Nm7A7jpmq3J5hhjWbHChpHaZET8XcEVgf23QJ",
  "key23": "2vpyAkLTWFHzRmAZxLUPUVgWTpeAn6QJcnfvk2WySSMXBakAKZGozA5bmmW8hH2kuBGzAHptBXrTQwwKHs1oP7fw",
  "key24": "5Kb9iF16SwoyFYgvRGz5AVnGgUsx2XBWzeG3qU6gBqCkTyJZDvJ3PLTdCjXzZfcUkz9w6QpnNBLMyQPQupgwaMnF",
  "key25": "2wBWcbDtqYN2bihstcJE7CWUMoTYM73xTezU8ffRV4EjgBwbBUSnWsudznAHCiMvxGDzjrZDgAHGRvg7V3EMrFmv",
  "key26": "5Ssp4bEu8TxkvEsBAojhagzjd6fjsKh3hdPiJyHKovxRat6xzhoGgmLssFF1uAojmrEret75z9namkmWJfwPWsWS",
  "key27": "ZMPmwZoDM4tsZYFVysqNfnPv63WB5aiQA7mwj2xe7eGf1S28PPJR3dU92WPF2z58RcuWpAMmvBHDjAJTGMwGhez",
  "key28": "2zPfEJMRXfCKZkMobVfnR7MCBJxJTdmXcnAaQWgMC1xsev7jkc1nFEb3bstd5Esb55fd6mooJweB4qQabNpmCy22",
  "key29": "49VGpdqjuRuRTebLC2cb2X1qyW2X3wZDY29vXhN5anvqe7ugkk9M5ADWUg1KoECbQEWNW5oqZmjGaivruwSmgYnN",
  "key30": "4eY8CuBuZjCrNeQaCiPsTpYP7YnfXmHyry7Fbsg6Yngy6NB3mYJvYhpPxKwGqQ6Lkj1E6WrmRCFBZ2Bz4X8BdUXY",
  "key31": "39q8fSag1uUnUnQsZ6MYG1gDn6DsusLwtpVYup3t6gxQs95DUcJZXhCj4Dw9E7ohkujKJ5UhfWc5SZgF1eNCPFZJ",
  "key32": "5Dp4iSBaqaAMm6ExYVJ1fVH3FuTEZQAFMH7vfDqtr8uWdo6vDWKJrh81un2ooivAPCusBCDRERfdw8oqcpXeRLzS",
  "key33": "5LZMXTkCA4opBu7aSxgPwNCnNGgmpN1j1obFc2F43UPpu3U9oTc9CTCzCz4rGB8oTxuXLRXeBuY2dGPGeMLSggoJ",
  "key34": "DCT769rhSSWpWJNAAwjSo9J2RSSd2Hjoyi3MKbgFmfJP5nY7p2nZgTXGPgQrFaPeyxwrEPBnAbL5w4UnZFdpH6b",
  "key35": "yGM5rvLA6KKEwmHx6kGqHLwnf6CVh3sUaJHzHDsEfuShfLtuiGE5QeANAvUgC2FwjmtMsAjWwaJfwYEDDr91gLo",
  "key36": "343HGzrqCuh9Tn3tP3huvvYCvmagDZcK3qGazvjBZCVZqKbHeRQFyaUgY8eZ98yKUwovS6ZgRQgsNBrji8m4uAXD",
  "key37": "3jCkkE8beGfxh5veaMUGBEbx6NPTVpv3WMNSTWfbSezR67QvEaEvoq5Hg6A2RyqRtz1ofPbto6ZyryYMD22BpBwh",
  "key38": "4xMHCGpZcBRPSKwu1PS928gvk2Zsqpyf5FK6ea8uMLntuoTFj32UKttnQavddyZzYPQF1PsXTLpohX8JU4i1kMct",
  "key39": "4Mft3i1qMG1iabYw6ob3dNLi2HaMi6kRTxW5XAkj1YLTWtDEVuK4CNXMxb1t24vFf6xMWdV89gE4cyL6ourSEYa7",
  "key40": "2bTbNDE2YSoDYvp4JvhGpHqA2iL1n5wqwNANZrgnriwdJbXp2ExgXjWWk56WDMjrJocStY2gY2CWxiPLRGqtqzk6",
  "key41": "3bxCTE2hN45Ek3q38kdi9ViDcP5M17ListhUQ3p9CkAZ1jMfiagWjGfP1Z8s7mKzWQKdBrgumDqfDVezTe8Hjbrr",
  "key42": "32UZQcQ55nQhJtcEYaoo1HRpwn1go7p1bJfyxUv6WafZ89QFP2v9pTF3GM6ysAEnY1QRhdPYotPEEWa7b9ULJFk1"
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
