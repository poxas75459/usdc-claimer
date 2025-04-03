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
    "27AW9tquJN6UT8ZF3heF5r3CmiExp7UN99AxM4HngUDA7KDJ635yPmdnjyRWQ7phsQE9TLTJuWtcWrbL2GKAhQTm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ynzpgUpqRBuqcHN9A5K9CY4ZBcYQyLqRnDh1zGHi5ZnoYRygUQk52X6RFYwp5SWpvaN3qKvbYHjfDfpars4Uvqt",
  "key1": "5RD5CExvNH1MwMVQm6msv1XEMSKUM6Dzb1XRNXvdBuxMFbzWUFfnZMyjuZ1CNrvGBwvtZ2VkUtvkJnz3Q4SJkmds",
  "key2": "3Lx19Kmdk4yBPTxAm1sgTef4bp6bzdB58ZWPMXj96EdsgsG8XTszx67XWqdKBc2Eu3YeighXy8DCpx7zQTDYWvtB",
  "key3": "fgdRrJKbJXZYuyBZHKWD272aLB6Kfx3vhQroBSP5PcgBwExwyt9FryrHETjUBE8C4UVQzFuM32JD52E9N88WSEW",
  "key4": "63tTJ2yNtxhwCNTixe4cuxrQGDeQqqn1V4vFJLfEcbJjKcbUNfM6gVN5aAqrcH56tPxRKD5XrgGRgEw9AFLfuES1",
  "key5": "2yhtL6jUquk6gDTBK4KQCPp8cRo289q5eVxkzKzNgnESpXyhD3j6H5pWc2zvigjkiEKjPDirDZpgC1G9M366EPds",
  "key6": "5VW8r9qC752cH8ruqgnD1ZeCY5SWJnyFYSRtGatC1v5EHkwcyXDrMkxcNAmBKy7NDpdNrWHKNUziwuBhk5YyX37w",
  "key7": "rBnWF1LDtVTkkHroRSuVtXk3M2fMoWk7th1mqxGd9TZ2bpEUhmpQXJ4CPhzS1XWUcVFUkbhxjNToY9TzGfqv7kZ",
  "key8": "3Umay49HmjTN1iZ6o9RcPS5pivyf76nmXsHTWQA5vGffa7hDmfdgy45P4yK8TEfnqZVqcb1vbVdWX6cGG1t6brWQ",
  "key9": "4zuJ6NrhnE4ZYJgwtCJmnqr5dpwqi2Tx1SCYBYcdDKUT8GwQrRWNMYE8FFSDhXA1aHsJppYjLgZqNAEX56r4n54y",
  "key10": "5AEX3k1many1vQpyTPG3Uh1FQYzc73b8tPd5wDJ1BqT9CDd1qhpNk7uzptE6JJZ9SmwBLkVT4WPGhdDzQEYWbSyV",
  "key11": "3z12VN62bg7qrjrb9aKZBBGZh7SbAFCUycDgUmH533tee5Ry9vuxwNx9XUjMv1owRdiZJ8wssyQcQdS4A6U4vNMS",
  "key12": "5NQDDcojkR8dboeC1E9bbReFtq18oBEPPbZpHb6U1Lk5BaeXqzB1cXAHWaRSZJ6rXsKFkqVi2PinzMM44BpNJg8x",
  "key13": "2bUc4DAJiTXU6ctpkeEBuDpUBrSQmxvci4xCK1HthCJ5cAFLJR7iqyVBy9pfjkPY6gJKorJA3utQMjQPFdMbgb1H",
  "key14": "2n1hY5r7sfxH3fbDJDgLCkDDj31Dv1bttkFQFm9KLZDEFqbaZH3kmJZeruaDGWPoaFDGRHfVdYqwvNdPxvgvPPEe",
  "key15": "iwmjdjZWcJpQsVk5VXQutx7DeaPy7g6tXiNS3JSJepuEQZFHM2bAgkr6gJSxuxZKxvVKp8tevF7czwe8e96Uho4",
  "key16": "32foqJ3ecF4gXNbzCWbuo9EV4hE3A1CJSRxTwADVLF79nCpYdxQgT6ZrbaFRqr2h35nP6vRyqr2Tfi2xDPL7zGpE",
  "key17": "3DxFqxdT9qDLFHVBmXYtqgYFPjBK699dwpYc5H53vuZPoqetBuHGrY1FDj5WaS9RMazswnVzGYURHGbjrUHogzEZ",
  "key18": "59aNrRykMZzPN4GYmpwSaTQDx6451WozsLbnR9ftkDdbuctC9BfQ5kswRMGfdNim6EvZ5Dmze4yvDsdF8s6t7p9Q",
  "key19": "2bxsiqDCQTh3zrNvQX1wnwqS436DPZfn5kL3VX3xGefynLU13A8kAVNHSSDFUkpSzNELRD6gBeM9hwe3KiPQCcmh",
  "key20": "2oFyz1F7X3KLsXiSkJQhV6W768M8nd7dpoyNWR5iSf5kg72GQn1xYjtENkvaL5oeiKKMruoEaC86cjCsH8emKf9o",
  "key21": "5KzV4Wf9kmvr9xoXXxErWJ5ge8kekbk4agMYYgvuLnNdZwuXBkEQJKECZYRZ3srtmcT9QCsMyN4XE3skq9VN7Z8v",
  "key22": "4yT7eeuB9735FcTonWrahPpieYHwhLSUP1mJi6f6W3AVSgyfquAh4dMu4L26g8Fu5AiDiJUGc1xtX55LuQU6eV31",
  "key23": "mgZM2kuawU3FQtA9UPKcoxCiTzNVDziFzHu9NZtpaN4nUrEgDo1fSCaxB4ksxWeT5F7jfdNgXzGtwHrEt8TQHjm",
  "key24": "3tJ4y3qQBENBY3vVypXfWMLS5wUK9rvP2vt3V3m5MiNfWpTS9zZXvxLH4MZQ4gvQXePY8fsJjg3dB6jEi3AunaAZ",
  "key25": "2yxqWVs3QfxbnkV9QdWLqCBhWhY6ewYUnT6vjdQrELfymvw8sw7AfWLDvbhiNni59S7GeFyaCRbJ7dMQFu93BHJC",
  "key26": "4gHixyVKMoQYj9U7pHckPn5kK3v6RY7mcuMtrEfydzzBh9Wy8DPmgSXbnf2UHkWuuuuNjoZhTskz9RNgvzkCu1fD",
  "key27": "5uZZSxZqYSVZ2SXyCdXT9b34ESSpk1aZp25wwtLryFet3LMhV1Djj6eJisvLVK2hEPmmAyvgzsABtYa3P55Zix3z",
  "key28": "55PJjxJ6upEMtKHV5TYLHit4uNL6oq5svdgTDyYF4geAkfmJv4VqAjJjE2nqzUd49car3gJPbujQ7rrFsYMmve2Z"
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
