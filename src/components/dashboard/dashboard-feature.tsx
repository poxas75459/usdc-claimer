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
    "2Nj5XkkS2qGTgx55BC7rMWvG3Np3rkBWgZJskukC11LXSAv6uhuRAPBuUw1FVkGnd9ywiVDdjjvdzof2kJ3K9iUq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41h3kTn5H2jgydbBXcDmiqaagFXnbDNgu1LRQKPirqhKtLPKdLwzmuSuHWz6K4aDaH7TVmY6KD6WstKrX8FN8sX8",
  "key1": "4wsg8HCs5xvan7M64VPQYad6Y1sxnb8WtL6BL34PJAkXEb2eiY4MJJQiZU7U7ZPDvfWnAYa7qRnGmsKg5mznB9Fr",
  "key2": "3GTHWj3zBeaoPcDUBW7ik2ss8S8LAsunaUV4P5pGZZnJZWc8kFRaW3FSv6wYdTA9THFMwk2oYxFJjRp5zjzanGUk",
  "key3": "MDS5kPuudSFQQSvLU58noQhU6KJnohQg47mESjvEGAfg3nauaZu76zwi43EXsz1w6a1uy7ecaa5KyAz69S2fc6h",
  "key4": "5JNtKMn7fDuFksaniQgRE1Fzk3e3uBBKNYhzv6AGEHbCU1TprD1SeeMCAaNC7y2tVp5PFRDFJJ41MMoq555A73MZ",
  "key5": "5GnZ7KAYeoHFamS531Duz21JA88m8ff5hFHAT6WznyxaYeMdXqM24PXFmhgNjaynLtB1tdjdVvMpV8u3dd5PNWbN",
  "key6": "3KgEmbNgAQvqy1Qtctf5p5xTWsx72wDNimzHwU16revmap3KerVS1DiEDHxFf6ZV1fdvUut6MKBJTZJM5uKeehZM",
  "key7": "2vYvS6eqA7PXU85unvFYwKr16QwrjMg1yqYMQ5RRRio6auaXmXWakK3ZZchrtFpVF16PAy41ca5xxkt2Q9dY8Cwd",
  "key8": "2hg6akwnEw3TSEsLMS5nAoPZTBkQjmcBr4nUxDr5DTQth4kZ1aJ5un7nuoTeV2xgXScyxeNTNiTMCx5fzwyxVK3S",
  "key9": "25vxjmPdExGJsggPofRmcKPqYJ1198CkUkiWGRWVUiBd3bAbqN7TnVBmeiX7DLj7CDiZ9dmp8bJ7Png8teWGArEq",
  "key10": "5tTFEPjRSNBzqiD4wDxy4mJWKVB9gcFbAx8ukeQpFubE8kQXBaQHBnRYcER2x2tinrGoTDkVdi181zb1hgU6G4YH",
  "key11": "DWZpcAkAv4tScNgcD8Dat6WETmakDVtemnFSMmkMr6P9rmuhN88LcAZg2TeVEa64LYWbycGT91bGxGVninC2YmT",
  "key12": "5YVrs5kjrxRSXRSnRTsAKhAk5h4kMgKMKQ5sXSAtRpRPbkFpdeM39BQgq1QCrJoZarY5fi98iURq4VdCVafxV8uk",
  "key13": "3gG5FSGP5bnj2vPArH4QEJ9sAePNefvYzXEGCaMefJkoxZaFCekBZsj2xtcC7J8cTe95n3pB3DLGF9WUpuhUwQH4",
  "key14": "3THJx1WTJwwpCLGQvghGJYkNjnXawSukioQaf3GW5YnnJsmp3NcCaxWC8bbD4QjxbNvrXfhsxPdfdfE2TNVuzSRg",
  "key15": "5FkpCiPq8BP2sD1xXSabMiyR78aVYjYuj5kvwS32VRFtjHc3w4tA2EPf1FC7Hj7WTj45Umv4JhP4sGMdA8ps57wV",
  "key16": "5PiQgnJ3zabtm1Y4sbk1M2F9z1Jk3XsQ2koV3bUHCLdp6hb8H4kZnQ8FE99x4MDbCqm44bzX94TgjQ1SabLEcGpW",
  "key17": "5WRnkqmsU9ZemkV1X7Z6ERsnGq3m8PQr2vzPKRnfcHfZSPdJLrif5pu1TbmZS3rgWqtkjWDw2sVfbVNwCvCcJbcS",
  "key18": "5T5Zd4VDJfH1dj8VC5xQSsAtAyWLVfX9LRAEqRnuDZUvyRbXNBjhZ5KN14wxo7w3VaRYRFUGUVpawB4esFE3HLt6",
  "key19": "3UX9MCrhV9iBkrffBPkwK6W3gq7dPEbs9q6Wuc6anMV9fPVa1heVii87R2SCrAQtN7ij68NVYz5Dc6wjLksHveCc",
  "key20": "5Ta2LJzdrvzVZqnfuhSH5i3DkFeUF8MdkPZUPExNmE8gMMbqRWafThBsfppvCuVw83Dq1dRPBq8anhPJJQsvgjoV",
  "key21": "3thBqBK2wxARpnnp6RLoYxw9Zv7fSPmvkpb3rvhmTdbW7rj6TtAk5Gf4erUL6Q1qPDoahE1vsmL1E6diTvN4K6RQ",
  "key22": "5JusZLNVHqi94QvYSyiMk42s1ZmKcPhcmaWjiL4bxsfXaFxm1NmJZkamUJB5cSnrKyTZsvme7SnY2xeH83hLjetN",
  "key23": "3At62YpynxgmjgsZJGGSLuQCjThzsEqJBRK7p6ERSoEPr8xni8PAbwg1kECgnZLaJyBvLwMEQKAKfnr2Mht8h2hD",
  "key24": "aXv1qkUut8YsoiLKLBmeErsQVkfq3wjNZj7QqCrK5HziFUpPoCEKHUtyddVPewNATGqH5zSTgcn3DchU5WbXf7X",
  "key25": "3y7wyNiREFxc2ghvtrC7RoU6NQPnfFhMkgdqzzo2ZMTvcHCToBaKfZFg4Ey3g8w9RdcsJmRwprw5oXrk7BBuBcNv",
  "key26": "2pzUDJr9ECVBJRW4nZg9r2QLn5ceFsm3ADs57ka7gffPhQT74gVZJfhukPjWeXBkF8dTMirYnuvFLHdMkXZRRzaV",
  "key27": "5zEfoUeXD1tj1XbGNVKrioCXeVAfzkzZQsLQduCcnmFTLqrHqMHbcE5DbFiStwWF65V7hAZny9xqSgr4Mg3quzT2",
  "key28": "otv5mnDa32TRHdSKftQA2qqmvoYjmZJWptZCFHKQKagHTqCkYYqTRFtWiQMCXQAW6smC4uYe1r8h4tVng1GL35V",
  "key29": "54Mgjan5P9hs8M2mm2Vhcx93wmb7dS6sYMa8cYLFbBwkACeUaT1X4NseK2PPVb6uF1MPBzr9vGUTTyxiYzjja3d7",
  "key30": "2ycSexn6xAHp7gqbpk654KnDQE7NqUauydpReGmAcCF3q1Y36mx8NVaNb7pcJcS2ZZ3sWmK6rcXtgLr9eKQ4ENNf",
  "key31": "24CjoTRhjk5Dsd1ro1EY6AA1DS9kgxYDL8BJSTzBTDeJMJUiVy4rHDCGxnTkbobwR8wAKSMqid61ngfZ6FuE7bCx",
  "key32": "5nZXG41Z9jBrpKhGK6iY33QQi7wUMzkfSt4u2iDhzLs6qwR4PMpjcM5NosvqdqMocPrcpBWfgM8eafSEcog88viT",
  "key33": "5y5mwGfvhLQ2qLFUanKixUSkknQLEEPXBnMxcrFBTJbu1cJBnyFxzGkt8mp5p6tX7DERNzx8LqRyFukZyntGpPLZ",
  "key34": "3P3TKquTDHPdrBL15Mn1WUeFMBwPwKhhpTVE5dZYzFNNQzEhekuSV95Pp71AwspmNPM5ueTTo9mHC77JcBbTfyuw",
  "key35": "4mn2bHtpeFCkfHYt5ZKNNWFwMm8tJk7gPLj7NfGYHQXzEVX6ToJMbukEKD7m1c1yP5428ykbf7yZnAVx8uWQR82D",
  "key36": "2yEPyyvtJsYYm86dFp1VLP7JdtXVHTyGMpaWv6PnNkUsxago8SnwS7iZSFqDrYGGwQfsiLxvQhfv3NH2skrKzxW9",
  "key37": "61AEUZWGqbZgCgVHegnHzEubAjHmDw3EtpgsSLAHFzKKcraN2YYMx3FknChGxR4um8YFukeZoFWz3X6W4UzsDn8R",
  "key38": "2tmGzgsar6AkJzQCdpWp7DozgskKDXMCwL8aVLAnSpQp9HHvgWdGPTLb9rjcPjoA9uiiY9ptc2yz4xamwExjLvwp",
  "key39": "4ZoLqjtnpqPuTxpLMcVDVfJgCKP7eNoySYtV2JZzUR9dEGLPeKbXT2YZrc92hKSvzFL5hoot6AYroNKnW39jxrXr",
  "key40": "39rQk8dR6y7sHdHTC6LNDYJEQrPrkHg7bcVa8RNrzVbS3rRcsEFkwEs53Btqnj3L1RGzTfWDwKopRtzmU5j35pQE"
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
