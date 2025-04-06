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
    "67SoUqRDJnAcozUDoyu9ZeFcwtHem9Ua6cWo1uixttJxoqKQQ1JL7SkBkiNKStvZFUNspetDTbZubA36fzJ4s1RW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TDvpp2rTf1AE6EajbUdDG5sHHTNmdhSvk85QPiVnFBTcjyAupQur7hg6K8BtMfxEy3fUbJNoqBcyfySULJJjveF",
  "key1": "2zohzvqVSZU1oTSEzmmU1bb1VNkwmmT7FrHXcjpGuFQVwUQs55rithiBgYRb9yrRtR4h3WY6RDUvP3kd7dhKiv4t",
  "key2": "3bcDMX9ADsgikW6A2Km4kMgAjAsdYwTLCMUh7RADyVnKbGdAzzQCkW4r93Ttih2SwRxMRQxeP8RoUA8Bb7asdRCC",
  "key3": "ByQvw4XXPfWJfCuBNJcarYjs4iFaXz1VipaFoRBgnJgReJrtak88b4816cntekuEGu5xtitHfcUNDbbdKAD17Mg",
  "key4": "Lwr6C3eU5JoGRb5VsaGbGyaJATuVMCTQJJEPDf7vqgGXCs3KQ8jPoSbM4rxSZLycssbKx2KyUEakJsy6sHv6R76",
  "key5": "2U69GhzzZqqGf9Rg9SYor25iWNrjCLLcFDZkPWPGEJfWm4CZJGer47LLSfd4jy3hrXg3LSC7MGgd8FHWttPkyVAA",
  "key6": "57Q2uXaYsDZj1qwqynxKX8hm5TNN4Mph8sCZQfg5yNTq7XbpZsuqzKFxgHisDoALvUvnf3bE3TA7mgfBidPmJky3",
  "key7": "CgDbLLLgyLVGpbJhyV3JvT9y4VRyG13yGrQaEktYtVNeHCoJqJmCc8ynosaiF25114N6Ks154bFnCTYs8TEVUcD",
  "key8": "32XWNcjqDCTKiMzvw6iXapwq1RAiSN2eLQWLbpn2SQZKpomZPahvCRPnVgKW3aoVMPdcPSFBe4yRSGUBrBBioF1Y",
  "key9": "5J4k8zzUc8SqTmmFjRTCNeqYRpWJdrdUQQiGpSJr8ZbRmfBbxjdQxQYe3E3z6tRhrhuYEfnFPFK8Asb5RjwQzDYU",
  "key10": "3ZR6YxhRkDLknosnCSpXiLSoxzhPdCFZgfGqiNtaag6n5WzjWyUkpRyU889AsjVCrTC6g3osm8qLrNso863E3LhZ",
  "key11": "4N9gMXohrp1VDpYFRUbZ2AWBeHiLBEfMRmAHSrRibV33QzWXKX4myj3EvRiM8mv42GBDrgiZPpVxo7gJwqMsqqQ3",
  "key12": "5BtZF75DECDgvmrzjKnrrgosErW5TEoqynzTobswhsExLsL75gVTrSfgic7Wp1RxCZ2SSZEh2EAZ8G6eEHJ3rrKL",
  "key13": "rCy6tCC4pGHC7vcHy74Yr1azEoLwXwK76z694h6DF8Vnhg4Nq9PBi5SJ66Kq1K4JFhKmgMbz8YL5uFVSZygZhRs",
  "key14": "iRrj4DYcT6gmXuZtac21DEJ5buGUzJ1m1apAexM4WmA8PycW23Vj5zq49WYNKtAEGu5dPTnonZrnznmEyTzmn4h",
  "key15": "5kznpVAnNWydwGVibnERhkrnSNTiyCsnzkwgvkhtf3nog2jUziD94EgZvjk7t6h8z7ES3BcoLoin4hBGT6EXbeHU",
  "key16": "2NhnYui7GpLfB44GDGk19gDgY36rEwKzWMdFHCariWZJNJjL3n1B1QwAgPPjaLfXoUCBd397tT6vXS7VpVH1EuQV",
  "key17": "4XeZMfjZGVesup1dFF8KVtV2L7RhGHgxEYRhfuYYnf8eW934o7kxkPuaQgqW9ScctyPspqK4XwAj9PFN4nC8NVTP",
  "key18": "4f8TB5Ep1au2DAuaiAkDffkDZAaKhHYb67DtHY2x6mXB2dQALmyY7UoikoaWhJUqoewDg6tAsNP7SLLTLhRuYq4n",
  "key19": "3Nyi6q2FjmVRmEt5om55UXTZnjoEmkbYST3zvwphZ82RfYXLkjQyFqNRzhBc6aVFg3KTjXPbL2gZaruptwR58T6n",
  "key20": "52FfhvgqXLSxQYbVQM93rwWNYqUzPtQfnMcVtqmL9W7feaVHjfGM5Z15iNyiHEHEMLDmhSndP7uGg1UphYY92dgW",
  "key21": "4p4JDb5Vjy4WYcjip52GYJRNs1jEsR12SzdyE2erVuZbjwvS4pN7YiiJShhEgtuNpZQbCSKMMB49Echkz1jXYmMU",
  "key22": "2aMc6JT7KAeKNCR2pBJNRT5NhN9E1cDVRt8mo4L8iqeojarQaZv2wWSU5TPVs1zomRyxuvp8poimvYQ3UhyBHmcG",
  "key23": "2jnKLarSh84ZtUkGqh1DH1XFWAsr8NtJjamG1bhW6iXrkWyVaifnQ2qmzaaShz6sZpVpHzyUyLtdbURqFxdPoyRo",
  "key24": "2TyERAu9vFqWPJVretoT1v51jE5DgAEEeLJXCPGEGjTxet1aoEvFZLHRaC51v2aNQQdApsDSvhbd7dCwG418vREr",
  "key25": "2zaRQanKM6VdTR98hSBauZGGfi5e49TcuKaqRPpnZykbCPkWsHCMhhBHsGGw9Ns3noDVF2egK7ggfGLxfQ5b1pKL",
  "key26": "43rHpz7PmLQmXfKaGdiUjwuXb4RQJSASTgVTPAfV7tbakPD6Zs1PZt28NurUqd6oxfwL9Sn5CPoso3hh8V6Hhdv1",
  "key27": "YtqkTyGGGQ6FYSxKVeRXVky7GYkSezsUY9EA9haZDQghbtSR4SwMhV3S7DwVYGyL1RG7NXSCgVGGr8QKDGsDTge",
  "key28": "5jVjHBkYpGKHYDAUtWXWLpLeohgNiZE1KupT76Wgm7YKLCthdviPGZfUq4MVKyyYYp4HBgxabvwUcWjNDuqmu2vU",
  "key29": "4aNmxQi46HXdX9CSFdCgsoXTB8rCT5Snenkwdq8kdHEQLCgcYhWa8bZWxDkEZKzSX2nJYcjpNZ8BCYiFkTLgg4AP",
  "key30": "2RfMbhTJJcTe8X4sPQT8qvNYB8C46ALeCTMfVZ4JGomvxU9s6FW1TDf23hBmBetthnPAHPrCHpwgD85v6oYAjPJz",
  "key31": "2Q9VDT5xE13zVhwSefMMhjUHa29mUkKo6bdpvtMbdBFSxdda4Nj5vNy5suM8XKDALqDKcKxgxQ98mX4a93RbZeFF"
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
