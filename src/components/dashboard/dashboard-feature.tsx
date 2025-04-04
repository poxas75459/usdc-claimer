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
    "4EE4UxQm8jsduZPrcKv2x4NKkw7nUtbpVrkhgKaqDk46q1a2sKfKJcJ95e7uUWS35PDuBg8AoYMMA1QKAioE3Hsq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42Xbia4G57jMDG8HRb2wgitCEo489QxXJAgUG2ajw8h4nukJw8nVRJMLXfSiirBtaAvDmLA15LhE4ShkP79RvTHC",
  "key1": "q4rnT19f8n6FhZJY2659AyPN8bPEgmodyGo9LPUTYjRWnf1kbzukwr8ZbyQaQvzVqnepC7bK5wFU7GuGW8XkVqG",
  "key2": "62keDDxnWo6ds5gW19ZoBqxqtDEx8g64KrXeoKy45858qqofbofLB2kp3i5wKdCGA7QogL1UMksPqNgzN8iVBpMj",
  "key3": "aYJUxJS2ohJvHsgbcD8NPbykrarxXKYQmuwyMxP5uYXVrHxb96p54ifioWyeffXkV28qBDmV8iVfoeBGS7cC5pV",
  "key4": "6f88EucmzVNhyhG2FiiMYXsds63cWipTx1gG1ag6q5DsKBUZFFiscGjfKmkfrL3DBh5GktSpctE3J83j21YXxSd",
  "key5": "2Jz8a4ueLqUmVz9szqh1AgYKwMfoPdz1YCJB2RwXbGPUCbAZmKNWVK2YvLv1WBWkw2vqtcUd2wfH2Prv6ax8cR1p",
  "key6": "3ewMyR57QRXkxRiN79ruptJUYRrsqiREUEzqCtsXMFRhKawpmjdpFQdsRwG5FSf2B5Z6hc6W8AhWmYgAeEbefG5f",
  "key7": "36fTKtcTBZ3dRHowRnRLNWwb8dVrk243sUiTGEVaCtX9v7nFtK3BD3wJPNwV3EgJDahr8hV7DXjZjaXv9QVkMuie",
  "key8": "4nc3nVqDKG7GBca3RWWEMu6KPGRwnTNdUmdcGJMEK8jwZCTWVrhnL6geowNVYWtNTNpTAYBbt4Zvtw89k2rUFMhy",
  "key9": "4bZ865GUV9MkgDuy4PsceEfsZV85TZqfUmgQuYLXLJY9M6hYsrD6UMhunomhWgJxryeBfPJGTdPPHgMYqbX2Zw55",
  "key10": "3a3U78zGjTD4xb86g4o5cNav9XodTvdfAnp4qNtwmnXsqietod1Sv5Dvcge5NznkmQhMnMt1Q1JrqxyhCq1XeEby",
  "key11": "nTBi2umF3n7a8fBnwsrWStnjAiT3vTucDPWMogdARcstBvtV72TQAaSqLddhbRpZvjQH64zJEMfMXdzeD4UkrLo",
  "key12": "5bmxRMz5FxpViFgm5fzrBdjT6ZtV2c5vSpfaD34tBrYEoKiDbCxGvJLRJdVpybNj7m7NjiioezdXLrfzG3H7JMUE",
  "key13": "52WziWMaPqe7xjPPt8GKK1fLcTuq4ojWdt2HcEiFerZjSzGGcbuHswgr8599WPFijxkHY3eJWCFm4r4sM5oB7NU9",
  "key14": "5HxY175V1BUxunC1D7ddDvxZspQtYv6NvpiVr4c6GtdHvwGKCarvNJmRLyeJWhuaCNKmrECwSxnd4xVJTJzjMy1a",
  "key15": "3ATEwb1Kq6u8qQBW4Rhs944RJLJipHcWnqAWp4CCdhaaZnCRqJDhd2REsZL2AxApp7WzZkreKUK9JHvWJfEQuNxi",
  "key16": "2DXdj4qDFi7mhRg8LBzZus6ChEchdXXmaPngCJeUpWhyibVk9zoz59cR9rkKCLb8Wdinkd1QMigvf3cQxHVKaPcj",
  "key17": "2N23iRao5u7JQVpHfwpgEqbH6S6WdsiPa8L6ccPzpokri2V2W13M3QP9HfezKkmXk3dMKdUZkkhXR8dtTtwQ7vnF",
  "key18": "UQ1BifP66U7GGtnF7xL1REvK5DxBsDgKTkMMrYYYLffRro4HyAEPXyGviC87kCXSH52qJFPE9LKGHofMrSZBh8r",
  "key19": "5UAjdeARrh9izdiyAfNecaidVUhFNrve9JazJ7HUyCYeHg1jwfyBHLeh4fupM7xhDwVZCNJAw8CoaeYHCc7Byb5M",
  "key20": "2Q9UAv5XSq2cc4sgNhMd4ueQ6Hmcw2kocgqoC2gEcWDNCndTKyNpmSa9NmVbcKcbSw6CT57pLVFSoxqFdfMwktRn",
  "key21": "2Yi7Gixujm6JwnpqnF6CtCLwiMKww6P6w8Szt2gCX38qtVSYE7tNPGsXCyKPNNQeqRUSmLKHPcm1wG8KaSRcRGzW",
  "key22": "2i8vF7ekV8JmFjMuSjtJzj1KvgsGukMYWPQpt63xFL2DRj3WnY7uYibWWNC8CqfDNV1PPczQfXq1JLS9tMR9QjnB",
  "key23": "2YAp98RiCbCE9U6j29zgfo1N4LWcoH8Ynp94ra1dqvwMtMJKUgzEcVsUgx4hordYinaDSuuPb2TrijyJ7oQder9T",
  "key24": "1nrwAGPpnGjkuretDBmwdzWPTQiPYWijH1ptreicNaRoYg4GLYLHojs77cgkVVb6ch78yHLGLBWCU7JVPytSDgR",
  "key25": "2eKB437tCZavEqZrAms8bpHDwjYzgN69sHZXn4hwuJ9saf2gAYkx7PGqag6M5BQGXU2f7ixADJNqB4FtZ2eCFHNj",
  "key26": "39CkitvCkUUmeKR4nKqgUzYy9YnyfqLsrLuJ53WeQfiqd7FeAQe74AN7Je2wXbf1j3EC9BLqsDr9c8w7v69Ka47B",
  "key27": "4pob4HSd1aVYrDrfYjGsAJvr7dsQbSsxr3X6vV7dfGcdwhtozqyaPBnboA1HYuzMnWM3oq1ereYojYdGBNkxpESv",
  "key28": "21fDLUcAANHSZbxBFV7Mb9gVZsr1EmxJrwJBVVnodANniiKS3z7MSze5MQERLLgcG3Yo7iJajLjdiYheYbW4ZN1H",
  "key29": "2birLxf6i3K7HBaD7q3YxWvYrvcs3ZZ94ZtgLaHDNsmQMR38NoEz9CeXuXWf4aUcWDT1qh1u8opQiAwbAHXiEyBj",
  "key30": "g7mtsckogRyHybN1nzCz2ko7oGtomG5sMgXSWaXtTvmWnvQY5EUCxobWL6axbVjXAiYM395CSxoi3rKVzTdh6Yu",
  "key31": "3yJwcEv7uGtCbVsVuyeuqViafFpAnzy7ZaGRdyEmv41nbzDHj6JtrjGzUvpHYY1ihckaSerYCL48a7BnhNJVNRAm",
  "key32": "2WUihPeZfbJMkMN83RAG566vgukWDPW8xG7vL8JVXH53Fvp16RCQGaX1AxkuQAWDcAgRggbbatgx8F8g2naWyLxB",
  "key33": "286Sgey3EAp8X4GLFN2g5bkFSnYZbyVfUQ43zKexETP227mtKJnQRcxCJGRzjhPmrrWLaMs6zQ3AoDKWcN12yXDz",
  "key34": "2UcFSkr764W4G6CS3a6epNSRKb22WWnWzHkjkCB2t82HfZUE8btqLskfVRfHdqhpgDUg38G5wE8hDdbkER1MTZVy",
  "key35": "5DL3tFqNNMPHVCzYt8cHTMxazop7vUEvfCnrfZ6k2zNg6GbVZ6FgB3Go2QCHwrEDyqFfivpzfbUUdAuKB79vD5v",
  "key36": "iUMR2Jw2zb6Zv4CqBV5cHsNWAHcej9k8Dp4zqjRDqL4Spj7uKGRYbfvPnFeW3XQJw4sEYtHXzUGx2cffoKy49XG",
  "key37": "3N4EiJYmRs365shXiVNYGbcTPGQ2ZfUm3n7UegRSPNRXXpzPbJWXiU6ZXTfaTZzeLajZpZaW2VF68ic6ALXw2rBf",
  "key38": "3aTxZojAwW4tpKpeKj1ZdWVUdAzELHPKGP7CyXJ4Hnc9fTo8aVZcDWtecog5qYf7fxfefu4FKaytPUxA239AoP8U",
  "key39": "5MEwRNiG3suGdPrqiWZk1og66AKJCK3RVKqVgmNsGK8cbTfLdyATEBXqcZoT7S82g2izkn2hrZT21RAgnMtchyfv",
  "key40": "4WMqNifhFQF5XMEN2RsJv9xHVNcXceqr865FLBJFsyR6VRAGUrdvWbwVnkE2CHxSocntAJ9wpjtPbTeD6pDUpWro",
  "key41": "3JTg2RyBbnfijRSBDDcxJ8M9t83m9w5VGy1RPhiRrEpr37skRYpyWVRRX4vHxJEcrStfFfQSMuPrR29Kqn7Fceth"
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
