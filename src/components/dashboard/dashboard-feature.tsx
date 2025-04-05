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
    "23Vio2MPe5rzPUwtiC38uH275d2ksT4VvwGf5io4MWYDiAJXsBWB7iEWwrunFF9MAoqv9FYcNcyJtuHsmT1PUDBi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36b7RrP5ajkqAFHuaTQF8f8npTBm5StEdcxbzoYdzbTGxXXygA6t3PdhbUf43XQD1H1xijXLAZbNJ8umSigjwdfQ",
  "key1": "14mAVbXyw2C7psBvJbDPfGT59Uu3tnt1fbaNMpkQLveBKGkh9fXrTov5Vd2axNGBMxWzjkxJf2wDDcrWd1FTund",
  "key2": "RSBXcvpmKdaS5HqFb4TQASjUM1hASzXYyDrwLKiyr9SJ6rznMVftGXpFYPNf4hynJfWtv7gnspZ8Jrw3GxcLAKa",
  "key3": "2TKcAh6joP4fp3MxxYkBGRHwxcEJJUbd87nCninB5rEyVVmjzgVMiRAJqh8MQEMy6baGUS7exXkmyNR9SnqPsEoN",
  "key4": "2vYrR6zbDe5TUyDybhgU7F5W4tXWnAsSumXgMmNSWQocEzyBkhipLM18XbfHGrPPc19NbTH7F21oqwdMbQtvKLgJ",
  "key5": "doiTc5DWEwFsBB6HzzXhU51yHEf8jCiZmdtfCSNUR7mmZnFvCCMVY1WPTXbijkPSjiQQ1bvyYf5PdfmCAqLjTu2",
  "key6": "3cvucw5P7HbnGBkETYtAGCcjRL6ijdk67y9pxbyYgoLEdQ6Yyjwzk5CFy8ZefHnw22gVbRdE73n7xYRBTkRHmHT2",
  "key7": "5MmsyGXszVm2YdARmRPaGotdjYJ6zQRdAusg4EPbS8iCVm2yKGJS4V7CdDuyvmKK8CnJvuMjGAU7QHZ7he8FCVtJ",
  "key8": "3S6EJF4C2uPPpu878tFfZ54sQorb5M6R11sak5dNpgidS82K993aTa1wTRjaVeQVzdoqQ49iwNSJo8SFFtfoFxfp",
  "key9": "3nDSzhL7w1R6Bn8TCSmcNDUD1NLey6452ky9fwRmhwuHZQ1WuZifav622bhECxE3ex9FK7v5jbo9FiJwRLnVphYd",
  "key10": "35QqnkbRfZQquqSeU5CxwZdcTPozArNvn6LfDwichWKtLGoow9rdmcKf8RAF2Fqo1pk32xS5dMxSakQfyL9pccKY",
  "key11": "2JJhZK3tKjFfW5UvGGj2vPCsCteTkVG9XYckgchY3oEzE1BYBDC3tWpYTFxyKu1sZJFKZ3WHtsDpZ1Nw49LvPfEw",
  "key12": "6EurjBBt7q8y8caqqTjLMP21K28fvwnYdzaHy4JDiyiJgN4iK5xn8bZz1Hm25MBP4vb4o9P751YE1jasEK8YYA6",
  "key13": "wvx1Jk7VEVZ1BPQiFvG6gvfVwa3yLSVCKUaPV3NVN7HVMEUt8H9MKUkzGAgJdxWu8f3WPHNbLpRjTx2gK6TAAuz",
  "key14": "2xP9drG1YDD37JLcUHmccisQTJehvfjVTAHSzS9pFQBcQ1kQ7wCJg864yYCFyzfcjWfiV3jGbWyH2Ldxk5kQQv8B",
  "key15": "3rw7x558Ca54kgiWnTAjvuhuX42eL9sV1RK9gCQECt5KvbqBYrpZKvzEMKi5i268KbcswvJRjNSjgfVv3GgoVhFV",
  "key16": "4zAMGLvfoozQ97te52UAAgvq6wVExy9YygrYC81C1DTpxvYrAwT9kdGGAE3xT9fHVuBPu2aSgd7QGXSQSLkvSw5z",
  "key17": "4SPgwvrG35SBasE63pY1q3Unj7bkLQhjBFt4R2HjHwtYBhaNvxzAhSmdsdPRfdB2TZdNtYUYBnCRnQfxJFxtKcxc",
  "key18": "5o6AaZJrqweBzA2LxBui4Jw3MMbKoLBfEUGCP3GNytF46gqHuywDGpkezJDz6hP5d6qVGF21SuDW3n7RnsjMBqBB",
  "key19": "3ziqcBPL5yRViDJtFQRqXSdPpNrPLeiEWwhmSoGpSWCT2p6gDCQGNFTB1D2uPy1QdAbj9SWWETvpuPgoKdxf3w8q",
  "key20": "2WaF3dmEMWyvL4ZnaHP2Y425dZeNUntwWSVrueAHDfTxCt8DRsDS8fTZxHMjLkf7237yPVmm4aLVyfSh5f3FHm6v",
  "key21": "4nvW3qthFUf6zsF6vDfxtpMkWUzvPB7Ht784zkJTRoUFakqtJdMCd36nPMx7QyEwRamYcBe27bH4AdehiwmtBwSt",
  "key22": "2Ra29BFsR5Tw2tEJNDWB9Ppz29m437wXFCBJXKvi8uQKsDVD5notuo8bLp4oYWd5ixcqxVuugcXLoMZYASbgPpUY",
  "key23": "rXzqnsSNdnLXRdGKdefJ4YzV3c8eTWnmCHzNA4B5JAyAQotbUUT8YEveFj9ZDVGfW94SwJd1UK7NEs6o4PGhdpT",
  "key24": "23nccudwwECon1wRPZi5nKj4KuUmWqyiHaPPufQA7g7sQth7oU9r4QQeYGFzSmqGJgs4SdrB3DcsyFnbcRnRTa1K",
  "key25": "2Lux7iZ5t3XzUZLYZoCXujbcj36dZWq2kXmVgsyHay5eFnqzij5p5AJxCrKsqds74jh9rPYqmv4K8W1v4CWkQrdr",
  "key26": "4TUHKfZCCcSAAb5JCAqTV6wDmwEevv2nS9H6P2Q3o11z1UZqTBcdd1DmXZEeTUp4UEPUZehbS5dVnT3NG1Djeumz",
  "key27": "Yvgyyh1xmmy3pUtbaqZ8n743f5ZeQ3hYFyHaPEbASeyU5u27sQQ6oULsc8JNCUSZJ3AXD1tfqdajdEX4WBvsYGb",
  "key28": "sxkYfkVygEznjQbk4Mn46GWNA4jhDRqzHooiBB4vzbHEWDRXUWSCZCyprrytC5ta8FUcx2eqjHS83Jko5xSSMSs",
  "key29": "3ELGDvb6srvYQ4c4XfTSbCv6WLvnDnq5MLtKkgUYntG9nT7E7fLWhTNPyYuX12z7ErkBzR6XNBWeqaNZCejvXDjj",
  "key30": "5JSMghuC6bu9hhqAQMZyT6DYfwPdttx4gSxdZia8axX6rotmDX8SnzZQjgnjWTDk2t79JLgMijjLHKHJey9dvPJG",
  "key31": "65iN3ucJFsVDCNqZahkXWbV1vwNXZy5YFDj4wNRjGkNFAMqMDrLcss3C8yZJ7UkzCqhiBoRiM2KbmuwvHwg5CgnC",
  "key32": "3CY69GKAQixG6c2oyp8FcrPVhGBZZj8vCtFB3EqxGEw9Sa4DNZNdAmJm58gyBqZT2B4QST1BJQqpxb8tKH2DVZ4Q",
  "key33": "4P57g3DZDd2iM5KotZVC4xxQy9bKebbmiVEmte4pVnLnP41UJJHQvG91iZcoNJ9GJhHAZ9vRZN5ciCo7trufPZQR"
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
