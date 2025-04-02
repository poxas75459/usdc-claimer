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
    "2pbdpjrcSQPv1EvEwNydZnie2N3BJEfkTUZh3ci6BWvfZrCHLWHdoMNy8CfLRwgkSu9wa7BC99qB4FwkSkhqjaLy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZHMJYPZ3QGW52dbRP7bdf6s624x87bq53MNvxJTBHFY6uJpP24ChUpCbnaADU2knj6NhyBCfYHrn311rqN3oaFG",
  "key1": "2QUtmHCkNEWzQaFfwdpby6dKyLKtJhC4ZQkxtC6qxnqwmASLEPBDoV7ajVhJeQjR1daVR7h3d5e2y8U9H9R5DXca",
  "key2": "tJgqSutyxHedCL67wVmYuexZXqJHiBG2Fdmy1yxZ2cQ1oec3b31SXCWumXVPyTPgk73siirDhNTS5TyopaheM7U",
  "key3": "3emNYQHGHnhqqB4Fr4dGu7D5ozpFhZVAMZJpBmBswY9PyZ2AxThH5LxyT9ruvd8PRmnSd1rQBSLs2Y76n1rvdg6z",
  "key4": "28JtQpVrAM6CH5uCAZjRe3JPsxAYUntrAkt8kAHUCbYduTR9XAAghk8GMKvSjBR3iorSuQ92Js1hLsCG6Tt8qvPW",
  "key5": "3ckjRKbiFNsb644GZQxEAxZAemx33V3PHHtcrjozkXNm2nSQUzKecDJ9d1GerKZe9yGS2i5qhXvVkrmzyJZP6JAn",
  "key6": "XSS7mHyqXJCjxrtZ3bHz5n7DPCejtyTSTTpgLYZLQ4BdtGJEyCV1s3d1TmKKWr4Xhei6q5c4P7y4xRanrPTzVZN",
  "key7": "2bdLRmkg9tS63YMhgL3Fges5BSY4iGkdogeJvK1SP2s9ijqFs3LnzakLZuLwiwFsaumjvEvj1RNwusRw2eujP6hw",
  "key8": "pBPhczHkYjjcxE7Ej1VoU863NvcCwZUPscyogrhmrcnf8SUTEQePxDV2WyPfnCF6e6YFJjwLSTBcjnrHeeMCMbr",
  "key9": "2agpeDbf6wASi13CiMRuEiaetmP1LFGnFmrbEGaVznBxfiKMEbgQ6h8MfJdgdFxgRYweuJqs3wSxiwM6Z6TU2ioA",
  "key10": "3n1k8DoFk3HUNaQjvpDfzK42NC5UZYM4sLYRjFTNKn1YRSMi8pzDF1n6ssGkQejUWj68v47AwvM85jLSBYH7wJg9",
  "key11": "57k4TM12zuvV1TRsDikFi74HETiD2unAEE3PeVBp6zYpb3gNtgt17bHT7UcvtzdzzJ9D8L2mysTZj6VrQqZYtteX",
  "key12": "4eLbMVH26412dnLEWjryHH6Qy8mKLRnxttyNfbLdwpM5M5d2JXAJ8nC4w5DCNWnwMaqgBW6wsJGinqouzee3ku5o",
  "key13": "63gApMoc47VeaxNom3Cf7cgbaJePVrZGaRU3yzaEwfyHca8sSEnj4FQkud5kRp2Jo1ohrx1Ut6fAhd7QZDrYgSFz",
  "key14": "3QY5CK1NUMpRVctvAFEsgzsfadVd9hrMzBwgBE7ygQUKDWfe4esfxWg6N9VKdv1JxrkCiQAmUnak6tQv21YRgoGY",
  "key15": "3WKeGQoDtkTUtLxziHMcp9ZZ4RJt8hqhBBgJMeffkpk56qw9ErMsFHx1n35r5pVow97FN18ffuqCUZ3oU5hRgYHW",
  "key16": "mD1JMTNUW31gHkFJ2KqnF5tRrWKERYycB7192Xr9Lsu6h3vw3YupV1khZxjM6wSFCdRBQGzsJgK93ZV4EYtYM3x",
  "key17": "5ggZFd1yfyoy6UnukWC6RJXpbNGXWmYkc8b6Fh943zh4xFy2QZL4Moxvsk6w3TnMsKd2d1WnqgtjsrMbXavxL5kc",
  "key18": "3hcR9WTFh9sqr7g2JNA4BB1ZRvdfgRZyye3QAHb4NtBNMfVLX9FrZbVBGQamt7hW3zYZJM4Dt6FMRnAZoU9uwyW1",
  "key19": "56it4YDXfag8jtVDNa6Q48Vrhe1keLGdNrg2tWT3MHorqc5335kSwJQsQ7J9mb1USq2GFKWGtL4CVjRnhw6uFMGs",
  "key20": "2PopTn5B7UQfToX1AbsCvzPMn4J2yiDzrYP1KSJVgo9FMjJUmyMUmiPubYST2wEyJq9aF46DXcVuh7v9DYB8HLfD",
  "key21": "35vWV2GirH5SvsbzrW97fhmVcqWVEsmHXiQp7MUL6bfhGjdZsKv9X4BYv3b8M4uQgppZpyQBmXejECGBnjEFRV7q",
  "key22": "tt2MuwSxiB24xKAvs9G2T3TSf6BCbUJcuVFov9qj9VRXAewEHeCSeKV7rB79UjNVk5kG7txGsPFuwwumUYPCqDD",
  "key23": "35eVg1kzibxvFNuUvAwjiLqWfMquEmTLiNzXdLb7SCceapHmJnKUWzuHvRyBMP23Mt4YzKPqpn6iXnX42rrwkB2U",
  "key24": "4TPVCKp2ds1jxdXLDNfmStdU3jbWLBoPbsMY8NgvTrdoonUsWpZgWq5ucbBmXZVg2YhJnZ6VYcXoeVDb3T29Q1CB",
  "key25": "3SzrM7q3zQroTfE2KW83pkHM6pwvQLyB4L3Fv4hRJ4YCoEYY8GyULkdLuYtrgWtFRkkZfTFkG5a1vBqbCFD8UhH4",
  "key26": "3XU88S3o89mMyJvMAh8jaUBK445fVxKDvgC7EWzvnYUBht7jwytYcMs14MBvRTWcJyAbW5q9VVQ8wrcSHabZGtKe",
  "key27": "3JatNsR5nrxpcwyFBxXgoSkWJE7mdMUwEKB9VVJERC9neQyMRbeqM1CvRGE7tjtYp4aa55VuaQxaUkubtKQsLVQn",
  "key28": "4WMnSkaSu9cATNdJ8p39BzU6Q8S2VZxCQ7rF9GzgSLygRKDMpUPLPt9iQNvVePGjEJtpUxAJDghcvAotPNWfgSje",
  "key29": "usH6XMY7g7YURSfvLqxmHz7BywZScVkmyUvkj4MWdZ4CnBYZu7FmriGsUrxQWJDkPrXukABRM2jdRDLoTTFDi6h",
  "key30": "YeEyCHjSKonuSgyfMUogNxJkZ93zuohUnxSCKLwKcVujwoEwuFuXZyM7NSwkk8MyCDZ37Dii5j72C5amKafmLnk",
  "key31": "5fjntTe6zQRma1rB1gCotAsMoosb3HtFdATKugc6Uf4gPcd4qKrBN8ysbjcVv9sQTqggAjYRvasgGskh37FdCUgn",
  "key32": "4TQA9QLyjHbM4PUXmNjBboPvsNKmX3KTkKK6VMfQjp9SPKs5pkoBaa9FqXqpb1s8knJWNkinvDLRvHkb2s5BHvjH"
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
