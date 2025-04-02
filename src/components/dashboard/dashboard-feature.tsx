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
    "ifmHQumHKeYAYDnXRmzseHkQVwbBmn1ecaVSGGts3UVdSaJVSciSWNVUQFi2rFTPtTrqMYpNqa2BhC3ofYb6CV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aMNJe5hnXgdzodf3FwZRfUYuLmrEEAMnYo858nq99GSyaYfdAgwzUe77NeafEpjhqrUBBXwyVqC9VW7YcyfX2CV",
  "key1": "3TBp6sw5vLjpPxsdt9kSy3sT1izyKRUeNRD1uvWg5RVpweS8WA2UR25mGhq83y7eB3qnCyq8veammDYXLnAbDJe5",
  "key2": "4UzDG4igGyMvfGWEGvVGJAJ5HXMgAHo4LGDovUiu1JvQJ1kagfa2iFYrLbAS7rK7Uemn4kKZ4Y2xLMmQxoy64ZBy",
  "key3": "4NQ7xrg2EtqcuKj7x8j8kwnRzR5F6zd4UdScDthtPF8m1nurQD3YHT5KFfCU8FhwYNdEAtxtCDoHjo1ppesFTrib",
  "key4": "NjHAoDwVJfVksDsvaVWLF3CQAehyYLfvCkosEjfbDZZJYxEqQJMS2qHF5g5qb9XdJ3eJMgJ1zs5oU1g4RMtBoc5",
  "key5": "4rUy1ioLLXyWezKF25zeV3tyXhqKGZf5bkcy66RDRi9nx79xb7HG67SsfjuXsYMg6n4RVZoem9jVmfgwrE1uRbpG",
  "key6": "xrfF3FxARVufNRNDgUvBPjPNQHC3sJWZfLGNfuZEphgNgLjtewp1puivS7YX3kbLkgqqHE9wQt4vFqw8fZcaC1p",
  "key7": "2fhRyAtkwNyjDEZ4QiBfzaaBDAyxoCtRsga3WzPBtAHzxRfxfz8oxUEpXThjRP6WkUsdHndXKT6LNYyYU5HD7Hnw",
  "key8": "5MjZ8hDPF2T1tE5MKPzWrCao4CySPm5BFsdZd9JPwV2XLCzCeyYTau22Rjkez6557WhGVfshA5ssdwjqFrUVMoeM",
  "key9": "LUbTu1k6PDPbAMfubZHxUsB6M27heWbVQnwMMiYFy94yx7r9rfpHHW3NEqqraiw3rzewmgrzYuDXhPjWDLQ5GQE",
  "key10": "5DQ3yXRCUt3xhf4XHJCVMs7svujNKNgXkQGiUPsxCkbUB5j29tHJGXiRgq5X9BFg8Xkn6ndzmkmR6zpv3UefU2Ee",
  "key11": "CR6XnYAViFWA2dQWLEa9n11JSqafNc3aqBpq3WA2ozqR1ptSwASxMu8kFqQQFEMhzFFtEjupxd1BFWxEnrvwdtQ",
  "key12": "3MDJWeM3qnHDdni3rYGftk1YRdBDBAr4b9RZu5TtDouk5SmrLh3WevVxmwNCtjudpPYcFGxVVtE7u7RFt1AcRU7L",
  "key13": "2TkNFvJf54NyxCuYAX4pv72ZnFv1WsET3RC5hUbiBZCHwtjhrDdqx1M3nLvTkeAmKwWaPdRvvapXQrA9M4YiDQaF",
  "key14": "3h4KerceeWH6cDGTxRYi3iiMG1N7xHSPA2jiV6QM4NisuA6f4fJxhjPNJLHp6fasXZoRpvroEjijeLxjtD5JH2oP",
  "key15": "64qNGkCAWSec5DvtY8yCoaPoyuytpHmpQEqsN78MZBUHEQ9ZQizVWN4QWMyp7PSTBcYg5qsA2ox6YBVibSm8e6Bm",
  "key16": "45BuJAunndEJqiQfkxBDrwfkWXXKsSaUc39NiiLXaquCbCbPpttS7wmMDwEW3nhXuxMoTjNnjT6EgJ49dpE2nxK5",
  "key17": "iMgrPLhqunsSxUxqajpaXYNfEmWzuSwD9wWS1e4Prnpno1xGsZxY35py59jK9qqa8PAzFPRr9kuatkP6Jkschix",
  "key18": "2qbX57phEnH3M6uCiPgDxSABGgTRE9c8p42mWdc14xCPcWKmYmLf2QoY1thkPpRNh5ZS6rMiLv3UAvMQBAKp58E5",
  "key19": "4aMUPaWWhoS97Xug5djRrjEg3ZtFDusXcEbBg2P9bXZVeABx4UwJRXxYGYA9mZAdo8JbeDEfH8WGReWUUpKVuKab",
  "key20": "3i5UkwQm8T9Ji1FPRyiXmMQXy4BciNPm5eTsumbheWLcVomGnr5kXExruuKMnzcto3z9rMGF9GVofrsz2d1pfCjt",
  "key21": "3K8uUoEzza9t3c3V8s3TzLZgJsuKZBVCKcjrgTJdY5K56TfU1rLh5xh7ryiDbSrH8LytaHes1e7CyCiBtY3XZ3We",
  "key22": "4s6YDXb4DaeSTBwGqQs4VHFJ39WuGGf6coArQfrHsRT2ejhD5D3AHPioDScT7rjT3rMw6TURq6PCHto8XmVA7S4j",
  "key23": "46gGkmkZT9kn2eTjKLoNDrfgX8HFphXZTX1wm1WvMNqaP6Pw18KBb2nLh2JDwUAc84FSnZEUgstxGBrXVrvkVFnU",
  "key24": "5WVi16mrbEjSxVx7ZX8AbodUWJYHfdjw8reVhKYkpUqWW9zfSpkSLQBemqHjjdZWiXF1Tmo1hjH3nLnENLz5ZwSc",
  "key25": "KV58AVbmb5nMuJmQbHyxhoXw4Ffjtg1wsP7veHapzPMPEhm7qGob3CtzNrz5ygCfPYQ9MnJYxjxE6b5PweKt6Bj",
  "key26": "5fapnEwDfADbCUG2Y5gNGZLswNRmmzXfLkXawwmu3ALuzLuYkJLPvae9HLCuGkhpuwe1B8TwkpXbo6ePf1EqSTVu",
  "key27": "26F4gEMGMUAAv8BAVQeMW22Hty1eP8UWxCEEmUtna1ShgEsU7FvLj1T8PX5wvqo4vMwioWsbix3MrSF7JwHSebZX",
  "key28": "5w6CXbn7R67rbfXiM3TBMNmqjUU8kvAckHKEn1r9MqqBaS7XQzhp1TofzZ2JnLE5DrHhbLToTPJj9ckjwLgmUNF8",
  "key29": "oWsBpud9VnHdnUMzFPcUTQWgMvamHWdosC1zXBaqMPvdzLNoB4QyK1EaA83RQ9bRjtWpEiXUjzChqE8FcjPxMxL",
  "key30": "LyVmH7K1C3vvXxNUH5FiYbtLParKbGofkfa5UNvksiQWUtU7eih6AjW7iAEVyQfS4SE8jRvarVWkxtJj9Eur5Rw",
  "key31": "3dS8PKtkLdSGa1emZgeamXPUs6WDQAqfQpSyfT5KpXrNLGCfY3zMYcZzoXXwnFhoXPFpVxbuY3775CgdksQ2gUX9",
  "key32": "4SAgBdvtSMvVmJAZDEHA8JP2BscEK7rVPc9mDDX6K1QNQMYJPDszhEeT5kYeNyNZGKJr5M6Vd6KMvxqnd8oSat8p"
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
