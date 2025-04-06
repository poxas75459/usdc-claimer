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
    "vKnacFTKmepdM64peBtaGr12LpZb3Jd6hNhf4WsopACSf8p9PvLx8ETLeFcajFRRYG4PgNgy4YwDt3YVVTVdGvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JUmYa7BYX3pbNJneEh9gxKnEcoVb8hD9RyGygtzWSQC5Eh28NtYoNGV4dT8B8YWmAo9g49uWNqazY3NFKBiFtGE",
  "key1": "kMSn9M7Pd8B1SFQSk4npdwxz9idh83x71Yn3sXqmoH5qBsMwrRJi6KkXi1B25dwuVbESyt6euT7ZM6dKicKEHS9",
  "key2": "5cz8TCBLjofHD4y2xYY5AhQoHKBLNX4VvaK7yGZEeungYTbjhym6B63wKfMtUUYoAbkEyGziR1Cnnig8mmchCu16",
  "key3": "L1FvnEbv67JHgoQJRuCtBbPg7qSnWXH4FpjAGQk8cQospAKsHuAQRCoEBJrtFqeqN1Y5nhVQGAynsrw72VvfndX",
  "key4": "5Uo6YiYidJJkrebAz13tkNard9NkcUfd4BtULB3W6WTC5qdbUmzjHrod6M2hEpT2FY7brcLRwcWAFkDU3qrMKNmw",
  "key5": "2kK4vLYnYEBBQCszqsXw2pUNNxXQhEKaX41FDPf1QhYW4admrhZMrHjQvZ7yqF4cyuZDaaaWnTh3dNBcwurUjE2d",
  "key6": "4ukrN58BtoVJMxW4TujYUGCqDisLV7EBumsqwFiepuSnnXtdsQ6CBYPHvbUVjkGh7ris47szWbHtYBEaoAhf6gVd",
  "key7": "2NVmKiLo5fpqUSaMNX1p8rnM6QGf7Pi2WrW31aws4kYxagyxtYzcPuVZ8zQhKrkgu2Dbwtk2EuavcX5n5Sihcthd",
  "key8": "2ANcUGT2GxQquHCYeo822fGWAmYP3cgzFpRapfSXpBzS77D85LBpbG39irKRzSHz59UAod5AiMpHxaMft1NJDDen",
  "key9": "3qmfdNFpRjuNnwGd6knJ4mSdzJqpFXGAriw9P8ZeZCC4NNw5fcqRxBMiwzR5qRD5NygZA3wVtMWC2v3Dst6ay4Nr",
  "key10": "5q32tzjy1nn8K3d9qQz4Qfyk85RyRWj36tiMF4zxUfwwighv9DwT32ubbjcdS75NV3PED3DECEV1RS3ySqQCb1nr",
  "key11": "4bcYjFpfif4q4pngRxPMugm3BCR7DN5W8CGNj95oBnRSR7W2vWKbumv4mwQPiqUvFqBDk8YrRUXgmc8ChC4Qs24w",
  "key12": "4xYJZ2CfYMBhSmJpdWhTKk9RoczDLW4tSPpbTymmN1jFQVGy3pfyDriQpnpZh6SRFQooNDsS1z67apaHnnVJuyPb",
  "key13": "67q6ARdYQZQ3PPKfE89hKzPEYkBeezyuVgwsttxzFgmKJ31S8LQhMfJvDRD7C3qZPut3XzhNZLVAJG3Z5rb6EoHk",
  "key14": "2aaNLhmAtkG449GmfqbJ5e4pYjYsP3iHFwZFW3BRxcgckdYv3yYZ7qezWxNNuBMUBdY5wcNVj95KNAcgxd3VJU5D",
  "key15": "pREBRkUzo8oXWJqkH8Z1oLm2rbzYYKKUCN6iKopBugofzfM19T6gQhwNxxFfWnZmBj4fxkGXG9Ymzt4uezUfgmq",
  "key16": "66BBR76finxCYyVZK2f3UjvPbi2G7KgfFUiuffqwWfUTuiHJJT8mxEBmkiuZTwpuD8y1HzJmrG26jTNr2k1GTgxr",
  "key17": "8an3VZd2hLfNj1ETq9twsh7CXYtVzAX5TrH1s9MfzF69XAczR4aHMjyRq8N21vN6JgQYm6YXRY8fiNo8TaBXhu4",
  "key18": "26JTT6exrTQVzu6AAPQwYbutASUt4AqVKeymdXUB5YvXeF2Cz9F4SXrzaYfT8WrspdQFKaq1nD585z8CCuX4jwSJ",
  "key19": "4TbLLhDuNHfBLTZJea8SGmU9ijjjvYp1oCxj14aPZcFYXAG3BFiS4kZzLwbFutSDmvVKbfWaqZTXvuJeiRRb4gXJ",
  "key20": "5N3i8UaU3jH4NDqbo1rkvivLbjtMcCdzopb687MQfTztZAHaAvQXNg6MpG9JHvb7nwHzzjRhhNU2XcFQ9W2vWott",
  "key21": "56EagtYzspJWa11GfmRQqXJ1v7tbeN5tRbM8TJ2kQ6m8nYot1a5HFXD6tvawa2jzqseBHAtv5hg9tceo7wSPZdfh",
  "key22": "kAsJ9jFSnVbQiogD2638PRSUP1eFaFJ8hD2443zivnqM8b2cbcneUBbSW1zSZM7VEDvtmFizwRoCcNsaZX1tYGG",
  "key23": "4QMsHUbicW5hb5ZNcZEjxCCmPx5m3gtmFQ2MSbyr8E7qqQiQHjt5V3hcB2Lb8uYEQoHDcVMhhvcefNBM9LxA2jPE",
  "key24": "4EtzcJobUAW9KPRrLVDf8oh9UUydBrMRZrt5wTbMPRSdommf7ckhv9uPMRg5fbLAReTf5ph3BoJES7kzk3kaqDpD",
  "key25": "2XHFzBiKtqJdk4jMmapYbVBYofuKyzvNAFyDE886rrAaNqsGWUp7WCFe9g7PQ52iwzdg6Dcft3NuL6zn7aYq9EH7",
  "key26": "2QVc7WADiH4NVb6eSoYfQtPAonBSvkKz4rbAxSGYkfbjT1L2xKzpoWB16snFuTFyFa4ixEBbZAxybXr54JqgVTf8",
  "key27": "3K3e8PSjMVfygsmtH66usyJQCoCtaWPUBLCyGqKbLGJE6bScoeG2LbPYdZF5RnRcKzArpX9wUo6xtBtbbmNVQDup",
  "key28": "vCMy7VeoVA5twBim6CCnKAXnLLXi9Gnabp38aH8fmNAk5gArBpTXY6kZGqsZwVQs6aGYynWKTzPdoun7mEBs46w",
  "key29": "42Vc5uE4KZcY8FigAUQjDJd9P3ALc6HRXR3dZrKz6EVj2cwxm6w7sUe3b8pRkx2Z5LaQisUUVtmoppZX1CczbqKj",
  "key30": "29tfxiSTVgtN6rF36ncx8cyXHpuqF1zPere5Cj3aEKeodPgyLGNYxXiusBoHhKwiJePVHRDWw7q54tFzPXcyQE24",
  "key31": "2mRdkm6mTKgXtRjp9N43UCAFXTTVYUe5rFrLVvATKHNBmQr65xS3PTU5vz2Bkd3TPbkrmZCQo599xukUy5aghFjc",
  "key32": "4y1UGKHXyj3fyzP62AutnourxELvN4QdTLhHrcoEPpFNHgxBMdt4GXYfZtAU5yGnHP11BUpSo2DY7ido7jSH59WT",
  "key33": "3HkakEiN1mBrfQhLdbvDPbrViUMuqcq98g4qJjfFaZ9nMER7M3fCc2haEPZocJ8QWbWrf1kLUS2QfBB1KUPhRxd8",
  "key34": "2fXaTek2RAd9WHTDRLwTLovv9ktaeXwSp9MhXX1x8tpW47YCqKEMjTZwGXBuioT3oF1r1TuTXWuNHo6Q5XDeWT44",
  "key35": "5EkET4QYvvFQXqcDp4RKbLBUC28Jet22wgQrMUQumzDwpFkggEH5xXp4FiRFCCeXnBdqaCaFKDyzXGssW3F1Lfri",
  "key36": "pNcjCEhUE8B8kydQR46hcuzYZ821HjArtcRSoBqUPLCsg8R7iBpsHWqpPTTrEzm774MqbzwbmvMquwjxrwVQHGi",
  "key37": "5zigiM5RY5eakyJqa3hsLiaXfiC9U7VidA2RvkRC4zHbfPfhowAN3vKS7TMPy8sEXbqz2e7Wpp3t6JHQ5JrnyZyo",
  "key38": "3oQBPRDYr9LYAct4MAZd2ZUr1Ad27Gw31uYrdjYTjVSxKLcJhGSsqWCVmjv1Ks7uFqyEHpWB5BV7rL8iCdwUETLp",
  "key39": "2q3CyzJmJAmyUpEm6VgPNfhzpnEFheLkDkRrocHg6Muxhjp6gx7GbXcVxhc1xHUaYz6XtJtJEFRwLqLWxpDi8wFY",
  "key40": "46vTgpFmKvdrbXKQdntHxRgiQmeSRfyghcjqZoCXqoYVPg77opAbrgRHR8gJoZQNtCGSUxmGLNhX5JwK4r5q5sqj"
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
