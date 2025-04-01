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
    "2hcRpqmUAzueehWX8ynv6s9Z6gFXqrNEYBgNjrERH3FvGB3JdSCCfwP7WwmVXMPeoF2Y8CMxW7JU1Lbe8f1QNmz1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RZy7GuXfrtAZS8MMbbzx4BbCQzENVTBsmNHUcbDMcFpSHpJT1oMmCRCdR4PcsTxi1rK6EUjsxLJhNb55QQn19T3",
  "key1": "5vZ87g2cLZ4ngw13z36sj6hZz9JyeuctyxWk4u33smUyRCUEyC9J7hnawjPReWaWANFkTvY2Ysap4LbyNtmcDiVS",
  "key2": "UoKhJg88WZg6j16B6GazizAFaQjXRyUTjjJjSBU2HKagmHM1WDe4AwPBHeGRirafk2Ag3KndsfmdfDpAHyZhrVR",
  "key3": "5FF9HaphYgE5Zif9VBfKo8e2cPFzYjiFtmz5hFYCJxssd3JK5H5ycHKT8i7g8RuEPCPqSLTpKnd6Pr8N7GJuAdcE",
  "key4": "3nnZUCRWXBwFRKqecYiBfm62UR7EkZ219zQgcXB1Mi443GYMHqG33XxkiLmdFaFC4YXDP4c5LZCo9iGTPToPCyzH",
  "key5": "615YuBtutsMe29y37LBVsof2Mymte9PoR3Pz9ji3LG8RDJKgQvag4ibSi7Te3Hv5aghdhzXY1zWmbP5YwxgRpGww",
  "key6": "2dL4942yFN1yxuxZmTa5eZuTpbCTSK1QDrsc6ofZEPwkdw77b6oWR5QMhESe35PcXruPjaRC81Y7pyU2Dy1z6VKd",
  "key7": "2t7F96Ls9aVc5ZHeWJU6KQqrLGNMRS9KanbVA6mZVkbzbF8p1mFUPUpFAdFX3UfBXvuwL1JCLQBK74ijBvJa8PTu",
  "key8": "zy9kjr8rp2JLSH2VXfDRsCL6bx2pASSpG1kmqXk2JKSfrDYPkMZYc97JpCfhUBcyz4ibNMRxKxvDxURnSZZWLmS",
  "key9": "26dmd7s2pZfWAaW7R6AZvbrwWV9ghAhZvjcDdPpVbDG39VyngFZ4idRidrta5wVVWhLCBVUwcQp9w3UTiap9gnZt",
  "key10": "HA4kRmDnjjpXwCos6kEPPWCHv4kZ9Dv3GgPtdA95D1yYuiPDtGtRMRgxF4KFvmjq4AYEXa93kN7Ho1QmhuKJEcR",
  "key11": "3kKVQCDQHCWsPgcZNi7Zifuqc9Stzh9xW9sgEuRqkWobxGKBZdo76HgoKcdsovRAuJ9e9fkjCDWqqY5WeLn5oA7q",
  "key12": "2ximZQ4SwHGuyPMRGNktN37R7aDnWwkD275Ppb9LdwAxjJ9TLTdTQiERRGHmaSBgK1YHMNwD6Z8xGYBRXCQ4rPqx",
  "key13": "2rD2GLpnd5a9S9UZwqDr6Fz5mzkJfPqH6rShxVHd3UQw1AvqyTgh1g4m72ixSa581EbkEJfuXyGYSahUSqVt2Edu",
  "key14": "2z2oz9fsfaxWX5KG3DAC965yh1mA95wA1dvs3idBiqnZbJr3WMTfQJ4RJWfNsKPMHUnNLpCLq6b4JnKQoLLSndPR",
  "key15": "31yTybGmQzRsfEMam6WMVP5WpoFwrFLLLVW2PS5CSFCa8W61ixxxFvevyoUnJXwKC9wAD4y977ZMfzYAgnq2x3op",
  "key16": "23Xj6nHCBGyb84qp1xwHgK2EiMBy2F1nS1GLoEFk5SZa3k3rtCWtdhUeTe45TeDBRBqpPb4qp1MzP3k7CEzXT9Sm",
  "key17": "TkdET8JhRDBgYeVuCMXP9Gy8W2WTkkpYk9DhrUg28MTJKFwcX3gB9k68MhDqne83yffmKnugnfsetqZiCxmKwB5",
  "key18": "4JfYbNuB6dmB9q6BPQEAqwUqhzoNxkwb3aKmZfrZowD7Ywvq9RXmoqm6Laog1Ktp9wfLRA2bm6XCLCevRoED85Sc",
  "key19": "4dnnqjnheqVKjUXwHYmRDHQsfEPVU1fKo9hnc2HiGgLM8se8VjNtrodYV1USAgf8m8ZXwVzLf17n5WUCLA3nk25f",
  "key20": "4hHAWDFZgLxAq4VG36m1BKK4S6itWZysiSDSCqdyNZzvaCPKzye4saQ2anh3VEUhRxPmENoUQrx9KwfnWGNULqke",
  "key21": "3kyVVGtojdSyRRqeqW9JqcnUgjVHTH2xToPsavvnMWvAHqQQHvLBheDCm6wCb5LsLuZFW5WayD3Y135LD8LuvGrw",
  "key22": "3sw2u38nfjQzYdTSodfFnvv2YRkK9enxbpvnBYtkYzfN3DRrGNKg3mQkGMNMbjCThAnRtjtLmWpktda68em1E46u",
  "key23": "35AgBenje4kUEuqZ9XQMSsYM9xNnPZ6oqgpsywjpiApVXhfdkbz6kk1WWK8Y9WzzAjBShgFptP9ie6HxjePEXthT",
  "key24": "5AhVxpDDdzqZAnkVUfPtnZGPTMRL8zKeCMN5NwdGtET9VNTLVYUJUC9QZ94aGYV99mfs8AS9kZRrVaLnDvQi5kcE",
  "key25": "eYvry6GqXbbyYvqjAuHmFNcSNLEJYsGSjzUgWakojyxbFq8CXuAX2auBET9sEbSL4nnUZALpAWHGTmhsTVdL6A5"
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
