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
    "4yHceSm531eg39JHLCe6RhKxyxwtGhweWcuVNfwztYHjxRmvELJi3et8cjKuPZfok4PKZ6LKfzuyPPZ4HMJjqSc1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AzReK2FLwGA37c3nVoger6oeiMVTh4mCCz2zj6BqHWaQuPcD2fEXxLwEtYewrRJaQgFgjmj494GmFsydfXRrHq6",
  "key1": "23PSYb2BrvxAiEczMWsa4png8KFzUogBKA7ewuW6zMJXL176dg26MXQwVRRMSTsSnsYxHLAvJM4W2CGhg8QZZCSB",
  "key2": "56iTi8moxHinR6bFkEfcHeNpEeiaFqV6Jqv1mWDZ7py3qPbSkPZC3A4KqipirPWq5XxKHcPm7JFEWXfqt1DfvoME",
  "key3": "4ghavHAz9oxBFYr9MHHFJgRHYsGaX4DiZG37NZeZ6iua2kvjmzw2rV938zTB2inRxnok5koWVJdVbU67Po82AUoH",
  "key4": "4TD8ZGyJxran9zzxgvUQARzPnRzGBpYSZQKFTAtTR53r7oRdWodA4JyPc9zGf5DgAShsrNL99T4vzYj7ym48LKEZ",
  "key5": "46TcAtsLHMB8fhnMebHhFUT5D4aKecyMkuZNVwiyDDwfEa2fMcjV135jLBvwQ3wXBjf1xdbfZCaFJB22XyrpZoyT",
  "key6": "2QJCQiJ78a7nCgu56SbYqHmMSwc6U7dd9v7LBukrHsYqsfME1Fx7GacjnDnSzsTLrwoFihj1LGXEMastSKBbRLfp",
  "key7": "2BC23vzNKN83u78VWZhrWcQLdNag6WSgbT5BvubpTpP963X4SD31XcdZPCZGtgPg2EjHfhJYbinXwoxnTd9NUh7E",
  "key8": "AJFEbNbjkNTb4k2KLJWLHhCtaJFvCdE2GJ3vf6VHxw1HBup3qtVXizPcXLJtCESwCAxTGcWh1LzAAjhabvdwk25",
  "key9": "4Zz5dGfGAtiuVpoesA3SURZxLnA719PjYWUxpXkd3UA4CRbq2pjsENZg8WD5ZFpqJP355iFPq2BXzSCrzNR2dWr9",
  "key10": "4DWpRHE7vwfqYrhq4jDc2g3LreCEpvrWjCWUBBeUhUecNJaANmsfoQTjYUtk7Qxx8Fov9836q1BzVnvco1WzYb8W",
  "key11": "62wgMaMKDPVdGsyBq6CZjcVpYNURaQYRVSBEv1rk3NYocYHMo41dPVTh4ZS3Kv5oNudpf53uqAmnMpPhwhPGQWUf",
  "key12": "4dwqHwhQtGC4K8Q2YvimfjU3erU4yMbkzmeN8ckSF7PeKgKEXYoiRe8QFa6vH3cwQrpST53pK9RcsFGBcSuB9uQM",
  "key13": "3rrt3xyV3nTVEdezwwwsZZC88bCn1DLtbHvMSaDnimx6ywhKJqkm97oxtHabA95cYb6E17CC4p6CZbmWh9VovH3m",
  "key14": "4sf7enMHyC6cfBTKvAL9kBaiz5aG2pCVruWUKdkzKa6HZvEUukDrrJ4Y84jzPrYo2ca4mwYKEpUkG15VhWvq55Kv",
  "key15": "iNXXmXf6VKS2LBgiFuPfh9poxJGitwAx6KnnNKgsJ1ibo2ZjKudbC3GPoCg44WCd3QrnBXEzm5yNMeQS2Br5WAS",
  "key16": "24wH9WkS7eA8JKanLpjdup57bnuUY4MWTrq6ydh8Hq47Ak9YCmV47ywcUh2S82CrtvivLwS7Hs4wtH52wHHFRfum",
  "key17": "5hgu1FUK8MemSwkiBvXrLbhXTTdPKJpzHeiVKf71KBYFiotywPh1XX8GXY6LPvhwPEeYFcG9mkRGDWFxzDDoHrQd",
  "key18": "5UTxjUAhjf2PeW2FWTKx3z9a4hMkSPbW8TcCMfHCABD1NzAvfCfPaSwvzejckwCwRJsXhQDnZk5qTd9djNVSHzQC",
  "key19": "2d8B3UQZHo852WVyri2yxjWAh1ztHsnARZjkrazC48f5oK6P578GVhHgoJkKFWG85pie6fcpYQ19hpN9zejDSHw5",
  "key20": "24wCvKnna3HiZr8xrtRunsEdTGDoxq4C2tUYPRv6CwXStPxNoNAC1bzkMmBaU7xyM5YtAPNSKmXosAiAeTf8imb9",
  "key21": "34Lgat7uv68dyHavGGv8Eps87AZqwnS7BiMkNNrGNr2FAeQ9tw1BHGTN8UBh65Cq5F4158zAtThQzoBqTRkxZwv9",
  "key22": "3pHn9tMf8YVSeDZmFAxAyWtXeeMWyRfLamAPp5gBHUBYTAeSVK8Vux71DF3qmpQLvebtTreKpkkuddifLL2rNBAD",
  "key23": "3F2B8kAmW23qmJjyv9DDRfnnH7Ha9AZaKBeSaLTjTMmad6NoeRiy89gRQEp75c5vHnZWL8AN9N1r9ggRNkUZY2qK",
  "key24": "4kGPL1G6Mmgd4GAhawARZsaDL9VUZBcZywtvdqbr2UpfMYwS1pVBRKmkohVSsQjv7cRvTDt1VK6ndRum17jYLoqi",
  "key25": "Ttw8bX19JHxNfQD5ukARq9XjTQKaXPJX6ERmcv2o4SEkrJYurtENcFBTUziT2Rr8kjDBm5DNrSmCwssXnRjwzSH",
  "key26": "2W3uGo6G2Vi4Fuce3YsTXKVw2QaU2Y9Yxf46YsxtZDNnvWDnWQaJwVSdbndcLghefSiKTpaPjAghTmUdMeKjMfqq",
  "key27": "51Fb3R7Ae9RDLRXtJZHHuwvBHjKyufSV1pBmRinCUZLtpyTFESFSYSquDzuhJgXy1bWr2CuvHrYrktM4kr5xhJts",
  "key28": "5RTpAUV17wPQLPYi9htK8P9eo5wRkPgQQmTdP5CQDYEbx9vv77vvMpEnDVtFJBjFdHcUb41cwHV6xMis2pWXre4d",
  "key29": "34yEoFxQD6DfGkTfjdE8BFHHXktzogHXehiLtH1jri7m61V5zSyWRmGAo9UqYmksPgwqKkrG2z6p9sdnvRz7h3uo",
  "key30": "38vNmXjepCeGHiZ1MYcRGhKUkee7s5T7KbCEpPbr1KajiHx1NAnQnvUXB5QV4axc2JyJVp4MpXkjjdriscqYtqT6",
  "key31": "3w29thHD6mFJc1tscS4oZp9VRzSGBLGBW1F2Fz26531pyXaWxajMAEb2yMEr9evwepw9Ukbj3jdkvFUYrLD6LshA",
  "key32": "7C5cBdvdC9vmYdQ96J46jmwUL7kFgDpxTVmV6oKcGH9XvDtDxd1phYaGZJghrYssvg1gzSMbopSFzCuTDDMFPTQ",
  "key33": "4baDLepz7YWNU9wAts37Gpsqdz9ycAJ4nYecoA7eiMULujDPdy4qLGv5HbRjTLMMSsjk7LQoEwhfEGuFUwf6ewpA",
  "key34": "2y6RPdLRGAEiGJFBCXn9SqP6j2dSYy3g4gRqU1fjEnDJKBzD71hErXCMU1thuGTarsvZQuXe5PcEhJw3MmarKTXq",
  "key35": "9CiJ92vNRLePEeehVmfiznzFKEMUFjL8yC4CXQNYJN7bPLUCdv7veaPYSArKhxUFcwGempXzZjHWBh8ApyQY4Xf",
  "key36": "5QFMxCzUAhtCN98K74bzYGTQTp3yy27D7tYPTPiuVUkV8dvUocseKhggJkNHDnV6MZdm8SYJaGp1QDe7AydoBWCP",
  "key37": "48XZWuiUJW1ffP4b4MGtNXMpN4iMFSmHEnLyDmnQyoMfXj6pCyD1Y2DDsfCptHepJB4w4YdjHQYRxempzZGrbpTP",
  "key38": "4gW4wkoJUVxo1d7m9NcbiH35jp8EyqwLK6SmviuQWRiJAMdxfKWrUYGd7K2W1HKqCZ686y2WQUsHHMyeMzbYNaPQ",
  "key39": "5KeE9VwKmhPcL648NUy2HLm3s4AMADScgXWgWGoqztYr4inbAAzVhFm5PDnovFJwX19vaTgdgDtuCkESAVjkx3iQ",
  "key40": "3nJEzzfdEBZzwJrMxhg5ALR5UJj5KeveAcEooBrrNHqSVS7wtLTPJtWzAe9UH7rQTGgHzP9H2UBdSD47GC3CaiwL",
  "key41": "oNFEHezST1qZmGEmVMrdpgCRZZjVsj21ja2nsF7TrtkhyP9N4nRVeBZUNxbLYG5UH85EbRwaawQXvdhTEPVcVxt",
  "key42": "tMpXt8iCyqmPKQTUwE7UbKhpTxJHvcFf6CUgsqMMzmTAtQqe5eCSMSN2RfPucw7q1FULp6SY8Qt3qacxQe1zuTt",
  "key43": "5oNxBu3etrbEzAhwYKLHyFpfoahpMhhLeDnMqJTDSgKoGRpx4Ysjz5TKf5wouSVhpgiRXsCT81LPqGmssCY47pNS",
  "key44": "ynLVB3vmH6VPnEd7TZfYLXh12VGYuK5XJvgZ5xyrqMTDWi5e6Q6G39h7y2mLpt72PyFZCrFELtiRtitSSTn7vpw"
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
