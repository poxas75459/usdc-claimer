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
    "5qif1sAHTRjtr7KTZxZMWNawxXAbGRddTANzWC8wrUdSoFYGY4soB9vu7vPdd37oK3vfK8SBdL5zmTJZo8kRrS77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3omV5JvLfMkvbDxqqC6WK83WCfAbvMXYDGzF9XyfVidTS6T8AbFQsCLeF282XGvR9iMCjfpzcZYzA7KA5sRSDfkQ",
  "key1": "3n8esQtFFLZX3Qog91WyqtKtwsQs2wpo8JveGUKn2nGxCaG4QUvuA26jVfi8qPZzxWHtLmN2XwQVekjcHJWRzcPH",
  "key2": "24sqFsU1sVyCCnjjVWRJy9M4T6qfh164kpjk9kHYarmU7vx2HLqHH616eUCpyYDtNjoa9cnAPaZ881MVu5R2wJVm",
  "key3": "37TXmJjBew833WNt9m3nj3cr8pS8knS1MoHnyXTwKPHCRb8h3ZzsxWoLDXDYufQciUdxLxPjeRCpMSoY2M8nzFm8",
  "key4": "4RZsL16Bje1B99NkGY7FaykonNPkAkQAkZERiDR61TrTLKeECixtfcVLfLKrMFb4bS2bh7AhPgUwmo8VA5Fn1eCQ",
  "key5": "8By4MA22MKKqBYF8qaV4V8uDCXLhLWPRttJHD1qMk9JPqmwpjZzCZ2QnZ9r1QEet14sL7m5fvjhictjztMh7rVt",
  "key6": "3HGsT8XciW3CSGfLodCm2oquSyMzvKhsKB5akerDM6kq2WUNWuwDxH4QjZnkngYgxDL5Hfa58nB2SXHCMYu5H6Lx",
  "key7": "3Wzw1eq44hxTjdWTUs6BoJ2ToJ3p21uLLAkVk5K5Xie3QTu7huTwXRyErVkYpxR4bhBCrWtaqUj3bwq511Jweg9E",
  "key8": "2NYh6eaXo5BXj9x8qzraQ9p4Wi2mLjzqtBd9tmUicqvcNSfi9wWwfVV36QetBZJZQXPzdARu1tGX1QARpgQ56SCY",
  "key9": "AkrJePwH4qe7X8tcFv8KSmihBxjbfR7QaHSwk9YmjcWUPbvVP8M3RfaJpL7p1N6trrtCUi1fbN8uoaZfgjqvt6R",
  "key10": "Npm5n36SR1zwij2dpT6cJr8gN6jRjygNMZTkLRUTpqeUpbn8kp1Xnnp2Y3TTXiZXJETpAU8Yxg7WnjrZEqXv5xh",
  "key11": "uGxBZ6MWasLUtAhigh6mYCj7w5u93ruWUXmgDsfL2gCpTUkyKy9nmtYuBP1T9kgC7kkjuNZdvJUn2mQzqbBppdm",
  "key12": "dNryxUQRoZ48mfsL5U1WF2gipoWs4Zp2xAkigfebHrCqMSqgixWGDP6xCM49NbjmCPaC5jdk9UHHcmQQm3t7YUq",
  "key13": "2QubDARFQdz81dfBWDxg4pFbGqt544TxASAYbrVWACDrMxhPtp4Ms4JhuFMFuFkTMma6A7XcZL4LGH87RFNkXrAu",
  "key14": "3bnxFFMu4ToG3srtD4GRsk9M2sY44vMqctWBxz2PAjNG5qdpMdg5YyS5uvKJKeCxFNyFyJqoAdut6VMxHqNXUwBt",
  "key15": "2v2DTnrtTmR1kY5woHtN5ZFSViGdQ5uonYoutUu8PW1Xdi6ietWA1hPExgFKQsD9fezZ21FsaBgSQovbusPpojAw",
  "key16": "3FrTjcevrq9QEmAyaMMcG1rEmYz8nJCYNmSyeDTrakiiehC5kyjYrW6UgNCkFeRu4tRdsDAgLMLfJfmhR7zK85NX",
  "key17": "2ZKVgALNPBm7cGfjcXNAXc9AUy8BmLR1hwFRD9YEbrAnbbGQypLRVjj9NcoyvdS9NtLzCuTn3xtd5adxETe8Xb1z",
  "key18": "Ah3YM7TzaR1dGTAMWZXceebLwXheRVkSdtLrues18kUuS94vzav6LnBAJmzU3C1uLdyYKkoYsgfXSD6JhxjHA1N",
  "key19": "44iTMjiSpyairs8zkBgASQTy5zBSNzXpGkcnKe5JSJQjqj7djba7Ff9b3R74UUEUMGLAiWUsqn4rowchUzMvhD1S",
  "key20": "3nM57paApiDLY7QgdV1E2WExnvxmRRzeJYr5zgfa7bhq71jAuEuaDjQYxArgcjUF8nevkCMrQtAp8vuVBK24r9kr",
  "key21": "4jjG1dCjw5ZGouHxfFSgEPaukArRRe3R21yhjApfR9Pczxu68ibJMnUDfmYz6B8GRfn3u6QRt2BzVYLjUXhQRdxe",
  "key22": "5ioehYNK9iMWMF5DJBXQtHe1xhFojBsPL57NNVX9bK2idqVXdgXdfzCM4SjNKaEV7r6ED2D3aR6rivFyCC9F31aq",
  "key23": "5b9SQysaRmzTMFUeBWQogX5AVmbD3cSwBxkkzzfbPeQBRfvXxhQTrRN6RyvD1Ah4GW6qgEbogHe9oPnQkKHGwppj",
  "key24": "3aDJT8Vm2J7hJNQc2WdbPS91Dkb6bdnSz4kWSfqKmMGPv9DLBxUQgDP4hAyE8RS2e394r4t3a2ygoQj733xd4o7X",
  "key25": "CqiEDHu85n98vdJbxxX4KXmrW2SzbZqZQPcNP8NmwwvXEXefqgn8pNAX5AeEYV3g6YsXC5uLRzyv7QbE6vcd9gW",
  "key26": "BxyVngKmf5JDTsMUaTdGpyeLnbhFpnjndXrnknef5fyD76bnv8hTeAeuwsdryEHKanjJe8Tv4hJQTFpqFAJEJMt",
  "key27": "5weRR3gyz2xoEp3voCF259AW6WtuNe5ktgbcdg95z4yZgRqRNnVjqHKvZg1XJrcy6wsufwve69tBPX61JNQJKiU5",
  "key28": "ALnduZo9f2X6swv4s3gJPothrRA8TYMpu3qjNuaiNArJ46EjzAQzVULc237PNva2Yib6kGkr6zqzzMHaMLFUJpL",
  "key29": "5tPsraGS8t5zoBLgCBnN8fmfmLznidfmHBavC5HuH8AuAMjJV32GnRdr4xx62SaWd55MFh5rVnNNPjCAYaKUtUcg",
  "key30": "5AxJQUXavPB79GntJqhXh2jNpF2zb1TNJk8Mutiphdwr79QX9XbDVgyuysrNSy7rfLkECqp2cjz5fGMyGHf2qw2y",
  "key31": "2kUL3tostp33Z9zdLRxYNd9siC2onQexTFtzDqLXeBvWjFNSP5nrYacD8TYdrdCbsjCenkePUvzE4M9o1VhT35oJ",
  "key32": "4vD6jCAZKpXi5vNJeGbkKKbsy31nAjzdJtxBsGkAoNL62BtQyUcKEP5JyiCr2poNtd1Pj19ZNQqFj9TKjKeYFYjf",
  "key33": "4M5vwSj5L9i3Cr6zAf4hc5gdmGvzhcY58mp9M49K9RrRPPvP5FYNvnZLgkeE7Ar6GkZxnsQLjm1dayiX5JpyS7eU",
  "key34": "3BEjhimUcQAFzTMTLzCjz8MVEdfCRgFjCqbGshEoDwhF7Qnb3A7KyKfsbxzQTHXCDn4NxWbTjez7ecj39kt5Fimt",
  "key35": "4bx2bTWh97mtxPRgzUERcSTzfUbKh88eEvgpAJr4LAUopZwd7aggfUpVqLeookfupconT6mRTYzJtgbrKiN3b3ZP",
  "key36": "4riC8HKMfqPGwtHQqQ9mG1kfqebhqaS8n6mprgLpFoUQWMWYMR2RCZu2Fs1wG3TkLDgjFHuBEhkrKQoQ4sbuautv",
  "key37": "2hasRepXoGmbZsunH6BwQSQXHVHdTtf2iuqVxgeEJ9AFSgSuc5pv4FJj4MoAorBXmntjxfWz35KLLFNR4mxwY1WV",
  "key38": "45WNqoBtvxMdKHVGEdTfEYDNY3QKnUSTqS19S8YYAS9RWmqnJ1ZxwnxRRbLshG3jVXhozP6HbGUkJ1vWZtNJwq2Q",
  "key39": "35a7YzQashGxJdsdZhebkXgYtDCfAYbxa5KHMyWdonD9dSbYUPPGbLSJrn6tRroabLKXKLtxeZWwmGPYmGb4vNZd",
  "key40": "4Z1a85Gvp2NxpJTNKN3ws8zXC49fpVQybZn1SwcgEED3cy4rTRZyKRVhXMRtd6rZgpE6wywU1r3sKamGfmB2HJoo",
  "key41": "4j7K5sj4YcmhunvFxqXzEf8Dv9nqtJcFVF8X4JDvHhKtuN9gLQf2G5BCzGE762b9Fi9Mn9ixJrbkywezgagtcu2F",
  "key42": "4WdbUY6xiHahF3yX33i7WRV7U2i2GkmoGTSBvzhuZiL6Cbinie8schDVtii6JfySEMwJHah9wVTj6hof8JdRfuPX"
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
