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
    "28phWAXKrq9dkk4JzwpW327L9fQxs1wjTgqTdvYPqPPVUsLHNYSGvwSAyQxkkAWqs3viW1ZUDq6gupB6ohZ2CQsk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WWDi67pJiNTo5f82ZNFoP9UFDF3uQ6WrxTpB6qC4pTWoW8Cd2aU2JhSPGTD6pXCWTdQD6es7WGdFwd9fu1hDUgd",
  "key1": "64kqU5RntjWh21bukEBP37kyMbfNxGdNAjwYa4s2fRPF3xNmPBk1ByHJCfc2xrW8LUTteb94cXZg4hUaFsG94X6Y",
  "key2": "4NBv2JPDvZBTUKgJkLwN5df6WiSBdywAAXZfS299Vs4gZzwZBaTF6i1c6i5T18LXotjHhpqWU3TMUxWzt8dnRTa9",
  "key3": "4cujpp4W9JH1hRrj9sZ3YYGEatxHpxuZ9pVpbSS1sZ8HizjEVmXyRvrjjkePi6x7A71TjE4EpMjGrKeVgUFwwsg8",
  "key4": "5sJN4ukv4iegiowvkHRpos2oGNejLmNb5N73gbKnqAStStdyD3ox8H6qvUF8s1hJSwqnJpBjKd5q18TDAjtrNP2Y",
  "key5": "3YCnvsraNGcmkSSC6tPPnvNnDdCVDNTeWrnBvfXXXy9jV9C1cMC8tvnedVeBygQXAWbDGvr3JmpeaUnB4uT5VQcb",
  "key6": "WhwRqB7jbZTWKv66xKCuzkDGtSYFufUnTpt2qgtyGY5XHN581J1T4NMxqqQpFUicvvox8tr8HAdDnvrCY8KWUhn",
  "key7": "4EZafpr2XtiUVoJUXNcbpqNWDju8RN7mNF5jybL7eNALXVkuY2hLfmpcmChPtwy1CjrTCFGsPVHodpa6sfJyc576",
  "key8": "3TUC2xqCDjfRYoLYWJwRxVz51Bda4fm3yDgDWejKDWWCbziGSnXD7VrW5Z7pNC9duLoRKFHqxDCyHho5aQpZ395k",
  "key9": "3Y848iDTEiomi1mMJPnuSauw8G22ar1wGexvYYuMRvsGeh2E6BAY5FaqUvxM4mFGuSAb3N7EBHZymr2hBJwVKDEU",
  "key10": "3Pq59mdSTxhhHMREreibE261q5p5yGVUWvohDhsp4Ew3CUeHKnK2a5wT9M2Rxd8pWTXnMZ7CAKn91zAzLR562WrA",
  "key11": "2SP9JjyqrdzreTbabB7165jJRrguFAmDsggGp1AWQur2LJHxftoriYhPotDg67Me5ZhUsm5u5vL8DWXZ7DQxSf3n",
  "key12": "4HUzQkNo7Dkdgj3Vv6maxnaSrXB7tujwZ8BwwTLwuoR5Nho1px5nZYLfgG8o1y3VnjXZfqjdnZTr687qd5EJgd8Z",
  "key13": "2FYzqbbgjcoTZiXwezDAESNGcVo5BHeGfvzh9ikQruAiYvdVGQuP17bG9E68Eq8X93ELo2rVjGED971SMjfAQh57",
  "key14": "5tj6jRnu2UmBDxicdAwg6PjSwS26WFFp8buUrMz1LJkrJsN5LtdZJ1g8hUe2BAffrvRU8D9hh5xrHMgH6dXh6a2B",
  "key15": "2nayDFkpmve7srXUxdHUYnPH4w88VmsoPneicbhtyQzJr3tqZ4rujZdLBdkHwq48Hb9E2rMTegjwA1okkREJ6WRf",
  "key16": "4TnEbCM5EsTXmBSfoTEHUp1JgaZMa5xRiZrPXRnWX54NJsSWiogNWdQojzoAnpFqaznDWWBABVdTh8JjAkXU115t",
  "key17": "4Uuinmdb9n3prVKfBwJgAow9N5EAb9P77XTT2TEZeGTUZteCKDFxa3sc1w4fgRc7NDzNmSxaF9agzcjpBgpMQg6J",
  "key18": "55tsVYhFKS3S1PbrAckcw8DDQw7Q5B1eggSfrQFytABnA5JTtDNuNAy3BE76Qfjg6ir7NjauMgrbY4fwFdbVgWvV",
  "key19": "5GKki4hfSyDKrNBqm2iz4NkHSBKXqAsdGaysx4QbSBVkbfcF28udccsSS5tAmj1qKUMjC8iruz8AiuPxNJ6WJGcH",
  "key20": "5A7GrAR4WsgNr1iH37MuVw9LykXbQpoXDgRGCjN8JnZy3mt7329y7LTdUd7idZkekxpdu5t4dBZvjtP7PkKdJReW",
  "key21": "2TccXDXHTRcJiRAhn8AVAatPafqW7gYJhXDfcSmxGYHJxwqXdmXpbUGUMXwg629y2Vi51vuuY5k3m5unYExEpjYN",
  "key22": "46xgUgzqrWoKgPMJqz7ecsqzZRRHrPkJkHKc9X3vzyqvhbAgfDMjLmnx1RJxAPArCaheGwtzA2v56sed3hVMn96p",
  "key23": "3Zs4LaBxCA9Vpg6uZUcDTjoSt9EWDgfGETQ9789vFqnVJqwuXUAbxhKqXjxUqNqbAEZAnkG572mjsWzhR6R7cCTe",
  "key24": "3JN3RXN6TQdLbrySMmton384HQhyYJLu2KhhBY57jiNzrSHCyRS3JRLZtgE6ppjYCwzSndeKriVxggD2LC22ab8b",
  "key25": "2AwnoYkK6pmWjqWHRELkQpFcBuDbzJ9f11RMiUdyA5muNMJKtUfpxZDkopRHLZCiEPn77Pz4hsd7vF75pCMUyRzf"
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
