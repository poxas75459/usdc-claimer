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
    "2PPCD376mCHFEpJDBwEkNYkWvg4mob7VUGgi1ws9scnQmJbNhiAtknovmJo2PSDsoS4vxCy1MMs12fYMBUok47WV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WZHyvDQ7vkuEouzHq7sHH8yX36QwyDiKDRi2enrv7UuPxAMdTvW8cFVBYsoELe8cRxY1js3XmF7BkscWKCy8uZu",
  "key1": "mhVsJZLrmMgvpYFvsDDS5GfQGmJjwWZSjCNZ3xPGxqLz5Rzqd297bGvf4VLKHi8r8k1UYfsuEjs1kBdP97ga9ab",
  "key2": "2V1KVnERV4q5dbNT2dmVxVAQmuT18jxuRqdgGCrFiaJ2k34NnUJ8NYnBFNhXCtPPjfktKnVeP6sDsn6ALVwp6XDY",
  "key3": "5xHVcjfKPzXcjQRR5UuHjkJ4eDDfZLJtWU9qa4A1gKC8d7rPsyC8BxRvJF4H2RAuceaofhyHnNjGg4L4JLzhrMXz",
  "key4": "hKwVyBSrwFfQs5S4vgYcpPfz5qScCM8c4bzKnBbkc19zx3rYFkPFCo1s954XtwxqtjUzHDEvGucy1KvcG8AesHz",
  "key5": "zgUo9chPvCyFHbhkiKVLuXm6N4F2d79trqx25Y9VynJL3wJghJCrpJfkpogLFHi9wGgvnne62oy6h6zUPMnFuy3",
  "key6": "3sYcej4P11GFwtKvArtM7VzsZocsw9cUX6uR1qkcMTUoUxMS6xGdNH16YxFcTgHCBxQXgdZH3Jg3SenAJJxesapc",
  "key7": "3Y8r8MRMnuEn92J8LvXqrL2wGiNANuJNkkY8huRWm7b6qM4f7mkrK3K6wJu7o1RtWyoknMBX1oFo1QuQMtZqaWeS",
  "key8": "QNo1WwZBfVDpHn8wZStcKgKs7yNJd1K4oeuTLU9xTmP2nPAdcEN2Dj7W9h4759HSQyc2PkEBHrnE7i6mqUjWFfY",
  "key9": "4AcfRPVRcGH4bhA1MyUs6NtWXcpfdn2eHyepRqp6JGpRuJjDmrUEacxAD1V6Fod8bBr1uEUzwoJpQzCq6uy9UzhU",
  "key10": "4DB21VNfkJjpKbRwGQw3YAfFeFNo5wyzwWjus6kf498NwWd5ZRYDxbV4zJyZxtStrG3ic639n5SJFq1du4Bpnrsr",
  "key11": "3sujME4B7vi4HuQV4CdrARY6b8CxosGLEkX4fdSKEUim97PCj5UYPaABdnP52a6RKoXUuxXjpETaa9du3k1G49yr",
  "key12": "2nsTzfrXVUPh1wXFTCP99qJ76SGHqT8wpLJawtGzFbUGNQTt8UySXQ8xYqrHJpCctQ7Lc6W2asrxd1mLDw99Hbw1",
  "key13": "3sBV2yegMXMHx5cSaWwByDnP92gnkre8yWJkAUNBfZREmpC8V7TxBUfRm5SNrxFE74BQg3LDhQi3HLj83Y1KXdc8",
  "key14": "4jqy9uDPA4VwoAkmiAXLq3f2WoxCQouaUDM1nH9SpEASJREjCkwfYnnCzoibCmdHhP3yUpBTC8e2vsAx61fuHTZ8",
  "key15": "3vvjc6tSqC664iKQRmuSg2wCmL3LrWVKC8i82MZrswXrMECgMsQ7R8X7oury5aeVTAEFtZ9Xrcu9BsjBUNzE6YjP",
  "key16": "gyjzmnxSBpnzFTGviqXoZyR8ZGUwady2ygDHiQUKKy8vqCWUqWBJ5yJGDuctvWHnHAe47AuqoN1TLFHV9J3tU5C",
  "key17": "4khBzQvzZz7WkFuNcqe1cvqASmWXrND6jZD2gy6TMHthoD36btQS8Kch1ndRFcPgMtbpQu6L97pcWWSvUhPRf3EX",
  "key18": "3kBeiRN8jnx3Fj1coJUe12TcRLKup9A3hGJN4ACtSei7L8Y4ghu5eaiBQchDWP9nRZbcYLVkoLjb7q2jW4zYMNQ9",
  "key19": "oCacfLcbRcnKw7PoUmmbWQwNP5hLfEBS5LvCySBMMztUR3day42QrTSSCkh8Uj5qPr7Xyu8cNS2abmnb4547fBy",
  "key20": "4ou2UQtTx2yi38C9j4R7skUqSpGMvtmNf4iYhzGetiF2zYaDaNQfaQE9VwNUpDyuyco2HpZzXwGhgZq1f5C43ZXV",
  "key21": "274jFsrUSkKLZ9ProdKL6NrzNBAtPNnP4kgKbCYcSYm9Xfycfqr3LRwLRYehk1tR68jehjHyi3KFjPsWX2AKzrHL",
  "key22": "58hbNuF5QSr2iQ89bfRQmHH7cV5RhCeP38xfPLYUfUyHreo89QK2zM2TksaSSRoE6HyCnx5HmL693QZMWpPCt2H7",
  "key23": "2Kouce1fFxbUEqSD6mi7iPBZ74fvnwEdmQvst25UGtyGmBdFb4LUKMqxtnR6Eg63X94dkV9ZbQWvEM3P2CRBoqgJ",
  "key24": "5vmQfqky6Kw5v2sgHw87T8kvkVo2V2VrFWafdXB9R79TMUhuXWdYWH8qySqpDQDLgfdykaWfbTRkGkCX6ycYUGc1",
  "key25": "4PPjGpH8LUzTGocCAY6nTAQs83Eaa1VXtgK93dq3tYrzAkZ4fL9yN6L5McXGikdYGs3Sx1Rw4kG7GCrWKUrYU9B8",
  "key26": "638ywmVcxz1MTxhQJn7yFUq5cYK6MKCY3swHzXBM2rpZYnsh4ECfbaajPNDpw1Ni2nbSzErSJHkWgujjw8Uz2LPV",
  "key27": "35cEgPHjCQtHqPDVFD3nvbMwbehNFVyGVemKhnnhr3RDTdNwPggfGvJ42fETbEEx2ZD6GQszr1iUo3YLL72bfHfQ",
  "key28": "2aSDWpnjXhsyb8f5Xd9d6aaf9Qv4p8dvwWL6FbytynspSvC3VK5ian4m8AVfM3gyyCJc21oDQbMmG5yD5WCXmtkC"
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
