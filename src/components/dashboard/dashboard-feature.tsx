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
    "3synenj8EXAMbZ343bqcUKwftbEamnSbSgeHtUD79GEB4kf22gFUhzLNhYRxQfXE3ygg3xeqDbdqZzd2GZnfkNXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4npaEhL1ZfhdKD7NToRTUjy4CgrWJPEuhC9v7cJLdUpkZGDxeh8UTRmy4FM2G9ZEwq6d9Z23iyUrA5EDBznN6q9g",
  "key1": "BbGPsNQysCMN3kLn3gt1U5BmEfuBwV9mrN4vFPQEg3RJybpWb9nMMicGCD9g1LoJ1UCR7vjKgzCoxkxd8Vrf5Fo",
  "key2": "4QDZEydkRsQWFv75ioUVyKykU3NyHo8SqgXyqX921H1AGtZCZSdUtmjuS6La4P7ykiGQpSj6bwwNtLn4uqWpRUFk",
  "key3": "4jeSKV4LaoFL4APEdEiWKgCRZv9V54yFDGadVpHUYXVz57xnC2xvXinf5Unndgg7ZTkzT8rRmrxn9UAyiCCq2Zaa",
  "key4": "3NMNJ82SEym6swpG3fdHb44qVmW6czVb8KhG3UF4zDcQFyJBuFwqCkrjxW5XNH8cuV99qWEobvtCnwge6z1soxPV",
  "key5": "GU7CS4dBbz6cfHpNJVtsvircyYLpg3tr9yRDPUcqwRC6ecJAemJTsYrSydUTczxJ6dg5rkN2MJsRoCtUmfgmXaS",
  "key6": "3F83xbQeyzncXSSPcWpHa8gPjfrwsnbC9J7GzeJbez1oNcVchmcg3suiQZckxFZta1tRcvb5zrGy99QsrpoTnXpp",
  "key7": "g5ncykdHsHtUcVYkJ1A67EL1Mx8CjXk384P2UZG6agdw78Z7mqyNqZF2aJLQiRr3XvH5pf3qExb3SiXaXYYWkh1",
  "key8": "4biao6AajX3gJQsVBWxKiFRxyACGRRkJhgBzY6HVUvDr28cRAemR1E9mB9YnHnbTooAWmeTBQiTxNP7kkrqLYr8u",
  "key9": "4mi1BBXWrXSSq5tTF7MVkx8wm7SAgRhR8H4xTQWqfWidX9CvJcY6i99c5z9niW5jwwcwKZUaigE4rmg19FUMYpS6",
  "key10": "39T5X4Z4Q1bi7F4uA4MQyPLqpseFvh73yjbX77o3suHQ1sAFE72e6EXTnjUS1nEJVn996JdfYVspUyxZh6QUXMX4",
  "key11": "4MvaKBkhfkXymccQaZcESfucXju7G4dhKAeNqmQavYSeGgNZuisYjeZiGFGdhoNj1pVPdf7AiC84N6DghgF4RDsZ",
  "key12": "34HWvA5vhY6t2rZfrLzSGVkGyx1wD6TkC7ET2jaCQVGqFR4y3zFGGaXYF8NmUFkFkYWsQS94Tagh1Ad6YsxkNxxk",
  "key13": "3wE5NkHH2kZ8bTCsVYtsWSffWhHzAbBguKp6VASu4mnGGX2svuF9KhVS1fvg7S27dShvc8kv6rzS3tfto42RfWM7",
  "key14": "2TcSZ97r31Z5Th7KBykztRSTtim56pJ7LwtNw8dFs1uD9Vh3eKs5EPSbH5s83fxahJw1tTNDrDqBG4gUM9okob4X",
  "key15": "5jGuUSXT3VkxsUdDXULd1BgEbjebYCBd697YwNnJvrRfAqPUe5grX5zEQxisf3m7mzStUGPZ6QR2edJFEoryDnPp",
  "key16": "5REkYBmFscWuNf61d97jZ8TuGWXKmGdFwjsNJu3FF96BBoYZofm4iJRXP7eBdozkrqwTfyC32BtmtCw74ZEhBTiy",
  "key17": "5LTYpeFfaxjKUprURngD4zd2sTtap7W1UgU5Cx5tM35VUWFqTxtX8udmpP9hLGNiV3r7jszXzRpvmB9y8hTVE3wu",
  "key18": "2jacJAmWmTT2tgMrPseqgw5RLtzkDDMDuWyvNzcQU9Vd5tmSh9a5DLguXnSJwtbcKKhf9sAU8imcpbWKm4mC2goh",
  "key19": "3iWridNoHLkd7qK9JHfgx1o85LhrvjhP4cqr4VMSAGALdkzFK6KEhyohjUjT2rJ2g2JFY6buhRGr7MmmDysGk7ik",
  "key20": "VekzTEeMBb4QNc66uXPqcLkNh575nQzKdCw5yvnQVaGQPDJSaHW1jqpbwyRBEHbKP6RHVbuRCcEJGt59VppJqSD",
  "key21": "oR6pc3qjztaTu4yNnzUfL4aLEVEtf8VAkXGoGYZUMsne1neKzqmrQJVVfi2tFZRLMaz5zGNhV1t5Dy1b6jpHtvA",
  "key22": "2Pfkxb7VQymJ7Nv6CH9f4y62z7pcXPrVT5a1TCKeLWXuYDcNr9WhX7785CAhHmPaVaRwFYhBcJkgRENf2LdEDXqr",
  "key23": "2ydjxtcg8wbSokDpgTmoDNPUMSiTftww5fCQWBZwX54PgWSqLXwCXxcJGDUR7HcCwrKCZ6sJ8Vn6Fwdc1LNNrkU8",
  "key24": "2r7GPPVzqo94yBBwLHvcnfP4kk4wm37fFc5jAGAeL4s66tu4gWbDeWegCXEgBLyWovtjrbr9dAiJdaAxEB5HJy6f",
  "key25": "4v6MyoBkiW3QnQLbAtEgR7A9jWMAMc4j6bnhNohgeXrvFTuEjTXXH1LKnw11DpJ4Q5h1sro9Qfez2XawwGc5y42C",
  "key26": "2GaptxP2BCMsS9zHKXDHxKT3atrnoqBmmYvmorhUrNj62nquBD8QnSgxQn9DvZUSmpzQcv8RdduDLhwT8NiEdWoa",
  "key27": "64LQ261ULd4CTBZnPacDAqHruJccFoABWbktSFKNPuEFPnbtXKLXdWiUTu3J7ve7Q4XuzyU1iTpDonF4gpQA3nz3",
  "key28": "3L9cUjCRGLydyowQU7TsuH5uQqf225DkwFnbzxqM8rKDPe8uy3dZsTQSZREFw6r5z9vKAcLSJw69QSyWAfKbujWp",
  "key29": "5MtNCGvD71K7nsr5Sa3WcVMxwBpFAuPPdzY77MGVJLG1NrLWB16oUJKfJqqUbUJd6vhnnp36ZD93VBigSuHALwsQ",
  "key30": "5SFaKHMWXVMmg6NKG91SS8EqXK9fgJLkuE4vhSW3DvFUER2XqAwLYdZm8CqU4MermNPkZbWzh2cnMjNRcjDH4mFa",
  "key31": "4ryip19pBCXqEuvDVFTmJcH6FGYWutTg9kzunSriDSuUS7MQrTeEBFQSKWeU57X88YyuVScKibXejrMsic1zXCNF",
  "key32": "4nBoThQSNVrKVhR1wDcoZeBMJZa4Swv4kNL5gUws3LN23TdBfmKadUewa4qPJmGhpT9X9jPane7nEvFVFTqayQ83",
  "key33": "3PTAG4o4uniKyPTkf8zoMbY87Nync5HGfr1bYowRtNmEtM2n6bbBJofQfj6rH3xi2452W6tY6L5Raco4DmrSYHr8",
  "key34": "ectVfzxCnSP2ifmvS9AkLQY9sE2TxXBPpwzsUTAcpnQCbm3So7TmA3xS9zni5TEVADt7xXPdaNTEjFz95RVdNqc",
  "key35": "n75BYWbLBAp6p314YGjWL2R2Nhp2CxhVeYky75o9h6FBeKo2iFTq5qyrB8xWTerXGfFvaw6hx9uWC1Db7iyM7Cn",
  "key36": "YCENcm189YW2ihFurEhpSgKoPBe5ue1fc47QzZozQd1KYnhJsqu9YCkmAQbQF9dLrWh6Ymtw8bnv5PFWAmytcqx",
  "key37": "5pBriphvBhogLADkkvLuECn15TL4RqzVxBiULT69pUXqpK7vMv8G3cxKpnyBfJte3J6nFdyeEkAzjG3514pLHtg3",
  "key38": "39yPvSGTK1ZgxmHDUSmuot61gL8i37xhCHShTwPyPkA93qebLozQWUSPvDAmBWdBnW4nEhUvSS4VkNsmKMMuXrZ2"
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
