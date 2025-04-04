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
    "2ERf69Ywfe16FKtyJghGVPiBCCVMFK6aHx9bPZNYfaSyHjHfJ9TLDez1QtFdgygN9ztf77zFsypcDXvbg1w4BABc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VLmocz6Jrk5tEzpEC3HswAgddqPQLN3eR4FxJJPXDVL3Ndjfj4FDzdDBx7teGqAk7J6JNoywHs1AwiR4uD7NRiZ",
  "key1": "5KuUjcGT6FdkRa1mwhEFB2Z5R1zgQdcntAtwst8ASXwWxA4yCwMMoRWnMmbp1R9JvpdZH3RaxyfZA8dTHmxJNTYt",
  "key2": "2cCGswovycmMeKxcC7w4L3jfVrpS54ys6n5bSb9AviUZmUXtVw2CrCWqkkw3zwm3k9Gp1ssbvyxseTmcuWE8ZV3r",
  "key3": "aJyqJyZNpFpUsQGajjrAr6ZL3smT7JVf3HR8hTtzPJtNSiV9RPDdWbcXuu4duoYT7vM8GQKtF9qD82tWHFjUb8m",
  "key4": "4rK9MDs9PjGW5ykBJy966op4N8mgUGNDgyiD6JABS9yiBxeoUa4A4YrdNvpxuVhTDkvo77axaMMJ5DQtUrn5mS1e",
  "key5": "27HtFAHdp8bbmVHuM6SHdPr4xqhR2isTvz4PiFR2QhZmGBfNyfwEut5f1Ucipk8Rej26bQXJsRd4gFJ8CYU7Ue77",
  "key6": "24Yvhj3AdAWQ8F9iC289WX1TkxhKYYpbJx5VWroLhvnft5BzbidBGYTAtLgS5jr8KGyjcNhKGjWZVa5FHK8xNdWu",
  "key7": "335m9cYRAz4YFtATCjsaQZzDTyaJCZCkcQhQpS9z7uahKhbnmWA2UACHZxzhMwq5KuA5wip3ZJviDYM8k2jFQEoM",
  "key8": "2hvJ8tZ9joFGkfNexw2448QKrAV4NSFuBidQtBrwVAEkejRN4SfcovEEcioHN2po5s6c8XW7bDG8V12FdUdgRMYE",
  "key9": "jurVRteAMYYFhae1zHBUJR5VYLDuSNLSTi1HextaGUhu5mNppDhwDm9CJtcxwG3yHwHHGvDPK6rZEJwXL8VsRPN",
  "key10": "2LR84nqd7XgiwvTqTZfNkFjSNdJTeqpPNS6xeZQWLYAPJG6mqQ3Pz1ojm5yZxEF4Tbj688ZFyMw3U7XE76TLeVtg",
  "key11": "55H1v41zvji6KzYABz2uba4XvAjcKH32dGT7uQe9bdv8BUEykvWjLt3iEjGSBP9rAdwC4UHYyJpZzB2cpAJyofs9",
  "key12": "5D1EEZT9CH4TAS6pBHcXESFTxLjRj24EnDbHUZQmgvxTQzFNQ2MjCLLW7gxjQ3mNAwEqJGLY2vv2Si7Hbwb1DQyQ",
  "key13": "2eZ4cxkdyhFBxBHSNi82nmsS1CtJjXhXx7m2cVef2BgQFWpc6uWLonP6WbAZBuFzXAXNpM8Gdh1zDd6cXyUxangv",
  "key14": "3ZbeZ4SxSVZEkLYHSVGFHTc5QFWgBXNHUF4Qi1UVHeD57tV1rk8Ebp4G3V2kgqgFcmfkWt6d2beBJwdGjjvXHQGE",
  "key15": "2EVgZRf9HGUG57qPbEyct2fZowKMeHDWhHgtBdLZgeAVMnpg2Q3ijDGF2CuVs77uu5cNUEY2Xi4iWJidpfaRP1SJ",
  "key16": "23qkDAL6qF2Fz12EJ7kuDCT2weHzpwLQhin1CLQMAHNVs3LTVoFZzwksTyifps4ust1K99iThxEsMV99Uo9jLJ2q",
  "key17": "4VyTpeT82gTE3PqqgRJ5dShuT3q7uVHyMqpvQfJKJXvBKgDHANSATpJW51ss3AYX86bC1nn6o8qJKCbU57aPoHwy",
  "key18": "y38xAGcd7FuUDQm3R4mK3AGUQgqocYT3FTKdsam8R2qYAet2wuiXuC2z9peXQV1x1E3yf5pNLdHKPpCKtU1ksrE",
  "key19": "2syii3DLT6kFvsfFfRqSuA6PJMRQKELcSeaBtAru3rVc7Hgn27KCxJJt1Nz2hXcjhhidTCGf3Y6UUCHFkNKW7YQ1",
  "key20": "3B9WJfWKXXFA7s8aAYWMXm1vVZn4urR5mueaiZBCqkySQXmRWBTBiGLaP1KSGXRHbhcUoStynqz6nBqymfjmr57G",
  "key21": "67RptWBZvtgH4gC2uP5gwajb7we2yayrgokY5XbK7i8T59YuvEEDQsL1kzUYM9VbGWzXxGk49a71LinoerqZXzh2",
  "key22": "3bkaHo3AgBZpBitRvBVrMroqjKAi6XdE4JmRMQ2VtsMmbv7jdmRJpXWCYWYBaPuqHYkGdy5Q22ejFPjqDib1aD9B",
  "key23": "5ZGLo8qLknghvKzM7WcAh4QsxRm9XnQT1SMrKzFq2R1k99y2MLei4UCTG5wGmxMGocyRdQq8jB7uPSU9nK4NGmzS",
  "key24": "4ketax2Srft94oKx8GLQunvFTtN2a6yw1ehMTvqXMLi4VYPW6hYpXnYFrCTdDbBxAz3ktbshQco6s6TpmZv4mFHN",
  "key25": "5dDczQeANAuUSkgkYEKewsfsS4SeBndgTkwzrxCEFCrnL7QJ9cVJkBCaGcwuSJPe1H9nJ2Fr9CeMo18H9V5HJFSe",
  "key26": "3iTrgr6SFWJBNNx8Sp6oMw1ZV711j9PM8PB7f4oJdnidVtonGMWrDmQDsX8EfacKBDC1vm2fFaGfMm5bH6yuw1cJ",
  "key27": "2uuVV58fwT4BoXZ5MkpA72jGrNbs7phT2T6ewY2BP1HhFNmJP8M7cAFCJfzA8Jd7qWQosfztUwbUrUapyQem2VAB",
  "key28": "3ZoV253v1fns4AVTse5yoknkSg8xRSJoYhaVx5jmU6qQATt2zfJR8GcEVbxfRtnCXL4BXMTuUbcHuKsHHJAUasuz",
  "key29": "5D6fneM4532yJ6UQeyagfGRYwLXfdFAFFwwQgGNjsuLX1dr8zm6qQ8VtSudyfGfS2auDgz7u9yWC4jTHPMsT88GE",
  "key30": "2vCo2ewNdHccHobzVqLcsR7Zv7T9tRcErukXHYZ5gcXww5j1mRpooerZpo5ZhsQy8ovvajQU9SKENrVUiA6egq24",
  "key31": "SYQddm6qUDHQskbUHmtPsABVSXNFQnsZAjhVK2w9yz56iNXg1kFgJVi7FPdfywGLDQQh4BAfxGKKDqCgg6gToET",
  "key32": "Rt1wiMoHTSZSbGxrX9zE7tCEULQ3PPxXtdBuYvwjR4Md8eduMaNMhU2GBpSMCjDANCWqwApUuEksfU1WFYfgvtu",
  "key33": "3Y9VzEfuqDKyCwJP1p8pC2TUvNnXUagNhk7gU82tLgMVco9gypuaZaNELNhzCagQ4MGiLMcygggiJGksh9p3DTuE",
  "key34": "3ZgYFYtTKCQDHc7Nzw7UgTuug4V1hNxVJVmP6MALNTiTuwFX3GEns8X5toxcwRQ5JEYKWJUh5KPeE7UKX6bBYLYu",
  "key35": "3RXaHYzF9ysH1eTUcKkkNurYrDh2iratt6knueQGyJjcXJHUBXcRqvhGdmndpFcCbmBJygqvdF1fmZ4ooxKphVRh",
  "key36": "45J1Uc2bhwn7i4YthJNLgzMEV5bQZEBEjzaqWcL64SVGhc1dhcJyLMtGyTZ2iK4c9QC7hpPyEywXfMufNypYwAZ9",
  "key37": "2Un19BhH7SoNWDsUijmkqD2jreTBPNrPyRxhVoFvWbNwTJGDCrWpTaRYEfN74JiR5v8jJbc7MYTbQ7evTcnQwWBg",
  "key38": "31WQyHiAkU3BV9K8RYhystBGr5Ktx7erFcfuKoQG9vK4H7nLHoST2vjzyoSnx5izhhdwNytyLZHxUwbnR9aMZHWi",
  "key39": "5EcmastMCtRCDHEV9AAxXf8cJv5Ua2dxAQ77HDD4fuJA3nNuferGsmXdrRbq6vfVyfYvUDZPTy43KkHFuw3We2tw",
  "key40": "3dxBwPHtvo4Nxaasfk3ucfMAHysjTA3YjybPmfkGeVonJ6WxoXdTXBtHdtKwtmNGxLRphJG2Au2k2Bn7ikQSsHRf",
  "key41": "hnkxkJfc3iNE2L9ndeh7DjSZVzhbAp5rURzzF6AcueDzSAbx87aQU972rVWZpujwaScZDi7aHoUfz9WBiXfH3VA",
  "key42": "5cHPzdShS1N3UoYx56EaQoUG5FoSTUGN8p2M3kKAoWFJ5emnuvMZfjW5AU3N3T8qcK6cf1zD1rYWc4MKJcmKRJ1X",
  "key43": "5hCyzbAnBH6ybqZd56QgR8saXTudfuE8rdztyfrVjf7v8P1p35UQ6oShUCP2LAW74kWKhvewJj5zynY7JLfbokfd",
  "key44": "23Zp5ngsMqoJ3BLZfaYFW1LwddaKUDQaeMvEC6ZAUQvKARo8ZPc9HaRUa3aT4mZeX3xQRKi4BP5zvgQJ4oFMynzj",
  "key45": "4JHgn4QJQNCuYcASCzq9jgX3QdSTqqsDM8bx319nzdnb5XPL9Up4W3WbK6RiNUrqEvk63T7gCG7joNm47uyR8Uih",
  "key46": "2mA4r77GYqYveje7riBgxQZB7ieaQ6n2PFP5WnaWUyt24HEZLFoccRiE5xu7s8PdQc37Phegn5PHKqVUcjZPtDma"
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
