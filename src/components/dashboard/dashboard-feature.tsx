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
    "ek7py6PQJ2AsGUSURwEZgzdrvjsRhZiVnraDCoVR66Hw2PvvydHixeYcQdtGvoTUMquBVnZgyxqTdZGzd2wZspG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QTbL7HvPgff8hbMQk4SuoD3cSVdtQnP8wETAJKjJah3HwZgbxESgHQCnzmZMQkjfVMrwEFuynayVri24CbECHrn",
  "key1": "27DPRnReUzUn4ECRrbvHdPwW5aC5TfhFbhqPKXZsMzDdtMSLzpr5oWSLAPNfPP9DmbwbdjofN6vck2ZXeuAJjZoZ",
  "key2": "4xbUCo42irn5tWeFZh4S34iuEK3WpUnug15BnmkrpemdnshHBnj7xkZqdRb917t8yQ2uRNvWoAtpQeghn9pR91HS",
  "key3": "56Z65hTqrjZcL3qvuHtuoX2qiz3P5zw44tMDQk8QKDv26rSV9SF27Q4zn95et1m4binz7gubdvuowjkgpU3vsC1k",
  "key4": "3qtfRbp3hwme82NyyvXaJTwf7n7dGqrvqqkAPuTgFPMUuqseXSGh7X3h8pT5u9gB4TxXs4jD1a41ae7RpXhRJgvd",
  "key5": "62GrR8NWAdrAUByGqG3KhqCsUY4FVVvjxesdv9MU7eUHdgkkcNwaWpQiSGY8iGoGqXeq4RHQY8BGAp5sFcEGCT58",
  "key6": "2v5p1wRMSsieyaPdi2DDH8FB2kq7vJc7tL5TZW7biBnBc69VBB9qwskMPg3W2DnV8wgLBqQYHu4GP9SkycsA3kG5",
  "key7": "3MhsRBT9j6utXnotDHpcHThym4Zovv4fGERm6sMQbrtgPXexxVfvW3yQAU1YQAW8EJhwXH2FWmJbzmCXXNmR8Ajg",
  "key8": "3NgyWwY5z8ZYEgSewWuLnpFCrJ7FyVziKeahdPXV47WTyakPn8dpTfUiA3nRhY8h1kxk4jJfFjFZfiibHm3xebr8",
  "key9": "5MDRvcaCCMFDfDpDXKZN1viF8126fbfpA1vmDnrZyMKcjsowJy3DEGaENZN8NP3W1YyxMUhrSYWXMGujBKG5b6zG",
  "key10": "5NwLXWWg9tBaWNVKiCWcxyLn8tazLi31mJCNP4QCTWKuVohPB2aMe6zWhZ3ZxSEpPrn4SuCq7g2hErJFBa1TUJSn",
  "key11": "46sh2rLWNQ19sAoesQK5wh9ADfKuKV7jrRRQUoEyeaLrcRvbDhjk9YA5GGMeL7VbcLPu2NwqPqvG8sWNBRttzLCJ",
  "key12": "m4stzwwix56gG7MBxDswWB5XBGbo7nDJDWipmcz2n1nNL53KDRBbGyrDEYibt9ur2jddzisoCeFr4vnLWKAhZAi",
  "key13": "2jQqTpPknS7RbRpae5BECvcJzKsQ4CGExkdkRc6zmhBQ8V2Kju8La7SRgfQDmhvi9EbT8yJ9c5XZc883DeV8w4FA",
  "key14": "5sbSMQyfwJSSk4KR81xq9sxb3uhxnsoMd4H6cqKd5ZovGztpro78ESxC2eRoDsgstEXC9AhCcfXpGn1kkNmna8Df",
  "key15": "3RJ2vZ4Wv81GN5akDzpkb1CtG9NVNedrm5KRLJJKL3xQ4nNf82MMF4KZAnttyDX6icHxVLX93qfvRiLQZmvhTHvk",
  "key16": "5NQmjrkbAEqEP1fV5Utmpy1SK8GUXFkkXfnKzY8BT1zB6LjgJ5VGLC3Jz3keSXdKg2BrSodyPoLZGpmLZ7ieAn4S",
  "key17": "3k8HSqjTd6SRyVo2GsigWa734r6dmRhixNJ6dqCsfKnopEnPbbku5XF4oC2ftufAVvpBUdmWn8Q6WRmoTCTB4fGi",
  "key18": "3iRFG4RSJFVbKhVnA1yyyCfCK25nwhmMbPrGDgoXzKA8RPoqfwR8LEdLgQvw5QAmbMs4ZppupqGASCCa1Um9jAcH",
  "key19": "2XLk3aqn5FzjpWz6n7WEmGv7zHAXMfGvw9ZZmCcVDBCHBtY4QuiCNXThUJp8WEoEWunx7NBxp5qu2UagiVWHRCvo",
  "key20": "3weFVeyW6KZaPBvNkKMSx1CZVvAFusLonjzZJyufSAXpqmMJBX2sEBQmfUXQy7GcNAeCRbTPzmpXFoCuo5h3eQVb",
  "key21": "5uCHR4sNFrpBV6hz6kCj1pJzqXGX7pT4EEnxqzkXF2BpStFZf8UAvLQeqNXSv8L5MpL4KkU9KGVm3iXuhbukzK8L",
  "key22": "5ppRA9XKdZ5P2pMXEHNLDCpmxRuFmAGnnfsoqDeqhXm5hP8vAAzzkPZicpJbaqcnsL5CTXzLbpJxfRubRufoZHxK",
  "key23": "3exen3f5NiKvRgUNMqJCDf1kqaezEZoQbmef5a5vQ7J7Jnr8cdpGWcJHmcngpwoKkiHeKMhtFgsmkWiayeomo69P",
  "key24": "5ccZTB4X6L9ggUJkchVpUZ3R8u36QkyWUs2e8rLkVUmF35aw3Vdy9mNYF2oytWauMQVvJfqJf84SHG2ZAdZ86SUz",
  "key25": "UXF4eeRm74W8kgFiY8KHWmTZ2N5g8or1mZXX9ELEZRAjsZ1JABqX795Cw1K1BNYW9JwfX1DAePMMGsRWGYH2nxT",
  "key26": "N4guuh2CdbKFbH2eakn5ALrUxHAxx49adPRXCjT2mdoBqXSbc5WsYzrJ5txYyC6VTDjLRRNr4iqh3vupWkpjC8y",
  "key27": "4bXt6eDSLiRwoDwtXEgVNjs6AdSvz7YasZgQbCg1WqG4wV9hoCcfi1Zg1iY6RvXE1LhXuBJNZeURTJJDfEZL9s9z",
  "key28": "4Gyn9kZZ6QHHrHz97qvP7x8qjzttjVKLfkiucwG3Gupun33aEZUSiJt91VpZJiSAEq3xm5cacgD9aC5g4x21TKiq",
  "key29": "4DjmikMYKXpz4nq4iPwSLMYXxW7oZhdwXwjerhTMdUprdMoVxyUBn87QL7XmVEEBFbaX99J2F5cSDXFTLteTjyoP",
  "key30": "3gnCZGA2uuMxPs3qMedusb8rfeSZHn1xLCZ6jzkyGAVsVhjnZhxYNJRJVCTMVDRzZeaAL1hmQTa2ACMGXfVJoBLC",
  "key31": "5qoHCsWGHHtBKuRtNMWGMG7Jo9ggbzFggmvXgP646bq33LwKd5BwcjnHwx4JZ9LK1LBS9mJftheqmvoDXDJKNX6k",
  "key32": "64e7EE99QDQFQQbxUTYeQbZ3A4AFN2Q5ga1D2QsxevjRYwYYgG84hLCtJ9W1mVY6WEoH7MWiFGQUmsKyFSukBj2W",
  "key33": "2vUfgfbPJsA8wRRo6ffGuYRuQZzUN91cKoiajftZfYdPSasadeMZaFGdjpVevMnqCZ4Bgi6ACdMUxdBNB7tDztdm",
  "key34": "rSieYH685FPoybR8Xp8B77uWhxADu3nWfDvzqK1kCnnrjZ1wyCKPUpbDJmqQLhYRwQopKYYXSLJnB82gxbP9GXS",
  "key35": "41EgX6uAdfcydvEhXrAhKH2aqMVXJTD1TujEzsZndXuNxdURhReFDxz37C4Fiq5iTzCefKeph8B3Sm359DP3AZwj",
  "key36": "u54gWXAWA2KmGpNWHnf7FMDoeLSDVARt1Ky78iUMVGrgi4H154hz4XwwLBSYxyMcaGxA2AmxUrZaZtvsSbjWgvC",
  "key37": "52pVXdYrmWpkHqZu9m8jKnHvXQXqBVYTNtoqdnzjqKH6Jq6cp529huLXwupdne5q527m22AweJfK23DDnR3ewprB",
  "key38": "3Ux6CmKAT2KtZQqjhEA1Ha3oFcdwrdqpsqTKEKaVZRQ6h1FFumwdP59JNEumTXZjK89FA3MSRZkeJRNDCV6zGkbu",
  "key39": "4rvsgWpRfyZxHWNTP4v8ysLf1tVu1TU2mFNCkws7uz7Nnp6bcF9c2GXSUzHGciexX7bWZRJhH71qniGcMtPP245D",
  "key40": "5k5J16nZYnvK2jrTn1k7VKFP2GfeSGuxgtrhki7BpbhARob7rcCr5uc8jRpdzABJ83PAkRewT4tGhaDLp1UuK9sB",
  "key41": "5NDoW7S7f9RYvQnJsa9vkCggvqfF2ot9HBfCAdcEdmbUwMmX7pmoXMHyxwc4mkedw7TyE2QTqZJXymcKqEf5EhHA"
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
