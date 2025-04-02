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
    "v1jyTjwdd3KLBekUd5UEV9Lz7KJinMXENyixv5CXeptzzhiFq7qzW7PDdVZusX4j41YA5EB5jhYSKjLy6TettmW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TsiGbhzts62xzMrBAD3fcFdMS4wuqtYrgAhAmvjGnP3skf6jtA7xQciSCwaAcHjDHSMZd9YYxNG2GH4cmo1JZJz",
  "key1": "4cYB8nY9o4GzYzgZNb61aWU14nuA4bgNuAdteeEUFbhyZggHT5X11X5LCeFGmyxwQjMjtZN6fRRJwLRBZj3e6ZSa",
  "key2": "4bbgd37W9yNtMZa7MLBv3aELog6A141ejLQYdfKedxqs8PinNgTfiox5182nRf9jmcvWigJVPtjWj78j5YgpPXjM",
  "key3": "3uWT2bfD6oB8N6zicymZ23Ms6xc4S8LFQysqyiduy1DPBB65srntSpxkfpUUFSvcxSqmWoXzFzspL6junvGDTMZu",
  "key4": "rhf6DduPpP9nhzWNFMj1PP3GwimmCB35BqsN24EoWq5pYE8PVh1Ya4dt38ZAybpjZ86sMi3t9iWENQdCsgZxoDL",
  "key5": "3HvPkbuUo27cG4cM6HZXMrwtsAEJci6g9nTh9UBKGfevnBT8WLU8PmRowSksYBMi6crkc3FG25L43DMTMHVmHwSh",
  "key6": "5zt7NABzbDE7jncDp9oeAjTgTZ4v9Mt8WJueXx3CLz7BNCQyyLtecnsMTk7XVik75KJSXKdySsARJMeMTEYQ8Vdq",
  "key7": "3xMK9EgM38eVjjng9FynYJve5vpfmuVZGstJcbFD3TsqeCrFMdNkamE9nCUEk36CHTUY8TFK2Pth3UKMWCgNktkz",
  "key8": "3w55e8Eyoks35h75Pm3Gy4Y3p78rSm6axrQXA1CmCKXThoai2ZLuBX3d9Mgy6A8KjKQTwipYJPFuRhqLj5ekHCQ7",
  "key9": "3w4zTAK69MdCv8TAwiVM9X7wFZ2dvCEYo9iqoVDWKYLEq4BB5dTY41JTsZ7duTDfQvTrYEukHPY4hvTyHhCD18KH",
  "key10": "3fGuEEduiLnXSaL8DmxqVgGfCwWnLTt6F25SUYmjtWmJJ3ThnYCF7S1knSJ4J7nezSVe1feTYpjzqYWFgV9KZmkt",
  "key11": "3bgJsHGN2s1ve5Hf7SfNM7V2BW4u4fwHpAXJiCrWk4XFCHGjpNW1CFbQ8eLo6opJM1moTZLPho9wqHetrD1jB88w",
  "key12": "4GQVxc4b4fGC1HY9Fys71dwgaXrsStJMdtXoDL9iWizD1akkFbDjcNCmBF59dBze2Qn6D41A6B9MWtXmKwD9oqzL",
  "key13": "5obaugaaQWkjRVTQS82kEL1szS1VJrdRkqWkco345rPErwAzR8Z8MQ1nvEaKCdSWad6kCB2UQ93vwGWGPPt7Qzx1",
  "key14": "4BmgpfPsYYNVLtmw4sBthC8LHE5nzfn2M2DdSr2LAwQ8GaWXKFNo7dRQLT9gLthxd7UfdKaPDNx3QB3Xf2ryuSRJ",
  "key15": "2kXUoGaS4vtksQHz8E197ZkSgyRe1ShBCFVNKcATmg8qCyYMsspZ3dGhEGtALGtGL5BySc4dE4fAwUdQ3aYP3nt1",
  "key16": "rpmiicU43QLW9JXEELrEtbxG1QQpC8bvGYkcxKcfifxipv5n7TtCBccwK8GqjbTsGJJ5P8Qc9EvQZqUzUNh5UVJ",
  "key17": "5CFthgmqBsmP6mwVigAY9KMtFU9w8Mtz2uzBWZodoMYAXGG4koZ4ZU9hjmAfHQBFhSirSCn1khMugQnfEsYeDPDN",
  "key18": "5zfy2oD84TmhbzuuVukDzXdWvkJMt8GFxzma6KxfGxvNBfpuCaUCCQBjW2Wnqaj2BZnp1pPDt63ZawDhwsTe78PV",
  "key19": "4w7mwLrcuM7V2ePP4vYqeZ9JCp2j3ZL7GLfpPYQhP1Ud1CJYTF6oFWyw6Za2f6Mm4jPSuNjS76aMCq3AgsQjoPu7",
  "key20": "2ArWnDnfYEmoYAs1Em9MxFZyzbyiaN4QU6N35HuXEk6SGRF77DfyTGxGw5vNif76LD81a6L7w7on5W9QGYcfEJ1m",
  "key21": "2JduwEJKeURg3dttHhnLYzPKpbPGPekmhZNif29ukAjT2ptaMLjgWfJaeSoAgvQqbArC93crmtXoKcHj8mMETqUB",
  "key22": "5XCWtWoV3PBtcGEXfSWkpcZfyk6P22E1tykmrLo1hZmaYvEARuzxpqscGqV71uNZubAeZp2DpRUFb3PH1KfKfTyw",
  "key23": "486Svo5txWddKBgKgovrXCfkc3Q8kAMgVzfe5UkUVSaH8HAS8SJFLgFW9Umy5pmythtCY2aWkbLrTrRPwPVQ6ogF",
  "key24": "39nyc1DjWhakdjV76MRvhpxyMPz23oo7wkrkGiQ3sEUG5Vnxax2qihUV3xJ9rAvGExHXbXX7Jhchgg1xpHdGRYct",
  "key25": "51EC2kueUsZGcywgyJfqEHTwbpmHaYW6zBQjqAEmMtU29SnXCL8ePaS1b8pPbxhjV3UwQQuuuigQbwRjmfAB9EvK",
  "key26": "2jKCkDtp5b4VshB5nSHEga6ma5XRL7BMc7NdxSCdk7vZausew25ihHSsF5dp7HZBjeD3t5VAJhemRJoYgwc5faoZ",
  "key27": "3f4jmT95YBmwkGTRu4qqV9eqHEtaYcArYMe2ZzF27jvQpqCqgG9NPpeF7iqLY6yFQ5YH32c8o3br4VyqDjDyoyz9",
  "key28": "4q8TnChJWmHJUut6RDxjy7nwN5ca8owfJdwmqEn7VoTPD8G6ZzqUmjsLCebgMLcisF9eVNTnGijqUmGCFu9QtQHE",
  "key29": "YUfGnEeYqYuQpix5rSQ8m1PpRWtLM5Ty6axCXYZqjxfh3UcM4HjJ7fjjTpsVvHnGwTT4c7maPbrH1JhoVUiEdjW",
  "key30": "66uxSDV8JfaD223AVCPyVsczHVzCLNhwSQnzm5w7Y6NYiU6kvN1AhRkiKWYcKP4qvn8pubBnuEh5oNK7cA67NpGM",
  "key31": "pqSVoSnmuCXBH7yNKeWQtaNQmMoscVbtY1KbgEkrBAUYqR4ahoV4Pdu3sW8uFayL98RtrjQzVFCj8Zhue8nqwHM",
  "key32": "3nToaCtGGVibhBk7RVhTaBmZfBjNZKjr9TXrAAwKPmVLDyU8EaE8BHqKBfEWUatHCxT3VyVWNpqiKFHcsnUwHjyT"
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
