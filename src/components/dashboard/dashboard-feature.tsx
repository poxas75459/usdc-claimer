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
    "3GtF3PE3LTkTHa6XQ4NBnqr4urLQAFbjdQpSGw12UNtuZZrmD6b68HK9rJgjg6meBoUE57YgERAETrDLpsSmMbGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NCX5R7hQqh1eCTp3wN9PoK8niiZGCMzxxG9kssJXzkosnmbhnoY9ULaPtjcNNKmeiwQqYaMN5ynPgKS8FCRPuPS",
  "key1": "48TkE9s9beC4pj8F1brdT7LL7SQ31nGCfkzSi3JuRUWojyQr9jn4dcmpuY6nmMAcRNC7qgS2DPeTvNGDqA1fkocU",
  "key2": "2DHXaAmjRqB5AuEy38bKdjsKJ5YBkcjHsPAkosawoWj7VeCcbaZE9hAGqvUEXtHf3UibEyKuygLRwvpQ3gB5CBCe",
  "key3": "cxhmx2FujM1GQZKXkodwP4peQgSDCdZw5MZ9xnjwis9WQnyiqtJjcSBiQnTCwszKuejxVdb5771UkixvdD3CgPt",
  "key4": "2HmAzixNoECWrkurMyQ2eBr38aocW5qXddMnA6SEgpvuSuUZTYKm4gJmw4rj6vuULEMyX3cxjB4BYXJb9RrfAuBn",
  "key5": "4CstrF55Y1meFYEqoGuU4crLbeTHNsriRNDcVC3VUchRzC1MvRNgaPQ3Y9iUvn72wGotjDVaK78inLLyNbHcwrAT",
  "key6": "uKMtyPBcCZ3go818eLbt39XeVabgDdEmHpMm6TRfyMVjYdrCSPNiFwtpHfmR9uhphSjGKWNDZGrPZd15C8qb7AF",
  "key7": "5qG9ndeaoGmqBsm7STfPZ1i6QLKdnTasTFTwGCMo47FJrYwvrNt1YKV4rWngqNAjnYKXk1QKaYob7EZ8pcxks6iF",
  "key8": "4uaVuw1r6nbFn3p7Csg4dMiHRyzjZvcxJ8Z5ANartGuCWMSGrQB2ezfsPK5wYcQTQ3vyHqRoqR9yLXj1y5DYDzsq",
  "key9": "2kVxWEbXHcYdCsjfwzCXtKtdzNVPgCzygJd2oH3vWDJeeGmTTERnADmQdzphaKhduRCqwBwHfLo8qqPgZpmuLRfN",
  "key10": "5VMkEie1KFcnTg1cGLxj3HYV2q4oa3KGzMMLw2yNdBfK2j2Bo1TAvxq5vBmvA2NsNQDeDQsmVYuDLygsiJqXwjw1",
  "key11": "54ffjwwRMAPZmUW5uLe4sjuCLUh7MNnLqN8FSpaY23k7kHcyjrFJXUVLzLjEtcunm6GyqNFcP51j3q5MHVUv8FtC",
  "key12": "4VmNNgz3SmqcNGfAeBxq6GbaaB2Zoz7pRtvaLuLnDN48PZpnXjMbEqfvFzeLMMJEPysCi18miBcYk2bUU9Q9ZuoX",
  "key13": "2JAA38Ae8PJJBNV5fqUxYpuRwBvVnPe5Rp5D86A9qDPyXrMMEf8bRb8oLkxoVXucJFDwdVby2eHQxjXRnd3Cbihf",
  "key14": "5LiYjqJjWXhmn1pKEZ5Lztijp1puQFG5nEecds1ThUh1pexFUqwmNQhTk2qdB5M3HXZWLC6hnrtu94V3YSiVaohS",
  "key15": "HVWj2BMNmoWPNDfhjfw1rVtCkSLYvXz5FRsXdFbuJntxmsibopAT1hYimdwTBGq4BLHA4rjSnrnx9AdKFCDuAG9",
  "key16": "35EHp87z8bNXNJM7fBHTYDhDDid18oz6uz22YfvyqQ3cSFRBi1Q9r2AwvFR6UPp2C5863pNXaNWenHZ4rptrpCw9",
  "key17": "5ytpg7Pv2Zgn3PaosUtHC3ag3ki5K8MDsERpSh6ZDnwDVghS8hbKe92SNPUjMjcLmxvMEoeQ5nq3fRQbLiaQwSYh",
  "key18": "5u4eAPntFkLXdGaAH5121c5qjZ95Cp1AWLdrKX1K9BQnB8DQLXAZac3kq1dYqBFuuoPr2BAPwzxSDj1aWp2zZL2n",
  "key19": "4tVpZh3eW6xoBEumYCki4BqTAJW7kWxe3Gpb4aaAQ5YoRzJMZAWA6EWQNxoB8XvunzizSNWawNLoaePA2CFB3Pq3",
  "key20": "5ux8KyYTZWFbEdnJ65gKHCGtNvANgxbm8q7soJ1QLrAZqSWZMDDPBRNcvjJcrZixWKhWEwA1oPLNgBeYo6bCBEK2",
  "key21": "9v7xYsf8E1sT51EHdTzKMzW5oGeowoFxhfxQAuQZpJTDuFrJRBkDcKDXh2hRVs6CL7vEMCsMB3z7LbEaTG7DZGo",
  "key22": "3VfKtu8LkBaUrHmvXBTWTd2o6anZhSu696u7gsULiUtCUA272B7axkH9tCvAwdpBphhmxLwSo1uWY82xQiphbzVT",
  "key23": "FN5n2nHxgfy6ZKGZT7mSPMhLmttXT4oc8ikTmoNrhkaLMM3tp4tL4TzWoRoqXnFVivRzdMprj9RvXLX6HzjuZAs",
  "key24": "3Z2f6wRgHGdkNmKZ5WhofkjztUDZzrPht8Vq6VntkijLgHYQ29skXjZpyzXyYynCkRnp7cQfsCDQdqffSRSr2jPH",
  "key25": "3zAF5rdxXiw4sw5E3SPKMRsLWaKAZZ6cAU1gmQFf6dot2RQ7FRYofgtDuB5XC7YsNvSycpjXZbwHFshtrNM93EVN",
  "key26": "5CHu2Rp3jbrTpg2jGKPb7ABWYxkyG6iCCBsDvrQuAUUxSa8ZYMEAruhzPnrMFf6YTAuN2JXCdETi4nHF84Hn4yvB",
  "key27": "MvKVRAfHttWSG7tyjmYkAnkQxGCDqnaJnGonKeP6Sk8eday35NJBSnKumCun1oTUXdXKURVC7LS4kRfRTkfzSCX",
  "key28": "3iJSvYmFNPswzZezhX7ohDZ8NRh2d7Ke7CZTVjTXZe9BaSq4rijmQkNKGjjbxiitZsFhfei48ZVzZrkG4cHcphHr",
  "key29": "3oa9mRWxu7Aayh1VLCJZcugyDrC5jWnHoF5FM5bb4ARTtNewow2u2ydnNxdvzUsihbXAShWyyrD8rpNR2M1WrWAm",
  "key30": "5oFNCS6EMcUS2zNzXAK3sMhnJ7umJgves3ptHms6jmPC5Rdb9nN9eXX9jDVLVuE7Beuxa1fkbUCfH5cGPqjsV66m",
  "key31": "iPeBKkkixteiUqBc8Egxk9yooCSHNpYHsFvK6jPFCnPHfShaACm7aRFWMB6aL28nxzTLc1MRhPFXXKfnN5jcNEu",
  "key32": "3pn1NB61esjtjxRfC3LocczRQu8RrSunyQ34EVAXBktn6GHteBmffTwnAp8ab99nhk8uZVeAUNuH7M3UELYFPaEd",
  "key33": "3qqrDcETKFzmMsbXUEUExqG9TwjTk1NzaDkGA9jpoeBhyi8RUn4Uc1NG1gzkCQJ1Ltss4HxhHhHgBr6xpEpwn57K",
  "key34": "iTpT79cmRJE8uigMqFbr8m7WsD1p3LCuos62dm8grMUN45jjFdMuSj6Ri6ttc9JXa6oMuqxTGSEaWfZ8vQnehXS",
  "key35": "4zYYUBs4KLiF1fQ1bPaqoQAfCeXwEfHcNvCyKbL14DRAwtUQR82uCW1VC1rWU6BCYMoiMgWcf2YXVv2Rnjo6yEg5",
  "key36": "1TM45G6z7cTxpkHeZJ4dTwsNxVWbBNacV5QBApMrGEikVA9rdp3PAvWQzus4ktk44oTaAS71yT7peip8gtRKU2X",
  "key37": "FroJRXjjLxCo812CEfqaF4wpZSyyScKNdDD9obQKVj2gsnFD4tZ163aEXeCswakPY4wgfdEgXQx27BrsTvMqBc4"
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
