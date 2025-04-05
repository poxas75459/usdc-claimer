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
    "3XNXcjyWtSZqtNWdEtBBQeCo9QJEBUrXihRvSsxpg2mW1gAFqqExbQhEJMW3dbBn3KAWMYJAbfhcR5b9n8rx1mSX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z3Z8C4VMETZbS2yTGmRSTfCUQVNZJ8mWjKErpXJFjqFhqLQHt9fJJ3rdxDGHFp4G7dA8sSupxnh8N5vw86efPQ5",
  "key1": "FU6Au4iNTiS1dpnV9bqhxfKz8v3e8ubJkMn2byZA37GQGNRoJp9fSNpNXtSrmyCrSAoc6yhtegSKi6kf7Nr7ntT",
  "key2": "48fiwnvoLqShvp7t5Tc39GWAsLxZ7aLwmY24wuANxaYYE2nmUSFGztFtSZfyAofNfDWvPb99j6NMDKoieDnWWVYE",
  "key3": "zeehjnq8CTfadfidmMTkZUd3sCWS5Jti3scrzJtv1wMjcfKuntyUtpCYidvMHWSCYrhJtUGwBF2CiDxvvNjTAxL",
  "key4": "Due63pdGbD9m4Mzw3kYqbhPoRJPZEQfyjKu9sPWoNVgmtcNY6N5FNgoB95QtYsVF4Vbo2y42MnfsJF5h7M2D46c",
  "key5": "GYqJDcsbJAopGcEg6KRYzuZJZ9LYsPsrJDUJ3VvyJ2ui7nxkJL8jXD4o9gB55GYYwddphNofSCh8Gkq1fJJwj4S",
  "key6": "5YTwLSM791CYdkyKwa6C2SV2Vh6pDWYNtAZHosDNfa4j5QvyoyDBkgMKWanSSzi2DcTH6vLymNAGxbMYY2ApNQbr",
  "key7": "3gAJ2AjikZdBeSDNwsoFTsSHEfNp25E3K4vW4ekYeU6uo9M1FZd8jFkpEYqwuGtmxbi8XwnLc4qdPnSQVjnLC7gA",
  "key8": "3G9W9tveWduDGGBptafhozr2ohQh99U6JvbCZJruuYBk3GyBK7puXaUziYcx6Ga23J2GZ9DAFrwSXkLWGjk5hJe3",
  "key9": "dDTDWmi7jkzAdK13MPfTb3YuQ7EivSGt5tAiAQhP6yrhmsipwMMrphtNZBistd8PRxzh2Tkk47DvhQqU1fGamWg",
  "key10": "272qvUspYBvDu1iMB3WdNe6GA6BpcLKHMWP7Pm2zBb61tBZRvsuEryvjpHHCAx8JvTLq27a5GH88nZG6a66RePsQ",
  "key11": "55mxgN5ntipZ8wj5VzcUorbwF742ywJSGcMVyQeREG9SUcWoxfcQyAPirP9xYQb9nkRzY9mKvyJ1hqPjgzxE6mqf",
  "key12": "us7mytCCRjRtPCU8eFScVKBK3NvRfqs6K2ycRZCN8fFmDBBqa6DBBMpbdHtaFTaSZGNZ9zMWxTSpPHWcCJLENu7",
  "key13": "2tfjpnSgdvHjxiSQRUvVqdFgCqFJR8B4xxVtj4Ls1hW5kzVgToMmFMvMWv7EgNk8Kz2fkcDxSU8ETDvyBuX9deoj",
  "key14": "3WRZ7s7SwBP6xjfhZzwBCcVDUYys2HBV9RekX3QwYuLN2Xomm3z61WRYpZKGTiZJwRrit997kacSMZx98JXp1JSo",
  "key15": "5zVKZg2hrmq39bzS46R2i6RFiSN8bUvBYnEMu9N2r7FjN3T5DUzbdHMKkpRgK5nkbpW1pdVMRq2t3418JAvdgfM9",
  "key16": "3cZzDDm3wdJVfizeXjppsW75EXfgHz94DHihn2WEGFizq5pTcMaPJt2e9bWZZm8ESQwHGpQ7AXpLhycKvL7D3VKU",
  "key17": "4za1YDEpNepwGCaTiHgJ77X75VKmDtyGELMVQpNrvc3dN4YDqLoRRJSddxW5SKAX82ZEsjQoXHcMf3N1rFMFZcA2",
  "key18": "2Na9H1g6C8WZ8Ny2xB5tHUavPUutBczkeAu3tFNdtPA9PSKofT2DACWHtJTPpKpxtJkMQUpfof4pdFYry2L6Nvs1",
  "key19": "yB5dMnpJaR37XUamqN4zxKRVzyev8EKEPnLbTfhdGa9raWWqYVFtxdPk1jPdC7Qym49MVc6NbEiG9jmHXPQupgi",
  "key20": "61DckVcdGC4vfNAymKJNLb2LG3wZC61grvFigd4JajBjPvDeceAhrdpJvn6ErmU2jqnTrmCmXggDkqBadQiTdMSK",
  "key21": "Jm9bMHmiQdXcgrkCSp3EkSL8hAGcGL5zvvaaQ6R8MDE1B8naSBJzyYVwDG6UR4BeURfGSsDXbLHonyDCoVFYRVK",
  "key22": "5FVboCJBUEUxJfu9NAFabpmq2aUWh5Mc4Rk9C4X14LrcYJExgf4c7a51HCtiA9zejfJH5BpNEHcJZWC4dTUTzi9f",
  "key23": "EukiHwjmtYeTSaXTt14jAXREq9t9ZgFgZg8YQSJu9jATxfvAC1YMYijH3kbLTiBh1VmZpC5A39oRXdjrAwAFvR2",
  "key24": "2fsjn8gfNYqUdsV1Uy25MmEq5TWHE53xr5QVtf8YPeSjbxtTCKR1KdWZYq4SHRnKi35L3gDJHEgu5FSyK5YMr1k7",
  "key25": "2LNoEbLGpftcrU7TuGpGQc9AgrXEeWmckmsz6F2ZNYNKJE3UiGMYWQ3Tknqh32DxqGC9SSk8NAytzCHxX2dT2aYd",
  "key26": "5e2c9b74EeE6ydZQgv29dEYdfTAJYR9YXjSH7MUby8PxQFG59SV9xGfdwmseVR5Dq96t57aWG6td8DQw5a3r6zAW",
  "key27": "462WPzYJEjJ8WzxQHNLnVJWvTeHB2ScZRx5yfu9hVEA3LZYZc1tr19DVmPSUSeh7TXYtffNrmmDSX3rv3XPSAVNn",
  "key28": "oKuN2fk4AgRdx5Ky6sy84qtJ4gwgeBadxpaKNPsJhzYEPB4zqMLkmvkjXRvDcPBZKGz4HN8TyAP3r6hjjAE2yqy"
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
