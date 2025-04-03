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
    "2XsUx3xVdZqnzSumWeGfjuxZYG1KbgoBZ7BaJsR4hNdZCYwGHqqzYtL3mRmfZHrQ2SzbcYJMQcJ91YpEw4AZ6pjr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49bAuAE4S5kkxFyeTZu3kSfYQhP19rS33iJBsKBhywHAsuPSx1aDGBzhGVaHPQtrD1J1KEGyqAPzmSh8ERFroMVS",
  "key1": "5VvSCSE5R3oco3kkrPUsQ3z9Z8D1zgPJtTXQRLV7GbBFXKV7No4tNtVCeRadz6B3sFp7zisgApsDtPDVEHrgbYAP",
  "key2": "VHkL2t2vQ4pacwHdKufoeYadLK5X19eA9m1HeSwHi4ep3gjri8xNagfV9kdScw2uUjjK9X2XaezHVr1kvufKESx",
  "key3": "5HeF9gSEsVEqTVTqbUk28D2c85o3UHhcxdrt2DKcDnkdzeYS3sruvGfg73sicL2rhTLFL7w5LySniT9cSapMtc79",
  "key4": "32Xs5noJCMEK91VU1Dx7if2CkSrqrA3CGmQPDJofW5LoyjT1Zu9PwVBZVdC25bAyJpQZJjzuNhiwAbvD37zMUFx9",
  "key5": "PJgbjrZzkYvtKRCYEZa89cResttC8uZ4BK6axB4t9W8er69teYzGgmQdNL9DrAbK1FXW9JYy1M1xhfw9tJcu9PD",
  "key6": "5MgEmEsF7uMkNCUc2Ufnn1dgUVdZcTKNi92FsEBsWdj9PpRLzMr9GFqPYQD2Q6K6vY8AwoxUoSqsW5mB7PWQWTFU",
  "key7": "547hFFcuBpXZxBeSs5TN6HCBFsRQoMQqbyDEeYWyRaZTiQ7QuoCbcoUzFq72z2mf3qsahdfcSPeX8tmAEdauwjWT",
  "key8": "425J4ACDBM9kzjWWF3cu8nWbFQ8GrwiKBZr8m4sjwLCdCZ8Xck6kdKx81z3WDUD1YqGgLqVTxFBtALRjDzno5WcP",
  "key9": "49RuhU6tbD8RiFMfg62DyKUNZscnHrCvGxMoxiMhsewtYYPHNiAvFjVLBk96ZWdTEN5iiscp9yh5crFJVqj5JVc",
  "key10": "5V3XfjHeAXxff1V1UHwNnxg89TzrZ7HSvV8xLb4Wwoo4VtbZXheSkFPQE1NSGep3muK9AMG6CV19rzCgg3QBdq95",
  "key11": "3Cg2KE5Po9TmmrYivLAHVzMv43E2zyZ3B8fTRVuaijsJxHncRaEsKhGgSgMxfSNndZ5hxLQ2AzvszvRgSUjX8L9u",
  "key12": "3CdxTsTaot5srw7LAd5dXJYQohtWLEGbJyGnruD9S6i6BNQinKhFXHPHaTW2i5NbaiwcwpF15U2EaHzxrfBFmWux",
  "key13": "5zcS9Jc7kwShW1SFFhuHRBUtqFU6HbKRDPEHyVvfPP45mfcd5DrAKeRMqiLkbptfv91QwWi8csBohodCHchR4Ci5",
  "key14": "4qeTXDc91LpPMGaYJb5mBaQCaimNtBsieoQWtf26MF4FH1hNLmmyjpMFRzFzxZrDqfgH37ozs5JSFYbBtXsmWkuS",
  "key15": "5PTUzzMtRCg6KuF2VvK72hLiR25hKYa3ebfmTsDTrc4Ri97PYCuWHyyg2oXnxpfcXn2tPDe1ko3FRneNDNySA8AE",
  "key16": "2P58y4BGA7VNhdsPvWewLN6EUZnvw3TQZQqHsTmAzcPcmfcFnyb267od6CpGneRUx5PhQ6utjdb1HkLQwyzKMBQS",
  "key17": "1x1AYMRjurjgjtnLoAJVDuhWryKFgpzt6CeCFkxuBeB5U9tFprjtVVZMFedw21U2SwjA6npj4MsV7opq5Tu2wGF",
  "key18": "4VzD9x2ucP6WqEg5GyEtEbwYWuvhKEZ9fCtzkBPdD1e1mSswFd8e92RvuGqqAtGM8ZqpZy9rgZbxgnyZJCWsd52M",
  "key19": "8ZjnL4Lisds2ynwZvWn5XNgJmtAR7aidTdUn9vCoJAyWtoEiYGeJp5rr4BRv4XKvtbf4BStLuKF8CV5D7CNv6R2",
  "key20": "3kPXm7CtxYGkcN4ietEiA9rwHbd7wgf4betN2khRksURZom9RnJVP5yQkehhh6wCcL8JwXnP1eqy4FzG7nWR2PJo",
  "key21": "cYfS6JpPHPY9k1yYgE3A6taAcSzdpHi3Douz6p2BQ1LFqf4YBieioag63Zqwhqmn2duRhH1cxZZRPuCG8BgaRF9",
  "key22": "256mNAYawdJ3rShX8tuE9ZrdusHconvMoTXuCFWJp3VArD7Gk2ukH9ZLRoxPmvcri4zHCyTcSuCoqgKjaHkN1AyB",
  "key23": "5VLvsirGXtrbrbNWTtxuy25EWLe9hTiSAjWravXMXwahUHSrwfdTpQWijA1abfWeYTxtxpBgziuUgnbpjVd7kzsg",
  "key24": "2xJQf7evkfqXdJVGaMbArJVcAeJU1gQNWdZ1JCxBA2DPpx6fBA5Ng9FsJW3cmaQVxVQrPxt9xsanR7oWmqXC9Auo",
  "key25": "NDjVUMQCAoVebwzVUG11dmgu8Ht86CBzqeU9iQmjk8u1ndgcfsGEzpUqekvX5PuynYo1oci6eYdjPoqPCKf6h6y",
  "key26": "3qT4HukdjUabcUDPYaeNuNbUVBVfBFtngqg68ArDkEjJi3fSKdFYXgvHLW2e68Q1fdc5vEPvxewhtADhaT5yZrTr",
  "key27": "21RVLCawNc5xWgjeHhLP9iz3j8RmtCpZKEMuHbsVYzy2qDr68MRfrY1GtFTyzyZBnqT4tjbSu4JBEw21knomR25S",
  "key28": "5ZBDYHZegmjc2cCYgfGLTUZGYVNrxy8yoCeZLknQQUFrDa6yeWLdi8D9NLf5bD39BP7i8347TVusdURjnHPUxeiC",
  "key29": "48YSLTRGCYNMWCDtEk3yuNbxK8M8PPsbuKrWdKTv8jE6eHy7XAYywx18Gz9tUxu5vjEbXd6bWJW1sq6A8hoqCvHo",
  "key30": "21DZ3JRQN6safiVYFPgwvtnFr4h2kDcidVXwxjmsNKLPgSRsia617PrTNj3q11MPivHYYRsd1f22VycV5igUcfn2",
  "key31": "3Kuve2xceVzbQzwuzCHgdRXxuqSqpBka9exfqffpLAKAV6koDcjfu2y9GYLZEtgS1u4CbMheasKGRf3B3KtTJh4z",
  "key32": "3qRxtnqNHecDJ1BSaxbw5ML1gMecdadzzunoNLJ4vZTeyXKVNE5BeR6RGYXMGndqD39DgpFaenyFHC5yhb7amXMR"
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
