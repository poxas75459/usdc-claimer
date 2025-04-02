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
    "2QqSmZqDAqzFgtWy3KCwX5PehkzyosiyRCLs9w2BiLZkkfJzdehkEt4FwpTFxnP7X4Ntq8V5gWTEPmtq6kpz7ACB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SsTKLkt6XkeGoG4FQWz4zB6mU9fUh7ev5nmqwyA4rkPeZS9JgwyhqysPmymFiEwBKVmG6w5pp9vMihGqD7GsSW7",
  "key1": "2efQ4qpvLCjP8meogm3dQv2x5RyvvU8a5pwxUNPXA8WDYEtZ66pJBgJSSJCDzJMj7bsaUS6ASH5Kyy9qPe11mMiN",
  "key2": "3vxHRapXSLZFVdJt5BHGviLhmZvAFkdauoDMVQtMThsDqTwmGYAavkQTNWj42aCXSq3fu5Mt8otgfsE3LE5jM7ej",
  "key3": "4DBp8V5DmS9BnaKqMzz5ipi9gjEXJm6omRJE9qp19GbLvKm7xWh4T3BD94MpfMso42xfftum5oPNeVfHDx51P3cM",
  "key4": "5jmSNckkZ5fhbPxEy9jCoosQtnJ178W2fZGEbBBDyM7NgmDp3NKrQmvAYhkx1jqpjsAMhYxVygta2h9RkvxpkAnb",
  "key5": "27kpSE5KELdSaepZHtjhWh83nZWXnmq6d7Q9P9Mug5nLeoy46VoQGjBDZwEqGamkuDZ7MRNnA8TH8NZhso7xz6yQ",
  "key6": "3YA4VRMPrJiujFVjDF9kBws8Lc19o5KGsk4NQZRN2BtgpqVezaNmQNZchmYaXhRr6BVApCzCJatPqQ3GU3FmzoGF",
  "key7": "6t8ghcjdpGVXfGRZtw5LDTYwPM5k2fByn6fsmgSD2W4dqLQPaZg2kB8UdHkktXw3o5dRjua7cJcrVDatxBbYgbf",
  "key8": "m9HANp6b8taTU4exkhPQm5HP6Eri29LFvLzZZwHHJs8eJpsz9BfJ9FL2ubFDWY7Tw1UYPHSJ14EqxH75Dvw6n1H",
  "key9": "2SfZDMgcqFenxtDNtJLqjiWhDRf8BDTwsT5qhiyLU5j4X6fgvPPE1sLY6kwCZXBKbrQxZgRXey6tLKqyy37J1bbt",
  "key10": "5KkhFemMj4avbjQcHB6K1S726kZMyVFjxFEFuxL18YYKH3phoEBehzfyJW51wWvmPhjKKnBb3UeTvgQjGoWQs4or",
  "key11": "ZjUK76QWSde2uzVHUbcRaQKQUYEFjAizJz3Fqf4QhAiSuHRcspbASNcYZjpw62ZjL3tC5HWG1vCKLbSbY3EWC7r",
  "key12": "5MxM8CWjtcvRqCYo7nAfMX8vJ9m3xQPWqwsV88hqe9ryT9bxF7yT3n5BgCa3V3bVJrvpHuDUcsVtn2tFrxDRa5q7",
  "key13": "4AgSDcqVRka1D5YvmuSpvBzYUyR6Sg7tpy6QGBuijuggfdfMU5qQSEy9p4GwjGoeLh13vpqZZzEhmtDNkdr8erKy",
  "key14": "24p6kqMNS8J47p2CNTUxGH9n45UkJmWxUPQ7J4em3ZB2j9bUBoTffWugcXjycHNXnc8UApuFDzrdBqdrYSWufUWN",
  "key15": "4kzTfeFrZDJkAcMm9orXyVmAwohrKXHJFJnesKAs1ZrnAP8XSv9HSyqT7fiFzM8gNnNQmUit2oEMXjGVqE22FH9N",
  "key16": "5EsA6m9GhE3fidetyaw3o4GrgeNTSgVMYuYwqGbgbxC6bdtAYQpm9nw918QgSiaXCHAWQu3S1iTj8sNnE6WGbVPR",
  "key17": "4GicC3m1jW1h4F2uBkTDrVcabSAi27rJmqiU8KS4ZBePAKnmA6Skjg8vet3YYHJ8DRikQr8SrvjGq5KPh1dcZ9p8",
  "key18": "2YdqJ5P1K8QWzV4fAQpbuo7zsyaevY4m5vMbetWUNC8AmZ7AmyM2sE6VsgH76Uz4PcCNnsVg11B2fG3hHv3nuR7L",
  "key19": "4VMLpctJ9AKU285XaebazqFVVcT4eC5NHJhvJ64yLmoQyo9rQvwg3HQQms43Vhs32af2vSZXTnDzmwfayGuhriaG",
  "key20": "5SbNtxxTMsCMbaPqZvdiCrneCBDB85BD1iKnuTyY7Lg2GebhpAmLKLVTSBUDSULEhq9hUDK8yYTHjh4qTbAcHh4S",
  "key21": "4kvDvUCxVptPuoYhLKPE26wB8nXpUVPJPsWUJYQKRmP8H1nn3fBAaY1o7cXzDps976T3i8c6yZwgC5HU4VEHz2QZ",
  "key22": "3HykN5CiNZFBngVwqHr6vweezHurg6zjp2qbGhPfUQKiKgeEtTpuWQjMuJYB8ZcoWBFSDc5a59eNxxC9UZt6P9bc",
  "key23": "4QXwN8KJVorcRtjWgjzVu7q5h2ikUUCmD9aLS5ZPdTJgaBbJFATwYtafro8YFzYjEPkbLos8hWRs6X5xphGfhCDg",
  "key24": "46HHstmyB7G8QpkCm7nmNYVMhodrRQNQBiijNsGWyXkgQsPyyv4HkQNtbay3oDyCadEcvqGjGmz7ZbSG1eBBGd6T",
  "key25": "3ygAJE3tDC3KseTXFwFZi9nEB2FHSwUkmKZbRgWiCpipFpDCkaa4YXRR46bm3CcnHzkUN1LM3BXeygF3b7P4xFSr",
  "key26": "3ahy2ZYaxVaVkjzrJBvoWkJEvjNFLvvRJaDyHEhAftzsP5JsqdX7ddkPtp4JsAzhv8YVtWjcp115GqJxFh18i7fM",
  "key27": "4JPzWLofmf1iTY6n9X2g4KC2CHLMtuFyQRHMR7H8ZNQn32NQH6MEBEKasH81rdVQatzU395GomBQ3Fd86WiY6tv6",
  "key28": "2XRrxfxZtC2R6fJcxybxEeDD1zF2FedrStVMwrkizryTwQ4LVu7UnbrrL36rmQziGJaFRuznAkByaQzifbc5VDMQ",
  "key29": "qp5oF6sibWGb6ua1FYLg9VHCP8YEW9yDx9mge5epsXJYGnwuvsodLmwrEUAezPhvE5WLwEBuooWqL8W4Zk3bdYw",
  "key30": "2W3WkXjKHJzakxRTafDWXxFy5MZ3JE1oRrGA7RbwPZYK9dJBZ2BAx4ypXSs9U75iyFpAidvrV6qRzPpQ7hFkmrEQ",
  "key31": "FX5eu8tPaoc4nwgerB4WyddazoksLF3jMQ19H4HYWX1DpA1QkdS2sFtTkqvStzsKUv1pYR6dRLS8H3iP1QzUXPo",
  "key32": "2fevoXiHG3We9TkyTtuGmyNs7M1yTmEJsCGDWteoxcR2R1ZfcYcJjmxoqwZ3dCtwaXAECUmMMwqkv4TeDajq15Gj",
  "key33": "2A9qScQycXxQUTs7KR6MSjgbU6N3nyTUgBN4a9g92XeMJVGj9uzKsHGBtEPTPHF5nJbuh9p1YXEq8egL4imP2dwP",
  "key34": "5FP3sNZQmu3vpSKgKezkjjGLva63GMCiuwBKTezHrYkbt8GaDg93cPyH4WcESqfphx8kmKaoc6pSijYtrWdhZdxh",
  "key35": "4CkbobxGkYfhwAErvSFpLRkgK2LBECrgy2ugUXkhwLTe74z6bs5m39twLKwGYx82nnnD22eyCJcVjyJDLThiY93d",
  "key36": "55mAS9rcf9voifuMKR3FqHqCtWAkTznvQDXQJro5yPWpnP9BAmekTKTeVM4y55yFqJ5UeFTUCrx1CdC44KLkjuXG",
  "key37": "5HmkYG8XPvSyokAEkgNYG9cRXJPQsp5pEcKCESn29GNqa6WUpGMEyL8aE7XZxvX1HLuiaLXUdQFWkkAv1BF4S5cN",
  "key38": "tH2K5TCHZn65gDNYh1FQhLjReAUWMkp46cF6D2bAPQQoD7EA5ry2N9QxS3Guq6CS9WPYAiSKMANcGenV2Y3UzZb",
  "key39": "5VNG5r44BVVDw9UnmyXRRaJVRXJX6awGT388jBBaEwENnReNVfLRYJmHGA8kwL12pgmdtzkLoATdGzZWktP1Hx9E",
  "key40": "2X7LQsGshrf5bzdRG7HFk6YCMHh5DHKXMdy4UPPYvpSpvn72kJ6DJuxytjmZYMy199Mpvp9JjaofAPE8y9xXh9nU"
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
