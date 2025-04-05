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
    "MiB8AVpW8dtCir5cD6UjFuhknbH6LfB5tn6FibRNB15BaMdRDnrKLgDWwS6cAnmGugtK1taUiV3DQfQgFB5KaMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i2nofRziV8A1teokrG2VhyXhFAGRAbn8xWd4WNLcpDE3tTf8BmYnjz15Bu97LCgdwZijYj8a7F6YJUx1Dwhv8hc",
  "key1": "5eBKbU8rZgxoEvEVp92nPJDqp3P8hqYgeY5ueJEhaivKkRGPhq3Y6A6GPYxC6FRd5snHZHREdK6gWyh56dux4B9d",
  "key2": "5X31KVGiUuoVTyoTkTJQPkPVSYofwvoiwrzoHoNi8R2dD7WJoDkq8ru9WB5x2VaLMdFhEKDSvdLE2dRtYXiTR1c2",
  "key3": "4T7VQChpGzvu6MCb9UFpJyRgq5GnQvwx4cs9TJyoMZ3ERfLksj7BbCq49TdRLuhY5Ly5rzL4LDYJxeyzABZih2Fk",
  "key4": "WYkCP6gF4CfpAQkkpUn9KvHbPhzFTHCcUw1wbZzTqEHDTX5uLNet1Xovs18W8aA4FjM9C91jAEMByVhW7ioYxo3",
  "key5": "5ph7V4bgoJWfVbGQZzJnn1EQCZVCpXYgTj2spmYwkYuMdB7KhkcqCBbjoTQRZP5KNvFiKTS1hpZswX5Bb4wd8Hmy",
  "key6": "w1PcwiCXtkjEe4UYFiqeJC2PE9RjzwPPPvyvLDvJFwdWCEorPb9sbGX1VibDAxBuRJjrrdKowPVhYPHNfNdifZq",
  "key7": "4vsrtrnS2Jd69HBBTeUHKShRcZRAb8GYXwaa1oWWnFzpZubXuE98CoyjjY1R67hh8XAELMerMskEUXPhWjT6Caoe",
  "key8": "5sXJjXzTmJmqnTKxpSb4XrFxkNcBtaaZZ7JNekffS7TX72xBUwjnBwLYCWcNsqrx6YWR3aYsrXEwJSQ4dzuMYTkq",
  "key9": "KaVeGPvCPCqDLijCJWmrZsnmUvRBZrbKzE3hieBTwydyebQboRAfaYbTzyn93bXR81GpgBdEXjAXXyGjFH1vEd9",
  "key10": "5xbTsbREfZyHuoX1BE84n2fGMVASYQDnCNQpN2SWFzhGHqFVRrowBuCC6NzCkqnMH8mcPR2cDaEN5zT1YeyyNob1",
  "key11": "Gd138ou414uzVH9EnJhSGfSF3WPAF5re7JggmdvotKb8eU6dvneA3XVi13jwPBtdGs6uuzNhPBs98dZ898aD3hK",
  "key12": "5xki3DjDMNmYEogSZG53JKvmUAtZakgBPKpyRfRAYc6dGa1aLkWKNfxEC33iiJKHU65SvdriGrq2sSN2zfE4kcZ1",
  "key13": "3KSTxwHXpbJcTr23fWvtjBtX6rM9R77miojvbNbD1iz7n4yrKQHss4HLqERqRR3x3fqPHLKpk5QwYuUPkzDqdq7U",
  "key14": "2BDGj7vEHqYqSGvRwfsDBLGM9KQL7eeSDa2sjwPXUqTZwiA28TvYfkMvV8ZU2f3RxEc1MxrjtcrSk7f7PTZuvBFz",
  "key15": "5XNNqEFuQRJDnDo9HLiX53h4Ff4iUu32CDq2KGjttfSvZRcJpwZ6yN1Zd4o7RtVP3PjD2Jos9n5VjiPrMAkCqx7q",
  "key16": "52p4CMjcsQw2k6gdgDNB2KiLBzMkBzmc1G3WkKDAyvbgi5gT3Bx9rA2DfScrWedJb7Z49ksN5fiq2cmYNMfgB4Ad",
  "key17": "2sE4Yw9WZK42sLUQ5jVbemrdN61UW1fDJtpCKqFMhiM2dCmXhemDZ6dCHY8brHefyLgd4Mu7Gz7atMDZoBhW1kbK",
  "key18": "3mYEgdVcBdC2sz1ZbsGGyuQm3fBkBaSffxGv8iSbUrtez67LkY1v6r1X2Eg341qycg8EBenFwBJu2gxNMHyVSrm1",
  "key19": "3KocMsgRwHSogSSYxGHaZyWwL14RKoLPGjskyXfbbfedHEZ6KH75ThPau5gMpSo4cWyxQzXSkAgTEi9sExpB9Wj3",
  "key20": "2jxSaFCR95n1JXyMsej9qfHA1yPwim2d8NobpoHjvvBUAGbWSVH4SAEmQPAN6zjx15FJvabJ5Nyq2i3gxCX1ahGg",
  "key21": "3AVpx6rUoBNnSSXAdpuWKNpSkhzDCTSTbmyTjsEJhXRGXaGB8FEwFrbL6UYdDLqNdcAGauadLhvWKEtw8KKBQoZT",
  "key22": "5QcRKdzoiqjJfmAQUhF47S1hMX3atVRHgqQqu1ELKqGxpLTeYcqmKKdL66hmqEFocWF78bjFV2wyZ8zUuFAt7Tqe",
  "key23": "J4NMzAJNZsQMsgyZjLpoYouEj3UPVu3EvxgaDbRFzihaBGjCh1DJ1yeArhiHdSxL7xeCS7YkpXYSH3tsYYA8RxG",
  "key24": "2CUUEa2PZfbkCkZfg2wipJr4r6P3AcrW5ySgfwQmVnh2MdbHKXb92zNmaamPxSZdrUNH1ajLHj6XBTEoAv5B5W6h",
  "key25": "4Ujc4wbo1aLVjWknEQMxvUtKFtgbX7T5uUxpneLtn5hzDmfpztdXaTgFjZZDXBMKdDCShcvGSi8Ah8nZxR7FqpsP",
  "key26": "5GBGnUTb9kLpHmJW6arvfrUQDJQVfqfvTjkq1RtNFP1rwvAk8NSzjjr5dmpAqTJLBXvBFZRZ6see4AYHPNGCMEzd",
  "key27": "RorMQygvco7NJwpLP5vuQPmFiQtTGNTfAzfer4xZudoobY3nagQG4EeRkEgEJHoE7EyhRpA5nR2hApmzqA9Ghpp",
  "key28": "4RCSKvUPtySmnj3vLD2i2Z1HBPN7XYB61bekGAjAmjapLq7cgUjt1JjbsKpXTEEScY6YsMF5hfNUVzxU1wFmFZiM",
  "key29": "3tAFPHjLMq67jWtuBUuqqSn3YC5YWAzhqihbGBCRSZMx1nBg869dRsArGmKJUkMT5AhojLB1YJW3yjYkcpfza8Em",
  "key30": "2sJuvd2pkdiAbGN5KZZTXtixv9MZvSnkseNEKGAKhDHQr2t5NQH11JFpfRgtaumbRmQ693uXQrNqobUznbnTo9s6",
  "key31": "3zZCubwRumxGfmYRyp3xcvG6pPGJKGorpse7fo79reYMm8R5uTpWuCWJtGa6Yc5e2MtZbiAactQCh1yjhfUZL2Mr",
  "key32": "dftxBnbr3x1rzBK4oYCmfzAkavw9x27hqJNDJUXgZv74eKjAMcapQCMon2s2rxBLg8SS3cExrGFgtX7Tmzqf8JN",
  "key33": "3CtoyZ5UKzKZF8WQaHJxhsdPaM8QSD4LLvt77Uz2uxL4Y6swKAAjbjEmueY7ZxuTg1cXA9kDLKNubUuFsaTpDsmx",
  "key34": "4WYmjYaRW62ikiF9A7JCZiKbP76qynwcTaT7qPchskGdbHBg4j3KQwCYzesdcKeVY8MjjSWrgF5V7dzfAnwysqZ7",
  "key35": "4cWe5EPyu2wa5BNj8S1PgszqXW9YiBtuPvQAA6eRC4Qvrqx7pE3Pegpy66eaRQhFr9pumMAToqTGhCTvfGuhMfGg",
  "key36": "4pBaN6JPT7jX1N56PDpbi7i9eZnDtENY8XB1qX4MW8nqWqAsuZYgjCiwQqnBgMQzdZyaTxrejzTh8z6b3daFZDxQ",
  "key37": "57ays95mf3dQnj2Cco6CGPGeC1c4UQS7if37NgFTWzbzxPEGtJAvVc62hUfRnyveTcxWpdZ6zcroGMHv7kjCkWLR",
  "key38": "5MiCqZoKuhXZUveEn8RGQgJRHfUB1yXzAtqYiZBtEnyHBPEfW14RxJS248ivhmH5SFFnWyPUHyrRm9KMjd5mvoow",
  "key39": "2ukQYs4upbcQDdgpbNxxjmM6tnAdsGaMQqwZ8VmctzE79ReP4Ge3km4fZG7PzZNDGhLKvZ8KpbvdZV498z9m7j1q",
  "key40": "2pscKVQA1cYYjMudHDukSY6kL8XuzryetFXenjstSwodvjUNW7rpkFhwgEvsFyvfSwsg45Q57staXUfv1fpDv3V4",
  "key41": "2uBHg3X4K43ctdYpzwzYenz2pg5e3ZRoTAa3zQhL63h18bve4b3uCrWYq62QJe92kCJ7NYvchfd3k7r6eEe8nKs",
  "key42": "5TBEs5Q5KkGim8jMTNfeerYPg5ypndVzKswneF5CmyEhFdzBhdusKfNwdJvk69LzJmV2wx24cbTZbzvscTK7C4Zo",
  "key43": "2NrhSZKGXwXi7oirbmRshQvqUW5AgFgSYnLougyoMJudbR9KDNUn25YPRNScdsQkzCxGdJvEwLvb2kKHJn56VqP6",
  "key44": "51BkGVy4xVrVAxrcNWHULAzZP57ZJFf1XW73YLxe9Uusv8afpuEQVGAnBQsxjNtt5NkH6PEX2TffUH9nn7hauRB9",
  "key45": "3hhGZEa2WTLBeg4DarBSd84NfNoDXH7dsrLz26kSWpHcy6RBUV1XX3cSbqiJZoqp48XYMsDrJHRjr5vLKTn1i997",
  "key46": "2NZwFjnp4QY6Ecir8VrZEaYhTYHeBAhbH7MPe8JcF4MtBaSpfArdCHSnhXZB3H5YxuRsRBvRPa5mbeeURyRhy5nV"
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
