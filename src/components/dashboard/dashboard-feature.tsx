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
    "45BaitNtmgzwDQz1x3iz3yopY4dzgXnXVfmxhPFVzZCi2T9uZcRVsjSt3YfoibN6F1qjd8SErMQ37ZcEeUQpvidx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gkkiJfSXM4E8M3CmsUmGGdJVxZhhBR21xRoi5Fob4qJ3jbfMP97NDQTgYAYPNM4SbGw2RetQXZMryrWkB5gQ2cn",
  "key1": "5mNUvNRdYZSfW6tYnGqnHjGtvsjwJbEpoJ5nbo7w3YeBkszHTGcW6au5xQTsgfQ5xTDTf9jamZm3xs1HJYafgd8i",
  "key2": "4V6o2RRkjFZcUR5FWu6jymVgZE7oDJuecu9fq1UoB7zgbre5QaXqjp57BHpDrqCm749mjhnaqFoRskZpGG45t11K",
  "key3": "4ap6c8xotLcj15WM3CsVe6t3T3pLECZQVnsqqJa7wyXe9512caC7QL6AD4imLFSugybZFertBt6bXwAq8N8Xbfjb",
  "key4": "bS8bfsDBZULdx1ZTbianrqSNyDJGXsWP3o6sta6NwreqcoghwzCPRq1ombEw1M4vVAFXjA8s5HcHqiujcRVT9vn",
  "key5": "5GZixw6Ct6hQQKH3uaRf5rL9nZEmhBrinyXGxFeUMWSoqj3N8fAq52qBawzLja1W1NnE9mTTphiVLgUnH3QfNRFB",
  "key6": "5h2erJEy2JZsyRZYJpsBRzgdkRgyFuQfT1gwkysAe5xzxFc4wjN2VxzWvC9ZX8AZdiQJUvRvG5smDcSxWqe9RKFm",
  "key7": "5YG6YW68uVUv3XUxMGNaJgePHziFdU8CmBmJcvfbDm5DnrTd29hCZnxDwtjuRy7bdqN5m4dRvupxTGF63vDMQaX3",
  "key8": "2oyruhYhiNXZS5iYAdcf4yBjM67WApRWKGmTYpzS7xBJ4JD6snVtNPFfsFNG7swiPqRzqKRLMRAh3omq3qGoPAg4",
  "key9": "21SivVuRrXVAxDLAJnfQyVpJRF2VKDtXSgntQFa8ZGsytZBp4Qx7AJ3SJ35VKegZKFYGiSdo1s2R4hygRqoa1cci",
  "key10": "4s41RTMnwVYzM7wb5EjbZRw4pPhk38gLkQMxG2dFWaNHcymPj4ondcQNjC5Ag8uiX1wJCw3JA3v2U2NFWixKNqfG",
  "key11": "3CMTPnbXwX8i1ny9yBt4kJN7na5KqC8mCK2tXawfFv2jpwtaj3EttQiiBxdzJEWXxGFtLvokiRQKxTbEhuRXvUsZ",
  "key12": "2oFqHf7DMph5CS3czvjgsdb7kEDLoX2x7HvYo5wj2GMS3PsdiuGFx5Ghd4FpfyS4goSgSrmk6MxzNXvGEhCbJVan",
  "key13": "3waAaaM1CXRrSVue9oST2XG1nwKvmja7JeHwMcmbJ6qwFfJafWBDK2S8ZcByVmcXSjjZPtacq2zbvV7o82DYG7th",
  "key14": "57woBS1VJ3uBkmcbSB2jeVUEi639fXki6QKG6pELWMZ94KNZYd4pEfdhW5tFbNCEzETHfe5Gg5ZSw8usmB4vCpfp",
  "key15": "srwyMAuAfXmmVESutAWbR89MyMuT5u6v9ikMCb7rSf5m1V4998ihGcAEvM7uhUDdUHqd9XkViEvNBRvp1XuGMR6",
  "key16": "4QRZ3uRKFLzNuGrtqSoXh2PEjQ16mu6s45dsX5ea8iAzUwWZfv5PkXShACmUMFBi7tQ13TZ4F8hTmmoPGf64PbfE",
  "key17": "4uL2Pc26UHtRGw3NMRuNqVTwnZiYdPogWKoKbk88EL4kqtodwmcQGsprrJfC2cUfEjyG6hriy8HgUp5BeQZ9QN2F",
  "key18": "3YCrvPcALcqxrGBnbZeYdEWa6RtFLE4wNfiZ6UknYC6HDNCVwHS9h3qwRr8mc6SLQjQPMvpVoKH88LfPYGHJEkWT",
  "key19": "XvuDCpH2oLasUSSskGMDWCSUBFLrMk5D2ibGZ9LiFbdpDEykUmgbAHg6p9YWiq3zDfLXvDPwbqHr2cLYbsgYybf",
  "key20": "4Acug6SEsQVEqae2fCnugGFRcsAmjmVoJMkiJ1bosaEacwNS4nFzqEqq7fhYk7NtpDnSotAdjSeHmCX9uCcsH5D2",
  "key21": "3zsvVsNSt6KYRS2TRPet8WrwgdYKakhdrZVRQ5QNWouGQZB6zjn7bMtXm3j8xdGQoQVbd7t4BVCzsAKjhmpe9rDR",
  "key22": "wQQeouEZioEHvzeuh9DJLVcsiEvYiGd9kKmH8YLAMyiMvfkU1ygUQYtfxP3yFURYaHLZQTg7p3fAthw9qvQ1TXj",
  "key23": "48TBJyHcc7oqHQksmitg67j2vsJ7pAAKCA3XrwuYMkhEaSRVXaVJSvvu2eumyovcSs5mJoBnUawgXdZgkSAKVTrM",
  "key24": "3Dsz3akMYYwGmJzpaK4fUhuUxF2kWZdAXZmco96Ad9qgRiNmvGX2HcUetsN6CJBSGEgmddyT3BCj4GCA2fvpwWQE",
  "key25": "4h9cP1xbds7eEBGt2rASsiNFs3RjM2ntHv6qokC94ewEvFWKgfaBefRQNEuVaZSGoEH4DeFHFr67ceSys9tg8Fno",
  "key26": "33xmZgtn9RWf6SoRqNyZqGTKeMiW1gaVbVHkjLiEHdQyKaayi1mZvG63c5E6Sy6DExwAFMxc9Xs9oZDRCabKBsEP",
  "key27": "2ynUCSkanr91AxjWWFaEbfXajR2yKEzMLJohR2TEopNhhUva256D7oPNfLup9cNK1ZDAWT1SC2J8JLE1uA217mvB",
  "key28": "2b36FzPNSX36cBEoeAgFyk9YyNDbCWdNmhNaPmxCxi35GrQbWZVwGWYUkmvpEB6Nyi4Czo7FGVstv4YY3M3URS6X",
  "key29": "4Pkw2h4AhLvjgaGfoxY1U7D77GW6EtT2KTH66oCDeQMbJJop5C9gtvysoW9nia6qd5Et7iA8N9NRwKiN8UWAPT1d",
  "key30": "3N5ngwgJ3zkHmWR9HgxHvnUwUeaaKJCmdPPbt7NnipdAFZUCe3BKjKMceoEEu9jLAbCAdzgjxW6RBGVzC6RbxL1D",
  "key31": "3mHiajQ23e39GrJV9M4W6smr9xuMm7Yh9BQMzWB1CpkcB1rdKrttpB6z8oNbSRLGnc7zYgPnJeDgGvRpQaNhsxH8",
  "key32": "4SDwfMq2zHb44z1iwMUAFQ1oyUsj1aC2159enQvrCGFWGtwxLViCtPaWrDhDAZCuKwYfLGX9ksbySC9mTcF2zRbM",
  "key33": "2dstFMqak5PBMWerjR6jouFY9XB8YfshCk7rU383tQSGrHboGctVsMzFWHiNYSfBZwgAtBupdBoN6mweXEYq4uLv",
  "key34": "3aafVVL3vMWRafvPJsiZu92QCwwuDURr3kbNkZTpZ29vvrFPcnKkK3s3s7SsCYJ7vhxt59PH9s8EV3q3Zswj5xCr",
  "key35": "2JM6UqEYAxz6uqF9voAKDWDP8T9faXojzg6BqQgW7u7Co1G11EvEWofjURsmSPN6DTMmJbaB7uGLYNT3gFHzq73w",
  "key36": "4V5Pu8Wv72HjE6qqazpQZoJf4u1FrkxdzNsjsLk4wk4hAZbKQPLuPs5d4xDBhJk79Z2ywuxksG3kzNMVhjwiZDH2",
  "key37": "5bgQTUCws6Lq3XwTAmVPCUaju3bTy6CiZKcSBXfanwxCQt8WzzA79PBWa8V3Sto5ZZzhERcDQw17iVfYDPwh15ha",
  "key38": "4XqUyZ2Rw6VDrhbaz86WrKDkd8Eo6rJHpxPkJ7az1HL5NZ3CJMkaQUxr5THvfQQ5TCaJGzk18AzAzSZiVFaNFC7U",
  "key39": "48SxzGWXcYoZXs4eUJgKpkaGenRm2Qvs82iPEcXUotTNJaboCczSLyxxhvvi3WYt5Tz94uB16DVEVUYerivwaKZ9",
  "key40": "BKrPqxyW8s6wko9VDNED29reC8HcA1bHL4unVDmfFk9EUBG23X8CnLpgPvkyHbBEBZ2xgfz9S3FX7K4BFzZe6V8",
  "key41": "iei2qZXtD9a1tGjhCoCyB6jgZvrHHnGDzNhVNESGctYuchme57TkYAhscgBQT4U3BBEddineEKJJM6GznKr7Soa",
  "key42": "5esj1gtre28X5LMSp1uCa1vDzeoYoEAs2KbNuMhbeDarbaYG2Qhkcit5mZLtpPV4MGWJVwpyGQjDiGbob7VEhv8C",
  "key43": "51dszwCDtSZdcHgtPSh25iUnwEmRHX4cQPVQ96JyNZvhxAAA7GNNamKBtyq5KjM7pcwcZwHabYUo4fgnSsDS9MCR",
  "key44": "488ds6d2Nj9SsMW3KyZ7ntTfN7oRgwceWw3X6H7f5snY9CtdDQRDfpHm3bVmnFYqBCi8FScwU67ASiuuSBtdR17E",
  "key45": "33LsQD8gecAbwiBduc9YA8E396NcZmtjY8uZpecW5otFK4MLYcJHugcrQbAgktQ1Hg2kNm8HZmWvRChmhaGwkR2U"
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
