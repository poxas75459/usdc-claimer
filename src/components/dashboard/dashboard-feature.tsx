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
    "2PqwwpkuJu6Vdnb71qnwxvQiuw5wDkAgxNFCrDuLsyeiKje5H5LKmKmMP6kcypYLYHLTTUSKPAKekmvjm4xfEgST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zH5nUkxJYKFmUpTFUogpfYzQEZhfUcu35UB9JmdfFzK4Y49akfYFnwqZ2MruJBwCJ4mkCKydd4WAaoRtLVckV9V",
  "key1": "4NFXDhcN8mm9bMqi74fgDqCBXWT9dTkoQpyCQbRUZPNMWuxkHFbYEP35mEkQoUyEHGyyvigHUronbRyPqWv6YQhW",
  "key2": "2FwzeroDcCCzJAaNdAwnpNKFrvnTkDYM3hZt8jEvrCh4BjvPXWeobEF9Nm4hBAEbCJ993ubwYc2gsoPWjMDPUqEC",
  "key3": "8dY5hZPhkdVSWb5JXMcD5Bvayav3KCGXT7An9drs2REYzkojGHEVAgpiQBbYvRPaksSoxtSBm5B6czd5niN8gNy",
  "key4": "4W2wuaovYu83YgsYbPUr5XrnxdP3ty4S4vYGQKVUfZcDeBS79s4iZPUAtTNiCSe1pYef59214nL1J9C1hMz5kVGr",
  "key5": "2kPeFz4thwP27JMG6ZsD2gDNSBj6mi8K7HNCUsRsB6Wb5f4qPNvZayvvsZW1kvHoVdNM8LrKZEcuXYRngkh3CEqa",
  "key6": "4kQgnUFnpxWTRkusBMm7dBmZ4JN1Pa7jDPqJy3vTiQbA4bNJbF6R3vgJDJUfH6fPt6PSf4ttsxdE13EvHH7tssif",
  "key7": "3niXhb4xsECXJMpK5EBbWtTaPAPq2eu43jExBzfS62KdyVk4NBfWSotD9G3fJBwZwVmXgSmK8XTRNrcs6nZgy9ph",
  "key8": "4PJVHA4BUbAbryQtspf8oU9SHHe7S2kK9nFLSxfBxbKscUSqC54iBq7spZcSL5A2yYiLoESvPgNg9HxxQgxaRBGg",
  "key9": "2mGfAvQ5h6LPSQGUgSaMpJG3BpHLWpQMKL845WFTA5iMebDR5wrSgj3nHcs3c6acdeKXWPXGrJmD9cF5bQ8LZdzu",
  "key10": "2vKSEy59jJ3nGmxvZdnsprCH9YZVNVdNDtNebzbAsGYikQYRAjHk3om3iYxR1FpKZq5wpSBML7r1noRRTUiffY1Q",
  "key11": "2ecn5nibeUpfyCz6KmcF6oToU7kNPG6wZkmfET2JJ3xcknHHvjsmAtYr9z1P971NgB21EH8oER4A8EyWjEayskYe",
  "key12": "4zrqkr7k63YjvJ2uEvVPE3otfnShWWG9ZfQaR3EPG9mHbXUqirGut69SnB9CSuX8m7R6YMFQSMdmUtp33MSHe8fR",
  "key13": "39YQ21e63Yeke35bCeKUHMAmdd1TYwK1nJGEd5HvZjP31MMgvtcqqXKwUMAgytP3jwWDSmDneEiHF8c3K1TeAxFQ",
  "key14": "4EL21mhjK68rLCPpUj6GxDL9gGL45GgkUKo3FyMW3bkttc9jcTHBdRAMZqKM8CTuAidBTCqQedshiYsQhib7agko",
  "key15": "2riHRX795hPBcAnM7vr4ekmziWjTqiaXBk6yE8BHUVYVj7WxD6EhX3meJMw2enVy6itbxGkVZYKXWrLffvLMEQZv",
  "key16": "pQgaeNmEZZqRYG1vKcJKAFXN216HyaaeHG5i1ERnYnjWmMCDDkaFC1JEbs7hbUSWAru9SSvBiCaAajVAnbwtkZ9",
  "key17": "31Hutr1J7BbkQTUZQPvZH1HxAd8GhkKgGfGMdhsqVc7bNb3NPLJJXjvNmKM2bbYMsUA4absKT4Ne9jotERimCLVj",
  "key18": "59KGR1wHpD7cDJeSpj3NvjcRF5LUA4bGkNXTa7syHv8GNWRjAXMm1M1YTyYma5qksacS7GwKM34ZbbxDx6qqpssM",
  "key19": "5E86TCyMDv2DQdnCxRmdWzpM4SKjfLBM3GNhz7virGdFMmpiPd4UND3uMxbRHZDkYg1DPkvWEErsLkJBQ3F5EBjY",
  "key20": "4nohYgeH9SU47H4CHeE2dFMFnvFK2vWUCqAb6G6R5bFC4k8Wow8LLkZWurqLhqDg3Y4Fkc27BVdnx6aLvsrsD57W",
  "key21": "3qU68h6HTv6bQ6194HPBHHb63eTUpG4AvHHZF8xu6nUUPPt5nPnPZYxas9S45xu3XP8CuEqympzToKZhuPWciNso",
  "key22": "4nCxBsuibBYYNXKahMtpkq7ikRcFc4rJ8wmKTBTeBJoDf21Z53ftzNrQvAum7GFA5FiMXvhWjg7RvbfkJPLwpXxt",
  "key23": "hyHpXkNeFKrkiqfFgaZWFyGFnkrFkq26PmocXpDsiudBNLcHeyAGhBkzV7pnsnvW61QtcW6as6eJmuFbyNJvXmh",
  "key24": "5j9EYJ3T7jeM8frMmTB5A3XgRDLU8STBfKQ4bYFqFqX7WHU3SNDN1eyLYrH8BqDgZZ8SvthDZMcUSCc8CJMTdMrF",
  "key25": "5Kq4HxGmbYvyTY2ZZFtsio1gnJszP9pndUrnmqD6JRVhnYbjZKeE4Gf1PgNhWmYSd4FB4Y6nBmEYmXMoAcMVnKMi",
  "key26": "5xuaejFFBSUeYhDKuryXE85VNKbEQQg1PrXfdyuSWggu3XhcNsrGg3o7Pv4kZaURgZ1TNA63PTQx7hGBsgbjm8BJ",
  "key27": "5c7imvo2uFh1AL9HNm9Zkj5tUsxpS7yXFHEzHZAjNc5Pd3iLc7bFaWAC8eppMuGxogidoX3PfLqzbdEybKJSDCLK",
  "key28": "4VL32GBLZZEHk4jYQt8ymbKxz43QNDP87J3LsnS5K6z5fZTkQ66UWYgDyFDFAvzeB1o8AMfuajjyDyeM9hSQAB7v",
  "key29": "25a38tbPLTaYEvGGM4LThXzoFYYQvupXaiFuwk1UVvmuJL8aqhpJsNzR84mibC9GEfr9rfN3eNED9dnyYfWxRR9N",
  "key30": "3qTpxi8yVrzc4MJBH2QiJ2S8Tr6YURpUH4GLrnLX3w4kTnRUru5KEFEzWXioMDANzZQKxwBwT5zS4Q57d77J2DHP",
  "key31": "4VUXMPN882botaY7siHrGfLvn3EzBCQA7sZQ9epio8NcC2KDNX9fv7XXQtS5V88nng8aDtgF4eXgoEZUuz5Vt8DG",
  "key32": "2nVHcAbnQYXpzApYxmF2LgWYwiSZzvGNENSEw9pYXFKcPsReQmee4WCDR6i7mzy2RiiPjDjR68Riq7cSdQxQ4EiK",
  "key33": "5pGHptwPQjDEQGFDbtUM5ckgEFdXgu6SSbuNyniavmRKADbFtAs93FLsZ7cTiLLcXNfF5u65LuJqmUfV6t6qvnhy",
  "key34": "XHLfF8rRaasAn6F3FUCEraAKSuz4Gy9QTHr5hNGCM4621i11Ty7Cj9X7esoQpKduzF6kFivZGRvVSx1GdCxt9n4",
  "key35": "3WMvT3rSTrPpyUFxqBJs2UdTSRvchD3PgJF15TcyJ7SxY1BupFyJvyNCvoBYuA4k4C7tJAFF71CSfFL4UyZGFcyy",
  "key36": "3eUCJMAvzUQ3C7HuTwRGEEYBrAQEGy34pXNoPK1k2EMDNFSjDvn5XtonSwpVTDmm22ngbp7nhhnYcapUx73RqRfo",
  "key37": "5BQNF39M7ABHu4D4Tm1eAb9hUkvDYkuhR2uPNNwpDeGjJ8f91cedTzHsC1wGTX5D4vMzHsvAJRK8sBkQqLBwZSAs",
  "key38": "5iQaGTNBiXapJqeRGoxyhmRBJLNdt9NcRcXxspJKvo3wWqLWVGuQ3YcHwr7SCpxupKLybHjYwp49Ti8E36Pi6BoM",
  "key39": "4bWEENR8FwJvKJPwwWo7NN2wp57pXfepNHMyZ3wGQ1bVEScZpbzX8kHZu1QJiM6emmG49TZbtGsKUSPq3odjgu9T",
  "key40": "42GcM2tfteKNUUB7ddiy2HCrd8x1CE6VYDey5tGQPmtPjD2oYXgxKiHvBbig6KxG6627UeKVvFeSEH5rBYrxak3D",
  "key41": "o2aW5BPPhteaUqWqk18p85vo5ecjrwkdATZHnRbg2AiP6QHkTeSg21aMJPg8FcxhDoinRTrarCave5wT68vAuuy"
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
