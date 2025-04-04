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
    "4Fh8KJFnyTdgU4D3fuSa2AMgTtozu3G3JK3PPXmy18UpXJDzh3PciaikBxPREeeLV7JvFeFkK9WZRaCMJCA9hpYb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HygrWq6kwTBeQsD6LD7Nz4GB4hR6hDhPxFBEXAJ6Vh5u9ziDYzSezx6RY1rqrrskdNf1VmAxVNcWsjGPmYbvJvR",
  "key1": "pyubymbBopn3n2oHt1JvvDMS44vQrwcZdQJ6W3fN9ZTApdpexJyNBUZBfq9NtQsQZdisUAwgL2Z2RbTbiEqph3y",
  "key2": "R2TWoPsQMW4TcpdiWe5ooSsR9zJ12DAEuQd2LqAa51L7hj6X9aLXvPHvmrnfcRY2g4N2UGQ7ELBVA3zzy9Pu5EC",
  "key3": "chae34rQ1WCD2ymtCjkNtNBBWP23XCHpZfYQV5U1Dt27hR2btDgrWEBfianHYFy1B4VLomGMKde5PfTYkcSNf9N",
  "key4": "XNvQnmxM9s1EcCvWSXmj3H8VNjPUQg1Aie5FkxqHV5SqnpmP1PZf6GbhpafAFX7vXF5LbVy4nCRnUKJHh18nCcV",
  "key5": "4iCfEsD9c22UmkYFm164W8ScENc4mJyWa3AxF947prsdn3ySf3jXsfg7vC5EzLZjdrpjuBAgEGykEXch3ar9ewcZ",
  "key6": "7PCGYUCFa78USPcGumQbuz6S138nGqUMbKySge5B8doBzM1VQKnNWgqCeEhFiGWNYDKb7u4a3EVziXFfsxgaTLn",
  "key7": "38xiwLVAM6bsNEdAbof1pPPAnAWDggmxJ7Py4Jior2GfnnAEPsdaAmHhpRdHV8zRbANgsqP3Kp3n8eZ6aNFkfivs",
  "key8": "3dW7oJmZJag5PpTkiVEp3e4aXqeKSwVfcr9reXUuvAx3ycZhwaj5p36cZG7Z2dcgqEpmuuXrpgNnTBkv56oRzJV1",
  "key9": "bDT7j4Ec65HMw4P9BPUL6UmRbwuyGv8Zhu4zSCMWDg83MKnZZkD64z7LApZt3P8L66aBH6nDoPsq1iYRa7ncHm4",
  "key10": "ZZrvXzzRPd7zNQkHPmhYjWNYBkeqEMisUfLfwW9C7tQHtEQcUatANPcLaQ441AXEURWyWpEMFKeS2hiyHVgnnoP",
  "key11": "BGNZSjDJjXY9RqiVwTymczFRdrk5hW71Yv2VANHP7Pr4aZPdTVCtVfJzug8v5yftCz8AvJ8aiteCoh12VbBTJ2r",
  "key12": "2iD4hRxrTfPqt1W6gXhcByYVkXD94bncJjo6m67h8qCstSsiarqcpgzKcSgc6UWATjKXU6AvXRo1TofcuvogfoAK",
  "key13": "83JTjuqDz2A9iDcdPzL8SyP78fGUrFJM4kaeU2StGcVRjbozn6r2H9LDDXnknzwQThAJ3nYnsfgm4Vgdf4LRfVm",
  "key14": "3G5bN1LjnNKxvDZQnuGsx7LDrQmQ7SB6Vi6SZ1qMizaEmGUoxkyh8ReTmYYL5zbN74NiHFsZECewkqSnoYdMCaTz",
  "key15": "2XW2yUM3WxbpEzYpZxEJagrssG29HbcVgq5CtsqDhR6gTYwdFaCQvFhLVLJPVaiAhfMdbXjGzzwHMYwZmu3Jcvjk",
  "key16": "4TatTPSWGEwW68TZT6JSTeqYDQK586bVjoqDHU3eVyyYUgvNfmhnHVdxdqqappcgkxVgAxPvAEMEuPaiooM6s4Ea",
  "key17": "4Fk4MG2CKiKB9G6gsqETk9q2G2FTQadPxMJkoU487yeeceRnfAkUyPFgYJ6jGo2Y3GVhqa2K7H9h9vhcwrMCyi1t",
  "key18": "2748mLQatUbZSnMP5qqtZytxeVV5srTeiDCmiMQroVRBiZ7uSA3QFZ4BRJUA3Prnhdh7Dfuy52a4tjDthCyGMcPt",
  "key19": "22nFVhxEEt6yCZf9BotCHDvtjrA9AhVSjk9pwizaPV8V46bZvVwMjb5MPwHjA9R2ez8HiM9HB7tWY8L2pW3YuEyV",
  "key20": "37ZrFyg1CPPGQY5GrRp6EBhzr7JwuFokm5z4GkYk9icnKaUaYXGa7czENp3z7pbrAvhrnoedqj6fi3ThPd6xeddH",
  "key21": "49DiBykcuovuu7YGUsQ1chEybDipDGYWKeS7TabH7tjYvhQmJowRneSE7YwHQ8PyYwm1K7Tze4ydeBbaN6kG1gTL",
  "key22": "MGANpHwxq2PHd3jozKFPsAwvCRW5UrV9j7TK8YSAshraNeVMatK4yCXFpC7YyjbY4g6XCznKEX5rrgWMwbFMNsg",
  "key23": "gRRjsXo71WcQQG7Wt6M7Fu1hSdKK7mUa5NGV9QvuGSKcBbNXVij283qxUR8ZrnHBbqfQrGBYSamdwfoMXLmA53S",
  "key24": "2tnAc21Z88YKMmGHBPyGtTTAYAAK4BtdSrsG52FdoD2jNLqrKu6BQMcJNfjTqaRzRxVdqmB4J8E56ujws931ohwV",
  "key25": "29k8uqAMGrgyLCkYmbFbgV5GVjakKag38dVP8DXaUK1As2a5udtjquANB9WZFsfYjuvWXQPTCGTqx92nGAPekBTy",
  "key26": "EDYgBGz4WRsykw9Vk3kM7G8uvMc9tibyTk5TpDJzaC3DUpMiNkd8mi3Xg41bEnHZU6d8xfGEK5ds7jVZXsYpThW",
  "key27": "44uEWWHAcBZGZFDJ8WwDabqrB1BQxBT6A5UZtW5jh9GEstUdAANcxovfQBdcbPa2xejSuptqXZZUEnwcqiDFTFPN",
  "key28": "37jmiojkmv8B9yKsksSbkMZez1pE1j22gBWWavMnMCTbpjbGBgYFvVh5vvQcaEtjXDjLQBPT32gWn5qDyAA3qJq9",
  "key29": "3d3Li8ToBBovCPBi6CKGwT3gLQtxwz3qF7CSx7so6vCrKogY6ptSP696PHuA8okrrBkGvVTQ6JRiVmEzjCCZYb4D",
  "key30": "4A9GX4qZ1fkYrrPqiTuqYZABcD7tX36zf3772rXFyAp7Wh6XzCoqjPhTejQjeTRzEzHu7SbGs7R2dGqfDkjPjtnb",
  "key31": "AwhoVgaq7zQV987UqagRxxWERjbP3YLa2U1wEiGdkTFtD8FcyULhiYhdGpsuMHMCN9kJYMVS2PadkS67SPbCFie",
  "key32": "5WyN2BhscWpSw6u41io7GDL4xcbB9WC9DRMQngJqJMbmhBevriWic7PwHwY2dywiixHJv5X3hR7uVrGEjjVp88zP",
  "key33": "2LtLeTEt5bAdxMxMa3ppW9XrvfvhDnYbAUAz2y1uWPdrMnPC96HpRDLKJRsTFnXbYKDMRyaWD1gMtRiEAhmbuB6t",
  "key34": "5Qqz3i2GaemiczHvy1SKgtC42LWUUUajn2AiwRQzLqiqdpiotnZ1R4YjELm4Nge35yLmJyLggB2xs1D2BRcPHBAw",
  "key35": "3mwNE67jZcH9ki5REAVtcg6ik3w97DStKUABpiXqAFwtCup3Bo4kTab3EhGxsVhbxGiwKDSWMgeWyUvroYCidh7r"
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
