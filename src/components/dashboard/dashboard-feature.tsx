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
    "3oA8TfBPbirunWWciojiK1tnyiQrqVUVQ6fqev9KK34yeycVLxPFYXQ8MLT1Euj6K6pCB3RSPAnWjhz72fNsFCux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65QC7PC1fKD7iTi2tsyHa3gzcDJtcumGSgbf3JrTDRzqQta9jpgnFE6NTX3XF4hk6GkfaJdmQ1CKGnJuC68iYvXE",
  "key1": "zinNU8G9H3HWSEbCYDvjVks3V9U8tKR4SbwtTvt8CvVXD51nK6iwAxs88c11wvFecEEteh8bYV7rni6dDJ9p7bj",
  "key2": "4MGVnUy8x4WnTrGVErryiAJcYeK2x6i1EeagPLdhfVuoaqgEuX4CTeMdm8YhSbAucWh5BnBDm77jShWZRYr1AK3G",
  "key3": "UbGdYT57n6HAvrF4SYqrK6rvpmDZ63Yp82X2AawcXGJ6ek2bdsjnYh7qDGYMRJGe3pZksLAsFcEULazW8qxU5PJ",
  "key4": "2fwpJ9oEMKpZP4htaN1GvLfsAeWzcPFQMnevjJdnscPwDjmavPEuCjL7DVcWMTRjWu79yK1UsbdgjjybkGFTqBAS",
  "key5": "2LmDLVvbyRGcPeZUB566H34hjiQSTAowCYEi7kgEtJDQBS3aC59dpGDiFWrj1pksPqJGkCBxKa1Gk3sokYkpRRAa",
  "key6": "4CxLaYStXwLxFU2aZxf4tGYPVgoaUomMUwJVSBmK32AhsCHA7hNpJZt8k7nAmSwtE5XLDYQQasgvHFz4ufAgbZ6g",
  "key7": "3nPJn5jscKxpUrWcKSE8WVHpWgkWYCJBJBmKSCuvnprWAdhSMibzEbNps4E8tY72qY6RNb1BLzKXssMUN4M3xBXM",
  "key8": "5wkQC3e9ve5srEjXD3RDRvWMYvApXDoMhNYh5LAzM22qz9rjdhHyDURp2bs18ZU7wSBh65APUHNzntqUZNaAdnNL",
  "key9": "3NjJFwaZ3zCBCM7CGrEARXguwfVdbNR82AwrpWULSH4L4io3Xo1drv6hfqZ7qsS8MNEkHuRwDxN8xvpTXh32DcKM",
  "key10": "2aZvPSndqTtb9nQiyG2JL7KVP9hRQ3GUb1wFpFcxoQaMsePjXyFCJAQW67eoGPGpvzvDEv8GRQHGzdtuziAbtbcq",
  "key11": "25MicWjKWHgPmzyprSwzMwpvt1PsA7ZiWKMSaue9vTnWDRfKGFaHk8d3d3vntvkiThsgkCC1js9tzsdLoDUcXUGm",
  "key12": "3TNkEnNe8Nn1q22GtBDjnNGyvr37JQCuBdfdizSaQj2MVHAuFTtXTzKwvU7ELattmUzpTGGv8VcgjudZXJGankED",
  "key13": "4ADHYkArLLU4CTSWmsdnPQ2TnDBktpXqFaVUAYgyEi59VEB9FAEVjrzP9z8CJEnkzbhLb31pvo4soReMb8nvkkeP",
  "key14": "4cMaDMgFzHhqgndc3uAGmzaJsFQ755cQZQjRtPeipWam9KtCmSKP5QX9fEx2jed4GGnRXTm9vo8kAUb1UGEpu4jE",
  "key15": "4qhVeETnpTNngUTEojdiJbr5YnpozTxeEcbqB3jsCmtYnuesAnWRteKmCgCicYbtLUYc887EWe79Fp9K6q8VzJxj",
  "key16": "3kV2wDgBDf1EB6cbfPxhGpm717N76goRaNU4taGPgCPo97rKz9MZfWw9nYXbAGfFyPiNFbJs6FhLK4914tVgv52A",
  "key17": "4Zun5dDf3rEGsVtC7jipUaexc9NpdakiNuFtdnGfjddGydNtUAcWEadyYYZdkdgHn68oLtfnP3NV5KNxfPS2BPPw",
  "key18": "PxrzenpsYjRxZPuR472P6uRKYeHcajTgm8gSdmuNqxH9aZVgNcjRPJE7p2syLQj8Kou4GtXJZNAv8tELR2V4Gr1",
  "key19": "2qYjpz8TGiuc2vnFpUgFcB8HMmdyDr4M3VoATeV7pnbpqRxMjx8KCDfZNf5yZW9KaWcKYJvCJbHri5rBbed2dwEm",
  "key20": "3aq7zRxynhFsdLZJYhpP5miWtzcjjuNYuqFFJnSirs4Tz8uKMDFeiNVc6HhXazbvKmJkPnc6LuVr8R9qYroizN7q",
  "key21": "4EDg55PS3r3oon86nZ7Hn8PujryWfBSbJiye39e7ZbKbuQA6Ramh5TuiMEPikXRf17qaG1LtX9T9EiaBQEoi5LEK",
  "key22": "5Dg2wPBpcQpbvwyEEWwBR4ZYaotBQULsu2h84Vi4WG5ddChMHHsPCuhgAGt5QgFzzLKQGpg9MWScAzqnFmTMJ2zw",
  "key23": "28B56cyatHr8SKXTtBGbKG4s3MpXG7rC9NYdJGcML4ADBgKj9btPEaNYefVSPZPhQWS2mQLNt9MDWuvFBkC2i4n6",
  "key24": "42SAnWbHKoKA6yoM1SiDymnZnQvYhrUHLNW96JivLV6DEgkubbSUKhRG6UiV5A6iWgauSWB26p2jUgobV7h5xtHv",
  "key25": "4G7r1M33r2euu3ZphBTyy1PNqdnyLqJ1DaA52ceYLXqjykxNyF9sQe6eFCiiGBa1PCdjbtRsukoC3AufnmT7EMpo",
  "key26": "4ibKY2QNLgwHButYzwy5HHpx5E8ppSyZPjiiTNcXmJeciiYEGggwEqn9xJMQ9AStPLu6sDM9UfTTxayN7LcPgJ4Y",
  "key27": "3hLEXb6FFEQkizsjozu7kUiJKsy27j2nHL5tw23pYR2RNviPMWDyNTVzp1bjhJMuZdW3BiSKixMBYKtzZJDE7efK",
  "key28": "4Z66i2hJTxr9BMjN33K67BVJJMH47MsbxKBnRmzfY94VbaqxMWSgtko58g2HCVJmxYHSRPCfpKG6QMAJ4uN4RXR8",
  "key29": "4JjjtwiiztUgYD4vfd2W9nsaAU7xN2DpVfYiMb1KXVHH3cLi6fYJMVHPfpDNbvPtmjhTb5ytyHHQz42KVi5F31Vq",
  "key30": "YFnVeETrnw7GjqxBV1odBJb7VcYr3XQhSustZfyjZ1RTc5xorQmjt9EVYkVxNMRRyNNnw1KzNbqLfdPfz4nKtub",
  "key31": "zo4TqR1svP9UuBBT6RXNQwNvHjnAs9vgoRomNjmTZcfU4DSthT7npHmeDDW7mJMdFoKDxbT1j1zKjEDLeMjtzMd",
  "key32": "Y6gxg9ZNzKgtG5p6F2enpu8EzBoRmsNPriXdzec9hWJYuNvg1UcL1pQSXvrr8o7RnWMvRn2RWYmUYjqS8XCW4xV",
  "key33": "4TbNGA79ELuYD8PccvK73dKqxdSDBtwhj3MgFX37GzVCSz97EeQZHSsV8jyEo842tmsAVuJZ4bY8yPJUE5nmGAd",
  "key34": "2pjRxaYZxxF21zUojQD2T9cact3E3PwAKyPXB9yVH2h4JxwigutdaT2dzvT6mfxH4ZdCoG1CpwBP1C8Uq5HgL99Z",
  "key35": "52FRxs4D71us8JYtDfa2SApC8sf7p4uBNggF2C7xdQUpdhhAD4QS2wGDLn82GrNGBsFsKTDPAhcTsvjSsW2yrgH5"
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
