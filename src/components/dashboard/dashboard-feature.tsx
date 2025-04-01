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
    "5HjP5iKAaKx3mZ8tfAyv2qd21byw4Ss6Uv39Rzre9Y7quaHJ6ionA93pJcJ8MmPKWsTZwys1H2dwcZntRRoyU8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A9zgu5Np1JNquBa5GRuwSDE8aqF6ZjWDXpErDnP9WYPHe3bqzFuefFkFiHjpwHVeaEav3cmv6b1FNckorPB3TDL",
  "key1": "42WdahDVC1vQhATUtv7pgUzVr6NuPRU7LwHNMCksz5JnZUrdeU7k6TZ7yrvoikrGuoZHgSBo56Eg7JtdhupjJRDc",
  "key2": "YEksowCQ48KB6sDXeSy6HhVGFYKEj9s2r7QucRpknogj2akymwHp4zfLi4YNSGQUbbfLXMqgxFzejRBCU7hmyrr",
  "key3": "97tsyeLfK59Hp9KG38C4ZAz37wnSiBBSa6xdpxPCLxfXFzs4BbvJfe9jUNmzmApctBLSGZhZM1CHvErzywcc5gu",
  "key4": "66zwS3fahwvmn2JnvG4qvjfUqBgdFjE6NpoJCfguv3QkE8ivib8Ac5QWRkfbhBKp2rgqHW1rC5ZkYh896pZQRHGD",
  "key5": "2sjvAJM9xt2AL5FviNy9AbdBA57XhDfZ57bjZ2rxrdrvLpBfeggSR5timZWwpN4CRkpEvi33ZPuWQ77Bo5agwoMR",
  "key6": "5YeT8j47XymvS8y9Z7BgNkxxLXwJjJ8ZYaoUmyKK9vPzCWTDQiVeTkMHUG3EbcndA8so19iNiMAJ8JqbaiP8XJsx",
  "key7": "2prj6QksxoSzZKsq45Ux8LqRn1ZrLrZy4VLzrTfnaMo5geYGqWGDocWqHn2r5L5r5mmGphzrgcWhX8EXMYfmRNua",
  "key8": "2FPcmMimVg4qtcTFHZ7trqp15ETcXpBWgQn7S1GmcXS7sFtbEgWhUTX6NFf7mzfVaLJ5YVJoxnJZAzpuimcGw7ai",
  "key9": "2pgaFiZF9RmNtYq5zfw46NYs5ZxvyxubXwqacugjHsX1i2VyZbtBzpUHdQqDy2a1AuSWg2ptNUMBKDVbYUWmrYuX",
  "key10": "2WkfSNG2134UNt396aezCsQkBcLmLZDEUCCt5PBdbB8wHQGuAdUr5HNNc3E4nTPTJCXgoXEmDpXLyEsMBpzH5CW3",
  "key11": "3wEkfbyrLUPfPrkW3VHt3ukfvE54sNdqm3hP471x6SzzuwqxsPeoCvFN2zXbqaPBidXLMSG9o7yy7MPhPmGpCqW7",
  "key12": "5pFzwG6UBenZviz8MpQLA7g74zADo5uxGLSZ5hr3QNJEAxPi2WjWSWLjp9zyznuHNRRyNXvadevDhCsb7i4vHn6a",
  "key13": "5V47dA2DpqbakcH3Se7fmHWbD9mgrAttsQg3joQtkx22ByeVwyhqghndvpxopZNFaJ7ex9qj8mdW4BkxrzAA6jSk",
  "key14": "Kp1oVfE5tJwxdZaPQ5BtUyE5VvyW9qsfVK7pNrYyumdqzNdcayMhVoWG1fsyumNtMDLmBeAdaquXdD2j5VeC9xt",
  "key15": "5U4usLSzAoA9BXgYC2rAtjBMRcVD5TZUjP4JvdFexMP7MqMaxjenJjiWEFdY4Ka6EytZjsPr4rFy7kVPPbVuzfgv",
  "key16": "3gE3mQ7dJAjXjLRVZt3KJExw1J5foxvQKeRdgqL7awpqy9GCNAxE8PCtjGg9dut8SXe9YRsKkzofuym11aZH3YVz",
  "key17": "7arxxCd3trKmGmQ6B4nQ7MNuBcXwNAR4MKUAELkvDnu7tJAAahtHTsqydNLQ4JbSSULxV3MBaANE12Z3nT1SHJQ",
  "key18": "Q27zzWFxJgE8hte7XKyotuhcfoSxhj5V4FeKwZDk2QPF9XRTatSxzPExwc6roFxoRytSSKM7mXiTBjbnEfYYCuU",
  "key19": "3xz122sQibEV8baRvuDPPVPLFQf9AhbBCrTC4U7Vj7BeywYQYFmRpQXGdCmFq9Su9KZrsdnscCwCnNtdrrijJrP6",
  "key20": "47qBuBLLK1aNR8aCED25iWqnNSY5fzDMhHU1xHZwcaz8mEh97tiNx9Sm8cDZqZBbKbKpyFDCG2CJBi6ckGHjg3uh",
  "key21": "3Ln67o8HEreCjUqhn4pR2G35igFxvEhist2xQqzDAShvjtprJVcTavhJMry9E3M2z3EMNN3wxjCy8mcJRrDk17rc",
  "key22": "2pDkcXTFamzK4uXMuE2Tx1Fz97ThsjBGHwNeVQTfVKHq8sVi5ckCdLjind6UYFbaSrNetsg7181jZw6HLV2xjVpf",
  "key23": "5XhdTKniCEXPZEgDid26kqF3R1uzXt4hi9J9tYgGfMVYsjoQH4kA4Ae94ENjTd3txCrLAj57czavWGZLbYqxcfdv",
  "key24": "3CDMymM2r72dFsVn7RiFzWXVnGMWTStKw5abNUmhHm2desi3qkSXmqcCofxSbZD6bpp5VEfDwTm14bs8v71i4YNr",
  "key25": "52jdvfBNAF8gPpFwAjDC1u6rnKrFDs2bU1p5Aio1fAxWSLh95MD8N9Nw4Lrp9NjMKfeki7J9eNVMugZq5wfHYDjP",
  "key26": "3cL7WRVwcwWPNxyNsqTvqcMMEA4HR59iUZF7chsb6nXHzhDACpb9RSVLCixPjUCqzEfLdzPr7i9YCivFJ7wYbo6x",
  "key27": "2nDFivU1pTGGvu3uF5JGL7m3LWSKcMuH2DdZkja7RQMuN3MbSALP91UyuW8tTTQNCJgquPMpE45H69jUqxnJN8hF",
  "key28": "3U1s9H8zk3FZoNULbsuREvK4DLCQkhSfuxLBvSe7XKqzCJBfQSDscqk68ec4dD41QqWc4xhAEgFHdvocQZ9SpzHk",
  "key29": "28vSkdVrHS9EwjyGv2MLh6fgSmm6fEt4F3uAJBCQdsKDqimJWJ3ryPhZvLPwp1k6VappRTirt8cjisiCidA4FKpJ",
  "key30": "53odXTPndrZQ87FJFtUBdLYHvHfn8HCiUQqvvac8JqV6n1npJYHKqpbaVbpfiLqWXnFeDpvPQ5y3umpp7NtAL52n",
  "key31": "59Gz8XSomsSV6vxy38hEN9qM3ndtmMwfbWYefNS54FZqH599ZSvxHgug7Xxt3XyzXeZ9USucEGmEY1yYpYuMGTCW"
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
