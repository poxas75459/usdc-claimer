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
    "EQPCRrEjL9zWaGmYyDdziaKD6EGA4EXQuCyaAGbGzPw63f6bq2pSsi3MHCd5FdWfmNYJqgiLQapFKkV7S7VCrmq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zBViMo4QPwgUmdJdBapftwCT7oQPPBPurKyrb8rVzAy6nK7dWrfkEgi5A6BzXNHtXQbtYpLsJJy53jxbQY6UUZU",
  "key1": "4JE537Jr6mMcGdm5N3XBiouiWv1dmiNnF7ZCAQSbMJ6eL8w9xbaGSU7jkhSxmP62xR81T2E89HPnu3USMcgwXVY7",
  "key2": "62MrRkT3X22hJuqvhkNfKPWxCqBULMFu761yAh6xZ7oSMAjm8956Fnfb8cpY4a7vL4b3QdRSWJeytuqAmH6PmQUD",
  "key3": "43s3Kw8knJWpQur9sNxHPkkbinfqnvjNqKUKdXnXbu21xfgnuhEcc514anfJXtpZF2SUQE3U3BAmc4MgFj29Q7Bn",
  "key4": "2VWHfF9CCe7x5e1n3N3CmN1BDyf7sGb5udhzByL3L9kHN54Vr8eUUHDpzHCP7oQq3J2L6jejm1e4GzJ4axyt7sKx",
  "key5": "2o4i7dZWo3edNezL4aGcpU3rBBXbFskBT8YrCN1pFMXuVp6ava4fB6P7FQgPPWD1NpaLsX9qBbHM2CNpF67qzabA",
  "key6": "6gEAr9Pr15uwgbxiuSCQGJ54L6ZuixJSp3LhT6hAoc4oZeLRi59sdLMp6GLXhBZPGaNSdZTfmDeLAM1xJBgH6NC",
  "key7": "2YBh6B8pTiAWHvBdtuPYuKLbpfqWhQbSqztCzZvBDUAkDLoFECqnyi7npCNHMRqdWMJ3VDDhhSBZvpnsVR5Qt7Pf",
  "key8": "4wR3BdCXJicYBdMThmHJnQjt51eJE5zBtK5NZwTzRLJQ6Kb8Qa3fn2KY5NeqpU3RTw2bibJZj2RAGUUFunf64Ky3",
  "key9": "3TE7kWbjHXtcR4FRzukVStSwrAuhAc2iJuhth3ALF1i16QuUMiKKNTR4hB2qauy5QkePpZaB9TozyHyBvYANVLJw",
  "key10": "3DfMZtcGjxi7B2KwPDnWAK4LDxUpBTDTmJ7tuZk4QiAUmzekF92fWyLUPZabghr9zgR8yhR7VS4agheEJuQkBmNP",
  "key11": "3gV4rjpcjoYbwKBrvezbHHStHzP793VebZ1DNnLTgLbu4qBTC9WqqsFGE1P98VnnPTihdvQ5kiRK7x3vKiZm5hMu",
  "key12": "5UGt7L6z4SBiM72u3oLeC27RRrnoN675TAPmWxXbKSk9GEfZgkSjrgn7HbzZxnyighcaCf7vmSqK23zSGpEDQXZV",
  "key13": "TYmJBD9ft7pMhAJPFQ8JCdgj5CNPz5mUnABRwP78TB3HKMSs8JbiUQEDVChbuWgdxANhDDarZXqEJqseAf6pK9U",
  "key14": "y2p4SGhPyrqihYuK8aJ4qbXMYwQs8oNfk5aarozBr7bj92dT8NbmPXmye4BW1tCBNwVs82GFMSvHeApJ74EujXc",
  "key15": "5xpocoDkCGSKiPgjcT4uCA1rXuGQMtmFyYGa74S7oxE8CgN8E9cQ6A7zQLgETpWaVfSZFk1hLhvMSRTxPNJrSriA",
  "key16": "6bfXN4rw92FgB5e3QTRB5NBAwJea7qvHRR5RvqFEEgr3vmKyL3waaZWEq5LwHVHPL64wkmBfVQ12XFA86yhijrt",
  "key17": "2nH8tEUDSvYBTEzeWHVnaHMzuSnEtQrZvyFmPrJ8CcogFLftRgpJHVeuxtFoTpZuTWSGXguqawstkkKhqc9uxNxN",
  "key18": "5hjUYTMMk4UVBN1c41nRQ4THZG2uDJTNECk6nCa4rRj1cGHw1HvaTagNsPcTTKxmYfxZ68jr2c1AYma6QKFEsAg7",
  "key19": "4AzYCuenotVJSpUZLz76gLxEzSeCUj9XHhaKMwhHLkp7fC5HfptJw5UmcmG3xhHYzjZ6mXDZ51nT1qeRrTwiHdyU",
  "key20": "5gRY7vzgsgR7fzBgLYhMfAUJBkwizjSEFT6wSYFFVG5owhGijn6WRW45xupj9oAZrdrGtpL93YhwuGDeFoW6avjS",
  "key21": "AqHSJo3bn5q7TEZDY3GdjuJoB8XnGFcBMbE3wMynBv81x5A6Bq5C29grSUTz5scxGpDdePDe5YrKWwPscTY2BrX",
  "key22": "21L1B7B6gBVeMnxxzTd483i42R4bMQk3WQo88u4oNVjAd4AQbYpJZvHjay4fi7wUCgXJ3QdDSGM4rX2usniRRp7u",
  "key23": "4GBHSxeAhPBwA36q4vyjXAR12eANirUndjUHdQs6tHSv7p6M4CJVtFYCZ334c7whusyop7h4p89K8DDNKpocQWvi",
  "key24": "4rQzzNDQA382t8uhpNXBtqhNsnNquQVCJqAaxoqWpQCoExGFFiWCFYmgQ1nyRW8TK2wuF9PiUTctzJYov9Jr92pC",
  "key25": "2XYe51ht8i5ZbPFdyEss7Tdra3SmAMDUxYcRywbubQCdYNrAUZwT6HvCNR5JKiwSYgZicMdWSyucWe8hKijvTrgb",
  "key26": "2nD7dygzmmx6pBToCxaJR32yNaeNQ6zcRxtXgrYXsvseu71ZmDMdQXF9ehmN9saWzMj3W7fTsbVnrPVyyJmjmLaS",
  "key27": "GkhuTUBX5cc34Nc8JW1iX4iL5uXrXgMissdZ3FjDbgN5Kwmx2ubTBxV6rP4J8tkW11iMziorCnGsCnUStj578E2",
  "key28": "33pSgMYZ2vNQUamjkfFCUm6NZ8HasCKfeDXfLrNJ2ktBXVSsFatJTWg6cifrP5FCXobxgcMvQZS4XpgtpTeGopmY",
  "key29": "4M4ze4zRx92UabTUa9UJHpFtiHWSXYbCzixMTfwpK6qQvDeqxtxq7h9Do4rsSkXF7QxFnBAcywx2whaAQLikdbvu",
  "key30": "5TdzHua3qfvow378Z38XicmsuBz5i2sNWd6fFaYXSznLd51eZtybNEfMXMrf3sVeTRo4nifbRCv5fjDCrBdyQgmj"
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
