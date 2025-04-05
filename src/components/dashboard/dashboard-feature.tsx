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
    "5Tdty5gYAQBWrng3ne7gxPbNLZsjbw19sLmK515ox3jS6xh1xkhCcD9aVVeoxKrdn6t97scdLcHbsYNgE32a56aE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kbbiEMB2edEDpoXEkzj8iXVLHG8VSJ5TGcxnCSxtXbL9a4ZYfgpZjTqVddSD3grB3WKtsYThA9HurDM4Lu6iWbU",
  "key1": "4wQPJFcdDFoCqfC11etPTi5Vh5NbaTmXym6oVcmzERaqhTAoRCBZmV4o2qTA57QXUd3oktooXbhdeWFj29xkMZXR",
  "key2": "3RfLCCUeovtjcntifMpzpF1L928XFKgRq3sdBQujKXpmEk4ySm6ZcHNXhdgZwzAqLn14UWv4BXGUsZJuzzt49H1a",
  "key3": "4Tcvrg8JDqp6vYCWzdn9kBpHfi5WbYtQVQ1E4GJbwxhD71dLFykeuxmqFUHJ8BdScUCPrzNxe1246NtUApTt4Sbt",
  "key4": "52QjdJNMxF8ih4BgawzrYhY54ZwRfdW1ZUgkXv5LSbGRiXKM83M8goFpoLtzA2vj18YSyccnkZG46CGvVCKeRPTF",
  "key5": "5cjwVTrE9DRg86yTGRxwL87a1XmF4SzQPzdrp3LTdxgqHqc9wTKqWKc9ZCYapZzZ1wErJcKrDP9b3Gmox2HmGW6V",
  "key6": "mVUdvhwvrPpPLepxcoZowuufW9pyTV127xBh7sKMDbCEDQPva3jdjNvdQtg4VEw6oM8HJz52WbWRY4cJrvhidQV",
  "key7": "5AMBdKsxeoRpHvuyMFxUiM1B5UojLGCfLQexfZEEgJ8AKkpn8u9gp8XL8veLGvzLLDGYfAGf5uL7AqHm4LZBWvpU",
  "key8": "2Nz6gS4ZdMinze8vAwVwDTunCjTkPxvmvF6zWhe96DSj2e4me9D6gezcpmRDDfw8rFa1aEokWQQijzqPBL29tEZR",
  "key9": "2wURNhZEKp29E1CP5UGuyVTDZzyNq4EHwdCjgKiQmvxaJ8waSKFpEWH1sg9pXiwBjbkQXp9pbzV1q6fcHEovaSVX",
  "key10": "2nRGZg5zirqsivsGFpSph1HCzKj68N16abQkWxXoWgcERikQDNYbGQ7sbKP9TuXnMw2wsfZUysuhhAfAEWPzBgHt",
  "key11": "4T9vZb4brXRuxcYpMhRtAtF71WPSe2db39HLPerokRnnP6TuLmQjBXeNwoJgiWd9Wz9ficHGrF81fHfrHZQsqydE",
  "key12": "JBhJ164DdZwJ9PR1KoJboyCuGM7VST8ayY43QdQrWPc4hBkyUR2HzeZpVBRZfzEP1uYWQzsXkphmZQndvQhDZdF",
  "key13": "2XWhz3CET59UHQ81nL3MTdopSz5kBsRMzzMYj31sXAacyccMxWcmAmg5WtNWCY1KcEeH6MuNTsg1MWG7itfGnw8a",
  "key14": "5RnESUaYnqajHJDWkjcGpwgVkZtV7LZvUtzJi2mxPQDx88hkWDJXg3V6H1FNFGpvQAUFMuCgTqoSytQAx4vXjAjN",
  "key15": "5yraSiedbYKm3BmC5Era7Uj4EAos681uHuwLrPpRzQy5VYiYETVj6xfrY7rHasJs3dke9FrMLD6tgMgPgbu3wuNs",
  "key16": "43GEY5CELdKqGnsDVGwX5mXydVZ6Z6Eaz3EMDD77UoqT2AbNinhjuKK7RBU35tR2N53yCc5F3NZX7o2WxA77aT4r",
  "key17": "3PCuCg64SWiPsbSrVj3oxTGnQSHcBPeSAxFZxuAjTVLg2tC37hdBTDBS6ZQANH2WLSJcFA96tLhXQH41XGWJfpBf",
  "key18": "5rXdcJmVPB3vsgLfmdAYVUcXna4Rp29TispqWfS1AeZgCxbQmPNrdVvQuzCNLQmS4r3cHdMMFhZNkvVTipMrQbhY",
  "key19": "4kvexzcSp9no8zqtPAbCCXnULeEvcwzjGwDsUaj7LdXPSEdPLfp9AHJpfwr7FS9AMVnZ3QBeMoRoBrhbhnHS92zx",
  "key20": "4SadYFwKKSyiJ5NHmKvMPJ7YZjRSovUzgZ13A8wYQfH7Pdzqy2BDzCz344Aw1SPjaDv3991quzpXEMZWSQd9fa8A",
  "key21": "4vUiyaz2hmuw4M5sHhJLfpVqvK2onffTRuH24tg17gLfdGhmVHDd6SdiYFjTzYbvdstYLjrwWo6YssQKDifMELJL",
  "key22": "3fsu8sr1JiToVc9zywDYzZ7EYtpmqeYiajerLQXhCF8nhyGLNaLS9415fpDTnycgfsEXBgh67Q4Th95phrSc27sj",
  "key23": "35WGqidcdG7qzRr6mUFyyiUM6adyGFzHDJwZYWLcsgUbL2vEvW6Yx6wvbpZmSsfDyesmzS6VW1EkPt3BKwaHGNzu",
  "key24": "3Hw1AirZRtnv3xRuAEiU1fGr9SywjPiojAktvnJrqMXNA4eS3aYwNubQedr9RMVq7ZV6T5tRhW2iuD8SRmuX2Zyz",
  "key25": "2ZB1KV5a4cgGGUyXRTrsGXxxRk17B212cHXikgJDCj7ACssBs1PEQqnVz124tvYbDGoS4zycdwCmamZA3VydPWkr",
  "key26": "5MHMMX1oSo31dFkwn12qRr8dom638gDqZduHeQE1ZNNBFquAWENg1VsKZumxj81DJ2KQJU95AWQDzaPNKS9T6YzL",
  "key27": "5hozopJghuuDuEiwnNWhPNyfQWdv7A5JmjyGVX7FaoEEdEiV1CB7K2GRFWEfsAP6FJDj9ayijkEKD2QUPUSdys4S",
  "key28": "35GDj5cwg4R5Q4a38HZEy9RMUN5v9KxQUSHHLSNrLT8k3zjinTsutyJqkkM6hpiNwosetofg6b8AKPh9UcXV3TsK",
  "key29": "3mug6X824JeED4asB7P4fjU8TB489XQYNbaD1PGqDniNAzremP1rFG5XdR7ZadFJ4JdMPrZkEZfLJZNXY1CJYVYk",
  "key30": "418t5RfdKjov9tioBTPDMU4S6MVUoDa78Jh2pNxvDRaFkQhcpt23DLpNbQDovbAPkeraZDWFxsfdz2XV1UKGLh8m",
  "key31": "43WoUA1D66uTWxqN3j1oHSLexhJopk6hFmJgVebYn2r3wfe5gDvGQXYM84XYxZeHtbGLBMVR9qqjZcS4gGUyAcqP",
  "key32": "28Podyv3NsbopB7EpPkBmxmscc7q4kWS9qWZo1DRWAJjhvf3T8GUmfDvu4ABfjRYEMxKokKcBCpuf4trnMkr8qUa",
  "key33": "4SxscxhVPieq5L1XyWGXL5oDTZnvrB3c8XBNYSPUad9w6cUmt6Z65NVyoWn1x8czvbk8nCNP6kKh337QDzVi23jN",
  "key34": "4M69PCoVZywohx8sMjBM2dZAPh5kLrVBDzhVTJqioKDPcm4Vm1T3ZuQe4cQfquYWoRztzjLedBcRPiga8HSdzAWD",
  "key35": "2SJiUE6nyT4hbgXKLuDCYB3V176F5fPtdS5qS7caLAwB2UVQuLxRC3sJ1DzbwEEz8Umof1q6BRfn7XBygAArLwmw",
  "key36": "2SPHpVhxfnN8R6BfJege7a9HNU1uQC6KFmnHsGnmUEnmSDAtWq8xAazZkHAojFm2icv9HgpBJfjb9NyxbLdVTuim",
  "key37": "124L4bAmZpYdJrdgn2oVaPtE4uLho8NKBHLYvePnbQZmkCXMAgpRwv3mTXVT5q81iipv49ZGfn3NPxVHKYKd5dn5",
  "key38": "65A64wMNc61p8qmLEnq26VHARk2Ydot1oR7xBBXRSgYQ3b8WxYQcdxeibKSwEEKLRwCwXWT4xnZb8PiVPro1PHeD",
  "key39": "4ZB1Ke1rCYX4t1GE4mr3Sqje5Mkh84mKK2mX4jQwRJ3f58zDFTn8p7ZiLdTqfqXomwTJMyNxri2UftCJod8pxVUR",
  "key40": "diygamH5L6ZWTBqxf71UezusAjyrKeDvqZpEkeyESWbkGSuhSjLD8R6rDYoBxvvyfM6tmes1RwbqL1uJStccFhZ",
  "key41": "r7L1SBbXYg3H3pSWASufSGVHnqUKQFpLhCzuhH5PRG6w5fJ4kKJ7cDTZ3msW8woMPf6pjX5Md8PaVVWWFro9mzb",
  "key42": "5wAsfUC67KnE7TPXmiegXM8ZNauwfmUGj38FTxuoLpRVqbCrY1V5dSym3VhEc8LWPxQFhZCzSKWcUNDp7GeGBmgu"
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
