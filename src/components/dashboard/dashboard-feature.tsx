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
    "346sabEsXHe5irHPh41N4PPky2jWkv9kc7Tue32y8V8N2ZZpSmTUpM3nypJcQt3T8Q4UmXwjiXw56JkbEPdE2wnd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Vsx9hqjjZGwwgodtZguAsv3xexRd6aW9nuMWU1q2xoDzqhypmo3s3KGuDMd5dzMfPbJgNSmjjEAeD9eC9A5Mvuc",
  "key1": "2CHaxKFkRFVenEjAkSie77AvgSoMm29AxN2R9JyDnG7xpmJgFV5zvsbKm1PsaRzkrJtJhTRr6c45dv5KyskLunbk",
  "key2": "65DjYdSBfpcmwBWoUV7SZvToVAevb2KiJRgLPYQCYcNiYqhn177umzkYdLjqSja3aegh89GQfies3Y7gWpZbV4we",
  "key3": "5UHLbSB1mab9towDs7ygLqJNb4Zx3W5Rebpvh3xNSFTCZzogt9NrnptTSY7PUvLMZSwtrjHrqzHAxeFC5rriYnsT",
  "key4": "45GVUzjvdnr349PpSNudziuZnAPJ1numEdxy8XKqKhjJdZ22qzagBXvd2LVui9KoPP8Kq5ExECECnuBLt2reoS4p",
  "key5": "4gqVPGeYfEbBBNWUtVtjBuSK2XdE1EJztWhrAEMbTginS4X8R6U7g4Vz4vedUjE6LfFWAivNsxpdED91Bs9gMAku",
  "key6": "er6FpGwxVJNAnp8RznbDiac7DbkSz5UN3hrPG9nET1SE34CEtzYa2yyBfBmPC7RNWqDV8hKEr3qS2gGrLZFQ1nR",
  "key7": "42M5GLg2VorYVyMsX9nnPTLXqsarSZRkRgJkkYHj3K9qUzHd59pCDmh7MxGZvXiM2eeEwvcjGMEATBWgqn8RrXJ4",
  "key8": "5xSsSXZ83LLL2E7z35HeRv1xZXwuSSb6eG4N4qNhHkvPDoGepq4W8SDBLNZ6VSzgaQ2niKrQkTrJ94EKmVrbSKVJ",
  "key9": "2iXFnNG7LhCe8Vn1MiAYXDJvXRxynRdSoi5mtyQmdj9umJwTaqrZMQc3t7oJaQJEq3qkKeRaPLRVkLgcSadHTzTt",
  "key10": "mp7x7dpFdWm15Gh4r9wjn7MZdas2qKGLHNFuHCrgq1ryQaAKDVLwFV5b3Ty3ZPMMnvTxRQgWguw281YBdHoBQ5F",
  "key11": "2rrKp3fiC1z6pXPS8zbvZ8RfH4Bbd3w6VmwjGcM1wYNUDKBtshR3MX1fmJSs9ReNAL1hTMEmjew272oDwti5V4VV",
  "key12": "NbBvs1DzhRXNwCgCPsfsVrQXks8G3cMVJXaLPb39GV4UxEM4CcnizoUXWmyD8XXfdHUpU27pwsERagmkQtiLTDJ",
  "key13": "4fWX9BTSowBEPc7nEQDHDrcFBuWpsLTVjJENjrpqjGjNXa6JKXFbTKBhn8MzFJvmcnXkortDRBW2VYnWEhigpQiU",
  "key14": "3RU683ZAUgAdvYwa2HcX3EqBGjW7KWcBRiFYnebVQYLiZxcVrV8qwaGg3rLBBqtgtquqcLWGScxAzUwkZknRA6CM",
  "key15": "5NgkqEFZuN8WD9CisCDc27TKqnuKBFVckLqFWnRiXzRQjoT7itBbTyi2PB2PigGQJsVDXtLPPbxLusLb7DG7251d",
  "key16": "tSMUhCBhhoYpyqTHenPKw32JSWY6qidnHVpWuMDZ9iEf4jMfKPUYckrNoiut3nmdkupSXumQxA9zeVsDKw7qr89",
  "key17": "2pzW78VoX2okDNAn2uBgvTZcb1myN41wxniv3XUvjFiKz589KV1YMPgA3gDxnwXz3qGLpLNtVvAbYbo3KvxYMkT",
  "key18": "3K4J6Y5nzUoJNZ4qjMLdnFq8qt4jJVxJMdrYwBm3pKKFTZNKmXJucri9SGEzNAeYCGQVjhZpfrv1Xrbw3e2mwrvy",
  "key19": "qvxQVYDxq4vHuNar9jwWNt2UtSbTrXzK8CHmeHnAcCUFbygUK9UWx1yE7xuoCkZGPCMh5aXhdNp6UpBLhPixivb",
  "key20": "3k2E2sbwRtGcJpq2MsZrA1dhGgsQZU4tmymCEaSXs2coKQCJvk29kyTcDQXmw7Y1ngXHUwgH43uz2NhFPuzsoies",
  "key21": "4yZP1Ussk65CcdKse3CNYiZpMgxWokvxCbc83AhBsdnUyXouBnpzrMhbxN9hdT2wiEGGFtCLZCkwcMmgk6qsXqLB",
  "key22": "3m1PL1kVMwtBkB8Hgakje8yRHNzvzyF1mSCTz8wtJaKMihtj5uB1oSryXtYix5pUfZWVR8yDAJg1HdLZqrJgBuF",
  "key23": "2JwrGisptz8puoqKdbS3GuGLBcpcHKZsGCWXxU6LPCqRXJEHtyQ25RXvwdHehh26GPDoNmnNcQbvgS4XmC8AwC9G",
  "key24": "2YpEVjY2Gp7iqHE7yRKKaWNZxHRHNMc1WqMx7mx8PayHveH7wNmhveXnsUrMHYNrTqdKpfiNVS5tcoHbRg6KDHn3",
  "key25": "4sbybFGQpJmUvGP6WeFjYN3KREt4dhCtLmFttabKvdJys5SE1JAg4noCX1ov2AR25A7tbGYtYMHrMe7yPCkn69zd",
  "key26": "5aL9J5MAiLY7T6EpjwGt4sqirDUWnNhGLCaFsb44J1ruQuVU5g5UEDy4UJ1qKLwSBkmYji7k285Fa4QXSdhyjJsf",
  "key27": "4Zs8qoMpFTwFM8YvNjAVoCshnHpfb1KRUQ2T4SGosTS5P4ri7u1mNjLNinyRsLRFqUiCLhErV8Aqauzq1W1FDpJk",
  "key28": "cv4qYAJCbZRA7ed2YCeFS6ZCoBWPN32u3LYStc617xC1PFoexXUSTwZYWqXxdohqTEsU8F7geWFmkHZX7UQv1en",
  "key29": "2gGacLqtEwcyi2v8PQNMLsAYtsHQ2E5fwLqAHZggwuD3Pgsns9w8ZaVKtmMQvGSHyitKrpT2M4ASNVcq2JGkVs6D",
  "key30": "4pNHm5uAS3Uc9sTBxGPSedtKmCEA2sjMmuFRCKwLH42xWh2sK2e7q5cszW4PoMVySo8Eeo3NFQ49MqrQBHXP4hRj",
  "key31": "2gBnrEbVneGs4PpejtVfCu7ehiro23X7afvqvb1e9q93ynByhSGbXdT7VK2QgNTo1vzLSJaYPQAdpjU6fiYRtsBX",
  "key32": "icH98xpK9hzfYxR6NwGrSMKHUirqQuUHdwknvYB9V5nMP6xhBMW2V5Gwf6bZFVqFrPGrYYzAWLktxSfbiJ9YRic",
  "key33": "3kDtgYrQ3d61TKnqwnRj8zmW474gTDXc1JPVCcb8DL9MNj5ShyAdv42CnezDm7F4SXBF3APnMR7TszXKGsaVwtaR",
  "key34": "2MUxy5eTxpN6go7iWeL6wnYEdujts4u5L8YXRp5EZVetueAavbE4wdqCaMo11zXUHcyLfUa8439jRhZBaThK4ikJ",
  "key35": "2jeYEagQum8JX8972975xmJryJkqGy5HGGmQDUZ78DjZW5G94A3DKdAhz4TiN3r2Y7cqTZU1sg7C4eryJYijEwdp",
  "key36": "4WYSys9gNTKc2R6mk6ZfcKaBVthr4rXnUZrhNjkX7yaCydkEVS7dyokq3j1gn5TS1RCewN4U2vjxZuAnDPhDEdWj",
  "key37": "4GFfV2tNG7R2ZYdNEt4vNsy2Etabh8gdCDdioMKTTkHWMQ2acwvnFZbWyKsdWK2uuDdzUHf2EKp3rwmGdR9vMaoG",
  "key38": "HqanEzGvtvPXx3gWyFantaDGjKMKnuz5tZDTgzCYduPkQn8zZoP4BWNLvMJvdTLaQ7f2hAFSdoAjwrK7z3rXB1g",
  "key39": "2cqFxBMTjnXyniVaRp41GeR32CDBse3agsoYnwScdCPTXjU1Hvy7kLqGRvmJKDeFUBptVQrpJD28yo9uPj2wTmpT",
  "key40": "3H5NLctmDTanor64JWvBu3apa3ZYp7CuZKxQ1CfJ9FszBKFGX9yWzYRN99N2HDhhJYKCV3vYZzkC7db1zjpxxw5a"
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
