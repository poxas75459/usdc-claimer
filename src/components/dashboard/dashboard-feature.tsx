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
    "2e8fVj3Gmgzax12QrNNvsuW5aQ3ae3v9pGnQAF1kArH53uh5xWEozkjgKruhs8L5hmW8aHsJ1iAZD8zDne7B3TNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t8YvPfWQ2W1RaMkjB5mKPfobGq36xQAYWqcMKDmPUVvzMbVHxut7EUZBKfMGhvSTVgvD8zSEW4fPzD1UvdxtMb3",
  "key1": "5GZxUsJ1jWxjWkguRT8VJhZZPz4vukF9uUamVuSL5FkcHsnP184vnXKJgzyvtUTsMWGQeTGcnBx9ifbtycjoHv5P",
  "key2": "yXe3B6PGDofvaXSVRTWEMa6DmkmE18APmLzRn9qAunMNWSXwrTLFPB8unQrGnRCgCJHntSrLUHfWtoe85f34EtM",
  "key3": "2jDHMHh3jPp7bdk1NMiB68gxtuZEZh8CY3cq9UmEcjrGRJg6GLphamAx2sX7qC6dd2VnwRMhJLFNd72apgCLxCM3",
  "key4": "2Yeng1HXmxKY4oeNj6AuhxSNGsLD1sDmP4wjseasaTT3AyfdmdrN1gYLx7mpSbWgCQmmVMpXWbDEcAa5wXrfLFUD",
  "key5": "42WvLQb54KQtX6PbneSeprz8pAMsAmFf8WUgUdCMPki1hhbQFRd571Qk7SF1ogh16Qo9QNJf3gLg3aAvwFki2p5x",
  "key6": "4EkorwvrdQeoYsxDtUAS7D1JysxnqiGwCp42Qc7LqdK1VmD6rGikLYWA96AD4oxtRQxXM3hro1EUMMWdmEP4YjBT",
  "key7": "3cxkfCK6dZQUcXTBStspcv4z8iS5ioDps6BjMJUGn6k48EPeoWjpnaXJsx7DJys7TWTqbWGnA7Cxt6gaixemW28q",
  "key8": "3QdoMfRfKXz5dwiuDdtNNVHWsppjzSSHsw7MghbMV9XV3JqcAk3URjAHuQAj7DRPmAEBw9A2DbiNPCm2x7CCp8CX",
  "key9": "2Tbna5uc5j4UFu9KWSfBJinXaJYLMKcfrQQ84r1tSeD4BmKA7PhtB5X7o7Fn444wcWjqDTeVDA1nhsP4CKs7jpaJ",
  "key10": "xpdMVf4yaeePMmkMQ3xscFgndqgiw5VHDJXe1SXmaPboZaxQMsSJhkutrBUtddfAiBbo2vLheGBPNm7RJE7vrWa",
  "key11": "4iwcwxTe8LK9UeNnPusZtSp3cSCGP7FCkxeSSyomDhncTDErmXJQYk79xibEvjqwKjZVeeXRX4Gepe27mSAVc12h",
  "key12": "5FJW6SCMi9dtLCRTJCsWJ9JHE1VDfBYPEPnQxtTAQhLLHjGnxD7VwXUgPV9NLX9gMmRCk6uhpUcGgXfqfmmgWKhU",
  "key13": "5E7kDt75iPKDQqVRvYr98Ecx2WHhmmurRd7VzjMUEZPwVkqXNV99pN373TBqT5Lx9dfcsFoWJere1H9U1Bew3p6m",
  "key14": "5J1fPo6cmZFw1mErx1swCtTk9KiymTvGb2Lqjf9NTVdK1GszvfkmevqfvsCggrQKpJxekxKXG2pR7QQuXuwbTzMX",
  "key15": "4LSqq1H5a2ASLqZSHD4eZF62GVc2qD2xuCefDVhzufUXwp5ARoFH5ibzpggaQZRx4f7hJNtvzHgvmpAcTy6c7JPZ",
  "key16": "4BEHKvXCycsMrzKi1PXYHqfJBTpWWTdmkHh7diQPH9Yozh5UJrTfGssQ3AYEeb3hVCdK9VwC1jC6YFxTUh6KXgWP",
  "key17": "4KVUGPSUCUWJETXbYbT3AMjjyMM4bvPGnLSPe6cb9vM9uMpCaxJCbANkDYed5eLoDjhNbzqZuNJwjrUVb81r6e2h",
  "key18": "67S7JjVmpa2DgPsm5MDDZ4MmnkJzQfi4Bg543jBPD8BWPRSZLSHXLgpCdNXsYaSfkozHrpzbZR85xNbbqpkXi1hw",
  "key19": "5GnqbNV5mZmJb9Rzwzm2chpiBscuMHuhVSV3ynXwX8DThwUizugXC926F2ZK5JYaMq4VgUHmr9GLnL7dDtiKozPh",
  "key20": "4cH1TYCiJScjiFz8B5WVC2HLg5eMc564BA25aQ8LjBAsdFevmh8AscpaTw4ibV46dZvkx1ztwpzoZWvFygQBFUv4",
  "key21": "2mtrbpxUhwdxKTh7CQj4v29HtzDNTmME9C1sFSUECyEr1vAF2vFim7GFRBzJ6HDwbs7hCL2uVz1gXDtEQjzQJJA3",
  "key22": "5nwPwsFbbzP8kJXTF8JyNsQ1iPxuJ1fwDnMcF4ChW49mhcLsrwgoqTUE6TAvRvtTZUsPLy4q4ANsoCcWj8CqGGQk",
  "key23": "5fVPLXG6UfvQDu3cETfJJbo2Fdkzb4P9D5Y7aWF8DkhxzfeU8665CRuq2cbpAdK1WXefQTBeLai32eZKdwAYsTst",
  "key24": "5QuWg36daH1nkJEfsFn9WpN4WMnkoJ38GLWkypneQWeTe11qaKEWCD7dvLuLt56UneQ9eL9i5zsdBUtZUnzvwfuB",
  "key25": "3G4VUaxMw7EbE9Szw6HSbwPLyF92MxrhMvdV6a9bcYbEqEf3vmXjf7ghQRQ4aMjZUePzCvLViPmG4RuVCq14naYp",
  "key26": "WKGGTz7M8JFTn2ssbcqd1zKxsUEJA1tgngPwHnudKWe4EET1FifQt6FTW3hs3djYAykpkPDLhYgQUJnnm5yBfLA",
  "key27": "2xqYavQqMrA77VM1U7LnLdvWBNVmKgtVG8Zp5FSDcbRweMXy55qze7HLBywEkQEhRibsBiGKEHxNQacYvNw61GuN",
  "key28": "YwL19Fdmqmy5QaRw6e8ZULVSFYsymRDeAV3u1BFAiibYs9TAMxpeJa1sfChuQSWuoqLTX19oVLq7vf566jeuQUA",
  "key29": "2smsUUY77GUHna88MVkwLrjKiwCPRsT1Ft2bd4z7GKW32MBLrsRvyNmzHpVoUxKs1Q5PoGjPmYC9Vk3akfb6H8uz",
  "key30": "5grvgUQK3DG4SJStvVRGo9y2gPUyu5znkMawyogWs7YjgDXSu7Zf4cNeFqk3wKg31zGBuBaNnaWreYpdyFSTdeVU",
  "key31": "GppMaKcciuqnhBxxGwsmDQAma8rQ1uReU9z31HAVt5J4tmj1b7wpTcdUb1nBE5Egxf8PruhKsrSUh7SsBP8X4Qu",
  "key32": "QYYF11fgnsSgQkdaxezCP2xPdqWQWQFbVSwfaKeGpHtv743QAarWi9qNoW21PnHp6oNwUDbCpXPFUCCUctNg2aQ",
  "key33": "5bVeDXKT7QfRD2TQJvi5cDW5EvuALMS12mRy5TyWiaTAnkuWbs6qabdVe59JTPDYRunKyvarJhdA8hvsbKsvAhhm"
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
