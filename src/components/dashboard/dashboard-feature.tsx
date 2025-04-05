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
    "CRRY4dh54PUBTYDLB5eo3gQcryFUGoNzbK25GFj7k9mMymWBVpKH1Ab8hqFGUHUirBsr64tKDB7vqeECv1Wvtne"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NuFR3bJwhnbekD9Zk1dy2ibyL3dqb9hDkAdg4qLZHinh4cjdrBrGfWciuzbEU5uVm46274F6zYucVzmPCSvi2Eb",
  "key1": "ooATPrBVX8gu3PNRAiJj9sPGTkTbiC7dicQvB9hAdZQH5CSui3S8HW2GQ1aRJbL6U2J6WQXWAtuHnLzfuQjnqLM",
  "key2": "5ndq1Uw2cdgEobS9j3xrWdx9EJrJACuCNyqveN76dA2cckv6uxJbHr6w8r6dUD2exP7HheEpYG4VW9qTL4mUiK9L",
  "key3": "D11RVTeoNiGMc5fhLUNLjRnXhqZQjSejZgM6stvu3mcG9Wb1eL3VQBVyT3JNHksqZAc7yZLncBXKYAvVkFo7UiU",
  "key4": "4p212LjDGyiLkE26hLhbdGZdCby8He9PHJVTyPn4zacxdDuCkznShUd3UgJK4dSdv2yL5vXu8haBHZEKXJ6v8rVy",
  "key5": "2AjLfGTtFJ9Lbf4umAbbNXoxZSc4BeSg4toYJQ9bSYatwe1WQYoVo33AdCeHiYEEX2PqXtyKsJv7hzWY8mkxeRaG",
  "key6": "2PLA8H4TA6KxsMTUTjCqGaZZ2bxv2TiHE6We7Cr1c1TNyVLs4Awd9a1iqAxDfGEYcY3yje7StLTrkYnhCW6VsgWz",
  "key7": "3LK4ungUag8L5Khw2Wp9kjXuyaX7t2oWZYsy9mUTkMwDLxxHihTDmm4aPACBiGLT9Ybak86vK9EtKgtD6mRGw6vY",
  "key8": "5McDjzCPdUowTRKh8j2zmLYjBNmjdZ3ceCvhi6rgZHqA4NYUWMvow17FTx45r6UCCvf22WTgX5qfeD42TngRRtjx",
  "key9": "5SJ7UwzbodS7WWwVGrxS3wLut1Ndd7wERXp1y8wZ7gKEM77tWWeyxW8ZctbgbDdz817Ua16vds9y26rYYpHdz9ij",
  "key10": "2gu6aeaGBVvhQziYnQW4XThoxxt1T9hpkbMrfeTrQWeMqjUaJ8m73p7SKSsjSymaDFmpkEuds854tKGso59pV9e4",
  "key11": "5qz2utbqyq9dXRggRKdj2yt2G2LGRTVTt9yHABaCANb8DCV3aNHjDE8iuex4qxTtVUrTZW3o5hfRLZc8AFcNgNy5",
  "key12": "5fEkfu8oRSUpFwWLYFysgQv95nUrrXFEdY7iyEmfRtzqhfwheCuFctYcA8Bj1wvUW89FNiDgcyvTmjzowsuDYdiY",
  "key13": "5Lez5vR8cSdmiRzoZjWkF33VL9Z3A3FqRvyEvoYKD6otgcLJBzF24nrqmXfd9bnwXjbFnHqYQWaikLpExd8Ak9jF",
  "key14": "JPDGVvqmdktkBrHGJMcidtdK7WnwWYdWWbCG6eQUY7ue6SnfDbxnxFTyKJuJ6BEFsuQMAGKMqvtgaCYnUvUdGXF",
  "key15": "336MsTXiPBvCKpdpYRkSFrMcPBenveHqMADK1ygazV4z5F812knpPN8FKCUTb85uuYQEFx2TQvDWUnCXV9VRgK4G",
  "key16": "hMY2qYyftYME8vSWcc13uCKDQW9vZ4tksVPzm3Rm5oKfrQrHKModg1rpCQDv588Uxs1caxZwGYt9P1degpqiWKn",
  "key17": "5rbM5nf9bboWenrxcWCKfWXJ3Rot3L1vZ3B11XWgzGN9PV7N1pLqnMUz7vuQyRX72ykPAfYuByWbwPceYzLhX9AV",
  "key18": "4qpuiowHU9U4fAXqCAJYgNb7KRH5UDcsKtq9z4NtARL6QdNizEy6uyg5SpV5qwaRSAns8cNQ4oK4SqsjUHwUnQ1t",
  "key19": "2eXcW3AxgFBsviCQZbqrh338dn1qaU1oGJiqfTZQtb4Dgt95pXvYFufiB2ZAMYevoiDoyo8TuBvU8qeRbFJXj38s",
  "key20": "4uW7jChrnt4FXsGfn8H7eDnjUG9YKiYJqhVrXx4vT3e3y7k4ZESkHrM6w5AVfT2FVxJfypPmppJAYwNH8pgu1zWd",
  "key21": "5cggaBqicqthMQ9uX1UxxDLTiFY2w2YztCCTkBwhFS7EWyqN4QJZLKPTmP2nyk1Tds9uXLhFUFoTx77xpv1Mchmr",
  "key22": "382rxBgBsU3hMyGNtN4kA5Ci9vQivhWhBYycw3t5wXQM4FDmBqDfKyv7oJCs1nuMSEYRUANxKoipCFWb2ZLqQPZN",
  "key23": "LueaXw1PFiNrCwDxCckT4QdRrAB6YpWv68dCZi33h8wgScvCiifbsvRk5bxQggWywL3JnX39tr5iiV1f4sNBuw9",
  "key24": "hfeq9otjnDNa744G1yiAjAQjr27qim3pEj6tj7cnj8ivjTDgJy2uW8Re8H6eL9xiHdxB91dhGcSwVBKm9so2YaS",
  "key25": "33GZRNwfqcHnABeaiwfZ4nEApb4fU7QQqoWwigxr8EvNiia17uD9oQgttnVzGPe1qNqDUXzpiR2xoGaDFM35vyjx",
  "key26": "3GKn5t9DKX3myUyLD8yJwghZRF8w7xp8HJ3F95ZAoXk9TwMhnBRqQHCN2E8jNp177j7GUu6mox7xUFDhxotLFEWG",
  "key27": "3gTshcemATRZwbPtkqyACqfDU1cRjPvdVwdG2FTdpRTXdWmgZb6sY9jHpEXAGfMg5odYGDJERmEyFLK1eteHV31J",
  "key28": "3XjQmsvT9tGpbh6xHQEu6SASWWwcdbJVTwcTXiVdJQQabCmcp62EAB4fSCQ5pJpNLmfcAgBwJvHcwtco98U1NJXM",
  "key29": "SSdxcvTJWRxBSwW1r5sAkQhmCmy4YAHUFZ9bLCKNHqujLpmuNLricxFGXnyvGNNLWWCLXQUai2g2ehENHFBKHj1",
  "key30": "2azoQHXRQcocNshkjsF3CjYMHTYiQbS4cUHAq494vGo8sS2VjD9zoRwAMhBq9m7AnGYZ7uH2gY7xxe8nE6U1un5x",
  "key31": "5VWZNRLPKm727XnBRLdhJNcTT5yUo5cm51iTD2QHMWZgkU6F5V6NP4myY5y7fuTFzGYDCL9hKfwwz9e54oNsdPdu",
  "key32": "2FRddmKriuQjk8QwVuJ7omsjojEyq3Bw57UeXD1ancynfZxys1699NMZPdDCtNia4sXk362eNnfRERKf99ocXohU",
  "key33": "4txomXnqiwt8mFDrzrb59TdvJJZdqgy8P7S9MS2dTWWrshgjVzY43ayYCcsz5yRsNAZsDybUrceUKCKESxdennv5",
  "key34": "61vEaHCNGZLuUi8dBFcispj3wPwfHHQR8KdLtbEqNzeJUaLrDmbYwWrv57SnQtnMWUzVagbs4eWi2CXayr4ub5S4",
  "key35": "56UhtpyC7e2e3oUdYfvtYBbDF48KJKJMB2NsTkznVXEwyUWqLW2JFbvYDd4bkpB1hFDrcwVZnmZr6GSE3uz8gWZo",
  "key36": "mKAJPGVPpdpLbxWSq91DtLoWYfzNZvfpw12ZGm6hpsXRcQPf8W7RE6udgCTW9su6hmgytGUi8k24jxto4S5kPzA",
  "key37": "5TVUT8oFMJhtS22Yo5vidsP9U9oZnpHk4avg4z9EivzupQAY5ht1FGs67Dyy4fk6jqmW4QcDdGpwGYKtLkwcQ517",
  "key38": "64Rb4eBRYHQLBeRXpH1CdJgTtLBJdqwof9PZxxLLFgvuBVi6V4RdhXMd2bYvQwf3dYd2VMnq7gngycPPjSVYe6tp"
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
