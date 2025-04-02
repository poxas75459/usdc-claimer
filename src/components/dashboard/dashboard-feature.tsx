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
    "4WjgiwZsow9JUwEt8KhwXS9tQJz91kxYwARKXdjFvme4Z62SdPLWwE4R8oZnAbMXYwqcu1SnAdQ6zoftBTFFd8NC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SaMgjsSeStECPgyD5bEgNF5K2HtirMJPTnGaJqi5VfaSe6sTLk5zMpuT7VdZAdqWpG1x4LZYutFmVTkAR1eLZex",
  "key1": "2eY2h9XE5N4kfQuDMG7qoRUccBBtRwnxqwa66Hv23GLfKpr2VHvjSPaKc3zHNr3zv12fHvtub7cTudWi38iX8wC8",
  "key2": "32kvSXzaENWW9pUxBhauYcVq5NEMxY8cies9AGjPP7ALUk7FGwnAoH29YEuSidYzSxqqu1poba4ZcC6JVHEQurtv",
  "key3": "2mBBVWsZqhXaNqEohJe5wiPNPBJHQ5hWEmqFMcMmBUTx7x1KqCNc3VzEEashCxQJtmDqemj18r4BZVeX2XoC5Gov",
  "key4": "3hhYdo1xVydxsgHN3cxrCtVT8nfvmZQmmFSeF57q98yJMgpETJDPdpHg73TK3cUE6iRHrreRtSuKXa8uzJSWjYAc",
  "key5": "5tdfYPjaLJ4W5kBahjfWVasKaU8xdD9c2CT7NvyemNbg23iFbbAuypAYyJTNmYDhnrVfkNLGZXKA48a9wDwbj9Uo",
  "key6": "4L74iumZdofow2LmGh7g6UYydKoF6uEto1o6F66mozAPxsYtz83KknLRyhLu7FwtKFAP3Rw8NaSYHh3ewwPU4MqU",
  "key7": "3QSus7rAabDaFQABEFjMHznTMLpPsYx7SL4SdTnyLja2XZSo93cmk89k9NQpJrUaq4p2N4dn9zS8vQwRqYGqRBv2",
  "key8": "shn3cGJv2mgGhvWfzSHaAPvrmzZhJfRFpSPxMPzWXL3cbPJBuhne1eajAZiiwVhnD6g1VNUAWcLka4aBA5mhJr8",
  "key9": "5U7stWDFEBLHArcw5zKsRn1FDR8iVoKd5aTkWQFsdQi5msxk9faiMwaWjHFk7YXDgUjV6e4DcEpDJbnSE4wj2vz2",
  "key10": "341Jhqxfn6iiSxTxmm4srmjJ8vHPzoPFFxh3REezV83c4jeTTZm3z54gJAogcmPAkeHB2NzZKE4JazD5jyjince6",
  "key11": "CRf49p25n1UsadxCGLW7JunSa5v9h4acxW2nEbHyiUyXtPUZnCCULGcbeTwpuiz79jDEhSi4VRaUoBbMP1MGZ5M",
  "key12": "4b1ssoGugJ4mGEvKz9asLx45mw5pYEZ6fDwXTqHPVjnPNoRNea3LcGEzwCP1fC2bMgK7ifhbjFjTWyYbC4DD4AT8",
  "key13": "3NpbDgx2GXMCjYwtBD4fgr6aDrGq4FN4DHsymLLaLX94jSxGUfShGTduZ7R3az4M5TMkXQevVqGxZ88b8PP3wkBY",
  "key14": "qsBRTWKWS9wrScS2jJmgLgRtf1wf4oziTwwdkD2jJinN8RVtYNbbkYaR6abRv4uXzHSEL6wmaVmdgsPGeL3C4hb",
  "key15": "mus1oE4z5udXUck5YGdHbcfMmLLj1qX4aVppzeBcuvEMNvN7rzzx4tbFkfadyC9spGwJz4gThqsNjt3nxcaxRBM",
  "key16": "3Taga5Vz3BC4GjWg8bihCCpQUntrZQ1MBuDtx733zVBsC75j7m6y3ZriMnA7CnZCroFnb6k5Hfehmfi44f7nHkwN",
  "key17": "5wJNRxxReHsyUD9rtXLrsJHhhMtYBhpBuxkPKKvWY7SvmaXKWaTyVrgofjvDV1ivsp7m49Ftx2H9QCAkaRydYTvX",
  "key18": "2Wyv6mu7qGcSPnvAzPfXJFsJhGdWm1cbzMHvDXBTE8gBoQp1dc1C1dC6EesnxSXfQwJpy1mj2AyLvJgM4g7xS9iP",
  "key19": "5KZ32F1iF9ScCCuTR5LET2Ercjrp5d56jJCbFzrjKv2amPAPPNcJGCLZBuHd9bjKooATfgdYBDcxiXSwxqLG29JT",
  "key20": "5TDX4ZQAmzfoJuzqmBdfmkDpGUJJ8sfqoNPiBYwBqEYGTuwTCJqe638XZjbSrodKpxUYjCTmTLqSTY2bcTHppSc7",
  "key21": "35kaM3vQEdxEQk1o9ZEhGzDoEvkpBBfbUkXRdnD5UzR5VFsYgjLrfk65HGaNwodwM5XmMGkJ4EPzfnqkyZSrqQzL",
  "key22": "42bpsBCi7jLTKgGeGKZrvs7y1SXbgcwqyyLP1m8zi5BQjmAbQB9acPUrmmmUgG5kzgUM1654BdYffTbr6WJMTpsF",
  "key23": "48KJxPnrARJXvec8ZfckyAMR5JDYWoTD7i9HDUcJ2nU6T6iq947PSsjgLh5VpXKYtr4NVRp2Pd3DnM5ASp8wdvJL",
  "key24": "uyaWnDXNcXUFw21vQGBvjsHnUuAJm8kYwB45jJPvDhM6b81SpPDwZf8pCUbgyVsnimWrgBuwsf7H88kVVSkML6t",
  "key25": "2M12dwbWsBAYiuyz7wMYh7NwLLmwAhBt3MU2AzXQizUp9qL33Pr6aqi3nPuSCysm6jrLEqDiioL8vtgdGZQs5E2w",
  "key26": "4THZxxVtXvajzpL798KJsXQ9RdvxCzCZMVwZRZeNvw9rkvDAtArc2nbr4B7j6YPCdW51qwEKijPdEfeskKoHf1sM",
  "key27": "3fUb1y7xeGu3W7i7U1TZmPy9Co3vjCp8bUM5Ub1yVN9gADMveG8XW9R4bpQNqKzxtpHPD64SmVzVaLwA4MuVUPQk",
  "key28": "5S6kvoVYuvFFkLgGstgxUr7WtTQvQ553bYEAQixhkV1UumTuKQMEksTa1eWpcG1jiHXvAuMeWCf4hnVdLtz6LR5V",
  "key29": "3nqwhismRbxRgfRHBEQ5UhQUsYFCUYysGVZyR2Wcd8r13ury3ujYLd5U2Wothg5wqHLHAXhtnnFS4DKMcMH4hQwQ",
  "key30": "49oA5bMGHgHbvMGQov5MBBmiTtkft9RMu5LnPMEK7UFKg4nw1Es2Fqq61W6QbTeFH2nmi3sHDznwev4y3Zw6LPpV",
  "key31": "3MFznvPKHQbwVwzySCVSCi867B5iWPUaoHpXnVajxwAptR6f2psR38LXL7J4iF9aFdF9ve9zojYge7moJ2SBmJC9",
  "key32": "CjGP3Xgivqsgq2wTQdPiWcmkYsMpdHHPzBDM9w6uADhxEWrDP27K1BN79zsDGwe7CfvWDvURh5y2CJxTovvkAp7"
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
