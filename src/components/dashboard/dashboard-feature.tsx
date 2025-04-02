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
    "2KUPGTigmy6zxH8YuDx2SU7fzdevx11qBJkXa7jBWUYR29o6UDTiTYWm6yXzSJY6gQnXD8ZqXny8zn8UAssWqRry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V739yEKMUTQCNTBogh41ufpeEirj7uxBaPDdNUjVp3P1KmqvHPj5ovejtZhJe55duBPHMkxe66xsuyoEDZSh8Y",
  "key1": "5M94VAf7wqQLH4UanHW6XNfzyFFm8QTmCtw7dFssMUFNMAQXmaPgmuHKNCPCUe1o4PLJGGFTgTB3FLQLEUGh6PQg",
  "key2": "22KueGVJeniQevSY9SteoUJqvCvVX3SUMtGLdZyCiBcPfu7eSVd95nTyZ6uBU2XXao16aE3oeLFUztKpv2N2x8BA",
  "key3": "2aTE6cAne9P2uwauHEJsFwQC9F1yaq5HD38Msh4AA8yJxYFZoLeT7RHJRn3X5gHGXA6KREHPTKxcQt4qgeBVrVcR",
  "key4": "18Y1SvuFw3kfKZRzkBeMdCBJECGgiBeQktezx17fVxx3n1Wro8iR5GmuNuJCTV15H9KoZKCXP3SEnZPFKHh65jf",
  "key5": "3G78syLjQSH5q2DZZvtjJAPhQTdixDHoaa7Y1vKunwoe9YQ8KunSJ4PLFXY9hQkQPsZWXeWQs75kc5rk2sLMUXCV",
  "key6": "TZ457GSApvza3CHiwhTJMTDW48y2AiykJXwknNRbje6GSiASPnfUCfLuArLg6BuKdjhncVgRT3EQGmcswwXrTJt",
  "key7": "4VKM2CmD94kHMWmDxivTxNmCcxXQDccNPZdbkCfSKGtGTeP9soPKLkg7SfBzBe6pYHEN6uQoyLBafuEH21fLYP3w",
  "key8": "2qCaTaCcDEpezMfcCfuqEo6wfVM8j9TT5vg7fgxvBdXuHMsDvHtBxuwtUJvACp8pKy1VBU1f8pFzkfa3fTBfwg4u",
  "key9": "2UZv7c1wziMAgD9TeMsmubdfKa8MFuzQps35ks9NvbN4W8Kto7nMtUVacT1g1maUEigRRvUzNGLR6Mz3a3fHW6C5",
  "key10": "2NLb4a3HnqqdtPnGFi4jJ3LEX2gv6GrCtqczcA94J7q4rx1Rj2Z4deGGtf32et6RGyY4Qhg2jV6Ad5JLyY58ZGUE",
  "key11": "63Y919JUdfcQ34djNj2BMJWzCGBsPLHLu6aa9DcbiRBYnT3jXjfYgqYWRLdqb1DAebFaEt7ZyXYFyUVuRjTRBnqf",
  "key12": "29bsENSPTihcvQqXffLyXVLcffQxGyqdmaGS6SSU4jC3DW7mLEcVhr8xmsYNoLZWyj8v8JvEnTRm6rnYgK5VFDXD",
  "key13": "4vYqPf9v2JCfzLVKHn2SHzRtBykZmu7KZikaHV4rgQ5RSLoMAkKdRUnNGbhb9cK2uQo4emvfY3QADCsEz3t4b2Tt",
  "key14": "5qqFtoJ8mE8AowCsY5rNBpSJnbsxFhxux3j74PkArDy6AKosok47kZjic5RsLKpXgurCepRZ4cYUdLBZC8vbVbAK",
  "key15": "5B3QfTuFfE8NAQskLYbQsymwyDDm7PdzoKqRK7JieiDCnzHuFKJcwYzjbtB9ENm6di7gZDCyCDCGWfdCMf7vhWCY",
  "key16": "4uL2ZYeUdFxatJ9LiKWrCGdctTxdK2gFUdptGUnyM5gXBtrwC5hA2g7Q3YYcgaA8Ycg7SXVZLCq9yU2pE6KVoCHU",
  "key17": "5b6tdTUZYjRAQn7kiFaZ9TqwARnMdL6JcbjHGCo5HjVm3RZEwhaJyxEDqQAfhmPG1je76P2cSc2FijSdGEtKNGMF",
  "key18": "46aSxttGHDGpBi4yvMXgw1HL1w36NmJBetFurXZgWgKSo97qU9G8E6S1Deicq5u8MxuvkCcCUxrSYBxFmBXW5mTv",
  "key19": "YdDa2NGNiEy4DDtoNcvXfFAKADaGZdw3H9XH6mr98g1SQW6998s3jHyWpemkce8cPCxv4uyZaWreYaAFKX4BMjM",
  "key20": "2y72q1gLAqzBMfVLBV73ugrtTHZh1QtxbWwJuY4aZqJzucGNvbVJtAZgZSTHgvbwZWf9APW3txV2B8d6aL7y8VZD",
  "key21": "3PyJW7HAxX6xRaJGUpUtbTrso228moD3oVx8DGVX2V3EQr3t56DvxQRu3oPDbFNM2VJD3DagpX3cqT7g2bNUYwzw",
  "key22": "kkNhT9dpEx5CZZgH33jQoHiGAQxmyjMn1LmtyoNycshAAXgUj3y2PCPPkiC3vMphzv47gKMwHMb1fGS2aT8gxSc",
  "key23": "5cPE3ngW2u4iy6a8fc2fQUMTncwRgw4ffacf7aodnmMKYdnkRKWBW8zWrHWQQGopeEizR3yWNkr6ZJPyt8yN2CVo",
  "key24": "3oEwZaUR5tyVxcMahc26mjto1kvYTyV6SUYd3WY9gs6p3UjoyMkeCXjGudW38Bme2jaYQYNs6N9nhrWzDc9V7f5e",
  "key25": "54r3fs6JoziK12p2pPjUyhPnRsZo5rh7gKA89D3jcsjN94zXx3bF5gd1kknk3rJZAaEuCW2z1Ua8tNTkp38gkU7G",
  "key26": "4fD5P95QtmvBHHLj4yYNFQLHFUR1AZpykuN99TRX3XAz6u6Z7inrkjYKsv2J9RWApAjSVQgqqeLJg7ELTF5tvxjK",
  "key27": "4x3kD5MEviSvGwjFPRxx5Gfe7oeKrdjpvWf2VkYwUXz6wii6vPRSSAtu1ox3yVM8AwosU3LRxbxGzq8HyTjCjSQX",
  "key28": "4h5DNdrMekZmbQYfiWfPo4qBtQmGzFxr4L9UqPA2afb6LRkTPo1XH5oMgQBsgXAkTfKijGmhUwq4Gf1MYZgXA355",
  "key29": "4eRAXFS7N45rAGeLdRu1zjhEuLn6BbfaZFCJwsLuBv7JtTVn2DT3eYvqbcnTL9i9DPVRTh9iUFSMBaPDK6SRSXLe",
  "key30": "3MwjNH5FqRAp3PcCADizJFRod4K4N3P9sHPt4wKPpMYYXVmexyY9nsHb8UEh2Gd4PWDEmoj9R8FgCzDg134KYuBM",
  "key31": "4V8tR2SMYmppmMd6u4uPwBt7sL2kMWubHW2EGMukftp7C2oLvEeANY7hcwMzxAAVRFpQ3QCTCi4TyJjtYxbCBF4Z",
  "key32": "KwqaBfcpagKVaV3Tjh6uxB8hxa9nyFo5A35uCQRFwUp5d6SupXGWcAUoA134umbHAZG1tqd5cSvzortAbwp7BQP",
  "key33": "3XHBMCiJ8erzMvyVEtgEHvW3gUZYnhPR8N5iwTeSQvBNLEzPCaiGcjM6JLZjNs6Y43RYiRUzy9FFSABc1rW5wu1",
  "key34": "3wYL2YqdrLkaxmsYAGEUyV8wfFobbTUDVT4akpmkADCAcKvYruAjnDbHvUFUpCgxZKNyqXtPCfhg5dbw3b476kKZ",
  "key35": "3kauV4KyqBH7CgorBYFWugjZJVDSJxM6ouQki2A7QxoTwUMG4qCUBV5WKyiGGJhMGjxJ9Pn8tj5nRW63DAiRGTa6",
  "key36": "5Bkrd5b8FrMJekmRQSXbVmFUixHMZExvb5852fdAn5cJ4XmZmN7Axs5fcZL2McnqKJmEgF2o7PzoZSs6X4QdjDcc"
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
