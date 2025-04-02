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
    "4HfMJqADgUpBGoxSX3TF75eiNL6kbcJYMtvT1UifgwTHQ5CE5Vpq4EBwVYLbCtmCgnpw2uZpnTrosTYdKijKcVhy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27v3ACFh38mM6sAWjoJb8PNVjoPm8pFdEWAsm2MbA6j9RF2Dm9msRh1HF9YzTvK9rTJczuLYy1gLCyrWSAoLTcPy",
  "key1": "3qCQcGQrDtxDZfGcGgUJJ1pEAcnoGHPvXcK7YuJyDnfjeJHYkWqFVUCC5X9X1RqZkfGGyPtnZ17hGb5BsSkHuBUK",
  "key2": "4HXqyTdhy7AwvGrS5HXpwxLAnz1SYGXyeb8S4dmpvABjaftPWRHFMPtPj8vVzQZRKCx8VnWVeJmMgttNd9SRnNzg",
  "key3": "2NkSo7M7JrGjkdWLFZjXMD9oere5YsKPwcxaeq1cY3Lava5nTdoUfZQ1khFKLfMTS2skpXTQw9eA4gWt9GAt6hnd",
  "key4": "5cNaxS3rnCFs4VR3Ldbe7bxpf7jNLsENg6xBMEsBc8atjh85U7P3ZSYnBHGyZTCVFsLw76vScZB7zdsRy92dAJtR",
  "key5": "3NwgsEJXoyuQ6eCsXpZaHJ4ajUMJk62kUvuRAVx3qAugYmcQNEJ156HSpMJ3H8781aEUKCKncRcGsT7uTiNrUUuu",
  "key6": "39kxtAfgeTaZvhiu4UCuEemoNpYf5o8xPxvfiUFbDXKoc31pBPxvkby2NwyTeStUpL8D5NgD2KZqyvTvJDdVEwBP",
  "key7": "4iqrvYG4XFkX5ksgV2xynXn6ojDqSaMMXNW3Qi8816AopkjMa9HnV48N3X8hNRdPeoZ68tPrBuu8kZZsqw9YcD2W",
  "key8": "LuktL3Aru5MzUKSQ6kgJAQ9pu1AtvpTS1bfWN7ZL2A2WSd8PzK97P4PBRSRB6araH8d4maNydzzNRkpa6bPXSfS",
  "key9": "4S14fyLxnwZozaiLYevz9RUxDkMxCJsoKm6mcy5S75VNxpjLYGpakAhAirDeJQYSkkDZ2iPqepNRJmFpKkVfcqzK",
  "key10": "5YbYZLidmauAgi1pzSUc5gmc7V6vyfJ9CvhnweUEyxKApU6jR5oKWcF91bd49SHQEtqG4yGCmcSKYW1k5VfntrxX",
  "key11": "5A7jrrFwmzjmkxULnecBqV34c1RaRLdJh5aJS7QNfNBw9KryZH4GgwVw2nG8fYbyZGVoEsgPjPM1MsKMDHKP5e8A",
  "key12": "2L3cW1w3KWebZvGnAVFJwJiR1fwEdZmx2J7CvZ57VPrSearckVs91VgdqzyMb4diA4AVYbyF7hxuSBRupcy9LMrf",
  "key13": "528A9bTmRxf6QyjfuE9zZ5nYanVi391C9Ks1xeJ8jAimnEcT8rpG8m6fjZmZ8Me79Ka766d1fNzqVJxkSUeWjQii",
  "key14": "445w3tDGodjpy15oXnncLaPHV3ZmQVxVgcYWN3xx4rnapwGRoRUpJZx613RCfhjESmyQkpWenjufTaKgcVZUWVUT",
  "key15": "423NATBmQtqs8tXmFkNjFSH3VZPGBoHFwxpBj291ALDLg1Q5tPa84xztYSaUjTY9BgVBDBwGu6doG24kgbRBtHyQ",
  "key16": "58cYv9cUP5K6QZf2RcuAaiuiGPhXwzqVgk6YRzAnGJMr2HEqSReYwNHifr8wYwFquMyeqZqJdTCPkAbsyyRF4vVg",
  "key17": "5QMbgvDrkGfwyuLNh62zpyMjti8J2k8MkSBtWCxNVzKH1hFMrf4M5hB5dFJDnGcjfRtwaxGpN4WLp8Fh2Bz5EZ6q",
  "key18": "2VmVgGkxCegLBc9tPuRTPSp1C2oUjZ4DdVtVwJGcyNXPgFQszugDsuriuX3twAN2MKZdWjLZfzFZvfYUDXfuCsdJ",
  "key19": "4sQaZvzZv3TvjW7Z2djDxEkCwCaHdqV4T8buGJBENW1XQW5ChQv51UkN6D2MRtxjnz32V6F9uysZQPUdwgSGEQmE",
  "key20": "3111dSybjEwFHZ6hbhsQyKFPmZooeJozsgYhR4BsRdHiDMa5JcqbTUW8oYepS5DKXmJdAVczyFTdPZvHLjkV1RSz",
  "key21": "3gubT8q6fCcoMrxpr9JZTUpV69V9XyVHyC2Rfs8QtiqBD72mkrn7Ggawc6Nk5Ko5bynUPamqGtRssQQ6GmadqhKg",
  "key22": "4wEWZnCJgJmg6FouKCXimA18zHJjGP72ZnDKkf4uNkT2tvfs3Bgtw7KBs1EhZS11B9GmUU5kWgMQQrcjbXNDawa4",
  "key23": "aMphcydtd4UcGgjorvrozFom7sabk3CwEX9mLiwHYiCuzXfs5Ayvv27jQXCTmeTc7YA66Nec51zwHVQpq5YBx1Y",
  "key24": "4iaxMBrAe24XUxppMLc7YJpAGKDRQpyRU85yF6LcwKLwvC3pk4C5uvxYZcjdzHzN4zxrw9KXVZevs21URZST2HgQ",
  "key25": "28ToXz6QfH2WWqoxr185v22JvwV5951LCRyXvjpG18KRMwi9dnYMFgXYXbWnhuKV1GBLkqCFXzY3dgNvaf55H4tB",
  "key26": "515YKQ5ovSgWBisACCaV2UWdht5tupSk1t3qNeRGyuZRvhUZfSEETbUMTG8zVkm94eFUdJbgGbHSLN2vA7yzRJUv",
  "key27": "PgDfLcnKevn8iKQYqdGaNWPGbTJHgJPXvNP3m4KEtBmcwD2QbMvJ8rZ5sz861BKUjNCzvWZHydEmWJA1eK1etvD",
  "key28": "44P682CuRrUjGHGpi3a52UFWkC2pGWEYN3fpKmhwZN9yYM8qRBKYswo4i1wPcRyLTajBPakCqoSLVDD82qLDE1ep",
  "key29": "5zFNafBLrsHPTdxtA4xYuUbuqHz9zTP7xCGjvC8rsc2maeUVT55DiRkFMjCVS52qi6skhF68qVmz2CAhqZmfG2GX",
  "key30": "5TAqY2ZxSNB6UPRMcr5efDw2JhkjhFzmZWz5WkFTokn2NjbxXvtdbrZSNjiVNTewS6Y8c5sV5sKeVZSb8iADQpms",
  "key31": "5sJfaS5YqwTmscJEcnxopycJ42LLH6zP2UjadYMsVCiPBzs4RTG37PHD6nkzw57fyiz2sScYY1VWEvoVG9hYEycG",
  "key32": "4EJNxmrsqLsyXdwRX81zLUBRvpqx8BMTro6UBBwHpkwbW8fqjJZRymqsVzjp4BV9YnSW9vQTN8k72aq4nHiPyfxi",
  "key33": "5AEV1TisD2XDi9JjAfjBAf5jLKWmLpdH82ME6aTLgCHd8p3uJyEHSg4QkzPXK5Y3bN4uNQyFYm3XSmCftTNm3XUk",
  "key34": "3EzW37awzirMZf2qaCwdgTCX2ExcbwkEEugt9hQqvCcAKTtrdotvHpFrJeaV4VjUhjeGTY2ifDEgYPLvFgkVxswU",
  "key35": "JP4Pt8srx7Yd5iKkuBqiDvx4FDLuN92AXXyJD6ps3f3atWAND5WT1JomFhj2bHkUpXiJRWu25pVNuZgmdcNvdUr",
  "key36": "2xbwfYUNR84tpBAtiHRVpkxUfNtMDMQ5UTZNfiC3TJSc4KmySpsA19QdTeGjktbpnEEc7LtC54PZTGufG6nttNem",
  "key37": "D22Hw9f9e98oiz7ZfgVQ1e2JHbF2HkypR4xJLKpAGV3kk6SaipdWWM272K9JADndUPsmB9V8YehnNFnBwvLgE8e",
  "key38": "3AHZiLzEYE1LySXiN3TKZZ8MMSCssCfwfcDFZGZMwVSBGQ5c8uoRYCqxvUryiZntbGXss78iNr4Z9R6n3ueMoHyF",
  "key39": "2GKwnA8Yo3nYiHKrjgAarYxNYRHcUpG3SQ7BuEn7nZ3dcKghGaK6r1TUjur1ymk8okMp9BxADFVTHMyXSxCHeP2Y",
  "key40": "3rsfZYD2L13nUtPRAEfG1JDtQfok41Bw8VfTgnRJfJekg4wmHFx852bc5kUockGBCdBDrQhAsixrn4hy7pFDsoWN",
  "key41": "3vVSZEUAqLDzQ6nMM1WkfoUwH4qvrPToiCTEF47K541X9UZaNz5h7mZoUFD6WxuYW5CUFZsGQ4b82NqN8xdFBiS",
  "key42": "2zCnUfU98xddj6F1xmaJZLjgKVeKPEMGk62bzVNmFwCD4vngQPpPSGJW8GdPBVP1JJBdRWsgTLT3Rno96NXDy3Bx",
  "key43": "2SowpmE4cTe5rw1mRzAzEyt2w4hWcsfdN7eFY8YpVgFKNUCafxEwR5JN3xDbyfRs1JHJy5UVEpg4NavqzZ9rkhUP"
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
