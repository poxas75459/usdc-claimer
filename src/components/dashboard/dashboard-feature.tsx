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
    "3ig9Ne7S4MA6NdjK2hiRQHYgj7P2aUJ16tU2EUqZX9xKugmS154d215moh6BHhQ2iNBsJ81GcVxoZbTX4spSX2Gd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g7RHFgChurZZgPCrd7pbRbZqapFV6zMU23uYaN8ptR9jPFPxit6CdZ4X7adm8DhY7krfG36pvSwez8CgvTieMYA",
  "key1": "46YvVEDfijfcTRhfpPYP2Na4rDLXtWCZxZqAeUoM7xDt3BrQFF8dpQg18rarfNeY6N48NbjxV5SP4cM9Ruk1RU2t",
  "key2": "5vkHN7KbEEj1hz2dV197jcXsxzMUHB6QVdHFTqJidMkPpf6N8jfjbQSwXph7uT3tzQTkkMfy46pSWU6q9QLB59Sn",
  "key3": "ajALshynkbDT4gxMsN3LwP74vSCNnV4DJgntkjnMqtu4CruujRrbgwuWbY9VwppCpvEGvHjC4AEKquAEDPnuvvL",
  "key4": "3VwFmoHdqMiUn8NEB9xQSa93N3ZChR2cdUwf9NBDAVugEhxJtkExnrrzeYBZ2MGR4jQpQ26FHo5jEqA6V3c5EqeD",
  "key5": "35bp1c3Vi9xhkzWisaaVCvtoWzDLcfWFwQdHbmmSdDsuXZu86oiccg3PpmeCZowNiZ73dQuJRV6X5F5WaSn4yakM",
  "key6": "JMt6Nb6yxXwTFk7qVwY1PjX6Dqbru65pXq8Gbq3vfi7kNUxFYE171URyXWntBpcioFoVPP7jkgCRfnTNe52LJqM",
  "key7": "EerBxiT2paTJAc1Vjtwju3ZgEqA4gjXyNeNHhhLR9M5DURERcJcz3yudcCy82PmQEA7TaxTAqaaGqJZ43KzLeg9",
  "key8": "5yEwSeWEUiFh25hG8PrdRoFnEEbgPK2cVK2iDm195RM1K9b7Eca7hALDqwSG2hRFs5SbDSp7zPEHgEpdPAdYLAM3",
  "key9": "5LkDKDPka1Bu7u7UxUR8qXgXCAbeEJLM6ZXuZXTytJmMUWmYxbBH9KLAvnmmJ7DTUwb6rmZHW1gp5cSjXiFrstF7",
  "key10": "2ztg2F5nhkgQ9MpTzDpWwgx6gyjqwTpy8uV1T3AsVA3iJpW96WnzobKsMKGSrQsP3pg462ot5wvRB6PrzAwpZnNL",
  "key11": "53rideVwibekJmrgwyFzc8JspyJdc6aiSR4W9CRDM3Q2cGnwjwC9yEnLdQKn92zjhkpkXeMH3VpysfpZMzuAih5s",
  "key12": "5mfSWSv9Lrg2HP2gcR5rF9f4CjbMdfMh3vKi7k4fVwqviuJHRkurz4YLE7Dbei7X1CtFHnS3dbK4Q8BAgwwR5MzY",
  "key13": "4pnc8aXhc7691NMG2zC7zyrqQySnapsXBRLd5UBQeufs8nouzZEJQ9d9LsjNjyruYRD5rJgZNSXBeyGggLgSDcNf",
  "key14": "nkZH5efdRdgFFbmigB9e4VkmSGP9AduwRTVAqQzPJgfFbqCz83j8y2PdNi28Mx92zGP6MuBHJEmbLwTxXfK8EP4",
  "key15": "4EoFYNC3xmWFtGk9nwFQ4Ryp16ZxYb9jev1xh85VbMSRBLnwQCc7xa9GcL4VEfe9c27BT9TYRdfUkgpNt5f3UyXs",
  "key16": "3T9CEJiDNs8JHErvhyKeRp7dws9cY3UjAofURZjpskU4Cdb6qpDaLCVPtsyDp2da8u8iAnfB4b8LMPB8GaK94cf",
  "key17": "2CSeAV2SvEujWZAxAJNNVMSVJ5BzznkKJCnKuYxUnn6eaCvYUprdkNhcnjmTrY558m5ckgq6kwTHLE6KPZbY3rb5",
  "key18": "22jafjrbaVVxGM66xsdm8Wr2L2zEecvW9c6SqFt5iaMCJ5jwaqx2qz6LoGujRwqiR8Qypperu6dhGuXck4CcX1fw",
  "key19": "5Tv3C2xYLn7HEXf7MSGaT7X4cJfNApanNBMMkB3sNYwDMjToMTiFsUTWNJsa7L8SBS5t5onKTRJng99qLYfSD682",
  "key20": "aNwkrzyu4r6gQdGrRtdHhQz71Ez1dYYURZMDb3hNf2fu1dh9jHrg63kawQ3DKNz9s3QfVj6DwKTWyrpksJj4uYS",
  "key21": "5jwwKp73YRJUqQopMN3phnhNLnU9XusiqVStCuqbEBXi6sFhEY6gJMw8yBAxWSbmEYYwjh2ekpdqK2uMAa6VY3i9",
  "key22": "ye2GqUpDP6MXFjuta8H1V2axc5MSjarvC9N7c1qPwG2eBSJ8DRXAAFq7fCRPgykX2tSWsspdDEw4CrVoME6SEdJ",
  "key23": "5hK83hM7EaBr7PkP1mzoJXyafPVS6TKqB3PuNRfeNyMTvz5kjVZSbwFLGM9NpYCc8AdWF5313zXUGHGDL9rYLeDU",
  "key24": "hUC6m5YFEJ7p4eY92ZPpdHzkmrDQ5871KibTkpv9tuWG1fqxwiCbutAzH1dqHf898uxwbKrJTJSvBu2cEYttQCS",
  "key25": "UF1bNYBbg4Jzj9A1tsnXD1qLYRDzac3CGALkGaVNqjEVTRKQVxwjpV7sGPFmrSCGEQUyQ3fmAbgbbuhkAtqJdRG",
  "key26": "4d2T6cpeTA6aaqUkG5Bp9YsKs4FBVD1ucJqp6harjhdRvNUWHqwfvnHhNM4WgfTPJR1V3vLDAqFCcxbMPPjVbh1q",
  "key27": "8tLtxU3QuhNvPSoJKjWsvqAStjpHzwGAibqgHQq6MHVemoM4dP6eYPVRpMd6QZWTCB7veaRQkDfSuSaePaFqKS7",
  "key28": "4s5cx2acHP1UGmfYG14fH1uNR7A2WVT6LsWeCLHgNCTkiBaudNC1QwvRq5qhSoLWTBFExoYsHn57Dak27jd5sqCt",
  "key29": "5YwkpS1GwiupmykZqknCY2yr3DuVH9mFk5gRUuNy5fFrTjhqSoUjagqFGksA5Yywqd1XsbNNSm9JTjsuPDW953dp",
  "key30": "2ADkRupYJvENxct6xRywRHZrjCWbjy6yqvbZiQLqHRv6y4ptWuwMAgANC7qaLUvthewzKUt8SLwJrfFLzeTYUj6x",
  "key31": "2LV8kj2VAf18qog5kCrjdBxdEA3rZf2c8wKA1yVUb6rWToPdThsugdr2EndGSTpfoL5egJR224wjJS6bdfcc1FFu",
  "key32": "5UJzsUK1HQGMd6kHHAqAeefimzgE6uTmx9wDDHsatvkZ4vRTF7L5PfoWutV5DBTekfCv5SsvuDbrLGqZKQq6zfS4",
  "key33": "3D6QHCtbDGSprRPTzz4PpsB7VSWJMsX3sMYjSRz7Dm6tmX6Cnc4gDgFy1g9V9onMUssqNE565JezeqKLkYuFmbn8",
  "key34": "2AmSU8BWVsDACJhYNsW6ZjmhRA311rCE3TXE81MtPhtGP3ZUmPzYD1KrAEbJL1G8Z7wqJtz2rgz8JB3UB2DEBfP",
  "key35": "4M3ywaPSn4vLfsVFZrd6MWCHrpQU8f5ncr4yHuUEFiAk6QyKk9sTcm5gprUWvMfmUEYJT258UgqRs7DDjtLqtgXU",
  "key36": "37GKwE16ATMJrwEQQ5k6ByXnkvx93rvaPCfAdYrayr7A9wfGhYKuUdGr93ixiE3RmTaN1pgUbKBDFd75aPgGadqj",
  "key37": "3pycAS2YUAgu1fWk3VRGZmPVDiM74KRSBwccTbSJfPQPkei9JN4XSWFXm5rLjHBJK8f3LSeVVHKUB9GuJmy9UNrq",
  "key38": "5T7nSiteLC8sCTcU1oV1nK56v1gkJReHXJHM8RGGf8fmu69fLmyy7GgX9v9Ybz7LzpK41RKiG34hQr6kBc7TqRyX"
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
