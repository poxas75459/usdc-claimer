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
    "39H5uh94WXq2Hx4yXirwwJ7iRPDojr4dWFj3wJg5ju62YfDSLRdAB8WNdwMnXjDq2BPYwDmKCS4U2NHmMYYSpqV8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PMSeSVc3c5xfLQpFCbxx91UPmitCmGqWT1dk8e6dpz1594jMUBLiwp851uBgiKN8MU4bVHU3qNxXwStuGvmSKPV",
  "key1": "5KhJAt75jeuos4hRAEoXkAfajWigdrhVDx9FexxLtwEjBL6xqDBp7aXkEJyRWcYuo5ooNNoHteLnin1UhQZnbji4",
  "key2": "2xNCV4camH1wWKSoTB6A8arrGYbYySH8eX8RA7jii21UGum1ynV1vTaE7mX2QjkqrzMt4Y6d7YxmwzzTEZR8uC8M",
  "key3": "25Wmi1kW6QCzVCbVaq5kHb4QuvXw6wdhbH7i8fZwR1JpANA3vZWzRjVTbbwCDjeykPfdpzFShLeoCdk2oj5dG7Dm",
  "key4": "3vCcwjvv3RMPBg91w45tnd9fKYBgYgEX8hSFLHuEN7gpZRiXf7GSH7X22entJVAv5v9fDyKKm6LLCuoaerMugxhn",
  "key5": "5urAA7ZCbvuCxok34TjMMXmq4ANPtZFpYJNsJTiYCsXLDTk91SxGiuSRuQvu8LTbyfU9PCZGAPd3Mqb4zjqZYNsc",
  "key6": "H8pff4JZaADbC1u5c6sMzqCk3i96M7uqneLHMzofxHZUWQvGRNFZH88KxCGF8brzpz8xwmxbffEzPE8pvL5k27p",
  "key7": "ZDLDY8F3bDf5M5XBnG2Arx4FRbkH3kqsArWjxybrG2WhzZRyzsRtzV4tD5hutESEZwBU83pT8o4d5sSXKB1MZQz",
  "key8": "2LUs1SRABF3LhKH2xQDuTkAZEhzRE6ERJuJp3f5wFXMW2Dpg8AWwgQVQGRr9fiVtz6JBQsSuj6AwYrdG6YW9nDZV",
  "key9": "2TjFPBdLksyNVcpj6Evycw8XC9XydRqRpEe5zijntDx6ituj5fAzNUmHHyAPdjogdNbFZrpbqSaarizY53FjwYKJ",
  "key10": "2MG3hHw4qpwv9kS6vpMrBXTWKHpn1smdSW42r97XbhmYfoKtSqPzNAiBbrmhK6DN2CJrfLkVrCpi6LABbyP43Ndv",
  "key11": "2eY2b2DwWkAEwuaZap6aJ7sEbEfAhSNHuRA8exA9BBHpS9Ut4EDkx7N9S5JnGSXW8SFGjkdYDee6tqz8xKpvTya8",
  "key12": "4AmLYupoSaQ8ieijCBA3MH4Sd7Y2e4MueSQJLQr6C5isWDpKFk3hvxD9A6guNHDBdjEUzZxKK5Vjz98bCGpj7k6n",
  "key13": "3BSMkDSedrh1wetdg6ZUucb9R4fkki4WE4s7PYRCm6KqR89P2Cxaw3Lm4Ctk38EbAffak8fbgHc9NacUkUmVU39w",
  "key14": "2utKD7fVUpbKCTGqbYMWEvPZ7cBoVzBD6cUTdFDzmuMxkThQmKkZDW8N3byYE6PkXwvEAseHxe6Avzpn3EZyZPXv",
  "key15": "3WTy9fRrUfz4DWPJp9cVuZNpyQdPn1cnsBcK71qZC2KgxtNERq6KGYSm3Gb4GjvFYzZqefvwobbksfU58kqw7Cb2",
  "key16": "67feXh6Fk4xFtqKUpUZeRFqc4qoQhyLCPs5ULDXHvGTx6jrH8UT97bNSBsLPX3JH9Fb9JVVJiebHizqaoJ5kRbGX",
  "key17": "3LbtboLiVBd3FET1FLGhoVKocbDfzKKymZYgRY1WkUPjpAy8aFWDK1vBfiMz7M7zRcJSskmwzE1aPJ4xzxCcaUHS",
  "key18": "3Z9KQHbqfN1FqGb1Nkj5pALjHBztRbqiXPMCGJkkfccFBziRCCZ3VanTGq5FLrXo5waTXVPpEEyKUsDywEvgdKXR",
  "key19": "4MkwP2iRBziSJArGomCb9znLjiTJsXvTh3RvJUg9X3dvkqsh8dQKHEkX8po9VFSH1qRh86iFLFTLqhpu4ixQRJEH",
  "key20": "3jqFDG17Y7inAzhehSn5NJiK9FY53Ean3odPXLcukEzmn1yp4KVJp1jbZ7sRTBJmiY2GZGExCxikL33PK6ianMqn",
  "key21": "64gfPPk6JtMBgMAoc3B5FdpNsVLrcdp23SJVsDo5XVt2cA1aqEsRt6SanwJ32PZQAC1dfV5Jn6NnRxYheV4fNCs6",
  "key22": "EEkuUyHsYdnwZiftQ1vD866KaRFxqjdu6i7E6PKz7TpAZWt9j9sWxZDXhPVPsY9fBeuZ9wG7m4gexcnD1u6dHwY",
  "key23": "5oxQ8NZagJbs4Vcym1TteqzRaDw4CjccSsYHYHgykjtiZJHxH93DYQUZxWcnmzstLkibqz7eZwQozvWvpeNKxgqk",
  "key24": "4bAGQQGhUpLqaPhn6eEM8FgZTqeW1urov7byCwHniAoyg2wxrshELYqB6xV2uTsXZtewzNuexGFnTUiecTFcSvhN",
  "key25": "2379T9uGZfDdpcCptQyoYtK57Sd4B51daWK26448PsuZFcQ7Hrf9nUVMnbbDR5NR8rBJhmtsbiGFHB7hSGwV35bs",
  "key26": "62VdT2snE61gVStBoPV6bf6qAEDSV3CUtkHqiu4aN6SDyitYBdL9p85RZJWR6a1Lag1jfJy8oMQqv6kMu5veEcRC",
  "key27": "43zJcRq11669wXHSiwHu8ifV3FKMrajFnz24fEHEmHVMLFZwQ5jRKaoxRLaK5Y8fcV3RynSzVVEG3Nj8VP7mYpL5",
  "key28": "5EEcZvP3m7VEahjaR2Q7RNCSeN8qydGnPM3t2j7ssW2VQkCa6y6ytcgFFKHhtcJdCnht4hSgLXZfbZxgqfSjgafa",
  "key29": "3VZBfKna7ere9qiWmJnRaPsq5CKbTfZTAs9jWqjz6C8toPzuae7JhEffhBznfbenwo5PeifYTFoBtCMT7kz3AG1Q",
  "key30": "5h2RTzjfdxgU2XkabAuWQDdpE5cTbkSejCCgfczSvu3t3GpcnP4Xrcbq5iQpa8nPnGhFXMEm6eBWUhWQE8ME8A5x",
  "key31": "5qWMLf2LNuVtCt8aGReMQuQPzdn4UqqZCDYWRyEBXBVFUHnSjZoJXRKK52iztkz9YbeLUDMdxqLDApG23g9W8kJe",
  "key32": "3U4eZUtfHgbqDEEJEy6ag1XYAAb9MtHodATWTkS7q47LVs2EtR1v3C8RNsPizFpKz6o61dcFjiBJqVGVtSmZEQXi"
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
