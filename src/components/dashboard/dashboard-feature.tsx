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
    "yBb8ijCJ9dTLzqNoyJCJjAvSJ441K2wyQoq9HoygTMFw15U3SryAgXyCDix2Ky1zin98K6GUWZTr8Qt1mgFf67L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WBbEyJKjH6V926xbTUej7WZgZFrWx68cAbHkJbm8k7EjR8BhY2F2Lky722LPNmAwCUr8Epap9dwHLLthwrHfGZJ",
  "key1": "5Mk94tiUQsNBimzTumPLpF538FAQvEXAVfvA33rxcyMAbRAyBAadknzgCLniqHdVx5wX5mtYrhDkB6wkccWK6yrx",
  "key2": "24kVx8GDapsD6seabK3z7DbruaDaBknJRNoRCbELaH1yMcquKy1QtskGzkA2dbiNDnfpw6yEtD2g6mmhmbaG32kn",
  "key3": "zCDtHJv1YbwszcyebFVZqWmZ4cAoTnazns7azcP8dC52HbEGCBmty66WiYLsXKCmZqnVNYaPEx6VjsdctrSyXLt",
  "key4": "2XHrPDvpxEDcZDBXvCZz66WR89xzLaJRMsU7gvnX1WDAfQYiRm2st5mHwHpVs3F3DJNHrQurvN8hFY8roJgdJeQs",
  "key5": "4rt359wkWPV3RLjUFZFgogvvMgfgT8FvpukTU17cHRPCKkBrtUVymYvDTciaJ5snnT32ecekgsLFuCMHgTbsPANY",
  "key6": "37qpeKkK94XjQqibJdEXQwKgS5HJM9fMQKKuUeEAdW26vZN1zeVQzuERgQ6EetAventvLp3ZEciiptpmkpHWYxj2",
  "key7": "2GdGMei3YnF3t2tzXVitmhUYieLXTPG5bGgTS8EAVpHtjkNc4wpduyRB6WNKTaT2nBAFRGzNACJWGdfuNVmVtRcf",
  "key8": "5bSoECibZuFDCrMpnQCZ62b5fnH2nW2NY6THkYH8QmNvGy1R6wJmduEpgveRnQQV7Xa9EnWQtv3JxRcbKA9C4Foh",
  "key9": "4BNgVqfQUyr3gPi3sq4BJBMgHfL228vm6qtp55SMWQSP2dEQuK17L8tktiLx3RG41gS6z3LH3dpyXJsZeqXYGETL",
  "key10": "5e9gunEFfdk1G7AQnK4peUTrR81hTZUDs6q2V4ZaQxtVNESDU2omPAe6EKo4QLqhHFpErfMHEibP8iK92YbgNv6D",
  "key11": "3zeangpV3nr4ncspKqDoaWRzZNR2CJdur1XWY6A997UsEDFvtSbTYQEfYh7uzPbKhj8DLZESph4i7RRCn93bo6v2",
  "key12": "3YSH8YfcJnLFXFCAsFshgKboQrTvKqaQJkVv1ds7LA5Mp8FtMByAxjEjTGXf4Fq2WJc7Y8uzpS1wLVqyP9PnBeY2",
  "key13": "5KjT4EjzQY8s9u77MYck6B63KvYRruZigwBkAUkCtX6iDdh3oo7axgs5XWS7u5BNPetzsqw43xNQHmS9qS7HosjF",
  "key14": "EHK3uZ7Q9Pcw5PngDsPEvgTkxs8j5igXauQFH6HTEmf17ZUwc79mup84tBYcGiUvmHtDVo3dLmLPxM32dhNcEYX",
  "key15": "2jET3qrHySnKHm9j1U1oA6fbtyKQZZ6o4RCf35sPTKizKpLQkyLC3zKM5MnUBMDmYzAa5qstm73pZKuqPHWpYSpQ",
  "key16": "2sXVTdeEpjYTKktrMQnFyozuxMvFEhvMmtojf5HraCMVpHqd8GQosg7mhXgsZgyTeU224bsrPV5UPVoBBPrNwpFG",
  "key17": "YNc9jhCQ9xy5JyBLURJweGwFUdkWVm8sjhxAqvFprFLroqSqWWaSzQGkLrcbzdg7aECRku3ETEGYxMgV1a537TZ",
  "key18": "2NTWPAXaAotxiMHW8fxuh142pRh6Z7ciboTCwZudC39nLRw2qE2KmMBvZqpfdGswe1jQmsy4bTUMLKxe51pFsDPV",
  "key19": "4UaT8roBJkbhm5MsYmGfSgVeKm1cKgvtXGyW32yQwtvsgJoWDXEopZZ1YZ4qHXVck2DHC7UCoijnY8Ed3f2EDkta",
  "key20": "4J3jwh7AxTktVXZHazayK6tf5BDuuLsdH3kZzqPUH5ekoUQmsTLxYfeGxB9dYofwe8npRiazwuwWKnC9oABTd3uf",
  "key21": "DPnK1ADeGQLff4FxkPxBQKch2wCxCM9U7F4MCBQv88JpdLnZYqfpe7pkSFcvYhHtmBwQbtaUGsjT5iWuYDQjoeb",
  "key22": "UexeoF5Zuaegb8fFoLvadWrs1MC8NqPMjmpStnuTN1Kv6aaYEzFGAnsZ4YhNycDW6gm4GKgaZxqkzz9Ghw9Uw8i",
  "key23": "2eUAzDyFzmJh1Nkz1kbxwwxcAizYpd9Sx9ewv6EpaiA2VdFKGvkBbcBKn4eEdogyXukNWnjWCviMiChM2AkWF4zy",
  "key24": "PeCnwokZT1Yvgrf3oswW3ciNZHHM8E9sppEtzrVz2v6CSqCFPfJhXN485LJoYYnKr5xGTvtyQ43tcRrFPzPdrbu",
  "key25": "61WDyVY7VvJ9mREYxMWHK7HQh5j2CC4jdd7RNVAK4MfHHZURGXAa4e6r7wDrEZBmsi4BjfbGX4x1pcHZDTwzbvek",
  "key26": "4FArxPexeMtcZDkCdg3zoLaE5RbsSmgCbvBJMq5qwgALpR9e4JrrKGgSBwt5ZZZjGsT4wNp3bT32ZUNjeFztEt6A",
  "key27": "5dv1Qj5V8GB5iRWAGxLWFt1S3dWuV2TNjAX3x1agUVe9pPe36Tuok1aBKeMKu1oD1C8bn4u79noq6XNH5uT2ZKrv",
  "key28": "4qC4jkS7An5dmTkcoyTuhbmFr4iF6JGcQEcn56EW9Y7Vqn4n2aeyBj1HohtykNcTinV5EaryfWRPzh2XWsjBKe6P",
  "key29": "3ZuJHbvxmixQTRF7MATzmhtfTWs39pD1k4xDsSE8h2jwgEQUm1Eukj63fx2EeJRdQtRTZmL2hwTJf5kG7HCmZvaU",
  "key30": "5U2K74URRmRiuy1WZhxrH45wEHTCKZrpwT5YTYjRMMviFLAqi6VZHPn8UwWFW1B7D2zVSZw2yxnv3NVmJoSUEwex",
  "key31": "2oaEhrjoN37VT92zyKD8dPFc34DQRQjh5M4FyQxVxMg8ZG18gPJvzsXguEZx7C2p3xEERrW9LxzY5rQ9ECBSDEs2",
  "key32": "2t8Rp9xG3AhQJBaLSZ1xaAGhrkFtgEYnc7ueFzvmctTsAoKSVaz7MSs17VeLXneSPFxAuFNasdr5qLiac5iv3jTA",
  "key33": "512uXHpbPPuJCU35REpzuxP2MV6jEgkgt5KYV42P2ck7StJ3eWHu1AB5nBXc8Y1EF2ZN1yLWrvDAStBxtS2q3zz9",
  "key34": "4WwQSpSju4YXsimPqW89ACyBWnf2MdYrQk1jtYQZWcs6ZRsKtTXarccHknsUdhtcAVDXxdLs4GTVnLtBnpRZH3RB",
  "key35": "MbM1NMXCzDvWAfLbrq7kMtgojfVMksQJVWsoc3Wv42tUdKDdjGGR8vAKE11NBrazuoBXpkwiBaknUnKFebVrLX5",
  "key36": "H1KZfkXBZgYGbHcf3VfxtyzhhsHbTMkWRgW8vj72gB5sE6ZYLTCDREbd6j8ERUcv1PQ1ucmASBxDAyz1E2buaYj",
  "key37": "5EL3xdjJZesEQUwh5Z2CZ7VyZP8Yhm9oC1RNoTi9fRLsctriPn6NhmBrUNwFhiXt8VQQzrB8SrwzeMT23HY4wkbY",
  "key38": "3YabJxBQsM8H6WcC2FUcUjEi8X1xucjw1tMUDSzHT1J9HAyUMEKfYGVnL7iB9cJxehiEowxJ54pjfbrQ6sDzyFPU",
  "key39": "4VpgHHe1ewo316XPitEGoBoY61RAW1KoeiNpSsE1Y1pSiKdyBvWeQWBWtSvHizrboq6sofDWxTbNvsvHtZHgHQcb",
  "key40": "3oGczejnaKyKqDDygBxZZG3YXbRhYNiD85FnVLkwDSjDwL8qNFyz7pRiLDMyv8L7Px3AbzS2JkxBTSxMhh6z94Zb"
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
