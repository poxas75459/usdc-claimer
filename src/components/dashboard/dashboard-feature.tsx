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
    "5icWMiYWdWgzV9X1vCYGQ9kC239m6ewLkKriCkdnUa6sGi25E6Q4DTDrznfw3Nfm8tH3Lt4xfMuorWQUzxXqRCNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KvuGG2X6SZU988Noj9QR6Y1Bn7J5TsHbB1pSc3KVGTPsD5ui94dLsCP1mnJ64u63bykdT9dmVY2zFdxob8u2iEJ",
  "key1": "4JbZZ38yAfRwjN3Bfjf4Ad5HkYdgw1dwh9nncVgyEwVVFRShm1vB6iaETWVWmFMucPRgqJ52qwgnLT6MJMcyrW59",
  "key2": "455DBR3dMHdAsqAopXe6j7CRYrVbEcnnHLueefwuhUWBJtnssSyv8LAVTvyqCu6aeYUaycbr3tEozqkhh6Ej8eYu",
  "key3": "5Xc7vtuFT4avaiz2wSf8vHPr8sCBxP7QRVogoyMyopVbmXuimwkRqFnvhFHu8vX8xgNedeBBtm5VwX19RcAJJqoQ",
  "key4": "4DtsDrrpGk7KmCbGqHpNZLr5m59FUrtsExzGT5SwA6GNkNkQ2K39xkYmsJpaS5dWdep4E3U4U6ZDYYQCF4DEK3aV",
  "key5": "4ZjWwY1PdYpFZmMxcEwJoUpXvsTFX64QVbCB556C2p5778wCae2Qo8BYo5hYoevjAqm7spFMYivbRXrBYmNdGL2D",
  "key6": "63Z8HZP1pQzC2buXtE6mzDZqFUXKm5xcXeYHZxYZ2mdb4k4EaXLSp8P2CNFMJUMizQcZDbDfHD55Sh6DekBQQJ3o",
  "key7": "65CY8MD5rwMsJJQ3osMCGyccGutxaymvLgY2nekX8vPra6i4XK44wT3KJV4cp7ELig1LjmytpZbEbo1TPUq5dYtK",
  "key8": "3Bu3xurf8a4oqHVBVwqWsj3DXike4QwWXYanUBZoDWK21UDhohnNcMig4W1u8Uc5m53XojeLR9cBfBvECSjEEn1X",
  "key9": "2PAtrTnQVcuX1zDKZq71mPBL5N7mxdyNKU9TpoagjdTvd5Gw4e6qLeq7dTdUVJ6ZwKNJGFQYKkY6NMmXsvrVs1op",
  "key10": "WXrYBAwhhbbkrS4Z94hbURAofWXBGaHpTMxFQQNSE4S2FHvpjc77u8CpcsWNCqd7gvqR6GHBQx3QQLoci3roYRM",
  "key11": "5FUtiXXcEvYMGS2GX9z2XNe3ZvPCEfJQtRHA4PuuEuesZtXimu6gJvxTti5cKndoE4cYeHCB4yrMPe3Zx9zXuqRJ",
  "key12": "56bN8w5ssnvkK7LBMgKiHVMTcZGyr1W2kZe8CUvD2FPWEHrWau5aKBvfq8NhnAyEKiZNqG53hTNuNQhkXrr9rUyg",
  "key13": "maBwa7iQgFbtr7eF8siyxpbkSitz2LYr1B3aYw5YBr5QxoMR9WBdokxjkfGRrbFLDafqERzPcp3yBDGiGiPvhXM",
  "key14": "2gFtNuaRLjjT5WKiczh48e1fcWK9EE8kugxuNRquDBka6HmFUDCLUmyHDnr5NotkfHQqEQqMVaSdU4Y78JJc8T5z",
  "key15": "BXnDma3R21ayAJX9bUabjBcvUmUTQtyfj2XpBP6Lh4UeTYxsgGqyNskP4eWFeLsWamMx17daHKiLXA7G6CXt1mV",
  "key16": "Tx1RQsRpWCaxPvznN7weZaTKGYcdVMKaoMnsXZsVtKxXXaSKLD7ZG4U7Y3dk8anDU3MhAyfi3YGJCvsbk5YzU5h",
  "key17": "3ktfoWuNoNaeVRoacwHidmYfk7wZZxoYrFPrESoZcoe1SQFEGsKnxNEmdzjumMNmhDqNCdGqvm6tyqbXP7ix1mXw",
  "key18": "33fuiTWxVJCMGPVPkWSLD7Af3QeerHYShhyXtPHhz3JzqHNzA2XRsG6qntsVW47sX1cUNsvxrmuLsEeFHoEnQqY1",
  "key19": "3zUKVtsitC8ALityr4B8FfpK9mPKtogeuCeVdMjRc8TD5xDWZMQ9kMDaF2jUG76CrzgjtLMA8N1Dcv89qUQhG81F",
  "key20": "NsyutYguncfjybjszzTG2DBNAUTxBU9yHBryyPEKnA83jfZo9LMSAofjP7fDhim1pjky2Ud7x9BJKjh9NQq5gz8",
  "key21": "2oneeJfVyA7WWcT4U2QCMknjXqkndmY5moKprBtiGspEp9evzrEgf3r8J31QB2nFMHEFx9pLAxio8afHwPgfBxrZ",
  "key22": "3WU2vk3syxswuL9JAJAHi9yZJAW3dyS9UHuGRhmw77noA7b5kPAVHpRZWvzTrTDEZRr3AnLKH1hzQAPeupg1DSd8",
  "key23": "5tdWzy62XCFRf7N48NCUkPfz6f6dkW3N8hyMFEdgZ3tFnW63GNFXziJZFwpMtQ2YxjBXhYXsQ9YyGsi6qHY6qcpw",
  "key24": "53xU1pB9koGQ875aZtuRDoyrPjkUHqAMeHojzJqaU5NipE8pBFSx9HS7zUr5VQNo1LNXqX3UjYhwcBJ3SZwMdsbK",
  "key25": "66eDCrRxTFkKiczbYAgpMD5o1uTS1zDVf2o618uBXi9bffxKocnzhUxpsc4nmamz47XyW8DH4gDBsiY9WZtuSWCA",
  "key26": "4m8ZUmtYie9q7zik6vAQs4T5i9RobyfgiuUcfdcZhpxx4ZCFNDHfShSgKeDStKfGkmA1dYMn9z7b4QwbcPKrKMnA",
  "key27": "8kAe5XhjKVDnvgoMDW8dzjQ6UZP25oL6dfLwodW2SxpHgytZENf8fCFgv6WVg17vgqdXwfkDkVBhcac9xRSEkvR",
  "key28": "3aKZtkvH34UYR88jjssqtf7YfryLr4Ag3zGzFbeW1qDBJSdcp3RzeUgjWT7mVQ3WFqujjVYRJ2h6aygBARMBWuQS",
  "key29": "34SnJmk3H58TDmTZAoU5xaUZd2VQq9g6RZSXuCmwQLTeYSxZaQQHrPyi3d6vUmW7wikPEUFKPf3Hn2TjRu3CKC5v",
  "key30": "47DVoaTsv1GQ3beo6kZXC9j6eJ6bNXYHYcchwLeNycwvyZRQBxBeBo9gnZzDn2a5E3FvWrF4aqbwXXTzpfK4Mima",
  "key31": "29eiXz6P7632h2gDUrDGVKfwz6fdFyDihDCAG3G4WQtAZryEo4KhZCXQTVjgkXyjknzrMTmt42bNjZPGqDfZ6FTC",
  "key32": "ksfLsTjKvaMQnV3X8BMuaBnrb2rhNbGPu8gnbN5Knwi5eoefsr6FUqiGX2ryt1JiKrnKG9tDMxRomrXjqCLJszG",
  "key33": "45niuAQSa7Wp4FDjpcnCeSVQabmDYTMZ558SYaNzK1WTuZqiPCaQLtxVUGE14NnyeB2bMdXH6z1KN1ZPLisGRkDn",
  "key34": "rwfRSn2vo9GTCEWyyUcj4BBNN8YKBMfLsY6H1oLdfAmE6XxzYRyneVoakmW6MZfFjJknPELQNB4Zff3MnNbw9qq",
  "key35": "4TydjM6cwf7G4MBQmXYZxinfrr3qVDv83cE3LUdsQcBGdHdWX74VLidBPp5nMmagnSMxBpTvafatCeVy9k5WqAam",
  "key36": "59AH6D5VCXq1ST8QHiXB5AufYfDVeVAiovwkY3ZfqBtB9bTuwrwhHrNrobgGbxzVBW6FojMczXZMPFuYAfV6uu55",
  "key37": "5GNaT3BkAXBjjkfA45by4wykA759VYCGmzuRGNU7upxBQf9fhVRtBEtgUcHm6MFT6LPhjDem7LwbBxTZMiEmSQqv",
  "key38": "2w3mB44c69Wx5T82jGHAaSp9P3DVRhmYt4MPqiuBeo98hfrb2cAtAHusAKaWQigSkV6HqirPwDAatYXEey7T4xNR",
  "key39": "2DCgMMLBx2bQQ7W7F1GT3DUUgf1gnPJJveBp2bwnkWihs6yGja3n6VcjbbwA4TJwmFDHHK4FtrJms7AoWpXfEd3s",
  "key40": "4yxEu2Pt3pHyCSrcgCzCCec5LZw5n4qfz9YiZvAXa8oxzoRmLGrcYyUTFFxoBpti5JcSGacHSHgktreCBmhRie6F",
  "key41": "3VCgWEYnFQ5DrvW17XcrLYoW7aTnd8rSpKmQCXFbnGW3Wocgyf9i6YSh3YUxew71RhytNmpuYizcwV4fTTtRGWBb",
  "key42": "3v3yvNNMYtXA7E3tBQRTKBk9NzADj1oyExvg2C7tqnRhJ7PDZmUpzHoYu9Zg6XDd74S56DqwKPSdeZJL2nBToWtR",
  "key43": "p3YPs5braaAp3K8C3DoqxuJkwakubCc5ywZWP4ufgGMozASwAv8uoG1DGnFfBZH86i9JfRVYqJL7SiUcG8GVGsz",
  "key44": "XfyuzJXtU7kuuzefFPv1e1YZxiDVhwBFZdpXMAMwvcQ12p1epo2SzQDvZxAtDA34udAJnRoXE3pJL3Yiz8DULkq",
  "key45": "5Ahn3SuBNeByemMw7z8iNh8gnnn5C2p3qf9yGKtGTaosTMTPV7nfKQ8XhXP7H9ikC82yPM1xhQiBYoDw7vofPSrh",
  "key46": "2vDwtwwfFNLKU7AVfZ8EqFBRBVqJQHJnhWp1vtkZviD4N3BKadEbDAyD5CbdFASghMj6HvL6rEPEUxiXEqsvT5hb",
  "key47": "cn3KvbbjjJph6cDvEHHvvs3thzVKH8cR1KMAwXd75WmzB7W2g5QW6cMLmeVoQRY5XSTwhdKxxtHJGiV1YEe8umG",
  "key48": "3bMdj6hGngVZukqbEhGLC9RRUoFwW1zWWVvYvVPHenCpKXYNfgiAyev1oL2pbYmxUD3z5dFkx2oEEPeJFsQ74LZX"
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
