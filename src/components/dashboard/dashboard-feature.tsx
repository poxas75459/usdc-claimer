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
    "5LgYnWGX9NmzPwvJYpa1yRr6D2RTSxVgDDK2rvkNALqAHsSd37E2JiHXjGJaYsZGBAo1BbtXRtgZ6Z94xBZUySv9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gg52mSkasRKAef1QKcbkvK4rVxNWFWbyEVHbgpKo5g7HokFdoDiyMrqentY9hGCyMQ84hDtWJE16f4fiVziDDC",
  "key1": "4N4YKbyG8aij3KmJXZEeHMR1B5pK2ArsaqBnmGAXHRq4QSmhVQQ4jBERWqMwAiofJpGCSS8oX16e3aCqrUFtobv3",
  "key2": "aWy6XWwLVf75ds7xt6vsAeEQghbyGiGpdZB5PKQT7fHXr6e7dSrD7J4QJozGa45nt9ownaqiVdhHWzfTkYb9rum",
  "key3": "3uYvRcHFvbWJAwXTmbDWeCsk5WgYfCFEZqoYesnvwDE7yxKVFumi48Woiky4fdoZg2tXMt9x5rFsGopwFQN5LA43",
  "key4": "TQRoRyfEMFTr8saXKzdLQNJh9fVtsSyzFnMDnQFGaVC7hS7TA8PYoFYcfAURxD9bh4gxzCLsUbGZfu79UGdMxjZ",
  "key5": "4GxRwimES1PaBV9NTW7tACRYkk8KSovbqnWKJHSWK7989G9yGxy2xt8xW1GVtYioYqTm6Xd7mW5KusHUBxSYULuw",
  "key6": "3Rk1WwXZWbUNqfxRAoGqdgt9cHoZjx4j5vQGHFdCdKKWKsQXTjJoJVszvpJsoiwKBtemYH8iyFdrCn5XfcZnC8BH",
  "key7": "5GdWdcB3iZ62Qmm6p48ZHFaG3TbNsGh9ucP9cvscSWwPUM2QZwAnCYxPhpXBpuYeL8xL8EdNtAtffQv42Bn2wXTe",
  "key8": "aDyTDYTNjfJiXVk2twegDhCa96tDdw67XJXo9AUZ6UA8F86woV8XgycskHnjt4zQQEa1Mj7Xcc4dWByJ5ssejV2",
  "key9": "5yTCBTnEifUChHkLxey7Xn81dijnsxC2tqEBdvChqf6CxvySnR7GxMjMBGTBjGHvGvFk2rhS2VpVxSYmA67gX2CZ",
  "key10": "3p6Yk8nXtMaveWv8eSriERTAGxce1mEYvkkRmVGeqSUZN455N3AhvyD9ctLR2ZX3XobKBvZrTjcB1x3beH4kv7XV",
  "key11": "36AuT2sZMDjR9wPPubof1uEoZGskJNj9xwJfd8tu2Y8MLjRZe5LWFmZYwS7YgQ7BaAFC6P1UNsaGBrMELGfR5QdF",
  "key12": "32zsygVAN7hoiUvCavQris1bj9dJsTQqjHqcEBMMuWk5j4G3LxFe8tSR5rqQUCjGY3KNoZrs7F7cVWydk9Qp34Ze",
  "key13": "ZKStj9muEP34C7a8zVCyWHB5mTpbFRFtu1BoFsnLNxvPZmZZojBJFHrw3vuvE2rzrKYfab4gnekDsRebiq7wCCZ",
  "key14": "uMpykRVzaYN2eXtWr7gE16zJnpNdfccdVoBKbV6hjPTPnpkU5v6Bf993wYv3JUDMBnRTru68rBP7ntFura3KxaH",
  "key15": "5zrM7xXvWwcx6Q7CrahcwmpjABdUHsQnpEq7KJ813erprhUjws3De2BuovYgPLmj1s7Rm1TVWVE4FXKcg5CEnBX7",
  "key16": "5jawqq3SGF8woKM7h8D4CMDRyq5wPnDVhuMbgsubXaCr7CKpDbSQyeSNvHQGaUDvjKQfvEXXLiAykZ6yiU2Kah6H",
  "key17": "5VA3t8rpn3u1BDEXSu1YDFqNGWgyZYJQMvgFDDRZW1LFyvFNpuTmqxVmY3zamuiyWVpDrFkUsS3k3aC9fcg3xYn",
  "key18": "1o7QLGffgDAhwB18sGDjHJvLnupMTf4CqQWRwXNmDnWSjpjbYkURRc1xtWRo9KbDBhvenG2SuFif6JttTFuzSkS",
  "key19": "2yNpppJLhiKm4tWpMPNWPMW73QtctqRrbQ1j6gdoK5AX5KqaPyWgPXauyxMKyZu8EvickyGs81cazfPtZWTJqNtf",
  "key20": "38gcDpKRTx4UWMHCX9uDtSowcAbTmMkW4J1xMMvonMZSsjVyo7WhXMXFvth8Do6oQvdVfqHhHFn2ZQa4gxxpZezh",
  "key21": "3abrpvJE7Q4C9oYb1kDs5L9wGzewqLzTRDxmegVLPRELpGS3Td5Dt48UV9K64STLzK8PJaDLjYd9p1ay73dtDg1",
  "key22": "W16mBWwSKYWdran7oMmpKAG5VtVSH71fKaV4sPQSqjbZt31WiT86wsqcCnN9ThNVQEGFsDpaiHsqVofNSujbLhk",
  "key23": "4LLVNY2vft2CypttxoGy5BTJVkobkj9j2F6xNFcBqTFYUXHchkv8v9GW8SX1mKN6UvQYeR7Ctbojnj13iZLSXhc9",
  "key24": "3ojRiHfAEXCdjxordB4DNDKHGWZjB945CnffesZ7zSHpqVi1MAq8VtVynUaAwuwSihfTd6nZ7HHwf4JFVd49K1Eg",
  "key25": "2aoEkeXSsr6BvcGMiyDB7xHMoJ46fzEUnuM76AQi34U28QhtXxETnxnYdSKqXaceSuZisNuwLVSDHiYAWS2gtKzj",
  "key26": "2QSUM3KaNvRqK533d1rayRwoXfhJVdy44oVedPkXFHuuhwmPucoDg6nbEsoBqH5iY3gmHgp8URaY7uHHs7Qh3UZ2",
  "key27": "VyktYjfiEnhk8Xm6obMUUSZq914jxgQTaVRVAbfABFE9pJ2EPr3V8kgnp8HFSiLakBJ65NKv5qGRh57oBToi4MZ",
  "key28": "4oi6PrQXYJtjm7uJbvkavrGGZcy3MDnU47fLNfgGHdrbnRBmPxdFHbQ5dPyPcQG4fpBy9YZoT54Eb6ypTFZeazF9",
  "key29": "TQgaCMZF8tUJpDTDAZ2dtkdKiy3qK2uTahjtUE9YfAUAKyPF8pibRVEDa1PJiHdMjPLDHSgfH33H2Tu4isVs75z",
  "key30": "2yF46ZNhEJiWCpL3A53K8z29fy9SobDEegGEyLki2KRD5Wg5gFo9pMmBs5E3fWcR8NcsseqNKoaJSfz4BTGB4e6u",
  "key31": "4pyiCWAkeqFGytbjpvdHa6U5tQ5RBBqjePUrWNfwTsFNndMyQVbpyzTHuS5SkUHXXTKC6XrvZbdhAJCTEWKd6vYv",
  "key32": "2vvKgKWMF31RWLEDsexN9Cgz7YRgjX5uRVirDXGBWBQF6aeePooUdj2YRLzGek7ScqAnRqpSQSKJ5H2rdoHtYKWz",
  "key33": "ND9aUbhCsBSXahp1aGmo6E9FY9vKL135oWSfYrHaHvzCbyJ7y6pRdgDSRZmkvdvESN96itrfTDVU36E6sNt6sr6",
  "key34": "3FQeKUmerTuYQTFEL3K2biGGeEMbZooc3ed2FLDorYxQZ4qo8PQsQrXUGcxcntGWpkUA1rVSKLKGyhTjwE8nz8AE",
  "key35": "4aEGzL3s7TR3NbtukDU78pAm8DcwKserqe8zgsh473qiC3y3AtSkgaqU5VsGiifVPQx1QFvuK9qnRux5d6tqhRkX",
  "key36": "3UMa83fcXU5k5uh5gefXBy5GYWHu1saArV6WTYmieT6qzso5r7RZPKYQYzLhV1y6yXto8VqX62uCqWu3FFbwkDb6",
  "key37": "gdcQBwqVeeGkdo4jxTPywsSVPYmo3xpkDDSQQZKdyQvvUyB3dr3jZUgqyDxxL7W6oaDmgdZ8Qoc9Z8Cj5vGMytW",
  "key38": "5jDKMV1Ad8ucPHxxbWCwLsLuZoQ3TuSpGbmUrTTbLy76Ry5hMS731zJmeMBcYNtpvbaK7aA5Q2AKKFdn3zrTU8zh",
  "key39": "2AgX873pKLEUaXmxMDJ6Rz9hKBaWmZfPxcWytPY6x3JtCjrCcP73HTZSKVW28mrRFZqhvsvn8b6oZ6jYfZqZpWCs",
  "key40": "5Tp7fa3cRTJqFEqXCWdERjin63KbsKd3XPPkVNSR12uTJJLpf5mptyuNkc66DVTRKPA4ebVSfVa6cW553xayCdZw"
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
