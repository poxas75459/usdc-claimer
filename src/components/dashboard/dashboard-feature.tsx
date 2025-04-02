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
    "2Sqx3JTTRgZe5EehDWHakSnJBJR1UhMbtMUek8fUKZGA6FdbcVAvh8zn86FpENKe6SWayxZq9Z9Uoe8J6DndwYH6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AW9g9MSxJQMad55JkT1KEfVqVLfEiz2bF8tKJ1DPTYTxd5XnY1PfsTCpEbShZ4c24BLzSfGy4rt5Urr8xQ1vcnE",
  "key1": "3FLcsp87S54BQN6rpBNyxMWHQejsx5ooP7fQdEq6SMdBYLMbSM518teqa6rbzUHu42JjPhGH1RqMScU2Ct1QXQxy",
  "key2": "5mZWnbV3p7V3Pj2dpo5sx3EAvA7PY5pVxmDEYjRDFyk12WnbqpS8Bx2LCeUGFUTCYivd3EG1xEt1iBQhfUte4SLG",
  "key3": "5HWSdgKmLERfJEgpbQqQbaZu8cS9tHNzB6RHohQT2D6zNq6VYbhcucH7MWc4LQuGg1evVgYMsx3SZ8HTKsaTpeBo",
  "key4": "2YCrZJEKPGQPxRNZUbhgY3YAQSVFDfGWYrGDF8PHJdWCxZeNBCyCZz9FvdZ1cp83yo8Cbnm7W9knEoneXUdZM4Hh",
  "key5": "vhZZ1qECwT3cyUWmnqwnYyXQbu1brrZXQpX2yHLTUUxQM8eq4dy655cZ5MG49BA2E5KVwDgigqpXV1ZDtEBrUPo",
  "key6": "eBseMBapi56wLbeE9cq3wxNUgEULFxfZhNUBkTYRe69zvGoXS5AfM1xBeS9j2vXupi1suR9LGMsD228kiW1w175",
  "key7": "89nJS4VekzRPL6mqhXMJ2CQLUsvGt6CdDPkmA9MmjsXQBcFYLTczGtvJ5irTidLEmE5RYUZoX97MP7Z8ncUsywB",
  "key8": "4ajEf7q9AKbtf5M3vU2MLT3JqLHwSdePDVNHgZWf9GPjBxE9D8JP1zK95hhdqSXWNrvJszVMRnaDF9JWeJYQqySP",
  "key9": "4AfKHWLFzkCTrWcZi9ETBUcH9CyV8L3Qo7QPrsqfS9HeBNewV1W6kz16oaVaCFcbW1PsTh9cxKkcdv3qFJKLF5wV",
  "key10": "2G5cvQ6ZFG473HYkVKjCMigE4bmirubrswD33vpaYBcM9qxgwvvB4EMA4ZNwxKRcRy6F5ohuHdfiUxYPa7xWbASs",
  "key11": "f26tHwCDwXKR6g3S78Q6GKCiTt9NCg8D73NayjZkGBwRPjmqb3WebbugFDbvu5di2CrwEYGCFHt7RqTocttBgD6",
  "key12": "nibkkkfCe3BMyFMMH2wzYV3joc7Pbwo4QgRhjujZEahEEbadimCQU77gF6y9mcPz7VFkmaSgM6rZKK5SLUaGYJi",
  "key13": "3kU3rfokmUokBnFbyUKaJkPR7W2KXsBJDB5MTYAJJSHAcsf4ftwifm85s9tumSPVycairagfgXcBYNfy6GbQPMmZ",
  "key14": "3YCh3sMXirdWYVYFMdAKHpZTuPAA3g3tgjWujMbSvUGGtYAXxEaQ8cNzo6JHeTdBqsUZ3nnUJRq6fUdaKeXXJra5",
  "key15": "5hhUrxE3mxvvKB3UZG4YfobcKxv9JUymhej4yDodQVkNbndvQXAwjVdUiSAUeDNAof1E8UvJ7sHwUQu3yAhSVgLV",
  "key16": "2HLsLXM196Jp8fdBVd3btUunkmeerQYN9tiJDrcS71Tv7a7tC6ixkeNvovsFK6Wkx8RppfJ6xko7uu9bWFMioyVT",
  "key17": "5Fy2AEmYSn8y5RzmaTZUNELLJMDSNkM81W2LTkQAj64PAEWDGcu2rCQqRBxaUd6tCezmmFiCPFcdqFh3qHZv2zRe",
  "key18": "5mGTUnELkPFPg34YeUTYqKyGJc6ZqS8o8WG69kKyx5aEQN3E1z5FJLZhmAutrL8BtJ2XeAJmkJ7aJFjYEyWDzwN7",
  "key19": "25iZo5XiMLyMn8FoqDzFmk55Kxxtd61jfEByWFfcPXGwpi7GP6CFRJfZqscd17ed7HThjC9Lk9gQcFLSm33yGqnf",
  "key20": "638N867xYtEG8vUDpkByzcrMv9HFTnhjZya7LuXf1rJRjeAzbs7rDRV1ZeQVegu2snA5dQeXgEySVLytVKLJJW7t",
  "key21": "4dw3R1YGRx5LDZw9pmnvDBZ7zoXHiDyMpQRd8nHeRifkx25fwAoFrzUD7r5kcLoBwWWxfNoBmVcsWkdTsMaP4ky8",
  "key22": "5kUE3UzBLPAYd3uEA28LDXkfN9gb3WDK6iH4dnW1tsACrjE87jyEHNAZc9pzx4mJg2zfR2xURp7AT2KEPJ77VKjw",
  "key23": "59xvsrHbAptcoTcUaeTgVytUrreLX2TrSTPZkgTjsET7Czd9aWTEWCyKgE2HctbsDP7YbcDiSWNm2eAm4VMx5KJn",
  "key24": "3TBexdtq7LKmbTS5aFk2o2PH3QXK2PtcZrGUvuDr6mceDEBMmxNtVqjUKcQMjbEFz9U7zTiWDYKo3GDE36t3z2fJ",
  "key25": "5o7vxvREzmCXwm9cZyuksCVw6LVvVn646oeUSxnExUS7jMoLUKpFMUPh9xwv4yHsR7of4gFcgJV6rUt4HDzUjsHV",
  "key26": "5kSf1Y4gAtWWAZ1u8gPUTuCqrAUgWgdyngmWaNksdi1H5E9G4zroErwAxfbLN6ZFFBA3XDfme9Z45pB2QdXgoxnH",
  "key27": "2BUiEm7xLg3D8s4oo3dVqZXFzUqpKqfcYqxyHT7bPiLTwurf5p2rW7jaACSsKabTuHe65rMFL6AqJqYQvMrAXvfK",
  "key28": "2yHM2y8YAZJfsBFTa5kXusDmdjtkJi9RuMFCBxhtyK3GZBQUm7nraugQSWSqm9jzRWZwVaseYswoXSiu5qxZ4arq",
  "key29": "5xzV1zXc6ycppj6cPoGWQwta1fGJTA7BxkdMakDLDyf6W73DjLpUuxZ5Cz3QFA7oQKGgXCjMgYnDmXvXGzUbmPQU",
  "key30": "3CEYrz8zF2YnDz3XgTjRbC6cAsQiSpPXRz2RqHRXzLzinQnjTvt2fo16q5QdBLyABknrTwui4r1RRUQnC2T8VXzW",
  "key31": "34nVSQMKzTB8UqYzZHXk2jc85kCahBzW6LY4bgAFyTZDvxeaeVzwyyicKB8xuW9n4pjZPxKwKtrAbxTmavep8Ly2",
  "key32": "cdKKYG9bJQyvvZoh3kZy4HHCKJHUzidkRVW1inPEPThmvufMfKUHvQNKhHy9hv1Xv6WHnMgztaPMteLjvevDgrJ",
  "key33": "5VJwRaA3ZP59jCAHBbzwohcTwKmKco3aXZJ9DZW9PfRqbr4TXLN1HzpXQMxLPjXiX7VUQBjsKFv6oh5SinA3heVz",
  "key34": "62Rnka8WK5e7Ps7XmHFAJhmUiYkT6aZrssXXkuEFCKjdhBawmLsNcPJ2SXczgxVLVQ2WkUtwBKUFuG7nQJSpGBkf"
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
