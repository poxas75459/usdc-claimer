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
    "UxsAxzUGrHSihh463jxSigr8RP7w6ZroddeZEE2eBq6sgpE5UDhDaBST6mB4wimFt3EY6n6ckyHFjmtm8F1zbFP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qV9Kyn13crFmnmpAcKwjidfivz4tiieLKoBZg8RrtBsuyJMRLLATu7gGyYCcH3ahvK3Huz6zmD8pfaaHyV26Fe9",
  "key1": "4fwWquEqmBbMvusJVeLx68NT687Y2EbdrJpd8EtZ5Sk4wnsG7kup95zP1G3er8MH8TTbLD7E6XHrVyza1sjZ5Jv1",
  "key2": "3ad3XfmDkAqCFsqMgQ7X4Dffyni5HUMWYzCupMhF3yD8WP1NasBJkZhByuNSsc312PF1VsPXUecHLApGBzjqhLAq",
  "key3": "vEV5zQ65C4kvGLtZNZPnr1JotvptcenTh6u9zMSwt7kHZ6AkkA7Zhov7XVmg64EtnUXxsrv4PJ3mLoeuXdAQ5Ff",
  "key4": "24w5pJbAcJH2iqnXheQM7BP1qDVYrymh6o6MHwDd5WTsU55rKTt8ckWxPyqTq2jZCZg2bUaM1Gz7uiJye5aePRyC",
  "key5": "4D2uVpizPRjLivB2dtzZ2n4rg5qLgcJCncRnBoP8mYcw5CSgFGKSNLqGgML7AdFK9AbwvZg8fjsshe8KN6FUXgFj",
  "key6": "3TFyT5BrGH3te3NkLeuyx1KQdppc2zbpj6Dq8WBQqX2L6wVMnffQ7GikyJdyRRwJNBm2FpEQ1QMg7HucFeNbjCFC",
  "key7": "5X4dy7x4mqTqJCTcSGssGKKuGmdtpP43wzKB2MEUpfuZERE7gqSRRLc9iTvziEMtCKMzb71dXtBFtPZekx7NP9si",
  "key8": "2eF1iDtPwpABYbdmhPaJWGzAS3aX9wtsi2whsnmHzvRXaMCWMMvbJGndza5M3JrLGWWkYrBVwswu6XHAx1NmQjwJ",
  "key9": "2syh1yy32Pm7nKsp27kgSJ853Db2RA4Sa1qFtrRRE4yjQZGjVjdHM1oHDu2F3KZaeUDhgqeteZ5Fp1CiC5mFzZ8z",
  "key10": "57tWomSm5oBvVRKTSTaMppnF4Bi5G14XpQfegZt8cPZspduw4NhwPNh5BuuVETDzzufcQzsMwm4obYNhZVBhA5E1",
  "key11": "2mjtdTDHQ3EmjujvFzaNHbQd7hqF8iT5P5Av5EBxNwgFt1Hx5kpRFFcc4JoVF8iWh3x6sECv2JTtH6ao6J1nZH7e",
  "key12": "nMDs8N3oYWU4FPwxaQexstMwZnKNRyW3tanmeYtWYdoXQtcooRaWxCZrL3aGvMCwMRLNTwyNh3tViHXDZzHAJad",
  "key13": "4EJ9p2owYSah74Sxj1cnVHD66TRc6L7A6YgYit6A3dBx14WFk7LZrY3qERoDzPRFCXE7cFJC2Q3swSZpzBKTQCVt",
  "key14": "5ybxVdnv1ERUhabahoSkioZmG8mGCD2si9LrJJjXMZrPgyWUyWkdpEhJBthmEqLrpDZRPYRLkdzvk2a6U978RXBQ",
  "key15": "2YEgBQHKYn6tV94Ne3VjuNn4qSnMbbGigcQGJr1WPaUnHsMfAePabyQhaJQFUN41FaoWSRoBt3F6rhbFByrGrcNF",
  "key16": "3aiEWTMoZgdbA4R3Li9BiVhZF65W9CCiXgoqWgD6sE9f5ra45qqDoUhLZRvCDhjnHMbNG15Kq8TK3YhCvnNurhnw",
  "key17": "3BrKP4uqoin4sf3DQ7DCYrfpc3D4wZvc6uge2Uo9LzpMk9Ji3K5CkeTyjjbsYebdWyxUTcryFv2gT5w3SFFTopH3",
  "key18": "2BnLFQjfvDpjAxWuaLRQfqFpYhdPAo56c5NE4YUb5RzGs9gLXGXTXx8sNaSYx5JCWBQCd9nwBeB7WypPj2dcB1Au",
  "key19": "5ziqsBS6WQpKhxgqVYKwM9MMxioBiLNwmbdePe1y7JFagAB2swTB1nSNEMhaUjFNAoHA4rTs37pyUhiNhoYAwZJU",
  "key20": "NeTnYkjTuW1au6yaWXUBynuDYd5WTwoajbFPN5Yz7qJPKYFZSgYDpSQJ4L3gBvxgEARF1ffugBorKmruDP8zhd9",
  "key21": "5GrYv4DyVE4FTzcPDU3M8eW3hLZVrsDEFKXmjc7JU3St5aWUhdP5KUPYaSUM53G2x4iFobuLtfLfHdWPw8Yo6myK",
  "key22": "4E1r8h1KbfUTXDXCrfDwpm692ShZ7ivCEx1vHFQT1smojRtseh9u2PtcZ55Uw1ZiNAtULriZdeFCHaN3ZJ3cTJwZ",
  "key23": "BHhUPG9u2DcwLMQCknszAUPTPsF6y1vg8hFuMJ12oEXHWCFVxWmCxVK3kVCdd2vmN8eqyjVxDarr8CwTuoHbrvC",
  "key24": "3RMZRZm8a8pfjivxQ2J9ELmmVKbCYx3M9EK25XaJDnxYMEJDo5Z5LHWJF4ikqaZGuhmJrwHUyTwtJ2MRh2YbZeYs",
  "key25": "3BW7NzsYruJpyaNwHonMk7fVQapHcNmGVQLQxVNYRs8SVw467KUSM2cRNxyC74ZmEBH6mwc1dh5347ngqeSDmFuL",
  "key26": "NzRSshCr4tWCw1iSMyLUafr57e9yK7MEpA9cD2vouhVJBK9rXRFQ5sicJ228ZJAzq3AUBbYnY3c1jyFhxZDF2m4",
  "key27": "4hXas9c1HZMPJr4S8ghdfAZTMFPnTK5LjSu8tUEdnctnqBLxA6oWtM3pSaj4dqDwWeyNBuoZLjKyMsdfgB46Qsme",
  "key28": "67PhDcHjERtVT1YNmjvQ1bBnTVxNhivf98NZeGFEWsNJCdeg5wQ9NcKaxmncHJC9aUG5xQf1pwMffZWxB383c9Ec",
  "key29": "3z2ttoTfhBuL8j5dgjdi6DAiDhWu8Zx3Nazhy55sxLAwQ8ogtYhfEoooKGGThvshfMtrwV3pvZsantWdRcKEpjvh",
  "key30": "4SEvc5FtXWUBvxPYJqdwQy4pST3u9t5Y6qSdoQeL3wYxcBGkfexfnypz4BVAip88KmqnSzxAJZTuh6P4fMU69qSk",
  "key31": "1jDuhPdbucDkwxK5tTsKaKbhZTMWQAk3Rcd4gcuLsssysVkM5TVLSaBQucGf247uomPoHgpsx8F1rDePcSAq7ZM",
  "key32": "4bfbPVNYMAGT2tRMUL1nJsRLGrnepdZixbHH8jLqGiydK1RVCATiz8Q9ng833FzWc5qccWmBJ79y5S5VsULs1niS",
  "key33": "4av6YqrUv3wQ9yP3ck6Zufj9RHyhehJbquWSc9dZ6pDFCXoREvE1QBycjcEyDpf2ZexUmrNnxyZKbyMB1fNCSEgW",
  "key34": "2pim76dvrBKLxtBeJbo3w2kLvcCejhPLKPuGQxNVnVdqm7YRuNmnoGhzGAj3kgLsnidv72NR4CXwxui49kmv3hTe",
  "key35": "3Ctix4b1KVDVWS4GihZ2zjSnHvGzhQdr9u81gdTNg9o4zFVP1XLjr6bG7QboN6BGTWE7UrjD495Wao6LaxWfMyBa",
  "key36": "3dZmFspoZtUjZT8hbtH1bJwQHp6kY6dCFQJUcQNR6zvkehsLQ3Ss2BxKQe3YVnaMy2AEXrg9rgE9qFnBbBFjFYVp",
  "key37": "24A8nQtQQrNeMcGgS34RWiysL33it9C6UidRnzpGFfQ8CKt2wRzXc3vQXiMhwkp51NT5QTyKidw2VdqmYe8iNYwg",
  "key38": "66o3tyjg5JFsJPWaDHPcwFK1E9cq1thJxzFJHb5nepUiLJnordMN4ghQA9Qx6AhBB5ke9SkDJMq8aZcF8yrV99qa",
  "key39": "4ix5acWFMknsysjs2avWZ2xA5kgkXNi5r16vWgsfJ3cm76YAnJRm19Y9fJZVsMJp2zcYdMDaLw3jrgugC9Dh7SL7",
  "key40": "3u5C8VeBfPCoZCXk7u2T7avthtz5zxeX7tU3B7W4mFewijhX7pbQzsH6qknyC3G8nTBNuC5DBXMGkwRg2DgmeB8C",
  "key41": "56raKKT6Ch2PBg3x4aSoH91z66swahNHmmrxM4KvU6YVShUHMYbNrWM5uj4xNYBmVXbWkvUPvXUsURdV3kBaGKZH",
  "key42": "33dSZKPJ2xXBuHDcBMFtBmsyUK7xyFUKPAXqf3wCvYh5KNRsrEp7fm1hPYsr5yRS7UBuPSss1ime4CUk2gp1TxU1",
  "key43": "5JfomAMndAZCmDaYNa4kH5P85Lbbq9iKnFyrkjN3JGkMF6wDNaMiRx581ktZAjmER15pMqjDjhKcp11UFR8ajZz8",
  "key44": "4w2eK82jry5UNXTgis83PyGs1Pa1L3BXHnaUB3U9Sk43n7DVqQHP6y1D3YSpxd6HwcTcPPLuNxwNv8DYuDNQhyUj",
  "key45": "3kQQMtox5bhP2XHByfqSnNuh2R7xe5u8qy2dABwQufUDHat9BW1sadZyKqHqDpgjPCnFDRJjieHeduWaY1YfQZr",
  "key46": "4pNhqPxGT7wMRh8kYffwnQDeLhrxn6KvdWiEamrHvQ4R6mqQBuBJuaf6a9EBxzJTYy1UrVpj6YtUhCE8myyHmfEb"
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
