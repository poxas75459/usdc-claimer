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
    "dXvvwDLzaZRsd7KfhxeBk3w3wz8nbmJ1NFFdAqG8FUNyRPKa85v2ptY8egZxmwDUeXCh2EhLGofniWKJBpu5A2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RxnPCtuxsoxCvnD7QFkLw45enmybs2iNU6CoHoWa6eiYhDDfaUmwniRouzHK4Pi8TdkfFye2v52k7rxKWaHEUVz",
  "key1": "3WNurbzB7kxuYsZVDN9wZw9WHdwx5mKc2ckb7u8QbNfpZNac2uKAhvbncUHkgqhjdVVbUEtsXn5W2yXaQUD3BxwW",
  "key2": "4ocQuScfUgNgwWVQv8qVrLMqCa2NtMA4W74jHaDxcgyVDbcW6RHvEfLdxcFPcqP75SfnJDszmYBkXqTM5JP4Mi3r",
  "key3": "4RV6QoyMTJsTMXu3HTZWgGZXCEdU8K7BZ5Ev4vRjgFaccPbZi7hYr8hgZq3JGE4HyokYQZS7F7w9ibfWgEP6aXe9",
  "key4": "d3LcuNGGazyrpgDnQ6xgkjCMNopFCX9myk3dB1eQuxXqGM5tzDPqpHxbkGbNbk7A5J2jekschdR8k7GhUABTb51",
  "key5": "4u32anNnDgaDY9ZGxh8B2YYhhu2kcBS2DvbsM25Hh4SDidBwo9uiCM2jeW2Pe8H3uiDXBJg522u6TCcx3NPQRyLa",
  "key6": "2ow6AfAKE2bx3PRux8GVuBnSLt62Q9tXc3Scu3AiseX5Whm3hviUBXyD9CxgwjLbS2TGEDRNofTL3tB7qEgyzxQU",
  "key7": "34fTBE75WBPip6Cr5KydgvNdU8sAyuEVUbnUifD8NgVtXdkbTRa6p7zvciabAh4wDD2nCHpDJUijwaYdyAKGeScM",
  "key8": "3hc5DQRtC1zSSM1DY1PtgWkLJLwhUuGTP1gbPTKaSay5yfZ8zXkVbVjvmQGKPNUAWECe42HK9JxRBYy6JLadvwC5",
  "key9": "4Tj7mmdTRtZYSB15wiseK7kuyD9Nxyst59U8cMT8S5ZTghVuqAjFx3B3i8YJ5ntgz27fsQ7NWrh81F8Vw7Cd6rRr",
  "key10": "3p6GVBzFtELuu6aDmnyLSF2fx5bWhhzCoPQ3NJshE5HBiSFSAXf5LbpVaDBgJhuxYKzgYbN9VadfcfN2eBAYrhgX",
  "key11": "2jNwmp3gVSaB337FEDVu9zSoyYRDQhaMES8RiqfNL543hY3KwCuvvGNqVZejTX5BJRXoquRTuNJr2wx4i8vNizQT",
  "key12": "5Au3iE3XaQx5K8J5RTMpeUojcEoi1Z69fyLLjobVUQFSdLjvBQV9LzHdcH14QYWpuxdpnJBQyq6G7PUKT7ushRPm",
  "key13": "4Wp6Vkm9VzSYy2FsRQgQNnHdU6xDP71fR1RaeeKtgeDtSmJsDozxu2NJ2pgpw1qaHwwPuGBeki1w89ArJyuUvP4g",
  "key14": "4HDxqUoR9N9pLsS8H8LvuEoALSHU6Jo3r8bMtHn7oW38f5F26s2g6AuTiXHRcr6pWPnhv7SpoQDUjNUfsCfZ9JS3",
  "key15": "3dGzdo7NKRh2rzkTxdYMNQ5dbEA3Go3XsE4XxccvJq6x1vjyBrPkUD2cpazX4LFf2rTLabuegZQXn4HeP7fcYpu",
  "key16": "BTRtu5SMGoBUSpvXdzVi4yaApGi3b4Kn6tXKXwJrRevCGijK6DEc7eXKNDusz2S4WdjPN3euYyw4r33c3gygy2N",
  "key17": "3rCzZsZUvF22qnsULwy1thJNESufCrx1iDUYxjRMvVCG3MGs5SMizgTZ3V4u5Kfecx64vBHSf8jvNuayDWheHGJ2",
  "key18": "45yQsw8ipheyQrCkWKouu4R4LHiJpZcrJ7qj2emT9jher3VcCjp948ustYGhjpeREtGCZqxuqYa4ZVpNbg5CyCQD",
  "key19": "bjAa5dLgn8nL42Sx7BDeWT8fVJStGJfeqvhitrQnPmEju9yfqiqdrsDvw9qKdEiCkWtncB9xTgkTCYs9NyL2TxM",
  "key20": "47jqFwDLYMiBLGsepUZGNYiuJjBguk3VJQLFTdp1xg5szPFsMpgAoNKEyospGJVVQtTNGShv9jz3dUWEkC6SDtdh",
  "key21": "szs6RtSUcTYjnkaxwvZzsB8B36A4xCypQwj9MMtk9Tsk4RDAB8pMxFGYZUCpsAgj4DytGzxW5disVZmEjr9vTKt",
  "key22": "4L5kUHV7cdZPQWbEN38iiBkWvzroxHAv4VEAsmu25TF3GfRF8XVWAGFz9aWmMVK9md9YXUbHzv5TUzunCHeFS7VL",
  "key23": "ucZWs6XgmixSxDy1hz1LqP3SqfzutBnCcWioWnH6xyXWSwfc3ERv8y9Pz4pruv9G6RekuQCiaBEK4qB8NKkuBdZ",
  "key24": "2y3xgE2PwdERwTpUH55dRas1gAyFqfhz7aq6PYZWwgTrzGjNVpebBStpzf41xD5oB1JBkWhLDQBGYQsqXbUmWrjh",
  "key25": "4KS8QZ5L78qu5cJnN3rHaBJbiUnmZdMGucWQQPdjPQGBfKDErUHwYeoeY2mmTcGvPR2jJSThekCuevfWFMxnHxKH",
  "key26": "3LzeKZyDToHgxLNQPccTBHehzVSem58sWC91w8wB6CnYnJ8KPDGu3myG12GVpVfyGeBYrT66upaVoD5Wtjv5c3k9",
  "key27": "2vmj7PBSrJxvgiFsCicAoPM2QX4jdZdoEmRmSeKA7vTG2xyULPA689eh12u8rUBn2abMhgxU31osL23WuaNNCKmC",
  "key28": "N5PRmxR6o2BxQ9rNdikN2gD1fWKuCj3AQMBefWenPZue8JQKCyyYr6fXMQXuTE5cWXEik3DXPQa2DGhpbfkFCa4",
  "key29": "2DJ49hopBESsBSVHcvecX5rwBNpXXAoYUiA17youBxfvvQf2xkDHfcVrgMMTCLcaBQbG8QpAL1NMRBaLFYcDxr1G",
  "key30": "tBMsX2fFNe5fGrpFpsk5uqggspFR6p4NDQKNrFHm237uVWzTbritR1RtQzYvGhnj5RFjnLxff8ckPaCXWm6Lgnm",
  "key31": "5PHu16EeQfg5mJNnHNc1BumasJufhjMx8PTCPnETXMnPi5dyay3mxwvE872iC92rf6qrpCwFYdnGbsfLNhu8U4o2"
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
