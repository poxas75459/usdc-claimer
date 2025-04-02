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
    "2wcvVhVnxnTnW1PKV6oUmSZJLk6NKmfNmi36x5sw6G6XPGmgHjEiGYbcqWmQ6Kbr1XdcMcUQVgHCHktu1fHb6Kj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ERMFH5xmknLfvw4YCr9J7TMB1dhRkC8dJoY3Y8w4ep6F28kFX6kiv6YVr3bExua1ydJzGEyyxfwg9WNvMKVK3Xj",
  "key1": "4GhCcRD1FFZ6kHb3pZfwdoEmdLdRL3SdVh5r4YP73CfePL9fZhFNpDrfGQhidcjr4qLp2ztCH3owRCQgtZY5RQFP",
  "key2": "5jiN9wNRU4q82vcjPmAeACgc5sMYeWbBmofxnLbxd2S1vBTzBCWhAS2ouMfPRiRcAzU5fLgXAvDs2kWLeLME8Pw5",
  "key3": "4tQDsE1ngS3vAtqF57aEWXEBMagBE8vUGhXJtX6vha7UNQuND6CLkfXc9V31Mkyp2VckyYc8MsWLxCEQjxMMcYoM",
  "key4": "4uX1JmczYCTEbTePv57nuzBfACpj22zDHKXStr7QSVSb9K9Hqwa7Bg4aFADL3F99XXyvYfWodxJWXxpa5AwqavCD",
  "key5": "q4zT4WY8U15Wihb9rbMwsFy6kTc5Kx9RqwEqxqyNaBkhEmDBBQL3dek3Hfvhxb29MwTdohsxQq8ZTmXTD6MSEQW",
  "key6": "G2k42G1P3u7cAecRi6HWjXsoRJwFCmuuUzrWZpzZDheVrLqB3b9xJUB9Yt3hySZAUeVinj8Th1XavDsftKVspp1",
  "key7": "5DhxV3uA6BuPNjCg5w7mrt2ukdfNh5UtwcEnmoYETLmkycmJsPSYZeAvjsUDBSvE95rWxkybUR1YYhmfZfLt1cNc",
  "key8": "3pCbeNzaM2BbFjJ1xQWbcvquDajoTNzGpXshdp1wq8KCkdpMtoPXHD9hjUXvvK1h5c2G77Ezda9BMBnbsxrLEUvu",
  "key9": "2ypauqJGQAANsamiVcRnwLB8hpQZa2DanRo7qbkRARiSoHVQ8rqa6hD9zWmH7gZfC1eDX5Cb2i659mZw2Ha6m2vs",
  "key10": "5roZMYe79VQt3wc6rsRXp4g6sF9qXzrBq1E7QxrT3VnZdBNY5RVcZuKFDz7LWQqc4sPPiTEWhd6x7YnFmZGyHMD8",
  "key11": "3hKsFz575xYcTE4N4QfvXigufgzbZ22MVEqVLP5cLSZ9G3MZRG9DeKGtURUpXrK6amQ5CTiebUPKr3GxUvWxUmhd",
  "key12": "2Zg8QkuAWahcqmjA6pHgdjwNqeRtqQWbpyo9x8JmutwmmXJAFhmC4vCLt7A5cqpECnqKSHbzKpBvJB6EpCRqTbcq",
  "key13": "5paip2VfMp9CoVxoe6sEvLG7WgivLj2r42VSLewc2G1rSmwoSfTNdH51NFr5VDHgJEmTf4hvV9p1VXV9gT8fPom2",
  "key14": "4tcea84HyrMMgEihZHb9siG6yC1yRJDwMd4BXvLZ6T5KUyZkVG1acVZDZA2fr2JXCcV6u34McL2WeRZYnUVMxoxa",
  "key15": "2Nvjo8GtwDFkKNzJRk7FeWYFPuaMQ9NbrcsUHrX6bVBnHtoB4RhQ215uMYrqM9SUd9fKjBvHjq32NYWpXy1ZaGSx",
  "key16": "3qJfhXVC87SECbahz7wh4v2kMDNtLqL8PJSs9XQptZTZZUeUuBBpgw52faraFesvEwGN3Zse3HNEPAvHq6isPyHx",
  "key17": "sbKkSUnBtyk3TRNbWertqUshfd3o1VUtQ7HqK46zwzpGv2eWwLNas1kTfXX14obiHzAnSok1wyh8ZunZP9KC3BZ",
  "key18": "4aSZVT2NXHUrMtC3T8WAWQ3Lx5ake59WdtUcH5BxPnJPqB6U5GSTRKxExJqYLsGsr6KBcUxyjJiXq4erfeuUJnYG",
  "key19": "mUAuT2xQyNigDrzZtGm8CEraBxFvgs7pqHvhKGwTWX8aRUF26Vfsw2EtUo7aYgrQ5TkKmfJfTnR8PYQLL7fZ8Nv",
  "key20": "26uSPKetTao6DB8JPxZeqXb1FmAW1jk8Nb8Vd5R67pDqVkn93qeubCtE7A8RJz6ox4YQdYaJPvVjQ18vH6ena9JY",
  "key21": "2QJiixUxoxA8ZYj8hotPHc9sqn3qsP3Ampfju9ms7qbX7KCdCK1xpjwPyHcw5DsQLy1qKasDtdARJxk324VRYKgV",
  "key22": "5ju4MWusPvWz4ScgL3SojVBn2pwMXYwWcoSN6BAJUs3wcraJUqGQQo9XTGjf5kzxSVtNEyGHd2gRdogXyEzrojLZ",
  "key23": "3jV5aSx9aKgPUFt73QBsRDa8Hy56G2rHF2gxwFfHVA1bLfRfyVZHxSYavd9JQguKuFL6YA9zzwpNGDa2jVx4Lw8o",
  "key24": "5A3jnfT1ALTy8FtwASx2criZE3P4edE4UiSz6mz6FTq1s25N8GKkK5QSr2BCxAkJsgwMvdPJ2t5C2ERYbjubf6En",
  "key25": "4v5CXkdGsNfTJyPsFi7Lp7VsBav1GexyNnfcH8VZjN5qGVEfP6r52DN1yZBuFYejfNCbiEBRzUTiMREBjwqmKsKY",
  "key26": "4uJuaH241JkYQkCFqjU59KTZNjd9KCXV2kyfFSWHAoLdFhqL77g2oQzTVU6C2s2rNETkFFRB12ymVYNwg1o1R9oJ",
  "key27": "rbpZJ8cSWxAy7MhJnmiXoRG2A6Rrauw6AFjMhVDaGWotMqZsuPSneamhdmYDgbFFGzPDV6kBhv5H5fsUP7Etmjm",
  "key28": "61oj3BRtSVR2NMrETXprbuHBqJnn8yPxTEYbLG986FsKQ8C7BnkfVtMNBBWegPyCByvgKsZoFphTBp5jgW3ptRDs",
  "key29": "2bBLEjxig9sPjoXC3pw3KLqDLVuijrYZb99wsPXJHDMKLpZhJbSo3z3ZXggdAoi5BkajSMMsdhYZSRyr8E3Yzmq8",
  "key30": "2dHFGE49j7T699AdfTvavNg7hzpzjozdsmMmbbp5h7hQ9zEqH9U8m7ND3b3c5KkHjMDEGnAWyw2bt4HwYUdxxJnD",
  "key31": "2g84RvaUz7G9jmgU4NLGdX3bRc5a2i68YrZvXp3FL7qdViGy2mNYBXZSW3MRy9f9btutunWzUjTC9XjYEF682Ev9",
  "key32": "2YiM8gLsa2jmC8QFrxc8acxqMiYukTcsqdrDmK3gAJ5SxyfARqyPLzJvtw26f7rw6VX4N4vxx4FGQjmtw657MhYV",
  "key33": "7VnH8NyoiwxovvS8yUWiK1x3rdfocBArPPWm4GMjairSn4eVSEXiGioJ9Xwhh7Gznd46pQjSbBaFTRWDDhMBPUq",
  "key34": "32fBJjKM755qJSRAGWXzP1QibZ6w1yw5YQvZpuTJL5VKkAJ9VdeuVVKyC9QTrAkBt6ztmSYHjoqMdcQbSyJTgUFC",
  "key35": "3qzeTVWXpSjsqseXA6tS6t5sS1o8T5SKucj8jvENctG7bD5NwtdV2LRDCv7FWayzD7ke7Hqz9vRQq5EdMxhyroxH",
  "key36": "3Cd3cLSth9TsVPhf4TofU6UbJtZixdat9BurqkmgNGBZNnnZK3iMRBSJ91ey1uejocxUis8Rem42FhvH3JgyZAsn",
  "key37": "3BZs58j7KdnKxa5zPSgPPK8LqiHm9xnsNHKtWTsj1x8tDMPB11AEzBzaqCTaCTgcDUDDFUaceBZ5VUEjpbBL5HZQ"
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
