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
    "RE7XMzY4PtV8gAhxuSnf7K8YUmrMVUqRa1Bo2j65HryZinS7uLhiULBwUUEd99cybGhwHk3R3SpziY4hrkpyQix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54Uem53RWJDZRu8KPC8EEvh5N3uTJdvsfmAwSFRLnLH2GHAt7LBPVKrk7xYdFyrAyCGjVMHhSA21UcTnTnLjHWfF",
  "key1": "3euHsSrWrXjUEMfyL8CyLeEAn5PVgozkSUUMevAM5hc5CRMP7FbTFso3VhGyt5YMBS7EpRd7cVa1BKwxLiLVX3Ax",
  "key2": "5DqszxTS1mLVpSGzaynQvBQthKnLRqrtm2BQWe3JHu4BXbzs4GUv94Jo3fcaCVPrGMweBw7g3sh6UEzsMQR8ZmXQ",
  "key3": "2EkNDHimsuTAVhRzYvjjDEvkwatrj7tfbsSdTCNVg5HoB9n4GbZAKqtEyHy6pL6XFcLMm548EbujovpX6Syw4QGq",
  "key4": "563dDs71TmCDc8aUK8ZGvfmgrVU8uMux57jz8HQTbYdDonXkBXr7LEXZMjhEkGsZvUKjWpMBwwB9y85AJLMKp9vW",
  "key5": "o9MrUYXkn4yGdjTTH4a5ZMNvEaHU8UKSTzys6Gx5YRpejEHHZPMkvpTmBwgyHMw1EU9bPsGQVpJk6W9YZT4qqJg",
  "key6": "3T3WsVn1nEVWRBkdXYVVqaVUpTj33NFB6oVFmTtw7Pexvy9ntLVptQ3od2WbaXTwGabr4zmaYURSnaY9Dbgxd1Jm",
  "key7": "3crag654UdgQZPsfbmzLe5uLzMZ63ncdDrNFBLDri3EniTcv2Zn5YpyjzP8ZQayrP3fecuqS3VfUs5EjyHk5hoNe",
  "key8": "3MPLeNUUtkgMjMqt6moNfAi1uSocKSs8t2bwvgAixySnC59etaeWaM2AwBQgNnmzocZUUxwZNK4Nq55DbQsU44C3",
  "key9": "3gshsaXDR21wgHVhPfpHvwQCLWoYQk55t3VhZGTheT4ErimTnURNqvAhbLXRKyh6y1uD8u8fZ86VDsSJpRRkm2Nx",
  "key10": "45yXTKKF3iuqYNi8saL6jiRAYsPVyWyJKT4uSH2gzTDPuCWPiUwn84KEFcRffwYmT2bAJuYAW12ng1mYUZrpDiq4",
  "key11": "5UqaXBSuabij9cAhXCeho762Bem9Ec1Rd92GNcwiNk8G4pbproPdQPKfbwoucVwehXhodnUhwJbJdnndZVScY2Up",
  "key12": "28o25T2rrFkYKTUFZVbuNs8Avjd7xLeWjf1RMTuxq1t6FAjbAeFQyc6xkt8mebTx28JuqBBRn66wvZV4VdLxvGhJ",
  "key13": "2BZgW3nM4EMEFNV5skMntXfAHD7t1hU99h5iAR6BoaC3f4GnUVhQ2WD7uafviHaidjB55raxsuVyuhCzAKQVWy62",
  "key14": "4qKQJ3usJJuYkjKd2TX4o43m4FK65PkaeSUNEwrBSWTza8ednaNkYPPyo49TwaBGYRYXwYMHtaN4ELaMUYeq1DhM",
  "key15": "Ctqrcg1ouXAUwwkQWFePMV8EWa2Jw9w9NfXa9FYSeZgdD7V5RkPu5w6LwLdnyDoGA4byfZxorQcPmrbT1XjGwnN",
  "key16": "2TGC33KAJ6iJvBxQQM6JCiLBQdK628NwTkAYXCVVfDgPwXLY7EFEgZq8rJRCoiNguJCb1oSK7x9TvsiyMJEemBQL",
  "key17": "PuwJK2kye5Ang3fB5ehzpac6obwKGsXoXDXhLwvFS8i39bcspzSDyy7WzF8AFfeCMfBHUsiDztqjSvHsKp4uGCE",
  "key18": "2WwXyMwGZ9MuAhfhP5TSW9RHScNGXmwbQoBx9icSZUZkgAuESNipkLGqh7zKpRqZPpd4rMWSjoE2xMn8SQgSLGLe",
  "key19": "3CLJfcmC6ikyjFVNhjJ7Rg3mwarrJZgRbRPqbHg4CDJAvNUNtqSdfsbBA3nUDd7n9RC7x54JCWqt6dJbUBKgLyAx",
  "key20": "4X7rVdzw4xWLvLJsvY8mTorNE931R73eUNiQ3y6HVYYimUqzqiJvySDhX2Uy2Ao1S2tWcH5HLoDtY3adtLMaLa4K",
  "key21": "6UbEAaPbx2iKc1fwau77A4mNUNAkiX4sYciHDPYDMaKJN2DgogaAtJZzRzEnpQRqtvPTs8nKS5rRRWLZTcdB3RP",
  "key22": "52oNM43pjdCFMVb3tP9giDeMXMHTpn8T6Wyv5Wo9NLokA4QC9fd85mbLFWK9tzm1oxcaAmHJXdtcYdPS3RjEGsny",
  "key23": "6s777fXsEFN9StToN5SxgPdCC1fsajP8rFTGX1HkCcnJfD8uK77Px6BJqdMrrYSLN6L8NbvUN9PfzEgmQzmvruV",
  "key24": "bDx7fLJnnfc6pd3SYrKJ7bVYCXc1WkunB4hqU5FYygfQQRnQqYHQemhH8WwAZHWZ4K3Gp6B6pKqaxfkbAj4jRLs",
  "key25": "33BpLPefeMENQCjqfTZ6ni8vfrpuuhkbpKo512NymrV1v39ge2uD6gTysnowRi9EgQKUcsbws4BKR9dnnfJfMLLx",
  "key26": "5NDLAC51NyidzrHhfM3TPZEZcpYdBg52B6nhEy8iDqP9roQ2c9CFUBiyabJ8BRVBYN3ENdabjUesngbpZkGwy8Ys",
  "key27": "44FZUjvfPQDCS7BjUB4EReL3D8RiyVEhfUX6mhMKUcVKywZHFKUUXbeqT4FE9GTtkT3CreMpKcYBUdsf3H6XKAKS",
  "key28": "51PPM4TYfd5KTwrUhWKtXrh8noXM4EX7bScqn4yBPpEKZAfGrE12nTUEymafe7iC3HCCNfmF8no4X2RzMKo8UKwz",
  "key29": "5VoWCvjdQgkdT2Bq8E3HiqwXh7opA2PcJxiuwcxpGiURd3LDWSQFGNNivzvb71dyTH7kXqKos2GQSgwDfGoKLmCv",
  "key30": "2PkJnmjzCNy9HD5qHtgtgfQ2y3DUg5zAUCBPbFW6XnXK7ojaNwc1ip9JTEH4WeHZJnT5dUB2FXPD68Rqgx5EsKkT",
  "key31": "zQoXrHBfE58aTZdc8c13XWUab2FCyKNhbhC8tAsAKthMGsNrJhNoMUoW76dQnsQqk6govzoUuQfJg1vca4DY1Tg",
  "key32": "4ZHEyAmAqsTEQ8JJ9pDuzZf8Zc1Vb7GDxMwKfEBPDU9WvhUQ64rrkjdzWRwgA2M1gcApxks7eTCQ6FFQmhq2Uwyk",
  "key33": "2MZAqU4LJyNY5gLTwZh8LLJqnx7MzFWk1zTPhszPRKwrbTT2VN8vMwyP8147twphFJaNGGQoghH7rM1bvXrAf2tS",
  "key34": "2xNB3HVWLiRytvBWbP6kcgUgEBQPadZSR1ihnm8UrzdYRTmpFvXPRUNMX9CJneWbzkYA2WsjJz1vwd6w9PEwkTyJ",
  "key35": "3UjTc6wfySRvh4fC4pS62shLyqpRXRquiWHNqRPTRNJF8BFpagVZvxQSpBTSBJR3bPpsA9cjar2QLxy6zUEDr3S4",
  "key36": "3VzJZuRyEMaQfvWGKStQz3rCg5jXt4MBiphmJ1Couqkm5k3mJYb68JSCN7MSzrvPqU74ssWsfvCjgdJ6b8psgrpm",
  "key37": "4hve4GLWjLTzRuPuybxHrASFKdENSGEjt8vVkfmzuBoonPRwp5RPRMEENNhPesP55BkNLojiATdb9Xpwd4453gNh"
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
