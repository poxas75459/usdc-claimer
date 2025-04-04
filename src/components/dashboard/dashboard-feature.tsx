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
    "3pWojgQcXMB6qcsDhcqxcRLFksKN7wffpQVgMd55YZhTZSmSvhyU8cLAQFvzLSSjSiS31GQ5ApnDmcpafVX7keeS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3poBZcL2uyXyBhudxqJynDQi3NcKENLTp27wipNDX2agMw51G9vKDSPK49hqAoEgWYGYkpbBQnhDLaSV6DUrNVAp",
  "key1": "56z5tF7oGWyaRAhss6hdAXC6SfNeMYoBYmqKXojWMYhEnCfJjFkjFdwzMHLkMG54joL8ap4zfY9mQF1LttjUP52b",
  "key2": "4GdFWS5pohdD5hnGKVHLjPxdqx3Y1SFfzhvPzXkxo4R3RfG6yYbs1bHtTsK5vFJbGsUjEWdzDfbv1zuQEjfgtBeF",
  "key3": "55xyLpY6supStf1yQMu2P2TpoGQ6zSFKgQgBhCko4xDAGn2vacB6n8YCcz5RhntjxX12towyFhhQaFwpuuRCi5iL",
  "key4": "5kBB7AnyqSTfbtgesLixDcjdegumiQ8eJe6yS72JDzVccJh1rLj9RZxRMunqLMJubGNiYYTLwpMHDxe36WiqtR3D",
  "key5": "2kaMHWWqxMQHNRov3NNDiFWsqp3rTFtU7JQm6wqxzusCShhRJa7jxKek8ZHQpG3Kb3qA1NwFhw3H8sXg5kqpvYLz",
  "key6": "2SzHaD4bEpBApqE2QgoXDtKXjkrZcu2Fz9Goe4TMUxwKQE1ZS3fpL8HpLfRtPXaqorW3uUXiSfDueY5NvJRDxF1o",
  "key7": "36cDcfTna63F3zo57xWdyzjJGAVetjHgPXaZFksDZm693dXT1ct5cBU761J7KFrt3co93gg9QRKr55HByoEkaJL8",
  "key8": "57352VKbweumE7zFXQ3qD5sq5FvAY5LPEU21Tv8wZVroLLaVYMNX7GMRuWr97JLhGL132kwAq1Koh9R9zaZxuZig",
  "key9": "TWpZB3xhJxfierD7UFLF1gY5dqyU7THJd79h9bueXLug7UGcNYRzkab4NKQudsGtnNv8gDNA6TPtj52fugZYgZz",
  "key10": "5cVL9q4iDJ3GdPoM1nB7fMBDPgNTuAUob4XkEf2ukWuHFv577e5BDZfdxPHejXFa8egWDiNNYxicgC52ndCrJToB",
  "key11": "o8vGC5NYfz4mgtLubHKuW4gDwdJVymrjNko1yWJdAwHVT9NbNpJH47Jc3V9DtUKA3iNXXU8Zd6oFyGyemRLroxY",
  "key12": "51WrcoeMgdSegAuarqTWq3t47D6fjaTf8Ecdoxysuv8ZTqGBGLYwVfqQm37f4BnKDBpUXd2LmA1sPeoVtB86MxZx",
  "key13": "4S9XWZZzCuYmPgzVRDJJNzjC7LeXoqmoCTuGQMGsENPt9ZRurSuc1fqMm2GaENBy6ry3o8tC22yCadVpJdxZ7Rhf",
  "key14": "3YqG4m8SKJnJrF6V8EVBD7SEBESCBrRvKJmQwCdmDFX3Zx3srWYpi5s3gG6WdBT6Kpsfa3G6yVrECdMwgwHt1pAr",
  "key15": "4hzxsKKEv4cPoxmACCtyAXiXviDosudRUAiE2R23wi56bmaC9Et6svWfs8N64uibNSkKoYa5a73THJQiL2YKTqGe",
  "key16": "4RLumAtGyAodZspsZbTyRnR5v6hWzH46Uy8AWGzDwQhvm4L8BSqAcV91H5fTdUk7dEKbFTpUGfoDbKQhCkZSC4un",
  "key17": "3u2F6FZsojGMJ5w7dEaoE1EZctSS8mLTyfjBTGGv9uHQ9XhojwawMfFjfZ7LcEs4TdHAYuTXcRzyZRb9a4JcFcHb",
  "key18": "4XzaEYFK627DqJF48G4J9Jy8sSehfp2v7unmjupvCvjN2r32KXRfzaoHGAQQcEkrfa2UFsKLuLK4MM5WHXPXcV1G",
  "key19": "26AR5Ghpg18wnoU9TjfiyC2YoaAyBY6zvL1Qng6aZUPkHW3ogxfnmiLXvEjguEyWid6JrUnQ9Jw8Vp4Qao2vUWZ3",
  "key20": "2VrPME9SNgaDXKL7rFjTF2xzu86dRFJYEq34LLcQRXjqyb4woFgZdTamKkxHUq7suV8okPjK6ZrS7xAbsVx5BqqF",
  "key21": "66WReZQDJbWZQSKMoBFqtutMByFR1CuU6q1nvZCcYfspzYExKwP43dCZ7sTL8BJHm254NYw3x84v9puSuUucJD2L",
  "key22": "51Yi5moa2QeqWSGAzsWePPJpguKSXZD4DS7yT8Tz2uKBkfebjnbqBBx9vao13C74MHFWiV8HexBJdHkFzGNDA7wr",
  "key23": "5FGaxhcaCVQqqaRPw3ZS1Z8dzqQu1KQd37hSm71sifrxHFRHirsKTbrpS7nrZHXLCoEaDyKvzquUUzdJjn35q3Yf",
  "key24": "3u2ETGNvUWsnz3XeBCbLkMKCwrmevzdcEtNyL8kyZ9Lo5pYRvVYRrzQTLtHRge41vJ54A6dsEqnvLPgbmTNSW8sL",
  "key25": "HtNB8TKjoC7uuPQM9c7EEinvCCbid2TkiqoWpwnPkmPJtB9Zi48y1gLq9uHCxaURoTcukYWAUxNjyfXUJ9wW3Eq",
  "key26": "28NrSebywyZT6vTCyXHWinHQ2kqnXSLW7hevA1E9uFBcGecX8j7tXufYdXirFb1nTJZ9Fr4R51ezGd2Lb9BbtyKp",
  "key27": "5areQ4i2Q6ayqxGQj8f4XGpoiTokBE1Y7Cg9GCvvzBKRTCM89nGA5vwBNqnnR8KoM4AzBE8kbBMA8CdtLiWzA1G7",
  "key28": "2YcGjZoNMjfNy9ik6P26VGvXpxd9oajTaWHtTRPXNDyjJy4gEfmUWptUdTiRPuZn4V9HF1XszY9C11kAmuBU2LMg",
  "key29": "4fT365uh7PVAtZ5w7H4ZfUrWyVRDPNVX8ebe9aQtqqWx3twNhRZVr8tHGVsj7pxVVnGt8imSt2Akh5uTFGR1U1eW",
  "key30": "eX9hJzvCR9RxyMioMBv536PEcVQYJts9XJuWu6qXs5FGetCnsAKabPMzyMwtvTuSZZZnQ1MJTkqj7F2W7pTmRJg",
  "key31": "3uW8b8V8ZszuYVPywjGB89h6157N9vTs5mxh1oAMNZPtL5mDGGXs7raWeeKJfuhcJdpssHrP3pi5oFbX2cekRgvt",
  "key32": "3wyRYRn2btMQXLVAdgZUmaRpdcsRWYZL5RSuCuSvbCPXSUpuJ6Y5DR4Mm45HhaFhMVjZxYR49XbDCckxD577dL7X",
  "key33": "3F5cK7UwSMJxWg6q7m9n6huWBHTrU1hn37uy5SnHAqTufNkEGzKcSMfspz5tPNpL9JFGjHYoazSf4ta4LzZqweeQ",
  "key34": "3PzLCAi4VZ7Xh3WQ8nsx7i5NV5Y6TDCXj7Hht7GaR5muZYBgwDudrpN7F9gY5W8v6XTxku4rujhiPf4kVNFVM2PE",
  "key35": "4pnFECzkBjmeCC3FKigUUZNTDDEv1pRsNWUWV4hwNy2U66muaq4RCPnMSTrPxYy8bmveysW9GzGtNzYf6n89H8fu",
  "key36": "SMrNFXRfwoXevtZM3QTjcsh5jw6heSQomZTbFpUjihtKYiSaJsi6s5yVB2HkDtAHB8nBAUnioicGe7CsB6Z5MUT",
  "key37": "538CNfcn8wsaD95WdtoxVax1WciHqUMgVdpnQeUH87Yb6CkwDGVfLyU6ecg4r8KSADU47p9FaHEpUoaECkXxzBUm",
  "key38": "5GzDCghjAny3mPkdwYz9qf7dQfTi32CCECFbujFRmEBm9NGvQSoZPb5ZtLu46DkCaoV7SGpsWtrFVs9bg1xvVkKH",
  "key39": "4Y1ubYvMJnqkHxz43qAcvKVZjLxAhnLZK7Jv7jftd45XHEnMn42yAhpCipkByTHmj3ckR2kKZHJYrUPh3qv44huC",
  "key40": "DBzcCPzW19Q9Z4Z7opQJGRf6usc1a5e6AFfJ9snc1ELkcAF9397swHzV5dczhzM7n5Wt3TKxCyondZd3JqdYTfP",
  "key41": "3KtPWTkN9Xsqh8vYDQ5hBUS46jCZFrwWeeWNSReet5mX5nYr5hvijeSfZjLPLFEMpxSavDaQ7WhQhz4Vz8iZ42ej",
  "key42": "MxEGa74t4L5F17dQPAbLXnWF1UhkFUU65WPFAZgt9YayDRVcw8TKrgtDFaSWZM4t7Y3DUHoB9k6zo4aUkrnG31k"
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
