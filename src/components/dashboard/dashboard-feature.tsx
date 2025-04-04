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
    "42VWFx1EWCHCbryLMD8CEQ9Cb8B47apw8XhsYFCfLf1PQwDUS1qgv6iSJNPaRTBQJQj6ckBDnoFVGAjK8fB395jK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JRpgqKu9Rkfqn8uJHXPFDXfMJp8zWPspJt8DN1nTPeKDV5ZUEBm1hDzfP33urLju32SbRPakPaZEE277W8WjcMF",
  "key1": "3TKg3jXZWy2Tu8c2VJKSa9Ub4e9MDmbQVpmiTPzxBgZepGzLhbnSpcW5u9rukCUzqEQJn9MzfBbD5q4EXWNtH95Z",
  "key2": "4XtFzkJdnngmnkfaKgqmWFfDHb3kePBhy6KdpJ2CQ4iwkavmUogkuUAuZJkekkHsweGaEh3zNgTeJmXWh572TEMu",
  "key3": "2Ryw6MHCWVrrWSTQ7AB9jqMG6a7YyX2t5AFuG33xmPFpHJbZ1c1V6MSLZp1HtSdD12n8J9X51vQt7Yre6U3ksD32",
  "key4": "5x2rFJCYvtXvNvhS7jyH3rQXxFmU8ajT4jmpcsK657iN2wNjfDgthoYK3nKtVYUZJbDUgFidGW7tHdZu3xEj7zvi",
  "key5": "5UQq3EHNvWdMipLVxXfRBeCTQuRrWzDTqiFfMYQHPssv45wposkb68tJi6Mv5gmh49nUTWQmH4JbF6jQcWMj1YBo",
  "key6": "3L2reMkaknMDPLdQ4hKWYWNL9YHL8e7BgUWsoNCBxbFn7FqH44UnA7paJ4LT39Zd2dXF9wxGa5yepnTANnGcVGFo",
  "key7": "4rJYhnk9cXKDDMovS1zThMMdJ2FuqLQhe8CVc3c2JnrLR9ohUGzN4n5zUvLTJ1d5xBMyQDLLxmjmZG4G2zuouYsG",
  "key8": "5wZ2NpE9XQGsjZEzfhhFmM5hboHX5fyAFCtAkrEaSYwoPha4Fe5tSAFJV2VbHUhdEpUwh7fRzbQZUXJFA5XfeD2T",
  "key9": "3Cw629zoU8xRiQjni9ukmeyW3bxkTMTQfAWGeDt3j4vD1GNgCHJyaKLS9dZobZkKn82w5inviwMtutfFB21xbFjx",
  "key10": "4HF6c9ADpvmWaVdieYtEER9i2moshhVR1DF1x64qNR86HG1HtRGUM3ZmdUpFZwXZWkFoWyyTHXjNB4V357SYSi5v",
  "key11": "4xZ8wrXrEyxbTqyjaYXcuQvRCC4jwx45JUsdTUCur3bNzFwb6odUeAupQzFdJo3vyVyyKWQzcJ7ScL7zXd2iqK3",
  "key12": "24HR8NzTcB9H81EBSRxREXJzA4SC7c2CJKge3sWAe88VaPAzkUGcCu3JJ5Bobk8DNaynEXiAhdtsDCQr7JZC38fZ",
  "key13": "4r2p1czom2Er48TL64djNseUHjqjbeqFyFQxeEqMucy11sJ3bqaEsL5Yryk8SNUrQM4z7eG1MUS1iqcYLYxbyjye",
  "key14": "2Rzib3Fdvvs63takwFmooQdaXWVSfEDG6ZRcEvpC8nQ7hUES5fPnnoMWm8jMj3Mwu86JYDGb2aZX8gMTP7U8zWay",
  "key15": "3mDz2EdyzjVYwB3zeYZP7BMUFPACbU2mJyoRPTrmUJR8hCHbSg1jLT6UU516gpynx2sqComUakhgNdmdsvaMutKp",
  "key16": "4HbwbTK7Cdu2TgVm6Ecpi785bHj9twykfyWFTnpUfJGQJDeiuS6mJfpqhKtgm9sFzPXSwzBKigG3PT9jo5Q7PTsY",
  "key17": "324MoHeL4mnBXfZ2Hp3RgtLgXG3wf7KHwfLMipZe5ygYPc98m4QFKGUEwsdYaZpJrjzeraBBoSWVKZvcvVcReaM8",
  "key18": "2bdcMyQHnc7zder1NsbeTV875xN9F1XrMm2aZ9BEDkBn4DqaNLqniTfn7PfMeHm3XHQAGjxEL5n59A4pffEQBpkD",
  "key19": "2BstjvNM7jcPfToTokaaWb6zGA51aVeUq7udXATaJHQSJusRTQxJB5taSC1oJiWWngEb7Vbcu4oWUgaU4kpZJpbF",
  "key20": "2y5akxJJg2Np9uLWpKsRfURNENCY1W4ub4Dn3DVDK2JUDsFDtK4dDd1znK8p2kjSUMGpFSTbfKWyWahPCrpAGbur",
  "key21": "5jBg87Ko24SS5o9CP65Pb8LhYBv8Z5AYKmg3UuJFsmzDyDxFCxrfXfTszr6TuQrXL1zuTMUDed5LioNnabcDUSnt",
  "key22": "4tEeQQenbuiXrPfs3B3XwbTyEd6TkVC7grwxQ6E4CKkvZYZgwJaVRGat9UojF194SVSDGc1mGp9JTCXiFnvvSdvE",
  "key23": "4iLTuzkoSP6YALCKYPeMX859AoaDGkVHsiKXd2zfz34XuQEgbAeRnp5BsVbB9gBUUFb4dboGqEWZEZj3u8cdb6yc",
  "key24": "3fjTQfmi9txa1TuCg9MypLrnS3dRfWavrszQE2hyMo4HrPSW8Myh7npxfDU9WazVbL9Jh2xz5xW7fnSPDRh4CgDi",
  "key25": "4JAn3eGAPfqz32ySBj4cUjSeQcg6Q9JVeAm6occFa2zRRNwrRdq9dxd6U7zaLky9HtQxKEKVm9gstkCRdsHrF3aJ",
  "key26": "94XGNW5bSRkmM2nDh9aGQgv5kU42NmfyYMPF7XYnMcVZdbDNXD11FP5mShKfdGR5YjX43FrGwECg95cwCkKd1QU",
  "key27": "5JUaCyFLDm1F9mqVYyzxK7PinabXc9L98UKkEoyhfYA1aV34PR7bkHqCSpBwnnotc3U1nLNNPaCrsmuzEFDcMZ2T",
  "key28": "afVkyBmhUvghe9ndSEfrerHDqFeywFCbTNY9vo7f6Uv7ZDuQJbbmgLwEtVNaRBmQruW4HqED6zvoUg12YTDbhQ9",
  "key29": "QRrJzWt3T82rum645RE5sEvapgixodMSLNiiSDsxMchbryQrk3W2rFDqWQ9zqJYKRy6fpG8T7XspcBLvV4YzFqt",
  "key30": "2oaZy1uxzrjH8mtTT32JkuBKsm6cvxKpkPZ7JtuMiG6DrREsbPsz8GjmLjXg1eNX7zCFntUqoQaZNPaZpUmp5cdV",
  "key31": "26Ki2M5hLjhAwjBFZUL8XJLhDtNFNrAcjiGuxFS4rgTzDYHDFHt3g2w6jrtgNnXvXMzgAcqAPieQkByp454KL7wA",
  "key32": "2FVBKrPREJtvL9vcr5ppXv47MRtMycPZtYL43BssTsBHD7PSLfxkFX3qZvjuVp7xHYhfWreGWyJf3eCQQbRkz9m7"
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
