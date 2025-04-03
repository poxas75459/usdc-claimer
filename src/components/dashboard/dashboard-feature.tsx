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
    "3RCd49CNUMRxesTUnnETLQQoVVBnJHgqy8M2CJcmK4h2nym8XMcNzs8Qe4GsSb4S4tPWamXgwLciKHSCruTmRE7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XmC3nYyVS5VcEuCejXRXKEctXvFSm386h49sGwmSjRNYpnzxSnDHKahYKWPqS7Cg7F3RtjM29zuyeDTQXKDNyXW",
  "key1": "4UFpK8My1nymp8zEAm7TyvknW6TU9LyvZ46kzbGN4uJrkyprCFtPhPXrDx7fc9RWE1ep8qoSym7yvUvWX7dUXudN",
  "key2": "iSES1BP8Wv5TSjHo1ZYtQsa5MpRGPfwK1YxDXWBxJ1MHAb4oaMPUcs4VmQxSgsGHJZET9wdAP7eM9ngJjmUUTZE",
  "key3": "3wG9FcrJp9h3FW3h1RPu6WqzmiMM8vR7iL7tbaCymtDTRRQ5ST5YtgtwUUhTiKr7VURo8r92cSfSMzsujQuqWxPY",
  "key4": "4i51txLroYRPGDJNAPnnop48AJr3ToExniKGhjWB7cG2cscDngJ8GHo62ryEDw9BBowWmAtBTyQac9jqvG73bosQ",
  "key5": "3MNDNr6t3mQHbc99KXHaRzmRg2ki4efkWmDYKQ6SPtAhT9utEELzhkk6dsyQh9VrWCPzLQJ315GGPwHiFtDSFAfj",
  "key6": "FVJ8Dz1Wr5TUUXEJUFEFtcxbKtfvJmU7aSozaGCYAGH5eJWx9bcMUzbdT7HiyTXYvPxfHwWNs1KW6j3CqkT9wnd",
  "key7": "j7fD446ZW5gzYgeZW6V1D5NQrmxUmZFEHeF7S2HSoyXBy483NmkojRpcPKRSHNvW233ZiMyWJbaYkcGDDGeBBGn",
  "key8": "2tUUwkLcWZQd2as45ZxcgTDsvQiNAjU9BnkzQQP2Ze2LK6EJGE8h3XLixzDXmG9vYhLSDQAyv5t9fAkRwpvRfvM1",
  "key9": "2wKPh7Zw8KMPdY4NRvcPKFfyWdWy9K6Bp4iMRQBdtoqqEsUKB22JZK97q8xrcbWK7bNpTh8ZrgVNbXrEjJvVhebZ",
  "key10": "5jHNQ9XVTgXjrf5a5BwkR9ANioQJ59pRKGsg9oCo6Ch49ck94TfeEA7Dw9W9EP9TqLipaXLCRPDVk2ppGGpoRhMn",
  "key11": "5dDoaA3aews1KtfP1fMZP4hMQvNELjoaHRyvivL3W3um5y4aH4hje9yQLYL6MBHfLMVUh4wr6EHsVvyG3itTkx8R",
  "key12": "5XVp9xb5QNAPvcSof7jBiQ2uAvZn2YxsuBuBNssPyPcFPRETXNqSxCGPtuaa8DViRLoS7fgJdnZMTv9czeqdLTzD",
  "key13": "5TipYsHftsLCf6TkzhGcj7frGiRmmV1BmWcbt95cyiKdwbfRi65PcE2b4iMGq3icbF5j64sPn6RTRQLQ5UU2ia9J",
  "key14": "LU9coaK8kCfnkrSncuwPDs9JgCWYekbmXZV3c5ANqwYWAmPNwEe8RHUEsFeve7ijRMvk9yubfSNBm9y3MibjuF6",
  "key15": "5FX353nm4uh2hVWdBBKKCcewmAnEgG6RUy2cGe9eZ5DC5QiVq2tqrh9fR9jW9GPVMVvdYHzFKhpYuDUQyQ2FYFwS",
  "key16": "5d7sREaMkkaT5aBSAhYUi4DPzvm8iXE2QfEnAcfuJ47xd6bYjm2TsvRGrfLGgL78BZcFnDYvFeJ6GnWUdHqvWAvi",
  "key17": "4m816bB6poXw3HQuTP5hC73ETqDCJo6DL97w6zFDPxm2TWwxw6g2Zqm36CKdc412JXvM2scByqUHiuYipdEAPbsj",
  "key18": "2uBJ5iZKnk3CkwA83VeosskhTMM99HUDzshm71c7g2NNfWDhSf3NuUjm8LZ8XvHePB85JCUrKnYwFHHb6WBqjJTa",
  "key19": "2toKo9pxzoYbyaLj2Q1fK4vXsg5ys9kvAj9FdSRnQvbzdP3KZzVwx5e31W44y7tpJkEEWvR65rSH3gMsuTHz4yAS",
  "key20": "2ekZnpPJu17SLGhVu8kaYtazHEt4QsDJaAwfCgWypiifXi1Yr31mL4zyYcKZKBAkGsuWL76yXphTrvR24r2fkvzF",
  "key21": "6xojXmG4uFw6Ynaogmmv97Bnryz2ZYoRAk3VpDouTsdU4BRJX2tBni7sSSfHGAf5PHjzh9yDwduhMn1k38Dthhd",
  "key22": "5pLD6a8C6XAWwc3yBrmTAPEW9vhLyuNpazSMeGeWksuBd4S26G889wcsEDU87WL7wCVsfpgk2Gq4L7hfovpD3ucW",
  "key23": "3EkZSg27WXMKANyst4ykzufChVCSRQnFa621a4AoTHPJiPv2JbUjebzZJeDzqxQLAbW7yQFRmXHoUcvzPFFZrVy3",
  "key24": "2yf8kETBUuHN1kgap7tZ9LHZ9HWHF1uHPn2kWsgqtxtAdyaEovvbTLNkbJsHszjcPqBFg3HYLeGGy6qjtACF6adb",
  "key25": "4rTXgckS6Bqrcp6EeBA95hG5eiV1jH6PwGHojwqpoE1E3aCMhuoB5P21q2kFXWfPi2VvCZYyeUoATZH8nu3fRbPj",
  "key26": "Njux7u3mBfpPc88Un5bgqsbGLUEZkNz2PhWFmnzPhm6sM6QytQyQYgjKsSKBPQ97EWfs8AbcZ9AbZtnX1bcraQS",
  "key27": "42SokRqt2S4dScbXGGFgefRUurLgAXq5WHuEbAKeFX6zTgQMrJAgwZBjxFmpstcoVGHHg4bc8BPY4uq9ePxfF5Y9",
  "key28": "5VkTh5GJ8RB7hHoz4PxhfZNAJaSARFBTteGTRoRqQCTL8VEjgaS1ToWTTN9iEu5mLPxhXLZgqPk14ZeuujLSDSRg",
  "key29": "3JpqUXpuaiRo6gGrAE26eUkZa8dbvNJz6mWcfz2A6LNrMM7wNbq3NJXYNDpg6jshuaoBuowih6wXuoW2RgLByMyc"
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
