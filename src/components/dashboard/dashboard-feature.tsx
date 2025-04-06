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
    "3QVyjiBT2JtywJHkePQoqgnHjkdzFmPHFhs8m2esTyjbKNSrSXaFod1iLkTpjW97VzuXTt9C8D2btrsDjZ62nomi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51DakLD56oZe1NMBsPfd6aRYPFFmoq3WNvUKG7ukATBE1c7jZbe2JcZQMvEwFLc34VrPUWLirjcYDgT2xAoHYoUK",
  "key1": "7gGGN5Xct35eQiyi2tX6RgsM7Uy4gWfVV31Nac3tuNqHFY6A8zCEw9dcgmczoqoFPCcP8MGjkvjV8qtZVLBVPHt",
  "key2": "4Gwj1Lkjk2xxWrtyVo323P6gUqJcNb9VJbZwHNWXQf8M4gfc8kFjw6rGy9XUPK9cb4LXJ9gMjVkVEatzgFgiMwYX",
  "key3": "rVWgot53zCbAzeDsGtCGUJrNvyHVzgfz1a2tMKGf4PeHiGra7eeCjcaqNMdwoyopEHerAFWP3EoN8bT99qovA8a",
  "key4": "YaG2VyK1uS9Yao5RsStjdV7C3Fogu8oB2SpoRgNy7soV8NNj9FwK2bA3spoBChNMvkKXNEVuGA3Wq7u2aVzwezt",
  "key5": "3GKS4ernTG87rB3T2Ar3cTP6Cb3dLdbrzsN3rNbJebFkaq4u4q5Bm3BAPgSBaVpoz1NweJUH5ccaMzyNVRw59HYn",
  "key6": "5sBvQqQE7pGNsGhQFFyi4hJmXs4Vwm3aAVHkHCvbzooPdJkfZWLFMjWZa7orWhoRo5AKS55STxJ2u5H9sSvUdUXN",
  "key7": "5gtdiWBSic8UecZtpEjbTe28c76T7mfCEQBDG7jzr3Je7j7B2AP3qLeGHWfgxjFxizvFvqkfzeM5NCJ8ad3RJgva",
  "key8": "46nrdHiwzdu1YTyjg3BBberPdSAVWE4VTtd37dSwgida9jj1bA6MYn76FeFacLpgxR4ZFi6REvd6hm8WheapvGx8",
  "key9": "E4MxmSRTrv4YFTt6EQDCrHKA5BDEUcArzT6m6VGdMQFG5R7DMasoch7Ku2AT5HVcSTzm1DeVpHAFbRGdayXdqFA",
  "key10": "5jJ1dyBUugQzeszgJW8Wf4exTScMiWyda3XDc9eEASQmUGHjqVv9GufpcyMgqKzmAZ88p2vjGtNpZQbBrye57Z9Y",
  "key11": "2PHj1RqKH5qRnP4mftBH9G9iC6CxL513bGz5Q3nZgyFQhk1hKpsYCA7gSC68MhqwdBpnf2rs419roQLZ1U1c9fTF",
  "key12": "2oe8TABDckQsnkUrYhTGUnyX8pTvkfqKCghJZf7wz5U8yk5TNzrFzUGDKb5ifAYUZEXdCUdENY3EartwuizZ7W6h",
  "key13": "2kfPbGYuvRGZzE5gGK9aAQV4a7fFRdhDdAnMeVYgSb1vZDf8thi9H8uKRo1n7VP1X2fTuw4mkiMkXwJWCvWzcv4T",
  "key14": "5nU98iZXZvNZb1KZvEy8sN7PwdWaJGFhVTHSe7hkWQx3GuPay6iXcmYkT2YP62gGQRXepUsAUHjPVjsP6exNL8UC",
  "key15": "5LjsTspzJdY64mbdiAjjmNog6m7GdF4E7y21GzbzVbyGosTKwtwvMTa4cxLQGoqNoNSXkgeNLqf8Wa7GUSFNELrU",
  "key16": "5p371aKuYNCQXvdhxkZMhKVmnNXRHWHBnBoBbasriqVqe9uhFDNoa1hXSJfEjGoY34VE1jKNK3ojBoWXupLeMViZ",
  "key17": "4psaADkSJ1guU7ngCqgTjsjQvU3T8H3EXvwATVCnNczb5Hjh1WEbHFmPRiH732cf3dnWbgZZ2UpGULTLE6o6K69u",
  "key18": "54PRd7LzvZo4icKf3Ajbxq4e5Qi6K5N3ZSvSELmV4acncqxba7LhNPUEx9ywtYbE6VNp3nEQvaehDwi1JqYWPS73",
  "key19": "4rqTGJ8Ru7omqNfKhDeHtWmKpdkFHcG39rSxvPqP4nkmpeBTRxSvBDyNxkbCc9zqzjKtkAyUibAL1wGKi8jAVDYb",
  "key20": "4hZ8YQq5ubwEBLmpY2Nod4PUZppzCpY3zkSGVRpYpDxQJe8uXcjb4gsxWhKKhQDTLQ8UK9CSE89qrVBPyQ3BMFfz",
  "key21": "2usi3HzXWrmaJVzFi5G6V41Z76oFvczoVnVapPrsjnDkyvpmgwaZ2BEvbwxhQGsQzBBZuRT3vAbSn3WxrrzeGPCo",
  "key22": "4Z8ZD1cTejbQtfsSGqDLFhudbhKrQBuUYGrR2AzTKZDBjBRg1MUkr5YTBn3erCw7myy1USaPNmCkuicFDo45KZ27",
  "key23": "JfiYX47gM2bNnz9PX9GddsSSMLESyHu6HoXYERianN2XRjnU8PbvZyaqBXCRXszEuZGm75Qp7y1Peq3hjLaVnnT",
  "key24": "3j3R4JDwsev44juWh7qyeE5vfdjNuCmR43UFu28Z3kze58Sk45jQ2d9p5D3XC56mfeNWdq4n1XCyh8qgVUX3TTT",
  "key25": "6V9btdJs17LAEE6hdiQRhMNF54hpsjikRgkA6FnZwtiuQs4Q4wswVihAveTEPq44ZGsXMrmPu2nrMT29X5L45y3",
  "key26": "xSyivvkr4Bnoj4sFqZ4GZZSVkpK2XVNqe7j6GuQ9dJbrgSsiFR51dCnD8by5FLZxSE1pfwdJ5bb464cmz9JrR8Z",
  "key27": "3fAxzc2FPWS3vDbTn6TEb8bBJTXGQaPTa4t1w8X2j9c8V32GmAx8W85tYAQdyGpqiu2jbX5pYgxR5k72HEiNZ223",
  "key28": "24T5asLWFBiUN77xBKvARroyWYFMCyCVW7xogZtWjWi2wM9D87cnPugGDKKw4H8LrWoaoCDrbW22EQjf5cPwXTwC",
  "key29": "4MxiywLT8LHUzBMgMLTn35eiPDq3Ydc51NXYpRetjSFSUqzCMLFWSyy7BiPmBtDEAnaHtpHRs4v61Cz5acavFKKF",
  "key30": "2P8z1YyVu8VGsE4juDDAZdXkJmGeJpYafZYtkG9w7Mjjzg2f9WzrkJamcs9dHFruoXgNxqehLmZcuF1mFfKMH1Tc"
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
