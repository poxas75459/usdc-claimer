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
    "4bjA9mBWBZYDC69CnYdyjjvyDp7JVLtXAU3WE42HNN9gM8GV1u7T2FBGds6R4Q4qP6bxCCdcesAzm59tnrHZrT4H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EB8eLVySLQvyMDygycC9gaSjauW57QZXJNFphUrAS8z2ZMzU5t4xhMVKrpMq8LwuXi9KAGmEQsF4midtcnmSFyk",
  "key1": "4meeS9UJdBpednvPoitZ1KFpjXRyx2dd4eiyzNQYRprUeL9aNTug6Q3EXh7TxAPE24BPviG2UTPQ5VRYFWHb6gyd",
  "key2": "4Cd3CMJtcuqGxvPaViLqWeyusoXUfDyA72iGfdoXDfTS93gUJFQFZPHqZt79hGD8G9YBwGnkBHcUQBpdaWWxNdeH",
  "key3": "5zyMrbS2qyH3iPPz3Wmn846yFn7zFtVppQVn7iUf6N3ksESLf2wN1E3Sz4S8Azr4cp4UXG4wxiZbgpCXzQvSRcJz",
  "key4": "rT8Aya9MkEW2ZexZy8KRFub7aoyJ6QCRnCqSDkBiQDVwimypQysiY63ercT4V27XHEcW6gz4KGumZym4Df5VowZ",
  "key5": "2UjFfSVLLSdKjigkYkyZfTsiNddpXgbGuVopW2pt9SLxVrZdbUpKcG7d2ewK98qmHaS4BJLDbfpm7Ry7VYBUQTA9",
  "key6": "4hyJ4sYVBRj9eKsQtkcq1YvwN765ZvKiihm4QrpozGrtivyj6PfYxML4ATw2qrE7k8rFNuFPgruodXdizzEpBm63",
  "key7": "5tQyVyi6ft3iGxyZBrh3WHG5szQ9tvbsQhRYKcjQdTFqhTbQ1Ak7UjBfLL4m57mVmw9Czsdj4NpVUkvKNesxGe4d",
  "key8": "4kHkv3zGpAZwFVAVDbA7ZcjneUGawuMhEonsGqYrjG12DvXCzHtQ4iQ2UXzn1DUUMP4doowJ9f8mCsR2AVzw7Ckb",
  "key9": "4NkfJPxuCr7wn8kzuL261YSurU71uzbPp6KA6DyhCEMeduqTEbDAYaqkYbGPtd9UL2gDyNf8QYE1NiANqMwuNQKN",
  "key10": "3WWvkF1PkEfxLwu8pXLduNmZmNjoFHrP1DuE1Tk1fEV4P8bvHUCWVkQj7ozXCJFporLWZcRvkvy5NYP9RqxBP6qL",
  "key11": "3xHxdttMZ6EKB3YsD5g4D15VqSKN2KHuPM61NNLvo47xkXciLZKyMiTnTsjEBddzRGJFuQg6vN7QeLgxFjmn8Erh",
  "key12": "4uEYSJz8pP4fDtyLSd2EtQUTiNBKA395T2ZjSj4uRNezEu9oA39tYrpkDPXJLtKNFDRqYRpcrzjayR4Q4ENTGU8o",
  "key13": "2icF5VT2PPfkR2xYYG5kv25pAuduNZhwBkEpB44QkvQBpwqw1vy1N8W25xWZPjBmesBQSVP2roSk54yr25S6HN1P",
  "key14": "53jBRgTHZ2unD6NXQePjugk4f98Hb5j2VaVgvnoRksphe5GyaVwfTo6BJmecXvwkkmYQtDuQuQY9jkG7NPbhSoLA",
  "key15": "ea4g2Q6V3fH4JKTmswUkRP92frnNx8vqqWrMDKQCEt8GDUxGCCjHJihX2HuCLi6QM8U6qjP3hNpgsDQp7xRc81n",
  "key16": "5Wwmq5ePX3aPgtG7Hs6SoQzRSTDFwoaw4h3ktz7EjMrxi155Yh3R5Go4eXbw84RQ82VymvC4kXn3CQ9ShvcuQTLT",
  "key17": "NVcHXCV5pHKT1TrTVbxYdxHb1Xgx9aqYgjfRYXRFKi2sQs41kEqESSLKz96bn2mwwMrcUkJP7b5yxRqmf9CHBWb",
  "key18": "3YeT8RT7EiDuFrMtnojoJ7Qh9zRiLTHoNh6T7MvV6itFeLUDvdQmVSZncKHu7QAfRAhmxEy1hstHoYHehUsZq4qv",
  "key19": "3hiwiJ6tf8beGwg323R7iYEyKRqNuuepZa7Pb47mcmsdYtMTyG4GGHx5xTUoGvY3HUjUCdjaKFnHp5ymvBQ9c19B",
  "key20": "UA2baTqv1R6ZWistawGCcYRJHzqTNtfTnfFz6z6qBGfxGBSybocRbTyyrQjpZMbzGdNz4CUf1EqCVCeuT4NZaRz",
  "key21": "5xj6Uze7KSwhnKPENWnc98dG5YdDnkFJuQkb5oZcJ6S3c92gwc75Hv8TQz1odq1ragGk5uT28SnDGkWkKRPvN7EU",
  "key22": "35YpYgsm3Pa6biLaEXk2Zpq34FkjLaYh5wMtrBuvfWq5HJaYyrojrHErqsQtKi6vzFUHkamNNADsbDU1aJEu24mn",
  "key23": "314TmF6uN7fHqxyg79fqqv3HGgkaC2vxQTXSKHKJD4dBr54shvp2HMbUijDymP2MKYXxBKAgGMGHWmgWKKM9U55w",
  "key24": "aW9MgNt8o1dZHmub9S9atGnnzg8Z3kYycWfomxnvFV6Nu5ds1f5AbedUmc8XpiYCdG1AyRa5ScVbmddtq6v1PAV",
  "key25": "4LqWRtUuRgxq6WCRgEvjbxom9WLYSpMkRNbwwEVoJB7apVt9Erd6wEP14ACAPM1Y2FU4jH7WNwGLdy8WpSjsuU11",
  "key26": "2DbmwP2ULKv3DzPTkJW4BysCkYDDtLd7GzrLg1f5fgcLPkNgZ4tUrLScZGyLz4tbitwnvUPvgU2htGfqhvLuA19k"
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
