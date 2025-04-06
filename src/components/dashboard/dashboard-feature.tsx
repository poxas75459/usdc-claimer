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
    "4nR7tz8RXQrv1xNmXFc4x6HJfCgGvkBjCf89Abe89wBFviVhqTQzepSzdtE8dvRTvVxt2JTTboivo4h5RME91yZ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cEAaTZfoodbjfY7MV821jiheCANp7D2Uq6XYgnhyBfL6NT4wze6gE1MY34wfFiqbdJqtFCUSeWcYvBa4w6pNm5f",
  "key1": "3jXMszutgNKzMEAWsGmCArgGUpSXoK32jdvHWH6n72iEVr1UuwMnik1dWj7RAuSXeiY2sZaQtVMTPCSnK9W6XC4",
  "key2": "417VwaakDdL6YtN9mrT7Rz723TaktaSgzo2LXJ7ic1ZxrYTtMc9y3b9BXBCBut4WAzno26JP7xeYa8NWidP6o4s5",
  "key3": "4iv9TwWLxZCwXrDHLVKtbKtkGmq3q8X3pS91FZ1v5r7fUb8ZSgVtZUZmf6k7mVWrVsjGVeeJcPNSmcrteG2wULvi",
  "key4": "5S4zUZbRpZSRvYGHED1H9hbtNnKjPLgCrTuJDPadYnYXpzFn5zTbiC1qZzKKsP5NsG5XGfTwdyWsRP8SsTxAahiK",
  "key5": "7Ae4PfZVWN8Xt9bdnrAcFC4LtHKThncjXNef8bgwGGPHeG2UBFZM6THnFXfydUa7KdMrJDrTsqCx1RkL4cXVBtB",
  "key6": "2ei8LGvPTcEFxu7FrFGH7z2BT7Fdio55zAJh9CCQMghPdZyvJkSpnC1MDJmNKe7L5uv6gqWcasMkKy7Nq7x6rbEF",
  "key7": "62qULC517U3opnrgi2pu2BZwJGRrXgqa935aitWHkWop72cvzUx2P8vxya55CF2u1mFStLknhnBgg6bbNoTQiQTY",
  "key8": "48vG75YC1aonvwuV5uwx7hXvhADQP6scL2Aq3SpWEKoukbAMWdUfPYh2ShHgvFXG6Hfd76J1PKyycbFQ63zc9HRk",
  "key9": "3Z5mnEpog1sRrcuxaMqVkBNbKJ8muQL3HFXEWEbpwzGfPF7JMKqkjqrD1QAc8tFDv7CGNE3nMgqWprDfCHb8xvTQ",
  "key10": "5gU3LS1juqCVbCriBWmnjogSWcaFm1VbPiBPtVPzoCdSd9UBagQjVrXwBegKHfdM9gxZhkREFMKz9EKgovojwMAB",
  "key11": "2v2pygiHUxnfoM5dZPTCy1LwhvY5RKg49np7Gm6tBUv25CkqjMBoTk1gMWEJPsYkrE9ANRyjC9wUXJsVzHTXchso",
  "key12": "DXTW33jtabZhy2fYh7Dz8BrbT3B97m4Hu2veZxLdKZqPtigQuqP2fDHUostZNAYMb4taWAhJuBd1j3C1UZXrJeD",
  "key13": "24VxvgqDArzB3WGzNombvfEcRLg3P3GEXvJHpBmL9WAg6whjffALGdhZJtK4ACQhPgzuRbXwNYnBaDvwhr2xX4Pt",
  "key14": "2T1DD8mh7XjRoehFaGFfFsvyYh4DrJ1ARWyKeuLbfU5vhxVT2GJBJo81DzcHp8YLh7c1eEf7HKpp1CgZoR2UmM9S",
  "key15": "39xMhSHjqNo5hn3MfTVfSXvhEiyPraCAhJjGaMLpZZbwNG42CNjyB1TJzBHPm8aaQu6Xt5HwBrRdL382jiP1jXXd",
  "key16": "3NHGBjEr1eskrDueyc7Yqec2RDJedMZS38PJTdjZpPdBp7VvuKrr8fzZi8kHxC8tBPXzkyDzFfwBVe7gWQbq4Lo3",
  "key17": "5ZhUjrxfza8y2MZrPBJN8fRK8vTXDShFEWwKss7CrpDhyCA7p2r2vBxdNbXgFiT9A431iLqYfjRciyFQyppLyCNf",
  "key18": "2HMir75Y1PtZCVKmjKwQf6ar5cC8v6uAsSxFX9ph9seT4wZuYc7SiTijKD9C7eZ2Fm7eeRUSXmWvcc414mzC8qZK",
  "key19": "3uun8kgmJKBX19kGCRWCaDLwCyd5yRAf6Rd9T1qAZXhBg7MnnWx7S3ZT9cTJUpAfeZDBN8TwpqbUvHQeMiw6xXzL",
  "key20": "3db7b7X6fPSCD4TtjaUjFuM8fHnH8aHuzsQPH2prEJwmqB7kJM9dmVjSZ156EKbXaYWJSwFyJwSuCCvGYTkKRbaU",
  "key21": "5Lfc9oaBeRdU5T3gYgYE2x1C5Lwy3YR1gBX2Ttry2nhGhaiMpriPwJGz1dsyHNzSa2EaryNHrXAnELo1Tu4Zb9wT",
  "key22": "423xUEW7AQQBeBdXn7zyTtEK39LJBgJwQUEzMVNDkbeNMMyfXMgX68T3joM9taXfzBJdSyYBU6u2vaeoxrLz5Sdf",
  "key23": "5AMtNPsNCsShVC619QCbSsy7Zu7duNM4KaetSa1zsCZkKkoNscavm6HpkzNL21EWEgE8yDrg1BjatBrBamHFRfo",
  "key24": "5dGoeMoZk94ehFpe89umjachiefwnVk3yzgFd1BHa7hFSRqswU3zQSpKbWmoLyRej6UtR8VymGNA4M2K5bG5uHTz",
  "key25": "2bmFFfwV2ayiqKSPodJGVD9qmNcpucFy5uSXvFvRdM4QvnXUjg93pN6tDrEgiKm6iaWdRUM9sMmhV8HEfV284N37",
  "key26": "3BV8b8WCyWdyUXk8CEyTdTMC2dhfoTpxHPZgxbbkJbyc7F19tkBe8FM3wX3UXNxzwttCXbMkaRvra9djWHKwin29",
  "key27": "3f3RPVcMcivCrQHXY1829UPmpCXBfnxVSZqDv2YyLjvq4GMmSXxrEmbsupJnRae4vXeSN3Wm9FjXGYstaCcAU4Dd",
  "key28": "x2vRt9umt62ahdXEmL45VYRSzpuY17BWJkx1xcsiHJG4TUTiru6xdNRhFkKg5GJB1vN3zpEvwpaMLfbJFh1LHU5",
  "key29": "2PcvPdpcqscmUwciei7hdxjQiHNx1Dtrz6txDTdErSYQo5ZEchmVUU1WVrGzy6CCC2duwPGGHyphcew6D5oicdLu",
  "key30": "4jnFsT6LbNEyrCv2G9N7fuGBqGnKnEAAZLcZSm4Wvgq9LD6Z9Fu2ArtVHkS7PbT6tigSFRPmAEqLP3vT7yvBuQ1B",
  "key31": "4J6Si7Tn6gdC2QxLVVFddwrEVXtp7uHo6jWr7NxaANJT2CTZ3FpLzJZMJQkSaUQUEEz18srBjwvM1B8PhcLpB2uK",
  "key32": "nL3Ywm9PANWn5bxF2nZus9s5CVnjS9NTkhM9evhNmyPhbRrX7wiiUxonq4GogQSMcfi8d78K5MqPFfrK7jZTA7g",
  "key33": "53kDr9WkPQpg9kDHxVqnUumjBWz3KQ7RzQCroUDZSttGNpafeAP6tZdgNm8XDY1HeY3VJ86JF6zGRdgVrPz9h4WR",
  "key34": "4HMZ81jeNqWAYvCdP2Hy4kuzmf9vLPBMiq1BdWvwriQ3A5RD23RKMVENhTB6qVQHxCN85i7rmCxFAFAwhKaHkP3c",
  "key35": "2kSuxgRbcau5WVMzEj96uuLhtk2nPav14N9Q5eMqQv6M364DpMLGoVDiYAPwmbsrN3RmonMBYKmbgVEsjGFVB54i",
  "key36": "59Jyhsztm1efNGgQsC8ako5zz7QexZQCt2YnWveguRNysFh3X4unCg9gTitV2iERUGuUr64Dym1Pf1U2QAt7JtCM",
  "key37": "3NKQULoPx3VX3ubZZTkEYzk5cfYCn8EbQjoLwunNCjT1hXC7bwQfUn2ybrg5iEL5q2aeDp8mMUEzBYkn7J71RFLd",
  "key38": "ApMsZx949KaTo7TXbzudLbDGFUmhW2D7pLVcZjm64yL8KP8eCr2dZ83JZbLJw8YuRcFPRKd88scGeDMBhk4hEUz",
  "key39": "pUvnNZLWQaRdURAFCJRtAgx6E8u2pnrmhgKU2bgGe2gCd4w9j48evijHW3642vbVtE87iTx59ra5E1TUViLfZqA",
  "key40": "3x9CYCQ5qc8T6QnzZoSxVdWYvPP9xUHLWoQTtBWxiWqX6pfFQGe1BkgJrbBBHnTqjSALHRYGjLuKidX7XsSj32K9",
  "key41": "5rHuprj4FNWctx2VbnMbRGGJ1NuqqdPosnh7GQJDR8JsnXxzhTP6FDKarMPX5qh3UVPojeohp2jAQW8LaJp91AgP",
  "key42": "5Ms5yiPsYANfSKRHg8zb15Jpa3m4qTzXkTxiwEbNDhUzJ2WfFr7wBLndS8JZ8LnJuqWhs8C6RSMXSqTPaSwyjPgz",
  "key43": "2DCDZv25qJGkX7YrVdsSfdjBTKtBavrvQHVxHAJ2uDnpKiQ8Aus34PEpnaBpd1KPLQJjzKbUjBofzSy4ZFfwggQ",
  "key44": "5Kv9EBiR1ieYHQJntThLiFKTNF9rrGsXaoEbHZsqYtpaP1TinMktCvm8hG1DLr6TkQc73MmoYRnceV31KD8LiLLQ",
  "key45": "Noqkop6NftahLtM2nhN12XvwxuQrgK87c3n7iPfvK5ymLfRn9UMZYixDdrX2RCnUWX4HLnCB245JQ5pPDPNuVBJ",
  "key46": "51kEAWuLVFBHdfd55eLUS2Kcd641dDBky6p35QS5mZGSj8z6igjbGDEgoBsLHJMXkTZVd3o8bXVBwS7W7wVSV4Zd",
  "key47": "21tK191BjB53fuJaRKH1xrHpys3gkGm6N99pB6JYjecLym9NYbW1zh1vY3ktQomuRVWC1Pz7F8KsCc53ZHRkwjDi"
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
