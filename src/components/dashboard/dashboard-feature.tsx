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
    "3nsfC3Mf7QD8BENuPsP4RFG5uRukDgaNqztZ4TkNH5NYAgioYbPhtgqtMVvFKzUXFa3GzSSR7LkAQ8E2oGmWfNJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pdCNsMHP4NDNoizrmwYcMukgBznUpv8zExya8gEvnhLs1dcRs6XcZAPDKwAQ1kkUXm9MYFmf444rheN82qkAYbw",
  "key1": "36VSZdFPmqqn53CxRoLME5z7ku7Xiu3cRMFeDuCtA7xNNrrsytsn2mRPxbSbd9NsETQ6umGBje584NTsBXqcuwCV",
  "key2": "4DJDswkhsaQgURwXrQG7LWECoyXddzJjYcFJDLWGjZqpEcvytWYzDbF74NUjxctTrLpaxgnKEqLBS8SPQrCJzgei",
  "key3": "5FARnbPgnyydXizKc5U39jF6so2Yak3xwC5U2QzNqFS5Ekg73TEmykFxoxjkyfgU4U3YU95DdMx4sr5JK81v3wC5",
  "key4": "3mgd7z5gkKnb84L7oxx9dcTxajwUnEQUHQ6PVqLVTeCwdHa5mx777eaZZ3JagNVn9iwKCa2hKya5jrEGFjNU7rP8",
  "key5": "GFVT35vFbGMA8Ev3KzTP2zz2K5FX788FdvN5YCArUoGzeEzwbkQzgu3fAQxcQWQ1uewqcRGv6BBT5ze6WcTAKUm",
  "key6": "2xYyW2DrSkWWwdDWkCT5D3Y6yNrx7mdKsryAQ8SMWbecBNtjcvqd6CdfFLxQuKhvntywFN7NeLH2awUBMFaTHQec",
  "key7": "5HiRAWCbkdbmyqJdD88rsKnZLPhgNf7fyqTZoXJbVCwUUdGSNY3eNmrrsPvyVbePkLChJAP18ks6myJ1dfvg1yEn",
  "key8": "5qUh6xaY6sL37w2mGxYjLoEPKtnLXZXLJrCfiVTstUFbvsnfzVqu7UEPQsRJ8WHVNEWdBjpbkPq5vseYgFYGzXut",
  "key9": "2wq2ipWZYVnSjhVgKsSMX4YUCLhd4S2rFeTBC1tkw3L7ELMyUypcB86ucNJEjmmHKtqgwc7t8MpWJ1f9rrZoekgv",
  "key10": "FqwusosWXntLmDxGs8rHQH3nRAUzNyYBDxkofF4RGo2VDyQj7uQNjihmxf9XzMbV1meoRZsgN3KgXbPYU2TQ2AQ",
  "key11": "2gQmEW4LjcMjzopoGpKotovWStBdN7jRT3zGjNsZ5nuGvpYTCPiyoHB1MZBMVMj6zRAvjUcQsTcdS6SCh8S4dumP",
  "key12": "39QUsUgC3YXY2iUYxrtFxpGsaFYpqRiTvvxdJa27UDtnYCpvEhAC2kr88GsbCBaQkbUV5WP8M3uL6k8hkHao9Z2A",
  "key13": "2HFBdHqmXnUJZFnimhoEAgc4HVFcAogrnRNHbKUHGUDoBR1qCSBJfbLRtMgeS2t6R6Q3YJP2qzhHjJr2FXhKJx1f",
  "key14": "5YUps5Xw3QmfpVqwkcfvG5rJuSU9CN3SGA3915tfN8B9y1j3PpMb73cgyv73q1peRBACtiZLfgX7PNLR48SvfRhm",
  "key15": "5ayoQvmHG8CGyempTXjkcj58KMjtMVENni4WAdBpz4ABckrfxgnc9yVvSkV5Qytd22Tg7a6FwmM8JbabeJqqQQoe",
  "key16": "D7tQT1nGSVn82HynUnd6u1qLRR95BxFKZn9hvUC7q2y95vXJhymESnoRhJz7JrhzZXLvmaXRR5Sra2NTEnwB7js",
  "key17": "4pSwPRfeYoyU7g28FseD7iJXgaC71RmgQ6SQSNgtJ3HR7KDWypkCp4irNuYKsj1VfZPaebWwVaoDuQJU3NPU57ku",
  "key18": "2sTnbfotzToGCPMYDmCUsmgZFWwgNeMNiadZCuUKiHHhuhfws9zotGqnbehJAEdwjU3PEnsDHUpErk4Dt3EAS1Xi",
  "key19": "2DRqFSLtXaQHt6tWsVWRhadcfje5Dk7UmrvzPHhcDVCd4xcmuyb2FWEVYT1oTVn9XBQ2YK9jsWzrsmgZsLkcBECe",
  "key20": "4MWwSXWEDJtE2pKY7it5aZh6xaGS2LZCLqaw9LDF2e6y7RzPX5tDw5kmQN2kEonETUUuDxepwV7Y5FTwPybRZMsY",
  "key21": "5zhV3weiW38NkxpVrVyM4wfFtfcj7qweNscWf7zRPMMqS1WSte8AreWDrzWo2PxpfomZDc9zU6A6GGa7eVWXDjhc",
  "key22": "2korYLMG8TJGiHXcHs9SHeFBB6xmCSC1wyUti45Kgz7dP7MuBP6YM67uvz3za3Uu8BuuNSnKNTKh6r4RH5SuXGwH",
  "key23": "5gTdYm3rREnjX3f7ma7jy7jrp6VH9JfZKKgVdE6zrAfVq6BUSFBSH2mkx87kZ4xjrHEeKh6hz9vXVm3qzNoHFDo1",
  "key24": "iLR6Gx339Fd9TDD74MxCXw9cPnMTuBJs2GwV5HoxHyuagcYZAAww3qrR4dMshPH3BtKWn5UPB4mvVrxMFEsVdSz",
  "key25": "4d4WhHYFBeiyWQqFLV45Fe5pbwJS9W2SRq2yHQMSEMMgpoB2Vf1rkb2j2hoKh7YFZbZtCGdNVxt6MBeug2A4HGjW",
  "key26": "5w7cQ6aCnaDTS9rboAsDNDdU1p38YwyexfLXd9cUQ76r3phaoTfsk1Uo3umqexHs7PhdWELfd9YS6zPuvVpUVEL4",
  "key27": "2VcXJyWTwpZrHjds3dG2QmhH4DrLzSVGtHFJnDApfBZwX4bi6SCGe8U7V31vqpVC8gkB6JhKWdCTxxAEmZqQjBHC",
  "key28": "5TbcA941qpDWs5yv5rTmNNGxk7XXbfFKAJjTGTKRMoFPuzp9o9YVyZgRpLad6ihD3QELPdfxLiD8X9fwsSNXLd9d",
  "key29": "4LtQVQoAQRJcA2XG9e5fAdEZfG6ZMT975ALzQ11zmEVnsUBVTRP2ugTyTpteNhLt8oe9avU5MFJvkaqrehuUMQ9J",
  "key30": "5wM1MqGmtQZ15aXw933GUHgj2srzLmuYR5TJGkNPsPMJnzWt18hE6v7aiqagpSEYcWLXs6VyPLFvsaTyPWwKmTJx",
  "key31": "3rfmmuFkQKuJzj4mjBx2sLj8cGsNhrNg4QJ46rYcyK33LM45nHWu2xYjEikUuSmBUNZ7T39crtpcDuMEorgUJ3G8",
  "key32": "t41zJVW1ekUrnA3HWsHfLxtrrS7S9m5ZsjKdbpqbFCqnAWbt1CCTDEMQ89wsizSfLTqvMrW5TZwhhJ9AgTGx2iB",
  "key33": "2Do1CWS9BDZoxqQgvXmfvKdxHZ6G9bFJHdP768kTpwXBxjCT1CDQoGXRGbQGT1MR1UpTWpCHgUtfWFCKEt3Et7Nt",
  "key34": "2rcsmJpj9YuNmWjikXXkJofQntaVh67SzCW9C1t9JUXf4PpYDdv5qLDDKja9N9ituHzan3qcuzkkGe9mhRQognnZ",
  "key35": "5UdMVCHhuFa3vNB8yfrZieU4JyqSsFnSps1LtiquwvKynEd1V2554h5nNeLhGGQDkxpHupJ4fYEXgy7TzEDuoAhB",
  "key36": "5FFDfzeZd7F9MgRRfT49QYti8qhDbJjzjEXJ2P3x43Rh8qLtcKPDXNfTTmQpfPsZahoCKXjQViZ9mrNGkWZ5bc7h",
  "key37": "4j9ktQ5G1QpTfo39f9oALNepWBHyV64SjhRvybqrtN8iNGfhu2LpNXMvgP3PtMQyn8zBBtUN5BYrFPCPsYqo3hKn",
  "key38": "26bdNPmAXbaP2qavHG2xqw6zLHsvNXJnTnnY6JCQJMcBnKqZrBbk7fwr51jqvb489MUpYT7gZsEVwShgUjpTvrVn",
  "key39": "2HZuyU7v7XAZL3M3fM61tiTtEzkxCD1mNyQH6MznMuNrqLq5nrcVCa4QoPUCnR8hDFTST9KbaFsXJu81TMX66iEV"
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
