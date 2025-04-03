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
    "5X8F1TqKxPJkLXphhgB3pWFptas66fRqLQwh4A96QNPqU3WWby436h9RzJ7ki6mofr3M8PBA7WyPrvxwzFCDZ6sv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43sLMUQk4cD3s7XHWRB7WvUHTQkdmzqa69nMwV6Nkdsi2ApFEmszXB5Nx9SVFcqoLjKm39oxrMBh32TrW4NwQHF6",
  "key1": "73Xsi7x3uiSGdhTgAmmDnFwhCPjp7p2yNe4SoFTQEAnhwLF9MMyqrgmMu9YMupeAM1PzQBeVU5mjD8NZDrjEm1P",
  "key2": "65LzUTTA8LpoLYwwWp5NFeUr1aiK94R2rqCoXXu2eRiF6H6aTviMptUtfmNmiatomTqzSo4w2tmvgb5MRjrxe33L",
  "key3": "5AyV9kE5BxGwWiULuHHysUReDZSRWrGHWgCh4yaMRUYPXuKJsASgkxKDhWSV9fDXrT4HDdQUwWE7A4ZCT9jj1jy5",
  "key4": "4R6q1zEfGHFjRw1psyhbjDViQtb1cLHGfUUKtLqgDc5qnYZ1D2CyrtrS4Z8kTF2rpWdz5aQ7po94N2eWqJdk47Ln",
  "key5": "4WWARBbLyKTwAC3Uq3n3DMAzSkEAKwMg9Gguue9ZsRSNT3ZRgDZzXdqquj6eiXJmV5sehEZ85Ux3ps7Y8LVHZTJY",
  "key6": "4wWdCYNnPYF9CrmkkJnsFGkqqyi4RLy6UyGsqzeCXUwt8Ju9uuBY8MpdHqucVkFGNxTkkLqY3Qc3Q8zvua8Q8oU2",
  "key7": "4tagT2fxJpzFczZYZP63UFpUq94B74mqG7P9MmeWeGNXTgwPFfEo6Be4dH4a3rtumjJfeZe97xBU8wkAiihsTMX",
  "key8": "4jQn1FR9aE5N5nfP4J6sisyJGNmodwAta16PDF2ZT6WHzztcJ9L9qSHh8pRAKKFkYK7YoJZLALgpfW5QiHmxMP3c",
  "key9": "3iyo7LHCutvBXsJGnc1eKjCXJbYX7Urf71s7WGDsTrkxJXX4F2ouLHxcDa4dKfdfGBBjuE1gHzGSY8aAWEwVJnNY",
  "key10": "3DHZ9TqLXJA69VQdBnFdopXF2QwokPekraxw13Pdhio5wrFoVx6h3yHNpEMuR25annVy5HfszLj3qF4usRTfG4RU",
  "key11": "4DuBjAF1CSvDTSBHVXjJEwAUkChEZoo9AFoewjMKGz372wz6oQoCayUwm5VQFb28XKUc7nXohbAVj6hy9JNETkdf",
  "key12": "5m4eLLVzGR8mDcYbgJJPYwFz2M11SNNGcVBgsctkepNnCj92mCeKHEknKJzCCxesYv8EGuBVjfvCEwM24YfYCYZ3",
  "key13": "4X9eBZf21aPBdZmCHC2FTHkokGVKQn3GbcK1VZpUbhNSX9FUqkAL19BkV1mGsgaE8XLB1gNakyKq8HobpvH6hKGB",
  "key14": "3BaA5i7jvctYbRYwF7Ga29g3tAnJJMTyLdZkheBJARnDMCrdmiHRtT7QR5AQvGd7wmn3xYArKuaaPZNHqGvimYyM",
  "key15": "2RnbYiVJSvW2hQYWrYzu7zTmWFsPnt4VJGY21rCzXzwoZCjYmNQCBYRvD6M8NTrJrJ1yb1RJpWmE3SPTvi4Xf6zp",
  "key16": "3dRx3bhY6duY5x26DPTRU5HSwYLuV6wpYUz5nRpBAxVeuWwTmfiPoVbiLvMnos4zK3Z9g8hFxHgrCEnwCMmfHM4P",
  "key17": "5itZEbU6ngorjtYNnAuN5k6Wc9othA2Mw9t2EJACkRdRviyc47Sk1r4M9ar7a1EiHnFxQkrZ1H9bjftozeXYhtZX",
  "key18": "A3nDTjV62UQoXxsbVG3DTtwcMCMPaWKrrvPw4g85KieK5FzCZ4GbBJSoLeFLByfwsscTVziD5CCWqRkV9144vVh",
  "key19": "Tr7ZfBuZxydbPRdUEonC4cPx3AFfAxTQHhL4ZDJyC5Ea5XvRhEjZS64A7XHbJviJoceVuQ4WQDkmuWLCeUEzYvM",
  "key20": "2Aj577andzsA3bBi7jurhyEfcx2qcGg8Q8E76ivTYatAYzBdyqJEvTWdV9k7o9Taazrkrv2RKMVzcUwQ6JtuLZSw",
  "key21": "5qnaDWQMA3ujS2SJH3R3s8hsvDyerAYYW1boCsq29dAX3G7iwEbeqcJod2uQh1EDC56J7QoWDh3idCUAU8avAeMh",
  "key22": "3LrD2jKYNkhoR7BVhFaLHwDKExAVxkcemAfE2ZvZBSQv3N5GqfC8e7JWXzZkZx2gNSWnGRJfvi6aXptx3neUmcrk",
  "key23": "3f45euwxothi3ZjYhSyjeWyyqmVu2JADSK1akehiEkcgJBQBDZg98aJYsizJr51mqfKNpdeRtCkHsMGCrxK2Jh7R",
  "key24": "3Qe12uu7mKWBZZkRKpH2MENGsuWxE3PFJM4oNmN7GA2bt3X9voBcaqKPk5K4WTBZUT6kXWAhCiWbF6GbwLVUKokU",
  "key25": "2CmGGKg4vXyxjqnSjTi9X95Fd9KPMFdyAkgeLVTmzZ7F7Kmoy9RZtd8UJQjqD4tWYpEQDrHJ3G6W4KgRCo6aNsgK",
  "key26": "2ywnqRszrBQkoUGsGHbq1zygi3RdnHdWUZTvyET1eFfeageFkAQnK26oeFyhjYckFYPR1wGNrumNDxmWkngKzDbt",
  "key27": "3ZevMRksSk543LUJVtxsaeiGtcdU3LS9A9br55VtFMZeyyRCxVa8wQsaVaHc3gGL9ZEcS8ucMAi7xRcrSxRNq6wt",
  "key28": "3dWT6CkqoKjKcJ5HHfouv3gJ1SrLQwLEGkANntmmoLZ4dewMH1iCDcSdMhbdH87bZqcUBnADs1WdGUmWXixtXsvg",
  "key29": "xcZxSoW684Tg7iYbQJeXU6ZqZ8ufetZbqbDMfuUfNsXN4S6EwHJ1N3qcVxixy74bhXMRfgsYJxvM2xyGrdNt7Mf",
  "key30": "4SYZa6soyfJkNdxub73KGWRncCbz26MqiBMYy3Xc6r7jzjcJbV44JbT9M6G5Xhp7pj2rbC5j4jhPsc97jYbARLAe",
  "key31": "a6Lw9UuLtNwXtbxXo45cDZrobXioxFLW3p6eCGgwQ2CaNKiw5HPJRqrHc4wHyvXPVBn3ALWvhChEQxquyXTJrP9",
  "key32": "3DqbD4H8gwEVJugAPoD712GEhan6jjCcVKh1KyrbcpwbsteQHAMHvGY4QB3BNKMNY4BCS6ecWVxce6sdDjaTgmZE",
  "key33": "6oi7rgda5WiaNUcDUzphwKy8kg32eFm1nmQHTPWb8TSnpb2VCdCfXZGan2VPnGKTVjv85M3s7REK43QUUCd8GaF"
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
