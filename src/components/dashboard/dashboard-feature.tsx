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
    "5rTMfGs2EAwzi2Z5PBwhdPdC3dm7auWptyuy2KHVSBQusaW8c7K7GGMT5nTPMGptt6FWWDMFpGk5BMwPTAWuYSpV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dZ9Hoy5NZkaCBadY2cht7yuVbZ4Mqtq2owJL361M3Q2UtGkFmUEkqPMw4aDCF3E44PkfoBbfeqYUK4Jmx6QaBwY",
  "key1": "3XPTv8NAD7cZo6JYiwDQWrNN6YbCKunRoczSvJeMNqLBcQscq3rnfo1coztikZXDddLZ2mGjbdXqicrxvitKGAYG",
  "key2": "53KAyHoDmTfMTZiXz8rJX2ufow4tFmfuyxkJZo2rzH79ox5s5xUCf2MoDTAU6eHVXdBY3TLYUMnczkEkVgMmwLq5",
  "key3": "5ppgD2XpaXc6EUv5vqnhdT3jdwA9GGsxPXM67sCn28pVV3XsBMPVoXPHuUVDtD2zw2heARYDyXhgFXHNv1tpTYgN",
  "key4": "MkX3fjUEVkmYRprKCkLqhiFNv6mnL5YQ5MqZwynPxHSn3EWe581hHRwWt4qvjiRPVTEXK7WDnZs68HmjStgDmnQ",
  "key5": "Hdch1E6wgPb7bMDUb7YnNxsSyeacZttoxKXjYvA7EqVERrhvn3gszq58Ukm5mE4SEmCS1EHvzz8HZzF66HjbfgG",
  "key6": "4t6mhJuYSodxW6MFEnpCtGBaBaMW4ss77wLJoELpXuHQvXBfFRvvt4PhqBYEkRTh4shMSkt1CHjtkZNRgWBfn6iG",
  "key7": "3sYnvwRmFWzTnqtpgWpeZ217kjyzrNeHWKvzH5JDUbFfFTFbgQrnN2PzeM8qV7yewveY731ZDFutF47bgMLunWaB",
  "key8": "CSiS8CuGZ11Zzj2mWcM2jPzvHbf2RzRSZ6mj2JAvWjvvFrWDNcmAZSdSu969CQ4o7qjPrrG5K66nv7QpF4A5prq",
  "key9": "3E5zU4VgtYRkSapi61dX65UMEBAf7DwGVWPNG4YLvZmrRi8iY4oA9FCAh7pbvFW9od13UB8g6VXdzSWsVL57gFqY",
  "key10": "3Z2LUkWuS7sDv2STgCsNRUjtGhvo7wArunWECfEiJWCcB54pKqvtZiu9bAsqZUbqS1pQE8rg7RGSFU3QjAvf7dsT",
  "key11": "3uZc6iis3FB7DtRX8W2KKodyHSLQQvJg6cSGkj93ZfHQF8zMDUNf34quQmzKqMGMAxdZJvDxfbqnY314y554Wzu9",
  "key12": "3BTsbCu1iVf8jwG9Rz2NHDtbFXCx4KJNLUGzpZBHcYZybvtxUsWWPtdfURitPLNRAT14yRZb1Gsd89JpA62xg5f6",
  "key13": "5rx6zKMAi1EjjsToj8uEzTTso5x5pUEsUqLCC7v18iNPt2e7fqiL7f7zYMGrCNL2sEFcafd9R7pwAyEyxYbe4BnZ",
  "key14": "2p63XqcoLzDBK1iX2GVRjrNC67iGcL2x9w8LSnZSNrNqk4RkMXG3JmDHwwJ9Prhr4S62fuRPoeHcoct7ZP6R3yVx",
  "key15": "Ec4YgGhCZKgYJufrYaioDHQcF8hAcnAj3U8VoJDRMLX9vS2JDwZ3PT64jZkf82ysTceRq7vF7xGdFqVKzsGs1ub",
  "key16": "3HjvtqLddi3ApAR9FBusz1Ftzx7xq5N6Uf6LgsvgGNWmtAUJDxdxidFaLSi7P4RvDeB7qdS2XWGjMTQ3DdtSiRry",
  "key17": "3fzLn6QfJjHwwfhK57EFTAZ1eC91BL8ktyZESUVacph5dyQZrXd98Fqu4JXzSHMWwBzj9hkrhy18e6uM988qMM8V",
  "key18": "61RFhEVwjXJdR2wpABAvCKQZSnW4pzXcHhAjhSMfC6xn4A74DmbitGC8Z1cxyLprGa7qqizDMvtYHBddhmYLfFQg",
  "key19": "4TcyDczLXEcDqLbKYp543vqbejeWP9bKgbPZLyirzJMJPQcMrT2e7xLENHWJhT7Vj5fdkWjiJM9m7LUegn1TGpaM",
  "key20": "2YqdTU7kb29tF1shx9zbpLXgYeXroMWYb1u3fm7vkujegy3PZKcAEREJpX8RD2vZaeP4kWj3ibHnu6NedjCvCHzy",
  "key21": "4htr6mbFLxbY6i6s43RfFXjEbJ9spY2PqQuzy3bSf194HWMm6Mr3wCkHHvbNwH5stkVRF7ie2Q3zJaN5RqLdeFGr",
  "key22": "5LthRsao1t9Ndf1JrS8HmxfbRowQw6UCDB5eYC5iDFJVRFgntXpsxnCee4nTqcHHeW9SQAaLBT2kNc2jNa4qwxB7",
  "key23": "2RXPVfviR1UV4GLEnmg2srPec7fxVNPd4ijtRgjrJ84eE3h3MMmZRNxnTb7L6BDGHi6XA6etfVUbaURqsYSDFbbF",
  "key24": "3V6SXFMaYiSeL9BEyR7oaEpvzmxQrcyzuLUPRLSZn7GHUXrQB7Adm9ZtWCFsUWfhHqttmPNEA5kiMyjAXxxT9mjn"
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
