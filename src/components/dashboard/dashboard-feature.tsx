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
    "5ceeacbHqp2z2Lr5TtkJNGBeqSxQeZqFE2GRn7e8Cq9AdioWct9o3h43QAJ5rrzSyBGKCdA9VhQHxn11M76yjf2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nauPqcAv1uaUUQ245SVfBmzbSCdBMC2B6TXmAhPtkpCbM1chHn5bF7grxEpar1sHmLqQvxzrzjuYf2an1CZv8Kk",
  "key1": "5kPVtxVppjHfxkVJHNNhMU53v9shCQ5CfAWQrHy6Yv9WxRCUGVnqPu62h3LHuJtTVB72T8M8Y4VXhXitDaMuBzoo",
  "key2": "rswxpUjBbiKuL2C1YKbTfEWRURFCGGRgeXV9s1yZjayXQ7xc6MYh7dib9Vx9s8G8gBsJNgAoUvLGactbmdbnHyj",
  "key3": "wJAN8W22YqcZD2LTFAHxX8wer71bToFbbWnr64Wdeczob8G4sEnUXrdsQdZY9K47d955VJ6GtdeshxwjNyLXvfL",
  "key4": "5YDCUf691kjdmhqNw77eiNh2MmGvSd4yhGTXcJUnmLNVcDcnLcaceFj1D6gGwoCxdBUh1H7tUpZR87ANU1SZrMMx",
  "key5": "fUmXZAYsmj7e2PSZxCWA6CriZqAnDc267qg4SL7hpZia2Ccwfws4YnZPp3TMAXk9syqQgN8mQinhD2WXbZrAHFg",
  "key6": "Aa6vqGqpLqPHMUmePqNFQfEka2nSyPJiHfazV4jZAkc3kr7MpL4zJ56nd47w1c8niAwDqDeAR13tX8R1FVRAKYq",
  "key7": "4u33FtbVw1REvStj7cHgnAGHDLafgKLJF4VsYRFrjosBSsuGue6FWohj8NZQiHpJQGKBCi5bPAb8qF6utmR11LHx",
  "key8": "2appY11JN4VngPGDgf3rdzSQmTrK2sxnqVVRWJt9Ai8XrePy3WL7HAEGWqEwT7KhwhxaMVonuL2SjnJqWr5qHY2c",
  "key9": "3u2qjsic2GYoxyNK7iKagAmAVqdDAgHHfwzEq81s7n1Kh3UPZa6bFiTHZc1BKwJc5iggm6ZQAKDTSo8CPWagVEJV",
  "key10": "4grFPWa8R7aySXahsy8cFGGxnbvkd64fcwKCzy3MyR82mvowrMJwGQBzmhxUvcitGMedZJ1x7Uj4PV2yQGiqF3My",
  "key11": "5PbPEA3L3q7qEfxBX3mczFwYZ1AaGw4jwCvpJurXQnpLXNvPWXbjeeA6vB67SeRP1SbmfDPyKvNd3GCuYm5Svkd",
  "key12": "4YU4A3NoWJv3iqeMnLaC5zZztG1Vh2QBY8ZJuq2mYNJYgX86pZ6AQkb2Qp5LfuunB7sHtJcnutYW75nr2FKUog7U",
  "key13": "PMAPYmUY3G5oJVh9szRg5QcLwpS2j8j1WqTUy66ANam3Sh4ggvYxyHhrcPPMnSXMpXhEC5HiNvHDBhzUhu1xpqq",
  "key14": "51YoMzvQEVZENGX1hbxXrMxTSbsayMNpcxchjocshjF9hMTtRcHHhTX1WoJiTFfqCTMKHBys8rWBP34PR4RR6zt3",
  "key15": "392RfrtP67iPKaAB48nJfVQzXfZ1BQqemYDRDEBW6tNYHvX5ZZ5QgiddS8ArZhhe2hr1PwnCSruAj3sun832EJ5p",
  "key16": "2jawuwEaTL4zJvRWGcgcxjeqHksST2PPriCj759HtevRQ1veSWXAa3uFxsysc22d3XWrLjNgehW2MA42GECaHguD",
  "key17": "3LnWoc5As1fFL5k5KsdsSJQ35qwEG1yAXefaiRaygyQctau8SGqgAoLsQz9XSa37eTU9Y44M7yt73JcpW6JMKX81",
  "key18": "38xLvnu9exktBopWZtFQGb53LJAUNQu4uUgQ1oY2GsY9uHogJWtNiaUkqaVJTRLED7mid21DN6qudXLJHX1CF4fa",
  "key19": "4eJFXg4LzsUch4rgPmzh653L7A9toxD4cRQ4wtYHVoADmzKPXheUL3dYwMyoCL6LmrLi3XTEJm1HDxo2TA4zX4JT",
  "key20": "2u7vnDboQpjLJuEabgvSUb7wVxabFRueiHyxihsszLs9BERpaSzMNXzHirJH19uVxMgpxcfBVQ4JK3KLUHeRKw3H",
  "key21": "2pi1vFZh3ZF3nVeyarJKvJhSwoexCQJ3favdTQ3ydv56eCxSrLpaKjFT9RRFpX58SQcXMr8iXeo67Y2eGz8YBofn",
  "key22": "wmJNxNc9fTMJBbR5a9GU3VM4TAXadYfCoVVWyRGPoixALVo9nQwwdU2yiYsaiTganY3NLqjiDeZRqAsYz76uTCo",
  "key23": "bwm4PAVTTDbsaG3gRy5NGg6AdkKEFade6JtpoUxa2665g6TZ6b8uRH4gpKe1Wfg7aGA3NSvzxVne1tZnvbCxUma",
  "key24": "gwp1jhtVyDHUKfs7rHKrQT1UJcQkXK8X2eS4snK2uBwJ8Vg9t3GJ7hW1gbxukxmz7jW8CteB6irndvYVeJFDDHj",
  "key25": "5KwEN93JhFyTLdD8heqGDWTQiADmYj1hAQ7DA2Bv9Eb2qWTtkc5y3mufHiDcRwDdj5AJMvpE3h7u6pfbMqSHeRFk",
  "key26": "4Qqaz1D36K47YPNC8CWrqV5gJSPJWMyf3oj6iSQvrcgLHCGTTPxNS6TQSNno5zGkHwLvheA81QQny6zATVxSdnv6",
  "key27": "MCqHwM4uVF1jyGJ87RDgz1pvnPeCt9fMmGaW4miBo8xCdPQsZ8UUe2w6CpEY4RNAcUqLCyjy7nc93zKfaJJ4ZLG"
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
