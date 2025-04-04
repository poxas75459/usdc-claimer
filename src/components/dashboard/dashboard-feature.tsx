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
    "DSJUsoXHtrrsRFQGfwDfpkb4kH8WqD7ediZngaeJpQeDMUTc6zJEftCTbsYTgva16ZgEp8ogcAz7SjAbvhnJvtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N54aCirKhsKmc7oc15ryTkDemQZkYpwGaqEKiknQr1pGvkZ4GpRzdj6Hgv5HkTzimvxcjbSSPEv3ZG7nS8SHum3",
  "key1": "2kQUHspP9uMxoPAY6wgRy3oAtFLBAWp5ygYWm8tVcacwfPWdM2Yhr4FhiUAgRxJ61U2xfghSnq8QtpmWahHrGK2p",
  "key2": "5jLxSVFG1DRRy12ToR2mF17YEx4zv9rCvhnkqx4qA531Guni6QFHNmkfVnkdswb6BEM1VpCpBAGgRboFNGKA9cYR",
  "key3": "57s27coEnFAtndLfQqXwYWm7vH9Lt2mVcTmj1qWXXg6GSJ1fvvJ8HM96hhrcnUkb7eeUwN1S5mwmmawNaicEzcJH",
  "key4": "2CkqPVoAdUaKDaegztKPYx5Bebk76YG5roNfkKKrqbcTeFaq2o6mbpFaFYKgUgKxgWS7UN1fNGgDzNdBBShAGsPe",
  "key5": "4RpEime62Z18JDxCar9Nj6arjRMwwm8rrS2YEWc6fPegoT2z5bmsgNZM2ACcWKrmYtLcXr8bF9L8jrdiRPJi7yri",
  "key6": "uRnor5z7XiNhxtkLgZPjxDsBVesv9wYQ68N2VV9Z1o7ALsbUTH3RHy7gKFSaio4eSEZ1Frrn1ZN2HsA1ZQm7hzG",
  "key7": "3wioU6icJCVGsWmmvh7bbHnjuPPXjLUVxfejYniwXcmdXFMAN4GWkYY7U44GJuEBNKV2KCfKuXzZa4G5dvuhStNL",
  "key8": "xjJ4giEU6KxrsQjuvgKkvA5u1BkVybwPB4ZRiDWqZi5Z3mds24JvRapdESfizX7Dc66rAWJXywccSYFH4Jrba3b",
  "key9": "54WqEYiVevsF54WBshUMaHwQtpFSeZcxGnQFeHd3L4ye2uZks3p4yNaTF37246udjQm3B3veaWnB1zz8NGccfmow",
  "key10": "4rsJB26nmzBBwEiU6ee4usozFfQiqgg2VvAdv3Vu3hNs7gXqE4ZyyE5Kjjcsq5NvsUq9aQkQ4QY19nRtxPNi84jS",
  "key11": "4vhphfspR9UEcRBPgUajdHv8FTSZJY3LG6fKJaRGXwCQyyzLKUF3wHU4TwDnFtWCmWzjZjqCTn1RLLN2aGbsEWur",
  "key12": "7FwLbCKcGbQfLGNo4WDKpemvnFNjAdaGkjYixEiuXArJ5k6owWKGPKVs9iTVaRWNPmFHtr4agxMR4WE6pTNWNBx",
  "key13": "5TE8JKjQaVKLXGuWyS4PS3bTBYe94MYv71AXuZyk9ufuNMrHe6uVMBH9YM35yh158rpm8T6yYxjwgyYXMSLdrYdm",
  "key14": "2dLbeuVydj8MzJyAEKGMViFGAvD7v61wqtWgkLZRMdbyiXCyU1ygQbZpd336PcDL6s5yhTGSEE5dDEJ19mX7LsCK",
  "key15": "feS4BNY1beBPpuYipxxjAz8b7KzhaXZ1zYYQMvfvz2XYreHNVhq62dFzuR5FrGY8yXKmq4m8LsXZNRQ3EdJjoCn",
  "key16": "nAkshg4GvqgwKbN1wwFvbja7CaUfoa2n4QhwUmSncZtbmwzQVCeWPNqvNKmXLxWYhnWA5WTmJdojr5Vdd98pcBJ",
  "key17": "36D78QSfLk52DHR1CJgbBcMLRK6oURNEksEZHcQR3sgfMYFDbUdopAMTyrzfCqULuQDaYU1pZj7r3V2B1XBQw6xE",
  "key18": "3HYkMJmqSnjH2r9kEnUJUMn1RLRhmrYbD9Vt5UxMDNerhikTmZ6mib1ugsuck6ri3WZUtDndvuBVZCmytSMrAMyc",
  "key19": "61m89ukzgtnJmNh8V6BAtGrzdpqbc2cLShTeDRyi1rzZjUp7zCYzrybqVj8yjqFEH3pCeE7hqK3bNyVFHRvBmcmw",
  "key20": "FG8DoVUE5naeUM9QSJ9hT8WeYds5embmodTAMLZbgJFN9T72MbVJU2iRZaP38SUhpjJvXhCyBtQWty3v9KusBV7",
  "key21": "4igcNmbLqkE1yd97twBKMGQPZ4NeAqZ7GedvqX9e9W92j91u5Tg9fhA5Arazo9CjXjps6ubMqW2ow9o6pzW5SLe",
  "key22": "5Q96VPJbGw6qQX3LZ3HZiFG3LshxTeM9QqQrpKwAr861V6CRtDyGB24TxywPQkcbSxot2zh98mGR1wrKS6sHAoYX",
  "key23": "2EvSMGsS69UA5LHiEmgHZmEZGQXRmqRirsQAHAbMU6hBSfHN66kFjjr9FqKVV6qAsMqM9Xpu6o7fF1dfSjNFhP47",
  "key24": "38TcZBZFdEUuV5HMQRUmGZzJsU83rrpr71EEWk2eUQYYhHRgAk3ySrimnckeXbaW1DwGuidBvqufWLXQntqrEP8o",
  "key25": "k93qHAFrJej7sejygHe2eM1C6qxcvemyq7jR6Zw8rANhmXjg3AcP428py5udqniDRgexgY1jX3jeU8HBxgpNieR",
  "key26": "3gUBhCJXqUeGctDqxJsGhcpk6tiXPWM2Ho22h5GuKsg2AUaxB6Ewb32FrFXJLyGbnFRr4A4D9ofRZzBUjbCXpQ9c",
  "key27": "3wXSm3HGAgrqP3Us2RcpCPnuHwQgCrZJbPgeYnyYoEczqejZKrDh7i33LvCZb1Jh8zG6bbQ34KHA8bNnWRPZJrDc",
  "key28": "57JFy8fShNNCF21TQYUCyGXhcNUoMopuvGkG3pDHkjMniQhWNoK97VfnWMxiCVxMYcpYVZoLm9MbHWanoRs429qE",
  "key29": "3Essp2kKPwsbMpqWYNDJC2CMgek1quhTcM9dCZZ3jDydEckNuV7p6MxedYdAZq7XTeVASGLYjKkVP4Ycj2RRWFXs"
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
