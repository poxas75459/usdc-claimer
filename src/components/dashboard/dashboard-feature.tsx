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
    "3htuQx9U1pz6t1xk7ducdmvDZwUSKagCdyi5uqrFrZnPFNJGB1ukqxnbxmX7UG4h9iuY9PdM1EgavesrezukAAz7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tpvZJUWBgpwcEEiri1xxpdJ6JUqyxDiaFBxRZiaiUsSErq56C49aDCvWd52PPkrBhqG57JC2EVJybYnU3xm45qY",
  "key1": "d9HDkSmEufan29nwbTPRjXtL7i8hda6azuBiERyysYsyF2qnS689rPWmUPTZtSg6HnJnr9DqgfKe8Q6Qx8mFa5g",
  "key2": "5vFjqSzuU1rTnUXJsD4r9kDZPJGumctNgTvqjNpGoMy5SgGPEm276L8etEeNtM4jqPo89HK5ukpATLWb5TBwb7aN",
  "key3": "rf5ofZvgbiJKeH75JHXJFzQ7bn6258p1ARAA7hnsqpYLSVRZxaX5Mpc5F36j38oEG8sTHCCjiAic3j937MtXMna",
  "key4": "fZexXC19nA7xDkQkEWHXDXp759iYLxxNemk2CiFzQnKqTw44YnYXGR3Tgd1L46HJhMjj2uRs5tZNkTEmj8hNT5V",
  "key5": "WXP388BjWVx6YnbMYHNAvhyHKJWBCVahoC7ySae1ZTVAdhCwYYecSR2qttcXAGZ4jdR9VKajy7EursdRFDCWhuV",
  "key6": "46rWWsrcpnwvBgPgpLL2uww9EYE7sJXS29aLTFVvUGiZ411UWE1kavq3av2aFVR5Ljy4ucSvbgtnCKSdBHePUMpv",
  "key7": "5Yamure8SN5n63BoVvHC2SwieWocoKqwBWuJpH56ESajnbCP9qnFHvNrjqPxrwFXdkfTubQebbKG9Buj5fz1SzQ2",
  "key8": "29KBTHv2suyd8CbCpbVZE5K759Qv2p3oeFcqbYRZP5bD67JxWQtCpGUCjdbEoeEVGc5X19ecou9m4aGeHuoVBw11",
  "key9": "5JphB7Nh5RmxZw53Qoag2cPiwknv4vkD5Mhm5iNprS8KFWJv6Hfn4CSzFT3V55XLvz7F7KB3Bzt58RjCRJVus7rf",
  "key10": "67H68iGi9K3SDN8eA7EqGiCprhBxsGfEqF31t2h92WrDh1JBCNf1aJXQRaPSWXgcYErAJDth1SM3a7XiyUAsiZxN",
  "key11": "5pp8gBXttHEQX2nVVSjQrjVMfmwB9oMT8PerZMXSGZKwcK4fWW7ZzErEc9mLhy12MPioxdP5sUeMcNELoMUjJxxs",
  "key12": "5ttvUqoVmwVnb4ZRza7Gb7Xd5A8BaCkU2ccQB3C1pB6eVPNoiiYCHtAWzBCUZSgUFP7Fnrcm9HLDwDz6kpGVavUq",
  "key13": "5pDKWwUoMPfknvS5SGebgeZv3yCmWeUGbVK4R72JR9HvBQtdmZEK4nnmkFYbP5bbRQs3gDDyHdvB4bpNMcgg6LL7",
  "key14": "21UbGmRWZG8AWYkp3e2uKvHLepnkZTQ8qH8m6UQCqu2dC1HsALtpdkLGqLfmps32gDQLRJa4zTy86V7UFHSaCGar",
  "key15": "KKGTCFrJoXGEHiejj7hAuBU6gk4gyao7r3w1L82KVEzUZ4M4HVMnjtP5E937m76ygxgZiUXVKJXEjDAjKYouBf7",
  "key16": "34LKKWCfZQhQH45apC4Ve9v2dPuzkU5KnZXMbeVy2waiYnU76VW1zPTZHT96mmGw4CF9jWsirx1FkGU5jxwozRmL",
  "key17": "4rQmmiMzP5LRxZV7xFpENyWFzkx7toQiqF8PVvNyFGWP4SiSbhXMua4TouAVKrbfNAyZ49J5HKYeoqy2S9PTwXVr",
  "key18": "5MyKzVewZBziLRqkk46tEmQq4RxnxjnqRynv7FJUsA6pFPqC52HmnPRiyPn4jxCqRWaaWisbVKYNCCVbQcdzBt7U",
  "key19": "3KKbghhv8A1Mc3spvtfbFPKyBYbS6ur5UcPFyeiuntoy1HzThAJL2eXo6ZeJ8pKuNDi8gKBAzRP87gnvemwKE8QM",
  "key20": "CUUvutHVwr18jr4gX89DG4SHwvG7T6zw6p2VhnYTp9Lz7ubC16iA5kcavgzehPWpLsAogtSGJRjCvaGDuTybo5F",
  "key21": "5U138RauX28dbTzYCuns82wEKSDfVCPE9LFtY3ssXePUkropDAWzSV4x3knxJFABUQqiZr2S33zwLaZETjS4dNex",
  "key22": "43LEdsiLCxcksuJtH3v4zMY8ebnZzkNU8xPMeT473FxeeYp8t1gDUwHyAdXMQN4ggSC55vwoMnGzH18H861tNukm",
  "key23": "3B57H9HDZNTKESNZgBpi69Mq81cYsxfRRwa48sFsHmKpWByCNMcY3MtBqXmg59cjNDEyxPQqw1NMckK8e5KP9G3h",
  "key24": "2epazBm3LE3p6xoFUiNkre8HBCg3CnpcyBA6EkMF5HcyJkgwALqpkKAfcFvY6RczHtMKdbfsQfoFWyd4PpYcFoQL",
  "key25": "273m59VDgeJh3LkQVvnm1P1xuN2fpdmHo1osTUcdQETQMg2KwoYx64ZjAYtmMwhEx5LbCBMkPNLmz3DDMqD9dLKK",
  "key26": "3HeaKAtQ8Kq5YFVjuTbr6sKgMLWRzRNM9GUnW7Wyk4QnUqJBd3Hz1yZCHSb5e4Xf3ZumHW7VMDaCefKUjzAP5JUu",
  "key27": "FjnhQT2F85W2aNX1tJA6Vj3JUXTnzjCRsWscM1rggY6PfbQp5Ez7E6dHSCNpJy4zitpvFepuAnxTsj6GdY9Ltqs",
  "key28": "3GCWSEumUfwqi77DfowawKdsDpAMHCM8wL33Z6Dx3C6858iov3pvWjyuLbqrXUCKX21B48sfNBenQS9oj9CePoBG",
  "key29": "4aoaFYNFgcPQ7UAjSjBw2S95iZ9kDUkBNmePjUmyTuWB3vYngpmgVXPa8KfZAEPym4M6DDXQ5SFRuLd52puLLqPR",
  "key30": "3LzKQXAjVKdGbh9kFiw4rutEG4uW2MPaJxAmwLAttzZSmbkt7pbPvJK7q73iGQHPa9SsdF4aMtEXvNBmpSo9LSvt",
  "key31": "5ZugANSQ16f3x93wFpXDmc5nyDwppG11Cw3K4qxqxVmUv3LkSbstrGvsbna9ijfFPZJN8KDVnm7rvRC32bvEVF4n",
  "key32": "992MR6LDTCS1TpdbQyCxoFbRHBTVupwVyor2cKS2mPDy2LhYkuGZpbCekjmimTyLRHoRKzWGXL4DRoUEetQzC2j",
  "key33": "34K5CcQNmFLqpxc9UuqiPkqN9KN7FPyEscRNeWpk3Q47eZmkKYqunB6fW15FvZ42QXFGYsxoAskuMNpaWmW6jRL1",
  "key34": "5G4fJX71ZWiwBcmX3HsoYGcD3ujxSazZDjNCK1QJhwo6wLm6J4hL51whY3GCBD21Tjczrgxja42i6ZmPM6qavbom",
  "key35": "5cC8PVq9V9GxayKasbmcDda2zTGLADSUUNJmy9vhHveMAgtU4H41AQ7jDqoAmkBqLrYiBgEyxGdPkhYVsLN9GDhp",
  "key36": "3WiL4zp7JeT6G5mx8ewiMCirNhXRtpMZJbNBZnCGPEm69xeKGkfJZWZBsrqkHmzCYBKqt4NcjWUNftwwzm4AHJDS",
  "key37": "3XgT1WMUqikZEakgGye4Mqrx5qKdzYU4BiGaWofof1KoGGxis1iHdFLDcsWWph2ev3b8pzZNBqeD3SV6aS1cWeHp",
  "key38": "2yiF9Xs64qid9GadH4GzuqwieGRSCgCuZjaiDUoVut9M7VxzUFcCraG6nJtFSSNk5oCUcnoUhNCX8Eh1L4CT7pd",
  "key39": "22o6KQqW4nfSjeaqkhgMRtZWjLQ6BCGJYT8z8L1XJ9sqoXE2poZf3YicNK9Gm7veA2ixH2kHHi7jesGfeSZ684vh",
  "key40": "2NyYEhL6xoSNDY3syxvmdRgoigYKwehTKWJrvLbrv5A2LMoFqNEEMKGKds3keKkpFFPHtdzDhBk1myc3Uh6Eyb4n"
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
