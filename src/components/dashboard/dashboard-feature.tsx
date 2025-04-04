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
    "3GHhjhqJq9menZjo5BnkH54rBeKbAKgbs9UwWVDStY3EVkrwUXsPxnqsx1GvpNRC7UZUooVdW8wFWujPzdQMyuoS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eKzfFMqFDfdA8iEaU3Yz7kAQNiF8bf1n1fxGkdBDYEBtMygX7iNpE8pvsmRaj8WK85xzw3D11VEahQKtoA7JNVA",
  "key1": "5WPyA38tpPhXGBCqBQdRw4Z1XwZGMpSGRHC8S8BDFPgAADxBG5JbVqd4fXLqfv7d1i5XuhMGRtbffvyqKNFhYAQo",
  "key2": "66Rp5ijkd1vCCjedDzjrzXcp82oMuCCMrypJq4sYrx8yF1E4vk73PwuZ8194wXuhzcMGyaMNoz5phhCnY7Cf541a",
  "key3": "48GeVZRzu3eJboQBBygg9sQU4Eu1UQRrcvXwobf86vdbH8eD9vbNhvmJrMcr3NgajaggFNbtnf48WJeAQpZgUydg",
  "key4": "7952trdNMArkEzh4VbyqNo7ghboH2zMaP2tz4cBMtDWS8bmJxvpMnEhGJDVm6cHkHSLwoPKkAqZdMfweaaz9fUs",
  "key5": "2gwzddRxvzh8nVwTc7fdziwEWksAvB5yvwSBPJGB1jU8Aez7HUAQtNrPadpKkEWU5qXEd9BiUZPySVdWGoYNMJux",
  "key6": "2MN17YcsxCT5MW42NnGmwFJLunSGfPSDUF1RLc9etCgxphBDxhydjrum9vDSq1LbgFP4Jh1brCkRKpYPfuBy43KD",
  "key7": "2XsLSJk5r61sE1zQcjmjssEzFn9Kaoy9oXKJcsHvqWzZVi3EBS2MSgPv8NjbbY9nxkoesnkWVpUkYutKxWquqRpy",
  "key8": "Ex9fiSFntX8WgLRGLnyhv9N9hX2ZpsBWCDPqwBpaRL1q44jBffGeT7Y2UPMAZAPNW3oCJpw78VjHgKimzkZxyBP",
  "key9": "2K3H72mvh8VJ1C2koiuoaQQQBN6u66dcBs1RyYT6amyotAYaTHwQGcjNgegkcZQ9GQYWyfjG8cDpW5n5sQWyT1RE",
  "key10": "2q7o8Mj5t78S4dLD9vmkWHr4oFEaDBQrasAFCqiYfytkLu39F1qgSi45ZK4mHaEkwMTrSdHWSdWHmS17AtjkWZtV",
  "key11": "3pCBUBCMgSkpqutXFHevVCxGZ3jkycXVqYs4LSyw34rKUwbBscvsM4bMWQgQiM8PajzjLi2gBYdzRYY8D8n83igR",
  "key12": "25axGaHUSXnBcd57bzHkdRPd2D7FBCetmVTSpwfL9WnzhyQ8LJsHwmjexASfLbixADmmmM9R5rg74WK1TRbvuwK7",
  "key13": "5KSmndg3Je7HkB2SGQi5AvENi8Lui54Gtg7YJb5j5vVeJFZWeoZZoog2vQLERYendUSbKVgdzkh8BQvt1pcBxygN",
  "key14": "2ZcAWYsZrsf9Kw8T2ZhpCRUhp1TPF7wEEY6WTyqzZ1Yx3uo29RxV9bLd154XRxNcVriGMQyAKyypPenvBCoJKcEA",
  "key15": "3ec14T18Pcey5R8rxTaPocexy3WoAESHXG4dU1bhF1a1DcxQR6jYFpiJfx9vvjSZNjwZJQ5mxH59gw4ZWEkbcipr",
  "key16": "3sR6f2FexfznKGfoNfJoon1iWvSKE8k2cjgNEM2NtX26y1MqzFwsn9uZ5xxmWQ6gMP4TvHrTHeA7myHwtKASmvbm",
  "key17": "3Sxc5K12rKsVSwdWnUT3kdWu64EoE4fch7myeqg6q8zZdtsWYuFiVYP7DTX62fGfvYmFz4QyXR4ReDt1gy6zdjSY",
  "key18": "35VJvTd21uvcHBzyvLAAusx29mHSbiAjtmkKj6ueRwx7Hn9k6Jgoa8spdJQSjEwu1VCS1vd2MqBvQC7kvEqpWCKv",
  "key19": "5u5pEmhbDGAVu4n7yg9bFPnrfGoHZJjwx92Uqqavpht6qW7YRQyVwgnyTtVAxk8RaCgwA5VfhPngmYWBVRmDpYeR",
  "key20": "cZDfPaFqacuE82enyVobDHyA1E5eREjaGM7URdY4r7JkZTKFzRZdJ3Vcd1tHZvNCSd8cgmHgTy7usg7n3J1VJp9",
  "key21": "2m8RwUnWjTWsahL3HGVLq226WgWDsScxzsE9K7tE4dh79sCEbdMH3RnR34jvMWBbJUtEJ45sjx3Ag4GV92gcDqMK",
  "key22": "2TMA52QBhoEZb2t5NCLwBZGp32X7HtoeqowQuzEtvtfPYYBx3psorZbrvEPAcsaXqSVbojrvbxcRbVr2N3DTkkki",
  "key23": "3KRi5sFkMdhAd3D3ATimCwQ2PDLTdRrHULWdCMqcYnYp6QqTHyBcZ3T4NPKGjkiXfNXPn5zHcvtwYgvdJtN152ML",
  "key24": "S5rV6RLeAgpGCLrbgyFyKxqigijhAFHbMfexSxwD4gaCBNiDocEtNZxuumLAeiy1heupHzUo4pSCoavQBNyzbdf",
  "key25": "yvtPG4puPSAaVRymaqtGS5ps22jUEoFBgzyGrMs3My7VHbWyTCVVoiZKTe9QSuUknGwBQCjSmA4tHmY8vT2sDyw",
  "key26": "5hSTQMSt3zMAuRs6gxutJp9HWLDs4orvNPKq2nnFFc1VaXYJMuBCeVXQtifSpeUPJQgCDhBWxDqXBF7wPBcHJfqm",
  "key27": "25ziBMFmskMMG9meAoCbo4ZbxCbaXRYprAEHaAPsNDNHNFJmxzREed8k5RHZaUYuysciHUuGyb5mzdxXx3B8YZvU",
  "key28": "4DkymQ3ANacVebuhG9yW9C83rxP3dQG5AAnk4TUjhywQMMyg9JpuxCfYy1UaXPV8PqPfYFaLVi7pVKRczegBcuX9",
  "key29": "2LoNpEoC79KjYEbeXU3gPDhKneowwkk7AtQStsTxYyQRrawxx5Twf554BGMfjQkGTTNXSV3JhYT2FRWaaZSQAiPy",
  "key30": "qYzjj4AezZgM5YDSBSYsy5pxWtksJ8ux378MqdHsh4pPEEku6W25fmDDkDTRvDWmuE9xwLBtdqZCvU7nospZkDq",
  "key31": "3FRMjVd3JVXtP9hR8nJjnAV7EZZWdB58R9LfyWLBFQhknYmysLZQ5ej5BDpkMjmaR21oUxBCB55Xf8RXyXME4J8J",
  "key32": "5d1ceHN6qHw2uGPP3UQyhkdMtVwcHQJgxrzC837kK6Nsog11XPXJ6i5efAzsvZqMAkhiSYhTLnp2eDfjH8NMCX76",
  "key33": "47Si27xkBF2WKaDLp4iVfuTTgSxqLPniAKREEuUQ9ucb39PnvMQHSE1iWgyUSLjJciqYqm43Ccoc6ZgXKNEDZG6i",
  "key34": "3AoSdBq5NpaWGSgj5TTszoMQC4fhDgttUrcFnLEsqrkhmcX4CRaX136xWmhJbmoveERFeBxKLWs6vQy5Hobgi7sh",
  "key35": "25MqqmFQnBNsZsCrXQ96UNQu1JJ4k9k8gzvSrVKzJ6rpfmpL9eeUxEYZuTPvjf1HktFEjmXyqr2L6SVBwmNRtfi5",
  "key36": "34ToCMc2HfUaLSTYuTEDthacePqWjgaUv3eUiFAX6vDzCxXm2mBesKHvvEX8YfLcikmS9Fmoh9eg6JksJjJReCGh",
  "key37": "2a2vAdHKo4gbYq3Mcc6xugLYEc7vEa9Wf8bAuNtFYbbF7GKUyYTfQqfEasBMQ2JtsqDQqcPc8KmMGuoMRsHiMMUr",
  "key38": "5FLSbZcjWgJNCA62AjTe857MsZrD2cde1EuGVAVmsyS88wquXmbb1RJKuQYMfoGu3zFfvXnpoozTniXY22AtYVoK",
  "key39": "5Wh369PPr2SmHRjNvTw2sS1P3ZCSWqyTkKU59wxV5a3etBDpiqzZ9VTcyxF82BrZaRzXHorHdyikoSqcYr5vVU7Z",
  "key40": "2xBxKdfabdwHbooJfHsuHo8seRKJMgekq2hW7q9CLxexdxKTQnuMgZtCNjB1gHxWYM8tQHNGQLAjHsDjxCsnpHwG",
  "key41": "2voZUWfyR3wEWWgCUSEQVxRm4ZC6r96GUFLsMdwxe858X8nMd3PxBxAK3xhRwLZT1qVo4mgjo8iU4UJm4HypYqZq",
  "key42": "5rL6NptCsUo5ms5TrogFzvPGstd3TDzEaSxuGdFebW15wi7zbGnUAuPAftQjkSU6nR3UW96qwQAFYc2r9ytuj3cQ",
  "key43": "6112gaUQoCzMtDJHJxo5YULKuwEKKkEj7uf4otNksC2zQt8EZ1YzxSRSScKh2KNAVaGGpFhC62RVja8BHdaYEURD",
  "key44": "4Y63eNLNKQeADxqLBCp6zrAak57tzjtzwaXHKoQvzatHhdMeRRFUn63bipAiRhsvJgTfjnbWNUfpLHQ6JhfU4Fpw",
  "key45": "4KkJyZDxzm6eHu1PfsMZ6GpVRdvm5kokXvjPTYqro6wGGMcdeAbbRgHGsLBBKkRNJdqU9RvzX7u1EF1r5ozoYWGh",
  "key46": "5v5rFodVDhp6Rju99nGNwFkPPLMbWF88mHbCnw1uQVQwxxSopKrQj87ere7G7okLTRvzwg6ytnrnR6TN9tVT8ojL"
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
