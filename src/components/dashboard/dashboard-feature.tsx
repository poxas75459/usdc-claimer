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
    "5KjXSVgVeurnpXU5KaQ2BzfYX6Ui1NGi9SY3tBnCdt85FJjTtVyF2Mmq4URYAGJPZFQxuXzf6nL2EivYhRDANh2s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jxJGrXU6Kw7dET1yTS6mJtx5CNou1nmfU3mwxmVuM76QmHU2ritNDu6PoWmrsUL1Rrwd6pFmVTTcctShyt7aTYi",
  "key1": "H4WJ9cxXT1KdutZUDhNDrTCBZHm6p8L62uBB8uduziFBsqeLPy6b8PTwRfK8keMBxLBAU7G5vQQKZXXvWxhEJLY",
  "key2": "23XHL7QyViR7sAWH28mkq3u9trCvtnMmijH6SXcT4HoRFnYyk9bprNima974MzPzbYLeREk5zGr4XuabhFDY11WC",
  "key3": "64eukMYEL8LNMARrzqMWJSAecvKxTpxpKVFZN6jpJKtBtATmwnqQPBJTHG53iXUSpHfnDXy2cChXJ16oRA8tpwoN",
  "key4": "4EmMc4PsyrVet8PxDjiw36CYJnLfnqu3W7PHoNJ79HDQD3cqNM2wCekHCfeH1jMURWQE6w4b324S6EqvmTnph5tQ",
  "key5": "651EYg4v4Xh1xLbnYUb6jNu849jce7a5X72wYpvRdkXyQp7XBrUWYbVfW4jD7VQRSMmzDkPstugZzBRwdnC9pD78",
  "key6": "5XPbsYACNyEtRtoNwvSU4sKxLXGrNtQi2GwiubuE67iShpvrSF661derW8bgcA5sNB3X238m1253Jjc8FKKedQYb",
  "key7": "YkV2YFtqFktmJHZ64b48YCvVcMtHvq5Dmpr6Yirm1bAdgNMs3yZ14Fz23UWFaNa5EvsQLHtnv9Hk4Gbo8q2DKSL",
  "key8": "3yPugibaCypYHjnnehg14QJfc9G9vdHqXci1uE2Lqq9ARXN2UL2vBULGZ8gA4ERbBJW9bETCUZZeNmZeFJMVnVU7",
  "key9": "55tL24rCp9PS6tqUM5uJea7xPafrBQwo2fmJof3tdTYCt1HtggFUNVQAaS9yVnacjuzEhuAjT3JE9ygeW6iwZCYR",
  "key10": "4aCT8eub1Fzstv4iAUYDW7enTxJdF6k2Nt6gYUiFWsz9Fhmckdn6MWTFCHaSQZC3yRsuZ7MJ9bPPVHDdvM5pzu5E",
  "key11": "3qvVUhLewW11n991vUjcfQJFJofjnrEUD78uXzqnYv18YeKwEriD38aBi2bNWaZ7Y3Y8MYz55Udxr8TEiwTQ7cW9",
  "key12": "3ySSNHHAkXTW5UmkxWKiEaTpnepRwyCxVy3wYvHxVqKLd1LQoyVrkyJLRgWnq1Xz971hckBwGoD8UofVxYZcNbw6",
  "key13": "4GLoT9ifK5c6kX55iVRE3TtM5fSJDTAuwFcgAEL6f8pn5Sq8QRZB7PdfByQi6Y1J1Wf3YSsyN8P5xLE6ZvDukqdX",
  "key14": "2CWQHxCUK8ogXfWURXBZ6baeLccc8CJyzxRCyGVMu6jUquj9Sj2d7WF6xkWo2j2cXKMWWhuuZu8tcFfKbJxLuQ9e",
  "key15": "5TBCheUz38ofQhvF5oTm5Frw1ZYNFM7pqrexHN57sTaX5LAUJ8VXGmpHQFQoi2vPwgxJt2KFz8zMePyMg2gnJkfj",
  "key16": "2A71sRbNm2Z1r9Tex7C4344cmq87fzf7a4VyfFNU9fo7Dwc4PomzEjcxaXKmAJdcJCWLL1HW7o9kpx41XMKAanR3",
  "key17": "2E4tLnGxGJscHgT2g48iQbEUBQCGDL3Tz3VaE121W39PL8TDrh4pKNJTyYB8uSsAqM6wsovGjtBHH9dG7V8sfGXd",
  "key18": "2nJWymuzi6nsKtXmGvGJW3Dg18eTS3mh9mkGr6UMqE7jxrsrHzxxMvY8nhNkykKxPGXT9Qw7oQM5PVvSezkaYSpn",
  "key19": "jv1kzwZQT4UYWrkBqRMZwpXcRpLHLNxTYKu2vCpPSwi9XqVkUMt3HUQcQr4vpnDDPd7kJ7QbfSY9qFDjBxWz4Bd",
  "key20": "29SsDqE7nGZaUBKMTbL4VH3HqrJb4gpRBRKgpiXcCRhqkvEw8MfFdPCmjzRmTpxqpty8yMQJbZKYeV4EWmKpYLDJ",
  "key21": "2HBX75zduFHGxsDXgcUo8rG2gdkfUbSCNzc8VgHXpJoLUb8wT8sAAsNxiQeA3L7D9UGP6oH2Yih4fckLAgBAbRfM",
  "key22": "2dBVkvm8uD5gzHzsv45jWy637b4yfNtBGCmT3gj6swBwLfBhEBrQsxRN7nRtLY5xGfegr2UvkZGZmftrFM8nTVtr",
  "key23": "vGAiBrcEZcEEyBWR9uoFCU64kRihqNZXn6qzgHssvXaQUE9DE3QwB7uxaW6wqmqW2yB2wQu6mq6HMYte4B92aYc",
  "key24": "2u4wHJ1e3PBd9v6uzewCWZERCN6PBgMY7fmGcShQCwvLrJSRhBtv5jBEeNa6gKHx5d5gXDLs6AiC65CEjiXCXgEC",
  "key25": "3WhiC8t4TtQfCpyFQcXzVLi6dskTDTJQPX8vgouYw7wbQxTc6AbCQ5qUdC2bV8vEevcRYfdXck1XrLZkyYgMmLcE",
  "key26": "5gsojQVKGZ8Vb1pubW2UGqFEYZRVpZVpzoCujFShqXrcRTuY5bejzxHFRfGPZ9TCxD7YV7kWqh4p56fbeeJvSZWB",
  "key27": "4kgN2KfHya8kY7wVbeYmLS67p87U3sXFSBwcpLzvBZqyHGsJJ77wajPH58n6nHG9xAqkRzDA5agaFyzFBg6qbBan",
  "key28": "5xVcmDMbn1hhAMojeFK8Rn5P8gAfAxgUZseK2iV2NoKvojiJWvimUNnzFbJ4tttEiSW5cg2zPqaH3DoUPnHTCgxE",
  "key29": "H6CnZaB9tXVp2j6xb6SHHZEvTwyTCkgVF2SRKf3serJJEA7C44vbgLR89sJGdgyeWjmvsHRSrvgyepyDPCNF44G",
  "key30": "4RgBH6ZLW8u5jLdG48C8929ZdD7z7Z4BTPhujVFfjNcvf6KQ3B4CbQhRWcye46MK3FEuQrK7BFSLtAgsKhFk5AbS",
  "key31": "5TqaknPQ5j9yvzyDCaiZsoPu3WaB3DmPRGM9D4YXaUYPzcPB4P66SDYPREpTenQFYHxJynccpV6PWD1qAJ9XoTW8",
  "key32": "2FRV5f1LkFufJnPWgCc8rsWyhWmxJhewcTaoumnazVRReEpJX7Vnc95hK5ABPuj3cm6Twq3mMhnmzjvKSCDG3eSQ",
  "key33": "4gCvRP3T4wtxuzQRSyVB1xLvx22KGK9Ny17fpRvTGxj8g8ADqP8TZ7rsbgfAqmCU8KvHWWAAEEvn5ZX3CQsHmoRe",
  "key34": "oNwaiXyHhWEWTP3kEh6dXEosCjiZA9nZgxRcGhps1mk3vFPQXaZeVujiTKs4CQSSm1SbqoYkuhUnyfgkbaCZubE",
  "key35": "934gHKXPFVR2e4usuk2HaDy33FRWojPEBNiNF1urqTJLLuNyckfr19VjM4UdhQbk7c29o94SSXZpZYN5jGgE1hw",
  "key36": "3kuaPtVYmkv4YAUAcEUnrRGTbz7SrNjxTgzMxbvMnk31wLBH4tQn3X6ypcD3PGetgyXJKoLY7SHSCjH9Qgx8kdeD",
  "key37": "4Y7BfRmLnpzqBgjP9N5a5vsGDmMb4fr4nqPDoT7SvTj2vgC3uRbSjX3icx9FZJSZBjEdp4EgeZN1Vx7kxNHijKDT",
  "key38": "51nJ3MBC3f8cMrXroDpF4wUVvv1LaDzWMo3C3YanygBGci6fD59DbxtQ4LgwCH8qmdwsGEXZkanX16MbjBoRWMj",
  "key39": "3X59MrRi9EYqVjdpvzJF5JJBrKwVvwVUPjEExjtN6QbLJuq6P1xYCU6czcNeokGYc3hnjsQog9ycPJvkHb3gFt9v",
  "key40": "34BT1QYSgJJ3geeMfASx78zmcJorBpRrgAVYaqM726ZqBLv953f6XDCyCLh4uz9KYhWr8aX1EMtgQQUA2pmwmkUj",
  "key41": "512PhR4Enc3mAFQV9oKNyCVnsjP9zhJ3MtNkwW9xn7QBGy4GcpJb7SJG65LNLDsVLaU5dQJXCvuEMtJFYnp6p4r6",
  "key42": "2H6Hr3TXffe8SK6aaTh9d8S7K5fSp2w2xgyJd4EDzxJH6Z6wJ9Z7KiZ8qqoQrQW2MxPVTDjRooeVcm6ZcHdD6J2j"
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
