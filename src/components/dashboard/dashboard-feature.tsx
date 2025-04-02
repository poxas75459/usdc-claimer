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
    "J4Lp1pPWShUwR1TCv3y4cDpEkrDkYvy2PsxwRsuJeSWb32CUQ1w2eL6B94EUgkMTKrJHzRMgAbNxUxCgoFbEBou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W7gK4w7ojP2f5vfCuj2vWSHuy7ZDo5i3PXkhgiv4hKCUgzbFBLUQ8UkvCLEnEjas5JTyqMmppdDzksKtoPR2j88",
  "key1": "2gU1X8MH7kk46TR7NY5cCTT9wMkHnpipnYdjbjj1YYAbTyeUGwZUJcprYtvigsFB4fq4UV5n9N4hcr6FQ7MpovpV",
  "key2": "54DePd8vkuAz9g9ZpT3t2vk7GPakkNbRuyECr1U2pyXzkGwLgtJKkVbGn7EnY1WDDa5evEh5ormGssYqKcL47fQc",
  "key3": "3rYKZEnoo7Cnu7VGkH1LdwZSPcwP6iejFJnLDpMkr1V9WwwB8onMJRrGBHYfHbLEHRratrTEp9kzBzqzu8GDA8jX",
  "key4": "38YtzvRice5EJ8YCqjAU18Xs4rR3x9woPLyHpPi62ZvDDwyeGu3sJviWTZCjxCazeeh8FM6WeBoMDucba57es22J",
  "key5": "5e93mJVZ2BW9NFgtbtaceYy4N1DCNTVSfFJdco6k6bCEnWvq87Hd7CMNY8U8y2uC59ZZ7HARXMstdQdsiQeiivge",
  "key6": "4tPuQS8RCy3GMLWzsDMHGD41wEu3WFeAj8JkynC3AKVZhq3qY6H9wKC8tV79kpj3xRVfp4mTvbaneJ9CqxonZBvR",
  "key7": "4ePrm5jNb1yv6XPSrWxmBNu1J6PMhNL2k9wdvjpjvk6KHW7zXbrmAZLxjNy62fuAQaJkqjhhm4JvpdJqT9WGZ3Q",
  "key8": "4ZLPfCPE8qeDqxYv6LGuF9TQbhHdkYHcp8BUWEXVGSUcyrc5bjMe3252UBqiLVvhAm1QxV3MSCBHbr4qQmzUXGxZ",
  "key9": "5vtPfEpDH3ZU9LqLK9kefGnarTEV1dJGQAoBgWBDf68ZmsaGBATMoQRiXnmaGHmy1Kf427VqbsyNYd7TQ4FUcT3Z",
  "key10": "22EXtUcKqo833ozGKVt6AUGcGfGpDN3qTAyHVqDWa8qdPUtVrraC5arEaU4DRaSQUA2dmaymRVnPgc8VbhGoBHXA",
  "key11": "RE8jcfs9NmZiAH2fvtbDww2AVBkSSH6S66X6JXzyafpJFL9M6hWmqTUaPbvGaPatFGTPuciayWvKt3Vtd2cxNmA",
  "key12": "4q5JbKSLZeKDXnwpCjydKipTjhxyP6yeVH85QVPy1w3tPHJuSyhV4UYFpFM5XFq68gDsPHxKYcaiockJzmDYypKX",
  "key13": "4Gdb4LW8uhQZPxXwEzkgSaQmqTYxMNdtU3wWy6kufNEV7Rz5NYq4Ri2rgk5fJzWybfUHAZpWRDt356S2dqZfbSLT",
  "key14": "2JahRMnZpQ2dhYVtvs9pr3W7Dp9qxsVj8wPp7HtqAcb1tYChqvKzMvBJiPUXVDqcuUyw5iaozJPMyubPGU86qq2u",
  "key15": "5Zac1wZBtySBiar7vVJkRM3qprKHBwLdiNgvugNuN2wr1hDSq29XvRpHLbYPVW1kDqfM1nZFy2VkPb9n5nVeqjZY",
  "key16": "BnBZo1QyPX2xXmqM6ptFos6gsea6Xj9jWCihU4tvpbxges5MrTKYWdhtS4XRJ41cRioBDvgZi4ose7mAL5N1gGD",
  "key17": "5QBHhTwjbHRj3SkrFx7hNArBgSrJnrpLTJ6A4HN4Z3ZMRHYYESv5x14xaN7BS5NSQ5GH1MymPsgDLHJHXBgXAVG3",
  "key18": "41fXMGYFHevTXWFn684mnSEvUs9aC2PGA1xmxpu6F6ZAsyEwgFpyEgeTJAccPSQyxrvRCH5dBTMVVVxJKqmWJfYv",
  "key19": "5x3tnFGhu38sAjqAxN2HkxtjBZ5kbdef38Ss2eypv4WLuLd3uQtAb6cDWGSu7UXpAcGViEu4rUv5Ez4eGEV9w8ru",
  "key20": "5P6tnLN5FqSwBbRX4fpn1xspmDHDWaKJqvVMTnSDe8bReBcBgrLg4k7md6acWY76XaUw1QpvdEaWgGsh7wxUYMm1",
  "key21": "2ePD7ko4SGEkBAcWPjrSin2gjPavcQHJKHE679QRGG2G5bXY9RZYdsW35mAWgSGXngM93oSFs5QWSJtPRYBzZ6cU",
  "key22": "2E1gNZsynX2FaAiKm519kywprcVXAqQjtgfjUPxxDFrChn8j7ry6w588F9unc7ScP2ME675d5fNa37YisqChXPn2",
  "key23": "2V4HtET8KHvuGn3sdfZVByH448vP5b22uVEKtruck7EQNqMXeqD1UAxvWSWQDjVy6AznhkyB7pUwTEVQSpA3DpmR",
  "key24": "4Ub42cjsKqSJdUjPvXL5NnXQ8CPULW3t4fRjFCoCTtXARr8uSx18oSnDTsTccGPnpjJUsVtbLoyVN2KGwqGs4yD5",
  "key25": "4odynxeVYKy8jqXjxSDbB1nRYp6Yc333XfMKwBaTouRUyAywk9Srqk7nBNGYvjJTKSj12bMY3h81pVMLKTtR1h6v",
  "key26": "2UN4hJaDBSD5EhfqjbEHLvzg45sMHDX28ggui5gFbutA2TKMuLEHWfjWaVEfZ4TgyUzEbDUZJ5A7X9nyQjsR4ML9",
  "key27": "3mtD2sFLLc6CWe7uaWSGJFYcAnK9MD4Z92jsZ3PRi9NpqkstwT8GDmmYFFoLzo8SFYExJ215bgrAXkJ19z7mBZhw",
  "key28": "2QfPVXvVj2wFQ5uGs83SwXgwngfT71dcLiH3aeaYw6tVUQLUwP9JbVVskhjFjoLsuAUP1xvpD49iuAQmF8zqRYSs",
  "key29": "4Rasme4CfCKuh2YNzffkZ1AQbSxVxvjzt3fqSgRvSpActG1rWFKdqoxkUFW74K994bRDHuh2dCJKu1og3VwCfBce",
  "key30": "xzF6QZo94rN3FQ1Ur1zntB8exf9RTVbnSenLjxVAJjH2J9r5rJRdN9JnEWDG2hRMZhs5WNXUuwyoRJu9sL8QNM3",
  "key31": "5u33tTAjmydMqNziPL2TECE4YihWuCR2BZikTnJPDU7kMZrAwHGumKnh4rQwAbY2GF9quW7h8TpaNQpjEkvzC6N",
  "key32": "2AduWvgYmTgrihHk5kwYZ8EZSn8dy5CSi9WpHzhkSV9fHFP3ddLKJ5rv7jSAGp6PgJ6f52jKgCNrQVV5P2sFZvGy",
  "key33": "5Pvidp3GSMcR2iVShwVHFwULKwzMFiPPzoPPaDpV2TLsB5fj3GZR3svAspyKwL9UNApWpmBeAKKY4Jm2q3pS1nXp",
  "key34": "3z6cFYHiNz6eUJ5xR1bbfGeWkBLwpXWzXaF25H3FrVHs6cDJPTDpLDntp8ZLcdTJVptMDEABYN9QybRnuHKBeYCs",
  "key35": "2wrvUTeaShs6BcEBcRbYGi9yNU659pwvtnFLriphww56C9AU67wX7d6wrTUgFZYSGSNrKLgWMBkxeANpzLPNUpvv"
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
