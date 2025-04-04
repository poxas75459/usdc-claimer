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
    "3vWMU6NewXUazsUGU2mNbNF9LTFfQGVmkUdbzFFMvRmQ2WzFzG7wpLXngjXfMTRMhrpfCYkG8GVVAaN58RVocMpS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oyrAW6BRjFWMvAb5JPQ7pb8njw146EM6LTScmN6QmkVPNsEu5HaYsUEfHvyqQYxbFuF7nS4QawFjibxqyg2PUCP",
  "key1": "5A4HRf7DdAhnszAzRsDjBse4m7g2XhK2NCZe3ZK4w5jt3ESzHGCtj8afW5hrCv2fj62KYqNtUcGscnH6oJDLBNzo",
  "key2": "33CsFpNEqKkkjmqQ3FoQEpSayueWA5EGVbC5dJs6kjwztitpBWXsMqQJtooSrZrLyjApUkzZCgS2tefK4sZ3v24T",
  "key3": "3qc9ozqryZw2Guh1YtMVTTduKU4QrgAWC8jkbDfHn9Zs37Aoatn7ifyJu9vPLeyX1R2PrtB27NCStjW4VijALRfi",
  "key4": "59W7SgTTFZcuL6FbV7YURJyPPjPhRirbfF4PBw3kbEJ5dgit1R3pGKi8K5h3i2mfmMcainNTqseDmZyDXmjQs8EA",
  "key5": "3REBkhSR3LtKmSLdHfa44jS8gZffpGjZ3iLcaZgkfqvxfY6Y6svXXy3J71xw6QUCDmXgNjqfjPsSzjexNdmYNs98",
  "key6": "4SJMLbv4A55TiYVx8NA1qhdfUnVuzxbgEQxg76RK9EoHe21Yi2KPTXxPiuCBg2Jquow5tXKxia3xL42azPvQYyBz",
  "key7": "4dZxG5FTd58vADtk58WL8QwMhzzczvXZkF5bt5zhSm7Munq3UhFeh9GFvnrXA2hLUTj9SHSuiaH9NJUzUAb5spLP",
  "key8": "5uAWrJWvjgSxQM6eomgNTPkU5JkSdzuMSKmyJsHT14rvZUPkt3fD14YnVd2XyJjo6aGXZ8yKMYfRQ5t1mE6Wagnc",
  "key9": "5T5Hd3ekrop8fLejS6skMz9TkoAChFsj7jHSQ9NdJG3d6SQGY4zjt7su6GGUFwNH3sSojxHySpNbV1joSqzuPPqm",
  "key10": "5cVmRosf1UaVZEumuSjuyW6Sshw4vsHysS6wY5Yf5nnXGuPZoTQE3ArXc5tT2ptu4R93q6nfpDR9zi2KfraboZ5c",
  "key11": "2XQxSLKkfnM6gneJibc81EewuBtXHAW6A3dNketqEeucp8TZZBi1pdDh6Mr8y2Z7bERBFg8wr6tHUCZBngKoUbdr",
  "key12": "2pePwB8hvsdKV9DKVmLVuKE4WSgW7pWLP9kucUSEFeeqrjJWhLxTqdDUCcgRJPkXnwWcjibQd8PFqFLCpLqHmdjz",
  "key13": "4ZA9jywc9Ks7MbMAqDwrJm7sNiY28rNQbxMEJQoLc7XiiTnXU3tYrYmYw2UrmPykBM2szsZjYbp7x47YZe97DXnx",
  "key14": "2yRQPAQs452AoDrMsSc46PZsTXG4HEMR6HteRcsEojFhDNfv33fLELZS3VbECgBfoHsM2Wo2Crhevhdvo5vnbDq3",
  "key15": "2u2oaRG4bsm9CHcxsDSe9qVAMtGFDwCHG7X1cybsQZJTWkw4cAuyEoNwDLpqh9wRk9NpwdkbRofwoWfUZYAaj79Q",
  "key16": "P5YSg8o7o6ZmvmPQTGigSJEsgk7XH7r3VRuZosQRoVyZmtLe2dy1o7gdVsdwxj6QnvDxXmGTTWC3n4G5fLW2sdN",
  "key17": "32HsmSPB5W7Uk9Q4syyZdVDqz7UY595QKW9BumELi61h8uwC5vvVTCBohr2HebqxCtdnEQKxspuuKQvx9nkEeaCs",
  "key18": "4MQEaf4Gap8QcfDYSgbbM8c5mpkWTnWA1KJroH8bg7woxCX6piBDuoWvBmW92Vvxfp3MMb6zRxksPGFUnhQCTHV7",
  "key19": "5HYr4mUPSaVxqHhjyQrKFx6V7HNxeDVwvV3ByEtNXiE3k1c3D7e92MSq2ZBLsLAXzbo16A2tHnFCuAGUVKchxjUp",
  "key20": "ucwZStiyXrPKiAVW8ayiScpenizoU1oaTksWQWtq4JTqZurjN4wtCh7WD1dtHLq2VmbKURi2NEEqkErbkohCjKs",
  "key21": "5zxg4soKT86Tg8RfcvZmUsWPEeaQpaeidK8mAR9MhJmmoeeuuzgwupd578CRZoG1GcsxhVKdfz8keiKnHECRK1xk",
  "key22": "3kqdW5WWLNkuvyM12sNWtUw9SXCP94GzTWCGkRN18ioBEpgHQs1TXMk4maJom2cer8S12udAPV687YLmvz4DXj8x",
  "key23": "2RcGbYYKM3sBvmG1h12LjZvXZBZ9Tcj6FYdEk2z6LHj7omrLqDC6D1siii4w8diLuC3dJo2L6J8GF9Et2nt4QQSZ",
  "key24": "3vsPWd9F368vRAzqxwgVLDA4VresTRyKtbM5ThUghoGbvSTMVVhSn4YYT3rokWzVCn9kY8yiTXeamhSXSE2kGpH4",
  "key25": "386XjENWphqk3PNJu7QeBM1KBQF1xKeZ1npuFA4RGDCQUeDSfj2Enm9Hw6Xi4twJkxkxpZpwVgboFNgWW7VaFgU4",
  "key26": "2HFwGtqZWhpupTv1xFmSZo1VJWohwtsFe5BfBtwjZXKt9haqnoSrzt1UPQNh5Fvkgdm4fFiUVFTQGBMYgepL9ons",
  "key27": "4jvuJsSe3p88BpEtLGyFztyJsf8AMwzh5dCvRmwkpErvhXNHXQZ47HRguqmBFUzWYWh9YfQtjxiYJKAptT2qSBCZ",
  "key28": "2LH5qqBGC1bW2cYDTprvKZyWbh1bKb5hYnaYdpCS9CVnReFjz8nM4vmgUK87wourBsnFbNXYWsmB1stWQR4K1dQB",
  "key29": "5pe1yexHnT7X282omkVPUf4BBc2cHpRMZgJ2Bs4UGqx4LiU5XhW3RAG58L9xnVq2DSEowMrfMfqkLgzBML7oVs7M",
  "key30": "22GF4zqjXK39JfikVDvig9fkWyMpDa5d4A9cEMqNpM1dZ1YAwj3V728iF54q2JVVhXHCb42gS3J5RdRNLfsbMhAk",
  "key31": "4QESTF7jdTYVN5XQ8CK7hcbH7rv1EAy9k7XbvnMc8pbd6r5i8bMaEF47deFVfUHtakZwsnZfga8Pn9yyY3fBfLFE",
  "key32": "4LrhbaJpbUyijivU4Qm28wg2AvCmMEUrEciwopgQa4mrhE9gB7u52f8s7f8h3qk5SVxWCStKhdyEKpzUJmybbnHm",
  "key33": "5vgnkrasJUF2eQCAXN3KVRh9GFMjiQH8PNfE5VHbjMsKBwJhoPmmCkYHyv5jGGF6Mxsfeu7jU5S42s8C1RjMMgEK",
  "key34": "3TJY2dut1fmgEJjeP3VzdryKYeKgGNz8smQQmL4kVERbfxT6wgVWz1p1nhdCU4xjbUuXnGRPATBBVb7nuVKqoYht",
  "key35": "21q6dyT8pygzhpoRqktuBnFE6AYG1Z4A5C8NjXqqMfULhJRDVfmAooa8r56XkNDMRMQvQNDWVitoVHoAx9TtSjHe",
  "key36": "eL8Dhf3yZD4XFGTgpU1unZxXyi9R4qmNLYUz8tvEFSFHm4MEdik2zEo8VJ1hDHbwdGiBLtRnmz7Eb2noq3WuYnQ",
  "key37": "v5h6UEo1F3pFdEgiVg8X6Hf81UepC4TfpqPYi5whMB2xgiTLuoS7aeJN9MiU1m7eo6qmT2M5Bs6qu9HNypZS6Yd",
  "key38": "58AHcimcBJDJkW2PSs9Uc62ibeEo1ed5cffkp5EzKvto2rthPWHhgLfmXBTzfPHFGJfu4bNmy4KQemQmwaVJwF8Q",
  "key39": "21TiS22QL4UXgeBZZKy7qqhqcmZkd53j2TbJfuccRKtYHYm7wuxv5mSQKATjnRtJf9MkLeQEwuhyeRmHKDYVwmpD",
  "key40": "3zGZcu3ypymDe8fJF4Cz2mZE41sS5MjDUEvq8e5NJuQJe3cUakhUEryT21ouiB8pMGiXumCUFB9VA3nPPZdd1V6D",
  "key41": "4FvA9P8ddbqbc5hLP6KwQSDW9uduf5gp8Td1WSsu8QfooEawnpUcwdQy6FKDdyDZrXQidvfCfMGYKjMvigxsJ5W8",
  "key42": "2cU88RBBKKCiEHd9bk5Q8wLsYwQPBgq95AsrLC7peu4XVJBiBob4JuvzFPasLJh9JaxYmcdMhhoLfmk5TGMwa9jv",
  "key43": "4DY9upWtMpzvkgbC3CEsefLCEMUmYyyF5ceq7F6h3wEPvPbcY84pHf4FGmF5phdHgw5Hsfa1ATUoKeKTWNAE82WY",
  "key44": "5k57QDz4t2bNku4pP591J1s44cqCdheSGzgrGUoH2PfFjgEQowJ68zgn83oJCRGK42kAiZiqQJN8ZnLHDcqmi1go",
  "key45": "2iXFK1BiGcZm3LN7MCixs5EGirAy3BSj1bhN1xQQHf1Cgsh1xZjqiY5hvhbdAi7UL5WM6S2QXuSJY1RZqTXbcrPX",
  "key46": "3RJPbdyuEEJu1zKnpg3XpWSfWQdBeUsUdobCDjCYLDKiGcQrzs4fGfrrWABkTeGfTpBCxkb3MQ1k19jQthPUQ9hc",
  "key47": "2zNMx6bhzUMDWxkmQPUTKjukZcoiCk3rSXBDDcqJQV6qhtbbjBgt1ue6kGWBWNeBSJCKiR3WYjZYWiXMgs37nn1z",
  "key48": "4LxaKgXoYBFJDKxFQrNTSqvcipZH8vU1Q3W7yqJcMX4dv3PpXzx3nWgu87tHHcYhbFNwjRkKY2zJxHgrwhZqVEKy"
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
