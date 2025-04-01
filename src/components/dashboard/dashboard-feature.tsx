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
    "4dauZBc6mynqMBTxo2bva8nyD2nDQ6s1E8F6BEsm8pMXpndYw9cYhFGDxcV37HAsFbc2uVHA5pTBcXU3ATrmU6j4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6MTJGkBAersY6yaY4R2VouciKj7mKXC6U7p6vPUUh1GHkAcJTiw3tFfuH5gVDHaB13q6nb8LiWPtYzh8VC3xNHT",
  "key1": "4QxjwjAUpmosmhw4W7syv7huQviWPGR1khxaKQ4ticXdLXSdjjBw1aoDDQbBhbXhbfoppJt9yjnZFe5DAb1PGDhK",
  "key2": "vQ2Gv4b3q9scVJqxFCuGgnRpgfGZ62d3to6no2mByFHTz3n3vSPyz818ZmihEL2UPg8Re6MTH4ndEqpHbacZ3mW",
  "key3": "46HbYRw8f9FDUDNpjbwRbN5Me2rbUzdW8aeWtZSyc71WX9Mkg7hN3mrmS8tiuHA9pu59Jua9dg8f3NuNBK74tArD",
  "key4": "4Ztf1LuHekqLeH5pKEhQiLFQpA4Gm76NKC8jSVpgp7UiMu9qRemzfYdZ7ZiLQoZPndtCyi53E1NbK3qGUyxx3DSN",
  "key5": "4hUdyiFAm1pLyeaditCYWuYzupHMiXr4oArz9D25nRRJt2yCVYVGjJ1so7Y3kzcy4fW8E2NzHtQU4gRivcyNHwsb",
  "key6": "2buUcFy2kV9bfrA23TR7vgfs2BijUYwX6KHMw1f6V7D5bYF535e8XJN1wzrNCr9XMie2xk38Z8VCpVyLPZ44de8w",
  "key7": "4KbQgapxRYPfZg8Hejuf8KNHLC8pYXNAu9GD8QBp5pA9mxgtPGDCQjYAd3MbVy9LfbUXw9PQTfG27VtbxhnA53vT",
  "key8": "44SV49o6bXzSWVFaP1yRdHMQmQqpEsUpxc87B7UyN4zybEequQQ5ynf1AD1c6xrFc1bUuUXW4UFs4t8ZZdbgnxRk",
  "key9": "23KhLuqWzsPGC6ZtK5eydgXQLoMRXSyqK4c9V229Mjm8X29GY7Ecw2uunzAB2m5wh3ZnQatAZSoW3mk66jCyYHMM",
  "key10": "3gRV2ygXoJZgWsK1xpk4UFcFYtPLWQUhVceH1e752yDWQpuJju3A9QGAemCPq6P5xz43p4t7uwfSNjBgxeEgwXKM",
  "key11": "52LbUCw3XdDLPrrY67m1d78hJTqiQ9xMyRxmeH3MhAxxKSnNhEsRNy2fkvWxC1p3TmFG4Mm6JXboo2PThHqMwmtR",
  "key12": "5Nq5NgLHna2ZuE3H9i27rwjL31Z1ECooQXdCRVJC3Sbsy2ESYRVNnMsqMnjMVQENQ8DkVUnc1QNh3TEuwenrjhir",
  "key13": "3KpUKX7HkLv8Q6JfLw8KvMkV9VYRq36qeEs59ySkYUdAjTbDdPdSvsoTu21FroMFpetB7yMtF6Eg9jdLZLCeMRT2",
  "key14": "4Q3byP9bZG2RFSzS2mtzh8qzLWiAatx7x6LSuaobozJAALmfshnEzsQMahW2UPiuXG4w35jhxgnJQtFfxVdjsuLb",
  "key15": "2sE4E6APmbN21Vn1LHWi8NzoTaeNkKnjTbd2CnVn9W8D9p65ijhBnYsQHb6HjLtKA5kJy4Vq24Qf3x6KEKCGxCGc",
  "key16": "5GVRr7TxnnQZ2mtk92Uvv4qAxqeFsiPBYbD9VqHsRFBvzaKhujHLKgU9asfXjG7z9RcvB8XGEKPeeRCKhndxjGrK",
  "key17": "3bSRKGivPLLMvDfB3Xb362h8gLdAHqWud1Eq51Ueed4yimZdAceWFuLxdKsmeGeq5qJzNKDNBVzC7WPbLREomDcd",
  "key18": "2z9BXYRPjbTtmeoVXMR9ypheX4PCD8NyRpezxKss1mvpd7y1QbS3UKNK32XLBKu5NKA7eUD67Dg9LEoWbxV2n25U",
  "key19": "4vgor7VJ4dWchNM571tfnFfnZNza2s39yn4qMqaCmUSAxVQ394H1CvKULK9Px2PdNkUunaGuCoP3hCGGQeAvrSef",
  "key20": "634rjKgrSWzcoDMSa91xnP6XhnvXoGbLxZmcZD3bMjm2rrpBRMZYb3r7gZtnwC4WeNc7ozHxKmjreXoxqubmXD4n",
  "key21": "4zei4CbwRMYb3aTwmm4YWzsEKhYWR5mTvWcJziPywgUQcP9xsLoBNqAqQqsGRcDwWdeNG2jLU4uNHB2VkpGTq8U7",
  "key22": "bM95oH8L6EPYsbH7z5LYqUknzmoKVWFSPJvavnRnwMM9n9X2FbpxuRQpZjPfK1RCe9ekJVTKeeGNQEUZtypR5G7",
  "key23": "5wPLihLyuo995zVeTorRLdyDQNxcdicDx7tUVcfQM5JEQJaJ8CZghEFypDbDvsyXG8GJWyTggf9phMX9oKbLntK6",
  "key24": "4PMRZinuJkELQQ1gcmDtnBrZdVSZt8iai9fc3hSbTqbYCFmbtkLoV9rp5h5w3fnwBGJoAjcMksEESBS75F7hoEPf",
  "key25": "5D9eFRCrv8ATnzUSaEGC1VAWsscb5ZSm4nLKZjBY7NKZ6USCb71oL6mM6VUp1LRt1RugrWNHRpNzNsqTiPjQqJ1k",
  "key26": "4TprrL5bsS4xexjciDkcHdBrTK1HdMUWpdaytKSvNibTbN1HFUpCPHbYZf984qJAcaNz1FwDbf7hx9g333W4FuHW",
  "key27": "2Nd9ofKRk33cxCLxjHL8AHSQ1k5Cv8Kit1RSFArbZZ6Lq5JM82BeMjJ943nDA57ZzUsNjENQsM3nGGtJhwrU2HLQ",
  "key28": "2DtFwSiysLtjDEsaNg5vXoH1DXCiMfz6exBWCegPKpWfxefHwMQ7EzCU8R9oARb6uCW8FYPvwZ7aQoedirx2FzFk",
  "key29": "2NKryGuCSFLzhaihPaZ1NzCQP6w5Cy8vhQaNXvfzDQ6angPsipVKuKGGWXP7Zxb2LoF8d6xhZ85dwaVzTkuLT3fW",
  "key30": "47VLWXVGbvWapU1FD9Kf9hY91tWYQDs2iMcMyodcfLgTCWpeuW1WFf9f9CrEXR1Hym8YNctKbBoQd2W48SSVGiBp",
  "key31": "47NsnkqT61ozWRMxvsusDFs126LjhZXa8bebZyX8eXN1e63VnK1kx8A2zCxms5F6U1D8e8LhL1zwcYCAshaqjNp3",
  "key32": "Lsw3JySQUyujP73B4QAwSM1ymbvd91dLBASqsA8KsJBP6qcNEb7KWWmeua2JEgLHhxNo8w9SBVBhALpTuuaPsZL",
  "key33": "xsxuTF7fcLo7gUzdYmxYvujgJ5NU34sahKF6XUX9hq41agUZPX7wST6AfvJLcc2aV1btr1cEtDLovnSVD5EMVJV",
  "key34": "s3iCr7NG4cCGoVLsmLUfjT61vpWYKCPGo4YdK7RjUqMACBJQSpBurx9fdsDpqZGHkE8R3fHkpkKBBVsKmGJdzjq",
  "key35": "3bysnecRsfULnE7pPjnmcsvTeWr74kWeTfaE8QK9SqYQ6bXSZAoXGzfA4f2Z1Uj14au7XawJgSH4mYpRHN6BjQ1s",
  "key36": "3kebfx51FNKu1XcioDk8jV5H8dwem3hirAbt9QLZYohTVcoUG16S7C2yh7CC3Wf6wqAmW7M9MYRda52VZRZSwAm5",
  "key37": "YLibaCXn816ywsuhYKYM2gAaqPs6xzoq1YsX83iCgrdgH8KkGsCrBAhNzDHnTVSX5SsQxCBzEz3bGa8cSFYmY6G",
  "key38": "3hBjp49ApGnXHnG5ntnpSq3E5dL29JZzhnVUuTEWyfq8bGAwQPvhs1txf9rVL6wUCcEm3YaKANH6A2Bk7J8nBr31"
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
