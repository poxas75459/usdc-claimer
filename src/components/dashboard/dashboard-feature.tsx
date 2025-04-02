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
    "3F951jRsM6d5yhHokDCkibj4zVBFgUGNHW4rsUWkXMpFcztEHHyyQ6s1H1Dg4qSU4kQuY8ErqWkdvxavqWHhPVzT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lw8R1DkrMMZUFBUqDcy75de7RSQg1vDhxSQQuBWU9uwF9zbKBzQ5RNm64HcxgdJso11aoUHoMP3S2erXpDgwUSw",
  "key1": "5htdzNMrTuq9pbwZUYHrd279F6K1EkvrwHrnnqHv7VRubMf5EkAXj35iyeyw9oduYb6g9i9cKM2qja2ZVXDfhaqu",
  "key2": "3brA43X4aF28F7VK661teKMV2fjzYByqzyrYunNY5pb1QkvwhQusffxLbXV3re2TDvEofHYr1LYbardBqKBU9TU3",
  "key3": "b4WQRSYv6ZM9GHCGdpHHUZ7jPQFf1aKZVTist1aNsQo14x55pYS88S2fJzCrcBnkdgcu2dxbDdJ5Z1aokHmQEXG",
  "key4": "5yvk9UBC8AAdHUaV23aCbmAeH4Md11t4nzTsoQGobH744PBNBrrH2VphdYGUcLD6jLSVHmv9CpUGkimTVYXWvGgk",
  "key5": "2WbstYfVShfGb85QJhAQ6uAPyaG1yh4tdYNLo4zU1VEKfGY5NdhN1iGCkkPB2yb5AbpXFWFxbL4xgdcSXVu28EMP",
  "key6": "5kPagWPsYbkDnGHmy9cxtb3J1DkX8YQ6mz8rpZ65XvQc7YEhQNqg1V5jncK4jcK8GTgeEZG3335fJyPHEFhJPRjC",
  "key7": "4QoWsLN6Mgxy7y31r3Uej4bEC3NQgiMk5D8ySjATpqGrxAdcx5GcUwXTVoVh4gAJnxEke8oocaJJ8CoMrkS4iG5R",
  "key8": "4upqEnCrgzddsdjjUMaT7AyMprESp3pu2BfgKjU7WvqqJ1yKYkdy9uhxpzMqQ6L8jZCtqc921Xxwadn31C3tQnTk",
  "key9": "2iacpEjPdK64snPXorv98rQB5sMktvgk5vi2HiUrUEhaaQp1H9t2MJD2CKmBFYFpGS44hGVGnjtAjPcsRpGPT8ma",
  "key10": "4RthoSsUEfuep9UeSrn7ip4icEPUT3K1jvUAMLf1zALZnbZynupmGcnzQzupwK52M6QRRU9i1awvHhn2vLbQWDYK",
  "key11": "434Bga1tFnVQTqmPXZKtGm14WyNAstCcLz7tirWKffEawFmPLgt2Domsq3KHujkHAS9GdhCxeAyszgvCKCMdVw5B",
  "key12": "Fwwfe9KLP7sKZ5Gy3EoFmQt8b8zy1uTivcNtE7KZ9SYrCZ7yaRBemRzXw8vYtbeZ7pD4hJnpWusACtfdrnpia8N",
  "key13": "34yrRyStudWHXKBbTd7Ed6JjP1388K8WQZHvr1VkJRupf6dj53fihT4SpCeZfqaXtRZju2dmaVqyW84EQ7ok26Fu",
  "key14": "49s4QBLMF4gBPXk5fuaPWcan3xWYnJjrjMMdoBtxp9KsYmpxPhdBJgB98H2SPEhyWgDq81YaG15WE2bt2NHfbZ2S",
  "key15": "4YionzCm4fwPKEiaWrAQg9NQPwFMbLbFoRgLAxvE8XTj3aUa8em8iagKYwMxnE8AQsF3jXRwYPknZcAEcoKoytKy",
  "key16": "57ZTVQQZpnmhHNHwnQNxug3jjYWAJazWuja5ZA6Tb95S9oskiBpXjoZ8FpwFN7VA6Jid36AYA4TcswLqHcxh8Fez",
  "key17": "51ponSbdkzfzCJeZ4f7jttwpza8cojCuBtpQndDeiXEx3gd24wuU7yrJA9MqMcnThXYhjuznRk3J4xRvRysnZxXq",
  "key18": "5wKBPJGcaRCpV2DgUX8JKyyFyHaPga44JHJJsF1DUiNRs1jsNeLM1HUp6pWAYeAuqR6zmbZrLLUEjpHsJdUDu3c1",
  "key19": "2VjcVqspfQLcL5fCxeCZCmTy7VefUjxFcwL4cmsUHWRLXodbLvPx46DugrRmMbqe65kgmxqPhJ12Tv3txrfbgsR4",
  "key20": "58Wjeyaex6b178ZLJC6BcwXvUuErAmt2mH1NfeHs2CfnAi8XpCcDDTt84pKtZDWGTrRckfHXmXUtGSyob3huHJnf",
  "key21": "35HCvfNosLM7abRRm97MgrcJmjYw1L4SJf5AuUwpkYRh5XSBWrUw2tGAcbPc5nJshcpjGVR2vvvRXZefizsHZoq1",
  "key22": "4PHcrofXgKFJWoTx4kCbzBJ7fxFEVE334EAbFYSCtPKhxbyEMqjmMHShWSZzwTt8jWmaGxe8PWjLJuyzdswbUuW",
  "key23": "2bEiNRLFcV5pmsYSU6RtS8ACCRsm7V6JmMk8Qvcxezdbj4QHXV5JHx6cWfe1qPU23MwQ28SETeStskHhmEzrtUmv",
  "key24": "1npWe9kGDmmNncVvWJSY329oxXHAPPttPMfui3knH9JoaPTUFfs8fUwkVfogy4GQT7HfZDpT8dSEw8MkK9RWbsH",
  "key25": "3PdNNchXUEueUD3P6ZS8t4EmS7oW3B89Rmm8VbqgeDCqV6sqzwcAzYh9rFWMzw1Cvr54eDyNrHJxaaBAK7Nnn4yp",
  "key26": "8uTy7enN3TfQe1WoER7i2ckCXYUxrDrkQe15qcozsrJ96BmwGZ9vjLXhBJY7EZxG2s3udFkLkSJ8HPfETHSbXGP",
  "key27": "2r332PgKyuwY21eW5vmbMtbxHvKdhehqaLmXgh52tWAK6B3ityF4xnKTVfi5oWboXYCHSD2QsoQ5D937R9f3Sh4d",
  "key28": "5VWPXtXuKYoZUJtFJawVsY4H5zwtUXh8ch7Wf2vXbf1rYH2rFWqwph4jJ8F59LV4SKPK5StPiwsz7XobMVs9MUT",
  "key29": "5qtrdzijuWmry1GuBdWPXzY8rvdpCHbg3ZwkNpEM37DnV2SfcmBXNw77rKE8mpb6Qbt4cAUK2v8fSCU7u9ybxjn3",
  "key30": "4rfja3MHN6nM8gdqanLhWxSSdHHkhKkvrsL1yXTnNKqc3ew2MWZVr3iQ9Npih4zpUDVmURfCvHkjoQfgmGUbvdYQ"
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
