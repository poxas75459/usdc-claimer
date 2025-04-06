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
    "ioCEggNtB1D1kEFAu8cjziT9Hz3bP4BndhDSg9rBUcnh1aXBrD3mS1PoAuDQB3YGhAsHcqVBigCzzMiS9dm3z24"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cJjpqxK1bFu25gRd8Z94KFeUdHggzYjmFgLvAUmWS4AbyEH71w815qxPVULi1Q3YwpHNDCJeWeresZZXkb99YQc",
  "key1": "2Y6vwjVyWhM5mc5uKbNXGLy9SPZv3c3wBhSEmtWs3NTiCu5RFH7ySSHQrmXroJuV9k8uFmyvzvCpuPuZd1ftxJLh",
  "key2": "34HRHHuDDBuZQd1whcEWHeunP9FrzrjozYpDZdyKHp1tFtk1Ni7uoA7XygMY1QoB68xhAcCvgGxVDchgQGTtRGjX",
  "key3": "3JHfMWWswzktKDEfDAL6VKGbx4MYyrFU5MnUPNqDM4TP4nMZPsVN93Ugnno6sQ25T1hELB6SF8PETGSX2rdMzWKU",
  "key4": "4u6NjFBxN1eFM4Zdzu3SmKFtJq8MwAnyhvem45Pq2F2yBQbYohyfH6eGUNKgYVXexd9PDKoG9mNe17J8CP1jAWpR",
  "key5": "2LGpH1pQU4tNz8b6L35T35w4JjYpSLR7gDHs1JLH3Dy7AodWsUw2iqDh4v94FMyqJUGP4GZ3XS8u8sLKbURkjWkw",
  "key6": "4dZ7rYxhoVtHsxH95BmsPCLy9ufNipYbvLvqJSpGGidEvsjzJti4xeLt2SBJxQj62uo3BwGcxSSLosyy4pMDeoCz",
  "key7": "67Bkb8xTnLBimY8xYKrACzjeVjpPr6prCY4NgvRPNyThEchTHV3An3EMDNgAXRQs5mJb13QzgQheMqESLAzLAKpu",
  "key8": "4gHqSFHnhXHqgW1G7DCTogM8RJYHswwaHe2CoCnoiie3S6WTuj7ehM7NRRsptks2ftWsctJbUoceQYGmh2Sb9PG6",
  "key9": "43Nj4cVhV6Tei3QcNg5qjv7UqXo9nA3bFKT7STBUXzC6woJXBjx24oZcxJhEj2ojrUJFUiEYyCeNZB83PDDPC3tA",
  "key10": "5dufsyax9CtXUfDvc7dBq7ksvXuf7WQYWffmm4AuBw8WJa8GpqeDD8errFMuzxNbJMamSGzvpPLrgpd3eWURcS6h",
  "key11": "4jaHKsDRUkxoq31sQJm5YDiE69wuqoxGboWJaKBud8U5ArxikiXENk8b6QVnVQCutTHJuDiPcW77B2QdvGUq19Jj",
  "key12": "5oQSJEEYNff8UfTCMcWEDH3jZGWBLNzatNMZKARe8tAGrWuC7YnGQFEffguYyG4uqkzwXetpt4W2doqKQQ7ZiDo",
  "key13": "4mf69ZDvJDBWczri51FtKyTshxHE17o5fvEP7AZ95U5FxwsPQSAJTdtMj8XEfk26oSFMo6DGv9iezhpEbpwZuRL8",
  "key14": "tDZjR1D9Zr8HVd49rFu1uhc45gghfn46E9kH4PdStNTi5THTAPhTikzWZEaigucspHu3ThXHJMN1hrtmcpmy6BG",
  "key15": "5BNeieEjvd9q6Jvy25bVz4Fw5LqEE62Jj7q5z2G7TokeHHWymj77puU5GMxt4WGstJjvhFWGVtyaPkv5hXBkFV74",
  "key16": "vA2VnxfgDyqPWxGGqqVaN18wQfdWS9HnUsz6hnp1v1bpYkD4Fs56bXahpSgDdZPmMuJPNJ6SbutBLcpF3bax7SE",
  "key17": "ELRheXp7CsUQyj2yuKgEWKPQaKwNLunUM4iBGLzxAZHBNSQesXJe7wanGiLGm3fMuJE5uRPpLAModioGfeQcUsL",
  "key18": "4CAR1ZtinMVsayDYeFcVj7Jmif3kMgezpoAbkArFZHURfpvFq6hxf15pG3LuMjSQPCoas17VovPZbuXVimUm4SMm",
  "key19": "RTBJNcH95v6qkzeUQdLq5DFzNc1R4uUsBKryUNYPBahGPaDRGVhHrizk4HhvBpykP8etq1wFoBTKmDQfSEMeH6b",
  "key20": "3QDySxp4XQpR3SqbpxgNY51gcbC7oAyaieGJptP4hrNsYQPCjA2Sh8atti3LdSCMMUXdwjfqRHbsMXhMao6pFqwZ",
  "key21": "5Jrh9ZmBKU6YAQfBfbVdvRzmAB5DVoCaxqywaziAx1G22ByZTEpmX2HbsxaL5XuNGUNb2JqcX8jYMqJ1uVejENYT",
  "key22": "MgWoK9H22vCTzmeqpJwaoEUqgnTBGPeBqrSCizXmCJGuTRceHp55dWQyYZCd5pQbgkNQvxt5HWad61CwKPjLQgB",
  "key23": "4RP7nwW3zs2KfziR9DeAJCKFHtxMcKNNcN2E83cqdAuEwezB3bcjo3dgwJ7vedhfwYALtqr9RChP2usjJVB8o5TP",
  "key24": "4nhX3DnahKXq5Abb95E54m5WVFSRLFQbtj2EN5oLyz9oEmjiXmj3VxPdLFp9m2ZqgUkEynYo5a7jTZmW5zAhjn3H",
  "key25": "uQ6SHkF23CqoX9kuJ3fRSaLBJXyTF3E9dPty55pzSCT3gCiknEMaDm3YyBhxw4A479ASDbTMwdpcm344NxCFQB7",
  "key26": "2GfngiQokJDCpB29hHW7RS3HAVtoMLj8RgH71BgRgdMxQMXV4yVEv77h8NgyxhjjMBwtqviDW7kBmkWgbrmnCq1B",
  "key27": "3eKLxxXbwLq7XWwKpDhcL5jFhAdQ75jysAmCyzmH57XLWrSPe7ukWUJ6n5rCuNyWzx5chmaToeozgYUEqJwUsuTT",
  "key28": "2aGKHVp7fSuJ4qTBi7gCkcJYyAMnu8LPQ677nUYFxUqf7k5tRW5DQzhGQeUJSyfui71zTntP9pvDHM3zq9wgNiN8",
  "key29": "5rvc75SurYbHa7Maup9NigDkUnWuN3PeiYGMDuJbe1LMYwkvGhKkd7wJbJ9dHpePVPVT3FhXzagYmzxW1NHa6JA2",
  "key30": "KCsaSYUjDyKiLeRWA3jCQbGNaq5BvgDJ3RRWotga71FoMr1o67BwSN98gj4LRNhiTThizPo6KGex32ZZpwBtisV",
  "key31": "XHEfyyQt9kB95vedtdCj96uWFcnDEaGEciPw9kkSGCaY52JqxNByA9MPsmprRReuXWY9hLKsQqyhBYmTiiEshpT",
  "key32": "2AEaM87ySB8qPS3BV35zkrSYGRNpMg98CT4bVGxW6G2sKxCaoaL1gzrkFuXLKgGfvQ1uo2T8D3sgap1XCeZC6Y8r",
  "key33": "4WmyCXUKNrRM7JFf3RktCxkajnEkXmg2vf5L7iRqMzzWC7uA5PG2uodZBKVRE8KCdo2ggsgjYDGPcqhHPi1eACpf"
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
