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
    "ZPWKkVharywnA7AHfZL8GpBQwSsGFAmhuugQAoVJGReGcNyQM7NENWAqBNDjiYhkDU1ohDwUb1d5NMGkhavnvsg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53J229GBjs33bWE7xQ39VRkP7bgUmz9PZPiLH6BKzu7x6HPGEXekEFfc8ADfWyy8szJYL2cJuszh5hRDntxbeXju",
  "key1": "2X4Q11dxQiAyA4zBpcZ9KXPz3yn8LSHiqKPVkmUqbbm1quzsYXKNNjTGiUnxVEsLSdkDL3JpPChM5ByTXQ4oRMoJ",
  "key2": "5Lm3cfWnZftzibmk5aUKAqBE8Y3MKHWWBxGd2rEsCgYg8UjL7rxivbEHG5pS8kgwcgy5KPvYBkXVfE1T4NsCCvU3",
  "key3": "41SzUHexHhuNQ7PqudKW81oNk9hLfsQ6f52AHCzebRxAJdzNX9MkRdDezbvqKQKdPb1VnXkmYBzSqSQCMkFvHd53",
  "key4": "gySeb8bw76K5K86ALL4NkD24Tt3sMeapLz87pY35CxePFLbjj5nmqWqNrB4GABTX1F3ZngrMsPQnSfHLbntEMZA",
  "key5": "5ftqHd9cEPwiwDR1PwBZ2VUw3euprQmEM1MZMHg8c4opqWnGsdQz7LGooKoGxb6DVhyZorYBzVeEFZ8HGRUskRB7",
  "key6": "wDAw1DYPrhc4nRJBKUN6xsoPd4pozA9HB5GJbt5VTyC24cXdBobTFdN138Lqb1rZ42JqjS8kDNi8TN6tB8AtJDq",
  "key7": "ib3eBhr4qcQmHpcCpPx7uMpep1oDDxjnatt8xkSmUNyKoqMMvWxSXKuSbDVMq3jcqKg8j9gH6KRqZzcQ14AZ1j7",
  "key8": "4YkjzxwXAuks8krbLTwJgagsbZUW6ATmVPR4twuTdan8USSdrpzAAZPeyBA2aX39f68FGGogepmzytdc8bAvGDEc",
  "key9": "5rTvncw2fiHNhtgGgrYTWzuqGySseKDjHUwDKhnVEcbXNouHQB1KDBfhyU3gaqRUtpYR5axHsR8AN4yPB8sNm2ig",
  "key10": "2PQBuAuXwebr13CgCU4WCuA6CBPpa9P7LxLjNYrFigBkncKGrTY1MJqGSkknFCjpFNPnAftpYrGtRby21dw6FK8e",
  "key11": "4f9Mb8P3UvxYVe452Gx4P21Zg2xtvFx4hU6y8VfWvR1rCLcidZZbnSr6wegr61gX51xTLiT82uoVgbPoQvP3vUj4",
  "key12": "4hJ94V5aUXikyCtstdA3FeRaXSPXFRZzGA5KDhpoCw7PBEn3RaUDMA4qHokz6gy44qRrWpkiKaV8Pd7eW6mtuTGo",
  "key13": "4Z9rdGRhGFNmoc3v93NGfBfaPWqhMqFrmjJUUM5HNq81V2wTHfEUomrmYUaZhkhG9YTF5dXKqiw1ZN4Kc89W1a1S",
  "key14": "TVdB289WwSBfKCNQcbZA46JwaEuPS9S1jGMKRBpwbEEcjSgh4kLk6Kf8bbwAxFp2E1ZCCkmcPJwMuFwakXc9axr",
  "key15": "2eBpKRtv29hhRX7vtzPpsbukitYxWSkcEGqBhfobrYfYwkST4T2LZsSemQAujKjQ2jiVZiHNL6N71ZJuFi8j7nWZ",
  "key16": "2ikLhTEbEZ5ksEZ5f2vXF375Cfw5mcBVMze53WY3wJL8VKFY7tnSWYJDTWzvZMaTK6NGEfZ8ptBKEZjvzqo7UhsX",
  "key17": "WvVoaEoFKMq6B2d2J9EdzS6jxxtCXE4wetKXpCKnDTKtZt1J1CXSPKXiU7YP3yJuEE9kjoKf82MkaEV9XcR8Dwp",
  "key18": "sgtHo2ftMmfqELRksTucKuyV3qaYJkkUoy6DwRx9SFS2HUhUsNdS7BYhpDWo3VkTeErjsLMQ9XqKL9GkjfnkKv3",
  "key19": "mqV2oC9PAt7HuxKi1UxvXMtTKt1WDA9X56YVm4LUWmNKZVzWU6UWNdDsKorCNLhRh9fN3YTYfXqdpbFqdPtkhAS",
  "key20": "5dbwA9UbwRYMqaeNn2nQC2b7hQstt1cB1dzDCJsFcTvAk6A5dcXkXgtYkBPrHsBha1vZ1zheTddNLv4s3yvcbxJR",
  "key21": "51CVJcrARm3oBNH6S4ceuZcpxZScRNtx7d19YNs7MS9Ucce3VfBGHYuLnLoGsDz6xR4pt1wgRKaicWuo1eQE93pj",
  "key22": "2FXvr5yZyf2p4RSxtqmPbv1MKKsewfzLZ6JDndBVpf7y8yCpnMXB7GQ98mz4LYkSBPDhyeUGbMvpLfzHcgwYS9RY",
  "key23": "3o7ojoH8m8ckKMi5D25S2hvUZwHLuM6BaWW2yS95qnHbz7aLKzPKwi7CiG6QJgVAN72sBoQBB3WCpD6dxm2LrfQ7",
  "key24": "4tRepfzRd1gNc5pDhFtZGecsYXK5hPxNZ8Xb6XJmVQYtbDMA8sNw8ki3jpeZWcDspAzZXp1d1wvNUKqWbVxooVgz"
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
