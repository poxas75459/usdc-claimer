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
    "3dEzk11HGhPpJYQMHnn48cYZ6eZS7aHfM1MCqUo7o6HRH2bJ6nooobrF8vX8M3YxT5CPFTkfTEpWEwH6avzRuMha"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EZxkQY7MJAdF8wEUWZraNzSFBfBmudYEg1a1LsHse785q9sS58wxu6SsaT1rHuktLBZZc483dpvS2kWogh94GBL",
  "key1": "5swCpDEQL89ZubT2iNbGmMwNmqE3SXYjm8Pc8FpRyDJTF2ekRVjmSAyhV6EJiCuhc9gnFWHRBtEGaBJzGnotpv9S",
  "key2": "5d9p8iQoUkxWhNtF1fAqY7Saz5c17tvABWGowWA7yCzvRWThAGgbWAiyGX2HaBnbSQsp4Sp2TbFRuFEdgcRpQcC",
  "key3": "4URFqcNfH9oCrZq1J5zWJWSXk6FjPNTtbqTgqyDJZsqXPGkw4V8F5sJG18HUKbFJMGGRXR6exJhjLUviw9umvhip",
  "key4": "2rfS4PrTCadfxN2LMRfsQ2Tx5qHfzdKa5k87aH4Qv8hMGzmZ9tP47zcoMhzmQyVZfAwTNmJL27nsEa63megzhSZF",
  "key5": "3duJ8Cm3YpfyFdPSkfJ1ESE8Fiqc9Eh53QmhP17auMZCqJ34nEUAuUKAPU9zEPY6CHKjiYM4CBVkHSKLBzkXCjSK",
  "key6": "4TEjGaJSJNuL9hC9jTjCxWCMdCQ3i9VtnEcN1d5e59RnmApW4xeNh43EDDb85sDmUBdV76W7geteUMXtfuZ3Fku5",
  "key7": "5RXhc8wKREF2bG8yzUPWgpaDT6hJakDFpWZB3guhYjAWsQ9Pd6MGNFp1HiqFj3X1SwocKgGhLA8KEk2xUgW1NDS",
  "key8": "aCfWVTPmHBkW21Cyy9dJqjtHwJcjGGnXtvEAj7dH2aA4frz2XEhxoj8jFZ2H4hUKLi738X3m1KMZvfNSk3nEyHX",
  "key9": "3GqcEGcCT5v4yPEAwhcBshWJrr1zgKGNYEwiMCihiN3ynhhvZxe1Wu88MaVQ4QshnEfjx6L4wfEiVothfXzvVQtV",
  "key10": "3uvCTfMGhSdUjQVB6nHkjCRRv5SnB7vPz4tkNAkL47bqisLsoFsPwRkeqGTSoMKoJ8eeuidF5NLdJCgGNPNUqWPa",
  "key11": "5xdZeiyqbKQ6h3pFNQ6iNAQFiJ85T1XMhxaqsaDFadwETAuJJRp4kjT1bNvM5NniYuYm3qaRcvjcdTQdXMhMbGbv",
  "key12": "57nhSSKgv8eNTpmwFAmX2966DyL4YHWjx4Nm5hCJ2RqVgQFAkL5pQYLBcdaAJqP6SXHaGpXXJ9FpumEaeYJxXfXg",
  "key13": "5Sn7PviZCPgkAzu8F616oTJHeHbXz3mdXid7kXAY15uVSE9APHnHVakMNAMS4HWBu69FnxHdEZuzD3YfME4SXWjg",
  "key14": "4Sz6L71BgyeCXZKdBMGQUwATZTnMDVZck3T4oREzVBLLjBE1D9KFdWtg4nMqnMa5WLEnGYPaCYmidfrKTxcAnDRX",
  "key15": "2RuwU4w85cNEZYWTjYZvSfwAbtRBUBZt7Q72g3WYQjrdc7zwmckWgZQFfrUvRQ86HLkz5TWoDBknrM7fmLADoh7c",
  "key16": "3yz8HshKbYAEegCzAoSgaEBt4AitNDhdBE24WpoTgTycgnjn9LZV3xA5UJjzuVsbHd77ZR6qLU7ucG7Xk79r6vUV",
  "key17": "66yTQfpQJdUTfz3JUnzdJkZ2Zrsu66yauh6K9QaUXgdnEDkQWVqb8jsPJMM8LhamcaDsiLAmAHEpKkATMAErn7MB",
  "key18": "2fn71Mzab7cPgA3cQ7JYQ5BxhsWTTRuWARnPn9M89tkeRAtwM3LaLsRFPdwzVLhb3ctM5fvZ5qgxpJtJAfdWFcYR",
  "key19": "64Q55LyAirFMv1aKbKY7zp9bwD48rQ32PHszuKLE91N3LDi2o5Vj186Gdy7H2SGzb5Nwxz5DuBNhQQ4F8p79eego",
  "key20": "HqHVVVLQrhpUAZq3S1X6QxU92XmXDcz836AP76kvXiHNMQ8bLfRhKTxhjT361KMRj3pMud6hBs6yWjaZJuTHXGj",
  "key21": "5qmvKtYfTirvRnyWE9y4UMYy3GawuhaYDu3DDtX7wpDnXD5BnwFVVabPBrbr45XHN9juT8xksUxRCoH5un7471Gf",
  "key22": "46WB4CWuGQ99w7kvV9vwL9ErHWpb37bDwf381DEm9DHosWZhKH2bsr2BixvWViVqYmpR1e4K5U7jTDRJVvVdCEMB",
  "key23": "p3xpvyEJQ6GJyxE32NbZgChs7J1w3wTXk1EQShDMcjCDhbvV9oTyfQRqmZow2fBQSGNiV5DzGJpAAMHwTN41hAN",
  "key24": "3jExkj1E4QG4pXHf5FgNLQnaaCPkh72DyvAdB2PZVnYZCWnafYvgZ94art7hgWbGABKKMqaXTqkpn8p91xCjKftn",
  "key25": "3Qx3MfCJJBBmGQFGFwxRjAdfBQi8U2NGAxfCEGWCp5ptz8sj8TaqLNhE1HyCsT478ZBKHQRRNZYtErLxjSSYjKRS",
  "key26": "2zHD5WVKpRwQcNxdVUro7DWUDXphtUxZRE5TzuzHoLM4dad3ReZpkRPrdD2bRvSx1pWdwNuL5jv5QKkuTNv33YFH",
  "key27": "3uzcozcDEPuBEopKdggNvLj4zNwRnMMuaWQe4gSMw6Z394YnmGTkmr38mX9ucYw7JdPVftCUZcXeYcH56LTefhQE",
  "key28": "5SpCPw3DjXPpUPJX4KgVizGgcZsQQ3d7kDZEeuGWLUj3j6qzKTAa25rkcAJwDBa4qukQvXh4d7vQRAnoVgLZssWg",
  "key29": "29AZoXgLjWB2tQUZaXRaL4aZHKsAnoLsFbx3ABoRevYtfWM4B1SZ4drCtbQvH1xyTgwmXceRpSq5jvqoy2vSCWem",
  "key30": "n3wN5quA5ax9zoLdE73xSJ7sothsxXHJAjpLGziZ3jWf22BK42F7tEwjZg8rK1uhLJpjYnuzxkqCDigp44VM8yU",
  "key31": "3EWzzCXttSGzDyBYdmRsv7J1d57GnVnAsxDR2uSM2hkkEr6YYtupkC6anBwPnbR6DyoJnmZBbPia4bcmZswXKeCV",
  "key32": "4ufemuDzqzH1uHcnrAGXDVdwAHyheBss3tfgLoDM3pWLjz9m7zVd364yRSLsdFmsK5JhdZnHgn4vLtzRhUpeNLKw",
  "key33": "3F7x5u9GtFQ1jrPd4dBh78yxFxpmjdCELKgTz8vZRqdUGpQSx5EzCDbjJ43nPdHP7aHU5GX1pbVWPxAPXgrJ5GmP"
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
