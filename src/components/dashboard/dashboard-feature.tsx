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
    "2V298SmgbskptappHZdsZK7UsrKeNLzFD1EWqTjSpDjjmqQvpfmQwVYzzX8hKu38BAKcUFVHXA9s7MM3hGCJSHpz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3k4jGqZsGUCsgGBS4FmhLb2t6paa3SsMm9JbVx8jHiE2y8gXJXkMkkMkjix6E5gVVBMC8zt8nUeiR4bddprM1hB3",
  "key1": "5Lvqi4LokrQWm4bfFq5CLfpvtmrXZ6R5fycAcSRBeULTKza5EA6gksQt9hefSWSLyKeoX27NavtVDH6XNQViF7VF",
  "key2": "53o7XZWSeL5yiipifiboA7CiEes6m1jAVMZVGaT5AwGHDSE2nfFmRUKEFBSJYMgX9L627EwZ48nuyw4QcimWYXqS",
  "key3": "jJu8bBHCRkRWfdzc7upcY3BqsdW4bUR2jNiSfuprgipdH4QcZ5bTxxjR8k5qmrggUbJT7TgRcyqEFB8FEPe7Ya9",
  "key4": "2Si5CtXfbQzdeTy5rA3QGLwy6JKZD11kRGYF19mp7MQoG4YCaLRxt8Pie5keJNb68bace4HFEw4yigGowG58wM7m",
  "key5": "2zxxrwDkroD5SKYmRx3fRXsdP6pKcawxRy4gmmBZHKLyo94TTXVxSea28chj8GPnWSeQVzczCnvg5i1YFyBMoumD",
  "key6": "NySp3NG8BXdKLs7Z6W1AwcWeFgXjJwqNQzk5nZroDmBzvfZ4bBEd7hUUXQoXdiCtrjQJWuvMRGoj6BczBdvKmip",
  "key7": "2VSGRLJbWk6tbc85ckV6vDUyHsjsgFQFoQZdqyUjAA9sZ5UWWxithWR9jyUGd5bw9MBXm2SvhfToEhsbEPUhYNCV",
  "key8": "VG67CX4JJjnY3CcfseMXQJ7RJHTvb9Y9f7xbKCbCsaW5G1ZvJGgToi3LTis9YTDf1C2mVvZvqrMkiRUZq8aVMXC",
  "key9": "4ggvHmcwHT8aAaxnGez1iguv7uxpwaL9k3oqebgzcHLQaikwKkXMqavJbBcjFAB9PphYbTwzJa8jVSHYKyPozMmu",
  "key10": "4ewDLkacrzzHdpDpiWHEcugdURiV6eS2h8eRcJidhofUXtXqy1rta418njCtqqHxJ9bo5uyw5WbpqokQxFBGPLSM",
  "key11": "3WEbHgCWw8kYZR3mpUvoGqmGvZgYDes3vAy2GAmvHrKbc64BbfsPowSqXfMyNcVXDVLvFNssZBqPyRucPiRckCaB",
  "key12": "W3EnRZswW4kX5BYbhkhC7WujvtKsKyEGWRauyi4jczPKtMo5yaSRS7iqNj5pMhDxe2jtAXBBJecwRcTMEKwULxq",
  "key13": "5i7qAba8qBkegFNyBz5pkMpNttVWqX1Ruryrpah2AH8ciNkrn4tqruexdLvdz73TfpMD6X1qTvpV2tmXUhvtV7aD",
  "key14": "127U5yhKx6VMD44EMeCY113UQnb35M5C2aomCNC5HYr1rq4vDDdL8iGE3srTdn9v121gjSNtdEwx52Jin9DpxrG",
  "key15": "n3yS4k9AEG1oGrPYBzjahMLMsi14zmzHZAZASzmbbvYCLeBXizTq6G5bAiSUXgTbvJspeNMCAjaQVa3czRXfrUK",
  "key16": "5hA97M2vkVVHEEfmfUYKpVUtMAhepBirM3w5uRZBDSYp6cVdV5aLovKR5wwoBtTsr4XJZDacMnVWmeBSaz8XuqJs",
  "key17": "dLKo9raKgvacxKCFJ6zsLjGfYUbtyoenrwF2EpYxoWfmCkcf2fYgqEgtQHKTbHsdfMPm5Dt9CctyaFSybs9MDjw",
  "key18": "5EoKyAVzKDnpJNopsPdnnynBMsdShcxvxDjWgwMHU29RbfQBAK1JF5YL6ANwPmBZjegqDvhieZF3wfBQnGhWeNvT",
  "key19": "3af2pfiiagD3zN46CfsAT4Zavz7vYefb3dToTFEnYGZU87oySU3kD66DV1D9gS7o68e9c2qksiQug1McJfwZpKtN",
  "key20": "5eDvtePKA9B6WmqVFGCjLC3sha37UdGc2P4K9tJ9GgaLfA52ay2cJzhQpW2tZDXkFRFUNTswHp6GFYTGFJdNjHGA",
  "key21": "4Z8bypBarpcWEUHxuCxyNyzmoSDuLhmNk7eN1jmmDsMBo3dthWdwcAca2kBJeEpa9Yqc9PcQDDNkdU2Q4xBCKGHV",
  "key22": "5M2FJ77FaojNfdGRi3ij5N9HHbnHALodgnZ8puWvdL22WDhHocnCHD8MuePVr5uAqeGfE5a8padbxmbCk8GTx8PP",
  "key23": "39VrF3hRVnFiGELzo4Nr4Eq55LwoJevdUmw9JcPWJvVgVFFY2TqiiormG3NbvzF3sUR5BVgfWrYyGWJ2UruyvFrP",
  "key24": "4yZ6qSQTc3xFnSx353MT9hu7cJ2Yhijm8hhfuWXq1o7rSJAdo1NSb7GDykjTUAjbUNnCtgaDb4tjcVU9iQdW9wLf",
  "key25": "nt97wbxDpCo1R9MM19epjjFRh3niSQNhWiHFHqnaMPzyynQSW1rvgaARQ67atehGHt9hP8kSpux68s1tZfsgPDz",
  "key26": "4CfZ7dGeaurKnjsRsvjVq4R2bGM7CejxPFCRCpLBC5ZKBRq2zNaPuJSStTYsdXJJHGqnSsBziJBnb8kuRBSEo89y",
  "key27": "mu4YerbHHA1KpXmcUHXkfZHZupCJJTkJXocbiJ756s91XHx1fWMow294KH3p4DQm2rprnPsVkNuNmtEefDcdqXJ",
  "key28": "6mjXdf5WoYE53xWU1undtAvoNrdsZSncHwYoAHCrhsso2Fn1WH7dq5whQViJXZS9qYVvTpHnTiHhHfgLkPF3i58",
  "key29": "5YphiFWQAMEexvAFNsV7ZWyqo72BHkHshgRZqj1uSbaaiKjbT4nJVxRpbh9cLjruKfr2ZXxUXxxmzgm3CNBmBsXm",
  "key30": "5nF2G4zv3JhbJumk1sJuVqEANTNu5JHPMyiDrbqdVdK61vfpcNneJQda8wArKmcHg1zdsJ4adqjHSHZUpshE3mAL",
  "key31": "3sTEoy6eqUH52zZoQ5Civ2s4SvuS7M7jNrqzjMffJer3bsfShhpNK2srCPqEHr1wL3nJRBN8H1xR1j8WSx5oTN5z",
  "key32": "3zws96yZujCVL6ECNbCorLiZ9VFNLhHJTmYzq6W9aqMfJyxBzWFcPzCYUiNMC4pfn5x9denVGLdeKzjwujfoU6Tq",
  "key33": "5JUCgTtAi5qEKwbDZAeVAgWDKuvFoDt5hB63wfiiRVWHYQ45WkhqmG4m7fG4AmuN8exrztuWQbD4w3yHXpqkEsHi",
  "key34": "4qrdVcywAxTJtDRMCoEhdfDFS9W9EgUsKGPeviXCs9zXs18suyBVW1DxBmvgcECFwRCq6vMY9EcLWaCMoaMwK2pq",
  "key35": "2KJRbgkyf35E2FSysSwqH2hJiv6wxqvBB7bLy5Hkx5Vf99aqzEXpgo14inXngR2Bm795iwejS2wtkLuH7wUAFcFE",
  "key36": "2x5eSHCvwjqTfNKBt1U3eV3HWX87umqd3iP8efT38uQv1Zpivo1n5FxDUpn97rjPd3aBysiKCRPxEaTuhyqYV1Jv",
  "key37": "3t2KnPGampaKKrabpdfB7QpsNBEZkhKQ4W3q1sG3GnP18zZjHLUTPPPKcikM5wYEScHQcWkCowXsZspYbbjivzsZ",
  "key38": "36mHH6B75ZbN8ttQSaUiZcNQPbzqz5dPWva8ZDSTtdF2SMrqFH6wp2aGLeVDzWx9UeeJuX17RzrpMp7MdwQQFxCV",
  "key39": "2Wa4yupJrX1N4Tv29bJUFvAoqzk3aCwECiZRqSZUqwpjEVT41RaV4DQPhhHPPH26R1CAXSuVyjLa1rBT87VqEN95",
  "key40": "4gYevkBUV9vPRQ4Z8PYfj8u11574m6wjPGy1QYe5GD5SKwAPfrT3cmvqLtxA2GprDhQBFP2DgtjFu1A4JAZPs41m",
  "key41": "4pKLVaa6RMwsEHZKdGAsBPw9y5dP9xBbwSC9S86r94urYgqNer2PrWkiC2gfiqaW4NmbiRB4qc5q8txNqvRbyH34",
  "key42": "2AGhnuGpYge3qP2B617MLpTQ7a79E5QjgJVDc1c88i4vWWLsFvqU6aZjE9aFTF2VJpCKuP4C4QGuwoMsTAVKDrSQ",
  "key43": "ZCBAEjTLxYCjud8zkMjXx83kcPA7C7aMpxPnXp3zXMhmw3SXi89D8n9rzKNTxE4Z2CX4XFtGzKy4co5nRAMsYRN",
  "key44": "53tuZrM36yXtB5YrkihKVLu5jFze3g9KUpHPEV7Rrsh61C1KToiCo777PoRX6MpAtVskS5p4byE6E1Ku89fiotiv"
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
