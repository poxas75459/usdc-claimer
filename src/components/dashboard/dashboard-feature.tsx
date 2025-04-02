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
    "2hSNqZF5igZrqsnYYcFHKAPLJbtpcAth5TtL4bEYCivw8y7iCcvAj26jPKptgWSK9KwPmP4MpG4KixLWme8f9aZQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cSP39yBJT6Xw4z8AKzAZa7ZFEvWH1ho1vUKi1LHQG627TY9q5P4QiK2LXm8WqQG1KSNY8Ggfi4hSWJ6WjK4wmQq",
  "key1": "54ag3SJfoP7sT2kncQZPbD2sUFjgfeqjFP6r1TH4V7zc1BaQvvtanWgthGaRvJGgtp1JiaeoiSBYdb2ed25FCDqT",
  "key2": "4qXVY7C1LovwNKEvcQobxMmxDTCNCqFxbgUVaBBCxJSqCU2cSbJnhnSBP83HreY4usWxb1z5x59aFbwVK9M9TDFH",
  "key3": "3UX1di8DZPczuEdMWd5GKHWt8CoiRBWgLEznAjdD2ApHiUqdRywAC9PWUAmKM6cSWNmWpyMdLp5v93doj9nt5Q2t",
  "key4": "2eCAhbgCHqV5x2TxYT3mGGQgCu9G7CCXkyZukHLZFpye8bUbvqBt4m2gvWbkJsGWcZkmaByDsNixL9is9xDYMdQ2",
  "key5": "2Zvs3QhzvPdfRdzV8veQaAwe3YA4JsFn7H4Ppt2aZuMzXKDV15YCMHRvDFoy5g1REagYMicT4YLiGdrMjUPBvyMm",
  "key6": "3uZoYqfM2CyrjxDCraYWx2PfQeWJpvpCcTB4aSa4cyyDQKrQcx576FaPi5fJ3jLk21uX1ina1vZSQ9w6grdEJ45J",
  "key7": "2tNEeCujiT6SEvscuZQpx9R8LGoEwyKkboxuwjMiCffpsPQcHZV9zrS2CXkaRf419ce6q62M9PvEMicsEhHGat8d",
  "key8": "3BYCR9erKaHGYMQJDnvuRPjCXHP2zozPkAvyeCE158pcXQsdSStd7r13PNnrWt8skMXjBnLGWp3ybhjcganrErtR",
  "key9": "5J79Fbe3bhE8Fhm9FvBQjG9JcsRyqoZaemEMu6zuM1x1uuv56vhfDFR8y1b9FvzkciTECeESBzZkDGSuSDznN47c",
  "key10": "5Wk8SvHLEUArUsA33z5cSTz8mbW4hxErzDtCJL7z5mo2zpzFakhfVYtyB8SwcKt4pPygu4a9qrj9XtxcoqJKqTWr",
  "key11": "2cb8sUfFnhCXN5DqxmEcr26aMZ5QabY26H85nKzvsbeh8kW3qgpbSQR8JTSzrrQiKEAenGf7AVkVYhAq17s4Uqvh",
  "key12": "5vfqxQNRe5hkKSqY1qTNrbcjBCPYxR6xncnGEASJGa8QqBL38tjUiCLxnpiwNvb4f1NrxtP93iKEVanTMyhkeKmq",
  "key13": "5KKB7XQJf8PiWbhg9VczfpiqZzNWVn3uaimirByGQShpfb1inoDhv7oynB5rM9MbgGJTKWUiV9AmSuQQFoLGiC27",
  "key14": "5J5kqQK2oBDN8fdEo65q5UZRFddmuEgCCk3eeoTkM739i1PcC4oigX7Mxb4iAu3kTmyEm7ckWwGmwj5Xw3e1x7sY",
  "key15": "4RLHkBv6cj2LkbJQ7MUHxPVBFFNSqyyJKa8sCpKYpYaTARgYKjUcFuudk3ntkZjEDzpmqySbw7JvsPEBjbDeDXZb",
  "key16": "27JHnwaxG9wX29f7Q92unpCKrKPbekijYzqzzJgDWPAp4uxib4kLfRCeCG3dNvLb18odAJqmk8pAQAS9pmpEbws5",
  "key17": "2maMvxT4uASNFRV3KTLYyc31HRjvNvzfKVBTfjAkpSM9kKCPdY27HWUpvnCK1Ld49Cne1LHzMUAi3x2ZMba6DJ81",
  "key18": "4PXgMkRqkAKkpqRaydc7D23ef1jdEhyyvCqudi2rvK7sJo2yTxTwy2TmHKbHNDCw2DWDP5GJ79HahkYuuhZKNkQz",
  "key19": "3kvruHA24Dp8tpbMCgtzeBNkubaMj3XqBydv8tqBGYwzXgE5vvxajXu6c2FT7mGCLDuU5Eh63gLVEobt5CJv7qDA",
  "key20": "WFH6b2sy7RJYevjSaLU1KtWUdBVsowrwayPnPbUQrauSzCZt8G8BgF8Y1RtRraAncwCRVohea6hBuvRWv7421bN",
  "key21": "5RZYRGRbBW8dYPeG1KyXQNFYzRUyo1sdsKJ1EQYoCA6ije5qj4Xi9EZ51CYQv1fvBMKx2A7hEtb8okKU2dmZ4fgu",
  "key22": "oPC1tWKcdu93AWAfNzi1t894PLm6JWAj5rQZu5acWrQQ6fxZRHhw1UUyM1EQEPj3KR9iLedKDBZHgqApaY9fuBB",
  "key23": "3pYPQgd8oiu17EiBRCaHGjjUi7wMcgn7eeFcRHY2d4zbM6JXLQv8q3XiG2yA61XBDCLVPCuPWvu6qPg7mNvoCYy5",
  "key24": "2CmbLARqFMsziNtBJnamme2PXqVW6WuN8u4pkF7tN9hz7xg8ahBHCEhLjVyt2qUQYnvwhVpM1d9YZzLPwQ9Bb4w7",
  "key25": "343Ux4yEfkmdyt4TgctS1Vu1ExTvbTuxJSCNUQEmWNFF2LTDxS21P3xWKzXp8RpMaLgMkvH6iggsP5d4wRhPn1ki",
  "key26": "2ADHqSEUtishDzo3FBPFjbtxs3gSnhhybw6LGQFGx1t71RwiG1Be65vjm12kR7GfDwuaAnQvqtNk4LVqUE5GYsrD",
  "key27": "3S6nHRhSE8cxURU4UFQMhTuiUBcqdWKuFYnwjrLMNFHhCCDuACpaSeuU8wxHZR31wTUfoiEPW1EHSr3b6bbzfDbB",
  "key28": "5uyx3qV7TJkbZx7wDVzm979MKgUheXk4RvNchAPab23gFDhDtjzCqzjEUH2AMQWSnWzuVhAdxP4xgTqBGRRxdesJ",
  "key29": "52X2KfTc38rFcdwCSrMYjWdbo5foedx9NJSjQKXjeaL1hHaSTy2mS9xhVciFSS8YsAciCBKvh9mk476N64tfxYyg",
  "key30": "3kmXLn6ZPPJbm3wCGRRVTysL7QZuVbB65bzB27LMSBR2hnj1WxKcgjiU2Mq8J99vEJG8TFKJKU9JZgpvNjNqxn1b",
  "key31": "5xybVh9BFaqMq8bLvtDm8BPNGAVn5ymqm7VhiRSAkG1QLb8tnYAtPEgxQZ93gaXiPAtWR16rbUVbR33xqfb7oqx1",
  "key32": "4jWP9zZ5RVXwGXbEUj2Ga6BZ33i2qTraBxUQvnzAWrHu5S3Kg8VUEMQU4d4z2qCbbmXetrt2ZMkf5zjpNdoFG3CM",
  "key33": "3NfqNGWDdez4RUbhZLjavFPF43NYE6BYvRnqK1aDFZWJQPYnhiH8y2CkibdLU64bacwXWkkSudv6kV6MHjovKpM6",
  "key34": "RNmUDeEp4zMEhfg45RxawV3aXwaVqRYq48fNi7vLQDc45G6pPD91pHEdYxuQatsP1YSudb7nFQHNMmFcXTKkcLx",
  "key35": "JaFejyP8u1UTq9ZoimRxY42zNgbfg3ioEEQ5Epg99fmJBtdgXqskepgdjuRRzWMicAJxgpN1bgq9QWg6aJbxytp",
  "key36": "2tnhUuzaaFxPsYatHQeJyhq1ZrSqV4pbdhh7CGkA42CsR7tC3XDsujm1c8QmkzRuCKm6PpsN9cURZyiibbKnxkjE",
  "key37": "Lbsy2KMxbLd2LqLyYA7yoXuryAqZbhH4FRemBFLQRmVR13xs6usTty6S5GreUVc7ZTDpPsWqVs8vJRFJaQbcpjJ"
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
