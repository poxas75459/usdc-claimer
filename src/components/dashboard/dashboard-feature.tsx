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
    "3AjXxra68zAUQALwAgpfUuhdq8mJVT2i7UKJ7cpHqhKMaa4jAQKHMGAEfHpWkAgEYUPidZ2jV7chMZMuSazjAmoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jj5wg8MDZgSG9vffViX1eFzpRiJ6qyV2AqX9nuic6waizBrTDw3mvf4NimNHmZFzcEsPfdjNf6wyd2ySrYaQKyB",
  "key1": "33cjPoZDk3WYSnTcX34VPbRnTWQpzg4U8eWrkkL2YKpTbLZWfTLWzoZr9hpY34c8LgLmxhc62fQei8rECPNHWNYP",
  "key2": "5wi8bpBKoHLG5bCo9kAi9QJFuPDX2fzR2jH5Y8ft2ADXEjGN6DS6Hu8RWrCWbcDp7EuNC5ucG1kHeFhZJEXs6XgT",
  "key3": "GNDpibcRqRTcVTEvptRuD9DRAsDtNpzGdoB6R5Mxxd4pV5cQvwefreCEWRNCSHDHk9tVicvV4w35hQZdiyKAkbb",
  "key4": "znFPDbaRt2EcV1hw31ZqYn5eV7iPWN2YcNoUgm9UYLvt5GY3qahDYQr2EaNRxURv7j6j6WyyhuUdqUG2KzTVuXE",
  "key5": "5R7SgwiPtxfFCMYb4bMbeURbdtkvQy9icU6YNKrfP7N6dzRvugmHdMiq4WbKj2BkTD4asv56Xe9okpK2Yb1MombN",
  "key6": "4XfxbCtAEgLL8zfJ77tvu9ALPCXnkh3THjhRasgJuv9vJS9HM3HFzQqnafi61XD9Xa85V2yejhMjPbSoFaYSPj3p",
  "key7": "VLMmAMtRJBvVvegXMETvVSEv71T5FVjAaJDLAheMexqWNFBubojtfe8itAFQtyvDhhjW9psZFgCkWajzdjHuATa",
  "key8": "2mh5Mb95bNkmXC2itXJ8tV2imBi8rowdZ1LPHekfDSAoXqcqmEsvja6ig9KLHFdKoiGwPtUq6zhCYTG8FCg1qh4M",
  "key9": "3wJ3mbtc8k7d8PQ59dJ1NpgcD886drWbR1uqmpPNZwcnt8s492x4qyD1UqrrzCGZiv2mUz2vuMJ5VAY6ada7dfMV",
  "key10": "3WFj5RSG7kPZRD7B3HcPBGqTN2LcFgTwBdMjQEEuicVARFk7wxN1gmKVbPtmK8QjnZvc3wQu6tn2gmgkWpmDvfWJ",
  "key11": "5J81iJMGHZRmAdkqtXq2vVJjMMxYi1o9JYjiwtCKj7X5YshGP7MHvbyYBaGkM9pZWWHzjx7yi8VHkoqwEswJs3HJ",
  "key12": "rSQhhWh3jyE41qsBdNk9S7TsUqQq2cYpj7Q1UoQcZaWqN82anBWPWTAqHUYUoAsNb5FntnfKfJRzPPrEpFQ11vd",
  "key13": "2SfknC6N3xk12kYzWqyYNtZGmKfURws7H18ujxQgQEaFU3oRJxDCHTa6jADjMwtyMAoqiz575CaBSY6rKT2AWA74",
  "key14": "kxiYzdLry6Gn7va4ucuXp6kng9GZQg32vYdkhHcuX86kUz9MneNhSz1aSq1WvkqCkYPNAXbGQig8V2NrwixWMHb",
  "key15": "5DT1Q2w3jLKpmV4DtAxXb7etUnjNdykQeofrQx4qELCrp3Ufvqzzzbod3AN8rcpMBrdQ4smQd19sua7N6NwjiZak",
  "key16": "28yCBxbKVbzqkTuVCxbeCemHaSgijUy2GR3Cq3i3wqLhqyVRNRgF8HA6jjFq89BmgcdrML2B1VReR5kHdVcqMiQ2",
  "key17": "3Dmyr6biP6qN1iPGAaAEtCDupmVidcX5kFsQq5nCi3yEuzJPCVWYyg7Dkh56k36GHyMdnY2vjRijxUCZKCvPyg6m",
  "key18": "2CmwtWQVVqzgCtPfxS7sC11UsadNyBG3FH63xWDPQ7fq6qadFXPv7SGKLzvwpbjXGNrysVEkcYx8UK1k5erCk8Yx",
  "key19": "3eguc5m4gPevkXShE2RBVvy4GKQqsE2HCpfzigutpPuYqRf9VxHbyTPyNrJxJu4GYFyE8tVHGgjcSqVKVeXXjsKH",
  "key20": "42Z6cY1Ug1UdrT2srSH9iYTfm6sKK9DWrDnzTPwRK7EQMoJNn2wELkBgesmqRKzE5FVCdNxZAfnAvgRgSTug9B7o",
  "key21": "8Fv2deXS1g8DniwLgsFkfQeaPsHVrhdrK6tBYy2gUU7j3JkCvJLQMAKgw3EgmpvBCt9NCs3Q6gtBtZQ1Gz1kgGf",
  "key22": "jmHfb75D8dfq2zJYoXAY99YBiRowXKVGQynmdHsTftN7XovkYFWSsh1KWiKhdwcF2J6zEmgEX2YLyKQzWmsraJd",
  "key23": "3ZWWjToQypCHexVzFiCuG9VTHdVDvoWB7RVuYjUcmwin66GTp74asv4CUwiHQkK5a9BemTXy35Uie28UmqFzceBp",
  "key24": "5GJVEKMo3rAZqRcex4fKBNEX6YpqgwsiikBBENf9u7gz4UEHjuRUZrGkY4yHmyWzjvmjvawjjSLWLetGDoafbYNS",
  "key25": "XGamgfrHeHXLoXA7AGvJ84vtoXzumWEDghT9io8ZqEw9Ya69Pta4RnJfjJBxjKP75EADBcyhCp3CYDYnPAtMyy5",
  "key26": "5iCo111CrvzSm3GKLQ9EDzayt5npsyWdpmVBpB58YD7GnaQN6RCV6Rarav735PJEa1KmyeD1ZwsgqkJC2TfLqDgT",
  "key27": "3HksxgfpBrm456Ni176EJnexK62bBk5Nc3QK5ZTAGRH5CEdeQQso6jT2PfUgqcQb3EC93sNkmByxN2V688LwRwbR",
  "key28": "NSpbFvLHtXtp8uPRHZnnU2i9jjKuqQGWEi67wbGy2QtixxaezvG52UBwquWur1stzSLi9SwgVW5herRaR2CHnCe",
  "key29": "52GQdgjhDn7DR13Bba2iSjNKJwfkWDvdpvkShr7ocwmG9CnUgFjPGTjTA2NjFRxBZBN58Gb1AqMkocuAfgAU2emo",
  "key30": "3DMmJDjBttY3assQnhNGpapzUUnwxpM1PTKUXWEvGPqo6cR45cyxp5ynWNZ8HV7xWtFAUZ9vbaQoSjh7m3XNQeo2",
  "key31": "3qf4dtnpahWiD8r7JHTzhiV8Wx1AqVkHFmDsKtGTvxWfp5RVXyevr74qzVkq84X5HodPD93G2MwAeqLg89Q4Qn6k",
  "key32": "5Q7PMmWpLe51oHKkD4hY4R4ZLpcTCAC1deZspRQJbph7zs9uqC5bTZ7oKt2MEQPFYGidea6L4DdcbjRyjVmnfbSA",
  "key33": "2EgWC8phG4VXnkMcLQtx2aPmVjnj1qtFGtiTQRs2yHA7x16M5CiJTAkCGPujQwZ1RKVQqS9BVhoE1rKfkBwWG3tc",
  "key34": "3USWn6suz4yG8TAMgKPmhQuXivaghxV4iYBQBbKdnrMbYBJEhFdAFgcfYspnxugvdeJ9HGtnp4Ztk6F5vy5AsdKK",
  "key35": "4AxM8DS41V7bf5MquZvjFKjsKstpfCSysiVi3fGKngfcAtmsSYCvHKpqriTJuzTTeNJ5PnGYJWA5krAjxEXQGSf4",
  "key36": "65bEyZKM9MPQmRZyjzfd6baq1HVDi3n21fUEy8PELKAY9WwaV8dYK2WkTvs9z9wQywA8tYLnA1YP4SnQirYso6Dz",
  "key37": "5UncTF4ymwAdYiXpEYG2kSxPXatT8qinDW4KjJk8kAemMT9SoLNmbZpKdSATnCnAfFb3zjZqK1zSLD8d6ni45dDi",
  "key38": "212NjJvveX4YCW2XkyaLNufTtvXVG5Yis3oUY3ENiu1eUssGrLEgAwWtuCXbFJiCV7sPdR3QbxfAb4z9pXgSNGm6",
  "key39": "4mvaQoqoRbhC163D4GWYiwF5UafSxBp2rQ9Dg1tT66iXunFhpZdLQiH3xd9JtcZ26zvmmVZD5crgSom1yE1vgN4Y",
  "key40": "3VNWXFyqhCBs2xqevvRm5qtfFZDK13nTrKMu6tcCX54wRWS8sHivxZrgoZEr7u9cj5ySkNwvg5GBHxWa9mECPw3c",
  "key41": "4LjhwsksRaW9wzZ1edF3U9Rf6S4DU4mDQMMZHKCm199Jz7fWpABnSiA6KVYT8naWe4W4YdvQ9GSNxGXDPj4rKmjd",
  "key42": "2CfrgkTgaYeGvn2uXZ2QszcSvR2D6aoBAt6Qcwh6xbCXVuBtxnLTqyMWdmvBHNn895JN8bZqgQ23qEPbzKz5HRQ7"
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
