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
    "2kXS9xM2crYwfoo5WkZW5wB9DdE9NQaQUjs6Eb2gSqg9sXjjC6m3EfQmm2eTBnEDogbfj92ksYJFz24gAQiD78wk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gLxDHoWvASzeEWeguGpsDXwKZKuj4A74grgncVF9Sxpq6ko63siRQvpg3FjoefDDg6Z1zy9T4EhFSs5mnhfJGzD",
  "key1": "YHeMACE5a8CGaVQeFkFrTYVCTkT3RpL4ARXu6zcUjrauaqhGRxMXUxuFfZYbDhfDV6pJ6rDCcdG2ixRcUaxPQer",
  "key2": "5NHiHHTcXJj9nDWkU8cVdhRif2Fm19q2R7TZtJbumiA3kHr2MuAfrPMUuCpLUfaTj9oQWcBwBw7xTwxUHWw5s5B3",
  "key3": "jg1We69BXcE6u7pJcpRZ4CofSStLGeXcW9ntgr15CpZVVbtkq482DHMaGcjHHj9N1WpjVYAEB1dnict6UaKXkZ8",
  "key4": "5V3AoDG7Rhs8h7GZuKmu1vGq5AjqBeGVtq8edpj2mzWnvoWNpLM71iQpuK3yin5S31NefZc2pKZgdfhYT4fugC6U",
  "key5": "3WC8EvDA7vXnuBpDn6e8d56s4hsib3EHPWLMNU2pGtN1H2rCUkfKH7skYBExrPX3WtCY6nLJ3Em1A4VMqQrzK9ud",
  "key6": "4ZLWykkYAgLngAx6UGC1zQezjfkGax1vFKnqBKdpTiUnaAzKg8EjUG2e7WR7EDDYvk2J37hA3Pn5Z7LmJ6uk5CMZ",
  "key7": "3mUj1Mfg3EYXD8HM14j2vHAMX6ZMCZ2MtGurUU6DYFmcUrCNnFx1bktdCnzD4gSDW7wLRtGkoji4RJS9GJuN7ec2",
  "key8": "3d3JbzqJR2MgxZ45EakjgAME3mMdxqXmUbmt1G6sSLUF8cZ6Hngg7cq3Jv5L2y7yxDwmzwGZDjW7D93tAkbdFJS3",
  "key9": "4tdyyJn6Vn1ps7kFyGai5qwk2GLg1DCGoi1W7X7JwM13sgqwVNbwasj5uCz3VJsehc5TLG9538NggJTVJjAj9RaR",
  "key10": "2Q8idwv2hpR1vtsMK23Tm2AtLRugQFTPnarGEnUHAQxYss9tnRxGqLD27PHmC3Vsx8PeamYhwgb5mrxbTX5irTo9",
  "key11": "3Uae3RZsyQozna39j1eGXg17gS9kCFtMdju8WQ7mfww73ZyzKGcKSY2U7ZK5PM4xBNzf7HUBRJEoQNhk58xzuJK2",
  "key12": "2NzgwBdEoPuHRd9fkgEySB4szxwk8bAhShxrCamTntdCgmN7FDsehoCgPRoYz1MHjWPeCkES1V6jcMkwvMdhobTk",
  "key13": "2WJ3WQWJ9nVezdP8gSdDh3ZLFfnJQgFnZDrtMRt6zK5WMeHwDcJCiBYnRyvqrgKXHuKnQr9Zo6vQzJGgcjZSCxLU",
  "key14": "22FLtbvUB7kJxGL9UWSZp6bJhwhHJE1cHKUtu9VMPyWnaTFMZBhxj6n5iuo6KsUCbP8qBCZkYA4bfsYMjfdYUsfa",
  "key15": "4TwKkuU4TXygYdRxumSm5qfWZAnZwK16qRvKGF387g2kXecbV8b1CYMP4x2td6LSBnhw73QFSCuaKDciQVq7NiGG",
  "key16": "26qc5iqKLZAUYFMZAeUnZAJ8asFVkpjnTkL7FSpqgQVX8ZAkcxNpHNgoXyDxPHwyvRgvMcJ1ggqHUSJYTQWCYsUb",
  "key17": "4Kh9WPZEpmpL3mS6RTDKoseEoe9jhmFyJNnk5fZ6NdMNHG4bfsismW6JDAaKEuCKGWzYAtgY4qzNS2zomxP91WS8",
  "key18": "2SDMUt3NUEkpj6ahmS6di17kZutp8m6Jzi6jqSgSWeqsLvw87FdvA7zzGGCGcja1dKZmBVgj2m8tSN178STtQzG9",
  "key19": "5bKQht1uKXpupykCwcDhhtb7WYSMTQL2HbQk5WFACCffCciPsyrudmTeZ3TjonwqXYmTgDLqMXzeV7eeUC9fjDLF",
  "key20": "5UESU92XJNkbU38px4SvSo4dSBxuM3SASTgPZbWVsvFbPi25td6oPd3y1vZj8bgwjmfd54qQrhF8NmEB8NDaSShY",
  "key21": "5NY3JZQuy6BLt9m3ZhHCPKhSM14UAFqQ2p222GTreB6vYEBsHjqmHQvsL2KoK7jPUn4SsEp87tKW3yM87M1PvMuV",
  "key22": "5ZTGgju1ggv9BxTquo1WPQ9LerdgHgm8T2XRQnqh6fjc7f13sbi6ntGViTTzE5dA9XTJXZfVwSm6RQ58eFcunEXt",
  "key23": "4tYF5Dt2XdoaGJzQVvL92uKECHH7o8NseL5ykLE9KmoXKz1XTMMtsZAe4u5PcfaGePrUb7BUqkX6nBMNRwSDB7d9",
  "key24": "5UJWwp5XHXWjb8cVuuKXLiyLvC4LtmkXhajLAEcWbmnPXpirEa8DoPfzDGQQ3qfLkPvNQqmRLSCRM5JFdqWRVWtS",
  "key25": "4GW6hgMUCvX8pGfYrBpDDw2FpbdEdBUurdbudR391ieGSLjw7yBEVuzQY2dkPEGRKvjunCTBYJPT21WGBj9i9qLK",
  "key26": "3oJVCCSVWwRYQLXT4i3X7q1bTRGcgex96Ma7YjCeL83UEVBZE32KjdkM3ejvHF7JjtBoirgn5GTdeXX3LJqD4sK",
  "key27": "4zxNQuctyJGJC9AM1FiHBxSxR9mpw4Au94nF5b91XHLxf7Px9roDTbB9qCsMP2v9U5phHDDmWsriQjaaQcJQ5qmx",
  "key28": "5mf5av2E4VwaSqk5iBv2H97MgYWKUd3QhFAPLkQNebUAWetJMymqrnZJnMaaGpCDAkCyG1n8q3y7MTY9TTUfxMwz",
  "key29": "2fDHaH4A3tFJ9F3EgNo7VsYvkyHMn8mMYp1CWd32KjyTMrYbbQG6VGZw1wHcivLtEbwaJjpfHjHXjAYCd3aKHbRG",
  "key30": "27WjVq5jQb1T4qNQekVKcUWPuXRFiGTcKDztuiDE4mUW9Xi4eXZhhyFSbfU77P9KKdo9qsnoQwwv3Q8e39aYmg1m",
  "key31": "C2ZppqSYtCpGXeBzhENDuRrhh7KkgMPr5i2TbSsjYrxn2f7HfXj9DkRRdY1hN5fRgC4kGerEoMsfdAoHwo5m2vY",
  "key32": "NHV4cDAbB2G2kkhUmkEEVwDEsK6q1ia5Awte54uNWN8yjd6V8DbwurRRb1AGsm8d8QFporhYpGDsKZr66GyPtQ8",
  "key33": "632gun4RCr1GdXVgAnui8AxJpgEDBv3VnL9AxKJNL7Nf6NwPHv8uoFVWRN7dkvGkKGFW4sEr3UVQ7JvdydidVecR",
  "key34": "2TH96qA4uubskeevBSrGeh2wGAi4SqYnCVdYosZuuo4tK8HK8P6LWvzszD25WyBa9mbG6XmNEE7WdeixUb2SWFUK",
  "key35": "2yKuXPcsnrcZdAq6bWDDKsQ6UknQRUNbHyMuWNV77fpDq67THGoVUmABWKEjDctx3RKZZj4CSQSB9ziYNXjKeFtu",
  "key36": "eekd2k9qBKNZdiKmyV5HJbgtL7FhfukP123xYEzufZVXZ9tUAhLGFGjPWZAhexp7YKSwN7jmQfxXFBAc9aDjy9B",
  "key37": "3B5JNU83KZ7UPyqpbYuBv4XmNPwj536s4wqFQSHRFC3H2SSxzQSqMzp6v4jFyHAipHCw8J1QGhewdirUTuAjzjSB",
  "key38": "3Wu27kCwdajGwBafvC3PxpEoSsbVn35gEBKttysQPD7eSnYB6Nu2ShnRPbJMRUtLiqMtTkNSLckXc3Cgh8SSXz3w",
  "key39": "5X3L9NnnQjoAarKPSuZvAPzLGtDrJ8mbiWWMumSVwdhPfrmuVsmgbv8SAHSCZevQjBp2NcnsR7PpsoGzFkmMXYtj",
  "key40": "ZknpWpYAM5aGgqSkRifq88jHM1xDCjFGCX5raE6Rk9Jvxbg7zWGSmXhWwHYgeCxQtZBG16qpcpdWPLdVyKqwxrt",
  "key41": "65aMKTicax2mMAJKLgnULkEPMuWiL5iMqeEsaRKaWQFGwAxQqB4M9Yb6TH3ioMJuytPAQ1md1g5AZey8QqAduxtm",
  "key42": "5MJd4gv869phwsKEid6n1h5YrNQX1WjKwHA4w82kfPxo1jctkqMWVPhz8ADy8E8T6vSvwKaczirQ4dL4aiiGZft6",
  "key43": "5682peGR6TD4GKxVXELt5v5nyex8Lmzs5eby8UfQ3wQ68axbh3Jww5sQXBDzwkN8buMKFZyviP3e3ie8xqFZuP3f",
  "key44": "4yhjGi2u2pBmqxGqqCCTE72w6hB5bqv19NnkJMSKgRG214JDALbuzKa2SzReV9J9nzwRR3zgLoAiAZfWUqjZshCX",
  "key45": "41RRntBdJo3EjzDAudQzPo396zpep9E8cZrYvKYCBT4vqijKNLoyEnmxWtngJZgQJ53Ass2iqxwpSPYDgToHokze",
  "key46": "3SuJfQx4F3TeXgskyisHRQvyXhWZ2quZ93X3kvSpwD1RnqiF68hDssNzu5na1oarbdvnDUTJ5K7dydsB7UtwTheP"
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
