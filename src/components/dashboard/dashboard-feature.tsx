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
    "3Tnte6r8MntmPvV7shsrGXBjhjzT3DmFDTm6x33WwAf7PpU7wtSDiXW6XYkzN33aqiz8BNLKFRLajwsRqKQWPhVX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AbQ6MDmZqSemtWTzTRenVATdHvFadZwgTtvHx4CueZ4sJGU1xtAnevHArgutmRtYnxZ5oy9dXqdgEkZNoG1vkMt",
  "key1": "4JptXDMuC5WEogMmMsJM2AJQzE5ST7ah6uweaqRuea9Z4rubTv7qFFL63sZpSXEBRAEx69xR4fHSjoZN8M9HtNFN",
  "key2": "45N3mpHmVUmyjjcfEYzHhgSE1orRajtwKvchhmUrz31MLdgu5FePeMeyAZWr7nHzNotHkM6kYwfqct3BrcU9xMLi",
  "key3": "5LnYNje7fbuyjoWbJ3wVnsuLXQyyb9DUrVdPWYFqUNqji5ihgPuhbdHm4zWA5zBuhCjR9JKc25DLaM8xMPJxvQkz",
  "key4": "5psyCXCQdiPSERdQDD1R5xoXH8wXHfQPRSuqwL4ygLeWf6TiuCXqLyEeCfWMrbKT7eeBADwxj4T5XP9MxGG1TLcE",
  "key5": "4kqKVi96MWc1t9vu5yP5j3L4hGEY3xUJiRP6iiSrXEvgh88Yc9czQQ4PyGnP2av7jgbBqxFX9af1TDXp8rwTGehG",
  "key6": "5P7JMWQdV1bji53tfjkGRm8K4thGFxPrr4RnicKHqzwRNryuQgFrYSCxnJ1im5pmryqEfBxa6rqeBeZhcAzuWQCt",
  "key7": "2wvGtE67fxbrYUcZQFD1EMdXn6jei6Fxuxysw9zkznkkUgi5vLqfGXkSb15wqJmo895jRe3tGqfgu2UP3ZvmwjiV",
  "key8": "ztYdMyjLaQ71MuZBg6gTFRV8KrfASWrvkakq6vkVNaaNGkrweBaL1NcvFH4bfPboRCycimouH7LyRP6xUknsSx4",
  "key9": "65EdyQF2nW7qtf8xP9dK2bhasm7APaEUcH7pgHfaVaFeJXhKZfQNLCnrG2gNXV1xi6r7NrXnH1H2jRUAwrd449Tg",
  "key10": "4MYmuSXGLLMLFYoNnvjNm1HFSdxn9AeW3u4rbBZU9Yka3aHMKyTH99J2Z4DwDe6FWtvh2kwRGAcBfWbgfHUMXFeF",
  "key11": "3QAYA3xczyUeMur3zoWdRVXgdoxj91JYBFmKGRQhJd4HjuVuhYQ2XsANdEz1DAjP33nPLC7wYt7BVVwWvTzNmuFM",
  "key12": "2Hfoq8Atq4Rf13dHyCzpd66tZJzar8ahxkiyx7QmudQfuX8XnDcnEJqGRpzChYrAf7skhaXi8m6tNtYmXX3UBg1M",
  "key13": "2UPmExZj8uP6cKagyFD1REg9yHUk2rCRQuBfBYmWLVPrypMJV54FWeUXxLXQfjC69kXz7Qdptx8g9R8m72B6rsys",
  "key14": "QjLABNhwbTpJy5d2ZZYmjGbF96WYGBuzSLxfysx1yhWf2n4ELwHrvhbu59wypTxrLM3abSgC8eyNSTGwpEc6vbb",
  "key15": "37EKZpt4hKorBF6WPny3HxTRSrWvLk7wAWTmnt5c4hf1vGRDyoH2apfmPBThmzQ7JLfwMWYJhdpNsstuQ3gUTZJU",
  "key16": "uUviViDfCz7UBqTDvFP7jNqZmzVAQBxQ5P4QBqKSib2UfGM3vBdiaS1FRJiR6SFzt1wvWW4AD6ENGoMsE3838JT",
  "key17": "pnRytS1SPRYwxPH22n8bAqHEFmjCwU79EiXKWnm4FDL585dmPQv3RVjgnpbRY9MBPSNKpxDqWwv6A8w35dBe2jC",
  "key18": "2fPv9EKXDbU7KydSimeaL3aofSHTNx2BCn2QYxwJ3KLPfW5eqPJdQk7mD6Gm8GUAikhdaRTHoTdLmyTRMaJW5Ktz",
  "key19": "4cHocQcYVun34axdwwhBCTu3tEtMRamJegUoVDQsBgp6FJtUth9A9yXUcpBMQk6cvU1qdQopHvRQjujE5zWGVRe7",
  "key20": "33zYP9w5Ty3rT9mKXcqjo5rDdKKZBUxtLgYaZXQo3ewD5pMRsf5RysXr5Cp2hYKGaEC92RvGE4ZQu39uYQiTKfLv",
  "key21": "4phMMN78jd77zzk8ZcspuWWjoUTyXj3jjTv8mW3BnKVnS4VuEFro3zpDD1eCLoR8tAqW9xW1sWxckWD9dEZTHaZQ",
  "key22": "3P4WCrxFZdBm4Y1JdyiECezhc3H2tWCeEfqFqjunVT2W1nbt38bTDsG8eV9oPahf7M9kiZsRHbiQbKfeFzFg9ETH",
  "key23": "4TdEbTEx4KfqJUtXVHGPMBUfUrSVzE9V2qWiHo4tcoazqAqcVix8va3BFkG7c5mZ1JGFJjaTGHpN3YhW7S9woVhi",
  "key24": "66iCPVcmJQMrunSnGESJT2eRaDzLoxEBEa1nczjNukWXkoSaPPyAP8cxW4yw3RkumpgivWCEasUDoczE86uVRQop",
  "key25": "3rbAW88z4hfTJEHbd9XcPNi4esayAfB8DgLuEFbQeW8SUAWNPDW65stEteeKKqXRq6ZdkrpbSRZnrY3mhKk4BQ2r",
  "key26": "58e7HN91o7j1fHsaDVy2QHbqG6dCZtDqGULnaXy6jE4YtiS5fFS8ptydbZwNSTqS8pV86cPgowQ4u48k6S9ppFCm",
  "key27": "4vZwEJsJoS8NuPXtYrsRyUXAvMWjsxerRLr2Z7dJmUjfe7tBNWeMcWTpJcgmX88y8vUyDMY6cbB5uS6QQ4RuWuya",
  "key28": "2yBrdw1LLHqfacqLPutL7MQqBLEVcnF1Y186rPRLqXYyUSmo1cQCY4fsRLoBMdKdk1scSdGSUa9Z8ke8fETqDLV8"
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
