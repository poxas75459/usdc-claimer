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
    "4k1oyT2FoDRdRnTfT31xjCpswcqNCwSD7tH4MSEFDM2sbSqhXxDU1jETmWBzbxmWaQycvSWvPHmyf8PM3TGLfXUR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5734FhaS1EfctRyUSiBZZLt3C5pt3Wet93yzdeah86LPwZRhSetowzK2BPiwWtr8yW6hi5ACbya9RJsjvqtQ48Qr",
  "key1": "3UGnP9QYRQwvErQbSwikNr2sr2FixStGeC2CTf7YMNXHu8T9qFoqSS4vcc7kePmRLWhfKfCKqpMTMSk55iVF9cg5",
  "key2": "6HR3ttu4pSaXxDeZDzZVVbkqBR3cGxJBqKDvFba5GBD33Uj89rzEEYHrw8f2J2VkhsnkBadqpJYwGHGAMPySiPe",
  "key3": "pu3FGWm9oBkuCnWM2ZP2LFBtY4Dc4VT1q38WshDuSCqrKnyozNzgpVKQewqYWphHiJY2KKB3ktRbTHnFq1Gk49b",
  "key4": "CjzKHDjFw1agwFUSWaGMA1MJS8keSLszTorrejD6Nx8E3jpvcux6Si56RVJPx7z2qVJ8xXcGFPY9n23n52MN21G",
  "key5": "JJf25NrH7thAGRC512VNerbLxmFtD2uMtEjN41TDcdKVge1ewWchLBEyMWN8QJdwAzF5YXkSWGNrXaGfA9eNRYj",
  "key6": "64nUsFDsU899c1qATRM5bvZkBK11ZvdTEFJjkHxNa8YTWdvqBAtpK36iZZdVEFKySiPVufmKCSMG6Qorb8XP7nTY",
  "key7": "2LfSoWdAJwsD8xtd1wXumHbj2mUKBFDWGvNzpET23ovmoCFDnpeCK69yjn3gh7SmuUa6m3N2y2NM3go1n1A4RVM4",
  "key8": "2VfrhuC9txStAuRjkNLkutVXpsJKKmYZUGRdEKK3e2Gyc8XLbrK3TeSTxJe66VzqPhiUcvhUjeM9e4QPxDc6Hd6c",
  "key9": "JvDUPdN1FYC4WswcR8ET8bWs6rjWvAoQLo6whcXscgAD2ZBmDJk8epfNmy3bphVKT8mWq4vCdUwut7pgggMuLnh",
  "key10": "32u2eAiaYw5pYXZuPK65vySMoGtHF5tdMtKaH4Bmr4c58KwXEJtbG5hPLzxpgGqtyqTccGM3cMCssE2fLyjRosMU",
  "key11": "3FH9RqZBB2rbqnFGxK854esSei6dYNHtWkGhmYGrVKKRb8QK7pUiTx2wjmJJt9arJS3zHRNEv1NZG9aB5DLdepJF",
  "key12": "34zv6kVYC3TDeJ2ptjMdSKvK8BJC9bB2sBGkutSRGjcY89mHJfqVNJfb4TDsht2q19G8iKF5eKYNiwJVEvgoCBHq",
  "key13": "4KJL6mwKd4txcUvzmnnrYLMUK76LUW8w8HFoHKY63kQof7NtrZzN2TAp9BnB4US62wXJRXyTHANy2RSuUBjwfXMo",
  "key14": "98qPVX8NoZ5RyH3VguQRQjzgRWH78gPXJHPN61kyZwiM1HM2GydzTQLzoKPXXuWGJrtHcXaU7GkPUWzfYUVu3WM",
  "key15": "53cHUmMxvo8F8ZfhgcEu5cmWSNXXu4g8psuR4tNWJGS8iLRjc9ji9b4QykEzJakjizENfzTLgsHp8x4Nez9B5DqR",
  "key16": "5x2Ah4k4QAkmF2dbYCQusV5T8QZXuHzf99uudqGmvgUUSmFzb4YsscQQsXZEpeqKG4tNig4Tn7Mu6oQjv6tD3s41",
  "key17": "2VNQk5pvppKEdakCdHhT4Kium91NpNaACKFD4uepM76t8fm73W8gsjpmWD44vctir4uZUoif8WppqFjSMCkAwEPW",
  "key18": "53C79GZGH5dy3ySdPwNnBZ2EyR32fHWn44hfud43uYasUL2yMJCucERuaCF186b6tJNy6Ugv7kovriMGqMTR1oMB",
  "key19": "63qS3PH6dSetP52RZXpFduYGsYcsdHdFCnpJV6e1e4jfCK8LfLnNumH8apWJySCNqspJCz9gshhF8RyiXjx5Bv4c",
  "key20": "ZbC5fCfm2YSPJk9RsfR3ZtU8hdoMhDYevAphRETW78G4C9T4FxJmZy99ZwWasaX7E8FAS5AMb2ZYJbecfKX62TA",
  "key21": "4nhZjf2arm7ueMx2ayTsLDjN3pLsP5XvKkdCqBvU1dRCH4m1MgANVuDJegVcjd3JWni9neAK5RaJ9wU6dzd1r6VY",
  "key22": "65TkPZevgtU7zEKyAuvvUuwCdpsvqCHsM5vhrziUckSwuvzScLvCKd2KrZn3QWnDEKSqCwLCkVGjnbe8WnX1FWNk",
  "key23": "3H8WyGXi5BNUT4xRDopjTFWiyNwoTV9Cxin7gb4JnCiAMyFbHqhAL5bj9wBtsWvETMeYx9GLiM5RmHSapEHeNUgF",
  "key24": "5DexJjUkBFUDx6sjcahiB4aQ2bpn5ez1ktTtacZapiXKYpUcp13J6nTnqMtWifPhGGkhMJogPQw4BmG2BPNSv9bv",
  "key25": "2C9yX2HqSF5poLJiLLrvrwrWpPbhJu1EUy5tXmYJjcd5qQnZSE21GDmxtkiGis25xqK8s3fibfH5Fw22teWYvC92",
  "key26": "41br9k549ujmpTQtox2yN6KRNz53PZvbt7V5rf4neifWBD54czetKeStmx1qEyHpPAF1Mkq37xHQwozw6gZKfNvg",
  "key27": "3AY9SnmwKsbLi9srdeQEkwEFgEdywNn9schnVLdgg7TkjLB7trBvUhtngKoftUxSEHgiCiZwjYt8M1jGmLmjfTwP",
  "key28": "2nNLTMejMciU4GPQgCVZstPCnVgN9QMXMCiA2JQ9LGzk6p1bfhg3xP1VNuWiTAuPEqo4KiTUuewPVRXZaggA6jnn",
  "key29": "kCGsVozgzFjyQQy2AuU54pbyfhWfxDTSEhb1jeS52Pe2vUv9uxdMvAyAccTKmWjGsa2ystBMQyB5NgzcuAKx8mH",
  "key30": "ztTuL676tkBJvy4kVZdHWVALE77m6FGJaTguBFEZePwRk5C8N4TuxHrnjtEGrQ31zGU6wHR2txS89W3XaeGod9W",
  "key31": "3LkH8SeqT4MA3J7q1r3P7E6geHLiwCkjDB1Qr3ENAqtH8o4HQ7KA5qsujswi9tkTfFj14mshKW5T1u755GkKwxz3",
  "key32": "X7TixpXmJo6Luq5UCags7KJEDErm52ZkxMBcqM3E63QkidBaTntyP7xDaVpVFV1eDfzZqHTNcBCpgJX1i8NPgDQ",
  "key33": "31ghnDburoB2S9FBK2GNnRUcUxEmmcoKRVwnTYxhYQQsuNPFmc8Ydr1jC2C7CxoxwqtvC2j5pKVjxJneyuYzVMup"
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
