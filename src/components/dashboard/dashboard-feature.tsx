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
    "2gRcRpkRSVBG92yJitzvtPNEaekyRDH1vkMFdfVnUy1M272TGwR9S1VztSDsoj3eiktRAKuzaBXnXDxpJ8N3mWK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PAALQGEDmoc9sXzmjzr5EZJihSVjJC7dh7CH98CpLVwz9UEBVAcje76t4FPaabcTQqQrGvF4UP9kQD5XmLY14KV",
  "key1": "51diEWzgekYSUqNPLs7Rti9LRFE5TWCZ2DX4HcQ1xsUYcrREb7we6o5rbJb21KE1tGaQDDm9mfuaWnXU4fFN4oHB",
  "key2": "5jMMpdPrUCDBm4sWsdDCKqPHTU4p8a3g2mbdw3yr92vtAYxM8629Z4mz3ck2khh7bJffg82BqXHxzgvu5GEpeeEi",
  "key3": "LLkwJP5AH6Kob2nXuRcb9Vb6a8ngkMmvsf8L358D7Pf7cDVsDwEFUkVs27cGEvVoHjNT6i3FU8oju1FLTdrJz69",
  "key4": "4i64gio1KyBKCJFDrdxNCwdnfhgwedNDN9k3HzXr4diJ4J9Eq7HtV8XHVeZoTUj61j9d1bKpQPgQaevUZM7972jS",
  "key5": "2nVVfjtSN7j8wBCieuj33YFCaAeAvW5u6Tg67ZuMU8oinfGykWApasnFokK6brRdXoAJVoGWwc3uVUtpAfdoRsGv",
  "key6": "2qicWgDYynfHYspo14icunt2H5KSf8C84RNCCZ8NWqE6Km4YetXV4D3A7FEfGL38QarHeckfHjVezyKph2SUExq8",
  "key7": "4qmmULUx4H6vTYyqrar9ynpro56uSWKmZJpKpFEgQtjx13awfNeS2iA81NHJvrsCLYn76DbwdkFyiuZoBB3aAnZk",
  "key8": "4wdYXvtVyauMgKuNKRg1w2jGUxGYVz1WgqL5YyNVCTddMQza6Kr4A7cmvcrFyocQq5N57QResS4MXVUy8m6q7WSY",
  "key9": "5b3bfpwX5beSvPrd6La8yEnpB7gMMtcD3ghTjUubVRY1HarRkDuBPu1wGaBhURqNfzgeWgydy6byR7PeSPzbE4oP",
  "key10": "8kTP5YdRMX6WDSESHE2EaWpoUVGdgMyzwEq6wPqjzyjgkS27fDHvAbmwXBrbEWx6fd7LBo6HTExTYyfqmjt886e",
  "key11": "5mtFraWFJXqdFc5ienZqB9qwRL91DnsGDAchLJXkG42HNubJ33aSL9Kq5VAtVWMBuok7SD1w2Jy9oHEaebsfQmj6",
  "key12": "2LEJ6UNCzM3aPfCy2pBsKzFCzLReEv5H9rReM1tJPr3FaFGo45KHN2jgJdyAvJNTTYUGrjEdo7kjmo57Xdz91gb2",
  "key13": "woSjitsQdmZtm5aZk7ANwxdZLzxrqi1wSwu7eA4vb7mY1ox2ZHqwY3xCJz9ouovmJFCqyyXEw6USu6PKiuh3S8Q",
  "key14": "3wmn8rPk6UqDm5JUkkSotY2JshYgNsX17gYBmYsTRW4SKvW8uuBaJKM7KieE9hhsCDUQMJsXLFxYPJxcdbYHKfT",
  "key15": "4vFAa3Ydh7S8CUM7onYmNPt4Wpj6gsFTH9k6Yxq8aaj9FtrSqCu8bgxryrbwA9BHHMCcBHwhmuLnNX1KojEWhbhX",
  "key16": "24mxa5AriSEfQQzGN8SK8XD3VwVjwwp2oa1Ts8icnMaHst8ht9uCdDnx68aonTRb6nNQfXJ1b79C2zJFj2KSr6EW",
  "key17": "2uQpKSUawdsWjxqvxWV1411q2keCPQW5jVH22argcaMcrnk5PSj4tJzUeX15L6FSs18YGC2t8ezZ1eFNu7FED2yo",
  "key18": "2s3mzpgTv1BCRFV5X6YSUPFNC2UEJCWqVqGWTpkHkEzPSPQNX5ZitHGPaU7VQjXnf4KryW3VARjjcnikhcZ4acqW",
  "key19": "3ZkT45v1HNHRKQxHomJATV55x6tCgVPgxeTwRPhxxRtrje1PxQKxR9TEvZdepHdnkM9LdKoyH6DcPpmFkANCasyC",
  "key20": "3JUGah8gpynubQyPM3WrSN8fe41Xknn7LQR1F9DZUy8NPRRxCuxa96RWUXpeiHwoSAvVJW4HDfvqoRL8hNQD1jTi",
  "key21": "4YJUH5Yd14iXzn7zKpysNuySuqM5dCkSxYkShtB7NGr1MBN75owfzUA2TPLQP8gzAHACwZsDgriqWxA5G7rZgMWP",
  "key22": "4rvQy2fdNnmqqB522ffpNM76oVMqfFaGDmV47bWSCZD2PM6Ti2RA1VdeFNSsa2DygrH29raxN7a3t5Vtt4dDqTxt",
  "key23": "3dvUetoXKXEA8HuvGH62TKpfWVXkUtsdx57s7wvwFgBi43sML6zM9mmnsh3iUMjgpKFr26CnZuiiXEWgmbvfSMjX",
  "key24": "5mpbaKdZnD8MdP7yU1fCiVN5xrd3N4UnP9uPwNYE5D6fkE6qzQJsbGHbxr4dHKhr3WDYWCUSxKSLNAh9NXKo4AZK",
  "key25": "5EFDr6X4EpyYYhprcz62eKRwBCwMfyC59CQABv8ZUfXwLD3QAJrXSHtsjHwzEMMCg5PDL6r8nGE6r9gbvpfyLiGr",
  "key26": "4RN5yRJKCBeitK7moEMEAQbQ6df7it71vJgH9G9L7hY3AxDC3Q4QRK9Yb3EXrmFVJKkZ22ecMVzu36p66QyzTnJb",
  "key27": "5BxXqnd6wT49NkSMGXdXQQy78XJFzdLzn3ZLUbqKGtr7zxShXpShkLq13NjuTZ5HZLxkiYMYWGewtgmj3QHXxv57",
  "key28": "4T7xbJCj9qqnS5iGwPXqmmZFwnm4qVcpRxbet1pUFqXE8SGzmQSi6Vk36jHjqaAf77LEgBuGjEDbyh52hycHxxDq",
  "key29": "2za2KRpSwBRxDCCAgGa1G6TYhi1chkWXaQ9YevvsUaYsyQZMDypT4CBZzh7pEh3PRBNambVQhQ38KJoLhofr6hvg",
  "key30": "4xF7WGPTKRD5h2Hnz8meo3QHx6indBGNLoXJMdfgd638h6daDTqKKPCvqBrf9282aw4BGdwvRxxWpSYWA1bH2FnB",
  "key31": "5J5S8YsUoAQsaNDqATPapS2Tm8rPzmjbyFfo53GfCvu5buzPik8xvpp8AAgdFzBDcnCWDBKW72X3EiwuwV9KAyAc",
  "key32": "3NazztwpYLBbMoJExdqVxGrtRZ6ZDEHBEA8dPibBaST8YxsVNy8MjEy5VFpypw4CTRTbsiTDnujgYRNe553Djd56",
  "key33": "4wjvhTc2BtRwTjy6UaeEznjPxYmGXhMWCzxzVRBXPX6JRwLsAcDivHQSbmWfvanmWhPeKjF9C3XkfbttH7vHsCbz",
  "key34": "JqZyfx8aYXnRLCENxd3oXfFCK5XY1auJDdbEHMZzG8MwkGZyycLa85e8z4LkcKqDfqB4cuyNwy2LrhYS87G1tVg",
  "key35": "3ur2BmE7bC6ZwVDb9tgMsWNsu5EDz3YU5dRi5XBQT5pezsRKt4MHWQfa4smxztC624aXqqVJEjiqdxDkA2BDMV4",
  "key36": "2G3VoEfvESnMALXbwaKPAkGH7CEYPH5F5dKJcLMvoSf4BTsXRo3XE2dwr3rxmazQUpfYz2wRncvyQE1EGvie2viT",
  "key37": "287Mdqincoov5LLPDUyi7oeG8FMyCAb43ocjQaSiw3n4R42aEMRp4nFZF3ENpWCipdNJ9ounYDLWdt7wtazkaeUJ",
  "key38": "659M4ZSwfcKRDKvnnKyvUALL1cKGjdhQpbdYC6URDxH8QdKRx6eniM4RQR8rTxzkVmAgqQMxStEPowAbvbHxgk9o",
  "key39": "2WoQTL7JfUHjCUyqQBP4TwZxSbmf97bL7Znnq2jty5g7GTVX4eWqR6zCGJhYywtnUWxxvJcoefEmNs5hKk2H8L3T",
  "key40": "5JW1SBnnbheb2Xnwt7jpqs73X9KExTLwRWJKaQBwz3f5eNh1CZRaSfApCy9CVQcnHSCfZyEcfhQJZSAnbEQ9mjSr",
  "key41": "3WC9SekLQ8kiyCtEWYzxTse56WWe9uGTav3Cns9KHBGci3at7vbS9gWwvVTeN1urzZqgR8UidF1TWQZyExaobcmJ",
  "key42": "2928E1HNnqLX2cPwExi1CcZQbEBgeG7kHYh2tbYwd9YJh9VtzAXjTuQcKRrRVASWyisFe6KrGTR3wbBZu7AqRGUE",
  "key43": "3DvqRUjnAXLifMgWgAkerUWAvPVaTpHTXHpF1Letuo9dGKCj54y2mNmv7juGs8kCkE6vJDN7Yas1iu6XeaG9UNrw",
  "key44": "vkdVaFCPyRv2ccktRfY4kU26tTXQp39BhUBDL5Wa9iQEhMBghTYb14URazppXPSumjCbJXjiV8xKe4RenKnVeSX",
  "key45": "3bdE4MKn7xNCs2HyqBEHDMgAjJwXmVDrDP74WQjFnNxEpEEuKtSMiSfXCQcANn2zLoSVJmYCyR8MBzYFgJhLB8tx",
  "key46": "2YsarrkYgKrMXkGK3ge8P26iZ8Sp6KnnY9QdyhN9RHzvMdRR35w89Jft5BpXhySAk2XB6AFnikmBLfk3TF6JeDtu",
  "key47": "V4QNKH3ZcFoTDPRLxeXSZJx6wed7EuJLYZknZv9JGHDTJUCFiWQHZZ9M1qrCXwrqBLvV2XAUAzr56Jq49S6CkUL",
  "key48": "3S49LXvGqCNEtoneLpTnUZaQ3oUxWh6H7wyA4Ryxnc7AqLE9X1tPzBaw7j9ATTW3WuRb8sTTwsG5di6qAHi7jcaT",
  "key49": "5mzakvV649JLyHYRdnZ3jZU6xvXpwh9T99qxSWTQKRCLnKawSN3QH3299NBJaZwM86X33ULZEm68w4Xd1zj715BA"
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
