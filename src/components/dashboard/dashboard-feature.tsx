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
    "uNBMgmsaRcJ2i9zqBHQV9cTB4BNJ4SdBmKR5zaKM4kSwSAaSJvT6AzKiB2JkWzdkxQ5BkbidoptVcHuRQsmAQw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iXXZiFKLz9gW8no1TEt2iHA34ca2nHziUzygHBxhqhq5UbycjsKnekcBuHbqd8Q7s3LnkmbfbhFvLcQJWJhhEjf",
  "key1": "57P42F4xggGWEyEWCrPtShwA6cgwPK3cd1tPW9C6c8hW8QGN7mmCmGiSHv7MbBXHcAdYXoRYFQNtA5CaQV6u1NHq",
  "key2": "2vXBC8LLRLEMkKpHsaPpm2WgTKH27A31vbMyYoXvfXhD8QPieNZF2tiwHgD64ZfUGsFYsiNvH7UgyVw99PH7vaGr",
  "key3": "2ETBrhqoR8QviarEtpSKoUoZQmNZziEMqyv4qZKYMAdbPwJPLoWFfZAUpPEr7mi22DDc58TYfK19eUskJTHDFXQa",
  "key4": "3bs9VemDFfNqpEghyBSJaUJYDzbnRrVKL9FycezgyoLewq6C4kREFckQXZ6rSPfG7cr5893pps1opVd9QU9VCeeb",
  "key5": "2jD15jZrx2zmxNZkHxrFuN3gYhReC3gB2fgd2JRuCVStQsiQG124vReNVbmPTuTxhxbx12rw9F3Q6TuTP8E43XAq",
  "key6": "4pLmFNuUiTnU62qXBN9n7aoeFGyGNXKmGPA9KQCR3FeN3emHH3qeiiQiD8wAHghmRzKwQaFp4NqKj3qVzsncyPFp",
  "key7": "2PRbNKMkTMj1MUiPh7yxXSwn7mJdKFsAn24paoPwmdCKLSUzSf7T6Yp6Hw1dgW3zxv7pZkDQhfDWUe6JbEDXqhys",
  "key8": "DxHXZx5ivCLGoEgehrBNG9NcASVD4bGt3DS9amuTxrjnyVL9UGZn4uzNmvjedCr68a9aV5ud2XkBPJJKY9QCfA9",
  "key9": "gKyBbVwuH6UDg428EqNTkTH2HqN1qXi9qaKbyFAHGFDNddxiJRPnho6c2fxPGPAr3nCZ1CniCJr1vffkfwNHQ59",
  "key10": "f8JxzAy1Z9GnSd8Fo9UbC4j3LoxfygxkLjWCCosY8QyzB6DaJ5rY6puCosBANN15Wv7ctunsAzkGjLCyoCfdrTT",
  "key11": "3YW4TNyAH7LsY81BVoo5RqafubHnmvBbBaY6S9fhuybKtn6oaczYFaTtYaWPHkpv1nqTWFZqgTcuXaE6iEEs9jqi",
  "key12": "3numyaaLcNX3SkTbSvE9669p39dNoRRXdwQpPmJMDtoVVnjPXVSyRWdgY8i3RcDyh1A1MsBAw2uhm9LHVsQ5bhdm",
  "key13": "129FDuEbyMZ2qcfpdNSgAZ3z1Rd1ASftv2nMUPRV93NW3f4DTdgtUQUNMmfJUjXPLVTG2D1o871rz9R9oYHvYtBz",
  "key14": "61mukvdVZRo6K1Ng8tSyyEspcXpvAtchuoDLYFQvfi5zYp4spcAvSoGQAQ5tuw5fipnD2e5AnQbrt2Jk9uxE8xbj",
  "key15": "2shYNH1uTpZfoNPLLvwEQ9TRa4TwdxtridpW5ZPcD68ihjQwWSKz4kPq99LW3W81JpaEmCqWXaqjJPAZqUGZmPg7",
  "key16": "454ow4iecKatNC66AawQCjyN1LTVM3dqZhQyEvxCGeutJX1NeRpTWJA16ZNbPnrqNfDMRUtKo69UVfCNtc4nMGAo",
  "key17": "5734ZraCvyyJ32jAD35sT88F5sLK7aohiZLCARo8Z7rfraGkChiV4frkrNsW6L66Q94VvXajSyGPdRrw8Dkydpjw",
  "key18": "3YGUDerraXYNHpi8thW6EcQwzeob1kUnsHQjueQCUhYjbBjt6P8RjWLf18h1qGSBRUDh1SvLiNrbgpuZawxRNN8c",
  "key19": "2Xw6hArL8nuJ46Bww4XLpDLoP2PEdznqGtXvK28cZKGbLAYZjRGn8G1NTQ1pBWH24vnsYyN37NHNfHUDhTqQ8FYm",
  "key20": "42SYYtgopunmYNdtmHRHoDeXhAWdBCwtHJySr8TTgRCUWnVEksGZJHWiRaYzfCwTTnqCquWy6fbc2r8gxGHYyKMV",
  "key21": "81H5AxbZXbF2PnwCAZzAtvBp5NsYb5H8Funeb1kcUipviKE1BWUoLCcXQccbkATJxs27RT5sKQ7qB1c42xoHmvU",
  "key22": "2THrayL9FhUoFeVaX5nPHJFVTmrzVSdyD94LgUSNfrFjHm76D1jop9RG2jyXa1Tys93dNv9viHuEtEm67ZeBFXEb",
  "key23": "DWFusDJ2migYPRTEovoyX3u26p2yutvX3VKJsYNy5iR8oPS6SJZ5c7dmsjYDMePuW7AzWfmfKkjM1BkE7x1C4Nc",
  "key24": "3g8bxxZV3hb3LRNKHeTzsgg8eXXfS3seRfNNkr65rzmtgMcywjD5f7QobXvPnh5dctEwMFSMZoGZm4igzqkkxtKJ",
  "key25": "1ievvU5n3BvhnbfeWnaTsm57Z296NxMaxFg3UWHsbW5o9BtpawVqb4qenp5F2VGDAYyreiDDw5MChmD6yXmzUxg",
  "key26": "3ZcmJoHy6KHhLbGpB1xu4J1CtmYnWfePi4rBxGx8V3PikPd73DwrfK9LdwsufSJLguXr4ot6oTXyTtb23n7vtEwz",
  "key27": "2UKDxQDuXsRpPoMtjVLyAgpwcGpT871nCffQbSWAbXnxzduPaMf7kB2gs5GYXy6tjxKw9WWDXh8BrRsAc8Nmjk5d",
  "key28": "5aURvdb2VrAuuNypNiXFmNNKppNWz8u8tKafQ3dZqNLNZXtd4pFNVS6oG8HkuV4xm5QiMNgRkf6cm6Vho5qmUNNz",
  "key29": "5bDEwXWgQ2Mffff9PywVtTJa9z8cPVHcAQkww33NP32G8KURKLW9A8HU3ojhUjJdU8XYzvxpAvUH2RPqeuX3ggKX",
  "key30": "357SAP86z4F8wdeu7HmaWeSkp9u55WM944JDdCtbQ5RT6pyGNPmDQDdfFC4ZY4gkg8LpeAjUd6pGKprSbFCTqiSf",
  "key31": "PNDzgCG7iDCbiyb1Am2ncjkzo9f6Twv5QQUDEcfGWTeM4VCnHCnSrKLUeZPT78hzMQaZYgGaoAiovd31qzvEtDs",
  "key32": "2rzFnEdYjvLWEZLZoqDrXVzPA1L3XKDu8ehkeA7tbDwnL8FEojBfYEChxX9xA8VWxV3o3WweUK8EbBxvE1951VeX",
  "key33": "UihDta2nd8rJmjhPnpo8oqKbwMJupxRFaZVuUEM3KAdHm4DT15hLiYmKPaFcJaABxHh8LkhH8nG56aW6Pydq7EE",
  "key34": "3m7VeDJPGsqjJowXxE8pvafHVFvSMMjQTxBeJBv5fqxb5xmz1ea3NU3JMbArDagp3bF7faWyhnQyn2vrQMnyoSsK",
  "key35": "aEiRx8gVQDid33DTtrSLkv9Cy7h623dLTb9cm2YjcSZoi3DrZLF32smMC6965Fy7WddzznYHN4Y7RWcH7yAGgbJ"
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
