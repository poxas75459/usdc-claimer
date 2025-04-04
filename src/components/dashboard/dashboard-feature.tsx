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
    "4qhF9tHtAbSBdippnmEWuofSrT1t61t91voNecMoDGV68B8GnC2cMM1h3iTiNbKa3xQFgqzxrwgqdKjD4MS93Kht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mVVcJMgTo84XCDvSwZYntejqUJ1xHfukptXxMmiaYLz6KTyAVmqUQL8TBqej7y1nDbxk9zzbyuEDVMTVfTKqcqv",
  "key1": "5MRRGXS59GXMyvQjGrBkUgcW2L7azbVr6nNkfay1Tq738h8RBMAD7D852jxTmztcSpUjgW2i3brzRh1HXovEC2L3",
  "key2": "Zzefu62DY4Ae8niE37Ln7786C2beZujJug7w454rG6FXeiL4T7pQSxL32Kj422uxHuN8Ttbf4d4YWxJeGMLd3Dw",
  "key3": "5FXASYLt2wNCe5FYPs3Kw11wU5W2SbSmdR28YCaiy5CTBbAuZag5WtrQTKbR4NwyxwdhUikwhFWzVBfgy6SLaU7u",
  "key4": "5AHsLq17zjEYifZqfByQh5iXk7tEwwm2QbUdztndbELQQRoE1eGb3MRShiMz3a3BDzHFeBwJk3KamKBsoamyCUQa",
  "key5": "pZmvgF21w1Dp1HAdQaiqEca8HM3XSJGF6WA8wCqT6MbUBDjuW3YxnBBL9cR4b9TpDn5TrkXUQ7dvys9ymvj6cGA",
  "key6": "vQEDMbkVYrTKtixRwuhxvqR9tCvfDsWj2vw7Haz5oGq9SFzJfcLfcEBSupfMydicxg8GZfjmTWyefKwxjAnytXJ",
  "key7": "2R8C4EPze2TYvAe3utgNs3FVaoMpNZRQbFS7W5ypFdJnkFoNFvfwPend7LBYRqsz6VQP6RxsCXNTnTh4JS3P6DDQ",
  "key8": "3yNquS295yequPxUTFxVEwrXPmjU9HzHkHy3HDn9DxavcGR8aTzaXoncGo259hEZDvsTdHz5i8PxNUQW8RBMDjNk",
  "key9": "4GMcs5p8ccpMH5W7aofmXh6WW5iYSLdShzqp2Cq5no7cGmT9gNXiZvsCf1HgtdncT1vSpJPmHMDuDgTBVJrmcm3Z",
  "key10": "67BoZbzviygGwKymxAhapZukU3vDpFLUV4sYkgn9aEVqHKrX5Am8xHcYAzDzKZHaupY54rNUDCQ4XP6WtZvB28ih",
  "key11": "5AzuZRcanx4utsTqJLSwKMaJw5EBACDE9c5feWYv3ziZub7yim9AbQzamve2P9rMC3JLaaza4duBFuD42WAcwiPr",
  "key12": "5EwcUdCYARbCrDEN8YVDKdSf16yEYRHV6cTpeijgWZA9Zrf1zcxNnNCjHYoRJ8iQbxHwSLbsp67oHRZuuwsP23df",
  "key13": "5m95LCuHwmQpXjGv6f1b11ktBjhhagZGFjqAnaNGZUeJz5kQqVJaAe6jC9ttZQYG2QMdacotrutzauedrnQE2WcB",
  "key14": "1doMHZoY12qzWhwyc7Gxdzy3c38jUwD4ZKX9zNPfEvFmt3xFFDATh3nmj3YQYTvhVLG8w8XRsu4zh5LfjKHtFQ",
  "key15": "46DLf3cj2scZN4qriQiPkS5SHCentf9L1MHcrt7AL6A82HvLX3bLfMtsz2rLtwBFUtfszeSBo7B9BEB7SRtCUmcj",
  "key16": "2GnGdxYEo5F5HbHent5yhLc8Tppdx4KaUsSNgAaxrsrP4ZPWCHsHKUN9WykZnY3Eu7r1cYYdNkAE9Up3aR6Dors5",
  "key17": "35jCdGEGPXbPgx4tSrEJojiXra6wyvBeKTGYdoCHyWuu3sVMraDarkq9c6peNy1PjGjpRpPDWVMfcYFMVHE4D6rA",
  "key18": "ro499RTuQg61b5ZohQ6G5p8ypR7mJYQu4ATe3pWBXT9ATqiwKky61nQj9zqMJq4VgGPFynRBxQsMLHvs9BgRGc9",
  "key19": "2jnwS4bZ9J85yFzB3DvzYyjHLvBAni2pZjZXEsF86bGantKNb9v4UxCgk1XuEy4TSBEcERGYLvJp4eAFXZqPvtJc",
  "key20": "52ivx41scqR79DMxfcG5PDRCZhKXVjZu97MiAvVcR3J7UbnM7rHJ1MepPUycwPQpnx3YmYexgfU6mZ4zELkRBRYy",
  "key21": "2cLZNfEMHLip1DNwjinpxUB6JooL1AkZMNEastBRYbH7ahyNUtAMwVj936Z16tgzm7iGqByxUkuz1gUFkpg7qeGF",
  "key22": "5N6BCyfAnopeGN2jVGoT1JiFMofijcVGQ11PMV4VfjwxmLVhfJ13nRTApBZqdARGgQRfqH5CMgxJR8ow83ssrkWF",
  "key23": "3efSjMbzRyLKtZo1AvGuoyK2PT5Mz7LigUenT6kWi4DMCykE3gUZXLTrXJWAnqyv7PBEWZKBZHoRBBda31Ec5Nda",
  "key24": "ysLHQZ1uZBhzN6oXmJyP4Xyyv6Mq9sHSGpNCXgKHprKzmgcQnudhxrRxAoFMZeU4nn67ERdnLMzKLeAKcy1jna7",
  "key25": "5PLndL2MfuEdYqyWR8jcKF8kukYRz5Be1ZeoCZ9ysZkiYkvsr2U6Y2YzT98EFBML9nPk7Niucf3MFYta1Ld4Z7JZ"
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
