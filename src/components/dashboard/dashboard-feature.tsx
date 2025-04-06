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
    "3vFHAAfXGQi5HQ8Mhge81cW2RvmtGwrcP1ZiZ7Abs4NMHSDstJvnbogo9vuy4wGK2raoadXn3EmiDEuK6fekcrjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tADwGRsSzzAUkJLvQgPeUXUUALZN9HrJyLw3Snv36UiUeWPHtJkMmDbxhyDWrmBfCGUndqpHLqxGjYSk19Y3Lgz",
  "key1": "3LRana1og39umGSdoxDiVKbCcCfGBWz3UhnLKBYWPt34hmedyUtQHVz9iwxeCCA8FBa8vHE7zadpsHxwDFinDwhQ",
  "key2": "63nqAVPYdnbZjRpmbRiEZiZb3x4wQmwDmcGaBkbrgSyE2LCGKqW448hpXS6BhoBg4beF2AFPskyb85XeZryrE6ag",
  "key3": "589qPnzv45t24SfWUcKLut8Ser2q8cZCKGPYZeogfjoCQ2WGRSwxDpyvAQejauZGFYmMXvwBAr3gekVe77S4Zg4",
  "key4": "5eho7iXNQa5v2rHAmAodQ9F7rLEr34aLRThxemNCwbvhL7eck8XHm8k8w8agTyhwmBVFafRRsRzhCeZdhCCLCU9g",
  "key5": "5MqxiDqHZNmJ4jEXYphPzgGShmkXWAD3B2384nv81mDnHGCYTahj2AAy9ZCtep3KZx56s3n2fibR4bQsAgqvWZAL",
  "key6": "2pZwtJD2VQZBBvEG5JiEgMZUT2QLaWmfQiqku8CVFWLud87XKfZEqUzDdrj1U2NQuzCrpAiDGkNc4agtEfmNRGrT",
  "key7": "wpPqEM78cz2jk3ud8GKSRPHJeBma3G3bj2BoS79BuvGPuko3K5GQFgqW5k3wQC29RLiuQMYh3DSVCxNq5F2XrEv",
  "key8": "2AoZqDfjoZRnC5P6kAhTJQFzMsC5GmXnXNbiGQaCNc55M9CimRxFeK2LHgtT46ASDCfcjqmVgwPAhqPtBCReqH4s",
  "key9": "2ND2YjSTpVEvvYKderbFwmhYPX3F6UsVX7BR5yrhDCjEYM1X7dGQdGgWyHQfcsBxpyTAdTeckMbDTpqCY2Su8Hpe",
  "key10": "2vH1DuEKcXRS9z5zbSbXuNntdXUYUcmNY5L8wsdL2i5qPrVZDNtJGToDE7hQ4uKHkfZfqa1bgtPRPGYhCroLv9AP",
  "key11": "4yQqcumH2gKDTAMFN5iAYzGJZzzYzU8t9uHEBwtgD4WbewVYBAXvimFrHGVhdP1Y4h5eHqRPR3fj7xMfYm2efTfQ",
  "key12": "2dxTEB5chBvprXqqPjPK8bj1o5b2FPZhbtjUFPFh4z87QKfpvjXL5h2TRFrSbp2wDdqpB2BbytLoWDhw3nPhtbJh",
  "key13": "5dJsrDMR9oY739fivQ11gTLhwMEfWxBZ7o9X9cti7UL46wQVeSUuZNUZckNgGS9jnbnfmZLxKEk5w4ffpipXqM2e",
  "key14": "3JQs9AhpSYMQQHuZL3qLZ8WUuYdiAmo1ZivXV8jzuGroSBwtXaN6f3Evsa8jSE9woyU5B5rwKBExaoszEvVbsbRu",
  "key15": "2vGpXFmjc9jWvTR7u6TduNA9pCvnXTbzFA8cmDVqWsbusJnBiLpRPqDiNN191g7U8RusL3BvZyeZK81c45FvT5zx",
  "key16": "3DCfMGt3KTtcGpYU93B1gHsvqJgUN8xP5GFXWxYTDhzwyYzj68WrFFizBf3KSXTJ1o4rS2EAAK5shDKW5xUz4zRL",
  "key17": "4EoPVadNzGc9Ty9kuQZhP1fnzdLe8FmAr9Mz138PFCbQi4TRsoaRmkpVU6h1ghswWKuZJYw7xnd8jk87au9qzzB3",
  "key18": "5y7VD6Z1FQfhEdeF6oncxRivN3pd5F83Mea8WxjHB5TfdyrUq6nKkB1heAgqjEKyWogDxd8mXtcv6T6iHHzWbENt",
  "key19": "uteyyqovN5uqrJGXi48mtY91siZhxMKTE6WRcPu47yQp2KiaNzSdLNFHrAAeH7MfosUQHN2CwVadcM2C58Lm99Z",
  "key20": "3YHsgRbi6hfE2Qg7nk2mQnt29Qfj3AZTcXfFaXfgeRbckmKzsP9q7g9CCiEkM1jqfwKoYCh6VrrSy3bvikh1jsFm",
  "key21": "3QwwDaNzj9Fi2fE2rKmqbXe96U7YNTwBDDkL1AgbR6reRarhX3GHTtUmgYrz9eympaK1tRCPZwjsUXvmYPXD8v9Q",
  "key22": "3rxyvjm7dNBBsKSL3rZo52aZ85N3SAKNjh21VYR9bDFgW3W64fw8bB4zfK2UTEGWqqBhxffQ89kkRS7UNd6yWsR9",
  "key23": "4jtAok4gQQbiN3HhkDjAmPVSx2XbZrXATjmG1nbdoBiRFZuWMvKbJf1uyMANEYhueTWghtj6UNoRyqUxLALxSgJc",
  "key24": "48wH72cjJmPEoYUfUmCLdV8xMAc6a5iws84oLVvCxdoCC8iKu1MT6mjUmcx9ym1kJF19yu2Nvj33qpvqs7FcxSo4",
  "key25": "5r5qJuDL8wyon2jocQr7MYVXBhSPhtP29TMgJEcxY8cR3B5fAiVwdmdRwQLLgA8nktMxiucDSYpUJcCWiXaEHx6F",
  "key26": "2ZJ35E6JHxV8PFV3tzoKx7aHRQkdHMRepYkXxBuozmnGey7Jbajnfmqg1bhCmWxyVarR9HpNM7k9cyfXNx3tM3zc"
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
