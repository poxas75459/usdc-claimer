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
    "62GAsCY4i5mq21azUAv8T66duwF2VJ6evAb1RCHnjuzbgxQW4h9FoxHHCkmmxNjCxNPXhg4BACK9utjSxhUBpo1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Spp3mp1PMbM9nr99HPBjbgbFLd9ZArxgAC5ifT3Nr2DBtDAtobv6uug9nqXVVVFXap5uRTKmYWGbFZwKRGapj3B",
  "key1": "5Qk9UbdouGboWLs8HT17k8TWAGt8uywCwuoEW5o1FNsSsGgZiCa8sMg1XrF5iYYp6x2JvSqeUz24eQT5YNiiNXbb",
  "key2": "4wJjEeV9qLU5im4scp2Av1gGHxtaEcxubTDhvkqVLWdBhuDetLsyrj5jKjk2q8SRfaDouAZGTUBj3DR74nJZD1Rf",
  "key3": "2e88wXNXteGczYmiWt7WqkGrUWFmAywbEzukWf8wNGAYBfskAVqng12a12WtAU7NiTBBqc83Nx37WYpF7eoLZGNc",
  "key4": "3bn1kM8tU3zoRubJm6Kksk9qcCHzW8JGw7gbEhFmxzSYLm6naBaELbVdjFG5ry41gsdhHzwkxGzr8cbv2ENz5Cev",
  "key5": "25Y9uuqvyBdZYUHtSBwivCLPnycFk35JwxNpJrJMPyCYszMUGFh5cXvZ4NGGi6p7sYz8YajbU7mzb3dwZH77jTPW",
  "key6": "4kGexJyA788duAeo4qTCdcM2qvPP6hZFgWdFbnhpQWeCxmuZQQw7scWUGZhvkt1NS71stCLsi65MVmFHup5vNVJX",
  "key7": "2Z64PpXwvoLXDUMxpPe25MYWZ7anU1NUP7SJcvFBNhHH9vJuaPPiGSjDLYhRKguUQv7vRwEvGrfLdNvkTkpZAwgK",
  "key8": "24B3CRZpe6XdbSgzhD5XR14Vm54mbjkvjwjsszBQCHmVtcTrcidLN7qRX6EXbt1jnYHZX2cqGaSv1eL2PjD5AgLV",
  "key9": "3CfrKsgBbThtFn3D1r8q77xSCXshADos2ZSNDMme5FmN8chT5HcDYpyBMhm14kvN7YVkGEDE2yqsbtrWvBuozARw",
  "key10": "4nYxoDUf6YkdTR8rb4D5aDa1VJuA4k6WvqomSr5igf9UVKCNXUAUnXLZ2JeZtQEp7iYurpi85fVd48WnmgS7ezAt",
  "key11": "XPMSMfnLCMypTiDpY8PCLvzd6fK4scDpkq4fNDUevEwZScRYtcn2wGw5TUbPtEyGFDESYoT6hnnWztpZMeacQLK",
  "key12": "56ykVz5Tidh3hRFsgynZiPouwNnknHozhcYUvHXgGgJb3BSsNohV6md4fvaS9sp3iZpBAKD54MT8YaKZ5vkVoubS",
  "key13": "84rZwrwsGMVCMnrJSUEUx2WjwLhHCegX16gxiQ5kP27p3QoxSQ9gqe73BFG4m46MTE6ZU7VVUzo1tia4g7CowxT",
  "key14": "28QiYVghNZm4kFaHtSuWrLYotKZz5GVGumpLoxRfsBuhP4KYkRN2n4LbRFP6wYC21F9oL25DpDffgGDptgitxBEi",
  "key15": "3vhwsovDMoVjZKNSaQwW7NtCeZwXjM88pjPqJcHNhtHEd6zSotJooxqB486Wgqj4wdABVvKrt43ufYap8JESJuHY",
  "key16": "nZWW1YZvEkhGA1SLWmAtNNWUXYBSV8JqfCuMmHa3SUELu9kQN3UHH37q2AXqRFgPkzMAfv2c8ciijp5SrrkYUrj",
  "key17": "9C5E2Ua2dvTs6u47q3KCH6L2zWtCd3NoJdLNR4f3EhgmPy1Kbxq9viGCQLMkx77r8RwuUHktBdTsXoooK8ScPyg",
  "key18": "5hjhqFuhTL4PLe9dcv4tfBA6zd69LcZfvbeXb5bpNJSgFiVGmvg5gDS6pNBKaqAJF15kGg8dfoZfLpBf3nRCee19",
  "key19": "2rUMfTo7AiPbMQKfJddqpLtkBu5KxbrqVteVxbv9LKeYZrSUKqKufYUWoKEC32gKtjnxYUTKyToYrMBx6JMXpeaT",
  "key20": "4VFxHsRaNZpBqW9Y8tkBvSp1ZkxbF2SwUqJ1cH7SZbLcga6FkTTh6xEDYeTMVy55pKj8sEdnnfVBbvgs9TCZzNcy",
  "key21": "2g8h5SbQMVoz3weRMnGWrBNkYLRGjJztq1DHE2KsWt9o6HnrwzArn4EkSUQc2QurfyBr27rhq4uSxYRf1PRUHafE",
  "key22": "4g7ytHskUq7iPyxiUK2TT2wUgMJ9TAtdcVGpGpDefBjVw1bifocSXPwXTARoMjipBc3Nx7u5eChc9dqfEbWCogKH",
  "key23": "5isGyBNFPSwtSkzTMBxU1EUsKitypYqt3xcrwzqUKB72o4gTSuTNXr9ooGrCgeC4RTuwRBRNQ1wVPKTE8V52ivyM",
  "key24": "5XknqwWwcPTM6jfMQDECghTuqqettQgG3jwLFKBozRMccsgQanBKAigiHiNVoy4XGQ4RaQ9GDKpoDzLGA3xpBQ2z",
  "key25": "5qNPdcm1yYk78p8BKiwQfGXm4hd1N9E7BPBJE9xvmg3Yn8fFeFqcHGuDNsAcB9iiiZKEQ2NSjfPoAMDA82nYfqzF",
  "key26": "3va4habWJ8X46s4DZeV4RejHdRns7Xzr7h9auxtJi3784xq7WaFqmjhUAKZEmuJmY9koHYguaE31uFt2HfQtbfLe",
  "key27": "42wSKA8ws8bQu4upcK7uYmPF733bxL8Vu5kdtwwnrhRpYHsoPe5f2K2ZdX8jYHFFDboceBErRMdDbKF7W7g9DSKv",
  "key28": "4NGpzRkqwf5HXCbU6aygQnfujSjgXt8z5aPHnLgqZvx4bR4yFEwG2oNskW3UjYeYcB1mS1krTqGHUUC7VjVwYWgj",
  "key29": "HYwPRVUTjLiSDmnVJjDPq6ANi8kbwRodKTk56kqcSskLyR5ZWztJGgNEMcAYJnBA2NDRBqx32nZXTaQqnGcBP6H",
  "key30": "2SUYqN5WwF6iksYTQ5SjBbWn941hZWpXHNoDw2mSF8EyEn5UDi7DBQUAvsgTArC7Sdk4esTMEr91g2wS1m6KVErj",
  "key31": "49XcqhapNW6KVTjrheJwVDAd3Cfxnxq1CBJtmixZZYujsQMJr37gTh2TvAR2fCXby4chRULEtpgGdHWAW3UZ66Sk",
  "key32": "3JkHqh5CPBdG83e2aMEs8Zks4jn1k2wvTLtnT5vJ2RjGmYjGmmEZ4cz8G2Xe7oK4MEUrKgkepJ7ZDeK8eiuLcVRX",
  "key33": "3mWk963n3RgLgRxAaTxEs66MFJ9SEMXyznkKosMYEkcxBa7vbrcvJkE7LZwd6REESiSBwj3wS2M4wq12u1SXhNGR",
  "key34": "5BiJKRMSDxcJEiDNN1i8wU4P6Feu5KeXxA6Cweezi8uoau79AovjyNm17JuCqWmNMAuxXNo9dDxHXMd6pLzsY2VN",
  "key35": "muFEvRqXyEHtbzNMydDWUgErnizww8Tb4R5h8uXXq3ZwujqwNmo51BBVK5ghDPQhGn2mxGVYPZVuTjcjLB2n4S4",
  "key36": "ZPAnoeFaURZcUdB5AVUb7FRNcgwH4tST7jBgHzCfYWkjN6qz2PgA35js356FMpFLw5F8MNr1UkppoFsA6kEMqWn",
  "key37": "4wn8K4g9AVWWP7E9bWr89XKrySVoTWLSWZbbd2griGLHM6a46pgQ73FymtV4u8h1E9UmGN13Qkmsm1W8KMcGyf4x",
  "key38": "2vHbaWS3r5tgoXtfZYHB6mxSShKmKASWnCTatmDiFmGdYDEoomvE9Xbih7GPKWxLUBWDEu1RRC8wJoQ1C1NvDrGv",
  "key39": "3DLFQzY9JNzUaE9YnD5RysdhCByTx1B1ooPpcrvLc19ZL1XxgVauWBoPeJMhfBHUGPjPmrCv5hRsZ6wrx7EJ9qQC",
  "key40": "5LSqfALVFVbgEUAucBpgZE7MPNW7WvT8dmfMu6vwnxGUzTVVu7t3va4So3JHK71ELTYtXFi1pP5mPjMpT3HAQsSC",
  "key41": "5ojPiJKHhVZKxmdzuUxK66sy6bDNvfN8vAXdWvGKwgFy4WnyTEWwdPkn7aeUyt1CXGAmNMP7fMeBRtLh5swaSMSy",
  "key42": "4b8wvJQGsWUf2uzrUW3Yo1XeSqnwnHvCHM55S1XX2FteFQdFKbDrhdRDFyZSHY73HitFFoSbLinhtqEE2hcaJQMd",
  "key43": "2gxEgP6QBGWTVuuebs1PUcbyiDfHfwsCSiW2q3McKp46X9Z2YRNpTDQw9C96cnSo7KCzJWEEx45Jukuyidx4koGK",
  "key44": "5Rc3P33WnnLaosuTXcWHH78vnGYLhZBwf1758zm6oeSjH4Jw7cpFSvyxZhusQ6kwfEeVVF3q3Sm8E4TRSu89ZNXi"
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
