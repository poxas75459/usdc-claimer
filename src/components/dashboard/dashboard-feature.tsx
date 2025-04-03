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
    "226tC9JF9zpgSEQT1BHjd59wi5t4PQoKMiSMjphQgyPFsqNad9aDyjydC3iKAcgTbgk8NEqRJbJ9kVQqjP7bBxar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zt2ezuizDtT91xTjikY45uh2Ng6UmjKvPBL9fZrToWXNVimWYj7CfixhT7oo44CsEM2KUFiPauHzPbA8TbCrdH7",
  "key1": "3Tdozx9hCz45WdxbusKCtLioQXYjPZtoa2nC7TXaMuEfQQdxYFdyo2JQpwCBijNWHd2unbNaHorDzTHAPn4KgXdT",
  "key2": "3pFH31rBZdxdHARneaYPi9cN22DddAyLC7z9rQR4VJyyDVro3SgrTRKVxQjAodXWZh3eAg75dNyxfXL7NvFTGMpE",
  "key3": "4sCGYB9paGYQr9UPoPXfGqp4YeuzBiq8kbk319bysc1oyn1U5dK6UKYS9oN4RQwA9DgjMcnXWJVousGoAEgHTTji",
  "key4": "Qq5dVALWj3MR4LWmK1nmgZJDXHzpjkmd8dnDCLoxsVWzAVGQphvLx2oBAsnHv9xsr3mKsFEDh3G7y5BgwRQU4jJ",
  "key5": "2MDvjPXPQZBHvLCzBr7dvJTBAtr7R1BqPx6eSUrSgkLJTyHNSyzjr74atTjTsDyA7cNk4vrpXhXFiYuSUE6sKnM9",
  "key6": "ApjosSWECTbzffc3oo2xiScdsGEzAGRFWyxY3wpncF9juRrHYqfkSXSnavNPkwSDfqJKNVwnEV2fYCkqEVM6jsP",
  "key7": "5w7LLKXeT7JiqBVL7UQsjubdmpctjupZuGY5f5vXmED15cMN9ytB8Hdd3AFDJ5Xt3hNPmteDU2UnjYLhouVtFC4b",
  "key8": "5gauAWbrkci4yinxAkCL73cwTXTDQmjCtQtGAQtXy3x9xmvy72ptRNfX62UDnUfREtZE22uDJB57J4B61Z5F3bLN",
  "key9": "2gLA6Lc9oxacDiaVSUzYaLeGP9MWGeSnuy3JdKFPh2kWniavQewGhawfvLbxfTKR8ag8wRtMumhhssUBUoxAanv7",
  "key10": "4gxZSZ4BFbM1Z28EuZybRQA7nwS8PstVeHo5p2zraJs4iHY6EfBugEap6CijYeztzK5dCAYiYBjr3ErRA8BfrT7J",
  "key11": "5pc6BTzm2KNJFxxsHynTZkjxM5dDv7bD1Mp3fZ9L4F3vPYmRZVMFxcLbTS14pbqxyu9FjQ5uxxodqAy2F5FKYypt",
  "key12": "2CPLEqqUovKaQusaka3W3cYQYK953jJE3KxZ59PmHRPHEiPiG29DNPb2WTfDymekFQ6PEMX2XpepTh1aUUy3KPsj",
  "key13": "5crJzz4ypaVVtGWpdwK8PnNuwB1uX9USvp4faWJmGianHxZjme7BXnouRyYHiUYwTa1KvanHsbDQuU7pmeSAJDQB",
  "key14": "Gf1L6EMtWXGVsE7egk7ovZwWz9TuisznN8Z1Vtu8CLNRRAzqA93wYNmUMQrez8EDj329pS1NsRCF2LD3u2dfShW",
  "key15": "XENABgEUakw5V4PFY9Kz5Tmqg1U8ESGNTcoEyw2GhyBUGFfo47aASvYMtrdz3vLexYEc4kJrED3VpJqD7gfL3oc",
  "key16": "5EFDND3TXNqeHDSqHn7qncCpuVZcD4obGQC2W8tT4Tzh8UgcfMCV27MyanYws7bW6Pjhnm9qG6v8qmN8HN5TLWVA",
  "key17": "3jKDhozxArQnDczrRdCmV9jkQSra8LnTVLCqGJtfGyQZhX3NZQbEWiDrZNDTPSDpQ6PzguUZNCVpj3XYgze6MJCB",
  "key18": "5H6CkaJ3t3kuNXTzBX3HsJ9e3Cv4C9FkyqkuUUPJTbA2bDBSNtTH3jgsRYAuX2fAGbDuTowiDMGBHgKTa82WrXR4",
  "key19": "4VHg3Q924TcSQj4NqVvCxgSnRsXYJ2bW8qvbbeZqQKz6wcBtrqvMagcLFNWxAUDGsUaAGDn2TvRQ4tghemow1pJJ",
  "key20": "XJaKEqTGRCp9JF3NcLXJQZPXSr9uU9nQKneLjvb8XSDd48YZSR5cNhi31J6MegFLrEX5opyRjKxCTa8FsAMeVjC",
  "key21": "2CW2f9cTSBno5GW192iMJ9TXwtRqSd8QSfKBgwkVV5Fz5pvfLweZ5kXTkDLeHLMwHTnePFcqo8PqhVhmzCNP3Tjr",
  "key22": "85stu9q3ZXCZPaJBWDUTrLHspGbsL6XVfSHcXKfBUpbgNvwhNBEHYXWMzpt6xjwuVWy9stsPqQ5w7cXvLwyneeN",
  "key23": "pFUb37t6dxDNdrmQJ7gpz52FY4jrBi2PfM5N5Po5BUqpuUURNbH11mVVn3aCjBGuTDwnmXXJNF1oXzC7tRyBUnA",
  "key24": "27E9SBSG9jKA8X32UShC2K5bT2Kf2YbXev8or7vGqYLpyS8UcRFKkvfQdpCDNJqdu4rDwFwywwRd8yWqxWG4tedX",
  "key25": "3w8MD59LwKSCugW2fcBtfSjx1MMC3Qox873pxwVVGN9U7PJUjSgH6VPo7vFYTzGLJJR2DbhJuyiBdy89GdMg3L7v",
  "key26": "61V121AcxxRjLFhQQVCRoaswLt76ePzZDpo3qWui66fbECpEYSS3m9ddjoMYCChNFN3rzKsBMjfuEmskPQf2SYC1",
  "key27": "5incY6Gv5k8m4SgMRnnRgeTo4Xo88ZsUDMoxvqQLc28XPYFKcyemWFjSNwEoPVZfXyJwnEmz8ieYwDt5sr5WQ69H",
  "key28": "d3PryLbBv2RBCpvSm9R2NGrqhXn2jwERUcQRNHmo8BYvEcj46CLoxhwwYxnze87MBfBxDwDTZM4B72Cp2Yv1VEK",
  "key29": "3FmXU8YYoHyo9g3b4h5hNZ2DNTBGhuimR5SUgs667YMdn1iU1mvZptfPFwhi8K6aJrYuNFEA9jwx4wF5CtdpAV5d",
  "key30": "4hMrCvSNasETcodTyHgeRyiCA2GTVCdknSYMVzB8NxWxav4ojvnxwzLrva5iZt7sV8YbiHbo4DvAzAG73rR76rUo",
  "key31": "aVhLzR1YkpcqmaLxHdNWAcDyTkEHssohYb81LCDn2XqjfVSindRqrq17GpGEbMkyFbyqwUdgRX5BF6YQeXTUynJ",
  "key32": "5joD9XVQpUatcgixTJYcTdabajMmA7K59CQtYJhWMh4upJzDsVgcjCUqr2YrgzTSBxjhNjdvivNDijBQkPX3P5S3",
  "key33": "61tCoAJtQVWLRYB2MyRRZyt6BKSTTRJvjzfCvQHnS28dmQYZEBwmVUcX2yioKftezsjufDsc2y7PCm4PjRUgcFC4",
  "key34": "4C696AskfU2NPCKwjqLNFZuPjuUknTfqkGo9Si5QgNPNtDkHU3grMQV2BsqfqKGh8vKrmjUuixLyn64DGfbB6A62",
  "key35": "4sauX4spzUCFKJyxwANESHpZA5iJKzhTuLGNYngXdhiSz2jYZ5BiLZym3pEFWAtg53DcsgFFSYk99GrinMudnuZx",
  "key36": "2Yqeay2ZvEaqcL9ry3XWZWjWC9s6YhmQosbTnfnFqH1LkP2aNJWrBNr6KiGjVRVPowiLhrG85wkuZh2BnhTJzPvz"
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
