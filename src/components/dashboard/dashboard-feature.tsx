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
    "4UFNHHhyJVDxdmFjTDnMfVLdvgv6xCmGv6mQHYfvXM71bnGtmxbyZgdZCjRYdc5YSnbRuurzWe1yorKMNYAbmcdM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kHD1VRSzEv25cdvfpHGBrtTiBx8KfwqmugkizLrWsB8nmbdV7NPjSHo6oaPsg7HqpTPbgpZ84QNqm4o3hCsAJEZ",
  "key1": "NjfQUSSVhRbTvNcw5KUVLMTawyuDRG4ydSK6yqyAbto9H2V5ijqEQGdyTtEpDF2tpuzdS96dsykRaZdXL5AF2zE",
  "key2": "3PR1XvohbSDjfM1qBcC5oQGg7Qm7UkknaWF9UZ7uEbtnd35mc7vJzMESAD6c6PATeGWoVfQfDH9HzNZjJWuNX1xu",
  "key3": "39RudfYBLtKebk9CdFkYZp5MbveoPvReRMgRB56Rr9zWgPZq1bxC8KaMSrTkjR7AqWK2NEVHzwmVsaC8FL7vs3Yx",
  "key4": "5McsVzjJkfAwMetCy3MjGbbkXRHuM6n1CiYja8ac1bCm1AqvWZJe58zWCVdPLqFKShhLgjQ5gTY7B6mtib9sUKeu",
  "key5": "4e5EpshrMQNMAjt53Saxsvad1JATmgB9KGDbzw4YtJFvPuZvcDTWY9EPjeSjumQ44yxkuynVPddHArLpBbjErhwt",
  "key6": "WgjEQfvGC8i4xQo3XvWqQhfE7adWQQxtP2m5y8GRyveDZKMRby1ahseYheT8DCZfSpqz4x1F4dhvqKXj1a6rFJV",
  "key7": "8gQsdLr6ASkBLreLQ974kDcpJ8ZrtrTxoH6rgMWcF3rwUpNMaTXWqmd4uD49jJz2A9AsikkrWwo84vginmmADPd",
  "key8": "3mQhBHqupn7njaxa7DViBBA6emh3tAvjPtFpCiQRfMMb7sJ6pHqSP7Zk769ACp8HTUz9iD5hFP2dvui9iZfeMy8x",
  "key9": "32MzEnZvdCoD8YAzhZ8PhT3viUGe3R5fmuCHr4HHjjFVDfv4KKexrD1jMknGiEiVo7Q11YTnxpRFe5T3YAd3CyNp",
  "key10": "2JWXbNJ8eit6GSnWpr7XVKbFWhJAgsLbH5vPkK68m6qpSHE2cxNkABb6d29GwL9a6YtCMma6rCp6tg11GZYB7t1p",
  "key11": "5cp1Keby5CXepghB85oZvotb996Wyvzwy8Z5HSZWrSGhT6EF9fZWfpCtrEp8XGM64AzK5D3bXbFXMZ4tqtZiCvff",
  "key12": "2QtQcNN7e1iVnDvx4TwyYq7Jen4jHreHBLHxMbUCSQFLv5YfKCw3fazEhRnVtnbwJDvsQbBcD54A28WYm7PaEH32",
  "key13": "5R5wH1YBrsEMb7EKP57LspBetoZmtPA8isMoEnw484FfKQjiyPiN79rN7cLT5FCGaPygijMLFuMiLt1wxmGnaB5e",
  "key14": "34wuUaCrUqSwb8risy8DjNVo4wf1sBA4rur73NfthnxQdisX1L1bTihdE944QStJ9wP6JpDsFRDneMvWdCS14Qe9",
  "key15": "aLFAM7HUio1pGodsPpsyPwqidUtCfH1dkbSaYKhEuCVUmBxdETM5cNM6PbKLHkGuPQW7N7RZ1SBRozLNYy36aDU",
  "key16": "eSZfsvuGBC2YDMuH5XFjiUn8eEbbPwgREdxs388yNd8yBftn3mf2wWtw2mGsq2aBBXkC8uSfZC4zpTUL1qsPvMf",
  "key17": "4rPcotVKuHTDZkenerojpbZ6fH9q5s3J6HGGhFD1yjmfX48emPEfjZdMAxSdcJ9AobE9KP4xJsFSur2CYkkMUdso",
  "key18": "Pc42YtcLj8HJppsgoc8GJHpCg2amPT74s4RN6GNL44DqgPSWVbj1ZxATSD78hq1xQfGGLD9ZPYusT4YcywDkd3L",
  "key19": "2udJ1u8pkJxFYEUtbppTg6g1k8aR1SzW2i9vfcbdKNZGL8Rig39PFhmPR5bRFkz9dmGFcm9anfWjq7FcnTUcYhG9",
  "key20": "a4bZY3QAwn1g7RXRBmZGXm6Y5J5X5bAx8ponAq7m7AnGyStxSW8Fi8DNSuGiFnDapmCEGq5h4KjBmppXDFY8hhL",
  "key21": "2Wk4BsNyqFpzBZ94juSQC7jCRJT5FYxuntYaZ6hasSNaX8Nx8SwsUT3L6TufFRKJRe7q9beNsaerHB3NdjgGdAaQ",
  "key22": "56m1h5ucrwCoD47XMtDF1Jo6YE6T7ebGoDvjUVVMw22WYSYMR5hmo51UYhT9PRC3RZp8R6As2dAu87cjBzh8nqNo",
  "key23": "4HfT5rtxMxqsw1qcofdz6tFByCe3NaoD2niNaA9xpm76BBY4oEW42me92Aje1sGvHRRbxLM7EpspdLPoZvPTRBse",
  "key24": "62o44RguwqT2s1t2DZRdfiy7VeSznNZjTsxzgoZsTJoG6gwbEkRY2RGvaxG1TUJ2oLaY4GXApm5msYafyD9typWY",
  "key25": "3YhJ3HihiAjLE5r258iDVJtAPUgWAepc5GEfSjK1DW1v2S2aELSBqX61x6ny86vEmya7B9uxbTsghRRfMHmssKm3",
  "key26": "NC8D2eNDnFtH89YvnpserRFyHe7ioQZin3hMjgKABbd99ZAdTpbYrzsUS65u5TqfuStHRpfQFjTUM6ybQLSEhqU",
  "key27": "3yUv2Wq6Df3jijHEQVKN3Ux1ZX6BNe2Emc3vkzUqexuHTN3N2Y2jWp99wSejdNoGoqY9oGs3mKLGYnkyGq5c7UJD",
  "key28": "5fk2NtcF7KFX3wDwDgkjwgrfMcm4t3EWHbUmUHxeHgzLYbv2Ckxkb9jL1Bfmc4CvJGVnWwejocrYKFrxbPkZqjm7",
  "key29": "4CUgqRj75Vf46sQtjrGUzaKDH7aosA6G3gxLjeyq6XV2fEAKdemYEHfvMQ3vKRpgBA6nSm4Fzer3H29be9Fi2ctv",
  "key30": "2YVTcu2X9cD1AgZ7KMqiguBgHVEiTefPZYVQhHPScvjLYghyMwcuv8iuWceUDzZVGiL4f8H2eyCBH9jd5QitHdkx",
  "key31": "441g6UnzTqDG5aMskoHgSBhYVfDrd6r1S8zA9KRPRAmW5DAm8TjHouWat5putcWwPX8Q1ek2Yp5QiTyZrihaKS3f",
  "key32": "5pRK1LAZNqyibRNWDGmc3gryrtS2RhUBkmcfswR5gHXzBnyngdMdrLoKFpuJ7cZSMuGCEPxbMh932DQaqLYQbyXy",
  "key33": "2tQJcuzYdnh7GeWScFdC8zf9hqzko2evNRBNLD6mkX4FsTfoqmnXpqRs2wWLAPD9tcNbw1xM3PV51PViTdg12y3B",
  "key34": "2Dia3Hff516SEcf9YPvLwp6HHq14o3AYxjiZKfD2yBXuwST316ZpQskkbSzbqYHmsytb4eaLcJzVqo8hKubZTciA",
  "key35": "2zFoHwYc31Fz1qewBmt8Z5cYLGRPb5n6EiZbEwDkPf9CiUaWjGxknrYCnHExw5PS3nXJFHmmh1oVGZ2uDesZZi1F",
  "key36": "mdoyymYHTjpPeyCWpHhq4GimpHatm7HMXyRjSxSPpukWGSELBYe82u4ZsMpw5GzdVdSoyUVXDX1nw1mkHCf6oWN",
  "key37": "euxM2xGztPQZjLTT5NC7MBcwuuAir125JbKdB3UqyakJvbyexB4hFLkb2ByvC4dmWgryBdJmGeePrvs5XxDUMQM",
  "key38": "MpoGFbBFde4S4yw9gCWy3wbyB3P95wUyKVsrnntPtjdpBo5THVm1ih2stDw39Hz1DzrstWwz5JmdECRyppgLdCn",
  "key39": "3McWbPMVQiqcz2pCbhYWanm1TDpnnZenhNbbFy8WDH7ZFJK63XjijSXafXuQAXjq5b7nqHVLEB4RYCtKr9U2HXci"
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
