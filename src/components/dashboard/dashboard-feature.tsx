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
    "33o5yeCmka3HzUUaAbc7QdAN79Z8CTxzRwcvbwaSxsASdfHcVuSazu7JMfRjekn6R3hmXhKq2HxJ93yc8C7i21uS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23Ef42R4EGZr3TBQzzJgyN16H6UEuSnvrwvSVvnwrNv2RUMeWqzxSbjNgpk2pMTSF2cKUk2SJyD54ecxnkWPSemB",
  "key1": "3wnUATXK95NP3mGW6VZGsKfWN4uMeJqbRx3gyitTLSrSyLyBufAYx2z47RmSVjjcmgnYZJHbY9UkevGfFiNjcfBQ",
  "key2": "2n6MLqHQkEPLGWPRiz2hejSP4oLUkhqRmzdSy5xgvRmc3MhWLh6dyCoMXJr8t1sXPSSne6BnsZ8oYrs7i9PNtSXP",
  "key3": "3y9DWMSzid4kDJaKH6nLpQY7StXEyFbztf6XjvhDEoZBhHWktBKx8oMArm4pEjX8HiFmkf5ave2MgMMThjYJ7UeK",
  "key4": "35h4snfLnuDLqehBAzGqcpxaWGJ6JF5PLnQx434jBqM6SHKUqVDpTswnHM55dkoXaDbCMVg5FAeNoqbuncHihpg3",
  "key5": "4DKMTmn5HtWZh3q33vCvMntytDyfmMavaseADPBxGcwzitfELeWiWbFswvwSjJnuJMJuZWPVvNSY23eSqrch11Eo",
  "key6": "3NtXj5vx4AnQyx5Aw9VSkY5LoGNv5dCdt7CbrJo6Q8sCMSieGEs4UNEfunTVvMfBoQt2KftWjstY3RaBhiwQUvyY",
  "key7": "4EVARXXghAZPXci7cs4Jr8QGFggLpxjgy6vqzssrkxvVSqNZSvPwKmKHRnuKYvoZM3S1Ec9XtBn4LiSfPG1pfSqX",
  "key8": "PdkBUo5FKnhQXxJGwExWFMQm1WnWYp3HhQ8uPBEyDgfWLYcXPzcS4M9vVdm7Z6svZ3VMBFNZCJuySxbSKLyoWdw",
  "key9": "5w8mMzd7hGMo7kNDJNrDJ3qXu4TJFVThMHsWG8YFcXseSweG7xqN7N3BesfyNCNwuXZqgmrasWceAehpfAqD86CC",
  "key10": "2dK39RYWDk3R4JWCFM1zrtowgvsE56ZFSjbBghnWVGsepmtWHf3fHKwovTyfBTjj2f9ZqA2tKy4WXaHk4pEDpGN8",
  "key11": "2h6RbtNC8fcGRVpbbGXZ8SvKZG2ufdekuhAWKM23EANTNroEm63xfqLE2CAdTkMVXzfBTQFp61RnPJcdaFXrs6ZR",
  "key12": "3SLLTBzB8vBxrvYygdnWB2k86vWCJcaRuEVWwz2bJVZu8Cgnd5Z3eb8hi2VUF3mPURW2PUwudQK4guNuivMPQswr",
  "key13": "5fhLXLDRxH9bCMabjPkkfAohCvddz9yNPrwt777y7RZ8a2JhJPn72U1wYm33WVWqai3VE643FAhucHibiHioZeiY",
  "key14": "3NvR96qU6ivVsz6FLqDXWAWp65n57scf8T5u6ZbzHjqHivymWgUYCadi7Ldhiz51BzfuJiRKXG53YSCgNAmZaro7",
  "key15": "3TiFjxGptqca8Z4bZjwXmemwKYo3ZLnaaevcv8CQH3J6msDNr4ZVmvNZdfy9kuKx1vE4wS5V8w4thqoN3KCXhryA",
  "key16": "iy3ouGrooYNZdSTBryYuANuowLR9cN9pZHX8AQAgqvgwFtHZVYjkHKjXFNABgrpgGbbrVX7dkXkyborX8Wbyobm",
  "key17": "2rDguvXNwsnfNooQhb6y4mP8iA8X4EAho8vFnpHxCnSc42qW7iziVJB9rA9kZfR8CCqUx4Q6kMeuZBDrpYT5fHSR",
  "key18": "26FrjNr5XaXfb82zox4TYykBhiRndcpCp9oCFENJRBSz47j71qvsYop1YkmCDQbjKsHzZsjG568fcHDonzsP2iZ6",
  "key19": "2jutQBqKpTm5QAi8pCMN4QHCKErP7mDn7N2fw9n5Bo98ZyrJWtpE5THDKereEnx494opu8sq8BfuePhJGWDXTM7v",
  "key20": "5JsgwtLKHHqZbySoixDuiSuw2Kz6tCzQ2kCBFhmpQ8GNJQbM22jLefUmbhM8MZMitnAjBRtzcV6tJdRMLjRe7m27",
  "key21": "5gtPqD4nyzDb9vby8dnLSkim7bfx1oUjdPSvPa551Fo5d6jbEwapZ6zmFhC6G5By8UjK8MbNNSoZszqvCFaV2rLc",
  "key22": "3ShqcNBKNkgVE5q11x7d8o6wKpPsPqth1ruo6v3JnAjAxNLtWwPDEiLqer7qZBZosh8QU9QmmHP8yEBfhvuLfrzS",
  "key23": "35x8gkDvPSvKPjHG54cZHVLsunUj3H8xYT7UaMFBGcvrxaMR3zByE6jNiutzwvqsYujP4vN1qYkUkACfWQPipuHB",
  "key24": "2EqM5HDexnhg9yWcNTQoixqb4jgCVHdA6bq44VVAgftnD7sCtjc6gVd6Y3avgyTtUVZRFRDwrT7gfUBzxY6NRP6y",
  "key25": "sRYGDR7Shcfx3t9xR9QZnTtZvJjrkHU52WmUYYqrEAkCMmSBLvZ9DvSeq8K64W7X8SRAAN4gb8uZ2axiMuqiAzd",
  "key26": "XbQpcerRm7rfvUTidFqbUnPzAiXp4kBPQynGtXcz5DVeCRqPyGytgXNZh1XkQYH6fXswFCJ6qZUB93BjCFEyxkw",
  "key27": "3v8Z3L6Mz2FDgGmCEn2kzd3Y3xZegYi7T9ZCzcAubQV8kEN6uyXowL7mjvVizPxRDASLifLuGscMKPA1BpvTXZmy",
  "key28": "3c1B5VNmPdh3jzebnKo5226jsJukCsLVRQhdxtDaAqtDa6a7n7RX1owGDYTfnsWs43kyshhSqwcijVqMZUtcdtvi",
  "key29": "56GLv2ftYUBfYQWQMGJWdM1UuApPqAC3zY2KL2VamgY52eyfnwsM8X5LsmXrpAhiVyQwLRhou4moSp2uQ37J4YP9",
  "key30": "3svFSt99KYfCXyyp37BwsQ1onHVLg99sj5PhdPVNxRYNvrS7z7tQozRBzVewimPQVDnebCNm64sZTbyHqCpDgoWb",
  "key31": "McUT5dTSRWV46NTjHnYrb29PaGp1BGrCG3Knxw3RPJG7qcm5wiy7RMAKVZ9AsLXf5WDoP7ACvE6QCTv9vzVdhDm"
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
