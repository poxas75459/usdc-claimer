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
    "4qg25HK4MVWPV6iZdNH3RUNZvNa6UXuR59yFpRngFMQrUvp9qmiFumnCjC7N3hANx2H97gQqbhJjCL6ZVGc6JC7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hmbbndDpBgLnnEBS3jrVzeRpvqcD3fLPpj7skuK4eP3UkZMDL3GumcvwiBBbfq9zvfUa54ZPxPTpRxprLft3cLZ",
  "key1": "2R6j4sWrxCcGASYLyJuYj6YcipTkqL2rdfKXVK6TMuihswHimUB631x7J4uVPZyVSTyvDYU64bREVvkuAmnxbfwD",
  "key2": "WtiQnTiP8JoFRELS22Nf51ZqY3gUpYYHPwML4DMEeJb7wNzHXZSXHmaDcLbwXMpN7fnHYvryZAb24FWWXyKtuKZ",
  "key3": "2RSXndR2VdYzHoQPuX1PGCwCA6AeGxaiaGwoYyY2BDtx8hYreQ4QLnTAj5R1KRXQGd3CkAAA5p4tkGHW2Qca2bB4",
  "key4": "3gr8dBWUxyBRKdCoQ7iEn9SVuvtG329JiQBSa1EXWCZpQmeBnGMXfgqVbBpMBaA9LJWZmgi1uZQiXZkoQMx3k5QN",
  "key5": "4ZvqrXqgWMotpamhG1KQcp2R7DUnuFUK9Py3LGxXx2jNt83TmMWbawCdHj1jWWzUhyekHHPvMoNUfn4ZyYMKEpCs",
  "key6": "2sG6ohBqBe3VonqYQLrMYiZYyPmSki2khhE85D1rrTyWXzf4FgjBNma2iamvUKs5AnCaUa39qLcgQAfEsGmhbcna",
  "key7": "37oSuthnxt5qatRs7mpXAnrrYhPuehyFpe58ocVVG9eqNgCQ3R8YSseufCmKyQEGkLcogv6oE9ZrbNRmjqMZLY7j",
  "key8": "2wccN23T1jJyoUj9dY9JkGjH26919JYRb7FqQy5GHTKGMRknRNuSWpKX6NBaAioRz1CSn3CqrxCXj7c3JLYW7aS8",
  "key9": "3WCbDonukAMs1aqpRLb6P1hy2oSuMvAEPExqR2zR3xFzBydRp59CQMJSreiq2W76DfkqFnJi3EZSTY3xox69N6p2",
  "key10": "4VSYxXF6iVPfR1XkUdutpS5bGQqdBaDUSfFjPASggGczr9weXwU6xd7ivkvgcP7dVzPQNu11brXYeoAZjVrk6GrJ",
  "key11": "4uGoKgf4u7w5q7F87ZpzEYoz7NxLZ6TyikmpuE4hNK5eyr3Fx3Jt7VCV2ZJCkZyjk4ppLjacUjGyEgBTSeeUDQVs",
  "key12": "qELPKZf2bbkfsMED4kMDACRAtQyud98ovkut5FoURJ5XcG4X1TCTFxWzyP9GYUBXaGTwW81dQX41d2FguvQ4dvB",
  "key13": "pNVVBwqaPAf1ypsVrvbEiFbdXW4LmF4JkWoJVPbdicy7wEE7Sa5BofMMeiZvgFETWYHpewNYSWapv9gcHK2W7q6",
  "key14": "5o5TkdjTUZnXp5eEXDUiTV5udk7Ew9DR7GanaFTuBsUQBSbRQfc6vujVmv8WG4W4kqoFKfyDLhgmrB1PJEwTpetB",
  "key15": "3wHqFfbkWMVq7e2YW9APqyZ5vWbnY1cjfnPjQk2jKrPRaRfkBCS7Rgg73eoHd6TqJxbMLxmTnd3bdmUYL2ya6RUF",
  "key16": "4crCqAgoz6D8KibYoWQoF9nb99xgMPV9f9MxoTBB7CEABth85aGmmEUrTYYVxqS3st4RWw8SELqgy3yQH7qR6oo3",
  "key17": "4sG3RwvJ2cHMGU6AuQRYvWYoF78gybKq63k1qYmAUeeSSroVJuoi2QtTQe2SY3QbwWDqyKYXYdnSyZuggoTuLhNi",
  "key18": "3Z2SQrWKEoGnh67iyqUCRcoiX7rN3Jp5d9QNUFKrmddaBCT8yF8T9DkcJuZaGkVTbcQUSYjonRDARLEDUPp6bbzt",
  "key19": "32DcE8Wn7DVnDGHAvGqpXvjWGWG5jB3QT5pEQMQJpwwiesyt9Th1SAQuUc1Ax1Af4eUvCEqz5Npv47SeNSgQaiNf",
  "key20": "2s6iabpwpLsPSLLtE4UutdonhGfheQjWWDY84iKppzQr4omt4Ybeo8jjcrNRTTRdW88JHPBzL9jSL3gfiVr444vQ",
  "key21": "3XCAf1U9RaznJeV7pAV1ZU6cT8XZCHEFyhKRT8HaAKavvC5zx5VJftDDVbBey9e4kM3inf5sd74Mh9oQGoiG2w56",
  "key22": "3kcB7dchpDFZyYv52bpP259rtfFujmJjMDmCkqRuceaQnY7tWXWewKX1Q3bUqLz2LyCzfm3NBapzVzoFAq8aw9f1",
  "key23": "2u4Cy6ByTALQ6Jdkm8cu5Kg6dZpj9Wo3dRLZwHDvLKjqi6ffT32yZyxV8rQu1DxCVLbnMhk8yrPBvBb35146To7v",
  "key24": "3PeWnASP2QJvMGRvtn8UjqWgdBUZfg7c8mrHi5pay7W2U2ifwoabaLJgcN69QLgJmrcYjf9HYeR6X5uWCg4cmTSW",
  "key25": "4nHeArwvGtjrf3u7Sga97cFrtqrgkkJToxP5VWtfejYpr1P9LNGnxi5dQtQVnqugB1s3G5vmnmc6V97GEXCConsa",
  "key26": "9PBm8jtMtRD43SJFQ2km4V5ZXZdZepVQcjH8Wb4g12ZFXt7NjcoBEyojuvKM9ZtjPusV4tzRt9V91ZJVRU3efw3",
  "key27": "4yc345c7w5ZY3zygsRhHm3YwdiG6FR56HmYi26QY64a3mvCg7YR6KBvb918ic8wSMHiZEpwBNiSD5nmxyUyMjm3Z",
  "key28": "NX3kawE4Ag9NzTNtT5ZR5FqKbqx2T3f3bsE6WmDVzwW5555PoU8UX3YLLtbBnGGGSX8o4LzCPEwdwaAdEpr6iEz"
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
