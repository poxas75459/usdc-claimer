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
    "3gz17GpqtWY7dRzK3mpgovcQh1wL6bzmqecKSjqgG2dLCLT73GRr5rp3SE36jFqxbyDpfQRMduMrtQHoabHhQPZP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5szdwR8JAZygzbuXuNzMfvtoUNQcdFJkbxAkNbGrFTYAiy6G8QZDufnxZWhffQSRZugkC9LYTvfZ59q2hmUhmrkH",
  "key1": "61LeH79mUqF2vqDM2tqmRm4MojCbJQAjjHXu12TDBgGEVWjxovPcJCNiUR2vqfSoeaoCLaqG5yk4NgRg9juDu9rN",
  "key2": "23bCpxHXHUcnC6PAW7usCLCKo6A8jsbtTEiHFCpg957kUaNJT14GQK1MtzbyX8Nj7KhntSU4Mk6syZBPowU4sv57",
  "key3": "4FquUTdULRrwxgSDutp76osToKbxX6z1X3E5WFjgtSQnkitLeENSD4VEuBGNDQyaWRWTFyWTTEwQJyoqXTqDZ9Sb",
  "key4": "2krj7L83uhQ1TMZGd38R8aLjHGfi3Hd5JqYbSZVwK9PAM7d1nfBH5Mkad2DE1HpeWQJwKS8tNMAztS7qjYMoWcPd",
  "key5": "5vYmuEbLtrWHpaskeagRVtTkVxeVa1BmmdWp2QEjnjMr4m49QHAz4yYHS4eyTEZkebzJTpXDsQpevkwgZ9Aei7Uq",
  "key6": "5GdJ8AU1BXDjXGGk6zf5RDqB46vgv5HiBy8gh5BMPptFfeebzwjmucnHfwAz2KUbUyWBqVBwD6vgSmPouQKe6PBi",
  "key7": "523JJcJDCW5N3ic8G3hT1pmraknSFeST9w6nJnBoYua5wqGHDMH8bYhgmFEVj2rq6z1VGkgY2KAL77kmKXpQbLdz",
  "key8": "5V7h5mZU67uB6fpfWcWAVMjWu7rdU1XQ2pycenevTXbfvfAMNandW7d5hEGB792DC4wVKuXkKm6PfETwCNw1srjW",
  "key9": "4UeC7ugjAqDifSjh1CoZV5CJNaxkA3ku6yL2Ec8QevLokubwBNrDu2cRqm166Kjq5ybPJfM4MyzMGo7iUN5UF9DL",
  "key10": "2ANFMrJA2YfHeKYCeRYjKU25PE7HAc519wg2tNDwz7N8R1by1x33wtX4P5gM9qyKNCngDV2z97QLK2XRQ7DBMAdp",
  "key11": "5byuYmiGp7yrRPz1Xx392fRo47TGvk7LmJ7SPCqTZTQxhqW5joRjCiy32opFyi1mrFJEPngzVeRL5nE62avoFZrn",
  "key12": "3YUdUE2JUGRPQ47hJLSvSLAXPchBTiJK9EWM2PfUWQ9Uom2Mo5fmh9mHtkGVvWm32XkgCfh4HbZ1tYaphLK4FYF5",
  "key13": "zKB8GZ3Yhrxbm3UEjT3ka2et6RF6ebAY2FCJVLsC3bXHXHqQrcThwP4P7CZgh1N4TitLwvg33Av3pd9FyxKNBrU",
  "key14": "K8zDpEJ3wXSxKo97Ua7a1GDEN82Cn1h8qFtiP3wXptdVTQkLMjPqrFfcjmsV3U9JKKFFdbbxc2jYyR9KRt9BY6R",
  "key15": "5YrzpaFYksGBTivYXM1ZYeokJouuXbSKzXhrcaUTyV1Da2VPmLtetEVBEVpJ3p9dh1VEU2g7MALEfXJ1gnTqpbq4",
  "key16": "63U62gbZvPBY2UtjXYLkWVrZuRwYyK3SrSeQiQNW6ihmYg9hhexXMQK7ubvP8H5yFRzwzaLMJLPr6WJAZXMtPB1G",
  "key17": "2vQ9sSfS3hz6yLFpSheFrHPYW1gt4v2F7tqgmDTya356m5tfDM1omyME5yGfToKBG5uBriwqURWuAguJFEuSgsXd",
  "key18": "rpftKQgB7CaJhBHa9d1S1fxfUr9NLwhkJakVsghZUJyuaViQ769AhdLYXi2bSyYn84iAUcKe5fJVFzXqamfiByH",
  "key19": "3UwyGqGK2Tyncn6jm1oZZY4rFHYXeqHyJppBWrxxY2pHE3xLjfGne5pkCuxAEfVf2gy9ASEBF3agkCCuVF1CESCu",
  "key20": "2335VghrEkFmG4jqAxcUrNBAwEr4FYieW2yPV3h5PR2cwokkC7U74SqVJjb2gBSeBDSYJMtFWpYetRhLDKq1yZhW",
  "key21": "5UDwygTjpqGgPSDafqfeskhXiqDt89TtnWR97r6oLB8JdoX4CDqTDuGKbDAkfW4y87WQYSADrcSkkuQPmgjGdeSk",
  "key22": "4c6RdTqN2a5wtwEVAALmhutSJFNm4GEfmQPzmyzK7w48BXbQBggXNPoduLtRUbLwngzCgEvXUZb3khfMy8obFNBG",
  "key23": "64rbPftukv6vTz4HQQptSLFgeK4WypQRw6Pr9t99rz8BGkpPL4rjru4petutDh8Bj3XX9doAFXd1GeP42G7U6hnc",
  "key24": "5kZZnF2hyQiKPKaa6ryh74qDYGMSsW2uwh3W6Muki2etgC9nqbou6hFCSHPvnrq2rzVKyKXmvq4sRMRqncK5o2Rw",
  "key25": "5fWxrGewkCsAiPJHBrkojjHNXhdUmQL5dBoqZuvR9DYvpSN9RBGfQ13ny2QeYGbBQn6LBzAagH7f6EWRicGiFgs1",
  "key26": "7842gW22dXxfZAHeWLGRAFDnrYGHQtY1j8bGaiJSypaYV25r87aRiW4Sq9AJA8XLK2LnaVYHLrdGAXDFf2JxtLe",
  "key27": "2fJ25DobCr2ERegk8Zg8GFWbTWQiziAoZ3EYLVKcEdV7qcnZFRMAkTuTkapVrFizjdmF44dFNG2up4eHMMSkLMER",
  "key28": "5cKTNMyJuNj7tpARA66nwPHWqqG4UzwEGshaFxj7G9aGJjzLeCwCw2ypecBK1Z4s7D2bqsJnHR1ciYH1LLX7c2eM",
  "key29": "2DswKoSV9WGaVLfuWqimifp2aq3FKcxc1Dhp1nB1Bfs9Az11KdePg2EMQeCABCXccZmXA4S2W7eNVPzszanA2dWg",
  "key30": "S36KCoKKFdJiio3tenopy6HGUwwkjNmSMYTBRxR1ZDhyHBb2veCd78xbr5Y9JHdVt1aEKUqw1tPp11r2F18nm2P"
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
