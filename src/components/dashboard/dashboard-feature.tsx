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
    "3UCmwD4AoyD3tUFrQTg8YfaFaq96e9KuMNftTaPxTGF3bbUVe7zCjfrsZkyqegDNXb9QrDXr4tfKmSnDqsBXML79"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rMm3e7XKNRLhT54ubRwd4nDP7yY996Ty31CNxfkj4spQpji15ZBHtCHUnQWa9P1P1uyAaTLjHRNtP3xHFUHJh3f",
  "key1": "sPfKYhVtfzfKuW4bnbvc3s9Pj1SJhtWDBAGaf1LAwnZZ79c2CpZiRzJB1SK5eDAcrbU769oEkyWRifuT85DigKx",
  "key2": "WDizQ2pz3bbTuSo6m8LCBzg42HBfeyrDr6B3riZXESUaL5As282qKhDXAFXpVRCZdVeVKjuSjSRzXRuXWRmVhnY",
  "key3": "2qkXi5JyeKSzdQugfbUne2TukdgCVWRfKBbzrUG5hYtuQj2p75zPsVFx9sHFBVLGndJG13rwp7u2r7i6gjX1ib8V",
  "key4": "2DLDFcDSopB22WMj1gbdYmsr4puouBXPUp4yuDYSd9JRz3fAkoHqPcLbGmpiEbYsveRCzGsUDGbA2YFxAYYSrJbw",
  "key5": "283LkYXugW95v5Wo6u8nM7xvfojiqKLWrN4ZiSTikVxHK7JnZQZuYgMBkitBhatynbNb7xCk7yAcCdcVPYEQ2Vjm",
  "key6": "2zweV1gwrZi89YwabVJZs4hdVX1E1hrmQvLthWSj3nJBUh77cza2ujRFCAResbqQ74RdXsXWoJAe8SGvHeLWtLWi",
  "key7": "2iQ5B3U73Q6PpfcW9g2VLLvp7M1EDwPuHc1FivAQgSiymyNbCwtm2F8pq9atxWiscUTo1vPLPzsoiEXLG7S4hVUJ",
  "key8": "2AUeGK617H1qVD7VehZYsoJfSpFKF2nZzJc8iDEz2kHhq1DXPtyDYyeiiu3GeCsjRDAy6VAJMEwL3hYNStksHCN5",
  "key9": "E6TSo6qxc9iLjYhaW9pNxkCtDASM7BdBYS7BkLS3qJ19ySGYKz7eaW9cMZyQrxYafdRCQ5F8a3EwvtRPyA1sBg1",
  "key10": "5gSkeNM3bmvPz6RUrgewoXV8p39nss2HbyTvVXnJUcDz8vc98H9j97UapzDw7Rzgrd42NxmhtH7YjsxHGyQ6Ghiv",
  "key11": "4MobwAY5r8dYRqWJavTsb93UbsirueeGprWmVspgHQJ4W6dPeeTvephp6LqAgge5t34N7wHKqThtfsVk4zdB84Q6",
  "key12": "2cMgWiatQ6zAGSGoDKNUr64PjTZehfNsTBLYnLeAcHU9xZQPSpkMUaCphNqN3o2zgS9BYrV9QCWYtb7B8tjYG1N1",
  "key13": "oKsWs6dvzXYnSf87iU4oLJW9vF63WCdq5JhDsRqefUmcvLi8asWCz1haAsyjVshCd4cKxfx79wcjAgukvmDQ5DL",
  "key14": "2UicYxWJQwHpNa8B4p7cAPKHEKvbXTSpTbFVwBfscKZVf4Lb7GY9X6HAkzgaW5C2TB28ipiJtfG2kquSRURpEUn",
  "key15": "3meYv7exUKd7RxCHLzKawMRqhxBnZFTND8pfC1HzY8EZH9g4vW6mUBYsYXGYPfe6EVh191oudeEpwoJnGbSjDdZa",
  "key16": "2hpoRJ5d1YPf5cNDQksz1Ej11x6F8gxUfCNimY62K2EFVHzrDw4cbSq3kv249zc26SL9WcqjfkHok7aBaKS2joBU",
  "key17": "3RbAAtR8kpCYt4GdH2Q2JNQKpGbazaHs5gpJJqSnZJRbaxU51XtNjDa7wxxLzkTDNEFi8k49c7LDpna8cje4ueNc",
  "key18": "3TtGQQskAyz1Y2cYHYAvZpde4ih3CcwjSegpCn17eUSSwUnidz9e4XNmAXNi3dHHQcWJpVnuZmXKPrmJnQAipzQM",
  "key19": "2aS4e5U6gc8iTFchmvPjF4j1CqGvxAVfqu5Bc3fC7KHAy6gdy6UPUwp2yhK2FxvkiuCo74epsXywSS6j42d8J4zT",
  "key20": "4KzsChsogSJw9wvF8fM9BKP2xcKtU92TaMDZqJFcCTDsPAfAZ4c5QqHk7eWemr91epjqEZTRByoXuNkGeQv7ZLaZ",
  "key21": "55v5ygK75fta9kVi8Qs5U3YebgmmQRmiiuG6RXUrMheFYFw2hZtNqY9iKLYbfsrNprS5BFhZLNEqjADh5GMrpUxo",
  "key22": "GSsNWa3BVnATKsA53dVcmgJmJUHVGsfTtwvRdrRQkK72UNogJMWaRL7ntickiFwNUWoBGsiYGXApaZZjL3kzCtD",
  "key23": "pgLgVGCcY5HPpCdpSYzcAyCCxr3QHNHQdJPDKj6styCZiBmtZztztKoUdqqs5oCbsLaHU8PXQEKrAKUPDDaTAwd",
  "key24": "26rtvKFuJws5s6fh7VsLbhFeTX9jqHPpyeQfkh8PMfwEE8RjEXnvxhibC8ZDX8pTZWRYW3KuDAeMNyAh16rDMWDh",
  "key25": "5buWZgs1cSvkQ4koHYu7ABiukBMKGvJdiqSsFBKVAqp8JKWVuhTiCWfMD6nTX7uosUV5xGBHfBauCG83Wt6SQkyN",
  "key26": "34aUkSs7uZm1ewXnrZmobx23CQ5ju6Mvj7hCqEHWhoJ238aHrCcBweFKDVsAumct92s3YTqdgbjjZvCs1mcvG52E",
  "key27": "4mJfVzHkoJxQkCKKm8azjZxaTwR8sLVSVgnMKe3k1YtUTKEa4WyCwWUdssY4bNtoahCXUztt1oyJk3FhRorhSdMn",
  "key28": "61zxYdRGZwfQdkyLCYL9ad1FiWJqSJCzpjdirtnSFbFdnTnkfKgayT29ZeaFL8u5TRkJoGzdLRvNw3hQaNBUmsR7",
  "key29": "28BUDWQjUCvwp1Md4LFamB19ZnGnAS7QaoaUP8L3B4TqsE5UBXoT7dug9Le5jaytWSNRDnQ7C3jMwEHqwKHxE9FM",
  "key30": "2ri9EzMQFdKK9rEcRekiLfCTowr2VUa8koFJep3icWhutEhKSbuN6SSPirD3idow4BgnCZNj7Sz4CuSHvka7oSSV",
  "key31": "4h4Rw4ZYrswHXNVVuej5vvSWz9c1govELPpGaCxUmnBX6JrrMSMdzqSUacj1hwZV3Cy9wtGw44WdxvV2p9Rwiyyz",
  "key32": "NFgbH8VGydCfygXsPxo127evKjqSqDbGwWhoVmWGz3senc7wUfTqAB84YCah4zUqJ1ovdcszBTKNJ15UYbRRAo5",
  "key33": "3U62XFDc8jiuupF7fiTcX4GkSZPFPm7vY348bVEfNDnexP69Zu2JkDWZEJgkzv7b9tusp5TdrYamw4RWidi1iWBd",
  "key34": "5ZDXuLC8obDKEsdgXDw6vJCjdod62RZfJyxzotPy4C2aJ8tNxYuheN74UQqYiT7kd92Gb8CVYudHqDaeheUf7AHj",
  "key35": "3GR2ucaJBy3cmKMRakqkZ4Zn7mYAiGBzcYNSNKgMimLaa3rRtforGkSVQf3iosaTUTqX5V9aqGWKb3SacbY1pRMC",
  "key36": "1iN4AT2bd6p6vJdpjSwYVsZxGbpVAH3NrCm6gF13vWc8DrE7qJxWStgFZkL4qMTpDyPfbm5ynagZVx2FSvgy4ud",
  "key37": "4sV8FyLeCgHX8offA6YAE18xaASa2L1fEekb6UDmuhkmAbfwFpmgqbCutYLB5aL4yBb89NW5W7h2eUqWiL9hqQPT",
  "key38": "2YGM6Bk9AskRVhSdtxnSKkBaBaviNHLVKx1iZ7n2rJQyGdZBza3wUoFE8PzgTuYm7yaFRiMwJbmErhfCJjuCjaKa",
  "key39": "4r8wknm5T7bx7Kt8oXbXbopuRHpNpNq5ymKnvtzUvQnx6ATYJbyV4wG5e1bucD9Vc5qzg8EQieML65Bsv4tKuiRk",
  "key40": "2pUqcoe5NFC69QmBX2tBsS7crJnawTaMQEnXF33MbQ899aqDfSWefu2AkQKAeamBLFY9nFferjErbX2J6VGpjMqD",
  "key41": "2pmCkM81BiURmaxyBYvKGctFHo88WWgCHG9G3B8afsThjN9zr6BQkMAGPYpsYfiNW23PCSHgvDLdZPCNXTqmfZeP",
  "key42": "49t5S7bGxXSd46BP1ext3GFBpxKCBGst5JFVgtZczcStK22ztkbNrrAb5GxibrRs9b6q1zUsfzi7d21QVRx1iJpd",
  "key43": "2HbV6SQxSBpA4RxH1BHnyC88LEHb2oEeuBFyPAE7sz5q5wMAnteTrpXH1zwo4ZEePhmyUWT7cdYgd1ppttkQKa7v",
  "key44": "8sf4RJPjBY3rMimKSgvuf2joiPyxQ7cpryvQG3t7hFeEWABEfLB6S34vPfWXkXu8b8DK9tSd3xyqoytHMjbvTfT",
  "key45": "3vyYQbMiwYbJQFSaLjXFDnRHMKfMoFYswZK4rbRqdqmScr4RzdTHmqKKjTBXh71pYz3jMvARgr41TgRqThz5KtUk",
  "key46": "2g9jFiGAGpyWWcFjzpDSUHuwMbVzVdbqTGXeKFyDeC42YSxKXu7ieigANqSygDngvo7Yp2bCmWdZTchsTVs6wtPL",
  "key47": "22U8JHYS9w6LFRuFEMfiLHKBftfDVC5BK3VFMFodKt3sCGich5t2ssUzTBHJfS9i9Hy7W11HEvNyzbshMxL2nz61",
  "key48": "677j3N3Uz4Bsj8EXLhtuqo8n5vpn8NgEbws6vWMb4k4FiEREBys2SJumDMvJQPaD2BmL2WMztP8tXV4VeNzgaYxe"
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
