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
    "TquJjXFhA2mG434wrGex5ePUANDaNs5BJKYhhYppc5xKPrZxaERy7YKe8PcV7P5q2hHPNJjdyjB8hFAzxub4rB1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xqem6pCwp9ULj6CqDDbcpNZq1Kc14VNe6ov6En6JgERv9kJBkTZ3iDCF8Q2129qhYmQkaM4EdfesEXKxZCbXpie",
  "key1": "56vbDhcdgjpPrbp6ZxdpHeCfhScJ5JpccWhYFpKLR5LmA3MRB14wvkpL3rLdDBGPTuZEigq9U9wsLXCqcdHNq832",
  "key2": "5dSaFm4y13zsgn4bG34phEXDYfovxrpeGgdpa4UGg659xGJq7mVApdC9z1tGCEPZ2mQxSC9vqEZFpM1W7o8pBJMX",
  "key3": "4mjeCZ7Ynoeic5aMTKFM8c7LqfQwPV7Rxwo3QFF5LLPis4VnVwpDWiEW599LqgDFjmoFm7tswdwztKbtSZqhyjKo",
  "key4": "3HVYW83xgPuVK3JygKhXj6DLcir3WzcZBqzyiQ7x3kEeKpQLkws9N2j4HgrdgdJd5xLwqvrCAkeZf4GNG58pvFz3",
  "key5": "3GRFAVVFGoNRpkzwDPD7gsVCA8xDCDVzToqDwxX5Lrb7moRk4n74YnYmzPJp8Jwe1jrSL8kQAtebMvJ5TQvsmKdW",
  "key6": "2TADZFGnqDaZC5xPJRdsyYoo49Nw3Ynu5K1LEk1bKXw7nqqPgUs4hGmP3MYc7zC4hFt8kDWzyM3iMRCY2mFhAciq",
  "key7": "47RwSxxTbktcxGueCJMmd7FV7j666dmQnpQFfFUzMon8giiJf6NwfHF3EAVaWqHxFXtMX6PDbrrcYRTTvByz7Z8T",
  "key8": "2YydJ9JBfJ9eK7BsyjmB2jmhKidguv5qk5VPn8ChXDkGT6DdQcqpBvepFFxGrsajwsGevLJh9f1H3ax5QHxctNen",
  "key9": "4EsTTZ65mUiqQNxoHngKEj6XCMn5RMTWjqjjqpcWTT6ftzknRkHqwfNq6HTuqLPgk7hRJbKp3oScU3h1AXUUqDzX",
  "key10": "mkWZFcF5hscE1fKoi3uULmmSBZAafLCLhFTYDYj5K7RQHSTDRbFHr3HAAy7j1qZ1mtqiCSRsiq433pNgHNeZfJR",
  "key11": "2MHjJTbQjcmVo9tvcb6b5zLqTPMMTDDZ8NVb1w1DxsvBFvxcnD8Sjk3piKvTgCAJFPa8va1bSfaMiHFNkneeqzc9",
  "key12": "2ngzDs878gQ93yYC5Bat5fqJDi9emiXp7hh1Ed5o39Upbne8A5vpfcbDabRzC8ehawGkMWM2RodfqHTQ1wMr1Wwv",
  "key13": "4D2AJnNnbs3GmmRhCzYq3EKgYMK2kKp8qbdfvfhd8AdcnCyRQhDKVPrE5kiCgaHmkC5GiVxPkE4H5x6QLvouqKyJ",
  "key14": "5rVHxvkFD5L8Xw3uXqrTXbnhHXnB3R3YwwfRqtR6RKizddHBArMMdZ7xPfgKmh1MA7xgPHxri5wPHi7rKAkiFu1J",
  "key15": "5mh7wxg14fz45GgR9oqwhTeXeBnrzy5tCZitVCvoz9GsuvoVGFn9HFZh51VVfZiSrHL96PjffzDRJUBAXkSSSVdh",
  "key16": "375LuicmE5EhUxVaiTfmN33qBiSKmH8v6D2Qn5o3zh7veEAb4PpXDLoGfkXC8hfARh8qLK12Z8h5j7HgfDtwbNQj",
  "key17": "3RzTYdNbW6rv4tHtY1hMf9tt1UkqBeoiw7N7KfQyoTis91ggHLoo2Yziqfm1XyvbGSb68pJa5PTfg9wBexUmYpfd",
  "key18": "325Hei62f8uMRbV8tqC6xhykU1DmVUyy3atdidCvPSiKenjZ42fUa4iQ6FdXbA2uxksPQZpWbeWYzMdq7iXgAmRf",
  "key19": "3uXKaS9jtKKNjnDA4M4csVs9Lsawj6zSyzTB3kdYQGshHcEk4PWmuVgNwRtHBzTx3rKYnvuH5dHUho1e9ZLJuHy8",
  "key20": "2y6HA8dv1eSgm9si739KzQNsUuRTKDLjvo14zytP2AmCGpVJQiPK51Xb3DV7YExHo8L6V7jYk33kzQhzgeMRaPqk",
  "key21": "4kXhXs8RwhUga7Vd4yGF4mNFGC4np6PgNPqEK2J8JrPko9REsr3MpdeEYnrqpzQeJhsBSPVejKmaGs3qrJEFbteU",
  "key22": "51M3w4XhBeuaxdfnuNqPDCoDod7N3amAkchFpzJwkSeC6HFR9vEMQxLD7Hbnt217QorvSqZLFdHvgm5vv3tJhcEp",
  "key23": "5Y9WCj1Hfde3zk682Bm7yhukMhypRkvRkfggHS6rEgafEDpMqVqH2iZYtuszsckXP5oh8cqZqHvQHE9AqjSSx5Xb",
  "key24": "4tcksbYYhhiJ3wm6EaNwQGVi8HuBFoCchBDY1yrn4H8BwWAckkFB1mZYkthYtXkdu7HyUbznF7PRouXnD6ZrAFm9"
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
