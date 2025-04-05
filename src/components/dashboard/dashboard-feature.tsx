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
    "2wXWh3fJSa1ktA68vEy2ECStdqZ8DboBDtH9Beru6796vDYQXgc4UtwdUyYmxt6gZr4bSSE9E2HJwh6RjLWdfK8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4obv4pC7aKYqzCZRUVaKzLSJ5XAGYUU3h4V7vFZND3KAsoYRPq9F3GsoWRKTodc2okBpm2gTv9GgREA8TZtPCqMd",
  "key1": "5cfjT41qHUiFvD4xdjDhdjWVrnbcURaZm1SouJ4sL3UMYcgxach6uYRjovo6rpyxUVyAL9YcWHuRwJdaVhnwbUem",
  "key2": "53zYPfJnQLRcLhtPCz9FvKXrPFE9uzp5Tk3R13Xx8vPGqqfJqh1SQsKy4EroMk1dmB6TSoWD35upmvS7pWiMKYmU",
  "key3": "5nSYFqRhwzSwALb6AWu6oMgQotdbt3QVtiD8moQWwgLRFwj1HM73WK9ticpdg1vs8wNxCH7i1UnmdrWzJRBBAZTU",
  "key4": "B6mLvPHuYLaPpLcyiUbi7RbYrjp9zGKwWsuUMxB8WibHWFLpbbwNS24Ry3bKQzRdvoTW3ywNPBLtmZz5thtK77P",
  "key5": "4C4EEMK3JRGZB7yYebAJhH1hVoCL2EKKN4ejuYTUQLAL7oGGUmH9eBpMe2Zjqpf47iDFAnPS7XiLkAf2BRm2PjRM",
  "key6": "5ohp3rQmy2ihko25C4T3a99WUDtm5f83swBoaYZV5WVZAW5smzM6UeXMQ34xLrfRRmrTew9cWZkPcCh4izQRWT5v",
  "key7": "51wdsSqubHGKanHCpToXL17nvLFvHkDQEJnW9g6bPi99DyEgmD985w5Uhvur8jTBAmnyjaCvsLELHgrhNnRFQp6H",
  "key8": "5rLh6t8ZtLaJq9GW9ALXcdHpJxij2DSDLmcShvpRipfhrR9fRti5sf2wBNmLaNcZ43LWSxoB5n9XXfzPK1Sc9wTp",
  "key9": "HZksVuJJQ4kFDJQbKQKgtxWCytdUamx5pceVuf1WvoH53eMLEUnR1qEpvoX1yU9USrHZCTmvKxcDf8sErgGgEaz",
  "key10": "3KuGD4CArcyoCrih62LX9XKyAM8BH2gMNJ2kJtX9xqoUNAFLn77gPx2LDHPKSLaHpwUNsLcDeBSC5dGf3CASLAs8",
  "key11": "4XnLEte3r4oDhU9iEN8g2ZphYrgXxNru1U31DUdNBANDZs4vRzxReSDaEXsY7B1Ntr778cNjSd16SpbdX6mP3JSS",
  "key12": "JJTHFrMog9GCQYmPSEpwtqkoC7hkmw2Co7Fqn9bCA5y3KWbbzD6uAJUcei9U9r1qMntQTM3PeKN4vsqtGbshE3R",
  "key13": "2HQkKK3zwFHnBE4VERFXpd4wV5WFg2WhYMhYZCPnB6WZZK4b6ELSbvQVFnS5B4mkktxnowDXczqQUJQYWUyeZjMp",
  "key14": "4i9JazLK7pgCKMvCnF58Zti8via3fJyA7LK8X9BpdAJsQiav4WGvEjqbtfduaTtscKrFX32akt6gByjU2KvtTPG",
  "key15": "zx32egSqNbuBbdjKzru33rVvujKZgUbuA1vdo1Fon9UdPxK82grMqE8Gk1fksYH8t7mVWQXyYXr4BKwpnLG9cWR",
  "key16": "3jrBNdAcRuJ1ufG29jac4FzKemcrRzNV9BXo7StUaqPzjr2CUSmNnaYAHuxE1ajvDqfgk5n1TdfKZFCqLfxcV3Pi",
  "key17": "3aDxvWpyPsiVQHzFW95GCKd9wGyHVjuLBL8tZ7VvcTNt3dxdTXd2dtSvikbhBGqrLzV7AQ5J1AkdERehqA4gpZsQ",
  "key18": "5STS27FxmEzR2Teq7AJWPiBtAsb6QKKnHdPm7rR8543AYdrdTBNR6qjj3Ao88B4JCn2MSURBNoQLSUK5bjjHPNWC",
  "key19": "4W3or2ShJiawfvcWVmhGxLkb9H4vTZVzwFTVHxiJUGioHMpcW9ZbwAw1BHJVep9NvUzYruVLVpyutXsTb6dXR4ov",
  "key20": "28N2o6TDLxUpLiQNjgQVmnzCaccbQZy3tx7LtbN3B2ZqbwEzSbesJ8QaH4Cp8o6feTjDWC3UZqm2Lbw3o6g1FanT",
  "key21": "3N1RCz2FxLrL6mzqz8HDMpzeMVrRSs4Lx2hj1EjcHAZzjKA1kDdhQaBwHemnv2zVimrJnSxrn5boa3mbH5UJmSpv",
  "key22": "3RJiqACizV89dv2HEaFQBhtrvG2RXwmcq87w6YFLzrbmpHGv9fzKvqCrBwxKbDT8HzuYcF8xogXFFomYncjQJN8h",
  "key23": "wFCTbPqMCJG8t7HMDzs2NuKbw1w76Ta4DXbRepBr11RmGF5uEUfPWPTURTbnqngxNsZ9TqyWGQT22GTSDq2WFBC",
  "key24": "3ss5pvKwYvn7SjcR8NqCJndyxNAdqbV4gmUcYxqFA98v6wxv43G8cfAHF61gFoNbQmeogfqFvagB3dXtuA54usD6",
  "key25": "38VtkMf6kkWCGfPyNqpMbfCVA4NvbS4GTeiet39WDA9Brf9iDxp7aVGFbXkVmamWqHxYN6Kkh1uH5hDjQD6BpuW4",
  "key26": "3jez6qVTkiqvKtmyAbJiwoH87N1WDTkg63zBTqkiSjLw6KZrmNAWMkt2oqqcjb6oh3xEZiD4USQxZzdYw9PHo5DR",
  "key27": "5qcLasy5azZETnPtVLiLz7fSHZKdSke5D6xSAZxmcft32B4wiSvvoeHZFQtph1TgQQSDuapcYAPAj3ByHjXCx73B",
  "key28": "hdJLs9QfhMwfALTVogWuJZxWaCrzLF3iXgPWDo9GZcJM1TSAH8kwxpvHsj14whurTPTKdVj2wZWAYcRywuBdheM",
  "key29": "GeUCuWEyPVkBCgRMb7YTGv45ikS7Uoy6kQXhYeq7dkwotozYyxqdXB1V3aCckdujtqRbmAGnj45m5tBgD35biZw",
  "key30": "4QX5BBTS3NYaieadfH7YVk5jBcaJEq8sFsJfASznX7oKmaP9XbWxyCJaY77CbNexLbWCK5PdQ6uWhTG61yZL6cSc",
  "key31": "43V1wyHUWNRt2yyZQUu7agezystYkAEnLZgh4cpHE6Z6dLDYhJSXc3fpL7b8vqCt8QbJnLf96xqCmJAyi1HX4aC9"
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
