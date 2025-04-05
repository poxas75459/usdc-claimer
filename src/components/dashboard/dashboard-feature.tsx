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
    "5LSoEFGXFMsDjF7pkRs6nPGeQmvSvcry4zUQrgBguQ3WSD2fSxuQCSPehb4NrYGRwux1h68BCnSGUEdh6oquT5t2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XQVq8m8hTvCmiKUJz6sN5J6TKH5NM82hpSVytnS9JrZncCzDJ4sHeGfwCwjm2NoweTfL7gXYgVrnEBd6xYQV38x",
  "key1": "2vJPF6L2cuGZ9Bua8QvCPUurBG6eULybRSQrEsRz6cJkbmXP847pHPQxwv5pRawLhwW8q9MR6cVBdgQ3W1xKgwjU",
  "key2": "kCRkdjkPJ6AxwkpTcF3xui4rbEeVKaZVdp1EWQK2koSGC6WVACkRBPhkDjN5nQspWRuuqaY3ZnMjeb3mCJEtSec",
  "key3": "2NjqZR8jonj7xxWW666TPo76Cw6oExBhby3BBdqHFSwfqePGXXMAE1b22MuhMpJYdeikBnhn8rv5qSZXrYM75Tqv",
  "key4": "JdYEnidyZr97qQ3oLZQ7UKLrdMX4o1mjFzttknbBp5RoBjFpGCVDUA9QJ4rGiLCUYo567jXWa4DDQ47rxJKYiza",
  "key5": "3B18nG6MRX155XhkztRkqDGQX6a1iQbiBCerjCuAb6T28mqxPoMwoBPjojxhb5ScWNEZ3MWNtg1UhhFJEnM7YCCy",
  "key6": "53gFJ3sDyBHC3pwoyBxRvnbUWEDNuywPm949Q2ofV4yrhpuzH63Va9Sd9qF5aGcA2SoxXpYWZoimjb1Ad6NNmtLd",
  "key7": "28v588EQ2N5cjdfdegSVKCVAWXV7N1wSoHVEdsqjxY1hDrAvzBLFbnuTfLQBNfaDQ6y1cc9gQhUBSGCwaRWiKt88",
  "key8": "Tdyd62nvs1hP9mcHthNgDwpjR5tjiZCNEMzm7QdUChq8JgsFJs846Fg76LwMvKeWznAXqJCkk8ociN6bfDEQgUw",
  "key9": "4nnZC3SMk5Rr7xF8kJpSrwePpYhd8pm4cojxZLdHoBLzaQmygTAHtBmdz7WQ2KrEBFhgryYvmCAkuDxHXg6LGRN2",
  "key10": "4DA3qFjPWoy47r1YLQZHjNYCS1mrYWA4Ue7di5MLa3X3pupaP3JSdWW7hf6YKmUzezGR5fJQqGFNPxBQoHkREjSq",
  "key11": "4vsMbz66adELQWLLxzvbT8y3QZdsZ2t2nxF8dBWD57tR9cGPzYidcdX1ybSUwRVYvGd81A9ePFv7XfK2vAPCVtZF",
  "key12": "45xfCdHVpWsBURPFk5DPoc7RUEtyDLUcZisorv37uWLg8KrNcS6eUC637FfXWeJc6hFEwXB1LBvutvqTCioH1xsR",
  "key13": "2bFtsjQbhrWfMz6szSmaksCxxC8p3S5rD7dDoV3JWrQBY7gnn53SJfawZPqabbBpKMtsr7T7jD1W1ePWMCohqeuK",
  "key14": "768NAWAwfvm14PAuNeYGjbMVW52S4KCrCRtRDyQa8a14P8i4w3cbCZsbJUMnC37Tw3YJVEhufGv2K5CDLEADFZx",
  "key15": "4JK5W5TvZUwJPQMG3vjG8bNzjZPW1yp19BzshAS3bvRRUAGf2HuPYsGouy6wrwLzeVu39okGcspCkhf9DYDnYEVh",
  "key16": "36Jjyqy3Ddvy5aoTJSp2GpJKa3xJ8PCGyPHRDDyiG3h7869WyxvWSpNTjcK1ze4ixMRUCwTTjsR24AFJJg5AkaHa",
  "key17": "5X2heG4GheH8xCGjydP4yfwb4V6hZhMKAmHyBnZbQD7YMPYjtEacX2pLKzUQYNmMktg5Nsf4iDs6rGdVRMcjMomH",
  "key18": "9K3keJoB324JLZFrDCTonm5cD6SJ6b5ba4zkqrkkdrYNZNAvrcmJDEHfyQZNeVBeG7kJQrbZBaThfwzHcUjKDQa",
  "key19": "3UUYiced694mjHAjnh7n3zT8wotxwA5Tyj3pKZtYF7pLaqm4Dx3fEHBX4DVWHYRvLq2Mp5NG7rCamoz3nGMEN1T4",
  "key20": "xidoj5daSeJFS2VGnBgwzSKqo7UyeTT1J4kt9jAchJYLABnLPb3yve9j6Jfq7W9dvHkGQConYhUPYiUwXKF9W53",
  "key21": "3PVM9r59cf6FmUgEwoMreXPsNqHQyGhqTJF6uQWS7YPiHT7ZzBzYKzmwqCRaEW4HYJVWwpekiCRj7wsM99Z3ZU8d",
  "key22": "2UYGD2JUep5F9Fq3AEbywL139xf9qeZPNfZ8sfmTL8rzHFbXrLUdKxDX9KG9GY2AZjB9EjnoKse4SzHE4h8Pwr1u",
  "key23": "4j5GUETS7drY2FQmn8EXsaSzAGCm4ATcXdXsEfFgP7tV7Vhdn169hB2fshjSejjkXjzRtM59KnRc62npM18Aj2bc",
  "key24": "5wsUUBhT12iiLMsyws2gZogqbCTqKW1N3JB4PBDTxkHHmqqDy8wB1fZwft6Dv3XPicoPJfJDATkcJoNavT3GBfEp",
  "key25": "22roegQ9ceGis3DpxhvEYTRhK1ZjxZB1wMHCmszKdwgRyZcwtsN9jpicFVTycRZF1yYF5M3o9DcCkCT5qoAQZRou",
  "key26": "2dnLaaKCW1mgW9BmupPx4zEDZxHho6pgMqiXn3FBMG4HjdgaYkxPksrqLLw7m8ULAtbB5mpxYE4WHwwmtF9Q3bif",
  "key27": "2vHpmjj4LTQ8YcUYwi3Syn7bG5poFm3qSgwksyJ6KRouSchB4UYLB3ZNRBC7brMiukeDPwJbUrzocpbvvcPm3ihN",
  "key28": "3qjhAK4VRJgVV7WTNo3uEmPLZTmUvxsDTe2xMSrcH9ZqFXRtRHs1KGEUTtJeWzzq4LGkuyVMQw13JvAXicu1dX8v",
  "key29": "4aaWQN9PsrnFbzEz6RsGYCSMbZCHZsxFwkg5ZuyTYbR4HgLfqJsy6BkKhY5Dh9UQ87hWS3UFFDuQRH9PcdWu6y6D"
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
