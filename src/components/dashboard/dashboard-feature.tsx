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
    "426CYEWQQboPSHU8Php3926sowqtK3GfsEjJPXqbetX6NJpTUsyX8MwR1eTe5SttXvCSKrHcKqXnEiFFfPEh43KQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YSZ4vGa123SH3HLWvnDM9HjQJPZEoVzBvPQLuuPURbgyxdvZskVFpsZouvqHt4Nh1Dpag9kw22STJTs6jfDWY4x",
  "key1": "5aUtU4qocebGYxjgYdUbVKxPJh381FBD6NjSwhnSj2UaPfrnRQydtmMup1kUXixMNmTkDPrm4VPcmDvm5x68NhCK",
  "key2": "5innt3cKzdqJkhFqe1UJWofKbTB3QRfaWrC9WuwLGESseykiC2Fiqz8sZYvTW4Y1aP93B6gM8KnbR1KPWcNfHAmV",
  "key3": "5Sbhg5NCh3FSXGTfBhNKerXC34SegqcFXhPsf4Jyph8PVKYwRNHhkf1HQwMeEVXFyxp2ziVMMT96SWCxykkvXcsW",
  "key4": "T753kknD63E7Z6KVVA3N2PBKVWXNZujxcnXnsXyHU7CAHHTjhyqYTVX6U9cEDtCGNCuFBrmFUVPswcLchoiVt8G",
  "key5": "67WFJXUwgdSe7vp1QrTSmnkqF7f9MGscWucAasxB9q39Tg9J7iZGay4s4HJYvu2dJ6KPexmN9kQjJTiy6MGa6mSu",
  "key6": "5P9bcC9gmtvat2hwu25YvKQC1dsJgantSq2UpSxfx7KbycK43DCBTRJyqHAdCt9F4oNnQgcuQBGAxX3BunmVHVAN",
  "key7": "YDpbrzTGVXqc4K62psDtFCg8jrv9hpNTyArXBerVExvBMKQJiVGZ3tbBpBhFMfH8vvLfEYJ3hP5V1vwAsv8dX4F",
  "key8": "2WQHsMSwWBuEqqkNsmtJ7o2fXhyStXHuBKLNngBHPQ9xhmhoz3sJ6yBXYf4ubzrH51gDDLrFViuWV5NTkYS5Qfff",
  "key9": "3qeehQDjr6WVUL9uHoL8vEv8s2hGn3P5piWyseQixsmpbH1daFLykhkC57SqMe1zsn4Az1if8ravxvmYoX2pvSGB",
  "key10": "2TjF5Z56u9mDK4rHiQN92mjAhnK8D3hehKUMCRvoQYvkECqxSNWDRxnFUYugvJvHenis6HY589GmFSZejCvWPd4m",
  "key11": "64rjonj3K2Ls8BAdtZ8CV3Qfk1wYVLMFwSkpu8vkPoXNRmbYMu2sj4woQueeFv2Yg33nCg2zJjtFdLui32CCdyrr",
  "key12": "4gz2vrqu9HSWAXkvmiQpyVJbenJQgmA7Jg5b9AiRuxUCu87SMNPffEBHz9rXU7BrbR3zvT77vjSNvVWtrUoQkQk9",
  "key13": "5s8o3jtQYNWCnFjq7XxYRtcnRWuC7kQMNwXhjiyzZELsMo2bfV68AozFAUDgPQ4agHUB6rfeeEYwqZccpNCJow73",
  "key14": "42TMMP7pCtQTDEg8hfFM7FhamjbHQDX8f7bb8bArHGC69sYrbLWdkYfsrhnnETe7ZYSjghAPF9WGNZMykZPnMwVD",
  "key15": "67KhNwh1xSFEyFMueZcRj5YMBZcb8jZ7mmRKEJMu7zx2uvGnGBXmPVHpU83odqgxvZsdCtYgSt3KukUq7xhyQWDa",
  "key16": "4NKutLwZR4HUzgk2Su39JDnGer2psXEQQk5xmSDizAoAqnz4YG5E87hERL2i18Ldgn52QippmSn9LJApA5SMoZQb",
  "key17": "3LPWH1fQcdEaZjD4K49aqDnnvEMMtd8pXzuqbS2YWLqB3pokufaMj5iEyiER4WUeX161Yv9pmRRPCdmWuRipUhPF",
  "key18": "3UnLhjaNPgGtRK9zfkZ6vdTAHWXtfWnhjhEAxZYzXChai5zrKbdM5Uj1ofZX2tiEc2main2NpXy6AyLiBaAP5bkw",
  "key19": "2fkPHvRXpSSqoNtwUncqY1YE2ywsaQudsUdFGabCg1srLpTfaqGAgRQAqCUkW1VfhWZTYpEcvjUyNPnxcWY18QfU",
  "key20": "5798JQGTSw6mciamPEcaLPfmsNfVit9FV6nskmVPzMz9Fie7mmF8S7dwqy3cHrCHMvzziK6A6BJrRGG3byLb8eiw",
  "key21": "3T5gTEBXZ1okgoebyroNE19sWPjCPq465C1o8HEyoBUsurAm49Qf3GXGdsWDgJhznDw48pSm4BDFjRk933cqQmDs",
  "key22": "417Ka7pyF69G9u4rXWvuzXqADa3GjbeF9v2Xow1kxvzHRGvxdPTRwtfTSgfH6p65W7DYwkFvA93pKaqZ3k5aic3s",
  "key23": "RRMcgh9LXGDf8a76aB15padckM5dEq5Cf9GN6rbd6A8s1fMVxRRZAseZnWjYbiDkhXSSNDEFMLsFXLdv3t49siF",
  "key24": "4wJ5XbN7XRzryDvjReYncuAwQmYnsqaiXm9czH59rQqypLPETmd79en3VY2uHmzxhufJkQk5ys7vx6PQBuVcH2JM"
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
