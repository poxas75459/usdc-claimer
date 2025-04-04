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
    "3p2KzqQzBTeBxNKfnDNmGnNj6x8VVV1tPWKMRsXCFUrqDQAwWsq1osTxdkzFyvwpGfoyg4NcN9ayNvDcVTyrMKVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RW3um859cs3mcdRRoQqRPNHky2vebn5Ttux9k3GBqyDWVLwRNKEg21bsLZkdP49qLaXvaWi5ZT3ZTs3pitym1EN",
  "key1": "5u8ZG3UfB74EB4wHoLjZ7KZgwXyZnTrzU2jpVB8oYKVBSm4u4RXHG89kZ8B4au4MtGgcPLud847Xmm2fry6Cc7qV",
  "key2": "XGmfiqQywG8CrK8wVkHvfAFVChg8RA2APpwapBGpMVaWWqrpahR9eicSAfpUsXM2B6cRkNerrRbVznRBNyXjjZV",
  "key3": "4yLKApvU6BkxjdUUtjtxBSLqUkVB4MieXL4nCW9hHFQgBJnJv7GbDGXrKZKF3TvaxnRV58iFia87K4g6JVYPEiSh",
  "key4": "3mVJeZQK88c24ySB4bt6cC3B1Pnrbcy7EpmLkFhgM79EGdNko6pvhpTnwoBZuHhXuGcNg4zrPB9cEMDtSit95MAP",
  "key5": "28fc93fujodkYHoem95pb7NpiuYvDFMQvWB4XfCJLRy5PAQcTWQcs4tYZHRNQ5GrmPQAk5Ph3rEtBqWeK2HcbWu6",
  "key6": "5n4vxJ2VWMV7w9wuxx46EASoytkp1bqq1YdQicUSuRrz9Yo3RCTRAusaTEUQBrpUSNz65Vb8PEymp8Zfg33UyAki",
  "key7": "5xVwm4gvGvrXGetQRu7Hcg67KtTNyZMK1XC87ab71uzuYFpju6ya25wNmjHimywwKXb9TPrZ7W39N3sVAQnsAomt",
  "key8": "5W97E1CH5ge8yRPTHTAQ4YSrYN59aFYkrLYdoPPtUTpFsfMH7KSKnLSvm2anagAo4o5ezyr2XgDsQdZpneo143Fu",
  "key9": "123nCjwpVXr19dnXGBSUcgL2fXV6jEoqgcuRhDuBeNKbpxrsFVnTt3FEee7cfc2JKmdMkxch85n9the7tH19AXeN",
  "key10": "2r1zbgkLSFMU7Q4bMDD3p1wgUJi6UMHuARLAuyBHWNfe6vd3zTBWBUGMyP6Rr9hggX6SDrfEX9EmLxZ6HiuMm6nc",
  "key11": "5XxsXZKWCAf4TcBtP1ucVJTQZLywb9ekkkvf9aya5p1Zza755Nco4S1ZqR7p5orDPWwPXbo7qDAstXvte8qeXvKM",
  "key12": "J8RQnzXTAKE8htjUWRmt5vLBNSCR3B9sjyhRF98X4J7ttgSm5AZmSpc9h7kxxXmheWRhAn1XPozhVFQrJNtGQ88",
  "key13": "2jVaffGmkSsJGHeDQfybE1rQohGPgwasfpZvxgZQDrk462rF57TmmMvqPP4jPo8LD7D9t6wRhetPdfVaYvNHioWK",
  "key14": "4UtTK6Yz233RQmNHKcVUmHhrYGgzyntBexyC3Ya1XUUAeJBefgSViKXcgTFvRGQyNXqGKzURDR5mvhaohKuqSQhH",
  "key15": "5LLGyNL9h8N82NiNYcAhsNCnDWpXNoFpD2zNAmALq3iMwza3zfevGHiZGu9TBmH1cCRbMyGpruynncM9efPZDRW2",
  "key16": "4YGisehZGSa1mjZ8yQZb73EmmChGj6H8nem8UTbnsMYDzNzaKwKMks16J8KvPRyrMDXk1HD1Heo5DXqkXLbRM8Ze",
  "key17": "4aKDA8Xw7CQj3bKjx34kyMYZjmuMAiw7PohC5nNW9eA7jJuvqb6knNwfYSChRgMDtoxVMLG8LARsMMtTKJ9Cndfp",
  "key18": "42gJumZJwXwApoJbYvGpyfKHtoKrhrqm4jCG3gKNU3tmEJ1VxeWtZDbXGCHLQUJZvqd2sDKu9rRZ4K9YY8akWtDZ",
  "key19": "5neENWwRDJXPsPi2tUsmztv8v1EwLdbtVoRTeT6KgePiUGvfTvwXoA9Fbggx1quiE4QX67sLCACp3RbnVaoGqr82",
  "key20": "ntTKR7yuSPe1JpbtPsci4XEd97WoLs8Gcjqm7QEGKjEdhYkkoLuatZULs1CUHa3xVKGhKzoqidYRZoyaq3WfVTq",
  "key21": "5ESWUB5BRbtpV8iWmNFvRscE7WKcBgDfxRVArCB38BCmuCJASPRvZnrpQLAwU1GFxLp1PWin9eTdjE298etKUZMF",
  "key22": "eW5qge2VMZWGxWsEr4FZrVJ6Lj55A78o5jVHqdeUfJdXozAVEG2v2JrRWpeCQ1bV18z2ec3ob1NvXPPPdTDThG1",
  "key23": "4j7EPtFKxKQxqa6xhVgd7ozNbAhXnaoMByF1kfbUpLFkm1oK3p3qtGtzTUGWhKWrtWTBtPvU8vcMMVxcJKXLJm6G",
  "key24": "LyhUoS4NbjH3EEFHyQgCVNZpJH8xgSzvpgsSrEc9TJDLCeLUcfN5XfcyuuUujwBHJ18dcAtbMuaMqgYtbZqxnAu",
  "key25": "5u1yyAsmbt3VjNjAYZ2XaZxKR5Lpo3KAfkSWp6pHiPtbm3RqgBZ9tc6VcC9gV1csF5gfVvg8ZkwhJ9yiWc5UsQWy",
  "key26": "vMdkbaN6g9RiE9AzPQaAZ1vSrqGS7AUY2ASsEURN7sBwdLW3tTF1zSBvmzDTQRk1MxotRsRHhZ5EiqURYpV8BQi",
  "key27": "8ZV9u3kcvEjgwEPheFgws7ryFzQhT3mkAeXebk5zXfgTCMVMVdEvxq4xPPs2mMN3NnvLH7CCJVxoX9F4a2F476z",
  "key28": "2TkgaAVTNRJ2CwqZpUpSZTEfo25BPsQQ45WZeHdiWJv9eZc2v3G85hrd86bSj4fsRHdWvXV21WY4c8f8raT3iquo",
  "key29": "3gsUgmXdpQ9S51qjFVjBtqcsrkGvZGTnXjgJKTycd3fZvgM65oTpXXLN7gMR5WKdzmMaMG6vH5wxKSDVkDAv3Gxq",
  "key30": "4ZNf3BTHWMZmT4g5Nh9T1NEz9UrsJ2ijJ9TmwzG1MgwMVycun8FwDdWhGZxYbzMZF8xdMRef8w3Z9VuhRt7V1SxA",
  "key31": "4buCyUw45DAr71dLGMpGwmFPFoNKdRHsDu4SUZ9wGcK7qUGMRYQAJG4wihQy1E1nMRp4iCqsxR7Cjz4xLXT6LTGo",
  "key32": "4fxQGWyePD4fBMqVZh5764qxfjGHtKf1JKy3cyMc5pJWoWfMcnTa1o25MhemcqAYDrkCA64CEDrgdYzoKvb1iHUU",
  "key33": "2knmqDCwrrmkUXG7baKmtN7RRxUHTk3ypv452nFFTcyTVi2SkzsUCKMg3cbseNUAT5KmrfSt7ByW8mpyn6kxp1XD",
  "key34": "KwV24jcVMmAWrtC8umy4PzDQtKk2CfHX7APX9GX8kH5vzKtLHJkhTT1ZFxFDawQteRBnpDM7dCEXSLjnu9Kqp5P",
  "key35": "yuXYxG1p5gome3AgY9GAoinYDw6UksZQVvss4Rmjvk4Bb9zUF72tjTcu9boVXUsgVKJxLMb1pd3mUSL5ArRd1Zq",
  "key36": "5qqXp8xXr6ZnRNwEneMw1oHyT1xGrq5J7221hmWiNQ6tRBqasDwhqpSP6QzoMCAXZeZ5vockfDjsrKD52RXmPbTB",
  "key37": "5J22nrhotw2HjZhNNQJoW4tZoxShnKqQQPzS2pWKAKg8BJv5dzNBRmgmaEhCzyMYDhnwqeKAcHQ2BAvLJ7L53TVq",
  "key38": "BRHRNFC2fkwiDu44VzcYuB9tQaCvXSzSxBR2kiJUxL64ZwNmEFTTPUDPiY7ZENheQhgWnStofDne9dP1FwiMU2P",
  "key39": "2uaUcESwKu88uPa6kg4K2TvyFvmQxXpZiTYUyhza7iYomrB47eBtojwmUGfWUeK7VCQezBwSsdKFYVNMTmYqjbuo",
  "key40": "4fQYR9sSqAZu64n3gGhLhkpJTtQWv4qNWbyK7S2hJoxKf1mM84uUxjH8e5kA7QNgmemGvoUaJmJm4Yj9ezJnmn5J",
  "key41": "25rJ9mJtYkBLBbtatpFj2zbyf5wMgZbTDvqEJuXhfymJZhcZ63HDoLKFmZ3Mt6as5VtSCSvtp8V2j4GYZyAyPvs1",
  "key42": "5srZJrdtueoSpS9hAL9tUqU4EW2TgTyDWB4q2BCY894dV1WAnWot39BpGD88PGDFimd8VB47jRzWmXBPurYzgrUn",
  "key43": "3zWVSPKDizeNLmfWvc77xZRxiBHqEBtxDGweS3A8AGdrXypr8y5E7CzqgpUzeMhKwGYrp8xFYPnMr18m2DN7UCwb",
  "key44": "4QkFjqksGY7kLHa47XtC7Yidvs34kZ7f3wSVVycPJXTMv3sqduYoMH8QEfMNYThV1gu7BTtbFJ13UuBFG4JH1oev",
  "key45": "4Mn6DUMVVqari7GfNpa9mupDc539djgMzYxUAtSRFatRBvgjfE2K3BrzztoR4gG2A7YtpP6NC33hdojB46p1HSvj",
  "key46": "2wTz5HUnwpRspZ6EfFsUVhSTXdH3PVMjDuYJZNP1hM4Zq3rhzXZgH8SrryVHhRUqFZWdqx9SqRv3eQKT91Hj4nTT",
  "key47": "61LGL7VwymxfFztxQZBdpgaqhXmPoGhRp838Y8do8VH2Fd5xXWBYvWze9zRYNWQADNxw62JKkY3mDSBxVpYzjW6z"
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
