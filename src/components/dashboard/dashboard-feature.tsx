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
    "44mDoNgNQgr8Hfu5hLgWvYuGzquqqmDRFGxGeU9vqdu2AdfyTBqDAYEXT6ezypnAqEfFr7f3vg1fsPdVJogw7Fgr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3762n2qqqBs44UWRkUtenXEiaQCD7wBopGNKRYCE72CyReCNEhWUDkB7BwATqiB4HVXA4bSyBBMAWrT1NLpKAuZn",
  "key1": "5ZQUxebTnvYuM7u9PWtybeY4Tx5MJXzK5zEXHuNBr2mxnmgohhXHNuDcB16SZQinYtKJvnxbjVEqsMxhRMo25Hjm",
  "key2": "BNpqSBHx2ZWRMACCyCGYZ3wBaEFFKqPDAwAD6YwhvWWPhQqUUQhKHETt2RH49copKGJFhjQdRrfbQTPfPWsLDHA",
  "key3": "5YPJ3vx3CfzzEkCoc54M7qz1D8DjXbi3RnZcNu1JsU44oXez4Dm2yrUvTnpP2dh327PmuWCiJgwbzZnDFozBgZak",
  "key4": "2EfEAzGoDhpXSeUkE1g8imAfrwXDgAiScPBHkihb4goNa2Gx3dEjAqjzvLirNUxUmEgzRZpDAHgF42ghxomULxDm",
  "key5": "5hMFVXnPN6FaREPfR5zwhyCdzifKTKHHa1w3dW7FQXVGrzFjxezXpUoDi78JiSeg7UNiJRWi9gy9WRTZxDWB33Jv",
  "key6": "43F2FhH3rgraKsoRa6xqcNjopNxJ2gi43f6sTTY69XwB34MetCTNZk4CcwzdaKhaADgyrH5jww3gpcPcdpJkFj8m",
  "key7": "4i4rP9Qexm34eurCX2iB5LWeipLxwoR7R9EJYvSrEXfspNudJXCa8B5fXqWArgiSwnf1GPqi1zAg4Cpam43Y6Vyr",
  "key8": "4erX86mkesJ4f2KRoArgCnnF3JNArbJZyxgoT55EHunRXbD2YCvpJ96x6SU6UNzmA9Va2hXuFCkTTswhcZB32mDn",
  "key9": "J5SUgqj714vXUTvua5i7xoXbarxfRxNPeeXJXZz44EgoSsCnGqsHwYoNrjRmAktscUw5njqByyQ3vRRdtH4xqTN",
  "key10": "4m8k8L1mAHceQgCmnT7JweHPStQiP5bEWomq2NRTsyct8zzvSRChGhxGS1xmEqXwt7zc6ca15xcocfyEqjS9VE11",
  "key11": "4c2HtKZVnMEPX171A8qZNXFZu3bDd9tUjnmmgtXwug3eEYMt4CtGQXFoPwwyt8rr1mgqFcHo1rXUEJdy9qCE8cgo",
  "key12": "2JucP53YLjVWScgrByvXPEo9sKaaKTPWAUFVmY7gXknKrF9ab16vqG9eUUP7cf3hPbYwa6UE1NYNAw7acDnWM6wZ",
  "key13": "3Ntn4jbXCPP8shNjB8CMnqAu8GGpW4d7sv7t1HutF5tjQDXLJFXww8qUZCxUzXKNyb5Qoi2wQ1BfA4dSxyuaR8GC",
  "key14": "2AxHK69B6pYPoUSFopxh6hQkUTiT1msMtdtzpirJ4JsdG5B7jpJryc5A9ra2ER15DG2Sc9TCj29NPjcZU1EwvN76",
  "key15": "5GvJGjwybNNurgRFc6XEGH2wRTnU6hmCRw4jSzktJb8aBnAr4bUkS7NvTAUXgLSPKFtQMpsCfgy3SUnAPwaDjJd4",
  "key16": "52GGF1Z9eFQMkwMMNHx8LKRYCuX3YEwvfaYLpv63vuy3R1aJziZ74LzFCmNABXv3tN6w93hDtscsi4r72e9eXZDc",
  "key17": "3EhpndNpCE7X5veYssTxVePYmkTZKcZ3WMehFcsUs2F4eEWtNaMjTNyh9mhVS3ydoMAbRejVk5ccDR9MZqHT5uzM",
  "key18": "4ojNibnyFXr85cjtf5CASmUyKaTXLjkMnqFAJskYoctvgrfFfRfab3o68yjkL8xT7VPcHrYCeJt3ygot1NzRjYu9",
  "key19": "4nFwZrYcadD1pPLAMxnJbKwUo6JXTmdR62oY83f7dcFjDDs8vuEqN2LR23xESNRtNQtVtUA22D3wgY8dM9dNzR5U",
  "key20": "3BGo72c946MAohyriTw8hgtRHwhxFcWj84cgvQhZexn1QvYAuEwXvrWi9W1vLgK5pJpSwRo1Yd1CzFYh9YipVCAy",
  "key21": "3zKuyAUv2giuf3YoTVqSVpB2sDi8nV2zUYGbtF3wZXNx87piXuBPnZYKEgjrvXmCNyvAvtAUuubLuxf5HdYvsiLc",
  "key22": "4hMb7Cjg4Skw9LbfTqAKqouxYsejovyL3qm5AzQrXsKexwJspJEUdrRh4Lwe3RHbMfacNRsUar3gggJyn6LQfwai",
  "key23": "4ae1t5qXDZjrsDoDTjwecTwmbsBt5VAGHV7wwyY1dx5krqLWdLRU22PU9L92Kz4omekPT8craLhMEs6CSDo6yC7N",
  "key24": "gCR5cTDGetE3cDwwNAQqiB2ezhoLji5pAeFxrfyhCMZGJAUq5WR7vj5r7Vwys5jZbgctEwSvbmbxxWMzxgktMF6",
  "key25": "4krfm1t9F92kUvoC3jNCvMXW9jKT3pnPKCUmwT1wdATFURhnYh5k54gN9Xypwk4nc2ah1zHHqmournKR7zuC8Ajo",
  "key26": "2ZyxpUWDCNxU4N969nNAHuUNqG44Hj85fMszQNXDhBU1jJ5NwJ7GaRDwvqcqr1tXycVuv28eVX4PAD3GuESCh8yD",
  "key27": "5hRXXjtjZixhQedH5j6ktqjWzwxN2EdUiWQbCMmKXyRYw5tpRDtdhwDvKwYJxrZu4Vep2VsnyTxEDjCNxLM4wX9U",
  "key28": "4bE5tRDBabyGaargZQVtELF6DajesHznZHZbcgxPXYYJvSmacNX1Wo472Hife2eWhMZokYYUg5jhUJCzntA8ftRb",
  "key29": "uzW8EaUkgM1UmKgPbwmZvpjX9hCS99aLNTh1CfHBR9VLAUuxzWEAoWTHEbRtxW9HvZnaa6JmDzFGbzskr5h2fDe",
  "key30": "2cMmkTWfqjPEuamTvJngpzgWZNCCVEoWELBmHbZGr9SM7Vfz5aMmSeDcujjiEpWPH5ZLkPRmBmVSrMzgBMtRSqz4",
  "key31": "2sw5jx1tNUPbdbV1q6LgupZaxThSEQ77Yv6STBdWxngPDHChEsKtiu6n1tPdzP4hkqYE5NpYhoC9dZsoaE333rw",
  "key32": "37LYYvVUu8Mm57SknD8QhCK6cwU2bxD1hUfYdffPGkTJSUQeMMW47sPyKtSKfTGx7nuSXHagUyUCyYz6iniME2yH",
  "key33": "4kKKrunZtzsnsHXkWvYjGMxxMscU8YLjGKezS1BUv9qNiXgkWLJNXVQHyn7FCfKtyV2NWPBYQesEpJXGE9nmNZX4",
  "key34": "2RE2VgxSs6jmSESyT1oEKVLLZvS6ycLnxrkHR7E6QPTmuoiRHJWQ5PZbVvrz7AB3bBVXZMWy1jMTDLfTDLYVYpJF",
  "key35": "3GEGrQWiTH3pzcx8QEj1aUhtK3fx7iVGW4x36MnnqnXFyrBHkDBmQZ1u2LbNemz77rJUrwVqyXWv3YcaYbpjhVLX"
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
