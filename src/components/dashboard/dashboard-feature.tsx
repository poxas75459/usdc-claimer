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
    "3xGzVUyaVVFtErB4eEpTpV8hH7E4kR8iKd8X4rTRJgfW66iJhBgFy32AFFRqZZSWeyhyQQYkzHyN7y4oFcFr3kLQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Lyh5m21qvTqdwbbfLCEM6DzNBAtMmqj5cccfpHrYbUj2g4Dg5HznT7vqbPatN9m7SSXvdKmVKLrWyaTp8e6KSdv",
  "key1": "3iFTwBb319CSuqv4QhpTuJ6qPLQ21rbtbH6gxHtQLm7TDWkDSmMrWmzXcvfcwcyw3QhAL8eipcXdshfh6j1pxWkT",
  "key2": "ujV7wGMmVToYvo8G5b5S18MqZ3y6GAdfH6E71qQHFD5UyewY7bxxzCRZGmxmBvbq63UqJfKFahFfHNWpCdKYW18",
  "key3": "4UMHYrvNSe1MMCSDLNkvQzJDG65kLLgk8EAYwqB2hHdMcsVtMpS3YhkRn5Cd67ZdS8Vvx1jqh985knL1eZP6YsP6",
  "key4": "66LvzHeJ3tWUYrd69zB1HjMVmtw84xSa5wydxdyXfy8pD2wcox6HQagKXMb7pfJTcHX29dgJ8iAsnodEt6fnJN48",
  "key5": "4MhbnfgWcjza6UHK45QLS4uzvgP83vQNt6pG1wefd9eEw84dGLdUYpWccpkGXXEiAvZgJqGsjcJ9utmYMyByMA4D",
  "key6": "56mHSLQuqU9Wuo62HxTaCASqmAg7PDCWGr6gVQua5zkQavBxc1PVSfXGvEgXieEeByRb1nAHHt3a5TDPq4nBHDte",
  "key7": "3F5mx1zY5vXds64Js2nXzzBUcmik9J8z44fRW3ZrtE8G3a2j4g3M4gcNXrtbWW3BK1EMQXbegaMed5FKRuTeDUEf",
  "key8": "5zXiSq7BqCq7GzuAgtFmFfTLw9RnjWzjdHj7CUznaJ82hWymNeaeStpo1LNLTJ8N4HPj7wsD6AZS5kgFo9zcEgMA",
  "key9": "4R4XjcsNeZbyEjRSxzxQ4jyX35vtPeWSdBYnKK5f3oNTTMRkuzK315ENf7kv7hXbNZ7mde87etpjhtApFVFJkSQf",
  "key10": "4ejMbkBGKUcJDv7EFfR5pQjfH15T2fTimvPdCb1DBpG67BNM3iMGUmCa6X6o6DFPE8e4e3tgovyjircDtNonMfHd",
  "key11": "5iUDB9EDnmgvbsX85zoASipkdJjJMAchFF5FyimCh55FLne4TQmRLTsuUuxHUisoWRt4QK9ycnMxfKUGR6Gv8b8M",
  "key12": "3y59qepbZq2cdLMupCp8v6P1iJLaoDEvCSjFkaZdNRxfTRAn1nYVj6Ccrx65gU8dX2v9ukraeM2uV3BiyZhM4RSA",
  "key13": "FbkXcbuWdRwRhjFnhggmKyd3KSTqpi7tHrKeDifH8PMNH9R7bc7PrNoAPojRek9cGvGDYzmvYK1x94XMd4rxyoc",
  "key14": "5ZwGgLbQhjUzpYmDRwDtVtwbSHbYBrPjYQLdT7aGN57LmqXZwqNjYtWtsCqi1WkZJnMB3KLWCUZhrtQruQpJ5zXC",
  "key15": "645SBxzzywpQhhA5qtCFsP2VTss91CSdeQvz29sgYqrBkpcZuarMJyU3DHbWMuvuTYEHw95aG8kdYY9KkCFFhcks",
  "key16": "2iNTYTc7Lq4Vo1Vy6Q9ZkE1c3yDZvhwPt3ai6XPGtybHhta9zafQurtxdEDrJ7ZRdP26YdtcPsjG56hy7EENmMjq",
  "key17": "3CYTuxBw8SoCQS6jhBLSpYe99Vye9fsyCLGDnBw6QMLeb8j8RWvF83PV4X8iqAPoryd26xP8MXSar8TdNej79nb9",
  "key18": "2vcchnKFwuDEFZpJCErhLmpg5E2DnpAoJ7BX2wU29Z8mj5zs8Ck3oUhQrF97HwtD9YJG5YwuR6Cz4a4Ed9JyzX7Y",
  "key19": "37ZaP1scmDKsJwJfU1YG6WGfVkk1Q9ToJjQ2YknntRE8pSMujdvCohZHvnnN9L2AM3WhVmfj4537z4RCB4UBZ9pz",
  "key20": "2aavDLaBkfXDtAGtbpBgJqEjn7UbAmMKYBem8A26T4LV5syyB66wzxspBWJeJCgNgnos2LK7tcAL2FEUaouxm2t8",
  "key21": "2TmGbeB1QHVqNQrWpjGGn5BCGVNQcifeYxfXdBaNynjTh2qzL8pB54d4pCFpfLiHFrdSESvE9eMJ38ooyMgdp89E",
  "key22": "4uxF7CbajRKFjF8sk7f4QzNoyL2iSbJVW2FAs5734N6AxnQrm2bTxW8LhgnkXkor57N27SvWS5M3yqokojCNfkY",
  "key23": "4xDpypAxnrPoCosKaUHEh3CYxrpPceV6Tofm9EPbxPhcTgJmJraD3TdxUaZ4QepXPs79b4wuDMkNmW4Us5rXcyqF",
  "key24": "2fc4QwPJq5mhRR3Vza6g3nRYkjaFAZ7CpneML55H8pi5kMTVgxriZxcWBx46eKMHafffmWcNpoav6U8oY1VofnSo",
  "key25": "4Y86NYsmwYmbmZCYRGVWNCXEeybY4TjKgh8YhqupdHTJ7pkBz6vdwL8wm4zjvJKRYBFooPiAkys1JkedZqkgmqdT",
  "key26": "2azaQ3gMECCQvXk2oUsHPtB1ERMrg4aszA6akYCuD28Yh9DT1Jw7uFqQd4XqhAXgeHqswgjfJRZcDVG74EnuxLvn",
  "key27": "3aya9zCWg2s8gHhDrwsnYnK33M5FazdxEbc2LZB47b4M1LhDTJ7gUz4nRQd5sigQ42jdprhQUKf2seaisuSxAfhL",
  "key28": "3DFewDEku5yL66bwmSyvbjD2wrZD2wbS3GbRoqWxK94cLUzvTiAUytY1YSEP2tamkVGS5rajxdap2WkwivJETEED",
  "key29": "4a2g9Xqx6G2NfcQr5QuJtd3uUxnkQB7B5pJTZz981vxrvPdUWLCu8ufFBZAoubmAiuy897RrK3uqmnNVVaJCz29V",
  "key30": "4PV4zgqo1TUGKU5RpvGt6yY38L7CHBfnbYJbcBzm98f3Gvbq6jD2jWVdVNi3ZLja7PjrJKsHrZahiGi8r19DwzH8",
  "key31": "4hYnBMUWEvvXRpwCBdUe1513JVo8CTzUxFnf4fbz9qvxsvTeJvDreqfW5VW5F2b5Ljy66sLJpn7vRJZM3UrteHsq",
  "key32": "VMuvfdrBn6TVbESucg8aJNQmeFG2DttWi43VXxBWcMW8KkdXeRnX4uVbRG1tgcmurrnYayyTYyHeupKyD2s3E1Z",
  "key33": "345RGHBa7yuEnoo2n3yCyyTFmQBrtBVJByxCb8MHaHNV99aMMN6ztbZfNfifAbG2KQ958ZYCn6JQUPazKucWAFTa",
  "key34": "jPfMsHVCa3EPd3tmeEq8QgT5jxyjE7TfMeJ86gqGd2dsJ8C9QYy1oaqLUYn4Wgd3LyqPYD2NvvCnGaoJCeMsTyr",
  "key35": "TsNnyVoD7hr2twQGJJwCaM7Kh4bSehDVsq9anxuDP8PWzowiRx41gUutgoLp1fyruz7k33YhjGLHjyCViH41iy6",
  "key36": "zs4ndpkEDKsYPFV6LAXxxqN8Eh5isQzTtyjCMtDTb6DgGP3CPHAJPMNrrvWu1MfE6Ckm42MjiwQneWGkS5yVFTy",
  "key37": "67hA2B7CxEyziVmgs7hrMbkBrvPuqgCKuFzCbCS3MKzt3KkoDtJgXrjvLh7NuDU54BiLWgANC3FeAuBiWqxLKGdK",
  "key38": "37zoCffGh9WPuYjn8P4Aq2xLUJAMbaWSPQL7gw1ib9DUXRh19QXsYTe2pc3spJ4kKB4XJs6fJynqndCaSkA7NMqe",
  "key39": "ua9KkXEcD6az6K8AjDRycPhj6KuGD2MjZkjtfBRnkpvY6bu8hhWzKE1GqhC7xnzN5vB34ZjpCyLAs14zpZ4jEkR",
  "key40": "4up3qnfVrEWXH78pAqQWsEeaasjfCenujvNhuhVvdS7tuXmWMxPChrRvAkiTDpr6fwmampEMHDeuGEEoWs1RTfxj",
  "key41": "5Vuk6FnmsDjSghEs4Zkp8VrfeaZQvEaYWr6NwsAKBZ1uVoHVkRVDgdxMfL9ENTMpyWV7bsXZfRK5tYvCFBkrs8PV",
  "key42": "ztd1NHXdiEBVdhd2s4EQzC9iG6Z6foUY3J3Twiu6ajAqGRVRkkEAhVM5foZZaFQBsUfSC4BqvbVeGbVMViXrNfh",
  "key43": "5VLW5oYWGay6Mp8ob9rAR7SPSnX8BAu2Sk4tG59TKkuQHdBYq4uXbUj8RcdasTRo7d5v2jAUB6BoKkKr8zxKoKxm"
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
