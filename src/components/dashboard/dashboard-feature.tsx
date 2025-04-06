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
    "2dsJ4nzYCxf77dS4dwdiBjMAoC4SiaHRnhTng2GDz21wFLRmUsPbUFwAGqF7PzQePYpxZaygYRngxHy9juh3gM3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MiwRqQydqXaSQES5zUvqKVif5V5jPPJDzEHny3Bn25rC2ALM1eMQfd3W1aVa9BU9PeT8PrDXSiwZNyLArLtZG4w",
  "key1": "R2bjVn3jXpyY3WbW9ZRVRa3h5pqVNM1iyrdp416258b2QCdFWoAVBnSY8nG1v4KfqAe9HqZzMLaR4goz1Hpq3BE",
  "key2": "SReTimagTErjZK9aRYc3nFS9eEJfApWuc9oJLBN9RgkDb3Zs51WdBmoeNocmA2AR5gidtkCftbs62HH1hyiYLVG",
  "key3": "2somPVgLQKmUKNmWqbCgxeoribMCykLGUEyG4F61mKksMtJo8XT2Pv8Q6jNxFci1mNVGKbjkkg3wRmvmTipqbZxb",
  "key4": "2yogty3zunRKENztGUKyauSV3cqWfJTBe8S4SJTvKNubeWduBaRNpZpCQdFGcZuGxkCXA2BHc1U72sWc5nprBNHE",
  "key5": "vHN3ifHZRHjMhs2UXuJ52ANQ4rkFkcV4YsEJ7q7Qe8czMyLJkB49ST3Mx5Fnkb5pQ7YbxLsbug24fdLaL23DEuB",
  "key6": "3bNYFHAFLpnkP1XUM8nmndrdQyEFWg1jvCQY9nD8UcLJdmTCPrhYWc5M4c1hMwPHmsjusw3cktrsxq3iSPvqD5wD",
  "key7": "49tf77snogjxPXAuXaU7NpBtDhSoAhnbAXW2eNXCUC3mxNBcWATeR3SsFtkFLjPU5oYWZf12ny6PgMSFPvs8ouER",
  "key8": "4KSB8zma3FkFq7p7MSquDkNF4WXm5LyGkWhJ8yKvGezktNigLYMKNCKKrd2BCvs3jmeCH4Sbi7JQJYqguq9RTNV1",
  "key9": "9ny7sptu1aEHECS5GhYnWMeXfpgzYcCNBtfWTmTCgYnpTbtSx6vtCcHVwsK8pKnXCTS4rKq95rHkop1QoLrGtem",
  "key10": "47TNZESzFGYkECdEhc3PzxAimq7HtHeRcWiQ9NCFRTG2pwzazn4RpzAt461mz9zxTR5W5wCWLtwMfbzGDkyBqU5n",
  "key11": "3CqMmAFxm2j5j3LXiw2SkjEuczvKTfhnrPzGELmzh5sBgGcbJaDDh4PSRJwFeG8XWejpPg12pjLE4Tc9PB6BYX8N",
  "key12": "5LSStRGWjwScubYvTPp7jEZom1sUvrHJkeF2BqJSembWYh2uvCZGNGbX9SD5G3SdaFReD7uDkcb2PJCBCg3sGywk",
  "key13": "42zwzaK23VDw9fhbFbMxxtmvBcASRETZJpuA6hKja4F4FsUAGLRFUoXKBJm4s2PHs1iX2mmyGZuRpvGjwpdWUMQ5",
  "key14": "3cGN4jg6Lox6m4zwsrvW34esWAN6aJU9wN8Qxjw5adptZB8JAYAhCDNFUPQT8cz6T2mmpQwBzeiL2xWVyQJCHK7j",
  "key15": "3HpfVJMmo9i4SqGHVVgSuRc8e74YKo7YKgg6aiDLnSeAS2Z3SSBgCGjiWh4N57HqdsqnTnyrLSFcP3sPung8Bh3P",
  "key16": "3dh236HgtQz39fdvRn1FYvMFVRoWVsWpcVhzw7rdnyR7wqE4oyQ774r8uKFHK51ZiEWGHHMGo282AB31bPqg3QfX",
  "key17": "oWF4PZsevW7KgMg3H17icSzzABCLhx9xtLQrv2QbxRhEbYExMjgg5Y4DEB6bBNQgz66e7MkN8MPtfkAyuHm8yBZ",
  "key18": "zKDLSV9wiBt2iyoJEDziyebHrypRgvLZYnNzyzJuuYXMeSd2jbKhsZ99gpz8xKSWV9gUMYaxHtLELeSVF7NWyv4",
  "key19": "4MXrK8CnGuGKJmkj3LXZxB2RirRuob4t98mwRhirGBmTLQbEfjkvvNEsY3UawnEny4anr3NZGmTytduTRAggudit",
  "key20": "29jWFGq48oGv65j2vTEqSy5dccm6qtcPosn4vqdNR3U6j5azaTwJhszgaiU9CJCHm1huLTgJe6iWSQkiTjjejTs9",
  "key21": "3CkBvV3yBDf1uEYkx3nj5t6r5BwwDHAjaMFCv79MhD22hx9m1ohfaVV98iFUwoDAaR7yizK9kZjrmZrEonH8mo4K",
  "key22": "2BREHa81WsVi8WB6VqCfmq3RTuWj2tJveCNhKastyq9HaNrn7F7BJo6ohzy8Vi8f4ZxF12M7VCPN9ymtd45w9P4",
  "key23": "3GUUnUksNFRmMMyvd4ecE85yzv5xjA6e1vGyqdkFqeAspBNA1DxZGRvTHUTWvBZekmbHX7fSRUBPTJ6vqPVM3RP4",
  "key24": "DVJANT57pwbedJWURqUqjuhJ5joPzdb8v9Cbz6hLHnC5MnFFCbPuoMwGURGWZkFuwGpkTJuSDj9Z7qy1fscmxPu",
  "key25": "3DU4uPteRVXNpjJvaVKBesz8ibUthZgy6ukQeFPWi2AFf1nKx7evwqustJmmEfrELp2h3RsWjYS6WfMPGuroAprt",
  "key26": "3zQ8G38U2WEiZXUwhXyoAD72QgpKV8bvoqG6pajF8jGkYGeHxx1RGsCopqbjLQYpFsTxRgmovpvpD1B2JuZGDiA7",
  "key27": "294nf9C4sFiJqKsoQMYgA3fptKhjAngWdz8XDFfzY9eLXQbXi53vBwTC2ytiVPyvw9qhn6YhEUqoKdSX3r4KDxJB"
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
