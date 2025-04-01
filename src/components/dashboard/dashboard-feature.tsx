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
    "3jEkn4GJxt7Tz8mXgiTF9tbwgDH6C88cpK212yUnYb3myiM1m4poasAbZmyD55h1ZnhgmwhGnwg9hoZypxPVqAGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Yfn2rvLyyn8P5Lcm5YW62jWYNPoeSAyKXer2qWBhSgibpfrYigw8U7NPdwS5rCzaCPkWzBhkWdAiq1ewVGwkUXc",
  "key1": "LCifaL9RY9fv5NoWG1b6JLmwxBd9r3T8Z2GvNQHEGndt7BAUHUDs2BVP6G9fG8kNeAMe6LFJmQHRZZ2pPm2v86E",
  "key2": "3D19MNuS8m46NVVrswoLpr3KN2yxsrcAPWmYTuC8jc2zw5FDRZ18NR2zRK3xAoLdbtPSWgbCA7ZyDSNr4rcWgSED",
  "key3": "PCUAwGbnHG4RMWBZxdoRPG1H5SFgcvChyGRKN79AwkjSutf5bjjnucTN1uBfjoeXrntaitWoPwB87gufJoLXKtY",
  "key4": "4kMWSG5A6ZYz2oW5g5S84rDh1AbYTLT598MZLZa6MUs2X3e6AHd9jBmcBJh4Vfgv8j9UTUCHiue6yyxaJmSQTzBJ",
  "key5": "Psqc2axJ2HrHngjc5xfFjxgvo5Ht2VinawiTzbKHDajVxxgTm6Jro5wdbK6xtv3tnWRpkvuJsTg8sTgASLxzqp7",
  "key6": "2pswKZAzsUPky6Z6vFJCLfSNeeWX9YRsn8v7UQgQhdgodoNsYFM5ssJZWfKjvd5cwWyjBNreAkUeZfefoABdceqj",
  "key7": "jyJpjAWEnSrncRR67JtodPejNZ8SqnFMF9okceudQNTt9gd7q6ataP7VCoSHAPdR7ZRB9w3ivsDYqnpqD1gwZTf",
  "key8": "5UYY4xAYM9vnxfwqjGdKtfEaJgnSAJs9damTaxZ8qbPC9Zcv5SWS6kUPeh6WCCTsVoErVDpe83oCpYuM1foFrFTy",
  "key9": "4HTUL4UTKwMVFCP5JYmTWVpJLSGEV3BrxZc4VfQ62jQtMfcnYa8Pz7MqD4BJ96bpBhcj49CkRawXG7AS6ZH3ZvsL",
  "key10": "jZ9HBD7yxVJheu91TsA5cxZPRwBvoSuzy1tx2Pg4vaa3QGHXyvmx6apVTkQhVTq6p9BGW22Gd8wuUMwNpue4EfK",
  "key11": "4MtdzmBNieW5rGBMSNTTbxfXKucfNLNZELuqVRwRXGokH4EnfTcux8CJFTN5nF8574JZWcwhMVgCE5YFBw9SpKjp",
  "key12": "3QZso3EeQqyGpWjNKogYUAQQf8afj4XLuT7H3F1sSy79EfC8fdF1cKxPBEQryDwVmoH3UkVVo791jCD9aeh3wyNb",
  "key13": "a7JZxKBaC7aeSTdN4SRtqcc7WPRrXzh7dWVpC2AJEKNwDcbPAhV8oBaPErKujxP3qYuud4KNNz5ajAs4LFqKGkk",
  "key14": "2RrKSprdutBsuALecxg1SkNYYcwqmhtHvio8xgrEuqgd2v5zUmHfVs7wUqMV6Drjmes6rnFvSvgMAa7c7Nx2B2vh",
  "key15": "3oMGaMiNbwNhY9YbVR9QUutpUjuFrbGcnQSdh1TC6o49gbvRfGke5p1KyKRg4sBkbNM7ck2uRoStqRp9FwiwgWLc",
  "key16": "61mbTf3LvnMA5Fh958GLeH2vMu5eQi7p5XnETyaUBzCdDuANV4SQ6QbJoPsGe4jPwTsNtKMeuDfdpuAu4pTeqjuf",
  "key17": "51ZPqthbXGe9f8KLXJNm6hm1Y91Hw9zZA139zC3kN1BwXf7b5gwUMWHTDZZD3gwFR6vSaL9rLk3J2UoFX2Ahqff9",
  "key18": "5J7YmWr5pG6wfxKNE6fZFSaiSvEfVwQcAXuHZmem6GaBq2skqcTaqbsz8TpXmTLRtGVzHAupQS5rvQbsnZxTxio9",
  "key19": "67fp8bLDooDra9Hgr7jsGny2rb3n18LvtgZQFTAwTa2VmgiwuBvjKX6RWGSCJP6gsY5W7j5YQLcrH3DE6NFf2926",
  "key20": "2WGiz5tTzcZEVrXKDkunn8QgMX4kEXn4ojWzRWKgSh5XMz2ZKcJFhXaZ6Hrt2PHB8SnaY1dq8LKbF6Kas5XC97Zd",
  "key21": "5JZR3CkQtYctZTapwdTfmjdUk8PnpPTGM8bvPRzjZa8iQzAQpz6dYmy2dNHTpYS8cV3xPXXNdYg8RSBTKXn1n4Q5",
  "key22": "3e2eGETn9WQJc2NrxJWXjvQ4aTjK2FQoZE79jjhghHosdWbSX2VDiA97BzMpVkjCAhvEz1L7mUSS2YTXQsPkwb66",
  "key23": "2nb5kXjtMuH2YxwHpRvkm5eVRVoV3UYhgZpV7ZbaeDsfsn4NTPYRCEyyuSmCZSQufhjMaAT4uJ8ZsZYfKmgd4pnJ",
  "key24": "5seSnh3iXyFEMJQToKHbxMm6Wn8BUoEjd35Zoh2txQH7bS4qmCZVP1uACZpLG2PQxYtbmtttNGzvHBAH9Rk5XNf",
  "key25": "4RgE2X4rXMgCiDdtoxf24wQ8NytJEfF2Tv8Q4s5MfqwmSy3sBiGZ7gDYV4L4WjHxrNrUHGLHFfSXDxAoAEKcqGE5",
  "key26": "3qBNFtVzc9uo7eukgpfxt6YNp8T2PSeaWUApp98ewmbpjAtcpHUKwnpjKxwf24BoUQi1uwUPyFVVZN2gJZP3Xy3v",
  "key27": "4WBPMGst8hw33VhkKPQkfgHsdbSgGcpbsdVeqyjpkgxULcVESq422tnPWRUYwnAshqk8wapEMHjDVqQrp6pVgUvD",
  "key28": "2ar2Y6gjybW9DTCdVXdNimoUPKD1fc59HFDf1uVYpkunebXpKWF5jfKzsAkmMnzahBu6C2towsqqbcJ6Dm9HRGTH",
  "key29": "4mSmV1dKTvq6vt6sRV2wsvp51HG85aLq42nVkRAUHh3ZR5X8YxwdYE97UKxCTmWC17eG8mFWug36f9VXLiutF7nm",
  "key30": "3LEE1r3wwyN52Gvzm45D59rW5hHQzXp52asoimXnET5y2HRHG2C4RCCgYhtiM1g4P4KzrAhB47jTRw6LPJehwWsC",
  "key31": "2X6gQSHf1DBbYyQCNvj2Q3t1cyBeQ3sSLFyHKUEsBnKKbQbuUKCxhiqQGBRoyPJYeBneW1bPR9RDMBkTUF1zptfL",
  "key32": "X9vEQq75qWEej8ACezYxhFfWgbtz6XSDFAdjVfh2ggztCyrwnL8JUsKAFBHkEH2tqF298LHQEgMC86CZccLVddV",
  "key33": "3m9mw3bnroutbrhBaBQSgUiGVv6f2PkcjAqckSBzKHYVcUq9P5ps9tzMckRjNMavHTQRehqENpF2PekGvHpcap5m",
  "key34": "26CabGwR34hzvryLMqek1Dgf2EJjSa1RAjJxNTmtWoH4erBnkPEXtvT4Ym6gZYCqkFozNQLJDTtHmvnKEsmBdyao",
  "key35": "7eNDNgtD2cbhHSbN8Hj8uWhy5EoS4jaHuZWkaREfSSUkx2AwXSeAYBhHywv4XS4msX98ULLGTZgsmVHittNHGXt",
  "key36": "8cFr4Sp7vfd1gJKnQc9hCWPqKn1DBfP4pJprMpcCNsabVjQ9w1ch488GFzDDebYxhL6eWGbMk4L5JwYbTAuhotT",
  "key37": "5bQACfNvPTBCrTMqygj4LaccGArrwGzoM3dESrFx9fZHBbnJWf7rsmwwF9eaWAw7rBpAd24i89SrcKkcQLfKmK9L",
  "key38": "4FwxTjQ4GwLM9mganv5Q2ayQzSWJm2qWXzBJPSZ12fs7XwV66XrSNj7uhSXn9Fq9USLpGmRCAQ66pYvK1UuTGmuR"
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
