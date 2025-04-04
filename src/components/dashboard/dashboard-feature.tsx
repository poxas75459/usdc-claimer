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
    "3wcX2ZxjxRkE6jXXDz69pBqA1mZJEmLsQCppCbAwvna61weGtDsFvukgPpvPZvadeYMh1bBZFXvBBNDpSkFBNBNA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KAdh4vHRXpizceQfZYPXAN7pJzKUHMG3HK7r6fqzWFKgqc7BsY88FdNVNaGzVbbXkdxNgtNjykuDF4TLjt1GE8K",
  "key1": "4MREvmvb6zak3egkRco3D8FUgVSr9zMyfTCuddq7vZZ6KLWPrTcfTxeC62UVXhSJW8uuJKm4y9Xj7YiYng8vfBy5",
  "key2": "5WrRcFyPtVHRGAgtZneQHFAYtqYap8NPUx6PUcmxBdPaScBTk34ve49gJr4tsrdXiaWGz2irNrhK1QsLETEzyjGi",
  "key3": "2XWq41TTZfW4NGBFH1jMPYKVENPi7cXs8jbnVEdGexW8v2H6YWmLbBf3ABN9UN5yZyhfaxyoUPBZAN9ikxoPxKUg",
  "key4": "4Ro1QpMRrm4aJzJuhu65WoiMn22d7Bspa1LHfJ1fXKdM5M5DEzWVuuLAcnN6Q5nRrWPVAQbbfnsg9TehhmH9MZ2M",
  "key5": "4AGaZMXDP8aqzRs7ebMyhMg85hGY472uH5SmfHiHFyHgV5cNUPEjQTHanZaUA9oXLnpt7TD3rGZjcphw9BanVqRg",
  "key6": "3pkhXvGqaX76XzkAeD8tP33aVWA3P12eUU8QeQDBPCChkoB4DSkZjxWVd5H24YnsNrHMFMdbsycu6sMZYMN2WKxZ",
  "key7": "4FubGwB4WNaDxP28hHZRTwaAG1xScYU6Xz8RjiCWH8DghcfQFFwTySYvpSXY8ZXupXxqyvC4NKvSFmV99htq3HL2",
  "key8": "5LCf6PtKf6LLetszniAKS7bkg7a6HZ252kAFib5tmKopGdKcs7h5eGxemmB34xVC2EYp1fn7mBvZsxppXrB8jw7K",
  "key9": "5KxuUY8i1VvbRTpxkAwFU29pTL8F2brawRtEpm6EcHMqSqTVKvxXHKaPQbbF9891URN9cU9eF8Le1Ni5sAwdcoFd",
  "key10": "HjJYRBpBheGHtmJVbceaHNQD1zL3ckVeYWAKCUkr7gX5bRLm8TtgrvNNpGs1NKU3jNeFwHtdRLxqckqqAPKe1TW",
  "key11": "2jvyhUcqKCR5WKLYCcrakgFeB37JTQRcNkipoV59gjMckArDoRxjnL9Bzqhm7NVWyGDAnDB37UoUkuNAVqkNEtgh",
  "key12": "2aRfG6JbWq6L135TK1JHgvnAKBRtjzSqbA8RNt3cWLnv43tTBZZi6mJvf3VPdFZBejLG7tL1yr9ZDexFkBL4NXF4",
  "key13": "5Jnr1hAt11UJK2bVZrgqCzgqDsnzhh16YLUeesdMuN76Jjw7TZ8YDt1ShdLBbY8F32x6EKZ5U6dKAj9zJf9cipim",
  "key14": "PyCrscwtUWDBFFsrgEujgQ4UNLByDF8LqivJ6S7gfEJV54Nn6hF75aSYw4ZHEpnUJ7UgcjXeJibwUH8ajCMdCzA",
  "key15": "4jbacGw2bAUmvrxn1CSFZrgTJNbvgB4UKF4c7gEfKtqTTQqhfaoVmGfP1uDAcAGNYxd9HsdGM22v4yByBwaSQsJJ",
  "key16": "2v2kvF1SopGJsgmj1n9gbUaRYbegKTv9QNwtDAid341PFpmXsFzB9fNwDmS6eL71sKPhtS9WDyBzqR4LGEpt6sL1",
  "key17": "2d2n2kPon9c89mWd7J7LXvhfzt8hHUDWsMxUWSXBeKT9RahJzpUCpHVRrTGdzE2hJncYTR7QhHLgbY2EVwyVF1et",
  "key18": "2b9CbEgnWYnBrq9CHHwkBhaW7wmPsWQU5Prx9ZY65ViHAG421za8XgxLidfqtC8hootyaE5XVwFEvBrgDGWTyS2p",
  "key19": "2ueZ1iQ5AZrVoVDgUegFYrQKqsVJzsuDJNS4b5zSUZR1QemUmYCrdrAB4jLwkvnph6raT7SJis5boaogSoH7PEeT",
  "key20": "w3H1Gp7aq2dAa85NzZXA7w4Zh1j5wi4BA8T8STVeUqxtzoKujUrDw5yvT4L2rqMSzQa35sxfuS2AVDKkucnnRoG",
  "key21": "5wnuMRrwh93E9BKgjLuk1RZGQPbeDfmPiFpgVJEUPa5rngGCSTbUE9vdEHBrtiHixfS7UacWCSUPZUbyUZNo5zJH",
  "key22": "5ZMVrAGfX2LQFPQn6HTGQgeo94u1bmr1aQZFXwNozpF9dP71Rmgn66jHvGAoCze5j8fPTRx1T2v9rghWbTC3bYCT",
  "key23": "5LHJLkFpcPmkrcy4UspmqoicJKce9bxR7XeWPsu9Vwa3odVC4qGkR1g6P4R1WJLsZUusdVHSj4XoNgz2SrLRzfsV",
  "key24": "3XF5UttSqfDxAZ8Q5hJ2xJNYxPBCENPVMZaqo3QtKzExw91JXcZcxKiLa8dHpbW2tN7M4yMVpDJ3JTzanQ3kQrZ4",
  "key25": "4Z6tuYzMHD8VJbrE2kRgQ8kodioZv4tz1eoLRULFWqj2DgJVvHggXVo2VKrgDeRKRNx4u15ptE8c1ZksfovN6tDW",
  "key26": "3Vg99JTT2jjwwJSbzL3bFp2bJkEv78HSBanHWEmMvgSw4qUiZaLw8GdtdHStrnphSbF9gjH1oThXmy8EKCdrHLq4",
  "key27": "4DJvp8hq3pLoe5i5qt8Lm5rqcVYpgBJrB8CD6WdnyjgueZyPMYTJUVYvtBmzf473RNSqQTbKxrtCnYmdXwhHudXW",
  "key28": "3QLwQ8puhfAKXS57NWVLBLbKfUcAwRNChEejv3geKhdyTJRdySJpTePyG6PUCB6ZJmwGT13swgnsQC31iu5wBEs2",
  "key29": "2nT52vfGUbLQCjpG22i6GKLsugx27B1VUwfVPaRYrHQnZujinywzoWF67AbH2WVZHK8NibhndBe9pDGBrs3TU5HB",
  "key30": "2cTAHYsSGFxfg9AUpMCsw8pCS5vAGzvgzGUEb3iYRBkWmy7crK3nFFUd1p19B5RJLrd7G4yPgY6wMSQPyiAk514o",
  "key31": "3K7zLvbXzpb1RZpLCrW3YdMbwzpPw8ivi33fx4Bmn3p7scvH7icxeniurZayZRtgmGqisvf6dAou6LLQfyPZex5a",
  "key32": "54NZqDToixv8MiHN4irqBeTU2D6VfPt9wN7knTHrQzTyV9DLtFFVgT6FXVjUvB38XW18XC4ZzAW2V7DU8dp7Xvmm",
  "key33": "3GzPWCptZcss6vszPAnqt4KtCNC98MdQGscMNB6oaVBs6KBbJoZ2peHfmUSqEYP6cuznjCohPe2SiPwUivp4rz9g",
  "key34": "5sq2Z45J96U5NwAiDJkcNTfKMidU6uLz5GoTjhThvhSgKkxfV2QM5H2JdZwG79Ga7pM7S7aGCkp9FgnWHVM48bdR",
  "key35": "3umg25Xthpbe711eYcYh95N4Dj5rzGwe7sEcLpv9mWmQBEdhrvY5C3XBSJ2sYaHRvMLz4V4NMAMnUHTBbmo6QAVz",
  "key36": "3vSd6iFaPfVGNCdf2tZGNpMgh5FmFXUovMCa57keqvq13QN94MHA4VxRGUZaHUnvUwZiUw5YYqoV9Y8x6nBBgePq",
  "key37": "5BeaFd8zxeT74zm6agP2WccCZwX8qUowQuCJ918VvYf7khJm2356VZbcW9YTUTcezw7gd9sbyfe6r3Vb4vcs7beZ",
  "key38": "3Cdn7kcHf9E6mYe3ghCrWDNHaxBo8kXSAZAEpXVLr7tMNYbTdiFHYbCSZNSZ161k2wRfsYts79f6MYs5WoHLgJ9J",
  "key39": "4YGr788Q488JzXA1bDje9xzrniBteG1mmZWfyrri6fxznhvmbnpxPDf9X71FqhhVEE4wW2VsfL5JBVrDo9fAVufo",
  "key40": "62EDZpia7CTi7ciKAMHn4fQMdBZ1YofRtbCodtj3wDv8DaksATMUiRit2HXe7pM8tNLjgVCUYptBaz711XBTVYQp"
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
