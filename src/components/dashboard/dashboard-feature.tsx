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
    "5R27LKoT9T5nRyNdYPCz5aEmSAEzcgU3JhJhy6ghNLibx5ziKChvtjzjpuQEhPhdP5DLrJByw6Xk6sdzGbReSMii"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vAMjZJTY2KpNQJeyaypnABnNjbVjx5fwWFKxvVy4Ci1Sku3bdghoeFJB69pnemPNiQsWYwGCKotLTzB9rTG7P4N",
  "key1": "QpKEY2L1s5BasveCcUU5oQcsjq2cCSeZtZg7qSFq9jdiiW8o6pKBoTxtUcXMxoPi66BhvRfyCzREhqxo8R9komR",
  "key2": "646RRf1cJgwpH7T3QSnFQKAocR3Tjpcc4znSzdjBu4DcFaXYYTBS7bKFNcfaKhQktDZSK2Z8dmSj8hX9BuMPNxL6",
  "key3": "4inmjEF1RSxnT6N3WyAX1CH8NNf5YQkuaGNZnj8iVejJmZhGFRkFDVxJmnLimmYNDfup6sZc8atYdi6onqtSugGR",
  "key4": "27W7SpUcgrKEYQZT1zQECpEZYVjNufSXAc7nBcYVDSp2entm8ME4v3bhZjPNzLiZmdg6uXE3qZTqsVhXTHd24ZeC",
  "key5": "4nhaAzyhAqiho7ySZUduajcHMBj5oCb851aujCxNiiF9w9nqg2uf5CCX2km2bueHM8ifmfpcKUvtsSxs19dkEUbm",
  "key6": "4z5H4cN8Z328BTK77F9kXAVKiToobj68dVhQU9p27cuFZzK3gKUzEgmZcFvzHMVRsMr8nun6aayYXsBkxe4t2W4z",
  "key7": "MzCM27kLfXAYSyouu1nxmLQ4Sy5Eurp4Z7ddNKntm4ChiMDyAvd8M2nxFDupBP626ZNWi956jBJJ96K9nPeSwtx",
  "key8": "4McezsivPhstW2ytbQNt3662uNiVnb94718FxGMwkxaBWUpvcgNcmRzv1kdxkCwXLzMPoEW5fXEm6Pw7ESeyhi5p",
  "key9": "2CunYBHnQUrEBKkAEM7ipMGtT2dAjAS5yRqT4x6nUgLySegyH6QgKFBPmmH8Ac8wgc2uEe2fexFPi6uJs53uLwfp",
  "key10": "2P66s1BnK7aGuYm3sdRpVHjfxhV1DvdgQjCEANF6kjhRjyps9zj7zMVM5pQV1QR6Hf6fgSzGotvhspt9E14LNorD",
  "key11": "33rgXV4xfjWEhSH14o5ayVyYsDkVkQ491Xi4srQhfJUR4JAoRfPMDWpfWoMagzUruYpWP6P9tDWd1KNi5zuuSihD",
  "key12": "24a5zTRHfCwfxLQJ8SM8VKdxcr6uqQAh4LUBoic6sp3cvuFKk3zyzaD4soxBprQ3GX2iEfPUtnZwVEWsUnWH67by",
  "key13": "qRLd7B9jJkUNxE4kBXQ1X9PQaxg8FbGQq2Yn2Lt4oUzVWNHy6DDhaTTPSA85ihFzTSbuoTmWtwfp9xWmW6KvV9k",
  "key14": "2RgzJCtwwGj3JqXHf8A9bxKTnzhEaEm3SqDsZEe6rxNeUyRsv5jEx9RpMNMvuCAFHvF6MXqGgJ4h3XGftd5YYRgm",
  "key15": "63V1x2ZoqqzGB7tLnGKY1TxEtrE6oqX7yWT2vi2x162XG3b51B4ZstWtRdwmqRD8sdnxX7htSpVNjEcRij2xCazv",
  "key16": "3jyWRnEsbYY81aVwXzq5FDAquhJ9QAVXyWKLdb7a6KyAdJkKMPCwWY8b277voqv7qpXQ3DJEXBhs1nL1CrPsnrEz",
  "key17": "5PQTuQUWgEphJjRr8nV3i6suZTa4Q2JLU8x8nYHhPahZPpRfDkZLkqW5be9rffPxWsRvJej7y6wMdMBtuR5HR3tu",
  "key18": "5fVifCbFWSS67eSNLuGdpLTEep2DGVP52htTQQQervg2RngyjgCXgJgwijpdbYBXzXfXJoLVDiUdUKYLPDogREG",
  "key19": "3kcUKrCbfkf28Z5hg4nTJ5kA7r2Ne3o47EyLaaAmz7ZjGfLDZitnfgTDXuxokQXKkCCYopux4NmGiuiTi3g2K5oo",
  "key20": "5SMd4GhZEFym4z8V8Lvcz93tFZgpgqXYXA9oxGRePaSggAuajp3i7Fv9Me8sUAvVPTXfuH8Uemh6MBi5R7ZZ8UpJ",
  "key21": "4PB4pNSvNprwYGnKcuvLodfBcFgVgvyP5CGsJmYEtHHPiatu8pADpTfMEAH8TLYhWhBL3LP8qpJYgUb4RHAnLoyE",
  "key22": "32XWbYJhxxr4hg3K49Af7a3bsY8dDCa1uUEUNFWnzoi7N3qiG4FobjEr3DGJk2CjxExSJtw23QxZG8MzVRymPLPq",
  "key23": "bGXbWhunuUg3wqJGZ7WytvFEQmiar8D8jreTesucmnAwHT639YhcACvGaH6uxQpXbdNjdAWZKbi9ThPihjegvma",
  "key24": "43TsFARa9Wg1hGSnaGZPuNKAkcTL4jZS3qN8PV7ABYAx19V5BPdWikJryxz1qKUTGL9W7E5xaSssg1fkD5tCXMxV",
  "key25": "5UUEErgRotQ97B9izssUWMb5zU31wkVrS1hp7VdKM8myfYTxASSjDLf5cN93dcwpxf631nYNiZXbjCDoxf7EjqAS",
  "key26": "2ZataKr9p3zmP5bwrCa9StTSGC2JCgdmgDFwsRuN4nBX5GbMdWCN31SDgVuBD6nH8L7fScjZMi6hi7S8FK1EbkeA",
  "key27": "2xEN7JMV5cNSuGZbVXR6nhLmoEkKa2QvsdJ2LWHimrGwkbbkhG8EXqZsHushdiBP2aHL7DLz5uHiDakrnJtwYkoF",
  "key28": "2XWSLrA4HXCDMBLHr1WaoN3Ws1nJCMrpKXQrYh2iaXzLVRqTBpgQFHGLVsJECqtzAhiF7SJkNw4h3YGg6fnK9S2E",
  "key29": "3hZVT3pxxK9hS3vLRuDxiXCQHRXQrAqPDfdw6wfm3sEcu25kaPakjS2sUWbjuh61P6J4CNWoQtcr3iBytSqCjcue",
  "key30": "2SASm9ftcRmwuq7eqhcYBEc67NGhoPzb6ys577A2nUCLJ21YDtnwyCSG3iAcCnHiNo9CuJsqsoHfnAAaWHvb5tKk",
  "key31": "5VDVzvm6SEqbQMGTnaxg8Z7DciHQs9P7Wpjw2w4FjXdTPENLT5rekvJMu1p7nJALJGyZgoX8SuMjFUMNpm4Lu2PE",
  "key32": "526JBZguRFc269MjHw43Wcn7sLksKNFY67RL7SeMFHJZCs3Tk5YuyVDEEfLJHYXtUHkBccceA5xA4abRjYbi6JTv",
  "key33": "2U8fmRsTHhDH3SSKucRWi2efRxosqeegLP2WrJ2hG9oGVwv3oMYA99AGT6k9MqkShNYpx9mzeRiwzCFe7zHUr5ea",
  "key34": "38yBSh3HsDmtWGdzTnGrRmv2ZjbYGjRjX4GUvBGKhzuGWU9u45yAvec81wurBqUWtD2tnvNM78T6ZHESNQcfF5xY",
  "key35": "5EdjaUPVYseEEa55WZszzvuWXCeZKkgVX9vYAHPS9Gv11NiP7NCsdnhYapsfyCMRtSuFhtVWYh3SoE6yX8UruHnY",
  "key36": "46r9ZdPiszTN38pyzrCK4QHRJprAKf7VbzhQvT9xpGZgJk6Geobqhr1x6KtzgyD5jQ4V6xYAZReeYLx4GAzvS1jP",
  "key37": "3pd9n2zHRaB4CkaFW22MSnR3S3GeFaQZpTaiBDKHkXSJAm3c9rmmFQBZyWeeDoNxSqxM86nGHjRAaniTruoTq4xd",
  "key38": "2PpD3gBRnma18zEQAveJMpCX2xg2xdZew5RxPjijfHMxXrW6K4XeB8Nqk6YyHkmoLVGKoF9YFVg2KxJyJn8kxjkP",
  "key39": "2pxDaMsBAEHcH38DBQE6aSQTSX9BsAaE7XfQC22YoAJLmPT6vndfyyZYXfRuSZ2yUA9hJ8Qccyh4C2UB8H9cFKge"
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
