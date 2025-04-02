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
    "mctwShnNoSZ54q3YJjcwoobyiebTR9D9QXddaAqgvPJLgGN8WCXK7ud2WrDM9byGN15TKuc5t4GNxAFVUxYrwTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eaJKJKk36vTqVhV3v15N1Cr8GYoDbUxADzREMm5dZC3v6QWYcC6on4Jt4hkXs1HJe3fHpYY2g9fNhz3X6ryVcao",
  "key1": "QUoBztoyMjtN5YMvxctVxSsxoaR7Ro9JTSMy9Uv72tmRVW8e8GGz4CjN3kBNb6yMVbd8gxBGPP93Cd7GoABEGQk",
  "key2": "53o1u7n7beL1qEFuYRi4NmT7oF6JKVCwth33QSkrDV9oMDGH17dNyaLk9FtwvErKT6rgvMicRKxTHMQtXkvgexXU",
  "key3": "2fj8MpJ6fohR3TG7fAV6MZdxxemjPP7P7xTjhGjsUhRNguTi4sTzoTERce9uVhdEN4HmDJd61HpoeZvRJn6HpSYh",
  "key4": "4CFkDWg8VctE36RdaFGHbRpDLC1f62LKPg2raG4tbT7MihZyLbnirajXe8HwdKwDyiRzWoPANs11omLN6q1BG2ZR",
  "key5": "nWhGVBD2MnHWg451geKKcHJBNAnD99JL2JvSy8X6wRTAb7SyGFZFWVvPE5ror5qBoY6gPRaVw9c1Y4fEEpgZQrb",
  "key6": "3hFzKp6oH3okamXe5nRt9smyPceF98ELMrQXkxRUCoaGMtFwdWhZA2nMYXxtRf845FMqvFvWF2yWAbH2x7PkAwFo",
  "key7": "2nZRG9sf8htMXAFfbEuYD8kipsFL3PTWpH7MZSSt3hCSjmaQbboEaqrd9RKZQpcmUYPcuWH61VVAbjo3ucgQ6xSd",
  "key8": "3jRGBnV8isdojE8N8adRHxfs1qxKfJSLzJfFVUNhUrgJfihiCvzPxS2dV84NL97SNjnxLMLXCE3w6i7EkNgaDErM",
  "key9": "Ry3MrfftbX9JqfT5QbNTxMG4H2huHmGK2LFPKAeGHTB2knpWwe7C7X9PHGg8Y27bUuEQAoSrcfjLgJnRt5e3WaX",
  "key10": "5byQU3kc6sD3JLmz6VzEBWdyZSbZZZrArw1FymGc54H9STY4ZshrvwHEPTk6pece7LchFS8XA6UPXE9Ni44ymFgK",
  "key11": "Dnu1Vh1W548dfTfntu8qkVdTrce8MhdpQdJspaBQixDyQWEQ3W6D1ziXkKXm6Ptu1jiQFGwcdQDJjtbDdDc3hod",
  "key12": "5BdPuYYdQTzTVc4RjpbsZZ94qefg3WiDUx9rgD6TJQM7UQpFDqfqWJbPggbzEyFG2jza4hKVMVGSxWiEWjQ5h6na",
  "key13": "2myhjqW5Hq76WXV7oREyJP51X9cWRFkznTGyHMcbbc1FxfbdkGD2CwJhuMxDxt2CH2UURez177keHzfseUtuNjgx",
  "key14": "4a4HmPtQeB4kW76UJhg5U7wwC2LooXqjpBz3CwiyQXC8bUq4KBfX9BCpoRFdkx2obXfBZXziMvspit9N7U6WvQTa",
  "key15": "64ThXj7fkdVvzGiB66fsgSJgwBWPLgrL9PNuChwKM3fVsa482DM4iad59CWK9E1rcdubdamxnJoQAHjXYaPe7uSi",
  "key16": "2xN1YxRT1aeyFNdMiEiaAQEP3NK34m68ZrKci4F7vPR5xK5ETPCapHkE9LhcMhgNHtnJfk9MJKGcj3SteZJo9eLx",
  "key17": "3HRkYbDHcm4k1xxUuD7ne3dfftHHChJN4qPBQnxjkRe4CXmGvAezkQKfYkZkudKb95db8WeLhw3VpkRdHoE1ckZg",
  "key18": "4joHu9oLYK4rTtoVpbpoUVRdRd5d1u9BzFfrChi9V5TxzKWH7CQb2mzNGS5NWHLdnC633RvYBDoGMVmCwgMpDkLP",
  "key19": "5sFsEGyYa3XWpyNuWJz4t5QwskoBU2KJCmg6NvYc9QAroez7XnWMkCj5PmkgTAzLzNjkFP9fCbKVa6cPC4WoMqRT",
  "key20": "H5cV8yBFRiPtZJMdVtwze2NEgM9YinjTzi2kzusLacpdVohybuSGAJiiq9peAvBBvDXRxb1wTaVeAHgbNf3aLq9",
  "key21": "26t5AunhcoxQif9rZpr5WrWKydvA8FsqERvPeBZ9Czq3eW4PgVFGqJizRakJxSrSovT4CeXtW6WF3K6NxSdHMEfm",
  "key22": "2t7jdvvqEbFFnfTDMkXhQhxVkuEgsBGG9LcNRxUXiDPgRqte42yTgPJcKDLQKPehBKkrWRDng6VshUdngyh2SUx4",
  "key23": "4PHJP4osKxnw5aEa9sdWVo9nFNVSrKekAzuALYiexcSztSmmzj6HoMAQMMumAXoxfCiDjHsqyvKN8dFpcCDYdppv",
  "key24": "4LKm2gswjfBai8ibsTizBcC1NGpK2fYN4poPUoY1z1Q8esbf7wUhSh72dSMr1yCTFFD5dwfJGepnxRUQG3bvBmjC",
  "key25": "4cRN5d5vMhn81tzYYrcRJcMPrjTxfrocu5jp7mX2km3Z1gNVn7FkGjEBZKjxDjQSJhYoESWJaa2By4N3j8pzebgP",
  "key26": "2BEjLW9mojQzP8SuJjj88rie8zQGDmYE2DFmWaDkB4oStpv7fKZsp6whjcFEEv13QcyxtS6qd44AfzVt4BdmuM5u",
  "key27": "3pJPB7EYQTyRVxCYrRLw8dio8P7vC52qvkJx9e5uRGVLscRkdgqc2hSikZQZ7opoYL38ATDQxJn6hJncc2Un9uFQ",
  "key28": "49mF1GZLn5wZutW3noh6uSncLHj27nLiZjuBrnfKdqfsqv8HKUrTrFH5PCpSGBRynHnaUTMuVvFfUp7crsi8Rsdg",
  "key29": "65P18iBEDw2UQ2Ze36vKm7Za1vVQSBXdTTy7cjBsYKNamgsT4id7YMVMG2qbP7CxR1K6ne98gfEY2NoRnTEYQg6X",
  "key30": "3AZi7oTfq5neBAUsgYWyWB6DDvNveNyRmkRBUfZvd9MTjuSh6MQx6HUEQjVNWyK3s2QwL4NSZw3VHsPuWViu1J3h",
  "key31": "2BnMcQcxGq841aaQqUxVhGfw1gASGuhjCdC7jkU1pa4Mz1zRqx6VyYV2nfA1uK3AsJC2s7HTfaqfNqDpfwNsZBtt",
  "key32": "S5HnM5JTNFXBmqxmnZJ5BjBzoyQsFBv1L6sbPUbk61C5zxRDUSEpvFfbLJ1ngisr8Li3UFfh1D1a2zCwA2hftuu",
  "key33": "yTL3XE9Eqau4U1y9zjT1U8iDJW9r65qUnc1kxibAvBTZbUSKvmBrG9FgZN2bdWUEQHQdL1Nbej9Sp4998QfABtE",
  "key34": "i77NbDUs85KXicepm3a8MYj713xQKa3TAmjX3dKVNCX6tcR3jzdpHwkhPVeTN5GG8HYJjsB1J6yxEzZpeAbeFVd",
  "key35": "6pK812H7QuR9nDnfHVmRqu73uYJnYUnPMkWuLRaF29GpvbJBgbTwtCktDoCv68o2oSsMHmpiZAPXMkaB9q7DKke",
  "key36": "4DVxhm1bnuCJQevmDeJBa9NdY72xosEzsZcPzzQR32LG5ErJX7TVWpVuKEBk6XYadRqCGhem5GaED69qtkNJUvK4",
  "key37": "5AeZmRfDtNoXooPLpmwnpzgVX1QMqnaXbDGtNJixyPbVSP9ueAXpJrxgFLA3invyz1b885kKTPurKkpm2C8vmZTw",
  "key38": "3YXERR9cHMuJtK4udV1SDG8UfQ1tEY645Vx2MRB8itawfuJCaHxK4k9QGyKBfptZ24xuEkVHSqN12pG1zUAiubnV",
  "key39": "5N3i9VGrZ6ALc4ed8UF6poYNF4k3o1M9u8gYCgHy8GDrubWRksViERsKJWqGmUb1jjJidsdoEemWLciwHtpDst3m",
  "key40": "BtaQnBDdCQ5fNw2aYez8bswcmHZGVvjUbYYegq3bYoYUCRonC6ePD32jXFDUaefjRLttK1eD1byVApyWGoSFBkr",
  "key41": "2X2QTm7H2o2pXWuCtGcMvRHK9apTrVZkz5rQtrMzTmdK1pWeHUgVXAyc477yiXbxkMdG9y2HjjQkfR724yYDA1Lw"
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
