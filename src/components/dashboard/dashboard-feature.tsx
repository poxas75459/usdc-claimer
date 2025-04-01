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
    "2kA73UUjozwyxJPcSHFb7nuYx23sWZ7sxMUryR3Vc1CEzrMnmpuSjBKBreTmwihWfieCPPWyM58FenJfGypdCvgY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j6exRaL8z8y2irJtXSB2cmiSpg6WihztRcpBB9rSoxjEbVqJGDadKJxzqYcEKAWaJciP3JNuKiHbf4xfVMNasNK",
  "key1": "3W4KucRpGcQnbBr6D1yzmwksCHZ65TTxgF1daLFTf4HGULU43qF6twJk7BqVZsqEgpHw4CDhjkjM47ovTDD5vvb9",
  "key2": "57MECcDZ6NFko6gVi5NLb6L6E7g23dLiZmQjG7ZYuGEmgrQdogsiaAxoNbQT4MzjnByw8ohwdecK5Ec3CqnVwkyW",
  "key3": "3kG3aQR7reN1sKWZ6v8DuW2ooFKEFhrovHcomkrZk1oFCC9MAHXdtJCogRwHxdDBnC4rGzBfh18gMeAx3EZRG9Tm",
  "key4": "U7QsGW7GkPS1JjkyWg1YiwHJN7TnGZdwNVYT56KdZFFgoU5oVTDnT1u4fN7UeHJrCASfNuZjQP6pefY7dGEkS23",
  "key5": "3eghVg8vNFzuFfm75esKsbRGYCwuv2jgxG5Lwh5nNJCwmPJaKepkYVc3ZFi3KbShNRdcU8bkpc8BowprWHFwunQT",
  "key6": "5V7WP23EMCmiGMcuocYkRGzrqdSKm6cQNrBFuMJaDaWE3NNdDdHtJ1QtMsv6zpPRoRk9hx98WdAQkc3SLpsGeYmU",
  "key7": "55cYV56ZbHT42fmmWKj7uH7tGGyexEPS3XAp2TSScpNeGEKvoWYoX3r737zR6CrjbzKsp1Sc3GFLzM9gdknj8tKm",
  "key8": "4mkSaTQvUdQjt5q4hvire6hoMrAquBGakAFHSfJn8iybK64Ci1BUmBMCqEbcKXGbVLhBNRzwrzEC8cBAzKSpDLWu",
  "key9": "2Rzex3soPEaJj1bAUsbH2xChep5grCMkbHPX81BFsxPwBJW9MKUGEtD7m6V8GuxBX5PDznY5LWVTTiufgmP4Lx5B",
  "key10": "3pkTs1zHNh2jEvKMgUMsPcuRdvDVGUS7Wno1HVqj8zmerQU1gjzmQFN6UNuV6M3qdBsuEb6WGuF9xaDpSRAPrtye",
  "key11": "38SWUrmkeEjXCG6Us4ktr8KGFsLLvgR3ox5N4dWScEx2BMk5PkZXzBS29TzEzQNaREHasFWP4brjwrp1tgP49YqZ",
  "key12": "3ganCJRzxPtYRihjCWzC4zxZuFU2RDMk5UH1xc1wq2kynExuCnCng69STFgTAGcDkn2uJVoushFkuYPyWFAgSjnc",
  "key13": "38Yb4zdnUmZhtXo4fSp2W3CRkbezxwp4Drk9gEYzfW3uggZa2CShDeHvL3xVWUK7z85RN23LSnqftLgsUZKHgtoU",
  "key14": "PPgRJpPQ9Eb8SJWM5sVBA1nKWFFDSvZ8ZvPDxTyWNtRii9SsPZrDvBycSTXi2vNULu2UHKmJ6TJ53629WCcgkTH",
  "key15": "4kSzTD9ZUPCpBTufuKAbDHs4NCWB933gRVE6Xxf5Ar1gBQtYDuTShyntDrMV4G6Z52wurNjUJhFV67yiVB3ZHe3R",
  "key16": "3Bpt5kQPH4QaQuxxRb4R3BaN9VjBb7RKZekB9HWFGGQ2jXTPqbAVGyh6o6L9GKCnYGLqLYN4gkQbtz2LaathA7P",
  "key17": "2xLdQEeRiyT3oNT8XjonABtKw9oaWHZBHBTdRai3jfYzKXg7tASA8RdtjC6nCqkJCAxUkX8w6uTh4Mp8YvRmNgNi",
  "key18": "5x7JH8EtCveMojR8xoiv4Fuhpdua8NNsVhECKHPABKhVaG431NZiCy1zn9MrGCGu9GRbnxNykzBTLNDtSp9Sd51c",
  "key19": "47ZHEpPE7iWTYySMxbE2Hn7tsxS74qfkfAR9wa1PhFcjo1PsmxBzVrjAAQAC2QTYNgS1Sw2aRRjFJXMKVQqVPpBJ",
  "key20": "5xnSBJhQboZAcdc1ChTC1R1Adi4t2hXQxQdy3EDsarMZWw6qShmpqQofVogUJeGrPKkhMCAsiaCMdk1bXygYXzxe",
  "key21": "JZEYY8C6rwNmqtx51HZvWtqPFgsTU2LsFNEHjKGczFmevpEmuQCZ7vu7jk6M61GedZsXg5YNsr51qqW6FLc99UP",
  "key22": "2CDrkqtSsBZD8DW8JYN5mwpjjfnkXmrL9d9BnpRLpACQnAJ6TmmgfZq3FVExJ4HZh5X6K8A4MxxXiCa927UmA6H6",
  "key23": "QPn3MExvWh8Qi4y38kuBHpVX6e4uiYuvK4bZUZhUNoFszMPrVDNgtGUyTw4LR8F4ACXHARBoVpcQ8znpbDKzC3K",
  "key24": "5pFUgdAT7nujxtWGNVxjDxuXdoffp1RVJfWtQhQzXdF59qNRokrbGZAXSiH1vFCCwiuzcGqcskTj49RtMfqGCdmP",
  "key25": "5TZkT3ST3D2J1y5pLRukCAZbDdbZrXAUe97rTpedsE9jAczR5AKqtHjgtW7zpDVaTQKiyfvNK8e6f6iR5PPvbHiH"
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
