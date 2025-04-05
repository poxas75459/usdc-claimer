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
    "3JqAsNRyk1Ad1ZrsGzZ1C3vP5CYtE8Pnc1sZm6XKuU9fnew9LZ6c8MPjM1TkCiKRnEf5AdH5xf8aUzZBBLciwenw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ydCM68jNupC5ZEhriaeuzJprA2TaXseg5s4LYoJXWc1yFWEu5wbhGBTuArph3jwHSkm23BEbkJvN9Jbt5qDK4kj",
  "key1": "A915uw39ShqNVCsTh1JAbXVoYmBDhLk6MSkrgnssJA7po1AMvYq5Bdho3PrMkqTgqrC6iu2fRfkXQDD8rngLDmH",
  "key2": "m8ygkZfMf1LzhBf5ox81HCPTo7hkhpHZFwEuuFtniPQTV272MWT4bRTnVbjNw4eLhZdd9kndFy6ougTVspXR4x5",
  "key3": "2NYtWeBGAjFLNNoJQkJNUmSZPqnrw4uMcfDVGxWuwUNgnSZi6VwzLuS8A1Wk1v95d1LoUjw9rLHCwS33bPfzppTe",
  "key4": "3kyRmMvQF78hpKD28NW88F2hkduxCXbMqVtoVUf7XEW9zy9WPj8FZvhyy9MbeW1YQBK5LG7dxRNK7CTsPTSv33mh",
  "key5": "5ocStZASKfrLQx1tXw7Np1UMLS6ExmXCvDoYyXNYTpivbyoAQ2mqt4J9jzz9JiQgxK2PVL2tENeXSPk8ASYUPjnD",
  "key6": "3nUuUtp7tynNvMFfm6rLX2y87dtbY6UJ1M9PwsXobsEkFCbSiNQMcBZQYRtTripmrWLvRjYrVjjPkMG7yNNsCXbT",
  "key7": "2YryKrRgrdAtc4ppaRpsX7dYoh47DUtvXh1yNhnzqofqWb3UQco4dyPSfNJV3fa7Tw6o1iYdgv1bkeAaPrsA7dFd",
  "key8": "5HsLaBcETV8JxcS8RD2WUnWevPo2VR3zxaxU2n4JLn5RS1VaiVFyf9MFsv4MtceRGMjv9niRFRC2B7RjEPRLeZVc",
  "key9": "3MNeLirXqym3FaYAdex35caS6hvktT2JBT6RM2Uw16eEUiYKtZZ1BVWkNiAkpg8bZLrMt7rzsx7u3zq7vCmyAKD1",
  "key10": "RniGpbEN3ydMFs6HWMUQ5va3Bzh2N3UdgXuikpPGk5x9AaeJiNxKY423b7fTxLQBpz7A1FAcdk2QMFBDperKdhB",
  "key11": "Aw2owRMWCAAzMzjEXdACQrzAXpX2zjCJojQ3PN7akGqd2fJkED5cei1vjx18A5m2qqCMj2aPD4qsiv9hCG4jULQ",
  "key12": "5RNyYMPQqD5Q1Y9Hywe8r76cmv8LsZKqkAyFgzyaGhwSNsGbeHwvo4YvCiWe4DK9oVAPDrtzoCXyNs9pBTqLcSjQ",
  "key13": "5f5kmLbujhfFig4SSpEiH65rvttKY3JfY8Hjggk3GXSFvhY8pQGAh3siWRfCBggkrBeF2QhuSV1W5ou2GjwPsUX3",
  "key14": "5sYH7HJeMPyzRZf9cRVivaNwNcubiYDR7oKr3wr5NYBZKu2adN6x6a3ufGXgCLgyu3wxXjTbC4pt1MDRDVqpwHm9",
  "key15": "3r66EVGEFFpiEzteYvuKocjZ8ywkP2agmLujjvTf7giEN5Yx4BHmWE6RdYcu73e2BMKAcwdsjvW3u2dbnewZiEJJ",
  "key16": "2JGmwYp4AnCW2gBF4GGFw7tvtBU75P6uvzKuFKhb5ECaQ1PqZ9t1v9ZdjaTjGEQAfQHpbEZJXdAHsHvuUJRawkXM",
  "key17": "idSGxiuFfpXiwA6vKdxbt3obrAu3UQAFtz6WQRd7PMT7uj5M1Dbt5V9BER1CNuVG8wbenySWXe5HR2TMoAngyEu",
  "key18": "4sCRQXs3UxoNfH99rJGyVfW7MhiBtuVvh59YC7P2wSNXjp5q8Cb3emVaDqAqp9Lz5kyeWhMDdzTuniSwGLTHzVBc",
  "key19": "5eSFdyD754bt6skk13w3eNuE3i5HzL1L3nNrB56b2SXMqw7uPJHVCmpSNdd7AswVoJcczx536XydNAR4AyW4sUZZ",
  "key20": "411F9LRz77KqwAZDxCu2hvKohdhpCVV7or68f4wrtJN28cKEsWMKgHmUU9JQzaHoCaKDJQqrMugFDzV23BekrUPj",
  "key21": "24bRLjRsSmGzkaweDu6gT2oCwTN3yiwcgPQWmrVnhDgyaxieasZx8wR4YEh3tMvi8wsJfzc4JuKY5UwTWHXJeTLd",
  "key22": "28LDW3gZ6481poye2DYCzpf1BTPCjjYTQaL3qGCjKZNcy8Nutw3c1r5cntTZqYRhfw32vjiCRs6YqKWbRcydjigj",
  "key23": "4wX7E5U6zcxyjDTeqNbuSKcFD91UFNY91ptFVpmW1XVhSZjpUaQFe2hpyEqUqKGBQjg2XajefFAN2JTYpzpaQZoy",
  "key24": "4bgAaJUhKpNZjixaKWRpbqDx14byzyxr13Zh43GUq7pWzLcfGX6F2wYesu6xgZpYL5UgwDVNqSnZXzNeQuk1LBMK",
  "key25": "5BvnawtuimHi56Sed9DLTLhaiWCyzUmP7DUwCtqcwP1Xj5wvcgWjjrmPaZFBm6W7QXjwmw9zD4CrZ7Arrn4VcEGn",
  "key26": "3PPc1sQGWKDeoxRwFDPbs4KiisoyTdBj2TooHtxRXFNPS8Ui12TtzdmsJdo8J11pZo3pD4iXX2utWSR66iuvmvuE",
  "key27": "jERKUHA55B7k4UfhYe3FUGoNBxV5VEGDuTbYoPfrURDWCTcfuAtbucMSuRvqN5dvbkNf18St5NmkbD2b8Gnkia7",
  "key28": "54uxsgbenkkTvzh3ZjX2wRTtV9WBEbnYAGAC6UwWyJLrMxZmDJmwv8FYMnVfhebQ1ZuUwsaTicT43eZdiS2bfqXn",
  "key29": "2w8W5Zv84tPnbMNYMpSetJiMRJ9QqgDYMr6gWNwpAw42tb8ijDwM5HkoCe7MZZF2eJCPVu5qL4awWEegxqnuD5zu",
  "key30": "tqezamoNn8DnGVzrkZC3hZaDtgPhn4X8fpXyXsTTqVv5YtpJG6pm79vU5crmiDh14gYs3Km5fmroiBdFMuFZLL6",
  "key31": "5ceYkSEAFfBoD7fSrkfrabvWAb7j1ci6exuJsWgcofxuVH7jsUGQYt7cR9KWPQ7FJYq2gvT3rBf8eykwu5gBmUUX",
  "key32": "4p9yKWkAqSBWjscqdfXMEm8Lsifh2LbeCXKneKZrvg73oEDu3hVJnVcDVJe3BP4cGjZP8Y5oci2KYCpHhRPtPRVy",
  "key33": "kESPdEzyKWCV4ArCRzVZ3hCnXaBpoYWibKkC3NHuCtw7MBtshexvsUvFtAhjGoL6NSpH9YKVSHz2xmBPQYez4DH",
  "key34": "37iuJoacgRjmPoRkCNbWACV58gnFWEY4eRZhvA3o9H4WdtuDKLi2K46drCKPk1sNkmbzpKYypGprte88quQ9uT56"
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
