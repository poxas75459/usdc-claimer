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
    "sZJ5iuR7m1EgZLptUHD9RTXf7hq9ZhZd6ibae3TruFSr21XbzdwM1hjbK741CoUoSuP9QHncWKC89ZMS48t2H7o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AWa2iQFdDVC9spkG1AkhDQ2Ne5ENVNgYkFigq14TF3rKskxL25N8DxkiRxAAVMJ619Kph16ezu4HsnjWBRL2PGt",
  "key1": "4AurWnu1zbrpjpSWEgs8BFTMDn3PBPzHoQ3xMu7kPLYLLGh5V41oiS9FouZsxMggLWJaLqhe8dXmJDXfZ3Z5FiWe",
  "key2": "Cx3kerfZMvmqt4Erx31UWNMUQQo8egcjBmRZX5ANqM8J1KHFXenvB2ic2HzoX6u9tDSm3LQVgjdBwAeWD1piBBW",
  "key3": "3bUS39zHiQpAoepvJbyPRuDXTMAE9Bsotx4Yyzg2S6HnDHDtBXVEf5cLL6ErhoLKnkk6AxEn2HZNH57cmeYw945o",
  "key4": "4H5V81Mf39NhV7MmLkEFEecB59JgjPxjdHhXxtMvpsRu8HA63FDrkmU77MMAMpNxreJQWZwQFfzCbTvUABk3Whbq",
  "key5": "22pdwp4wj6y3b2w77xCvqZrxpCNUjDYkBSARhoK6mRdzqTLitASNAmjTwzsqx2hiyKJZVWtT8Go5AP5tA3dsW5Tf",
  "key6": "5sCaCr694KR51vuv21Q8YmCv6Z398RDHN5h7CpzS1D98hduCgioZdZ6YffvQfqx1jrMwVLkDkEcCbhnnWDcfsuoW",
  "key7": "62niGC6RdCwqaUddWx7CCbqC68K95wLgBLHh2XxxopFSDoqX8YbBxHhXu1Yh97HsCjngCni9JWXENRTgJ25k5VaZ",
  "key8": "5iwnGNDeqa9QJ9De3aPYDauY3XWHzSzgPPBx3yyAReTneDo5Zump7eHyvfBs3r7L4LiWwuBhwzgdbP6yqirrpDtS",
  "key9": "5sorVdtVHzYHR9ukjyHb5ZMw5UF8kQ9xd2UQMZgq4KZ9g9UFcxn3Zm8iMBCgy8Ez66uxTiobQJ6ZGHqWCCLCZJFT",
  "key10": "2baiPbzy2dLXNKVeVY1qc5FhgozshnLTtjjWhhsioYsker7EJ5c8Dyc5YYJzWRJDrFPdzXxStzFuxSH6ooEgGwmD",
  "key11": "AoUvEi1RMub9pajjfvZHuQJDJJkudaQZZxHUyTrCX4bXToY4jVidj3TAjGNnUCoPkoZ55Yar5qK7azDUzpZ8RuP",
  "key12": "3LX3xVfmmB2CJ8hYnSxQqkhzRrdYLjQFWdGgYsoustV41SUV8m2KD9AfmZRA4fHr7tYCu1P9ZpAmN1mCczUp8Q6v",
  "key13": "2NeFnGZBCQMbNZtECThBWFzCiG2Razz8p4f5eKjx67guL3CtEmz7CrXc5fx5VVcKJk3TbxwfLHCmPvjJxoAnKxLN",
  "key14": "4Q6eD8W8rfXCrsbQSZWx9HT1PToVxebTbAcZUs3hmJ458aK9vXT2NxvQarV8veHVLSqMKhiJvLU8Npzr1LPmiT4J",
  "key15": "2twM9EckQRdeDc2YZp3TPyYDQAEq1C83pzMVpYrJ5MCoTGjo9aowySDNvPj7eEHEvQ6DYJPm1cWwW3UduFBmu1Cd",
  "key16": "TR4gX4M5DPihAs8TtGuqrLsaxXabz7xpZECDfiZctq4pKAG1uz1h64Ti52RaiRkmh58pRWKQxtWsB27Uk2VrDN8",
  "key17": "4PnnRRrD5mwj8pxECQibYhC2avoDS14WVtgsT9FgndLq3Sc24GfrG3EJ3wbNeeRZ6it3YizNdDjFGQxhBX8gDaAV",
  "key18": "2Xui4vkjN1pgQwSAYhtpK3xtxFwMvB3SPithjcnEpvDoM6LGQMC1XbpuuL35cHrwZ8xdmPGb54czo2z99WGG6RkF",
  "key19": "4Gr2MTY2k5REC22WKX4naieaBfEzx7snnxTGjEpXPHBEmCuczd3RYBBfBv68LK91bg9VJ7YNc5Dnuv3JU6x3EP3j",
  "key20": "3nh9poZB94hbdC9vgkiTeASXK1daaPVZPVYbgGyRVWsW3e8HYPToFN7aDQ8qysse2gUNkjEL8ePnQF9JxUmW3kCe",
  "key21": "4nSqhTsePzpG2wn7iZJ2EN275DPMWNy37waPpR9RaS9ETtMp3wn79kmaHQEnWGaQj4nR4v3p7Khk8bfUMkTBb7er",
  "key22": "3H2jfCZnZhgwUUf4qFSPsveNjAU7BL6gMYXujyrn57k3FdTCokbwNGjLB8Xt8SyU7fKhSxWajp9PnoJC5aB73177",
  "key23": "5sCCp7LttJadUx6kiUDJ48QFm43WPzfXMhfZMP7uvfgbQeX9jYN6jn1PHN53wA1QFbB9XrChbSaXP6FgFhZYDN1S",
  "key24": "UY8R9NU5EicsSLUtS8vCjvSxX1HgCENi7W3CBAd3Xrm5ovSSdJhA3ARrkhhG2AqzhQWM87t8uUMQgbcZDeqjh8i",
  "key25": "5EqowQj3kVecQe2Z8vxDM68qkDsrgvgKogqxKBR6w5vBaJ2QPam9c8m8715hTHuxCjmYM8rwzwxKVSwFtW5EVMMQ",
  "key26": "ddiVaAS4XCBpiRmtKr7EA419AcSkETptfpZ9o5nRjVsbtbkQ9gR1fo3oiwpeKnutNdzYZZYyByfpoYSJVR84ewR",
  "key27": "4k6omCjPULS8mS9tNZoV4XYUYe3hqgPnQgB7PCBC7AYK66y5KDUnRYNKWfyvB1ffPUg9EA8Kx3bpqqjjKBQVwodo",
  "key28": "4fQHd8anrHJ7dnMwoLo9AfwFCJHJSkk7Lr9snb7ckF2Jo3ugwr2LXz71vGkm8FoT5riaL7xCNcUL65RPPrFVK3DE",
  "key29": "44pCVfpULFUaZM6AVJi5mgtZJ9tZ1xQ9pP37oe5px3yinUMchTSknQ6yQbVvpwSrTUHLBfULkmLQL1VMHBeV4Ymb",
  "key30": "4ua3ctyxYKL9sdwPVZGHxMYXVtcWvETnkHkaPTsc13vd8HpQ1aYe15k1wAKMkBVPta6kxiYQjm2tnnSrBQgGbPNV",
  "key31": "2x6g1DYDEEYMewLionSXUD2u6Kj6seXpDhRHDHQZRdnEhwt8rRv9DJeuBrmGvybrNw1Xki4L9qGZcE3CQi5MWZ1X",
  "key32": "2EccCiKz2X32oDDN8hgU4MAgtXoZP9nibdHjAitwepA3VkYdgLfozddxN42iqxomruHLCCBFNb1Mgh168GQorVLf",
  "key33": "3Qma97uYm6d9gcGXXCbaEt8vkiGKJs19AFqLzWN3iEnLkogg96QPX8nhKzgKyRUKj8vvX6xKqb4X1gm8TyAjRCtV",
  "key34": "2QK1X3C6a6JPayr5DVTxknszmWVmP7jcyNNyRCj41nA1K1F5w1NHsCjyUzuzYHa3LgN7e3CeFo8AGaNq1oUoYGoo",
  "key35": "KepyV2eJQ413Zq493peUJZ8f3EtMFrdfDAZVwGjXb3xz23zXqfNyKNiLPiQSZ5cdShTEnvcjMKdpjsvhibjzfjz",
  "key36": "1rEVLRdJRwhbJjZaqbS2w6egV3QS33a7vaUnTtuGYYa3HUtBsrViZcjMz2FEp1cYioR26UaHnVGxaCNLzuAipxR",
  "key37": "4AxSuXPS6Qh4tDMtRc6R3KBg6VygoKY7cnpALWLKVxKUkSK9AvPNnhQ17mQAwTNXnQhhWFLiX3vervw2i2MsFXcf",
  "key38": "53uaS78x53ZfkBNV5r6Dh3iR7jfgyPsUQrAYZg1Kooh3JXBQXYxd2MHvcEN65Lot3HN2JTcu6t7yQe9zSVZ88kor",
  "key39": "4LYc3Qn4XojA656Bnz3hyzYpBx9pUfyrmZgrCjNHKRT6M4fyPak4rLC76QyZrCth3qz1gZn2td9ZWZkpy3UDdDQk",
  "key40": "23VPDSBJ9871Fzygbczp1MJvFmUEekQRRbgadZmvXxK8jxmani7ovSrBU2FAkeULenX9oWeq7vX6CF7Fawcz8HxL",
  "key41": "5RJB3HkAHVeYDqcX553u3M5hmyL9pJ9iWPbXXcEGZogQMiC9RJ7YoHt7yhUHQWg1pCgs8tRnr4C7DK3TwfnoEj3h",
  "key42": "4a9JwGJ5MVvFK9bpdf1V5zVDYKcDYKvf2YTJ8kjaBo757aaB2Hc1V6Vxg8rLCdVrFbey4Yw268MbTZcBKoe5HRuT",
  "key43": "5EYqyCMNf12dyi7G6KWLZpLBguzqogE9W4vMAV57VJztwXzwb9EM4ZvE3SjW6ym8Tqrono6Wty4Z6iA422oKbcHL",
  "key44": "icojoVpEmpTbXuBdvAW9TmNLYEU3BBp7BBjebkNxQU3NVJQfycU5KLxcZWoapvLrnQAynpfM4NxSFfhzifxbKTk",
  "key45": "3k2jdJEY84fUkKwdDGRXdZzQAEAUZHC9yZesCWdj81B3mZsuaHAmuFtkFEedMRN9NBXmMHnTEKaP5ttXsnqwRKBJ",
  "key46": "2u67JZQ2DaDt49ngZrVCGkmtuwP9owHJaj5dsFwrgLjGYF9B7vmjqEa7pjuDyCVEsn9WNQoQJKTHgKLh95uEMsBj",
  "key47": "3dgmB8fdgDJLRse4VEb3zDRJzAmup4soeqoTkCGYWH3Vv4vH2BLTxYrzF1ipU6Atgvqa6f1RcUWbPWqvwATBG97j",
  "key48": "4d1VXri8hPL1SkMg5fkLuGjCzF4SXnXvN3RMWKhc6Me2HwLbn6crWWMnuPATWb61VRak2ggAh1ugYygTFDJdBTiQ"
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
