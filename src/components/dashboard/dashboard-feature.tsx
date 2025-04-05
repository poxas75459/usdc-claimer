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
    "5NC3q1Ni8FMPkKWb5c9BRBKj9MGJ6tV3cNXBf7d9UjDG5MHSRur422VYMiU4jdDnsCrdTwzXnzuppcBQV9C8D8G6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N2pp51pmRCCrF6qbvvUcryzeu2QatyfCi1aBaATJBPRq7UsKtZcPDsPK2n7RXZDcNcFWPLgi7ChsjgRMtvu3zkA",
  "key1": "3dqN1NuuGxxoePhoJEy5aJSHHnGWXek4d9nUXvdKRr6zKRSGphmkXCjCjHBnsuzTKsYLxCmvJ5UzcsUXNQNiMirM",
  "key2": "5Mc8ZEyTuSEGizDBurGVfJE8z31Xz2Ua3kvBr8PgFXndPXEURS4hfxKttYT8BzGZ4iwBUrCaai77r23Z9EtyhSFB",
  "key3": "4ceWK5wWRUryEU6TxuQ4SeapgK8T8X6N6wNZKD3WY7VSo1o92hcU2FLdG2Rhfygdav6MeGdbfvsURbULKECmb9mj",
  "key4": "5xpZTF5rDztHh83ZRkWn16f9J3roRBT2usSqvmYXTELhvSMRdjfpTRTsM65P3KpEQ7U883bkhNLmyVbRAiHbHmWJ",
  "key5": "4LAJzdPv2FRa6X91TRpuUcJPTDoCcujJKzhsEWKtZNzPNM9pPkQTKZWN5gMd1GJcknPMLeb7jkmgx7bqibf6fj22",
  "key6": "2yMnwzfjumrRFujYg5hYpsPrCmMLwJGKazkLkhXFzv3Py7iZAXHGWfoMFoNnQKiFzWDaT7NxXvHU8fbtCVg8cLLU",
  "key7": "bcigQQHX3D4PP3oaHXH781yxPVD5QtDJNLvve6zihBGQwWYptcFKZmKhhVSptBh3k8NERmwduudHS8enUEFdXkj",
  "key8": "4z1HmU6H2wQx37GdBd8fHqoGu9oVL2vHJNQgJBTVG1VAHejRUEJbfjwpSZTRUsVrb1bi4xqspWTbfCz7g6MR2UHY",
  "key9": "31vPCd4Jpo6Tgos3ugtUEgiRo51qsVAEowLxBw9cwRazjBpm7gqcMfWZRQzhLMnJUgwEL66w6i1Bcv9zjMNnz8qW",
  "key10": "bh3T3NqzQVJF22nKaRbC8JZq7LmEJxTh7nuysByBTNyDXHkjZizpCPSkzpsLWiuZstt6iBoRqjJvAx9qQA54ft7",
  "key11": "4A5BdiEXvdDNnu9zm2qwdQuNz489QZxrFNFMjkpmPgFFS6p5SnTGrbkdX6N5ADBZ1jpvicybv7dKZNfePknsBXL8",
  "key12": "41DafAK2LzXhmDo2351P8EioCdqpuxsgTGhpox4c1uVbe94GwWLc242RNsfKa5H5GgGkEmjVZTSMewSNPMtvqmQE",
  "key13": "3FbAhwgFdcZqFcstNR8Vc61E2W9YwkNBKZDjnEP3gqanUnw2mzMdsG15tb9uc9sMPMQ3VffiSz7aVXXoqfaLbZLV",
  "key14": "5bz9riSCTSvFTjnUqG17MWMzEAaWBtJj5iScEqGZDPsMxNBVEyEv97eLQGomZ5vec4ednSAzHeuUmYvtJ7SsbxTm",
  "key15": "33rv3AaTfbTwHf2KkkZJom4QMuNKUS6HiwPUfu3apgiDuR8PMBDVkaEJYJE5vrvjCNJh5Z8Bmg81yWrG4Skt1K1i",
  "key16": "3NrW5qKQ2enrkfyPkkTnWpC59fhVEv5MsCZttD32GkWMm6HN87xun1GtVoF6criRAVJZRR68D1PvrJG5vpQEEzrv",
  "key17": "xKe64aUAZsBd857VEFxp7JUCnr2LjrccUjNGAExiKLbtuoqFMabEtYgFgYhoYijvn2zvPfXupbJHeEbXZiABqFN",
  "key18": "57RCcw8FEVhd6vFvvdMkuvZSJMTQc4qU7jPjiTM5XuLrBsvXHj4RWfC2zikaEH9khCKpjh96621fvJQBwQZwNBUd",
  "key19": "34NZUMTVxZZaCnhTQ9gs8SGgDpyTEyN4KPZgFJBSEzDjDPS66kz24zCZmtGrNk4eNiq8QwSo97gDh8V6LrYaLj7B",
  "key20": "3kP9rqA6BDW3WsrmVdBRKMdwwwaK8a8dez6iCyr7vps2zWac5iF5oCBazpPxeVuZZr4h6iQHBWYb1sUESqWg8UZi",
  "key21": "35Wz2TxsWd8jevJBNC2ScwnyyZyKegKkv6rXwU481EB7N2w3FN7dpX8EXwZLoKLFyu6G7UFZr4LnUeoNUwURfXLT",
  "key22": "4RMYCE9ogyNtvhGEVshWhuBTSnpLajF7HZGUJ7aHKdSN9FtKchjvcsDjA395bFnzVkoUHC1srdrgE6PyNpqnyGZQ",
  "key23": "3JPyy5j8dmkKvyj7WzWfw27fqR69nyag3D2UAqP7y63jNT8tc7bdA4DXsDvT5Nrv85zdmbCqEFrrA7S2APFHibDD",
  "key24": "5x839iDTP8rYV4o5GKSbwdAVYxQKReUVCQybRBfGo3ryr4Pn2MpdPxhsES8epcRWEKjeDiCigvxakvMsZLNmLbqj",
  "key25": "4we1aw9cjQ7spKjQbMpWsyEWSSp2hxMuCXQLq7xbiNjyQkscT2BgdiCTUBWYWkR9CvxjfpR8vNxwR9VfjGEpZ6c1",
  "key26": "3mPZW537ZaV1vUVvEdw4s58WZQ8zMmXXrigPUbsEFKxRFp4eaAaxzfYuY3HyT1DBYojcpNW2sEMjFpoqWPJghUf7",
  "key27": "cPvyx6bQuihv5sDdtJQ13rgr9A3adDKyaJuxuVoL1xKNH3u1N9VHnArBcjoSyk5ZQtFadHBi3k8q4vNyNs1ikTy",
  "key28": "MSsgHXgKt3knVbnrKK3NPgK5K6htAgqvkSzzQPCWWC1vJGexNrB453t115B6TH4j8baQn3YQ9AXe2yPF6W5TNYC",
  "key29": "24Nap9TFpa3yjur2GKkPzPtGM9WcScBjkuuDbhgFauP6BHDxiAmsE7zC2hLynR1e48KY7TYxMzS9Fq1PTV3A94Da",
  "key30": "4szMvm21w7RmGVsgUvt6kLB1AFVctFKebHBPVyXitKN8fDGQj5wvnDi6FoUt92bvRxGYHs5pqxrvAVBy3rZiX8Tf",
  "key31": "2GySFtSNK1dkbGiRWUZce1zPhKnESScJp5KNtprm67zkQxHFFPKRQEEhu3uYEA9fVKsZxXD71MTjNkaLKttbBj2",
  "key32": "3Dm7TaR3ZTxDAjoddSudUdNtQogUWkU6C7A9R3uhHpQAVh3Z2j5k67wTWEvh3zhxifKfdXviFxLcTVPQFZtu3xFu",
  "key33": "2NpS23i8w5a3eYi5NeSdV3tE4xGQDD9j264aWnfkcjdHT9dWKPWgpfLamkaCr8RSd8E9aoFF1PPANV5GRw8Er5Qc",
  "key34": "4yi7Hm9AmnALu1uhVKwE6rJG5KcsAFo4Aj22iHAF9v1vUSBMHSD2tU82JD5aTLVB8EFci3eQB2yWfjpTVY95X7eE",
  "key35": "4FtP7i1wfXmC1w9QR2AgyvYtukjkHaHpMN1r6c2XVSKEMUHomfnyYXviapvVQHVD3hSUhBHohoHV4NzViX4F7gms",
  "key36": "4gbUwopMAVkpHRtHjiLXbssMaApw4v2UmoWRLtoui2zcEf1mKtkS6gwZ4MaKmNPixAoGm5NKokY9p7UdFzyNuA9Q",
  "key37": "uMKsZk7pvj3gbDYKp1WHwmb8JYqBWn28453EUXPWEzd1uKgqj1oQmPHWfca7EiT12F8YT7j9NtkZVaTS8CcaEGB",
  "key38": "pn2NWzz28juowoheJQHUx4M715wpv1Yed5sxqEpv62fScCzKQjiZU34kcJy7zBgKybpv7Th6hyNVr5e913hDm8n",
  "key39": "45eyDpNcvArE9sEBtBw5ddN3ZDHsUQzHxgpxVBsrNros7gd6JeH6hkTHPUAqwcjajripvqECGjd5oQLp1t4U23P3",
  "key40": "3uEUPTf5LFjmuz6jdXbLA62pw43WWhS8Y34rHvGRLNCZM3XpqrgoWLBLf1UheNHr58uYX46VgNgEHZ4b5urZJr65",
  "key41": "28PSGykeuq647LknJNZFutWjgKBKU3zKknuqXuQCvq5Ka7m2KiGeq6mLWGx4rFEePPXSLc9vwbsSLYBhsa4LeNtn",
  "key42": "2WGW6jc8C6vX7rWz5rv9kPf5xt1mLyRJLcznDe5vzY4FRwJ94kGpFyaviSDJ3QxqsJ9KbAKcYN666bSknaZjgjhi",
  "key43": "38oXX7NqBCCK94s7YXak6PQDUcsj9cJQdpBjSJphHfrcpCPhHptYYYjscu2V1k2s7kieesPvHwcyvUHfaPboUqVJ",
  "key44": "P3x7CZC4pUNX8Ui7xnLakXk4ktyLEXLE4rhwA47ZdQshvaMeZ7RBYC2b5rj9iShwGZ4KGjf5inkvwmQn4ziJpK1",
  "key45": "5n3pgxEj49QLtS5pWF9QrVqSepCBDVipUU4SeaDNFvCgoDfjzudTQURSmDxUi1KoU7QGQBUVD3rQNh7uiChNzkgc",
  "key46": "SyenfZTsDCBCNMyNJFLgqAtECQxMnUNdvUCxd9wFDZhGkKZSxTGoRBANSUirC93UFTfqVCaXEhCR2ejDTadcjGX",
  "key47": "2Dq2WfehCMRiezqp9spMoUbPzYpdzn4fyYL9aMLXxC4CQUEExHYpa7N8YuG6rFZUidVmdCasSKxtWonNCMqEZjVJ"
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
