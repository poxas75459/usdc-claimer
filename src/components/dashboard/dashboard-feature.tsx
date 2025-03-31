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
    "4wi1AJQryWXi1MnAG9KF2yT3mP1NjFm7NrWBozy2oR7GbqSXcDVGJx3XJy5aKz1sV1hhWpzknhmA9kYXASrG9a7X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JwWTyxSKhosAtM8NPinX6ztWCvqyjKX5ZWqojLgrjummdbydnj4vz8QLod7FP4qNDdCi4oApCfQVsQBi85ymhZe",
  "key1": "5A14nLFMpLCPddAVbneLWBzKZhKQp2GkCU8d8r62xx3sNQeV1XMucmhZAf1SJNUczgwEjphkr9VSQLD9BFF5eJyZ",
  "key2": "3WX5zrVJ1yHpcTDNCSdhwEH7G9K8okSsJib6D5vZF9RKfSkaVUksM92tYmK1XUtp4dP5znWeqDFPWkwuzmrpqTFw",
  "key3": "34NfGHrcDxz7N4ANioyqGb44dRkULUZ4GSyiFBy5U1DWyt8eSpU28aKZzL2ZzC5dtyyCG8dbNhSMrzr8FHBgJ3Pg",
  "key4": "4ax3SndALiMRjAAZxw5z25SBo6UBnUd8KZaTBpkZP4yQs3vYBrCewAYvJ58XMQiykmby2RB62qrf66cHVzhuaZTn",
  "key5": "4k696c4S7XXCXLZ5HF9XpNxBwGKipcTvgarNWcRGNBckFgZLaBC75hn9BDXswHdK5uChSA9UrriGHRvAnLUnLCax",
  "key6": "2x1nu2vQ9Dw8wT6Y9TrEiofjv7KzFnk1mkBrbMyjZRLZn9GqhrpFCpJ7wZ6hHKRb2dJ46EscjGzF9ipj6WiWEWyF",
  "key7": "5N2vHVLUwuth9N3iS7FB81En17DPQNnfiwYA9pixHvQZK3vPdtXmRfuSaEv6Jm83JJaiTjJXb6aiVyyxEgeanbPc",
  "key8": "4ZA7e8rAmic9NqqpfmaSNqp5FY4SR4wES8bmPMRFbgSaYUcucVG3PgodhCHEdFMQxNQQy8vnKLS3LQdeV1fp7egC",
  "key9": "kERNDFFS9irjeaprdbjxKXUmdsYWguUQQ3DSi11nDgPhgCHrfo5KvC7hGCS6xSRhocfGN8siYYF7Q46gynqrEFx",
  "key10": "3htJPfeUPSJkgRYXkMXX1dXHayVtuHjSgY94qPeDjnRKBa5ebFLhkWFPEgtdgnknUb8f8w64J9QE6n9sBVP49LZN",
  "key11": "4PRTxzeKiyBybBNF4YrunRo1oCSj5ggd1i4dMoakMsW3ttzbMwBTv1jLeyzZEUzNSnUaqGnm6owvr7k7a4RyhuSk",
  "key12": "2Qi8Nv1X5J6w4qYWnhzuVXquuPkkmkA1NiiEGJShSXt4ch1gAofxUvjaaiN5azkLYMuBspMqAE3hhw76kDhpUqfr",
  "key13": "47W6LCCiXZQRSTM1JREQgphKcattVQnqNumLWD78wrybL7EXjeMJudNvwq1z3Thjk2sqvjc3L4yaHX7AAkSfVfro",
  "key14": "4sGCU46eKkHJwBHsuYdHBMFaHRWKat6t6CvDCpLkNYBsEbE9P58cTNTrBw9yyr5yuorAYk8kCsYSkD3kTZtDmDex",
  "key15": "CWYs8925KDhrCePTfFW95qNK59jPGQtJuJx4SUry1N5deqLMd2bMfHNrHWNfdGPfWQMZv9Fgbbo1Kgn9rZRmQBB",
  "key16": "3SVcZzNfbALRWH4UdR1Y4nTXngmv2PoTn4NQp24mECqCjCzmEbWpZVDEQqm8UqPcAazzmkNbenx9mtrCbzpiLHSw",
  "key17": "4mEA9MQusEf8D8uZyT241QameoxuNzNYuhmPVgWLTkyywu67ZN8q3GFK4j1RaFiT4H1f18kEP5xjKsHmtbfHu9Au",
  "key18": "2veoH33D5o4KECBXpswvEb6e55esU3GoN6zm28uGbque6KG8z1bcToZTWZRSu9m2QJH6ZyFFKPMEubHyZEaDB8S3",
  "key19": "28CyiC63zK9kGWWZd8844GXuFnAjU459Z57v9nZ12WnneWWf8sfi8Kn2c2FJCDo7v6GDfTt9svHVBXrxRssNBi9W",
  "key20": "PPF9C6w6n2R2sfbgs8GaASNzZhPvVhpbs7RRuyfuRbBbfCGKN2vFjbCzUTLDeMoYyTLiARetRz1rbTWq3gmGES8",
  "key21": "8GmJ62FttSFd3hCCHPw7JkVezWjGU64yp8WdCH8aFAasT2Qarf8R7mEX9VjHgMFqnt1zncQL88MBRV2Y8BhoRDh",
  "key22": "4UXADv8YpJoG5a1G7ujA5Lw1S1aj9d4WhkQCEBtKpZ4q86tbLF6cmtjj5aCXLDWBtPR24u7VBMKRMaUcmZb5hEvg",
  "key23": "5eWPouc7CCWDuxi5kJhUdCQfnSfmzUCXq5xPw7uxVQaSMaGtrFut7vwE6LQRWPFXEnf19rxcrT4xMeREGKBreumm",
  "key24": "3EtwBia9rEv74jgDT8CYj7KX9sVGtZLXN5kXT3fzBYyvSnP5SeLN1Qeai6BuXjiDLKHiFTThtViDEkC2urUgR3rn",
  "key25": "4CvBpSyo6Wb84ZFQdjnhj4Je11xyGCfm3gvsKxkXoP96JPRo6rTdaUazLRjWgLP2r5GjNZMzEM3Cu5MszhVse4hV",
  "key26": "5J1sL7bk4rfRAkma1HeWkEgs2LjbMauLjbtev4qTTssf3ZBwp2RMqQYrKokbomLWwNv3mM5SNvTzewppRQReGpYQ",
  "key27": "2Df2qek7BSc4X3j6Tf5zsJmzvor8JWPVBELEs3TZeQaL3KxANeQC68qgAo6WTJDXhwXcRHJkamB6FwYPQi4LEfBr",
  "key28": "2WAb95ZSDsiLZ6SCEWv4SNaK6F81tHRxrBUh2YxCkWP1q5ALPE6LVqp2hDwsqsKtCF5bXmRad5iNaj9CRnZnir5G",
  "key29": "29DRD3KYKqUjrsnztHrqCcdcpWztMa6AWJsC4cchhCuEDgQYUwkMhfNeSoGS6g3Hi28yYiC2oSvbVAC1pJG35u2h",
  "key30": "57rW4p7Ln5xq5rhocB1KdBZPShihhGmrmuku14113h5q5mJF2xAtXFVTbEYBsrbcmQ3ir5oxJqzXUxEKLsrin28V",
  "key31": "wc1MANSZWBMvVy5mesWKSL5XE3pav3PKx8gHyfBCV7baNnmFiCbMa1F3qzp2qQBgfrJzEutqcGdPYEyNmwS5jgv",
  "key32": "3rSpbba8vidgP8CWSo4hELUpJ6mWZRYfygQ2SUJxdRgyLoGndJdLKVoxwPQqvoR2EN9Vh5PLEFpydjSZywwEhZ5Q",
  "key33": "Q4iDsMZigfdhzxsnF98hERe85oTgde8FA8Kai8Pa6tJbj6MJHcpNMjonL74ZEezFsy1zD4MApXU3R6TF6U3AUSu",
  "key34": "fKriB5fVz5sjP3uKnNPRSWcvxEwShocFwjLWQkias4pBZgYFWnT548Ej8sUHtuNx14tcZHULASX2n5Tg7L9aGD7",
  "key35": "2hu4AsEKbDZvURjzcW9EUHHgqYS9My7jvEsRgRQsdww4A2cQNc8V7rUDGaKdKLX6CM9EwbX8GECVRrvF3R9wUhp4",
  "key36": "4zFSkaTwLzyKEQy5LwE5Fchvp3eCVViVCjduQQMnNeb5iQaLH1piJFQMJnNnu7Lrqk7eAQodfFNNiho9KY5EmoTj",
  "key37": "2ftQWA2cy9T2fmJNttsavLu2uxRj7Uge4msrKHESxx7D6sjnsvfGmBmETReYbo1LjVFWK3N2uRyJnWt9icvbBAyS",
  "key38": "52c9bvA6xwRHuRKo8ZfyyNHtBSB8YxKKaeyCU9nPtwin7xNDmKmqe9qc8ynURKgBARF7zq7JmamPw7wpx1xZaZ3Y",
  "key39": "4Rd5RsbmsUDwYXdoNe8qPbtE4Srepw2h21FU64rsvtRZ4igoie9tve8W9Ay8a1ZzZShfS4PgHcpZ7i4J1iWQw6vi",
  "key40": "38tQE41FevJzRSCrorzE6EwK3M9DuQ8Th6a2CNdoNMp14o5GLb1wm4SEtbFdPbP7FtH8wMVuzhyUv6SsH4eBsmUy",
  "key41": "MP5ZAFNNWLKddG2GhhJArb41SNfbPpCiQ3syfyF3Nx9yJtFcTbQPPk3WyA9oya9K3KEFhp7fE6PgPcbEfFVqQb4"
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
