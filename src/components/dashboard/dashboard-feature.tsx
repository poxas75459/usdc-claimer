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
    "V56VEQV4229JUVyTKseFhgXB1xEV9QKFvUFKWzSf6yKp3C2UxDAQ2q3QDxbpXKgc4uPEfk2SHdCZSFCkPx6F6W7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5J9cepyYk6UEih8847YEur7NTHpTsPYFgDBVN3i93Zrs9puMwDKV9S38Lh65zevx6efPpd2ZmmDK9cLGbaEFYAVx",
  "key1": "3zLMYyhnd4e7YfetEeXFVCUabLPMamHFVkqtsQnssDSd3onHRCAWbLtKxTPYQnjudJfwN8kqHzAmN6SPWQr1zQGm",
  "key2": "4NY3voS1DNYJaeHSsEDuDHVMWB6yUroJeFGatVuwTXdRqBVa53ohA2mfgYUNCXywJP2gDr9an94J7hgFW5SQJDCT",
  "key3": "54yU3KmJNUGw6sttg9scAH3woUcs4Po4wKbBXg6qvKwXKJvaLMRyCrtVbNtARGPnGKA8dXLtB2Hqmmcu2FcS4c18",
  "key4": "38VhhEHQFULiN2zxf9iScSzTSdEB1heA1pTKvBabHGDHPtH1rDJqkLCVg1GgsLKYZ1n8Di7unCXhRggCJV7yPstp",
  "key5": "4G6uDdWUTrmkTHXthK2zFGurW5QjnMy9invyZcHQCpxkCvqxsSchTnDcdC75eypAZgFeP5kG2Kyq4mYATu2JUeYQ",
  "key6": "2iLLiRBS8124neBM38eCXHoNiadx2iTCB6j525JgonuR3WfoEKd4qTKyhnbkMvNpPQjHcW5aCgMjBJWroG1o3APW",
  "key7": "5E96NH98ZQr3aPYJdXidfjqeNbmBtekbmPW7HdkN8ASWJrfjTjm28oM6eKStYDJf6jrFWZaaDwWqJukrVzZ66KJ5",
  "key8": "2xCHumam5oyaRHawTcQqrsobsr2pbJEkmsuabdKXK9Up4YZ4JkUWzfU5LQCLuVT6VGfomF3uwgQ19hFbm8Qk3eZ5",
  "key9": "4tE5CrXqkAM8tgV9F1MK7U1CzfQBP1LWAy5jjkHcLXRuZdTGbQnYXSSn1entTtAu4EajaKJ7GX7V59UUF9v9tkUL",
  "key10": "31iztiGmQoFiorMaqFFMbtZJX3XYyQFX7HmbF57X14pVRmunSKVnkmaJZH3vk7mrn4Y5ubX9rW9xRErzSu3VrozW",
  "key11": "mUfEwZ46gDeP8DUB5dv2ocVrhm6bD5dMwboMZAkd2ae1wBfkEy8zc7paKLc3SPpPYpP8jmwTg2gPULhCdL3HzrE",
  "key12": "5cdLxL8LymT4715DgPdLkfUJ8yZ9oCcUdckLyPLfSRCwTnbquabJj3Mguvy4N58L5C25WahHE3GWQ5zyHXuoQQWi",
  "key13": "4JxCJyGssTt9QfY7p2ZqTxdEEMSqXmB9VsvuaYjtMQd6vri83JBkjMoYymyL94wNyyUjec6gEfD1gJPcrNpKftDZ",
  "key14": "23KQKdHHbZFiY6DeMNFRLvbcGkrGPQX5qh5kZpNSkmse7b5boVyvdPHUZZeC1jQTWu5tZrwejtP9J8kmx1w35cKj",
  "key15": "56fciGogpvYA2dg34qesPrcit9gVNZAdrZqwgqjp58MMVZP22ySZbDvv6MkL6yo7bbenFYBhp8AyjZ4Vek2Xvv5m",
  "key16": "2LZtmmyGoJPaCQiSk5WqWvf8BhvSd14vx4F1jUoS9wBHZnY65sZV8Eqh91jiQLAocEnaeR4p31KDQ4BG2v8Qpqdk",
  "key17": "5Qu6cmrkJ99L7Hnp7YmEwJZF8ksRnDox4tUQygFHweABCF7iQTaEiDPUARMvigEztwBqEecupFYSfEH8G8RDEPa",
  "key18": "4982kre1ZZtRXCeeAocHhkBN385TpXGBpbcvczq1SCN3C2uPaycccmvLt4XmKM5Fz8vTdBE3Q6kGGz7RKTj1yZ6Z",
  "key19": "3vCFtRmRKxMwF9GQc3bACfp9ChqzVAisByk1WfoxntousdEGaLfa8V7s9tiRCsv3DqCCPGpPkrVpQLppCNfE7Eq",
  "key20": "itssUezmok8WQtuG7RD1pf2ZhqZocrsiZK5xsBp1wGnz3wMwSReW2qGRV1cTnc7dBDWxivq7TY8v7CEsQ6ibjTf",
  "key21": "2UGZDQfDScXVkVb7WvjpEcBS99UCr3cHgvoaayg5JaE5W337YFFCwdMSRh7Fpxpnh9fC8mo8LCXorfhGiByh7Yfj",
  "key22": "DznYManyoNKwDeEmLQMotfztL4jNoxZMw9yTfj45jMJGJkDQ3tuqk7WgnjXbHnTM6MZ2pQ7CnmGJS7YKFYfuLnj",
  "key23": "4CKtdmtaRTabndanvG2FRx8ZH14GMaCCCSbERy8q44DMfmNkFkbEPSjJNZkEmaTkPG3LhGpfBa6B1UsX2EPV4iey",
  "key24": "2ncSUDcmggESYikbgaX5MxyYZdS1EiLAsq1uH9UMWapLSkZiCZZAQbg9WhwzGPGHAmgQ2LJn4LKdSuypmXdT3zjC",
  "key25": "2Degskzv9q3q2M4gWuEdUMrXv4eYdmVNYVW7PSb6R9fnGegBsbpEesPAfmXkqWEr3Ln9S3pzd1jzXucdUh4AWqaA",
  "key26": "4Zp47BiX9CdRecjbj23wWKy2gWiZHSkdGBn2jd1nHZzBXZB9bGoDri9ZmJQdQjTifomaGPgfEVA4jzYyYfoXKknx",
  "key27": "3ZdJojTvBEi44e7hcTxwgtPhP9CCsi37ToXmKVTVSjjeAgovJcMfrUoiovNG6cwUeTfBpWw9LPQvpn5qmcphCQTh",
  "key28": "5o4wewjJr5iQC68ioWPXR29mRMBLnNBEPF8Yq44v8rtvFobLkny5Qy9jCqLiks6ZZ9E87mQ9gg6A6JgaNFdMyZZo",
  "key29": "3TX4igkKLPhwSr8CRvJ7fBNavFDfz4dxw6qNbPoBpreLhXemTEUgo3R6MXS1gs3B1DXonzif4w33ZAgdcoMNoj3H",
  "key30": "2cj9roaMe1KBCsEFPsYhXkPMdGZ5x6nbhLXnjSHSWb2Qitg3LT7CtAmKgWLr1qTVK8VReQ78BT1zyuoC7SWWzi7i",
  "key31": "2PnoEgphMwyD2q9ieSPhCafcwsMAW9RH7vVZckyTyWNFDMoyiUyEc53SbWjQyZuTfVxUDFA9rUSkWmyqxxfHybUd",
  "key32": "JYyPJ5v4BGD1JW6H3LasHrFtk7Nu9yTohKDP6u9hmYoHKoawUuD6Yt6xP7Co5D8aKXcguq8beDYM7L8SQYXpffN",
  "key33": "5PN45nWwZiNhA5Es8maHTHQ7JjurMYoZujVmrGAgLbW5sNdj9XVc2rdZkpNBZGN98EpBiCdkFf3wHCBErCeJr1k7",
  "key34": "2CbP8LQ1DfmoX59BUkxk3bPbFCoFjHj2jb3gLbuvjZGtmpFgRNvgAndRQr363h8ndRaXfWGYcXtBtbnmKm5EUNEM",
  "key35": "42KyZk33cQYDnhzuLeRazhkjyYndkvH4e7tbCfd2Ng7yjNTdun2AE6oDu7s9uCCqviH6gRTGJyCjHYzpVih9xhpV",
  "key36": "4yj5NmBNQ8WEF7X8rDePd1mS1z6nRrp7UpWfWuGbdPJ8vjiwr9Ng6SS1XvYXfaJjhCrtTgNiuPGKkJRcxy8kULpZ",
  "key37": "1PqZk1oAJgxPvK1EztH3rCBjygkh3Eiq19MxPdei2N4NWt1NxMG589f7R485FfjWtyndiSQyjJouJ91oV5U5kQA",
  "key38": "2qNG5CDCwpDQcaYgwGLMJG4VZw9FqXqmrGgJBe5r1G4H2oQ4r5wSL4SLZhCUiQvpmuUG1gm7c21hS1a4jpXdH4Q4",
  "key39": "54sdmxN1fEggBrQu3Qty3r3rjQN6gp8BitySg8TT8Ny3qj6DFUgFrtkREyec1RV2eZJvkpqQacNsrqiMZMM275zj",
  "key40": "2Mfmdp83cqicJdAzaeV5CDtdGW9HDzVVFvf1Ymw9y64iuuwvyyWBSFY7bATj8m2A5k3i95mi3dN8RdhBqMQWNHDr",
  "key41": "5VN93vdMgkZ7SdAz9jErAuBLoKrpyxAXgVw9UChYrMp35naJQmRxFzEe8uLNrju5Tn2TSbYfzJbFaGK8PTQyegdC",
  "key42": "2Eha8KqFD9isjJjubQs6RQy3UYpapcNYK75hhyLMuRppKZuxGkqTujScxdpQuW3drtZ8CCMdx1Dusec3KoKYBdeX",
  "key43": "cJwGBSSrq4Fajy2vVEBEnoSbeDXRwt1QrdEgVeGUNCDVHt7m8ifozKkG7shf6fjYVobtJJEzCLoxadisFpotLCr"
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
