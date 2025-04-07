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
    "4pPnKKk45gSN2nq6JGZiFzGDKRw9bMg9RzF9PmXEVtzDeAcTL78kqUa93zMQryTZGicQcMFs8qugRnpCYwtgLZ7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KvjbHuuqgyZmQ2nSKrWHZt1h7EcGLE6RBQojFfk2WnbJH7P9nAaid7PKbvrASzmeCWy1voePt4C5hWUX37W4b3z",
  "key1": "5YWWNtMgbsd6AaiMLGrWJDKfDVb3P5CatWp5wUHixLTnangrr3UpdQ2NFTicJyDimSEhs9tGsrjjG5FtXqnxhcR5",
  "key2": "426hdn8XKqcx39Wz7b6zGC5KmjPLrxGpXiPTbfxvxhvxfMJXeBs5zokcz9DwCPNJvRhzrTRyEDYh3naeJNpTzgtv",
  "key3": "52UmMJpVXBbNAR8JvcMSJWLspiqViVmQ1HikTKsrABh4WxTkXE5vXpt4MXfcvLxHrmTUh9mZES7Z2DipaFHroWZM",
  "key4": "5ndHMCW9hSP1snda1jcDeU8VSZUaL4GJRoAzDT5CRj9ezTDBCBcyr7eAzwyjEyhUF7cbDqY5xeN1ewRS4HYYU3UV",
  "key5": "2qnCNH3cEjtNHhfqRxDwTsrucCt5VsN1dXtp7HkYDsWGBYDB1aDdri9J8CTcdNmVUBHGcCYKcCsege4dHTEaMCJK",
  "key6": "VGM1qf8ayyHbvFnttTFWpFRw2d7nGKUA4nGDKQHjrdBoE8sisBJ9gCKsjGXnoteppNkboziE2XXG5cAPBZK77mz",
  "key7": "5oHMyNs3CDQTLWwyxKk7sZYUmScnZr8AD6SxhpRSFd3AYaJKMjo8Kn8Z2p9x5MvFNUiwVXYyVMY6Y5WxJH3Vn62E",
  "key8": "5q5EghwRhvfmJw4FfFf7BWtAZ6ptJrj47DnhjHEr2rMPwPdyeiW6B855cgqBcVWH5YEpcFc8HFLMAQya2CLgoPVc",
  "key9": "5H1bXThzjo8XaKZs2qWWEDf2oSqi8B6Nik4L5MZtiN764hNqWF3DKiAKzpMeVm74vwemsesf9jQiy62Vdu3qWN5M",
  "key10": "67nDpV9bAgU33iJEi8orD5PisT6zFa1N2FFzi9Vy2uPu83yp1WkpPDjjNZKBCB4KEuPSFC6wi7s2w3zhBpzWEqzR",
  "key11": "3VRy9xqiYuuu2Huna3Wu5Hz7KR67taSqhPaZVEVJPz1F3pfJiuiZxyVEcUcoSxLhvJLM4FvBb8BrE3jMXCJoSLbm",
  "key12": "4GzKirqp5qK6EN8X8gF45t8cVchEpTn8uaQFwzt5mcQ7vcCmYHR1pU3ojUbExEBeGEgrJwzxocr5wdhRocubTu18",
  "key13": "4vn3TUxCqbmuLpdyqSY5MUih3kLgrHjxBQwXpzHbm6XTCasthmQWWhu1FuA6J6Kn9qVQa8xvCAU3dgFAwdhrdHA5",
  "key14": "2vXZSTEJGCJdvfPycrLNvBY5bbedpF4aQu5rcBgJG5DQCEtnQRkZTSFterJLhJJohdVUgkFyFQ572ehL8TwrxKRj",
  "key15": "5f3t5vf5NdP6bVqh7QmPNnqiT9M95guW1UBuKyJ6CrTBrGxqLAp81rSaRqCQu1rej9mcBLxkMWq9NSU2oBUmjhYg",
  "key16": "3URSG46voohBQ67hFEuaBAtmWV5KhqdppLuwfdyTTUWgYRTML2nf2tLaduXfn4UgTL5kNyCZik9je5RqfgiiuRUX",
  "key17": "EVDja3m4nzR91p2PudHVHJe359gozUqz3gYhbXYm27tSEzBom1exxMsnDZUXFpMZkNt42KUPbn5NxAcydFjhJcr",
  "key18": "2QhqHz9q63cKoxysb6ZPwtSRUNS11xktKoCB3PdERGci5342VLhXPcfuZx2aXZATR6N63Zjh9kh2v7kqyJtKgteR",
  "key19": "4XgtdbnBsbms9LTbe2K4PBCMDMHiGbMxoHX3rYvHZdC21e83zDbrTqZ9GEvqFf6ZyXbkteYgpYqiuPdz8GK9tnLN",
  "key20": "2jxNowGcGCuQ65fbZtv5zoAhgcxfNX9PPLAYpSPKJh5XSNYssQDd5suZ3WGSUWHsBf7KPNmSm92a5rSBfyJN4qMT",
  "key21": "3HVNhXTEwunW6pdyBYa6rtVasGNn4Q3KDTGwLNMckZQHMya6nRqWFahYxKL7h5fWvQVK46WK7Bz3DMShrZ5qRq1z",
  "key22": "babe7ukNPzyqjtEtrB1DudWVL31dHjeFgrzHr3R7zrxd8dRiqduMjmHADeLgUqDcsh1nJ2PyMWSryc6Wj6K8QaL",
  "key23": "3sU4EMwR1U9NQb3aL2hfmJMpv1tqmvMyWq3BAhK4aWcLuUpa5SuVZEeoas8vSLSsuLwbCy6aL5UMEMG9w2gdNo5K",
  "key24": "5fVZEEV2hwxADCBk8GWRfq7KsovaCmZxXA9tD9rFiMjHwJhrztyqXQqb4mixHw5MU2YnWo4g1rdC3abweis9wSMZ",
  "key25": "HFZhPfcjaKrot1drj1ryEjYxBDo9hMMkQ13HKHUeLWsQey44whLeWzECrgfVcQ6ZWgAZj9YYxf3zsKk14czsw8B",
  "key26": "Knb3znXYuTkQxdfFoakJDmZzNTqyits6ijU1HgmnkAriEtjHmJetcP6141V2TtQDod2mG3Brdx5sYBgLN49Dxhg",
  "key27": "2ngx7ZumaysZhD4BmdGsysFu8SoFapnaCpSpb3X4i3fp7cYHBFSckpUNgiBgafiBY1nexbySz9ZWb2mJULmJAck7",
  "key28": "2CeFWDTEviXonc2zf8R3XpVTGuafVKg8ofT4Uk81uBzmFxZKKpmBYnMctvjrsfGYbxSkApHtXdH6bYFkPXaW9Tng",
  "key29": "3ToMysUBJZzz6h1G6s3v5hBn8PmiP39Sf5j1QFfTx35SphNLTMex77DTf854v74oYT5YyLoq6b9xd5Rjbykn8cZn",
  "key30": "2qBhKVdXrcYi3HWZAz5fD4HASQypFq4o3e7Pm6PtmPNEFWLQv4DRNPQm5roSpMEmSo94h84rJ3zRSW1TcVPeQV13",
  "key31": "4YcUfsspWciAEQv8f5yK8ESS9kynJQoCQNh9acALgwLK84bXcSqcYGLsu8Lvtu5SFnCF2p5VS8VEmYx4HW6NGe5C",
  "key32": "3ZsufuCBZCwg8pZZ5acVrd8MGHbsn6tWWdBAvZvV3Szj26CSoXzSgiJt25aa9orrhQTKuyA82xoQgzZ98BQ3aER6",
  "key33": "34ZLqCejUU5KCiL1Nf8KMmCcxcDakKJB9ydgupobzr3LCUYohbx4LVjiTBRVyNMPVG2dbVtpGkYLJNHntH2SF2hN",
  "key34": "2CeRgF974BAVZuhGZ7UVWgpVjkmiofhf6giVAFbBFYLQu4sjoLvnFSjzyzQwmuhedhbG7i58xqM3THFu1PkxXpmt",
  "key35": "4jrWfdsyMMmPb9nmm156VSKbbh4rWmrWtypM7VyXE2u6iHcY5jkJtwaHhRzYfymtqFPonbqTcSLkGL44VVsHUKes",
  "key36": "4CU5PR3THiWkn2BMJ6BeEn9shzCrQvEMcDuvz5wXNieneH5VjbWuLqhhZ4yoTr8CmKoXaYNbQB9dwa3mezR9pJLf",
  "key37": "2QVT366h9v11fRUgYSzMuuBjhz9hTbMKnUsZwJcHk2L2Jd2HmUetPhr7W3nC9YUSqzfixL9aaQMCU81m7T94xF7M",
  "key38": "542JxasnshuuhJDPznE5qU4MTSNFvp8PTftaSCei4EdW5jscdNhGJPDk6TBQqtt8qMtSsY6NAyddbAWDm8dRXXZZ",
  "key39": "2vgJtyHRgexhJKv75bCpncK8NjRmjsV642TX1vpk9ZcZj6srGCHmTShLVzwUNddrHiWNLJPHFJYEoLSanaDV481c",
  "key40": "5YQev91LS6MuMPEJpr7SRwS7uHUQC794HNiBkMma7MLLd9kZ12RWxXkEcyqTXwXSbPaLDXYArkzic3Z5C4fYSpTe",
  "key41": "5xBfqxhwFBM5ajszBF3PZdByNGKR22XJvRLvR6QHNq53ZoaaMwtipUcspjrA547aLFDgmCqyjraGDz7jB9o9N6zJ",
  "key42": "3ZCBHbe2fq6oK5PgEYnb3aPpidaohBn5CjBAHQvuFLdroJQYDY3GKx1LhHSEBD7BtZz3jRDnyJoL3hKZnpPbaD5s",
  "key43": "3zpLMAi69QKGEMvtGAtCkxc4iJfmTwASVJkumZq1Ewx4kSXgAjo9A2PfZ15rQjZTqwoGqBcMFu3kuAKGrPgpFbQm"
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
