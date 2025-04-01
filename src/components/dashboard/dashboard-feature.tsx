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
    "PZWJaiTNrDzYPFApYxUBuCF9S6f4FXwmqtoJCyZGg9gHfd4ebuPEeJWLPMGpSVE78bQcJjwFVWf3C6tGVvkV9Mb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hKzgHDNsWfS23S3ixyJ4jTzb9JJbpjiZUtbXdteZgMyLsVs3BoKyPJ1E6dKRX3cZwoPdnJmK5ojxtvrrzfbnPU4",
  "key1": "5TtF9PtqWczqPN3CFserU3mtnQF76Rmzo3UfY9GP3iysX5xGXEvmMozF7u8YyoVDPRAFX2b4JFSRrGZDNLsq3vzm",
  "key2": "45wtoGFyT8GhmHXrPBSneMzPevm2vrfhYroGApP2p79XuvJ2a6cHxkMywojpAQbwWqVekvkBU1kQ1Sm7abY9JqBV",
  "key3": "5CmirWsdoH9XuhJpNc9jsfGc5U9t1zWKw3p3ExpGoE3P6kF6TXP4jApU9hk4rkD8wKtDb2wntwS6rAA5sExK7JiH",
  "key4": "4LnVkwSRRr6tKS74PoQtu2Ky73hVD74wUywjcJsnijBpaxKm8wnz5uQK32BY1UtbNfFXVzJ4dVDbgXKaGetgjmgZ",
  "key5": "5sgaucY5G3hcL3vq65ozdowUyT6bRJH1vQkxMGGF1zTs8C9aruLAQLUUGzwECcvzDbCqtRZC4s9H6dcGUFy9EgZE",
  "key6": "m2KdPNnfXTFk3ep5GUUjtpK3pSF7mJTQtu1FPYkvC41fwQ62gHXjZWoWTUMViVjz6zqSiVwhQqW6Bf1KtLXFhu1",
  "key7": "cLU3WMrGnzd363kpkv1LXogCsNU7PDNCfjHCZaJRjnGChBnhc3iHNjrPrs1ZuCWSFYK78eAT6jt5X4GXKUyFNLz",
  "key8": "4RDcW39Zw7ed4KM1e8rTNo4oh36N9nAgGFP66vRLsHNdhRa5ZfYuZ2BmQq4ZpmTomfWczqF43hzz5EHsAggnkqvG",
  "key9": "5uXx5Zboi2PWWmtai4o9zafHRqoRaeR1zwLjyGuNscoEwk9wPQXFdNo3yXSRmMx7doHQrBZkktgbEUQF6AzVpzCD",
  "key10": "5a9ZobsmXv9TSmhb8eFytUYfC1bfXvZzPbFhQ77eM1F3miX4q4nAs7MdjEfU5owzddWJa2ufeuenqbDmvhVynjFK",
  "key11": "3kWLDmZc639MrrkxLramkMmuBGp6U9p87r1MAPAgYjdEEStDktqx3mo6Qxwg6imvALkDQRnz5JqFngNZMc4nHRfQ",
  "key12": "3U9Xk8ckNx998JAy6MPk2Zay6SJPZcTnzWEE63Rf9M9dQx3x2fNFdSgggA3gAgH9JNmnapLLs9RNEayxn7Ae4qGx",
  "key13": "2xn4Sex1cDx7DhFYGPqt7XLA335zQra2iR7cjz5qfGTbx8wew6dVTyMqALq6BDTZojmSDkqt5vb1iA2b1HaqzuGM",
  "key14": "JiEEbPoXCeNUncscj9ncip7RGznzPnz4ouiFyR7MK11XFsevQwzW4UuwypEvwSTycyFN43bHZHQ79Tzh7RT52NJ",
  "key15": "LvCnSP5P1s2sHKdWZzeygkZcT4aQoAsMSeqLu1188t2MUcHy193omhHS2DYcCzd3GwTPjSMdCwdPVsrxHGKme4z",
  "key16": "31XzEFnXoFBqzpV3fh8iJa4VQcUZeHzKSscYg822G1sptVbrFiJ9Q9jkDLJVKu1hBFSivbYomkdmhJ2suq4RZFy8",
  "key17": "3pmgHqdyg45q95yaZbuPuVhJdb3n1ymgvxhKbhfNsBxTzDkg8hQrL92tUHQzt9K8Y96XxwqGq2sPVByf91VFFmn",
  "key18": "5CF3BHZnPo5Vyn2eF2jCnVRn1kTbY7bEByS3FdHT5hH7CNhsQJyAmTJ4bZZbLrHGi182z6jHxD79SU3yBZRuVQxW",
  "key19": "5FmXB9V7bKoTzHaSxf7rcUWp4csfrpw9LLXTjG9Zd6cFMcWu8jc6t9c7poMb8r4aDbjotXS5PJNe4XrmJnKw5tX3",
  "key20": "2We7JME8maa4juoGUFTsrvujb5ib7VYcfNab4CPWV43EjsrwrUZdoT5mgCP7P7QPLdpjwbe1gv6mKti7sbmyMez3",
  "key21": "V3mtsPZdUznwUqMgZ7oXzNQJ9zs4w4f7nhPPg6oL67NxRyZmpJtiEWnyyVw51qe5Ax4Yogay5X1fEXxvSvEm5or",
  "key22": "2xUsEXo7TvGupKYYPRs8aZnpuoUjF1671hmPJQiAhV4qc67ha6Anyoyrq6osruexRUkBFujzHkvyxZqWccrZjtgW",
  "key23": "haNqUPp9RdhFbhhci7ZMb5JvPjLmMJpXesRpViQBQ855AZGRLMWQfCRy9qr9EekELzpdymqi2opN2FZ6esek1MV",
  "key24": "2pgW7sT34w8zYuAyusGjV8JDAvwdfGogAY27EXvHJqsMvBtDwfSDC5gJovu6YoHZzmMKfvGxjLcom2jyGkBNwPh9",
  "key25": "5jvD1vvJCYCEwGsdQZdPADB8MQiAmR5TLRzvLE2co5CsUU7dBgJpkJYt8npUzz2EUeXPR4hMqP2CQccEzVPmKLhu",
  "key26": "25DgyyfSwSf78Aqi62hvnZdACQ2ZDihxcM9XRnCsi1naqdhyRkmMgu6EFiaxhhwUNdYbHSR2d9LU47WEp3QzuKjn",
  "key27": "4znsewn1G2ybnjfR1Zd3a1spsSZegAA1EMpZ7baM3QJaZgPo9tn6gdHLcrDmewByCni1qrHJgfFHGk1No2zBtgHg",
  "key28": "2Hhv8HN8M37uNE9zHQXgfMi1BAhUuygU9X1sUyBqaxXqtuVVy6Bv72Ch8rLQDxJhHKJbCFMKAbYHXPcgi9bsJUxG",
  "key29": "3FXNpgxR3pEW4PBYB4j7ue82kTNCLyMwFHFXrz3qv5WuCoitMC1MxPSgRu6AzHULajitV5zmEZ5qMLTFqtBYjShw",
  "key30": "4jME1K9XZwgTVyMva8mArtpHCNv7poYP3VHtJiyrHnFnDzFDnCgpGu7XNVtR36nuNxTL62V3CLLLWZtCFYcts6i5",
  "key31": "4eCfN7SAQiCbABhFrGRkYB4sU96pY48AZ7sXrPBPsQpp5nDugdUwqY76zrDNUqNcfoD62tZ9CTh2XnGF4wQ8hUik",
  "key32": "3PmvU2iPsnAWYznpvGXpMFopvuucUzEZUCkrRY62nHR1udnUZWLXPzSX7Y4amJLzBHvqmhQCjn8KwqyjhshCnWBN",
  "key33": "64N1FbQPGPjrHZcGbQ8keoVVCHRUeMzkETyjEYyMoZg1sY6GrM6TstCmRmttQv9R67Xo379g59imssxGQZRwYjJq",
  "key34": "3x4eKRvEqw1fXV2vHwJzqg3NoUVE3zPk9zE1FaiRw1SEZUUh6u8D827rdYdfTa16vxmTRgtYpNyF2q7Ak39oqvcq",
  "key35": "2j8mgWBkHvQjikdCiHmQqFvcZzTtUswqxxCn6HUk6pPfkNw2N52zVsNrciCyUnxiTZNWf1i7ox64etQZJEHjmaSq",
  "key36": "4irTBuQ8E3QnEaW9bHZtKRuVcsdDLES5TbUnmZgbrUzWHpyjT9LkA4TqXx3MHQhqg5ipZpd9BhPkNkXghZpxqZ9k",
  "key37": "4PTEf1YHYg6LjwoyjKnRdE8QdmDZ4gZXszdYceQRijfUHRuK11UVMoZUcj82oejSbjQXdmurfuwnLcYxjJVkbQkq",
  "key38": "4qdXx6PienCtfPMkh3JeABqT6a9iXLYzqhqKNXxV7asVbrTASbN79KQGHWaayaTrGAmSSB7uVzEraXQ8xPfbD1oN",
  "key39": "4stHjDJBPo2kWPAfkbfJt3tkVfm1vGF23PY9bD1pwmS2fXTHNJHGMB3TcRzNYmyP3vT4RqHzns1AfoLudrFimzbm",
  "key40": "8xUriCJTpKG74mUszrMLbr6gQZneCAV1MZYmN4HwRuA6VWDt6Br6GmvQkxpTcYzdERvBQouAiAdg1DosDobc99d",
  "key41": "5RPP56wJxCZkwejM62C5ViZasaGcu4pVNAfdxjVzAZ9LoHxRLCroqnJSrEtNJV5JeUE3W1DZS42HmXHBQ6AsTsT",
  "key42": "4N3QFeGUtgUKNGBffoywcESYRFa9ucEndNN7c3RxQhTiv3tvJNNzpXLWAXVqsjHjbq4jGfdgfp6ksoe721j238r1",
  "key43": "56YCAJ9zX6q7nCYgSb8Es13tbbEM7acGo4WsX5ECBxG5fiBF2hwyCbACCMGDZEbjpaoxPRPZk9EbmzSXGbKx1uPB",
  "key44": "dft7LFG2icu34iuyM4EygA2upZeGkUX2uu3jqGxN9bCERDQ3LYpwvGLrshMKKJ5Lmq5G3ftK1x2GTCTGWy7BXoZ",
  "key45": "4qdBpppDrnBh1kQUnZcXA7eK222FYhTUQ2haPJM5CAtH7CtAxgtsuSEHJzHSsVxYasEXVjWtLqYFRPubPqxUX1bX",
  "key46": "55efyN7ftgqLEW4XAxMctoB9VC23cWPTsVcimcPqrL4nMVDTmwQgVCNpjc9BKvrSLCGzGSfBQ5j55K8geZn1tUbE",
  "key47": "4NWptQ3QdseijhkvZQUFAk4MY7QHZP8pf66GHdxVyy4h72e2J1fhYsfeh7FWXYj87byS2HQ4toiuudbDt3DVT8Us",
  "key48": "JJXrE9QikZMrUtkFDjB4HL9KXRQCACD7fFSbJvqAj5sWhX2xTdkVEGV1Tz1K2DygNLwHUDRF53uN642y6HmnB87"
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
