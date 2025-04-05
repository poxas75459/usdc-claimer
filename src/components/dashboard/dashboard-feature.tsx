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
    "2VSk2B2GHByHyrtcC3noZkxjFcmBhNPi7JeXvUJBnryQioMVDpc1cujaX7tsMvrx9iQFdYj7dzy4xKFtEMZVvW7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vnoP99Vu53WLVyDRQALjsvmDDdkYYJykrtXqsEGbZoio4Z7GZ22fWYLKVs8BvvyN2d1dJ7emseoCrdRhuPsuGdL",
  "key1": "3VZeZPJCCcdur9DuD8LF1SXQa9VNieBRtneBGTKGuJ2cASkLaQof8eLAWvLh6kcKXRZ6xEdZQoRVMLXuf4BAQ64x",
  "key2": "638McbS6mZ2yx1bncSKRYoPSgNr4RiAJTLZBcE5PhRAGiGdimDKyxTKYpwAF9hPQ78JuGBAqJ7dhKpLPvuWQ6QmM",
  "key3": "5CYap6vNw7BdT2c4txzx5ZNyQxX9hJVLCQ3ZNZ27dDUvLFRuq1cc66V7xTc1mY3bVgP1VdWt8p4Ee898XBnc8i7r",
  "key4": "4piX62PsLdQuGULLEwJUyd7Gy5mnCFkhvf8JSPTZPWK4XNfHssHEKADKQJwMiQv2RQKYNwDw9RuQjtJRoa376wEy",
  "key5": "4TzwoTfdzNSRhqHmaF9aXYggHtAWF6bBAdNMoeQLmDkMwPdQYnooZk3JKMNVBhiuNJfe6wuvNgQe1zQZaeJGrURa",
  "key6": "5zW49BTrtM8Bh51GRT6bshqUCGb37LvHcxbJgPb1yh9ESxNpwzfdxZHMzAcjE2A5xC5u6Ve3bA2JLUssBiBhc9Nd",
  "key7": "w73NPnuG3fZ5JPC2EqVdavJkzyRmZgGAJ76XFyZwDnpG3BLf35hLY9zXQ5xtFuYLfFXwQp518aPQ1i761E4L7ct",
  "key8": "3boD6i7QAv4yWv2QhRPcJhU6KAEWbWdbn6p3odqeTyQh6FdPruY7gDHsuF1oAYsVGsmU7Zg8eJN4ayUTz4L97daF",
  "key9": "2Fdko1CuHvpdcRbZF472zux3ESekc9FUaGXMxmc9YUytwAACmj4Zqa1Hikk1yyFVD8NUSh8e1Z18E7RTXtNujfAT",
  "key10": "5Uejw8KoSKFC2jwdrAmNM6jCeFkgSnT3maMARV3bAKFucHytj5pdXe8oiJsXrw364MRHMGfxUBBq4DoDHBCx1ccs",
  "key11": "5jGpkWr7GoXWoMHtes1n3Rmz6kCL7qokv3jB7AoxBamWX8ioR43pzayS8jdjb6hV24ZpCL1wXScCdtCBwptFPseg",
  "key12": "4PYmFgSgS32ReWPdfP5Ag6DwbDtm79PHYcbM8M7zQ2iME4PJFseEyxz5hqHY6iftrEJuwhhLroGRC3Y7gCP2p6HH",
  "key13": "26PcYN65P1ijfWdfTJtwELH9Vmqp9hoa8UToDLbX7BDfCGckjyamqWRPzJu9UA4N6pfG5QR8yimHpc976LG1vMRm",
  "key14": "4AGk7TVe6RgR2zQkKNo6pWwYgaikTmov9jJfDfmJrc7ftHKi3hB1CWzREVMKYbpNfPiAr4ELJHoWj2uYPKGKkXAP",
  "key15": "5zqFfNwDTAYfpuCKYGmCJvjUneHCdrw4BcsTdWf6EP3LADQgRwCiTuW9kGRRnSgzHhT2uUhPaxdac2v1xUgqP2pQ",
  "key16": "5PJGYZKh2LyEoEqKdutCeB6maJmcZUMtCn2QxmwXcEdZngKT7Wr3S31zg92EgczxN7MhpEdfcYiG918K26LHr74U",
  "key17": "42rQmU2hUjQ3qmdBz71VAs3CRvrbyZMuct41HM6Zum7G9AwDpb2tkNBPAU6xHCu5zzej28BEiAhP1zcZpQ69m7jc",
  "key18": "4iMhB2UTBC2TUQWtbGagcq9AunwrkTLuqAiaMofQgJebsP57BQ98e6eNhQVwoTDyrCbzzndcG7NDdjWnu7hbvkNd",
  "key19": "4xia1zez6s3HJccwiptq4dUDBNDjh6c7ZmtWQHQZDAKkKgzJKM4yQ2Eojn93amhZ4LJJ52cM8H4qn5b6nBbZKBdR",
  "key20": "w52y511Mdu2JrgC8CJtcJg9g3ZiMR5Rgjtf8y1wgsG1smQrZ8wbQUVNqJik6fZDRssmDCD2DyQDqkaYcPgx2ykb",
  "key21": "5o3mTsJwct36LRqDyq3W8yyBBQRVYGMfyik3VRxDhBfoSBuiS52yPuEEBixU4TypmKAJL5THvGcPbhoWR8yBQeNL",
  "key22": "3cEhAmvqXUwa43NprnwadGSHQgaNCHkeveUmDff3tRzuH7p9u4VwTR9bbtmpLvAM2pQBAvZsRN3KVm8zfsgSYnmN",
  "key23": "2XwEEjbHjqRCCQd5YKVAVDbWCPrRJkKTfQDG8wZRanFqwpqaBgQpDoYPgYpd9xbPM32LRXuTtVvZrAZddDvKk2Z6",
  "key24": "2WxuYYGcrSqGTx81tNeoHCgj1GtVCvjFKvxjZW6TqUMUvJKpwQswaGuYVddy9vcVEkTfM6xZpbnmzHThZvNY16Ck",
  "key25": "ep8dKCjf7aWHfztia58DGHFNhmFZUYDmb6inxiRAsNjTY1w8BGFwyiU1QUgcMSbyk8YgHx9CgwgDbNpV2h6sxqq",
  "key26": "5TWhFpXPvbscRccdSDo5RzAaQ7jXXzgDtCfv1NG3gd1VHet3yEkYAxwNyv6Jt4umcKQPowNLYhx9d8Ber9Mj7Uuu",
  "key27": "3fnge3TyVpv4jNQDuyF6CZpgDB3QdDaTdSX9LsEXMx4DPjvqss6FF5aHYm1vD8LwayfwUNQwqyRq6thLS4PAAJnG",
  "key28": "52RNDL3RgmaDydeyExxovG6yAAnoq1yVR4UEwnCcs7NDAZ7Y8sktGm5NsKVPCJFKf3UNessskXcgrCfV8ioYNXBr",
  "key29": "2yYANmCreKAjD1f6YrpXZJdqergLYUcrg5mnVvVDk59iZ424qfAr684vw8JnWi2zo9xxnev89ML8GBzmpsiLMYV6",
  "key30": "4MEBqx6NbiCPR817q66YrdH4wtPAc1jss8qaQqVZmVXJKWfj2kpR7PXKiDsTB8ggiS5SDGJEqxzW6eJgA2o53uAe"
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
