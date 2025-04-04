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
    "3ACHfTNB9Jm76KqB3wdwvXSVyujz3LH5cqozSK6NjfCfCXxosXqpMVMoJYoM26jQWkF9GBTGofWxjJVTwfkSw9c4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35NMDV6jGYvAcs9T9HNt2oXyy32KHKPEt9pkiAbzui4Yxo4nWLSoo1RxzM8BDJTDXBSFftauDKdD4K7KpJMDmh2b",
  "key1": "5CbcQhjMWPX7QUeKi3VsR8avkYaidb22ALu8RtnM1GBJHB2RPLTNxbFVmTuLgcGdw6oQfpttMrg4CmkDjMrZFdUJ",
  "key2": "2s2XhBoYCdoHadsseEbaFZQn9jqYBuabFhskB89tK6hzJd8GcKr5YFSQPtxqAjWBHT1NBMdazLHYK16mg1hVW8eW",
  "key3": "3SeR7QbE5XUpYME3HUAjfY9uQMnX33BVTZq1Xejjb4RpuX3LWYM3aLuPiJWxuhDt18BYC4FeCAme8KHxa56qtteJ",
  "key4": "4QyzPdDftJ3q3pHJUoHkwgdxjXquCk6ypqxoxk5i7r3J8NvvUGx4j8Phgv51wWtA7jj68eymj7W17yEJvNRgkKjJ",
  "key5": "2kPss1XTBzbw9oBZJX4wSTC3ex8DBhKw1UYXAcmH7NYRmE8W8tZoeTaH62SGVqA2JChh1tupnDWYrfHRaABxYJm4",
  "key6": "5RqL5hWGjYKygF3bB24EZ29UDuV7uLMAS6YaPS9WUsA66ZhRsGSBLuD3tHCuvqv7KoaVLpDsyn2TLYziK9YgZ1Jz",
  "key7": "2GZLinUqV6gYP95uqxKkMbLsL7wcmPmtev1pSvyHyMK8rp1LQzWnZL4f63rzZ1xHVoE2oqFBDZ19kJJ9RtuUc6KP",
  "key8": "5x3bqsRCrQ8smQqv2SHmEqL7w3ZUyFyjGqK14JruKc91Dqpu8zr4SJ5xd2rHKCEbXhqtmhT1v4eeKLZrwJ46hZXJ",
  "key9": "3QNiD2a3ZWqRxSruNpTTWUukkHSmMzxDezBUoHd9FuuSYcpQZoHg6jEnPnFaxYJR3fGrLvohb7vAhM7CKyQ7Zewj",
  "key10": "PUpABUmXdsdXBMYpWkSFMkKxu6o6TKCKAeBXyJYoCrRUtbt1gYYNNiFJ5hqihDJDGGUtFeMDyKLGx2gNzBWSySd",
  "key11": "5YRjGieNXLxsETimDL2HmwNwATD9RT5af1YJXVtEnmLTvJ3U2CVvzkDpgU9r62zSaYKXZEP9Y4DgVrxhFy3dx2Vo",
  "key12": "o7tm1YhYpeBbVVRYo3iQE2pRSsnfjS6QmScQyM6frYKeLJzFbL2VxTrxgrmyDWS6MWF3gPA8LZKTAeH2ef6Fx3A",
  "key13": "4LX4RSxyiAHPqwq8DPDCNaph3FnKs9gAKBykqau8qH4mnyGJTbQV6uA8JSUpgFCRyaAzsdMxdXv4A7uyLpKD5ZPg",
  "key14": "4Hou7X8kbLDp4mciDNR1s2yHTDwfQSCekFKBUFgFqt6SNgPcGCiQxS2Av27SFu1ykehHiq7BDxEEZJzRZ4aZiTvm",
  "key15": "5y22ntJhZf3Tfvur4LB1Y3y48aVpGvfVdU3rAojxzgTzvp1yoGMvuHuqZHjq3T8xjgCLnhKN8fYeZ57smkGvkLGY",
  "key16": "458gi3Mz8y1QfoPGkrVXuN97JcmCYcChNZnWc2QdyXrvNiXnVsgLLrGQnmzycR7t28HydWXPkyYia2JuM66NrVN4",
  "key17": "4NHuEwiSSA2AaGNmBmXMVp5kwBqyHHxB9aatsz7kFW2GzoP4mnRrenvfPGFfuMxNqkjDBRtzLvhMgvy8uC1TjMVY",
  "key18": "4jz2ve6fQVNnwBdrdqkjaueo6xYKjFRaZnpSHg42oeTBYowEVmiNMg51k4rKcYCNYWyF9UU5B2j3rfgcVVHH2khc",
  "key19": "Abp2BpekLN2j48r6fqA9xWyxeNUkiZD6KaMQMdCRTtiKRVBk3fXQYLtjkzXSYMwSvDpkwDnoZBtRJvXiJr2pmet",
  "key20": "tZKNmRWrZMrbrV1wcqQ9qzJiS7AHcydEpmEg1EB22wqaVTCUnBuDu1w4r39hThWuC5sG4sKZhVDSSBMgz7upt7q",
  "key21": "3SLYwaL5uVYDjVCFzfSbzfHwAyHE8RPzSqGuU2yMPZTcM7cLmeFfrijGWrKkWbASdAW4DRTmdvvZ2RqsytJTcUG7",
  "key22": "Ja8nMxruUdrBiDbtci1SDonzbAWUvVFFQBtzUPFJD81oRDFaVDBHgnHVwUDT2g8L8zbiW4KGgpN929ER2A27pGH",
  "key23": "63xJctv8ScurAwD9pfMb3DwnKS5oLUe6Uum1ticC7AcXJGFSw79xcUzoe3FBACfm2SBnijReJanZoT8pCiTtGUNE",
  "key24": "5AXED2q6vnr4LJJiLZXm5kV9asXGM75RKLHKXQiiUXAXp1xXaqSbF6KXyfH1Qz5WijgynZBGeS6TA9ikxiNXBv3c",
  "key25": "2zaXouHwMAHcVgU9p6ryPt8v5HmcxWLW8dxxVjZmHWunrNgF385o3yNZRZcUaYtKnYiBQfvDAQYbRPihkBbBpgKK",
  "key26": "2Rz1qvcs9MwVXD1zHeVjcaY1dYu6cgi1TUYMLccAWsUyfnSmb5n89ZpiDNDjAmdp5HacYZ6ZGdqS5wtnTS5ut7qX",
  "key27": "5JhNPKdaZJwLa9NAKoxcnuy1gEokv7iTupDa9wbLoUSrKPRQjT1cxW4SNgYkS1YH9ayxu3CSyv6cmw5KEygcMaPF",
  "key28": "519TQXebXzfpiJnYBc8213ejQvvrG9w3avoDhN89b7vUKU2Skw3qDB3i7PECdTyGasV8JA6ZR5Bq6WiZ4Cgzrx4J",
  "key29": "4hpwEQtjXra2yw3VsnuGLMVrghSYeMkDCQXUbmf8KxQ4SxGsQqEncej9xkEQZRgke3cSKXTjUj2Me742iDogpXM7",
  "key30": "2rcPRwa3yY71iusZzzY5tG8QLposysiEyrsCe451sknavgnjhzrxSSdacZtLsWgatMJdtDzrTcoQMGdaXke3784",
  "key31": "4no4TvbRQEWdkp4csNQ6XhrUfky2EMZWzoSaQJorb5GnjDojiKUPmaztYGpYD8D6zbZEWxAAQZjQue6gPkTSaufY",
  "key32": "3rvPxU3mWr9adhghL1PQJGCSuF44gkJvgDozdCBVGi3NZPC1H414bidmV3eb8hGHoUa33KbBYqhwDEuBHQeL8c18",
  "key33": "2donSj6mxAVEe8eAACqwWgavZkWQHiKvxfEyjEn4sXZ4mYrWajSJiDEfGw9fBZbMHJQRdMdCBCpgN7Tc2LBUKYdd",
  "key34": "5YRRbEcNaMW4aaxHbodMp9LQzDeWovoSw9aezQZFNf9ajYDUZUu65DpRKYxdC2qncRLy1ophC8Reu9UtmpT9RPwi",
  "key35": "4XYnJWA9Vx7Degy6yjaVW7mf6xR7WrmiJdmh9C7LxFDDePPPP9NvyehgakF2efySeszL95gvnmVHT1KLy3xUHoNd",
  "key36": "57ZDDKz6ePeBiFm8QaKioLhGX9P4rGmnsVruHXP9y9YDeLHZ1BwTSNswcjKXcMHctgJfwzDNrqmH772RwyR13EEZ",
  "key37": "3sDi9EY7EoVxqnA9B2LtZDpcGzaWrSuZxc5mp2JqaF8V3ZXVAv8XHEnZ8JVsXvEUJ6AWTAHQ4LY6KvFmcL1jaNKd",
  "key38": "3v8eTnfMBtkzxqBa9Uzc1Di9bkM1sBqyX8meXX1YzdT9aoRAiNSipjPMbTGu8GMpidiokyQSzR1tUt5CFgHpjthr",
  "key39": "ssDpeRh4ZTkmHZCbth65pM5cZeWDyhxSXT9Pa4CraVYnAK4Vxp9ajYEqZQ9NCRuhgEHgkvja3nBTAdTchtMj2M8",
  "key40": "45s7wH1FpBybNYJYSsmgbfeCTBB5wigteGMnEWZuv6sXt9brwJB9nRhasWpzxKEGSyqD67RKj5htDhEBocJAxqv7",
  "key41": "5UJaPvTQSyfzxGhxYjYYcCbRiWNMvdXqofxK1HjmMWK6ycnreZX4rPFGdk6J5zLmuhzu5Ca9BcgXC6C5jCrCvCJK",
  "key42": "VvrfoG6i2Gfq88vhKCkFWzcZJH8jpiyidCSUk3fjDqVUgtLU17faULNWQDMnnk1gC8bxo1UKrWqRafphn9MBfQs",
  "key43": "4GFh2ocqCQdipv4Xu3rtsHTuH2bAa4rwGe1HZioYvmm6ws3arSkJnLgKqFeJW9bkX2shYv45ZkQK8MD8v1nkawwg",
  "key44": "26z1nKR8YssLVD5mkvdVeXNWbCgy2WX2F5Sz2qw4EPwvQ8RNnS5YoqxiSPDWNPrNxrQ4M3SCC3fkXb63NfVvhd5Y",
  "key45": "58pN2ptjbwRJSGGmbXYGEYY3QbtwjWyi1tcVP7naEeposhcjoBh7tDvWALkDewASBwhy7ifhnUSaAAqpyAP8Qbo",
  "key46": "5THAp6B3jZzStMEtEGtMPSfQRD4Vq24vVatxMsQd7mMa4fsp3y38ooM459FjKBXMNnxRkoSSS97iWwkj3a5RM8nb",
  "key47": "5nvuykPLQa3LXGjRSHHEz8x1cuTQV7cNqvUKyE63ZahCRAXx5mGK6cH7nVrTkbwzHY8MgkKq1Kuqij3s4Rwj8rtR",
  "key48": "5A7Lx8vxDxYYyNU7dqtA9xpMZS3XwW3py5W7DemzKPpZm4LCMb4Su98nGTNXUWrvzCJkySU3KYHVvb9eCqqD8dpZ",
  "key49": "3xWzUkeobTwaMvgcHWFoNrfk9oSaUmjD1FGs9xSFfukKmTVvFiSvfPgoo8wwfToP3HkEt7rDLLtqh6YfWWHCoHbW"
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
