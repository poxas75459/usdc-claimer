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
    "4Go6Kkx2uK1KzVVwE3YEFT1sdDFKbbdBTUAGSFCoggX7yNSkKLTaGmExxSyffNXrBaa9rc42HBcHqQyApa6BiW3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66qNLG13SE8P7UQE5QL1cg6tcij3CZmuYghdGvQ1wgrrjjiUUMRyyFR9JCGtAa46roecxMCpzRzMBKWoHd9Rm7K6",
  "key1": "5zvMMuCTbNH5VReNzVZv2G5yiYsdsoJbdj2JYh5AfGrb8rTp4fJcsUqrL7jxr6jja6To13qTDkiDAwD6wDdUfoaF",
  "key2": "5yrELXfhD6bCzi3JgsH1MPq9ojBedfsyHCCCeSnjym7qoHr2SxVNChbUor5cfudpqdayjpzXpcvRE7d55hXz6vq6",
  "key3": "3gPT5krhtW2gjLvU1NcNFaDHws7ob4e4c3nCnvAZAdxkXwZSoaExu8ANy5fjw6QsAwG7LGqU6bYuHBCcNZWRZbvS",
  "key4": "VRVCpmg3Ewezh58Vk8xiHfVZS9fvu5hXatmqajuDx9KwGHDt3tsPWiEH2d5TshaK6CipZpY5L7tZkxfgZt8rPob",
  "key5": "2MSCwQ28m2wrPxyHh3Vzn1wywjzPuuUbW6ahUBt2Ft8RyxMe3Pv8dLvZ24Cb6JVsZbBP3Vb3dKPKjSKnQ7iUPUzG",
  "key6": "5sPRmd1PBPv6jt1TfLGhKdEipxrJ37d1mcD8idWh8MhA3t7L6HkuArX6S7MbvfYccr343tFZjVbQsntejXQqbhwY",
  "key7": "3iACZ8U4k7wsDfBUqrhyYVeWLYtC4gTwS5vPwoYPcD62FTjGqHJBimC3wjDxPBjA9KUysxdw4E42if7feYbAeCgg",
  "key8": "geJz2FePbQtdhyE2h8f1g5n7Y6GoCi1PTAy7sB5poCBVfiyK9JYRNXDsTwfbKJnpyYbBm2BFy4tMjUW9v6qHAse",
  "key9": "2gDQimMFKTVfVNxXaPhBBk6GoTqnenbaUei4pGMviuJzbquNarSQa3QxaN3bGrHyFW8EgjqbeJn4k4vskiyMTxa7",
  "key10": "HEzZBSLbz1uAAxKnqoeqKfDDPmVinAhu4qtEy3z2cwue6UjNNJU9xsCMhTwVPdh9ZebnnKiZKPZ2EvkNycfZ1gA",
  "key11": "ma7pBqDXCEupboEEAno3nMbk3eEJxn7m7rAgvccvcZmR5UcddXkEz8upxXqUV73vhCxXZDNNW8HXG9FJjvJFQDB",
  "key12": "43xe7npwuXMeDoumb5TQoY6uHSDqQJYpdsrnBkv7VWPj3T3mKFKK1KCEagLpLJmG3xySUYxJ8tnQWSKBa9jtk8kZ",
  "key13": "47yTjMbJcYN8ra57hkwQn2ErigfjBZudqht61fh95F96UL99WNi6QPj8VPBaikQmFpr18b5dH494Uqrmy8DdeVnT",
  "key14": "21fnVJwnjkkuCGxYUZkhXobFp5QV8PW9XxSXJS62xcrubrodUz3PcteVj4FXdje2qBwRGo417uQmehykyF6uqR9Z",
  "key15": "4DvtaQmxkhbd7zhE4te4zgz17b22gEmS1h6hbbmHwrVbZwLfdvxZ9zfRHuVaMtHu6QJEGCqTfkWtUtYQti4gA91P",
  "key16": "2a3GDHMPjdLbzMxUowTAvHgDWHwVdWgsargtN2oNibyJMW8NMpUV7zsPqzd4ppG8isCqbct6Rk9ALUJEKt9iZU2N",
  "key17": "4ohRJG12KdKn3MUXsmDMKcEsCXuZfF7gAv5sA61Zoauz81bRNyAivGTKuif8zZHtPPY61pXTqdBmVsNQAg2MfQyT",
  "key18": "4kcLTjF6TQu6fay6ga9AK5d4XWHuU3hHthcJpogGcRrvM8jDWr1R4gSxFsnHKzFijDVAqx9kdYQGuQZSfUJ9q9HN",
  "key19": "5V1DEiQzSg7NeLDBLNizhhBeoPxhWw8RX8hQaskD97LCFn4SwHufx6BjGCmBBfBWsJtgUEaovn2Cvg4MWMr1UWei",
  "key20": "4KrqafeybRwkqbDjDRtWeeypAxMUqpn4tmrMBeJh9EKJSze5P33V1z94A4CS11mCs5W8i81PPq1P3NeyxcbGv12q",
  "key21": "bm9ngRRUyLX3Ds5DDaeaPGxx5bQD8GXMY3NfiP1YRcJ9mrown5Ko5xfZtUrU26mLsmKGPQj1gGvzeYNRFmm4xY2",
  "key22": "Q92XPWxF6gp1fhnW4HBzLCF5zmYJA9kbCWivk6Y2S1AoDdjCfvb94sufh6x34iFpNq75KwN6n37Emi2wSYMy6QD",
  "key23": "3zH6FLiCAzLR9YLQwsP7fuejkL3TpRZbadYich1adThxRCpXdhWAGCNgubEfnJLzjyWVzUaXb2EEmPVP9v3cMXBL",
  "key24": "2z7m7WQc7tSVMxb3foHU6DXySjGdkLd3WL9A53sXe9ALrndXwmCgiRHg3gdqF5AYhSgM2BzdZfaP2T7VxzGGvJC1",
  "key25": "2dcczW1uVge1kR7eicS9mzqxEmg5tPEHfK5jKbVXWR2QHyE3s8bhwGNbUFufeuMGs78ersNxoFVydBKYFdQJkb5W",
  "key26": "2jKRXMcB6EMLH1evQTnaw4KQdV3ArGWDC86RYLa3h3DML1qmPwJecYieaQ2AzfTohM4gGzHaadoye7o2fD9n9VcU",
  "key27": "2S1dwChSQ2jqzja4QprYkxeXghugZRHZQyCThcEDD5V8etc2QWSBA6ASwmmnAc37LNeppgGAvpUKQ3xeLmbEnMZW",
  "key28": "5HaamToKoiquaJjWuVyFNYneBTAbusaCW8Vz8fHRPgQi5v76EsKtqRE6P7xsugYhtT7oKK3giA94k4LhqTvoZaEz",
  "key29": "3qs6q76r1yd5XEa9qYJFPNoNuy8dqueRuMWfLfAaDk5rGuegsiissaKobVYNZ3v1qJkcf8bWDGdhuWRRQ5RzyFcQ",
  "key30": "2RBqE2KJ4TMWpXPqpgxHoE2TM6uMkcVfpFGk8aYSegB9PxDVdQsWfCfZBBh2ahYa6JEyzjShD3onYVdmHUGfVx2T",
  "key31": "3dY6AQbVojhSGkRCZyDvQm5wyZDaCav5eNBk16EwUWQB1QqMYPJmKBKpmTYFM2piX78CYMa43ucZgDJRmVACEEoa",
  "key32": "pfMoYs2oUvtUHhyL9E4R96pQxJkwGW9LeU2AuHujH5EHghFFNESSGSHy5vhPbq8YqpCxsJAebg7YtFrHjDXiRTy"
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
