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
    "5ptVjZrGhJPWQZH1pt3qvgznuGQ8PEbwshSD4TK7w7Kn6iebAx3P3jebYsL3KBGDggQhrqhxe9TRdouYoXD9t5XF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T8aUUCkcJFcoC47HHwpApmmi2zCVvHLKVXazBPDo3h92JJnBw9Lrfz84rVaMDF7v331WcYPss8GUVVdwfDgsPC4",
  "key1": "4RTLiF6AYDJ4auRvrgZRbaf3SHrxWQk7W9AwBxFGQN7LvM27jWmAzMXKxmK6FxB1G722v3G6uSV8dqpTTwRVQAbv",
  "key2": "52azJ5cvqF12zmRi4yz1xcACWe7bygnXP2P58ySZ2JM1ce2AnEawUimB8DBAJumbbfqdrZj8S93HVWTinTNzQwT4",
  "key3": "4E47tkxA2fjszvJHTRZhGq83biiVStqbXo61peLudFFP2tEboegfrcQwArigoGhpZLhWibcihcyZpYXAVkhRTkyJ",
  "key4": "5MazVw5hYdn6MeY7AHb41uYuWHCi7Hq9zmox6Tv6BHLa91Zw45KxaQhmUghJ1kHHrk8UcHjhfmnZhbUy86j4tnki",
  "key5": "4wy8RzvRQ9ii7JfRn1fjWoZ3Vfu6CyR2RQtK5X7tTTmG3wRgGczGbdVQVUDcMgqXJmRZGj1wsAsDkm4aKHz7NvRs",
  "key6": "48bZbh8eSPrub3tn8B2KUD8r7iTnpHH4uUfhxQdc5uTgYsFDG7x9DsFDTomFi6oG37eRQ1BSUdBgXmMzAvrsSi2x",
  "key7": "3dtxc8A2UPBitdrVNs5LVookjfM8JbmPJwmnME5Xs3fVsCkC8i8Nc61MbcLPQhzXwCrDt3zdhnSwZ9GLgeAuC8V5",
  "key8": "4z7m1Gng8ayQfTfFuaWmGx2cUcx7rVoE6RX8RjNBy74CYDwnAEB7GwqUyXP76a75MvU5kwPzCfDguGgdvpnzEear",
  "key9": "4LUQPskst79FFKnyjDG8YU82ByLw3XfxFZpuof91XXLB4bSRiAHVfnztcuQW9riyfNqrrASqF77nas1RonKwuj6N",
  "key10": "5GuPDxWMiUqgAS69MwzNuHXBssTbepZgKyje5AMgsgbMwYHuAZqYY81sXntABMw7LceSCDK9SovzB8Wd9Cu675D4",
  "key11": "5NzvSESNvTjqxUxQEJvt9r9NTMQaLMC1KxtYUPzebqohoVW4WYQvVsh9KRCbhWEurQdRAjmmh4gn6EFhpZLyNeP8",
  "key12": "5Xkw3zWnKBTi8aFqLjEUe986RSz3HissNZoM2Cn3YdRNLVAWNkBvZqbEMXzwLpHZoSLrLbRLuVMcuh4XWto8QPb4",
  "key13": "2f7t4arnkwBmFVufNkWWn94CjoB8JtgPy1wDABiNTaGWXa7pHujHfMrEGUuczoMrXmE4Ki1RXb7moT2TPYATrwfh",
  "key14": "469HJQG8ZrfioDLwgoY3rqYDFXPLZhwspafiW9qdpgH5L7gog9w58axZWWRMByAN54UJuJp6sZfaVRiKiSWZp4Ud",
  "key15": "3kqWHEfVgeeesQsuSc7khRMMiRKjutruekXAvV2zYaaCeEEGRKoGFKQ64ni5HRzBRZqzgrrCMEY6hMh1JbapV3Rm",
  "key16": "3wLBDHxqNrZtqJEWVr1mGYgd4QHg5KrAR9qB5z5riQrgudSVcj9ZGQqy9RY3KsgRAuzrME6Ry2wRPsBwUaJ8vGga",
  "key17": "2SBu8oSimgHqj3KBDrSGX4gjTuMu6Xtx8jVNRyNTMqmKTyqVECAxEFSLwxsqL8iibBZT8T4YuFhUixk7L4r26mfe",
  "key18": "5NJMxNdwuXkQ6eWDfEFAsLy7xBaeJrXe3QHDxHoXoTqGZsPNLvdzUnY77yJC9hAjkfxD2xRMwNSkoG3m3Ccxnqnx",
  "key19": "rJu66EB1i4PirXFL3bC2VRuQVz9WRnPKvJbcrJbsjcQdS24obAS5M5wxaavFGUxPpjdtRo4g9CL235PcN9syWb9",
  "key20": "26QR3xUb9fnBLY2X4qcpxEUnvV4cP4Wr5sGzsDTMPXeJU4f1HHnS1D3TUUQoyT7o4zCPgydVx9EpdKRozdyyVb2v",
  "key21": "5qsDqfo9PiBfeALkhAWPv1CGtepGG5gi5n5JuqHQzPHK4S9FtfZD4wmb86tJpMA1GwKAGM5WWYzXVU3LhsyxfoWd",
  "key22": "2oyJfo6NG2CgfGu8LtupHwatfHx3PonTJyihyFaqx6fcmAfUfuTp3Shgu8jYon7SzHFifckMf9FWhmqBcx2ftDVk",
  "key23": "5KHLf6sJPdtSHEZcXvzPAcaLz32t2W6Fgy3fBEsyi5ApS32mMjufC1o28PYbaD9pd5nQA6o7TrYAcsZvhWLfrRcX",
  "key24": "CvHnMNy1CfMkEQQiuK2VnFgHxbDWdq3S2b8kYvGwXsGbqmPiDwALwVXWnMAKNUGkaRDG8WKzLUHHfD48xpqqcqd",
  "key25": "5eL6qxYPRu9VgQntmA5W5uxv5bHvzMYWoqpdbkEfnCqnZ5Uy5iAYY46FTSC7UGYgPb5MNNVo8cEjmNwHc9PRQAw3",
  "key26": "4p9nFNs6QTFVdKX4R834i5M37mFfn4eBz2yQwNfHCxaDFY3gdLijwimVrJpJysnrWknitKhn8R5ML2XAkmdLjc2T",
  "key27": "62Re8WVCHf8rJAiKm4ivPFNAt4XpyFSDmTXowRWeHoaqP77xKCDzfQLWfSAzLDnsTTLZCNhb9YS5t7CzYHrLdY1g",
  "key28": "dwqrJY78ueyAmx35YB1gB3XMVdBWr7p79Pta4PVEtFps638wnyQ61QQ4ktNiR9GjDA6sUD9aNKnFSyVvCvnZ541",
  "key29": "3DtMZ4KtWEPrT7LjFfNBqUCba32B9dsji5jkFFDMjg3t7q1WfEeTvL3D6a7zGGcFyTgraXsddhABXbs5MDxjb2ph",
  "key30": "4mpkX8SV8aiio726LEJD2haMfUiCS3fRhsfjcU2wZDUa1U7Ne8uAyFi3o1zqKCrVUaApPAZLy4z6C7U7b7TRChvJ"
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
