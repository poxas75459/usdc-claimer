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
    "43jKkShtLMjgX8J5LaeTaVXg2mLqUy9B2fL6QCUyWqUwiit5t8Lrh4X6xYY9YXtaPhFqNZR9KE7uhjpzLdyvgu2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fmzb6U6BYgHwc2sH7sDLtVZ9KxSiPKKQ2XvzqnSs61oQJ7wBo8tHHBWNuhLRNJ5VmSx2Hnbpio5T2WS4eWU2tom",
  "key1": "5gExgJraNXRKr7ySec6V3KmdnE8ETXJp5vgD7jsdmBtByKw1eTKUY5MTB29tUZY3KFFLUoss4Cdv2RLEavfzV819",
  "key2": "f2zr37XCe4JALHNE29BUAXNApQk7m5d2W9jNqBX9BiP6dzvWJamRJF8zMTpMkNpvFdZXbnKvLSnBbiqh1dxscvx",
  "key3": "21ZQDbG8nmEnxD1VimoQCLqCgufXBWCebHAESdxoV5J2w1meRsg1vzBNQCbP7qNhm8qhJTinrsXcJxQ2oXNGnNNK",
  "key4": "SVw4LeTwUu6PHSJBtmbRu6JBdnztQCFB8t7EHykNk7Cnj4CNCeQD1k4egd8Bf9PSzqouBPBJXv7nDP9kXXr2DLL",
  "key5": "2vnuFTsyRnzRNbB6auts5RCRFYjMWbTK521VJrjg69mJRmbMUy9cHuATk1uQTmbaNacvUhZpA538bGCurXAAYAUt",
  "key6": "41WCGumVjsXawxbgHu3vFeqfPwsDMEKb6h617iErt56xs5oZsMiMuvDFdEY8P7Qk7R1FsKbkYecgfUYZvWJzPgLG",
  "key7": "CtBmb5GYchCCS7BmcX9xJ2LjQiiK16RKfMwCNkcCg2BBg8U3MRxou9agDd2gtAZ2ohiBTwVk3zGQ7xVFbAhRXTy",
  "key8": "4k1NjHz7uq2h7y6Znhddt16LxafKD3rVvPHncgESXwcaqmZnyoPGCGS4EMu1U8wxBKcYNrDax5iMPjB4PbDrEasu",
  "key9": "4BGEagLey21zKmZ37WBJ9uRd4UpiAnphjiTyrU3qTDM5oK2ACXWtjzG3sbqngvFFTH53vhrStrE67hM8VYodN4RV",
  "key10": "5YLTdg9m3RTrGZTzw27cNLWqcpXWinmms1hjPdNDSaDbKYCNc9vgtj6ZtNUPv5TYkw1TrtUrB7RVvNx8c6rCjPob",
  "key11": "5E2wN2j1SESzFT47KsdC34FgV1RNd3k37punVrCsFaxWtkKCX5HJj2vkoi9AotRjSGprpJWShPCKgcBYebzd1fHH",
  "key12": "5yAEHiBfQ6ecmhVPmWkY71ch4hPwoNkZdkiz3bgcqWpnZdX1u1t3SYkPGMtJgWBBSLCuf9bEET7LRgu7RLVvjQe7",
  "key13": "5wSEV9bAGRnnTmif9U9B3v2j4DePhYYAd1UENqukFD3E5byNk2q6kxLfVQdCpG4qdnsNB3nTKsLsJCQ5VnPtNkkt",
  "key14": "5Qw75K7R6kD8z8qhPcTBnBKQn2G3hikBwb5xDXBFCVxzRsCgPfwwcm1CTH7Cw73d8WumNgvu9KvJcTErPt3ScSq9",
  "key15": "2EFvD2aHZv8vPSvckSuk67JY18LVW26RATmZ2hxaMgAkMM9yY94wdWSCevMcmtHfQX7K5eMCSkNzGs1572DZeVXA",
  "key16": "2vXUbeF897DjTYUwnoXkfzaQVdjyz7c564vHw3ovMhF4SjR2xF4Cb3g4CZ2wyBGwXKV1uFRT48wkPxSCL6bshnAb",
  "key17": "oAXxivMnXnrYWfNhecSeS75UBHDf6697icrjjra6iidQYM759Lao8DFq1pxY9i4rkDnQng4yGAEfhDNR5jnpL6b",
  "key18": "3FGBfSXq7fTnESKaHPFi8LqCEV5zi8fhRz3kpZmoDvTb74PRhH5Lqm1dBBiPJbZxdfiaNLMv2N5ZvX6J5TnH4b7y",
  "key19": "wdN1smNPitf6feCcoWTLuKRHsKzDfmgqx4gmKoXAjhX4HLa9J8TaWNPqfgWGnKn1omFEvvZon7Q4GzQAsQAMLy9",
  "key20": "5uznQo5xvwusj7vw4UUYgtZGD63s76PaYB8DjZxXvGrXaYZvdf51XSRzhSicpyXCfUxj2w6VqCijRHkwTm6WitPx",
  "key21": "5m4XvE64f65SGgaQxzAMPeUMhBsJjwDNPCV3n45vexDKA1hDeQoogRy1Bh5aaJFWSAh6ZoeG3ffnBJojc1oAp655",
  "key22": "Qdr2w2FkWzwEXNJj9g1GRjDUwKfC8fnNdV86HN9htfa4Jmk7SVDUvRJEv6UjeQ6RsK41awjsnWr8HzbwT1ZVfSf",
  "key23": "5MgahUxj3HMTjRMQrdzP1meoDD3Q9NveHjoCUiopaocExid8kJhV3HdqBoTmWgTsxFJDnmk1PB8W4aVkqEQxmCNS",
  "key24": "2xpfLjZei9bhVDrRAW1d927iRQZz4k32Sb8SDFo6dF2TLXLmNZjnKXxs26YdKmiTeiPCuLZFT8GLE9SsiojstWjK",
  "key25": "35tt8tBLk1Gn5kbW1Gtbg4S7H2dpn2LtjcKzYwL8myFDgfMmcQQzmTmik6SH6bLdp1G7KzaoTSdTprKsRoTwm2KK",
  "key26": "51Z71H6fjDcKzssnPFhaN7qsWEvKF4WcD8JhHHowpkyXb5xuqfNUbbSH9gMLCkeqW3zmGM6nuJRFuRDv5JG4BqNr",
  "key27": "3aWCS73rc1HJ1DJsy3b1asW3jXPWMXqmFqNdq9xJQqL3fkSyT57LTyTtKc8jZYgx5Cqp6ZhofFj8jUNM3ohacENT",
  "key28": "44EjFLfa8XMHbSQhFSJWkm3A5zGVYDJZrNrU4Pm6m19FzJkjTpKT1QHe3YJ9rAdtaAJHQaV5n9KPe1MzDYHYemjn",
  "key29": "x5WSPVBBt7qnjDhZ1DbWgcLgUUHJbz5bf8tHtXrFkrX5iF4rVKeSJgj1nBQjRk3WiD7XboMG9dwCjUYJYcoy8J3",
  "key30": "3UgWYz69XFpmfhWxDKgT43TsrTpYyHmFDoSZn3CPmZoaYMUPkKeQ16KtTTkSKZZi3RjD9oSFJ35cSvTrnsCLXb4h",
  "key31": "3s5Apn5t3e58NJUHPdjoX1kwBqs28e8WBAybSwt5RuEtMxXQ9jbG7zEh5hHNnuPPbjSMqKd3vJuhmoLNLPEbbSHM",
  "key32": "3hC7kwiBK1Wv86NQxvfz9izzAhaENSEt3eQDj9e4w1PygLkVCUrvBDfVJ6NCYyvFNNHnnhKd5eCeHQQyUhAcmmJb",
  "key33": "2srV6m7UVj9BuQbae3SKiZnmcnmj8bNGvyTatPtVdrAzkU5L8c7zBKuQeNEzaxMmhT3i21rZwB64MArd3UHJUJGk",
  "key34": "4TaxW4ixzLSaQjZK8W4hYFJTnLDHvJzzqtMSxtVnB7jVFmEToPGf6A87YFMfGcotUtRXq3abDxvAwHZWoxeYE2mm",
  "key35": "5yzB7BnwZZauiu3nh6v916nyquSwZgbBuMgjbwXSpNxfHp8cESVLJdbnCVEDQMkuPkGNQXagp9SBQLyd3fX7HRaM",
  "key36": "3tBky3uh1rc9XcBdhjns5hSsZY6tP9mApdGD7MpqvCEZDFvVVQz25xVQtfU3HG24aQnLY4MNDTmig3tX2uMd71yA",
  "key37": "4WCNDbcBzrwhrBwmPgUUWsdrJrDPh4Pd8yPR4LBh6RQqmPUtUZ4x2WuR2tJ4QwyTvQpD9Ggyi9bBFErqEjsdpxuR",
  "key38": "3WWbP2M7jFJbm1fRXycgFc5pv1na4CYV8LHxLLedqX7tSxb3Qu3ihDfWierKhj3xUcavDcZSHBYFGqmk6PqzVV4e",
  "key39": "2hjfs4wvrBixrApyK8crpVHrkS7vj9zKENdTT4m5Hs28xRqVgwQuAcMVVuaEA7XCWGdd6iPLTGTdbZmC5Tie2qSz"
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
