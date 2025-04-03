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
    "3vYmHo5DKwfRKFTtqSkdzNaxAz1Di89AUvYGEuGr39V4zmHFfkYgCcjT3JDFeQsWZfdwjtBS3mUrB7AeqDoHtYVd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PuGUTPyoTYfMLU3LZfhpujJB4udW3MtyTXRYCREDcrbWnRG7w9i4z9SUG7m6St4X2XMsSEi9M63WMtDKqiTxeCV",
  "key1": "2ZfPDxiCUejHtrebQgCkq54f6BxoqYDz1MgD5YoosdJNDVmLex9wioN6Rehh1ziqc3Qb3EKYooseqmSgFWWnd1Se",
  "key2": "5LPZgfwEAwUft1tTEbWdL5zhv8xAU7c6zTc5LWNovQJwhj5WTW4eoxNAwfRqczEGDsbrTQfCLjHNo5nfM8MRKEpF",
  "key3": "2fLNTQraiYoehWtxg9XQr2R7QUEQrU4y8xzrMaJzUejrtPf6eSBC3ezLA3Kbiz4K99dQiFNXa1jqWw9PmfUNpTqN",
  "key4": "5vzUdSZSmvCFvbemdHbgePXCz6tskMUNjiD21ovPmkxQ5mMdtYxGF6irFq9nn2FVkBRk4RLQdT47KiqFueNjRxkX",
  "key5": "4L4Td71dUyryAWR8SuZiL82jBZR58fUFpU37o9YfZjDcsa8fC4Qh7dWBTBxU8p2DPbYLQWfw56km5iidaGjAbdVL",
  "key6": "1Ftgg9gStb9uGF6EX5eWRJcsGvSSQWDwfNztvHe9omAyNoGJZTiRFaC5wjZa5SDnb7FszLDggChDepDhfpJezDQ",
  "key7": "3hAx6u1giBRaJs89jSbRXQrLMYzA7GaGyeU3kVVMjSSSJTs6ZyXQae2AQGno2p79Qe1QMvcbE7EmCweXZbCb2LPs",
  "key8": "3yzKkxabcbxNnn87jSH1SM6rqXBM595G8jpXAVwsbkshcZhxUurCLccKMF5UvwtvB4iCVp26vYqxT2zNH2xoA1av",
  "key9": "5iceZiWqYbJiVEwPDaoNSMyYDnjH2RiDyMmRU9iFtMmzW9tcNq6XhyhKpZWtUtzyTc6nYrCPuHpjaTFm81qv7Dv8",
  "key10": "tQK75Q2pRufjQp6zBKRoyZ4dq7mZmcgUkDnkYALvEC7Pj84XbPUmnFu1VGYsRrpupX13eopszhisfDky71AtnoZ",
  "key11": "5MJnVe9ju3t75GTrAbYqbBQnHCnY8AEL8qtJZSwCzP8e2B2zwRZF98RX1i41uJgrZLkKus2ucAySMSqatipZTKtL",
  "key12": "3rM4sqUEkCYhPNhgjSXKMW7McKowMvMu9zC3wpcdz9dM5JuBGWjA4atTkbWsCg4pPAEZ1H3PXiEMeVjz5P2GSqds",
  "key13": "3GNM1jbcsbwxXWibkz5aWNS5BoiekQHjFDP5Vt4SA7nFEawsP7f8tDP289F2SxZMY8mjbEYSFxMfnSg3wrakF1rw",
  "key14": "5cMposswA1V1g8vKSvywCEHo7WwvhbGxAGBfM9ZTaHT2ffCuLSbDdPZaBiTAzQHnkoaNm8VXtdTCZLUkL4kBnZxK",
  "key15": "5awqaAciPdUjtsQQQGSha62iPyKsDi6jqoXuFumrc8mUL68gjgkTDynNtENkR4UH1xKT4hEmqadwyfNTTRJ4biN3",
  "key16": "3qSKmyxNXRaMRQS8Uu3rX5w3gCja15PX8pm3jjf4LUWvty8JeY7crDz8fKgZqx9Tud6aAvQzzhTeHyJ4zPjWE4Gi",
  "key17": "29e621HNzr3aa1MCuWutsa7eTLMaZHHdEuMLUcVUpb8AME6nctYeQXXzHhutzTZJ4SaJKo7Myt7uuWJr8HVb9jmS",
  "key18": "w8Zo8jn9yvACFwc79fwNfJSpK7WjQN8WuM89cV6mFNEdRwCte4S89SydDfLTsnTkiQ1YHhUHhUZLrrDxhvsS8sK",
  "key19": "E2ZdgwXFu7ndELiR3oUKiqAT3x5EAa5XBUAE9jm518uKe6TzFK4dWPRRuob8KbLGc9GtM28uiMJ34SG81yZcMXC",
  "key20": "2tXiT3GeX9P8qaCbZ3Ytytc3kwpNSRTBLKid6TXEmF8EE7JSLJNBzSw3m6i7FGNUkT3rwLWUFuDSP98nN3WWdgnK",
  "key21": "3okC7JSc49YP21tA65xkrDT5HdDh3dAxiDhmXEY3g4ArFyRpoEAmhD2PrxLjXJSBmzZomM95MrzsJaHQFjE9E5B7",
  "key22": "WXzcnyMVdbVXBXKTV72UkYRFyb1Tn9EN5SiGEUX8iTu8pjvomEQhbgMGxKxVF4VbaShL1ptdo2KbCjLczZVy9e9",
  "key23": "53WFjkZdB5zbsfTFonVmpz6xyA7eczUgxNKH29S2TvgQHVDr1pPpPMY1YbG2txGuNZmcQZhZcqupojb9LNy8hRun",
  "key24": "2pC8G6H4hnjHNDhHZWXbw7UFTRVwrcrxFbWntSGXnkaRC8HJep25RaJaXVq6r2TegCLZPDxrFzR2ZdQ2CsTKaHGt"
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
