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
    "3cab26uM1iA6Jd8JUm5iEXj1xxrRhYyRLF46gFR4PKwAfYHtypKXyFngSCSkRvHBhfwG6hz2EFdJHPFP9Vwv9nXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5njtEYGzZscrV2SzcVe9LdNA3vt7kwPiVbQQar1xX1QdestRWd8vxJizWajQN83FcRm6hc7Xxv7vdGUqy9TMJNj6",
  "key1": "4i6W9bCNhbmfFiLg6yLV3tJPhGv9kNy3cx3ywr6sohXSs4oaLJe9yHgGGfaGxQ6Kf41XXG2pgL3Yyd7eLPRycdmt",
  "key2": "wZ1MEy18e22usSFNwzLbzzpDVjc9CbLMk2rWwhRxWkC3GXjDVzpJToAmZ5Y8BmoBjLWGHVWcZzeAcscByhVJbqg",
  "key3": "3VMJB6t7AXJCCnLG3P9mh4kaTu3JyYumKJ3aExYHHribFa4rgodVWQZvAyjosahwUaqdKYvizWMznNe911Gkw5CH",
  "key4": "2bUVZHBatyPRhUsrSw28ogzvf6qipSk6N6K5k4RXhVw2VE8GXvGeU1FiQfMU6Ucekhc1WYXyWeZ3iGHrPZLcZkRv",
  "key5": "55uCg25FvTwdsgEXb3T87LrZqiGkfA6HRcPaWJiV7Mzq86rbPunmKUHckVTYSGgyMcuw25fRmUSwCj9mm8LdP3nF",
  "key6": "4nfqNTiFuB8R9RV7m6LUkgoXkUDYBZFnR2E5Zdj5RTvKPVHJPZNvkJGmdY7JjSNFfoSxJHmEQknmHwYHEFPdCYm8",
  "key7": "4nshyJi1PeAiUBhFHyxCe95J6H6ec4uUF2jC79ecV7wDRiqpCyjyGufntXhGBpMimHXTbAvdD5uxfquXKKyccpEr",
  "key8": "4EuUm6YRpDUVstoXjDcnvW683mG237bgyNgdiJqXhgamaR6t15Ab6qkrpZvnHd6R753WEWCV3G7EbJtGhby1WsHo",
  "key9": "4K6MBZ7fcadfiZQb19zGHLHMgY5w3HASSNHTorwF5m3Z22L6GNjmLDq2KLpRnXn8H8bK4DVseGfsLmrmU28Ltvw2",
  "key10": "2uBHT6mhtyWCXfFdHzQ1uB6NeitKUF8PnK85MDqXkiP7XXzC52Pp1Ls2Zv4YGF5nFmn4RD6YLehT297iA2DNjb8C",
  "key11": "bw2wgFkSEhpZo2m5g4WzLxnhayHops3fL8QaTirNdr1VfY4iTsjMn1rNv28LcjAE1ryZw4oCH5oUx88fdFnz8CM",
  "key12": "3vkH9z69QV1uqYji4TBnkYx1GjCJxuPz35MBYBbBr5aHTjrXLiLdkG8xf9HeUvsq2XYJdtAZgj2bVHivFfchStCZ",
  "key13": "5hEcJpgEEdopWhRU42yjmmf3eNmnZMYVJz2t6geDBYpFNe33Cs2MpexThhX3HXcfAnJnVLM1iCeWWK9m5kMQXY5D",
  "key14": "5vhz4qmgZZB7rZmsyNr47BrH4k7e86Jb991aGYHss62rQcAyQD4NJeBmsUN6MhZSGvzCq58Z4qnimDkt58RGbTji",
  "key15": "5pkTLoDzvR9Ss8uLFVyMLYSzRhHWBawCNjUdcjwXAsyN3n1XcaEoqYSs1jYTfxfMLw4mMLXLJPUz1tbEPKMeGhhh",
  "key16": "4gDitHPfoATBt7AWXcqVEoB1qcbsYBenXVvXPJqjwtqxLa7J5Sz11A5GUBJdR64YkUeKxfLjd8Uj1SnHTYCQrwt4",
  "key17": "5JyBQm2X196rBsqknNVcPX84FQrLpjJsjrHgDAqMD7d3vxxwg1kYkimvSNnZDAAqJw6Hm2ZJAJAswe9gXUmUW1K3",
  "key18": "dnTpaddzjso3tMvqa96eH4Eg1YYFtzMHwqufPoE5AL6U2DVy1mYaKMFFtews3J9BKi5yAmZ6PB7cMsooG9TbSnR",
  "key19": "3UHJA9cEbm12ZKq8cdzVCs6YocADV3yfARoau7NbL78z1ZfmsjZKtb2wmneySe99x7wniGXtVKKWVKcoD9Gao6Dv",
  "key20": "2QXtkfg424hsGwEAs91h8WDyDrwz2MBQofUudsmCot7RJfs21zZ2x6TGMcYrJYU8Kkocz2yFTTKzVdEHDpyrCz8J",
  "key21": "2Ainzqk3m6w63DkeF7SwVMzsGjvNfdF4RoNf1FXuWqoFrCeSuGGHdrKE7MuM6FoX6BYhoyYKY6xj6TKuv2QtcADi",
  "key22": "2vLbqWvftZBLaYKa6JdWnfKGsgFfLaJX4HqfSXags29HVKUWSnaCLAgNLBz1oLwpzneMa41hjmUBBvP4dounUmZk",
  "key23": "516y7zrT3fH8vJT7aQF3rXX6wtpYxG6ecGc7Db5eciKJe8nSexs3NMH2mwfM46knETcqHTvJ2KeEBLPM7ZyGV8cn",
  "key24": "1VoE2FSRhb2z7W6Utc5xwjwvFvofqNFnpwTtPSKxnvBUjGiMeFgNrUvv5Rwc4VKrnfcDfmRQTN2apz8VCD4WQL7"
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
