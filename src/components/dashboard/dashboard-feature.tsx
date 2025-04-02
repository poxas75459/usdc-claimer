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
    "3YjJYgw5Ev1umX2q268Lc1zwuab4jCLv13CyvbFSGiSBcrucBh3WehVNXZHAHR2B2i2cHogQqdXhecjUbhycmYvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qnR8NAvxqgFwGityJvhSzJAUTUDkkBC3TmoVFkFTGTiGiUSaZrNgoJMqhwuVJqZ2HVTEAiFepT9Ur9kKEN22Lab",
  "key1": "5QUu4fQ9oqkGbd7zrWfVQTAiC5EFibhVnCDSnnbYmSQuswXDPGngbLfBVsbc4fnGZnEwrUXKcJ2CoAcpgsw5Cv1d",
  "key2": "31v4NcvUcQmGhnM99t7FFaC6yp8inhs8Dg7HpECaGKpeHcUYM3mJMkpSNQ4ZPtG4QuFVCbxHMsk6H73MfDvScmGc",
  "key3": "45f1Ze2CEvJ6xW7CNgT4CCbdomKCp2S9pSRyCjnX6kjcyY4Ybu64pQNsYEVJoNUBK72LM8Qmg2c8bKirTePohC6J",
  "key4": "2QVGQL4d8LgAR14UE3ZG8i4pnbaDJ7fmgpgY8vChv3yYGuhCzEjB2cVi1sCP4JCNXb5s5FPpRuU4y1ugS5tMe2xQ",
  "key5": "2m6ZzTeA4DiGDxDw2S3GBNuNZc4bMqd1ibayP9H4LTPhU85UGVgqgyMuR9ZB5BZwadpfakGbYcw7nt2FDE9Jvbp1",
  "key6": "4w4jnx3x1BAnHrzmv1aYxB32xeipUTCwB9qnaWE9kHbMmCiMAFpcJLK8Vzaeaw3tC1m95CFACSfDXfXtXcCbBwty",
  "key7": "52JAwKck6KrfSQi4BLZEmGdsbgMoUgUT1kdMBVGiwEKDoLn5Y77o68AYoQNEEyRJZhQjwCcA7Xfetzk3kxbNFjNM",
  "key8": "41XdqHXCANxjjwhXDYMhd6EJcFm4p3SUi2GqzJm5TVDsooMW68nk9jNxYiVq2D1YkZGwmGZQECJqwJonZUKEQkM7",
  "key9": "23pMrXaaMn8SS18zKE3uk82oqk3VngwVXucC4tc2pzRcGMRrCPMgeSL3mKTwszey43RpgxX8hBytwVxCjLkW7sj9",
  "key10": "3wHqy6Aj2uDb55kYyUwDZaWBrMisq5d7DNSEjPprHFEk86y8U5iDGguM6UTMDoWKwEa3rT9qrDZJjEmStd9KJein",
  "key11": "2nXh6YVnmEiwZdQGzfnmvCrYuk9Lh8txFUced9nKaLZHMiPELrgudftAqGx1H6pSGafmqpt52Vqm3a7CUDTpYvrp",
  "key12": "2mSxiBQTvuaJhkqbbs6ftrTCGcpaLygWFvwvw7Z3Xm6RPv1bFjnAJKkvF3gJMvES1AduCqT5xj47wDajpcq1djRs",
  "key13": "1Sid29oSFZnV3GA947cML2f86eexEYp89DJQ4h13JW1T8iHahBt8XuiYsaufm7dH3GXuKZjm1Pp849vmK55M6hK",
  "key14": "4pVcPCMo5B49Xu2eWWpMfrbYggp6FGU1k2nhVwvZcCyEAAQDqbQymXmU32Jdjgwu3CJLdv8mP8nCAidZaruLMeFY",
  "key15": "2rUitgYmDNtmgyGcvzwFR6YgvGKwzwVQF6cZ5N63XvVrnUVHpsVzRAudJp3gFaQ56HrxTZhxzJu4JWA2fuwb3uRh",
  "key16": "531YVJn1uXoYzEiJ1aGcgbWKnupHMQaqppKKt62955CtoHd1hGypYVpEV2WiaEWzNTiZEGk3n1y4ZRxC4NgnraZg",
  "key17": "2nswkDNs1xLYY7GksrEdxMrpBMHfuqGugLc8WSP8UAZ9TvdFBtuiLALKNYDQKd2zdsgVgvWfmF5hhvFi6iwnNK9U",
  "key18": "3WUw8bWNb54vy9YzWqYxVLSpPSPyKdULL4eT5VEtqgQ3s29DiTYFdcu9Gct5s4Wv9rqPUQqrJ2LYngfLbmUNA7uz",
  "key19": "4h9ahQv9yx6FYbSvAnRhzn85BKSiw1jSNEuhXBXnzD3wSdyA6hufsGebLwqPfNAdGL9Qio7J4nY3ESDoprMKkFZQ",
  "key20": "62vTvrY29Nc4x9bZDQc4jGGsVqd6KXC1pyeXauLnyb3cCfKJqGCsvp5Xxfmxh6xHzYRnYeRWh4Mxi53kHBV7ySsz",
  "key21": "Zsf7waj4mstfQAscHMPEY8KQoQswkcRSaeJcL3ASSjdDApas5Z3fss34RL7ZdRSmAMP5HnR5aYLKxh1kwsq9NVP",
  "key22": "4m7r5FLJbYRUmxpnje6m8ZMxLA6JqH1aT5XPRF8RdSqcfiUuNNpu9Ki4cdmbPGSfJChXV42kXjLinrwPsf1f93Hm",
  "key23": "5xQKe7TxYeGkmxTHRmWbPjT94ZxzDT4VYmvMkj7apfoSRR7nP9YNQPvCRETDgXzZqR29cEt4BxMz1kVtLbcRGqXt",
  "key24": "5sT84vz7LD5ca6oKk9GthGVkehn5ysHwqth6uAMTiZH5z5EDyzoDAMLwWzd5WEGtv3MK3cz1xWjCW51nsHGKKwJ4",
  "key25": "5HMCZfELTB8hAtnsSipuT8cJFRkJrLvQ8xSYTLkASpvyD3jNhHHuRGEcHrsbcUJwACY9QHVgkuqjAdvWHW9cyv4N",
  "key26": "2AaA5ZtCqtjnVSVk5AyTWPucHjS3SMBwqfz7tvNz5mzN6zfjZHM9JyqEHDBypm2RkEfrzynyWS1xkE91kNbsuwEW",
  "key27": "3kGzZMdPfFUdtvE7s8UDvWLXoGnmmafvKucNYzr9zTh58bk2KUMeh2tL8GqfsGEgG1EqjTom2mGZqLrDQF3jY8xq",
  "key28": "25QfecTPdr4zVCajSsthbj5Bkqis2gMXSJ6CnxAHeGQZhAcZiJSqr4ru1TRRC6YYSJX48KLJFhQxb2sHB74C6BZe",
  "key29": "4CcTRiq8SRDHzrbwQHShGkUjPHTecjQAqVcqN6rfwadAfdM8YYRMZMmM8ddsqJm1ScBwGm7pACSiuyiX3MXRgKpx"
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
