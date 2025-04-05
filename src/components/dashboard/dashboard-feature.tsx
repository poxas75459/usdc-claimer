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
    "3U35EgRWfwoLb3Pf4QBgMsaAVZayk7SXxaG7vB9sJCpsAXZTAPL1NrZVmCXA2KniDcmX2F2PdhW1SPPdmYom8VoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vKoQf4FcsdXS7a1va8fQPdvT6drJbrBC2oTw9iJpVGhxBKY195Tu8pKJd3mVpCAo7wWxwktq1dU2FdvfzuE3Rca",
  "key1": "2vfxY4Wqprqu3LwTtNjJKnSJJbBmN15os9XtiHnrk77k3uxJDwZcM8wtgt5SRmCvYncTnsZArnkGXvvBtkr8cUuf",
  "key2": "3sMcdcUadTsAyUYLCtkUnBC4LRBv6NJCdPdxMWpwhnMdpRnPSeV3x9bzZzATPnWxxEWWtUeGGMm7XkF1RsndLzJ1",
  "key3": "27EFovEF8rRMWbbkj9Znbb4jgSg7wYCc9oQHfUNcaJS2ETTTwMS7buGYpQywsJSdh1fwppZ8jhXQPQ2QxaCk5Abs",
  "key4": "mAXz4g8eu6iDsrWsjJb6tLAD9jkJ4R1VnLu5jfFCL7igVgx8u9GnVG8fAtiXS8fyn1ciKa7sXmmJgCR6eGDNzU1",
  "key5": "5nQgAEmfTqeXvgGzCyHSckniDRQsZa97KrVndcc156Vsfq7V6yEUMWCxTwfSet9YerHasbY6tbUzppx8uA1Kx648",
  "key6": "4LK7YRdaWN4vBf4wg9ydsuSsbDqvWeec38Xsf7dTRBcfSY6mpTy17SbCswEnPYTfk7dhNAETdmPgBFQnTjrQcPnz",
  "key7": "M4H2w5DLBPfmihbVSN54mRQvp2BZsMcb6GceA9hn6kqyTNr5eChZJ7Mctvr9StxzCtUAWQYD83k9arfncnd5d1P",
  "key8": "dv9Ub93MiHEMt7Lhn9UpBX6W8KgmVpwzahxy8JVzxNVTEgPAWKk54XDHa8Rwf8bZoqzJMZTZ1j9GtiTew4DM6NV",
  "key9": "35WXU5LkaivkAubfZ9udYrYwqeX4PfEiGfF5JPMt57navjC7ZE3NFgsqs7WGAie1MU1j8Yy5UdVUYykXTZHp6gZv",
  "key10": "35kD5PmEYz3X6gNm3oBg1Lu1kNVYNQKMQgJXPm6MMRd4ikf7EE6ccb9BJNnxkmLoBGKDek5CxmJ1f9oeFDRHUrhh",
  "key11": "V7bYpUGTqWaHEsZHpem23YNY4b9rnoA6xack3wFLFX2ktV8qPAfkuzSzBW9aWLZQwknMfzhH2zUKapXT2mnSkzH",
  "key12": "4mfbKkxnQkpoY2gdXiihPH3AvJ5k1E7y21nBBUfabYqDwCyXTexatDBbsKwGbVz5F7tpsNgaVu6nEbcQXT9qoDTw",
  "key13": "2Zb7qXHmwZ22HdGjhaLqWiYQHDzLgiCYdPebGKYnwBeph4xcwH1QCNYVBEJCfxeFJyLkCpQzvPksoT92p4jeHurU",
  "key14": "3AcSCWd7Y6E6ddWievvNujmDrx5viBSpDBW44nguX8zKwTmWNLCJBNYcQDmL9ufeqy3E9fsEpDNFjLSJXm9Fyhco",
  "key15": "5W7bnJqTFvYvD1QZUxjUzMh7xhm75zmPdgPzLoqJzBKAL71YuF8K61eMhM3YMHGNfsdyuXCT7H1M1D8BvYjDmBCd",
  "key16": "4HYsGeGC2d7Z9xGdQaaeqpq79LLTuHJnHJRwtMnYVXFMdPsdA4hVFs4BacR1kSxwuYZzhAHe8PjjS3n6DsAk6f2P",
  "key17": "5YAJ5GRY6WuBmLTJJu4KmCbPVewYJXXbpvBeWRYQcGKgWAHTEZfNubwErQGzXzXZDfX3Htp8F2AnNsNywWRhVXLf",
  "key18": "23zKGSkLs7KYaMR9zyFmo5QemB5kJHBsfDtxTg4x2wDkeempoxDpkuvzHRg37CwJwfPqLyHkAVdLxi1rr7NCFkWa",
  "key19": "38wmcGGzpu35U55fFmKpbuLbW2AT9WJ13mLkjGBJ368XPjW9KSCETX8ZH5mi3tBR7repFuBtJ6VVbeDXbi7LtLwC",
  "key20": "36u8av4gCWYu2CMMsqQUKbr8roA8bWHrjjSuPq7EP7HdefvmeGLBrm5gSGkReXbELyik7pZzt1LMTBm9iWS56cwS",
  "key21": "3buBfPirsrHF4M8KzwroQCafaDrhByoLv4BtrLtNzBnAHp7xHPvxdmkHpRh6EkjyCgwFysb2xhndZS4M8XxxTcpd",
  "key22": "2BY7WfwzZrd935VHavYor6dNx3FCVvwFnG65NCAPYsbEgsDQqUXWA1xg8UJt65vYKDvD2uHnGUkzL58Emc67VD9G",
  "key23": "2GrGi338CaKgLV5Cc5ZcqA7rn3pDDHGaLZtK3Jq2WPU1f5qVnZECkH3nmeFdUEvjVkcLtUBGCAc6y3B3F4QCBTEZ",
  "key24": "5nWhobXzEmtoxbYCibNauXHsXuk9BBFrKAoh6bEqCpNh2L9MkD8FbLXJ11wViUActywzm9SVR5Nq8DgtJXLXBPkv",
  "key25": "4behpZBSVCtE5jnqSmapT1hrnewqc1LSDtQegTUTDdyJS6VjWWwRjciLnKpUHoBCXPcUxCGMcB3qaUtST1SBLZhX",
  "key26": "4VA9CW5YuzNUhwUCxinBfQSBb9rhyLcHUK94KZRLsjsgmoW2o4yinHTqeBpReTRp78EqM1B4Tcw9eV1BwDmrH9e1",
  "key27": "21NuRxJ1PbzBGK99KqbUXFcKVfYFcJWVY64Abbr63tR8G1SNeAic4VZ3znH4tfczcjBReoZA2DYiHRhh1WAc34uF",
  "key28": "5i3yC6Eq5tgqPPsvo3qfL65CxWkAKZdApmxhW2dVdqFaJ7zV4j7FnGq9o86LNykxLUNCHcHyz214c7CuvVTy87KE",
  "key29": "41NAvR3YRKXwFuzSWY9wFWnAthA4yvBLUYmsMXEYdEimPjrfMmKzmNi9z3Zzy6D84Z72VHwfXpGnr2Q9FnJheYJR",
  "key30": "2N9nVu3YsQfAGoSN9mLHvhJKg5STknuUrCiBLzwEhSkswiEz5MdRzUQEUQRXZvNXMDqWtkShYS9o4nBQDJXNpHyJ",
  "key31": "618NPs6ra4kpWnz8KStxVwu6PhwUgmXyMA4J94kenMu1hvHECrj26vWfvVcipgqQAES5qZWoSGkBCj1ZokdKCfYm",
  "key32": "UxP2JNrV8hnGQWjqsTDm7zKcd6Jg7WVbFBsen9B8UGL7wg7UjuiCkGYv135SV3xS9QGbQRk9Vcx6xSmvYMnthUK",
  "key33": "36WHZjHF7x9sDiyYJu66Rz4iNG9EsVvY7d9cnCzDGqb6mY3GuX125DfEcm4aBHcX1nbhDqXpnKE6i6Zo9pSeNZfM",
  "key34": "48BLSh5bgdDD9MjmW6PG8acf16TS4MPMApdNRVzDJi6nu3MKYaTCTRS9ALjd7QDQRRw3aj3p89zZ57C3tiAJ8RD4",
  "key35": "XqHcxNSSdazrV1252M1BY9kR3SGF3jXGqfrGtavd3KQHx88oLaNysVMRVAuHqEodAqyhM8Qt8rkgZLprr3CsibY",
  "key36": "3wobpctN6LYXXvijK3PMCqY4svDbinhyfX1rYymvvPc3J8qQvYM7m3xzkzM3Qgq1YPu2B1jGfqANcjXyF2nCjE3C",
  "key37": "qMHnmAxc3fkZa1wup38P6kbEpFGq9vkzScHmVb9SGBZXyBSo7t7qU4a49w1DcoRuFxsjEr99YSBqJuNG7BEzgmL",
  "key38": "2Da9FgzzsQ59SrJig6nRV3B5imiNPbLau1WsFpCzvyrkvvsQXxyWpTh5dCXQg9Nzd3LZzDmPJfowVorFZTVA68zw",
  "key39": "2H1F4dv8pvPMFJpZ9xhoSsSu6xM4poZQikFUBr5ba4GJ5TDa5f5viuJobnAcCcpPJQC43oHEHUUmemny7bMzwNMU",
  "key40": "3AVaVBoGNK7VDNEdZCLKEm2rYScSQhFTewMfCaKFsG6pzfnRNzQRw1Tzfg9QX9TJgVsv1RnZ4twDYWF8f3VRR3W7",
  "key41": "5cX7ffKKbKegSdmKZ2VTiNEEQ5L8omr9BK5RMEJ6Bi7cL3BcyX8KJGYe9WWwMhkYprhKoHnTPfHFZBBfK6grZ1Fc",
  "key42": "5kk6WajJaeiuiJXLMVKN4jLrrjxGKutZQqqbs6VktsR1MG4BpRE4DTh4Rjuu6epiee2PWmL1pu7oQynszLbcxy8B",
  "key43": "269YEH62Cw3r433HwLhkEeXsJ4ewGd2v8BSBPDK42p2nfyW4SyTGxaiidAabqFBStmtREN6S1oSSHGY6RBPLdSuy"
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
