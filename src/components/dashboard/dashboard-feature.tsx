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
    "3t9vW9ZixbTs4Q6PVfsFHbfyX6YMdvYBNGZgk4v8GZtLffUvubXqU9j6G73avZp8ncm6foRnRUx14RxSeM78Ss6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36Vdi871hEcVKUhf2Q5gs1at2mrjG5NuZgKms61JvK6fLTrghRhTQaRCgPF1RrDC87FkyqZGiL21WbPSXZQRcaGY",
  "key1": "3jgHLK8A544oEc5Wc8aHdfSpoc7NNBgCs9KzcpxovMQuF9DvnwJdyAv18C1JJwqhHWouNzakfVgS2oLHsjjxMHu7",
  "key2": "2GyLu2nRwgwmQQ9rTRcu9MbKPyvXgzxnugaep7oW52idmQHBpA7tauUtsV4EP8CYVumjCCyhtbwEeRQPzpBHCyeu",
  "key3": "2moqTtUR6KQWEapacHsd3d5bMGGxBXWfGhDNeQ3VS1jPvpNTYjaQ2pv7S2JECs7ppvvVG4c3Vxv6uyMa4gs7krQg",
  "key4": "3jBdWSdDg5wSDXUp9KUVNy4sASEi8eFd4vKUrDxNEbZ3nXZUQGojNnTuruAERadLku9AHqB337vKj5YxP6pkmxgh",
  "key5": "5zGYVG6MTJXoLEgftoKgr6aNyp5KEDyLPrQokv4VZ2m4GD5XzizHoRG17cUH5GuvaMCfiDKkAdSR8vZTRJdufyb4",
  "key6": "3Zxz5Huz9QN9Ac1vKu6Gf3Bhpgtj6ws56SAdHZ2iLrkHMQuBA3kPB9FjuDaRogabSFadwdsZiXFJESrnr9y4ivVW",
  "key7": "4ffdTnmn4gtBK9MXRZc3C9tSYd3YnHpdFzSsmZNZ3VK6b9YJj2ZUCAzYptaW2AHert45Kvg9GdbZHJLMscWmeUcw",
  "key8": "5j11CV2437eJWSp8RBvMLcezAsKyvZwouAhYQ6u8nasXxiLehR88oFsBNvezaXbkkxAgmvFexHncaat1x5snDqx6",
  "key9": "2FRE8FikJ5ePwmoaeqkqXViKAQsEWtJt1zq3waaKrQmiyCb5ztB5pyFC613nDNxZokcAtN8inGGfCgPiPfVW5a2R",
  "key10": "3EBen2Qr1RM14wFgjC8q6FY7VPoUUqt9drpuYaHyb7crswrBRLqwm12o65WV8tiKsdD3YCBztM3YHHdqWA1qedr3",
  "key11": "4ewJWBmsNy5vfzooNRB4gqFDsmPq5Jren2M2JYV41upra2fRNm8d8fGqk2A3iiEKU1omtBBVaFE2azyCsMFmYhqQ",
  "key12": "3Rfouv5ouHc72NeC3zPQve1i74LopKySowJzXSZww9ykfsQYaJNg1kLC2EuEJ2pGCXoEtQ5cybq9yZaUrfj9gtFP",
  "key13": "2LFoU5srt5WEAnX7kv9ZVsFTZntZxRrBZDie2NLUEbGQmhYjWWFgeJyfiykcduGT6YtRK3cMcwdMtFF9tY5TrarW",
  "key14": "2DBEHNo3nESSNRzKSxc9cvea7r7faHTYUVkQ6GSEZU9veZT8VvC1idgZ9Rpqi6x3NvP5CxohMYpHauVzjuKPTNJb",
  "key15": "38pSwjXi5oGjDUtc2rmK3WzHzGwg9gmgxV3ks83yrt7yScfhV4ivHrbPzHAvrdaJvSGcLPiBrhZJ6sCF9sJjn6ti",
  "key16": "64UFojfDcT2p834mcmZpepphGyKee9udcViZ7U8JGZkvFYFLE5gwoh6dCo7R41wnKBovkin3BgFTwmV23JyvfCmS",
  "key17": "5mFCiTU4EF1KCojEzeHThiaJ8xgaxevWDV2MsPo5P6EGD59nBkUwkMqNUdHBBXwjErJE4T5UNuDzZWP7mrVHEpNd",
  "key18": "4FF7NsFBVFnVQT9mb9iF5Y3FuGm4XRdKyyUitBfUde1pJ1ZSPUayJgtnyfimjrPCHfNfWMdNWNcwWxtbfpf9EJRj",
  "key19": "29yjP9Y9HFeRYYVdMfNxFYuy5UmSHHjJfDVYMy7ja88sCWDhMujE5V44XoZBGyYRduep3Jaz6YTBkiMRHN5qpfYs",
  "key20": "8yjeY8LA3GNaBpHxfnNXA3KrujtJQ3yYH3uUzujWAwautHMPaxA4te2BxLJWi3RksTRuoAhDcSyhAr3A2DRC9k3",
  "key21": "2TGPJtSCAVsRaveot1DYKhDXdiakra9JNBTt67ot4NrYfK1LamzNC5MZ12vq2Hr8papyNBtxYrkm994ePbSdTWB3",
  "key22": "4zdq4She5MnjHay9Vv7SMS2WqEaNZiJVa5NG45nfedL4M33DvVxf32Kt4Yk9mM5Z95oFwefcYjUgYAqn7scgzgma",
  "key23": "5jjh3KqV1mFGj4jvkmXMhJeR5Gy7RpNyhEaxov7AxFtJSE1G5HWHtupDsXr9MVdYwtHFeGw43W5CMuLzX9hCPnk8",
  "key24": "47c6bRdEdmVRT29SaM9Tsy2engpL1YJL5Q6u1pcvwkUDSoxRXDhaZcjLsWPDmK4ifrH32i5jcm8fiGMkazXC5ZzJ",
  "key25": "2Krw3329TwqprP4UU1rhL7jcwSPL8GzDh9c8ZYdnZoFq3N75Mhst6MhSqt14w3xUv6CJC4QU4h6vgrNAohcp8S7k",
  "key26": "4fWc923b8eA1t2mYgVo93BHiRmP8tEuD4JBeeKF1ai83jQQ4U8g78pTW9PUPVEdDGpYdzADZmzDDccX5ujWuUfdP",
  "key27": "eBW2wqtoowsHepJ6kMB9HRx6TE79kmtGTH2JvsuVeihoAfpkffEXkBbHWC45TMbtZjNt3YqT4BGXwgksAo2mcYo",
  "key28": "4eSWSU88yfMT46PmQfMNdcQUEHJQtFqqA6ogA5UJn5mNpUcyLngaQwTz9We72YvghpDWgQoJnNG8iffnKeJwgRik",
  "key29": "3WLMoGRB29PYSMx1pLtmk2ZNcZCPEJ5TQhzR4CgeiFDBgRkP1TSKaLMSFoL5LD6QDMDTie4xVZ2dBGVnwULqK4N",
  "key30": "3QERN8VKmzxf3HtfVWpaMpV8628XZqQfPLxzxvqDaxcXg2GRBeGNZ3rH8TRkgTXqYp7yNf4D9WEiuEBDKD9JTfA",
  "key31": "5aya997ZdmeHgYFwB1on3xc6RfD9YefFVeaqYTsAxnUepCt1fFWwnZbrDt8NYdmMKjo4KGBvPhJP1JNse9Bj3Aso",
  "key32": "5oF3DXH5BGH5H1vkR8ioAiYK2Gqtw6sEsfaRKoA5ABMsumBg5TzwrRHEaZQeDVyXKHVafCfs4Njaq9AjQtqfGtjw",
  "key33": "34mP3rhyawnoHoofzAgnH722nKXrysfpDNVkLcmmEMNvaY9Jt1WWHMKptC32sp1B7pVW7tWboag4XHsVZwEbPDRt",
  "key34": "2H6zdrDgCHVKFvG9yHuAiEUXDrg8SrMkALCXzo6Hvpv6AAmKPK7Uc5n5263bdUoUPHwjdP58XiBdn5e7hozDhjj6",
  "key35": "2ff1WFqat1EahA4oUxR1AEFhwzmqsh9NGTUde7KU6J2XgStUjUh98AkXyVtzLHnmtrBXj7Krwb6sGGJfdCqmRETD",
  "key36": "4Wxx5Lg3kKcmV73NCbG2h5x7qpAtYddazuy6mdAewraxkBKxqARqMTS2dKVeoddzdqVVE9iFeMa8Ap6H7LN7tRV5",
  "key37": "3iFiiE4Qe6ukg8THdNmQeRK8eHVLwp3N7k1wX3TMo4ZQ9QuzLzoHno8iUu3UejxmRGp5oxRqdgaYXUzStX7rJ3VK",
  "key38": "3EsTov86UKgkhpzwMkNH7ahqaXW2gtrThyxPbXopwAxqTFBHJixRodvq9oiGQaUEV1s7E34ScWnKgYiXfsnJzY4b",
  "key39": "2UtYH9QmcZNvvrhZypzMeu7xTp1DPe1YZqmfBSjx18PSjya694h7frUSYp4xasztdocRe5wv8J88SYU8EPeeMSxk",
  "key40": "3ksCNg2eqqFUtqfdNAD3ekNog1wnGHRS5jyi57ZHkSbEXSTXpPpFVM7XmSWj78mhJiXGmY4hb7D5QCGr8xqJ2mkw",
  "key41": "4ETuDsU8gu1TWYpSWzsPf7r4kS7aHS14e49dcJTCg6ftXPxUcHDLsTBYP5Q7WbwZhjLpt8jVzP2Cv1RFFNCRmCDU",
  "key42": "596FFcvp4ehrbWKAMXmdUr1Ks9cD4tfrPozbjikMkMfH5nkRSTgAoB5T2Gz8GjDW843dEicMdksujA9DzPsMnj3",
  "key43": "3L7JmTbtVSJzdxJ8G6CA1ykrJh4Vw8ExU2FtSEs1N4ZPSsfH2UCK9gkWdQ2N5isMfX3kBUyJAWRetDupvatRmfkZ",
  "key44": "49qcgiy7XeThfjCH2EmhvTNdLmYSpHeSqTwbv73oB5JPE3rcsZ44Hp5wNHBPqLrdHBbBeC4aZ2X78frah843pw4u"
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
