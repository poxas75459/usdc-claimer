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
    "4vdJYTf79BGabSDmPWa1GcgSnjf7mcCGa3BYzjncbt3goHm6KRBSXJKQFLEvsdy14hvFgAmSSbGbYKhqTEMaV35o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4km2zJKyk8dKhV7bJ6pYzKPvUrbbz5yZ2hoG7XgwMrmcTjRGtzNsTJ5aWxJHi9wGrzGpRS7QQtMnDSH5i3uD81sQ",
  "key1": "4BG1tn2aPow2asJDnPXv6YVV5ZBNJgnPiYRvzCKkYk5KQsKGdXGPcq61CcSgshNEeWm8hosYejHtRVsr2bvyAHAw",
  "key2": "aswzzNq8Jvhu7Q5Trg9Ad3kg5vPTxU7jQUAXT4iExVo2toufrBUpwhKmfifSYXwHS3nraxJHKsETFbGi7LLmrhs",
  "key3": "5jsJhTtd6zYx5v9kSGRcHCqBqZj3dcp3MUoWnkBL6gbeUbRY9uwpfrdA3H1TTxtJwY9QUAucP9Jo5wKfNTXTYqyi",
  "key4": "4VrZE4A9H1MAtzVMPL1u9gu8kFciYaVJjVEz5dsXBtkf4kKqGvfAGRcqPSrLKbiN8iv387XuUWJqmAeyAuzESBwg",
  "key5": "epdZBHbexq5v1JYw8uCcns5q6E5fMFkuSShjTYxXhwBHJSMiZyT44nPXWgEiYzG6AX1GMJRUCuiwq11xferJZDP",
  "key6": "2LFEBG6BdxR383tAzBsE955xbeGNYy7hYSQntFmpoaQHmfYEK2VjTrB6o7bGQF4xXP2AvuQfkEL8CW7yuXDwFrQu",
  "key7": "H3tKmyvNkRuoh3Mz3zm2PBE1uLjmF7cG8ZbW3cVYkCUGaniZSq5W8V88qK9k3afUzjyAq6NmR5nNrMwDSbK9fpc",
  "key8": "486Dg6DTwGvAycvihZgArZHwCZYFfQ4tMkQuTFiBd1hhXipsYJm6dGwKqEnrxZwJjVyZobgD2r4kQKVP5hxtgRCX",
  "key9": "jzjBA9V1jwU7eLTNRqh19GjPvhWA75rNY1a3PYSBJs8onoCbcNc1Q3hs2H8iAqM5fSKDtxf9AbzZQ3ei2sYjNKn",
  "key10": "5LcPubJCjWEHUmk96M6jXUhzWfmMwNyEqoDpPhiRV3xrdfe1RV3HcrAjxF79fzXNDUqr5gwpbKsXpPYjzpmgh3sx",
  "key11": "F6SoiZ1tfxpjW6KFdtTpHsdDbmZ3B9W1iSrxG7fbirHhYdEzMJCD9KvZWfTLAitbanwAMt9iM2S24h27Ck8XoNn",
  "key12": "TVEmxH9h2yoe77riisW6cExSwaRZXWP3vAxVUMSY8vukitwoTDvRGsSJV2STtgNYtcBuMnzJpca6byMTyhfvwH9",
  "key13": "bNiWjEP4yvsFUWL2maBh6S1vv9sNYKQ8DTfvwWoM4aYX2TWQCXXbxBjzdZNK5XTxkSNUmfUz7xcGRB677cnthWb",
  "key14": "3onNtTYGGkTf3rzKLrAy3AxNSGUbD6abj8gBUzYfxuxxKtEDsweszabQw44Wo6BdvL2NDAUbRWAe9ECXF1rgEaND",
  "key15": "2VKoDa4JPbuSyT62wFTUy23RMd34NfAnDEv9uGRYQnMWoPj4rSaFBLkMv4RNtPRWSuV7ZmYV8skRtcq37bJnNLwb",
  "key16": "2yKC2bTWtG4KMHD2LYnc99nbzqAGU4s81CWxjUwwkDKo5ZuPvNg9ZaDsBkA1yzHX5iU9XWxb96h3KmG6oH2v8o81",
  "key17": "3HEPPgD3sdR1Fw91Vzvm96PA23Dg5G2FpGYdKNeoa4sXXBvumzZdoh86jMJtNKWfhbBUMZPqbZ3wSaxQwUithoXf",
  "key18": "5qKygi6NhcHGZ1AVTyBAiHoWbbitL94ZNUQFVzNveXek9LpW67z92bhkPym79Rfp45wTvhGQX3SDp7gfXMPCiVJC",
  "key19": "2ANJN7Jv1xzeYexttbk7cJ2T61rubMTe4KJqKY92ukGgk8oyqeDohZncAFxDCpFPLZVG1qx7yt8omCX12scEAUti",
  "key20": "22P4ycEjVz2Sp3VoiafMmzzTeKK94aP67aL8vRzdaf3mUcuAErjjHpZLr6yAnfrrD6Dn5mNknftmnSvfHFcuRzQm",
  "key21": "2hirXL8xvCVEch6Tbt8udVJn8qGG2Phe5tGaakgMt8Q8QJTEgY5BEvR9MyDMNHd8DSpW2zDRksCzw7eGpDuSTQ23",
  "key22": "36wk2UDh6E7NbG7AmkfyjVsnWwJFd6sUYt8NNiX1PRXZezyHmZmgKc36dzyQ2w1WDAU9AmmAdpRGCjv4Zgg6xG1Q",
  "key23": "2wvvXRfk4ktKBG8eUasMuvPycNRDRHWqfBVKdsE2iHgNKb8H4CVBRvvqPianQHrF6M1poViLjCCokq1jmds5QwFL",
  "key24": "4YD71yP34aAogbL3bBCxUqRuvGjavD77MhiDpSQyEfBJPTAnyf6TpYqxECjvvrXoJjxF4zyRxNtw1Qap2Dh5H5WB",
  "key25": "2dBq9yVT33TnZgt4HnHm3wRhysojToevzT1BHZwnWHWmKnGSPgwUQF2m7pvEx3f5GvPhDavgpH1RiBREBeVgFd8K",
  "key26": "2LqQaARXYHETAmZNMW6nAfiLndpmHcnNLXrXDnzvcRuw9TpCY5r2khK4nYLZedB1gApv9S95prZhHV2nrWSGfAXu",
  "key27": "3knJbbfBB9bp531sDrPHFqY2pK6fcA9NNnkRyJhTVtL62tCE8tgiBtrJKvpyRFQfPtaRuuia4ST7VJRc9DsoVoK7",
  "key28": "4S4Fc2LvkZgMADGKDqvVtEruUP3SzgBEzoGDFw4m3wDGQQVj8VvN34SVBTq8exfMLrD99R5QWVkxQb5B5SNFhXQ4",
  "key29": "5vvL5ipSpXiQpCLkpzHTB74NL97q1YfQVqqGbi4KdHVhuX3Mec7Y5TmLXr5M7rNazgnXEHtkF7G7uZFCvPNy8CBf",
  "key30": "y9SYYbw9vRpeSUUHuD6HP8TyTC6rKMqRE3TWC9XKmUNkKpvEt8Yw8pJqkbh8NDBBEfdaNntubkYHR9ckGKLPdHt",
  "key31": "4oeCVzdjFhB1taFG4vbb6cKnyJPvxpQANJt3PG2kRdFP9Ks9RCrhvdFzg2J3Yv1U97APtfvqLSZLAfMkzUZHvsuR",
  "key32": "2PuB8CPZv3omQUNHZYQRfDCSfpzHkstd9JN3h2jz9pQEG9H3Qwuvj7fAgixELLJBb53DCq2JSW5tXkvCMPCaZMxM",
  "key33": "4hb1yD7zZhyn2z7s9Tzs8cWFWbm7sUjwizSKCRrKLmoyqkQKm8aKULmhdwWZn9Lm8eojtohNS83NykW4ESTx6M2x",
  "key34": "5TMTiW1Y82wZcLwXo82H6ZnM9HjBxqerF6VxHDL5no6QgvWoKgyxea5MDsABVWU2bo5JqWm9shrsLWeLowdcAGrZ",
  "key35": "3VcEwzcFvBDH6v4mLRDeFzDh1uvcHWvgvqNofruLHfKZmz5k3Erv2nhGEdcESiw298815QRo57bJgHPPvxq2GhEf",
  "key36": "4E2GRMRjDJev1zcMFccRfUULEH3pWe7jfN2FqoVsR9af6LeATPAULXnqU4peawPw129xGRGvGtVq1RkCTX5wFWyw",
  "key37": "2YGUuxvFyq6xd9WoNkPmbBqLP8vXKCpgrk9Cfztu2co3ZMuehVDiTFHtDYbRBtcyLd99d9bcFFVJ6i6gyn2dhsrB",
  "key38": "3hDeqpveLCnxBmeQVeuAoZxpMVy22xXVswXtKTR1jkM246RMD9a9bg8byNszyrq2c9BcyXXgQPmWY6Fbd8Af3XUM"
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
