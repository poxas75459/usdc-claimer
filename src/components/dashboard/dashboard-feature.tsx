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
    "2P7gYsDwBft8eFDWxH97sq1rK5dDaPnKhupwrLhGCEmBA8dtth6obntZaY3e2SwwNp1f7ui3JoLnfBqZzpuDXbL9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DTxJd9h6qE22xeKtRVZxzEYV2TqZVopRfB96phEoCvfnqhMK7WizCHWwCpxqCqRzSqJFguqbUsjmNhM6JZ6niFB",
  "key1": "5WUatL2pcwddgvWkKpSYTY1dbNsH8AEWDVY6FS4UV8HcgX8Nwr756Dku5mYZpGSWPDNWuJNFH9cHtSFSaLnkaJjz",
  "key2": "2gf2CdQQhr3VKbkxcut39kYYpEKKrSAoo2dbiaKhxPTUxf2cLUJLtxtcxYnr1aVkL1BTjofUJ48estvvFMicoi5t",
  "key3": "G6BssyYaHoLx7n5hFAnMCj8pLbGA9MV3muyFSuabpp6WkAfWRZHouU2UpUdktJp6ofLiNSDjshgkbint5fPS71N",
  "key4": "3BcxKzUVwfHEp9y8wxukMNX6TeEdyJ3EqfxjPGn4R4JZqSLMMXYAeVWaQmgoxUsPU1WBitRWzXuFheyBaU5WnRbe",
  "key5": "NxYbwL6WJUA1sNhnk85ioYZcLsr4Z2EBDiKPWWbsCYRU9xnR1tkLyd875akVTpwboEibR24hcfrkLkBaGdqiBDx",
  "key6": "YYbNZtBLPgFrMT3nMnJVoDrVRFfpc6VL6PRWduP19N2dnT7AJk3X4T1mpBsJFUiUL2YxUUEc4xq3DRjkS8mD4hS",
  "key7": "t6y99ySg3EjqZzrAsWiEkHkXj4fDRvM8inaNJhyQXQZLiBpovFsXHTK8h2LEgz37JKR5YAxPzipwPgAMXCLKQ6d",
  "key8": "3oJJtyCzNMGQvwMFkjdp3e2bkqgESBkUmxKLgxSvGGK2kQGVCPGoKYk3m34HWUnkfNCRkEy2nujAi6zVMmjGGr1m",
  "key9": "2MG2abQeN7AhKrKG9Kbdd82C62vv815g8LcHPEk4PCsv6J5VAFaGnZ1B6yVi9Bkbqc7wPgbLucMUpcMSAYmXiok4",
  "key10": "4ktww1adpjfjb4exAdUgbghY8S6i8abieJGs2hugV46xcdqwGYcp59n9AVnECaMqjE8xQL2ahPLaH1guLAfiPCXp",
  "key11": "3aYiSDHDTgLVktWCBaHJNoBcEwuKTJmfTDDV6BZity9o1fDo7oiNnFN9M9eN8GJmR5mbFwEg8C9icD57c4Lid7Gh",
  "key12": "62BaQJGL5658qsycpniQMzVHBw6RsheUwkinVnyci2ujyvQ1NmQz6AnCgMk97jciDspunrFdYUjwWjroKQsLkV9j",
  "key13": "2m9hS452QGV5dNkVmLyrUVwX2nUAA6PG2bdqcxV9sMchCCFNkDT3NqzAQdFnkcNm5eZkNsPr5NFhWchYNhPuBuF4",
  "key14": "AY6YLaHUL6uFKGJYgYCLEpJkwbX3Exmg4x3XfunCUZqHsADxZWkXHNM9tHUicWER57iP1QwHcFaTVyoy3qR1zDy",
  "key15": "z8PdVwvfRWzenSzaSFXmVk5EMfbJhGcFbjJNPACTfbjDLg85JGAqRqL1WgBs81ysko4qTVT3kH4g6bMeZrkT6q9",
  "key16": "2uJpdLeNUXxBLdTkaWHhh5BwBEw6tQZ5z5cycLsh5TK5TKi88SwkQ5JS1nqHSNww45GVcXiJBhEYSQGZri6h1cFr",
  "key17": "SmyPPeUZFo18E7iM2mLkvt9AkCvyj8foc1P72uDCyms84VGEdTST6ZEMXUX8nWnGBXmjf2432vbQmqTwU8QmiH8",
  "key18": "3q17vr83hmXP82t1K6bRkW5Mg7pPudkVyTvF6Qc8GDZ4B2YTfvDZ7Ym27ZXJx93FjGeBiZaHxt5LoXhMdYyUAFBK",
  "key19": "5yB9ngd7GJJxAHSJZasbJRRKUZZY88Vn8xGStddY2SBkyS5JtLjMeSjLyYfVHJ4WyH23Pn7VZaJg543vKy2pMJoY",
  "key20": "5p7szLvfqexy34WCYWoFuJqh9E2d2DL6BwkAmLwFEDMCnpDXYRsTXZBmBugd6yTZEghMAmBPjGeScwy5YNnkMtcd",
  "key21": "64Dimth9Wr6P234TwWmdTad7LfBKkicxuRLUe3keMb9VZEfvBh2W1GMpDTyxsCeVb9obk4bquKy4FqmtM7xyKt73",
  "key22": "EMQr429kQqQieF8KRtdm21KZ2bwSFrTWRhTqxK1Vmp1abU8ieNP3CQNxrWkafUQ7S7gbhL8DXL5fMvdcV6FzhLY",
  "key23": "3xqrySLUeW7fygQyYAitgCbfFrSGzmwY1Dpx9mzp5dUknuR6qyH8XmdTTuHySTerZk57RumcwbBWoiMGMUiV4BZN",
  "key24": "3DnzKwFD5woVdZeLehwyb9cMgR9yYDwtftuAVwNkhL3VWMsGqYzdyb7EZAzrHKARV8Hu4w2JzzCFes4Fh3xkAmyg",
  "key25": "4kexYciLT8WTkYimvoHbUA9isn7Pdy9WYY79EQRxB3fjQvPPpKy52i6o2wYFkLzHTKbdZ4eSN1Sw6qN2x8QAhU2H",
  "key26": "2RM2S3eSW7mmdLeNvUraZRjyAJ2GLTPkNXciWMarFjfkwG2ainVhYj4B467KG3cjBHHQZpAm66NJtVTzaw4TRyYc",
  "key27": "49i8NVfwsd1CnezaqRkzcu9qHngxLZEDaCzwewqhJMdEAGRQuzX8jJecmPzAwqWpckkpZky8h5Jnm4a35L9YQjKt",
  "key28": "5MCAYPpGYAVYQrDou9K1XcY7gWxrQr5UdVUzxWYYEz6UsionQjFr2ckH2bSPaMmDCZ5fcaMMcdxHKmWgv8Yddwjo",
  "key29": "2rVvyPYVFkMTmGuUdfN7jiV5ZXVALdDjk74SBAdMZx47dQkeoQdWsG1VPMdD5YboajhGEiqUU5oGC75Rspu5utME",
  "key30": "3bcrSrzfPdk28kL9yS4cyy84pGiuQ7feGxZ2JRorkCHKdhmFGmDFdxMFc647RAGR3Ab9gejPTqzuG3tZF9KxGt3g",
  "key31": "4FL4jNWENosvUXH5b42QLgdNttWk3thr75dwgc2xLDjxVMgTbdSecumDK9ydJAJc5rvtJhXBXM9puFyoMFthpDnP",
  "key32": "3AwEHrNx31Qzbd12qGPockKTaaXZ9nb4j6qhCCCzUfaRguVtkTLkqY69zSKvEhuc5f4tWye5tbRnjkAjqphj1zo",
  "key33": "2kM2SgK8JH7P7upyGCQq8Ldw2BYkFDRc2TRh7HaxvD1eC97jyHASh9Yjzk7779SpBcah9ALifEttVABVbKkiod8v",
  "key34": "rWtUqRMXZnEftkeCKvUMDZSS7BJWAhgjLMdSghFNt7qALLRkd8dKZKedJThPg6qu6jr1dNgVCJpRjKCoWtnSJ8h",
  "key35": "2qp4D2DH1LQ3jASrjUkA9n7PAhQUrtGdKhtqsjHvaXcpUZvJuJVZuCWqnbY1fm58J2XGZm29w71TiXdNaSLni5Xj",
  "key36": "5MTGg6xnhLoNon2nmpFdEn6XwqQgia4SDJeS58eAbRtjBhUhATyKYRrT2VjEiBNgv3zneyhcUAPFHvF8h6XjJoDC",
  "key37": "Cwc2PbgS9FjsJypKj9eW6r4tAyPmP9Xwp7jKRzk1s2KTCmnAk54UHDbyX8VnBhpXLi4YHeZftWZHEEVMfmEvtPM",
  "key38": "nymqYbHaMF66i8LNk5zG6TWxwfKXWHnZ4qFd1D4DsaNz7miQegWsFSVqeugxds68n2yivdsoMKNztxZRA68FMxe",
  "key39": "5uv1avQ4cFqm4FgZbYzdE3cp4WsA8nm9np1Pw2PNEq42NWtt7Fn48FN6HzbAudxSMyoJ78NNLQHPuNNjGHzQw8wx",
  "key40": "5qsPeBDfcEtWcFU5E4c2D4qUeLQjYzuoNnG5W1yHHjKxaKbrswRgu2vgUXQngQUgpyCp5z1K7JkPyy9UZVfYsPq3",
  "key41": "3PqZNCVWbu5C8UFAUsRjdxZhJszsVti65madppomUez8ZPTKkAw9J2peRpGKBL1d867pJ1xbad7aSZmemrbbFCvV",
  "key42": "33aqn2NNVkvH2KPpEDHxvBStYm5j7N7Q1cJaxqXP6q9nZEFf7PsfVyHBs5ThbzZV9vTEuFRwoqDFcyAVx6pq7JBL",
  "key43": "4KiHoEcDWmbFYJe8PgE64xX2i2kLgnVjPjqSuvcZjU1BBwu1epC1SuPZVSFR6rXE2CauaTA3qmwHNLo3VPyt1ka4",
  "key44": "2ozA5MZZ5k2JhZUdFAqu7qu5Vosqs9CD4NLRdLrGYK89b1AaqHyJCsUbsgKgrSquqYzvxyf9bf2m7Uauv3Msiu4z",
  "key45": "3S1LF62Wdtx4aQ5Q28bJpPZnyXQyFLwEP8UvgYwc9XY7UoEcJx5NWD4Vm6dWZBZeLJMEXCR3eG3j3tR39pX5oWTe"
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
