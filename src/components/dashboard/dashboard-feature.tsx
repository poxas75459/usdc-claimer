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
    "2SNkeJ92L3eJBjppUY5TsrHBCsbzzcoCDVNcGepy58oNvjRs9vLZWYUN7bYZSzSpkbQoyzBLfvq97yWcGQ7QuMgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QREFpPtN7PGrdJnzp1TioQHKCes3SeLKJ9ohXoeqz83S17G6TNuMkN8ErfoBP3BPo8D64XFhf8pX6hmBjwvjot1",
  "key1": "9GMYmBMwbfxc6Q7JeERuDF4Hy5TPowVTzTrzpdDiBYn1RSUyK2ikrbr8oTvzwRZtsDPJekbmh3xVQ9PpPaFPozn",
  "key2": "5evh3U69baCqeDuFQscwJdZ6J2KaoPXHCzb2JdLXLwoGpfcJ4E8z7KQTGKsg4PCeARNGvPfCwrrQNUsLXQmsR5tZ",
  "key3": "oocLsUQmjyhBKnPe4HQNdrzAmMauT8xykW8EJwCpWVSdVd4yLS4jJLYR2vq2RNQPuMR8tgpmyjz63vQB4oNNxJ5",
  "key4": "2uzCvjyRSacPgXxhynTYDGy98ht1ypf2PhpuuAPzXEJWnWXUH52nAsCCrvYPrmpi9dYiMHAPHW5PRbrLWwkKcpSS",
  "key5": "4PpRUg5tJyW6by22WAx7BPQqMjjjHzjJ1RbfhJG85gSmb9oKWCijs37etQFeskd9XWjAba8iK8pzRbHn5Jn7Lxd1",
  "key6": "5WS8VGWW8D1T6S9tjSZrywxre8Yj9on5VGoxzoVRJ4X3GYgbt1Am6hhShCg35ZfKdEUnn1TuExPqR9BVWJoJdcU4",
  "key7": "5oZuvqeoRskALjHX2QJxQUgZfUefzhPVVinmvZWJwDfXp9ajgQYCFGohsvXYRKGC5AdytFbwb1xdSKRt5kC8aUPv",
  "key8": "3v7GxZ6LwFTLCedMAWmsETXtStuoDgPwtG7bQ4ESF3fKQb5KynndGYdJ41xi1aFwnjLEsAoc1P1X8XNXkdphQ7Md",
  "key9": "izdey6Sd863s8SkzMYcZcZgg766ovXysXqApeURDvcgbtYYCjBuwy5dY8pNX1bfPCXQwz31isJvXWn6Yojkmdwm",
  "key10": "4T9EkKKHNMBGZqKCC2WXg6ytmLWHvMSLghqKGMYSrphdwxg6bKWdsdWzZZ6Lnvy1LkQex6kLqFNGsVQpkfTiKAyt",
  "key11": "4Hy3E2eQ6YebmiQ41bvQkpQX1Trn5WhgDVEhA8eABzqHH27zBboN8E1DK53Z8Ew31N2rMwFZ4adzw7K8dwGd7qMP",
  "key12": "418DyHfxp6nykKsRBHR1kVu3kkFsTxPbUzBxhfaLeH3AsJ8hCP9Xf5yzjY4W2GPY4X1PsAqjmMTj3nZsLXLzrFZx",
  "key13": "2vRDDXAkyRMkB9kxBvnQFZsskmhqzyZ5uzeRfninxCkJ2TRcemr7ZQ5Rc1jKCb6bNrzoRyvr2nTYypcDLPw4Luug",
  "key14": "52DxgZJBKNJ4DtfZqnJs3chE7GM2qb5dcFXWNJWNB3kLjDZN3qa61jdFaPoe3bLPk4wyA8ZhVzavLzDWNCF8aZ7W",
  "key15": "3nkmqmDBhHfkgqb1vXSWnFDYS7e3MWjUwkySizeV6Wm5HpGunQEAuxQX37FphNPCcrurpVrZ5wzBqh1NRWohsv4q",
  "key16": "414r9tmouhX9riX1AWZC4VfbmHAapcbXS8VLh86rPDkAXCaC4HG3Hu7yvB9VoHfBpyKoAHJHVmzx5FRfHqmWyMJD",
  "key17": "5jZ7x53kgCToKCr1cFKamPksNGXDwwRzQaJSoV4VETGuFsgEyxBScFb61CJVHGfeofSrCu6d4eVxs9NYkKvckvJ1",
  "key18": "4QKFsy64Kq33Ucoaj2HrNmwQWup9inRyUp7iYLDyV5VndPvU1E7VyzMzDWnq8uf5R1mgNzfKQQZXcYV5MCQGfvui",
  "key19": "RM4PWfwBnfm6hhm7tsitLKDgDxv4wPfbQdoX8ivUS7wvQLQQnQCJh2VVufsE9fGGTC1wwV6dpaVmasLoE2V4fwz",
  "key20": "48XRG1NrMjjAFEVcDrdrKLkFtn9LByXLgdvZicbtpxvt1NzqABvFev2vJPymJtSXm18GPwDAPYLrRbkQPReFqjio",
  "key21": "GavmkifR7bSec67q4drrPxfWSdcCWunpKivCuWFzETMUcbXzAu3kjocSXdfDX5g6skCvDRcVhyc6NiWWcUr4pXA",
  "key22": "3ffj4F3RGt7pDaGZ7Aq3nv9vNS8NxcU4MMfgySgVwPW19ANxwqA8kZhkRSXsop9AD8mae8JZbyzPHGoqUuZLLu8u",
  "key23": "3qi5tw2yUCpfR1mE7EzkpqgUPNRHtyDpGGNhN2hxteYHW1tFvXs6ZvERszgQqtr2zFGAZqLio58WjYoAxJ7A2nk2",
  "key24": "3dHowPSRQvVojmcUqjZXJCShxypQJ3JzMvY7tY7o3Q8BydRxk4oMmgNFpNaFHj22XxERG3r6TD3jW2oxAWi6Jbno",
  "key25": "5ySnWb8L7oSE8goaJH4btxPgzpMMG5UUdgGxQE6fjZYCGaos8xW6fQsxgUuE8U65ZGMo8FvQzhtaRxYWHmCJPjuw",
  "key26": "2CYHKGsBwAFYSqjpxrhV6bVGXVF1s7xBKvJKfchAn8NRgKpL1YtLRVCdpDT3krdtZViAstUAMrQBTwQRaHgVtJdN",
  "key27": "x9aWuqtKWtrisNSjKpNo45yaE6pMqG3TTHo5w12Gr1aqwpimQ7LuH6jJPabF7N1pZpvKFTGkLxXwSEBvBDDNQZE",
  "key28": "3ijRoeK6SwqUXRM4me8onYoCQKWuYgDd5AUkhQDGXDsK1GPPFbKoqHaPKZS35JggM51zJvBGPzKkLpoWuYvCwrWt",
  "key29": "2VtZ79ww8AjxsoiKYpGrpaNU1t2ZJnvzNRAjqjyyvjmZBQBLv8uubCELJWmzLdzYjsUspV4wZ1ot9no7hVPdqkcH",
  "key30": "22yupGsgrzygGuTFv2ynf7sXUz1ZQkvnStM7aYSz5yMKSmLm7inCQhNRtZbwq1JNJ4dG7CYzDip7Hu7kZbXaqiHe",
  "key31": "aeHzedQGLp2qBVurCqWZV4r9aUYFZQ6eGhhQzeCrB6MNyuCnvwvWyYL9fzuDGp43hhKsMkKuRLhyGov65kaT6Hh",
  "key32": "3w5QKQvj1D8sD4CohcAVzR3fAReCzKYfLhZJGED7TTtSBpwv8qmsYFAoxEhPK461bmZqEaGEU216MwvUFwBe1Fo3",
  "key33": "4AKuYgG8LgbB4CdUNBoXbjsDomigC9E4ca8UyCwV8PT9yBxKQa6Xjvs6jGwMPsszUzerhDvTizpgwMvAHm1ZchFg",
  "key34": "293G3hyfSGePE5UyLmwUzxbpA9WxZbHG14FMmerqXc9kz7SDLXVjcnBRsCmZ6FBk7zP8ZqB6tjFQYDjBHDtVhzk8",
  "key35": "VLm4ZZ61dbSBGGrdhRnaMqf9nBMbBXXwFSpeG6BkLN5aC1nVsrH6B976EhmiHX7JFwp59xKETrieLhHdRyZ6ztU",
  "key36": "3XiTSa13EnpDDVdzquSDiXVv26khKaRKBoQsWEpX7hWXic2zJR5GFo2C7ZRmZzYcaAQK78KWSFUKypNJL9iLTUFi",
  "key37": "2ZDYUiu87qfkMJzjTcuwX1rbb95rV9D6fXhP8FTyPcn7TJf8piKfjGE3xJmEKUF4MgmygFjvePCSyBTQezPczeLx",
  "key38": "Dc75Ke6GG9JectYEzZsHvnBUFgeS7VJjLvk67aEi2j9gYJQgYsiwnZffDoATCeUroCbYLyu1zk5UL18oc1149C4",
  "key39": "32Hv2VhzChCwEwvyQm5StLoj6fSxmsZARAmzYXkNhvQzL38LATWZgwgTC8qig1dq6eJkg7zXZwdx5Kh4j6b4zexz",
  "key40": "7xQmC5rPs8NTdXPbtWbV66XSoJ1QcNePxrtXT2nQpptpTK1cvKarD1SxyousFo8D6sQk5Vp5LseAjFPz51vdwHq",
  "key41": "Q8ds7ZAjfYoCUf8SbTEt694qP95gpNMdUN5USgfHhuxgq4vCY9RyozJz3ycryaZ1bPGrQTS8k2wxBRAsuC5fHBu",
  "key42": "DZUn7cL2hBCakVLshwjLBr883PmcSKVh2t2wrPrHVEf3f8B3uQdBUP8HD9UTuSSywzcpK6FqTrjwxitRt4cYqHa",
  "key43": "2CaiqysvT5ygFoF7ExkqeWbsnz8uYCxdQRTsAXqq4U1p93XyofxPwmiVmgPmXHbD1JzwzBBAeLsePG3f6pryphPp",
  "key44": "4ea6XKb8SZVeWmpYE9iJPYiCdsMnKqMPfiYprkzpjQfrTbnS3jw3KPm64QrhoeQqwVj48DQ1B2PeNdnc6URG6QkM",
  "key45": "5vWb15GLBMYfpWtizMsmfAoVzbHm2Rses1Swb47LifLF65eqCShquo5QAuVDg3t1PU9iw5VE7Xu8S9swpPNNnb9h",
  "key46": "WBufoZD4PnLtDimyPP8r3XGPGXASsBdQXJui9sQFAYJdNpnkQKehAcbRbVxCtRYUusQ4NQmdZdYAkyiUoGyyaUQ",
  "key47": "3s3K4y3LvhrghPmkgdF9QnC9h7hdpctXsvdQCdCijzsqWWPHfevQsrKEHjbapAFLRkXrhcqGELfPDVvMBFAws32W",
  "key48": "4V1RB22jLFQhd41FnkCZCs8ruPFsAGwsMPq2UkCoGMFGaEAdG4shJAHsnGcTm5eQbP2aY7HvF9GeH4pcwbJ23qxx"
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
