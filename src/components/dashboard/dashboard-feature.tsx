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
    "49CAixaQcpgFWmtMHyGL7LgHzEGGd8iKTRA6LewF8bTnp3TjgieEtXoTmdWsrfdFgm1XTJvrMBqQ6PfqZ8d2MXK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pXP7sUP1RbFqeGjP9E5m2hLZYjc73RLwyTMt12E16wyB4rQ3tJeZp2mGEoy323whUBgo9oKGZyHDUPdELWv9PqD",
  "key1": "3wgPMzwnxDZPpgEeJjZmdC3jsNqv2AsNsozxQw8b2cTzDnmBoNaG3MzaTRr8fdeaFEzQCXKrgJ58NZZBnRrV7tQP",
  "key2": "64MBUMTkgkqZLA9xK2JkZoG8egzSGQ4vboVf8vMBskhtFTJWwLphq1m44mW51H9PdQuRvt1GbnkVYxLYMm2wLZMJ",
  "key3": "ThTZeZ4mB2EV2wUKfdZRRh6JkksS7ARaCMemDYDBLEsGzfrsK2nQMSet3PNmYZnXPbBWB1ro83C7BATR55xva7x",
  "key4": "2SHT6oaaquQPR367pb6sd7PJmiMdQHT33m6PCn3tPUfPLhJuMVSW1RBHFyudQSb9nc5JJY2W44bbsSEu8416h2dP",
  "key5": "26HN4AfH9826riKG2enLPtFsqSNFAoxaAbsp7pX7pg9QX99hf64oWR1WdBZKJ5he5iMfCZLJvB3TsB7d3mEq8mJ7",
  "key6": "3urugxajfQWSNtA5j3AVGL6g6hy4RR7S6G8beT8uWW15wXZR7PpVbXtHVYq6egr8dN4ce6GK6eVQGoZkK8DApTRQ",
  "key7": "5wpg59QxRxMJwJdTHoxeQSspNkeWUfyL38H34zpKCbwVon7xtJw7MTDz2PuS3444adJCkSTByv7JaT124KBaWcsm",
  "key8": "2pmWtjYP1iyXVobcgGKn4DpTek7szmtJAwAqkjMWfpPeL7iGwo8PkTezxLFSkeiiikkH84teyvwVP9gPvPmZ5oNT",
  "key9": "YZexEKRTm4J1ThGfhCkxrnhpBF6vABwdT1pBdn68VwRj1VFrZVsU1nbE5yiujyYeQDMQz8JEDNfF7cqiYKnVXUm",
  "key10": "8Pcsw8HUoZ3rJjXypbJQbZkWeb7M6nEbhqtvnbhE1rsSPBwLe73PZYZDdPs5GKmGUi74k5bw69H9BmosXqEQ3Dg",
  "key11": "5axApSYCfejJAGpt9j5A3dzjpbc7zPiKcY3au7xfoE6kQ4ygKFMJQh2Rxxm37vskKQ8akoLTq96MMVG6dLA5ZT6E",
  "key12": "3F4Xcok63m6RFau2ezPvr8ioTvASBoBBhczLJqoVWZZ15Y4McEHwpZ4wCbxyza5VJ2SbwxVXNz2LpPAWi47T1UdY",
  "key13": "4cCLZgVSfwB76PpWMiyGfGESt3xYBuSSaLYxV6w957s2MAZr4GWCRiLmgwJ7tKu3HwfU7FF3Cf6zfifeJNPt7kGs",
  "key14": "ZnnwuAAhTmU1JCYymExoYRez6nPGvCAn3shDUEF5gusQASWPfN94TUSLgeY18Uh3nYZt8hJE3qWJqSEsGHyeqt5",
  "key15": "5cTP1QT7HwA2baEEv1XzHj5hkUv55DKSsMxKTjVEoAvZbXJbd9ifvhuYDfcuG8pL8b57BZAaEqapsk4iZQkQFrNU",
  "key16": "66TBwKWxg62iDYiSfh2pbPFxEaqNwKSQjn8Y2ysQgmdGsY71d4GwbucCvGGTohU6YdVSy4y1cL9WaL8Y8k5zMuuN",
  "key17": "5U3odfhrcX6v24g28YHyycAKs7mJJkG7CrkrRCc9UJxz6rPzKLqdB29Bhn9ssRs5hegk34XrYB7mhSXSQu1rayMM",
  "key18": "3Z41zeCmVHmE18oe3anEKrf5xd5fyEiq7cx6SAYCseZ6WHvpGBGXRDq2P8HoimJrt3LCHXkSM5FR3jtXSR7MALtK",
  "key19": "63ty84KrQRPfxUfnZekcY2sQCKfsPGSrWyjJjSnbxkAx1iKEWUpkCJ6rmVNiJEuXByvShEed9qn3ew3R8Uv8CaXC",
  "key20": "3cxoBZ1TNB7Zde79WvMr3Ai9Ah4KLf3veCs38rwtVGGMXJrge5KPEiBE2VQZpBFcLiWPUMYE8R2uCWXBhw2KzfMP",
  "key21": "4tZhztxKdkvLSHnWsiamuNjNfyzJr4A57XD49zzQwnK3zuJsMj11Qjpg5zBcroBYkNhtjFhF3uoFJEmyWzLCgZvY",
  "key22": "3CPug6ybEQqcFBKWh2Z6sbWPNU66nk7okeki6gVHXGZ34LhViDdewHQcE9FnX2j5DMFg8M6dbDH15RtRHDreNeeR",
  "key23": "3heXiCUKaJqeigJ68ZeH5hjSwG1SUQqiy23Yx4rarRCSjVTwAivyLTjjjK8x5cWXuUmKjoJq7TNnr9hVgFwwW3Yd",
  "key24": "4Nhg3j4HkJDVFqGe4fTrWVvxxGQ5dCoKKhmUnWTNNGekNJ5FtEXneieYM9vHTRibLxhMRvZ6xxGmkgVNNeUwPSKy",
  "key25": "4Fvn8EHLT4LqmVf1rEVL9CP4zT4xAmnkKyZmnNSTojinvuFMZnDgMG2zLELrizsqBHHA4fGCh2xunQuEkqT4FPEB",
  "key26": "5JLaKoUy6LTVurWqPGDSGaRvYdg71BEtWYcZyXT2qxq1AfHwQUVa7A7iszGTJpt1mhMmMbrA3hAb2B84va8qd2kr",
  "key27": "WQpRiwnNwjdLTDhkwtTmCCyJYTaXdn8gswf3MYnJM3U9qFeudANo6QXeQxQ5yniwD6cxKcVxbhxuzrRPu3UaLEi",
  "key28": "4tbZeFc2L2ey2FZbc3Qik6L9C6EDy7ArfiWcPHxnfF13czpisxXFhJiFLrTB5isf9YPXSyWNguxcY3uYZQTzQyxU",
  "key29": "5pMW5rPS5sAfir5wwiHwYJK2aaekKuoK58apXiPESz3NtHoSBJ3VWqs3zQfjMD3x4FHBFRwBy55w17C5LiimKbtw",
  "key30": "3BaGjMqwtzyBrdKZRaEM1qbH3LS4ttkqx14mxDhReskgo4XWmDERsjUkhpokkj9xndqYqktU2eHyoua1gnt15Ckn"
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
