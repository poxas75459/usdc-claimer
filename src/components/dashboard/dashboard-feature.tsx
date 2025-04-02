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
    "pcM6V6cUoya6sHRGAcqEqbzg5idysDW3DubweQa7AJpBnbuviYKnnw6iqYcPQjaMVw6XqdifQsngnEACj2bT3Yn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aZuTYsnA8g1eXrp3rgkNza1q5KcK8FMZo1L1vWkruAHJABTcS9C3YVbcefGex2knW1BT5AaVdNUoENM2nauJjPm",
  "key1": "RKDKEdvA4NZytJoQaoFC9FoZAPcNuttMT3CXAYSstmKu1yHp4exJZp3c3oR2AsNWL4qUXqpky7RGLeyCJQAP2Gd",
  "key2": "5xufmEWKdVfhrpxgokH8NBWB9deD69RjKMEoVM1QzQArv2Cayv6BAxA6zsiFPRKCwPZtrz1GimC1YdY254WcBH74",
  "key3": "3rkuNoF7t9Qt3Y7o2xaiP2Nbh8KHX7fwu2jr4Q9eNHMFA7Me1i9rRm7sKUt9cJizDU2g4MzJnFE6K5o36FrdmE5X",
  "key4": "3VpaL68vf2eM2Hwn16KcNA8w6d57H2neVhA6rzKCUChwuKefr9yhqEBufxP76WovGS8xicfX5bJ77rgWotw1dXLp",
  "key5": "yKs45vF9KvMJZmbMJWBKG16Wnm2W8sH5hdeCmz8vEt9pvaER3kttKsvBSWAyB7Lym4jQmoNgpcPZA6r4DU1qNF5",
  "key6": "3wpG3PPurSHhyanVDS6dcoqP9BRf5zqHHFJRXW6caGG6Z75qPRnbL4mWgvV937N5uQ2jt3MwgFEkFgp3UVGNv3Dh",
  "key7": "5p2CrAQk7bripsfz66SypCSyqAgimtbuTyDUTMhpG3UsoaUrHevzKDzEivpGffYaLhUj92D7Rt4eqa51fMRVKr4D",
  "key8": "3rxvaXaAovhgWRJ5t1u4Us2LbbG2V8jpNj48gbrvwNruGJFUPBjLNG9SoRMaNGYVLkbZa6wHNZc1HHpVWYamyod2",
  "key9": "XcTo11mTk72TVvJgQpUVDVtvF4ZLdtQEXPWGvh1pctdTktw35B6obCsJCp8yQDTgYx8JfeV1S9FkjsALLKqUMWQ",
  "key10": "PmJQYS7BPhVkdFTphryFtXcKtrmYHg2YTEVtXQHPWnoDX8mcA2UeYNTqbSezLWjHM3tjT5PLGchBDJsHccEiLw3",
  "key11": "3mSLoTHPwqyWWiWGUtnmKtA3DDWqPx66BTNVkPNx1nivFrsMrujLRVpXr6wTWoFpmXHoEgkpfRySB4nsJWsLGGk5",
  "key12": "41b3ckBW7QzoWx3JW3oRSuE89ochu1TrqUk5tCBe31RQMKW5n1tJGPAu925TWfXvRfQdoV2Z3cJn4xkCUELuw3Pj",
  "key13": "3yd3iaHXi7DkqprSL7AQvrgkWpH4EhWwaxh5P8fpTJYcVxW7kRvr91hwVexSujVgPQvgU9pgjRbH3AgSdejhDZry",
  "key14": "5VynqRCGoyv9JpSu4VvsTK95J6EKYxEQ32Z4V4xBbRaLkPuGJ289Hqkpgv8K9HLqzSsox6NRv2ZYD5sXPvXXPxkt",
  "key15": "zVV9HCARYLpVEVhyB7bo2Q1AyZWSbjhFHhmXpETpFMYrs1JYdoLtpQqUFBUSeNu9624shafytD1wS2inGg5rDjz",
  "key16": "3s2ze7LSVLyGopsdkhgjoEJ2Kd42k89QvouqpYFGxt14sD3umWTGRPXNzFU7jYant417k998jH1cKsSAFz2rJ5Yg",
  "key17": "4fU1eAREnkPj1UJY9E2CQLQD4HNDqbjwmDeFMsR5XD9J1tUHeq1vdR12jUxJGyPgqvPZrfn8GSPvzJgmF1ohXBND",
  "key18": "5gZru4LnHTYncbD5aonD8PDyv82bB1ifX2zdbP2w5qoE5j7qotsQvTdWxHnKJq7xyN83xSb8pLkT3Hk4CvqxEkLj",
  "key19": "63yRXy8qXCDJvoban8Hu8rkrpiHTfuevtbANDoiuaxehkZWqFMgMni15rsd6oxTXCem7cyYcWE4umboHKfWqY75Z",
  "key20": "TtP6SeE1ykBW8d5txvK5YG6G8zqUByamYmi8qThWSStMEtJPywe5QUp9ZnCt29EF3B4vPRTu6kWLinGqGKZXKBp",
  "key21": "25iA8N1e4D7dXPQPFD6M39iVMxKznYgjXGxiTc3U9jaRSfVjbpfqvU1QtXca3L1uATR7MkKowrLk4uVU24FHcnSA",
  "key22": "2B6mvAfVM44E3w43kzhWzb7bVWicdieHNX9YukDZvMMiy2mi1E6Q9Pvwb1gFEci7RZLPmeV3riCxrChoVNUzB4t1",
  "key23": "4Nu6hpBd1RK7znGouBmEaBmD1TGmNBVWWqjdQu9zPXrhtbaAciH4GzjAmdgEou7m32mkkgF32yYLgUyTtLWnUnbV",
  "key24": "2SjRmnwx3s1sWX2GuKQcz2tG5qC4WmMXYcuf4mfqPMNGo8N95gLvii3jDevSuVAU1AUxTWfAq1qXr5Qd8KXgGoTQ",
  "key25": "5LouReRQeQF71vkggVT24Ns9P6pY7U3cfksPEUZKwYrGiZCip8zmvLvqWbYUv4K6zVD4Erc9SsKbKLCnfS8b6g4o",
  "key26": "4nKg3mMVHxBGRBrQFk9pSGrwmpGamUFDDHjjNgy5XQuXV7wvue3vKL5exbdFYVd2YA4j2NBPyKdMWWerndR9S7oS",
  "key27": "37dwpvTh4L2hRQ1vCiq3ge7paQ8HoXefHzPwsF9xXP9nLaNXMLjCWc1SytLX34NuX8SJjX2MrT5e7ZoLVohHnZCY",
  "key28": "3UamNzZftxqFxM1LRyw1vnMejjxY5CZXqjN9KkEHo6EoaMxdnbaPT7dxqCSnM9UcCNV9a5iJUaCPLWrThPv1YbGQ",
  "key29": "4FwACP3v1jvz9a6jNcsEw5gbd9fmeqfuTgvgKY6tDsTnYoMwaazrUBv6JHBvYC2kMu1A3avqeKeGeB13ytjWK6Xq",
  "key30": "2UziN3HDHuWzyAcdn1mRULxFUbTUGneAn8KEWQKLqLGZqaGug6NJ7VKmE64Z5Cd11uKsGCX1bKoLDH1nWPLuBKuj",
  "key31": "2c4Fy2Wenb6WkTe5nc2MbCYXipE3LvKCJ1CXV5fiHrcL98KdUsSUhJYoHvbd88ZMY1LKFADPPbs5nP5mstvu2eno",
  "key32": "4bMBdgToYwSgWo17acFXg8PcPMnzhw8KKSfLExzzLsUcubN2kD2UWmxJZ5MwFvfLzZEDgjfUVv39LzT13BmWrvbb",
  "key33": "4MwBy1AGmsdcs6a5cf8kJN4WwcpXp8pzEZAfHe9hQ7EuSkdXa3cvVuwup64kwguqM18YCKGUNyEeSwtiVXFkUA6g",
  "key34": "XXqJsvsgNPE2BDG7Y59w6LqToGCxAEZvf8mMBd58h5tS8Js4oZZQBv1fgad3mShJz1bkccriNj3egAzZZLm8jKW",
  "key35": "46afNFaWHGFTDukXpnevg5jYRZPm2AsJKVr8EYxZikzu5MHq6sNwUdyAmS6iQFdKHgQyRstKiVNJu7W7MfAT3jzY",
  "key36": "5XG8Y8C4LpTQNYWcEdsSyC4Ce1oMtD1TX7SzgkuxykHSaRi1pep9DtW9r1hWJ4E8jZvqiMdCPGT6jqqNjTxtYcz4",
  "key37": "2eEwCDPFofiKDiscdVXD9CHNLnbCu1oaNopir5pggNivPmEoXrF25uuoZthzsgL1RiLzZuCUjb8NZLJBm2b5yyQy",
  "key38": "3XxfgWp58ZCuVD8tvVt4YHzY1bNeMNwiNmrvdc4JwC1FpHSwePWLRYLwVQuLBzUe38ijQ5RW428w7tPBX77PcqzM",
  "key39": "5wPktkkHm5on6qhzx4sjHtwNAZiyxataWZii36hWjZ5pSd57DHSH3izGdxgLx9TFhA9HniyYCe9zJieQf73kU1CX",
  "key40": "eTLSwASqEUhCNcJsw2xUCdPQsM5erzgukw6pgPgpf6QnwwSgvQNLmEwunzf7TMFFRPGr7vjgxFCHf4Rv4j4uSdM",
  "key41": "2oas9e1DGipVGSRXC7hWbA4d3qPLFvCrVWADqhKU12dii2n6zduZ2Gdu7y2kfBiEEZ5qe3cd2KPFAP5ELgsPnhvL"
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
