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
    "gR2ocgrFYLw45NTrxx9CS1EgM7hrYinGeBd1QyCjuo1MJ3BeVigp3gq1X8UQoFir32hDiTzsciByfYBENFcQTuQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gEkECHAKpVYTWMzfPCYpwDM4B7PCdk3eFBKcgE88wzDp6S8tsLgAvgpcwTFnU3VrNwj3wb4xwhqkoygSPBFfZjd",
  "key1": "3PJpD8suZwuYGw73KuCTpMChvqYHBqEJWyo1deudNfg8KXbwtCj76cip5gFSGmfFacrYBWPq5Q26CGfmxXHnME7c",
  "key2": "raLptJkmZ7oj94MwUKUzje2Bk3swx6ZnZsCQyFHcpQrzfrZz2cG3C3jSuwCCqi6vcFhdeY6FbdxFoJiTgmjRuxW",
  "key3": "5CSxh33jLyHnDDTVRYEkcvK4fek34QHsTwVJ27wBjyYAQhuotuDZs6zsc5PkPZHYvvhLdMq25Lu3ZPaWW5aUMwrT",
  "key4": "3CsAziNJ8u27hYmAAmeDrmNXLX5NMMAxNp3coV1AFXqUi7M1cSrXt8HuBsW9d2C2BXyzHExpn5L3AaFqAHFkW8Kz",
  "key5": "hTyfXVs7Uj6A3Zg94ywVQRb3oysRiC2dqiLfLxqFtZV4SLUrPqAEEEqg3XpoaqDzCARWRKAZ631dUpwuoxUi29b",
  "key6": "4XpY8eKv95hgQBruaNFJmgVju6jKMr6t8Nf4VU516ojE4rari2GXkD7rY4wseEJa5wwVyE8XVTSp6qwXHe27QMEh",
  "key7": "5DHDUkF9ERc1sZNnLqqgztnZ7og2L7F8HQPh9eKx9vq4zt5Kz9YSHgB8dBPd2wgrnw8Vv4AryxpJJSv4vScdNstK",
  "key8": "opGH4fVatDCys5JHuCZaSuUJ3g2fYtPJjdkvABFqDhmphsEzyMRDbVVXxLGxBd9EjALHKVdSV4JW4cJXUnnj5ta",
  "key9": "4SwVoHptStN4vdRc8erErEXDgCCPwMe4BxrHnL1E8aGopeLvcu4HDSb74SAC5xUtgsiCg8xynt3Q6254wJZv4R9F",
  "key10": "34EASTw9G5WooLAV5RsL1iMfg4mVtUZf5tEqMCjghatv6Be7qRnUjYvPnHqQzZPAjdUnDgfVSj4Pdax6PBWAauoP",
  "key11": "5D6BAy2NPnK1QGCdGbheVrZ7n25yR4GhBACeyzR3PcXr8qHX4Kdr6Tn7i9cBn8BticsbhBFdJ19SGqWsZdM5yQhY",
  "key12": "2ewndzC3tWiUoXn2mV2scLZckLz61PsUn7oQnUbgBwH53Yja15WatudPy4U4XseU5bWxboPGrkTzHMwj6TFAvCq9",
  "key13": "52R3cz77zK4UaLymzebgj8EuMMWgRMRfCbLfL8F73qUF942D4gi5WYbfkR5sjwrRW4Tkmb7U24vc4A6EJMZtWxD",
  "key14": "jFWsoVFezVLTocNdk3o4GNmJKdZhpom229pKo3DBuWhYBwZeA8icFYfNqXYmxoQvDE2N5XVQjAtQML7CDvht4eb",
  "key15": "3brsVpdaCKD7vpa393r5xyNpW8362mG9HBcKXLvdQPejzcoLnFre5HE8cgGbWvK2qhhFTSMFVfZpTgNjLhdLubU4",
  "key16": "2vdUm4QxqQWNs3pp2pBMi9nXQHsWXgtPQwcuvbzDeWQYBE8Ym5AhWCMMKZiFSvmq7AM8cxfF7oUbi3Tevhiuu8EE",
  "key17": "31we3GTfME2mWwfvGySFuGrtJrGgpApMKQfAFSgc1UbpaZVqCPNcBGgN9yfNbyfXdXGwNCgM3apQNB8ff16QmhWa",
  "key18": "2pykh1Yo6zHVp9CYnS4EcHnKTWQTBeN7AYVUsJb5kV1JJb2ACcMMWxvvC8LjusAioMfa8SQ8dhUK7QTeE9eobneC",
  "key19": "4x3kMmk9u9xsTaQxv6KMDLGsWLtmdoG8fRa2bztvWd1f7s5FzwFFpTHKHZ3xnUwiXcgpjCgp1x8XTRfMhQZN3FwY",
  "key20": "3rdCThquSzb1Ssiz4oqcKTkhwxjEKrn1BYWfpGNAzyg57mPk1cqtzeDYj4uLKCPmmPfhNfmkcF2wDVp6XiYcfYvG",
  "key21": "r291CRByTeYup96zRtGp8tmF4MLj9gkxYrsCtFn3VCWVYJnX4nrFvBJu6ryFTA6iWYVy9uGk5UYK3y79z2XZx6c",
  "key22": "3quuBw9Wfxu5YyD8a5E3VvWzQ2AjowQ4FVMGFSosQMckG4iMDZQTuzUiQuCqdUDgY5NpKavgFpf6yBBNX373nFMt",
  "key23": "53BC3sK3QmkZTNHXchfB49Wv58bKuMyeTkmR1ZSw9WJKQJs962DnJcXV8D5S4t7svGMVNZe6NXsGv4zKH3Pb5r3i",
  "key24": "2EUKEG5fFzcCC3MV8jDbKGYZC57hLJ7s5eM617JXrDCFUPfwDYvkzXrnx9iSCzFhe4VWBjpCNTqGQpa2txzNKQVH",
  "key25": "2fnotLjoSdfWAmmcxmhLjDQbzLKzpWD83cK5a4u99ersstXppv6tQXmFP2GgXy7fYhZSaeWVPg35UG5XpvBsnaJG",
  "key26": "3AKy9uu6dVC6nVsfbfAHgTHRBJtQyfKrxMiNjPLEQ8x24tfg6p4QTBj5aBDnbcHwKPXHuGE8aTUHBJqpHPeRriHu"
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
