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
    "2YQtjTDukYUdewN16eLhYuwhdKEdnnEyfAc6JrWo2qrrnUY3iL8Hhwa7K2L2M1ShbT7N5JkLKm1q5RSuyUsrb3PQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eygAaG9C6LFY8XpeBBi7aixmbQiL9SDCVWFvdUSNkHGZYE6VYbwhh7JRzhSQc18CLjyjQgNaB4AM6hgDUZYLHzb",
  "key1": "62Q9S7pV2XXAeumAmhd4GzCWQRWZeiL22vtPvN1sz4NonxuKi4zTMuwHTuSZ9P9fqHnpa3mz9gmdMV3pNxHJr7e5",
  "key2": "5d4mu3ve5MmVXPjmKwux37MdQPTM2ijfbQcK35VgiGMF1NPE3YKWwTZ3hsStm3MXcSHLmg5TZxfdobV8JsnEqqSE",
  "key3": "4JpfnQ79t5t9J1cFxRb89XFFErFLuRr79QKuoFMXpNjECy8ihCzvi8d94q3N591FutZEqRwHKZMVU8N4TyXkNUEW",
  "key4": "5txmRmxyEZpxDd6m3HVuMR8KT7x5Cd8PmibwRaZsxfiwHMp5ABPVfNM3WGGDeeBiFnuXT4sCrTkamKrTUbPkq8Ao",
  "key5": "57xZV2QN8w51P6R4w6bYvXrbqMov2x6BpDJPetB1dXJ4uepjRbvJGpzyS4wvBcrSRVMugPFWojRTaoNHL3oMkMwj",
  "key6": "54dHvaMRuFk1cn1fLrCS5Bth4ctibBw8LbRHDkNKiiEMGsTH9pzTdWEW4w5E3vGLJtfVJ8ZarbWpqqWqApEVT8xU",
  "key7": "2T9Pf9nEV7jLopTmGERdW8gu2uxXGhhVUc5M9GYXrLLPXq17Lc36XNyzHUNnf7q5UXiH4jx1bioEvqCrXCtpquWt",
  "key8": "5Jy3yv6PKAnCo5atKodveDCLm3ZrmM6rwUr6Qg4K2hHZoutmg9JLTKQ4bN84rWy3DErYPiUu3uVauQxMLqqfCyg",
  "key9": "3vCBxTa5u9beujFQeLeEsaQNbh7gxiDxqEvLAtR8w3aDBwiWaa7n6J5tDjpgd2yeYZi6ESXTCpvuqZvPFL99ryUy",
  "key10": "28erKgdtebAvW9mohSK7GtnZpHaWph6K32ebhy3CmnXqM3gtKJB9jNm85CKH6WbSEmxMuTRdRykudKWYTguugkfH",
  "key11": "4Kd1aZqAj4w9rsBb4K6GXnUhw6S67jKXM2jm9R3ZhCyAYJoT2czPiM3TzLrwu7REpfpEP5xmFrtCW1qcfxGMjsd2",
  "key12": "4pfuV4y7kRXtGrMKgNBPvT5h1uvvnYZiYf4Qb9N5pFKKdJK3WR5tboWyntrEDjRatbefNpW4HsZTEF4Fh7Ta9fUB",
  "key13": "2AyLZATPrSbnGvfTRaPvjLgDHDXRJDWL8E4LuZ4CPy82Shwny4F5UfvB9XkErPsrsaqB3yjv2FdcUw7M6jQtP5VS",
  "key14": "3QjiGDBRMZXunwJx9oC2H4EwFrQC2izwGSViGDw6eyaduKmNW48RExfDdAvdpWSShFuAahnhKTutAMcTF3nKPp9P",
  "key15": "3jjA9vr7iuSWGCJnGyemcR34YSsyRaJmu3Y47WkanyFHvG8qzxWXiaSCUybXQ8eBE7uhfhyrduuzpLFQwadVhFiU",
  "key16": "2AVtu37GHzudwSkn7Wyh4KbAu6UgKhvnwEtpLFMMpMiR76XKTdgw14vuX7jq579o4kckbTCGmQPW7fnRfyCmR7B",
  "key17": "F8aavK9tg5AnkNNP9WRYLiQ8VH4MMS4dWEVBFb5CTKLoB7aQEyrYdJZ2BLtbqfjzcLGpJnC61qjQJwMwnF7f8Mk",
  "key18": "2jw8XQ4syUQQzX8MqoJXM6teRHjL1uVNwebweKiKEg2k11em9PC7EdD8fe7HXezQNUcpsbLAt7caynim9KevTnpb",
  "key19": "3A8E7upqEqhPe14v4gcM68LygcR5EXLU49pd8kYHBx1FaCKqYQ9ZKuBgFe1QyRKs93FmvxsSFRVihzk2W52TcqCv",
  "key20": "5AqDxU6MKPGmtLTKmoyWYc2ncMcCAKWr4gD7aB7cQhvV4ALTGtF5iMVwLf7V7H35z2SuY8Lt1aYPKZFLofxDMzkA",
  "key21": "2y8ECoV33fnEzoLeQccH9FbautKQzVUV2cUGwyJV4mcFsJnTfgi6QHVj6EZPhjmno7JB6C681myvGCBPoDsV7qyS",
  "key22": "2jyoyaR5uYjjB8oWtNETU8YeR83DkXEVYWCRqf9oC2in64ZmdPvH5E8AmQyrSt7uNX5RgfFkuGZkWQGLSmh3pJ3m",
  "key23": "2dV6jkMEUF5oLp5rypKk1KVrCoZGr5sbcKt1aqVeYfnZVkAcnJm9TcQL32xE8e6mCdEUQaUz89FH5cyJtG54eyHe",
  "key24": "imBz3EhQWeigWVFxAghPxDZDU4x4aasdvfqey9ncMzRx46AdD8jp86Pr2UrQEupL694WS1swR9JjYY35Y2pVpRz",
  "key25": "27o8P6ML69ajBsg8njqrc8Ym3p5pDD62MG1e9BbRnofJjeVqGUqy34hNzZoGj2pwhKwSojgAuXsuVyQTGPNrcdrT",
  "key26": "2686VXFqVSZZczP6L8UAPFVdGxWRnoyrPw86iMKq2T1czavCL37qXXySy3U2x9cmfUgPm7VFD58TEix2tH9AvAND",
  "key27": "4wC29haHYo1gz7hQ6Q3oCXUH91X7P9s2DrSV4JtayvSVLw76ShT9ik925pAMUNi6nKtbGMB4GGq9WKrGcZXBsLeG",
  "key28": "w8ZjekTdwjPBePYcYBq1khyVE79KgYnegrztPNvgbCGk9s5D75oNhCTVUrBQyf9n9nJwVBwdxGM1z7CafKHHKYR",
  "key29": "4ufPp5pWsfb1r2qbGVUhNV5p1WoVjAyrNBG8kiZahuNgabnS2kd8VFES71nA7gSwMGnmmAqAsZZ6YMx91MroBq3j",
  "key30": "4JtWCzWFeZyjRsf457CXJdZzmrHcrY9rp7D3nFkij1p234dj2k32XC1QkuhSCradC6oGTJkGJ2YD1WTgLQn2UhCH",
  "key31": "28GouaqYkyMKX9g4CQzAKyzSZhQMQfqfsFmCkjz6eGYHEABAEe5hDrFcBKJAJ42s2bNX4eyivaGghcjHxphTNQiP",
  "key32": "5QyFiQXtxpRLhAF65FJq5RMqZQGuTNCZELZbvgBpnKr8h7k2rdsxgWP8WiNknEh3xybw57KhPRLTYZfEjzqUqKw1",
  "key33": "53bCAicDDXmPFbxkZetnzvrbYWBudDvXsar9idMRNkBZPgVqPWrYgFRs4gCwgUuzgWPd8ykHfCpZcXmxBJkYBxJz",
  "key34": "J4jeYdZYKjEiUhKrQZxhqKCDUEjxKRkkUzaWD9AKq1bShAAgRfWbFFgc63C7sxLxNdXZKSAZ1Kur72ippzMB2d3",
  "key35": "37VV1Ni36A7abx9Kr8uPc1odSzJ1hV7F3aQjo1NqDLbxuW8kxPCEpAAQcQSd1UeNFErDQm4RwQ96ZDS3Kn9GSKZU",
  "key36": "2TwFnMcoDTytavZ9FDngtrhQdNSFEJ5HNmpi2oczyX7ppWdFunRdYsMZAfahAJUibQJXF3X3sXthuqLcSb8rTH4S",
  "key37": "45PFT1yQqtDaupd4iwj9LsAaqjvUr7PQBj4aE6soxZBduPi7b3AduFM7duYZRRLoMWBJiBLNmJG8ymDkxRuxbBTK",
  "key38": "2zKCYxEWP9KRE57ZsJuFkeFLNuDNfJ46Qrxq4CvtiZ8VXqmZNt47qmacZ28hvXFiWEKpJ38bhpXoDLXE8JGRZC6U",
  "key39": "33XzK8xeNcppkxUHMkDaMzJTct9Za7sPz2CtiPZhq1nZAc7dMk84Ynz3rkvcdTXP7i38K1yUBq5jy9VA4fpHgTgX",
  "key40": "s3b2sQup6tamCtRXr4a6RZvFPwRp9Ajv9bd65j7Bdz6vfvcdmpyvX8CZoJaPmF8dfA56USGdhHT5Q3f9Vay9SjW",
  "key41": "H7c6vWVDZXNvRgwcUS4TEV3Dv7xE3jd2M2RySyoNYbrUsTynZnMmUdMSEhsVLMGMp5hZryRH3LULe6AkZ13Cekc",
  "key42": "3AWgy8oZsD9EFGXp2yDzoi1hTiyJHJg9uXyybwpgzCJPgFE5ZgHbLzG3oH7uoo1vH1f4NRqVtYqUxzw157X5eLff",
  "key43": "5CJkRi8QmzJJZvy5KFVZzBtdU2GDWAnw8aBDJ4DwMzYv7WbUFtHJAj3HTnEu4tWPndi3cgUyjAnCqnzrAU5tix64",
  "key44": "4UfuGSvVoiewSiLLX529EUtvhAVBkZvNs6ftRdvxMGT6XjLWboTefRSy1CEqJCdGSrskjDSzbQvc11BEZkK8N9oF",
  "key45": "5KHdMqqpLm6UTNdCtpJdXB4sMh1g4F8dffc3Eb8GpHZJqrShbQuEwZjkFZGiUreeVyJRxJkC59ZZEQbShiNU2xPG",
  "key46": "4zjJMp2ZYHgVybJ3keMsAfY1poVdSx1Cv8b7vAv8ZHFqKZhxbdiBUZQVbW51cg8xioowGugFz9owkctMGQipjFdT",
  "key47": "g7TL6TUMYVhUmrtdwpW5Y2KoDHR2KTXqut7a8AxQNNkE98ZUYeFXc7VyhGiupumnukuHRtJ6D2ai7nxDjKbATnz"
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
