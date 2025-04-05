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
    "24Lg2MVGn5YrS4bZ2UVA5cM3gSy9mKzpRbh9DqpaFJDz8R8yv5KiuaB4YzszxxUFzjYeXVetxCP2PQGGosHAnjWx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zxyeDqDE2UT9LdW96NT1bcSPFsFVrdeaFTAkiwbT2hKmonfHtVvnSz5V6ccjNhEriYTbMWRDsScFLKdAXLvyk8g",
  "key1": "3r9CjXcu7QvVqBnm1tC91UQYi5UYfT3bsHU1vp7sm8W1c1rkBqK1EXrqn7rmqdYQsbhUFekZN5DkoGsgzTUBr7us",
  "key2": "46de6ucKGpGYm3f6HLrZK4PiyFPmpLwxGonw5p5ehoJPUNCuXfGXLqyE7T1C1UAfC9CVknjECnXqkspgH4dmwQzt",
  "key3": "5FTMsHP5nf9D2atADkYaNbNE9qbB4SvFiJLvFnnsk3iBjfoQbWAn5Q1JZwA9jpMxvaPzCn9xkCJ7PkrqSYx6S9z4",
  "key4": "25rvaRkMt1wXbHxKZAesK3pJKx4W8vuk6tcwXqe6tihvTjsHeReKAMu6fQH9ivvNFfnPGkgrTj9XgbnZR2u1MZXV",
  "key5": "2VMNHTRAQo6CeEnCyNDLKQSNZP3SNSDJQVCx8hHsHErtFC42SxPxoTf13XQnfdNkfaSRBupehwxqCdEwLpMEMhiU",
  "key6": "a9QureLZWxKbZKo8yb5fJmhRrFheZUJoHTpwG3YCtgqT8h7MXAN4WWpjsdTQMw6cHVUDZpgmuFQgbG3d1QPkEG7",
  "key7": "5vZdC8k1kBe7PAd2xoKS9vNVzk26hHneuAKRik8KQqjJL4npRyZutP1ACzX7invSiLPdoRsAmup96czNA3YDEb1p",
  "key8": "39StZ7LZhBrkWeRzRTeUhDFKyxURE8vbihdA6ff1oZdioACqRXJA9kyrVPFrKzaPNmGi4dNBkohhQDmwNxqBknNp",
  "key9": "x66ecAco6ES5GhBqcaCiq7v5WrBZgTXfgSmmXM1mbxQp7NVKs4ost7KBLmFgauhDhrHTXFdHQdB6Hv1fxcjgq3z",
  "key10": "43UKW1LHwSeHQgFiUoMdA4hc2U8Pqb4aLNs1hCR4VsYWg49i61k19R365WdtxrZcxhqUPjvHNh84VeeqajuSZw3J",
  "key11": "3ncMZQWGhYj9MQHUE2pT4FUfcRZbBwCVJqK1zQDGbC4HabJEwVfLZoC6f1h83K64hMya6qD7yKK1XFW5C5x4zvwN",
  "key12": "61nW9YmExCEWRKWAiXQDbfmmSomjsjHaV1Ls5w5QGNfXBiNVdjvhLxeQog6BSPkkPoe78mSUkQgMgNAKQZYJvpDS",
  "key13": "3iscZ2VurnAGUoTsvhXZzr2QnDy12bQG2EF32U8LERjuaaMBssybxLRKX93Taa7jfscnbSKWoZTbZ5KT25qFqe97",
  "key14": "4Ybbw3dt2wU1GW3TcF78L1Xx3JyhQm1WFhd5JZxxQr1tcJEjGKdyF6UP4qDmVJVLiwT1hDpBaCUxvreADdvmHtut",
  "key15": "2tYBPjzTJQRZnWD8H48mR3FrAjQFJx6B7wiBpH3YUbPaKnuX8eSF7Pmqj5b87DfpoGkm7SosshLrCJ2DD1Jn9CGD",
  "key16": "4BybMqsF198zKqJvgMJA1WVWeoYkKWis5kh1kYWfHhgznX8FDFqGHY2caE12jBG5ZSNbMHkD2cThE8Qd5aKKwr1x",
  "key17": "2PeNrEvRYMPH5Rzn51K4DMgTzNuZhVwthDydKBKFF7bCca62Aeq3LBZWXUvY973HyDWvcLjUjuP3r4pfTjU8Prau",
  "key18": "4k41RYS2am6UM2PngVE2rdcJMKtV19TnTYNhSorzPKM9LdK224evuhuCJk4G7SrPSQJJanAVPYgiw42BnAcpMPWT",
  "key19": "2uLwUMXLHty8cH8suhBerqfuy3ScQbgsF18KSDFS8pDMLnHFXnrUoM6DPQ1L4HE2RKbi6xaUr1YMu9naffgiCHtM",
  "key20": "5diScMozocBqGHpWTwmrJzCjHse4Xfm11xxeAerhctupZgDo2mUtWx1Bg5g39eUfXSEYmw4D64RzwJsxqk3woodW",
  "key21": "HtZKwpoSoKrUrerYZrW7thyBaLQUng9pLoVQU457t6EmXHRRHqp99CYzcSsp9eJeTQmejuuNrwbXoaiosecfXoV",
  "key22": "iqc39TzHFdGbPcMVcX9G3v85u3AWP5ENZokepQHdv6mwFT3CMbyxGqnQ4r6iVjwfR1RkzmgP6apsAytRn8qKY4R",
  "key23": "3F3o4aNWenCATCPzyXUopEUfugbRxEhtfJhv2HGXFsuwDXGMuUMZ2PB9roWtjZc5ArZ5F4FMhK4QHRU5j1KaVk4Q",
  "key24": "3LxeZqgoUNNqia3Z53hsfFM3yGJmU5cXvBoVArRaj3FsBBhXFoNxFkD7gNp4FzT68wgc3GKbJ2dPkNGaGiC1yzCP",
  "key25": "3ocQYSvM2vPjNQh5pQ9UB8Y4SY9YXqbWUB8BvhjABGJmd61NsbvUnu2hYbQdizBmnY7AxA1Lrf39J9Bd5sBCSFGK",
  "key26": "2eEzZcBm89vofs3ghLLxqcrAWRC3JdoN5wkcHinTiCfWEJzUK2xmYhCquiVrhyAbJtdmrG1cRDBSjBoA5i1wzXWh",
  "key27": "5AYqRj6zSpKz3SdwgnuidsZ4UP2QDJuxhgkAn7EWdRaMBdSJofq9iQkYSDJhgehNUYGJ1RhkfVDDQXoVKUiVNpG8"
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
