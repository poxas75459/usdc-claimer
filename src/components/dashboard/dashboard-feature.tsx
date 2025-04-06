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
    "5CESct3RLnFwbapdH65fP6Yo5tryhFvsSrevs1hNq4VW9qz5bDAvySCnViPGgZJZ8qv3e1rUwQq5ZkT7PsmUwCWn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k8hEsF4ruwPixLq1EDzb3ATg6V1aweTqEfUekz5pVNJWjNckyy15vdS6ZPkMJeptdYZyyhFbm1ZLn2fvJZ8zTzv",
  "key1": "2GMUA5bX6zvfKed2SoTAjsEtGj5HBD7x3XEaK5S9dwW4d6z2eoC9jL1ynm7uFzfGW3qPaPhJPLZZaQpS2Hr4RNtT",
  "key2": "9QEueNjoMhd2s6fsPzsjh43yijBYc7dW7Fu2YerBbNiKU2fTcUhdCV8U9PC1GRxTeCaYzgcRJWoxR8p1c8X9jDw",
  "key3": "4YyMDRpPAWSs88sa4NAcYT5Fwr7rD64PRwtcbFHWfKMHGFmnzRkmBEJ8YVvGwdAtawDjjavuz5gSeK9yJ6SMmg6v",
  "key4": "3v2SmX5JCe7ECNZ4Y6Viw6S3xDUgX9Cd15qMcv7kNkYNprTZnDq7RjMY7CmRJGU39dCHXaSRBuWWjbdpmnYhkufr",
  "key5": "4dmXbCvxwFHJbxJ4sx3QKswV8h1nWANss23u7bDpwR2vDZribWSgPRkkBGMye3urWu6KBxcLk6SWJei7bkCcKovZ",
  "key6": "2cXFmtGrJfvNjpSuG1EU7ymqasrk94WespGYqbaBbyomno7uf7LBd1rs6XTa8SAnrUmK3HaorSAVnBih4dwmEKCM",
  "key7": "3Wy57avQNUbGtpsJusFaJepm8uD3cD23f4rMgPGHchcrEpeQKNJV7F4b3i3SFzPnZRGkuCjUHFDnCSdjXwGGUAf2",
  "key8": "3tji7bYRg2Qi7m4KZVVWVWig2WZkTeXqz92rqRReNY5J6Gqk42GQbj1bxmgvfTTENECdpAvNAeiUQaQeY2zNFC5j",
  "key9": "2Qe5kiz5j4JLkhwAhjMcEhXcPtLWdNhNaMC4CDSndnC7xUBwg1DHMDtSc4YH3LGh2bpGC9mjKjaHDgnno5QzoxJA",
  "key10": "4Rh9diYZSPFyXB3VtTUQ7QJc3DR3FaLgXL6tjgMK6np9YR1KFaAAyqnnPJ5cxSBFi5NfyX15Gm7J371msoNT7u4y",
  "key11": "2pahn28TJktWqn2k3Ys6X7pgvPgp3JeRd47vR7d8mJ3PSnGNZ9Y3jY14ksc4pBUffnSZ3gkDwr9htRXFqoLU2MND",
  "key12": "4mn67oNkiGswrN9mwwbWtUo8dvSKembfHFrw3fdimeyZoKTa6CQPGg5DjmwJcHReco1mmoG2vJFUuyYvbcwZfNrC",
  "key13": "5veKfgATc1k6LqrbaE4tqrzhW7Uu5Ku2KRhnRG4ZzNifWurEbNZe5h41YbfJnbdhHJupPFSFRHoYQuPSPogzekwD",
  "key14": "3mCaZ1EjEtXRkUc9gnfb1693n2tNUbxy4p24YYT67VqRVg1fvuCcXhMXvAo7YuBqaT9CN2k7RsrmtBhc1XkGGia2",
  "key15": "3QaGK9kKG68JBidjYwvryCjCchY7U5bQceURPMjvxHKwkkkiPC8i9rYVB5jzoWndjyRAnu4FgefDfAEpwNxeBWtA",
  "key16": "mq1pmDdGrGpVZHCB4JGjRJgaNkLMpvjVRZzvQtLooPbwmXQSs3sEbpNGX7nVgHPEYdL5iTMM5mvnwBCB4Rutj1Q",
  "key17": "4uSoohL9epU3w7L4C6dPdAT4wq1g77GKZzeWGf7biqgUnPeYTR15qLgWK7PHPWxSogacVHw62faxZMm3ZpVt7mqe",
  "key18": "5YoTTMwfm4Ck9ZBXPzwjWgStzEqqjfCYQdAxZsA4BqnSVa6bSYZ6jPTwTcWwf3pHwhds611CpVj1ZcRgAk48xhBV",
  "key19": "3bbv9kPKkBkrEPLWmLYg47wEHAocZ3ZzWsMaA1UnDNqbdR7VpKmDiqE9QSNJQ5KK2Uooz1RsNcAeMzozAkgmJ3kk",
  "key20": "2RmRkZKuWUd59JBHYKCn2a8SeQoa8JfkDWGU1NeH7oZRoHUKpGtEe4i8BTzCsfyA3kEypkqmdbAcPByxuL5UyGFw",
  "key21": "3CJVRiE5CBSDVNXoahzpCwkQ2xYkC4oZY9WJ9WNjCarufdkqVKpjmb28Pdm8xQHj78okXvXptotskfaAu3ragb6",
  "key22": "3VHLeAcugW88K4sF9c8AREEQhMZVgxK1qP24uNttdyvL2zKgRpVzvJn5PhvfUBjZP4FSQagwz2aeEtaGBEd78VzQ",
  "key23": "5waN179MPCnHk16nN9LqZmxcEVAZH5gXY9iRJq6aGdPeLLRBWBUYUqab5GxJgYYDBLEo37CcadF3SR6QHPi3VEFx",
  "key24": "5HQc1puw3CP664z6VbxdRww3xR9pU9ZLeyLd6ub6SqtrpWsaL4ZgxEQeD5uvkh9QV3KQd7A79NxfZAQdqkDdBDi4",
  "key25": "3ey5mhxeua2fyKGkqomKujo1JL9taadQ4xe5S3gooKfvdJ8nrQfe6RS3X7RgSUcMCTLG2MtGLDx8BpDKrJu1Hy7U",
  "key26": "8eiVr1JAEPBcSCCjALfTeHwg2Q1Y4DhGiT8D8L9j8fLfP1B1NM3rH6NhMLwSLKcUmvSEr7kjZunMDe9JXob4kr2",
  "key27": "3T1AHG9oAgx61gnhJeLxg7ucGy8Qrm5xPCRJ39qvAVerEQDEsoj3fMC6ej7zC75oufmbXjwk6ryVU5VNEDf1D1eP",
  "key28": "4Z24jQt6VpvP2CoingZSDd447FCMrDDQgthqHnfhn7A4XuapSThVPdfhLdNxBLK3TK3FyV26xgHFUyaSQ7Lg56TD",
  "key29": "ne6SQNdSXBn3NRu8yuwHYmgLTWojSukY6sNMYGgt2Se23ykGbsWcSbPEz3uRxeJw8hRV6J7kdab6HpQRiPpCG9Q",
  "key30": "mfCXw5JCAH7DBSYbuKjQFhEcGDCGEobYb2kvbES3xyuxom2XNkDSfaSKYw5hkExoNGhzRAdTD6tyJxSEEiSnHR9",
  "key31": "3UB1Jyw67CnoQtCdYn2dAQx6YixF3rokpRn6hAUvnMkiWHDT9GGGiU9xyreWztmSpk4Si2WWm7awBid1XdNgt8zp",
  "key32": "5LhhGbytRKCtEoCATgoZXjbVHujWL8JUdUtXHAu4ip81SnLuDpv3gVseEC18FfY3gzHYa6YnaDHF8FLtd4rAhbZr",
  "key33": "2csckKSRVtJHgd3eUmjxYcT6GRRt8aDd46X7fnaoCDAN2Fkp9d6CEgNUHKyF1b4merQCwiNEso3nKbTqHhdjq8kE",
  "key34": "WemUgubgaGJNZuUZxqxNnxbptwknYBr7MehCz17e7JuXXJF19s6jjYgDYGx2DwAP85o5EfgLyKLyKHudAejH9P3",
  "key35": "5Kj7euXs6neGm3A5yRpb6eWHC9XPdbETS4D44o9i9TF9dsXsXzDjdaN4t9nWwyRpQv7nXTwXkDwNLPCKxJhcvJjt",
  "key36": "dxirNo8YKpLW5zaE4bpMey8fE52Hh2DYyUAZ4ZeeHumdumBDGbbwdVp9UxUXrqHJu2pX8utmnxiomewoLwD91ci",
  "key37": "Y1JYHWDcURJh5knavLbGDwo1ChoPGDgc5FeXVE2n7f812ctwueEW2vaNF1RkFFP3SSPbdAPT2mdZDT7qRKxBuB4",
  "key38": "cbZFqj9zUAWDuscBYJotNNnJecFG3MBZhfb1obYcszr78sYjW93RbRnAK1KrwJTYp4f2WGb211hgTqC8G5Lg4Hp",
  "key39": "5W76adSJXam3C7YEoDPUiyzRU1Jj2k6tMHs61zon5hEZiPaBrEZmRouMerMZ2H333MZqh2RmiTAHJtcrcH7tSUux",
  "key40": "5WrgUCZY2NAaM9domhAi58JhNYdMTzUqrDHPVwdMo3ScXUJEezzWn3WCvBk5QQM9gdR9jX6eeGbjCZZHf5cfbePh",
  "key41": "3YbZdpLBMpMmprRCxTgMk36sxw65Zq9nQpVJCY1FsKx9FrQ2Vpe9zWR1J1SEioEwv3pMzZpiAwJznmtSZTsp8Uoj",
  "key42": "5HyJdn3JFxPaWkazA8CxZ7RE2nukct9CiwA22yNLsMgEXmKmTuz2bNXMMq1sgJQiXvNdxPKH5GaRPai5XqnWPoyF",
  "key43": "sZGqczVNz7Yp4GA5ny3LkR4fdn3USkD3PD8YzKwsFDooza3Taij6Ngh92qC6ysWwGN7zoCBsk2dcd6WjkvstVbX",
  "key44": "4BaxUpqPtvfGMWnkzMLEPmCaMDKmyyBRndRDhUZNRqsGtBMEodfMjQXUWyR5PPirgJj22LDcNaDvN7qPCqjPF1vh",
  "key45": "3ixLFrwG9KFSkciDqNkJKi333EVTL6nkzgyMYS7AYCenMbKUkHtcc4TyvS9XMy3LH7M5zxshBzjMP4y4R6yecSDL",
  "key46": "23HpBizWK6VSQ6dvrULKw4dLxHSDvmtiK987TmVjgkthP2TfAVRddcN4vMxYKg8Eg5mDkWmZJfiDct926AeT2m9p",
  "key47": "23DY3NT7hbHCwehqTBiqnAy26XZamYexChXZGnt82wRudixuLoRMJZJha3Y7YV1vUR34X5AT8QFEKso4bu2gBqGC",
  "key48": "33tasxWTrb4fssgwJ28pehZhsaBVDEo5G3qMi5d9jRtexzg58adYDNXBosgffnEs41vSUnuGEWJLBuaW9SR6bUCP",
  "key49": "5Deip411FJzTnoWLqi4QHUXurFEqULCHSyo28mRyWnPAjvbAZSgh7oJFS9Jr7CBvayvvFf6xX6CPJ3Qngbj2Bru3"
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
