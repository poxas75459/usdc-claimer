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
    "noa3JzfTJW4KPcqswMdmEDfeFuDEZAy54QsQ1TizS3QrCyGfhku386of3oeG8MCo7yyHrxsbqMUzS9dVz56pZw7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Py1aerjNvKXZTVfimNsAnYkTGANHwEnrr6o6v277vrfpbhx2uYPZnrkyJ7R5oyky4dfEEdjA3h7qcwDbLod4F6F",
  "key1": "4xqPVscWFah8Jy59pi2FwhqeY5eiixoEZn64wpdk9thCXymUJf9nuGvxT2YskTZgSFjzwffuyFrq7spy4VWGFfF7",
  "key2": "2KfD7wknphZqC6tijytEqc9Ld3J48rmidJkVVxpK41x445oj9rFfg2j54brXmuFs73oUkc6Ay6NHgjtE6rE7v2ti",
  "key3": "3XpbTUYrXd6G1KQ7NNnJp65Q2HjjN7CGi5Wxw29eHFhNchsH2N81KC4ZoxE4UJA1JbcvRMbw9fw23VwCfn29DAYp",
  "key4": "3SAyrBNqGp9c92bNV5hXDaucotYXZbYFryM36Ujemf8gfUukchzAe1Wv1TfqdZxQFjv7LDsvYAEwJfByiKa3T4hE",
  "key5": "2kPWFyFjEZQTZRaLCgBeHJiEHf9ZtuNHsBEeVFMiPPE9Q9HuBhCupzmDB29DQ9o7rpmrrqSX1SoUoWCgvizjaQGo",
  "key6": "5BcFw3Nb7RX7sSmGnB6ACPAoK5tJ37Gbz6ooUrhcLK74E5bHGkMmjXUBkRp5z8xpXs4amcxYqxeWnrRUG5fvvNyv",
  "key7": "4AjoGAMcpznSJr5nAAfxLEv1bDRZpCf9rNQ8fRvjX2ExTRRV3dBDBXXpN2QVJLRJg7E1qgxgo5B8u6MF7YbN7PsH",
  "key8": "5MCjEWjB2mh49Mte7mpUyP29TvREuJAwpL59njcspJ2W2PUyweyrt6f6jPNiBzQ3nwpZFuFjngRZ8avCX8mnQ4p6",
  "key9": "2x23ZLLFijcvF8gmXjLVSEAe3QPZ7nYVSfsMZf8nB8JbLGsc6X9E5Vq36isBN5MnUM89SB8fmp4jChfXc5agKRT5",
  "key10": "3KnMsBbn58tw4vn5qASrXnJFBkefHxhKKhvfv9k2VMvs17pLXgHvo8fZzJLdUkxVtaL7GFpphUbVwBWqCSR1CURp",
  "key11": "5NNG2G1jpBMiKiLueA8bu4q1zeCYAXoLzL1o9dY34kk5nVG8SkMEbc37e4TUsLYx3FcmuZctzjsZsk57AZwBoiD3",
  "key12": "25LJNz866EnghM5pJwmzCFf5uCUn8YZ6t2SeL7hJNidJydR3XymyQKjoqwNK3nuRAMAWupCsG8N8qFToVc67KQ9B",
  "key13": "64mNyBaAswERcpdX7ik7cSEVwLUvukfJZA29Zo5xE1SkV7jvULK7aR6UgPCx86sY2UKTzye97b4hKjrnCFQjdp4K",
  "key14": "4arMsBNZEEZvEbLTbqCMqdn1G7bXiQyb2eRu1ZMqexvrkfRVqkmjfj2ox3ykkKJ8L41PFcigXoLWHGNjpMv7kEM4",
  "key15": "WP4BPv7SWjNAysnbVKQNffbX8nzLW4BTU8BPQYiR7oqF6VuLzcTaMEzCgJnJW3Ldi35uQ6JjVfgeULWTGiT5upv",
  "key16": "3qea89CgGpaNJdyn1uRGqdn4NY5W1FYhnYB5Aex1DpPXmeVFnZ64fX8TTWbhvuUPUZQu2pu4AMPi1ksQks8QZhYg",
  "key17": "3kVVccPEDWRRF7FiBwKJYRcVWVQRd6BHzaDeLRrZqP327prkFJdkJLwVfqUAYcnSw87wJfFNaEU3cD6jGCosmYLJ",
  "key18": "2eh8xzdwm1NfxJ7NFB1GWNMGQF4ZU8Tpakxd3vqtgKSMkDuBbPMez4iDmcwTWtwAX29Q55fbHuwV3fhYE8BGGugG",
  "key19": "5EHWThQC5jf13aicEPLcbBjFbMuAm3UfrBnqTUATFnzABY6g9aVeCjADs7iUPR1ef1jhH9DCZcmb1k3FnwsZcmdv",
  "key20": "4vXKNr8VJRbZpWWA1576XM2tZ5MuadpRPazTiZHuBwX3bbtpoxrb1JemcRCVhxLEXKtZChzk3NdEP8q3CQMQgStT",
  "key21": "3xqGft7SeKrP6vAANsAZJZcYBpaJzBwkpbaRCvQn3udT7nMmEWyHVmY6JrXQuvA3owSs89Ywm1qFVbRnLnrYpi13",
  "key22": "3QXsYMiHajNytXfyfEJHh3bepNNj7kThVzzvoHKXJdgXVAz7YSWQ8Xq4c4dzTWjYcgvHpiRHVRSY7FMysFzLW6eE",
  "key23": "5iT7c5zduvf8G9HPqaawhu3nNagTaxSbJRLBCEU5cz2grG1uoZQUDsMhN3XnbBN9Ln2WGqhz2ZvAwnMMfzaHap3H",
  "key24": "5YWNvDu1QNVNee9v9QyVuxRfUZDeB16evhUY5MohPwrgioU51oRp1jRaTpFyE7nBfJoiyX5GdRyJCpmVQvhQw9AY",
  "key25": "5gPL7kf95WbUZ56Fsbd4oK9DLcJottQbXNv7LQM5KPNPFYLd6JCJSD2upw4oo4S6bGqMi8jETVxxodQY98KQjfBf"
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
