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
    "2KNaNdib193Pq1g3QKEMSERHWBw2PrvdfpediFTqbDefLS52zTeS5b7ufrtC9ZHEjGkSpvEThMZxRhtySyhsnKqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w3ZErkUHjfMhxbfPmc13gaYTwYssuVdP6d4Zna7jRhKQPCHNDd3UN6Aeh2Wt5WdAHmn8KGFsQ7UCYoRfvTjMYf9",
  "key1": "WgW4x163daFDS35tUMZF8wcFXneGza7WoczooQfkPiE3fiRxXFPmbWioMe5tfWHMPHRkLFx2jLg7xEYZiYUX8uU",
  "key2": "2i4vGaHjErbZEvd9Nr2zYzJfDHPs5sAPJYskWyoULyw6MhaEJdj3mYSypoDsAdFmrbmB7Uy6HTQeoMbyVahZgLKf",
  "key3": "3G522cff3LeyFxEcb29z5My83fax4CSC4CeA1nujokCAEivtSeCWqpUh7Re4XcgifDfsGQSKAK8LqXZh2gey2xpy",
  "key4": "426bSFMDAm1ViDiMXnUMft1yV9Gss4dLndRU7VGjDYY24BYcK8SwJtnS4YX2JHg6qUEsT8iNvafCz5ryn5E82GC",
  "key5": "2VJxTMM7xxaXfM1N97DjY1rucw9J2mnKJ7T7iry5KEmCr7YYfpvyqmPD9CRMeQNyT69zyWDSre2VshbNfWWsP2nM",
  "key6": "2k8PyjGPSNXfvfRHb2duXdmpBAMn7SLdCiPYUnxbCGb2ARfzrj3qYmeV2S7WF6ff9f8jLxE7kQpvpBpCE43WYSRr",
  "key7": "3soKCVebHc1yCmVyx49DRttoUJ4CMkkFuAJRGW7gTqYo4gKLFpkoRQWtaZ9xN5QDRiCfVLgCQs6nA7DBjwEAXJEv",
  "key8": "4qyuyRqoQgMcddrc7AAv6pZT7uJGYfWD7xkcTohP9Wpo9aS2YjyS6AZaJAJNaZPXHjdntuGss5bAcdQiL9xPUW9u",
  "key9": "iknsEnhJQj2miZQ3y8ZVcHLBMMzEwtANVEMwRyqT5e6qYj9kUo9VMuxqZHjgaioiDXYrwTTqFSGnWM1xhoHTqHF",
  "key10": "2uR7FpXAHTQxSdudJuf4RZNEgkmJ5R6MLXgiDzVtPbL6UkEd1it9VTcudtN2F9HizZwwA8Dqy9oWQxin9aM9cNz3",
  "key11": "9NYRwXXUBTkYHMSDpsSvgU2sUQmXittgj2do5pXDbrZSDg6yJaCnSnJA51Pvi7H2Nf7KNcB4zNpzcTai3oPtkpn",
  "key12": "5aek8HwWuGQFRqqA5Ffh6gQgwPrGq73xct8eZNc21y9d3b6H39k3EAvTdxT46gujXixyUanTnK6hybZTqCU8Ap78",
  "key13": "5qy9MKDh7JeBKW8HTNHSscnjHGoyELX7qs7qN75qNrpqeFXQcmFyMecRvheqW9NdEp3ZLN4sbvgoSLyvLnXefZYy",
  "key14": "7AqwQSE8nCo5q16Lb5Bnc62oNCrV2McLrRsjoAV8yeYccYRjj4DYoYbvAUAHCUDSxqEeT92Wv4dvX9CHmRUdK47",
  "key15": "4hy6TK7Syrxw1bD1JrHpH7f96f8c5uK69ierx9hA9wnAvi2qo4ie7yEGDJoE4PeXop9ecSkeak5iMAV24Nv75XwL",
  "key16": "5esB5R7EBQjP3qHvnhCBKaHiVDzQTn1pn3j8nwSQq1PCnJqzermHcpiKA3sEkSXzrmTJ1sMYASpMNLywFYw4rGyh",
  "key17": "5MUPP87NQ5AQZbKo7bXU9de6MaZwXNmtG7HyvvYg6XowhL7y3uRDV8xaZNN2mZmr9MzhtLANkA4XUdN8weKVwvNk",
  "key18": "NaBQXMXuWWHtNPjMrPmPM662dKYKwbupmt11fcZ4KNRoCn1eZYh6iU4F3Wqx9VkdvqpMqiKqBBC8rqiveU4WR87",
  "key19": "4E8VkynfEVosEnWWwRmWN9LD2gkYQkFSkh4eyHdcccNeNkpuq52o1zvAbNiTfagU47nADy6aQbrbT48VrMHYD1Ym",
  "key20": "cP6HBAzH4G3gb4iakBjznJFQVe7bSud1nNMt4qQSJtTLQNDedacT6yytqFNuMPP2VgfcBv3JWxeLDZWzUb4LY6s",
  "key21": "3PZuUXKhm2574UQdXsHULqLVntLGgncHeWBvjvA2CjU7nP7eUR1E8qGg3czexXWhJwN9VSwCEVbEw7seEuXbhiB5",
  "key22": "5s85aDgYG49Pk3KxXYgo45LsfaWcdSiHbQFf6vwGYeieZsUKkDJN26cwtrMUaFUeiMjF7jTNPyPc9oZG9aaJVDPX",
  "key23": "5yVaSKJuA4q9gS1vaZCMgLjDS68GPd3Xi16yt1WmpYo5Lt2pVU3f6qUXtmjWvZKP57JYqgQ3ML4rHtYJ7xA4zoN7",
  "key24": "kturLUFi54KkSLz833C7QxNTnNPGAPUgWfp5MXnYb6r17ALiGc1YEq9GaWMDuEX5HanbsFQCVLHdCYkiLfe2KKv",
  "key25": "2A6xjxfit6hmUycaemybHjsX8t4rC8YLi8evEvw8NYYRcEYtmTdqLKtaYQJ9M7KM12m5JCJcisCNLTUs5iDRMhA8",
  "key26": "2j7B8x7xVZi1Eovg4vg1nEoJtUVvEMGv4DUjMxPi8CT2QqGUNwV4SE8VgoxL9TFj3u1XGUYx1Z1AepFi9xKtg1az",
  "key27": "NMW4Nd3QMEAXZ3LkaDAq1ePexzLj27jUPqyBxA7igFqs9mjszJbGtQWpKJMRdzgck55SzFX2eBf1PX56ubpzayf",
  "key28": "33rUAtyDpo9di2cTHsxGW3EVSg7iAr4SjzmRHCU8pLCwFDVcUHQ4jWJfcCXi7XJJXcYp6CVzBP3NVMgscTpFqah4",
  "key29": "2ZnQjGExukzCtzYgLi7mC4BGhJhJ3NyAv4kE8xE47ZfWcXM23av2Lb1VFXxupgD3Xy4GfMUN3juQPTqb42pDxKpc",
  "key30": "59zkELxnuyGN653SLm8vCQBuuQzFMKG3PFPETrpqwKwXs2VxamRg5LSHDBWp5eeBsZSBAD5j3WGU6M4pp2PdHoR7",
  "key31": "CsgeN9CyUVNjC8NhN8gVB5jJu1X5QWkSePaXe35ZFLL2YuC5o9yrFwE5soQf11u8wFfxo9G6FZD5qYtSs2wg5mZ",
  "key32": "5yHEV6AbVa5NQ7zw8NRULFmGzRBXefz34FxzzNZ1m2hdFy2PEWiDcz4rsx5edRoPzrDU1MvpimhGtK5o8ksWjLEz",
  "key33": "54vtEaoKagyiHjR3dbhennEQeZr41eMukQ7P5hoVBFrGDAXjnhTa1xkKm47a2q6RYEg7wrt8YDVTuqBhMQ4agkkX",
  "key34": "2jYiT69ZDyNkUxAUQFg9aMLCjCp2qsYFRUSQe7Z3Vy9vN6NyV9L3Gq7zo4Y1EVswVtYkVTQJLdTg8zPTutzEbLY8",
  "key35": "vnHb4PopGHzCerAAJZqxuWHTyQBdL4yDZX5jUQvpbNTspzjrFqfVx6s4eFFZZRV2BXUPvsaB6R3b3xqARf8hiQe",
  "key36": "3Dx6VThgPztAKrcwsXcYTCB4QKa1DhgFPtRyJ6tQEvJMyw2oqJFUmAeRo8yyVeBWCHkuwkDdNsTNeu7XUeqK69wC",
  "key37": "2Dm5EYnNC3NkgXvYyDG4CMWKzm2hFDAwbMen9qcTeiHXH5ygAb5yAJEigQq9uHjExLPVK8MeDUA96A7A1EvgRnHe",
  "key38": "4tgMoAxHYoWsKUcYCFLZcBCHsAg5tfcDRjbB3cub2JbLDojvJXrQQrisrPFe13ZU9jp228ZNTvSSdmLpu5Ru1J4Z",
  "key39": "49kSWXULQ3NaWcDXNoxMXCbrQmwWBcdQjyrJtSnFYsNeJtd1vF93aFFaHzCKutgHVHCNAgF1A4kbiVxkbMMmPaFz",
  "key40": "2XSBn6Knf4s852Xz7s9dkSFHf9rRJCYBzQV3HCUvHoVcbmsCyG1UTwnH5VUfec8UeHdGqAbEXfuU7kMKdSktGP4a",
  "key41": "51QAy6ZcnuWciwMHg3um2aa2pzTguDPovCwatm5BgQJ2Jjs6oNQyTBjkbFDHfAczu7iDD9Z8iphug1MfUxBu2d59",
  "key42": "Ws6Qg1n1wrVZMYb2W7gd9SiymVVrw7q1yL88Fo63RYaENrW9nvHTmfMZSUvpQj25W2S24cMVzwjPWAQxPuojo5q",
  "key43": "3PpPRpUk56W6vP4WqNVXDNcU6oXzfPe7n8M3GBDwiaQ4HJ5XsQcvSFVWn3KDQG5WfoLp47Spx3tRkkFiW8e1Jzdk",
  "key44": "2tzCWtNmguEHcHSbepp8BLa5CKhCJkEWWuiLXtZiRpHDX7cLd81NzQsNh73JAcmVLr3Vc14DtSRLiExkZvgP27xr",
  "key45": "3D9zTmRD2oXUAdYycZGdfQJNDiyYmrS3iez27cB7deoy8WczGsDHaD2AjhzPiVGKDDxzEAZwMuLZbD2pjaSsSCqQ",
  "key46": "2z6k16reB3PaqvgHZqyNYJFSPk3vT4iL8ViJkExG6yyBWuQ6RrmoAMuMZvV3FuunA9JT4eWAHHUXNXbxckHqSSUE",
  "key47": "2vNNf76G5dhaCPp8by36KL5ozLX3k8FTnf7yQHWk4rrDUWe6uz5qBB1f69bnV28gospQA5hLsRiDJRuJ58TQLkfu",
  "key48": "4f36bRruTVNBy5q5MLkxGpxuvvbDKLFjQfXTT9GFW4VMS8MzfMGRedir7cV3bxY1LKokis6Wub3mMEaUAGoHoo85",
  "key49": "5vvx4VbeE3Dj4PCJZFPzajxWoaKuDwrorDe3aQHeazGwjPZtR1bESYAKXMauaUHAdMtVEzzAm52ZVfCDn5Ff8K4h"
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
