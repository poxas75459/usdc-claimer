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
    "2or8mSnitMyRXDDED4iwFpnfRSr27JGJnEVd5YFVG8AemiVmGiXt8DFExP9r2FoyCQfvrchrrBJrrGsWSXGSB3gM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kpv7ieH4Sfa8okjuFBXwb5aBuyc9k2QNPgZHxMMFCTLRpw6gLLZpqPSXySHJPDhSxdZUTfdntczaCrbzxnMr19m",
  "key1": "5G32J76yzWw1mGUpxu3bDf12kpPgvYUk27Q3gSXKjqXCNQEGqoqAnsLXxiqwfFTSR9HhytoNNAe358y8bM5xd2CS",
  "key2": "63hw2i1Lqt8KMfvQq1JEXJUDafgv5apt1bKWcw4EVwtm1MLZemWjb3YMG9U4hrZu7u1sveTrY1XPScHMfEwssn4c",
  "key3": "nhnQ7PnDYE2BgtwzszMKJ1y2Dp9Z6KQrTJdEJU9HPXUttMdbJ1YvrxrLgnLMBnQD6gbEwkjv9BHhuNFNoJsGVJn",
  "key4": "64PxyWEVKC7Wqa4kYjHY6VETkh7oj7nUFX4aHy6Ae6yG4gwkG1EbCoPaXtya8HriLBixXuq9AJY9wYvnYb9CYGjq",
  "key5": "372mcgw9v855JVWSVUDZyHmcLEfVZ7xEzLskE8ZHa3KQTJYhPsdZkEJFmqk7zs3GGF9xbdtEps92AxqzraSf4Yre",
  "key6": "4qUPZUCAhMxBdpJ372CJP3sNxJDgH27nQPyAdMRQhHEP7AJHGDVjTtEr7eS64ZrnrXkKiWDVLQQiyUYtgyL9jSwj",
  "key7": "3EGYmPCQwpRSSYWYFqJ2XDfYy9RSHm4hTjVVjxCdGjhqKALU6Fm3yhcq8UwCcBAwHG5E5uRt6mwHtfvcCYfcJFP6",
  "key8": "54jmcNTqhG2tRJ7tddsLTTuyTNbjTDpgbBV4L4dwuAqW6T9APj7G5dp1QFd25Jb8Sc6qkWCezXYpYECVks2grGYi",
  "key9": "4ATkdFe2LmRr51r4MzkfcqFP2VzASv9SGwaFPcS6WHFVhvZ8DUGx2FHzP1rUqi7Go2PRV3WcycRyzDC75JpUnJo5",
  "key10": "hQ7GP9gg4aitGGEVupnvtZXGAS3aZgvY6aibWC9SDYpT4ZMnEVfrcJiEvSjMSiNio1R3XhSYgdGRKwMRne4PMtA",
  "key11": "v97LM2VNK7WGKy6rTmVPfw52r6gMkBgs8mUThJjAaugLo8sEiFYFDwRBoBN4ir3g6Mb5MvPiuk6z747A9ndKgCp",
  "key12": "MfekhCMgbBLmDtc2z8cDcWqTB7AMGHmqbc7XXQsWzLw53zgw2YBrFLibJEo7MauTiBb4oVvmb3VBbjH4CmMKYM8",
  "key13": "Z9fuNhvvKPRkm5neEVcM4Z92Z9MZTSpCp3V2EiftqJ3eBD2DE1BveM52Q6FTHDtpVunxBFmsmmTeUGMQ2c54DoP",
  "key14": "47v69dBQKkCZi7xndnz9ViiiMtRGvNCUDwRMz1jGmGJBTshftEaGtQyvqLVrYMXbjBoKYxSgnmxTwb6nkfsyDkAb",
  "key15": "3UYVzevsiWpY9g4SzpBuQiwXVPFxgrCM4j8s9nio5Nme3mHMYsprkiV1bKEeSbSaZ1byh61MN73pP4XjWWQpQQzQ",
  "key16": "6791skW3k4gosKapCEcsNBj1eXkqdLqoXczXF7ZPHTxd4wbZxancJHZv71gm5UpHoKi5S1uv22Nnhbodyi8WK6UH",
  "key17": "5bEfnWQBz4oJ2x1CgfYW2wGkhW2MxEPKbpJ6TrwaCFbi8953Wmmv2joGtvE3kShhr6StpD5zzL28p9soUTKxEiwi",
  "key18": "5LiXofBxnjwK1pJ9hWZwwNsAhPbwcxKBP3TNZMSbQnQWcXjJCXBotYa1kvM1SmDpZYcS4u5tasGQaov3H9MeZT5p",
  "key19": "4MrjoxMPM8vfpDz79W9dfRPMhS64vassVib4ZmMGn3vhX2s7omZCTtdCUcZHX4uvmGNCGqrrP4W2rY35oREnrGY",
  "key20": "SLYDQecQREc9aaJMvT9UbeRGnuGXfbN7fiRywjncwsmga7GWirtAoiJBaUSUVek9RWJNgK2Loiy4XHkdXSn761n",
  "key21": "5iqaR72gRvhM55nEct2X6hYPYHFsQxjaCA3SpvhQFT5EnCeAu8gYMioMFP5XvuxFQgimvTKzoWexM4RXNNDHTs2f",
  "key22": "D9no6tRepZMs8dLAcYSW4RrDMJB6i39GDH5cBHkKkj21e9y8MhJSRpKntWhQjTRy4YGGKLCxNcrVzrQbkynMnH9",
  "key23": "651UWY1tPEdyVjZiDkvPELEuhcsyKMxJi5aUCCzgYsu3j8kGRfUBpAnvBxXnhyK1yx6zyLDyuF38nT6UWFM6ZJYq",
  "key24": "4B3heWmF1xhQkMd4XQ9ufG3U5tCvbJ7Caz6WNFKcduYTNB7VUsTsiXhS9pbp3EuBWgohPXNkbeGUwTBtT56vN8Kh",
  "key25": "5i3jXnRA3gJRr1aGqAsWXj4adJM9PgyTR2p5ZbotFmNtgMhzQ42ed1LKgUuqFkoXoRi3LxuXfFsaEABwMrnnydR4",
  "key26": "5uG71KvfGknawwoCAguD2GCVVXR3AFuWTtwoVsyVctuySygetcXpGH3qrJwpPp2MxxFcVKEMUUuixzYePNvqpAZu",
  "key27": "4HFb3ptxESEDNAqTDd5cHX2uKBLQynCZ58ctohS1BaeuoMTRFUEd1bMUznDg4jQeMqMVbH5yCKWAWnL3muzWHJpa",
  "key28": "T64YbUU8qXPtMYkoVejPj7iVrj4g1Fucrre8NGFdv863iBoPX8RTLjjc9C21zAjaTk34vxsHPLxSfvGFtF9TLbs",
  "key29": "3xFJZn9ErvuCi7QjkoNLyfUgX5TnEEn6rN3jc7xsf5rTUuZ3oivGqBJgHSJ9Y4WonsCTyM5N6ZwtkTbjQNkj8kSK",
  "key30": "3qEf73XKDBUaYX39RMdWitM1PMvfkLX1XZMu4wr5MAA6Ei8k4s8YvsnFYwhTVYKbXcJaNGBuFTZSLbH1ECiXJ9QE",
  "key31": "5LK2Y2ZiwT2hKGw9yftqWF5beSoNkGHpkMSFoknoDDkpgiocjE46GApwRK4wSpFWDoCgJYNwyv2kbxQSsdUCKpEa",
  "key32": "j2H74iNM4URHZMMgJX7GWo51WZvhdDfrUEm8fzxBy4zDS4ndC8Vzm4DSytrmvhWYbcYoLT9hxT8XCvwg8TgK3rX",
  "key33": "DPRe9cd8RFBuVtSbuX2vi5C2u5sE5Th63SKtE9nSJuv2JAyT6tWR2P9JYCyxMMPiyfvbymRJb5iiQsgbLA6Qydz",
  "key34": "fzcG3PpJi14XCmAdwBdF9seAz885YWxzkngfDoEu9AwPJ3QkQUJHtbe39RRwL783qMNUrokEgx9sSJ1PuiXwU9p",
  "key35": "5YcYUcMrQ77BGFDQ2guXNhjoWjgQ8nzxe6EHHdBWQta2yhNNxFUFQ3LvJ48Hzthd3kYzso5gpHwJLJxJBo5u1cHS",
  "key36": "2YyopEYfBBNhMpoyWXP1TWmdgduFeoaG7r5SfpncSLM5M3RG3iazLeArGPzmnbxkT7UGKoqtwhddZz3zqA1bvEsv",
  "key37": "4LBbYLY2gt7gsTjaRBNNhY3fimhU5VqLvXXMfbk5ePBcrx3ohJp7s4DpowhBh7ArMHqDnrPgr4QwssKRzvnG7C3x",
  "key38": "4dTCNbxLoaRcTubSSPdpEk58aCJphrzkvMAxhVrgFSjXRWhNu152kLYgLpbqSD64KUybZpVaWkSQtDRncw9JHJ8F"
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
