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
    "27oYdgtZV4RJDrBUXMP2Z15FKQTHNRmaaJw9sQmgJfG2jcdDMHLdGERWyMtocwdYApyvFXoujDKYj3YHr282Po6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dNBTh3jJiJUwtoZFF1FXoBN2iZxyzdPkjPfQ25RkjKtnp6yjpcpbZmZFY4N5uquEA7bjKbm8uCMSKfNz7KoZAP",
  "key1": "WbzsJFN5h91RQyD76ThoydQVgK7gxAZu85Q1mLstPkAE9inp9aQqjaVQ9WNdcQZbbB9WvAN9qadVbGbm5A4dPMV",
  "key2": "4N2XKy9jh8V8NsRX7p7jEzGRKyoeFS95teAxHpUGrWUNZkaaXyugi2LmZEVbXAkURToS8yPJkvc5qgXvYqr9reNy",
  "key3": "xZgaXoCJDoWmSDseWuqN8kjq3SEXdrCQxiNwVTRG7Ezr827WhdwVFr7jnCEsdEmDw7HGPZ4yykmDd9k7K7LkZRc",
  "key4": "3c8axpkC1zQdFG5mX2eisfeiNqHxvYEayHyVcNvFyrETuNJ6Yvc6zMbSwtQdbX2MNsJ6rguSexrm3V8ExihuAMmv",
  "key5": "3EZMrQTXMnMrW3WwS8dAfGDPgbrSoPaYDXBC4r2vSNQB43UsK62Bcdf2rGLULcCF9qAoiZ6fkuAC2voUf8HrmaP1",
  "key6": "5viA2UBJUhLT3ZJnyUvaZ8KibgRm3hGHdPV3At1X7WZdiNRA6A8MMAyKFJuEXwi5muLLjv11ZQ4X9jPAoVn3XjTH",
  "key7": "2pRcknDTx7RMrQ55MHtewv261XoCRfaKRsARag4D3PTqdSdUsAKDEtRDpUxMoQdWUzn2kLKN6Ndc7PmB6yU3NUEx",
  "key8": "3cFGvU9s7Zs6RAUzQSc3aJ5t6KiqQ5JpRnkG4BoWnwKTNTRBs6WwkBMpHWcAGUtd4K3P3L4dZeEKqMtbcTc9q1ey",
  "key9": "22M2TbJZtaTLRPZ6k5arSeCKrFXyvmbsNXvEf3sAZfArhZaKJRzHyk3wipcLCm6Ap99HaiHzj2KvNXFqmj4xmn3q",
  "key10": "BA5oMd8amS2sTP7M49bzV6CkieegUchTje5uijz1aejWT9geUk3qcjwywFobCQ7oi9MFUXS6wTJv5P37kiaV99V",
  "key11": "2VRFawnJxoGW58pskUM3VCt6SdhTz7fERE5Ai1fQozjK1cvZZ6GySHLv1LTpKjgdgGAuPKLhNwZRWobcjtsx8mkC",
  "key12": "4JQrZ4WqpV8ubGPkNJPj4dBvvLYzxKV1N7YmggGxcyhNsM3Y177ZVbWR2q1RDJiuGdursVag2Q243P344YZgBBjf",
  "key13": "2DsRBLbJAQcExjyq1KNhnSpQSu3nug7B93GkNSnuVHVvfCoVywwTZ3EdRWS7NiLA5M1rfoLk2irS7hD7eB4Mpc8V",
  "key14": "5oSPJBD3Bi8VHy4K7n3i3uMq9MfMVKDeW1qTpJ91actGmtUFbQRkM1ph8Fr2QEhDPokPqK54YncrFY4L1RNQN7BF",
  "key15": "4yfJxg55p7VxJgeatPGYFcS1SLtgNLbCZzKUyBpTfWacmmLjnshVydJxeChYCLxMRYX5BmRxG7NnH4rWR7vi4Hvk",
  "key16": "28Ywir6zoTZcxs6jqNcZYc2pZAEMfzoNFQDy8HSnoeqe7ZBtBZF7rWA1VHbzVusBsiHhPbC6czYQnH3LSocVHf4c",
  "key17": "2AZVwYpkQfgSHNjEo5iA8yySMycJLGngj2xoLSWXutNpEn9SNenW95Hn4a7SSb4GiBj1ZewqrAAmMawe6Fob363H",
  "key18": "2bEs1bHPrVAUUm4wqxZEmnVCn8k7PqEv9VNfFgz1cJVHseXA2bGsoFb3zNpRxHvHKDbbTDixAE6ar9W9FRBG2fD3",
  "key19": "qNJ2FgJkeoW7kfFaDyfbEmDdrmRxndpFm9puW8km8qjSG2FUo2QUxhDanSS3sPRarAvvSVS5u5NGYbSU1b66bz8",
  "key20": "3T9mR6EJuZ6dYwat5GqPrActWRa5hdhANPvA4Jkhc9KD28nczSEz7aH3ipBkFxCWYpAgnWJsgwctawdwYyLkcirh",
  "key21": "3xFQojveLrj1BEac7FYAcCQ59Fk38cV86UmPSvT4VyctC9vAVBux8J8Say9zLcV2fLSRg4XPDgSVpLm5Ahs1ycnc",
  "key22": "2ojqP7YPDbiecim2QAFKxFtvjz96ywYmGfMHf7dU68qNtTJM23Whnqxxq5FU9kAkjU4qx9WADFdW8NeV2wuHQx6E",
  "key23": "2dZaDKxiUCUJ5cF689AVB2ADty7MyBqvHVCVH77m32T8aX2vvYQ5QqLR3scDQeDsyYPCQipWWGR5p3Mme3k9u76V",
  "key24": "gwTWc6F3Q6JqifZTnJ7LBjgFHuF8RmiAMhGLySN7T8s9ZR9nZW6zQ1BxrNhkjCvcY9spjgZGpvNuxiVbBG2V7W3",
  "key25": "oyC5PFsSwo2PPLXbUwEj9PrPzSPGp9C29twr3idC8CSKYiBQq2yDtAQkdJB2y3ynvE1CkGLP7y9G1dQxKT7q8GG",
  "key26": "2Cdq4frW9UppTN4NCghAcERrYUwUNviGmMEdV7AdELTU7J3Nnu7nwwXsBDP3r8hoSvtFfNMai5rQgvtSUh9tz1pa",
  "key27": "2AwLkR1QZSsHACdaGDyc75g5DgBETZug59bzcGaeTKxSN3YaApkTpnnBLrvjgeCeued4rMCcCsvv5f4S28QR3xN5",
  "key28": "5siS2jCc6vHx72txtB28DerDd8JXtez1qSAmzThjJ9HE3nzEr3eAzb1zcUS8WkJADrsKQ4H4Bqkw4ETDREJwDGkQ",
  "key29": "4zjEaDgT3L3eUB4ghCWC1AuxmpEJCshUedE2XAy6PZcTFahB1ApA3NhdRnWgAcu2vnxJxo6aFMnPydzaKh3e4XQR",
  "key30": "4uHHLhZkJJAGZD8cCttvLqPkfYxyCqjyDqjQpV8WsoS6uXsAJRLnk3rDyQvztaPHqmFmQ8kVHa9oMBab51ybaRqS"
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
