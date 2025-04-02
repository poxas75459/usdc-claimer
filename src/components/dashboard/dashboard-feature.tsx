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
    "h6VTGoqBb2GzUcGMS9MkKL863xo7TFEGXxdcsGVswySHh9tiZn3RVbUKgxEs5buASnVUG3ZKVinPRKrs5rfT8Gb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Q1ebe5pmjfh5nuW52qKVesFBqBQGHvdvcpMLvmMsokW4KQhwjkUtUr3EzksTn1L6L6EYzD9CjjSEveymnFKYiz",
  "key1": "3XTbT4ZFb3EQF6rbb4vtqp6J64YtXVChrLwEBFmHB6aKbYPRCMoENnRBDuZbjNuHpRTViCK4xXo46RS95k1NrBRX",
  "key2": "2kZf4HY1ekfymEedbH3FfwjeCH1PaJS7fm4ZV3dWfTmJKFXjysRPrt2uJLikPwmueEHuDVvnxxrBaEPB9bb7eC8L",
  "key3": "5vhxzk2JpLB4hoba3RvbAWfHqDQcobV8SXqqapSJ56FW9s2SvJ4xe91VksMu2onbnGgdjLNWuNmHGj5PDBU63s7j",
  "key4": "Mc4c1Jui8HECommxtrDqiW9b13XZcX1zRwwiTbKE8HWxm2PxXUTnNNm7beQyFjjvBPfwKQjyoQg4UfPxxt7P8cd",
  "key5": "3G53wpoKbW31LhbgvgNxKh3GETGGQvYzqfLGn7qgGUK21KtMwaUVrBhaKZt7BnfMzbbxP8KAvEbpi8BvJtqcvyN2",
  "key6": "5jLigskrWyQP6fZxNMtjH572kMUNFmCAhXuR3rG9xNguRwx68ioUjvi3rkskHbWztBZ3GVsf8k7zudDUyEMhrBCD",
  "key7": "4jDGXdvDPXKQaiojXXEjLiDdZKbp1ecnzT9FdYnqZPX3NQiv2tj8gCiFPErpvxPTmvkL2nFaufmGAwnrkWDhNGEc",
  "key8": "4g6s3XAK3q6tQujEyvXqXbWNk83UnhhiCXkM7qcnHWzj6uc1N5q5sNMsvSCvxCgrzoZxgVJUgsCamhjMikx1HZXG",
  "key9": "3UMDpFocnQR9AFvsjuEvrWAyxqaXxwtLmFsMapjxbmGewVTTFSf16FC493SbtcAKRJz7GszbJJcSiFbfNNztPKj1",
  "key10": "LmjsnRcQbpJwsmkoEyDVZDATPfZ8sWVWU6aeuUoU6F1GSNhJrfNcb5aVQiuuZpUMsu3fwE4aNntwWj7KGwr9tDu",
  "key11": "3nNMvgGZvuCp888ncmETykUsATePnyQ64XxQb5TExz3BRRm6nk672F3VyzLSno78sq798THyeFVKfDbfF1SLQPSs",
  "key12": "2CyhgvP1Ek1pWxULKmEa22afwNgTyNoB4GRhfr6hhDByrtQJtuZvZwpqAh4VydUjwdWVwHvwYaUrsFFYtbwt666D",
  "key13": "58e46jWzjbr2PW4Md6r8WTqAiJEqFsQCqZUr2biVHcNksZtYSSASP5qZ6bk8rPe4M8HfH5YVH4G8RZeEAigWiTAn",
  "key14": "4Uio2727cVHo2QiK5FEGwbPbgFEv2QTV5d6MyD52nUijnPVydfkYZRuirJx1Xx7zQvkGqBx6QvLpM7yacah3pYpv",
  "key15": "3YcX9QmkZSJU3RZkzKaYC8nZvC2tCL7ZDmmmmX4NkVgFnsMJCrXMHbRVfra59e5UeDjEKrA3TRdYN8GQoJ1MhCK3",
  "key16": "3dn7B23u5FjZ6yquKoCxn92uFnF9Jc9errbRBwSGJe5snJY34fa84wSKfqm61AFdqj7Ud21gidR6tt3QQLKd6zdp",
  "key17": "Jax6esPtmZm5PkZXqFnRrcu6ZVbWu9TbUjKA3z96FDvAs8njVFEk7X7w8exoH2oCF3GZVerzojx6YJqW5d4r62u",
  "key18": "2ES2CLyza3djKYknwS8UTYYzzJerzrGL2YhmL6kd3tbWPZk4xhxjk9tf9aLZfDisPcezThCcDuFPsUyjkiBifpfY",
  "key19": "Bw4bMhLGyGs3ASwupXtPLA31LykmUEpFRxuZJCCnNHD36ySJFV5pa4AqRP6xQZG2jsAAPFKQHFA9XZQSAjEqwB3",
  "key20": "5N1ZypWdJ7vLoiYfKRpYcCZ37rKZyX2vMskMiF5a9knfFoshFMxVQjyBsc5TJ8BQ1Tbq9WH8XQfgd9TCxP29CoPv",
  "key21": "3TwEHHPfQ7GyXmUCcTHgLetxkzsK8frwquhbwNkhmasUoQuq6kWCBmRiGC3qT44risdfv4Qe6KxnPDTxFEG6UwDV",
  "key22": "3BLG21KZxbJ3NaAtA8gQ4MDiq1YdpsXK8B9499koVgeDi72zcAhtGkPgcjwjjRHMj5Wy1aS3z5PtxNYuonmkc8Zu",
  "key23": "5KNJoo7hZWShLybtYysCBuetDR8TSfBsMvtN9s63yVNrDyK5pYDwTABXuhqwNBmcLZkXoPGTqd14TsiKHvepoZFc",
  "key24": "58hcvqbT5RpEDaH26V85iUz3w6mh6nHLWcipi2sDfVfWxRKWbFgLdWpjJVnFJmPMQL4GfEk4Eb8PhxJwmsuufxTK"
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
