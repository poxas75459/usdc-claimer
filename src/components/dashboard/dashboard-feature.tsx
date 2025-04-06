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
    "2Qkv4xdZnWeYV8TuJLKMquMLMkCYPBH2UEZmrzfJSxZmCa52s1qEJ1E2jEUjhqzUWxee94xGybGBsDXqvsRGCVka"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "djNnkLaymJ3z6cB3pz7Y85UXidssna3fz5c2nbEcv3jf5zW44NAhzyHvurTtN1xaE6RTrjytFhpHFpkWPkVEE9m",
  "key1": "5d42y5f35WJ4h5N6xmrCnUpkg7CYTjCb9Yz4gL4DTnNcaZXQWcep2tpib8a7KrNL1CbFbkGKs64HzhypofDCt2QU",
  "key2": "p2yEah2whJAVDzzFFr19ryyGcgMpd84XFbUwg39GkjWcc8avyumEkgpZd8f993i7gpkQovWjXA8T3jn9fh72YaR",
  "key3": "3yiEsF9tcVN22MNREMZWgc71woGtyzFxK6tRBGMdnCZiMhEfVMAkH9ZkDFYsve8sv4X8R7V1HrN9qXRHtn7gYsQQ",
  "key4": "353vMJ3JW7aJVfr9pXj2pCJnRkxDS2EAe4AVzv6Jro1hxyJ5e9VokcoFjs9RrvGrNYD5xD2yEi9iWTeEJTseRC8K",
  "key5": "3wJVMdXVMXg3RZPHvs1RTRBgjMki8LQic3cKxfiRBHBuLPCFSHGJSFKhb66U4KZjkUTqryLdQZ7rDfSng9fhSF6v",
  "key6": "RdX4k6FQbwtTk7u6s9VsStucQSVSJ5914htbavFjWwmPZWqJBjRua2XdkZSuLRSduwH6QohrVEtfW1NgwHcAVrx",
  "key7": "ytW7nbq7VJHv6YtmeCk764pjUE6SJcKND6wgTD3vKgNxHvfubUDCTRZTirkQSpbDyheZeuSLb6nPHTZaZbJUbdJ",
  "key8": "6c5PWp8g4ywdv6uKtCMaZyVi83VcDukVT8HBJ9PKEv88a2eLnEAAgN53gQJioXb7yKiDMfcCAUUfqHiztk7ZKey",
  "key9": "2S5JR2QazyHK3yzqNKqiPsRAjrwTSwPHEaX9qNYBtRPPb9LMV9qWs6Bco1ZCxPm18THbpy744ZyJtt7VcbB8dZAh",
  "key10": "4mVQcSLekgwGn8JXSk9rb36HF5CXWDtoxCSefZ3PA6FLqLaQzaQwQfqtpUGuTSciRdPrdYV7avZSoGSwWizBz2J6",
  "key11": "bVUb5wA8Hout5m3uicsdkxm9Rid97mxuoa6PM4rysDe1Hkq6ZwjiPC6PTgvwLf3K6roS6ZzULkCNhVsjieid7Eg",
  "key12": "L6Ryv8sgtHput8YJGYRwbBVhnspVsJdh76gwTEqe44sRC6ZcMQyLsfDiuqDvhGqRNk4h2GPwXpCXn75FqGhtVct",
  "key13": "4V3ACKtXkN8QC5UHozGuU3Ngw6Na8cqXW3Uqh6x3KsYQu694SSbZMzjgMTRrmqG8CWq9pjEWd39t49e9Y4twBz8E",
  "key14": "Z7bVYthFkjWTFUwxs3xiAGRfns4x16qDCKK93xHUe4W288qafZt9rPEiAdFv27fKZoFm6a7daJRyd4yRt5P9BoV",
  "key15": "36xno5bj9VAVfcfNaS7QCZsh1mNrvp2CXq4J12eiEUmeTjWeDqguuFPwdGmuVSWEMsrMx66rLZNN6YjArKjZwbv7",
  "key16": "qWnUGqAuuMp9AGDZyzh7tLaqgxvk3tay9davezNC6gdB2Whocdzp1NbJoUWorj4hCJn7QNUo5Vo6rPBfpXjCP3L",
  "key17": "31r7hTKAXCcrXKERRTNjPq5NSK7oahp5VeMcgWAAb17acLz3rWk1qYvxjtcNcZnpDRMRPoi4q4Vhmu4DdYgVHBoj",
  "key18": "4ETDbg7o1NEnijSitcSnVoCb9SFj6bFBCL4rec4RcyQnPKGPLo6hZbzfBJ8iXcYKw1ohcULUQcCUKGnkrTpwqnEm",
  "key19": "3gozLm8eMb1EhmGFkppqyZodzHFj3yfFtVPPVnL3PYEoFDNn9ajfysKEdXPJCjTReP2Aaz8PZocfQV2L38A4r68h",
  "key20": "3P11b2PGBEH5jcyVwJduPgUyqMDNCZfHGzTQLiDRXW6RPWQpXTdX2wHur8yzE3HfzaGw5mh4MYfJRByvbRNj5dDK",
  "key21": "25vp2ZHYEbDfpgLyNc5triAccetoLhq8LcgRDPLHQX5UHRmoAx4No9wPCxtVDd7LNSYAgtH2MSrx4qNnKMZPd7uX",
  "key22": "5bQHLWec3ZdSSa5biWrWebC12BSwVGHKQ8UPcXVBtbv48DRUaVHNNyD1iNUkBEAW1u2D6XP62YRGSymLNU4U11sm",
  "key23": "3ik1QPrgS3MReikbggM64s2KiroEC9bt6LztZCcWHmsr6Hb2Uu6p3SCsunWFsik5dV5GMC3gkxd8fgjjG3QZHw1v",
  "key24": "4VLdkZMhQux7NScXZs5NgLDim6tZiya7Azs3tgB3SyWgWh8JVqFewLkALEJY1ALJnVuK8GqsNFaChPjqdhbMyFXs",
  "key25": "9cC9ZiZa7PReUoTgPj6f25TcBQYx626VoSKSZfexoNn43i5UcsARgs1aFu2Z3dfBRAV1vrzHfEnLp56aBhn9LEY",
  "key26": "2qJToUo5B1p5NumeZP3WGn73oaX5xQpSNpuD93FDrSj43cpYjHjMza2Ket1KAfGSifHwnD6ypS3JTWkAhcXnWJNG",
  "key27": "5UfTKNEdji23FTkkocXEiMxUH64WaYxTpQdhy1CJzBFtvK4gzwkJNLrsV9ej6sCxcNZ818BXfw3iZXH5STvJ5GdX",
  "key28": "4iTJF4iP9x1Uw8u8VCAvCa7kc7XxCZwE44W5UbLuXWu47fPpkRQ2XudZ3fyWvKTD2p7W1yuYEjDMjzEVTCDV4nQN",
  "key29": "4dnBuTxdXPrxVPkm9X1727chxKiw37poY7zLncBaWfRhZmQwE4Sms3CS1m37zcvRpnUcCg9wffnLMsXFvcm5k3GR",
  "key30": "5aHGACyi1C9fKSvLjnbWkZ4BH66VP5SQ4btqWRNPBvJkkUKB79YhUWLKu2eG4sBWuFwW79b1CpeRGNXEsUWyTzho",
  "key31": "5n5iYoSwEqs3vy9prUzfefZNubSDNoM7FLTYvmQC6qpAMrM5EFYq71k7xMoLDBeYctpbzdL3ze9SBxgeMPx1K6T8",
  "key32": "5Jhyt4Vur8pq5FEDdyCTsC9bGAwkRvpkmu4xTySbxjXTApLCBMfKg4gEDu4xREVcjkkx1UgnHRjT2YuRHWoz2jpr",
  "key33": "2M6gi8FgE4i4DwbDWzg77ghpcS27GEjqdF1LfbZdvvCAHDq53EPek9eGNnCA4eFr4itBa2qLqNfz1V4ygybyGqju",
  "key34": "NrTSg4jYJhUVUhGXevNZjpJScv7TSstkrbg4j9X3TYZB41KENRbSUUf4WNeQrb6UDzZCjHtVVZtGbu8tW19HV53",
  "key35": "5Y978EJXy9XAT4MwTh299qAAhHuwJABCqxdBf47k83N4KSWuigcEiuNUy5brEre6mBJxqWAnD8pKek86ooraxn3t",
  "key36": "2vvi3LnZykX8PbPe6h6ERNR6mFNBPLPADyBV7M6TVppGeGHVKLXysK1buVHXFjzRfTm3uLQNAK4RFU2iMeX7LbDJ"
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
