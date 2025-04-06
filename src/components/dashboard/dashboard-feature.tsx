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
    "4Fo5kpJFgvEh3xm19vyr2j7gm1qqYhRwWAZDQHsHdvsM45azf9Xoe2cWwggFrqfpD3V3QFFTo1ACBiRqx6WjQDhh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j3oq5WjwfK531vdSrno3EcdyUaqN34f8s8NtEC8GEj5dFUhWPWW1oBUWc8cGENoHGsr8w8Bm6z3D6o65aVVZjHS",
  "key1": "26myL1K8Dpdmavx7SRHdaTuo15t9sjDdj24qBmBrcrzPdDzTvWazwD9QEQkoT7DpA2LBz1ZBEQwBNHh3k5HKeUJ3",
  "key2": "ignWCBe4E2yMuYkxphto5yLwSUtQZqLmiqaervhEX42MH1gvVbrbFFPWZtWbR6U2KsHWCC4m2mUBHGi2hyaxC5a",
  "key3": "KpW6JVEofajNXWZGhhmsC7FUtsEkEsQtu6faNLJ5WtJADQ5bt19H1AaUEXQ4XgQG5WgjQyoNBi8195r1dGzgr4P",
  "key4": "5tF8ALTDGpKh7sfkX3KtJjadQf67Snz98GA4chRinAX1W2YXvFMt657zNjZeS6DiT1ET3vvSbLcuf9owi6effGTK",
  "key5": "3vYQHZ5orpQL9iUA31AELgAGYadn9P46CcUjuMbYUXvCAMdnJA2rC8XniEZMVyM4ezfevwWLBtcBXpUDG3uwBD4c",
  "key6": "4Qyx5nzfUWX4TfeQydX81cVurBBc42rAdcGyVPFiWQT4GjidEBEXJ1DCsViK9e9BJtNKEtobEJy3Cydb86zo7G7b",
  "key7": "3R11PsFiVgN9MXBWxnbprpR2rAmxzRP7Nk5Yk6qErVw4BftZUrPnDMZuFt8x5Kfb8yqR4PPxhxiR8WGWxtU23nDJ",
  "key8": "4aEEFFbjCUPDv2GknREm7k33QxxJkGbkFV7KaERdrj9SRwQ7a63xFJHQgMafp2fz1aCvQjYDJf1H1N2g4C22N62i",
  "key9": "4jzSmUMxWjWuZSbmG1TJpDWokAub8S5XnZNbPzdTms1juC9hjiFsiuvN1WFbpjFMCFFEGCXM2HSNWtzXFy8FEXz1",
  "key10": "3KyVpdcHAMovtNGzuzZd9Jd47HSBLfSA2fN3kKf25paEoqs583Fjdo3S9PpCvYzvuAArGGcr8iJSm2SPqMAqmiKB",
  "key11": "py9i2iNiNu4B1MYUhpW6FVSBw1NyFZ1QX2Mgd9v73zvug5aKE7RjYZSccxXwAR9FLiLxDe4Bnk7BEEseRKBXztL",
  "key12": "49QHYDMd58WqoeFj7YfaHvmacjZVZvbaPWb8gEP6txFfwkWe15yru5kCuHxQipnYVZxDfjsyXgbuVoP8hwFtA8G8",
  "key13": "vyjRypz8AGwsPHtyuwWq1zSKbg4T8CVYL7phb3SUGGDUGG4tRsZ8qcmuEbCHmqTxpYcbrv8K4fbvtviGjp9mUyV",
  "key14": "4K88eC8YYkx2K5h6JTa646fpQGUkMCH9NDeBhHrBwX8T8r8DSfeusJeSzR1AreVjdVz6uy1LeQhESEmhPQ7Edb8V",
  "key15": "2BwFuKQ1mbUHSAuwUE8ktGDd2VbP4J3RLmfZ6RWjoMiLNMBbhA5jFUYaAyFT3T2UtwVV2Kwgw2VJWyjuXq4woC7D",
  "key16": "5ne7kkAuAaQX8e9HFauyfiSbiqWHi7nBEWvjYwUUJcYU2z97qDgzciPvVaHh5qRZqRdvr6wBA4wxEt1yZjwXvqa9",
  "key17": "JCPAcyphdMjzQmG6TKAYyaPqriCsh6HReWRHzqXLH2GM8s8Dv8ks65V5ygXhHTTGXVMYywzaPWq7caf25M5wwdM",
  "key18": "2wTw3iYqMtaWbcqu6NwD12ejcNUdpGrbE8Ht59ciQxpQMCL55dX9iibHHYiTn3i4sRG2u5mGE9TdgtA8zSY47LzY",
  "key19": "22SJR3RGSg4ARwtaiQkVQuHHsPj89JjxFRoHNoj3njjvk6THWEeBLxFu8QZoZ2MSfxjZZvg68nv1JjfGGSECCEh7",
  "key20": "2PzUmw1s18UT1SYE7jrPb2zEss1TXjSn2Dc2vzWoGvE23VuYhhtYUQfxKXijhb2mbPfT4uJBjKw61cJBd9MHgqL1",
  "key21": "TBuUaNcTjENqbWLQeP6EbGQh9f9zBJ5jomKrQtepwokVdxrtgghUkj4sKpW35XdP7qCdfik8xFNB1fDpChqoaYH",
  "key22": "5HLmE7yQ51rKYHA4k8MrBkgMd8YTCknsHqRpQW7Lgri7fhD5CBgG21haf346ZBvNkgazqgRUgrSBtiYnQHWKiJmT",
  "key23": "3KuZ4Z4JE3RmwJ1mNF9stjKjVJPDpxcDXxyAxkwwUccDpC3qgvvET1jjWww5C5xsXb7iJKgzKdnAZtzPYjGSB8vz",
  "key24": "2E2pFgzwVNsSc7vZPjpFrDJxwy9pniqndrSbQfqMvUe6RKGwvSNfhn6hmuoW5WeSd8QE2LE1ijo3cjHNeMpXbLAT",
  "key25": "2Jk1CzPiaie8Nnthc1ow2fYAvAsjZAjJakBxKaXiaFprYGfvREFDFkAVhbnDDSVdF4qBeYRRS9GZTkewBUpuifoT",
  "key26": "3rDwPHbXzwCETs1DoQqYPzxrnDGFSRMuNfacjKdb7PuPGxVxtLX2pUZ5ryLqzi8JY5Cc6JQqvZNNdssfkWBupfis",
  "key27": "2r2zitpPz2Q1dG7jKvGRQnGufSF8Dmwmsm6f73nAXxMP9NMAmorjzp1UMtA6g6mMgLeWxQm3acCY31pYoUCnWPtJ",
  "key28": "5FtyhhzFdYQ4vWnzyMbvemTLwiyFA5bMj84ZUStiYAP2EacziUyNJb5XdyBdUwJiYmSLAHxgh4VCQzAzzhc7nrRT",
  "key29": "4StUHdGYy7poJv3bn3cXL7sBWhn7cKc4JHEZrY3fgTgF6H3ve39vVFVWfB9TZYFxfapQrZAnoSbUpLSwxFZPPzuX",
  "key30": "5vBBk1LmGG6Pn5yanXuYcspjF316oQQSWsqZtz4QVDCLBaVeSR9ihAkduCLHQPDR29mTFsNnJCcuK6pMwVAKSk11",
  "key31": "4eKGrABcUG6QW3buK8QtemLLhsGVS6WPZvsMSkpgSjYGCon599VFMfo7b1u5Tn1GFmr7xNDVu4jtZdHTDXVNUiKc"
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
