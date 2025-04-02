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
    "2EwUhowcJQux5Q2RF9p7PgPcNnuvEvuqyuUpexYV25iWQawVBiwVYY2uAHhnxF3AtR2RvcFLzXja4pPCd1WkGnN4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ABc6RijNYEiRjFj9dnjZk9mqnWxGsTaEdDbeMQfKzMGsF1bjJqemPANfhfo8SyVUaiK4N5qSYuqGBbf8CyEHYeM",
  "key1": "43Km4f2XHj3yEuTiszbkoykr7GJHuK1HmpACfJZLkArYL7Bv7WszrsWvY5dDc7onc4D9gJR1xDsoa7Jk8PSzp5V3",
  "key2": "3vv3JupfAofP1Y1cDUbLUjsMokbB646ZUrMFpghLATqhTxcsFVuu28Yq3pr2CBQzRuekMV5aDpkjWL1RccGBCPBh",
  "key3": "3v7fqVx3BeUQJUBNDChLmnr9yL4YgoGFKMGMcA1SEFYHUQJoPUWd5VbQdorjT1mE3CS4s7wPBj2uSDZJzApx84gX",
  "key4": "3r1J9NVZ4bVAeDp95CS3ia1YwfPqLYB8oBf3xtrgqngwWBwqzcp3Kau6K1T4eH2Jseare6nD4KaYX5anaNXRCMut",
  "key5": "51YvcVuPosK1YNLLyGbAAczM7Ywv1F9MqtH88xECkHwaXp7cERmwaDv18ztzg2Nn5H4VJPUWHz48DVVhnkfNzmKu",
  "key6": "44L3oL3Xr7frHKe3rtxdHEzY8uS8yrKv4ZYn7UMMS8NgiZcGPLzrhBNMyUeZ5ERkKtL5r7QPhF3oed1xfm6UJpN3",
  "key7": "4vRWAUbS1qjUp8JxmakSTsLzphNVyN8rm4awjDmrS4UYXZ1Wc8N4z8wPQNBXDMRqZGcQZa8EwupFsym588nhaYDh",
  "key8": "35FAPz8Tx68Kq1AYzGMUEuPR9CFFQejytBDbmrjbWhx4zuvq1dKeYc9D8Q3XMcZcA8LF1e5zfH9jhz1sSuHhsMhD",
  "key9": "Etzai3e3G4deE6hHJeVT1Q1F4xZpDKGxXZhS2Hrm7ZRJo68Pwv5rTPUWfjdiJJFAG9vo2bShYPrgwtcaDJmfzTe",
  "key10": "5Wd9R3HivbvzJNE6Zg7A82ReyCs6wpAtXYcsXwUZuvBZbddcTcEpYzrw1vRGSzAVCaC1cayKGQYg14LWDgKjWpBW",
  "key11": "38SpfiGbgDoKLcJ4PhA5dYaFz988CJUDWwceLFa1drFQJrJ8cHmFQEFhY8hsxdr8cifcD1bhHdEqdijeZCn1vtao",
  "key12": "oGn1YQgsUww3dmFh4fDRkAKB7XicyYuNpQH7UN4eG72nE5S1dgkJbybyuAPjLY2kFYRgFVqbXt3CcrvNyRf6eaV",
  "key13": "4znMi14MHaTziPL8DjVA1oaiUKksneZGbv8CzL3iz6B7U4cc847shdqjzhwo9BihJmfHvAo2zkxeasR4ByUuphic",
  "key14": "3gMsQF4KiMVQyFpwej9hjG8sQyVvPyCRVmnJgr5MWd9W2mjdAscQJ57o2DCkHjWuUu4Xktvn7c6uWqYMzAWxZKAp",
  "key15": "5rZjv9YHEr3m6FAL1HtfVoPgUyF3SZBu9Wez1isLESu2HVDuhaE8F3sJRqrv2kig7bpyrYbaoYkk7PHh6CjWaCmr",
  "key16": "4fxAna3QdvE5zaq5ZZixQ3AdzgjWWX51UK8S77PPKPRLZJHcMhizGpb7drKRofDEjegCP8VSPERaRPZkWJdW3tiE",
  "key17": "2cgTye3L6Zyx7NkZ1U4Pi78P3sTkp9NNsm98Mseymt3VbchZa1ZvpZLHuH68JNDTjPVjzDsbBPr77sFFsDLtDjMt",
  "key18": "2ASr5oKACnUsY6kJ4T6AUSpACgtL8wnqBxaUYH2qFqLDmQFm5w6nZPfueJLK1aQs26w7ZEBjreqSFQaezSvdvmdM",
  "key19": "3mgvktL7dxTZBh6x1aRq2P53bhqoJwHuSq55mpkPyjdZxQjtPTY5xxahyhyEZcQpfaf49JjXR9PX8o5McaSxLCAq",
  "key20": "3HymVutkPPHQYg94XUBgCHDeS1oVDX76Srk7Tf7RC7DWEjeGYvv2Y6GYCyKFtopgHYvsYFnZrrgYF2HHSy5cSPXq",
  "key21": "3xXBviffYxAc2ZgPRxxmamFtWds51i6SK5VSv59oPH7v5K6ESbA4xxLiPerMNpdxzK1yCSSSvaqMANZCXwcKCKLh",
  "key22": "3ucedK4D6yVv9CCZxrtUPZujDka2e8akCM8G5atoQSbtK21K3TKyUwUdzKDcFVYiP3rd3xm4azPkHnCGfqXc4ea3",
  "key23": "2HvEQozfAJvXfFYvNJi4AFmsR9JxksJuE64ZSjzXug7hzk9JPxDgshbirM4PFyL6GJ1grgRoAVd1A5wXLeBnsx94",
  "key24": "4GwyDgQKCrYaAHGfos4eB5KDMWbGSayegTF4v9Uf2KwDNQYxejzjxZXL1TSDyqXRCZZJyvRbGBo6tnfUHvPY87co",
  "key25": "4yPDxtyuBgspFAgarRgz47bSoKHUKUHQoJZuJFz4M73pavb5g1XpHPbnk45CVTH53RMAcRRV4xCVtFL8fTiCTysw"
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
