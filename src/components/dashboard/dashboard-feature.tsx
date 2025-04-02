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
    "2KbVsdPzdzZMsbUEDCF4geL4vcNmW2VGRhFkDYzivx6G5yNzcVboLGvauDpGhRFDyEtDW3MKzdtujbjA9vJxkkBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Pgidh8wcVM2bQpZUNUYHp4g3ihq4T4sXUDHFVPQDJy9FWxNkboYmpktY53g8xv6d2oq5fA15rhGyQvfxQaHNAFt",
  "key1": "3G4gWobpLpdWEN4XkSHRq8inadQCGxQsYASRerS3vTxeZ7UbdVsnixWzq7ytuXsSh3BXa3yu9aotziA9LMQxA2SE",
  "key2": "2bUYM3XPhVdHF25rDNW8FNFAEDXMpbrd2zg6TFberSwLuHW2iqKLHLjdjVSR5hGdb1WWvjiVbww9fKvYuYTi6YVE",
  "key3": "4RUvWspyH5iWngSCWZdQgaH5xPwvVitAv55B7pLDEJ8RSVscVof8WUxy9RKSHmPjGDTpQg4Wm2M4xbeNR1bxZURN",
  "key4": "4suBiKz9w2bwbd7v5h7jAiSVQra44A2n33BD9M5TuqREnytE4Hh1YDTqxGYhDgWDE9usfmAK3Z7ou64t6fmWzmYw",
  "key5": "4FLJ14UPur1aag68KKUooidQhyQMZimGPDyD2pEVhKWg6jH4QmEwJFKbTFtns2go46DjWYJbiXgJ3CAiVDjjofEA",
  "key6": "4kgxZP9LWzZyNAf3goNpyKj244GP3RZcKceCH5UQFgcZRgxL6CZfsaGDrNsnRgU5nwwBTMjyrr3SaDXjHjjVtrSz",
  "key7": "2bEhU9KJ55RhScXVZZWAs6Mk5pDKzFWGR1G9zJvDL8WZf3eUACEkHnzhrhTX7SKxG8BKtNBQaVKDdkz6hmHDMKX2",
  "key8": "5RN2fhStW8kVQBx41AbC8j5tZcwUnvxbuq4YSXetjhbb2MniAJ5ZgWLmLwM4yRMAgxB2xwZBEMgErcizuNm8bYqz",
  "key9": "eY1fQj6eBKWjRQjgNumFCths6ThWWtNf3kW2dwoeUfuYWPRs5uNsjdtqWobGcmKRtRovbKGyL2VcUtprFjcfzBx",
  "key10": "EgNQ72hABkJPLymWskAqwReKTzwDg4ejTzC44MMZ2jrKfuy7XvtvE3XdAZizpXJoaUwoDErmUhSBQaixDBJMmvX",
  "key11": "3f6airybt1CesoHgyH8pUqAMoCfKaLFizJdm2hTfr99iNwEJ7BTxoNBqfj7CJVVyLMtFziVEKuANg9DVHywDdwEw",
  "key12": "4ZGet2U1578jtQyHEByLQCcPELqQfjD8m18F3zSt3jddpprNdCxRk8ZyLe5PDi1AFUCZW3TNhsAJ9jKAm42jugY5",
  "key13": "4YGRAd4mdyGnCdTtgqt24PaNeQmwibeRuqPa265KwxX8BoeqzvMJxRrDb3TDUj7ozfzjFLb3obEsM5aVv3m92Vmm",
  "key14": "EsrtKRFQSQji7XSEcbKSsTK391wrMWCmkirR2HHC9iDhTUpa24LzbKxkXySD66eAqJ2PQCyXhn5H6294uxkw8iz",
  "key15": "5patQbkJ1V6KBoxPh1vWeKQU9jXjfUMhpG22mC7cF6XWCXSXKSHtZNJrZxxxpwrtK6rLuZALHB6TCZjwuWqJX5a6",
  "key16": "3FWFv2z9aAP1iQkVU7Kjp7QGsnzvfD385V67kQkiYQxFiXzjWYpzcDWmnGTuHUMAw1ck6NBgNazd1bpbmNwDC7bw",
  "key17": "5zNasCzMVG7crCMbLBjqzV2srDFtjvRzAKEAXfE2YhFBjwvHXe5AeVvm16hJxsg5ccSSu1JZPftdQ1untkuG2XGa",
  "key18": "8czQCr78MJSZhmf35Gv7rC9qa19WTDU2W7w6RHLZuvFtCiGEh93xQ6fKZmEMHHhCwrEGCXZTJEJE1VKYHbLKuNv",
  "key19": "f5GAVhFqhjXcsuMyMEywLDGHuKeLmH41gU7DQHucmDikq47QU1PBXXTR3TkrxkoiT8tynQ59ugSoiygVHyxKfBK",
  "key20": "4mJDc5v2z6YufrGEWRKinagbosvFa25GYTCAFuc3jWTHuXHqbMzDBB43NNg5ViT274qNBPSAvKbKYytYK2NWFfwg",
  "key21": "59ZteNsyGtGL3FDHWjeToavJt9gbco4eoSUk9pD1mPQnr2GwHDiCw7w2W1sEbuzXM5NYcAYVG3XshGGZrbnJWnAw",
  "key22": "2Sr2iHXSSkUCzvpRTiR5rWV3R17FmiY8WfMYH36bazhoYxkoUaGDTjPsiWzJACHchK3pdVuiLy2DCWrvDyXdqeL5",
  "key23": "WnCHWjWC7oyMbjnN2Likz11STgg98Kna76iCaqVGKh1yC6jmzsxexDKiBcgvQmYZyX5oqfTf3XbscTbetJi9pYq",
  "key24": "29L6JjRHGLKaCohKaZn7y2EfJrQo1JxB7CHCrBDkGghQb91HBZ7NK1dcp1ro8SHbVkcBPrFDxrT6gSFtzAYSQvX8",
  "key25": "5ue7BpnhBD4CHJGqK7kVFn1PG1HBrmRUDRFwxJL8uiRSG1QTUBFZaRHuSRTX3WshzLcVuRca37zFWkU42VENvbUk",
  "key26": "2kqAxEYsLCYGSKVXV228Scp2yTDFivcG8JBieyCpTFur4btQLs5ZzsEP9DXKCBRjgtXoAeV2mxqxh7vdEvGADAeq",
  "key27": "4swZQZyPvBrHzJT2Tii2wLtduUUJwDJbersK42sfwHJtZZiEVtxeDBpjv2DZjFUzfZUj4RvUX7g2HWkfNs8cDZgp",
  "key28": "agHf4YnzuPCfjsVPHk7M119Yfhfsqjhfb6MtFAQq4sySQLJDecjvrvWPQNYuC9xRAk2oL24KA2XeBHJKZmGhHxS",
  "key29": "358V4vb1Uu6VavcTMz3d9K1gvzgsE9dxJZBVHRf78RL2JNkpYzXVZBxSyvoPZoKsT8DLdmJFvqJGNckxjwy1f6Rk",
  "key30": "3DPJA5yDmvSGLQoHAcVYNuA85URLCipbUufHSMK2CiWD9A9N41JrHE2mH2RByEVJXF4e3oPvBV221wzqR7nurjfA",
  "key31": "5DbHY1BUnHBP28Kb15R7M5u7uTDurjJ5mbtq5HwK3k76UtUmHfmRbtNfomyPqF1sj8oLfN6Sr5HrfthtXpJLuJ4J",
  "key32": "2SKUuYUR4n7rZepa1ahxh8AJMT8ysE5KWvk8NJpWxUXAJFhFikcRGrtim5JHdQmiQi7TqJ1dV56GThGtXmFt31xV",
  "key33": "2uENwAizerdpMzZTRrogRaYpdoJX9U1hkxgv9e42ypPibfBY544MSeLvaV9bD966b5XEbrVkr5zLif4Zmk7WDWYc",
  "key34": "3dyoEhXrG7U3ny5b3uH5URFbvDQoNG9VU9YFEHRi4ZjZhp96u2URVytnGUbrvFET9N39EfUmD2ewpRkj1ZkxjaRG",
  "key35": "2aAY1i9rkxrrrQb3w3EEscaoNZmR6xNqxVgz2CXYLeRAxc8jFdtVXeZ2uq6vJN5XEQMToZxoXE7su8uFyxXxB1T4",
  "key36": "4nwSLrSgk9BZz3RAkKgBmEpYYsurWA6Xkqv9wWTeHvaxrbDGTF2VfKTKMxVK4gLNF75y4i1xobMokMsBR5xPN5MJ",
  "key37": "5VcxZo1mjEERaHTyxc54bp2Lw4yCFfaZTBCLuenLbi8N5R6k8tKeRRpWC8T5isV7KvbTKiEA3zR7dWrB1nLDW3iW",
  "key38": "3N7ZfrGQbBdBNspfEUk5c15GBWjf9Req8zUVG77gjkFVJSrFUCiRgL9SArbdRtxH7cokBb7M2NmsP2TKvy2tyZtC",
  "key39": "4XzNF1bFs1RHS4DjhMfnWWYwNf2ZioqTnJ6MKxWpDzrFLcWwwBeJUmrYkmroYi7xh4RUTav5Q1DPSKo9m4XwTAgF",
  "key40": "6ZSFn4pkoemPHBsiwWdKbd4K6BxHd4zEUCv6rDJNWcMzqAVMUdTVKsRg4rqW2H3wfxXpcvhShFK2ZJtAxmvBV5L",
  "key41": "28Q5dg4yMLLzGqZqrCNpRQ9kEPx9MqbRq7wtdg5g6prHYJREKELLsoUpPYhJLMzQgyqVyhzor6FE9d2Xc9ti2bod",
  "key42": "4hDLLd9wHEWxRejEzVnJPPS76HvADmcDSEB7gtXsKGaRDX2ip6SGKJX97cqxngChExCaJjHwMmvvSby8suzCNMiF"
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
