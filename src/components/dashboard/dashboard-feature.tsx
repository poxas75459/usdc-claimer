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
    "569fggBsLDgyjrK38WYUCRerFeV3NvfB6ikgiDTo4vLLxYVCewWHM8FDrVpUDsu7LXBufvZSNaPny2PkGiYhyEjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21V7pko8CD5JE788cfcA9WVGFdE8KRxqiBLC3Mgb1C1GxdurCHZCKsFQtd7qeGNESi6hftNeCfGTjKncthEohCQH",
  "key1": "4EN6ZCCDgaLgGz6MgHQCjVanaQTx2UE5iKXB4n2ZPafHvbBX1tjCxPUZvG7snSvfz3QVJNsvmN3MqhZuoB8p9bwJ",
  "key2": "2qFqMPvHQSWpfdcjZ122zbRKoSuVGUU5qvfYoKVytwu92fAh7Be4cxaFTKKyBCswfzFSQByiKG33rQg9FAqJD8tp",
  "key3": "4U7od1DENxi4ThYNaT5KqBZgSzGkThPYoBkbJbUd9TQVsMzsCxgLkEuxSFi42Q3Yb6L9JEkVa8ZiukRqnd1UtsEk",
  "key4": "3yLzjW7WrUYFcP5RRwgW5t7W8mW64PDPxjYrjbk4y4pcs23bCCvSchuADNk8xnQGo9vP2uYQvNSuTUgJNzWBB2At",
  "key5": "3SwyeRKpqQQusMvSmskpqxZQ1wHp45juUJXwHFMniowMLtv6nMUg7Mu5o3AVT9rxX9G2mpmYxfPMUeZT6Zbvbi19",
  "key6": "HnqCkzi3mnntk8LydUGiDMyyiVDNUBsDE8nMxvt7U84pwMqxfnoDC7eR5PuXK7qAREUjsPHGPrVCiPaWuz8ZBZV",
  "key7": "2UniwPd3mU61eRJGg1joujGaYdpo2c2Nf7u7HXT3aKXEVYm2fCwc9cHuwUuUriuR2C9i2232uWvLYCEbsr2rasLc",
  "key8": "442D1vKA4YzpseaPVgV1YfHQqm47eD3PEediL6sfyvhgWtSU691xyyu3BMtPcJe6v4ioSNtr2mtxHfvYdaeqxAk8",
  "key9": "2f47tUs9eF8Pu3wMKyrPzUnccYLFVu7o5f8gMprXhfh98qna7sG6Wo2MxgRJHZzBk8zbxiRKurbLfyrzTBFCJNv4",
  "key10": "5xmKdQifUyMTfzoqP4dKsyW9QFm451x14PK8EJFyw2Ln5NWekYwQh8hvEm5rrrkVn8DjJbXkJNc8mH21dUH85bnq",
  "key11": "52cGZNyoHvkHJ88kZ63vUc47NPR1Wi9MusNq8mPHMgDkQGcdmjmkCAGNeEs4jS9WiCBc4ykrfcqFWdzcevhpXUcd",
  "key12": "678JkynqMJrAxFz1zQgk1cPALBkT5KdbacjFE7ktX4zPnPc63f2kSjXi6s2hfkYjrNKMo86DjwPR6CFginZR9g9R",
  "key13": "65qqduXPS5Mq2ZzRkVaobtst5qMjsXoLz3Lmg4ZYZwLGUJ324gvELjE6WCRMyRZDejf6oSmQpA8iBY6ZjyA8gb2F",
  "key14": "2P1qcKDshVsbKLD4Nxpagiwsv7ZUY3ocGkzC4CcVjoYQJq7RSc2bNryjVBRu3C6VPN2rgukMneLRTjxi8tCvEK6B",
  "key15": "LEM4PAmKr1UTv17GEckHMw4i6CCn5L26tuYAHUWb4brMc13uwRTHHQ8JvKxPpRXDJonFs6bDpC3v2EsUmtGExsx",
  "key16": "4c9U2UXnxCg9bwSw6Ub6K8GCh1kscLoParmQqtChoKgAw1hreNo2qbXny2jT5JkDd26B8EWVucMNAKCjJwYba6kj",
  "key17": "3fMekZWbX1QD8648tdAVLaTMxf5BxyARQa34DZ9nAxJxSikh7JZsoYjHNAcvWKrK7F9SZ9Mgz3ixSfmbQf9EySdk",
  "key18": "4jJsJCZRoRdtNRNRbiypff4PJNLTxcWW39ehKwpn3h7TeWv3pX5kUHjsuTKNxHJVZt9Z6bmjHhXP5WS5e8wNuUxW",
  "key19": "4sF2RaZozri9q2XGfZppn9FdogyoSrxTmuz5ecTbqgsiFBD9JiWHwJbLMYrAAd3CxtvE94hscGVPdGaZhJnJKTBS",
  "key20": "5RsiQh6HNg9EviKdoHg1jVSG8pDabNFG6Zjkoj86WQKGrYDuN9EwXBzCF8FyEvS1daB1WqVjyKsAtiDfrr5WHfQZ",
  "key21": "4WvyVxo7MrfoLpbHLpK9mr6PQiyLwSFu1r81HpX86CGLhesbVtGA2qsTnvve9rGpauzprRzvQDBR244SwxvHut9Z",
  "key22": "2NtYMGXPLPBNZ1CvvCYxLdbWCx64GLotuLiLJEaBs48KRpmuYWTWSKSigJ1isEVzxMoBmHH2J5hJE6QoagDFXwca",
  "key23": "2XFzDgnW648DMRcXhcnNWUSNUj3nkGCv7KHGq3RLM8SjzACrw5dubSx23egXq35eKtqGVEPKwVcypV5WwP3iYvGd",
  "key24": "56kYeLiDGxc3hYsRZNKpFbkdGHnLyGfw4DWSPGBfMJKCMHEdqsB5Rq3X9cS2QENt4FA7bvu6yc6YStrZvjqxSWrL",
  "key25": "rBaCLaRcioW2dnXVdLEhhqH3piCfjUM2xZkC3sSeT31odBbNGoYNE4mJaAcktZzYs4NXJ9jmnE3XJ3bMohJVWTh",
  "key26": "4y27zFcp59S8Pv4q8meeArDuAfRc3NEJNdm9V1atpj9nDy7aUEH2RtWqQfowimKBia5dxPoMEVJjryZHMHewYmCL",
  "key27": "2QVjje6YeLnWmJ8yMWymZ4YgbhjGUbQWn1ipAGQcux6vVn3RnGBqwBieBaF2aK2AZ3oCabhYehXk1VdtVLiCgGbV",
  "key28": "42Hd2R4aLPhq6ZEuoUGRkio7BT6MhrTrLVVmd3pv2C7rdB5EFUky4GdvtqPuKZAC32TzfdtZHbwVdsPsZpigFFA5"
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
