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
    "3unGKUwiwixPQf5NKVXyTVp8oiJbrp6EiovBQa73zhCwGfJ84RXsBxNLUYoeAnMFkrZFs3jwshsQ1RdwAhWmbys3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AViyifuTReeHMjSMYyDKi26PEUHiTouJPmKcXwmZysQazXWfFi3WLBAM5jUimu4zwsiSgsBMTngVXmzJa1KrS3c",
  "key1": "5ofqp1ptb8Akf3fFTVyc2kh3KBebPCua2V1k4LZiQYxhcBj4oHbas13UoVtaM2CH9hvWTYhZxCDy9RztSuMpMfZZ",
  "key2": "7BkTzVioGGygUsv7G1gEVno1QRW1RokRfA3ahjgxCHPte7k8wTrAcgLiPsgipgM8eDhkpPKyfcknv4yJqYwbg3d",
  "key3": "s5Ckdcxp89uu6JTJ1HSrFr2KcVcWKsCDJdoc878Ma5QjDMqys7bjaRe5QurRegeD1MsAcyaTHmQf5j9bRAtXJhg",
  "key4": "2TVPqP5b5fv65XFAhgLYqSaetWmkGV3qYowXESxepKiAapkm7Cf1ijEZ6yyBATsjttWrCTusvHVRotsgu5Y5fex1",
  "key5": "5JFdBY5h7uww5vcZAKV1NjQ8kj6QMyHMGnmJb7bje438MBTzo4q6Wcntj4GWZaHocj3CTonQbZTbbUbWjg214Ba5",
  "key6": "4chC5j6ooivnS3azaaby3u22Sasnso9xQLxGhLneBUqvSNvKgpHzcpmWuGCBzXhJvXUVFf56p9JG4vNqD9jgEgMB",
  "key7": "3AZoxqiWYr87nwBKPRiyVMPPbs91pjgWcpC1FK8hh7mNV48sD7gtvbWXqYVmEvUc1cKPwmNnVmTGfiMjivFxRx8T",
  "key8": "2ffXvC1vSpMLY1yf3VbDnK3JP7mtatKTuQTiTMGd42S5jqHVh5szEtjgm7cszozn2Arukfsd1cg5ZXNdn2K1VnvK",
  "key9": "2HmcMjXXLM9MChpfBjw18crN3BNZHavrWxS9K3jVNwr3bnbd342cLsQAkQbbhYPUfb6nc9831SvwmgrFeAXuYvqC",
  "key10": "3cDTmYRZTobCEq2Rno4X7MLBsU8Dkd18eTnt3gQ1DA7SYb8difU3YK6KguDj4vRCfnxeVEiXStLS89rAkZ2CTmHS",
  "key11": "5NDxva9DeaCKga442ox7NvVYU7tZEMXxW2RzWYq2mWzxA3az8XNW9hNPc5bnebTqNXdnV1C5fF1fgUEBXayKXSF5",
  "key12": "L8oFCKRj9Wbuxby3G8Sh3DbQv1kXPGLpFaXiRtiubg5a4xHsPKyLVB8VTiXAB6AmbzKUjxPUXfojcSKhQLWTMCk",
  "key13": "5T8i5rwGytWt9fJ3dwUwLU4YR997Fc5qdSBYRKjNfAX5wz5SsbkK7pmHWy2BdANTCPV6Qh5DAsWGKJAeADQxYaCh",
  "key14": "3g4EcEFF2m8tfVLp7T2eRshunSvCnPkm5H514jRuaffM2RmqJhrhnwqVwn3Yn9P66SV5cf8MRnWreFtJvJGw7pxT",
  "key15": "2rm9zeabLvvzuJ5i44x3BgZnZiQDQjaquvKE6EXvgAJ3UA3yYxUHPHPbLfA7Dg48ofLa7qG27ep2TFP5nzzVHsDx",
  "key16": "2cWWV2D6Yu4NthbehLqdbNsTG3GCbiinFx3Bcr2HGNJZyLxkGMMxAcF9SQPpKBpUDJfgAtZ6Y2PKyJKLCJ8WPTih",
  "key17": "5exwnKVKBpf2bqDBj97J7T2DfmXMhLWJPwY2gfPFgianA4Xoboyn6rQgVSwuaNmuqMpvZGBxjtuFg3fL9D4wNykw",
  "key18": "3HaXGDEQi8U3Am9mV259j5rkizhjbL3cUzVLSZuWshpkbuSw1TFsN8GNhL5TdgJFN9WKx8BYQ6wzHXex8xhD3QbP",
  "key19": "GpwfhUnuMfEWvVAZ2bcqmW5R6RAWfSRnLcqpw66GABGnwqC5xyDffdbKGMWwtChTzusS352ir9yBPVSNwCANUJq",
  "key20": "2vNxWfVoYqzrMVmVW6DenvskcSafMLFT3YMHbrR89jKM5n8vQrMwkFK3M7hfWYGqyaJFjpyQWQjWtL3mBEUH5EzY",
  "key21": "ZAoBPTBeVWFu29tEJgMZ6puhYcrtfUvuxPb9xLhuvLFn49Suf1zpQoQWgjuTxPPPXBPuYyUyybRoz1PzmfQmdFP",
  "key22": "2RzW1t9GVWCKsaTauMjMhT7HuQ7Le3h5sz4A6ohKK7hromqph2dWCp5BuGkXhhyCy18VzM81CBt8H1xGajBgFLsm",
  "key23": "3bHPSHfNW8Kr8isgehczYT22agdeEUbqC2o5HJuzoYKRYFzW9snTLR1Z4aqYuSzgE9wxd9ZFzmqsfdwemNJKVoWy",
  "key24": "6333fcHvexe31AsbyuWK45o17A7WC1np9CvhqUAkDaZ4k9aTecyp8qvFsG3KxV41hZTALQPnv45nzryj6jJiJCpj",
  "key25": "4j33oNA3r2x9qB83tyhyYAqqNN2sRiB89h1Wzo9fUvKume4zETP4cEvi5NHCdhmvwCns9ggjskviRfQzsmfj8zJF",
  "key26": "46GTcekSd6AZA9d6NB4jdGhU5wsbesUNJ3TAzZn97mq9iU9Dxsr6q3BBNwgjGthtiLhwHm26rStDvUxZzFVjpvC6",
  "key27": "5BGo9iSGYtfipCVpxvSeiVqgVYqHtWbgHdaJXqPcwXGLzuXmCjnH6uRYRVxAZhxcG6qNpDbbNyV8Mp6inr2dwEEe",
  "key28": "22R8f1mYhxhMPzU5JU9ESJ643rwsjdZWzFbZzRWJZw5FKTJdmEf6Lnp4nebMooVXMW7XkDjQ67Y4cBnLScTcoKvQ",
  "key29": "ggbTeRaSjoaQibEAvVEJeTU3CiU1QWHJKDEGeU4Aq1j1AnBhoujdTK8z2LhbHm3xjaEhcTc8fKySuMzGCruC5nn",
  "key30": "3Bu5ouD1fhpbWWZATBtSWwtqraXVf7293REripg4B6DR593wbnHfe4LCHB1rToAyJfeFkRiGxe2vRiyPXpA3TX7q",
  "key31": "3ep9nfr8KhYifwdd7xTMM2EX9SaaLhysocYa6evEkcinu43yuBfB1LHpL8X3MhUWGijxZLJseokohFXL959S9svP",
  "key32": "2D2d85diKJKNid8wCr1MBKF9ffwBpwCgDUQYhwh6u7au28xK6Ms4cX52c6Auae7XVgL85tvewhYzRirQ7bVYYV1p",
  "key33": "4HeHDJkeUNZ4yRWrpF2JEDz8EHm95ATNV6jPCkYSEaoW8T1xYAtvDZvQDdBbb7LsGkaEMZG5ZiYwJvLvynzqd3Yi",
  "key34": "2Xce77kLJj1dh4zmoyGMshesiAGHCn3kvWbwoBLHgzQsRtLjx6twkg6D2Bc3NkenYVSaEudKJvSLrhdE6xDFWU8U",
  "key35": "5eVUSUfTT2QhxzfDRiTd6g7zUjhbLqu59pecrit3LGFKET3wmeL4SToh2kfRKq2hFKe9sfjUYmyHeptVDmUDcaTv"
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
