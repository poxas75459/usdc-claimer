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
    "3T4DrisV554P93P7xz6casCATsgso1V1ewzVpTxz3syPSJdM5UafD1cwJPybG4uGmHDsVGn5UwfmZ9vyMe14gw1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P79fJQJbnr3SFjNuVCN7MrdwMXpLbWGXSnKaUtuJcVzSmpSJxdnPP2Fmz5TxsjrYP9xX1LPvF8jQve7ZbzjWNJP",
  "key1": "5J2JS1n2zeNBFiyGFgTVvoCqnfCZDxaQSztrWe383hiJw2mcvv35WC1bYP58JNFx5dJvUGcT3bJ8g1jFwzzQRmny",
  "key2": "tXFqq6E9m3RfoS3nQwNZiwrt2cG2oezZYCM6yZF9R74RCzkCqgZ4ccfZo1dLAdnF5gMPnfYjEhL6nM84jJWnymm",
  "key3": "34cVE5Z1jxJMeiELVDKkQ1JehTu6xjiW4bc1hXaDgAM97juQiggMhMu51UkkyyURu3g8EvYCn5kW3mkjmLx4YSmZ",
  "key4": "3ASibTyK7dtQCYWTrz1P1dNFTpVJGPw7osZM1fF8aY2CjqpARRabeU9WFNCAF3fE2ma2BFHLPG48424puyWvpe8r",
  "key5": "DbVNPH9fButeFVEvmCDCViJrdZnPvQSFsfkZcUrQERfiPR5knqoLngLeSAkWmS7KGJF8ifKqvcYuPpX7ZZdZz63",
  "key6": "45LWRrigKN4Dq3ARgpTX2Mb32JJuZUH85rLxYJSExx8pjCejn9fDyAjcWMu8VBtpXZSzc4pcbxzmGKqTobqdZcsc",
  "key7": "42UrSeo4jq5Vu8B81WMnawUhAe7sHp3nPYxaPd4rVeoFQcvrrnLXjXdFVrgLv6ubB4TDCdkf6kor8TDhFrV2pGxJ",
  "key8": "3KYAkb35zhdGy8aC1dGdZtMmAkbwUnFzwtGyvaroiwpsRkVip9rGLf12fAh3ma8HhWmGSendryFW2AztPAxzkusu",
  "key9": "S7mT7A7NbWSciFezmXHJt8qSHVnJFtP6grLdmLxMuMrz7mnBJLGRdBJbhQm9paotzJ1mgxaXW51oZj8ZpfaeQGS",
  "key10": "53Gnkc2T2iKriUJRJAHpeZ4Tu1TAyzRfuizk31uEJpFjx3rUTnAybiFdSNk3ddwWyKSYRiwjd5GvQH2qBAyZEiY9",
  "key11": "3eKn8YnJyXfra3LPkiyVMB4oYAcLw9D2qtYC61bLDZ1Mgn92imG8DHXtxCoUBCj2Zs4sWVAN4apJKwGnPUe7BKc3",
  "key12": "5B9dvzY7JAMjccQNv1tKkTodSdtukqJRiNqkb7sSGuXhQRMGyPfBUMBsvgkBWZkC2AtneVtLFPq6UyJEL9ynSbTo",
  "key13": "Tbd6x3vcQrfMngtejaGiWrNi23S6Ji9bj4XoKAsne9qKXRAKVmBzZ3p2LPey86kk5NBEAWNJebTRz4wDBdNuSUF",
  "key14": "676cKVf5YzyCG4Pgyn25nD2mCB3LgFMSwAzV8723DbkVotWMLDnJvGsvT3uGPuEMvV7RTyU5mtGmNEZ7rMxFEGTh",
  "key15": "2C9Juv4cPr6NLC1zv7T9Xz2s7rNQykzeg4HbvmyA7MbzjckLowYDE8QK4Lung93h46um6RU8rEYCgu4sD1KatveV",
  "key16": "3U8u1tYnL4KRvZmMNhBotpGoonJuyKms5QFCAAFTijvFrPGxxZR7pWkW7XcpCVVtSUtDptKPgZRBwcLFonBKzR7t",
  "key17": "55GUHBteHMpKu5ttEzUadyqPj7JhXLEah6oo8ov36sbCpLADhmqMRpLp7UwFiYVe4npsCh88aXdYMsAQ2wwJboZv",
  "key18": "2CwYA4nhWPWEy2jULT2SztbUHofrXDpbEhYLXfrATnTgRSDj1kqT5x1qGTyZrWSApunFnYWV1jDmAZX7N8ACGtiC",
  "key19": "4g1uVgRoKytrJDYX438Bk5uYeDgbiU5beuaaWGB6jD15jbp5RA59HWySNKzYManCrkqkHeiC1XMG7MeCcvfpb9aJ",
  "key20": "5QESZ68rnYCrCAnVDuW8dA5BuJjQVwnWEAMkWohRY99pDztCW7YtbnbKgEWA5SqWzYwYsbmUqGFoVW7Bk7uKwTja",
  "key21": "2cbatWJttb3Sc8hNx5kv6e8rNtqv8tzgZrBy9psW6LKAPBivAXq5pXArNEkq9M9LteZzFW2wJ1pZg3Ct1ghDpBYL",
  "key22": "34AcvFvUzCDGRQhmuCmGCHB8LF6RqXjawqf4F2Uk3QnG4ZgM5trkwhJMxhRbztS1PgCHcEkWPWge5kgaT8nWHVuY",
  "key23": "2QNYcfNRenNUtif9SaN66MEx3NdkYTvaod1j9xaRofmY83FEzxNvea9LRM9AJ5o9HyY6EKhDBzFNtggkZvaKXTnb",
  "key24": "23sZpsNFSVRdcBLa9STJKE3GVPkejG2T35FUUnFh8etWu5LVDadVqkYf3KfxpwLc1rkxhE5M8NNQETxum1c7vm6W",
  "key25": "67M2woGGaTWxxCUjd54oYWeNGx3tF2yALmGihnNJhnMwTjkRM1JZMPFq6HHf1JvoQ3XpH7rUKyq3XLAMCs7eJJdZ",
  "key26": "5iHQkDLPdgtvKWzKDNZoj5a6TXA1mmPFDsYWcWDrke7rEq1jtmDx7BjcFx8yzb3J8gUQH85jMuNyDE7GphVkdnvA",
  "key27": "24URw4SG8HEXeBCDfAeaF4o5RbewBvRPUz6AW98ziu2c37JFSWqv4sYiDJU1rMPDxF4khjHKtg1TtKHomUirCgdf",
  "key28": "4jcqqbkAtpBEUWQGTdwGFdqBqUbMBazy9ehCVQXAgEmQjXiSCpbQLwxyV1a4f97GXzc3LKeii6BqykpQSTUriNv9",
  "key29": "3ecVxBCCtsGLzzpXGP7BSyL6gU8gT18cFkABjFUJ42CCzxFDn4Syj6HNquBxN9iHYw8VqhmTBQzbDeEQvMnuFgYY",
  "key30": "52eTaBJUq79NWu8RRXGyTBjrfUBCgfct2H7jeS8BmqAGBXMGkwFogtKbJJ5HuLTd8fWyC2FXqREt9LwEL4EiuVyV",
  "key31": "3Rk13JUzYMwj14jhGdD9z8sjBqqzBj5uAt2ivP41SEaPXQPk6HZVzoGzdSFmaovPwnGdUW1zo7FWrDKegd5QtEa8",
  "key32": "9k6XnREiyjV6zDFZjHWm24cgwc5P17QAUk9vzUaVHxPcSjJpFsJYMnEK3MRiPtJWWbs5RzU1dGdrGCYuMtCPko3",
  "key33": "4y61LBEVG1d6ex4jAGVLjdRcjmKLX2xK8eavbdsT2rNNNT6iZCeA7BP4G1mNyZdFXUGbwpBJw7ZC9jtQ8hMZcGAn"
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
