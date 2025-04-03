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
    "3QHzUm7XGayPqsNT7UBvP5qU2RqS7Ymohw53fGFwf3Ew2pujqynigPbc8nvTDZDbJNvxE4caGiu74zuTEXDWMT19"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YkxhfWfJoR9ehFeyQ6H6eFn8j1stMVfFJNnaDc3wx1LuHHejxh8jmrMNYmkKs6rU7aykexU2aGoWNCVqiiiyKVy",
  "key1": "2PmVuQRQn6PL9VCFXRfumbWgVocr6N16AUwM4DzfjcqrqjfY2DFq2RPBZw9DdVsED6hZWHwH1pk96arC5ZmCSzHF",
  "key2": "c64CK1KaxCk4V28ZiKfMvhCSqVeEH7u1E4vHtmmUkuMBuxfCXTkXXKAV6uVTikXQsHH6LTwy3utZiw1fqEy1HHn",
  "key3": "4qMvcMHaaZWg5dX9Seym8UBrKTfeCuV5HixEyHvf5XUGUB89YdJptCsjgeroFZaY5zyNS5P2otC45CHb4kHzmbGu",
  "key4": "5QbpcWCyy2RA8grZNwdWWzRAcMu4fAgpYqnszem2iEy1CzynhdoLyVPAXdGbdNNoTTet39CFsUsJTygzmZEhUgWw",
  "key5": "mPV5ZLT3Xg31pLCLUNPKgesjuXm3sSjKUZwXniRw5jxCTmMSF7aCJW4eL1aFVo6BVhVU4kQw9nvYtVn4EVJfrJE",
  "key6": "3aivwND8RqNy2aYhTmdxGcbxdYxUStUXfB1359uiNG9ojNFrzXqYnpwid58ppTGr2qwJowTbJ4foiFiFTpNdbye7",
  "key7": "2CgxxTUD8iWntLMEqVKGM3YcxMAXuuiUqaAftDLvzPfZLDM37yCgcqk1kokYaJ6yV4xDWkpHShTKUrs6Lm9UTwdx",
  "key8": "2oMdstSWPjWPVhZrjU9b1RZi3pF6gT4Si47ZXwkL45fr2VtoMrm7ff6dLusfhTpC1KSUFRFJCfSxSmv346D2YA7e",
  "key9": "3dSzNT53fmMHvNZpEq2YfQ4zkpzdypCCzhsERuM3oWr9tGB9J8qwtAcDfwRkf7hcdmyDu66GX4hCadg9dLj1VDCH",
  "key10": "54o8xSbrTuersGxdQvmHSjd95CxK4JRh38mLmvbwy8PcMLnGFiQ9tckK1exmQ9Aqz1TPgbsz72AA6kL3tn76yAe8",
  "key11": "XBpFuvRh71M8SGPx2KDLquMvSmHNMkY4au6uzLLsXohXD2ziREoGy7vQ4qvmRTzhLeqjvxiSX1C1nMErytEJtb9",
  "key12": "3XCSQ8CcheDqpqPD69AJrYJdgWh7Epy4chTKPmzQSsaJ6Lyxc7WCrMnEcbRtvt6Zrq4okdSH6QF4wTUUKcvvjAGF",
  "key13": "3ZFb2rZ6157ariGsUGV2d5inpu6d1WG3typ1AiKfSjaJcAEvoLz11bAffKE7ics5XCPQceih4YWQJmLNnDtR2Nhn",
  "key14": "3s4CUFmABDN9aB95DhbG6uSRjetboe1pxtcJ58USzUdJwHraTXY7uLs7QAJzsFJNseF1GCE8s6f55VqBa8LDiF7T",
  "key15": "2Z7BXo1rRQm5tFoGfTxesn6rQwqragg6gAFTqV9jeUGrN91oLPaoryKAyCL4EVb8JQHVWV8NyywmQJKYheqFmBYK",
  "key16": "64vvr83nwjZ1EZ2bJxUVNxftMNt98XNpY5HHhQpDvERxNzbpMfsxcUQqpu4pfqh5x6VuCamD5j6b7o7YMSwkUz2w",
  "key17": "5icGA2765CT2bYg8zV1mApfKjUNpj6ambpPxGo5Jzrf1H7iUTyT9qMUgmZXnf2PbQGdQh9Yd9GhfWHZJskb9ob1H",
  "key18": "v69So3bovFCrH1WSNLkpM3S8NVcLht8bivoJDt8YoEKGdaqr41CGJuh9JFfdUU4TU3zszMBKF21Jrv5DrQxqzMi",
  "key19": "3DeFGMHvY4dKRJ5L6iAMdvgQEXxLKm4fBC7RARXw9bRFwQC4wAuKnXbfk5K5L3RHCB8391g3zHaCP5dvKKKtKD7J",
  "key20": "33RDibyAXb4gzdgiQ4CBNdq3q4MoJAMP5dPUh7KhXdAE4cbNN4PCCVfAYaW9ySMWG8n227rF3CahgQZ1qpesLomR",
  "key21": "39wcFwwf8iJXgvE9DYNs4NUe9XcfP1qoYCQ2ZELrYZyGTEmR8sztFHEnnrfGbZXoRYdQYVNL8AajQmtjE22faYy6",
  "key22": "23smaY4D8Q1CSpMrfUsPqRrTsKRrzqXUHeAjdWYxw35jNHLWjVj5Bp9B5bQfchCMz9QVmYpj4kYJtQy7TwSj7E77",
  "key23": "rJ2BRhVNULhkfNkV5JAJ19UrvRqcJGUnA1L8gp9MXq5oD3Rf9fS5yHtmZzaQLhQiDU53WZdbSKzT9325WmFfwts",
  "key24": "39BeSED6UjEczwxRUuhKftAHQjo5PHFwdmENcbhDnfxzrY11VSCsTLtJEBWb8c95jP3iDeKL9tvqz4cqjHy6WjUE",
  "key25": "2FmBwbSKGG7BTwakQvZm3HKkcVyVZjNGUTbXJYEi8mZm9yiF41z6R8n7Z5GFViEWn4PdL4nhiAiKr1uc2F8NyqEG",
  "key26": "2Jecw4kcP7ahXxsGRMAQ1NYgZCbFx7BeVey86m7Ceh8k2xDn3kigSSqHVeDVTokBduB3NwKwbCMaM24PbAVcxZDe",
  "key27": "34rgsKBcHPi485Non6j9jdGN3Amjh82E5owZ7v2f2N4cnGuWxiqgpXosn5v6Mp6T9MSy3XJ9qEsfXt5pSi4pvkZg",
  "key28": "4Af7swfSGj1MYK7aZNYkkHBvqQx4vp49z8Xskj2JCVSNrbT4oi5bfxsstWvB9jxrn5jNnDtoaJ8tMa9Ztx54UpJL"
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
