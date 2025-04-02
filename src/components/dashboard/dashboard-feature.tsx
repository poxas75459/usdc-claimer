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
    "5CjDtTjJFpNYj4ocLhFe1aGsmrezqwb6LYN6ehptTHPgvedcq75u2hP5pqr3mU4TLf19UsZjKuWJTajbZ3DA1yJR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r3g2ZBBEiRnE54MYZBZmdxmSbC9w6E8mK8WY5151TMTPQLRERdUvCNL5cefn8QLFrwQ7MeNY8xTtkktqBJwD9qr",
  "key1": "Nd94KYSz6jE84ktcteW9SfgALPNXG9LhFMWLvCYdg8gBsJsiSE1ENmCgZjRjE1JwE95f61TAZN3aZoT6yJKFW6u",
  "key2": "dsrVAWYvafqRXZG758dRghE2mn34xdMVyjG8rnMBfkZdgQYyZomoR6KhiBPXJySy7f2qkFWZCPUs8ferqoqGK6W",
  "key3": "5Ghg3EZmfu6x42q2rM3TVJk7Uh9Km9TuRHMbAfj2TBW9w6ywk1FBKEgBdqANNXews7ApjmXiqzJoQC43G8s3zBzT",
  "key4": "55keYhb3Zok8Ri17gkPpLD7uSn8b9kGwZw5BkTVD3Nfow1JNzF58VwjDzg4A2MKbnCTLjTkSggZs8oW1e3bhbm8H",
  "key5": "5eWbHB3e5TZaHQegn2tKmgpJ696KzFoAFzqZAhCrC5Rn9dBEV19hUNDMhXXnrRMgQMSw1Td8sg74iaQymrtFK3BD",
  "key6": "2JuPe6cyuVN7zxn2AEUyBnN9NmsQrGm5Q8W1kHxD782auZjcvCv7peXqTvTx472VufUQC9kgCLP9n71mbwaCswcv",
  "key7": "5pTnbJmpULHsSsAgCdTDrdW6fCoEfUASEix61gYYHmHUQiSLTX24SfLMM3yCzHJr5MKJGTdLPoaXXc9ASdrRBLJh",
  "key8": "rHDFdhLJGWos24wHZ7FF17t3ayhSdUWhXjgh6WA2PouVhaGxKhW6tdd5XRNt9hV7db4cPXL2dre4sTSR6N3YCMy",
  "key9": "3pY4iSH7AefiCWdMJhPWehKik2VULYJwNuHvYvePBZA2eDqmUAwYWWP99cehoN4uqiskajhHTLfD3GeCm3S3XRa",
  "key10": "3NLNU9CFSTHevv86tniGjgUiKmzRxJbhJSMGeupafdN1Ss3aC7CL6jotd8MWTegsAo8zWBRGQXXk87Ybvd7a1jRe",
  "key11": "2Zf2hJk5jbgjwGno1rhBXH23AVB5hEwPcv3ty9hzh5gRWs83g6hY35kE5ef47pxpmsoh8EzyrYxc3H1yQdSEJu3S",
  "key12": "5B7KoY3cfcz7dUzN5Dm5Kan58HXiT8fj4KFcuUifksT6UtRQ4YcUnMTZDLarEbN4rLsFXu8zbiim5FR9Un8deyjn",
  "key13": "5AiipxHT4kznJirgy42obW3FprrgoSwurcvC7gd7FUxKBXWGbQAWQymZ6rEFw7dNdiC8jBWKENNvRQifmxjrT7Zs",
  "key14": "2AEZsKCfJ6i8yrKUfcame1mSttV1Mp4TAc8RouuDHuutEGxGdqtZyox1Y3oy72F1iZvUCNLbrn39ZVbLT8aHDuoy",
  "key15": "2HeVhb4yL2ZytN6V43P8pQbnFNtJxV6JNMncDu9ZvvdCsiAoUSZYH34YrPMptS2yZ8iypwYh4GKrEp6uYESU6Dkn",
  "key16": "X9abfuJ381vKPbdyCh8gLzH3EHj1wt69GfgQzzf4yuNKKRRa8CgsRWadG26xbG6YqDFHLqR1DTNnAmyhK7E3y9x",
  "key17": "xYtnX2rpyBcNYqESRbabRYRYqhv85hvVPTK76MvaumiHeFnSwqoAk8415gq3D9gz6WmtKzFKrzeCL4KPKaBPdiv",
  "key18": "4PzBcFRd8FJbHmAQAWVmVBQjWue5CW1N8pANqtRmBMbiRQ4T5vYMZapKCehf4WnWXzjn3iWJwEFmtnfQojc9hgq1",
  "key19": "pHZ1fVik6u3mMhwdKBWAaBsq4ugP2vb1gBt8i8avBD6d6FkvghS9rdf8ZVwhfHi6MLuxTMrQu7rJycamTZWQEhR",
  "key20": "3G6ADXmVcFzj9zJDdkKc3vefFYRwMZJHTRpsne1FXuAb3eBdFSPxxUQcZkv8WiEP7UC7QD9dBZAuhRDcJPPv1QbD",
  "key21": "3eQ97KZH7Fax2RC5maj4SwuMMNg91bbeoEmGxRkfMwpwDcgtUQ5WbThiwj46nCpXnMwkndzQSG6s2KiLmzQwACkc",
  "key22": "4JuUbz3xT1fEy1v1fi1nF6E1Chd9WYUQe8wvcdRTNMPqBABoAbWhrBoyd7ySc1CgKBpL9151aw7pGRSFoUxN7kv4",
  "key23": "M6KmY7rbpuws4kCxBZZ5Z6S7tvGx3knd4Co5sSx3cp4tAY8HCF3QY8XhrowSivqwfLVo9KkdEzDnxk8fCFxCYgQ",
  "key24": "3yj6NU51jbv5TuXnZ38rRHtYfXund213KpG6y2qbpLNowsWy3vqhR86b3ePBd8A1v5WRoragRCPvwMTyKap9imsy",
  "key25": "4pwLRCzVxC2LEDWUY56Np4aEGS3tvWetYF3NAoPWNxvJSUMF7ngbugrt2s6xUhizj6WHE4hFXyxCeHTC49ApyCFQ",
  "key26": "1kE31HUkkDi6axS2X8V3r3iLCeKposQTBH61hFYEmN2B1jyVTSXJPY13HjNRAC7oVVVVBtci2aJRSBtYYvDHaj1",
  "key27": "5JqobobBmsqkihjEFp3ijM5Xi2wzkJnyyPdcjDtY43tVGCaVHr279oPif44EPA6AKKkyCtffFW1Y42a6Y8TLZVLc",
  "key28": "661JYuScyyrMpWA9qvLb1iJfUy5owARdj3htjtowNC9LUjAYfzSsayLzEf9AX5z1aQbvQeJNnsaxXh3kSznFbCpq",
  "key29": "ppzuDid9eUVHTjDJ9V3d7XAKHx7eFNEfEtQV2H6TWmZv2WSQtrHJpdRmT3zNyZz6V8oePCyGEUet8kDwni7wWYS",
  "key30": "3XnzLn6DBSHyetNCaoRLssRUY8Gg9kr5pnjXbEbCDk7hL5HE2zYYk6Q9BGiDFVw923mVGDegWPw7TBYcS4pTAAhJ",
  "key31": "5euJJBvQb4jkCpsvziPjG7A57PVjwy7zVaMezhUS3CuzKSwHYDtDKqoasUfq18SxTZGzx4h1kHdL2sdYXuJdCMEz",
  "key32": "5VpYcWBPmAgUVzcgVBwimkkF2FYsq1bBWqpGt4nYi4gzBPZxVirDhuqUfrZZAbShk11BpRVqhgRY1QzE241CKjKo",
  "key33": "3eHhYrJgqsYxmsoqkAXdkC3KNNGDWvHM5La2WmV89UL26xc6YvsSm5oLE5UtQuFHXsUCrLZUFWkZdWDXELxfbQDW",
  "key34": "4k6aFRboG5DfJr8CjX4qnvNmNwDrGEVFg7uviUspTGQK2eWFVLJkBu3LqeXAwWTf1iNPjBLoFUtwZ4SJGzupssMb",
  "key35": "2M5Fc2cGoPgGs1bdJeHHzeT4xhVot148urmx11YH32MpyxtCof7MBMQjm5ZUfugDrJZ7zgM1gEeMpxBnK73b4nwD",
  "key36": "3Sj1tY6jkGbz5FA1Rswvcx8BsKgR6hbvLp1qqEcbbcxoktZiiCCCXVcqdCCdPt9qCrvs1u1TxsQ7Yo1RjFV9ztkq",
  "key37": "2AJQNeztwLidimbHpmqEW1q26BvBwXZR9vZWbTAgVnjFXkwioBJQfdL4C18pFgy3Hvs4q7ez5vFrNSVRkV7CFizp",
  "key38": "2daN6wFFrprZYyvm55b1ihFzPVUx4q3XdjekS7oPKQabArFvgbhQ3XVBMyw9zKPKTJgihqgnY7eT3B7svf6dkpRK",
  "key39": "3dBHBKdrh4meSsRCSpnBCCdN532GApVthmuh4JDCkqpe4zT3H2Q9aCwQaLQ9DsPJJa6ma1J9AUcroparXgQGtJ9e",
  "key40": "4RGnEwuDyHvNAYwTLCYEV78mndD8EdmwU7FscmcTX8KwtSxBj1tygeqDo9gbtgvmJkjdaBZMGT7BCauvSMaubhGH",
  "key41": "42zJRjq2yK8NSPEHEHPYMyReUmT24hgzzzLz5DFzitmzEmkKgEHwNVoPzEZ2GGhR5DP8seUWK2HKUEagKK78V2Ju",
  "key42": "37tL8XVXFhgVciAEnzrMsiH2BYF78agShr8s3WWmbdargEA7q2kXdeq3UKVCLwFo7hdwwsEH5Gvr65g3cLSUE6XF",
  "key43": "3t9oGGVZyKeRyN53ouN7DpGQyPSo5YQD9VQmyzDHUitXziobLmNxipnJYMe97ctup36SwPkmcFFTPfCdw3yYjLji",
  "key44": "3qCUb6VPjE5egV9Upf74zbnSUyXkdrM7ebjkpY6gjkjRtSyMvgqgRz5stoaWMGH97dkFC47Qt6rPr5eYQRYdV6vT",
  "key45": "5wXZeXPSkZYZHyZyFpybHAxYmCvGUK1AKH4g3H4q4SNLDVza67ZgTFWKwJBUZUyWTevbiBS5kEe1SHZv35EYAAdp",
  "key46": "iCfCaz7avbCeLqXCUyd9CC6Ej7V62hXX1oN2GWmSPzW23zP2kyTsqrrzVeEJDU3f7uk595sKnew3nXbYwQPUe4P",
  "key47": "3QZEs5BZsmE38a64H71Fq25rZWtQYyvLi4e71NMBZwDG1KpyWFpzQAxN4gUgSMjLk5fZvyxtt5Kp6W89Wb5GzR3E"
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
