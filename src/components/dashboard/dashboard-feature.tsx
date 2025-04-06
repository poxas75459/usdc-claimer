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
    "28jbpzkCzyzZfKBfJWtbMBiSfJrqvu8fkHjj2BwcBZUqsciavd2PkxenQ5kmrhfipDAfCWrK7FzASLbvuAjRknfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SLhVVByF1kGrz292u4rDySkWca1yrdDnYNyDDFYSf6V6AABLqowENZRRexK3aXVLRucDKw2m9tf5h8RJsMU2mQZ",
  "key1": "xRcknJQm3vG2PyZAR8cafgYMALJF66d2eGb7P5rzeiZR6ULnhfDYF35BCRqjUXM5rb7P4k2PxigsNXPuTZHWLZW",
  "key2": "4zYV44t2HmF93z3YTcSV4B5xGdA6VXdJ9drZT9aJsSubDFgNPJhFPTa214AETqr5nQw8HpBnJAi1Xgznj8oXFR2B",
  "key3": "5mprjyMgXhTm6zLSs4r8wni1gRPWMD6XqqMukYXRUGXujx9uRXsRJCXLVjYREp7VNHngFfeF1aDrUff4AYpmr9mP",
  "key4": "46EHGEAVYPsYd2RJU3Q32xUxeQdxyPfYGUhykv76doydv9YffivxnnWLXw3kRHkWw4E1uui8UFbaNu36yU923fwu",
  "key5": "avrZspUBrPYqeAjyvARAn2WYraAJxf7w6ZWmiiiLeY5sFBxNu2VeJJpcSphw7trQKuXfzuGxtFbkDH4nG2YwjWL",
  "key6": "2fyceNgZ9DDUhUajxyerhQhitJEy55YDMasSV3uN1rGp6rLLkHErRBonc3JDAvgo3xkfBEjaaaVcZkgzHUbHaYxa",
  "key7": "3XcbmHpgXejNrKe1uRHWLhTdLa9rF8uhE5Lwroeu6hsPK5MvQJeyAvuMewpwvzv4Yy3v575ky1qD1Dvv68hNoH1a",
  "key8": "3r2uXWQBLMLBJL9ai2mgpYU5n7QYyxqQkBMGMzcbr3XqkeefFnwmn5SZ8k9MhoqoKgeChsxpToEXgAE5weMLiVtF",
  "key9": "3WLbDFrU4ELwZgB9rQZXgWiErgwnDgLHjbKAaLdTQwP3spWovMgDJak1m8hCxfxdPmuQRfghc4XTftGDvovz8XYn",
  "key10": "WDL4SboEQPV6d5JsQn1zWRSoMnDj2xZ62KkzQTDrJMFCBPwkRmuErcsQJufeu9wkmPU33KLjvyunioVGACS3Qg6",
  "key11": "43hKrqoXgwH5hDqog352L5bjSDwLyBxgCHLX5vXske5HNBwFSwGB8UMBTJy8tYLVR138cLfvdgwWP5HfgscuUHtk",
  "key12": "2LeHdZFk2PGF2Pf3vmLxGoABBrygHqff1FcpvXoPqKEwLryGMKKxfSrjhS8DEwweZaoTkgowMnEjNaYSGzSJGTd4",
  "key13": "4pPc8L85mYMdHM7JdKJm3WHHGaWfxe5sBc2aYxeGTpSyyqgUvJ69Ymi3ehovYSvvJJjRGzx9NRvbypkYDVE9RVw1",
  "key14": "34ji66sQN9gFUdMoDEM8BSA2sdhmwB7TgWuocEZU7Dar5iufkjiWPxhzKwiT2M4q5pWniFmECVdRfD69Awr86oxe",
  "key15": "SVAevywQyZtjdcVNSGkVU6kXj1Yo9xyetGxczmyFJJUhRkLeAh3cLk5EzDoKabWGsnDwUmRSP6D4jrC2EpQXc8c",
  "key16": "4bPXRubYLnFtmU3AUEwVf4xDDYxwWnhyuezqL7DkBijgF3W6CTSjdNSgVGKf24hhLUpWc3HzRQWyhCd5kb5SsijX",
  "key17": "5ghbvS1RcEgcYd7JT9Vymz3r5caHAZS3BTvdnT5GzXH2ga89AyX7RkXiwmNx4jx3DsWazqozgxGFAvR3gCAQ7vEf",
  "key18": "eP8pykoHT6hFJCZa2ADCWVbTkDgui2pTcb8TzFvNegHZd6EC5ZqDVCScLQYmXUjjPB6iNqmVEvwZJpoaUNmMVHa",
  "key19": "2Kco4iQLPFAJyue3zCxhsLXgG2mTXGAUL2tLUZMaa3z4uWwYxuKm9GbvYp3vTGFJWaqFvWWvTZvmko1M2VSQrvtg",
  "key20": "58hymhmgF27Bfg2MoSGRsVyjRHEXn1CnaTTPwWftGpn7KpCGv5FCDGuRB47rPcvBGfhspKvMGiRiukHNB67LyC2S",
  "key21": "3EwUTJB1wY1qH4kQaN375Tq3bKbSF1xbF12n92ufqDiRY3Y4bYPE4psVyQjP19K4yLqYo7ouNS5bHLgYDxkE8M88",
  "key22": "2FfCWuvZLBSCkbv1z1uJ6riL7mFKutJ3Q55g9dPc7rnacRw6Cf2XzapFn3dV2E6VRRMcYWMVzfGhX77bGcW8YeoX",
  "key23": "5siq5c4wuWkqEEnfZAFekzRLhzrb5ohuFZdKCpYBBydrw9ceTtSMw4ZjQAUF8vSAAeMxwfwUcn1J68pzogLobvNn",
  "key24": "63hbRtuiTQ7UXr8xLaVs68fwLSRyG2nwC6dKcN9TsxDAPX8QGyDyRPxiWCWJFodpB8ScbAz6m6hEk5V4YxZvq3xJ"
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
