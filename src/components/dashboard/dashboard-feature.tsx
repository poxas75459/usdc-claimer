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
    "2snLtAJ153pQzGgszcQw3WUP8mBzmMBpNWeQrpEzmmCm8URJaZCa9VoMdqSxZAeiyzsVmTCzzEn8qDormq3TinWo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XParmvNFJtBBWSHXtf8Yi8n6JeXJ1CbmYmnS2ewHs7wTpJcJbGsoajutCfPb81TUVVMm2PoAuXyztW93NSVzrov",
  "key1": "2LK95Fgq9iL6QXwqUfyJhWNCvXZC6wB88hiemBYQBPTx6n5fjymoTsNssZJiudHPthVfnVmb1pZSJYM3aZUQjnX6",
  "key2": "5af7xCNaugL6pJZ1yyXRHV1gdtRBw2Ey3SyZdb8pWW2S4jsmscPXF1WL57FeBVgibkRVDDtH14GHu7SWSCgEcM7H",
  "key3": "vpBfHx7NaYg5fa6Mwe9KxCmr8WUeKmxtiYcGWjPuxaf2PJ8ZivxxZtdeep4ZaSnT5cp7js7zZSctQnjQgcywQsE",
  "key4": "XbVi4ZfvqLrqf7JcHASGa6CiBuxyu4yEMDMF6rY66oiQzkF75omDTHAAVNqUMPytGvYXVD8JY5xCHxBe3w4jK8u",
  "key5": "vjXcbQ8CcDxZgpKdKMVwNqfm7f2Q3EFKFA3pcbH919hFJJfZjcJyb9TdJANpcUoSy6Xer6KoPG5xhgSNWqoiWFW",
  "key6": "4WW7Vif4uJ76V5J9bxJhECp7MAaxPhiDyYhvJwrPGdfduJUTtU8dmvbAc8SDZeronhf1bU2rZT31APW4D2eJY9SN",
  "key7": "3MpKnNrJgL4roudZGdctCDQZCPcbNmhbgJcEmskuvPzvXEXwXV7EnaGHJQAxvErjqyyQe7jXm6DvPqG3hbx3jPUi",
  "key8": "4Pi74Rky6W7JYjppjKDfnD8UxzzhSkdFe3wSpyi3vBQRGLVdyEECijAqUbbhojoNguZmDLAqmxdrZ2DYwJm9NU1H",
  "key9": "3Tx5jMGcMKvfXPMsPu3Cj2SQFy681YnhgCHuJCGfmGNV9pK59xQ4RTmWeX7xhzs3EKELpfNiXGFV16gWufN6C8Qt",
  "key10": "5kDKpFGfKbPGFZ6XhJpyqGBiZ2bL94NxTa1uBjAGSL9ByeRp1F3RMKnSPvAAcWUVjUrds7AGQ6WNFRRjU2X9yhgt",
  "key11": "5oKquDrj68YY2DpCFgVY1p7a2EiHn9Kms8h5Tp1ihmVUY7CEm5tDsXdgnHdaEDSKZgrY64Wj58tErKjLyBetexGe",
  "key12": "5GmvZkQRckUxYpKaQqzVHi7EYmxbEUSqec3GfhjW8ZQzAMjuRs2KhGtgnip4H6oBrMaipHbg7pUq3ZQybgSw9bo4",
  "key13": "e712naSLb6oq4ruxYvj3vdcYZMtXWoQ24mBby6Z2nZpTBY9edv6psTNmMJQKkCY4svrYAsQWJFWdrWipszBGTW9",
  "key14": "CeBsbjY1fe9o5doFWt5eQCD4TVDWQMm1WimSa6j2UPCEWkzx4QD7fnrXAvbCHg5aJtqkk3m3DxkeJXVaXR77uh3",
  "key15": "3yN81y9xpkrEhxhRyYtGSBep68tE4PeSTaYTrWFC2iBZhBC3ECnqE4tEYtcUVkNyt9KGdYP9p6SYU1zK8fEfiVjG",
  "key16": "3TA7CFUFn9f9jDwTnpPBd74boVveenKEMRpiXaAwwEkmYMGNmoa7htKyojm4d5owzMK24tgjZcZ6Dage5cR6cW5W",
  "key17": "21VKq5Ln44e8cgyFxzvfk1SCuazSuNDmJ5z9v2geTK5ySGj3p2YEBxm7H8QKxBKjYmXJKTCjB11CgJ51nAWtvWt4",
  "key18": "3QanTdfUsBYGVfB9uxf1HzKByRu16SHxPozSuXZQ8PXoRUdGQ6tBoPn7C1aZA8uzJWiisLisrPvxmnCWE5YWsdJJ",
  "key19": "2XjESgzWHMAqzumXsjrKfugtCBKbM1C6qTdee3iVRX9w6QPzk9k7AYaBuy362WGdQWdRJDKfBdE5LNDwd6dRuyLw",
  "key20": "3aq7xPnqTaPYiBv2RuWZArnWfiVQCAjmMmpDRHJEsX8d2AvSCx2QBfuMadqmnv1hy1JRuGVNtUNcaUPbDP9eA4aA",
  "key21": "bhcF4c57z6DR1nfpegWDfBFLC7DKvfVQmvR83vQiiTMQVnHsyyrZecNdN2BxZ9b8jLCJ3HGUtWBZsP75Z4jhSuy",
  "key22": "25SxdmheMV3ztw5y4qNgwYG5nfypQpccXgFAWbvyGtDiQhP78hMBVi6VwGcL9oPCkfw34harMrHaeChF86oJ3RQ7",
  "key23": "5HnMe2o8YtApXA7hyM6fWZExPTKed27kiKigSR8PczYAqBmx4DG2u1na9VFYa54L22bTkF7CZQuUnErjKcuGWkCh",
  "key24": "4nFUGCNQL4kQvhscCLKCRnqKT4L3nmP4zSg7TKcpwPSGHnHDxUY3UtEP3tAicdfrcUCMB2JR4chvHLo8MMQ5feQq",
  "key25": "srfSMmDeuATkDbV5gxWKtpLFohaW4fSdmYZpXC1ffN5hdWdGq6hkmxNT1Uh2TicVp4kTWYtGMMs4uAHNSuVpnUd",
  "key26": "4BvpyLxpkprWxomHT657VuS6HsR1e6qBBA2N2oJ4733NoqrVKkQGSVawCmrEWVUfVJJsYcwWAMF7mv5oYe5zLkR8",
  "key27": "4B6PgsKbvSRa1pd95aULTaScR9mwRQ8pawYsJaMB4xoyNPUnqmuFFk1bXvLntnvtq9ox99GtFmxp1WkEFPLgdNnu",
  "key28": "5dK2nVKNRKnciJi9aAyr7xpT5EfvAzwDgE9AvdGtCJoahxfksGjAueDvUYyRUHs3vg6jjV8wZxiFN3cBmRgvx6Vn",
  "key29": "5DnfPaLTdBDrrGVeUgJNRhTdJm3P9i7SJdQe2gCDs5ADhMhqiB3QnJXeroLEpWorBaN87KWecVUodabTRT2SvNbR",
  "key30": "JKQBP5jfiMU2CafJ5AfRr9jCf9tKiWKvzapCBhCtpFzXSV7pDskJjAogmdeKHhWzgnCDci9qj3mL9Y5WHWtNbEc",
  "key31": "627iQojYLRiSMjo21oAXNhVwmer2YBzo2yFjafS1QfXKynGCtjtPahHmoxnMBoxRRqr5WFt8iU4WNt3YmPrs4BA6",
  "key32": "2r6brzP15XZkM4m8xZuzURKM15QfDoNKmBCxTv4AYqH9mEwD1zMWjkjqxKx9ZnNwwxzKS8rn3PUbDS8ncbbQ6zQc",
  "key33": "5MTN4gcHjZ7Rpsbc7vW6hodAHPvRvubzByADWkgsKZnLRowRZxjXXi1tpvbE4EGBYNaBMugLHDJzrFmA4ZR2n5zv",
  "key34": "3idTpwQiiotSAWq6Zi7Yt6YMg2DWkGX6jChEwoxPoCg9ifEvFr12ZCL9KRY3rqxVnJnccnphny9Gs4GF2mStoRTv",
  "key35": "2Le2kpaZo97B9HgQZYC9WPYoApmLwv1ptn2cXyXsX1z2jtGkuyge9yvT9m2aPYfXn4au96mNrBEUBBJGFgz4xA1Y",
  "key36": "4UER1XKWYtRu3KW9R5Xundh4iqLvbb89drtNZcUfr2fW4Cqf6reFBAyBiRhZswEpAEXJdtv3tAopZ9YHZwPBU7rS",
  "key37": "3S7iQkmnCWxu3bdqVXYxDGrxahaZmMLQQxrAQKcYX9qJy19vzb52rfQUr8oJHi5AACyNBSAMhvX4Z4ZBFLniQshe",
  "key38": "55WZYV3LY9LFNroiiGK34PUJF7FX5bm6UuhYj6VJXMsCCPCMH1LpAk7FFdKKgCVbo1xuZ3dVZBkg2i8yqrb5hmRH",
  "key39": "8hsczCUpsh54Qy4HvAuQFofU283VmBknkm4b15aVtvAziBiKjkxKRh4kFSJym4WzkXms1nQAGPRJGjtzDwxVfbW",
  "key40": "2fFNzkNR2M818b4b1vdBdUiYY2poAmf1q2e4z54GbNENm8skJH11eVwtP3V56mt8a6B7YA9YSLdruccYr6RR4UCx",
  "key41": "2edqa6HDUDMnNQ6Y5ggkmijVDXnCY4nnX8saVWSrkBLiKD5wvzqQ36ooRD4T6USn4aG2UooqHqpwvPYdmGb484fc",
  "key42": "4iYW14s9xfCj1D4wB9kWKWtbJGhr7F8qiQiMiyCzMzZSGEVQhKhVhRpyo61P4rps5vFP6xYSk79QZX2qVKC2JwZL",
  "key43": "4NE6h3TSfxfxc2jjZAfaXDXb2iYRZEFfkxpNiyA5nsTuh2jbvarkxQEvefvq1dzFYEBf3PrZZjwE29QFZrSr8Ncq",
  "key44": "31LP51DKCK332erX2HWA3bhpZyueCqmMTMyiny1Lif9yFk9aVYZASrdVABjEiyvNemAm93J3JfgT8hwKxLyjnG6o",
  "key45": "4bEJaJfdeFKLj1Z9ZKJoMicsp4vz2CwYbfxPpqnejeLvYQ6Fy8d1mzSN8b2rEDpQTYGUWCaHn1wBHRcdh31Wus1d",
  "key46": "3QLsd7WfkjoW6cdBBwv4VXNVK2TFMdAYRThSa2j555rTHEaSCqyJYUZWdTAhZEWai8gjnJkhz44QoQEq6npV1FuN"
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
