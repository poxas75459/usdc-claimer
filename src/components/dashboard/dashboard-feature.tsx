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
    "2qABNWQ6qGy8cVo1HMLsJHCvNQxHCvsCkaWa5EMogaGtxhRk19AGMgHVWeJD1Yj3apkxgDsUxPdBM22JtJrjDu8q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tYp8siFkUqDgLqYXh7gwt4FpftaQHLQ1nvRuNkUCWBJhZczJN7Qqso3pyDmuFmFm2h3xBfpfMTsfovdUPezQfQ4",
  "key1": "5owUzNyvJfvfXtxGzksi4muwg7KnhTZPi3BVxexRekE6ecS2iqP8c6VW9k1UkCzD8MKYtwDUuw8xFNXGHJewKunP",
  "key2": "3u9EEa7XJjpEYtm5WyCjKK192uztTNCFnUw9EbrH5XGydcVBBoifWqXnrSz9duoGmL66aVY5uQvtahoEeGCWo9YW",
  "key3": "ZnSwWtG7yL5XtDbxoRbHLvhMGj7NcM3YGvXKovUmB9oFXG5ev7C1oHtpnH76TYpx7AUuCmroVbX5SpQrh81oaDr",
  "key4": "3RqW8R2n1efiXoKD8rvrtciUvFsPhEbQDXvX97M1f9nmjZFZhovh26TWqBKmcadwWTivMt2Y1FAh4xR7eU6641BX",
  "key5": "38aasg3Jjam7K6d8PAWYorUmMBcdCWdxYh3LJNgAqYmJfeoTCbxsV9VenHgk7uWStxcq3E8pg2E1WDHDB769P3Au",
  "key6": "2z3zKWgZ5NQ9LXLh5y3oiP4XZvZK3zUP5hTu7Zs8tsJj82cX4Lk7LgGNeKJKLo6yassWxrbyR8xyCe6osVRP2ABC",
  "key7": "43jDB8KeUi3yWW4uYu5g56JGW12zfoAaLv59SiR1TQunRJajTH6e6C66pouVbj8pTddEfpnCP4qufaQUvMfwUJUE",
  "key8": "5dq2EdPmabtpVTrF2uktZZwzjEsGCY3A52u2SfX7yuxCidML493km2M2jRPBbF75PUDxKqNkseRT4hUNxM1bDxy6",
  "key9": "3jBS7ZGtV9vN5TurkGFC9fuZrXBkejMcGumfQTjCBbZeDHQbUMbV1TxLvydug6gSXP64UDjxEb8nBfFgXejwwCzv",
  "key10": "4aohRCrxaDFDTFNkWtnwdfu18avQwuobzAJrzpi4UdEUrVwdawxk3N2QSfMMSb6oJZc1nELwFufiGENYjAHfNYGM",
  "key11": "5awJp3XB7tUHKJqe17ZzJopGEoU28iGVinRtbFo632BeMApSJdY7WBCnnZNMchHn2kqcQt89XFLZ7rDo9sc1GpWX",
  "key12": "1UkzEwJVoHG1aVEPkiwn4h9jC8yS9ntM4V28Dqr5XEFXPE68Kdj7eM3TBeGLVLVsHartrtYf6L2GLSyTi1HnHUv",
  "key13": "4DCzC92yW4syFw3RUf1rppDZyi5YQcweTS1UVTiXGGAfjkYzLNj7cpvaiEcS3e6d9ngcgLCzpAFYEVhTwHy4hTTL",
  "key14": "2UyckeAyFhpiCD6nrfQKkMHSnCDtxw7XDfvYjtGK5JdH42BkNT52fLevjWMSPe3LbqVposhRY4ufsTbNizKoq6oN",
  "key15": "5gPSa4QaFBPLVnow7KiH7EP8uWd8GGK3U4YD5UzpL4jbH52cdLu9C7J92eAe1uHga43JrRZ9WhSEUy13CsiPFmxj",
  "key16": "43iKYpUhK3APuuPN45r6FhqU52rxwJHm7L5PLPTBZn9LKw3RcXb8NdZ1ev7BUaDCHtUHbpSgSxLqm14jzH665Y7N",
  "key17": "334tMrSME5uRgciWEKahEfeD6wo4VLDY9kW3bdFzckwWRSkCBuQgdNwVrLB4H67LYCcfu8XiaMgFbAVrUxUcq2Ts",
  "key18": "4j7cV7WP17B5pcy4WYRi8sR6d8qwwktk9WbG46gjgDSRjAaB6oirSo3zDhARfh2i6j73uxTZj9PJwQf5L5Qvivdn",
  "key19": "HxZoQXs2XN5RamiTXcJarLCcRWQLQcrCcHCzn8Uh5Wytki2bxdQeNLgctue1of53EUnWLXTyXNBkkjszqrYESoz",
  "key20": "5Gp9mz2UPq3R7v7KhwkfhE7bJjsZK1UrrXwU8gimHcSGtoZXnJKaNFjoUoLvRHsPwMjBf8aPmYEefQL1tZmvxviG",
  "key21": "4SXsQg3sN9He8KQYv35mWUVmstQZRa3Y6FbLKRps58aSdkLQxmu4WNrQ7HCk3k2UEddQtHVdNasWLwvGFrb5ocuM",
  "key22": "LKQsUNDzU4w2HBgtpyeW12pzZMfvsB48kHQvPduP9SseZLDEYJ5QEfcwYV37UhguyUdS3HEqbJSvDNSSJ1Y9uxP",
  "key23": "4xWBmJWxJHcqFNg4BcfUDDUK3sFUinJvsRkta3PpynsAnJVhVu1Z92cMdt1qGNHcvAFZo3BvPNxiFGjuhGcqYWpp",
  "key24": "3bRdz9TX8wknMiC1GiDhyB4kyq3pnuV6cZLbW942EANnD4KasPxqjCUeHhY8VTmWPDDX6pXpJStHFNhKse4D47EA",
  "key25": "41KsHPzdWpTZgzTYeGmsYxeUmrcuD2u7uYWoHA2frNT6kyMUwDDjhMi84muC2i6axLD5gXDDWHhfNFkFhsbM4QiK",
  "key26": "4hNf9hRnANShmSBiXSyk3XcQimAzPeynhMYxK2ArMaBZE6qBeWAZPLk3wbg6yHnL1YCbabCSH7wWDwf5t2bRVvhb",
  "key27": "34Wz7Rhh7TYK37ECm4ZjwPq5SFzgLv6syWWmqiG2LRkFU2GfTw9nMjzQyHZxxgPtcPiixgcA6n7QBt7mv2cnhbKm",
  "key28": "12A1YhDB19KohUqS9AvNUZz9NppiysF8ReptVDCJRmzqAG48yjfsY3Xy6ey1zArqWyA9UqMvdMyvNVz58Gj7N1SB",
  "key29": "3UxUjQFcS8jkXE5kztmmFAghGzTZxKezbADHAcAxYwd6QsHaFZtaLCKLeJwYkpgTsBZAR6SmeGRurgvRghWnXpN",
  "key30": "34cd1pXfPjNTqdoWboLymWDx9HPKMhiC2HLLdVw5wXRP5ucjYfbZ6XHhwZ22suubMYcpVMBKbF1JN7SMo34az2RY",
  "key31": "3BhNrQCMUKN3J7yKD18z7P2pWtgCB1mfcH8nGKHDu4ZPcHHTz4YJYfbrQ8761Ugksf8fswvL7SXXSPPACKhcAdNY",
  "key32": "k9UNawRHcaEtCXnAJUUxqpdrTLS7s3XiSRYLkJD86Z4P42ToS9KYNiAYe8rMAUmmmvB3cfZnkjuw6mAVsrP1MSw",
  "key33": "2W7izjeMvyaTBk9hSQz2HCmw5cVsJcjz5t6Paww249bTkmS6XH6zCuBZwK8p2qaZHL95sbZgb4wxHbv9wYC3vJDi",
  "key34": "3DCzJqymgpvqqJpiCnu4DgNhyLkDJ7dnqzRQ68ePXAe23zYmyUyMCRSLPeyb6RorvKP1effC8PJJQBCZvSnY8wLF"
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
