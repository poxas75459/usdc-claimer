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
    "4VqFMwBuV1fugxr8TzmkQhHuEEPPhNCeWtMttCbDvWou839prsTGKeKHX3NcohcRBwK157fQnXwbz6ZBYYrtkqaV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XDVwAfvALCjFwjHW7h2gLCFaxo3ew9fN2m5zf52cEjETekDEZCgDdwnARkWg9Cv875UeCyJZortQMGfv3ZCs74w",
  "key1": "51Erk462hHf4okTxN1ETes54hcScARHPLa1YoWWLoyy95rX8cEMGsQNJoaDpV3jp5wKHPPFTidZXuUafDTs3kwwu",
  "key2": "54xnyEUpcupnBCRiZCtjBT3oGNWD9JuTEAxrLUb64Hz7v2uQwrqyXQNBPFtiiqHCbfxpss5jeZX3nZvteyZzU1gi",
  "key3": "oyro7on52HroEDUiTtdWXRLAMRapuKAZ3T35XxtAD14vzccmJQGjftXvEgoYwpfXyMBeKdSAuUCrZ8fnREVPPZE",
  "key4": "3VGjUy2UjsWjRyv5oq8LSTFUEY3GGx34GwFKR9579ZN6ucFjWzEXsno3swomgfmFKbdyZdQ1hiigqd1TTESyfDt8",
  "key5": "tniXJ8UcnEdnjWB3HpBVU7hEJv8mjGudjbZYeKnHsaGTb9HJqxyoxoYcMjSKo1BCYrw5Kadm2VWTQeE9qqks9Mw",
  "key6": "3XtNdnB1VKgB7DW9ZQ7HfudnNE8xtosz89yxZdDBGXnsxyyT6ErqoqGbXrbidKGXUkA95s2yhrereRVdZzoUqvr5",
  "key7": "5DGSEGfzmMNfPh629tphgaG7o6TDjdfGKY64cwCQFpyPfsNt2GzDbbciZvzh1fZjEJgLJdWphmSNF1mKjHQGXX7c",
  "key8": "bR5KBKR7qP7skdZQ1BkheWtJwv3k9CW98caLJZNbS24RQagtBZA22SZGYDtsMPvd4s3esxakh6pqYHgsKR2mazM",
  "key9": "3TECpEoh1LMhLR1qi9do75mLAcGJ7tcpM6YYr7MJDdaCzhnmApg3kzhA3ns7hMVCnSxcLTQsFsxESypFcDaJXqHU",
  "key10": "5cVWYe4BMA8Haryy7RP7iXQrApPkqnSMKXZKjexRxehLNMrjRCk218K3WPHL8GffjWE8RonwktC1bNjxvDFG9Snw",
  "key11": "4AiCzfcxJrmrHjiyXFfMoYT2g8vjdG69QibPdgFsDeqVye2wRZp1BH1hSwznxs4VLJTWBgBNXWpRNp8snHvP2p1c",
  "key12": "2koUHPcwQZdMz5P7we22d84JfBbKJHSC9s1JuZGRHZL7835fRhLneRAG2RUX4zBoDDSgjLtTSNdAmow9EoqFKqnW",
  "key13": "2H4C5Y9ZDjCk9zd5FH784CDBLPydRa56DRobQQcYffM7pCYWxdoRXRzkFZ2VZWVYv4EB8Fem9Dgkm4rfNNrhRpHK",
  "key14": "4VKzDshzMNy9Erv51rtjxvD1jGqZYQNpLVMeztdY5ppSRDNkchC3aQmwtTCUrkWWfeNRAG99Be3wZDj8M2YCZnSq",
  "key15": "22Lk7bRTG6pohS4L7gGfewGpUbaYqavnp2PqYeoLyBKmMzoUMczdRm9duSab8qXSiEdMVdfjbVQUK4X7yhbZ2zRd",
  "key16": "4fNf8uroHExuDAUaiMD1iipW6reQ4kUYdHGq1EV68JSCYrLZwHt3yGbzT7wMjtWuJe5BMNqpiURZArVH6Kov5HBh",
  "key17": "3ZbZgbY65eqe6ebC483AbFwEpm3behu9VbaTtP9zGeQDMakfZJCMkyHCRgRAXrwjDNwdrjNqGp3h8HVTCh92Syqr",
  "key18": "5RsB1DQ51q3EWzvvq87YJBFoFNL791PVRCdUJ7zq3mKqH5JBDiEmg1xeKSdFAG8trFQkAKbN6Y9DYx13YwekrGxr",
  "key19": "4NXmpfxyiARkXUSNGGh8QgPjV33zj5sFgpVHtJhPY2GvKp2V5tzJiEUKpt5Ap9sEFrM8jHEAkZG68PbSp7hBVKDg",
  "key20": "2BTvXTJ5KayP8ecdftj211Hn3yojzm92ZyGkV5TD7ExF9FRzpTnQ3cvGAWDA9Szid6ToTD3QHmp9bUw8bZ1SEkaF",
  "key21": "3dxkiRCa39TpRYhgFxcAMKNwPHiqCyjdMfiGBZLVVhHHg4RsyMg13MG9jeC2LJ2sX3aWq6muyPtevcqQky9N3rag",
  "key22": "65qhfzvi6XLJsGUom9vkuLCseMmepbPzNfpB4Qnm1y1kiUhmQLpziuuKYyqCueHf7KLYRdhuDMijBPVckkYurmJr",
  "key23": "3UEsothe8zGq3u2wC7rzjbXuXE9VzLwvNyRGjKsMeB1cphL8SPVrW8EURTRPKZ1zW2t1DVtz9xo1NvxHvTqwPt5y",
  "key24": "BbiqKRF1EioyvEXqZ7RffqFkziGtTjLSrDvPvpRUtdf7NpbsuTGngCKxz7LkCbUEZp4iCP62m3YB7s9cnjziycS",
  "key25": "BEGzzQsGi2cDyyqLYYKrom1CHdMP1gsC8VcoU4ZeFeCE2SZ1GBReWNhZ9XbERBzxe2DFmSYabkT5MhyuzGcx5H3",
  "key26": "22jy4XxU4NoX4jRcAYmwNMz2A3MqK7NcJajZ2peBtV2cFixhMBZ21c1FzfJLsJpHJCHPyicrDHZM7xxW4StGosA6",
  "key27": "4dLq6wdVA2i6EguYyhytwnZQnparHoLVBCCwt3xW1Xt3iea6E23jMdFxXQEBY7pj3KVR4Y8F6iTHYuTssHnv8KYU",
  "key28": "5uYfeP5paAhvXYhQ4DAQwzKDj3bDqFrkjkJiPNqGzt6Mf7142DfgMqqg5LtFBANVuSR7HTHx8g8ZYT6RZDqVR93w",
  "key29": "5PVduWMPuEePboZvjBxcYdwf779SvG2nddYch3Dzevm9pGnq6zk3zRAYFLJGfBMv5G8gfDybyDoY2JHf2PqzaBYW",
  "key30": "2uKhQowJGjradAWrwZDHX8kF4hrHdr2ZQYkWjY2XYtbjmekwjSWDRtfQtWqgtzMyc2FUzTYR3ha2vifG9LxMWnB4",
  "key31": "5J7cGhWAf12vDK3qe6CV2tFzttUy9VebMJ9tJ5tnJKxtfrHC8HVRy3i271PJzwB2XqW8MAvHvq1aYjNQ9YZKkqtd",
  "key32": "5NBZLCWZn2BnpT4Xih7PQLXpmjrgpsEBkJFBPDt7ySHoio5Lz6PtnuDoYTuRsXGS6F1dmXRufAwmDHLvXfMrBGP1",
  "key33": "3G3MqJubtNTuYiwoNGw1PPwAqZnvZ3MuABEvofdkfYEQ2mcCAsyCa3DoRQuxr6ZkmFkTAm53LqpT714ggcFMbPig",
  "key34": "4sSUr6hytfbtdqZsGPVHpAWJq1xsXUuR9TQ1k4YeLG48ZEneW2SrmeZvcMTMUPj2VrPkTDUm2MGnDw1vStefoSKE",
  "key35": "5CwgpUL3xU3fdTSm7C4wJRRgtyrpnoapqWPqRSQWeUepzamURRurU34WrMtKg35XeE7KTu6hqECrNKxNboYxLf5S",
  "key36": "3Pr2PWXoMix4knvpyxGPQytoroXKk3vhVTKCJajCMYWbEn53W4b1W68oiq1G4hiJRCojW84uUky6sG1z5wiaQnpF",
  "key37": "5o8J9wurcveXAjoT9617eEqnLJcfpfwpgFu6BCxy9aHJav5X2XGRwGUWtYGBvPCKrFZGYDSNrxitF37rqY1MFCFq",
  "key38": "5B31Eaiey39fzkwTfyCAvP7wGzBmk9RZFJy5HbWJYULB363hzPHN8khjPZZeY8DPyHPPc3Z4jZUHMKkzMUWsZ6jL",
  "key39": "44hrof45zzK1p35AHSuLHKse6AQhrqLQn8b6MocFBs5HiAwUF92vkjBY2FDqRfHL74UN4BtvQqLZhEhZdSJV98JL",
  "key40": "5MF8U9dNDm5eKuRZ5NB1kGfRUSU8XmiJUxft8d6HDNR5WXFvSvHtK4Lf3Ltdrrae8DH6t6HQR5UL5inwAb5i4qsD",
  "key41": "21GDBrdT6yMsz4ysw44Lp8Hzf9N9M8o1e9f4uc9mjZpfBX2VvHwM98DRKMZScx2bSSeDaYqNKwLMonmkyojkrbFZ",
  "key42": "xp29RRMBH5FvixxpUaRg4dnjHLfZbqfFginY6K6QksZMrrsLdV9KbzWrjVbjJg3Wxg9freZ1v9pDEJh17zjkSmt",
  "key43": "4RmzXcEum3PHuCZgnRh5iLCerJgMfCFBHR9gWST8CY9o1XSYSV2Nnwq5Q95vc5nmHqpfvaNoNYyd9zNLFQ71b97P",
  "key44": "45oWYAEzTkoioJ6uYdneYsNK6vCgPFBfTRuF6cnLAVRYV76QVEqyCcmiXZVk1BABTcjRDrwVq27MPm2hEKXZhzHQ",
  "key45": "nCzdmiNGhBvEbLTTiMEBwyQbZhVKB3UXHFLeYwyrfXRoK6qKVAdpYXDc2MS1m98x7KcYqaqzyzTw6pKAM8yQUTP",
  "key46": "2tMzT35hQRFn99a9mR2XQKRXH8QwvJd3RFu8Y56xoohVN4PuVgkvECi4povwfaRSMmD6iMnwXRhvEHSoqMGWjPro"
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
