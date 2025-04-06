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
    "51Pc27Ctfnor49YHyZ8BYWLJb4SEnSf6rM9gRBF6GatbDYjdJerNdtSv5xMXpwEaMQEFHLGhSu6m8nCYQiEHjbT7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z1EbjPS2Dz833s4PHaUwe3CG6cCKaMhnbJ8GXfEyV3iJyWVLQwWeMxFQxC9B8DRLUX78t169zuUdj2AJghFZBu6",
  "key1": "4pV4v3zMPpfCd6pnFwDqyATotTRxTRc2qcYbMryvABtuJPBqtHT45cqMzStCHiTMriEwRE1r6EwZZxA7ufDTHM8A",
  "key2": "4X2Phstceq6LNE9V2VnkTr69Ug6uj2ENQj7uFqaYhK7UntzEDH2Jbjkisq8WREMbtoN4ZeQL76ixkT1P4WDENfJk",
  "key3": "5MzHJmHeuNMGeUKmKBbaf3urHw3CgTSkA6ULEvVxG9yCEXkQuTPyqjJXLMS4AWvRir1FcHR7dg5VAwSYvMhnqdJZ",
  "key4": "4fcAG7r7k8FWSoEXbhiuvi1zZvHxJsMg1fo8E8VPK6X32suN2VRq4jnzz71MTMZQVW1De9Pw1jEqeL29tLKu1PWv",
  "key5": "3R4GFb86mP5hwhPd6AMoYfNzufTEbEzzHhS1dmLZqkS2LwYBfjfQ9qhaWkB2UyoR9zfHvDJacQZC9rbff33NqVuC",
  "key6": "5Nb3rUGCMSLWrBEjEn8cv8NqDCQK5EMvewrCNVVVWVJPiP38v2mKjTdU268XfAjjpmteDaQYagmvMaeyPp3YwJyQ",
  "key7": "UcbyFJZhcup8XHbZzYnktscdSVzUe2JSG6ihWnpuUE49NbBNoFepTaNRFzz1JzrzmTKprfFBNbjpBb6hTi7JKkU",
  "key8": "5rqgouYJY5687eBD4ubPEU2hWARszdLjWm17U5uPfTfWAqS4cg7LqSKt21hvaUPLi6ALqruQrDZYAxuHQyACfp5N",
  "key9": "3Z9W6EPLYP9mwEAnYc5UchzHuog7LrMLmHcE1u69ybzgySBd4ZQD3qWVNuWMyqEGiiMZdrZVbYGK7pVZx9PXVhFe",
  "key10": "pXYNwTkpmVTyVEDp7XPDm3topQckV7nyyAgwCGR9caRr7pWErL4LyJueQp6BkpDJD5piBpT4R33afc4XhfhJ4Av",
  "key11": "5nLQu1QsvP1thdPLRtYc6ac17dKPfV3xzKAFK4bQAFmY2hmTWtuEWk4ghjhawdFTGZ3DTVMtQwrtBEsX2oYH2A6F",
  "key12": "4jzwEDKtLVzgZrjFG9S1SD6CwqzN93dVZX5q8vaYPYW3XvSqw38jtbWpaMaxSmZGXVXFG3FnxXVJeu4pxYgKTJer",
  "key13": "2JhknbVXSWngJApnKrAYHUUCiN31V7KgrNqdEZdTDsddePME9ZwTPPp9dTgC52ZqyqCxCX4Z8ne1TWLLfg1yT8km",
  "key14": "yxWZF1to6rUG88XbWHJDStXdJ96RhXEvJx1xZBWqX33zHrTMsKge5VHSq2VdxaG9xgCMYccvni1brx5fZAmeD5v",
  "key15": "2rqmUXkvwU8J4wMY39tPudS42M5buYvgsnFnFcptEsxDPrzCJiwZuKcftTN6LQJ65owTUvMLqPe3LH6DgPx5Xusj",
  "key16": "ajGLkHJX28Bph87yMs6VbLGgwS72ohNTi2F3mqGJ3uptemZPXDARnBBY5sAmXHnqwnanPpCv8zcqy5AgX4NGtWq",
  "key17": "2rUobi2iAd2a6SwhFgmwWTQAHzLpfikUZL7RKec9mNMWDE9HCNDqEYSdYuiNB4dHsSH8dPSgWwtQNQ1nmdyuPUyj",
  "key18": "2UgzMxFiENQHYwGDn4iz3T1UC9iGfsBZxRe7pKJdvr8SuVBeYRgykbW9QUKNoYKh71g7vY1dRQLBSb2eXxkkTQGc",
  "key19": "3EhhZ7L4wFHJaZECHa5TQyASTCGpqBBLTgdw7hoD5jH1FWovXPj2DwUekvkZNXfBiVB1v98zAtJR9Yz8GKCX5msV",
  "key20": "26ng59wQxcbSpCJbaYjUFttKt8iuXfdEhwytzS33yLLKu7SwB8MNxEUVYDemDmUWpXXE747jRf5bpBjevyFd2Azd",
  "key21": "46bK3oCemCpj3zupoLh8dLiqS5UNjZ41sDCn2DYwcAPAUayodGgqmBpp2o2yJJw97tNy8ZGVSpDn2FS2M2omusx9",
  "key22": "5kD73cbqaM53sYYMSGPdWbY92UAsm9uAptTtdwum6g8gioD2DGSPQwSFis8vPxoo5pc8eDVHSLU7CB9Vq7jaMc2Z",
  "key23": "3w7wxAmYPqtGUaZFh8mb87MbtukNkpoJ2Vp4DdMk7FaM46k2fkFUhvZ4TuTaoKws58L96Nm2SreCjzyt19VU4G7S",
  "key24": "2CkfvVZK9fd5d5k3nPY7xieiV16ujWtqjk4P95B5tRrf8fnneK8TgPciMdM78dFjz8WZBZUbiDrAoJC7p91RjU5X",
  "key25": "4MouiA96iCJcpdrnUXcxJhAtL1gZL99PZnfgvkWV1z9baPQoHaLCKDmnkfFo16EQbjux2YSndsC4ygwJT8TNUNPE",
  "key26": "2Loc7Wi3U8T3egoxueatFTcdpJfL3BCuRsQu7sCXWW7xFmXPWubMn1KGsYsdEKL6dGMWgpoPQFSVjNZFhikygwyk",
  "key27": "5VKkMEeKAzacBjWRU8N7g96bYjBi4B7iLa6FaJRZhTyCRforQKFwdC8ttV5RohLbgrSSU3AS5aXB8tHX8ksHDFr4",
  "key28": "h9n69ZnnH7pRsk6ZSejze89gMMGPRx7A7rj6AWMCYAwGyxUwzMWqaLG1rcxAChS2511LrnPaTEVnDdTyrdVT23u",
  "key29": "AmJ8dtFqUqjMNiEU4bNm3k6F4U6sBB53vsJ6gPhzJQqmB6vkasmSb5LGDtAuj4DdPJaXw6TXNVuRctuupQuanej",
  "key30": "5Syt7d6RKV5ncz1wSp7t6cupe3nbDr1wPuPVGVN6eQSPJjyfoxLznku3cpB12xvZj5KiFJehkUA4PopWQ1UnigN8",
  "key31": "3otHnfhWn6Qk9tbG9TqHp164foM6FQFdPxKps3vVG5BoWEdhvb6TtVQ2XvyBHX6etRiD6mZNYXzh6AiJ3juZksKe",
  "key32": "36PUxdxk2TSdSpWZ3rZDQTEuj3nH2H4ET2gTHrziQ6WcZJPhN5yPtLZKNLUvNxgABxkNZ7HNtvwETELFYpBZjjjL",
  "key33": "22aisyAveasukejkymCJSqFRPbC5E9DQgKBoNStC6jJ7fKyXN4PE99GLJXDw9WAs6SWsYn37g53emGdJ52nHRx8x",
  "key34": "3KxhcYHMbY145P9MBzbA5juNBU3y4mCBcRnaxeBZSCAXuqVqo6ymX8uKB6UJi8573zbhjExjzqDto7zEgx3Zyr5d",
  "key35": "5icU2zivRUr8gVayu6JMb3m3c26SVQG5TVi1eiZ4BXPKPZq8JijTERbruRHGVs5DqBNFaPbWpS9p9MfFESqV3ZF5"
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
