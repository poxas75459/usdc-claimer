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
    "4Ma6gP3hC3wHsg9QaEZp6yoRGTKL4x1nSRq2ZcC3WXuG8Ba6rypP1mbpfAYCNiyNUu4WACBNdws3C2nCwYuT12ZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tjdHBACVpyrwtDyUeCQT3uPUUC6vF6V5nGxAyHEhVd6pgoRM5bJDujQTEvZuGEKV8j6gj4maqDXXtwq1bmuURi3",
  "key1": "3TjGsuez7Luq5BxXqgkEuWE3ARuda3PnVgeJAJd48Swa3XyjJjRzvGgUCabEYGNtv7CNGSz6KGJNTidZmjQByYvp",
  "key2": "WfFGbgKzrbkGdLULJcGowpnNXphuiibwiyekqBh8vrgYVcXb3oAJY7MPykArcfP7s3ciz6gnkvCLpCiTS1iFBAM",
  "key3": "46fb5byMu6aGACfxZ9fhcAn6e9fZsMKtztGgSvr9ufEUHDFNvWL6CfHtqv6Lj7RaesEY2EtoWneUCw9QFmJdk8MW",
  "key4": "3noDMt9vHqmdBna1GiVXmXbi4bc3iCms83Lo5jc9oMPZudeNHkpB5v8HUNWaskJYzijXA5q2ku3sTd6nwXxSZQLn",
  "key5": "6ccqHhPzFgDoVK8w45WWhpmrfJhSkA53cTnkf32xZodL8qDp4bEpZ7Mq271YTptMetNVJZerQJja4x3oSHKXRzH",
  "key6": "2MmkPbwVZHkY8Mg6fAwpQ1rxZB9ST5XBQeFwPhZRsZeYhrCs1JDtrBsZJkoqn6moQFzjkokTBncdTidoKR4jH8Dp",
  "key7": "4UGgGjqNopTAZyUMoPKukZWFPevXXYhQiVXbu2t7GeMD4MPpkV9LBKYAwmchTuqK4pWp4AiPmYPZUUDbNa1F6grz",
  "key8": "5Wrpci9i2aPRru2XBqwhwwSXHqYsn33xToRAope6qC6FCxXgRMT4dc3dyyrgJxXjVz5UCYykY7Es9yG9hJwXgjkF",
  "key9": "2KAkWuWjrmE6zy76sESa3Crf2TJpLA5dsaGNmbfYNvZ8uKyGJmJvZYtgXuur1DzT6SqFySsvP9QUrMW4RLRwHDPq",
  "key10": "37JAcKhis5AX6Pa4cgeM4nfGtCxW9xTw2ttJyMN5u3QiQ4Zhz1cymWAGAkEAbC2S5kkGEGJddXYxw2pfKd4dNWtg",
  "key11": "5yAm3ydjFrVjN9QC1XTwdQfpTFjBQB52Svw89EpUdJe3TJ26Qb9ZbTABzRmrMGbohQefWreSL6kAFi7XxTFTsGZo",
  "key12": "4cTzhpWi1S4EvRdEY2LaHHC28T9w4hc7xYJiPvwsx5Mm7YxKxSXaU1GpK7m4xQzXLj2Wj2jeRPKgesMNUhVVjp5a",
  "key13": "5BLQy1sso3YCvuC7e7UFv4tE9xHD3Ugd6J6jEG8TLmAEfjzSfmHHrk8deRCL1wLwdj7fEkJFX6mwwm4rveUwrMvc",
  "key14": "5baCJ2KNC1ETYWUur1mTNJnH3an5hhqvFBGUvQPGbNNhd94CRCBQKf7fxoEuq29RHL4746fuPR7DGoJJ3ThnYdHn",
  "key15": "4td7UQuPfK7ogjLTAoDe68Gphv6KTyjbDK6JoQP213PtGxf8fi5MEj6kwtREgds1jijaLbWQnQz26zjqyHhVK2Nh",
  "key16": "3yoerWzgXxg8DL6r2aBFB4DcmTiKA3Unck27uA6zo7Ncev16eyeaewUMwcEp6Bdv5uCozrkHNDU3ny6CgEk8Tvfc",
  "key17": "49CTmCZuTf117LTdcj5MXNFksYXCaMHv2Suq1mcaMS4LcucfMrpsGTLE7eV528xWpQ1DNBqGtn24Q6hK3LUUzQKd",
  "key18": "5Jcu1555SD6SzmcW6supJqEsK5srnNWFUTN6ffpsLpUfFomb41ZUmWpjGzVND3z3zUKyWwXxLFaP8YtiJqrw6U4b",
  "key19": "4NniVpQN5CWe3hphG8aAixA6QPRKoZMgunrJAKkDidPY9HtPoeZ8V2Uhygpq8bEr7pdoBZ97Zh2wTDn3iu1ViUCG",
  "key20": "2GYH9fPTrCdL8MVWeLF4Gxv1w78axsYyqyG5LEv5MPjftyxwPvh5GF1CcKfi756Ms2oQy9zrbUp4939S7S5hdq7K",
  "key21": "2ohvAKaC6Bc4PtRmfNRkRnBPNwEbtqjNx8yMHqfotX7uta5CS54HR7tH1hzGarJ8efefqGs4hNbttagtRTQAdUcJ",
  "key22": "2uhkQuAbYpGnoLiBp3xN4HZbBqgSa6QSuYJVNgoj8Juyuive9JgfhhkskRP5xkNs25J3j5GGzxqkWBgByKYLBGxh",
  "key23": "3exzhyhoFD15FL2oMUuwrX5GNT92BL11YHjnYy7tMSKEAf5b9BoaaBZGPsABLUkHHznTYRd1KdsRhhhkCQbHTzw5",
  "key24": "5od5xaZchnUZEsAuzedSSazTeXpCURmyAEGR5aZWozEF8yYGHPM6LSAYubsAcKnHQrgoFdapVhbpqfnJLcZg5vbZ",
  "key25": "4MABPbiq9AW9gZ7hxDsgkk1ww2y8sCyW8BaipALQBm7ANNhHkap68uquSMMnNsZwsNXRTXWKB8zgCjq7kpEunqNR",
  "key26": "3RzPhspeDg4iBUovuDomB3okN1VnGz3wG7iudhJ8mE4xXdBU7HgkXbrm5vFszgEnXNfYKCntgafASshaKgaY6P7r",
  "key27": "3eyEGxtnn67NiiFxZx41v6d5zHNRUAB3VCZndQ1HyC9m3YwrnskAAhMXvMCAGXj6S8V3rVQuws2fQqTjnJYbN2Sa",
  "key28": "48SThVW8WwKnBFifi6vhnvYxQGdNktHYqG6WzffdjsmCJJCSCA16spHxFjjPP7ozhM6Tkx6teF45JG1A7wxizBQh",
  "key29": "55tcvbMLFyvhaxJuCs7zz8BfJfQrMW3dmbY7Nnr78qwqMPUNGz1j5cuK4jzadWRMy2aZKbLSCEKdaV8hRuM5gedq",
  "key30": "3YC61vuabTKpbpGUWoC2HNvucN4WQr4RbPBqWnkRh3JTRgN8MjnhHQiB4Gv2wXdXg8XFupY5VsNRvg9FPnTmsayW",
  "key31": "2KK4NsGpYT9p27Q73bk9YacaKLMNmH8QgNvLpSwdvSq3NwoND1D1U9gTmPaitQSFuBDg5vkUvRp7WiN3cvy37e1X",
  "key32": "4fu5AEwu4dzpcbZYcw11BNPjEwWJREnmzkYEv3dYkCYs9CV2PCk1GtCG3rXxWiZ7y5KxSWjgQXWFMhFGncDamsHW",
  "key33": "363tfqJBnUYyqiondpHJfT7vit2YNyo1HPi9pi7v4zy1832L68noHpmBXoqA1KAaDiX8j9oMy1QvqWCP36qLu9EM",
  "key34": "2pMnAgyshrSmJ7c6CiT3cmfU5yUBFHRaU8gCr5NpmsdL8xNrNMRQZwq4FxwUNtqJkZExVsyv29iANNgHkce9Rqyu",
  "key35": "2ytKcGj2xhWHVuFGMuhXDWGp2zknBmy7jrwAfWvtgR38dphmtNkkngCyKc8ZzCCPSqX8JTe63RgGQYsPBQbhCsnF",
  "key36": "676oxLGYQyFL5YWa3Q7xVGiFsAymgReUKD7ybjKoNjfvW2zymLcb3NLFur9M1hbRi61XV4v6iiyVALW8BPV87knE",
  "key37": "KhsPayYcwiJ9TuV5ophKHWFmMHi74ydhqeQfsxz9pMVwRT9XktDhFLwvLF3rGTN4upqaeLzeEyRcFqBmCH8SLoA",
  "key38": "2C3ZRAJ9znuXcZ67EEJcMjAE33ho5WxHoPEXFm1dMSPkGsoUsYw5kmDBoFWtE5EroFYSLT1MQoDarztR1iUxzorT",
  "key39": "yTBM1FS2qxSGQi8jgm3ka9DJkJg5mkqQgtUDRfvcddQCNjFtj628ywiKDZz6RbTkk1H7EnbMeG4yG9APhRXjFaQ",
  "key40": "3P3RydXtaMg2dR28B4PqvcEH4feyvbTsVRQJQtm81UWNrCgxpiUxN1NNMQQcQ2dShaM7SG9zv9AMw8FhvXkqfs7m",
  "key41": "igztvknJk3HardjZxPaXuTs2BKGJZYjXNaap1xMWqmcEYgHPT4vTYoBE4AKT383sXBj9pJcjdXLnYSZ4ftgYz8X",
  "key42": "UF5KJVs3p1cH7czQ1NbGxTD9i9y7o6gihCfqvNCUvqm3UrU1n7rqLVzSjhb6c5rKu3t2ga6ohDGeGTJYLietsES",
  "key43": "4Dh1Lpmq85gmeq6PfwYea9f3Hm4mNCuu2x52xGKr1p2NC3PN5zsVpyCxHQG5EzzeMCy7EaGmsVKko1dDXEYmDWfS",
  "key44": "4Q9LwmYGRh2zKc7Mko8RfR5pewTL2R9SPASULgBmYW19vwSuJSCLDNRgpM7XV3qv5U2js2QyTeeaEKhVNzJrQnPg",
  "key45": "4hCXDYdV9gR3qiRURCkpRUwSeBY1b6Lvu7Lu8uCYeHPzi1X7w8KRuQ2niiJwsDDUqrB1cTtbRqHd9i1EjV7hMiZu",
  "key46": "2pZNdyXYKAoQjiBoFuPMnKzBBtWeYPf7nzvaQKdsBesaqmiTRKDSfqfGHjTsJi1Ub9DnYDGfnKmMTeQDorPcthuy",
  "key47": "5zowr6pGTpwT13wXw7d9u5bMXJBnVVGH5Q5YGnyurfYfwgZjj6LbFHTL7Bsz2raP3CN1PuHBuevxmYafcc47rNSB",
  "key48": "3cCPqSGnudVBTPweUmAH37Wzs5YYuqmTkrmRMCpNTL92LZTSjnTbWDTcZxF5hq6LuqExsRSqJHB5iCF9LNSpQLPM",
  "key49": "5V8C3vgJu3q9QPWeHZS1tEnRAVmQS4bpbDyfXouAraUCEQmPfyTpvTdDBL8w58xNixU21bN7zW7YjDkMkXgdNP5Q"
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
