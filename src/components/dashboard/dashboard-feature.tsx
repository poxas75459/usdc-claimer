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
    "7QMzsdmS9yX85cV8qZypCLPmFo79gKVoVTtszgUSVxpdUrSGoWvMnHVD1phBoZ7gN8xdqK79TcM89wNkeE4KBHz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3okKjiMowz3fZJ1RVmMb31U9ppoH9VRrLmbzatka5isoELfEkZZBUP5HL5kN2jfTamGXy6XMQT7Ppru2sAPgpebZ",
  "key1": "485nWBkTuwq4Rdvn9qi2wiFc8EHBW8VhxGSPssy6J8VS2uqUesVCxeYNWaKh6w62k3gHpquGnvmBS5S8zbDU9BmS",
  "key2": "hgnb1amzbFeJkqhJ8PQtzfciFobePACs4wk8VjuKVua3jMXFg8coYqTtmq5TghSUKbHLLonaeHQQdGtQJ1c98QR",
  "key3": "4RedSBxZAtMoNPJRx5wjoH8aVAnnu6oNDWUxE27MHZM7GFtcDZiNeL6ETUcb5NCACppVAcn5YbsrHVmLGUzUGBr6",
  "key4": "2HM84D1hvUSSCuYa89Gz9MhhMVp5b1UzX57Fg5dP3RRb5FysE9QQAYotKeL4U1yCwWyoMqSWdjTzNJXc37NPZqCi",
  "key5": "3gr696kL5sznHXNAyJvKN3ToQWt8X9Wijf4738zUAPxMquQW8N2QqmufSxXyoqavZ4VkQ921QBkpK2hdJHgjH38F",
  "key6": "3P5FYqn31zVSGLcQZaFwd3KGqwwRBcTs2WwPGh5ofyQuVishLugPAiQZJxJft8V3at21P7FUADSrGk8ZipGMiG47",
  "key7": "59Lrca4H9h4QoDNdC2NbPgie6psirSdWZPe1qhTLzrW6igBa88483UE6Djka4JwMXiumFuy4AHvZnmu4NWgnjmDb",
  "key8": "4o7ToHdMNftZ7ytw8qSZgEZhGGbXiiwEAfgiExEKfDECiZEv1SNQq4Zg17rU2TLYwpS55rNDfw1zYK2yyJshF61S",
  "key9": "bZzpHF41xC3hi3LheXR9NvxusTVhy67Z7DecxExQaqT25fYNiYeTUVqZpvAkW1wphdDRPzuUnKxrYogAE5jBFbq",
  "key10": "4NgxEJyaQ7L5XeQXuEwrR4RueXLmzj3HrywcMeuvJKc9CwJTTiWB8Po8YcSqDs3a3hXSPCh9C59f9yWQUnt9G7kZ",
  "key11": "rKHmyyVK5RhScVP7d6jreEadFDs9afGoTKwSRVuELRQuVRoLZDpwigrJftwgf1QbP4jkrXURpfmMkhCf7RTu5Xp",
  "key12": "4cTkHePfnTpU7uCRUnhJ7eDo8ocdbsZU47V4UnEktyMg5J3PXbVLevV9x5QqniKBLKondXFZvDXnqH6RxHJpuWdY",
  "key13": "5mPq1odR3okLpM9BCcDBtYztyxPpEkXXAib1X1ktHxg4ctoYMkgjtWNUhTwbqNR74mbpTWWAgMmbtS4GXTXamuhM",
  "key14": "28kwFr6nDqnPagqR6SUKoF84MYrFUfLXTpY5W1XMNWATTavLi7hiQnHW7v65ELM63bEKb92cZDLos57ERkC575BD",
  "key15": "oTGzZmL4xqv7bw1czjgn5Qk8PmGgb4DepVkzcXr3foX8aU1HGpKngLV5Aq8BpoJwhMdd4U3ZeMc9jPxmDQ8fE7L",
  "key16": "4W29xs81kFZhzbimLPuefVHkrPJHYmUKDP2yHqszNRbXzaiMjpBWRjLwVg2zXGXsaSokTFLdxBmBqcYPR1dw58ND",
  "key17": "3Cpf1QttAo9SE1wKwbM87QvTzBgj3FrcmzGyGodTS4EYpVVKEzJA5gwMoup7HKKzShkCaaEoNdcHYfXDshxHRZhV",
  "key18": "3NKZ4NxMTW8HzUTh3ps4c2inrepGrwT5VGiTxu5ycjvU8oDkVKGZMoboA8zghqCKu1Za8GgbxLALoHGyJDm5F7B7",
  "key19": "VDkxePhN4EogCR6Z5rZ6NtXzqspyRoyX1Fw2JBfyGhEsXLU51q19G8HaDDAShfoC4cNLLJZx6ycrTBE7qeqqr6j",
  "key20": "5gt8cf7fgDk8NVL8z2AUPsZmhrqWZWSVp8PpQo2NaK57RzhDg3Km9Bje68t3nYWUpnkhxEvoH4WAFZhgpaG1P6TS",
  "key21": "4yC9oUXwzcyQcfhZi4bCLQFqu5CfntkAN914PNkhyh9ZCeqFfifeNzjCP9ssxvHNurienVFP6ccoFHA8fmJB3CR7",
  "key22": "6475F9EGXgNWWPHEiyikLVChzADLPz6deWXfYTfKU5igMzijgFRJJHmXvn112U5DrBjT6PdUSmLdff4ngmpMpG8b",
  "key23": "q1LGmMEecv1Vzk2BwY5FXHGG1UkEd3jrMCHkMhQHguQBJo21bMDfCcYpVtoQmvk9XEhmLvJpxtpSomXUj9ATwMc",
  "key24": "53UyPrTZddxWM8PYKaJL8iBns7oViWi2y63J3My4ajUPHvCnpenRG1g8KRAiZXv357hLb3JVjQKnUCDqzLAqkBTF",
  "key25": "3iH63eD9Q1V6GyG7YKixviVEBAwz2thhNAifgDuJ6dJWEh4xvPXaUsKkAyf5oMb4vxTejkBSoCi2UXEbvDX3XgHv",
  "key26": "2nBQ4LuF5yEbhjgPHKFvFmLUauYkB6cET72HcJBV4YJKuCCydnoxXf5tnMCoyqgNzU1ixrmztBTV7KVqH3AjqY49",
  "key27": "2TDrhVVDmmCHxZzxfScGmrSygpPJSYsvCScLC25JLFy8aZekHzUnPR9PB5ZsahSAewauHPjhi9NPtwB7g6L7ZVGx"
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
