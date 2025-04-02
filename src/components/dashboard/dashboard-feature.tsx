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
    "nEqaSaHfTHpd6booH1fvWVEBhcVSuvNWGiWeaS9CfPpPKU34bkjvYMF2Yz2gCXnJevKQckjcEKb8Ytb3zYaKHEe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "doPCE82vA1JAbqgwvEUH2RJUagP67HjHkbL2dVcER4rP33548TM6L4bntu11KjMUuZPcgok4NtJakuP9YJb159i",
  "key1": "54ZjsRBkQAdconyTcSLGNP2iicwBa9b4rbFcozBtojPmQDamNFV6MyJxJp7ArQhANaEVoZW6Eryhn3aAKo463B6g",
  "key2": "42MFdpjAkzafTbhmPYtbyeiv2puDgAnYFbtKkWYzFrZbTD6r3k9kq5Yf4NH5muKik9nscvJLqyZQPB5YY3tzKmky",
  "key3": "3rLmaGRFSh4kgX6GYtsqTqGwxEn8ALhStwoaDwsCK37rufFHc6gn6imtRuQTjy3thbXTxyMxgT56oVZGiwz27kN7",
  "key4": "4FyHpNUoYVxrLfUdH7rZqYY4o1aHPhfBRJ1cPxhSj92wkGtZ4gGtCgqnteasjs66RGsxBaUZQMWbMmnF67abqxB7",
  "key5": "5esXwjVKbqUNyZffUtRD693cvw19umepxBMSZKMSXZDj2TzFPaM443u85qVwEU9WVhYWBBBqaZ91qcVqjyTo53WZ",
  "key6": "5g7svC93GLZG3fWQU1tY5dB7BjoAz93uYiv9MS4YbZvYTaq9ZJKhYB86Rty7DsyTAoQQdr1nBnPEqhYfpcjqEsKU",
  "key7": "cDG5tMU6SjUcraiTqjFH8jfKhNu2w1GQobzzi1pNSodwRMsvxNxBXjuVkk8Tw39qnX7LP4kXdWwGM15QnUCGPR4",
  "key8": "ps3Ug3VjSm64xfyBzwK7tdYR2TgfXc9sUL5ojiFJwQeWQwKRKhHQN2tCkPf6ugBLJtg2JAa2VvLSFvLvh6Xto3M",
  "key9": "3oeNE259BgvoDPXGW9jr4RCM8qri5KFKdGoUMYWuEkvcF6bbanZqnkUvDjmB2bau3gZYQdD6d8YecYnxfKuY8uno",
  "key10": "wDZ6L4q3diGPcMnn53Z4XbkjU6C2xbbTsBtsaQ4uf8BXRm9EVCM5ahWWHfua66bLMaVZP3vTP3PkQAK9ZXFZAf9",
  "key11": "2xTX89pB6i289GKzMFM2RrrgLWmTNJdqa9VzYVFZAFqcVzE5fvojTFpVuX3H2KgyrGTJnJW9u6R59rgMMpBbF92R",
  "key12": "5AfgRALuNLV9b2D5SVNhLSTdB3AQuZcfdmak2J5qhdY8S7PBkTbDXsMgMepab1vWS7itPYScUHqDXiKc1AgGZBuT",
  "key13": "4TrZJKFheFWKUn1a14s7goNGFoBMJeVjpjeVYAWivGfAe4kXvJB8MrRbmDxDo8aU6mpEucqc11JjaahrfdLGgqgc",
  "key14": "DQBrugt2iBi9iwgN11awphFU36j4fNpDoMCd9BjaLotat6r7gd2YAcNiXdEUCivzrVWk2MPjdpgqy2rtDicdFtA",
  "key15": "5pcVxqHkKYD8D67pEMxAhNq8wu3sgmpp4Tq1qi4fyeTExrU3qfV5QyB3AuRr93oGcjf1MRCGcDr4noiTE7sU5Mfq",
  "key16": "2XHZwKrNdveLVpdnETMfs152GPvkKtMXZQdSFX9H3Y8i1YMEwXRU4zig74fQzmoEfktRhPUqEAiAzuNpitYsyfHH",
  "key17": "5JPyT2xDn4F9YUmHYMSMwBf9pP8R6FbFf3H2nkmcGDDh75DcCbEJQsnFabGfi5GGV9V5cspyu7M3Vio75y9kuT8q",
  "key18": "3uWT5L6Eju2abgT6EADADw8P1s8JuswNvkGE4d5nbsfT4G5sJYjTYc2WZ74K6GBfBcQfciT6r9EZCAqaRXovWrKA",
  "key19": "ZDeMPin7HGyuFEyuWWhr7L4FutDMJxQDfoQ5mS9YEnhGiH8uAy2gYPv11DegqU12QX9WDMZJBJ5FSCxkTQmVf7b",
  "key20": "wPEJ5wN15byk2Y3MyGZHWAJ1VFrE5xuXEH6R6WT3p2M6jT4HrEna8gTmw8Cq1vfo3sa1u8gKSVmNpXzHvA5mpUs",
  "key21": "2VeVECrDFLuvS7VTjVbYQTpdc2XqQ1pWBkbPf2YVyeBVRnxMs3N2rCkhZoq8SqsuNDXDWp1MxKig1Ra6fuzgDygJ",
  "key22": "642SBeNECVjGeN3Tp3sWNDoqAozKm64DyZmmFw5xK7HfAbKPv9KNuQnuTS5YzMq1qeFapqXTh84pXRaDDwBt6hAc",
  "key23": "65rEdPDdZFzXtFeJmm9ixnBZmFAnULr2ptmnob4qZxidUnaFv2iiCTZoFiRCrTsnbq8ycKMnzPo7cXogEWAesVMH",
  "key24": "236rBL5hYaPMTWTmX3SrgfZDzdTRtzSDtZs85ULxBB2FqdxEu8MpTZHGeaAaoAeCqPsFkBHAxRJwidji2WBPAYpT",
  "key25": "5qMyZ7WJb6fJnZpf4XK5JRGrSMdqa33jZf5o8bKuV2gnZBuHJ48wmYAEhQudSbGkdQmZXQMGNu4qUAdFT9aNzd48",
  "key26": "4DUzfoYr97uEu5KGHtvczH1MqznMNtqhqmywB6i7CCEbxF9MAa2cHYDyLoX9rpunTeM3PtLzQ7cnRSA9Q7vTBEL4",
  "key27": "3oE9YP7WuTyT7TH3Go85GnEA9haQQXGEb3P6KdAWUcwcz6briqFRgcDH7NBbGpFngW2fYnqExvBDr5cC8tRjQNZb",
  "key28": "3Z2mqySwwf3UszFE1qrFgk38oud8VzaVW51sBjCf88yvUYhyKCaAE3ZCvesmaKsh7YHGdbc9F9f454e19oZFLz3P"
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
