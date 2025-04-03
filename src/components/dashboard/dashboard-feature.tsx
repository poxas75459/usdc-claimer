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
    "31WCfGkfQBNfKDV8ChVUoLZZbuapL29rnvPBLhidDJ4QkmFBvCDyeaPG1brVxWdZ9d3VrjXVzpxQZRfoxfTFi1uk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mXnpUhfRNL5Mt9Nvc5nRAzhi5hcYdRZ7QZWTjZxFfyGhUBFby7BXHTAbBBT4Bj7mcud1fbYyV59KUrNonPABLub",
  "key1": "56tj6TGGo57qETppmiYteM2Ar2YVvrBEyttk3GZwKtbjUDKXaGhYqhAWirvR7dyS1x5tLc5Upn7iNMuMmomRmPd8",
  "key2": "2k6BcDyWiXsEdrb3Qjvi6mguSSKCF2fLS2u5T9irUq3jUQiPL72LnV9LMkuhnSrKwxRFTgktHtSdGNouvvWn1C86",
  "key3": "wGYV8b1UtEAUBKJmNt7wJ289RtTQGQpEJ6UqtvAM88WiRHA3H4onTwBnaSJ1oik4wphkJtCWNauFutJQN1DThTh",
  "key4": "5bH1MjH7yYfR2MpSY8kScfetU9SN13ywcedMVfXt825ZuQaisNVFpK3yVh6prQQ8VcWHK6fwEc5ZM1MLkiWsJo5v",
  "key5": "3afgejugv7wHyXS1NWxu1RgZQkME4Fw33cJhsqycQo7HVUKNGoeb52s6x8kWfhA7Nx9DUc5Zgx9f1wqeMJSWsW2m",
  "key6": "4zGhCu5wgxsVtUu38LpH3m4rM7xnKm7m4B84G6YeLU1okoEnd3onupvQvsenL3mtBCuVZmZKvaNsbeZBoA9T9Qfi",
  "key7": "2FJX3guACYcTRAenLXGqaYgH7UYau2rJgCmJMTykVbkiWo8raeePyUFRqYm7vGeMmwdnDdeyczwzq4mgaXDgqDE2",
  "key8": "74sFVz4bVcb5PoWPdv7DemyZN4pR5scARJHimMaMzDKoNk6Xm3cSzduvJqGuivKGTnoEWXhvd748mCnLqgRigiS",
  "key9": "5aW21NuL6kb7zNeZg6HaGqEXreXUUt5Fn1mBAk4u873YZwUWpgFv1dBBekDLLKSLrFKhgoDGqhNoc4sT8itfMQtY",
  "key10": "3Kk6WMnspkCmy1yJkB1iGSGvLyddS4kyNGK7vUjC2YnMFAqnR5Q1s863povfFVRjdcifkXsfVLbGJTuqU8H7o8km",
  "key11": "5sUHd3KAn58Zeo2Ssd6BTCisGsHzcsPvWmf7kToZMJEqVGudVLPcSEkCJjktVHEdCcXGHHGmPsfdGuCP1WCdC7GC",
  "key12": "2mufGRmT4NC3HGAkp998Mc92BNVHvKbwHuqJfRa2atNRKAo6RMUYYH7s5Qw1F2LVPyt3SXoZPmUmL2nNE8Ar5hPC",
  "key13": "3L7XXDytJ1kRGwnYc4WZbavrXijqEksXKfGubpQ7FpZSav2tXPojwq5VWzqKqJifqdgVKhXwhWvwgUBk4UGyCVNr",
  "key14": "5MqWdQazekpUoYkRRyy5hUZAfwouuuVFn4jusEzxSEmYdbmXNjhYJdMzhNbeoFp5fGANPsM2S8JPJbssNrdjen1k",
  "key15": "5M4gyd3Eps195Ch2YGgPQXDZXVaFNcejYKXDzEVniYDxvhiVN9QecheZ1sPTuF32znGjooEFkx7xkZHVXYawTBut",
  "key16": "2cHbXE8NuXKLZb5pmpypcmhNUXKK1z5Fgoenb5xYbSkZtNDZBKpA4BwB6jEaavUMvqasX7LupS6hs9fVrNCCmkLY",
  "key17": "5r6yv7Rg4qbtZJdsy6KXmNpUey5dMmkh9c4TbogxvZJjLYjixqHw33feDavvYsuTbpzpNg5V9998S3ZWE3iL2Soh",
  "key18": "5NvhWjF1b1pVmD1E4xMwTfL61wSEuk7ntXQQe7Xjvcx1DLGPGrySg8qqbV6WbRnHU7ZMphro6f4GKddURkf8XiUS",
  "key19": "3ZdV6d8wo9kxeiJfuj58RYskT7dEbV5Q8cb8zj5JRzZUPeWtPBLZZgaz4T8UpnWzgAbjK3joMCUUNF2ccAYC4R3s",
  "key20": "6HgrXAarL6YqXrvZReL4jWv7Esee6ZqVfhDwAEXbZubnRyRVK4qgJFpQjxJfZucfb8oCry9adV1G48PyYHNdDdp",
  "key21": "CawFKqA7stkGSCGKVw8XsgegxBwPaf3vjdVuYtJPzUguwmTVPJV6xVwv6PqX6D7PzfuUHgAghGkJGY1U3ukwVQu",
  "key22": "2Hr723bRHYKh31AG7F4KKqFC75TtbzTGj7LZxVMMf68AMLqKeBGeF62uzaxrJ8j8Xyk2Asg1JzzKuAHva9S6Md9p",
  "key23": "2yzrXsLooPtZRvh1MFJzr97cKuNm4fiDJSMztMS71eacBJAgStsXLwH6jq8hhQ5i5uFM8msZE9PFkfQh2RToezp1",
  "key24": "5Jan9PLfW37Hi2HTP2r1vB2xKmRKcVUpexdgSR1zXpwG4LSDT3xdCsJEncR48y9GV48sFP2PAv9oWVvkW695ZEUv",
  "key25": "2mP61EaSYFVL2tGaaHgRxNb5AbQniMaAxdmHopdZxBam3EH2iZrUq52WKNErfyCRTRBoQ45LuwhUfgH6c1BnEMgu",
  "key26": "3zxF33ivhmbNCpWPfVdy1U477rs8D8HC41NoBjevUgVdwxs9MysZeDnx3Bs4tXZioPyUWJgDg7ghjKbnwu2Zbb5g",
  "key27": "259r7JWwUJtU3Dgd2h8kqt2SFLSUUyvCxwLQnvQxKo8EnEwpGsVzDGuoseoPcbJ8ujxhQhLLdLN7nuE3c6JPui9f",
  "key28": "BbCGCn4JBG3oStAbSBKwDH3fkzZhVyjqHzByZ9R1ADtNqoXboprymBimsShotAR31pRo2d2pzqGEWu77bieHad8",
  "key29": "2sQFV2GxhEeqdYcbSoHL5ZntCgrQuJF3PLtGxdv1YWp3941UDMCeJ2SntFUZkbGkt2QyZctikhHc2V1EsqUCGRJr",
  "key30": "4GNnPT5oJaq6Rm8JwZo42m57ahR2sLEEsPzRisgEWWKpSDBEyaBDWgAwSsZV3jqRXUcxeCSQGQNVEoNF7dg1Ta4U",
  "key31": "4x6AWiXiTp87RutvDe28poCzbALHbpwLYAGek9dyyY71oXk4QKYyFVHdHcveoZWvXmXGSrhtvc37ywGVWa89q4Zg",
  "key32": "4Dm9w9bAbfi8Zg2PCgBuyDsFMrwNZhntHJ5gMd9jYdyHJKVnmE4KXbsgDKrvbKsM7HYY5TbToZULdUcjZDaCmStt",
  "key33": "3jpXDUm2UMAbE7MSXRZuAUKPe4Kssh5gku5HDyDUVgLWQRcNAkKEmk7KMtQQc6HH268LdLfp5Qd3AP1rtWPLAsm4",
  "key34": "4ibieJigkJP6fhpNijMb8CtV5ESCKAHf3fiKRnVZrqMeuPTqADFuxgPyPP3P2rZ49j4RWb3c5mYMnTGCVoMiDh6m"
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
