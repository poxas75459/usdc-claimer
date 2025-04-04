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
    "HAd3CMmz9MtYRvsJLVdv2aAL3GafodMNDYtePRDaqVBJtg9LagTsBC6ib3momoM2MgjSDBjJEDNAgsQUzVA1UXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uRRavjYYdiFEbDrqfNPtdvqxR2rT52KdDH9jXDdmv6ZGzDKXT62wdGYmS3B5WXDPwqTp8fnmzhCbHrNQ1xtWNDL",
  "key1": "3pThQwDXWaJuCsjPVjJypEvACthKtnBknEqrBZ6GhkbyfbnqNAZH9hMyzDkBKt6RtJsCjtkUUnLLp6sFzamSqGTK",
  "key2": "5tyLoP1b47kEcvURF2PUjEAonaPdxS22bwC1nwABuzkHv4c8J39VsptZFb3nq9hLWPvskuCdVwP9kQLVvbfjiTb8",
  "key3": "4r82r81p7WLzEYjEqBAZXAzZBPV5VV2vy3caJPziDrSa8XYdn4Kgvk4X27syBRJpcvLZddEUbSSBgFuRuce1221s",
  "key4": "4rJJfhhkvh3cfqofoZP1N7WQY91MrAxrhjzaE3HKbPAWYGFujdC5PtGavqjeqRSywhb3SuyDVR7QywvqGzBCDoHf",
  "key5": "4UNyr4bVioePWK2zTBaYRSvf5cF4AU72jrh9sndjhe18nVxY15er1na2SxiuxJPvs8PjrFVZGqrsLPXDS73gAcMN",
  "key6": "3euTYYWJmLKYD6jyC2RfGjqSBeUyDqcUMRVbcYo7ZGcXQwsXtsPBwYaWwq66qcHmT7vW6M8m7Z5j78186RwWNsBy",
  "key7": "5JmcyY3ZwiYaPdxLVDETQSwRsZhGxcN4EvpFLeV23NAH7FLVuU4EFWdTRpku4BKmB68LkpPbe4FNCu9eq67VNPPc",
  "key8": "2iQLzufz5MpS58uBA8NR4VbJNizmFuW13UA4N1xRC7s2tsFQSqsgoGDYB14uzHDgAwWRBhZp7bqfWY5A9NHUWwqC",
  "key9": "3HDKXZRpem1DtU66rkWJPyVgjx2uc1xwKMk8yuYVv2K18xZXLF8LyqZPAxCEssHMmFPWks37i4Ev1R54EN9qhyHn",
  "key10": "YiUvVY9FBwoMUCmgKCaKvvQLNXy348UHWiGW9Wfun837rLTqQyvmmJbD4E8u1oobdZiMDuVMNpe8rKN1MQLmp6M",
  "key11": "4U825vf91XZKozaFL7vmbcsdQV76BvC2udVNVpSY6cinzWE6P4W2dy1qReEVuXyaAfqwVWCh8qNBfGpM2PDYv2Xs",
  "key12": "5pVsMow5DAV9cQe24zGFkCz5UwB85usFrNNVjVATjgGixo4hzz9a9nLyAp2B3wzKBXAAm1gnWjn8AzRBLMANhDSP",
  "key13": "5nwDLrZodZdQt5EHmrJijRCb64K4Zo1jZ9YqZ9MGVFeiNNnR4ojxxcVctCyF9YVLU6BBszEfBgtAcyUWcztxvFQP",
  "key14": "28pQhRRMoDcawr2xfeSU2pVUcB3agvxeHJM6wfQfW26iw4E8jd1VVbkzKiiBUE6Nio4q1vCBwbu8NmLMjiuJy4YF",
  "key15": "dpUkT85hhUCFCLWGb6WeHXJpWZUAxLsXTDDxGyU4b28FZyHrMkrCcaBCR68mabKvuqKQ9bfnCbDdkciWCKapEK4",
  "key16": "4dab8KWMULm6LQRvPC4MfyuzWAbUn5XT4yxky6soQ5EQ2UVW2tpRgzoJ7Xswc2h751A5EWVLtnX4hUwGyR9evqSt",
  "key17": "5tc2qA8Xao5F59G2xhc9ab2FLrorM8VtF3y2RiVNEgnafoV6hBeLnDAaQZdkPd6SGc9vYpYeT2m1CLaNRjGk1jd7",
  "key18": "aEUDf6XPAMUrtF7cvfi59W36ihXWYnoQ2YzeuG14nbnJFMyNao3Sp28JerQLYdpMQRWwfLh8MCafdrnCugU22js",
  "key19": "2bY6biM93DDyDhXCoS1QuuyzE7ZdmBfj7V8tnxYqaYqYeKAx5sJ28TDF7vvVU3Q8h7uzGgXr1RmWEN5riao3CMFD",
  "key20": "226iuVyW6c8WwgqeLtAjm5rcnodoJbjjxB1akvAzrEMvwuX55uWUe6FXbbV6ESdtwq5ZUnG8zfMhYQz2MsSFdcuf",
  "key21": "2wwqz4nhFTBJS7TgFqbUYFMbd7JTdPdL7UPTggwLqmypbAceQV31irPRZjMNCfdvtdtktmkrk2nV938aeThF3fPV",
  "key22": "4rPg6urD6QRHS5wEBf3Yqmbkcso2RgDJFrt6XZrTXGqT3fKjNgk4jg5UJW994caNMFyGMSQCpdd1GbhUgRLcGZ6i",
  "key23": "3mQ96MfyEwzu1DpUETgoyQNGmnzFh5iPmRgvq7SRFrx57sJ8uJzyFBcFbaJVARRVZFKVWkn9qJFymSnkFDKCn8Xn",
  "key24": "ksds8EMx8aCfukvA4EMjXktAAxYrjcdiqHPgdyTW4erivkCYVngPFRExvn9EFo669HwH5SyggRKiyxxEHve7UJe",
  "key25": "4dC2Xs1UoYA1i3sJY7so9EXN1Kew5fcdUYSXD8tgPWryM5eHdJJiQW7MNwHMwV1xYk8p3J3mQabEQhWcb6wL6fGr",
  "key26": "5u5Nbx3s73AJJ9dFtV1msPTGg2Gyo8PxTzDtuA2egvNXJGmqF9XcoENdQrmbKb9rf5U2m4uwjL8yd89bgzxc1sJo",
  "key27": "511LqUTszQ1ZbcTEJSZuhNgt2LR6gx4Ld5EhBxHcGeAedGLP1a9mJxHMRYwSYDRMHZKpFqxkmysHQA76J2rsskH9",
  "key28": "59VbscdF6qYiQrUYoabsD3RLyeNrWA9znLAC2MmjxKk1ZsWAbbGi2xHESQ74PQc21arEdhpJJJdf1en1xFgSv6h7",
  "key29": "4r7AB4TsaBR1wQx7vR1jjCsbpfqpsHwvBu1ZkNCB9x7CKWYamLzbyozoBgNvJGhUBf6UyDLCDsXX8uW1PuqyfV3m",
  "key30": "549VHFiKkkkvY93Vh8Bzgaxe69J4GKc5hxNUXGLPNjRoAQStksnRtmP7MsLk2y4aVn7uCLFBtXFybvEAMMZTRUV8",
  "key31": "26jYd7RmBHXFAq3qPNgPJrU2LRNFDwchDxeGhaSDQJNwpcqV34dZc6c2FAymUmAebt5suwR5fLqFZjGZLvUg1Ta2",
  "key32": "63gSSnb7JRpSeLasycy4qXgSeMxgeYEaS8mzrZqnqnSdKWr2gtDMSz8rrXxxQxjcPR5pSLvMW9fZ8HnrjFjAFnST",
  "key33": "4eWpSSDiGUQ7NnhTLeshaGMdPj9x4XNGMV9THGVGNCG86a5q7KjbgznrQBeq8mZHUda3sZKPkLkuezyWeTcXLZ3N",
  "key34": "3LZZPi28ePmkd6NhhFHsYLiqPpW5HJ7b2RzPE8qBWjfZtJVBv1vtV2bXJpt9bboweU9xyYtsajyZKgu9LvXCMycY",
  "key35": "3ztwJsMFpPeZsGy3dvMWEwk3ScpcdQQHty4bUQ33a3xJhymXero9gcrgRQxSp8tdPFivATxBfWnrSQSS5iENkz5L",
  "key36": "2nCrHJBio19tpM33KnBoFLhj7BePe1gHtUsn6cyosrfGjvE7VGKr8MHeW3KrsRBuPVVDeyKvwmHiZtf2qv2H2Nk6",
  "key37": "63AVEfo1E5X83gaQeWVRUniuhAnKjFvq8EWTg63CpMqGeBfBmYbJuDGcSLzLJ5gQ2HJXNAN8vSnPvx9Kb1BxG4ob",
  "key38": "36fReiQbHGM2qYBKRQ6kUyxfnhKAo26F2HWA9uoyuuNr81BiFDRJwngvv4yAPSouiCtTdkuVbWS4rFJ7GFgCf6KR",
  "key39": "2chdphrAadNB2mrutraipAPUawZKYpSbL1n9GkmJzSqrjytBe48FWLGU1mb8b7YruQQMtkFoLiT2oHCju1nZ7Djn",
  "key40": "2a5r8ruGc5tjmJ5ZLRfhdTRXN1dDRn6iPszoNZTEf8ZpEbQcrNTMGtiVW4dtw2MvRFBqPYWr7R2Sxg88dy9mMpbu",
  "key41": "5dBcetdPNeAv1DAmsovm8wLVdhqkMaEY54HAMxLdWLEzpMUneZvvL8aa9di9rbEkojesDCTjhHg2Kkx8vTRQqhq3",
  "key42": "43RzYhWsjAMLmFdCFMurVxwipSD2g2pMu8oHd36PgA3SizHYkM96myVry54XDJiSHSMRc6SAK5W3h9akXWbbA1NF",
  "key43": "DGbPvNC3LgjbJfQNJiNvKzDfvLN25RAGh1hC3w66NzEJsdeSFHo5xGi1asgXmm6pCY3Nd7bJRRKN3ztBdXWBVKx"
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
