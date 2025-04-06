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
    "25cMDPGiQnikWxpho4S8zwsiGA6VrWKgw1o3r2h2RDbuM5ez3ZKfeQpJTfB4AN6xwy6x54RPzB861zcaQoFESw2y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26EbkzPJxSHR4mfcaGb4bTpipNJzSu3StDSJyRgBPdwUESuiqtQ2e3xoWDXwByG9nJGnyv5MtQ3jKAcg1PFSycpF",
  "key1": "2LaThAy2kfgMLhMTQhnV59h9Hk7zjAzJaHFJd6iQEXePvLQ1uWmfVwp5sLqQEwj7tFtDANvhaRbmbR2s7qhGbA9R",
  "key2": "5rnBkXd86zrcTyKhAMdaYyivj9kyXEKaE6rccM5Gs1TEhfY31DgWeN1hdQmEPghWUBJrCe2nJKBPkJucA9xzMJUn",
  "key3": "41XPKk8ZPbQaTznSgbH2FoeCxsebeJQRRTSayV4HKuftto2s7Xxae8RnSKBWwQT3Pv4RpRMafXLnrtn7e9XnLDf6",
  "key4": "FapAEcjkz7EU7zoL2umKjwEQDoFNkDMt8SCswiBZvbZAvzxmC3uBRvkSNFMDGuv4qkrsjzD7pP4GWoMsFYdxb7u",
  "key5": "2XP89NA6dnfD99V9poBRrkRrGs3F9YFBtTGXuL1djMaAL2DDqK8Co7pmMpZ9zpoA9VTRScorjiCPRSvKgqeF2BBT",
  "key6": "jZ8oRY3s9pVFQz3SG8HMrLARzcnWL9AU59Lf7mZAqTTX5TSA8H9s6mjfvtwQ1nrCzFdae8kg7GnDZENTBmHKPTA",
  "key7": "4wWmdNgPY3vrZsqRG3nsDxtL7jrWgcnGm74rtVb23K5G4dGXdmL4pUvK2wcdReXqVQ4AJW7PeZypDacsvU7Rpm53",
  "key8": "JfNf22qr15iKLWzxcsRex3cnqgSWbhviokcH2o6JQhUZzZGiEm5cWXkfgP3rmfTFjkyGtMcdwuenuy22kgmkKWD",
  "key9": "3P7NiSQSUFDT6YaMnPWhujDijgWUaX8i65S9gJgWEiprqcK5Q7uvikwdvW2yZawPT27z87cNvf7RKKzwFvwpHKDS",
  "key10": "65TcaxDSpuVRbL17ExjXdwYAwA5So4pnesXEaA1z3grkKKVSaXssnoujHtBw3cpDuowDHUWZ5myZSvQyCYHvWC3M",
  "key11": "2otruS6Kma47uicPKBg977YKm45PHGqZumiMvmqFcNpv4dhZLe7jchkGJwpckMLtYijrKk5KNJXuEqGuVp9fWgWM",
  "key12": "4X8BuY3ns3Zm2STh3hE8qaukSUY1ZC4RHkFCPhPJrxMJK4QdviCapQMYvi2una1UqJcZMfuZr8q1kX1Db8eNAbz9",
  "key13": "2fo6pnZRuW7fwdadfppu3psRoZsap3MbMhY1RHjSa83974yAMq6WZ5sazqMuXDcxijM7h5YEJMQjnyrpjZFsibzW",
  "key14": "4rgmpVSASVtN3Rkp66xYAxKnj2HwraiVuymGuYo1HxLy8qzgbJzVuXCmuFDsEnDUWvfwo34ZLjke79NBNZ8EXKDP",
  "key15": "2DqDxU52mJKZjNd24bRxvK2gtP5PfctMEuLdaxCPrDWyEBiAYC66hCP1vtXHb32GJQhSj8vxn2SUVG9UaCnSKQjk",
  "key16": "4aTsmndBSPrCXerg3bYLgE92zJaipqSXo56kcyEn88axS33A8CXFh6xmzuU4hiJmrQ5wgkhQicyn639HH3XAvRzK",
  "key17": "4J7NMPnbW1UZsUMuLaxj1L6noUVpNfmgVgfCeZviU4MpeLSKvBikRCQRWPJjBDahXaGHH6AgX5E82y6W77mP29AA",
  "key18": "3JAxGUU5uyLF8JUkD89nvX4EWbxFEzT5QXgc8U65y6ThBYxvctV8zAyBtu7TtoGHSw8r1LvBSmJHxgUqZ4R3VMKo",
  "key19": "3c1BBj5qSHeZEakSmWnh4tKAzb99JzjVNuMBhGeBz2tafMBPLX3ypehuZXz9sdVebfBYx5PaS4UQp9t2F3U92v8x",
  "key20": "4iUnzQedRismXyLc9B64wCepMM7ZCUSxK1o3y6dwRWYsjKoyaK2guWejKYhjKGKWhGM2EbZdpiZHUj6qeSeaHwqZ",
  "key21": "2iaT9NK35gbg6LWj6QfzXdHLAPMVxNWMqT4cnLpm4JGS11sme2pTHweCNdieEJeGD3QXePCM3o6cL3oWzcix2obe",
  "key22": "2y6CiNXwJQryd7uR4tWBrnmRAPySuVDsndvTg5TR8R28BdW9fXoAhu2d1W3KeDsoHnjtSJx7Uua5h5UKxGT259ji",
  "key23": "4xowofzZf6HbCK6TMrZprxivz5KqjUxVhPtjdvfwtgbPggVMamTEyUXCy45t7pANsRi9UCrCY2hCxq9e8YxnyBJ8",
  "key24": "4ewC3rXLMZd12cbF7tD1F6ESh1N9BivLHwwqRX3Ud9nqEwnjUyJJp2xTvUZgQVfq31VdxPZKGsJWE2RunVcZYQW3",
  "key25": "yM2N5kDpFUechxE586QkdT4e4LL9scWpksp37LNzBgDjcQDiv4gXoDRB9keLDwo92B39kQeiVwSfpCrcXNPMCpL"
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
