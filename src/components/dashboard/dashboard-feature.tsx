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
    "3Vs4vsZbYgVMZ5foTHKVWcwDGbrUjojusJvr8kVY3ZxC5YrH3FarHH8fr3kxLpD14ULmoQGjfPSFNwVKgKm2Wcun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iBTYJKK9n4W1yEmWbXc5t6N93mLDjAnQU8RrTEEQHFaAVSVJkjEGWNstuVRn47KewjGijhBqUGZf3JL2g3qpGAg",
  "key1": "4rVTwCcLH2f5YhmAprJwm3zYaycW3Gy9qxT9B4LUXCCv6mVdf3LFh2NCDyLfV2W24EnJMxZCscPPvxY8xKDKtv7s",
  "key2": "2hGD5FpYtr5ExWpYSSLt3YgzhVKSDdvh3EnCCMsNSNR1eQYbpqDfgi4nvLBieJnQAfoJ1W34DkEuLfUwWudcxJMM",
  "key3": "64mrH7kNmUKzAPga31BpKWtPW9Zw6iowteXG8fpP4KXwyUEo9Jv3sEFy58RfaQHvsxCRV6QiY4xWdkvP6NsWcoru",
  "key4": "X79GDdYtqAtk8hRB2rhYj89tr8D7gDn5R84Tfe9xocDUSu4RRSM5mqSDm7Nf6KCL6Wj72oWc1qcCr2BGqJVUtMp",
  "key5": "bxwNdRJp2mszoAwGyPLLSuiWcSkKSr4PbFrU7GbyPUnripnp293PaemszZnGNvWfR3XdF7xvDjvd4kgLMbPbjEL",
  "key6": "4S2nb5oXRdyPCUtmJvuj9TYCp8qSpaf1BW9BPshkCt5VQR9RnLAZVYzZDxkZqehZmydaPycgqbyQxry3mNvr9cte",
  "key7": "2u1MRP9ZwSmH1Qh3meufaM9oXBTjDQpeTi6sYEJ463H3baeC8JKU7n84jqwYLAzUpN8WwY85D3LNhorHPnLuS3Rn",
  "key8": "4u3qwDS2kyBfch649qfxK2rq1LnEvD95jUDpMZsWTrt6paEJSnt4p7qtrH9HMscPaw7diJfAeFuHYD8NsjBFRzvT",
  "key9": "4eBNz7zZERaw1TEjhNhe6t3U8RqYj4bw9k84M5x3ry17XzmkvNvWZuGnFBfwSim6stQk8LDzkdndrj3gyqWkvabi",
  "key10": "jGpReSxjs91DRYjJJUEGFjTxTZHPt77GfMqqT3NtNG7LNLTmcDH6s77yB6uhZ5kHnXhBcg14LmRCeH2LvF1QAZm",
  "key11": "2XQQYef5xG22c8FiQhv4xQiEtXXmqDAtTvmV8BLHQddGqKXEtq51fJb8Duyov5fN5Kj4cPc8DogeNQ9ig8GT6zCy",
  "key12": "3PGAaxHuU3cQPjAaabULDqVrHuQxnAj1WMwCx68brw9DV24KN5ADNoTpPgLuuDqaVgHzGoA7A9ZLsDruJ2MeaBLs",
  "key13": "2emrHooStoxyFWbg518H6TaDYSkz6ZKjoQzzuYrNExHBsdzv3zXC5xKyVXDFbZzfMi5a3xj5PSc3mv9DpkQ9Dbxh",
  "key14": "4vB3J19TFjfBUiMYxdSYHtAv32Y57t8bBf6A5YquCPrBrUBPLNLNLykcnPebrUzqX5z7CKCgjZUctA3USB4JoRrs",
  "key15": "596nWe2W8cAPJa7JyV8XKB8EZoXQDjdMTsZfm8wRu3DPmxFpkZRRedE6eoTEQ4DpaGRcP64oB4PXM7iKo24VHDu9",
  "key16": "5Dw2iKVWQHdX6uLiGns71RfrwLx1sTcuy7B8EnQC5X27WPXYmuFHwNeQuxCU9RHTuWTugoZAzLZ8r3uDZXnzSxKP",
  "key17": "3uuUvtmVYD5nirgh2tASQ2mnDpGtJMqq5oWEr4LmyzcfAWMcUZQw99TvhmZENaRLQfyDo3TdpADYAPkixZurj1cb",
  "key18": "5bogdmvWB8eV2fMMKrutoxwBXEeCsgADheHbNyrpBh9yBLprpVWTVbKpeq48NdoMcFd2DAxj4YTtVVpn4fXM36zD",
  "key19": "2VNhrKCBrx1K4JeoG7MTCGdAmFHHESM2ufSmjqeKHa3qwRYWvXEQANYX6WenocXEufq52G21oJJmFnYA2HHXS9ED",
  "key20": "2TyYyHJYgKdsPoBXTuqeT14YyHyhy765cradEzCWwWB9q7p3sgcqoQwxB91swMFVAT9ejfPUZGooghE6tSAKhabb",
  "key21": "4383CX4UCQJKGQb3q1316BPnxPmYeCiGRJ4vtGkiAQUqBWxKrFKWGz9ErAVdt2BQNaQYyd1DxUHfrL5r9ycwvtky",
  "key22": "4FUxpTEEoYiKb2bxnLzjbiGNzAtogXoxNC9XqzzCXouJRRaNRK66FyRhqoz7xRvKSgqGR7emnZpY3b5xo4qPEU5Q",
  "key23": "Vg6inm87xnAGq2TpgRRGJFPaAXwotecvqpgpuLDB6YS73UcDBGXzzixKeoYekC35vnF7FKW6Xa56QcNQ74qACA3",
  "key24": "4kAsUsciWyCF4uawL7EajG1XcqHtRfQG1TTvjKcU2ymQSnNHpsY496bUQdkJRfhqFTv5ghYpZUPrED7Er88RtmHu",
  "key25": "3xYsxKnZYV2cvKYntU5xskZ7ms91Xygxgu9ZGGtkAp7FBw2qXD4M5Am7RPxGCyPT25DnHtgjUX7djrMohp8NAkAv",
  "key26": "41LrB2KHNZntjhBNVUnqJdiSLmDPg6PNPskWhp8wyB3ScmHETEbedydyH5cXsgsmDi1numNbFBzoc7J3zjnXME8g",
  "key27": "4at6cGRnpwKrt8EKkwEYz2dGh8sn6KY1RWgigWpj7zmu6iYTz6streYzuzPa6qqMpSi7dDY5KnuWaNazA1nuXe89",
  "key28": "5xRA8JcnVU7iy4qLZ9jhuCgcqTS2hfm8ChSLfo1rum84r4P9qXcKVnto9vRE7PFGCvngxn3TMxkNaV2Bb2kv1rZJ"
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
