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
    "2btrS2VdwfMm327dxugTR5mb2LDj55XyMNLh8U85kAKW82R3weEFpE68Q6srJcuU6nfiTvSLwEDr68pcQBtJmFxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jKEjagyALqq9tkqS8re5ePYFvJ5zqPqBcd9v3WGCaddSnekmpDhTjGtkTXXP7cey3wNdpymbA5N1HutSBXstahz",
  "key1": "4C8mndJLZWvBoSFfzqdQ6SJZHxbP1116cocNKJmbL1zTRsNoZ4s4CFwVQccFsKUBPxnGtQhDJE84LjMSJEU2AUUV",
  "key2": "4KNvJxErPbnFP6grwEXAjYibCCPQmeQ54oXA74xxsBjYkjDPz6zihhmdyj54VRiMvSvD7TvK2h7MJVnzY8gV3797",
  "key3": "5ggGvEzyd4kUirQiBoQwx3MfXYc3Lkq6fuSzZq96vpyhwsBcs6ThqaN5LJLuRJJYxRY5M1xTWgGDw8Q1SRSCTMck",
  "key4": "4N55F8K6ZJobdcZoUrJmPy4L8kaVhbaqG5QBfNs3EtFKQf6mqnaDRjRorMij5asA47HQM5SV6vDg89U6sZL31ZSW",
  "key5": "2TUbv2eFkLUDvRCtDVS7hGy5D7cCyJnzVKVp7Gi2Gtu9KiEUtbxJKG5GQ8QwA4FMj88ef9vNLx3AGWynAASfkByu",
  "key6": "r2MeRYzNxUkXq82qxVUBMr9kA9Qik9wTXrcuYc3Q7fq2Gv4FH9BKDzqJasZRE48pKv7Re4VaLx4VSgwvcRFyLkr",
  "key7": "29EshPDvMLrG4vdUGVizuKQ4U5x8Va6cSG1ro6aVpRgPUD6Tuqh3T2U6UhkxLyXNCgjNygVBLwWc58hDkViBbBte",
  "key8": "McXfRndsjMus5fPUe4G2R8Kz6TKh8gPgrDNN8btABMSPmb1cVAjtPoEizFj9Dz4RosJu8ss5rhVYfMkj8o4pm55",
  "key9": "2Z8W13fJp29q3HZynihzmRRm8CjBW3F9ByTCun1S9W1Hbz478UatPtBftYfG3YtTM74Gz9AuDrudF5mvFkJgWgrZ",
  "key10": "5cj1A9ntNL8RGUzEqXrLqSDUR7svMp5thsJqnkywvvMgt4KrYoeHCrfsw5X3nLK4uR6xbZxFmixwzm1NGbbii6xK",
  "key11": "2xAGUYCtSakq5WCmcLRMP2KUR6uTG2hgtU8Z5pEDUAf619TN2BLxezDsPa2qT1dontS6ibPj7WrdnfCtHYBcbP2g",
  "key12": "3zm86yKKcKnZa7aERPL316aggfdbXVeZgJcyQCu1cbRwpkSpQBmn5wdNHuQLW9c8PG2nYp1wXZPEGKK9j8iueGH9",
  "key13": "2BEABYqiHozQVEhk4ayeM1e77pDiTKU4o2cRhVwbNCEXUK2Wo9L2q8WFiNQCYvKNQgacRHes5Rit5zghx9wC5aC4",
  "key14": "4sqHVaUvCdCZuKbSnSzfC2hXCRabqasCcMQ619Xdzws4qRSZ2TyimUXfNCdsZtL2DA6L51wxrfySuYXmTcq5CQ6q",
  "key15": "3bBEv7bbyjbhwgg5HsrQyuGSdJwRbPVuAxcKibGCtZMvT51PKV3DbF3nrphtFSXXoAZDwCfuruqjHZDD3MZvmagp",
  "key16": "4rZyRqnwp2uztkSAeEDGPkV6Zdx36hYo758cXuvMKkAS7K4G9Xz7cD61ry3PCgxPmYyp2AL7jek6Hnk8ZDbSQVdE",
  "key17": "3hRmEs8dct72SZEJZmbFodJvxHnWjuQ5DbFPZuDno2ZqvBunqtVS22vYhCB2vKqx1BBoaACQf4aCbETA9SmAnhbp",
  "key18": "3GPSWsxcqu3kbMQLJdaKGLZ79uvq2tugUYYJmkpsR97kZejx8EGZYDZjoXE4JxFYFAKGmpYR1ATCgLhAoWorvhht",
  "key19": "2uwXYW9234fg9YsF7ZPtVJ6mAXkWn8CXSpzf6PaS5GCGLumfFEN6zU7AeL6pFucktWwgvupovuCkPuEYXFJsoTNF",
  "key20": "ryqcVV2wjbniGSQt6VFf2N2E2Q5MWVYdoZvKDhRUeuGymxopVpcEhgkueBR7fQGvhNqJm9E5c4LK81HbkZ5JDeL",
  "key21": "5zkF9g59hwmt686rfXuQVPtE2KtBfTmZjZS5YcEDpktmwnz3XpiqxLgFCCsKT8NUumppFGGdYQDFpJ7pY7zxzptG",
  "key22": "3A58bge69kG55Ak2NPMNbXiNXLK1YR1cZQArrC84pLKD2Ei976cjvs2RUqoc5TKvjHpACGgu5kA2K8oA1KrQAupb",
  "key23": "DBPW9a1VdkAfTFJQh3LWkjnsydWjVx7aEQTEb1ZTnum8aWRNED5xtGLKgA6xH4nodgkPrkpMfp5xsM271LCnhrj",
  "key24": "9xmLe86wwE7F6WrQDCrn2VWzoW6dFLRoRtTza6K8qNvJwfWrJkuHTZH5fg4HU1mTCgYWawDnEc7iJpdWxfpiHXv",
  "key25": "2BQaPj3MTzPfAtk1z7UYkoacnPvgooXTQdavx6aTbZqoQe3fBXRvWm6MtouTWw3r1esf2QcdQb9YUK8MAgzQgF98",
  "key26": "2bf8Dm9C21C2reFSmoccA2shwCTX1Tpo54bujFHnUDWBRwYqYLzNyFn7htZ5JVuZ3ijDwfF19GXfrZSp8znmhkCa",
  "key27": "46487ysdrW8TKVt4sYLAsFfEKuMP5shuzR2CaB6e6AGYWaXYXYtAzd5w5ZuUV6onncmGf18eQB1hQSEv6pQzCnpP",
  "key28": "5HJ6SNX6fgjbmjC696BBWXheCzQZkc2Rs5oBGoh9TBPAQr9DQ85MEWbNpz76W3bYWFYiZSEvXCkzCbSRKMZZyiuR",
  "key29": "5VnyzUjZTAuP9cEqeXedna5neQuikZoURWeo69cFtDWR3AszzS1mVGPkDU2cATUCpv5WjaRsx9kdWR3PN3LfADyH",
  "key30": "3jJLWgncaiyPSZEVwQyPfboLJZsZb4WJWZz1fyzgij7rSK81gRBVmz8qcUwxBYe2GmqGUDkDPkioM1B5PXTdRMWK",
  "key31": "2sG5t97rVMP8V5xpkKBeTHLPTfRt9HXyhRt5kH6mZ8Dm7EVADsBKdumin6YZGn6xSdUNLUJZYiuvCjLe6iZxeRph",
  "key32": "5vGsXTiq1J1jUXnXpDRRJayMD6Nyr7g5mt2K3rksmJ2w5atxmPzAMCkpHKrycSok8JRCtrbwMU15uaTMaLa4N3oc",
  "key33": "3wt8LRfTTwki5tmxJQt1rTyP63bpNuSfhiSaU8ipybDPKpTvKruzkbmehtrz8GTNtqkYA9sAi1gmvGE8svKbBTMU",
  "key34": "4aEaw6DJTSBe3TmHNFWGcEnnoaL2r9esoio8uBRNREwWBgsgJBxbA8i9iJyscpQpzjtSVd4wokWKXRh9evSYKYAT"
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
