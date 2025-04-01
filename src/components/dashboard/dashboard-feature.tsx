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
    "3YX4mEoVKWtN4BkbfQbQtknEjzGMPY8xh7tPtvkRv7mvVdxiDEQBwrMXidGxLz8hszkwizs487NfuzVsptVkMkwc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PVjeYxVdybxcPz3p7AcotJS6nyDuNLegkeuSmrPiEKmHfTYg6Zpju98XUmGFt9HYMNz3nD9kFZezx5paogXFFvk",
  "key1": "2UUeFHr9d1u4c1tJUK72aDxLsxgdc56UJPZLm36L6LfzsDRUNK3M4vK5JuCa47AtTuDPAamy6ZrNFpmkpAiEffM4",
  "key2": "4JFsxZMmDphkZKvsuFmhHeUghycL26oyiNRTtFT8oiCiaA8vLuv3QBBLvwfgrXDKYJd85z5pVLSR17dVtgMBakrU",
  "key3": "23Yrm9s8wNngc5rjBCkDq9UjdQuvfdvwKtXeAshcN55DpjwV9gs1Z6Ahq1bxVUWhCWuSYBLQWK3uQU7LcWT44fbY",
  "key4": "5eZUg88rqtnv2o9M3ayawnDE8qnswDpTL5Fw67TXJHXADfPxV44rFhUqHDsnomBHRKjAvpd34kwDoeQudjw6VCrW",
  "key5": "4eWLm6k8eUVnbqssdh3shJy74ny62CXa49NKkAEMA2Edk3Lm2wmawxdoWDM8TaqcuVufW1cZLoNx2k48eFWNr56e",
  "key6": "5cMXK9je24hPGfd9vzctTgYuFL6YAuVMTdXw3TpCGNSYvARkgoEpiE6NJKZmXR7TZgAPHUxPdnnbh8LryL5THgs1",
  "key7": "3hPEUgdk6TsW9yKd7Y5jgLiNoM1MtYxAKhxL4FTAopsM61dFuYpeYw6a1QHLB3UkTUan5wsg1i6wQEnj8A3Wpdib",
  "key8": "2YqGro8jAHsnq3618ybU6scPH6M7QiFb8NdaUt6oFcgrWgRXQCHoctFUBF4UTevEMvMCH146tzHe6TjxC3pzkkLv",
  "key9": "4gEg2DdqZ2SDeRgUgTFrxChkWugbXdqQqtQ1bM9VNJD4p5pknXRMcUdBbseuAVuoysG5VYFEsiiLYH8Hx87Wrtxm",
  "key10": "2vY31HoYTtMAPRBnQmYbteBaG9R5TG1HBkVJaQWQvhsigsFEZvwL3p9QMdDJridBitiDedhTdv3oNRJJZS6gak2T",
  "key11": "5xRws1yHEFgHeGQnSQMHkEUD4uVsLLYYfUPBgnLHogoBjBwyrCtehiwTKjyBBieYaLLeLPqK6xPdnc6uYG3BDPxD",
  "key12": "ryhnQrBhSQex7cVUpoukFPMPsk2VEWyqJo5P4fDv6zHQKPZmgpq72BzfMjGdSaqXiAm7HxZ55ZKixnKMgxxdiZD",
  "key13": "TPQhZsyxJYLg6ZE6rTmwTaEehzz2VmZZC4iKwszH8qa9WacYuix5rxEbwPbBCVWvNVABaimTx3pvxKMX7gtT1W4",
  "key14": "5PhnbWRzGHs9DpdSj8hYobyMUJeW5r8ybGnMfXm2Sva6A8ERX5zyQVCxXTNnBdsuzxxijRoUfWMe55Mhh5RFg67L",
  "key15": "4tzMKAfKv6ukdxDayqf6dWtr1x5bzkE6aj34jPZR7AP5uRuSY6RLb32BEnxA41gFbsNhWPP3eqTNwsaXrS9eiC8p",
  "key16": "5EjBnUowZYbh6PSY7eqBybquP3SSryEm9VtRZoZgJtmHyHtWf1br7Jc5eS2EFy6kUnEsFywHGpx2NDUjMugj6aqy",
  "key17": "ZSg7PwR2zScR44RgkEBFq72YjzfvcSXzGSAJrmN3qG91MTcZ93HPXp5H44L2YSrbGRgzXnoYLYDM7jAfri7JJFm",
  "key18": "3bazeoGwfq7gTCBjviqb9RS6FD6kxnXvEep1W7UuzvNtB2cRWF14TzX1YKc3kD22hRvrzRTqUMYrrzjftc8PcC3p",
  "key19": "2jiDjbCTQS7XYDFKH2YvjdQtrar2M6oZVPWWN7oXEaJQN6izjtw1AXxognuxSLHqJDA8F9pMhGoSXfDSiNDNyA1t",
  "key20": "3RqSTSbW5MUekC4TjZfm8JSYg6k472DbeK1hpwamgrrQ56PUBH1SLAiWnJDvnNSfy9LKf8mgaQqPSCFw2YjsTPvR",
  "key21": "3LvVoaVogmuqGiGXeysesxzX2PffDJrrLxuUg8cyGUQiHFBj14aPqvCGGXfTYz5GLRHaiprDWvjJWDfWNxduXwQF",
  "key22": "2SMLz3U1AYaKcFCfFYSwQsfbwxtf9uPuoCg8rLYHRZosctwQD1T9DAVS2EnCTJQckUkAVGPxoUk3CFv1iFbDYQwX",
  "key23": "5HCg8n2yU5mwqygL1wGF9NrYpaAaqd29nZ8VUV8t2tNr3mESBdmCUJW5QLZ1z43zPaVBuUoFx6i1NNUYQcd9LEFo",
  "key24": "4B1eQUCitSWCDRt9qATZpFSVaQDNnV99PCPYtpvc4Cjms29XpLjmf7dFRsAbgWmf2CMnyrMejULf81jQzuJW7sR6",
  "key25": "4MAWSJ5iyAYMm5ph3Dqmj6xNmGWFiEQjrdR7FJ5Pyx2vdfcMj5LmWcxZ6fNfcHGfqm4mRxy6EfZmwbe28M5Xkgvf",
  "key26": "5uePgjzhpEFZxwWZ4XbLjZqSi2pAHhmovtUWtUZ2uASsJJiUForszxSvv76x6pEi9ydEUm3zexPNVgyggHey9SeF",
  "key27": "2nN2Y9zPSeGRBS3XTav9Uo4c2V1tjeK9nmkFGEK4cu5r2ADtUz1uzPZsWx7v7WEEJVMHK4sPxeR4p4v4GNdyi93F",
  "key28": "2VrC5gKvU2BGq87xHfuaoXc7Th448hGXeo4SNHETMXmEfyQSZLMAbaXPSYbwMBR8L9VAsDmzdfUuSyFSQqDUcGbM",
  "key29": "2Jk4FfQBMLGTQJuqx9KWCnfAutSQfjDMVFW2BfaSnt6p69ukVxQwpMdnsNn3i5qC6SPmGxmM9wvr2sQrjm3T4Fyd",
  "key30": "2b93LwdxDu9zSgnN9ZcznpsFd8JimYskvSDpyGwfdGqf86pHYX6FL2R6bFRA4x5jC16U8EL7adbXRMMJBt1Dw1ZH",
  "key31": "4qr14aHwEsQdf969UQghzQXZgguznm8bfsSeixwKySTBqrhnMLrbWVb1DsJkgxoS69UxJWrn42rg3n9Lq8VBHBxp",
  "key32": "5yXXnEvdLJFQGHnksnh9bNZs5tiMojQMcdzJ1J8NhpnNs754MPx6cyS1fM1dWo8aGutqvwoy9QVovNHvtCTBm9np",
  "key33": "5hDBsMp8tDsJyjc1uV4gMspR7ZnzqUdUJ7h5K8vFKczMH5JhhP2DJvEeSwktZofAFGczdsFzFxRySv2PnNRt7icX",
  "key34": "5GDw4jqa9G3PYGosVrAjrHTXuTsiNBoY7xGhmg3SxhnxqJwbJQ6CHwS1kkxvhByxYn2TaJ6s1Mb4VscRDmC5fGqs",
  "key35": "4qQZsJ83JAqdY9S96YvceDnkbaQKoc9GzAPsNjNyp2F8SZnXKLJ9Pv1we1QznqpCP3CPzeJWefo7MyHYmgZmPF6b",
  "key36": "3mAsBurrZGZtLHYkZREeG3CgVjJ8CvazaecYv7nWToZYLHhrXDSbUhskXant8DoxF5Cc6KA8EgJeEb93bdWs38JQ",
  "key37": "gNNs3GbZ5SJyFWVPfTDbwM1J7pKsHpZYkk3nnmPzALtjacrSYRhLvuCUzikahgpK3Q2357Sg1RKqfhzGiLv58rH",
  "key38": "5ebvF5Avh1DHaGHtJnUqW8SQ3xoZqi7F8EZ5k1vkeG44cDpYkAcLrH16Vrfa6tbXvXhXACGgqxh7auQWivdmDqYZ"
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
