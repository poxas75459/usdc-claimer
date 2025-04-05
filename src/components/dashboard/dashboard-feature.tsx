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
    "4pcj3L7ki493rdGx1pm4ezGuq7c76JEn1tRrQdwEbypeneriB7ittebetrbXCCQsNPYAzTtyBztG38W7MuoKXjC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fda6bVwYTmRZUMvBXtTraMVDx2HUmyuBtCpWnVWcKrXC7WQi73Rx4vFV4YysqsRSBAniBGMB5Ejc4M7CLDAoUTX",
  "key1": "3vmE5pz2Pz13p8uHLoLmeQKs6wLuiWCrTL9LBTLkW9RKABAnLR2i6hdQu9FM6kLST4NqDEKVFS8sdUouXoNS1enn",
  "key2": "32Zmfw9hSXvGT3VfYN6AxQG4FN4EaUN2SFdqNdLS5pR7iZY7GgSoJuBQbVs2BUGfNsH5oL1jgdD5mzkXWo1NQRw3",
  "key3": "2fXUm1LCi6MdUREcGo6UADyg1rLVYSyzqptaVMP9DADyD7HkkEnT3Kd2gixXcjAcaMKW386fE6aDLDLweLZcZPaL",
  "key4": "3UsX3TV3JEWem8eoiAfcq8q4zZmAKEth7bZ3pp1CXSJM7Mpuqs1JzRmxZXtY6V4F4gYhUxhwD4J3X8V2mgzo8eZf",
  "key5": "2vTr8q51wvisJV73nsszSSzRfaFg7QLgvEYf8Ueb2gAcoH28QBZ4tHsQosKvDDtLwnaCB9ejujjiBWpPHapTHsLx",
  "key6": "cwsjWUcXq4qrJnvXNqswbvCYq4QxhKzNRe1BHxtWHg7Zrah8RJBi24CNgdpfd2Em95BoPLJf2XBF6qST4XfC5Xe",
  "key7": "5f946JYZBxUSAgSqB2WbNSsGeDV2u9UroE6U3gZdQW8MCSQxiuf71CqV3kgxzawpq3bp4GEYSj1UY2uZFvfoxwn9",
  "key8": "4ECZdB6CrSeo8P5tVwfMKUvqoc98BWNzGCbwi9uAyqiRcwo3MHeD8wm71LX5fR971iLY6wnfjxN7NjYm4frpTo7h",
  "key9": "2RiznW6sz2UwegVS7mD4TNsV7V54gU8pjsPv8bnssL633ANf4P6utwA7nJh7YUTYy8KGCyQ1yPJq4J4aW4LzNFg",
  "key10": "59JcPm9sjbZk37BsfCfSohEz7vREC7wqA97bGfEfVUPQuJA2AfHfGqAZeRFPn447aip31PJdFJ6YS4BxqqkVfTq2",
  "key11": "2sxfrEfj8PZXfLuv1YCsR3BJ2Qv3CRPFH6Zo9rvSHvt9NkYdGFX9afoc2ydkEkjEiC7jKVd5p7rrEikgcPJi49H1",
  "key12": "373h3YgNJNZZvnsiB4juGouKWuHaqjdEWguRuCchCsxthDfpVNWcwmPT1DNGAJiXEjKCghQB6eB1qxZygq5gBUDL",
  "key13": "3QG5NZknyUsr8RtmxB891H4naUwtWzA8dZA6YcZuvMDuC89SNBuhuQPctJbAYkKNc8gmtmED4br2XFAhaegKm47x",
  "key14": "2cT9Yiu2D17yk9jDj2y6GPZ995x6RDH22q2HHE9YtTVMNZtgAZ4MbTJuGGco2sNmhjfLjhYHYa8KyBMVJWzvEmKE",
  "key15": "tcAKbsyekWbk9S7mghW6AmEzLPzqAx4tbw4PAgKPVDESYRuMbRz8dfjn23C5ixN6grM9CLbSyWox4g7emXyk1iF",
  "key16": "4BzJYfAfseiqWBPrMciq2kZaHuV6pXuJGcKyMXAtR5hkQQhKKKufrZjoqNLKPhkVMtG6ZGEgUkbcsULQZK1RwVoq",
  "key17": "gajZZG3Czx5y2CwQ1UcNMjif1YxRRBuQzRVuAtyffJHLqeT5jcPfuraxpqLJsf6rwty6ZCeorcM8mHV1f6iGyLC",
  "key18": "5g3Bz5PVdpz6YvK7sVCn1BgAchRBbdb9wgVooH8ZU1Nw9pNkoLSRXctDQjJLAS29mKs8TAcgtMwHmVBjETuxpUfQ",
  "key19": "UuexamfiyTcC3qTbE9zWi9enXcgdXeKppsxcNxeT7iJz5f8eyknU4Gs7rNZteVhKqAa6BQPuHwTRo1foFdWFash",
  "key20": "4u2WKqGwKPLQZd9ZbimoNnV8wtYBayMuyeRwy8hUqtGmQNTNbYXPurstF17haS7cq1xdHgHqYpXDqcev1tUhe9W8",
  "key21": "2f4a6zfheoUiqshEJYvCD5YqSAYK2QfUsf7cFacXSacHqAB2eb6aA3hLmdKum2vBszRpzqq4XhgM9q2mPNyoVDQH",
  "key22": "2YKzbnnMvMnkzweRnFuMfhLC6dGzRJnfcXLY4QHhAaWkDxxxig8Rvhd2PSi9H3BR4vrVYvZ1mvyryGCSCKMGpNAQ",
  "key23": "rkTUnNvasn5cT7ybTSRPQNt2awa9cLggnohNsYWuBS2zeSEGAVtSwtpevYKXseFDT3aiJMAzcBC7awnbk54jUqC",
  "key24": "4rfDQ5JH2HK3eriz3bubpvHb5rKC7JGdXdGQSZLvPQFKis12qrCrwoq1xZQfF7hrkGCfSPdUHi4tVaELQpo3fWeV",
  "key25": "633qEsUvp218Mj6nEXnBAi2BUG3AWohcma8annzLgC6Ej9rZ4S8s1S3sFZhYQHHzz8bYLW3y87S2vY9MMHGoAyoJ",
  "key26": "38DBZHRnVqDA4EsrdeMHtkXfbfCChNT8x8NQqStwrnR9EXBS7zXnA3LUwZMhMsP15xgJRgeVQwBRTwgof2d4mABv",
  "key27": "2B3y4prdn2W9nq4gNptMMicLqPxC6VRhebiTjmYWLvnRVbnrxp3d4opJQBr4dDNzHMmE3TxxrtxWHXhvZkKEn3mX",
  "key28": "SKh4RzJSFH4XhKsJoczfJv4m65XpWNBC3bjUXK2ktKfNWt5gXqV9uzh5kdmWmqAMeB8RbYU3n3FvydBvAR1DqYk",
  "key29": "3LB6fXRrfKFtibPoYtqCSFGTuvm4K2HfZvBPBLh2nMLo2s3ECQEvJ318rXUHsdU2R8DrPQYS5QipCCcrr2Su4B87",
  "key30": "531g63wF1Pxu3sGw63mkCaW1n4oAjXJFCtieqsJoCbpV6YJFkyzY9h6NbwvNUZPYU5dUMTVzgVW3CQ4KCffy2VDs",
  "key31": "5FK1RPA3AQn8WKxfNTfB9GCTpKLXJ1b6hHT281hAmWEsa8gdaPSWEqVcYZAFCfxGw3HzoH7hCn95NJ3v2KP3hwgg",
  "key32": "33fS5Q5MvNAMEmJ1X9ULTqWTTkS92a7LNG6hZzpxE7YsG554wA5DeQqti6mLHGAXFZQnwPCurS2u5AokHDHpCNMz"
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
