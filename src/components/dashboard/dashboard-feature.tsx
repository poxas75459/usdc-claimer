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
    "mgdWw6QWTt6Jdk3EeneY35Y7XQghHCxc4hPQZnZkEiJunjNrb3GQNLPu1yak2biHduHrwn73sNNfq62kiUdP6iR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XKWUZhMGpetj3jUvqALPTrY45qUHm76K9AhbnT7vqHFE1qzd7fkjk5J6swomDgN58BVAGTK6ooe85hojtFrKz21",
  "key1": "2MaLntFhpqUAGsq84xPAPSEjbFrbSoiZGmDz8Heb9HPsQSbrtE6wdNxZ8kuqL6NaZKNMViN4XEMvNGp3r54sisVZ",
  "key2": "5SNeFiZraf69FsbPpi8k4rQRDyo7APEUNEkrpAkEZxXWZ9JJCR83tgsFGRxZ85DLtR6h6Th1u9XDhu6D9RXYpW4n",
  "key3": "4pAKy2aF3NA6Jju9kJiSvZP3ioaXjNvgtAjJvNDBef1LPAZo98cckqgn4E8hhcR5D3odFqqMbi13jxDZvDQUXqWh",
  "key4": "3nwgaf2ge7mwwNbh7sRbhxVUxV2D75NFqBHfBpCgSLgNCLCUNrCxN51Zdfv2F7hMKk1h7bQRGucuooLitgrEQWUC",
  "key5": "5zSxqi9DkpJxM11MvG1ajqi35HdCLLGLuWoFS7Z2BP2NLk5ELWte4Bwjg8zcfduLUNtphK47oVWjUEhpVfaF1mSc",
  "key6": "2c3jATxhgUBYBYV3xBcW8UmzT9oJcHteZJBvskQwh1HYgALmhhCHZ14mTN21zVbBMDqsDuKcm2kSiv3LYEhv4qWU",
  "key7": "5BXkCEnXzZipdd6nzMXEPHkywSd1bUGwrxkNerJmtpvtqn6nmipAzJqXcMDZh8Rer8kCqg3HGiQWPL8xy96jV2JQ",
  "key8": "4csCYYvHsXkzYTmtXMJbqJEYvw74sCCSJUWk73yJpQps9wEEvo4ksvvCz42B5VtmiZcZbNqLBA7boETnXMarmX7Q",
  "key9": "3XVoTAsdmwT2WLtZ8Kq3nD5TBiY15WsoFrZFhxrCR8w2mUMCAD9vZmx86AhXKF8H3QgDdEGTbwGGqeWw5SXfBY6q",
  "key10": "2teutC3VzmR4PEHdwnLmwwucxhCahzmrdJqquiHPGiE8XuNw7uW2D7JkQsczWwfg4niRZSgUHk79HAuaaEzzeLM7",
  "key11": "4rFSXNHgwKysBY5WD48nDWi5LaJKcDjvWa3Wcap8WkNkBg73d42DjFFfVTtvpsZpGJGDmhH234N3yGZeGbgxFdk7",
  "key12": "2ojteHxHwdPH2zHqDmMub45JhwTcFdUoBkAuDpxPzZddQohKVT1gRmvNJkgDLqtTcDdeVADSLwG5stuhKKPfePep",
  "key13": "4kVyz4PkfxBcuAUSygZUJ3wTrmLpAs8KuVCcPT72g69c7CWgGd8HLKfUu2VWWJ4B6uz3yK3n61GnAgzHmS6Uc6N",
  "key14": "YSVrJfHYuy2uHojrTD18QHD9JVYYfihE6zgYN8D9PqRkr4bXYHMpnhJ2Ux4kaoxmVtVRb8XkJ2fZkyXnfCzucFz",
  "key15": "5NxKG8G3Rhb5qtXZK2mNZth6SGYH37YpG2K8fCbMHE9BnYsCYa5fYnZJcUD5ntir3DMEke6cDyzwhgwfCKQFzqLg",
  "key16": "w1mXzfbYwNRHbapzJEr6kxYhJv7YZuPCt1Qx3hVbN8MUPpAiHyiprL9XRcpV6bFz6KHW23rXe2VN22sDJMNcgfD",
  "key17": "58GD1eFS9SAjqwDhtfa2yxgQCVzPf6ajv6AXWsiVwDxH6S3LoFbxtim7RqZv6uciFsSCSTtNn9bLMWYGs145za8J",
  "key18": "3MrXbgeHDFxWRRztZCFbvNZvQMWDrLUjVD2dwhVGcvsUtXNsL8CE6peQdcLhbVYyWi1JpGjRgvygSgQVWaF1jhdK",
  "key19": "4qZcwpo4Ht9rhP1URjHQvEpvxtP8WF4sQiP5yREHeiYFTKiToivjsats4GomD4qgSPJXftRiPVxpEkBRmDnqTTMN",
  "key20": "3QpFew9vGz2am2P28Dc9EjNms5bg8hL5vfUdHVs2MUVotiiAECqCWX1b6m4ss3PjCWqBcYpTSM2VEcuTLTttbEb4",
  "key21": "3MM3VSJ5AnCzhefJbJdEywZ7zp3GCPt7gCtwzwANP1osLvE7JA86AnzgZK4JQT749GfGiPpmYyX53JFrTSCQPoMx",
  "key22": "4A33Hu6kydGvhYxymi5ZgiEfsZhXpeDE1xj6wwsbU11MpJQuxnBSCMffeJGQJT2ZhCzsbqiNdJhK4BXmbbXyb6C4",
  "key23": "3HG1qigNhLZwXs44p4yepfgPyuF7WM9UsJ9dFNhCzYJFW6kGzcZN4MuXjqas7YDQ92ZRAWKFacA8fiPPnghYxVxE",
  "key24": "5EoLDm3oy46vqUk7dKjFPGRnBUq87qejW3bJqLkWYEiLcguYch5L1R1kiRU7XxbgwrNjkXv7v4XLLzjjr9nkEyk5",
  "key25": "yWZkjbYdmgckjY5FWZMhmSKtyhwEoRk2KC5iChKp3vFp1fP6eiWu8pq9B1G9xiKXTUwtAjV3d4fzTQGt8UsGFAY",
  "key26": "3shvcQi9ZdFDMSypugzZaidR2XfrxzYnAdxAfRfL3Tazg6CXhpm8JZ46DAmEr3WH2uB8zcaD4ATkbb6zWDLtcLTD",
  "key27": "2CLiS1S9PbsRbf6HPZfbcrHWHQ7bLf4u1CbbgzF99GP3AnrgXvYKezmNvDTnXmE7DT7nwnvDYmdJmcsQwSX7YtaG",
  "key28": "4wZYxSvmApcxQsnBm9ibQhJX8hJVBvxQHgQyjUDtN3dTtKC4vDmFMzdT2goJrfQZ2cMQ7z3boHc2YpDmRf3cE4af",
  "key29": "4o3igo1DiswoVwu34ejizXJDGomWTSEAJqvLFi39FcyRHFJyuvWkrrNzCNohMYk8dBz58n47qoMXPXmG3LrcjdXc",
  "key30": "MTQWC587yxnd5MABeNBiR3i7SCSK3CTg3fijypjbpxXNrAMRtJY9Vaj5uzqiC12yRQZe32Z35EgxbjPVwUc1koU",
  "key31": "37afSzPUd1BjHSNMypuUtVh6Di9jVWMPyuQfVFKsMR8FJjxdTbsKca3yfP8bFSoNUe68Zct3zdEAkua1PUCZGKEW",
  "key32": "49jWmnWGRnK3hYmGs71NebgCAyysFSrd2n51M2qUFBVTi49rGRuzkubcXMkg8Bhi8Nnsd33vi3uzJPvphDPsQhTL",
  "key33": "5QThWEm2ffr94mdS1fXCnRY8vRvFyWiv5fF5hYEMJ5ubrostE6cUuGtwD5hMYyg6hvcf4KJtdJwexLhMvVu29ppn",
  "key34": "5bLQJmfT4BGi3pDc3wQ3cwcGgj9TBz5bsBpyb6Fr79VspCyLfsLn7H1FpmpTarxGBqwwZEWtTLEJBDFP3rgMLNKQ",
  "key35": "2yvvU4YKpPY3Tvm5X1C6YraZ2QrNNkDkFpxkHrv9akYZYNp29tSw6KCvW8NmCDv3GZznPNL3TKMFLJimqbLksgxn",
  "key36": "3dMVHihNuCN3sZa3365PFKHFPBCQAGaioCrncTaNHFLxWCR4aLFi3tMeidgGiyVvfkR2qanEaZBvCTSwGcGADMFo",
  "key37": "5YU7E6ZC8fxsDBiSRjYqn4Ympv1PKWJ1k3k6crBQhiAnqV1mpjVmYuNXpVhB8tMsMpiFStYcNugEbciQPBue5aCZ",
  "key38": "5NgkuYyGyhAv25QKMybTVi5g82XJDZg8C7S3ecTVpg4svRrZ7KLZnUHPtrmKBMLa3Tvzt5wPS14rfnhrSB2cma7w",
  "key39": "57UXu1AMS6fzimtJ4hjpw4JaLXKP21wokfHQWHvEA64r41aZyCxmrpsQZgg2SA8a8X8yPgCuqWx6VpNVXnQk6LVj",
  "key40": "5xRQ9cEqMbb7KFNx4nDkL2embDsQAEgFxnjAFnUJBou9LKrK3aXh52fXT3jjyhRvASuhVnhzLE8P2C6jbi65FRR8",
  "key41": "j4fjXLmv3vM9pXXbGqxRbw5h6LiigKNSbhwfh5dejNF1YEat2gdMRhyqYxfdm5tzs2kJ9z7CfikYEcZfbLwanQC",
  "key42": "5UYyWNztpxnr8AWfrV1ZaxRjcZCfqzrFDrzFi9j1mahJ4agP1vYTS2U1JcA2kWoKWXSKYinvFJqmm4MtQGM9NYTH",
  "key43": "3RvvPMunSRyno8rabfY5uGyV9TfVLDPo43jpAfBtQanPbbrErUckdUdtXNkVoEax2hFJjYq6oBpe8Gnx3nTubRuc",
  "key44": "3Zv4CCWcabkBDVS22SANSAgpxCvBAQC2gZmKHcqtgwe4tyzLy3DzAzdpnNQgNdyKUXgw1WFusM2vdRhBm7zQUkTJ",
  "key45": "4PoPbvzNLGHC9bajPnVYc1USyQnCe72G9mCKsvizruJ3RCHqCZXEHiBxg4gdu9kUg8gKTDRbKGrkLz6USwGsNDSL",
  "key46": "4b7afkQrugM1BicTLAeA7uzzaKkBapQPqBe3kzn4wCxX1KKv2qxfVycDDhLe3Yp2ZgGXHYxtecTKHFSt7oRcAVB9",
  "key47": "4kJ6f9j8QyPFvobVyQs3sXMRb2vLaMeTREDq9ozGw7AWDWdqSrbHtJ32GVMrRsVoRYaW2QRB2jsP7UnCUSq44yyX",
  "key48": "2D2gweVuekEnPDwwNPbwa8P4U6MsNBrrNcGVB9D424YM3X4JCse8keQhrPbdo1dBwm9osDhu8fujxRxFHixGsBFX"
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
