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
    "3jVBxCVCQRbbh93n8q7JYCjLoXJGcvBVbdJnu7m7AJM3bPNafJBSUH1i4bDSjffrHMMWDzom52iTbyiz6oNJ9ath"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vUfcFKc87eTj68vToZYfWG3qyyEL1xFxPArhToXmFFgKDrS6ur9U5MnaPaNdt2AwPWrZKXViNPYqUMrJXg6GCkL",
  "key1": "5jaGCDjkf7uqcueLJbeEdVdGgdJyp4ycr97pGAncTQDUpk2d7dCXMySwakEXJ1UgyZs24YdnHDdeyXzvhE83Cn2N",
  "key2": "5pV1uza9FQuSovvNVcNyE162f33W9R3mPNjUvy3Z7haqq5asc7EVn4enoKvvPSm2x9wNbdTQsTXHGawQADf4UxES",
  "key3": "3mzXMUySu7Xr4Q7urPiW59QHix2mfxKGnVHx4gfN7b6mrp9hs5HVKA3mPrJkTeborHpQCasEm7Qr5ZqA8a8Q49oj",
  "key4": "5VdkLDdoivzZLy8H9Rrhnz2T1aAwK2GmCsHEcr8CCUQndpAhBinkCFxugwFjNDfC8XNQEatDGsVqNAvpzbUHkPqH",
  "key5": "65imq2DdFB4nne2WdnSmVdumL6L8zWSyTarHtZKAjjkjsndr2cNq5T6pUgTQSXkgwsoum5Nqfb5wFHTrGUuwqCNV",
  "key6": "5iUZ8zYgoYpN5bB3He3ep2Mh2u9VHTCSBEF2PFZXJM3pQAnntfMzBptBuYWoDEr1589sNsLvjDQuD1qyxktvMTY",
  "key7": "3YXohDyajVUG5P3kzY74cATEai5SLBRpbunee6uLjdrpkPXPBAXsP4vQWrNPo4FwVrvKVPSoHCBjrceM6t3qTu7m",
  "key8": "3EXyCdfTDEKShCj5tccBUXcY3WrFw5dfT6RopzZJL3BEXSxequvGfTg5MpsZt5KMetBiDiEuRwPQgP58Gqm92DeC",
  "key9": "4SQNPRZw7u6KgPgqVCMuk3SUUusBecppmD8x9QvxXZV56MnemckXDcKy9n7oD8LU8WkgyvRP3HhsF6Zt1QxbvZeS",
  "key10": "4Yf8t82avRjbEMrikFafEASzaieCULdFng3QJdXJmBp5o9tgbjcpHrka81un4vdj2xqkBZrDgLU1kmRedogEb4qg",
  "key11": "5FhRW4kh9q5Jj8maSdNqtAQXCF8FosVi52bQrFWLS2Era1Le8vFTjZwqkPQaKhbqcU6iRuq6kg9zaJ7A9SVrZQtH",
  "key12": "3jo8GruEDVnbsRWsHFTTAAHoXHjw1GYwS2qAKttBn4grshwMJmeeS6b21S1iF2wNTC62zivxf1yWWxNym5k5UvSE",
  "key13": "5LTvPGTt2HY5vuEimB19N5CeXxU86ZnzqVauDYkDTHy9CrRwSbxAXBQxVtud4xmqMD18yxtdzhadckbt2Ucp69WU",
  "key14": "2tNkAdofzParZ87XH2xqhJwNeCaXqzue2juTohP2WbNpSYRJwA9S183ZTKJLzzJTgCDcbNEDeuD5C8aqpDifMDiU",
  "key15": "2Jem24B1RevD9LbvnHhRoSHCco3W5aL26KPpWrLuVfELu295SHaw8LL7gqwFhDogdNxe5E4xMUSTTiRnWZMsSiZ5",
  "key16": "4wSKZddfB4Sf7yqLumGGtwBUCFaXBX8GvkVCV1n3Ay5EPcFkvAU58Qhh97YFXs2j7TCJKwViCxhh4gdD5NHdi1Xx",
  "key17": "3h9MZU8dddtKZ8tUb7is99eFPbdMbVLwwo5e4HHs8Nf3RvXCJfgznCvTHxa1Y4yp77UgsLiF8wt3cid3aiXUz52k",
  "key18": "5pVKub9zZnYtqnMASp45o4wHdL1ZswuEg3DjynkyxzW335TRHYy5XvqJMxK2y395sfNGTjJznyM8uJ3kMoZQLYco",
  "key19": "5PW3mXWZSeT6CHn7JaBx13RLZcL3mz6JEf77VhU3ZgWzSvjZXpjDZWY7Mu2DdbhArjtdi9dfpSKg9L4Xnoartw5Z",
  "key20": "AQ2VJYmVFWQFQYu2FePKYqBc62NAuRkrFA1RtpdpZsLKFw6QSnkVCB6Qbwq977aJRJ1AA6TCHF75TWyZ8KKX387",
  "key21": "5bZQ6g7XGJVTavSFKyeXevVvciLHrehcSr4Fc46Ya9bBkUHM33nDgxSG9nV2iRvpjd8RHWAGnQYbMM4PZrGUhrKh",
  "key22": "2PCWVGLDUaNX8bi6DQfoS8wz8bVuiAL4ASGPPYSAc8x7LBK789JceU62QDX1KAEHGLYzFUgRoCs5Uraj6Zj6cSWQ",
  "key23": "2znbDuGqnt3F7evu5HEjWxExsLK8BbbiKK9wABWAhciD6zjt4AD5SeUf53HKaQQWHSSJk5Kwrt9LzHnAUw2QwEDN",
  "key24": "5jGZgCU5BJZg4sXCXw29XdFh6QUaj58A9b5jxmVNTps3S2EshHqR4PnE3RZm4x5RavkyHqJWeoDsyVjKXUjzPMtd",
  "key25": "HPP8WkVJqq4g6Tky1DtecbUPNrqhMeCdd1JBtDYGqV53hAk3q8zyZF9CZ6sG6mmraCFaZDdeZyz5EVAyMmJ2hqV",
  "key26": "35bNhSLfJWcSa3xdZXKB3Q1TwutcwAgFtwPUx3DVfcfToQ8wEP1x4SFgymm8MWXcxdi7gd6Ci2eXGra7hYL8UtWJ",
  "key27": "s9Y8vbcWAqh5BmTHuit3ph4PbV5smmBA1HS5c3KxjEUB1R5TEqCnQ6JoLBXfSrrjP6kkG79qcrCpRLtMWvtJTH9",
  "key28": "3qeNDavb4KoyHFWpQK2o4tBjSthxpg38YvH93DxxCQWVZbiYL9tx8z9hYUYqJ8jDNyJjEh1wQPrGu2hpMiLhgWTu",
  "key29": "21XD6Uno9FpsnqTzSmByFrkXK76z6LVWty7zvB5RG7gt2ydYTwDoHTgKfH8VuKMUApFvuNMfgfAJpPn33YieF3q4",
  "key30": "5MhdkhEDe8VNhRwFyVXVgqHgkWknphTT3EeWFqqfbPDCVeonKgPiv7LHWMk37hFJW8S5s8E591h4VLqTXbnyyBmt",
  "key31": "5aAwf2N4gjKtAr3yZQzqpRrwY9sQ8BfoKXakudxM6tuM6t19aHkp47PuN599R2u48JvQpnuifaroSFxuBGZxFt75",
  "key32": "3vWvWCRjvF6fjurFStcw56NAGfzsJ8zDvPRLv2QJCqswmBKL47rv7MGTqC8QjdAgtj1Cqcvkqzz2u8oGhAXRcZfp",
  "key33": "2ufkaayipENxZLLmUUFWP8den9qHH6yD6GGcMjqGzAtwFFFACjNegkenQepPZsBDb8pgPhMZtMgm6HLNGMkGi5BM",
  "key34": "AnfSBzaA7PjD9MXw3SuxJsSsoYioRnY7r6AhGkn4oq2CSqZwUmB4RqjGthjVMgpxZ8fz6hPPputQBVRiW3nYiyy",
  "key35": "22wM9hYsAVgFvL3KoaKwdfP2dP7WNiaKz2DRTt1VHmgYGc1XrfbJQ4qd7G72RM39UEim1WnHU9tfjGp5F3NYqDP7",
  "key36": "4pJQXfBsWLAFhKAraG76WKh6eJoH3YhzCA9yV4jcAhuh1CkoyzneMeL8u5cyt1565RyeAcnsBSzAuGGu5p5yPT4Z",
  "key37": "3FR4M2vUKJQiDZm5fZXpoXDeWyreSS3UjiWR1xWbFSNfGkrKd36um32t2cgWW4QXyxYehRzSZPZb8GtyZ1U8MAKr",
  "key38": "3gVThPFhbK4BZmeqsecJXjCFYA61YwanBRYDzZtTerKvu9EajUmWSRMdceLymRsJAsiMzpyYZdn9XGU7BFhpqusT",
  "key39": "3XrwbFWfk46SGU19ucaqJRLYJh7BGv1jxUSHhutk4WATxYQY5embrMFxn5m6sNc6rHjxdTNFxpQyLW1z8wGNwzEH",
  "key40": "4eDnS4ThPtHfxXBvhpaeXM1JFAuUz1S7v9x8sFBNZX7rhumQaWSGisV1NBkWWVnpL1Rkmv48RaKbJd9fExYqzQQG",
  "key41": "HY4UqhrAiL6HG5FTESNwBbzzhaXjVcgfqzXyogJsmuzn6deNhJXWbdfcCMErR2A23EARSVdURLbU2raVWZbC8kw",
  "key42": "4yGJytbPA4Ek5P3iA8frx7uLHoCSewSTiBLrjs4oTMtqiaKFA9tXmQ14MoSD7qgzviND6yZ9s5GNYLzc3jpyDPM3",
  "key43": "21QNdGfFToqJKNa2X4pwLHbvdBuiNAuAmwexEWxEUaLqbHieWnKxEeJ1rQ1d71DaUeW1f7XNgYwV2Rj3kuGirVmA",
  "key44": "22GjGWaAiu4FjzNnCKCwfyi9wqggP3HxNf9wr6dQUJQDJinSAv9Uq4WSQMvmYqoUMPkqsvQthHoEEFyzcLnvyKze"
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
