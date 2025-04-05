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
    "3Z7ujqq4cQyhXEkyZYBsgPQFWj31oUaP5Zj8yNnnVhZSJM1kfhjSTHS4WsUhAKmLxs1ajd3bTQpYcb36vVDM7Awn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5o77Tg2yZ4ajPbpQR2DMeeGSegBcKymb6PTYnxkg8bLVszyq92p1GW4brrKbPPU83yuk3eWBrucSJsq94aeDhVAi",
  "key1": "27ccq5MqzW6RXqMyyjQDddNRASh7T5FU1N6JCoT2Ym8YK8mr6yFkYcnfiNinzeD9ZVxMZkwABuoXrY9Nmw7aiNDE",
  "key2": "27ee4CGcs8BD1HVJuT85kVfGmE2LUCatyWkjzo5owTzggy5sw3GrkujSLQNfYKcgFqxx6VBjB9usHzKm7XUJr6as",
  "key3": "5DMhGfqVRooHPoX5F2S8NKdDXAjdiYmuZ3ARL88LRbwVuvJXw7VcpZXu57vNoE2eM19gG9EJfmfFEVudVxMauuM1",
  "key4": "4CrrSAoSLx6FmxnMAoUKTgBAiQRy3mqzSmPwFSZVCESTVazhhSY8xuDVc9jouzrViqC3ubvAWGqvVNoKo3B6QNjK",
  "key5": "2Pka94uZFCp5kAQovRhjLNmhPcuvbKJs4J4q36x1T8R1dXfyeKaT49LCfnZvVBEP2ti7qSbzC34fhjmWgLv8KqSm",
  "key6": "25tQJmDbxrBVT2ekkSwcgCZ6NhfxERQgbPPeNxsirzcf7kMUH1qZayCFBAq4aoRN6od7BipU5kr9eabAhqjUiGHz",
  "key7": "3pU6sQnEvhufcHSWvAeKt392Ebos6RAkEDpnUT5ERVsdY57MhTbzPG1AtDrFwjdMCnWiXgbd47T2ozFvgcoWk5d9",
  "key8": "4M88X1vam1M2ZNCzKcigFd3ZfFUUvkaEYivUskNcc5kQavV4E9qJnbW48nhhEfdYxmfhQN2BBemHmZU3F4EccG5o",
  "key9": "3geffMG8XowAfPziuzt7v46JhPDn6J6s9H6hLcYdd8CPeTETdYXEjvUYDxKUboD1WvjHqbSFoMFbLzWzbciz6CLr",
  "key10": "3irEcX1ZNK5LZsf2zbvzWbEHnw9niGyHeGXWiavcsDQXywmpz5TP6wd2KsbbACFC96esYuqnWV5gS8j2tDsJhzSB",
  "key11": "3JEjx6Ereq5dSsDadLLbQ9Jow4f9kNHTje8gm3jNtqi4kPRBxKZnfYXvx7AR8SAKber18GhHu44kMzKdAGoPr7uM",
  "key12": "5NtDUNNsQpzJ6MZbF59fTzTPUidTqzLfoZeCeRhwFXfaGonDHm87EQ7fCjMZi6BXh6Kagmx96aNvmXdqhgdQQo5H",
  "key13": "4qUDyUnFHcKYS9mxJH3Aigxtmq8eRPLyGmxRZgykgGjouETP2WQuR22H49ZmYu5Y9PDNDKtR8fyoLRSYP3nCa4Ci",
  "key14": "2PfixYtkqJSY3ag6G4RXv231Bq7RF74ArmY95ygcoWmjNfaonDZDQSBF59r18nyxZTQK1Y8dEY3KBS8TqWrVLbjr",
  "key15": "2sJHmwJNFUC9FRzq5F5gqgzF83iVaFEcR3TBrsksxSRcVfz5KBtyAKz8NgkP1i6X6MTXJHrHZuYV83da9SVWsnXF",
  "key16": "43hwC9xtzfWbd7qt6ajEfs1shnvQH6AWMzJL5oSbNBvXaQ4bStP3XwPZoY9ZW3JaRHMEuximqj6vcU2anc8JwepM",
  "key17": "2EcyxTHKNLZdC35MRP77Y1rnLMVfz1599vzkS2G4szmutiYqerCWkj4szFPoT7zvhGM71fBy5ouQenL7VwiC2Qfy",
  "key18": "3JPHsQPeWU422UQfKHi5RioAWKPiW8krSQt6weihZAY22G8jCxH6kFWw4av73dtTgrSVpRMgU5odd21ipYknDFfA",
  "key19": "zRYb3PsjihH5pNLU82P9eKcJhcZVRP3HMnHKpXgQhFXYMSikoPfskoPYfmABY6j8kpN3v1BxirJd5AHsLcN6xVY",
  "key20": "5KT9Q2HpS7Zt1x4q31yMzuiu8zKVFiHeRPL2ACmukKdSNR42H57PX3kakjsrYGZXoKXcBMkUkBXTu3QMMbLPbLM6",
  "key21": "v2GedSThVQf549AjAVPJpvHJy1hoE5zgzJLJUDsQKbGUbwjsy9xi2CxdZC9JbydTfZNHYinPyeRfU8Re1tf8Aoh",
  "key22": "JBAvFDPGAZwmBnPtS9swAJnaKvTAGWAY5Rozp9fWnkZi8FcLQJBqLnzaN3CSU7Xz9jT5CEddKgyFtGdNMrYRxGv",
  "key23": "3MJk969aPoDNhCeSxkPwgjUuonhQ3LfSy8FYoRchENUJ3YVvs4dhAvbpyB3XDyAENJDUqnewo4YfKPhj5eQpzkyQ",
  "key24": "58E4pmAPzcmRTuH7iYZ2acgb9j5xbZPz4g2whvi99H73or7hZjswWVpFmFqepqjYqFPKTm8RtU9WZaGrASRMX3gb",
  "key25": "1r6jHFDjd1rwegdTUX3Fqetkuv8KejgrbBzft8QxfNZ2wT77UMqRNhRSBor3YqhUr3Cy8b5BqJ1cPj97siVyYz6",
  "key26": "4fEgMbNucnunUiWh3WGnruZZU4cyQcM5eFYQ3Xwypz7dXyDt31nt6GDy3TkYGaYRkcTmKJxsfmnBdsCw7ojPF5Ru",
  "key27": "2d5NhmNh9s3YmjhP2L7MjiW9ZhkSZyucBMMhmJsbubadEss13BmkRdgCVK8Whs9U1Dc5mLF5jxzTQ7UyYDFPu2rn",
  "key28": "4yQtzZ6yNxUvRQ7iYCvAK44usGgKLAhZLW2ZoYAhb4GTcJkK9RmCQBH7YedkoFyZp3XabApZNnkkAPW9qgA2wJXF",
  "key29": "3AnYKq4PTCciV4NAgX6BB4C2qsLWvdF6KQa3fWdL2etEoKY6JQ8VPtyFrBiWJPfX8nsJif3E4Mszjjw26iXusQPu",
  "key30": "3EN5iCMxYNffCN7hSf6GN7jHG2CgW75aCZRSvUxFLp8GqfhDS9KbxvECZvVFTpzaQboujJxYmfHaLxQhqdEbNeLB",
  "key31": "3K6x6Q3CNFgnwUsKTLX2fU6mjJjY5StGAQECK5f8BSz7PnwMUBykz4mHrQsRrcNJWvYRBXz4WAUJLht2biac9zhL",
  "key32": "5yvk7xty6QBm7nUqdAgWTM9SgC6kfSnC5dpePrXTDT5Qz2httZCGbHMeNbPe9pBLjgs9Hsmb3DyfNf5U1qkyY8j2",
  "key33": "2DMvQ1ceHQCPn8t2fMKFbd2Vk6mAE9hEDay8qWJC1AUCCtWSAUX3V9GtjgCy2tZmrcCTdjG3x2Fv13HHUxyvQuok",
  "key34": "3gMoWbRRvryvZYzLceyRYAKe9qG1YgDC1zC9cjJeV9HHtDNpuXPqd43JRhFFnzgEwz2EkjWpK1ZUReXzEzmufC49",
  "key35": "3UvoVMQxcvaEXJyZJXUeTNjTWtusaqoeJ1vLJAmrASRGzcpU49Li5Zupg4vEgt5vGgS1kjNChMUdeo4MDocCD2q",
  "key36": "3BA1gCgrKNfDHnMyoMmJeYyoVTA7S14XzaWS8QrxTzKSYX9v7HZBY5Nf1J34fCdPd2VRTrweJTCc4Dy1hPGXk1mj",
  "key37": "24VnPHbwviS64FTr62L8vpkuRWLiotafrUjAsyxyCNPsq9ooQ5jfzxpvQ9J5fA2rLqusAsnGvgJzuvGY4m1hqPh5",
  "key38": "4mjwGbpBqSgJcYZcjkXx7oC3JEsA2mrD5jLZFbgVhMCcYGtXZxKejKMFruVtfzULbEvJKBqchYo3xq9LLCL74NMg",
  "key39": "2Eoz7JuQqN7y6HouE7rYxSGLW1Q1zErN76q5uKPQJaennHuL5cY6PXSnrwAzfkmPKTrZwtowoaPGuoFkRZJGkWro",
  "key40": "3SW8Gdx2RtP5wBmi7AzMe7H3gkxggCFcHt1F4ZHVLhSrbF6avpw4Tfk3D4wg6KXvXqcS2XTBPZx2GPiRcEnRdbEp",
  "key41": "4uJBQpq7nNSGChm8e7uzf8PD44CQLLQm7UkoxgqwfSerGj3K7fBbPV5zmjrrrpxwhjm9CPDfSTgq5JRWcSZcenYT",
  "key42": "2h8qJofyDm1N9PmhBbKiy3FJrWb1gutpdZ8ZLcFvRXokAQRiRa38QCLqcZ4shVD8pxLYXymeyrEro44UmmRoRc1a",
  "key43": "2LdHSxQ3PL5YnU6VZTjCNKThYvUikJ5zWvska2qXUSUmH1641394mMXm4jbUMxfxreM7FeTsHRJkAtVDL7XM7JC9",
  "key44": "44dcVpqqQEweBCdVwqPpGtLarhpPn1m374F2pbxExRDwSSgo5EhKgXyzH69fFD1CknPbjBMKe4waGeere5gXA5tU",
  "key45": "3pjgeaDhNkmEGJfXqpxbC7o417NsXbnguwt6x53TVpMHwjXKHK6DukaqirjobZFWZ4C2Kmmy8ZgLC1pQNjxejtt7",
  "key46": "5YpxEqF7W8traYsyYxJuCKpmu6897SWnwK9XnkmTh5VdDXBDek49oboky5RNFfCmu2z9MYu9o1PrNi4sL7STTZnV",
  "key47": "385huyotpFgoEsRi7fCYANhCV111EAZKrdQ5WNMY4oWX36n5xse91ueceNfXSS2FfwUgqznwjqfwwDPMStLzMmra",
  "key48": "5c9CTT5A4q6LV2wxNs2QXZ4NHy2SkpYxUzwq29XTpyRUxdY8EaXGV8keq9QxTFWeQ9JBHDNs1L6Bnnw9P2Tupdve"
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
