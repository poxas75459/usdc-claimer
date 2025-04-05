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
    "3mH6Fhy99YBbvZXdLRhpLB1NxxfqmLebQyN5MUKvJ2SgpX27XYQiNmKYzXgUmsHP3iZWM7QwEefbURtzpJLL84fm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61JfvCqzz8nF7UoHTevyRb17kSZxp6TsvAEuY3WL8UKdrpGGodKJhgUN8m6rRYXBMGuiLFKeUqLeZKdgWhLbxM8k",
  "key1": "5URBAVGHRosrFnokwCHtD7uWfCHzfgeK9mcor8zQm628i5gAZr32M8K1EWLTb8Qyk1kcfCDERCniAGFnk9tNZ5rQ",
  "key2": "3RDpe2xA79U2DPjGo75VaYi5TNMK4VEVZ3GMsNNiCohE4vKKVhJ6UZ4YpyC1uFF3Lz9EXhi59Mv9nzKV4kKJ9Xc",
  "key3": "StkbSBYKptNxweg3GCiuUAgUehUuYqRoocQdV55KyRRH7BQqvvfXwCpWtBMw8Z2MHDYvNipQNAzupKiNW9yXykE",
  "key4": "dsr14zwozfL8RBGhSnPvF1oAm3WAAF7Mizk4DuSgw2K9Vvd1g7HvEkZEEufzfLjYcqWQ7TCSjB7fdQKL5m6ssym",
  "key5": "GHbXHQaVLe8bxAqJmFvVjKuwEHQmCaJ1yRcpGEwJohr648SeqNu73NKRDfiZQJ9cvypTbmPvfXecDBYmUxMJQpq",
  "key6": "2cpiRYX4RxCLjPnYNVbkDC1FvhkmXMGZAJKhidXad1ALDxo8HnuTJQM7CRAibd8xaYpdSQmqPgzHmM6freZUG4T7",
  "key7": "9HewJ9HkrvyB5nowcK235bFV5qBvAYqa7ybQKMDKKxrtzAQgLyreWVuTmLTq25Xp1YR638ABELrT674gti4VuPq",
  "key8": "5iVvdz33kb2Nm5yYo5gMt6Du7fMpHu79tximCYxj4mCWaJyykpyoaequbvtvGSYeuHmiaQL8Hsgnb9hzgniBkvK5",
  "key9": "2s19DRhJ2sQPesb22QJiPFbCRBURps2csoaNMr8PvuRZsGKYeprBpS21aE6i1TdF2sjYnnpqWJvCdTRHkChvU6Yq",
  "key10": "55HVPRLJSubch979szunPCyrFkBLF5o9U6T5N1aVjD3kFLjZ3reLUYuJYw5s81ay26TXRmc61DDmBRTY9aiEDuk1",
  "key11": "atyRxRSqQp9KrzFxfDd6SxDmPsmxF95yNZZEhg5PWrqcmUZKM7PqJmyDncKP3daAN8Vb3GpzuCjBsHx1jH94ijK",
  "key12": "4swHYh5kpcX9qkoAgfVum9yp3pgywHBHemuBGTnQVywsPNiJqUy67QvhrZTRdormjUNNWgme5o3zyhaAucEoHDFG",
  "key13": "3hwsbNr3KfppRtBpt7tpQfeRPw52wzuaDWFexQyX44Cm2mWxELj73nrKDoo9YyN3KB7jvqP5wr4RriR6VzRyK9KQ",
  "key14": "4cn9B4crRMhJyeAQjYCBRnNmJVvZ73WvCQ8QcMj3vNZyqrwSNzwfUyH3T2wHLfJeQLsA6eUX8PGrGmRz4pGCC3JA",
  "key15": "4yK1qDGGDUPbd3MM1HqwQ5t5thrV4UTWzf2bHJKev4Dn7cN1p6dqLnxZ9Z8Zrjn3z3CEK2ETvhvod3oWmYCsduQf",
  "key16": "2TrwRD5kstvGA3gQ28gzoYyC29pj6KwSFjU8cs61Zyb6izLo77MPFNrCcS6kJS1qVUKr7GqwDmac2AJVXMdmUzwW",
  "key17": "5Sak9W5PYue1NtJ2y1aSmaAiLqKLxYvNHr9D6M3r73jsiVncYzKqGqudtYGBv9rDicDyAddcFYWgjJef3Ha7gSD",
  "key18": "2iMjx9xsLM7PG4edawjaPLZfZspGKkL37LtypVQoFyQfNgzk5oFMkhMzW5QZEb314HqQnBu9dpM331BuPY1ZQEnv",
  "key19": "5b7n7ACLeosZPx6jtQC72oDyqvbWiEBdLpUsRHf6WdvvEDDn9EkPWGQYNW5J1cr6JR4QyuFurbmDXdmJyxWyzWr",
  "key20": "3umFvu18bZjhm82GXwNbZ6qfWHQNhy5aAr4QqQUe43MviMMwpDzti8eCcxFqrtaiixqEsVKbDjsARME2Ft9eB8Cz",
  "key21": "xP3G7gNHfbcP8xpExrHigjJqYKM58S2ohiPc1m6yUWYQrESKFAxZbck2rQ1oFsbRSPMP783iPwRy7bsxqMfGXk4",
  "key22": "XfJeZ6hCbpbET4Hj7UixnuXfSudqvqDXzdZVUwMdmM3zoePDgJJfM7yvtXa7Zw9uNCFHgKqC8AvwF3t7yZPhJWj",
  "key23": "YBWChMgNfP2wHs9JyxN12NwrWUTydup9Ni793as3jMpQgJ13bGwbKmBfgiQzaZKYfdiYiYJ2u75mwV1qHEiRxJ3",
  "key24": "5DyCD1h7tXwoqKVWb21C7TGYuUcUjxQQhaP73emq8vWuMVbLBHHuLPzPn3WRfRZ4vosM814wiC3ESW2ti54ZAhvG"
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
