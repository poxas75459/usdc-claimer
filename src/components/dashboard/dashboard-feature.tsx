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
    "xtxSpJ72ddUHWP4VVXtwPLVckyTXerD2w9N7ioa56AYJC3m9kk9QKUDdGzBRgMo7f2qPE3RmQ4RwL19ZrtDvZPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b9HjF6nZnGQqHouMTBN7ZhA8osNKVdUiP26r8buHBbHJWsG19EruxnaMjAsQL52FL3UbWQsrwAoB8FnDs5UvTwW",
  "key1": "4N3SsJYuo2FBjG5Xcfabr5La3836pk7B5noAuWDUSEj4Y8A2qLZMiLRjhrgdUEzwSAGfK3GxXSWeNgKwBWCXHMm5",
  "key2": "ffmwSr68HioD9ucmjqZ9PJ2KZVRteKCivdcz324Ysa4r66aZA1SKnGdKVeMbzMQhRFcMdQG1S5p2BnVwZu7jdpf",
  "key3": "3oZu5DFMsScBojTQUXpyZ8qVQr1bKg6TGt2LtS7FRofYZdG3aB1qyFWqADCiZtDGDo4D8PnJQv7efkfc6HuWeVYN",
  "key4": "2UYvKi5jDAcDZ1BndCWg88LPktRd2ENwanrdFojSWQsaxZSXc2qnwLsGkaSWNTur5ZyhKa1hwZQocjP5vaBRWzB4",
  "key5": "2MtP1ozQbQuX8au2L4hTCPExdC1Nb8LpNhRYVENUb9inVytVMcaQjC8Pbd7P3iGvuHW4bbZ6R33Qo1hYAFv1kfv6",
  "key6": "4RdjmNdx4DKvTMHyXoAwz2TVAWJxnJARL8xRxWKy25eTBgcRSJm56ZceV26kjhAjqmuba5YVsCkaoGnUoW23jkdH",
  "key7": "3syMEHXwS2VuXft9kvw2pevPhQfFkX95axE7W5e2MU1utqo3xpGEQLqNYYmF9QYHctNTDaGyWkU18134oUvLFtYT",
  "key8": "35XH68JFrrLLL6iCDzDR1i6VT4N29t7eL6iicJmKkDmbvvFPRqs2chRp2W81d1enwMc9GMaSwrx5Pa82kHCkzrAi",
  "key9": "5294itdpBMhXiB2giyMvxAKiKiDSgBt5gKjCwP8xf78fkqvUeqvFaBxmrZcT25f7VC6GpL3WdY9tqMnqyYppJqDj",
  "key10": "z9wxru9bbNFZ2gTTB7NGKViLyuhSc7rJpjxnA8ZYSGW3qzkAAddTzM3CrHQMQYzxpDhBKyH8knaQWqVZWor96KB",
  "key11": "iRYiMPNxS6tC6jqea85NLCiFo1G2HcmVwhoVqT4Fn4ejDnsoVBhTwTdoWBsCSa8Ub6vhR1WLeowo29ayUQtCuSk",
  "key12": "67F6sYikkC9jagqya92r3F77byWfoxkEHgWF4q6WN4C56Aa6s1sUVbWpJg8GLqFr3LUGkUaQcwiAPp5dHw1EPNsJ",
  "key13": "5jBrhhoaqAYPe1XtLCXW2pGJysMCSkfpj7cWtSoPZc6oYknZdbveRRGUzoqUSyhT9wm3D2wXTokWqiqNGAfR9vAM",
  "key14": "vNWjAPBJKE5E3vaBu86H2HJKZjXZYkCACGPuwR7KtJ81gq99aSw4A9oqcnKAGeZzeig6D1fBzXoeEMGqfDykk1Y",
  "key15": "4wD3H39ghZzHpK4zSGjyfxYTKcFTi3SfGWJKbBvV9NVrcevmTPtjkuwJFKJdyFgZSTHGBy2GZqrr4RjzrCzjPZq8",
  "key16": "eZxwLKKWEMhebFKPyBgd13DtDqZnsxtkhouMe111GadsMrJhb9v5BGAeDjgaVgC2fqXvRagAyhX8sTFwUvgCbaL",
  "key17": "4tEzRFUuyVtp1jarp8Bmsq49Q2gcmARCvqPyL4E9cySfQhb7DKwAuycQuQ9qe5KpPDniK3qTYxeWWjPtZJnbdzk5",
  "key18": "3EMEKqoiGN74qtba72AAzsVXg16wmVu926uQuZBDoRLknxFvGSYpshgu3xZ8vbBEKjDZdmS5LSHv6dbaqxRwJ56L",
  "key19": "4LWVDAK5C64sgCUJgtUmWHLeWDvwJ9M77kZY1siRzAfK6GizMT9iTHHr9L9nzJj8RW4GtUB8C46Kgp7U3wVkaKhF",
  "key20": "4W5L5N9fJJoeeHcLawUv21g3P7JyiNsqc9tM6oRQWZd4JKmBZaLAnswYaLzjj1jBMmq6GemsnNFzGGfpJkMYcAsa",
  "key21": "2iSryMQSMp4dEGVpmok6njoCHVkBMyVCzAJx6db2prcHS5EoSJRVgLKUaoPuNLQ82hvywjytrbthkoikobN4gzgq",
  "key22": "3zgujuvjx7VWdWCNLypLbUo9DPYaUBMMHcUnHToEQ9Zot6WfP43XJiTZGhAePZ8Jpn9DH95aKxzfDNAKKGUfGuSW",
  "key23": "4ZsbUjDxNfrVdW6q9KEMGXUzvCqD7gxAectU6efzLdvim3DAHy3yyDDcqko7pmrAxopr8ssHcjoJ6Jw8vU1MxmW4",
  "key24": "EL73QtWVntEKVgyRdjBFnQsxik8qto6X3uLWtSfrpySxAP28s9UKZPikgkAxMFVerfEuCdFTfXduJpUsiJd9SRG",
  "key25": "yoJceYB9p5D22TLw2ie4z4XscPmEHigXqbR44QgNKqyFrorVvMK3oTscfmEf8d1h5J9cUS9qBZJX9GZFmhefB2s",
  "key26": "FzVX9K9D2Z3FCFssCRDAgXGMwQtqhc1XtAZamGufXgoDJZk3nEYab1xdibZbJKBsj372we3K26q1crMSGPKv4bb",
  "key27": "3SBMgLNvuxfwy5ACjXqLjzWTx6NXgM7TNdNj6MzBwSpFWfUpjERHyb5xKFCb7vWQhCf3yzbpq3Jzm14zwsfiZVtk",
  "key28": "5z5aNepdMRrZeLy6rdiPzm1CCBKP3P8nqz1M5p89hyomrET84NPtPG5HpJJfwVrMaiikvughoa5A4B4J6mh88n8e",
  "key29": "prkrW9RvV1836yKyQzBy7ZsPQsK1yt1gHrcLHAdxjH4CaFcBqJ76VCsHkR396HLxVn3UB4Um4NTVkrjh2DBng8K",
  "key30": "4o84gr1qM5tdxPkPu4EzBaBLu98eAyQUS2tTMKhvaPuqUNcpQYV9ZjZSXMQhhqAnPPvHwksy1bTpEStxEFVgbZG",
  "key31": "66SXnzPZECyqWcqeTeyNmYWUq22vLaGPpBD593PWNzxgEietxuH3a5cuQyGhs1VtsSWJh9NvfuoSoi4kZVFUaC8b",
  "key32": "2NaNHLuQZToS4Wk8HDZYzg8K1C9HGKV8ehNMq6D4qCdFJo9VoE5zx6HPEvbnCoQagbTjdqAr9CCCBVjSyEWJuKkP",
  "key33": "4tT8N9DDDNQeptN2C3sCYEQYfo6rsAtMzMsEPzRSn5WXbVEdufZYQtnadhMjsTaSewuwuYuvDvS76UDu6fCmqcjp",
  "key34": "4LyLppy7TziRCVsxhVFD7hb13MkuPs5uAEKZEwNLMX9MGd4eppxtaAz97Uai7jf8CQexp11z546rETdJWX2W282D",
  "key35": "49PWVNZXDsteetwLcvAzeC72oZSwaSHQP2RaPm3WiVi2KmkvbnKwn6NqcsN5fWzWjhKXZ7DKGFWMgFNr4Us1z9Ui",
  "key36": "vno1atk6MbCisboohKwUYXgpx8zqwsbVAiMsbdUuQNdMuyrMqJ6cEdoghj4rKnqprVEj3QUDQAxUHAFguffCLQW",
  "key37": "32xgPk2M3B6qjnugKBkG23Bi2joK7mVXBzFbskUVwD2WKrMsrrZb4jEQCgTFiH4aPf7CZKoSxfJPtefdoLWmLztx",
  "key38": "Uv3HQAMu7qjq11ztJqrYjSW6EwNZW638BTgGEc4hhLpu7F5ZGdrcBqwefu3oeyevqiFnBydkEkuFZrN61WrvNqc",
  "key39": "5uSSsjEPyzm1CQCMTEp9umPoVMMKc5JjMHvihJkorGVwf281cVRyxZ4anB99S1kPBi91iy9MSTrEZrvfZw1y1FT7",
  "key40": "2t6vGPdcq9DCbmnBdMbURdZQnkp7rNSKixgxJ1VorzrDiR3pxFasqDuGJS28YS5VMhJqoCR9SSzcrjuQY6AGHq2v"
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
