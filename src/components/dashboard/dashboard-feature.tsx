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
    "5cyV6zUQP2gM2uNuC3oeK67fZMh7esm5fDvku8pFytEEDBUEDGJgHpTHfa6R1DFvZ5nVDjcngQGkWo7pxVYTBiNp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vUQtE6XgCrEq7WSm9msaUoY5utjMVMgQahfegxihChJmFhPKHyJqp2Mt51wrHhpqWbqhcKZJfZ8hzts8zRMbCSk",
  "key1": "67C8JNrpmiWwTnhU7EQhF6LNYh6sasAa1GC2WHe4NgthYFJjBRT6FEqhyVWpZyAcntXRYLU7F8ng7NoHwUNYh3nv",
  "key2": "3raSqrRx5yiTxCkFgPTWHRPdLS6qxabbzvZZLd3jYVY3hCrXAmn2vks3enLSSTQ1cjmWfp9FAUuVnBXSNLi8AfwS",
  "key3": "EVU24ZaPRw97wSa9Kmh3azDzGAQnUPqassAiupyESGiw3kKcqKPGGK9BtSGCNDmqHDh7kmVaEaFYp3su2Snw4fc",
  "key4": "5py6XoVvwQNheC5M9GtexMvjk1o6D2gYCRrJ6FN5wjCPbKqTNwY9StLmYPziSQ5MwVY6eC2UFUv4FzosWo9UUQkT",
  "key5": "DoiBaQD8YRDFEifuc9eX64MsYmQUHe9QsPhyzHhWfWYaAynF13ZUptgCbGCHrTpEtwsZdwNFuTVH6tu7gjKKhHj",
  "key6": "39JULb8si2GCRA3x622hQEg32f7VdM4qzJMriRQw2ahFqqhfU5Cpi9QdcMQAJxW5ibMSHig4RoTPV9bW93W8fHbw",
  "key7": "4ehnufSkjf5JZE1V7ogUhMv2txBBiWKWkWMBiGiY2NeJAfXaW3Nrt9innVEyYEkGxC8nSxqsRNKqmaf4fZYq3kSJ",
  "key8": "33Tk9R3EjNkPqK16SSoLRHLSGgW3x4VAh9TrzDwZTWr1515fsAAURZeNuLRHQ3PpKAFR3Xp4yUXRxehBqHv2oDFs",
  "key9": "WNczSUcP2UBwmeQpwknqhokdU9dCe2hsboP3ghKGmCCN3hejHCe7m9HKXoffignCGQyxYS9koGQn1MH4KuF2Xok",
  "key10": "211n6PotRHTKhSLYAA4XGH3QHViBVhx6ae3FBoRkfAhEWYU6ixwkJHRsv3TDMgfXk2nYJtduwr3gKfSs94v1oSc9",
  "key11": "54dqECve5FTWGR9TJJ3mKxrKkhCRzNz5JrTGaU3bsFJ6jwfrgy7HEdVdFamBq5iXchBb32uwGUirsv4rA894dhXi",
  "key12": "4ED4PiDnm5XnKsYGQFmQpix5RbAxsNFDjpJF56ZSpv5DS3UjvPRrLFKSYJU6Nhfcw8Awq9mDzismaDD5W2iJdsrc",
  "key13": "2XNzWVmDftxPH4N5tGZsMR9LvMrBPzuxnv334wQ2YzDifVu59j4f1UkxFWZQwVJDoomsZ3djPwX4fJDTbqHiib26",
  "key14": "3mQuCoHsJe72TfyDSEdDyY2XMBqDhboLh9SNcr5hRHEPhBPzM9YixpR68GsoVEctDmaKGWudxx5EUewSVrnniD4c",
  "key15": "57UPqBVEaboczGbYSCfxNj7q4ESCxrb5ANnf9bq1EJG4kR9nvSKT25eVEM4dUxD3unJxGFcuy2Dcd1xsczoYUQzh",
  "key16": "5yNqHcU3BQGe1qgTZB6xLcMGYRnoUaHkDg35CU9tRKCnGgWihMLKEQSWN6bcA9PRfq5RgDMgcEofFaectwVKFRU4",
  "key17": "2WAGQ2K2RDmju3SmHzhbTZZsawmfyrkgqYmgPixRoxD8yeSfagE4Hk6SneVeRMH12twqYhwQd3bS67tbfYgjhiYz",
  "key18": "4mTmmPGTxVs3X4QckN5hMa5TH5w8hB26h1ohxifDnGMBjzcS19oXtScg6t68rwk1NeHma7T3Ng3qv41gK3A53GzM",
  "key19": "2vWaWSfNhSmiHCx9fFcykyVetJYP8mE2P2Hb6iJ87QvcL2BAqLEhoc2ptKUmFd2whSte4Ww5aCFXheF5KxrXo1wE",
  "key20": "3A9MqYMwnTtuvQMz8LyVCFEaj8FoF1p45jnSiUtDp4bRiWqpMKmAsDrr2ENX5BoVDPEU8kHLtZeh4veojoGMRyWe",
  "key21": "4ph7Qp88oFiT21xGWzcdFrPPtawnGESoBvDUNFR6GdpbFP3r7DN8orvHD5WcqvUhEAkWmAkQKTN437gmQ5pGpUpE",
  "key22": "2NUPkWkm9FKmnD7iz5j3bX2e5xGnRybRKAYmVDoMgMEToCp5dzhfbYApRh489taibCMhp2yDyPnFuyrZ4C8hAVNH",
  "key23": "hGX6Et8esk2FKFcVJGRUkAS1oQZwgK94iv9SyRhX5pzjT5fHMJoTHsLFZdUVtc39bwgE5vR8RG6rQ3JEmF4uies",
  "key24": "3Cmp6ALx7jZ3tvyFfjwLqHS165sZy4cWjiHQx1hmeKT834aMgWmuqdWi49HfM5jYdnNiCG2LEaQeLRT89S1VomZn",
  "key25": "wQceFNLtxzyak1pn66MdUrDZqbXxFmEax9xyZNS4YeGWgicLUcyW1WFEcWPgU7t36yJrsNKux3e6gt6pkmq2UCi",
  "key26": "3RcvKkso9cQz772WYeME8WQ35BoBNj5k4hyd8JrtmWQN1aA9EU49zBc8QybC3mQTAXE3hfgRWDyT6E8841PA7mjE",
  "key27": "3mh2vi514V3DUHsn8RA8p51id8Yv69avbn7wvJk35JsUaEkhY3L7bqvWmZLTZRTiaUskeG97t1o5UqG1YZCunBG8",
  "key28": "5mcRRF3Yae2bHUvditQgPoWq4rc4XdcJJawcNajmszUW7ih2HNJkMQvK24bD1snDPULqzH3UzWW3Vqm7Z1kVicS5",
  "key29": "4tGJoYS1SsxfcD3iBF7moj2naiCjLGcXeBZ8TNoLF6xMTyavKnjF4eba6A7TxubUeTZP5bper4eda47SHfhdLb6E",
  "key30": "zKcVrT1Rd2vwJkWQ1GshMLJGmSSLupGTAGVgsLE1i4PLK4xh7PY83EZwH8nWMKmLVsX4kp7v1mqkuodWuzK3j8k",
  "key31": "2eQEtbcH3sqKs3H2Y6VQctPS7pB1DRXvbRwgYzYw94CNQ4TmPxracya9zX4kXXFeG24rcTCyXQUgVWHZBpcJM3ai",
  "key32": "G7V9x1wPD4V9rTz2hHRkbzAHHZAaq6R5siyXVatBrxwE8Ev9J9Jd6ZaiTVDY8CqeWzB5Zcmd8pMNSbXY2Xenxmx",
  "key33": "2W9PUeaeKmxgebPaKUgziUpuMr3Vg3svTsCymSnxyiH7eBBETKe7VvgxsuU1MUwJccP5KCkUh4R3D6TJbymqP61e",
  "key34": "3LpEcEH2jHstS9Xv43JQAYwZu8aRaUTejiFuLMxQ2wCztqHCsFmNESh5FSm3Lm34K3S3E16oiFNbHzg8RCbjo567",
  "key35": "3U8DNFSMn1S9jKjpKwq8VR7whMjHNiGxU9kxsyvSezyygoo2BeYUpmpzzAf9SQcVNB9ZV8mGUjbRzTxtrsNXP4Ah",
  "key36": "4Pp8UAMs2bV8rLt6vbRbGqoasJGRVbyZAsJi77WLwuZd3PaGBurb3hYeS4YoPYiTBMgwV35RBeLRWSpuJbpWcpQx",
  "key37": "56s8pCpQboAejyeU3ZNtbdCjA965yjDLxzwV5DwpKCzk5JyaQmvCAdEg6A1M77FRqMqhWuPitWTmaY7orJjyFW6U",
  "key38": "4zaRXAxkFP1mmpoX5bMaUmgZX9rSQjCVJtHJr15fKiEpCbFiVX9vbECgY759eEvSWSGksWB6VsYTDojKU8vZSJhD",
  "key39": "51BDxrSjzkKvK1NCRxXVLy31MawXNQxRTnTqHTVshVC9KhJ66RieJ5Va6Da6pSeD9Heq3HEEoJ83tfzfVV3kvFp1"
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
