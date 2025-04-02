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
    "3UzivapvA7jfh2moWAGwEkYkAFw8jZHUn8cLAQAbRRaaNNhQtG49gsGqPRSbzM8WPwE1cn8FEFcTRLqWvGu3FA7R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zm869A7Q6iFscP2VrL781JiLjdPzo9bK6EsBKoSbyBZUGU6PihScXLecgmFisT4b9UKVfbN2BS7zHaD7gtoNDKP",
  "key1": "5b23XzegQ7Ms3R4QKnzWLTHLKRtWz1XaX7eicJCSYdu9RaLqDis5MQmr9jgutjTPpsTnFHQnFNzP7L3uQKC7ipLZ",
  "key2": "2jwaeBzgiih5WB5CXHi1RCK2VEm6CgeGyxYrFSEUyKa1iSNP1DsMx8Mp3RvN2VXi5xu7JQmfUEUyQMBThXPQ7LS8",
  "key3": "2nPXdniwtWemaauXkF7s9NGpTJwUkMM9rA6Mozf2QFmkLUFPetCYBbohSXx1JiYfKAA6f4v1YDJtrfpryaG2rn9i",
  "key4": "3Yu1D64iyZCxWZgqajW2DwiJ2k3sQW35TspNn9UYRhKDopD32JKtkrSykmfqGmvcC7JodejQrKSJYZA9YCibfFdw",
  "key5": "4s9Av5sV6hx38KvZHBYEeV5rfjrujnsHVjduEB3Ra9AHfuBcF6GQdwWTv1NZVG2CHkraejVG2FEyDj9q6M1Cgyoi",
  "key6": "4cnbR4sjZA18ymkvxDqzfBvEea4nQn6FBnr1PtsrCR2fi2yvCptGcknR9qPAjsKZZQMwfiU3hGZFNcxBC3VaMJHf",
  "key7": "3XJTFiQtvaWRZNzYaXxvbv85A3bmD2RSyiAMy9eqdyvtQjHNzSjz2UfceAgxgTh5QVbxryUArYyghw2vS4cmyt7a",
  "key8": "4cQczeaSDcNmPSRGeH2uZ8GwaeXyNVNqSa6KdY5D1PybHEJo2od55QBjYeTNNPm3BZM4h8kwFjxvvjA9NSAEoQeC",
  "key9": "22gKsZ6QioJxqmVjUR3ekGwxaFkmLPapicKdX312VF4HRDzu6Ae4uYzdrFcru9Y589FccAGJXDQ3ivD9fJqgFrig",
  "key10": "5ZbbzzKqfEkFHmo4LpRmPyp5B9GKD59ggB3GwDHeWPCaKNKyhBSuLTxJMZgEq8SHoK26NhCCLH6wbgii9uuwfiQ7",
  "key11": "NBNtUyq3ux6AknUV7bv4wh8GHWCHNfDLYy6RarWJBmGYxEaYhfjmXdpLqnsDMVXijnetFTgj7SbL4fRMHRBNhpF",
  "key12": "44RiCUr7wuMHD7DbcczUAFtG2mferjUB1qKfrEgo9sy72TjmSHsyD9yWN9DsqsEXjT795SbanhKRJHmsFE8bmnNQ",
  "key13": "339t9qJx7FSZCBXvRsmMwfW54qChi6EXSK2aJCVaQMvuux5AGszWLtL4NhcAsdKaMrH1nNbjUdrkxfjNvKMRc9KQ",
  "key14": "31AZbeFzfqUSA1sBMhAuDKzXNBbez9zbyYNG2f4D6hodmP38U1e489z6hotc1NLEbrnL6D2aoWakgjHcKVdn518E",
  "key15": "q5wCx3LvZTazNMzvB8GNMdwze9LyG8yNRAkivE57WxuxCCPaZjchqRZBrk3wUAUZZ2FLizs5aJTLC5kRH4c6nRa",
  "key16": "FXrjLixFJYhWWtdKrjRv2Zt313c1N9Lqp8GgbDUn6rv54AxbgfH3FPGvhBgkpj7xcVFf1BPgkamnbEB14LF6Qf3",
  "key17": "nAAjEB2CBm3rvh734kmwwWAtiFiugLdsYnXhMVi2oJEKwTumb6Khv7ZYdov6DF8LmK9ZMe6yjqV7F9ELhWZDY1y",
  "key18": "2vBMHyVMDxhknuecRwR2NrHyFwUBeWqgGrXmLJfA53U7tFUae1YtqAJ8My2WSkQgcDtAWPubvNdRGcr6pSLy4Qpr",
  "key19": "2T8TQxonYwTBmcT5b4pfr4HKPV8tWjLc1UYb47qokyQWSB5PGP8te512cy42FmMTfnMFXsGebzqqn8x3Yap8SbMJ",
  "key20": "jjfZMy6oM4RciFyQSrT3Ra7cEC1TbXSHLcN8CzWSsQkDAvgkpUqr9HEeGPzpmusXoRRRqo4KD9Gckdk1xujRYrm",
  "key21": "4jVuGTmHYTWA9ZmyrwXUtdfdCfK9zE3rHFiDqhitsMDBnHoGoFPE6saVrH7VjL9NCMmCuVp4Ycbdb5SPh7AcascV",
  "key22": "2FSxx8oiPreR2b5A9NKVB8Wkarkr92gRvnsbtMGCvAHei8d8HzNWerJpZWnPmp989fywdpzpg9bzScSPLigXJeZe",
  "key23": "ssJXRukESSkoZUS6uexCFrWecQ5eTMcyYeMtcxJHmfeaFcH8NwBD8yUYJgMR6QQHV3kpMrLjAZE1azWo3LYcf5T",
  "key24": "sWkzjQPZfZce2zRG1VEnJxLNFa9WameqLGnvceDsdwrrvctPiSVhidfQo72YptNpdeh5trtbnjm6ZyZ6UXjywpu",
  "key25": "53cnvsyYroMtqC3XhE7sshaKyZSbbKB2wSMHRk1d4kWMxW3FYLB8WuaqoJ9TFS8Z6Scy45iyAgr4NSuPgv446UNE",
  "key26": "5SPi8mN6oTDKFPuj65qroaoJ4XuHVqti6GbeqEmXsJdVagubaoFXNUXPVxR4wVjgUKUB9hDw5Wg8arGASrJG7qSQ",
  "key27": "3HX5wBZCHFJqNrWpKfjERSixKW1MUt6guL9Y15wVVoCsFL7hsUpnMbEf3k2JicUK8rmdWLBKQES5BxYBWeuEhzB4",
  "key28": "38F3nh1T24cydPUaKA3nXT8LPbXPg6Sr4PDFYxMBH3rn2C5BfFbWrXcd9j8WX1zco4jyMPCMvZX67WeKPLYAQRp5",
  "key29": "2Pie93GD4FHMSwmcsUYsKKVd1SkLZGSWca37os8xtEVgkgCCGrc6nuEjUjfYHT1D3hvFTXhVfFHeUkrEnqogn7xF",
  "key30": "5Gfnv91D4X5s1cXNBRx5SYfk14tf7ThG7gMxUmJuMZefbdnytG3D72TqXSoHJa13YJMKvCX3qz4T9fEc4K7mHZVY",
  "key31": "4z52deVyptx9QmvDNwYHijBQThBEKgsaKAs3TLq3BQaKahjBytaa3Sf6jKoCfD76Um2qPFFfESawWv5vovdERztr",
  "key32": "46NHCFA3KmN3SEbHA5dvo1C7nYLhRk9ph8j5rCCrink2wpkWbpv3vQDGpnvPFcvh625SDnoFERwqrt4byKs9W5oB"
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
