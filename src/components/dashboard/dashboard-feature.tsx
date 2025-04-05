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
    "2rX6PAbLK3cD99CirvMLQF1LrokzJ4cWumNLHhPYr3mhaGqhyfHoM4fG6kqCma3k2NU8HRyduGcBYWQ4JCGwuxRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CpfViuuUAxhxZeccXbv4mYP2DEzwo3gizZH1EGrAJrSGSyUR7eAAXrbSVUQB4V9gKQjRwyKhRxaznc4ddBr8oAJ",
  "key1": "5q4XWn7JdBSvngopAX7gtCHAtyzYknEB3dXikV6PcMFSQY1bAWCrTRTVQ1wU2JofxEdfQqdMAdNgLQEjcMEuQe73",
  "key2": "3AqfmnZmJhv2FQpyWskoQ2MCgLcwxpTwc7VeZVCuz9Wu7vAXByEaG9SNHaCxzSQh1AkGnZnx11uDGet6aJ29TZdi",
  "key3": "3XuKVQLsZ9HPkfaC7yvu1ExaMuToScxcAAUeBiDJiv52PCdY5D4JhV4BFTsnbHvqxpnwgSnUfcYosVXR9WQhvDmb",
  "key4": "5qgsiPNGcBGhE1JpLSmuvm1y973jRnWTUWswXeGKCuqkpsusVNE4Xmjqewh3Zm7mZqfcseJzvGUS6LhyAJtiwUKA",
  "key5": "29HjtHhgFmK4aXmWyt548XuQ1ahXT9qqP3LMFpE72AgnpnZxmLKicug7pyfaRZydqjY3WVHoge2vSxFXhtYXxaBt",
  "key6": "3YsiqwmZbq6Di1YVM8rrnxctXyfhZ6vi9ZpWfc6dco2yXpFuhuDvKHVhUa7U5hJ52piBeDGsbH1vGecDPgkU57fn",
  "key7": "3Wsqx2ZJvti5smu2EfMRAxBV3Jh9YmtFxDwFiLsvbkaoqmZ8nBMvqNgVXZnL2qiSS3B88MRTCTmEgaWWziNaxGEg",
  "key8": "35rpfB5fdcMHz4RBsFHM6GDqdGmMwGEZ1hG11yUzD5NqaTyUzzfkHTa4ycA5o2ezPaWiVC7o7NHFgVZbMr2tiF3G",
  "key9": "2hDHZxg7KdGHWifQ4JksDYY4oLg416Z4QXf9t2yqJLjkrNN2CJSVphLeXoKaNztS6SYiiSptHF8hu5ZjCd2SAXoy",
  "key10": "63HxpeQ3RzKWWb3ySgdPu1MMxUvNnF2VMc4yS8mHzWvwemFdntoaCq23dHdupDgaXro1ZFDZ3KtXtuE3N9N8vJDC",
  "key11": "4Bwpe6b2N2zFAAykQ84BrhhtnbzHBGjvHF46rCJYUdkcKPGdyWRwspWiZ28foCpXWoShSYbcazG6FveHRPG694Tw",
  "key12": "zQW7tk7uBx5MXB7mSgZkftQuLifWhD76u5oKFMdywEiq9NcYhjF6SJeMLv2Ch7kexrjxscu5Yjrd1HKfmeJ41Vo",
  "key13": "4qGQaWPCktZBXaMeAS35QHkLWMgDEUqogXhTVLFpmUUhAXecUWDj46N4UggLTUzSUyEy8Rcc29varCG7aKgXngBT",
  "key14": "M3kFRW1A85s15CroSojVzpqSokrFuHywp38JNQnW8vTG5pMh4xYbz84NRA5fk6zjXBjaNSAsdN1SeTFaapYqFcq",
  "key15": "5D2WGhAs6itmrJDx7JUwDZfZgfNDYjZjmwg4q21kggGBzviEhL4Ex6CoLmkgw9oRQCdYZi9UhiBVfnHCZGpsZRux",
  "key16": "izAMrSFf27DL446DbQLpHwfaacXfNpn2TtpRBzMeLyKeKLDrZh1GHfjGMuCVkURm5sf8f7CvkiEaDbedVq5ouHr",
  "key17": "5xwxEXvQrDnW2ZxBTedbk99B7LLFAekJ86aAPJki8bt5RaWsDg3hbmq94ifNmTRWAvvDtnorzE5gPnUm5dv9D4YQ",
  "key18": "5u4os1b2vTvSPFLzHYmzGJVRuu4HRA5gq1TTiAxqnLQzwhJ1c3smwDmBem5E4r1kgLQFJGXsKtAEKjZ1Qm6E2mHB",
  "key19": "vHvu5s9KBHL1DKKXq2rJxuZriHeqi5NLpP26ofgTqfWU8ZuV22YKCLy2RfadnCu8uRZrtaNGnxKVDMNMbVymVCR",
  "key20": "3rTmcz54tLFKxvpTbG3cVhyRkA8u3VqRkpcg6QMawdsFCU1nZwh92XbfYNyGNf2eT58EVPGjmxn2pid7k55S31Sp",
  "key21": "27Mj3GBZ3cMG6wWKG5mRqsEX6exBVMimxwJw2WHbvaCmX8H6hJhjBawctUa6iWNKicE8SgaPXwuiBLAHZbzrBm3d",
  "key22": "2Hgx7qEWyTNPBBmEo9j3Hti6zJ3CAM7v7iU5iRcKThpr6NBJRnjYKmiXSAyygc638Hf6adnx6KMRRq8Mb9KhFdBx",
  "key23": "5CBuZJo42oUSNuMnuPfGRCxRqxzW5VoHySvDkGUb7YzkteZyE6miUyvmf4LfPpL5yw7fh69ErpxUdUbUECr9QNP3",
  "key24": "3uPEZ2P4YHWfGJrin46SFE6HHWiGNemYkUdE1gm3SZBGg83YUHgvruQLMyUtQJv9vp1Nd1p9s4CVqG1gBJ16TL7r",
  "key25": "qahiLErH8V9zwHKFY9pUJhQpLA2Bam5NwMtQTmMCD8jfkBtt6q59gAJ26mifrmqdhGoXU4c7Fu18BFLzyHQD1Xj",
  "key26": "5NJVeAg2RnLvZbeJJDBd9mVh82e9Yynpgu4n4YtQk4etFTuz4Ftu7TxURn972b4Jetv2nyojrguWvMmmpAmJGP29",
  "key27": "4bkCpZeGsjkk7LGQu2QVapvDUdteYmVuWCwqVD2HxgofH6NvjJvyvwZxVjUz62dL2oXbSFzKhE32UvVL6i1JviSy",
  "key28": "61SASjfNN2dk46tMsZTEZWLDhqAwWCqZGes2kk9GdQTUgN3yzbcA9YVJAt3132Aikt8YwCwUcLuq3dceTefcaP77",
  "key29": "5aY8tiLnFu9J7JPVJdJEdjVJZT55gbkGPMG6f88G7GHAkvj3VbQW5FX5bwp6FgUJFQDLjhMocBTBL4XFzNnjF5sb",
  "key30": "3xzrf4eJQrNjoKD2y8vM7RNoLjcdVLN2Q9498RZ3qesTQ12V1SomofgJgZXJjRLovMk38utvYWkF4SJNmUku8ijo"
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
