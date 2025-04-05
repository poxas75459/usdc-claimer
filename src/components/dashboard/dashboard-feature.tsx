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
    "37T4H3TMfHZaA6U5unWoskDBd5mRjZZj91Hw9eVwp7CxnMZRVHhiP4eE7BrATXurSGogLWrcgFYDBABUNzhmBNGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sYVrvpCD42HBnHXy35e3CvBedXbNNmtbBpeAmGwE9Au1stJKxLHA7Fa7xwXkfuJdb5eUunu5jjzdkDHbjjDQj3i",
  "key1": "4mMKR3hnXsSDEzx6xXiscGj28JPMk279mGXfv1PaBHEnmfPqEuRDcd7Cr5LhgAZ2rRkR7AHa8pMtXYH8C5yE7R7B",
  "key2": "38KvBVRpFYZpXHxvLxqVn91mTeHcWJbZgvtqtqbxghgVt1mWfgkHBQG7wnwSpSQBcDyMYxeyFUSTvYrgnHvvt6pW",
  "key3": "5YHsDgXvQ5vWd5q6C6GwgRQHUw5LgmPbXTjfX9dKPQFhAyBfB94wurEKHJN9nvNgznza5KJpJhqYGEJu5gvy2VN7",
  "key4": "2CdXge7FCAMepc8VgzAdTmrLjVrsCUkpknptgt53dmNaX9jvycuUP1CSV3xPJMZctS5ePyDD1T4BLpHDwYtRkr9x",
  "key5": "4G4Uok9B1gmdmA94hdPQJLfiehXJq8sXoMiUgfa7XJDLSMmUq672GSmXYJLBTX3DR3iaTstyZyFvSkRh9pc7JWHa",
  "key6": "4yK6Tb15nTavqToW9fcmRLN7isBWx61W9VBZxWqeqwQBi34XsUjrPL4Y9mYaiWrMfuYX6B1KZxGZTFDZahbeDZ5u",
  "key7": "5CKt5SxCDFUZpjNV77Zi1CLtSe1jxamehANJWyGQRd2zjwocDVZXBTVoTG9AEvSmcVQPZFucLCdSgUQT9xMFnns8",
  "key8": "4dQYGQK1tkF2VqiA1y3BHneuYeHGVuLPRVEgZhvFWzLEos1p2u56Lxqe4ezuvqGZkewFFfDZWnm1eKo8PYPbyXHq",
  "key9": "3PqN8YYs44ybjVhxsT46fh7BZPYo2zzEZZxj8jvUnchsQ6E5kFHszK68CBrorrvcbpXeWtArdQf9j7R8rhSqxQwU",
  "key10": "2AeqgrzcKdYaAw5ZGA4V1m7gHKtUeSf84FWkYh4dASiajPcmcDgPn8zonfxboSY5ZexXUHR5kM7gisaYJ37u3pz6",
  "key11": "4QQWS7eftAGKKwRTS3N6ZGuKEAkYPQgyrPVCMWj8DSUXY7HUcLfoa5MpC36AtG35AEX5518DWEYfiJh7Lm5dSHi9",
  "key12": "3yDPHo1zFBS2rhDMRQkYtSxUNEKkNYVK3PRtaSD1cnq1nBoNV3Epr7vEHnRaaeQRyGFDzf5gUa7RGXJfkWAZww1K",
  "key13": "4cLNzJhFvZA6NMPGmXRRw1NGdMFp5wgcoB9trYBUVdRVvbN9neXswjo99t93mrxBWJFnoSnQAaSVYVRKSYRtPDQt",
  "key14": "3GWsRVmGudizK131jeCGfdPKuG62C8CViVcpcRTFY2UxfoRByzBdNhFWK6CqfMpW36E6jWYLswJ1JKaMYtkM9ZVm",
  "key15": "2sv9SEfNpkKh2B954h56nYEsYkMETxzkXbk9zASzDmQmuyrCtPQF9xjNsPSE6FRmwACbzrVG73MoUXPkk9hmMUEi",
  "key16": "2GqMxv4RG3XWkrF36xFJKSUMWdWsgpAnuegQMkiwovA8vCn73Zfcc6a8PDrh6p5tge8S73464gJEbi2kSKDWyYCp",
  "key17": "5Ppeqpnu3qnVmt2FKgVxfiHPuGcQvpR7p6W3EAyQ2v2EgtfASFN1wN6eFuFGbkKgkGMWrKBYMvTwNTrNZgVqLNqL",
  "key18": "4YbvjkxbzBk5HX8jeqKVgRr4dhZj1H12yFaXstkwhyijGJtknSfWRGDxWJ43KX1A9apnhonZD1oRQr7KZ3LhdwnD",
  "key19": "4rCoA63CybQSE5n3ke5bCn8SVUnPbjYfh4N36nkbQywtiMsGJvrJeyE6zmZtoD7kGz2zVuxcnQHFHqf9znagFwVc",
  "key20": "5y8jiBE9n6NQ15srAbjmpQM7PEchGkVJdiRoMefSkPzqZ6xSysGugWZNVwNE5XXma8ji74Kt7FyqHRFBdTaGrycM",
  "key21": "4xDxBLkdz8VB2t1pKA4Np6QiVzPdYuopGVkFeiq6gNTmpM34ahbf68NAJ2ddmrWB11Js1hXiqivQ1gqPhuvnEz9m",
  "key22": "cKWhR6MVN1nrorqtMhTR3bE4JPLQbDZ7ZB9e7mg6KVmoLyWgVvMR5o8ZfFSq5UJ6oaVutryQsPmk7ndMXTh2xoM",
  "key23": "2CsmJFE9sxZKBQBKU9n935F8hnpZC5kKDA8GqU5kyZzx7XCHvsALBc68pp1jPjx7zZzsqrHHv84Mg3fKk1jT8Xr9",
  "key24": "4Yz6NghXbf9Q8BxQ3ELQbsYsjsdRpJNM1cJw84DpsUXe3pJ8cStmT7T7LCV1yGv99f3WwnASzBuyR2WVZMAJScrw",
  "key25": "427BB9QtrsvL8PvHEY1E739a46xLENXQ3E8QmYLAorwj7xqLHLGzetPRrL8bAgHBbKTAqThzTY6g2CtGSpexYhcU",
  "key26": "4bL4TKDyGqtqqx6BdoM1XEastYjsC8HAM6PNYc5DAUuoLATM7dFAovgbDrbpZL1Jb1W8pEjjAQy7Qjz8AuyaV6Le",
  "key27": "2uuMFBCDCUPUsR5rWDXw4s6K9kZwxTqDUfQ9zZ8AMEEmrBTEwpomyimjqFHHVgfUq7Lr6H9D3iQWp8ZQDKZi5zTk",
  "key28": "5ZEqBCJnkiLoFhzF4YpXBTxSzMwZKxsr8VmFfUMwcBST5eZijzJ4ZtJtM2iLT5qBEdwRHg1sbvg8kYciZyNCr9iF",
  "key29": "2jRxt5XspVXwEQNeFurB4XjgTwXPyCiAeCVKicuYqKnjtzNucnfQAaQjkPSVepFC6dD5uQ95Xyoi3VzcmajFezXY",
  "key30": "4Dx4U1NEV5ps5AKmEPJ6cwR8M4QMBKUKWANFk95iER1DRFuC3AGtdM6pK8qxmwdJSPD5pYKtEqR8qDLyfqtAybCQ",
  "key31": "1KWwdpu1cEzyPEFttyHTviVpY3UH1v3s1fP8u5WUv4BMBBSwWrjynE86sM6vq2ACuFjxHCDwimCok9WxZiLcyh4",
  "key32": "4sBUbMRygyHuSbNNoqskSX3iD6vtRKvHqESqiKZwYM9h6VZbxkCsa5a6wnxJKdukwUYMH3VF8zfYsJeVRZeuSkUo",
  "key33": "32Ys4gNbVAJMwcSCMY3f6UGG4zhyqYpjcZ3tQAQS8r4K9ac2wPKb9DdTWQ7MTLpcLEwPuCQAaENZ6HAsT14VnqDX",
  "key34": "o6FyQXdTn9P47mZBUxB91vxd2685ZcvFrdZ3v376T6p7rpRt6bfgDpAic9VHbhUcCSzAsPk6AJDfGHLLpe6o5C5",
  "key35": "5SsPU5a6MFrj1soTnSqctjFpvVC26WCmHMimQd5gDCVmEGoBPg636oFenq7LdJDpHqhdaswEpTRmHfem1TZdga4x",
  "key36": "Nt7K4GULekusa6UjDU6MZrXxGDmze1GcpKksmDvhgH6ckwg8CPpq5CWHi4o4KBkXi86EfPDjeZ7myEaTmLRAqis",
  "key37": "39YLXMZz7zphUCXegwnMEYPpDLdUkpQ4zd61dBuXmzc2ZHGJjkS3erGnqmtq5r2fmGuAmHHQsX6sNM5PXzDt2Pmz",
  "key38": "4o4uFje9pXYUcgxB2vV3s3wSsnKrrj5hWni1rrBPtjFFkJca58p27Y2tKGfYm5qjT91MtBaG9Pw89KDwDoiHeqGM",
  "key39": "58UcY6NyQXDuLeN7Hwmg1hhxj54twAn3Jz6o94jJwbgiMxG6ArSDfQYRj3EHrzLTeK6qSL8X1LxRbT8J3ZRKYpuS",
  "key40": "3UJSXu677caepNQgwArE2jbB7nHbEtxW35iDUqHZKZfmn5apxYAbKkhyx7Sv8k8RUYMCwhWwRLo8moz4paKoaMSy",
  "key41": "4HqgTdWtjLp8xc77kJvNHNcJ7aB6d8rVrB5UGKRyXnKrM8wTr1Pib4SB9pRkhtznqK9yipDCmVDqyttfv33pWEn4",
  "key42": "4R4ukBmQRfRW8NAbjhAQ7gVPpTdJwNEoQiAEaMU1sBamjLcX4SbX2gJenb4EwgVr8A1AcBi3SCMmtKiR9QxyVmfU",
  "key43": "2Z2LFqVB2rJPEvt55FC7RHMeUMUSwz3U2meXAna9QjFbKGCHv8kLNJRbnZkMYAgQBmpW6AK7Gs6tndygNQFRDxWe",
  "key44": "2awqArAbtSavRCVjdDfb9cXTr2Tx7uXSD6XFJdw8EyFbqssB4CBwRiHD8AszxGZQPsn6zUQfpEkRs9XSwsyjHcRb",
  "key45": "4FJCVKmSAtLGNpqZvyu1jhbPLL58YWTTiqPUJZtE8mu7FEMdopmNqYG5hJQnZB8BmqTWqCfDWmmZjrhiQb7BHJXQ",
  "key46": "37wHYzGXeKoK844eajKgGnjaN7vtAGvruM3ePEDunArJSk3HXq2HUoYzGBuQACEtdpegQPqTyxkA7SS7HHXhR2BY",
  "key47": "2wnzUSvrwr2Cz6w3rPcXruXa2mGgDANHVkSmHQscCk9MwdAFrieZe23MpK3KDrQAz3gjyKEAobjq4J4Mtjh3Uxo5"
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
