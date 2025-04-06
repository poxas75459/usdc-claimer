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
    "2pQxRkSjLP2f5eT33QPBwaAURecZMr1Vp5m78mzdbZAYEBk6xxYZqfX2QwBDpRrVABRTDWpY5zeFx2gLFbsxy22M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rbph3ZajnjYQXPhq26wTBnwVkgqVZrzm1roTsgSkTKKKcSD5Bm9Dn2ri8npkg4BeYYoAnfgs86JZTzPMzx1Xshp",
  "key1": "54JdU23oNWc2BEwgBSqdpmKsvcBa5iVqRAM1tKwsgzbq5fD1KTQL2KmH7NtxnQYzgdimFdTRWEbUbTms414MwF86",
  "key2": "YEX5RjkwABjb1YfvaN3ZsuejHRt8DP2kYrYnQZbaaq7o5R6vWwKsfH5T2VBfJtRFwNDq1oaJdMqtqrCZWDq4tzh",
  "key3": "4cXNoxQZzt4qkmPGwkLqjYkmmEPLo1HtQLvA5LJcscGNJduA9hJenqXuvMVKznuWHNpNjcU8eia5tcUQ7bKxX9Mb",
  "key4": "3GXuAbogR6o9c8KB2YJtzPs4uDWJ5su9ckNRdTtpFBFbDjq6Xt95ATBD463ExE5d5pZXV45U6XYDp9zt1aoSxB2d",
  "key5": "3PNhr5NeFBuAcGsp7fnTFD2Xhu3hYhM65c9ZeinPtsSCeAPeECnKkzxSwV68Uh3MpQ4kjMKxpn8XBC62UynTR38J",
  "key6": "3wU6npPk6uWqnupi15VNzm9tozbxQW4WgCjSfY1p9Z3vRtVYRfMm1upyevePNq4Pcc3yTDrdGsdp29y35G8TaNUb",
  "key7": "43UkVzvj2pKRf5mAb9to6QsMPqSUpehP3kjz5e6cZAcrd8nsZqEqctpiyZYJAP6YSKbRCYEfCw57e4qrs4DBpG24",
  "key8": "5Tbdxh6ejjPR5Ucqf5BoVuW8ct2zRFvyinNfEFpAuuCFYkdD9yHRKYPReFdywcqSEcb65UdcD2EXLNykoFg4PXZW",
  "key9": "2jaPXuzAgybXiGj2MjqSCCJbsVjc2EhZsMeUkD9kXuU2TVA8HhuJjbKeyj5eT9knmQ4tnRjynujSSPbyNdx7r7FF",
  "key10": "4ufpzfZ7nyijrZpvj8MG79j4qY7T2BJeJRV3jvN59DNTpFE1YFML9bXntzGvZQ1wQqGmpeqQ5VGw5zsNPR38DqNR",
  "key11": "Whujrq5JKPY27JBCn7z1GqeiqLepJWGfVRKuQxY1mcqb9ewSN2mX3JzTBTFgffXhvfs9teNw97QkXNaoGe9vFhK",
  "key12": "4A8qLHzvjVQyUEyjUkvWQqt3Xm3SPEMWxqs1yBZho96wTCy717NhuiqNYELvXdRiyoK87wyoHp3qm9Tb7pDHx2p6",
  "key13": "3RRQT7sdA3asWsDYCHH34nCP2oRLdUbiaLj6cZsMKpZE8tZzo4aZopFhBnwBig6wnSpwEVZ4WaqTU8xVimmHEMaZ",
  "key14": "58WdkJ1kERRwPfPri9MGXnDeMvJSMD3Mq49k6ExdrB6rtasnCGHytW58TJtY1edUVgcmhPSJH53pdqx5AeDsFHBe",
  "key15": "3N3z6BBD1UBq4tf3FrvvVks2Sm7QtxT5ii8pCkQJpCD9FAdHbctyxBHXxPWTCQJV5dvYYWFMybNyzRb4eKLKG7dz",
  "key16": "2Q6HDxgGN4vfYiiADEcX9zQurRqcPuvXuZP4mTFXQ8Sc1SZmBqcnd3z9m2F3M23bf5zAmN9MntWvK4AG5XxEQErw",
  "key17": "2QMmBXVMGderCbfXmWuix5TALwSu8VK5gmxTuVFSECXKZGYEx1JFDytSjURW7p1Aa5Zv7myHgvXug3dggp3kMBZY",
  "key18": "3WydDgyQWpCMMo6EGEMUzFwm685dxaPq1YagnmApoLNhMnx9ypkeYDgUyMY5JXjjnuA4gTKKCXqC9psWKotG3Huq",
  "key19": "5Wt5GhRHH7M48aRihyBkJPxVLn6Nd4p1YQocEcSWes8j9exHW7mCCRSKZf3uZHhh4F8xnG97Akex2UGQJggLYAWZ",
  "key20": "5WpEaeamUmXv5BEpdhevnNW9Bcjrrs9AnA47JT4GydzC7Jo1QndDcKqFdABuqrgT61M1qNW8vM45Zz8RqdwgXnAf",
  "key21": "28rvD4jg26u8cKtghJiv8Sa3MYhwrnvinh96fNyzuuitptSgACzM7e9YACQFXy4XxxUBgwAc3HXPNYjCDvAe2LQ5",
  "key22": "5KQG4YFkSKiVBH1no9Gy9n27QtBzfijU7vpT2XD5jSBRaozu2cq4CK7FWSXUhjv4KavrvHjZMdTog5AmCnKFysaF",
  "key23": "3pT2PM5VeXWXpiThZYSHq9XxqCrKCgZkcFNzDc5fTGDRKMvqK1AoHe6jKr5pr78QiuWKx5qbxFX58SaKSfK1HTep",
  "key24": "5gYyyU6DxjEkXDR9TUoBvBRodP6DaNfRsFeLSQhmCCT3TUGrBELJNwiWasBhS72xhESspm93aY5sViEM58RNnjuR",
  "key25": "yJEDeZMfy9dPZoAJHxgtbZ7KwLwpu6N823Xy44dY1rZ3ij6yyVxQiicnmCjurCHycAcv2rhfT8rzY43GVvGdwiY",
  "key26": "2GTFVhDzh5nRi1VAsYqHvYZbJmJLWGpNnHsgtXP4oGWReLHacPBaNFEQQYeVT2X9JLoHWWR3TUT22RA7ipJg8GY8",
  "key27": "2jLGgWD8kTSZrT7cSt7pjADSaXG699PF8GgFEMSuuL9qJcUPQwP18VW55teVhzCeG1eYRihcjjKtR3tTCw9DGk4J",
  "key28": "dTmmDLc2AnsUdofyabxDbPWwssdLgJfFY2ifFuh9pmB9LYertgGqD8Q3RMP3iGcAYLEeKfznvd4zuqe8RpegLQW",
  "key29": "576miHk7TpqN4aFahLVBj1gARWQGadQFKfhXs4uvRC6S5BgkLeWi8XYrxGnLaQEUVYeAPYMmcJ6GsVAjUwf6ozfD",
  "key30": "62tXKGuGSxnT1FoLcDn7zzZHH2rMkhbSKBuQyEzFSEHkiWEHp96Xo9xaHiz3wysP2vA4emfSvPkwkvFjYXY75U3d",
  "key31": "4TiGaSBAdzXeWQya7gG4mj2TeCxfcqvY6Nsj1Qiy1DwBinqvqcER9prPbM72pBGDd8wF3f41X6qEjcbq5SECB4F9",
  "key32": "4nr2NgynvybDL7QmAWXXXRsr4BKsVbxtrr6brWabNwXLy2488wWiXvnDP1RU7JdjMbZ2PjZDY92NhP4Ndq2AUzfu",
  "key33": "4MjquG9S7rYpLnC9JZkqK7HgB5WcdcTiLV7cVYVEPN13nY7UHadqnNcXYDKygCVrZcCfkC53s69hiXkCNeSTkQ68",
  "key34": "vrMH49JBNwunbdqyRNk2AaYHqHypiKhPuyCYD6zT2GraexhhADGCnfeoF3tAxeVz3q9hU5B1BdrFLNDtodAc6dG",
  "key35": "41CvgGFJ6Tzq3QLrpG8zrq5SN3dQ9d37nRqdr1Gy3kQM48CvZe5zGFLXPpjtpkFMhMsZaGnzYHswfq1vUqjD6Y5n",
  "key36": "2LuyYxwein62sd3zXuq4TW6YS4yUDjGLbuEcW2EGvkw9QBKuwXHUFdGcoRUXkdNbmoSe4tq3y3i9pDjfd399sF5S",
  "key37": "WkQnHCLHWWhtHuS5Zk7b9vFqi5gCYTEWTdPMVTFhCVPNygA6FquuGbMfe3DaRdk7jpboeaZAFemdJ9iu4DAFjyi",
  "key38": "2sX53tgqjWrdZESEhqoC8pf6TDBEco3CZV98csriWWuHAKiA5uFZCLMSfrcvpwF1iUYAk28XrxCSxxi1xMEWgLRX",
  "key39": "4NhuwHJLviV1RNRFjB2PxBpidshtCo2kuDsbL7m9YSLiLXkuJwHChiCmJrZebVmndLwNtYuGm4BGw2kp8XmvCY8X",
  "key40": "3Z1qQam95pdiujDCwX2Rvvr7M9LcezikaWFLkCjUDQGAMdYdBuopEK3JVGMfUYrtLKssCoqr5XjDMEytNEP58cyp"
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
