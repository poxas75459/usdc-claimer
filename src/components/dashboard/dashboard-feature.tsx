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
    "2dhSXt1imRvV3SXJNZFLSUdi68LJoVtYonFNTnJUHdzHWwe5u2dBjrUcUPx7sfgGcGi6bAVF9Nz7s7AfWoqoM8Xe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zJuPteHFvcq7UhdS7xachrMcr9UoamGraTeQEkFDYo6vAmmgTLWx1rSS7vg4BYVwrtZCvV7VHoKZN2xFoeR21Rm",
  "key1": "2pLZMKBt4hNSwbWU8V47qjn4m2EsFLr2N8VXn4mhP3KaaLBw9dgo1JH4sMzD1uQNEPjp4cD8CajDyKEzXQXzPFtx",
  "key2": "mB4q2wqDehWE5vXh7uu3rYWCG4dtyKAC2Ui88AKAzwqGyYL2ne96xnxh8RtjJrJJGnhHBgucpe7znrRG7mWGGnX",
  "key3": "ZGdaEbAV4gKDfhjtkZpsdQrY4Q65gFr7FiMiGqAYjDgEBgRapEUFSZQaET9sgAu5EKiB1Xf15PSQ7Fzvidchm3P",
  "key4": "219HBP32Rj7KUKND7dzpUcLLFWUtod29wYHhcsuZz1JVJB5SiQLWzJ4WV2RfxbobXTsfXPqTgueUPKzvDr7tKmAv",
  "key5": "63iw7MYC3CYD86gAUUELb1vxLMZnLHsRuZTfqFESAECAso6KiJQC9KbBcmM23budEPMuegMBNdt1VrWdWKtdhwvZ",
  "key6": "2kU6WynT7rRjYnnkKrjB9fB3ApuNz43meHDtzWXUtWvvzyNMWnNhQzMtb5ivycsuYqCa5JAootmtJktviHfyNRSf",
  "key7": "52SRxzERrcL8qcawPXAXj7VdCREPmnB4Sxq5hZj5xT59DqDtRr5XkK1NLhQ82Dr8AuQABFDGD4sYnYc2qGDxNVpW",
  "key8": "2RzzYjMBcAPhAgULgBLsQZCAJy3TuPgmsQ9WhBAGbi7iSWb5U9Z7qBnbyE37h6URLiKFuJFnGF3EkshmHE59iKyE",
  "key9": "2SdE2VRr9NzxxZ9ZrDnPnTVh9g4QpADbLsrcSNhHRyaCTtBWkneippL2j1oeKXprbx9pupBbPqrmUtCEKRG76H7g",
  "key10": "2aGZHBSPDqwgpSr6byqGt7SpsWdKid7T29kgckxkdGuwbr6bHxPfUvN8tXdS5a3FHpJ8vCr4oe3myZqgRidwmbTf",
  "key11": "4k5eDJtWeYaCq2PZgrr2yhN61yURzgPCwfNnnMr4eMzoqW3HHUs52gWaymvatPj1dpvLK4CuqQgZ1Doizg6CHUWS",
  "key12": "dLcP88UXNJ7kJmqueMrJJJmVNuYcpGDGYotq39BzauhZUnrkLsJNEbTtjzcLLKEkJN6rWG1x5Tz119FLvp19R35",
  "key13": "F4Uj6CQe1aC74ZnxQWG3EcUMjCwz8NKp3pFBAyP5ERsu8HjmEFi6Z7cG99yhtCnChq8tcPiL2bPnAd9kTghcsWi",
  "key14": "4Xi7RuZrZNQB6HLz3B82YWmhVKGxUVzVaKodf3JrEMWAus25gfgs54usw1QVzsHhWgPhguhBAUvdRDtLc1oBrvha",
  "key15": "5YDJpyFHARX7bKoazVAb8oKnrX2bGpQu8yEzJqbUw9e7yoQfTF8KrV7EdVJHfm69MRv6RWwch1xr8DtV9srG7aSw",
  "key16": "5vjQuFh1LGvNbQXRr8E82mjrVrtBegjztp42boFQB8ULdg8jyB1YYHNFyGKxga9Vo6iZeodagp7CZcdmLoPXsNhx",
  "key17": "5ekNa8yMeEfXky3UUkM8HxtKtKUiuyLjs4S5AV2HTrQKxJVPhr1cjy1wHkPUzZe7FFSd2Vk7Frp6nT8VotL3MFdm",
  "key18": "4Nuk8sGKpudpSc6pkZkac3xfqAcb1uCr9A4WWsMwWUSic9KAKnwLv9APSiSEyR3DovpJZ3iV4LrreCf2ZPFYSEmj",
  "key19": "24h3LcFETUHjQkdVvnaRzoknXNFVqh6YZXB8irEf8XeCLeWwGbxKJpSPwPPAZR1v9yEsDVPXQKF7PNZJSW4BsPbL",
  "key20": "hzUyMLmaZGA4rHZ3FsU3zUt5zZ8o8kEiKzGbR4gRn4zaB5T6ddmnxERLp72a6VPREro9coqRDZcPnRLagF6cr8G",
  "key21": "2Yh1b95JkcRLkbTgSHdvTMxsyrrtUaPcPYXPo7hrJK9Z1rGp2tyHk9wykuHFtfyFkfWGGwiz4fSnbV9q3iQcahLr",
  "key22": "59gNRkZkKybkKrchWZrNbGVMHbTUuckdAd9tbtKHdsh8P8DACcPXX6qXQWww8iWfzrjoyvdRXoa6d7YRggJo2ZL",
  "key23": "4YSkxT19g3WETfrAzHURCNcVA8cjJkUVwRvsSMVPb3dYwXsX73Qx9eHnfekGEgzsEYVC2839Mo9Soqe5vSxsv6WA",
  "key24": "3nGYj9XaWGDe2y8W4HXzeaGVg8DRa5nJywHpsSMEBQUWTLbGcSzqMJTUNuWmeNGGDoAoMSLCiUbSGWje2x5tyJoF",
  "key25": "355QMd8P86Uhbx5FUWm676gRDF8Cy2RBTBo6PYEstAJJ3Qd3P8p8Nx9yrMY2UMuTqjrr7BLxDsZAUGkGBLdyg5wb",
  "key26": "3pePcFSP1hApFDaj8Asmp2q5HAd3oiwwaaDYnYpKMheYxrX1sCcFMELgnCtSnQjTWVzpGNpAGBc9zZpAxdZmvX9V",
  "key27": "2f31mvfGmEc3TNzcwykdiBY11tJhDweWwMUNgJEPYsNM3b3pcEBgrg5bAfzW6whYYQgBZu87dtTQxS5JboEQYNjf",
  "key28": "5vCZTNRajE1nKeEWwoYHux8MdcC6DbkMvTn9vXMhYUqJtzAA7aKyioXBoE6kDrRj2gEZVLZiCi6i4CkwxckD77DL",
  "key29": "2AwnhPTqPGZ61Yo9LaTNEJfPCwaRoWKC4jJ1s7tzGnwRgLE4teaVCJv1HZfxYPMM9mAr4goyEm4N2pYUk9hv3Xsv",
  "key30": "5Lz9S6PRShdJkDHubujziRdhtjUzCppW6XAiZzH9fzXcEHQdTxbtkskKdSF3fzo69SvuLK7xUfipAJ6nQECTU5f8",
  "key31": "RzXid28bGKwjzBzXX8ivt1ZtXVoFbFrn5WwvAztArYM24a9m3gnZ5F5Rh5WbPajhHAH44KSoCT5QAqwSgc58Cbs",
  "key32": "vPNkFr73u3tVY9wPJ2izbzVVjsTNoPE14p32ksk2pk2TvNdAiY5XyuYFkGqRJyjXUdLniN1GawssVENhh278F7m",
  "key33": "vwEEYpq4eD8CG6L8uQ2xAvzMDT2scoA2bb31Qbngq1RepyWqZg5WnaMXuanCw2tnPcsfC6Sr9N43yCXt3N3rgy3",
  "key34": "5deNkrLmjp5oDjk2hT6fA7vDfgaoAx325BBooFgm1Ksf4Ta7yStvdCzSRQ2dqN4myj8a7z4EoDykcnPPPLxNKx2q",
  "key35": "2gjtRmGr3hp9sCPqSwsAis3asuTb2UyK859Uq8gsw7UhyvVQ6dz3kqrCngBVDxDratofxam3gqfYNmY81C8ookYB",
  "key36": "a313pAXYtYZipaHVLcbd3Yqw1su38D4VPVHCxxA3TVedStRcMBHKW6z3QxbDJLucH68nn3BuVMgRxbwXYcMc8j8",
  "key37": "3kAmZ2ZwkNwMKts8CQ24Z2tvyCqjfkAcDrvH6Q5WxjNT82oJEGzkMHRUz1eKfthW3Bp8o86QHijFc8YG19Y7bzMH",
  "key38": "5Bwqgj49yg7w8rY5QaLy5BTySzu2bPbHNQDhfNEFFWScro3Y5uY7bcH7yMS8hVeCx7F6NMvc2YEYxTmuatWMAHB2",
  "key39": "2dZ8FuEi3YKYgGA93xsJSyuWmW8kZXz69RJqRUusP36wwkTRafYfPnysWVkWjgJtT9VdcH1H4T6it3K4UxasKVR9",
  "key40": "61oqrA5A8YS9zBfbgycKDutoYUzvUTc7JvVaJEbKjoguxX9SF772sZD8CEEWBfWjUAHDmBdAj7KPzZpe7kDcyad3",
  "key41": "5WBRyfBUwg745MxcBXHqCAEbAinCRQtbN9HtpPCUfsjguAcW5L8mJDWPd9T8sbZeMEN2vdUhzr9hzfq1Rpdbn39G"
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
