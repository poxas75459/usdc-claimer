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
    "4dzyHBb8TVCsogFvqBaNaKWyKW5hi8PpV3TMd8xd6Rk4YkK6ZYVahhvmAyZwaLnVsSGr3Mcwrbc9pXT9MRET26ty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63kdHUfYfuWfWmK771LApScfpwhA6vhjiFBv5LG1H1vjkj1UXgxq4AgSHcGQdNomQC25FJo3Z2ekvKSabzaYGNTs",
  "key1": "4BKtvFJKcJR9Nsnkw1f3AuhgSxseujnMYE7PWLP1CzG1JbktUiRHnZLDCBGoDj9WKwJKFwwza63r8cKGMVpPGpEf",
  "key2": "5iUSPqtMVV5cPbkg2aanXW2Ca98GjfyMjAAnzbaEzrz4YbHVYfsvdPFEos9cnAHD45tNqBqRazUV5CBvixYyrcE2",
  "key3": "LAjC1JAocmgasrCcAZzhz9qrg1AQAgmU43DVp8Vp9xyLH4GMn4R2kqRn4GuXXi2rki3P5KFNkLPCjRT2vqkw5St",
  "key4": "3bjHc912kpjsBXacfoi6EmVVMiKjWAo5FvxPAyMxbyjfetQYFBU1JcMdSm1sNx9Te8TtgYCB7RmX813ekhBNBf8b",
  "key5": "3hyuznD7uP5Y5ewAiBmBAppmNU5WnSENM5JLdyG8Ln4mN7MZrcNNyAe7RqYPv9EXGtXafCkYPvc7XjyFVETPFGvK",
  "key6": "NHF5BXoxn7jP5y1kxCYbFEzqEFng6ouS31NsxSDBg3bAWwMygQLSpXJimoFVrdjAvLHRQnMop7V2u1nGkMdz3tA",
  "key7": "64Z5fxui5Gk46UKmFHdDHHd53zBZuEGAiemsMCocM5LpxVCnT23NvG7fELRL9PgWbXH9g1kf19tRLPuGwV4ZjrUT",
  "key8": "9XTFbH3QQ2rPmoTgzN8GrLccGG5yL6fLBi24y2uczTKhHx3nSsf5q6BT9z7CGSsi5SoVL1s47pYMe3bvFSoG9ze",
  "key9": "4tQiVBjpFiyHNf37T5i71wBDhu2JUpN2NTYu4Y2gwARQupf8cLNrH44Q39WNooYEphe2p69zQrUejBxq8ZDTC6Cy",
  "key10": "46jVvWeobHZ51CCCrJryxf4v2J6iRLDuMcb4cvnPped51ZAnYQsBDM3ZsN6AQJoezbjoAHp9eTcKpUSZ4Vqh2avm",
  "key11": "4tRYnkCH3XfnSHUCbPy2iL5ySeGtz4bVv4TrmAJgtfmpB96dsvQimFHfMRLNzp1jG7Uf1AoDEBMLmtAV5rw8q7hs",
  "key12": "4pMjoMz87gjAi47cKYeKxwUcL41eoPGKkAuF4gRBNdXGxsLT2UNHosLWrdqvczQxaWmAXnm6RN6jMFNqfqsnXSC7",
  "key13": "5dMmrR1qrbB3urFzw9WTfYr5WenYuQSFdWetQPsdMoeGFXyFqikR2mE71gjjFrc8owDPDmHupk58iiNY1uimJDHs",
  "key14": "2RrJUkVENHFuBWLssTQSUf2NqwU7B9zLduU7XChxissfEdjDZTBqdHJAVKENBvzxCmJTFW1NXbeayn3d8EbQf8d7",
  "key15": "NWGzt5NvFXUN6T8kTcYVVBmrjHBWRC7cef79TEsLtWXgzFi7crUVZuFyKji66x5d2H6LMDvpf5FgH3ESuTassFc",
  "key16": "5LLXJUapkyLu6iLdKqDqZDxmVDGjEo9qGTYbgYHeQKNZvyspAe2JPWu6R3svRKWwsoFp3CpnQEEMgULyeALJQb8o",
  "key17": "5Qkiq9ErvjmQ2eUnLUcDd7E49JLb48fCfAtjy9Afkt9ma6cr8w3KT8MKFpC6SJWxZxUU7eEQ4miKQjmFVYvNBnXU",
  "key18": "4cbwMDaz7khzsrXBBd4TU6nfBUhpkevBPbJscvCGwAMieCxxs7cCw7nFHEHTXwaGAKESnbvMpnSXfGQBcAXKn63z",
  "key19": "5yiDVDdqGccuGmKpaanCvG7F3dcBVPun8SNTUX9hAtg8SyReJ9ez5pjAD1FZoL5JyXiisB52SLEAAQtc6fvnuSNT",
  "key20": "igMaVNw24zGCZTwCSkrLgrWWu4U8Vcou7PDtP39uDe4Zr1SP6hgVaMgGoLK7Q63q66tzQrjqy2BAU8LALN4nMA1",
  "key21": "4uCBXUUbpYXA2ueVQDzpdbRkG2edhwv23S19tEf1CYGYdEqVs99YpR4gGXEmVA3qepBwCm2WPYTLvQyUWXGfJkJy",
  "key22": "541bY5eDgSXhyKy2G3Ghzb6j9qeKj3rLHk3q27DS97zCu85yhe32XbHSLhPrWfyGG2hMdAco7XSa1iuGogH4wTEy",
  "key23": "5Wgetd61cAunMRa3RojnJqozji69ekNeUciuts9Nhy8Nc4pWWTSpw25akEVWNGYvkpw6zuw4YKF7SP7rd3BPZwds",
  "key24": "NsTW4zoYYidbctMtVvNtYBHW2JT9pbVQgmAnhDq5ycvuozQBXL16X2BMzgiYQZzU5rct1KB38fLcF9hrBR4gWwm",
  "key25": "3pnihX5dBztRpv5BhwRuv2iBFcWyof5sxK1TuyaGpBvLit9n3bVzgfUy8riymcDfR7D36gnAtDVD3Y3P8dyDcinQ",
  "key26": "1VtLZYKZMogx13ab8g4VrZMPKpn8vQpbVZmt9nuX4JDsKAsLcct2Nb4eWXQBqUffVASCqbBEFv7icACu7cZ51Nq",
  "key27": "MfZw2sLM7BVNCErnWg6LRTwU54YL6Z2XUUyRFu3c3NhbsixXNpBjsYYmCZdYMKmAMGL93uuCfcdMtbUHniGxUmn",
  "key28": "2pgTtJtcNfezKnRWc9qqJbSYTZ8yzBe7F9AfbeAror9Wesf2d8WtqXDctDeSBjJqLuFNg1tTRxDziVTKkE6wJnA7",
  "key29": "64dpWU6Att9CHVqvX2a7txLt9Z7rmiAAyV5BPux99p5JWk1NZgxN6KA733fufxBMSs56p5fBp4YRcYU9L21FHJKx",
  "key30": "2J2yJ2CQw5uJEzn7jWT5zThvy17zewuwh4RnD2YVzFrG84VhvwppY7BYFn4kaZcL3n69oMFDMVHqwmbi8rNV6Pjt",
  "key31": "5dKRPnJ716soSskeYm86dqyaMPCCckzFD6KF1GVkyJwwBVYRVQxgB2WB34x6aUrjomZVa8z3x7cnMufqsY4BDXwe",
  "key32": "AVEtSH6XG6fTNKgUrk3JGPjLYFs3L1viLUfGQ7VP5M1RyFVNRuP4FDRo12y4YMhPvtBKDtiTEHbWkc6gmmBYdvW",
  "key33": "58pyL2CKPREpFkUxMDaku4W86SGjn5KCTGZAH2U3R9BqXb2mkWcW6Ui5vGArPavZrAGaSM1iFAorJYEnf7sEMU5x",
  "key34": "3fS1fqJBXvkSeAk6WejP3MLjJii8DQCaazijhz6DEQV1sGNw2i25BVReGxs4Lq7qQD6i9JdHSzACHZez8zS7Br5N",
  "key35": "5RtSHeHKc6G3YDTNqBjQtwb8eQAwpDoVLuFSEi9KAeextrTzS1i7kU64ynuG69eWii4GaqA2gWb9bjTuZTqBYVNq",
  "key36": "5JrV8r8e2EUdRPLEts4E6obsWqc8JbA4iRSceHJgproiQED1MwJQ2VqYHvp4uPLXkk3yGMNGjk2SPjCWa1w5oh4N",
  "key37": "3hAbwA6UHugVDghPyEJSeZPfWNxjhf2c39oEuVKJfEpsUqZyiwvae42epajV1RxQiuqv8NJKiWHgqdkLXPWuMmbT",
  "key38": "2tSGQVXsCmyCScHkzeVBT8L79hJkjMLPkUPJqtx2nXug9os3ArPuR3yYYefUanKxvb9H3icoh7vCgsihSrzYLZ8r",
  "key39": "5Jpen7Sy3V75NyPeD5bT67cBSA719fuLVikpNCAjfzJ7mvrmwT9SzGEwuBMQ5WDF5eqkmdJvZdRDvfZ9iZTUWUdT",
  "key40": "gyt9dvLFZepG1cHjhkhVhLie5JdHYDeD2iHSwYZu4XGwGprpzKRsk4bmD13SGVQ9gbwKQJS2ZxeJeRxENuqbQdj",
  "key41": "bsKG9AiHhZ36yUoG35SwLaURtHJRLp6Y4q5eJYsvEHDHozHD39XFzhQP3f3eCuVhazGPQnxv7p2BjA4NHVNwpiH",
  "key42": "nweHnteD9gSTAcyWMjjFHwXF1QsWJr87txTYM81DwcvAUNbTX5PsL1mddV73kQNe7sHV463Y4hEPmswJK2Ge1Li",
  "key43": "33WPecyYmS3bKmpaxKKwJ57YvmPvYgdN9r2DMcsdbueXbi7cLAS3XY89yw5iEcUctaAKXuggiCnN5EnyVdm2Z7s7",
  "key44": "5Uf9ERyjzoALZdbKuRung7eZTVb8PCREzfNg8xKE3WFUnnbxPMFwdMYqfp6StL7EDAmoRJ9c5aQ3WySmVFC55RrQ"
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
