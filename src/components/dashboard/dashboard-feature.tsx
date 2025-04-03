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
    "41F2fTmtQtfsgEjjtD6zvfBCoFUgW9YMNYEp7TMdw3YxGqZETS22dxiaSzc4JBQMxhrmNkUs6Qmu9kDfLEWMG8Ex"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XRrnF34RhuLJ21F7Zz5nzJ8ZsQJhF5cSkVXtautS4PWzvqc9SfJDQtm4UL6f1DWDXukiN29AMeAnD4sGeF4md9j",
  "key1": "SpdL8viSX8N8FS9qZRtky1R39PigR5XhPaz4PYCdBqtHcgDihV1dWejv9StGNPnkhnQXD7cNjmYqBn4pViRKkVn",
  "key2": "5wuKxrQcYnphJ4TKp34knvBTY9VMYW3ix1Uyd6Qfe6pPc52sryy6pHRArUC16snJm5iBaMJQk9DbRucRhQkGK8Z8",
  "key3": "2Sy3WCGPKHRki8uAYL3KLFDeCL1HYzsmZFnwkvWSTJaNtaWYCveoJtKRAYzkd8SNaw1ypcnhCfDoejijMvSPN73j",
  "key4": "44bmkW9JocpPdFJxSKTgYgu5pad4KjoVYwdrPpuhLTcSpaHHX3zbaXF8FcrwdzStrdUsLTB2dwZJeRpwjTuYgfQd",
  "key5": "2maStz9qR2efZQU4f2hpSYnccaLMKiKPCzb3249M1PKiPj6CZ6LCZyszNrpT94iYzXVM6YhrrEh4V3Q6PhmLoNQN",
  "key6": "5GLAxM1FUyytNs5bnN3Y2g8s4j9bE8g8C9XfZ7WVaixKkGtpWTdjtvaic1P4GCEF4QdUMaS7UtocwrAWxdbVUhkz",
  "key7": "2xVC3Cx7ZifA3CityXNaZyFeEVEH74GWv3XqMHkejuANcsivMm6jqBHTktGJCQnjTHHQeYuLwPfPL34PAwtTwFa4",
  "key8": "4bPJ2pZjbmpEWdmq1dGeiH3ErJzDBh3JvW4sVFbAh4QLKfvcuwAHJjJ82XReFr4vRV315kDkYrN9JMQokwK2qyh1",
  "key9": "56rffgNL74WLxeUri7KEpiW2h9Y83kxnTwqkhNHd1fy7qsYbiojjBkLZnuqnekJMw7a4cMSBg9HWzEYNwwcWb1is",
  "key10": "Pf2Na3Z8iuiEBVyfoUediyGGAMwJXTgg5nLKm5vAaEq6PfwFJ4VBmxLLGXCXbCZ1Syc6HfKvn6XHTDy3Bi5Yy3f",
  "key11": "49dkoSjJTmnuEZFGck58VHnf6nQmAkK9ySXdr2wD8uP5MrFrePe6CJwkDtmaEGeo5Q4HedrtH4doBmFuksEKbFz5",
  "key12": "3kQgqxf6os9dqxLB8tiUPvvSUT53TvtLKtSHJWAXRjbpf8GLoRqTeJQyp1z823UB222coYNBT4QbXLPL3agrwu4H",
  "key13": "5jcg8kMeqTKa626S2vd4eaqrYq1bjzT2z2aHR1tTfKYoKABszgKSEPyVBvAB4ynC7oc7CAa4Q5fxAjpKu2ctDFy9",
  "key14": "Ex7TNwW5VPeGxfp7vFYFgQW6DHHupctLHB6zv93mD2DMCRegdjDtVGFy2PDoyqcQjKne1EnH8tqUqrFuL5JfDew",
  "key15": "m2886x2Vwf8DiBHnFrvk129xyLBpfAEX5GvP5XicWkYvnAxBUEpnTaQVtvcujqtZqw9jYvKi6cKJdX6H6QepbCj",
  "key16": "2MyKMSpzErq45iWXJZ7iQN2BtXxtZbb4pm1HrtK7Y9jxayZoSorgcsXEJsKSyADbf3gJD26sV1NMRC8rrPEb51oQ",
  "key17": "53bXMxEpXHiztR4SD4Go7kXqzTTzGG3LRUri38sRfVjHWEhvG3SyjBQbQmDXYdi1CCY9xMaWvnzJ8tLpXkUwJdRy",
  "key18": "47XHZJh2LudUM3N9mb6eaafZWGW9WcFHE68UD3ZCjWC9qkSyCzyfML7wi9VDDzaa141ZQYzuEjsj291LQnnEMnAS",
  "key19": "2v22MonJnkbawVrYXuCDTdjjYQC86fXpRoaQaAoJ8rC8rqyqhBhn4YdMgHvyuZcpLLe74q7X3j2QVTKPX1tGvuNb",
  "key20": "5CK1fKGwHUUbixs3A8882frTKX6uosaEcDpCAExJvhLsCTrob8zQEJuBAaTSgWsio2jPFRRmPvbVvkdgvmPEbBn8",
  "key21": "3vUC7HEdmMN8WecBTdA6M7NmFjknbPceU9kbjC75pBK7cKvEMUbkV32Z6TNFSWjpMUZeW4hPuJhmsMCbao6s7H5G",
  "key22": "4nXzUjTKQdQeuKTcDk5gYAGGdsCWAod1xwF6zbpubnP9yEZf8qhn9b8NhdTwCJyoAKsWmZNbUiy7mGJqfjjkwVU4",
  "key23": "316DHAhcnoFfEsjZhtPpuNSihrDYa9VcHKuLbuYBddNaBvjwKgEthEJR6mhF1QpTpztCpDFSvnF8qmLn6aKwnchS",
  "key24": "5tSJxdQ3LPNF1ZgqEyqw6xREeBFjBhcaPFd37K17TQq1X5j7pp9wW4igXocigZUERyNJreYSEMr41JiyaP31HvcR",
  "key25": "43e347jxYMN4msAY6ySWUrR4CksDXxDzmeWmzG4ii2jCs5qDxSkxVtnjttu98o4o71nwoER9knNVupHwzgzhK7gq",
  "key26": "4BNENGdZujWVoxW3CZtyv2tMkrSsjHZ1YFKLjV4EnKA9DrhgcMYnrLCcMzp8yVwvAAED2VEw6FexartsjinyfLdi"
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
