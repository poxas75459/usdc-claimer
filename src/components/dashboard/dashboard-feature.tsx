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
    "4bqfBhAnptXk589NpRa4oiJgAxiQCPseJ49vvbz8R5nfHMh3jxFG9fiS2EovwnkFyFxVb1Q3XdatRfpiVu55dZVw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q2DTioFp9FLoJ6uon4EQp27D9v3bssXrcY6gthkKod3Gc11c6BNhcMgiPBHF2r6y93FboNiNr9EfohKAHBaankG",
  "key1": "44CGRbHjdK4sNk4wmmDq9JCyVx7v9rJMV272x9NLBABCwCrAFyRK8LyS6tp6XsxLFRkJ3xjP64RDJg4yZqCCDmuu",
  "key2": "4WGTYUaCyLwVdvyDX4eXH47KAfMtekpfEwyc1YkEdiYbasbwhf8gkGHrbpgK6FgYMrYqU92UtUadHwzLFM9WcvkC",
  "key3": "2in2AkZ9m6YTdsrwS3hoP98yCbbdCqRAxNA3hS78p8MGZxKRH4XxCTi4vzmdcph93Rfvems3b1VCwuLKtG7Depfw",
  "key4": "4zHbjqkpi5UoYUHQ5gzcbp9D9Vci6KTJUiUpjXPqimyXVgDXkTbmxXNV4WFb1RN5E5iV99KxBkVLHSuhYJN6xxhS",
  "key5": "bcvDoXzBzTFAE4jgzaMkNMke8WUFjytBixww34Due7n8vMPfiqapWHU9z8YS8ht8frLqk7m8aHLE6WCdrQc7sNb",
  "key6": "347NsBHpvBh7xsN4S7yREQfbb4BZk9oKySEayMSoFymZYmycDTgdAVFPYyuKmf5uC7nyhtxbXRXEENyKBJL1qvh7",
  "key7": "3PzMUHA3Yj8eX4QwM9Fpdgxi5uVnYdUwkwogwTBkNR412wHmLDZqDuHfemh2c9nBrFFZxVbZE6ZSxBnsj39K6jtN",
  "key8": "7BWDYA6yxXK5AFH8z6mh66MZecPEjQyWEHhdEtTwWhiyeGExnAX9xxpfwWeKbVhjwdWJf2MpiPFmvGiDUbqBnwc",
  "key9": "56eyPrVTEFZCG9FG5kcBU8Te1WaXQyV9dgjQVPr65k2LzWrctgibmCdE3kqEKBS7GshNgCpxvvRM2HsmPvxyN37G",
  "key10": "4ZuMrr6qwAAEBfodkp1eJFcabY6DRvX4pJKHcVYQu81dYZtxoae7e5tmKNaBtHwQ5aqKSZnD8NgEM21UHiBmnzbg",
  "key11": "u23CQeenwYra62Ggc81JPLSiFN7BrsDTzT86KjbEw4AthPyZMYMZid4f3WKrZ4s5CKUaGs3bo5rKZDPgYBdt3um",
  "key12": "4SWoFHz7DW2C3hgZnpboaHg7fjxh1CznVJQAo19BqcueN7uydTaXFURk3uNm9AwMVXCSv7imhTVgZVApdnY48Rcf",
  "key13": "5f8LNCnTwZH6AXDYpmnNVA7KmyW4eo7Pdq11FqDhRWAbdAWr6LM2AEtfg1C1RysCZ7HZW7Vsh2tzf6GFhaNFctcB",
  "key14": "2V65rCgx3w46tE3tGgBbqGNK9qvcuMkgZhqWZamGYerYxaWg3Ku2a2SshuMaRKtAeRxWxKBLmC45RkCBsSP9oEt4",
  "key15": "5RrR62hr6qykC1uZWeUMx1Frar3S78omcUtgXwarAyYZDzprEKide81RHRj8jZ7LjCs3MXQmRDnhZuGDkYsTLwBt",
  "key16": "2BrcJb5VqZ8G1h1zdaiboLmos6GaBdhSHcSMAsHmRzoArrtDiWB3dBc3cveZHEKgxjCco6zmjx31TGNNgYZznW93",
  "key17": "2dyoByxzhKfw3hSAuYhKeoG22hTSi3xVAv3rrdBwLbrMpN2C1CpMg5H4apYYeRHxMvANJ2A4KFk5k4BxZZUsgZ2i",
  "key18": "26njvedhcSn7KQQpoP5jA1f574sQRahdD38ZEu4F1beojHT7mU9gaubAmXJsoGStLuB4ahEFDLx3NnJWrt7E7wbi",
  "key19": "44i7o3UZwMc6UEBTnsiKFNXSo2eiEBBLjoR4eYLN7LAuKMP1YCA25iSK49dFRLw85YvXar8k7mtcHJgMKcjFEeiT",
  "key20": "4qqqzPFofXU3is4bEUrmnNGnAa2o6Ezhmyvb2p1WQVkd1hVj3cTN9uBrHzjt4GQJAaWmqyqtza38CbGEDmSHoiyH",
  "key21": "pPHVCzrdWLLbR3ZQDpKSK1gQdoULHs4QYQLFUPTSUTmEpmdHBTudqJSipeS5Fzi3eB56QbiAz3CmAFzHvkEPe12",
  "key22": "2Vmt6EfWDDhfmrixRTan8j5ZBSURgXcKSr1zqGE88ufZAfQqEDT1YZm3ZXcJioPqPhrdBGCHbReU3aKrZgH2Sur",
  "key23": "WaqY18s2eo8Mw29ueEmKZjrTKTr5upf6W1QPtCUTN8BDhcWRdZH7DH6iXAbJy7VFDzhc3eP8jvrKQqaAuE3w2NP",
  "key24": "4PhKD6HsNAa8Nu39SvPngPvpexwbaSPpXKvUcXrvFqGGNbMwWpxynpJYdCJT2iJ81zchZgocGndDahEejDhA5d4s",
  "key25": "4bJnFTc6NimXML6S5o9ZwnRD6P6mNq7WGf4wTb2PQBsfQ9LGRi8evB4MX4QJMSPp2zGrDy5jNA7t4TQ2TwVh3bKh",
  "key26": "3Xjdo8q7fHDAKXjAbxTkLjWQHyQxX776WcBthdzFeKDW1cuWonaJcw1JF3FqSKCgSycxNg2Y4ZnMuzLEfzWB4GGR",
  "key27": "4DEN3hRS2gsmtDFmYKCjdBRbPJATTt5nu7ui21y2GB9qCKMSeBNHT9XMy4Ga64XQPnF1V8jLkiwLT1qEYNSf2ceT",
  "key28": "f6KC1XKcksn4jXfCpt3wAJ5g2hrD5JjZW52atTR77S7o3U3zovFh8H2UBoTXkUg1oTh918eVsZF2156YESuUZ6Y",
  "key29": "2bFuEK8uVdxhZ6dzsX7PBruJZXLUkCRtA6xqmvEXmx7GKtWydMAQe1mAuYmLom1dhPePga5WM3d6pNyAMXjkoVcV",
  "key30": "5DQpRvB34xSj4TqvCHQzZtnVMKkKpKjdB4aT6eT2LvHbuwWrwtARk7P2FmJjgfN59xbT5qTCkKeq2Pe6Lgi6VKAW",
  "key31": "5Z7oMR1QdKcSheeq5EQzhwpnBgmn1anoy6j4S6A46V7BHKcMA77Ck26ipaZFQpHfE6njdLDNN2ELLFvrBXM6Z6km",
  "key32": "2jrczem2Q55AXQAMAbHcra6fmh9X86wD5JoygdBaeryaZLcfUP4nKd5gQCqnM6LLEbXdgLJRput9J9oUki6Z7hto",
  "key33": "mWL1EC46vp4Rxn5zRSypEjfZk21zKXqzLPpEe5gurAJepSq9CPFAfdBrJsbbraTGLNBd15hbYAzdqzpCEXMnta2",
  "key34": "381kVaYwUyeWeD58jX7H69Bqif2WScsWFdWSq9F4HSFZzvTb1VWsNuLXUkvE3c6tYDXfLuudTfHBLxe1XWBjjEAc"
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
