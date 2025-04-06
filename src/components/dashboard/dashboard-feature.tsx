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
    "37ZszfTDXaqCJe81hXkxbasKM1dnDbVPuu3YLAXD1J1JDiBp4LfUPj31CU88Bxjj3CS6W6JLHfPrTtwusuHuBbjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AMoYxZ5fMLwb1z4eL85o19LLdChAjUePTCGUX46pzTZeZjfrfZqr87XcteYR8dsYfAWgVRqwdVv8f6GSVTQPAnp",
  "key1": "5UqdnBAZXCpvcjWvvK8Aazu2pqrxHboM1RasU6d1FVjpifLXA7GzdK6vv7d3ZqMZas789BiM5QyMiamrpGxTuszS",
  "key2": "36iTVxDZSsr3FdgS1mvJEwTwb2sSDaSQXQp379qMLCHczL5rUHEvxyb9UgiVLaqinfVAoKj7ku5XTZo6GCiA21CL",
  "key3": "2TRpJRbgZmNAP82XLnLGM1DzpRoGJcpZTDsxSbqqTzKgD35U992Ziq1uhLfuBhSVCBX7QQVqhUXWcKdxuzDViDnJ",
  "key4": "41143at8WBTaP3VozwiXrzVEpTjbVsGJJnhNV5EWdJTSRL3CBfYPNiecoDGhZswmH1BYVsZYpyyQWYzwtL1jqZRM",
  "key5": "3866JAbHkCT8KabrprJdfyouFFomtUhrboUPkh76GmZSXfdBsJ3gsDCpRoSCmgLMs4yJidPoFgitJgj3rFmQYNaK",
  "key6": "5CyPKESFSrvBi1xHzzEdtEp66XRcs5dAZRjkZabCFrJBedQBgQhRFBCiPmoBtqztBdGr7n5cijXWE7yk266qy9q",
  "key7": "664LZT3eFkmvsuy98h2oXFhaPtV3wnVF8rynkBaD5ii3yJ2HscWtA6y68w3CvM4naDCzmzX4QZwWg4VQtY3B6x8J",
  "key8": "3JTVTtV3cY6F2LvdKt1Lw5BAnZK4qXESKii7vpNAbwRwaVwtAKxmSGYbETnLkK4PpYAhmidth9DWsnYqxJUFBx3Y",
  "key9": "2erzdbavwHVYFtqWZYqYQBpTQ5xgFVacLChtuiVjUcp7dBafWEwKFG71wb43CZtsTHpESxUqj1YCAiViuofzziXV",
  "key10": "5wRAQ3XgGtj6BH2dihvVHQh5VJzfHX7pLfe1WnS7UyrdqnmQCYKBJ6PkdLu7CDS1K8U399RqHpDLrPKj7RhsB3rP",
  "key11": "5VMz3sbW7ZLyGwsiWVdR5TMzqTtuATGASRRyfoaerB2Y3UPS4yyjTyC5PwdizaQt4ijgU8gcaBf6EUe5xqWNSh8z",
  "key12": "5hgtdN3W812AcpbJH2pBssWP5uyrVqURrcrU8LKsnqKsrkVJYv1RGoHrXEcjGd2ukedkpS8mibRHcWWiEK1aGgdJ",
  "key13": "3UX46Hy6AsrM2wnJUYbxakZZJrSWWsiynvN8QgFuZ9Dez7yKiG12xAX8Uu6BZu6RfGcEyWdf2QdjXmhM5mQYvmBy",
  "key14": "268k9WKZ9S1opTHHa3XWduWZ4ZCZBCKo6udTRcpWxZ6g9QYcZBSveX9HDNtm3BCCvUHYFbQ7FLPEpcKeY8DeUkwt",
  "key15": "37t8Se8Nt5rFRnAq5x2NcdaGDYqdAbyAW9CxHdZg11eDQ7YRQTThpe4T6BABdN5sv3h7RJShRQ9nFCtvLphAPAGn",
  "key16": "3vU7J2N7QE4axYUoLUzPpU8Gpw4DQ6qsep6E69P7GAp5g7ToA6bfusswcfMxisKxSfRgRu7mdvisRHoTYaBew1Bo",
  "key17": "LyifkPCazquFGrcKDFpJ2a8XKuNgga219A7EstCbaACpbGvs6SWbkuRHFvzDRLx92mFan9eicAyx7aU3nG91ST2",
  "key18": "2t8g2T88nNJJNsL8HRDp4GPrM1BgjExJ8SEQgEEBBnS3Sj33RKZ9YWhS7zymiRNNTj8jdPcubUdki4pKt2r7btrG",
  "key19": "3Gu6CHRTVqiFtGebkpMWYA18UumKxpZwzh8Yz5cYmQqSanWrkGFkZiomcTbR4ftfV9YGiwTX47L9nuwH8Z1dBChZ",
  "key20": "3Usy3q3tZEBy6mM7jyE4hE5DSXUKp55Gw6JfcTLcr1ksRz6PVxuTiDs5RC98DW8oaaTngF5g3pU9MzUzZhnYzMQM",
  "key21": "5kndUr7DTmCYCT5CueoQcrEmWFnckXwTV5FqHgEm8SmMixgHcnorUfbM7BVqmumBR1DS9GnLkL7b8ZW4yJkbQBLJ",
  "key22": "5AzVrFxkPFNkELAzJmdA2A4kTswesH3kzAQ1aiQGwsWwtxmXi8jtvP2nuoHSyRGtiYV8EKptemXUk7frr5ePqL7B",
  "key23": "2LxVxNDefEHXfycaEhqC7T5A22wcH96rp94LbGRfd4tyqPSp4NHTimhLF8ehF9z6vkY7De9BcEdk13qpB4FnhTPm",
  "key24": "336W665mXTXkNnJ4paD84mdYPjkfgAc6VVoq9xdPJcHYhMfqouaqMyw9qVriteLJ8xbEYGvsGvMQGJukeG9SLvwT",
  "key25": "4NShtdzwL8LYkAasmLxgdoAHHfKxkugo2EN38cgEYqhJigXvtLWNWMaTiVdEdivttf2hKcYtHWbosJRSUce8UkVp",
  "key26": "2iNbcT1u6wJyNf38k4tC8dmwJp1LJdo5mbYqzTLHw15pkWmDDEZr68X5DNUEvMCf1V88oTt8ynH2dDqCzixUMCbH",
  "key27": "2CmDJH4nmQYUdg6PPj94BjoRtjoJaZsym2vuzAReUd5pTXgJTShSTumKfdCGxuX8W2hJYZY2KLTAQwsS6HLwM6Jr",
  "key28": "2nZN7ZRPU2jNGDfN8C7ahiS5BppV87U4Jfty4wrJqi1vU4Eikt4XSVYbCNWvVi38G3BYhb5sjN8jbmqHkderx5i3",
  "key29": "5Ls3NtfKUwet9pt9hSo3PowQa36BmdPLhgr9u6YMVBHhz6RAkdDcwmzkaTEcZ8SnZXier8R2HxZBALbNcbcspPpU",
  "key30": "5M7THd9no1aBx58bWNbQGa6gFYK1hzNeugUkL4rZdij2nhXMZAbQbDBHtToe4EY3BVj6vyShJDBDXznbewBJV2Uc",
  "key31": "5GqbHqwSQqZHfcG3ZgcMPWUFhQhbE4ZKiBAU6DruWDwHp5eQSNEZod7cojuL1DJ2qe8KwwwiCET5HY1hTS45J9Ft",
  "key32": "26RrKhGSLF8T7kpmYsVd636dJvg6Ko64EgZ4i7mnNFZdECaAfuiuGPhqsBGoYdh3xudKLs5Z2J9b21teWtc7VE42",
  "key33": "2rJN8Uhs8oGSTRDZMv7w4RQp9euzwowuJXhWoM2prLY1bqRuvEZkSbCeBXaCS9pPMHQFT2mwiMN2QT7pSmw1Qkh5",
  "key34": "35R5bep9xyjRWD7WYAnqYwT9UGwouZM531uVbe1TDWH2z6gR2KrVd3rAmcQPRUGbt8KCmg63rRfuBWVWiXFkhfZN",
  "key35": "52UxESScq9af6mne54Vw34pjVdb9oBqhFNFJ22yD5116c8rXVcqgsCSnRk9kYB2JaFWV68UhNNuyWCzjU5FsnPdf",
  "key36": "4q7xPsoHZNaNy6Lb9Ai6X6wGzJhdruR5qPkaMzXTzhTkyXpsJcTkAYc2ReWtYccqztt5KFTc2oK4ntLDaRt9nV2i",
  "key37": "2AZoPREh6tHK2V8t8T9Xj5AaXQncpJZK8H1iXNorpWwHcruKsGKfeoD9CEkR2kQesJTjHqvfJ1jtzi496L8FKCWu"
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
