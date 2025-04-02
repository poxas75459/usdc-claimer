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
    "5vUQkqPSVVMdwCiqjmxor4Q6xJFoZvWZdom94vnohLaKxEgshYCZqtxq1fAYPwuWW4gEfJbv9TscVj6XpebfuGU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XbnEjj1dVCLRWnDZPB1GYHryjHhfzCHGhxbfH9H79zABzGU9p6cj8WiD2nCuSBuPEAysNCGFei6JcZzRJMxp8q6",
  "key1": "4MDtdkQEs8zGGWP1v4Yw1jnUyL3i8yKvzMhVdDUGqL17hUjXGuW2G1wySf8DWyEjJ6ucAubwU3BpqpGoCNvkH1r5",
  "key2": "4zpyM25d3CNWXcMnXwRGB3ZQiuFZFRnuC1q9nhm1YSNv85AAWtY3PDLD7aakMqqKEpTzKC8nio4C5MMLjaHXuBrZ",
  "key3": "fdGLbwNygPB4X3wiLR2MSKXbEThFohLJoQHPpHYfBPQrbBXnfwTwfdSaR62QsDWLU4PqJZDyG3gLQmDNNBLQqLF",
  "key4": "2siprWtqvvYPTSSMfHrBQYiY8CSvTDFiZXSuCEdtcEtobiFyELFWtj5g3fgeiznnEpZHTtB9FsSQvqBtv7T2AYMm",
  "key5": "5UxTiWV7Fmax3NkzwU9N6bJFdtvnfKKemWWUqyKWmGVNnKMtdipd3hhndFrfwu6uzu2Arri1qoB68xxndJwWapea",
  "key6": "5N278utVtPqX8opLLumWAwFPgG74dYs3B64xCVSiAoNrzD5K1WTZbRcxWDyRcWajhHVLQoRRmskiLA9zgVidzVo",
  "key7": "5sQMNBgD6MWMSWbE2DyS3wk44ywu81Hq95CzZyKzeKQV32rGx3vsQvZtD4LJyo2AAbQuw3GiETBAjnKUBdsEPeM9",
  "key8": "5F3W1TTtn6H5UEZpkVXeUhc1WSzgjrZigzHn8feMSEJsU8gyrrauv7qhkpDVFETyXx76Te4aXmJjJXTf2ew6r1iS",
  "key9": "2X9jatkznuMAaGMomVUFzhvQ7pSqMwxBYuEcWHAjyvHQNQNcEZ6wczum4efg8DNfgqKQnTbn9mP9rvJQxbbDY2Et",
  "key10": "of6871FfeWGRfuQm5kXYyDcjRKw2u8jAbGGpRKhszeVGE2MBecTC9wcDhsQtrDwnURreygskph1J5m775XYyJhF",
  "key11": "4hM59Zq6YLeufMucaiPi41yPejwiRw7SPKRwo3atbn3ZSvBWLziE6jhbZpfHsJ24SRNaF9azxsw4m9SA994fc9oe",
  "key12": "5uLjNaRizXhxGpfbRD7R5bJakk5LayAJV7odcCKv66xd6jG4p6JpMSsUWpwGHXjqqTaGS8hcBH4vK9Voqy9rEA1E",
  "key13": "12456CekkumTGHazHhquezeguapRok79qiio2gcZFVdJTqkj3KAPUFJkG6bnWVsDE5qA6qD15KpEaSiMJrMyBuc5",
  "key14": "52MvGuX13jCWQRJG4MqRUu4EozJG7AVaggfHqCJh8CTan3M5xLMGEHBnKkrGUXaXvg7sgD1NUEcYivzmRhThjdFn",
  "key15": "2apmi4Kqmb3PCSDZis8LPKbqCEXftEeHeWLfevQYcGX6T364heeN3sBfEKN5JuPNvBz2ELDNSdZzqRbAvEFiTTvM",
  "key16": "41u7T8PH9pNfiw2SNf1RGndzmTrzEjVXvs77qe5dj6VpUPqVCAF2jvb65DnrarmTRQ5fWh6wMWrLmGD3bHfDDLPn",
  "key17": "2SCm3SAnYDwSJBXUNwWHPbGzg6agnBewZoYgAWXgCgvGz649mgWnH7z9AjP93tFAYBH4w8QKykdEuSwFcPYR1QD8",
  "key18": "5WEBNCxW6Eq7iXBEqPowFTdZWTGeS6CGxSVN9LLsVSLM2Xxxjymf9ZGMsjraa1JvaPxdGnzXGdtsMZwtebZW5nzd",
  "key19": "3Li5mo1fCJBZffojunA9p9nfWGYrgCE7ZzTShXxY3D68cJfSHy3zzrqdE2ZtFfS5iSR4KYXoLAiofTi64oJ7mcpN",
  "key20": "5BvyxMjVn1pPZGU8vxh5qeC2d3FTodNwwtSRpai2skn7sg96tPgTAjojqXZtYMyDA9VsH3pe44wGACKg7hfLqnFx",
  "key21": "5ZZjTpFyoTkRNqXEhmD2UtTRktXyrDb1rKjgEfiqztBERVZTnYv5QtmBr6K5E12R4pXPvkhNzNh1g2xSmDCcrwCC",
  "key22": "2PVkHdKDXwkajGPjhrFy5gE7DRdASr8CZ5Lf99yFS9nciaW7YNivnr6ynn4HBhKRYvvyBT5mrEUU3j9F4wZeWTUn",
  "key23": "3t1iEjJqeruF7eGTeboYQLcRmzXmbQLNxGSi3mSsXtu2NHz4nV11UHxJCTTWmBVReXZXCEMg8FAMA6aVixYY2hPk",
  "key24": "52aC2ZewCztpowEmnGh3xiNMyGk3BvwxJvDWRMTcbFsRHVttNbVXjeKnu1bowxsNi6BERJ1A1dLcVPPG94ieYnPt",
  "key25": "2wkQyLFQpPWdcVTF9egVB4aafFKGRKaPYk6A3ccjwAv1ZCqL5W9d69ht2M85ypqacCzGN17JSn5RGjDQZmc5H1Dh",
  "key26": "3Q3VXKFWHjYoE3AAQXc3ekK7WxbhXmwgGzAmdJEemR9N7RVfLwaGtrW5RZ4Mq5HHnFWExVJedFTBUv99uej8xTFD",
  "key27": "3x3Zb1pLVAbEV6RcgEMXSpECYVQd9jDi3cKiZrSy7JMHdtWT1TJFmhYLqFhUQf5PQ4CfzBuMZkamDe55P51FAqWH",
  "key28": "3Mt28GezhJGm9gn67avXEhBUWwefGeiU9XjMo8Y8WxJhJ4Gz2TKNC5p3NgvDrLk4v2u9MytNok7VoaJQTkz2ncSz",
  "key29": "3DcDfiQ1GK2t8RsAF8V23Q6R3aFawErnKs3gdVDcmhG6KqEfVxpRiyaVNEojvzL3K5aDf4DsSkxSSr8cXfBgM5d4",
  "key30": "5PJjD5hysWpEvEcA1mfknEYpssCfzdFJmUHv7ktZsrzpKLZE7kCsBxpQSYdw5UinNuLNHu5jL2qBspDDBVsjqCkZ",
  "key31": "3S5sif8sAutSYZpFwLWbqoo1uPzTEXPAFvAESW4FMskY6aZzvwP4pGcxVsLzZKAHHEwEuo6JUkBYPfoYt6H3DkpY",
  "key32": "3gXFMz7jwraQnc6Pb3nZHVbNnUXGrajWSDGwLbLpCa18kHKqUocAgbPAqbCN2qxkvLWj4GfWZpuzzmPkvXtrgUA1",
  "key33": "3Cu4hfxPa3FVF6gsjNwwqgXtTY1Qw8F2RzLmLUNd98X4aYf6zgcEwvz2x8KkkugyGmGVbMNHLkGtbEsjgtE6c5Dz",
  "key34": "4JjZvXhf2B7ytWdN6jtwhxuhCZRSAnaEpK3d5HHmt2XKxS4jCFQpxPzajm1ksCZmNLxV6GrTJPoa3pGZcYCUTsdx",
  "key35": "nnHsN1Tb7q4ubeUorePHzj9ELgQfsbrXBbqnubTaB1bwmB55MLjwSZfBFvPiB9WWghe27qFckEFv3CUsd8iPRQc",
  "key36": "CBYccAmaqkFPdbQ3GfggUwj1Pjg3G1o7Ke5PUVQ6k5QUiMbyLBFWzxjUqd1SJQq49gczjYe8FDhq3Q68HMLebGr",
  "key37": "28qm7rujfnBaTj3KAtty89E3hbMjCL8AvhTW9kDpAPmWNMAU8qEM2hEhRDQ4agATwuxMEypeujM5qCAghFkw9sRT",
  "key38": "4C1GoUzgJe8ZZRP22zf1BB8d3JDJQiJ2UCsHB25ZxGuVUMkgcbqscFE4pE5UyhMkKbLXAp3zYHWz49byQ6U4dZis",
  "key39": "urPbRijgMMbVEThCt1WYsTyBen8PurFHpqwgnfMef9HuryFsgVqs3dmdC8F9x4ropWE5kttQ28ezziAeunCJHX6",
  "key40": "58B3X5DX4YxrAw6sak1BKNowHUPVV4AqBzRRYE6G7uGELDDmZg7ndcCoWZTUbjaWpgM5yWmfT9H1cpNUKxZypAdE",
  "key41": "gvDuqiCFR46KvASwCHVhVjYJvMYX7aJXYbojNd9icvYaVrNRNcAuUwsxSMgRBxeZfoHrUniHgwv34ML6pahhVzy",
  "key42": "7Ee2RfE39DPJ2fBp5hq6jhoqWF3GP5VJ8HSR1tJ4RwabnVnUCabAXvXNVKdVMKpNGHp42wqBXUCwR2gncmU1N86",
  "key43": "3gHmkKu7JvXjbyZfAEJGs49tJCWowvja5Udrd9kHupTQ1XeqeYud2eiHQ4Uw3K5a8yDmV21Z4QsZrvsW4E82qJSk",
  "key44": "2rRc93y7QxqZN67pLWCZfP3YYYStejK1yVUwXiqMuVTqyg3tbShfzTqx9VGjWq8Py1whWGH3U3Tdq7kSuvcGBCgN",
  "key45": "561Y5gms4QRGZMcA8QyiTWA439zSjkvM15SFraUfLHmapJkGSANtiokE9hmHGkbbGrC6GK3rZnrCHuJmtynoFQq8",
  "key46": "2iv3HWou1ZCrBWLgvHMjR1PL5W2cAiyCiAhkShFsKV6LGZNRCZsmBoJkRJgCxRBTcRiBUhDhUtkReEYbC38xV4re",
  "key47": "5ZyLgjKTn8fFWJwY1Fsm6risHaAr8p7Ci3sKm8LJ7fg6HL94ifsH4UPZs6W5UsFwHBMMtRZ66M6BX4ga5F1nf3CA",
  "key48": "3VzEi31gu7sZ7NB8ky2nrniwKyeFqxCKut3bxqPsjiEHVunysAPnva8AQ7jnqncZnqRhPKnJGn4cREpzpysSMzqa",
  "key49": "4aQd561KTfeaa5hF4Gk8aj84sF5EWrbSExMuyaUFe3qYJUSzoX34PvuEp32wLuXhPzFnJJzyC2qA6q9dZkpZHRuk"
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
