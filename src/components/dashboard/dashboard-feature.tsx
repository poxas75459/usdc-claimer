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
    "3bdMkVk9hHZmwyXa4gxQFmZeiuLZWxa4V4NeD4zZ4ZyWy2StoLc5DADvytgXCU7gBAVQEF19NrkyxtVQNrYYGHmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22LXKRk58mPKqXALTRneM84SrFSnKVkezmq3ySR2TXoX6DYYBeUNFXLdYEV3nMKppYavZNqD3RrM7EWvSEYFVZK7",
  "key1": "2yow42cnfbcAgxymnQpyZaM7QXM68PnniuJLAUeS1PepJCgjJU4Ha5MoJTfnT3ZAmQ9DH1FVgPyLm9mnQLBg7C1d",
  "key2": "3sbfMicsvyRcFLB4JbP9jJayg8r7vYU9VyCJgXjRyusTBovjfqz86Q8KQZxMYrevoaSusY8tULy2atnAuLhC3qw8",
  "key3": "2EHjCpzJC6XQNr7vkkATwKs6KkmpUGuHfchCaY1ZynHkSp5jRTESZQKvUiqcpaHGWypn3m3CpmLRPzUx87uGPpTn",
  "key4": "3XXKX5sLYpxpFrAGHgvAC59tSEdwPbw2wAKRysn3BBNHH956LEeFeEwmnsn1VCWR5dLbgitUTg5F1PF5oxTaxP9M",
  "key5": "2KYAMPmeVYAEmkqVcuVG9ubMcnZNX8DJTCwuaBSyocsadfmj6n8eiwFKjE7YYifJyaAMcLxmFXhVFeGrnTwys2X3",
  "key6": "5uR84zctYWVDo46QzU9b99kjbRRGs78S3fVioRBqwCZaV4fCNKt17wUZK18t55ZvGCXGSWoetAnVoSwmP5ysThNF",
  "key7": "4iNUsuehLiXSuTDkDbFQDxGA3YxxpmC6PfkC5daU2yHJozgUkKkpRpS9DecDzk9aLx2tFxErpjsUpg3aKJbTtygP",
  "key8": "2uf7KFsVmXmoUuFGA6nYv4FPJYJvjCpyE1qNZj8mdT6wU77xum7beJFPNifiQBWg5FoBe7JFfsXGGiUqvf9zZZBE",
  "key9": "2qtTk4way97pE9UdAUUTcWDanqF9gLMdjdnwh5E8pNh8tssV7fT1CpnTZcvvgMFWpa72NjH6Nz8ByJ77ukLBmgkp",
  "key10": "2qcsvZ4mbrKgGEja3scNNF4MANU9of2twjR4NxyCjqREyu5DJ1ctTNNCCFwkSG5HR5fJMNY4FZbTUTuXbZQVqSXH",
  "key11": "5AYww95nQESQmwSnKope95fQzyx895sc86adUuBa4e8WRXTAt6qox8rwwhAi5xxW6mwaNQWdvBpBEHtapN6AfjBm",
  "key12": "3Z84vpRNYAZrEAeKMoMnqrtRWAmVrWifdVnCPpk2A6G6AGb7pjNryPpsNNxxXCcW3oNptCyhCfFCRdwiHiSoTT5y",
  "key13": "D9vVFhxrMwu4PjF6itVegCwwjBDSQ5G1tR1LcWEDKL7dXjynmNbo7JEePMzCPuxmKZQRHYBRabcrxWZbA5nv2J5",
  "key14": "34Tsp8aKfM8Xe918RFUNGD3tNsvmLR6FdtSfruzontpraA1moEVqZ1ZimPKvZ93kR9qLSPVwaECJRHdvr5PykdkV",
  "key15": "3rdag4gkM9uzZpJHKYmM2shPYttFMsjqUZKEJRVsBRywVj2rRArPJ7eVLc22hGLFY3wBjLDTGkRxdtEg9HcRQbnR",
  "key16": "2cMxtBBqqXwzhkyCeFt5BRTeArBqCozk59R7oHJy2vR1BYrQFuEfZNDSwZnRThYEdNyuFycqDN9Syv58tx4uQsKV",
  "key17": "2GVE8eYS4m6HMF1RXzAXBtHJciB3MHB14fm3wbM416kZ7Sv4arV3ZJ9fU9ftJxdv1qvxG2nnTxH6ZZmmYT7Kbst9",
  "key18": "4R1f3PdFEp5nLYtzwDanrJtSZcFHckYYmyF7444ismbpPoXABwEo3Yq9es6rBx32pMzVvuQEqECDK6xDtPpGKPwm",
  "key19": "4TDFuStdZEVUPJrnn69QmkbAmUQqy4iNGH2UwPd59JNdv5hxcZAWUHLAPm6GESSP3UxpGTF84yVMHTr4Cdq71FpJ",
  "key20": "4Q4aaD6zx4fSD9VScBgpMmuF5otohUggDSKfXu6wCNUNrS6ifRSeRUyE694WpfCHZC9q46nrcWC5wKgbTXisvqyX",
  "key21": "4QNJ8WZ3trhmoRkijQfGo7w1wu7higqSgfY7KY1WfasoMJX5xhB4AoAnQ7q8caQpt5dMhrbrUNznn2MHkzq7Pubn",
  "key22": "4dZzkTwJb7tsw1sY4geC2rq1DmNkBm7yeLmSvfBv26R9E4DcfUpGsExN54SdspEo45zWvWLAqh1JxJNzP7YxworQ",
  "key23": "2MYnbyK3jkNgLgPtbkPQY7dtb2crmWQpn1MJJU8ooc8LwfqTJq4U6yr3TQL44YhFzP3xNMyjfiPG9ym8So1h5AWJ",
  "key24": "FxzjbJFKXnbQTVzHLLjC6YKbipW8DJCByNHii3b5DREHFx4zo5YvGYtpyQzBtgbqF9ihE5Ycap1Y1oSwTm4WHu5",
  "key25": "4iN8V3kdYr2D1PzbQmorm2yEmHhQVmMthsDZTmkrwQ1ovVkRgoanZgHCeEtuxSXvNa6cv45hqW9Ru7X98UviEt7n",
  "key26": "76tNopU11CW3tusAmZL2ZUnMZFyGKFHTWURKg9fpaG5gPGKCej5WA6SA1odLpH45hZqqe6HHYTbYoZyGMNWZArU",
  "key27": "5iKAVrkLiqDGfSJ15FJnJFxHDwnftmsZC2iGNcU5cxNQdoBkekdS7EoasD4T7L9D3v13TADNWcxVYZazGCxffXyR",
  "key28": "4UF7ngddBD2PveHCc5AqdJv2VsRFnYsdyYDmBnGr4ua6H27ZDxLLFdhU2XuTeM8ptDRY3H85vitbwta1JPgQFSYD",
  "key29": "rnU4KrU7kRng3tQfC33J5RmzHawzo3ekJnzzPqpKTyYHgPTpGuRdq4Ty5fBMYnLK7hn4J6hHYpuzrPbroiGnxoQ",
  "key30": "2Kk9spBj4ENeMHFF8ZESCzTubKHQU64xhfUixn2Wz3hPmupGKojGTdY1gw57AJj8nsAy8H3q6VU7en1akVVRARBu",
  "key31": "5nNKg7JusYNTLYaYrJhCBjwCGf8avg7b55YCcHDghZBaDHqNjhk3JbXhsjmyB5tLdt7kYxo2SbS388rpP5UNLzHr",
  "key32": "2VHc53XuYYFnsQM8Py6hEiJZAwF1esGfWjBsAMDAeEnX1CAWmgfsVAgC5PcWajfVVxPLya6h6gyuqc1oKPXPmUr8",
  "key33": "2ZYTirFwk5LvBdFpcE9YxTBDsug6xc3oytZCPgdLu7W7B8McSXa7keLP1J97S1Q9k1Mr12JuZTcvBJovnz5cnKoe",
  "key34": "4pgV2Dxnr8kPAyWXApa8PtgUhUPRCJBo6K3oTW3gB96VMkduRWUHuJcoWuTggaFCmCSNuCeeb6g2oj3x921YzKBe",
  "key35": "2rv4hcPvGnFz8cduiB7WvqprJ4h5h7WUgpgNbypSDipMkgGXZtWkEJGQGCMzR4BbuSSQc1VvJ2diWdEuv6SpwCUN",
  "key36": "5LemieGS5aixaGbbKfg3tXNYoLfPv8zaMtPfC5syxWsAJfytWGLqj3u3dnG36PyeZK9URRoif5sdZ3SXy7fDvd4d",
  "key37": "3bKRprxRaod7iftrn8CgJWkaTYmhyHUNd2o1XZzcDrNGQvzanQCdS6vUx5Sx26tMuTv9NYgUtUqYbgCqC4n9it6q",
  "key38": "3gH4acSavyHskEhKRzLavs2rzJrgyBCFoqBVHqS8vY8LsUKAv11muw5Jza53yYSKjw5fGH4eaB1f53gYst7W1jhe",
  "key39": "2aiDrKoun5bkJGArz8tV6kb1dWR13vWjyF18K3sHtoh6VipJdnc7G3QEi7TgDcrexxA6WoUZcWTqPd3yHjkVtCcN",
  "key40": "5tkEoT4b7Qxp1N57uLKhHhASFWxEzUhtjzNZndEKBtt14GjPRhKZj3WV7yFSLC1xRNRAYYbeTRBgCDiHibGH4FZh",
  "key41": "DsWR23ZfLyqZMrNKFFZuvgF137HCPRszSBWMgWYrmPuc4vgL29Wr2DhiyDReJCWCQqqYy8DZ2KGf9dXPukWBp4G",
  "key42": "3qX2GhbcwtAfYJAmJiECMiyxiyASJjWgp8NVUqcLDwywjbTtngbKqRmtajxJoVLehZkithgN6ism8tUfs5qbCuCe",
  "key43": "37CtsHwHTHERef2u4KozaW1ZCV3oF5d329CGcMLBDdtA463zUW35q6gkcN3EsSvyxKxt1P5hRdzC4iTueGtiDV7c",
  "key44": "24fN1HLCKp4WrpfBTLAC3Kj9ou7e7bP2Tu7s8369wdnCYcadLYRPDEPpTHap9dtsBDnzUNPPwyk5VPuNfoy7WQMV",
  "key45": "24jJrEKgFH3oHjon9rxmWuiexKTmcSVNnW6KMVU8YhschxpZPF9JBcMeKESgNfFgnezwJdmoLxGwnZfmGEmeVn1h",
  "key46": "4uvbU8pn86okw6jwxqxeLQQL2WcNefwFHis6rJb3VkKWn4y8rJTyRZusreikLZhdGCK6grt7pLcrY8XRgrH5X8WZ",
  "key47": "3GY5AcJWotyT1woeR2NZvZtEjA9RsB3PutTS52koFBTtp8CmdhMz3mHJ695dHAa5w68bDGjwoZbqfdvtQTMTJuYM",
  "key48": "5esALTBxtkNqQ5tzXhNq4HGgvCxv62NtR72zrDC2DBUDToD67pCVWHr6PUkqNzxsChgd9dwZH8v2Wfuh2Yf2MDGx",
  "key49": "2e7NNsSRcffmZXYuWnuD5vcnqsDWY2TZMXeLxQMS44tYQvnM79UjTex5PpTzEbwskU84VgLPf48r4LftVh7vh4qG"
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
