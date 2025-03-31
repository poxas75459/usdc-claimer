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
    "52SVoNd5D8GQLr5fFaSj8MXN7VCaCAQgNvYuu7bhjQXGrDxU9rEJVBFLPrmHJ1kq5oL7ad6HGGRuypSAjnehwpeK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pQvhi5fhQgf6y4BXN7ztzD1VGpYTj1Fus15LaXCwTAbVBHodFxQWS9ybgNaCiUY5criW2XhrifCGXbAU3ZtXo7u",
  "key1": "5VnHTj1Eca4Zb38L1FQk1cTzwAQthJXXjKhws7dQNAG2MC1z2ZDjzN4vWnGq3SLWth21LvwXdx73rFYXgPyqYnLH",
  "key2": "2VhiGapToMXutWWnxk1Sj18dGzvabosLYP9Y7Y3CEjUoscJcxzYrbikK5egRCrunxrHjMErVUND7GSGrNhLEfb1K",
  "key3": "5KZDuBtmnJ4vN2nThDsW6WojTNGfjeZn36YMxkcBPJ12QRMStsAQP4bfce3iZ7ut7W9jYKDDUeoq8Lkw6jPsyt6G",
  "key4": "394P9nKuBzG9Aw4F7XLJzc8HaRbYLMqDZcQhywEJMTDbntMwjExu6TKDm7e2cWV54xz3WYneV1eaXsikVY1BWCCC",
  "key5": "2ezu8sCpsrV3BzdtiEW7ErvZ84e8mFVwCEvEqoTMKNkHKv5UT14rFu3BAXycCPm8Vaz4ntW7YrjEEh3vrLK7Zi3M",
  "key6": "5ReZvPgmosc1zrHgnrRmnchsyhpKAPZShjb3eGT5JtoYzGMpgQcsbV9orDeQv7MLEZwzxBU8fUZCEg9YxZFgf1Lw",
  "key7": "3a3sVvPd78wb2EvhdgNtCriLGKUXZJqPEfckHDpGk5TDvyfZz5Zoxh59MPyRR6CemPxh8WotWCeaou5Bn5DhqyTV",
  "key8": "54riZY8wB8PqdCUipQuJtszHsj1WrU3pfYcTUd4Kz874Yg4EFd5TVgt9o3F9qxSwsy4M8ypiMvDycCSacpAihkK2",
  "key9": "5GNjYgC6QyNk64rAvmJ58hX8gDLMiEZ4mg7JRL434kmvqzxvuyiVzahZxXn9qjRRfgGX3pLwSdudJAqzCTpmbyf1",
  "key10": "s442qJhtHJED4C6VsbKfEuUbuN22or7WJ6XvMBMGfypv8PjrWi95PFhncFZUJDAogAJUJ9P9ipviyEpb5cizUvs",
  "key11": "4TZgAakDAaSsDMT2wiYijen8z14CQ8NAm5mubY7R7KFQeubZsQLT4VnSpGja8foXXnoy6t3Yz8ftkCFbsiPtELA9",
  "key12": "3hvqGX2TnGBnSqtusJTVToCEGooy78obB8jAEYwrRFykDNJ4EciFQzhxNHegPaAE5kno5AVqGL9arS16he7NgG3g",
  "key13": "j1FtFQbToMYPZ6tWy2xU7EcY5UGkGx83ahj6HZMYUv54L13QUhVazUL7RcxthJjJHJdUpFASQREyuN9EBNVuyhu",
  "key14": "5q6BLvUzL535B49XV6oWdkKB99wkbnkHTkw6L7RERsfHFno3pw3pYmj2a7CV8s6oPnAahWkDqpRoqnBrc5heh9UJ",
  "key15": "nD37MaP3JYyTiaVRbcCwz4Y5WH2271fXvdFLrBGhqhwWMyA8ehscgJyPDQonnugKmpgUYHayi92pX4PEgs4Rde1",
  "key16": "3rFSKU1FCuP6uuNV1ZGmLY7fwgneJBFaBT7zup2vmKRJNB8R7EuomE95qpbj9DfkCNpcfv3DyUr3wNh83jae9PYn",
  "key17": "5BD3B4FNrtRVJeTAhiGgTyjx3By22zDmgbHNgMfQiUJLLXtC7M7uRyZZEip8pK9YzswYBMpA2RVRJ7PSf4qsQvz2",
  "key18": "2AGx3xtHa3kWkPdzRUpMtAx4TRfb7U4fH7WTNcCQ5CTyDdAFd7mqzhxUvC9DupzoYA5XJc8avzBDZn1qHY1fJbeo",
  "key19": "34TC34e5Wr1umwkQ8aXs4PhdvZe8vxWdnJP1jdZmMN775punYB6r3DwajDyUy3PQmsNrGEHg91rJPYCYecmb4ZMt",
  "key20": "55n7EXBbiG7mBdJyqyhodU8j8h2K2cYaadWB7D6jVpiVu7ZoJemsvFCpH2jrSYrGDMzAY5GstRZTEDQjMfd556nx",
  "key21": "86Eh8tEQMfTC6TiFdGpWCFn7GonMs7z146Xw1ToyxsXnVhLS44uV5qpPSemfQg4tRWr8m2vBDUxyLKUAvkvzFAo",
  "key22": "3Z79SdY1c7t5j3dq7eedAXxvA12qjgJ8UUJbjmfGDuDhdMwTMjH72F5bKssDRxfchJkBFyuMCzFhqTjw3mzWH1Q8",
  "key23": "XDRmzLRe6oKc7N1EoJ56y4CZ7egV63A3sPCikD7QSdYrgWpTfzLsjd6NMj8C6CrhHzCbL6f35Q2Jc3Y7zAghiRn",
  "key24": "26QSB939EHT1769iWtsobTkiPv8D6RDLSAnGvQCtQipee9u23up3ds4gESBXtmXEfF1Gb2MxyotFd8CYySxD3MDi",
  "key25": "5jmE8dCGDAYsPq9QPfJXtVcWh2WgicKWRTpr1s53Bvddsgc82TzEwPhLyHhkgatBG4j1eeN6bEcFXKk1tm2DJ5kp",
  "key26": "5Gq3arKxEN9AZzd8SLYMHRZZyUxVrA8J8kQKKqybpyvEtvPBeD53MJm8ciE5t75pjW4MDMLbE6abYxCjrNcJCQar",
  "key27": "4YRK1ygc5WbpJHxsPWSwFsSAAGNTkK8cnA9FC1z3hPf8Thx6YwoDZF8Bi2UjHSwst7zeuV1fPSTYxPv8eL1dXkTd",
  "key28": "3z93aecWPcfGGUze4TjvVk8zkDdTtHUGHoom2k8AScxo6C1x31w6P32jXFcp9ZUUyUbUxcnBV8M5ZnZcNaC5r79i",
  "key29": "2arA6wAbk4BChyPaMdmwBm7u4x5DB2mJkRT9nrUrmhQNDKCmnoRDa7TMPHVCEk1cpYGxfaFBEppcNve7RWu8zF1R",
  "key30": "4R3VTWbm6tu8exxBQN1ATMZ66r9F18Qx7EuP8rgUWEZpNribbeaNM8UWXosWjYjGQX4EbGJWEcKsWakFNgEsQ6WL"
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
