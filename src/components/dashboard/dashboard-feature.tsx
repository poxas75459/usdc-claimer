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
    "v8sZzCqJaw7ui1qyMMPFgkYrSmqQo7snNtDs2xPURqdJbErQeDr5wYwEdFg59pfNhQbe8cCfxV9Y7j19SPeyTrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tKqXAjEgePDzdgMsuJduyDE2vsgepdeJK29L7GqNwgL7RYLLNsX2z9Nh3zSrKbQsnp4FES9x15ttSmprKq7u7kB",
  "key1": "3KRyHcvdGogZTcN4aa1KJB4P2nSzZfhvfCWF4GbPQovN2mFvVBHDoMhSgkCvrKXVT1aCiq4DajfDYoPQEqFxsJpH",
  "key2": "4kRdoTyHN2cwwA7S7MJnm4PV7W9GNpa8JS9LFsFsqzbwvHpBDnMdiraihbeK1Yz5XCzRfzWaTZimrrtiRmvJKuMH",
  "key3": "5yj8q4bzyJhRS9kUeQCck2y5qWdwz1cCCptSDDxf4wdMWxd8A4Mhw3f5L9Yt2fWVqu5Fxdwmmo3LMPZwHZ8sikFW",
  "key4": "2pFCgehtdZByVzDGRcLJT62tDeVtKVrSCwtSELUDCTGnuo93ibvwNndN3SoBiD8Zu1QmiBGgb7KkRbPuNGAj6Qk7",
  "key5": "49127LdAeC4xFs8CquAbMzvxAFQrv6Wv9hMDUcMvJKUWTiUGKX7D4Gq8yYuaFdEoLXgmyqag6Qjd8VNKSZw1Wte7",
  "key6": "Ej9YyNZa2quLegLU3h7TaWvzKfvavKjLshsJStxf41JTZxUwYibjx5oEuGxTVBMmyWC9W66ZVhXbMuEjsfdFgkT",
  "key7": "XNa832AJaML7DdjfhrvELD2YB3nPGyJRaHbfkjQdh9dTGrQ8VWkHSubMTRiAnG4n3ZQ34j7M7QUSiVPTdFAG7iw",
  "key8": "w3X2cLEYXmaVsb32hRNwFfLj7txS2KazD45jXAC59kMdf4YymiGKUuSRx48JoWrfQAThCmu8w95Weye1maoquCG",
  "key9": "3CsLTGFwYS614Tf6a6ejyVP3QkPsXStdvUcfMBr1AcUw451eKz4cuwMTMhsN5AXDufUZL67ndSh9HG7NyQsJhhhU",
  "key10": "5Wzd2UUhgF99dui47BnxybNuyNuGdejoyJY1AgtRf9psH2MFnNjaiqeY9UXx6V6s7AHMdYt2WyBTLZrUc6NiUZ7r",
  "key11": "caRxdBfV9q2r9TrGWnnKnTarSMH3VcxotxJ4DKP6d2ExqBqFHXqeEPnfX5VYhWzxecBgyX8Xo9zgCfr2Gw8Dmuo",
  "key12": "UMrhj4DR6CchxpREgSUSR1jbuBg2QTMkogPMZpVBgYvp5CG8B6BGjmWyVUXrn8JmXocb1F7mKao29wLVmPeRo3n",
  "key13": "TfhjJYMitKFeFQeQ5gW3sXYakwEdhYffRGmxVNewvYQCU9LKwKQ8vFZTSg89i3j33rzo9KPySJ5hofjFPPa7ZgC",
  "key14": "5Q4xPfk54zmKHu2JDk45msv75Ku6Qs8Fx5cJaUsoEW17CTQA58Xhypz9oUYXms6szzVKJtom8N4GU8BJE3CMQVrs",
  "key15": "44R46neY1GwBwYgiB5W5YrTPLwT4sYJhNx5Aq8wxzQKsv4EjyxPUdPfWrgQQsBsZ52UNsCtmvgmaUKrcQkTuEmt4",
  "key16": "4r19sEWHUJtRxHeuDToJJRLfqceTDcuBiUuvuwXkVTMxdCqLiUGhGQrrgN3mSf5Ci6eXwrxWbUAHrXrDwafrLVVU",
  "key17": "46tsSaTjyMCGtQJdxanawM8SLeBc2mQzGfxPCEUw62C14jjtHhZLat53RChM7boHTMfYUkCZtthuw59XSdJoV7TK",
  "key18": "nSv56UWUUtbo7t1mheqVVTbfDnpcrDyy75dLhe9Nf6C4GLVyqrXJGH3TwDCgRCxMPMXy5PrUu5N9oxNmV6uRii6",
  "key19": "2Esn8mEu8rvtEhv9XGpPGnM2UM1GqbSAWGyJxd1Nxshp5QLA4BbyWX3uybJ8ar3UsE2oLo4uDACmTEUH8TjxKpEP",
  "key20": "5N9ADeESpyQuTjtVVng2VarKXSrz39KJtDv7VhNUcdAbWSPPFMXHgsptk2cYqc1q5xih98N1mV87CS7VRz4fpxmE",
  "key21": "2EDkuynKANCDMN7P4XspufVFtvo1nT4DUoqd8vRvsvt4TcHtpFHxZgSPCDBmZbn2YNuthaFDgU2A6C5aUTXEPexd",
  "key22": "3QaNfh1Nxm78Jb3aMRA49eeMMdkRhrhmDULPBpJZkvg9Nv65j1rREbhpyGd7cEbzv3cMt91ktcgNY36mNzoru9BM",
  "key23": "2UiGUa3yf8WANCMvxoEx2WCfmE7WHgnsXf5NMNvuMjLRxkWrqnc2TWDPcRn9zatjVDBwDbmHqsD71AZNDkZE8Qvk",
  "key24": "2MQudpnP8eeqHRMyhNiZ6yJrcjrWAo9o2jBMPjusbdLRDJS8NvpJ7Kut6A8zwEGLmGCv8pQzkaBcnuZmd99VGGar",
  "key25": "5TaE7LLStMw46eQiCKr8dcicnVFhCLHCmvZY1x6zojxNpHca9jNyBPcEb5MbFNAu7HYsR3dXmezNoZT6VyBngHoG",
  "key26": "5Z5jVwUuZ8C9BEFAeDw1uaA3ZsbLVnGqHYmse3s8wQtSqrACVwYqoFunuvCRzmAft9yAzc7vEfVPTEwvckDEXj3j",
  "key27": "NcCiVpk9SeDWTLbzV96jyMNg1DkDjtj2EVeY2hDZPuJ4rB7M4HfZHJFf4LL9mbyWSuDsV1oXRaJs7Nm7G7LcQ3e",
  "key28": "4a4vE6q9B8DThdFJhyCAayJHBnmu5NffLGr51cSHNRcZxTh8X4DZ4CgfLgSgoVaVJAwDJsonTwgoDmZNmdJNJ1Hk",
  "key29": "3osKsSLCfgBrd1X1V2jb324U98E6XHFmU2HWFLxgCttXFDbxv6A4kMu14efqCAHQCsaV4YYHkpqHbQxtXmy6a7qh",
  "key30": "5bBCcDcxhKVmYCAayV4hsxRqS3YgrDQf8hYAVfN6H6kR7w5MQRYujPXATL1K754vsk51EZYnhvgDpsR187GCMtDr"
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
