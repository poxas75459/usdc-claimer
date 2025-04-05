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
    "3fGP1NPb3WaCtkh1bjFYCQDa9iwKJtWw4BiE6iEhZV8jB2BseM5nVe2mfVURmPsHu6Hasv448YqZeshsbe3uyTn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51hzgDiixCDnVckBxWEe6ZjXUfoLX5ZH1FH6313wsoMQFQUV3nixEYLnaTtpdCfCjdaLHh2Kv5ghXP5kpna3Tpdp",
  "key1": "3pqfvySgAAR78KTFNXBVZnmG2H6wpPfGEYtZ3WbLZhAjAb94aBp2VMsdXz1NhKTxk1tY3fy7RQKeCWy2Sgf5vJmC",
  "key2": "3aFB1mLwqwKhMuUtoEycXa432B7Ljs4vb9CA78ZbGQ9A5Vetpg5dJQPmzn14iXFpuWMpauepbfMaHpicXSAAM1pq",
  "key3": "5iSYTYPVnnxkrWrx9eVrCXVJQwWciJjX1x5PZmGbCkgukLQMSnicVpg7Hw7p49RZSVqoU9K7fnFSqSmffUtwJk8V",
  "key4": "LDC4uzzZ18sEtcqM3BUdi75PqMaV8aQevCeMy5gfdXrAiZNULwCh1HwRzh5riPvYzoDTkL3ei7q1HFuXAMSqg4Z",
  "key5": "5yge7zCtnQqyp9j4cY99UxsoeYuPxcs1jkJHWcf27b1mnhMs7QiKPTP3nnvUj3Y7kNW6Sp9exz2PbUGyLptWGryk",
  "key6": "5QWRp4zTkJJUgLjHMTnR3ceE6sRAuc3mPnz9MumCFZP7QHzQTkogJStnAGnZ1VJ4ME7biKSvj8YVQPG39ypFNoSK",
  "key7": "2bidhnbKv1dsp1nY4ujmh5rAzM8xyfggLRZNukVn1jkTBU1JvipFAMhHsH9WppJHCtw5AiiHtY6ktpkn5ns2ggqq",
  "key8": "3StboNPQzPgp8T3Ma99TekMn5bJdZhmeDWQSKcRdD1cFRU1WPUu4iQbqAbvQKL53VeB68uT4TtZZjTjhEiALpQGA",
  "key9": "5bf3VPPCXxMN1yahat4CgpyUruzE15xNs9nTYLxHNjkyHWgf7mRozu2AtiH3cRejsDXQyKVCvkzL2u2GTnA11VDK",
  "key10": "eDa3sGAyWvNEdv8hZVN4M2pNoqi34UvkwUSog8n1Kc21iu4Dbi7s5MKChWMdhWEHvKjrjhCDUwvkShHs6VFuRTz",
  "key11": "4vafNG1bZJyXr2EeBPH35qddL3oaosToCSgbBg5PFieKi1WKRZbXgkoBByXmcPmnsYzuNtbu3Gz6RTTFggDka9jj",
  "key12": "3GKGyj6xqyRxhBQU3JGiuYKjMkJKZpJj3mnwCGHXujZmzu2j28LAcNavm9EfQUH1VgdrGR63ZKyjm8KUnfBLx2mi",
  "key13": "3GTy5vXXfCR2sE2nqFeNPeRD3EjCFqqHGLCxMABUTCAakSgH2Mx3xJ6YiNXVhUxfBeVBHD1GKe4Se4CmUxy2j6cL",
  "key14": "5XNK7zHFPN4rSLw45g4t7FhFi1A7S1TesJp9W4hdGh3dR5SVyByFpYfGz1F41EV8wGdhjDqSvt99idQXkJTiBiXh",
  "key15": "3utRjBuMg94LRBK1rjhdNZ6wafoLk2gsdTAmgbNWDSu9NjMrPNnbwUjw4KKtYV3gYQcAVtk2TwjB4L4c1UauayTx",
  "key16": "5E7VXBKaxooSs11axWr9S3LQZAqG4sbQf2K619xbnacxGGss4FJNsWWGz8fq9u4jbqD1KY7jGAQ2z4mGphVC9M1R",
  "key17": "3w9gn3usTwmWDon1SHy2GFNtuzz3fBhqHg4BejNtPoFCSL8WSyvRQfzPd4FyiHBsKLs2N9V5bAof3kLV9KGFprRZ",
  "key18": "2NoF4DNTkJm84pipFvpgZciAmfpiJwtK38XzL6hafs2hFrxaoHm5hSaM7e2axnJiudErENVpgYcp91Vj9VV9oQHD",
  "key19": "2KJJEo4Qc3zqYBxQ6AR21SZPpucexS12iCQ2gJXuvdJV2YTEwydgYMEiJhzgksjChUK5tJmchEpsZoxt2qNxjASF",
  "key20": "2c8ZAkL65PTv8WpyRvv1q2C3STFAFymFCS1XrdHfB3Q8s7zTtisdHdGEXA4Rc1r2cSqFFFxksBSfU3fJVszHaP5N",
  "key21": "3FN2n8wP5FErNf44s2pgtxoL4aWBqhMmmC8auu6kb3vWqTxN44xww647jx7yQ326qC9kDZ5z8DgcioVL4aFB7MyP",
  "key22": "3vkdEuZos34hahjb5Pc98ghj486QFCqaBnGgcJU9EHd6Stnxx65AyYtagK2T1cVRg2A8iHpFVm82JAa5aZ9goHiz",
  "key23": "33aoAM1rFRs98rN5nKnoaSX93EDytAergDEm6XiwT6SAZX8aStn6ZMvQuTy3wiAwJteASkBmMvJ2SjmBpoUan2CC",
  "key24": "3757ECeXB9tWUXdyAgaVtVaNZBzMjhvMMpga9nTX7dGsu8GShKA8XeNZMPc6mBcDp9AigmmYucZ8g1gney2kjfUR",
  "key25": "5VouGo5ctHojEH2xRkTfJ7wetF7oZxotWQjTxL4GD9dPvgzY4XktJ4Jpj8ADUYt1zfrsxBGAbRvumYNhE1fWhATR",
  "key26": "5DvjEUZGxp3Xne2wDdhH5YWBpUE2k14i4VTjPucV4sb2U6CaBzy9a5LTzMFGXiSpDw68ab4GJypUnhQ7BcVWCtH5",
  "key27": "5rp4zFNswic9keMF6Gw3L6fZagcBG6Y86WsFMdQ5mBcRuyKssZBgpiZZkh2LDHLKZ9NzSqdUxSGknteCejCSmMBf",
  "key28": "9CmHeMoPeS5k4nTweYZ3HKDQRvRPEYq93sigoY9s2f9SgZKZwstzVg9YjgUPXoNzWocnpk1uu4KqGfY2JPRLyB8",
  "key29": "5NJdQHvnrGaaixuwaEdqQEfaYAAYi1oo34N2xmJgoVF6LK4oBnjyJak4jGAqwjEPFH6dc1xKgzzac2XwCyfegvFB",
  "key30": "2z1rr1uHHBuHauRBx75uQp98Rr2egFnMJMZbcwBLx6aJ3aPBF1zyvShM7TcdeTRbDaK79n3yi58rQ7FrzFa17Mn6",
  "key31": "3WTG4kTRtFMSdtmXe7Sz6U2BrHX2VYTCBSSWuh784i6JHiVGkfnjvE22k7xMpktH95bSxkSM8vJU6qSurQMh8xQF",
  "key32": "5EMPEgm22t8i3SkrfXvEAcd1ervTe3Nw355dediSSC9WDwfkzaSBx3worXc7hs8kuDwBPTopNU3RD8aSX4TDxhaZ",
  "key33": "5GMJkdpb6kNS3irgZyXz1z6kY2q4nc6dnYdZM6VRmnCiMfcbtPCUemjT96gNQrjkrDPN5LMsV5pKmNU6E1RhyKD",
  "key34": "5JGiZZTSZygkbLMfdWmd7Gg484Ftf2dngPn5RsCLoAXVTenyTKE3K91gpSfZ4GTz6NgMFMrgVRBPPE81RXpCNzd",
  "key35": "DbWreQjMmAYSuTUPYZ9FSrk4tY3PgSccksysF71RGsJ24dLpbLGbezwMhgt7Ecze3KeDm7fqwt1sUmG9iudNTdo",
  "key36": "4RK6YVai94zbEcjaUaBQi8ZkoVQjWPqsoAwKP8XrWpLsJAQQN2t8oaDSR6NGFNqGswULjkD81BMuc6eCgKVnL4YG",
  "key37": "223cRKpUJNTdzTAfnPvpu7NiFkhPFfudBuvPKhu2J6FcWgWY9groADYFdmRb8wgoqhd3CNdqUFbjbf4mLMtdpebM",
  "key38": "5w6MpPm5gGL16PqLMUk6q8jcJkvhYC2SnFsUFZWGAWy4S9GFiJMMijHxmsSTG7F9Z7VX9yPKuVh7qp4gmsJBf7eT",
  "key39": "2BzmGCBaAwAemZXtZ1HWVrcaCLDrgvGGERHhRdZZnodkjzA3VGWk6F4YGvJXZDghzPHT2rShz1qkDUQcF3q9KFGN",
  "key40": "6fGKSZAAqcKK82F49gxmHGVh7gMamRqdHdJDzisJnFazHsZjaiJJyuJoiTmdVuCZY1DweR5N6cfrrcX4GBTLrKd",
  "key41": "5DTauyCG6PVR7hvKo5T6jRoowM8qCFiM7Ag7PT8pVqgWen9eDGmEDBXjhZ4JbUZkcQw6yAnQx1R4btwMRSJ3b1Kn",
  "key42": "4L9FJvnGXZcwm6S7zdEHUNh64pZ59YFN9LUPovQ9hH3xLMG9MgweWZyeeDGysrmU3GZZZjSWAPZxb3cHqGzdGoiA",
  "key43": "mBwCXUPXhCAkY3AvfBpNdwZwbHht4DHMuLCrYPTrbYZ3PZtwuRnR7pMVUEozmDxyjiJBhhJQZvUDVBfGoY8hPA2",
  "key44": "3cqGtpdWxoCqzMdtDwFGoAn7PyfEcFRmQvnbsPehUPrYFDkXNY7nCrDHXFQMiNHEPFBW3UvonbihXtoezJaKSEFN",
  "key45": "yYWpJWXxEbg3tWS7eMGauMFxVckQ9bCnWCDZJaXsmMBbZnGNh9MegVtrTYB8cKpBpRiVaKyjphidk49M2w7fAtw",
  "key46": "pAiTH133LDuzmd3HUuEtHg3ZSj9ocqmKYu5AgWX3wE67EiFwkHkYBnyacfLqCKa6BSVY6kHawCdUibXdd3wja8Y",
  "key47": "CQQ7sQzMdvDs7LbYh7zvrGwQPXWc79UGR6rUJTqxoPNnEqtTveuLD2SxpSgk3CubfPsmHZoFRaCzVxrUQFsMgWe"
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
