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
    "4TeYU37hq3iWDh5FPR6BFsRh22iZp6YHQP1E99HGzc916sw7NVLbKoxhA7tKwGzEBdtbPMjMpRbVShUaGoiR1iNU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jWgJ1XMey13vjP8KWVU4mu8PkVKCoN5KnS2EgKBxJwCtyRYNDq3WsotzsEJVoNQFL82Whqmx9pbhQydHSDRq7F7",
  "key1": "BFaS6yAKkSRriqExsRnZ6TTXfr7H98Honi3m5AGp7iWdkkNBjeYfccoCkpsHxv4ADjCpxf3q1aRZ97ZkMiqJjrG",
  "key2": "3p89BrfrXbcZYG4i17wJgCxype3dy6gUQeJzmhfNKYcVEuC7V8xF3GAxwiiF38YAG3UNqyMBcnX5JBd1kEdaKiGz",
  "key3": "skV7k9RZBg1M74dTg4sLAu4qhrXaHx4JNQZRi9u4vWd2GmFfaYzGeZn8obD1uM4PgYEgMbsRYytx57ZuhXn6vBk",
  "key4": "3DfRJBy2eMrtXat4ayHN91MRQwttoNhHKE6YNbgX4suQAdvJbSx3VDdj8LF6hgrWF5ETNjypgvx6yDVHLw1Lz3GY",
  "key5": "21pJ78RiQEY7KwaAkrKGgqwXUNSDhWhJ5f83sCiWTDfZvqvz7SAGJesrmTYBDfRqF7EtK7Lk18H1RPUu5NN2NCgy",
  "key6": "2bMF5nMb17qVfEh1tDFS2tdLmzJs8jDenRyHLKmyTXd9tf3Q6bkZyq8smcH6hN1jYabuMCWaoq21ZE46GpZTk9xi",
  "key7": "3yw7pSS1nfVrMJAjEFz7bFTTPcyn3dku5vf2AuBGz7mZwDDqcp1Xukbz6bbGLLgQ9LQh2JbUkJ8c7USzpZXzsrwR",
  "key8": "5hczoNnUshFTj6pB4JjgJuurjpUkhy6sxjKj7LXGWgojF2edSEeiUoUpqWaQt73RmVrygPpovYPuYemy4QAYt27j",
  "key9": "2tg1xDJEWZUysAySt1c9RkgevfNhWKXqSQsvd7LWUjNkCqdqMPKJwWFbUwuBfcSwvV8KUaYYtDhP6z2mwYzotVxM",
  "key10": "2QEpihPmwfTN88GwWgY2UUsJnSnrX6r6DgtWP5Vuqgr1X7eepVoqzrgdNCBqF9A5Ygazfq2WhbqYfkiodUDWnBGB",
  "key11": "2MMp7zRWH7bMToDFUaDzCyLSPusxQnns5cJ3XBNjCuX6UEVRj31dd21gNBoPbJGZNCLEQH6Pq9uDzf7aNC65mBCY",
  "key12": "3RLXfagSAiLmWxqYgevZzhzYEP4wwDGV2H854TVNhvhRUmWPxjVNcm4Ja6L2P8wsMfxQFDwpuUWovNxJfKsjTDdB",
  "key13": "4D2nqBM9NsHvJaCFfdGWNc7pv1RLcpYskg12oRXynHtL7RW7Ask7akVsdxBQ3kBT65AeqVLLN8taF5hx3A57Af76",
  "key14": "jKFCRyUro7xyoq5Ff3YxaweLvNM5wVwbtnoTCJkpJ2MBj91RfKkrozF8J9qpbdjvYEjVUA5AmDCAYuY2cfX2PTW",
  "key15": "TeDGc6eTkYWMd8Hf141DSLEC8J6RL3Mmq6pZZdPSeh73BVx7CawNziqyqpex73BsQLfX9cH4w3b57qBc77VGHWs",
  "key16": "VkHXT8HavG7bpGjSwSXHNZjNyPgGuueGBo2iF4otpKZShbNi4BYEXomiQPFTVZY1iPHopUjLAcxz9U1R9y2XBGX",
  "key17": "3Gtcqih2DKfREasCP4j8ieTC2fZi7QFjUE1yxYKagkb71LgKe9oeHfJcUdDU6Bk45VLHdQ9xYqSsPHKDuwWmPQW2",
  "key18": "268Q8LKdL4ot6nL7XgRU7MXxmbPeEtp7KyusvuGvNicd81JECoHMFrJfDP6p8WZy7K5LTMftZTth7bTYKskZGnx2",
  "key19": "45JkmtKUBFaCGk7b3o2TFA1BND8GJrSfYEPE8T3SQcL3XyQgZj2ULkzSJi2mizPU7PVPA9f5m1W1V7WGQogZyjcv",
  "key20": "42N8Z3PU6H28o9Kn4t5BiX6BP9K7tWWA3gGyd3dXZKohCq3Jw6QmmEAMMBLr19P7xANDnxZKPnLHX9X6U199doqL",
  "key21": "4CGgqWvV99RRm6PNtUR8RqzcVoUekpHT82JETrYZq7hDqzV9eF6B5v8VkYh78CMVwuTuu9nf8MUEkRVurMQLhRg3",
  "key22": "4qaLpapecRBRmifZTuszS2S8c8JUq3CJq6feeDchNYJX4QUwnWryoFEaU9pY54AS8iUJZmSgJq41fdNkPQrDE6HL",
  "key23": "2RYuF6BiV3tEWAYMFFGTag3apNKyK2oKBCGWQBmMVUTGLm5hhAHc1xwr1EJc8d8GiLrPjQ4EUPqT4rJocdggqXr9",
  "key24": "zUcZenYGKRaAX1tMQDn5MYJMv3ndk4FAh5oAeWUSyMpPk1SCH5m7t8N3KsmRjkuqLfxPCm3dssEn68LUWysMmuU",
  "key25": "3TsHx24du6EwcyHyQaMX5TQiwdFMoWva89ErEWJ6TRdqi769NuaTHYJSctWwvLkEXMkbHmuVGRnHD6GrrDWU8nSu",
  "key26": "AY3GfKHUoqysHduHQvpwewT7hSjKmte9ajKhCoChtpnMv9ZfYX2jrAenoXKhgWZaUkMHCR1L4rzCKcoG8Cn3NVs",
  "key27": "ZqAwfK9Wh4GqmqKtbkJjrSnM6YV8Zae7hGhuz3NorYPSDxbKyu6oMk6g59TbM3HZYqvrqPN98FwKz86XZzscUuF",
  "key28": "xyL57mFnS8FhNMJQUTwXxHVVtgYhQaqdbPLMBcu8LmbuXvBbTR8JZeuat3ooSPmuhaAzVyXAio5rhbQL4hWoK6M",
  "key29": "9mHTbRsAqLou5G5Lw8aEzQ39zZQ5H2Si8p7RagB5pEVKCUgsAKNXfx4M9QeL1hr5Sdogjriz6vUs2rfn7rUvzic",
  "key30": "4SxFA2UzneJYcX5NJizSZqGf77aDeCxyofhFJprZxdHajyBULbnNj8aGiF1N52CTa2Ku3VHyGkZ7DdqJvNLRFki4",
  "key31": "5vTwqjB8KYy9tKFDfmcrDo4bZ63NAYXBvu7nVRJQLLmTHiHvjqxCKqLMUbn8dNPhryjEmRTyXfjKgeZDvVVdpGA2",
  "key32": "5NrHpCbigpiTTtbecU1uWHyxBMSHiB43zm5pgxy76AAsXE5GkTXGvA21GAH1Us2G4pNeYU8QR35khnRS4mXX4QKn",
  "key33": "3eUFqVLdFEc97VfKLTPzzjtYz7DX6U6p1yHp9SRod2qofFCh88PcEqWJ2zJbmBLAgdoi9rp7PeuCmkv5Xpn7Qamx",
  "key34": "4oRPqESZjegM9vYSFAmRyjr4ti5JCrfj6wtzGBeoFQXZrr8ZsuC8Y8P5qwreuGDM3G3mtqmMkX4WxDs1paV9UyKf",
  "key35": "sRaPzXu8RwgNouhzYGGuzXnLwbgRfjAXmfz3EBVFgMnku5kVxk3c85BT314FXhC8QEjB7XmbWM9a3UgYmWYE9oF",
  "key36": "2wGmu4ouWBPE2K84LZML1NYsTsSWjkrTA23fgXRMbhwvDnUfMis7ByfTwFipjxAhpq3TiiM3V82YLgWUx6j8UgbT",
  "key37": "4abUSeuPzgZhpmGNEHfMqtpQcFcomDWyxzh1N6wNYPmZ3fjQuEygcAf7fE5XjhEAWAqE2cGot5KpRCZeNQP8Kt23",
  "key38": "2rZHnGgMZ2iePe4WHeAyhKyyKJLFC37tjA9YSPFpXNjqrgn3JWggBNBjfWcuQTnuV422kUvY9QMWX4KzShdM1yhr",
  "key39": "4oYcbVo3ADcVbuKnXpMkc7TxiicrgNB19xaRDXoFFMAi6JwQCpLaPR3PEZTfiac4iUEKkkwJ54JcHtxabeUwfDxu",
  "key40": "3gxqxAm6C24Zm59SDCPWFMpPF5srS8uHPw2B8dfNX6cGs1BFkYfRtvzXdBjZ5kaZuR6XAkC598sjWvZSZUmbFej5",
  "key41": "4UCsGHEWAquv3QF7XCrfuKxR4KXejeip6YzaSnsAeaWrG4e8ifeZELWQWhYVFfVvxMiW3EzijE6EquyunUDqcWZQ",
  "key42": "3C6Zi362jmhUPNsyg87Y7QtA1QgmwzCz7y3kZV6ZfbwAbbwTTnW3u4ESsNM1H3xJh1BoXHwLvzXUhZZcpY8CuSmj",
  "key43": "xH7ydjYc7cZu4sRHFUpFGdp6ofD724jtusU5fcEi4X2YFTHw9SwqMFNnfsZHzTYurQoSQDvr2TqPJe3TKdbWLLS",
  "key44": "4d5p6HoKqG3WZ5Ttdrxrd29gkKVCibNCNHeFBrC1PMzTuEqBqSkRnqqNdjU7JfnDaHyKUL3E3CowE1Zs2k316Pnt",
  "key45": "cpdF2mt4jyXMUEf8oaw3CqKE8qNTas8T66zatgCxfYs5xLBvGx8gVcUpkxyr2Ryo3KfmG63FJbFvaxPAQJmMhTK",
  "key46": "57cX5UM3GqwxC8aAkpvMqYYYiDoycMMgcSBhgpG1Yb8LDXXBQ31iDnVK2kxZH8trrkQ5myPUEuAt1vfV1o2eFdxL",
  "key47": "iHvWrTrkitp4oeqVuGZ3CEW53bANaM9ajvkykwi1F5p81mKjJ3yMtDu3RjTWzPmZimTCV27Bi5krMPoqqzWi4CH",
  "key48": "4KGVYPwoBCQUUrGGk6PatqLjWwqMzoSeg8GoUqZtrxaUFLHQtpzbjD8uYfKvjo8zzmx8HgxZbzsSX2rXbzZ7jNeu",
  "key49": "28VPgtbW5ELCZtv4RaJ8sffMoByXdSfv3Vqd7QhiTNBVEEhNQ9coTcyyHpTAkPfmfo129UfTjeH2xiz6qofW9ouN"
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
