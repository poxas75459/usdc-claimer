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
    "5wb6hr4xrcJVQWv9ADbiXDiS9bq37V4riLL8ANYXuvvRD5SKwmW8S1VhrQLo1ERPsAavjJ2vYNe5w9aMHLXmdZpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jNphgQmkRMPQfx3VvfkVCMz1JSMmdjW9goMegEkpb2JTz73DDCDitvosi5rsk46LAhYhPUAM8U8LfG6LcSknTRG",
  "key1": "4VzHHx8Zs73xYS8nKcajBt5udcMupjFKdsz22J5BQ2r64sBiAwyNPhoY7guTfsS6GcNzKtNsdk4m72msCNXXPDc1",
  "key2": "nY7eEwiShMdGkQssgfKt9sEu92nvq2LU4JgjtXDaSFcSDsVbinn74GB3bMjZDzAPDak8KNU2jDdsBZnhhgbVn8S",
  "key3": "9XQN6oS55o4UwMHAiL1PVdh5DT71FRveyMViX7HM5LM1UFjCgH3obtwLdF2VbxAcidWASjaEf3Pm9A48XWzNJDC",
  "key4": "BXqzvQW2rzhxgPk8TcdnAbtTFB5vN5TbUuj3iXS6Jjp7t6nM5ttRGUAYEDg45nHoJ5ebz7J84GYt1qTFDG5LvFH",
  "key5": "2dQcYyHStakATxHNNDqvJszaoa517mqaeL5a9UksVkfvDuwPjTVCi3UHWvRgysQ5rpFxhxAbTxfZYAbFpyidRq4L",
  "key6": "3Mj1uZXz7YhgB4taMoxLX1tDDHFfcio6NcvduhUtWWavXm6cUwG5BkRpdPb7GxN2mk3RxWgYr4VHvR1sz3f3QLT1",
  "key7": "3fTFodTqmfCa4TgKtcGuMTue8vRoArBCoQ4h6gZ9H2HTUBZ8yNuPehJWTzD5a2y5pBAGpMcZmDfLiFsfsmiXG7zJ",
  "key8": "3a4YWhJjtzaHpzomb3vn5YgY5JPaYKQ2MUn91sEbWzQWMgM1wT62ne5ybZu8JpDJTnurQLEQGHTUQvk3WGVyfuvs",
  "key9": "4bpcmo7UPigMPmFdsLWN6PNeeWQbFqZsdEy1MkWUJsuGL3xgCgCWks63cAhnYT2vhCgvKSyRKG4pu5Fy5c32gv9d",
  "key10": "4W3L6Gk28bhjLevucdB4ntfZ8F9zwQ7wEgqomCP2a8677DhNgZPV1SES869drqNSf14HWKVmaEo4KqB1DzQxJiQ",
  "key11": "5k9MpsQzx6DisFi9zKN3Lg64X8ZPMNPsCNJBHSmU8GodJwjt8WbQGqu4nTKqB1K2hSKvZrLV8kDi6qxvHn67Jui1",
  "key12": "31X4xogpkRD5YmSTYt5umJab3SXoucZeXwVbYnYUgttTjHQuYWhkQFiuXU75HSam4gcGVh2kPpKmduyqwz7U33oX",
  "key13": "4SghBmPG5mjd19zFoGghUJXw2mM8QYCykd3eZAiNL64jxdVL2iB4BnkXJw9iyTx2cWAcyMikebAAoG31hv9RhsvH",
  "key14": "4PBMsHC2w5wEhtXeoJqeVbpVEqLU3FhPD88m3wmEUtAdxCEDEuSCM5tmT2Vh5N3oKaNCppVF8tvTJBxZ78KWuogA",
  "key15": "5V78Si5rxvFUe5YWTZWkbFxseTHDteCQYeNtZbFqRRgtVuQewGYcVDFYZYhSMPWTLggE3yXi7cNWURBdtYshHZJe",
  "key16": "26fCfjW2bcWXiwnMkDXT92JTKdJ6FNqgNSKWZpFw2UAyTnELmtnw7Lqk7s6T3ZRJLvmSkvD6uwRH2wGEQbSyDWtj",
  "key17": "dRfmqwDmci6dE2CtGoYnqqGthbgZAz1pzPjXK5ijqHGC1PHsQ4wooS2pmJWSoMRAkQVhRcJ6YgmsWV5GgZ7SXm2",
  "key18": "5Bc1iGLymQFUojPvd9S6D5zKaDEa8yfANY7i9R4niZYXwxiTK6EXpJdeD8EqUBLY515XuZFqcAQDGGG7DzsjFTiN",
  "key19": "2boesz7ZKGibig9GwL2bNvjNbTdouPaTSGYz4B73fQ7hoddrEdB9nMt85WgXG4BAjRSzdHfyq7tMenxFrXHc5VAr",
  "key20": "58u7zfaJtW7Vo8jcfY3grnTz4NQHVRM8PH9qzaX4YFct9TosWPeVbrnxb2RgE5BHxdy5HVPhYAbgmCoxQz7mrp6G",
  "key21": "2xmFNiNDeV2VULSr7P3Maox6hDkwYFFCtnsDMQqAEAuVW7eHwn7oHLqRk9GRrkeKJhLVTmtZAKhQbvhTi6qRkH76",
  "key22": "3kupyES2orNBQR3G95Aspc73U4ZhA878kGZFQLwiNUhCAb5vmLvodruFDe9PdUzaXFCDACkTmU98rNimwVCVMk71",
  "key23": "26rG2vPxBidYBo6VpWndy3VSFnGY6Na6rn1G6Cikt6k7ChukhUdEVEEnC2tMKYb3CFfcZUrqWNCjY2nzQS1DcDWu",
  "key24": "2crJHKYXWVXqqSUr7mBkAXL5x74uUjtPPinD99DCwNW8DPR6pebrUviEQiCJWRQZHTDKtcUDSvqHvdcEiygL9fpF",
  "key25": "4CuasFp7PCfBaiAjzJKsahwnUZDoPtwPJPgaBmjCp3vkUfaQgPqjkXDcz45sRZpTJqGFxhVHYp68ZtNsUNXKVhKW",
  "key26": "3g2VCHuDViGg1WPuBasu8gAR4zV31XjDZDAzmaKSeMxgQDEnE9t8MtiZrygLFXVmLaDaDLH9DxXqgAx4zvwY7oVW",
  "key27": "38C2G9g9GRQR7ayC3LeWY5hCCNb9DftW6sjthniy1zzCo4HLjrTUekdkm7nSsJWWeNs4Azh24RZFM4vS7Jqi1T63"
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
