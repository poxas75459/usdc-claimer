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
    "4zrWEsDppW22ZFYowYSguBJ2NMJ6sGeKDfuzxtnup3ETURyNmDWN8aB7Lo5615p9zJG3Y4NdU5kdFa1pWJGDKGSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3issE31yCCCzJB2hj9fEpM4RLDvUrkMYCabfdtZbiD6EJaigydG9AC1tXRuKZM6hq4ZNZwUkkPQwXhN2WgAEmjae",
  "key1": "3bU4UAJ1UZUARacygP1zSiij4L6fKCNnovsSLez2iUthPDQfrbnTiZ8HDrGBkWejXyzpRTQXbCLqQbS6vUtq1wcG",
  "key2": "4PgA79Xsw2F62ySD9CnUnH2oSSV6DEcpoVnaqBaYxoe5KEgXpaqEYkkX3wKsPv95WsYw8YAcafZZSHSbiMeku14Q",
  "key3": "45UDYw1Gq5cNKYs7UA9MapZBbbHmay7Y13dYzGmahT9rVk8ZSbYpLXirRFWi1tZYreEHLgH2zBb7s8jhefEFYVxM",
  "key4": "54uBPnG9MiPyvStdZQnfvahqCgWXTHNzC2kAbu1LskAt73MVJMNdUKLrJzzS8ZDE1jD6PF4e4EmVzsKbCTK8kMEt",
  "key5": "34bvZnjY4i2tYrQvFS8XodmDw5Gd8GUy8kQXvmjX2HmW3UKLoqUgaP5W7jpM6i6MJb6JUZDQeJF1Cxz4Bx5TdAcb",
  "key6": "kimjHaiM4tdreFwiMhhqKmuEGzbNA4kRkuxswysevLD8n76AhuJD4MENSfo7bC1yeJVFQtU8tLAEFmFp7mr3xRu",
  "key7": "ssaFcNhwbfwTNou4Ffy3sere1B45Cr3nNtgZfM58QAUVSuq2tRMcHPEfd7oXqH7wcAcZJTntdhAtg8JLUvxh2bw",
  "key8": "2j1GPGaexea91x4cWsVSM4EQnF6qAirVu9UANfkZStUUh4e2DNzw8w5h8JrMaZsroAnXse8M5Pmv6wBoQqHTzvEY",
  "key9": "2UMvsTPfmAqKYi6AWWZrBuRKrhbyr5ZWMt34RqtSh2XaiYdKsMsXXdSpm7SjbemWtAEoRWow9RvVEDknLB169kUW",
  "key10": "4eqf7dBADhCFUZ9ji7WhNxd8uk4U2sK19qXKGXQyJG6BrDWNSyk13wtk3uwtkmf3kfugidC4WPci6G26Rckfpp9t",
  "key11": "AnPpyzwGSRmP6CL3YvVkWv8MCXVR2AW1UH9KGYMs1VpGbs9R1e6CE1AR12pty59FtCZZxnpHX2njqbp6GNpwkoD",
  "key12": "QkbXeDAWuyka4T7NqgWcAxwiXRKeTwQFg9w5cTb5hgkdzhYbYkL3jSDuTQ8ZMYy9BKTvUDyEYaAXxZpo4Bjnjhy",
  "key13": "32EkubHc76iVCUZ1D6nHKtgvCn91pquP4jJa9qcHVxcStQJMfRpR9ZrTt97yngTFtVvs6QAZL17osF2tEiuanVTW",
  "key14": "5m5u8yrx4ALJECdLVpzyggXGLcoBt6UWBjGQFHuaNi8FTEMdkz2D44bLMvTjVCp1WBn7Vf4PZHwH4uvT1JFWBGnU",
  "key15": "2SsgGceuop7XhWASdvw7ercyMoewo2Gov1xvi5P5Eh7WhiGTqimcQK3Vr4F57mSzEbL72TfuQrCMZ1cZprYMAdap",
  "key16": "4Skm4pGFzJ1uHMaDerDef96hYMMDo1oq3rdAEKsZuZxLEdckbBextjV1VbzVvy3tL9bkHpTVWwQ8eswg4Rroift9",
  "key17": "57BdCGToAzvGGi1nKSwgbsqrTP3tTjb7CvsQR51aebMtcsKc1VYPKYkHT8D1SM9rkMUrQA5dYoRmWdKE23sj1Pba",
  "key18": "57MdXyCkVsPnKc9BqVgfLkkvVmmFEYhzCDi1xMdTUAtHQKETjWPiiijmgJnqJEtyVox3VCTiVyk9Pee1tsTnRGQm",
  "key19": "4ebZ4gBXXzaFj7TBAcGNNMSL7JDi8V2AfA2w2vyYQHMe9TPPPbf2zpCwWnnyWfq2zi25sF3byivcSCKdaewdkJLc",
  "key20": "2n9tUtLbfV7PjdKRTXDtD85jE9VyjJBZ42HXLueu2RYGtApdfvfSWkh78CBGEJV8y721M9ASS6w2pH8GWyKTrbJf",
  "key21": "5Zb6kUxhSPnyoeTC6V56A78FqTU8EZSBF1jWXDJ2PAYUWVrMxTUkgwTBHwpLN9vQeFLKLzMffzwY88JdMTc7z9Dq",
  "key22": "3i32KpgMHPYoimDXNqtGMLG8p9gGkDxd872CSk24u1vR8Nv97XM28iK7vXwehqjBvtNQ5FQwnyGAYLxwWPzRLmA5",
  "key23": "4f5exwBLhBJbDDiUesiuvTKvyCinQ7r8rkmRiiNgn6LjFHPsGWCXxGmPzbMk1RZ4HGiN88AWE7dafCpesBmgDK4v",
  "key24": "5DMuMUbPKQCigWVfEGkRUHGtkzykHi1Gds2wLHCKXh1D91jahAGJvkPXwLF6rMPPJqcNAg3aBnB4n8jtGXFuX4WX",
  "key25": "4H2pukJufrxJtUxXeMCYKru8FKYpm2bCSLgzJEGQagKDnZTUhcRjZfbf777vSuUdCD77feVfvixPzyP17NTT4iW1",
  "key26": "53oFv2VixL5cgvdmxHL5UpPi2JWfKL8iG9m43kEr2UPCQ8dbKww78YX85JPnovgxt1yUGNyR5jXgAYkATYM4kt9r",
  "key27": "3eVUw5ninHu7fm15YcUS53iW9Z34ovnnCY7WKSiuSEUrh8vhVsBwTmb9XpMrYgrrvhxGNMMo7SN6VCqqs5PD4Vhk",
  "key28": "23unjkjZYg7kawXApxx11dAZQkVGCpAqMYzFzRpoR4aEGs9n5mjCrwERbAEkDT2rtGcGaStF7QQoYCXVK16vDWFn",
  "key29": "5GfdDVU19VJaieZEpBGVjipre6bVmGqp3BAHtmDn2KsANWUL2aon46Kc4nFcbZcARqcFuirz3UB58kMrAmu99KVH",
  "key30": "4Do1Tp5tjaXUnyWXFQB6nMo1ojF4acmxRixe1p2UHTeCSkzo9jrPy4M1Jv7LB6fdGPx4snS4byArE5fP1sxyoecg",
  "key31": "8FmqkA7btdrSUg8srr6QoBFuDBhAn6RQS7Mfsca28DG3X5rnLhJMv7nyzbATr5tGLxiAzLVbuzUD8pg3LDtYoXf",
  "key32": "666antYLGKewq4ZLcDLnXcXaM84Lv5LGf39RztZtw6VL6Ac5RJcrLmcMhPCeLba1iwgB4baYtkWQnHJBJkDimapH",
  "key33": "3FdYJ7dtJcEFRyfNnbd62FzDx6bHhekPmTfkmY3P7PArqsiLEuy69BNjVq1ef7x6ePemcPS1YCAB23KDkhE1vHa7",
  "key34": "4A6cEwuu7z8ycwtNNDWMixeDco3MKJ43rRRL3YsHrRm4VYE4rdKwMmPJiYGdMGnPMAFaPfsKUeScXTDRMBdYWZcn",
  "key35": "527Ts5aMn6y7AcZ6HHHoEa7Wk83RWVNijoKXBZsvGuC5EotksScoNVgC8LrzqrmABuBhbhUogQdeLd65eX6ZEQFv"
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
